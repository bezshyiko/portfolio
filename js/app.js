(() => {
    var __webpack_modules__ = {
        3002: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
 /*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */            window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                var t, n = (this.document || this.ownerDocument).querySelectorAll(e), o = this;
                do {
                    for (t = n.length; 0 <= --t && n.item(t) !== o; ) ;
                } while (t < 0 && (o = o.parentElement));
                return o;
            }), function() {
                if ("function" == typeof window.CustomEvent) return;
                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e;
            }(), function() {
                for (var r = 0, e = [ "ms", "moz", "webkit", "o" ], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], 
                window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                    var n = (new Date).getTime(), o = Math.max(0, 16 - (n - r)), a = window.setTimeout((function() {
                        e(n + o);
                    }), o);
                    return r = n + o, a;
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e);
                });
            }(), function(e, t) {
                true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return t(e);
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
            }("undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof window ? window : this, (function(M) {
                "use strict";
                var q = {
                    ignore: "[data-scroll-ignore]",
                    header: null,
                    topOnEmptyHash: !0,
                    speed: 500,
                    speedAsDuration: !1,
                    durationMax: null,
                    durationMin: null,
                    clip: !0,
                    offset: 0,
                    easing: "easeInOutCubic",
                    customEasing: null,
                    updateURL: !0,
                    popstate: !0,
                    emitEvents: !0
                }, I = function() {
                    var n = {};
                    return Array.prototype.forEach.call(arguments, (function(e) {
                        for (var t in e) {
                            if (!e.hasOwnProperty(t)) return;
                            n[t] = e[t];
                        }
                    })), n;
                }, r = function(e) {
                    "#" === e.charAt(0) && (e = e.substr(1));
                    for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o; ) {
                        if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
                    }
                    return "#" + r;
                }, F = function() {
                    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                }, L = function(e) {
                    return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
                    var t;
                }, x = function(e, t, n) {
                    0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), 
                    e.focus(), e.style.outline = "none"), M.scrollTo(0, t));
                }, H = function(e, t, n, o) {
                    if (t.emitEvents && "function" == typeof M.CustomEvent) {
                        var a = new CustomEvent(e, {
                            bubbles: !0,
                            detail: {
                                anchor: n,
                                toggle: o
                            }
                        });
                        document.dispatchEvent(a);
                    }
                };
                return function(o, e) {
                    var b, a, A, O, C = {};
                    C.cancelScroll = function(e) {
                        cancelAnimationFrame(O), O = null, e || H("scrollCancel", b);
                    }, C.animateScroll = function(a, r, e) {
                        C.cancelScroll();
                        var i = I(b || q, e || {}), c = "[object Number]" === Object.prototype.toString.call(a), t = c || !a.tagName ? null : a;
                        if (c || t) {
                            var s = M.pageYOffset;
                            i.header && !A && (A = document.querySelector(i.header));
                            var n, o, u, l, m, d, f, h, p = L(A), g = c ? a : function(e, t, n, o) {
                                var a = 0;
                                if (e.offsetParent) for (;a += e.offsetTop, e = e.offsetParent; ) ;
                                return a = Math.max(a - t - n, 0), o && (a = Math.min(a, F() - M.innerHeight)), 
                                a;
                            }(t, p, parseInt("function" == typeof i.offset ? i.offset(a, r) : i.offset, 10), i.clip), y = g - s, v = F(), w = 0, S = (n = y, 
                            u = (o = i).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && u > o.durationMax ? o.durationMax : o.durationMin && u < o.durationMin ? o.durationMin : parseInt(u, 10)), E = function(e) {
                                var t, n, o;
                                l || (l = e), w += e - l, d = s + y * (n = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m, 
                                "easeInQuad" === (t = i).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), 
                                "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), 
                                "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), 
                                "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), 
                                "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), 
                                "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), 
                                "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), 
                                "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), 
                                t.customEasing && (o = t.customEasing(n)), o || n), M.scrollTo(0, Math.floor(d)), 
                                function(e, t) {
                                    var n = M.pageYOffset;
                                    if (e == t || n == t || (s < t && M.innerHeight + n) >= v) return C.cancelScroll(!0), 
                                    x(a, t, c), H("scrollStop", i, a, r), !(O = l = null);
                                }(d, g) || (O = M.requestAnimationFrame(E), l = e);
                            };
                            0 === M.pageYOffset && M.scrollTo(0, 0), f = a, h = i, c || history.pushState && h.updateURL && history.pushState({
                                smoothScroll: JSON.stringify(h),
                                anchor: f.id
                            }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches ? x(a, Math.floor(g), !1) : (H("scrollStart", i, a, r), 
                            C.cancelScroll(!0), M.requestAnimationFrame(E));
                        }
                    };
                    var t = function(e) {
                        if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(b.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) {
                            var t, n;
                            try {
                                t = r(decodeURIComponent(a.hash));
                            } catch (e) {
                                t = r(a.hash);
                            }
                            if ("#" === t) {
                                if (!b.topOnEmptyHash) return;
                                n = document.documentElement;
                            } else n = document.querySelector(t);
                            (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), function(e) {
                                if (history.replaceState && e.updateURL && !history.state) {
                                    var t = M.location.hash;
                                    t = t || "", history.replaceState({
                                        smoothScroll: JSON.stringify(e),
                                        anchor: t || M.pageYOffset
                                    }, document.title, t || M.location.href);
                                }
                            }(b), C.animateScroll(n, a));
                        }
                    }, n = function(e) {
                        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) {
                            var t = history.state.anchor;
                            "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || C.animateScroll(t, null, {
                                updateURL: !1
                            });
                        }
                    };
                    C.destroy = function() {
                        b && (document.removeEventListener("click", t, !1), M.removeEventListener("popstate", n, !1), 
                        C.cancelScroll(), O = A = a = b = null);
                    };
                    return function() {
                        if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                        C.destroy(), b = I(q, e || {}), A = b.header ? document.querySelector(b.header) : null, 
                        document.addEventListener("click", t, !1), b.updateURL && b.popstate && M.addEventListener("popstate", n, !1);
                    }(), C;
                };
            }));
        },
        1607: (module, __unused_webpack_exports, __webpack_require__) => {
            __webpack_require__(5892);
            __webpack_require__(9547);
            var path = __webpack_require__(4522);
            module.exports = path.Array.from;
        },
        580: (module, __unused_webpack_exports, __webpack_require__) => {
            __webpack_require__(4959);
            __webpack_require__(3982);
            __webpack_require__(4509);
            __webpack_require__(5892);
            var path = __webpack_require__(4522);
            module.exports = path.Map;
        },
        8581: (module, __unused_webpack_exports, __webpack_require__) => {
            __webpack_require__(662);
            var path = __webpack_require__(4522);
            module.exports = path.Object.assign;
        },
        5356: (module, __unused_webpack_exports, __webpack_require__) => {
            __webpack_require__(4959);
            __webpack_require__(4509);
            __webpack_require__(6616);
            __webpack_require__(5892);
            var path = __webpack_require__(4522);
            module.exports = path.Set;
        },
        8921: (module, __unused_webpack_exports, __webpack_require__) => {
            __webpack_require__(4959);
            __webpack_require__(4509);
            __webpack_require__(1986);
            var path = __webpack_require__(4522);
            module.exports = path.WeakMap;
        },
        4833: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var isCallable = __webpack_require__(8885);
            var tryToString = __webpack_require__(8336);
            var TypeError = global.TypeError;
            module.exports = function(argument) {
                if (isCallable(argument)) return argument;
                throw TypeError(tryToString(argument) + " is not a function");
            };
        },
        7527: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var isCallable = __webpack_require__(8885);
            var String = global.String;
            var TypeError = global.TypeError;
            module.exports = function(argument) {
                if ("object" == typeof argument || isCallable(argument)) return argument;
                throw TypeError("Can't set " + String(argument) + " as a prototype");
            };
        },
        963: (module, __unused_webpack_exports, __webpack_require__) => {
            var wellKnownSymbol = __webpack_require__(551);
            var create = __webpack_require__(4508);
            var definePropertyModule = __webpack_require__(2498);
            var UNSCOPABLES = wellKnownSymbol("unscopables");
            var ArrayPrototype = Array.prototype;
            if (void 0 == ArrayPrototype[UNSCOPABLES]) definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
                configurable: true,
                value: create(null)
            });
            module.exports = function(key) {
                ArrayPrototype[UNSCOPABLES][key] = true;
            };
        },
        5491: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var isPrototypeOf = __webpack_require__(6678);
            var TypeError = global.TypeError;
            module.exports = function(it, Prototype) {
                if (isPrototypeOf(Prototype, it)) return it;
                throw TypeError("Incorrect invocation");
            };
        },
        6154: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var isObject = __webpack_require__(3021);
            var String = global.String;
            var TypeError = global.TypeError;
            module.exports = function(argument) {
                if (isObject(argument)) return argument;
                throw TypeError(String(argument) + " is not an object");
            };
        },
        809: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6686);
            module.exports = fails((function() {
                if ("function" == typeof ArrayBuffer) {
                    var buffer = new ArrayBuffer(8);
                    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, "a", {
                        value: 8
                    });
                }
            }));
        },
        8970: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var global = __webpack_require__(8159);
            var bind = __webpack_require__(7801);
            var call = __webpack_require__(4923);
            var toObject = __webpack_require__(1851);
            var callWithSafeIterationClosing = __webpack_require__(8280);
            var isArrayIteratorMethod = __webpack_require__(7212);
            var isConstructor = __webpack_require__(2100);
            var lengthOfArrayLike = __webpack_require__(3773);
            var createProperty = __webpack_require__(946);
            var getIterator = __webpack_require__(4120);
            var getIteratorMethod = __webpack_require__(8991);
            var Array = global.Array;
            module.exports = function from(arrayLike) {
                var O = toObject(arrayLike);
                var IS_CONSTRUCTOR = isConstructor(this);
                var argumentsLength = arguments.length;
                var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
                var mapping = void 0 !== mapfn;
                if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
                var iteratorMethod = getIteratorMethod(O);
                var index = 0;
                var length, result, step, iterator, next, value;
                if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
                    iterator = getIterator(O, iteratorMethod);
                    next = iterator.next;
                    result = IS_CONSTRUCTOR ? new this : [];
                    for (;!(step = call(next, iterator)).done; index++) {
                        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [ step.value, index ], true) : step.value;
                        createProperty(result, index, value);
                    }
                } else {
                    length = lengthOfArrayLike(O);
                    result = IS_CONSTRUCTOR ? new this(length) : Array(length);
                    for (;length > index; index++) {
                        value = mapping ? mapfn(O[index], index) : O[index];
                        createProperty(result, index, value);
                    }
                }
                result.length = index;
                return result;
            };
        },
        4097: (module, __unused_webpack_exports, __webpack_require__) => {
            var toIndexedObject = __webpack_require__(8839);
            var toAbsoluteIndex = __webpack_require__(3566);
            var lengthOfArrayLike = __webpack_require__(3773);
            var createMethod = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIndexedObject($this);
                    var length = lengthOfArrayLike(O);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    if (IS_INCLUDES && el != el) while (length > index) {
                        value = O[index++];
                        if (value != value) return true;
                    } else for (;length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                    return !IS_INCLUDES && -1;
                };
            };
            module.exports = {
                includes: createMethod(true),
                indexOf: createMethod(false)
            };
        },
        3259: (module, __unused_webpack_exports, __webpack_require__) => {
            var bind = __webpack_require__(7801);
            var uncurryThis = __webpack_require__(8043);
            var IndexedObject = __webpack_require__(5832);
            var toObject = __webpack_require__(1851);
            var lengthOfArrayLike = __webpack_require__(3773);
            var arraySpeciesCreate = __webpack_require__(4793);
            var push = uncurryThis([].push);
            var createMethod = function(TYPE) {
                var IS_MAP = 1 == TYPE;
                var IS_FILTER = 2 == TYPE;
                var IS_SOME = 3 == TYPE;
                var IS_EVERY = 4 == TYPE;
                var IS_FIND_INDEX = 6 == TYPE;
                var IS_FILTER_REJECT = 7 == TYPE;
                var NO_HOLES = 5 == TYPE || IS_FIND_INDEX;
                return function($this, callbackfn, that, specificCreate) {
                    var O = toObject($this);
                    var self = IndexedObject(O);
                    var boundFunction = bind(callbackfn, that);
                    var length = lengthOfArrayLike(self);
                    var index = 0;
                    var create = specificCreate || arraySpeciesCreate;
                    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : void 0;
                    var value, result;
                    for (;length > index; index++) if (NO_HOLES || index in self) {
                        value = self[index];
                        result = boundFunction(value, index, O);
                        if (TYPE) if (IS_MAP) target[index] = result; else if (result) switch (TYPE) {
                          case 3:
                            return true;

                          case 5:
                            return value;

                          case 6:
                            return index;

                          case 2:
                            push(target, value);
                        } else switch (TYPE) {
                          case 4:
                            return false;

                          case 7:
                            push(target, value);
                        }
                    }
                    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
                };
            };
            module.exports = {
                forEach: createMethod(0),
                map: createMethod(1),
                filter: createMethod(2),
                some: createMethod(3),
                every: createMethod(4),
                find: createMethod(5),
                findIndex: createMethod(6),
                filterReject: createMethod(7)
            };
        },
        8339: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var toAbsoluteIndex = __webpack_require__(3566);
            var lengthOfArrayLike = __webpack_require__(3773);
            var createProperty = __webpack_require__(946);
            var Array = global.Array;
            var max = Math.max;
            module.exports = function(O, start, end) {
                var length = lengthOfArrayLike(O);
                var k = toAbsoluteIndex(start, length);
                var fin = toAbsoluteIndex(void 0 === end ? length : end, length);
                var result = Array(max(fin - k, 0));
                for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
                result.length = n;
                return result;
            };
        },
        7188: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var isArray = __webpack_require__(3040);
            var isConstructor = __webpack_require__(2100);
            var isObject = __webpack_require__(3021);
            var wellKnownSymbol = __webpack_require__(551);
            var SPECIES = wellKnownSymbol("species");
            var Array = global.Array;
            module.exports = function(originalArray) {
                var C;
                if (isArray(originalArray)) {
                    C = originalArray.constructor;
                    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = void 0; else if (isObject(C)) {
                        C = C[SPECIES];
                        if (null === C) C = void 0;
                    }
                }
                return void 0 === C ? Array : C;
            };
        },
        4793: (module, __unused_webpack_exports, __webpack_require__) => {
            var arraySpeciesConstructor = __webpack_require__(7188);
            module.exports = function(originalArray, length) {
                return new (arraySpeciesConstructor(originalArray))(0 === length ? 0 : length);
            };
        },
        8280: (module, __unused_webpack_exports, __webpack_require__) => {
            var anObject = __webpack_require__(6154);
            var iteratorClose = __webpack_require__(932);
            module.exports = function(iterator, fn, value, ENTRIES) {
                try {
                    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
                } catch (error) {
                    iteratorClose(iterator, "throw", error);
                }
            };
        },
        6416: (module, __unused_webpack_exports, __webpack_require__) => {
            var wellKnownSymbol = __webpack_require__(551);
            var ITERATOR = wellKnownSymbol("iterator");
            var SAFE_CLOSING = false;
            try {
                var called = 0;
                var iteratorWithReturn = {
                    next: function() {
                        return {
                            done: !!called++
                        };
                    },
                    return: function() {
                        SAFE_CLOSING = true;
                    }
                };
                iteratorWithReturn[ITERATOR] = function() {
                    return this;
                };
                Array.from(iteratorWithReturn, (function() {
                    throw 2;
                }));
            } catch (error) {}
            module.exports = function(exec, SKIP_CLOSING) {
                if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
                var ITERATION_SUPPORT = false;
                try {
                    var object = {};
                    object[ITERATOR] = function() {
                        return {
                            next: function() {
                                return {
                                    done: ITERATION_SUPPORT = true
                                };
                            }
                        };
                    };
                    exec(object);
                } catch (error) {}
                return ITERATION_SUPPORT;
            };
        },
        539: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var toString = uncurryThis({}.toString);
            var stringSlice = uncurryThis("".slice);
            module.exports = function(it) {
                return stringSlice(toString(it), 8, -1);
            };
        },
        456: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var TO_STRING_TAG_SUPPORT = __webpack_require__(1554);
            var isCallable = __webpack_require__(8885);
            var classofRaw = __webpack_require__(539);
            var wellKnownSymbol = __webpack_require__(551);
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            var Object = global.Object;
            var CORRECT_ARGUMENTS = "Arguments" == classofRaw(function() {
                return arguments;
            }());
            var tryGet = function(it, key) {
                try {
                    return it[key];
                } catch (error) {}
            };
            module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
                var O, tag, result;
                return void 0 === it ? "Undefined" : null === it ? "Null" : "string" == typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : "Object" == (result = classofRaw(O)) && isCallable(O.callee) ? "Arguments" : result;
            };
        },
        1589: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var defineProperty = __webpack_require__(2498).f;
            var create = __webpack_require__(4508);
            var redefineAll = __webpack_require__(5711);
            var bind = __webpack_require__(7801);
            var anInstance = __webpack_require__(5491);
            var iterate = __webpack_require__(6014);
            var defineIterator = __webpack_require__(4924);
            var setSpecies = __webpack_require__(473);
            var DESCRIPTORS = __webpack_require__(3035);
            var fastKey = __webpack_require__(9377).fastKey;
            var InternalStateModule = __webpack_require__(3244);
            var setInternalState = InternalStateModule.set;
            var internalStateGetterFor = InternalStateModule.getterFor;
            module.exports = {
                getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
                    var Constructor = wrapper((function(that, iterable) {
                        anInstance(that, Prototype);
                        setInternalState(that, {
                            type: CONSTRUCTOR_NAME,
                            index: create(null),
                            first: void 0,
                            last: void 0,
                            size: 0
                        });
                        if (!DESCRIPTORS) that.size = 0;
                        if (void 0 != iterable) iterate(iterable, that[ADDER], {
                            that,
                            AS_ENTRIES: IS_MAP
                        });
                    }));
                    var Prototype = Constructor.prototype;
                    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
                    var define = function(that, key, value) {
                        var state = getInternalState(that);
                        var entry = getEntry(that, key);
                        var previous, index;
                        if (entry) entry.value = value; else {
                            state.last = entry = {
                                index: index = fastKey(key, true),
                                key,
                                value,
                                previous: previous = state.last,
                                next: void 0,
                                removed: false
                            };
                            if (!state.first) state.first = entry;
                            if (previous) previous.next = entry;
                            if (DESCRIPTORS) state.size++; else that.size++;
                            if ("F" !== index) state.index[index] = entry;
                        }
                        return that;
                    };
                    var getEntry = function(that, key) {
                        var state = getInternalState(that);
                        var index = fastKey(key);
                        var entry;
                        if ("F" !== index) return state.index[index];
                        for (entry = state.first; entry; entry = entry.next) if (entry.key == key) return entry;
                    };
                    redefineAll(Prototype, {
                        clear: function clear() {
                            var that = this;
                            var state = getInternalState(that);
                            var data = state.index;
                            var entry = state.first;
                            while (entry) {
                                entry.removed = true;
                                if (entry.previous) entry.previous = entry.previous.next = void 0;
                                delete data[entry.index];
                                entry = entry.next;
                            }
                            state.first = state.last = void 0;
                            if (DESCRIPTORS) state.size = 0; else that.size = 0;
                        },
                        delete: function(key) {
                            var that = this;
                            var state = getInternalState(that);
                            var entry = getEntry(that, key);
                            if (entry) {
                                var next = entry.next;
                                var prev = entry.previous;
                                delete state.index[entry.index];
                                entry.removed = true;
                                if (prev) prev.next = next;
                                if (next) next.previous = prev;
                                if (state.first == entry) state.first = next;
                                if (state.last == entry) state.last = prev;
                                if (DESCRIPTORS) state.size--; else that.size--;
                            }
                            return !!entry;
                        },
                        forEach: function forEach(callbackfn) {
                            var state = getInternalState(this);
                            var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
                            var entry;
                            while (entry = entry ? entry.next : state.first) {
                                boundFunction(entry.value, entry.key, this);
                                while (entry && entry.removed) entry = entry.previous;
                            }
                        },
                        has: function has(key) {
                            return !!getEntry(this, key);
                        }
                    });
                    redefineAll(Prototype, IS_MAP ? {
                        get: function get(key) {
                            var entry = getEntry(this, key);
                            return entry && entry.value;
                        },
                        set: function set(key, value) {
                            return define(this, 0 === key ? 0 : key, value);
                        }
                    } : {
                        add: function add(value) {
                            return define(this, value = 0 === value ? 0 : value, value);
                        }
                    });
                    if (DESCRIPTORS) defineProperty(Prototype, "size", {
                        get: function() {
                            return getInternalState(this).size;
                        }
                    });
                    return Constructor;
                },
                setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
                    var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
                    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
                    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
                    defineIterator(Constructor, CONSTRUCTOR_NAME, (function(iterated, kind) {
                        setInternalState(this, {
                            type: ITERATOR_NAME,
                            target: iterated,
                            state: getInternalCollectionState(iterated),
                            kind,
                            last: void 0
                        });
                    }), (function() {
                        var state = getInternalIteratorState(this);
                        var kind = state.kind;
                        var entry = state.last;
                        while (entry && entry.removed) entry = entry.previous;
                        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
                            state.target = void 0;
                            return {
                                value: void 0,
                                done: true
                            };
                        }
                        if ("keys" == kind) return {
                            value: entry.key,
                            done: false
                        };
                        if ("values" == kind) return {
                            value: entry.value,
                            done: false
                        };
                        return {
                            value: [ entry.key, entry.value ],
                            done: false
                        };
                    }), IS_MAP ? "entries" : "values", !IS_MAP, true);
                    setSpecies(CONSTRUCTOR_NAME);
                }
            };
        },
        1052: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var uncurryThis = __webpack_require__(8043);
            var redefineAll = __webpack_require__(5711);
            var getWeakData = __webpack_require__(9377).getWeakData;
            var anObject = __webpack_require__(6154);
            var isObject = __webpack_require__(3021);
            var anInstance = __webpack_require__(5491);
            var iterate = __webpack_require__(6014);
            var ArrayIterationModule = __webpack_require__(3259);
            var hasOwn = __webpack_require__(7235);
            var InternalStateModule = __webpack_require__(3244);
            var setInternalState = InternalStateModule.set;
            var internalStateGetterFor = InternalStateModule.getterFor;
            var find = ArrayIterationModule.find;
            var findIndex = ArrayIterationModule.findIndex;
            var splice = uncurryThis([].splice);
            var id = 0;
            var uncaughtFrozenStore = function(store) {
                return store.frozen || (store.frozen = new UncaughtFrozenStore);
            };
            var UncaughtFrozenStore = function() {
                this.entries = [];
            };
            var findUncaughtFrozen = function(store, key) {
                return find(store.entries, (function(it) {
                    return it[0] === key;
                }));
            };
            UncaughtFrozenStore.prototype = {
                get: function(key) {
                    var entry = findUncaughtFrozen(this, key);
                    if (entry) return entry[1];
                },
                has: function(key) {
                    return !!findUncaughtFrozen(this, key);
                },
                set: function(key, value) {
                    var entry = findUncaughtFrozen(this, key);
                    if (entry) entry[1] = value; else this.entries.push([ key, value ]);
                },
                delete: function(key) {
                    var index = findIndex(this.entries, (function(it) {
                        return it[0] === key;
                    }));
                    if (~index) splice(this.entries, index, 1);
                    return !!~index;
                }
            };
            module.exports = {
                getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
                    var Constructor = wrapper((function(that, iterable) {
                        anInstance(that, Prototype);
                        setInternalState(that, {
                            type: CONSTRUCTOR_NAME,
                            id: id++,
                            frozen: void 0
                        });
                        if (void 0 != iterable) iterate(iterable, that[ADDER], {
                            that,
                            AS_ENTRIES: IS_MAP
                        });
                    }));
                    var Prototype = Constructor.prototype;
                    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
                    var define = function(that, key, value) {
                        var state = getInternalState(that);
                        var data = getWeakData(anObject(key), true);
                        if (true === data) uncaughtFrozenStore(state).set(key, value); else data[state.id] = value;
                        return that;
                    };
                    redefineAll(Prototype, {
                        delete: function(key) {
                            var state = getInternalState(this);
                            if (!isObject(key)) return false;
                            var data = getWeakData(key);
                            if (true === data) return uncaughtFrozenStore(state)["delete"](key);
                            return data && hasOwn(data, state.id) && delete data[state.id];
                        },
                        has: function has(key) {
                            var state = getInternalState(this);
                            if (!isObject(key)) return false;
                            var data = getWeakData(key);
                            if (true === data) return uncaughtFrozenStore(state).has(key);
                            return data && hasOwn(data, state.id);
                        }
                    });
                    redefineAll(Prototype, IS_MAP ? {
                        get: function get(key) {
                            var state = getInternalState(this);
                            if (isObject(key)) {
                                var data = getWeakData(key);
                                if (true === data) return uncaughtFrozenStore(state).get(key);
                                return data ? data[state.id] : void 0;
                            }
                        },
                        set: function set(key, value) {
                            return define(this, key, value);
                        }
                    } : {
                        add: function add(value) {
                            return define(this, value, true);
                        }
                    });
                    return Constructor;
                }
            };
        },
        7855: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var $ = __webpack_require__(1669);
            var global = __webpack_require__(8159);
            var uncurryThis = __webpack_require__(8043);
            var isForced = __webpack_require__(1e3);
            var redefine = __webpack_require__(2685);
            var InternalMetadataModule = __webpack_require__(9377);
            var iterate = __webpack_require__(6014);
            var anInstance = __webpack_require__(5491);
            var isCallable = __webpack_require__(8885);
            var isObject = __webpack_require__(3021);
            var fails = __webpack_require__(6686);
            var checkCorrectnessOfIteration = __webpack_require__(6416);
            var setToStringTag = __webpack_require__(4299);
            var inheritIfRequired = __webpack_require__(3854);
            module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
                var IS_MAP = -1 !== CONSTRUCTOR_NAME.indexOf("Map");
                var IS_WEAK = -1 !== CONSTRUCTOR_NAME.indexOf("Weak");
                var ADDER = IS_MAP ? "set" : "add";
                var NativeConstructor = global[CONSTRUCTOR_NAME];
                var NativePrototype = NativeConstructor && NativeConstructor.prototype;
                var Constructor = NativeConstructor;
                var exported = {};
                var fixMethod = function(KEY) {
                    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
                    redefine(NativePrototype, KEY, "add" == KEY ? function add(value) {
                        uncurriedNativeMethod(this, 0 === value ? 0 : value);
                        return this;
                    } : "delete" == KEY ? function(key) {
                        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, 0 === key ? 0 : key);
                    } : "get" == KEY ? function get(key) {
                        return IS_WEAK && !isObject(key) ? void 0 : uncurriedNativeMethod(this, 0 === key ? 0 : key);
                    } : "has" == KEY ? function has(key) {
                        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, 0 === key ? 0 : key);
                    } : function set(key, value) {
                        uncurriedNativeMethod(this, 0 === key ? 0 : key, value);
                        return this;
                    });
                };
                var REPLACE = isForced(CONSTRUCTOR_NAME, !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails((function() {
                    (new NativeConstructor).entries().next();
                }))));
                if (REPLACE) {
                    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
                    InternalMetadataModule.enable();
                } else if (isForced(CONSTRUCTOR_NAME, true)) {
                    var instance = new Constructor;
                    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
                    var THROWS_ON_PRIMITIVES = fails((function() {
                        instance.has(1);
                    }));
                    var ACCEPT_ITERABLES = checkCorrectnessOfIteration((function(iterable) {
                        new NativeConstructor(iterable);
                    }));
                    var BUGGY_ZERO = !IS_WEAK && fails((function() {
                        var $instance = new NativeConstructor;
                        var index = 5;
                        while (index--) $instance[ADDER](index, index);
                        return !$instance.has(-0);
                    }));
                    if (!ACCEPT_ITERABLES) {
                        Constructor = wrapper((function(dummy, iterable) {
                            anInstance(dummy, NativePrototype);
                            var that = inheritIfRequired(new NativeConstructor, dummy, Constructor);
                            if (void 0 != iterable) iterate(iterable, that[ADDER], {
                                that,
                                AS_ENTRIES: IS_MAP
                            });
                            return that;
                        }));
                        Constructor.prototype = NativePrototype;
                        NativePrototype.constructor = Constructor;
                    }
                    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
                        fixMethod("delete");
                        fixMethod("has");
                        IS_MAP && fixMethod("get");
                    }
                    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
                    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
                }
                exported[CONSTRUCTOR_NAME] = Constructor;
                $({
                    global: true,
                    forced: Constructor != NativeConstructor
                }, exported);
                setToStringTag(Constructor, CONSTRUCTOR_NAME);
                if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
                return Constructor;
            };
        },
        3814: (module, __unused_webpack_exports, __webpack_require__) => {
            var hasOwn = __webpack_require__(7235);
            var ownKeys = __webpack_require__(8824);
            var getOwnPropertyDescriptorModule = __webpack_require__(4186);
            var definePropertyModule = __webpack_require__(2498);
            module.exports = function(target, source, exceptions) {
                var keys = ownKeys(source);
                var defineProperty = definePropertyModule.f;
                var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                }
            };
        },
        71: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6686);
            module.exports = !fails((function() {
                function F() {}
                F.prototype.constructor = null;
                return Object.getPrototypeOf(new F) !== F.prototype;
            }));
        },
        3937: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var IteratorPrototype = __webpack_require__(592).IteratorPrototype;
            var create = __webpack_require__(4508);
            var createPropertyDescriptor = __webpack_require__(8232);
            var setToStringTag = __webpack_require__(4299);
            var Iterators = __webpack_require__(7324);
            var returnThis = function() {
                return this;
            };
            module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
                var TO_STRING_TAG = NAME + " Iterator";
                IteratorConstructor.prototype = create(IteratorPrototype, {
                    next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
                });
                setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
                Iterators[TO_STRING_TAG] = returnThis;
                return IteratorConstructor;
            };
        },
        2201: (module, __unused_webpack_exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(3035);
            var definePropertyModule = __webpack_require__(2498);
            var createPropertyDescriptor = __webpack_require__(8232);
            module.exports = DESCRIPTORS ? function(object, key, value) {
                return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
            } : function(object, key, value) {
                object[key] = value;
                return object;
            };
        },
        8232: module => {
            module.exports = function(bitmap, value) {
                return {
                    enumerable: !(1 & bitmap),
                    configurable: !(2 & bitmap),
                    writable: !(4 & bitmap),
                    value
                };
            };
        },
        946: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var toPropertyKey = __webpack_require__(3163);
            var definePropertyModule = __webpack_require__(2498);
            var createPropertyDescriptor = __webpack_require__(8232);
            module.exports = function(object, key, value) {
                var propertyKey = toPropertyKey(key);
                if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value)); else object[propertyKey] = value;
            };
        },
        4924: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var $ = __webpack_require__(1669);
            var call = __webpack_require__(4923);
            var IS_PURE = __webpack_require__(4156);
            var FunctionName = __webpack_require__(6714);
            var isCallable = __webpack_require__(8885);
            var createIteratorConstructor = __webpack_require__(3937);
            var getPrototypeOf = __webpack_require__(6035);
            var setPrototypeOf = __webpack_require__(7618);
            var setToStringTag = __webpack_require__(4299);
            var createNonEnumerableProperty = __webpack_require__(2201);
            var redefine = __webpack_require__(2685);
            var wellKnownSymbol = __webpack_require__(551);
            var Iterators = __webpack_require__(7324);
            var IteratorsCore = __webpack_require__(592);
            var PROPER_FUNCTION_NAME = FunctionName.PROPER;
            var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
            var IteratorPrototype = IteratorsCore.IteratorPrototype;
            var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
            var ITERATOR = wellKnownSymbol("iterator");
            var KEYS = "keys";
            var VALUES = "values";
            var ENTRIES = "entries";
            var returnThis = function() {
                return this;
            };
            module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
                createIteratorConstructor(IteratorConstructor, NAME, next);
                var getIterationMethod = function(KIND) {
                    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
                    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
                    switch (KIND) {
                      case KEYS:
                        return function keys() {
                            return new IteratorConstructor(this, KIND);
                        };

                      case VALUES:
                        return function values() {
                            return new IteratorConstructor(this, KIND);
                        };

                      case ENTRIES:
                        return function entries() {
                            return new IteratorConstructor(this, KIND);
                        };
                    }
                    return function() {
                        return new IteratorConstructor(this);
                    };
                };
                var TO_STRING_TAG = NAME + " Iterator";
                var INCORRECT_VALUES_NAME = false;
                var IterablePrototype = Iterable.prototype;
                var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
                var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
                var anyNativeIterator = "Array" == NAME ? IterablePrototype.entries || nativeIterator : nativeIterator;
                var CurrentIteratorPrototype, methods, KEY;
                if (anyNativeIterator) {
                    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable));
                    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                        if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype); else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
                        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                        if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
                    }
                }
                if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) createNonEnumerableProperty(IterablePrototype, "name", VALUES); else {
                    INCORRECT_VALUES_NAME = true;
                    defaultIterator = function values() {
                        return call(nativeIterator, this);
                    };
                }
                if (DEFAULT) {
                    methods = {
                        values: getIterationMethod(VALUES),
                        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                        entries: getIterationMethod(ENTRIES)
                    };
                    if (FORCED) {
                        for (KEY in methods) if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) redefine(IterablePrototype, KEY, methods[KEY]);
                    } else $({
                        target: NAME,
                        proto: true,
                        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
                    }, methods);
                }
                if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) redefine(IterablePrototype, ITERATOR, defaultIterator, {
                    name: DEFAULT
                });
                Iterators[NAME] = defaultIterator;
                return methods;
            };
        },
        3035: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6686);
            module.exports = !fails((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7;
                    }
                })[1];
            }));
        },
        2135: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var isObject = __webpack_require__(3021);
            var document = global.document;
            var EXISTS = isObject(document) && isObject(document.createElement);
            module.exports = function(it) {
                return EXISTS ? document.createElement(it) : {};
            };
        },
        7245: (module, __unused_webpack_exports, __webpack_require__) => {
            var getBuiltIn = __webpack_require__(3256);
            module.exports = getBuiltIn("navigator", "userAgent") || "";
        },
        6984: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var userAgent = __webpack_require__(7245);
            var process = global.process;
            var Deno = global.Deno;
            var versions = process && process.versions || Deno && Deno.version;
            var v8 = versions && versions.v8;
            var match, version;
            if (v8) {
                match = v8.split(".");
                version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
            }
            if (!version && userAgent) {
                match = userAgent.match(/Edge\/(\d+)/);
                if (!match || match[1] >= 74) {
                    match = userAgent.match(/Chrome\/(\d+)/);
                    if (match) version = +match[1];
                }
            }
            module.exports = version;
        },
        370: module => {
            module.exports = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
        },
        1669: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var getOwnPropertyDescriptor = __webpack_require__(4186).f;
            var createNonEnumerableProperty = __webpack_require__(2201);
            var redefine = __webpack_require__(2685);
            var setGlobal = __webpack_require__(3066);
            var copyConstructorProperties = __webpack_require__(3814);
            var isForced = __webpack_require__(1e3);
            module.exports = function(options, source) {
                var TARGET = options.target;
                var GLOBAL = options.global;
                var STATIC = options.stat;
                var FORCED, target, key, targetProperty, sourceProperty, descriptor;
                if (GLOBAL) target = global; else if (STATIC) target = global[TARGET] || setGlobal(TARGET, {}); else target = (global[TARGET] || {}).prototype;
                if (target) for (key in source) {
                    sourceProperty = source[key];
                    if (options.noTargetGet) {
                        descriptor = getOwnPropertyDescriptor(target, key);
                        targetProperty = descriptor && descriptor.value;
                    } else targetProperty = target[key];
                    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
                    if (!FORCED && void 0 !== targetProperty) {
                        if (typeof sourceProperty == typeof targetProperty) continue;
                        copyConstructorProperties(sourceProperty, targetProperty);
                    }
                    if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
                    redefine(target, key, sourceProperty, options);
                }
            };
        },
        6686: module => {
            module.exports = function(exec) {
                try {
                    return !!exec();
                } catch (error) {
                    return true;
                }
            };
        },
        6741: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6686);
            module.exports = !fails((function() {
                return Object.isExtensible(Object.preventExtensions({}));
            }));
        },
        7801: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var aCallable = __webpack_require__(4833);
            var NATIVE_BIND = __webpack_require__(6497);
            var bind = uncurryThis(uncurryThis.bind);
            module.exports = function(fn, that) {
                aCallable(fn);
                return void 0 === that ? fn : NATIVE_BIND ? bind(fn, that) : function() {
                    return fn.apply(that, arguments);
                };
            };
        },
        6497: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6686);
            module.exports = !fails((function() {
                var test = function() {}.bind();
                return "function" != typeof test || test.hasOwnProperty("prototype");
            }));
        },
        4923: (module, __unused_webpack_exports, __webpack_require__) => {
            var NATIVE_BIND = __webpack_require__(6497);
            var call = Function.prototype.call;
            module.exports = NATIVE_BIND ? call.bind(call) : function() {
                return call.apply(call, arguments);
            };
        },
        6714: (module, __unused_webpack_exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(3035);
            var hasOwn = __webpack_require__(7235);
            var FunctionPrototype = Function.prototype;
            var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
            var EXISTS = hasOwn(FunctionPrototype, "name");
            var PROPER = EXISTS && "something" === function something() {}.name;
            var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
            module.exports = {
                EXISTS,
                PROPER,
                CONFIGURABLE
            };
        },
        8043: (module, __unused_webpack_exports, __webpack_require__) => {
            var NATIVE_BIND = __webpack_require__(6497);
            var FunctionPrototype = Function.prototype;
            var bind = FunctionPrototype.bind;
            var call = FunctionPrototype.call;
            var uncurryThis = NATIVE_BIND && bind.bind(call, call);
            module.exports = NATIVE_BIND ? function(fn) {
                return fn && uncurryThis(fn);
            } : function(fn) {
                return fn && function() {
                    return call.apply(fn, arguments);
                };
            };
        },
        3256: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var isCallable = __webpack_require__(8885);
            var aFunction = function(argument) {
                return isCallable(argument) ? argument : void 0;
            };
            module.exports = function(namespace, method) {
                return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
            };
        },
        8991: (module, __unused_webpack_exports, __webpack_require__) => {
            var classof = __webpack_require__(456);
            var getMethod = __webpack_require__(7355);
            var Iterators = __webpack_require__(7324);
            var wellKnownSymbol = __webpack_require__(551);
            var ITERATOR = wellKnownSymbol("iterator");
            module.exports = function(it) {
                if (void 0 != it) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
            };
        },
        4120: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var call = __webpack_require__(4923);
            var aCallable = __webpack_require__(4833);
            var anObject = __webpack_require__(6154);
            var tryToString = __webpack_require__(8336);
            var getIteratorMethod = __webpack_require__(8991);
            var TypeError = global.TypeError;
            module.exports = function(argument, usingIterator) {
                var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
                if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
                throw TypeError(tryToString(argument) + " is not iterable");
            };
        },
        7355: (module, __unused_webpack_exports, __webpack_require__) => {
            var aCallable = __webpack_require__(4833);
            module.exports = function(V, P) {
                var func = V[P];
                return null == func ? void 0 : aCallable(func);
            };
        },
        8159: (module, __unused_webpack_exports, __webpack_require__) => {
            var check = function(it) {
                return it && it.Math == Math && it;
            };
            module.exports = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof __webpack_require__.g && __webpack_require__.g) || function() {
                return this;
            }() || Function("return this")();
        },
        7235: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var toObject = __webpack_require__(1851);
            var hasOwnProperty = uncurryThis({}.hasOwnProperty);
            module.exports = Object.hasOwn || function hasOwn(it, key) {
                return hasOwnProperty(toObject(it), key);
            };
        },
        8898: module => {
            module.exports = {};
        },
        2635: (module, __unused_webpack_exports, __webpack_require__) => {
            var getBuiltIn = __webpack_require__(3256);
            module.exports = getBuiltIn("document", "documentElement");
        },
        9335: (module, __unused_webpack_exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(3035);
            var fails = __webpack_require__(6686);
            var createElement = __webpack_require__(2135);
            module.exports = !DESCRIPTORS && !fails((function() {
                return 7 != Object.defineProperty(createElement("div"), "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            }));
        },
        5832: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var uncurryThis = __webpack_require__(8043);
            var fails = __webpack_require__(6686);
            var classof = __webpack_require__(539);
            var Object = global.Object;
            var split = uncurryThis("".split);
            module.exports = fails((function() {
                return !Object("z").propertyIsEnumerable(0);
            })) ? function(it) {
                return "String" == classof(it) ? split(it, "") : Object(it);
            } : Object;
        },
        3854: (module, __unused_webpack_exports, __webpack_require__) => {
            var isCallable = __webpack_require__(8885);
            var isObject = __webpack_require__(3021);
            var setPrototypeOf = __webpack_require__(7618);
            module.exports = function($this, dummy, Wrapper) {
                var NewTarget, NewTargetPrototype;
                if (setPrototypeOf && isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
                return $this;
            };
        },
        4739: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var isCallable = __webpack_require__(8885);
            var store = __webpack_require__(5481);
            var functionToString = uncurryThis(Function.toString);
            if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
                return functionToString(it);
            };
            module.exports = store.inspectSource;
        },
        9377: (module, __unused_webpack_exports, __webpack_require__) => {
            var $ = __webpack_require__(1669);
            var uncurryThis = __webpack_require__(8043);
            var hiddenKeys = __webpack_require__(8898);
            var isObject = __webpack_require__(3021);
            var hasOwn = __webpack_require__(7235);
            var defineProperty = __webpack_require__(2498).f;
            var getOwnPropertyNamesModule = __webpack_require__(1047);
            var getOwnPropertyNamesExternalModule = __webpack_require__(4043);
            var isExtensible = __webpack_require__(7187);
            var uid = __webpack_require__(4519);
            var FREEZING = __webpack_require__(6741);
            var REQUIRED = false;
            var METADATA = uid("meta");
            var id = 0;
            var setMetadata = function(it) {
                defineProperty(it, METADATA, {
                    value: {
                        objectID: "O" + id++,
                        weakData: {}
                    }
                });
            };
            var fastKey = function(it, create) {
                if (!isObject(it)) return "symbol" == typeof it ? it : ("string" == typeof it ? "S" : "P") + it;
                if (!hasOwn(it, METADATA)) {
                    if (!isExtensible(it)) return "F";
                    if (!create) return "E";
                    setMetadata(it);
                }
                return it[METADATA].objectID;
            };
            var getWeakData = function(it, create) {
                if (!hasOwn(it, METADATA)) {
                    if (!isExtensible(it)) return true;
                    if (!create) return false;
                    setMetadata(it);
                }
                return it[METADATA].weakData;
            };
            var onFreeze = function(it) {
                if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
                return it;
            };
            var enable = function() {
                meta.enable = function() {};
                REQUIRED = true;
                var getOwnPropertyNames = getOwnPropertyNamesModule.f;
                var splice = uncurryThis([].splice);
                var test = {};
                test[METADATA] = 1;
                if (getOwnPropertyNames(test).length) {
                    getOwnPropertyNamesModule.f = function(it) {
                        var result = getOwnPropertyNames(it);
                        for (var i = 0, length = result.length; i < length; i++) if (result[i] === METADATA) {
                            splice(result, i, 1);
                            break;
                        }
                        return result;
                    };
                    $({
                        target: "Object",
                        stat: true,
                        forced: true
                    }, {
                        getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
                    });
                }
            };
            var meta = module.exports = {
                enable,
                fastKey,
                getWeakData,
                onFreeze
            };
            hiddenKeys[METADATA] = true;
        },
        3244: (module, __unused_webpack_exports, __webpack_require__) => {
            var NATIVE_WEAK_MAP = __webpack_require__(5806);
            var global = __webpack_require__(8159);
            var uncurryThis = __webpack_require__(8043);
            var isObject = __webpack_require__(3021);
            var createNonEnumerableProperty = __webpack_require__(2201);
            var hasOwn = __webpack_require__(7235);
            var shared = __webpack_require__(5481);
            var sharedKey = __webpack_require__(1577);
            var hiddenKeys = __webpack_require__(8898);
            var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
            var TypeError = global.TypeError;
            var WeakMap = global.WeakMap;
            var set, get, has;
            var enforce = function(it) {
                return has(it) ? get(it) : set(it, {});
            };
            var getterFor = function(TYPE) {
                return function(it) {
                    var state;
                    if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
                    return state;
                };
            };
            if (NATIVE_WEAK_MAP || shared.state) {
                var store = shared.state || (shared.state = new WeakMap);
                var wmget = uncurryThis(store.get);
                var wmhas = uncurryThis(store.has);
                var wmset = uncurryThis(store.set);
                set = function(it, metadata) {
                    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
                    metadata.facade = it;
                    wmset(store, it, metadata);
                    return metadata;
                };
                get = function(it) {
                    return wmget(store, it) || {};
                };
                has = function(it) {
                    return wmhas(store, it);
                };
            } else {
                var STATE = sharedKey("state");
                hiddenKeys[STATE] = true;
                set = function(it, metadata) {
                    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
                    metadata.facade = it;
                    createNonEnumerableProperty(it, STATE, metadata);
                    return metadata;
                };
                get = function(it) {
                    return hasOwn(it, STATE) ? it[STATE] : {};
                };
                has = function(it) {
                    return hasOwn(it, STATE);
                };
            }
            module.exports = {
                set,
                get,
                has,
                enforce,
                getterFor
            };
        },
        7212: (module, __unused_webpack_exports, __webpack_require__) => {
            var wellKnownSymbol = __webpack_require__(551);
            var Iterators = __webpack_require__(7324);
            var ITERATOR = wellKnownSymbol("iterator");
            var ArrayPrototype = Array.prototype;
            module.exports = function(it) {
                return void 0 !== it && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
            };
        },
        3040: (module, __unused_webpack_exports, __webpack_require__) => {
            var classof = __webpack_require__(539);
            module.exports = Array.isArray || function isArray(argument) {
                return "Array" == classof(argument);
            };
        },
        8885: module => {
            module.exports = function(argument) {
                return "function" == typeof argument;
            };
        },
        2100: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var fails = __webpack_require__(6686);
            var isCallable = __webpack_require__(8885);
            var classof = __webpack_require__(456);
            var getBuiltIn = __webpack_require__(3256);
            var inspectSource = __webpack_require__(4739);
            var noop = function() {};
            var empty = [];
            var construct = getBuiltIn("Reflect", "construct");
            var constructorRegExp = /^\s*(?:class|function)\b/;
            var exec = uncurryThis(constructorRegExp.exec);
            var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
            var isConstructorModern = function isConstructor(argument) {
                if (!isCallable(argument)) return false;
                try {
                    construct(noop, empty, argument);
                    return true;
                } catch (error) {
                    return false;
                }
            };
            var isConstructorLegacy = function isConstructor(argument) {
                if (!isCallable(argument)) return false;
                switch (classof(argument)) {
                  case "AsyncFunction":
                  case "GeneratorFunction":
                  case "AsyncGeneratorFunction":
                    return false;
                }
                try {
                    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
                } catch (error) {
                    return true;
                }
            };
            isConstructorLegacy.sham = true;
            module.exports = !construct || fails((function() {
                var called;
                return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern((function() {
                    called = true;
                })) || called;
            })) ? isConstructorLegacy : isConstructorModern;
        },
        1e3: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6686);
            var isCallable = __webpack_require__(8885);
            var replacement = /#|\.prototype\./;
            var isForced = function(feature, detection) {
                var value = data[normalize(feature)];
                return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
            };
            var normalize = isForced.normalize = function(string) {
                return String(string).replace(replacement, ".").toLowerCase();
            };
            var data = isForced.data = {};
            var NATIVE = isForced.NATIVE = "N";
            var POLYFILL = isForced.POLYFILL = "P";
            module.exports = isForced;
        },
        3021: (module, __unused_webpack_exports, __webpack_require__) => {
            var isCallable = __webpack_require__(8885);
            module.exports = function(it) {
                return "object" == typeof it ? null !== it : isCallable(it);
            };
        },
        4156: module => {
            module.exports = false;
        },
        3674: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var getBuiltIn = __webpack_require__(3256);
            var isCallable = __webpack_require__(8885);
            var isPrototypeOf = __webpack_require__(6678);
            var USE_SYMBOL_AS_UID = __webpack_require__(9735);
            var Object = global.Object;
            module.exports = USE_SYMBOL_AS_UID ? function(it) {
                return "symbol" == typeof it;
            } : function(it) {
                var $Symbol = getBuiltIn("Symbol");
                return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
            };
        },
        6014: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var bind = __webpack_require__(7801);
            var call = __webpack_require__(4923);
            var anObject = __webpack_require__(6154);
            var tryToString = __webpack_require__(8336);
            var isArrayIteratorMethod = __webpack_require__(7212);
            var lengthOfArrayLike = __webpack_require__(3773);
            var isPrototypeOf = __webpack_require__(6678);
            var getIterator = __webpack_require__(4120);
            var getIteratorMethod = __webpack_require__(8991);
            var iteratorClose = __webpack_require__(932);
            var TypeError = global.TypeError;
            var Result = function(stopped, result) {
                this.stopped = stopped;
                this.result = result;
            };
            var ResultPrototype = Result.prototype;
            module.exports = function(iterable, unboundFunction, options) {
                var that = options && options.that;
                var AS_ENTRIES = !!(options && options.AS_ENTRIES);
                var IS_ITERATOR = !!(options && options.IS_ITERATOR);
                var INTERRUPTED = !!(options && options.INTERRUPTED);
                var fn = bind(unboundFunction, that);
                var iterator, iterFn, index, length, result, next, step;
                var stop = function(condition) {
                    if (iterator) iteratorClose(iterator, "normal", condition);
                    return new Result(true, condition);
                };
                var callFn = function(value) {
                    if (AS_ENTRIES) {
                        anObject(value);
                        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
                    }
                    return INTERRUPTED ? fn(value, stop) : fn(value);
                };
                if (IS_ITERATOR) iterator = iterable; else {
                    iterFn = getIteratorMethod(iterable);
                    if (!iterFn) throw TypeError(tryToString(iterable) + " is not iterable");
                    if (isArrayIteratorMethod(iterFn)) {
                        for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
                            result = callFn(iterable[index]);
                            if (result && isPrototypeOf(ResultPrototype, result)) return result;
                        }
                        return new Result(false);
                    }
                    iterator = getIterator(iterable, iterFn);
                }
                next = iterator.next;
                while (!(step = call(next, iterator)).done) {
                    try {
                        result = callFn(step.value);
                    } catch (error) {
                        iteratorClose(iterator, "throw", error);
                    }
                    if ("object" == typeof result && result && isPrototypeOf(ResultPrototype, result)) return result;
                }
                return new Result(false);
            };
        },
        932: (module, __unused_webpack_exports, __webpack_require__) => {
            var call = __webpack_require__(4923);
            var anObject = __webpack_require__(6154);
            var getMethod = __webpack_require__(7355);
            module.exports = function(iterator, kind, value) {
                var innerResult, innerError;
                anObject(iterator);
                try {
                    innerResult = getMethod(iterator, "return");
                    if (!innerResult) {
                        if ("throw" === kind) throw value;
                        return value;
                    }
                    innerResult = call(innerResult, iterator);
                } catch (error) {
                    innerError = true;
                    innerResult = error;
                }
                if ("throw" === kind) throw value;
                if (innerError) throw innerResult;
                anObject(innerResult);
                return value;
            };
        },
        592: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var fails = __webpack_require__(6686);
            var isCallable = __webpack_require__(8885);
            var create = __webpack_require__(4508);
            var getPrototypeOf = __webpack_require__(6035);
            var redefine = __webpack_require__(2685);
            var wellKnownSymbol = __webpack_require__(551);
            var IS_PURE = __webpack_require__(4156);
            var ITERATOR = wellKnownSymbol("iterator");
            var BUGGY_SAFARI_ITERATORS = false;
            var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
            if ([].keys) {
                arrayIterator = [].keys();
                if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true; else {
                    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
                }
            }
            var NEW_ITERATOR_PROTOTYPE = void 0 == IteratorPrototype || fails((function() {
                var test = {};
                return IteratorPrototype[ITERATOR].call(test) !== test;
            }));
            if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {}; else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
            if (!isCallable(IteratorPrototype[ITERATOR])) redefine(IteratorPrototype, ITERATOR, (function() {
                return this;
            }));
            module.exports = {
                IteratorPrototype,
                BUGGY_SAFARI_ITERATORS
            };
        },
        7324: module => {
            module.exports = {};
        },
        3773: (module, __unused_webpack_exports, __webpack_require__) => {
            var toLength = __webpack_require__(2909);
            module.exports = function(obj) {
                return toLength(obj.length);
            };
        },
        5460: (module, __unused_webpack_exports, __webpack_require__) => {
            var V8_VERSION = __webpack_require__(6984);
            var fails = __webpack_require__(6686);
            module.exports = !!Object.getOwnPropertySymbols && !fails((function() {
                var symbol = Symbol();
                return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
            }));
        },
        5806: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var isCallable = __webpack_require__(8885);
            var inspectSource = __webpack_require__(4739);
            var WeakMap = global.WeakMap;
            module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));
        },
        6776: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var DESCRIPTORS = __webpack_require__(3035);
            var uncurryThis = __webpack_require__(8043);
            var call = __webpack_require__(4923);
            var fails = __webpack_require__(6686);
            var objectKeys = __webpack_require__(9658);
            var getOwnPropertySymbolsModule = __webpack_require__(4022);
            var propertyIsEnumerableModule = __webpack_require__(6349);
            var toObject = __webpack_require__(1851);
            var IndexedObject = __webpack_require__(5832);
            var $assign = Object.assign;
            var defineProperty = Object.defineProperty;
            var concat = uncurryThis([].concat);
            module.exports = !$assign || fails((function() {
                if (DESCRIPTORS && 1 !== $assign({
                    b: 1
                }, $assign(defineProperty({}, "a", {
                    enumerable: true,
                    get: function() {
                        defineProperty(this, "b", {
                            value: 3,
                            enumerable: false
                        });
                    }
                }), {
                    b: 2
                })).b) return true;
                var A = {};
                var B = {};
                var symbol = Symbol();
                var alphabet = "abcdefghijklmnopqrst";
                A[symbol] = 7;
                alphabet.split("").forEach((function(chr) {
                    B[chr] = chr;
                }));
                return 7 != $assign({}, A)[symbol] || objectKeys($assign({}, B)).join("") != alphabet;
            })) ? function assign(target, source) {
                var T = toObject(target);
                var argumentsLength = arguments.length;
                var index = 1;
                var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                var propertyIsEnumerable = propertyIsEnumerableModule.f;
                while (argumentsLength > index) {
                    var S = IndexedObject(arguments[index++]);
                    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
                    var length = keys.length;
                    var j = 0;
                    var key;
                    while (length > j) {
                        key = keys[j++];
                        if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
                    }
                }
                return T;
            } : $assign;
        },
        4508: (module, __unused_webpack_exports, __webpack_require__) => {
            var anObject = __webpack_require__(6154);
            var definePropertiesModule = __webpack_require__(7649);
            var enumBugKeys = __webpack_require__(370);
            var hiddenKeys = __webpack_require__(8898);
            var html = __webpack_require__(2635);
            var documentCreateElement = __webpack_require__(2135);
            var sharedKey = __webpack_require__(1577);
            var GT = ">";
            var LT = "<";
            var PROTOTYPE = "prototype";
            var SCRIPT = "script";
            var IE_PROTO = sharedKey("IE_PROTO");
            var EmptyConstructor = function() {};
            var scriptTag = function(content) {
                return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
            };
            var NullProtoObjectViaActiveX = function(activeXDocument) {
                activeXDocument.write(scriptTag(""));
                activeXDocument.close();
                var temp = activeXDocument.parentWindow.Object;
                activeXDocument = null;
                return temp;
            };
            var NullProtoObjectViaIFrame = function() {
                var iframe = documentCreateElement("iframe");
                var JS = "java" + SCRIPT + ":";
                var iframeDocument;
                iframe.style.display = "none";
                html.appendChild(iframe);
                iframe.src = String(JS);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(scriptTag("document.F=Object"));
                iframeDocument.close();
                return iframeDocument.F;
            };
            var activeXDocument;
            var NullProtoObject = function() {
                try {
                    activeXDocument = new ActiveXObject("htmlfile");
                } catch (error) {}
                NullProtoObject = "undefined" != typeof document ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
                var length = enumBugKeys.length;
                while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
                return NullProtoObject();
            };
            hiddenKeys[IE_PROTO] = true;
            module.exports = Object.create || function create(O, Properties) {
                var result;
                if (null !== O) {
                    EmptyConstructor[PROTOTYPE] = anObject(O);
                    result = new EmptyConstructor;
                    EmptyConstructor[PROTOTYPE] = null;
                    result[IE_PROTO] = O;
                } else result = NullProtoObject();
                return void 0 === Properties ? result : definePropertiesModule.f(result, Properties);
            };
        },
        7649: (__unused_webpack_module, exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(3035);
            var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(4579);
            var definePropertyModule = __webpack_require__(2498);
            var anObject = __webpack_require__(6154);
            var toIndexedObject = __webpack_require__(8839);
            var objectKeys = __webpack_require__(9658);
            exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var props = toIndexedObject(Properties);
                var keys = objectKeys(Properties);
                var length = keys.length;
                var index = 0;
                var key;
                while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
                return O;
            };
        },
        2498: (__unused_webpack_module, exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var DESCRIPTORS = __webpack_require__(3035);
            var IE8_DOM_DEFINE = __webpack_require__(9335);
            var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(4579);
            var anObject = __webpack_require__(6154);
            var toPropertyKey = __webpack_require__(3163);
            var TypeError = global.TypeError;
            var $defineProperty = Object.defineProperty;
            var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            var ENUMERABLE = "enumerable";
            var CONFIGURABLE = "configurable";
            var WRITABLE = "writable";
            exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPropertyKey(P);
                anObject(Attributes);
                if ("function" === typeof O && "prototype" === P && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
                    var current = $getOwnPropertyDescriptor(O, P);
                    if (current && current[WRITABLE]) {
                        O[P] = Attributes.value;
                        Attributes = {
                            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                            writable: false
                        };
                    }
                }
                return $defineProperty(O, P, Attributes);
            } : $defineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPropertyKey(P);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try {
                    return $defineProperty(O, P, Attributes);
                } catch (error) {}
                if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported");
                if ("value" in Attributes) O[P] = Attributes.value;
                return O;
            };
        },
        4186: (__unused_webpack_module, exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(3035);
            var call = __webpack_require__(4923);
            var propertyIsEnumerableModule = __webpack_require__(6349);
            var createPropertyDescriptor = __webpack_require__(8232);
            var toIndexedObject = __webpack_require__(8839);
            var toPropertyKey = __webpack_require__(3163);
            var hasOwn = __webpack_require__(7235);
            var IE8_DOM_DEFINE = __webpack_require__(9335);
            var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
                O = toIndexedObject(O);
                P = toPropertyKey(P);
                if (IE8_DOM_DEFINE) try {
                    return $getOwnPropertyDescriptor(O, P);
                } catch (error) {}
                if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
            };
        },
        4043: (module, __unused_webpack_exports, __webpack_require__) => {
            var classof = __webpack_require__(539);
            var toIndexedObject = __webpack_require__(8839);
            var $getOwnPropertyNames = __webpack_require__(1047).f;
            var arraySlice = __webpack_require__(8339);
            var windowNames = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            var getWindowNames = function(it) {
                try {
                    return $getOwnPropertyNames(it);
                } catch (error) {
                    return arraySlice(windowNames);
                }
            };
            module.exports.f = function getOwnPropertyNames(it) {
                return windowNames && "Window" == classof(it) ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
            };
        },
        1047: (__unused_webpack_module, exports, __webpack_require__) => {
            var internalObjectKeys = __webpack_require__(3671);
            var enumBugKeys = __webpack_require__(370);
            var hiddenKeys = enumBugKeys.concat("length", "prototype");
            exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                return internalObjectKeys(O, hiddenKeys);
            };
        },
        4022: (__unused_webpack_module, exports) => {
            exports.f = Object.getOwnPropertySymbols;
        },
        6035: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var hasOwn = __webpack_require__(7235);
            var isCallable = __webpack_require__(8885);
            var toObject = __webpack_require__(1851);
            var sharedKey = __webpack_require__(1577);
            var CORRECT_PROTOTYPE_GETTER = __webpack_require__(71);
            var IE_PROTO = sharedKey("IE_PROTO");
            var Object = global.Object;
            var ObjectPrototype = Object.prototype;
            module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
                var object = toObject(O);
                if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
                var constructor = object.constructor;
                if (isCallable(constructor) && object instanceof constructor) return constructor.prototype;
                return object instanceof Object ? ObjectPrototype : null;
            };
        },
        7187: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6686);
            var isObject = __webpack_require__(3021);
            var classof = __webpack_require__(539);
            var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(809);
            var $isExtensible = Object.isExtensible;
            var FAILS_ON_PRIMITIVES = fails((function() {
                $isExtensible(1);
            }));
            module.exports = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
                if (!isObject(it)) return false;
                if (ARRAY_BUFFER_NON_EXTENSIBLE && "ArrayBuffer" == classof(it)) return false;
                return $isExtensible ? $isExtensible(it) : true;
            } : $isExtensible;
        },
        6678: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            module.exports = uncurryThis({}.isPrototypeOf);
        },
        3671: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var hasOwn = __webpack_require__(7235);
            var toIndexedObject = __webpack_require__(8839);
            var indexOf = __webpack_require__(4097).indexOf;
            var hiddenKeys = __webpack_require__(8898);
            var push = uncurryThis([].push);
            module.exports = function(object, names) {
                var O = toIndexedObject(object);
                var i = 0;
                var result = [];
                var key;
                for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
                while (names.length > i) if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
                return result;
            };
        },
        9658: (module, __unused_webpack_exports, __webpack_require__) => {
            var internalObjectKeys = __webpack_require__(3671);
            var enumBugKeys = __webpack_require__(370);
            module.exports = Object.keys || function keys(O) {
                return internalObjectKeys(O, enumBugKeys);
            };
        },
        6349: (__unused_webpack_module, exports) => {
            "use strict";
            var $propertyIsEnumerable = {}.propertyIsEnumerable;
            var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
                1: 2
            }, 1);
            exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
                var descriptor = getOwnPropertyDescriptor(this, V);
                return !!descriptor && descriptor.enumerable;
            } : $propertyIsEnumerable;
        },
        7618: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var anObject = __webpack_require__(6154);
            var aPossiblePrototype = __webpack_require__(7527);
            module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var CORRECT_SETTER = false;
                var test = {};
                var setter;
                try {
                    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
                    setter(test, []);
                    CORRECT_SETTER = test instanceof Array;
                } catch (error) {}
                return function setPrototypeOf(O, proto) {
                    anObject(O);
                    aPossiblePrototype(proto);
                    if (CORRECT_SETTER) setter(O, proto); else O.__proto__ = proto;
                    return O;
                };
            }() : void 0);
        },
        251: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var TO_STRING_TAG_SUPPORT = __webpack_require__(1554);
            var classof = __webpack_require__(456);
            module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
                return "[object " + classof(this) + "]";
            };
        },
        6618: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var call = __webpack_require__(4923);
            var isCallable = __webpack_require__(8885);
            var isObject = __webpack_require__(3021);
            var TypeError = global.TypeError;
            module.exports = function(input, pref) {
                var fn, val;
                if ("string" === pref && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
                if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
                if ("string" !== pref && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        8824: (module, __unused_webpack_exports, __webpack_require__) => {
            var getBuiltIn = __webpack_require__(3256);
            var uncurryThis = __webpack_require__(8043);
            var getOwnPropertyNamesModule = __webpack_require__(1047);
            var getOwnPropertySymbolsModule = __webpack_require__(4022);
            var anObject = __webpack_require__(6154);
            var concat = uncurryThis([].concat);
            module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
                var keys = getOwnPropertyNamesModule.f(anObject(it));
                var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
            };
        },
        4522: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            module.exports = global;
        },
        5711: (module, __unused_webpack_exports, __webpack_require__) => {
            var redefine = __webpack_require__(2685);
            module.exports = function(target, src, options) {
                for (var key in src) redefine(target, key, src[key], options);
                return target;
            };
        },
        2685: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var isCallable = __webpack_require__(8885);
            var hasOwn = __webpack_require__(7235);
            var createNonEnumerableProperty = __webpack_require__(2201);
            var setGlobal = __webpack_require__(3066);
            var inspectSource = __webpack_require__(4739);
            var InternalStateModule = __webpack_require__(3244);
            var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(6714).CONFIGURABLE;
            var getInternalState = InternalStateModule.get;
            var enforceInternalState = InternalStateModule.enforce;
            var TEMPLATE = String(String).split("String");
            (module.exports = function(O, key, value, options) {
                var unsafe = options ? !!options.unsafe : false;
                var simple = options ? !!options.enumerable : false;
                var noTargetGet = options ? !!options.noTargetGet : false;
                var name = options && void 0 !== options.name ? options.name : key;
                var state;
                if (isCallable(value)) {
                    if ("Symbol(" === String(name).slice(0, 7)) name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
                    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) createNonEnumerableProperty(value, "name", name);
                    state = enforceInternalState(value);
                    if (!state.source) state.source = TEMPLATE.join("string" == typeof name ? name : "");
                }
                if (O === global) {
                    if (simple) O[key] = value; else setGlobal(key, value);
                    return;
                } else if (!unsafe) delete O[key]; else if (!noTargetGet && O[key]) simple = true;
                if (simple) O[key] = value; else createNonEnumerableProperty(O, key, value);
            })(Function.prototype, "toString", (function toString() {
                return isCallable(this) && getInternalState(this).source || inspectSource(this);
            }));
        },
        1095: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var TypeError = global.TypeError;
            module.exports = function(it) {
                if (void 0 == it) throw TypeError("Can't call method on " + it);
                return it;
            };
        },
        3066: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var defineProperty = Object.defineProperty;
            module.exports = function(key, value) {
                try {
                    defineProperty(global, key, {
                        value,
                        configurable: true,
                        writable: true
                    });
                } catch (error) {
                    global[key] = value;
                }
                return value;
            };
        },
        473: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var getBuiltIn = __webpack_require__(3256);
            var definePropertyModule = __webpack_require__(2498);
            var wellKnownSymbol = __webpack_require__(551);
            var DESCRIPTORS = __webpack_require__(3035);
            var SPECIES = wellKnownSymbol("species");
            module.exports = function(CONSTRUCTOR_NAME) {
                var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
                var defineProperty = definePropertyModule.f;
                if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) defineProperty(Constructor, SPECIES, {
                    configurable: true,
                    get: function() {
                        return this;
                    }
                });
            };
        },
        4299: (module, __unused_webpack_exports, __webpack_require__) => {
            var defineProperty = __webpack_require__(2498).f;
            var hasOwn = __webpack_require__(7235);
            var wellKnownSymbol = __webpack_require__(551);
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            module.exports = function(target, TAG, STATIC) {
                if (target && !STATIC) target = target.prototype;
                if (target && !hasOwn(target, TO_STRING_TAG)) defineProperty(target, TO_STRING_TAG, {
                    configurable: true,
                    value: TAG
                });
            };
        },
        1577: (module, __unused_webpack_exports, __webpack_require__) => {
            var shared = __webpack_require__(5616);
            var uid = __webpack_require__(4519);
            var keys = shared("keys");
            module.exports = function(key) {
                return keys[key] || (keys[key] = uid(key));
            };
        },
        5481: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var setGlobal = __webpack_require__(3066);
            var SHARED = "__core-js_shared__";
            var store = global[SHARED] || setGlobal(SHARED, {});
            module.exports = store;
        },
        5616: (module, __unused_webpack_exports, __webpack_require__) => {
            var IS_PURE = __webpack_require__(4156);
            var store = __webpack_require__(5481);
            (module.exports = function(key, value) {
                return store[key] || (store[key] = void 0 !== value ? value : {});
            })("versions", []).push({
                version: "3.21.1",
                mode: IS_PURE ? "pure" : "global",
                copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",
                source: "https://github.com/zloirock/core-js"
            });
        },
        8492: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var toIntegerOrInfinity = __webpack_require__(3193);
            var toString = __webpack_require__(5117);
            var requireObjectCoercible = __webpack_require__(1095);
            var charAt = uncurryThis("".charAt);
            var charCodeAt = uncurryThis("".charCodeAt);
            var stringSlice = uncurryThis("".slice);
            var createMethod = function(CONVERT_TO_STRING) {
                return function($this, pos) {
                    var S = toString(requireObjectCoercible($this));
                    var position = toIntegerOrInfinity(pos);
                    var size = S.length;
                    var first, second;
                    if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : void 0;
                    first = charCodeAt(S, position);
                    return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
                };
            };
            module.exports = {
                codeAt: createMethod(false),
                charAt: createMethod(true)
            };
        },
        3566: (module, __unused_webpack_exports, __webpack_require__) => {
            var toIntegerOrInfinity = __webpack_require__(3193);
            var max = Math.max;
            var min = Math.min;
            module.exports = function(index, length) {
                var integer = toIntegerOrInfinity(index);
                return integer < 0 ? max(integer + length, 0) : min(integer, length);
            };
        },
        8839: (module, __unused_webpack_exports, __webpack_require__) => {
            var IndexedObject = __webpack_require__(5832);
            var requireObjectCoercible = __webpack_require__(1095);
            module.exports = function(it) {
                return IndexedObject(requireObjectCoercible(it));
            };
        },
        3193: module => {
            var ceil = Math.ceil;
            var floor = Math.floor;
            module.exports = function(argument) {
                var number = +argument;
                return number !== number || 0 === number ? 0 : (number > 0 ? floor : ceil)(number);
            };
        },
        2909: (module, __unused_webpack_exports, __webpack_require__) => {
            var toIntegerOrInfinity = __webpack_require__(3193);
            var min = Math.min;
            module.exports = function(argument) {
                return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
            };
        },
        1851: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var requireObjectCoercible = __webpack_require__(1095);
            var Object = global.Object;
            module.exports = function(argument) {
                return Object(requireObjectCoercible(argument));
            };
        },
        665: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var call = __webpack_require__(4923);
            var isObject = __webpack_require__(3021);
            var isSymbol = __webpack_require__(3674);
            var getMethod = __webpack_require__(7355);
            var ordinaryToPrimitive = __webpack_require__(6618);
            var wellKnownSymbol = __webpack_require__(551);
            var TypeError = global.TypeError;
            var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
            module.exports = function(input, pref) {
                if (!isObject(input) || isSymbol(input)) return input;
                var exoticToPrim = getMethod(input, TO_PRIMITIVE);
                var result;
                if (exoticToPrim) {
                    if (void 0 === pref) pref = "default";
                    result = call(exoticToPrim, input, pref);
                    if (!isObject(result) || isSymbol(result)) return result;
                    throw TypeError("Can't convert object to primitive value");
                }
                if (void 0 === pref) pref = "number";
                return ordinaryToPrimitive(input, pref);
            };
        },
        3163: (module, __unused_webpack_exports, __webpack_require__) => {
            var toPrimitive = __webpack_require__(665);
            var isSymbol = __webpack_require__(3674);
            module.exports = function(argument) {
                var key = toPrimitive(argument, "string");
                return isSymbol(key) ? key : key + "";
            };
        },
        1554: (module, __unused_webpack_exports, __webpack_require__) => {
            var wellKnownSymbol = __webpack_require__(551);
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            var test = {};
            test[TO_STRING_TAG] = "z";
            module.exports = "[object z]" === String(test);
        },
        5117: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var classof = __webpack_require__(456);
            var String = global.String;
            module.exports = function(argument) {
                if ("Symbol" === classof(argument)) throw TypeError("Cannot convert a Symbol value to a string");
                return String(argument);
            };
        },
        8336: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var String = global.String;
            module.exports = function(argument) {
                try {
                    return String(argument);
                } catch (error) {
                    return "Object";
                }
            };
        },
        4519: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var id = 0;
            var postfix = Math.random();
            var toString = uncurryThis(1..toString);
            module.exports = function(key) {
                return "Symbol(" + (void 0 === key ? "" : key) + ")_" + toString(++id + postfix, 36);
            };
        },
        9735: (module, __unused_webpack_exports, __webpack_require__) => {
            var NATIVE_SYMBOL = __webpack_require__(5460);
            module.exports = NATIVE_SYMBOL && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        4579: (module, __unused_webpack_exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(3035);
            var fails = __webpack_require__(6686);
            module.exports = DESCRIPTORS && fails((function() {
                return 42 != Object.defineProperty((function() {}), "prototype", {
                    value: 42,
                    writable: false
                }).prototype;
            }));
        },
        551: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var shared = __webpack_require__(5616);
            var hasOwn = __webpack_require__(7235);
            var uid = __webpack_require__(4519);
            var NATIVE_SYMBOL = __webpack_require__(5460);
            var USE_SYMBOL_AS_UID = __webpack_require__(9735);
            var WellKnownSymbolsStore = shared("wks");
            var Symbol = global.Symbol;
            var symbolFor = Symbol && Symbol["for"];
            var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
            module.exports = function(name) {
                if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || "string" == typeof WellKnownSymbolsStore[name])) {
                    var description = "Symbol." + name;
                    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name]; else if (USE_SYMBOL_AS_UID && symbolFor) WellKnownSymbolsStore[name] = symbolFor(description); else WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
                }
                return WellKnownSymbolsStore[name];
            };
        },
        9547: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            var $ = __webpack_require__(1669);
            var from = __webpack_require__(8970);
            var checkCorrectnessOfIteration = __webpack_require__(6416);
            var INCORRECT_ITERATION = !checkCorrectnessOfIteration((function(iterable) {
                Array.from(iterable);
            }));
            $({
                target: "Array",
                stat: true,
                forced: INCORRECT_ITERATION
            }, {
                from
            });
        },
        4959: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var toIndexedObject = __webpack_require__(8839);
            var addToUnscopables = __webpack_require__(963);
            var Iterators = __webpack_require__(7324);
            var InternalStateModule = __webpack_require__(3244);
            var defineProperty = __webpack_require__(2498).f;
            var defineIterator = __webpack_require__(4924);
            var IS_PURE = __webpack_require__(4156);
            var DESCRIPTORS = __webpack_require__(3035);
            var ARRAY_ITERATOR = "Array Iterator";
            var setInternalState = InternalStateModule.set;
            var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
            module.exports = defineIterator(Array, "Array", (function(iterated, kind) {
                setInternalState(this, {
                    type: ARRAY_ITERATOR,
                    target: toIndexedObject(iterated),
                    index: 0,
                    kind
                });
            }), (function() {
                var state = getInternalState(this);
                var target = state.target;
                var kind = state.kind;
                var index = state.index++;
                if (!target || index >= target.length) {
                    state.target = void 0;
                    return {
                        value: void 0,
                        done: true
                    };
                }
                if ("keys" == kind) return {
                    value: index,
                    done: false
                };
                if ("values" == kind) return {
                    value: target[index],
                    done: false
                };
                return {
                    value: [ index, target[index] ],
                    done: false
                };
            }), "values");
            var values = Iterators.Arguments = Iterators.Array;
            addToUnscopables("keys");
            addToUnscopables("values");
            addToUnscopables("entries");
            if (!IS_PURE && DESCRIPTORS && "values" !== values.name) try {
                defineProperty(values, "name", {
                    value: "values"
                });
            } catch (error) {}
        },
        3982: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var collection = __webpack_require__(7855);
            var collectionStrong = __webpack_require__(1589);
            collection("Map", (function(init) {
                return function Map() {
                    return init(this, arguments.length ? arguments[0] : void 0);
                };
            }), collectionStrong);
        },
        662: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            var $ = __webpack_require__(1669);
            var assign = __webpack_require__(6776);
            $({
                target: "Object",
                stat: true,
                forced: Object.assign !== assign
            }, {
                assign
            });
        },
        4509: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            var TO_STRING_TAG_SUPPORT = __webpack_require__(1554);
            var redefine = __webpack_require__(2685);
            var toString = __webpack_require__(251);
            if (!TO_STRING_TAG_SUPPORT) redefine(Object.prototype, "toString", toString, {
                unsafe: true
            });
        },
        6616: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var collection = __webpack_require__(7855);
            var collectionStrong = __webpack_require__(1589);
            collection("Set", (function(init) {
                return function Set() {
                    return init(this, arguments.length ? arguments[0] : void 0);
                };
            }), collectionStrong);
        },
        5892: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var charAt = __webpack_require__(8492).charAt;
            var toString = __webpack_require__(5117);
            var InternalStateModule = __webpack_require__(3244);
            var defineIterator = __webpack_require__(4924);
            var STRING_ITERATOR = "String Iterator";
            var setInternalState = InternalStateModule.set;
            var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
            defineIterator(String, "String", (function(iterated) {
                setInternalState(this, {
                    type: STRING_ITERATOR,
                    string: toString(iterated),
                    index: 0
                });
            }), (function next() {
                var state = getInternalState(this);
                var string = state.string;
                var index = state.index;
                var point;
                if (index >= string.length) return {
                    value: void 0,
                    done: true
                };
                point = charAt(string, index);
                state.index += point.length;
                return {
                    value: point,
                    done: false
                };
            }));
        },
        1986: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var global = __webpack_require__(8159);
            var uncurryThis = __webpack_require__(8043);
            var redefineAll = __webpack_require__(5711);
            var InternalMetadataModule = __webpack_require__(9377);
            var collection = __webpack_require__(7855);
            var collectionWeak = __webpack_require__(1052);
            var isObject = __webpack_require__(3021);
            var isExtensible = __webpack_require__(7187);
            var enforceInternalState = __webpack_require__(3244).enforce;
            var NATIVE_WEAK_MAP = __webpack_require__(5806);
            var IS_IE11 = !global.ActiveXObject && "ActiveXObject" in global;
            var InternalWeakMap;
            var wrapper = function(init) {
                return function WeakMap() {
                    return init(this, arguments.length ? arguments[0] : void 0);
                };
            };
            var $WeakMap = collection("WeakMap", wrapper, collectionWeak);
            if (NATIVE_WEAK_MAP && IS_IE11) {
                InternalWeakMap = collectionWeak.getConstructor(wrapper, "WeakMap", true);
                InternalMetadataModule.enable();
                var WeakMapPrototype = $WeakMap.prototype;
                var nativeDelete = uncurryThis(WeakMapPrototype["delete"]);
                var nativeHas = uncurryThis(WeakMapPrototype.has);
                var nativeGet = uncurryThis(WeakMapPrototype.get);
                var nativeSet = uncurryThis(WeakMapPrototype.set);
                redefineAll(WeakMapPrototype, {
                    delete: function(key) {
                        if (isObject(key) && !isExtensible(key)) {
                            var state = enforceInternalState(this);
                            if (!state.frozen) state.frozen = new InternalWeakMap;
                            return nativeDelete(this, key) || state.frozen["delete"](key);
                        }
                        return nativeDelete(this, key);
                    },
                    has: function has(key) {
                        if (isObject(key) && !isExtensible(key)) {
                            var state = enforceInternalState(this);
                            if (!state.frozen) state.frozen = new InternalWeakMap;
                            return nativeHas(this, key) || state.frozen.has(key);
                        }
                        return nativeHas(this, key);
                    },
                    get: function get(key) {
                        if (isObject(key) && !isExtensible(key)) {
                            var state = enforceInternalState(this);
                            if (!state.frozen) state.frozen = new InternalWeakMap;
                            return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
                        }
                        return nativeGet(this, key);
                    },
                    set: function set(key, value) {
                        if (isObject(key) && !isExtensible(key)) {
                            var state = enforceInternalState(this);
                            if (!state.frozen) state.frozen = new InternalWeakMap;
                            nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
                        } else nativeSet(this, key, value);
                        return this;
                    }
                });
            }
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" === typeof window) return window;
            }
        }();
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        __webpack_require__.r = exports => {
            if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
    })();
    (() => {
        "use strict";
        var events_namespaceObject = {};
        __webpack_require__.r(events_namespaceObject);
        __webpack_require__.d(events_namespaceObject, {
            keyboardHandler: () => keyboardHandler,
            mouseHandler: () => mouseHandler,
            resizeHandler: () => resizeHandler,
            selectHandler: () => selectHandler,
            touchHandler: () => touchHandler,
            wheelHandler: () => wheelHandler
        });
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        var smooth_scroll_polyfills_min = __webpack_require__(3002);
        let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof smooth_scroll_polyfills_min) (new smooth_scroll_polyfills_min).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
            }
        };
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if ("click" === e.type) {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoblock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if ("navigator" === targetElement.dataset.watch) {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoblock_gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        function _assertThisInitialized(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        }
        function _inheritsLoose(subClass, superClass) {
            subClass.prototype = Object.create(superClass.prototype);
            subClass.prototype.constructor = subClass;
            subClass.__proto__ = superClass;
        }
        /*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/        var _suppressOverwrites, _globalTimeline, _win, _coreInitted, _doc, _coreReady, _lastRenderedFrame, _quickTween, _tickerActive, _config = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        }, _defaults = {
            duration: .5,
            overwrite: false,
            delay: 0
        }, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = 2 * Math.PI, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
            return "string" === typeof value;
        }, _isFunction = function _isFunction(value) {
            return "function" === typeof value;
        }, _isNumber = function _isNumber(value) {
            return "number" === typeof value;
        }, _isUndefined = function _isUndefined(value) {
            return "undefined" === typeof value;
        }, _isObject = function _isObject(value) {
            return "object" === typeof value;
        }, _isNotFalse = function _isNotFalse(value) {
            return false !== value;
        }, _windowExists = function _windowExists() {
            return "undefined" !== typeof window;
        }, _isFuncOrString = function _isFuncOrString(value) {
            return _isFunction(value) || _isString(value);
        }, _isTypedArray = "function" === typeof ArrayBuffer && ArrayBuffer.isView || function() {}, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i, _globals = {}, _installScope = {}, _install = function _install(scope) {
            return (_installScope = _merge(scope, _globals)) && gsap;
        }, _missingPlugin = function _missingPlugin(property, value) {
            return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
        }, _warn = function _warn(message, suppress) {
            return !suppress && console.warn(message);
        }, _addGlobal = function _addGlobal(name, obj) {
            return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
        }, _emptyFunc = function _emptyFunc() {
            return 0;
        }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
            var harnessPlugin, i, target = targets[0];
            _isObject(target) || _isFunction(target) || (targets = [ targets ]);
            if (!(harnessPlugin = (target._gsap || {}).harness)) {
                i = _harnessPlugins.length;
                while (i-- && !_harnessPlugins[i].targetTest(target)) ;
                harnessPlugin = _harnessPlugins[i];
            }
            i = targets.length;
            while (i--) targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
            return targets;
        }, _getCache = function _getCache(target) {
            return target._gsap || _harness(toArray(target))[0]._gsap;
        }, _getProperty = function _getProperty(target, property, v) {
            return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
        }, _forEachName = function _forEachName(names, func) {
            return (names = names.split(",")).forEach(func) || names;
        }, _round = function _round(value) {
            return Math.round(1e5 * value) / 1e5 || 0;
        }, _roundPrecise = function _roundPrecise(value) {
            return Math.round(1e7 * value) / 1e7 || 0;
        }, _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
            var l = toFind.length, i = 0;
            for (;toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) ;
            return i < l;
        }, _lazyRender = function _lazyRender() {
            var i, tween, l = _lazyTweens.length, a = _lazyTweens.slice(0);
            _lazyLookup = {};
            _lazyTweens.length = 0;
            for (i = 0; i < l; i++) {
                tween = a[i];
                tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
            }
        }, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
            _lazyTweens.length && _lazyRender();
            animation.render(time, suppressEvents, force);
            _lazyTweens.length && _lazyRender();
        }, _numericIfPossible = function _numericIfPossible(value) {
            var n = parseFloat(value);
            return (n || 0 === n) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
        }, _passThrough = function _passThrough(p) {
            return p;
        }, _setDefaults = function _setDefaults(obj, defaults) {
            for (var p in defaults) p in obj || (obj[p] = defaults[p]);
            return obj;
        }, _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
            return function(obj, defaults) {
                for (var p in defaults) p in obj || "duration" === p && excludeDuration || "ease" === p || (obj[p] = defaults[p]);
            };
        }, _merge = function _merge(base, toMerge) {
            for (var p in toMerge) base[p] = toMerge[p];
            return base;
        }, _mergeDeep = function _mergeDeep(base, toMerge) {
            for (var p in toMerge) "__proto__" !== p && "constructor" !== p && "prototype" !== p && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
            return base;
        }, _copyExcluding = function _copyExcluding(obj, excluding) {
            var p, copy = {};
            for (p in obj) p in excluding || (copy[p] = obj[p]);
            return copy;
        }, _inheritDefaults = function _inheritDefaults(vars) {
            var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
            if (_isNotFalse(vars.inherit)) while (parent) {
                func(vars, parent.vars.defaults);
                parent = parent.parent || parent._dp;
            }
            return vars;
        }, _arraysMatch = function _arraysMatch(a1, a2) {
            var i = a1.length, match = i === a2.length;
            while (match && i-- && a1[i] === a2[i]) ;
            return i < 0;
        }, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
            if (void 0 === firstProp) firstProp = "_first";
            if (void 0 === lastProp) lastProp = "_last";
            var t, prev = parent[lastProp];
            if (sortBy) {
                t = child[sortBy];
                while (prev && prev[sortBy] > t) prev = prev._prev;
            }
            if (prev) {
                child._next = prev._next;
                prev._next = child;
            } else {
                child._next = parent[firstProp];
                parent[firstProp] = child;
            }
            if (child._next) child._next._prev = child; else parent[lastProp] = child;
            child._prev = prev;
            child.parent = child._dp = parent;
            return child;
        }, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
            if (void 0 === firstProp) firstProp = "_first";
            if (void 0 === lastProp) lastProp = "_last";
            var prev = child._prev, next = child._next;
            if (prev) prev._next = next; else if (parent[firstProp] === child) parent[firstProp] = next;
            if (next) next._prev = prev; else if (parent[lastProp] === child) parent[lastProp] = prev;
            child._next = child._prev = child.parent = null;
        }, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
            child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
            child._act = 0;
        }, _uncache = function _uncache(animation, child) {
            if (animation && (!child || child._end > animation._dur || child._start < 0)) {
                var a = animation;
                while (a) {
                    a._dirty = 1;
                    a = a.parent;
                }
            }
            return animation;
        }, _recacheAncestors = function _recacheAncestors(animation) {
            var parent = animation.parent;
            while (parent && parent.parent) {
                parent._dirty = 1;
                parent.totalDuration();
                parent = parent.parent;
            }
            return animation;
        }, _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
            return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
        }, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
            return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
        }, _animationCycle = function _animationCycle(tTime, cycleDuration) {
            var whole = Math.floor(tTime /= cycleDuration);
            return tTime && whole === tTime ? whole - 1 : whole;
        }, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
            return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
        }, _setEnd = function _setEnd(animation) {
            return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
        }, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
            var parent = animation._dp;
            if (parent && parent.smoothChildTiming && animation._ts) {
                animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
                _setEnd(animation);
                parent._dirty || _uncache(parent, animation);
            }
            return animation;
        }, _postAddChecks = function _postAddChecks(timeline, child) {
            var t;
            if (child._time || child._initted && !child._dur) {
                t = _parentToChildTotalTime(timeline.rawTime(), child);
                if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
            }
            if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
                if (timeline._dur < timeline.duration()) {
                    t = timeline;
                    while (t._dp) {
                        t.rawTime() >= 0 && t.totalTime(t._tTime);
                        t = t._dp;
                    }
                }
                timeline._zTime = -_tinyNum;
            }
        }, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
            child.parent && _removeFromParent(child);
            child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
            child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
            _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
            _isFromOrFromStart(child) || (timeline._recent = child);
            skipChecks || _postAddChecks(timeline, child);
            return timeline;
        }, _scrollTrigger = function _scrollTrigger(animation, trigger) {
            return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
        }, _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
            _initTween(tween, totalTime);
            if (!tween._initted) return 1;
            if (!force && tween._pt && (tween._dur && false !== tween.vars.lazy || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
                _lazyTweens.push(tween);
                tween._lazy = [ totalTime, suppressEvents ];
                return 1;
            }
        }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
            var parent = _ref.parent;
            return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
        }, _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
            var data = _ref2.data;
            return "isFromStart" === data || "isStart" === data;
        }, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
            var pt, iteration, prevIteration, prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0;
            if (repeatDelay && tween._repeat) {
                tTime = _clamp(0, tween._tDur, totalTime);
                iteration = _animationCycle(tTime, repeatDelay);
                tween._yoyo && 1 & iteration && (ratio = 1 - ratio);
                if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
                    prevRatio = 1 - ratio;
                    tween.vars.repeatRefresh && tween._initted && tween.invalidate();
                }
            }
            if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
                if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) return;
                prevIteration = tween._zTime;
                tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
                suppressEvents || (suppressEvents = totalTime && !prevIteration);
                tween.ratio = ratio;
                tween._from && (ratio = 1 - ratio);
                tween._time = 0;
                tween._tTime = tTime;
                pt = tween._pt;
                while (pt) {
                    pt.r(ratio, pt.d);
                    pt = pt._next;
                }
                tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
                tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
                tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
                if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
                    ratio && _removeFromParent(tween, 1);
                    if (!suppressEvents) {
                        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                        tween._prom && tween._prom();
                    }
                }
            } else if (!tween._zTime) tween._zTime = totalTime;
        }, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
            var child;
            if (time > prevTime) {
                child = animation._first;
                while (child && child._start <= time) {
                    if ("isPause" === child.data && child._start > prevTime) return child;
                    child = child._next;
                }
            } else {
                child = animation._last;
                while (child && child._start >= time) {
                    if ("isPause" === child.data && child._start < prevTime) return child;
                    child = child._prev;
                }
            }
        }, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
            var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
            totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
            animation._dur = dur;
            animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
            totalProgress > 0 && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
            skipUncache || _uncache(animation.parent, animation);
            return animation;
        }, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
            return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
        }, _zeroPosition = {
            _start: 0,
            endTime: _emptyFunc,
            totalDuration: _emptyFunc
        }, _parsePosition = function _parsePosition(animation, position, percentAnimation) {
            var i, offset, isPercent, labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur;
            if (_isString(position) && (isNaN(position) || position in labels)) {
                offset = position.charAt(0);
                isPercent = "%" === position.substr(-1);
                i = position.indexOf("=");
                if ("<" === offset || ">" === offset) {
                    i >= 0 && (position = position.replace(/=/, ""));
                    return ("<" === offset ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
                }
                if (i < 0) {
                    position in labels || (labels[position] = clippedDuration);
                    return labels[position];
                }
                offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
                if (isPercent && percentAnimation) offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
                return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
            }
            return null == position ? clippedDuration : +position;
        }, _createTweenType = function _createTweenType(type, params, timeline) {
            var irVars, parent, isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex];
            isLegacy && (vars.duration = params[1]);
            vars.parent = timeline;
            if (type) {
                irVars = vars;
                parent = timeline;
                while (parent && !("immediateRender" in irVars)) {
                    irVars = parent.vars.defaults || {};
                    parent = _isNotFalse(parent.vars.inherit) && parent.parent;
                }
                vars.immediateRender = _isNotFalse(irVars.immediateRender);
                type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
            }
            return new Tween(params[0], vars, params[varsIndex + 1]);
        }, _conditionalReturn = function _conditionalReturn(value, func) {
            return value || 0 === value ? func(value) : func;
        }, _clamp = function _clamp(min, max, value) {
            return value < min ? min : value > max ? max : value;
        }, getUnit = function getUnit(value, v) {
            return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : value.substr(v.index + v[0].length);
        }, clamp = function clamp(min, max, value) {
            return _conditionalReturn(value, (function(v) {
                return _clamp(min, max, v);
            }));
        }, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
            return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
        }, _flatten = function _flatten(ar, leaveStrings, accumulator) {
            if (void 0 === accumulator) accumulator = [];
            return ar.forEach((function(value) {
                var _accumulator;
                return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
            })) || accumulator;
        }, toArray = function toArray(value, scope, leaveStrings) {
            return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [ value ] : [];
        }, selector = function selector(value) {
            value = toArray(value)[0] || _warn("Invalid scope") || {};
            return function(v) {
                var el = value.current || value.nativeElement || value;
                return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
            };
        }, shuffle = function shuffle(a) {
            return a.sort((function() {
                return .5 - Math.random();
            }));
        }, distribute = function distribute(v) {
            if (_isFunction(v)) return v;
            var vars = _isObject(v) ? v : {
                each: v
            }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
            if (_isString(from)) ratioX = ratioY = {
                center: .5,
                edges: .5,
                end: 1
            }[from] || 0; else if (!isDecimal && ratios) {
                ratioX = from[0];
                ratioY = from[1];
            }
            return function(i, target, a) {
                var originX, originY, x, y, d, j, max, min, wrapAt, l = (a || vars).length, distances = cache[l];
                if (!distances) {
                    wrapAt = "auto" === vars.grid ? 0 : (vars.grid || [ 1, _bigNum ])[1];
                    if (!wrapAt) {
                        max = -_bigNum;
                        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) ;
                        wrapAt--;
                    }
                    distances = cache[l] = [];
                    originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
                    originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
                    max = 0;
                    min = _bigNum;
                    for (j = 0; j < l; j++) {
                        x = j % wrapAt - originX;
                        y = originY - (j / wrapAt | 0);
                        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs("y" === axis ? y : x);
                        d > max && (max = d);
                        d < min && (min = d);
                    }
                    "random" === from && shuffle(distances);
                    distances.max = max - min;
                    distances.min = min;
                    distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : "y" === axis ? l / wrapAt : wrapAt) || 0) * ("edges" === from ? -1 : 1);
                    distances.b = l < 0 ? base - l : base;
                    distances.u = getUnit(vars.amount || vars.each) || 0;
                    ease = ease && l < 0 ? _invertEase(ease) : ease;
                }
                l = (distances[i] - distances.min) / distances.max || 0;
                return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
            };
        }, _roundModifier = function _roundModifier(v) {
            var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
            return function(raw) {
                var n = Math.round(parseFloat(raw) / v) * v * p;
                return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
            };
        }, snap = function snap(snapTo, value) {
            var radius, is2D, isArray = _isArray(snapTo);
            if (!isArray && _isObject(snapTo)) {
                radius = isArray = snapTo.radius || _bigNum;
                if (snapTo.values) {
                    snapTo = toArray(snapTo.values);
                    if (is2D = !_isNumber(snapTo[0])) radius *= radius;
                } else snapTo = _roundModifier(snapTo.increment);
            }
            return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
                is2D = snapTo(raw);
                return Math.abs(is2D - raw) <= radius ? is2D : raw;
            } : function(raw) {
                var dx, dy, x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length;
                while (i--) {
                    if (is2D) {
                        dx = snapTo[i].x - x;
                        dy = snapTo[i].y - y;
                        dx = dx * dx + dy * dy;
                    } else dx = Math.abs(snapTo[i] - x);
                    if (dx < min) {
                        min = dx;
                        closest = i;
                    }
                }
                closest = !radius || min <= radius ? snapTo[closest] : raw;
                return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
            });
        }, random = function random(min, max, roundingIncrement, returnFunction) {
            return _conditionalReturn(_isArray(min) ? !max : true === roundingIncrement ? !!(roundingIncrement = 0) : !returnFunction, (function() {
                return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + .99 * roundingIncrement)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
            }));
        }, pipe = function pipe() {
            for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) functions[_key] = arguments[_key];
            return function(value) {
                return functions.reduce((function(v, f) {
                    return f(v);
                }), value);
            };
        }, unitize = function unitize(func, unit) {
            return function(value) {
                return func(parseFloat(value)) + (unit || getUnit(value));
            };
        }, normalize = function normalize(min, max, value) {
            return mapRange(min, max, 0, 1, value);
        }, _wrapArray = function _wrapArray(a, wrapper, value) {
            return _conditionalReturn(value, (function(index) {
                return a[~~wrapper(index)];
            }));
        }, wrap = function wrap(min, max, value) {
            var range = max - min;
            return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, (function(value) {
                return (range + (value - min) % range) % range + min;
            }));
        }, wrapYoyo = function wrapYoyo(min, max, value) {
            var range = max - min, total = 2 * range;
            return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, (function(value) {
                value = (total + (value - min) % total) % total || 0;
                return min + (value > range ? total - value : value);
            }));
        }, _replaceRandom = function _replaceRandom(value) {
            var i, nums, end, isArray, prev = 0, s = "";
            while (~(i = value.indexOf("random(", prev))) {
                end = value.indexOf(")", i);
                isArray = "[" === value.charAt(i + 7);
                nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
                s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
                prev = end + 1;
            }
            return s + value.substr(prev, value.length - prev);
        }, mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
            var inRange = inMax - inMin, outRange = outMax - outMin;
            return _conditionalReturn(value, (function(value) {
                return outMin + ((value - inMin) / inRange * outRange || 0);
            }));
        }, interpolate = function interpolate(start, end, progress, mutate) {
            var func = isNaN(start + end) ? 0 : function(p) {
                return (1 - p) * start + p * end;
            };
            if (!func) {
                var p, i, interpolators, l, il, isString = _isString(start), master = {};
                true === progress && (mutate = 1) && (progress = null);
                if (isString) {
                    start = {
                        p: start
                    };
                    end = {
                        p: end
                    };
                } else if (_isArray(start) && !_isArray(end)) {
                    interpolators = [];
                    l = start.length;
                    il = l - 2;
                    for (i = 1; i < l; i++) interpolators.push(interpolate(start[i - 1], start[i]));
                    l--;
                    func = function func(p) {
                        p *= l;
                        var i = Math.min(il, ~~p);
                        return interpolators[i](p - i);
                    };
                    progress = end;
                } else if (!mutate) start = _merge(_isArray(start) ? [] : {}, start);
                if (!interpolators) {
                    for (p in end) _addPropTween.call(master, start, p, "get", end[p]);
                    func = function func(p) {
                        return _renderPropTweens(p, master) || (isString ? start.p : start);
                    };
                }
            }
            return _conditionalReturn(progress, func);
        }, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
            var p, distance, label, labels = timeline.labels, min = _bigNum;
            for (p in labels) {
                distance = labels[p] - fromTime;
                if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
                    label = p;
                    min = distance;
                }
            }
            return label;
        }, _callback = function _callback(animation, type, executeLazyFirst) {
            var params, scope, v = animation.vars, callback = v[type];
            if (!callback) return;
            params = v[type + "Params"];
            scope = v.callbackScope || animation;
            executeLazyFirst && _lazyTweens.length && _lazyRender();
            return params ? callback.apply(scope, params) : callback.call(scope);
        }, _interrupt = function _interrupt(animation) {
            _removeFromParent(animation);
            animation.scrollTrigger && animation.scrollTrigger.kill(false);
            animation.progress() < 1 && _callback(animation, "onInterrupt");
            return animation;
        }, _createPlugin = function _createPlugin(config) {
            config = !config.name && config["default"] || config;
            var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
                this._props = [];
            } : config, instanceDefaults = {
                init: _emptyFunc,
                render: _renderPropTweens,
                add: _addPropTween,
                kill: _killPropTweensOf,
                modifier: _addPluginModifier,
                rawVars: 0
            }, statics = {
                targetTest: 0,
                get: 0,
                getSetter: _getSetter,
                aliases: {},
                register: 0
            };
            _wake();
            if (config !== Plugin) {
                if (_plugins[name]) return;
                _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));
                _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
                _plugins[Plugin.prop = name] = Plugin;
                if (config.targetTest) {
                    _harnessPlugins.push(Plugin);
                    _reservedProps[name] = 1;
                }
                name = ("css" === name ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
            }
            _addGlobal(name, Plugin);
            config.register && config.register(gsap, Plugin, PropTween);
        }, _255 = 255, _colorLookup = {
            aqua: [ 0, _255, _255 ],
            lime: [ 0, _255, 0 ],
            silver: [ 192, 192, 192 ],
            black: [ 0, 0, 0 ],
            maroon: [ 128, 0, 0 ],
            teal: [ 0, 128, 128 ],
            blue: [ 0, 0, _255 ],
            navy: [ 0, 0, 128 ],
            white: [ _255, _255, _255 ],
            olive: [ 128, 128, 0 ],
            yellow: [ _255, _255, 0 ],
            orange: [ _255, 165, 0 ],
            gray: [ 128, 128, 128 ],
            purple: [ 128, 0, 128 ],
            green: [ 0, 128, 0 ],
            red: [ _255, 0, 0 ],
            pink: [ _255, 192, 203 ],
            cyan: [ 0, _255, _255 ],
            transparent: [ _255, _255, _255, 0 ]
        }, _hue = function _hue(h, m1, m2) {
            h += h < 0 ? 1 : h > 1 ? -1 : 0;
            return (6 * h < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : 3 * h < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
        }, splitColor = function splitColor(v, toHSL, forceAlpha) {
            var r, g, b, h, s, l, max, min, d, wasHSL, a = !v ? _colorLookup.black : _isNumber(v) ? [ v >> 16, v >> 8 & _255, v & _255 ] : 0;
            if (!a) {
                if ("," === v.substr(-1)) v = v.substr(0, v.length - 1);
                if (_colorLookup[v]) a = _colorLookup[v]; else if ("#" === v.charAt(0)) {
                    if (v.length < 6) {
                        r = v.charAt(1);
                        g = v.charAt(2);
                        b = v.charAt(3);
                        v = "#" + r + r + g + g + b + b + (5 === v.length ? v.charAt(4) + v.charAt(4) : "");
                    }
                    if (9 === v.length) {
                        a = parseInt(v.substr(1, 6), 16);
                        return [ a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255 ];
                    }
                    v = parseInt(v.substr(1), 16);
                    a = [ v >> 16, v >> 8 & _255, v & _255 ];
                } else if ("hsl" === v.substr(0, 3)) {
                    a = wasHSL = v.match(_strictNumExp);
                    if (!toHSL) {
                        h = +a[0] % 360 / 360;
                        s = +a[1] / 100;
                        l = +a[2] / 100;
                        g = l <= .5 ? l * (s + 1) : l + s - l * s;
                        r = 2 * l - g;
                        a.length > 3 && (a[3] *= 1);
                        a[0] = _hue(h + 1 / 3, r, g);
                        a[1] = _hue(h, r, g);
                        a[2] = _hue(h - 1 / 3, r, g);
                    } else if (~v.indexOf("=")) {
                        a = v.match(_numExp);
                        forceAlpha && a.length < 4 && (a[3] = 1);
                        return a;
                    }
                } else a = v.match(_strictNumExp) || _colorLookup.transparent;
                a = a.map(Number);
            }
            if (toHSL && !wasHSL) {
                r = a[0] / _255;
                g = a[1] / _255;
                b = a[2] / _255;
                max = Math.max(r, g, b);
                min = Math.min(r, g, b);
                l = (max + min) / 2;
                if (max === min) h = s = 0; else {
                    d = max - min;
                    s = l > .5 ? d / (2 - max - min) : d / (max + min);
                    h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
                    h *= 60;
                }
                a[0] = ~~(h + .5);
                a[1] = ~~(100 * s + .5);
                a[2] = ~~(100 * l + .5);
            }
            forceAlpha && a.length < 4 && (a[3] = 1);
            return a;
        }, _colorOrderData = function _colorOrderData(v) {
            var values = [], c = [], i = -1;
            v.split(_colorExp).forEach((function(v) {
                var a = v.match(_numWithUnitExp) || [];
                values.push.apply(values, a);
                c.push(i += a.length + 1);
            }));
            values.c = c;
            return values;
        }, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
            var c, shell, d, l, result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0;
            if (!colors) return s;
            colors = colors.map((function(color) {
                return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
            }));
            if (orderMatchData) {
                d = _colorOrderData(s);
                c = orderMatchData.c;
                if (c.join(result) !== d.c.join(result)) {
                    shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
                    l = shell.length - 1;
                    for (;i < l; i++) result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
                }
            }
            if (!shell) {
                shell = s.split(_colorExp);
                l = shell.length - 1;
                for (;i < l; i++) result += shell[i] + colors[i];
            }
            return result + shell[l];
        }, _colorExp = function() {
            var p, s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (p in _colorLookup) s += "|" + p + "\\b";
            return new RegExp(s + ")", "gi");
        }(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
            var toHSL, combined = a.join(" ");
            _colorExp.lastIndex = 0;
            if (_colorExp.test(combined)) {
                toHSL = _hslExp.test(combined);
                a[1] = _formatColors(a[1], toHSL);
                a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
                return true;
            }
        }, _ticker = function() {
            var _id, _req, _raf, _self, _delta, _i, _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners = [], _tick = function _tick(v) {
                var overlap, dispatch, time, frame, elapsed = _getTime() - _lastUpdate, manual = true === v;
                elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
                _lastUpdate += elapsed;
                time = _lastUpdate - _startTime;
                overlap = time - _nextTime;
                if (overlap > 0 || manual) {
                    frame = ++_self.frame;
                    _delta = time - 1e3 * _self.time;
                    _self.time = time /= 1e3;
                    _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
                    dispatch = 1;
                }
                manual || (_id = _req(_tick));
                if (dispatch) for (_i = 0; _i < _listeners.length; _i++) _listeners[_i](time, _delta, frame, v);
            };
            _self = {
                time: 0,
                frame: 0,
                tick: function tick() {
                    _tick(true);
                },
                deltaRatio: function deltaRatio(fps) {
                    return _delta / (1e3 / (fps || 60));
                },
                wake: function wake() {
                    if (_coreReady) {
                        if (!_coreInitted && _windowExists()) {
                            _win = _coreInitted = window;
                            _doc = _win.document || {};
                            _globals.gsap = gsap;
                            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                            _raf = _win.requestAnimationFrame;
                        }
                        _id && _self.sleep();
                        _req = _raf || function(f) {
                            return setTimeout(f, _nextTime - 1e3 * _self.time + 1 | 0);
                        };
                        _tickerActive = 1;
                        _tick(2);
                    }
                },
                sleep: function sleep() {
                    (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
                    _tickerActive = 0;
                    _req = _emptyFunc;
                },
                lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
                    _lagThreshold = threshold || 1 / _tinyNum;
                    _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
                },
                fps: function fps(_fps) {
                    _gap = 1e3 / (_fps || 240);
                    _nextTime = 1e3 * _self.time + _gap;
                },
                add: function add(callback) {
                    _listeners.indexOf(callback) < 0 && _listeners.push(callback);
                    _wake();
                },
                remove: function remove(callback, i) {
                    ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
                },
                _listeners
            };
            return _self;
        }(), _wake = function _wake() {
            return !_tickerActive && _ticker.wake();
        }, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
            var index, val, parsedVal, obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length;
            for (;i < l; i++) {
                val = split[i];
                index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
                parsedVal = val.substr(0, index);
                obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
                key = val.substr(index + 1).trim();
            }
            return obj;
        }, _valueInParentheses = function _valueInParentheses(value) {
            var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
            return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
        }, _configEaseFromString = function _configEaseFromString(name) {
            var split = (name + "").split("("), ease = _easeMap[split[0]];
            return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [ _parseObjectInString(split[1]) ] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
        }, _invertEase = function _invertEase(ease) {
            return function(p) {
                return 1 - ease(1 - p);
            };
        }, _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
            var ease, child = timeline._first;
            while (child) {
                if (child instanceof Timeline) _propagateYoyoEase(child, isYoyo); else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) if (child.timeline) _propagateYoyoEase(child.timeline, isYoyo); else {
                    ease = child._ease;
                    child._ease = child._yEase;
                    child._yEase = ease;
                    child._yoyo = isYoyo;
                }
                child = child._next;
            }
        }, _parseEase = function _parseEase(ease, defaultEase) {
            return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
        }, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
            if (void 0 === easeOut) easeOut = function easeOut(p) {
                return 1 - easeIn(1 - p);
            };
            if (void 0 === easeInOut) easeInOut = function easeInOut(p) {
                return p < .5 ? easeIn(2 * p) / 2 : 1 - easeIn(2 * (1 - p)) / 2;
            };
            var lowercaseName, ease = {
                easeIn,
                easeOut,
                easeInOut
            };
            _forEachName(names, (function(name) {
                _easeMap[name] = _globals[name] = ease;
                _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
                for (var p in ease) _easeMap[lowercaseName + ("easeIn" === p ? ".in" : "easeOut" === p ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
            }));
            return ease;
        }, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
            return function(p) {
                return p < .5 ? (1 - easeOut(1 - 2 * p)) / 2 : .5 + easeOut(2 * (p - .5)) / 2;
            };
        }, _configElastic = function _configElastic(type, amplitude, period) {
            var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
                return 1 === p ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
            }, ease = "out" === type ? easeOut : "in" === type ? function(p) {
                return 1 - easeOut(1 - p);
            } : _easeInOutFromOut(easeOut);
            p2 = _2PI / p2;
            ease.config = function(amplitude, period) {
                return _configElastic(type, amplitude, period);
            };
            return ease;
        }, _configBack = function _configBack(type, overshoot) {
            if (void 0 === overshoot) overshoot = 1.70158;
            var easeOut = function easeOut(p) {
                return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
            }, ease = "out" === type ? easeOut : "in" === type ? function(p) {
                return 1 - easeOut(1 - p);
            } : _easeInOutFromOut(easeOut);
            ease.config = function(overshoot) {
                return _configBack(type, overshoot);
            };
            return ease;
        };
        _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", (function(name, i) {
            var power = i < 5 ? i + 1 : i;
            _insertEase(name + ",Power" + (power - 1), i ? function(p) {
                return Math.pow(p, power);
            } : function(p) {
                return p;
            }, (function(p) {
                return 1 - Math.pow(1 - p, power);
            }), (function(p) {
                return p < .5 ? Math.pow(2 * p, power) / 2 : 1 - Math.pow(2 * (1 - p), power) / 2;
            }));
        }));
        _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
        _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
        (function(n, c) {
            var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
                return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
            };
            _insertEase("Bounce", (function(p) {
                return 1 - easeOut(1 - p);
            }), easeOut);
        })(7.5625, 2.75);
        _insertEase("Expo", (function(p) {
            return p ? Math.pow(2, 10 * (p - 1)) : 0;
        }));
        _insertEase("Circ", (function(p) {
            return -(_sqrt(1 - p * p) - 1);
        }));
        _insertEase("Sine", (function(p) {
            return 1 === p ? 1 : -_cos(p * _HALF_PI) + 1;
        }));
        _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
        _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
            config: function config(steps, immediateStart) {
                if (void 0 === steps) steps = 1;
                var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
                return function(p) {
                    return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
                };
            }
        };
        _defaults.ease = _easeMap["quad.out"];
        _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(name) {
            return _callbackNames += name + "," + name + "Params,";
        }));
        var GSCache = function GSCache(target, harness) {
            this.id = _gsID++;
            target._gsap = this;
            this.target = target;
            this.harness = harness;
            this.get = harness ? harness.get : _getProperty;
            this.set = harness ? harness.getSetter : _getSetter;
        };
        var Animation = function() {
            function Animation(vars) {
                this.vars = vars;
                this._delay = +vars.delay || 0;
                if (this._repeat = vars.repeat === 1 / 0 ? -2 : vars.repeat || 0) {
                    this._rDelay = vars.repeatDelay || 0;
                    this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
                }
                this._ts = 1;
                _setDuration(this, +vars.duration, 1, 1);
                this.data = vars.data;
                _tickerActive || _ticker.wake();
            }
            var _proto = Animation.prototype;
            _proto.delay = function delay(value) {
                if (value || 0 === value) {
                    this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
                    this._delay = value;
                    return this;
                }
                return this._delay;
            };
            _proto.duration = function duration(value) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
            };
            _proto.totalDuration = function totalDuration(value) {
                if (!arguments.length) return this._tDur;
                this._dirty = 0;
                return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
            };
            _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
                _wake();
                if (!arguments.length) return this._tTime;
                var parent = this._dp;
                if (parent && parent.smoothChildTiming && this._ts) {
                    _alignPlayhead(this, _totalTime);
                    !parent._dp || parent.parent || _postAddChecks(parent, this);
                    while (parent && parent.parent) {
                        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
                        parent = parent.parent;
                    }
                    if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) _addToTimeline(this._dp, this, this._start - this._delay);
                }
                if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
                    this._ts || (this._pTime = _totalTime);
                    _lazySafeRender(this, _totalTime, suppressEvents);
                }
                return this;
            };
            _proto.time = function time(value, suppressEvents) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
            };
            _proto.totalProgress = function totalProgress(value, suppressEvents) {
                return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
            };
            _proto.progress = function progress(value, suppressEvents) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
            };
            _proto.iteration = function iteration(value, suppressEvents) {
                var cycleDuration = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
            };
            _proto.timeScale = function timeScale(value) {
                if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts;
                if (this._rts === value) return this;
                var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
                this._rts = +value || 0;
                this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
                _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
                _setEnd(this);
                return this;
            };
            _proto.paused = function paused(value) {
                if (!arguments.length) return this._ps;
                if (this._ps !== value) {
                    this._ps = value;
                    if (value) {
                        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
                        this._ts = this._act = 0;
                    } else {
                        _wake();
                        this._ts = this._rts;
                        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
                    }
                }
                return this;
            };
            _proto.startTime = function startTime(value) {
                if (arguments.length) {
                    this._start = value;
                    var parent = this.parent || this._dp;
                    parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
                    return this;
                }
                return this._start;
            };
            _proto.endTime = function endTime(includeRepeats) {
                return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
            };
            _proto.rawTime = function rawTime(wrapRepeats) {
                var parent = this.parent || this._dp;
                return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
            };
            _proto.globalTime = function globalTime(rawTime) {
                var animation = this, time = arguments.length ? rawTime : animation.rawTime();
                while (animation) {
                    time = animation._start + time / (animation._ts || 1);
                    animation = animation._dp;
                }
                return time;
            };
            _proto.repeat = function repeat(value) {
                if (arguments.length) {
                    this._repeat = value === 1 / 0 ? -2 : value;
                    return _onUpdateTotalDuration(this);
                }
                return -2 === this._repeat ? 1 / 0 : this._repeat;
            };
            _proto.repeatDelay = function repeatDelay(value) {
                if (arguments.length) {
                    var time = this._time;
                    this._rDelay = value;
                    _onUpdateTotalDuration(this);
                    return time ? this.time(time) : this;
                }
                return this._rDelay;
            };
            _proto.yoyo = function yoyo(value) {
                if (arguments.length) {
                    this._yoyo = value;
                    return this;
                }
                return this._yoyo;
            };
            _proto.seek = function seek(position, suppressEvents) {
                return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
            };
            _proto.restart = function restart(includeDelay, suppressEvents) {
                return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
            };
            _proto.play = function play(from, suppressEvents) {
                null != from && this.seek(from, suppressEvents);
                return this.reversed(false).paused(false);
            };
            _proto.reverse = function reverse(from, suppressEvents) {
                null != from && this.seek(from || this.totalDuration(), suppressEvents);
                return this.reversed(true).paused(false);
            };
            _proto.pause = function pause(atTime, suppressEvents) {
                null != atTime && this.seek(atTime, suppressEvents);
                return this.paused(true);
            };
            _proto.resume = function resume() {
                return this.paused(false);
            };
            _proto.reversed = function reversed(value) {
                if (arguments.length) {
                    !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
                    return this;
                }
                return this._rts < 0;
            };
            _proto.invalidate = function invalidate() {
                this._initted = this._act = 0;
                this._zTime = -_tinyNum;
                return this;
            };
            _proto.isActive = function isActive() {
                var rawTime, parent = this.parent || this._dp, start = this._start;
                return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
            };
            _proto.eventCallback = function eventCallback(type, callback, params) {
                var vars = this.vars;
                if (arguments.length > 1) {
                    if (!callback) delete vars[type]; else {
                        vars[type] = callback;
                        params && (vars[type + "Params"] = params);
                        "onUpdate" === type && (this._onUpdate = callback);
                    }
                    return this;
                }
                return vars[type];
            };
            _proto.then = function then(onFulfilled) {
                var self = this;
                return new Promise((function(resolve) {
                    var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
                        var _then = self.then;
                        self.then = null;
                        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                        resolve(f);
                        self.then = _then;
                    };
                    if (self._initted && 1 === self.totalProgress() && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve(); else self._prom = _resolve;
                }));
            };
            _proto.kill = function kill() {
                _interrupt(this);
            };
            return Animation;
        }();
        _setDefaults(Animation.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: false,
            parent: null,
            _initted: false,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -_tinyNum,
            _prom: 0,
            _ps: false,
            _rts: 1
        });
        var Timeline = function(_Animation) {
            _inheritsLoose(Timeline, _Animation);
            function Timeline(vars, position) {
                var _this;
                if (void 0 === vars) vars = {};
                _this = _Animation.call(this, vars) || this;
                _this.labels = {};
                _this.smoothChildTiming = !!vars.smoothChildTiming;
                _this.autoRemoveChildren = !!vars.autoRemoveChildren;
                _this._sort = _isNotFalse(vars.sortChildren);
                _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
                vars.reversed && _this.reverse();
                vars.paused && _this.paused(true);
                vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
                return _this;
            }
            var _proto2 = Timeline.prototype;
            _proto2.to = function to(targets, vars, position) {
                _createTweenType(0, arguments, this);
                return this;
            };
            _proto2.from = function from(targets, vars, position) {
                _createTweenType(1, arguments, this);
                return this;
            };
            _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
                _createTweenType(2, arguments, this);
                return this;
            };
            _proto2.set = function set(targets, vars, position) {
                vars.duration = 0;
                vars.parent = this;
                _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
                vars.immediateRender = !!vars.immediateRender;
                new Tween(targets, vars, _parsePosition(this, position), 1);
                return this;
            };
            _proto2.call = function call(callback, params, position) {
                return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
            };
            _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
                vars.duration = duration;
                vars.stagger = vars.stagger || stagger;
                vars.onComplete = onCompleteAll;
                vars.onCompleteParams = onCompleteAllParams;
                vars.parent = this;
                new Tween(targets, vars, _parsePosition(this, position));
                return this;
            };
            _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
                vars.runBackwards = 1;
                _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
                return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
            };
            _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
                toVars.startAt = fromVars;
                _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
                return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
            };
            _proto2.render = function render(totalTime, suppressEvents, force) {
                var time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo, prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur);
                this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
                if (tTime !== this._tTime || force || crossingStart) {
                    if (prevTime !== this._time && dur) {
                        tTime += this._time - prevTime;
                        totalTime += this._time - prevTime;
                    }
                    time = tTime;
                    prevStart = this._start;
                    timeScale = this._ts;
                    prevPaused = !timeScale;
                    if (crossingStart) {
                        dur || (prevTime = this._zTime);
                        (totalTime || !suppressEvents) && (this._zTime = totalTime);
                    }
                    if (this._repeat) {
                        yoyo = this._yoyo;
                        cycleDuration = dur + this._rDelay;
                        if (this._repeat < -1 && totalTime < 0) return this.totalTime(100 * cycleDuration + totalTime, suppressEvents, force);
                        time = _roundPrecise(tTime % cycleDuration);
                        if (tTime === tDur) {
                            iteration = this._repeat;
                            time = dur;
                        } else {
                            iteration = ~~(tTime / cycleDuration);
                            if (iteration && iteration === tTime / cycleDuration) {
                                time = dur;
                                iteration--;
                            }
                            time > dur && (time = dur);
                        }
                        prevIteration = _animationCycle(this._tTime, cycleDuration);
                        !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);
                        if (yoyo && 1 & iteration) {
                            time = dur - time;
                            isYoyo = 1;
                        }
                        if (iteration !== prevIteration && !this._lock) {
                            var rewinding = yoyo && 1 & prevIteration, doesWrap = rewinding === (yoyo && 1 & iteration);
                            iteration < prevIteration && (rewinding = !rewinding);
                            prevTime = rewinding ? 0 : dur;
                            this._lock = 1;
                            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                            this._tTime = tTime;
                            !suppressEvents && this.parent && _callback(this, "onRepeat");
                            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                            dur = this._dur;
                            tDur = this._tDur;
                            if (doesWrap) {
                                this._lock = 2;
                                prevTime = rewinding ? dur : -1e-4;
                                this.render(prevTime, true);
                                this.vars.repeatRefresh && !isYoyo && this.invalidate();
                            }
                            this._lock = 0;
                            if (!this._ts && !prevPaused) return this;
                            _propagateYoyoEase(this, isYoyo);
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2) {
                        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
                        if (pauseTween) tTime -= time - (time = pauseTween._start);
                    }
                    this._tTime = tTime;
                    this._time = time;
                    this._act = !timeScale;
                    if (!this._initted) {
                        this._onUpdate = this.vars.onUpdate;
                        this._initted = 1;
                        this._zTime = totalTime;
                        prevTime = 0;
                    }
                    if (!prevTime && time && !suppressEvents) {
                        _callback(this, "onStart");
                        if (this._tTime !== tTime) return this;
                    }
                    if (time >= prevTime && totalTime >= 0) {
                        child = this._first;
                        while (child) {
                            next = child._next;
                            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                                if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
                                child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                                if (time !== this._time || !this._ts && !prevPaused) {
                                    pauseTween = 0;
                                    next && (tTime += this._zTime = -_tinyNum);
                                    break;
                                }
                            }
                            child = next;
                        }
                    } else {
                        child = this._last;
                        var adjustedTime = totalTime < 0 ? totalTime : time;
                        while (child) {
                            next = child._prev;
                            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                                if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
                                child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
                                if (time !== this._time || !this._ts && !prevPaused) {
                                    pauseTween = 0;
                                    next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                                    break;
                                }
                            }
                            child = next;
                        }
                    }
                    if (pauseTween && !suppressEvents) {
                        this.pause();
                        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                        if (this._ts) {
                            this._start = prevStart;
                            _setEnd(this);
                            return this.render(totalTime, suppressEvents, force);
                        }
                    }
                    this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
                    if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
                        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                            _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
                return this;
            };
            _proto2.add = function add(child, position) {
                var _this2 = this;
                _isNumber(position) || (position = _parsePosition(this, position, child));
                if (!(child instanceof Animation)) {
                    if (_isArray(child)) {
                        child.forEach((function(obj) {
                            return _this2.add(obj, position);
                        }));
                        return this;
                    }
                    if (_isString(child)) return this.addLabel(child, position);
                    if (_isFunction(child)) child = Tween.delayedCall(0, child); else return this;
                }
                return this !== child ? _addToTimeline(this, child, position) : this;
            };
            _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
                if (void 0 === nested) nested = true;
                if (void 0 === tweens) tweens = true;
                if (void 0 === timelines) timelines = true;
                if (void 0 === ignoreBeforeTime) ignoreBeforeTime = -_bigNum;
                var a = [], child = this._first;
                while (child) {
                    if (child._start >= ignoreBeforeTime) if (child instanceof Tween) tweens && a.push(child); else {
                        timelines && a.push(child);
                        nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                    }
                    child = child._next;
                }
                return a;
            };
            _proto2.getById = function getById(id) {
                var animations = this.getChildren(1, 1, 1), i = animations.length;
                while (i--) if (animations[i].vars.id === id) return animations[i];
            };
            _proto2.remove = function remove(child) {
                if (_isString(child)) return this.removeLabel(child);
                if (_isFunction(child)) return this.killTweensOf(child);
                _removeLinkedListItem(this, child);
                if (child === this._recent) this._recent = this._last;
                return _uncache(this);
            };
            _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
                if (!arguments.length) return this._tTime;
                this._forcing = 1;
                if (!this._dp && this._ts) this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
                _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
                this._forcing = 0;
                return this;
            };
            _proto2.addLabel = function addLabel(label, position) {
                this.labels[label] = _parsePosition(this, position);
                return this;
            };
            _proto2.removeLabel = function removeLabel(label) {
                delete this.labels[label];
                return this;
            };
            _proto2.addPause = function addPause(position, callback, params) {
                var t = Tween.delayedCall(0, callback || _emptyFunc, params);
                t.data = "isPause";
                this._hasPause = 1;
                return _addToTimeline(this, t, _parsePosition(this, position));
            };
            _proto2.removePause = function removePause(position) {
                var child = this._first;
                position = _parsePosition(this, position);
                while (child) {
                    if (child._start === position && "isPause" === child.data) _removeFromParent(child);
                    child = child._next;
                }
            };
            _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
                var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
                while (i--) _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
                return this;
            };
            _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
                var children, a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive);
                while (child) {
                    if (child instanceof Tween) {
                        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) a.push(child);
                    } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
                    child = child._next;
                }
                return a;
            };
            _proto2.tweenTo = function tweenTo(position, vars) {
                vars = vars || {};
                var initted, tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, tween = Tween.to(tl, _setDefaults({
                    ease: vars.ease || "none",
                    lazy: false,
                    immediateRender: false,
                    time: endTime,
                    overwrite: "auto",
                    duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
                    onStart: function onStart() {
                        tl.pause();
                        if (!initted) {
                            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                            initted = 1;
                        }
                        _onStart && _onStart.apply(tween, onStartParams || []);
                    }
                }, vars));
                return immediateRender ? tween.render(0) : tween;
            };
            _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
                return this.tweenTo(toPosition, _setDefaults({
                    startAt: {
                        time: _parsePosition(this, fromPosition)
                    }
                }, vars));
            };
            _proto2.recent = function recent() {
                return this._recent;
            };
            _proto2.nextLabel = function nextLabel(afterTime) {
                if (void 0 === afterTime) afterTime = this._time;
                return _getLabelInDirection(this, _parsePosition(this, afterTime));
            };
            _proto2.previousLabel = function previousLabel(beforeTime) {
                if (void 0 === beforeTime) beforeTime = this._time;
                return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
            };
            _proto2.currentLabel = function currentLabel(value) {
                return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
            };
            _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
                if (void 0 === ignoreBeforeTime) ignoreBeforeTime = 0;
                var p, child = this._first, labels = this.labels;
                while (child) {
                    if (child._start >= ignoreBeforeTime) {
                        child._start += amount;
                        child._end += amount;
                    }
                    child = child._next;
                }
                if (adjustLabels) for (p in labels) if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
                return _uncache(this);
            };
            _proto2.invalidate = function invalidate() {
                var child = this._first;
                this._lock = 0;
                while (child) {
                    child.invalidate();
                    child = child._next;
                }
                return _Animation.prototype.invalidate.call(this);
            };
            _proto2.clear = function clear(includeLabels) {
                if (void 0 === includeLabels) includeLabels = true;
                var next, child = this._first;
                while (child) {
                    next = child._next;
                    this.remove(child);
                    child = next;
                }
                this._dp && (this._time = this._tTime = this._pTime = 0);
                includeLabels && (this.labels = {});
                return _uncache(this);
            };
            _proto2.totalDuration = function totalDuration(value) {
                var prev, start, parent, max = 0, self = this, child = self._last, prevStart = _bigNum;
                if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
                if (self._dirty) {
                    parent = self.parent;
                    while (child) {
                        prev = child._prev;
                        child._dirty && child.totalDuration();
                        start = child._start;
                        if (start > prevStart && self._sort && child._ts && !self._lock) {
                            self._lock = 1;
                            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                        } else prevStart = start;
                        if (start < 0 && child._ts) {
                            max -= start;
                            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                                self._start += start / self._ts;
                                self._time -= start;
                                self._tTime -= start;
                            }
                            self.shiftChildren(-start, false, -Infinity);
                            prevStart = 0;
                        }
                        child._end > max && child._ts && (max = child._end);
                        child = prev;
                    }
                    _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
                    self._dirty = 0;
                }
                return self._tDur;
            };
            Timeline.updateRoot = function updateRoot(time) {
                if (_globalTimeline._ts) {
                    _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
                    _lastRenderedFrame = _ticker.frame;
                }
                if (_ticker.frame >= _nextGCFrame) {
                    _nextGCFrame += _config.autoSleep || 120;
                    var child = _globalTimeline._first;
                    if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
                        while (child && !child._ts) child = child._next;
                        child || _ticker.sleep();
                    }
                }
            };
            return Timeline;
        }(Animation);
        _setDefaults(Timeline.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var _overwritingTween, _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
            var result, startNums, color, endNum, chunk, startNum, hasRandom, a, pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0;
            pt.b = start;
            pt.e = end;
            start += "";
            end += "";
            if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
            if (stringFilter) {
                a = [ start, end ];
                stringFilter(a, target, prop);
                start = a[0];
                end = a[1];
            }
            startNums = start.match(_complexStringNumExp) || [];
            while (result = _complexStringNumExp.exec(end)) {
                endNum = result[0];
                chunk = end.substring(index, result.index);
                if (color) color = (color + 1) % 5; else if ("rgba(" === chunk.substr(-5)) color = 1;
                if (endNum !== startNums[matchIndex++]) {
                    startNum = parseFloat(startNums[matchIndex - 1]) || 0;
                    pt._pt = {
                        _next: pt._pt,
                        p: chunk || 1 === matchIndex ? chunk : ",",
                        s: startNum,
                        c: "=" === endNum.charAt(1) ? parseFloat(endNum.substr(2)) * ("-" === endNum.charAt(0) ? -1 : 1) : parseFloat(endNum) - startNum,
                        m: color && color < 4 ? Math.round : 0
                    };
                    index = _complexStringNumExp.lastIndex;
                }
            }
            pt.c = index < end.length ? end.substring(index, end.length) : "";
            pt.fp = funcParam;
            if (_relExp.test(end) || hasRandom) pt.e = 0;
            this._pt = pt;
            return pt;
        }, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
            _isFunction(end) && (end = end(index || 0, target, targets));
            var pt, currentValue = target[prop], parsedStart = "get" !== start ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc;
            if (_isString(end)) {
                if (~end.indexOf("random(")) end = _replaceRandom(end);
                if ("=" === end.charAt(1)) {
                    pt = parseFloat(parsedStart) + parseFloat(end.substr(2)) * ("-" === end.charAt(0) ? -1 : 1) + (getUnit(parsedStart) || 0);
                    if (pt || 0 === pt) end = pt;
                }
            }
            if (parsedStart !== end) {
                if (!isNaN(parsedStart * end) && "" !== end) {
                    pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), "boolean" === typeof currentValue ? _renderBoolean : _renderPlain, 0, setter);
                    funcParam && (pt.fp = funcParam);
                    modifier && pt.modifier(modifier, this, target);
                    return this._pt = pt;
                }
                !currentValue && !(prop in target) && _missingPlugin(prop, end);
                return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
            }
        }, _processVars = function _processVars(vars, index, target, targets, tween) {
            _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
            if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
            var p, copy = {};
            for (p in vars) copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
            return copy;
        }, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
            var plugin, pt, ptLookup, i;
            if (_plugins[property] && false !== (plugin = new _plugins[property]).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets)) {
                tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
                if (tween !== _quickTween) {
                    ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
                    i = plugin._props.length;
                    while (i--) ptLookup[plugin._props[i]] = pt;
                }
            }
            return plugin;
        }, _initTween = function _initTween(tween, time) {
            var cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten, vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && "nested" === parent.data ? parent.parent._targets : targets, autoOverwrite = "auto" === tween._overwrite && !_suppressOverwrites, tl = tween.timeline;
            tl && (!keyframes || !ease) && (ease = "none");
            tween._ease = _parseEase(ease, _defaults.ease);
            tween._yEase = yoyoEase ? _invertEase(_parseEase(true === yoyoEase ? ease : yoyoEase, _defaults.ease)) : 0;
            if (yoyoEase && tween._yoyo && !tween._repeat) {
                yoyoEase = tween._yEase;
                tween._yEase = tween._ease;
                tween._ease = yoyoEase;
            }
            tween._from = !tl && !!vars.runBackwards;
            if (!tl || keyframes && !vars.stagger) {
                harness = targets[0] ? _getCache(targets[0]).harness : 0;
                harnessVars = harness && vars[harness.prop];
                cleanVars = _copyExcluding(vars, _reservedProps);
                prevStartAt && _removeFromParent(prevStartAt.render(-1, true));
                if (startAt) {
                    _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                        data: "isStart",
                        overwrite: false,
                        parent,
                        immediateRender: true,
                        lazy: _isNotFalse(lazy),
                        startAt: null,
                        delay: 0,
                        onUpdate,
                        onUpdateParams,
                        callbackScope,
                        stagger: 0
                    }, startAt)));
                    time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true);
                    if (immediateRender) {
                        time > 0 && !autoRevert && (tween._startAt = 0);
                        if (dur && time <= 0) {
                            time && (tween._zTime = time);
                            return;
                        }
                    } else if (false === autoRevert) tween._startAt = 0;
                } else if (runBackwards && dur) if (prevStartAt) !autoRevert && (tween._startAt = 0); else {
                    time && (immediateRender = false);
                    p = _setDefaults({
                        overwrite: false,
                        data: "isFromStart",
                        lazy: immediateRender && _isNotFalse(lazy),
                        immediateRender,
                        stagger: 0,
                        parent
                    }, cleanVars);
                    harnessVars && (p[harness.prop] = harnessVars);
                    _removeFromParent(tween._startAt = Tween.set(targets, p));
                    time < 0 && tween._startAt.render(-1, true);
                    tween._zTime = time;
                    if (!immediateRender) _initTween(tween._startAt, _tinyNum); else if (!time) return;
                }
                tween._pt = 0;
                lazy = dur && _isNotFalse(lazy) || lazy && !dur;
                for (i = 0; i < targets.length; i++) {
                    target = targets[i];
                    gsData = target._gsap || _harness(targets)[i]._gsap;
                    tween._ptLookup[i] = ptLookup = {};
                    _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
                    index = fullTargets === targets ? i : fullTargets.indexOf(target);
                    if (harness && false !== (plugin = new harness).init(target, harnessVars || cleanVars, tween, index, fullTargets)) {
                        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                        plugin._props.forEach((function(name) {
                            ptLookup[name] = pt;
                        }));
                        plugin.priority && (hasPriority = 1);
                    }
                    if (!harness || harnessVars) for (p in cleanVars) if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1); else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                    tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
                    if (autoOverwrite && tween._pt) {
                        _overwritingTween = tween;
                        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
                        overwritten = !tween.parent;
                        _overwritingTween = 0;
                    }
                    tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
                }
                hasPriority && _sortPropTweensByPriority(tween);
                tween._onInit && tween._onInit(tween);
            }
            tween._onUpdate = onUpdate;
            tween._initted = (!tween._op || tween._pt) && !overwritten;
            keyframes && time <= 0 && tl.render(_bigNum, true, true);
        }, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
            var copy, p, i, aliases, harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases;
            if (!propertyAliases) return vars;
            copy = _merge({}, vars);
            for (p in propertyAliases) if (p in copy) {
                aliases = propertyAliases[p].split(",");
                i = aliases.length;
                while (i--) copy[aliases[i]] = copy[p];
            }
            return copy;
        }, _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
            var p, a, ease = obj.ease || easeEach || "power1.inOut";
            if (_isArray(obj)) {
                a = allProps[prop] || (allProps[prop] = []);
                obj.forEach((function(value, i) {
                    return a.push({
                        t: i / (obj.length - 1) * 100,
                        v: value,
                        e: ease
                    });
                }));
            } else for (p in obj) {
                a = allProps[p] || (allProps[p] = []);
                "ease" === p || a.push({
                    t: parseFloat(prop),
                    v: obj[p],
                    e: ease
                });
            }
        }, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
            return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
        }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", _staggerPropsToSkip = {};
        _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", (function(name) {
            return _staggerPropsToSkip[name] = 1;
        }));
        var Tween = function(_Animation2) {
            _inheritsLoose(Tween, _Animation2);
            function Tween(targets, vars, position, skipInherit) {
                var _this3;
                if ("number" === typeof vars) {
                    position.duration = vars;
                    vars = position;
                    position = null;
                }
                _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
                var tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge, _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [ targets ] : toArray(targets);
                _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
                _this3._ptLookup = [];
                _this3._overwrite = overwrite;
                if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                    vars = _this3.vars;
                    tl = _this3.timeline = new Timeline({
                        data: "nested",
                        defaults: defaults || {}
                    });
                    tl.kill();
                    tl.parent = tl._dp = _assertThisInitialized(_this3);
                    tl._start = 0;
                    if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                        l = parsedTargets.length;
                        staggerFunc = stagger && distribute(stagger);
                        if (_isObject(stagger)) for (p in stagger) if (~_staggerTweenProps.indexOf(p)) {
                            staggerVarsToMerge || (staggerVarsToMerge = {});
                            staggerVarsToMerge[p] = stagger[p];
                        }
                        for (i = 0; i < l; i++) {
                            copy = _copyExcluding(vars, _staggerPropsToSkip);
                            copy.stagger = 0;
                            yoyoEase && (copy.yoyoEase = yoyoEase);
                            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                            curTarget = parsedTargets[i];
                            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                            if (!stagger && 1 === l && copy.delay) {
                                _this3._delay = delay = copy.delay;
                                _this3._start += delay;
                                copy.delay = 0;
                            }
                            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                            tl._ease = _easeMap.none;
                        }
                        tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
                    } else if (keyframes) {
                        _inheritDefaults(_setDefaults(tl.vars.defaults, {
                            ease: "none"
                        }));
                        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
                        var a, kf, v, time = 0;
                        if (_isArray(keyframes)) keyframes.forEach((function(frame) {
                            return tl.to(parsedTargets, frame, ">");
                        })); else {
                            copy = {};
                            for (p in keyframes) "ease" === p || "easeEach" === p || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                            for (p in copy) {
                                a = copy[p].sort((function(a, b) {
                                    return a.t - b.t;
                                }));
                                time = 0;
                                for (i = 0; i < a.length; i++) {
                                    kf = a[i];
                                    v = {
                                        ease: kf.e,
                                        duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                                    };
                                    v[p] = kf.v;
                                    tl.to(parsedTargets, v, time);
                                    time += v.duration;
                                }
                            }
                            tl.duration() < duration && tl.to({}, {
                                duration: duration - tl.duration()
                            });
                        }
                    }
                    duration || _this3.duration(duration = tl.duration());
                } else _this3.timeline = 0;
                if (true === overwrite && !_suppressOverwrites) {
                    _overwritingTween = _assertThisInitialized(_this3);
                    _globalTimeline.killTweensOf(parsedTargets);
                    _overwritingTween = 0;
                }
                _addToTimeline(parent, _assertThisInitialized(_this3), position);
                vars.reversed && _this3.reverse();
                vars.paused && _this3.paused(true);
                if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && "nested" !== parent.data) {
                    _this3._tTime = -_tinyNum;
                    _this3.render(Math.max(0, -delay));
                }
                scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
                return _this3;
            }
            var _proto3 = Tween.prototype;
            _proto3.render = function render(totalTime, suppressEvents, force) {
                var time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase, prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime;
                if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force); else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
                    time = tTime;
                    timeline = this.timeline;
                    if (this._repeat) {
                        cycleDuration = dur + this._rDelay;
                        if (this._repeat < -1 && totalTime < 0) return this.totalTime(100 * cycleDuration + totalTime, suppressEvents, force);
                        time = _roundPrecise(tTime % cycleDuration);
                        if (tTime === tDur) {
                            iteration = this._repeat;
                            time = dur;
                        } else {
                            iteration = ~~(tTime / cycleDuration);
                            if (iteration && iteration === tTime / cycleDuration) {
                                time = dur;
                                iteration--;
                            }
                            time > dur && (time = dur);
                        }
                        isYoyo = this._yoyo && 1 & iteration;
                        if (isYoyo) {
                            yoyoEase = this._yEase;
                            time = dur - time;
                        }
                        prevIteration = _animationCycle(this._tTime, cycleDuration);
                        if (time === prevTime && !force && this._initted) return this;
                        if (iteration !== prevIteration) {
                            timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
                            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                                this._lock = force = 1;
                                this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                            }
                        }
                    }
                    if (!this._initted) {
                        if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
                            this._tTime = 0;
                            return this;
                        }
                        if (dur !== this._dur) return this.render(totalTime, suppressEvents, force);
                    }
                    this._tTime = tTime;
                    this._time = time;
                    if (!this._act && this._ts) {
                        this._act = 1;
                        this._lazy = 0;
                    }
                    this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
                    if (this._from) this.ratio = ratio = 1 - ratio;
                    if (time && !prevTime && !suppressEvents) {
                        _callback(this, "onStart");
                        if (this._tTime !== tTime) return this;
                    }
                    pt = this._pt;
                    while (pt) {
                        pt.r(ratio, pt.d);
                        pt = pt._next;
                    }
                    timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
                    if (this._onUpdate && !suppressEvents) {
                        totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);
                        _callback(this, "onUpdate");
                    }
                    this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
                    if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                        totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
                        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
                return this;
            };
            _proto3.targets = function targets() {
                return this._targets;
            };
            _proto3.invalidate = function invalidate() {
                this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
                this._ptLookup = [];
                this.timeline && this.timeline.invalidate();
                return _Animation2.prototype.invalidate.call(this);
            };
            _proto3.kill = function kill(targets, vars) {
                if (void 0 === vars) vars = "all";
                if (!targets && (!vars || "all" === vars)) {
                    this._lazy = this._pt = 0;
                    return this.parent ? _interrupt(this) : this;
                }
                if (this.timeline) {
                    var tDur = this.timeline.totalDuration();
                    this.timeline.killTweensOf(targets, vars, _overwritingTween && true !== _overwritingTween.vars.overwrite)._first || _interrupt(this);
                    this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
                    return this;
                }
                var overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i, parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt;
                if ((!vars || "all" === vars) && _arraysMatch(parsedTargets, killingTargets)) {
                    "all" === vars && (this._pt = 0);
                    return _interrupt(this);
                }
                overwrittenProps = this._op = this._op || [];
                if ("all" !== vars) {
                    if (_isString(vars)) {
                        p = {};
                        _forEachName(vars, (function(name) {
                            return p[name] = 1;
                        }));
                        vars = p;
                    }
                    vars = _addAliasesToVars(parsedTargets, vars);
                }
                i = parsedTargets.length;
                while (i--) if (~killingTargets.indexOf(parsedTargets[i])) {
                    curLookup = propTweenLookup[i];
                    if ("all" === vars) {
                        overwrittenProps[i] = vars;
                        props = curLookup;
                        curOverwriteProps = {};
                    } else {
                        curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                        props = vars;
                    }
                    for (p in props) {
                        pt = curLookup && curLookup[p];
                        if (pt) {
                            if (!("kill" in pt.d) || true === pt.d.kill(p)) _removeLinkedListItem(this, pt, "_pt");
                            delete curLookup[p];
                        }
                        if ("all" !== curOverwriteProps) curOverwriteProps[p] = 1;
                    }
                }
                this._initted && !this._pt && firstPT && _interrupt(this);
                return this;
            };
            Tween.to = function to(targets, vars) {
                return new Tween(targets, vars, arguments[2]);
            };
            Tween.from = function from(targets, vars) {
                return _createTweenType(1, arguments);
            };
            Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
                return new Tween(callback, 0, {
                    immediateRender: false,
                    lazy: false,
                    overwrite: false,
                    delay,
                    onComplete: callback,
                    onReverseComplete: callback,
                    onCompleteParams: params,
                    onReverseCompleteParams: params,
                    callbackScope: scope
                });
            };
            Tween.fromTo = function fromTo(targets, fromVars, toVars) {
                return _createTweenType(2, arguments);
            };
            Tween.set = function set(targets, vars) {
                vars.duration = 0;
                vars.repeatDelay || (vars.repeat = 0);
                return new Tween(targets, vars);
            };
            Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
                return _globalTimeline.killTweensOf(targets, props, onlyActive);
            };
            return Tween;
        }(Animation);
        _setDefaults(Tween.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        });
        _forEachName("staggerTo,staggerFrom,staggerFromTo", (function(name) {
            Tween[name] = function() {
                var tl = new Timeline, params = _slice.call(arguments, 0);
                params.splice("staggerFromTo" === name ? 5 : 4, 0, 0);
                return tl[name].apply(tl, params);
            };
        }));
        var _setterPlain = function _setterPlain(target, property, value) {
            return target[property] = value;
        }, _setterFunc = function _setterFunc(target, property, value) {
            return target[property](value);
        }, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
            return target[property](data.fp, value);
        }, _setterAttribute = function _setterAttribute(target, property, value) {
            return target.setAttribute(property, value);
        }, _getSetter = function _getSetter(target, property) {
            return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
        }, _renderPlain = function _renderPlain(ratio, data) {
            return data.set(data.t, data.p, Math.round(1e6 * (data.s + data.c * ratio)) / 1e6, data);
        }, _renderBoolean = function _renderBoolean(ratio, data) {
            return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
        }, _renderComplexString = function _renderComplexString(ratio, data) {
            var pt = data._pt, s = "";
            if (!ratio && data.b) s = data.b; else if (1 === ratio && data.e) s = data.e; else {
                while (pt) {
                    s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round(1e4 * (pt.s + pt.c * ratio)) / 1e4) + s;
                    pt = pt._next;
                }
                s += data.c;
            }
            data.set(data.t, data.p, s, data);
        }, _renderPropTweens = function _renderPropTweens(ratio, data) {
            var pt = data._pt;
            while (pt) {
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
        }, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
            var next, pt = this._pt;
            while (pt) {
                next = pt._next;
                pt.p === property && pt.modifier(modifier, tween, target);
                pt = next;
            }
        }, _killPropTweensOf = function _killPropTweensOf(property) {
            var hasNonDependentRemaining, next, pt = this._pt;
            while (pt) {
                next = pt._next;
                if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt"); else if (!pt.dep) hasNonDependentRemaining = 1;
                pt = next;
            }
            return !hasNonDependentRemaining;
        }, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
            data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
        }, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
            var next, pt2, first, last, pt = parent._pt;
            while (pt) {
                next = pt._next;
                pt2 = first;
                while (pt2 && pt2.pr > pt.pr) pt2 = pt2._next;
                if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt; else first = pt;
                if (pt._next = pt2) pt2._prev = pt; else last = pt;
                pt = next;
            }
            parent._pt = first;
        };
        var PropTween = function() {
            function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
                this.t = target;
                this.s = start;
                this.c = change;
                this.p = prop;
                this.r = renderer || _renderPlain;
                this.d = data || this;
                this.set = setter || _setterPlain;
                this.pr = priority || 0;
                this._next = next;
                if (next) next._prev = this;
            }
            var _proto4 = PropTween.prototype;
            _proto4.modifier = function modifier(func, tween, target) {
                this.mSet = this.mSet || this.set;
                this.set = _setterWithModifier;
                this.m = func;
                this.mt = target;
                this.tween = tween;
            };
            return PropTween;
        }();
        _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(name) {
            return _reservedProps[name] = 1;
        }));
        _globals.TweenMax = _globals.TweenLite = Tween;
        _globals.TimelineLite = _globals.TimelineMax = Timeline;
        _globalTimeline = new Timeline({
            sortChildren: false,
            defaults: _defaults,
            autoRemoveChildren: true,
            id: "root",
            smoothChildTiming: true
        });
        _config.stringFilter = _colorStringFilter;
        var _gsap = {
            registerPlugin: function registerPlugin() {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                args.forEach((function(config) {
                    return _createPlugin(config);
                }));
            },
            timeline: function timeline(vars) {
                return new Timeline(vars);
            },
            getTweensOf: function getTweensOf(targets, onlyActive) {
                return _globalTimeline.getTweensOf(targets, onlyActive);
            },
            getProperty: function getProperty(target, property, unit, uncache) {
                _isString(target) && (target = toArray(target)[0]);
                var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
                "native" === unit && (unit = "");
                return !target ? target : !property ? function(property, unit, uncache) {
                    return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
                } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
            },
            quickSetter: function quickSetter(target, property, unit) {
                target = toArray(target);
                if (target.length > 1) {
                    var setters = target.map((function(t) {
                        return gsap.quickSetter(t, property, unit);
                    })), l = setters.length;
                    return function(value) {
                        var i = l;
                        while (i--) setters[i](value);
                    };
                }
                target = target[0] || {};
                var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
                    var p = new Plugin;
                    _quickTween._pt = 0;
                    p.init(target, unit ? value + unit : value, _quickTween, 0, [ target ]);
                    p.render(1, p);
                    _quickTween._pt && _renderPropTweens(1, _quickTween);
                } : cache.set(target, p);
                return Plugin ? setter : function(value) {
                    return setter(target, p, unit ? value + unit : value, cache, 1);
                };
            },
            isTweening: function isTweening(targets) {
                return _globalTimeline.getTweensOf(targets, true).length > 0;
            },
            defaults: function defaults(value) {
                value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
                return _mergeDeep(_defaults, value || {});
            },
            config: function config(value) {
                return _mergeDeep(_config, value || {});
            },
            registerEffect: function registerEffect(_ref3) {
                var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
                (plugins || "").split(",").forEach((function(pluginName) {
                    return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
                }));
                _effects[name] = function(targets, vars, tl) {
                    return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
                };
                if (extendTimeline) Timeline.prototype[name] = function(targets, vars, position) {
                    return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
                };
            },
            registerEase: function registerEase(name, ease) {
                _easeMap[name] = _parseEase(ease);
            },
            parseEase: function parseEase(ease, defaultEase) {
                return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
            },
            getById: function getById(id) {
                return _globalTimeline.getById(id);
            },
            exportRoot: function exportRoot(vars, includeDelayedCalls) {
                if (void 0 === vars) vars = {};
                var child, next, tl = new Timeline(vars);
                tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
                _globalTimeline.remove(tl);
                tl._dp = 0;
                tl._time = tl._tTime = _globalTimeline._time;
                child = _globalTimeline._first;
                while (child) {
                    next = child._next;
                    if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
                    child = next;
                }
                _addToTimeline(_globalTimeline, tl, 0);
                return tl;
            },
            utils: {
                wrap,
                wrapYoyo,
                distribute,
                random,
                snap,
                normalize,
                getUnit,
                clamp,
                splitColor,
                toArray,
                selector,
                mapRange,
                pipe,
                unitize,
                interpolate,
                shuffle
            },
            install: _install,
            effects: _effects,
            ticker: _ticker,
            updateRoot: Timeline.updateRoot,
            plugins: _plugins,
            globalTimeline: _globalTimeline,
            core: {
                PropTween,
                globals: _addGlobal,
                Tween,
                Timeline,
                Animation,
                getCache: _getCache,
                _removeLinkedListItem,
                suppressOverwrites: function suppressOverwrites(value) {
                    return _suppressOverwrites = value;
                }
            }
        };
        _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", (function(name) {
            return _gsap[name] = Tween[name];
        }));
        _ticker.add(Timeline.updateRoot);
        _quickTween = _gsap.to({}, {
            duration: 0
        });
        var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
            var pt = plugin._pt;
            while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) pt = pt._next;
            return pt;
        }, _addModifiers = function _addModifiers(tween, modifiers) {
            var p, i, pt, targets = tween._targets;
            for (p in modifiers) {
                i = targets.length;
                while (i--) {
                    pt = tween._ptLookup[i][p];
                    if (pt && (pt = pt.d)) {
                        if (pt._pt) pt = _getPluginPropTween(pt, p);
                        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
                    }
                }
            }
        }, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
            return {
                name,
                rawVars: 1,
                init: function init(target, vars, tween) {
                    tween._onInit = function(tween) {
                        var temp, p;
                        if (_isString(vars)) {
                            temp = {};
                            _forEachName(vars, (function(name) {
                                return temp[name] = 1;
                            }));
                            vars = temp;
                        }
                        if (modifier) {
                            temp = {};
                            for (p in vars) temp[p] = modifier(vars[p]);
                            vars = temp;
                        }
                        _addModifiers(tween, vars);
                    };
                }
            };
        };
        var gsap = _gsap.registerPlugin({
            name: "attr",
            init: function init(target, vars, tween, index, targets) {
                var p, pt;
                for (p in vars) {
                    pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
                    pt && (pt.op = p);
                    this._props.push(p);
                }
            }
        }, {
            name: "endArray",
            init: function init(target, value) {
                var i = value.length;
                while (i--) this.add(target, i, target[i] || 0, value[i]);
            }
        }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
        Tween.version = Timeline.version = gsap.version = "3.9.1";
        _coreReady = 1;
        _windowExists() && _wake();
        _easeMap.Power0, _easeMap.Power1, _easeMap.Power2, _easeMap.Power3, _easeMap.Power4, 
        _easeMap.Linear, _easeMap.Quad, _easeMap.Cubic, _easeMap.Quart, _easeMap.Quint, 
        _easeMap.Strong, _easeMap.Elastic, _easeMap.Back, _easeMap.SteppedEase, _easeMap.Bounce, 
        _easeMap.Sine, _easeMap.Expo, _easeMap.Circ;
        /*!
 * CSSPlugin 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
        var CSSPlugin_win, CSSPlugin_doc, _docElement, _pluginInitted, _tempDiv, _recentSetterPlugin, _supports3D, CSSPlugin_windowExists = function _windowExists() {
            return "undefined" !== typeof window;
        }, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, CSSPlugin_bigNum = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(?:left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        }, _renderCSSProp = function _renderCSSProp(ratio, data) {
            return data.set(data.t, data.p, Math.round(1e4 * (data.s + data.c * ratio)) / 1e4 + data.u, data);
        }, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
            return data.set(data.t, data.p, 1 === ratio ? data.e : Math.round(1e4 * (data.s + data.c * ratio)) / 1e4 + data.u, data);
        }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
            return data.set(data.t, data.p, ratio ? Math.round(1e4 * (data.s + data.c * ratio)) / 1e4 + data.u : data.b, data);
        }, _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
            var value = data.s + data.c * ratio;
            data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
        }, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
            return data.set(data.t, data.p, ratio ? data.e : data.b, data);
        }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
            return data.set(data.t, data.p, 1 !== ratio ? data.b : data.e, data);
        }, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
            return target.style[property] = value;
        }, _setterCSSProp = function _setterCSSProp(target, property, value) {
            return target.style.setProperty(property, value);
        }, _setterTransform = function _setterTransform(target, property, value) {
            return target._gsap[property] = value;
        }, _setterScale = function _setterScale(target, property, value) {
            return target._gsap.scaleX = target._gsap.scaleY = value;
        }, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
            var cache = target._gsap;
            cache.scaleX = cache.scaleY = value;
            cache.renderTransform(ratio, cache);
        }, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
            var cache = target._gsap;
            cache[property] = value;
            cache.renderTransform(ratio, cache);
        }, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _createElement = function _createElement(type, ns) {
            var e = CSSPlugin_doc.createElementNS ? CSSPlugin_doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : CSSPlugin_doc.createElement(type);
            return e.style ? e : CSSPlugin_doc.createElement(type);
        }, _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
            var cs = getComputedStyle(target);
            return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
        }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
            var e = element || _tempDiv, s = e.style, i = 5;
            if (property in s && !preferPrefix) return property;
            property = property.charAt(0).toUpperCase() + property.substr(1);
            while (i-- && !(_prefixes[i] + property in s)) ;
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
        }, _initCore = function _initCore() {
            if (CSSPlugin_windowExists() && window.document) {
                CSSPlugin_win = window;
                CSSPlugin_doc = CSSPlugin_win.document;
                _docElement = CSSPlugin_doc.documentElement;
                _tempDiv = _createElement("div") || {
                    style: {}
                };
                _createElement("div");
                _transformProp = _checkPropPrefix(_transformProp);
                _transformOriginProp = _transformProp + "Origin";
                _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
                _supports3D = !!_checkPropPrefix("perspective");
                _pluginInitted = 1;
            }
        }, _getBBoxHack = function _getBBoxHack(swapIfPossible) {
            var bbox, svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText;
            _docElement.appendChild(svg);
            svg.appendChild(this);
            this.style.display = "block";
            if (swapIfPossible) try {
                bbox = this.getBBox();
                this._gsapBBox = this.getBBox;
                this.getBBox = _getBBoxHack;
            } catch (e) {} else if (this._gsapBBox) bbox = this._gsapBBox();
            if (oldParent) if (oldSibling) oldParent.insertBefore(this, oldSibling); else oldParent.appendChild(this);
            _docElement.removeChild(svg);
            this.style.cssText = oldCSS;
            return bbox;
        }, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
            var i = attributesArray.length;
            while (i--) if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
        }, _getBBox = function _getBBox(target) {
            var bounds;
            try {
                bounds = target.getBBox();
            } catch (error) {
                bounds = _getBBoxHack.call(target, true);
            }
            bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
            return bounds && !bounds.width && !bounds.x && !bounds.y ? {
                x: +_getAttributeFallbacks(target, [ "x", "cx", "x1" ]) || 0,
                y: +_getAttributeFallbacks(target, [ "y", "cy", "y1" ]) || 0,
                width: 0,
                height: 0
            } : bounds;
        }, _isSVG = function _isSVG(e) {
            return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
        }, _removeProperty = function _removeProperty(target, property) {
            if (property) {
                var style = target.style;
                if (property in _transformProps && property !== _transformOriginProp) property = _transformProp;
                if (style.removeProperty) {
                    if ("ms" === property.substr(0, 2) || "webkit" === property.substr(0, 6)) property = "-" + property;
                    style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
                } else style.removeAttribute(property);
            }
        }, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
            var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
            plugin._pt = pt;
            pt.b = beginning;
            pt.e = end;
            plugin._props.push(property);
            return pt;
        }, _nonConvertibleUnits = {
            deg: 1,
            rad: 1,
            turn: 1
        }, _convertToUnit = function _convertToUnit(target, property, value, unit) {
            var px, parent, cache, isSVG, curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = "svg" === target.tagName.toLowerCase(), measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = "px" === unit, toPercent = "%" === unit;
            if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
            "px" !== curUnit && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
            isSVG = target.getCTM && _isSVG(target);
            if ((toPercent || "%" === curUnit) && (_transformProps[property] || ~property.indexOf("adius"))) {
                px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
                return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
            }
            style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
            parent = ~property.indexOf("adius") || "em" === unit && target.appendChild && !isRootSVG ? target : target.parentNode;
            if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
            if (!parent || parent === CSSPlugin_doc || !parent.appendChild) parent = CSSPlugin_doc.body;
            cache = parent._gsap;
            if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) return _round(curValue / cache.width * amount); else {
                (toPercent || "%" === curUnit) && (style.position = _getComputedProperty(target, "position"));
                parent === target && (style.position = "static");
                parent.appendChild(_tempDiv);
                px = _tempDiv[measureProperty];
                parent.removeChild(_tempDiv);
                style.position = "absolute";
                if (horizontal && toPercent) {
                    cache = _getCache(parent);
                    cache.time = _ticker.time;
                    cache.width = parent[measureProperty];
                }
            }
            return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
        }, _get = function _get(target, property, unit, uncache) {
            var value;
            _pluginInitted || _initCore();
            if (property in _propertyAliases && "transform" !== property) {
                property = _propertyAliases[property];
                if (~property.indexOf(",")) property = property.split(",")[0];
            }
            if (_transformProps[property] && "transform" !== property) {
                value = _parseTransform(target, uncache);
                value = "transformOrigin" !== property ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
            } else {
                value = target.style[property];
                if (!value || "auto" === value || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || ("opacity" === property ? 1 : 0);
            }
            return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
        }, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
            if (!start || "none" === start) {
                var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
                if (s && s !== start) {
                    prop = p;
                    start = s;
                } else if ("borderColor" === prop) start = _getComputedProperty(target, "borderTopColor");
            }
            var a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, relative, endValues, pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0;
            pt.b = start;
            pt.e = end;
            start += "";
            end += "";
            if ("auto" === end) {
                target.style[prop] = end;
                end = _getComputedProperty(target, prop) || end;
                target.style[prop] = start;
            }
            a = [ start, end ];
            _colorStringFilter(a);
            start = a[0];
            end = a[1];
            startValues = start.match(_numWithUnitExp) || [];
            endValues = end.match(_numWithUnitExp) || [];
            if (endValues.length) {
                while (result = _numWithUnitExp.exec(end)) {
                    endValue = result[0];
                    chunk = end.substring(index, result.index);
                    if (color) color = (color + 1) % 5; else if ("rgba(" === chunk.substr(-5) || "hsla(" === chunk.substr(-5)) color = 1;
                    if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                        startNum = parseFloat(startValue) || 0;
                        startUnit = startValue.substr((startNum + "").length);
                        relative = "=" === endValue.charAt(1) ? +(endValue.charAt(0) + "1") : 0;
                        if (relative) endValue = endValue.substr(2);
                        endNum = parseFloat(endValue);
                        endUnit = endValue.substr((endNum + "").length);
                        index = _numWithUnitExp.lastIndex - endUnit.length;
                        if (!endUnit) {
                            endUnit = endUnit || _config.units[prop] || startUnit;
                            if (index === end.length) {
                                end += endUnit;
                                pt.e += endUnit;
                            }
                        }
                        if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                        pt._pt = {
                            _next: pt._pt,
                            p: chunk || 1 === matchIndex ? chunk : ",",
                            s: startNum,
                            c: relative ? relative * endNum : endNum - startNum,
                            m: color && color < 4 || "zIndex" === prop ? Math.round : 0
                        };
                    }
                }
                pt.c = index < end.length ? end.substring(index, end.length) : "";
            } else pt.r = "display" === prop && "none" === end ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
            _relExp.test(end) && (pt.e = 0);
            this._pt = pt;
            return pt;
        }, _keywordToPercent = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
            var split = value.split(" "), x = split[0], y = split[1] || "50%";
            if ("top" === x || "bottom" === x || "left" === y || "right" === y) {
                value = x;
                x = y;
                y = value;
            }
            split[0] = _keywordToPercent[x] || x;
            split[1] = _keywordToPercent[y] || y;
            return split.join(" ");
        }, _renderClearProps = function _renderClearProps(ratio, data) {
            if (data.tween && data.tween._time === data.tween._dur) {
                var prop, clearTransforms, i, target = data.t, style = target.style, props = data.u, cache = target._gsap;
                if ("all" === props || true === props) {
                    style.cssText = "";
                    clearTransforms = 1;
                } else {
                    props = props.split(",");
                    i = props.length;
                    while (--i > -1) {
                        prop = props[i];
                        if (_transformProps[prop]) {
                            clearTransforms = 1;
                            prop = "transformOrigin" === prop ? _transformOriginProp : _transformProp;
                        }
                        _removeProperty(target, prop);
                    }
                }
                if (clearTransforms) {
                    _removeProperty(target, _transformProp);
                    if (cache) {
                        cache.svg && target.removeAttribute("transform");
                        _parseTransform(target, 1);
                        cache.uncache = 1;
                    }
                }
            }
        }, _specialProps = {
            clearProps: function clearProps(plugin, target, property, endValue, tween) {
                if ("isFromStart" !== tween.data) {
                    var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
                    pt.u = endValue;
                    pt.pr = -10;
                    pt.tween = tween;
                    plugin._props.push(property);
                    return 1;
                }
            }
        }, _identity2DMatrix = [ 1, 0, 0, 1, 0, 0 ], _rotationalProperties = {}, _isNullTransform = function _isNullTransform(value) {
            return "matrix(1, 0, 0, 1, 0, 0)" === value || "none" === value || !value;
        }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
            var matrixString = _getComputedProperty(target, _transformProp);
            return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
        }, _getMatrix = function _getMatrix(target, force2D) {
            var parent, nextSibling, temp, addedToDOM, cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target);
            if (cache.svg && target.getAttribute("transform")) {
                temp = target.transform.baseVal.consolidate().matrix;
                matrix = [ temp.a, temp.b, temp.c, temp.d, temp.e, temp.f ];
                return "1,0,0,1,0,0" === matrix.join(",") ? _identity2DMatrix : matrix;
            } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
                temp = style.display;
                style.display = "block";
                parent = target.parentNode;
                if (!parent || !target.offsetParent) {
                    addedToDOM = 1;
                    nextSibling = target.nextSibling;
                    _docElement.appendChild(target);
                }
                matrix = _getComputedTransformMatrixAsArray(target);
                temp ? style.display = temp : _removeProperty(target, "display");
                if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
            }
            return force2D && matrix.length > 6 ? [ matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13] ] : matrix;
        }, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
            var bounds, determinant, x, y, cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0;
            if (!originIsAbsolute) {
                bounds = _getBBox(target);
                xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
                yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
            } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
                x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
                y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
                xOrigin = x;
                yOrigin = y;
            }
            if (smooth || false !== smooth && cache.smooth) {
                tx = xOrigin - xOriginOld;
                ty = yOrigin - yOriginOld;
                cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
                cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
            } else cache.xOffset = cache.yOffset = 0;
            cache.xOrigin = xOrigin;
            cache.yOrigin = yOrigin;
            cache.smooth = !!smooth;
            cache.origin = origin;
            cache.originIsAbsolute = !!originIsAbsolute;
            target.style[_transformOriginProp] = "0px 0px";
            if (pluginToAddPropTweensTo) {
                _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
                _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
                _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
                _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
            }
            target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
        }, _parseTransform = function _parseTransform(target, uncache) {
            var cache = target._gsap || new GSCache(target);
            if ("x" in cache && !uncache && !cache.uncache) return cache;
            var x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32, style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0";
            x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
            scaleX = scaleY = 1;
            cache.svg = !!(target.getCTM && _isSVG(target));
            matrix = _getMatrix(target, cache.svg);
            if (cache.svg) {
                t1 = (!cache.uncache || "0px 0px" === origin) && !uncache && target.getAttribute("data-svg-origin");
                _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, false !== cache.smooth, matrix);
            }
            xOrigin = cache.xOrigin || 0;
            yOrigin = cache.yOrigin || 0;
            if (matrix !== _identity2DMatrix) {
                a = matrix[0];
                b = matrix[1];
                c = matrix[2];
                d = matrix[3];
                x = a12 = matrix[4];
                y = a22 = matrix[5];
                if (6 === matrix.length) {
                    scaleX = Math.sqrt(a * a + b * b);
                    scaleY = Math.sqrt(d * d + c * c);
                    rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
                    skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
                    skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
                    if (cache.svg) {
                        x -= xOrigin - (xOrigin * a + yOrigin * c);
                        y -= yOrigin - (xOrigin * b + yOrigin * d);
                    }
                } else {
                    a32 = matrix[6];
                    a42 = matrix[7];
                    a13 = matrix[8];
                    a23 = matrix[9];
                    a33 = matrix[10];
                    a43 = matrix[11];
                    x = matrix[12];
                    y = matrix[13];
                    z = matrix[14];
                    angle = _atan2(a32, a33);
                    rotationX = angle * _RAD2DEG;
                    if (angle) {
                        cos = Math.cos(-angle);
                        sin = Math.sin(-angle);
                        t1 = a12 * cos + a13 * sin;
                        t2 = a22 * cos + a23 * sin;
                        t3 = a32 * cos + a33 * sin;
                        a13 = a12 * -sin + a13 * cos;
                        a23 = a22 * -sin + a23 * cos;
                        a33 = a32 * -sin + a33 * cos;
                        a43 = a42 * -sin + a43 * cos;
                        a12 = t1;
                        a22 = t2;
                        a32 = t3;
                    }
                    angle = _atan2(-c, a33);
                    rotationY = angle * _RAD2DEG;
                    if (angle) {
                        cos = Math.cos(-angle);
                        sin = Math.sin(-angle);
                        t1 = a * cos - a13 * sin;
                        t2 = b * cos - a23 * sin;
                        t3 = c * cos - a33 * sin;
                        a43 = d * sin + a43 * cos;
                        a = t1;
                        b = t2;
                        c = t3;
                    }
                    angle = _atan2(b, a);
                    rotation = angle * _RAD2DEG;
                    if (angle) {
                        cos = Math.cos(angle);
                        sin = Math.sin(angle);
                        t1 = a * cos + b * sin;
                        t2 = a12 * cos + a22 * sin;
                        b = b * cos - a * sin;
                        a22 = a22 * cos - a12 * sin;
                        a = t1;
                        a12 = t2;
                    }
                    if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                        rotationX = rotation = 0;
                        rotationY = 180 - rotationY;
                    }
                    scaleX = _round(Math.sqrt(a * a + b * b + c * c));
                    scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
                    angle = _atan2(a12, a22);
                    skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
                    perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
                }
                if (cache.svg) {
                    t1 = target.getAttribute("transform");
                    cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
                    t1 && target.setAttribute("transform", t1);
                }
            }
            if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) if (invertedScaleX) {
                scaleX *= -1;
                skewX += rotation <= 0 ? 180 : -180;
                rotation += rotation <= 0 ? 180 : -180;
            } else {
                scaleY *= -1;
                skewX += skewX <= 0 ? 180 : -180;
            }
            cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
            cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
            cache.z = z + px;
            cache.scaleX = _round(scaleX);
            cache.scaleY = _round(scaleY);
            cache.rotation = _round(rotation) + deg;
            cache.rotationX = _round(rotationX) + deg;
            cache.rotationY = _round(rotationY) + deg;
            cache.skewX = skewX + deg;
            cache.skewY = skewY + deg;
            cache.transformPerspective = perspective + px;
            if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
            cache.xOffset = cache.yOffset = 0;
            cache.force3D = _config.force3D;
            cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
            cache.uncache = 0;
            return cache;
        }, _firstTwoOnly = function _firstTwoOnly(value) {
            return (value = value.split(" "))[0] + " " + value[1];
        }, _addPxTranslate = function _addPxTranslate(target, start, value) {
            var unit = getUnit(start);
            return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
        }, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
            cache.z = "0px";
            cache.rotationY = cache.rotationX = "0deg";
            cache.force3D = 0;
            _renderCSSTransforms(ratio, cache);
        }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
            var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = "auto" === force3D && ratio && 1 !== ratio || true === force3D;
            if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
                var cos, angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle);
                angle = parseFloat(rotationX) * _DEG2RAD;
                cos = Math.cos(angle);
                x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
                y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
                z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
            }
            if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
            if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
            if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
            if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
            if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
            if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
            if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
            if (1 !== scaleX || 1 !== scaleY) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
            target.style[_transformProp] = transforms || "translate(0, 0)";
        }, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
            var a11, a21, a12, a22, temp, _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y);
            rotation = parseFloat(rotation);
            skewX = parseFloat(skewX);
            skewY = parseFloat(skewY);
            if (skewY) {
                skewY = parseFloat(skewY);
                skewX += skewY;
                rotation += skewY;
            }
            if (rotation || skewX) {
                rotation *= _DEG2RAD;
                skewX *= _DEG2RAD;
                a11 = Math.cos(rotation) * scaleX;
                a21 = Math.sin(rotation) * scaleX;
                a12 = Math.sin(rotation - skewX) * -scaleY;
                a22 = Math.cos(rotation - skewX) * scaleY;
                if (skewX) {
                    skewY *= _DEG2RAD;
                    temp = Math.tan(skewX - skewY);
                    temp = Math.sqrt(1 + temp * temp);
                    a12 *= temp;
                    a22 *= temp;
                    if (skewY) {
                        temp = Math.tan(skewY);
                        temp = Math.sqrt(1 + temp * temp);
                        a11 *= temp;
                        a21 *= temp;
                    }
                }
                a11 = _round(a11);
                a21 = _round(a21);
                a12 = _round(a12);
                a22 = _round(a22);
            } else {
                a11 = scaleX;
                a22 = scaleY;
                a21 = a12 = 0;
            }
            if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
                tx = _convertToUnit(target, "x", x, "px");
                ty = _convertToUnit(target, "y", y, "px");
            }
            if (xOrigin || yOrigin || xOffset || yOffset) {
                tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
                ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
            }
            if (xPercent || yPercent) {
                temp = target.getBBox();
                tx = _round(tx + xPercent / 100 * temp.width);
                ty = _round(ty + yPercent / 100 * temp.height);
            }
            temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
            target.setAttribute("transform", temp);
            forceCSS && (target.style[_transformProp] = temp);
        }, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
            var direction, pt, cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = relative ? endNum * relative : endNum - startNum, finalValue = startNum + change + "deg";
            if (isString) {
                direction = endValue.split("_")[1];
                if ("short" === direction) {
                    change %= cap;
                    if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
                }
                if ("cw" === direction && change < 0) change = (change + cap * CSSPlugin_bigNum) % cap - ~~(change / cap) * cap; else if ("ccw" === direction && change > 0) change = (change - cap * CSSPlugin_bigNum) % cap - ~~(change / cap) * cap;
            }
            plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
            pt.e = finalValue;
            pt.u = "deg";
            plugin._props.push(property);
            return pt;
        }, _assign = function _assign(target, source) {
            for (var p in source) target[p] = source[p];
            return target;
        }, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
            var endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit, startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style;
            if (startCache.svg) {
                startValue = target.getAttribute("transform");
                target.setAttribute("transform", "");
                style[_transformProp] = transforms;
                endCache = _parseTransform(target, 1);
                _removeProperty(target, _transformProp);
                target.setAttribute("transform", startValue);
            } else {
                startValue = getComputedStyle(target)[_transformProp];
                style[_transformProp] = transforms;
                endCache = _parseTransform(target, 1);
                style[_transformProp] = startValue;
            }
            for (p in _transformProps) {
                startValue = startCache[p];
                endValue = endCache[p];
                if (startValue !== endValue && exclude.indexOf(p) < 0) {
                    startUnit = getUnit(startValue);
                    endUnit = getUnit(endValue);
                    startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
                    endNum = parseFloat(endValue);
                    plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
                    plugin._pt.u = endUnit || 0;
                    plugin._props.push(p);
                }
            }
            _assign(endCache, startCache);
        };
        _forEachName("padding,margin,Width,Radius", (function(name, index) {
            var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [ t, r, b, l ] : [ t + l, t + r, b + r, b + l ]).map((function(side) {
                return index < 2 ? name + side : "border" + side + name;
            }));
            _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
                var a, vars;
                if (arguments.length < 4) {
                    a = props.map((function(prop) {
                        return _get(plugin, prop, property);
                    }));
                    vars = a.join(" ");
                    return 5 === vars.split(a[0]).length ? a[0] : vars;
                }
                a = (endValue + "").split(" ");
                vars = {};
                props.forEach((function(prop, i) {
                    return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
                }));
                plugin.init(target, vars, tween);
            };
        }));
        var CSSPlugin = {
            name: "css",
            register: _initCore,
            targetTest: function targetTest(target) {
                return target.style && target.nodeType;
            },
            init: function init(target, vars, tween, index, targets) {
                var startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, props = this._props, style = target.style, startAt = tween.vars.startAt;
                _pluginInitted || _initCore();
                for (p in vars) {
                    if ("autoRound" === p) continue;
                    endValue = vars[p];
                    if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) continue;
                    type = typeof endValue;
                    specialProp = _specialProps[p];
                    if ("function" === type) {
                        endValue = endValue.call(tween, index, target, targets);
                        type = typeof endValue;
                    }
                    if ("string" === type && ~endValue.indexOf("random(")) endValue = _replaceRandom(endValue);
                    if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1); else if ("--" === p.substr(0, 2)) {
                        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                        endValue += "";
                        _colorExp.lastIndex = 0;
                        if (!_colorExp.test(startValue)) {
                            startUnit = getUnit(startValue);
                            endUnit = getUnit(endValue);
                        }
                        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                        props.push(p);
                    } else if ("undefined" !== type) {
                        if (startAt && p in startAt) {
                            startValue = "function" === typeof startAt[p] ? startAt[p].call(tween, index, target, targets) : startAt[p];
                            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
                            getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
                            "=" === (startValue + "").charAt(1) && (startValue = _get(target, p));
                        } else startValue = _get(target, p);
                        startNum = parseFloat(startValue);
                        relative = "string" === type && "=" === endValue.charAt(1) ? +(endValue.charAt(0) + "1") : 0;
                        relative && (endValue = endValue.substr(2));
                        endNum = parseFloat(endValue);
                        if (p in _propertyAliases) {
                            if ("autoAlpha" === p) {
                                if (1 === startNum && "hidden" === _get(target, "visibility") && endNum) startNum = 0;
                                _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                            }
                            if ("scale" !== p && "transform" !== p) {
                                p = _propertyAliases[p];
                                ~p.indexOf(",") && (p = p.split(",")[0]);
                            }
                        }
                        isTransformRelated = p in _transformProps;
                        if (isTransformRelated) {
                            if (!transformPropTween) {
                                cache = target._gsap;
                                cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                                smooth = false !== vars.smoothOrigin && cache.smooth;
                                transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                                transformPropTween.dep = 1;
                            }
                            if ("scale" === p) {
                                this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? relative * endNum : endNum - cache.scaleY) || 0);
                                props.push("scaleY", p);
                                p += "X";
                            } else if ("transformOrigin" === p) {
                                endValue = _convertKeywordsToPercentages(endValue);
                                if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this); else {
                                    endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                                    endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                                    _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                                }
                                continue;
                            } else if ("svgOrigin" === p) {
                                _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                                continue;
                            } else if (p in _rotationalProperties) {
                                _addRotationalPropTween(this, cache, p, startNum, endValue, relative);
                                continue;
                            } else if ("smoothOrigin" === p) {
                                _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                                continue;
                            } else if ("force3D" === p) {
                                cache[p] = endValue;
                                continue;
                            } else if ("transform" === p) {
                                _addRawTransformPTs(this, endValue, target);
                                continue;
                            }
                        } else if (!(p in style)) p = _checkPropPrefix(p) || p;
                        if (isTransformRelated || (endNum || 0 === endNum) && (startNum || 0 === startNum) && !_complexExp.test(endValue) && p in style) {
                            startUnit = (startValue + "").substr((startNum + "").length);
                            endNum || (endNum = 0);
                            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && ("px" === endUnit || "zIndex" === p) && false !== vars.autoRound ? _renderRoundedCSSProp : _renderCSSProp);
                            this._pt.u = endUnit || 0;
                            if (startUnit !== endUnit && "%" !== endUnit) {
                                this._pt.b = startValue;
                                this._pt.r = _renderCSSPropWithBeginning;
                            }
                        } else if (!(p in style)) if (p in target) this.add(target, p, startValue || target[p], endValue, index, targets); else {
                            _missingPlugin(p, endValue);
                            continue;
                        } else _tweenComplexCSSString.call(this, target, p, startValue, endValue);
                        props.push(p);
                    }
                }
                hasPriority && _sortPropTweensByPriority(this);
            },
            get: _get,
            aliases: _propertyAliases,
            getSetter: function getSetter(target, property, plugin) {
                var p = _propertyAliases[property];
                p && p.indexOf(",") < 0 && (property = p);
                return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? "scale" === property ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && ("scale" === property ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
            },
            core: {
                _removeProperty,
                _getMatrix
            }
        };
        gsap.utils.checkPrefix = _checkPropPrefix;
        (function(positionAndScale, rotation, others, aliases) {
            var all = _forEachName(positionAndScale + "," + rotation + "," + others, (function(name) {
                _transformProps[name] = 1;
            }));
            _forEachName(rotation, (function(name) {
                _config.units[name] = "deg";
                _rotationalProperties[name] = 1;
            }));
            _propertyAliases[all[13]] = positionAndScale + "," + rotation;
            _forEachName(aliases, (function(name) {
                var split = name.split(":");
                _propertyAliases[split[1]] = all[split[0]];
            }));
        })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
        _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(name) {
            _config.units[name] = "px";
        }));
        gsap.registerPlugin(CSSPlugin);
        var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
        gsapWithCSS.core.Tween;
        /*!
 * matrix 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
        var matrix_doc, matrix_win, matrix_docElement, _body, _divContainer, _svgContainer, _identityMatrix, _gEl, _hasOffsetBug, matrix_transformProp = "transform", matrix_transformOriginProp = matrix_transformProp + "Origin", _setDoc = function _setDoc(element) {
            var doc = element.ownerDocument || element;
            if (!(matrix_transformProp in element.style) && "msTransform" in element.style) {
                matrix_transformProp = "msTransform";
                matrix_transformOriginProp = matrix_transformProp + "Origin";
            }
            while (doc.parentNode && (doc = doc.parentNode)) ;
            matrix_win = window;
            _identityMatrix = new Matrix2D;
            if (doc) {
                matrix_doc = doc;
                matrix_docElement = doc.documentElement;
                _body = doc.body;
                _gEl = matrix_doc.createElementNS("http://www.w3.org/2000/svg", "g");
                _gEl.style.transform = "none";
                var d1 = doc.createElement("div"), d2 = doc.createElement("div");
                _body.appendChild(d1);
                d1.appendChild(d2);
                d1.style.position = "static";
                d1.style[matrix_transformProp] = "translate3d(0,0,1px)";
                _hasOffsetBug = d2.offsetParent !== d1;
                _body.removeChild(d1);
            }
            return doc;
        }, _forceNonZeroScale = function _forceNonZeroScale(e) {
            var a, cache;
            while (e && e !== _body) {
                cache = e._gsap;
                cache && cache.uncache && cache.get(e, "x");
                if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
                    cache.scaleX = cache.scaleY = 1e-4;
                    cache.renderTransform(1, cache);
                    a ? a.push(cache) : a = [ cache ];
                }
                e = e.parentNode;
            }
            return a;
        }, _svgTemps = [], _divTemps = [], _getDocScrollTop = function _getDocScrollTop() {
            return matrix_win.pageYOffset || matrix_doc.scrollTop || matrix_docElement.scrollTop || _body.scrollTop || 0;
        }, _getDocScrollLeft = function _getDocScrollLeft() {
            return matrix_win.pageXOffset || matrix_doc.scrollLeft || matrix_docElement.scrollLeft || _body.scrollLeft || 0;
        }, _svgOwner = function _svgOwner(element) {
            return element.ownerSVGElement || ("svg" === (element.tagName + "").toLowerCase() ? element : null);
        }, _isFixed = function _isFixed(element) {
            if ("fixed" === matrix_win.getComputedStyle(element).position) return true;
            element = element.parentNode;
            if (element && 1 === element.nodeType) return _isFixed(element);
        }, _createSibling = function _createSibling(element, i) {
            if (element.parentNode && (matrix_doc || _setDoc(element))) {
                var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i ? "rect" : "g" : "div", x = 2 !== i ? 0 : 100, y = 3 === i ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e = matrix_doc.createElementNS ? matrix_doc.createElementNS(ns.replace(/^https/, "http"), type) : matrix_doc.createElement(type);
                if (i) if (!svg) {
                    if (!_divContainer) {
                        _divContainer = _createSibling(element);
                        _divContainer.style.cssText = css;
                    }
                    e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
                    _divContainer.appendChild(e);
                } else {
                    _svgContainer || (_svgContainer = _createSibling(element));
                    e.setAttribute("width", .01);
                    e.setAttribute("height", .01);
                    e.setAttribute("transform", "translate(" + x + "," + y + ")");
                    _svgContainer.appendChild(e);
                }
                return e;
            }
            throw "Need document and parent.";
        }, _consolidate = function _consolidate(m) {
            var c = new Matrix2D, i = 0;
            for (;i < m.numberOfItems; i++) c.multiply(m.getItem(i).matrix);
            return c;
        }, _getCTM = function _getCTM(svg) {
            var transform, m = svg.getCTM();
            if (!m) {
                transform = svg.style[matrix_transformProp];
                svg.style[matrix_transformProp] = "none";
                svg.appendChild(_gEl);
                m = _gEl.getCTM();
                svg.removeChild(_gEl);
                transform ? svg.style[matrix_transformProp] = transform : svg.style.removeProperty(matrix_transformProp.replace(/([A-Z])/g, "-$1").toLowerCase());
            }
            return m || _identityMatrix.clone();
        }, _placeSiblings = function _placeSiblings(element, adjustGOffset) {
            var container, m, b, x, y, cs, svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode;
            if (element === matrix_win) return element;
            siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
            container = svg ? _svgContainer : _divContainer;
            if (svg) {
                if (isRootSVG) {
                    b = _getCTM(element);
                    x = -b.e / b.a;
                    y = -b.f / b.d;
                    m = _identityMatrix;
                } else {
                    b = element.getBBox();
                    m = element.transform ? element.transform.baseVal : {};
                    m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
                    x = m.a * b.x + m.c * b.y;
                    y = m.b * b.x + m.d * b.y;
                }
                if (adjustGOffset && "g" === element.tagName.toLowerCase()) x = y = 0;
                (isRootSVG ? svg : parent).appendChild(container);
                container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
            } else {
                x = y = 0;
                if (_hasOffsetBug) {
                    m = element.offsetParent;
                    b = element;
                    while (b && (b = b.parentNode) && b !== m && b.parentNode) if ((matrix_win.getComputedStyle(b)[matrix_transformProp] + "").length > 4) {
                        x = b.offsetLeft;
                        y = b.offsetTop;
                        b = 0;
                    }
                }
                cs = matrix_win.getComputedStyle(element);
                if ("absolute" !== cs.position && "fixed" !== cs.position) {
                    m = element.offsetParent;
                    while (parent && parent !== m) {
                        x += parent.scrollLeft || 0;
                        y += parent.scrollTop || 0;
                        parent = parent.parentNode;
                    }
                }
                b = container.style;
                b.top = element.offsetTop - y + "px";
                b.left = element.offsetLeft - x + "px";
                b[matrix_transformProp] = cs[matrix_transformProp];
                b[matrix_transformOriginProp] = cs[matrix_transformOriginProp];
                b.position = "fixed" === cs.position ? "fixed" : "absolute";
                element.parentNode.appendChild(container);
            }
            return container;
        }, _setMatrix = function _setMatrix(m, a, b, c, d, e, f) {
            m.a = a;
            m.b = b;
            m.c = c;
            m.d = d;
            m.e = e;
            m.f = f;
            return m;
        };
        var Matrix2D = function() {
            function Matrix2D(a, b, c, d, e, f) {
                if (void 0 === a) a = 1;
                if (void 0 === b) b = 0;
                if (void 0 === c) c = 0;
                if (void 0 === d) d = 1;
                if (void 0 === e) e = 0;
                if (void 0 === f) f = 0;
                _setMatrix(this, a, b, c, d, e, f);
            }
            var _proto = Matrix2D.prototype;
            _proto.inverse = function inverse() {
                var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, determinant = a * d - b * c || 1e-10;
                return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
            };
            _proto.multiply = function multiply(matrix) {
                var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c2 = matrix.b, d2 = matrix.d, e2 = matrix.e, f2 = matrix.f;
                return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
            };
            _proto.clone = function clone() {
                return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
            };
            _proto.equals = function equals(matrix) {
                var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
                return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
            };
            _proto.apply = function apply(point, decoratee) {
                if (void 0 === decoratee) decoratee = {};
                var x = point.x, y = point.y, a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
                decoratee.x = x * a + y * c + e || 0;
                decoratee.y = x * b + y * d + f || 0;
                return decoratee;
            };
            return Matrix2D;
        }();
        function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
            if (!element || !element.parentNode || (matrix_doc || _setDoc(element)).documentElement === element) return new Matrix2D;
            var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
            parent.removeChild(container);
            if (zeroScales) {
                b1 = zeroScales.length;
                while (b1--) {
                    b2 = zeroScales[b1];
                    b2.scaleX = b2.scaleY = 0;
                    b2.renderTransform(1, b2);
                }
            }
            return inverse ? m.inverse() : m;
        }
        /*!
 * Flip 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
        var _toArray, Flip_gsap, _batch, _batchAction, Flip_body, _closestTenth, _bodyLocked, _id = 1, _forEachBatch = function _forEachBatch(batch, name) {
            return batch.actions.forEach((function(a) {
                return a.vars[name] && a.vars[name](a);
            }));
        }, _batchLookup = {}, Flip_RAD2DEG = 180 / Math.PI, Flip_DEG2RAD = Math.PI / 180, _emptyObj = {}, _dashedNameLookup = {}, _memoizedRemoveProps = {}, _listToArray = function _listToArray(list) {
            return "string" === typeof list ? list.split(" ").join("").split(",") : list;
        }, _callbacks = _listToArray("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), _removeProps = _listToArray("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), _getEl = function _getEl(target) {
            return _toArray(target)[0] || console.warn("Element not found:", target);
        }, Flip_round = function _round(value) {
            return Math.round(1e4 * value) / 1e4 || 0;
        }, _toggleClass = function _toggleClass(targets, className, action) {
            return targets.forEach((function(el) {
                return el.classList[action](className);
            }));
        }, _reserved = {
            zIndex: 1,
            kill: 1,
            simple: 1,
            spin: 1,
            clearProps: 1,
            targets: 1,
            toggleClass: 1,
            onComplete: 1,
            onUpdate: 1,
            onInterrupt: 1,
            onStart: 1,
            delay: 1,
            repeat: 1,
            repeatDelay: 1,
            yoyo: 1,
            scale: 1,
            fade: 1,
            absolute: 1,
            props: 1,
            onEnter: 1,
            onLeave: 1,
            custom: 1,
            paused: 1,
            nested: 1,
            prune: 1,
            absoluteOnLeave: 1
        }, _fitReserved = {
            zIndex: 1,
            simple: 1,
            clearProps: 1,
            scale: 1,
            absolute: 1,
            fitChild: 1,
            getVars: 1,
            props: 1
        }, _camelToDashed = function _camelToDashed(p) {
            return p.replace(/([A-Z])/g, "-$1").toLowerCase();
        }, _copy = function _copy(obj, exclude) {
            var p, result = {};
            for (p in obj) exclude[p] || (result[p] = obj[p]);
            return result;
        }, _memoizedProps = {}, _memoizeProps = function _memoizeProps(props) {
            var p = _memoizedProps[props] = _listToArray(props);
            _memoizedRemoveProps[props] = p.concat(_removeProps);
            return p;
        }, _getInverseGlobalMatrix = function _getInverseGlobalMatrix(el) {
            var cache = el._gsap || Flip_gsap.core.getCache(el);
            if (cache.gmCache === Flip_gsap.ticker.frame) return cache.gMatrix;
            cache.gmCache = Flip_gsap.ticker.frame;
            return cache.gMatrix = getGlobalMatrix(el, true, false, true);
        }, _getDOMDepth = function _getDOMDepth(el, invert, level) {
            if (void 0 === level) level = 0;
            var parent = el.parentNode, inc = 1e3 * Math.pow(10, level) * (invert ? -1 : 1), l = invert ? 900 * -inc : 0;
            while (el) {
                l += inc;
                el = el.previousSibling;
            }
            return parent ? l + _getDOMDepth(parent, invert, level + 1) : l;
        }, _orderByDOMDepth = function _orderByDOMDepth(comps, invert, isElStates) {
            comps.forEach((function(comp) {
                return comp.d = _getDOMDepth(isElStates ? comp.element : comp.t, invert);
            }));
            comps.sort((function(c1, c2) {
                return c1.d - c2.d;
            }));
            return comps;
        }, _recordInlineStyles = function _recordInlineStyles(elState, props) {
            var p, v, style = elState.element.style, a = elState.css = elState.css || [], i = props.length;
            while (i--) {
                p = props[i];
                v = style[p] || style.getPropertyValue(p);
                a.push(v ? p : _dashedNameLookup[p] || (_dashedNameLookup[p] = _camelToDashed(p)), v);
            }
            return style;
        }, _applyInlineStyles = function _applyInlineStyles(state) {
            var css = state.css, style = state.element.style, i = 0;
            state.cache.uncache = 1;
            for (;i < css.length; i += 2) css[i + 1] ? style[css[i]] = css[i + 1] : style.removeProperty(css[i]);
        }, _setFinalStates = function _setFinalStates(comps, onlyTransforms) {
            comps.forEach((function(c) {
                return c.a.cache.uncache = 1;
            }));
            onlyTransforms || comps.finalStates.forEach(_applyInlineStyles);
        }, _absoluteProps = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), _makeAbsolute = function _makeAbsolute(elState, fallbackNode, ignoreBatch) {
            var result, displayIsNone, cs, element = elState.element, width = elState.width, height = elState.height, uncache = elState.uncache, getProp = elState.getProp, style = element.style, i = 4;
            "object" !== typeof fallbackNode && (fallbackNode = elState);
            if (_batch && 1 !== ignoreBatch) {
                _batch._abs.push({
                    t: element,
                    b: elState,
                    a: elState,
                    sd: 0
                });
                _batch._final.push((function() {
                    return (elState.cache.uncache = 1) && _applyInlineStyles(elState);
                }));
                return element;
            }
            displayIsNone = "none" === getProp("display");
            if (!elState.isVisible || displayIsNone) {
                displayIsNone && (_recordInlineStyles(elState, [ "display" ]).display = fallbackNode.display);
                elState.matrix = fallbackNode.matrix;
                elState.width = width = elState.width || fallbackNode.width;
                elState.height = height = elState.height || fallbackNode.height;
            }
            _recordInlineStyles(elState, _absoluteProps);
            cs = window.getComputedStyle(element);
            while (i--) style[_absoluteProps[i]] = cs[_absoluteProps[i]];
            style.gridArea = "1 / 1 / 1 / 1";
            style.transition = "none";
            style.position = "absolute";
            style.width = width + "px";
            style.height = height + "px";
            style.top || (style.top = "0px");
            style.left || (style.left = "0px");
            if (uncache) result = new ElementState(element); else {
                result = _copy(elState, _emptyObj);
                result.position = "absolute";
                if (elState.simple) {
                    var bounds = element.getBoundingClientRect();
                    result.matrix = new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop());
                } else result.matrix = getGlobalMatrix(element, false, false, true);
            }
            result = _fit(result, elState, true);
            elState.x = _closestTenth(result.x, .01);
            elState.y = _closestTenth(result.y, .01);
            return element;
        }, _filterComps = function _filterComps(comps, targets) {
            if (true !== targets) {
                targets = _toArray(targets);
                comps = comps.filter((function(c) {
                    if (-1 !== targets.indexOf((c.sd < 0 ? c.b : c.a).element)) return true; else {
                        c.t._gsap.renderTransform(1);
                        c.t.style.width = c.b.width + "px";
                        c.t.style.height = c.b.height + "px";
                    }
                }));
            }
            return comps;
        }, _makeCompsAbsolute = function _makeCompsAbsolute(comps) {
            return _orderByDOMDepth(comps, true).forEach((function(c) {
                return (c.a.isVisible || c.b.isVisible) && _makeAbsolute(c.sd < 0 ? c.b : c.a, c.b, 1);
            }));
        }, _findElStateInState = function _findElStateInState(state, other) {
            return other && state.idLookup[_parseElementState(other).id] || state.elementStates[0];
        }, _parseElementState = function _parseElementState(elOrNode, props, simple, other) {
            return elOrNode instanceof ElementState ? elOrNode : elOrNode instanceof FlipState ? _findElStateInState(elOrNode, other) : new ElementState("string" === typeof elOrNode ? _getEl(elOrNode) || console.warn(elOrNode + " not found") : elOrNode, props, simple);
        }, _recordProps = function _recordProps(elState, props) {
            var getProp = Flip_gsap.getProperty(elState.element, null, "native"), obj = elState.props = {}, i = props.length;
            while (i--) obj[props[i]] = (getProp(props[i]) + "").trim();
            obj.zIndex && (obj.zIndex = parseFloat(obj.zIndex) || 0);
            return elState;
        }, _applyProps = function _applyProps(element, props) {
            var p, style = element.style || element;
            for (p in props) style[p] = props[p];
        }, _getID = function _getID(el) {
            var id = el.getAttribute("data-flip-id");
            id || el.setAttribute("data-flip-id", id = "auto-" + _id++);
            return id;
        }, _elementsFromElementStates = function _elementsFromElementStates(elStates) {
            return elStates.map((function(elState) {
                return elState.element;
            }));
        }, _handleCallback = function _handleCallback(callback, elStates, tl) {
            return callback && elStates.length && tl.add(callback(_elementsFromElementStates(elStates), tl, new FlipState(elStates, 0, true)), 0);
        }, _fit = function _fit(fromState, toState, scale, applyProps, fitChild, vars) {
            var skewX, fromPoint, toPoint, getProp, parentMatrix, matrix, bbox, element = fromState.element, cache = fromState.cache, parent = fromState.parent, x = fromState.x, y = fromState.y, width = toState.width, height = toState.height, scaleX = toState.scaleX, scaleY = toState.scaleY, rotation = toState.rotation, bounds = toState.bounds, cssText = vars && element.style.cssText, transform = vars && element.getBBox && element.getAttribute("transform"), dimensionState = fromState, _toState$matrix = toState.matrix, e = _toState$matrix.e, f = _toState$matrix.f, deep = fromState.bounds.width !== bounds.width || fromState.bounds.height !== bounds.height || fromState.scaleX !== scaleX || fromState.scaleY !== scaleY || fromState.rotation !== rotation, simple = !deep && fromState.simple && toState.simple && !fitChild;
            if (simple) {
                scaleX = scaleY = 1;
                rotation = skewX = 0;
            } else {
                parentMatrix = _getInverseGlobalMatrix(parent);
                matrix = parentMatrix.clone().multiply(toState.ctm ? toState.matrix.clone().multiply(toState.ctm) : toState.matrix);
                rotation = Flip_round(Math.atan2(matrix.b, matrix.a) * Flip_RAD2DEG);
                skewX = Flip_round(Math.atan2(matrix.c, matrix.d) * Flip_RAD2DEG + rotation) % 360;
                scaleX = Math.sqrt(Math.pow(matrix.a, 2) + Math.pow(matrix.b, 2));
                scaleY = Math.sqrt(Math.pow(matrix.c, 2) + Math.pow(matrix.d, 2)) * Math.cos(skewX * Flip_DEG2RAD);
                if (fitChild) {
                    fitChild = _toArray(fitChild)[0];
                    getProp = Flip_gsap.getProperty(fitChild);
                    bbox = fitChild.getBBox && "function" === typeof fitChild.getBBox && fitChild.getBBox();
                    dimensionState = {
                        scaleX: getProp("scaleX"),
                        scaleY: getProp("scaleY"),
                        width: bbox ? bbox.width : Math.ceil(parseFloat(getProp("width", "px"))),
                        height: bbox ? bbox.height : parseFloat(getProp("height", "px"))
                    };
                }
                cache.rotation = rotation + "deg";
                cache.skewX = skewX + "deg";
            }
            if (scale) {
                scaleX *= width === dimensionState.width || !dimensionState.width ? 1 : width / dimensionState.width;
                scaleY *= height === dimensionState.height || !dimensionState.height ? 1 : height / dimensionState.height;
                cache.scaleX = scaleX;
                cache.scaleY = scaleY;
            } else {
                width = _closestTenth(width * scaleX / dimensionState.scaleX, 0);
                height = _closestTenth(height * scaleY / dimensionState.scaleY, 0);
                element.style.width = width + "px";
                element.style.height = height + "px";
            }
            applyProps && _applyProps(element, toState.props);
            if (simple) {
                x += e - fromState.matrix.e;
                y += f - fromState.matrix.f;
            } else if (deep || parent !== toState.parent) {
                cache.renderTransform(1, cache);
                matrix = getGlobalMatrix(fitChild || element, false, false, true);
                fromPoint = parentMatrix.apply({
                    x: matrix.e,
                    y: matrix.f
                });
                toPoint = parentMatrix.apply({
                    x: e,
                    y: f
                });
                x += toPoint.x - fromPoint.x;
                y += toPoint.y - fromPoint.y;
            } else {
                parentMatrix.e = parentMatrix.f = 0;
                toPoint = parentMatrix.apply({
                    x: e - fromState.matrix.e,
                    y: f - fromState.matrix.f
                });
                x += toPoint.x;
                y += toPoint.y;
            }
            x = _closestTenth(x, .02);
            y = _closestTenth(y, .02);
            if (vars && !(vars instanceof ElementState)) {
                element.style.cssText = cssText;
                element.getBBox && element.setAttribute("transform", transform || "");
                cache.uncache = 1;
            } else {
                cache.x = x + "px";
                cache.y = y + "px";
                cache.renderTransform(1, cache);
            }
            if (vars) {
                vars.x = x;
                vars.y = y;
                vars.rotation = rotation;
                vars.skewX = skewX;
                if (scale) {
                    vars.scaleX = scaleX;
                    vars.scaleY = scaleY;
                } else {
                    vars.width = width;
                    vars.height = height;
                }
            }
            return vars || cache;
        }, _parseState = function _parseState(targetsOrState, vars) {
            return targetsOrState instanceof FlipState ? targetsOrState : new FlipState(targetsOrState, vars);
        }, _getChangingElState = function _getChangingElState(toState, fromState, id) {
            var to1 = toState.idLookup[id], to2 = toState.alt[id];
            return to2.isVisible && (!(fromState.getElementState(to2.element) || to2).isVisible || !to1.isVisible) ? to2 : to1;
        }, _bodyMetrics = [], _bodyProps = "width,height,overflowX,overflowY".split(","), _lockBodyScroll = function _lockBodyScroll(lock) {
            if (lock !== _bodyLocked) {
                var s = Flip_body.style, w = Flip_body.clientWidth === window.outerWidth, h = Flip_body.clientHeight === window.outerHeight, i = 4;
                if (lock && (w || h)) {
                    while (i--) _bodyMetrics[i] = s[_bodyProps[i]];
                    if (w) {
                        s.width = Flip_body.clientWidth + "px";
                        s.overflowY = "hidden";
                    }
                    if (h) {
                        s.height = Flip_body.clientHeight + "px";
                        s.overflowX = "hidden";
                    }
                    _bodyLocked = lock;
                } else if (_bodyLocked) {
                    while (i--) _bodyMetrics[i] ? s[_bodyProps[i]] = _bodyMetrics[i] : s.removeProperty(_camelToDashed(_bodyProps[i]));
                    _bodyLocked = lock;
                }
            }
        }, _fromTo = function _fromTo(fromState, toState, vars, relative) {
            fromState instanceof FlipState && toState instanceof FlipState || console.warn("Not a valid state object.");
            vars = vars || {};
            var v, p, endTime, i, el, comp, state, targets, finalStates, fromNode, toNode, run, a, b, _vars = vars, clearProps = _vars.clearProps, onEnter = _vars.onEnter, onLeave = _vars.onLeave, absolute = _vars.absolute, absoluteOnLeave = _vars.absoluteOnLeave, custom = _vars.custom, delay = _vars.delay, paused = _vars.paused, repeat = _vars.repeat, repeatDelay = _vars.repeatDelay, yoyo = _vars.yoyo, toggleClass = _vars.toggleClass, nested = _vars.nested, _zIndex = _vars.zIndex, scale = _vars.scale, fade = _vars.fade, stagger = _vars.stagger, spin = _vars.spin, prune = _vars.prune, props = ("props" in vars ? vars : fromState).props, tweenVars = _copy(vars, _reserved), animation = Flip_gsap.timeline({
                delay,
                paused,
                repeat,
                repeatDelay,
                yoyo
            }), remainingProps = tweenVars, entering = [], leaving = [], comps = [], swapOutTargets = [], spinNum = true === spin ? 1 : spin || 0, spinFunc = "function" === typeof spin ? spin : function() {
                return spinNum;
            }, interrupted = fromState.interrupted || toState.interrupted, addFunc = animation[1 !== relative ? "to" : "from"];
            for (p in toState.idLookup) {
                toNode = !toState.alt[p] ? toState.idLookup[p] : _getChangingElState(toState, fromState, p);
                el = toNode.element;
                fromNode = fromState.idLookup[p];
                fromState.alt[p] && el === fromNode.element && (fromState.alt[p].isVisible || !toNode.isVisible) && (fromNode = fromState.alt[p]);
                if (fromNode) {
                    comp = {
                        t: el,
                        b: fromNode,
                        a: toNode,
                        sd: fromNode.element === el ? 0 : toNode.isVisible ? 1 : -1
                    };
                    comps.push(comp);
                    if (comp.sd) {
                        if (comp.sd < 0) {
                            comp.b = toNode;
                            comp.a = fromNode;
                        }
                        interrupted && _recordInlineStyles(comp.b, props ? _memoizedRemoveProps[props] : _removeProps);
                        fade && comps.push(comp.swap = {
                            t: fromNode.element,
                            b: comp.b,
                            a: comp.a,
                            sd: -comp.sd,
                            swap: comp
                        });
                    }
                    el._flip = fromNode.element._flip = _batch ? _batch.timeline : animation;
                } else if (toNode.isVisible) {
                    comps.push({
                        t: el,
                        b: _copy(toNode, {
                            isVisible: 1
                        }),
                        a: toNode,
                        sd: 0
                    });
                    el._flip = _batch ? _batch.timeline : animation;
                }
            }
            props && (_memoizedProps[props] || _memoizeProps(props)).forEach((function(p) {
                return tweenVars[p] = function(i) {
                    return comps[i].a.props[p];
                };
            }));
            comps.finalStates = finalStates = [];
            run = function run() {
                _orderByDOMDepth(comps);
                _lockBodyScroll(true);
                for (i = 0; i < comps.length; i++) {
                    comp = comps[i];
                    a = comp.a;
                    b = comp.b;
                    if (prune && !a.isDifferent(b)) comps.splice(i--, 1); else {
                        el = comp.t;
                        nested && !(comp.sd < 0) && i && (a.matrix = getGlobalMatrix(el, false, false, true));
                        if (comp.sd || b.isVisible && a.isVisible) {
                            if (comp.sd < 0) {
                                state = new ElementState(el, props, fromState.simple);
                                _fit(state, a, scale, 0, 0, state);
                                state.matrix = getGlobalMatrix(el, false, false, true);
                                state.css = comp.b.css;
                                comp.a = a = state;
                                fade && (el.style.opacity = interrupted ? b.opacity : a.opacity);
                                stagger && swapOutTargets.push(el);
                            } else if (comp.sd > 0 && fade) el.style.opacity = interrupted ? a.opacity - b.opacity : "0";
                            _fit(a, b, scale, props);
                        } else if (b.isVisible !== a.isVisible) if (!b.isVisible) {
                            a.isVisible && entering.push(a);
                            comps.splice(i--, 1);
                        } else if (!a.isVisible) {
                            b.css = a.css;
                            leaving.push(b);
                            comps.splice(i--, 1);
                            absolute && nested && _fit(a, b, scale, props);
                        }
                        if (!scale) {
                            el.style.maxWidth = Math.max(a.width, b.width) + "px";
                            el.style.maxHeight = Math.max(a.height, b.height) + "px";
                            el.style.minWidth = Math.min(a.width, b.width) + "px";
                            el.style.minHeight = Math.min(a.height, b.height) + "px";
                        }
                        nested && toggleClass && el.classList.add(toggleClass);
                    }
                    finalStates.push(a);
                }
                var classTargets;
                if (toggleClass) {
                    classTargets = finalStates.map((function(s) {
                        return s.element;
                    }));
                    nested && classTargets.forEach((function(e) {
                        return e.classList.remove(toggleClass);
                    }));
                }
                _lockBodyScroll(false);
                if (scale) {
                    tweenVars.scaleX = function(i) {
                        return comps[i].a.scaleX;
                    };
                    tweenVars.scaleY = function(i) {
                        return comps[i].a.scaleY;
                    };
                } else {
                    tweenVars.width = function(i) {
                        return comps[i].a.width + "px";
                    };
                    tweenVars.height = function(i) {
                        return comps[i].a.height + "px";
                    };
                    tweenVars.autoRound = vars.autoRound || false;
                }
                tweenVars.x = function(i) {
                    return comps[i].a.x + "px";
                };
                tweenVars.y = function(i) {
                    return comps[i].a.y + "px";
                };
                tweenVars.rotation = function(i) {
                    return comps[i].a.rotation + (spin ? 360 * spinFunc(i, targets[i], targets) : 0);
                };
                tweenVars.skewX = function(i) {
                    return comps[i].a.skewX;
                };
                targets = comps.map((function(c) {
                    return c.t;
                }));
                if (_zIndex || 0 === _zIndex) {
                    tweenVars.modifiers = {
                        zIndex: function zIndex() {
                            return _zIndex;
                        }
                    };
                    tweenVars.zIndex = _zIndex;
                    tweenVars.immediateRender = false !== vars.immediateRender;
                }
                fade && (tweenVars.opacity = function(i) {
                    return comps[i].sd < 0 ? 0 : comps[i].sd > 0 ? comps[i].a.opacity : "+=0";
                });
                if (swapOutTargets.length) {
                    stagger = Flip_gsap.utils.distribute(stagger);
                    var dummyArray = targets.slice(swapOutTargets.length);
                    tweenVars.stagger = function(i, el) {
                        return stagger(~swapOutTargets.indexOf(el) ? targets.indexOf(comps[i].swap.t) : i, el, dummyArray);
                    };
                }
                _callbacks.forEach((function(name) {
                    return vars[name] && animation.eventCallback(name, vars[name], vars[name + "Params"]);
                }));
                if (custom && targets.length) {
                    remainingProps = _copy(tweenVars, _reserved);
                    if ("scale" in custom) {
                        custom.scaleX = custom.scaleY = custom.scale;
                        delete custom.scale;
                    }
                    for (p in custom) {
                        v = _copy(custom[p], _fitReserved);
                        v[p] = tweenVars[p];
                        !("duration" in v) && "duration" in tweenVars && (v.duration = tweenVars.duration);
                        v.stagger = tweenVars.stagger;
                        addFunc.call(animation, targets, v, 0);
                        delete remainingProps[p];
                    }
                }
                if (targets.length || leaving.length || entering.length) {
                    toggleClass && animation.add((function() {
                        return _toggleClass(classTargets, toggleClass, animation._zTime < 0 ? "remove" : "add");
                    }), 0) && !paused && _toggleClass(classTargets, toggleClass, "add");
                    targets.length && addFunc.call(animation, targets, remainingProps, 0);
                }
                _handleCallback(onEnter, entering, animation);
                _handleCallback(onLeave, leaving, animation);
                var batchTl = _batch && _batch.timeline;
                if (batchTl) {
                    batchTl.add(animation, 0);
                    _batch._final.push((function() {
                        return _setFinalStates(comps, !clearProps);
                    }));
                }
                endTime = animation.duration();
                animation.call((function() {
                    var forward = animation.time() >= endTime;
                    forward && !batchTl && _setFinalStates(comps, !clearProps);
                    toggleClass && _toggleClass(classTargets, toggleClass, forward ? "remove" : "add");
                }));
            };
            absoluteOnLeave && (absolute = comps.filter((function(comp) {
                return !comp.sd && !comp.a.isVisible && comp.b.isVisible;
            })).map((function(comp) {
                return comp.a.element;
            })));
            if (_batch) {
                var _batch$_abs;
                absolute && (_batch$_abs = _batch._abs).push.apply(_batch$_abs, _filterComps(comps, absolute));
                _batch._run.push(run);
            } else {
                absolute && _makeCompsAbsolute(_filterComps(comps, absolute));
                run();
            }
            return _batch ? _batch.timeline : animation;
        }, Flip_interrupt = function _interrupt(tl) {
            tl.vars.onInterrupt && tl.vars.onInterrupt.apply(tl, tl.vars.onInterruptParams || []);
            tl.getChildren(true, false, true).forEach(_interrupt);
        }, _killFlip = function _killFlip(tl, action) {
            if (tl && tl.progress() < 1 && !tl.paused()) {
                if (action) {
                    Flip_interrupt(tl);
                    action < 2 && tl.progress(1);
                    tl.kill();
                }
                return true;
            }
        }, _createLookup = function _createLookup(state) {
            var elState, lookup = state.idLookup = {}, alt = state.alt = {}, elStates = state.elementStates, i = elStates.length;
            while (i--) {
                elState = elStates[i];
                lookup[elState.id] ? alt[elState.id] = elState : lookup[elState.id] = elState;
            }
        };
        var FlipState = function() {
            function FlipState(targets, vars, targetsAreElementStates) {
                this.props = vars && vars.props;
                this.simple = !!(vars && vars.simple);
                if (targetsAreElementStates) {
                    this.targets = _elementsFromElementStates(targets);
                    this.elementStates = targets;
                    _createLookup(this);
                } else {
                    this.targets = _toArray(targets);
                    var soft = vars && (false === vars.kill || vars.batch && !vars.kill);
                    _batch && !soft && _batch._kill.push(this);
                    this.update(soft || !!_batch);
                }
            }
            var _proto = FlipState.prototype;
            _proto.update = function update(soft) {
                var _this = this;
                this.elementStates = this.targets.map((function(el) {
                    return new ElementState(el, _this.props, _this.simple);
                }));
                _createLookup(this);
                this.interrupt(soft);
                this.recordInlineStyles();
                return this;
            };
            _proto.clear = function clear() {
                this.targets.length = this.elementStates.length = 0;
                _createLookup(this);
                return this;
            };
            _proto.fit = function fit(state, scale, nested) {
                var fromNode, toNode, elStatesInOrder = _orderByDOMDepth(this.elementStates.slice(0), false, true), toElStates = (state || this).idLookup, i = 0;
                for (;i < elStatesInOrder.length; i++) {
                    fromNode = elStatesInOrder[i];
                    nested && (fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true));
                    toNode = toElStates[fromNode.id];
                    toNode && _fit(fromNode, toNode, scale, true, 0, fromNode);
                    fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true);
                }
                return this;
            };
            _proto.getProperty = function getProperty(element, property) {
                var es = this.getElementState(element) || _emptyObj;
                return (property in es ? es : es.props || _emptyObj)[property];
            };
            _proto.add = function add(state) {
                var index, es, es2, i = state.targets.length, lookup = this.idLookup, alt = this.alt;
                while (i--) {
                    es = state.elementStates[i];
                    es2 = lookup[es.id];
                    if (es2 && (es.element === es2.element || alt[es.id] && alt[es.id].element === es.element)) {
                        index = this.elementStates.indexOf(es.element === es2.element ? es2 : alt[es.id]);
                        this.targets.splice(index, 1, state.targets[i]);
                        this.elementStates.splice(index, 1, es);
                    } else {
                        this.targets.push(state.targets[i]);
                        this.elementStates.push(es);
                    }
                }
                state.interrupted && (this.interrupted = true);
                state.simple || (this.simple = false);
                _createLookup(this);
                return this;
            };
            _proto.compare = function compare(state) {
                var s1, s2, p, el, s1Alt, s2Alt, c1, c2, l1 = state.idLookup, l2 = this.idLookup, unchanged = [], changed = [], enter = [], leave = [], targets = [], a1 = state.alt, a2 = this.alt, place = function place(s1, s2, el) {
                    return (s1.isVisible !== s2.isVisible ? s1.isVisible ? enter : leave : s1.isVisible ? changed : unchanged).push(el) && targets.push(el);
                }, placeIfDoesNotExist = function placeIfDoesNotExist(s1, s2, el) {
                    return targets.indexOf(el) < 0 && place(s1, s2, el);
                };
                for (p in l1) {
                    s1Alt = a1[p];
                    s2Alt = a2[p];
                    s1 = !s1Alt ? l1[p] : _getChangingElState(state, this, p);
                    el = s1.element;
                    s2 = l2[p];
                    if (s2Alt) {
                        c2 = s2.isVisible || !s2Alt.isVisible && el === s2.element ? s2 : s2Alt;
                        c1 = s1Alt && !s1.isVisible && !s1Alt.isVisible && c2.element === s1Alt.element ? s1Alt : s1;
                        if (c1.isVisible && c2.isVisible && c1.element !== c2.element) {
                            (c1.isDifferent(c2) ? changed : unchanged).push(c1.element, c2.element);
                            targets.push(c1.element, c2.element);
                        } else place(c1, c2, c1.element);
                        s1Alt && c1.element === s1Alt.element && (s1Alt = l1[p]);
                        placeIfDoesNotExist(c1.element !== s2.element && s1Alt ? s1Alt : c1, s2, s2.element);
                        placeIfDoesNotExist(s1Alt && s1Alt.element === s2Alt.element ? s1Alt : c1, s2Alt, s2Alt.element);
                        s1Alt && placeIfDoesNotExist(s1Alt, s2Alt.element === s1Alt.element ? s2Alt : s2, s1Alt.element);
                    } else {
                        !s2 ? enter.push(el) : !s2.isDifferent(s1) ? unchanged.push(el) : place(s1, s2, el);
                        s1Alt && placeIfDoesNotExist(s1Alt, s2, s1Alt.element);
                    }
                }
                for (p in l2) if (!l1[p]) {
                    leave.push(l2[p].element);
                    a2[p] && leave.push(a2[p].element);
                }
                return {
                    changed,
                    unchanged,
                    enter,
                    leave
                };
            };
            _proto.recordInlineStyles = function recordInlineStyles() {
                var props = _memoizedRemoveProps[this.props] || _removeProps, i = this.elementStates.length;
                while (i--) _recordInlineStyles(this.elementStates[i], props);
            };
            _proto.interrupt = function interrupt(soft) {
                var _this2 = this;
                var timelines = [];
                this.targets.forEach((function(t) {
                    var tl = t._flip, foundInProgress = _killFlip(tl, soft ? 0 : 1);
                    soft && foundInProgress && timelines.indexOf(tl) < 0 && tl.add((function() {
                        return _this2.updateVisibility();
                    }));
                    foundInProgress && timelines.push(tl);
                }));
                !soft && timelines.length && this.updateVisibility();
                this.interrupted || (this.interrupted = !!timelines.length);
            };
            _proto.updateVisibility = function updateVisibility() {
                this.elementStates.forEach((function(es) {
                    var b = es.element.getBoundingClientRect();
                    es.isVisible = !!(b.width || b.height || b.top || b.left);
                    es.uncache = 1;
                }));
            };
            _proto.getElementState = function getElementState(element) {
                return this.elementStates[this.targets.indexOf(_getEl(element))];
            };
            _proto.makeAbsolute = function makeAbsolute() {
                return _orderByDOMDepth(this.elementStates.slice(0), true, true).map(_makeAbsolute);
            };
            return FlipState;
        }();
        var ElementState = function() {
            function ElementState(element, props, simple) {
                this.element = element;
                this.update(props, simple);
            }
            var _proto2 = ElementState.prototype;
            _proto2.isDifferent = function isDifferent(state) {
                var b1 = this.bounds, b2 = state.bounds;
                return b1.top !== b2.top || b1.left !== b2.left || b1.width !== b2.width || b1.height !== b2.height || !this.matrix.equals(state.matrix) || this.opacity !== state.opacity || this.props && state.props && JSON.stringify(this.props) !== JSON.stringify(state.props);
            };
            _proto2.update = function update(props, simple) {
                var self = this, element = self.element, getProp = Flip_gsap.getProperty(element), cache = Flip_gsap.core.getCache(element), bounds = element.getBoundingClientRect(), bbox = element.getBBox && "function" === typeof element.getBBox && "svg" !== element.nodeName.toLowerCase() && element.getBBox(), m = simple ? new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop()) : getGlobalMatrix(element, false, false, true);
                self.getProp = getProp;
                self.element = element;
                self.id = _getID(element);
                self.matrix = m;
                self.cache = cache;
                self.bounds = bounds;
                self.isVisible = !!(bounds.width || bounds.height || bounds.left || bounds.top);
                self.display = getProp("display");
                self.position = getProp("position");
                self.parent = element.parentNode;
                self.x = getProp("x");
                self.y = getProp("y");
                self.scaleX = cache.scaleX;
                self.scaleY = cache.scaleY;
                self.rotation = getProp("rotation");
                self.skewX = getProp("skewX");
                self.opacity = getProp("opacity");
                self.width = bbox ? bbox.width : _closestTenth(getProp("width", "px"), .04);
                self.height = bbox ? bbox.height : _closestTenth(getProp("height", "px"), .04);
                props && _recordProps(self, _memoizedProps[props] || _memoizeProps(props));
                self.ctm = element.getCTM && "svg" === element.nodeName.toLowerCase() && _getCTM(element).inverse();
                self.simple = simple || 1 === Flip_round(m.a) && !Flip_round(m.b) && !Flip_round(m.c) && 1 === Flip_round(m.d);
                self.uncache = 0;
            };
            return ElementState;
        }();
        var FlipAction = function() {
            function FlipAction(vars, batch) {
                this.vars = vars;
                this.batch = batch;
                this.states = [];
                this.timeline = batch.timeline;
            }
            var _proto3 = FlipAction.prototype;
            _proto3.getStateById = function getStateById(id) {
                var i = this.states.length;
                while (i--) if (this.states[i].idLookup[id]) return this.states[i];
            };
            _proto3.kill = function kill() {
                this.batch.remove(this);
            };
            return FlipAction;
        }();
        var FlipBatch = function() {
            function FlipBatch(id) {
                this.id = id;
                this.actions = [];
                this._kill = [];
                this._final = [];
                this._abs = [];
                this._run = [];
                this.data = {};
                this.state = new FlipState;
                this.timeline = Flip_gsap.timeline();
            }
            var _proto4 = FlipBatch.prototype;
            _proto4.add = function add(config) {
                var result = this.actions.filter((function(action) {
                    return action.vars === config;
                }));
                if (result.length) return result[0];
                result = new FlipAction("function" === typeof config ? {
                    animate: config
                } : config, this);
                this.actions.push(result);
                return result;
            };
            _proto4.remove = function remove(action) {
                var i = this.actions.indexOf(action);
                i >= 0 && this.actions.splice(i, 1);
                return this;
            };
            _proto4.getState = function getState(merge) {
                var _this3 = this;
                var prevBatch = _batch, prevAction = _batchAction;
                _batch = this;
                this.state.clear();
                this._kill.length = 0;
                this.actions.forEach((function(action) {
                    if (action.vars.getState) {
                        action.states.length = 0;
                        _batchAction = action;
                        action.state = action.vars.getState(action);
                    }
                    merge && action.states.forEach((function(s) {
                        return _this3.state.add(s);
                    }));
                }));
                _batchAction = prevAction;
                _batch = prevBatch;
                this.killConflicts();
                return this;
            };
            _proto4.animate = function animate() {
                var _this4 = this;
                var finalStates, endTime, prevBatch = _batch, tl = this.timeline, i = this.actions.length;
                _batch = this;
                tl.clear();
                this._abs.length = this._final.length = this._run.length = 0;
                this.actions.forEach((function(a) {
                    a.vars.animate && a.vars.animate(a);
                    var s, result, onEnter = a.vars.onEnter, onLeave = a.vars.onLeave, targets = a.targets;
                    if (targets && targets.length && (onEnter || onLeave)) {
                        s = new FlipState;
                        a.states.forEach((function(state) {
                            return s.add(state);
                        }));
                        result = s.compare(Flip.getState(targets));
                        result.enter.length && onEnter && onEnter(result.enter);
                        result.leave.length && onLeave && onLeave(result.leave);
                    }
                }));
                _makeCompsAbsolute(this._abs);
                this._run.forEach((function(f) {
                    return f();
                }));
                endTime = tl.duration();
                finalStates = this._final.slice(0);
                tl.add((function() {
                    if (endTime <= tl.time()) {
                        finalStates.forEach((function(f) {
                            return f();
                        }));
                        _forEachBatch(_this4, "onComplete");
                    }
                }));
                _batch = prevBatch;
                while (i--) this.actions[i].vars.once && this.actions[i].kill();
                _forEachBatch(this, "onStart");
                tl.restart();
                return this;
            };
            _proto4.loadState = function loadState(done) {
                done || (done = function done() {
                    return 0;
                });
                var queue = [];
                this.actions.forEach((function(c) {
                    if (c.vars.loadState) {
                        var i, f = function f(targets) {
                            targets && (c.targets = targets);
                            i = queue.indexOf(f);
                            if (~i) {
                                queue.splice(i, 1);
                                queue.length || done();
                            }
                        };
                        queue.push(f);
                        c.vars.loadState(f);
                    }
                }));
                queue.length || done();
                return this;
            };
            _proto4.setState = function setState() {
                this.actions.forEach((function(c) {
                    return c.targets = c.vars.setState && c.vars.setState(c);
                }));
                return this;
            };
            _proto4.killConflicts = function killConflicts(soft) {
                this.state.interrupt(soft);
                this._kill.forEach((function(state) {
                    return state.interrupt(soft);
                }));
                return this;
            };
            _proto4.run = function run(skipGetState, merge) {
                var _this5 = this;
                if (this !== _batch) {
                    skipGetState || this.getState(merge);
                    this.loadState((function() {
                        if (!_this5._killed) {
                            _this5.setState();
                            _this5.animate();
                        }
                    }));
                }
                return this;
            };
            _proto4.clear = function clear(stateOnly) {
                this.state.clear();
                stateOnly || (this.actions.length = 0);
            };
            _proto4.getStateById = function getStateById(id) {
                var s, i = this.actions.length;
                while (i--) {
                    s = this.actions[i].getStateById(id);
                    if (s) return s;
                }
                return this.state.idLookup[id] && this.state;
            };
            _proto4.kill = function kill() {
                this._killed = 1;
                this.clear();
                delete _batchLookup[this.id];
            };
            return FlipBatch;
        }();
        var Flip = function() {
            function Flip() {}
            Flip.getState = function getState(targets, vars) {
                var state = _parseState(targets, vars);
                _batchAction && _batchAction.states.push(state);
                vars && vars.batch && Flip.batch(vars.batch).state.add(state);
                return state;
            };
            Flip.from = function from(state, vars) {
                vars = vars || {};
                "clearProps" in vars || (vars.clearProps = true);
                return _fromTo(state, _parseState(vars.targets || state.targets, {
                    props: vars.props || state.props,
                    simple: vars.simple,
                    kill: !!vars.kill
                }), vars, -1);
            };
            Flip.to = function to(state, vars) {
                return _fromTo(state, _parseState(vars.targets || state.targets, {
                    props: vars.props || state.props,
                    simple: vars.simple,
                    kill: !!vars.kill
                }), vars, 1);
            };
            Flip.fromTo = function fromTo(fromState, toState, vars) {
                return _fromTo(fromState, toState, vars);
            };
            Flip.fit = function fit(fromEl, toEl, vars) {
                var v = vars ? _copy(vars, _fitReserved) : {}, _ref = vars || v, absolute = _ref.absolute, scale = _ref.scale, getVars = _ref.getVars, props = _ref.props, runBackwards = _ref.runBackwards, onComplete = _ref.onComplete, simple = _ref.simple, fitChild = vars && vars.fitChild && _getEl(vars.fitChild), before = _parseElementState(toEl, props, simple, fromEl), after = _parseElementState(fromEl, 0, simple, before), inlineProps = props ? _memoizedRemoveProps[props] : _removeProps;
                props && _applyProps(v, before.props);
                if (runBackwards) {
                    _recordInlineStyles(after, inlineProps);
                    "immediateRender" in v || (v.immediateRender = true);
                    v.onComplete = function() {
                        _applyInlineStyles(after);
                        onComplete && onComplete.apply(this, arguments);
                    };
                }
                absolute && _makeAbsolute(after, before);
                v = _fit(after, before, scale || fitChild, props, fitChild, v.duration || getVars ? v : 0);
                return getVars ? v : v.duration ? Flip_gsap.to(after.element, v) : null;
            };
            Flip.makeAbsolute = function makeAbsolute(targetsOrStates, vars) {
                return (targetsOrStates instanceof FlipState ? targetsOrStates : new FlipState(targetsOrStates, vars)).makeAbsolute();
            };
            Flip.batch = function batch(id) {
                id || (id = "default");
                return _batchLookup[id] || (_batchLookup[id] = new FlipBatch(id));
            };
            Flip.killFlipsOf = function killFlipsOf(targets, complete) {
                (targets instanceof FlipState ? targets.targets : _toArray(targets)).forEach((function(t) {
                    return t && _killFlip(t._flip, false !== complete ? 1 : 2);
                }));
            };
            Flip.isFlipping = function isFlipping(target) {
                var f = Flip.getByTarget(target);
                return !!f && f.isActive();
            };
            Flip.getByTarget = function getByTarget(target) {
                return (_getEl(target) || _emptyObj)._flip;
            };
            Flip.getElementState = function getElementState(target, props) {
                return new ElementState(_getEl(target), props);
            };
            Flip.convertCoordinates = function convertCoordinates(fromElement, toElement, point) {
                var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
                return point ? m.apply(point) : m;
            };
            Flip.register = function register(core) {
                Flip_body = "undefined" !== typeof document && document.body;
                if (Flip_body) {
                    Flip_gsap = core;
                    _setDoc(Flip_body);
                    _toArray = Flip_gsap.utils.toArray;
                    var snap = Flip_gsap.utils.snap(.1);
                    _closestTenth = function _closestTenth(value, add) {
                        return snap(parseFloat(value) + add);
                    };
                }
            };
            return Flip;
        }();
        Flip.version = "3.9.1";
        "undefined" !== typeof window && window.gsap && window.gsap.registerPlugin(Flip);
        /*!
 * ScrollTrigger 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
        var ScrollTrigger_gsap, ScrollTrigger_coreInitted, ScrollTrigger_win, ScrollTrigger_doc, _docEl, ScrollTrigger_body, _root, _resizeDelay, ScrollTrigger_toArray, ScrollTrigger_clamp, _time2, _syncInterval, _refreshing, _pointerIsDown, ScrollTrigger_transformProp, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, ScrollTrigger_suppressOverwrites, _ignoreResize, _limitCallbacks, _creatingMedia, _lastMediaTick, _refreshingAll, _startup = 1, _proxies = [], _scrollers = [], _getTime = Date.now, _time1 = _getTime(), _lastScrollTime = 0, _enabled = 1, ScrollTrigger_passThrough = function _passThrough(v) {
            return v;
        }, _getTarget = function _getTarget(t) {
            return ScrollTrigger_toArray(t)[0] || (ScrollTrigger_isString(t) && false !== ScrollTrigger_gsap.config().nullTargetWarn ? console.warn("Element not found:", t) : null);
        }, ScrollTrigger_round = function _round(value) {
            return Math.round(1e5 * value) / 1e5 || 0;
        }, ScrollTrigger_windowExists = function _windowExists() {
            return "undefined" !== typeof window;
        }, _getGSAP = function _getGSAP() {
            return ScrollTrigger_gsap || ScrollTrigger_windowExists() && (ScrollTrigger_gsap = window.gsap) && ScrollTrigger_gsap.registerPlugin && ScrollTrigger_gsap;
        }, _isViewport = function _isViewport(e) {
            return !!~_root.indexOf(e);
        }, _getProxyProp = function _getProxyProp(element, property) {
            return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
        }, _getScrollFunc = function _getScrollFunc(element, _ref) {
            var s = _ref.s, sc = _ref.sc;
            var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
            !~i && (i = _scrollers.push(element) - 1);
            return _scrollers[i + offset] || (_scrollers[i + offset] = _getProxyProp(element, s) || (_isViewport(element) ? sc : function(value) {
                return arguments.length ? element[s] = value : element[s];
            }));
        }, _getBoundsFunc = function _getBoundsFunc(element) {
            return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function() {
                _winOffsets.width = ScrollTrigger_win.innerWidth;
                _winOffsets.height = ScrollTrigger_win.innerHeight;
                return _winOffsets;
            } : function() {
                return _getBounds(element);
            });
        }, _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref2) {
            var d = _ref2.d, d2 = _ref2.d2, a = _ref2.a;
            return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
                return a()[d];
            } : function() {
                return (isViewport ? ScrollTrigger_win["inner" + d2] : scroller["client" + d2]) || 0;
            };
        }, _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
            return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
                return _winOffsets;
            };
        }, _maxScroll = function _maxScroll(element, _ref3) {
            var s = _ref3.s, d2 = _ref3.d2, d = _ref3.d, a = _ref3.a;
            return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (ScrollTrigger_body[s] || _docEl[s]) - (ScrollTrigger_win["inner" + d2] || _docEl["client" + d2] || ScrollTrigger_body["client" + d2]) : element[s] - element["offset" + d2];
        }, _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
            for (var i = 0; i < _autoRefresh.length; i += 3) (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
        }, ScrollTrigger_isString = function _isString(value) {
            return "string" === typeof value;
        }, ScrollTrigger_isFunction = function _isFunction(value) {
            return "function" === typeof value;
        }, ScrollTrigger_isNumber = function _isNumber(value) {
            return "number" === typeof value;
        }, ScrollTrigger_isObject = function _isObject(value) {
            return "object" === typeof value;
        }, _callIfFunc = function _callIfFunc(value) {
            return ScrollTrigger_isFunction(value) && value();
        }, _combineFunc = function _combineFunc(f1, f2) {
            return function() {
                var result1 = _callIfFunc(f1), result2 = _callIfFunc(f2);
                return function() {
                    _callIfFunc(result1);
                    _callIfFunc(result2);
                };
            };
        }, _endAnimation = function _endAnimation(animation, reversed, pause) {
            return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
        }, ScrollTrigger_callback = function _callback(self, func) {
            if (self.enabled) {
                var result = func(self);
                result && result.totalTime && (self.callbackAnimation = result);
            }
        }, _abs = Math.abs, _scrollLeft = "scrollLeft", _scrollTop = "scrollTop", _left = "left", _top = "top", _right = "right", _bottom = "bottom", _width = "width", _height = "height", _Right = "Right", _Left = "Left", _Top = "Top", _Bottom = "Bottom", _padding = "padding", _margin = "margin", _Width = "Width", _Height = "Height", _px = "px", _horizontal = {
            s: _scrollLeft,
            p: _left,
            p2: _Left,
            os: _right,
            os2: _Right,
            d: _width,
            d2: _Width,
            a: "x",
            sc: function sc(value) {
                return arguments.length ? ScrollTrigger_win.scrollTo(value, _vertical.sc()) : ScrollTrigger_win.pageXOffset || ScrollTrigger_doc[_scrollLeft] || _docEl[_scrollLeft] || ScrollTrigger_body[_scrollLeft] || 0;
            }
        }, _vertical = {
            s: _scrollTop,
            p: _top,
            p2: _Top,
            os: _bottom,
            os2: _Bottom,
            d: _height,
            d2: _Height,
            a: "y",
            op: _horizontal,
            sc: function sc(value) {
                return arguments.length ? ScrollTrigger_win.scrollTo(_horizontal.sc(), value) : ScrollTrigger_win.pageYOffset || ScrollTrigger_doc[_scrollTop] || _docEl[_scrollTop] || ScrollTrigger_body[_scrollTop] || 0;
            }
        }, _getComputedStyle = function _getComputedStyle(element) {
            return ScrollTrigger_win.getComputedStyle(element);
        }, _makePositionable = function _makePositionable(element) {
            var position = _getComputedStyle(element).position;
            element.style.position = "absolute" === position || "fixed" === position ? position : "relative";
        }, ScrollTrigger_setDefaults = function _setDefaults(obj, defaults) {
            for (var p in defaults) p in obj || (obj[p] = defaults[p]);
            return obj;
        }, _getBounds = function _getBounds(element, withoutTransforms) {
            var tween = withoutTransforms && "matrix(1, 0, 0, 1, 0, 0)" !== _getComputedStyle(element)[ScrollTrigger_transformProp] && ScrollTrigger_gsap.to(element, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1), bounds = element.getBoundingClientRect();
            tween && tween.progress(0).kill();
            return bounds;
        }, _getSize = function _getSize(element, _ref4) {
            var d2 = _ref4.d2;
            return element["offset" + d2] || element["client" + d2] || 0;
        }, _getLabelRatioArray = function _getLabelRatioArray(timeline) {
            var p, a = [], labels = timeline.labels, duration = timeline.duration();
            for (p in labels) a.push(labels[p] / duration);
            return a;
        }, _getClosestLabel = function _getClosestLabel(animation) {
            return function(value) {
                return ScrollTrigger_gsap.utils.snap(_getLabelRatioArray(animation), value);
            };
        }, _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
            var snap = ScrollTrigger_gsap.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort((function(a, b) {
                return a - b;
            }));
            return a ? function(value, direction, threshold) {
                if (void 0 === threshold) threshold = .001;
                var i;
                if (!direction) return snap(value);
                if (direction > 0) {
                    value -= threshold;
                    for (i = 0; i < a.length; i++) if (a[i] >= value) return a[i];
                    return a[i - 1];
                } else {
                    i = a.length;
                    value += threshold;
                    while (i--) if (a[i] <= value) return a[i];
                }
                return a[0];
            } : function(value, direction, threshold) {
                if (void 0 === threshold) threshold = .001;
                var snapped = snap(value);
                return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
            };
        }, _getLabelAtDirection = function _getLabelAtDirection(timeline) {
            return function(value, st) {
                return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
            };
        }, _multiListener = function _multiListener(func, element, types, callback) {
            return types.split(",").forEach((function(type) {
                return func(element, type, callback);
            }));
        }, _addListener = function _addListener(element, type, func) {
            return element.addEventListener(type, func, {
                passive: true
            });
        }, _removeListener = function _removeListener(element, type, func) {
            return element.removeEventListener(type, func);
        }, _markerDefaults = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        }, ScrollTrigger_defaults = {
            toggleActions: "play",
            anticipatePin: 0
        }, _keywords = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        }, _offsetToPx = function _offsetToPx(value, size) {
            if (ScrollTrigger_isString(value)) {
                var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
                if (~eqIndex) {
                    value.indexOf("%") > eqIndex && (relative *= size / 100);
                    value = value.substr(0, eqIndex - 1);
                }
                value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
            }
            return value;
        }, _createMarker = function _createMarker(type, name, container, direction, _ref5, offset, matchWidthEl, containerAnimation) {
            var startColor = _ref5.startColor, endColor = _ref5.endColor, fontSize = _ref5.fontSize, indent = _ref5.indent, fontWeight = _ref5.fontWeight;
            var e = ScrollTrigger_doc.createElement("div"), useFixedPosition = _isViewport(container) || "fixed" === _getProxyProp(container, "pinType"), isScroller = -1 !== type.indexOf("scroller"), parent = useFixedPosition ? ScrollTrigger_body : container, isStart = -1 !== type.indexOf("start"), color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
            (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
            matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
            e._isStart = isStart;
            e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
            e.style.cssText = css;
            e.innerText = name || 0 === name ? type + "-" + name : type;
            parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
            e._offset = e["offset" + direction.op.d2];
            _positionMarker(e, 0, direction, isStart);
            return e;
        }, _positionMarker = function _positionMarker(marker, start, direction, flipped) {
            var vars = {
                display: "block"
            }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
            marker._isFlipped = flipped;
            vars[direction.a + "Percent"] = flipped ? -100 : 0;
            vars[direction.a] = flipped ? "1px" : 0;
            vars["border" + side + _Width] = 1;
            vars["border" + oppositeSide + _Width] = 0;
            vars[direction.p] = start + "px";
            ScrollTrigger_gsap.set(marker, vars);
        }, _triggers = [], _ids = {}, _sync = function _sync() {
            return _getTime() - _lastScrollTime > 34 && _updateAll();
        }, _onScroll = function _onScroll() {
            _updateAll();
            _lastScrollTime || _dispatch("scrollStart");
            _lastScrollTime = _getTime();
        }, _onResize = function _onResize() {
            return !_refreshing && !_ignoreResize && !ScrollTrigger_doc.fullscreenElement && _resizeDelay.restart(true);
        }, _listeners = {}, _emptyArray = [], _media = [], _onMediaChange = function _onMediaChange(e) {
            var index, tick = ScrollTrigger_gsap.ticker.frame, matches = [], i = 0;
            if (_lastMediaTick !== tick || _startup) {
                _revertAll();
                for (;i < _media.length; i += 4) {
                    index = ScrollTrigger_win.matchMedia(_media[i]).matches;
                    if (index !== _media[i + 3]) {
                        _media[i + 3] = index;
                        index ? matches.push(i) : _revertAll(1, _media[i]) || ScrollTrigger_isFunction(_media[i + 2]) && _media[i + 2]();
                    }
                }
                _revertRecorded();
                for (i = 0; i < matches.length; i++) {
                    index = matches[i];
                    _creatingMedia = _media[index];
                    _media[index + 2] = _media[index + 1](e);
                }
                _creatingMedia = 0;
                ScrollTrigger_coreInitted && _refreshAll(0, 1);
                _lastMediaTick = tick;
                _dispatch("matchMedia");
            }
        }, _softRefresh = function _softRefresh() {
            return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
        }, _dispatch = function _dispatch(type) {
            return _listeners[type] && _listeners[type].map((function(f) {
                return f();
            })) || _emptyArray;
        }, _savedStyles = [], _revertRecorded = function _revertRecorded(media) {
            for (var i = 0; i < _savedStyles.length; i += 5) if (!media || _savedStyles[i + 4] === media) {
                _savedStyles[i].style.cssText = _savedStyles[i + 1];
                _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
                _savedStyles[i + 3].uncache = 1;
            }
        }, _revertAll = function _revertAll(kill, media) {
            var trigger;
            for (_i = 0; _i < _triggers.length; _i++) {
                trigger = _triggers[_i];
                if (!media || trigger.media === media) if (kill) trigger.kill(1); else trigger.revert();
            }
            media && _revertRecorded(media);
            media || _dispatch("revert");
        }, _clearScrollMemory = function _clearScrollMemory() {
            return _scrollers.forEach((function(obj) {
                return "function" === typeof obj && (obj.rec = 0);
            }));
        }, _refreshAll = function _refreshAll(force, skipRevert) {
            if (_lastScrollTime && !force) {
                _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
                return;
            }
            _refreshingAll = true;
            var refreshInits = _dispatch("refreshInit");
            _sort && ScrollTrigger.sort();
            skipRevert || _revertAll();
            _triggers.forEach((function(t) {
                return t.refresh();
            }));
            _triggers.forEach((function(t) {
                return "max" === t.vars.end && t.setPositions(t.start, _maxScroll(t.scroller, t._dir));
            }));
            refreshInits.forEach((function(result) {
                return result && result.render && result.render(-1);
            }));
            _clearScrollMemory();
            _resizeDelay.pause();
            _refreshingAll = false;
            _dispatch("refresh");
        }, _lastScroll = 0, _direction = 1, _updateAll = function _updateAll() {
            if (!_refreshingAll) {
                var l = _triggers.length, time = _getTime(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
                _direction = _lastScroll > scroll ? -1 : 1;
                _lastScroll = scroll;
                if (recordVelocity) {
                    if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
                        _lastScrollTime = 0;
                        _dispatch("scrollEnd");
                    }
                    _time2 = _time1;
                    _time1 = time;
                }
                if (_direction < 0) {
                    _i = l;
                    while (_i-- > 0) _triggers[_i] && _triggers[_i].update(0, recordVelocity);
                    _direction = 1;
                } else for (_i = 0; _i < l; _i++) _triggers[_i] && _triggers[_i].update(0, recordVelocity);
            }
        }, _propNamesToCopy = [ _left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order" ], _stateProps = _propNamesToCopy.concat([ _width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left ]), _swapPinOut = function _swapPinOut(pin, spacer, state) {
            _setState(state);
            var cache = pin._gsap;
            if (cache.spacerIsNative) _setState(cache.spacerState); else if (pin.parentNode === spacer) {
                var parent = spacer.parentNode;
                if (parent) {
                    parent.insertBefore(pin, spacer);
                    parent.removeChild(spacer);
                }
            }
        }, _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
            if (pin.parentNode !== spacer) {
                var p, i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style;
                while (i--) {
                    p = _propNamesToCopy[i];
                    spacerStyle[p] = cs[p];
                }
                spacerStyle.position = "absolute" === cs.position ? "absolute" : "relative";
                "inline" === cs.display && (spacerStyle.display = "inline-block");
                pinStyle[_bottom] = pinStyle[_right] = spacerStyle.flexBasis = "auto";
                spacerStyle.overflow = "visible";
                spacerStyle.boxSizing = "border-box";
                spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
                spacerStyle[_height] = _getSize(pin, _vertical) + _px;
                spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
                _setState(spacerState);
                pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
                pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
                pinStyle[_padding] = cs[_padding];
                pin.parentNode.insertBefore(spacer, pin);
                spacer.appendChild(pin);
            }
        }, ScrollTrigger_capsExp = /([A-Z])/g, _setState = function _setState(state) {
            if (state) {
                var p, value, style = state.t.style, l = state.length, i = 0;
                (state.t._gsap || ScrollTrigger_gsap.core.getCache(state.t)).uncache = 1;
                for (;i < l; i += 2) {
                    value = state[i + 1];
                    p = state[i];
                    if (value) style[p] = value; else if (style[p]) style.removeProperty(p.replace(ScrollTrigger_capsExp, "-$1").toLowerCase());
                }
            }
        }, _getState = function _getState(element) {
            var l = _stateProps.length, style = element.style, state = [], i = 0;
            for (;i < l; i++) state.push(_stateProps[i], style[_stateProps[i]]);
            state.t = element;
            return state;
        }, _copyState = function _copyState(state, override, omitOffsets) {
            var p, result = [], l = state.length, i = omitOffsets ? 8 : 0;
            for (;i < l; i += 2) {
                p = state[i];
                result.push(p, p in override ? override[p] : state[i + 1]);
            }
            result.t = state.t;
            return result;
        }, _winOffsets = {
            left: 0,
            top: 0
        }, ScrollTrigger_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
            ScrollTrigger_isFunction(value) && (value = value(self));
            if (ScrollTrigger_isString(value) && "max" === value.substr(0, 3)) value = scrollerMax + ("=" === value.charAt(4) ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
            var p1, p2, element, time = containerAnimation ? containerAnimation.time() : 0;
            containerAnimation && containerAnimation.seek(0);
            if (!ScrollTrigger_isNumber(value)) {
                ScrollTrigger_isFunction(trigger) && (trigger = trigger(self));
                var bounds, localOffset, globalOffset, display, offsets = value.split(" ");
                element = _getTarget(trigger) || ScrollTrigger_body;
                bounds = _getBounds(element) || {};
                if ((!bounds || !bounds.left && !bounds.top) && "none" === _getComputedStyle(element).display) {
                    display = element.style.display;
                    element.style.display = "block";
                    bounds = _getBounds(element);
                    display ? element.style.display = display : element.style.removeProperty("display");
                }
                localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
                globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
                value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
                markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
                scrollerSize -= scrollerSize - globalOffset;
            } else if (markerScroller) _positionMarker(markerScroller, scrollerSize, direction, true);
            if (marker) {
                var position = value + scrollerSize, isStart = marker._isStart;
                p1 = "scroll" + direction.d2;
                _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(ScrollTrigger_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);
                if (useFixedPosition) {
                    scrollerBounds = _getBounds(markerScroller);
                    useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
                }
            }
            if (containerAnimation && element) {
                p1 = _getBounds(element);
                containerAnimation.seek(scrollerMax);
                p2 = _getBounds(element);
                containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
                value = value / containerAnimation._caScrollDist * scrollerMax;
            }
            containerAnimation && containerAnimation.seek(time);
            return containerAnimation ? value : Math.round(value);
        }, _prefixExp = /(?:webkit|moz|length|cssText|inset)/i, _reparent = function _reparent(element, parent, top, left) {
            if (element.parentNode !== parent) {
                var p, cs, style = element.style;
                if (parent === ScrollTrigger_body) {
                    element._stOrig = style.cssText;
                    cs = _getComputedStyle(element);
                    for (p in cs) if (!+p && !_prefixExp.test(p) && cs[p] && "string" === typeof style[p] && "0" !== p) style[p] = cs[p];
                    style.top = top;
                    style.left = left;
                } else style.cssText = element._stOrig;
                ScrollTrigger_gsap.core.getCache(element).uncache = 1;
                parent.appendChild(element);
            }
        }, _getTweenCreator = function _getTweenCreator(scroller, direction) {
            var lastScroll1, lastScroll2, getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
                var tween = getTween.tween, onComplete = vars.onComplete, modifiers = {};
                tween && tween.kill();
                lastScroll1 = Math.round(initialValue);
                vars[prop] = scrollTo;
                vars.modifiers = modifiers;
                modifiers[prop] = function(value) {
                    value = ScrollTrigger_round(getScroll());
                    if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2 && Math.abs(value - lastScroll2) > 2) {
                        tween.kill();
                        getTween.tween = 0;
                    } else value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
                    lastScroll2 = lastScroll1;
                    return lastScroll1 = ScrollTrigger_round(value);
                };
                vars.onComplete = function() {
                    getTween.tween = 0;
                    onComplete && onComplete.call(tween);
                };
                tween = getTween.tween = ScrollTrigger_gsap.to(scroller, vars);
                return tween;
            };
            scroller[prop] = getScroll;
            _addListener(scroller, "wheel", (function() {
                return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
            }));
            return getTween;
        };
        _horizontal.op = _vertical;
        var ScrollTrigger = function() {
            function ScrollTrigger(vars, animation) {
                ScrollTrigger_coreInitted || ScrollTrigger.register(ScrollTrigger_gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
                this.init(vars, animation);
            }
            var _proto = ScrollTrigger.prototype;
            _proto.init = function init(vars, animation) {
                this.progress = this.start = 0;
                this.vars && this.kill(1);
                if (!_enabled) {
                    this.update = this.refresh = this.kill = ScrollTrigger_passThrough;
                    return;
                }
                vars = ScrollTrigger_setDefaults(ScrollTrigger_isString(vars) || ScrollTrigger_isNumber(vars) || vars.nodeType ? {
                    trigger: vars
                } : vars, ScrollTrigger_defaults);
                var tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevProgress, prevScroll, prevAnimProgress, caMarkerSetter, _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && false !== vars.horizontal ? _horizontal : _vertical, isToggle = !scrub && 0 !== scrub, scroller = _getTarget(vars.scroller || ScrollTrigger_win), scrollerCache = ScrollTrigger_gsap.core.getCache(scroller), isViewport = _isViewport(scroller), useFixedPosition = "fixed" === ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed"), callbacks = [ vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack ], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : ScrollTrigger_defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
                    return vars.onRefreshInit(self);
                }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, scrollFunc = _getScrollFunc(scroller, direction);
                self.media = _creatingMedia;
                self._dir = direction;
                anticipatePin *= 45;
                self.scroller = scroller;
                self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
                scroll1 = scrollFunc();
                self.vars = vars;
                animation = animation || vars.animation;
                "refreshPriority" in vars && (_sort = 1);
                scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
                    top: _getTweenCreator(scroller, _vertical),
                    left: _getTweenCreator(scroller, _horizontal)
                };
                self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
                if (animation) {
                    animation.vars.lazy = false;
                    animation._initted || false !== animation.vars.immediateRender && false !== vars.immediateRender && animation.render(0, true, true);
                    self.animation = animation.pause();
                    animation.scrollTrigger = self;
                    scrubSmooth = ScrollTrigger_isNumber(scrub) && scrub;
                    scrubSmooth && (scrubTween = ScrollTrigger_gsap.to(animation, {
                        ease: "power3",
                        duration: scrubSmooth,
                        onComplete: function onComplete() {
                            return onScrubComplete && onScrubComplete(self);
                        }
                    }));
                    snap1 = 0;
                    id || (id = animation.vars.id);
                }
                _triggers.push(self);
                if (snap) {
                    if (!ScrollTrigger_isObject(snap) || snap.push) snap = {
                        snapTo: snap
                    };
                    "scrollBehavior" in ScrollTrigger_body.style && ScrollTrigger_gsap.set(isViewport ? [ ScrollTrigger_body, _docEl ] : scroller, {
                        scrollBehavior: "auto"
                    });
                    snapFunc = ScrollTrigger_isFunction(snap.snapTo) ? snap.snapTo : "labels" === snap.snapTo ? _getClosestLabel(animation) : "labelsDirectional" === snap.snapTo ? _getLabelAtDirection(animation) : false !== snap.directional ? function(value, st) {
                        return _snapDirectional(snap.snapTo)(value, st.direction);
                    } : ScrollTrigger_gsap.utils.snap(snap.snapTo);
                    snapDurClamp = snap.duration || {
                        min: .1,
                        max: 2
                    };
                    snapDurClamp = ScrollTrigger_isObject(snapDurClamp) ? ScrollTrigger_clamp(snapDurClamp.min, snapDurClamp.max) : ScrollTrigger_clamp(snapDurClamp, snapDurClamp);
                    snapDelayedCall = ScrollTrigger_gsap.delayedCall(snap.delay || scrubSmooth / 2 || .1, (function() {
                        if (Math.abs(self.getVelocity()) < 10 && !_pointerIsDown && lastSnap !== scrollFunc()) {
                            var totalProgress = animation && !isToggle ? animation.totalProgress() : self.progress, velocity = (totalProgress - snap2) / (_getTime() - _time2) * 1e3 || 0, change1 = ScrollTrigger_gsap.utils.clamp(-self.progress, 1 - self.progress, _abs(velocity / 2) * velocity / .185), naturalEnd = self.progress + (false === snap.inertia ? 0 : change1), endValue = ScrollTrigger_clamp(0, 1, snapFunc(naturalEnd, self)), scroll = scrollFunc(), endScroll = Math.round(start + endValue * change), _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete, tween = tweenTo.tween;
                            if (scroll <= end && scroll >= start && endScroll !== scroll) {
                                if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) return;
                                if (false === snap.inertia) change1 = endValue - self.progress;
                                tweenTo(endScroll, {
                                    duration: snapDurClamp(_abs(.185 * Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) / velocity / .05 || 0)),
                                    ease: snap.ease || "power3",
                                    data: _abs(endScroll - scroll),
                                    onInterrupt: function onInterrupt() {
                                        return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                                    },
                                    onComplete: function onComplete() {
                                        self.update();
                                        lastSnap = scrollFunc();
                                        snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                                        onSnapComplete && onSnapComplete(self);
                                        _onComplete && _onComplete(self);
                                    }
                                }, scroll, change1 * change, endScroll - scroll - change1 * change);
                                onStart && onStart(self, tweenTo.tween);
                            }
                        } else if (self.isActive) snapDelayedCall.restart(true);
                    })).pause();
                }
                id && (_ids[id] = self);
                trigger = self.trigger = _getTarget(trigger || pin);
                pin = true === pin ? trigger : _getTarget(pin);
                ScrollTrigger_isString(toggleClass) && (toggleClass = {
                    targets: trigger,
                    className: toggleClass
                });
                if (pin) {
                    false === pinSpacing || pinSpacing === _margin || (pinSpacing = !pinSpacing && "flex" === _getComputedStyle(pin.parentNode).display ? false : _padding);
                    self.pin = pin;
                    false !== vars.force3D && ScrollTrigger_gsap.set(pin, {
                        force3D: true
                    });
                    pinCache = ScrollTrigger_gsap.core.getCache(pin);
                    if (!pinCache.spacer) {
                        if (pinSpacer) {
                            pinSpacer = _getTarget(pinSpacer);
                            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
                            pinCache.spacerIsNative = !!pinSpacer;
                            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
                        }
                        pinCache.spacer = spacer = pinSpacer || ScrollTrigger_doc.createElement("div");
                        spacer.classList.add("pin-spacer");
                        id && spacer.classList.add("pin-spacer-" + id);
                        pinCache.pinState = pinOriginalState = _getState(pin);
                    } else pinOriginalState = pinCache.pinState;
                    self.spacer = spacer = pinCache.spacer;
                    cs = _getComputedStyle(pin);
                    spacingStart = cs[pinSpacing + direction.os2];
                    pinGetter = ScrollTrigger_gsap.getProperty(pin);
                    pinSetter = ScrollTrigger_gsap.quickSetter(pin, direction.a, _px);
                    _swapPinIn(pin, spacer, cs);
                    pinState = _getState(pin);
                }
                if (markers) {
                    markerVars = ScrollTrigger_isObject(markers) ? ScrollTrigger_setDefaults(markers, _markerDefaults) : _markerDefaults;
                    markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
                    markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
                    offset = markerStartTrigger["offset" + direction.op.d2];
                    markerStart = _createMarker("start", id, scroller, direction, markerVars, offset, 0, containerAnimation);
                    markerEnd = _createMarker("end", id, scroller, direction, markerVars, offset, 0, containerAnimation);
                    containerAnimation && (caMarkerSetter = ScrollTrigger_gsap.quickSetter([ markerStart, markerEnd ], direction.a, _px));
                    if (!useFixedPosition && !(_proxies.length && true === _getProxyProp(scroller, "fixedMarkers"))) {
                        _makePositionable(isViewport ? ScrollTrigger_body : scroller);
                        ScrollTrigger_gsap.set([ markerStartTrigger, markerEndTrigger ], {
                            force3D: true
                        });
                        markerStartSetter = ScrollTrigger_gsap.quickSetter(markerStartTrigger, direction.a, _px);
                        markerEndSetter = ScrollTrigger_gsap.quickSetter(markerEndTrigger, direction.a, _px);
                    }
                }
                if (containerAnimation) {
                    var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
                    containerAnimation.eventCallback("onUpdate", (function() {
                        self.update(0, 0, 1);
                        oldOnUpdate && oldOnUpdate.apply(oldParams || []);
                    }));
                }
                self.previous = function() {
                    return _triggers[_triggers.indexOf(self) - 1];
                };
                self.next = function() {
                    return _triggers[_triggers.indexOf(self) + 1];
                };
                self.revert = function(revert) {
                    var r = false !== revert || !self.enabled, prevRefreshing = _refreshing;
                    if (r !== self.isReverted) {
                        if (r) {
                            self.scroll.rec || (self.scroll.rec = scrollFunc());
                            prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
                            prevProgress = self.progress;
                            prevAnimProgress = animation && animation.progress();
                        }
                        markerStart && [ markerStart, markerEnd, markerStartTrigger, markerEndTrigger ].forEach((function(m) {
                            return m.style.display = r ? "none" : "block";
                        }));
                        r && (_refreshing = 1);
                        self.update(r);
                        _refreshing = prevRefreshing;
                        pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
                        self.isReverted = r;
                    }
                };
                self.refresh = function(soft, force) {
                    if ((_refreshing || !self.enabled) && !force) return;
                    if (pin && soft && _lastScrollTime) {
                        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
                        return;
                    }
                    _refreshing = 1;
                    scrubTween && scrubTween.pause();
                    invalidateOnRefresh && animation && animation.time(-.01, true).invalidate();
                    self.isReverted || self.revert();
                    var cs, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), offset = 0, otherPinOffset = 0, parsedEnd = vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = vars.start || (0 === vars.start || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex;
                    while (i--) {
                        curTrigger = _triggers[i];
                        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
                        curPin = curTrigger.pin;
                        if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
                            revertedPins || (revertedPins = []);
                            revertedPins.unshift(curTrigger);
                            curTrigger.revert();
                        }
                    }
                    ScrollTrigger_isFunction(parsedStart) && (parsedStart = parsedStart(self));
                    start = ScrollTrigger_parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -.001 : 0);
                    ScrollTrigger_isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
                    if (ScrollTrigger_isString(parsedEnd) && !parsedEnd.indexOf("+=")) if (~parsedEnd.indexOf(" ")) parsedEnd = (ScrollTrigger_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd; else {
                        offset = _offsetToPx(parsedEnd.substr(2), size);
                        parsedEnd = ScrollTrigger_isString(parsedStart) ? parsedStart : start + offset;
                        parsedEndTrigger = trigger;
                    }
                    end = Math.max(start, ScrollTrigger_parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -.001;
                    change = end - start || (start -= .01) && .001;
                    offset = 0;
                    i = triggerIndex;
                    while (i--) {
                        curTrigger = _triggers[i];
                        curPin = curTrigger.pin;
                        if (curPin && curTrigger.start - curTrigger._pinPush < start && !containerAnimation) {
                            cs = curTrigger.end - curTrigger.start;
                            if ((curPin === trigger || curPin === pinnedContainer) && !ScrollTrigger_isNumber(parsedStart)) offset += cs * (1 - curTrigger.progress);
                            curPin === pin && (otherPinOffset += cs);
                        }
                    }
                    start += offset;
                    end += offset;
                    self._pinPush = otherPinOffset;
                    if (markerStart && offset) {
                        cs = {};
                        cs[direction.a] = "+=" + offset;
                        pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
                        ScrollTrigger_gsap.set([ markerStart, markerEnd ], cs);
                    }
                    if (pin) {
                        cs = _getComputedStyle(pin);
                        isVertical = direction === _vertical;
                        scroll = scrollFunc();
                        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
                        !max && end > 1 && ((isViewport ? ScrollTrigger_body : scroller).style["overflow-" + direction.a] = "scroll");
                        _swapPinIn(pin, spacer, cs);
                        pinState = _getState(pin);
                        bounds = _getBounds(pin, true);
                        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
                        if (pinSpacing) {
                            spacerState = [ pinSpacing + direction.os2, change + otherPinOffset + _px ];
                            spacerState.t = spacer;
                            i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
                            i && spacerState.push(direction.d, i + _px);
                            _setState(spacerState);
                            useFixedPosition && scrollFunc(prevScroll);
                        }
                        if (useFixedPosition) {
                            override = {
                                top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
                                left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
                                boxSizing: "border-box",
                                position: "fixed"
                            };
                            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
                            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
                            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
                            override[_padding] = cs[_padding];
                            override[_padding + _Top] = cs[_padding + _Top];
                            override[_padding + _Right] = cs[_padding + _Right];
                            override[_padding + _Bottom] = cs[_padding + _Bottom];
                            override[_padding + _Left] = cs[_padding + _Left];
                            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
                        }
                        if (animation) {
                            initted = animation._initted;
                            ScrollTrigger_suppressOverwrites(1);
                            animation.render(animation.duration(), true, true);
                            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
                            change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2);
                            animation.render(0, true, true);
                            initted || animation.invalidate();
                            ScrollTrigger_suppressOverwrites(0);
                        } else pinChange = change;
                    } else if (trigger && scrollFunc() && !containerAnimation) {
                        bounds = trigger.parentNode;
                        while (bounds && bounds !== ScrollTrigger_body) {
                            if (bounds._pinOffset) {
                                start -= bounds._pinOffset;
                                end -= bounds._pinOffset;
                            }
                            bounds = bounds.parentNode;
                        }
                    }
                    revertedPins && revertedPins.forEach((function(t) {
                        return t.revert(false);
                    }));
                    self.start = start;
                    self.end = end;
                    scroll1 = scroll2 = scrollFunc();
                    if (!containerAnimation) {
                        scroll1 < prevScroll && scrollFunc(prevScroll);
                        self.scroll.rec = 0;
                    }
                    self.revert(false);
                    _refreshing = 0;
                    animation && isToggle && animation._initted && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);
                    if (prevProgress !== self.progress || containerAnimation) {
                        animation && !isToggle && animation.totalProgress(prevProgress, true);
                        self.progress = prevProgress;
                        self.update(0, 0, 1);
                    }
                    pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
                    onRefresh && onRefresh(self);
                };
                self.getVelocity = function() {
                    return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1e3 || 0;
                };
                self.endAnimation = function() {
                    _endAnimation(self.callbackAnimation);
                    if (animation) scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
                };
                self.labelToScroll = function(label) {
                    return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
                };
                self.getTrailing = function(name) {
                    var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
                    return ScrollTrigger_isString(name) ? a.filter((function(t) {
                        return t.vars.preventOverlaps === name;
                    })) : a;
                };
                self.update = function(reset, recordVelocity, forceFake) {
                    if (containerAnimation && !forceFake && !reset) return;
                    var isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction, scroll = self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress = self.progress;
                    if (recordVelocity) {
                        scroll2 = scroll1;
                        scroll1 = containerAnimation ? scrollFunc() : scroll;
                        if (snap) {
                            snap2 = snap1;
                            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
                        }
                    }
                    anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 1e-4);
                    if (clipped !== prevProgress && self.enabled) {
                        isActive = self.isActive = !!clipped && clipped < 1;
                        wasActive = !!prevProgress && prevProgress < 1;
                        toggled = isActive !== wasActive;
                        stateChanged = toggled || !!clipped !== !!prevProgress;
                        self.direction = clipped > prevProgress ? 1 : -1;
                        self.progress = clipped;
                        if (stateChanged && !_refreshing) {
                            toggleState = clipped && !prevProgress ? 0 : 1 === clipped ? 1 : 1 === prevProgress ? 2 : 3;
                            if (isToggle) {
                                action = !toggled && "none" !== toggleActions[toggleState + 1] && toggleActions[toggleState + 1] || toggleActions[toggleState];
                                isTakingAction = animation && ("complete" === action || "reset" === action || action in animation);
                            }
                        }
                        preventOverlaps && toggled && (isTakingAction || scrub || !animation) && (ScrollTrigger_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach((function(t) {
                            return t.endAnimation();
                        })));
                        if (!isToggle) if (scrubTween && !_refreshing && !_startup) {
                            scrubTween.vars.totalProgress = clipped;
                            scrubTween.invalidate().restart();
                        } else if (animation) animation.totalProgress(clipped, !!_refreshing);
                        if (pin) {
                            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
                            if (!useFixedPosition) pinSetter(pinStart + pinChange * clipped); else if (stateChanged) {
                                isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
                                if (pinReparent) if (!reset && (isActive || isAtMax)) {
                                    var bounds = _getBounds(pin, true), _offset = scroll - start;
                                    _reparent(pin, ScrollTrigger_body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                                } else _reparent(pin, spacer);
                                _setState(isActive || isAtMax ? pinActiveState : pinState);
                                pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (1 === clipped && !isAtMax ? pinChange : 0));
                            }
                        }
                        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
                        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && ScrollTrigger_toArray(toggleClass.targets).forEach((function(el) {
                            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
                        }));
                        onUpdate && !isToggle && !reset && onUpdate(self);
                        if (stateChanged && !_refreshing) {
                            if (isToggle) {
                                if (isTakingAction) if ("complete" === action) animation.pause().totalProgress(1); else if ("reset" === action) animation.restart(true).pause(); else if ("restart" === action) animation.restart(true); else animation[action]();
                                onUpdate && onUpdate(self);
                            }
                            if (toggled || !_limitCallbacks) {
                                onToggle && toggled && ScrollTrigger_callback(self, onToggle);
                                callbacks[toggleState] && ScrollTrigger_callback(self, callbacks[toggleState]);
                                once && (1 === clipped ? self.kill(false, 1) : callbacks[toggleState] = 0);
                                if (!toggled) {
                                    toggleState = 1 === clipped ? 1 : 3;
                                    callbacks[toggleState] && ScrollTrigger_callback(self, callbacks[toggleState]);
                                }
                            }
                            if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (ScrollTrigger_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
                                _endAnimation(self.callbackAnimation);
                                scrubTween ? scrubTween.progress(1) : _endAnimation(animation, !clipped, 1);
                            }
                        } else if (isToggle && onUpdate && !_refreshing) onUpdate(self);
                    }
                    if (markerEndSetter) {
                        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
                        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
                        markerEndSetter(n);
                    }
                    caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
                };
                self.enable = function(reset, refresh) {
                    if (!self.enabled) {
                        self.enabled = true;
                        _addListener(scroller, "resize", _onResize);
                        _addListener(scroller, "scroll", _onScroll);
                        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
                        if (false !== reset) {
                            self.progress = prevProgress = 0;
                            scroll1 = scroll2 = lastSnap = scrollFunc();
                        }
                        false !== refresh && self.refresh();
                    }
                };
                self.getTween = function(snap) {
                    return snap && tweenTo ? tweenTo.tween : scrubTween;
                };
                self.setPositions = function(newStart, newEnd) {
                    if (pin) {
                        pinStart += newStart - start;
                        pinChange += newEnd - newStart - change;
                    }
                    self.start = start = newStart;
                    self.end = end = newEnd;
                    change = newEnd - newStart;
                    self.update();
                };
                self.disable = function(reset, allowAnimation) {
                    if (self.enabled) {
                        false !== reset && self.revert();
                        self.enabled = self.isActive = false;
                        allowAnimation || scrubTween && scrubTween.pause();
                        prevScroll = 0;
                        pinCache && (pinCache.uncache = 1);
                        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);
                        if (snapDelayedCall) {
                            snapDelayedCall.pause();
                            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
                        }
                        if (!isViewport) {
                            var i = _triggers.length;
                            while (i--) if (_triggers[i].scroller === scroller && _triggers[i] !== self) return;
                            _removeListener(scroller, "resize", _onResize);
                            _removeListener(scroller, "scroll", _onScroll);
                        }
                    }
                };
                self.kill = function(revert, allowAnimation) {
                    self.disable(revert, allowAnimation);
                    scrubTween && scrubTween.kill();
                    id && delete _ids[id];
                    var i = _triggers.indexOf(self);
                    i >= 0 && _triggers.splice(i, 1);
                    i === _i && _direction > 0 && _i--;
                    i = 0;
                    _triggers.forEach((function(t) {
                        return t.scroller === self.scroller && (i = 1);
                    }));
                    i || (self.scroll.rec = 0);
                    if (animation) {
                        animation.scrollTrigger = null;
                        revert && animation.render(-1);
                        allowAnimation || animation.kill();
                    }
                    markerStart && [ markerStart, markerEnd, markerStartTrigger, markerEndTrigger ].forEach((function(m) {
                        return m.parentNode && m.parentNode.removeChild(m);
                    }));
                    if (pin) {
                        pinCache && (pinCache.uncache = 1);
                        i = 0;
                        _triggers.forEach((function(t) {
                            return t.pin === pin && i++;
                        }));
                        i || (pinCache.spacer = 0);
                    }
                };
                self.enable(false, false);
                !animation || !animation.add || change ? self.refresh() : ScrollTrigger_gsap.delayedCall(.01, (function() {
                    return start || end || self.refresh();
                })) && (change = .01) && (start = end = 0);
            };
            ScrollTrigger.register = function register(core) {
                if (!ScrollTrigger_coreInitted) {
                    ScrollTrigger_gsap = core || _getGSAP();
                    if (ScrollTrigger_windowExists() && window.document) {
                        ScrollTrigger_win = window;
                        ScrollTrigger_doc = document;
                        _docEl = ScrollTrigger_doc.documentElement;
                        ScrollTrigger_body = ScrollTrigger_doc.body;
                    }
                    if (ScrollTrigger_gsap) {
                        ScrollTrigger_toArray = ScrollTrigger_gsap.utils.toArray;
                        ScrollTrigger_clamp = ScrollTrigger_gsap.utils.clamp;
                        ScrollTrigger_suppressOverwrites = ScrollTrigger_gsap.core.suppressOverwrites || ScrollTrigger_passThrough;
                        ScrollTrigger_gsap.core.globals("ScrollTrigger", ScrollTrigger);
                        if (ScrollTrigger_body) {
                            _addListener(ScrollTrigger_win, "wheel", _onScroll);
                            _root = [ ScrollTrigger_win, ScrollTrigger_doc, _docEl, ScrollTrigger_body ];
                            _addListener(ScrollTrigger_doc, "scroll", _onScroll);
                            var bounds, bodyStyle = ScrollTrigger_body.style, border = bodyStyle.borderTopStyle;
                            bodyStyle.borderTopStyle = "solid";
                            bounds = _getBounds(ScrollTrigger_body);
                            _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
                            _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
                            border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
                            _syncInterval = setInterval(_sync, 200);
                            ScrollTrigger_gsap.delayedCall(.5, (function() {
                                return _startup = 0;
                            }));
                            _addListener(ScrollTrigger_doc, "touchcancel", ScrollTrigger_passThrough);
                            _addListener(ScrollTrigger_body, "touchstart", ScrollTrigger_passThrough);
                            _multiListener(_addListener, ScrollTrigger_doc, "pointerdown,touchstart,mousedown", (function() {
                                return _pointerIsDown = 1;
                            }));
                            _multiListener(_addListener, ScrollTrigger_doc, "pointerup,touchend,mouseup", (function() {
                                return _pointerIsDown = 0;
                            }));
                            ScrollTrigger_transformProp = ScrollTrigger_gsap.utils.checkPrefix("transform");
                            _stateProps.push(ScrollTrigger_transformProp);
                            ScrollTrigger_coreInitted = _getTime();
                            _resizeDelay = ScrollTrigger_gsap.delayedCall(.2, _refreshAll).pause();
                            _autoRefresh = [ ScrollTrigger_doc, "visibilitychange", function() {
                                var w = ScrollTrigger_win.innerWidth, h = ScrollTrigger_win.innerHeight;
                                if (ScrollTrigger_doc.hidden) {
                                    _prevWidth = w;
                                    _prevHeight = h;
                                } else if (_prevWidth !== w || _prevHeight !== h) _onResize();
                            }, ScrollTrigger_doc, "DOMContentLoaded", _refreshAll, ScrollTrigger_win, "load", function() {
                                return _lastScrollTime || _refreshAll();
                            }, ScrollTrigger_win, "resize", _onResize ];
                            _iterateAutoRefresh(_addListener);
                        }
                    }
                }
                return ScrollTrigger_coreInitted;
            };
            ScrollTrigger.defaults = function defaults(config) {
                if (config) for (var p in config) ScrollTrigger_defaults[p] = config[p];
                return ScrollTrigger_defaults;
            };
            ScrollTrigger.kill = function kill() {
                _enabled = 0;
                _triggers.slice(0).forEach((function(trigger) {
                    return trigger.kill(1);
                }));
            };
            ScrollTrigger.config = function config(vars) {
                "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
                var ms = vars.syncInterval;
                ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
                if ("autoRefreshEvents" in vars) {
                    _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
                    _ignoreResize = -1 === (vars.autoRefreshEvents + "").indexOf("resize");
                }
            };
            ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
                var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport(t);
                if (~i) _scrollers.splice(i, isViewport ? 6 : 2);
                if (vars) isViewport ? _proxies.unshift(ScrollTrigger_win, vars, ScrollTrigger_body, vars, _docEl, vars) : _proxies.unshift(t, vars);
            };
            ScrollTrigger.matchMedia = function matchMedia(vars) {
                var mq, p, i, func, result;
                for (p in vars) {
                    i = _media.indexOf(p);
                    func = vars[p];
                    _creatingMedia = p;
                    if ("all" === p) func(); else {
                        mq = ScrollTrigger_win.matchMedia(p);
                        if (mq) {
                            mq.matches && (result = func());
                            if (~i) {
                                _media[i + 1] = _combineFunc(_media[i + 1], func);
                                _media[i + 2] = _combineFunc(_media[i + 2], result);
                            } else {
                                i = _media.length;
                                _media.push(p, func, result);
                                mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
                            }
                            _media[i + 3] = mq.matches;
                        }
                    }
                    _creatingMedia = 0;
                }
                return _media;
            };
            ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
                query || (_media.length = 0);
                query = _media.indexOf(query);
                query >= 0 && _media.splice(query, 4);
            };
            ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
                var bounds = (ScrollTrigger_isString(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
                return horizontal ? bounds.right - offset > 0 && bounds.left + offset < ScrollTrigger_win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < ScrollTrigger_win.innerHeight;
            };
            ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
                ScrollTrigger_isString(element) && (element = _getTarget(element));
                var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = null == referencePoint ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
                return horizontal ? (bounds.left + offset) / ScrollTrigger_win.innerWidth : (bounds.top + offset) / ScrollTrigger_win.innerHeight;
            };
            return ScrollTrigger;
        }();
        ScrollTrigger.version = "3.9.1";
        ScrollTrigger.saveStyles = function(targets) {
            return targets ? ScrollTrigger_toArray(targets).forEach((function(target) {
                if (target && target.style) {
                    var i = _savedStyles.indexOf(target);
                    i >= 0 && _savedStyles.splice(i, 5);
                    _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), ScrollTrigger_gsap.core.getCache(target), _creatingMedia);
                }
            })) : _savedStyles;
        };
        ScrollTrigger.revert = function(soft, media) {
            return _revertAll(!soft, media);
        };
        ScrollTrigger.create = function(vars, animation) {
            return new ScrollTrigger(vars, animation);
        };
        ScrollTrigger.refresh = function(safe) {
            return safe ? _onResize() : (ScrollTrigger_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
        };
        ScrollTrigger.update = _updateAll;
        ScrollTrigger.clearScrollMemory = _clearScrollMemory;
        ScrollTrigger.maxScroll = function(element, horizontal) {
            return _maxScroll(element, horizontal ? _horizontal : _vertical);
        };
        ScrollTrigger.getScrollFunc = function(element, horizontal) {
            return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
        };
        ScrollTrigger.getById = function(id) {
            return _ids[id];
        };
        ScrollTrigger.getAll = function() {
            return _triggers.slice(0);
        };
        ScrollTrigger.isScrolling = function() {
            return !!_lastScrollTime;
        };
        ScrollTrigger.snapDirectional = _snapDirectional;
        ScrollTrigger.addEventListener = function(type, callback) {
            var a = _listeners[type] || (_listeners[type] = []);
            ~a.indexOf(callback) || a.push(callback);
        };
        ScrollTrigger.removeEventListener = function(type, callback) {
            var a = _listeners[type], i = a && a.indexOf(callback);
            i >= 0 && a.splice(i, 1);
        };
        ScrollTrigger.batch = function(targets, vars) {
            var p, result = [], varsCopy = {}, interval = vars.interval || .016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback(type, callback) {
                var elements = [], triggers = [], delay = ScrollTrigger_gsap.delayedCall(interval, (function() {
                    callback(elements, triggers);
                    elements = [];
                    triggers = [];
                })).pause();
                return function(self) {
                    elements.length || delay.restart(true);
                    elements.push(self.trigger);
                    triggers.push(self);
                    batchMax <= elements.length && delay.progress(1);
                };
            };
            for (p in vars) varsCopy[p] = "on" === p.substr(0, 2) && ScrollTrigger_isFunction(vars[p]) && "onRefreshInit" !== p ? proxyCallback(p, vars[p]) : vars[p];
            if (ScrollTrigger_isFunction(batchMax)) {
                batchMax = batchMax();
                _addListener(ScrollTrigger, "refresh", (function() {
                    return batchMax = vars.batchMax();
                }));
            }
            ScrollTrigger_toArray(targets).forEach((function(target) {
                var config = {};
                for (p in varsCopy) config[p] = varsCopy[p];
                config.trigger = target;
                result.push(ScrollTrigger.create(config));
            }));
            return result;
        };
        ScrollTrigger.sort = function(func) {
            return _triggers.sort(func || function(a, b) {
                return -1e6 * (a.vars.refreshPriority || 0) + a.start - (b.start + -1e6 * (b.vars.refreshPriority || 0));
            });
        };
        _getGSAP() && ScrollTrigger_gsap.registerPlugin(ScrollTrigger);
        /*!
 * ScrollToPlugin 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
        var ScrollToPlugin_gsap, ScrollToPlugin_coreInitted, _window, ScrollToPlugin_docEl, ScrollToPlugin_body, ScrollToPlugin_toArray, ScrollToPlugin_config, ScrollToPlugin_windowExists = function _windowExists() {
            return "undefined" !== typeof window;
        }, ScrollToPlugin_getGSAP = function _getGSAP() {
            return ScrollToPlugin_gsap || ScrollToPlugin_windowExists() && (ScrollToPlugin_gsap = window.gsap) && ScrollToPlugin_gsap.registerPlugin && ScrollToPlugin_gsap;
        }, ScrollToPlugin_isString = function _isString(value) {
            return "string" === typeof value;
        }, ScrollToPlugin_isFunction = function _isFunction(value) {
            return "function" === typeof value;
        }, _max = function _max(element, axis) {
            var dim = "x" === axis ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
            return element === _window || element === ScrollToPlugin_docEl || element === ScrollToPlugin_body ? Math.max(ScrollToPlugin_docEl[scroll], ScrollToPlugin_body[scroll]) - (_window["inner" + dim] || ScrollToPlugin_docEl[client] || ScrollToPlugin_body[client]) : element[scroll] - element["offset" + dim];
        }, _buildGetter = function _buildGetter(e, axis) {
            var p = "scroll" + ("x" === axis ? "Left" : "Top");
            if (e === _window) if (null != e.pageXOffset) p = "page" + axis.toUpperCase() + "Offset"; else e = null != ScrollToPlugin_docEl[p] ? ScrollToPlugin_docEl : ScrollToPlugin_body;
            return function() {
                return e[p];
            };
        }, _clean = function _clean(value, index, target, targets) {
            ScrollToPlugin_isFunction(value) && (value = value(index, target, targets));
            if ("object" !== typeof value) return ScrollToPlugin_isString(value) && "max" !== value && "=" !== value.charAt(1) ? {
                x: value,
                y: value
            } : {
                y: value
            }; else if (value.nodeType) return {
                y: value,
                x: value
            }; else {
                var p, result = {};
                for (p in value) result[p] = "onAutoKill" !== p && ScrollToPlugin_isFunction(value[p]) ? value[p](index, target, targets) : value[p];
                return result;
            }
        }, _getOffset = function _getOffset(element, container) {
            element = ScrollToPlugin_toArray(element)[0];
            if (!element || !element.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
                x: 0,
                y: 0
            };
            var rect = element.getBoundingClientRect(), isRoot = !container || container === _window || container === ScrollToPlugin_body, cRect = isRoot ? {
                top: ScrollToPlugin_docEl.clientTop - (_window.pageYOffset || ScrollToPlugin_docEl.scrollTop || ScrollToPlugin_body.scrollTop || 0),
                left: ScrollToPlugin_docEl.clientLeft - (_window.pageXOffset || ScrollToPlugin_docEl.scrollLeft || ScrollToPlugin_body.scrollLeft || 0)
            } : container.getBoundingClientRect(), offsets = {
                x: rect.left - cRect.left,
                y: rect.top - cRect.top
            };
            if (!isRoot && container) {
                offsets.x += _buildGetter(container, "x")();
                offsets.y += _buildGetter(container, "y")();
            }
            return offsets;
        }, _parseVal = function _parseVal(value, target, axis, currentVal, offset) {
            return !isNaN(value) && "object" !== typeof value ? parseFloat(value) - offset : ScrollToPlugin_isString(value) && "=" === value.charAt(1) ? parseFloat(value.substr(2)) * ("-" === value.charAt(0) ? -1 : 1) + currentVal - offset : "max" === value ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
        }, ScrollToPlugin_initCore = function _initCore() {
            ScrollToPlugin_gsap = ScrollToPlugin_getGSAP();
            if (ScrollToPlugin_windowExists() && ScrollToPlugin_gsap && document.body) {
                _window = window;
                ScrollToPlugin_body = document.body;
                ScrollToPlugin_docEl = document.documentElement;
                ScrollToPlugin_toArray = ScrollToPlugin_gsap.utils.toArray;
                ScrollToPlugin_gsap.config({
                    autoKillThreshold: 7
                });
                ScrollToPlugin_config = ScrollToPlugin_gsap.config();
                ScrollToPlugin_coreInitted = 1;
            }
        };
        var ScrollToPlugin = {
            version: "3.9.1",
            name: "scrollTo",
            rawVars: 1,
            register: function register(core) {
                ScrollToPlugin_gsap = core;
                ScrollToPlugin_initCore();
            },
            init: function init(target, value, tween, index, targets) {
                ScrollToPlugin_coreInitted || ScrollToPlugin_initCore();
                var data = this, snapType = ScrollToPlugin_gsap.getProperty(target, "scrollSnapType");
                data.isWin = target === _window;
                data.target = target;
                data.tween = tween;
                value = _clean(value, index, target, targets);
                data.vars = value;
                data.autoKill = !!value.autoKill;
                data.getX = _buildGetter(target, "x");
                data.getY = _buildGetter(target, "y");
                data.x = data.xPrev = data.getX();
                data.y = data.yPrev = data.getY();
                if (snapType && "none" !== snapType) {
                    data.snap = 1;
                    data.snapInline = target.style.scrollSnapType;
                    target.style.scrollSnapType = "none";
                }
                if (null != value.x) {
                    data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);
                    data._props.push("scrollTo_x");
                } else data.skipX = 1;
                if (null != value.y) {
                    data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);
                    data._props.push("scrollTo_y");
                } else data.skipY = 1;
            },
            render: function render(ratio, data) {
                var x, y, yDif, xDif, threshold, pt = data._pt, target = data.target, tween = data.tween, autoKill = data.autoKill, xPrev = data.xPrev, yPrev = data.yPrev, isWin = data.isWin, snap = data.snap, snapInline = data.snapInline;
                while (pt) {
                    pt.r(ratio, pt.d);
                    pt = pt._next;
                }
                x = isWin || !data.skipX ? data.getX() : xPrev;
                y = isWin || !data.skipY ? data.getY() : yPrev;
                yDif = y - yPrev;
                xDif = x - xPrev;
                threshold = ScrollToPlugin_config.autoKillThreshold;
                if (data.x < 0) data.x = 0;
                if (data.y < 0) data.y = 0;
                if (autoKill) {
                    if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) data.skipX = 1;
                    if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) data.skipY = 1;
                    if (data.skipX && data.skipY) {
                        tween.kill();
                        data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
                    }
                }
                if (isWin) _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y); else {
                    data.skipY || (target.scrollTop = data.y);
                    data.skipX || (target.scrollLeft = data.x);
                }
                if (snap && (1 === ratio || 0 === ratio)) {
                    y = target.scrollTop;
                    x = target.scrollLeft;
                    snapInline ? target.style.scrollSnapType = snapInline : target.style.removeProperty("scroll-snap-type");
                    target.scrollTop = y + 1;
                    target.scrollLeft = x + 1;
                    target.scrollTop = y;
                    target.scrollLeft = x;
                }
                data.xPrev = data.x;
                data.yPrev = data.y;
            },
            kill: function kill(property) {
                var both = "scrollTo" === property;
                if (both || "scrollTo_x" === property) this.skipX = 1;
                if (both || "scrollTo_y" === property) this.skipY = 1;
            }
        };
        ScrollToPlugin.max = _max;
        ScrollToPlugin.getOffset = _getOffset;
        ScrollToPlugin.buildGetter = _buildGetter;
        ScrollToPlugin_getGSAP() && ScrollToPlugin_gsap.registerPlugin(ScrollToPlugin);
        /*!
 * paths 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
        var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, _numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi, _selectorExp = /(^[#\.][a-z]|[a-y][a-z])/i, paths_DEG2RAD = Math.PI / 180, paths_RAD2DEG = 180 / Math.PI, paths_sin = Math.sin, paths_cos = Math.cos, paths_abs = Math.abs, paths_sqrt = Math.sqrt, paths_atan2 = Math.atan2, _largeNum = 1e8, paths_isString = function _isString(value) {
            return "string" === typeof value;
        }, paths_isNumber = function _isNumber(value) {
            return "number" === typeof value;
        }, paths_isUndefined = function _isUndefined(value) {
            return "undefined" === typeof value;
        }, _temp = {}, _temp2 = {}, _roundingNum = 1e5, _wrapProgress = function _wrapProgress(progress) {
            return Math.round((progress + _largeNum) % 1 * _roundingNum) / _roundingNum || (progress < 0 ? 0 : 1);
        }, paths_round = function _round(value) {
            return Math.round(value * _roundingNum) / _roundingNum || 0;
        }, paths_roundPrecise = function _roundPrecise(value) {
            return Math.round(1e10 * value) / 1e10 || 0;
        }, _splitSegment = function _splitSegment(rawPath, segIndex, i, t) {
            var segment = rawPath[segIndex], shift = 1 === t ? 6 : subdivideSegment(segment, i, t);
            if (shift && shift + i + 2 < segment.length) {
                rawPath.splice(segIndex, 0, segment.slice(0, i + shift + 2));
                segment.splice(0, i + shift);
                return 1;
            }
        }, _getSampleIndex = function _getSampleIndex(samples, length, progress) {
            var l = samples.length, i = ~~(progress * l);
            if (samples[i] > length) while (--i && samples[i] > length) ; else while (samples[++i] < length && i < l) ;
            return i < l ? i : l - 1;
        }, _reverseRawPath = function _reverseRawPath(rawPath, skipOuter) {
            var i = rawPath.length;
            skipOuter || rawPath.reverse();
            while (i--) rawPath[i].reversed || reverseSegment(rawPath[i]);
        }, _copyMetaData = function _copyMetaData(source, copy) {
            copy.totalLength = source.totalLength;
            if (source.samples) {
                copy.samples = source.samples.slice(0);
                copy.lookup = source.lookup.slice(0);
                copy.minLength = source.minLength;
                copy.resolution = source.resolution;
            } else if (source.totalPoints) copy.totalPoints = source.totalPoints;
            return copy;
        }, _appendOrMerge = function _appendOrMerge(rawPath, segment) {
            var index = rawPath.length, prevSeg = rawPath[index - 1] || [], l = prevSeg.length;
            if (index && segment[0] === prevSeg[l - 2] && segment[1] === prevSeg[l - 1]) {
                segment = prevSeg.concat(segment.slice(2));
                index--;
            }
            rawPath[index] = segment;
        };
        function getRawPath(value) {
            value = paths_isString(value) && _selectorExp.test(value) ? document.querySelector(value) || value : value;
            var rawPath, e = value.getAttribute ? value : 0;
            if (e && (value = value.getAttribute("d"))) {
                if (!e._gsPath) e._gsPath = {};
                rawPath = e._gsPath[value];
                return rawPath && !rawPath._dirty ? rawPath : e._gsPath[value] = stringToRawPath(value);
            }
            return !value ? console.warn("Expecting a <path> element or an SVG path data string") : paths_isString(value) ? stringToRawPath(value) : paths_isNumber(value[0]) ? [ value ] : value;
        }
        function copyRawPath(rawPath) {
            var a = [], i = 0;
            for (;i < rawPath.length; i++) a[i] = _copyMetaData(rawPath[i], rawPath[i].slice(0));
            return _copyMetaData(rawPath, a);
        }
        function reverseSegment(segment) {
            var y, i = 0;
            segment.reverse();
            for (;i < segment.length; i += 2) {
                y = segment[i];
                segment[i] = segment[i + 1];
                segment[i + 1] = y;
            }
            segment.reversed = !segment.reversed;
        }
        var _createPath = function _createPath(e, ignore) {
            var name, path = document.createElementNS("http://www.w3.org/2000/svg", "path"), attr = [].slice.call(e.attributes), i = attr.length;
            ignore = "," + ignore + ",";
            while (--i > -1) {
                name = attr[i].nodeName.toLowerCase();
                if (ignore.indexOf("," + name + ",") < 0) path.setAttributeNS(null, name, attr[i].nodeValue);
            }
            return path;
        }, _typeAttrs = {
            rect: "rx,ry,x,y,width,height",
            circle: "r,cx,cy",
            ellipse: "rx,ry,cx,cy",
            line: "x1,x2,y1,y2"
        }, _attrToObj = function _attrToObj(e, attrs) {
            var props = attrs ? attrs.split(",") : [], obj = {}, i = props.length;
            while (--i > -1) obj[props[i]] = +e.getAttribute(props[i]) || 0;
            return obj;
        };
        function paths_convertToPath(element, swap) {
            var data, x, y, r, ry, path, rcirc, rycirc, points, w, h, x2, x3, x4, x5, x6, y2, y3, y4, y5, y6, attr, type = element.tagName.toLowerCase(), circ = .552284749831;
            if ("path" === type || !element.getBBox) return element;
            path = _createPath(element, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points");
            attr = _attrToObj(element, _typeAttrs[type]);
            if ("rect" === type) {
                r = attr.rx;
                ry = attr.ry || r;
                x = attr.x;
                y = attr.y;
                w = attr.width - 2 * r;
                h = attr.height - 2 * ry;
                if (r || ry) {
                    x2 = x + r * (1 - circ);
                    x3 = x + r;
                    x4 = x3 + w;
                    x5 = x4 + r * circ;
                    x6 = x4 + r;
                    y2 = y + ry * (1 - circ);
                    y3 = y + ry;
                    y4 = y3 + h;
                    y5 = y4 + ry * circ;
                    y6 = y4 + ry;
                    data = "M" + x6 + "," + y3 + " V" + y4 + " C" + [ x6, y5, x5, y6, x4, y6, x4 - (x4 - x3) / 3, y6, x3 + (x4 - x3) / 3, y6, x3, y6, x2, y6, x, y5, x, y4, x, y4 - (y4 - y3) / 3, x, y3 + (y4 - y3) / 3, x, y3, x, y2, x2, y, x3, y, x3 + (x4 - x3) / 3, y, x4 - (x4 - x3) / 3, y, x4, y, x5, y, x6, y2, x6, y3 ].join(",") + "z";
                } else data = "M" + (x + w) + "," + y + " v" + h + " h" + -w + " v" + -h + " h" + w + "z";
            } else if ("circle" === type || "ellipse" === type) {
                if ("circle" === type) {
                    r = ry = attr.r;
                    rycirc = r * circ;
                } else {
                    r = attr.rx;
                    ry = attr.ry;
                    rycirc = ry * circ;
                }
                x = attr.cx;
                y = attr.cy;
                rcirc = r * circ;
                data = "M" + (x + r) + "," + y + " C" + [ x + r, y + rycirc, x + rcirc, y + ry, x, y + ry, x - rcirc, y + ry, x - r, y + rycirc, x - r, y, x - r, y - rycirc, x - rcirc, y - ry, x, y - ry, x + rcirc, y - ry, x + r, y - rycirc, x + r, y ].join(",") + "z";
            } else if ("line" === type) data = "M" + attr.x1 + "," + attr.y1 + " L" + attr.x2 + "," + attr.y2; else if ("polyline" === type || "polygon" === type) {
                points = (element.getAttribute("points") + "").match(_numbersExp) || [];
                x = points.shift();
                y = points.shift();
                data = "M" + x + "," + y + " L" + points.join(",");
                if ("polygon" === type) data += "," + x + "," + y + "z";
            }
            path.setAttribute("d", rawPathToString(path._gsRawPath = stringToRawPath(data)));
            if (swap && element.parentNode) {
                element.parentNode.insertBefore(path, element);
                element.parentNode.removeChild(element);
            }
            return path;
        }
        function getRotationAtBezierT(segment, i, t) {
            var x, a = segment[i], b = segment[i + 2], c = segment[i + 4];
            a += (b - a) * t;
            b += (c - b) * t;
            a += (b - a) * t;
            x = b + (c + (segment[i + 6] - c) * t - b) * t - a;
            a = segment[i + 1];
            b = segment[i + 3];
            c = segment[i + 5];
            a += (b - a) * t;
            b += (c - b) * t;
            a += (b - a) * t;
            return paths_round(paths_atan2(b + (c + (segment[i + 7] - c) * t - b) * t - a, x) * paths_RAD2DEG);
        }
        function sliceRawPath(rawPath, start, end) {
            end = paths_isUndefined(end) ? 1 : paths_roundPrecise(end) || 0;
            start = paths_roundPrecise(start) || 0;
            var loops = Math.max(0, ~~(paths_abs(end - start) - 1e-8)), path = copyRawPath(rawPath);
            if (start > end) {
                start = 1 - start;
                end = 1 - end;
                _reverseRawPath(path);
                path.totalLength = 0;
            }
            if (start < 0 || end < 0) {
                var offset = Math.abs(~~Math.min(start, end)) + 1;
                start += offset;
                end += offset;
            }
            path.totalLength || cacheRawPathMeasurements(path);
            var wrapsBehind, sShift, eShift, i, copy, totalSegments, l, j, wrap = end > 1, s = getProgressData(path, start, _temp, true), e = getProgressData(path, end, _temp2), eSeg = e.segment, sSeg = s.segment, eSegIndex = e.segIndex, sSegIndex = s.segIndex, ei = e.i, si = s.i, sameSegment = sSegIndex === eSegIndex, sameBezier = ei === si && sameSegment;
            if (wrap || loops) {
                wrapsBehind = eSegIndex < sSegIndex || sameSegment && ei < si || sameBezier && e.t < s.t;
                if (_splitSegment(path, sSegIndex, si, s.t)) {
                    sSegIndex++;
                    if (!wrapsBehind) {
                        eSegIndex++;
                        if (sameBezier) {
                            e.t = (e.t - s.t) / (1 - s.t);
                            ei = 0;
                        } else if (sameSegment) ei -= si;
                    }
                }
                if (Math.abs(1 - (end - start)) < 1e-5) eSegIndex = sSegIndex - 1; else if (!e.t && eSegIndex) eSegIndex--; else if (_splitSegment(path, eSegIndex, ei, e.t) && wrapsBehind) sSegIndex++;
                if (1 === s.t) sSegIndex = (sSegIndex + 1) % path.length;
                copy = [];
                totalSegments = path.length;
                l = 1 + totalSegments * loops;
                j = sSegIndex;
                l += (totalSegments - sSegIndex + eSegIndex) % totalSegments;
                for (i = 0; i < l; i++) _appendOrMerge(copy, path[j++ % totalSegments]);
                path = copy;
            } else {
                eShift = 1 === e.t ? 6 : subdivideSegment(eSeg, ei, e.t);
                if (start !== end) {
                    sShift = subdivideSegment(sSeg, si, sameBezier ? s.t / e.t : s.t);
                    sameSegment && (eShift += sShift);
                    eSeg.splice(ei + eShift + 2);
                    (sShift || si) && sSeg.splice(0, si + sShift);
                    i = path.length;
                    while (i--) (i < sSegIndex || i > eSegIndex) && path.splice(i, 1);
                } else {
                    eSeg.angle = getRotationAtBezierT(eSeg, ei + eShift, 0);
                    ei += eShift;
                    s = eSeg[ei];
                    e = eSeg[ei + 1];
                    eSeg.length = eSeg.totalLength = 0;
                    eSeg.totalPoints = path.totalPoints = 8;
                    eSeg.push(s, e, s, e, s, e, s, e);
                }
            }
            path.totalLength = 0;
            return path;
        }
        function measureSegment(segment, startIndex, bezierQty) {
            startIndex = startIndex || 0;
            if (!segment.samples) {
                segment.samples = [];
                segment.lookup = [];
            }
            var i, j, x4, x3, x2, xd, xd1, y4, y3, y2, yd, yd1, inv, t, lengthIndex, l, segLength, resolution = ~~segment.resolution || 12, inc = 1 / resolution, endIndex = bezierQty ? startIndex + 6 * bezierQty + 1 : segment.length, x1 = segment[startIndex], y1 = segment[startIndex + 1], samplesIndex = startIndex ? startIndex / 6 * resolution : 0, samples = segment.samples, lookup = segment.lookup, min = (startIndex ? segment.minLength : _largeNum) || _largeNum, prevLength = samples[samplesIndex + bezierQty * resolution - 1], length = startIndex ? samples[samplesIndex - 1] : 0;
            samples.length = lookup.length = 0;
            for (j = startIndex + 2; j < endIndex; j += 6) {
                x4 = segment[j + 4] - x1;
                x3 = segment[j + 2] - x1;
                x2 = segment[j] - x1;
                y4 = segment[j + 5] - y1;
                y3 = segment[j + 3] - y1;
                y2 = segment[j + 1] - y1;
                xd = xd1 = yd = yd1 = 0;
                if (paths_abs(x4) < .01 && paths_abs(y4) < .01 && paths_abs(x2) + paths_abs(y2) < .01) {
                    if (segment.length > 8) {
                        segment.splice(j, 6);
                        j -= 6;
                        endIndex -= 6;
                    }
                } else for (i = 1; i <= resolution; i++) {
                    t = inc * i;
                    inv = 1 - t;
                    xd = xd1 - (xd1 = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t);
                    yd = yd1 - (yd1 = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t);
                    l = paths_sqrt(yd * yd + xd * xd);
                    if (l < min) min = l;
                    length += l;
                    samples[samplesIndex++] = length;
                }
                x1 += x4;
                y1 += y4;
            }
            if (prevLength) {
                prevLength -= length;
                for (;samplesIndex < samples.length; samplesIndex++) samples[samplesIndex] += prevLength;
            }
            if (samples.length && min) {
                segment.totalLength = segLength = samples[samples.length - 1] || 0;
                segment.minLength = min;
                if (segLength / min < 9999) {
                    l = lengthIndex = 0;
                    for (i = 0; i < segLength; i += min) lookup[l++] = samples[lengthIndex] < i ? ++lengthIndex : lengthIndex;
                }
            } else segment.totalLength = samples[0] = 0;
            return startIndex ? length - samples[startIndex / 2 - 1] : length;
        }
        function cacheRawPathMeasurements(rawPath, resolution) {
            var pathLength, points, i;
            for (i = pathLength = points = 0; i < rawPath.length; i++) {
                rawPath[i].resolution = ~~resolution || 12;
                points += rawPath[i].length;
                pathLength += measureSegment(rawPath[i]);
            }
            rawPath.totalPoints = points;
            rawPath.totalLength = pathLength;
            return rawPath;
        }
        function subdivideSegment(segment, i, t) {
            if (t <= 0 || t >= 1) return 0;
            var ax = segment[i], ay = segment[i + 1], cp1x = segment[i + 2], cp1y = segment[i + 3], cp2x = segment[i + 4], cp2y = segment[i + 5], bx = segment[i + 6], by = segment[i + 7], x1a = ax + (cp1x - ax) * t, x2 = cp1x + (cp2x - cp1x) * t, y1a = ay + (cp1y - ay) * t, y2 = cp1y + (cp2y - cp1y) * t, x1 = x1a + (x2 - x1a) * t, y1 = y1a + (y2 - y1a) * t, x2a = cp2x + (bx - cp2x) * t, y2a = cp2y + (by - cp2y) * t;
            x2 += (x2a - x2) * t;
            y2 += (y2a - y2) * t;
            segment.splice(i + 2, 4, paths_round(x1a), paths_round(y1a), paths_round(x1), paths_round(y1), paths_round(x1 + (x2 - x1) * t), paths_round(y1 + (y2 - y1) * t), paths_round(x2), paths_round(y2), paths_round(x2a), paths_round(y2a));
            segment.samples && segment.samples.splice(i / 6 * segment.resolution | 0, 0, 0, 0, 0, 0, 0, 0);
            return 6;
        }
        function getProgressData(rawPath, progress, decoratee, pushToNextIfAtEnd) {
            decoratee = decoratee || {};
            rawPath.totalLength || cacheRawPathMeasurements(rawPath);
            if (progress < 0 || progress > 1) progress = _wrapProgress(progress);
            var samples, resolution, length, min, max, i, t, segIndex = 0, segment = rawPath[0];
            if (!progress) {
                t = i = segIndex = 0;
                segment = rawPath[0];
            } else if (1 === progress) {
                t = 1;
                segIndex = rawPath.length - 1;
                segment = rawPath[segIndex];
                i = segment.length - 8;
            } else {
                if (rawPath.length > 1) {
                    length = rawPath.totalLength * progress;
                    max = i = 0;
                    while ((max += rawPath[i++].totalLength) < length) segIndex = i;
                    segment = rawPath[segIndex];
                    min = max - segment.totalLength;
                    progress = (length - min) / (max - min) || 0;
                }
                samples = segment.samples;
                resolution = segment.resolution;
                length = segment.totalLength * progress;
                i = segment.lookup.length ? segment.lookup[~~(length / segment.minLength)] || 0 : _getSampleIndex(samples, length, progress);
                min = i ? samples[i - 1] : 0;
                max = samples[i];
                if (max < length) {
                    min = max;
                    max = samples[++i];
                }
                t = 1 / resolution * ((length - min) / (max - min) + i % resolution);
                i = 6 * ~~(i / resolution);
                if (pushToNextIfAtEnd && 1 === t) if (i + 6 < segment.length) {
                    i += 6;
                    t = 0;
                } else if (segIndex + 1 < rawPath.length) {
                    i = t = 0;
                    segment = rawPath[++segIndex];
                }
            }
            decoratee.t = t;
            decoratee.i = i;
            decoratee.path = rawPath;
            decoratee.segment = segment;
            decoratee.segIndex = segIndex;
            return decoratee;
        }
        function getPositionOnPath(rawPath, progress, includeAngle, point) {
            var samples, resolution, length, min, max, i, t, a, inv, segment = rawPath[0], result = point || {};
            if (progress < 0 || progress > 1) progress = _wrapProgress(progress);
            if (rawPath.length > 1) {
                length = rawPath.totalLength * progress;
                max = i = 0;
                while ((max += rawPath[i++].totalLength) < length) segment = rawPath[i];
                min = max - segment.totalLength;
                progress = (length - min) / (max - min) || 0;
            }
            samples = segment.samples;
            resolution = segment.resolution;
            length = segment.totalLength * progress;
            i = segment.lookup.length ? segment.lookup[progress < 1 ? ~~(length / segment.minLength) : segment.lookup.length - 1] || 0 : _getSampleIndex(samples, length, progress);
            min = i ? samples[i - 1] : 0;
            max = samples[i];
            if (max < length) {
                min = max;
                max = samples[++i];
            }
            t = 1 / resolution * ((length - min) / (max - min) + i % resolution) || 0;
            inv = 1 - t;
            i = 6 * ~~(i / resolution);
            a = segment[i];
            result.x = paths_round((t * t * (segment[i + 6] - a) + 3 * inv * (t * (segment[i + 4] - a) + inv * (segment[i + 2] - a))) * t + a);
            result.y = paths_round((t * t * (segment[i + 7] - (a = segment[i + 1])) + 3 * inv * (t * (segment[i + 5] - a) + inv * (segment[i + 3] - a))) * t + a);
            if (includeAngle) result.angle = segment.totalLength ? getRotationAtBezierT(segment, i, t >= 1 ? 1 - 1e-9 : t ? t : 1e-9) : segment.angle || 0;
            return result;
        }
        function transformRawPath(rawPath, a, b, c, d, tx, ty) {
            var segment, l, i, x, y, j = rawPath.length;
            while (--j > -1) {
                segment = rawPath[j];
                l = segment.length;
                for (i = 0; i < l; i += 2) {
                    x = segment[i];
                    y = segment[i + 1];
                    segment[i] = x * a + y * c + tx;
                    segment[i + 1] = x * b + y * d + ty;
                }
            }
            rawPath._dirty = 1;
            return rawPath;
        }
        function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
            if (lastX === x && lastY === y) return;
            rx = paths_abs(rx);
            ry = paths_abs(ry);
            var angleRad = angle % 360 * paths_DEG2RAD, cosAngle = paths_cos(angleRad), sinAngle = paths_sin(angleRad), PI = Math.PI, TWOPI = 2 * PI, dx2 = (lastX - x) / 2, dy2 = (lastY - y) / 2, x1 = cosAngle * dx2 + sinAngle * dy2, y1 = -sinAngle * dx2 + cosAngle * dy2, x1_sq = x1 * x1, y1_sq = y1 * y1, radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);
            if (radiiCheck > 1) {
                rx = paths_sqrt(radiiCheck) * rx;
                ry = paths_sqrt(radiiCheck) * ry;
            }
            var rx_sq = rx * rx, ry_sq = ry * ry, sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);
            if (sq < 0) sq = 0;
            var coef = (largeArcFlag === sweepFlag ? -1 : 1) * paths_sqrt(sq), cx1 = coef * (rx * y1 / ry), cy1 = coef * (-ry * x1 / rx), sx2 = (lastX + x) / 2, sy2 = (lastY + y) / 2, cx = sx2 + (cosAngle * cx1 - sinAngle * cy1), cy = sy2 + (sinAngle * cx1 + cosAngle * cy1), ux = (x1 - cx1) / rx, uy = (y1 - cy1) / ry, vx = (-x1 - cx1) / rx, vy = (-y1 - cy1) / ry, temp = ux * ux + uy * uy, angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / paths_sqrt(temp)), angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / paths_sqrt(temp * (vx * vx + vy * vy)));
            isNaN(angleExtent) && (angleExtent = PI);
            if (!sweepFlag && angleExtent > 0) angleExtent -= TWOPI; else if (sweepFlag && angleExtent < 0) angleExtent += TWOPI;
            angleStart %= TWOPI;
            angleExtent %= TWOPI;
            var i, segments = Math.ceil(paths_abs(angleExtent) / (TWOPI / 4)), rawPath = [], angleIncrement = angleExtent / segments, controlLength = 4 / 3 * paths_sin(angleIncrement / 2) / (1 + paths_cos(angleIncrement / 2)), ma = cosAngle * rx, mb = sinAngle * rx, mc = sinAngle * -ry, md = cosAngle * ry;
            for (i = 0; i < segments; i++) {
                angle = angleStart + i * angleIncrement;
                x1 = paths_cos(angle);
                y1 = paths_sin(angle);
                ux = paths_cos(angle += angleIncrement);
                uy = paths_sin(angle);
                rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
            }
            for (i = 0; i < rawPath.length; i += 2) {
                x1 = rawPath[i];
                y1 = rawPath[i + 1];
                rawPath[i] = x1 * ma + y1 * mc + cx;
                rawPath[i + 1] = x1 * mb + y1 * md + cy;
            }
            rawPath[i - 2] = x;
            rawPath[i - 1] = y;
            return rawPath;
        }
        function stringToRawPath(d) {
            var i, j, x, y, command, isRelative, segment, startX, startY, difX, difY, beziers, prevCommand, flag1, flag2, a = (d + "").replace(_scientific, (function(m) {
                var n = +m;
                return n < 1e-4 && n > -1e-4 ? 0 : n;
            })).match(_svgPathExp) || [], path = [], relativeX = 0, relativeY = 0, twoThirds = 2 / 3, elements = a.length, points = 0, errorMessage = "ERROR: malformed path: " + d, line = function line(sx, sy, ex, ey) {
                difX = (ex - sx) / 3;
                difY = (ey - sy) / 3;
                segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
            };
            if (!d || !isNaN(a[0]) || isNaN(a[1])) {
                console.log(errorMessage);
                return path;
            }
            for (i = 0; i < elements; i++) {
                prevCommand = command;
                if (isNaN(a[i])) {
                    command = a[i].toUpperCase();
                    isRelative = command !== a[i];
                } else i--;
                x = +a[i + 1];
                y = +a[i + 2];
                if (isRelative) {
                    x += relativeX;
                    y += relativeY;
                }
                if (!i) {
                    startX = x;
                    startY = y;
                }
                if ("M" === command) {
                    if (segment) if (segment.length < 8) path.length -= 1; else points += segment.length;
                    relativeX = startX = x;
                    relativeY = startY = y;
                    segment = [ x, y ];
                    path.push(segment);
                    i += 2;
                    command = "L";
                } else if ("C" === command) {
                    if (!segment) segment = [ 0, 0 ];
                    if (!isRelative) relativeX = relativeY = 0;
                    segment.push(x, y, relativeX + 1 * a[i + 3], relativeY + 1 * a[i + 4], relativeX += 1 * a[i + 5], relativeY += 1 * a[i + 6]);
                    i += 6;
                } else if ("S" === command) {
                    difX = relativeX;
                    difY = relativeY;
                    if ("C" === prevCommand || "S" === prevCommand) {
                        difX += relativeX - segment[segment.length - 4];
                        difY += relativeY - segment[segment.length - 3];
                    }
                    if (!isRelative) relativeX = relativeY = 0;
                    segment.push(difX, difY, x, y, relativeX += 1 * a[i + 3], relativeY += 1 * a[i + 4]);
                    i += 4;
                } else if ("Q" === command) {
                    difX = relativeX + (x - relativeX) * twoThirds;
                    difY = relativeY + (y - relativeY) * twoThirds;
                    if (!isRelative) relativeX = relativeY = 0;
                    relativeX += 1 * a[i + 3];
                    relativeY += 1 * a[i + 4];
                    segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
                    i += 4;
                } else if ("T" === command) {
                    difX = relativeX - segment[segment.length - 4];
                    difY = relativeY - segment[segment.length - 3];
                    segment.push(relativeX + difX, relativeY + difY, x + (relativeX + 1.5 * difX - x) * twoThirds, y + (relativeY + 1.5 * difY - y) * twoThirds, relativeX = x, relativeY = y);
                    i += 2;
                } else if ("H" === command) {
                    line(relativeX, relativeY, relativeX = x, relativeY);
                    i += 1;
                } else if ("V" === command) {
                    line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
                    i += 1;
                } else if ("L" === command || "Z" === command) {
                    if ("Z" === command) {
                        x = startX;
                        y = startY;
                        segment.closed = true;
                    }
                    if ("L" === command || paths_abs(relativeX - x) > .5 || paths_abs(relativeY - y) > .5) {
                        line(relativeX, relativeY, x, y);
                        if ("L" === command) i += 2;
                    }
                    relativeX = x;
                    relativeY = y;
                } else if ("A" === command) {
                    flag1 = a[i + 4];
                    flag2 = a[i + 5];
                    difX = a[i + 6];
                    difY = a[i + 7];
                    j = 7;
                    if (flag1.length > 1) {
                        if (flag1.length < 3) {
                            difY = difX;
                            difX = flag2;
                            j--;
                        } else {
                            difY = flag2;
                            difX = flag1.substr(2);
                            j -= 2;
                        }
                        flag2 = flag1.charAt(1);
                        flag1 = flag1.charAt(0);
                    }
                    beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + 1 * difX, (isRelative ? relativeY : 0) + 1 * difY);
                    i += j;
                    if (beziers) for (j = 0; j < beziers.length; j++) segment.push(beziers[j]);
                    relativeX = segment[segment.length - 2];
                    relativeY = segment[segment.length - 1];
                } else console.log(errorMessage);
            }
            i = segment.length;
            if (i < 6) {
                path.pop();
                i = 0;
            } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) segment.closed = true;
            path.totalPoints = points + i;
            return path;
        }
        function flatPointsToSegment(points, curviness) {
            if (void 0 === curviness) curviness = 1;
            var x = points[0], y = 0, segment = [ x, y ], i = 2;
            for (;i < points.length; i += 2) segment.push(x, y, points[i], y = (points[i] - x) * curviness / 2, x = points[i], -y);
            return segment;
        }
        function pointsToSegment(points, curviness, cornerThreshold) {
            paths_abs(points[0] - points[2]) < 1e-4 && paths_abs(points[1] - points[3]) < 1e-4 && (points = points.slice(2));
            var prevX, prevY, angle, slope, i, dx1, dx3, dy1, dy3, d1, d2, a, b, c, l = points.length - 2, x = +points[0], y = +points[1], nextX = +points[2], nextY = +points[3], segment = [ x, y, x, y ], dx2 = nextX - x, dy2 = nextY - y, closed = Math.abs(points[l] - x) < .001 && Math.abs(points[l + 1] - y) < .001;
            if (isNaN(cornerThreshold)) cornerThreshold = Math.PI / 10;
            if (closed) {
                points.push(nextX, nextY);
                nextX = x;
                nextY = y;
                x = points[l - 2];
                y = points[l - 1];
                points.unshift(x, y);
                l += 4;
            }
            curviness = curviness || 0 === curviness ? +curviness : 1;
            for (i = 2; i < l; i += 2) {
                prevX = x;
                prevY = y;
                x = nextX;
                y = nextY;
                nextX = +points[i + 2];
                nextY = +points[i + 3];
                if (x === nextX && y === nextY) continue;
                dx1 = dx2;
                dy1 = dy2;
                dx2 = nextX - x;
                dy2 = nextY - y;
                dx3 = nextX - prevX;
                dy3 = nextY - prevY;
                a = dx1 * dx1 + dy1 * dy1;
                b = dx2 * dx2 + dy2 * dy2;
                c = dx3 * dx3 + dy3 * dy3;
                angle = Math.acos((a + b - c) / paths_sqrt(4 * a * b));
                d2 = angle / Math.PI * curviness;
                d1 = paths_sqrt(a) * d2;
                d2 *= paths_sqrt(b);
                if (x !== prevX || y !== prevY) if (angle > cornerThreshold) {
                    slope = paths_atan2(dy3, dx3);
                    segment.push(paths_round(x - paths_cos(slope) * d1), paths_round(y - paths_sin(slope) * d1), paths_round(x), paths_round(y), paths_round(x + paths_cos(slope) * d2), paths_round(y + paths_sin(slope) * d2));
                } else {
                    slope = paths_atan2(dy1, dx1);
                    segment.push(paths_round(x - paths_cos(slope) * d1), paths_round(y - paths_sin(slope) * d1));
                    slope = paths_atan2(dy2, dx2);
                    segment.push(paths_round(x), paths_round(y), paths_round(x + paths_cos(slope) * d2), paths_round(y + paths_sin(slope) * d2));
                }
            }
            x !== nextX || y !== nextY || segment.length < 4 ? segment.push(paths_round(nextX), paths_round(nextY), paths_round(nextX), paths_round(nextY)) : segment.length -= 2;
            if (closed) {
                segment.splice(0, 6);
                segment.length = segment.length - 6;
            }
            return segment;
        }
        function rawPathToString(rawPath) {
            if (paths_isNumber(rawPath[0])) rawPath = [ rawPath ];
            var sl, s, i, segment, result = "", l = rawPath.length;
            for (s = 0; s < l; s++) {
                segment = rawPath[s];
                result += "M" + paths_round(segment[0]) + "," + paths_round(segment[1]) + " C";
                sl = segment.length;
                for (i = 2; i < sl; i++) result += paths_round(segment[i++]) + "," + paths_round(segment[i++]) + " " + paths_round(segment[i++]) + "," + paths_round(segment[i++]) + " " + paths_round(segment[i++]) + "," + paths_round(segment[i]) + " ";
                if (segment.closed) result += "z";
            }
            return result;
        }
        /*!
 * MotionPathPlugin 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
        var MotionPathPlugin_gsap, MotionPathPlugin_PropTween, _getUnit, MotionPathPlugin_toArray, _xProps = "x,translateX,left,marginLeft,xPercent".split(","), _yProps = "y,translateY,top,marginTop,yPercent".split(","), MotionPathPlugin_DEG2RAD = Math.PI / 180, MotionPathPlugin_getGSAP = function _getGSAP() {
            return MotionPathPlugin_gsap || "undefined" !== typeof window && (MotionPathPlugin_gsap = window.gsap) && MotionPathPlugin_gsap.registerPlugin && MotionPathPlugin_gsap;
        }, _populateSegmentFromArray = function _populateSegmentFromArray(segment, values, property, mode) {
            var l = values.length, si = 2 === mode ? 0 : mode, i = 0;
            for (;i < l; i++) {
                segment[si] = parseFloat(values[i][property]);
                2 === mode && (segment[si + 1] = 0);
                si += 2;
            }
            return segment;
        }, _getPropNum = function _getPropNum(target, prop, unit) {
            return parseFloat(target._gsap.get(target, prop, unit || "px")) || 0;
        }, _relativize = function _relativize(segment) {
            var i, x = segment[0], y = segment[1];
            for (i = 2; i < segment.length; i += 2) {
                x = segment[i] += x;
                y = segment[i + 1] += y;
            }
        }, _segmentToRawPath = function _segmentToRawPath(plugin, segment, target, x, y, slicer, vars, unitX, unitY) {
            if ("cubic" === vars.type) segment = [ segment ]; else {
                false !== vars.fromCurrent && segment.unshift(_getPropNum(target, x, unitX), y ? _getPropNum(target, y, unitY) : 0);
                vars.relative && _relativize(segment);
                var pointFunc = y ? pointsToSegment : flatPointsToSegment;
                segment = [ pointFunc(segment, vars.curviness) ];
            }
            segment = slicer(_align(segment, target, vars));
            _addDimensionalPropTween(plugin, target, x, segment, "x", unitX);
            y && _addDimensionalPropTween(plugin, target, y, segment, "y", unitY);
            return cacheRawPathMeasurements(segment, vars.resolution || (0 === vars.curviness ? 20 : 12));
        }, MotionPathPlugin_emptyFunc = function _emptyFunc(v) {
            return v;
        }, MotionPathPlugin_numExp = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g, _originToPoint = function _originToPoint(element, origin, parentMatrix) {
            var svg, m = getGlobalMatrix(element), x = 0, y = 0;
            if ("svg" === (element.tagName + "").toLowerCase()) {
                svg = element.viewBox.baseVal;
                svg.width || (svg = {
                    width: +element.getAttribute("width"),
                    height: +element.getAttribute("height")
                });
            } else svg = origin && element.getBBox && element.getBBox();
            if (origin && "auto" !== origin) {
                x = origin.push ? origin[0] * (svg ? svg.width : element.offsetWidth || 0) : origin.x;
                y = origin.push ? origin[1] * (svg ? svg.height : element.offsetHeight || 0) : origin.y;
            }
            return parentMatrix.apply(x || y ? m.apply({
                x,
                y
            }) : {
                x: m.e,
                y: m.f
            });
        }, _getAlignMatrix = function _getAlignMatrix(fromElement, toElement, fromOrigin, toOrigin) {
            var p, parentMatrix = getGlobalMatrix(fromElement.parentNode, true, true), m = parentMatrix.clone().multiply(getGlobalMatrix(toElement)), fromPoint = _originToPoint(fromElement, fromOrigin, parentMatrix), _originToPoint2 = _originToPoint(toElement, toOrigin, parentMatrix), x = _originToPoint2.x, y = _originToPoint2.y;
            m.e = m.f = 0;
            if ("auto" === toOrigin && toElement.getTotalLength && "path" === toElement.tagName.toLowerCase()) {
                p = toElement.getAttribute("d").match(MotionPathPlugin_numExp) || [];
                p = m.apply({
                    x: +p[0],
                    y: +p[1]
                });
                x += p.x;
                y += p.y;
            }
            if (p || toElement.getBBox && fromElement.getBBox && toElement.ownerSVGElement === fromElement.ownerSVGElement) {
                p = m.apply(toElement.getBBox());
                x -= p.x;
                y -= p.y;
            }
            m.e = x - fromPoint.x;
            m.f = y - fromPoint.y;
            return m;
        }, _align = function _align(rawPath, target, _ref) {
            var align = _ref.align, matrix = _ref.matrix, offsetX = _ref.offsetX, offsetY = _ref.offsetY, alignOrigin = _ref.alignOrigin;
            var alignTarget, m, p, x = rawPath[0][0], y = rawPath[0][1], curX = _getPropNum(target, "x"), curY = _getPropNum(target, "y");
            if (!rawPath || !rawPath.length) return getRawPath("M0,0L0,0");
            if (align) if ("self" === align || (alignTarget = MotionPathPlugin_toArray(align)[0] || target) === target) transformRawPath(rawPath, 1, 0, 0, 1, curX - x, curY - y); else {
                if (alignOrigin && false !== alignOrigin[2]) MotionPathPlugin_gsap.set(target, {
                    transformOrigin: 100 * alignOrigin[0] + "% " + 100 * alignOrigin[1] + "%"
                }); else alignOrigin = [ _getPropNum(target, "xPercent") / -100, _getPropNum(target, "yPercent") / -100 ];
                m = _getAlignMatrix(target, alignTarget, alignOrigin, "auto");
                p = m.apply({
                    x,
                    y
                });
                transformRawPath(rawPath, m.a, m.b, m.c, m.d, curX + m.e - (p.x - m.e), curY + m.f - (p.y - m.f));
            }
            if (matrix) transformRawPath(rawPath, matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f); else if (offsetX || offsetY) transformRawPath(rawPath, 1, 0, 0, 1, offsetX || 0, offsetY || 0);
            return rawPath;
        }, _addDimensionalPropTween = function _addDimensionalPropTween(plugin, target, property, rawPath, pathProperty, forceUnit) {
            var cache = target._gsap, harness = cache.harness, alias = harness && harness.aliases && harness.aliases[property], prop = alias && alias.indexOf(",") < 0 ? alias : property, pt = plugin._pt = new MotionPathPlugin_PropTween(plugin._pt, target, prop, 0, 0, MotionPathPlugin_emptyFunc, 0, cache.set(target, prop, plugin));
            pt.u = _getUnit(cache.get(target, prop, forceUnit)) || 0;
            pt.path = rawPath;
            pt.pp = pathProperty;
            plugin._props.push(prop);
        }, _sliceModifier = function _sliceModifier(start, end) {
            return function(rawPath) {
                return start || 1 !== end ? sliceRawPath(rawPath, start, end) : rawPath;
            };
        };
        var MotionPathPlugin = {
            version: "3.9.1",
            name: "motionPath",
            register: function register(core, Plugin, propTween) {
                MotionPathPlugin_gsap = core;
                _getUnit = MotionPathPlugin_gsap.utils.getUnit;
                MotionPathPlugin_toArray = MotionPathPlugin_gsap.utils.toArray;
                MotionPathPlugin_PropTween = propTween;
            },
            init: function init(target, vars) {
                if (!MotionPathPlugin_gsap) {
                    console.warn("Please gsap.registerPlugin(MotionPathPlugin)");
                    return false;
                }
                if (!("object" === typeof vars && !vars.style) || !vars.path) vars = {
                    path: vars
                };
                var rawPath, p, rawPaths = [], _vars = vars, path = _vars.path, autoRotate = _vars.autoRotate, unitX = _vars.unitX, unitY = _vars.unitY, x = _vars.x, y = _vars.y, firstObj = path[0], slicer = _sliceModifier(vars.start, "end" in vars ? vars.end : 1);
                this.rawPaths = rawPaths;
                this.target = target;
                if (this.rotate = autoRotate || 0 === autoRotate) {
                    this.rOffset = parseFloat(autoRotate) || 0;
                    this.radians = !!vars.useRadians;
                    this.rProp = vars.rotation || "rotation";
                    this.rSet = target._gsap.set(target, this.rProp, this);
                    this.ru = _getUnit(target._gsap.get(target, this.rProp)) || 0;
                }
                if (Array.isArray(path) && !("closed" in path) && "number" !== typeof firstObj) {
                    for (p in firstObj) if (!x && ~_xProps.indexOf(p)) x = p; else if (!y && ~_yProps.indexOf(p)) y = p;
                    if (x && y) rawPaths.push(_segmentToRawPath(this, _populateSegmentFromArray(_populateSegmentFromArray([], path, x, 0), path, y, 1), target, x, y, slicer, vars, unitX || _getUnit(path[0][x]), unitY || _getUnit(path[0][y]))); else x = y = 0;
                    for (p in firstObj) p !== x && p !== y && rawPaths.push(_segmentToRawPath(this, _populateSegmentFromArray([], path, p, 2), target, p, 0, slicer, vars, _getUnit(path[0][p])));
                } else {
                    rawPath = slicer(_align(getRawPath(vars.path), target, vars));
                    cacheRawPathMeasurements(rawPath, vars.resolution);
                    rawPaths.push(rawPath);
                    _addDimensionalPropTween(this, target, vars.x || "x", rawPath, "x", vars.unitX || "px");
                    _addDimensionalPropTween(this, target, vars.y || "y", rawPath, "y", vars.unitY || "px");
                }
            },
            render: function render(ratio, data) {
                var rawPaths = data.rawPaths, i = rawPaths.length, pt = data._pt;
                if (ratio > 1) ratio = 1; else if (ratio < 0) ratio = 0;
                while (i--) getPositionOnPath(rawPaths[i], ratio, !i && data.rotate, rawPaths[i]);
                while (pt) {
                    pt.set(pt.t, pt.p, pt.path[pt.pp] + pt.u, pt.d, ratio);
                    pt = pt._next;
                }
                data.rotate && data.rSet(data.target, data.rProp, rawPaths[0].angle * (data.radians ? MotionPathPlugin_DEG2RAD : 1) + data.rOffset + data.ru, data, ratio);
            },
            getLength: function getLength(path) {
                return cacheRawPathMeasurements(getRawPath(path)).totalLength;
            },
            sliceRawPath,
            getRawPath,
            pointsToSegment,
            stringToRawPath,
            rawPathToString,
            transformRawPath,
            getGlobalMatrix,
            getPositionOnPath,
            cacheRawPathMeasurements,
            convertToPath: function convertToPath(targets, swap) {
                return MotionPathPlugin_toArray(targets).map((function(target) {
                    return paths_convertToPath(target, false !== swap);
                }));
            },
            convertCoordinates: function convertCoordinates(fromElement, toElement, point) {
                var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
                return point ? m.apply(point) : m;
            },
            getAlignMatrix: _getAlignMatrix,
            getRelativePosition: function getRelativePosition(fromElement, toElement, fromOrigin, toOrigin) {
                var m = _getAlignMatrix(fromElement, toElement, fromOrigin, toOrigin);
                return {
                    x: m.e,
                    y: m.f
                };
            },
            arrayToRawPath: function arrayToRawPath(value, vars) {
                vars = vars || {};
                var segment = _populateSegmentFromArray(_populateSegmentFromArray([], value, vars.x || "x", 0), value, vars.y || "y", 1);
                vars.relative && _relativize(segment);
                return [ "cubic" === vars.type ? segment : pointsToSegment(segment, vars.curviness) ];
            }
        };
        MotionPathPlugin_getGSAP() && MotionPathPlugin_gsap.registerPlugin(MotionPathPlugin);
        /*!
 * strings: 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
        var _trimExp = /(^\s+|\s+$)/g;
        var emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
        function getText(e) {
            var type = e.nodeType, result = "";
            if (1 === type || 9 === type || 11 === type) if ("string" === typeof e.textContent) return e.textContent; else for (e = e.firstChild; e; e = e.nextSibling) result += getText(e); else if (3 === type || 4 === type) return e.nodeValue;
            return result;
        }
        function splitInnerHTML(element, delimiter, trim, preserveSpaces) {
            var s, node = element.firstChild, result = [];
            while (node) {
                if (3 === node.nodeType) {
                    s = (node.nodeValue + "").replace(/^\n+/g, "");
                    if (!preserveSpaces) s = s.replace(/\s+/g, " ");
                    result.push.apply(result, emojiSafeSplit(s, delimiter, trim, preserveSpaces));
                } else if ("br" === (node.nodeName + "").toLowerCase()) result[result.length - 1] += "<br>"; else result.push(node.outerHTML);
                node = node.nextSibling;
            }
            s = result.length;
            while (s--) "&" === result[s] && result.splice(s, 1, "&amp;");
            return result;
        }
        function emojiSafeSplit(text, delimiter, trim, preserveSpaces) {
            text += "";
            if (trim) text = text.replace(_trimExp, "");
            if (delimiter && "" !== delimiter) return text.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(delimiter);
            var j, character, result = [], l = text.length, i = 0;
            for (;i < l; i++) {
                character = text.charAt(i);
                if (character.charCodeAt(0) >= 55296 && character.charCodeAt(0) <= 56319 || text.charCodeAt(i + 1) >= 65024 && text.charCodeAt(i + 1) <= 65039) {
                    j = ((text.substr(i, 12).split(emojiExp) || [])[1] || "").length || 2;
                    character = text.substr(i, j);
                    result.emoji = 1;
                    i += j - 1;
                }
                result.push(">" === character ? "&gt;" : "<" === character ? "&lt;" : preserveSpaces && " " === character && (" " === text.charAt(i - 1) || " " === text.charAt(i + 1)) ? "&nbsp;" : character);
            }
            return result;
        }
        /*!
 * TextPlugin 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
        var TextPlugin_gsap, TextPlugin_tempDiv, TextPlugin_getGSAP = function _getGSAP() {
            return TextPlugin_gsap || "undefined" !== typeof window && (TextPlugin_gsap = window.gsap) && TextPlugin_gsap.registerPlugin && TextPlugin_gsap;
        };
        var TextPlugin = {
            version: "3.9.1",
            name: "text",
            init: function init(target, value, tween) {
                var _short, text, original, j, condensedText, condensedOriginal, aggregate, s, i = target.nodeName.toUpperCase(), data = this;
                data.svg = target.getBBox && ("TEXT" === i || "TSPAN" === i);
                if (!("innerHTML" in target) && !data.svg) return false;
                data.target = target;
                if ("object" !== typeof value) value = {
                    value
                };
                if (!("value" in value)) {
                    data.text = data.original = [ "" ];
                    return;
                }
                data.delimiter = value.delimiter || "";
                original = splitInnerHTML(target, data.delimiter, false, value.preserveSpaces);
                if (!TextPlugin_tempDiv) TextPlugin_tempDiv = document.createElement("div");
                TextPlugin_tempDiv.innerHTML = value.value;
                text = splitInnerHTML(TextPlugin_tempDiv, data.delimiter);
                data.from = tween._from;
                if (data.from) {
                    i = original;
                    original = text;
                    text = i;
                }
                data.hasClass = !!(value.newClass || value.oldClass);
                data.newClass = value.newClass;
                data.oldClass = value.oldClass;
                i = original.length - text.length;
                _short = i < 0 ? original : text;
                data.fillChar = value.fillChar || (value.padSpace ? "&nbsp;" : "");
                if (i < 0) i = -i;
                while (--i > -1) _short.push(data.fillChar);
                if ("diff" === value.type) {
                    j = 0;
                    condensedText = [];
                    condensedOriginal = [];
                    aggregate = "";
                    for (i = 0; i < text.length; i++) {
                        s = text[i];
                        if (s === original[i]) aggregate += s; else {
                            condensedText[j] = aggregate + s;
                            condensedOriginal[j++] = aggregate + original[i];
                            aggregate = "";
                        }
                    }
                    text = condensedText;
                    original = condensedOriginal;
                    if (aggregate) {
                        text.push(aggregate);
                        original.push(aggregate);
                    }
                }
                if (value.speed) tween.duration(Math.min(.05 / value.speed * _short.length, value.maxDuration || 9999));
                this.original = original;
                this.text = text;
                this._props.push("text");
            },
            render: function render(ratio, data) {
                if (ratio > 1) ratio = 1; else if (ratio < 0) ratio = 0;
                if (data.from) ratio = 1 - ratio;
                var applyNew, applyOld, str, text = data.text, hasClass = data.hasClass, newClass = data.newClass, oldClass = data.oldClass, delimiter = data.delimiter, target = data.target, fillChar = data.fillChar, original = data.original, l = text.length, i = ratio * l + .5 | 0;
                if (hasClass && ratio) {
                    applyNew = newClass && i;
                    applyOld = oldClass && i !== l;
                    str = (applyNew ? "<span class='" + newClass + "'>" : "") + text.slice(0, i).join(delimiter) + (applyNew ? "</span>" : "") + (applyOld ? "<span class='" + oldClass + "'>" : "") + delimiter + original.slice(i).join(delimiter) + (applyOld ? "</span>" : "");
                } else str = text.slice(0, i).join(delimiter) + delimiter + original.slice(i).join(delimiter);
                if (data.svg) target.textContent = str; else target.innerHTML = "&nbsp;" === fillChar && ~str.indexOf("  ") ? str.split("  ").join("&nbsp;&nbsp;") : str;
            }
        };
        TextPlugin.splitInnerHTML = splitInnerHTML;
        TextPlugin.emojiSafeSplit = emojiSafeSplit;
        TextPlugin.getText = getText;
        TextPlugin_getGSAP() && TextPlugin_gsap.registerPlugin(TextPlugin);
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
            return extendStatics(d, b);
        };
        function __extends(d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __);
        }
        var __assign = function() {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        function __decorate(decorators, target, key, desc) {
            var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }
        function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            var r = Array(s), k = 0;
            for (i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
            k++) r[k] = a[j];
            return r;
        }
        __webpack_require__(580);
        __webpack_require__(5356);
        __webpack_require__(8921);
        __webpack_require__(1607);
        __webpack_require__(8581);
        function baseClamp(number, lower, upper) {
            if (number === number) {
                if (void 0 !== upper) number = number <= upper ? number : upper;
                if (void 0 !== lower) number = number >= lower ? number : lower;
            }
            return number;
        }
        const _baseClamp = baseClamp;
        var reWhitespace = /\s/;
        function trimmedEndIndex(string) {
            var index = string.length;
            while (index-- && reWhitespace.test(string.charAt(index))) ;
            return index;
        }
        const _trimmedEndIndex = trimmedEndIndex;
        var reTrimStart = /^\s+/;
        function baseTrim(string) {
            return string ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
        }
        const _baseTrim = baseTrim;
        function isObject(value) {
            var type = typeof value;
            return null != value && ("object" == type || "function" == type);
        }
        const lodash_es_isObject = isObject;
        var freeGlobal = "object" == typeof global && global && global.Object === Object && global;
        const _freeGlobal = freeGlobal;
        var freeSelf = "object" == typeof self && self && self.Object === Object && self;
        var root = _freeGlobal || freeSelf || Function("return this")();
        const lodash_es_root = root;
        var _Symbol_Symbol = lodash_es_root.Symbol;
        const _Symbol = _Symbol_Symbol;
        var objectProto = Object.prototype;
        var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;
        var nativeObjectToString = objectProto.toString;
        var symToStringTag = _Symbol ? _Symbol.toStringTag : void 0;
        function getRawTag(value) {
            var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
                value[symToStringTag] = void 0;
                var unmasked = true;
            } catch (e) {}
            var result = nativeObjectToString.call(value);
            if (unmasked) if (isOwn) value[symToStringTag] = tag; else delete value[symToStringTag];
            return result;
        }
        const _getRawTag = getRawTag;
        var _objectToString_objectProto = Object.prototype;
        var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;
        function objectToString(value) {
            return _objectToString_nativeObjectToString.call(value);
        }
        const _objectToString = objectToString;
        var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
        var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : void 0;
        function baseGetTag(value) {
            if (null == value) return void 0 === value ? undefinedTag : nullTag;
            return _baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value) ? _getRawTag(value) : _objectToString(value);
        }
        const _baseGetTag = baseGetTag;
        function isObjectLike(value) {
            return null != value && "object" == typeof value;
        }
        const lodash_es_isObjectLike = isObjectLike;
        var symbolTag = "[object Symbol]";
        function isSymbol(value) {
            return "symbol" == typeof value || lodash_es_isObjectLike(value) && _baseGetTag(value) == symbolTag;
        }
        const lodash_es_isSymbol = isSymbol;
        var NAN = 0 / 0;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsOctal = /^0o[0-7]+$/i;
        var freeParseInt = parseInt;
        function toNumber(value) {
            if ("number" == typeof value) return value;
            if (lodash_es_isSymbol(value)) return NAN;
            if (lodash_es_isObject(value)) {
                var other = "function" == typeof value.valueOf ? value.valueOf() : value;
                value = lodash_es_isObject(other) ? other + "" : other;
            }
            if ("string" != typeof value) return 0 === value ? value : +value;
            value = _baseTrim(value);
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        const lodash_es_toNumber = toNumber;
        function clamp_clamp(number, lower, upper) {
            if (void 0 === upper) {
                upper = lower;
                lower = void 0;
            }
            if (void 0 !== upper) {
                upper = lodash_es_toNumber(upper);
                upper = upper === upper ? upper : 0;
            }
            if (void 0 !== lower) {
                lower = lodash_es_toNumber(lower);
                lower = lower === lower ? lower : 0;
            }
            return _baseClamp(lodash_es_toNumber(number), lower, upper);
        }
        const lodash_es_clamp = clamp_clamp;
        function range(min, max) {
            if (void 0 === min) min = -1 / 0;
            if (void 0 === max) max = 1 / 0;
            return function(proto, key) {
                var alias = "_" + key;
                Object.defineProperty(proto, key, {
                    get: function() {
                        return this[alias];
                    },
                    set: function(val) {
                        Object.defineProperty(this, alias, {
                            value: lodash_es_clamp(val, min, max),
                            enumerable: false,
                            writable: true,
                            configurable: true
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
            };
        }
        function boolean_boolean(proto, key) {
            var alias = "_" + key;
            Object.defineProperty(proto, key, {
                get: function() {
                    return this[alias];
                },
                set: function(val) {
                    Object.defineProperty(this, alias, {
                        value: !!val,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    });
                },
                enumerable: true,
                configurable: true
            });
        }
        var Options = function() {
            function Options(config) {
                var _this = this;
                if (void 0 === config) config = {};
                this.damping = .1;
                this.thumbMinSize = 20;
                this.renderByPixels = true;
                this.alwaysShowTracks = false;
                this.continuousScrolling = true;
                this.delegateTo = null;
                this.plugins = {};
                Object.keys(config).forEach((function(prop) {
                    _this[prop] = config[prop];
                }));
            }
            Object.defineProperty(Options.prototype, "wheelEventTarget", {
                get: function() {
                    return this.delegateTo;
                },
                set: function(el) {
                    console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.");
                    this.delegateTo = el;
                },
                enumerable: true,
                configurable: true
            });
            __decorate([ range(0, 1) ], Options.prototype, "damping", void 0);
            __decorate([ range(0, 1 / 0) ], Options.prototype, "thumbMinSize", void 0);
            __decorate([ boolean_boolean ], Options.prototype, "renderByPixels", void 0);
            __decorate([ boolean_boolean ], Options.prototype, "alwaysShowTracks", void 0);
            __decorate([ boolean_boolean ], Options.prototype, "continuousScrolling", void 0);
            return Options;
        }();
        var eventListenerOptions;
        var eventMap = new WeakMap;
        function getOptions() {
            if (void 0 !== eventListenerOptions) return eventListenerOptions;
            var supportPassiveEvent = false;
            try {
                var noop = function() {};
                var options = Object.defineProperty({}, "passive", {
                    get: function() {
                        supportPassiveEvent = true;
                    }
                });
                window.addEventListener("testPassive", noop, options);
                window.removeEventListener("testPassive", noop, options);
            } catch (e) {}
            eventListenerOptions = supportPassiveEvent ? {
                passive: false
            } : false;
            return eventListenerOptions;
        }
        function eventScope(scrollbar) {
            var configs = eventMap.get(scrollbar) || [];
            eventMap.set(scrollbar, configs);
            return function addEvent(elem, events, fn) {
                function handler(event) {
                    if (event.defaultPrevented) return;
                    fn(event);
                }
                events.split(/\s+/g).forEach((function(eventName) {
                    configs.push({
                        elem,
                        eventName,
                        handler
                    });
                    elem.addEventListener(eventName, handler, getOptions());
                }));
            };
        }
        function clearEventsOn(scrollbar) {
            var configs = eventMap.get(scrollbar);
            if (!configs) return;
            configs.forEach((function(_a) {
                var elem = _a.elem, eventName = _a.eventName, handler = _a.handler;
                elem.removeEventListener(eventName, handler, getOptions());
            }));
            eventMap.delete(scrollbar);
        }
        function getPointerData(evt) {
            return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
        }
        function getPosition(evt) {
            var data = getPointerData(evt);
            return {
                x: data.clientX,
                y: data.clientY
            };
        }
        function isOneOf(a, b) {
            if (void 0 === b) b = [];
            return b.some((function(v) {
                return a === v;
            }));
        }
        var VENDOR_PREFIX = [ "webkit", "moz", "ms", "o" ];
        var RE = new RegExp("^-(?!(?:" + VENDOR_PREFIX.join("|") + ")-)");
        function autoPrefix(styles) {
            var res = {};
            Object.keys(styles).forEach((function(prop) {
                if (!RE.test(prop)) {
                    res[prop] = styles[prop];
                    return;
                }
                var val = styles[prop];
                prop = prop.replace(/^-/, "");
                res[prop] = val;
                VENDOR_PREFIX.forEach((function(prefix) {
                    res["-" + prefix + "-" + prop] = val;
                }));
            }));
            return res;
        }
        function setStyle(elem, styles) {
            styles = autoPrefix(styles);
            Object.keys(styles).forEach((function(prop) {
                var cssProp = prop.replace(/^-/, "").replace(/-([a-z])/g, (function(_, $1) {
                    return $1.toUpperCase();
                }));
                elem.style[cssProp] = styles[prop];
            }));
        }
        var Tracker = function() {
            function Tracker(touch) {
                this.velocityMultiplier = /Android/.test(navigator.userAgent) ? window.devicePixelRatio : 1;
                this.updateTime = Date.now();
                this.delta = {
                    x: 0,
                    y: 0
                };
                this.velocity = {
                    x: 0,
                    y: 0
                };
                this.lastPosition = {
                    x: 0,
                    y: 0
                };
                this.lastPosition = getPosition(touch);
            }
            Tracker.prototype.update = function(touch) {
                var _a = this, velocity = _a.velocity, updateTime = _a.updateTime, lastPosition = _a.lastPosition;
                var now = Date.now();
                var position = getPosition(touch);
                var delta = {
                    x: -(position.x - lastPosition.x),
                    y: -(position.y - lastPosition.y)
                };
                var duration = now - updateTime || 16.7;
                var vx = delta.x / duration * 16.7;
                var vy = delta.y / duration * 16.7;
                velocity.x = vx * this.velocityMultiplier;
                velocity.y = vy * this.velocityMultiplier;
                this.delta = delta;
                this.updateTime = now;
                this.lastPosition = position;
            };
            return Tracker;
        }();
        var TouchRecord = function() {
            function TouchRecord() {
                this._touchList = {};
            }
            Object.defineProperty(TouchRecord.prototype, "_primitiveValue", {
                get: function() {
                    return {
                        x: 0,
                        y: 0
                    };
                },
                enumerable: true,
                configurable: true
            });
            TouchRecord.prototype.isActive = function() {
                return void 0 !== this._activeTouchID;
            };
            TouchRecord.prototype.getDelta = function() {
                var tracker = this._getActiveTracker();
                if (!tracker) return this._primitiveValue;
                return __assign({}, tracker.delta);
            };
            TouchRecord.prototype.getVelocity = function() {
                var tracker = this._getActiveTracker();
                if (!tracker) return this._primitiveValue;
                return __assign({}, tracker.velocity);
            };
            TouchRecord.prototype.getEasingDistance = function(damping) {
                var deAcceleration = 1 - damping;
                var distance = {
                    x: 0,
                    y: 0
                };
                var vel = this.getVelocity();
                Object.keys(vel).forEach((function(dir) {
                    var v = Math.abs(vel[dir]) <= 10 ? 0 : vel[dir];
                    while (0 !== v) {
                        distance[dir] += v;
                        v = v * deAcceleration | 0;
                    }
                }));
                return distance;
            };
            TouchRecord.prototype.track = function(evt) {
                var _this = this;
                var targetTouches = evt.targetTouches;
                Array.from(targetTouches).forEach((function(touch) {
                    _this._add(touch);
                }));
                return this._touchList;
            };
            TouchRecord.prototype.update = function(evt) {
                var _this = this;
                var touches = evt.touches, changedTouches = evt.changedTouches;
                Array.from(touches).forEach((function(touch) {
                    _this._renew(touch);
                }));
                this._setActiveID(changedTouches);
                return this._touchList;
            };
            TouchRecord.prototype.release = function(evt) {
                var _this = this;
                delete this._activeTouchID;
                Array.from(evt.changedTouches).forEach((function(touch) {
                    _this._delete(touch);
                }));
            };
            TouchRecord.prototype._add = function(touch) {
                if (this._has(touch)) this._delete(touch);
                var tracker = new Tracker(touch);
                this._touchList[touch.identifier] = tracker;
            };
            TouchRecord.prototype._renew = function(touch) {
                if (!this._has(touch)) return;
                var tracker = this._touchList[touch.identifier];
                tracker.update(touch);
            };
            TouchRecord.prototype._delete = function(touch) {
                delete this._touchList[touch.identifier];
            };
            TouchRecord.prototype._has = function(touch) {
                return this._touchList.hasOwnProperty(touch.identifier);
            };
            TouchRecord.prototype._setActiveID = function(touches) {
                this._activeTouchID = touches[touches.length - 1].identifier;
            };
            TouchRecord.prototype._getActiveTracker = function() {
                var _a = this, _touchList = _a._touchList, _activeTouchID = _a._activeTouchID;
                return _touchList[_activeTouchID];
            };
            return TouchRecord;
        }();
        var now = function() {
            return lodash_es_root.Date.now();
        };
        const lodash_es_now = now;
        var FUNC_ERROR_TEXT = "Expected a function";
        var nativeMax = Math.max, nativeMin = Math.min;
        function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
            wait = lodash_es_toNumber(wait) || 0;
            if (lodash_es_isObject(options)) {
                leading = !!options.leading;
                maxing = "maxWait" in options;
                maxWait = maxing ? nativeMax(lodash_es_toNumber(options.maxWait) || 0, wait) : maxWait;
                trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
                var args = lastArgs, thisArg = lastThis;
                lastArgs = lastThis = void 0;
                lastInvokeTime = time;
                result = func.apply(thisArg, args);
                return result;
            }
            function leadingEdge(time) {
                lastInvokeTime = time;
                timerId = setTimeout(timerExpired, wait);
                return leading ? invokeFunc(time) : result;
            }
            function remainingWait(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
                return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                return void 0 === lastCallTime || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
                var time = lodash_es_now();
                if (shouldInvoke(time)) return trailingEdge(time);
                timerId = setTimeout(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
                timerId = void 0;
                if (trailing && lastArgs) return invokeFunc(time);
                lastArgs = lastThis = void 0;
                return result;
            }
            function cancel() {
                if (void 0 !== timerId) clearTimeout(timerId);
                lastInvokeTime = 0;
                lastArgs = lastCallTime = lastThis = timerId = void 0;
            }
            function flush() {
                return void 0 === timerId ? result : trailingEdge(lodash_es_now());
            }
            function debounced() {
                var time = lodash_es_now(), isInvoking = shouldInvoke(time);
                lastArgs = arguments;
                lastThis = this;
                lastCallTime = time;
                if (isInvoking) {
                    if (void 0 === timerId) return leadingEdge(lastCallTime);
                    if (maxing) {
                        clearTimeout(timerId);
                        timerId = setTimeout(timerExpired, wait);
                        return invokeFunc(lastCallTime);
                    }
                }
                if (void 0 === timerId) timerId = setTimeout(timerExpired, wait);
                return result;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
        }
        const lodash_es_debounce = debounce;
        function debounce_debounce() {
            var options = [];
            for (var _i = 0; _i < arguments.length; _i++) options[_i] = arguments[_i];
            return function(_proto, key, descriptor) {
                var fn = descriptor.value;
                return {
                    get: function() {
                        if (!this.hasOwnProperty(key)) Object.defineProperty(this, key, {
                            value: lodash_es_debounce.apply(void 0, __spreadArrays([ fn ], options))
                        });
                        return this[key];
                    }
                };
            };
        }
        var TrackDirection;
        (function(TrackDirection) {
            TrackDirection["X"] = "x";
            TrackDirection["Y"] = "y";
        })(TrackDirection || (TrackDirection = {}));
        var ScrollbarThumb = function() {
            function ScrollbarThumb(_direction, _minSize) {
                if (void 0 === _minSize) _minSize = 0;
                this._direction = _direction;
                this._minSize = _minSize;
                this.element = document.createElement("div");
                this.displaySize = 0;
                this.realSize = 0;
                this.offset = 0;
                this.element.className = "scrollbar-thumb scrollbar-thumb-" + _direction;
            }
            ScrollbarThumb.prototype.attachTo = function(trackEl) {
                trackEl.appendChild(this.element);
            };
            ScrollbarThumb.prototype.update = function(scrollOffset, containerSize, pageSize) {
                this.realSize = Math.min(containerSize / pageSize, 1) * containerSize;
                this.displaySize = Math.max(this.realSize, this._minSize);
                this.offset = scrollOffset / pageSize * (containerSize + (this.realSize - this.displaySize));
                setStyle(this.element, this._getStyle());
            };
            ScrollbarThumb.prototype._getStyle = function() {
                switch (this._direction) {
                  case TrackDirection.X:
                    return {
                        width: this.displaySize + "px",
                        "-transform": "translate3d(" + this.offset + "px, 0, 0)"
                    };

                  case TrackDirection.Y:
                    return {
                        height: this.displaySize + "px",
                        "-transform": "translate3d(0, " + this.offset + "px, 0)"
                    };

                  default:
                    return null;
                }
            };
            return ScrollbarThumb;
        }();
        var ScrollbarTrack = function() {
            function ScrollbarTrack(direction, thumbMinSize) {
                if (void 0 === thumbMinSize) thumbMinSize = 0;
                this.element = document.createElement("div");
                this._isShown = false;
                this.element.className = "scrollbar-track scrollbar-track-" + direction;
                this.thumb = new ScrollbarThumb(direction, thumbMinSize);
                this.thumb.attachTo(this.element);
            }
            ScrollbarTrack.prototype.attachTo = function(scrollbarContainer) {
                scrollbarContainer.appendChild(this.element);
            };
            ScrollbarTrack.prototype.show = function() {
                if (this._isShown) return;
                this._isShown = true;
                this.element.classList.add("show");
            };
            ScrollbarTrack.prototype.hide = function() {
                if (!this._isShown) return;
                this._isShown = false;
                this.element.classList.remove("show");
            };
            ScrollbarTrack.prototype.update = function(scrollOffset, containerSize, pageSize) {
                setStyle(this.element, {
                    display: pageSize <= containerSize ? "none" : "block"
                });
                this.thumb.update(scrollOffset, containerSize, pageSize);
            };
            return ScrollbarTrack;
        }();
        var TrackController = function() {
            function TrackController(_scrollbar) {
                this._scrollbar = _scrollbar;
                var thumbMinSize = _scrollbar.options.thumbMinSize;
                this.xAxis = new ScrollbarTrack(TrackDirection.X, thumbMinSize);
                this.yAxis = new ScrollbarTrack(TrackDirection.Y, thumbMinSize);
                this.xAxis.attachTo(_scrollbar.containerEl);
                this.yAxis.attachTo(_scrollbar.containerEl);
                if (_scrollbar.options.alwaysShowTracks) {
                    this.xAxis.show();
                    this.yAxis.show();
                }
            }
            TrackController.prototype.update = function() {
                var _a = this._scrollbar, size = _a.size, offset = _a.offset;
                this.xAxis.update(offset.x, size.container.width, size.content.width);
                this.yAxis.update(offset.y, size.container.height, size.content.height);
            };
            TrackController.prototype.autoHideOnIdle = function() {
                if (this._scrollbar.options.alwaysShowTracks) return;
                this.xAxis.hide();
                this.yAxis.hide();
            };
            __decorate([ debounce_debounce(300) ], TrackController.prototype, "autoHideOnIdle", null);
            return TrackController;
        }();
        function getSize(scrollbar) {
            var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
            var containerStyles = getComputedStyle(containerEl);
            var paddings = [ "paddingTop", "paddingBottom", "paddingLeft", "paddingRight" ].map((function(prop) {
                return containerStyles[prop] ? parseFloat(containerStyles[prop]) : 0;
            }));
            var verticalPadding = paddings[0] + paddings[1];
            var horizontalPadding = paddings[2] + paddings[3];
            return {
                container: {
                    width: containerEl.clientWidth,
                    height: containerEl.clientHeight
                },
                content: {
                    width: contentEl.offsetWidth - contentEl.clientWidth + contentEl.scrollWidth + horizontalPadding,
                    height: contentEl.offsetHeight - contentEl.clientHeight + contentEl.scrollHeight + verticalPadding
                }
            };
        }
        function update(scrollbar) {
            var newSize = scrollbar.getSize();
            var limit = {
                x: Math.max(newSize.content.width - newSize.container.width, 0),
                y: Math.max(newSize.content.height - newSize.container.height, 0)
            };
            var containerBounding = scrollbar.containerEl.getBoundingClientRect();
            var bounding = {
                top: Math.max(containerBounding.top, 0),
                right: Math.min(containerBounding.right, window.innerWidth),
                bottom: Math.min(containerBounding.bottom, window.innerHeight),
                left: Math.max(containerBounding.left, 0)
            };
            scrollbar.size = newSize;
            scrollbar.limit = limit;
            scrollbar.bounding = bounding;
            scrollbar.track.update();
            scrollbar.setPosition();
        }
        function isVisible(scrollbar, elem) {
            var bounding = scrollbar.bounding;
            var targetBounding = elem.getBoundingClientRect();
            var top = Math.max(bounding.top, targetBounding.top);
            var left = Math.max(bounding.left, targetBounding.left);
            var right = Math.min(bounding.right, targetBounding.right);
            var bottom = Math.min(bounding.bottom, targetBounding.bottom);
            return top < bottom && left < right;
        }
        function setPosition(scrollbar, x, y) {
            var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit, track = scrollbar.track, contentEl = scrollbar.contentEl;
            if (options.renderByPixels) {
                x = Math.round(x);
                y = Math.round(y);
            }
            x = lodash_es_clamp(x, 0, limit.x);
            y = lodash_es_clamp(y, 0, limit.y);
            if (x !== offset.x) track.xAxis.show();
            if (y !== offset.y) track.yAxis.show();
            if (!options.alwaysShowTracks) track.autoHideOnIdle();
            if (x === offset.x && y === offset.y) return null;
            offset.x = x;
            offset.y = y;
            setStyle(contentEl, {
                "-transform": "translate3d(" + -x + "px, " + -y + "px, 0)"
            });
            track.update();
            return {
                offset: __assign({}, offset),
                limit: __assign({}, limit)
            };
        }
        var animationIDStorage = new WeakMap;
        function scrollTo(scrollbar, x, y, duration, _a) {
            if (void 0 === duration) duration = 0;
            var _b = void 0 === _a ? {} : _a, _c = _b.easing, easing = void 0 === _c ? defaultEasing : _c, callback = _b.callback;
            var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit;
            if (options.renderByPixels) {
                x = Math.round(x);
                y = Math.round(y);
            }
            var startX = offset.x;
            var startY = offset.y;
            var disX = lodash_es_clamp(x, 0, limit.x) - startX;
            var disY = lodash_es_clamp(y, 0, limit.y) - startY;
            var start = Date.now();
            function scroll() {
                var elapse = Date.now() - start;
                var progress = duration ? easing(Math.min(elapse / duration, 1)) : 1;
                scrollbar.setPosition(startX + disX * progress, startY + disY * progress);
                if (elapse >= duration) {
                    if ("function" === typeof callback) callback.call(scrollbar);
                } else {
                    var animationID = requestAnimationFrame(scroll);
                    animationIDStorage.set(scrollbar, animationID);
                }
            }
            cancelAnimationFrame(animationIDStorage.get(scrollbar));
            scroll();
        }
        function defaultEasing(t) {
            return Math.pow(t - 1, 3) + 1;
        }
        function scrollIntoView(scrollbar, elem, _a) {
            var _b = void 0 === _a ? {} : _a, _c = _b.alignToTop, alignToTop = void 0 === _c ? true : _c, _d = _b.onlyScrollIfNeeded, onlyScrollIfNeeded = void 0 === _d ? false : _d, _e = _b.offsetTop, offsetTop = void 0 === _e ? 0 : _e, _f = _b.offsetLeft, offsetLeft = void 0 === _f ? 0 : _f, _g = _b.offsetBottom, offsetBottom = void 0 === _g ? 0 : _g;
            var containerEl = scrollbar.containerEl, bounding = scrollbar.bounding, offset = scrollbar.offset, limit = scrollbar.limit;
            if (!elem || !containerEl.contains(elem)) return;
            var targetBounding = elem.getBoundingClientRect();
            if (onlyScrollIfNeeded && scrollbar.isVisible(elem)) return;
            var delta = alignToTop ? targetBounding.top - bounding.top - offsetTop : targetBounding.bottom - bounding.bottom + offsetBottom;
            scrollbar.setMomentum(targetBounding.left - bounding.left - offsetLeft, lodash_es_clamp(delta, -offset.y, limit.y - offset.y));
        }
        var ScrollbarPlugin = function() {
            function ScrollbarPlugin(scrollbar, options) {
                var _newTarget = this.constructor;
                this.scrollbar = scrollbar;
                this.name = _newTarget.pluginName;
                this.options = __assign(__assign({}, _newTarget.defaultOptions), options);
            }
            ScrollbarPlugin.prototype.onInit = function() {};
            ScrollbarPlugin.prototype.onDestroy = function() {};
            ScrollbarPlugin.prototype.onUpdate = function() {};
            ScrollbarPlugin.prototype.onRender = function(_remainMomentum) {};
            ScrollbarPlugin.prototype.transformDelta = function(delta, _evt) {
                return __assign({}, delta);
            };
            ScrollbarPlugin.pluginName = "";
            ScrollbarPlugin.defaultOptions = {};
            return ScrollbarPlugin;
        }();
        var globalPlugins = {
            order: new Set,
            constructors: {}
        };
        function addPlugins() {
            var Plugins = [];
            for (var _i = 0; _i < arguments.length; _i++) Plugins[_i] = arguments[_i];
            Plugins.forEach((function(P) {
                var pluginName = P.pluginName;
                if (!pluginName) throw new TypeError("plugin name is required");
                globalPlugins.order.add(pluginName);
                globalPlugins.constructors[pluginName] = P;
            }));
        }
        function initPlugins(scrollbar, options) {
            return Array.from(globalPlugins.order).filter((function(pluginName) {
                return false !== options[pluginName];
            })).map((function(pluginName) {
                var Plugin = globalPlugins.constructors[pluginName];
                var instance = new Plugin(scrollbar, options[pluginName]);
                options[pluginName] = instance.options;
                return instance;
            }));
        }
        var KEY_CODE;
        (function(KEY_CODE) {
            KEY_CODE[KEY_CODE["TAB"] = 9] = "TAB";
            KEY_CODE[KEY_CODE["SPACE"] = 32] = "SPACE";
            KEY_CODE[KEY_CODE["PAGE_UP"] = 33] = "PAGE_UP";
            KEY_CODE[KEY_CODE["PAGE_DOWN"] = 34] = "PAGE_DOWN";
            KEY_CODE[KEY_CODE["END"] = 35] = "END";
            KEY_CODE[KEY_CODE["HOME"] = 36] = "HOME";
            KEY_CODE[KEY_CODE["LEFT"] = 37] = "LEFT";
            KEY_CODE[KEY_CODE["UP"] = 38] = "UP";
            KEY_CODE[KEY_CODE["RIGHT"] = 39] = "RIGHT";
            KEY_CODE[KEY_CODE["DOWN"] = 40] = "DOWN";
        })(KEY_CODE || (KEY_CODE = {}));
        function keyboardHandler(scrollbar) {
            var addEvent = eventScope(scrollbar);
            var container = scrollbar.containerEl;
            addEvent(container, "keydown", (function(evt) {
                var activeElement = document.activeElement;
                if (activeElement !== container && !container.contains(activeElement)) return;
                if (isEditable(activeElement)) return;
                var delta = getKeyDelta(scrollbar, evt.keyCode || evt.which);
                if (!delta) return;
                var x = delta[0], y = delta[1];
                scrollbar.addTransformableMomentum(x, y, evt, (function(willScroll) {
                    if (willScroll) evt.preventDefault(); else {
                        scrollbar.containerEl.blur();
                        if (scrollbar.parent) scrollbar.parent.containerEl.focus();
                    }
                }));
            }));
        }
        function getKeyDelta(scrollbar, keyCode) {
            var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
            switch (keyCode) {
              case KEY_CODE.TAB:
                return handleTabKey(scrollbar);

              case KEY_CODE.SPACE:
                return [ 0, 200 ];

              case KEY_CODE.PAGE_UP:
                return [ 0, -size.container.height + 40 ];

              case KEY_CODE.PAGE_DOWN:
                return [ 0, size.container.height - 40 ];

              case KEY_CODE.END:
                return [ 0, limit.y - offset.y ];

              case KEY_CODE.HOME:
                return [ 0, -offset.y ];

              case KEY_CODE.LEFT:
                return [ -40, 0 ];

              case KEY_CODE.UP:
                return [ 0, -40 ];

              case KEY_CODE.RIGHT:
                return [ 40, 0 ];

              case KEY_CODE.DOWN:
                return [ 0, 40 ];

              default:
                return null;
            }
        }
        function handleTabKey(scrollbar) {
            requestAnimationFrame((function() {
                scrollbar.scrollIntoView(document.activeElement, {
                    offsetTop: scrollbar.size.container.height / 2,
                    onlyScrollIfNeeded: true
                });
            }));
        }
        function isEditable(elem) {
            if ("INPUT" === elem.tagName || "SELECT" === elem.tagName || "TEXTAREA" === elem.tagName || elem.isContentEditable) return !elem.disabled;
            return false;
        }
        var Direction;
        (function(Direction) {
            Direction[Direction["X"] = 0] = "X";
            Direction[Direction["Y"] = 1] = "Y";
        })(Direction || (Direction = {}));
        function mouseHandler(scrollbar) {
            var addEvent = eventScope(scrollbar);
            var container = scrollbar.containerEl;
            var _a = scrollbar.track, xAxis = _a.xAxis, yAxis = _a.yAxis;
            function calcMomentum(direction, clickPosition) {
                var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
                if (direction === Direction.X) {
                    var totalWidth = size.container.width + (xAxis.thumb.realSize - xAxis.thumb.displaySize);
                    return lodash_es_clamp(clickPosition / totalWidth * size.content.width, 0, limit.x) - offset.x;
                }
                if (direction === Direction.Y) {
                    var totalHeight = size.container.height + (yAxis.thumb.realSize - yAxis.thumb.displaySize);
                    return lodash_es_clamp(clickPosition / totalHeight * size.content.height, 0, limit.y) - offset.y;
                }
                return 0;
            }
            function getTrackDirection(elem) {
                if (isOneOf(elem, [ xAxis.element, xAxis.thumb.element ])) return Direction.X;
                if (isOneOf(elem, [ yAxis.element, yAxis.thumb.element ])) return Direction.Y;
                return;
            }
            var isMouseDown;
            var isMouseMoving;
            var startOffsetToThumb;
            var trackDirection;
            var containerRect;
            addEvent(container, "click", (function(evt) {
                if (isMouseMoving || !isOneOf(evt.target, [ xAxis.element, yAxis.element ])) return;
                var track = evt.target;
                var direction = getTrackDirection(track);
                var rect = track.getBoundingClientRect();
                var clickPos = getPosition(evt);
                if (direction === Direction.X) {
                    var offsetOnTrack = clickPos.x - rect.left - xAxis.thumb.displaySize / 2;
                    scrollbar.setMomentum(calcMomentum(direction, offsetOnTrack), 0);
                }
                if (direction === Direction.Y) {
                    offsetOnTrack = clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
                    scrollbar.setMomentum(0, calcMomentum(direction, offsetOnTrack));
                }
            }));
            addEvent(container, "mousedown", (function(evt) {
                if (!isOneOf(evt.target, [ xAxis.thumb.element, yAxis.thumb.element ])) return;
                isMouseDown = true;
                var thumb = evt.target;
                var cursorPos = getPosition(evt);
                var thumbRect = thumb.getBoundingClientRect();
                trackDirection = getTrackDirection(thumb);
                startOffsetToThumb = {
                    x: cursorPos.x - thumbRect.left,
                    y: cursorPos.y - thumbRect.top
                };
                containerRect = container.getBoundingClientRect();
                setStyle(scrollbar.containerEl, {
                    "-user-select": "none"
                });
            }));
            addEvent(window, "mousemove", (function(evt) {
                if (!isMouseDown) return;
                isMouseMoving = true;
                var cursorPos = getPosition(evt);
                if (trackDirection === Direction.X) {
                    var offsetOnTrack = cursorPos.x - startOffsetToThumb.x - containerRect.left;
                    scrollbar.setMomentum(calcMomentum(trackDirection, offsetOnTrack), 0);
                }
                if (trackDirection === Direction.Y) {
                    offsetOnTrack = cursorPos.y - startOffsetToThumb.y - containerRect.top;
                    scrollbar.setMomentum(0, calcMomentum(trackDirection, offsetOnTrack));
                }
            }));
            addEvent(window, "mouseup blur", (function() {
                isMouseDown = isMouseMoving = false;
                setStyle(scrollbar.containerEl, {
                    "-user-select": ""
                });
            }));
        }
        function resizeHandler(scrollbar) {
            var addEvent = eventScope(scrollbar);
            addEvent(window, "resize", lodash_es_debounce(scrollbar.update.bind(scrollbar), 300));
        }
        function selectHandler(scrollbar) {
            var addEvent = eventScope(scrollbar);
            var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
            var isSelected = false;
            var animationID;
            function scroll(_a) {
                var x = _a.x, y = _a.y;
                if (!x && !y) return;
                var offset = scrollbar.offset, limit = scrollbar.limit;
                scrollbar.setMomentum(lodash_es_clamp(offset.x + x, 0, limit.x) - offset.x, lodash_es_clamp(offset.y + y, 0, limit.y) - offset.y);
                animationID = requestAnimationFrame((function() {
                    scroll({
                        x,
                        y
                    });
                }));
            }
            addEvent(window, "mousemove", (function(evt) {
                if (!isSelected) return;
                cancelAnimationFrame(animationID);
                var dir = calcMomentum(scrollbar, evt);
                scroll(dir);
            }));
            addEvent(contentEl, "selectstart", (function(evt) {
                evt.stopPropagation();
                cancelAnimationFrame(animationID);
                isSelected = true;
            }));
            addEvent(window, "mouseup blur", (function() {
                cancelAnimationFrame(animationID);
                isSelected = false;
            }));
            addEvent(containerEl, "scroll", (function(evt) {
                evt.preventDefault();
                containerEl.scrollTop = containerEl.scrollLeft = 0;
            }));
        }
        function calcMomentum(scrollbar, evt) {
            var _a = scrollbar.bounding, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
            var _b = getPosition(evt), x = _b.x, y = _b.y;
            var res = {
                x: 0,
                y: 0
            };
            var padding = 20;
            if (0 === x && 0 === y) return res;
            if (x > right - padding) res.x = x - right + padding; else if (x < left + padding) res.x = x - left - padding;
            if (y > bottom - padding) res.y = y - bottom + padding; else if (y < top + padding) res.y = y - top - padding;
            res.x *= 2;
            res.y *= 2;
            return res;
        }
        var activeScrollbar;
        function touchHandler(scrollbar) {
            var target = scrollbar.options.delegateTo || scrollbar.containerEl;
            var touchRecord = new TouchRecord;
            var addEvent = eventScope(scrollbar);
            var damping;
            var pointerCount = 0;
            addEvent(target, "touchstart", (function(evt) {
                touchRecord.track(evt);
                scrollbar.setMomentum(0, 0);
                if (0 === pointerCount) {
                    damping = scrollbar.options.damping;
                    scrollbar.options.damping = Math.max(damping, .5);
                }
                pointerCount++;
            }));
            addEvent(target, "touchmove", (function(evt) {
                if (activeScrollbar && activeScrollbar !== scrollbar) return;
                touchRecord.update(evt);
                var _a = touchRecord.getDelta(), x = _a.x, y = _a.y;
                scrollbar.addTransformableMomentum(x, y, evt, (function(willScroll) {
                    if (willScroll && evt.cancelable) {
                        evt.preventDefault();
                        activeScrollbar = scrollbar;
                    }
                }));
            }));
            addEvent(target, "touchcancel touchend", (function(evt) {
                var delta = touchRecord.getEasingDistance(damping);
                scrollbar.addTransformableMomentum(delta.x, delta.y, evt);
                pointerCount--;
                if (0 === pointerCount) scrollbar.options.damping = damping;
                touchRecord.release(evt);
                activeScrollbar = null;
            }));
        }
        function wheelHandler(scrollbar) {
            var addEvent = eventScope(scrollbar);
            var target = scrollbar.options.delegateTo || scrollbar.containerEl;
            var eventName = "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel";
            addEvent(target, eventName, (function(evt) {
                var _a = normalizeDelta(evt), x = _a.x, y = _a.y;
                scrollbar.addTransformableMomentum(x, y, evt, (function(willScroll) {
                    if (willScroll) evt.preventDefault();
                }));
            }));
        }
        var DELTA_SCALE = {
            STANDARD: 1,
            OTHERS: -3
        };
        var DELTA_MODE = [ 1, 28, 500 ];
        var getDeltaMode = function(mode) {
            return DELTA_MODE[mode] || DELTA_MODE[0];
        };
        function normalizeDelta(evt) {
            if ("deltaX" in evt) {
                var mode = getDeltaMode(evt.deltaMode);
                return {
                    x: evt.deltaX / DELTA_SCALE.STANDARD * mode,
                    y: evt.deltaY / DELTA_SCALE.STANDARD * mode
                };
            }
            if ("wheelDeltaX" in evt) return {
                x: evt.wheelDeltaX / DELTA_SCALE.OTHERS,
                y: evt.wheelDeltaY / DELTA_SCALE.OTHERS
            };
            return {
                x: 0,
                y: evt.wheelDelta / DELTA_SCALE.OTHERS
            };
        }
        var scrollbarMap = new Map;
        var Scrollbar = function() {
            function Scrollbar(containerEl, options) {
                var _this = this;
                this.offset = {
                    x: 0,
                    y: 0
                };
                this.limit = {
                    x: 1 / 0,
                    y: 1 / 0
                };
                this.bounding = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                };
                this._plugins = [];
                this._momentum = {
                    x: 0,
                    y: 0
                };
                this._listeners = new Set;
                this.containerEl = containerEl;
                var contentEl = this.contentEl = document.createElement("div");
                this.options = new Options(options);
                containerEl.setAttribute("data-scrollbar", "true");
                containerEl.setAttribute("tabindex", "-1");
                setStyle(containerEl, {
                    overflow: "hidden",
                    outline: "none"
                });
                if (window.navigator.msPointerEnabled) containerEl.style.msTouchAction = "none";
                contentEl.className = "scroll-content";
                Array.from(containerEl.childNodes).forEach((function(node) {
                    contentEl.appendChild(node);
                }));
                containerEl.appendChild(contentEl);
                this.track = new TrackController(this);
                this.size = this.getSize();
                this._plugins = initPlugins(this, this.options.plugins);
                var scrollLeft = containerEl.scrollLeft, scrollTop = containerEl.scrollTop;
                containerEl.scrollLeft = containerEl.scrollTop = 0;
                this.setPosition(scrollLeft, scrollTop, {
                    withoutCallbacks: true
                });
                var ResizeObserver = window.ResizeObserver;
                if ("function" === typeof ResizeObserver) {
                    this._observer = new ResizeObserver((function() {
                        _this.update();
                    }));
                    this._observer.observe(contentEl);
                }
                scrollbarMap.set(containerEl, this);
                requestAnimationFrame((function() {
                    _this._init();
                }));
            }
            Object.defineProperty(Scrollbar.prototype, "parent", {
                get: function() {
                    var elem = this.containerEl.parentElement;
                    while (elem) {
                        var parentScrollbar = scrollbarMap.get(elem);
                        if (parentScrollbar) return parentScrollbar;
                        elem = elem.parentElement;
                    }
                    return null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Scrollbar.prototype, "scrollTop", {
                get: function() {
                    return this.offset.y;
                },
                set: function(y) {
                    this.setPosition(this.scrollLeft, y);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Scrollbar.prototype, "scrollLeft", {
                get: function() {
                    return this.offset.x;
                },
                set: function(x) {
                    this.setPosition(x, this.scrollTop);
                },
                enumerable: true,
                configurable: true
            });
            Scrollbar.prototype.getSize = function() {
                return getSize(this);
            };
            Scrollbar.prototype.update = function() {
                update(this);
                this._plugins.forEach((function(plugin) {
                    plugin.onUpdate();
                }));
            };
            Scrollbar.prototype.isVisible = function(elem) {
                return isVisible(this, elem);
            };
            Scrollbar.prototype.setPosition = function(x, y, options) {
                var _this = this;
                if (void 0 === x) x = this.offset.x;
                if (void 0 === y) y = this.offset.y;
                if (void 0 === options) options = {};
                var status = setPosition(this, x, y);
                if (!status || options.withoutCallbacks) return;
                this._listeners.forEach((function(fn) {
                    fn.call(_this, status);
                }));
            };
            Scrollbar.prototype.scrollTo = function(x, y, duration, options) {
                if (void 0 === x) x = this.offset.x;
                if (void 0 === y) y = this.offset.y;
                if (void 0 === duration) duration = 0;
                if (void 0 === options) options = {};
                scrollTo(this, x, y, duration, options);
            };
            Scrollbar.prototype.scrollIntoView = function(elem, options) {
                if (void 0 === options) options = {};
                scrollIntoView(this, elem, options);
            };
            Scrollbar.prototype.addListener = function(fn) {
                if ("function" !== typeof fn) throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
                this._listeners.add(fn);
            };
            Scrollbar.prototype.removeListener = function(fn) {
                this._listeners.delete(fn);
            };
            Scrollbar.prototype.addTransformableMomentum = function(x, y, fromEvent, callback) {
                this._updateDebounced();
                var finalDelta = this._plugins.reduce((function(delta, plugin) {
                    return plugin.transformDelta(delta, fromEvent) || delta;
                }), {
                    x,
                    y
                });
                var willScroll = !this._shouldPropagateMomentum(finalDelta.x, finalDelta.y);
                if (willScroll) this.addMomentum(finalDelta.x, finalDelta.y);
                if (callback) callback.call(this, willScroll);
            };
            Scrollbar.prototype.addMomentum = function(x, y) {
                this.setMomentum(this._momentum.x + x, this._momentum.y + y);
            };
            Scrollbar.prototype.setMomentum = function(x, y) {
                if (0 === this.limit.x) x = 0;
                if (0 === this.limit.y) y = 0;
                if (this.options.renderByPixels) {
                    x = Math.round(x);
                    y = Math.round(y);
                }
                this._momentum.x = x;
                this._momentum.y = y;
            };
            Scrollbar.prototype.updatePluginOptions = function(pluginName, options) {
                this._plugins.forEach((function(plugin) {
                    if (plugin.name === pluginName) Object.assign(plugin.options, options);
                }));
            };
            Scrollbar.prototype.destroy = function() {
                var _a = this, containerEl = _a.containerEl, contentEl = _a.contentEl;
                clearEventsOn(this);
                this._listeners.clear();
                this.setMomentum(0, 0);
                cancelAnimationFrame(this._renderID);
                if (this._observer) this._observer.disconnect();
                scrollbarMap.delete(this.containerEl);
                var childNodes = Array.from(contentEl.childNodes);
                while (containerEl.firstChild) containerEl.removeChild(containerEl.firstChild);
                childNodes.forEach((function(el) {
                    containerEl.appendChild(el);
                }));
                setStyle(containerEl, {
                    overflow: ""
                });
                containerEl.scrollTop = this.scrollTop;
                containerEl.scrollLeft = this.scrollLeft;
                this._plugins.forEach((function(plugin) {
                    plugin.onDestroy();
                }));
                this._plugins.length = 0;
            };
            Scrollbar.prototype._init = function() {
                var _this = this;
                this.update();
                Object.keys(events_namespaceObject).forEach((function(prop) {
                    events_namespaceObject[prop](_this);
                }));
                this._plugins.forEach((function(plugin) {
                    plugin.onInit();
                }));
                this._render();
            };
            Scrollbar.prototype._updateDebounced = function() {
                this.update();
            };
            Scrollbar.prototype._shouldPropagateMomentum = function(deltaX, deltaY) {
                if (void 0 === deltaX) deltaX = 0;
                if (void 0 === deltaY) deltaY = 0;
                var _a = this, options = _a.options, offset = _a.offset, limit = _a.limit;
                if (!options.continuousScrolling) return false;
                if (0 === limit.x && 0 === limit.y) this._updateDebounced();
                var destX = lodash_es_clamp(deltaX + offset.x, 0, limit.x);
                var destY = lodash_es_clamp(deltaY + offset.y, 0, limit.y);
                var res = true;
                res = res && destX === offset.x;
                res = res && destY === offset.y;
                res = res && (offset.x === limit.x || 0 === offset.x || offset.y === limit.y || 0 === offset.y);
                return res;
            };
            Scrollbar.prototype._render = function() {
                var _momentum = this._momentum;
                if (_momentum.x || _momentum.y) {
                    var nextX = this._nextTick("x");
                    var nextY = this._nextTick("y");
                    _momentum.x = nextX.momentum;
                    _momentum.y = nextY.momentum;
                    this.setPosition(nextX.position, nextY.position);
                }
                var remain = __assign({}, this._momentum);
                this._plugins.forEach((function(plugin) {
                    plugin.onRender(remain);
                }));
                this._renderID = requestAnimationFrame(this._render.bind(this));
            };
            Scrollbar.prototype._nextTick = function(direction) {
                var _a = this, options = _a.options, offset = _a.offset, _momentum = _a._momentum;
                var current = offset[direction];
                var remain = _momentum[direction];
                if (Math.abs(remain) <= .1) return {
                    momentum: 0,
                    position: current + remain
                };
                var nextMomentum = remain * (1 - options.damping);
                if (options.renderByPixels) nextMomentum |= 0;
                return {
                    momentum: nextMomentum,
                    position: current + remain - nextMomentum
                };
            };
            __decorate([ debounce_debounce(100, {
                leading: true
            }) ], Scrollbar.prototype, "_updateDebounced", null);
            return Scrollbar;
        }();
        var TRACK_BG = "rgba(222, 222, 222, .75)";
        var THUMB_BG = "rgba(0, 0, 0, .5)";
        var SCROLLBAR_STYLE = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: " + TRACK_BG + ";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: " + THUMB_BG + ";\n  border-radius: 4px;\n}\n";
        var STYLE_ID = "smooth-scrollbar-style";
        var isStyleAttached = false;
        function attachStyle() {
            if (isStyleAttached || "undefined" === typeof window) return;
            var styleEl = document.createElement("style");
            styleEl.id = STYLE_ID;
            styleEl.textContent = SCROLLBAR_STYLE;
            if (document.head) document.head.appendChild(styleEl);
            isStyleAttached = true;
        }
        function detachStyle() {
            if (!isStyleAttached || "undefined" === typeof window) return;
            var styleEl = document.getElementById(STYLE_ID);
            if (!styleEl || !styleEl.parentNode) return;
            styleEl.parentNode.removeChild(styleEl);
            isStyleAttached = false;
        }
        (function(_super) {
            __extends(SmoothScrollbar, _super);
            function SmoothScrollbar() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            SmoothScrollbar.init = function(elem, options) {
                if (!elem || 1 !== elem.nodeType) throw new TypeError("expect element to be DOM Element, but got " + elem);
                attachStyle();
                if (scrollbarMap.has(elem)) return scrollbarMap.get(elem);
                return new Scrollbar(elem, options);
            };
            SmoothScrollbar.initAll = function(options) {
                return Array.from(document.querySelectorAll("[data-scrollbar]"), (function(elem) {
                    return SmoothScrollbar.init(elem, options);
                }));
            };
            SmoothScrollbar.has = function(elem) {
                return scrollbarMap.has(elem);
            };
            SmoothScrollbar.get = function(elem) {
                return scrollbarMap.get(elem);
            };
            SmoothScrollbar.getAll = function() {
                return Array.from(scrollbarMap.values());
            };
            SmoothScrollbar.destroy = function(elem) {
                var scrollbar = scrollbarMap.get(elem);
                if (scrollbar) scrollbar.destroy();
            };
            SmoothScrollbar.destroyAll = function() {
                scrollbarMap.forEach((function(scrollbar) {
                    scrollbar.destroy();
                }));
            };
            SmoothScrollbar.use = function() {
                var Plugins = [];
                for (var _i = 0; _i < arguments.length; _i++) Plugins[_i] = arguments[_i];
                return addPlugins.apply(void 0, Plugins);
            };
            SmoothScrollbar.attachStyle = function() {
                return attachStyle();
            };
            SmoothScrollbar.detachStyle = function() {
                return detachStyle();
            };
            SmoothScrollbar.version = "8.7.4";
            SmoothScrollbar.ScrollbarPlugin = ScrollbarPlugin;
        })(Scrollbar);
        gsapWithCSS.registerPlugin(Flip, ScrollTrigger, MotionPathPlugin, TextPlugin, ScrollToPlugin);
        document.querySelectorAll(".bottom-about__column");
        const preloader = gsapWithCSS.timeline(), mainBlock = gsapWithCSS.timeline();
        preloader.to(".preloader__text", {
            duration: .6,
            translateY: 0,
            ease: "Power4.out",
            delay: 1
        }).to(".preloader", {
            zIndex: -1
        }).to(".preloader__top", {
            top: "-10%",
            delay: 1,
            duration: 1,
            ease: "Power4.out"
        }, "-=1").to(".preloader__bottom", {
            top: "110%",
            delay: 1,
            duration: .9,
            ease: "Power4.out"
        }, "-=2").to(".preloader", {
            opacity: 0,
            visibility: "hidden"
        });
        mainBlock.to(".content-main", {
            scale: 1,
            duration: 1,
            ease: "Power4.out",
            delay: 2.1
        }).to(".content-main__title", {
            translateY: 0,
            opacity: 1,
            duration: 1,
            ease: "Power4.out"
        }, "-=0.6").to(".content-main__subtitle", {
            translateY: 0,
            opacity: 1,
            duration: 1,
            ease: "Power4.out"
        }, "-=0.8").to(".content-main__btn", {
            translateY: 0,
            opacity: 1,
            duration: 1,
            ease: "Power4.out"
        }, "-=0.7").to(".content-main__circle", {
            scale: 1,
            duration: .6,
            ease: "Power4.out"
        }, "-=1.4");
        gsapWithCSS.to(".top-about__title", {
            scrollTrigger: {
                trigger: ".top-about__title",
                markers: true
            },
            translateY: 0,
            opacity: 1,
            duration: 1
        });
        gsapWithCSS.to(".top-about__photo", {
            scrollTrigger: {
                trigger: ".top-about__photo",
                markers: true
            },
            scale: 1,
            duration: 1
        });
        gsapWithCSS.to(".bottom-about__story", {
            scrollTrigger: {
                trigger: ".bottom-about__story",
                markers: true
            },
            translateX: 0,
            opacity: 1,
            duration: 1
        });
        gsapWithCSS.to(".bottom-about__tools", {
            scrollTrigger: {
                trigger: ".bottom-about__tools",
                markers: true
            },
            translateX: 0,
            opacity: 1,
            duration: 1
        });
        gsapWithCSS.to(".bottom-about__contacts", {
            scrollTrigger: {
                trigger: ".bottom-about__contacts",
                markers: true
            },
            translateX: 0,
            opacity: 1,
            duration: 1
        });
        const projectsPhoto = document.querySelectorAll(".item-projects__photo");
        projectsPhoto.forEach((photo => {
            gsapWithCSS.to(photo, {
                scrollTrigger: {
                    trigger: photo,
                    markers: true
                },
                scale: 1,
                opacity: 1,
                duration: 1
            });
        }));
        const projectsTitle = document.querySelectorAll(".item-projects__title");
        projectsTitle.forEach((title => {
            gsapWithCSS.to(title, {
                scrollTrigger: {
                    trigger: title,
                    markers: true
                },
                translateY: 0,
                opacity: 1,
                duration: 1
            });
        }));
        const projectsBtn = document.querySelectorAll(".item-projects__btn");
        projectsBtn.forEach((btn => {
            gsapWithCSS.to(btn, {
                scrollTrigger: {
                    trigger: btn,
                    markers: true
                },
                translateY: 0,
                opacity: 1,
                duration: 1
            });
        }));
        window["FLS"] = true;
        isWebp();
        pageNavigation();
    })();
})();