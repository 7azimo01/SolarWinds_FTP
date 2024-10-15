// functions.js


/////////////////////////////////////////////////////////////////////////////
// jQuery (UI) helper functions - What this means is that for each of these functions, "this" is the
// current DOM element relevant for the operation being performed

function LoadjQueryDateTime(sDatePickerID)
{
	var oInput = $("#" + sDatePickerID.replace("Display", ""));
	var	nValue = parseInt(oInput.val());
	var dateLoad;

	// if it's not a valid number or is 0 (default), use today's date/time; otherwise, translate the value to a JS date
	if ((isNaN(nValue)) || (nValue == 0)) {

		// use today's date
		dateLoad = new Date();

		// make sure our hidden input agrees
		oInput.val(Math.round($.datepicker.formatDate('@', dateLoad) / 1000));
	} // if
	else
		dateLoad = new Date(nValue * 1000);

	// we don't let you configure the seconds in the time, so let's trim them off this value so all configured times have them removed
	dateLoad = new Date(dateLoad.getFullYear(), dateLoad.getMonth(), dateLoad.getDate(), dateLoad.getHours(), dateLoad.getMinutes(), 0, 0);

	// set the date/time in the datepicker
	$("#" + sDatePickerID).datetimepicker("setDate", dateLoad);
} // LoadjQueryDateTime


function OnChangejQueryDateTime(sDateText, oDatePicker)
{
	// translate the selected value from milliseconds to seconds for FVS
	$("#" + this.id.replace("Display", "")).val(Math.round($.datepicker.formatDate('@', $(this).datetimepicker('getDate')) / 1000));
} // OnChangejQueryDateTime


function ParseMaskValue()
{
	var nMaskValue = parseInt(this.value);

	// safety
	if ((isNaN(nMaskValue)) || (nMaskValue < 0))
		nMaskValue = 0;

	// retrieve all elements within the same form where the data-mask == this.id

	// get all elements within the same form tied to this mask value
	$("#" + this.form.id + " input[data-mask='" + this.id + "']").each(function() {

		// if this value is present in the mask, make sure it's checked; otherwise, make sure it's unchecked
		this.checked = ((parseInt(nMaskValue & parseInt($(this).attr("data-maskval"))) > 0) ? true : false);
	});
} // ParseMaskValue


function OnUpdateMaskValue()
{
	var $this = $(this);
	var oMaskInput = $("#" + $this.attr("data-mask"));

	// if it's checked, add this value to the mask; otherwise, remove it
	if (this.checked)
		oMaskInput.val(parseInt(oMaskInput.val()) | parseInt($this.attr("data-maskval")));
	else
		oMaskInput.val(parseInt(oMaskInput.val()) & ~(parseInt($this.attr("data-maskval"))));
} // OnUpdateMaskValue


function NormalizeButtonWidths($buttons)
{
	// set to auto so we have a width to start
	$buttons.width("auto");

	var	nWidth = 0;

	// find the biggest one and set the width for all of them
	$buttons.each(function() {
		nWidth = Math.max(nWidth, GetHiddenDimensions($(this)).width);

		// be sure that these are not set to zero width
		if(nWidth <= 0 )
			nWidth = "auto";
	}).width(nWidth);
} // NormalizeButtonWidths


// from: http://www.foliotek.com/devblog/getting-the-width-of-a-hidden-element-with-jquery-using-width/
// modified to not extend jQuery to prevent problems with Rhino obfuscation
function GetHiddenDimensions($item, includeMargin) {
	props = { "position": 'absolute', "visibility": 'hidden', "display": 'block' },
	dim = { "width":0, "height":0, "innerWidth": 0, "innerHeight": 0,"outerWidth": 0,"outerHeight": 0 },
	$hiddenParents = $item.parents().andSelf().not(':visible'),
	includeMargin = (includeMargin == null)? false : includeMargin;

	// store old properties for the parent elements that are currently hidden
    var oldProps = [];
    $hiddenParents.each(function() {
        var old = {};

		// temporarily apply some properties to the parent element so we can get accurate dimensions
		// for our target element
        for (var name in props) {
            old[name] = this.style[name];
            this.style[name] = props[name];
        } // for

        oldProps.push(old);
    }); // each

	// retrieve the dimensions for our element
    dim.width = $item.width();
    dim.outerWidth = $item.outerWidth(includeMargin);
    dim.innerWidth = $item.innerWidth();
    dim.height = $item.height();
    dim.innerHeight = $item.innerHeight();
    dim.outerHeight = $item.outerHeight(includeMargin);

	// restore the old parent properties that we modified
    $hiddenParents.each(function(i) {
        var old = oldProps[i];
        for (var name in props)
            this.style[name] = old[name];
    }); // each

	// return the complete dimensions of the element
    return (dim);
} // GetHiddenDimensions


function ValidateNumericInput(event)
{
	var nValue = parseInt(this.value);

	// ignore errors if the element isn't visible (which will happen if the element is in a dialog that's canceled)
	if ($(this).is(":visible")) {

		// make sure the current value passes muster
		if ((this.value != "") && 														// skip empty values
			((isNaN(nValue)) || 														// must be numeric
			((event.data.nMinVal != undefined) && (nValue < event.data.nMinVal)) ||		// >= our min value, if one is enforced
			((event.data.nMaxVal != undefined) && (nValue < event.data.nMaxVal)))) {	// <= our max value, if one is enforced

			// display an error to the user
			ShowFormError(event.data.sErrMsg, $(this));

			// immediately stop procesing the event that fired us because the data in the control is invalid
			event.stopImmediatePropagation();
			event.preventDefault();
		} // if
		else if (! isNaN(nValue))
			this.value = nValue;			// overwrite it the value to rid it of excess garbage
	} // if
} // ValidateNumericInput


function ValidateTextInput(event)
{
	// ignore errors if the element isn't visible (which will happen if the element is in a dialog that's canceled)
	if ($(this).is(":visible")) {
		var nLength = this.value.length;

		// make sure the current value passes muster
		if (((event.data.nMinLength != undefined) && (nLength < event.data.nMinLength)) ||		// must be at least 'x' characters long
			((event.data.nMaxLength != undefined) && (nLength > event.data.nMaxLength))) {		// must be less than 'y' characters long

			// format the error message with our limitations
			var sErrMsg = event.data.sErrMsg;
			if (event.data.nMinLength != undefined)
				sErrMsg.replace("_min_", event.data.nMinLength.toString());
			if (event.data.nMaxLength != undefined)
				sErrMsg.replace("_max_", event.data.nMaxLength.toString());

			// display the error to the user
			ShowFormError(sErrMsg, $(this));

			// immediately stop procesing the event that fired us because the data in the control is invalid
			event.stopImmediatePropagation();
			event.preventDefault();
		} // if
	} // if
} // ValidateTextInput


function ValidateEmailAddresses(event)
{
	// ignore errors if the element isn't visible (which will happen if the element is in a dialog that's canceled) or it's empty
	if (($(this).is(":visible")) && (this.value.length)) {
	    var sEmailFilter = eval("/^([A-Za-z0-9_\\s\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,63})$/");
		var $element = $(this);

		// this field could contain multiple email addresses, so we have to split them out by our supported separators
		$.each(this.value.split(","), function(nIndex, sVal) {

			// split again by semicolon
			$.each(sVal.split(";"), function(nIndex2, sEmailAddress) {
				var nAtPos = sEmailAddress.indexOf("@");

				// if the email address contains ".." in the domain or fails our filter, display the message
				if ((sEmailAddress.length) && ((parseInt(sEmailAddress.indexOf("..", nAtPos)) > -1) || (! sEmailFilter.test(sEmailAddress)))) {

					// display the error to the user
					ShowFormError(event.data.sErrMsg, $element);

					// immediately stop procesing the event that fired us because the data in the control is invalid
					event.stopImmediatePropagation();
					event.preventDefault();
				} // if
			}); // each
		}); // each
	} // if
} // ValidateEmailAddresses


function ExtendjQuerySelectable($elements, fnDblclickCallback)
{
	// this needs to be done on each element in our jQuery collection
    $elements.mousedown(function(event) {
		var	$self = $(this);

        // we can emulate dblclick functionality using mousedown on every browser but IE

		// select on right-click
		if (event.which == 3) {

			// we only want to handle this if we're not already selected
			if (! $self.hasClass("ui-selected")) {

				// de-select everyone else
				$self.parent().children("li.ui-selected").each(function() {
					$(this).removeClass("ui-selected");
				});

				// select this one instead
				$self.addClass("ui-selected");

				// fire the event for selection being stopped
				$self.parent().trigger("selectablestop");
			} // if
		} // if

		// fake double-click since jQuery UI refuses to make selectable support click events without forcing you to
		// drag to select items: https://forum.jquery.com/topic/selectable-dosn-t-fire-click-event
		else if (event.which == 1) {

			// is it a double-click?
			if ($(event.currentTarget).data('dblclick')) {

				// perform the dblclick operation
				fnDblclickCallback();

				// eat the event so we don't enable the draggable helper behind our modal dialog
				event.preventDefault();
				event.stopPropagation();
			} // if
			else
			{
				// next click will be a double-click
				$self.data('dblclick', true);

				// reset the value if they take too long on their double-click, tweek the timeout value below to fine tune
				setTimeout(function() {
					$(event.currentTarget).data('dblclick', false);
				}, 200);
			}
		} // else if
	}) // mousedown

	// INTERNET EXPLORER ONLY - only IE still gets the dblclick event for our selectable, so we handle it here
	.bind("dblclick", function() {

		// perform the dblclick operation
		fnDblclickCallback();
	}); // bind
} // ExtendjQuerySelectable


function SetSelectableButtonStates($Selectable, $SingleSelectButtons, $AnySelectButtons)
{
	var nCount = $Selectable.find("li.ui-selected").length;

	// single select buttons are only enabled when exactly one item is selected
	if ($SingleSelectButtons != undefined)
		$SingleSelectButtons.button((nCount == 1) ? "enable" : "disable");

	// any select buttons just need a selection to be enabled
	if ($AnySelectButtons != undefined)
		$AnySelectButtons.button((nCount > 0) ? "enable" : "disable");
} // SetSelectableButtonStates


function CreateBrowseButton($button, fnOnClick)
{
	// create the button
	CreatejQueryButton($button, fnOnClick, "ui-icon-folder-collapsed", false);
} // CreateBrowseButton


function CreatejQueryButton($button, fnOnClick, sIcon, bText, sSecondaryIcon)
{
	// create the button
	$button.button({
			"icons"			: {
				"primary"	: sIcon,								// setup the icon to use (displayed on the left, may be empty or undefined)
				"secondary"	: sSecondaryIcon						// setup the secondary icon to use (displayed on the right, may be empty or undefined)
			},
			"text"			: (bText == undefined) ? true : bText	// setup whether or not to dislay the button text
		})
		.click((fnOnClick != undefined) ? fnOnClick : undefined);											// setup the function call when the button is clicked
} // CreatejQueryButton


function AddButtonsTojQueryDialog($dialog, asPrimaryClasses, asSecondaryClasses)
{
	// if we don't have secondary classes, fake it
	if (asSecondaryClasses == undefined)
		asSecondaryClasses = new Array();

	// retrieve the button pane for the dialog and iterate through the buttons
	$dialog.parent().find(".ui-dialog-buttonpane button").each(function(nIndex) {

		// assign the classes to this button
		$(this).button({
			"icons"			: {
				"primary"	: asPrimaryClasses[nIndex],		// image to the left
				"secondary"	: asSecondaryClasses[nIndex]	// image to the right
			}
		}); // button
	}); // each
} // AddButtonsTojQueryDialog


// lets us reverse a jQuery selector using .reverse()
jQuery.fn.reverse = [].reverse;

////////////////////////////////////////////////////////////////////////////
// asynchronous content loading / execution

function LoadDynamicContentAndRun(aParams)
{
	// aParams[0] - The page needed to load
	// aParams[1] - The DIV to store the loaded content
	// aParams[2] - The function to call when the content is loaded - could be a function "pointer" or a string with the opening parenthesis included
	// aParams[3] - (optional) An array containing the parameter(s) to pass to aParams[2]

	// throw up a loading dialog - for now we'll always do this and let the function that ends up getting called by us worry about getting rid of it
	// ugly, I know, but otherwise you need yet another parameter to track this info
	LoadingDialog(true);

	// first determine if we actually need to load the content (it might have already been loaded)
	if (document.getElementById(aParams[1]).innerHTML != "")
		DynamicContentRun(aParams[2], aParams[3]);
	else {

		// get the dynamic content loaded
		LoadDynamicContent(aParams[0], aParams[1], function() {

			// run the function
			DynamicContentRun(aParams[2], aParams[3]);
		});
	} // else
} // LoadDynamicContentAndRun


function LoadDynamicContent(sPage, sDivID, fnOnDone)
{
	var Request;

	// create an Ajax request
	if (Request = createAWHttpRequest("GET", sPage, OnLoadDynamicContent)) {

		// some things we need to remember for when we're done
		Request.m_sDivID = sDivID;
		Request.m_fnOnDone = fnOnDone;

		// send the request
		Request.request();
	} // if
} // LoadDynamicContent


function OnLoadDynamicContent()
{
	var sContent = this.getResponseText(), sScript = "";
	var nIndex = 0, nEnd = 0, nTemp = 0;
	var aJSContent = new Array();

	// The DOM will not recognize or execute any JavaScript embedded in our dynamic HTML content.  Thus, we must parse them out ourselves and
	// insert them as <script> tags in to the DOM as if an external JS file were being loaded.  This allows us to download both pieces at the same
	// time while displaying the HTML content and making the JS usable.
	while ((nIndex = sContent.indexOf("<script"), nIndex) >= 0) {

		// find the end of this script tag
		if ((nEnd = sContent.indexOf("<\/script>", (nIndex + 1)))) {

			// pull the script out of the returned content
			sScript = sContent.substring(nIndex, nEnd);

			// remove the opening tag
			sScript = sScript.substring(sScript.indexOf(">") + 1);

			// do we have some JavaScript to save?
			if (sScript != "")
				aJSContent.push(sScript);

			// remove the JS from the content
			sContent = sContent.substring(0, nIndex) + sContent.substring(nEnd + 9);
		} // if
	} // while

	// place the content in the proper location
	document.getElementById(this.m_sDivID).innerHTML = sContent;

	// now that the content is in place, we can insert our JavaScript.  This **MUST** be done after the content is set since the global JavaScript
	// that may get executed by each of these assumes the existence of the content.
	for (var nIndex = 0; nIndex < aJSContent.length; nIndex++)
	    CreateJSElement(aJSContent[nIndex], true);

	// do we have something to call when we're done
	if (typeof(this.m_fnOnDone) == "function")
		this.m_fnOnDone.call(this);

	// we need to call this again for text selection to work in FF
	EnableSelectionOnFormElements();
} // OnLoadDynamicContent


function CreateJSElement(sSource, bIsTextSource, bBody)
{
    // create the element and set the attributes for it
    var ScriptElement = document.createElement("script");
    ScriptElement.setAttribute("type", "text/javascript");
    ScriptElement.setAttribute("language", "JavaScript");

    // do we have full text source?
    if (bIsTextSource)
        ScriptElement.text = sSource;
    else
        ScriptElement.setAttribute("src", sSource);

    // add it to the DOM.  If the "src" tag is set, the browser will fetch it; otherwise, the script becomes available to the rest of the page immediately
    document.getElementsByTagName((bBody) ? "body" : "head")[0].appendChild(ScriptElement);
} // CreateJSElement


function DynamicContentRun(fnDone, oParams)
{
	// what are we doing next?
	if (typeof(fnDone) == "function")
		fnDone(oParams);
	else {

		// we can't pass the parameter in as part of the string because the obfuscator can't follow.  So we'll temporarily save it elsewhere to defeat the obfuscator.
		window.g_FVSDynamicParams = oParams;
		eval(fnDone + "window.g_FVSDynamicParams);");
		window.g_FVSDynamicParams = undefined;
	} // else
} // DynamicContentRun


function DelayLoadExecute(afnParams, bSkipLoadingDlg, bDismissLoad)
{
	// afnParams[0] - contains a function that returns whether or not the delay loaded content is ready
	// afnParams[1] - contains the function to call when afnParams[0] returns true

	// is it already loaded?
	if (afnParams[0]()) {

		// do we dismiss the loading dialog?
		if (bDismissLoad)
			LoadingDialog(false);

		// execute the provided function
		if (typeof(afnParams[1]) == "function")
			afnParams[1]();
		else
			eval(afnParams[1]);

		// since this is delay loaded we need to call the function to restore form object selections(input, combos, text box etc...)
		EnableSelectionOnFormElements();
	} // if
	else {

		// throw up the busy dialog while we wait
		if (! bSkipLoadingDlg)
			LoadingDialog(true);

		// try again in a little bit
		setTimeout(function() { DelayLoadExecute(afnParams, true, bDismissLoad); }, 250);
	} // else
} // DelayLoadExecute


function EnableSelectionOnFormElements()
{
	var tag_names = [ "input", "textarea"];

	// safety check
	if (document.getElementsByTagName) {

		// Get all the matching form elements
		for( var i = 0; i <  tag_names.length; i++ ){
			FormElements = document.getElementsByTagName(tag_names[i]);

			// set the the events for the form elements
			for (var intCounter = 0; intCounter < FormElements.length; intCounter++){

				// onfocus event
				FormElements[intCounter].onfocus = function()
				{
					if (! document.addEventListener){
						this.detachEvent('onselectstart', StopSelections);
						this.attachEvent('onselectstart', BubbleCancel); //g_fnOnSelectStart
					} //if
					else {
						this.removeEventListener('selectstart', StopSelections, false);
						this.addEventListener('selectstart', BubbleCancel, false);
					} // else
				}; // function

				// onblur event
				FormElements[intCounter].onblur = function()
				{
					if (! document.addEventListener){
						this.detachEvent('onselectstart', BubbleCancel);
						this.attachEvent('onselectstart', StopSelections);
					} //if
					else {
						this.removeEventListener('selectstart', BubbleCancel, false);
						this.addEventListener('selectstart', StopSelections, false);
					} // else
				}; // function
			} // for
		} // for
	} // if
} // EnableSelectionOnFormElements


function BubbleCancel(event)
{
	// if this is IE
	if (AW.ie)
		event.cancelBubble = true;
	else
		event.stopPropagation();
} // BubbleCancel

////////////////////////////////////////////////////////////////////////////
// cookie functions

function IsIPAddressCheck(ipaddr)
{
	var parts = ipaddr.split(".");

	if (parseInt(parseFloat(parts[0])) == 0 || parseInt(parseFloat(parts[0])) == "NaN") { return false; }

	for (var i=0; i<parts.length; i++) {
		if (parseInt(parseFloat(parts[i])) > 255 || parseInt(parseFloat(parts[i])) == "NaN") { return false; }
	} // for
	return true;
} // IsIPAddressCheck


function createCookie(name, value, days)
{
	var expires, sDomainHost, sHost, nPortPos, bBypassDomainCookie = false;
	var bIsOperaCheck = (navigator.userAgent.indexOf("Opera") >= 0);
	var ua=navigator.userAgent || "";

	sEncodedValue = encodeURIComponent(value);

	// get the host string
	sHost = top.location.host.toLowerCase();

	// check if the host has a port #
	nPortPos = sHost.indexOf(":");

	if (nPortPos != -1) {
		sHost = sHost.substr(0,nPortPos);
	} // if

	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	} // if
	else
		expires = "; expires=Thu, 01-Jan-1970 00:00:01 GMT";

	if ((bIsOperaCheck || g_bChrome) || (ua.match("Safari")) && IsIPAddressCheck(sHost))
		bBypassDomainCookie = true;

	if ((sHost != "localhost") && (! bBypassDomainCookie))
		sDomainHost = "domain=" + sHost;
	else
		sDomainHost = "";

	// this could be a computer name so check and treat it like localhost
	nDotPos = sHost.indexOf(".");
	if (nDotPos == -1)
		sDomainHost = "";

	document.cookie = name+"="+sEncodedValue+expires+"; path=/;" + sDomainHost;
} // createCookie


// read a cookie
function readCookie(name)
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');

	for (var i=0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0)
				return decodeURIComponent(c.substring(nameEQ.length,c.length));
	} // for

	return "";
} // readCookie


function CookieCheck()
{
 /* check for a cookie */
  if (document.cookie == "") 
  {
    /* if a cookie is not found - alert user -
     change cookieexists field value to false */
    AlertDialog(g_sEnableCookies,true);

    /* If the user has Cookies disabled an alert will let him know 
        that cookies need to be enabled to log on.*/ 

    document.getElementById("CookieCheck").cookieexists.value ="false" ; 
  } else {
   /* this sets the value to true and nothing else will happen,
       the user will be able to log on*/
    document.getElementById("CookieCheck").cookieexists.value ="true";
  }
} // CookieCheck


// gets the value of a query string parameter
function GetURLParameter(sParameterName)
{
	var sParameterValue = "";

	// the URL of the current page
	var sCurrentURL = window.location.href;

	// find either ? or &
	var nPos = sCurrentURL.indexOf("?");
  
	// did we find the ? if not, find the first &
	if (nPos <= -1)
		nPos = sCurrentURL.indexOf("&");

	if (nPos > -1) {
		var sParemeterString = sCurrentURL.substr(nPos + 1);
		var aParameterArray = sParemeterString.split("&");

		// parse out each parameter
		for (var iParam = 0; iParam < aParameterArray.length; iParam++) {

			// find the position of the "="
			nPos = aParameterArray[iParam].indexOf("=");

			if (aParameterArray[iParam].substring(0, (nPos + 1)).toLowerCase() == (sParameterName.toLowerCase() + "=")) {

				var aParamPosition = aParameterArray[iParam].split("=");

				// Sanitize this data for security
				sParameterValue = SanitizeString(aParamPosition[1]);
				break;
			} // if
		} // for
	} // if

	// return the parameter value
	return (sParameterValue);
} // GetURLParameter


function SanitizeString(sStr)
{
	var sSanitizedStr;

	// Sanitize this data for security
	sSanitizedStr = sStr.replace(eval("/\\</g"), "&lt;");
	sSanitizedStr = sSanitizedStr.replace(eval("/\\>/g"), "&gt;");
	sSanitizedStr = sSanitizedStr.replace(eval("/\\'/g"), "&apos;");
	sSanitizedStr = sSanitizedStr.replace(eval("/\"/g"), "&#x22;");
	sSanitizedStr = sSanitizedStr.replace(eval("/\\)/g"), "&#x29;");
	sSanitizedStr = sSanitizedStr.replace(eval("/\\(/g"), "&#x28;");
	
	return (sSanitizedStr);
} //SanitizeString


// disable right click on IE
function OnRightClickIE4()
{
	if (event.button==2){
		return false;
	} // if
} // OnRightClickIE4


// disable right click on Moz
function OnRightClickNS4(e)
{
	if (document.layers||document.getElementById&&!document.all){
		if (e.which==2||e.which==3){
			return false;
		} // if
	} // if
} // OnRightClickNS4


function GetLangCode (sLangCode)
{

	switch (sLangCode.toLowerCase()) {
		case "de,de" :				// german

			return("de");
			break;

		case "fr,fr" :				// French
			return("fr");
			break;

		case "it,it" :				// Italian
			return("it");
			break;

		case "es,es" :				// spanish
			return("es");
			break;

		case "fi,fi" :				// 
			return("fi");
			break;

		case "pt,pt" :				// 
			return("pt-BR");
			break;

		case "se,se" :				// 
			return("sv");
			break;

		case "no,no" :				// 
			return("no");
			break;

		case "dk,dk" :				// 
			return("da");
			break;

		case "ru,ru" :				// 
			return("ru");
			break;

		case "zh,tw" :				// 
			return("zh-TW");
			break;

		case "zh,cn" :				// 
			return("zh-CN");
			break;

		case "ja,ja" :				// 
			return("ja");
			break;

        case "sr,sr" :              // Serbian
            return ("sr-SR");
            break;
	} // switch
	
	return("");  // English default
} // GetLangCode



/***************************************************************************
******* JQUERY Override function to allow HTML in dialog Titles ************/

$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
	_title: function (title) {
		if (!this.options.title) {
			title.html("&#160;");
		} else {
			title.html(this.options.title);
		}
	}
}));
//***************************************************************************