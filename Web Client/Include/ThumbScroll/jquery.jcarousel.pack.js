/**
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(9($){$.1s.A=9(o){z 4.14(9(){2H r(4,o)})};8 q={W:F,23:1,1G:1,u:7,15:3,16:7,1H:\'2I\',24:\'2J\',1i:0,B:7,1j:7,1I:7,25:7,26:7,27:7,28:7,29:7,2a:7,2b:7,1J:\'<N></N>\',1K:\'<N></N>\',2c:\'2d\',2e:\'2d\',1L:7,1M:7};$.A=9(e,o){4.5=$.17({},q,o||{});4.Q=F;4.D=7;4.H=7;4.t=7;4.R=7;4.S=7;4.O=!4.5.W?\'1N\':\'2f\';4.E=!4.5.W?\'2g\':\'2h\';8 a=\'\',1d=e.J.1d(\' \');1k(8 i=0;i<1d.K;i++){6(1d[i].2i(\'A-2j\')!=-1){$(e).1t(1d[i]);8 a=1d[i];1l}}6(e.2k==\'2K\'||e.2k==\'2L\'){4.t=$(e);4.D=4.t.18();6(4.D.1m(\'A-H\')){6(!4.D.18().1m(\'A-D\'))4.D=4.D.B(\'<N></N>\');4.D=4.D.18()}X 6(!4.D.1m(\'A-D\'))4.D=4.t.B(\'<N></N>\').18()}X{4.D=$(e);4.t=$(e).2M(\'>2l,>2m,N>2l,N>2m\')}6(a!=\'\'&&4.D.18()[0].J.2i(\'A-2j\')==-1)4.D.B(\'<N 2N=" \'+a+\'"></N>\');4.H=4.t.18();6(!4.H.K||!4.H.1m(\'A-H\'))4.H=4.t.B(\'<N></N>\').18();4.S=$(\'.A-11\',4.D);6(4.S.u()==0&&4.5.1K!=7)4.S=4.H.1u(4.5.1K).11();4.S.V(4.J(\'A-11\'));4.R=$(\'.A-19\',4.D);6(4.R.u()==0&&4.5.1J!=7)4.R=4.H.1u(4.5.1J).11();4.R.V(4.J(\'A-19\'));4.H.V(4.J(\'A-H\'));4.t.V(4.J(\'A-t\'));4.D.V(4.J(\'A-D\'));8 b=4.5.16!=7?1n.1O(4.1o()/4.5.16):7;8 c=4.t.2O(\'1v\');8 d=4;6(c.u()>0){8 f=0,i=4.5.1G;c.14(9(){d.1P(4,i++);f+=d.T(4,b)});4.t.y(4.O,f+\'U\');6(!o||o.u===L)4.5.u=c.u()}4.D.y(\'1w\',\'1x\');4.R.y(\'1w\',\'1x\');4.S.y(\'1w\',\'1x\');4.2n=9(){d.19()};4.2o=9(){d.11()};4.1Q=9(){d.2p()};6(4.5.1j!=7)4.5.1j(4,\'2q\');6($.2r.2s){4.1e(F,F);$(2t).1y(\'2P\',9(){d.1z()})}X 4.1z()};8 r=$.A;r.1s=r.2Q={A:\'0.2.3\'};r.1s.17=r.17=$.17;r.1s.17({1z:9(){4.C=7;4.G=7;4.Y=7;4.12=7;4.1a=F;4.1f=7;4.P=7;4.Z=F;6(4.Q)z;4.t.y(4.E,4.1A(4.5.1G)+\'U\');8 p=4.1A(4.5.23);4.Y=4.12=7;4.1p(p,F);$(2t).1R(\'2u\',4.1Q).1y(\'2u\',4.1Q)},2v:9(){4.t.2w();4.t.y(4.E,\'2R\');4.t.y(4.O,\'2S\');6(4.5.1j!=7)4.5.1j(4,\'2v\');4.1z()},2p:9(){6(4.P!=7&&4.Z)4.t.y(4.E,r.I(4.t.y(4.E))+4.P);4.P=7;4.Z=F;6(4.5.1I!=7)4.5.1I(4);6(4.5.16!=7){8 a=4;8 b=1n.1O(4.1o()/4.5.16),O=0,E=0;$(\'1v\',4.t).14(9(i){O+=a.T(4,b);6(i+1<a.C)E=O});4.t.y(4.O,O+\'U\');4.t.y(4.E,-E+\'U\')}4.15(4.C,F)},2T:9(){4.Q=1g;4.1e()},2U:9(){4.Q=F;4.1e()},u:9(s){6(s!=L){4.5.u=s;6(!4.Q)4.1e()}z 4.5.u},2V:9(i,a){6(a==L||!a)a=i;6(4.5.u!==7&&a>4.5.u)a=4.5.u;1k(8 j=i;j<=a;j++){8 e=4.M(j);6(!e.K||e.1m(\'A-1b-1B\'))z F}z 1g},M:9(i){z $(\'.A-1b-\'+i,4.t)},2x:9(i,s){8 e=4.M(i),1S=0,2x=0;6(e.K==0){8 c,e=4.1C(i),j=r.I(i);1q(c=4.M(--j)){6(j<=0||c.K){j<=0?4.t.2y(e):c.1T(e);1l}}}X 1S=4.T(e);e.1t(4.J(\'A-1b-1B\'));1U s==\'2W\'?e.2X(s):e.2w().2Y(s);8 a=4.5.16!=7?1n.1O(4.1o()/4.5.16):7;8 b=4.T(e,a)-1S;6(i>0&&i<4.C)4.t.y(4.E,r.I(4.t.y(4.E))-b+\'U\');4.t.y(4.O,r.I(4.t.y(4.O))+b+\'U\');z e},1V:9(i){8 e=4.M(i);6(!e.K||(i>=4.C&&i<=4.G))z;8 d=4.T(e);6(i<4.C)4.t.y(4.E,r.I(4.t.y(4.E))+d+\'U\');e.1V();4.t.y(4.O,r.I(4.t.y(4.O))-d+\'U\')},19:9(){4.1D();6(4.P!=7&&!4.Z)4.1W(F);X 4.15(((4.5.B==\'1X\'||4.5.B==\'G\')&&4.5.u!=7&&4.G==4.5.u)?1:4.C+4.5.15)},11:9(){4.1D();6(4.P!=7&&4.Z)4.1W(1g);X 4.15(((4.5.B==\'1X\'||4.5.B==\'C\')&&4.5.u!=7&&4.C==1)?4.5.u:4.C-4.5.15)},1W:9(b){6(4.Q||4.1a||!4.P)z;8 a=r.I(4.t.y(4.E));!b?a-=4.P:a+=4.P;4.Z=!b;4.Y=4.C;4.12=4.G;4.1p(a)},15:9(i,a){6(4.Q||4.1a)z;4.1p(4.1A(i),a)},1A:9(i){6(4.Q||4.1a)z;i=r.I(i);6(4.5.B!=\'1c\')i=i<1?1:(4.5.u&&i>4.5.u?4.5.u:i);8 a=4.C>i;8 b=r.I(4.t.y(4.E));8 f=4.5.B!=\'1c\'&&4.C<=1?1:4.C;8 c=a?4.M(f):4.M(4.G);8 j=a?f:f-1;8 e=7,l=0,p=F,d=0;1q(a?--j>=i:++j<i){e=4.M(j);p=!e.K;6(e.K==0){e=4.1C(j).V(4.J(\'A-1b-1B\'));c[a?\'1u\':\'1T\'](e)}c=e;d=4.T(e);6(p)l+=d;6(4.C!=7&&(4.5.B==\'1c\'||(j>=1&&(4.5.u==7||j<=4.5.u))))b=a?b+d:b-d}8 g=4.1o();8 h=[];8 k=0,j=i,v=0;8 c=4.M(i-1);1q(++k){e=4.M(j);p=!e.K;6(e.K==0){e=4.1C(j).V(4.J(\'A-1b-1B\'));c.K==0?4.t.2y(e):c[a?\'1u\':\'1T\'](e)}c=e;8 d=4.T(e);6(d==0){2Z(\'30: 31 1N/2f 32 1k 33. 34 35 36 37 38 39. 3a...\');z 0}6(4.5.B!=\'1c\'&&4.5.u!==7&&j>4.5.u)h.3b(e);X 6(p)l+=d;v+=d;6(v>=g)1l;j++}1k(8 x=0;x<h.K;x++)h[x].1V();6(l>0){4.t.y(4.O,4.T(4.t)+l+\'U\');6(a){b-=l;4.t.y(4.E,r.I(4.t.y(4.E))-l+\'U\')}}8 n=i+k-1;6(4.5.B!=\'1c\'&&4.5.u&&n>4.5.u)n=4.5.u;6(j>n){k=0,j=n,v=0;1q(++k){8 e=4.M(j--);6(!e.K)1l;v+=4.T(e);6(v>=g)1l}}8 o=n-k+1;6(4.5.B!=\'1c\'&&o<1)o=1;6(4.Z&&a){b+=4.P;4.Z=F}4.P=7;6(4.5.B!=\'1c\'&&n==4.5.u&&(n-k+1)>=1){8 m=r.10(4.M(n),!4.5.W?\'1r\':\'1Y\');6((v-m)>g)4.P=v-g-m}1q(i-->o)b+=4.T(4.M(i));4.Y=4.C;4.12=4.G;4.C=o;4.G=n;z b},1p:9(p,a){6(4.Q||4.1a)z;4.1a=1g;8 b=4;8 c=9(){b.1a=F;6(p==0)b.t.y(b.E,0);6(b.5.B==\'1X\'||b.5.B==\'G\'||b.5.u==7||b.G<b.5.u)b.2z();b.1e();b.1Z(\'2A\')};4.1Z(\'3c\');6(!4.5.1H||a==F){4.t.y(4.E,p+\'U\');c()}X{8 o=!4.5.W?{\'2g\':p}:{\'2h\':p};4.t.1p(o,4.5.1H,4.5.24,c)}},2z:9(s){6(s!=L)4.5.1i=s;6(4.5.1i==0)z 4.1D();6(4.1f!=7)z;8 a=4;4.1f=3d(9(){a.19()},4.5.1i*3e)},1D:9(){6(4.1f==7)z;3f(4.1f);4.1f=7},1e:9(n,p){6(n==L||n==7){8 n=!4.Q&&4.5.u!==0&&((4.5.B&&4.5.B!=\'C\')||4.5.u==7||4.G<4.5.u);6(!4.Q&&(!4.5.B||4.5.B==\'C\')&&4.5.u!=7&&4.G>=4.5.u)n=4.P!=7&&!4.Z}6(p==L||p==7){8 p=!4.Q&&4.5.u!==0&&((4.5.B&&4.5.B!=\'G\')||4.C>1);6(!4.Q&&(!4.5.B||4.5.B==\'G\')&&4.5.u!=7&&4.C==1)p=4.P!=7&&4.Z}8 a=4;4.R[n?\'1y\':\'1R\'](4.5.2c,4.2n)[n?\'1t\':\'V\'](4.J(\'A-19-1E\')).20(\'1E\',n?F:1g);4.S[p?\'1y\':\'1R\'](4.5.2e,4.2o)[p?\'1t\':\'V\'](4.J(\'A-11-1E\')).20(\'1E\',p?F:1g);6(4.R.K>0&&(4.R[0].1h==L||4.R[0].1h!=n)&&4.5.1L!=7){4.R.14(9(){a.5.1L(a,4,n)});4.R[0].1h=n}6(4.S.K>0&&(4.S[0].1h==L||4.S[0].1h!=p)&&4.5.1M!=7){4.S.14(9(){a.5.1M(a,4,p)});4.S[0].1h=p}},1Z:9(a){8 b=4.Y==7?\'2q\':(4.Y<4.C?\'19\':\'11\');4.13(\'25\',a,b);6(4.Y!==4.C){4.13(\'26\',a,b,4.C);4.13(\'27\',a,b,4.Y)}6(4.12!==4.G){4.13(\'28\',a,b,4.G);4.13(\'29\',a,b,4.12)}4.13(\'2a\',a,b,4.C,4.G,4.Y,4.12);4.13(\'2b\',a,b,4.Y,4.12,4.C,4.G)},13:9(a,b,c,d,e,f,g){6(4.5[a]==L||(1U 4.5[a]!=\'2B\'&&b!=\'2A\'))z;8 h=1U 4.5[a]==\'2B\'?4.5[a][b]:4.5[a];6(!$.3g(h))z;8 j=4;6(d===L)h(j,c,b);X 6(e===L)4.M(d).14(9(){h(j,4,d,c,b)});X{1k(8 i=d;i<=e;i++)6(i!==7&&!(i>=f&&i<=g))4.M(i).14(9(){h(j,4,i,c,b)})}},1C:9(i){z 4.1P(\'<1v></1v>\',i)},1P:9(e,i){8 a=$(e).V(4.J(\'A-1b\')).V(4.J(\'A-1b-\'+i));a.20(\'3h\',i);z a},J:9(c){z c+\' \'+c+(!4.5.W?\'-3i\':\'-W\')},T:9(e,d){8 a=e.2C!=L?e[0]:e;8 b=!4.5.W?a.1F+r.10(a,\'2D\')+r.10(a,\'1r\'):a.2E+r.10(a,\'2F\')+r.10(a,\'1Y\');6(d==L||b==d)z b;8 w=!4.5.W?d-r.10(a,\'2D\')-r.10(a,\'1r\'):d-r.10(a,\'2F\')-r.10(a,\'1Y\');$(a).y(4.O,w+\'U\');z 4.T(a)},1o:9(){z!4.5.W?4.H[0].1F-r.I(4.H.y(\'3j\'))-r.I(4.H.y(\'3k\')):4.H[0].2E-r.I(4.H.y(\'3l\'))-r.I(4.H.y(\'3m\'))},3n:9(i,s){6(s==L)s=4.5.u;z 1n.3o((((i-1)/s)-1n.3p((i-1)/s))*s)+1}});r.17({3q:9(d){z $.17(q,d||{})},10:9(e,p){6(!e)z 0;8 a=e.2C!=L?e[0]:e;6(p==\'1r\'&&$.2r.2s){8 b={\'1w\':\'1x\',\'3r\':\'3s\',\'1N\':\'1i\'},21,22;$.2G(a,b,9(){21=a.1F});b[\'1r\']=0;$.2G(a,b,9(){22=a.1F});z 22-21}z r.I($.y(a,p))},I:9(v){v=3t(v);z 3u(v)?0:v}})})(3v);',62,218,'||||this|options|if|null|var|function||||||||||||||||||||list|size||||css|return|jcarousel|wrap|first|container|lt|false|last|clip|intval|className|length|undefined|get|div|wh|tail|locked|buttonNext|buttonPrev|dimension|px|addClass|vertical|else|prevFirst|inTail|margin|prev|prevLast|callback|each|scroll|visible|extend|parent|next|animating|item|circular|split|buttons|timer|true|jcarouselstate|auto|initCallback|for|break|hasClass|Math|clipping|animate|while|marginRight|fn|removeClass|before|li|display|block|bind|setup|pos|placeholder|create|stopAuto|disabled|offsetWidth|offset|animation|reloadCallback|buttonNextHTML|buttonPrevHTML|buttonNextCallback|buttonPrevCallback|width|ceil|format|funcResize|unbind|old|after|typeof|remove|scrollTail|both|marginBottom|notify|attr|oWidth|oWidth2|start|easing|itemLoadCallback|itemFirstInCallback|itemFirstOutCallback|itemLastInCallback|itemLastOutCallback|itemVisibleInCallback|itemVisibleOutCallback|buttonNextEvent|click|buttonPrevEvent|height|left|top|indexOf|skin|nodeName|ul|ol|funcNext|funcPrev|reload|init|browser|safari|window|resize|reset|empty|add|prepend|startAuto|onAfterAnimation|object|jquery|marginLeft|offsetHeight|marginTop|swap|new|normal|swing|UL|OL|find|class|children|load|prototype|0px|10px|lock|unlock|has|string|html|append|isNan|jCarousel|No|set|items|This|will|cause|an|infinite|loop|Aborting|push|onBeforeAnimation|setTimeout|1000|clearTimeout|isFunction|jcarouselindex|horizontal|borderLeftWidth|borderRightWidth|borderTopWidth|borderBottomWidth|index|round|floor|defaults|float|none|parseInt|isNaN|jQuery'.split('|'),0,{}))

var g_ThumbScroll,g_nScrollSize,g_aImageItems = [],g_aImageTracker = [],ImageLoadFunc, g_bShown = false;

// build all the items for the image scroller
jQuery.BuildThumbScroll = function(ImagesList,fImageLoad, bShown,nCurrPrevImg){
	
	var anRows = ImagesList.getRowIndices();
	var nSlideIndex = 0;
	ImageLoadFunc = fImageLoad;
	g_aImageItems = [];	
	g_aImageTracker = [];	
	g_bShown = bShown;	
	
	// sort through and build the image array
	for (var nIndex = 0; nIndex < anRows.length; nIndex++) {
	
		// do we have an image
		if (parseInt(ImagesList.getCellValue(5, parseInt(anRows[nIndex]))) == 1 && parseInt(ImagesList.getCellValue(9, parseInt(anRows[nIndex]))) != 1) {			
			// get the info from the list	
			sFilePath = ImagesList.getCellText(3, parseInt(anRows[nIndex]));
			sFileName = ImagesList.getCellText(0, parseInt(anRows[nIndex]));
			sFileSize = ImagesList.getCellText(1, parseInt(anRows[nIndex]));
			
			// we have the items so push it into the array
			sImagePath = {path: sFilePath, title: sFileName, size: sFileSize, index: anRows[nIndex], slideindex: ++nSlideIndex};
			sImageTrackInfo = "ImgTrack" + anRows[nIndex];
			g_aImageTracker[anRows[nIndex]] = nSlideIndex;
			g_aImageItems.push(sImagePath);
		} // if
	} // for

	// we have the array so save the size
	g_nScrollSize = g_aImageItems.length;

	// check to see if this is a small scroll list
	if(g_nScrollSize <6)
		nScrollViewSize = g_nScrollSize;
	else
		nScrollViewSize = 6;

	// if this is a new image list we reset it otherwise INIT
	if(g_ThumbScroll != undefined)
		jQuery.ResetThumbScroll(bShown,ImagesList.getRowIndices()[nCurrPrevImg]);
	else {
		 jQuery('#ImageScroller').jcarousel({
			size: g_nScrollSize, scroll: nScrollViewSize,start: g_aImageTracker[ImagesList.getRowIndices()[nCurrPrevImg]],
			initCallback: OnInitThumbScroll, 
			itemLoadCallback: {onBeforeAnimation: ImageLoadCallback}
		});
	} // else
}; // BuildThumbScroll


// go to a position in the scroll
jQuery.ScrollImages =  function(nScrollTo)
{
	if(g_aImageTracker.length > 6)
		g_ThumbScroll.scroll(nScrollTo);
}; // ScrollImages


// go to a position in the scroll
jQuery.IsThumbScrollLoaded =  function()
{
	if(g_ThumbScroll != undefined)
		return(true);
	else
		return(false);
}; // IsThumbScrollLoaded


// go to a position in the scroll
jQuery.ScrollTrack =  function(nScrollTrack)
{
//document.getElementById("test").innerHTML += g_aImageTracker[nScrollTrack] + " &nbsp;&nbsp;";
	 if(g_aImageTracker.length > 6){
		g_ThumbScroll.scroll(g_aImageTracker[nScrollTrack]);
	 }
	 $("li[jcarouselindex!=\'" + g_aImageTracker[nScrollTrack] + "']").children("div").children("img").css("border", "1px solid #A9A9A9");
	 $("li[jcarouselindex='" + g_aImageTracker[nScrollTrack] + "']").children("div").children("img").css("border", "2px solid #5e9eff");
}; // ScrollTrack


jQuery.ResetThumbScroll = function (bShown, nScrollTrack) { 
	g_ThumbScroll.options.start = g_aImageTracker[nScrollTrack];
	g_bShown = bShown;
	g_ThumbScroll.reset();
}; // ResetThumbScroll


function OnInitThumbScroll(ScrollObj, state) { 
	// we need to save the scroll object for global access
	if (state == 'init')
        g_ThumbScroll = ScrollObj;
} // OnInitThumbScroll


// this function retrieves the images and scrolls the thumbnails
function ImageLoadCallback(ScrollObj, state)
{
	//if(g_bShown){
		g_ThumbScroll.size(g_nScrollSize);
		for (var i = ScrollObj.first; i <= ScrollObj.last; i++) {

			if (ScrollObj.has(i))
				continue;

			if (i >  (g_aImageItems.length))
				break;
				
			ScrollObj.add(i, GetItemHTML(g_aImageItems[i-1]));
		} // for
	//} // if
} // ImageLoadCallback


function SyncRequestParameter()
{
	// get the current date and time
	CurrentDate = new Date(); 

	// create the parameter for synchronizing, or for telling IE not to cache this
	return ("&Sync=" + CurrentDate.getTime());
} // SyncRequestParameter


function CleanImgFilePath(sPath)
{
	// clean the path so we can insert to javascript function
	sRawFilePath = sPath;
	sRawFilePath = sRawFilePath.replace(new RegExp("[\(]" , "g"),"\\(");
	sRawFilePath = sRawFilePath.replace(new RegExp("[\)]" , "g"),"\\)");
	sRawFilePath = sRawFilePath.replace(new RegExp("'", "g"),"\\'");
	
	return(sRawFilePath);
} // CleanImgFilePath


function GetItemHTML(item)
{
	// build the html for the item
//return '<div class="img-shadow"><div style="width:75px;">asdf</div></div>';
    return '<div class="img-shadow"><img onclick="javascript:' + ImageLoadFunc + 'true,\'' + CleanImgFilePath(item.title) + '\',\'' + CleanImgFilePath(item.path) + '\',' + item.index + ', false, \'' + item.size + '\', \'' + item.slideindex + '\');" src="/?Command=Download&File=' + encodeURIComponent(item.path) + '&CsrfToken=' + g_sEncXsrfToken + '&Width=75&Height=75&Thumbnail=1' + SyncRequestParameter() + '" style="cursor:pointer;" border="0"  alt="' + item.title + '" /></div>';
} // GetItemHTML

/*********************************************************
********* Deprecated Call to fix carousel code ***********
****** (jQuery.Browser) **********************************/

jQuery.uaMatch = function( ua ) {
	ua = ua.toLowerCase();

	var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
		/(msie) ([\w.]+)/.exec( ua ) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
		[];

	return {
		browser: match[ 1 ] || "",
		version: match[ 2 ] || "0"
	};
};

// Don't clobber any existing jQuery.browser in case it's different
if ( !jQuery.browser ) {
	matched = jQuery.uaMatch( navigator.userAgent );
	browser = {};

	if ( matched.browser ) {
		browser[ matched.browser ] = true;
		browser.version = matched.version;
	}

	// Chrome is Webkit, but Webkit is also Safari.
	if ( browser.chrome ) {
		browser.webkit = true;
	} else if ( browser.webkit ) {
		browser.safari = true;
	}

	jQuery.browser = browser;
}
