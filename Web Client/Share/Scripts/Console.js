var g_aIncomingSharesModel=new Object();var g_aOutgoingSharesModel=new Object();var g_nIncomingSharesModelLen=0;var g_nOutgoingSharesModelLen=0;var g_bHidePaginationRows=false;var g_bSearchListing=false;var g_nTotalNumOfIncomingShares=0;var g_nTotalNumOfOutgoingShares=0;var XML_LIST_CMD_SHARE="share";var XML_LIST_CMD_SHARE_TOKEN="ShareToken";var XML_LIST_CMD_HAS_PWORD="HasPassword";var XML_LIST_CMD_DATE_CREATED="DateCreated";var XML_LIST_CMD_MSG_SUBJECT="MsgSubject";var XML_LIST_CMD_FIRST_RECIPIENT="FirstRecipient";var XML_LIST_CMD_NUM_RECIPIENTS="NumRecipients";var XML_LIST_CMD_NOTIFICATION_STATUS="NotificationStatus";var XML_LIST_CMD_TOTAL_FILE_SIZE="TotalFileSize";var XML_LIST_CMD_NUM_FILES="NumFiles";var XML_LIST_CMD_DATE_EXPIRATION="DateExpiration";var XML_LIST_CMD_SEARCH_SHARE_TYPE="SearchShareType";var FILESHARE_TOKEN=XML_LIST_CMD_SHARE_TOKEN;var FILESHARE_HAS_PWORD=XML_LIST_CMD_HAS_PWORD;var FILESHARE_CREATED_TIMESTAMP=XML_LIST_CMD_DATE_CREATED;var FILESHARE_EMAIL_SUBJECT=XML_LIST_CMD_MSG_SUBJECT;var FILESHARE_FIRST_RECIPIENT=XML_LIST_CMD_FIRST_RECIPIENT;var FILESHARE_NUM_OF_RECIPIENTS=XML_LIST_CMD_NUM_RECIPIENTS;var FILESHARE_NOTIFICATION_STATUS=XML_LIST_CMD_NOTIFICATION_STATUS;var FILESHARE_TOTAL_FILE_SIZE_OF_SHARE=XML_LIST_CMD_TOTAL_FILE_SIZE;var FILESHARE_NUM_OF_FILES_IN_SHARE=XML_LIST_CMD_NUM_FILES;var FILESHARE_EXPIRES_TIMESTAMP=XML_LIST_CMD_DATE_EXPIRATION;var FILESHARE_SEARCH_SHARE_TYPE=XML_LIST_CMD_SEARCH_SHARE_TYPE;var FILESHARE_TYPE="ShareType";var FILESHARE_ROW_NUMBER="RowNumber";function UpdateLastUpdated(nShareType){var sLastUpdatedTxt=IDS_LAST_UPDATED;var dtNow=new Date();sLastUpdatedTxt=sLastUpdatedTxt.replace("$Date",toLocaleShortDateString(dtNow.getTime()));sLastUpdatedTxt=sLastUpdatedTxt.replace("$Time",toLocaleShortTimeString(dtNow.getTime()));var sElementID=null;if(nShareType==SHARE_TYPE_INCOMING)sElementID="IncomingLastUpdated";else if(nShareType==SHARE_TYPE_OUTGOING)sElementID="OutgoingLastUpdated";$("#"+sElementID).text(sLastUpdatedTxt);}function InsertShareIntoView(rShareObj){if(rShareObj!=null&&rShareObj!=undefined){var sParentElementID=DOM_ID_INCOMING_SHARES_LIST;if(rShareObj[FILESHARE_TYPE]==SHARE_TYPE_OUTGOING)sParentElementID=DOM_ID_OUTGOING_SHARES_LIST;var rParentElement=$("#"+sParentElementID);if(rParentElement!=undefined&&rParentElement!=null){var sLockTxt="&nbsp;";if(rShareObj[FILESHARE_HAS_PWORD]!=0)sLockTxt='<img src="'+g_sAbsShareImagePath+'/icon_lock.png" class="colImgConsole" alt="$LOCKED$" border="0" />';var sDateCreated=FormatTimestampForDateTime(rShareObj[FILESHARE_CREATED_TIMESTAMP]);var sEmailSubject=FormatEmailSubject(rShareObj[FILESHARE_TOKEN],rShareObj[FILESHARE_EMAIL_SUBJECT],sParentElementID,rShareObj[FILESHARE_ROW_NUMBER]);var sSender=FormatRecipientsCol(rShareObj[FILESHARE_FIRST_RECIPIENT],rShareObj[FILESHARE_NUM_OF_RECIPIENTS]);var sNotificationStatus=FormatStatusCol(rShareObj[FILESHARE_NOTIFICATION_STATUS]);var sTotalShareFileSize=FormatTotalFileSizeOfShare(rShareObj[FILESHARE_TOTAL_FILE_SIZE_OF_SHARE]);var sNumOfFilesInShare=rShareObj[FILESHARE_NUM_OF_FILES_IN_SHARE];var sDateExpires;if(rShareObj[FILESHARE_EXPIRES_TIMESTAMP]==DATE_MAX)sDateExpires=IDS_NEVER_EXPIRES;else sDateExpires=FormatDateExpiresElement(rShareObj[FILESHARE_EXPIRES_TIMESTAMP]);var sDownload="";if(rShareObj[FILESHARE_NUM_OF_FILES_IN_SHARE]>0)sDownload='<a href="#" id="DL'+sParentElementID+rShareObj[FILESHARE_ROW_NUMBER]+'" onclick="javascript:OnDownloadFileShare(\''+rShareObj[FILESHARE_TOKEN]+'\','+rShareObj[FILESHARE_TOTAL_FILE_SIZE_OF_SHARE]+','+rShareObj[FILESHARE_NUM_OF_FILES_IN_SHARE]+');return false;"><img src="'+g_sAbsShareImagePath+'/icon_download.png" class="colImgConsole" alt="'+IDS_DOWNLOAD+'" border="0" /></a>';else sDownload='<img src="'+g_sCommonPath+'Images/blank.gif" class="colImgConsole" border="0" />';var sDelete='<a href="#" id="Delete'+sParentElementID+rShareObj[FILESHARE_ROW_NUMBER]+'" onClick="javascript:OnConfirmDeleteShare(\''+rShareObj[FILESHARE_TOKEN]+'\'); return (false);"><img src="'+g_sAbsShareImagePath+'/icon_delete.png" class="colImgConsole" alt="'+IDS_DELETE+'" border="0" /></a>';var sRowClass;if((rShareObj[FILESHARE_ROW_NUMBER]% 2)==0)sRowClass="rowShareEven";else sRowClass="rowShareOdd";var sInnerHTML;var sHideClass="";if(g_bHidePaginationRows!=null&&g_bHidePaginationRows!=undefined&&g_bHidePaginationRows)sHideClass="hideSearchRow";sInnerHTML='<tr class="rowConsole '+sHideClass+'" id="dlhistrow'+(rShareObj[FILESHARE_ROW_NUMBER]+1)+'">'+'<td class="colConsoleHasPword '+sRowClass+'">'+sLockTxt+'</td>'+'<td class="colConsoleCreated '+sRowClass+'">'+sDateCreated+'</td>';if(g_bSearchListing)sInnerHTML+='<td class="colConsoleSubject '+sRowClass+'" title="'+rShareObj[FILESHARE_EMAIL_SUBJECT]+'"><img class="searchtypeico" alt="'+GetSearchIconTitle(rShareObj[FILESHARE_SEARCH_SHARE_TYPE])+'" title="'+GetSearchIconTitle(rShareObj[FILESHARE_SEARCH_SHARE_TYPE])+'" src="'+GetSearchIcon(rShareObj[FILESHARE_SEARCH_SHARE_TYPE])+'">'+sEmailSubject+'</td>';else sInnerHTML+='<td class="colConsoleSubject '+sRowClass+'" title="'+rShareObj[FILESHARE_EMAIL_SUBJECT]+'">'+sEmailSubject+'</td>';sInnerHTML+='<td class="colConsoleSender '+sRowClass+'" title="'+sSender+'">'+sSender+'</td>'+'<td class="colConsoleStatus '+sRowClass+'">'+sNotificationStatus+'</td>'+'<td class="colConsoleSize '+sRowClass+'">'+sTotalShareFileSize+'</td>'+'<td class="colConsoleNumOfFiles '+sRowClass+'">'+sNumOfFilesInShare+'</td>'+'<td class="colConsoleExpires '+sRowClass+'">'+sDateExpires+'</td>'+'<td class="colConsoleDownload '+sRowClass+'">'+sDownload+'</td>'+'<td class="colConsoleDelete '+sRowClass+'">'+sDelete+'</td>'+'</tr>';var rTableBody=$("#"+sParentElementID+" tbody");if(rTableBody!=undefined&&rTableBody!=null&&rTableBody.is('tbody'))rTableBody.append(sInnerHTML);else{var rTable=$("#"+sParentElementID);if(rTable!=undefined&&rTable!=null&&rTable.is('table'))rTable.append(sInnerHTML);}}}else ASSERT_CONSOLE("Console.InsertShareIntoView: Invalid function parameter(s).");}function GetSearchIcon(nSearchIconType){var sSearchIconPath="";if(nSearchIconType==0)sSearchIconPath=g_sAbsShareImagePath+"/icon_incoming.png";else sSearchIconPath=g_sAbsShareImagePath+"/icon_outgoing.png";return(sSearchIconPath);}function GetSearchIconTitle(nSearchIconType){var sSearchIconTitle="";if(nSearchIconType==0)sSearchIconTitle=g_sRequestFiles;else sSearchIconTitle=g_sSentFiles;return(sSearchIconTitle);}function AddShareObjToModel(rShareObj){if(rShareObj!=null&&rShareObj!=undefined){var nRowNum=rShareObj[FILESHARE_ROW_NUMBER];var nShareType=rShareObj[FILESHARE_TYPE];if(nShareType==SHARE_TYPE_INCOMING){g_aIncomingSharesModel[nRowNum]=rShareObj;++g_nIncomingSharesModelLen;}else if(nShareType==SHARE_TYPE_OUTGOING){g_aOutgoingSharesModel[nRowNum]=rShareObj;++g_nOutgoingSharesModelLen;}InsertShareIntoView(rShareObj);}else ASSERT_CONSOLE("Console.InsertShareObjByRow - Programming error, invalid parameter.");}function RemoveShareObjFromModel(rShareObj){if(rShareObj!=null&&rShareObj!=undefined){var nRowNum=rShareObj[FILESHARE_ROW_NUMBER];var nShareType=rShareObj[FILESHARE_TYPE];if(nShareType==SHARE_TYPE_INCOMING){g_aIncomingSharesModel[nRowNum]=null;--g_nIncomingSharesModelLen;}else if(nShareType==SHARE_TYPE_OUTGOING){g_aOutgoingSharesModel[nRowNum]=null;--g_nOutgoingSharesModelLen;}$("#"+rShareObj[FILESHARE_TOKEN]).remove();}else ASSERT_CONSOLE("Console.RemoveShareObjFromMap - Programming error, invalid parameter.");}function GetShareObjByTokenByMap(sShareToken,aShareObjsMap){if(aShareObjsMap!=undefined&&aShareObjsMap!=null){for(var rKey in aShareObjsMap){if(rKey!=undefined&&rKey!=null){var rObj=aShareObjsMap[rKey];if(rObj!=undefined&&rObj!=null){var sNextToken=rObj[FILESHARE_TOKEN];if(sNextToken==sShareToken)return(rObj);}}}}else ASSERT("Console.GetShareObjByTokenByMap - Programming error, invalid parameter.");return(null);}function GetShareObjByToken(nShareType,sShareToken){var objShare=null;if(nShareType==SHARE_TYPE_INCOMING)objShare=GetShareObjByTokenByMap(sShareToken,g_aIncomingSharesModel);else if(nShareType==SHARE_TYPE_OUTGOING)objShare=GetShareObjByTokenByMap(sShareToken,g_aOutgoingSharesModel);return(objShare);}function GetIncomingShareObjByToken(sShareToken){return(GetShareObjByToken(SHARE_TYPE_INCOMING,sShareToken));}function GetOutgoingShareObjByToken(sShareToken){return(GetShareObjByToken(SHARE_TYPE_OUTGOING,sShareToken));}function FindShareObjByToken(sShareToken){var objShare=GetIncomingShareObjByToken(sShareToken);if(objShare==null||objShare==undefined)objShare=GetOutgoingShareObjByToken(sShareToken);return(objShare);}function EmptyTable(sID){$("#"+sID+" tbody").empty();}function ResetIncomingListing(){EmptyTable(DOM_ID_INCOMING_SHARES_LIST);g_aIncomingSharesModel=new Object();g_nIncomingSharesModelLen=0;}function ResetOutgoingListing(){EmptyTable(DOM_ID_OUTGOING_SHARES_LIST);g_aOutgoingSharesModel=new Object();g_nOutgoingSharesModelLen=0;}function ListFileShares(sReqFilePath,nShareType,nNumShares,nStartPos,fnOnResponse,objOnResponseData){if(sReqFilePath!=null&&sReqFilePath!=undefined&&sReqFilePath!=""&&nShareType!=undefined&&nNumShares!=undefined&&nNumShares>0&&nStartPos!=undefined&&nStartPos>-1&&fnOnResponse!=undefined){var ListFileSharesRequest=createXMLHttpRequest("POST",(sReqFilePath+"?Command=ListFileShares"),fnOnResponse,objOnResponseData);var sPostData=("ShareType="+nShareType+"&NumShares="+nNumShares+"&StartPos="+nStartPos);ListFileSharesRequest.send(sPostData);}else ASSERT("Console.ListFileShares - Programming error, invalid parameters.");}function SearchFileShares(sReqFilePath,nShareType,nNumShares,nStartPos,fnOnResponse,objOnResponseData,sSearchText){if(sReqFilePath!=null&&sReqFilePath!=undefined&&sReqFilePath!=""&&nShareType!=undefined&&nNumShares!=undefined&&nNumShares>0&&nStartPos!=undefined&&nStartPos>-1&&fnOnResponse!=undefined){var ListFileSharesRequest=createXMLHttpRequest("POST",(sReqFilePath+"?Command=SearchFileShares"),fnOnResponse,objOnResponseData);var sPostData=("Search="+sSearchText+"&ShareType="+nShareType);ListFileSharesRequest.send(sPostData);}else ASSERT("Console.ListFileShares - Programming error, invalid parameters.");}function ProcessSharesFromListing(XMLDoc,nShareType){if(XMLDoc!=undefined){if(nShareType==SHARE_TYPE_INCOMING)ResetIncomingListing();else if(nShareType==SHARE_TYPE_OUTGOING)ResetOutgoingListing();UpdateLastUpdated(nShareType);var sTotalNumOfShares=GetXMLValue(XMLDoc,"TotalNumOfShares");if(nShareType==SHARE_TYPE_INCOMING)g_nTotalNumOfIncomingShares=parseInt(sTotalNumOfShares);else g_nTotalNumOfOutgoingShares=parseInt(sTotalNumOfShares);var arShares=XMLDoc.getElementsByTagName('share');if(arShares!=null&&arShares!=undefined){var nNumOfShares=arShares.length;if(nNumOfShares>0){var rShare=null;var sToken="";var nHasPword=-1;var nDateCreated=0;var sMsgSubject="";var sFirstRecipient="";var nNumRecipients=-1;var nNotificationStatus=-1;var nTotalFileSize=-1;var nNumFiles=-1;var nDateExpiration=0;var nSearchShareType=-1;for(var nIdx=0;nIdx<nNumOfShares;nIdx++){rShare=null;sToken="";nHasPword=-1;nDateCreated=0;sMsgSubject="";sFirstRecipient="";nNumRecipients=-1;nNotificationStatus=-1;nTotalFileSize=-1;nNumFiles=-1;nDateExpiration=0;nSearchShareType=-1;rShare=arShares[nIdx];sToken=GetXMLValue(rShare,XML_LIST_CMD_SHARE_TOKEN);nHasPword=GetXMLValueInt(rShare,XML_LIST_CMD_HAS_PWORD);nDateCreated=GetXMLValueInt(rShare,XML_LIST_CMD_DATE_CREATED);sMsgSubject=GetXMLValue(rShare,XML_LIST_CMD_MSG_SUBJECT);sFirstRecipient=GetXMLValue(rShare,XML_LIST_CMD_FIRST_RECIPIENT);nNumRecipients=GetXMLValueInt(rShare,XML_LIST_CMD_NUM_RECIPIENTS);nNotificationStatus=GetXMLValueInt(rShare,XML_LIST_CMD_NOTIFICATION_STATUS);nTotalFileSize=GetXMLValueInt(rShare,XML_LIST_CMD_TOTAL_FILE_SIZE);nNumFiles=GetXMLValueInt(rShare,XML_LIST_CMD_NUM_FILES);nDateExpiration=GetXMLValueInt(rShare,XML_LIST_CMD_DATE_EXPIRATION);if(g_bSearchListing)nSearchShareType=GetXMLValueInt(rShare,XML_LIST_CMD_SEARCH_SHARE_TYPE);var rShareObj=CreateFileShareObj(nShareType,nIdx,sToken,nHasPword,nDateCreated,sMsgSubject,sFirstRecipient,nNumRecipients,nNotificationStatus,nTotalFileSize,nNumFiles,nDateExpiration,nSearchShareType);AddShareObjToModel(rShareObj);}}}}else ASSERT_CONSOLE("Console.ProcessSharesFromListing: Programming error, XMLDoc is invalid.");}function ListFileSharesForType(nShareType,nNumOfShares,nStartingPos,fnCallback,objCallbackData){ListFileShares((g_sAbsSharePath+"/ListFileShares.xml"),nShareType,nNumOfShares,nStartingPos,fnCallback,objCallbackData);}function ListFileSharesForSearch(nShareType,nNumOfShares,nStartingPos,fnCallback,objCallbackData,sSearchText){g_bSearchListing=true;SearchFileShares((g_sAbsSharePath+"/SearchFileShares.xml"),nShareType,nNumOfShares,nStartingPos,fnCallback,objCallbackData,sSearchText);}function CreateFileShareObj(nShareType,nRowNum,sToken,nHasPword,nDateCreated,sMsgSubject,sFirstRecipient,nNumRecipients,nNotificationStatus,nTotalFileSize,nNumFiles,nDateExpiration,nSearchShareType){var rJsonObj=null;if(sFirstRecipient==undefined||sFirstRecipient==null||sFirstRecipient=="")sFirstRecipient=IDS_UNDISCLOSED_RECIPIENTS;if(sToken!=undefined&&sToken!=null&&sToken!=""){var sJsonObjTxt='{"'+FILESHARE_TOKEN+'":"'+sToken+'"';sJsonObjTxt+=',"'+FILESHARE_HAS_PWORD+'":'+nHasPword;sJsonObjTxt+=',"'+FILESHARE_CREATED_TIMESTAMP+'":'+nDateCreated;sJsonObjTxt+=',"'+FILESHARE_EMAIL_SUBJECT+'":"'+sMsgSubject.escapeSpecialChars()+'"';sJsonObjTxt+=',"'+FILESHARE_FIRST_RECIPIENT+'":"'+sFirstRecipient+'"';sJsonObjTxt+=',"'+FILESHARE_NUM_OF_RECIPIENTS+'":'+nNumRecipients;sJsonObjTxt+=',"'+FILESHARE_NOTIFICATION_STATUS+'":'+nNotificationStatus;sJsonObjTxt+=',"'+FILESHARE_TOTAL_FILE_SIZE_OF_SHARE+'":'+nTotalFileSize;sJsonObjTxt+=',"'+FILESHARE_NUM_OF_FILES_IN_SHARE+'":'+nNumFiles;sJsonObjTxt+=',"'+FILESHARE_EXPIRES_TIMESTAMP+'":'+nDateExpiration;sJsonObjTxt+=',"'+FILESHARE_TYPE+'":'+nShareType;sJsonObjTxt+=',"'+FILESHARE_ROW_NUMBER+'":'+nRowNum;sJsonObjTxt+=',"'+FILESHARE_SEARCH_SHARE_TYPE+'":'+nSearchShareType;sJsonObjTxt+='}';rJsonObj=jQuery.parseJSON(sJsonObjTxt);}else ASSERT_CONSOLE("Console.CreateFileShareObj: Programming error, a parameter for a new File Share is invalid.");return(rJsonObj);}function FormatDateExpiresElement(nExpiresTimestampInSecs){var sReturnElement=FormatTimestampForDate(nExpiresTimestampInSecs);var nExpires=SecsToMillis(nExpiresTimestampInSecs);var dtNow=new Date();if(dtNow.getTime()>=nExpires){sReturnElement='<span style="color: red;">';sReturnElement+=IDS_EXPIRED;sReturnElement+='</span>';}return(sReturnElement);}function GetShareDetailsURL(sShareToken){return(g_sAbsSharePath+'/ShareDetails.htm?Command=FileShareInfo&ShareToken='+sShareToken);}function FormatEmailSubject(sShareToken,sEmailSubject,sShareType,sShareRow){var sReturn="&nbsp;";if(sShareToken!=undefined&&sShareToken!=null&&sShareToken!=""&&sEmailSubject!=undefined&&sEmailSubject!=null&&sEmailSubject!=""){sReturn='<a href="$DetailsUrl" id="Details'+sShareType+sShareRow+'">$Subject</a>';sReturn=sReturn.replace("$DetailsUrl",GetShareDetailsURL(sShareToken));sEmailSubject=sEmailSubject.replace(eval("/\\%/g"),"%25");sEmailSubject=decodeURIComponent(sEmailSubject);sReturn=sReturn.replace("$Subject",sEmailSubject.replace(eval("/\\&#x25/g"),"%"));}return(sReturn);}function FormatRecipientsCol(sFirstRecipient,nNumOfRecipients){var sReturn=IDS_COL_FMT_RECIPIENT_1;if(sFirstRecipient!=undefined&&sFirstRecipient!=null){if(nNumOfRecipients>1){sReturn=IDS_COL_FMT_RECIPIENT_2;sReturn=sReturn.replace("$NumOfRecipients",nNumOfRecipients);}sReturn=sReturn.replace("$FirstRecipient",sFirstRecipient);}else ASSERT_CONSOLE("Console.FormatRecipientsCol: Invalid parameters.");return(sReturn);}function FormatStatusCol(nStatus){var sReturn="";switch(nStatus){case SHARE_STATE_PENDING:{sReturn=IDS_SHARE_NOTIFICATION_STATUS_PENDING;}break;case SHARE_STATE_SENT:{sReturn=IDS_SHARE_NOTIFICATION_STATUS_SENT;}break;case SHARE_STATE_ERROR_SENDING:{sReturn="<span style='color:red;'>"+IDS_SHARE_NOTIFICATION_STATUS_ERROR_SENDING+"</span>";}break;case SHARE_STATE_DOWNLOADED:{sReturn=IDS_SHARE_NOTIFICATION_STATUS_DOWNLOADED;}break;case SHARE_STATE_RECEIVED:{sReturn=IDS_SHARE_NOTIFICATION_STATUS_RECEIVED;}break;case SHARE_STATE_EXPIRED:{sReturn=IDS_SHARE_NOTIFICATION_STATUS_EXPIRED;}break;default:{ASSERT_CONSOLE("Console.FormatStatusCol: Invalid notification status encounterd.");}break;}return(sReturn);}function FormatTotalFileSizeOfShare(nTotalFileSizeOfShare){var sReturn="&nbsp;";if(nTotalFileSizeOfShare!=undefined&&nTotalFileSizeOfShare!=null&&nTotalFileSizeOfShare>-1)sReturn=FormatFileSize(nTotalFileSizeOfShare,true);return(sReturn);}function RemoveDeletedShare(sShareTokenDelete,bRefreshListing){if(sShareTokenDelete!=null&&sShareTokenDelete!=undefined&&sShareTokenDelete!=""){var rShareObj=FindShareObjByToken(sShareTokenDelete);if(rShareObj!=undefined&&rShareObj!=null){RemoveShareObjFromModel(rShareObj,bRefreshListing);if(bRefreshListing)OnListFileSharesForType(rShareObj[FILESHARE_TYPE]);}else ASSERT("Console.RemoveDeletedShare - Programming error, failed to find the JSON obj from the ShareToken that was just deleted!");}else ASSERT("Console.RemoveDeletedShare - Programming error, invalid share token was passed in.");}function GetDeleteShareDesc(rShareObj){var sDesc=IDS_DELETE_FILE_SHARE_DESC;if(rShareObj!=null&&rShareObj!=undefined){sDesc=sDesc.replace("$Subject",rShareObj[FILESHARE_EMAIL_SUBJECT]);var nNumOfRecipients=rShareObj[FILESHARE_NUM_OF_RECIPIENTS];var sRecipients=rShareObj[FILESHARE_FIRST_RECIPIENT];if(sRecipients==undefined||sRecipients==null||sRecipients==""||sRecipients==IDS_UNDISCLOSED_RECIPIENTS)sRecipients=IDS_UNDISCLOSED_RECIPIENTS.toLowerCase();if(nNumOfRecipients>1)sDesc=sDesc.replace("$Recipients",sRecipients+" (+"+nNumOfRecipients+")");else sDesc=sDesc.replace("$Recipients",sRecipients);}return(sDesc);}function OnConfirmDeleteShare(sShareToken){var sDesc=GetDeleteShareDesc(FindShareObjByToken(sShareToken));ConfirmDialogEx(null,IDS_DELETE_FILE_SHARE_TITLE,null,sDesc,OnConfirmDeleteShareYesOpt,null,sShareToken,DELETE_FILE_SHARE_DLG_WIDTH,DELETE_FILE_SHARE_DLG_HEIGHT);var objBtn=$("#ConfirmDialog").parent().find(".ui-button-text:contains('"+IDS_YES+"')");if(objBtn!=null&&objBtn!=undefined)objBtn.text(IDS_CONTINUE);var objBtn=$("#ConfirmDialog").parent().find(".ui-button-text:contains('"+IDS_NO+"')");if(objBtn!=null&&objBtn!=undefined)objBtn.text(IDS_CANCEL);}