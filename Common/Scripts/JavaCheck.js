var g_nSupportedResult=JAVA_CHECK_UNINITIALIZED;var g_bIsIE=false;var g_bIsIENew=false;var g_bIsFF=false;var g_bIsSafari=false;var g_bIsChrome=false;var g_bIsChrome64b=false;var g_bIsOpera=false;var g_bIsOperaNew=false;if((navigator.userAgent.toLowerCase().indexOf('opera')!=-1)||(g_bIsOperaNew=(navigator.userAgent.toLowerCase().indexOf('opr/')!=-1)))g_bIsOpera=true;else if(navigator.userAgent.toLowerCase().indexOf('chrome')!=-1){g_bIsChrome=true;if(navigator.userAgent.toLowerCase().indexOf('x64')!=-1)g_bIsChrome64b=true;}else if(navigator.userAgent.toLowerCase().indexOf('safari')!=-1)g_bIsSafari=true;else if(navigator.userAgent.toLowerCase().indexOf('firefox')!=-1)g_bIsFF=true;else if((navigator.userAgent.toLowerCase().indexOf('msie')!=-1)||(g_bIsIENew=(navigator.userAgent.toLowerCase().indexOf('trident')!=-1)))g_bIsIE=true;var g_bIsMac=false;var g_bIsMacOSX=false;var g_bIsWindows=false;var g_bIsLinux=false;var g_nMacVersionMajor=0;var g_nMacVersionMinor=0;if(navigator.userAgent.toLowerCase().indexOf("macintosh")>=0){g_bIsMac=true;if(navigator.userAgent.toLowerCase().indexOf("mac os x")>=0){g_bIsMacOSX=true;if(navigator.userAgent.toLowerCase().indexOf("intel")>=0){var sFind="mac os x ";var sUserAgent=navigator.userAgent.toLowerCase();var nStartIdx=sUserAgent.indexOf(sFind);if(nStartIdx>=0){nStartIdx+=sFind.length;var sMajorVersion='';var sMinorVersion='';var nCurrentVersion=0;for(var nIdx=nStartIdx;nIdx<sUserAgent.length;nIdx++){var chNext=sUserAgent.charAt(nIdx);if((chNext!=null)&&(chNext!=undefined)){if((chNext>='0')&&(chNext<='9')){if(nCurrentVersion==0)sMajorVersion+=chNext;else if(nCurrentVersion==1)sMinorVersion+=chNext;}else if((chNext=='_')||(chNext=='.')){nCurrentVersion+=1;if(nCurrentVersion>1)break;}else if((chNext==' ')||(chNext==')')||(chNext==';'))break;}}try{g_nMacVersionMajor=parseInt(sMajorVersion);g_nMacVersionMinor=parseInt(sMinorVersion);}catch(exception){RecordException(exception);}}}}}if(navigator.userAgent.toLowerCase().indexOf("windows")>=0){g_bIsWindows=true;}if(navigator.userAgent.toLowerCase().indexOf("linux")>=0){g_bIsLinux=true;}function IsAppletSupported(bRecalc,bBypassJreVersionCheck,bBypassOpenJdkCheck){if(bRecalc!=undefined&&bRecalc)g_nSupportedResult=JAVA_CHECK_UNINITIALIZED;if(g_nSupportedResult==JAVA_CHECK_UNINITIALIZED){var bIsPluginInstalled=deployJava.isPluginInstalled();var bValidRuntime=deployJava.versionCheck("1.7+");if(!bIsPluginInstalled&&bValidRuntime&&(g_bIsMacOSX||g_bIsLinux))bIsPluginInstalled=true;if(bIsPluginInstalled){if((bBypassJreVersionCheck!=undefined&&bBypassJreVersionCheck)||(bValidRuntime)){if(g_bIsWindows){if(g_bIsSafari)g_nSupportedResult=JAVA_CHECK_UNSUPPORTED_BROWSER_WIN_SAFARI;else g_nSupportedResult=JAVA_CHECK_ALL_TESTS_PASSED;}else if(g_bIsMac){if((g_bIsMacOSX)&&(g_nMacVersionMajor>=10)&&(g_nMacVersionMinor>=5)){if(g_bIsFF)g_nSupportedResult=JAVA_CHECK_UNSUPPORTED_BROWSER_MAC_FIREFOX;else if(g_bIsChrome){g_nSupportedResult=JAVA_CHECK_UNSUPPORTED_BROWSER_MAC_CHROME;}else g_nSupportedResult=JAVA_CHECK_ALL_TESTS_PASSED;}else g_nSupportedResult=JAVA_CHECK_UNSUPPORTED_MAC_APPLE_JRE;}else{if(((bBypassOpenJdkCheck!=undefined)&&(bBypassOpenJdkCheck))||(readCookie(COOKIE_OPEN_JDK_CHECK)=="1"))g_nSupportedResult=JAVA_CHECK_ALL_TESTS_PASSED;else g_nSupportedResult=JAVA_CHECK_UNSUPPORTED_OPENJDK_JRE;}}else g_nSupportedResult=JAVA_CHECK_UNSUPPORTED_JRE;}else g_nSupportedResult=JAVA_CHECK_PLUGIN_NOT_FOUND;}return(g_nSupportedResult);}