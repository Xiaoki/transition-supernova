// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fVLxF":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ccb96ee467c7c848";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lJaCx":[function(require,module,exports) {
var _glJs = require("./webgl/gl.js");
var _sceneJs = require("./scene.js");
function supernova(fps = 30) {
    const scene = new (0, _sceneJs.Scene)();
    const updateRate = 1 / fps;
    let lastTime = performance.now();
    let updateTime = 0;
    window.addEventListener("resize", ()=>{
        scene.resize((0, _glJs.glCanvas).width = (0, _glJs.glCanvasWrapper).clientWidth, (0, _glJs.glCanvas).height = (0, _glJs.glCanvasWrapper).clientHeight);
    });
    scene.resize((0, _glJs.glCanvas).width = (0, _glJs.glCanvasWrapper).clientWidth, (0, _glJs.glCanvas).height = (0, _glJs.glCanvasWrapper).clientHeight);
    window.addEventListener("mousemove", (event)=>scene.mouseMove(event.clientX, event.clientY));
    const loop = (time)=>{
        const elapsedTime = Math.max(10, time - lastTime);
        updateTime += .001 * elapsedTime;
        if (updateTime > updateRate) {
            scene.update();
            updateTime -= updateRate * Math.floor(updateTime / updateRate);
        }
        lastTime = time;
        scene.render(updateTime / updateRate, .001 * elapsedTime);
        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
}
supernova();

},{"./webgl/gl.js":"0jUvh","./scene.js":"4ined"}],"0jUvh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "glCanvasWrapper", ()=>glCanvasWrapper);
parcelHelpers.export(exports, "glCanvas", ()=>glCanvas);
parcelHelpers.export(exports, "gl", ()=>gl);
const glCanvasWrapper = document.getElementById("wrapper");
const glCanvas = document.getElementById("renderer");
const gl = glCanvas.getContext("webgl2", {
    stencil: false,
    antialias: true,
    desynchronized: false,
    powerPreference: "high-performance",
    preserveDrawingBuffer: true,
    premultipliedAlpha: false,
    alpha: false
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"hB1uZ":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4ined":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scene", ()=>Scene);
var _glJs = require("./webgl/gl.js");
var _uniformBlocksJs = require("./webgl/uniforms/uniformBlocks.js");
var _cameraJs = require("./webgl/camera.js");
var _vector2Js = require("./math/vector2.js");
var _starJs = require("./star.js");
var _shadersJs = require("./webgl/shaders/shaders.js");
var _vector3Js = require("./math/vector3.js");
var _beamsJs = require("./beams.js");
var _overlayJs = require("./overlay.js");
var _colorJs = require("./math/color.js");
var _particlesJs = require("./particles.js");
var _ringJs = require("./ring.js");
var _gradientJs = require("./gradient.js");
class Scene {
    static MOUSE_APPROACH = .05;
    static MOUSE_SHIFT = .2;
    static TRANSITION_SPEED_IMPLOSION = .08;
    static TRANSITION_SPEED_EXPLOSION = .005;
    static EXPLOSION_EYE = .3;
    static STAR_FIELD_ROTATION = .03;
    static STAR_FIELD_RADIUS = 3.5;
    camera = new (0, _cameraJs.Camera)();
    star = new (0, _starJs.Star)();
    beams = new (0, _beamsJs.Beams)();
    particles = new (0, _particlesJs.Particles)();
    ring = new (0, _ringJs.Ring)();
    gradient = new (0, _gradientJs.Gradient)();
    overlay = new (0, _overlayJs.Overlay)();
    eye = new (0, _vector3Js.Vector3)(0, 0, -3.5);
    target = new (0, _vector3Js.Vector3)();
    width = 0;
    height = 0;
    mouse = new (0, _vector2Js.Vector2)();
    focus = this.mouse.copy();
    focusPrevious = this.focus.copy();
    phase = 0;
    phaseSpeed = .06;
    transition = 0;
    transitionPrevious = this.transition;
    imploding = false;
    exploding = false;
    constructor(){
        (0, _glJs.gl).enable((0, _glJs.gl).CULL_FACE);
        (0, _glJs.gl).enable((0, _glJs.gl).DEPTH_TEST);
        (0, _glJs.gl).blendFuncSeparate((0, _glJs.gl).SRC_ALPHA, (0, _glJs.gl).ONE_MINUS_SRC_ALPHA, (0, _glJs.gl).ZERO, (0, _glJs.gl).ONE_MINUS_SRC_ALPHA);
        window.addEventListener("keydown", (event)=>{
            if (event.key === " ") this.start();
        });
        (0, _shadersJs.Shaders).GRADIENT.setColors(new (0, _colorJs.Color)("#3f2f0f"), new (0, _colorJs.Color)("#000000"));
    }
    start() {
        if (!this.exploding) this.imploding = true;
    }
    resize(width, height) {
        this.width = width;
        this.height = height;
        this.camera.updateProjection(this.width / this.height);
        (0, _glJs.gl).viewport(0, 0, width, height);
    }
    mouseMove(x, y) {
        this.mouse.x = 2 * x / this.width - 1;
        this.mouse.y = 2 * y / this.height - 1;
    }
    update() {
        this.focusPrevious.set(this.focus);
        this.transitionPrevious = this.transition;
        this.focus.x += (this.mouse.x - this.focus.x) * Scene.MOUSE_APPROACH;
        this.focus.y += (this.mouse.y - this.focus.y) * Scene.MOUSE_APPROACH;
        this.phase += this.phaseSpeed;
        if (this.imploding) {
            if ((this.transition += Scene.TRANSITION_SPEED_IMPLOSION) > 1) {
                this.transition = this.transitionPrevious = 0;
                this.imploding = false;
                this.exploding = true;
                (0, _shadersJs.Shaders).GRADIENT.setColors(new (0, _colorJs.Color)("#361344"), new (0, _colorJs.Color)("#000000"));
                this.eye.y = Scene.EXPLOSION_EYE;
            }
        }
        if (this.exploding) {
            if ((this.transition += Scene.TRANSITION_SPEED_EXPLOSION) > 1) this.transition = 1;
        }
        (0, _uniformBlocksJs.UniformBlocks).GLOBALS.setPhase(this.phase, this.phaseSpeed);
    }
    render(time) {
        const transition = this.transitionPrevious + (this.transition - this.transitionPrevious) * time;
        const fy = this.focusPrevious.y + (this.focus.y - this.focusPrevious.y) * time;
        this.target.y = -fy * Scene.MOUSE_SHIFT;
        this.camera.view.lookAt(this.eye, this.target, (0, _cameraJs.Camera).UP);
        this.camera.updateVP();
        (0, _uniformBlocksJs.UniformBlocks).GLOBALS.setVP(this.camera.vp);
        (0, _uniformBlocksJs.UniformBlocks).GLOBALS.setTime(time);
        (0, _uniformBlocksJs.UniformBlocks).GLOBALS.setTransition(this.exploding ? Math.sin(transition * Math.PI * .5) : transition);
        (0, _uniformBlocksJs.UniformBlocks).GLOBALS.setAspect(this.width / this.height);
        (0, _uniformBlocksJs.UniformBlocks).GLOBALS.upload();
        if (this.exploding) {
            const phase = this.phase + time * this.phaseSpeed;
            const angle = phase * Scene.STAR_FIELD_ROTATION;
            this.eye.x = Math.cos(angle) * Scene.STAR_FIELD_RADIUS;
            this.eye.z = Math.sin(angle) * Scene.STAR_FIELD_RADIUS;
            (0, _shadersJs.Shaders).GRADIENT.use();
            (0, _glJs.gl).depthMask(false);
            this.gradient.draw();
            (0, _glJs.gl).depthMask(true);
            (0, _glJs.gl).enable((0, _glJs.gl).BLEND);
            (0, _glJs.gl).depthMask(false);
            (0, _glJs.gl).disable((0, _glJs.gl).DEPTH_TEST);
            if (transition < .5) {
                (0, _shadersJs.Shaders).RING.use();
                this.ring.draw();
            }
            (0, _shadersJs.Shaders).PARTICLES.use();
            this.particles.draw();
            if (transition < .25) {
                (0, _shadersJs.Shaders).OVERLAY.use();
                this.overlay.draw();
            }
            (0, _glJs.gl).disable((0, _glJs.gl).BLEND);
            (0, _glJs.gl).depthMask(true);
        } else {
            (0, _glJs.gl).clear((0, _glJs.gl).DEPTH_BUFFER_BIT);
            (0, _shadersJs.Shaders).GRADIENT.use();
            (0, _glJs.gl).depthMask(false);
            this.gradient.draw();
            (0, _glJs.gl).depthMask(true);
            (0, _shadersJs.Shaders).STAR.use();
            this.star.draw();
            (0, _glJs.gl).enable((0, _glJs.gl).BLEND);
            (0, _glJs.gl).depthMask(false);
            (0, _shadersJs.Shaders).BEAMS.use();
            this.beams.draw();
            (0, _glJs.gl).disable((0, _glJs.gl).BLEND);
            (0, _glJs.gl).depthMask(true);
        }
    }
}

},{"./webgl/gl.js":"0jUvh","./webgl/uniforms/uniformBlocks.js":"aZwAt","./webgl/camera.js":"fCdwP","./math/vector2.js":"jQDIG","./star.js":"fFttQ","./webgl/shaders/shaders.js":"l5uzN","./math/vector3.js":"eGCC1","./beams.js":"lsNIl","./overlay.js":"glYUP","./math/color.js":"4soRZ","./particles.js":"cck7O","./ring.js":"9xK3d","./gradient.js":"dV7n7","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"aZwAt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UniformBlocks", ()=>UniformBlocks);
var _uniformBlockGlobalsJs = require("./uniformBlockGlobals.js");
class UniformBlocks {
    static GLOBALS = new (0, _uniformBlockGlobalsJs.UniformBlockGlobals)();
}

},{"./uniformBlockGlobals.js":"8FAuR","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"8FAuR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UniformBlockGlobals", ()=>UniformBlockGlobals);
parcelHelpers.export(exports, "glslGlobals", ()=>glslGlobals);
var _uniformBlockJs = require("./uniformBlock.js");
class UniformBlockGlobals extends (0, _uniformBlockJs.UniformBlock) {
    static BINDING = 0;
    static NAME = "Globals";
    floats;
    constructor(){
        super(96, UniformBlockGlobals.BINDING);
        this.floats = new Float32Array(this.bytes);
    }
    setVP(vp) {
        this.floats.set(vp.buffer);
    }
    setTime(time) {
        this.floats[16] = time;
    }
    setPhase(phase, phaseSpeed) {
        this.floats[17] = phase;
        this.floats[18] = phaseSpeed;
    }
    setTransition(transition) {
        this.floats[19] = transition;
    }
    setAspect(aspect) {
        this.floats[20] = aspect;
    }
}
const glslGlobals = `
    uniform ` + UniformBlockGlobals.NAME + ` {
        mat4 vp;
        float time;
        float phase;
        float phaseSpeed;
        float transition;
        float aspect;
    };`;

},{"./uniformBlock.js":"iTUMO","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"iTUMO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UniformBlock", ()=>UniformBlock);
var _glJs = require("../gl.js");
var _bufferJs = require("../buffer.js");
class UniformBlock extends (0, _bufferJs.Buffer) {
    index;
    bytes;
    constructor(size, index, usage = (0, _glJs.gl).DYNAMIC_DRAW){
        super((0, _glJs.gl).UNIFORM_BUFFER, usage, size + 0xF >> 4 << 4);
        this.index = index;
        this.bytes = new ArrayBuffer(size);
        (0, _glJs.gl).bindBufferBase((0, _glJs.gl).UNIFORM_BUFFER, index, this.buffer);
    }
    upload() {
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).UNIFORM_BUFFER, this.buffer);
        (0, _glJs.gl).bufferSubData((0, _glJs.gl).UNIFORM_BUFFER, 0, this.bytes);
    }
}

},{"../gl.js":"0jUvh","../buffer.js":"aWeEG","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"aWeEG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Buffer", ()=>Buffer);
var _glJs = require("./gl.js");
class Buffer {
    static #INITIAL_CAPACITY = 0x40000;
    type;
    usage;
    buffer = (0, _glJs.gl).createBuffer();
    capacity;
    constructor(type, usage = (0, _glJs.gl).STATIC_DRAW, initial = Buffer.#INITIAL_CAPACITY){
        this.usage = usage;
        this.type = type;
        (0, _glJs.gl).bindBuffer(type, this.buffer);
        if (typeof initial === "number") (0, _glJs.gl).bufferData(type, this.capacity = initial, usage);
        else (0, _glJs.gl).bufferData(type, initial, usage);
    }
    doublesUntil(capacity) {
        let doubles = 1;
        while(this.capacity << doubles < capacity)++doubles;
        return doubles;
    }
    doubleDestructive(doubleCount = 1) {
        (0, _glJs.gl).bindBuffer(this.type, this.buffer);
        (0, _glJs.gl).bufferData(this.type, this.capacity <<= doubleCount, this.usage);
    }
    free() {
        (0, _glJs.gl).deleteBuffer(this.buffer);
    }
}

},{"./gl.js":"0jUvh","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"fCdwP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Camera", ()=>Camera);
var _matrix4Js = require("../math/matrix4.js");
var _vector3Js = require("../math/vector3.js");
class Camera {
    static UP = Object.freeze(new (0, _vector3Js.Vector3)(0, 1, 0));
    static ANGLE = Math.PI * .3;
    static Z_NEAR = .02;
    static Z_FAR = 50;
    projection = new (0, _matrix4Js.Matrix4)();
    view = new (0, _matrix4Js.Matrix4)();
    vp = new (0, _matrix4Js.Matrix4)();
    updateProjection(aspect, angle = Camera.ANGLE) {
        this.projection.perspective(angle, aspect, Camera.Z_NEAR, Camera.Z_FAR);
    }
    updateVP() {
        this.vp.set(this.projection);
        this.vp.multiply(this.view);
    }
}

},{"../math/matrix4.js":"cIklf","../math/vector3.js":"eGCC1","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"cIklf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Matrix4", ()=>Matrix4);
class Matrix4 {
    buffer = new Float32Array(16);
    constructor(){
        this.identity();
    }
    set(other) {
        for(let i = 0; i < 16; ++i)this.buffer[i] = other.buffer[i];
        return this;
    }
    identity() {
        this.buffer[0] = this.buffer[5] = this.buffer[10] = this.buffer[15] = 1;
        this.buffer[4] = this.buffer[8] = this.buffer[12] = this.buffer[1] = this.buffer[9] = this.buffer[13] = this.buffer[2] = this.buffer[6] = this.buffer[14] = this.buffer[3] = this.buffer[7] = this.buffer[11] = 0;
        return this;
    }
    apply(vector) {
        const _x = vector.x;
        const _y = vector.y;
        const _z = vector.z;
        vector.x = this.buffer[0] * _x + this.buffer[4] * _y + this.buffer[8] * _z + this.buffer[12];
        vector.y = this.buffer[1] * _x + this.buffer[5] * _y + this.buffer[9] * _z + this.buffer[13];
        vector.z = this.buffer[2] * _x + this.buffer[6] * _y + this.buffer[10] * _z + this.buffer[14];
        vector.divide(this.buffer[3] * _x + this.buffer[7] * _y + this.buffer[11] * _z + this.buffer[15]);
        return vector;
    }
    multiply(other) {
        const _00 = this.buffer[0];
        const _01 = this.buffer[1];
        const _02 = this.buffer[2];
        const _03 = this.buffer[3];
        const _10 = this.buffer[4];
        const _11 = this.buffer[5];
        const _12 = this.buffer[6];
        const _13 = this.buffer[7];
        const _20 = this.buffer[8];
        const _21 = this.buffer[9];
        const _22 = this.buffer[10];
        const _23 = this.buffer[11];
        const _30 = this.buffer[12];
        const _31 = this.buffer[13];
        const _32 = this.buffer[14];
        const _33 = this.buffer[15];
        this.buffer[0] = _00 * other.buffer[0] + _10 * other.buffer[1] + _20 * other.buffer[2] + _30 * other.buffer[3];
        this.buffer[1] = _01 * other.buffer[0] + _11 * other.buffer[1] + _21 * other.buffer[2] + _31 * other.buffer[3];
        this.buffer[2] = _02 * other.buffer[0] + _12 * other.buffer[1] + _22 * other.buffer[2] + _32 * other.buffer[3];
        this.buffer[3] = _03 * other.buffer[0] + _13 * other.buffer[1] + _23 * other.buffer[2] + _33 * other.buffer[3];
        this.buffer[4] = _00 * other.buffer[4] + _10 * other.buffer[5] + _20 * other.buffer[6] + _30 * other.buffer[7];
        this.buffer[5] = _01 * other.buffer[4] + _11 * other.buffer[5] + _21 * other.buffer[6] + _31 * other.buffer[7];
        this.buffer[6] = _02 * other.buffer[4] + _12 * other.buffer[5] + _22 * other.buffer[6] + _32 * other.buffer[7];
        this.buffer[7] = _03 * other.buffer[4] + _13 * other.buffer[5] + _23 * other.buffer[6] + _33 * other.buffer[7];
        this.buffer[8] = _00 * other.buffer[8] + _10 * other.buffer[9] + _20 * other.buffer[10] + _30 * other.buffer[11];
        this.buffer[9] = _01 * other.buffer[8] + _11 * other.buffer[9] + _21 * other.buffer[10] + _31 * other.buffer[11];
        this.buffer[10] = _02 * other.buffer[8] + _12 * other.buffer[9] + _22 * other.buffer[10] + _32 * other.buffer[11];
        this.buffer[11] = _03 * other.buffer[8] + _13 * other.buffer[9] + _23 * other.buffer[10] + _33 * other.buffer[11];
        this.buffer[12] = _00 * other.buffer[12] + _10 * other.buffer[13] + _20 * other.buffer[14] + _30 * other.buffer[15];
        this.buffer[13] = _01 * other.buffer[12] + _11 * other.buffer[13] + _21 * other.buffer[14] + _31 * other.buffer[15];
        this.buffer[14] = _02 * other.buffer[12] + _12 * other.buffer[13] + _22 * other.buffer[14] + _32 * other.buffer[15];
        this.buffer[15] = _03 * other.buffer[12] + _13 * other.buffer[13] + _23 * other.buffer[14] + _33 * other.buffer[15];
        return this;
    }
    invert() {
        const _00 = this.buffer[0];
        const _01 = this.buffer[1];
        const _02 = this.buffer[2];
        const _03 = this.buffer[3];
        const _10 = this.buffer[4];
        const _11 = this.buffer[5];
        const _12 = this.buffer[6];
        const _13 = this.buffer[7];
        const _20 = this.buffer[8];
        const _21 = this.buffer[9];
        const _22 = this.buffer[10];
        const _23 = this.buffer[11];
        const _30 = this.buffer[12];
        const _31 = this.buffer[13];
        const _32 = this.buffer[14];
        const _33 = this.buffer[15];
        const s0 = _00 * _11 - _01 * _10;
        const s1 = _00 * _21 - _01 * _20;
        const s2 = _00 * _31 - _01 * _30;
        const s3 = _10 * _21 - _11 * _20;
        const s4 = _10 * _31 - _11 * _30;
        const s5 = _20 * _31 - _21 * _30;
        const c0 = _02 * _13 - _03 * _12;
        const c1 = _02 * _23 - _03 * _22;
        const c2 = _02 * _33 - _03 * _32;
        const c3 = _12 * _23 - _13 * _22;
        const c4 = _12 * _33 - _13 * _32;
        const c5 = _22 * _33 - _23 * _32;
        const iDet = 1 / (s0 * c5 - s1 * c4 + s2 * c3 + s3 * c2 - s4 * c1 + s5 * c0);
        this.buffer[0] = (_11 * c5 - _21 * c4 + _31 * c3) * iDet;
        this.buffer[1] = (_21 * c2 - _31 * c1 - _01 * c5) * iDet;
        this.buffer[2] = (_01 * c4 - _11 * c2 + _31 * c0) * iDet;
        this.buffer[3] = (_11 * c1 - _21 * c0 - _01 * c3) * iDet;
        this.buffer[4] = (_20 * c4 - _30 * c3 - _10 * c5) * iDet;
        this.buffer[5] = (_00 * c5 - _20 * c2 + _30 * c1) * iDet;
        this.buffer[6] = (_10 * c2 - _30 * c0 - _00 * c4) * iDet;
        this.buffer[7] = (_00 * c3 - _10 * c1 + _20 * c0) * iDet;
        this.buffer[8] = (_13 * s5 - _23 * s4 + _33 * s3) * iDet;
        this.buffer[9] = (_23 * s2 - _33 * s1 - _03 * s5) * iDet;
        this.buffer[10] = (_03 * s4 - _13 * s2 + _33 * s0) * iDet;
        this.buffer[11] = (_13 * s1 - _23 * s0 - _03 * s3) * iDet;
        this.buffer[12] = (_22 * s4 - _32 * s3 - _12 * s5) * iDet;
        this.buffer[13] = (_02 * s5 - _22 * s2 + _32 * s1) * iDet;
        this.buffer[14] = (_12 * s2 - _32 * s0 - _02 * s4) * iDet;
        this.buffer[15] = (_02 * s3 - _12 * s1 + _22 * s0) * iDet;
        return this;
    }
    lookAt(from, to, up) {
        this.buffer[2] = from.x - to.x;
        this.buffer[6] = from.y - to.y;
        this.buffer[10] = from.z - to.z;
        const zli = 1 / Math.sqrt(this.buffer[2] * this.buffer[2] + this.buffer[6] * this.buffer[6] + this.buffer[10] * this.buffer[10]);
        this.buffer[2] *= zli;
        this.buffer[6] *= zli;
        this.buffer[10] *= zli;
        this.buffer[14] = -this.buffer[2] * from.x - this.buffer[6] * from.y - this.buffer[10] * from.z;
        this.buffer[0] = this.buffer[6] * up.z - up.y * this.buffer[10];
        this.buffer[4] = this.buffer[10] * up.x - up.z * this.buffer[2];
        this.buffer[8] = this.buffer[2] * up.y - up.x * this.buffer[6];
        const xli = 1 / Math.sqrt(this.buffer[0] * this.buffer[0] + this.buffer[4] * this.buffer[4] + this.buffer[8] * this.buffer[8]);
        this.buffer[0] *= xli;
        this.buffer[4] *= xli;
        this.buffer[8] *= xli;
        this.buffer[12] = -this.buffer[0] * from.x - this.buffer[4] * from.y - this.buffer[8] * from.z;
        this.buffer[1] = this.buffer[4] * this.buffer[10] - this.buffer[6] * this.buffer[8];
        this.buffer[5] = this.buffer[8] * this.buffer[2] - this.buffer[10] * this.buffer[0];
        this.buffer[9] = this.buffer[0] * this.buffer[6] - this.buffer[2] * this.buffer[4];
        this.buffer[13] = -this.buffer[1] * from.x - this.buffer[5] * from.y - this.buffer[9] * from.z;
        this.buffer[3] = 0;
        this.buffer[7] = 0;
        this.buffer[11] = 0;
        this.buffer[15] = 1;
        return this;
    }
    perspective(angle, aspect, zNear, zFar) {
        const a = 1 / Math.tan(angle * 0.5);
        const r = 1 / (zNear - zFar);
        this.buffer[0] = a / aspect;
        this.buffer[1] = 0;
        this.buffer[2] = 0;
        this.buffer[3] = 0;
        this.buffer[4] = 0;
        this.buffer[5] = a;
        this.buffer[6] = 0;
        this.buffer[7] = 0;
        this.buffer[8] = 0;
        this.buffer[9] = 0;
        this.buffer[10] = (zNear + zFar) * r;
        this.buffer[11] = -1;
        this.buffer[12] = 0;
        this.buffer[13] = 0;
        this.buffer[14] = zNear * zFar * (r + r);
        this.buffer[15] = 0;
        return this;
    }
    shift(sx, sy) {
        this.buffer[8] += sx;
        this.buffer[9] += sy;
    }
    frustum(left, right, bottom, top) {
        left.x = this.buffer[3] + this.buffer[0];
        left.y = this.buffer[7] + this.buffer[4];
        left.z = this.buffer[11] + this.buffer[8];
        left.normalize();
        right.x = this.buffer[3] - this.buffer[0];
        right.y = this.buffer[7] - this.buffer[4];
        right.z = this.buffer[11] - this.buffer[8];
        right.normalize();
        bottom.x = this.buffer[3] + this.buffer[1];
        bottom.y = this.buffer[7] + this.buffer[5];
        bottom.z = this.buffer[11] + this.buffer[9];
        bottom.normalize();
        top.x = this.buffer[3] - this.buffer[1];
        top.y = this.buffer[7] - this.buffer[5];
        top.z = this.buffer[11] - this.buffer[9];
        top.normalize();
    }
    orthographic(left, top, right, bottom, zNear, zFar) {
        this.buffer[0] = 2 / (right - left);
        this.buffer[1] = this.buffer[2] = this.buffer[3] = this.buffer[4] = 0;
        this.buffer[5] = 2 / (bottom - top);
        this.buffer[6] = this.buffer[7] = this.buffer[8] = this.buffer[9] = 0;
        this.buffer[10] = 2 / (zNear - zFar);
        this.buffer[11] = 0;
        this.buffer[12] = -(right + left) / (right - left);
        this.buffer[13] = -(top + bottom) / (bottom - top);
        this.buffer[14] = -(zFar + zNear) / (zFar - zNear);
        this.buffer[15] = 1;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"eGCC1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vector3", ()=>Vector3);
class Vector3 {
    x;
    y;
    z;
    constructor(x = 0, y = x, z = y){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    zero() {
        this.x = this.y = this.z = 0;
        return this;
    }
    copy() {
        return new Vector3(this.x, this.y, this.z);
    }
    set(other) {
        this.x = other.x;
        this.y = other.y;
        this.z = other.z;
        return this;
    }
    setCoordinates(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    equals(other) {
        return this.x === other.x && this.y === other.y && this.z === other.z;
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
        return this;
    }
    addMultiplied(vector, scalar) {
        this.x += vector.x * scalar;
        this.y += vector.y * scalar;
        this.z += vector.z * scalar;
        return this;
    }
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
        return this;
    }
    subtractMultiplied(vector, scalar) {
        this.x -= vector.x * scalar;
        this.y -= vector.y * scalar;
        this.z -= vector.z * scalar;
        return this;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    }
    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }
    multiplyVector(other) {
        this.x *= other.x;
        this.y *= other.y;
        this.z *= other.z;
        return this;
    }
    divide(scalar) {
        return this.multiply(1 / scalar);
    }
    cross(a, b) {
        this.x = a.y * b.z - b.y * a.z;
        this.y = a.z * b.x - b.z * a.x;
        this.z = a.x * b.y - b.x * a.y;
        return this;
    }
    dot(vector) {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    }
    normalize() {
        return this.divide(this.length);
    }
    distanceTo(other) {
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        const dz = other.z - this.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    squaredDistanceTo(other) {
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        const dz = other.z - this.z;
        return dx * dx + dy * dy + dz * dz;
    }
    randomUnit(random) {
        const lambda = Math.acos(2 * random.float - 1) - .5 * Math.PI;
        const phi = 2 * Math.PI * random.float;
        this.x = Math.cos(lambda) * Math.cos(phi);
        this.y = Math.cos(lambda) * Math.sin(phi);
        this.z = Math.sin(lambda);
        return this;
    }
    get length() {
        return Math.sqrt(this.dot(this));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"jQDIG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vector2", ()=>Vector2);
class Vector2 {
    x;
    y;
    constructor(x = 0, y = x){
        this.x = x;
        this.y = y;
    }
    set(vector) {
        this.x = vector.x;
        this.y = vector.y;
    }
    copy() {
        return new Vector2(this.x, this.y);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"fFttQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Star", ()=>Star);
var _glJs = require("./webgl/gl.js");
var _attributesSphereJs = require("./webgl/attributes/attributesSphere.js");
var _attributesIndicesJs = require("./webgl/attributes/attributesIndices.js");
var _bufferJs = require("./webgl/buffer.js");
var _spheresJs = require("./webgl/utils/spheres.js");
class Star {
    vao = (0, _glJs.gl).createVertexArray();
    vertices;
    indices;
    indexCount;
    constructor(){
        const vertices = new (0, _attributesSphereJs.AttributesSphere)();
        const indices = new (0, _attributesIndicesJs.AttributesIndices)();
        const sphere = (0, _spheresJs.Spheres).SPHERE_4;
        for(let vertex = 0, vertexCount = sphere.points.length; vertex < vertexCount; ++vertex)vertices.push(sphere.points[vertex]);
        for(let index = 0, indexCount = sphere.indices.length; index < indexCount; ++index)indices.push(sphere.indices[index]);
        this.vertices = new (0, _bufferJs.Buffer)((0, _glJs.gl).ARRAY_BUFFER, (0, _glJs.gl).STATIC_DRAW, vertices.format());
        this.indices = new (0, _bufferJs.Buffer)((0, _glJs.gl).ELEMENT_ARRAY_BUFFER, (0, _glJs.gl).STATIC_DRAW, indices.format());
        this.indexCount = indices.count;
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).ARRAY_BUFFER, this.vertices.buffer);
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).ELEMENT_ARRAY_BUFFER, this.indices.buffer);
        (0, _glJs.gl).enableVertexAttribArray(0);
        (0, _glJs.gl).vertexAttribPointer(0, 3, (0, _glJs.gl).FLOAT, false, 12, 0);
        (0, _glJs.gl).bindVertexArray(null);
    }
    draw() {
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).drawElements((0, _glJs.gl).TRIANGLES, this.indexCount, (0, _glJs.gl).UNSIGNED_SHORT, 0);
    }
}

},{"./webgl/gl.js":"0jUvh","./webgl/attributes/attributesSphere.js":"3U1Mx","./webgl/attributes/attributesIndices.js":"fAqlx","./webgl/buffer.js":"aWeEG","./webgl/utils/spheres.js":"js3OV","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"3U1Mx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributesSphere", ()=>AttributesSphere);
var _attributesJs = require("./attributes.js");
var _glJs = require("../gl.js");
class AttributesSphere extends (0, _attributesJs.Attributes) {
    constructor(){
        super([
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT
        ]);
    }
    push(vertex) {
        this.array.push(vertex.x, vertex.y, vertex.z);
    }
}

},{"./attributes.js":"6kg5M","../gl.js":"0jUvh","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"6kg5M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Attributes", ()=>Attributes);
var _glJs = require("../gl.js");
class Attributes {
    array = [];
    stride;
    formats;
    static typeStride(type) {
        switch(type){
            default:
            case (0, _glJs.gl).FLOAT:
            case (0, _glJs.gl).UNSIGNED_INT:
                return 4;
            case (0, _glJs.gl).UNSIGNED_SHORT:
                return 2;
            case (0, _glJs.gl).UNSIGNED_BYTE:
                return 1;
        }
    }
    constructor(formats){
        this.stride = formats.length;
        this.formats = formats;
    }
    get byteStride() {
        let stride = 0;
        for(let format = 0, formatCount = this.formats.length; format < formatCount; ++format)stride += Attributes.typeStride(this.formats[format]);
        return stride;
    }
    get count() {
        return this.array.length / this.stride;
    }
    format() {
        const buffer = new ArrayBuffer(this.byteStride * this.array.length / this.stride);
        const view = new DataView(buffer);
        let byte = 0;
        for(let index = 0, indices = this.array.length; index < indices; index += this.stride)for(let element = 0; element < this.stride; ++element){
            switch(this.formats[element]){
                case (0, _glJs.gl).FLOAT:
                    view.setFloat32(byte, this.array[index + element], true);
                    break;
                case (0, _glJs.gl).UNSIGNED_INT:
                    view.setUint32(byte, this.array[index + element], true);
                    break;
                case (0, _glJs.gl).UNSIGNED_SHORT:
                    view.setUint16(byte, this.array[index + element], true);
                    break;
                case (0, _glJs.gl).UNSIGNED_BYTE:
                    view.setUint8(byte, this.array[index + element]);
                    break;
            }
            byte += Attributes.typeStride(this.formats[element]);
        }
        return buffer;
    }
}

},{"../gl.js":"0jUvh","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"fAqlx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributesIndices", ()=>AttributesIndices);
var _attributesJs = require("./attributes.js");
var _glJs = require("../gl.js");
class AttributesIndices extends (0, _attributesJs.Attributes) {
    constructor(){
        super([
            (0, _glJs.gl).UNSIGNED_SHORT
        ]);
    }
    push(index) {
        this.array.push(index);
    }
}

},{"./attributes.js":"6kg5M","../gl.js":"0jUvh","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"js3OV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Spheres", ()=>Spheres);
var _sphereJs = require("./sphere.js");
class Spheres {
    static SPHERE_4 = new (0, _sphereJs.Sphere)(4);
}

},{"./sphere.js":"lQu9l","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"lQu9l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sphere", ()=>Sphere);
var _vector3Js = require("../../math/vector3.js");
class Sphere {
    points = [];
    indices = [];
    constructor(divisions = 2){
        let w = (1 + Math.sqrt(5)) * 0.5;
        const h = 1.0 / Math.sqrt(1 + w * w);
        w *= h;
        this.points.push(new (0, _vector3Js.Vector3)(-h, w, 0));
        this.points.push(new (0, _vector3Js.Vector3)(h, w, 0));
        this.points.push(new (0, _vector3Js.Vector3)(-h, -w, 0));
        this.points.push(new (0, _vector3Js.Vector3)(h, -w, 0));
        this.points.push(new (0, _vector3Js.Vector3)(0, -h, w));
        this.points.push(new (0, _vector3Js.Vector3)(0, h, w));
        this.points.push(new (0, _vector3Js.Vector3)(0, -h, -w));
        this.points.push(new (0, _vector3Js.Vector3)(0, h, -w));
        this.points.push(new (0, _vector3Js.Vector3)(w, 0, -h));
        this.points.push(new (0, _vector3Js.Vector3)(w, 0, h));
        this.points.push(new (0, _vector3Js.Vector3)(-w, 0, -h));
        this.points.push(new (0, _vector3Js.Vector3)(-w, 0, h));
        this.indices.push(0, 5, 11);
        this.indices.push(0, 1, 5);
        this.indices.push(0, 7, 1);
        this.indices.push(0, 10, 7);
        this.indices.push(0, 11, 10);
        this.indices.push(1, 9, 5);
        this.indices.push(5, 4, 11);
        this.indices.push(11, 2, 10);
        this.indices.push(10, 6, 7);
        this.indices.push(7, 8, 1);
        this.indices.push(3, 4, 9);
        this.indices.push(3, 2, 4);
        this.indices.push(3, 6, 2);
        this.indices.push(3, 8, 6);
        this.indices.push(3, 9, 8);
        this.indices.push(4, 5, 9);
        this.indices.push(2, 11, 4);
        this.indices.push(6, 10, 2);
        this.indices.push(8, 7, 6);
        this.indices.push(9, 1, 8);
        for(let subdivision = 0; subdivision < divisions; ++subdivision)this.subdivide();
    }
    subdivide() {
        const indexCount = this.indices.length / 3;
        const sourceIndices = this.indices.slice();
        this.indices.length = 0;
        for(let index = 0; index < indexCount; index++){
            const offset = index * 3;
            const ia = sourceIndices[offset];
            const ib = sourceIndices[offset + 1];
            const ic = sourceIndices[offset + 2];
            const iab = this.points.length;
            const ibc = this.points.length + 1;
            const ica = this.points.length + 2;
            this.points.push(this.points[ia].copy().add(this.points[ib].copy()).normalize());
            this.points.push(this.points[ib].copy().add(this.points[ic].copy()).normalize());
            this.points.push(this.points[ic].copy().add(this.points[ia].copy()).normalize());
            this.indices.push(ia, iab, ica);
            this.indices.push(ib, ibc, iab);
            this.indices.push(ic, ica, ibc);
            this.indices.push(iab, ibc, ica);
        }
    }
}

},{"../../math/vector3.js":"eGCC1","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"l5uzN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Shaders", ()=>Shaders);
var _shaderStarJs = require("./shaderStar.js");
var _shaderBeamsJs = require("./shaderBeams.js");
var _shaderOverlayJs = require("./shaderOverlay.js");
var _shaderParticlesJs = require("./shaderParticles.js");
var _shaderRingJs = require("./shaderRing.js");
var _shaderGradientJs = require("./shaderGradient.js");
class Shaders {
    static STAR = new (0, _shaderStarJs.ShaderStar)();
    static BEAMS = new (0, _shaderBeamsJs.ShaderBeams)();
    static PARTICLES = new (0, _shaderParticlesJs.ShaderParticles)();
    static RING = new (0, _shaderRingJs.ShaderRing)();
    static OVERLAY = new (0, _shaderOverlayJs.ShaderOverlay)();
    static GRADIENT = new (0, _shaderGradientJs.ShaderGradient)();
}

},{"./shaderStar.js":"bPYWl","./shaderBeams.js":"4drtk","./shaderOverlay.js":"hQflo","./shaderParticles.js":"nB3ly","./shaderRing.js":"8DRTN","./shaderGradient.js":"6WE6G","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"bPYWl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShaderStar", ()=>ShaderStar);
var _shaderJs = require("./shader.js");
var _uniformBlockGlobalsJs = require("../uniforms/uniformBlockGlobals.js");
var _glslSimplexJs = require("./glsl/glslSimplex.js");
var _colorJs = require("../../math/color.js");
class ShaderStar extends (0, _shaderJs.Shader) {
    static IMPLOSION_MAGNITUDE = .999;
    static IMPLOSION_POWER = 2.05;
    static COLOR_LOW = new (0, _colorJs.Color)("#f5f3ec");
    static COLOR_HIGH = new (0, _colorJs.Color)("#de9000");
    static COLOR_HIGH_HOT = new (0, _colorJs.Color)("#e0d9ac");
    static COLOR_POWER = 2.5;
    static SAMPLE_INTENSITY = (0, _glslSimplexJs.glslSimplex) + `
        float sampleIntensity(const vec3 vertex) {
            return min(1., snoise(vec3(vertex.xy, vertex.z - (phase + phaseSpeed * time))));
        }
        `;
    static VERTEX = (0, _uniformBlockGlobalsJs.glslGlobals) + ShaderStar.SAMPLE_INTENSITY + `
        in vec3 vertex;
        
        out float intensity;
        
        void main() {
            float boost = sin(3.141593 * sqrt(transition)) * BOOST_POWER;
            
            intensity = sampleIntensity(vertex);
            
            gl_Position = vp * vec4((1. + boost * BOOST_POWER) * (1. - pow(transition, IMPLOSION_POWER) * IMPLOSION_MAGNITUDE) * vertex * (intensity * PULSE_MAGNITUDE + 1.), 1.);
        }
        `;
    static FRAGMENT = (0, _uniformBlockGlobalsJs.glslGlobals) + `
        out vec4 color;
        
        in float intensity;
        
        void main() {
            color = vec4(mix(COLOR_LOW, mix(COLOR_HIGH, COLOR_HIGH_HOT, pow(transition, IMPLOSION_POWER)), pow(.5 + .5 * intensity, COLOR_POWER)), 1.);
        }
        `;
    constructor(){
        super(ShaderStar.VERTEX, ShaderStar.FRAGMENT, [
            [
                "IMPLOSION_MAGNITUDE",
                ShaderStar.IMPLOSION_MAGNITUDE
            ],
            [
                "IMPLOSION_POWER",
                ShaderStar.IMPLOSION_POWER
            ],
            [
                "PULSE_MAGNITUDE",
                .1
            ],
            [
                "BOOST_POWER",
                .5
            ],
            [
                "COLOR_POWER",
                ShaderStar.COLOR_POWER
            ],
            [
                "COLOR_LOW",
                (0, _shaderJs.Shader).makeVec3(ShaderStar.COLOR_LOW)
            ],
            [
                "COLOR_HIGH",
                (0, _shaderJs.Shader).makeVec3(ShaderStar.COLOR_HIGH)
            ],
            [
                "COLOR_HIGH_HOT",
                (0, _shaderJs.Shader).makeVec3(ShaderStar.COLOR_HIGH_HOT)
            ]
        ]);
        this.use();
        this.bindUniformBlock((0, _uniformBlockGlobalsJs.UniformBlockGlobals).NAME, (0, _uniformBlockGlobalsJs.UniformBlockGlobals).BINDING);
    }
}

},{"./shader.js":"1dqKc","../uniforms/uniformBlockGlobals.js":"8FAuR","./glsl/glslSimplex.js":"9Wf90","../../math/color.js":"4soRZ","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"1dqKc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Shader", ()=>Shader);
var _glJs = require("../gl.js");
var _vector3Js = require("../../math/vector3.js");
class Shader {
    static VERSION = `#version 300 es
        precision highp float;
        precision highp int;
        `;
    program;
    /**
     * Make the GLSL code for preprocessor defines
     * @param {String[][]} [defines] An optional array of preprocessor defines
     * @returns {String} Preprocessor defines
     */ static makeDefines(defines) {
        let glsl = "";
        for (const define of defines)glsl += "#define " + define[0] + " " + define[1] + "\n";
        return glsl;
    }
    /**
     * Make a vec3
     * @param {Vector3 | Color} vector A value to convert to a vec3
     * @returns {string} The vec3
     */ static makeVec3(vector) {
        if (vector instanceof (0, _vector3Js.Vector3)) return "vec3(" + vector.x + "," + vector.y + "," + vector.z + ")";
        else return "vec3(" + vector.r + "," + vector.g + "," + vector.b + ")";
    }
    /**
     * Construct a shader
     * @param {String} vertex The vertex shader
     * @param {String} fragment The fragment shader
     * @param {String[][]} [defines] An optional array of preprocessor defines
     */ constructor(vertex, fragment, defines = null){
        const shaderVertex = (0, _glJs.gl).createShader((0, _glJs.gl).VERTEX_SHADER);
        const shaderFragment = (0, _glJs.gl).createShader((0, _glJs.gl).FRAGMENT_SHADER);
        let prefix = defines ? Shader.VERSION + Shader.makeDefines(defines) : Shader.VERSION;
        this.program = (0, _glJs.gl).createProgram();
        (0, _glJs.gl).shaderSource(shaderVertex, prefix + vertex);
        (0, _glJs.gl).compileShader(shaderVertex);
        if (!(0, _glJs.gl).getShaderParameter(shaderVertex, (0, _glJs.gl).COMPILE_STATUS)) console.error((0, _glJs.gl).getShaderInfoLog(shaderVertex));
        (0, _glJs.gl).shaderSource(shaderFragment, prefix + fragment);
        (0, _glJs.gl).compileShader(shaderFragment);
        if (!(0, _glJs.gl).getShaderParameter(shaderFragment, (0, _glJs.gl).COMPILE_STATUS)) console.error((0, _glJs.gl).getShaderInfoLog(shaderFragment));
        (0, _glJs.gl).attachShader(this.program, shaderVertex);
        (0, _glJs.gl).attachShader(this.program, shaderFragment);
        (0, _glJs.gl).linkProgram(this.program);
        (0, _glJs.gl).detachShader(this.program, shaderVertex);
        (0, _glJs.gl).detachShader(this.program, shaderFragment);
        (0, _glJs.gl).deleteShader(shaderVertex);
        (0, _glJs.gl).deleteShader(shaderFragment);
        if (!(0, _glJs.gl).getProgramParameter(this.program, (0, _glJs.gl).LINK_STATUS)) console.error((0, _glJs.gl).getProgramInfoLog(this.program));
    }
    /**
     * Get a uniform location
     * @param {string} name The name of the uniform
     * @returns {WebGLUniformLocation} The uniform location
     */ uniformLocation(name) {
        return (0, _glJs.gl).getUniformLocation(this.program, name);
    }
    /**
     * Bind a uniform block
     * @param {string} name The uniform block name
     * @param {number} binding The binding index
     */ bindUniformBlock(name, binding) {
        (0, _glJs.gl).uniformBlockBinding(this.program, (0, _glJs.gl).getUniformBlockIndex(this.program, name), binding);
    }
    /**
     * Use this shader
     */ use() {
        (0, _glJs.gl).useProgram(this.program);
    }
    /**
     * Free allocated resources
     */ free() {
        (0, _glJs.gl).deleteProgram(this.program);
    }
}

},{"../gl.js":"0jUvh","../../math/vector3.js":"eGCC1","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"9Wf90":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "glslSimplex", ()=>glslSimplex);
const glslSimplex = `
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
    
    float snoise(vec3 v){ 
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 =   v - i + dot(i, C.xxx) ;
    
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
    
        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1. + 3.0 * C.xxx;
    
        i = mod(i, 289.0 ); 
        vec4 p = permute( permute( permute( 
                   i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
               
        float n_ = 1.0/7.0; // N=7
        vec3  ns = n_ * D.wyz - D.xzx;
      
        vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
      
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );
      
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
      
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
      
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
      
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
    
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
    
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                      dot(p2,x2), dot(p3,x3) ) );
    }
    `;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"4soRZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Color", ()=>Color);
class Color {
    /**
     * Construct a color
     * @param {string} hex A hexadecimal color string starting with #
     */ constructor(hex){
        this.integer = parseInt(hex.substring(1), 16);
    }
    /**
     * Get the red value in the range [0, 1]
     * @returns {number} The red value
     */ get r() {
        return (this.integer >> 16) / 0xFF;
    }
    /**
     * Get the green value in the range [0, 1]
     * @returns {number} The red value
     */ get g() {
        return (this.integer >> 8 & 0xFF) / 0xFF;
    }
    /**
     * Get the green value in the range [0, 1]
     * @returns {number} The red value
     */ get b() {
        return (this.integer & 0xFF) / 0xFF;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"4drtk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShaderBeams", ()=>ShaderBeams);
var _shaderJs = require("./shader.js");
var _uniformBlockGlobalsJs = require("../uniforms/uniformBlockGlobals.js");
var _shaderStarJs = require("./shaderStar.js");
class ShaderBeams extends (0, _shaderJs.Shader) {
    static VERTEX = (0, _uniformBlockGlobalsJs.glslGlobals) + (0, _shaderStarJs.ShaderStar).SAMPLE_INTENSITY + `
        in vec3 vertex;
        in vec3 side;
        in float intensity;
        in float position;
        
        out vec3 iIntensity;
        
        void main() {
            float t = 1. - pow(transition, IMPLOSION_POWER) * IMPLOSION_MAGNITUDE;
        
            iIntensity = vec3(intensity, (1. - position), sampleIntensity(vertex) * .5 + .5);
            
            gl_Position = vp * vec4(side * t + vertex * mix(RADIUS_MIN * t, RADIUS_MAX * (1. + transition * IMPLOSION_BOOST), position * (1. + pow(iIntensity.z, SCALE_POWER))), 1.);
        }
        `;
    static FRAGMENT = (0, _uniformBlockGlobalsJs.glslGlobals) + `
        out vec4 color;
        
        in vec3 iIntensity;
        
        void main() {
            color = vec4(mix(COLOR_LOW, mix(COLOR_HIGH, COLOR_HIGH_HOT, pow(transition, IMPLOSION_POWER)), pow(iIntensity.z, COLOR_POWER)), pow(2.2 * iIntensity.z * iIntensity.y * pow(iIntensity.x, INTENSITY_POWER), 1.7));
        }
        `;
    constructor(){
        super(ShaderBeams.VERTEX, ShaderBeams.FRAGMENT, [
            [
                "IMPLOSION_BOOST",
                .7
            ],
            [
                "SCALE_POWER",
                2.5
            ],
            [
                "INTENSITY_POWER",
                2.8
            ],
            [
                "RADIUS_MIN",
                .7
            ],
            [
                "RADIUS_MAX",
                1.2
            ],
            [
                "IMPLOSION_MAGNITUDE",
                (0, _shaderStarJs.ShaderStar).IMPLOSION_MAGNITUDE
            ],
            [
                "IMPLOSION_POWER",
                (0, _shaderStarJs.ShaderStar).IMPLOSION_POWER
            ],
            [
                "COLOR_POWER",
                (0, _shaderStarJs.ShaderStar).COLOR_POWER
            ],
            [
                "COLOR_LOW",
                (0, _shaderJs.Shader).makeVec3((0, _shaderStarJs.ShaderStar).COLOR_LOW)
            ],
            [
                "COLOR_HIGH",
                (0, _shaderJs.Shader).makeVec3((0, _shaderStarJs.ShaderStar).COLOR_HIGH)
            ],
            [
                "COLOR_HIGH_HOT",
                (0, _shaderJs.Shader).makeVec3((0, _shaderStarJs.ShaderStar).COLOR_HIGH_HOT)
            ]
        ]);
    }
}

},{"./shader.js":"1dqKc","../uniforms/uniformBlockGlobals.js":"8FAuR","./shaderStar.js":"bPYWl","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"hQflo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShaderOverlay", ()=>ShaderOverlay);
var _shaderJs = require("./shader.js");
var _uniformBlockGlobalsJs = require("../uniforms/uniformBlockGlobals.js");
class ShaderOverlay extends (0, _shaderJs.Shader) {
    static VERTEX = (0, _uniformBlockGlobalsJs.glslGlobals) + `
        #define OVEREXPOSE 1.65
    
        in vec2 vertex;
        
        flat out float alpha;
        
        void main() {
            alpha = max(0., OVEREXPOSE - OVEREXPOSE * sqrt(transition * 4.));
            
            gl_Position = vec4(vertex, 0., 1.);
        }
        `;
    static FRAGMENT = `
        uniform vec3 overlayColor;
        
        out vec4 color;
        
        flat in float alpha;
        
        void main() {
            if (alpha > 1.)
                color = vec4(vec3(0.), 1.);
            else
                color = vec4(vec3(1.), alpha);
        }
        `;
    constructor(){
        super(ShaderOverlay.VERTEX, ShaderOverlay.FRAGMENT);
    }
}

},{"./shader.js":"1dqKc","../uniforms/uniformBlockGlobals.js":"8FAuR","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"nB3ly":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShaderParticles", ()=>ShaderParticles);
var _shaderJs = require("./shader.js");
var _uniformBlockGlobalsJs = require("../uniforms/uniformBlockGlobals.js");
var _colorJs = require("../../math/color.js");
var _glslSimplexJs = require("./glsl/glslSimplex.js");
class ShaderParticles extends (0, _shaderJs.Shader) {
    static VERTEX = (0, _uniformBlockGlobalsJs.glslGlobals) + (0, _glslSimplexJs.glslSimplex) + `
        #define SPARKLE_SPEED .4
        
        in vec3 vertex;
        in float radius;
        
        out vec3 iColor;
        
        void main() {
            float pulse = snoise(vertex * 13. + normalize(vertex) * (phase + phaseSpeed * time) * SPARKLE_SPEED);
        
            iColor = mix(mix(COLOR_CENTER, COLOR_EDGE, .5 + .5 * snoise(vertex * 3.)), COLOR_BRIGHT, .5 + .5 * pulse);
            
            gl_Position = vp * vec4(vertex * pow(transition, POWER), 1.);
            
            gl_PointSize = (1. + pulse) * radius / gl_Position.w;
        }
        `;
    static FRAGMENT = `
        out vec4 color;
        
        in vec3 iColor;
        
        void main() {
            vec2 delta = gl_PointCoord - .5;
            float distance = length(delta * 2.);
            float angle = atan(delta.y / delta.x);
            float m = distance * (sin(angle * float(4)) * .5 + .5);
            
            color = vec4(iColor, pow(1. - distance, 2.5) * ALPHA - m);
        }
        `;
    constructor(){
        super(ShaderParticles.VERTEX, ShaderParticles.FRAGMENT, [
            [
                "ALPHA",
                .7
            ],
            [
                "POWER",
                .15
            ],
            [
                "COLOR_CENTER",
                (0, _shaderJs.Shader).makeVec3(new (0, _colorJs.Color)("#3367ff"))
            ],
            [
                "COLOR_EDGE",
                (0, _shaderJs.Shader).makeVec3(new (0, _colorJs.Color)("#a300ff"))
            ],
            [
                "COLOR_BRIGHT",
                (0, _shaderJs.Shader).makeVec3(new (0, _colorJs.Color)("#ffffff"))
            ]
        ]);
    }
}

},{"./shader.js":"1dqKc","../uniforms/uniformBlockGlobals.js":"8FAuR","../../math/color.js":"4soRZ","./glsl/glslSimplex.js":"9Wf90","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"8DRTN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShaderRing", ()=>ShaderRing);
var _shaderJs = require("./shader.js");
var _uniformBlockGlobalsJs = require("../uniforms/uniformBlockGlobals.js");
var _colorJs = require("../../math/color.js");
class ShaderRing extends (0, _shaderJs.Shader) {
    static VERTEX = (0, _uniformBlockGlobalsJs.glslGlobals) + `
        in vec2 vertex;
        
        out vec2 iVertex;
        
        void main() {
            float radius = transition * 20.;
            
            iVertex = vertex;
            
            gl_Position = vp * vec4(vertex.x * radius, 0., vertex.y * radius, 1.);
        }
        `;
    static FRAGMENT = (0, _uniformBlockGlobalsJs.glslGlobals) + `
        out vec4 color;
        
        in vec2 iVertex;
        
        void main() {
            float distance = length(iVertex);
            float alpha = ALPHA * (.5 - .5 * cos(pow(distance, RING_POWER) * 6.2831853)) * max(0., 1. - transition * 2.);
            
            color = vec4(COLOR, alpha);
        }
        `;
    constructor(){
        super(ShaderRing.VERTEX, ShaderRing.FRAGMENT, [
            [
                "ALPHA",
                .7
            ],
            [
                "RING_POWER",
                4.2
            ],
            [
                "COLOR",
                (0, _shaderJs.Shader).makeVec3(new (0, _colorJs.Color)("#f3e4ff"))
            ]
        ]);
    }
}

},{"./shader.js":"1dqKc","../uniforms/uniformBlockGlobals.js":"8FAuR","../../math/color.js":"4soRZ","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"6WE6G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShaderGradient", ()=>ShaderGradient);
var _shaderJs = require("./shader.js");
var _uniformBlockGlobalsJs = require("../uniforms/uniformBlockGlobals.js");
var _glJs = require("../gl.js");
class ShaderGradient extends (0, _shaderJs.Shader) {
    static VERTEX = `
        in vec2 vertex;
        
        out vec2 iVertex;
        
        void main() {
            iVertex = vertex;
            
            gl_Position = vec4(vertex, 0., 1.);
        }
        `;
    static FRAGMENT = (0, _uniformBlockGlobalsJs.glslGlobals) + `
        uniform vec3 a;
        uniform vec3 b;
        
        in vec2 iVertex;
        
        out vec4 color;
        
        void main() {
            color = vec4(mix(a, b, (1. - transition) * min(1., length(iVertex * vec2(1., 1. / aspect)))), 1.);
        }
        `;
    uniformA;
    uniformB;
    constructor(){
        super(ShaderGradient.VERTEX, ShaderGradient.FRAGMENT);
        this.use();
        this.bindUniformBlock((0, _uniformBlockGlobalsJs.UniformBlockGlobals).NAME, (0, _uniformBlockGlobalsJs.UniformBlockGlobals).BINDING);
        this.uniformA = this.uniformLocation("a");
        this.uniformB = this.uniformLocation("b");
    }
    setColors(a, b) {
        this.use();
        (0, _glJs.gl).uniform3f(this.uniformA, a.r, a.g, a.b);
        (0, _glJs.gl).uniform3f(this.uniformB, b.r, b.g, b.b);
    }
}

},{"./shader.js":"1dqKc","../uniforms/uniformBlockGlobals.js":"8FAuR","../gl.js":"0jUvh","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"lsNIl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Beams", ()=>Beams);
var _attributesBeamsJs = require("./webgl/attributes/attributesBeams.js");
var _attributesIndicesJs = require("./webgl/attributes/attributesIndices.js");
var _randomJs = require("./math/random.js");
var _vector3Js = require("./math/vector3.js");
var _bufferJs = require("./webgl/buffer.js");
var _glJs = require("./webgl/gl.js");
class Beams {
    static SEED = 42;
    static BEAM_COUNT = 300;
    static TANGENT = new (0, _vector3Js.Vector3)(0, 0, 1);
    static RADIUS = .3;
    vao = (0, _glJs.gl).createVertexArray();
    vertices;
    indices;
    indexCount;
    constructor(){
        const random = new (0, _randomJs.Random)(Beams.SEED);
        const vertices = new (0, _attributesBeamsJs.AttributesBeams)();
        const indices = new (0, _attributesIndicesJs.AttributesIndices)();
        const vertex = new (0, _vector3Js.Vector3)();
        const side = new (0, _vector3Js.Vector3)();
        for(let beam = 0; beam < Beams.BEAM_COUNT; ++beam){
            const direction = new (0, _vector3Js.Vector3)().randomUnit(random);
            const tangent = new (0, _vector3Js.Vector3)().cross(Beams.TANGENT, direction).normalize();
            const radius = Beams.RADIUS * (1 + random.float);
            vertex.set(direction);
            side.set(tangent).multiply(radius);
            vertices.push(vertex, side, 0, 0);
            vertices.push(vertex, side, 0, 1);
            side.zero();
            vertices.push(vertex, side, 1, 0);
            vertices.push(vertex, side, 1, 1);
            side.set(tangent).multiply(-radius);
            vertices.push(vertex, side, 0, 0);
            vertices.push(vertex, side, 0, 1);
            indices.push(beam * 6);
            indices.push(beam * 6 + 3);
            indices.push(beam * 6 + 1);
            indices.push(beam * 6);
            indices.push(beam * 6 + 2);
            indices.push(beam * 6 + 3);
            indices.push(beam * 6 + 2);
            indices.push(beam * 6 + 5);
            indices.push(beam * 6 + 3);
            indices.push(beam * 6 + 2);
            indices.push(beam * 6 + 4);
            indices.push(beam * 6 + 5);
        }
        this.vertices = new (0, _bufferJs.Buffer)((0, _glJs.gl).ARRAY_BUFFER, (0, _glJs.gl).STATIC_DRAW, vertices.format());
        this.indices = new (0, _bufferJs.Buffer)((0, _glJs.gl).ELEMENT_ARRAY_BUFFER, (0, _glJs.gl).STATIC_DRAW, indices.format());
        this.indexCount = indices.count;
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).ARRAY_BUFFER, this.vertices.buffer);
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).ELEMENT_ARRAY_BUFFER, this.indices.buffer);
        (0, _glJs.gl).enableVertexAttribArray(0);
        (0, _glJs.gl).vertexAttribPointer(0, 3, (0, _glJs.gl).FLOAT, false, 32, 0);
        (0, _glJs.gl).enableVertexAttribArray(1);
        (0, _glJs.gl).vertexAttribPointer(1, 3, (0, _glJs.gl).FLOAT, false, 32, 12);
        (0, _glJs.gl).enableVertexAttribArray(2);
        (0, _glJs.gl).vertexAttribPointer(2, 1, (0, _glJs.gl).FLOAT, false, 32, 24);
        (0, _glJs.gl).enableVertexAttribArray(3);
        (0, _glJs.gl).vertexAttribPointer(3, 1, (0, _glJs.gl).FLOAT, false, 32, 28);
        (0, _glJs.gl).bindVertexArray(null);
    }
    draw() {
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).drawElements((0, _glJs.gl).TRIANGLES, this.indexCount, (0, _glJs.gl).UNSIGNED_SHORT, 0);
    }
}

},{"./webgl/attributes/attributesBeams.js":"b1Keo","./webgl/attributes/attributesIndices.js":"fAqlx","./math/random.js":"e7oXS","./math/vector3.js":"eGCC1","./webgl/buffer.js":"aWeEG","./webgl/gl.js":"0jUvh","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"b1Keo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributesBeams", ()=>AttributesBeams);
var _attributesJs = require("./attributes.js");
var _glJs = require("../gl.js");
class AttributesBeams extends (0, _attributesJs.Attributes) {
    constructor(){
        super([
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT
        ]);
    }
    push(vertex, side, intensity, position) {
        this.array.push(vertex.x, vertex.y, vertex.z, side.x, side.y, side.z, intensity, position);
    }
}

},{"./attributes.js":"6kg5M","../gl.js":"0jUvh","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"e7oXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Random", ()=>Random);
class Random {
    static MULTIPLIER = 69069;
    static MODULUS = 0x100000000;
    /**
     * Make a random seed
     * @returns {number} A valid random seed
     */ static makeSeed() {
        return Math.floor(Math.random() * Random.MODULUS);
    }
    /**
     * Construct a randomizer
     * @param {number} seed The seed, which must be a 32-bit unsigned integer
     */ constructor(seed = Random.makeSeed()){
        this.n = seed;
    }
    /**
     * Get a randomized number in the range [0, 1]
     * @returns {number} A random number
     */ get float() {
        this.n = Random.MULTIPLIER * this.n++ % Random.MODULUS;
        return this.n / Random.MODULUS;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"glYUP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Overlay", ()=>Overlay);
var _glJs = require("./webgl/gl.js");
var _bufferJs = require("./webgl/buffer.js");
class Overlay {
    vao = (0, _glJs.gl).createVertexArray();
    vertices;
    constructor(){
        this.vertices = new (0, _bufferJs.Buffer)((0, _glJs.gl).ARRAY_BUFFER, (0, _glJs.gl).STATIC_DRAW, new Float32Array([
            -1,
            -1,
            1,
            -1,
            1,
            1,
            -1,
            1
        ]));
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).ARRAY_BUFFER, this.vertices.buffer);
        (0, _glJs.gl).enableVertexAttribArray(0);
        (0, _glJs.gl).vertexAttribPointer(0, 2, (0, _glJs.gl).FLOAT, false, 8, 0);
        (0, _glJs.gl).bindVertexArray(null);
    }
    draw() {
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).drawArrays((0, _glJs.gl).TRIANGLE_FAN, 0, 4);
    }
}

},{"./webgl/gl.js":"0jUvh","./webgl/buffer.js":"aWeEG","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"cck7O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Particles", ()=>Particles);
var _glJs = require("./webgl/gl.js");
var _attributesParticlesJs = require("./webgl/attributes/attributesParticles.js");
var _vector3Js = require("./math/vector3.js");
var _randomJs = require("./math/random.js");
var _bufferJs = require("./webgl/buffer.js");
class Particles {
    static SEED = 8;
    static PARTICLE_COUNT = 10000;
    static RADIUS = 3;
    static RADIUS_POWER = 1.3;
    static SIZE_MIN = 32;
    static SIZE_MAX = 80;
    static SIZE_POWER = 2;
    vao = (0, _glJs.gl).createVertexArray();
    vertices;
    constructor(){
        const random = new (0, _randomJs.Random)(Particles.SEED);
        const attributes = new (0, _attributesParticlesJs.AttributesParticles)();
        const position = new (0, _vector3Js.Vector3)();
        for(let particle = 0; particle < Particles.PARTICLE_COUNT; ++particle){
            position.randomUnit(random).multiply(Math.pow(random.float, Particles.RADIUS_POWER) * Particles.RADIUS);
            attributes.push(position, Particles.SIZE_MIN = (Particles.SIZE_MAX - Particles.SIZE_MIN) * Math.pow(random.float, Particles.SIZE_POWER));
        }
        this.vertices = new (0, _bufferJs.Buffer)((0, _glJs.gl).ARRAY_BUFFER, (0, _glJs.gl).STATIC_DRAW, attributes.format());
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).ARRAY_BUFFER, this.vertices.buffer);
        (0, _glJs.gl).enableVertexAttribArray(0);
        (0, _glJs.gl).vertexAttribPointer(0, 3, (0, _glJs.gl).FLOAT, false, 16, 0);
        (0, _glJs.gl).enableVertexAttribArray(1);
        (0, _glJs.gl).vertexAttribPointer(1, 1, (0, _glJs.gl).FLOAT, false, 16, 12);
        (0, _glJs.gl).bindVertexArray(null);
    }
    draw() {
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).drawArrays((0, _glJs.gl).POINTS, 0, Particles.PARTICLE_COUNT);
    }
}

},{"./webgl/gl.js":"0jUvh","./webgl/attributes/attributesParticles.js":"dEGo0","./math/vector3.js":"eGCC1","./math/random.js":"e7oXS","./webgl/buffer.js":"aWeEG","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"dEGo0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributesParticles", ()=>AttributesParticles);
var _attributesJs = require("./attributes.js");
var _glJs = require("../gl.js");
class AttributesParticles extends (0, _attributesJs.Attributes) {
    constructor(){
        super([
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT
        ]);
    }
    push(vertex, radius) {
        this.array.push(vertex.x, vertex.y, vertex.z, radius);
    }
}

},{"./attributes.js":"6kg5M","../gl.js":"0jUvh","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"9xK3d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Ring", ()=>Ring);
var _glJs = require("./webgl/gl.js");
var _attributesRingJs = require("./webgl/attributes/attributesRing.js");
var _attributesIndicesJs = require("./webgl/attributes/attributesIndices.js");
var _vector2Js = require("./math/vector2.js");
var _bufferJs = require("./webgl/buffer.js");
class Ring {
    static PRECISION = 128;
    vao = (0, _glJs.gl).createVertexArray();
    vertices;
    indices;
    indexCount;
    constructor(){
        const vertices = new (0, _attributesRingJs.AttributesRing)();
        const indices = new (0, _attributesIndicesJs.AttributesIndices)();
        const vertex = new (0, _vector2Js.Vector2)();
        for(let step = 0; step < Ring.PRECISION; ++step){
            const angle = Math.PI * 2 * step / Ring.PRECISION;
            vertex.x = Math.cos(angle);
            vertex.y = Math.sin(angle);
            vertices.push(vertex);
            if (step > 0 && step < Ring.PRECISION - 1) {
                indices.push(0);
                indices.push(step);
                indices.push(step + 1);
            }
        }
        this.vertices = new (0, _bufferJs.Buffer)((0, _glJs.gl).ARRAY_BUFFER, (0, _glJs.gl).STATIC_DRAW, vertices.format());
        this.indices = new (0, _bufferJs.Buffer)((0, _glJs.gl).ELEMENT_ARRAY_BUFFER, (0, _glJs.gl).STATIC_DRAW, indices.format());
        this.indexCount = indices.count;
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).ARRAY_BUFFER, this.vertices.buffer);
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).ELEMENT_ARRAY_BUFFER, this.indices.buffer);
        (0, _glJs.gl).enableVertexAttribArray(0);
        (0, _glJs.gl).vertexAttribPointer(0, 2, (0, _glJs.gl).FLOAT, false, 8, 0);
        (0, _glJs.gl).bindVertexArray(null);
    }
    draw() {
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).drawElements((0, _glJs.gl).TRIANGLES, this.indexCount, (0, _glJs.gl).UNSIGNED_SHORT, 0);
    }
}

},{"./webgl/gl.js":"0jUvh","./webgl/attributes/attributesRing.js":"s9TQs","./webgl/attributes/attributesIndices.js":"fAqlx","./math/vector2.js":"jQDIG","./webgl/buffer.js":"aWeEG","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"s9TQs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributesRing", ()=>AttributesRing);
var _attributesJs = require("./attributes.js");
var _glJs = require("../gl.js");
class AttributesRing extends (0, _attributesJs.Attributes) {
    constructor(){
        super([
            (0, _glJs.gl).FLOAT,
            (0, _glJs.gl).FLOAT
        ]);
    }
    push(position) {
        this.array.push(position.x, position.y);
    }
}

},{"./attributes.js":"6kg5M","../gl.js":"0jUvh","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}],"dV7n7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Gradient", ()=>Gradient);
var _glJs = require("./webgl/gl.js");
var _bufferJs = require("./webgl/buffer.js");
class Gradient {
    vao = (0, _glJs.gl).createVertexArray();
    vertices;
    constructor(){
        this.vertices = new (0, _bufferJs.Buffer)((0, _glJs.gl).ARRAY_BUFFER, (0, _glJs.gl).STATIC_DRAW, new Float32Array([
            -1,
            -1,
            1,
            -1,
            1,
            1,
            -1,
            1
        ]));
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).bindBuffer((0, _glJs.gl).ARRAY_BUFFER, this.vertices.buffer);
        (0, _glJs.gl).enableVertexAttribArray(0);
        (0, _glJs.gl).vertexAttribPointer(0, 2, (0, _glJs.gl).FLOAT, false, 8, 0);
        (0, _glJs.gl).bindVertexArray(null);
    }
    draw() {
        (0, _glJs.gl).bindVertexArray(this.vao);
        (0, _glJs.gl).drawArrays((0, _glJs.gl).TRIANGLE_FAN, 0, 4);
    }
}

},{"./webgl/gl.js":"0jUvh","./webgl/buffer.js":"aWeEG","@parcel/transformer-js/src/esmodule-helpers.js":"hB1uZ"}]},["fVLxF","lJaCx"], "lJaCx", "parcelRequire94c2")

//# sourceMappingURL=index.67c7c848.js.map
