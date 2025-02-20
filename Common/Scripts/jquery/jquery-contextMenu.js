// jQuery Context Menu Plugin
//
// Version 1.01
//
// Cory S.N. LaViska
// A Beautiful Site (http://abeautifulsite.net/)
//
// More info: http://abeautifulsite.net/2008/09/jquery-context-menu-plugin/
//
// Terms of Use
//
// This plugin is dual-licensed under the GNU General Public License
//   and the MIT License and is copyright A Beautiful Site, LLC.
//
// Modified by Douglas J. Papenthien
//	* Allows for preshow event notification
//	* Supports nesting within a jQuery selectable
//	* Supports a custom attribute to define the callback
//	* Ensures the menu HTML is a child of <body> so that positioning is always correct
if (jQuery) (function () {
	$.extend($.fn, {

		contextMenu: function (o, callback) {
			// default vars
			var bAllowLeftClick = false;
			var bShowAbove = false;
			var bShowBelow = false;
			var bAlignleft = false;

			// Defaults
			if (o.menu == undefined) return false;
			if (o.inSpeed == undefined) o.inSpeed = 150;
			if (o.outSpeed == undefined) o.outSpeed = 75;
			// 0 needs to be -1 for expected results (no fade)
			if (o.inSpeed == 0) o.inSpeed = -1;
			if (o.outSpeed == 0) o.outSpeed = -1;

			// do we allow left mouse click to trigger this menu?
			if (parseInt(o.allowLeftClick) == 1) bAllowLeftClick = true;

			// do we show above or below the click position?
			if (parseInt(o.showAbove) == 1) bShowAbove = true;

			// JMV - 05/28/13 - added show below to adjust the menu under the trigger element
			if (parseInt(o.showBelow) == 1) bShowBelow = true;

			// JMV - 05/28/13 - added align left to adjust the menu under the trigger element
			if (parseInt(o.alignleft) == 1) bAlignleft = true;


			// if we haven't already, move the context menu HTML to be a child of the <body> tag
			// this is necessary to ensure it's properly positioned when displayed because I can't
			// makes or tails of the positioning logic except that it sets the position relative
			// to its parent position
			if (!$("#" + o.menu).hasClass("ui-contextmenu"))
				$("#" + o.menu).detach().appendTo("body");

			// Loop each context menu
			$(this).each(function () {
				var el = $(this);
				var offset = $(el).offset();
				// Add ui-contextmenu class
				$('#' + o.menu).addClass('ui-contextmenu');
				// Simulate a true right click
				$(this).mousedown(function (e) {
					var evt = e;


					// JMV - 02/16/12 - trigger a "beforehide" event so users can customize the menu at display time
					if ((o.beforehide != "undefined") && (typeof o.beforehide == "function"))
						o.beforehide();


					// DJP - 05/27/11 - Originally placed within the mouseup handler, this did not dismiss the
					// menu when clicking to drag select and a menu was present
					// Dismiss any active context menus on our document
					$(".ui-contextmenu").hide();

					// DJP - 05/27/11 - Originally was evt.stopPropagation, but this breaks jQuery.selectable
					// when used within a selectable object
					evt.preventDefault();

					$(this).mouseup(function (e) {
						// DJP - 05/27/11 - Originally was evt.stopPropagation, but this breaks jQuery.selectable
						// when used within a selectable object
						e.preventDefault();
						var srcElement = $(this);
						$(this).unbind('mouseup');

						if (evt.button == 2 || (bAllowLeftClick && evt.which == 1)) {
							// Get this context menu
							var menu = $('#' + o.menu);

							if ($(el).hasClass('disabled')) return false;

							// Detect mouse position
							var d = {}, x, y;
							if (self.innerHeight) {
								d.pageYOffset = self.pageYOffset;
								d.pageXOffset = self.pageXOffset;
								d.innerHeight = self.innerHeight;
								d.innerWidth = self.innerWidth;
							} else if (document.documentElement &&
								document.documentElement.clientHeight) {
								d.pageYOffset = document.documentElement.scrollTop;
								d.pageXOffset = document.documentElement.scrollLeft;
								d.innerHeight = document.documentElement.clientHeight;
								d.innerWidth = document.documentElement.clientWidth;
							} else if (document.body) {
								d.pageYOffset = document.body.scrollTop;
								d.pageXOffset = document.body.scrollLeft;
								d.innerHeight = document.body.clientHeight;
								d.innerWidth = document.body.clientWidth;
							}
							(e.pageX) ? x = e.pageX : x = e.clientX + d.scrollLeft;
							(e.pageY) ? y = e.pageY : y = e.clientY + d.scrollTop;

							// DJP - 05/27/11 - trigger a "beforeshow" event so users can customize the menu at display time
							if ((o.beforeshow != "undefined") && (typeof o.beforeshow == "function"))
								o.beforeshow();

							// Show the menu
							$(document).unbind('click');

							// do we have a specific positioning element
							if (o.alignToTargetElement != undefined && srcElement.offset() != undefined) {
								y = srcElement.offset().top;

								if (bAlignleft && srcElement.outerWidth() != undefined)
									x = ((srcElement.offset().left + srcElement.outerWidth()) -$(menu).outerWidth());
								else
									x = srcElement.offset().left;
							} // if

							if (bShowAbove) {
								nOuterHeight = $(menu).outerHeight();
								y = y - nOuterHeight;
							} // if

							// JMV - 05/28/13 - added show below to adjust the menu under the trigger element
							if (bShowBelow &&  srcElement.outerHeight() != undefined) {
								y = y + srcElement.outerHeight();
							} // if

							$(menu).css({ top: y, left: x }).fadeIn(o.inSpeed);
							// Hover events
							$(menu).find('A').mouseover(function () {
								$(menu).find('LI.hover').removeClass('hover');
								$(this).parent().addClass('hover');
							}).mouseout(function () {
								$(menu).find('LI.hover').removeClass('hover');
							});

							// Keyboard
							$(document).keydown(function (e) {
								switch (e.keyCode) {
									case 38: // up
										if ($(menu).find('LI.hover').size() == 0) {
											$(menu).find('LI:last').addClass('hover');
										} else {
											$(menu).find('LI.hover').removeClass('hover').prevAll('LI:not(.disabled)').eq(0).addClass('hover');
											if ($(menu).find('LI.hover').size() == 0) $(menu).find('LI:last').addClass('hover');
										}
										break;
									case 40: // down
										if ($(menu).find('LI.hover').size() == 0) {
											$(menu).find('LI:first').addClass('hover');
										} else {
											$(menu).find('LI.hover').removeClass('hover').nextAll('LI:not(.disabled)').eq(0).addClass('hover');
											if ($(menu).find('LI.hover').size() == 0) $(menu).find('LI:first').addClass('hover');
										}
										break;
									case 13: // enter
										$(menu).find('LI.hover A').trigger('click');
										break;
									case 27: // esc
										$(document).trigger('click');
										break
								}
							});

							// When items are selected
							$('#' + o.menu).find('A').unbind('click');
							$('#' + o.menu).find('LI:not(.disabled) A').click(function (event) {
								$(document).unbind('click').unbind('keydown');


								// JMV - 02/16/12 - trigger a "beforeshow" event so users can customize the menu at display time
								if ((o.beforehide != "undefined") && (typeof o.beforehide == "function"))
									o.beforehide();

								$(".ui-contextmenu").hide();

								// make sure we don't actually follow the link
								event.preventDefault();

								// Callback
								if ($(this).attr("data-handler")) {
									var sHandler = $(this).attr("data-handler");

									// strip off "javascript:"
									sHandler = sHandler.replace("javascript:", "");

									// evaluate the data handler
									$.globalEval(sHandler);
								} // if
								else if (callback)
									callback($(this).attr('href').substr(1), $(srcElement), { x: x - offset.left, y: y - offset.top, docX: x, docY: y });

								return false;
							});

							// Hide bindings
							setTimeout(function () { // Delay for Mozilla
								$(document).click(function () {
									$(document).unbind('click').unbind('keydown');
									$(menu).fadeOut(o.outSpeed);

									// JMV - 06/18/13 - trigger a "beforeshow" event so users can customize the menu at display time
									if ((o.afterhide != "undefined") && (typeof o.afterhide == "function"))
										o.afterhide();

									return false;
								});
							}, 0);
						}
					});
				});


				// #dlb - 05/08/13 - ".browser" is no longer in jQuery, so use an alternative.
				var sUserAgent = navigator.userAgent.toLowerCase();

				// Disable text selection
				if (sUserAgent.indexOf("firefox") >= 0) {																										// see #dlb
					$('#' + o.menu).each(function () { $(this).css({ 'MozUserSelect': 'none' }); });
				} else if (sUserAgent.indexOf("msie") >= 0) {																									// see #dlb
					$('#' + o.menu).each(function () { $(this).bind('selectstart.disableTextSelect', function () { return false; }); });
				} else {
					$('#' + o.menu).each(function () { $(this).bind('mousedown.disableTextSelect', function () { return false; }); });
				}

				// Disable browser context menu (requires both selectors to work in IE/Safari + FF/Chrome)
				$(el).add($('UL.ui-contextmenu')).bind('contextmenu', function () { return false; });

			});
			return $(this);
		},

		// Disable context menu items on the fly
		disableContextMenuItems: function (o) {
			if (o == undefined) {
				// Disable all
				$(this).find('LI').addClass('disabled');
				return ($(this));
			}
			$(this).each(function () {
				if (o != undefined) {
					var d = o.split(',');
					for (var i = 0; i < d.length; i++) {
						$(this).find('A[href="' + d[i] + '"]').parent().addClass('disabled');

					}
				}
			});
			return ($(this));
		},

		// Enable context menu items on the fly
		enableContextMenuItems: function (o) {
			if (o == undefined) {
				// Enable all
				$(this).find('LI.disabled').removeClass('disabled');
				return ($(this));
			}
			$(this).each(function () {
				if (o != undefined) {
					var d = o.split(',');
					for (var i = 0; i < d.length; i++) {
						$(this).find('A[href="' + d[i] + '"]').parent().removeClass('disabled');

					}
				}
			});
			return ($(this));
		},

		// Disable context menu(s)
		disableContextMenu: function () {
			$(this).each(function () {
				$(this).addClass('disabled');
			});
			return ($(this));
		},

		// Enable context menu(s)
		enableContextMenu: function () {
			$(this).each(function () {
				$(this).removeClass('disabled');
			});
			return ($(this));
		},

		// Destroy context menu(s)
		destroyContextMenu: function () {
			// Destroy specified context menus
			$(this).each(function () {
				// Disable action
				$(this).unbind('mousedown').unbind('mouseup');
			});
			return ($(this));
		}

	});
})(jQuery);