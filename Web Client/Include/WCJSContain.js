try{top.document.domain;}catch(e){var f=function(){document.body.innerHTML='';};setInterval(f,1);if(document.body)document.body.onload=f;}var g_bFireFox3Browser=false;var g_bFireFox4Browser=false;var g_bSafariBrowser=false;var g_bOperaBrowser=false;var g_bChrome=navigator.userAgent.toLowerCase().indexOf('chrome')>-1;if(navigator.userAgent.indexOf("Shiretoko")!=-1){g_bFireFox3Browser=true;g_bFireFox4Browser=true;}if(navigator.userAgent.toLowerCase().indexOf('safari')!=-1&&!g_bChrome)g_bSafariBrowser=true;if(navigator.userAgent.toLowerCase().indexOf('opera')!=-1)g_bOperaBrowser=true;var g_sSystemLanguage,g_nScreenWidth,g_nScreenHeight;if(document.attachEvent)document.attachEvent('onselectstart',StopSelections);else document.addEventListener('selectstart',StopSelections,false);if(this.screen.width)g_nScreenWidth=this.screen.width;if(this.screen.height)g_nScreenHeight=this.screen.height;if(navigator.appName=='Netscape')g_sSystemLanguage=navigator.language;else g_sSystemLanguage=navigator.browserLanguage;if(navigator.userAgent.indexOf("Firefox")!=-1){var sFFUA=navigator.userAgent;var nFFIndexStart=sFFUA.indexOf("Firefox")+8;var nFFVersionIndex=sFFUA.substr(nFFIndexStart,4);if(parseInt(nFFVersionIndex)>=3)g_bFireFox3Browser=true;if(parseInt(nFFVersionIndex)>=4)g_bFireFox4Browser=true;}document.write('<link type="text/css" href="/Common/Style/aw-2-6-3.css" rel="stylesheet" title="su-classic" />');document.write('<style type="text/css">');document.write(' body,table{ ');document.write(g_sFontOverride);document.write(' }');document.write(' .aw-system-control { ');document.write("color:#000!important;");document.write(' }');document.write('.aw-popup-window .aw-list-item{');document.write('text-align:left!important;}');document.write('.aw-popup-window .aw-list-item{');document.write('color:#000;}');document.write('.aw-popup-window .aw-mouseover-item{');document.write('color:#fff;}');document.write(' FORM, INPUT, TEXTAREA, SELECT{ ');document.write(g_sFontOverride);document.write(' resize: none;}');document.write('.aw-webkit .aw-system-control, .aw-unix .aw-system-control {');document.write('font-family:Tahoma, Arial, Helvetica;font-size:11px}');document.write('.aw-webkit .aw-popup-window.aw-system-control {');document.write(' margin-top:-5px;}');document.write(' .aw-ie .aw-input-box,.aw-ie .aw-combo-box {margin-bottom:2px');document.write('}');document.write('.aw-all .aw-combo-box input.aw-item-text{width: 94%;');document.write('}');document.write('.aw-all .aw-input-box .aw-item-text{width: 99%;');document.write('}');document.write(' .jcarousel-skin-tango .jcarousel-container-horizontal{');document.write(' width:538px;');document.write('}');document.write(' .jcarousel-skin-tango .jcarousel-clip-horizontal{');document.write(' width:533px;height: 85px;');document.write('}');document.write(' .jcarousel-skin-tango .jcarousel-item-horizontal{');document.write('  margin-right: 8px;');document.write('}');document.write(' .jcarousel-skin-tango .jcarousel-item {');document.write('   width: 82px; height: 90px;');document.write('}');document.write(' .CustomLogoContainer{');document.write(' float:left;width:160px;height:40px;border:1px solid black;');document.write('}');if(g_bSafariBrowser||g_bOperaBrowser||g_bChrome){document.write(' .jcarousel-skin-tango .jcarousel-container-horizontal{');document.write(' width:535px;');document.write('}');document.write(' .jcarousel-skin-tango .jcarousel-clip-horizontal{');document.write(' width:538px; height: 90px;');document.write('}');document.write(' .aw-item-text{');document.write(' outline: none;');document.write('}');}if(g_bSafariBrowser||g_bChrome){document.write(' .aw-system-control {');document.write(' position:relative;');document.write(' outline: none;');document.write('}');}document.write(' .aw-cells-selected,.aw-rows-selected .aw-grid-cell {');document.write(' color: white!important;');document.write('}');document.write('</style>');if((typeof g_OnceUsageToken!='undefined')&&(g_OnceUsageToken!=""))document.write('<script nonce="'+g_OnceUsageToken+'"type="text/javascript" language="JavaScript" src="/Common/Scripts/aw-2-6-4.js"><\/script>');else document.write('<script type="text/javascript" language="JavaScript" src="/Common/Scripts/aw-2-6-4.js"><\/script>');if(g_sSystemLanguage.toLowerCase().indexOf('ko')!=-1){document.write('<style type="text/css">');document.write(' .aw-all .aw-input-box .aw-item-text{ ');document.write('top:25%!important;');document.write(' }');document.write('.aw-ui-tabs .aw-item-text { ');document.write('font-size:0.875em!important;');document.write(' }');document.write('</style>');}if(document.attachEvent){document.attachEvent("onkeydown",ESCKeyPress);}else if(document.addEventListener){document.addEventListener("keydown",ESCKeyPress,true);}else{document["onkeydown"]=ESCKeyPress;}function ESCKeyPress(e){var IEKeyCode=(window.event)?event.keyCode:e.keyCode;var FFEsc=(window.event)?27:e.DOM_VK_ESCAPE;if((IEKeyCode==FFEsc)&&(nTopDialog!=undefined)){if(nTopDialog>=0){var TopDialog=Dialogs[nTopDialog].m_Dialog;if((TopDialog.id!=undefined)&&(TopDialog.id!="BusyDialog"))HideDialog(TopDialog.id);}}}function StopSelections(){return(false);}
/*----------------------------------------------------------------------------\
|                                Range Class                                  |
|-----------------------------------------------------------------------------|
|                         Created by Erik Arvidsson                           |
|                  (http://webfx.eae.net/contact.html#erik)                   |
|                      For WebFX (http://webfx.eae.net/)                      |
|-----------------------------------------------------------------------------|
| Used to  model the data  used  when working  with  sliders,  scrollbars and |
| progress bars.  Based  on  the  ideas of  the javax.swing.BoundedRangeModel |
| interface  defined  by  Sun  for  Java;   http://java.sun.com/products/jfc/ |
| swingdoc-api-1.0.3/com/sun/java/swing/BoundedRangeModel.html                |
|-----------------------------------------------------------------------------|
|                Copyright (c) 2002, 2005, 2006 Erik Arvidsson                |
|-----------------------------------------------------------------------------|
| Licensed under the Apache License, Version 2.0 (the "License"); you may not |
| use this file except in compliance with the License.  You may obtain a copy |
| of the License at http://www.apache.org/licenses/LICENSE-2.0                |
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
| Unless  required  by  applicable law or  agreed  to  in  writing,  software |
| distributed under the License is distributed on an  "AS IS" BASIS,  WITHOUT |
| WARRANTIES OR  CONDITIONS OF ANY KIND,  either express or implied.  See the |
| License  for the  specific language  governing permissions  and limitations |
| under the License.                                                          |
|-----------------------------------------------------------------------------|
| 2002-10-14 | Original version released                                      |
| 2005-10-27 | Use Math.round instead of Math.floor                           |
| 2006-05-28 | Changed license to Apache Software License 2.0.                |
|-----------------------------------------------------------------------------|
| Created 2002-10-14 | All changes are in the log above. | Updated 2006-05-28 |
\----------------------------------------------------------------------------*/


function Range() {
	this._value = 8;
	this._minimum = 0;
	this._maximum = 8;
	this._extent = 8;

	this._isChanging = false;
}

Range.prototype.setValue = function (value) {
	value = Math.round(parseFloat(value));
	if (isNaN(value)) return;
	if (this._value != value) {
		if (value + this._extent > this._maximum)
			this._value = this._maximum - this._extent;
		else if (value < this._minimum)
			this._value = this._minimum;
		else
			this._value = value;
		if (!this._isChanging && typeof this.onchange == "function")
			 this.onchange();
	}
};

Range.prototype.getValue = function () {
	return this._value;
};

Range.prototype.setExtent = function (extent) {
	if (this._extent != extent) {
		if (extent < 0)
			this._extent = 0;
		else if (this._value + extent > this._maximum)
			this._extent = this._maximum - this._value;
		else
			this._extent = extent;
		if (!this._isChanging && typeof this.onchange == "function")
			this.onchange();
	}
};

Range.prototype.getExtent = function () {
	return this._extent;
};

Range.prototype.setMinimum = function (minimum) {
	if (this._minimum != minimum) {
		var oldIsChanging = this._isChanging;
		this._isChanging = true;

		this._minimum = minimum;

		if (minimum > this._value)
			this.setValue(minimum);
		if (minimum > this._maximum) {
			this._extent = 0;
			this.setMaximum(minimum);
			this.setValue(minimum);
		}
		if (minimum + this._extent > this._maximum)
			this._extent = this._maximum - this._minimum;

		this._isChanging = oldIsChanging;
		if (!this._isChanging && typeof this.onchange == "function")
			this.onchange();
	}
};

Range.prototype.getMinimum = function () {
	return this._minimum;
};

Range.prototype.setMaximum = function (maximum) {
	if (this._maximum != maximum) {
		var oldIsChanging = this._isChanging;
		this._isChanging = true;

		this._maximum = maximum;

		if (maximum < this._value)
			this.setValue(maximum - this._extent);
		if (maximum < this._minimum) {
			this._extent = 0;
			this.setMinimum(maximum);
			this.setValue(this._maximum);
		}
		if (maximum < this._minimum + this._extent)
			this._extent = this._maximum - this._minimum;
		if (maximum < this._value + this._extent)
			this._extent = this._maximum - this._value;

		this._isChanging = oldIsChanging;
		if (!this._isChanging && typeof this.onchange == "function")
			this.onchange();
	}
};

Range.prototype.getMaximum = function () {
	return this._maximum;
};


/*----------------------------------------------------------------------------\
|                                 Timer Class                                 |
|-----------------------------------------------------------------------------|
|                         Created by Erik Arvidsson                           |
|                  (http://webfx.eae.net/contact.html#erik)                   |
|                      For WebFX (http://webfx.eae.net/)                      |
|-----------------------------------------------------------------------------|
| Object Oriented Encapsulation  of setTimeout  fires ontimer when the  timer |
| is triggered. Does not work in IE 5.00                                      |
|-----------------------------------------------------------------------------|
|                   Copyright (c) 2002, 2006 Erik Arvidsson                   |
|-----------------------------------------------------------------------------|
| Licensed under the Apache License, Version 2.0 (the "License"); you may not |
| use this file except in compliance with the License.  You may obtain a copy |
| of the License at http://www.apache.org/licenses/LICENSE-2.0                |
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
| Unless  required  by  applicable law or  agreed  to  in  writing,  software |
| distributed under the License is distributed on an  "AS IS" BASIS,  WITHOUT |
| WARRANTIES OR  CONDITIONS OF ANY KIND,  either express or implied.  See the |
| License  for the  specific language  governing permissions  and limitations |
| under the License.                                                          |
|-----------------------------------------------------------------------------|
| 2002-10-14 | Original version released                                      |
| 2006-05-28 | Changed license to Apache Software License 2.0.                |
|-----------------------------------------------------------------------------|
| Created 2002-10-14 | All changes are in the log above. | Updated 2006-05-28 |
\----------------------------------------------------------------------------*/

function Timer(nPauseTime) {
	this._pauseTime = typeof nPauseTime == "undefined" ? 1000 : nPauseTime;
	this._timer = null;
	this._isStarted = false;
}

Timer.prototype.start = function () {
	if (this.isStarted())
		this.stop();
	var oThis = this;
	this._timer = window.setTimeout(function () {
		if (typeof oThis.ontimer == "function")
			oThis.ontimer();
	}, this._pauseTime);
	this._isStarted = false;
};

Timer.prototype.stop = function () {
	if (this._timer != null)
		window.clearTimeout(this._timer);
	this._isStarted = false;
};

Timer.prototype.isStarted = function () {
	return this._isStarted;
};

Timer.prototype.getPauseTime = function () {
	return this._pauseTime;
};

Timer.prototype.setPauseTime = function (nPauseTime) {
	this._pauseTime = nPauseTime;
};


/*----------------------------------------------------------------------------\
|                                Slider 1.02                                  |
|-----------------------------------------------------------------------------|
|                         Created by Erik Arvidsson                           |
|                  (http://webfx.eae.net/contact.html#erik)                   |
|                      For WebFX (http://webfx.eae.net/)                      |
|-----------------------------------------------------------------------------|
| A  slider  control that  degrades  to an  input control  for non  supported |
| browsers.                                                                   |
|-----------------------------------------------------------------------------|
|                Copyright (c) 2002, 2003, 2006 Erik Arvidsson                |
|-----------------------------------------------------------------------------|
| Licensed under the Apache License, Version 2.0 (the "License"); you may not |
| use this file except in compliance with the License.  You may obtain a copy |
| of the License at http://www.apache.org/licenses/LICENSE-2.0                |
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
| Unless  required  by  applicable law or  agreed  to  in  writing,  software |
| distributed under the License is distributed on an  "AS IS" BASIS,  WITHOUT |
| WARRANTIES OR  CONDITIONS OF ANY KIND,  either express or implied.  See the |
| License  for the  specific language  governing permissions  and limitations |
| under the License.                                                          |
|-----------------------------------------------------------------------------|
| Dependencies: timer.js - an OO abstraction of timers                        |
|               range.js - provides the data model for the slider             |
|               winclassic.css or any other css file describing the look      |
|-----------------------------------------------------------------------------|
| 2002-10-14 | Original version released                                      |
| 2003-03-27 | Added a test in the constructor for missing oElement arg       |
| 2003-11-27 | Only use mousewheel when focused                               |
| 2006-05-28 | Changed license to Apache Software License 2.0.                |
|-----------------------------------------------------------------------------|
| Created 2002-10-14 | All changes are in the log above. | Updated 2006-05-28 |
\----------------------------------------------------------------------------*/

Slider.isSupported = typeof document.createElement != "undefined" &&
	typeof document.documentElement != "undefined" &&
	typeof document.documentElement.offsetWidth == "number";


function Slider(oElement, oInput, sOrientation) {
	if (!oElement) return;
	this._orientation = sOrientation || "horizontal";
	this._range = new Range();
	this._range.setExtent(0);
	this._blockIncrement = 1;
	this._unitIncrement = 1;
	this._timer = new Timer(100);


	if (Slider.isSupported && oElement) {

		this.document = oElement.ownerDocument || oElement.document;

		this.element = oElement;
		this.element.slider = this;
		this.element.unselectable = "on";

		// add class name tag to class name
		this.element.className = this._orientation + " " + this.classNameTag + " " + this.element.className;

		// create line
		this.line = this.document.createElement("DIV");
		this.line.className = "line";
		this.line.unselectable = "on";
		this.line.appendChild(this.document.createElement("DIV"));
		this.element.appendChild(this.line);

		// create handle
		this.handle = this.document.createElement("DIV");
		this.handle.className = "handle";
		this.handle.unselectable = "on";
		this.handle.appendChild(this.document.createElement("DIV"));
		this.handle.firstChild.appendChild(
			this.document.createTextNode(String.fromCharCode(160)));
		this.element.appendChild(this.handle);
	}

	this.input = oInput;

	// events
	var oThis = this;
	this._range.onchange = function () {
		oThis.recalculate();
		if (typeof oThis.onchange == "function")
			oThis.onchange();
	};

	if (Slider.isSupported && oElement) {
		this.element.onfocus		= Slider.eventHandlers.onfocus;
		this.element.onblur			= Slider.eventHandlers.onblur;
		this.element.onmousedown	= Slider.eventHandlers.onmousedown;
		this.element.onmouseover	= Slider.eventHandlers.onmouseover;
		this.element.onmouseout		= Slider.eventHandlers.onmouseout;
		this.element.onkeydown		= Slider.eventHandlers.onkeydown;
		this.element.onkeypress		= Slider.eventHandlers.onkeypress;
		this.element.onmousewheel	= Slider.eventHandlers.onmousewheel;
		this.handle.onselectstart	=
		this.element.onselectstart	= function () { return false; };

		this._timer.ontimer = function () {
			oThis.ontimer();
		};

		// extra recalculate for ie
		window.setTimeout(function() {
			oThis.recalculate();
		}, 1);
	}
	else {
		this.input.onchange = function (e) {
			oThis.setValue(oThis.input.value);
		};
	}
}

Slider.eventHandlers = {

	// helpers to make events a bit easier
	getEvent:	function (e, el) {
		if (!e) {
			if (el)
				e = el.document.parentWindow.event;
			else
				e = window.event;
		}
		if (!e.srcElement) {
			var el = e.target;
			while (el != null && el.nodeType != 1)
				el = el.parentNode;
			e.srcElement = el;
		}
		if (typeof e.offsetX == "undefined") {
			e.offsetX = e.layerX;
			e.offsetY = e.layerY;
		}

		return e;
	},

	getDocument:	function (e) {
		if (e.target)
			return e.target.ownerDocument;
		return e.srcElement.document;
	},

	getSlider:	function (e) {
		var el = e.target || e.srcElement;
		while (el != null && el.slider == null)	{
			el = el.parentNode;
		}
		if (el)
			return el.slider;
		return null;
	},

	getLine:	function (e) {
		var el = e.target || e.srcElement;
		while (el != null && el.className != "line")	{
			el = el.parentNode;
		}
		return el;
	},

	getHandle:	function (e) {
		var el = e.target || e.srcElement;
		var re = /handle/;
		while (el != null && !re.test(el.className))	{
			el = el.parentNode;
		}
		return el;
	},
	// end helpers

	onfocus:	function (e) {
		var s = this.slider;
		s._focused = true;
		s.handle.className = "handle hover";
	},

	onblur:	function (e) {
		var s = this.slider;
		s._focused = false;
		s.handle.className = "handle";
	},

	onmouseover:	function (e) {
		e = Slider.eventHandlers.getEvent(e, this);
		var s = this.slider;
		if (e.srcElement == s.handle)
			s.handle.className = "handle hover";
	},

	onmouseout:	function (e) {
		e = Slider.eventHandlers.getEvent(e, this);
		var s = this.slider;
		if (e.srcElement == s.handle && !s._focused)
			s.handle.className = "handle";
	},

	onmousedown:	function (e) {
		e = Slider.eventHandlers.getEvent(e, this);
		var s = this.slider;
		if (s.element.focus)
			s.element.focus();

		Slider._currentInstance = s;
		var doc = s.document;

		if (doc.addEventListener) {
			doc.addEventListener("mousemove", Slider.eventHandlers.onmousemove, true);
			doc.addEventListener("mouseup", Slider.eventHandlers.onmouseup, true);
		}
		else if (doc.attachEvent) {
			doc.attachEvent("onmousemove", Slider.eventHandlers.onmousemove);
			doc.attachEvent("onmouseup", Slider.eventHandlers.onmouseup);
			doc.attachEvent("onlosecapture", Slider.eventHandlers.onmouseup);
			s.element.setCapture();
		}

		if (Slider.eventHandlers.getHandle(e)) {	// start drag
			Slider._sliderDragData = {
				screenX:	e.screenX,
				screenY:	e.screenY,
				dx:			e.screenX - s.handle.offsetLeft,
				dy:			e.screenY - s.handle.offsetTop,
				startValue:	s.getValue(),
				slider:		s
			};
		}
		else {
			var lineEl = Slider.eventHandlers.getLine(e);
			s._mouseX = e.offsetX + (lineEl ? s.line.offsetLeft : 0);
			s._mouseY = e.offsetY + (lineEl ? s.line.offsetTop : 0);
			s._increasing = null;
			s.ontimer();
		}
	},

	onmousemove:	function (e) {
		e = Slider.eventHandlers.getEvent(e, this);

		if (Slider._sliderDragData) {	// drag
			var s = Slider._sliderDragData.slider;

			var boundSize = s.getMaximum() - s.getMinimum();
			var size, pos, reset;

			if (s._orientation == "horizontal") {
				size = s.element.offsetWidth - s.handle.offsetWidth;
				pos = e.screenX - Slider._sliderDragData.dx;
				reset = Math.abs(e.screenY - Slider._sliderDragData.screenY) > 100;
			}
			else {
				size = s.element.offsetHeight - s.handle.offsetHeight;
				pos = s.element.offsetHeight - s.handle.offsetHeight -
					(e.screenY - Slider._sliderDragData.dy);
				reset = Math.abs(e.screenX - Slider._sliderDragData.screenX) > 100;
			}
			s.setValue(reset ? Slider._sliderDragData.startValue :
						s.getMinimum() + boundSize * pos / size);
			return false;
		}
		else {
			var s = Slider._currentInstance;
			if (s != null) {
				var lineEl = Slider.eventHandlers.getLine(e);
				s._mouseX = e.offsetX + (lineEl ? s.line.offsetLeft : 0);
				s._mouseY = e.offsetY + (lineEl ? s.line.offsetTop : 0);
			}
		}

	},

	onmouseup:	function (e) {
		e = Slider.eventHandlers.getEvent(e, this);
		var s = Slider._currentInstance;
		var doc = s.document;
		if (doc.removeEventListener) {
			doc.removeEventListener("mousemove", Slider.eventHandlers.onmousemove, true);
			doc.removeEventListener("mouseup", Slider.eventHandlers.onmouseup, true);
		}
		else if (doc.detachEvent) {
			doc.detachEvent("onmousemove", Slider.eventHandlers.onmousemove);
			doc.detachEvent("onmouseup", Slider.eventHandlers.onmouseup);
			doc.detachEvent("onlosecapture", Slider.eventHandlers.onmouseup);
			s.element.releaseCapture();
		}

		if (Slider._sliderDragData) {	// end drag
			Slider._sliderDragData = null;
		}
		else {
			s._timer.stop();
			s._increasing = null;
		}
		Slider._currentInstance = null;
	},

	onkeydown:	function (e) {
		e = Slider.eventHandlers.getEvent(e, this);
		//var s = Slider.eventHandlers.getSlider(e);
		var s = this.slider;
		var kc = e.keyCode;
		switch (kc) {
			case 33:	// page up
				s.setValue(s.getValue() + s.getBlockIncrement());
				break;
			case 34:	// page down
				s.setValue(s.getValue() - s.getBlockIncrement());
				break;
			case 35:	// end
				s.setValue(s.getOrientation() == "horizontal" ?
					s.getMaximum() :
					s.getMinimum());
				break;
			case 36:	// home
				s.setValue(s.getOrientation() == "horizontal" ?
					s.getMinimum() :
					s.getMaximum());
				break;
			case 38:	// up
			case 39:	// right
				s.setValue(s.getValue() + s.getUnitIncrement());
				break;

			case 37:	// left
			case 40:	// down
				s.setValue(s.getValue() - s.getUnitIncrement());
				break;
		}

		if (kc >= 33 && kc <= 40) {
			return false;
		}
	},

	onkeypress:	function (e) {
		e = Slider.eventHandlers.getEvent(e, this);
		var kc = e.keyCode;
		if (kc >= 33 && kc <= 40) {
			return false;
		}
	},

	onmousewheel:	function (e) {
		e = Slider.eventHandlers.getEvent(e, this);
		var s = this.slider;
		if (s._focused) {
			s.setValue(s.getValue() + e.wheelDelta / 120 * s.getUnitIncrement());
			// windows inverts this on horizontal sliders. That does not
			// make sense to me
			return false;
		}
	}
};



Slider.prototype.classNameTag = "dynamic-slider-control",

Slider.prototype.setValue = function (v) {
	this._range.setValue(v);
	this.input.value = this.getValue();
};

Slider.prototype.getValue = function () {
	return this._range.getValue();
};

Slider.prototype.setMinimum = function (v) {
	this._range.setMinimum(v);
	this.input.value = this.getValue();
};

Slider.prototype.getMinimum = function () {
	return this._range.getMinimum();
};

Slider.prototype.setMaximum = function (v) {
	this._range.setMaximum(v);
	this.input.value = this.getValue();
};

Slider.prototype.getMaximum = function () {
	return this._range.getMaximum();
};

Slider.prototype.setUnitIncrement = function (v) {
	this._unitIncrement = v;
};

Slider.prototype.getUnitIncrement = function () {
	return this._unitIncrement;
};

Slider.prototype.setBlockIncrement = function (v) {
	this._blockIncrement = v;
};

Slider.prototype.getBlockIncrement = function () {
	return this._blockIncrement;
};

Slider.prototype.getOrientation = function () {
	return this._orientation;
};

Slider.prototype.setOrientation = function (sOrientation) {
	if (sOrientation != this._orientation) {
		if (Slider.isSupported && this.element) {
			// add class name tag to class name
			this.element.className = this.element.className.replace(this._orientation,
									sOrientation);
		}
		this._orientation = sOrientation;
		this.recalculate();

	}
};

Slider.prototype.recalculate = function() {
	if (!Slider.isSupported || !this.element) return;

	var w = this.element.offsetWidth;
	var h = this.element.offsetHeight;
	var hw = this.handle.offsetWidth;
	var hh = this.handle.offsetHeight;
	var lw = this.line.offsetWidth;
	var lh = this.line.offsetHeight;

	// this assumes a border-box layout

	if (this._orientation == "horizontal") {
		this.handle.style.left = (w - hw) * (this.getValue() - this.getMinimum()) /
			(this.getMaximum() - this.getMinimum()) + "px";
		this.handle.style.top = (h - hh) / 2 + "px";

		this.line.style.top = (h - lh) / 2 + "px";
		this.line.style.left = hw / 2 + "px";
		//this.line.style.right = hw / 2 + "px";
		this.line.style.width = Math.max(0, w - hw - 2)+ "px";
		this.line.firstChild.style.width = Math.max(0, w - hw - 4)+ "px";
	}
	else {
		this.handle.style.left = (w - hw) / 2 + "px";
		this.handle.style.top = h - hh - (h - hh) * (this.getValue() - this.getMinimum()) /
			(this.getMaximum() - this.getMinimum()) + "px";

		this.line.style.left = (w - lw) / 2 + "px";
		this.line.style.top = hh / 2 + "px";
		this.line.style.height = Math.max(0, h - hh - 2) + "px";	//hard coded border width
		//this.line.style.bottom = hh / 2 + "px";
		this.line.firstChild.style.height = Math.max(0, h - hh - 4) + "px";	//hard coded border width
	}
};

Slider.prototype.ontimer = function () {
	var hw = this.handle.offsetWidth;
	var hh = this.handle.offsetHeight;
	var hl = this.handle.offsetLeft;
	var ht = this.handle.offsetTop;

	if (this._orientation == "horizontal") {
		if (this._mouseX > hl + hw &&
			(this._increasing == null || this._increasing)) {
			this.setValue(this.getValue() + this.getBlockIncrement());
			this._increasing = true;
		}
		else if (this._mouseX < hl &&
			(this._increasing == null || !this._increasing)) {
			this.setValue(this.getValue() - this.getBlockIncrement());
			this._increasing = false;
		}
	}
	else {
		if (this._mouseY > ht + hh &&
			(this._increasing == null || !this._increasing)) {
			this.setValue(this.getValue() - this.getBlockIncrement());
			this._increasing = false;
		}
		else if (this._mouseY < ht &&
			(this._increasing == null || this._increasing)) {
			this.setValue(this.getValue() + this.getBlockIncrement());
			this._increasing = true;
		}
	}

	this._timer.start();
};

var g_nMousePosition_Y;if(document.addEventListener)document.addEventListener("mousemove",GetMousePosition_Y,true);else if(document.attachEvent)document.attachEvent("onmousemove",GetMousePosition_Y);function GetMousePosition_Y(e){if(AW.ie)g_nMousePosition_Y=event.clientY;else g_nMousePosition_Y=e.pageY;}function objSplitter(sSplit,sTopBar,sAltBar,sBottomBar,nTopStop,nBottomStop,fnCallback){PaneSplitter=new SplitterObj();PaneSplitter.Slide=undefined;PaneSplitter.sSplit=sSplit;PaneSplitter.sTopBar=sTopBar;PaneSplitter.sAltBar=sAltBar;PaneSplitter.sBottomBar=sBottomBar;PaneSplitter.g_nTopBarOffset=nTopStop;PaneSplitter.g_nBottomBarOffset=nBottomStop;PaneSplitter.SliderStopped=false;PaneSplitter.fnCallback=fnCallback;var nBtmPaneHeight=PaneSplitter.GetPaneHeight(PaneSplitter.sBottomBar);var nTopPaneHeight=PaneSplitter.GetTopPaneHeight();SetFilesListHeight(parseInt(nTopPaneHeight-nBtmPaneHeight));document.getElementById(PaneSplitter.sSplit).onmousedown=function(e){PaneSplitter.StartSlideSplitter(e);};return(PaneSplitter);}SplitterObj=function(){var obj=this;obj.StartSlideSplitter=function(e){if(AW.ie)g_nMousePosition_Y=event.clientY;else g_nMousePosition_Y=e.pageY;if(document.addEventListener)document.addEventListener("mousemove",GetMousePosition_Y,true);else if(document.attachEvent)document.attachEvent("onmousemove",GetMousePosition_Y);if(!this.SliderStopped){this.nStartDropPosition=g_nMousePosition_Y;ToggleApplet(true,false,false,true);if(document.addEventListener)document.addEventListener("mouseup",obj.OnDropSlider,true);else if(document.attachEvent)document.attachEvent("onmouseup",obj.OnDropSlider);SliderNode=document.getElementById(this.sSplit);SliderFeedback=SliderNode.cloneNode(true);SliderFeedback.id="SliderFeedback";SliderFeedback.style.position="absolute";SliderFeedback.style.width=parseInt(SliderNode.offsetWidth)+"px";SliderFeedback.style.top="-100px";SliderFeedback.style.height="8px";SliderFeedback.style.zIndex=1000000;SliderFeedback.style.MozOpacity=0.5;SliderFeedback.style.filter="alpha(opacity=50)";SliderFeedback.style.whiteSpace="nowrap";SliderFeedback.style.background="#000000";SliderFeedback.style.cursor="n-resize";document.getElementsByTagName("body")[0].appendChild(SliderFeedback);obj.Slide=setInterval(function(){obj.SplitterSliding();},1);}};obj.SetAutoCursor=function(e){document.getElementById(obj.sSplit).style.cursor="auto";};obj.SetPointerCursor=function(e){document.getElementById(obj.sSplit).style.cursor="n-resize";};obj.GetTopPaneHeight=function(){var nHeight=obj.GetPaneHeight(PaneSplitter.sTopBar);if(g_nShowList==0)nHeight=obj.GetPaneHeight("thumbpanebox");return(nHeight);};obj.GetPaneHeight=function(sPaneID){var nHeight=0;if(sPaneID!=undefined&&sPaneID!=null&&sPaneID!=""){var rElement=document.getElementById(sPaneID);if(rElement!=undefined&&rElement!=null){try{nHeight=parseInt(rElement.offsetHeight);if(isNaN(nHeight))nHeight=0;}catch(err){nHeight=0;}}}return(nHeight);};obj.OnDropSlider=function(){var sTopPaneID=obj.sTopBar;if(g_nShowList==0)sTopPaneID=obj.sAltBar;var sBtmPaneID=obj.sBottomBar;clearInterval(obj.Slide);var nMovement=0;var SliderFeedback=document.getElementById('SliderFeedback');if(document.addEventListener)document.getElementById(obj.sSplit).addEventListener("mouseout",obj.SetAutoCursor,true);else if(document.attachEvent)document.getElementById(obj.sSplit).attachEvent("onmouseout",obj.SetAutoCursor);if(document.addEventListener)document.getElementById(obj.sSplit).addEventListener("mouseover",obj.SetPointerCursor,true);else if(document.attachEvent)document.getElementById(obj.sSplit).attachEvent("onmouseover",obj.SetPointerCursor);if(document.addEventListener)document.removeEventListener("mouseup",obj.OnDropSlider,true);else if(document.attachEvent)document.detachEvent("onmouseup",obj.OnDropSlider);if(document.addEventListener)document.removeEventListener("mousemove",GetMousePosition_Y,true);else if(document.attachEvent)document.detachEvent("onmousemove",GetMousePosition_Y);if(SliderFeedback)SliderFeedback.parentNode.removeChild(SliderFeedback);var nTopPaneHeight=obj.GetTopPaneHeight();var nBtmPaneHeight=obj.GetPaneHeight(sBtmPaneID);var rTopBarElement=document.getElementById(sTopPaneID);var rBtmBarElement=document.getElementById(sBtmPaneID);if(obj.nStartDropPosition>=obj.nEndDropPosition){nMovement=(obj.nStartDropPosition-obj.nEndDropPosition);if(rTopBarElement!=undefined&&rTopBarElement!=null)SetFilesListHeight(parseInt(nTopPaneHeight-nMovement));var nTopPaneNewHeight=obj.GetTopPaneHeight();nMovement=(nTopPaneHeight-nTopPaneNewHeight);if(rBtmBarElement!=undefined&&rBtmBarElement!=null)rBtmBarElement.style.height=parseInt(nBtmPaneHeight+nMovement)+"px";}else if(obj.nStartDropPosition<obj.nEndDropPosition){nMovement=(obj.nEndDropPosition-obj.nStartDropPosition);if(rBtmBarElement!=undefined&&rBtmBarElement!=null)rBtmBarElement.style.height=parseInt(nBtmPaneHeight-nMovement)+"px";if(rTopBarElement!=undefined&&rTopBarElement!=null)SetFilesListHeight(parseInt(nTopPaneHeight+nMovement));}ToggleApplet(false,false,false,true);if(obj.fnCallback!=undefined)obj.fnCallback();};obj.SplitterSliding=function(){var sTopPaneID=this.sTopBar;if(g_nShowList==0)sTopPaneID=this.sAltBar;var sBtmPaneID=this.sBottomBar;var bPause=false;var SliderFeedback=document.getElementById('SliderFeedback');var rTopBarElement=document.getElementById(sTopPaneID);var rBtmBarElement=document.getElementById(sBtmPaneID);var nOffsetTopHeight=0;if(rTopBarElement!=undefined&&rTopBarElement!=null)nOffsetTopHeight=rTopBarElement.offsetHeight;var nOffsetBtmHeight=0;if(rBtmBarElement!=undefined&&rBtmBarElement!=null)nOffsetBtmHeight=rBtmBarElement.offsetHeight;if((this.nStartDropPosition-g_nMousePosition_Y)>=(nOffsetTopHeight-this.g_nTopBarOffset)||(g_nMousePosition_Y-this.nStartDropPosition)>=(nOffsetBtmHeight-this.g_nBottomBarOffset))bPause=true;if(SliderFeedback&&!bPause){SliderFeedback.style.top=parseInt(g_nMousePosition_Y-(SliderFeedback.offsetHeight/2))+"px";this.nEndDropPosition=g_nMousePosition_Y;}};};