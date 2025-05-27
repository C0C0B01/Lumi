var WINTRY_START_TIME = nativePerformanceNow(); var window = typeof globalThis !== 'undefined' ? globalThis : this;
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function")
      for (var keys = __getOwnPropNames(from), i2 = 0, n3 = keys.length, key; i2 < n3; i2++) {
        key = keys[i2];
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: ((k) => from[k]).bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@swc/helpers/esm/_get_prototype_of.js
  function _get_prototype_of(o2) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : /* @__PURE__ */ __name(function getPrototypeOf2(o3) {
      return o3.__proto__ || Object.getPrototypeOf(o3);
    }, "getPrototypeOf");
    return _get_prototype_of(o2);
  }
  var init_get_prototype_of = __esm({
    "node_modules/@swc/helpers/esm/_get_prototype_of.js"() {
      __name(_get_prototype_of, "_get_prototype_of");
    }
  });

  // node_modules/@swc/helpers/esm/_is_native_reflect_construct.js
  function _is_native_reflect_construct() {
    try {
      var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (_) {
    }
    return (_is_native_reflect_construct = /* @__PURE__ */ __name(function _is_native_reflect_construct2() {
      return !!result;
    }, "_is_native_reflect_construct"))();
  }
  var init_is_native_reflect_construct = __esm({
    "node_modules/@swc/helpers/esm/_is_native_reflect_construct.js"() {
      __name(_is_native_reflect_construct, "_is_native_reflect_construct");
    }
  });

  // node_modules/@swc/helpers/esm/_assert_this_initialized.js
  function _assert_this_initialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
  }
  var init_assert_this_initialized = __esm({
    "node_modules/@swc/helpers/esm/_assert_this_initialized.js"() {
      __name(_assert_this_initialized, "_assert_this_initialized");
    }
  });

  // node_modules/@swc/helpers/esm/_type_of.js
  function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
  }
  var init_type_of = __esm({
    "node_modules/@swc/helpers/esm/_type_of.js"() {
      __name(_type_of, "_type_of");
    }
  });

  // node_modules/@swc/helpers/esm/_possible_constructor_return.js
  function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) return call;
    return _assert_this_initialized(self);
  }
  var init_possible_constructor_return = __esm({
    "node_modules/@swc/helpers/esm/_possible_constructor_return.js"() {
      init_assert_this_initialized();
      init_type_of();
      __name(_possible_constructor_return, "_possible_constructor_return");
    }
  });

  // node_modules/@swc/helpers/esm/_call_super.js
  function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
  }
  var init_call_super = __esm({
    "node_modules/@swc/helpers/esm/_call_super.js"() {
      init_get_prototype_of();
      init_is_native_reflect_construct();
      init_possible_constructor_return();
      __name(_call_super, "_call_super");
    }
  });

  // node_modules/@swc/helpers/esm/_class_call_check.js
  function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
  }
  var init_class_call_check = __esm({
    "node_modules/@swc/helpers/esm/_class_call_check.js"() {
      __name(_class_call_check, "_class_call_check");
    }
  });

  // node_modules/@swc/helpers/esm/_create_class.js
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var init_create_class = __esm({
    "node_modules/@swc/helpers/esm/_create_class.js"() {
      __name(_defineProperties, "_defineProperties");
      __name(_create_class, "_create_class");
    }
  });

  // node_modules/@swc/helpers/esm/_set_prototype_of.js
  function _set_prototype_of(o2, p2) {
    _set_prototype_of = Object.setPrototypeOf || /* @__PURE__ */ __name(function setPrototypeOf(o3, p3) {
      o3.__proto__ = p3;
      return o3;
    }, "setPrototypeOf");
    return _set_prototype_of(o2, p2);
  }
  var init_set_prototype_of = __esm({
    "node_modules/@swc/helpers/esm/_set_prototype_of.js"() {
      __name(_set_prototype_of, "_set_prototype_of");
    }
  });

  // node_modules/@swc/helpers/esm/_inherits.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
  }
  var init_inherits = __esm({
    "node_modules/@swc/helpers/esm/_inherits.js"() {
      init_set_prototype_of();
      __name(_inherits, "_inherits");
    }
  });

  // node_modules/@swc/helpers/esm/_construct.js
  function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) _construct = Reflect.construct;
    else {
      _construct = /* @__PURE__ */ __name(function construct(Parent2, args2, Class2) {
        var a = [
          null
        ];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2) _set_prototype_of(instance, Class2.prototype);
        return instance;
      }, "construct");
    }
    return _construct.apply(null, arguments);
  }
  var init_construct = __esm({
    "node_modules/@swc/helpers/esm/_construct.js"() {
      init_is_native_reflect_construct();
      init_set_prototype_of();
      __name(_construct, "_construct");
    }
  });

  // node_modules/@swc/helpers/esm/_is_native_function.js
  function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  var init_is_native_function = __esm({
    "node_modules/@swc/helpers/esm/_is_native_function.js"() {
      __name(_is_native_function, "_is_native_function");
    }
  });

  // node_modules/@swc/helpers/esm/_wrap_native_super.js
  function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrap_native_super = /* @__PURE__ */ __name(function _wrap_native_super2(Class2) {
      if (Class2 === null || !_is_native_function(Class2)) return Class2;
      if (typeof Class2 !== "function") throw new TypeError("Super expression must either be null or a function");
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2)) return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _get_prototype_of(this).constructor);
      }
      __name(Wrapper, "Wrapper");
      Wrapper.prototype = Object.create(Class2.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _set_prototype_of(Wrapper, Class2);
    }, "_wrap_native_super");
    return _wrap_native_super(Class);
  }
  var init_wrap_native_super = __esm({
    "node_modules/@swc/helpers/esm/_wrap_native_super.js"() {
      init_construct();
      init_get_prototype_of();
      init_is_native_function();
      init_set_prototype_of();
      __name(_wrap_native_super, "_wrap_native_super");
    }
  });

  // node_modules/strict-event-emitter/lib/index.mjs
  var MemoryLeakError, _Emitter, Emitter;
  var init_lib = __esm({
    "node_modules/strict-event-emitter/lib/index.mjs"() {
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_inherits();
      init_wrap_native_super();
      MemoryLeakError = /* @__PURE__ */ function(Error1) {
        "use strict";
        _inherits(MemoryLeakError2, Error1);
        function MemoryLeakError2(emitter, type, count) {
          _class_call_check(this, MemoryLeakError2);
          var _this;
          _this = _call_super(this, MemoryLeakError2, [
            `Possible EventEmitter memory leak detected. ${count} ${type.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`
          ]);
          _this.emitter = emitter;
          _this.type = type;
          _this.count = count;
          _this.name = "MaxListenersExceededWarning";
          return _this;
        }
        __name(MemoryLeakError2, "MemoryLeakError");
        return MemoryLeakError2;
      }(_wrap_native_super(Error));
      _Emitter = /* @__PURE__ */ function() {
        "use strict";
        function _Emitter1() {
          _class_call_check(this, _Emitter1);
          this.events = /* @__PURE__ */ new Map();
          this.maxListeners = _Emitter.defaultMaxListeners;
          this.hasWarnedAboutPotentialMemoryLeak = false;
        }
        __name(_Emitter1, "_Emitter1");
        _create_class(_Emitter1, [
          {
            key: "_emitInternalEvent",
            value: /* @__PURE__ */ __name(function _emitInternalEvent(internalEventName, eventName, listener) {
              this.emit(internalEventName, ...[
                eventName,
                listener
              ]);
            }, "_emitInternalEvent")
          },
          {
            key: "_getListeners",
            value: /* @__PURE__ */ __name(function _getListeners(eventName) {
              return Array.prototype.concat.apply([], this.events.get(eventName)) || [];
            }, "_getListeners")
          },
          {
            key: "_removeListener",
            value: /* @__PURE__ */ __name(function _removeListener(listeners, listener) {
              var index = listeners.indexOf(listener);
              if (index > -1) {
                listeners.splice(index, 1);
              }
              return [];
            }, "_removeListener")
          },
          {
            key: "_wrapOnceListener",
            value: /* @__PURE__ */ __name(function _wrapOnceListener(eventName, listener) {
              var onceListener = /* @__PURE__ */ __name((...data) => {
                this.removeListener(eventName, onceListener);
                return listener.apply(this, data);
              }, "onceListener");
              Object.defineProperty(onceListener, "name", {
                value: listener.name
              });
              return onceListener;
            }, "_wrapOnceListener")
          },
          {
            key: "setMaxListeners",
            value: /* @__PURE__ */ __name(function setMaxListeners(maxListeners) {
              this.maxListeners = maxListeners;
              return this;
            }, "setMaxListeners")
          },
          {
            /**
            * Returns the current max listener value for the `Emitter` which is
            * either set by `emitter.setMaxListeners(n)` or defaults to
            * `Emitter.defaultMaxListeners`.
            */
            key: "getMaxListeners",
            value: /* @__PURE__ */ __name(function getMaxListeners() {
              return this.maxListeners;
            }, "getMaxListeners")
          },
          {
            /**
            * Returns an array listing the events for which the emitter has registered listeners.
            * The values in the array will be strings or Symbols.
            */
            key: "eventNames",
            value: /* @__PURE__ */ __name(function eventNames() {
              return Array.from(this.events.keys());
            }, "eventNames")
          },
          {
            /**
            * Synchronously calls each of the listeners registered for the event named `eventName`,
            * in the order they were registered, passing the supplied arguments to each.
            * Returns `true` if the event has listeners, `false` otherwise.
            *
            * @example
            * const emitter = new Emitter<{ hello: [string] }>()
            * emitter.emit('hello', 'John')
            */
            key: "emit",
            value: /* @__PURE__ */ __name(function emit(eventName, ...data) {
              var listeners = this._getListeners(eventName);
              listeners.forEach((listener) => {
                listener.apply(this, data);
              });
              return listeners.length > 0;
            }, "emit")
          },
          {
            key: "addListener",
            value: /* @__PURE__ */ __name(function addListener(eventName, listener) {
              this._emitInternalEvent("newListener", eventName, listener);
              var nextListeners = this._getListeners(eventName).concat(listener);
              this.events.set(eventName, nextListeners);
              if (this.maxListeners > 0 && this.listenerCount(eventName) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
                this.hasWarnedAboutPotentialMemoryLeak = true;
                var memoryLeakWarning = new MemoryLeakError(this, eventName, this.listenerCount(eventName));
                console.warn(memoryLeakWarning);
              }
              return this;
            }, "addListener")
          },
          {
            key: "on",
            value: /* @__PURE__ */ __name(function on(eventName, listener) {
              return this.addListener(eventName, listener);
            }, "on")
          },
          {
            key: "once",
            value: /* @__PURE__ */ __name(function once(eventName, listener) {
              return this.addListener(eventName, this._wrapOnceListener(eventName, listener));
            }, "once")
          },
          {
            key: "prependListener",
            value: /* @__PURE__ */ __name(function prependListener(eventName, listener) {
              var listeners = this._getListeners(eventName);
              if (listeners.length > 0) {
                var nextListeners = [
                  listener
                ].concat(listeners);
                this.events.set(eventName, nextListeners);
              } else {
                this.events.set(eventName, listeners.concat(listener));
              }
              return this;
            }, "prependListener")
          },
          {
            key: "prependOnceListener",
            value: /* @__PURE__ */ __name(function prependOnceListener(eventName, listener) {
              return this.prependListener(eventName, this._wrapOnceListener(eventName, listener));
            }, "prependOnceListener")
          },
          {
            key: "removeListener",
            value: /* @__PURE__ */ __name(function removeListener(eventName, listener) {
              var listeners = this._getListeners(eventName);
              if (listeners.length > 0) {
                this._removeListener(listeners, listener);
                this.events.set(eventName, listeners);
                this._emitInternalEvent("removeListener", eventName, listener);
              }
              return this;
            }, "removeListener")
          },
          {
            /**
            * Alias for `emitter.removeListener()`.
            *
            * @example
            * emitter.off('hello', listener)
            */
            key: "off",
            value: /* @__PURE__ */ __name(function off(eventName, listener) {
              return this.removeListener(eventName, listener);
            }, "off")
          },
          {
            key: "removeAllListeners",
            value: /* @__PURE__ */ __name(function removeAllListeners(eventName) {
              if (eventName) {
                this.events.delete(eventName);
              } else {
                this.events.clear();
              }
              return this;
            }, "removeAllListeners")
          },
          {
            /**
            * Returns a copy of the array of listeners for the event named `eventName`.
            */
            key: "listeners",
            value: /* @__PURE__ */ __name(function listeners(eventName) {
              return Array.from(this._getListeners(eventName));
            }, "listeners")
          },
          {
            /**
            * Returns the number of listeners listening to the event named `eventName`.
            */
            key: "listenerCount",
            value: /* @__PURE__ */ __name(function listenerCount(eventName) {
              return this._getListeners(eventName).length;
            }, "listenerCount")
          },
          {
            key: "rawListeners",
            value: /* @__PURE__ */ __name(function rawListeners(eventName) {
              return this.listeners(eventName);
            }, "rawListeners")
          }
        ], [
          {
            key: "listenerCount",
            value: /* @__PURE__ */ __name(function listenerCount(emitter, eventName) {
              return emitter.listenerCount(eventName);
            }, "listenerCount")
          }
        ]);
        return _Emitter1;
      }();
      Emitter = _Emitter;
      Emitter.defaultMaxListeners = 10;
    }
  });

  // src/metro/internal/events.ts
  var events_exports = {};
  __export(events_exports, {
    metroEvents: () => metroEvents,
    modulesInitializationEvents: () => modulesInitializationEvents
  });
  var metroEvents, modulesInitializationEvents;
  var init_events = __esm({
    "src/metro/internal/events.ts"() {
      "use strict";
      init_lib();
      metroEvents = new Emitter();
      modulesInitializationEvents = new Emitter();
      metroEvents.setMaxListeners(Number.POSITIVE_INFINITY);
    }
  });

  // src/metro/internal/registry.ts
  var registry_exports = {};
  __export(registry_exports, {
    _importingModuleId: () => _importingModuleId,
    initializedModuleRegistry: () => initializedModuleRegistry,
    internal_getDefiner: () => internal_getDefiner,
    internal_onModuleLoaded: () => internal_onModuleLoaded,
    moduleRegistry: () => moduleRegistry
  });
  function internal_getDefiner(originalDefiner, onceIndexRequired) {
    return (factory, id, dependencies) => {
      var wrappedFactory = wrapModuleFactory(id, onceIndexRequired, factory);
      var state2 = {
        id,
        dependencies,
        initialized: false,
        meta: {}
      };
      moduleRegistry.set(id, state2);
      originalDefiner(wrappedFactory, id, dependencies);
    };
  }
  function wrapModuleFactory(id, onceIndexRequired, factory) {
    return (a0, a1, a2, a3, a4, a5, a6) => {
      var state2 = moduleRegistry.get(id);
      if (id === 0) {
        onceIndexRequired(() => factory(a0, a1, a2, a3, a4, a5, a6));
        state2.initialized = true;
        return;
      }
      var originalImportingModuleId = _importingModuleId;
      _importingModuleId = id;
      try {
        factory(a0, a1, a2, a3, a4, a5, a6);
      } catch (e3) {
        state2.error = e3;
      } finally {
        _importingModuleId = originalImportingModuleId;
        state2.module = a4;
        state2.initialized = true;
        initializedModuleRegistry.add(state2);
        for (var handler of internal_onModuleLoaded) handler(state2);
        metroEvents.emit("moduleLoaded", state2);
        modulesInitializationEvents.emit(id);
      }
    };
  }
  var moduleRegistry, initializedModuleRegistry, internal_onModuleLoaded, _importingModuleId;
  var init_registry = __esm({
    "src/metro/internal/registry.ts"() {
      "use strict";
      init_events();
      moduleRegistry = /* @__PURE__ */ new Map();
      initializedModuleRegistry = /* @__PURE__ */ new Set();
      internal_onModuleLoaded = /* @__PURE__ */ new Set();
      _importingModuleId = -1;
      __name(internal_getDefiner, "internal_getDefiner");
      __name(wrapModuleFactory, "wrapModuleFactory");
    }
  });

  // src/utils/objects.ts
  var objects_exports = {};
  __export(objects_exports, {
    default: () => hookDefineProperty,
    findInReactTree: () => findInReactTree,
    findInTree: () => findInTree
  });
  function hookDefineProperty(target, property, cb) {
    var targetAsAny = target;
    if (property in target) {
      return void cb(targetAsAny[property]);
    }
    var value;
    Object.defineProperty(targetAsAny, property, {
      get: /* @__PURE__ */ __name(() => value, "get"),
      set(v) {
        value = cb(v) ?? v;
      },
      configurable: true,
      enumerable: false
    });
    return () => {
      delete targetAsAny[property];
      targetAsAny[property] = value;
    };
  }
  function treeSearch(tree, filter, opts, depth) {
    if (depth > opts.maxDepth) return;
    if (!tree) return;
    try {
      if (filter(tree)) return tree;
    } catch (e3) {
    }
    if (Array.isArray(tree)) {
      for (var item of tree) {
        if (typeof item !== "object" || item === null) continue;
        try {
          var found = treeSearch(item, filter, opts, depth + 1);
          if (found) return found;
        } catch (e3) {
        }
      }
    } else if (typeof tree === "object") {
      for (var key of Object.keys(tree)) {
        if (typeof tree[key] !== "object" || tree[key] === null) continue;
        if (opts.walkable.length && !opts.walkable.includes(key)) continue;
        if (opts.ignore.includes(key)) continue;
        try {
          var found1 = treeSearch(tree[key], filter, opts, depth + 1);
          if (found1) return found1;
        } catch (e3) {
        }
      }
    }
  }
  function findInTree(tree, filter, { walkable = [], ignore = [], maxDepth = 100 } = {}) {
    return treeSearch(tree, filter, {
      walkable,
      ignore,
      maxDepth
    }, 0);
  }
  function findInReactTree(tree, filter) {
    return findInTree(tree, filter, {
      walkable: [
        "props",
        "children",
        "child",
        "sibling"
      ]
    });
  }
  var init_objects = __esm({
    "src/utils/objects.ts"() {
      "use strict";
      __name(hookDefineProperty, "hookDefineProperty");
      __name(treeSearch, "treeSearch");
      __name(findInTree, "findInTree");
      __name(findInReactTree, "findInReactTree");
    }
  });

  // node_modules/@swc/helpers/esm/_define_property.js
  function _define_property(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else obj[key] = value;
    return obj;
  }
  var init_define_property = __esm({
    "node_modules/@swc/helpers/esm/_define_property.js"() {
      __name(_define_property, "_define_property");
    }
  });

  // node_modules/node-inspect-extracted/dist/inspect.js
  var require_inspect = __commonJS({
    "node_modules/node-inspect-extracted/dist/inspect.js"(exports, module3) {
      !function(t4, e3) {
        "object" == typeof exports && "object" == typeof module3 ? module3.exports = e3() : "function" == typeof define && define.amd ? define([], e3) : "object" == typeof exports ? exports.util = e3() : t4.util = e3();
      }(exports, () => (() => {
        "use strict";
        var t4 = {
          765: (t5, e4) => {
            function r5(t6) {
              return r5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function r6(t7) {
                return typeof t7;
              }, "r") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, r5(t6);
            }
            __name(r5, "r");
            function n3(t6, e5) {
              for (var _$r = 0; _$r < e5.length; _$r++) {
                var n4 = e5[_$r];
                n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(t6, o2(n4.key), n4);
              }
            }
            __name(n3, "n");
            function o2(t6) {
              var _$e = function(t7, e5) {
                if ("object" != r5(t7) || !t7) return t7;
                var n4 = t7[Symbol.toPrimitive];
                if (void 0 !== n4) {
                  var o3 = n4.call(t7, "string");
                  if ("object" != r5(o3)) return o3;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t7);
              }(t6);
              return "symbol" == r5(_$e) ? _$e : _$e + "";
            }
            __name(o2, "o");
            var i2 = function() {
              return t6 = /* @__PURE__ */ __name(function t7() {
                !function(t8, e5) {
                  if (!(t8 instanceof e5)) throw new TypeError("Cannot call a class as a function");
                }(this, t7);
              }, "t"), _$e = [
                {
                  key: "hexSlice",
                  value: /* @__PURE__ */ __name(function value() {
                    var t7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, _$e2 = arguments.length > 1 ? arguments[1] : void 0;
                    return Array.prototype.map.call(this.slice(t7, _$e2), function(t8) {
                      return ("00" + t8.toString(16)).slice(-2);
                    }).join("");
                  }, "value")
                }
              ], _$e && n3(t6.prototype, _$e), Object.defineProperty(t6, "prototype", {
                writable: false
              }), t6;
              var t6, _$e;
            }();
            e4.h = i2;
          },
          339: (t5, e4, r5) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            function o2(t6, e5) {
              var _$r = "undefined" != typeof Symbol && t6[Symbol.iterator] || t6["@@iterator"];
              if (!_$r) {
                if (Array.isArray(t6) || (_$r = function(t7, e6) {
                  if (t7) {
                    if ("string" == typeof t7) return i2(t7, e6);
                    var _$r2 = Object.prototype.toString.call(t7).slice(8, -1);
                    return "Object" === _$r2 && t7.constructor && (_$r2 = t7.constructor.name), "Map" === _$r2 || "Set" === _$r2 ? Array.from(t7) : "Arguments" === _$r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_$r2) ? i2(t7, e6) : void 0;
                  }
                }(t6)) || e5 && t6 && "number" == typeof t6.length) {
                  _$r && (t6 = _$r);
                  var n4 = 0, o3 = /* @__PURE__ */ __name(function o4() {
                  }, "o");
                  return {
                    s: o3,
                    n: /* @__PURE__ */ __name(function n1() {
                      return n4 >= t6.length ? {
                        done: true
                      } : {
                        done: false,
                        value: t6[n4++]
                      };
                    }, "n1"),
                    e: /* @__PURE__ */ __name(function e6(t7) {
                      throw t7;
                    }, "e"),
                    f: o3
                  };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var a2, c3 = true, l3 = false;
              return {
                s: /* @__PURE__ */ __name(function s2() {
                  _$r = _$r.call(t6);
                }, "s"),
                n: /* @__PURE__ */ __name(function n5() {
                  var _$t = _$r.next();
                  return c3 = _$t.done, _$t;
                }, "n"),
                e: /* @__PURE__ */ __name(function e6(t7) {
                  l3 = true, a2 = t7;
                }, "e"),
                f: /* @__PURE__ */ __name(function f2() {
                  try {
                    c3 || null == _$r.return || _$r.return();
                  } finally {
                    if (l3) throw a2;
                  }
                }, "f")
              };
            }
            __name(o2, "o");
            function i2(t6, e5) {
              (null == e5 || e5 > t6.length) && (e5 = t6.length);
              for (var _$r = 0, n4 = new Array(e5); _$r < e5; _$r++) n4[_$r] = t6[_$r];
              return n4;
            }
            __name(i2, "i");
            function a(t6, e5) {
              var _$r = Object.keys(t6);
              if (Object.getOwnPropertySymbols) {
                var n4 = Object.getOwnPropertySymbols(t6);
                e5 && (n4 = n4.filter(function(e6) {
                  return Object.getOwnPropertyDescriptor(t6, e6).enumerable;
                })), _$r.push.apply(_$r, n4);
              }
              return _$r;
            }
            __name(a, "a");
            function c2(t6) {
              for (var e5 = 1; e5 < arguments.length; e5++) {
                var _$r = null != arguments[e5] ? arguments[e5] : {};
                e5 % 2 ? a(Object(_$r), true).forEach(function(e6) {
                  l2(t6, e6, _$r[e6]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t6, Object.getOwnPropertyDescriptors(_$r)) : a(Object(_$r)).forEach(function(e6) {
                  Object.defineProperty(t6, e6, Object.getOwnPropertyDescriptor(_$r, e6));
                });
              }
              return t6;
            }
            __name(c2, "c");
            function l2(t6, e5, r6) {
              var o3;
              return o3 = function(t7, e6) {
                if ("object" != n3(t7) || !t7) return t7;
                var _$r = t7[Symbol.toPrimitive];
                if (void 0 !== _$r) {
                  var o4 = _$r.call(t7, "string");
                  if ("object" != n3(o4)) return o4;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t7);
              }(e5), (e5 = "symbol" == n3(o3) ? o3 : o3 + "") in t6 ? Object.defineProperty(t6, e5, {
                value: r6,
                enumerable: true,
                configurable: true,
                writable: true
              }) : t6[e5] = r6, t6;
            }
            __name(l2, "l");
            var u, p2, f = r5(951), y = f.internalBinding, s = f.Array, g = f.ArrayIsArray, d = f.ArrayPrototypeFilter, b = f.ArrayPrototypeForEach, h = f.ArrayPrototypeIncludes, v = f.ArrayPrototypeIndexOf, m2 = f.ArrayPrototypeJoin, S = f.ArrayPrototypeMap, P = f.ArrayPrototypePop, x = f.ArrayPrototypePush, O = f.ArrayPrototypePushApply, w = f.ArrayPrototypeSlice, A = f.ArrayPrototypeSort, j = f.ArrayPrototypeSplice, E = f.ArrayPrototypeUnshift, _ = f.BigIntPrototypeValueOf, F = f.BooleanPrototypeValueOf, L = f.DatePrototypeGetTime, R = f.DatePrototypeToISOString, k = f.DatePrototypeToString, T = f.ErrorPrototypeToString, I = f.FunctionPrototypeBind, z = f.FunctionPrototypeCall, M = f.FunctionPrototypeToString, B = f.JSONStringify, N = f.MapPrototypeEntries, D = f.MapPrototypeGetSize, C = f.MathFloor, H = f.MathMax, G = f.MathMin, W = f.MathRound, V = f.MathSqrt, U = f.MathTrunc, $ = f.Number, Z = f.NumberIsFinite, q = f.NumberIsNaN, K = f.NumberParseFloat, Y = f.NumberParseInt, J = f.NumberPrototypeToString, Q = f.NumberPrototypeValueOf, X = f.Object, tt = f.ObjectAssign, et = f.ObjectDefineProperty, rt = f.ObjectGetOwnPropertyDescriptor, nt = f.ObjectGetOwnPropertyNames, ot = f.ObjectGetOwnPropertySymbols, it = f.ObjectGetPrototypeOf, at = f.ObjectIs, ct = f.ObjectKeys, lt = f.ObjectPrototypeHasOwnProperty, ut = f.ObjectPrototypePropertyIsEnumerable, pt = f.ObjectSeal, ft = f.ObjectSetPrototypeOf, yt = f.ReflectApply, st = f.ReflectOwnKeys, gt = f.RegExp, dt = f.RegExpPrototypeExec, bt = f.RegExpPrototypeSymbolReplace, ht = f.RegExpPrototypeSymbolSplit, vt = f.RegExpPrototypeToString, mt = f.SafeMap, St = f.SafeSet, Pt = f.SafeStringIterator, xt = f.SetPrototypeGetSize, Ot = f.SetPrototypeValues, wt = f.String, At = f.StringPrototypeCharCodeAt, jt = f.StringPrototypeCodePointAt, Et = f.StringPrototypeEndsWith, _t = f.StringPrototypeIncludes, Ft = f.StringPrototypeIndexOf, Lt = f.StringPrototypeLastIndexOf, Rt = f.StringPrototypeNormalize, kt = f.StringPrototypePadEnd, Tt = f.StringPrototypePadStart, It = f.StringPrototypeRepeat, zt = f.StringPrototypeReplaceAll, Mt = f.StringPrototypeSlice, Bt = f.StringPrototypeSplit, Nt = f.StringPrototypeStartsWith, Dt = f.StringPrototypeToLowerCase, Ct = f.StringPrototypeTrim, Ht = f.StringPrototypeValueOf, Gt = f.SymbolPrototypeToString, Wt = f.SymbolPrototypeValueOf, Vt = f.SymbolIterator, Ut = f.SymbolToStringTag, $t = f.TypedArrayPrototypeGetLength, Zt = f.TypedArrayPrototypeGetSymbolToStringTag, qt = f.Uint8Array, Kt = f.globalThis, Yt = f.uncurryThis, Jt = r5(763), Qt = Jt.constants, Xt = Qt.ALL_PROPERTIES, te = Qt.ONLY_ENUMERABLE, ee = Qt.kPending, re = Qt.kRejected, ne = Jt.getOwnNonIndexProperties, oe = Jt.getPromiseDetails, ie = Jt.getProxyDetails, ae = Jt.previewEntries, ce = Jt.getConstructorName, le2 = Jt.getExternalValue, ue = Jt.Proxy, pe = r5(641), fe = pe.customInspectSymbol, ye2 = pe.isError, se = pe.join, ge = pe.removeColors, de = r5(638).isStackOverflowError, be = r5(567), he = be.isAsyncFunction, ve = be.isGeneratorFunction, me = be.isAnyArrayBuffer, Se = be.isArrayBuffer, Pe = be.isArgumentsObject, xe2 = be.isBoxedPrimitive, Oe = be.isDataView, we = be.isExternal, Ae = be.isMap, je = be.isMapIterator, Ee = be.isModuleNamespaceObject, _e = be.isNativeError, Fe = be.isPromise, Le = be.isSet, Re = be.isSetIterator, ke = be.isWeakMap, Te = be.isWeakSet, Ie = be.isRegExp, ze = be.isDate, Me = be.isTypedArray, Be = be.isStringObject, Ne = be.isNumberObject, De = be.isBooleanObject, Ce = be.isBigIntObject, He = r5(783), Ge = r5(111).BuiltinModule, We = r5(322), Ve = We.validateObject, Ue = We.validateString, $e = We.kValidateObjectAllowArray;
            var Ze, qe, Ke, Ye, Je, Qe = new St(d(nt(Kt), function(t6) {
              return null !== dt(/^[A-Z][a-zA-Z0-9]+$/, t6);
            })), Xe = /* @__PURE__ */ __name(function Xe2(t6) {
              return void 0 === t6 && void 0 !== t6;
            }, "Xe"), tr = pt({
              showHidden: false,
              depth: 2,
              colors: false,
              customInspect: true,
              showProxy: false,
              maxArrayLength: 100,
              maxStringLength: 1e4,
              breakLength: 80,
              compact: 3,
              sorted: false,
              getters: false,
              numericSeparator: false
            }), er = 0, rr = 1, nr = 2;
            try {
              Ze = new gt("[\\x00-\\x1f\\x27\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]"), qe = new gt("[\0-\\x1f\\x27\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]", "g"), Ke = new gt("[\\x00-\\x1f\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]"), Ye = new gt("[\\x00-\\x1f\\x5c\\x7f-\\x9f]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|(?<![\\ud800-\\udbff])[\\udc00-\\udfff]", "g");
              var or = new gt("(?<=\\n)");
              Je = /* @__PURE__ */ __name(function Je2(t6) {
                return ht(or, t6);
              }, "Je");
            } catch (t6) {
              Ze = /[\x00-\x1f\x27\x5c\x7f-\x9f]/, qe = /[\x00-\x1f\x27\x5c\x7f-\x9f]/g, Ke = /[\x00-\x1f\x5c\x7f-\x9f]/, Ye = /[\x00-\x1f\x5c\x7f-\x9f]/g, Je = /* @__PURE__ */ __name(function Je2(t7) {
                var e5 = ht(/\n/, t7), _$r = P(e5), n4 = S(e5, function(t8) {
                  return t8 + "\n";
                });
                return "" !== _$r && n4.push(_$r), n4;
              }, "Je");
            }
            var ir, ar2 = /^[a-zA-Z_][a-zA-Z_0-9]*$/, cr = /^(0|[1-9][0-9]*)$/, lr2 = /^ {4}at (?:[^/\\(]+ \(|)node:(.+):\d+:\d+\)?$/, ur = /[/\\]node_modules[/\\](.+?)(?=[/\\])/g, pr = /^(\s+[^(]*?)\s*{/, fr = /(\/\/.*?\n)|(\/\*(.|\n)*?\*\/)/g, yr = 16, sr = 0, gr = 1, dr = 2, br = [
              "\\x00",
              "\\x01",
              "\\x02",
              "\\x03",
              "\\x04",
              "\\x05",
              "\\x06",
              "\\x07",
              "\\b",
              "\\t",
              "\\n",
              "\\x0B",
              "\\f",
              "\\r",
              "\\x0E",
              "\\x0F",
              "\\x10",
              "\\x11",
              "\\x12",
              "\\x13",
              "\\x14",
              "\\x15",
              "\\x16",
              "\\x17",
              "\\x18",
              "\\x19",
              "\\x1A",
              "\\x1B",
              "\\x1C",
              "\\x1D",
              "\\x1E",
              "\\x1F",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "\\'",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "\\\\",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "\\x7F",
              "\\x80",
              "\\x81",
              "\\x82",
              "\\x83",
              "\\x84",
              "\\x85",
              "\\x86",
              "\\x87",
              "\\x88",
              "\\x89",
              "\\x8A",
              "\\x8B",
              "\\x8C",
              "\\x8D",
              "\\x8E",
              "\\x8F",
              "\\x90",
              "\\x91",
              "\\x92",
              "\\x93",
              "\\x94",
              "\\x95",
              "\\x96",
              "\\x97",
              "\\x98",
              "\\x99",
              "\\x9A",
              "\\x9B",
              "\\x9C",
              "\\x9D",
              "\\x9E",
              "\\x9F"
            ], hr = new gt("[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))", "g");
            function vr(t6, e5) {
              var _$r = {
                budget: {},
                indentationLvl: 0,
                seen: [],
                currentDepth: 0,
                stylize: jr,
                showHidden: tr.showHidden,
                depth: tr.depth,
                colors: tr.colors,
                customInspect: tr.customInspect,
                showProxy: tr.showProxy,
                maxArrayLength: tr.maxArrayLength,
                maxStringLength: tr.maxStringLength,
                breakLength: tr.breakLength,
                compact: tr.compact,
                sorted: tr.sorted,
                getters: tr.getters,
                numericSeparator: tr.numericSeparator
              };
              if (arguments.length > 1) {
                if (arguments.length > 2 && (void 0 !== arguments[2] && (_$r.depth = arguments[2]), arguments.length > 3 && void 0 !== arguments[3] && (_$r.colors = arguments[3])), "boolean" == typeof e5) _$r.showHidden = e5;
                else if (e5) for (var n4 = ct(e5), o3 = 0; o3 < n4.length; ++o3) {
                  var i3 = n4[o3];
                  lt(tr, i3) || "stylize" === i3 ? _$r[i3] = e5[i3] : void 0 === _$r.userOptions && (_$r.userOptions = e5);
                }
              }
              return _$r.colors && (_$r.stylize = Ar), null === _$r.maxArrayLength && (_$r.maxArrayLength = 1 / 0), null === _$r.maxStringLength && (_$r.maxStringLength = 1 / 0), Ir(_$r, t6, 0);
            }
            __name(vr, "vr");
            vr.custom = fe, et(vr, "defaultOptions", {
              __proto__: null,
              get: /* @__PURE__ */ __name(function get() {
                return tr;
              }, "get"),
              set: /* @__PURE__ */ __name(function set2(t6) {
                return Ve(t6, "options"), tt(tr, t6);
              }, "set")
            });
            var mr = 39, Sr = 49;
            function Pr(t6, e5) {
              et(vr.colors, e5, {
                __proto__: null,
                get: /* @__PURE__ */ __name(function get() {
                  return this[t6];
                }, "get"),
                set: /* @__PURE__ */ __name(function set2(e6) {
                  this[t6] = e6;
                }, "set"),
                configurable: true,
                enumerable: false
              });
            }
            __name(Pr, "Pr");
            function xr(t6, e5) {
              return -1 === e5 ? '"'.concat(t6, '"') : -2 === e5 ? "`".concat(t6, "`") : "'".concat(t6, "'");
            }
            __name(xr, "xr");
            function Or(t6) {
              var e5 = At(t6);
              return br.length > e5 ? br[e5] : "\\u".concat(J(e5, 16));
            }
            __name(Or, "Or");
            function wr(t6) {
              var e5 = Ze, _$r = qe, n4 = 39;
              if (_t(t6, "'") && (_t(t6, '"') ? _t(t6, "`") || _t(t6, "${") || (n4 = -2) : n4 = -1, 39 !== n4 && (e5 = Ke, _$r = Ye)), t6.length < 5e3 && null === dt(e5, t6)) return xr(t6, n4);
              if (t6.length > 100) return xr(t6 = bt(_$r, t6, Or), n4);
              for (var o3 = "", i3 = 0, a2 = 0; a2 < t6.length; a2++) {
                var c3 = At(t6, a2);
                if (c3 === n4 || 92 === c3 || c3 < 32 || c3 > 126 && c3 < 160) o3 += i3 === a2 ? br[c3] : "".concat(Mt(t6, i3, a2)).concat(br[c3]), i3 = a2 + 1;
                else if (c3 >= 55296 && c3 <= 57343) {
                  if (c3 <= 56319 && a2 + 1 < t6.length) {
                    var l3 = At(t6, a2 + 1);
                    if (l3 >= 56320 && l3 <= 57343) {
                      a2++;
                      continue;
                    }
                  }
                  o3 += "".concat(Mt(t6, i3, a2), "\\u").concat(J(c3, 16)), i3 = a2 + 1;
                }
              }
              return i3 !== t6.length && (o3 += Mt(t6, i3)), xr(o3, n4);
            }
            __name(wr, "wr");
            function Ar(t6, e5) {
              var _$r = vr.styles[e5];
              if (void 0 !== _$r) {
                var n4 = vr.colors[_$r];
                if (void 0 !== n4) return "\x1B[".concat(n4[0], "m").concat(t6, "\x1B[").concat(n4[1], "m");
              }
              return t6;
            }
            __name(Ar, "Ar");
            function jr(t6) {
              return t6;
            }
            __name(jr, "jr");
            function Er() {
              return [];
            }
            __name(Er, "Er");
            function _r(t6, e5) {
              try {
                return t6 instanceof e5;
              } catch (t7) {
                return false;
              }
            }
            __name(_r, "_r");
            function Fr(t6, e5, r6, n4) {
              for (var o3, i3 = t6; t6 || Xe(t6); ) {
                var a2 = rt(t6, "constructor");
                if (void 0 !== a2 && "function" == typeof a2.value && "" !== a2.value.name && _r(i3, a2.value)) return void 0 === n4 || o3 === t6 && Qe.has(a2.value.name) || Lr(e5, i3, o3 || i3, r6, n4), wt(a2.value.name);
                t6 = it(t6), void 0 === o3 && (o3 = t6);
              }
              if (null === o3) return null;
              var l3 = ce(i3);
              if (r6 > e5.depth && null !== e5.depth) return "".concat(l3, " <Complex prototype>");
              var u2 = Fr(o3, e5, r6 + 1, n4);
              return null === u2 ? "".concat(l3, " <").concat(vr(o3, c2(c2({}, e5), {}, {
                customInspect: false,
                depth: -1
              })), ">") : "".concat(l3, " <").concat(u2, ">");
            }
            __name(Fr, "Fr");
            function Lr(t6, e5, r6, n4, i3) {
              var a2, c3, l3 = 0;
              do {
                if (0 !== l3 || e5 === r6) {
                  if (null === (r6 = it(r6))) return;
                  var u2 = rt(r6, "constructor");
                  if (void 0 !== u2 && "function" == typeof u2.value && Qe.has(u2.value.name)) return;
                }
                0 === l3 ? c3 = new St() : b(a2, function(t7) {
                  return c3.add(t7);
                }), a2 = st(r6), x(t6.seen, e5);
                var p3, f2 = o2(a2);
                try {
                  for (f2.s(); !(p3 = f2.n()).done; ) {
                    var y2 = p3.value;
                    if (!("constructor" === y2 || lt(e5, y2) || 0 !== l3 && c3.has(y2))) {
                      var s2 = rt(r6, y2);
                      if ("function" != typeof s2.value) {
                        var g2 = an(t6, r6, n4, y2, er, s2, e5);
                        t6.colors ? x(i3, "\x1B[2m".concat(g2, "\x1B[22m")) : x(i3, g2);
                      }
                    }
                  }
                } catch (t7) {
                  f2.e(t7);
                } finally {
                  f2.f();
                }
                P(t6.seen);
              } while (3 != ++l3);
            }
            __name(Lr, "Lr");
            function Rr(t6, e5, r6) {
              var n4 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
              return null === t6 ? "" !== e5 && r6 !== e5 ? "[".concat(r6).concat(n4, ": null prototype] [").concat(e5, "] ") : "[".concat(r6).concat(n4, ": null prototype] ") : "" !== e5 && t6 !== e5 ? "".concat(t6).concat(n4, " [").concat(e5, "] ") : "".concat(t6).concat(n4, " ");
            }
            __name(Rr, "Rr");
            function kr(t6, e5) {
              var _$r, n4 = ot(t6);
              if (e5) _$r = nt(t6), 0 !== n4.length && O(_$r, n4);
              else {
                try {
                  _$r = ct(t6);
                } catch (e6) {
                  He(_e(e6) && "ReferenceError" === e6.name && Ee(t6)), _$r = nt(t6);
                }
                0 !== n4.length && O(_$r, d(n4, function(e6) {
                  return ut(t6, e6);
                }));
              }
              return _$r;
            }
            __name(kr, "kr");
            function Tr(t6, e5, r6) {
              var n4 = "";
              return null === e5 && (n4 = ce(t6)) === r6 && (n4 = "Object"), Rr(e5, r6, n4);
            }
            __name(Tr, "Tr");
            function Ir(t6, e5, i3, a2) {
              if ("object" !== n3(e5) && "function" != typeof e5 && !Xe(e5)) return Vr(t6.stylize, e5, t6);
              if (null === e5) return t6.stylize("null", "null");
              var l3 = e5, u2 = ie(e5, !!t6.showProxy);
              if (void 0 !== u2) {
                if (null === u2 || null === u2[0]) return t6.stylize("<Revoked Proxy>", "special");
                if (t6.showProxy) return function(t7, e6, r6) {
                  if (r6 > t7.depth && null !== t7.depth) return t7.stylize("Proxy [Array]", "special");
                  r6 += 1, t7.indentationLvl += 2;
                  var _$n = [
                    Ir(t7, e6[0], r6),
                    Ir(t7, e6[1], r6)
                  ];
                  return t7.indentationLvl -= 2, ln(t7, _$n, "", [
                    "Proxy [",
                    "]"
                  ], nr, r6);
                }(t6, u2, i3);
                e5 = u2;
              }
              if (t6.customInspect) {
                var y2 = e5[fe];
                if ("function" == typeof y2 && y2 !== vr && (!e5.constructor || e5.constructor.prototype !== e5)) {
                  var s2 = null === t6.depth ? null : t6.depth - i3, d2 = z(y2, l3, s2, function(t7, e6) {
                    var _$r = c2({
                      stylize: t7.stylize,
                      showHidden: t7.showHidden,
                      depth: t7.depth,
                      colors: t7.colors,
                      customInspect: t7.customInspect,
                      showProxy: t7.showProxy,
                      maxArrayLength: t7.maxArrayLength,
                      maxStringLength: t7.maxStringLength,
                      breakLength: t7.breakLength,
                      compact: t7.compact,
                      sorted: t7.sorted,
                      getters: t7.getters,
                      numericSeparator: t7.numericSeparator
                    }, t7.userOptions);
                    if (e6) {
                      ft(_$r, null);
                      var _$i, _$a = o2(ct(_$r));
                      try {
                        for (_$a.s(); !(_$i = _$a.n()).done; ) {
                          var l4 = _$i.value;
                          "object" !== n3(_$r[l4]) && "function" != typeof _$r[l4] || null === _$r[l4] || delete _$r[l4];
                        }
                      } catch (t8) {
                        _$a.e(t8);
                      } finally {
                        _$a.f();
                      }
                      _$r.stylize = ft(function(e7, r6) {
                        var _$n;
                        try {
                          _$n = "".concat(t7.stylize(e7, r6));
                        } catch (t8) {
                        }
                        return "string" != typeof _$n ? e7 : _$n;
                      }, null);
                    }
                    return _$r;
                  }(t6, void 0 !== u2 || !(l3 instanceof X)), vr);
                  if (d2 !== l3) return "string" != typeof d2 ? Ir(t6, d2, i3) : zt(d2, "\n", "\n".concat(It(" ", t6.indentationLvl)));
                }
              }
              if (t6.seen.includes(e5)) {
                var b2 = 1;
                return void 0 === t6.circular ? (t6.circular = new mt(), t6.circular.set(e5, b2)) : void 0 === (b2 = t6.circular.get(e5)) && (b2 = t6.circular.size + 1, t6.circular.set(e5, b2)), t6.stylize("[Circular *".concat(b2, "]"), "special");
              }
              return function(t7, e6, n4, i4) {
                var _$a, c3;
                t7.showHidden && (n4 <= t7.depth || null === t7.depth) && (c3 = []);
                var l4 = Fr(e6, t7, n4, c3);
                void 0 !== c3 && 0 === c3.length && (c3 = void 0);
                var u3 = e6[Ut];
                ("string" != typeof u3 || "" !== u3 && (t7.showHidden ? lt : ut)(e6, Ut)) && (u3 = "");
                var y3, s3, d3 = "", b3 = Er, S2 = true, P2 = 0, T2 = t7.showHidden ? Xt : te, z2 = er;
                if (Vt in e6 || null === l4) if (S2 = false, g(e6)) {
                  var B2 = "Array" !== l4 || "" !== u3 ? Rr(l4, u3, "Array", "(".concat(e6.length, ")")) : "";
                  if (_$a = ne(e6, T2), y3 = [
                    "".concat(B2, "["),
                    "]"
                  ], 0 === e6.length && 0 === _$a.length && void 0 === c3) return "".concat(y3[0], "]");
                  z2 = nr, b3 = qr;
                } else if (Le(e6)) {
                  var C2 = xt(e6), H2 = Rr(l4, u3, "Set", "(".concat(C2, ")"));
                  if (_$a = kr(e6, t7.showHidden), b3 = I(Yr, null, null !== l4 ? e6 : Ot(e6)), 0 === C2 && 0 === _$a.length && void 0 === c3) return "".concat(H2, "{}");
                  y3 = [
                    "".concat(H2, "{"),
                    "}"
                  ];
                } else if (Ae(e6)) {
                  var G2 = D(e6), W2 = Rr(l4, u3, "Map", "(".concat(G2, ")"));
                  if (_$a = kr(e6, t7.showHidden), b3 = I(Jr, null, null !== l4 ? e6 : N(e6)), 0 === G2 && 0 === _$a.length && void 0 === c3) return "".concat(W2, "{}");
                  y3 = [
                    "".concat(W2, "{"),
                    "}"
                  ];
                } else if (Me(e6)) {
                  _$a = ne(e6, T2);
                  var V2 = e6, U2 = "";
                  null === l4 && (U2 = Zt(e6), V2 = new f[U2](e6));
                  var $2 = $t(e6), Z2 = Rr(l4, u3, U2, "(".concat($2, ")"));
                  if (y3 = [
                    "".concat(Z2, "["),
                    "]"
                  ], 0 === e6.length && 0 === _$a.length && !t7.showHidden) return "".concat(y3[0], "]");
                  b3 = I(Kr, null, V2, $2), z2 = nr;
                } else je(e6) ? (_$a = kr(e6, t7.showHidden), y3 = zr("Map", u3), b3 = I(nn, null, y3)) : Re(e6) ? (_$a = kr(e6, t7.showHidden), y3 = zr("Set", u3), b3 = I(nn, null, y3)) : S2 = true;
                if (S2) if (_$a = kr(e6, t7.showHidden), y3 = [
                  "{",
                  "}"
                ], "Object" === l4) {
                  if (Pe(e6) ? y3[0] = "[Arguments] {" : "" !== u3 && (y3[0] = "".concat(Rr(l4, u3, "Object"), "{")), 0 === _$a.length && void 0 === c3) return "".concat(y3[0], "}");
                } else if ("function" == typeof e6) {
                  if (d3 = function(t8, e7, r6) {
                    var _$n = M(t8);
                    if (Nt(_$n, "class") && Et(_$n, "}")) {
                      var o3 = Mt(_$n, 5, -1), _$i = Ft(o3, "{");
                      if (-1 !== _$i && (!_t(Mt(o3, 0, _$i), "(") || null !== dt(pr, bt(fr, o3)))) return function(t9, e8, r7) {
                        var _$n2 = lt(t9, "name") && t9.name || "(anonymous)", o4 = "class ".concat(_$n2);
                        if ("Function" !== e8 && null !== e8 && (o4 += " [".concat(e8, "]")), "" !== r7 && e8 !== r7 && (o4 += " [".concat(r7, "]")), null !== e8) {
                          var _$i2 = it(t9).name;
                          _$i2 && (o4 += " extends ".concat(_$i2));
                        } else o4 += " extends [null prototype]";
                        return "[".concat(o4, "]");
                      }(t8, e7, r6);
                    }
                    var _$a2 = "Function";
                    ve(t8) && (_$a2 = "Generator".concat(_$a2)), he(t8) && (_$a2 = "Async".concat(_$a2));
                    var c4 = "[".concat(_$a2);
                    return null === e7 && (c4 += " (null prototype)"), "" === t8.name ? c4 += " (anonymous)" : c4 += ": ".concat(t8.name), c4 += "]", e7 !== _$a2 && null !== e7 && (c4 += " ".concat(e7)), "" !== r6 && e7 !== r6 && (c4 += " [".concat(r6, "]")), c4;
                  }(e6, l4, u3), 0 === _$a.length && void 0 === c3) return t7.stylize(d3, "special");
                } else if (Ie(e6)) {
                  d3 = vt(null !== l4 ? e6 : new gt(e6));
                  var K2 = Rr(l4, u3, "RegExp");
                  if ("RegExp " !== K2 && (d3 = "".concat(K2).concat(d3)), 0 === _$a.length && void 0 === c3 || n4 > t7.depth && null !== t7.depth) return t7.stylize(d3, "regexp");
                } else if (ze(e6)) {
                  d3 = q(L(e6)) ? k(e6) : R(e6);
                  var Y2 = Rr(l4, u3, "Date");
                  if ("Date " !== Y2 && (d3 = "".concat(Y2).concat(d3)), 0 === _$a.length && void 0 === c3) return t7.stylize(d3, "date");
                } else if (ye2(e6)) {
                  if (d3 = function(t8, e7, n5, i5, a3) {
                    var c4 = null != t8.name ? wt(t8.name) : "Error", l5 = Br(t8);
                    (function(t9, e8, r6, n6) {
                      if (!t9.showHidden && 0 !== e8.length) for (var _$o = 0, _$i = [
                        "name",
                        "message",
                        "stack"
                      ]; _$o < _$i.length; _$o++) {
                        var _$a2 = _$i[_$o], c5 = v(e8, _$a2);
                        -1 !== c5 && _t(n6, r6[_$a2]) && j(e8, c5, 1);
                      }
                    })(i5, a3, t8, l5), !("cause" in t8) || 0 !== a3.length && h(a3, "cause") || x(a3, "cause"), !g(t8.errors) || 0 !== a3.length && h(a3, "errors") || x(a3, "errors"), l5 = function(t9, e8, r6, n6) {
                      var _$o = r6.length;
                      if (null === e8 || Et(r6, "Error") && Nt(t9, r6) && (t9.length === _$o || ":" === t9[_$o] || "\n" === t9[_$o])) {
                        var _$i = "Error";
                        if (null === e8) {
                          var _$a2 = dt(/^([A-Z][a-z_ A-Z0-9[\]()-]+)(?::|\n {4}at)/, t9) || dt(/^([a-z_A-Z0-9-]*Error)$/, t9);
                          _$o = (_$i = _$a2 && _$a2[1] || "").length, _$i = _$i || "Error";
                        }
                        var c5 = Mt(Rr(e8, n6, _$i), 0, -1);
                        r6 !== c5 && (t9 = _t(c5, r6) ? 0 === _$o ? "".concat(c5, ": ").concat(t9) : "".concat(c5).concat(Mt(t9, _$o)) : "".concat(c5, " [").concat(r6, "]").concat(Mt(t9, _$o)));
                      }
                      return t9;
                    }(l5, e7, c4, n5);
                    var u4 = t8.message && Ft(l5, t8.message) || -1;
                    -1 !== u4 && (u4 += t8.message.length);
                    var f2, y4 = Ft(l5, "\n    at", u4);
                    if (-1 === y4) l5 = "[".concat(l5, "]");
                    else {
                      var s4 = Mt(l5, 0, y4), d4 = function(t9, e8, r6) {
                        var _$n, _$o = Bt(r6, "\n");
                        try {
                          _$n = e8.cause;
                        } catch (t10) {
                        }
                        if (null != _$n && ye2(_$n)) {
                          var _$i = Br(_$n), _$a2 = Ft(_$i, "\n    at");
                          if (-1 !== _$a2) {
                            var c5 = Mr(_$o, Bt(Mt(_$i, _$a2 + 1), "\n")), l6 = c5.len, u5 = c5.offset;
                            if (l6 > 0) {
                              var p3 = l6 - 2, f3 = "    ... ".concat(p3, " lines matching cause stack trace ...");
                              _$o.splice(u5 + 1, p3, t9.stylize(f3, "undefined"));
                            }
                          }
                        }
                        return _$o;
                      }(i5, t8, Mt(l5, y4 + 1));
                      if (i5.colors) {
                        var b4, S3, P3 = function() {
                          var _$t;
                          try {
                            _$t = process.cwd();
                          } catch (t9) {
                            return;
                          }
                          return _$t;
                        }(), O2 = o2(d4);
                        try {
                          for (O2.s(); !(S3 = O2.n()).done; ) {
                            var w2 = S3.value, A2 = dt(lr2, w2);
                            if (null !== A2 && Ge.exists(A2[1])) s4 += "\n".concat(i5.stylize(w2, "undefined"));
                            else {
                              if (s4 += "\n", w2 = Nr2(i5, w2), void 0 !== P3) {
                                var E2 = Dr(i5, w2, P3);
                                E2 === w2 && (E2 = Dr(i5, w2, b4 = null == b4 ? (f2 = P3, (p2 = null == p2 ? r5(976) : p2).pathToFileURL(f2).href) : b4)), w2 = E2;
                              }
                              s4 += w2;
                            }
                          }
                        } catch (t9) {
                          O2.e(t9);
                        } finally {
                          O2.f();
                        }
                      } else s4 += "\n".concat(m2(d4, "\n"));
                      l5 = s4;
                    }
                    if (0 !== i5.indentationLvl) {
                      var _2 = It(" ", i5.indentationLvl);
                      l5 = zt(l5, "\n", "\n".concat(_2));
                    }
                    return l5;
                  }(e6, l4, u3, t7, _$a), 0 === _$a.length && void 0 === c3) return d3;
                } else if (me(e6)) {
                  var J2 = Rr(l4, u3, Se(e6) ? "ArrayBuffer" : "SharedArrayBuffer");
                  if (void 0 === i4) b3 = Zr;
                  else if (0 === _$a.length && void 0 === c3) return J2 + "{ byteLength: ".concat(Gr(t7.stylize, e6.byteLength, false), " }");
                  y3[0] = "".concat(J2, "{"), E(_$a, "byteLength");
                } else if (Oe(e6)) y3[0] = "".concat(Rr(l4, u3, "DataView"), "{"), E(_$a, "byteLength", "byteOffset", "buffer");
                else if (Fe(e6)) y3[0] = "".concat(Rr(l4, u3, "Promise"), "{"), b3 = on;
                else if (Te(e6)) y3[0] = "".concat(Rr(l4, u3, "WeakSet"), "{"), b3 = t7.showHidden ? en2 : tn;
                else if (ke(e6)) y3[0] = "".concat(Rr(l4, u3, "WeakMap"), "{"), b3 = t7.showHidden ? rn : tn;
                else if (Ee(e6)) y3[0] = "".concat(Rr(l4, u3, "Module"), "{"), b3 = Ur.bind(null, _$a);
                else if (xe2(e6)) {
                  if (d3 = function(t8, e7, r6, n5, o3) {
                    var _$i, _$a2;
                    Ne(t8) ? (_$i = Q, _$a2 = "Number") : Be(t8) ? (_$i = Ht, _$a2 = "String", r6.splice(0, t8.length)) : De(t8) ? (_$i = F, _$a2 = "Boolean") : Ce(t8) ? (_$i = _, _$a2 = "BigInt") : (_$i = Wt, _$a2 = "Symbol");
                    var c4 = "[".concat(_$a2);
                    return _$a2 !== n5 && (c4 += null === n5 ? " (null prototype)" : " (".concat(n5, ")")), c4 += ": ".concat(Vr(jr, _$i(t8), e7), "]"), "" !== o3 && o3 !== n5 && (c4 += " [".concat(o3, "]")), 0 !== r6.length || e7.stylize === jr ? c4 : e7.stylize(c4, Dt(_$a2));
                  }(e6, t7, _$a, l4, u3), 0 === _$a.length && void 0 === c3) return d3;
                } else {
                  if (0 === _$a.length && void 0 === c3) {
                    if (we(e6)) {
                      var X2 = le2(e6).toString(16);
                      return t7.stylize("[External: ".concat(X2, "]"), "special");
                    }
                    return "".concat(Tr(e6, l4, u3), "{}");
                  }
                  y3[0] = "".concat(Tr(e6, l4, u3), "{");
                }
                if (n4 > t7.depth && null !== t7.depth) {
                  var tt2 = Mt(Tr(e6, l4, u3), 0, -1);
                  return null !== l4 && (tt2 = "[".concat(tt2, "]")), t7.stylize(tt2, "special");
                }
                n4 += 1, t7.seen.push(e6), t7.currentDepth = n4;
                var et2 = t7.indentationLvl;
                try {
                  for (s3 = b3(t7, e6, n4), P2 = 0; P2 < _$a.length; P2++) x(s3, an(t7, e6, n4, _$a[P2], z2));
                  void 0 !== c3 && O(s3, c3);
                } catch (r6) {
                  return function(t8, e7, r7, n5) {
                    if (de(e7)) return t8.seen.pop(), t8.indentationLvl = n5, t8.stylize("[".concat(r7, ": Inspection interrupted ") + "prematurely. Maximum call stack size exceeded.]", "special");
                    He.fail(e7.stack);
                  }(t7, r6, Mt(Tr(e6, l4, u3), 0, -1), et2);
                }
                if (void 0 !== t7.circular) {
                  var rt2 = t7.circular.get(e6);
                  if (void 0 !== rt2) {
                    var nt2 = t7.stylize("<ref *".concat(rt2, ">"), "special");
                    true !== t7.compact ? d3 = "" === d3 ? nt2 : "".concat(nt2, " ").concat(d3) : y3[0] = "".concat(nt2, " ").concat(y3[0]);
                  }
                }
                if (t7.seen.pop(), t7.sorted) {
                  var ot2 = true === t7.sorted ? void 0 : t7.sorted;
                  if (z2 === er) A(s3, ot2);
                  else if (_$a.length > 1) {
                    var at2 = A(w(s3, s3.length - _$a.length), ot2);
                    E(at2, s3, s3.length - _$a.length, _$a.length), yt(j, null, at2);
                  }
                }
                var ct2 = ln(t7, s3, d3, y3, z2, n4, e6), pt2 = (t7.budget[t7.indentationLvl] || 0) + ct2.length;
                return t7.budget[t7.indentationLvl] = pt2, pt2 > Math.pow(2, 27) && (t7.depth = -1), ct2;
              }(t6, e5, i3, a2);
            }
            __name(Ir, "Ir");
            function zr(t6, e5) {
              return e5 !== "".concat(t6, " Iterator") && ("" !== e5 && (e5 += "] ["), e5 += "".concat(t6, " Iterator")), [
                "[".concat(e5, "] {"),
                "}"
              ];
            }
            __name(zr, "zr");
            function Mr(t6, e5) {
              for (var _$r = 0; _$r < t6.length - 3; _$r++) {
                var n4 = v(e5, t6[_$r]);
                if (-1 !== n4) {
                  var o3 = e5.length - n4;
                  if (o3 > 3) {
                    for (var i3 = 1, a2 = G(t6.length - _$r, o3); a2 > i3 && t6[_$r + i3] === e5[n4 + i3]; ) i3++;
                    if (i3 > 3) return {
                      len: i3,
                      offset: _$r
                    };
                  }
                }
              }
              return {
                len: 0,
                offset: 0
              };
            }
            __name(Mr, "Mr");
            function Br(t6) {
              return t6.stack ? wt(t6.stack) : T(t6);
            }
            __name(Br, "Br");
            function Nr2(t6, e5) {
              for (var _$r, n4 = "", o3 = 0; null !== (_$r = ur.exec(e5)); ) n4 += Mt(e5, o3, _$r.index + 14), n4 += t6.stylize(_$r[1], "module"), o3 = _$r.index + _$r[0].length;
              return 0 !== o3 && (e5 = n4 + Mt(e5, o3)), e5;
            }
            __name(Nr2, "Nr");
            function Dr(t6, e5, r6) {
              var n4 = Ft(e5, r6), o3 = "", i3 = r6.length;
              if (-1 !== n4) {
                "file://" === Mt(e5, n4 - 7, n4) && (i3 += 7, n4 -= 7);
                var a2 = "(" === e5[n4 - 1] ? n4 - 1 : n4, c3 = a2 !== n4 && Et(e5, ")") ? -1 : e5.length, l3 = n4 + i3 + 1, u2 = Mt(e5, a2, l3);
                o3 += Mt(e5, 0, a2), o3 += t6.stylize(u2, "undefined"), o3 += Mt(e5, l3, c3), -1 === c3 && (o3 += t6.stylize(")", "undefined"));
              } else o3 += e5;
              return o3;
            }
            __name(Dr, "Dr");
            function Cr(t6) {
              for (var e5 = "", _$r = t6.length, n4 = Nt(t6, "-") ? 1 : 0; _$r >= n4 + 4; _$r -= 3) e5 = "_".concat(Mt(t6, _$r - 3, _$r)).concat(e5);
              return _$r === t6.length ? t6 : "".concat(Mt(t6, 0, _$r)).concat(e5);
            }
            __name(Cr, "Cr");
            vr.colors = {
              __proto__: null,
              reset: [
                0,
                0
              ],
              bold: [
                1,
                22
              ],
              dim: [
                2,
                22
              ],
              italic: [
                3,
                23
              ],
              underline: [
                4,
                24
              ],
              blink: [
                5,
                25
              ],
              inverse: [
                7,
                27
              ],
              hidden: [
                8,
                28
              ],
              strikethrough: [
                9,
                29
              ],
              doubleunderline: [
                21,
                24
              ],
              black: [
                30,
                mr
              ],
              red: [
                31,
                mr
              ],
              green: [
                32,
                mr
              ],
              yellow: [
                33,
                mr
              ],
              blue: [
                34,
                mr
              ],
              magenta: [
                35,
                mr
              ],
              cyan: [
                36,
                mr
              ],
              white: [
                37,
                mr
              ],
              bgBlack: [
                40,
                Sr
              ],
              bgRed: [
                41,
                Sr
              ],
              bgGreen: [
                42,
                Sr
              ],
              bgYellow: [
                43,
                Sr
              ],
              bgBlue: [
                44,
                Sr
              ],
              bgMagenta: [
                45,
                Sr
              ],
              bgCyan: [
                46,
                Sr
              ],
              bgWhite: [
                47,
                Sr
              ],
              framed: [
                51,
                54
              ],
              overlined: [
                53,
                55
              ],
              gray: [
                90,
                mr
              ],
              redBright: [
                91,
                mr
              ],
              greenBright: [
                92,
                mr
              ],
              yellowBright: [
                93,
                mr
              ],
              blueBright: [
                94,
                mr
              ],
              magentaBright: [
                95,
                mr
              ],
              cyanBright: [
                96,
                mr
              ],
              whiteBright: [
                97,
                mr
              ],
              bgGray: [
                100,
                Sr
              ],
              bgRedBright: [
                101,
                Sr
              ],
              bgGreenBright: [
                102,
                Sr
              ],
              bgYellowBright: [
                103,
                Sr
              ],
              bgBlueBright: [
                104,
                Sr
              ],
              bgMagentaBright: [
                105,
                Sr
              ],
              bgCyanBright: [
                106,
                Sr
              ],
              bgWhiteBright: [
                107,
                Sr
              ]
            }, Pr("gray", "grey"), Pr("gray", "blackBright"), Pr("bgGray", "bgGrey"), Pr("bgGray", "bgBlackBright"), Pr("dim", "faint"), Pr("strikethrough", "crossedout"), Pr("strikethrough", "strikeThrough"), Pr("strikethrough", "crossedOut"), Pr("hidden", "conceal"), Pr("inverse", "swapColors"), Pr("inverse", "swapcolors"), Pr("doubleunderline", "doubleUnderline"), vr.styles = tt({
              __proto__: null
            }, {
              special: "cyan",
              number: "yellow",
              bigint: "yellow",
              boolean: "yellow",
              undefined: "grey",
              null: "bold",
              string: "green",
              symbol: "green",
              date: "magenta",
              regexp: "red",
              module: "underline"
            });
            var Hr = /* @__PURE__ */ __name(function Hr2(t6) {
              return "... ".concat(t6, " more item").concat(t6 > 1 ? "s" : "");
            }, "Hr");
            function Gr(t6, e5, r6) {
              if (!r6) return at(e5, -0) ? t6("-0", "number") : t6("".concat(e5), "number");
              var n4 = U(e5), o3 = wt(n4);
              return n4 === e5 ? !Z(e5) || _t(o3, "e") ? t6(o3, "number") : t6("".concat(Cr(o3)), "number") : q(e5) ? t6(o3, "number") : t6("".concat(Cr(o3), ".").concat(function(t7) {
                for (var _$e = "", _$r = 0; _$r < t7.length - 3; _$r += 3) _$e += "".concat(Mt(t7, _$r, _$r + 3), "_");
                return 0 === _$r ? t7 : "".concat(_$e).concat(Mt(t7, _$r));
              }(Mt(wt(e5), o3.length + 1))), "number");
            }
            __name(Gr, "Gr");
            function Wr(t6, e5, r6) {
              var n4 = wt(e5);
              return t6("".concat(r6 ? Cr(n4) : n4, "n"), "bigint");
            }
            __name(Wr, "Wr");
            function Vr(t6, e5, r6) {
              if ("string" == typeof e5) {
                var n4 = "";
                if (e5.length > r6.maxStringLength) {
                  var o3 = e5.length - r6.maxStringLength;
                  e5 = Mt(e5, 0, r6.maxStringLength), n4 = "... ".concat(o3, " more character").concat(o3 > 1 ? "s" : "");
                }
                return true !== r6.compact && e5.length > yr && e5.length > r6.breakLength - r6.indentationLvl - 4 ? m2(S(Je(e5), function(e6) {
                  return t6(wr(e6), "string");
                }), " +\n".concat(It(" ", r6.indentationLvl + 2))) + n4 : t6(wr(e5), "string") + n4;
              }
              return "number" == typeof e5 ? Gr(t6, e5, r6.numericSeparator) : "bigint" == typeof e5 ? Wr(t6, e5, r6.numericSeparator) : "boolean" == typeof e5 ? t6("".concat(e5), "boolean") : void 0 === e5 ? t6("undefined", "undefined") : t6(Gt(e5), "symbol");
            }
            __name(Vr, "Vr");
            function Ur(t6, e5, r6, n4) {
              for (var o3 = new s(t6.length), i3 = 0; i3 < t6.length; i3++) try {
                o3[i3] = an(e5, r6, n4, t6[i3], er);
              } catch (r7) {
                He(_e(r7) && "ReferenceError" === r7.name);
                var a2 = l2({}, t6[i3], "");
                o3[i3] = an(e5, a2, n4, t6[i3], er);
                var c3 = Lt(o3[i3], " ");
                o3[i3] = Mt(o3[i3], 0, c3 + 1) + e5.stylize("<uninitialized>", "special");
              }
              return t6.length = 0, o3;
            }
            __name(Ur, "Ur");
            function $r(t6, e5, r6, n4, o3, i3) {
              for (var a2 = ct(e5), c3 = i3; i3 < a2.length && o3.length < n4; i3++) {
                var l3 = a2[i3], u2 = +l3;
                if (u2 > Math.pow(2, 32) - 2) break;
                if ("".concat(c3) !== l3) {
                  if (null === dt(cr, l3)) break;
                  var p3 = u2 - c3, f2 = p3 > 1 ? "s" : "", y2 = "<".concat(p3, " empty item").concat(f2, ">");
                  if (x(o3, t6.stylize(y2, "undefined")), c3 = u2, o3.length === n4) break;
                }
                x(o3, an(t6, e5, r6, l3, rr)), c3++;
              }
              var s2 = e5.length - c3;
              if (o3.length !== n4) {
                if (s2 > 0) {
                  var g2 = s2 > 1 ? "s" : "", d2 = "<".concat(s2, " empty item").concat(g2, ">");
                  x(o3, t6.stylize(d2, "undefined"));
                }
              } else s2 > 0 && x(o3, Hr(s2));
              return o3;
            }
            __name($r, "$r");
            function Zr(t6, e5) {
              var n4;
              try {
                n4 = new qt(e5);
              } catch (e6) {
                return [
                  t6.stylize("(detached)", "special")
                ];
              }
              void 0 === u && (u = Yt(r5(765).h.prototype.hexSlice));
              var o3 = Ct(bt(/(.{2})/g, u(n4, 0, G(t6.maxArrayLength, n4.length)), "$1 ")), i3 = n4.length - t6.maxArrayLength;
              return i3 > 0 && (o3 += " ... ".concat(i3, " more byte").concat(i3 > 1 ? "s" : "")), [
                "".concat(t6.stylize("[Uint8Contents]", "special"), ": <").concat(o3, ">")
              ];
            }
            __name(Zr, "Zr");
            function qr(t6, e5, r6) {
              for (var n4 = e5.length, o3 = G(H(0, t6.maxArrayLength), n4), i3 = n4 - o3, a2 = [], c3 = 0; c3 < o3; c3++) {
                if (!lt(e5, c3)) return $r(t6, e5, r6, o3, a2, c3);
                x(a2, an(t6, e5, r6, c3, rr));
              }
              return i3 > 0 && x(a2, Hr(i3)), a2;
            }
            __name(qr, "qr");
            function Kr(t6, e5, r6, n4, o3) {
              for (var i3 = G(H(0, r6.maxArrayLength), e5), a2 = t6.length - i3, c3 = new s(i3), l3 = t6.length > 0 && "number" == typeof t6[0] ? Gr : Wr, u2 = 0; u2 < i3; ++u2) c3[u2] = l3(r6.stylize, t6[u2], r6.numericSeparator);
              if (a2 > 0 && (c3[i3] = Hr(a2)), r6.showHidden) {
                r6.indentationLvl += 2;
                for (var p3 = 0, f2 = [
                  "BYTES_PER_ELEMENT",
                  "length",
                  "byteLength",
                  "byteOffset",
                  "buffer"
                ]; p3 < f2.length; p3++) {
                  var y2 = f2[p3], g2 = Ir(r6, t6[y2], o3, true);
                  x(c3, "[".concat(y2, "]: ").concat(g2));
                }
                r6.indentationLvl -= 2;
              }
              return c3;
            }
            __name(Kr, "Kr");
            function Yr(t6, e5, r6, n4) {
              var i3 = t6.size, a2 = G(H(0, e5.maxArrayLength), i3), c3 = i3 - a2, l3 = [];
              e5.indentationLvl += 2;
              var u2, p3 = 0, f2 = o2(t6);
              try {
                for (f2.s(); !(u2 = f2.n()).done; ) {
                  var y2 = u2.value;
                  if (p3 >= a2) break;
                  x(l3, Ir(e5, y2, n4)), p3++;
                }
              } catch (t7) {
                f2.e(t7);
              } finally {
                f2.f();
              }
              return c3 > 0 && x(l3, Hr(c3)), e5.indentationLvl -= 2, l3;
            }
            __name(Yr, "Yr");
            function Jr(t6, e5, r6, n4) {
              var i3 = t6.size, a2 = G(H(0, e5.maxArrayLength), i3), c3 = i3 - a2, l3 = [];
              e5.indentationLvl += 2;
              var u2, p3 = 0, f2 = o2(t6);
              try {
                for (f2.s(); !(u2 = f2.n()).done; ) {
                  var y2 = u2.value, s2 = y2[0], g2 = y2[1];
                  if (p3 >= a2) break;
                  x(l3, "".concat(Ir(e5, s2, n4), " => ").concat(Ir(e5, g2, n4))), p3++;
                }
              } catch (t7) {
                f2.e(t7);
              } finally {
                f2.f();
              }
              return c3 > 0 && x(l3, Hr(c3)), e5.indentationLvl -= 2, l3;
            }
            __name(Jr, "Jr");
            function Qr(t6, e5, r6, n4) {
              var o3 = H(t6.maxArrayLength, 0), i3 = G(o3, r6.length), a2 = new s(i3);
              t6.indentationLvl += 2;
              for (var c3 = 0; c3 < i3; c3++) a2[c3] = Ir(t6, r6[c3], e5);
              t6.indentationLvl -= 2, n4 !== sr || t6.sorted || A(a2);
              var l3 = r6.length - i3;
              return l3 > 0 && x(a2, Hr(l3)), a2;
            }
            __name(Qr, "Qr");
            function Xr(t6, e5, r6, n4) {
              var o3 = H(t6.maxArrayLength, 0), i3 = r6.length / 2, a2 = i3 - o3, c3 = G(o3, i3), l3 = new s(c3), u2 = 0;
              if (t6.indentationLvl += 2, n4 === sr) {
                for (; u2 < c3; u2++) {
                  var p3 = 2 * u2;
                  l3[u2] = "".concat(Ir(t6, r6[p3], e5), " => ").concat(Ir(t6, r6[p3 + 1], e5));
                }
                t6.sorted || A(l3);
              } else for (; u2 < c3; u2++) {
                var f2 = 2 * u2, y2 = [
                  Ir(t6, r6[f2], e5),
                  Ir(t6, r6[f2 + 1], e5)
                ];
                l3[u2] = ln(t6, y2, "", [
                  "[",
                  "]"
                ], nr, e5);
              }
              return t6.indentationLvl -= 2, a2 > 0 && x(l3, Hr(a2)), l3;
            }
            __name(Xr, "Xr");
            function tn(t6) {
              return [
                t6.stylize("<items unknown>", "special")
              ];
            }
            __name(tn, "tn");
            function en2(t6, e5, r6) {
              return Qr(t6, r6, ae(e5), sr);
            }
            __name(en2, "en");
            function rn(t6, e5, r6) {
              return Xr(t6, r6, ae(e5), sr);
            }
            __name(rn, "rn");
            function nn(t6, e5, r6, n4) {
              var o3 = ae(r6, true), i3 = o3[0];
              return o3[1] ? (t6[0] = bt(/ Iterator] {$/, t6[0], " Entries] {"), Xr(e5, n4, i3, dr)) : Qr(e5, n4, i3, gr);
            }
            __name(nn, "nn");
            function on(t6, e5, r6) {
              var n4, o3 = oe(e5), i3 = o3[0], a2 = o3[1];
              if (i3 === ee) n4 = [
                t6.stylize("<pending>", "special")
              ];
              else {
                t6.indentationLvl += 2;
                var c3 = Ir(t6, a2, r6);
                t6.indentationLvl -= 2, n4 = [
                  i3 === re ? "".concat(t6.stylize("<rejected>", "special"), " ").concat(c3) : c3
                ];
              }
              return n4;
            }
            __name(on, "on");
            function an(t6, e5, r6, o3, i3, a2) {
              var c3, l3, u2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e5, p3 = " ";
              if (void 0 !== (a2 = a2 || rt(e5, o3) || {
                value: e5[o3],
                enumerable: true
              }).value) {
                var f2 = true !== t6.compact || i3 !== er ? 2 : 3;
                t6.indentationLvl += f2, l3 = Ir(t6, a2.value, r6), 3 === f2 && t6.breakLength < ir(l3, t6.colors) && (p3 = "\n".concat(It(" ", t6.indentationLvl))), t6.indentationLvl -= f2;
              } else if (void 0 !== a2.get) {
                var y2 = void 0 !== a2.set ? "Getter/Setter" : "Getter", s2 = t6.stylize, g2 = "special";
                if (t6.getters && (true === t6.getters || "get" === t6.getters && void 0 === a2.set || "set" === t6.getters && void 0 !== a2.set)) try {
                  var d2 = z(a2.get, u2);
                  if (t6.indentationLvl += 2, null === d2) l3 = "".concat(s2("[".concat(y2, ":"), g2), " ").concat(s2("null", "null")).concat(s2("]", g2));
                  else if ("object" === n3(d2)) l3 = "".concat(s2("[".concat(y2, "]"), g2), " ").concat(Ir(t6, d2, r6));
                  else {
                    var b2 = Vr(s2, d2, t6);
                    l3 = "".concat(s2("[".concat(y2, ":"), g2), " ").concat(b2).concat(s2("]", g2));
                  }
                  t6.indentationLvl -= 2;
                } catch (t7) {
                  var h2 = "<Inspection threw (".concat(t7.message, ")>");
                  l3 = "".concat(s2("[".concat(y2, ":"), g2), " ").concat(h2).concat(s2("]", g2));
                }
                else l3 = t6.stylize("[".concat(y2, "]"), g2);
              } else l3 = void 0 !== a2.set ? t6.stylize("[Setter]", "special") : t6.stylize("undefined", "undefined");
              if (i3 === rr) return l3;
              if ("symbol" === n3(o3)) {
                var v2 = bt(qe, Gt(o3), Or);
                c3 = "[".concat(t6.stylize(v2, "symbol"), "]");
              } else if ("__proto__" === o3) c3 = "['__proto__']";
              else if (false === a2.enumerable) {
                var m3 = bt(qe, o3, Or);
                c3 = "[".concat(m3, "]");
              } else c3 = null !== dt(ar2, o3) ? t6.stylize(o3, "name") : t6.stylize(wr(o3), "string");
              return "".concat(c3, ":").concat(p3).concat(l3);
            }
            __name(an, "an");
            function cn(t6, e5, r6, n4) {
              var o3 = e5.length + r6;
              if (o3 + e5.length > t6.breakLength) return false;
              for (var i3 = 0; i3 < e5.length; i3++) if (t6.colors ? o3 += ge(e5[i3]).length : o3 += e5[i3].length, o3 > t6.breakLength) return false;
              return "" === n4 || !_t(n4, "\n");
            }
            __name(cn, "cn");
            function ln(t6, e5, r6, n4, o3, i3, a2) {
              if (true !== t6.compact) {
                if ("number" == typeof t6.compact && t6.compact >= 1) {
                  var c3 = e5.length;
                  if (o3 === nr && c3 > 6 && (e5 = function(t7, e6, r7) {
                    var _$n = 0, _$o = 0, _$i = 0, _$a = e6.length;
                    t7.maxArrayLength < e6.length && _$a--;
                    for (var c4 = new s(_$a); _$i < _$a; _$i++) {
                      var l4 = ir(e6[_$i], t7.colors);
                      c4[_$i] = l4, _$n += l4 + 2, _$o < l4 && (_$o = l4);
                    }
                    var u3 = _$o + 2;
                    if (3 * u3 + t7.indentationLvl < t7.breakLength && (_$n / u3 > 5 || _$o <= 6)) {
                      var p4 = V(u3 - _$n / e6.length), f3 = H(u3 - 3 - p4, 1), y2 = G(W(V(2.5 * f3 * _$a) / f3), C((t7.breakLength - t7.indentationLvl) / u3), 4 * t7.compact, 15);
                      if (y2 <= 1) return e6;
                      for (var g2 = [], d2 = [], b2 = 0; b2 < y2; b2++) {
                        for (var h2 = 0, v2 = b2; v2 < e6.length; v2 += y2) c4[v2] > h2 && (h2 = c4[v2]);
                        h2 += 2, d2[b2] = h2;
                      }
                      var m3 = Tt;
                      if (void 0 !== r7) {
                        for (var S2 = 0; S2 < e6.length; S2++) if ("number" != typeof r7[S2] && "bigint" != typeof r7[S2]) {
                          m3 = kt;
                          break;
                        }
                      }
                      for (var P2 = 0; P2 < _$a; P2 += y2) {
                        for (var O2 = G(P2 + y2, _$a), w2 = "", A2 = P2; A2 < O2 - 1; A2++) {
                          var j2 = d2[A2 - P2] + e6[A2].length - c4[A2];
                          w2 += m3("".concat(e6[A2], ", "), j2, " ");
                        }
                        if (m3 === Tt) {
                          var E2 = d2[A2 - P2] + e6[A2].length - c4[A2] - 2;
                          w2 += Tt(e6[A2], E2, " ");
                        } else w2 += e6[A2];
                        x(g2, w2);
                      }
                      t7.maxArrayLength < e6.length && x(g2, e6[_$a]), e6 = g2;
                    }
                    return e6;
                  }(t6, e5, a2)), t6.currentDepth - i3 < t6.compact && c3 === e5.length && cn(t6, e5, e5.length + t6.indentationLvl + n4[0].length + r6.length + 10, r6)) {
                    var l3 = se(e5, ", ");
                    if (!_t(l3, "\n")) return "".concat(r6 ? "".concat(r6, " ") : "").concat(n4[0], " ").concat(l3) + " ".concat(n4[1]);
                  }
                }
                var u2 = "\n".concat(It(" ", t6.indentationLvl));
                return "".concat(r6 ? "".concat(r6, " ") : "").concat(n4[0]).concat(u2, "  ") + "".concat(se(e5, ",".concat(u2, "  "))).concat(u2).concat(n4[1]);
              }
              if (cn(t6, e5, 0, r6)) return "".concat(n4[0]).concat(r6 ? " ".concat(r6) : "", " ").concat(se(e5, ", "), " ") + n4[1];
              var p3 = It(" ", t6.indentationLvl), f2 = "" === r6 && 1 === n4[0].length ? " " : "".concat(r6 ? " ".concat(r6) : "", "\n").concat(p3, "  ");
              return "".concat(n4[0]).concat(f2).concat(se(e5, ",\n".concat(p3, "  ")), " ").concat(n4[1]);
            }
            __name(ln, "ln");
            function un(t6) {
              var e5 = ie(t6, false);
              if (void 0 !== e5) {
                if (null === e5) return true;
                t6 = e5;
              }
              if ("function" != typeof t6.toString) return true;
              if (lt(t6, "toString")) return false;
              var _$r = t6;
              do {
                _$r = it(_$r);
              } while (!lt(_$r, "toString"));
              var n4 = rt(_$r, "constructor");
              return void 0 !== n4 && "function" == typeof n4.value && Qe.has(n4.value.name);
            }
            __name(un, "un");
            var pn, fn = /* @__PURE__ */ __name(function fn2(t6) {
              return Bt(t6.message, "\n", 1)[0];
            }, "fn");
            function yn(t6) {
              try {
                return B(t6);
              } catch (t7) {
                if (!pn) try {
                  var e5 = {};
                  e5.a = e5, B(e5);
                } catch (t8) {
                  pn = fn(t8);
                }
                if ("TypeError" === t7.name && fn(t7) === pn) return "[Circular]";
                throw t7;
              }
            }
            __name(yn, "yn");
            function sn(t6, e5) {
              var _$r;
              return Gr(jr, t6, null !== (_$r = null == e5 ? void 0 : e5.numericSeparator) && void 0 !== _$r ? _$r : tr.numericSeparator);
            }
            __name(sn, "sn");
            function gn(t6, e5) {
              var _$r;
              return Wr(jr, t6, null !== (_$r = null == e5 ? void 0 : e5.numericSeparator) && void 0 !== _$r ? _$r : tr.numericSeparator);
            }
            __name(gn, "gn");
            function dn(t6, e5) {
              var _$r = e5[0], o3 = 0, i3 = "", a2 = "";
              if ("string" == typeof _$r) {
                if (1 === e5.length) return _$r;
                for (var l3, u2 = 0, p3 = 0; p3 < _$r.length - 1; p3++) if (37 === At(_$r, p3)) {
                  var f2 = At(_$r, ++p3);
                  if (o3 + 1 !== e5.length) {
                    switch (f2) {
                      case 115:
                        var y2 = e5[++o3];
                        l3 = "number" == typeof y2 ? sn(y2, t6) : "bigint" == typeof y2 ? gn(y2, t6) : "object" === n3(y2) && null !== y2 && un(y2) ? vr(y2, c2(c2({}, t6), {}, {
                          compact: 3,
                          colors: false,
                          depth: 0
                        })) : wt(y2);
                        break;
                      case 106:
                        l3 = yn(e5[++o3]);
                        break;
                      case 100:
                        var s2 = e5[++o3];
                        l3 = "bigint" == typeof s2 ? gn(s2, t6) : "symbol" === n3(s2) ? "NaN" : sn($(s2), t6);
                        break;
                      case 79:
                        l3 = vr(e5[++o3], t6);
                        break;
                      case 111:
                        l3 = vr(e5[++o3], c2(c2({}, t6), {}, {
                          showHidden: true,
                          showProxy: true,
                          depth: 4
                        }));
                        break;
                      case 105:
                        var g2 = e5[++o3];
                        l3 = "bigint" == typeof g2 ? gn(g2, t6) : "symbol" === n3(g2) ? "NaN" : sn(Y(g2), t6);
                        break;
                      case 102:
                        var d2 = e5[++o3];
                        l3 = "symbol" === n3(d2) ? "NaN" : sn(K(d2), t6);
                        break;
                      case 99:
                        o3 += 1, l3 = "";
                        break;
                      case 37:
                        i3 += Mt(_$r, u2, p3), u2 = p3 + 1;
                        continue;
                      default:
                        continue;
                    }
                    u2 !== p3 - 1 && (i3 += Mt(_$r, u2, p3 - 1)), i3 += l3, u2 = p3 + 1;
                  } else 37 === f2 && (i3 += Mt(_$r, u2, p3), u2 = p3 + 1);
                }
                0 !== u2 && (o3++, a2 = " ", u2 < _$r.length && (i3 += Mt(_$r, u2)));
              }
              for (; o3 < e5.length; ) {
                var b2 = e5[o3];
                i3 += a2, i3 += "string" != typeof b2 ? vr(b2, t6) : b2, a2 = " ", o3++;
              }
              return i3;
            }
            __name(dn, "dn");
            function bn(t6) {
              return t6 <= 31 || t6 >= 127 && t6 <= 159 || t6 >= 768 && t6 <= 879 || t6 >= 8203 && t6 <= 8207 || t6 >= 8400 && t6 <= 8447 || t6 >= 65024 && t6 <= 65039 || t6 >= 65056 && t6 <= 65071 || t6 >= 917760 && t6 <= 917999;
            }
            __name(bn, "bn");
            if (y("config").hasIntl) He(false);
            else {
              ir = /* @__PURE__ */ __name(function ir2(t6) {
                var e5 = 0;
                (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && (t6 = vn(t6)), t6 = Rt(t6, "NFC");
                var _$r, n4 = o2(new Pt(t6));
                try {
                  for (n4.s(); !(_$r = n4.n()).done; ) {
                    var i3 = _$r.value, a2 = jt(i3, 0);
                    hn(a2) ? e5 += 2 : bn(a2) || e5++;
                  }
                } catch (t7) {
                  n4.e(t7);
                } finally {
                  n4.f();
                }
                return e5;
              }, "ir");
              var hn = /* @__PURE__ */ __name(function hn2(t6) {
                return t6 >= 4352 && (t6 <= 4447 || 9001 === t6 || 9002 === t6 || t6 >= 11904 && t6 <= 12871 && 12351 !== t6 || t6 >= 12880 && t6 <= 19903 || t6 >= 19968 && t6 <= 42182 || t6 >= 43360 && t6 <= 43388 || t6 >= 44032 && t6 <= 55203 || t6 >= 63744 && t6 <= 64255 || t6 >= 65040 && t6 <= 65049 || t6 >= 65072 && t6 <= 65131 || t6 >= 65281 && t6 <= 65376 || t6 >= 65504 && t6 <= 65510 || t6 >= 110592 && t6 <= 110593 || t6 >= 127488 && t6 <= 127569 || t6 >= 127744 && t6 <= 128591 || t6 >= 131072 && t6 <= 262141);
              }, "hn");
            }
            function vn(t6) {
              return Ue(t6, "str"), bt(hr, t6, "");
            }
            __name(vn, "vn");
            var mn = {
              34: "&quot;",
              38: "&amp;",
              39: "&apos;",
              60: "&lt;",
              62: "&gt;",
              160: "&nbsp;"
            };
            function Sn(t6) {
              return t6.replace(/[\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u00FF]/g, function(t7) {
                var e5 = wt(t7.charCodeAt(0));
                return mn[e5] || "&#" + e5 + ";";
              });
            }
            __name(Sn, "Sn");
            t5.exports = {
              identicalSequenceRange: Mr,
              inspect: vr,
              inspectDefaultOptions: tr,
              format: /* @__PURE__ */ __name(function format2() {
                for (var _$t = arguments.length, e5 = new Array(_$t), _$r = 0; _$r < _$t; _$r++) e5[_$r] = arguments[_$r];
                return dn(void 0, e5);
              }, "format"),
              formatWithOptions: /* @__PURE__ */ __name(function formatWithOptions2(t6) {
                Ve(t6, "inspectOptions", $e);
                for (var e5 = arguments.length, _$r = new Array(e5 > 1 ? e5 - 1 : 0), n4 = 1; n4 < e5; n4++) _$r[n4 - 1] = arguments[n4];
                return dn(t6, _$r);
              }, "formatWithOptions"),
              getStringWidth: ir,
              stripVTControlCharacters: vn,
              isZeroWidthCodePoint: bn,
              stylizeWithColor: Ar,
              stylizeWithHTML: /* @__PURE__ */ __name(function stylizeWithHTML2(t6, e5) {
                var _$r = vr.styles[e5];
                return void 0 !== _$r ? '<span style="color:'.concat(_$r, ';">').concat(Sn(t6), "</span>") : Sn(t6);
              }, "stylizeWithHTML"),
              Proxy: ue
            };
          },
          783: (t5) => {
            function e4(t6) {
              if (!t6) throw new Error("Assertion failed");
            }
            __name(e4, "e");
            e4.fail = function(t6) {
              throw new Error(t6);
            }, t5.exports = e4;
          },
          111: (t5, e4) => {
            var _$r = [
              "_http_agent",
              "_http_client",
              "_http_common",
              "_http_incoming",
              "_http_outgoing",
              "_http_server",
              "_stream_duplex",
              "_stream_passthrough",
              "_stream_readable",
              "_stream_transform",
              "_stream_wrap",
              "_stream_writable",
              "_tls_common",
              "_tls_wrap",
              "assert",
              "assert/strict",
              "async_hooks",
              "buffer",
              "child_process",
              "cluster",
              "console",
              "constants",
              "crypto",
              "dgram",
              "diagnostics_channel",
              "dns",
              "dns/promises",
              "domain",
              "events",
              "fs",
              "fs/promises",
              "http",
              "http2",
              "https",
              "inspector",
              "module",
              "Module",
              "net",
              "os",
              "path",
              "path/posix",
              "path/win32",
              "perf_hooks",
              "process",
              "punycode",
              "querystring",
              "readline",
              "readline/promises",
              "repl",
              "stream",
              "stream/consumers",
              "stream/promises",
              "stream/web",
              "string_decoder",
              "sys",
              "timers",
              "timers/promises",
              "tls",
              "trace_events",
              "tty",
              "url",
              "util",
              "util/types",
              "v8",
              "vm",
              "wasi",
              "worker_threads",
              "zlib"
            ];
            e4.BuiltinModule = {
              exists: /* @__PURE__ */ __name(function exists(t6) {
                return t6.startsWith("internal/") || -1 !== _$r.indexOf(t6);
              }, "exists")
            };
          },
          840: (t5) => {
            t5.exports = {
              CHAR_DOT: 46,
              CHAR_FORWARD_SLASH: 47,
              CHAR_BACKWARD_SLASH: 92
            };
          },
          638: (t5, e4, r5) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            function o2(t6, e5) {
              (null == e5 || e5 > t6.length) && (e5 = t6.length);
              for (var _$r = 0, n4 = new Array(e5); _$r < e5; _$r++) n4[_$r] = t6[_$r];
              return n4;
            }
            __name(o2, "o");
            var i2, a, c2 = r5(951), l2 = c2.ArrayIsArray, u = c2.ArrayPrototypeIncludes, p2 = c2.ArrayPrototypeIndexOf, f = c2.ArrayPrototypeJoin, y = c2.ArrayPrototypePop, s = c2.ArrayPrototypePush, g = c2.ArrayPrototypeSplice, d = c2.ErrorCaptureStackTrace, b = c2.ObjectDefineProperty, h = c2.ReflectApply, v = c2.RegExpPrototypeTest, m2 = c2.SafeMap, S = c2.StringPrototypeEndsWith, P = c2.StringPrototypeIncludes, x = c2.StringPrototypeSlice, O = c2.StringPrototypeToLowerCase, w = new m2(), A = {}, j = /^([A-Z][a-z0-9]*)+$/, E = [
              "string",
              "function",
              "number",
              "object",
              "Function",
              "Object",
              "boolean",
              "bigint",
              "symbol"
            ], _ = null;
            function F() {
              return _ || (_ = r5(339)), _;
            }
            __name(F, "F");
            var L = R(function(t6, e5, r6) {
              (t6 = D(t6)).name = "".concat(e5, " [").concat(r6, "]"), t6.stack, delete t6.name;
            });
            function R(t6) {
              var e5 = "__node_internal_" + t6.name;
              return b(t6, "name", {
                value: e5
              }), t6;
            }
            __name(R, "R");
            var k, T, I, z, M, B, N, D = R(function(t6) {
              return i2 = Error.stackTraceLimit, Error.stackTraceLimit = 1 / 0, d(t6), Error.stackTraceLimit = i2, t6;
            });
            t5.exports = {
              codes: A,
              hideStackFrames: R,
              isStackOverflowError: /* @__PURE__ */ __name(function isStackOverflowError(t6) {
                if (void 0 === T) try {
                  !(/* @__PURE__ */ __name(function t7() {
                    t7();
                  }, "t"))();
                } catch (t7) {
                  T = t7.message, k = t7.name;
                }
                return t6 && t6.name === k && t6.message === T;
              }, "isStackOverflowError")
            }, I = "ERR_INVALID_ARG_TYPE", z = /* @__PURE__ */ __name(function z2(t6, e5, r6) {
              a("string" == typeof t6, "'name' must be a string"), l2(e5) || (e5 = [
                e5
              ]);
              var i3 = "The ";
              if (S(t6, " argument")) i3 += "".concat(t6, " ");
              else {
                var c3 = P(t6, ".") ? "property" : "argument";
                i3 += '"'.concat(t6, '" ').concat(c3, " ");
              }
              i3 += "must be ";
              var d2, b2 = [], h2 = [], m3 = [], w2 = function(t7, e6) {
                var _$r = "undefined" != typeof Symbol && t7[Symbol.iterator] || t7["@@iterator"];
                if (!_$r) {
                  if (Array.isArray(t7) || (_$r = function(t8, e7) {
                    if (t8) {
                      if ("string" == typeof t8) return o2(t8, e7);
                      var _$r2 = Object.prototype.toString.call(t8).slice(8, -1);
                      return "Object" === _$r2 && t8.constructor && (_$r2 = t8.constructor.name), "Map" === _$r2 || "Set" === _$r2 ? Array.from(t8) : "Arguments" === _$r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_$r2) ? o2(t8, e7) : void 0;
                    }
                  }(t7)) || e6 && t7 && "number" == typeof t7.length) {
                    _$r && (t7 = _$r);
                    var _$n = 0, i4 = /* @__PURE__ */ __name(function i5() {
                    }, "i");
                    return {
                      s: i4,
                      n: /* @__PURE__ */ __name(function n4() {
                        return _$n >= t7.length ? {
                          done: true
                        } : {
                          done: false,
                          value: t7[_$n++]
                        };
                      }, "n"),
                      e: /* @__PURE__ */ __name(function e7(t8) {
                        throw t8;
                      }, "e"),
                      f: i4
                    };
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a2, c4 = true, l3 = false;
                return {
                  s: /* @__PURE__ */ __name(function s2() {
                    _$r = _$r.call(t7);
                  }, "s"),
                  n: /* @__PURE__ */ __name(function n4() {
                    var _$t = _$r.next();
                    return c4 = _$t.done, _$t;
                  }, "n"),
                  e: /* @__PURE__ */ __name(function e7(t8) {
                    l3 = true, a2 = t8;
                  }, "e"),
                  f: /* @__PURE__ */ __name(function f2() {
                    try {
                      c4 || null == _$r.return || _$r.return();
                    } finally {
                      if (l3) throw a2;
                    }
                  }, "f")
                };
              }(e5);
              try {
                for (w2.s(); !(d2 = w2.n()).done; ) {
                  var A2 = d2.value;
                  a("string" == typeof A2, "All expected entries have to be of type string"), u(E, A2) ? s(b2, O(A2)) : v(j, A2) ? s(h2, A2) : (a("object" !== A2, 'The value "object" should be written as "Object"'), s(m3, A2));
                }
              } catch (t7) {
                w2.e(t7);
              } finally {
                w2.f();
              }
              if (h2.length > 0) {
                var _2 = p2(b2, "object");
                -1 !== _2 && (g(b2, _2, 1), s(h2, "Object"));
              }
              if (b2.length > 0) {
                if (b2.length > 2) {
                  var L2 = y(b2);
                  i3 += "one of type ".concat(f(b2, ", "), ", or ").concat(L2);
                } else i3 += 2 === b2.length ? "one of type ".concat(b2[0], " or ").concat(b2[1]) : "of type ".concat(b2[0]);
                (h2.length > 0 || m3.length > 0) && (i3 += " or ");
              }
              if (h2.length > 0) {
                if (h2.length > 2) {
                  var _$R = y(h2);
                  i3 += "an instance of ".concat(f(h2, ", "), ", or ").concat(_$R);
                } else i3 += "an instance of ".concat(h2[0]), 2 === h2.length && (i3 += " or ".concat(h2[1]));
                m3.length > 0 && (i3 += " or ");
              }
              if (m3.length > 0) if (m3.length > 2) {
                var k2 = y(m3);
                i3 += "one of ".concat(f(m3, ", "), ", or ").concat(k2);
              } else 2 === m3.length ? i3 += "one of ".concat(m3[0], " or ").concat(m3[1]) : (O(m3[0]) !== m3[0] && (i3 += "an "), i3 += "".concat(m3[0]));
              if (null == r6) i3 += ". Received ".concat(r6);
              else if ("function" == typeof r6 && r6.name) i3 += ". Received function ".concat(r6.name);
              else if ("object" === n3(r6)) if (r6.constructor && r6.constructor.name) i3 += ". Received an instance of ".concat(r6.constructor.name);
              else {
                var T2 = F().inspect(r6, {
                  depth: -1
                });
                i3 += ". Received ".concat(T2);
              }
              else {
                var I2 = F().inspect(r6, {
                  colors: false
                });
                I2.length > 25 && (I2 = "".concat(x(I2, 0, 25), "...")), i3 += ". Received type ".concat(n3(r6), " (").concat(I2, ")");
              }
              return i3;
            }, "z"), M = TypeError, w.set(I, z), A[I] = (B = M, N = I, function() {
              var _$t = Error.stackTraceLimit;
              Error.stackTraceLimit = 0;
              var e5 = new B();
              Error.stackTraceLimit = _$t;
              for (var n4 = arguments.length, o3 = new Array(n4), i3 = 0; i3 < n4; i3++) o3[i3] = arguments[i3];
              var c3 = function(t6, e6, n5) {
                var o4 = w.get(t6);
                return void 0 === a && (a = r5(783)), a("function" == typeof o4), a(o4.length <= e6.length, "Code: ".concat(t6, "; The provided arguments length (").concat(e6.length, ") does not ") + "match the required ones (".concat(o4.length, ").")), h(o4, n5, e6);
              }(N, o3, e5);
              return b(e5, "message", {
                value: c3,
                enumerable: false,
                writable: true,
                configurable: true
              }), b(e5, "toString", {
                value: /* @__PURE__ */ __name(function value() {
                  return "".concat(this.name, " [").concat(N, "]: ").concat(this.message);
                }, "value"),
                enumerable: false,
                writable: true,
                configurable: true
              }), L(e5, B.name, N), e5.code = N, e5;
            });
          },
          976: (t5, e4, r5) => {
            var n3 = r5(951), o2 = n3.StringPrototypeCharCodeAt, i2 = n3.StringPrototypeIncludes, a = n3.StringPrototypeReplace, c2 = r5(840).CHAR_FORWARD_SLASH, l2 = r5(948), u = /%/g, p2 = /\\/g, f = /\n/g, y = /\r/g, s = /\t/g;
            t5.exports = {
              pathToFileURL: /* @__PURE__ */ __name(function pathToFileURL(t6) {
                var e5 = new URL("file://"), _$r = l2.resolve(t6);
                return o2(t6, t6.length - 1) === c2 && _$r[_$r.length - 1] !== l2.sep && (_$r += "/"), e5.pathname = function(t7) {
                  return i2(t7, "%") && (t7 = a(t7, u, "%25")), i2(t7, "\\") && (t7 = a(t7, p2, "%5C")), i2(t7, "\n") && (t7 = a(t7, f, "%0A")), i2(t7, "\r") && (t7 = a(t7, y, "%0D")), i2(t7, "	") && (t7 = a(t7, s, "%09")), t7;
                }(_$r), e5;
              }, "pathToFileURL")
            };
          },
          641: (t5) => {
            var e4 = /\u001b\[\d\d?m/g;
            t5.exports = {
              customInspectSymbol: Symbol.for("nodejs.util.inspect.custom"),
              isError: /* @__PURE__ */ __name(function isError2(t6) {
                return t6 instanceof Error;
              }, "isError"),
              join: Array.prototype.join.call.bind(Array.prototype.join),
              removeColors: /* @__PURE__ */ __name(function removeColors(t6) {
                return String.prototype.replace.call(t6, e4, "");
              }, "removeColors")
            };
          },
          567: (t5, e4, r5) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            var o2 = r5(763).getConstructorName;
            function i2(t6) {
              for (var e5 = arguments.length, _$r = new Array(e5 > 1 ? e5 - 1 : 0), i3 = 1; i3 < e5; i3++) _$r[i3 - 1] = arguments[i3];
              for (var _$a = 0, c3 = _$r; _$a < c3.length; _$a++) {
                var l3 = c3[_$a], u2 = globalThis[l3];
                if (u2 && t6 instanceof u2) return true;
              }
              for (; t6; ) {
                if ("object" !== n3(t6)) return false;
                if (_$r.indexOf(o2(t6)) >= 0) return true;
                t6 = Object.getPrototypeOf(t6);
              }
              return false;
            }
            __name(i2, "i");
            function a(t6) {
              return function(e5) {
                if (!i2(e5, t6.name)) return false;
                try {
                  t6.prototype.valueOf.call(e5);
                } catch (t7) {
                  return false;
                }
                return true;
              };
            }
            __name(a, "a");
            "object" !== ("undefined" == typeof globalThis ? "undefined" : n3(globalThis)) && (Object.defineProperty(Object.prototype, "__magic__", {
              get: /* @__PURE__ */ __name(function get() {
                return this;
              }, "get"),
              configurable: true
            }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
            var c2 = a(String), l2 = a(Number), u = a(Boolean), p2 = a(BigInt), f = a(Symbol);
            t5.exports = {
              isAsyncFunction: /* @__PURE__ */ __name(function isAsyncFunction(t6) {
                return "function" == typeof t6 && Function.prototype.toString.call(t6).startsWith("async");
              }, "isAsyncFunction"),
              isGeneratorFunction: /* @__PURE__ */ __name(function isGeneratorFunction(t6) {
                return "function" == typeof t6 && Function.prototype.toString.call(t6).match(/^(async\s+)?function *\*/);
              }, "isGeneratorFunction"),
              isAnyArrayBuffer: /* @__PURE__ */ __name(function isAnyArrayBuffer(t6) {
                return i2(t6, "ArrayBuffer", "SharedArrayBuffer");
              }, "isAnyArrayBuffer"),
              isArrayBuffer: /* @__PURE__ */ __name(function isArrayBuffer(t6) {
                return i2(t6, "ArrayBuffer");
              }, "isArrayBuffer"),
              isArgumentsObject: /* @__PURE__ */ __name(function isArgumentsObject(t6) {
                if (null !== t6 && "object" === n3(t6) && !Array.isArray(t6) && "number" == typeof t6.length && t6.length === (0 | t6.length) && t6.length >= 0) {
                  var e5 = Object.getOwnPropertyDescriptor(t6, "callee");
                  return e5 && !e5.enumerable;
                }
                return false;
              }, "isArgumentsObject"),
              isBoxedPrimitive: /* @__PURE__ */ __name(function isBoxedPrimitive(t6) {
                return l2(t6) || c2(t6) || u(t6) || p2(t6) || f(t6);
              }, "isBoxedPrimitive"),
              isDataView: /* @__PURE__ */ __name(function isDataView(t6) {
                return i2(t6, "DataView");
              }, "isDataView"),
              isExternal: /* @__PURE__ */ __name(function isExternal(t6) {
                return "object" === n3(t6) && Object.isFrozen(t6) && null == Object.getPrototypeOf(t6);
              }, "isExternal"),
              isMap: /* @__PURE__ */ __name(function isMap2(t6) {
                if (!i2(t6, "Map")) return false;
                try {
                  t6.has();
                } catch (t7) {
                  return false;
                }
                return true;
              }, "isMap"),
              isMapIterator: /* @__PURE__ */ __name(function isMapIterator(t6) {
                return "[object Map Iterator]" === Object.prototype.toString.call(Object.getPrototypeOf(t6));
              }, "isMapIterator"),
              isModuleNamespaceObject: /* @__PURE__ */ __name(function isModuleNamespaceObject(t6) {
                return t6 && "object" === n3(t6) && "Module" === t6[Symbol.toStringTag];
              }, "isModuleNamespaceObject"),
              isNativeError: /* @__PURE__ */ __name(function isNativeError(t6) {
                return t6 instanceof Error && i2(t6, "Error", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError", "AggregateError");
              }, "isNativeError"),
              isPromise: /* @__PURE__ */ __name(function isPromise(t6) {
                return i2(t6, "Promise");
              }, "isPromise"),
              isSet: /* @__PURE__ */ __name(function isSet2(t6) {
                if (!i2(t6, "Set")) return false;
                try {
                  t6.has();
                } catch (t7) {
                  return false;
                }
                return true;
              }, "isSet"),
              isSetIterator: /* @__PURE__ */ __name(function isSetIterator(t6) {
                return "[object Set Iterator]" === Object.prototype.toString.call(Object.getPrototypeOf(t6));
              }, "isSetIterator"),
              isWeakMap: /* @__PURE__ */ __name(function isWeakMap(t6) {
                return i2(t6, "WeakMap");
              }, "isWeakMap"),
              isWeakSet: /* @__PURE__ */ __name(function isWeakSet(t6) {
                return i2(t6, "WeakSet");
              }, "isWeakSet"),
              isRegExp: /* @__PURE__ */ __name(function isRegExp(t6) {
                return i2(t6, "RegExp");
              }, "isRegExp"),
              isDate: /* @__PURE__ */ __name(function isDate(t6) {
                if (i2(t6, "Date")) try {
                  return Date.prototype.getTime.call(t6), true;
                } catch (t7) {
                }
                return false;
              }, "isDate"),
              isTypedArray: /* @__PURE__ */ __name(function isTypedArray2(t6) {
                return i2(t6, "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array");
              }, "isTypedArray"),
              isStringObject: c2,
              isNumberObject: l2,
              isBooleanObject: u,
              isBigIntObject: p2,
              isSymbolObject: f
            };
          },
          322: (t5, e4, r5) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            var o2 = r5(951).ArrayIsArray, i2 = r5(638), a = i2.hideStackFrames, c2 = i2.codes.ERR_INVALID_ARG_TYPE, l2 = a(function(t6, e5) {
              var _$r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
              if (0 === _$r) {
                if (null === t6 || o2(t6)) throw new c2(e5, "Object", t6);
                if ("object" !== n3(t6)) throw new c2(e5, "Object", t6);
              } else {
                if (!(1 & _$r) && null === t6) throw new c2(e5, "Object", t6);
                if (!(2 & _$r) && o2(t6)) throw new c2(e5, "Object", t6);
                var i3 = !(4 & _$r), a2 = n3(t6);
                if ("object" !== a2 && (i3 || "function" !== a2)) throw new c2(e5, "Object", t6);
              }
            });
            t5.exports = {
              kValidateObjectNone: 0,
              kValidateObjectAllowNullable: 1,
              kValidateObjectAllowArray: 2,
              kValidateObjectAllowFunction: 4,
              validateObject: l2,
              validateString: /* @__PURE__ */ __name(function validateString(t6, e5) {
                if ("string" != typeof t6) throw new c2(e5, "string", t6);
              }, "validateString")
            };
          },
          948: (t5, e4, r5) => {
            var n3 = r5(951), o2 = n3.StringPrototypeCharCodeAt, i2 = n3.StringPrototypeLastIndexOf, a = n3.StringPrototypeSlice, c2 = r5(840), l2 = c2.CHAR_DOT, u = c2.CHAR_FORWARD_SLASH, p2 = r5(322).validateString;
            function f(t6) {
              return t6 === u;
            }
            __name(f, "f");
            t5.exports = {
              resolve: /* @__PURE__ */ __name(function resolve() {
                for (var _$t = "", e5 = false, _$r = arguments.length - 1; _$r >= -1 && !e5; _$r--) {
                  var n4 = _$r >= 0 ? _$r < 0 || arguments.length <= _$r ? void 0 : arguments[_$r] : "/";
                  p2(n4, "path"), 0 !== n4.length && (_$t = "".concat(n4, "/").concat(_$t), e5 = o2(n4, 0) === u);
                }
                return _$t = function(t6, e6, r6, n5) {
                  for (var c3 = "", p3 = 0, _$f = -1, y = 0, s = 0, g = 0; g <= t6.length; ++g) {
                    if (g < t6.length) s = o2(t6, g);
                    else {
                      if (n5(s)) break;
                      s = u;
                    }
                    if (n5(s)) {
                      if (_$f === g - 1 || 1 === y) ;
                      else if (2 === y) {
                        if (c3.length < 2 || 2 !== p3 || o2(c3, c3.length - 1) !== l2 || o2(c3, c3.length - 2) !== l2) {
                          if (c3.length > 2) {
                            var d = i2(c3, r6);
                            -1 === d ? (c3 = "", p3 = 0) : p3 = (c3 = a(c3, 0, d)).length - 1 - i2(c3, r6), _$f = g, y = 0;
                            continue;
                          }
                          if (0 !== c3.length) {
                            c3 = "", p3 = 0, _$f = g, y = 0;
                            continue;
                          }
                        }
                        e6 && (c3 += c3.length > 0 ? "".concat(r6, "..") : "..", p3 = 2);
                      } else c3.length > 0 ? c3 += "".concat(r6).concat(a(t6, _$f + 1, g)) : c3 = a(t6, _$f + 1, g), p3 = g - _$f - 1;
                      _$f = g, y = 0;
                    } else s === l2 && -1 !== y ? ++y : y = -1;
                  }
                  return c3;
                }(_$t, !e5, "/", f), e5 ? "/".concat(_$t) : _$t.length > 0 ? _$t : ".";
              }, "resolve")
            };
          },
          951: (t5, e4, r5) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            function o2(t6, e5, r6) {
              return e5 = u(e5), function(t7, e6) {
                if (e6 && ("object" === n3(e6) || "function" == typeof e6)) return e6;
                if (void 0 !== e6) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t8) {
                  if (void 0 === t8) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t8;
                }(t7);
              }(t6, c2() ? Reflect.construct(e5, r6 || [], u(t6).constructor) : e5.apply(t6, r6));
            }
            __name(o2, "o");
            function i2(t6, e5) {
              if ("function" != typeof e5 && null !== e5) throw new TypeError("Super expression must either be null or a function");
              t6.prototype = Object.create(e5 && e5.prototype, {
                constructor: {
                  value: t6,
                  writable: true,
                  configurable: true
                }
              }), Object.defineProperty(t6, "prototype", {
                writable: false
              }), e5 && l2(t6, e5);
            }
            __name(i2, "i");
            function a(t6) {
              var e5 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
              return a = /* @__PURE__ */ __name(function a2(t7) {
                if (null === t7 || !function(t8) {
                  try {
                    return -1 !== Function.toString.call(t8).indexOf("[native code]");
                  } catch (e6) {
                    return "function" == typeof t8;
                  }
                }(t7)) return t7;
                if ("function" != typeof t7) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e5) {
                  if (e5.has(t7)) return e5.get(t7);
                  e5.set(t7, r6);
                }
                function r6() {
                  return function(t8, e6, r7) {
                    if (c2()) return Reflect.construct.apply(null, arguments);
                    var n4 = [
                      null
                    ];
                    n4.push.apply(n4, e6);
                    var o3 = new (t8.bind.apply(t8, n4))();
                    return r7 && l2(o3, r7.prototype), o3;
                  }(t7, arguments, u(this).constructor);
                }
                __name(r6, "r");
                return r6.prototype = Object.create(t7.prototype, {
                  constructor: {
                    value: r6,
                    enumerable: false,
                    writable: true,
                    configurable: true
                  }
                }), l2(r6, t7);
              }, "a"), a(t6);
            }
            __name(a, "a");
            function c2() {
              try {
                var _$t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                }));
              } catch (t6) {
              }
              return (c2 = /* @__PURE__ */ __name(function c3() {
                return !!_$t;
              }, "c"))();
            }
            __name(c2, "c");
            function l2(t6, e5) {
              return l2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : /* @__PURE__ */ __name(function l3(t7, e6) {
                return t7.__proto__ = e6, t7;
              }, "l"), l2(t6, e5);
            }
            __name(l2, "l");
            function u(t6) {
              return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : /* @__PURE__ */ __name(function u2(t7) {
                return t7.__proto__ || Object.getPrototypeOf(t7);
              }, "u"), u(t6);
            }
            __name(u, "u");
            function p2(t6, e5) {
              if (!(t6 instanceof e5)) throw new TypeError("Cannot call a class as a function");
            }
            __name(p2, "p");
            function f(t6, e5) {
              for (var _$r = 0; _$r < e5.length; _$r++) {
                var n4 = e5[_$r];
                n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(t6, s(n4.key), n4);
              }
            }
            __name(f, "f");
            function y(t6, e5, r6) {
              return e5 && f(t6.prototype, e5), r6 && f(t6, r6), Object.defineProperty(t6, "prototype", {
                writable: false
              }), t6;
            }
            __name(y, "y");
            function s(t6) {
              var e5 = function(t7, e6) {
                if ("object" != n3(t7) || !t7) return t7;
                var _$r = t7[Symbol.toPrimitive];
                if (void 0 !== _$r) {
                  var o3 = _$r.call(t7, "string");
                  if ("object" != n3(o3)) return o3;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t7);
              }(t6);
              return "symbol" == n3(e5) ? e5 : e5 + "";
            }
            __name(s, "s");
            var g = /* @__PURE__ */ __name(function g2(t6, e5) {
              var _$r = function() {
                return y(/* @__PURE__ */ __name(function e6(r6) {
                  p2(this, e6), this._iterator = t6(r6);
                }, "e"), [
                  {
                    key: "next",
                    value: /* @__PURE__ */ __name(function value() {
                      return e5(this._iterator);
                    }, "value")
                  },
                  {
                    key: Symbol.iterator,
                    value: /* @__PURE__ */ __name(function value() {
                      return this;
                    }, "value")
                  }
                ]);
              }();
              return Object.setPrototypeOf(_$r.prototype, null), Object.freeze(_$r.prototype), Object.freeze(_$r), _$r;
            }, "g");
            function d(t6, e5) {
              return Function.prototype.call.bind(t6.prototype.__lookupGetter__(e5));
            }
            __name(d, "d");
            function b(t6) {
              return Function.prototype.call.bind(t6);
            }
            __name(b, "b");
            var h = /* @__PURE__ */ __name(function h2(t6, e5) {
              Array.prototype.forEach.call(Reflect.ownKeys(t6), function(r6) {
                Reflect.getOwnPropertyDescriptor(e5, r6) || Reflect.defineProperty(e5, r6, Reflect.getOwnPropertyDescriptor(t6, r6));
              });
            }, "h"), v = /* @__PURE__ */ __name(function v2(t6, e5) {
              if (Symbol.iterator in t6.prototype) {
                var _$r, n4 = new t6();
                Array.prototype.forEach.call(Reflect.ownKeys(t6.prototype), function(o3) {
                  if (!Reflect.getOwnPropertyDescriptor(e5.prototype, o3)) {
                    var i3 = Reflect.getOwnPropertyDescriptor(t6.prototype, o3);
                    if ("function" == typeof i3.value && 0 === i3.value.length && Symbol.iterator in (Function.prototype.call.call(i3.value, n4) || {})) {
                      var _$a = b(i3.value);
                      null == _$r && (_$r = b(_$a(n4).next));
                      var c3 = g(_$a, _$r);
                      i3.value = function() {
                        return new c3(this);
                      };
                    }
                    Reflect.defineProperty(e5.prototype, o3, i3);
                  }
                });
              } else h(t6.prototype, e5.prototype);
              return h(t6, e5), Object.setPrototypeOf(e5.prototype, null), Object.freeze(e5.prototype), Object.freeze(e5), e5;
            }, "v"), m2 = Function.prototype.call.bind(String.prototype[Symbol.iterator]), S = Reflect.getPrototypeOf(m2(""));
            if (t5.exports = {
              makeSafe: v,
              internalBinding: /* @__PURE__ */ __name(function internalBinding(t6) {
                if ("config" === t6) return {
                  hasIntl: false
                };
                throw new Error('unknown module: "'.concat(t6, '"'));
              }, "internalBinding"),
              Array,
              ArrayIsArray: Array.isArray,
              ArrayPrototypeFilter: Function.prototype.call.bind(Array.prototype.filter),
              ArrayPrototypeForEach: Function.prototype.call.bind(Array.prototype.forEach),
              ArrayPrototypeIncludes: Function.prototype.call.bind(Array.prototype.includes),
              ArrayPrototypeIndexOf: Function.prototype.call.bind(Array.prototype.indexOf),
              ArrayPrototypeJoin: Function.prototype.call.bind(Array.prototype.join),
              ArrayPrototypeMap: Function.prototype.call.bind(Array.prototype.map),
              ArrayPrototypePop: Function.prototype.call.bind(Array.prototype.pop),
              ArrayPrototypePush: Function.prototype.call.bind(Array.prototype.push),
              ArrayPrototypePushApply: Function.apply.bind(Array.prototype.push),
              ArrayPrototypeSlice: Function.prototype.call.bind(Array.prototype.slice),
              ArrayPrototypeSort: Function.prototype.call.bind(Array.prototype.sort),
              ArrayPrototypeSplice: Function.prototype.call.bind(Array.prototype.splice),
              ArrayPrototypeUnshift: Function.prototype.call.bind(Array.prototype.unshift),
              BigIntPrototypeValueOf: Function.prototype.call.bind(BigInt.prototype.valueOf),
              BooleanPrototypeValueOf: Function.prototype.call.bind(Boolean.prototype.valueOf),
              DatePrototypeGetTime: Function.prototype.call.bind(Date.prototype.getTime),
              DatePrototypeToISOString: Function.prototype.call.bind(Date.prototype.toISOString),
              DatePrototypeToString: Function.prototype.call.bind(Date.prototype.toString),
              ErrorCaptureStackTrace: /* @__PURE__ */ __name(function ErrorCaptureStackTrace(t6) {
                var e5 = new Error().stack;
                t6.stack = e5.replace(/.*\n.*/, "$1");
              }, "ErrorCaptureStackTrace"),
              ErrorPrototypeToString: Function.prototype.call.bind(Error.prototype.toString),
              FunctionPrototypeBind: Function.prototype.call.bind(Function.prototype.bind),
              FunctionPrototypeCall: Function.prototype.call.bind(Function.prototype.call),
              FunctionPrototypeToString: Function.prototype.call.bind(Function.prototype.toString),
              globalThis: "undefined" == typeof globalThis ? r5.g : globalThis,
              JSONStringify: JSON.stringify,
              MapPrototypeGetSize: d(Map, "size"),
              MapPrototypeEntries: Function.prototype.call.bind(Map.prototype.entries),
              MathFloor: Math.floor,
              MathMax: Math.max,
              MathMin: Math.min,
              MathRound: Math.round,
              MathSqrt: Math.sqrt,
              MathTrunc: Math.trunc,
              Number,
              NumberIsFinite: Number.isFinite,
              NumberIsNaN: Number.isNaN,
              NumberParseFloat: Number.parseFloat,
              NumberParseInt: Number.parseInt,
              NumberPrototypeToString: Function.prototype.call.bind(Number.prototype.toString),
              NumberPrototypeValueOf: Function.prototype.call.bind(Number.prototype.valueOf),
              Object,
              ObjectAssign: Object.assign,
              ObjectCreate: Object.create,
              ObjectDefineProperty: Object.defineProperty,
              ObjectGetOwnPropertyDescriptor: Object.getOwnPropertyDescriptor,
              ObjectGetOwnPropertyNames: Object.getOwnPropertyNames,
              ObjectGetOwnPropertySymbols: Object.getOwnPropertySymbols,
              ObjectGetPrototypeOf: Object.getPrototypeOf,
              ObjectIs: Object.is,
              ObjectKeys: Object.keys,
              ObjectPrototypeHasOwnProperty: Function.prototype.call.bind(Object.prototype.hasOwnProperty),
              ObjectPrototypePropertyIsEnumerable: Function.prototype.call.bind(Object.prototype.propertyIsEnumerable),
              ObjectSeal: Object.seal,
              ObjectSetPrototypeOf: Object.setPrototypeOf,
              ReflectApply: Reflect.apply,
              ReflectOwnKeys: Reflect.ownKeys,
              RegExp,
              RegExpPrototypeExec: Function.prototype.call.bind(RegExp.prototype.exec),
              RegExpPrototypeSymbolReplace: Function.prototype.call.bind(RegExp.prototype[Symbol.replace]),
              RegExpPrototypeSymbolSplit: Function.prototype.call.bind(RegExp.prototype[Symbol.split]),
              RegExpPrototypeTest: Function.prototype.call.bind(RegExp.prototype.test),
              RegExpPrototypeToString: Function.prototype.call.bind(RegExp.prototype.toString),
              SafeStringIterator: g(m2, Function.prototype.call.bind(S.next)),
              SafeMap: v(Map, function(t6) {
                function e5(t7) {
                  return p2(this, e5), o2(this, e5, [
                    t7
                  ]);
                }
                __name(e5, "e");
                return i2(e5, t6), y(e5);
              }(a(Map))),
              SafeSet: v(Set, function(t6) {
                function e5(t7) {
                  return p2(this, e5), o2(this, e5, [
                    t7
                  ]);
                }
                __name(e5, "e");
                return i2(e5, t6), y(e5);
              }(a(Set))),
              SetPrototypeGetSize: d(Set, "size"),
              SetPrototypeValues: Function.prototype.call.bind(Set.prototype.values),
              String,
              StringPrototypeCharCodeAt: Function.prototype.call.bind(String.prototype.charCodeAt),
              StringPrototypeCodePointAt: Function.prototype.call.bind(String.prototype.codePointAt),
              StringPrototypeEndsWith: Function.prototype.call.bind(String.prototype.endsWith),
              StringPrototypeIncludes: Function.prototype.call.bind(String.prototype.includes),
              StringPrototypeIndexOf: Function.prototype.call.bind(String.prototype.indexOf),
              StringPrototypeLastIndexOf: Function.prototype.call.bind(String.prototype.lastIndexOf),
              StringPrototypeNormalize: Function.prototype.call.bind(String.prototype.normalize),
              StringPrototypePadEnd: Function.prototype.call.bind(String.prototype.padEnd),
              StringPrototypePadStart: Function.prototype.call.bind(String.prototype.padStart),
              StringPrototypeRepeat: Function.prototype.call.bind(String.prototype.repeat),
              StringPrototypeReplace: Function.prototype.call.bind(String.prototype.replace),
              StringPrototypeReplaceAll: Function.prototype.call.bind(String.prototype.replaceAll),
              StringPrototypeSlice: Function.prototype.call.bind(String.prototype.slice),
              StringPrototypeSplit: Function.prototype.call.bind(String.prototype.split),
              StringPrototypeStartsWith: Function.prototype.call.bind(String.prototype.startsWith),
              StringPrototypeToLowerCase: Function.prototype.call.bind(String.prototype.toLowerCase),
              StringPrototypeTrim: Function.prototype.call.bind(String.prototype.trim),
              StringPrototypeValueOf: Function.prototype.call.bind(String.prototype.valueOf),
              SymbolPrototypeToString: Function.prototype.call.bind(Symbol.prototype.toString),
              SymbolPrototypeValueOf: Function.prototype.call.bind(Symbol.prototype.valueOf),
              SymbolIterator: Symbol.iterator,
              SymbolFor: Symbol.for,
              SymbolToStringTag: Symbol.toStringTag,
              TypedArrayPrototypeGetLength: ("length", function(t6) {
                return t6.constructor.prototype.__lookupGetter__("length").call(t6);
              }),
              Uint8Array,
              uncurryThis: b
            }, !String.prototype.replaceAll) {
              var P = /* @__PURE__ */ __name(function P2(t6) {
                if (null == t6) throw new TypeError("Can't call method on " + t6);
                return t6;
              }, "P"), x = /* @__PURE__ */ __name(function x2(t6, e5, r6, n4, o3, i3) {
                var _$a = r6 + t6.length, c3 = n4.length, l3 = /\$([$&'`]|\d{1,2})/;
                return void 0 !== o3 && (o3 = Object(P(o3)), l3 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g), i3.replace(l3, function(i4, l4) {
                  var u2;
                  switch (l4.charAt(0)) {
                    case "$":
                      return "$";
                    case "&":
                      return t6;
                    case "`":
                      return e5.slice(0, r6);
                    case "'":
                      return e5.slice(_$a);
                    case "<":
                      u2 = o3[l4.slice(1, -1)];
                      break;
                    default:
                      var p3 = +l4;
                      if (0 === p3) return i4;
                      if (p3 > c3) {
                        var f2 = Math.floor(p3 / 10);
                        return 0 === f2 ? i4 : f2 <= c3 ? void 0 === n4[f2 - 1] ? l4.charAt(1) : n4[f2 - 1] + l4.charAt(1) : i4;
                      }
                      u2 = n4[p3 - 1];
                  }
                  return void 0 === u2 ? "" : u2;
                });
              }, "x");
              t5.exports.StringPrototypeReplaceAll = function(t6, e5, r6) {
                var n4, o3, i3 = P(t6), _$a = 0, c3 = 0, l3 = "";
                if (null != e5) {
                  if (e5 instanceof RegExp && !~e5.flags.indexOf("g")) throw new TypeError("`.replaceAll` does not allow non-global regexes");
                  if (n4 = e5[Symbol.replace]) return n4.call(e5, i3, r6);
                }
                var u2 = String(i3), p3 = String(e5), f2 = "function" == typeof r6;
                f2 || (r6 = String(r6));
                var y2 = p3.length, s2 = Math.max(1, y2);
                for (_$a = u2.indexOf(p3, 0); -1 !== _$a; ) o3 = f2 ? String(r6(p3, _$a, u2)) : x(p3, u2, _$a, [], void 0, r6), l3 += u2.slice(c3, _$a) + o3, c3 = _$a + y2, _$a = u2.indexOf(p3, _$a + s2);
                return c3 < u2.length && (l3 += u2.slice(c3)), l3;
              };
            }
          },
          975: (t5) => {
            function e4(t6) {
              return e4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function e5(t7) {
                return typeof t7;
              }, "e") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, e4(t6);
            }
            __name(e4, "e");
            function r5(t6, e5) {
              for (var _$r = 0; _$r < e5.length; _$r++) {
                var o3 = e5[_$r];
                o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(t6, n3(o3.key), o3);
              }
            }
            __name(r5, "r");
            function n3(t6) {
              var _$r = function(t7, r6) {
                if ("object" != e4(t7) || !t7) return t7;
                var n4 = t7[Symbol.toPrimitive];
                if (void 0 !== n4) {
                  var o3 = n4.call(t7, "string");
                  if ("object" != e4(o3)) return o3;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t7);
              }(t6);
              return "symbol" == e4(_$r) ? _$r : _$r + "";
            }
            __name(n3, "n");
            var o2 = /* @__PURE__ */ new WeakMap(), i2 = function() {
              return _$t = /* @__PURE__ */ __name(function t6(e6, r6) {
                !function(t7, e7) {
                  if (!(t7 instanceof e7)) throw new TypeError("Cannot call a class as a function");
                }(this, t6);
                var n4 = new Proxy(e6, r6);
                return o2.set(n4, [
                  e6,
                  r6
                ]), n4;
              }, "t"), e5 = [
                {
                  key: "getProxyDetails",
                  value: /* @__PURE__ */ __name(function value(t6) {
                    var e6 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], _$r = o2.get(t6);
                    if (_$r) return e6 ? _$r : _$r[0];
                  }, "value")
                },
                {
                  key: "revocable",
                  value: /* @__PURE__ */ __name(function value(t6, e6) {
                    var _$r = Proxy.revocable(t6, e6);
                    o2.set(_$r.proxy, [
                      t6,
                      e6
                    ]);
                    var n4 = _$r.revoke;
                    return _$r.revoke = function() {
                      o2.set(_$r.proxy, [
                        null,
                        null
                      ]), n4();
                    }, _$r;
                  }, "value")
                }
              ], null, e5 && r5(_$t, e5), Object.defineProperty(_$t, "prototype", {
                writable: false
              }), _$t;
              var _$t, e5;
            }();
            t5.exports = {
              getProxyDetails: i2.getProxyDetails.bind(i2),
              Proxy: i2
            };
          },
          763: (t5, e4, r5) => {
            function n3(t6) {
              return n3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? /* @__PURE__ */ __name(function n4(t7) {
                return typeof t7;
              }, "n") : function(t7) {
                return t7 && "function" == typeof Symbol && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
              }, n3(t6);
            }
            __name(n3, "n");
            function o2(t6, e5) {
              if (t6) {
                if ("string" == typeof t6) return i2(t6, e5);
                var _$r = Object.prototype.toString.call(t6).slice(8, -1);
                return "Object" === _$r && t6.constructor && (_$r = t6.constructor.name), "Map" === _$r || "Set" === _$r ? Array.from(t6) : "Arguments" === _$r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_$r) ? i2(t6, e5) : void 0;
              }
            }
            __name(o2, "o");
            function i2(t6, e5) {
              (null == e5 || e5 > t6.length) && (e5 = t6.length);
              for (var _$r = 0, n4 = new Array(e5); _$r < e5; _$r++) n4[_$r] = t6[_$r];
              return n4;
            }
            __name(i2, "i");
            var a = r5(975), c2 = Symbol("kPending"), l2 = Symbol("kRejected");
            t5.exports = {
              constants: {
                kPending: c2,
                kRejected: l2,
                ALL_PROPERTIES: 0,
                ONLY_ENUMERABLE: 2
              },
              getOwnNonIndexProperties: /* @__PURE__ */ __name(function getOwnNonIndexProperties(t6) {
                for (var e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, _$r = Object.getOwnPropertyDescriptors(t6), n4 = [], i3 = 0, a2 = Object.entries(_$r); i3 < a2.length; i3++) {
                  var c3 = (p2 = a2[i3], f = 2, function(t7) {
                    if (Array.isArray(t7)) return t7;
                  }(p2) || function(t7, e6) {
                    var _$r2 = null == t7 ? null : "undefined" != typeof Symbol && t7[Symbol.iterator] || t7["@@iterator"];
                    if (null != _$r2) {
                      var n5, _$o, i4, a3, c4 = [], l4 = true, u2 = false;
                      try {
                        if (i4 = (_$r2 = _$r2.call(t7)).next, 0 === e6) {
                          if (Object(_$r2) !== _$r2) return;
                          l4 = false;
                        } else for (; !(l4 = (n5 = i4.call(_$r2)).done) && (c4.push(n5.value), c4.length !== e6); l4 = true) ;
                      } catch (t8) {
                        u2 = true, _$o = t8;
                      } finally {
                        try {
                          if (!l4 && null != _$r2.return && (a3 = _$r2.return(), Object(a3) !== a3)) return;
                        } finally {
                          if (u2) throw _$o;
                        }
                      }
                      return c4;
                    }
                  }(p2, f) || o2(p2, f) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }()), l3 = c3[0], u = c3[1];
                  if (!/^(0|[1-9][0-9]*)$/.test(l3) || parseInt(l3, 10) >= Math.pow(2, 32) - 1) {
                    if (2 === e5 && !u.enumerable) continue;
                    n4.push(l3);
                  }
                }
                var p2, f, y, s = function(t7, e6) {
                  var _$r2 = "undefined" != typeof Symbol && t7[Symbol.iterator] || t7["@@iterator"];
                  if (!_$r2) {
                    if (Array.isArray(t7) || (_$r2 = o2(t7))) {
                      _$r2 && (t7 = _$r2);
                      var n5 = 0, i4 = /* @__PURE__ */ __name(function i5() {
                      }, "i");
                      return {
                        s: i4,
                        n: /* @__PURE__ */ __name(function n1() {
                          return n5 >= t7.length ? {
                            done: true
                          } : {
                            done: false,
                            value: t7[n5++]
                          };
                        }, "n1"),
                        e: /* @__PURE__ */ __name(function e7(t8) {
                          throw t8;
                        }, "e"),
                        f: i4
                      };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }
                  var a3, c4 = true, l4 = false;
                  return {
                    s: /* @__PURE__ */ __name(function s2() {
                      _$r2 = _$r2.call(t7);
                    }, "s"),
                    n: /* @__PURE__ */ __name(function n6() {
                      var _$t = _$r2.next();
                      return c4 = _$t.done, _$t;
                    }, "n"),
                    e: /* @__PURE__ */ __name(function e7(t8) {
                      l4 = true, a3 = t8;
                    }, "e"),
                    f: /* @__PURE__ */ __name(function f2() {
                      try {
                        c4 || null == _$r2.return || _$r2.return();
                      } finally {
                        if (l4) throw a3;
                      }
                    }, "f")
                  };
                }(Object.getOwnPropertySymbols(t6));
                try {
                  for (s.s(); !(y = s.n()).done; ) {
                    var g = y.value, d = Object.getOwnPropertyDescriptor(t6, g);
                    (2 !== e5 || d.enumerable) && n4.push(g);
                  }
                } catch (t7) {
                  s.e(t7);
                } finally {
                  s.f();
                }
                return n4;
              }, "getOwnNonIndexProperties"),
              getPromiseDetails: /* @__PURE__ */ __name(function getPromiseDetails() {
                return [
                  c2,
                  void 0
                ];
              }, "getPromiseDetails"),
              getProxyDetails: a.getProxyDetails,
              Proxy: a.Proxy,
              previewEntries: /* @__PURE__ */ __name(function previewEntries(t6) {
                return [
                  [],
                  false
                ];
              }, "previewEntries"),
              getConstructorName: /* @__PURE__ */ __name(function getConstructorName(t6) {
                if (!t6 || "object" !== n3(t6)) throw new Error("Invalid object");
                if (t6.constructor && t6.constructor.name) return t6.constructor.name;
                var e5 = Object.prototype.toString.call(t6).match(/^\[object ([^\]]+)\]/);
                return e5 ? e5[1] : "Object";
              }, "getConstructorName"),
              getExternalValue: /* @__PURE__ */ __name(function getExternalValue() {
                return BigInt(0);
              }, "getExternalValue")
            };
          }
        }, e3 = {};
        function r4(n3) {
          var o2 = e3[n3];
          if (void 0 !== o2) return o2.exports;
          var i2 = e3[n3] = {
            exports: {}
          };
          return t4[n3](i2, i2.exports, r4), i2.exports;
        }
        __name(r4, "r");
        return r4.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")();
          } catch (t5) {
            if ("object" == typeof window) return window;
          }
        }(), r4(339);
      })());
    }
  });

  // node_modules/node-inspect-extracted/index.mjs
  var import_inspect, inspect, format, formatWithOptions, stripVTControlCharacters, stylizeWithColor, stylizeWithHTML, Proxy2;
  var init_node_inspect_extracted = __esm({
    "node_modules/node-inspect-extracted/index.mjs"() {
      import_inspect = __toESM(require_inspect(), 1);
      ({
        inspect: (
          // The commented out things are not visible from normal node's util.
          // identicalSequenceRange,
          inspect
        ),
        format: (
          // inspectDefaultOptions,
          format
        ),
        formatWithOptions,
        stripVTControlCharacters: (
          // getStringWidth,
          stripVTControlCharacters
        ),
        stylizeWithColor: (
          // isZeroWidthCodePoint,
          stylizeWithColor
        ),
        stylizeWithHTML,
        Proxy: Proxy2
      } = import_inspect.default);
    }
  });

  // src/api/logger.ts
  var logger_exports = {};
  __export(logger_exports, {
    wtlogger: () => wtlogger
  });
  var Logger, wtlogger;
  var init_logger = __esm({
    "src/api/logger.ts"() {
      "use strict";
      init_class_call_check();
      init_create_class();
      init_define_property();
      init_node_inspect_extracted();
      Logger = /* @__PURE__ */ function() {
        "use strict";
        function Logger2(name) {
          _class_call_check(this, Logger2);
          _define_property(this, "name", void 0);
          _define_property(this, "breadcrumbs", []);
          _define_property(this, "parent", null);
          _define_property(this, "logs", []);
          _define_property(this, "logHandlers", /* @__PURE__ */ new Set());
          this.name = name;
          if (this.breadcrumbs.length === 0) {
            this.breadcrumbs.push(name);
          }
        }
        __name(Logger2, "Logger");
        _create_class(Logger2, [
          {
            key: "executeOnSelfAndAncestors",
            value: /* @__PURE__ */ __name(function executeOnSelfAndAncestors(fn) {
              fn(this);
              var parent = this.parent;
              while (parent) {
                fn(parent);
                parent = parent.parent;
              }
            }, "executeOnSelfAndAncestors")
          },
          {
            key: "createChild",
            value: /* @__PURE__ */ __name(function createChild(name) {
              var logger16 = new Logger2(name);
              logger16.parent = this;
              logger16.breadcrumbs = [
                ...this.breadcrumbs,
                name
              ];
              return logger16;
            }, "createChild")
          },
          {
            key: "log",
            value: /* @__PURE__ */ __name(function log(level, message, ...substitutions) {
              if (typeof message === "object") {
                message = String.raw(message, ...substitutions);
              }
              this.executeOnSelfAndAncestors((logger16) => {
                var logParameters = {
                  message,
                  level,
                  timestamp: Date.now(),
                  breadcrumbs: this.breadcrumbs
                };
                if (level === "error") {
                  var error = substitutions.find((a) => a instanceof Error);
                  logParameters.errorStack = error?.stack;
                }
                if (logger16.logHandlers.size > 0) {
                  for (var handler of logger16.logHandlers) {
                    handler(logParameters);
                  }
                }
                logger16.logs.push(logParameters);
              });
            }, "log")
          },
          {
            key: "info",
            value: /* @__PURE__ */ __name(function info(message, ...substitutions) {
              this.log("info", message, ...substitutions);
            }, "info")
          },
          {
            key: "warn",
            value: /* @__PURE__ */ __name(function warn(message, ...substitutions) {
              this.log("warn", message, ...substitutions);
            }, "warn")
          },
          {
            key: "error",
            value: /* @__PURE__ */ __name(function error(message, ...substitutions) {
              this.log("error", message, ...substitutions);
            }, "error")
          },
          {
            key: "debug",
            value: /* @__PURE__ */ __name(function debug(message, ...substitutions) {
              this.log("debug", message, ...substitutions);
            }, "debug")
          },
          {
            key: "inspect",
            value: /* @__PURE__ */ __name(function inspect1(...data) {
              var inspected = "";
              if (data.length === 1) {
                inspected = inspect(data[0]);
              } else {
                inspected = inspect(data);
              }
              this.log("debug", inspected);
            }, "inspect1")
          },
          {
            key: "pipe",
            value: /* @__PURE__ */ __name(function pipe(logHandler) {
              this.executeOnSelfAndAncestors((logger16) => {
                logger16.logHandlers.add(logHandler);
              });
              return () => this.unpipe(logHandler);
            }, "pipe")
          },
          {
            key: "unpipe",
            value: /* @__PURE__ */ __name(function unpipe(logHandler) {
              this.executeOnSelfAndAncestors((logger16) => {
                logger16.logHandlers.delete(logHandler);
              });
            }, "unpipe")
          },
          {
            key: "unpipeAll",
            value: /* @__PURE__ */ __name(function unpipeAll() {
              this.executeOnSelfAndAncestors((logger16) => {
                if (logger16 === this) return;
                for (var handler of this.logHandlers) {
                  if (logger16.logHandlers.has(handler)) {
                    logger16.logHandlers.delete(handler);
                  }
                }
              });
              this.logHandlers.clear();
            }, "unpipeAll")
          }
        ]);
        return Logger2;
      }();
      wtlogger = new Logger("Wintry");
    }
  });

  // shims/emptyModule.ts
  var init_emptyModule = __esm({
    "shims/emptyModule.ts"() {
      "use strict";
    }
  });

  // src/error-reporter.ts
  var error_reporter_exports = {};
  __export(error_reporter_exports, {
    default: () => reportErrorOnInitialization
  });
  function getStackTrace(error) {
    if (error instanceof Error) {
      return error.stack;
    }
    return String(error) || "<unknown error>";
  }
  function maybeLogError(error) {
    var stackTrace = getStackTrace(error);
    hookDefineProperty(window, "console", (console2) => {
      console2.error(`An error occurred during initialization: ${stackTrace}`);
    });
  }
  function maybeAlertError(error) {
    var stackTrace = getStackTrace(error);
    hookDefineProperty(window, "alert", (alert2) => {
      alert2(`Wintry failed due to an error: ${stackTrace}`);
    });
  }
  function reportErrorOnInitialization(error) {
    maybeLogError(error);
    maybeAlertError(error);
  }
  var init_error_reporter = __esm({
    "src/error-reporter.ts"() {
      "use strict";
      init_emptyModule();
      init_objects();
      __name(getStackTrace, "getStackTrace");
      __name(maybeLogError, "maybeLogError");
      __name(maybeAlertError, "maybeAlertError");
      __name(reportErrorOnInitialization, "reportErrorOnInitialization");
    }
  });

  // node_modules/es-toolkit/dist/error/AbortError.mjs
  var AbortError;
  var init_AbortError = __esm({
    "node_modules/es-toolkit/dist/error/AbortError.mjs"() {
      init_call_super();
      init_class_call_check();
      init_inherits();
      init_wrap_native_super();
      AbortError = /* @__PURE__ */ function(Error1) {
        "use strict";
        _inherits(AbortError2, Error1);
        function AbortError2(message = "The operation was aborted") {
          _class_call_check(this, AbortError2);
          var _this;
          _this = _call_super(this, AbortError2, [
            message
          ]);
          _this.name = "AbortError";
          return _this;
        }
        __name(AbortError2, "AbortError");
        return AbortError2;
      }(_wrap_native_super(Error));
    }
  });

  // node_modules/@swc/helpers/esm/_async_to_generator.js
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
  }
  function _async_to_generator(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        __name(_next, "_next");
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        __name(_throw, "_throw");
        _next(void 0);
      });
    };
  }
  var init_async_to_generator = __esm({
    "node_modules/@swc/helpers/esm/_async_to_generator.js"() {
      __name(asyncGeneratorStep, "asyncGeneratorStep");
      __name(_async_to_generator, "_async_to_generator");
    }
  });

  // node_modules/es-toolkit/dist/function/debounce.mjs
  function debounce(func, debounceMs, { signal, edges } = {}) {
    var pendingThis = void 0;
    var pendingArgs = null;
    var leading = edges != null && edges.includes("leading");
    var trailing = edges == null || edges.includes("trailing");
    var invoke = /* @__PURE__ */ __name(() => {
      if (pendingArgs !== null) {
        func.apply(pendingThis, pendingArgs);
        pendingThis = void 0;
        pendingArgs = null;
      }
    }, "invoke");
    var onTimerEnd = /* @__PURE__ */ __name(() => {
      if (trailing) {
        invoke();
      }
      cancel();
    }, "onTimerEnd");
    var timeoutId = null;
    var schedule = /* @__PURE__ */ __name(() => {
      if (timeoutId != null) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        timeoutId = null;
        onTimerEnd();
      }, debounceMs);
    }, "schedule");
    var cancelTimer = /* @__PURE__ */ __name(() => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    }, "cancelTimer");
    var cancel = /* @__PURE__ */ __name(() => {
      cancelTimer();
      pendingThis = void 0;
      pendingArgs = null;
    }, "cancel");
    var flush = /* @__PURE__ */ __name(() => {
      cancelTimer();
      invoke();
    }, "flush");
    var debounced = /* @__PURE__ */ __name(function debounced2(...args) {
      if (signal?.aborted) {
        return;
      }
      pendingThis = this;
      pendingArgs = args;
      var isFirstCall = timeoutId == null;
      schedule();
      if (leading && isFirstCall) {
        invoke();
      }
    }, "debounced");
    debounced.schedule = schedule;
    debounced.cancel = cancel;
    debounced.flush = flush;
    signal?.addEventListener("abort", cancel, {
      once: true
    });
    return debounced;
  }
  var init_debounce = __esm({
    "node_modules/es-toolkit/dist/function/debounce.mjs"() {
      __name(debounce, "debounce");
    }
  });

  // node_modules/es-toolkit/dist/function/memoize.mjs
  function memoize(fn, options = {}) {
    var { cache = /* @__PURE__ */ new Map(), getCacheKey } = options;
    var memoizedFn = /* @__PURE__ */ __name(function memoizedFn2(arg) {
      var key = getCacheKey ? getCacheKey(arg) : arg;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = fn.call(this, arg);
      cache.set(key, result);
      return result;
    }, "memoizedFn");
    memoizedFn.cache = cache;
    return memoizedFn;
  }
  var init_memoize = __esm({
    "node_modules/es-toolkit/dist/function/memoize.mjs"() {
      __name(memoize, "memoize");
    }
  });

  // node_modules/es-toolkit/dist/function/noop.mjs
  function noop() {
  }
  var init_noop = __esm({
    "node_modules/es-toolkit/dist/function/noop.mjs"() {
      __name(noop, "noop");
    }
  });

  // node_modules/es-toolkit/dist/promise/delay.mjs
  function delay(ms, { signal } = {}) {
    return new Promise((resolve, reject) => {
      var abortError = /* @__PURE__ */ __name(() => {
        reject(new AbortError());
      }, "abortError");
      var abortHandler = /* @__PURE__ */ __name(() => {
        clearTimeout(timeoutId);
        abortError();
      }, "abortHandler");
      if (signal?.aborted) {
        return abortError();
      }
      var timeoutId = setTimeout(() => {
        signal?.removeEventListener("abort", abortHandler);
        resolve();
      }, ms);
      signal?.addEventListener("abort", abortHandler, {
        once: true
      });
    });
  }
  var init_delay = __esm({
    "node_modules/es-toolkit/dist/promise/delay.mjs"() {
      init_AbortError();
      __name(delay, "delay");
    }
  });

  // node_modules/es-toolkit/dist/predicate/isPrimitive.mjs
  function isPrimitive(value) {
    return value == null || typeof value !== "object" && typeof value !== "function";
  }
  var init_isPrimitive = __esm({
    "node_modules/es-toolkit/dist/predicate/isPrimitive.mjs"() {
      __name(isPrimitive, "isPrimitive");
    }
  });

  // node_modules/es-toolkit/dist/predicate/isTypedArray.mjs
  function isTypedArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
  }
  var init_isTypedArray = __esm({
    "node_modules/es-toolkit/dist/predicate/isTypedArray.mjs"() {
      __name(isTypedArray, "isTypedArray");
    }
  });

  // node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs
  function getSymbols(object) {
    return Object.getOwnPropertySymbols(object).filter((symbol) => Object.prototype.propertyIsEnumerable.call(object, symbol));
  }
  var init_getSymbols = __esm({
    "node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs"() {
      __name(getSymbols, "getSymbols");
    }
  });

  // node_modules/es-toolkit/dist/compat/_internal/getTag.mjs
  function getTag(value) {
    if (value == null) {
      return value === void 0 ? "[object Undefined]" : "[object Null]";
    }
    return Object.prototype.toString.call(value);
  }
  var init_getTag = __esm({
    "node_modules/es-toolkit/dist/compat/_internal/getTag.mjs"() {
      __name(getTag, "getTag");
    }
  });

  // node_modules/es-toolkit/dist/compat/_internal/tags.mjs
  var regexpTag, stringTag, numberTag, booleanTag, argumentsTag, symbolTag, dateTag, mapTag, setTag, arrayTag, arrayBufferTag, objectTag, dataViewTag, uint8ArrayTag, uint8ClampedArrayTag, uint16ArrayTag, uint32ArrayTag, int8ArrayTag, int16ArrayTag, int32ArrayTag, float32ArrayTag, float64ArrayTag;
  var init_tags = __esm({
    "node_modules/es-toolkit/dist/compat/_internal/tags.mjs"() {
      regexpTag = "[object RegExp]";
      stringTag = "[object String]";
      numberTag = "[object Number]";
      booleanTag = "[object Boolean]";
      argumentsTag = "[object Arguments]";
      symbolTag = "[object Symbol]";
      dateTag = "[object Date]";
      mapTag = "[object Map]";
      setTag = "[object Set]";
      arrayTag = "[object Array]";
      arrayBufferTag = "[object ArrayBuffer]";
      objectTag = "[object Object]";
      dataViewTag = "[object DataView]";
      uint8ArrayTag = "[object Uint8Array]";
      uint8ClampedArrayTag = "[object Uint8ClampedArray]";
      uint16ArrayTag = "[object Uint16Array]";
      uint32ArrayTag = "[object Uint32Array]";
      int8ArrayTag = "[object Int8Array]";
      int16ArrayTag = "[object Int16Array]";
      int32ArrayTag = "[object Int32Array]";
      float32ArrayTag = "[object Float32Array]";
      float64ArrayTag = "[object Float64Array]";
    }
  });

  // node_modules/es-toolkit/dist/object/cloneDeepWith.mjs
  function cloneDeepWith(obj, cloneValue) {
    return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), cloneValue);
  }
  function cloneDeepWithImpl(valueToClone, keyToClone, objectToClone, stack = /* @__PURE__ */ new Map(), cloneValue = void 0) {
    var cloned = cloneValue?.(valueToClone, keyToClone, objectToClone, stack);
    if (cloned != null) {
      return cloned;
    }
    if (isPrimitive(valueToClone)) {
      return valueToClone;
    }
    if (stack.has(valueToClone)) {
      return stack.get(valueToClone);
    }
    if (Array.isArray(valueToClone)) {
      var result = new Array(valueToClone.length);
      stack.set(valueToClone, result);
      for (var i2 = 0; i2 < valueToClone.length; i2++) {
        result[i2] = cloneDeepWithImpl(valueToClone[i2], i2, objectToClone, stack, cloneValue);
      }
      if (Object.hasOwn(valueToClone, "index")) {
        result.index = valueToClone.index;
      }
      if (Object.hasOwn(valueToClone, "input")) {
        result.input = valueToClone.input;
      }
      return result;
    }
    if (valueToClone instanceof Date) {
      return new Date(valueToClone.getTime());
    }
    if (valueToClone instanceof RegExp) {
      var result1 = new RegExp(valueToClone.source, valueToClone.flags);
      result1.lastIndex = valueToClone.lastIndex;
      return result1;
    }
    if (valueToClone instanceof Map) {
      var result2 = /* @__PURE__ */ new Map();
      stack.set(valueToClone, result2);
      for (var [key, value] of valueToClone) {
        result2.set(key, cloneDeepWithImpl(value, key, objectToClone, stack, cloneValue));
      }
      return result2;
    }
    if (valueToClone instanceof Set) {
      var result3 = /* @__PURE__ */ new Set();
      stack.set(valueToClone, result3);
      for (var value1 of valueToClone) {
        result3.add(cloneDeepWithImpl(value1, void 0, objectToClone, stack, cloneValue));
      }
      return result3;
    }
    if (typeof Buffer !== "undefined" && Buffer.isBuffer(valueToClone)) {
      return valueToClone.subarray();
    }
    if (isTypedArray(valueToClone)) {
      var result4 = new (Object.getPrototypeOf(valueToClone)).constructor(valueToClone.length);
      stack.set(valueToClone, result4);
      for (var i1 = 0; i1 < valueToClone.length; i1++) {
        result4[i1] = cloneDeepWithImpl(valueToClone[i1], i1, objectToClone, stack, cloneValue);
      }
      return result4;
    }
    if (valueToClone instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && valueToClone instanceof SharedArrayBuffer) {
      return valueToClone.slice(0);
    }
    if (valueToClone instanceof DataView) {
      var result5 = new DataView(valueToClone.buffer.slice(0), valueToClone.byteOffset, valueToClone.byteLength);
      stack.set(valueToClone, result5);
      copyProperties(result5, valueToClone, objectToClone, stack, cloneValue);
      return result5;
    }
    if (typeof File !== "undefined" && valueToClone instanceof File) {
      var result6 = new File([
        valueToClone
      ], valueToClone.name, {
        type: valueToClone.type
      });
      stack.set(valueToClone, result6);
      copyProperties(result6, valueToClone, objectToClone, stack, cloneValue);
      return result6;
    }
    if (valueToClone instanceof Blob) {
      var result7 = new Blob([
        valueToClone
      ], {
        type: valueToClone.type
      });
      stack.set(valueToClone, result7);
      copyProperties(result7, valueToClone, objectToClone, stack, cloneValue);
      return result7;
    }
    if (valueToClone instanceof Error) {
      var result8 = new valueToClone.constructor();
      stack.set(valueToClone, result8);
      result8.message = valueToClone.message;
      result8.name = valueToClone.name;
      result8.stack = valueToClone.stack;
      result8.cause = valueToClone.cause;
      copyProperties(result8, valueToClone, objectToClone, stack, cloneValue);
      return result8;
    }
    if (typeof valueToClone === "object" && isCloneableObject(valueToClone)) {
      var result9 = Object.create(Object.getPrototypeOf(valueToClone));
      stack.set(valueToClone, result9);
      copyProperties(result9, valueToClone, objectToClone, stack, cloneValue);
      return result9;
    }
    return valueToClone;
  }
  function copyProperties(target, source, objectToClone = target, stack, cloneValue) {
    var keys = [
      ...Object.keys(source),
      ...getSymbols(source)
    ];
    for (var i2 = 0; i2 < keys.length; i2++) {
      var key = keys[i2];
      var descriptor = Object.getOwnPropertyDescriptor(target, key);
      if (descriptor == null || descriptor.writable) {
        target[key] = cloneDeepWithImpl(source[key], key, objectToClone, stack, cloneValue);
      }
    }
  }
  function isCloneableObject(object) {
    switch (getTag(object)) {
      case argumentsTag:
      case arrayTag:
      case arrayBufferTag:
      case dataViewTag:
      case booleanTag:
      case dateTag:
      case float32ArrayTag:
      case float64ArrayTag:
      case int8ArrayTag:
      case int16ArrayTag:
      case int32ArrayTag:
      case mapTag:
      case numberTag:
      case objectTag:
      case regexpTag:
      case setTag:
      case stringTag:
      case symbolTag:
      case uint8ArrayTag:
      case uint8ClampedArrayTag:
      case uint16ArrayTag:
      case uint32ArrayTag: {
        return true;
      }
      default: {
        return false;
      }
    }
  }
  var init_cloneDeepWith = __esm({
    "node_modules/es-toolkit/dist/object/cloneDeepWith.mjs"() {
      init_getSymbols();
      init_getTag();
      init_tags();
      init_isPrimitive();
      init_isTypedArray();
      __name(cloneDeepWith, "cloneDeepWith");
      __name(cloneDeepWithImpl, "cloneDeepWithImpl");
      __name(copyProperties, "copyProperties");
      __name(isCloneableObject, "isCloneableObject");
    }
  });

  // node_modules/es-toolkit/dist/object/omit.mjs
  function omit(obj, keys) {
    var result = {
      ...obj
    };
    for (var i2 = 0; i2 < keys.length; i2++) {
      var key = keys[i2];
      delete result[key];
    }
    return result;
  }
  var init_omit = __esm({
    "node_modules/es-toolkit/dist/object/omit.mjs"() {
      __name(omit, "omit");
    }
  });

  // node_modules/es-toolkit/dist/object/pick.mjs
  function pick(obj, keys) {
    var result = {};
    for (var i2 = 0; i2 < keys.length; i2++) {
      var key = keys[i2];
      if (Object.hasOwn(obj, key)) {
        result[key] = obj[key];
      }
    }
    return result;
  }
  var init_pick = __esm({
    "node_modules/es-toolkit/dist/object/pick.mjs"() {
      __name(pick, "pick");
    }
  });

  // node_modules/es-toolkit/dist/compat/util/eq.mjs
  function eq(value, other) {
    return value === other || Number.isNaN(value) && Number.isNaN(other);
  }
  var init_eq = __esm({
    "node_modules/es-toolkit/dist/compat/util/eq.mjs"() {
      __name(eq, "eq");
    }
  });

  // node_modules/es-toolkit/dist/promise/semaphore.mjs
  var Semaphore;
  var init_semaphore = __esm({
    "node_modules/es-toolkit/dist/promise/semaphore.mjs"() {
      init_async_to_generator();
      init_class_call_check();
      init_create_class();
      init_define_property();
      Semaphore = /* @__PURE__ */ function() {
        "use strict";
        function Semaphore2(capacity) {
          _class_call_check(this, Semaphore2);
          _define_property(this, "capacity", void 0);
          _define_property(this, "available", void 0);
          _define_property(this, "deferredTasks", []);
          this.capacity = capacity;
          this.available = capacity;
        }
        __name(Semaphore2, "Semaphore");
        _create_class(Semaphore2, [
          {
            key: "acquire",
            value: /* @__PURE__ */ __name(function acquire() {
              var _this = this;
              return _async_to_generator(function* () {
                if (_this.available > 0) {
                  _this.available--;
                  return;
                }
                return new Promise((resolve) => {
                  _this.deferredTasks.push(resolve);
                });
              })();
            }, "acquire")
          },
          {
            key: "release",
            value: /* @__PURE__ */ __name(function release() {
              var deferredTask = this.deferredTasks.shift();
              if (deferredTask != null) {
                deferredTask();
                return;
              }
              if (this.available < this.capacity) {
                this.available++;
              }
            }, "release")
          }
        ]);
        return Semaphore2;
      }();
    }
  });

  // node_modules/es-toolkit/dist/promise/mutex.mjs
  var Mutex;
  var init_mutex = __esm({
    "node_modules/es-toolkit/dist/promise/mutex.mjs"() {
      init_async_to_generator();
      init_class_call_check();
      init_create_class();
      init_define_property();
      init_semaphore();
      Mutex = /* @__PURE__ */ function() {
        "use strict";
        function Mutex2() {
          _class_call_check(this, Mutex2);
          _define_property(this, "semaphore", new Semaphore(1));
        }
        __name(Mutex2, "Mutex");
        _create_class(Mutex2, [
          {
            key: "isLocked",
            get: /* @__PURE__ */ __name(function get() {
              return this.semaphore.available === 0;
            }, "get")
          },
          {
            key: "acquire",
            value: /* @__PURE__ */ __name(function acquire() {
              var _this = this;
              return _async_to_generator(function* () {
                return _this.semaphore.acquire();
              })();
            }, "acquire")
          },
          {
            key: "release",
            value: /* @__PURE__ */ __name(function release() {
              this.semaphore.release();
            }, "release")
          }
        ]);
        return Mutex2;
      }();
    }
  });

  // node_modules/es-toolkit/dist/index.mjs
  var init_dist = __esm({
    "node_modules/es-toolkit/dist/index.mjs"() {
      init_debounce();
      init_memoize();
      init_noop();
      init_omit();
      init_pick();
      init_isPrimitive();
      init_delay();
      init_mutex();
    }
  });

  // src/utils/lazy.ts
  var lazy_exports = {};
  __export(lazy_exports, {
    createLazyImportProxy: () => createLazyImportProxy,
    getProxyFactory: () => getProxyFactory,
    lazyDestructure: () => lazyDestructure,
    lazyValue: () => lazyValue
  });
  function lazyValue(factory, opts = {}) {
    var cache;
    var dummy = opts.hint !== "object" ? () => {
    } : {};
    var proxyFactory = /* @__PURE__ */ __name(() => {
      if (!cache) {
        cache = factory();
        if (cache != null && isPrimitive(cache)) {
          cache = new cache.constructor(cache);
        }
      }
      return cache;
    }, "proxyFactory");
    var proxy = new Proxy(dummy, lazyHandler);
    factories.set(proxy, proxyFactory);
    proxyContextHolder.set(dummy, {
      factory: proxyFactory,
      options: opts
    });
    return proxy;
  }
  function lazyDestructure(factory, opts = {}) {
    var proxiedObject = lazyValue(factory);
    return new Proxy({}, {
      get(_, property) {
        if (property === Symbol.iterator) {
          return function* () {
            yield proxiedObject;
            yield new Proxy({}, {
              get: /* @__PURE__ */ __name((_2, p2) => lazyValue(() => proxiedObject[p2], opts), "get")
            });
            throw new Error("This is not a real iterator, this is likely used incorrectly");
          };
        }
        return lazyValue(() => proxiedObject[property], opts);
      }
    });
  }
  function getProxyFactory(obj) {
    return factories.get(obj);
  }
  function createLazyImportProxy(getter) {
    return new Proxy(() => {
    }, {
      apply: /* @__PURE__ */ __name((_, __, args) => {
        return getter().default?.(...args);
      }, "apply"),
      get: /* @__PURE__ */ __name((_, p2) => getter()?.default?.[p2] ?? getter()?.[p2], "get"),
      getPrototypeOf: /* @__PURE__ */ __name(() => new Proxy({}, {
        get: /* @__PURE__ */ __name((_, p2) => getter()?.[p2], "get")
      }), "getPrototypeOf")
    });
  }
  var originalFnSym, unconfigurable, isUnconfigurable, factories, proxyContextHolder, lazyHandler;
  var init_lazy = __esm({
    "src/utils/lazy.ts"() {
      "use strict";
      init_dist();
      originalFnSym = Symbol.for("wintry.lazy.originalFn");
      unconfigurable = /* @__PURE__ */ new Set([
        "arguments",
        "caller",
        "prototype"
      ]);
      isUnconfigurable = /* @__PURE__ */ __name((key) => typeof key === "string" && unconfigurable.has(key), "isUnconfigurable");
      factories = /* @__PURE__ */ new WeakMap();
      proxyContextHolder = /* @__PURE__ */ new WeakMap();
      lazyHandler = {
        ...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map((fnName) => {
          return [
            fnName,
            (target, ...args) => {
              var contextHolder = proxyContextHolder.get(target);
              var resolved = contextHolder?.factory();
              if (!resolved) throw new Error(`Trying to Reflect.${fnName} of ${typeof resolved}`);
              return Reflect[fnName](resolved, ...args);
            }
          ];
        })),
        has(target, p2) {
          var contextHolder = proxyContextHolder.get(target);
          if (contextHolder?.options) {
            var { exemptedEntries: isolatedEntries } = contextHolder.options;
            if (isolatedEntries && p2 in isolatedEntries) return true;
          }
          var resolved = contextHolder?.factory();
          if (!resolved) throw new Error(`Trying to Reflect.has of ${typeof resolved}`);
          return Reflect.has(resolved, p2);
        },
        get(target, p2, receiver) {
          var contextHolder = proxyContextHolder.get(target);
          if (contextHolder?.options) {
            var { exemptedEntries } = contextHolder.options;
            if (exemptedEntries?.[p2]) return exemptedEntries[p2];
          }
          var resolved = contextHolder?.factory();
          try {
            var ret = Reflect.get(resolved, p2, receiver);
            if (typeof ret === "function" && contextHolder?.options?.retainContext !== false) {
              return new Proxy(ret, {
                get(target2, prop, receiver2) {
                  if (prop === originalFnSym) return target2;
                  return Reflect.get(target2, prop, receiver2);
                },
                apply(target2, thisArg, args) {
                  return Reflect.apply(target2, thisArg === receiver ? resolved : thisArg, args);
                }
              });
            }
            return ret;
          } catch (e3) {
            throw new Error(`Reflect.get called on ${typeof resolved}`);
          }
        },
        ownKeys: /* @__PURE__ */ __name((target) => {
          var contextHolder = proxyContextHolder.get(target);
          var resolved = contextHolder?.factory();
          if (!resolved) throw new Error(`Reflect.ownKeys of ${typeof resolved}`);
          var cacheKeys = Reflect.ownKeys(resolved);
          for (var key of unconfigurable) {
            if (!cacheKeys.includes(key)) {
              cacheKeys.push(key);
            }
          }
          return cacheKeys;
        }, "ownKeys"),
        getOwnPropertyDescriptor: /* @__PURE__ */ __name((target, p2) => {
          var contextHolder = proxyContextHolder.get(target);
          var resolved = contextHolder?.factory();
          if (!resolved) throw new Error(`Reflect.getOwnPropertyDescriptor of ${typeof resolved}`);
          if (isUnconfigurable(p2)) return Reflect.getOwnPropertyDescriptor(target, p2);
          var descriptor = Reflect.getOwnPropertyDescriptor(resolved, p2);
          if (descriptor) Object.defineProperty(target, p2, descriptor);
          return descriptor;
        }, "getOwnPropertyDescriptor")
      };
      __name(lazyValue, "lazyValue");
      __name(lazyDestructure, "lazyDestructure");
      __name(getProxyFactory, "getProxyFactory");
      __name(createLazyImportProxy, "createLazyImportProxy");
    }
  });

  // node_modules/zustand/esm/vanilla.mjs
  var createStoreImpl, createStore;
  var init_vanilla = __esm({
    "node_modules/zustand/esm/vanilla.mjs"() {
      createStoreImpl = /* @__PURE__ */ __name((createState) => {
        var state2;
        var listeners = /* @__PURE__ */ new Set();
        var setState = /* @__PURE__ */ __name((partial, replace) => {
          var nextState = typeof partial === "function" ? partial(state2) : partial;
          if (!Object.is(nextState, state2)) {
            var previousState = state2;
            state2 = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state2, nextState);
            listeners.forEach((listener) => listener(state2, previousState));
          }
        }, "setState");
        var getState = /* @__PURE__ */ __name(() => state2, "getState");
        var getInitialState = /* @__PURE__ */ __name(() => initialState, "getInitialState");
        var subscribe = /* @__PURE__ */ __name((listener) => {
          listeners.add(listener);
          return () => listeners.delete(listener);
        }, "subscribe");
        var api = {
          setState,
          getState,
          getInitialState,
          subscribe
        };
        var initialState = state2 = createState(setState, getState, api);
        return api;
      }, "createStoreImpl");
      createStore = /* @__PURE__ */ __name((createState) => createState ? createStoreImpl(createState) : createStoreImpl, "createStore");
    }
  });

  // src/metro/filters.ts
  var filters_exports = {};
  __export(filters_exports, {
    createModuleFilter: () => createModuleFilter,
    defaultResolvers: () => defaultResolvers,
    withInteropOptions: () => withInteropOptions
  });
  function createModuleFilter({ filter, stringify, getResolvers = /* @__PURE__ */ __name(() => defaultResolvers, "getResolvers") }) {
    var factory = Object.assign((arg, options = {}) => {
      var resolvers = getResolvers(arg, options);
      return {
        key: stringify(arg, options),
        resolvers,
        factory: moduleFilter,
        check: /* @__PURE__ */ __name((id, exports) => {
          return !!filter([
            arg,
            exports,
            moduleRegistry.get(id)
          ], options);
        }, "check")
      };
    }, {
      stringify,
      getResolvers
    });
    var moduleFilter = factory;
    return moduleFilter;
  }
  function withInteropOptions(props) {
    return {
      filter: /* @__PURE__ */ __name((arg, options) => {
        var { checkEsmDefault, returnEsmDefault = true } = options;
        if (checkEsmDefault !== false && returnEsmDefault === false && arg[1]?.__esModule && arg[1].default) {
          var res = props.filter([
            arg[0],
            arg[2].module?.exports?.default,
            arg[2]
          ], options);
          if (res || checkEsmDefault === true) return res;
        }
        return props.filter(arg, options);
      }, "filter"),
      stringify: /* @__PURE__ */ __name((arg, options) => {
        var VERSION = 1;
        var boolToNum = /* @__PURE__ */ __name((bool) => bool ? 2 : bool === false ? 1 : 0, "boolToNum");
        return `${props.stringify(arg, options)}::interop:${VERSION}:${boolToNum(options.checkEsmDefault)}:${boolToNum(options.returnEsmDefault)}`;
      }, "stringify"),
      getResolvers: /* @__PURE__ */ __name((arg, options) => {
        var { checkEsmDefault, returnEsmDefault = true } = options;
        if (checkEsmDefault === false || returnEsmDefault === false) {
          return [
            (exp) => exp
          ];
        }
        if (checkEsmDefault === true) {
          return [
            (exp) => exp.__esModule && exp.default
          ];
        }
        return props.getResolvers?.(arg, options) ?? defaultResolvers;
      }, "getResolvers")
    };
  }
  var defaultResolvers;
  var init_filters = __esm({
    "src/metro/filters.ts"() {
      "use strict";
      init_registry();
      defaultResolvers = [
        (exp) => exp?.__esModule && exp.default,
        (exp) => exp
      ];
      __name(createModuleFilter, "createModuleFilter");
      __name(withInteropOptions, "withInteropOptions");
    }
  });

  // src/metro/common/filters.ts
  var filters_exports2 = {};
  __export(filters_exports2, {
    byFilePath: () => byFilePath,
    byName: () => byName,
    byProps: () => byProps,
    bySingularProp: () => bySingularProp
  });
  var byProps, byName, byFilePath, bySingularProp;
  var init_filters2 = __esm({
    "src/metro/common/filters.ts"() {
      "use strict";
      init_filters();
      byProps = createModuleFilter(withInteropOptions({
        filter: /* @__PURE__ */ __name(([props, m2]) => props.length === 1 ? m2[props[0]] : props.every((p2) => m2[p2]), "filter"),
        stringify: /* @__PURE__ */ __name((arg) => `byProps([${arg.join(",")}])`, "stringify")
      }));
      byName = createModuleFilter(withInteropOptions({
        filter: /* @__PURE__ */ __name(([name, m2]) => typeof m2 === "function" && m2.name === name, "filter"),
        stringify: /* @__PURE__ */ __name((arg) => `byName(${arg})`, "stringify")
      }));
      byFilePath = createModuleFilter(withInteropOptions({
        filter: /* @__PURE__ */ __name(([path, _, state2]) => state2.meta.filePath === path, "filter"),
        stringify: /* @__PURE__ */ __name((arg) => `byFilePath(${arg})`, "stringify")
      }));
      bySingularProp = createModuleFilter(withInteropOptions({
        filter: /* @__PURE__ */ __name(([prop, m2]) => m2[prop] && Object.keys(m2).length === 1, "filter"),
        stringify: /* @__PURE__ */ __name((arg) => `bySingularProp(${arg})`, "stringify")
      }));
    }
  });

  // src/native/index.ts
  var native_exports = {};
  __export(native_exports, {
    BundleUpdaterModule: () => BundleUpdaterModule,
    NativeCacheModule: () => NativeCacheModule,
    NativeClientInfoModule: () => NativeClientInfoModule,
    NativeDeviceModule: () => NativeDeviceModule,
    NativeFileModule: () => NativeFileModule,
    ThemeModule: () => ThemeModule
  });
  function getNativeModule(...names) {
    var moduleProxy = window.nativeModuleProxy;
    var module3 = names.find((name) => moduleProxy[name] !== null);
    return moduleProxy[module3];
  }
  var NativeCacheModule, NativeFileModule, NativeClientInfoModule, NativeDeviceModule, BundleUpdaterModule, ThemeModule;
  var init_native = __esm({
    "src/native/index.ts"() {
      "use strict";
      __name(getNativeModule, "getNativeModule");
      NativeCacheModule = getNativeModule("NativeCacheModule");
      NativeFileModule = getNativeModule("NativeFileModule");
      NativeClientInfoModule = getNativeModule("NativeClientInfoModule");
      NativeDeviceModule = getNativeModule("NativeDeviceModule");
      BundleUpdaterModule = getNativeModule("BundleUpdaterManager");
      ThemeModule = getNativeModule("NativeThemeModule");
    }
  });

  // src/loader/index.ts
  var loader_exports = {};
  __export(loader_exports, {
    callFunction: () => callFunction,
    getModule: () => getModule,
    isFunctionRegistered: () => isFunctionRegistered,
    isModuleRegistered: () => isModuleRegistered,
    isSafeModeEnabled: () => isSafeModeEnabled,
    loaderPayload: () => loaderPayload
  });
  function isModuleRegistered(module3) {
    return loaderPayload.loader.modules[module3] !== void 0;
  }
  function isFunctionRegistered(module3, function_) {
    return loaderPayload.loader.modules[module3]?.functions[function_] !== void 0;
  }
  function callFunction(module3, functionName, args) {
    return _callFunction.apply(this, arguments);
  }
  function _callFunction() {
    _callFunction = _async_to_generator(function* (module3, functionName, args) {
      if (!isFunctionRegistered(module3, functionName)) {
        throw new Error(`Function ${module3}.${functionName} is not registered`);
      }
      var { queryCache } = window.nativeModuleProxy.ImageLoader;
      var promise = queryCache([
        "__wintry_bridge",
        JSON.stringify({
          m: module3,
          f: functionName,
          a: args
        })
      ]);
      var result = yield promise;
      if ("ret" in result) {
        return JSON.parse(result.ret);
      }
      if ("cancelled" in result) {
        throw new Error(`Function ${module3}.${functionName} was cancelled: ${result.reason}`);
      }
      if ("err" in result) {
        throw new Error(result.err);
      }
    });
    return _callFunction.apply(this, arguments);
  }
  function getModule({ name, argumentProcessors: processArgs }) {
    var _loop = /* @__PURE__ */ __name(function(functionName2) {
      baseObject[functionName2] = (...args) => callFunction(
        name,
        functionName2,
        // @ts-expect-error
        processArgs && functionName2 in processArgs ? processArgs[functionName2](args) : args
      );
    }, "_loop");
    var module3 = loaderPayload.loader.modules[name];
    if (!module3) {
      throw new Error(`Module ${name} is not registered`);
    }
    var baseObject = {
      hasFunction: /* @__PURE__ */ __name((functionName2) => isFunctionRegistered(name, functionName2), "hasFunction"),
      callFunction: /* @__PURE__ */ __name((functionName2, args) => callFunction(name, functionName2, args), "callFunction")
    };
    for (var [functionName] of Object.entries(module3.functions)) _loop(functionName);
    return baseObject;
  }
  function isSafeModeEnabled() {
    return Boolean(loaderPayload.loader.initConfig.safeMode);
  }
  var loaderPayload;
  var init_loader = __esm({
    "src/loader/index.ts"() {
      "use strict";
      init_async_to_generator();
      loaderPayload = window.__WINTRY_LOADER__;
      __name(isModuleRegistered, "isModuleRegistered");
      __name(isFunctionRegistered, "isFunctionRegistered");
      __name(callFunction, "callFunction");
      __name(_callFunction, "_callFunction");
      __name(getModule, "getModule");
      __name(isSafeModeEnabled, "isSafeModeEnabled");
    }
  });

  // src/api/fs.ts
  var fs_exports = {};
  __export(fs_exports, {
    clearFolder: () => clearFolder,
    downloadFile: () => downloadFile,
    fileExists: () => fileExists,
    readFile: () => readFile,
    removeFile: () => removeFile,
    writeFile: () => writeFile
  });
  function getFullPath(path) {
    return `${loaderPayload.loader.constants.WINTRY_DIR}/${path}`;
  }
  function clearFolder(path) {
    return _clearFolder.apply(this, arguments);
  }
  function _clearFolder() {
    _clearFolder = _async_to_generator(function* (path) {
      yield NativeFileModule.clearFolder(BASE_DIR, path);
    });
    return _clearFolder.apply(this, arguments);
  }
  function removeFile(path) {
    return _removeFile.apply(this, arguments);
  }
  function _removeFile() {
    _removeFile = _async_to_generator(function* (path) {
      yield NativeFileModule.removeFile(BASE_DIR, path);
    });
    return _removeFile.apply(this, arguments);
  }
  function fileExists(path) {
    return _fileExists.apply(this, arguments);
  }
  function _fileExists() {
    _fileExists = _async_to_generator(function* (path) {
      return yield NativeFileModule.fileExists(getFullPath(path));
    });
    return _fileExists.apply(this, arguments);
  }
  function writeFile(path, data) {
    return _writeFile.apply(this, arguments);
  }
  function _writeFile() {
    _writeFile = _async_to_generator(function* (path, data) {
      if (typeof data !== "string") {
        throw new TypeError("Argument 'data' must be a string");
      }
      yield NativeFileModule.writeFile(BASE_DIR, path, data, ENCODING);
    });
    return _writeFile.apply(this, arguments);
  }
  function readFile(path) {
    return _readFile.apply(this, arguments);
  }
  function _readFile() {
    _readFile = _async_to_generator(function* (path) {
      try {
        return yield NativeFileModule.readFile(getFullPath(path), ENCODING);
      } catch (err) {
        throw new Error(`Failed to read file '${path}'`, {
          cause: err
        });
      }
    });
    return _readFile.apply(this, arguments);
  }
  function downloadFile(url, path) {
    return _downloadFile.apply(this, arguments);
  }
  function _downloadFile() {
    _downloadFile = _async_to_generator(function* (url, path) {
      var response = yield fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to download file from ${url}: ${response.statusText}`);
      }
      var arrayBuffer = yield response.arrayBuffer();
      var data = Buffer.from(arrayBuffer).toString("base64");
      yield NativeFileModule.writeFile(BASE_DIR, path, data, "base64");
    });
    return _downloadFile.apply(this, arguments);
  }
  var BASE_DIR, ENCODING;
  var init_fs = __esm({
    "src/api/fs.ts"() {
      "use strict";
      init_async_to_generator();
      init_native();
      init_loader();
      BASE_DIR = "wintry";
      ENCODING = "utf8";
      __name(getFullPath, "getFullPath");
      __name(clearFolder, "clearFolder");
      __name(_clearFolder, "_clearFolder");
      __name(removeFile, "removeFile");
      __name(_removeFile, "_removeFile");
      __name(fileExists, "fileExists");
      __name(_fileExists, "_fileExists");
      __name(writeFile, "writeFile");
      __name(_writeFile, "_writeFile");
      __name(readFile, "readFile");
      __name(_readFile, "_readFile");
      __name(downloadFile, "downloadFile");
      __name(_downloadFile, "_downloadFile");
    }
  });

  // src/loader/kvStorage.ts
  var kvStorage_exports = {};
  __export(kvStorage_exports, {
    kvStorage: () => kvStorage
  });
  function getItem(key) {
    return state[key] ?? null;
  }
  function setItem(key, value) {
    if (value == null) {
      delete state[key];
    } else {
      state[key] = value;
    }
    saveState();
  }
  function removeItem(key) {
    delete state[key];
    saveState();
  }
  var state, KV_FOLDER, KV_PREFIX, key, saveState, kvStorage;
  var init_kvStorage = __esm({
    "src/loader/kvStorage.ts"() {
      "use strict";
      init_dist();
      init_fs();
      state = window.s = {};
      KV_FOLDER = "kv";
      KV_PREFIX = "__wt_kv/";
      for (key in window) {
        if (key.startsWith(KV_PREFIX)) {
          state[key.slice(KV_PREFIX.length)] = window[key];
          delete window[key];
        }
      }
      saveState = debounce(() => {
        for (var key in state) {
          writeFile(`${KV_FOLDER}/${key}`, state[key]);
        }
      }, 500);
      __name(getItem, "getItem");
      __name(setItem, "setItem");
      __name(removeItem, "removeItem");
      kvStorage = {
        getItem,
        setItem,
        removeItem
      };
    }
  });

  // src/metro/internal/enums.ts
  var enums_exports = {};
  __export(enums_exports, {
    ModuleFlags: () => ModuleFlags,
    ModulesMapInternal: () => ModulesMapInternal
  });
  var ModuleFlags, ModulesMapInternal;
  var init_enums = __esm({
    "src/metro/internal/enums.ts"() {
      "use strict";
      ModuleFlags = /* @__PURE__ */ function(ModuleFlags2) {
        ModuleFlags2[ModuleFlags2["EXISTS"] = 1] = "EXISTS";
        ModuleFlags2[ModuleFlags2["BLACKLISTED"] = 2] = "BLACKLISTED";
        return ModuleFlags2;
      }({});
      ModulesMapInternal = /* @__PURE__ */ function(ModulesMapInternal2) {
        ModulesMapInternal2[ModulesMapInternal2["FULL_LOOKUP"] = 0] = "FULL_LOOKUP";
        ModulesMapInternal2[ModulesMapInternal2["NOT_FOUND"] = 1] = "NOT_FOUND";
        return ModulesMapInternal2;
      }({});
    }
  });

  // src/metro/internal/modules.ts
  var modules_exports = {};
  __export(modules_exports, {
    isBadModuleExports: () => isBadModuleExports,
    waitFor: () => waitFor
  });
  function isBadModuleExports(exports) {
    var RANDOM_STRING = "insert the funny here? :fuyusquish:";
    return exports == null || exports === globalThis || exports.__proto__ === Object.prototype && Reflect.ownKeys(exports).length === 0 || // Empty object, implies no exports
    // Blacklist evil proxies which always return non-undefined. For example, IntlMessagesProxy or NativeModules.
    exports[RANDOM_STRING] !== void 0 || exports.default?.[RANDOM_STRING] !== void 0;
  }
  function waitFor(filter, callback, { count = 1 } = {}) {
    var currentCount = 0;
    var onAbort = [];
    var cleanup = /* @__PURE__ */ __name(() => {
      for (var handler of onAbort) handler();
      cleanup = null;
    }, "cleanup");
    var cachedModuleIds = getAllCachedModuleIds(filter.key);
    var cacheHandler = createCacheHandler(filter.key, false);
    function checkState(state3) {
      if (!cleanup) return true;
      var exports = state3.module.exports;
      if (isBadModuleExports(exports) || isModuleBlacklisted(state3.id)) {
        return false;
      }
      var result = testExports(state3.id, exports, filter);
      if (!result) return false;
      cacheHandler.cacheId(state3.id, result);
      callback(result, state3);
      if (++currentCount === count) {
        cleanup();
        return true;
      }
      return false;
    }
    __name(checkState, "checkState");
    if (cachedModuleIds && cachedModuleIds.length >= count) {
      var _loop = /* @__PURE__ */ __name(function(id2) {
        var state3 = moduleRegistry.get(id2);
        if (!state3) return "continue";
        if (state3.module?.exports) {
          if (checkState(state3)) return {
            v: cleanup
          };
        } else {
          var cb = /* @__PURE__ */ __name(() => checkState(state3), "cb");
          modulesInitializationEvents.once(state3.id, cb);
          onAbort.push(() => modulesInitializationEvents.off(state3.id, cb));
        }
      }, "_loop");
      for (var id of cachedModuleIds) {
        var _ret = _loop(id);
        if (_type_of(_ret) === "object") return _ret.v;
      }
    } else if (cleanup) {
      for (var state2 of initializedModuleRegistry) {
        if (checkState(state2)) return cleanup;
      }
      var moduleLoadedHandler = /* @__PURE__ */ __name((state3) => checkState(state3), "moduleLoadedHandler");
      var lookupFoundHandler = /* @__PURE__ */ __name((key, state3) => filter.key === key ? checkState(state3) : false, "lookupFoundHandler");
      metroEvents.on("moduleLoaded", moduleLoadedHandler);
      metroEvents.on("lookupFound", lookupFoundHandler);
      onAbort.push(() => metroEvents.off("moduleLoaded", moduleLoadedHandler), () => metroEvents.off("lookupFound", lookupFoundHandler));
    }
    return cleanup;
  }
  var init_modules = __esm({
    "src/metro/internal/modules.ts"() {
      "use strict";
      init_type_of();
      init_caches();
      init_events();
      init_api();
      init_registry();
      __name(isBadModuleExports, "isBadModuleExports");
      __name(waitFor, "waitFor");
    }
  });

  // src/metro/index.ts
  var metro_exports = {};
  __export(metro_exports, {
    createModuleFilter: () => createModuleFilter,
    defaultResolvers: () => defaultResolvers,
    findIdAndResolved: () => findIdAndResolved,
    logger: () => logger,
    lookup: () => lookup,
    testExports: () => testExports,
    withInteropOptions: () => withInteropOptions
  });
  var logger;
  var init_metro = __esm({
    "src/metro/index.ts"() {
      "use strict";
      init_logger();
      init_filters();
      init_api();
      logger = wtlogger.createChild("Metro");
    }
  });

  // src/metro/internal/caches.ts
  var caches_exports = {};
  __export(caches_exports, {
    MetroCache: () => MetroCache,
    createCacheHandler: () => createCacheHandler,
    getAllCachedModuleIds: () => getAllCachedModuleIds,
    isModuleBlacklisted: () => isModuleBlacklisted,
    iterateModulesForCache: () => iterateModulesForCache,
    markExportsFlags: () => markExportsFlags,
    onceCacheReady: () => onceCacheReady
  });
  function setupMetroCache() {
    var serialized;
    try {
      serialized = JSON.parse(kvStorage.getItem(WINTRY_METRO_CACHE_KEY));
      if (serialized.v.cache !== CACHE_VERSION || serialized.v.bundle !== NativeClientInfoModule.Build) {
        throw "Cache version mismatch";
      }
    } catch (error) {
      logger.info("Metro cache invalidated/not exist, creating a new one");
      serialized = {
        v: {
          cache: CACHE_VERSION,
          bundle: NativeClientInfoModule.Build
        },
        moduleFlags: {},
        lookupIndex: {}
      };
    }
    var cache = {
      version: serialized.v.cache,
      moduleFlags: new Map(Object.entries(serialized.moduleFlags).map(([k, v]) => [
        Number(k),
        v
      ])),
      lookupIndex: new Map(Object.entries(serialized.lookupIndex).map(([k, v]) => {
        var map = /* @__PURE__ */ new Map();
        map.fullLookup = v?._[ModulesMapInternal.FULL_LOOKUP] === 1;
        map.notFound = v?._[ModulesMapInternal.NOT_FOUND] === 1;
        for (var strId in v) {
          if (strId === "_") continue;
          map.set(Number(strId), v[strId]);
        }
        return [
          k,
          map
        ];
      })),
      save: debounce(() => {
        kvStorage.setItem(WINTRY_METRO_CACHE_KEY, JSON.stringify({
          v: {
            cache: CACHE_VERSION,
            bundle: NativeClientInfoModule.Build
          },
          moduleFlags: Object.fromEntries(cache.moduleFlags),
          lookupIndex: Object.fromEntries([
            ...cache.lookupIndex
          ].map(([k, v]) => {
            var serializedMap = {
              _: [
                v?.fullLookup ? 1 : 0,
                v?.notFound ? 1 : 0
              ]
            };
            for (var [id, flags] of v) {
              serializedMap[id] = flags;
            }
            return [
              k,
              serializedMap
            ];
          }))
        }));
      }, 500),
      invalidate() {
        kvStorage.removeItem(WINTRY_METRO_CACHE_KEY);
        Object.assign(cache, setupMetroCache());
        cache.save();
      }
    };
    logger.info(`Loaded Metro cache with ${cache.moduleFlags.size} module flags and ${cache.lookupIndex.size} lookup indexes`);
    return cache;
  }
  function getModuleExportFlags(moduleExports) {
    var bit = ModuleFlags.EXISTS;
    if (isBadModuleExports(moduleExports)) bit |= ModuleFlags.BLACKLISTED;
    return bit;
  }
  function markExportsFlags(moduleId, moduleExports) {
    var flags = getModuleExportFlags(moduleExports);
    if (flags !== ModuleFlags.EXISTS) {
      MetroCache.moduleFlags.set(moduleId, flags);
    }
  }
  function isModuleBlacklisted(moduleId) {
    return (MetroCache.moduleFlags.get(moduleId) & ModuleFlags.BLACKLISTED) !== 0;
  }
  function createCacheHandler(key, allFind) {
    var indexObject = MetroCache.lookupIndex.get(key);
    if (!indexObject) {
      indexObject = /* @__PURE__ */ new Map();
      MetroCache.lookupIndex.set(key, indexObject);
    }
    return {
      cacheId(moduleId, exports) {
        if (!indexObject.has(moduleId)) indexObject.set(moduleId, getModuleExportFlags(exports));
        MetroCache.save();
      },
      // Finish may not be called by single/numbered find
      finish(notFound) {
        if (allFind) indexObject.fullLookup = true;
        if (notFound) indexObject.notFound = true;
        MetroCache.save();
      }
    };
  }
  function* iterateModulesForCache(key, fullLookup) {
    var cache = MetroCache.lookupIndex.get(key);
    if (fullLookup && !cache?.fullLookup) cache = void 0;
    if (cache?.notFound) return;
    if (cache) {
      for (var id of cache.keys()) {
        var exports = window.__r(id);
        if (isBadModuleExports(exports)) continue;
        yield [
          id,
          exports
        ];
      }
    }
    for (var id1 of moduleRegistry.keys()) {
      var exports1 = void 0;
      try {
        if (isModuleBlacklisted(id1) || cache?.has(id1)) continue;
        exports1 = window.__r(id1);
      } catch (e3) {
      }
      if (isBadModuleExports(exports1)) continue;
      yield [
        id1,
        exports1
      ];
    }
  }
  function getAllCachedModuleIds(id) {
    var modulesMap = MetroCache.lookupIndex.get(id);
    if (!modulesMap) return void 0;
    return [
      ...modulesMap.keys()
    ];
  }
  function onceCacheReady(callback) {
    callback(MetroCache);
  }
  var CACHE_VERSION, WINTRY_METRO_CACHE_KEY, MetroCache;
  var init_caches = __esm({
    "src/metro/internal/caches.ts"() {
      "use strict";
      init_kvStorage();
      init_native();
      init_enums();
      init_modules();
      init_registry();
      init_dist();
      init_metro();
      CACHE_VERSION = 1;
      WINTRY_METRO_CACHE_KEY = "__wintry_metro_cache_key__";
      MetroCache = setupMetroCache();
      __name(setupMetroCache, "setupMetroCache");
      __name(getModuleExportFlags, "getModuleExportFlags");
      __name(markExportsFlags, "markExportsFlags");
      __name(isModuleBlacklisted, "isModuleBlacklisted");
      __name(createCacheHandler, "createCacheHandler");
      __name(iterateModulesForCache, "iterateModulesForCache");
      __name(getAllCachedModuleIds, "getAllCachedModuleIds");
      __name(onceCacheReady, "onceCacheReady");
    }
  });

  // node_modules/synchronous-promise/index.js
  var require_synchronous_promise = __commonJS({
    "node_modules/synchronous-promise/index.js"(exports, module3) {
      "use strict";
      function makeArrayFrom(obj) {
        return Array.prototype.slice.apply(obj);
      }
      __name(makeArrayFrom, "makeArrayFrom");
      var PENDING = "pending";
      var RESOLVED = "resolved";
      var REJECTED = "rejected";
      function SynchronousPromise2(handler) {
        this.status = PENDING;
        this._continuations = [];
        this._parent = null;
        this._paused = false;
        if (handler) {
          handler.call(this, this._continueWith.bind(this), this._failWith.bind(this));
        }
      }
      __name(SynchronousPromise2, "SynchronousPromise");
      function looksLikeAPromise(obj) {
        return obj && typeof obj.then === "function";
      }
      __name(looksLikeAPromise, "looksLikeAPromise");
      function passThrough(value) {
        return value;
      }
      __name(passThrough, "passThrough");
      SynchronousPromise2.prototype = {
        then: /* @__PURE__ */ __name(function then(nextFn, catchFn) {
          var next = SynchronousPromise2.unresolved()._setParent(this);
          if (this._isRejected()) {
            if (this._paused) {
              this._continuations.push({
                promise: next,
                nextFn,
                catchFn
              });
              return next;
            }
            if (catchFn) {
              try {
                var catchResult = catchFn(this._error);
                if (looksLikeAPromise(catchResult)) {
                  this._chainPromiseData(catchResult, next);
                  return next;
                } else {
                  return SynchronousPromise2.resolve(catchResult)._setParent(this);
                }
              } catch (e3) {
                return SynchronousPromise2.reject(e3)._setParent(this);
              }
            }
            return SynchronousPromise2.reject(this._error)._setParent(this);
          }
          this._continuations.push({
            promise: next,
            nextFn,
            catchFn
          });
          this._runResolutions();
          return next;
        }, "then"),
        catch: /* @__PURE__ */ __name(function _catch(handler) {
          if (this._isResolved()) {
            return SynchronousPromise2.resolve(this._data)._setParent(this);
          }
          var next = SynchronousPromise2.unresolved()._setParent(this);
          this._continuations.push({
            promise: next,
            catchFn: handler
          });
          this._runRejections();
          return next;
        }, "_catch"),
        finally: /* @__PURE__ */ __name(function _finally(callback) {
          var ran = false;
          function runFinally(result, err) {
            if (!ran) {
              ran = true;
              if (!callback) {
                callback = passThrough;
              }
              var callbackResult = callback(result);
              if (looksLikeAPromise(callbackResult)) {
                return callbackResult.then(function() {
                  if (err) {
                    throw err;
                  }
                  return result;
                });
              } else {
                return result;
              }
            }
          }
          __name(runFinally, "runFinally");
          return this.then(function(result) {
            return runFinally(result);
          }).catch(function(err) {
            return runFinally(null, err);
          });
        }, "_finally"),
        pause: /* @__PURE__ */ __name(function pause() {
          this._paused = true;
          return this;
        }, "pause"),
        resume: /* @__PURE__ */ __name(function resume() {
          var firstPaused = this._findFirstPaused();
          if (firstPaused) {
            firstPaused._paused = false;
            firstPaused._runResolutions();
            firstPaused._runRejections();
          }
          return this;
        }, "resume"),
        _findAncestry: /* @__PURE__ */ __name(function _findAncestry() {
          return this._continuations.reduce(function(acc, cur) {
            if (cur.promise) {
              var node = {
                promise: cur.promise,
                children: cur.promise._findAncestry()
              };
              acc.push(node);
            }
            return acc;
          }, []);
        }, "_findAncestry"),
        _setParent: /* @__PURE__ */ __name(function _setParent(parent) {
          if (this._parent) {
            throw new Error("parent already set");
          }
          this._parent = parent;
          return this;
        }, "_setParent"),
        _continueWith: /* @__PURE__ */ __name(function _continueWith(data) {
          var firstPending = this._findFirstPending();
          if (firstPending) {
            firstPending._data = data;
            firstPending._setResolved();
          }
        }, "_continueWith"),
        _findFirstPending: /* @__PURE__ */ __name(function _findFirstPending() {
          return this._findFirstAncestor(function(test) {
            return test._isPending && test._isPending();
          });
        }, "_findFirstPending"),
        _findFirstPaused: /* @__PURE__ */ __name(function _findFirstPaused() {
          return this._findFirstAncestor(function(test) {
            return test._paused;
          });
        }, "_findFirstPaused"),
        _findFirstAncestor: /* @__PURE__ */ __name(function _findFirstAncestor(matching) {
          var test = this;
          var result;
          while (test) {
            if (matching(test)) {
              result = test;
            }
            test = test._parent;
          }
          return result;
        }, "_findFirstAncestor"),
        _failWith: /* @__PURE__ */ __name(function _failWith(error) {
          var firstRejected = this._findFirstPending();
          if (firstRejected) {
            firstRejected._error = error;
            firstRejected._setRejected();
          }
        }, "_failWith"),
        _takeContinuations: /* @__PURE__ */ __name(function _takeContinuations() {
          return this._continuations.splice(0, this._continuations.length);
        }, "_takeContinuations"),
        _runRejections: /* @__PURE__ */ __name(function _runRejections() {
          if (this._paused || !this._isRejected()) {
            return;
          }
          var error = this._error, continuations = this._takeContinuations(), self = this;
          continuations.forEach(function(cont) {
            if (cont.catchFn) {
              try {
                var catchResult = cont.catchFn(error);
                self._handleUserFunctionResult(catchResult, cont.promise);
              } catch (e3) {
                cont.promise.reject(e3);
              }
            } else {
              cont.promise.reject(error);
            }
          });
        }, "_runRejections"),
        _runResolutions: /* @__PURE__ */ __name(function _runResolutions() {
          if (this._paused || !this._isResolved() || this._isPending()) {
            return;
          }
          var continuations = this._takeContinuations();
          var data = this._data;
          var self = this;
          continuations.forEach(function(cont) {
            if (cont.nextFn) {
              try {
                var result = cont.nextFn(data);
                self._handleUserFunctionResult(result, cont.promise);
              } catch (e3) {
                self._handleResolutionError(e3, cont);
              }
            } else if (cont.promise) {
              cont.promise.resolve(data);
            }
          });
          if (looksLikeAPromise(this._data)) {
            return this._handleWhenResolvedDataIsPromise(this._data);
          }
        }, "_runResolutions"),
        _handleResolutionError: /* @__PURE__ */ __name(function _handleResolutionError(e3, continuation) {
          this._setRejected();
          if (continuation.catchFn) {
            try {
              continuation.catchFn(e3);
              return;
            } catch (e22) {
              e3 = e22;
            }
          }
          if (continuation.promise) {
            continuation.promise.reject(e3);
          }
        }, "_handleResolutionError"),
        _handleWhenResolvedDataIsPromise: /* @__PURE__ */ __name(function _handleWhenResolvedDataIsPromise(data) {
          var self = this;
          return data.then(function(result) {
            self._data = result;
            self._runResolutions();
          }).catch(function(error) {
            self._error = error;
            self._setRejected();
            self._runRejections();
          });
        }, "_handleWhenResolvedDataIsPromise"),
        _handleUserFunctionResult: /* @__PURE__ */ __name(function _handleUserFunctionResult(data, nextSynchronousPromise) {
          if (looksLikeAPromise(data)) {
            this._chainPromiseData(data, nextSynchronousPromise);
          } else {
            nextSynchronousPromise.resolve(data);
          }
        }, "_handleUserFunctionResult"),
        _chainPromiseData: /* @__PURE__ */ __name(function _chainPromiseData(promiseData, nextSynchronousPromise) {
          promiseData.then(function(newData) {
            nextSynchronousPromise.resolve(newData);
          }).catch(function(newError) {
            nextSynchronousPromise.reject(newError);
          });
        }, "_chainPromiseData"),
        _setResolved: /* @__PURE__ */ __name(function _setResolved() {
          this.status = RESOLVED;
          if (!this._paused) {
            this._runResolutions();
          }
        }, "_setResolved"),
        _setRejected: /* @__PURE__ */ __name(function _setRejected() {
          this.status = REJECTED;
          if (!this._paused) {
            this._runRejections();
          }
        }, "_setRejected"),
        _isPending: /* @__PURE__ */ __name(function _isPending() {
          return this.status === PENDING;
        }, "_isPending"),
        _isResolved: /* @__PURE__ */ __name(function _isResolved() {
          return this.status === RESOLVED;
        }, "_isResolved"),
        _isRejected: /* @__PURE__ */ __name(function _isRejected() {
          return this.status === REJECTED;
        }, "_isRejected")
      };
      SynchronousPromise2.resolve = function(result) {
        return new SynchronousPromise2(function(resolve, reject) {
          if (looksLikeAPromise(result)) {
            result.then(function(newResult) {
              resolve(newResult);
            }).catch(function(error) {
              reject(error);
            });
          } else {
            resolve(result);
          }
        });
      };
      SynchronousPromise2.reject = function(result) {
        return new SynchronousPromise2(function(resolve, reject) {
          reject(result);
        });
      };
      SynchronousPromise2.unresolved = function() {
        return new SynchronousPromise2(function(resolve, reject) {
          this.resolve = resolve;
          this.reject = reject;
        });
      };
      SynchronousPromise2.all = function() {
        var args = makeArrayFrom(arguments);
        if (Array.isArray(args[0])) {
          args = args[0];
        }
        if (!args.length) {
          return SynchronousPromise2.resolve([]);
        }
        return new SynchronousPromise2(function(resolve, reject) {
          var allData = [], numResolved = 0, doResolve = /* @__PURE__ */ __name(function doResolve2() {
            if (numResolved === args.length) {
              resolve(allData);
            }
          }, "doResolve"), rejected = false, doReject = /* @__PURE__ */ __name(function doReject2(err) {
            if (rejected) {
              return;
            }
            rejected = true;
            reject(err);
          }, "doReject");
          args.forEach(function(arg, idx) {
            SynchronousPromise2.resolve(arg).then(function(thisResult) {
              allData[idx] = thisResult;
              numResolved += 1;
              doResolve();
            }).catch(function(err) {
              doReject(err);
            });
          });
        });
      };
      function createAggregateErrorFrom(errors2) {
        if (typeof window !== "undefined" && "AggregateError" in window) {
          return new window.AggregateError(errors2);
        }
        return {
          errors: errors2
        };
      }
      __name(createAggregateErrorFrom, "createAggregateErrorFrom");
      SynchronousPromise2.any = function() {
        var args = makeArrayFrom(arguments);
        if (Array.isArray(args[0])) {
          args = args[0];
        }
        if (!args.length) {
          return SynchronousPromise2.reject(createAggregateErrorFrom([]));
        }
        return new SynchronousPromise2(function(resolve, reject) {
          var allErrors = [], numRejected = 0, doReject = /* @__PURE__ */ __name(function doReject2() {
            if (numRejected === args.length) {
              reject(createAggregateErrorFrom(allErrors));
            }
          }, "doReject"), resolved = false, doResolve = /* @__PURE__ */ __name(function doResolve2(result) {
            if (resolved) {
              return;
            }
            resolved = true;
            resolve(result);
          }, "doResolve");
          args.forEach(function(arg, idx) {
            SynchronousPromise2.resolve(arg).then(function(thisResult) {
              doResolve(thisResult);
            }).catch(function(err) {
              allErrors[idx] = err;
              numRejected += 1;
              doReject();
            });
          });
        });
      };
      SynchronousPromise2.allSettled = function() {
        var args = makeArrayFrom(arguments);
        if (Array.isArray(args[0])) {
          args = args[0];
        }
        if (!args.length) {
          return SynchronousPromise2.resolve([]);
        }
        return new SynchronousPromise2(function(resolve) {
          var allData = [], numSettled = 0, doSettled = /* @__PURE__ */ __name(function doSettled2() {
            numSettled += 1;
            if (numSettled === args.length) {
              resolve(allData);
            }
          }, "doSettled");
          args.forEach(function(arg, idx) {
            SynchronousPromise2.resolve(arg).then(function(thisResult) {
              allData[idx] = {
                status: "fulfilled",
                value: thisResult
              };
              doSettled();
            }).catch(function(err) {
              allData[idx] = {
                status: "rejected",
                reason: err
              };
              doSettled();
            });
          });
        });
      };
      if (Promise === SynchronousPromise2) {
        throw new Error("Please use SynchronousPromise.installGlobally() to install globally");
      }
      var RealPromise = Promise;
      SynchronousPromise2.installGlobally = function(__awaiter) {
        if (Promise === SynchronousPromise2) {
          return __awaiter;
        }
        var result = patchAwaiterIfRequired(__awaiter);
        Promise = SynchronousPromise2;
        return result;
      };
      SynchronousPromise2.uninstallGlobally = function() {
        if (Promise === SynchronousPromise2) {
          Promise = RealPromise;
        }
      };
      function patchAwaiterIfRequired(__awaiter) {
        if (typeof __awaiter === "undefined" || __awaiter.__patched) {
          return __awaiter;
        }
        var originalAwaiter = __awaiter;
        __awaiter = /* @__PURE__ */ __name(function __awaiter2() {
          var _$Promise = RealPromise;
          originalAwaiter.apply(this, makeArrayFrom(arguments));
        }, "__awaiter");
        __awaiter.__patched = true;
        return __awaiter;
      }
      __name(patchAwaiterIfRequired, "patchAwaiterIfRequired");
      module3.exports = {
        SynchronousPromise: SynchronousPromise2
      };
    }
  });

  // src/patcher/hook.ts
  var hook_exports = {};
  __export(hook_exports, {
    default: () => hook_default
  });
  var hook_default;
  var init_hook = __esm({
    "src/patcher/hook.ts"() {
      "use strict";
      init_emptyModule();
      init_patcher();
      hook_default = /* @__PURE__ */ __name((patchedFunc, origFunc, funcArgs, ctx, isConstruct) => {
        var patch = patchedFunctions.get(patchedFunc);
        if (!patch) {
          return isConstruct ? Reflect.construct(origFunc, funcArgs, ctx) : origFunc.apply(ctx, funcArgs);
        }
        for (var hook of patch.b.values()) {
          var maybefuncArgs = hook.call(ctx, funcArgs);
          if (Array.isArray(maybefuncArgs)) funcArgs = maybefuncArgs;
        }
        var workingRetVal = [
          ...patch.i.values()
        ].reduce(
          (prev, current2) => (...args) => current2.call(ctx, args, prev),
          // This calls the original function
          (...args) => isConstruct ? Reflect.construct(origFunc, args, ctx) : origFunc.apply(ctx, args)
        )(...funcArgs);
        for (var hook1 of patch.a.values()) {
          workingRetVal = hook1.call(ctx, funcArgs, workingRetVal) ?? workingRetVal;
        }
        for (var cleanup of patch.c) cleanup();
        patch.c = [];
        return workingRetVal;
      }, "default");
    }
  });

  // src/patcher/patcher.ts
  var patcher_exports = {};
  __export(patcher_exports, {
    _patcherDelaySymbol: () => _patcherDelaySymbol,
    getPatchFunc: () => getPatchFunc,
    patchedFunctions: () => patchedFunctions,
    unpatch: () => unpatch
  });
  function getPatchFunc(patchType) {
    var patch = /* @__PURE__ */ __name((funcParent, funcName, callback, oneTime = false) => {
      var origFunc = funcParent[funcName];
      if (typeof origFunc !== "function") {
        throw new Error(`${String(funcName)} is not a function in ${funcParent.constructor.name}`);
      }
      var funcPatch = patchedFunctions.get(origFunc);
      if (!funcPatch) {
        funcPatch = {
          b: /* @__PURE__ */ new Map(),
          i: /* @__PURE__ */ new Map(),
          a: /* @__PURE__ */ new Map(),
          c: []
        };
        var replaceProxy = new Proxy(origFunc, {
          apply: /* @__PURE__ */ __name((_, ctx, args) => runHook(ctx, args, false), "apply"),
          construct: /* @__PURE__ */ __name((_, args) => runHook(origFunc, args, true), "construct"),
          get: /* @__PURE__ */ __name((target, prop, receiver) => prop === "toString" ? origFunc.toString.bind(origFunc) : Reflect.get(target, prop, receiver), "get")
        });
        var runHook = /* @__PURE__ */ __name((ctx, args, construct) => hook_default(replaceProxy, origFunc, args, ctx, construct), "runHook");
        patchedFunctions.set(replaceProxy, funcPatch);
        if (!Reflect.defineProperty(funcParent, funcName, {
          value: replaceProxy,
          configurable: true,
          writable: true
        })) {
          funcParent[funcName] = replaceProxy;
        }
      }
      var hookId = Symbol();
      var patchedFunc = funcParent[funcName];
      var unpatchThisPatch = /* @__PURE__ */ __name(() => unpatch(patchedFunc, hookId, patchType), "unpatchThisPatch");
      if (oneTime) funcPatch.c.push(unpatchThisPatch);
      funcPatch[patchType].set(hookId, callback);
      return unpatchThisPatch;
    }, "patch");
    var patchWithDelay = /* @__PURE__ */ __name((funcParent, funcName, callback, oneTime = false) => {
      if (_patcherDelaySymbol in funcParent) {
        var delayCallback = funcParent[_patcherDelaySymbol];
        var cancel = false;
        var unpatch2 = /* @__PURE__ */ __name(() => cancel = true, "unpatch");
        delayCallback((target) => {
          if (cancel) return;
          unpatch2 = patch(target, funcName, callback, oneTime);
        });
        return () => unpatch2();
      }
      return patch(funcParent, funcName, callback, oneTime);
    }, "patchWithDelay");
    var patchAsync = /* @__PURE__ */ __name((promiseOfParent, funcName, callback, oneTime = false) => {
      if (!promiseOfParent || !("then" in promiseOfParent)) throw new Error("target is not a then-able object");
      var cancel = false;
      var unpatch2 = /* @__PURE__ */ __name(() => cancel = true, "unpatch");
      promiseOfParent.then((target) => {
        if (cancel) return;
        unpatch2 = patch(target, funcName, callback, oneTime);
        return target;
      });
      return () => unpatch2();
    }, "patchAsync");
    return Object.assign(patchWithDelay, {
      pure: patch,
      async: patchAsync
    });
  }
  function unpatch(patchedFunction, hookId, type) {
    var patch = patchedFunctions.get(patchedFunction);
    if (!patch || !patch[type].delete(hookId)) return false;
    return true;
  }
  var _patcherDelaySymbol, patchedFunctions;
  var init_patcher = __esm({
    "src/patcher/patcher.ts"() {
      "use strict";
      init_emptyModule();
      init_hook();
      _patcherDelaySymbol = Symbol.for("wintry.patcher.delaysymbol");
      __name(getPatchFunc, "getPatchFunc");
      __name(unpatch, "unpatch");
      patchedFunctions = /* @__PURE__ */ new WeakMap();
    }
  });

  // src/metro/lazy.ts
  var lazy_exports2 = {};
  __export(lazy_exports2, {
    LazyModuleContext: () => LazyModuleContext
  });
  var _Symbol_toStringTag, LazyModuleContext;
  var init_lazy2 = __esm({
    "src/metro/lazy.ts"() {
      "use strict";
      init_class_call_check();
      init_create_class();
      init_define_property();
      init_modules();
      init_lazy();
      init_patcher();
      _Symbol_toStringTag = Symbol.toStringTag;
      LazyModuleContext = /* @__PURE__ */ function() {
        "use strict";
        function LazyModuleContext2(module3) {
          _class_call_check(this, LazyModuleContext2);
          _define_property(this, "_proxy", void 0);
          _define_property(this, "filter", void 0);
          _define_property(this, "module", void 0);
          this.module = module3;
          this.filter = module3?.filter;
        }
        __name(LazyModuleContext2, "LazyModuleContext");
        _create_class(LazyModuleContext2, [
          {
            key: "cache",
            get: /* @__PURE__ */ __name(function get() {
              return this.module._module;
            }, "get"),
            set: /* @__PURE__ */ __name(function set2(value) {
              this.module._lazyCallback?.(value);
              this.module._lazyCallback = void 0;
              this.module._module = value;
            }, "set")
          },
          {
            key: "wait",
            value: /* @__PURE__ */ __name(function wait(callback) {
              return waitFor(this.filter, (exp) => callback(exp));
            }, "wait")
          },
          {
            key: "proxy",
            value: /* @__PURE__ */ __name(function proxy() {
              if (this._proxy) {
                return this._proxy;
              }
              var proxy2 = lazyValue(() => this.load(), {
                exemptedEntries: {
                  ...true ? {
                    __LAZY_MODULE__: true
                  } : null,
                  [LazyModuleContext2.ProxySymbol]: this,
                  [_patcherDelaySymbol]: (cb) => this.wait(cb)
                }
              });
              LazyModuleContext2.ProxyMap.set(proxy2, this);
              this.wait((exp) => this.cache = exp);
              return this._proxy = proxy2;
            }, "proxy")
          },
          {
            key: "load",
            value: /* @__PURE__ */ __name(function load() {
              if (!this.cache) {
                var cache = this.cache = this.module.load();
                if (typeof cache === "function" || typeof cache === "object") {
                  LazyModuleContext2.ProxyMap.set(this.cache, this);
                }
              }
              return this.cache;
            }, "load")
          },
          {
            key: _Symbol_toStringTag,
            get: /* @__PURE__ */ __name(function get() {
              return "LazyModuleContext";
            }, "get")
          }
        ]);
        return LazyModuleContext2;
      }();
      _define_property(LazyModuleContext, "ProxySymbol", Symbol.for("wintry.metro.lazyContext"));
      _define_property(LazyModuleContext, "ProxyMap", /* @__PURE__ */ new WeakMap());
    }
  });

  // src/metro/module.ts
  var module_exports = {};
  __export(module_exports, {
    SingleMetroModule: () => SingleMetroModule
  });
  var import_synchronous_promise, SingleMetroModule;
  var init_module = __esm({
    "src/metro/module.ts"() {
      "use strict";
      init_class_call_check();
      init_create_class();
      init_define_property();
      import_synchronous_promise = __toESM(require_synchronous_promise(), 1);
      init_modules();
      init_lazy2();
      init_api();
      SingleMetroModule = /* @__PURE__ */ function() {
        "use strict";
        function SingleMetroModule2(filter) {
          _class_call_check(this, SingleMetroModule2);
          _define_property(this, "_id", void 0);
          _define_property(this, "_module", void 0);
          _define_property(this, "_lazy", void 0);
          _define_property(this, "_lazyCallback", void 0);
          _define_property(this, "filter", void 0);
          this.filter = filter;
        }
        __name(SingleMetroModule2, "SingleMetroModule");
        _create_class(SingleMetroModule2, [
          {
            key: "wait",
            value: /* @__PURE__ */ __name(function wait(callback) {
              return waitFor(this.filter, (exp) => callback(exp));
            }, "wait")
          },
          {
            key: "load",
            value: /* @__PURE__ */ __name(function load() {
              if (!this._module) {
                var ret = findIdAndResolved(this.filter);
                if (!ret) {
                  throw new Error(`Module ${this.filter.key} returned unexpected ${typeof this._module}`);
                }
                this._id = ret.id;
                this._module = ret.resolved;
              }
              return this._module;
            }, "load")
          },
          {
            key: "await",
            value: /* @__PURE__ */ __name(function _await() {
              return new import_synchronous_promise.SynchronousPromise((resolve) => {
                this.wait(resolve);
              });
            }, "_await")
          },
          {
            key: "asLazy",
            value: /* @__PURE__ */ __name(function asLazy(cb) {
              if (cb) this._lazyCallback = cb;
              this._lazy ??= new LazyModuleContext(this);
              return this._lazy.proxy();
            }, "asLazy")
          }
        ]);
        return SingleMetroModule2;
      }();
    }
  });

  // src/metro/api.ts
  var api_exports = {};
  __export(api_exports, {
    findIdAndResolved: () => findIdAndResolved,
    lookup: () => lookup,
    testExports: () => testExports
  });
  function testExports(moduleId, moduleExports, filter) {
    for (var resolve of filter.resolvers) {
      var resolved = resolve(moduleExports);
      if (!resolved) continue;
      if (filter.check(moduleId, resolved)) {
        return resolved;
      }
    }
  }
  function* _iterateModule(filter, fullLookup) {
    var { cacheId, finish } = createCacheHandler(filter.key, fullLookup);
    for (var [id, moduleExports] of iterateModulesForCache(filter.key, fullLookup)) {
      var resolved = testExports(id, moduleExports, filter);
      if (resolved !== void 0) {
        cacheId(id, resolved);
        metroEvents.emit("lookupFound", filter.key, moduleRegistry.get(id));
        yield {
          id,
          resolved
        };
      }
    }
    finish(true);
    return void 0;
  }
  function _findModule(filter) {
    return _iterateModule(filter, false).next().value;
  }
  function findIdAndResolved(filter) {
    return _findModule(filter);
  }
  function lookup(filter) {
    return new SingleMetroModule(filter);
  }
  var init_api = __esm({
    "src/metro/api.ts"() {
      "use strict";
      init_caches();
      init_events();
      init_registry();
      init_module();
      __name(testExports, "testExports");
      __name(_iterateModule, "_iterateModule");
      __name(_findModule, "_findModule");
      __name(findIdAndResolved, "findIdAndResolved");
      __name(lookup, "lookup");
    }
  });

  // shims/depsModule.ts
  var depsModule_exports = {};
  __export(depsModule_exports, {
    default: () => depsModule_default
  });
  var React, ReactNative, Reanimated, GestureHandler, FlashList, depsModule_default;
  var init_depsModule = __esm({
    "shims/depsModule.ts"() {
      "use strict";
      init_filters2();
      init_api();
      init_lazy();
      React = lookup(byProps([
        "createElement"
      ])).asLazy((r4) => React = r4);
      ReactNative = lookup(byProps([
        "AppRegistry"
      ])).asLazy((r4) => ReactNative = r4);
      Reanimated = lookup(byProps([
        "useSharedValue",
        "useAnimatedStyle",
        "FadeInUp"
      ])).asLazy((r4) => Reanimated = r4);
      GestureHandler = lookup(byProps([
        "gestureHandlerRootHOC"
      ])).asLazy((r4) => GestureHandler = r4);
      FlashList = lookup(byProps([
        "FlashList"
      ])).asLazy((r4) => FlashList = r4);
      depsModule_default = {
        "react": createLazyImportProxy(() => React),
        "react-native": createLazyImportProxy(() => ReactNative),
        "react-native-reanimated": createLazyImportProxy(() => Reanimated),
        "react-native-gesture-handler": createLazyImportProxy(() => GestureHandler),
        "@shopify/flash-list": createLazyImportProxy(() => FlashList)
      };
    }
  });

  // globals:react
  var require_react = __commonJS({
    "globals:react"(exports, module3) {
      module3.exports = (init_depsModule(), __toCommonJS(depsModule_exports)).default["react"];
    }
  });

  // node_modules/zustand/esm/react.mjs
  function useStore(api, selector = identity) {
    var slice = import_react.default.useSyncExternalStore(api.subscribe, () => selector(api.getState()), () => selector(api.getInitialState()));
    import_react.default.useDebugValue(slice);
    return slice;
  }
  var import_react, identity, createImpl, create;
  var init_react = __esm({
    "node_modules/zustand/esm/react.mjs"() {
      import_react = __toESM(require_react(), 1);
      init_vanilla();
      identity = /* @__PURE__ */ __name((arg) => arg, "identity");
      __name(useStore, "useStore");
      createImpl = /* @__PURE__ */ __name((createState) => {
        var api = createStore(createState);
        var useBoundStore = /* @__PURE__ */ __name((selector) => useStore(api, selector), "useBoundStore");
        Object.assign(useBoundStore, api);
        return useBoundStore;
      }, "createImpl");
      create = /* @__PURE__ */ __name((createState) => createState ? createImpl(createState) : createImpl, "create");
    }
  });

  // node_modules/zustand/esm/index.mjs
  var init_esm = __esm({
    "node_modules/zustand/esm/index.mjs"() {
      init_vanilla();
      init_react();
    }
  });

  // src/stores/useToastStore.ts
  var useToastStore_exports = {};
  __export(useToastStore_exports, {
    useToastStore: () => useToastStore
  });
  var useToastStore;
  var init_useToastStore = __esm({
    "src/stores/useToastStore.ts"() {
      "use strict";
      init_esm();
      useToastStore = create((set2, get) => {
        var timeouts = /* @__PURE__ */ new Map();
        var handleTimeout = /* @__PURE__ */ __name((id, onTimeout) => {
          set2((state2) => {
            onTimeout?.();
            timeouts.delete(id);
            return {
              toasts: state2.toasts.filter((t4) => t4.id !== id)
            };
          });
        }, "handleTimeout");
        var clearToastTimeout = /* @__PURE__ */ __name((id) => {
          if (timeouts.has(id)) {
            clearTimeout(timeouts.get(id));
            timeouts.delete(id);
          }
        }, "clearToastTimeout");
        var setToastTimeout = /* @__PURE__ */ __name((toast) => {
          if (toast.duration && toast.duration > 0) {
            var timeout = setTimeout(() => handleTimeout(toast.id, toast.onTimeout), toast.duration);
            timeouts.set(toast.id, timeout);
          }
        }, "setToastTimeout");
        return {
          toasts: [],
          getToast: /* @__PURE__ */ __name((id) => get().toasts.find((toast) => toast.id === id), "getToast"),
          hideToast: /* @__PURE__ */ __name((id) => set2((state2) => {
            clearToastTimeout(id);
            return {
              toasts: state2.toasts.filter((toast) => toast.id !== id)
            };
          }), "hideToast"),
          updateToast: /* @__PURE__ */ __name((config) => {
            if (config.id && get().getToast(config.id) === void 0) {
              set2((state2) => {
                setToastTimeout(config);
                return {
                  toasts: [
                    ...state2.toasts,
                    config
                  ]
                };
              });
            } else {
              set2((state2) => ({
                toasts: state2.toasts.map((toast) => {
                  if (toast.id === config.id) {
                    var updatedToast = {
                      ...toast,
                      ...config
                    };
                    if ("duration" in config && config.duration > 0) {
                      clearToastTimeout(config.id);
                      setToastTimeout(updatedToast);
                    }
                    return updatedToast;
                  }
                  return toast;
                })
              }));
            }
          }, "updateToast")
        };
      });
    }
  });

  // src/api/toasts.ts
  var toasts_exports = {};
  __export(toasts_exports, {
    showToast: () => showToast
  });
  function showToast(configOrText) {
    var id;
    var toastProps;
    if (typeof configOrText === "string") {
      id = configOrText;
      toastProps = {
        id: configOrText,
        text: configOrText
      };
    } else {
      id = configOrText.id;
      toastProps = configOrText;
    }
    var toast = {
      use: /* @__PURE__ */ __name((selector) => useToastStore((state2) => selector(state2.getToast(id) ?? toast)), "use"),
      ...toastProps
    };
    var showToast2 = /* @__PURE__ */ __name(() => useToastStore.getState().updateToast({
      duration: 5e3,
      dismissible: true,
      ...useToastStore.getState().getToast(id) ?? toast
    }), "showToast");
    showToast2();
    var controller = {
      hide: /* @__PURE__ */ __name(() => {
        useToastStore.getState().hideToast(id);
        return controller;
      }, "hide"),
      update: /* @__PURE__ */ __name((newConfig) => {
        useToastStore.getState().updateToast({
          ...toast,
          ...newConfig,
          id
        });
        return controller;
      }, "update")
    };
    return controller;
  }
  var init_toasts = __esm({
    "src/api/toasts.ts"() {
      "use strict";
      init_useToastStore();
      __name(showToast, "showToast");
    }
  });

  // src/metro/common/wrappers.ts
  var wrappers_exports = {};
  __export(wrappers_exports, {
    lookupByFilePath: () => lookupByFilePath,
    lookupByName: () => lookupByName,
    lookupByProps: () => lookupByProps
  });
  function lookupByProps(...props) {
    return lookup(byProps(props));
  }
  function lookupByName(name) {
    return lookup(byName(name));
  }
  function lookupByFilePath(filePath, options) {
    return lookup(byFilePath(filePath, options));
  }
  var init_wrappers = __esm({
    "src/metro/common/wrappers.ts"() {
      "use strict";
      init_filters2();
      init_api();
      __name(lookupByProps, "lookupByProps");
      __name(lookupByName, "lookupByName");
      __name(lookupByFilePath, "lookupByFilePath");
    }
  });

  // src/utils/clipboard.ts
  var clipboard_exports = {};
  __export(clipboard_exports, {
    copyToClipboard: () => copyToClipboard
  });
  function copyToClipboard(text) {
    return _copyToClipboard.apply(this, arguments);
  }
  function _copyToClipboard() {
    _copyToClipboard = _async_to_generator(function* (text, { toast = true } = {}) {
      try {
        yield clipboard.setString(text);
        if (toast) showToast({
          id: "wt-copied",
          text: "Copied to clipboard"
        });
      } catch (e3) {
        if (toast) showToast({
          id: "wt-failed-to-copy",
          text: "Failed to copy to clipboard"
        });
      }
    });
    return _copyToClipboard.apply(this, arguments);
  }
  var clipboard;
  var init_clipboard = __esm({
    "src/utils/clipboard.ts"() {
      "use strict";
      init_async_to_generator();
      init_toasts();
      init_wrappers();
      clipboard = lookupByProps("setString", "getString", "hasString").asLazy((m2) => clipboard = m2);
      __name(copyToClipboard, "copyToClipboard");
      __name(_copyToClipboard, "_copyToClipboard");
    }
  });

  // src/utils/events.ts
  var events_exports2 = {};
  __export(events_exports2, {
    onUntil: () => onUntil
  });
  function onUntil(emitter, eventName, listener) {
    var callback = /* @__PURE__ */ __name((...args) => {
      var shouldOff = listener(...args);
      if (shouldOff) emitter.off(eventName, callback);
    }, "callback");
    emitter.on(eventName, callback);
  }
  var init_events2 = __esm({
    "src/utils/events.ts"() {
      "use strict";
      __name(onUntil, "onUntil");
    }
  });

  // src/utils/network/fetchAsDataUrl.ts
  var fetchAsDataUrl_exports = {};
  __export(fetchAsDataUrl_exports, {
    fetchAsDataUrl: () => fetchAsDataUrl
  });
  function fetchAsDataUrl(url) {
    return _fetchAsDataUrl.apply(this, arguments);
  }
  function _fetchAsDataUrl() {
    _fetchAsDataUrl = _async_to_generator(function* (url) {
      var response = yield fetch(url);
      var blob = yield response.blob();
      return yield new Promise((resolve) => {
        var reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    });
    return _fetchAsDataUrl.apply(this, arguments);
  }
  var init_fetchAsDataUrl = __esm({
    "src/utils/network/fetchAsDataUrl.ts"() {
      "use strict";
      init_async_to_generator();
      __name(fetchAsDataUrl, "fetchAsDataUrl");
      __name(_fetchAsDataUrl, "_fetchAsDataUrl");
    }
  });

  // src/utils/network/url.ts
  var url_exports = {};
  __export(url_exports, {
    openURL: () => openURL
  });
  function openURL(url) {
    urlModule.openURL(url);
  }
  var urlModule;
  var init_url = __esm({
    "src/utils/network/url.ts"() {
      "use strict";
      init_wrappers();
      urlModule = lookupByProps("openURL", "openDeeplink").asLazy((m2) => urlModule = m2);
      __name(openURL, "openURL");
    }
  });

  // src/utils/errors/isError.ts
  var isError_exports = {};
  __export(isError_exports, {
    hasStack: () => hasStack,
    isComponentStack: () => isComponentStack,
    isError: () => isError
  });
  function isError(error) {
    return error instanceof Error;
  }
  function isComponentStack(error) {
    return isError(error) && "componentStack" in error && typeof error.componentStack === "string";
  }
  function hasStack(error) {
    return isError(error) && !!error.stack;
  }
  var init_isError = __esm({
    "src/utils/errors/isError.ts"() {
      "use strict";
      __name(isError, "isError");
      __name(isComponentStack, "isComponentStack");
      __name(hasStack, "hasStack");
    }
  });

  // src/utils/errors/parseComponentStack.ts
  var parseComponentStack_exports = {};
  __export(parseComponentStack_exports, {
    parseComponentStack: () => parseComponentStack
  });
  function parseComponentStack(componentStack) {
    return componentStack.split(/[\s|\n]+?in /).filter(Boolean);
  }
  var init_parseComponentStack = __esm({
    "src/utils/errors/parseComponentStack.ts"() {
      "use strict";
      __name(parseComponentStack, "parseComponentStack");
    }
  });

  // src/utils/errors/parseErrorStack.ts
  var parseErrorStack_exports = {};
  __export(parseErrorStack_exports, {
    default: () => parseErrorStack
  });
  function isInternalBytecodeSourceUrl(sourceUrl) {
    return sourceUrl === "InternalBytecode.js";
  }
  function parseLine(line) {
    var asFrame = line.match(RE_FRAME);
    if (asFrame) {
      return {
        type: "FRAME",
        functionName: asFrame[1],
        location: asFrame[2] === "native" ? {
          type: "NATIVE"
        } : asFrame[3] === "address at " ? isInternalBytecodeSourceUrl(asFrame[4]) ? {
          type: "INTERNAL_BYTECODE",
          sourceUrl: asFrame[4],
          line1Based: Number.parseInt(asFrame[5], 10),
          virtualOffset0Based: Number.parseInt(asFrame[6], 10)
        } : {
          type: "BYTECODE",
          sourceUrl: asFrame[4],
          line1Based: Number.parseInt(asFrame[5], 10),
          virtualOffset0Based: Number.parseInt(asFrame[6], 10)
        } : {
          type: "SOURCE",
          sourceUrl: asFrame[4],
          line1Based: Number.parseInt(asFrame[5], 10),
          column1Based: Number.parseInt(asFrame[6], 10)
        }
      };
    }
    var asSkipped = line.match(RE_SKIPPED);
    if (asSkipped) {
      return {
        type: "SKIPPED",
        count: Number.parseInt(asSkipped[1], 10)
      };
    }
  }
  function parseHermesStack(stack) {
    var lines = stack.split(/\n/);
    var entries = [];
    var lastMessageLine = -1;
    for (var i2 = 0; i2 < lines.length; ++i2) {
      var line = lines[i2];
      if (!line) {
        continue;
      }
      var entry = parseLine(line);
      if (entry) {
        entries.push(entry);
        continue;
      }
      if (RE_COMPONENT_NO_STACK.test(line)) {
        continue;
      }
      lastMessageLine = i2;
      entries = [];
    }
    var message = lines.slice(0, lastMessageLine + 1).join("\n");
    return {
      message,
      entries
    };
  }
  function convertHermesStack(stack) {
    var frames = [];
    for (var entry of stack.entries) {
      if (entry.type !== "FRAME") {
        continue;
      }
      var { location: location2, functionName } = entry;
      if (location2.type === "NATIVE" || location2.type === "INTERNAL_BYTECODE") {
        continue;
      }
      frames.push({
        methodName: functionName,
        file: location2.sourceUrl,
        lineNumber: location2.line1Based,
        column: location2.type === "SOURCE" ? location2.column1Based - 1 : location2.virtualOffset0Based
      });
    }
    return frames;
  }
  function parseErrorStack(errorStack) {
    if (errorStack == null) {
      return [];
    }
    var parsedStack = Array.isArray(errorStack) ? errorStack : convertHermesStack(parseHermesStack(errorStack));
    return parsedStack;
  }
  var RE_FRAME, RE_SKIPPED, RE_COMPONENT_NO_STACK;
  var init_parseErrorStack = __esm({
    "src/utils/errors/parseErrorStack.ts"() {
      "use strict";
      RE_FRAME = /^ {4}at (.+?)(?: \((native)\)?| \((address at )?(.*?):(\d+):(\d+)\))$/;
      RE_SKIPPED = /^ {4}... skipping (\d+) frames$/;
      RE_COMPONENT_NO_STACK = /^ {4}at .*$/;
      __name(isInternalBytecodeSourceUrl, "isInternalBytecodeSourceUrl");
      __name(parseLine, "parseLine");
      __name(parseHermesStack, "parseHermesStack");
      __name(convertHermesStack, "convertHermesStack");
      __name(parseErrorStack, "parseErrorStack");
    }
  });

  // src/stores/useInitConfigStore.ts
  var useInitConfigStore_exports = {};
  __export(useInitConfigStore_exports, {
    useInitConfigStore: () => useInitConfigStore
  });
  var useInitConfigStore;
  var init_useInitConfigStore = __esm({
    "src/stores/useInitConfigStore.ts"() {
      "use strict";
      init_fs();
      init_loader();
      init_esm();
      useInitConfigStore = create((set2) => ({
        config: loaderPayload.loader.initConfig,
        toggleSafeMode: /* @__PURE__ */ __name((to) => set2((s) => ({
          config: {
            ...s.config,
            safeMode: to
          }
        })), "toggleSafeMode")
      }));
      useInitConfigStore.subscribe((state2) => {
        writeFile("init_config.json", JSON.stringify(state2.config));
      });
    }
  });

  // node_modules/zustand/esm/middleware.mjs
  function createJSONStorage(getStorage, options) {
    var storage;
    try {
      storage = getStorage();
    } catch (e3) {
      return;
    }
    var persistStorage = {
      getItem: /* @__PURE__ */ __name((name) => {
        var _a;
        var parse = /* @__PURE__ */ __name((str2) => {
          if (str2 === null) {
            return null;
          }
          return JSON.parse(str2, options == null ? void 0 : options.reviver);
        }, "parse");
        var str = (_a = storage.getItem(name)) != null ? _a : null;
        if (str instanceof Promise) {
          return str.then(parse);
        }
        return parse(str);
      }, "getItem"),
      setItem: /* @__PURE__ */ __name((name, newValue) => storage.setItem(name, JSON.stringify(newValue, options == null ? void 0 : options.replacer)), "setItem"),
      removeItem: /* @__PURE__ */ __name((name) => storage.removeItem(name), "removeItem")
    };
    return persistStorage;
  }
  var subscribeWithSelectorImpl, subscribeWithSelector, toThenable, persistImpl, persist;
  var init_middleware = __esm({
    "node_modules/zustand/esm/middleware.mjs"() {
      subscribeWithSelectorImpl = /* @__PURE__ */ __name((fn) => (set2, get, api) => {
        var origSubscribe = api.subscribe;
        api.subscribe = (selector, optListener, options) => {
          var listener = selector;
          if (optListener) {
            var equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
            var currentSlice = selector(api.getState());
            listener = /* @__PURE__ */ __name((state2) => {
              var nextSlice = selector(state2);
              if (!equalityFn(currentSlice, nextSlice)) {
                var previousSlice = currentSlice;
                optListener(currentSlice = nextSlice, previousSlice);
              }
            }, "listener");
            if (options == null ? void 0 : options.fireImmediately) {
              optListener(currentSlice, currentSlice);
            }
          }
          return origSubscribe(listener);
        };
        var initialState = fn(set2, get, api);
        return initialState;
      }, "subscribeWithSelectorImpl");
      subscribeWithSelector = subscribeWithSelectorImpl;
      __name(createJSONStorage, "createJSONStorage");
      toThenable = /* @__PURE__ */ __name((fn) => (input) => {
        try {
          var result = fn(input);
          if (result instanceof Promise) {
            return result;
          }
          return {
            then(onFulfilled) {
              return toThenable(onFulfilled)(result);
            },
            catch(_onRejected) {
              return this;
            }
          };
        } catch (e3) {
          return {
            then(_onFulfilled) {
              return this;
            },
            catch(onRejected) {
              return toThenable(onRejected)(e3);
            }
          };
        }
      }, "toThenable");
      persistImpl = /* @__PURE__ */ __name((config, baseOptions) => (set2, get, api) => {
        var options = {
          storage: createJSONStorage(() => localStorage),
          partialize: /* @__PURE__ */ __name((state2) => state2, "partialize"),
          version: 0,
          merge: /* @__PURE__ */ __name((persistedState, currentState) => ({
            ...currentState,
            ...persistedState
          }), "merge"),
          ...baseOptions
        };
        var hasHydrated = false;
        var hydrationListeners = /* @__PURE__ */ new Set();
        var finishHydrationListeners = /* @__PURE__ */ new Set();
        var storage = options.storage;
        if (!storage) {
          return config((...args) => {
            console.warn(`[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`);
            set2(...args);
          }, get, api);
        }
        var setItem2 = /* @__PURE__ */ __name(() => {
          var state2 = options.partialize({
            ...get()
          });
          return storage.setItem(options.name, {
            state: state2,
            version: options.version
          });
        }, "setItem");
        var savedSetState = api.setState;
        api.setState = (state2, replace) => {
          savedSetState(state2, replace);
          void setItem2();
        };
        var configResult = config((...args) => {
          set2(...args);
          void setItem2();
        }, get, api);
        api.getInitialState = () => configResult;
        var stateFromStorage;
        var hydrate = /* @__PURE__ */ __name(() => {
          var _a, _b;
          if (!storage) return;
          hasHydrated = false;
          hydrationListeners.forEach((cb) => {
            var _a2;
            return cb((_a2 = get()) != null ? _a2 : configResult);
          });
          var postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
          return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
            if (deserializedStorageValue) {
              if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
                if (options.migrate) {
                  var migration = options.migrate(deserializedStorageValue.state, deserializedStorageValue.version);
                  if (migration instanceof Promise) {
                    return migration.then((result) => [
                      true,
                      result
                    ]);
                  }
                  return [
                    true,
                    migration
                  ];
                }
                console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
              } else {
                return [
                  false,
                  deserializedStorageValue.state
                ];
              }
            }
            return [
              false,
              void 0
            ];
          }).then((migrationResult) => {
            var _a2;
            var [migrated, migratedState] = migrationResult;
            stateFromStorage = options.merge(migratedState, (_a2 = get()) != null ? _a2 : configResult);
            set2(stateFromStorage, true);
            if (migrated) {
              return setItem2();
            }
          }).then(() => {
            postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
            stateFromStorage = get();
            hasHydrated = true;
            finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
          }).catch((e3) => {
            postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e3);
          });
        }, "hydrate");
        api.persist = {
          setOptions: /* @__PURE__ */ __name((newOptions) => {
            options = {
              ...options,
              ...newOptions
            };
            if (newOptions.storage) {
              storage = newOptions.storage;
            }
          }, "setOptions"),
          clearStorage: /* @__PURE__ */ __name(() => {
            storage == null ? void 0 : storage.removeItem(options.name);
          }, "clearStorage"),
          getOptions: /* @__PURE__ */ __name(() => options, "getOptions"),
          rehydrate: /* @__PURE__ */ __name(() => hydrate(), "rehydrate"),
          hasHydrated: /* @__PURE__ */ __name(() => hasHydrated, "hasHydrated"),
          onHydrate: /* @__PURE__ */ __name((cb) => {
            hydrationListeners.add(cb);
            return () => {
              hydrationListeners.delete(cb);
            };
          }, "onHydrate"),
          onFinishHydration: /* @__PURE__ */ __name((cb) => {
            finishHydrationListeners.add(cb);
            return () => {
              finishHydrationListeners.delete(cb);
            };
          }, "onFinishHydration")
        };
        if (!options.skipHydration) {
          hydrate();
        }
        return stateFromStorage || configResult;
      }, "persistImpl");
      persist = persistImpl;
    }
  });

  // node_modules/immer/dist/immer.mjs
  function die(error, ...args) {
    if (true) {
      var e3 = errors[error];
      var msg = typeof e3 === "function" ? e3.apply(null, args) : e3;
      throw new Error(`[Immer] ${msg}`);
    }
    throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`);
  }
  function isDraft(value) {
    return !!value && !!value[DRAFT_STATE];
  }
  function isDraftable(value) {
    if (!value) return false;
    return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
  }
  function isPlainObject(value) {
    if (!value || typeof value !== "object") return false;
    var proto = getPrototypeOf(value);
    if (proto === null) {
      return true;
    }
    var Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    if (Ctor === Object) return true;
    return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
  }
  function each(obj, iter) {
    if (getArchtype(obj) === 0) {
      Reflect.ownKeys(obj).forEach((key) => {
        iter(key, obj[key], obj);
      });
    } else {
      obj.forEach((entry, index) => iter(index, entry, obj));
    }
  }
  function getArchtype(thing) {
    var state2 = thing[DRAFT_STATE];
    return state2 ? state2.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
  }
  function has(thing, prop) {
    return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
  }
  function set(thing, propOrOldValue, value) {
    var t4 = getArchtype(thing);
    if (t4 === 2) thing.set(propOrOldValue, value);
    else if (t4 === 3) {
      thing.add(value);
    } else thing[propOrOldValue] = value;
  }
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function isMap(target) {
    return target instanceof Map;
  }
  function isSet(target) {
    return target instanceof Set;
  }
  function latest(state2) {
    return state2.copy_ || state2.base_;
  }
  function shallowCopy(base, strict) {
    if (isMap(base)) {
      return new Map(base);
    }
    if (isSet(base)) {
      return new Set(base);
    }
    if (Array.isArray(base)) return Array.prototype.slice.call(base);
    var isPlain = isPlainObject(base);
    if (strict === true || strict === "class_only" && !isPlain) {
      var descriptors = Object.getOwnPropertyDescriptors(base);
      delete descriptors[DRAFT_STATE];
      var keys = Reflect.ownKeys(descriptors);
      for (var i2 = 0; i2 < keys.length; i2++) {
        var key = keys[i2];
        var desc = descriptors[key];
        if (desc.writable === false) {
          desc.writable = true;
          desc.configurable = true;
        }
        if (desc.get || desc.set) descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
      }
      return Object.create(getPrototypeOf(base), descriptors);
    } else {
      var proto = getPrototypeOf(base);
      if (proto !== null && isPlain) {
        return {
          ...base
        };
      }
      var obj = Object.create(proto);
      return Object.assign(obj, base);
    }
  }
  function freeze(obj, deep = false) {
    if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
    if (getArchtype(obj) > 1) {
      obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
    }
    Object.freeze(obj);
    if (deep) Object.entries(obj).forEach(([key, value]) => freeze(value, true));
    return obj;
  }
  function dontMutateFrozenCollections() {
    die(2);
  }
  function isFrozen(obj) {
    return Object.isFrozen(obj);
  }
  function getPlugin(pluginKey) {
    var plugin = plugins[pluginKey];
    if (!plugin) {
      die(0, pluginKey);
    }
    return plugin;
  }
  function getCurrentScope() {
    return currentScope;
  }
  function createScope(parent_, immer_) {
    return {
      drafts_: [],
      parent_,
      immer_,
      // Whenever the modified draft contains a draft from another scope, we
      // need to prevent auto-freezing so the unowned draft can be finalized.
      canAutoFreeze_: true,
      unfinalizedDrafts_: 0
    };
  }
  function usePatchesInScope(scope, patchListener) {
    if (patchListener) {
      getPlugin("Patches");
      scope.patches_ = [];
      scope.inversePatches_ = [];
      scope.patchListener_ = patchListener;
    }
  }
  function revokeScope(scope) {
    leaveScope(scope);
    scope.drafts_.forEach(revokeDraft);
    scope.drafts_ = null;
  }
  function leaveScope(scope) {
    if (scope === currentScope) {
      currentScope = scope.parent_;
    }
  }
  function enterScope(immer22) {
    return currentScope = createScope(currentScope, immer22);
  }
  function revokeDraft(draft) {
    var state2 = draft[DRAFT_STATE];
    if (state2.type_ === 0 || state2.type_ === 1) state2.revoke_();
    else state2.revoked_ = true;
  }
  function processResult(result, scope) {
    scope.unfinalizedDrafts_ = scope.drafts_.length;
    var baseDraft = scope.drafts_[0];
    var isReplaced = result !== void 0 && result !== baseDraft;
    if (isReplaced) {
      if (baseDraft[DRAFT_STATE].modified_) {
        revokeScope(scope);
        die(4);
      }
      if (isDraftable(result)) {
        result = finalize(scope, result);
        if (!scope.parent_) maybeFreeze(scope, result);
      }
      if (scope.patches_) {
        getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope.patches_, scope.inversePatches_);
      }
    } else {
      result = finalize(scope, baseDraft, []);
    }
    revokeScope(scope);
    if (scope.patches_) {
      scope.patchListener_(scope.patches_, scope.inversePatches_);
    }
    return result !== NOTHING ? result : void 0;
  }
  function finalize(rootScope, value, path) {
    if (isFrozen(value)) return value;
    var state2 = value[DRAFT_STATE];
    if (!state2) {
      each(value, (key, childValue) => finalizeProperty(rootScope, state2, value, key, childValue, path));
      return value;
    }
    if (state2.scope_ !== rootScope) return value;
    if (!state2.modified_) {
      maybeFreeze(rootScope, state2.base_, true);
      return state2.base_;
    }
    if (!state2.finalized_) {
      state2.finalized_ = true;
      state2.scope_.unfinalizedDrafts_--;
      var result = state2.copy_;
      var resultEach = result;
      var isSet2 = false;
      if (state2.type_ === 3) {
        resultEach = new Set(result);
        result.clear();
        isSet2 = true;
      }
      each(resultEach, (key, childValue) => finalizeProperty(rootScope, state2, result, key, childValue, path, isSet2));
      maybeFreeze(rootScope, result, false);
      if (path && rootScope.patches_) {
        getPlugin("Patches").generatePatches_(state2, path, rootScope.patches_, rootScope.inversePatches_);
      }
    }
    return state2.copy_;
  }
  function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
    if (childValue === targetObject) die(5);
    if (isDraft(childValue)) {
      var path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
      !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
      var res = finalize(rootScope, childValue, path);
      set(targetObject, prop, res);
      if (isDraft(res)) {
        rootScope.canAutoFreeze_ = false;
      } else return;
    } else if (targetIsSet) {
      targetObject.add(childValue);
    }
    if (isDraftable(childValue) && !isFrozen(childValue)) {
      if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
        return;
      }
      finalize(rootScope, childValue);
      if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop)) maybeFreeze(rootScope, childValue);
    }
  }
  function maybeFreeze(scope, value, deep = false) {
    if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
      freeze(value, deep);
    }
  }
  function createProxyProxy(base, parent) {
    var isArray = Array.isArray(base);
    var state2 = {
      type_: isArray ? 1 : 0,
      // Track which produce call this is associated with.
      scope_: parent ? parent.scope_ : getCurrentScope(),
      // True for both shallow and deep changes.
      modified_: false,
      // Used during finalization.
      finalized_: false,
      // Track which properties have been assigned (true) or deleted (false).
      assigned_: {},
      // The parent draft state.
      parent_: parent,
      // The base state.
      base_: base,
      // The base proxy.
      draft_: null,
      // set below
      // The base copy with any updated values.
      copy_: null,
      // Called by the `produce` function.
      revoke_: null,
      isManual_: false
    };
    var target = state2;
    var traps = objectTraps;
    if (isArray) {
      target = [
        state2
      ];
      traps = arrayTraps;
    }
    var { revoke, proxy } = Proxy.revocable(target, traps);
    state2.draft_ = proxy;
    state2.revoke_ = revoke;
    return proxy;
  }
  function peek(draft, prop) {
    var state2 = draft[DRAFT_STATE];
    var source = state2 ? latest(state2) : draft;
    return source[prop];
  }
  function readPropFromProto(state2, source, prop) {
    var desc = getDescriptorFromProto(source, prop);
    return desc ? `value` in desc ? desc.value : (
      // This is a very special case, if the prop is a getter defined by the
      // prototype, we should invoke it with the draft as context!
      desc.get?.call(state2.draft_)
    ) : void 0;
  }
  function getDescriptorFromProto(source, prop) {
    if (!(prop in source)) return void 0;
    var proto = getPrototypeOf(source);
    while (proto) {
      var desc = Object.getOwnPropertyDescriptor(proto, prop);
      if (desc) return desc;
      proto = getPrototypeOf(proto);
    }
    return void 0;
  }
  function markChanged(state2) {
    if (!state2.modified_) {
      state2.modified_ = true;
      if (state2.parent_) {
        markChanged(state2.parent_);
      }
    }
  }
  function prepareCopy(state2) {
    if (!state2.copy_) {
      state2.copy_ = shallowCopy(state2.base_, state2.scope_.immer_.useStrictShallowCopy_);
    }
  }
  function createProxy(value, parent) {
    var draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
    var scope = parent ? parent.scope_ : getCurrentScope();
    scope.drafts_.push(draft);
    return draft;
  }
  function current(value) {
    if (!isDraft(value)) die(10, value);
    return currentImpl(value);
  }
  function currentImpl(value) {
    if (!isDraftable(value) || isFrozen(value)) return value;
    var state2 = value[DRAFT_STATE];
    var copy;
    if (state2) {
      if (!state2.modified_) return state2.base_;
      state2.finalized_ = true;
      copy = shallowCopy(value, state2.scope_.immer_.useStrictShallowCopy_);
    } else {
      copy = shallowCopy(value, true);
    }
    each(copy, (key, childValue) => {
      set(copy, key, currentImpl(childValue));
    });
    if (state2) {
      state2.finalized_ = false;
    }
    return copy;
  }
  var NOTHING, DRAFTABLE, DRAFT_STATE, errors, getPrototypeOf, objectCtorString, plugins, currentScope, objectTraps, arrayTraps, Immer2, immer, produce, produceWithPatches, setAutoFreeze, setUseStrictShallowCopy, applyPatches, createDraft, finishDraft;
  var init_immer = __esm({
    "node_modules/immer/dist/immer.mjs"() {
      init_class_call_check();
      init_create_class();
      NOTHING = Symbol.for("immer-nothing");
      DRAFTABLE = Symbol.for("immer-draftable");
      DRAFT_STATE = Symbol.for("immer-state");
      errors = true ? [
        // All error codes, starting by 0:
        function(plugin) {
          return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
        },
        function(thing) {
          return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
        },
        "This object has been frozen and should not be mutated",
        function(data) {
          return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
        },
        "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
        "Immer forbids circular references",
        "The first or second argument to `produce` must be a function",
        "The third argument to `produce` must be a function or undefined",
        "First argument to `createDraft` must be a plain object, an array, or an immerable object",
        "First argument to `finishDraft` must be a draft returned by `createDraft`",
        function(thing) {
          return `'current' expects a draft, got: ${thing}`;
        },
        "Object.defineProperty() cannot be used on an Immer draft",
        "Object.setPrototypeOf() cannot be used on an Immer draft",
        "Immer only supports deleting array indices",
        "Immer only supports setting array indices and the 'length' property",
        function(thing) {
          return `'original' expects a draft, got: ${thing}`;
        }
      ] : [];
      __name(die, "die");
      getPrototypeOf = Object.getPrototypeOf;
      __name(isDraft, "isDraft");
      __name(isDraftable, "isDraftable");
      objectCtorString = Object.prototype.constructor.toString();
      __name(isPlainObject, "isPlainObject");
      __name(each, "each");
      __name(getArchtype, "getArchtype");
      __name(has, "has");
      __name(set, "set");
      __name(is, "is");
      __name(isMap, "isMap");
      __name(isSet, "isSet");
      __name(latest, "latest");
      __name(shallowCopy, "shallowCopy");
      __name(freeze, "freeze");
      __name(dontMutateFrozenCollections, "dontMutateFrozenCollections");
      __name(isFrozen, "isFrozen");
      plugins = {};
      __name(getPlugin, "getPlugin");
      __name(getCurrentScope, "getCurrentScope");
      __name(createScope, "createScope");
      __name(usePatchesInScope, "usePatchesInScope");
      __name(revokeScope, "revokeScope");
      __name(leaveScope, "leaveScope");
      __name(enterScope, "enterScope");
      __name(revokeDraft, "revokeDraft");
      __name(processResult, "processResult");
      __name(finalize, "finalize");
      __name(finalizeProperty, "finalizeProperty");
      __name(maybeFreeze, "maybeFreeze");
      __name(createProxyProxy, "createProxyProxy");
      objectTraps = {
        get(state2, prop) {
          if (prop === DRAFT_STATE) return state2;
          var source = latest(state2);
          if (!has(source, prop)) {
            return readPropFromProto(state2, source, prop);
          }
          var value = source[prop];
          if (state2.finalized_ || !isDraftable(value)) {
            return value;
          }
          if (value === peek(state2.base_, prop)) {
            prepareCopy(state2);
            return state2.copy_[prop] = createProxy(value, state2);
          }
          return value;
        },
        has(state2, prop) {
          return prop in latest(state2);
        },
        ownKeys(state2) {
          return Reflect.ownKeys(latest(state2));
        },
        set(state2, prop, value) {
          var desc = getDescriptorFromProto(latest(state2), prop);
          if (desc?.set) {
            desc.set.call(state2.draft_, value);
            return true;
          }
          if (!state2.modified_) {
            var current2 = peek(latest(state2), prop);
            var currentState = current2?.[DRAFT_STATE];
            if (currentState && currentState.base_ === value) {
              state2.copy_[prop] = value;
              state2.assigned_[prop] = false;
              return true;
            }
            if (is(value, current2) && (value !== void 0 || has(state2.base_, prop))) return true;
            prepareCopy(state2);
            markChanged(state2);
          }
          if (state2.copy_[prop] === value && // special case: handle new props with value 'undefined'
          (value !== void 0 || prop in state2.copy_) || // special case: NaN
          Number.isNaN(value) && Number.isNaN(state2.copy_[prop])) return true;
          state2.copy_[prop] = value;
          state2.assigned_[prop] = true;
          return true;
        },
        deleteProperty(state2, prop) {
          if (peek(state2.base_, prop) !== void 0 || prop in state2.base_) {
            state2.assigned_[prop] = false;
            prepareCopy(state2);
            markChanged(state2);
          } else {
            delete state2.assigned_[prop];
          }
          if (state2.copy_) {
            delete state2.copy_[prop];
          }
          return true;
        },
        // Note: We never coerce `desc.value` into an Immer draft, because we can't make
        // the same guarantee in ES5 mode.
        getOwnPropertyDescriptor(state2, prop) {
          var owner = latest(state2);
          var desc = Reflect.getOwnPropertyDescriptor(owner, prop);
          if (!desc) return desc;
          return {
            writable: true,
            configurable: state2.type_ !== 1 || prop !== "length",
            enumerable: desc.enumerable,
            value: owner[prop]
          };
        },
        defineProperty() {
          die(11);
        },
        getPrototypeOf(state2) {
          return getPrototypeOf(state2.base_);
        },
        setPrototypeOf() {
          die(12);
        }
      };
      arrayTraps = {};
      each(objectTraps, (key, fn) => {
        arrayTraps[key] = function() {
          arguments[0] = arguments[0][0];
          return fn.apply(this, arguments);
        };
      });
      arrayTraps.deleteProperty = function(state2, prop) {
        if (isNaN(parseInt(prop))) die(13);
        return arrayTraps.set.call(this, state2, prop, void 0);
      };
      arrayTraps.set = function(state2, prop, value) {
        if (prop !== "length" && isNaN(parseInt(prop))) die(14);
        return objectTraps.set.call(this, state2[0], prop, value, state2[0]);
      };
      __name(peek, "peek");
      __name(readPropFromProto, "readPropFromProto");
      __name(getDescriptorFromProto, "getDescriptorFromProto");
      __name(markChanged, "markChanged");
      __name(prepareCopy, "prepareCopy");
      Immer2 = /* @__PURE__ */ function() {
        "use strict";
        function Immer22(config) {
          _class_call_check(this, Immer22);
          this.autoFreeze_ = true;
          this.useStrictShallowCopy_ = false;
          this.produce = (base, recipe, patchListener) => {
            if (typeof base === "function" && typeof recipe !== "function") {
              var defaultBase = recipe;
              recipe = base;
              var self = this;
              return /* @__PURE__ */ __name(function curriedProduce(base2 = defaultBase, ...args) {
                return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
              }, "curriedProduce");
            }
            if (typeof recipe !== "function") die(6);
            if (patchListener !== void 0 && typeof patchListener !== "function") die(7);
            var result;
            if (isDraftable(base)) {
              var scope = enterScope(this);
              var proxy = createProxy(base, void 0);
              var hasError = true;
              try {
                result = recipe(proxy);
                hasError = false;
              } finally {
                if (hasError) revokeScope(scope);
                else leaveScope(scope);
              }
              usePatchesInScope(scope, patchListener);
              return processResult(result, scope);
            } else if (!base || typeof base !== "object") {
              result = recipe(base);
              if (result === void 0) result = base;
              if (result === NOTHING) result = void 0;
              if (this.autoFreeze_) freeze(result, true);
              if (patchListener) {
                var p2 = [];
                var ip = [];
                getPlugin("Patches").generateReplacementPatches_(base, result, p2, ip);
                patchListener(p2, ip);
              }
              return result;
            } else die(1, base);
          };
          this.produceWithPatches = (base, recipe) => {
            if (typeof base === "function") {
              return (state2, ...args) => this.produceWithPatches(state2, (draft) => base(draft, ...args));
            }
            var patches, inversePatches;
            var result = this.produce(base, recipe, (p2, ip) => {
              patches = p2;
              inversePatches = ip;
            });
            return [
              result,
              patches,
              inversePatches
            ];
          };
          if (typeof config?.autoFreeze === "boolean") this.setAutoFreeze(config.autoFreeze);
          if (typeof config?.useStrictShallowCopy === "boolean") this.setUseStrictShallowCopy(config.useStrictShallowCopy);
        }
        __name(Immer22, "Immer2");
        _create_class(Immer22, [
          {
            key: "createDraft",
            value: /* @__PURE__ */ __name(function createDraft2(base) {
              if (!isDraftable(base)) die(8);
              if (isDraft(base)) base = current(base);
              var scope = enterScope(this);
              var proxy = createProxy(base, void 0);
              proxy[DRAFT_STATE].isManual_ = true;
              leaveScope(scope);
              return proxy;
            }, "createDraft")
          },
          {
            key: "finishDraft",
            value: /* @__PURE__ */ __name(function finishDraft2(draft, patchListener) {
              var state2 = draft && draft[DRAFT_STATE];
              if (!state2 || !state2.isManual_) die(9);
              var { scope_: scope } = state2;
              usePatchesInScope(scope, patchListener);
              return processResult(void 0, scope);
            }, "finishDraft")
          },
          {
            /**
            * Pass true to automatically freeze all copies created by Immer.
            *
            * By default, auto-freezing is enabled.
            */
            key: "setAutoFreeze",
            value: /* @__PURE__ */ __name(function setAutoFreeze2(value) {
              this.autoFreeze_ = value;
            }, "setAutoFreeze")
          },
          {
            /**
            * Pass true to enable strict shallow copy.
            *
            * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
            */
            key: "setUseStrictShallowCopy",
            value: /* @__PURE__ */ __name(function setUseStrictShallowCopy2(value) {
              this.useStrictShallowCopy_ = value;
            }, "setUseStrictShallowCopy")
          },
          {
            key: "applyPatches",
            value: /* @__PURE__ */ __name(function applyPatches2(base, patches) {
              var i2;
              for (i2 = patches.length - 1; i2 >= 0; i2--) {
                var patch = patches[i2];
                if (patch.path.length === 0 && patch.op === "replace") {
                  base = patch.value;
                  break;
                }
              }
              if (i2 > -1) {
                patches = patches.slice(i2 + 1);
              }
              var applyPatchesImpl = getPlugin("Patches").applyPatches_;
              if (isDraft(base)) {
                return applyPatchesImpl(base, patches);
              }
              return this.produce(base, (draft) => applyPatchesImpl(draft, patches));
            }, "applyPatches")
          }
        ]);
        return Immer22;
      }();
      __name(createProxy, "createProxy");
      __name(current, "current");
      __name(currentImpl, "currentImpl");
      immer = new Immer2();
      produce = immer.produce;
      produceWithPatches = immer.produceWithPatches.bind(immer);
      setAutoFreeze = immer.setAutoFreeze.bind(immer);
      setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
      applyPatches = immer.applyPatches.bind(immer);
      createDraft = immer.createDraft.bind(immer);
      finishDraft = immer.finishDraft.bind(immer);
    }
  });

  // node_modules/zustand/esm/middleware/immer.mjs
  var immerImpl, immer2;
  var init_immer2 = __esm({
    "node_modules/zustand/esm/middleware/immer.mjs"() {
      init_immer();
      immerImpl = /* @__PURE__ */ __name((initializer) => (set2, get, store) => {
        store.setState = (updater, replace, ...a) => {
          var nextState = typeof updater === "function" ? produce(updater) : updater;
          return set2(nextState, replace, ...a);
        };
        return initializer(store.setState, get, store);
      }, "immerImpl");
      immer2 = immerImpl;
    }
  });

  // node_modules/es-toolkit/dist/compat/object/cloneDeepWith.mjs
  function cloneDeepWith2(obj, cloneValue) {
    return cloneDeepWith(obj, (value, key, object, stack) => {
      var cloned = cloneValue?.(value, key, object, stack);
      if (cloned != null) {
        return cloned;
      }
      if (typeof obj !== "object") {
        return void 0;
      }
      switch (Object.prototype.toString.call(obj)) {
        case numberTag:
        case stringTag:
        case booleanTag: {
          var result = new obj.constructor(obj?.valueOf());
          copyProperties(result, obj);
          return result;
        }
        case argumentsTag: {
          var result1 = {};
          copyProperties(result1, obj);
          result1.length = obj.length;
          result1[Symbol.iterator] = obj[Symbol.iterator];
          return result1;
        }
        default: {
          return void 0;
        }
      }
    });
  }
  var init_cloneDeepWith2 = __esm({
    "node_modules/es-toolkit/dist/compat/object/cloneDeepWith.mjs"() {
      init_cloneDeepWith();
      init_tags();
      __name(cloneDeepWith2, "cloneDeepWith");
    }
  });

  // node_modules/es-toolkit/dist/compat/object/cloneDeep.mjs
  function cloneDeep(obj) {
    return cloneDeepWith2(obj);
  }
  var init_cloneDeep = __esm({
    "node_modules/es-toolkit/dist/compat/object/cloneDeep.mjs"() {
      init_cloneDeepWith2();
      __name(cloneDeep, "cloneDeep");
    }
  });

  // node_modules/es-toolkit/dist/compat/object/defaults.mjs
  function defaults(object, ...sources) {
    object = Object(object);
    var objectProto = Object.prototype;
    for (var i2 = 0; i2 < sources.length; i2++) {
      var source = sources[i2];
      var keys = Object.keys(source);
      for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        var value = object[key];
        if (value === void 0 || !Object.hasOwn(object, key) && eq(value, objectProto[key])) {
          object[key] = source[key];
        }
      }
    }
    return object;
  }
  var init_defaults = __esm({
    "node_modules/es-toolkit/dist/compat/object/defaults.mjs"() {
      init_eq();
      __name(defaults, "defaults");
    }
  });

  // node_modules/es-toolkit/dist/compat/object/toDefaulted.mjs
  function toDefaulted(object, ...sources) {
    var cloned = cloneDeep(object);
    return defaults(cloned, ...sources);
  }
  var init_toDefaulted = __esm({
    "node_modules/es-toolkit/dist/compat/object/toDefaulted.mjs"() {
      init_cloneDeep();
      init_defaults();
      __name(toDefaulted, "toDefaulted");
    }
  });

  // node_modules/es-toolkit/dist/compat/index.mjs
  var init_compat = __esm({
    "node_modules/es-toolkit/dist/compat/index.mjs"() {
      init_toDefaulted();
    }
  });

  // src/patcher/index.ts
  var patcher_exports2 = {};
  __export(patcher_exports2, {
    after: () => after,
    before: () => before,
    instead: () => instead
  });
  var before, instead, after;
  var init_patcher2 = __esm({
    "src/patcher/index.ts"() {
      "use strict";
      init_patcher();
      before = getPatchFunc("b");
      instead = getPatchFunc("i");
      after = getPatchFunc("a");
    }
  });

  // src/patcher/contextual.ts
  var contextual_exports = {};
  __export(contextual_exports, {
    createContextualPatcher: () => createContextualPatcher
  });
  function createContextualPatcher({ id }) {
    var unpatches = [];
    function shimDisposableFn(f) {
      var base = /* @__PURE__ */ __name((...props) => {
        if (contextualPatcher.disposed) return () => true;
        var up = f(...props);
        unpatches.push(up);
        return up;
      }, "base");
      for (var key in f) if (typeof f[key] === "function") {
        base[key] = shimDisposableFn(f[key]);
      }
      return base;
    }
    __name(shimDisposableFn, "shimDisposableFn");
    var contextualPatcher = {
      id,
      children: [],
      before: shimDisposableFn(before),
      instead: shimDisposableFn(instead),
      after: shimDisposableFn(after),
      detached: patcher_exports2,
      disposed: false,
      attachDisposer(...cbs) {
        if (contextualPatcher.disposed) {
          for (var cb of cbs) {
            if (typeof cb === "function") cb();
          }
        } else {
          unpatches.push(...cbs.map((cb2) => () => !!cb2()));
        }
      },
      dispose() {
        contextualPatcher.disposed = true;
        for (var unpatch2 of unpatches) {
          unpatch2();
        }
        for (var child of this.children) {
          child.dispose();
        }
      },
      reuse() {
        this.dispose();
        contextualPatcher.disposed = false;
        for (var child of this.children) {
          child.reuse();
        }
      },
      createChild(options) {
        var patcher11 = createContextualPatcher({
          ...options,
          id: `${id}/${options.id}`
        });
        patcher11.parent = this;
        this.children.push(patcher11);
        return patcher11;
      }
    };
    return contextualPatcher;
  }
  var init_contextual = __esm({
    "src/patcher/contextual.ts"() {
      "use strict";
      init_emptyModule();
      init_patcher2();
      __name(createContextualPatcher, "createContextualPatcher");
    }
  });

  // src/plugins/utils.ts
  function getContextualPatcher(id, create2 = true) {
    if (patcherRegistry.has(id)) return patcherRegistry.get(id);
    if (!create2) return void 0;
    var patcher11 = createContextualPatcher({
      id
    });
    patcherRegistry.set(id, patcher11);
    return patcher11;
  }
  function getPluginSettings(id) {
    return settingsDefRegistry.get(id);
  }
  function registerPlugin(id, plugin) {
    var pluginState = {
      running: false
    };
    var pluginSettings = toDefaulted(usePluginStore_default.getState().settings[id] ?? {}, {
      enabled: Boolean(plugin.preenabled === true || plugin.required || false)
    });
    if (settingsDefRegistry.has(id)) {
      var def = settingsDefRegistry.get(id).definition;
      setDefaultPluginSettings(def, pluginSettings);
    }
    usePluginStore_default.persist.rehydrate();
    usePluginStore_default.setState((state2) => {
      state2.states[id] = pluginState;
      state2.settings[id] = pluginSettings;
    });
    Object.defineProperties(plugin, {
      $id: {
        value: id
      },
      $state: {
        get: /* @__PURE__ */ __name(() => usePluginStore_default.getState().states[id], "get")
      },
      $settings: {
        get: /* @__PURE__ */ __name(() => usePluginStore_default.getState().settings[id], "get")
      },
      $isToggleable: {
        value: /* @__PURE__ */ __name(() => !plugin.required && plugin.isAvailable?.() !== false, "value")
      }
    });
    return (relativePath) => {
      Object.defineProperties(plugin, {
        $path: {
          value: relativePath || "<unknown>"
        }
      });
      return plugin;
    };
  }
  function setDefaultPluginSettings(def, pluginSettings) {
    for (var [key, setting] of Object.entries(def)) {
      if (key in pluginSettings) continue;
      if ("default" in setting) pluginSettings[key] = setting.default;
      else {
        switch (setting.type) {
          case "string":
            pluginSettings[key] = "";
            break;
          case "boolean":
            pluginSettings[key] = false;
            break;
        }
      }
      if ("options" in setting) {
        switch (setting.type) {
          case "radio": {
            var defaultOption = setting.options.find((opt) => opt.default);
            if (defaultOption != null) pluginSettings[key] = defaultOption?.value ?? null;
            else pluginSettings[key] = null;
            break;
          }
          case "select": {
            var defaults2 = setting.options.filter((opt) => opt.default).map((opt) => opt.value);
            if (defaults2.length > 0) pluginSettings[key] = defaults2;
            else pluginSettings[key] = [];
            break;
          }
        }
      }
    }
  }
  function registerPluginSettings(id, def) {
    var unsubscribers = /* @__PURE__ */ new Set();
    var definition = {
      pluginId: id,
      definition: def,
      get: /* @__PURE__ */ __name(() => usePluginStore_default.getState().settings[definition.pluginId], "get"),
      use(selector) {
        return usePluginStore_default((state2) => selector(state2.settings[this.pluginId]));
      },
      subscribe(selector, listener, options) {
        var unsub = usePluginStore_default.subscribe((state2) => selector(state2.settings[this.pluginId]), (state2, prevState) => listener(state2, prevState), options);
        unsubscribers.add(unsub);
        return unsub;
      },
      unsubscribeAll() {
        for (var unsub of unsubscribers) unsub();
      }
    };
    settingsDefRegistry.set(id, definition);
    return definition;
  }
  function isPluginInternal(plugin) {
    return plugin.$path.startsWith("/_");
  }
  var patcherRegistry, settingsDefRegistry;
  var init_utils = __esm({
    "src/plugins/utils.ts"() {
      "use strict";
      init_compat();
      init_usePluginStore();
      init_contextual();
      patcherRegistry = /* @__PURE__ */ new Map();
      settingsDefRegistry = /* @__PURE__ */ new Map();
      __name(getContextualPatcher, "getContextualPatcher");
      __name(getPluginSettings, "getPluginSettings");
      __name(registerPlugin, "registerPlugin");
      __name(setDefaultPluginSettings, "setDefaultPluginSettings");
      __name(registerPluginSettings, "registerPluginSettings");
      __name(isPluginInternal, "isPluginInternal");
    }
  });

  // src/plugins/shared.ts
  function getPluginContext(id) {
    return {
      definePlugin(plugin) {
        return registerPlugin(id, plugin);
      },
      definePluginSettings(def) {
        return registerPluginSettings(id, def);
      },
      meta: {
        id
      },
      logger: pluginlogger.createChild(id),
      patcher: getContextualPatcher(id)
    };
  }
  var pluginlogger;
  var init_shared = __esm({
    "src/plugins/shared.ts"() {
      "use strict";
      init_logger();
      init_utils();
      pluginlogger = wtlogger.createChild("Plugins");
      __name(getPluginContext, "getPluginContext");
    }
  });

  // plugins-context-provider:#plugin-context#src\plugins\chat-bubbles\index.ts
  var context, meta, definePlugin, definePluginSettings, logger2, patcher;
  var init_chat_bubbles = __esm({
    "plugins-context-provider:#plugin-context#src\\plugins\\chat-bubbles\\index.ts"() {
      init_shared();
      context = getPluginContext("chat-bubbles");
      ({ meta, definePlugin, definePluginSettings, logger: logger2, patcher } = context);
    }
  });

  // src/data/constants.ts
  var constants_exports = {};
  __export(constants_exports, {
    Devs: () => Devs,
    Links: () => Links
  });
  var Devs, Links;
  var init_constants = __esm({
    "src/data/constants.ts"() {
      "use strict";
      Devs = {
        Pylix: {
          name: "pylix",
          id: 492949202121261067n
        },
        C0C0B01: {
          name: "cocobo1",
          id: 767650984175992833n
        }
      };
      Links = {
        GITHUB: "github.com/C0C0B01/Lumi",
        DISCORD: "discord.gg/6cN7wKa8gp"
      };
    }
  });

  // globals:react-native
  var require_react_native = __commonJS({
    "globals:react-native"(exports, module3) {
      module3.exports = (init_depsModule(), __toCommonJS(depsModule_exports)).default["react-native"];
    }
  });

  // src/loader/modules/BubbleModule.ts
  var BubbleModule_exports = {};
  __export(BubbleModule_exports, {
    default: () => BubbleModule_default
  });
  var import_react_native, BubbleModule_default;
  var init_BubbleModule = __esm({
    "src/loader/modules/BubbleModule.ts"() {
      "use strict";
      import_react_native = __toESM(require_react_native(), 1);
      init_loader();
      BubbleModule_default = getModule({
        name: "BubbleModule",
        argumentProcessors: {
          configure: /* @__PURE__ */ __name((args) => [
            args[0],
            args[1],
            Number((0, import_react_native.processColor)(args[2]))
          ], "configure")
        }
      });
    }
  });

  // src/metro/common/libraries/Discord.ts
  var Discord_exports = {};
  __export(Discord_exports, {
    constants: () => constants,
    i18n: () => i18n,
    tokens: () => tokens,
    useToken: () => useToken
  });
  var constants, i18n, tokens, useToken;
  var init_Discord = __esm({
    "src/metro/common/libraries/Discord.ts"() {
      "use strict";
      init_lazy();
      init_wrappers();
      constants = lookupByProps("Fonts", "Permissions").asLazy((m2) => constants = m2);
      i18n = lookupByProps("Messages").asLazy((m2) => i18n = m2);
      tokens = lookupByProps("unsafe_rawColors", "colors").asLazy((m2) => tokens = m2);
      ({ useToken } = lazyDestructure(() => lookupByProps("useToken").asLazy((m2) => ({ useToken } = m2))));
    }
  });

  // src/metro/common/libraries/Flux.ts
  var Flux_exports = {};
  __export(Flux_exports, {
    Flux: () => Flux,
    FluxDispatcher: () => FluxDispatcher,
    FluxUtils: () => FluxUtils
  });
  var Flux, FluxDispatcher, FluxUtils;
  var init_Flux = __esm({
    "src/metro/common/libraries/Flux.ts"() {
      "use strict";
      init_wrappers();
      Flux = lookupByProps("connectStores").asLazy((m2) => Flux = m2);
      FluxDispatcher = lookupByProps("_interceptors").asLazy((m2) => FluxDispatcher = m2);
      FluxUtils = lookupByProps("useStateFromStores").asLazy((m2) => FluxUtils = m2);
    }
  });

  // src/metro/common/libraries/index.ts
  var libraries_exports = {};
  __export(libraries_exports, {
    AssetsRegistry: () => AssetsRegistry,
    Flux: () => Flux,
    FluxDispatcher: () => FluxDispatcher,
    FluxUtils: () => FluxUtils,
    NavigationNative: () => NavigationNative,
    React: () => React3,
    ReactNative: () => ReactNative2,
    Reanimated: () => Reanimated2,
    chroma: () => chroma,
    constants: () => constants,
    i18n: () => i18n,
    semver: () => semver,
    tokens: () => tokens,
    useToken: () => useToken
  });
  var semver, chroma, Reanimated2, NavigationNative, React3, ReactNative2, AssetsRegistry;
  var init_libraries = __esm({
    "src/metro/common/libraries/index.ts"() {
      "use strict";
      init_wrappers();
      init_Discord();
      init_Flux();
      semver = lookupByProps("parse", "clean").asLazy((m2) => semver = m2);
      chroma = lookupByProps("brewer").asLazy((m2) => chroma = m2);
      Reanimated2 = lookupByProps("useAnimatedStyle", "withSpring").asLazy((m2) => Reanimated2 = m2);
      NavigationNative = lookupByProps("NavigationContainer").asLazy((m2) => NavigationNative = m2);
      React3 = lookupByProps("createElement").asLazy((m2) => React3 = m2);
      ReactNative2 = lookupByProps("AppRegistry").asLazy((m2) => ReactNative2 = m2);
      AssetsRegistry = lookupByProps("getAssetByID").asLazy((m2) => AssetsRegistry = m2);
    }
  });

  // src/metro/common/stores.ts
  var stores_exports = {};
  __export(stores_exports, {
    ChannelStore: () => ChannelStore,
    DeveloperExperimentStore: () => DeveloperExperimentStore,
    EmojiStore: () => EmojiStore,
    GuildStore: () => GuildStore,
    PermissionStore: () => PermissionStore,
    ThemeStore: () => ThemeStore,
    ToastStore: () => ToastStore,
    UserStore: () => UserStore,
    byStoreName: () => byStoreName,
    getStore: () => getStore
  });
  function getStore(name, resolver) {
    return lookup(byStoreName(name, {
      checkEsmDefault: true
    })).asLazy(resolver);
  }
  var byStoreName, UserStore, ChannelStore, GuildStore, DeveloperExperimentStore, ToastStore, PermissionStore, EmojiStore, ThemeStore;
  var init_stores = __esm({
    "src/metro/common/stores.ts"() {
      "use strict";
      init_filters();
      init_api();
      byStoreName = createModuleFilter(withInteropOptions({
        filter: /* @__PURE__ */ __name(([name, m2]) => m2.constructor?.displayName === name && m2.getName() === name, "filter"),
        stringify: /* @__PURE__ */ __name((arg) => `byStoreName(${arg})`, "stringify")
      }));
      __name(getStore, "getStore");
      UserStore = getStore("UserStore", (m2) => UserStore = m2);
      ChannelStore = getStore("ChannelStore", (m2) => ChannelStore = m2);
      GuildStore = getStore("GuildStore", (m2) => GuildStore = m2);
      DeveloperExperimentStore = getStore("DeveloperExperimentStore", (m2) => DeveloperExperimentStore = m2);
      ToastStore = getStore("ToastStore", (m2) => ToastStore = m2);
      PermissionStore = getStore("PermissionStore", (m2) => PermissionStore = m2);
      EmojiStore = getStore("EmojiStore", (m2) => EmojiStore = m2);
      ThemeStore = getStore("ThemeStore", (m2) => ThemeStore = m2);
    }
  });

  // node_modules/zustand/esm/vanilla/shallow.mjs
  function shallow(valueA, valueB) {
    if (Object.is(valueA, valueB)) {
      return true;
    }
    if (typeof valueA !== "object" || valueA === null || typeof valueB !== "object" || valueB === null) {
      return false;
    }
    if (!isIterable(valueA) || !isIterable(valueB)) {
      return compareEntries({
        entries: /* @__PURE__ */ __name(() => Object.entries(valueA), "entries")
      }, {
        entries: /* @__PURE__ */ __name(() => Object.entries(valueB), "entries")
      });
    }
    if (hasIterableEntries(valueA) && hasIterableEntries(valueB)) {
      return compareEntries(valueA, valueB);
    }
    return compareIterables(valueA, valueB);
  }
  var isIterable, hasIterableEntries, compareEntries, compareIterables;
  var init_shallow = __esm({
    "node_modules/zustand/esm/vanilla/shallow.mjs"() {
      isIterable = /* @__PURE__ */ __name((obj) => Symbol.iterator in obj, "isIterable");
      hasIterableEntries = /* @__PURE__ */ __name((value) => (
        // HACK: avoid checking entries type
        "entries" in value
      ), "hasIterableEntries");
      compareEntries = /* @__PURE__ */ __name((valueA, valueB) => {
        var mapA = valueA instanceof Map ? valueA : new Map(valueA.entries());
        var mapB = valueB instanceof Map ? valueB : new Map(valueB.entries());
        if (mapA.size !== mapB.size) {
          return false;
        }
        for (var [key, value] of mapA) {
          if (!Object.is(value, mapB.get(key))) {
            return false;
          }
        }
        return true;
      }, "compareEntries");
      compareIterables = /* @__PURE__ */ __name((valueA, valueB) => {
        var iteratorA = valueA[Symbol.iterator]();
        var iteratorB = valueB[Symbol.iterator]();
        var nextA = iteratorA.next();
        var nextB = iteratorB.next();
        while (!nextA.done && !nextB.done) {
          if (!Object.is(nextA.value, nextB.value)) {
            return false;
          }
          nextA = iteratorA.next();
          nextB = iteratorB.next();
        }
        return !!nextA.done && !!nextB.done;
      }, "compareIterables");
      __name(shallow, "shallow");
    }
  });

  // node_modules/zustand/esm/react/shallow.mjs
  function useShallow(selector) {
    var prev = import_react2.default.useRef();
    return (state2) => {
      var next = selector(state2);
      return shallow(prev.current, next) ? prev.current : prev.current = next;
    };
  }
  var import_react2;
  var init_shallow2 = __esm({
    "node_modules/zustand/esm/react/shallow.mjs"() {
      import_react2 = __toESM(require_react(), 1);
      init_shallow();
      __name(useShallow, "useShallow");
    }
  });

  // node_modules/zustand/esm/shallow.mjs
  var init_shallow3 = __esm({
    "node_modules/zustand/esm/shallow.mjs"() {
      init_shallow();
      init_shallow2();
    }
  });

  // src/plugins/chat-bubbles/index.ts
  var chat_bubbles_exports = {};
  __export(chat_bubbles_exports, {
    default: () => chat_bubbles_default
  });
  var settings, chat_bubbles_default;
  var init_chat_bubbles2 = __esm({
    "src/plugins/chat-bubbles/index.ts"() {
      "use strict";
      init_chat_bubbles();
      init_constants();
      init_BubbleModule();
      init_filters2();
      init_libraries();
      init_stores();
      init_modules();
      init_shallow3();
      settings = definePluginSettings({
        avatarRadius: {
          type: "slider",
          label: "Avatar Curve",
          points: [
            0,
            3,
            6,
            9,
            12,
            15,
            18
          ],
          default: 12
        },
        bubbleChatRadius: {
          type: "slider",
          label: "Bubble Curve",
          points: [
            0,
            3,
            6,
            9,
            12,
            15,
            18
          ],
          default: 12
        },
        bubbleChatColor: {
          type: "string",
          label: "Bubble Color",
          placeholder: "#RRGGBBAA",
          description: "The color of the chat bubble (in #RRGGBBAA format). When empty, BG_BASE_TERTIARY is used.",
          validate: /* @__PURE__ */ __name((value) => /^#[0-9A-Fa-f]{8}$/.test(value), "validate")
        }
      });
      chat_bubbles_default = definePlugin({
        name: "ChatBubbles",
        description: "Adds customizable chat bubbles to the chat, similar to Flowercord.",
        authors: [
          Devs.Pylix
        ],
        start() {
          BubbleModule_default.hookBubbles();
          var getBubbleColor = /* @__PURE__ */ __name(() => {
            var userColor = settings.get().bubbleChatColor;
            if (userColor) return userColor;
            var token = tokens.colors.BG_BASE_TERTIARY;
            return tokens.internal.resolveSemanticColor(ThemeStore.theme, token);
          }, "getBubbleColor");
          var updateBubbleAppearance = /* @__PURE__ */ __name(() => {
            var { avatarRadius, bubbleChatRadius } = settings.get();
            var color = getBubbleColor();
            BubbleModule_default.configure(avatarRadius, bubbleChatRadius, color).catch(logger2.error);
          }, "updateBubbleAppearance");
          waitFor(byStoreName("ThemeStore"), (ThemeStore2) => {
            ThemeStore2.addChangeListener(updateBubbleAppearance);
          });
          waitFor(byProps([
            "_interceptors",
            "subscribe"
          ]), (FluxDispatcher2) => {
            for (var event of [
              "CACHE_LOADED",
              "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE"
            ]) {
              FluxDispatcher2.subscribe(event, updateBubbleAppearance);
            }
          });
          settings.subscribe((s) => [
            s.avatarRadius,
            s.bubbleChatRadius,
            s.bubbleChatColor
          ], () => updateBubbleAppearance(), {
            equalityFn: shallow
          });
        },
        cleanup() {
          BubbleModule_default.unhookBubbles();
          settings.unsubscribeAll();
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src\plugins\devtoolkit\index.ts
  var context2, meta2, definePlugin2, definePluginSettings2, logger3, patcher2;
  var init_devtoolkit = __esm({
    "plugins-context-provider:#plugin-context#src\\plugins\\devtoolkit\\index.ts"() {
      init_shared();
      context2 = getPluginContext("devtoolkit");
      ({ meta: meta2, definePlugin: definePlugin2, definePluginSettings: definePluginSettings2, logger: logger3, patcher: patcher2 } = context2);
    }
  });

  // src/plugins/devtoolkit/repl-client.ts
  function establishWebSocketConnection() {
    return _establishWebSocketConnection.apply(this, arguments);
  }
  function _establishWebSocketConnection() {
    _establishWebSocketConnection = _async_to_generator(function* () {
      var stop = false;
      var socket = null;
      while (!stop) {
        try {
          if (socket && socket.readyState === WebSocket.OPEN) {
            yield delay(5e3);
            continue;
          }
          socket = yield setupWebsocketConnection();
        } catch (error) {
          yield delay(2e3);
        }
      }
      return () => stop = true;
    });
    return _establishWebSocketConnection.apply(this, arguments);
  }
  var WS_HOST, WS_PORT, setupWebsocketConnection, setupLogForwarding, messageHandlers, handleIncomingMessage, storeResultInWindowContext, sendEvalResult;
  var init_repl_client = __esm({
    "src/plugins/devtoolkit/repl-client.ts"() {
      "use strict";
      init_async_to_generator();
      init_logger();
      init_dist();
      init_node_inspect_extracted();
      WS_HOST = "localhost";
      WS_PORT = 9090;
      setupWebsocketConnection = /* @__PURE__ */ __name(() => {
        return new Promise((resolve, reject) => {
          var socket = new WebSocket(`ws://${WS_HOST}:${WS_PORT}`);
          var handleOpen = /* @__PURE__ */ __name(() => {
            socket.send(JSON.stringify({
              type: "handshake",
              client: "Lumi",
              logBuffer: wtlogger.logs
            }));
            var removeLogPipe = setupLogForwarding(socket);
            socket.addEventListener("close", removeLogPipe);
            resolve(socket);
          }, "handleOpen");
          socket.addEventListener("error", (error) => {
            reject(new Error(`Failed to connect to WebSocket server: ${error}`));
          });
          socket.addEventListener("open", handleOpen);
          socket.addEventListener("message", ({ data }) => handleIncomingMessage(socket, data));
        });
      }, "setupWebsocketConnection");
      setupLogForwarding = /* @__PURE__ */ __name((socket) => {
        return wtlogger.pipe((args) => {
          socket.send(JSON.stringify({
            type: "log",
            details: args
          }));
        });
      }, "setupLogForwarding");
      messageHandlers = {
        handshake: /* @__PURE__ */ __name(() => {
        }, "handshake"),
        eval: /* @__PURE__ */ function() {
          var _ref = _async_to_generator(function* (socket, message) {
            var result;
            var error;
            try {
              result = yield globalEvalWithSourceUrl(message.code, `repl-${message.nonce}`);
              if (result?.await) {
                result.return = yield result.return;
              }
              result = result?.return;
            } catch (err) {
              error = err;
            }
            if (result) {
              storeResultInWindowContext(result, message.nonce);
            }
            sendEvalResult(socket, message.nonce, result, error, message.color);
          });
          return function(socket, message) {
            return _ref.apply(this, arguments);
          };
        }(),
        "get-global-hints": /* @__PURE__ */ __name((socket) => {
          var hints = [
            "wintry",
            "lookup",
            "lookupByProps",
            "lookupByName",
            "dk"
          ];
          socket.send(JSON.stringify({
            type: "global-hints",
            hints
          }));
        }, "get-global-hints")
      };
      handleIncomingMessage = /* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (socket, data) {
          var message = JSON.parse(data.toString());
          if (!message.type || !(message.type in messageHandlers)) return;
          var handler = messageHandlers[message.type];
          if (handler) {
            yield handler(socket, message);
          } else {
            console.error("Unknown message type", message);
          }
        });
        return /* @__PURE__ */ __name(function handleIncomingMessage2(socket, data) {
          return _ref.apply(this, arguments);
        }, "handleIncomingMessage");
      }();
      storeResultInWindowContext = /* @__PURE__ */ __name((result, nonce) => {
        Object.defineProperty(window, "___", {
          value: window.__,
          configurable: true
        });
        Object.defineProperty(window, "__", {
          value: window._,
          configurable: true
        });
        Object.defineProperty(window, "_", {
          value: result,
          configurable: true
        });
        Object.defineProperty(window, `_${nonce}`, {
          value: result,
          configurable: true
        });
      }, "storeResultInWindowContext");
      sendEvalResult = /* @__PURE__ */ __name((socket, nonce, result, error, colorize) => {
        socket.send(JSON.stringify({
          type: "eval-result",
          nonce,
          error: error ? inspect(error) : null,
          result: inspect(result, {
            customInspect: true,
            colors: colorize
          })
        }));
      }, "sendEvalResult");
      __name(establishWebSocketConnection, "establishWebSocketConnection");
      __name(_establishWebSocketConnection, "_establishWebSocketConnection");
    }
  });

  // src/plugins/devtoolkit/index.ts
  var devtoolkit_exports = {};
  __export(devtoolkit_exports, {
    default: () => devtoolkit_default
  });
  var devtoolkit_default;
  var init_devtoolkit2 = __esm({
    "src/plugins/devtoolkit/index.ts"() {
      "use strict";
      init_devtoolkit();
      init_constants();
      init_metro();
      init_wrappers();
      init_module();
      init_node_inspect_extracted();
      init_repl_client();
      devtoolkit_default = definePlugin2({
        name: "DevToolkit",
        description: "A toolkit for developers to ease the development process.",
        authors: [
          Devs.Pylix
        ],
        version: "1.0.0",
        start() {
          Object.defineProperty(SingleMetroModule.prototype, "l", {
            enumerable: false,
            get() {
              return this.asLazy();
            }
          });
          Object.assign(window, {
            lookup,
            lookupByProps,
            lookupByName,
            ...(init_filters2(), __toCommonJS(filters_exports2)),
            dk: {
              patcher: patcher2,
              snipe(mod, prop) {
                patcher2.after(mod, prop, (args, ret) => {
                  logger3.info(`Sniped ${prop}
${inspect({
                    args,
                    ret
                  })}`);
                  window._r = {
                    args,
                    ret
                  };
                });
              },
              shotgun(mod) {
                for (var key in mod) {
                  if (typeof mod[key] === "function") {
                    this.snipe(mod, key);
                  }
                }
              },
              wipe() {
                patcher2.reuse();
              }
            }
          });
          establishWebSocketConnection();
        },
        stop() {
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src\plugins\dummy\index.ts
  var context3, meta3, definePlugin3, definePluginSettings3, logger4, patcher3;
  var init_dummy = __esm({
    "plugins-context-provider:#plugin-context#src\\plugins\\dummy\\index.ts"() {
      init_shared();
      context3 = getPluginContext("dummy");
      ({ meta: meta3, definePlugin: definePlugin3, definePluginSettings: definePluginSettings3, logger: logger4, patcher: patcher3 } = context3);
    }
  });

  // src/plugins/dummy/index.ts
  var dummy_exports = {};
  __export(dummy_exports, {
    default: () => dummy_default
  });
  var settings2, dummy_default;
  var init_dummy2 = __esm({
    "src/plugins/dummy/index.ts"() {
      "use strict";
      init_dummy();
      init_constants();
      init_filters2();
      settings2 = definePluginSettings3({
        bunnyName: {
          type: "string",
          label: "Bunny Name",
          description: "Name of the bunny.",
          placeholder: "Fluffy",
          validate: /* @__PURE__ */ __name((value) => {
            return Boolean(value.match(/^[a-zA-Z]+$/));
          }, "validate")
        },
        winterCoat: {
          type: "boolean",
          label: "Winter Coat",
          description: "Does the bunny have a winter coat?",
          icon: "SnowflakeIcon"
        },
        favoriteSeason: {
          type: "select",
          label: "Favorite Season",
          description: "Select the bunny's favorite season.",
          options: [
            {
              label: "Spring",
              description: "The season of new beginnings.",
              value: "spring"
            },
            {
              label: "Summer",
              description: "The season of warmth and sunshine.",
              value: "summer"
            },
            {
              label: "Autumn",
              description: "The season of harvest and falling leaves.",
              value: "autumn"
            },
            {
              label: "Winter",
              description: "The season of snow and coziness.",
              value: "winter"
            }
          ]
        },
        hibernation: {
          type: "radio",
          label: "Hibernation",
          description: "Does the bunny hibernate during winter?",
          options: [
            {
              label: "Yes",
              description: "The bunny hibernates during winter.",
              value: "yes"
            },
            {
              label: "No",
              description: "The bunny stays active during winter.",
              value: "no"
            }
          ]
        },
        energyLevel: {
          type: "slider",
          label: "Energy Level",
          description: "Set the bunny's energy level.",
          points: [
            "0%",
            "25%",
            "50%",
            "75%",
            "100%"
          ],
          default: "50%"
        }
      });
      if (true) {
        window.sampleMethod = () => {
          return "this method is unpatched";
        };
      }
      dummy_default = definePlugin3({
        name: "Dummy",
        description: "Does literally nothing! Used for showcasing plugin APIs.",
        authors: [
          Devs.Pylix
        ],
        isAvailable: /* @__PURE__ */ __name(() => true, "isAvailable"),
        patches: [
          {
            id: "sample-patch",
            predicate: /* @__PURE__ */ __name(() => settings2.get().winterCoat === true, "predicate"),
            target: byProps([
              "toString"
            ]),
            patch(_, patcher11) {
              patcher11.after(window, "sampleMethod", () => {
                return "this method is patched";
              });
            }
          }
        ],
        start() {
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src\plugins\experiments\index.ts
  var context4, meta4, definePlugin4, definePluginSettings4, logger5, patcher4;
  var init_experiments = __esm({
    "plugins-context-provider:#plugin-context#src\\plugins\\experiments\\index.ts"() {
      init_shared();
      context4 = getPluginContext("experiments");
      ({ meta: meta4, definePlugin: definePlugin4, definePluginSettings: definePluginSettings4, logger: logger5, patcher: patcher4 } = context4);
    }
  });

  // src/plugins/experiments/index.ts
  var experiments_exports = {};
  __export(experiments_exports, {
    default: () => experiments_default
  });
  function reinitStore() {
    waitFor(byStoreName("DeveloperExperimentStore", {
      checkEsmDefault: true
    }), (DeveloperExperimentStore2) => {
      var unpatch2 = patcher4.detached.instead(Object, "defineProperties", () => {
      });
      DeveloperExperimentStore2.initialize();
      unpatch2();
    });
  }
  var experiments_default;
  var init_experiments2 = __esm({
    "src/plugins/experiments/index.ts"() {
      "use strict";
      init_constants();
      init_modules();
      init_experiments();
      init_stores();
      init_filters2();
      __name(reinitStore, "reinitStore");
      experiments_default = definePlugin4({
        name: "Experiments",
        description: "Exposes internal developer sections, allowing you to override Discord experiments.",
        authors: [
          Devs.Pylix
        ],
        patches: [
          {
            id: "is-staff-env",
            target: byProps([
              "isStaffEnv"
            ]),
            patch(module3, patcher11) {
              patcher11.instead(module3, "isStaffEnv", ([user]) => {
                if (user === UserStore.getCurrentUser()) return true;
              });
              reinitStore();
            }
          }
        ],
        cleanup() {
          reinitStore();
        }
      });
    }
  });

  // shims/jsxRuntime.ts
  function unproxyFirstArg(args) {
    if (!args[0]) {
      throw new Error("The first argument (Component) is falsy. Ensure that you are passing a valid component.");
    }
    var factory = getProxyFactory(args[0]);
    if (factory) args[0] = factory();
    return args;
  }
  var jsxRuntime, Fragment, jsx, jsxs;
  var init_jsxRuntime = __esm({
    "shims/jsxRuntime.ts"() {
      "use strict";
      init_filters2();
      init_api();
      init_lazy();
      jsxRuntime = lookup(byProps([
        "jsx",
        "jsxs"
      ])).asLazy((r4) => jsxRuntime = r4);
      __name(unproxyFirstArg, "unproxyFirstArg");
      Fragment = Symbol.for("react.fragment");
      jsx = /* @__PURE__ */ __name((...args) => jsxRuntime.jsx(...unproxyFirstArg(args)), "jsx");
      jsxs = /* @__PURE__ */ __name((...args) => jsxRuntime.jsxs(...unproxyFirstArg(args)), "jsxs");
    }
  });

  // plugins-context-provider:#plugin-context#src\plugins\expression-utils\index.tsx
  var context5, meta5, definePlugin5, definePluginSettings5, logger6, patcher5;
  var init_expression_utils = __esm({
    "plugins-context-provider:#plugin-context#src\\plugins\\expression-utils\\index.tsx"() {
      init_shared();
      context5 = getPluginContext("expression-utils");
      ({ meta: meta5, definePlugin: definePlugin5, definePluginSettings: definePluginSettings5, logger: logger6, patcher: patcher5 } = context5);
    }
  });

  // src/plugins/expression-utils/common.ts
  var CustomEmojiContent, MessageReactionsContent, GuildIcon, MessageEmojiActionSheet, MediaViewer, Surrogates, EmojiActionCreators;
  var init_common = __esm({
    "src/plugins/expression-utils/common.ts"() {
      "use strict";
      init_filters2();
      init_api();
      init_wrappers();
      CustomEmojiContent = lookup(byFilePath("modules/messages/native/emoji/CustomEmojiContent.tsx", {
        returnEsmDefault: false
      })).asLazy();
      MessageReactionsContent = lookup(byFilePath("modules/reactions/native/MessageReactionsContent.tsx", {
        returnEsmDefault: false
      })).asLazy();
      GuildIcon = lookup(byFilePath("uikit-native/GuildIcon.tsx")).asLazy((r4) => GuildIcon = r4);
      MessageEmojiActionSheet = lookup(byFilePath("modules/messages/native/emoji/MessageEmojiActionSheet.tsx")).asLazy((r4) => MessageEmojiActionSheet = r4);
      MediaViewer = lookupByProps("openMediaModal").asLazy();
      Surrogates = lookupByProps("convertSurrogateToName").asLazy();
      EmojiActionCreators = lookupByProps("uploadEmoji").asLazy();
    }
  });

  // src/plugins/expression-utils/stores/useEmojiAdderStore.ts
  var useEmojiAdderStore;
  var init_useEmojiAdderStore = __esm({
    "src/plugins/expression-utils/stores/useEmojiAdderStore.ts"() {
      "use strict";
      init_async_to_generator();
      init_esm();
      init_fetchAsDataUrl();
      init_common();
      useEmojiAdderStore = create((set2, get) => ({
        status: "idle",
        recentUploadDetails: null,
        customAlt: null,
        cleanup: /* @__PURE__ */ __name(() => set2({
          status: "idle",
          recentUploadDetails: null,
          customAlt: null
        }), "cleanup"),
        uploadEmoji: /* @__PURE__ */ function() {
          var _ref = _async_to_generator(function* (guildId, emojiNode) {
            set2({
              status: "pending",
              recentUploadDetails: null
            });
            try {
              var dataUrl = yield fetchAsDataUrl(emojiNode.src);
              yield EmojiActionCreators.uploadEmoji({
                guildId,
                image: dataUrl,
                name: get().customAlt ?? emojiNode.alt
              });
              set2({
                status: "success"
              });
              set2({
                recentUploadDetails: {
                  guildId,
                  emojiNode,
                  customAlt: get().customAlt ?? emojiNode.alt,
                  error: null
                }
              });
            } catch (error) {
              set2({
                status: "error"
              });
              set2({
                recentUploadDetails: {
                  guildId,
                  emojiNode,
                  customAlt: null,
                  error
                }
              });
            }
          });
          return function(guildId, emojiNode) {
            return _ref.apply(this, arguments);
          };
        }()
      }));
    }
  });

  // src/components/utils/styles.ts
  var styles_exports = {};
  __export(styles_exports, {
    TextStyleSheet: () => TextStyleSheet,
    ThemeContext: () => ThemeContext,
    createLegacyClassComponentStyles: () => createLegacyClassComponentStyles,
    createStyles: () => createStyles
  });
  function createStyles(sheet) {
    return lazyValue(() => Styles.createStyles(sheet));
  }
  function createLegacyClassComponentStyles(sheet) {
    return lazyValue(() => Styles.createLegacyClassComponentStyles(sheet));
  }
  var Styles, ThemeContext, TextStyleSheet;
  var init_styles = __esm({
    "src/components/utils/styles.ts"() {
      "use strict";
      init_lazy();
      init_wrappers();
      Styles = lookupByProps("createStyles").asLazy((m2) => Styles = m2);
      ({ ThemeContext } = lazyDestructure(() => lookupByProps("ThemeContext").load(), {
        hint: "object"
      }));
      ({ TextStyleSheet } = lazyDestructure(() => lookupByProps("TextStyleSheet").load()));
      __name(createStyles, "createStyles");
      __name(createLegacyClassComponentStyles, "createLegacyClassComponentStyles");
    }
  });

  // src/components/Wintry/Codeblock.tsx
  var Codeblock_exports = {};
  __export(Codeblock_exports, {
    default: () => Codeblock
  });
  function Codeblock({ selectable, style, children }) {
    if (!selectable) return /* @__PURE__ */ jsx(TextBasedCodeblock, {
      style,
      children
    });
    return import_react_native2.Platform.select({
      ios: /* @__PURE__ */ jsx(InputBasedCodeblock, {
        style,
        children
      }),
      default: /* @__PURE__ */ jsx(TextBasedCodeblock, {
        style,
        selectable: true,
        children
      })
    });
  }
  var import_react_native2, useStyles, InputBasedCodeblock, TextBasedCodeblock;
  var init_Codeblock = __esm({
    "src/components/Wintry/Codeblock.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native2 = __toESM(require_react_native(), 1);
      init_styles();
      init_libraries();
      useStyles = createStyles(() => ({
        codeblock: {
          fontFamily: constants.Fonts.CODE_NORMAL,
          fontSize: 12,
          textAlignVertical: "center",
          backgroundColor: tokens.colors.BACKGROUND_SECONDARY,
          color: tokens.colors.TEXT_NORMAL,
          borderWidth: 1,
          borderRadius: 12,
          borderColor: tokens.colors.BACKGROUND_TERTIARY,
          padding: 10
        }
      }));
      InputBasedCodeblock = /* @__PURE__ */ __name(({ style, children }) => /* @__PURE__ */ jsx(import_react_native2.TextInput, {
        editable: false,
        multiline: true,
        style: [
          useStyles().codeblock,
          style && style
        ],
        value: children
      }), "InputBasedCodeblock");
      TextBasedCodeblock = /* @__PURE__ */ __name(({ selectable, style, children }) => /* @__PURE__ */ jsx(import_react_native2.Text, {
        selectable,
        style: [
          useStyles().codeblock,
          style && style
        ],
        children
      }), "TextBasedCodeblock");
      __name(Codeblock, "Codeblock");
    }
  });

  // globals:react-native-reanimated
  var require_react_native_reanimated = __commonJS({
    "globals:react-native-reanimated"(exports, module3) {
      module3.exports = (init_depsModule(), __toCommonJS(depsModule_exports)).default["react-native-reanimated"];
    }
  });

  // src/api/assets.ts
  var assets_exports = {};
  __export(assets_exports, {
    filterAssets: () => filterAssets,
    findAsset: () => findAsset,
    findAssetId: () => findAssetId,
    getAssets: () => getAssets,
    iterateAssets: () => iterateAssets
  });
  function getAssets() {
    return arrayCache ??= Array.from(iterateAssets());
  }
  function* iterateAssets() {
    var yielded = /* @__PURE__ */ new Set();
    for (var state2 of moduleRegistry.values()) {
      if (state2.meta.isAsset) {
        var assetId = window.__r(state2.id);
        if (yielded.has(state2.id) || typeof assetId !== "number") {
          continue;
        }
        yield getAssetById(assetId);
        yielded.add(state2.id);
      }
    }
  }
  function getAssetById(id) {
    var asset = AssetsRegistry.getAssetByID(id);
    if (!asset) return asset;
    return Object.assign(asset, {
      id
    });
  }
  function findAsset(param) {
    if (typeof param === "number") return getAssetById(param);
    if (typeof param === "string" && _nameToAssetCache[param]) {
      return _nameToAssetCache[param];
    }
    for (var asset of iterateAssets()) {
      if (typeof param === "string" && asset.name === param) {
        _nameToAssetCache[param] = asset;
        return asset;
      }
      if (typeof param === "function" && param(asset)) {
        return asset;
      }
    }
  }
  function filterAssets(param) {
    var filteredAssets = [];
    for (var asset of iterateAssets()) {
      if (typeof param === "string" ? asset.name === param : param(asset)) {
        filteredAssets.push(asset);
      }
    }
    return filteredAssets;
  }
  function findAssetId(param) {
    return typeof param === "string" ? findAsset(param)?.id : findAsset(param)?.id;
  }
  var _nameToAssetCache, arrayCache;
  var init_assets = __esm({
    "src/api/assets.ts"() {
      "use strict";
      init_libraries();
      init_registry();
      _nameToAssetCache = {};
      __name(getAssets, "getAssets");
      __name(iterateAssets, "iterateAssets");
      __name(getAssetById, "getAssetById");
      __name(findAsset, "findAsset");
      __name(filterAssets, "filterAssets");
      __name(findAssetId, "findAssetId");
    }
  });

  // src/metro/common/icons.ts
  var icons_exports = {};
  __export(icons_exports, {
    ActivitiesIcon: () => ActivitiesIcon,
    ArrowSmallLeftIcon: () => ArrowSmallLeftIcon,
    CircleCheckIcon: () => CircleCheckIcon,
    CircleInformationIcon: () => CircleInformationIcon,
    CircleMinusIcon: () => CircleMinusIcon,
    CirclePlusIcon: () => CirclePlusIcon,
    DownloadIcon: () => DownloadIcon,
    PuzzlePieceIcon: () => PuzzlePieceIcon,
    WarningIcon: () => WarningIcon,
    WrenchIcon: () => WrenchIcon
  });
  function getIcon(name) {
    return lazyValue(() => lookupByProps(name).load()[name]);
  }
  var CirclePlusIcon, CircleMinusIcon, ArrowSmallLeftIcon, ActivitiesIcon, WrenchIcon, DownloadIcon, PuzzlePieceIcon, CircleInformationIcon, CircleCheckIcon, WarningIcon;
  var init_icons = __esm({
    "src/metro/common/icons.ts"() {
      "use strict";
      init_wrappers();
      init_lazy();
      __name(getIcon, "getIcon");
      CirclePlusIcon = getIcon("CirclePlusIcon");
      CircleMinusIcon = getIcon("CircleMinusIcon");
      ArrowSmallLeftIcon = getIcon("ArrowSmallLeftIcon");
      ActivitiesIcon = getIcon("ActivitiesIcon");
      WrenchIcon = getIcon("WrenchIcon");
      DownloadIcon = getIcon("DownloadIcon");
      PuzzlePieceIcon = getIcon("PuzzlePieceIcon");
      CircleInformationIcon = getIcon("CircleInformationIcon");
      CircleCheckIcon = getIcon("CircleCheckIcon");
      WarningIcon = getIcon("WarningIcon");
    }
  });

  // src/components/Discord/util.tsx
  var util_exports = {};
  __export(util_exports, {
    getComponentFromFilePath: () => getComponentFromFilePath,
    getComponentFromProps: () => getComponentFromProps
  });
  function getComponentFromProps(props, { singular = false } = {}) {
    var actualProps = typeof props === "string" ? [
      props
    ] : props;
    var ActualComponent = singular ? findSingular(actualProps[0]) : findProp(...actualProps);
    return ActualComponent;
  }
  function getComponentFromFilePath(path) {
    var ActualComponent = lookup(byFilePath(path)).asLazy();
    return ActualComponent;
  }
  var findSingular, findProp;
  var init_util = __esm({
    "src/components/Discord/util.tsx"() {
      "use strict";
      init_api();
      init_filters2();
      init_lazy();
      findSingular = /* @__PURE__ */ __name((prop) => lazyValue(() => lookup(bySingularProp(prop)).load()[prop]), "findSingular");
      findProp = /* @__PURE__ */ __name((...prop) => lazyValue(() => lookup(byProps(prop)).load()[prop[0]]), "findProp");
      __name(getComponentFromProps, "getComponentFromProps");
      __name(getComponentFromFilePath, "getComponentFromFilePath");
    }
  });

  // src/components/Discord/Button/Button.tsx
  var Button_exports = {};
  __export(Button_exports, {
    default: () => Button_default
  });
  var Button_default;
  var init_Button = __esm({
    "src/components/Discord/Button/Button.tsx"() {
      "use strict";
      init_util();
      Button_default = getComponentFromProps("Button", {
        singular: true
      });
    }
  });

  // src/components/Discord/Button/IconButton.tsx
  var IconButton_exports = {};
  __export(IconButton_exports, {
    default: () => IconButton_default
  });
  var IconButton_default;
  var init_IconButton = __esm({
    "src/components/Discord/Button/IconButton.tsx"() {
      "use strict";
      init_util();
      IconButton_default = getComponentFromProps("IconButton", {
        singular: true
      });
    }
  });

  // src/components/Discord/Card/Card.tsx
  var Card_exports = {};
  __export(Card_exports, {
    default: () => Card_default
  });
  var Card_default;
  var init_Card = __esm({
    "src/components/Discord/Card/Card.tsx"() {
      "use strict";
      init_util();
      Card_default = getComponentFromProps("Card");
    }
  });

  // src/components/Discord/Sheet/BottomSheet.tsx
  var BottomSheet_exports = {};
  __export(BottomSheet_exports, {
    default: () => BottomSheet_default
  });
  var BottomSheet_default;
  var init_BottomSheet = __esm({
    "src/components/Discord/Sheet/BottomSheet.tsx"() {
      "use strict";
      init_util();
      BottomSheet_default = getComponentFromProps("BottomSheet");
    }
  });

  // src/components/Discord/Stack/Stack.tsx
  var Stack_exports = {};
  __export(Stack_exports, {
    default: () => Stack_default
  });
  var Stack_default;
  var init_Stack = __esm({
    "src/components/Discord/Stack/Stack.tsx"() {
      "use strict";
      init_util();
      Stack_default = getComponentFromProps("Stack");
    }
  });

  // src/components/Discord/TableRow/RowButton.tsx
  var RowButton_exports = {};
  __export(RowButton_exports, {
    default: () => RowButton_default
  });
  var RowButton_default;
  var init_RowButton = __esm({
    "src/components/Discord/TableRow/RowButton.tsx"() {
      "use strict";
      init_util();
      RowButton_default = getComponentFromProps("RowButton");
    }
  });

  // src/components/Discord/TableRow/TableCheckboxRow.tsx
  var TableCheckboxRow_exports = {};
  __export(TableCheckboxRow_exports, {
    default: () => TableCheckboxRow_default
  });
  var TableCheckboxRow_default;
  var init_TableCheckboxRow = __esm({
    "src/components/Discord/TableRow/TableCheckboxRow.tsx"() {
      "use strict";
      init_util();
      TableCheckboxRow_default = getComponentFromProps("TableCheckboxRow");
    }
  });

  // src/components/Discord/TableRow/TableRadioGroup.tsx
  var TableRadioGroup_exports = {};
  __export(TableRadioGroup_exports, {
    default: () => TableRadioGroup_default
  });
  var TableRadioGroup_default;
  var init_TableRadioGroup = __esm({
    "src/components/Discord/TableRow/TableRadioGroup.tsx"() {
      "use strict";
      init_util();
      TableRadioGroup_default = getComponentFromProps("TableRadioGroup");
    }
  });

  // src/components/Discord/TableRow/TableRadioRow.tsx
  var TableRadioRow_exports = {};
  __export(TableRadioRow_exports, {
    default: () => TableRadioRow_default
  });
  var TableRadioRow_default;
  var init_TableRadioRow = __esm({
    "src/components/Discord/TableRow/TableRadioRow.tsx"() {
      "use strict";
      init_util();
      TableRadioRow_default = getComponentFromProps("TableRadioRow");
    }
  });

  // src/components/Discord/TableRow/TableRow.tsx
  var TableRow_exports = {};
  __export(TableRow_exports, {
    default: () => TableRow_default
  });
  var TableRow_default;
  var init_TableRow = __esm({
    "src/components/Discord/TableRow/TableRow.tsx"() {
      "use strict";
      init_util();
      TableRow_default = getComponentFromProps("TableRow");
    }
  });

  // src/components/Discord/TableRow/TableRowGroup.tsx
  var TableRowGroup_exports = {};
  __export(TableRowGroup_exports, {
    default: () => TableRowGroup_default
  });
  var TableRowGroup_default;
  var init_TableRowGroup = __esm({
    "src/components/Discord/TableRow/TableRowGroup.tsx"() {
      "use strict";
      init_util();
      TableRowGroup_default = getComponentFromProps("TableRowGroup");
    }
  });

  // src/components/Discord/TableRow/TableRowIcon.tsx
  var TableRowIcon_exports = {};
  __export(TableRowIcon_exports, {
    default: () => TableRowIcon_default
  });
  var TableRowIcon_default;
  var init_TableRowIcon = __esm({
    "src/components/Discord/TableRow/TableRowIcon.tsx"() {
      "use strict";
      init_util();
      TableRowIcon_default = getComponentFromProps("TableRowIcon");
    }
  });

  // src/components/Discord/TableRow/TableRowTrailingText.tsx
  var TableRowTrailingText_exports = {};
  __export(TableRowTrailingText_exports, {
    default: () => TableRowTrailingText_default
  });
  var TableRowTrailingText_default;
  var init_TableRowTrailingText = __esm({
    "src/components/Discord/TableRow/TableRowTrailingText.tsx"() {
      "use strict";
      init_util();
      TableRowTrailingText_default = getComponentFromProps("TableRowTrailingText");
    }
  });

  // src/components/Discord/TableRow/TableSwitchRow.tsx
  var TableSwitchRow_exports = {};
  __export(TableSwitchRow_exports, {
    default: () => TableSwitchRow_default
  });
  var TableSwitchRow_default;
  var init_TableSwitchRow = __esm({
    "src/components/Discord/TableRow/TableSwitchRow.tsx"() {
      "use strict";
      init_util();
      TableSwitchRow_default = getComponentFromProps("TableSwitchRow");
    }
  });

  // src/components/Discord/Text/Text.tsx
  var Text_exports = {};
  __export(Text_exports, {
    default: () => Text_default
  });
  var Text_default;
  var init_Text = __esm({
    "src/components/Discord/Text/Text.tsx"() {
      "use strict";
      init_util();
      Text_default = getComponentFromProps([
        "Text",
        "LegacyText"
      ]);
    }
  });

  // src/components/Discord/TextInput/TextInput.tsx
  var TextInput_exports = {};
  __export(TextInput_exports, {
    default: () => TextInput_default
  });
  var TextInput_default;
  var init_TextInput = __esm({
    "src/components/Discord/TextInput/TextInput.tsx"() {
      "use strict";
      init_util();
      TextInput_default = getComponentFromProps("TextInput", {
        singular: true
      });
    }
  });

  // src/components/Discord/index.tsx
  var Discord_exports2 = {};
  __export(Discord_exports2, {
    BottomSheet: () => BottomSheet_default,
    Button: () => Button_default,
    Card: () => Card_default,
    IconButton: () => IconButton_default,
    RowButton: () => RowButton_default,
    Stack: () => Stack_default,
    TableCheckboxRow: () => TableCheckboxRow_default,
    TableRadioGroup: () => TableRadioGroup_default,
    TableRadioRow: () => TableRadioRow_default,
    TableRow: () => TableRow_default,
    TableRowGroup: () => TableRowGroup_default,
    TableRowIcon: () => TableRowIcon_default,
    TableRowTrailingText: () => TableRowTrailingText_default,
    TableSwitchRow: () => TableSwitchRow_default,
    Text: () => Text_default,
    TextInput: () => TextInput_default
  });
  var init_Discord2 = __esm({
    "src/components/Discord/index.tsx"() {
      "use strict";
      init_Button();
      init_IconButton();
      init_Card();
      init_BottomSheet();
      init_Stack();
      init_RowButton();
      init_TableCheckboxRow();
      init_TableRadioGroup();
      init_TableRadioRow();
      init_TableRow();
      init_TableRowGroup();
      init_TableRowIcon();
      init_TableRowTrailingText();
      init_TableSwitchRow();
      init_Text();
      init_TextInput();
    }
  });

  // src/plugins/expression-utils/components/UploadStatusView.tsx
  function getErrorText(error) {
    if (isError(error) && error.stack) {
      return error.stack;
    }
    if (error != null && typeof error === "object") {
      try {
        if ("body" in error && "ok" in error && error.ok === false) {
          var response = error;
          return response.body.name.join("/");
        }
        return JSON.stringify(error, null, 4);
      } catch (e3) {
      }
    }
    return String(error);
  }
  function ToastText({ children }) {
    return /* @__PURE__ */ jsx(Text_default, {
      numberOfLines: 1,
      ellipsizeMode: "tail",
      style: {
        maxWidth: "40%"
      },
      variant: "text-md/semibold",
      children
    });
  }
  function UploadStatusView() {
    var styles = useStyles2();
    var [status, recentUploadDetails] = useEmojiAdderStore(useShallow((s) => [
      s.status,
      s.recentUploadDetails
    ]));
    if (status === "idle" && !recentUploadDetails) {
      return null;
    }
    var { guildId, emojiNode, customAlt, error } = recentUploadDetails ?? {};
    var guild = GuildStore.getGuild(guildId);
    return /* @__PURE__ */ jsxs(import_react_native_reanimated.default.View, {
      layout: import_react_native_reanimated.CurvedTransition,
      style: styles.container,
      children: [
        status === "pending" && /* @__PURE__ */ jsxs(import_react_native3.View, {
          style: styles.rowContainer,
          children: [
            /* @__PURE__ */ jsx(import_react_native3.ActivityIndicator, {
              size: "small"
            }),
            /* @__PURE__ */ jsx(Text_default, {
              variant: "text-lg/semibold",
              children: "Uploading emoji..."
            })
          ]
        }),
        status === "success" && /* @__PURE__ */ jsxs(import_react_native3.View, {
          style: styles.centeredContainer,
          children: [
            /* @__PURE__ */ jsxs(import_react_native3.View, {
              style: styles.rowContainer,
              children: [
                /* @__PURE__ */ jsx(import_react_native3.Image, {
                  source: findAssetId("CheckmarkLargeBoldIcon"),
                  style: styles.checkmarkIcon
                }),
                /* @__PURE__ */ jsx(Text_default, {
                  variant: "text-lg/semibold",
                  children: "Upload Successful"
                })
              ]
            }),
            emojiNode && /* @__PURE__ */ jsxs(import_react_native3.View, {
              style: styles.rowContainer,
              children: [
                /* @__PURE__ */ jsx(GuildIcon, {
                  guild,
                  size: "XSMALL",
                  animate: false
                }),
                /* @__PURE__ */ jsx(ToastText, {
                  children: guild.name
                }),
                /* @__PURE__ */ jsx(ArrowSmallLeftIcon, {}),
                /* @__PURE__ */ jsx(import_react_native3.Image, {
                  source: {
                    uri: emojiNode.src
                  },
                  style: styles.emojiImage
                }),
                /* @__PURE__ */ jsx(ToastText, {
                  children: customAlt && customAlt !== emojiNode.alt ? `:${customAlt}: (${emojiNode.alt})` : `:${emojiNode.alt}:`
                })
              ]
            })
          ]
        }),
        status === "error" && error != null && /* @__PURE__ */ jsxs(import_react_native3.View, {
          style: styles.centeredContainer,
          children: [
            /* @__PURE__ */ jsxs(import_react_native3.View, {
              style: styles.rowContainer,
              children: [
                /* @__PURE__ */ jsx(import_react_native3.Image, {
                  source: findAssetId("XLargeBoldIcon"),
                  style: styles.xIcon
                }),
                /* @__PURE__ */ jsx(Text_default, {
                  variant: "text-lg/semibold",
                  children: "Upload Failed"
                })
              ]
            }),
            /* @__PURE__ */ jsx(Codeblock, {
              children: `${getErrorText(error).slice(0, 300)}...`
            })
          ]
        })
      ]
    });
  }
  var import_react_native3, import_react_native_reanimated, useStyles2;
  var init_UploadStatusView = __esm({
    "src/plugins/expression-utils/components/UploadStatusView.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Codeblock();
      init_styles();
      import_react_native3 = __toESM(require_react_native(), 1);
      import_react_native_reanimated = __toESM(require_react_native_reanimated(), 1);
      init_common();
      init_shallow3();
      init_useEmojiAdderStore();
      init_isError();
      init_assets();
      init_icons();
      init_stores();
      init_Discord2();
      init_libraries();
      useStyles2 = createStyles(() => ({
        checkmarkIcon: {
          width: 24,
          height: 24,
          tintColor: tokens.colors.TEXT_POSITIVE
        },
        xIcon: {
          width: 24,
          height: 24,
          tintColor: tokens.colors.TEXT_DANGER
        },
        container: {
          paddingVertical: 8,
          paddingHorizontal: 16,
          justifyContent: "center",
          alignItems: "center"
        },
        rowContainer: {
          gap: 8,
          flexDirection: "row",
          alignItems: "center"
        },
        centeredContainer: {
          gap: 8,
          alignItems: "center"
        },
        emojiImage: {
          width: 24,
          height: 24
        }
      }));
      __name(getErrorText, "getErrorText");
      __name(ToastText, "ToastText");
      __name(UploadStatusView, "UploadStatusView");
    }
  });

  // src/components/utils/sheets.ts
  var sheets_exports = {};
  __export(sheets_exports, {
    hideSheet: () => hideSheet,
    showSheet: () => showSheet
  });
  function showSheet(key, lazyImport, props, displayMode = "replaceAll") {
    var importPromise = "then" in lazyImport ? lazyImport : Promise.resolve({
      default: lazyImport
    });
    SheetActionCreators.openLazy(importPromise, key, props ?? {}, displayMode);
  }
  function hideSheet(key) {
    SheetActionCreators.hideActionSheet(key);
  }
  var SheetActionCreators;
  var init_sheets = __esm({
    "src/components/utils/sheets.ts"() {
      "use strict";
      init_wrappers();
      SheetActionCreators = lookupByProps("openLazy", "hideActionSheet").asLazy((m2) => SheetActionCreators = m2);
      __name(showSheet, "showSheet");
      __name(hideSheet, "hideSheet");
    }
  });

  // src/plugins/expression-utils/utils/useSlots.tsx
  function useSlots(guild, emojiNode) {
    var currentAlt = useEmojiAdderStore((s) => s.customAlt) || emojiNode.alt;
    var guildEmojis = FluxUtils.useStateFromStores([
      EmojiStore
    ], () => EmojiStore.getGuilds()[guild.id]?.emojis ?? []);
    return (0, import_react3.useMemo)(() => {
      var maxSlots = getMaxEmojiSlots(guild);
      var isAnimated = emojiNode.src.includes(".gif");
      var currentCount = guildEmojis.filter((e3) => e3?.animated === isAnimated).length;
      return {
        hasDuplicate: guildEmojis.some((e3) => e3.name === currentAlt),
        availableSlots: maxSlots - currentCount,
        maxSlots,
        isAnimated
      };
    }, [
      currentAlt,
      guild,
      emojiNode,
      guildEmojis
    ]);
  }
  var import_react3, getMaxEmojiSlots;
  var init_useSlots = __esm({
    "src/plugins/expression-utils/utils/useSlots.tsx"() {
      "use strict";
      import_react3 = __toESM(require_react(), 1);
      init_useEmojiAdderStore();
      init_stores();
      init_Flux();
      init_wrappers();
      init_lazy();
      ({ getMaxEmojiSlots } = lazyDestructure(() => lookupByProps("getMaxEmojiSlots", "getAvailableStickerSlotCount").load()));
      __name(useSlots, "useSlots");
    }
  });

  // src/plugins/expression-utils/components/ServerRow.tsx
  function ServerRow({ start, end, guild, emojiNode }) {
    var [status, uploadEmoji] = useEmojiAdderStore(useShallow((s) => [
      s.status,
      s.uploadEmoji
    ]));
    var { isAnimated, availableSlots, maxSlots, hasDuplicate } = useSlots(guild, emojiNode);
    return /* @__PURE__ */ jsx(TableRow_default, {
      label: guild.name,
      subLabel: `${availableSlots}/${maxSlots}${isAnimated ? " animated" : " static"} slots available ${hasDuplicate ? "(has duplicate name)" : ""}`,
      disabled: status === "pending" || availableSlots <= 0,
      icon: /* @__PURE__ */ jsx(GuildIcon, {
        guild,
        size: "NORMAL",
        animate: false
      }),
      onPress: /* @__PURE__ */ __name(() => {
        import_react_native4.Keyboard.dismiss();
        uploadEmoji(guild.id, emojiNode);
      }, "onPress"),
      start,
      end
    });
  }
  var import_react_native4;
  var init_ServerRow = __esm({
    "src/plugins/expression-utils/components/ServerRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native4 = __toESM(require_react_native(), 1);
      init_useEmojiAdderStore();
      init_shallow3();
      init_common();
      init_useSlots();
      init_Discord2();
      __name(ServerRow, "ServerRow");
    }
  });

  // globals:@shopify/flash-list
  var require_flash_list = __commonJS({
    "globals:@shopify/flash-list"(exports, module3) {
      module3.exports = (init_depsModule(), __toCommonJS(depsModule_exports)).default["@shopify/flash-list"];
    }
  });

  // src/plugins/expression-utils/components/EmoteStealerActionSheet.tsx
  function EmoteStealerActionSheet({ emojiNode }) {
    var customAlt = useEmojiAdderStore((s) => s.customAlt);
    var guilds = Object.values(GuildStore.getGuilds()).filter((guild) => PermissionStore.can(constants.Permissions.MANAGE_GUILD_EXPRESSIONS, guild));
    return /* @__PURE__ */ jsx(BottomSheet_default, {
      contentStyles: {
        paddingHorizontal: 16
      },
      children: /* @__PURE__ */ jsxs(import_react_native5.ScrollView, {
        style: {
          gap: 12
        },
        children: [
          /* @__PURE__ */ jsx(import_react_native5.View, {
            style: {
              alignItems: "center"
            },
            children: /* @__PURE__ */ jsxs(Text_default, {
              variant: "heading-lg/bold",
              children: [
                "Clone :",
                emojiNode.alt,
                ":",
                "  ",
                /* @__PURE__ */ jsx(import_react_native5.Image, {
                  resizeMode: "contain",
                  source: {
                    uri: emojiNode.src
                  },
                  style: {
                    width: 24,
                    height: 24
                  }
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx(import_flash_list.FlashList, {
            style: {
              flex: 1
            },
            estimatedItemSize: 63,
            ListHeaderComponent: /* @__PURE__ */ jsx(import_react_native5.View, {
              style: {
                gap: 12,
                paddingVertical: 12
              },
              children: /* @__PURE__ */ jsx(TextInput_default, {
                label: "Emoji Name",
                description: "The name of the emoji to be uploaded",
                placeholder: emojiNode.alt,
                value: customAlt ?? emojiNode.alt,
                onChange: /* @__PURE__ */ __name((text) => useEmojiAdderStore.setState({
                  customAlt: text
                }), "onChange")
              })
            }),
            contentContainerStyle: {
              paddingBottom: 24
            },
            data: guilds,
            keyboardShouldPersistTaps: "handled",
            keyExtractor: /* @__PURE__ */ __name((x) => x.id, "keyExtractor"),
            renderItem: /* @__PURE__ */ __name(({ item, index }) => /* @__PURE__ */ jsx(ServerRow, {
              start: index === 0,
              end: index === guilds.length - 1,
              guild: item,
              emojiNode
            }), "renderItem")
          })
        ]
      })
    });
  }
  var import_react_native5, import_flash_list;
  var init_EmoteStealerActionSheet = __esm({
    "src/plugins/expression-utils/components/EmoteStealerActionSheet.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native5 = __toESM(require_react_native(), 1);
      init_useEmojiAdderStore();
      init_ServerRow();
      init_stores();
      import_flash_list = __toESM(require_flash_list(), 1);
      init_BottomSheet();
      init_Discord2();
      init_libraries();
      __name(EmoteStealerActionSheet, "EmoteStealerActionSheet");
    }
  });

  // src/plugins/expression-utils/components/StealButtons.tsx
  function StealButtons({ emojiNode, style }) {
    return /* @__PURE__ */ jsxs(import_react_native6.View, {
      style: [
        {
          gap: 8
        },
        style
      ],
      children: [
        /* @__PURE__ */ jsx(Button_default, {
          text: "Clone",
          onPress: /* @__PURE__ */ __name(() => {
            useEmojiAdderStore.getState().cleanup();
            showSheet("EmoteStealerActionSheet", EmoteStealerActionSheet, {
              emojiNode
            }, "stack");
          }, "onPress")
        }),
        /* @__PURE__ */ jsx(Button_default, {
          text: "Copy URL",
          onPress: /* @__PURE__ */ __name(() => copyToClipboard(emojiNode.src), "onPress")
        })
      ]
    });
  }
  var import_react_native6;
  var init_StealButtons = __esm({
    "src/plugins/expression-utils/components/StealButtons.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_sheets();
      import_react_native6 = __toESM(require_react_native(), 1);
      init_useEmojiAdderStore();
      init_clipboard();
      init_EmoteStealerActionSheet();
      init_Button();
      __name(StealButtons, "StealButtons");
    }
  });

  // src/plugins/expression-utils/utils/openMediaModal.tsx
  function getSizeAsync(src) {
    return new Promise((resolve, reject) => {
      import_react_native7.Image.getSize(src, (width, height) => {
        resolve([
          width,
          height
        ]);
      }, reject);
    });
  }
  function openMediaModal(src) {
    return _openMediaModal.apply(this, arguments);
  }
  function _openMediaModal() {
    _openMediaModal = _async_to_generator(function* (src) {
      var [width, height] = yield getSizeAsync(src);
      var { width: screenWidth, height: screenHeight } = import_react_native7.Dimensions.get("window");
      hideSheet("MessageEmojiActionSheet");
      MediaViewer.openMediaModal({
        initialSources: [
          {
            uri: src,
            sourceURI: src,
            width,
            height
          }
        ],
        initialIndex: 0,
        originLayout: {
          width: 128,
          height: 128,
          x: screenWidth / 2 - 64,
          y: screenHeight - 64,
          resizeMode: "fill"
        }
      });
    });
    return _openMediaModal.apply(this, arguments);
  }
  var import_react_native7;
  var init_openMediaModal = __esm({
    "src/plugins/expression-utils/utils/openMediaModal.tsx"() {
      "use strict";
      init_async_to_generator();
      init_sheets();
      import_react_native7 = __toESM(require_react_native(), 1);
      init_common();
      __name(getSizeAsync, "getSizeAsync");
      __name(openMediaModal, "openMediaModal");
      __name(_openMediaModal, "_openMediaModal");
    }
  });

  // plugins-context-provider:#plugin-context#src\plugins\expression-utils\utils\openEmojiActionSheet.tsx
  var context6, meta6, definePlugin6, definePluginSettings6, logger7, patcher6;
  var init_openEmojiActionSheet = __esm({
    "plugins-context-provider:#plugin-context#src\\plugins\\expression-utils\\utils\\openEmojiActionSheet.tsx"() {
      init_shared();
      context6 = getPluginContext("expression-utils");
      ({ meta: meta6, definePlugin: definePlugin6, definePluginSettings: definePluginSettings6, logger: logger7, patcher: patcher6 } = context6);
    }
  });

  // src/plugins/expression-utils/utils/openEmojiActionSheet.tsx
  function openEmojiActionSheet({ id, name, animated }) {
    try {
      showSheet("MessageEmojiActionSheet", MessageEmojiActionSheet, {
        emojiNode: id ? {
          id,
          alt: name,
          src: `https://cdn.discordapp.com/emojis/${id}.${animated ? "gif" : "webp"}?size=128`
        } : {
          content: Surrogates.convertSurrogateToName(name),
          surrogate: name
        }
      }, "stack");
    } catch (err) {
      logger7.error(`Failed to open emoji action sheet: ${err}`);
    }
  }
  var init_openEmojiActionSheet2 = __esm({
    "src/plugins/expression-utils/utils/openEmojiActionSheet.tsx"() {
      "use strict";
      init_sheets();
      init_common();
      init_openEmojiActionSheet();
      __name(openEmojiActionSheet, "openEmojiActionSheet");
    }
  });

  // src/components/Discord/experimental/PressableScale.tsx
  var PressableScale_exports = {};
  __export(PressableScale_exports, {
    default: () => PressableScale_default
  });
  var PressableScale_default;
  var init_PressableScale = __esm({
    "src/components/Discord/experimental/PressableScale.tsx"() {
      "use strict";
      init_util();
      PressableScale_default = getComponentFromProps("PressableScale");
    }
  });

  // src/plugins/expression-utils/index.tsx
  var expression_utils_exports = {};
  __export(expression_utils_exports, {
    default: () => expression_utils_default
  });
  function addStealButton(emojiNode, element) {
    var insertAtIndex = /* @__PURE__ */ __name((container, index, paddingTop) => {
      container.splice(index, 0, /* @__PURE__ */ jsx(StealButtons, {
        style: {
          paddingTop
        },
        emojiNode
      }, "steal-button"));
    }, "insertAtIndex");
    var findLastElementIndex = /* @__PURE__ */ __name((tree, predicate) => {
      var container = findInReactTree(tree, (c2) => c2?.find?.(predicate));
      return [
        container,
        container?.findLastIndex?.(predicate) ?? -1
      ];
    }, "findLastElementIndex");
    var [buttonContainer, buttonIndex] = findLastElementIndex(element, (c2) => c2?.type?.name === "Button");
    if (buttonIndex >= 0) {
      insertAtIndex(buttonContainer, buttonIndex + 1, 8);
      return;
    }
    var [dividerContainer, dividerIndex] = findLastElementIndex(element, (c2) => c2?.type === Fragment && c2.props.children[0].type.name === "FormDivider");
    if (dividerIndex >= 0) {
      insertAtIndex(dividerContainer, dividerIndex - 1, 12);
      return;
    }
    element.props.children.push(/* @__PURE__ */ jsx(StealButtons, {
      style: {
        paddingTop: 12
      },
      emojiNode
    }, "steal-button"));
  }
  function makeEmojiIconPressable(emojiNode, element) {
    var emojiDetailsChildren = findInReactTree(element, (c2) => c2[0]?.type?.name === "FastImageAndroid");
    if (!emojiDetailsChildren) return;
    var emojiDetails = emojiDetailsChildren[0];
    emojiDetailsChildren[0] = /* @__PURE__ */ jsx(PressableScale_default, {
      onPress: /* @__PURE__ */ __name(() => {
        openMediaModal(emojiNode.src);
      }, "onPress"),
      children: emojiDetails
    });
  }
  var import_react4, expression_utils_default;
  var init_expression_utils2 = __esm({
    "src/plugins/expression-utils/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_expression_utils();
      init_constants();
      init_objects();
      import_react4 = __toESM(require_react(), 1);
      init_jsxRuntime();
      init_useEmojiAdderStore();
      init_UploadStatusView();
      init_StealButtons();
      init_openMediaModal();
      init_openEmojiActionSheet2();
      init_PressableScale();
      init_toasts();
      init_filters2();
      __name(addStealButton, "addStealButton");
      __name(makeEmojiIconPressable, "makeEmojiIconPressable");
      expression_utils_default = definePlugin5({
        name: "ExpressionUtils",
        description: "Adds more emotes and stickers utilities such as cloning or copying links.",
        authors: [
          Devs.Pylix
        ],
        patches: [
          {
            id: "emoji-sheet",
            target: byFilePath("modules/messages/native/emoji/CustomEmojiContent.tsx", {
              returnEsmDefault: false
            }),
            patch(module3, patcher11) {
              patcher11.after(module3, "default", ([{ emojiNode }], res) => {
                if (!emojiNode) return;
                addStealButton(emojiNode, res);
                makeEmojiIconPressable(emojiNode, res);
              });
            }
          },
          {
            id: "reaction-sheet",
            target: byFilePath("modules/reactions/native/MessageReactionsContent.tsx", {
              returnEsmDefault: false
            }),
            patch(module3, patcher11) {
              patcher11.after(module3, "MessageReactionsContent", (_, { props }) => {
                var unpatchReactionsHeader = patcher11.detached.after(props.header, "type", (_2, res) => {
                  (0, import_react4.useEffect)(() => unpatchReactionsHeader, []);
                  try {
                    var tabsRow = res.props.children[0];
                    var { tabs, onSelect } = tabsRow.props;
                    tabsRow.props.tabs = tabs.map((tab, i2) => /* @__PURE__ */ jsx(PressableScale_default, {
                      onPress: /* @__PURE__ */ __name(() => onSelect(tab.props.index), "onPress"),
                      onLongPress: /* @__PURE__ */ __name(() => {
                        var { emoji } = tab.props.reaction;
                        openEmojiActionSheet(emoji);
                      }, "onLongPress"),
                      children: tab
                    }, i2));
                  } catch (e3) {
                    logger6.error`Failed to patch reaction header: ${e3}`;
                  }
                });
              });
            }
          }
        ],
        start() {
          patcher5.attachDisposer(useEmojiAdderStore.subscribe((s, p2) => {
            var toastController = showToast({
              id: "expression-utils-upload-status",
              render: UploadStatusView
            }).hide();
            if (s.status !== "idle" && s.status !== p2.status || s.recentUploadDetails && s.recentUploadDetails !== p2.recentUploadDetails) {
              toastController.update({
                duration: Number.MAX_SAFE_INTEGER
              });
              if (s.status === "success" || s.status === "error") {
                toastController.update({
                  duration: 3e3
                });
              }
            }
            if (s.status === "idle") {
              toastController.hide();
            }
          }));
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src\plugins\_api\settings\index.tsx
  var context7, meta7, definePlugin7, definePluginSettings7, logger8, patcher7;
  var init_settings = __esm({
    "plugins-context-provider:#plugin-context#src\\plugins\\_api\\settings\\index.tsx"() {
      init_shared();
      context7 = getPluginContext("settings");
      ({ meta: meta7, definePlugin: definePlugin7, definePluginSettings: definePluginSettings7, logger: logger8, patcher: patcher7 } = context7);
    }
  });

  // src/api/settings.ts
  var settings_exports = {};
  __export(settings_exports, {
    _registeredSettingItems: () => _registeredSettingItems,
    _registeredSettingSections: () => _registeredSettingSections,
    registerSettingRenderer: () => registerSettingRenderer,
    registerSettingSection: () => registerSettingSection
  });
  function registerSettingRenderer(name, item) {
    _registeredSettingItems[name] = item;
    return name;
  }
  function registerSettingSection(section) {
    _registeredSettingSections.push(section);
  }
  var _registeredSettingItems, _registeredSettingSections;
  var init_settings2 = __esm({
    "src/api/settings.ts"() {
      "use strict";
      _registeredSettingItems = {};
      _registeredSettingSections = [];
      __name(registerSettingRenderer, "registerSettingRenderer");
      __name(registerSettingSection, "registerSettingSection");
    }
  });

  // src/components/Wintry/Tag.tsx
  var Tag_exports = {};
  __export(Tag_exports, {
    default: () => Tag
  });
  function Tag({ text }) {
    var color = useToken(tokens.colors.BG_BRAND);
    return /* @__PURE__ */ jsx(import_react_native8.View, {
      style: {
        backgroundColor: color,
        borderRadius: 18,
        paddingVertical: 4,
        paddingHorizontal: 8
      },
      children: /* @__PURE__ */ jsx(Text_default, {
        variant: "eyebrow",
        color: "white",
        children: text
      })
    });
  }
  var import_react_native8;
  var init_Tag = __esm({
    "src/components/Wintry/Tag.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native8 = __toESM(require_react_native(), 1);
      init_Discord2();
      init_libraries();
      __name(Tag, "Tag");
    }
  });

  // build-info:#build-info
  var revision, branch, remote, version;
  var init_build_info = __esm({
    "build-info:#build-info"() {
      revision = "ae37b98cc691a36cc9ca6745b6964e440893fcf4";
      branch = "main";
      remote = "C0C0B01/Lumi";
      version = "v0.0.1";
    }
  });

  // src/debug/info.ts
  var info_exports = {};
  __export(info_exports, {
    getDebugInfo: () => getDebugInfo,
    getVersions: () => getVersions
  });
  function getVersions() {
    var hermesProps = window.HermesInternal.getRuntimeProperties();
    var rnVer = import_react_native9.Platform.constants.reactNativeVersion;
    var rnBranch = hermesProps["OSS Release Version"].replace(/^for /, "");
    return {
      bunny: {
        shortRevision: revision.slice(0, 7),
        revision,
        branch,
        remote,
        version
      },
      discord: {
        version: NativeClientInfoModule.Version,
        build: NativeClientInfoModule.Build
      },
      hermes: {
        buildType: hermesProps.Build,
        bytecodeVersion: hermesProps["Bytecode Version"]
      },
      react: {
        version: import_react5.default.version
      },
      reactNative: {
        version: `${rnVer.major}.${rnVer.minor}.${rnVer.patch}`,
        branch: rnBranch
      }
    };
  }
  function getAndroidDebugInfo() {
    var PlatformConstants = import_react_native9.Platform.constants;
    return {
      os: {
        name: "Android",
        version: PlatformConstants.Release,
        sdk: PlatformConstants.Version
      },
      device: {
        manufacturer: PlatformConstants.Manufacturer,
        brand: PlatformConstants.Brand,
        model: PlatformConstants.Model
      }
    };
  }
  function getDebugInfo() {
    return {
      ...getVersions(),
      ...import_react_native9.Platform.select({
        android: getAndroidDebugInfo()
      })
    };
  }
  var import_react5, import_react_native9;
  var init_info = __esm({
    "src/debug/info.ts"() {
      "use strict";
      init_build_info();
      init_native();
      import_react5 = __toESM(require_react(), 1);
      import_react_native9 = __toESM(require_react_native(), 1);
      __name(getVersions, "getVersions");
      __name(getAndroidDebugInfo, "getAndroidDebugInfo");
      __name(getDebugInfo, "getDebugInfo");
    }
  });

  // node_modules/typesafe-i18n/runtime/esm/parser/src/basic.mjs
  var removeEmptyValues, trimAllValues, parseArgumentPart, isBasicPluralPart, parsePluralPart, REGEX_SWITCH_CASE, parseCases, REGEX_BRACKETS_SPLIT, removeOuterBrackets, parseRawText;
  var init_basic = __esm({
    "node_modules/typesafe-i18n/runtime/esm/parser/src/basic.mjs"() {
      removeEmptyValues = /* @__PURE__ */ __name((object) => Object.fromEntries(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.entries(object).map(([key, value]) => key !== "i" && value && value != "0" && [
          key,
          value
        ]).filter(Boolean)
      ), "removeEmptyValues");
      trimAllValues = /* @__PURE__ */ __name((part) => Object.fromEntries(Object.keys(part).map((key) => {
        var val = part[key];
        return [
          key,
          Array.isArray(val) ? val.map((v) => v === null || v === void 0 ? void 0 : v.trim()) : val === !!val ? val : val === null || val === void 0 ? void 0 : val.trim()
        ];
      })), "trimAllValues");
      parseArgumentPart = /* @__PURE__ */ __name((text) => {
        var [keyPart = "", ...formatterKeys] = text.split("|");
        var [keyWithoutType = "", type] = keyPart.split(":");
        var [key, isOptional] = keyWithoutType.split("?");
        return {
          k: key,
          i: type,
          n: isOptional === "",
          f: formatterKeys
        };
      }, "parseArgumentPart");
      isBasicPluralPart = /* @__PURE__ */ __name((part) => !!(part.o || part.r), "isBasicPluralPart");
      parsePluralPart = /* @__PURE__ */ __name((content, lastAccessor) => {
        var [key, values] = content.split(":");
        if (!values) {
          values = key;
          key = lastAccessor;
        }
        var entries = values.split("|");
        var [zero, one, two, few, many, rest] = entries;
        var nrOfEntries = entries.filter((entry) => entry !== void 0).length;
        if (nrOfEntries === 1) {
          return {
            k: key,
            r: zero
          };
        }
        if (nrOfEntries === 2) {
          return {
            k: key,
            o: zero,
            r: one
          };
        }
        if (nrOfEntries === 3) {
          return {
            k: key,
            z: zero,
            o: one,
            r: two
          };
        }
        return {
          k: key,
          z: zero,
          o: one,
          t: two,
          f: few,
          m: many,
          r: rest
        };
      }, "parsePluralPart");
      REGEX_SWITCH_CASE = /^\{.*\}$/;
      parseCases = /* @__PURE__ */ __name((text) => Object.fromEntries(removeOuterBrackets(text).split(",").map((part) => part.split(":")).reduce((accumulator, entry) => {
        if (entry.length === 2) {
          return [
            ...accumulator,
            entry.map((entry2) => entry2.trim())
          ];
        }
        ;
        accumulator[accumulator.length - 1][1] += "," + entry[0];
        return accumulator;
      }, [])), "parseCases");
      REGEX_BRACKETS_SPLIT = /(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g;
      removeOuterBrackets = /* @__PURE__ */ __name((text) => text.substring(1, text.length - 1), "removeOuterBrackets");
      parseRawText = /* @__PURE__ */ __name((rawText, optimize = true, firstKey = "", lastKey = "") => rawText.split(REGEX_BRACKETS_SPLIT).map((part) => {
        if (!part.match(REGEX_BRACKETS_SPLIT)) {
          return part;
        }
        var content = removeOuterBrackets(part);
        if (content.startsWith("{")) {
          return parsePluralPart(removeOuterBrackets(content), lastKey);
        }
        var parsedPart = parseArgumentPart(content);
        lastKey = parsedPart.k || lastKey;
        !firstKey && (firstKey = lastKey);
        return parsedPart;
      }).map((part) => {
        if (typeof part === "string") return part;
        if (!part.k) part.k = firstKey || "0";
        var trimmed = trimAllValues(part);
        return optimize ? removeEmptyValues(trimmed) : trimmed;
      }), "parseRawText");
    }
  });

  // node_modules/typesafe-i18n/runtime/esm/runtime/src/core.mjs
  var applyFormatters, getPlural, REGEX_PLURAL_VALUE_INJECTION, applyArguments, translate;
  var init_core = __esm({
    "node_modules/typesafe-i18n/runtime/esm/runtime/src/core.mjs"() {
      init_basic();
      applyFormatters = /* @__PURE__ */ __name((formatters, formatterKeys, initialValue) => formatterKeys.reduce((value, formatterKey) => {
        var _a, _b;
        return (_b = formatterKey.match(REGEX_SWITCH_CASE) ? ((cases) => {
          var _a2;
          return (_a2 = cases[value]) !== null && _a2 !== void 0 ? _a2 : cases["*"];
        })(parseCases(formatterKey)) : (_a = formatters[formatterKey]) === null || _a === void 0 ? void 0 : _a.call(formatters, value)) !== null && _b !== void 0 ? _b : value;
      }, initialValue), "applyFormatters");
      getPlural = /* @__PURE__ */ __name((pluralRules, { z, o: o2, t: t4, f, m: m2, r: r4 }, value) => {
        switch (z && value == 0 ? "zero" : pluralRules.select(value)) {
          case "zero":
            return z;
          case "one":
            return o2;
          case "two":
            return t4;
          case "few":
            return f !== null && f !== void 0 ? f : r4;
          case "many":
            return m2 !== null && m2 !== void 0 ? m2 : r4;
          default:
            return r4;
        }
      }, "getPlural");
      REGEX_PLURAL_VALUE_INJECTION = /\?\?/g;
      applyArguments = /* @__PURE__ */ __name((textParts, pluralRules, formatters, args) => textParts.map((part) => {
        if (typeof part === "string") {
          return part;
        }
        var { k: key = "0", f: formatterKeys = [] } = part;
        var value = args[key];
        if (isBasicPluralPart(part)) {
          return ((typeof value === "boolean" ? value ? part.o : part.r : getPlural(pluralRules, part, value)) || "").replace(REGEX_PLURAL_VALUE_INJECTION, value);
        }
        var formattedValue = formatterKeys.length ? applyFormatters(formatters, formatterKeys, value) : value;
        return ("" + (formattedValue !== null && formattedValue !== void 0 ? formattedValue : "")).trim();
      }).join(""), "applyArguments");
      translate = /* @__PURE__ */ __name((textParts, pluralRules, formatters, args) => {
        var firstArg = args[0];
        var isObject = firstArg && typeof firstArg === "object" && firstArg.constructor === Object;
        var transformedArgs = args.length === 1 && isObject ? firstArg : args;
        return applyArguments(textParts, pluralRules, formatters, transformedArgs);
      }, "translate");
    }
  });

  // node_modules/typesafe-i18n/runtime/esm/runtime/src/util.string.mjs
  var getPartsFromString, translateString, i18nString;
  var init_util_string = __esm({
    "node_modules/typesafe-i18n/runtime/esm/runtime/src/util.string.mjs"() {
      init_basic();
      init_core();
      getPartsFromString = /* @__PURE__ */ __name((cache, text) => cache[text] || (cache[text] = parseRawText(text)), "getPartsFromString");
      translateString = /* @__PURE__ */ __name((cache, pluralRules, formatters, text, ...args) => translate(getPartsFromString(cache, text), pluralRules, formatters, args), "translateString");
      i18nString = /* @__PURE__ */ __name((locale, formatters = {}) => translateString.bind(null, {}, new Intl.PluralRules(locale), formatters), "i18nString");
    }
  });

  // node_modules/typesafe-i18n/runtime/esm/runtime/src/util.object.mjs
  function i18nObject(locale, translations, formatters = {}) {
    return createProxy2(translations, getTranslateInstance(locale, formatters));
  }
  var getTranslateInstance, wrap, createProxy2;
  var init_util_object = __esm({
    "node_modules/typesafe-i18n/runtime/esm/runtime/src/util.object.mjs"() {
      init_core();
      init_util_string();
      getTranslateInstance = /* @__PURE__ */ __name((locale, formatters) => {
        var cache = {};
        var pluralRules = new Intl.PluralRules(locale);
        return (text, ...args) => translate(getPartsFromString(cache, text), pluralRules, formatters, args);
      }, "getTranslateInstance");
      __name(i18nObject, "i18nObject");
      wrap = /* @__PURE__ */ __name((proxyObject = {}, translateFn) => typeof proxyObject === "string" ? translateFn.bind(null, proxyObject) : Object.assign(Object.defineProperty(() => "", "name", {
        writable: true
      }), proxyObject), "wrap");
      createProxy2 = /* @__PURE__ */ __name((proxyObject, translateFn) => new Proxy(wrap(proxyObject, translateFn), {
        get: /* @__PURE__ */ __name((target, key) => {
          if (key === Symbol.iterator) return [][Symbol.iterator].bind(Object.values(target).map((entry) => wrap(entry, translateFn)));
          return createProxy2(target[key], translateFn);
        }, "get")
      }), "createProxy");
    }
  });

  // node_modules/typesafe-i18n/runtime/esm/runtime/src/util.instance.mjs
  var i18n2;
  var init_util_instance = __esm({
    "node_modules/typesafe-i18n/runtime/esm/runtime/src/util.instance.mjs"() {
      init_util_object();
      i18n2 = /* @__PURE__ */ __name((translations, formatters) => {
        var cache = {};
        return new Proxy({}, {
          get: /* @__PURE__ */ __name((_target, locale) => cache[locale] || (cache[locale] = i18nObject(locale, translations[locale], formatters[locale])), "get")
        });
      }, "i18n");
    }
  });

  // node_modules/typesafe-i18n/runtime/esm/runtime/src/index.mjs
  var init_src = __esm({
    "node_modules/typesafe-i18n/runtime/esm/runtime/src/index.mjs"() {
      init_util_instance();
      init_util_object();
      init_util_string();
    }
  });

  // node_modules/typesafe-i18n/detectors/detect.mjs
  var p, n, Nr, l;
  var init_detect = __esm({
    "node_modules/typesafe-i18n/detectors/detect.mjs"() {
      p = /* @__PURE__ */ __name((e3) => !!e3, "p");
      n = /* @__PURE__ */ __name((e3) => Array.from(new Set(e3)), "n");
      Nr = /* @__PURE__ */ __name((e3, o2, ...s) => {
        for (var i2 of s) {
          var t4 = l(o2, i2);
          if (t4) return t4;
        }
        return e3;
      }, "Nr");
      l = /* @__PURE__ */ __name((e3, o2) => {
        var s = o2().map((r4) => r4.toLowerCase()), i2 = n(s.flatMap((r4) => [
          r4,
          r4.split("-")[0]
        ])), t4 = e3.map((r4) => r4.toLowerCase());
        return i2.map((r4) => {
          var c2 = t4.findIndex((x) => x === r4);
          return c2 >= 0 && e3[c2];
        }).find(p);
      }, "l");
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/browser/document-cookie.mjs
  var r, i, n2;
  var init_document_cookie = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/browser/document-cookie.mjs"() {
      r = /* @__PURE__ */ __name((o2, c2) => {
        var t4 = o2?.split(";").map((e3) => e3.trim()).find((e3) => e3.startsWith(c2))?.split("=")[1];
        return t4 ? [
          t4
        ] : [];
      }, "r");
      i = /* @__PURE__ */ __name((o2 = "lang") => () => r(document?.cookie, o2), "i");
      n2 = i();
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/browser/html-lang-attribute.mjs
  var init_html_lang_attribute = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/browser/html-lang-attribute.mjs"() {
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/browser/localstorage-detector.mjs
  var e, t, xe;
  var init_localstorage_detector = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/browser/localstorage-detector.mjs"() {
      e = /* @__PURE__ */ __name((r4) => !!r4, "e");
      t = /* @__PURE__ */ __name((r4 = "lang") => () => [
        window?.localStorage?.getItem(r4)
      ].filter(e), "t");
      xe = t();
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/browser/navigator.mjs
  var init_navigator = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/browser/navigator.mjs"() {
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/browser/query-string.mjs
  var o, c;
  var init_query_string = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/browser/query-string.mjs"() {
      o = /* @__PURE__ */ __name((e3 = "lang") => () => {
        var t4 = location?.search?.slice(1).split("&").find((r4) => r4.startsWith(e3))?.split("=")[1];
        return t4 ? [
          t4
        ] : [];
      }, "o");
      c = o();
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/browser/sessionstorage-detector.mjs
  var r2, t2, lr;
  var init_sessionstorage_detector = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/browser/sessionstorage-detector.mjs"() {
      r2 = /* @__PURE__ */ __name((e3) => !!e3, "r");
      t2 = /* @__PURE__ */ __name((e3 = "lang") => () => [
        window?.sessionStorage?.getItem(e3)
      ].filter(r2), "t");
      lr = t2();
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/server/accept-language-header.mjs
  var init_accept_language_header = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/server/accept-language-header.mjs"() {
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/server/request-cookies.mjs
  var init_request_cookies = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/server/request-cookies.mjs"() {
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/server/request-hostname.mjs
  var init_request_hostname = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/server/request-hostname.mjs"() {
    }
  });

  // node_modules/typesafe-i18n/detectors/detectors/server/request-parameters.mjs
  var init_request_parameters = __esm({
    "node_modules/typesafe-i18n/detectors/detectors/server/request-parameters.mjs"() {
    }
  });

  // node_modules/typesafe-i18n/detectors/index.mjs
  var init_detectors = __esm({
    "node_modules/typesafe-i18n/detectors/index.mjs"() {
      init_detect();
      init_document_cookie();
      init_html_lang_attribute();
      init_localstorage_detector();
      init_navigator();
      init_query_string();
      init_sessionstorage_detector();
      init_accept_language_header();
      init_request_cookies();
      init_request_hostname();
      init_request_parameters();
    }
  });

  // node_modules/typesafe-i18n/utils/index.mjs
  function extend() {
    var args = [].slice.call(arguments);
    var deep = false;
    if (typeof args[0] == "boolean") {
      deep = args.shift();
    }
    var result = args[0];
    if (isUnextendable(result)) {
      throw new Error("extendee must be an object");
    }
    var extenders = args.slice(1);
    var len = extenders.length;
    for (var i2 = 0; i2 < len; i2++) {
      var extender = extenders[i2];
      for (var key in extender) {
        if (Object.prototype.hasOwnProperty.call(extender, key)) {
          var value = extender[key];
          if (deep && isCloneable(value)) {
            var base = Array.isArray(value) ? [] : {};
            result[key] = extend(true, Object.prototype.hasOwnProperty.call(result, key) && !isUnextendable(result[key]) ? result[key] : base, value);
          } else {
            result[key] = value;
          }
        }
      }
    }
    return result;
  }
  function isCloneable(obj) {
    return Array.isArray(obj) || {}.toString.call(obj) == "[object Object]";
  }
  function isUnextendable(val) {
    return !val || typeof val != "object" && typeof val != "function";
  }
  var objectExtend, initExtendDictionary, extendDictionary;
  var init_utils2 = __esm({
    "node_modules/typesafe-i18n/utils/index.mjs"() {
      objectExtend = extend;
      __name(extend, "extend");
      __name(isCloneable, "isCloneable");
      __name(isUnextendable, "isUnextendable");
      initExtendDictionary = /* @__PURE__ */ __name(() => (base, part) => objectExtend({}, base, part), "initExtendDictionary");
      extendDictionary = initExtendDictionary();
    }
  });

  // src/i18n/i18n-util.ts
  var i18n_util_exports = {};
  __export(i18n_util_exports, {
    baseLocale: () => baseLocale,
    detectLocale: () => detectLocale,
    extendDictionary: () => extendDictionary2,
    i18n: () => i18n3,
    i18nObject: () => i18nObject2,
    i18nString: () => i18nString2,
    isLocale: () => isLocale,
    loadedFormatters: () => loadedFormatters,
    loadedLocales: () => loadedLocales,
    locales: () => locales
  });
  var baseLocale, locales, isLocale, loadedLocales, loadedFormatters, extendDictionary2, i18nString2, i18nObject2, i18n3, detectLocale;
  var init_i18n_util = __esm({
    "src/i18n/i18n-util.ts"() {
      "use strict";
      init_src();
      init_detectors();
      init_utils2();
      baseLocale = "en";
      locales = [
        "en"
      ];
      isLocale = /* @__PURE__ */ __name((locale) => locales.includes(locale), "isLocale");
      loadedLocales = {};
      loadedFormatters = {};
      extendDictionary2 = initExtendDictionary();
      i18nString2 = /* @__PURE__ */ __name((locale) => i18nString(locale, loadedFormatters[locale]), "i18nString");
      i18nObject2 = /* @__PURE__ */ __name((locale) => i18nObject(locale, loadedLocales[locale], loadedFormatters[locale]), "i18nObject");
      i18n3 = /* @__PURE__ */ __name(() => i18n2(loadedLocales, loadedFormatters), "i18n");
      detectLocale = /* @__PURE__ */ __name((...detectors) => Nr(baseLocale, locales, ...detectors), "detectLocale");
    }
  });

  // lazy-resolver:./i18n-util
  var require_i18n_util = __commonJS({
    "lazy-resolver:./i18n-util"(exports, module3) {
      module3.exports = (init_lazy(), __toCommonJS(lazy_exports)).createLazyImportProxy(
        () => (init_i18n_util(), __toCommonJS(i18n_util_exports))
      );
    }
  });

  // src/i18n/formatters.ts
  var initFormatters;
  var init_formatters = __esm({
    "src/i18n/formatters.ts"() {
      "use strict";
      initFormatters = /* @__PURE__ */ __name((locale) => {
        var formatters = {};
        return formatters;
      }, "initFormatters");
    }
  });

  // src/i18n/en/index.ts
  var en, en_default;
  var init_en = __esm({
    "src/i18n/en/index.ts"() {
      "use strict";
      en = {
        discord: "Discord",
        wintry: "Lumi",
        ui: {
          components: {
            search: {
              placeholder: "Search"
            }
          }
        },
        error_boundary: {
          uh_oh: "Uh oh.",
          retry_render: "Retry Render",
          reload: "Reload Discord",
          safe_mode: "Safe Mode",
          stack_trace: "Stack Trace",
          screen: {
            copy: "Copy",
            show_more: "Show more",
            show_less: "Show less",
            component_stack: "Component Stack",
            call_stack: "Call Stack",
            description: "An error occurred while rendering a component. This may have been caused by a plugin, Lumi, or Discord itself."
          }
        },
        actions: {
          nevermind: "Nevermind",
          dismiss: "Dismiss",
          copy: "Copy"
        },
        updater: {
          update_tag: "Update",
          update_available: "Update Available",
          new_version: "A new version of Lumi is available!",
          update_now: "Update Now",
          update_and_restart: "Update and Restart",
          already_latest: "You're already on the latest version!",
          failed_to_check: "Failed to check for updates",
          error_alert: "An error occurred while checking for updates."
        },
        settings: {
          sections: {
            plugins: "Plugins",
            themes: "Themes",
            developer: "Developer",
            updater: "Updater"
          },
          general: {
            info: "Info",
            logs: "Logs",
            platform: "Platform",
            quick_actions: "Quick Actions",
            reload: "Reload Discord",
            links: "Links",
            github: "GitHub",
            discord: "Discord",
            react: "React",
            react_native: "React Native",
            hermes: "Hermes",
            client_info: {
              label: "Client Info"
            },
            configurations: {
              label: "Configurations",
              safe_mode: {
                label: "Safe Mode",
                description: "This will stop non-essential addons from running, leaving only core functionalities. Restart required.",
                alert: {
                  title: "{action|{disable: Disable, enable: Enable}} Safe Mode?",
                  description: "Do you want to {action:string} safe mode? This will {action|{enable: stop non-essential plugins from running, disable: allow all plugins to run as usual}}. A restart is needed for changes to take effect.",
                  apply_and_restart: "Apply and Restart",
                  apply_without_restart: "Apply Without Restart"
                }
              }
            }
          },
          plugins: {
            description: "Description",
            safe_mode_callout: "Safe Mode Enabled",
            safe_mode_callout_desc: "Only essential plugins will take effect while safe mode is enabled.",
            info_sheet: {
              details: "Details",
              more_info: "More Info",
              view_source: "View Source",
              configurations: "Configurations",
              authors: "Authors",
              version: "Version",
              id: "ID",
              path: "Path"
            }
          },
          developer: {
            sections: {
              init_config: {
                label: "Loader Configurations",
                sublabel: "Configure the loader to use custom endpoint for bundle fetching. Refer CONTRIBUTING.md to learn how to configure local dev server for development",
                custom_endpoint: "Custom Endpoint",
                bundle_path: "Override Bundle Path",
                bundle_path_desc: "Override the path to the bundle file. By default, the injector prioritizes the bytecode bundle, followed by the minified bundle, and lastly, the regular bundle.",
                force_update: "Force Update",
                force_update_desc: "Forcefully fetch bundle every app start to ensure latest bundle is loaded"
              },
              tools: {
                label: "Tools",
                asset_browser: {
                  label: "Asset Browser"
                }
              },
              playground: {
                label: "Playground"
              },
              actions: {
                label: "Actions",
                invalidate_metro_cache: "Invalidate Metro Cache"
              }
            }
          },
          updater: {
            info: "Info",
            repo: "Repository",
            settings: "Settings",
            autoUpdate: "Automatic Updates",
            autoUpdateDescription: "Enable automatic bundle updates without prompts. Bundles are forcefully fetched if uncached.",
            notifyNewUpdates: "Notify New Updates",
            notifyNewUpdatesDescription: "Show a notification when a new update is available.",
            checkForUpdates: "Check for Updates"
          }
        }
      };
      en_default = en;
    }
  });

  // src/i18n/i18n-util.sync.ts
  var i18n_util_sync_exports = {};
  __export(i18n_util_sync_exports, {
    loadAllLocales: () => loadAllLocales,
    loadFormatters: () => loadFormatters,
    loadLocale: () => loadLocale
  });
  var localeTranslations, loadLocale, loadAllLocales, loadFormatters;
  var init_i18n_util_sync = __esm({
    "src/i18n/i18n-util.sync.ts"() {
      "use strict";
      init_formatters();
      init_i18n_util();
      init_en();
      localeTranslations = {
        en: en_default
      };
      loadLocale = /* @__PURE__ */ __name((locale) => {
        if (loadedLocales[locale]) return;
        loadedLocales[locale] = localeTranslations[locale];
        loadFormatters(locale);
      }, "loadLocale");
      loadAllLocales = /* @__PURE__ */ __name(() => locales.forEach(loadLocale), "loadAllLocales");
      loadFormatters = /* @__PURE__ */ __name((locale) => void (loadedFormatters[locale] = initFormatters(locale)), "loadFormatters");
    }
  });

  // lazy-resolver:./i18n-util.sync
  var require_i18n_util2 = __commonJS({
    "lazy-resolver:./i18n-util.sync"(exports, module3) {
      module3.exports = (init_lazy(), __toCommonJS(lazy_exports)).createLazyImportProxy(
        () => (init_i18n_util_sync(), __toCommonJS(i18n_util_sync_exports))
      );
    }
  });

  // src/i18n/index.ts
  var import_i18n_util2, import_i18n_util3, t3;
  var init_i18n = __esm({
    "src/i18n/index.ts"() {
      "use strict";
      init_lazy();
      import_i18n_util2 = __toESM(require_i18n_util(), 1);
      import_i18n_util3 = __toESM(require_i18n_util2(), 1);
      t3 = lazyValue(() => {
        (0, import_i18n_util3.loadLocale)("en");
        return (0, import_i18n_util2.i18nObject)("en");
      }, {
        hint: "object"
      });
    }
  });

  // src/loader/modules/UpdaterModule.ts
  var UpdaterModule_exports = {};
  __export(UpdaterModule_exports, {
    default: () => UpdaterModule_default
  });
  var UpdaterModule_default;
  var init_UpdaterModule = __esm({
    "src/loader/modules/UpdaterModule.ts"() {
      "use strict";
      init_loader();
      UpdaterModule_default = getModule({
        name: "UpdaterModule",
        argumentProcessors: {
          // Make sure the arguments are always with length 2
          fetchBundle: /* @__PURE__ */ __name((args) => [
            args[0],
            args[1]
          ], "fetchBundle")
        }
      });
    }
  });

  // src/components/Discord/AlertModal/AlertModal.tsx
  var AlertModal_exports = {};
  __export(AlertModal_exports, {
    AlertActionButton: () => AlertActionButton,
    AlertActions: () => AlertActions,
    AlertModal: () => AlertModal,
    AlertModalContainer: () => AlertModalContainer,
    useDismissModalCallback: () => useDismissModalCallback
  });
  function getPropLazy(prop) {
    return lazyValue(() => module.load()[prop]);
  }
  var module, AlertModal, AlertModalContainer, AlertActionButton, AlertActions, useDismissModalCallback;
  var init_AlertModal = __esm({
    "src/components/Discord/AlertModal/AlertModal.tsx"() {
      "use strict";
      init_wrappers();
      init_lazy();
      module = lookupByProps("AlertModal", "AlertActions");
      __name(getPropLazy, "getPropLazy");
      AlertModal = getPropLazy("AlertModal");
      AlertModalContainer = getPropLazy("AlertModalContainer");
      AlertActionButton = getPropLazy("AlertActionButton");
      AlertActions = getPropLazy("AlertActions");
      useDismissModalCallback = getPropLazy("useDismissModalCallback");
    }
  });

  // src/api/alerts.tsx
  var alerts_exports = {};
  __export(alerts_exports, {
    dismissAlert: () => dismissAlert,
    showAlert: () => showAlert
  });
  function AlertModalWrapper({ children, dismissable }) {
    (0, import_react6.useEffect)(() => {
      if (dismissable === false) {
        var backHandler = import_react_native10.BackHandler.addEventListener("hardwareBackPress", () => true);
        return () => backHandler.remove();
      }
    }, [
      dismissable
    ]);
    return dismissable === false ? /* @__PURE__ */ jsx(import_react_native10.Pressable, {
      style: {
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      },
      children
    }) : children;
  }
  function showAlert(props) {
    var content;
    if ("content" in props) {
      content = /* @__PURE__ */ jsx(AlertModal, {
        header: props.header,
        title: props.title,
        content: props.content,
        extraContent: props.extraContent,
        actions: props.actions?.map((a, i2) => /* @__PURE__ */ (0, import_react6.isValidElement)(a) ? a : /* @__PURE__ */ jsx(AlertActionButton, {
          ...a
        }, i2))
      });
    } else if ("Component" in props) {
      content = /* @__PURE__ */ jsx(props.Component, {});
    } else {
      throw new Error("Invalid alert props");
    }
    logger9.info(`Showing alert: ${props.id}`);
    AlertStore.openAlert(props.id, /* @__PURE__ */ jsx(AlertModalWrapper, {
      dismissable: props.dismissable,
      children: content
    }), props.onDismiss);
    return props.id;
  }
  function dismissAlert(id) {
    AlertStore.dismissAlert(id);
  }
  var import_react6, import_react_native10, logger9, AlertStore;
  var init_alerts = __esm({
    "src/api/alerts.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react6 = __toESM(require_react(), 1);
      init_logger();
      init_wrappers();
      import_react_native10 = __toESM(require_react_native(), 1);
      init_AlertModal();
      logger9 = wtlogger.createChild("Alerts");
      AlertStore = lookupByProps("openAlert", "useAlertStore").asLazy();
      __name(AlertModalWrapper, "AlertModalWrapper");
      __name(showAlert, "showAlert");
      __name(dismissAlert, "dismissAlert");
    }
  });

  // src/components/Discord/experimental/TwinButtons.tsx
  var TwinButtons_exports = {};
  __export(TwinButtons_exports, {
    default: () => TwinButtons_default
  });
  var TwinButtons_default;
  var init_TwinButtons = __esm({
    "src/components/Discord/experimental/TwinButtons.tsx"() {
      "use strict";
      init_util();
      TwinButtons_default = getComponentFromProps("TwinButtons");
    }
  });

  // src/components/Wintry/ErrorCard.tsx
  var ErrorCard_exports = {};
  __export(ErrorCard_exports, {
    INDEX_BUNDLE_FILE: () => INDEX_BUNDLE_FILE,
    default: () => ErrorCard
  });
  function formatErrorContent(error, showStackTrace) {
    if (error instanceof Error) {
      return showStackTrace ? error.stack || error.message : error.message;
    }
    try {
      return JSON.stringify(error, null, 2);
    } catch (e3) {
      return String(error);
    }
  }
  function ErrorStack({ error }) {
    return /* @__PURE__ */ jsx(BottomSheet_default, {
      children: /* @__PURE__ */ jsxs(Stack_default, {
        style: {
          padding: 12
        },
        children: [
          /* @__PURE__ */ jsx(Text_default, {
            variant: "heading-lg/bold",
            children: t3.error_boundary.stack_trace()
          }),
          /* @__PURE__ */ jsx(Codeblock, {
            selectable: true,
            children: formatErrorContent(error, true)
          })
        ]
      })
    });
  }
  function openStackTraceSheet(error) {
    showSheet("Stack Trace", ErrorStack, {
      error
    }, "stack");
  }
  function renderHeader(header) {
    if (/* @__PURE__ */ (0, import_react7.isValidElement)(header) || header === null) {
      return header;
    }
    return /* @__PURE__ */ jsx(Text_default, {
      variant: "heading-lg/bold",
      children: header || t3.error_boundary.uh_oh()
    });
  }
  function ErrorCard({ error, header, showStackTrace = false, onRetryRender }) {
    var isErrorInstance = error instanceof Error;
    var shouldShowStackTraceButton = isErrorInstance && !showStackTrace;
    return /* @__PURE__ */ jsx(Card_default, {
      children: /* @__PURE__ */ jsxs(Stack_default, {
        children: [
          renderHeader(header),
          /* @__PURE__ */ jsx(import_react_native11.ScrollView, {
            contentContainerStyle: {
              maxHeight: 180
            },
            horizontal: true,
            children: /* @__PURE__ */ jsx(Codeblock, {
              selectable: true,
              children: formatErrorContent(error, showStackTrace)
            })
          }),
          /* @__PURE__ */ jsxs(TwinButtons_default, {
            children: [
              onRetryRender && /* @__PURE__ */ jsx(Button_default, {
                variant: "destructive",
                text: t3.error_boundary.retry_render(),
                onPress: onRetryRender
              }),
              shouldShowStackTraceButton && /* @__PURE__ */ jsx(Button_default, {
                text: t3.error_boundary.stack_trace(),
                onPress: /* @__PURE__ */ __name(() => openStackTraceSheet(error), "onPress")
              })
            ]
          })
        ]
      })
    });
  }
  var import_react7, import_react_native11, INDEX_BUNDLE_FILE;
  var init_ErrorCard = __esm({
    "src/components/Wintry/ErrorCard.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      import_react7 = __toESM(require_react(), 1);
      init_Button();
      init_Discord2();
      init_TwinButtons();
      init_Codeblock();
      init_sheets();
      import_react_native11 = __toESM(require_react_native(), 1);
      INDEX_BUNDLE_FILE = window.HermesInternal.getFunctionLocation(window.__r).fileName;
      __name(formatErrorContent, "formatErrorContent");
      __name(ErrorStack, "ErrorStack");
      __name(openStackTraceSheet, "openStackTraceSheet");
      __name(renderHeader, "renderHeader");
      __name(ErrorCard, "ErrorCard");
    }
  });

  // src/stores/useUpdaterStore.tsx
  var useUpdaterStore_exports = {};
  __export(useUpdaterStore_exports, {
    initCheckForUpdates: () => initCheckForUpdates,
    showAlreadyUpdatedToast: () => showAlreadyUpdatedToast,
    showUpdateAvailableAlert: () => showUpdateAvailableAlert,
    showUpdateAvailableToast: () => showUpdateAvailableToast,
    showUpdateErrorAlert: () => showUpdateErrorAlert,
    showUpdateErrorToast: () => showUpdateErrorToast,
    useUpdaterStore: () => useUpdaterStore
  });
  function initCheckForUpdates() {
    return _initCheckForUpdates.apply(this, arguments);
  }
  function _initCheckForUpdates() {
    _initCheckForUpdates = _async_to_generator(function* () {
      if (!loaderPayload.loader.initConfig.skipUpdate) {
        return;
      }
      var { checkForUpdates, notifyOnNewUpdate } = useUpdaterStore.getState();
      try {
        var updateAvailable = yield checkForUpdates();
        if (updateAvailable && notifyOnNewUpdate) {
          showUpdateAvailableToast(updateAvailable);
        }
      } catch (e3) {
        logger10.error`Failed to check for updates: ${e3}`;
        showUpdateErrorToast(e3);
      }
    });
    return _initCheckForUpdates.apply(this, arguments);
  }
  function showUpdateAvailableToast(updateInfo) {
    showToast({
      id: "wt-update-available",
      text: t3.updater.new_version(),
      duration: 8e3,
      onPress: /* @__PURE__ */ __name(() => {
        showUpdateAvailableAlert(updateInfo);
      }, "onPress")
    });
  }
  function showUpdateAvailableAlert(updateInfo) {
    showAlert({
      id: "wt-update-available",
      title: t3.updater.update_available(),
      content: t3.updater.new_version(),
      extraContent: /* @__PURE__ */ jsx(Card_default, {
        children: /* @__PURE__ */ jsx(Text_default, {
          variant: "text-md/medium",
          children: updateInfo.revision || "Unknown hash"
        })
      }),
      actions: [
        {
          text: t3.updater.update_and_restart(),
          onPress: /* @__PURE__ */ _async_to_generator(function* () {
            try {
              yield UpdaterModule_default.fetchBundle(updateInfo.url, updateInfo.revision);
              yield delay(500);
              BundleUpdaterModule.reload();
            } catch (e3) {
              logger10.error`Failed to fetch bundle: ${e3}`;
              showUpdateErrorToast(e3);
            }
          })
        },
        {
          text: t3.actions.nevermind(),
          variant: "secondary",
          onPress: /* @__PURE__ */ __name(() => {
          }, "onPress")
        }
      ]
    });
  }
  function showAlreadyUpdatedToast() {
    showToast({
      id: "wt-already-updated",
      text: t3.updater.already_latest()
    });
  }
  function showUpdateErrorToast(error) {
    showToast({
      id: "wt-update-error",
      text: t3.updater.failed_to_check(),
      onPress: /* @__PURE__ */ __name(() => {
        showUpdateErrorAlert(error);
      }, "onPress")
    });
  }
  function showUpdateErrorAlert(error) {
    showAlert({
      id: "wt-update-error",
      title: t3.updater.failed_to_check(),
      content: t3.updater.error_alert(),
      extraContent: /* @__PURE__ */ jsx(ErrorCard, {
        header: null,
        showStackTrace: true,
        error
      }),
      actions: [
        {
          text: t3.actions.dismiss(),
          variant: "destructive",
          onPress: noop
        }
      ]
    });
  }
  var logger10, _updateMutex, useUpdaterStore;
  var init_useUpdaterStore = __esm({
    "src/stores/useUpdaterStore.tsx"() {
      "use strict";
      init_async_to_generator();
      init_jsxRuntime();
      init_Discord2();
      init_UpdaterModule();
      init_esm();
      init_alerts();
      init_ErrorCard();
      init_toasts();
      init_dist();
      init_i18n();
      init_logger();
      init_loader();
      init_native();
      init_middleware();
      init_kvStorage();
      logger10 = wtlogger.createChild("UpdaterStore");
      _updateMutex = new Mutex();
      useUpdaterStore = create(persist((set2, get) => ({
        notifyOnNewUpdate: false,
        isCheckingForUpdates: false,
        availableUpdate: null,
        checkForUpdates: /* @__PURE__ */ _async_to_generator(function* () {
          if (get().availableUpdate) {
            return get().availableUpdate;
          }
          yield _updateMutex.acquire();
          set2({
            isCheckingForUpdates: true
          });
          try {
            var ret = yield UpdaterModule_default.checkForUpdates();
            set2({
              availableUpdate: ret
            });
            return ret;
          } finally {
            set2({
              isCheckingForUpdates: false
            });
            _updateMutex.release();
          }
        })
      }), {
        name: "updater-store",
        storage: createJSONStorage(() => kvStorage),
        // @ts-expect-error - bad types
        partialize: /* @__PURE__ */ __name((s) => pick(s, [
          "notifyOnNewUpdate"
        ]), "partialize")
      }));
      __name(initCheckForUpdates, "initCheckForUpdates");
      __name(_initCheckForUpdates, "_initCheckForUpdates");
      __name(showUpdateAvailableToast, "showUpdateAvailableToast");
      __name(showUpdateAvailableAlert, "showUpdateAvailableAlert");
      __name(showAlreadyUpdatedToast, "showAlreadyUpdatedToast");
      __name(showUpdateErrorToast, "showUpdateErrorToast");
      __name(showUpdateErrorAlert, "showUpdateErrorAlert");
    }
  });

  // asset-loader:src/assets/ic_lumi.png
  var require_ic_lumi = __commonJS({
    "asset-loader:src/assets/ic_lumi.png"(exports, module3) {
      init_libraries();
      module3.exports = AssetsRegistry.registerAsset({ "__wintry": true, "__packager_asset": true, "width": 260, "height": 260, "httpServerLocation": "src/assets/ic_lumi.png", "dataurl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAEECAYAAADOCEoKAAAfG0lEQVR4Ae2d3XEkNw7Ht2pDcAZ3GTiEC2EzsDNwCA7BGZwTcCmEe93yPoxLK41m/DDOYEPYq7/UmKF6+oMEAX6AeFB1T6s/SBD4EQTR7A8fPnz46H8uA9cB14FJB1wQbgyuA64DVx247rin4N6S64DrgAPBewfXAdeBqw5cd7x38N7BdcB1wIHgvYPrgOvAVQeuO947eO/gOuA64EDw3sF1wHXgqgPXHe8dvHdwHXAdcCB47+A64Dpw1YHrjvcOA/QOf/zxxw+Pj4+fnp+fH47H4z+n0+n79HfAsZeXl5/cOIa2iaErPxQED4fDp5eXlxACBIP59uJgGNYuhq34UDB4enr6NfAG5gBY/I1r3FsYzj6Gq/BQIIBBc2BA8HAoDGcfw1V4KCA8PT39TMbN3T49Pf3HPYVh7GSYig4FAjLgyJjB4pAhAMiF7udb8/ZivoJDggCGK+EdEBTcSxjGToap6HBgOJ1OD2TQudvj8fhf9w6GsJUhKjkcDGC8f//997dcEATX+7BhgDyVD059m0D8/PnzD4Ex78UIov7vumJTV2btOkQlh/MQvnz58m9pIPz555//minPcHIdoP4OBIuN7EBwvWbqtQuOKbime0cHgus1U69dcEzBORDGCLI13c4KuutAUBBqdSVyD8H1mqnXLjim4Kob/Va5HQiu11v6sfE/F9yGcJo2+q1yOxBcr7f0Y+N/LrgN4TgQbguofPdpxyFsZYhKdmvYXFi5h+B6zdQdFxxTcE1DxoHges3UaxccU3AOBJ92bFoHmHrtQGAKLkoZsKgpxt74w77ms8J79+4hkMxKyy2U4aD7DgTphocxHo/H32arGtMLRBe8SgxFl35ueL8egYA1FyC3lbc0D/ifttxCGQ6670CQanh4AC8vL7/FvlSkCYaegDAB9PdYufk6j6o2q3rzKLdayiBr3mcywEOsUgfnqSx53gMQAFAY94pHQB7V2vZQcghWU7cKP9uBkCvwyTOI+d7BmnLj+OXLly8/5paFrm8dCBge5K73+PLy8j+qr2/F7FjsRsN4A3PlOx6P0e5u4BkswkFqGNEqEFCu4/H4vz05xP7fhw/i9it+w6HA8Ndff/0Yq7yx553P52+5it4aEDKHB4vwJHl6oFHUhkVvNhQM4ClIegek4MGWHV9oCQhY/Tl3eBDI5A4OmH2Ye23+m23X7AuHM/65kmmsW7ik+JxhRAtAmKYRxYYHS7LBMXhU87bx32y7Zl84PBCg8GtKqnEcw4jYyHpNIExB1ujpVwlZSQZkB4eJA4GrAM/Pz79IKHPiPaKGEbWAAJkwpxHvhgIpcvGvVYvZsdiNhvMY0GOnKK3wuYetYFppIJQaHqzJ0IEgZsdiNxoOCJU8hHc96Vp8oRQQ8BzlwOq7+q4B4XA4fOJ6en7dOwa8+zGcUecow+Pj46c1BS18/G4YoQ0EzWlEjuzgoeS0pV975cB1x2GQ+DpvqVmGBAO5ZjtqAgHGpzmNmFDfV+/BZxlEbVj0ZsNBBemzqQqsfT6GERozILXjBGtyO5/PYh+iheeD2EzsbI5Bz8I2ENCwGOvDSE6nE16h/Qeps/gtEYjSMLw1xa99vMbsQUydt4KrMQY7ge6/89fVUd/n5+cHCT2JKUcj59gEAkCAV5EjlPiSmybcopcQY0gWzkEbcw1pCojGenjQkxHiFPaAgPcLGGPcC7enQSyB8byo6LkFo1Wsw4Xr2sO4IzqLuzbK7Ty48Cp4nS0gAAachp6Ulg0F9DYOhdOdASnCYDMPY8uAcl9I+/r16y9b9+/8f3aAIGGUOe/Yw1NoYU5e0QhLGvzqs47HY3QK99w4JXQE8jU8fLADBCljzO0BpJTOumGn1g+w5g7rCAxSOpLTcVBZGt3aAAKMMFXB1s7HvDZ3bBo2svZrv2vlN3hcJKAnqSOQsVEvwQYQUhY3jTEYqVRYKCFc3Jhn+jnvYxCIBeUMD0I4Yx+AlpQxpq7nzzDw2wYQzuczZ4HTrXGqaGNPYBBbak1SsRu910Pu8GBunKfT6UG4rpf5Mwz8tgEE4YYGKA4ajevDiPdewEK7HbRccelOA2XX0JHK9+wfCErvFKjS34cR78GA4QEySjWNIWM6etWTlPZiNOsfeW8HwkIv9aoAkQJkv7/hw4g3KCD+IxHE3WuvtXbOOb73zA7/3z8QIPScRl27toSSouxwkUdMasLUndbwYG6ISl6kDxnmgm7lt4ZBlXYHR4kvwHUv/cJQbnbiSqehOqysZFs2PASNgFGp3itseOvDCMlpxFBue/toyxWjXo0P7J1vNDnJBhAkvwZEiiCVi7CnrEv/Bxg0IEd1K72VyDJcklPsMY3VrRwIiSsKxTaWxHlSKamhoZR2a5fkYGAYIZJluCSblGMa6196YlLDQJDOVAQYWnnVdXppqqtsR+kswxTjXzpXY4XsVvRjqb4Zx2wMGTQavLVPhHUUXxDPMsxQ8NdpYQ0PMvcluNw6KV1vBgiieerwEFp1CRseRqhlGeYqv0La8vcWhpS5clm43gYQRgwaIWKvkX0XxlFi9lEG7SzDBcVNSgjTCDrXmIXKlUPE9TaAMOo8c+1hRKkswwhF3gSERp6K0e9J2gACDCOmN0s8p5vEEwBRQ+nX5FUyyzAXBrhew5MqnbgmIYeIe9gAgqemvrWjdnwBhtXj2HkNbDnHI4xr02tp9HobQIBwvRd4a0utYUQvw4O5oWl4j4a/FmUHCBouc69uoYYR9CoLjbRlrfUy5jCr8FsPCFAg+itRMY1U314jyQ6Em15rAEE7bRlv2qLcGAIix2balvhQzE1wEkaL6T9M8czdd/zW/iyWzzXf2tKBcJMFjCknVrBy7YOEvczvgXZDQtzcfqgMOI78GEVv7Sa4eeFSfoNmCS773efLU561dq5no93a0oFwk0UPWaywn9RcCaXU6Zvg1gxt73jGiyOiYNBoeCWhq0efHQg3vW5ZLzggIG8BW8kvX092fhPcnuEv/T8DBuF76K8fXM11g4TKEpar2fTlpbYIjzkQbnrdoueYC4IQCsLv3NwEFypUzL6C0l1yxkc9jRVj5JtzjkLbfM8Fdk59cq5NdcVDY1vb566VIQmCsGy4b46Mgmv5QNAI4lElOWCAUOh6qa12NDloCNFhhAPhptcaQEgxwGnG4OeEGNs7LzVSl6Wyam+CS1FODYVbqngKGEZ9n2Gp3TTap1cPQcMQY95jmEBQ7AW0FEgt6cx0jAcEjQVJloBAx2LAoGEEvWakaciiVyCQDklut1bkLg0CqhdsZMPQYz1QHhA03DCq2NYWz90i4da13P8JCDm2McTOcyC86XXJd1xqgSDQa4lhAw8Ia4kTQeE446DoawCGpZdsNMrVY8/oQHjTaw05nE6nd4aHZ2wlE5WyCSFvlgeEUpWMeM67XIZa48XWvAgNQ+gRjBqBZnqPAffWmNKM0PnVjlNAD3lA0OiJcwQBasNj0BjKcKeYBBqHPYRwILzptcZKWtA1DT3L1H8kKX0T0DkeEDReJMoViNb1S0MTAcGzjT3m2Q6EN71Wyk1Z7aG1dDDmvkJT5DwglJ5liBGI1jk9rq7rQLgCoavl63N0WChjkQcEpbFZk+QVErSqRzD3GhwIb3o9UsclFOPhAQEKCBclh2i9XCs0v+tAqPChH81s2pb0V/AlJz4QBvISVN59n/fqkr/dQ3jT6xaDfwoguQh5B+i0+EDAtfg2gEIFWxs6HHLlVPp6B8KbXo8Q/BaeBcsDwiBQeJeIUtq4Oc9zILzpdYPT42KdHeoGL52jHxvX5AMBN8f0jkZSUCvex4YAi8YGYsvhQHjT61b0R6EcWt/PlAECKapVMGy9zEJ1b2nrQPjwUes9BgXjjvYaEDwUjBcsdWayQCCjsAYG5UZYapisYw6EDx+VXoePNl4pcGBogFhdoU5JBwjWwIBchJ6gMDoQpvcMup4WLwwC6oB0gRCAAasyd91AUw67tstGDZO1HRUIDoJse86+QZLiTg32u5Q7Ves+MQu2EAxrbEcDgoUhaiWPYG6/ZYFAxgGFbe3VUQ5cWgXDCEBoYEESqXjCoaEX6OoAwcGgK3fLQLACAgyhFfII5j1+6m9dxSTD39sa8hiaaGSLQHAQFLHVIg+JptQEhl97T3JaW+JtD4xS/7cEhEknVr93yBnq1bimUY9gbpttAYEMYuoNLGQ/vlvijeqnvbUABCsBaCQTNTg0mIOAfrcJhNBgLESQaYm3sF6a+z0DYQJB11PUmDHAWgw95a5M+tg+EFBQKDiEXMPVE37mq8egrSg9AsEKCApmFVKvLrltHwhQFCMwCKepRD5wu+Zl9AQEB0FTNthUYd6RDnGEEZbA0shl6AEIGAr2voBJI8lE7+xmrZOIPN4mEPBiSu8zDalDDUkwtAoEQP75+fkXA217QT1Qn0hDkzRazXu1BwQI2uAQIRwubO5LgKE1IEyzRsU+fJoK49jzMXUovEKRpnFz7t0OEKDEvbuQsYoVcx7AgPE1pwdqBQiWQMBtC077VbymDSAYDRxuegIxUMA5gGSqMtYGgoOgDbtigKVuwaE4IwQOY41/57zoJKdaQJi8vO7fZu0kq5AzJNi7ph4QRgwc7hh8rEexC4bSQIAHY2G4V2CJsj2DrP3/OkBA4FDIOGKNyOJ5q2AoBQQLIDA4dZgDlbJAmFzKptJSDcxo3CU5aQPBQVDWbhixAC4UylUM0zUtGR/KAk8FwoaCY9zYudeCz5S/LvGmBQQHQTl7KQiBEB76FWwxcAjjX3qfYFL47oNiGt80bAnmHHCj/J2/ZxAarta+LhBaDBxiVmOPvtPQxgIYLMZOUuvU0hJlWoYsdV89IDQYOMRYOynRx8FwSjW+Zs4feOowBw7yQJiMqKnxOBZ0xdBlzzNY+7+DoR8wOAiybDrr4jsSYYjQ0lgzDByuGXvK8QkM3S/xxhmDt36Ng0DElkVu8gqG1mCwFjhMAcDauVNqroUl3ppx8bnA6WyJsrtOdE3HKh2XAQJ6zpZeaaXpxBJCNbLEW1dggOfX6RJlYwChoY+uJAcOpaDhYNCPM1ieOiSv8+np6Vf6Q+7O0vS4lM4u3CffQ4B3wHX3JK9Dj5ETOFwQDovmExiaCqpKyrnGvSyDICbZi/PGK1Of84FQe3oRynI+n39iCoBl9DHPQkMjjlHDgKw80zII0HmlvumLTFTlTi8fCDXfctMMHMYYfcw5PmXJGkpYXaLstQPKTNg7KEIhHwigeI0eqWTgMMbw985xMOyDAYA3vkTZRwmPGnLa0zfm//OBUAEG1QKHTCG/G5Y4GO7BAAVPzSKVaIuS95jaXWwI+fXr19cX84TrkA+Ekh5CK4FDiUYgMLQ0XVsa7iOAALqi8abv+Xz+pjB0yAdCCYVuNXAoBQa4kSXkWNrg1543Cgg4gcM1mS0dV/AS8oGgnYMA5Sk8F/vOxZcw+th7aMtySakqHHsYoT2nWaZ/lOX7EKtbkeflAwEV16p0b4HDSKHfAcfCV4xSdYAWc+HKrOXrJAKHkfK8CMshHwgokIK723XgMKaR4E6ONlRYUnKA4cuXLz/GyKz1c6QDh0vymh8TlokMEB4fHz/NC8r9bSlwuNRYAAFSU0sGY7ltUfK6gtl4dx7aUjulHnt5efmpRpumlnPnfBkg4CGpWVdzZYMwLc9BOwjupxvnOjD97mqFI+3A4YqM6GW0NocMRB1uUMxy4NBBEA0CUnLari4zT/pWe1socEjyuNvCboRlIOchUMGwkOUO1a4Vg1dgNXA4jSd/q+FGxsq/k/OaBEPBwOHVXubthWEK2Z3QVh4IKNhe0g2MBEMMi9NP06zLw7zx/DfbUyCDeAVDbZ2pEThc0x0FWegAIaQVXuRA0BFTa/jD7/D/VvYBgpoveq0pjcHjmIH6VcEYdoONtQKHS22IDlXBdvSBoFDo3YYr+UwHQXbPTx5A8rZULkPlwOGSXC4ok4KeOxC4QnUQ1APBvMfUBAPaWSHPZsnIY49dFL0jB0IqEKYVkbRTUmOVw8873cAkDYbcqfQ5uAR+a8IAnrcDIUYGPnV4MzoBpVaH2PPz8wN69pi2XTqnpcAhyRtwUhomhENwB8KSQtAxB0FfICDjoS2CvKlTc5hObGmqGGUpmLDnQCDjD7cOgr5BQEAItru5DGhzbmJd8BxR76dCwp4DwSIIzufzQVpJMdXXWHCNY3yLYGgwcPi9UsKeAwFAoEQqaSOqcL/XsTPqI/1simwbCapewdBi4LBirs7YQLAwdYgxJj5nRgZLgNMCAnlUFsDQUqwA7VUocBgGEef7YwLBCgjw3shS5FnTQyAg0HZyt8UWD5UGWQ/3Kxw4nEMg/D0WEKyDgIy0JBDomZNsf+/BAFsqY4XAYQiA+f4YQIB72/t7BuhF1jwCMkra1gBC+OzWovUtASAsS6XA4RwC4W+7QIArDYFbiIyjHktDAzLC+bYmEKgsKIODYXX69lIxcBgCYL5vDwgwHAtLlMGVTE2qCY0x7Ikk9sOgJT0nZktgaC2AJyETzj0aCBzOIRD+tgMESyDAeDzG2NbOacFDmJdtAoOFXAZO/sN3ADG3XecyVfjdPxAcBPdt2CIQQuW1MGWZ4h00FjgMPYL5/r0yhQ3X8v7U43S/RBmURbrnaB0IpFfWwQCvoMHA4RwC4e/+gGBlegvJRNIgIEPrBQhUXqNgaDVwGAJgvt8PECYQdJ0AQ1OH3AAdGdDetjcgUH0mMHTdxtNQ4tDpx2faB4IlEKRMHZKRcLa9AoHqijbHUCplnN7iudILtpB8FLftAsFBwG+b3oFACo96WMhl6AgMfKWjRpPeWhhP0tCglEcwbwMrQKB6ORiK2WmxB82DF+9+W5k6PJ1O19dqSZlrbK0BgWRoBQy5S7yRPBS2dYFgBQQaU4c5jW0VCCQT1A8Zf72npeP9moLLo73rhEmWs20dIDgIdOVuHQikxKinhSFmK55l8VWXHQS6IAgNRTrqrj1VSmXnbh0MIrolcpNdVwQktxAtbm1osGY8o3gIS/V3MGTZdNbFuyCwMHWInna+RNmSIrZ0bGQgUDsgZVjaS6pwv9LfsdQBghUQkAL0lnXmQHhbOJfaz8D2UiiXQRYI1kBAioTYB/U8PWwdCB8+fv78+QdqP0tbZTDIAMEqCEiReoBAWEYHwpteI0GM2tDaFosAhW0utJ8PBCNjta1FLy5Cwt6NuUg9x4Hwpte95ynsQQyxLSmdme6TB4QBYABQHISFrg4GB8KbXmt8wWrPSEv/XxgKfCBoKF1pYcY8D1ONDoTT99bzEJba6HQ6PcS0ce/ncNfeXJAZHwi9L2seqwQI4iwITr2Xz3mmBqx7BIKF3JdIPZUa1vKAgCBiZEG3xuZd/O94PP6WY5w1rnUgvOk1Am+j6ClsUkDXeEBo8AOZanBRiuaqehgOhDe9HiTG9ar7Qp4sDwgjBGuoZxEcn6lCIOwdHAhXD+FnakepbcNTmRLDBh4QWhMKLUiiASohV6wYDAAGB8IVCOJDW3qfBVspyEjdJ+wUmPs8IEhVIPc+BALKJHQgvLWnA+FNDvhcWq6OLVx/7Ykh55YCl0wIhJ0VDwi1PYQ5CEgQGuXqMbruQNAD4/l8/kb6RtsWwLBULipfwpYHBI2eeIHES4HCzSXKIu+xdN/VYwnCDElbdd+BcNPrkjpREwxC+TI3waUofulZBhq3bZVRwwiEqFscDhqy6NFTgr7U8Boh/9JLvAnNhvGAUCoPIQYEBAnt8SI9p4etA+Gm1xrvM8S+Do92KLVgixCwb4JLVXTNKGsKCKjcGpBCOej+PW0dCDe91sio5SyMqgkGwfcZboJLVXgtA+RO8z0+Pn6SHi86EE7X2IpQD1R8+KQxC5CTm6IAhotg2/CBAIAcj8fs1FCM8SSWKNPIShPK/ipuBO4h3PRaAwhfv379JbUDnZ8vBQZuBzovz/T7JriVE3aVmQuFtalDbjk08taFAjW7MuTWee06jaCv8ko9ajLS0AvJ91tg0JzhN+xHGAZog3wg4B4ptJMGAdWh1Z6AyldiOynXP9JDp/B+vUESuhmWX2Jfw3NE28XqMAAiOEwIYSwDBCg73FS47WtRXVQC3gRlFUobSCvBI+l6xdwPsteo/4bxbOaDxJS51DkaQMA6C1rlR1vCwwtzfaZh9QHHFbwCHSCEApo+yPIfFB5/WhAIn6lhEMrCDxuCtT/J+VcozIbxXgOD0ufgG4VKPRVLHqE+0D7aULrePa6iRfLY2cp5CDsPEmvgteeseSY5yhA737xWJs3jmPrSqDNHXhhTtwoGjQArPr2m2bYV720HCBq9ZItKjgQsDW+IA4LZNU0OI7SWY69otJqdqx0gzJRTxE1uqdExPNCYPVCQm+S8uIjyK9Txe4lhcAX9swEEDbewpfcYEKzV8IA0DIXu2dI0pcbQqkXvUQAgNoBgNXCEejU6PIj1wC4SSTy5ih5G7AlYudvWA85MmTkQ1hSjZtoy3NHYOem18jd2/MLJ/2cq9d0wQwOqNesjJZeF+5gBgnjyieZc80JDXJUYiT+9DQ9i4VNrGKEB15z3Gbbav/L/zAAh+52KuVJLpqfGNDJcUI2x7rxeLfwune2oEYwtXYcYHRI4xwYQem7wClmGseN/7fOKTVPCeKVBWLrDEDD2qxe6cS8bQOjRJaydZShtINz7lch21Ehf1nifYcNQY4xZ4hwzQBBfElszaNRSliHXkKWv08x29LUyou08+kQJ+qjdo5dppYazDLWHB7H3VxlG+PJ60XYefaKaMUu4SRrBOMnEk46yDGMNV/s80WxHjcQ1o+8z2ACCtPuK+0mlpvaYZaghT849paYp/X2GaDuPPrFZD6HVxjaQZajtBcTeXyTbUSO3Q9KLlPCUBe7RPxBacwcNZhnGGq72eVnZjhrDSikvUsCQpTrs/oEAYXLc0a1ruGnLPjy4rdK8Jd+c/3GHERqB54YM2YEQNoY0/VPXuUdPgVTnHEX3a5Ngkhx0lE5e43Yaod42uG/DQ1Bo7J9SGsthkGTMIkMLvJ6eMoZHTEcSui28xZmio5Hn2gCCcGNfUsaGGmmxkopr/F6HSEV/daklPckUGKWUsfK5NoAAIcKFk1B+rAwd2yhKAU2RHlRCFuE9NKL04f25+yk9tVQKMzzSWB3p7Dw7QIBxCiht0uKZLXoHAKOU4odGOr2N+Vt4rIX91JWtBN57SfIgHQhCH3/hCDLTEJIDVRqRa66RAYb0jr6G50Iu8nTvpgKogFWsviBvJaPdknUktlyNnGfHQyCBAgoMTyG5obUSojhAmH8ARxMIoZwlx+ScetM1KcMGlB9tx/AUDgRFkoHBrT0goJFSejGMB1OCiKQEwoFMVtwAw4MlJS0BBJID99ueZMwSW+7aBOg89qCGziUlrkRy6XRrEwjUGHjLDQYPwyGvAQqA3/Nela6J3VYGwmXLTS4JBMgLz2P0uCwILgEkd20C6AmSypB/Qn+ID23JOFZPOjvPNhA0G0PpldpNI6Heas+jKQ0EkjPWHdjrcZcMOvcY10Ogcvv2yoHrjlTq4zD3qRBDiP6OYi0gkGGhty0JhtQYApXTt3f2f3dgGIOWUAYMPXJ7t4jrD6mua20gQLYlhxEtf4NTQs8K3sOBkCNszTwEDA/Q03LK1wIQqNwoi7K3kJQ7QuXy7aLtLx50LyEylwLDBgpWRvT0m/GB8HruzAcpeUtAoDLFRPRDGcTuU+4FPce3WTaddbGD48OHj+jFY5V37zwMQVKHB0sG0CIQUM7JWxDLdoS8lurvx9h2zb7QYRB4EblTbvAyJHu6VoFAhjqVLzfbMTmZjJ7v21W7X/2HG3xg8DEKBDd/zwNY+n9uPsRS2VoHApU5YxjhMEjUT5L5ztaBsCOgJDCmTLfB3V3KMpQoTy9AoLomZjs+7OVh0H19m2zfyRckGciIDQJjRM+39AINhgbIhJOIE2zJtjcgoC4oM7ysNbnhf9py25LpIP9zIGg2NHoyeAH0p/ms8N49AiEsfy25hWUYdN+BYLHheweCxTbppE4OhE4aKmmo5kBwvWbqtQuOKbgkAy39DAeC6zVT51xwTME5EHSmvZqWq0VdmdXJgTATiAmFdA/B9Zqp1y44puCaBocDwfWaqdcuOKbgHAg+ZGhaB5h67UBgCq5pZXAPwfWaqdcuOKbgHAjuITStA0y9diAwBde0MriH4HrN1GsXHFNwDgT3EJrWAaZeOxCYgmtaGTQWgLUoJ6/Tnf3fHWha0b0B49tLeGk3X7dwDI8oXsHcGPuSleSK0Hhl29u/r/ZnttcQlRzS68FHU5ZWaOIcOxwOn5gKNqTsO5aVA6Hjxts1NqHlz324MMZwAfrkQLAsA6wwxPEIwmt8laKhbGSoyu72qBbhkLhe4btvR+BaizLxOq3a/eo/hjQeq4rCgYLDYEjbGLLSQ8IuYcnzzU/NW4Wm1+uVBQ6E0RQBYDidTg/h6sYIPmJq0WcThreH4QUwpLcwGgS9vtF2Hn2iG47PyLgO2NcBB4L3Hq4DrgNXHbjuOP3t09/b2Nt4TwccCN47uA64Dlx14LqzRw7/v/curgP2dcCB4L2D64DrwFUHrjtOf/v09zb2Nt7TAQeC9w6uA64DVx247uyRw//vvYvrgHEd+D9bbLDa2Af5WQAAAABJRU5ErkJggg==", "scales": [1], "name": "ic_lumi.png", "type": "png" });
    }
  });

  // src/components/Libraries/react-native-safe-area-context.tsx
  var react_native_safe_area_context_exports = {};
  __export(react_native_safe_area_context_exports, {
    SafeAreaProvider: () => SafeAreaProvider,
    SafeAreaView: () => SafeAreaView,
    useSafeAreaInsets: () => useSafeAreaInsets
  });
  var SafeAreaView, SafeAreaProvider, useSafeAreaInsets;
  var init_react_native_safe_area_context = __esm({
    "src/components/Libraries/react-native-safe-area-context.tsx"() {
      "use strict";
      init_wrappers();
      init_lazy();
      ({ SafeAreaView, SafeAreaProvider, useSafeAreaInsets } = lazyDestructure(() => lookupByProps("useSafeAreaInsets", "SafeAreaView", "SafeAreaProvider").asLazy((m2) => ({ SafeAreaView, SafeAreaProvider, useSafeAreaInsets } = m2))));
    }
  });

  // src/components/Wintry/Settings/PageWrapper.tsx
  var PageWrapper_exports = {};
  __export(PageWrapper_exports, {
    default: () => PageWrapper
  });
  function PageWrapper(props) {
    var { height } = useSafeAreaInsets();
    var containerStyle = [
      {
        paddingTop: 8,
        paddingHorizontal: 12
      },
      props.containerStyle
    ];
    var node = props.children;
    if (props.scrollable) {
      node = /* @__PURE__ */ jsx(import_react_native12.ScrollView, {
        contentContainerStyle: containerStyle,
        children: node
      });
    } else {
      node = /* @__PURE__ */ jsx(import_react_native12.View, {
        style: [
          {
            flex: 1,
            maxHeight: height
          },
          containerStyle
        ],
        children: node
      });
    }
    return /* @__PURE__ */ jsx(SafeAreaView, {
      style: {
        flex: 1
      },
      edges: props.edges ?? [
        "right",
        "bottom",
        "left"
      ],
      children: node
    });
  }
  var import_react_native12;
  var init_PageWrapper = __esm({
    "src/components/Wintry/Settings/PageWrapper.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_react_native_safe_area_context();
      import_react_native12 = __toESM(require_react_native(), 1);
      __name(PageWrapper, "PageWrapper");
    }
  });

  // src/components/Wintry/Settings/pages/Wintry/InfoCard.tsx
  var InfoCard_exports = {};
  __export(InfoCard_exports, {
    InfoCard: () => InfoCard
  });
  function InfoCard({ title, style, icon, tag, onPress, trailing }) {
    return /* @__PURE__ */ jsx(Card_default, {
      style,
      onPress,
      children: /* @__PURE__ */ jsxs(import_react_native13.View, {
        style: {
          gap: 8
        },
        children: [
          tag && /* @__PURE__ */ jsx(import_react_native13.View, {
            style: {
              position: "absolute",
              top: -28,
              right: -18
            },
            children: /* @__PURE__ */ jsx(Tag, {
              text: tag
            })
          }),
          /* @__PURE__ */ jsxs(import_react_native13.View, {
            style: {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [
              icon,
              /* @__PURE__ */ jsx(Text_default, {
                numberOfLines: 2,
                style: {
                  textAlign: "right"
                },
                variant: "text-sm/medium",
                color: "text-muted",
                children: trailing
              })
            ]
          }),
          /* @__PURE__ */ jsx(Text_default, {
            variant: "heading-md/semibold",
            children: title
          })
        ]
      })
    });
  }
  var import_react_native13;
  var init_InfoCard = __esm({
    "src/components/Wintry/Settings/pages/Wintry/InfoCard.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_Tag();
      import_react_native13 = __toESM(require_react_native(), 1);
      __name(InfoCard, "InfoCard");
    }
  });

  // src/components/Wintry/Settings/pages/Wintry/ClientInfoSheet.tsx
  var ClientInfoSheet_exports = {};
  __export(ClientInfoSheet_exports, {
    ClientInfoSheet: () => ClientInfoSheet
  });
  function ClientInfoSheet() {
    var { discord, react, reactNative, hermes } = getVersions();
    return /* @__PURE__ */ jsx(BottomSheet_default, {
      bodyStyles: {
        padding: 12
      },
      children: /* @__PURE__ */ jsxs(TableRowGroup_default, {
        title: t3.settings.general.client_info.label(),
        children: [
          /* @__PURE__ */ jsx(TableRow_default, {
            label: t3.discord(),
            icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
              source: findAssetId("Discord")
            }),
            trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
              text: `${discord.version} (${discord.build})`
            })
          }),
          /* @__PURE__ */ jsx(TableRow_default, {
            label: t3.settings.general.react(),
            icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
              source: findAssetId("ScienceIcon")
            }),
            trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
              text: react.version
            })
          }),
          /* @__PURE__ */ jsx(TableRow_default, {
            label: t3.settings.general.react_native(),
            icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
              source: findAssetId("ScienceIcon")
            }),
            trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
              text: `${reactNative.version} (${reactNative.branch})`
            })
          }),
          /* @__PURE__ */ jsx(TableRow_default, {
            label: t3.settings.general.hermes(),
            icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
              source: findAssetId("PollsIcon")
            }),
            trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
              text: hermes.bytecodeVersion
            })
          })
        ]
      })
    });
  }
  var init_ClientInfoSheet = __esm({
    "src/components/Wintry/Settings/pages/Wintry/ClientInfoSheet.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      init_assets();
      init_info();
      init_Discord2();
      __name(ClientInfoSheet, "ClientInfoSheet");
    }
  });

  // src/components/Wintry/Settings/pages/Updater/index.tsx
  var Updater_exports = {};
  __export(Updater_exports, {
    default: () => UpdaterPage
  });
  function UpdaterPage() {
    var { bunny } = getVersions();
    var { isCheckingForUpdates, notifyOnNewUpdate, checkForUpdates } = useUpdaterStore();
    var { config } = useInitConfigStore();
    var check = /* @__PURE__ */ function() {
      var _ref = _async_to_generator(function* () {
        try {
          var updateAvailable = yield checkForUpdates();
          if (updateAvailable) {
            showUpdateAvailableAlert(updateAvailable);
          } else {
            showAlreadyUpdatedToast();
          }
        } catch (e3) {
          showUpdateErrorAlert(e3);
        }
      });
      return /* @__PURE__ */ __name(function check2() {
        return _ref.apply(this, arguments);
      }, "check");
    }();
    (0, import_react8.useEffect)(() => void check(), []);
    return /* @__PURE__ */ jsxs(PageWrapper, {
      scrollable: true,
      containerStyle: {
        paddingTop: 16,
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsxs(TableRowGroup_default, {
          title: t3.settings.updater.info(),
          children: [
            /* @__PURE__ */ jsx(TableRow_default, {
              label: t3.wintry(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: require_ic_lumi()
              }),
              trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                text: `${bunny.version}-${bunny.shortRevision} (${bunny.branch})`
              })
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              label: t3.settings.updater.repo(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("img_account_sync_github_light")
              }),
              trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                text: bunny.remote
              })
            })
          ]
        }),
        /* @__PURE__ */ jsx(import_react_native14.View, {
          style: {
            flexShrink: 1,
            alignSelf: "flex-end"
          },
          children: /* @__PURE__ */ jsx(Button_default, {
            text: t3.settings.updater.checkForUpdates(),
            onPress: check,
            icon: findAssetId("DownloadIcon"),
            disabled: isCheckingForUpdates,
            loading: isCheckingForUpdates
          })
        }),
        /* @__PURE__ */ jsxs(TableRowGroup_default, {
          title: t3.settings.updater.settings(),
          children: [
            /* @__PURE__ */ jsx(TableSwitchRow_default, {
              label: t3.settings.updater.autoUpdate(),
              subLabel: t3.settings.updater.autoUpdateDescription(),
              value: !config.skipUpdate,
              onValueChange: /* @__PURE__ */ __name((v) => useInitConfigStore.setState((s) => ({
                config: {
                  ...s.config,
                  skipUpdate: !v
                }
              })), "onValueChange")
            }),
            /* @__PURE__ */ jsx(TableSwitchRow_default, {
              label: t3.settings.updater.notifyNewUpdates(),
              subLabel: t3.settings.updater.notifyNewUpdatesDescription(),
              disabled: !config.skipUpdate,
              value: notifyOnNewUpdate && config.skipUpdate,
              onValueChange: /* @__PURE__ */ __name((v) => useUpdaterStore.setState({
                notifyOnNewUpdate: v
              }), "onValueChange")
            })
          ]
        })
      ]
    });
  }
  var import_react_native14, import_react8;
  var init_Updater = __esm({
    "src/components/Wintry/Settings/pages/Updater/index.tsx"() {
      "use strict";
      init_async_to_generator();
      init_jsxRuntime();
      init_Discord2();
      init_Button();
      init_PageWrapper();
      init_i18n();
      init_info();
      init_AlertModal();
      init_assets();
      import_react_native14 = __toESM(require_react_native(), 1);
      init_useUpdaterStore();
      init_useInitConfigStore();
      import_react8 = __toESM(require_react(), 1);
      __name(UpdaterPage, "UpdaterPage");
    }
  });

  // src/components/Discord/TableRow/TableRowDivider.tsx
  var TableRowDivider_exports = {};
  __export(TableRowDivider_exports, {
    default: () => TableRowDivider_default
  });
  var TableRowDivider_default;
  var init_TableRowDivider = __esm({
    "src/components/Discord/TableRow/TableRowDivider.tsx"() {
      "use strict";
      init_util();
      TableRowDivider_default = getComponentFromProps("TableRowDivider");
    }
  });

  // src/components/Discord/Forms/FormCheckbox.tsx
  var FormCheckbox_exports = {};
  __export(FormCheckbox_exports, {
    default: () => FormCheckbox_default
  });
  var FormCheckbox_default;
  var init_FormCheckbox = __esm({
    "src/components/Discord/Forms/FormCheckbox.tsx"() {
      "use strict";
      init_util();
      FormCheckbox_default = getComponentFromProps("FormCheckbox", {
        singular: true
      });
    }
  });

  // src/components/Wintry/InlineCheckbox.tsx
  var InlineCheckbox_exports = {};
  __export(InlineCheckbox_exports, {
    InlineCheckbox: () => InlineCheckbox
  });
  function InlineCheckbox({ label, checked, onPress }) {
    return /* @__PURE__ */ jsxs(import_react_native15.Pressable, {
      onPress: /* @__PURE__ */ __name(() => onPress(!checked), "onPress"),
      style: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
      },
      children: [
        /* @__PURE__ */ jsx(FormCheckbox_default, {
          checked
        }),
        /* @__PURE__ */ jsx(Text_default, {
          variant: "text-md/normal",
          children: label
        })
      ]
    });
  }
  var import_react_native15;
  var init_InlineCheckbox = __esm({
    "src/components/Wintry/InlineCheckbox.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_FormCheckbox();
      import_react_native15 = __toESM(require_react_native(), 1);
      __name(InlineCheckbox, "InlineCheckbox");
    }
  });

  // src/components/Wintry/Settings/pages/InfoSection.tsx
  var InfoSection_exports = {};
  __export(InfoSection_exports, {
    InfoSection: () => InfoSection
  });
  function InfoSection({ label, children }) {
    return /* @__PURE__ */ jsxs(import_react_native16.View, {
      children: [
        /* @__PURE__ */ jsx(Text_default, {
          variant: "heading-sm/semibold",
          color: "text-secondary",
          style: {
            marginBottom: 8
          },
          children: label
        }),
        typeof children === "string" ? /* @__PURE__ */ jsx(Text_default, {
          variant: "text-md/medium",
          children
        }) : children
      ]
    });
  }
  var import_react_native16;
  var init_InfoSection = __esm({
    "src/components/Wintry/Settings/pages/InfoSection.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native16 = __toESM(require_react_native(), 1);
      init_Discord2();
      __name(InfoSection, "InfoSection");
    }
  });

  // src/components/Wintry/Settings/pages/Logs/constants.tsx
  var constants_exports2 = {};
  __export(constants_exports2, {
    VARIANT_CONFIG: () => VARIANT_CONFIG
  });
  var VARIANT_CONFIG;
  var init_constants2 = __esm({
    "src/components/Wintry/Settings/pages/Logs/constants.tsx"() {
      "use strict";
      VARIANT_CONFIG = {
        info: {
          background: "CARD_PRIMARY_BG",
          textColor: "text-normal",
          timestampColor: "text-muted"
        },
        warn: {
          background: "INFO_WARNING_BACKGROUND",
          textColor: "text-normal",
          timestampColor: "text-muted"
        },
        error: {
          background: "STATUS_DANGER",
          textColor: "white",
          timestampColor: "white"
        },
        debug: {
          background: "CARD_PRIMARY_BG",
          textColor: "text-normal",
          timestampColor: "text-muted"
        }
      };
    }
  });

  // src/components/Wintry/Settings/pages/Logs/LogDetailsSheet.tsx
  var LogDetailsSheet_exports = {};
  __export(LogDetailsSheet_exports, {
    LogDetailsSheet: () => LogDetailsSheet
  });
  function LogDetailsSheet({ log }) {
    var variantStyles = VARIANT_CONFIG[log.level];
    var backgroundColor = useToken(tokens.colors[variantStyles.background]);
    return /* @__PURE__ */ jsx(BottomSheet_default, {
      children: /* @__PURE__ */ jsxs(import_react_native17.View, {
        style: {
          padding: 16,
          gap: 16
        },
        children: [
          /* @__PURE__ */ jsxs(Stack_default, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            style: {
              padding: 12,
              paddingHorizontal: 16,
              backgroundColor,
              borderRadius: 16
            },
            children: [
              /* @__PURE__ */ jsxs(import_react_native17.View, {
                style: {
                  gap: 4
                },
                children: [
                  /* @__PURE__ */ jsx(Text_default, {
                    variant: "text-lg/semibold",
                    color: variantStyles.textColor,
                    children: log.level.toUpperCase()
                  }),
                  /* @__PURE__ */ jsx(Text_default, {
                    variant: "text-xs/semibold",
                    color: variantStyles.textColor,
                    children: new Date(log.timestamp).toLocaleString()
                  })
                ]
              }),
              /* @__PURE__ */ jsx(Button_default, {
                size: "sm",
                variant: "secondary",
                onPress: /* @__PURE__ */ __name(() => {
                  var toCopy = `${log.level.toUpperCase()} | ${new Date(log.timestamp).toLocaleString()}
${log.message}`;
                  if (log.breadcrumbs?.length) {
                    toCopy += `
${log.breadcrumbs.join(" > ")}`;
                  }
                  if (log.errorStack) {
                    toCopy += `
${log.errorStack}`;
                  }
                  copyToClipboard(toCopy);
                }, "onPress"),
                text: t3.actions.copy()
              })
            ]
          }),
          /* @__PURE__ */ jsx(InfoSection, {
            label: "Message",
            children: /* @__PURE__ */ jsx(Codeblock, {
              children: log.message
            })
          }),
          log.errorStack && /* @__PURE__ */ jsx(InfoSection, {
            label: "Error",
            children: /* @__PURE__ */ jsx(Codeblock, {
              selectable: true,
              children: log.errorStack
            })
          })
        ]
      })
    });
  }
  var import_react_native17;
  var init_LogDetailsSheet = __esm({
    "src/components/Wintry/Settings/pages/Logs/LogDetailsSheet.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Codeblock();
      init_Discord2();
      init_libraries();
      import_react_native17 = __toESM(require_react_native(), 1);
      init_InfoSection();
      init_clipboard();
      init_i18n();
      init_constants2();
      __name(LogDetailsSheet, "LogDetailsSheet");
    }
  });

  // src/components/Wintry/Settings/pages/Logs/LogRow.tsx
  var LogRow_exports = {};
  __export(LogRow_exports, {
    LogRow: () => LogRow
  });
  function LogRow({ item: log, start, end }) {
    var variantStyles = VARIANT_CONFIG[log.level];
    var backgroundColor = useToken(tokens.colors[variantStyles.background]);
    var handlePress = /* @__PURE__ */ __name(() => {
      showSheet("Log Details", LogDetailsSheet, {
        log
      });
    }, "handlePress");
    return /* @__PURE__ */ jsx(import_react_native18.View, {
      style: {
        gap: 2,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor,
        ...start ? {
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12
        } : end ? {
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12
        } : {}
      },
      children: /* @__PURE__ */ jsxs(PressableScale_default, {
        onPress: handlePress,
        children: [
          /* @__PURE__ */ jsxs(Text_default, {
            variant: "text-xxs/semibold",
            color: variantStyles.timestampColor,
            children: [
              log.level.toUpperCase(),
              " | ",
              new Date(log.timestamp).toLocaleString()
            ]
          }),
          log.breadcrumbs?.length !== 0 && /* @__PURE__ */ jsx(Text_default, {
            style: {
              paddingBottom: 4
            },
            variant: "text-xs/semibold",
            color: variantStyles.timestampColor,
            children: log.breadcrumbs.join(" > ")
          }),
          /* @__PURE__ */ jsx(Text_default, {
            numberOfLines: 6,
            variant: "text-sm/semibold",
            color: variantStyles.textColor,
            children: log.message
          })
        ]
      })
    });
  }
  var import_react_native18;
  var init_LogRow = __esm({
    "src/components/Wintry/Settings/pages/Logs/LogRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_PressableScale();
      init_sheets();
      init_libraries();
      import_react_native18 = __toESM(require_react_native(), 1);
      init_LogDetailsSheet();
      init_constants2();
      __name(LogRow, "LogRow");
    }
  });

  // src/components/Wintry/Settings/pages/Logs/index.tsx
  var Logs_exports = {};
  __export(Logs_exports, {
    default: () => LogsPage
  });
  function LogsPage() {
    var [showDebug, setShowDebug] = (0, import_react9.useState)(false);
    var filteredLogs = (0, import_react9.useMemo)(() => {
      return wtlogger.logs.filter((log) => log.level !== "debug" || showDebug);
    }, [
      showDebug
    ]);
    return /* @__PURE__ */ jsx(PageWrapper, {
      children: /* @__PURE__ */ jsx(import_flash_list2.FlashList, {
        data: filteredLogs,
        ListHeaderComponent: /* @__PURE__ */ jsx(import_react_native19.ScrollView, {
          contentContainerStyle: {
            gap: 12,
            paddingVertical: 12
          },
          horizontal: true,
          children: /* @__PURE__ */ jsx(InlineCheckbox, {
            label: "Show debug",
            checked: showDebug,
            onPress: /* @__PURE__ */ __name(() => setShowDebug((v) => !v), "onPress")
          })
        }),
        ItemSeparatorComponent: TableRowDivider_default,
        renderItem: /* @__PURE__ */ __name(({ item, index }) => /* @__PURE__ */ jsx(LogRow, {
          item,
          start: index === 0,
          end: index === filteredLogs.length - 1
        }), "renderItem"),
        estimatedItemSize: 80
      })
    });
  }
  var import_flash_list2, import_react9, import_react_native19;
  var init_Logs = __esm({
    "src/components/Wintry/Settings/pages/Logs/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_TableRowDivider();
      init_PageWrapper();
      import_flash_list2 = __toESM(require_flash_list(), 1);
      import_react9 = __toESM(require_react(), 1);
      import_react_native19 = __toESM(require_react_native(), 1);
      init_InlineCheckbox();
      init_LogRow();
      init_logger();
      __name(LogsPage, "LogsPage");
    }
  });

  // src/components/Wintry/Settings/pages/Wintry/index.tsx
  var Wintry_exports = {};
  __export(Wintry_exports, {
    default: () => WintryPage
  });
  function WintryPage() {
    var navigation = NavigationNative.useNavigation();
    var { config, toggleSafeMode } = useInitConfigStore();
    var updateAvailable = useUpdaterStore((state2) => state2.availableUpdate);
    var { bunny, discord } = getVersions();
    return /* @__PURE__ */ jsxs(PageWrapper, {
      scrollable: true,
      containerStyle: {
        paddingTop: 16,
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsx(import_react_native20.View, {
          style: {
            gap: 12
          },
          children: /* @__PURE__ */ jsxs(import_react_native20.View, {
            style: {
              flexDirection: "row",
              gap: 12,
              flexWrap: "wrap"
            },
            children: [
              /* @__PURE__ */ jsx(InfoCard, {
                title: t3.wintry(),
                tag: updateAvailable ? t3.updater.update_tag() : void 0,
                style: {
                  flex: 1
                },
                trailing: `${bunny.version}-${bunny.shortRevision}
(${bunny.branch})`,
                icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                  source: require_ic_lumi()
                }),
                onPress: /* @__PURE__ */ __name(() => {
                  navigation.push("LUMI_CUSTOM_PAGE", {
                    title: t3.wintry(),
                    render: /* @__PURE__ */ (0, import_react10.lazy)(() => Promise.resolve().then(() => (init_Updater(), Updater_exports)))
                  });
                }, "onPress")
              }),
              /* @__PURE__ */ jsx(InfoCard, {
                title: t3.discord(),
                style: {
                  flex: 1
                },
                trailing: `${discord.version}
(${discord.build})`,
                icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                  source: findAssetId("Discord")
                }),
                onPress: /* @__PURE__ */ __name(() => showSheet("ClientInfoSheet", ClientInfoSheet), "onPress")
              })
            ]
          })
        }),
        /* @__PURE__ */ jsx(TableRowGroup_default, {
          children: /* @__PURE__ */ jsx(TableRow_default, {
            arrow: true,
            label: t3.settings.general.logs(),
            onPress: /* @__PURE__ */ __name(() => navigation.push("LUMI_CUSTOM_PAGE", {
              title: t3.settings.general.logs(),
              render: /* @__PURE__ */ (0, import_react10.lazy)(() => Promise.resolve().then(() => (init_Logs(), Logs_exports)))
            }), "onPress"),
            icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
              source: findAssetId("PaperIcon")
            })
          })
        }),
        /* @__PURE__ */ jsx(TableRowGroup_default, {
          title: t3.settings.general.configurations.label(),
          children: /* @__PURE__ */ jsx(TableSwitchRow_default, {
            label: t3.settings.general.configurations.safe_mode.label(),
            subLabel: t3.settings.general.configurations.safe_mode.description(),
            icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
              source: findAssetId("ShieldIcon")
            }),
            value: config.safeMode,
            onValueChange: /* @__PURE__ */ __name((v) => {
              var showSafeModeAlert = /* @__PURE__ */ __name((enable) => {
                var ts = t3.settings.general.configurations.safe_mode.alert;
                var action = enable ? "enable" : "disable";
                showAlert({
                  id: `safe-mode-${action}`,
                  title: ts.title({
                    action
                  }),
                  content: ts.description({
                    action
                  }),
                  actions: [
                    {
                      text: ts.apply_and_restart(),
                      onPress: /* @__PURE__ */ _async_to_generator(function* () {
                        toggleSafeMode(enable);
                        yield delay(500);
                        BundleUpdaterModule.reload();
                      })
                    },
                    {
                      text: ts.apply_without_restart(),
                      variant: enable ? "primary" : "secondary",
                      onPress: /* @__PURE__ */ _async_to_generator(function* () {
                        toggleSafeMode(enable);
                      })
                    },
                    {
                      text: t3.actions.nevermind(),
                      variant: "secondary",
                      onPress: /* @__PURE__ */ __name(() => {
                      }, "onPress")
                    }
                  ]
                });
              }, "showSafeModeAlert");
              showSafeModeAlert(v);
            }, "onValueChange")
          })
        }),
        /* @__PURE__ */ jsxs(TableRowGroup_default, {
          title: t3.settings.general.links(),
          children: [
            /* @__PURE__ */ jsx(TableRow_default, {
              label: t3.settings.general.github(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("img_account_sync_github_light")
              }),
              arrow: true,
              trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                text: Links.GITHUB
              }),
              onPress: /* @__PURE__ */ __name(() => openURL(`https://${Links.GITHUB}`), "onPress")
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              label: t3.settings.general.discord(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("Discord")
              }),
              arrow: true,
              trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                text: Links.DISCORD
              }),
              onPress: /* @__PURE__ */ __name(() => openURL(`https://${Links.DISCORD}`), "onPress")
            })
          ]
        })
      ]
    });
  }
  var import_react_native20, import_react10;
  var init_Wintry = __esm({
    "src/components/Wintry/Settings/pages/Wintry/index.tsx"() {
      "use strict";
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_assets();
      init_PageWrapper();
      init_info();
      init_Discord2();
      import_react_native20 = __toESM(require_react_native(), 1);
      init_dist();
      init_libraries();
      import_react10 = __toESM(require_react(), 1);
      init_InfoCard();
      init_sheets();
      init_ClientInfoSheet();
      init_alerts();
      init_native();
      init_url();
      init_constants();
      init_useInitConfigStore();
      init_useUpdaterStore();
      __name(WintryPage, "WintryPage");
    }
  });

  // src/components/Wintry/Callout.tsx
  var Callout_exports = {};
  __export(Callout_exports, {
    default: () => Callout
  });
  function Callout({ title, children, variant = "info" }) {
    var config = CALLOUT_VARIANT_CONFIG[variant];
    var backgroundColor = useToken(tokens.colors[config.background]);
    var borderColor = useToken(tokens.colors[config.foreground]);
    var IconComponent = config.Icon;
    return /* @__PURE__ */ jsxs(import_react_native21.View, {
      style: {
        padding: 16,
        backgroundColor,
        borderWidth: 1,
        borderColor,
        borderRadius: 12,
        rowGap: 8
      },
      children: [
        /* @__PURE__ */ jsxs(import_react_native21.View, {
          style: {
            flexDirection: "row",
            alignItems: "center",
            gap: 8
          },
          children: [
            /* @__PURE__ */ jsx(IconComponent, {
              style: {
                width: 18,
                height: 18
              }
            }),
            title && /* @__PURE__ */ jsx(Text_default, {
              variant: "heading-lg/semibold",
              children: title
            })
          ]
        }),
        /* @__PURE__ */ jsx(Text_default, {
          variant: "text-md/medium",
          color: config.textColor,
          children
        })
      ]
    });
  }
  var import_react_native21, CALLOUT_VARIANT_CONFIG;
  var init_Callout = __esm({
    "src/components/Wintry/Callout.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_libraries();
      import_react_native21 = __toESM(require_react_native(), 1);
      init_Discord2();
      init_icons();
      CALLOUT_VARIANT_CONFIG = {
        info: {
          background: "INFO_BOX_BACKGROUND",
          foreground: "CREATOR_REVENUE_INFO_BOX_BORDER",
          textColor: "info-positive-text",
          Icon: CircleInformationIcon
        },
        success: {
          background: "INFO_POSITIVE_BACKGROUND",
          foreground: "INFO_POSITIVE_FOREGROUND",
          textColor: "info-positive-text",
          Icon: CircleCheckIcon
        },
        warning: {
          background: "INFO_WARNING_BACKGROUND",
          foreground: "INFO_WARNING_FOREGROUND",
          textColor: "info-positive-text",
          Icon: WarningIcon
        },
        danger: {
          background: "INFO_DANGER_BACKGROUND",
          foreground: "INFO_DANGER_FOREGROUND",
          textColor: "info-positive-text",
          Icon: WarningIcon
        }
      };
      __name(Callout, "Callout");
    }
  });

  // src/components/Wintry/Settings/pages/ResponsiveMasonryFlashList.tsx
  var ResponsiveMasonryFlashList_exports = {};
  __export(ResponsiveMasonryFlashList_exports, {
    ResponsiveMasonryFlashList: () => ResponsiveMasonryFlashList
  });
  function ResponsiveMasonryFlashList(props) {
    var minWidth = props.itemMinWidth;
    var dimensions = (0, import_react_native22.useWindowDimensions)();
    var listProps = (0, import_react11.useMemo)(() => omit(props, [
      "data",
      "renderItem"
    ]), [
      props
    ]);
    var numColumns = (0, import_react11.useMemo)(() => Math.min(props.data.length, Math.floor((dimensions.width - 24) / minWidth)), [
      dimensions.width,
      props.data,
      minWidth
    ]);
    var renderItem = (0, import_react11.useCallback)((info) => {
      var { columnIndex } = info;
      var Item = props.renderItem;
      return /* @__PURE__ */ jsx(import_react_native22.View, {
        style: {
          minWidth,
          paddingRight: columnIndex === numColumns - 1 ? 0 : 4,
          paddingLeft: columnIndex === 0 ? 0 : 4
        },
        children: /* @__PURE__ */ jsx(Item, {
          ...info
        })
      });
    }, [
      numColumns,
      minWidth,
      props.renderItem
    ]);
    return /* @__PURE__ */ jsx(import_flash_list3.MasonryFlashList, {
      data: props.data,
      numColumns,
      renderItem,
      ...listProps
    });
  }
  var import_react11, import_react_native22, import_flash_list3;
  var init_ResponsiveMasonryFlashList = __esm({
    "src/components/Wintry/Settings/pages/ResponsiveMasonryFlashList.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react11 = __toESM(require_react(), 1);
      import_react_native22 = __toESM(require_react_native(), 1);
      init_dist();
      import_flash_list3 = __toESM(require_flash_list(), 1);
      __name(ResponsiveMasonryFlashList, "ResponsiveMasonryFlashList");
    }
  });

  // src/components/Discord/Forms/FormSwitch.tsx
  var FormSwitch_exports = {};
  __export(FormSwitch_exports, {
    default: () => FormSwitch_default
  });
  var FormSwitch_default;
  var init_FormSwitch = __esm({
    "src/components/Discord/Forms/FormSwitch.tsx"() {
      "use strict";
      init_util();
      FormSwitch_default = getComponentFromProps("FormSwitch", {
        singular: true
      });
    }
  });

  // src/components/Wintry/Settings/pages/Addon/SearchTermHighlight.tsx
  var SearchTermHighlight_exports = {};
  __export(SearchTermHighlight_exports, {
    HighlightProvider: () => HighlightProvider,
    useHighlight: () => useHighlight,
    useHighlightedSearchTerm: () => useHighlightedSearchTerm
  });
  function HighlightProvider({ children, result, searchTerms }) {
    var contextValue = (0, import_react12.useMemo)(() => ({
      result,
      searchTerms
    }), [
      result,
      searchTerms
    ]);
    return /* @__PURE__ */ jsx(HighlightContext.Provider, {
      value: contextValue,
      children
    });
  }
  function useHighlight() {
    var context11 = (0, import_react12.useContext)(HighlightContext);
    if (!context11) {
      throw new Error("useHighlight must be used within a HighlightProvider");
    }
    return context11;
  }
  function useHighlightedSearchTerm(index) {
    var { result, searchTerms } = useHighlight();
    return (0, import_react12.useCallback)((textProps) => {
      var highlightedNode = result[index]?.highlight?.((m2, i2) => /* @__PURE__ */ jsx(Text_default, {
        ...textProps,
        style: [
          textProps.style,
          {
            backgroundColor: chroma(tokens.unsafe_rawColors.YELLOW_300).alpha(0.3).hex()
          }
        ],
        children: m2
      }, i2)) || [];
      return /* @__PURE__ */ jsx(Text_default, {
        ...textProps,
        children: highlightedNode.length > 0 ? highlightedNode : searchTerms[index](result.obj)
      });
    }, [
      result,
      searchTerms,
      index
    ]);
  }
  var import_react12, HighlightContext;
  var init_SearchTermHighlight = __esm({
    "src/components/Wintry/Settings/pages/Addon/SearchTermHighlight.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_libraries();
      import_react12 = __toESM(require_react(), 1);
      HighlightContext = /* @__PURE__ */ (0, import_react12.createContext)(null);
      __name(HighlightProvider, "HighlightProvider");
      __name(useHighlight, "useHighlight");
      __name(useHighlightedSearchTerm, "useHighlightedSearchTerm");
    }
  });

  // src/components/Wintry/Settings/pages/Addon/AddonCard.tsx
  var AddonCard_exports = {};
  __export(AddonCard_exports, {
    default: () => AddonCard
  });
  function CardHeader({ addon }) {
    var HeaderText = useHighlightedSearchTerm(0);
    return /* @__PURE__ */ jsx(import_react_native23.View, {
      style: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6
      },
      children: /* @__PURE__ */ jsx(HeaderText, {
        variant: "heading-lg/semibold"
      })
    });
  }
  function CardDevs({ addon }) {
    if (!addon.authors) return null;
    var DevText = useHighlightedSearchTerm(2);
    return /* @__PURE__ */ jsx(import_react_native23.View, {
      style: {
        flexDirection: "row",
        flexWrap: "wrap",
        flexShrink: 1,
        gap: 4
      },
      children: /* @__PURE__ */ jsxs(Text_default, {
        variant: "text-sm/semibold",
        color: "text-muted",
        children: [
          "by ",
          /* @__PURE__ */ jsx(DevText, {
            variant: "text-sm/semibold",
            color: "text-muted"
          })
        ]
      })
    });
  }
  function Description() {
    var DescriptionText = useHighlightedSearchTerm(1);
    return /* @__PURE__ */ jsx(DescriptionText, {
      variant: "text-md/medium",
      color: "text-secondary"
    });
  }
  function CardActions({ addon, pageProps }) {
    return /* @__PURE__ */ jsx(import_react_native23.View, {
      style: {
        flexDirection: "row",
        gap: 6
      },
      children: pageProps.onPressInfo && /* @__PURE__ */ jsx(IconButton_default, {
        size: "sm",
        variant: "secondary",
        icon: findAssetId("CircleInformationIcon-primary"),
        onPress: /* @__PURE__ */ __name(() => pageProps.onPressInfo?.(addon), "onPress")
      })
    });
  }
  function CardSwitch({ addon, pageProps }) {
    var canToggle = pageProps.useCanHandleAddon(addon.$id);
    var [enabled, setEnabled] = pageProps.useToggler(addon.$id);
    return /* @__PURE__ */ jsx(import_react_native23.View, {
      children: /* @__PURE__ */ jsx(FormSwitch_default, {
        value: enabled,
        disabled: !canToggle,
        onValueChange: /* @__PURE__ */ __name((v) => {
          setEnabled(v);
        }, "onValueChange")
      })
    });
  }
  function AddonCard(props) {
    var { pageProps, addon } = props;
    var handleable = pageProps.useCanHandleAddon(addon.$id);
    return /* @__PURE__ */ jsx(Card_default, {
      style: {
        opacity: !handleable ? 0.7 : 1
      },
      onPress: handleable && pageProps.onPressInfo && (() => pageProps.onPressInfo(addon)) || void 0,
      children: /* @__PURE__ */ jsxs(Stack_default, {
        spacing: 8,
        children: [
          /* @__PURE__ */ jsxs(import_react_native23.View, {
            style: {
              flexDirection: "row",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ jsxs(import_react_native23.View, {
                style: {
                  flexShrink: 1
                },
                children: [
                  /* @__PURE__ */ jsx(CardHeader, {
                    addon
                  }),
                  /* @__PURE__ */ jsx(CardDevs, {
                    addon
                  })
                ]
              }),
              /* @__PURE__ */ jsx(import_react_native23.View, {
                children: /* @__PURE__ */ jsxs(Stack_default, {
                  spacing: 12,
                  direction: "horizontal",
                  children: [
                    /* @__PURE__ */ jsx(CardActions, {
                      addon,
                      pageProps
                    }),
                    /* @__PURE__ */ jsx(CardSwitch, {
                      addon,
                      pageProps
                    })
                  ]
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx(Description, {})
        ]
      })
    });
  }
  var import_react_native23;
  var init_AddonCard = __esm({
    "src/components/Wintry/Settings/pages/Addon/AddonCard.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native23 = __toESM(require_react_native(), 1);
      init_assets();
      init_IconButton();
      init_FormSwitch();
      init_Discord2();
      init_SearchTermHighlight();
      __name(CardHeader, "CardHeader");
      __name(CardDevs, "CardDevs");
      __name(Description, "Description");
      __name(CardActions, "CardActions");
      __name(CardSwitch, "CardSwitch");
      __name(AddonCard, "AddonCard");
    }
  });

  // src/components/Wintry/Settings/pages/Addon/index.tsx
  var Addon_exports = {};
  __export(Addon_exports, {
    default: () => AddonPage
  });
  function AddonPage(props) {
    var { useFilterResults, FilterBarComponent } = props.collectionManager;
    var results = useFilterResults();
    return /* @__PURE__ */ jsx(PageWrapper, {
      containerStyle: {
        paddingHorizontal: 0
      },
      children: /* @__PURE__ */ jsx(ResponsiveMasonryFlashList, {
        data: results,
        itemMinWidth: 244,
        estimatedItemSize: 150,
        keyExtractor: /* @__PURE__ */ __name((i2) => i2.obj.$id, "keyExtractor"),
        renderItem: /* @__PURE__ */ __name(({ item: result }) => /* @__PURE__ */ jsx(HighlightProvider, {
          result,
          searchTerms: props.collectionManager.searchTerms,
          children: /* @__PURE__ */ jsx(AddonCard, {
            addon: result.obj,
            pageProps: props
          })
        }), "renderItem"),
        ItemSeparatorComponent: ItemSeparator,
        ListHeaderComponent: /* @__PURE__ */ jsxs(import_react_native24.View, {
          style: {
            gap: 8
          },
          children: [
            /* @__PURE__ */ jsx(FilterBarComponent, {}),
            isSafeModeEnabled() && /* @__PURE__ */ jsx(Callout, {
              variant: "info",
              title: t3.settings.plugins.safe_mode_callout(),
              children: t3.settings.plugins.safe_mode_callout_desc()
            })
          ]
        }),
        contentContainerStyle: {
          paddingHorizontal: 12
        },
        ListHeaderComponentStyle: {
          marginBottom: 12
        },
        ListFooterComponentStyle: {
          marginVertical: 16,
          alignItems: "center"
        }
      })
    });
  }
  var import_react_native24, ItemSeparator;
  var init_Addon = __esm({
    "src/components/Wintry/Settings/pages/Addon/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Callout();
      init_i18n();
      import_react_native24 = __toESM(require_react_native(), 1);
      init_PageWrapper();
      init_ResponsiveMasonryFlashList();
      init_AddonCard();
      init_SearchTermHighlight();
      init_loader();
      ItemSeparator = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsx(import_react_native24.View, {
        style: {
          height: 8
        }
      }), "ItemSeparator");
      __name(AddonPage, "AddonPage");
    }
  });

  // node_modules/fuzzysort/fuzzysort.js
  var require_fuzzysort = __commonJS({
    "node_modules/fuzzysort/fuzzysort.js"(exports, module3) {
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_inherits();
      init_wrap_native_super();
      ((root, UMD) => {
        if (typeof define === "function" && define.amd) define([], UMD);
        else if (typeof module3 === "object" && module3.exports) module3.exports = UMD();
        else root["fuzzysort"] = UMD();
      })(exports, (_) => {
        "use strict";
        var single = /* @__PURE__ */ __name((search, target) => {
          if (!search || !target) return NULL;
          var preparedSearch = getPreparedSearch(search);
          if (!isPrepared(target)) target = getPrepared(target);
          var searchBitflags = preparedSearch.bitflags;
          if ((searchBitflags & target._bitflags) !== searchBitflags) return NULL;
          return algorithm(preparedSearch, target);
        }, "single");
        var go = /* @__PURE__ */ __name((search, targets, options) => {
          if (!search) return options?.all ? all(targets, options) : noResults;
          var preparedSearch = getPreparedSearch(search);
          var searchBitflags = preparedSearch.bitflags;
          var containsSpace = preparedSearch.containsSpace;
          var threshold = denormalizeScore(options?.threshold || 0);
          var limit = options?.limit || INFINITY;
          var resultsLen = 0;
          var limitedCount = 0;
          var targetsLen = targets.length;
          function push_result(result2) {
            if (resultsLen < limit) {
              q.add(result2);
              ++resultsLen;
            } else {
              ++limitedCount;
              if (result2._score > q.peek()._score) q.replaceTop(result2);
            }
          }
          __name(push_result, "push_result");
          if (options?.key) {
            var key = options.key;
            for (var i2 = 0; i2 < targetsLen; ++i2) {
              var obj = targets[i2];
              var target = getValue(obj, key);
              if (!target) continue;
              if (!isPrepared(target)) target = getPrepared(target);
              if ((searchBitflags & target._bitflags) !== searchBitflags) continue;
              var result = algorithm(preparedSearch, target);
              if (result === NULL) continue;
              if (result._score < threshold) continue;
              result.obj = obj;
              push_result(result);
            }
          } else if (options?.keys) {
            var keys = options.keys;
            var keysLen = keys.length;
            outer: for (var i2 = 0; i2 < targetsLen; ++i2) {
              var obj = targets[i2];
              {
                var keysBitflags = 0;
                for (var keyI = 0; keyI < keysLen; ++keyI) {
                  var key = keys[keyI];
                  var target = getValue(obj, key);
                  if (!target) {
                    tmpTargets[keyI] = noTarget;
                    continue;
                  }
                  if (!isPrepared(target)) target = getPrepared(target);
                  tmpTargets[keyI] = target;
                  keysBitflags |= target._bitflags;
                }
                if ((searchBitflags & keysBitflags) !== searchBitflags) continue;
              }
              if (containsSpace) for (var i1 = 0; i1 < preparedSearch.spaceSearches.length; i1++) keysSpacesBestScores[i1] = NEGATIVE_INFINITY;
              for (var keyI = 0; keyI < keysLen; ++keyI) {
                target = tmpTargets[keyI];
                if (target === noTarget) {
                  tmpResults[keyI] = noTarget;
                  continue;
                }
                tmpResults[keyI] = algorithm(
                  preparedSearch,
                  target,
                  /*allowSpaces=*/
                  false,
                  /*allowPartialMatch=*/
                  containsSpace
                );
                if (tmpResults[keyI] === NULL) {
                  tmpResults[keyI] = noTarget;
                  continue;
                }
                if (containsSpace) for (var i22 = 0; i22 < preparedSearch.spaceSearches.length; i22++) {
                  if (allowPartialMatchScores[i22] > -1e3) {
                    if (keysSpacesBestScores[i22] > NEGATIVE_INFINITY) {
                      var tmp = (keysSpacesBestScores[i22] + allowPartialMatchScores[i22]) / 4;
                      if (tmp > keysSpacesBestScores[i22]) keysSpacesBestScores[i22] = tmp;
                    }
                  }
                  if (allowPartialMatchScores[i22] > keysSpacesBestScores[i22]) keysSpacesBestScores[i22] = allowPartialMatchScores[i22];
                }
              }
              if (containsSpace) {
                for (var i3 = 0; i3 < preparedSearch.spaceSearches.length; i3++) {
                  if (keysSpacesBestScores[i3] === NEGATIVE_INFINITY) continue outer;
                }
              } else {
                var hasAtLeast1Match = false;
                for (var i4 = 0; i4 < keysLen; i4++) {
                  if (tmpResults[i4]._score !== NEGATIVE_INFINITY) {
                    hasAtLeast1Match = true;
                    break;
                  }
                }
                if (!hasAtLeast1Match) continue;
              }
              var objResults = new KeysResult(keysLen);
              for (var i5 = 0; i5 < keysLen; i5++) {
                objResults[i5] = tmpResults[i5];
              }
              if (containsSpace) {
                var score = 0;
                for (var i6 = 0; i6 < preparedSearch.spaceSearches.length; i6++) score += keysSpacesBestScores[i6];
              } else {
                var score = NEGATIVE_INFINITY;
                for (var i7 = 0; i7 < keysLen; i7++) {
                  var result = objResults[i7];
                  if (result._score > -1e3) {
                    if (score > NEGATIVE_INFINITY) {
                      var tmp = (score + result._score) / 4;
                      if (tmp > score) score = tmp;
                    }
                  }
                  if (result._score > score) score = result._score;
                }
              }
              objResults.obj = obj;
              objResults._score = score;
              if (options?.scoreFn) {
                score = options.scoreFn(objResults);
                if (!score) continue;
                score = denormalizeScore(score);
                objResults._score = score;
              }
              if (score < threshold) continue;
              push_result(objResults);
            }
          } else {
            for (var i2 = 0; i2 < targetsLen; ++i2) {
              var target = targets[i2];
              if (!target) continue;
              if (!isPrepared(target)) target = getPrepared(target);
              if ((searchBitflags & target._bitflags) !== searchBitflags) continue;
              var result = algorithm(preparedSearch, target);
              if (result === NULL) continue;
              if (result._score < threshold) continue;
              push_result(result);
            }
          }
          if (resultsLen === 0) return noResults;
          var results = new Array(resultsLen);
          for (var i2 = resultsLen - 1; i2 >= 0; --i2) results[i2] = q.poll();
          results.total = resultsLen + limitedCount;
          return results;
        }, "go");
        var highlight = /* @__PURE__ */ __name((result, open = "<b>", close = "</b>") => {
          var callback = typeof open === "function" ? open : void 0;
          var target = result.target;
          var targetLen = target.length;
          var indexes = result.indexes;
          var highlighted = "";
          var matchI = 0;
          var indexesI = 0;
          var opened = false;
          var parts = [];
          for (var i2 = 0; i2 < targetLen; ++i2) {
            var char = target[i2];
            if (indexes[indexesI] === i2) {
              ++indexesI;
              if (!opened) {
                opened = true;
                if (callback) {
                  parts.push(highlighted);
                  highlighted = "";
                } else {
                  highlighted += open;
                }
              }
              if (indexesI === indexes.length) {
                if (callback) {
                  highlighted += char;
                  parts.push(callback(highlighted, matchI++));
                  highlighted = "";
                  parts.push(target.substr(i2 + 1));
                } else {
                  highlighted += char + close + target.substr(i2 + 1);
                }
                break;
              }
            } else {
              if (opened) {
                opened = false;
                if (callback) {
                  parts.push(callback(highlighted, matchI++));
                  highlighted = "";
                } else {
                  highlighted += close;
                }
              }
            }
            highlighted += char;
          }
          return callback ? parts : highlighted;
        }, "highlight");
        var prepare = /* @__PURE__ */ __name((target) => {
          if (typeof target === "number") target = "" + target;
          else if (typeof target !== "string") target = "";
          var info = prepareLowerInfo(target);
          return new_result(target, {
            _targetLower: info._lower,
            _targetLowerCodes: info.lowerCodes,
            _bitflags: info.bitflags
          });
        }, "prepare");
        var cleanup = /* @__PURE__ */ __name(() => {
          preparedCache.clear();
          preparedSearchCache.clear();
        }, "cleanup");
        var Result = /* @__PURE__ */ function() {
          function Result2() {
            _class_call_check(this, Result2);
          }
          __name(Result2, "Result");
          _create_class(Result2, [
            {
              key: "indexes",
              get: /* @__PURE__ */ __name(function get() {
                return this._indexes.slice(0, this._indexes.len).sort((a, b) => a - b);
              }, "get")
            },
            {
              key: "indexes",
              set: /* @__PURE__ */ __name(function set2(indexes) {
                return this._indexes = indexes;
              }, "set")
            },
            {
              key: "highlight",
              value: /* @__PURE__ */ __name(function value(open, close) {
                return highlight(this, open, close);
              }, "value")
            },
            {
              key: "score",
              get: /* @__PURE__ */ __name(function get() {
                return normalizeScore(this._score);
              }, "get")
            },
            {
              key: "score",
              set: /* @__PURE__ */ __name(function set2(score) {
                this._score = denormalizeScore(score);
              }, "set")
            }
          ]);
          return Result2;
        }();
        var KeysResult = /* @__PURE__ */ function(Array1) {
          _inherits(KeysResult2, Array1);
          function KeysResult2() {
            _class_call_check(this, KeysResult2);
            return _call_super(this, KeysResult2, arguments);
          }
          __name(KeysResult2, "KeysResult");
          _create_class(KeysResult2, [
            {
              key: "score",
              get: /* @__PURE__ */ __name(function get() {
                return normalizeScore(this._score);
              }, "get")
            },
            {
              key: "score",
              set: /* @__PURE__ */ __name(function set2(score) {
                this._score = denormalizeScore(score);
              }, "set")
            }
          ]);
          return KeysResult2;
        }(_wrap_native_super(Array));
        var new_result = /* @__PURE__ */ __name((target, options) => {
          var result = new Result();
          result["target"] = target;
          result["obj"] = options.obj ?? NULL;
          result._score = options._score ?? NEGATIVE_INFINITY;
          result._indexes = options._indexes ?? [];
          result._targetLower = options._targetLower ?? "";
          result._targetLowerCodes = options._targetLowerCodes ?? NULL;
          result._nextBeginningIndexes = options._nextBeginningIndexes ?? NULL;
          result._bitflags = options._bitflags ?? 0;
          return result;
        }, "new_result");
        var normalizeScore = /* @__PURE__ */ __name((score) => {
          if (score === NEGATIVE_INFINITY) return 0;
          if (score > 1) return score;
          return Math.E ** (((-score + 1) ** 0.04307 - 1) * -2);
        }, "normalizeScore");
        var denormalizeScore = /* @__PURE__ */ __name((normalizedScore) => {
          if (normalizedScore === 0) return NEGATIVE_INFINITY;
          if (normalizedScore > 1) return normalizedScore;
          return 1 - Math.pow(Math.log(normalizedScore) / -2 + 1, 1 / 0.04307);
        }, "denormalizeScore");
        var prepareSearch = /* @__PURE__ */ __name((search) => {
          if (typeof search === "number") search = "" + search;
          else if (typeof search !== "string") search = "";
          search = search.trim();
          var info = prepareLowerInfo(search);
          var spaceSearches = [];
          if (info.containsSpace) {
            var searches = search.split(/\s+/);
            searches = [
              ...new Set(searches)
            ];
            for (var i2 = 0; i2 < searches.length; i2++) {
              if (searches[i2] === "") continue;
              var _info = prepareLowerInfo(searches[i2]);
              spaceSearches.push({
                lowerCodes: _info.lowerCodes,
                _lower: searches[i2].toLowerCase(),
                containsSpace: false
              });
            }
          }
          return {
            lowerCodes: info.lowerCodes,
            _lower: info._lower,
            containsSpace: info.containsSpace,
            bitflags: info.bitflags,
            spaceSearches
          };
        }, "prepareSearch");
        var getPrepared = /* @__PURE__ */ __name((target) => {
          if (target.length > 999) return prepare(target);
          var targetPrepared = preparedCache.get(target);
          if (targetPrepared !== void 0) return targetPrepared;
          targetPrepared = prepare(target);
          preparedCache.set(target, targetPrepared);
          return targetPrepared;
        }, "getPrepared");
        var getPreparedSearch = /* @__PURE__ */ __name((search) => {
          if (search.length > 999) return prepareSearch(search);
          var searchPrepared = preparedSearchCache.get(search);
          if (searchPrepared !== void 0) return searchPrepared;
          searchPrepared = prepareSearch(search);
          preparedSearchCache.set(search, searchPrepared);
          return searchPrepared;
        }, "getPreparedSearch");
        var all = /* @__PURE__ */ __name((targets, options) => {
          var results = [];
          results.total = targets.length;
          var limit = options?.limit || INFINITY;
          if (options?.key) {
            for (var i2 = 0; i2 < targets.length; i2++) {
              var obj = targets[i2];
              var target = getValue(obj, options.key);
              if (target == NULL) continue;
              if (!isPrepared(target)) target = getPrepared(target);
              var result = new_result(target.target, {
                _score: target._score,
                obj
              });
              results.push(result);
              if (results.length >= limit) return results;
            }
          } else if (options?.keys) {
            for (var i2 = 0; i2 < targets.length; i2++) {
              var obj = targets[i2];
              var objResults = new KeysResult(options.keys.length);
              for (var keyI = options.keys.length - 1; keyI >= 0; --keyI) {
                var target = getValue(obj, options.keys[keyI]);
                if (!target) {
                  objResults[keyI] = noTarget;
                  continue;
                }
                if (!isPrepared(target)) target = getPrepared(target);
                target._score = NEGATIVE_INFINITY;
                target._indexes.len = 0;
                objResults[keyI] = target;
              }
              objResults.obj = obj;
              objResults._score = NEGATIVE_INFINITY;
              results.push(objResults);
              if (results.length >= limit) return results;
            }
          } else {
            for (var i2 = 0; i2 < targets.length; i2++) {
              var target = targets[i2];
              if (target == NULL) continue;
              if (!isPrepared(target)) target = getPrepared(target);
              target._score = NEGATIVE_INFINITY;
              target._indexes.len = 0;
              results.push(target);
              if (results.length >= limit) return results;
            }
          }
          return results;
        }, "all");
        var algorithm = /* @__PURE__ */ __name((preparedSearch, prepared, allowSpaces = false, allowPartialMatch = false) => {
          if (allowSpaces === false && preparedSearch.containsSpace) return algorithmSpaces(preparedSearch, prepared, allowPartialMatch);
          var searchLower = preparedSearch._lower;
          var searchLowerCodes = preparedSearch.lowerCodes;
          var searchLowerCode = searchLowerCodes[0];
          var targetLowerCodes = prepared._targetLowerCodes;
          var searchLen = searchLowerCodes.length;
          var targetLen = targetLowerCodes.length;
          var searchI = 0;
          var targetI = 0;
          var matchesSimpleLen = 0;
          for (; ; ) {
            var isMatch = searchLowerCode === targetLowerCodes[targetI];
            if (isMatch) {
              matchesSimple[matchesSimpleLen++] = targetI;
              ++searchI;
              if (searchI === searchLen) break;
              searchLowerCode = searchLowerCodes[searchI];
            }
            ++targetI;
            if (targetI >= targetLen) return NULL;
          }
          var searchI = 0;
          var successStrict = false;
          var matchesStrictLen = 0;
          var nextBeginningIndexes = prepared._nextBeginningIndexes;
          if (nextBeginningIndexes === NULL) nextBeginningIndexes = prepared._nextBeginningIndexes = prepareNextBeginningIndexes(prepared.target);
          targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1];
          var backtrackCount = 0;
          if (targetI !== targetLen) for (; ; ) {
            if (targetI >= targetLen) {
              if (searchI <= 0) break;
              ++backtrackCount;
              if (backtrackCount > 200) break;
              --searchI;
              var lastMatch = matchesStrict[--matchesStrictLen];
              targetI = nextBeginningIndexes[lastMatch];
            } else {
              var isMatch = searchLowerCodes[searchI] === targetLowerCodes[targetI];
              if (isMatch) {
                matchesStrict[matchesStrictLen++] = targetI;
                ++searchI;
                if (searchI === searchLen) {
                  successStrict = true;
                  break;
                }
                ++targetI;
              } else {
                targetI = nextBeginningIndexes[targetI];
              }
            }
          }
          var substringIndex = searchLen <= 1 ? -1 : prepared._targetLower.indexOf(searchLower, matchesSimple[0]);
          var isSubstring = !!~substringIndex;
          var isSubstringBeginning = !isSubstring ? false : substringIndex === 0 || prepared._nextBeginningIndexes[substringIndex - 1] === substringIndex;
          if (isSubstring && !isSubstringBeginning) {
            for (var i2 = 0; i2 < nextBeginningIndexes.length; i2 = nextBeginningIndexes[i2]) {
              if (i2 <= substringIndex) continue;
              for (var s = 0; s < searchLen; s++) if (searchLowerCodes[s] !== prepared._targetLowerCodes[i2 + s]) break;
              if (s === searchLen) {
                substringIndex = i2;
                isSubstringBeginning = true;
                break;
              }
            }
          }
          var calculateScore = /* @__PURE__ */ __name((matches) => {
            var score2 = 0;
            var extraMatchGroupCount = 0;
            for (var i3 = 1; i3 < searchLen; ++i3) {
              if (matches[i3] - matches[i3 - 1] !== 1) {
                score2 -= matches[i3];
                ++extraMatchGroupCount;
              }
            }
            var unmatchedDistance = matches[searchLen - 1] - matches[0] - (searchLen - 1);
            score2 -= (12 + unmatchedDistance) * extraMatchGroupCount;
            if (matches[0] !== 0) score2 -= matches[0] * matches[0] * 0.2;
            if (!successStrict) {
              score2 *= 1e3;
            } else {
              var uniqueBeginningIndexes = 1;
              for (var i3 = nextBeginningIndexes[0]; i3 < targetLen; i3 = nextBeginningIndexes[i3]) ++uniqueBeginningIndexes;
              if (uniqueBeginningIndexes > 24) score2 *= (uniqueBeginningIndexes - 24) * 10;
            }
            score2 -= (targetLen - searchLen) / 2;
            if (isSubstring) score2 /= 1 + searchLen * searchLen * 1;
            if (isSubstringBeginning) score2 /= 1 + searchLen * searchLen * 1;
            score2 -= (targetLen - searchLen) / 2;
            return score2;
          }, "calculateScore");
          if (!successStrict) {
            if (isSubstring) for (var i2 = 0; i2 < searchLen; ++i2) matchesSimple[i2] = substringIndex + i2;
            var matchesBest = matchesSimple;
            var score = calculateScore(matchesBest);
          } else {
            if (isSubstringBeginning) {
              for (var i2 = 0; i2 < searchLen; ++i2) matchesSimple[i2] = substringIndex + i2;
              var matchesBest = matchesSimple;
              var score = calculateScore(matchesSimple);
            } else {
              var matchesBest = matchesStrict;
              var score = calculateScore(matchesStrict);
            }
          }
          prepared._score = score;
          for (var i2 = 0; i2 < searchLen; ++i2) prepared._indexes[i2] = matchesBest[i2];
          prepared._indexes.len = searchLen;
          var result = new Result();
          result.target = prepared.target;
          result._score = prepared._score;
          result._indexes = prepared._indexes;
          return result;
        }, "algorithm");
        var algorithmSpaces = /* @__PURE__ */ __name((preparedSearch, target, allowPartialMatch) => {
          var seen_indexes = /* @__PURE__ */ new Set();
          var score = 0;
          var result = NULL;
          var first_seen_index_last_search = 0;
          var searches = preparedSearch.spaceSearches;
          var searchesLen = searches.length;
          var changeslen = 0;
          var resetNextBeginningIndexes = /* @__PURE__ */ __name(() => {
            for (var i4 = changeslen - 1; i4 >= 0; i4--) target._nextBeginningIndexes[nextBeginningIndexesChanges[i4 * 2 + 0]] = nextBeginningIndexesChanges[i4 * 2 + 1];
          }, "resetNextBeginningIndexes");
          var hasAtLeast1Match = false;
          for (var i3 = 0; i3 < searchesLen; ++i3) {
            allowPartialMatchScores[i3] = NEGATIVE_INFINITY;
            var search = searches[i3];
            result = algorithm(search, target);
            if (allowPartialMatch) {
              if (result === NULL) continue;
              hasAtLeast1Match = true;
            } else {
              if (result === NULL) {
                resetNextBeginningIndexes();
                return NULL;
              }
            }
            var isTheLastSearch = i3 === searchesLen - 1;
            if (!isTheLastSearch) {
              var indexes = result._indexes;
              var indexesIsConsecutiveSubstring = true;
              for (var i1 = 0; i1 < indexes.len - 1; i1++) {
                if (indexes[i1 + 1] - indexes[i1] !== 1) {
                  indexesIsConsecutiveSubstring = false;
                  break;
                }
              }
              if (indexesIsConsecutiveSubstring) {
                var newBeginningIndex = indexes[indexes.len - 1] + 1;
                var toReplace = target._nextBeginningIndexes[newBeginningIndex - 1];
                for (var i2 = newBeginningIndex - 1; i2 >= 0; i2--) {
                  if (toReplace !== target._nextBeginningIndexes[i2]) break;
                  target._nextBeginningIndexes[i2] = newBeginningIndex;
                  nextBeginningIndexesChanges[changeslen * 2 + 0] = i2;
                  nextBeginningIndexesChanges[changeslen * 2 + 1] = toReplace;
                  changeslen++;
                }
              }
            }
            score += result._score / searchesLen;
            allowPartialMatchScores[i3] = result._score / searchesLen;
            if (result._indexes[0] < first_seen_index_last_search) {
              score -= (first_seen_index_last_search - result._indexes[0]) * 2;
            }
            first_seen_index_last_search = result._indexes[0];
            for (var j = 0; j < result._indexes.len; ++j) seen_indexes.add(result._indexes[j]);
          }
          if (allowPartialMatch && !hasAtLeast1Match) return NULL;
          resetNextBeginningIndexes();
          var allowSpacesResult = algorithm(
            preparedSearch,
            target,
            /*allowSpaces=*/
            true
          );
          if (allowSpacesResult !== NULL && allowSpacesResult._score > score) {
            if (allowPartialMatch) {
              for (var i3 = 0; i3 < searchesLen; ++i3) {
                allowPartialMatchScores[i3] = allowSpacesResult._score / searchesLen;
              }
            }
            return allowSpacesResult;
          }
          if (allowPartialMatch) result = target;
          result._score = score;
          var i3 = 0;
          for (var index of seen_indexes) result._indexes[i3++] = index;
          result._indexes.len = i3;
          return result;
        }, "algorithmSpaces");
        var prepareLowerInfo = /* @__PURE__ */ __name((str) => {
          var strLen = str.length;
          var lower = str.toLowerCase();
          var lowerCodes = [];
          var bitflags = 0;
          var containsSpace = false;
          for (var i2 = 0; i2 < strLen; ++i2) {
            var lowerCode = lowerCodes[i2] = lower.charCodeAt(i2);
            if (lowerCode === 32) {
              containsSpace = true;
              continue;
            }
            var bit = lowerCode >= 97 && lowerCode <= 122 ? lowerCode - 97 : lowerCode >= 48 && lowerCode <= 57 ? 26 : lowerCode <= 127 ? 30 : 31;
            bitflags |= 1 << bit;
          }
          return {
            lowerCodes,
            bitflags,
            containsSpace,
            _lower: lower
          };
        }, "prepareLowerInfo");
        var prepareBeginningIndexes = /* @__PURE__ */ __name((target) => {
          var targetLen = target.length;
          var beginningIndexes = [];
          var beginningIndexesLen = 0;
          var wasUpper = false;
          var wasAlphanum = false;
          for (var i2 = 0; i2 < targetLen; ++i2) {
            var targetCode = target.charCodeAt(i2);
            var isUpper = targetCode >= 65 && targetCode <= 90;
            var isAlphanum = isUpper || targetCode >= 97 && targetCode <= 122 || targetCode >= 48 && targetCode <= 57;
            var isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum;
            wasUpper = isUpper;
            wasAlphanum = isAlphanum;
            if (isBeginning) beginningIndexes[beginningIndexesLen++] = i2;
          }
          return beginningIndexes;
        }, "prepareBeginningIndexes");
        var prepareNextBeginningIndexes = /* @__PURE__ */ __name((target) => {
          var targetLen = target.length;
          var beginningIndexes = prepareBeginningIndexes(target);
          var nextBeginningIndexes = [];
          var lastIsBeginning = beginningIndexes[0];
          var lastIsBeginningI = 0;
          for (var i2 = 0; i2 < targetLen; ++i2) {
            if (lastIsBeginning > i2) {
              nextBeginningIndexes[i2] = lastIsBeginning;
            } else {
              lastIsBeginning = beginningIndexes[++lastIsBeginningI];
              nextBeginningIndexes[i2] = lastIsBeginning === void 0 ? targetLen : lastIsBeginning;
            }
          }
          return nextBeginningIndexes;
        }, "prepareNextBeginningIndexes");
        var preparedCache = /* @__PURE__ */ new Map();
        var preparedSearchCache = /* @__PURE__ */ new Map();
        var matchesSimple = [];
        var matchesStrict = [];
        var nextBeginningIndexesChanges = [];
        var keysSpacesBestScores = [];
        var allowPartialMatchScores = [];
        var tmpTargets = [];
        var tmpResults = [];
        var getValue = /* @__PURE__ */ __name((obj, prop) => {
          var tmp = obj[prop];
          if (tmp !== void 0) return tmp;
          if (typeof prop === "function") return prop(obj);
          var segs = prop;
          if (!Array.isArray(prop)) segs = prop.split(".");
          var len = segs.length;
          var i2 = -1;
          while (obj && ++i2 < len) obj = obj[segs[i2]];
          return obj;
        }, "getValue");
        var isPrepared = /* @__PURE__ */ __name((x) => {
          return typeof x === "object" && typeof x._bitflags === "number";
        }, "isPrepared");
        var INFINITY = Infinity;
        var NEGATIVE_INFINITY = -INFINITY;
        var noResults = [];
        noResults.total = 0;
        var NULL = null;
        var noTarget = prepare("");
        var fastpriorityqueue = /* @__PURE__ */ __name((r4) => {
          var e3 = [], o2 = 0, a = {}, v = /* @__PURE__ */ __name((r5) => {
            for (var a2 = 0, v2 = e3[a2], c2 = 1; c2 < o2; ) {
              var s = c2 + 1;
              a2 = c2, s < o2 && e3[s]._score < e3[c2]._score && (a2 = s), e3[a2 - 1 >> 1] = e3[a2], c2 = 1 + (a2 << 1);
            }
            for (var f = a2 - 1 >> 1; a2 > 0 && v2._score < e3[f]._score; f = (a2 = f) - 1 >> 1) e3[a2] = e3[f];
            e3[a2] = v2;
          }, "v");
          return a.add = (r5) => {
            var a2 = o2;
            e3[o2++] = r5;
            for (var v2 = a2 - 1 >> 1; a2 > 0 && r5._score < e3[v2]._score; v2 = (a2 = v2) - 1 >> 1) e3[a2] = e3[v2];
            e3[a2] = r5;
          }, a.poll = (r5) => {
            if (0 !== o2) {
              var a2 = e3[0];
              return e3[0] = e3[--o2], v(), a2;
            }
          }, a.peek = (r5) => {
            if (0 !== o2) return e3[0];
          }, a.replaceTop = (r5) => {
            e3[0] = r5, v();
          }, a;
        }, "fastpriorityqueue");
        var q = fastpriorityqueue();
        return {
          "single": single,
          "go": go,
          "prepare": prepare,
          "cleanup": cleanup
        };
      });
    }
  });

  // src/components/Wintry/Search.tsx
  var Search_exports = {};
  __export(Search_exports, {
    default: () => Search_default,
    useSearchQuery: () => useSearchQuery
  });
  function SearchIcon() {
    return /* @__PURE__ */ jsx(import_react_native25.Image, {
      style: {
        width: 16,
        height: 16
      },
      source: findAssetId("search")
    });
  }
  function useSearchQuery() {
    var [q, setQ] = (0, import_react13.useState)("");
    var ref = {
      query: q,
      __set: setQ
    };
    return ref;
  }
  var import_react13, import_react_native25, Search_default;
  var init_Search = __esm({
    "src/components/Wintry/Search.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react13 = __toESM(require_react(), 1);
      import_react_native25 = __toESM(require_react_native(), 1);
      init_i18n();
      init_assets();
      init_TextInput();
      __name(SearchIcon, "SearchIcon");
      __name(useSearchQuery, "useSearchQuery");
      Search_default = /* @__PURE__ */ __name(({ onChangeText, placeholder, style, isRound, queryRef }) => {
        var [query, setQuery] = (0, import_react13.useState)(queryRef?.query ?? "");
        var onChange = /* @__PURE__ */ __name((value) => {
          setQuery(value);
          onChangeText?.(value);
          queryRef?.__set(value);
        }, "onChange");
        return /* @__PURE__ */ jsx(import_react_native25.View, {
          style,
          children: /* @__PURE__ */ jsx(TextInput_default, {
            grow: true,
            isClearable: true,
            leadingIcon: SearchIcon,
            placeholder: placeholder ?? t3.ui.components.search.placeholder(),
            onChange,
            returnKeyType: "search",
            size: "md",
            autoCapitalize: "none",
            autoCorrect: false,
            isRound,
            value: query
          })
        });
      }, "default");
    }
  });

  // src/components/Discord/ContextMenu/ContextMenu.tsx
  var ContextMenu_exports = {};
  __export(ContextMenu_exports, {
    default: () => ContextMenu_default
  });
  var ContextMenu_default;
  var init_ContextMenu = __esm({
    "src/components/Discord/ContextMenu/ContextMenu.tsx"() {
      "use strict";
      init_util();
      ContextMenu_default = getComponentFromProps("ContextMenu");
    }
  });

  // src/components/Wintry/FilterAndSortBar.tsx
  var FilterAndSortBar_exports = {};
  __export(FilterAndSortBar_exports, {
    FilterAndSortBar: () => FilterAndSortBar
  });
  function FilterAndSortBar({ queryRef, sortOptions, filterOptions, onSortChange, onFilterChange, currentFilterOptions, currentSortOption, style }) {
    return /* @__PURE__ */ jsxs(import_react_native26.View, {
      style: [
        {
          flexDirection: "row",
          gap: 8
        },
        style
      ],
      children: [
        /* @__PURE__ */ jsx(Search_default, {
          style: {
            flexGrow: 1
          },
          isRound: true,
          queryRef
        }),
        /* @__PURE__ */ jsx(ContextMenu_default, {
          items: sortOptions.map((option) => ({
            label: option.label,
            iconSource: currentSortOption === option.key ? findAssetId("CheckmarkSmallBoldIcon") : void 0,
            action: /* @__PURE__ */ __name(() => onSortChange(option.key), "action")
          })),
          children: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsx(IconButton_default, {
            ...props,
            variant: "tertiary",
            icon: findAssetId("ArrowsUpDownIcon")
          }), "children")
        }),
        /* @__PURE__ */ jsx(ContextMenu_default, {
          items: filterOptions.map((option) => ({
            label: option.label,
            iconSource: currentFilterOptions.includes(option.key) ? findAssetId("CheckmarkSmallBoldIcon") : void 0,
            action: /* @__PURE__ */ __name(() => onFilterChange(option.key), "action")
          })),
          children: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsx(IconButton_default, {
            ...props,
            variant: "tertiary",
            icon: findAssetId("FiltersHorizontalIcon")
          }), "children")
        })
      ]
    });
  }
  var import_react_native26;
  var init_FilterAndSortBar = __esm({
    "src/components/Wintry/FilterAndSortBar.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_assets();
      init_Discord2();
      init_ContextMenu();
      import_react_native26 = __toESM(require_react_native(), 1);
      init_Search();
      __name(FilterAndSortBar, "FilterAndSortBar");
    }
  });

  // src/components/Wintry/Settings/pages/Addon/AddonCollectionManager.tsx
  var AddonCollectionManager_exports = {};
  __export(AddonCollectionManager_exports, {
    createAddonCollectionManager: () => createAddonCollectionManager
  });
  function createAddonCollectionManager({ data, defaultSortOption, defaultFilterOptions, sortOptions, filterOptions, ...props }) {
    var searchTerms = [
      (v) => v.name,
      (v) => v.description,
      (v) => v.authors.map((a) => a.name).join(", "),
      ...props.searchTerms ?? []
    ];
    var useStore2 = create((set2) => ({
      currentQuery: "",
      currentSortOption: defaultSortOption,
      currentFilterOptions: defaultFilterOptions,
      setSortOption: /* @__PURE__ */ __name((option) => set2({
        currentSortOption: option
      }), "setSortOption"),
      toggleFilterOption: /* @__PURE__ */ __name((option) => set2((state2) => {
        if (state2.currentFilterOptions.includes(option)) {
          return {
            currentFilterOptions: state2.currentFilterOptions.filter((o2) => o2 !== option)
          };
        }
        return {
          currentFilterOptions: [
            ...state2.currentFilterOptions,
            option
          ]
        };
      }), "toggleFilterOption")
    }));
    return {
      useFilterAndSortStore: useStore2,
      searchTerms,
      useFilterResults: /* @__PURE__ */ __name(() => {
        var _loop = /* @__PURE__ */ __name(function(option2) {
          var filterFn = filterOptions.find((o2) => o2.key === option2)?.filterFn;
          if (filterFn) {
            addons = addons.filter(filterFn);
          }
        }, "_loop");
        var { currentSortOption, currentFilterOptions, currentQuery } = useStore2();
        var addons = data;
        for (var option of currentFilterOptions) _loop(option);
        var result = import_fuzzysort.default.go(currentQuery, addons, {
          keys: searchTerms,
          all: true
        });
        return [
          ...result
        ].sort((a, b) => sortOptions.find((o2) => o2.key === currentSortOption)?.compareFn(a.obj, b.obj) ?? 0);
      }, "useFilterResults"),
      FilterBarComponent: /* @__PURE__ */ __name(() => {
        var queryRef = useSearchQuery();
        if (useStore2.getState().currentQuery !== queryRef.query) {
          useStore2.setState({
            currentQuery: queryRef.query
          });
        }
        return /* @__PURE__ */ jsx(FilterAndSortBar, {
          queryRef,
          sortOptions,
          filterOptions,
          currentSortOption: useStore2((state2) => state2.currentSortOption),
          currentFilterOptions: useStore2((state2) => state2.currentFilterOptions),
          onSortChange: useStore2((state2) => state2.setSortOption),
          onFilterChange: useStore2((state2) => state2.toggleFilterOption)
        });
      }, "FilterBarComponent")
    };
  }
  var import_fuzzysort;
  var init_AddonCollectionManager = __esm({
    "src/components/Wintry/Settings/pages/Addon/AddonCollectionManager.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_fuzzysort = __toESM(require_fuzzysort(), 1);
      init_Search();
      init_esm();
      init_FilterAndSortBar();
      __name(createAddonCollectionManager, "createAddonCollectionManager");
    }
  });

  // src/components/Discord/Pile/AvatarPile.tsx
  var AvatarPile_exports = {};
  __export(AvatarPile_exports, {
    default: () => AvatarPile_default
  });
  var AvatarPile_default;
  var init_AvatarPile = __esm({
    "src/components/Discord/Pile/AvatarPile.tsx"() {
      "use strict";
      init_util();
      AvatarPile_default = getComponentFromProps("AvatarPile", {
        singular: true
      });
    }
  });

  // src/components/Discord/ui-kit/Avatar.tsx
  var Avatar_exports = {};
  __export(Avatar_exports, {
    Avatar: () => Avatar,
    default: () => Avatar_default
  });
  var Avatar, Avatar_default;
  var init_Avatar = __esm({
    "src/components/Discord/ui-kit/Avatar.tsx"() {
      "use strict";
      init_wrappers();
      Avatar = lookupByFilePath("uikit-native/Avatar.tsx", {
        returnEsmDefault: true
      }).asLazy();
      Avatar_default = Avatar;
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/TitleComponent.tsx
  var TitleComponent_exports = {};
  __export(TitleComponent_exports, {
    default: () => TitleComponent
  });
  function TitleComponent({ plugin }) {
    var styles = useStyles3();
    var users = FluxUtils.useStateFromStoresArray([
      UserStore
    ], () => {
      for (var author2 of plugin.authors ?? []) {
        maybeFetchUser(author2.id);
      }
      return plugin.authors?.map((a) => UserStore.getUser(a.id.toString()));
    });
    var { authors } = plugin;
    var authorTextNode = [];
    if (authors) {
      var _loop = /* @__PURE__ */ __name(function(author2) {
        authorTextNode.push(/* @__PURE__ */ jsx(Text_default, {
          onPress: /* @__PURE__ */ __name(() => showUserProfileActionSheet({
            userId: author2.id
          }), "onPress"),
          variant: "text-md/medium",
          children: author2.name
        }));
        authorTextNode.push(", ");
      }, "_loop");
      for (var author of authors) _loop(author);
      authorTextNode.pop();
    }
    return /* @__PURE__ */ jsxs(import_react_native27.View, {
      style: {
        gap: 6,
        width: "80%"
      },
      children: [
        /* @__PURE__ */ jsxs(import_react_native27.View, {
          style: {
            gap: 4,
            flexDirection: "column-reverse"
          },
          children: [
            /* @__PURE__ */ jsx(import_react_native27.View, {
              children: /* @__PURE__ */ jsx(Text_default, {
                variant: "heading-xl/semibold",
                children: plugin.name
              })
            }),
            /* @__PURE__ */ jsx(import_react_native27.View, {
              style: {
                flexDirection: "row",
                flexShrink: 1
              },
              children: authors?.length && /* @__PURE__ */ jsxs(import_react_native27.View, {
                style: styles.devsPill,
                children: [
                  users.length && /* @__PURE__ */ jsx(AvatarPile_default, {
                    size: "xxsmall",
                    names: plugin.authors?.map((a) => a.name),
                    totalCount: plugin.authors?.length,
                    children: users.map((a, i2) => /* @__PURE__ */ jsx(Avatar_default, {
                      size: "xxsmall",
                      user: a
                    }, i2))
                  }),
                  /* @__PURE__ */ jsx(Text_default, {
                    variant: "text-md/medium",
                    children: authorTextNode
                  })
                ]
              })
            })
          ]
        }),
        plugin.description && /* @__PURE__ */ jsx(Text_default, {
          style: {
            flexShrink: 1
          },
          color: "text-muted",
          variant: "text-md/medium",
          children: plugin.description
        })
      ]
    });
  }
  var import_react_native27, showUserProfileActionSheet, useStyles3, maybeFetchUser;
  var init_TitleComponent = __esm({
    "src/components/Wintry/Settings/pages/Plugins/TitleComponent.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native27 = __toESM(require_react_native(), 1);
      init_lazy();
      init_stores();
      init_wrappers();
      init_AvatarPile();
      init_Discord2();
      init_Avatar();
      init_libraries();
      init_styles();
      showUserProfileActionSheet = lookupByName("showUserProfileActionSheet").asLazy();
      useStyles3 = createStyles(() => ({
        devsPill: {
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          paddingVertical: 4,
          paddingHorizontal: 8,
          backgroundColor: tokens.colors.STAGE_CARD_PILL_BG,
          borderRadius: 32
        }
      }));
      ({ getUser: maybeFetchUser } = lazyDestructure(() => lookupByProps("getUser", "fetchProfile").load()));
      __name(TitleComponent, "TitleComponent");
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/common/index.tsx
  var common_exports = {};
  __export(common_exports, {
    NativeViewGestureHandler: () => NativeViewGestureHandler,
    RNGHScrollView: () => RNGHScrollView
  });
  var RNGestureHandlerModule, RNGHScrollView, NativeViewGestureHandler;
  var init_common2 = __esm({
    "src/components/Wintry/Settings/pages/Plugins/common/index.tsx"() {
      "use strict";
      init_lazy();
      init_wrappers();
      RNGestureHandlerModule = lookupByProps("NativeViewGestureHandler", "ScrollView").asLazy();
      RNGHScrollView = lazyValue(() => RNGestureHandlerModule.ScrollView);
      NativeViewGestureHandler = lazyValue(() => RNGestureHandlerModule.NativeViewGestureHandler);
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/common/usePluginSettings.tsx
  var usePluginSettings_exports = {};
  __export(usePluginSettings_exports, {
    usePluginSettings: () => usePluginSettings
  });
  function usePluginSettings(id, key) {
    var current2 = usePluginStore_default(useShallow((state2) => state2.settings[id][key]));
    var setValue = /* @__PURE__ */ __name((value) => {
      usePluginStore_default.setState((state2) => {
        state2.settings[id][key] = typeof value === "function" ? value(state2.settings[id][key]) : value;
      });
    }, "setValue");
    return [
      current2,
      setValue
    ];
  }
  var init_usePluginSettings = __esm({
    "src/components/Wintry/Settings/pages/Plugins/common/usePluginSettings.tsx"() {
      "use strict";
      init_shallow3();
      init_usePluginStore();
      __name(usePluginSettings, "usePluginSettings");
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/common/getIcon.tsx
  var getIcon_exports = {};
  __export(getIcon_exports, {
    getIcon: () => getIcon2
  });
  function getIcon2(icon) {
    if (!icon) return;
    var source = typeof icon === "string" ? findAssetId(icon) : icon;
    return /* @__PURE__ */ jsx(TableRow_default.Icon, {
      source
    });
  }
  var init_getIcon = __esm({
    "src/components/Wintry/Settings/pages/Plugins/common/getIcon.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_assets();
      init_Discord2();
      __name(getIcon2, "getIcon");
    }
  });

  // src/components/Discord/TextInput/TextArea.tsx
  var TextArea_exports = {};
  __export(TextArea_exports, {
    default: () => TextArea_default
  });
  var TextArea_default;
  var init_TextArea = __esm({
    "src/components/Discord/TextInput/TextArea.tsx"() {
      "use strict";
      init_util();
      TextArea_default = getComponentFromProps("TextArea", {
        singular: true
      });
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/options/StringOptionRow.tsx
  var StringOptionRow_exports = {};
  __export(StringOptionRow_exports, {
    StringOptionRow: () => StringOptionRow
  });
  function StringOptionRow({ opt, plugin, settingKey, start, end }) {
    var [current2, setter] = usePluginSettings(plugin.$id, settingKey);
    var InputComponent = opt.textArea === true ? TextArea_default : TextInput_default;
    var isValid = /* @__PURE__ */ __name(() => current2 && opt.validate ? opt.validate(current2) : true, "isValid");
    return /* @__PURE__ */ jsx(TableRow_default, {
      start,
      end,
      label: /* @__PURE__ */ jsxs(import_react_native28.View, {
        style: {
          paddingHorizontal: 6,
          gap: 4
        },
        children: [
          /* @__PURE__ */ jsx(InputComponent, {
            size: "md",
            label: opt.label,
            placeholder: opt.placeholder,
            value: current2,
            onChange: /* @__PURE__ */ __name((v) => setter(v), "onChange"),
            state: isValid() ? "error" : void 0,
            errorMessage: isValid() ? void 0 : "Invalid input"
          }),
          /* @__PURE__ */ jsx(Text_default, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: opt.description
          })
        ]
      }),
      icon: getIcon2(opt.icon)
    });
  }
  var import_react_native28;
  var init_StringOptionRow = __esm({
    "src/components/Wintry/Settings/pages/Plugins/options/StringOptionRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_usePluginSettings();
      init_getIcon();
      init_Discord2();
      init_TextArea();
      init_TextInput();
      import_react_native28 = __toESM(require_react_native(), 1);
      __name(StringOptionRow, "StringOptionRow");
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/options/BooleanOptionRow.tsx
  var BooleanOptionRow_exports = {};
  __export(BooleanOptionRow_exports, {
    BooleanOptionRow: () => BooleanOptionRow
  });
  function BooleanOptionRow({ opt, plugin, settingKey, start, end }) {
    var [current2, setCurrent] = usePluginSettings(plugin.$id, settingKey);
    return /* @__PURE__ */ jsx(TableSwitchRow_default, {
      start,
      end,
      label: opt.label,
      subLabel: opt.description,
      icon: getIcon2(opt.icon),
      value: current2,
      onValueChange: /* @__PURE__ */ __name(() => setCurrent((v) => !v), "onValueChange")
    });
  }
  var init_BooleanOptionRow = __esm({
    "src/components/Wintry/Settings/pages/Plugins/options/BooleanOptionRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_usePluginSettings();
      init_getIcon();
      __name(BooleanOptionRow, "BooleanOptionRow");
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/options/BaseCardOption.tsx
  var BaseCardOption_exports = {};
  __export(BaseCardOption_exports, {
    BaseCardOption: () => BaseCardOption
  });
  function BaseCardOption({ opt, children, start, end }) {
    return /* @__PURE__ */ jsxs(Card_default, {
      start,
      end,
      children: [
        children,
        /* @__PURE__ */ jsx(Text_default, {
          style: {
            marginTop: 8
          },
          color: "text-secondary",
          variant: "text-sm/normal",
          children: opt.description
        })
      ]
    });
  }
  var init_BaseCardOption = __esm({
    "src/components/Wintry/Settings/pages/Plugins/options/BaseCardOption.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      __name(BaseCardOption, "BaseCardOption");
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/options/SelectOptionRow.tsx
  var SelectOptionRow_exports = {};
  __export(SelectOptionRow_exports, {
    SelectOptionRow: () => SelectOptionRow
  });
  function SelectOptionRow({ opt, plugin, settingKey, start, end }) {
    var [selected, setSelected] = usePluginSettings(plugin.$id, settingKey);
    var handleToggleOption = /* @__PURE__ */ __name((value) => {
      setSelected((currentSelected) => {
        var isCurrentlySelected = currentSelected.includes(value);
        return isCurrentlySelected ? currentSelected.filter((v) => v !== value) : [
          ...currentSelected,
          value
        ];
      });
    }, "handleToggleOption");
    return /* @__PURE__ */ jsx(BaseCardOption, {
      start,
      end,
      opt,
      children: /* @__PURE__ */ jsx(TableRowGroup_default, {
        title: opt.label,
        children: opt.options.map((option, index) => /* @__PURE__ */ jsx(TableCheckboxRow_default, {
          label: option.label,
          subLabel: option.description,
          icon: getIcon2(option.icon),
          checked: selected.includes(option.value),
          onPress: /* @__PURE__ */ __name(() => handleToggleOption(option.value), "onPress")
        }, index))
      })
    });
  }
  var init_SelectOptionRow = __esm({
    "src/components/Wintry/Settings/pages/Plugins/options/SelectOptionRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_BaseCardOption();
      init_getIcon();
      init_usePluginSettings();
      __name(SelectOptionRow, "SelectOptionRow");
    }
  });

  // src/components/Discord/RedesignCompat/RedesignCompat.tsx
  var RedesignCompat_exports = {};
  __export(RedesignCompat_exports, {
    default: () => RedesignCompat_default
  });
  var RedesignCompat_default;
  var init_RedesignCompat = __esm({
    "src/components/Discord/RedesignCompat/RedesignCompat.tsx"() {
      "use strict";
      init_util();
      RedesignCompat_default = getComponentFromProps("RedesignCompat");
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/options/RadioOptionRow.tsx
  var RadioOptionRow_exports = {};
  __export(RadioOptionRow_exports, {
    RadioOptionRow: () => RadioOptionRow
  });
  function RadioOptionRow({ opt, plugin, settingKey, start, end }) {
    var [current2, setCurrent] = usePluginSettings(plugin.$id, settingKey);
    return /* @__PURE__ */ jsx(BaseCardOption, {
      start,
      end,
      opt,
      children: /* @__PURE__ */ jsx(RedesignCompat_default, {
        children: /* @__PURE__ */ jsx(TableRadioGroup_default, {
          title: opt.label,
          hasIcons: opt.options.some((o2) => o2.icon),
          value: current2,
          onChange: setCurrent,
          children: opt.options.map((def, i2) => /* @__PURE__ */ jsx(TableRadioRow_default, {
            label: def.label,
            subLabel: def.description,
            icon: getIcon2(def.icon),
            value: String(def.value)
          }, i2))
        })
      })
    });
  }
  var init_RadioOptionRow = __esm({
    "src/components/Wintry/Settings/pages/Plugins/options/RadioOptionRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_usePluginSettings();
      init_BaseCardOption();
      init_getIcon();
      init_Discord2();
      init_RedesignCompat();
      __name(RadioOptionRow, "RadioOptionRow");
    }
  });

  // src/components/Discord/Slider/Slider.tsx
  var Slider_exports = {};
  __export(Slider_exports, {
    default: () => Slider_default
  });
  var Slider_default;
  var init_Slider = __esm({
    "src/components/Discord/Slider/Slider.tsx"() {
      "use strict";
      init_util();
      Slider_default = getComponentFromProps("Slider");
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/options/SliderOptionRow.tsx
  var SliderOptionRow_exports = {};
  __export(SliderOptionRow_exports, {
    SliderOptionRow: () => SliderOptionRow
  });
  function SliderRow({ opt, plugin, settingKey, start, end }) {
    var [current2, setCurrent] = usePluginSettings(plugin.$id, settingKey);
    var currentIndex = opt.points.indexOf(current2);
    var updateValue = /* @__PURE__ */ __name((newIndex) => {
      var clampedIndex = Math.max(0, Math.min(newIndex, opt.points.length - 1));
      setCurrent(opt.points[clampedIndex]);
    }, "updateValue");
    return /* @__PURE__ */ jsxs(Card_default, {
      style: {
        gap: 12
      },
      start,
      end,
      children: [
        /* @__PURE__ */ jsxs(Stack_default, {
          direction: "horizontal",
          justify: "space-between",
          children: [
            /* @__PURE__ */ jsx(Text_default, {
              variant: "text-md/semibold",
              children: opt.label
            }),
            current2 !== void 0 && /* @__PURE__ */ jsx(Text_default, {
              variant: "text-sm/medium",
              color: "text-muted",
              children: current2
            })
          ]
        }),
        /* @__PURE__ */ jsx(import_react_native29.View, {
          style: {
            paddingVertical: 12
          },
          children: /* @__PURE__ */ jsx(Slider_default, {
            step: 1,
            value: currentIndex,
            minimumValue: 0,
            maximumValue: opt.points.length - 1,
            // onSlidingComplete={updateValue}
            onValueChange: updateValue,
            startIcon: /* @__PURE__ */ jsx(import_react_native29.Pressable, {
              onPress: /* @__PURE__ */ __name(() => updateValue(currentIndex - 1), "onPress"),
              children: /* @__PURE__ */ jsx(CircleMinusIcon, {})
            }),
            endIcon: /* @__PURE__ */ jsx(import_react_native29.Pressable, {
              onPress: /* @__PURE__ */ __name(() => updateValue(currentIndex + 1), "onPress"),
              children: /* @__PURE__ */ jsx(CirclePlusIcon, {})
            })
          })
        })
      ]
    });
  }
  function SliderOptionRow({ opt, plugin, settingKey, start, end }) {
    return /* @__PURE__ */ jsx(SliderRow, {
      start,
      end,
      opt,
      plugin,
      settingKey
    });
  }
  var import_react_native29;
  var init_SliderOptionRow = __esm({
    "src/components/Wintry/Settings/pages/Plugins/options/SliderOptionRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native29 = __toESM(require_react_native(), 1);
      init_usePluginSettings();
      init_icons();
      init_Slider();
      init_Discord2();
      __name(SliderRow, "SliderRow");
      __name(SliderOptionRow, "SliderOptionRow");
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/options/OptionDefRow.tsx
  var OptionDefRow_exports = {};
  __export(OptionDefRow_exports, {
    OptionDefRow: () => OptionDefRow
  });
  function OptionDefRow(props) {
    var componentMap = {
      string: StringOptionRow,
      boolean: BooleanOptionRow,
      select: SelectOptionRow,
      radio: RadioOptionRow,
      slider: SliderOptionRow
    };
    var Component = componentMap[props.opt.type];
    return Component ? /* @__PURE__ */ jsx(Component, {
      ...props
    }) : null;
  }
  var init_OptionDefRow = __esm({
    "src/components/Wintry/Settings/pages/Plugins/options/OptionDefRow.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_StringOptionRow();
      init_BooleanOptionRow();
      init_SelectOptionRow();
      init_RadioOptionRow();
      init_SliderOptionRow();
      __name(OptionDefRow, "OptionDefRow");
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/options/OptionSection.tsx
  var OptionSection_exports = {};
  __export(OptionSection_exports, {
    OptionSection: () => OptionSection
  });
  function getGroupedOptions(plugin) {
    var _loop = /* @__PURE__ */ __name(function(key2, opt2) {
      var currentGroup = groupedOptions[groupedOptions.length - 1];
      if (!currentGroup || !groupable.includes(opt2.type) || groupableMap.some((group) => !group.includes(opt2.type))) {
        currentGroup = [];
        groupedOptions.push(currentGroup);
      }
      currentGroup.push([
        key2,
        opt2
      ]);
    }, "_loop");
    var options = Object.entries(getPluginSettings(plugin.$id)?.definition ?? {});
    var groupableMap = [
      [
        "string",
        "boolean",
        "slider"
      ]
    ];
    var groupable = groupableMap.flat();
    var groupedOptions = [];
    for (var [key, opt] of options) _loop(key, opt);
    return groupedOptions;
  }
  function OptionSection({ plugin }) {
    var options = getGroupedOptions(plugin);
    if (options.length === 0) return null;
    return /* @__PURE__ */ jsx(InfoSection, {
      label: t3.settings.plugins.info_sheet.configurations(),
      children: /* @__PURE__ */ jsx(import_react_native30.View, {
        style: {
          gap: 12
        },
        children: options.map((group, i2) => /* @__PURE__ */ jsx(import_react_native30.View, {
          children: group.map(([key, opt], i3) => /* @__PURE__ */ jsx(import_react_native30.View, {
            children: /* @__PURE__ */ jsx(OptionDefRow, {
              opt,
              plugin,
              settingKey: key,
              start: i3 === 0,
              end: i3 === group.length - 1
            })
          }, key))
        }, i2))
      })
    });
  }
  var import_react_native30;
  var init_OptionSection = __esm({
    "src/components/Wintry/Settings/pages/Plugins/options/OptionSection.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      init_utils();
      init_InfoSection();
      import_react_native30 = __toESM(require_react_native(), 1);
      init_OptionDefRow();
      __name(getGroupedOptions, "getGroupedOptions");
      __name(OptionSection, "OptionSection");
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/PluginDetailsSheet.tsx
  var PluginDetailsSheet_exports = {};
  __export(PluginDetailsSheet_exports, {
    PluginDetailsSheet: () => PluginDetailsSheet
  });
  function PluginDetailsSheet({ plugin }) {
    return /* @__PURE__ */ jsxs(BottomSheet_default, {
      bodyStyles: {
        gap: 12
      },
      contentStyles: {
        paddingHorizontal: 16
      },
      children: [
        /* @__PURE__ */ jsxs(Stack_default, {
          style: {
            marginTop: 8,
            flexWrap: "nowrap"
          },
          spacing: 8,
          justify: "center",
          align: "center",
          direction: "horizontal",
          children: [
            /* @__PURE__ */ jsx(Text_default, {
              variant: "heading-xl/semibold",
              children: plugin.name
            }),
            /* @__PURE__ */ jsxs(Text_default, {
              variant: "heading-sm/semibold",
              color: "text-muted",
              children: [
                "(",
                plugin.$id,
                ")"
              ]
            })
          ]
        }),
        /* @__PURE__ */ jsx(RNGHScrollView, {
          contentContainerStyle: {
            marginBottom: 12
          },
          children: /* @__PURE__ */ jsxs(TableRowGroup_default, {
            title: t3.settings.plugins.info_sheet.details(),
            children: [
              /* @__PURE__ */ jsx(TableRow_default, {
                label: t3.settings.plugins.info_sheet.id(),
                trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                  text: plugin.$id
                })
              }),
              false,
              /* @__PURE__ */ jsx(TableRow_default, {
                label: t3.settings.plugins.info_sheet.authors(),
                trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                  text: plugin.authors.map((author) => `${author.name} (${author.id})`).join(", ")
                })
              }),
              /* @__PURE__ */ jsx(TableRow_default, {
                label: t3.settings.plugins.info_sheet.path(),
                trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                  text: plugin.$path
                })
              })
            ]
          })
        })
      ]
    });
  }
  var init_PluginDetailsSheet = __esm({
    "src/components/Wintry/Settings/pages/Plugins/PluginDetailsSheet.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      init_common2();
      init_Discord2();
      init_BottomSheet();
      __name(PluginDetailsSheet, "PluginDetailsSheet");
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/SheetAwareIconButton.tsx
  var SheetAwareIconButton_exports = {};
  __export(SheetAwareIconButton_exports, {
    SheetAwareIconButton: () => SheetAwareIconButton
  });
  function SheetAwareIconButton(props) {
    var { onPress } = props;
    props.onPress &&= () => {
      hideSheet("PluginSheetComponent");
      onPress?.();
    };
    return /* @__PURE__ */ jsx(IconButton_default, {
      ...props
    });
  }
  var init_SheetAwareIconButton = __esm({
    "src/components/Wintry/Settings/pages/Plugins/SheetAwareIconButton.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_IconButton();
      init_sheets();
      __name(SheetAwareIconButton, "SheetAwareIconButton");
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/PluginSheetComponent.tsx
  var PluginSheetComponent_exports = {};
  __export(PluginSheetComponent_exports, {
    default: () => PluginSheetComponent
  });
  function PluginSheetComponent({ plugin }) {
    return /* @__PURE__ */ jsx(BottomSheet_default, {
      contentStyles: {
        paddingHorizontal: 16
      },
      children: /* @__PURE__ */ jsxs(RNGHScrollView, {
        contentContainerStyle: {
          marginBottom: 24
        },
        children: [
          /* @__PURE__ */ jsxs(import_react_native31.View, {
            style: {
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              paddingVertical: 24,
              justifyContent: "space-between",
              width: "100%"
            },
            children: [
              /* @__PURE__ */ jsx(TitleComponent, {
                plugin
              }),
              /* @__PURE__ */ jsx(ContextMenu_default, {
                items: [
                  {
                    label: t3.settings.plugins.info_sheet.details(),
                    iconSource: findAssetId("CircleInformationIcon-primary"),
                    action: /* @__PURE__ */ __name(() => {
                      showSheet("PluginDetailsSheet", PluginDetailsSheet, {
                        plugin
                      }, "stack");
                    }, "action")
                  }
                ],
                children: /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsx(IconButton_default, {
                  ...props,
                  icon: findAssetId("MoreHorizontalIcon"),
                  variant: "secondary",
                  size: "sm"
                }), "children")
              })
            ]
          }),
          false,
          /* @__PURE__ */ jsx(import_react_native31.View, {
            style: {
              gap: 12
            },
            children: /* @__PURE__ */ jsx(OptionSection, {
              plugin
            })
          })
        ]
      })
    });
  }
  var import_react_native31;
  var init_PluginSheetComponent = __esm({
    "src/components/Wintry/Settings/pages/Plugins/PluginSheetComponent.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native31 = __toESM(require_react_native(), 1);
      init_assets();
      init_TitleComponent();
      init_i18n();
      init_common2();
      init_OptionSection();
      init_sheets();
      init_PluginDetailsSheet();
      init_SheetAwareIconButton();
      init_IconButton();
      init_BottomSheet();
      init_ContextMenu();
      __name(PluginSheetComponent, "PluginSheetComponent");
    }
  });

  // src/components/Wintry/Settings/pages/Plugins/index.tsx
  var Plugins_exports = {};
  __export(Plugins_exports, {
    default: () => PluginsPage
  });
  function PluginsPage() {
    return /* @__PURE__ */ jsx(AddonPage, {
      collectionManager: pluginFilterSystem,
      onPressInfo: /* @__PURE__ */ __name((plugin) => {
        showSheet("PluginSheetComponent", Promise.resolve().then(() => (init_PluginSheetComponent(), PluginSheetComponent_exports)), {
          plugin
        });
      }, "onPressInfo"),
      useCanHandleAddon: /* @__PURE__ */ __name((id) => plugins_default[id].$isToggleable(), "useCanHandleAddon"),
      useToggler: /* @__PURE__ */ __name((id) => {
        var enabled = usePluginStore_default((s) => s.settings[id].enabled);
        var toggle = usePluginStore_default((s) => s.togglePlugin);
        return [
          enabled,
          (v) => toggle(id, v)
        ];
      }, "useToggler")
    });
  }
  var pluginFilterSystem;
  var init_Plugins = __esm({
    "src/components/Wintry/Settings/pages/Plugins/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_plugins();
      init_utils();
      init_Addon();
      init_AddonCollectionManager();
      init_usePluginStore();
      init_sheets();
      pluginFilterSystem = createAddonCollectionManager({
        data: Object.values(plugins_default),
        defaultFilterOptions: [
          "HIDE_INTERNAL",
          "HIDE_UNAVAILABLE"
        ],
        defaultSortOption: "A-Z",
        sortOptions: [
          {
            key: "A-Z",
            label: "A-Z",
            compareFn: /* @__PURE__ */ __name((a, b) => {
              var aInternal = isPluginInternal(a);
              var bInternal = isPluginInternal(b);
              if (aInternal !== bInternal) return aInternal ? 1 : -1;
              return a.name.localeCompare(b.name);
            }, "compareFn")
          },
          {
            key: "Z-A",
            label: "Z-A",
            compareFn: /* @__PURE__ */ __name((a, b) => {
              var aInternal = isPluginInternal(a);
              var bInternal = isPluginInternal(b);
              if (aInternal !== bInternal) return aInternal ? 1 : -1;
              return b.name.localeCompare(a.name);
            }, "compareFn")
          }
        ],
        filterOptions: [
          {
            key: "HIDE_INTERNAL",
            label: "Hide internal plugins",
            filterFn: /* @__PURE__ */ __name((a) => !isPluginInternal(a), "filterFn")
          },
          {
            key: "HIDE_UNAVAILABLE",
            label: "Hide unavailable plugins",
            filterFn: /* @__PURE__ */ __name((a) => a.isAvailable?.() !== false, "filterFn")
          }
        ]
      });
      __name(PluginsPage, "PluginsPage");
    }
  });

  // src/components/Wintry/Settings/pages/Developer/AssetBrowser.tsx
  var AssetBrowser_exports = {};
  __export(AssetBrowser_exports, {
    default: () => AssetBrowser
  });
  function AssetBrowser() {
    var ref = useSearchQuery();
    var assets = (0, import_react14.useMemo)(() => sortAssets(getAssets()).filter((a) => a.name.toLowerCase().includes(ref.query.toLowerCase()) || a.id.toString() === ref.query), [
      ref.query
    ]);
    return /* @__PURE__ */ jsxs(PageWrapper, {
      containerStyle: {
        gap: 12,
        paddingHorizontal: 12,
        paddingTop: 8
      },
      children: [
        /* @__PURE__ */ jsx(Search_default, {
          queryRef: ref
        }),
        /* @__PURE__ */ jsx(import_flash_list4.FlashList, {
          data: assets,
          estimatedItemSize: 73,
          keyExtractor: /* @__PURE__ */ __name((item) => String(item.id), "keyExtractor"),
          renderItem: /* @__PURE__ */ __name(({ item, index }) => /* @__PURE__ */ jsx(AssetDisplay, {
            asset: item,
            start: index === 0,
            end: index === assets.length - 1
          }), "renderItem")
        })
      ]
    });
  }
  var import_react14, import_react_native32, import_flash_list4, IMAGE_TYPES, DEFAULT_IMAGE_SIZE, isAssetTypeAnImage, BasicAssetDisplay, ImageAssetDisplay, AssetDisplay, ImageAssetPreviewer, sortAssets;
  var init_AssetBrowser = __esm({
    "src/components/Wintry/Settings/pages/Developer/AssetBrowser.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react14 = __toESM(require_react(), 1);
      init_assets();
      import_react_native32 = __toESM(require_react_native(), 1);
      init_sheets();
      init_Search();
      init_PageWrapper();
      import_flash_list4 = __toESM(require_flash_list(), 1);
      init_Discord2();
      init_BottomSheet();
      IMAGE_TYPES = [
        "png",
        "jpg",
        "jpeg",
        "bmp",
        "gif",
        "webp",
        "psd",
        "svg",
        "tiff",
        "ktx"
      ];
      DEFAULT_IMAGE_SIZE = 48;
      isAssetTypeAnImage = /* @__PURE__ */ __name((type) => IMAGE_TYPES.includes(type), "isAssetTypeAnImage");
      BasicAssetDisplay = /* @__PURE__ */ __name(({ asset, start, end }) => /* @__PURE__ */ jsx(TableRow_default, {
        label: asset.name,
        subLabel: `${asset.id} | ${asset.type}`,
        start,
        end
      }), "BasicAssetDisplay");
      ImageAssetDisplay = /* @__PURE__ */ __name(({ asset, start, end }) => /* @__PURE__ */ jsx(TableRow_default, {
        label: asset.name,
        subLabel: `${asset.id} | ${asset.type}`,
        start,
        end,
        onPress: /* @__PURE__ */ __name(() => showSheet("ImageAssetPreviewer", ImageAssetPreviewer, {
          asset
        }), "onPress"),
        trailing: /* @__PURE__ */ jsx(import_react_native32.Image, {
          source: asset.id,
          style: {
            width: Math.min(asset.width ?? DEFAULT_IMAGE_SIZE, DEFAULT_IMAGE_SIZE),
            height: Math.min(asset.height ?? DEFAULT_IMAGE_SIZE, DEFAULT_IMAGE_SIZE)
          },
          resizeMode: "contain"
        })
      }), "ImageAssetDisplay");
      AssetDisplay = /* @__PURE__ */ __name((props) => isAssetTypeAnImage(props.asset.type) ? /* @__PURE__ */ jsx(ImageAssetDisplay, {
        ...props
      }) : /* @__PURE__ */ jsx(BasicAssetDisplay, {
        ...props
      }), "AssetDisplay");
      ImageAssetPreviewer = /* @__PURE__ */ __name(({ asset }) => {
        var width = (0, import_react_native32.useWindowDimensions)().width - 24;
        var imageSize = {
          width: Math.min(width, asset.width ?? DEFAULT_IMAGE_SIZE),
          height: Math.min(width, asset.height ?? DEFAULT_IMAGE_SIZE)
        };
        return /* @__PURE__ */ jsx(BottomSheet_default, {
          contentStyles: {
            paddingHorizontal: 16
          },
          children: /* @__PURE__ */ jsxs(Stack_default, {
            children: [
              /* @__PURE__ */ jsx(import_react_native32.View, {
                style: {
                  alignItems: "center",
                  paddingVertical: 24
                },
                children: /* @__PURE__ */ jsx(import_react_native32.Image, {
                  source: asset.id,
                  style: imageSize,
                  resizeMode: "contain"
                })
              }),
              /* @__PURE__ */ jsxs(TableRowGroup_default, {
                title: "Details",
                children: [
                  /* @__PURE__ */ jsx(TableRow_default, {
                    label: "ID",
                    subLabel: "Asset IDs are runtime specific. Do not hardcode these IDs!",
                    trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                      text: String(asset.id)
                    })
                  }),
                  /* @__PURE__ */ jsx(TableRow_default, {
                    label: "Type",
                    trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                      text: asset.type
                    })
                  }),
                  /* @__PURE__ */ jsx(TableRow_default, {
                    label: "Size",
                    trailing: /* @__PURE__ */ jsx(TableRow_default.TrailingText, {
                      text: `${asset.width}x${asset.height}`
                    })
                  })
                ]
              })
            ]
          })
        });
      }, "ImageAssetPreviewer");
      sortAssets = /* @__PURE__ */ __name((assets) => assets.sort((a, b) => isAssetTypeAnImage(a.type) === isAssetTypeAnImage(b.type) ? 0 : isAssetTypeAnImage(a.type) ? -1 : 1), "sortAssets");
      __name(AssetBrowser, "AssetBrowser");
    }
  });

  // src/components/Wintry/Settings/pages/Developer/TokenBrowser/Colors.tsx
  var Colors_exports = {};
  __export(Colors_exports, {
    default: () => Colors
  });
  function ColorRow({ token, start, end }) {
    var color = useToken(tokens.colors[token]);
    return /* @__PURE__ */ jsx(TableRow_default, {
      label: token,
      start,
      end,
      trailing: /* @__PURE__ */ jsx(import_react_native33.View, {
        style: {
          width: 24,
          height: 24,
          borderRadius: 4,
          backgroundColor: color
        }
      })
    });
  }
  function Colors() {
    return /* @__PURE__ */ jsx(PageWrapper, {
      containerStyle: {
        paddingHorizontal: 0
      },
      children: /* @__PURE__ */ jsx(import_flash_list5.FlashList, {
        data: Object.keys(tokens.colors),
        contentContainerStyle: {
          paddingHorizontal: 12
        },
        renderItem: /* @__PURE__ */ __name(({ item, index }) => /* @__PURE__ */ jsx(ColorRow, {
          token: item,
          start: index === 0,
          end: index === Object.keys(tokens.colors).length - 1
        }), "renderItem"),
        keyExtractor: /* @__PURE__ */ __name((item) => item, "keyExtractor")
      })
    });
  }
  var import_flash_list5, import_react_native33;
  var init_Colors = __esm({
    "src/components/Wintry/Settings/pages/Developer/TokenBrowser/Colors.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_PageWrapper();
      init_libraries();
      import_flash_list5 = __toESM(require_flash_list(), 1);
      import_react_native33 = __toESM(require_react_native(), 1);
      __name(ColorRow, "ColorRow");
      __name(Colors, "Colors");
    }
  });

  // src/components/Wintry/Settings/pages/Developer/TokenBrowser/index.tsx
  var TokenBrowser_exports = {};
  __export(TokenBrowser_exports, {
    default: () => TokenBrowser
  });
  function TokenBrowser() {
    var navigation = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(PageWrapper, {
      children: /* @__PURE__ */ jsx(TableRowGroup_default, {
        title: "Token type",
        children: /* @__PURE__ */ jsx(TableRow_default, {
          label: "Colors",
          arrow: true,
          onPress: /* @__PURE__ */ __name(() => {
            navigation.push("LUMI_CUSTOM_PAGE", {
              title: "Colors",
              render: /* @__PURE__ */ (0, import_react15.lazy)(() => Promise.resolve().then(() => (init_Colors(), Colors_exports)))
            });
          }, "onPress")
        })
      })
    });
  }
  var import_react15;
  var init_TokenBrowser = __esm({
    "src/components/Wintry/Settings/pages/Developer/TokenBrowser/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_PageWrapper();
      init_libraries();
      import_react15 = __toESM(require_react(), 1);
      __name(TokenBrowser, "TokenBrowser");
    }
  });

  // src/components/Wintry/Settings/pages/Developer/ToastPlayground.tsx
  var ToastPlayground_exports = {};
  __export(ToastPlayground_exports, {
    default: () => ToastPlayground
  });
  function DemoToastComponent(props) {
    var [count, setCount] = (0, import_react16.useState)(0);
    (0, import_react16.useEffect)(() => {
      var interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1e3);
      return () => {
        clearInterval(interval);
      };
    }, []);
    return /* @__PURE__ */ jsxs(import_react_native34.View, {
      style: {
        gap: 8,
        paddingHorizontal: 12
      },
      children: [
        /* @__PURE__ */ jsxs(Text_default, {
          variant: "text-md/semibold",
          children: [
            count,
            " second(s) has passed"
          ]
        }),
        count >= 3 && /* @__PURE__ */ jsx(Text_default, {
          variant: "display-md",
          children: "Gaboo!"
        })
      ]
    });
  }
  function ToastPlayground() {
    var [toastConfig, setToastConfig] = (0, import_react16.useState)({
      id: "toast-demo",
      text: "This is a toast message",
      dismissible: true,
      duration: 5e3,
      showIcon: false,
      updateAfterDelay: false
    });
    var handleShowToast = /* @__PURE__ */ __name(() => {
      var options = {
        id: JSON.stringify(toastConfig),
        text: toastConfig.text,
        dismissible: toastConfig.dismissible,
        duration: toastConfig.duration,
        onDismiss() {
          logger11.info("Toast dismissed");
        },
        onPress() {
          logger11.info("Toast pressed");
        },
        onTimeout() {
          logger11.info("Toast timed out");
        }
      };
      if (toastConfig.showIcon) {
        options.icon = require_ic_lumi();
      }
      if (toastConfig.updateAfterDelay) {
        setTimeout(() => {
          toast.update({
            text: `${toastConfig.text} (Updated)`
          });
        }, 2e3);
      }
      var toast = showToast(options);
    }, "handleShowToast");
    return /* @__PURE__ */ jsx(PageWrapper, {
      children: /* @__PURE__ */ jsxs(import_react_native34.ScrollView, {
        contentContainerStyle: {
          gap: 12
        },
        style: {
          flex: 1
        },
        children: [
          /* @__PURE__ */ jsxs(TableRowGroup_default, {
            title: "Configure",
            children: [
              /* @__PURE__ */ jsx(TableRow_default, {
                label: /* @__PURE__ */ jsx(TextInput_default, {
                  label: "Toast Text",
                  value: toastConfig.text,
                  onChange: /* @__PURE__ */ __name((text) => setToastConfig((prev) => ({
                    ...prev,
                    text
                  })), "onChange"),
                  style: {
                    width: 150
                  }
                })
              }),
              /* @__PURE__ */ jsx(TableRow_default, {
                label: /* @__PURE__ */ jsx(TextInput_default, {
                  label: "Duration (ms)",
                  value: String(toastConfig.duration),
                  onChange: /* @__PURE__ */ __name((text) => setToastConfig((prev) => ({
                    ...prev,
                    duration: Number(text) || 5e3
                  })), "onChange"),
                  keyboardType: "numeric",
                  style: {
                    width: 150
                  }
                })
              }),
              /* @__PURE__ */ jsx(TableSwitchRow_default, {
                label: "Show Icon",
                value: toastConfig.showIcon,
                onValueChange: /* @__PURE__ */ __name((value) => setToastConfig((prev) => ({
                  ...prev,
                  showIcon: value
                })), "onValueChange")
              }),
              /* @__PURE__ */ jsx(TableSwitchRow_default, {
                label: "Dismissible",
                value: toastConfig.dismissible,
                onValueChange: /* @__PURE__ */ __name((value) => setToastConfig((prev) => ({
                  ...prev,
                  dismissible: value
                })), "onValueChange")
              }),
              /* @__PURE__ */ jsx(TableSwitchRow_default, {
                label: "Update After Delay",
                value: toastConfig.updateAfterDelay,
                onValueChange: /* @__PURE__ */ __name((value) => setToastConfig((prev) => ({
                  ...prev,
                  updateAfterDelay: value
                })), "onValueChange")
              })
            ]
          }),
          /* @__PURE__ */ jsx(RowButton_default, {
            label: "Show Configured Toast",
            onPress: handleShowToast
          }),
          /* @__PURE__ */ jsx(RowButton_default, {
            label: "Show Custom Component Toast",
            onPress: /* @__PURE__ */ __name(() => {
              var toast = showToast({
                id: "custom-toast",
                render: DemoToastComponent,
                onPress: /* @__PURE__ */ __name(() => toast.hide(), "onPress"),
                duration: toastConfig.duration,
                dismissible: toastConfig.dismissible
              });
            }, "onPress")
          }),
          /* @__PURE__ */ jsx(RowButton_default, {
            label: "Loading Toast",
            onPress: /* @__PURE__ */ __name(() => {
              var toast = showToast({
                id: "loading-toast",
                text: "Loading...",
                icon: /* @__PURE__ */ jsx(import_react_native34.ActivityIndicator, {}),
                dismissible: false
              });
              setTimeout(() => {
                toast.update({
                  text: "Loading complete!",
                  icon: void 0,
                  dismissible: true
                });
              }, 2e3);
            }, "onPress")
          })
        ]
      })
    });
  }
  var import_react16, import_react_native34, logger11;
  var init_ToastPlayground = __esm({
    "src/components/Wintry/Settings/pages/Developer/ToastPlayground.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_logger();
      init_toasts();
      init_Discord2();
      init_PageWrapper();
      import_react16 = __toESM(require_react(), 1);
      import_react_native34 = __toESM(require_react_native(), 1);
      logger11 = wtlogger.createChild("ToastPlayground");
      __name(DemoToastComponent, "DemoToastComponent");
      __name(ToastPlayground, "ToastPlayground");
    }
  });

  // src/components/Wintry/Settings/pages/Developer/CalloutPlayground.tsx
  var CalloutPlayground_exports = {};
  __export(CalloutPlayground_exports, {
    default: () => CalloutPlayground
  });
  function CalloutPlayground() {
    return /* @__PURE__ */ jsxs(PageWrapper, {
      containerStyle: {
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsx(Callout, {
          title: "Info",
          variant: "info",
          children: "This is used to provide additional information."
        }),
        /* @__PURE__ */ jsx(Callout, {
          title: "Success",
          variant: "success",
          children: "This is used to provide successful feedback."
        }),
        /* @__PURE__ */ jsx(Callout, {
          title: "Warning",
          variant: "warning",
          children: "This is used to provide warning feedback."
        }),
        /* @__PURE__ */ jsx(Callout, {
          title: "Danger",
          variant: "danger",
          children: "This is used to provide error feedback."
        })
      ]
    });
  }
  var init_CalloutPlayground = __esm({
    "src/components/Wintry/Settings/pages/Developer/CalloutPlayground.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Callout();
      init_PageWrapper();
      __name(CalloutPlayground, "CalloutPlayground");
    }
  });

  // src/components/Wintry/Settings/pages/Developer/AlertsPlayground.tsx
  var AlertsPlayground_exports = {};
  __export(AlertsPlayground_exports, {
    default: () => AlertsPlayground
  });
  function DemoAlert() {
    var [understood, setUnderstood] = (0, import_react17.useState)(false);
    var dismissModal = useDismissModalCallback();
    return /* @__PURE__ */ jsx(AlertModal, {
      title: "Alert System Demo",
      content: "This is an interactive demonstration of the alert system component. You can test various actions and behaviors using the buttons below.",
      extraContent: /* @__PURE__ */ jsxs(Stack_default, {
        spacing: 12,
        children: [
          /* @__PURE__ */ jsx(Card_default, {
            children: /* @__PURE__ */ jsx(Text_default, {
              variant: "text-md/medium",
              children: "The alert modal supports additional content sections for complex interactions and information displays."
            })
          }),
          /* @__PURE__ */ jsx(InlineCheckbox, {
            label: "Understood",
            checked: understood,
            onPress: setUnderstood
          })
        ]
      }),
      actions: [
        /* @__PURE__ */ jsx(AlertActionButton, {
          text: "Async Action",
          onPress: /* @__PURE__ */ _async_to_generator(function* () {
            yield delay(1e3);
            dismissModal();
          })
        }, "async"),
        /* @__PURE__ */ jsx(AlertActionButton, {
          text: "Dismiss Alert",
          variant: "destructive",
          onPress: /* @__PURE__ */ __name(() => {
            dismissModal();
          }, "onPress")
        }, "dismiss")
      ]
    });
  }
  function CountdownDemoAlert() {
    var [count, setCount] = (0, import_react17.useState)(0);
    var dismissModal = useDismissModalCallback();
    (0, import_react17.useEffect)(() => {
      var interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1e3);
      return () => clearInterval(interval);
    }, []);
    return /* @__PURE__ */ jsx(AlertModal, {
      title: "Countdown Alert",
      content: `The button below will be enabled in ${Math.max(0, 5 - count)} seconds.`,
      actions: [
        /* @__PURE__ */ jsx(AlertActionButton, {
          text: "Dismiss Alert",
          variant: "destructive",
          disabled: count < 5,
          onPress: /* @__PURE__ */ __name(() => {
            dismissModal();
          }, "onPress")
        }, "dismiss")
      ]
    });
  }
  function AlertsPlayground() {
    return /* @__PURE__ */ jsxs(PageWrapper, {
      containerStyle: {
        gap: 12,
        justifyContent: "flex-end"
      },
      children: [
        /* @__PURE__ */ jsx(RowButton_default, {
          label: "Show alert",
          onPress: /* @__PURE__ */ __name(() => {
            showAlert({
              id: "demo-alert",
              Component: DemoAlert
            });
          }, "onPress")
        }),
        /* @__PURE__ */ jsx(RowButton_default, {
          label: "Show non-dismissable alert",
          onPress: /* @__PURE__ */ __name(() => {
            showAlert({
              id: "non-dismissable-demo-alert",
              Component: DemoAlert,
              dismissable: false
            });
          }, "onPress")
        }),
        /* @__PURE__ */ jsx(RowButton_default, {
          label: "Show countdown alert",
          onPress: /* @__PURE__ */ __name(() => {
            showAlert({
              id: "countdown-demo-alert",
              Component: CountdownDemoAlert,
              dismissable: false
            });
          }, "onPress")
        }),
        /* @__PURE__ */ jsx(RowButton_default, {
          label: "Show alert with custom buttons",
          onPress: /* @__PURE__ */ __name(() => {
            showAlert({
              id: "custom-buttons-demo",
              title: "Custom Buttons Alert",
              content: "This alert has custom buttons. The buttons below will not dismiss the alert or show a loading indicator when the 'onPress' returns a Promise, unlike AlertActionButton does.",
              actions: [
                /* @__PURE__ */ jsx(Button_default, {
                  text: "Button 1",
                  onPress: noop
                }, "1"),
                /* @__PURE__ */ jsx(Button_default, {
                  text: "Button 2",
                  onPress: noop
                }, "2")
              ]
            });
          }, "onPress")
        }),
        /* @__PURE__ */ jsx(RowButton_default, {
          label: "Show direct content alert",
          onPress: /* @__PURE__ */ __name(() => {
            showAlert({
              id: "direct-content-demo",
              title: "Direct Content Alert",
              content: "This alert uses direct content instead of a component.",
              actions: [
                {
                  text: "Dismiss Alert",
                  variant: "destructive",
                  onPress: /* @__PURE__ */ __name(() => dismissAlert("direct-content-demo"), "onPress")
                }
              ]
            });
          }, "onPress")
        })
      ]
    });
  }
  var import_react17;
  var init_AlertsPlayground = __esm({
    "src/components/Wintry/Settings/pages/Developer/AlertsPlayground.tsx"() {
      "use strict";
      init_async_to_generator();
      init_jsxRuntime();
      init_alerts();
      init_Discord2();
      init_AlertModal();
      init_InlineCheckbox();
      init_PageWrapper();
      init_dist();
      import_react17 = __toESM(require_react(), 1);
      __name(DemoAlert, "DemoAlert");
      __name(CountdownDemoAlert, "CountdownDemoAlert");
      __name(AlertsPlayground, "AlertsPlayground");
    }
  });

  // src/components/Wintry/Settings/pages/Developer/index.tsx
  var Developer_exports = {};
  __export(Developer_exports, {
    default: () => DeveloperPage
  });
  function DeveloperPage() {
    var config = useInitConfigStore(useShallow((s) => s.config));
    var navigation = NavigationNative.useNavigation();
    var tSections = t3.settings.developer.sections;
    return /* @__PURE__ */ jsxs(PageWrapper, {
      scrollable: true,
      containerStyle: {
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsxs(TableRowGroup_default, {
          title: tSections.init_config.label(),
          children: [
            /* @__PURE__ */ jsx(TableRow_default, {
              label: /* @__PURE__ */ jsx(TextInput_default, {
                label: tSections.init_config.custom_endpoint(),
                value: config.baseUrl,
                placeholder: "http://localhost:4040/",
                onChange: /* @__PURE__ */ __name((v) => useInitConfigStore.setState((s) => ({
                  config: {
                    ...s.config,
                    baseUrl: v
                  }
                })), "onChange")
              })
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              label: /* @__PURE__ */ jsx(TextInput_default, {
                label: tSections.init_config.bundle_path(),
                value: config.bundlePath || "",
                placeholder: "bundle.js",
                onChange: /* @__PURE__ */ __name((v) => useInitConfigStore.setState((s) => ({
                  config: {
                    ...s.config,
                    bundlePath: v || null
                  }
                })), "onChange")
              }),
              subLabel: tSections.init_config.bundle_path_desc()
            }),
            /* @__PURE__ */ jsx(TableSwitchRow_default, {
              label: tSections.init_config.force_update(),
              subLabel: tSections.init_config.force_update_desc(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("RefreshIcon")
              }),
              value: config.forceUpdate,
              onValueChange: /* @__PURE__ */ __name((v) => useInitConfigStore.setState((s) => ({
                config: {
                  ...s.config,
                  forceUpdate: v
                }
              })), "onValueChange")
            })
          ]
        }),
        /* @__PURE__ */ jsx(Text_default, {
          style: {
            marginTop: -6
          },
          variant: "text-xs/normal",
          color: "text-muted",
          children: tSections.init_config.sublabel()
        }),
        /* @__PURE__ */ jsxs(TableRowGroup_default, {
          title: tSections.tools.label(),
          children: [
            /* @__PURE__ */ jsx(TableRow_default, {
              arrow: true,
              label: tSections.tools.asset_browser.label(),
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("ImageIcon")
              }),
              onPress: /* @__PURE__ */ __name(() => navigation.push("LUMI_CUSTOM_PAGE", {
                title: tSections.tools.asset_browser.label(),
                render: /* @__PURE__ */ (0, import_react18.lazy)(() => Promise.resolve().then(() => (init_AssetBrowser(), AssetBrowser_exports)))
              }), "onPress")
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              arrow: true,
              label: "Token Browser",
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("PaintPaletteIcon")
              }),
              onPress: /* @__PURE__ */ __name(() => navigation.push("LUMI_CUSTOM_PAGE", {
                title: "Token Browser",
                render: /* @__PURE__ */ (0, import_react18.lazy)(() => Promise.resolve().then(() => (init_TokenBrowser(), TokenBrowser_exports)))
              }), "onPress")
            })
          ]
        }),
        /* @__PURE__ */ jsxs(TableRowGroup_default, {
          title: tSections.playground.label(),
          children: [
            /* @__PURE__ */ jsx(TableRow_default, {
              arrow: true,
              label: "Toasts",
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("ChatWarningIcon")
              }),
              onPress: /* @__PURE__ */ __name(() => navigation.push("LUMI_CUSTOM_PAGE", {
                title: "Toast Playground",
                render: /* @__PURE__ */ (0, import_react18.lazy)(() => Promise.resolve().then(() => (init_ToastPlayground(), ToastPlayground_exports)))
              }), "onPress")
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              arrow: true,
              label: "Callouts",
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("WarningIcon")
              }),
              onPress: /* @__PURE__ */ __name(() => navigation.push("LUMI_CUSTOM_PAGE", {
                title: "Callouts Playground",
                render: /* @__PURE__ */ (0, import_react18.lazy)(() => Promise.resolve().then(() => (init_CalloutPlayground(), CalloutPlayground_exports)))
              }), "onPress")
            }),
            /* @__PURE__ */ jsx(TableRow_default, {
              arrow: true,
              label: "Alerts",
              icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
                source: findAssetId("WarningIcon")
              }),
              onPress: /* @__PURE__ */ __name(() => navigation.push("LUMI_CUSTOM_PAGE", {
                title: "Alerts Playground",
                render: /* @__PURE__ */ (0, import_react18.lazy)(() => Promise.resolve().then(() => (init_AlertsPlayground(), AlertsPlayground_exports)))
              }), "onPress")
            })
          ]
        }),
        /* @__PURE__ */ jsx(TableRowGroup_default, {
          title: tSections.actions.label(),
          children: /* @__PURE__ */ jsx(TableRow_default, {
            label: tSections.actions.invalidate_metro_cache(),
            icon: /* @__PURE__ */ jsx(TableRow_default.Icon, {
              variant: "danger",
              source: findAssetId("TrashIcon")
            }),
            variant: "danger",
            onPress: /* @__PURE__ */ __name(() => {
              MetroCache.invalidate();
              alert("Metro cache invalidated");
            }, "onPress")
          })
        })
      ]
    });
  }
  var import_react18;
  var init_Developer = __esm({
    "src/components/Wintry/Settings/pages/Developer/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react18 = __toESM(require_react(), 1);
      init_i18n();
      init_assets();
      init_Discord2();
      init_PageWrapper();
      init_libraries();
      init_caches();
      init_useInitConfigStore();
      init_shallow3();
      __name(DeveloperPage, "DeveloperPage");
    }
  });

  // src/plugins/_api/settings/index.tsx
  var settings_exports2 = {};
  __export(settings_exports2, {
    default: () => settings_default
  });
  var import_react19, settings3, settings_default;
  var init_settings3 = __esm({
    "src/plugins/_api/settings/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_settings();
      init_settings2();
      init_Discord2();
      init_Tag();
      init_constants();
      init_info();
      init_i18n();
      init_filters2();
      init_icons();
      init_libraries();
      init_useUpdaterStore();
      init_objects();
      init_dist();
      import_react19 = __toESM(require_react(), 1);
      settings3 = definePluginSettings7({
        onTop: {
          label: "Put on top",
          description: "Put the settings on top of the settings list",
          type: "boolean",
          default: false
        }
      });
      settings_default = definePlugin7({
        name: "Settings",
        description: "Provides a settings interface and debug information",
        authors: [
          Devs.Pylix
        ],
        required: true,
        patches: [
          {
            id: "add-renderer",
            target: byProps([
              "SETTING_RENDERER_CONFIG"
            ]),
            patch(module3, patcher11) {
              var origRendererConfig = module3.SETTING_RENDERER_CONFIG;
              Object.defineProperty(module3, "SETTING_RENDERER_CONFIG", {
                enumerable: true,
                configurable: true,
                get: /* @__PURE__ */ __name(() => ({
                  ...origRendererConfig,
                  ..._registeredSettingItems
                }), "get"),
                set: /* @__PURE__ */ __name((value) => {
                  Object.defineProperty(module3, "SETTING_RENDERER_CONFIG", {
                    writable: true,
                    value
                  });
                }, "set")
              });
              patcher11.attachDisposer(() => {
                module3.SETTING_RENDERER_CONFIG = origRendererConfig;
              });
            }
          },
          {
            id: "overview-screen",
            target: byName("SettingsOverviewScreen", {
              returnEsmDefault: false
            }),
            patch(module3, patcher11) {
              patcher11.after(module3, "default", (_, ret) => {
                var { props } = findInReactTree(ret, (i2) => i2.props?.sections);
                if (!props) {
                  logger8.warn("Failed to find settings sections in SettingsOverviewScreen");
                  return;
                }
                if (!settings3.get().onTop) {
                  try {
                    var accountSectionIndex = props.sections.findIndex((i2) => i2.settings.includes("ACCOUNT"));
                    if (accountSectionIndex !== -1) {
                      props.sections = [
                        ...props.sections.slice(0, accountSectionIndex + 1),
                        ..._registeredSettingSections,
                        ...props.sections.slice(accountSectionIndex + 1)
                      ];
                      return;
                    }
                  } catch (e3) {
                    logger8.warn`Failed to insert settings sections next to account section: ${e3}`;
                  }
                }
                props.sections = [
                  ..._registeredSettingSections,
                  ...props.sections
                ];
              });
            }
          }
        ],
        start() {
          setImmediate(() => {
            registerSettingRenderer("LUMI_CUSTOM_PAGE", {
              type: "route",
              title: /* @__PURE__ */ __name(() => "", "title"),
              unsearchable: true,
              screen: {
                route: "LUMI_CUSTOM_PAGE",
                getComponent: memoize(() => /* @__PURE__ */ (0, import_react19.memo)(() => {
                  var navigation = NavigationNative.useNavigation();
                  var route = NavigationNative.useRoute();
                  var { render: PageComponent, ...args } = route.params;
                  (0, import_react19.useLayoutEffect)(() => void navigation.setOptions({
                    ...args
                  }), [
                    navigation
                  ]);
                  return /* @__PURE__ */ jsx(PageComponent, {});
                }))
              }
            });
            registerSettingSection({
              label: t3.wintry(),
              settings: [
                registerSettingRenderer("WINTRY", {
                  type: "route",
                  title: /* @__PURE__ */ __name(() => t3.wintry(), "title"),
                  IconComponent: /* @__PURE__ */ __name(() => /* @__PURE__ */ jsx(TableRow_default.Icon, {
                    source: require_ic_lumi()
                  }), "IconComponent"),
                  useTrailing: /* @__PURE__ */ __name(() => {
                    var availableUpdate = useUpdaterStore((s) => s.availableUpdate);
                    if (availableUpdate) return /* @__PURE__ */ jsx(Tag, {
                      text: t3.updater.update_tag()
                    });
                    var { version: version2, shortRevision, branch: branch2 } = getVersions().bunny;
                    return `${version2}-${shortRevision} (${branch2})`;
                  }, "useTrailing"),
                  screen: {
                    route: "WINTRY",
                    getComponent: /* @__PURE__ */ __name(() => /* @__PURE__ */ (0, import_react19.lazy)(() => Promise.resolve().then(() => (init_Wintry(), Wintry_exports))), "getComponent")
                  }
                }),
                registerSettingRenderer("LUMI_PLUGINS", {
                  type: "route",
                  title: /* @__PURE__ */ __name(() => t3.settings.sections.plugins(), "title"),
                  IconComponent: PuzzlePieceIcon,
                  screen: {
                    route: "LUMI_PLUGINS",
                    getComponent: /* @__PURE__ */ __name(() => /* @__PURE__ */ (0, import_react19.lazy)(() => Promise.resolve().then(() => (init_Plugins(), Plugins_exports))), "getComponent")
                  }
                }),
                registerSettingRenderer("LUMI_DEVELOPER", {
                  type: "route",
                  title: /* @__PURE__ */ __name(() => t3.settings.sections.developer(), "title"),
                  IconComponent: WrenchIcon,
                  screen: {
                    route: "LUMI_DEVELOPER",
                    getComponent: /* @__PURE__ */ __name(() => /* @__PURE__ */ (0, import_react19.lazy)(() => Promise.resolve().then(() => (init_Developer(), Developer_exports))), "getComponent")
                  }
                })
              ]
            });
          });
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src\plugins\_api\toasts\index.tsx
  var context8, meta8, definePlugin8, definePluginSettings8, logger12, patcher8;
  var init_toasts2 = __esm({
    "plugins-context-provider:#plugin-context#src\\plugins\\_api\\toasts\\index.tsx"() {
      init_shared();
      context8 = getPluginContext("toasts");
      ({ meta: meta8, definePlugin: definePlugin8, definePluginSettings: definePluginSettings8, logger: logger12, patcher: patcher8 } = context8);
    }
  });

  // globals:react-native-gesture-handler
  var require_react_native_gesture_handler = __commonJS({
    "globals:react-native-gesture-handler"(exports, module3) {
      module3.exports = (init_depsModule(), __toCommonJS(depsModule_exports)).default["react-native-gesture-handler"];
    }
  });

  // src/plugins/_api/toasts/components/ToastContentRenderer.tsx
  function ToastIcon({ icon }) {
    if (!icon) {
      return null;
    }
    if (typeof icon === "number" || typeof icon === "object" && "uri" in icon) {
      return /* @__PURE__ */ jsx(import_react_native35.Image, {
        style: {
          width: 18,
          height: 18
        },
        resizeMode: "contain",
        source: icon
      });
    }
    if (/* @__PURE__ */ (0, import_react20.isValidElement)(icon) && typeof icon.type === "object") {
      return icon;
    }
    var Icon = icon;
    return /* @__PURE__ */ jsx(Icon, {});
  }
  function GenericToast({ toast }) {
    var [text, icon] = toast.use(useShallow((t4) => [
      t4.text,
      t4.icon
    ]));
    var [isMultiline, setIsMultiline] = (0, import_react20.useState)(false);
    var onTextLayout = /* @__PURE__ */ __name(({ nativeEvent }) => {
      setIsMultiline(nativeEvent.lines.length > 1);
    }, "onTextLayout");
    return /* @__PURE__ */ jsx(import_react_native35.View, {
      style: [
        isMultiline && {
          paddingHorizontal: 12
        }
      ],
      children: /* @__PURE__ */ jsxs(import_react_native35.View, {
        style: {
          flexDirection: "row",
          alignItems: "center",
          gap: 8
        },
        children: [
          icon && /* @__PURE__ */ jsx(ToastIcon, {
            icon
          }),
          /* @__PURE__ */ jsx(Text_default, {
            variant: "text-sm/semibold",
            onTextLayout,
            children: text
          })
        ]
      })
    });
  }
  function CustomToast({ toast }) {
    var CustomComponent = toast.use((t4) => t4.render);
    var { updateToast, hideToast } = useToastStore(useShallow((state2) => ({
      updateToast: state2.updateToast,
      hideToast: state2.hideToast
    })));
    var controller = {
      hide: /* @__PURE__ */ __name(() => {
        hideToast(toast.id);
        return controller;
      }, "hide"),
      update: /* @__PURE__ */ __name((config) => {
        updateToast({
          ...config,
          id: toast.id
        });
        return controller;
      }, "update")
    };
    return /* @__PURE__ */ jsx(CustomComponent, {
      controller
    });
  }
  function ToastContentRenderer({ toast }) {
    if ("text" in toast) {
      return /* @__PURE__ */ jsx(GenericToast, {
        toast
      });
    }
    if ("render" in toast && toast.render) {
      return /* @__PURE__ */ jsx(CustomToast, {
        toast
      });
    }
    throw new Error("Invalid toast type");
  }
  var import_react20, import_react_native35;
  var init_ToastContentRenderer = __esm({
    "src/plugins/_api/toasts/components/ToastContentRenderer.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Discord2();
      init_useToastStore();
      import_react20 = __toESM(require_react(), 1);
      import_react_native35 = __toESM(require_react_native(), 1);
      init_shallow3();
      __name(ToastIcon, "ToastIcon");
      __name(GenericToast, "GenericToast");
      __name(CustomToast, "CustomToast");
      __name(ToastContentRenderer, "ToastContentRenderer");
    }
  });

  // src/plugins/_api/toasts/components/Toast.tsx
  var import_react_native_reanimated2, import_react_native_gesture_handler, import_react_native36, import_react21, OFFSCREEN_LENGTH, useStyles4, _worklet_10575445024011_init_data, _worklet_13316524972762_init_data, _worklet_2394815801719_init_data, _worklet_8119029086985_init_data, _worklet_12633554293434_init_data, _worklet_7325651134036_init_data, _worklet_904652509612_init_data, _worklet_1700014798715_init_data, Toast_default;
  var init_Toast = __esm({
    "src/plugins/_api/toasts/components/Toast.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native_reanimated2 = __toESM(require_react_native_reanimated(), 1);
      import_react_native_gesture_handler = __toESM(require_react_native_gesture_handler(), 1);
      import_react_native36 = __toESM(require_react_native(), 1);
      init_styles();
      init_libraries();
      import_react21 = __toESM(require_react(), 1);
      init_useToastStore();
      init_ToastContentRenderer();
      init_PressableScale();
      OFFSCREEN_LENGTH = 800;
      useStyles4 = createStyles(() => ({
        container: {
          maxWidth: "90%",
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "center",
          shadowColor: tokens.colors.TOAST_CONTAINER_SHADOW_COLOR
        },
        contentContainer: {
          flexShrink: 1,
          overflow: "hidden",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: tokens.radii.xxl,
          padding: tokens.spacing.PX_8,
          paddingHorizontal: tokens.spacing.PX_12,
          backgroundColor: tokens.colors.TOAST_BG,
          borderColor: tokens.colors.BORDER_SUBTLE,
          borderWidth: 1,
          ...tokens.shadows.SHADOW_HIGH
        }
      }));
      _worklet_10575445024011_init_data = {
        code: "function ToastTsx1(){const{translationX,translationY}=this.__closure;return{transform:[{translateX:translationX.value},{translateY:translationY.value}]};}",
        location: "D:\\Projects\\Coding stuff\\Lumi\\src\\plugins\\_api\\toasts\\components\\Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx1","translationX","translationY","__closure","transform","translateX","value","translateY"],"sources":["D:/Projects/Coding stuff/Lumi/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAwC0C,SAAAA,UAAA,QAAAC,YAAA,CAAAC,YAAA,OAAAC,SAAA,OAAK,CACnCC,SAAS,CAAE,CACP,CACIC,UAAU,CAAEJ,YAAY,CAACK,KAC7B,CAAC,CACD,CACIC,UAAU,CAAEL,YAAY,CAACI,KAC7B,CAAC,CAET,CAAC","ignoreList":[]}',
        version: "3.16.7"
      };
      _worklet_13316524972762_init_data = {
        code: "function ToastTsx2(e){const{translationX}=this.__closure;return translationX.value=e.translationX;}",
        location: "D:\\Projects\\Coding stuff\\Lumi\\src\\plugins\\_api\\toasts\\components\\Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx2","e","translationX","__closure","value"],"sources":["D:/Projects/Coding stuff/Lumi/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAyDqD,QAAC,CAAAA,UAAAC,CAAA,QAAAC,YAAA,OAAAC,SAAA,OAAG,CAAAD,YAAa,CAAAE,KAAK,CAAIH,CAAC,CAAAC,YAAA","ignoreList":[]}',
        version: "3.16.7"
      };
      _worklet_2394815801719_init_data = {
        code: "function ToastTsx3(event){const{translationX}=this.__closure;translationX.value+=event.changeX;}",
        location: "D:\\Projects\\Coding stuff\\Lumi\\src\\plugins\\_api\\toasts\\components\\Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx3","event","translationX","__closure","value","changeX"],"sources":["D:/Projects/Coding stuff/Lumi/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAyDwG,SAAAA,SAAQA,CAAAC,KAAA,QAAAC,YAAA,OAAAC,SAAA,CACxGD,YAAY,CAACE,KAAK,EAAIH,KAAK,CAACI,OAAO,CACvC","ignoreList":[]}',
        version: "3.16.7"
      };
      _worklet_8119029086985_init_data = {
        code: "function ToastTsx4(){const{toast,translationX,width,OFFSCREEN_LENGTH,withTiming,runOnJS,onceOnDismiss}=this.__closure;var willDisappear=toast.dismissible&&(translationX.value>width/4||translationX.value<-width/4);var direction=Math.sign(translationX.value);var position=willDisappear?OFFSCREEN_LENGTH*direction:0;translationX.value=withTiming(position,undefined,function(finished){if(finished&&willDisappear){runOnJS(onceOnDismiss)();}});}",
        location: "D:\\Projects\\Coding stuff\\Lumi\\src\\plugins\\_api\\toasts\\components\\Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx4","toast","translationX","width","OFFSCREEN_LENGTH","withTiming","runOnJS","onceOnDismiss","__closure","willDisappear","dismissible","value","direction","Math","sign","position","undefined","finished"],"sources":["D:/Projects/Coding stuff/Lumi/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AA2Da,SAAAA,SAAIA,CAAA,QAAAC,KAAA,CAAAC,YAAA,CAAAC,KAAA,CAAAC,gBAAA,CAAAC,UAAA,CAAAC,OAAA,CAAAC,aAAA,OAAAC,SAAA,CACT,GAAI,CAAAC,aAAa,CAAGR,KAAK,CAACS,WAAW,GAAKR,YAAY,CAACS,KAAK,CAAGR,KAAK,CAAG,CAAC,EAAID,YAAY,CAACS,KAAK,CAAG,CAACR,KAAK,CAAG,CAAC,CAAC,CAC5G,GAAI,CAAAS,SAAS,CAAGC,IAAI,CAACC,IAAI,CAACZ,YAAY,CAACS,KAAK,CAAC,CAC7C,GAAI,CAAAI,QAAQ,CAAGN,aAAa,CAAGL,gBAAgB,CAAGQ,SAAS,CAAG,CAAC,CAC/DV,YAAY,CAACS,KAAK,CAAGN,UAAU,CAACU,QAAQ,CAAEC,SAAS,CAAG,SAAAC,QAAQ,CAAG,CAC7D,GAAIA,QAAQ,EAAIR,aAAa,CAAE,CAC3BH,OAAO,CAACC,aAAa,CAAC,CAAC,CAAC,CAC5B,CACJ,CAAC,CAAC,CACN","ignoreList":[]}',
        version: "3.16.7"
      };
      _worklet_12633554293434_init_data = {
        code: "function ToastTsx5(finished){const{willDisappear,runOnJS,onceOnDismiss}=this.__closure;if(finished&&willDisappear){runOnJS(onceOnDismiss)();}}",
        location: "D:\\Projects\\Coding stuff\\Lumi\\src\\plugins\\_api\\toasts\\components\\Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx5","finished","willDisappear","runOnJS","onceOnDismiss","__closure"],"sources":["D:/Projects/Coding stuff/Lumi/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AA+D8D,SAAAA,UAAQC,QAAG,QAAAC,aAAA,CAAAC,OAAA,CAAAC,aAAA,OAAAC,SAAA,CAC7D,GAAIJ,QAAQ,EAAIC,aAAa,CAAE,CAC3BC,OAAO,CAACC,aAAa,CAAC,CAAC,CAAC,CAC5B,CACJ","ignoreList":[]}',
        version: "3.16.7"
      };
      _worklet_7325651134036_init_data = {
        code: "function ToastTsx6(event){const{translationY}=this.__closure;return translationY.value=event.y;}",
        location: "D:\\Projects\\Coding stuff\\Lumi\\src\\plugins\\_api\\toasts\\components\\Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx6","event","translationY","__closure","value","y"],"sources":["D:/Projects/Coding stuff/Lumi/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAqEuG,SAAAA,SAAKA,CAAAC,KAAA,QAAAC,YAAA,OAAAC,SAAA,OAAG,CAAAD,YAAa,CAAAE,KAAK,CAAGH,KAAM,CAAAI,CAAA","ignoreList":[]}',
        version: "3.16.7"
      };
      _worklet_904652509612_init_data = {
        code: "function ToastTsx7(){const{toast,translationY,withTiming,OFFSCREEN_LENGTH,runOnJS,onceOnDismiss}=this.__closure;if(!toast.dismissible)return;translationY.value=withTiming(-OFFSCREEN_LENGTH,undefined,function(finished){if(finished){runOnJS(onceOnDismiss)();}});}",
        location: "D:\\Projects\\Coding stuff\\Lumi\\src\\plugins\\_api\\toasts\\components\\Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx7","toast","translationY","withTiming","OFFSCREEN_LENGTH","runOnJS","onceOnDismiss","__closure","dismissible","value","undefined","finished"],"sources":["D:/Projects/Coding stuff/Lumi/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAqEmJ,SAAAA,SAAIA,CAAA,QAAAC,KAAA,CAAAC,YAAA,CAAAC,UAAA,CAAAC,gBAAA,CAAAC,OAAA,CAAAC,aAAA,OAAAC,SAAA,CAC/I,GAAI,CAACN,KAAK,CAACO,WAAW,CAAE,OACxBN,YAAY,CAACO,KAAK,CAAGN,UAAU,CAAC,CAACC,gBAAgB,CAAEM,SAAS,CAAG,SAAAC,QAAQ,CAAG,CACtE,GAAIA,QAAQ,CAAE,CACVN,OAAO,CAACC,aAAa,CAAC,CAAC,CAAC,CAC5B,CACJ,CAAC,CAAC,CACN","ignoreList":[]}',
        version: "3.16.7"
      };
      _worklet_1700014798715_init_data = {
        code: "function ToastTsx8(finished){const{runOnJS,onceOnDismiss}=this.__closure;if(finished){runOnJS(onceOnDismiss)();}}",
        location: "D:\\Projects\\Coding stuff\\Lumi\\src\\plugins\\_api\\toasts\\components\\Toast.tsx",
        sourceMap: '{"version":3,"names":["ToastTsx8","finished","runOnJS","onceOnDismiss","__closure"],"sources":["D:/Projects/Coding stuff/Lumi/src/plugins/_api/toasts/components/Toast.tsx"],"mappings":"AAuEuE,SAAAA,UAAQC,QAAG,QAAAC,OAAA,CAAAC,aAAA,OAAAC,SAAA,CACtE,GAAIH,QAAQ,CAAE,CACVC,OAAO,CAACC,aAAa,CAAC,CAAC,CAAC,CAC5B,CACJ","ignoreList":[]}',
        version: "3.16.7"
      };
      Toast_default = /* @__PURE__ */ (0, import_react21.memo)(/* @__PURE__ */ __name(function Toast({
        toast
      }) {
        var styles = useStyles4();
        var {
          width
        } = (0, import_react_native36.useWindowDimensions)();
        var hideToast = useToastStore((s) => s.hideToast);
        var translationX = (0, import_react_native_reanimated2.useSharedValue)(0);
        var translationY = (0, import_react_native_reanimated2.useSharedValue)(0);
        var animatedStyles = (0, import_react_native_reanimated2.useAnimatedStyle)(function() {
          var _e = [new globalThis.Error(), -3, -27];
          var ToastTsx1 = /* @__PURE__ */ __name(() => ({
            transform: [{
              translateX: translationX.value
            }, {
              translateY: translationY.value
            }]
          }), "ToastTsx1");
          ToastTsx1.__closure = {
            translationX,
            translationY
          };
          ToastTsx1.__workletHash = 10575445024011;
          ToastTsx1.__initData = _worklet_10575445024011_init_data;
          ToastTsx1.__stackDetails = _e;
          return ToastTsx1;
        }());
        var onceOnDismiss = (0, import_react21.useCallback)(() => {
          toast.onDismiss?.();
          hideToast(toast.id);
        }, [hideToast, toast]);
        var pan = import_react_native_gesture_handler.Gesture.Pan().minDistance(20).onStart(function() {
          var _e = [new globalThis.Error(), -2, -27];
          var ToastTsx2 = /* @__PURE__ */ __name((e3) => translationX.value = e3.translationX, "ToastTsx2");
          ToastTsx2.__closure = {
            translationX
          };
          ToastTsx2.__workletHash = 13316524972762;
          ToastTsx2.__initData = _worklet_13316524972762_init_data;
          ToastTsx2.__stackDetails = _e;
          return ToastTsx2;
        }()).onChange(function() {
          var _e = [new globalThis.Error(), -2, -27];
          var ToastTsx3 = /* @__PURE__ */ __name(function(event) {
            translationX.value += event.changeX;
          }, "ToastTsx3");
          ToastTsx3.__closure = {
            translationX
          };
          ToastTsx3.__workletHash = 2394815801719;
          ToastTsx3.__initData = _worklet_2394815801719_init_data;
          ToastTsx3.__stackDetails = _e;
          return ToastTsx3;
        }()).onEnd(function() {
          var _e = [new globalThis.Error(), -8, -27];
          var ToastTsx4 = /* @__PURE__ */ __name(function() {
            var willDisappear = toast.dismissible && (translationX.value > width / 4 || translationX.value < -width / 4);
            var direction = Math.sign(translationX.value);
            var position = willDisappear ? OFFSCREEN_LENGTH * direction : 0;
            translationX.value = (0, import_react_native_reanimated2.withTiming)(position, void 0, function() {
              var _e2 = [new globalThis.Error(), -4, -27];
              var ToastTsx5 = /* @__PURE__ */ __name(function(finished) {
                if (finished && willDisappear) {
                  (0, import_react_native_reanimated2.runOnJS)(onceOnDismiss)();
                }
              }, "ToastTsx5");
              ToastTsx5.__closure = {
                willDisappear,
                runOnJS: import_react_native_reanimated2.runOnJS,
                onceOnDismiss
              };
              ToastTsx5.__workletHash = 12633554293434;
              ToastTsx5.__initData = _worklet_12633554293434_init_data;
              ToastTsx5.__stackDetails = _e2;
              return ToastTsx5;
            }());
          }, "ToastTsx4");
          ToastTsx4.__closure = {
            toast,
            translationX,
            width,
            OFFSCREEN_LENGTH,
            withTiming: import_react_native_reanimated2.withTiming,
            runOnJS: import_react_native_reanimated2.runOnJS,
            onceOnDismiss
          };
          ToastTsx4.__workletHash = 8119029086985;
          ToastTsx4.__initData = _worklet_8119029086985_init_data;
          ToastTsx4.__stackDetails = _e;
          return ToastTsx4;
        }());
        var fling = import_react_native_gesture_handler.Gesture.Fling().simultaneousWithExternalGesture(pan).direction(import_react_native_gesture_handler.Directions.UP).onStart(function() {
          var _e = [new globalThis.Error(), -2, -27];
          var ToastTsx6 = /* @__PURE__ */ __name((event) => translationY.value = event.y, "ToastTsx6");
          ToastTsx6.__closure = {
            translationY
          };
          ToastTsx6.__workletHash = 7325651134036;
          ToastTsx6.__initData = _worklet_7325651134036_init_data;
          ToastTsx6.__stackDetails = _e;
          return ToastTsx6;
        }()).onEnd(function() {
          var _e = [new globalThis.Error(), -7, -27];
          var ToastTsx7 = /* @__PURE__ */ __name(function() {
            if (!toast.dismissible) return;
            translationY.value = (0, import_react_native_reanimated2.withTiming)(-OFFSCREEN_LENGTH, void 0, function() {
              var _e2 = [new globalThis.Error(), -3, -27];
              var ToastTsx8 = /* @__PURE__ */ __name(function(finished) {
                if (finished) {
                  (0, import_react_native_reanimated2.runOnJS)(onceOnDismiss)();
                }
              }, "ToastTsx8");
              ToastTsx8.__closure = {
                runOnJS: import_react_native_reanimated2.runOnJS,
                onceOnDismiss
              };
              ToastTsx8.__workletHash = 1700014798715;
              ToastTsx8.__initData = _worklet_1700014798715_init_data;
              ToastTsx8.__stackDetails = _e2;
              return ToastTsx8;
            }());
          }, "ToastTsx7");
          ToastTsx7.__closure = {
            toast,
            translationY,
            withTiming: import_react_native_reanimated2.withTiming,
            OFFSCREEN_LENGTH,
            runOnJS: import_react_native_reanimated2.runOnJS,
            onceOnDismiss
          };
          ToastTsx7.__workletHash = 904652509612;
          ToastTsx7.__initData = _worklet_904652509612_init_data;
          ToastTsx7.__stackDetails = _e;
          return ToastTsx7;
        }());
        var setupSpringMotion = /* @__PURE__ */ __name((spring) => spring.mass(0.35).damping(15).stiffness(350).restDisplacementThreshold(0.1).restSpeedThreshold(0.1), "setupSpringMotion");
        return /* @__PURE__ */ jsx(import_react_native_gesture_handler.GestureDetector, {
          gesture: import_react_native_gesture_handler.Gesture.Simultaneous(pan, fling),
          children: /* @__PURE__ */ jsx(import_react_native_reanimated2.default.View, {
            pointerEvents: "box-none",
            layout: import_react_native_reanimated2.LinearTransition.springify().duration(500).dampingRatio(0.5),
            entering: setupSpringMotion(import_react_native_reanimated2.FadeInUp.springify()),
            exiting: setupSpringMotion(import_react_native_reanimated2.FadeOutUp.springify()),
            children: /* @__PURE__ */ jsx(PressableScale_default, {
              pointerEvents: "box-none",
              disabled: !toast.onPress,
              onPress: toast.onPress,
              children: /* @__PURE__ */ jsx(import_react_native_reanimated2.default.View, {
                style: [animatedStyles, styles.container, toast.contentContainerStyle],
                children: /* @__PURE__ */ jsx(import_react_native36.View, {
                  style: styles.contentContainer,
                  children: /* @__PURE__ */ jsx(ToastContentRenderer, {
                    toast
                  })
                })
              })
            })
          })
        });
      }, "Toast"));
    }
  });

  // src/plugins/_api/toasts/components/ToastContainer.tsx
  function ToastContainer() {
    var toasts = useToastStore((state2) => state2.toasts);
    var marginTop = useSafeAreaInsets().top + 8;
    if (isDiscordToastActive()) marginTop += 50;
    return /* @__PURE__ */ jsx(import_react_native37.View, {
      style: {
        marginTop,
        gap: 4
      },
      children: [
        ...toasts
      ].reverse().map((toast) => /* @__PURE__ */ jsx(Toast_default, {
        toast
      }, toast.id))
    });
  }
  var import_react_native37, isDiscordToastActive;
  var init_ToastContainer = __esm({
    "src/plugins/_api/toasts/components/ToastContainer.tsx"() {
      "use strict";
      init_jsxRuntime();
      import_react_native37 = __toESM(require_react_native(), 1);
      init_react_native_safe_area_context();
      init_useToastStore();
      init_Toast();
      init_stores();
      init_libraries();
      isDiscordToastActive = /* @__PURE__ */ __name(() => FluxUtils.useStateFromStores([
        ToastStore
      ], () => ToastStore.getContent()) != null, "isDiscordToastActive");
      __name(ToastContainer, "ToastContainer");
    }
  });

  // src/plugins/_api/toasts/index.tsx
  var toasts_exports2 = {};
  __export(toasts_exports2, {
    default: () => toasts_default
  });
  var toasts_default;
  var init_toasts3 = __esm({
    "src/plugins/_api/toasts/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_toasts2();
      init_constants();
      init_filters2();
      init_ToastContainer();
      init_useToastStore();
      toasts_default = definePlugin8({
        name: "Toasts",
        description: "Provides a toast notification API.",
        authors: [
          Devs.Pylix
        ],
        required: true,
        patches: [
          {
            id: "add-toast-container",
            target: byFilePath("modules/toast/native/ToastContainer.tsx"),
            patch(module3, patcher11) {
              patcher11.after(module3, "type", (_, res) => {
                var toasts = useToastStore((s) => s.toasts);
                if (!toasts.length) return res;
                return /* @__PURE__ */ jsxs(Fragment, {
                  children: [
                    res,
                    /* @__PURE__ */ jsx(ToastContainer, {})
                  ]
                });
              });
            }
          }
        ]
      });
    }
  });

  // plugins-context-provider:#plugin-context#src\plugins\_core\error-boundary\index.tsx
  var context9, meta9, definePlugin9, definePluginSettings9, logger13, patcher9;
  var init_error_boundary = __esm({
    "plugins-context-provider:#plugin-context#src\\plugins\\_core\\error-boundary\\index.tsx"() {
      init_shared();
      context9 = getPluginContext("error-boundary");
      ({ meta: meta9, definePlugin: definePlugin9, definePluginSettings: definePluginSettings9, logger: logger13, patcher: patcher9 } = context9);
    }
  });

  // src/plugins/_core/error-boundary/CollapsibleHandler.tsx
  function CollapsibleHandler({ collapsed, setCollapsed, onCopy }) {
    var logoPrimary = useToken(tokens.colors.LOGO_PRIMARY);
    return /* @__PURE__ */ jsxs(import_react_native38.View, {
      style: {
        gap: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ jsx(Button_default, {
          variant: "secondary",
          text: collapsed ? t3.error_boundary.screen.show_more() : t3.error_boundary.screen.show_less(),
          icon: /* @__PURE__ */ jsx(import_react_native38.Image, {
            resizeMode: "contain",
            source: findAssetId("down_arrow"),
            style: {
              width: 16,
              tintColor: logoPrimary,
              transform: [
                {
                  rotate: `${collapsed ? 0 : 180}deg`
                }
              ]
            }
          }),
          onPress: /* @__PURE__ */ __name(() => setCollapsed((v) => !v), "onPress")
        }),
        /* @__PURE__ */ jsx(Button_default, {
          variant: "secondary",
          text: t3.error_boundary.screen.copy(),
          icon: /* @__PURE__ */ jsx(import_react_native38.Image, {
            resizeMode: "contain",
            style: {
              tintColor: logoPrimary,
              width: 16
            },
            source: findAssetId("CopyIcon")
          }),
          onPress: onCopy
        })
      ]
    });
  }
  var import_react_native38;
  var init_CollapsibleHandler = __esm({
    "src/plugins/_core/error-boundary/CollapsibleHandler.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Button();
      init_i18n();
      init_assets();
      init_Discord();
      import_react_native38 = __toESM(require_react_native(), 1);
      __name(CollapsibleHandler, "CollapsibleHandler");
    }
  });

  // src/plugins/_core/error-boundary/ErrorComponentStackCard.tsx
  function ErrorComponentStackCard(props) {
    var [collapsed, setCollapsed] = (0, import_react22.useState)(true);
    var stack;
    try {
      stack = parseComponentStack(props.componentStack);
      stack = collapsed ? stack.slice(0, 4) : stack;
    } catch (e3) {
      return null;
    }
    return /* @__PURE__ */ jsx(Card_default, {
      children: /* @__PURE__ */ jsxs(import_react_native39.View, {
        style: {
          gap: 8
        },
        children: [
          /* @__PURE__ */ jsx(Text_default, {
            variant: "heading-lg/bold",
            children: t3.error_boundary.screen.component_stack()
          }),
          /* @__PURE__ */ jsx(import_react_native39.View, {
            style: {
              gap: 4
            },
            children: stack.map((component, index) => /* @__PURE__ */ jsxs(import_react_native39.View, {
              style: {
                flexDirection: "row"
              },
              children: [
                /* @__PURE__ */ jsx(Text_default, {
                  variant: "text-md/bold",
                  color: "text-muted",
                  children: "<"
                }),
                /* @__PURE__ */ jsx(Text_default, {
                  variant: "text-md/bold",
                  children: component
                }),
                /* @__PURE__ */ jsx(Text_default, {
                  variant: "text-md/bold",
                  color: "text-muted",
                  children: "/>"
                })
              ]
            }, index))
          }),
          collapsed && /* @__PURE__ */ jsx(Text_default, {
            children: "..."
          }),
          /* @__PURE__ */ jsx(CollapsibleHandler, {
            collapsed,
            setCollapsed,
            onCopy: /* @__PURE__ */ __name(() => copyToClipboard(props.componentStack, {
              toast: false
            }), "onCopy")
          })
        ]
      })
    });
  }
  var import_react22, import_react_native39;
  var init_ErrorComponentStackCard = __esm({
    "src/plugins/_core/error-boundary/ErrorComponentStackCard.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_i18n();
      init_parseComponentStack();
      import_react22 = __toESM(require_react(), 1);
      import_react_native39 = __toESM(require_react_native(), 1);
      init_CollapsibleHandler();
      init_clipboard();
      init_Discord2();
      __name(ErrorComponentStackCard, "ErrorComponentStackCard");
    }
  });

  // src/plugins/_core/error-boundary/ErrorStackCard.tsx
  function ErrorStackCard(props) {
    var [collapsed, setCollapsed] = (0, import_react23.useState)(true);
    var stack;
    try {
      var parsedErrorStack = parseErrorStack(props.error.stack);
      stack = collapsed ? parsedErrorStack.slice(0, 4) : parsedErrorStack;
    } catch (e3) {
      return null;
    }
    return /* @__PURE__ */ jsx(Card_default, {
      children: /* @__PURE__ */ jsxs(import_react_native40.View, {
        style: {
          gap: 12
        },
        children: [
          /* @__PURE__ */ jsx(Text_default, {
            variant: "heading-lg/bold",
            children: t3.error_boundary.screen.call_stack()
          }),
          /* @__PURE__ */ jsx(import_react_native40.View, {
            style: {
              gap: 4
            },
            children: stack.map((f, id) => /* @__PURE__ */ jsx(Line, {
              frame: f
            }, id))
          }),
          collapsed && /* @__PURE__ */ jsx(Text_default, {
            children: "..."
          }),
          /* @__PURE__ */ jsx(CollapsibleHandler, {
            collapsed,
            setCollapsed,
            onCopy: /* @__PURE__ */ __name(() => copyToClipboard(props.error.stack, {
              toast: false
            }), "onCopy")
          })
        ]
      })
    });
  }
  function Line(props) {
    var [collapsed, setCollapsed] = (0, import_react23.useState)(true);
    return /* @__PURE__ */ jsxs(import_react_native40.Pressable, {
      onPress: /* @__PURE__ */ __name(() => setCollapsed((v) => !v), "onPress"),
      children: [
        /* @__PURE__ */ jsx(Text_default, {
          style: {
            fontFamily: constants.Fonts.CODE_BOLD
          },
          children: props.frame.methodName
        }),
        /* @__PURE__ */ jsx(Text_default, {
          style: {
            fontFamily: constants.Fonts.CODE_NORMAL
          },
          ellipsizeMode: "middle",
          numberOfLines: collapsed ? 1 : void 0,
          children: /* @__PURE__ */ jsxs(Text_default, {
            color: "text-muted",
            children: [
              props.frame.file === INDEX_BUNDLE_FILE ? "jsbundle" : props.frame.file,
              ":",
              props.frame.lineNumber,
              ":",
              props.frame.column
            ]
          })
        })
      ]
    });
  }
  var import_react23, import_react_native40;
  var init_ErrorStackCard = __esm({
    "src/plugins/_core/error-boundary/ErrorStackCard.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_ErrorCard();
      init_parseErrorStack();
      import_react23 = __toESM(require_react(), 1);
      import_react_native40 = __toESM(require_react_native(), 1);
      init_CollapsibleHandler();
      init_i18n();
      init_clipboard();
      init_Discord2();
      init_libraries();
      __name(ErrorStackCard, "ErrorStackCard");
      __name(Line, "Line");
    }
  });

  // src/plugins/_core/error-boundary/ErrorBoundaryScreen.tsx
  function ErrorBoundaryScreen(props) {
    var styles = useStyles5();
    var debugInfo = getDebugInfo();
    return /* @__PURE__ */ jsx(SafeAreaProvider, {
      children: /* @__PURE__ */ jsxs(SafeAreaView, {
        style: styles.container,
        children: [
          /* @__PURE__ */ jsxs(import_react_native41.View, {
            style: {
              gap: 4
            },
            children: [
              /* @__PURE__ */ jsx(Text_default, {
                variant: "display-lg",
                children: t3.error_boundary.uh_oh()
              }),
              /* @__PURE__ */ jsx(Text_default, {
                variant: "text-md/normal",
                children: t3.error_boundary.screen.description()
              }),
              /* @__PURE__ */ jsxs(Text_default, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: [
                  debugInfo.os.name,
                  "; ",
                  debugInfo.discord.build,
                  " (",
                  debugInfo.discord.version,
                  ");",
                  " ",
                  debugInfo.bunny.version,
                  " ",
                  debugInfo.bunny.shortRevision
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxs(import_react_native41.ScrollView, {
            fadingEdgeLength: 64,
            contentContainerStyle: {
              gap: 12
            },
            children: [
              /* @__PURE__ */ jsx(Codeblock, {
                selectable: true,
                children: props.error instanceof Error ? props.error.message : String(props.error)
              }),
              hasStack(props.error) && /* @__PURE__ */ jsx(ErrorStackCard, {
                error: props.error
              }),
              isComponentStack(props.error) ? /* @__PURE__ */ jsx(ErrorComponentStackCard, {
                componentStack: props.error.componentStack
              }) : null
            ]
          }),
          /* @__PURE__ */ jsxs(Card_default, {
            style: {
              gap: 6
            },
            children: [
              /* @__PURE__ */ jsx(Button_default, {
                text: t3.error_boundary.reload(),
                onPress: /* @__PURE__ */ __name(() => BundleUpdaterModule.reload(), "onPress")
              }),
              !isSafeModeEnabled() && /* @__PURE__ */ jsx(Button_default, {
                text: t3.error_boundary.safe_mode(),
                onPress: /* @__PURE__ */ __name(() => {
                  useInitConfigStore.setState((s) => ({
                    config: {
                      ...s.config,
                      safeMode: true
                    }
                  }));
                }, "onPress")
              }),
              /* @__PURE__ */ jsx(Button_default, {
                variant: "destructive",
                text: t3.error_boundary.retry_render(),
                onPress: /* @__PURE__ */ __name(() => props.reset(), "onPress")
              })
            ]
          })
        ]
      })
    });
  }
  var import_react_native41, useStyles5;
  var init_ErrorBoundaryScreen = __esm({
    "src/plugins/_core/error-boundary/ErrorBoundaryScreen.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_Codeblock();
      init_styles();
      init_i18n();
      init_native();
      init_isError();
      import_react_native41 = __toESM(require_react_native(), 1);
      init_ErrorComponentStackCard();
      init_ErrorStackCard();
      init_info();
      init_Button();
      init_Discord2();
      init_libraries();
      init_react_native_safe_area_context();
      init_loader();
      init_useInitConfigStore();
      useStyles5 = createStyles(() => ({
        container: {
          flex: 1,
          backgroundColor: tokens.colors.BG_BASE_SECONDARY,
          paddingHorizontal: 16,
          height: "100%",
          padding: 8,
          gap: 12
        }
      }));
      __name(ErrorBoundaryScreen, "ErrorBoundaryScreen");
    }
  });

  // src/plugins/_core/error-boundary/index.tsx
  var error_boundary_exports = {};
  __export(error_boundary_exports, {
    default: () => error_boundary_default
  });
  var error_boundary_default;
  var init_error_boundary2 = __esm({
    "src/plugins/_core/error-boundary/index.tsx"() {
      "use strict";
      init_jsxRuntime();
      init_error_boundary();
      init_constants();
      init_filters2();
      init_ErrorBoundaryScreen();
      init_wrappers();
      error_boundary_default = definePlugin9({
        name: "ErrorBoundary",
        description: "Error boundary for React components",
        authors: [
          Devs.Pylix
        ],
        required: true,
        patches: [
          {
            id: "error-boundary",
            target: byName("ErrorBoundary"),
            patch(module3, patcher11) {
              patcher11.after(module3.prototype, "render", function() {
                var { state: { error } } = this;
                if (!error) return null;
                logger13.error(error.stack);
                var reset = this.setState.bind(this, {
                  error: null
                });
                return /* @__PURE__ */ jsx(ErrorBoundaryScreen, {
                  error,
                  reset
                });
              });
            }
          }
        ],
        start() {
          var jsxRuntime2 = lookupByProps("jsx", "jsxs").await();
          var callback = /* @__PURE__ */ __name((args) => {
            if (!args[0]) throw new Error("The first argument (Component) is falsy. Ensure that you are passing a valid component.");
          }, "callback");
          patcher9.after.async(jsxRuntime2, "jsx", callback);
          patcher9.after.async(jsxRuntime2, "jsxs", callback);
        }
      });
    }
  });

  // plugins-context-provider:#plugin-context#src\plugins\_core\no-track\index.ts
  var context10, meta10, definePlugin10, definePluginSettings10, logger14, patcher10;
  var init_no_track = __esm({
    "plugins-context-provider:#plugin-context#src\\plugins\\_core\\no-track\\index.ts"() {
      init_shared();
      context10 = getPluginContext("no-track");
      ({ meta: meta10, definePlugin: definePlugin10, definePluginSettings: definePluginSettings10, logger: logger14, patcher: patcher10 } = context10);
    }
  });

  // src/plugins/_core/no-track/index.ts
  var no_track_exports = {};
  __export(no_track_exports, {
    default: () => no_track_default
  });
  var no_track_default;
  var init_no_track2 = __esm({
    "src/plugins/_core/no-track/index.ts"() {
      "use strict";
      init_constants();
      init_filters2();
      init_no_track();
      no_track_default = definePlugin10({
        name: "NoTrack",
        description: "Prevents Discord's tracking analytics and Sentry crash reporting",
        authors: [
          Devs.Pylix
        ],
        required: true,
        patches: [
          {
            id: "no-sentry",
            target: byProps([
              "initSentry"
            ]),
            patch(module3, patcher11) {
              patcher11.instead(module3, "initSentry", () => void 0);
            }
          },
          {
            id: "no-tracker",
            target: byProps([
              "track",
              "trackMaker"
            ]),
            patch(module3, patcher11) {
              patcher11.instead(module3, "track", () => Promise.resolve());
            }
          }
        ]
      });
    }
  });

  // plugins-importer:D:\Projects\Coding stuff\Lumi\src/plugins
  var plugins_exports = {};
  __export(plugins_exports, {
    default: () => plugins_default
  });
  var plugins_default;
  var init_plugins = __esm({
    "plugins-importer:D:\\Projects\\Coding stuff\\Lumi\\src/plugins"() {
      plugins_default = {
        "chat-bubbles": (init_chat_bubbles2(), __toCommonJS(chat_bubbles_exports)).default("/chat-bubbles"),
        "devtoolkit": (init_devtoolkit2(), __toCommonJS(devtoolkit_exports)).default("/devtoolkit"),
        "dummy": (init_dummy2(), __toCommonJS(dummy_exports)).default("/dummy"),
        "experiments": (init_experiments2(), __toCommonJS(experiments_exports)).default("/experiments"),
        "expression-utils": (init_expression_utils2(), __toCommonJS(expression_utils_exports)).default("/expression-utils"),
        "settings": (init_settings3(), __toCommonJS(settings_exports2)).default("/_api/settings"),
        "toasts": (init_toasts3(), __toCommonJS(toasts_exports2)).default("/_api/toasts"),
        "error-boundary": (init_error_boundary2(), __toCommonJS(error_boundary_exports)).default("/_core/error-boundary"),
        "no-track": (init_no_track2(), __toCommonJS(no_track_exports)).default("/_core/no-track")
      };
    }
  });

  // src/stores/usePluginStore.ts
  var usePluginStore_exports = {};
  __export(usePluginStore_exports, {
    default: () => usePluginStore_default,
    initializePlugins: () => initializePlugins
  });
  function startPlugin(draft, id) {
    var plugin = PLUGINS[id];
    if (isSafeModeEnabled() && !plugin.required) {
      logger15.info(`Plugin ${plugin.$id} is not required and safe mode is enabled, skipping`);
      return;
    }
    if (plugin.isAvailable?.() === false) {
      logger15.warn(`Plugin ${plugin.$id} is not available, skipping`);
      return;
    }
    if (draft.states[id].running) {
      logger15.warn(`${plugin.$id} already started`);
      return;
    }
    logger15.debug(`Starting plugin '${plugin.$id}'`);
    try {
      applyPluginPatches(id, plugin);
      draft.states[id].running = true;
      plugin.start?.();
    } catch (e3) {
      logger15.error`Failed to start ${plugin.$id}: ${e3}`;
      return;
    }
    return;
  }
  function applyPluginPatches(id, plugin) {
    var _loop = /* @__PURE__ */ __name(function(pluginPatch2) {
      var patcher11 = pluginPatcherContext.createChild({
        id: pluginPatch2.id ?? pluginPatch2.target.key
      });
      var apply = /* @__PURE__ */ __name(() => {
        logger15.debug(`Applying ${patcher11.id} patch`);
        patcher11.reuse();
        waitFor(pluginPatch2.target, (module3) => {
          pluginPatch2.patch(module3, patcher11);
        });
      }, "apply");
      var settings4 = getPluginSettings(id);
      if (settings4 && pluginPatch2.predicate) {
        var { predicate } = pluginPatch2;
        var unsub = settings4.subscribe(() => predicate(), () => {
          if (predicate()) {
            apply();
          } else {
            logger15.debug(`Disposing ${patcher11.id} patch`);
            patcher11.dispose();
          }
        }, {
          fireImmediately: true
        });
        pluginPatcherContext.attachDisposer(unsub);
      } else {
        if (!pluginPatch2.predicate || pluginPatch2.predicate()) apply();
      }
    }, "_loop");
    if (!plugin.patches) return;
    var pluginPatcherContext = getContextualPatcher(id);
    pluginPatcherContext.reuse();
    for (var pluginPatch of plugin.patches) _loop(pluginPatch);
  }
  function cleanupPlugin(draft, id) {
    var plugin = PLUGINS[id];
    if (plugin.required) {
      logger15.warn(`Cannot stop required plugin '${plugin.$id}'`);
      if (true) throw new Error(`Cannot stop required plugin '${plugin.$id}'`);
      return;
    }
    if (!draft.states[id].running) {
      logger15.warn(`${plugin.$id} already stopped`);
      return;
    }
    logger15.info(`Cleaning up plugin ${plugin.$id}`);
    try {
      var patcher11 = getContextualPatcher(id, false);
      if (patcher11) {
        patcher11.dispose();
        patcher11.children.length = 0;
      }
      plugin.cleanup?.();
    } catch (e3) {
      logger15.error(`Failed to cleanup ${plugin.$id}: ${e3}`);
      return;
    }
    draft.states[id].running = false;
    return;
  }
  function initializePlugins() {
    usePluginStore.persist.rehydrate();
    getProxyFactory(PLUGINS)?.();
    var { startPlugin: startPlugin2, settings: settings4 } = usePluginStore.getState();
    for (var id in PLUGINS) {
      if (settings4[id].enabled) {
        startPlugin2(id);
      }
    }
  }
  var logger15, PLUGINS, usePluginStore, usePluginStore_default;
  var init_usePluginStore = __esm({
    "src/stores/usePluginStore.ts"() {
      "use strict";
      init_esm();
      init_middleware();
      init_immer2();
      init_kvStorage();
      init_lazy();
      init_logger();
      init_loader();
      init_modules();
      init_utils();
      logger15 = wtlogger.createChild("PluginStore");
      PLUGINS = lazyValue(() => (init_plugins(), __toCommonJS(plugins_exports)).default, {
        hint: "object"
      });
      __name(startPlugin, "startPlugin");
      __name(applyPluginPatches, "applyPluginPatches");
      __name(cleanupPlugin, "cleanupPlugin");
      __name(initializePlugins, "initializePlugins");
      usePluginStore = create(subscribeWithSelector(persist(immer2((set2) => ({
        settings: {},
        states: {},
        /**
                 * Toggle a plugin's enabled state
                 */
        togglePlugin: /* @__PURE__ */ __name((id, value, startOrStop = true) => set2((draft) => {
          var target = value ?? !draft.settings[id].enabled;
          if (target === draft.settings[id].enabled) return;
          draft.settings[id].enabled = target;
          if (startOrStop && !isSafeModeEnabled()) {
            if (draft.settings[id].enabled) {
              startPlugin(draft, id);
            } else {
              cleanupPlugin(draft, id);
            }
          }
        }), "togglePlugin"),
        startPlugin: /* @__PURE__ */ __name((id) => set2((draft) => startPlugin(draft, id)), "startPlugin"),
        cleanupPlugin: /* @__PURE__ */ __name((id) => set2((draft) => cleanupPlugin(draft, id)), "cleanupPlugin")
      })), {
        name: "plugin-store",
        storage: createJSONStorage(() => kvStorage),
        partialize: /* @__PURE__ */ __name((state2) => ({
          settings: state2.settings
        }), "partialize")
      })));
      usePluginStore_default = usePluginStore;
    }
  });

  // src/stores/usePrefsStore.ts
  var usePrefsStore_exports = {};
  __export(usePrefsStore_exports, {
    default: () => usePrefsStore_default
  });
  var usePrefsStore, usePrefsStore_default;
  var init_usePrefsStore = __esm({
    "src/stores/usePrefsStore.ts"() {
      "use strict";
      init_esm();
      init_middleware();
      init_kvStorage();
      usePrefsStore = create(persist((set2) => ({}), {
        name: "prefs-store",
        storage: createJSONStorage(() => kvStorage)
      }));
      usePrefsStore_default = usePrefsStore;
    }
  });

  // src/metro/internal/index.ts
  var internal_exports = {};
  __export(internal_exports, {
    initializeMetro: () => initializeMetro
  });
  function patchModule(predicate, patch, { count = 1 } = {}) {
    var _count = 0;
    var callback = /* @__PURE__ */ __name((state2) => {
      var exports = state2.module.exports;
      if (exports && !isBadModuleExports(exports) && predicate(exports, state2)) {
        patch(state2);
        if (++_count === count) {
          internal_onModuleLoaded.delete(callback);
        }
      }
    }, "callback");
    internal_onModuleLoaded.add(callback);
  }
  function initializeMetro() {
    patchModule((exports) => exports.registerAsset, (state2) => {
      var assetRegistryModuleId = state2.id;
      for (var _$state of moduleRegistry.values()) {
        if (Number(_$state.dependencies) === assetRegistryModuleId) {
          _$state.meta.isAsset = true;
        }
      }
    }, {
      count: 2
    });
    patchModule((exports) => exports.fileFinishedImporting, (state2) => {
      before(state2.module.exports, "fileFinishedImporting", (args) => {
        if (_importingModuleId === -1 || !args[0]) return;
        moduleRegistry.get(_importingModuleId).meta.filePath = args[0];
      });
    });
    patchModule((exports) => exports.name === "resolveAssetSource", ({ module: { exports: resolveAssetSource } }) => {
      resolveAssetSource.addCustomSourceTransformer(({ asset }) => {
        if (asset.__wintry) {
          return {
            __packager_asset: true,
            width: asset.width,
            height: asset.height,
            uri: asset.dataurl,
            scale: 1
          };
        }
      });
    });
    patchModule(
      (exp) => exp.default?.reactProfilingEnabled,
      // The bad module is next to the module that is being checked
      ({ id }) => markExportsFlags(id + 1, void 0)
    );
    patchModule((exp) => exp.isMoment, ({ module: { exports } }) => {
      instead(exports, "defineLocale", (args, orig) => {
        var origLocale = exports.locale();
        orig(...args);
        exports.locale(origLocale);
      });
    });
  }
  var init_internal = __esm({
    "src/metro/internal/index.ts"() {
      "use strict";
      init_patcher2();
      init_caches();
      init_registry();
      init_modules();
      __name(patchModule, "patchModule");
      __name(initializeMetro, "initializeMetro");
    }
  });

  // src/components/Wintry/Settings/pages/Logs/__mockings__.tsx
  var mockings_exports = {};
  __export(mockings_exports, {
    LOG_HISTORY_MOCK: () => LOG_HISTORY_MOCK
  });
  var SAMPLE_MESSAGES, generateMockLogs, LOG_HISTORY_MOCK;
  var init_mockings = __esm({
    "src/components/Wintry/Settings/pages/Logs/__mockings__.tsx"() {
      "use strict";
      SAMPLE_MESSAGES = {
        info: [
          "Connection established",
          "Database query completed successfully with 1024 records returned in 350ms",
          "Cache invalidated for user session tokens due to security policy update",
          `As a twenty year old single male I think it's very hard to find a girl who's actually interested in free software. I've had girls jokingly ask to "Netflix and chill" but when I tell her that I don't use Netflix since Netflix requires proprietary software to stream content, they stop talking to me. And worse if they do stay they think I'm weird since I blocked google IP's in my host file and we can't even watch youtube. I can't ever seem to get girls to come over to my place and I can't text them either. Once I get their numbers since I've added customs roms to my phone and refuse to use sms since it's a security concern I require all of my friends to download a free and open source messaging app and I share with them my public gpg key so that we can verify that our conversations are secure. None of my friends are willing to do this. And I can't use sites like tinder since it's not only proprietary software but a major privacy vulnerability. How come it is so hard to find a girl concerned about software freedom. I feel like I'm going to be a virgin forever.`
        ],
        warn: [
          "Resource usage high: CPU utilization has exceeded 85% threshold for over 5 minutes",
          "Disk space low",
          "Network latency detected between application server and database cluster (avg 230ms)",
          "Chiya-san! Coco-nee becomes a drug dealer in the future and might disappear! What should I do!?"
        ],
        error: [
          "Server unreachable: Connection attempts to auth-service failed after 5 retries",
          "Authentication failed",
          "Background task timed out after 120 seconds while processing large media file conversion",
          "Resource limit exceeded: Maximum allowed memory allocation (2GB) reached in worker process"
        ],
        debug: [
          "Component re-rendered",
          "State updated",
          "API response received",
          "User session token refreshed"
        ]
      };
      generateMockLogs = /* @__PURE__ */ __name((count) => Array.from({
        length: count
      }, () => {
        var levelRandom = Math.random();
        var level = levelRandom > 0.9 ? "error" : levelRandom > 0.75 ? "warn" : levelRandom > 0.6 ? "debug" : "info";
        var messageIndex = Math.floor(Math.random() * 4);
        var hasError = level === "error" || level === "warn" && Math.random() > 0.8;
        return {
          level,
          message: SAMPLE_MESSAGES[level][messageIndex],
          timestamp: Date.now() - Math.floor(Math.random() * 864e5),
          errorStack: hasError ? new Error(`Error with ${SAMPLE_MESSAGES[level][messageIndex].toLowerCase()}`).stack : void 0,
          breadcrumbs: hasError ? [
            "Error",
            "ErrorBoundary",
            "AppRoot"
          ] : Math.random() > 0.5 ? [
            "Info",
            "AppRoot"
          ] : []
        };
      }), "generateMockLogs");
      LOG_HISTORY_MOCK = generateMockLogs(100);
    }
  });

  // src/components/Discord/TableRow/TableRowArrow.tsx
  var TableRowArrow_exports = {};
  __export(TableRowArrow_exports, {
    default: () => TableRowArrow_default
  });
  var TableRowArrow_default;
  var init_TableRowArrow = __esm({
    "src/components/Discord/TableRow/TableRowArrow.tsx"() {
      "use strict";
      init_util();
      TableRowArrow_default = getComponentFromProps("TableRowArrow");
    }
  });

  // src/components/Discord/Sheet/ActionSheetRow.tsx
  var ActionSheetRow_exports = {};
  __export(ActionSheetRow_exports, {
    default: () => ActionSheetRow_default
  });
  var ActionSheetRow_default;
  var init_ActionSheetRow = __esm({
    "src/components/Discord/Sheet/ActionSheetRow.tsx"() {
      "use strict";
      init_util();
      ActionSheetRow_default = getComponentFromProps("ActionSheetRow");
    }
  });

  // src/components/Discord/settings/renderer/SettingListRenderer.tsx
  var SettingListRenderer_exports = {};
  __export(SettingListRenderer_exports, {
    SearchableSettingsList: () => SearchableSettingsList,
    SettingsList: () => SettingsList
  });
  var SettingsList, SearchableSettingsList;
  var init_SettingListRenderer = __esm({
    "src/components/Discord/settings/renderer/SettingListRenderer.tsx"() {
      "use strict";
      init_metro();
      init_filters2();
      ({ SettingsList, SearchableSettingsList } = lookup(byFilePath("modules/main_tabs_v2/native/settings/renderer/SettingListRenderer.tsx")).asLazy());
    }
  });

  // src/components/Discord/SegmentedControl/SegmentedControl.tsx
  var SegmentedControl_exports = {};
  __export(SegmentedControl_exports, {
    default: () => SegmentedControl_default
  });
  var SegmentedControl_default;
  var init_SegmentedControl = __esm({
    "src/components/Discord/SegmentedControl/SegmentedControl.tsx"() {
      "use strict";
      init_util();
      SegmentedControl_default = getComponentFromProps("SegmentedControl");
    }
  });

  // src/components/Discord/SegmentedControl/SegmentedControlPages.tsx
  var SegmentedControlPages_exports = {};
  __export(SegmentedControlPages_exports, {
    default: () => SegmentedControlPages_default
  });
  var SegmentedControlPages_default;
  var init_SegmentedControlPages = __esm({
    "src/components/Discord/SegmentedControl/SegmentedControlPages.tsx"() {
      "use strict";
      init_util();
      SegmentedControlPages_default = getComponentFromProps("SegmentedControlPages");
    }
  });

  // src/components/Discord/SegmentedControl/SegmentedControlState.tsx
  var SegmentedControlState_exports = {};
  __export(SegmentedControlState_exports, {
    useSegmentedControlState: () => useSegmentedControlState
  });
  var module2, useSegmentedControlState;
  var init_SegmentedControlState = __esm({
    "src/components/Discord/SegmentedControl/SegmentedControlState.tsx"() {
      "use strict";
      init_wrappers();
      module2 = lookupByProps("useSegmentedControlState");
      useSegmentedControlState = /* @__PURE__ */ __name((args) => {
        return module2.load().useSegmentedControlState(args);
      }, "useSegmentedControlState");
    }
  });

  // src/components/Discord/Forms/FormRadio.tsx
  var FormRadio_exports = {};
  __export(FormRadio_exports, {
    default: () => FormRadio_default
  });
  var FormRadio_default;
  var init_FormRadio = __esm({
    "src/components/Discord/Forms/FormRadio.tsx"() {
      "use strict";
      init_util();
      FormRadio_default = getComponentFromProps("FormRadio", {
        singular: true
      });
    }
  });

  // src/components/Discord/Button/FloatingActionButton.tsx
  var FloatingActionButton_exports = {};
  __export(FloatingActionButton_exports, {
    default: () => FloatingActionButton_default
  });
  var FloatingActionButton_default;
  var init_FloatingActionButton = __esm({
    "src/components/Discord/Button/FloatingActionButton.tsx"() {
      "use strict";
      init_util();
      FloatingActionButton_default = getComponentFromProps("FloatingActionButton", {
        singular: true
      });
    }
  });

  // modules-exposer:#globals#
  var globals_exports = {};
  __export(globals_exports, {
    default: () => globals_default
  });
  function createModuleProxy(factory) {
    var cache = null;
    return new Proxy({}, {
      get: /* @__PURE__ */ __name((_, p2) => (cache ??= factory())[p2], "get"),
      getPrototypeOf: /* @__PURE__ */ __name(() => cache ??= factory(), "getPrototypeOf"),
      ownKeys: /* @__PURE__ */ __name(() => Reflect.ownKeys(cache ??= factory()), "ownKeys"),
      getOwnPropertyDescriptor: /* @__PURE__ */ __name((_, p2) => {
        var descriptor = Reflect.getOwnPropertyDescriptor(cache ??= factory(), p2);
        if (descriptor)
          descriptor.configurable = true;
        return descriptor;
      }, "getOwnPropertyDescriptor")
    });
  }
  var globals_default;
  var init_globals = __esm({
    "modules-exposer:#globals#"() {
      __name(createModuleProxy, "createModuleProxy");
      globals_default = {
        "utils/clipboard": createModuleProxy(() => (init_clipboard(), __toCommonJS(clipboard_exports))),
        "utils/events": createModuleProxy(() => (init_events2(), __toCommonJS(events_exports2))),
        "utils/lazy": createModuleProxy(() => (init_lazy(), __toCommonJS(lazy_exports))),
        "utils/objects": createModuleProxy(() => (init_objects(), __toCommonJS(objects_exports))),
        "utils/network/fetchAsDataUrl": createModuleProxy(() => (init_fetchAsDataUrl(), __toCommonJS(fetchAsDataUrl_exports))),
        "utils/network/url": createModuleProxy(() => (init_url(), __toCommonJS(url_exports))),
        "utils/errors/isError": createModuleProxy(() => (init_isError(), __toCommonJS(isError_exports))),
        "utils/errors/parseComponentStack": createModuleProxy(() => (init_parseComponentStack(), __toCommonJS(parseComponentStack_exports))),
        "utils/errors/parseErrorStack": createModuleProxy(() => (init_parseErrorStack(), __toCommonJS(parseErrorStack_exports))),
        "stores/useInitConfigStore": createModuleProxy(() => (init_useInitConfigStore(), __toCommonJS(useInitConfigStore_exports))),
        "stores/usePluginStore": createModuleProxy(() => (init_usePluginStore(), __toCommonJS(usePluginStore_exports))),
        "stores/usePrefsStore": createModuleProxy(() => (init_usePrefsStore(), __toCommonJS(usePrefsStore_exports))),
        "stores/useToastStore": createModuleProxy(() => (init_useToastStore(), __toCommonJS(useToastStore_exports))),
        "stores/useUpdaterStore": createModuleProxy(() => (init_useUpdaterStore(), __toCommonJS(useUpdaterStore_exports))),
        "patcher/contextual": createModuleProxy(() => (init_contextual(), __toCommonJS(contextual_exports))),
        "patcher/hook": createModuleProxy(() => (init_hook(), __toCommonJS(hook_exports))),
        "patcher/": createModuleProxy(() => (init_patcher2(), __toCommonJS(patcher_exports2))),
        "patcher/patcher": createModuleProxy(() => (init_patcher(), __toCommonJS(patcher_exports))),
        "native/": createModuleProxy(() => (init_native(), __toCommonJS(native_exports))),
        "metro/api": createModuleProxy(() => (init_api(), __toCommonJS(api_exports))),
        "metro/filters": createModuleProxy(() => (init_filters(), __toCommonJS(filters_exports))),
        "metro/": createModuleProxy(() => (init_metro(), __toCommonJS(metro_exports))),
        "metro/lazy": createModuleProxy(() => (init_lazy2(), __toCommonJS(lazy_exports2))),
        "metro/module": createModuleProxy(() => (init_module(), __toCommonJS(module_exports))),
        "metro/internal/caches": createModuleProxy(() => (init_caches(), __toCommonJS(caches_exports))),
        "metro/internal/enums": createModuleProxy(() => (init_enums(), __toCommonJS(enums_exports))),
        "metro/internal/events": createModuleProxy(() => (init_events(), __toCommonJS(events_exports))),
        "metro/internal/": createModuleProxy(() => (init_internal(), __toCommonJS(internal_exports))),
        "metro/internal/modules": createModuleProxy(() => (init_modules(), __toCommonJS(modules_exports))),
        "metro/internal/registry": createModuleProxy(() => (init_registry(), __toCommonJS(registry_exports))),
        "metro/common/filters": createModuleProxy(() => (init_filters2(), __toCommonJS(filters_exports2))),
        "metro/common/icons": createModuleProxy(() => (init_icons(), __toCommonJS(icons_exports))),
        "metro/common/stores": createModuleProxy(() => (init_stores(), __toCommonJS(stores_exports))),
        "metro/common/wrappers": createModuleProxy(() => (init_wrappers(), __toCommonJS(wrappers_exports))),
        "metro/common/libraries/Discord": createModuleProxy(() => (init_Discord(), __toCommonJS(Discord_exports))),
        "metro/common/libraries/Flux": createModuleProxy(() => (init_Flux(), __toCommonJS(Flux_exports))),
        "metro/common/libraries/": createModuleProxy(() => (init_libraries(), __toCommonJS(libraries_exports))),
        "loader/": createModuleProxy(() => (init_loader(), __toCommonJS(loader_exports))),
        "loader/kvStorage": createModuleProxy(() => (init_kvStorage(), __toCommonJS(kvStorage_exports))),
        "loader/modules/BubbleModule": createModuleProxy(() => (init_BubbleModule(), __toCommonJS(BubbleModule_exports))),
        "loader/modules/UpdaterModule": createModuleProxy(() => (init_UpdaterModule(), __toCommonJS(UpdaterModule_exports))),
        "debug/info": createModuleProxy(() => (init_info(), __toCommonJS(info_exports))),
        "data/constants": createModuleProxy(() => (init_constants(), __toCommonJS(constants_exports))),
        "components/Wintry/Callout": createModuleProxy(() => (init_Callout(), __toCommonJS(Callout_exports))),
        "components/Wintry/Codeblock": createModuleProxy(() => (init_Codeblock(), __toCommonJS(Codeblock_exports))),
        "components/Wintry/ErrorCard": createModuleProxy(() => (init_ErrorCard(), __toCommonJS(ErrorCard_exports))),
        "components/Wintry/FilterAndSortBar": createModuleProxy(() => (init_FilterAndSortBar(), __toCommonJS(FilterAndSortBar_exports))),
        "components/Wintry/InlineCheckbox": createModuleProxy(() => (init_InlineCheckbox(), __toCommonJS(InlineCheckbox_exports))),
        "components/Wintry/Search": createModuleProxy(() => (init_Search(), __toCommonJS(Search_exports))),
        "components/Wintry/Tag": createModuleProxy(() => (init_Tag(), __toCommonJS(Tag_exports))),
        "components/Wintry/Settings/PageWrapper": createModuleProxy(() => (init_PageWrapper(), __toCommonJS(PageWrapper_exports))),
        "components/Wintry/Settings/pages/InfoSection": createModuleProxy(() => (init_InfoSection(), __toCommonJS(InfoSection_exports))),
        "components/Wintry/Settings/pages/ResponsiveMasonryFlashList": createModuleProxy(() => (init_ResponsiveMasonryFlashList(), __toCommonJS(ResponsiveMasonryFlashList_exports))),
        "components/Wintry/Settings/pages/Wintry/ClientInfoSheet": createModuleProxy(() => (init_ClientInfoSheet(), __toCommonJS(ClientInfoSheet_exports))),
        "components/Wintry/Settings/pages/Wintry/": createModuleProxy(() => (init_Wintry(), __toCommonJS(Wintry_exports))),
        "components/Wintry/Settings/pages/Wintry/InfoCard": createModuleProxy(() => (init_InfoCard(), __toCommonJS(InfoCard_exports))),
        "components/Wintry/Settings/pages/Updater/": createModuleProxy(() => (init_Updater(), __toCommonJS(Updater_exports))),
        "components/Wintry/Settings/pages/Plugins/": createModuleProxy(() => (init_Plugins(), __toCommonJS(Plugins_exports))),
        "components/Wintry/Settings/pages/Plugins/PluginDetailsSheet": createModuleProxy(() => (init_PluginDetailsSheet(), __toCommonJS(PluginDetailsSheet_exports))),
        "components/Wintry/Settings/pages/Plugins/PluginSheetComponent": createModuleProxy(() => (init_PluginSheetComponent(), __toCommonJS(PluginSheetComponent_exports))),
        "components/Wintry/Settings/pages/Plugins/SheetAwareIconButton": createModuleProxy(() => (init_SheetAwareIconButton(), __toCommonJS(SheetAwareIconButton_exports))),
        "components/Wintry/Settings/pages/Plugins/TitleComponent": createModuleProxy(() => (init_TitleComponent(), __toCommonJS(TitleComponent_exports))),
        "components/Wintry/Settings/pages/Plugins/options/BaseCardOption": createModuleProxy(() => (init_BaseCardOption(), __toCommonJS(BaseCardOption_exports))),
        "components/Wintry/Settings/pages/Plugins/options/BooleanOptionRow": createModuleProxy(() => (init_BooleanOptionRow(), __toCommonJS(BooleanOptionRow_exports))),
        "components/Wintry/Settings/pages/Plugins/options/OptionDefRow": createModuleProxy(() => (init_OptionDefRow(), __toCommonJS(OptionDefRow_exports))),
        "components/Wintry/Settings/pages/Plugins/options/OptionSection": createModuleProxy(() => (init_OptionSection(), __toCommonJS(OptionSection_exports))),
        "components/Wintry/Settings/pages/Plugins/options/RadioOptionRow": createModuleProxy(() => (init_RadioOptionRow(), __toCommonJS(RadioOptionRow_exports))),
        "components/Wintry/Settings/pages/Plugins/options/SelectOptionRow": createModuleProxy(() => (init_SelectOptionRow(), __toCommonJS(SelectOptionRow_exports))),
        "components/Wintry/Settings/pages/Plugins/options/SliderOptionRow": createModuleProxy(() => (init_SliderOptionRow(), __toCommonJS(SliderOptionRow_exports))),
        "components/Wintry/Settings/pages/Plugins/options/StringOptionRow": createModuleProxy(() => (init_StringOptionRow(), __toCommonJS(StringOptionRow_exports))),
        "components/Wintry/Settings/pages/Plugins/common/getIcon": createModuleProxy(() => (init_getIcon(), __toCommonJS(getIcon_exports))),
        "components/Wintry/Settings/pages/Plugins/common/": createModuleProxy(() => (init_common2(), __toCommonJS(common_exports))),
        "components/Wintry/Settings/pages/Plugins/common/usePluginSettings": createModuleProxy(() => (init_usePluginSettings(), __toCommonJS(usePluginSettings_exports))),
        "components/Wintry/Settings/pages/Logs/constants": createModuleProxy(() => (init_constants2(), __toCommonJS(constants_exports2))),
        "components/Wintry/Settings/pages/Logs/": createModuleProxy(() => (init_Logs(), __toCommonJS(Logs_exports))),
        "components/Wintry/Settings/pages/Logs/LogDetailsSheet": createModuleProxy(() => (init_LogDetailsSheet(), __toCommonJS(LogDetailsSheet_exports))),
        "components/Wintry/Settings/pages/Logs/LogRow": createModuleProxy(() => (init_LogRow(), __toCommonJS(LogRow_exports))),
        "components/Wintry/Settings/pages/Logs/__mockings__": createModuleProxy(() => (init_mockings(), __toCommonJS(mockings_exports))),
        "components/Wintry/Settings/pages/Developer/AlertsPlayground": createModuleProxy(() => (init_AlertsPlayground(), __toCommonJS(AlertsPlayground_exports))),
        "components/Wintry/Settings/pages/Developer/AssetBrowser": createModuleProxy(() => (init_AssetBrowser(), __toCommonJS(AssetBrowser_exports))),
        "components/Wintry/Settings/pages/Developer/CalloutPlayground": createModuleProxy(() => (init_CalloutPlayground(), __toCommonJS(CalloutPlayground_exports))),
        "components/Wintry/Settings/pages/Developer/": createModuleProxy(() => (init_Developer(), __toCommonJS(Developer_exports))),
        "components/Wintry/Settings/pages/Developer/ToastPlayground": createModuleProxy(() => (init_ToastPlayground(), __toCommonJS(ToastPlayground_exports))),
        "components/Wintry/Settings/pages/Developer/TokenBrowser/Colors": createModuleProxy(() => (init_Colors(), __toCommonJS(Colors_exports))),
        "components/Wintry/Settings/pages/Developer/TokenBrowser/": createModuleProxy(() => (init_TokenBrowser(), __toCommonJS(TokenBrowser_exports))),
        "components/Wintry/Settings/pages/Addon/AddonCard": createModuleProxy(() => (init_AddonCard(), __toCommonJS(AddonCard_exports))),
        "components/Wintry/Settings/pages/Addon/AddonCollectionManager": createModuleProxy(() => (init_AddonCollectionManager(), __toCommonJS(AddonCollectionManager_exports))),
        "components/Wintry/Settings/pages/Addon/": createModuleProxy(() => (init_Addon(), __toCommonJS(Addon_exports))),
        "components/Wintry/Settings/pages/Addon/SearchTermHighlight": createModuleProxy(() => (init_SearchTermHighlight(), __toCommonJS(SearchTermHighlight_exports))),
        "components/utils/sheets": createModuleProxy(() => (init_sheets(), __toCommonJS(sheets_exports))),
        "components/utils/styles": createModuleProxy(() => (init_styles(), __toCommonJS(styles_exports))),
        "components/Libraries/react-native-safe-area-context": createModuleProxy(() => (init_react_native_safe_area_context(), __toCommonJS(react_native_safe_area_context_exports))),
        "components/Discord/": createModuleProxy(() => (init_Discord2(), __toCommonJS(Discord_exports2))),
        "components/Discord/util": createModuleProxy(() => (init_util(), __toCommonJS(util_exports))),
        "components/Discord/ui-kit/Avatar": createModuleProxy(() => (init_Avatar(), __toCommonJS(Avatar_exports))),
        "components/Discord/TextInput/TextArea": createModuleProxy(() => (init_TextArea(), __toCommonJS(TextArea_exports))),
        "components/Discord/TextInput/TextInput": createModuleProxy(() => (init_TextInput(), __toCommonJS(TextInput_exports))),
        "components/Discord/Text/Text": createModuleProxy(() => (init_Text(), __toCommonJS(Text_exports))),
        "components/Discord/TableRow/RowButton": createModuleProxy(() => (init_RowButton(), __toCommonJS(RowButton_exports))),
        "components/Discord/TableRow/TableCheckboxRow": createModuleProxy(() => (init_TableCheckboxRow(), __toCommonJS(TableCheckboxRow_exports))),
        "components/Discord/TableRow/TableRadioGroup": createModuleProxy(() => (init_TableRadioGroup(), __toCommonJS(TableRadioGroup_exports))),
        "components/Discord/TableRow/TableRadioRow": createModuleProxy(() => (init_TableRadioRow(), __toCommonJS(TableRadioRow_exports))),
        "components/Discord/TableRow/TableRow": createModuleProxy(() => (init_TableRow(), __toCommonJS(TableRow_exports))),
        "components/Discord/TableRow/TableRowArrow": createModuleProxy(() => (init_TableRowArrow(), __toCommonJS(TableRowArrow_exports))),
        "components/Discord/TableRow/TableRowDivider": createModuleProxy(() => (init_TableRowDivider(), __toCommonJS(TableRowDivider_exports))),
        "components/Discord/TableRow/TableRowGroup": createModuleProxy(() => (init_TableRowGroup(), __toCommonJS(TableRowGroup_exports))),
        "components/Discord/TableRow/TableRowIcon": createModuleProxy(() => (init_TableRowIcon(), __toCommonJS(TableRowIcon_exports))),
        "components/Discord/TableRow/TableRowTrailingText": createModuleProxy(() => (init_TableRowTrailingText(), __toCommonJS(TableRowTrailingText_exports))),
        "components/Discord/TableRow/TableSwitchRow": createModuleProxy(() => (init_TableSwitchRow(), __toCommonJS(TableSwitchRow_exports))),
        "components/Discord/Stack/Stack": createModuleProxy(() => (init_Stack(), __toCommonJS(Stack_exports))),
        "components/Discord/Slider/Slider": createModuleProxy(() => (init_Slider(), __toCommonJS(Slider_exports))),
        "components/Discord/Sheet/ActionSheetRow": createModuleProxy(() => (init_ActionSheetRow(), __toCommonJS(ActionSheetRow_exports))),
        "components/Discord/Sheet/BottomSheet": createModuleProxy(() => (init_BottomSheet(), __toCommonJS(BottomSheet_exports))),
        "components/Discord/settings/renderer/SettingListRenderer": createModuleProxy(() => (init_SettingListRenderer(), __toCommonJS(SettingListRenderer_exports))),
        "components/Discord/SegmentedControl/SegmentedControl": createModuleProxy(() => (init_SegmentedControl(), __toCommonJS(SegmentedControl_exports))),
        "components/Discord/SegmentedControl/SegmentedControlPages": createModuleProxy(() => (init_SegmentedControlPages(), __toCommonJS(SegmentedControlPages_exports))),
        "components/Discord/SegmentedControl/SegmentedControlState": createModuleProxy(() => (init_SegmentedControlState(), __toCommonJS(SegmentedControlState_exports))),
        "components/Discord/RedesignCompat/RedesignCompat": createModuleProxy(() => (init_RedesignCompat(), __toCommonJS(RedesignCompat_exports))),
        "components/Discord/Pile/AvatarPile": createModuleProxy(() => (init_AvatarPile(), __toCommonJS(AvatarPile_exports))),
        "components/Discord/Forms/FormCheckbox": createModuleProxy(() => (init_FormCheckbox(), __toCommonJS(FormCheckbox_exports))),
        "components/Discord/Forms/FormRadio": createModuleProxy(() => (init_FormRadio(), __toCommonJS(FormRadio_exports))),
        "components/Discord/Forms/FormSwitch": createModuleProxy(() => (init_FormSwitch(), __toCommonJS(FormSwitch_exports))),
        "components/Discord/experimental/PressableScale": createModuleProxy(() => (init_PressableScale(), __toCommonJS(PressableScale_exports))),
        "components/Discord/experimental/TwinButtons": createModuleProxy(() => (init_TwinButtons(), __toCommonJS(TwinButtons_exports))),
        "components/Discord/ContextMenu/ContextMenu": createModuleProxy(() => (init_ContextMenu(), __toCommonJS(ContextMenu_exports))),
        "components/Discord/Card/Card": createModuleProxy(() => (init_Card(), __toCommonJS(Card_exports))),
        "components/Discord/Button/Button": createModuleProxy(() => (init_Button(), __toCommonJS(Button_exports))),
        "components/Discord/Button/FloatingActionButton": createModuleProxy(() => (init_FloatingActionButton(), __toCommonJS(FloatingActionButton_exports))),
        "components/Discord/Button/IconButton": createModuleProxy(() => (init_IconButton(), __toCommonJS(IconButton_exports))),
        "components/Discord/AlertModal/AlertModal": createModuleProxy(() => (init_AlertModal(), __toCommonJS(AlertModal_exports))),
        "api/alerts": createModuleProxy(() => (init_alerts(), __toCommonJS(alerts_exports))),
        "api/assets": createModuleProxy(() => (init_assets(), __toCommonJS(assets_exports))),
        "api/fs": createModuleProxy(() => (init_fs(), __toCommonJS(fs_exports))),
        "api/logger": createModuleProxy(() => (init_logger(), __toCommonJS(logger_exports))),
        "api/settings": createModuleProxy(() => (init_settings2(), __toCommonJS(settings_exports))),
        "api/toasts": createModuleProxy(() => (init_toasts(), __toCommonJS(toasts_exports)))
      };
    }
  });

  // src/globals.ts
  function wintryGlobalObject() {
    var availableModules = Object.keys(wintryGlobalExports);
    function getNestedSubPaths(paths) {
      var subPaths = /* @__PURE__ */ new Set();
      for (var path of paths) {
        var segments = path.split("/");
        if (segments.length >= 2) {
          subPaths.add(segments.slice(0, 2).join("/"));
        }
      }
      return Array.from(subPaths);
    }
    __name(getNestedSubPaths, "getNestedSubPaths");
    function defineLazyProperty(target, key, getter) {
      Object.defineProperty(target, key, {
        get() {
          var value = getter();
          Object.defineProperty(target, key, {
            value,
            writable: true,
            configurable: true
          });
          return value;
        },
        enumerable: true,
        configurable: true
      });
    }
    __name(defineLazyProperty, "defineLazyProperty");
    function createModuleProxy2(baseObject = {}, currentPath = "") {
      return new Proxy(baseObject, {
        get(_, key) {
          var _loop = /* @__PURE__ */ __name(function(childPath2) {
            var fullChildPath = currentPath + childPath2;
            var childKey = fullChildPath.replace(pathPrefix, "");
            defineLazyProperty(childModules, childKey, () => createModuleProxy2(wintryGlobalExports[fullChildPath], `${fullChildPath}/`));
          }, "_loop");
          if (typeof key !== "string") return baseObject[key];
          var matchingModulePaths = availableModules.filter((modulePath) => modulePath.startsWith(currentPath + key));
          if (matchingModulePaths.length === 0) return baseObject[key];
          if (matchingModulePaths.length === 1 && key === matchingModulePaths[0]) return wintryGlobalExports[currentPath + key];
          var pathPrefix = new RegExp(`^${currentPath + key}/`);
          var relativePaths = matchingModulePaths.map((path) => `${key}/${path.replace(pathPrefix, "")}`);
          var immediateChildren = getNestedSubPaths(relativePaths);
          var childModules = {};
          for (var childPath of immediateChildren) _loop(childPath);
          var currentModule = wintryGlobalExports[currentPath + key] ?? {};
          return new Proxy(currentModule, {
            get(_2, prop) {
              if (typeof prop === "string" && prop.startsWith("$$") && currentModule[prop.slice(2)] && childModules[prop.slice(2)]) {
                return childModules[prop.slice(2)];
              }
              return currentModule[prop] ?? childModules[prop];
            },
            ownKeys() {
              return [
                ...Object.keys(currentModule),
                ...Object.keys(childModules)
              ];
            },
            has(_2, prop) {
              return prop in currentModule || prop in childModules;
            },
            getOwnPropertyDescriptor(_2, prop) {
              return Object.getOwnPropertyDescriptor(currentModule, prop) ?? Object.getOwnPropertyDescriptor(childModules, prop);
            }
          });
        }
      });
    }
    __name(createModuleProxy2, "createModuleProxy");
    return createModuleProxy2();
  }
  var wintryGlobalExports;
  var init_globals2 = __esm({
    "src/globals.ts"() {
      "use strict";
      init_lazy();
      init_emptyModule();
      wintryGlobalExports = window.__wintry_exports = lazyValue(() => (init_globals(), __toCommonJS(globals_exports)).default);
      __name(wintryGlobalObject, "wintryGlobalObject");
    }
  });

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    initializeWintry: () => initializeWintry
  });
  function initializeWintry() {
    try {
      wtlogger.info("Initializing Lumi...");
      initializeMetro();
      initializePlugins();
      initCheckForUpdates();
      window.wintry = wintryGlobalObject();
      wtlogger.info(`Fully initialized Lumi in ${(nativePerformanceNow() - WINTRY_START_TIME).toFixed(2)}ms!`);
    } catch (e3) {
      reportErrorOnInitialization(e3);
    }
  }
  var init_src2 = __esm({
    "src/index.ts"() {
      "use strict";
      init_logger();
      init_error_reporter();
      init_globals2();
      init_internal();
      init_usePluginStore();
      init_useUpdaterStore();
      Object.freeze = Object.seal = Object;
      __name(initializeWintry, "initializeWintry");
    }
  });

  // src/entry.ts
  var entry_exports = {};
  var unhook;
  var init_entry = __esm({
    "src/entry.ts"() {
      "use strict";
      init_registry();
      init_objects();
      Object.freeze = Object.seal = Object;
      unhook = hookDefineProperty(globalThis, "__d", (define2) => {
        unhook();
        globalThis.__d = internal_getDefiner(define2, (runFactory) => {
          (init_src2(), __toCommonJS(src_exports)).initializeWintry();
          runFactory();
        });
      });
    }
  });

  // <stdin>
  try {
    init_entry();
  } catch (e3) {
    (init_error_reporter(), __toCommonJS(error_reporter_exports)).default(e3);
  }
})();
//# sourceURL=lumi
