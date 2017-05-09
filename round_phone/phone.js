function NewtonCallback() {
	function getCaption(e) {
		return captions[default_settings.lang][e]
	}

	function getMasks() {
		return [ default_settings.phone_format ]; //masks[default_settings.lang]
	}

	function getPrefix() {
		return prefix[default_settings.lang]
	}

	function convertMsecs(e) {
		return hours = Math.floor(e / 36e5), rest_msec = e - 60 * hours * 60 * 1e3, minutes = Math.floor(rest_msec / 6e4), rest_msec -= 60 * minutes * 1e3, seconds = Math.floor(rest_msec / 1e3), rest_msec -= 1e3 * seconds, rest_msec > 10 && (rest_msec = Math.floor(rest_msec / 10)), minutes < 10 && (minutes = "0" + minutes), seconds < 10 && (seconds = "0" + seconds), rest_msec < 10 && (rest_msec = "0" + rest_msec), hours > 0 ? (hours < 10 && (hours = "0" + hours), hours + ":" + minutes + ":" + seconds) : minutes + ":" + seconds + "." + rest_msec
	}

	function serialize(e) {
		if (e && "FORM" === e.nodeName) { 
			var t, n, a = {};
			for (t = e.elements.length - 1; t >= 0; t -= 1)
				if ("" !== e.elements[t].name) switch (e.elements[t].nodeName) {
					case "INPUT":
						switch (e.elements[t].type) {
							case "text":
							case "tel":
							case "hidden":
							case "password":
							case "button":
							case "reset":
							case "submit":
								a[e.elements[t].name] = e.elements[t].value;
								break;
							case "checkbox":
							case "radio":
								e.elements[t].checked && (a[e.elements[t].name] = e.elements[t].value);
								break;
							case "file":
						}
						break;
					case "TEXTAREA":
						a[e.elements[t].name] = e.elements[t].value;
						break;
					case "SELECT":
						switch (e.elements[t].type) {
							case "select-one":
								a[e.elements[t].name] = e.elements[t].value;
								break;
							case "select-multiple":
								for (n = e.elements[t].options.length - 1; n >= 0; n -= 1) e.elements[t].options[n].selected && (a[e.elements[t].name] = e.elements[t].options[n].value)
						}
						break;
					case "BUTTON":
						switch (e.elements[t].type) {
							case "reset":
							case "submit":
							case "button":
								a[e.elements[t].name] = e.elements[t].value
						}
				}
				return a
		}
	}

	function hasClass(e, t) {
		return e.className ? e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)")) : !1
	}

	function addClass(e, t) {
		hasClass(e, t) || (e.className += " " + t)
	}

	function removeClass(e, t) {
		if (hasClass(e, t)) {
			var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
			e.className = e.className.replace(n, " ")
		}
	}

	function isMobile() {
		//return true; 
		return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4))
	}

	function iOSversion() {
		if (/iP(hone|od|ad)/.test(navigator.platform)) {
			var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
			return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)]
		}
	}

	function isChromeAndroid() {
		return navigator.userAgent.indexOf("Android ") > -1 && navigator.userAgent.indexOf("Chrome") > -1
	}

	function isNewIOS() {
		var e = iOSversion();
		return void 0 !== e ? e[0] >= 8 : isChromeAndroid() ? !0 : !1
	}

	function isIE() {
		var e = document.all && document.compatMode,
			t = window.navigator.msPointerEnabled;
		return e || t ? !0 : !1
	}

	function buildParams(e, t, n) {
		var a = [];
		for (var i in t)
			if (t.hasOwnProperty(i) && "function" != typeof t[i]) {
				var o = e + (n ? "[" + i + "]" : i);
				t[i] instanceof Array || "object" == typeof t[i] ? a = a.concat(buildParams(o, t[i], !0)) : a.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[i]))
			}
		return a
	}

	function addReferer(e) {
		return e.referer = window.location.href, e
	}

	function merge_options(e, t) {
		var n = {};
		for (var a in e) n[a] = e[a];
		for (var a in t) n[a] = t[a];
		return n
	}

	function cancelEvent(e) {
		return e = e ? e : window.event, e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1, !1
	}

	function isDescendant(e, t) {
		if (t == e) return !0;
		for (var n = t.parentNode; null != n;) {
			if (n == e) return !0;
			n = n.parentNode
		}
		return !1
	}

	function getParam(e) {
		return e && "object" == typeof newton_params && void 0 !== newton_params[e] ? newton_params[e] : void 0
	}

	function init() {
		clearInterval(interval);
		try {
			afterSettings(), new Fingerprint2({
				//swfPath: host + "/fonts/fl.swf",
				excludeUserAgent: !0
			}).get(function(e) {
				fingerprint = e
			})
		} catch (e) {
			return remoteErrorLog(e, "init"), !1
		}
	}

	function afterSettings() {
		
		if (isLocalStorageSupported || remoteLocalStorageLog(), getLandingPageReferrer() && remoteRefererLog(getLandingPageReferrer()), default_settings.calltracking && applyCalltracking(), default_settings.callback) {
			var e = checkInit();
			//default_settings.silent_mode = 1;
			//handlePhoneButton();
			
			!default_settings.show_on_mobile && is_mobile || !e || (0 == default_settings.silent_mode && (initialized = !0, applyCss(), drawButton(), drawDialog(), drawForm(), drawDepartmentSelect(), drawCallTypeSelect(), applyInputMask(), handleCloseButtonClick(), handleDialogButtonsClick(), handleForm(), handleForget(), handleLocationHashChange(), handleMissedButtonClick(), handlePhoneButton(), handleDepartmentSelect(), handleCallTypeSelect(), handleActiveDelay(), handleMultiwidget(), manageEvents(is_mobile), evalAdditionalJavascript(), isVkVerion() && (afterLoad = function() {
				
				showForm()
			}), null != afterLoad && afterLoad(), checkLocationHash(), handleKeyboard()), onInit(), setTimeout(function() {
				enableSetingsUpdate(is_mobile)
			}, settings_update_interval))
		}
		newton_local_cookie = (m = document.cookie.match(new RegExp("(?:^|; )" + "NWTN".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"))) ? decodeURIComponent(m[1]) : void 0
	}

	function applyCalltracking() {
		if (default_settings.calltracking_targets)
			for (var e in default_settings.calltracking_targets) {
				var t = default_settings.calltracking_targets[e];
				for (var n in t) {
					var a = t[n].type,
						i = t[n].name,
						o = t[n].html;
					if ("#" == a) {
						var l = document.getElementById(i);
						exchangeNumber(l, o)
					}
					if ("." == a) {
						var r = document.getElementsByClassName(i);
						for (var s in r) exchangeNumber(r[s], o)
					}
				}
			}
	}

	function exchangeNumber(e, t) {
		e && (e.innerHTML = t)
	}

	function onInit() {
		var e = getParam("onInit");
		void 0 !== e && e()
	}

	function checkInit() {
		return default_settings.free_version ? is_mobile && default_settings.enable_mobile_direct_call || !is_mobile && default_settings.is_multiwidget && (default_settings.multiwidget_application || default_settings.multiwidget_consultant) : !0
	}

	function checkLocationHash() {
		"#newton" == window.location.hash && (showForm(), window.location.hash = "#newton-ok")
	}

	function handleLocationHashChange() {
		addEvent(window, "hashchange", checkLocationHash)
	}

	function evalAdditionalJavascript() {
		null == default_settings.additional_javascript || isVkVerion() || eval(default_settings.additional_javascript)
	}

	function handleForget() {
		var e = document.getElementById("newton_callback_wrap_forget");
		e && addEvent(e, "click", function() {
			hideForm();
			var e = document.getElementById("newton_bottom_wrap");
			e && addClass(e, "newton_forget"), setForget(), disableAll()
		})
	}

	function handleKeyboard() {
		addEvent(document.getElementById(phone_input_id), "focus", function() {
			keyboard_opened = !0
		}), addEvent(document.getElementById(phone_input_id), "blur", function() {
			keyboard_opened = !1, is_mobile && isNewIOS() && setTimeout(function() {
				isOpened() && correctWidgetSize()
			}, 500)
		})
	}

	function isCorrectPhonePrefix(e) {
		switch (e) {
			case "7700":
			case "7701":
			case "7702":
			case "7703":
			case "7704":
			case "7705":
			case "7706":
			case "7707":
			case "7708":
			case "7709":
			case "7710":
			case "7711":
			case "7712":
			case "7713":
			case "7714":
			case "7715":
			case "7716":
			case "7717":
			case "7718":
			case "7721":
			case "7722":
			case "7723":
			case "7724":
			case "7725":
			case "7726":
			case "7727":
			case "7728":
			case "7729":
			case "7736":
			case "7747":
			case "7750":
			case "7751":
			case "7760":
			case "7761":
			case "7762":
			case "7763":
			case "7764":
			case "7771":
			case "7775":
			case "7776":
			case "7777":
			case "7778":
			case "7800":
			case "7801":
			case "7802":
			case "7803":
			case "7804":
			case "7805":
			case "7806":
			case "7807":
			case "7808":
			case "7809":
			case "7811":
			case "7812":
			case "7813":
			case "7814":
			case "7815":
			case "7816":
			case "7817":
			case "7818":
			case "7820":
			case "7821":
			case "7831":
			case "7833":
			case "7834":
			case "7835":
			case "7836":
			case "7841":
			case "7842":
			case "7843":
			case "7844":
			case "7845":
			case "7846":
			case "7847":
			case "7848":
			case "7851":
			case "7855":
			case "7861":
			case "7862":
			case "7863":
			case "7865":
			case "7866":
			case "7867":
			case "7869":
			case "7871":
			case "7872":
			case "7873":
			case "7877":
			case "7878":
			case "7879":
				return !0
		}
		return !1
	}

	function applyInputMask() {
		var e = function() {
				var e = this.value,
					t = e.replace(/\D+/g, ""),
					n = t.substr(0, 2);
				return 4 != t.length || "77" != n && "78" != n || isCorrectPhonePrefix(t) ? !0 : (t = t.substr(0, 1) + t.substr(2), this.value = applyMask(t, getMask(t.length)), !1)
			},
			t = function() {
				var e = this.value,
					t = e.replace(/\D+/g, ""),
					n = t.substr(0, 2);
				4 != t.length || "77" != n && "78" != n || isCorrectPhonePrefix(t) || (t = t.substr(0, 1) + t.substr(2), this.value = "+" + t)
			},
			n = document.getElementById(form_name + "_client_phone");
		if (is_mobile) {
			var a = function(e) {
				"" === this.value && (this.value = getPrefix())
			};
			addEvent(n, "focus", a), addEvent(n, "keypress", t)
		} else phoneInputMask.call(n, getMasks(), e);
		if (!is_mobile && default_settings.is_multiwidget && default_settings.multiwidget_application) {
			var n = document.getElementById(application_form_name + "_client_phone");
			phoneInputMask.call(n, getMasks(), e)
		}

	}

	function hideForm(e) {
		void 0 == e && (e = !0), isFormOpened() && !successCall && e && reachGoal("NEWTON_CLOSE"), clearForm(), showPhoneButton(isNewIOS()), is_mobile && (unhandleFormSize(), "right" == default_settings.css_mobile_phone_button_position && buttonSizeFix(), "bottom" == default_settings.css_mobile_phone_button_position && isNewIOS() && buttonSizeFix());
		var t = document.getElementById("newton_callback_wrap");
		!is_mobile && default_settings.is_multiwidget && e && isFormOpened() ? (removeClass(t, "newton_wrap_slide"), clearTimeout(slideTimeout), slideTimeout = setTimeout(function() {
			t.style.display = "none"
		}, 200)) : t.style.display = "none", e && hideBackground()
	}

	function clearForm() {
		if (document.getElementById(form_name + "_client_phone").value = "", document.getElementById(form_name + "_client_phone").style.visibility = "visible", document.getElementById("newton_callback_input_wrap").style.setProperty("display", "inline-block", "important"), removeClass(document.getElementById(form_name + "_client_phone"), "error"), document.getElementById("newton_callback_submit_button").style.visibility = "visible", document.getElementById("newton_callback_submit_button").style.setProperty("display", "inline", "important"), document.getElementById("newton_callback_missed_wrap").style.setProperty("display", "none", "important"), document.getElementById("newton_callback_missed_result").style.setProperty("display", "none", "important"), removeClass(document.getElementById("newton_callback_wrap"), "newton_missed"), document.getElementById("newton_callback_form_text").style.display = "block", removeClass(document.getElementById("newton_callback_form_text"), "delay_success"), document.getElementById("newton_callback_submit_result").innerHTML = "", clearInterval(countdown_interval_id), countdown_interval_id = null, document.getElementById("newton_callback_counter").innerHTML = convertMsecs(default_settings.timer), default_settings.have_departments) {
			var e = is_mobile ? !1 : getSingleNonMobileDepartment();
			if (document.getElementById(form_name + "_department_id").value = e ? e : "", !is_mobile && !e) {
				var t = document.getElementById("newton_callback_departments_link");
				t.innerHTML = default_settings.department_link_text;
				var t = document.getElementById("newton_callback_departments_link_dummy");
				t.innerHTML = default_settings.department_link_text;
				for (var n = document.getElementById("newton_callback_departments_list"), a = n.getElementsByTagName("a"), i = 0; i < a.length; i++) removeClass(a[i], "newton_selected")
			}
		}
		if (removeClass(document.getElementById("newton_callback_counter"), "newton_show"), removeClass(document.getElementById("newton_callback_counter"), "newton_hide"), removeClass(document.getElementById("newton_callback_wrap"), "newton_delay"), removeClass(document.getElementById("newton_callback_wrap"), "delay_countdown"), is_mobile || (document.getElementById("newton_callback_active_delay_wrap").style.display = "none"), document.getElementById("newton_callback_missed_options").style.display = "none", laterCall = !1, clearTimeout(closeFormTimeout), closeFormTimeout = null, missed_block = !1, default_settings.is_multiwidget) {
			default_settings.free_version ? default_settings.multiwidget_application && setMultiwidgetTabSelected("newton_callback_tab_application") : setMultiwidgetTabSelected("newton_callback_tab_call");
			var o = document.getElementById("newton_callback_tabs_item_delay");
			if (o && !default_settings.free_version && (o.style.display = "inline-block"), default_settings.multiwidget_application) {
				if (default_settings.free_version) {
					var l = document.getElementById("newton_callback_application_form");
					l && (l.style.display = "block")
				} else {
					document.getElementById("newton_callback_form").style.display = "block";
					var l = document.getElementById("newton_callback_application_form");
					l && (l.style.display = "none")
				}
				var r = document.getElementById("newton_callback_application_success");
				r && (r.style.display = "none")
			}
			var s = document.getElementById("newton_chat"); 
			s && (default_settings.free_version ? default_settings.multiwidget_application && (s.style.display = "none") : (document.getElementById("newton_callback_application_form").style.display = "block", s.style.display = "none"), deleteCookie("n_chat_opnd"))
		}
		var t = document.getElementById("newton_callback_departments_link");
		t && removeClass(t, "newton_callback_departments_link_disabled"), callType = !1, successCall = !1, formFromDialog = !1, "function" == typeof onClearForm && onClearForm(), enableSubmitButton()
	}

	function hideDialog(e) {
		isDialogOpened() && e && reachGoal("NEWTON_CLOSE"), void 0 == e && (e = !0), showPhoneButton(), document.getElementById("newton_callback_dialog_wrap").style.display = "none", e ? hideBackground() : formFromDialog = !0
	}

	function hideBackground() {
		if (backgroundShowed) {
			if (!is_mobile) {
				try {
					var e = document.body.childNodes;
					for (i = 0; i < e.length; i++) e[i].nodeType == Node.ELEMENT_NODE && "newton_callback_wrap" != e[i].id && removeClass(e[i], "newton_blur")
				} catch (t) {
					remoteErrorLog(t, "hideBackground1")
				}
				setTimeout(function() {
					try {
						var e = document.body.childNodes;
						for (i = 0; i < e.length; i++) e[i].nodeType == Node.ELEMENT_NODE && "newton_callback_wrap" != e[i].id && removeClass(e[i], "newton_blur-t")
					} catch (t) {
						remoteErrorLog(t, "hideBackground2")
					}
				}, 100)
			}
			removeEvent(window, "click", backgroundClickClose), backgroundShowed = !1
		}
	}

	function hidePhoneButton() {
		removeClass(document.getElementById("newton_callback_phone"), "newton_animation"), isIE() ? addClass(document.getElementById("newton_callback_phone"), "newton_ie_hide") : document.getElementById("newton_callback_phone").style.display = "none"
	}

	function removeForm() {
		(form = document.getElementById("newton_callback_wrap")).parentNode.removeChild(form)
	}

	function getMetaContent(e) {
		for (var t = document.getElementsByTagName("meta"), n = 0; n < t.length; n++)
			if (t[n].getAttribute("property") == e) return t[n].getAttribute("content")
	}

	function showForm(e) {
		e = e || {};
		var t = "dialog_text" in e ? e.dialog_text : !1;
		if (is_mobile && !default_settings.enable_mobile_direct_call && (callType = "callback"), is_mobile && default_settings.free_version && (callType = "direct"), is_mobile && !callType) {
			if (checkActive()) return void showTypeSelect();
			callType = "callback"
		}
		var n = "departmentId" in e ? e.departmentId : !1,
			a = getSingleMobileCallbackDepartment();
		if (is_mobile && default_settings.have_departments && "callback" == callType && a) {
			n = a;
			var i = document.getElementById(form_name + "_department_id");
			i && (i.value = n)
		}
		if (is_mobile && !n && default_settings.have_departments) return void showDepartmentSelect();
		if (is_mobile && "direct" == callType) {
			if (!checkActive({
					departmentId: n
				})) return;
			var o = getDirectPhone({
				departmentId: n
			});
			return window.location = "tel:" + o, void(callType = !1)
		}
		if (!is_mobile && n && default_settings.have_departments)
			if (getSingleNonMobileDepartment()) document.getElementById(form_name + "_department_id").value = n;
			else {
				var l = getDepartmentLink(n);
				l && setDepartment(l)
			}
		var r = document.getElementById("newton_callback_wrap");
		if (!isOpened()) {
			var s = getParam("dcn");
			if (document.getElementById(form_name + "_landing_page_referrer").value = getLandingPageReferrer(), document.getElementById(form_name + "_landing_page_url").value = getLandingPageUrl(), document.getElementById(form_name + "_fingerprint").value = fingerprint, "undefined" != typeof newton_local_cookie && (document.getElementById(form_name + "_local_cookie").value = newton_local_cookie), document.getElementById(form_name + "_dcn").value = "dcn" in e ? e.dcn : s ? s : "", document.getElementById(form_name + "_referrer_keywords").value = getKeywords(e), !is_mobile && default_settings.is_multiwidget && default_settings.multiwidget_application && (document.getElementById(application_form_name + "_landing_page_referrer").value = getLandingPageReferrer(), document.getElementById(application_form_name + "_landing_page_url").value = getLandingPageUrl(), document.getElementById(application_form_name + "_fingerprint").value = fingerprint, "undefined" != typeof newton_local_cookie && (document.getElementById(application_form_name + "_local_cookie").value = newton_local_cookie), document.getElementById(application_form_name + "_dcn").value = "dcn" in e ? e.dcn : s ? s : "", document.getElementById(application_form_name + "_referrer_keywords").value = getKeywords(e)), getSettings(), checkActive({
					departmentId: n
				})) hidePhoneButton(), removeClass(document.getElementById("newton_callback_form_text"), "newton_callback_form_text_delay"), document.getElementById("newton_callback_counter").innerHTML = convertMsecs(default_settings.timer), is_mobile || (document.getElementById("newton_callback_active_delay_wrap").style.display = "block"), t ? document.getElementById("newton_callback_form_text").innerHTML = t : is_mobile ? (handleFormSize(), document.getElementById("newton_callback_form_text").innerHTML = default_settings.form_text_mobile) : document.getElementById("newton_callback_form_text").innerHTML = default_settings.form_text, setShowed(), customSelects(document.getElementById("newton_callback_form_text")), r.style.display = "block", setTimeout(function() {
				addClass(r, "newton_wrap_slide")
			}, 50), t || showBackground();
			else if (checkLaterCall()) {
				if (hidePhoneButton(), addClass(document.getElementById("newton_callback_form_text"), "newton_callback_form_text_delay"), is_mobile) handleFormSize(), document.getElementById("newton_callback_form_text").innerHTML = getDelayTextMobile({
					departmentId: n
				});
				else if (laterCall && t) document.getElementById("newton_callback_form_text").innerHTML = t;
				else {
					var c = document.getElementById("newton_callback_tabs_item_delay");
					c && (c.style.display = "none"), document.getElementById("newton_callback_form_text").innerHTML = getDelayText({
						departmentId: n
					})
				}
				handleFormSelect(), customSelects(document.getElementById("newton_callback_form_text")), r.style.display = "block", setTimeout(function() {
					addClass(r, "newton_wrap_slide")
				}, 50), addClass(r, "newton_delay"), t || showBackground()
			} else t && hideBackground()
		}
	}

	function showDialog() {
		!checkShowed() || default_settings.dialog_enabled && !default_settings.is_multiwidget ? !isOpened() && checkShowed() && (getSettings(), checkActive() && (hidePhoneButton(), setShowed(), document.getElementById("newton_callback_dialog_wrap").style.display = "block", showBackground(), reachGoal("NEWTON_DIALOG"))) : showForm()
	}

	function showBackground() {
		if (!is_mobile) try {
			var e = document.body.childNodes;
			for (i = 0; i < e.length; i++) e[i].nodeType == Node.ELEMENT_NODE && "newton_callback_wrap" != e[i].id && "newton_callback_dialog_wrap" != e[i].id && (addClass(e[i], "newton_blur"), addClass(e[i], "newton_blur-t"))
		} catch (t) {
			remoteErrorLog(t, "showBackground")
		}
		addEvent(window, "click", backgroundClickClose), backgroundShowed = !0
	}

	function backgroundClickClose(e) {
		var t = document.getElementById("newton_callback_phone"),
			n = document.getElementById("newton_callback_wrap"),
			a = document.getElementById("newton_callback_dialog_wrap"),
			i = document.getElementById("newton_callback_department_select"),
			o = document.getElementById("newton_callback_type_select");
		n && isDescendant(n, e.target) || a && isDescendant(a, e.target) || t && isDescendant(t, e.target) || i && isDescendant(i, e.target) || o && isDescendant(o, e.target) || (hideDialog(), hideForm())
	}

	function departmentSelectClickClose(e) {
		var t = document.getElementById("newton_callback_phone"),
			n = document.getElementById("newton_callback_department_select");
		t && isDescendant(t, e.target) || isDescendant(n, e.target) || (hideDepartmentSelect(), callType = !1)
	}

	function typeSelectClickClose(e) {
		var t = document.getElementById("newton_callback_phone"),
			n = document.getElementById("newton_callback_type_select");
		t && isDescendant(t, e.target) || isDescendant(n, e.target) || (hideTypeSelect(), callType = !1)
	}

	function showPhoneButton(e) {
		void 0 == e && (e = !1), (checkActive() || checkLaterCall()) && default_settings.show_phone_button && (e && !isAndroid && (document.getElementById("newton_callback_phone").style.visibility = "hidden"), isIE() ? removeClass(document.getElementById("newton_callback_phone"), "newton_ie_hide") : document.getElementById("newton_callback_phone").style.display = "block", addClass(document.getElementById("newton_callback_phone"), "newton_animation"))
	}

	function setShowed() {
		if ("undefined" == typeof newton_callback_no_cookie) {
			var e = new Date;
			if (default_settings.show_once_day) e.setDate(e.getDate() + 1);
			else {
				var t = e.getTime();
				t += 36e5, e.setTime(t)
			}
			setCookie("n_clb_sh", "1", {
				expires: e.toUTCString()
			})
		}
	}

	function checkShowed() {
		return !getCookie("n_clb_sh")
	}

	function setInitTime(e) {
		var t = new Date;
		if (default_settings.show_once_day) t.setDate(t.getDate() + 1);
		else {
			var n = t.getTime();
			n += 36e5, t.setTime(n)
		}
		setCookie("n_clb_it", e, {
			expires: t.toUTCString()
		})
	}

	function getInitTime() {
		var e = getCookie("n_clb_it");
		return e ? e : null
	}

	function resetInitTime() {
		"undefined" != typeof newton_callback_no_cookie && deleteCookie("n_clb_it")
	}

	function setForget() {
		if ("undefined" == typeof newton_callback_no_cookie) {
			var e = new Date;
			e.setDate(e.getDate() + 365), setCookie("n_clb_fg", "1", {
				expires: e.toUTCString()
			})
		}
	}

	function checkForget() {
		return getCookie("n_clb_fg")
	}

	function checkActive(e) {
		//return 1;
		e = e || {};
		var t = "departmentId" in e ? e.departmentId : !1,
			n = 0;
		if (t) n = checkActiveDepartment(t);
		else
			for (var a in default_settings.departments) checkShowDepartment(a) && (n = n || checkActiveDepartment(a));
		return n
	}

	function checkActiveDepartment(e) {
		//alert(default_settings.departments[e].is_holiday);
		return 1;
		return 1 == default_settings.is_active && 0 == default_settings.departments[e].is_holiday && default_settings.current_time > default_settings.departments[e].time_from && default_settings.current_time < default_settings.departments[e].time_to && !laterCall;
	}

	function checkLaterCall() {
		return 1 == default_settings.is_active && (!default_settings.disable_delayed_calls || laterCall)
	}

	function isOpened() {
		return "block" == document.getElementById("newton_callback_dialog_wrap").style.display || "block" == document.getElementById("newton_callback_wrap").style.display
	}

	function isDialogOpened() {
		return "block" == document.getElementById("newton_callback_dialog_wrap").style.display
	}

	function isFormOpened() {
		return "block" == document.getElementById("newton_callback_wrap").style.display
	}

	function checkShowDepartment(e) {
		return is_mobile || 0 == default_settings.departments[e].only_on_mobile;
	}

	function countdown() {
		var e = !1,
			t = document.getElementById(form_name + "_department_id");
		if (t && t.value) var e = t.value;
		e && default_settings.have_departments && !checkActiveDepartment(e) ? timer_value = getDelayTimer() : !checkActive() && checkLaterCall() ? timer_value = getDelayTimer() : timer_value = default_settings.timer, disableSelects();
		var n = document.getElementById("newton_callback_departments_link");
		n && addClass(n, "newton_callback_departments_link_disabled"), "function" == typeof onCountdownStart && onCountdownStart(), countdown_before = new Date, countdown_interval_id = setInterval(function() {
			countdown_now = new Date, elapsedTime = countdown_now.getTime() - countdown_before.getTime(), timer_msecs = timer_value - elapsedTime, 0 >= timer_msecs ? (clearInterval(countdown_interval_id), countdown_interval_id = null, document.getElementById("newton_callback_counter").innerHTML = "00:00.00", "function" == typeof onCountdownEnd && onCountdownEnd(), !is_mobile && checkActive() && (!default_settings.have_departments || e && checkActiveDepartment(e)) ? (addClass(document.getElementById("newton_callback_wrap"), "newton_missed"), document.getElementById("newton_callback_input_wrap").style.setProperty("display", "none", "important"), document.getElementById("newton_callback_submit_button").style.setProperty("display", "none", "important"), document.getElementById("newton_callback_missed_wrap").style.setProperty("display", "inline-block", "important"), missed_block = !0) : closeFormTimeout = setTimeout(function(e) {
				hideForm()
			}, 3e3)) : document.getElementById("newton_callback_counter").innerHTML = convertMsecs(timer_msecs)
		}, countdown_interval)
	}

	function disableSelects() {
		var e = document.getElementById("newton_callback_form_text");
		if (e)
			for (var t = e.getElementsByTagName("select"), n = 0; n < t.length; n++) t[n].disabled = "disabled"
	}

	function drawForm() {
		
		var e = "";
		isVkVerion() && (e += '<div id="circle-bg"></div>'), !is_mobile && default_settings.is_multiwidget && (e += '<link href="//fonts.googleapis.com/css?family=PT+Sans&subset=latin,cyrillic-ext" rel="stylesheet" type="text/css">', e += '<div style="background-color:#'+default_settings.chat_color_hex+'!important;" class="newton_callback_wrap_header">'+default_settings.window_title+'</div>'), e += '<a href="javascript:void(0);" id="newton_callback_close" class="newton_callback_close">x</a>', e += '<div id="newton_callback_company_logo" class="newton_callback_company_logo"><img src="/phone/logo" style="width:250px;"/></div>', !is_mobile && default_settings.is_multiwidget && (e += '<div class="newton_callback_tabs" id="newton_callback_tabs">', e += '<ul class="newton_callback_tabs_list">',  e += '<li class="newton_callback_tabs_item newton_active" id="newton_callback_tabs_item_delay" ' + (default_settings.free_version ? 'style="display: none !important;"' : "") + ">", e += '<a id="newton_callback_tab_delay" class="newton_callback_tab_delay" href="javascript: void(0);">', e += '<div class="newton_callback_icon"></div>', e += "<span>РћС‚Р»РѕР¶РµРЅРЅС‹Р№<br>Р·РІРѕРЅРѕРє</span>", e += "</a>", e += "</li>", default_settings.multiwidget_application && (e += '<li class="newton_callback_tabs_item">', e += '<a id="newton_callback_tab_application" class="newton_callback_tab_application ' + (default_settings.free_version ? "newton_active" : "") + '" href="javascript: void(0);">', e += '<div class="newton_callback_icon"></div>', e += "<span>РћСЃС‚Р°РІРёС‚СЊ<br>Р·Р°СЏРІРєСѓ</span>", e += "</a>", e += "</li>"), default_settings.multiwidget_consultant && (e += '<li class="newton_callback_tabs_item">', e += '<a id="newton_callback_tab_ask" class="newton_callback_tab_ask" href="javascript:void(window.open(\'' + default_settings.multiwidget_consultant_link + "','','width=590,height=760,left=0,top=0,resizable=yes,menubar=no,location=no,status=yes,scrollbars=yes'))\">", e += '<div class="newton_callback_icon"></div>', e += "<span>РћРЅР»Р°Р№РЅ<br>РєРѕРЅСЃСѓР»СЊС‚Р°РЅС‚</span>", e += "</a>", e += "</li>"), default_settings.chat_enabled && checkActive() && (e += '<li class="newton_callback_tabs_item">', e += '<a id="newton_callback_tab_chat" class="newton_callback_tab_chat" href="javascript: void(0);">', e += '<div class="newton_callback_icon"></div>', e += "<span>Р§Р°С‚</span>", e += "</a>", e += "</li>"), e += "</ul>", e += "</div>"), e += '<div id="newton_callback_content" class="newton_callback_content">', e += '<form autocomplete="off" id="newton_callback_form" class="newton_callback_form" action="' + form_action + '" method="POST" name="' + form_name + '" ' + (default_settings.free_version ? 'style="display: none !important;"' : "") + "><input value='"+default_settings._csrf+"' name='_csrf' type='hidden'>";
		var t = default_settings.form_text;
		if (is_mobile && (t = default_settings.form_text_mobile), e += '<div id="newton_callback_form_text" class="newton_callback_form_text">' + t + "</div>", !is_mobile && default_settings.have_departments) {
			var n = getSingleNonMobileDepartment();
			if (n) e += '<input type="hidden" name="' + form_name + '[department_id]" id="' + form_name + '_department_id" value="' + n + '" />';
			else { 
				e += '<div class="newton_callback_departments_block">', e += '<div class="newton_callback_departments_wrap">', e += '<div class="newton_callback_departments_link_wrap">', e += '<a href="javascript:void(0);" class="newton_callback_departments_link" id="newton_callback_departments_link_dummy">' + default_settings.department_link_text + "</a>", e += "</div>", e += '<div id="newton_callback_departments" class="newton_callback_departments">', e += '<div class="newton_callback_departments_link_wrap">', e += '<a href="javascript:void(0);" class="newton_callback_departments_link" id="newton_callback_departments_link">' + default_settings.department_link_text + "</a>", e += "</div>", e += '<input type="hidden" name="' + form_name + '[department_id]" id="' + form_name + '_department_id" />', e += '<ul id="newton_callback_departments_list" class="newton_callback_departments_list">';
				for (var a in default_settings.departments) !checkShowDepartment(a) || !checkActiveDepartment(a) && default_settings.disable_delayed_calls || (e += "<li>", e += '<a href="javascript:void(0);" rel="' + default_settings.departments[a].header + '">' + default_settings.departments[a].header + "</a>", e += "</li>");
				e += "</ul>", e += "</div>", e += "</div>", e += "</div>"
			} 
		} else is_mobile && default_settings.have_departments && (e += '<input type="hidden" name="' + form_name + '[department_id]" id="' + form_name + '_department_id" />');
		var i = '<div id="newton_callback_input_wrap" class="newton_callback_input_wrap">';
		i += '<input type="' + (is_mobile ? "tel" : "text") + '" placeholder="' + default_settings.form_input_placeholder + '" name="' + form_name + '[client_phone]" id="' + phone_input_id + '" />', i += '<div id="newton_callback_submit_result" class="newton_callback_submit_result"></div>', i += "</div>", i += getFormHiddenFields(form_name), i += '<div class="submit-btn-wrapper">', i += '<button type="submit" id="newton_callback_submit_button">' + default_settings.form_submit_button + "</button>", i += "</div>", i += '<div id="newton_callback_missed_wrap" class="newton_callback_missed_wrap"><a id="newton_callback_missed" class="newton_callback_missed" href="javascript:void(0);">' + default_settings.form_missed_question + "</a></div>", i += '<div id="newton_callback_missed_options" class="newton_callback_missed_options">', i += '<div class="newton_callback_missed_option newton_retry">', i += '<div class="newton_link_wrap">', i += '<a href="javascript:void(0)" id="newton_callback_missed_retry">Р—Р°РєР°Р·Р°С‚СЊ Р·РІРѕРЅРѕРє РµС‰С‘ СЂР°Р·</a>', i += "</div>", i += "</div>", i += '<div class="newton_callback_missed_option newton_active_delay">', i += '<div class="newton_link_wrap">', i += '<a href="javascript:void(0)" id="newton_callback_missed_active_delay">Р’С‹Р±СЂР°С‚СЊ СѓРґРѕР±РЅРѕРµ РІСЂРµРјСЏ</a>', i += "</div>", i += "</div>", i += '<div class="newton_callback_missed_option newton_send">', i += '<div class="newton_link_wrap">', i += '<a href="javascript:void(0)" id="newton_callback_missed_send">РћС‚РїСЂР°РІРёС‚СЊ email-Р¶Р°Р»РѕР±Сѓ</a>', i += "</div>", i += "</div>", i += "</div>", i += '<div id="newton_callback_missed_result" class="newton_callback_missed_result">' + default_settings.form_missed_result + "</div>";
		
		var o = '<div id="newton_callback_counter" class="newton_callback_counter">' + convertMsecs(default_settings.timer) + "</div>";
		if (is_mobile ? (e += o, e += i) : (e += i, e += o), is_mobile || (e += '<div class="newton_callback_active_delay_wrap" id="newton_callback_active_delay_wrap" style="display: none;">', e += '<div class="newton_callback_active_delay" id="newton_callback_active_delay">', e += '<a href="javascript:void(0);" id="newton_callback_active_delay_link">Р’С‹Р±СЂР°С‚СЊ СѓРґРѕР±РЅРѕРµ РІСЂРµРјСЏ РґР»СЏ Р·РІРѕРЅРєР°</a>', e += "</div>", e += "</div>"), e += "</form>", !is_mobile && default_settings.is_multiwidget && default_settings.multiwidget_application) {
			if (e += '<form autocomplete="off" id="newton_callback_application_form" class="newton_callback_form" action="' + application_form_action + '" method="POST" name="' + application_form_name + '" ' + (default_settings.free_version ? "" : 'style="display: none;"') + "><input value='"+default_settings._csrf+"' name='_csrf' type='hidden'>", default_settings.multiwidget_application_header && (e += '<div class="newton_callback_form_text">', e += default_settings.multiwidget_application_header, e += "</div>"), default_settings.have_departments) {
				var n = getSingleNonMobileDepartment();
				if (n) e += '<input type="hidden" name="' + application_form_name + '[department_id]" id="' + application_form_name + '_department_id" value="' + n + '" />';
				else {
					e += '<div class="newton_callback_departments_block">', e += '<div class="newton_callback_departments_wrap">', e += '<div class="newton_callback_departments_link_wrap">', e += '<a href="javascript:void(0);" class="newton_callback_departments_link" id="newton_callback_application_departments_link_dummy">' + default_settings.department_link_text + "</a>", e += "</div>", e += '<div id="newton_callback_application_departments" class="newton_callback_departments">', e += '<div class="newton_callback_departments_link_wrap">', e += '<a href="javascript:void(0);" class="newton_callback_departments_link" id="newton_callback_application_departments_link">' + default_settings.department_link_text + "</a>", e += "</div>", e += '<input type="hidden" name="' + application_form_name + '[department_id]" id="' + application_form_name + '_department_id" />', e += '<ul id="newton_callback_application_departments_list" class="newton_callback_departments_list">';
					for (var a in default_settings.departments) checkShowDepartment(a) && (e += "<li>", e += '<a href="javascript:void(0);" rel="' + default_settings.departments[a].header + '">' + default_settings.departments[a].header + "</a>", e += "</li>");
					e += "</ul>", e += "</div>", e += "</div>", e += "</div>"
				}
			} 
			//alert(default_settings.form_input_placeholder);
			e += '<div class="newton_callback_input_wrap">', e += '<input type="text" placeholder="' + default_settings.form_input_placeholder + '" name="' + application_form_name + '[client_phone]" id="' + application_phone_input_id + '" />', e += '<div id="newton_callback_application_submit_result" class="newton_callback_submit_result"></div>', e += "</div>", e += '<div class="newton_callback_input_wrap">', e += '<input id="' + application_form_name + '_name" type="text" placeholder="'+default_settings.form_input_placeholder_name+'" name="' + application_form_name + '[name]" />', e += '<div id="' + application_form_name + '_name_em" class="newton_callback_submit_result"></div>', e += "</div>", e += '<div class="newton_callback_input_wrap">', e += '<input id="' + application_form_name + '_email" type="text" placeholder="Email" name="' + application_form_name + '[email]" />', e += '<div id="' + application_form_name + '_email_em" class="newton_callback_submit_result"></div>', e += "</div>", e += '<div class="newton_callback_textarea_wrapper">', e += '<textarea id="' + application_form_name + '_comment" type="text" placeholder="'+default_settings.form_input_placeholder_text+'" name="' + application_form_name + '[comment]"></textarea>', e += '<div id="' + application_form_name + '_comment_em" class="newton_callback_submit_result"></div>', e += "</div>", e += getFormHiddenFields(application_form_name), e += '<div class="submit-btn-wrapper">', e += '<button style="border-color:#'+default_settings.chat_color_hex+'!important;background-color:#'+default_settings.chat_color_hex+'!important;" type="submit" id="newton_callback_application_submit_button">'+default_settings.form_submit_button+'</button>', e += "</div>", e += "</form>", e += '<div id="newton_callback_application_success" class="newton_callback_application_success">', e += default_settings.ok_send, e += "</div>"
		}!is_mobile && default_settings.is_multiwidget && default_settings.chat_enabled && checkActive() && (e += '<iframe id="newton_chat" style="display: none;"></iframe>'), null == default_settings.additional_form_html || isVkVerion() || (e += default_settings.additional_form_html), e += "</div>", is_mobile || default_settings.is_multiwidget || (e += '<div id="newton_bottom_wrap" class="newton_bottom_wrap ' + (default_settings.dialog_enabled || checkForget() || !checkActive() ? "newton_forget" : "") + '">', e += '<div class="newton_callback_wrap_forget_wrap">', e += '<a class="newton_callback_wrap_forget" id="newton_callback_wrap_forget" href="javascript:void(0);">' + default_settings.form_button_forget + "</a>", e += "</div>", e += '<div class="newton_eyetronic_link_wrap">'), e += '', is_mobile || default_settings.is_multiwidget || (e += "</div>", e += "</div>");
		var l = document.createElement("div");
		l.setAttribute("id", "newton_callback_wrap");
		var r = "newton_callback_wrap";
		if (is_mobile && (r += " mobile"), r += " newton_callback_wrap_" + newton_callback_id, l.setAttribute("class", r), l.style.display = "none", l.innerHTML = e, is_mobile) {
			var s = document.createElement("div");
			if (s.setAttribute("id", "newton_callback_wrap_mobile"), s.setAttribute("class", "newton_callback_wrap_mobile"), s.appendChild(l), document.body.appendChild(s), isNewIOS()) {
				var c = document.createElement("div");
				c.setAttribute("id", "newton_callback_wrap_mobile_bound"), c.setAttribute("class", "newton_callback_wrap_mobile_bound"), document.body.appendChild(c)
			}
		} else document.body.appendChild(l);
	}

	function getFormHiddenFields(e) {
		return content = "", content += '<input type="hidden" value="' + newton_callback_id + '" name="' + e + '[hash]" id="' + e + '_hash" />', content += '<input type="hidden" value="' + window.location + '" name="' + e + '[referer]" id="' + e + '_referer" />', content += '<input type="hidden" name="' + e + '[referrer_keywords]" id="' + e + '_referrer_keywords" />', content += '<input type="hidden" name="' + e + '[dcn]" id="' + e + '_dcn" />', content += '<input type="hidden" name="' + e + '[landing_page_referrer]" id="' + e + '_landing_page_referrer" />', content += '<input type="hidden" name="' + e + '[landing_page_url]" id="' + e + '_landing_page_url" />', content += '<input type="hidden" name="' + e + '[fingerprint]" id="' + e + '_fingerprint" />', content += '<input type="hidden" name="' + e + '[local_cookie]" id="' + e + '_local_cookie" />', content
	}

	function drawDepartmentSelect() {
		if (is_mobile && default_settings.have_departments) {
			var e = "";
			e += "<ul>";
			for (var t in default_settings.departments)(checkActiveDepartment(t) || !default_settings.disable_delayed_calls) && (e += "<li>", e += '<a href="javascript:void(0);" rel="' + t + '">' + default_settings.departments[t].header + "</a>", e += "</li>");
			e += "</ul>"; 
			var n = document.createElement("div");
			n.setAttribute("id", "newton_callback_department_select"), n.setAttribute("class", "newton_callback_department_select"), n.style.display = "none", n.innerHTML = e;
			var a = document.createElement("div");
			a.setAttribute("id", "newton_callback_department_select_mobile"), a.setAttribute("class", "newton_callback_department_select_mobile"), a.appendChild(n), document.body.appendChild(a)
			
		}
		
	}

	function drawCallTypeSelect() {
		if (is_mobile) {
			var e = "<ul>";
			e += "<li" + (default_settings.have_departments && !getSingleMobileCallbackDepartment() ? ' class="newton_have_departments"' : "") + ">", e += '<a id="newton_callback_type_callback" href="javascript:void(0);">РџРµСЂРµР·РІРѕРЅРёС‚Рµ РјРЅРµ</a>', e += "</li>", e += "<li" + (default_settings.have_departments ? ' class="newton_have_departments"' : "") + ">", e += '<a id="newton_callback_type_direct" href="javascript:void(0);">РЎР°Рј РїРѕР·РІРѕРЅСЋ</a>', e += "</li>", e += "</ul>";
			var t = document.createElement("div");
			t.setAttribute("id", "newton_callback_type_select"), t.setAttribute("class", "newton_callback_department_select"), t.style.display = "none", t.innerHTML = e;
			var n = document.createElement("div");
			n.setAttribute("id", "newton_callback_type_select_mobile"), n.setAttribute("class", "newton_callback_department_select_mobile"), n.appendChild(t), document.body.appendChild(n)

		}
	}

	function handleFormSize() {
		is_mobile && (addEvent(window, "resize", correctWidgetSizeFunc), addEvent(document, "scroll", correctWidgetSizeFunc), addEvent(document, "drag", correctWidgetSizeFunc), correctWidgetSizeFunc())
	}

	function unhandleFormSize() {
		if (is_mobile && (removeEvent(window, "resize", correctWidgetSizeFunc), removeEvent(document, "scroll", correctWidgetSizeFunc), removeEvent(document, "drag", correctWidgetSizeFunc), isNewIOS())) {
			var e = document.getElementById("newton_callback_wrap_mobile_bound");
			e.setAttribute("style", "")
		}
	}

	function handleSelectSize() {
		is_mobile && (addEvent(window, "resize", correctSelectSizeFunc), addEvent(document, "scroll", correctSelectSizeFunc), addEvent(document, "drag", correctSelectSizeFunc), correctSelectSizeFunc())
	}

	function unhandleSelectSize() {
		if (is_mobile && (removeEvent(window, "resize", correctSelectSizeFunc), removeEvent(document, "scroll", correctSelectSizeFunc), removeEvent(document, "drag", correctSelectSizeFunc), isNewIOS())) {
			var e = document.getElementById("newton_callback_wrap_mobile_bound");
			e.setAttribute("style", "")
		}
	}

	function handleTypeSize() {
		is_mobile && (addEvent(window, "resize", correctTypeSizeFunc), addEvent(document, "scroll", correctTypeSizeFunc), addEvent(document, "drag", correctTypeSizeFunc), correctTypeSizeFunc())
	}

	function unhandleTypeSize() {
		if (is_mobile && (removeEvent(window, "resize", correctTypeSizeFunc), removeEvent(document, "scroll", correctTypeSizeFunc), removeEvent(document, "drag", correctTypeSizeFunc), isNewIOS())) {
			var e = document.getElementById("newton_callback_wrap_mobile_bound");
			e.setAttribute("style", "")
		}
	}

	function correctWidgetSizeFunc(e) {
		var t = document.getElementById("newton_callback_wrap_mobile");
		correctWidgetSize(t)
	}

	function correctSelectSizeFunc(e) {
		var t = document.getElementById("newton_callback_department_select_mobile");
		correctWidgetSize(t)
	}

	function correctTypeSizeFunc(e) {
		var t = document.getElementById("newton_callback_type_select_mobile");
		correctWidgetSize(t)
	}

	function correctWidgetSize(e) {
		clearTimeout(correct_timeout), correct_timeout = setTimeout(function(e) {
			if (isNewIOS()) var t = document.getElementById("newton_callback_wrap_mobile_bound");
			var n = window.innerWidth > window.innerHeight;
			if (n) {
				e.style.setProperty("width", "706px", "important");
				var a = window.innerWidth / 700;
				isNewIOS() && t.style.setProperty("width", "706px", "important")
			} else {
				e.style.setProperty("width", "486px", "important");
				var a = window.innerWidth / 480;
				isNewIOS() && t.style.setProperty("width", "486px", "important")
			}
			a = Math.ceil(100 * a) / 100;
			var i = (e.clientWidth * a - e.clientWidth) / 2,
				o = (e.clientHeight * a - e.clientHeight) / 2;
			setScaleToWrap(e, a);
			var l = i,
				r = o;
			if (isNewIOS()) {
				setScaleToWrap(t, a);
				var s = -1 * t.getBoundingClientRect().left - 4;
				if (e.style.setProperty("left", s + "px", "important"), !keyboard_opened || isChromeAndroid()) {
					var r = t.getBoundingClientRect().bottom;
					e.style.setProperty("bottom", r - window.innerHeight + "px", "important")
				}
			} else e.style.setProperty("right", l + "px", "important"), e.style.setProperty("bottom", r + "px", "important")
		}, 100, e)
	}

	function setScaleToWrap(e, t) {
		e.style.setProperty("-moz-transform", "scale(" + t + "," + t + ")", "important"), e.style.setProperty("-ms-transform", "scale(" + t + "," + t + ")", "important"), e.style.setProperty("-webkit-transform", "scale(" + t + "," + t + ")", "important"), e.style.setProperty("-o-transform", "scale(" + t + "," + t + ")", "important"), e.style.setProperty("transform", "scale(" + t + "," + t + ")", "important")
	}

	function drawDialog() {
		var e = "";
		e += '<a href="javascript:void(0);" id="newton_callback_dialog_close" class="newton_callback_close">x</a>', e += '<div id="newton_callback_company_logo" class="newton_callback_company_logo"><img src="/phone/logo" style="width:250px;"/></div>', e += '<div class="newton_callback_content newton_dialog">', e += '<div id="newton_callback_dialog_form_text" class="newton_callback_form_text">' + default_settings.dialog_text + "</div>", e += '<a href="javascript:void(0);" id="newton_callback_dialog_accept" class="newton_callback_dialog_button">' + default_settings.dialog_button_yes + "</a>", e += '<a href="javascript:void(0);" id="newton_callback_dialog_cancel" class="newton_callback_dialog_button">' + default_settings.dialog_button_no + "</a>", null != default_settings.additional_dialog_html && (e += default_settings.additional_dialog_html), e += '<div class="newton_callback_dialog_forget_wrap">', e += '<a href="javascript:void(0);" id="newton_callback_dialog_forget" class="newton_callback_dialog_forget">' + default_settings.dialog_button_forget + "</a>", e += "</div>", e += "</div>", e += '';
		var t = document.createElement("div");
		t.setAttribute("id", "newton_callback_dialog_wrap"), t.setAttribute("class", "newton_callback_wrap newton_dialog"), t.style.display = "none", t.innerHTML = e, document.body.appendChild(t)
	}

	function drawButton() {
		var e = "";
		is_mobile ? (e += '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="icon_x5F_n" x="0px" y="0px" width="140px" height="140px" viewBox="0 0 140 140" enable-background="new 0 0 140 140" xml:space="preserve">', e += '<path id="ellipse_x5F_n_1_" fill="#' + default_settings.css_phone_button_color + '" d="M69.999,4.997c35.897,0,65,29.102,65,65c0,35.897-29.103,65-65,65c-35.899,0-65-29.103-65-65C4.999,34.099,34.1,4.997,69.999,4.997z"/>', e += '<g id="phone_x5F_n_1_">', e += '<path fill="#' + default_settings.css_button_icons_color + '" d="M99.988,29.813c-2.58-3.529-11.359-1.932-11.359-1.932l-1.939,28.132l0.626,0.527l3.521,1.68c0.627,0.527,0.813,1.899,0.813,1.899c-2.532,9.646-6.866,14.773-6.866,14.773C77.668,87.53,72.439,91.191,72.439,91.191c-1.275,1.066-2.354,0.73-2.354,0.73c-0.934-0.003-4.499-2.72-4.499-2.72l-25.086,14.556c3.378,9.129,7.469,8.719,7.469,8.719C80.766,111.555,95.6,83.651,95.6,83.651C114.93,55.036,99.988,29.812,99.988,29.813z"/>', e += '<path fill="#' + default_settings.css_button_icons_color + '" d="M59.456,85.698c0,0-11.406,4.854-18.803,10.175c0,0-1.931,2.178-0.743,5.608l24.619-14.413C64.529,87.068,61.809,84.833,59.456,85.698z"/>', e += '<path fill="#' + default_settings.css_button_icons_color + '" d="M84.813,55.482l1.695-26.987c-4.823,0.947-4.759,5.065-4.759,5.065l-0.937,11.004C79.201,54.941,84.813,55.482,84.813,55.482z"/>', e += '<path fill="#' + default_settings.css_button_icons_color + '" d="M41.07,80.391c1.489-0.407,2.377-1.953,1.983-3.453c-4.1-15.583,5.16-31.7,20.642-35.925c1.488-0.406,2.377-1.95,1.982-3.451c-0.395-1.5-1.921-2.386-3.411-1.979C43.81,40.619,32.773,59.83,37.661,78.41C38.052,79.91,39.58,80.797,41.07,80.391z"/>', e += '<path fill="#' + default_settings.css_button_icons_color + '" d="M62.998,48.51c-10.182,2.78-16.275,13.382-13.577,23.636c0.395,1.5,1.923,2.385,3.41,1.979c1.489-0.406,2.378-1.951,1.983-3.451c-1.911-7.261,2.403-14.767,9.613-16.732c1.489-0.407,2.378-1.951,1.983-3.451S64.489,48.104,62.998,48.51z"/>', e += "</g>", e += "</svg>") : ("spin" == default_settings.animation_type && (e += '<svg id="newton-callback-button" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" height="120px" viewBox="0 0 120 120" width="120px" version="1.1" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink">', e += getButtonTextHtml(), e += '<g class="newton-wrapper">', e += '<g class="newton-ring">', e += '<path id="newton-track-right" d="m111.1 30.499c-2.563-4.443-5.644-8.397-9.082-11.89-0.279-0.368-0.709-0.609-1.209-0.609-0.828 0-1.5 0.672-1.5 1.5 0 0.513 0.258 0.965 0.65 1.235-0.014 0.014-0.023 0.026-0.038 0.04 9.937 10.104 16.077 23.938 16.077 39.223 0 15.29-6.146 29.128-16.082 39.23 0.012 0.016 0.025 0.022 0.038 0.041-0.388 0.271-0.644 0.721-0.644 1.229 0 0.828 0.672 1.5 1.5 1.5 0.475 0 0.893-0.227 1.168-0.568 0.004 0.004 0.008 0.01 0.012 0.014 18.21-18.43 22.689-47.415 9.109-70.939v-0.002z" fill="url(' + window.location.pathname + window.location.search + '#newton-track-right-gradient)"/>', e += '<linearGradient id="newton-track-right-gradient" x1="83.227" gradientUnits="userSpaceOnUse" y1="-695.51" gradientTransform="matrix(1 0 0 -1 .1201 -603.36)" x2="119.8" y2="-632.16">', e += '<stop stop-color="#' + default_settings.css_phone_button_color + '" stop-opacity="0" offset="0"/>', e += '<stop stop-color="#' + default_settings.css_phone_button_color + '" offset="1"/>', e += "</linearGradient>", e += '<path id="newton-track-left" d="m20.043 99.271c0.012-0.02 0.026-0.026 0.038-0.041-9.934-10.104-16.081-23.942-16.081-39.232 0-15.285 6.144-29.119 16.074-39.223-0.017-0.019-0.035-0.036-0.051-0.055 0.383-0.271 0.634-0.716 0.634-1.221 0-0.828-0.672-1.5-1.5-1.5-0.545 0-1.018 0.293-1.28 0.728-3.394 3.465-6.435 7.377-8.972 11.771-13.583 23.526-9.109 52.511 9.103 70.943l0.012-0.012c0.275 0.344 0.693 0.563 1.168 0.563 0.828 0 1.5-0.673 1.5-1.5 0-0.511-0.256-0.958-0.645-1.229v0.01z" fill="url(' + window.location.pathname + window.location.search + '#newton-track-left-gradient)"/>', e += '<linearGradient id="newton-track-left-gradient" x1="-.0596" gradientUnits="userSpaceOnUse" y1="-632.15" gradientTransform="matrix(1 0 0 -1 .1201 -603.36)" x2="36.519" y2="-695.51">', e += '<stop stop-color="#' + default_settings.css_phone_button_color + '" stop-opacity="0" offset="0"/>', e += '<stop stop-color="#' + default_settings.css_phone_button_color + '" offset="1"/>', e += "</linearGradient>", e += '<path id="newton-track-background" opacity=".1" d="m60 1c-32.585 0-59 26.415-59 59s26.415 59 59 59 59-26.415 59-59-26.415-59-59-59zm0 115c-30.928 0-56-25.072-56-56s25.072-56 56-56c30.928 0 56 25.072 56 56s-25.072 56-56 56z" fill="#' + default_settings.css_phone_button_color + '"/>', e += "</g>", e += "</g>", e += '<circle class="newton-circle-back" opacity=".2" cy="60" cx="60" r="40" fill="#' + default_settings.css_phone_button_color + '"/>', e += '<g class="newton-circle-front">', e += '<circle cy="60" cx="60" r="34" fill="#' + default_settings.css_phone_button_color + '"/>', e += '<path class="newton-icon-handset" d="m59.34 48.038c-0.843 0.181-1.681 0.434-2.504 0.778-6.003 2.52-9.252 8.718-8.221 14.78-0.042 0.26-0.04 0.527 0.072 0.786 0.316 0.733 1.178 1.074 1.923 0.763 0.746-0.313 1.094-1.162 0.778-1.896-0.011-0.024-0.034-0.041-0.046-0.063-0.819-4.893 1.81-9.887 6.652-11.917 0.363-0.152 0.73-0.275 1.099-0.384 0.308 0.082 0.639 0.089 0.956-0.044 0.746-0.313 1.094-1.161 0.778-1.896-0.255-0.589-0.86-0.905-1.476-0.853l-0.011-0.054zm7.877 4.865l0.855-13.908c-2.436 0.489-2.402 2.61-2.402 2.61l-0.473 5.671c-0.814 5.348 2.02 5.627 2.02 5.627zm-21.886 13.454c0.62-0.26 0.932-0.896 0.831-1.523l0.032-0.006c-1.627-7.491 2.303-15.316 9.738-18.437 0.873-0.366 1.76-0.634 2.653-0.845l-0.022-0.118c0.042-0.014 0.085-0.009 0.126-0.025 0.729-0.307 1.071-1.137 0.761-1.854s-1.153-1.052-1.882-0.745c-0.109 0.046-0.191 0.123-0.282 0.19-0.872 0.226-1.74 0.492-2.595 0.851-8.661 3.635-13.241 12.75-11.349 21.478l0.045-0.009c0.019 0.101 0.02 0.201 0.062 0.3 0.31 0.717 1.153 1.05 1.882 0.743zm29.689-26.205c-1.313-1.785-5.783-0.978-5.783-0.978l-0.982 14.23 0.313 0.267 1.793 0.85c0.318 0.267 0.414 0.961 0.414 0.961-1.289 4.879-3.496 7.473-3.496 7.473-3.616 6.393-6.278 8.244-6.278 8.244-0.65 0.539-1.199 0.369-1.199 0.369-0.475-0.002-2.29-1.375-2.29-1.375l-12.773 7.361c1.72 4.612 3.803 4.405 3.803 4.405 16.692-0.466 24.25-14.581 24.25-14.581 9.835-14.467 2.228-27.226 2.228-27.226zm-21.017 28.373s-5.689 2.388-9.379 5.004-0.963 1.07-0.371 2.759l12.28-7.089s-1.356-1.099-2.53-0.674z" fill="#' + default_settings.css_button_icons_color + '"/>', e += '<path class="newton-icon-callback" d="m79 44.986h-38c-2.209 0-4 1.791-4 4v23.028c0 2.209 1.791 4 4 4h38c2.209 0 4-1.791 4-4v-23.028c0-2.209-1.791-4-4-4zm-20.5 23.014h-16c-0.829 0-1.5-0.672-1.5-1.5s0.671-1.5 1.5-1.5h16c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5zm0-7h-16c-0.829 0-1.5-0.672-1.5-1.5s0.671-1.5 1.5-1.5h16c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5zm0-7h-16c-0.829 0-1.5-0.672-1.5-1.5s0.671-1.5 1.5-1.5h16c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5zm20.5 5.005c0 1.656-1.344 3-3 3h-8c-1.657 0-3-1.344-3-3v-5c0-1.657 1.343-3 3-3h8c1.656 0 3 1.343 3 3v5z" fill="#' + default_settings.css_button_icons_color + '"/>', e += '<path class="newton-icon-consultant" d="m75 43.014h-30c-4.418 0-8 3.581-8 8v5.017c0 0.662-0.001 12.629-0.001 12.629 0 5.707 4.819 10.34 11.001 10.34 0-3.535 1.35-6.996 8.786-6.996h18.214c4.418 0 8-3.581 8-8v-12.99c0-4.419-3.582-8-8-8zm-10.5 17.986h-22c-0.829 0-1.5-0.672-1.5-1.5s0.671-1.5 1.5-1.5h22c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5zm0-7h-22c-0.829 0-1.5-0.672-1.5-1.5s0.671-1.5 1.5-1.5h22c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z" fill="#' + default_settings.css_button_icons_color + '"/>', e += "</g>", e += "</svg>"), "pulse" == default_settings.animation_type && (e += '<svg id="newton-callback-button" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" height="120px" viewBox="0 0 120 120" width="120px" version="1.1" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink">', e += getButtonTextHtml(), e += '<g class="newton-ring">', e += '<path id="newton-track-background" d="m60 1c-32.585 0-59 26.415-59 59s26.415 59 59 59 59-26.415 59-59-26.415-59-59-59zm0 115c-30.928 0-56-25.072-56-56s25.072-56 56-56c30.928 0 56 25.072 56 56s-25.072 56-56 56z" fill="#' + default_settings.css_phone_button_color + '"/>', e += "</g>", e += '<g class="newton-wrapper">', e += '<circle class="newton-circle-back" cy="60" cx="60" r="34" fill="#' + default_settings.css_phone_button_color + '"/>', e += '<g class="newton-circle-front">', e += '<circle cy="60" cx="60" r="34" fill="#' + default_settings.css_phone_button_color + '"/>', e += '<path class="newton-icon-handset" d="m59.34 48.038c-0.843 0.181-1.681 0.434-2.504 0.778-6.003 2.52-9.252 8.718-8.221 14.78-0.042 0.26-0.04 0.527 0.072 0.786 0.316 0.733 1.178 1.074 1.923 0.763 0.746-0.313 1.094-1.162 0.778-1.896-0.011-0.024-0.034-0.041-0.046-0.063-0.819-4.893 1.81-9.887 6.652-11.917 0.363-0.152 0.73-0.275 1.099-0.384 0.308 0.082 0.639 0.089 0.956-0.044 0.746-0.313 1.094-1.161 0.778-1.896-0.255-0.589-0.86-0.905-1.476-0.853l-0.011-0.054zm7.877 4.865l0.855-13.908c-2.436 0.489-2.402 2.61-2.402 2.61l-0.473 5.671c-0.814 5.348 2.02 5.627 2.02 5.627zm-21.886 13.454c0.62-0.26 0.932-0.896 0.831-1.523l0.032-0.006c-1.627-7.491 2.303-15.316 9.738-18.437 0.873-0.366 1.76-0.634 2.653-0.845l-0.022-0.118c0.042-0.014 0.085-0.009 0.126-0.025 0.729-0.307 1.071-1.137 0.761-1.854s-1.153-1.052-1.882-0.745c-0.109 0.046-0.191 0.123-0.282 0.19-0.872 0.226-1.74 0.492-2.595 0.851-8.661 3.635-13.241 12.75-11.349 21.478l0.045-0.009c0.019 0.101 0.02 0.201 0.062 0.3 0.31 0.717 1.153 1.05 1.882 0.743zm29.689-26.205c-1.313-1.785-5.783-0.978-5.783-0.978l-0.982 14.23 0.313 0.267 1.793 0.85c0.318 0.267 0.414 0.961 0.414 0.961-1.289 4.879-3.496 7.473-3.496 7.473-3.616 6.393-6.278 8.244-6.278 8.244-0.65 0.539-1.199 0.369-1.199 0.369-0.475-0.002-2.29-1.375-2.29-1.375l-12.773 7.361c1.72 4.612 3.803 4.405 3.803 4.405 16.692-0.466 24.25-14.581 24.25-14.581 9.835-14.467 2.228-27.226 2.228-27.226zm-21.017 28.373s-5.689 2.388-9.379 5.004-0.963 1.07-0.371 2.759l12.28-7.089s-1.356-1.099-2.53-0.674z" fill="#' + default_settings.css_button_icons_color + '"/>', e += '<path class="newton-icon-callback" d="m79 44.986h-38c-2.209 0-4 1.791-4 4v23.028c0 2.209 1.791 4 4 4h38c2.209 0 4-1.791 4-4v-23.028c0-2.209-1.791-4-4-4zm-20.5 23.014h-16c-0.829 0-1.5-0.672-1.5-1.5s0.671-1.5 1.5-1.5h16c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5zm0-7h-16c-0.829 0-1.5-0.672-1.5-1.5s0.671-1.5 1.5-1.5h16c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5zm0-7h-16c-0.829 0-1.5-0.672-1.5-1.5s0.671-1.5 1.5-1.5h16c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5zm20.5 5.005c0 1.656-1.344 3-3 3h-8c-1.657 0-3-1.344-3-3v-5c0-1.657 1.343-3 3-3h8c1.656 0 3 1.343 3 3v5z" fill="#' + default_settings.css_button_icons_color + '"/>', e += '<path class="newton-icon-consultant" d="m75 43.014h-30c-4.418 0-8 3.581-8 8v5.017c0 0.662-0.001 12.629-0.001 12.629 0 5.707 4.819 10.34 11.001 10.34 0-3.535 1.35-6.996 8.786-6.996h18.214c4.418 0 8-3.581 8-8v-12.99c0-4.419-3.582-8-8-8zm-10.5 17.986h-22c-0.829 0-1.5-0.672-1.5-1.5s0.671-1.5 1.5-1.5h22c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5zm0-7h-22c-0.829 0-1.5-0.672-1.5-1.5s0.671-1.5 1.5-1.5h22c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z" fill="#' + default_settings.css_button_icons_color + '"/>', e += "</g>", e += "</g>", e += "</svg>"), e += default_settings.phone_button_html);
		var t = document.createElement("div");
		t.setAttribute("id", "newton_callback_phone");
		var n = "newton_callback_phone" + (is_mobile ? " mobile" : "");
		if ((checkActive() || checkLaterCall()) && default_settings.show_phone_button ? n += " newton_animation" : isIE() ? n += " newton_ie_hide" : t.style.display = "none", t.setAttribute("class", n), t.innerHTML = e, document.body.appendChild(t), "bottom" == default_settings.css_mobile_phone_button_position && is_mobile && isNewIOS()) {
			var a = document.createElement("div");
			a.setAttribute("id", "newton_callback_phone_bound"), a.setAttribute("class", "newton_callback_phone_bound"), document.body.appendChild(a)
		}
	}

	function getButtonTextHtml() {
		var e = "";
		return default_settings.phone_button_text && (e += '<g class="newton-text">', e += '<path id="newton-text-wrap" d="M0,0h120v120H0V0z" fill="none" />', e += '<path id="newton-text-path" d="M59.99,15.01c24.853,0,45,20.147,45,45c0,24.854-20.147,45-45,45c-24.853,0-45-20.146-45-45 C14.99,35.157,35.137,15.01,59.99,15.01z" fill="none"/>', e += '<text x="0" y="0" text-anchor="middle" fill="#' + default_settings.css_phone_button_text_color + '"><textPath xlink:href="' + window.location.pathname + window.location.search + '#newton-text-path" startOffset="50%">' + default_settings.phone_button_text + "</textPath></text>", e += "</g>"), e
	}

	function applyCss() {
		var e = document.createElement("link");
		e.setAttribute("rel", "stylesheet"), e.setAttribute("type", "text/css"), e.setAttribute("href", default_settings.css), document.getElementsByTagName("head")[0].appendChild(e)
	}

	function enableSetingsUpdate(e) {
		void 0 == e && (e = !1), settings_update_interval_id = setInterval(function() {
			getSettings(), manageEvents(e)
		}, settings_update_interval)
	}

	function disableSettingsUpdate() {
		clearInterval(settings_update_interval_id)
	}

	function getSettings(e) {
		var t = {};
		"undefined" != typeof newton_callback_id && (t.hash = newton_callback_id), isVkVerion() && (t.vk = 1), e && "undefined" != typeof newton_calltracking_id && (newton_calltracking_id instanceof Array || (newton_calltracking_id = [newton_calltracking_id]), t.calltracking_hash = newton_calltracking_id, t.landing_page_referrer = getLandingPageReferrer(), t.landing_page_url = getLandingPageUrl()), (void 0 !== t.hash || void 0 !== t.calltracking_hash) && ajax.get(settings_url, t, function(e) {
			if (!e) return clearInterval(interval), !1;
			try {
				var t = JSON.parse(e);
				//alert(t.phone_format);
				masks.ru.push( t.phone_format );
				captions.ru.form_input_placeholder = t.form_input_placeholder;
				captions.ru.form_submit_button = t.form_submit_button;
				//alert(captions.ru.form_submit_button);
				captions.ru.form_missed_question = t.form_missed_question;
				captions.ru.form_missed_result = t.form_missed_result;
				captions.ru.form_button_forget = t.form_button_forget;
				captions.ru.dialog_button_yes = t.dialog_button_yes;
				captions.ru.dialog_button_no = t.dialog_button_no;
				captions.ru.dialog_button_forget = t.dialog_button_forget;
				captions.ru.service_link = t.service_link;
				
			} catch (n) {
				return remoteErrorLog(n, "getSettings", typeof e + " " + e.length + " " + e), !1
			}
			if (0 == t.length) return clearInterval(interval), !1;
			if (default_settings = merge_options(default_settings, t), default_settings.callback) {
				default_settings.appearance_init = parseInt(default_settings.appearance_init), default_settings.appearance_exit = parseInt(default_settings.appearance_exit), default_settings.appearance_time = parseInt(default_settings.appearance_time), default_settings.current_time = parseInt(default_settings.current_time), default_settings.show_once_day = parseInt(default_settings.show_once_day), default_settings.hide_after_hours = parseInt(default_settings.hide_after_hours), default_settings.show_on_mobile = parseInt(default_settings.show_on_mobile), default_settings.dialog_enabled = parseInt(default_settings.dialog_enabled), default_settings.disable_delayed_calls = parseInt(default_settings.disable_delayed_calls), default_settings.have_departments = parseInt(default_settings.have_departments), default_settings.silent_mode = 1 == default_settings.silent_mode, default_settings.is_multiwidget = parseInt(default_settings.is_multiwidget), default_settings.multiwidget_application = parseInt(default_settings.multiwidget_application), default_settings.multiwidget_consultant = parseInt(default_settings.multiwidget_consultant), default_settings.enable_mobile_direct_call = parseInt(default_settings.enable_mobile_direct_call), default_settings.free_version = parseInt(default_settings.free_version), default_settings.enable_log = parseInt(default_settings.enable_log), default_settings.chat_enabled = parseInt(default_settings.chat_enabled), default_settings.chat_active = parseInt(default_settings.chat_active);
				var a = getParam("show_phone_button");
				void 0 !== a && (default_settings.show_phone_button = a), init_time = getInitTime(), null == init_time && (init_time = default_settings.current_time, setInitTime(init_time))
			}
			settingsLoaded = !0
		})
	}

	function manageEvents(e) {
		void 0 == e && (e = !1), checkActive() ? (e || checkForget() || (1 == default_settings.appearance_init ? enableShowAtInit() : checkShowed() && default_settings.appearance_page_views && getPageViews() == default_settings.appearance_page_views ? (enableShowAtNthPage(), resetPageViews()) : disableShowAtInit(), 1 == default_settings.appearance_exit ? enableShowAtExit() : disableShowAtExit(), default_settings.appearance_time > 0 ? enableShowAtTime() : disableShowAtTime()), !e && checkOpenChatAtInit() && openChatAtInit()) : (hideDialog(), hideForm(), disableAll())
	}

	function checkOpenChatAtInit() {
		return default_settings.is_multiwidget && default_settings.chat_enabled && default_settings.chat_active && getCookie("n_chat_opnd")
	}

	function openChatAtInit() {
		afterLoad = function() {
			showForm(), openChat()
		}
	}

	function handleMissedButtonClick() {
		var e = document.getElementById("newton_callback_missed");
		addEvent(e, "click", showMissedOptions);
		var t = document.getElementById("newton_callback_missed_send");
		addEvent(t, "click", processMissed);
		var n = document.getElementById("newton_callback_missed_retry");
		addEvent(n, "click", function() {
			setDirectCall()
		});
		var a = document.getElementById("newton_callback_missed_active_delay");
		addEvent(a, "click", function() {
			setActiveLaterCall(), default_settings.is_multiwidget && setMultiwidgetTabSelected("newton_callback_tab_delay")
		});
		
	}

	function showMissedOptions() {
		var e = document.getElementById("newton_callback_missed_options");
		e.style.display = "inline-block", document.getElementById("newton_callback_missed_wrap").style.setProperty("display", "none", "important")
	}

	function processMissed() {
		var e = document.getElementById("newton_callback_form");
		data = serialize(e), ajax.post(missed_action, data, missedResult)
	}

	function missedResult() {
		document.getElementById("newton_callback_missed_options").style.display = "none", document.getElementById("newton_callback_missed_result").style.setProperty("display", "inline-block", "important")
	}

	function processForm(e, t, n) {
		e.preventDefault && e.preventDefault();
		var a = e.target;
		return submitRequest(t, serialize(a), n), !1
	}

	function submitRequest(e, t, n) {
		ajax.post(e, t, n)
	}

	function showSubmitResult(e) {
		for (var t in formErrorElements) removeClass(formErrorElements[t], "error");
		var n = "",
			a = document.getElementById("newton_callback_submit_result");
		if (1 == e) {
			successCall = !0, reachGoal(formFromDialog ? "NEWTON_DIALOG_CALL" : "NEWTON_CALL");
			var i = !1,
				o = document.getElementById(form_name + "_department_id");
			o && o.value && default_settings.have_departments && (i = o.value), !checkActive({
				departmentId: i
			}) && checkLaterCall() ? (is_mobile ? (document.getElementById("newton_callback_input_wrap").style.setProperty("display", "none", "important"), document.getElementById("newton_callback_submit_button").style.setProperty("display", "none", "important"), document.getElementById("newton_callback_form_text").innerHTML = getDelayTextMobileSuccess({
				departmentId: i
			}), addClass(document.getElementById("newton_callback_form_text"), "delay_success"), closeFormTimeout = setTimeout(function() {
				hideForm()
			}, 3e3)) : (document.getElementById(form_name + "_client_phone").style.visibility = "hidden", document.getElementById("newton_callback_submit_button").style.visibility = "hidden", addClass(document.getElementById("newton_callback_wrap"), "delay_countdown"), countdown()), setTimeout(function() {
				getSettings()
			}, 1e3)) : (is_mobile ? (addClass(document.getElementById("newton_callback_counter"), "newton_show"), document.getElementById("newton_callback_input_wrap").style.setProperty("display", "none", "important"), document.getElementById("newton_callback_submit_button").style.setProperty("display", "none", "important"), document.getElementById("newton_callback_form_text").style.display = "none") : (document.getElementById(form_name + "_client_phone").style.visibility = "hidden", document.getElementById("newton_callback_submit_button").style.visibility = "hidden", document.getElementById("newton_callback_active_delay_wrap").style.display = "none"), countdown())
		} else n = processJson(e, form_name, formErrorElements);
		a.innerHTML = n, enableSubmitButton()
	}

	function showApplicationSubmitResult(e) {
		for (var t in applicationFormErrorElements) removeClass(applicationFormErrorElements[t], "error");
		for (var t in applicationFormErrorMessages) applicationFormErrorMessages[t].innerHTML = "";
		var n = "",
			a = document.getElementById("newton_callback_application_submit_result");
		if (1 == e) {
			var i = document.getElementById("newton_callback_application_form");
			if (i) {
				i.style.display = "none";
				var o = document.getElementById(application_form_name + "_client_phone");
				o && (o.value = "");
				var l = document.getElementById(application_form_name + "_name");
				l && (l.value = "");
				var r = document.getElementById(application_form_name + "_email");
				r && (r.value = "");
				var s = document.getElementById(application_form_name + "_comment");
				s && (s.value = "")
			}
			var c = document.getElementById("newton_callback_application_success");
			c && (reachGoal("NEWTON_APPLICATION_SENT"), c.style.display = "block")
		} else n = processJson(e, application_form_name, applicationFormErrorElements, applicationFormErrorMessages);
		a && (a.innerHTML = n)
	}

	function processJson(e, t, n, a) {
		var i = "";
		try {
			if (data = JSON.parse(e), "object" == typeof data)
				for (var o in data) {
					var l = document.getElementById(t + "_" + o + "_em");
					l ? (l.innerHTML = data[o], void 0 !== a && a.push(l)) : i += data[o];
					var r = document.getElementById(t + "_" + o);
					r && r.nodeType == Node.ELEMENT_NODE && (addClass(r, "error"), n.push(r))
				} else i += data
		} catch (s) {
			i += s.name + ": " + e
		}
		return i
	}

	function buttonSizeFix() {
		clearTimeout(button_timeout), button_timeout = setTimeout(function() {
			if ("bottom" == default_settings.css_mobile_phone_button_position) {
				var e = document.getElementById("newton_callback_phone"),
					t = document.getElementById("newton_callback_wrap_mobile_bound"),
					n = t.getBoundingClientRect().bottom,
					a = -1 * t.getBoundingClientRect().left - 1;
				e.style.setProperty("left", a + window.innerWidth / 2 + "px", "important");
				var i = window.innerWidth > window.innerHeight;
				e.style.setProperty("width", window.innerWidth * (i ? .1 : .18) + "px", "important"), e.style.setProperty("margin-left", window.innerWidth * (i ? -.05 : -.09) + "px", "important"), e.style.setProperty("margin-bottom", n - window.innerHeight + window.innerHeight * (i ? .04 : .08) + "px", "important"), e.style.visibility = "visible"
			}
			if ("right" == default_settings.css_mobile_phone_button_position) {
				var e = document.getElementById("newton_callback_phone"),
					i = window.innerWidth > window.innerHeight;
				e.style.setProperty("width", window.innerWidth * (i ? .1 : .18) + "px", "important"), e.style.setProperty("top", document.body.scrollTop + window.innerHeight / 2 + "px", "important"), e.style.setProperty("right", document.body.offsetWidth - window.innerWidth - document.body.scrollLeft + "px", "important");
				var o = e.clientHeight;
				e.style.setProperty("margin-top", -1 * o / 2 + "px", "important"), e.style.setProperty("margin-right", .01 * window.innerWidth + "px", "important"), e.style.visibility = "visible"
			}
		}, 300)
	}

	function mobileTouchStart(e) {
		//alert('ok');//phoneButtonClick();
		var t = document.getElementById("newton_callback_phone");
		return isDescendant(t, e.target) ? (phoneButtonClick(), close_button_disabled = !0, setTimeout(function() {
			close_button_disabled = !1
		}, 400), cancelEvent(e)) : void(t.style.visibility = "hidden")
	}

	function handlePhoneButton() {
		
		var e = document.getElementById("newton_callback_phone");
		is_mobile ? (isNewIOS() ? (addEvent(window, "touchstart", mobileTouchStart), addEvent(window, "touchend", buttonSizeFix), "bottom" == default_settings.css_mobile_phone_button_position && (addEvent(window, "scroll", buttonSizeFix), buttonSizeFix())) : addEvent(e, "click", function() {
			phoneButtonClick()
		}), "right" == default_settings.css_mobile_phone_button_position && (addEvent(window, "scroll", buttonSizeFix), addEvent(window, "resize", buttonSizeFix), buttonSizeFix())) : handleDragObject(e, checkButtonCustomPosition, setButtonCustomPosition, function() {
			return !0
		}, function() {
			phoneButtonClick()
		})
	}

	function checkButtonCustomPosition() {
		return getCookie("n_clb_bp")
	}

	function checkWrapCustomPosition() {
		return getCookie("n_clb_wp")
	}

	function setButtonCustomPosition(e) {
		var t = new Date;
		t.setDate(t.getDate() + 1), setCookie("n_clb_bp", JSON.stringify(e), {
			expires: t.toUTCString()
		})
	}

	function setWrapCustomPosition(e) {
		var t = new Date;
		t.setDate(t.getDate() + 1), setCookie("n_clb_wp", JSON.stringify(e), {
			expires: t.toUTCString()
		})
	}

	function handleForm() {
		//return true;
		//alert('hwn form ok');

		var e = document.getElementById("newton_callback_form");
		if (addEvent(e, "submit", function(e) {
				disableSubmitButton(), processForm(e, form_action, showSubmitResult)
			}), default_settings.is_multiwidget && default_settings.multiwidget_application) {
			var t = document.getElementById("newton_callback_form");
			t && addEvent(t, "submit", function(e) {
				processForm(e, application_form_action, showApplicationSubmitResult)
			})
		}
		
		var e = document.getElementById("newton_callback_application_form");
		if (addEvent(e, "submit", function(e) {
				disableSubmitButton(), processForm(e, form_action, showSubmitResult)
			}), default_settings.is_multiwidget && default_settings.multiwidget_application) {
			var t = document.getElementById("newton_callback_application_form");
			t && addEvent(t, "submit", function(e) {
				processForm(e, application_form_action, showApplicationSubmitResult)
			})
		}
		
		
	
	}

	function handleCloseButtonClick() {
		var e = document.getElementById("newton_callback_close");
		addEvent(e, "click", function() {
			close_button_disabled || hideForm()
		});
		var e = document.getElementById("newton_callback_dialog_close");
		addEvent(e, "click", hideDialog);
	}

	function handleDialogButtonsClick() {
		var e = function() {
				hideDialog(!1), showForm({
					dialog_text: default_settings.dialog_accept_text
				}), reachGoal("NEWTON_YES")
			},
			t = document.getElementById("newton_callback_dialog_accept");
		addEvent(t, "click", e);
		var n = function() {
				hideDialog(!1), showForm({
					dialog_text: default_settings.dialog_cancel_text
				}), reachGoal("NEWTON_NO")
			},
			a = document.getElementById("newton_callback_dialog_cancel");
		addEvent(a, "click", n);
		var i = function() {
				hideDialog(), setForget(), disableAll()
			},
			o = document.getElementById("newton_callback_dialog_forget");
		addEvent(o, "click", i);
	}

	function enableShowAtInit() {
		afterLoad = function() {
			checkShowed() && showForm()
		}
	}

	function enableShowAtNthPage() {
		afterLoad = function() {
			showDialog()
		}
	}

	function disableShowAtInit() {
		afterLoad = null
	}

	function enableShowAtExit() {
		var e = 1e3 * (10 - (default_settings.current_time - init_time));
		e > 0 ? setTimeout(function() {
			addEvent(document, "mousemove", mouseEntringTopCorner)
		}, e) : addEvent(document, "mousemove", mouseEntringTopCorner)
	}

	function mouseEntringTopCorner(e) {
		if (null == topCorner && checkShowed()) {
			var t = window.innerWidth - exit_one_w,
				n = exit_one_h;
			e.clientX > t && e.clientY < n && (phoneButton = document.getElementById("newton_callback_phone"), phoneButton.isMoving || (showDialog(), topCorner = setTimeout(function() {
				clearTimeout(topCorner), topCorner = null
			}, 500)))
		}
	}

	function disableShowAtExit() {
		removeEvent(document.body, "mousemove", mouseEntringTopCorner)
	}

	function enableShowAtTime() {
		var e = 1e3 * (default_settings.appearance_time - (default_settings.current_time - init_time));
		e > 0 ? show_timeout_id = setTimeout(function() {
			showDialog(), resetInitTime()
		}, e) : (showDialog(), resetInitTime())
	}

	function disableShowAtTime() {
		show_timeout_id = null
	}

	function disableAll() {
		disableShowAtInit(), disableShowAtExit(), disableShowAtTime()
	}

	function getCookie(e) {
		var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
		return t ? decodeURIComponent(t[1]) : void 0
	}

	function setCookie(e, t, n) {
		n = n || {};
		var a = n.expires;
		if ("number" == typeof a && a) {
			var i = new Date;
			i.setTime(i.getTime() + 1e3 * a), a = n.expires = i
		}
		a && a.toUTCString && (n.expires = a.toUTCString()), n.path = "/", t = encodeURIComponent(t);
		var o = e + "=" + t;
		for (var l in n) {
			o += "; " + l;
			var r = n[l];
			r !== !0 && (o += "=" + r)
		}
		document.cookie = o
	}

	function deleteCookie(e) {
		setCookie(e, null, {
			expires: -1
		})
	}

	function handleFormSelect() {
		var e = document.getElementById(form_name + "_delay_date");
		e && addEvent(e, "change", setHoursSelect), handleFormHoursSelect()
	}

	function handleFormHoursSelect() {
		var e = document.getElementById(form_name + "_delay_hours");
		e && addEvent(e, "change", setLaterCallTimer), setLaterCallTimer()
	}

	function setLaterCallTimer() {
		null == countdown_interval_id && (time = getDelayTimer(), document.getElementById("newton_callback_counter").innerHTML = convertMsecs(time))
	}

	function setActiveCallTimer() {
		null == countdown_interval_id && (document.getElementById("newton_callback_counter").innerHTML = convertMsecs(default_settings.timer))
	}

	function getDelayTimer() {
		var e = document.getElementById(form_name + "_delay_hours");
		return e ? 1e3 * (getDelayDayTime() + 60 * e.value * 60 - default_settings.current_time) - 1 : 0
	}

	function setHoursSelect(e) {
		var t = !1,
			n = document.getElementById(form_name + "_department_id");
		n && n.value && default_settings.have_departments && (t = n.value);
		var a = document.getElementById(form_name + "_delay_date"),
			i = getHoursSelect({
				departmentId: t,
				value: a.value
			}),
			o = document.getElementById(form_name + "_delay_hours");
		o.outerHTML = i, handleFormHoursSelect(), recreateCustomSelects(document.getElementById("newton_callback_form_text"))
	}

	function handleCallTypeSelect() {
		if (is_mobile) {
			var e = document.getElementById("newton_callback_type_callback");
			e && addEvent(e, "click", function() {
				hideTypeSelect(), callType = "callback", showForm()
			});
			var t = document.getElementById("newton_callback_type_direct");
			t && addEvent(t, "click", function() {
				hideTypeSelect(), callType = "direct", showForm()
			})
		}
	}

	function handleDepartmentSelect() {
		if (default_settings.have_departments && !is_mobile && !getSingleNonMobileDepartment()) {
			var e = document.getElementById("newton_callback_departments_list"),
				t = document.getElementById("newton_callback_departments_link"),
				n = document.getElementById("newton_callback_departments");
			handleCustomSelect(t, n, e, setDepartment)
		}
		if (!is_mobile && default_settings.have_departments && default_settings.is_multiwidget && default_settings.multiwidget_application && !getSingleNonMobileDepartment()) {
			var e = document.getElementById("newton_callback_application_departments_list"),
				t = document.getElementById("newton_callback_application_departments_link"),
				n = document.getElementById("newton_callback_application_departments");
			handleCustomSelect(t, n, e, function(e) {
				var t = e.rel,
					n = document.getElementById(application_form_name + "_department_id");
				n.value = t;
				var a = e.innerHTML,
					i = document.getElementById("newton_callback_application_departments_link");
				i.innerHTML = a;
				var i = document.getElementById("newton_callback_application_departments_link_dummy");
				i.innerHTML = a;
				for (var o = document.getElementById("newton_callback_application_departments_list"), l = getSelectLinks(o), r = 0; r < l.length; r++) removeClass(l[r], "newton_selected");
				addClass(e, "newton_selected")
			})
		}
		if (default_settings.have_departments && is_mobile)
			for (var a = document.getElementById("newton_callback_department_select"), e = a.getElementsByTagName("a"), i = 0; i < e.length; i++) addEvent(e[i], "click", function() {
				setDepartment(this)
			})
	}

	function getSingleNonMobileDepartment() {
		var e = !1,
			t = 0;
		for (var n in default_settings.departments) !checkShowDepartment(n) || !checkActiveDepartment(n) && default_settings.disable_delayed_calls || (e = n, t++);
		return t > 1 ? !1 : e
	}

	function getSingleMobileCallbackDepartment() {
		var e = !1,
			t = 0;
		for (var n in default_settings.departments) 0 == default_settings.departments[n].only_on_mobile && (e = n, t++);
		return t > 1 ? !1 : e
	}

	function getDepartmentLinks() {
		var e = document.getElementById("newton_callback_departments_list"),
			t = e.getElementsByTagName("a");
		return t
	}

	function setDepartment(e) {
		var t = e.rel,
			n = document.getElementById(form_name + "_department_id");
		if (n.value = t, is_mobile) hideDepartmentSelect(), showForm({
			departmentId: t
		});
		else {
			var a = document.getElementById("newton_callback_form_text");
			if (checkActive({
					departmentId: t
				})) a.innerHTML = default_settings.form_text, document.getElementById("newton_callback_active_delay_wrap").style.display = "block", setActiveCallTimer();
			else {
				if (!checkLaterCall()) return void(n.value = "");
				document.getElementById("newton_callback_active_delay_wrap").style.display = "none", laterCall ? a.innerHTML = getActiveDelayText({
					departmentId: t
				}) : a.innerHTML = getDelayText({
					departmentId: t
				}), handleFormSelect()
			}
			customSelects(a);
			var i = e.innerHTML,
				o = document.getElementById("newton_callback_departments_link");
			o.innerHTML = i;
			var o = document.getElementById("newton_callback_departments_link_dummy");
			o.innerHTML = i;
			for (var l = getDepartmentLinks(), r = 0; r < l.length; r++) removeClass(l[r], "newton_selected");
			addClass(e, "newton_selected")
		}
	}

	function getDepartmentLink(e) {
		for (var t = getDepartmentLinks(), n = 0; n < t.length; n++)
			if (t[n].rel == e) return t[n];
		return !1
	}

	function getDelayTextMobile(e) {
		e = e || {};
		var t = "departmentId" in e ? e.departmentId : !1;
		if (t) return default_settings.departments[t].delay_text_mobile;
		for (var n in default_settings.departments) return default_settings.departments[n].delay_text_mobile
	}

	function getDelayTextMobileSuccess(e) {
		e = e || {};
		var t = "departmentId" in e ? e.departmentId : !1;
		if (t) return default_settings.departments[t].delay_text_mobile_success;
		for (var n in default_settings.departments) return default_settings.departments[n].delay_text_mobile_success
	}

	function getDelayText(e) {
		e = e || {};
		var t = "departmentId" in e ? e.departmentId : !1;
		if (t) return default_settings.departments[t].delay_text;
		for (var n in default_settings.departments)
			if (checkShowDepartment(n)) return default_settings.departments[n].delay_text
	}

	function getDelayDayTime() {
		var e = document.getElementById(form_name + "_department_id"),
			t = document.getElementById(form_name + "_delay_date");
		if (t) {
			if (e && e.value) {
				var n = default_settings.departments[e.value].delay_data;
				return n.delay_date_time[t.value]
			}
			for (var a in default_settings.departments)
				if (checkShowDepartment(a)) {
					var n = default_settings.departments[a].delay_data;
					return n.delay_date_time[t.value]
				}
		}
	}

	function getActiveDelayText(e) {
		e = e || {};
		var t = "departmentId" in e ? e.departmentId : !1;
		if (t) return default_settings.departments[t].active_delay_text;
		for (var n in default_settings.departments)
			if (checkShowDepartment(n)) return default_settings.departments[n].active_delay_text
	}

	function getHoursSelect(e) {
		e = e || {};
		var t = "departmentId" in e ? e.departmentId : !1,
			n = "value" in e ? e.value : !1;
		if (t) return default_settings.departments[t].delay_data.hours[n];
		for (var a in default_settings.departments)
			if (checkShowDepartment(a)) return default_settings.departments[a].delay_data.hours[n]
	}

	function showDepartmentSelect() {
		addEvent(window, "touchend", departmentSelectClickClose), hidePhoneButton(), hideNonDirectDepartments();
		var e = document.getElementById("newton_callback_department_select");
		e.style.display = "block", handleSelectSize()
	}

	function hideDepartmentSelect() {
		removeEvent(window, "touchend", departmentSelectClickClose), showPhoneButton(), showNonDirectDepartments();
		var e = document.getElementById("newton_callback_department_select");
		e.style.display = "none", unhandleSelectSize()
	}

	function getLocation(e) {
		var t = document.createElement("a");
		return t.href = e, t
	}

	function showTypeSelect() {
		addEvent(window, "touchend", typeSelectClickClose), hidePhoneButton();
		var e = document.getElementById("newton_callback_type_select");
		e.style.display = "block", handleTypeSize()
	}

	function hideTypeSelect() {
		removeEvent(window, "touchend", typeSelectClickClose), showPhoneButton();
		var e = document.getElementById("newton_callback_type_select");
		e.style.display = "none", unhandleTypeSize()
	}

	function hideNonDirectDepartments() {
		if ("direct" == callType)
			for (var e = document.getElementById("newton_callback_department_select"), t = e.getElementsByTagName("a"), n = 0; n < t.length; n++) checkActiveDepartment(t[n].rel) || (t[n].parentNode.style.display = "none");
		if ("callback" == callType)
			for (var e = document.getElementById("newton_callback_department_select"), t = e.getElementsByTagName("a"), n = 0; n < t.length; n++) 1 == default_settings.departments[t[n].rel].only_on_mobile && (t[n].parentNode.style.display = "none")
	}

	function getKeywords(e) {
		if (e && "keywords" in e) return e.keywords;
		var t = getMetaContent("newton:keywords");
		return t ? t : ""
	}

	function showNonDirectDepartments() {
		if ("direct" == callType || "callback" == callType)
			for (var e = document.getElementById("newton_callback_department_select"), t = e.getElementsByTagName("a"), n = 0; n < t.length; n++) t[n].parentNode.style.display = "block"
	}

	function getLandingPageReferrer() {
		return isLocalStorageSupported ? window.localStorage.getItem("callback_landing_page_referrer") : ""
	}

	function getLandingPageUrl() {
		return isLocalStorageSupported ? window.localStorage.getItem("callback_landing_page_url") : ""
	}

	function handleActiveDelay() {
		if (!is_mobile) {
			var e = document.getElementById("newton_callback_active_delay_link");
			addEvent(e, "click", setActiveLaterCall)
		}
	}

	function setDirectCall() {
		var e = document.getElementById(form_name + "_department_id"),
			t = e && e.value ? e.value : !1;
		hideForm(!1), showForm({
			departmentId: t
		})
	}

	function setActiveLaterCall() {
		var e = document.getElementById(form_name + "_department_id"),
			t = e && e.value ? e.value : !1;
		hideForm(!1), laterCall = !0, showForm({
			departmentId: t,
			dialog_text: getActiveDelayText({
				departmentId: t
			})
		})
	}

	function handleMultiwidget() {
		if (!is_mobile && default_settings.is_multiwidget) {
			var e = document.getElementById("newton_callback_tab_call");
			e && addEvent(e, "click", function() {
				setDirectCall(), setMultiwidgetTabSelected("newton_callback_tab_call")
			});
			var t = document.getElementById("newton_callback_tab_delay");
			t && addEvent(t, "click", function() {
				setActiveLaterCall(), setMultiwidgetTabSelected("newton_callback_tab_delay"), reachGoal("NEWTON_DELAYED_CALL_CLICK")
			});
			var n = document.getElementById("newton_callback_tab_application");
			n && addEvent(n, "click", function() {
				default_settings.free_version || (document.getElementById("newton_callback_form").style.display = "none"), default_settings.chat_enabled && (chat_iframe = document.getElementById("newton_chat"), chat_iframe && ("none" != chat_iframe.style.display && addEvent(window, "click", backgroundClickClose), chat_iframe.style.display = "none")), document.getElementById("newton_callback_application_form").style.display = "block", setMultiwidgetTabSelected("newton_callback_tab_application"), reachGoal("NEWTON_APPLICATION_CLICK")
			});
			var a = document.getElementById("newton_callback_tab_chat");
			a && addEvent(a, "click", openChat);
			var i = document.getElementById("newton_callback_tab_ask");
			i && addEvent(i, "click", function() {
				reachGoal("NEWTON_CONS")
			})
		}
	}

	function openChat() {
		default_settings.free_version || (document.getElementById("newton_callback_form").style.display = "none"), default_settings.multiwidget_application && (document.getElementById("newton_callback_application_form").style.display = "none");
		var e = document.getElementById("newton_chat");
		if (!e.src) {
			var t = {
				hash: newton_callback_id
			};
			isVkVerion() && (t.vk = 1), e.src = chat_url + "?" + buildParams("", addReferer(t)).join("&")
		}
		document.getElementById("newton_chat").style.display = "inline-block", setMultiwidgetTabSelected("newton_callback_tab_chat"), removeEvent(window, "click", backgroundClickClose);
		var n = new Date,
			a = n.getTime();
		a += 36e5, n.setTime(a), setCookie("n_chat_opnd", "1", {
			expires: n.toUTCString()
		})
	}

	function setMultiwidgetTabSelected(e) {
		var t = document.getElementById("newton_callback_tabs");
		if (t)
			for (var n = t.getElementsByTagName("a"), a = 0; a < n.length; a++) removeClass(n[a], "newton_active");
		var i = document.getElementById(e);
		i && addClass(i, "newton_active")
	}

	function customSelects(e) {
		if (default_settings.is_multiwidget)
			for (var t = e.getElementsByTagName("select"), n = 0; n < t.length; n++) {
				var a = document.createElement("div");
				addClass(a, "newton_callback_dates_block"), "CallbackRequestForm_delay_date" == t[n].id && addClass(a, "select_day"), "CallbackRequestForm_delay_hours" == t[n].id && addClass(a, "select_time");
				var i = document.createElement("div");
				addClass(i, "newton_callback_dates");
				var o = document.createElement("div");
				addClass(o, "newton_callback_dates_link_wrap");
				var l = document.createElement("a");
				l.href = "javascript:void(0);", addClass(l, "newton_callback_dates_link");
				var r = document.createElement("ul");
				addClass(r, "newton_callback_dates_list");
				for (var s = t[n].id, c = t[n].getElementsByTagName("option"), d = 0; d < c.length; d++) {
					var u = document.createElement("li"),
						_ = document.createElement("a");
					_.href = "javascript:void(0);", _.rel = c[d].value, _.innerHTML = c[d].innerHTML, _.ncs_link = l, _.ncs_ul = r, _.ncs_selectId = s, _.disabled = c[d].disabled, c[d].disabled && addClass(_, "newton_callback_dates_list_disabled"), u.appendChild(_), r.appendChild(u), c[d].selected && (l.innerHTML = c[d].innerHTML)
				}
				o.appendChild(l);
				var m = document.createElement("div");
				addClass(m, "newton_callback_dates_link_wrap");
				var p = document.createElement("a");
				p.href = "javascript:void(0);", addClass(p, "newton_callback_dates_link newton_callback_dates_link_dummy"), p.innerHTML = l.innerHTML, m.appendChild(p), i.appendChild(o), i.appendChild(r), a.appendChild(m), a.appendChild(i), e.insertBefore(a, t[n]), handleCustomSelect(l, i, r, function(e) {
					if (e.disabled) return !1;
					var t = e.ncs_link,
						n = e.ncs_ul,
						a = e.ncs_selectId,
						i = e.rel,
						o = document.getElementById(a);
					o.value = i;
					var l = e.innerHTML;
					t.innerHTML = l;
					for (var r = getSelectLinks(n), s = 0; s < r.length; s++) removeClass(r[s], "newton_selected");
					addClass(e, "newton_selected"), fireEvent(o, "change")
				})
			}
	}

	function openCustomSelect(e, t) {
		e.style.display = "block", addClass(t, "newton_d_opened"), closeCustomSelectEvent(e, t)
	}

	function closeCustomSelectEvent(e, t) {
		addEvent(window, "click", function(n) {
			isDescendant(t, n.target) || (closeCustomSelect(e, t), removeEvent(this, "click", arguments.callee))
		})
	}

	function closeCustomSelect(e, t) {
		e.style.display = "none", removeClass(t, "newton_d_opened")
	}

	function getSelectLinks(e) {
		var t = e.getElementsByTagName("a");
		return t
	}

	function getDirectPhone(e) {
		e = e || {};
		var t = "departmentId" in e ? e.departmentId : !1;
		if (t) return default_settings.departments[t].direct_phone;
		for (var n in default_settings.departments) return default_settings.departments[n].direct_phone
	}

	function getHomeLink() {
		var e = "http://eyenewton2.ru/";
		return default_settings.partner_id && (e += "?utm_source=" + default_settings.partner_id), e
	}

	function disableSubmitButton() {
		var e = document.getElementById("newton_callback_submit_button");
		e && (e.disabled = "disabled")
	}

	function enableSubmitButton() {
		var e = document.getElementById("newton_callback_submit_button");
		e && (e.disabled = !1)
	}

	function remoteRefererLog(e) {
		8 & default_settings.enable_log && remoteLog("referrer", e)
	}

	function remoteLocalStorageLog() {
		4 & default_settings.enable_log && remoteLog("localStorage", "LocalStorage doesn`t supported.")
	}

	function remoteGoalLog(e) {
		if (2 & default_settings.enable_log) {
			var t = e.name + (e.message ? " : " + e.message : "");
			remoteLog("goal", t)
		}
	}

	function remoteErrorLog(e, t, n) {
		if (1 & default_settings.enable_log) {
			var a = t + " > " + e.name + (e.message ? " : " + e.message : "");
			remoteLog("error", a, n)
		}
	}

	function remoteLog(e, t, n) {
		var a = {
			"CallbackLogEntry[hash]": newton_callback_id,
			"CallbackLogEntry[type]": e,
			"CallbackLogEntry[message]": t
		};
		n && (a["CallbackLogEntry[additional]"] = n);
		try {
			ajax.post(log_url, a)
		} catch (i) {}
	}

	function isVkVerion() {
		return "undefined" != typeof newton_vk && newton_vk
	}

	var captions = {
			ru: {

			},
			de: {
				form_input_placeholder: "Bitte geben Sie Ihre Telefonnummer an",
				form_submit_button: "Warte auf Anruf!",
				form_missed_question: "Sie haben keine Zeit, um einen RГјckruf?",
				form_missed_result: "Vielen Dank fГјr Ihre RГјckmeldung berГјcksichtigt.",
				dialog_button_yes: "Ja",
				dialog_button_no: "Nein",
				dialog_button_forget: "Nicht mehr anzeigen",
				service_link: "Der Dienst ist von der Firma Eyetronic zur VerfГјgung gestellt"
			}
		},
		masks = {
			ru: ["+7 (___) ___-__-__"],
			ua: ["+38 (___) ___-__-__"],
			de: ["+49-___-___", "+49 (___) __-__", "+49 (___) __-___", "+49 (___) __-____", "+49 (___) ___-____", "+49 (____) ___-____"]
		},
		prefix = {
			ru: "+7",
			de: "+49"
		};
	Date.prototype.timeNow = function(e) {
		return (this.getHours() < 10 ? "0" : "") + this.getHours() + ":" + (this.getMinutes() < 10 ? "0" : "") + this.getMinutes()
	};
	var is_mobile = isMobile();
	
	isVkVerion() && (is_mobile = !1);
	var ajax = {};
	ajax.x = function() {
		if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
		for (var e, t = ["MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"], n = 0; n < t.length; n++) try {
			e = new ActiveXObject(t[n]);
			break
		} catch (a) {}
		return e
	}, ajax.send = function(e, t, n, a) {
		var i = ajax.x();
		i.withCredentials = !0, i.open(n, e, !0), i.onreadystatechange = function() {
			4 == i.readyState && void 0 !== t && t(i.responseText)
		}, "POST" == n && i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.send(a)
	}, ajax.get = function(e, t, n) {
		t = addReferer(t);
		var a = buildParams("", t);
		ajax.send(e + "?" + a.join("&"), n, "GET", null)
	}, ajax.post = function(e, t, n) {
		refererData = buildParams("", addReferer([])), query = buildParams("", t), ajax.send(e + "?" + refererData.join("&"), n, "POST", query.join("&"))
	};
	
	var addEvent = null,
		removeEvent = null;
	document.addEventListener ? (addEvent = function(e, t, n) {
		e.addEventListener(t, n, !1)
	}, removeEvent = function(e, t, n) {
		e.removeEventListener(t, n, !1)
	}) : (addEvent = function(e, t, n) {
		e.attachEvent("on" + t, n)
	}, removeEvent = function(e, t, n) {
		e.detachEvent("on" + t, n)
	});
	var fireEvent = null;
	fireEvent = "createEvent" in document ? function(e, t) {
		var n = document.createEvent("HTMLEvents");
		n.initEvent(t, !1, !0), e.dispatchEvent(n)
	} : function(e, t) {
		e.fireEvent("on" + t)
	};
	var afterLoad = null,
		current_timestamp = (new Date).getTime(),
		tf = new Date(current_timestamp);
	tf.setHours("00", "00");
	var tt = new Date(current_timestamp);
	tt.setHours("23", "00");
	
	
	
	var server_time = null,
		init_time = null,
		host = "undefined" == typeof newton_callback_current_host ? "/" : "",
		cdn_host = "undefined" == typeof newton_callback_current_host ? "/" : "",
		default_settings = {
			callback: 0,
			appearance_init: 0,
			appearance_exit: 1,
			appearance_time: 0,
			appearance_page_views: 0,
			current_time: current_timestamp,
			css: host + "round_phone/phone.css",
			form_text: "РҐРѕС‚РёС‚Рµ РјС‹ РїРµСЂРµР·РІРѕРЅРёРј РІР°Рј Р·Р° 60 СЃРµРєСѓРЅРґ <br/>Рё РїСЂРµРґР»РѕР¶РёРј РІР°СЂРёР°РЅС‚С‹, РЅРµРґРѕСЃС‚СѓРїРЅС‹Рµ РЅР° СЃР°Р№С‚Рµ?",
			form_text_mobile: "",
			dialog_text: "Р’С‹ РЅР°С€Р»Рё С‚Рѕ, С‡С‚Рѕ РёСЃРєР°Р»Рё РЅР° СЃР°Р№С‚Рµ?",
			dialog_accept_text: "Р”Р°РІР°Р№С‚Рµ РјС‹ РїРµСЂРµР·РІРѕРЅРёРј РІР°Рј Р·Р° 60 СЃРµРєСѓРЅРґ Рё РїСЂРµРґР»РѕР¶РёРј СѓСЃР»РѕРІРёСЏ, РЅРµРґРѕСЃС‚СѓРїРЅС‹Рµ РЅР° СЃР°Р№С‚Рµ?",
			dialog_cancel_text: "Р”Р°РІР°Р№С‚Рµ РјС‹ РїРµСЂРµР·РІРѕРЅРёРј РІР°Рј Р·Р° 60 СЃРµРєСѓРЅРґ Рё РїСЂРµРґР»РѕР¶РёРј СѓСЃР»РѕРІРёСЏ, РЅРµРґРѕСЃС‚СѓРїРЅС‹Рµ РЅР° СЃР°Р№С‚Рµ?",
			is_active: 0,
			timer: 59999,
			show_phone_button: 1,
			show_once_day: 1,
			session_timeout: 1800,
			lang: "ru",
			css_phone_button_color: "",
			css_button_icons_color: "",
			additional_form_html: null,
			additional_dialog_html: null,
			additional_javascript: null,
			phone_button_html: "",
			show_on_mobile: 0,
			dialog_enabled: 0,
			disable_delayed_calls: 0,
			silent_mode: 0,
			css_phone_button_text_color: "",
			phone_button_text: "",
			calltracking: 0,
			enable_log: 0,
			chat_enabled: 0,
			chat_active: 0
		},
		settings_url = "/phone/setting",
		settings_update_interval = 3e5,
		settings_update_interval_id = null,
		show_timeout_id = null,
		countdown_interval = 33,
		countdown_interval_id = null,
		exit_one_w = 200,
		exit_one_h = 100,
		form_name = "CallbackRequestForm",
		form_action = "/phone/send_pretected",
		overflow = "visible",
		timer_msecs = default_settings.timer,
		phone_format = "+7(   )       ",
		phone_input_id = form_name + "_client_phone",
		missed_action = host + "/callback/request/missed",
		isLocalStorageSupported = "localStorage" in window && null !== window.localStorage,
		initViewport, keyboard_opened = !1,
		close_button_disabled = !1,
		initialized = !1,
		formErrorElements = new Array,
		laterCall = !1,
		fingerprint = null,
		closeFormTimeout = null,
		missed_block = !1,
		application_form_action = "/phone/send",
		application_form_name = "ApplicationForm",
		application_phone_input_id = application_form_name + "_client_phone",
		callType = !1,
		applicationFormErrorElements = new Array,
		applicationFormErrorMessages = new Array,
		backgroundShowed = !1,
		successCall = !1,
		goal_url = host + "/callback/request/goal",
		log_url = host + "/callback/request/log",
		formFromDialog = !1,
		chat_url = ("undefined" == typeof newton_callback_current_host ? "https:" : "") + host + "/callback/request/chat",
		slideTimeout = null,
		correct_timeout = null,
		settingsLoaded = !1,
		isAndroid = navigator.userAgent.indexOf("Android ") > -1,
		button_timeout = null,
		handleDragObject = function(e, t, n, a, i, o) {
			var l = function(e, t, n) {
				e.style.setProperty("top", n + "px", "important"), e.style.setProperty("left", t + "px", "important"), e.style.setProperty("bottom", "auto", "important"), e.style.setProperty("right", "auto", "important"), e.style.setProperty("margin", "0", "important")
			};
			(customPosition = t()) && (customPosition = JSON.parse(customPosition), l(e, customPosition.x, customPosition.y), o && l(o, customPosition.x, customPosition.y));
			var r = {},
				s = {},
				c = function(t) {
					return l(e, t.clientX - s.x, t.clientY - s.y), o && l(o, t.clientX - s.x, t.clientY - s.y), cancelEvent(t)
				},
				d = function(t) {
					e.isMoving = !1;
					var a = Math.abs(r.x - t.clientX),
						o = Math.abs(r.y - t.clientY);
					return 30 > a && 30 > o ? i() : n({
						x: t.clientX - s.x,
						y: t.clientY - s.y
					}), removeEvent(document, "mousemove", c), removeEvent(document, "mouseup", d), cancelEvent(t)
				};
			addEvent(e, "mousedown", function(t) {
				return r.x = t.clientX, r.y = t.clientY, s.x = t.clientX - e.offsetLeft, s.y = t.clientY - e.offsetTop, a(s) ? (e.isMoving = !0, addEvent(document, "mousemove", c), addEvent(document, "mouseup", d), cancelEvent(t)) : void 0
			})
		},
		phoneButtonClick = function() {
			
			showForm(), reachGoal("NEWTON_OPEN")
		},
		topCorner = null,
		reachGoal = function(e) {
			reachMetrikaGoal(e), reachAnalyticsGoal(e), reachNewtonGoal(e), reachMailGoal(e);
			var t = getParam("onGoal");
			if ("function" == typeof t) try {
				t(e)
			} catch (n) {
				remoteGoalLog(n)
			}
		},
		reachMetrikaGoal = function(e) {
			e = "NEWTON_DIALOG_CALL" == e ? "NEWTON_CALL" : e;
			for (k in window)
				if ("yaCounter" == k.substr(0, 9) && window[k].reachGoal) try {
					window[k].reachGoal(e)
				} catch (t) {
					remoteGoalLog(t)
				}
		},
		reachAnalyticsGoal = function(e) {
			if (e = "NEWTON_DIALOG_CALL" == e ? "NEWTON_CALL" : e, window.hasOwnProperty("pageTracker")) try {
				window.pageTracker._trackEvent(e, "click")
			} catch (t) {
				remoteGoalLog(t)
			} else if (window.hasOwnProperty("ga")) try {
				var n = ga.getAll();
				for (i = 0; i < n.length; i++) n[i].send("event", e, "click")
			} catch (t) {
				remoteGoalLog(t)
			} else if (window.hasOwnProperty("_gaq")) try {
				window._gaq.push(["_trackEvent", e, "click"])
			} catch (t) {
				remoteGoalLog(t)
			}
		},
		reachMailGoal = function(e) {
			if (e = "NEWTON_DIALOG_CALL" == e ? "NEWTON_CALL" : e, window.hasOwnProperty("_tmr")) try {
				window._tmr.reachGoal({
					goal: e
				})
			} catch (t) {
				remoteGoalLog(t)
			}
		},
		reachNewtonGoal = function(e) {
			var t = goal_url + "?hash=" + newton_callback_id + "&name=" + e + "&r=" + Math.random(),
				n = document.createElement("img");
			n.src = t
		},
		getPageViews = function() {
			if (!isLocalStorageSupported) return 0;
			var e = window.localStorage.getItem("callback_last_visit"),
				t = window.localStorage.getItem("callback_pages"),
				n = parseInt(new Date / 1e3);
			e && n - e > default_settings.session_timeout && (t = null), window.localStorage.setItem("callback_last_visit", n), t = t ? JSON.parse(t) : [];
			var a = location.href.split("/").slice(3).join("/");
			return -1 == t.indexOf(a) && (t.push(a), window.localStorage.setItem("callback_pages", JSON.stringify(t))), t.length
		},
		resetPageViews = function() {
			isLocalStorageSupported && (window.localStorage.removeItem("callback_last_visit"), window.localStorage.removeItem("callback_pages"))
		};
	! function() {
		if (isLocalStorageSupported)
			if (document.referrer) {
				var e = getLocation(document.referrer);
				e.hostname !== location.hostname && (window.localStorage.setItem("callback_landing_page_referrer", document.referrer), window.localStorage.setItem("callback_landing_page_url", window.location.href))
			} else window.localStorage.setItem("callback_landing_page_referrer", "direct"), window.localStorage.setItem("callback_landing_page_url", window.location.href)
	}(), recreateCustomSelects = function(e) {
		for (var t = e.getElementsByClassName("newton_callback_dates_block"), n = new Array, a = 0; a < t.length; a++) n.push(t[a]);
		for (var a = 0; a < n.length; a++) e.removeChild(n[a]);
		customSelects(e)
	}, handleCustomSelect = function(e, t, n, a) {
		addEvent(e, "click", function(e) {
			if (null == countdown_interval_id && !missed_block) {
				var a = window.getComputedStyle(n),
					i = a.getPropertyValue("display");
				"none" == i ? openCustomSelect(n, t) : closeCustomSelect(n, t)
			}
		});
		for (var i = getSelectLinks(n), o = 0; o < i.length; o++) addEvent(i[o], "click", function(e) {
			a(this) !== !1 && closeCustomSelect(n, t), e.preventDefault(), e.stopPropagation()
		})
	};
	try {
		if ("undefined" == typeof JSON) {
			var script = document.createElement("script");
			script.setAttribute("type", "text/javascript"), script.setAttribute("src", cdn_host + "/scripts/json.min.js"), document.getElementsByTagName("head")[0].appendChild(script), script.onload = function() {
				setTimeout(function() {
					getSettings(!0)
				}, 0)
			}
		} else setTimeout(function() {
			getSettings(!0)
		}, 0)
	} catch (e) {
		return remoteErrorLog(e, "start"), !1
	}
	var interval = setInterval(function() {
		"interactive" != document.readyState && "complete" != document.readyState || !settingsLoaded || init()
	}, 100);
	this.externalCall = function(e) {
		e = e || {};
		var t = "delay_call" in e && !default_settings.free_version ? e.delay_call : !1;
		if (initialized) {
			var n = {};
			"keywords" in e && (n.keywords = e.keywords), t ? (laterCall = !0, n.dialog_text = getActiveDelayText(), showForm(n), default_settings.is_multiwidget && setMultiwidgetTabSelected("newton_callback_tab_delay")) : showForm(n)
		}
	}, this.callDCN = function(e) {
		initialized && showForm({
			dcn: e
		})
	};
	var callRequestProcess = !1;
	this.sendCallRequest = function(e) {
		if (!callRequestProcess) {
			callRequestProcess = !0, e = e || {};
			var t = {
				"_csrf": default_settings._csrf,
				"CallbackRequestForm[landing_page_referrer]": getLandingPageReferrer(),
				"CallbackRequestForm[landing_page_url]": getLandingPageUrl(),
				"CallbackRequestForm[fingerprint]": fingerprint,
				"CallbackRequestForm[referer]": window.location.href,
				"CallbackRequestForm[hash]": newton_callback_id,
				"CallbackRequestForm[client_phone]": e.client_phone,
				"CallbackRequestForm[referrer_keywords]": getKeywords(e)
			};
			"undefined" != typeof newton_local_cookie && (t["CallbackRequestForm[local_cookie]"] = newton_local_cookie), void 0 !== e.delay_date && (t["CallbackRequestForm[delay_date]"] = e.delay_date), void 0 !== e.delay_hours && (t["CallbackRequestForm[delay_hours]"] = e.delay_hours), void 0 !== e.department_id && (t["CallbackRequestForm[department_id]"] = e.department_id), submitRequest(form_action, t, function(t) {
				callRequestProcess = !1, 1 == t && reachGoal("NEWTON_CALL"), void 0 !== e.callback && e.callback(1 == t, 1 != t ? JSON.parse(t) : void 0)
			})
		}
	}, this.getDelayData = function() {
		var e = {};
		for (var t in default_settings.departments) e[t] = default_settings.departments[t].delay_data.pure_data;
		return e
	}, this.isDirectCall = function() {
		return checkActive();
	}
}
var swfobject = function() {
	function e() {
		if (!X && document.getElementsByTagName("body")[0]) {
			try {
				var e, t = f("span");
				t.style.display = "none", e = R.getElementsByTagName("body")[0].appendChild(t), e.parentNode.removeChild(e), e = null, t = null
			} catch (n) {
				return
			}
			X = !0;
			for (var a = z.length, i = 0; a > i; i++) z[i]()
		}
	}

	function t(e) {
		X ? e() : z[z.length] = e
	}

	function n(e) {
		if (typeof O.addEventListener != A) O.addEventListener("load", e, !1);
		else if (typeof R.addEventListener != A) R.addEventListener("load", e, !1);
		else if (typeof O.attachEvent != A) w(O, "onload", e);
		else if ("function" == typeof O.onload) {
			var t = O.onload;
			O.onload = function() {
				t(), e()
			}
		} else O.onload = e
	}

	function a() {
		var e = R.getElementsByTagName("body")[0],
			t = f(M);
		t.setAttribute("style", "visibility: hidden;"), t.setAttribute("type", F);
		var n = e.appendChild(t);
		if (n) {
			var a = 0;
			! function o() {
				if (typeof n.GetVariable != A) try {
					var l = n.GetVariable("$version");
					l && (l = l.split(" ")[1].split(","), J.pv = [v(l[0]), v(l[1]), v(l[2])])
				} catch (r) {
					J.pv = [8, 0, 0]
				} else if (10 > a) return a++, void setTimeout(o, 10);
				e.removeChild(t), n = null, i()
			}()
		} else i()
	}

	function i() {
		var e = U.length;
		if (e > 0)
			for (var t = 0; e > t; t++) {
				var n = U[t].id,
					a = U[t].callbackFn,
					i = {
						success: !1,
						id: n
					};
				if (J.pv[0] > 0) {
					var c = h(n);
					if (c)
						if (!b(U[t].swfVersion) || J.wk && J.wk < 312)
							if (U[t].expressInstall && l()) {
								var d = {};
								d.data = U[t].expressInstall, d.width = c.getAttribute("width") || "0", d.height = c.getAttribute("height") || "0", c.getAttribute("class") && (d.styleclass = c.getAttribute("class")), c.getAttribute("align") && (d.align = c.getAttribute("align"));
								for (var u = {}, _ = c.getElementsByTagName("param"), m = _.length, p = 0; m > p; p++) "movie" != _[p].getAttribute("name").toLowerCase() && (u[_[p].getAttribute("name")] = _[p].getAttribute("value"));
								r(d, u, n, a)
							} else s(c), a && a(i);
					else k(n, !0), a && (i.success = !0, i.ref = o(n), i.id = n, a(i))
				} else if (k(n, !0), a) {
					var g = o(n);
					g && typeof g.SetVariable != A && (i.success = !0, i.ref = g, i.id = g.id), a(i)
				}
			}
	}

	function o(e) {
		var t = null,
			n = h(e);
		return n && "OBJECT" === n.nodeName.toUpperCase() && (t = typeof n.SetVariable !== A ? n : n.getElementsByTagName(M)[0] || n), t
	}

	function l() {
		return !V && b("6.0.65") && (J.win || J.mac) && !(J.wk && J.wk < 312)
	}

	function r(e, t, n, a) {
		var i = h(n);
		if (n = g(n), V = !0, C = a || null, x = {
				success: !1,
				id: n
			}, i) {
			"OBJECT" == i.nodeName.toUpperCase() ? (S = c(i), T = null) : (S = i, T = n), e.id = D, (typeof e.width == A || !/%$/.test(e.width) && v(e.width) < 310) && (e.width = "310"), (typeof e.height == A || !/%$/.test(e.height) && v(e.height) < 137) && (e.height = "137");
			var o = J.ie ? "ActiveX" : "PlugIn",
				l = "MMredirectURL=" + encodeURIComponent(O.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + o + "&MMdoctitle=" + encodeURIComponent(R.title.slice(0, 47) + " - Flash Player Installation");
			if (typeof t.flashvars != A ? t.flashvars += "&" + l : t.flashvars = l, J.ie && 4 != i.readyState) {
				var r = f("div");
				n += "SWFObjectNew", r.setAttribute("id", n), i.parentNode.insertBefore(r, i), i.style.display = "none", m(i)
			}
			u(e, t, n)
		}
	}

	function s(e) {
		if (J.ie && 4 != e.readyState) {
			e.style.display = "none";
			var t = f("div");
			e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(c(e), t), m(e)
		} else e.parentNode.replaceChild(c(e), e)
	}

	function c(e) {
		var t = f("div");
		if (J.win && J.ie) t.innerHTML = e.innerHTML;
		else {
			var n = e.getElementsByTagName(M)[0];
			if (n) {
				var a = n.childNodes;
				if (a)
					for (var i = a.length, o = 0; i > o; o++) 1 == a[o].nodeType && "PARAM" == a[o].nodeName || 8 == a[o].nodeType || t.appendChild(a[o].cloneNode(!0))
			}
		}
		return t
	}

	function d(e, t) {
		var n = f("div");
		return n.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + e + "'>" + t + "</object>", n.firstChild
	}

	function u(e, t, n) {
		var a, i = h(n);
		if (n = g(n), J.wk && J.wk < 312) return a;
		if (i) {
			var o, l, r, s = f(J.ie ? "div" : M);
			typeof e.id == A && (e.id = n);
			for (r in t) t.hasOwnProperty(r) && "movie" !== r.toLowerCase() && _(s, r, t[r]);
			J.ie && (s = d(e.data, s.innerHTML));
			for (o in e) e.hasOwnProperty(o) && (l = o.toLowerCase(), "styleclass" === l ? s.setAttribute("class", e[o]) : "classid" !== l && "data" !== l && s.setAttribute(o, e[o]));
			J.ie ? W[W.length] = e.id : (s.setAttribute("type", F), s.setAttribute("data", e.data)), i.parentNode.replaceChild(s, i), a = s
		}
		return a
	}

	function _(e, t, n) {
		var a = f("param");
		a.setAttribute("name", t), a.setAttribute("value", n), e.appendChild(a)
	}

	function m(e) {
		var t = h(e);
		t && "OBJECT" == t.nodeName.toUpperCase() && (J.ie ? (t.style.display = "none", function n() {
			if (4 == t.readyState) {
				for (var e in t) "function" == typeof t[e] && (t[e] = null);
				t.parentNode.removeChild(t)
			} else setTimeout(n, 10)
		}()) : t.parentNode.removeChild(t))
	}

	function p(e) {
		return e && e.nodeType && 1 === e.nodeType
	}

	function g(e) {
		return p(e) ? e.id : e
	}

	function h(e) {
		if (p(e)) return e;
		var t = null;
		try {
			t = R.getElementById(e)
		} catch (n) {}
		return t
	}

	function f(e) {
		return R.createElement(e)
	}

	function v(e) {
		return parseInt(e, 10)
	}

	function w(e, t, n) {
		e.attachEvent(t, n), j[j.length] = [e, t, n]
	}

	function b(e) {
		e += "";
		var t = J.pv,
			n = e.split(".");
		return n[0] = v(n[0]), n[1] = v(n[1]) || 0, n[2] = v(n[2]) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
	}

	function y(e, t, n, a) {
		var i = R.getElementsByTagName("head")[0];
		if (i) {
			var o = "string" == typeof n ? n : "screen";
			if (a && (I = null, B = null), !I || B != o) {
				var l = f("style");
				l.setAttribute("type", "text/css"), l.setAttribute("media", o), I = i.appendChild(l), J.ie && typeof R.styleSheets != A && R.styleSheets.length > 0 && (I = R.styleSheets[R.styleSheets.length - 1]), B = o
			}
			I && (typeof I.addRule != A ? I.addRule(e, t) : typeof R.createTextNode != A && I.appendChild(R.createTextNode(e + " {" + t + "}")))
		}
	}

	function k(e, t) {
		if (K) {
			var n = t ? "visible" : "hidden",
				a = h(e);
			X && a ? a.style.visibility = n : "string" == typeof e && y("#" + e, "visibility:" + n)
		}
	}

	function E(e) {
		var t = /[\\\"<>\.;]/,
			n = null != t.exec(e);
		return n && typeof encodeURIComponent != A ? encodeURIComponent(e) : e
	}
	var S, T, C, x, I, B, A = "undefined",
		M = "object",
		L = "Shockwave Flash",
		P = "ShockwaveFlash.ShockwaveFlash",
		F = "application/x-shockwave-flash",
		D = "SWFObjectExprInst",
		N = "onreadystatechange",
		O = window,
		R = document,
		H = navigator,
		G = !1,
		z = [],
		U = [],
		W = [],
		j = [],
		X = !1,
		V = !1,
		K = !0,
		q = !1,
		J = function() {
			var e = typeof R.getElementById != A && typeof R.getElementsByTagName != A && typeof R.createElement != A,
				t = H.userAgent.toLowerCase(),
				n = H.platform.toLowerCase(),
				a = n ? /win/.test(n) : /win/.test(t),
				i = n ? /mac/.test(n) : /mac/.test(t),
				o = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
				l = "Microsoft Internet Explorer" === H.appName,
				r = [0, 0, 0],
				s = null;
			if (typeof H.plugins != A && typeof H.plugins[L] == M) s = H.plugins[L].description, s && typeof H.mimeTypes != A && H.mimeTypes[F] && H.mimeTypes[F].enabledPlugin && (G = !0, l = !1, s = s.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), r[0] = v(s.replace(/^(.*)\..*$/, "$1")), r[1] = v(s.replace(/^.*\.(.*)\s.*$/, "$1")), r[2] = /[a-zA-Z]/.test(s) ? v(s.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0);
			else if (typeof O.ActiveXObject != A) try {
				var c = new ActiveXObject(P);
				c && (s = c.GetVariable("$version"), s && (l = !0, s = s.split(" ")[1].split(","), r = [v(s[0]), v(s[1]), v(s[2])]))
			} catch (d) {}
			return {
				w3: e,
				pv: r,
				wk: o,
				ie: l,
				win: a,
				mac: i
			}
		}();
	(function() {
		J.w3 && ((typeof R.readyState != A && ("complete" === R.readyState || "interactive" === R.readyState) || typeof R.readyState == A && (R.getElementsByTagName("body")[0] || R.body)) && e(), X || (typeof R.addEventListener != A && R.addEventListener("DOMContentLoaded", e, !1), J.ie && (R.attachEvent(N, function t() {
			"complete" == R.readyState && (R.detachEvent(N, t), e())
		}), O == top && ! function n() {
			if (!X) {
				try {
					R.documentElement.doScroll("left")
				} catch (t) {
					return void setTimeout(n, 0)
				}
				e()
			}
		}()), J.wk && ! function a() {
			return X ? void 0 : /loaded|complete/.test(R.readyState) ? void e() : void setTimeout(a, 0)
		}()))
	})();
	z[0] = function() {
		G ? a() : i()
	};
	(function() {
		J.ie && window.attachEvent("onunload", function() {
			for (var e = j.length, t = 0; e > t; t++) j[t][0].detachEvent(j[t][1], j[t][2]);
			for (var n = W.length, a = 0; n > a; a++) m(W[a]);
			for (var i in J) J[i] = null;
			J = null;
			for (var o in swfobject) swfobject[o] = null;
			swfobject = null
		})
	})();
	return {
		registerObject: function(e, t, n, a) {
			if (J.w3 && e && t) {
				var i = {};
				i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = a, U[U.length] = i, k(e, !1)
			} else a && a({
				success: !1,
				id: e
			})
		},
		getObjectById: function(e) {
			return J.w3 ? o(e) : void 0
		},
		embedSWF: function(e, n, a, i, o, s, c, d, _, m) {
			var p = g(n),
				h = {
					success: !1,
					id: p
				};
			J.w3 && !(J.wk && J.wk < 312) && e && n && a && i && o ? (k(p, !1), t(function() {
				a += "", i += "";
				var t = {};
				if (_ && typeof _ === M)
					for (var g in _) t[g] = _[g];
				t.data = e, t.width = a, t.height = i;
				var f = {};
				if (d && typeof d === M)
					for (var v in d) f[v] = d[v];
				if (c && typeof c === M)
					for (var w in c)
						if (c.hasOwnProperty(w)) {
							var y = q ? encodeURIComponent(w) : w,
								E = q ? encodeURIComponent(c[w]) : c[w];
							typeof f.flashvars != A ? f.flashvars += "&" + y + "=" + E : f.flashvars = y + "=" + E
						}
				if (b(o)) {
					var S = u(t, f, n);
					t.id == p && k(p, !0), h.success = !0, h.ref = S, h.id = S.id
				} else {
					if (s && l()) return t.data = s, void r(t, f, n, m);
					k(p, !0)
				}
				m && m(h)
			})) : m && m(h)
		},
		switchOffAutoHideShow: function() {
			K = !1
		},
		enableUriEncoding: function(e) {
			q = typeof e === A ? !0 : e
		},
		ua: J,
		getFlashPlayerVersion: function() {
			return {
				major: J.pv[0],
				minor: J.pv[1],
				release: J.pv[2]
			}
		},
		hasFlashPlayerVersion: b,
		createSWF: function(e, t, n) {
			return J.w3 ? u(e, t, n) : void 0
		},
		showExpressInstall: function(e, t, n, a) {
			J.w3 && l() && r(e, t, n, a)
		},
		removeSWF: function(e) {
			J.w3 && m(e)
		},
		createCSS: function(e, t, n, a) {
			J.w3 && y(e, t, n, a)
		},
		addDomLoadEvent: t,
		addLoadEvent: n,
		getQueryParamValue: function(e) {
			var t = R.location.search || R.location.hash;
			if (t) {
				if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return E(t);
				for (var n = t.split("&"), a = 0; a < n.length; a++)
					if (n[a].substring(0, n[a].indexOf("=")) == e) return E(n[a].substring(n[a].indexOf("=") + 1))
			}
			return ""
		},
		expressInstallCallback: function() {
			if (V) {
				var e = h(D);
				e && S && (e.parentNode.replaceChild(S, e), T && (k(T, !0), J.ie && (S.style.display = "block")), C && C(x)), V = !1
			}
		},
		version: "2.3"
	}
}();
! function(e, t, n) {
	"use strict";
	t[e] = n()
}("Fingerprint2", this, function() {
	"use strict";
	Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
		var n;
		if (null == this) throw new TypeError("'this' is null or undefined");
		var a = Object(this),
			i = a.length >>> 0;
		if (0 === i) return -1;
		var o = +t || 0;
		if (Math.abs(o) === 1 / 0 && (o = 0), o >= i) return -1;
		for (n = Math.max(o >= 0 ? o : i - Math.abs(o), 0); i > n;) {
			if (n in a && a[n] === e) return n;
			n++
		}
		return -1
	});
	var e = function(e) {
		var t = {
			swfContainerId: "fingerprintjs2",
			swfPath: "flash/compiled/FontList.swf",
			detectScreenOrientation: !0,
			sortPluginsFor: [/palemoon/i]
		};
		this.options = this.extend(e, t), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map
	};
	return e.prototype = {
		extend: function(e, t) {
			if (null == e) return t;
			for (var n in e) null != e[n] && t[n] !== e[n] && (t[n] = e[n]);
			return t
		},
		log: function(e) {
			window.console && console.log(e)
		},
		get: function(e) {
			var t = [];
			t = this.userAgentKey(t), t = this.languageKey(t), t = this.colorDepthKey(t), t = this.screenResolutionKey(t), t = this.availableScreenResolutionKey(t), t = this.timezoneOffsetKey(t), t = this.sessionStorageKey(t), t = this.localStorageKey(t), t = this.indexedDbKey(t), t = this.addBehaviorKey(t), t = this.openDatabaseKey(t), t = this.cpuClassKey(t), t = this.platformKey(t), t = this.doNotTrackKey(t), t = this.pluginsKey(t), t = this.canvasKey(t), t = this.webglKey(t), t = this.adBlockKey(t), t = this.hasLiedLanguagesKey(t), t = this.hasLiedResolutionKey(t), t = this.hasLiedOsKey(t), t = this.hasLiedBrowserKey(t), t = this.touchSupportKey(t);
			var n = this;
			this.fontsKey(t, function(t) {
				var a = [];
				n.each(t, function(e) {
					var t = e.value;
					"undefined" != typeof e.value.join && (t = e.value.join(";")), a.push(t)
				});
				var i = n.x64hash128(a.join("~~~"), 31);
				return e(i, t)
			})
		},
		userAgentKey: function(e) {
			return this.options.excludeUserAgent || e.push({
				key: "user_agent",
				value: this.getUserAgent()
			}), e
		},
		getUserAgent: function() {
			return navigator.userAgent
		},
		languageKey: function(e) {
			return this.options.excludeLanguage || e.push({
				key: "language",
				value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage
			}), e
		},
		colorDepthKey: function(e) {
			return this.options.excludeColorDepth || e.push({
				key: "color_depth",
				value: screen.colorDepth
			}), e
		},
		screenResolutionKey: function(e) {
			return this.options.excludeScreenResolution ? e : this.getScreenResolution(e)
		},
		getScreenResolution: function(e) {
			var t;
			return t = this.options.detectScreenOrientation && screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height], "undefined" != typeof t && e.push({
				key: "resolution",
				value: t
			}), e
		},
		availableScreenResolutionKey: function(e) {
			return this.options.excludeAvailableScreenResolution ? e : this.getAvailableScreenResolution(e)
		},
		getAvailableScreenResolution: function(e) {
			var t;
			return screen.availWidth && screen.availHeight && (t = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]), "undefined" != typeof t && e.push({
				key: "available_resolution",
				value: t
			}), e
		},
		timezoneOffsetKey: function(e) {
			return this.options.excludeTimezoneOffset || e.push({
				key: "timezone_offset",
				value: (new Date).getTimezoneOffset()
			}), e
		},
		sessionStorageKey: function(e) {
			return !this.options.excludeSessionStorage && this.hasSessionStorage() && e.push({
				key: "session_storage",
				value: 1
			}), e
		},
		localStorageKey: function(e) {
			return !this.options.excludeSessionStorage && this.hasLocalStorage() && e.push({
				key: "local_storage",
				value: 1
			}), e
		},
		indexedDbKey: function(e) {
			return !this.options.excludeIndexedDB && this.hasIndexedDB() && e.push({
				key: "indexed_db",
				value: 1
			}), e
		},
		addBehaviorKey: function(e) {
			return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && e.push({
				key: "add_behavior",
				value: 1
			}), e
		},
		openDatabaseKey: function(e) {
			return !this.options.excludeOpenDatabase && window.openDatabase && e.push({
				key: "open_database",
				value: 1
			}), e
		},
		cpuClassKey: function(e) {
			return this.options.excludeCpuClass || e.push({
				key: "cpu_class",
				value: this.getNavigatorCpuClass()
			}), e
		},
		platformKey: function(e) {
			return this.options.excludePlatform || e.push({
				key: "navigator_platform",
				value: this.getNavigatorPlatform()
			}), e
		},
		doNotTrackKey: function(e) {
			return this.options.excludeDoNotTrack || e.push({
				key: "do_not_track",
				value: this.getDoNotTrack()
			}), e
		},
		canvasKey: function(e) {
			return !this.options.excludeCanvas && this.isCanvasSupported() && e.push({
				key: "canvas",
				value: this.getCanvasFp()
			}), e
		},
		webglKey: function(e) {
			return this.options.excludeWebGL ? ("undefined" == typeof NODEBUG && this.log("Skipping WebGL fingerprinting per excludeWebGL configuration option"), e) : this.isWebGlSupported() ? (e.push({
				key: "webgl",
				value: this.getWebglFp()
			}), e) : ("undefined" == typeof NODEBUG && this.log("Skipping WebGL fingerprinting because it is not supported in this browser"), e)
		},
		adBlockKey: function(e) {
			return this.options.excludeAdBlock || e.push({
				key: "adblock",
				value: this.getAdBlock()
			}), e
		},
		hasLiedLanguagesKey: function(e) {
			return this.options.excludeHasLiedLanguages || e.push({
				key: "has_lied_languages",
				value: this.getHasLiedLanguages()
			}), e
		},
		hasLiedResolutionKey: function(e) {
			return this.options.excludeHasLiedResolution || e.push({
				key: "has_lied_resolution",
				value: this.getHasLiedResolution()
			}), e
		},
		hasLiedOsKey: function(e) {
			return this.options.excludeHasLiedOs || e.push({
				key: "has_lied_os",
				value: this.getHasLiedOs()
			}), e
		},
		hasLiedBrowserKey: function(e) {
			return this.options.excludeHasLiedBrowser || e.push({
				key: "has_lied_browser",
				value: this.getHasLiedBrowser()
			}), e
		},
		fontsKey: function(e, t) {
			return this.options.excludeJsFonts ? this.flashFontsKey(e, t) : this.jsFontsKey(e, t)
		},
		flashFontsKey: function(e, t) {
			return this.options.excludeFlashFonts ? ("undefined" == typeof NODEBUG && this.log("Skipping flash fonts detection per excludeFlashFonts configuration option"), t(e)) : this.hasSwfObjectLoaded() ? this.hasMinFlashInstalled() ? "undefined" == typeof this.options.swfPath ? ("undefined" == typeof NODEBUG && this.log("To use Flash fonts detection, you must pass a valid swfPath option, skipping Flash fonts enumeration"), t(e)) : void this.loadSwfAndDetectFonts(function(n) {
				e.push({
					key: "swf_fonts",
					value: n.join(";")
				}), t(e)
			}) : ("undefined" == typeof NODEBUG && this.log("Flash is not installed, skipping Flash fonts enumeration"), t(e)) : ("undefined" == typeof NODEBUG && this.log("Swfobject is not detected, Flash fonts enumeration is skipped"), t(e))
		},
		jsFontsKey: function(e, t) {
			var n = this;
			return setTimeout(function() {
				var a = ["monospace", "sans-serif", "serif"],
					i = "mmmmmmmmmmlli",
					o = "72px",
					l = document.getElementsByTagName("body")[0],
					r = document.createElement("span");
				r.style.position = "absolute", r.style.left = "-9999px", r.style.fontSize = o, r.innerHTML = i;
				for (var s = {}, c = {}, d = 0, u = a.length; u > d; d++) r.style.fontFamily = a[d], l.appendChild(r), s[a[d]] = r.offsetWidth, c[a[d]] = r.offsetHeight, l.removeChild(r);
				var _ = function(e) {
						for (var t = !1, n = 0, i = a.length; i > n; n++) {
							r.style.fontFamily = e + "," + a[n], l.appendChild(r);
							var o = r.offsetWidth !== s[a[n]] || r.offsetHeight !== c[a[n]];
							l.removeChild(r), t = t || o
						}
						return t
					},
					m = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
					p = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
				n.options.extendedJsFonts && (m = m.concat(p));
				for (var g = [], h = 0, f = m.length; f > h; h++) _(m[h]) && g.push(m[h]);
				e.push({
					key: "js_fonts",
					value: g
				}), t(e)
			}, 1)
		},
		pluginsKey: function(e) {
			return this.options.excludePlugins || (this.isIE() ? e.push({
				key: "ie_plugins",
				value: this.getIEPlugins()
			}) : e.push({
				key: "regular_plugins",
				value: this.getRegularPlugins()
			})), e
		},
		getRegularPlugins: function() {
			for (var e = [], t = 0, n = navigator.plugins.length; n > t; t++) e.push(navigator.plugins[t]);
			return this.pluginsShouldBeSorted() && (e = e.sort(function(e, t) {
				return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
			})), this.map(e, function(e) {
				var t = this.map(e, function(e) {
					return [e.type, e.suffixes].join("~")
				}).join(",");
				return [e.name, e.description, t].join("::")
			}, this)
		},
		getIEPlugins: function() {
			var e = [];
			if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
				var t = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
				e = this.map(t, function(e) {
					try {
						return new ActiveXObject(e), e
					} catch (t) {
						return null
					}
				})
			}
			return navigator.plugins && (e = e.concat(this.getRegularPlugins())), e
		},
		pluginsShouldBeSorted: function() {
			for (var e = !1, t = 0, n = this.options.sortPluginsFor.length; n > t; t++) {
				var a = this.options.sortPluginsFor[t];
				if (navigator.userAgent.match(a)) {
					e = !0;
					break
				}
			}
			return e
		},
		touchSupportKey: function(e) {
			return this.options.excludeTouchSupport || e.push({
				key: "touch_support",
				value: this.getTouchSupport()
			}), e
		},
		hasSessionStorage: function() {
			try {
				return !!window.sessionStorage
			} catch (e) {
				return !0
			}
		},
		hasLocalStorage: function() {
			try {
				return !!window.localStorage
			} catch (e) {
				return !0
			}
		},
		hasIndexedDB: function() {
			return !!window.indexedDB
		},
		getNavigatorCpuClass: function() {
			return navigator.cpuClass ? navigator.cpuClass : "unknown"
		},
		getNavigatorPlatform: function() {
			return navigator.platform ? navigator.platform : "unknown"
		},
		getDoNotTrack: function() {
			return navigator.doNotTrack ? navigator.doNotTrack : "unknown"
		},
		getTouchSupport: function() {
			var e = 0,
				t = !1;
			"undefined" != typeof navigator.maxTouchPoints ? e = navigator.maxTouchPoints : "undefined" != typeof navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
			try {
				document.createEvent("TouchEvent"), t = !0
			} catch (n) {}
			var a = "ontouchstart" in window;
			return [e, t, a]
		},
		getCanvasFp: function() {
			var e = [],
				t = document.createElement("canvas");
			t.width = 2e3, t.height = 200, t.style.display = "inline";
			var n = t.getContext("2d");
			return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), e.push("canvas winding:" + (n.isPointInPath(5, 5, "evenodd") === !1 ? "yes" : "no")), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", this.options.dontUseFakeFontInCanvas ? n.font = "11pt Arial" : n.font = "11pt no-real-font-123", n.fillText("Cwm fjordbank glyphs vext quiz, рџѓ", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.7)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, рџѓ", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd"), e.push("canvas fp:" + t.toDataURL()), e.join("~")
		},
		getWebglFp: function() {
			var e, t = function(t) {
					return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
				},
				n = function(e) {
					var t, n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
					return n ? (t = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === t && (t = 2), t) : null
				};
			if (e = this.getWebglCanvas(), !e) return null;
			var a = [],
				i = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",
				o = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",
				l = e.createBuffer();
			e.bindBuffer(e.ARRAY_BUFFER, l);
			var r = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
			e.bufferData(e.ARRAY_BUFFER, r, e.STATIC_DRAW), l.itemSize = 3, l.numItems = 3;
			var s = e.createProgram(),
				c = e.createShader(e.VERTEX_SHADER);
			e.shaderSource(c, i), e.compileShader(c);
			var d = e.createShader(e.FRAGMENT_SHADER);
			return e.shaderSource(d, o), e.compileShader(d), e.attachShader(s, c), e.attachShader(s, d), e.linkProgram(s), e.useProgram(s), s.vertexPosAttrib = e.getAttribLocation(s, "attrVertex"), s.offsetUniform = e.getUniformLocation(s, "uniformOffset"), e.enableVertexAttribArray(s.vertexPosArray), e.vertexAttribPointer(s.vertexPosAttrib, l.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(s.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, l.numItems), null != e.canvas && a.push(e.canvas.toDataURL()), a.push("extensions:" + e.getSupportedExtensions().join(";")), a.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), a.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), a.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), a.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), a.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), a.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), a.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), a.push("webgl max anisotropy:" + n(e)), a.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), a.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), a.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), a.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), a.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), a.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), a.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), a.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), a.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), a.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), a.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), a.push("webgl red bits:" + e.getParameter(e.RED_BITS)), a.push("webgl renderer:" + e.getParameter(e.RENDERER)), a.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), a.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), a.push("webgl vendor:" + e.getParameter(e.VENDOR)), a.push("webgl version:" + e.getParameter(e.VERSION)), e.getShaderPrecisionFormat ? (a.push("webgl vertex shader high float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision), a.push("webgl vertex shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin), a.push("webgl vertex shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax), a.push("webgl vertex shader medium float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision), a.push("webgl vertex shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin), a.push("webgl vertex shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax), a.push("webgl vertex shader low float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision), a.push("webgl vertex shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin), a.push("webgl vertex shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax), a.push("webgl fragment shader high float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision), a.push("webgl fragment shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin), a.push("webgl fragment shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax), a.push("webgl fragment shader medium float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision), a.push("webgl fragment shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin), a.push("webgl fragment shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax), a.push("webgl fragment shader low float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision), a.push("webgl fragment shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin), a.push("webgl fragment shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax), a.push("webgl vertex shader high int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision), a.push("webgl vertex shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin), a.push("webgl vertex shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax), a.push("webgl vertex shader medium int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision), a.push("webgl vertex shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin), a.push("webgl vertex shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax), a.push("webgl vertex shader low int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision), a.push("webgl vertex shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin), a.push("webgl vertex shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax), a.push("webgl fragment shader high int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision), a.push("webgl fragment shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin), a.push("webgl fragment shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax), a.push("webgl fragment shader medium int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision), a.push("webgl fragment shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin), a.push("webgl fragment shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax), a.push("webgl fragment shader low int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision), a.push("webgl fragment shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin), a.push("webgl fragment shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax), a.join("~")) : ("undefined" == typeof NODEBUG && this.log("WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat"), a.join("~"))
		},
		getAdBlock: function() {
			var e = document.createElement("div");
			e.setAttribute("id", "ads");
			try {
				return document.body.appendChild(e), document.getElementById("ads") ? !1 : !0
			} catch (t) {
				return !1
			}
		},
		getHasLiedLanguages: function() {
			if ("undefined" != typeof navigator.languages) try {
				var e = navigator.languages[0].substr(0, 2);
				if (e !== navigator.language.substr(0, 2)) return !0
			} catch (t) {
				return !0
			}
			return !1
		},
		getHasLiedResolution: function() {
			return screen.width < screen.availWidth ? !0 : screen.height < screen.availHeight ? !0 : !1
		},
		getHasLiedOs: function() {
			var e, t = navigator.userAgent.toLowerCase(),
				n = navigator.oscpu,
				a = navigator.platform.toLowerCase();
			e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other";
			var i;
			if (i = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? !0 : !1, i && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e) return !0;
			if ("undefined" != typeof n) {
				if (n = n.toLowerCase(), n.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) return !0;
				if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e) return !0;
				if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
				if (0 === n.indexOf("win") && 0 === n.indexOf("linux") && n.indexOf("mac") >= 0 && "other" !== e) return !0
			}
			return a.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e ? !0 : (a.indexOf("linux") >= 0 || a.indexOf("android") >= 0 || a.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e ? !0 : (a.indexOf("mac") >= 0 || a.indexOf("ipad") >= 0 || a.indexOf("ipod") >= 0 || a.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e ? !0 : 0 === a.indexOf("win") && 0 === a.indexOf("linux") && a.indexOf("mac") >= 0 && "other" !== e ? !0 : "undefined" == typeof navigator.plugins && "Windows" !== e && "Windows Phone" !== e ? !0 : !1
		},
		getHasLiedBrowser: function() {
			var e, t = navigator.userAgent.toLowerCase(),
				n = navigator.productSub;
			if (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other", ("Chrome" === e || "Safari" === e || "Opera" === e) && "20030107" !== n) return !0;
			var a = eval.toString().length;
			if (37 === a && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
			if (39 === a && "Internet Explorer" !== e && "Other" !== e) return !0;
			if (33 === a && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;
			var i;
			try {
				throw "a"
			} catch (o) {
				try {
					o.toSource(), i = !0
				} catch (l) {
					i = !1
				}
			}
			return i && "Firefox" !== e && "Other" !== e ? !0 : !1
		},
		isCanvasSupported: function() {
			var e = document.createElement("canvas");
			return !(!e.getContext || !e.getContext("2d"))
		},
		isWebGlSupported: function() {
			if (!this.isCanvasSupported()) return !1;
			var e, t = document.createElement("canvas");
			try {
				e = t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
			} catch (n) {
				e = !1
			}
			return !!window.WebGLRenderingContext && !!e
		},
		isIE: function() {
			return "Microsoft Internet Explorer" === navigator.appName ? !0 : "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1
		},
		hasSwfObjectLoaded: function() {
			return "undefined" != typeof window.swfobject
		},
		hasMinFlashInstalled: function() {
			return swfobject.hasFlashPlayerVersion("9.0.0")
		},
		addFlashDivNode: function() {
			var e = document.createElement("div");
			e.setAttribute("id", this.options.swfContainerId), document.body.appendChild(e)
		},
		loadSwfAndDetectFonts: function(e) {
			var t = "___fp_swf_loaded";
			window[t] = function(t) {
				e(t)
			};
			var n = this.options.swfContainerId;
			this.addFlashDivNode();
			var a = {
					onReady: t
				},
				i = {
					allowScriptAccess: "always",
					menu: "false"
				};
			swfobject.embedSWF(this.options.swfPath, n, "1", "1", "9.0.0", !1, a, i, {})
		},
		getWebglCanvas: function() {
			var e = document.createElement("canvas"),
				t = null;
			try {
				t = e.getContext("webgl") || e.getContext("experimental-webgl")
			} catch (n) {}
			return t || (t = null), t
		},
		each: function(e, t, n) {
			if (null !== e)
				if (this.nativeForEach && e.forEach === this.nativeForEach) e.forEach(t, n);
				else if (e.length === +e.length) {
				for (var a = 0, i = e.length; i > a; a++)
					if (t.call(n, e[a], a, e) === {}) return
			} else
				for (var o in e)
					if (e.hasOwnProperty(o) && t.call(n, e[o], o, e) === {}) return
		},
		map: function(e, t, n) {
			var a = [];
			return null == e ? a : this.nativeMap && e.map === this.nativeMap ? e.map(t, n) : (this.each(e, function(e, i, o) {
				a[a.length] = t.call(n, e, i, o)
			}), a)
		},
		x64Add: function(e, t) {
			e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
			var n = [0, 0, 0, 0];
			return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
		},
		x64Multiply: function(e, t) {
			e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
			var n = [0, 0, 0, 0];
			return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
		},
		x64Rotl: function(e, t) {
			return t %= 64, 32 === t ? [e[1], e[0]] : 32 > t ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
		},
		x64LeftShift: function(e, t) {
			return t %= 64, 0 === t ? e : 32 > t ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
		},
		x64Xor: function(e, t) {
			return [e[0] ^ t[0], e[1] ^ t[1]]
		},
		x64Fmix: function(e) {
			return e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [4283543511, 3981806797]), e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [3301882366, 444984403]), e = this.x64Xor(e, [0, e[0] >>> 1])
		},
		x64hash128: function(e, t) {
			e = e || "", t = t || 0;
			for (var n = e.length % 16, a = e.length - n, i = [0, t], o = [0, t], l = [0, 0], r = [0, 0], s = [2277735313, 289559509], c = [1291169091, 658871167], d = 0; a > d; d += 16) l = [255 & e.charCodeAt(d + 4) | (255 & e.charCodeAt(d + 5)) << 8 | (255 & e.charCodeAt(d + 6)) << 16 | (255 & e.charCodeAt(d + 7)) << 24, 255 & e.charCodeAt(d) | (255 & e.charCodeAt(d + 1)) << 8 | (255 & e.charCodeAt(d + 2)) << 16 | (255 & e.charCodeAt(d + 3)) << 24], r = [255 & e.charCodeAt(d + 12) | (255 & e.charCodeAt(d + 13)) << 8 | (255 & e.charCodeAt(d + 14)) << 16 | (255 & e.charCodeAt(d + 15)) << 24, 255 & e.charCodeAt(d + 8) | (255 & e.charCodeAt(d + 9)) << 8 | (255 & e.charCodeAt(d + 10)) << 16 | (255 & e.charCodeAt(d + 11)) << 24], l = this.x64Multiply(l, s), l = this.x64Rotl(l, 31), l = this.x64Multiply(l, c), i = this.x64Xor(i, l), i = this.x64Rotl(i, 27), i = this.x64Add(i, o), i = this.x64Add(this.x64Multiply(i, [0, 5]), [0, 1390208809]), r = this.x64Multiply(r, c), r = this.x64Rotl(r, 33), r = this.x64Multiply(r, s), o = this.x64Xor(o, r), o = this.x64Rotl(o, 31), o = this.x64Add(o, i), o = this.x64Add(this.x64Multiply(o, [0, 5]), [0, 944331445]);
			switch (l = [0, 0], r = [0, 0], n) {
				case 15:
					r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(d + 14)], 48));
				case 14:
					r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(d + 13)], 40));
				case 13:
					r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(d + 12)], 32));
				case 12:
					r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(d + 11)], 24));
				case 11:
					r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(d + 10)], 16));
				case 10:
					r = this.x64Xor(r, this.x64LeftShift([0, e.charCodeAt(d + 9)], 8));
				case 9:
					r = this.x64Xor(r, [0, e.charCodeAt(d + 8)]), r = this.x64Multiply(r, c), r = this.x64Rotl(r, 33), r = this.x64Multiply(r, s), o = this.x64Xor(o, r);
				case 8:
					l = this.x64Xor(l, this.x64LeftShift([0, e.charCodeAt(d + 7)], 56));
				case 7:
					l = this.x64Xor(l, this.x64LeftShift([0, e.charCodeAt(d + 6)], 48));
				case 6:
					l = this.x64Xor(l, this.x64LeftShift([0, e.charCodeAt(d + 5)], 40));
				case 5:
					l = this.x64Xor(l, this.x64LeftShift([0, e.charCodeAt(d + 4)], 32));
				case 4:
					l = this.x64Xor(l, this.x64LeftShift([0, e.charCodeAt(d + 3)], 24));
				case 3:
					l = this.x64Xor(l, this.x64LeftShift([0, e.charCodeAt(d + 2)], 16));
				case 2:
					l = this.x64Xor(l, this.x64LeftShift([0, e.charCodeAt(d + 1)], 8));
				case 1:
					l = this.x64Xor(l, [0, e.charCodeAt(d)]), l = this.x64Multiply(l, s), l = this.x64Rotl(l, 31), l = this.x64Multiply(l, c), i = this.x64Xor(i, l)
			}
			return i = this.x64Xor(i, [0, e.length]), o = this.x64Xor(o, [0, e.length]), i = this.x64Add(i, o), o = this.x64Add(o, i), i = this.x64Fmix(i), o = this.x64Fmix(o), i = this.x64Add(i, o), o = this.x64Add(o, i), ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8)
		}
	}, e.VERSION = "1.1.2", e
});
var phoneInputMask = function(e, t) {
	var n = this,
		a = [];
	getMask = function(t) {
		var n = 99,
			a = null;
		for (i = 0; i < e.length; i++) e[i].length >= t && e[i].length - t < n && (a = e[i], n = e[i].length - t);
		return a
	}, getMaskByInput = function(t) {
		t = clearInput(t);
		var n = 99,
			a = null,
			o = t.length;
		for (i = 0; i < e.length; i++) _ml = e[i].match(/[\d\_]/g).length, _ml >= o && _ml - o < n && (a = e[i], n = _ml - o);
		return a
	}, clearInput = function(e) {
		return e.replace(/[^\d]/g, "")
	}, applyMask = function(e, t) {
		e = e.replace(/[^\d]/g, "");
		var n = 0,
			a = "";
		for (i = 0; i < t.length; i++) c = t.charAt(i), "_" == c ? (cc = e.charAt(n++), a += isNaN(parseInt(cc)) ? c : cc) : (a += c, isNaN(parseInt(c)) || c != e.charAt(n) || n++);
		return a
	}, applyKeyCode = function(e) {
		var n = this.selectionStart,
			a = 0;
		if (n != this.selectionEnd) return !1;
		if (n == this.value.length || 95 == e && n + 1 == this.value.length) {
			var o = 95 == e ? -1 : 1,
				l = getMask(n + o);
			if (l && l.length != this.value.length) {
				if (o > 0 && l.length <= n) return !1;
				this.value = applyMask(this.value, l), n = this.value.search(/\d[^\d]*$/) + 1
			}
		}
		if (_cc = this.value.charAt(n), 95 != e || isNaN(parseInt(_cc)) && "_" != _cc) {
			if ("_" != _cc) {
				var r = n;
				for (i = n + 1; i < this.value.length; i++)
					if (_c = this.value.charAt(i), "_" == _c) {
						r = i;
						break
					}
				if (r == n) return !1;
				n = r
			}
		} else a = -1;
		var s = getMask(this.value.length);
		return s && isNaN(parseInt(s.charAt(n))) ? (this.value = this.value.substr(0, n) + String.fromCharCode(e) + this.value.substr(n + 1), t && !t.call(this) ? this.selectionStart = this.selectionEnd = n + a : this.selectionStart = this.selectionEnd = n + 1 + a, !1) : !1
	}, n.onkeydown = function(e) {
		if (90 == e.keyCode && e.ctrlKey && a.length > 0) {
			var t = a.pop();
			return this.value = t[0], this.selectionStart = this.selectionEnd = t[1], !1
		}
		if (86 != e.keyCode && 67 != e.keyCode && 65 != e.keyCode || !e.ctrlKey) {
			var n = this.value,
				i = this.selectionStart,
				o = onkeydown_.call(this, e);
			return n != this.value && a.push([n, i]), o
		}
		return !0
	}, clearSelection = function() {
		var e = this.selectionStart,
			t = this.selectionEnd,
			n = "",
			a = getMask(this.value.length);
		for (i = 0; i < a.length; i++) n += i >= e && i < t ? a.charAt(i) : this.value.charAt(i);
		t == this.value.length ? (this.value = applyMask(n, getMaskByInput(n)), this.selectionStart = this.selectionEnd = this.value.search(/\d[^\d]*$/) + 1) : (this.value = n, this.selectionStart = this.selectionEnd = e)
	}, onkeydown_ = function(e) {
		var t = e.keyCode;
		this.value;
		switch (t) {
			case 8:
				this.selectionStart == this.selectionEnd && this.selectionStart--, clearSelection.call(this);
				break;
			case 36:
			case 35:
			case 39:
			case 37:
			case 9:
			case 116:
			case 13:
				return !0;
			case 46:
				this.selectionStart == this.selectionEnd && this.selectionEnd++, clearSelection.call(this);
				break;
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
				t -= 48;
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
				return this.selectionStart != this.selectionEnd && clearSelection.call(this), applyKeyCode.call(this, t)
		}
		return !1
	}, n.onfocus = function(e) {
		this.value || (this.value = getMask(0))
	}, n.onpaste = function(e) {
		var t = e.clipboardData.getData("text/plain"),
			n = getMaskByInput(t);
		n && (a.push([this.value, this.selectionStart]), this.value = applyMask(t, n)), e.preventDefault()
	}, n.onmouseup = function(e) {
		var t = getMask(this.value.length);
		if (t == this.value) {
			var n = this.value.indexOf("_", this.value.search(/\d[^\d]*$/)); - 1 != n && (this.selectionEndnStart = this.selectionEnd = n)
		}
	}
};
if (!("newtonCallback" in window && void 0 !== window.newtonCallback)) var newtonCallback = new NewtonCallback;