function OnValidate(){window.location="./Download.htm";return(false);}function getCookie(){var FocusObj=undefined;if(document.login!=undefined&&document.getElementById("PasswordInput")!=undefined)FocusObj=document.getElementById("PasswordInput");FocusObj.focus();if(g_bRecommendIEUpgrade)RecommendIEUpgrade();}function LoginCookieCheck(){if(document.cookie==""){document.getElementById("CookieCheck").cookieexists.value="false";}else{document.getElementById("CookieCheck").cookieexists.value="true";}getCookie();}function LoadGuestCustomImage(bDisableBranding,bHasCustomLogo){var CustomImg=new Image();var sCustomImgSrc="/%25LOGO_FILE%25"+g_sWebFilePath+"Share/Images/Serv-U-Logo-Text-small.png"+SyncRequestParameter();var nWidth="200";var nHeight="50";if(!bHasCustomLogo){nWidth="160";nHeight="40";}CustomImg.src=sCustomImgSrc;document.getElementById("GuestLoginLogo").src=CustomImg.src;document.getElementById("GuestLoginLogo").width=nWidth;document.getElementById("GuestLoginLogo").height=nHeight;}