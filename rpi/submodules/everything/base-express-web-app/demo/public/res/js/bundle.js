(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/@jrc03c/vue-component-with-css/src/index.mjs
  function createVueComponentWithCSS(component) {
    let count = 0;
    let styleElement;
    component = component || {};
    const data = component.data ? component.data : function() {
    };
    const mounted = component.mounted ? component.mounted : function() {
    };
    const unmounted = component.unmounted ? component.unmounted : function() {
    };
    if (!data.css) data.css = "";
    component.data = function() {
      return data.bind(this)();
    };
    component.mounted = function() {
      mounted.bind(this)();
      count++;
      let root = this.$root.$el.getRootNode();
      if (root === document) {
        root = root.body;
      }
      if (!styleElement) {
        styleElement = document.createElement("style");
        root.appendChild(styleElement);
        styleElement.innerHTML = this.css;
      }
    };
    component.unmounted = function() {
      unmounted.bind(this)();
      count--;
      let root = this.$root.$el.getRootNode();
      if (root === document) {
        root = root.body;
      }
      if (count < 1) {
        if (styleElement) {
          try {
            root.removeChild(styleElement);
          } catch (e) {
            try {
              styleElement.parentElement.removeChild(styleElement);
            } catch (e2) {
            }
          }
        }
        styleElement = null;
      }
    };
    return component;
  }

  // demo/public/res/js/src/views/app.mjs
  var css = (
    /* css */
    ``
  );
  var template = (
    /* html */
    `
  <section class="section x-app-view">
    <div class="container">
      <router-view></router-view>
    </div>
  </section>
`
  );
  var AppView = createVueComponentWithCSS({
    name: "x-app-view",
    template,
    data() {
      return {
        css
      };
    }
  });

  // node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
  var runtime_dom_esm_bundler_exports = {};
  __export(runtime_dom_esm_bundler_exports, {
    BaseTransition: () => BaseTransition,
    BaseTransitionPropsValidators: () => BaseTransitionPropsValidators,
    Comment: () => Comment,
    DeprecationTypes: () => DeprecationTypes,
    EffectScope: () => EffectScope,
    ErrorCodes: () => ErrorCodes,
    ErrorTypeStrings: () => ErrorTypeStrings,
    Fragment: () => Fragment,
    KeepAlive: () => KeepAlive,
    ReactiveEffect: () => ReactiveEffect,
    Static: () => Static,
    Suspense: () => Suspense,
    Teleport: () => Teleport,
    Text: () => Text,
    TrackOpTypes: () => TrackOpTypes,
    Transition: () => Transition,
    TransitionGroup: () => TransitionGroup,
    TriggerOpTypes: () => TriggerOpTypes,
    VueElement: () => VueElement,
    assertNumber: () => assertNumber,
    callWithAsyncErrorHandling: () => callWithAsyncErrorHandling,
    callWithErrorHandling: () => callWithErrorHandling,
    camelize: () => camelize,
    capitalize: () => capitalize,
    cloneVNode: () => cloneVNode,
    compatUtils: () => compatUtils,
    computed: () => computed2,
    createApp: () => createApp,
    createBlock: () => createBlock,
    createCommentVNode: () => createCommentVNode,
    createElementBlock: () => createElementBlock,
    createElementVNode: () => createBaseVNode,
    createHydrationRenderer: () => createHydrationRenderer,
    createPropsRestProxy: () => createPropsRestProxy,
    createRenderer: () => createRenderer,
    createSSRApp: () => createSSRApp,
    createSlots: () => createSlots,
    createStaticVNode: () => createStaticVNode,
    createTextVNode: () => createTextVNode,
    createVNode: () => createVNode,
    customRef: () => customRef,
    defineAsyncComponent: () => defineAsyncComponent,
    defineComponent: () => defineComponent,
    defineCustomElement: () => defineCustomElement,
    defineEmits: () => defineEmits,
    defineExpose: () => defineExpose,
    defineModel: () => defineModel,
    defineOptions: () => defineOptions,
    defineProps: () => defineProps,
    defineSSRCustomElement: () => defineSSRCustomElement,
    defineSlots: () => defineSlots,
    devtools: () => devtools,
    effect: () => effect,
    effectScope: () => effectScope,
    getCurrentInstance: () => getCurrentInstance,
    getCurrentScope: () => getCurrentScope,
    getCurrentWatcher: () => getCurrentWatcher,
    getTransitionRawChildren: () => getTransitionRawChildren,
    guardReactiveProps: () => guardReactiveProps,
    h: () => h,
    handleError: () => handleError,
    hasInjectionContext: () => hasInjectionContext,
    hydrate: () => hydrate,
    hydrateOnIdle: () => hydrateOnIdle,
    hydrateOnInteraction: () => hydrateOnInteraction,
    hydrateOnMediaQuery: () => hydrateOnMediaQuery,
    hydrateOnVisible: () => hydrateOnVisible,
    initCustomFormatter: () => initCustomFormatter,
    initDirectivesForSSR: () => initDirectivesForSSR,
    inject: () => inject,
    isMemoSame: () => isMemoSame,
    isProxy: () => isProxy,
    isReactive: () => isReactive,
    isReadonly: () => isReadonly,
    isRef: () => isRef2,
    isRuntimeOnly: () => isRuntimeOnly,
    isShallow: () => isShallow,
    isVNode: () => isVNode,
    markRaw: () => markRaw,
    mergeDefaults: () => mergeDefaults,
    mergeModels: () => mergeModels,
    mergeProps: () => mergeProps,
    nextTick: () => nextTick,
    normalizeClass: () => normalizeClass,
    normalizeProps: () => normalizeProps,
    normalizeStyle: () => normalizeStyle,
    onActivated: () => onActivated,
    onBeforeMount: () => onBeforeMount,
    onBeforeUnmount: () => onBeforeUnmount,
    onBeforeUpdate: () => onBeforeUpdate,
    onDeactivated: () => onDeactivated,
    onErrorCaptured: () => onErrorCaptured,
    onMounted: () => onMounted,
    onRenderTracked: () => onRenderTracked,
    onRenderTriggered: () => onRenderTriggered,
    onScopeDispose: () => onScopeDispose,
    onServerPrefetch: () => onServerPrefetch,
    onUnmounted: () => onUnmounted,
    onUpdated: () => onUpdated,
    onWatcherCleanup: () => onWatcherCleanup,
    openBlock: () => openBlock,
    popScopeId: () => popScopeId,
    provide: () => provide,
    proxyRefs: () => proxyRefs,
    pushScopeId: () => pushScopeId,
    queuePostFlushCb: () => queuePostFlushCb,
    reactive: () => reactive,
    readonly: () => readonly,
    ref: () => ref,
    registerRuntimeCompiler: () => registerRuntimeCompiler,
    render: () => render,
    renderList: () => renderList,
    renderSlot: () => renderSlot,
    resolveComponent: () => resolveComponent,
    resolveDirective: () => resolveDirective,
    resolveDynamicComponent: () => resolveDynamicComponent,
    resolveFilter: () => resolveFilter,
    resolveTransitionHooks: () => resolveTransitionHooks,
    setBlockTracking: () => setBlockTracking,
    setDevtoolsHook: () => setDevtoolsHook,
    setTransitionHooks: () => setTransitionHooks,
    shallowReactive: () => shallowReactive,
    shallowReadonly: () => shallowReadonly,
    shallowRef: () => shallowRef,
    ssrContextKey: () => ssrContextKey,
    ssrUtils: () => ssrUtils,
    stop: () => stop,
    toDisplayString: () => toDisplayString,
    toHandlerKey: () => toHandlerKey,
    toHandlers: () => toHandlers,
    toRaw: () => toRaw,
    toRef: () => toRef,
    toRefs: () => toRefs,
    toValue: () => toValue,
    transformVNodeArgs: () => transformVNodeArgs,
    triggerRef: () => triggerRef,
    unref: () => unref,
    useAttrs: () => useAttrs,
    useCssModule: () => useCssModule,
    useCssVars: () => useCssVars,
    useHost: () => useHost,
    useId: () => useId,
    useModel: () => useModel,
    useSSRContext: () => useSSRContext,
    useShadowRoot: () => useShadowRoot,
    useSlots: () => useSlots,
    useTemplateRef: () => useTemplateRef,
    useTransitionState: () => useTransitionState,
    vModelCheckbox: () => vModelCheckbox,
    vModelDynamic: () => vModelDynamic,
    vModelRadio: () => vModelRadio,
    vModelSelect: () => vModelSelect,
    vModelText: () => vModelText,
    vShow: () => vShow,
    version: () => version,
    warn: () => warn2,
    watch: () => watch2,
    watchEffect: () => watchEffect,
    watchPostEffect: () => watchPostEffect,
    watchSyncEffect: () => watchSyncEffect,
    withAsyncContext: () => withAsyncContext,
    withCtx: () => withCtx,
    withDefaults: () => withDefaults,
    withDirectives: () => withDirectives,
    withKeys: () => withKeys,
    withMemo: () => withMemo,
    withModifiers: () => withModifiers,
    withScopeId: () => withScopeId
  });

  // node_modules/@vue/shared/dist/shared.esm-bundler.js
  // @__NO_SIDE_EFFECTS__
  function makeMap(str) {
    const map2 = /* @__PURE__ */ Object.create(null);
    for (const key of str.split(",")) map2[key] = 1;
    return (val) => val in map2;
  }
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var NOOP = () => {
  };
  var NO = () => false;
  var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
  (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
  var isModelListener = (key) => key.startsWith("onUpdate:");
  var extend = Object.assign;
  var remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isSet = (val) => toTypeString(val) === "[object Set]";
  var isDate = (val) => toTypeString(val) === "[object Date]";
  var isRegExp = (val) => toTypeString(val) === "[object RegExp]";
  var isFunction = (val) => typeof val === "function";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var isPromise = (val) => {
    return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
  };
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isPlainObject = (val) => toTypeString(val) === "[object Object]";
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var isReservedProp = /* @__PURE__ */ makeMap(
    // the leading comma is intentional so empty string "" is also included
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  );
  var isBuiltInDirective = /* @__PURE__ */ makeMap(
    "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
  );
  var cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction(
    (str) => {
      return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
    }
  );
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction(
    (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
  );
  var capitalize = cacheStringFunction((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  var toHandlerKey = cacheStringFunction(
    (str) => {
      const s = str ? `on${capitalize(str)}` : ``;
      return s;
    }
  );
  var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
  var invokeArrayFns = (fns, ...arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](...arg);
    }
  };
  var def = (obj, key, value, writable = false) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      writable,
      value
    });
  };
  var looseToNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };
  var toNumber = (val) => {
    const n = isString(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
  };
  var _globalThis;
  var getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  function genCacheKey(source, options) {
    return source + JSON.stringify(
      options,
      (_, val) => typeof val === "function" ? val.toString() : val
    );
  }
  var PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `NEED_HYDRATION`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `CACHED`,
    [-2]: `BAIL`
  };
  var slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
  };
  var GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
  var isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
  var range = 2;
  function generateCodeFrame(source, start = 0, end = source.length) {
    start = Math.max(0, Math.min(start, source.length));
    end = Math.max(0, Math.min(end, source.length));
    if (start > end) return "";
    let lines = source.split(/(\r?\n)/);
    const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
    lines = lines.filter((_, idx) => idx % 2 === 0);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
      if (count >= start) {
        for (let j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) continue;
          const line = j + 1;
          res.push(
            `${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`
          );
          const lineLength = lines[j].length;
          const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
          if (j === i) {
            const pad = start - (count - (lineLength + newLineSeqLength));
            const length = Math.max(
              1,
              end > count ? lineLength - pad : end - start
            );
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + newLineSeqLength;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isString(value) || isObject(value)) {
      return value;
    }
  }
  var listDelimiterRE = /;(?![^(]*\))/g;
  var propertyDelimiterRE = /:([^]+)/;
  var styleCommentRE = /\/\*[^]*?\*\//g;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function stringifyStyle(styles) {
    if (!styles) return "";
    if (isString(styles)) return styles;
    let ret = "";
    for (const key in styles) {
      const value = styles[key];
      if (isString(value) || typeof value === "number") {
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        ret += `${normalizedKey}:${value};`;
      }
    }
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  function normalizeProps(props) {
    if (!props) return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (style) {
      props.style = normalizeStyle(style);
    }
    return props;
  }
  var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
  var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
  var MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
  var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
  var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
  var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
  var isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
  var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
  var isBooleanAttr = /* @__PURE__ */ makeMap(
    specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
  );
  function includeBooleanAttr(value) {
    return !!value || value === "";
  }
  var isKnownHtmlAttr = /* @__PURE__ */ makeMap(
    `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
  );
  var isKnownSvgAttr = /* @__PURE__ */ makeMap(
    `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
  );
  function isRenderableAttrValue(value) {
    if (value == null) {
      return false;
    }
    const type = typeof value;
    return type === "string" || type === "number" || type === "boolean";
  }
  var cssVarNameEscapeSymbolsRE = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
  function getEscapedCssVarName(key, doubleEscape) {
    return key.replace(
      cssVarNameEscapeSymbolsRE,
      (s) => doubleEscape ? s === '"' ? '\\\\\\"' : `\\\\${s}` : `\\${s}`
    );
  }
  function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
      equal = looseEqual(a[i], b[i]);
    }
    return equal;
  }
  function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) {
      return a === b;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }
      const aKeysCount = Object.keys(a).length;
      const bKeysCount = Object.keys(b).length;
      if (aKeysCount !== bKeysCount) {
        return false;
      }
      for (const key in a) {
        const aHasKey = a.hasOwnProperty(key);
        const bHasKey = b.hasOwnProperty(key);
        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
          return false;
        }
      }
    }
    return String(a) === String(b);
  }
  function looseIndexOf(arr, val) {
    return arr.findIndex((item) => looseEqual(item, val));
  }
  var isRef = (val) => {
    return !!(val && val["__v_isRef"] === true);
  };
  var toDisplayString = (val) => {
    return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
  };
  var replacer = (_key, val) => {
    if (isRef(val)) {
      return replacer(_key, val.value);
    } else if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce(
          (entries, [key, val2], i) => {
            entries[stringifySymbol(key, i) + " =>"] = val2;
            return entries;
          },
          {}
        )
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
      };
    } else if (isSymbol(val)) {
      return stringifySymbol(val);
    } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
      return String(val);
    }
    return val;
  };
  var stringifySymbol = (v, i = "") => {
    var _a;
    return (
      // Symbol.description in es2019+ so we need to cast here to pass
      // the lib: es2016 check
      isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
    );
  };

  // node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
  function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
  }
  var activeEffectScope;
  var EffectScope = class {
    constructor(detached = false) {
      this.detached = detached;
      this._active = true;
      this._on = 0;
      this.effects = [];
      this.cleanups = [];
      this._isPaused = false;
      this.parent = activeEffectScope;
      if (!detached && activeEffectScope) {
        this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
          this
        ) - 1;
      }
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let i, l;
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].pause();
          }
        }
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].pause();
        }
      }
    }
    /**
     * Resumes the effect scope, including all child scopes and effects.
     */
    resume() {
      if (this._active) {
        if (this._isPaused) {
          this._isPaused = false;
          let i, l;
          if (this.scopes) {
            for (i = 0, l = this.scopes.length; i < l; i++) {
              this.scopes[i].resume();
            }
          }
          for (i = 0, l = this.effects.length; i < l; i++) {
            this.effects[i].resume();
          }
        }
      }
    }
    run(fn) {
      if (this._active) {
        const currentEffectScope = activeEffectScope;
        try {
          activeEffectScope = this;
          return fn();
        } finally {
          activeEffectScope = currentEffectScope;
        }
      } else if (true) {
        warn(`cannot run an inactive effect scope.`);
      }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    on() {
      if (++this._on === 1) {
        this.prevScope = activeEffectScope;
        activeEffectScope = this;
      }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    off() {
      if (this._on > 0 && --this._on === 0) {
        activeEffectScope = this.prevScope;
        this.prevScope = void 0;
      }
    }
    stop(fromParent) {
      if (this._active) {
        this._active = false;
        let i, l;
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].stop();
        }
        this.effects.length = 0;
        for (i = 0, l = this.cleanups.length; i < l; i++) {
          this.cleanups[i]();
        }
        this.cleanups.length = 0;
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].stop(true);
          }
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !fromParent) {
          const last = this.parent.scopes.pop();
          if (last && last !== this) {
            this.parent.scopes[this.index] = last;
            last.index = this.index;
          }
        }
        this.parent = void 0;
      }
    }
  };
  function effectScope(detached) {
    return new EffectScope(detached);
  }
  function getCurrentScope() {
    return activeEffectScope;
  }
  function onScopeDispose(fn, failSilently = false) {
    if (activeEffectScope) {
      activeEffectScope.cleanups.push(fn);
    } else if (!failSilently) {
      warn(
        `onScopeDispose() is called when there is no active effect scope to be associated with.`
      );
    }
  }
  var activeSub;
  var pausedQueueEffects = /* @__PURE__ */ new WeakSet();
  var ReactiveEffect = class {
    constructor(fn) {
      this.fn = fn;
      this.deps = void 0;
      this.depsTail = void 0;
      this.flags = 1 | 4;
      this.next = void 0;
      this.cleanup = void 0;
      this.scheduler = void 0;
      if (activeEffectScope && activeEffectScope.active) {
        activeEffectScope.effects.push(this);
      }
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      if (this.flags & 64) {
        this.flags &= -65;
        if (pausedQueueEffects.has(this)) {
          pausedQueueEffects.delete(this);
          this.trigger();
        }
      }
    }
    /**
     * @internal
     */
    notify() {
      if (this.flags & 2 && !(this.flags & 32)) {
        return;
      }
      if (!(this.flags & 8)) {
        batch(this);
      }
    }
    run() {
      if (!(this.flags & 1)) {
        return this.fn();
      }
      this.flags |= 2;
      cleanupEffect(this);
      prepareDeps(this);
      const prevEffect = activeSub;
      const prevShouldTrack = shouldTrack;
      activeSub = this;
      shouldTrack = true;
      try {
        return this.fn();
      } finally {
        if (activeSub !== this) {
          warn(
            "Active effect was not restored correctly - this is likely a Vue internal bug."
          );
        }
        cleanupDeps(this);
        activeSub = prevEffect;
        shouldTrack = prevShouldTrack;
        this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let link = this.deps; link; link = link.nextDep) {
          removeSub(link);
        }
        this.deps = this.depsTail = void 0;
        cleanupEffect(this);
        this.onStop && this.onStop();
        this.flags &= -2;
      }
    }
    trigger() {
      if (this.flags & 64) {
        pausedQueueEffects.add(this);
      } else if (this.scheduler) {
        this.scheduler();
      } else {
        this.runIfDirty();
      }
    }
    /**
     * @internal
     */
    runIfDirty() {
      if (isDirty(this)) {
        this.run();
      }
    }
    get dirty() {
      return isDirty(this);
    }
  };
  var batchDepth = 0;
  var batchedSub;
  var batchedComputed;
  function batch(sub, isComputed = false) {
    sub.flags |= 8;
    if (isComputed) {
      sub.next = batchedComputed;
      batchedComputed = sub;
      return;
    }
    sub.next = batchedSub;
    batchedSub = sub;
  }
  function startBatch() {
    batchDepth++;
  }
  function endBatch() {
    if (--batchDepth > 0) {
      return;
    }
    if (batchedComputed) {
      let e = batchedComputed;
      batchedComputed = void 0;
      while (e) {
        const next = e.next;
        e.next = void 0;
        e.flags &= -9;
        e = next;
      }
    }
    let error;
    while (batchedSub) {
      let e = batchedSub;
      batchedSub = void 0;
      while (e) {
        const next = e.next;
        e.next = void 0;
        e.flags &= -9;
        if (e.flags & 1) {
          try {
            ;
            e.trigger();
          } catch (err) {
            if (!error) error = err;
          }
        }
        e = next;
      }
    }
    if (error) throw error;
  }
  function prepareDeps(sub) {
    for (let link = sub.deps; link; link = link.nextDep) {
      link.version = -1;
      link.prevActiveLink = link.dep.activeLink;
      link.dep.activeLink = link;
    }
  }
  function cleanupDeps(sub) {
    let head;
    let tail = sub.depsTail;
    let link = tail;
    while (link) {
      const prev = link.prevDep;
      if (link.version === -1) {
        if (link === tail) tail = prev;
        removeSub(link);
        removeDep(link);
      } else {
        head = link;
      }
      link.dep.activeLink = link.prevActiveLink;
      link.prevActiveLink = void 0;
      link = prev;
    }
    sub.deps = head;
    sub.depsTail = tail;
  }
  function isDirty(sub) {
    for (let link = sub.deps; link; link = link.nextDep) {
      if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
        return true;
      }
    }
    if (sub._dirty) {
      return true;
    }
    return false;
  }
  function refreshComputed(computed3) {
    if (computed3.flags & 4 && !(computed3.flags & 16)) {
      return;
    }
    computed3.flags &= -17;
    if (computed3.globalVersion === globalVersion) {
      return;
    }
    computed3.globalVersion = globalVersion;
    if (!computed3.isSSR && computed3.flags & 128 && (!computed3.deps && !computed3._dirty || !isDirty(computed3))) {
      return;
    }
    computed3.flags |= 2;
    const dep = computed3.dep;
    const prevSub = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = computed3;
    shouldTrack = true;
    try {
      prepareDeps(computed3);
      const value = computed3.fn(computed3._value);
      if (dep.version === 0 || hasChanged(value, computed3._value)) {
        computed3.flags |= 128;
        computed3._value = value;
        dep.version++;
      }
    } catch (err) {
      dep.version++;
      throw err;
    } finally {
      activeSub = prevSub;
      shouldTrack = prevShouldTrack;
      cleanupDeps(computed3);
      computed3.flags &= -3;
    }
  }
  function removeSub(link, soft = false) {
    const { dep, prevSub, nextSub } = link;
    if (prevSub) {
      prevSub.nextSub = nextSub;
      link.prevSub = void 0;
    }
    if (nextSub) {
      nextSub.prevSub = prevSub;
      link.nextSub = void 0;
    }
    if (dep.subsHead === link) {
      dep.subsHead = nextSub;
    }
    if (dep.subs === link) {
      dep.subs = prevSub;
      if (!prevSub && dep.computed) {
        dep.computed.flags &= -5;
        for (let l = dep.computed.deps; l; l = l.nextDep) {
          removeSub(l, true);
        }
      }
    }
    if (!soft && !--dep.sc && dep.map) {
      dep.map.delete(dep.key);
    }
  }
  function removeDep(link) {
    const { prevDep, nextDep } = link;
    if (prevDep) {
      prevDep.nextDep = nextDep;
      link.prevDep = void 0;
    }
    if (nextDep) {
      nextDep.prevDep = prevDep;
      link.nextDep = void 0;
    }
  }
  function effect(fn, options) {
    if (fn.effect instanceof ReactiveEffect) {
      fn = fn.effect.fn;
    }
    const e = new ReactiveEffect(fn);
    if (options) {
      extend(e, options);
    }
    try {
      e.run();
    } catch (err) {
      e.stop();
      throw err;
    }
    const runner = e.run.bind(e);
    runner.effect = e;
    return runner;
  }
  function stop(runner) {
    runner.effect.stop();
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function cleanupEffect(e) {
    const { cleanup } = e;
    e.cleanup = void 0;
    if (cleanup) {
      const prevSub = activeSub;
      activeSub = void 0;
      try {
        cleanup();
      } finally {
        activeSub = prevSub;
      }
    }
  }
  var globalVersion = 0;
  var Link = class {
    constructor(sub, dep) {
      this.sub = sub;
      this.dep = dep;
      this.version = dep.version;
      this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  };
  var Dep = class {
    // TODO isolatedDeclarations "__v_skip"
    constructor(computed3) {
      this.computed = computed3;
      this.version = 0;
      this.activeLink = void 0;
      this.subs = void 0;
      this.map = void 0;
      this.key = void 0;
      this.sc = 0;
      this.__v_skip = true;
      if (true) {
        this.subsHead = void 0;
      }
    }
    track(debugInfo) {
      if (!activeSub || !shouldTrack || activeSub === this.computed) {
        return;
      }
      let link = this.activeLink;
      if (link === void 0 || link.sub !== activeSub) {
        link = this.activeLink = new Link(activeSub, this);
        if (!activeSub.deps) {
          activeSub.deps = activeSub.depsTail = link;
        } else {
          link.prevDep = activeSub.depsTail;
          activeSub.depsTail.nextDep = link;
          activeSub.depsTail = link;
        }
        addSub(link);
      } else if (link.version === -1) {
        link.version = this.version;
        if (link.nextDep) {
          const next = link.nextDep;
          next.prevDep = link.prevDep;
          if (link.prevDep) {
            link.prevDep.nextDep = next;
          }
          link.prevDep = activeSub.depsTail;
          link.nextDep = void 0;
          activeSub.depsTail.nextDep = link;
          activeSub.depsTail = link;
          if (activeSub.deps === link) {
            activeSub.deps = next;
          }
        }
      }
      if (activeSub.onTrack) {
        activeSub.onTrack(
          extend(
            {
              effect: activeSub
            },
            debugInfo
          )
        );
      }
      return link;
    }
    trigger(debugInfo) {
      this.version++;
      globalVersion++;
      this.notify(debugInfo);
    }
    notify(debugInfo) {
      startBatch();
      try {
        if (true) {
          for (let head = this.subsHead; head; head = head.nextSub) {
            if (head.sub.onTrigger && !(head.sub.flags & 8)) {
              head.sub.onTrigger(
                extend(
                  {
                    effect: head.sub
                  },
                  debugInfo
                )
              );
            }
          }
        }
        for (let link = this.subs; link; link = link.prevSub) {
          if (link.sub.notify()) {
            ;
            link.sub.dep.notify();
          }
        }
      } finally {
        endBatch();
      }
    }
  };
  function addSub(link) {
    link.dep.sc++;
    if (link.sub.flags & 4) {
      const computed3 = link.dep.computed;
      if (computed3 && !link.dep.subs) {
        computed3.flags |= 4 | 16;
        for (let l = computed3.deps; l; l = l.nextDep) {
          addSub(l);
        }
      }
      const currentTail = link.dep.subs;
      if (currentTail !== link) {
        link.prevSub = currentTail;
        if (currentTail) currentTail.nextSub = link;
      }
      if (link.dep.subsHead === void 0) {
        link.dep.subsHead = link;
      }
      link.dep.subs = link;
    }
  }
  var targetMap = /* @__PURE__ */ new WeakMap();
  var ITERATE_KEY = Symbol(
    true ? "Object iterate" : ""
  );
  var MAP_KEY_ITERATE_KEY = Symbol(
    true ? "Map keys iterate" : ""
  );
  var ARRAY_ITERATE_KEY = Symbol(
    true ? "Array iterate" : ""
  );
  function track(target, type, key) {
    if (shouldTrack && activeSub) {
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
      }
      let dep = depsMap.get(key);
      if (!dep) {
        depsMap.set(key, dep = new Dep());
        dep.map = depsMap;
        dep.key = key;
      }
      if (true) {
        dep.track({
          target,
          type,
          key
        });
      } else {
        dep.track();
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      globalVersion++;
      return;
    }
    const run = (dep) => {
      if (dep) {
        if (true) {
          dep.trigger({
            target,
            type,
            key,
            newValue,
            oldValue,
            oldTarget
          });
        } else {
          dep.trigger();
        }
      }
    };
    startBatch();
    if (type === "clear") {
      depsMap.forEach(run);
    } else {
      const targetIsArray = isArray(target);
      const isArrayIndex = targetIsArray && isIntegerKey(key);
      if (targetIsArray && key === "length") {
        const newLength = Number(newValue);
        depsMap.forEach((dep, key2) => {
          if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) {
            run(dep);
          }
        });
      } else {
        if (key !== void 0 || depsMap.has(void 0)) {
          run(depsMap.get(key));
        }
        if (isArrayIndex) {
          run(depsMap.get(ARRAY_ITERATE_KEY));
        }
        switch (type) {
          case "add":
            if (!targetIsArray) {
              run(depsMap.get(ITERATE_KEY));
              if (isMap(target)) {
                run(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            } else if (isArrayIndex) {
              run(depsMap.get("length"));
            }
            break;
          case "delete":
            if (!targetIsArray) {
              run(depsMap.get(ITERATE_KEY));
              if (isMap(target)) {
                run(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            }
            break;
          case "set":
            if (isMap(target)) {
              run(depsMap.get(ITERATE_KEY));
            }
            break;
        }
      }
    }
    endBatch();
  }
  function getDepFromReactive(object, key) {
    const depMap = targetMap.get(object);
    return depMap && depMap.get(key);
  }
  function reactiveReadArray(array) {
    const raw = toRaw(array);
    if (raw === array) return raw;
    track(raw, "iterate", ARRAY_ITERATE_KEY);
    return isShallow(array) ? raw : raw.map(toReactive);
  }
  function shallowReadArray(arr) {
    track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
    return arr;
  }
  var arrayInstrumentations = {
    __proto__: null,
    [Symbol.iterator]() {
      return iterator(this, Symbol.iterator, toReactive);
    },
    concat(...args) {
      return reactiveReadArray(this).concat(
        ...args.map((x) => isArray(x) ? reactiveReadArray(x) : x)
      );
    },
    entries() {
      return iterator(this, "entries", (value) => {
        value[1] = toReactive(value[1]);
        return value;
      });
    },
    every(fn, thisArg) {
      return apply(this, "every", fn, thisArg, void 0, arguments);
    },
    filter(fn, thisArg) {
      return apply(this, "filter", fn, thisArg, (v) => v.map(toReactive), arguments);
    },
    find(fn, thisArg) {
      return apply(this, "find", fn, thisArg, toReactive, arguments);
    },
    findIndex(fn, thisArg) {
      return apply(this, "findIndex", fn, thisArg, void 0, arguments);
    },
    findLast(fn, thisArg) {
      return apply(this, "findLast", fn, thisArg, toReactive, arguments);
    },
    findLastIndex(fn, thisArg) {
      return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
    },
    // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
    forEach(fn, thisArg) {
      return apply(this, "forEach", fn, thisArg, void 0, arguments);
    },
    includes(...args) {
      return searchProxy(this, "includes", args);
    },
    indexOf(...args) {
      return searchProxy(this, "indexOf", args);
    },
    join(separator) {
      return reactiveReadArray(this).join(separator);
    },
    // keys() iterator only reads `length`, no optimisation required
    lastIndexOf(...args) {
      return searchProxy(this, "lastIndexOf", args);
    },
    map(fn, thisArg) {
      return apply(this, "map", fn, thisArg, void 0, arguments);
    },
    pop() {
      return noTracking(this, "pop");
    },
    push(...args) {
      return noTracking(this, "push", args);
    },
    reduce(fn, ...args) {
      return reduce(this, "reduce", fn, args);
    },
    reduceRight(fn, ...args) {
      return reduce(this, "reduceRight", fn, args);
    },
    shift() {
      return noTracking(this, "shift");
    },
    // slice could use ARRAY_ITERATE but also seems to beg for range tracking
    some(fn, thisArg) {
      return apply(this, "some", fn, thisArg, void 0, arguments);
    },
    splice(...args) {
      return noTracking(this, "splice", args);
    },
    toReversed() {
      return reactiveReadArray(this).toReversed();
    },
    toSorted(comparer) {
      return reactiveReadArray(this).toSorted(comparer);
    },
    toSpliced(...args) {
      return reactiveReadArray(this).toSpliced(...args);
    },
    unshift(...args) {
      return noTracking(this, "unshift", args);
    },
    values() {
      return iterator(this, "values", toReactive);
    }
  };
  function iterator(self2, method, wrapValue) {
    const arr = shallowReadArray(self2);
    const iter = arr[method]();
    if (arr !== self2 && !isShallow(self2)) {
      iter._next = iter.next;
      iter.next = () => {
        const result = iter._next();
        if (result.value) {
          result.value = wrapValue(result.value);
        }
        return result;
      };
    }
    return iter;
  }
  var arrayProto = Array.prototype;
  function apply(self2, method, fn, thisArg, wrappedRetFn, args) {
    const arr = shallowReadArray(self2);
    const needsWrap = arr !== self2 && !isShallow(self2);
    const methodFn = arr[method];
    if (methodFn !== arrayProto[method]) {
      const result2 = methodFn.apply(self2, args);
      return needsWrap ? toReactive(result2) : result2;
    }
    let wrappedFn = fn;
    if (arr !== self2) {
      if (needsWrap) {
        wrappedFn = function(item, index) {
          return fn.call(this, toReactive(item), index, self2);
        };
      } else if (fn.length > 2) {
        wrappedFn = function(item, index) {
          return fn.call(this, item, index, self2);
        };
      }
    }
    const result = methodFn.call(arr, wrappedFn, thisArg);
    return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
  }
  function reduce(self2, method, fn, args) {
    const arr = shallowReadArray(self2);
    let wrappedFn = fn;
    if (arr !== self2) {
      if (!isShallow(self2)) {
        wrappedFn = function(acc, item, index) {
          return fn.call(this, acc, toReactive(item), index, self2);
        };
      } else if (fn.length > 3) {
        wrappedFn = function(acc, item, index) {
          return fn.call(this, acc, item, index, self2);
        };
      }
    }
    return arr[method](wrappedFn, ...args);
  }
  function searchProxy(self2, method, args) {
    const arr = toRaw(self2);
    track(arr, "iterate", ARRAY_ITERATE_KEY);
    const res = arr[method](...args);
    if ((res === -1 || res === false) && isProxy(args[0])) {
      args[0] = toRaw(args[0]);
      return arr[method](...args);
    }
    return res;
  }
  function noTracking(self2, method, args = []) {
    pauseTracking();
    startBatch();
    const res = toRaw(self2)[method].apply(self2, args);
    endBatch();
    resetTracking();
    return res;
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
  );
  function hasOwnProperty2(key) {
    if (!isSymbol(key)) key = String(key);
    const obj = toRaw(this);
    track(obj, "has", key);
    return obj.hasOwnProperty(key);
  }
  var BaseReactiveHandler = class {
    constructor(_isReadonly = false, _isShallow = false) {
      this._isReadonly = _isReadonly;
      this._isShallow = _isShallow;
    }
    get(target, key, receiver) {
      if (key === "__v_skip") return target["__v_skip"];
      const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_isShallow") {
        return isShallow2;
      } else if (key === "__v_raw") {
        if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
        // this means the receiver is a user proxy of the reactive proxy
        Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
          return target;
        }
        return;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly2) {
        let fn;
        if (targetIsArray && (fn = arrayInstrumentations[key])) {
          return fn;
        }
        if (key === "hasOwnProperty") {
          return hasOwnProperty2;
        }
      }
      const res = Reflect.get(
        target,
        key,
        // if this is a proxy wrapping a ref, return methods using the raw ref
        // as receiver so that we don't have to call `toRaw` on the ref in all
        // its class methods
        isRef2(target) ? target : receiver
      );
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly2) {
        track(target, "get", key);
      }
      if (isShallow2) {
        return res;
      }
      if (isRef2(res)) {
        return targetIsArray && isIntegerKey(key) ? res : res.value;
      }
      if (isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive(res);
      }
      return res;
    }
  };
  var MutableReactiveHandler = class extends BaseReactiveHandler {
    constructor(isShallow2 = false) {
      super(false, isShallow2);
    }
    set(target, key, value, receiver) {
      let oldValue = target[key];
      if (!this._isShallow) {
        const isOldValueReadonly = isReadonly(oldValue);
        if (!isShallow(value) && !isReadonly(value)) {
          oldValue = toRaw(oldValue);
          value = toRaw(value);
        }
        if (!isArray(target) && isRef2(oldValue) && !isRef2(value)) {
          if (isOldValueReadonly) {
            return false;
          } else {
            oldValue.value = value;
            return true;
          }
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(
        target,
        key,
        value,
        isRef2(target) ? target : receiver
      );
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    }
    deleteProperty(target, key) {
      const hadKey = hasOwn(target, key);
      const oldValue = target[key];
      const result = Reflect.deleteProperty(target, key);
      if (result && hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }
      return result;
    }
    has(target, key) {
      const result = Reflect.has(target, key);
      if (!isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, "has", key);
      }
      return result;
    }
    ownKeys(target) {
      track(
        target,
        "iterate",
        isArray(target) ? "length" : ITERATE_KEY
      );
      return Reflect.ownKeys(target);
    }
  };
  var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
    constructor(isShallow2 = false) {
      super(true, isShallow2);
    }
    set(target, key) {
      if (true) {
        warn(
          `Set operation on key "${String(key)}" failed: target is readonly.`,
          target
        );
      }
      return true;
    }
    deleteProperty(target, key) {
      if (true) {
        warn(
          `Delete operation on key "${String(key)}" failed: target is readonly.`,
          target
        );
      }
      return true;
    }
  };
  var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
  var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
  var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
  var shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function createIterableMethod(method, isReadonly2, isShallow2) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(
        rawTarget,
        "iterate",
        isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
      );
      return {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        warn(
          `${capitalize(type)} operation ${key}failed: target is readonly.`,
          toRaw(this)
        );
      }
      return type === "delete" ? false : type === "clear" ? void 0 : this;
    };
  }
  function createInstrumentations(readonly2, shallow) {
    const instrumentations = {
      get(key) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const rawKey = toRaw(key);
        if (!readonly2) {
          if (hasChanged(key, rawKey)) {
            track(rawTarget, "get", key);
          }
          track(rawTarget, "get", rawKey);
        }
        const { has } = getProto(rawTarget);
        const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
        if (has.call(rawTarget, key)) {
          return wrap(target.get(key));
        } else if (has.call(rawTarget, rawKey)) {
          return wrap(target.get(rawKey));
        } else if (target !== rawTarget) {
          target.get(key);
        }
      },
      get size() {
        const target = this["__v_raw"];
        !readonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
        return Reflect.get(target, "size", target);
      },
      has(key) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const rawKey = toRaw(key);
        if (!readonly2) {
          if (hasChanged(key, rawKey)) {
            track(rawTarget, "has", key);
          }
          track(rawTarget, "has", rawKey);
        }
        return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
      },
      forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw(target);
        const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
        !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key) => {
          return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
      }
    };
    extend(
      instrumentations,
      readonly2 ? {
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear")
      } : {
        add(value) {
          if (!shallow && !isShallow(value) && !isReadonly(value)) {
            value = toRaw(value);
          }
          const target = toRaw(this);
          const proto = getProto(target);
          const hadKey = proto.has.call(target, value);
          if (!hadKey) {
            target.add(value);
            trigger(target, "add", value, value);
          }
          return this;
        },
        set(key, value) {
          if (!shallow && !isShallow(value) && !isReadonly(value)) {
            value = toRaw(value);
          }
          const target = toRaw(this);
          const { has, get: get2 } = getProto(target);
          let hadKey = has.call(target, key);
          if (!hadKey) {
            key = toRaw(key);
            hadKey = has.call(target, key);
          } else if (true) {
            checkIdentityKeys(target, has, key);
          }
          const oldValue = get2.call(target, key);
          target.set(key, value);
          if (!hadKey) {
            trigger(target, "add", key, value);
          } else if (hasChanged(value, oldValue)) {
            trigger(target, "set", key, value, oldValue);
          }
          return this;
        },
        delete(key) {
          const target = toRaw(this);
          const { has, get: get2 } = getProto(target);
          let hadKey = has.call(target, key);
          if (!hadKey) {
            key = toRaw(key);
            hadKey = has.call(target, key);
          } else if (true) {
            checkIdentityKeys(target, has, key);
          }
          const oldValue = get2 ? get2.call(target, key) : void 0;
          const result = target.delete(key);
          if (hadKey) {
            trigger(target, "delete", key, void 0, oldValue);
          }
          return result;
        },
        clear() {
          const target = toRaw(this);
          const hadItems = target.size !== 0;
          const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
          const result = target.clear();
          if (hadItems) {
            trigger(
              target,
              "clear",
              void 0,
              void 0,
              oldTarget
            );
          }
          return result;
        }
      }
    );
    const iteratorMethods = [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ];
    iteratorMethods.forEach((method) => {
      instrumentations[method] = createIterableMethod(method, readonly2, shallow);
    });
    return instrumentations;
  }
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = createInstrumentations(isReadonly2, shallow);
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(
        hasOwn(instrumentations, key) && key in target ? instrumentations : target,
        key,
        receiver
      );
    };
  }
  var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  var shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
  };
  var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  var shallowReadonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, true)
  };
  function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
      const type = toRawType(target);
      warn(
        `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
      );
    }
  }
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive(target) {
    if (isReadonly(target)) {
      return target;
    }
    return createReactiveObject(
      target,
      false,
      mutableHandlers,
      mutableCollectionHandlers,
      reactiveMap
    );
  }
  function shallowReactive(target) {
    return createReactiveObject(
      target,
      false,
      shallowReactiveHandlers,
      shallowCollectionHandlers,
      shallowReactiveMap
    );
  }
  function readonly(target) {
    return createReactiveObject(
      target,
      true,
      readonlyHandlers,
      readonlyCollectionHandlers,
      readonlyMap
    );
  }
  function shallowReadonly(target) {
    return createReactiveObject(
      target,
      true,
      shallowReadonlyHandlers,
      shallowReadonlyCollectionHandlers,
      shallowReadonlyMap
    );
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (true) {
        warn(
          `value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(
            target
          )}`
        );
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
      return target;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const proxy = new Proxy(
      target,
      targetType === 2 ? collectionHandlers : baseHandlers
    );
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive(value) {
    if (isReadonly(value)) {
      return isReactive(value["__v_raw"]);
    }
    return !!(value && value["__v_isReactive"]);
  }
  function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
  }
  function isShallow(value) {
    return !!(value && value["__v_isShallow"]);
  }
  function isProxy(value) {
    return value ? !!value["__v_raw"] : false;
  }
  function toRaw(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? toRaw(raw) : observed;
  }
  function markRaw(value) {
    if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
      def(value, "__v_skip", true);
    }
    return value;
  }
  var toReactive = (value) => isObject(value) ? reactive(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  function isRef2(r) {
    return r ? r["__v_isRef"] === true : false;
  }
  function ref(value) {
    return createRef(value, false);
  }
  function shallowRef(value) {
    return createRef(value, true);
  }
  function createRef(rawValue, shallow) {
    if (isRef2(rawValue)) {
      return rawValue;
    }
    return new RefImpl(rawValue, shallow);
  }
  var RefImpl = class {
    constructor(value, isShallow2) {
      this.dep = new Dep();
      this["__v_isRef"] = true;
      this["__v_isShallow"] = false;
      this._rawValue = isShallow2 ? value : toRaw(value);
      this._value = isShallow2 ? value : toReactive(value);
      this["__v_isShallow"] = isShallow2;
    }
    get value() {
      if (true) {
        this.dep.track({
          target: this,
          type: "get",
          key: "value"
        });
      } else {
        this.dep.track();
      }
      return this._value;
    }
    set value(newValue) {
      const oldValue = this._rawValue;
      const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
      newValue = useDirectValue ? newValue : toRaw(newValue);
      if (hasChanged(newValue, oldValue)) {
        this._rawValue = newValue;
        this._value = useDirectValue ? newValue : toReactive(newValue);
        if (true) {
          this.dep.trigger({
            target: this,
            type: "set",
            key: "value",
            newValue,
            oldValue
          });
        } else {
          this.dep.trigger();
        }
      }
    }
  };
  function triggerRef(ref2) {
    if (ref2.dep) {
      if (true) {
        ref2.dep.trigger({
          target: ref2,
          type: "set",
          key: "value",
          newValue: ref2._value
        });
      } else {
        ref2.dep.trigger();
      }
    }
  }
  function unref(ref2) {
    return isRef2(ref2) ? ref2.value : ref2;
  }
  function toValue(source) {
    return isFunction(source) ? source() : unref(source);
  }
  var shallowUnwrapHandlers = {
    get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
      const oldValue = target[key];
      if (isRef2(oldValue) && !isRef2(value)) {
        oldValue.value = value;
        return true;
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    }
  };
  function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  var CustomRefImpl = class {
    constructor(factory) {
      this["__v_isRef"] = true;
      this._value = void 0;
      const dep = this.dep = new Dep();
      const { get: get2, set } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
      this._get = get2;
      this._set = set;
    }
    get value() {
      return this._value = this._get();
    }
    set value(newVal) {
      this._set(newVal);
    }
  };
  function customRef(factory) {
    return new CustomRefImpl(factory);
  }
  function toRefs(object) {
    if (!isProxy(object)) {
      warn(`toRefs() expects a reactive object but received a plain one.`);
    }
    const ret = isArray(object) ? new Array(object.length) : {};
    for (const key in object) {
      ret[key] = propertyToRef(object, key);
    }
    return ret;
  }
  var ObjectRefImpl = class {
    constructor(_object, _key, _defaultValue) {
      this._object = _object;
      this._key = _key;
      this._defaultValue = _defaultValue;
      this["__v_isRef"] = true;
      this._value = void 0;
    }
    get value() {
      const val = this._object[this._key];
      return this._value = val === void 0 ? this._defaultValue : val;
    }
    set value(newVal) {
      this._object[this._key] = newVal;
    }
    get dep() {
      return getDepFromReactive(toRaw(this._object), this._key);
    }
  };
  var GetterRefImpl = class {
    constructor(_getter) {
      this._getter = _getter;
      this["__v_isRef"] = true;
      this["__v_isReadonly"] = true;
      this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  };
  function toRef(source, key, defaultValue) {
    if (isRef2(source)) {
      return source;
    } else if (isFunction(source)) {
      return new GetterRefImpl(source);
    } else if (isObject(source) && arguments.length > 1) {
      return propertyToRef(source, key, defaultValue);
    } else {
      return ref(source);
    }
  }
  function propertyToRef(source, key, defaultValue) {
    const val = source[key];
    return isRef2(val) ? val : new ObjectRefImpl(source, key, defaultValue);
  }
  var ComputedRefImpl = class {
    constructor(fn, setter, isSSR) {
      this.fn = fn;
      this.setter = setter;
      this._value = void 0;
      this.dep = new Dep(this);
      this.__v_isRef = true;
      this.deps = void 0;
      this.depsTail = void 0;
      this.flags = 16;
      this.globalVersion = globalVersion - 1;
      this.next = void 0;
      this.effect = this;
      this["__v_isReadonly"] = !setter;
      this.isSSR = isSSR;
    }
    /**
     * @internal
     */
    notify() {
      this.flags |= 16;
      if (!(this.flags & 8) && // avoid infinite self recursion
      activeSub !== this) {
        batch(this, true);
        return true;
      } else if (true) ;
    }
    get value() {
      const link = true ? this.dep.track({
        target: this,
        type: "get",
        key: "value"
      }) : this.dep.track();
      refreshComputed(this);
      if (link) {
        link.version = this.dep.version;
      }
      return this._value;
    }
    set value(newValue) {
      if (this.setter) {
        this.setter(newValue);
      } else if (true) {
        warn("Write operation failed: computed value is readonly");
      }
    }
  };
  function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    if (isFunction(getterOrOptions)) {
      getter = getterOrOptions;
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, isSSR);
    if (debugOptions && !isSSR) {
      cRef.onTrack = debugOptions.onTrack;
      cRef.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
  }
  var TrackOpTypes = {
    "GET": "get",
    "HAS": "has",
    "ITERATE": "iterate"
  };
  var TriggerOpTypes = {
    "SET": "set",
    "ADD": "add",
    "DELETE": "delete",
    "CLEAR": "clear"
  };
  var INITIAL_WATCHER_VALUE = {};
  var cleanupMap = /* @__PURE__ */ new WeakMap();
  var activeWatcher = void 0;
  function getCurrentWatcher() {
    return activeWatcher;
  }
  function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
    if (owner) {
      let cleanups = cleanupMap.get(owner);
      if (!cleanups) cleanupMap.set(owner, cleanups = []);
      cleanups.push(cleanupFn);
    } else if (!failSilently) {
      warn(
        `onWatcherCleanup() was called when there was no active watcher to associate with.`
      );
    }
  }
  function watch(source, cb, options = EMPTY_OBJ) {
    const { immediate, deep, once, scheduler, augmentJob, call } = options;
    const warnInvalidSource = (s) => {
      (options.onWarn || warn)(
        `Invalid watch source: `,
        s,
        `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
      );
    };
    const reactiveGetter = (source2) => {
      if (deep) return source2;
      if (isShallow(source2) || deep === false || deep === 0)
        return traverse(source2, 1);
      return traverse(source2);
    };
    let effect2;
    let getter;
    let cleanup;
    let boundCleanup;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef2(source)) {
      getter = () => source.value;
      forceTrigger = isShallow(source);
    } else if (isReactive(source)) {
      getter = () => reactiveGetter(source);
      forceTrigger = true;
    } else if (isArray(source)) {
      isMultiSource = true;
      forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
      getter = () => source.map((s) => {
        if (isRef2(s)) {
          return s.value;
        } else if (isReactive(s)) {
          return reactiveGetter(s);
        } else if (isFunction(s)) {
          return call ? call(s, 2) : s();
        } else {
          warnInvalidSource(s);
        }
      });
    } else if (isFunction(source)) {
      if (cb) {
        getter = call ? () => call(source, 2) : source;
      } else {
        getter = () => {
          if (cleanup) {
            pauseTracking();
            try {
              cleanup();
            } finally {
              resetTracking();
            }
          }
          const currentEffect = activeWatcher;
          activeWatcher = effect2;
          try {
            return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
          } finally {
            activeWatcher = currentEffect;
          }
        };
      }
    } else {
      getter = NOOP;
      warnInvalidSource(source);
    }
    if (cb && deep) {
      const baseGetter = getter;
      const depth = deep === true ? Infinity : deep;
      getter = () => traverse(baseGetter(), depth);
    }
    const scope = getCurrentScope();
    const watchHandle = () => {
      effect2.stop();
      if (scope && scope.active) {
        remove(scope.effects, effect2);
      }
    };
    if (once && cb) {
      const _cb = cb;
      cb = (...args) => {
        _cb(...args);
        watchHandle();
      };
    }
    let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    const job = (immediateFirstRun) => {
      if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
        return;
      }
      if (cb) {
        const newValue = effect2.run();
        if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
          if (cleanup) {
            cleanup();
          }
          const currentWatcher = activeWatcher;
          activeWatcher = effect2;
          try {
            const args = [
              newValue,
              // pass undefined as the old value when it's changed for the first time
              oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
              boundCleanup
            ];
            oldValue = newValue;
            call ? call(cb, 3, args) : (
              // @ts-expect-error
              cb(...args)
            );
          } finally {
            activeWatcher = currentWatcher;
          }
        }
      } else {
        effect2.run();
      }
    };
    if (augmentJob) {
      augmentJob(job);
    }
    effect2 = new ReactiveEffect(getter);
    effect2.scheduler = scheduler ? () => scheduler(job, false) : job;
    boundCleanup = (fn) => onWatcherCleanup(fn, false, effect2);
    cleanup = effect2.onStop = () => {
      const cleanups = cleanupMap.get(effect2);
      if (cleanups) {
        if (call) {
          call(cleanups, 4);
        } else {
          for (const cleanup2 of cleanups) cleanup2();
        }
        cleanupMap.delete(effect2);
      }
    };
    if (true) {
      effect2.onTrack = options.onTrack;
      effect2.onTrigger = options.onTrigger;
    }
    if (cb) {
      if (immediate) {
        job(true);
      } else {
        oldValue = effect2.run();
      }
    } else if (scheduler) {
      scheduler(job.bind(null, true), true);
    } else {
      effect2.run();
    }
    watchHandle.pause = effect2.pause.bind(effect2);
    watchHandle.resume = effect2.resume.bind(effect2);
    watchHandle.stop = watchHandle;
    return watchHandle;
  }
  function traverse(value, depth = Infinity, seen2) {
    if (depth <= 0 || !isObject(value) || value["__v_skip"]) {
      return value;
    }
    seen2 = seen2 || /* @__PURE__ */ new Set();
    if (seen2.has(value)) {
      return value;
    }
    seen2.add(value);
    depth--;
    if (isRef2(value)) {
      traverse(value.value, depth, seen2);
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        traverse(value[i], depth, seen2);
      }
    } else if (isSet(value) || isMap(value)) {
      value.forEach((v) => {
        traverse(v, depth, seen2);
      });
    } else if (isPlainObject(value)) {
      for (const key in value) {
        traverse(value[key], depth, seen2);
      }
      for (const key of Object.getOwnPropertySymbols(value)) {
        if (Object.prototype.propertyIsEnumerable.call(value, key)) {
          traverse(value[key], depth, seen2);
        }
      }
    }
    return value;
  }

  // node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
  var stack = [];
  function pushWarningContext(vnode) {
    stack.push(vnode);
  }
  function popWarningContext() {
    stack.pop();
  }
  var isWarning = false;
  function warn$1(msg, ...args) {
    if (isWarning) return;
    isWarning = true;
    pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
      callWithErrorHandling(
        appWarnHandler,
        instance,
        11,
        [
          // eslint-disable-next-line no-restricted-syntax
          msg + args.map((a) => {
            var _a, _b;
            return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
          }).join(""),
          instance && instance.proxy,
          trace.map(
            ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
          ).join("\n"),
          trace
        ]
      );
    } else {
      const warnArgs = [`[Vue warn]: ${msg}`, ...args];
      if (trace.length && // avoid spamming console during tests
      true) {
        warnArgs.push(`
`, ...formatTrace(trace));
      }
      console.warn(...warnArgs);
    }
    resetTracking();
    isWarning = false;
  }
  function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
      return [];
    }
    const normalizedStack = [];
    while (currentVNode) {
      const last = normalizedStack[0];
      if (last && last.vnode === currentVNode) {
        last.recurseCount++;
      } else {
        normalizedStack.push({
          vnode: currentVNode,
          recurseCount: 0
        });
      }
      const parentInstance = currentVNode.component && currentVNode.component.parent;
      currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
  }
  function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i) => {
      logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
    });
    return logs;
  }
  function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(
      vnode.component,
      vnode.type,
      isRoot
    )}`;
    const close = `>` + postfix;
    return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
  }
  function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key) => {
      res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
      res.push(` ...`);
    }
    return res;
  }
  function formatProp(key, value, raw) {
    if (isString(value)) {
      value = JSON.stringify(value);
      return raw ? value : [`${key}=${value}`];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
      return raw ? value : [`${key}=${value}`];
    } else if (isRef2(value)) {
      value = formatProp(key, toRaw(value.value), true);
      return raw ? value : [`${key}=Ref<`, value, `>`];
    } else if (isFunction(value)) {
      return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    } else {
      value = toRaw(value);
      return raw ? value : [`${key}=`, value];
    }
  }
  function assertNumber(val, type) {
    if (false) return;
    if (val === void 0) {
      return;
    } else if (typeof val !== "number") {
      warn$1(`${type} is not a valid number - got ${JSON.stringify(val)}.`);
    } else if (isNaN(val)) {
      warn$1(`${type} is NaN - the duration expression might be incorrect.`);
    }
  }
  var ErrorCodes = {
    "SETUP_FUNCTION": 0,
    "0": "SETUP_FUNCTION",
    "RENDER_FUNCTION": 1,
    "1": "RENDER_FUNCTION",
    "NATIVE_EVENT_HANDLER": 5,
    "5": "NATIVE_EVENT_HANDLER",
    "COMPONENT_EVENT_HANDLER": 6,
    "6": "COMPONENT_EVENT_HANDLER",
    "VNODE_HOOK": 7,
    "7": "VNODE_HOOK",
    "DIRECTIVE_HOOK": 8,
    "8": "DIRECTIVE_HOOK",
    "TRANSITION_HOOK": 9,
    "9": "TRANSITION_HOOK",
    "APP_ERROR_HANDLER": 10,
    "10": "APP_ERROR_HANDLER",
    "APP_WARN_HANDLER": 11,
    "11": "APP_WARN_HANDLER",
    "FUNCTION_REF": 12,
    "12": "FUNCTION_REF",
    "ASYNC_COMPONENT_LOADER": 13,
    "13": "ASYNC_COMPONENT_LOADER",
    "SCHEDULER": 14,
    "14": "SCHEDULER",
    "COMPONENT_UPDATE": 15,
    "15": "COMPONENT_UPDATE",
    "APP_UNMOUNT_CLEANUP": 16,
    "16": "APP_UNMOUNT_CLEANUP"
  };
  var ErrorTypeStrings$1 = {
    ["sp"]: "serverPrefetch hook",
    ["bc"]: "beforeCreate hook",
    ["c"]: "created hook",
    ["bm"]: "beforeMount hook",
    ["m"]: "mounted hook",
    ["bu"]: "beforeUpdate hook",
    ["u"]: "updated",
    ["bum"]: "beforeUnmount hook",
    ["um"]: "unmounted hook",
    ["a"]: "activated hook",
    ["da"]: "deactivated hook",
    ["ec"]: "errorCaptured hook",
    ["rtc"]: "renderTracked hook",
    ["rtg"]: "renderTriggered hook",
    [0]: "setup function",
    [1]: "render function",
    [2]: "watcher getter",
    [3]: "watcher callback",
    [4]: "watcher cleanup function",
    [5]: "native event handler",
    [6]: "component event handler",
    [7]: "vnode hook",
    [8]: "directive hook",
    [9]: "transition hook",
    [10]: "app errorHandler",
    [11]: "app warnHandler",
    [12]: "ref function",
    [13]: "async component loader",
    [14]: "scheduler flush",
    [15]: "component update",
    [16]: "app unmount cleanup function"
  };
  function callWithErrorHandling(fn, instance, type, args) {
    try {
      return args ? fn(...args) : fn();
    } catch (err) {
      handleError(err, instance, type);
    }
  }
  function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction(fn)) {
      const res = callWithErrorHandling(fn, instance, type, args);
      if (res && isPromise(res)) {
        res.catch((err) => {
          handleError(err, instance, type);
        });
      }
      return res;
    }
    if (isArray(fn)) {
      const values = [];
      for (let i = 0; i < fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
      }
      return values;
    } else if (true) {
      warn$1(
        `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof fn}`
      );
    }
  }
  function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
    if (instance) {
      let cur = instance.parent;
      const exposedInstance = instance.proxy;
      const errorInfo = true ? ErrorTypeStrings$1[type] : `https://vuejs.org/error-reference/#runtime-${type}`;
      while (cur) {
        const errorCapturedHooks = cur.ec;
        if (errorCapturedHooks) {
          for (let i = 0; i < errorCapturedHooks.length; i++) {
            if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
              return;
            }
          }
        }
        cur = cur.parent;
      }
      if (errorHandler) {
        pauseTracking();
        callWithErrorHandling(errorHandler, null, 10, [
          err,
          exposedInstance,
          errorInfo
        ]);
        resetTracking();
        return;
      }
    }
    logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
  }
  function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
    if (true) {
      const info = ErrorTypeStrings$1[type];
      if (contextVNode) {
        pushWarningContext(contextVNode);
      }
      warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
      if (contextVNode) {
        popWarningContext();
      }
      if (throwInDev) {
        throw err;
      } else {
        console.error(err);
      }
    } else if (throwInProd) {
      throw err;
    } else {
      console.error(err);
    }
  }
  var queue = [];
  var flushIndex = -1;
  var pendingPostFlushCbs = [];
  var activePostFlushCbs = null;
  var postFlushIndex = 0;
  var resolvedPromise = /* @__PURE__ */ Promise.resolve();
  var currentFlushPromise = null;
  var RECURSION_LIMIT = 100;
  function nextTick(fn) {
    const p2 = currentFlushPromise || resolvedPromise;
    return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
  }
  function findInsertionIndex(id) {
    let start = flushIndex + 1;
    let end = queue.length;
    while (start < end) {
      const middle = start + end >>> 1;
      const middleJob = queue[middle];
      const middleJobId = getId(middleJob);
      if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
        start = middle + 1;
      } else {
        end = middle;
      }
    }
    return start;
  }
  function queueJob(job) {
    if (!(job.flags & 1)) {
      const jobId = getId(job);
      const lastJob = queue[queue.length - 1];
      if (!lastJob || // fast path when the job id is larger than the tail
      !(job.flags & 2) && jobId >= getId(lastJob)) {
        queue.push(job);
      } else {
        queue.splice(findInsertionIndex(jobId), 0, job);
      }
      job.flags |= 1;
      queueFlush();
    }
  }
  function queueFlush() {
    if (!currentFlushPromise) {
      currentFlushPromise = resolvedPromise.then(flushJobs);
    }
  }
  function queuePostFlushCb(cb) {
    if (!isArray(cb)) {
      if (activePostFlushCbs && cb.id === -1) {
        activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
      } else if (!(cb.flags & 1)) {
        pendingPostFlushCbs.push(cb);
        cb.flags |= 1;
      }
    } else {
      pendingPostFlushCbs.push(...cb);
    }
    queueFlush();
  }
  function flushPreFlushCbs(instance, seen2, i = flushIndex + 1) {
    if (true) {
      seen2 = seen2 || /* @__PURE__ */ new Map();
    }
    for (; i < queue.length; i++) {
      const cb = queue[i];
      if (cb && cb.flags & 2) {
        if (instance && cb.id !== instance.uid) {
          continue;
        }
        if (checkRecursiveUpdates(seen2, cb)) {
          continue;
        }
        queue.splice(i, 1);
        i--;
        if (cb.flags & 4) {
          cb.flags &= -2;
        }
        cb();
        if (!(cb.flags & 4)) {
          cb.flags &= -2;
        }
      }
    }
  }
  function flushPostFlushCbs(seen2) {
    if (pendingPostFlushCbs.length) {
      const deduped = [...new Set(pendingPostFlushCbs)].sort(
        (a, b) => getId(a) - getId(b)
      );
      pendingPostFlushCbs.length = 0;
      if (activePostFlushCbs) {
        activePostFlushCbs.push(...deduped);
        return;
      }
      activePostFlushCbs = deduped;
      if (true) {
        seen2 = seen2 || /* @__PURE__ */ new Map();
      }
      for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
        const cb = activePostFlushCbs[postFlushIndex];
        if (checkRecursiveUpdates(seen2, cb)) {
          continue;
        }
        if (cb.flags & 4) {
          cb.flags &= -2;
        }
        if (!(cb.flags & 8)) cb();
        cb.flags &= -2;
      }
      activePostFlushCbs = null;
      postFlushIndex = 0;
    }
  }
  var getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
  function flushJobs(seen2) {
    if (true) {
      seen2 = seen2 || /* @__PURE__ */ new Map();
    }
    const check = true ? (job) => checkRecursiveUpdates(seen2, job) : NOOP;
    try {
      for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job && !(job.flags & 8)) {
          if (check(job)) {
            continue;
          }
          if (job.flags & 4) {
            job.flags &= ~1;
          }
          callWithErrorHandling(
            job,
            job.i,
            job.i ? 15 : 14
          );
          if (!(job.flags & 4)) {
            job.flags &= ~1;
          }
        }
      }
    } finally {
      for (; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job) {
          job.flags &= -2;
        }
      }
      flushIndex = -1;
      queue.length = 0;
      flushPostFlushCbs(seen2);
      currentFlushPromise = null;
      if (queue.length || pendingPostFlushCbs.length) {
        flushJobs(seen2);
      }
    }
  }
  function checkRecursiveUpdates(seen2, fn) {
    const count = seen2.get(fn) || 0;
    if (count > RECURSION_LIMIT) {
      const instance = fn.i;
      const componentName = instance && getComponentName(instance.type);
      handleError(
        `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      );
      return true;
    }
    seen2.set(fn, count + 1);
    return false;
  }
  var isHmrUpdating = false;
  var hmrDirtyComponents = /* @__PURE__ */ new Map();
  if (true) {
    getGlobalThis().__VUE_HMR_RUNTIME__ = {
      createRecord: tryWrap(createRecord),
      rerender: tryWrap(rerender),
      reload: tryWrap(reload)
    };
  }
  var map = /* @__PURE__ */ new Map();
  function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
      createRecord(id, instance.type);
      record = map.get(id);
    }
    record.instances.add(instance);
  }
  function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
  }
  function createRecord(id, initialDef) {
    if (map.has(id)) {
      return false;
    }
    map.set(id, {
      initialDef: normalizeClassComponent(initialDef),
      instances: /* @__PURE__ */ new Set()
    });
    return true;
  }
  function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
  }
  function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) {
      return;
    }
    record.initialDef.render = newRender;
    [...record.instances].forEach((instance) => {
      if (newRender) {
        instance.render = newRender;
        normalizeClassComponent(instance.type).render = newRender;
      }
      instance.renderCache = [];
      isHmrUpdating = true;
      instance.update();
      isHmrUpdating = false;
    });
  }
  function reload(id, newComp) {
    const record = map.get(id);
    if (!record) return;
    newComp = normalizeClassComponent(newComp);
    updateComponentDef(record.initialDef, newComp);
    const instances = [...record.instances];
    for (let i = 0; i < instances.length; i++) {
      const instance = instances[i];
      const oldComp = normalizeClassComponent(instance.type);
      let dirtyInstances = hmrDirtyComponents.get(oldComp);
      if (!dirtyInstances) {
        if (oldComp !== record.initialDef) {
          updateComponentDef(oldComp, newComp);
        }
        hmrDirtyComponents.set(oldComp, dirtyInstances = /* @__PURE__ */ new Set());
      }
      dirtyInstances.add(instance);
      instance.appContext.propsCache.delete(instance.type);
      instance.appContext.emitsCache.delete(instance.type);
      instance.appContext.optionsCache.delete(instance.type);
      if (instance.ceReload) {
        dirtyInstances.add(instance);
        instance.ceReload(newComp.styles);
        dirtyInstances.delete(instance);
      } else if (instance.parent) {
        queueJob(() => {
          isHmrUpdating = true;
          instance.parent.update();
          isHmrUpdating = false;
          dirtyInstances.delete(instance);
        });
      } else if (instance.appContext.reload) {
        instance.appContext.reload();
      } else if (typeof window !== "undefined") {
        window.location.reload();
      } else {
        console.warn(
          "[HMR] Root or manually mounted instance modified. Full reload required."
        );
      }
      if (instance.root.ce && instance !== instance.root) {
        instance.root.ce._removeChildStyle(oldComp);
      }
    }
    queuePostFlushCb(() => {
      hmrDirtyComponents.clear();
    });
  }
  function updateComponentDef(oldComp, newComp) {
    extend(oldComp, newComp);
    for (const key in oldComp) {
      if (key !== "__file" && !(key in newComp)) {
        delete oldComp[key];
      }
    }
  }
  function tryWrap(fn) {
    return (id, arg) => {
      try {
        return fn(id, arg);
      } catch (e) {
        console.error(e);
        console.warn(
          `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
        );
      }
    };
  }
  var devtools$1;
  var buffer = [];
  var devtoolsNotInstalled = false;
  function emit$1(event, ...args) {
    if (devtools$1) {
      devtools$1.emit(event, ...args);
    } else if (!devtoolsNotInstalled) {
      buffer.push({ event, args });
    }
  }
  function setDevtoolsHook$1(hook, target) {
    var _a, _b;
    devtools$1 = hook;
    if (devtools$1) {
      devtools$1.enabled = true;
      buffer.forEach(({ event, args }) => devtools$1.emit(event, ...args));
      buffer = [];
    } else if (
      // handle late devtools injection - only do this if we are in an actual
      // browser environment to avoid the timer handle stalling test runner exit
      // (#4815)
      typeof window !== "undefined" && // some envs mock window but not fully
      window.HTMLElement && // also exclude jsdom
      // eslint-disable-next-line no-restricted-syntax
      !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))
    ) {
      const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
      replay.push((newHook) => {
        setDevtoolsHook$1(newHook, target);
      });
      setTimeout(() => {
        if (!devtools$1) {
          target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
          devtoolsNotInstalled = true;
          buffer = [];
        }
      }, 3e3);
    } else {
      devtoolsNotInstalled = true;
      buffer = [];
    }
  }
  function devtoolsInitApp(app2, version2) {
    emit$1("app:init", app2, version2, {
      Fragment,
      Text,
      Comment,
      Static
    });
  }
  function devtoolsUnmountApp(app2) {
    emit$1("app:unmount", app2);
  }
  var devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
    "component:added"
    /* COMPONENT_ADDED */
  );
  var devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook(
    "component:updated"
    /* COMPONENT_UPDATED */
  );
  var _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
    "component:removed"
    /* COMPONENT_REMOVED */
  );
  var devtoolsComponentRemoved = (component) => {
    if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
    !devtools$1.cleanupBuffer(component)) {
      _devtoolsComponentRemoved(component);
    }
  };
  // @__NO_SIDE_EFFECTS__
  function createDevtoolsComponentHook(hook) {
    return (component) => {
      emit$1(
        hook,
        component.appContext.app,
        component.uid,
        component.parent ? component.parent.uid : void 0,
        component
      );
    };
  }
  var devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
    "perf:start"
    /* PERFORMANCE_START */
  );
  var devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
    "perf:end"
    /* PERFORMANCE_END */
  );
  function createDevtoolsPerformanceHook(hook) {
    return (component, type, time) => {
      emit$1(hook, component.appContext.app, component.uid, component, type, time);
    };
  }
  function devtoolsComponentEmit(component, event, params) {
    emit$1(
      "component:emit",
      component.appContext.app,
      component,
      event,
      params
    );
  }
  var currentRenderingInstance = null;
  var currentScopeId = null;
  function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
  }
  function pushScopeId(id) {
    currentScopeId = id;
  }
  function popScopeId() {
    currentScopeId = null;
  }
  var withScopeId = (_id) => withCtx;
  function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
    if (!ctx) return fn;
    if (fn._n) {
      return fn;
    }
    const renderFnWithContext = (...args) => {
      if (renderFnWithContext._d) {
        setBlockTracking(-1);
      }
      const prevInstance = setCurrentRenderingInstance(ctx);
      let res;
      try {
        res = fn(...args);
      } finally {
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) {
          setBlockTracking(1);
        }
      }
      if (true) {
        devtoolsComponentUpdated(ctx);
      }
      return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
  }
  function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
      warn$1("Do not use built-in directive ids as custom directive id: " + name);
    }
  }
  function withDirectives(vnode, directives) {
    if (currentRenderingInstance === null) {
      warn$1(`withDirectives can only be used inside render functions.`);
      return vnode;
    }
    const instance = getComponentPublicInstance(currentRenderingInstance);
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i = 0; i < directives.length; i++) {
      let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
      if (dir) {
        if (isFunction(dir)) {
          dir = {
            mounted: dir,
            updated: dir
          };
        }
        if (dir.deep) {
          traverse(value);
        }
        bindings.push({
          dir,
          instance,
          value,
          oldValue: void 0,
          arg,
          modifiers
        });
      }
    }
    return vnode;
  }
  function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
      const binding = bindings[i];
      if (oldBindings) {
        binding.oldValue = oldBindings[i].value;
      }
      let hook = binding.dir[name];
      if (hook) {
        pauseTracking();
        callWithAsyncErrorHandling(hook, instance, 8, [
          vnode.el,
          binding,
          vnode,
          prevVNode
        ]);
        resetTracking();
      }
    }
  }
  var TeleportEndKey = Symbol("_vte");
  var isTeleport = (type) => type.__isTeleport;
  var isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
  var isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
  var isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
  var isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
  var resolveTarget = (props, select) => {
    const targetSelector = props && props.to;
    if (isString(targetSelector)) {
      if (!select) {
        warn$1(
          `Current renderer does not support string target for Teleports. (missing querySelector renderer option)`
        );
        return null;
      } else {
        const target = select(targetSelector);
        if (!target && !isTeleportDisabled(props)) {
          warn$1(
            `Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
          );
        }
        return target;
      }
    } else {
      if (!targetSelector && !isTeleportDisabled(props)) {
        warn$1(`Invalid Teleport target: ${targetSelector}`);
      }
      return targetSelector;
    }
  };
  var TeleportImpl = {
    name: "Teleport",
    __isTeleport: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
      const {
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        o: { insert, querySelector, createText, createComment }
      } = internals;
      const disabled = isTeleportDisabled(n2.props);
      let { shapeFlag, children, dynamicChildren } = n2;
      if (isHmrUpdating) {
        optimized = false;
        dynamicChildren = null;
      }
      if (n1 == null) {
        const placeholder = n2.el = true ? createComment("teleport start") : createText("");
        const mainAnchor = n2.anchor = true ? createComment("teleport end") : createText("");
        insert(placeholder, container, anchor);
        insert(mainAnchor, container, anchor);
        const mount = (container2, anchor2) => {
          if (shapeFlag & 16) {
            if (parentComponent && parentComponent.isCE) {
              parentComponent.ce._teleportTarget = container2;
            }
            mountChildren(
              children,
              container2,
              anchor2,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          }
        };
        const mountToTarget = () => {
          const target = n2.target = resolveTarget(n2.props, querySelector);
          const targetAnchor = prepareAnchor(target, n2, createText, insert);
          if (target) {
            if (namespace !== "svg" && isTargetSVG(target)) {
              namespace = "svg";
            } else if (namespace !== "mathml" && isTargetMathML(target)) {
              namespace = "mathml";
            }
            if (!disabled) {
              mount(target, targetAnchor);
              updateCssVars(n2, false);
            }
          } else if (!disabled) {
            warn$1(
              "Invalid Teleport target on mount:",
              target,
              `(${typeof target})`
            );
          }
        };
        if (disabled) {
          mount(container, mainAnchor);
          updateCssVars(n2, true);
        }
        if (isTeleportDeferred(n2.props)) {
          n2.el.__isMounted = false;
          queuePostRenderEffect(() => {
            mountToTarget();
            delete n2.el.__isMounted;
          }, parentSuspense);
        } else {
          mountToTarget();
        }
      } else {
        if (isTeleportDeferred(n2.props) && n1.el.__isMounted === false) {
          queuePostRenderEffect(() => {
            TeleportImpl.process(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized,
              internals
            );
          }, parentSuspense);
          return;
        }
        n2.el = n1.el;
        n2.targetStart = n1.targetStart;
        const mainAnchor = n2.anchor = n1.anchor;
        const target = n2.target = n1.target;
        const targetAnchor = n2.targetAnchor = n1.targetAnchor;
        const wasDisabled = isTeleportDisabled(n1.props);
        const currentContainer = wasDisabled ? container : target;
        const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
        if (namespace === "svg" || isTargetSVG(target)) {
          namespace = "svg";
        } else if (namespace === "mathml" || isTargetMathML(target)) {
          namespace = "mathml";
        }
        if (dynamicChildren) {
          patchBlockChildren(
            n1.dynamicChildren,
            dynamicChildren,
            currentContainer,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds
          );
          traverseStaticChildren(n1, n2, false);
        } else if (!optimized) {
          patchChildren(
            n1,
            n2,
            currentContainer,
            currentAnchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            false
          );
        }
        if (disabled) {
          if (!wasDisabled) {
            moveTeleport(
              n2,
              container,
              mainAnchor,
              internals,
              1
            );
          } else {
            if (n2.props && n1.props && n2.props.to !== n1.props.to) {
              n2.props.to = n1.props.to;
            }
          }
        } else {
          if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
            const nextTarget = n2.target = resolveTarget(
              n2.props,
              querySelector
            );
            if (nextTarget) {
              moveTeleport(
                n2,
                nextTarget,
                null,
                internals,
                0
              );
            } else if (true) {
              warn$1(
                "Invalid Teleport target on update:",
                target,
                `(${typeof target})`
              );
            }
          } else if (wasDisabled) {
            moveTeleport(
              n2,
              target,
              targetAnchor,
              internals,
              1
            );
          }
        }
        updateCssVars(n2, disabled);
      }
    },
    remove(vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
      const {
        shapeFlag,
        children,
        anchor,
        targetStart,
        targetAnchor,
        target,
        props
      } = vnode;
      if (target) {
        hostRemove(targetStart);
        hostRemove(targetAnchor);
      }
      doRemove && hostRemove(anchor);
      if (shapeFlag & 16) {
        const shouldRemove = doRemove || !isTeleportDisabled(props);
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          unmount(
            child,
            parentComponent,
            parentSuspense,
            shouldRemove,
            !!child.dynamicChildren
          );
        }
      }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
  };
  function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
    if (moveType === 0) {
      insert(vnode.targetAnchor, container, parentAnchor);
    }
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2;
    if (isReorder) {
      insert(el, container, parentAnchor);
    }
    if (!isReorder || isTeleportDisabled(props)) {
      if (shapeFlag & 16) {
        for (let i = 0; i < children.length; i++) {
          move(
            children[i],
            container,
            parentAnchor,
            2
          );
        }
      }
    }
    if (isReorder) {
      insert(anchor, container, parentAnchor);
    }
  }
  function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
    o: { nextSibling, parentNode, querySelector, insert, createText }
  }, hydrateChildren) {
    const target = vnode.target = resolveTarget(
      vnode.props,
      querySelector
    );
    if (target) {
      const disabled = isTeleportDisabled(vnode.props);
      const targetNode = target._lpa || target.firstChild;
      if (vnode.shapeFlag & 16) {
        if (disabled) {
          vnode.anchor = hydrateChildren(
            nextSibling(node),
            vnode,
            parentNode(node),
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
          vnode.targetStart = targetNode;
          vnode.targetAnchor = targetNode && nextSibling(targetNode);
        } else {
          vnode.anchor = nextSibling(node);
          let targetAnchor = targetNode;
          while (targetAnchor) {
            if (targetAnchor && targetAnchor.nodeType === 8) {
              if (targetAnchor.data === "teleport start anchor") {
                vnode.targetStart = targetAnchor;
              } else if (targetAnchor.data === "teleport anchor") {
                vnode.targetAnchor = targetAnchor;
                target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                break;
              }
            }
            targetAnchor = nextSibling(targetAnchor);
          }
          if (!vnode.targetAnchor) {
            prepareAnchor(target, vnode, createText, insert);
          }
          hydrateChildren(
            targetNode && nextSibling(targetNode),
            vnode,
            target,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
        }
      }
      updateCssVars(vnode, disabled);
    }
    return vnode.anchor && nextSibling(vnode.anchor);
  }
  var Teleport = TeleportImpl;
  function updateCssVars(vnode, isDisabled) {
    const ctx = vnode.ctx;
    if (ctx && ctx.ut) {
      let node, anchor;
      if (isDisabled) {
        node = vnode.el;
        anchor = vnode.anchor;
      } else {
        node = vnode.targetStart;
        anchor = vnode.targetAnchor;
      }
      while (node && node !== anchor) {
        if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
        node = node.nextSibling;
      }
      ctx.ut();
    }
  }
  function prepareAnchor(target, vnode, createText, insert) {
    const targetStart = vnode.targetStart = createText("");
    const targetAnchor = vnode.targetAnchor = createText("");
    targetStart[TeleportEndKey] = targetAnchor;
    if (target) {
      insert(targetStart, target);
      insert(targetAnchor, target);
    }
    return targetAnchor;
  }
  var leaveCbKey = Symbol("_leaveCb");
  var enterCbKey = Symbol("_enterCb");
  function useTransitionState() {
    const state = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    onMounted(() => {
      state.isMounted = true;
    });
    onBeforeUnmount(() => {
      state.isUnmounting = true;
    });
    return state;
  }
  var TransitionHookValidator = [Function, Array];
  var BaseTransitionPropsValidators = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  };
  var recursiveGetSubtree = (instance) => {
    const subTree = instance.subTree;
    return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
  };
  var BaseTransitionImpl = {
    name: `BaseTransition`,
    props: BaseTransitionPropsValidators,
    setup(props, { slots }) {
      const instance = getCurrentInstance();
      const state = useTransitionState();
      return () => {
        const children = slots.default && getTransitionRawChildren(slots.default(), true);
        if (!children || !children.length) {
          return;
        }
        const child = findNonCommentChild(children);
        const rawProps = toRaw(props);
        const { mode } = rawProps;
        if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") {
          warn$1(`invalid <transition> mode: ${mode}`);
        }
        if (state.isLeaving) {
          return emptyPlaceholder(child);
        }
        const innerChild = getInnerChild$1(child);
        if (!innerChild) {
          return emptyPlaceholder(child);
        }
        let enterHooks = resolveTransitionHooks(
          innerChild,
          rawProps,
          state,
          instance,
          // #11061, ensure enterHooks is fresh after clone
          (hooks) => enterHooks = hooks
        );
        if (innerChild.type !== Comment) {
          setTransitionHooks(innerChild, enterHooks);
        }
        let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
        if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(innerChild, oldInnerChild) && recursiveGetSubtree(instance).type !== Comment) {
          let leavingHooks = resolveTransitionHooks(
            oldInnerChild,
            rawProps,
            state,
            instance
          );
          setTransitionHooks(oldInnerChild, leavingHooks);
          if (mode === "out-in" && innerChild.type !== Comment) {
            state.isLeaving = true;
            leavingHooks.afterLeave = () => {
              state.isLeaving = false;
              if (!(instance.job.flags & 8)) {
                instance.update();
              }
              delete leavingHooks.afterLeave;
              oldInnerChild = void 0;
            };
            return emptyPlaceholder(child);
          } else if (mode === "in-out" && innerChild.type !== Comment) {
            leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
              const leavingVNodesCache = getLeavingNodesForType(
                state,
                oldInnerChild
              );
              leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
              el[leaveCbKey] = () => {
                earlyRemove();
                el[leaveCbKey] = void 0;
                delete enterHooks.delayedLeave;
                oldInnerChild = void 0;
              };
              enterHooks.delayedLeave = () => {
                delayedLeave();
                delete enterHooks.delayedLeave;
                oldInnerChild = void 0;
              };
            };
          } else {
            oldInnerChild = void 0;
          }
        } else if (oldInnerChild) {
          oldInnerChild = void 0;
        }
        return child;
      };
    }
  };
  function findNonCommentChild(children) {
    let child = children[0];
    if (children.length > 1) {
      let hasFound = false;
      for (const c of children) {
        if (c.type !== Comment) {
          if (hasFound) {
            warn$1(
              "<transition> can only be used on a single element or component. Use <transition-group> for lists."
            );
            break;
          }
          child = c;
          hasFound = true;
          if (false) break;
        }
      }
    }
    return child;
  }
  var BaseTransition = BaseTransitionImpl;
  function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
      leavingVNodesCache = /* @__PURE__ */ Object.create(null);
      leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
  }
  function resolveTransitionHooks(vnode, props, state, instance, postClone) {
    const {
      appear,
      mode,
      persisted = false,
      onBeforeEnter,
      onEnter,
      onAfterEnter,
      onEnterCancelled,
      onBeforeLeave,
      onLeave,
      onAfterLeave,
      onLeaveCancelled,
      onBeforeAppear,
      onAppear,
      onAfterAppear,
      onAppearCancelled
    } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook3 = (hook, args) => {
      hook && callWithAsyncErrorHandling(
        hook,
        instance,
        9,
        args
      );
    };
    const callAsyncHook = (hook, args) => {
      const done = args[1];
      callHook3(hook, args);
      if (isArray(hook)) {
        if (hook.every((hook2) => hook2.length <= 1)) done();
      } else if (hook.length <= 1) {
        done();
      }
    };
    const hooks = {
      mode,
      persisted,
      beforeEnter(el) {
        let hook = onBeforeEnter;
        if (!state.isMounted) {
          if (appear) {
            hook = onBeforeAppear || onBeforeEnter;
          } else {
            return;
          }
        }
        if (el[leaveCbKey]) {
          el[leaveCbKey](
            true
            /* cancelled */
          );
        }
        const leavingVNode = leavingVNodesCache[key];
        if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
          leavingVNode.el[leaveCbKey]();
        }
        callHook3(hook, [el]);
      },
      enter(el) {
        let hook = onEnter;
        let afterHook = onAfterEnter;
        let cancelHook = onEnterCancelled;
        if (!state.isMounted) {
          if (appear) {
            hook = onAppear || onEnter;
            afterHook = onAfterAppear || onAfterEnter;
            cancelHook = onAppearCancelled || onEnterCancelled;
          } else {
            return;
          }
        }
        let called = false;
        const done = el[enterCbKey] = (cancelled) => {
          if (called) return;
          called = true;
          if (cancelled) {
            callHook3(cancelHook, [el]);
          } else {
            callHook3(afterHook, [el]);
          }
          if (hooks.delayedLeave) {
            hooks.delayedLeave();
          }
          el[enterCbKey] = void 0;
        };
        if (hook) {
          callAsyncHook(hook, [el, done]);
        } else {
          done();
        }
      },
      leave(el, remove2) {
        const key2 = String(vnode.key);
        if (el[enterCbKey]) {
          el[enterCbKey](
            true
            /* cancelled */
          );
        }
        if (state.isUnmounting) {
          return remove2();
        }
        callHook3(onBeforeLeave, [el]);
        let called = false;
        const done = el[leaveCbKey] = (cancelled) => {
          if (called) return;
          called = true;
          remove2();
          if (cancelled) {
            callHook3(onLeaveCancelled, [el]);
          } else {
            callHook3(onAfterLeave, [el]);
          }
          el[leaveCbKey] = void 0;
          if (leavingVNodesCache[key2] === vnode) {
            delete leavingVNodesCache[key2];
          }
        };
        leavingVNodesCache[key2] = vnode;
        if (onLeave) {
          callAsyncHook(onLeave, [el, done]);
        } else {
          done();
        }
      },
      clone(vnode2) {
        const hooks2 = resolveTransitionHooks(
          vnode2,
          props,
          state,
          instance,
          postClone
        );
        if (postClone) postClone(hooks2);
        return hooks2;
      }
    };
    return hooks;
  }
  function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
      vnode = cloneVNode(vnode);
      vnode.children = null;
      return vnode;
    }
  }
  function getInnerChild$1(vnode) {
    if (!isKeepAlive(vnode)) {
      if (isTeleport(vnode.type) && vnode.children) {
        return findNonCommentChild(vnode.children);
      }
      return vnode;
    }
    if (vnode.component) {
      return vnode.component.subTree;
    }
    const { shapeFlag, children } = vnode;
    if (children) {
      if (shapeFlag & 16) {
        return children[0];
      }
      if (shapeFlag & 32 && isFunction(children.default)) {
        return children.default();
      }
    }
  }
  function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 && vnode.component) {
      vnode.transition = hooks;
      setTransitionHooks(vnode.component.subTree, hooks);
    } else if (vnode.shapeFlag & 128) {
      vnode.ssContent.transition = hooks.clone(vnode.ssContent);
      vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else {
      vnode.transition = hooks;
    }
  }
  function getTransitionRawChildren(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
      if (child.type === Fragment) {
        if (child.patchFlag & 128) keyedFragmentCount++;
        ret = ret.concat(
          getTransitionRawChildren(child.children, keepComment, key)
        );
      } else if (keepComment || child.type !== Comment) {
        ret.push(key != null ? cloneVNode(child, { key }) : child);
      }
    }
    if (keyedFragmentCount > 1) {
      for (let i = 0; i < ret.length; i++) {
        ret[i].patchFlag = -2;
      }
    }
    return ret;
  }
  // @__NO_SIDE_EFFECTS__
  function defineComponent(options, extraOptions) {
    return isFunction(options) ? (
      // #8236: extend call and options.name access are considered side-effects
      // by Rollup, so we have to wrap it in a pure-annotated IIFE.
      /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
    ) : options;
  }
  function useId() {
    const i = getCurrentInstance();
    if (i) {
      return (i.appContext.config.idPrefix || "v") + "-" + i.ids[0] + i.ids[1]++;
    } else if (true) {
      warn$1(
        `useId() is called when there is no active component instance to be associated with.`
      );
    }
    return "";
  }
  function markAsyncBoundary(instance) {
    instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
  }
  var knownTemplateRefs = /* @__PURE__ */ new WeakSet();
  function useTemplateRef(key) {
    const i = getCurrentInstance();
    const r = shallowRef(null);
    if (i) {
      const refs = i.refs === EMPTY_OBJ ? i.refs = {} : i.refs;
      let desc;
      if ((desc = Object.getOwnPropertyDescriptor(refs, key)) && !desc.configurable) {
        warn$1(`useTemplateRef('${key}') already exists.`);
      } else {
        Object.defineProperty(refs, key, {
          enumerable: true,
          get: () => r.value,
          set: (val) => r.value = val
        });
      }
    } else if (true) {
      warn$1(
        `useTemplateRef() is called when there is no active component instance to be associated with.`
      );
    }
    const ret = true ? readonly(r) : r;
    if (true) {
      knownTemplateRefs.add(ret);
    }
    return ret;
  }
  function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (isArray(rawRef)) {
      rawRef.forEach(
        (r, i) => setRef(
          r,
          oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef),
          parentSuspense,
          vnode,
          isUnmount
        )
      );
      return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
      if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
        setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
      }
      return;
    }
    const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref2 } = rawRef;
    if (!owner) {
      warn$1(
        `Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`
      );
      return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    const rawSetupState = toRaw(setupState);
    const canSetSetupRef = setupState === EMPTY_OBJ ? () => false : (key) => {
      if (true) {
        if (hasOwn(rawSetupState, key) && !isRef2(rawSetupState[key])) {
          warn$1(
            `Template ref "${key}" used on a non-ref value. It will not work in the production build.`
          );
        }
        if (knownTemplateRefs.has(rawSetupState[key])) {
          return false;
        }
      }
      return hasOwn(rawSetupState, key);
    };
    if (oldRef != null && oldRef !== ref2) {
      if (isString(oldRef)) {
        refs[oldRef] = null;
        if (canSetSetupRef(oldRef)) {
          setupState[oldRef] = null;
        }
      } else if (isRef2(oldRef)) {
        oldRef.value = null;
      }
    }
    if (isFunction(ref2)) {
      callWithErrorHandling(ref2, owner, 12, [value, refs]);
    } else {
      const _isString = isString(ref2);
      const _isRef = isRef2(ref2);
      if (_isString || _isRef) {
        const doSet = () => {
          if (rawRef.f) {
            const existing = _isString ? canSetSetupRef(ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
            if (isUnmount) {
              isArray(existing) && remove(existing, refValue);
            } else {
              if (!isArray(existing)) {
                if (_isString) {
                  refs[ref2] = [refValue];
                  if (canSetSetupRef(ref2)) {
                    setupState[ref2] = refs[ref2];
                  }
                } else {
                  ref2.value = [refValue];
                  if (rawRef.k) refs[rawRef.k] = ref2.value;
                }
              } else if (!existing.includes(refValue)) {
                existing.push(refValue);
              }
            }
          } else if (_isString) {
            refs[ref2] = value;
            if (canSetSetupRef(ref2)) {
              setupState[ref2] = value;
            }
          } else if (_isRef) {
            ref2.value = value;
            if (rawRef.k) refs[rawRef.k] = value;
          } else if (true) {
            warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
          }
        };
        if (value) {
          doSet.id = -1;
          queuePostRenderEffect(doSet, parentSuspense);
        } else {
          doSet();
        }
      } else if (true) {
        warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
      }
    }
  }
  var hasLoggedMismatchError = false;
  var logMismatchError = () => {
    if (hasLoggedMismatchError) {
      return;
    }
    console.error("Hydration completed but contains mismatches.");
    hasLoggedMismatchError = true;
  };
  var isSVGContainer = (container) => container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
  var isMathMLContainer = (container) => container.namespaceURI.includes("MathML");
  var getContainerType = (container) => {
    if (container.nodeType !== 1) return void 0;
    if (isSVGContainer(container)) return "svg";
    if (isMathMLContainer(container)) return "mathml";
    return void 0;
  };
  var isComment = (node) => node.nodeType === 8;
  function createHydrationFunctions(rendererInternals) {
    const {
      mt: mountComponent,
      p: patch,
      o: {
        patchProp: patchProp2,
        createText,
        nextSibling,
        parentNode,
        remove: remove2,
        insert,
        createComment
      }
    } = rendererInternals;
    const hydrate2 = (vnode, container) => {
      if (!container.hasChildNodes()) {
        warn$1(
          `Attempting to hydrate existing markup but container is empty. Performing full mount instead.`
        );
        patch(null, vnode, container);
        flushPostFlushCbs();
        container._vnode = vnode;
        return;
      }
      hydrateNode(container.firstChild, vnode, null, null, null);
      flushPostFlushCbs();
      container._vnode = vnode;
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
      optimized = optimized || !!vnode.dynamicChildren;
      const isFragmentStart = isComment(node) && node.data === "[";
      const onMismatch = () => handleMismatch(
        node,
        vnode,
        parentComponent,
        parentSuspense,
        slotScopeIds,
        isFragmentStart
      );
      const { type, ref: ref2, shapeFlag, patchFlag } = vnode;
      let domType = node.nodeType;
      vnode.el = node;
      if (true) {
        def(node, "__vnode", vnode, true);
        def(node, "__vueParentComponent", parentComponent, true);
      }
      if (patchFlag === -2) {
        optimized = false;
        vnode.dynamicChildren = null;
      }
      let nextNode = null;
      switch (type) {
        case Text:
          if (domType !== 3) {
            if (vnode.children === "") {
              insert(vnode.el = createText(""), parentNode(node), node);
              nextNode = node;
            } else {
              nextNode = onMismatch();
            }
          } else {
            if (node.data !== vnode.children) {
              warn$1(
                `Hydration text mismatch in`,
                node.parentNode,
                `
  - rendered on server: ${JSON.stringify(
                  node.data
                )}
  - expected on client: ${JSON.stringify(vnode.children)}`
              );
              logMismatchError();
              node.data = vnode.children;
            }
            nextNode = nextSibling(node);
          }
          break;
        case Comment:
          if (isTemplateNode2(node)) {
            nextNode = nextSibling(node);
            replaceNode(
              vnode.el = node.content.firstChild,
              node,
              parentComponent
            );
          } else if (domType !== 8 || isFragmentStart) {
            nextNode = onMismatch();
          } else {
            nextNode = nextSibling(node);
          }
          break;
        case Static:
          if (isFragmentStart) {
            node = nextSibling(node);
            domType = node.nodeType;
          }
          if (domType === 1 || domType === 3) {
            nextNode = node;
            const needToAdoptContent = !vnode.children.length;
            for (let i = 0; i < vnode.staticCount; i++) {
              if (needToAdoptContent)
                vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
              if (i === vnode.staticCount - 1) {
                vnode.anchor = nextNode;
              }
              nextNode = nextSibling(nextNode);
            }
            return isFragmentStart ? nextSibling(nextNode) : nextNode;
          } else {
            onMismatch();
          }
          break;
        case Fragment:
          if (!isFragmentStart) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateFragment(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized
            );
          }
          break;
        default:
          if (shapeFlag & 1) {
            if ((domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode2(node)) {
              nextNode = onMismatch();
            } else {
              nextNode = hydrateElement(
                node,
                vnode,
                parentComponent,
                parentSuspense,
                slotScopeIds,
                optimized
              );
            }
          } else if (shapeFlag & 6) {
            vnode.slotScopeIds = slotScopeIds;
            const container = parentNode(node);
            if (isFragmentStart) {
              nextNode = locateClosingAnchor(node);
            } else if (isComment(node) && node.data === "teleport start") {
              nextNode = locateClosingAnchor(node, node.data, "teleport end");
            } else {
              nextNode = nextSibling(node);
            }
            mountComponent(
              vnode,
              container,
              null,
              parentComponent,
              parentSuspense,
              getContainerType(container),
              optimized
            );
            if (isAsyncWrapper(vnode) && !vnode.type.__asyncResolved) {
              let subTree;
              if (isFragmentStart) {
                subTree = createVNode(Fragment);
                subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
              } else {
                subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
              }
              subTree.el = node;
              vnode.component.subTree = subTree;
            }
          } else if (shapeFlag & 64) {
            if (domType !== 8) {
              nextNode = onMismatch();
            } else {
              nextNode = vnode.type.hydrate(
                node,
                vnode,
                parentComponent,
                parentSuspense,
                slotScopeIds,
                optimized,
                rendererInternals,
                hydrateChildren
              );
            }
          } else if (shapeFlag & 128) {
            nextNode = vnode.type.hydrate(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              getContainerType(parentNode(node)),
              slotScopeIds,
              optimized,
              rendererInternals,
              hydrateNode
            );
          } else if (true) {
            warn$1("Invalid HostVNode type:", type, `(${typeof type})`);
          }
      }
      if (ref2 != null) {
        setRef(ref2, null, parentSuspense, vnode);
      }
      return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
      optimized = optimized || !!vnode.dynamicChildren;
      const { type, props, patchFlag, shapeFlag, dirs, transition } = vnode;
      const forcePatch = type === "input" || type === "option";
      if (true) {
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "created");
        }
        let needCallTransitionHooks = false;
        if (isTemplateNode2(el)) {
          needCallTransitionHooks = needTransition(
            null,
            // no need check parentSuspense in hydration
            transition
          ) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
          const content = el.content.firstChild;
          if (needCallTransitionHooks) {
            const cls = content.getAttribute("class");
            if (cls) content.$cls = cls;
            transition.beforeEnter(content);
          }
          replaceNode(content, el, parentComponent);
          vnode.el = el = content;
        }
        if (shapeFlag & 16 && // skip if element has innerHTML / textContent
        !(props && (props.innerHTML || props.textContent))) {
          let next = hydrateChildren(
            el.firstChild,
            vnode,
            el,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
          let hasWarned2 = false;
          while (next) {
            if (!isMismatchAllowed(
              el,
              1
              /* CHILDREN */
            )) {
              if (!hasWarned2) {
                warn$1(
                  `Hydration children mismatch on`,
                  el,
                  `
Server rendered element contains more child nodes than client vdom.`
                );
                hasWarned2 = true;
              }
              logMismatchError();
            }
            const cur = next;
            next = next.nextSibling;
            remove2(cur);
          }
        } else if (shapeFlag & 8) {
          let clientText = vnode.children;
          if (clientText[0] === "\n" && (el.tagName === "PRE" || el.tagName === "TEXTAREA")) {
            clientText = clientText.slice(1);
          }
          if (el.textContent !== clientText) {
            if (!isMismatchAllowed(
              el,
              0
              /* TEXT */
            )) {
              warn$1(
                `Hydration text content mismatch on`,
                el,
                `
  - rendered on server: ${el.textContent}
  - expected on client: ${vnode.children}`
              );
              logMismatchError();
            }
            el.textContent = vnode.children;
          }
        }
        if (props) {
          if (true) {
            const isCustomElement = el.tagName.includes("-");
            for (const key in props) {
              if (// #11189 skip if this node has directives that have created hooks
              // as it could have mutated the DOM in any possible way
              !(dirs && dirs.some((d) => d.dir.created)) && propHasMismatch(el, key, props[key], vnode, parentComponent)) {
                logMismatchError();
              }
              if (forcePatch && (key.endsWith("value") || key === "indeterminate") || isOn(key) && !isReservedProp(key) || // force hydrate v-bind with .prop modifiers
              key[0] === "." || isCustomElement) {
                patchProp2(el, key, null, props[key], void 0, parentComponent);
              }
            }
          } else if (props.onClick) {
            patchProp2(
              el,
              "onClick",
              null,
              props.onClick,
              void 0,
              parentComponent
            );
          } else if (patchFlag & 4 && isReactive(props.style)) {
            for (const key in props.style) props.style[key];
          }
        }
        let vnodeHooks;
        if (vnodeHooks = props && props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHooks, parentComponent, vnode);
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        }
        if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) {
          queueEffectWithSuspense(() => {
            vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            needCallTransitionHooks && transition.enter(el);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
          }, parentSuspense);
        }
      }
      return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
      optimized = optimized || !!parentVNode.dynamicChildren;
      const children = parentVNode.children;
      const l = children.length;
      let hasWarned2 = false;
      for (let i = 0; i < l; i++) {
        const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
        const isText2 = vnode.type === Text;
        if (node) {
          if (isText2 && !optimized) {
            if (i + 1 < l && normalizeVNode(children[i + 1]).type === Text) {
              insert(
                createText(
                  node.data.slice(vnode.children.length)
                ),
                container,
                nextSibling(node)
              );
              node.data = vnode.children;
            }
          }
          node = hydrateNode(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
        } else if (isText2 && !vnode.children) {
          insert(vnode.el = createText(""), container);
        } else {
          if (!isMismatchAllowed(
            container,
            1
            /* CHILDREN */
          )) {
            if (!hasWarned2) {
              warn$1(
                `Hydration children mismatch on`,
                container,
                `
Server rendered element contains fewer child nodes than client vdom.`
              );
              hasWarned2 = true;
            }
            logMismatchError();
          }
          patch(
            null,
            vnode,
            container,
            null,
            parentComponent,
            parentSuspense,
            getContainerType(container),
            slotScopeIds
          );
        }
      }
      return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
      const { slotScopeIds: fragmentSlotScopeIds } = vnode;
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      const container = parentNode(node);
      const next = hydrateChildren(
        nextSibling(node),
        vnode,
        container,
        parentComponent,
        parentSuspense,
        slotScopeIds,
        optimized
      );
      if (next && isComment(next) && next.data === "]") {
        return nextSibling(vnode.anchor = next);
      } else {
        logMismatchError();
        insert(vnode.anchor = createComment(`]`), container, next);
        return next;
      }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
      if (!isMismatchAllowed(
        node.parentElement,
        1
        /* CHILDREN */
      )) {
        warn$1(
          `Hydration node mismatch:
- rendered on server:`,
          node,
          node.nodeType === 3 ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``,
          `
- expected on client:`,
          vnode.type
        );
        logMismatchError();
      }
      vnode.el = null;
      if (isFragment) {
        const end = locateClosingAnchor(node);
        while (true) {
          const next2 = nextSibling(node);
          if (next2 && next2 !== end) {
            remove2(next2);
          } else {
            break;
          }
        }
      }
      const next = nextSibling(node);
      const container = parentNode(node);
      remove2(node);
      patch(
        null,
        vnode,
        container,
        next,
        parentComponent,
        parentSuspense,
        getContainerType(container),
        slotScopeIds
      );
      if (parentComponent) {
        parentComponent.vnode.el = vnode.el;
        updateHOCHostEl(parentComponent, vnode.el);
      }
      return next;
    };
    const locateClosingAnchor = (node, open = "[", close = "]") => {
      let match = 0;
      while (node) {
        node = nextSibling(node);
        if (node && isComment(node)) {
          if (node.data === open) match++;
          if (node.data === close) {
            if (match === 0) {
              return nextSibling(node);
            } else {
              match--;
            }
          }
        }
      }
      return node;
    };
    const replaceNode = (newNode, oldNode, parentComponent) => {
      const parentNode2 = oldNode.parentNode;
      if (parentNode2) {
        parentNode2.replaceChild(newNode, oldNode);
      }
      let parent = parentComponent;
      while (parent) {
        if (parent.vnode.el === oldNode) {
          parent.vnode.el = parent.subTree.el = newNode;
        }
        parent = parent.parent;
      }
    };
    const isTemplateNode2 = (node) => {
      return node.nodeType === 1 && node.tagName === "TEMPLATE";
    };
    return [hydrate2, hydrateNode];
  }
  function propHasMismatch(el, key, clientValue, vnode, instance) {
    let mismatchType;
    let mismatchKey;
    let actual;
    let expected;
    if (key === "class") {
      if (el.$cls) {
        actual = el.$cls;
        delete el.$cls;
      } else {
        actual = el.getAttribute("class");
      }
      expected = normalizeClass(clientValue);
      if (!isSetEqual(toClassSet(actual || ""), toClassSet(expected))) {
        mismatchType = 2;
        mismatchKey = `class`;
      }
    } else if (key === "style") {
      actual = el.getAttribute("style") || "";
      expected = isString(clientValue) ? clientValue : stringifyStyle(normalizeStyle(clientValue));
      const actualMap = toStyleMap(actual);
      const expectedMap = toStyleMap(expected);
      if (vnode.dirs) {
        for (const { dir, value } of vnode.dirs) {
          if (dir.name === "show" && !value) {
            expectedMap.set("display", "none");
          }
        }
      }
      if (instance) {
        resolveCssVars(instance, vnode, expectedMap);
      }
      if (!isMapEqual(actualMap, expectedMap)) {
        mismatchType = 3;
        mismatchKey = "style";
      }
    } else if (el instanceof SVGElement && isKnownSvgAttr(key) || el instanceof HTMLElement && (isBooleanAttr(key) || isKnownHtmlAttr(key))) {
      if (isBooleanAttr(key)) {
        actual = el.hasAttribute(key);
        expected = includeBooleanAttr(clientValue);
      } else if (clientValue == null) {
        actual = el.hasAttribute(key);
        expected = false;
      } else {
        if (el.hasAttribute(key)) {
          actual = el.getAttribute(key);
        } else if (key === "value" && el.tagName === "TEXTAREA") {
          actual = el.value;
        } else {
          actual = false;
        }
        expected = isRenderableAttrValue(clientValue) ? String(clientValue) : false;
      }
      if (actual !== expected) {
        mismatchType = 4;
        mismatchKey = key;
      }
    }
    if (mismatchType != null && !isMismatchAllowed(el, mismatchType)) {
      const format = (v) => v === false ? `(not rendered)` : `${mismatchKey}="${v}"`;
      const preSegment = `Hydration ${MismatchTypeString[mismatchType]} mismatch on`;
      const postSegment = `
  - rendered on server: ${format(actual)}
  - expected on client: ${format(expected)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
      {
        warn$1(preSegment, el, postSegment);
      }
      return true;
    }
    return false;
  }
  function toClassSet(str) {
    return new Set(str.trim().split(/\s+/));
  }
  function isSetEqual(a, b) {
    if (a.size !== b.size) {
      return false;
    }
    for (const s of a) {
      if (!b.has(s)) {
        return false;
      }
    }
    return true;
  }
  function toStyleMap(str) {
    const styleMap = /* @__PURE__ */ new Map();
    for (const item of str.split(";")) {
      let [key, value] = item.split(":");
      key = key.trim();
      value = value && value.trim();
      if (key && value) {
        styleMap.set(key, value);
      }
    }
    return styleMap;
  }
  function isMapEqual(a, b) {
    if (a.size !== b.size) {
      return false;
    }
    for (const [key, value] of a) {
      if (value !== b.get(key)) {
        return false;
      }
    }
    return true;
  }
  function resolveCssVars(instance, vnode, expectedMap) {
    const root = instance.subTree;
    if (instance.getCssVars && (vnode === root || root && root.type === Fragment && root.children.includes(vnode))) {
      const cssVars = instance.getCssVars();
      for (const key in cssVars) {
        expectedMap.set(
          `--${getEscapedCssVarName(key, false)}`,
          String(cssVars[key])
        );
      }
    }
    if (vnode === root && instance.parent) {
      resolveCssVars(instance.parent, instance.vnode, expectedMap);
    }
  }
  var allowMismatchAttr = "data-allow-mismatch";
  var MismatchTypeString = {
    [
      0
      /* TEXT */
    ]: "text",
    [
      1
      /* CHILDREN */
    ]: "children",
    [
      2
      /* CLASS */
    ]: "class",
    [
      3
      /* STYLE */
    ]: "style",
    [
      4
      /* ATTRIBUTE */
    ]: "attribute"
  };
  function isMismatchAllowed(el, allowedType) {
    if (allowedType === 0 || allowedType === 1) {
      while (el && !el.hasAttribute(allowMismatchAttr)) {
        el = el.parentElement;
      }
    }
    const allowedAttr = el && el.getAttribute(allowMismatchAttr);
    if (allowedAttr == null) {
      return false;
    } else if (allowedAttr === "") {
      return true;
    } else {
      const list = allowedAttr.split(",");
      if (allowedType === 0 && list.includes("children")) {
        return true;
      }
      return list.includes(MismatchTypeString[allowedType]);
    }
  }
  var requestIdleCallback = getGlobalThis().requestIdleCallback || ((cb) => setTimeout(cb, 1));
  var cancelIdleCallback = getGlobalThis().cancelIdleCallback || ((id) => clearTimeout(id));
  var hydrateOnIdle = (timeout = 1e4) => (hydrate2) => {
    const id = requestIdleCallback(hydrate2, { timeout });
    return () => cancelIdleCallback(id);
  };
  function elementIsVisibleInViewport(el) {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth);
  }
  var hydrateOnVisible = (opts) => (hydrate2, forEach) => {
    const ob = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        ob.disconnect();
        hydrate2();
        break;
      }
    }, opts);
    forEach((el) => {
      if (!(el instanceof Element)) return;
      if (elementIsVisibleInViewport(el)) {
        hydrate2();
        ob.disconnect();
        return false;
      }
      ob.observe(el);
    });
    return () => ob.disconnect();
  };
  var hydrateOnMediaQuery = (query) => (hydrate2) => {
    if (query) {
      const mql = matchMedia(query);
      if (mql.matches) {
        hydrate2();
      } else {
        mql.addEventListener("change", hydrate2, { once: true });
        return () => mql.removeEventListener("change", hydrate2);
      }
    }
  };
  var hydrateOnInteraction = (interactions = []) => (hydrate2, forEach) => {
    if (isString(interactions)) interactions = [interactions];
    let hasHydrated = false;
    const doHydrate = (e) => {
      if (!hasHydrated) {
        hasHydrated = true;
        teardown();
        hydrate2();
        e.target.dispatchEvent(new e.constructor(e.type, e));
      }
    };
    const teardown = () => {
      forEach((el) => {
        for (const i of interactions) {
          el.removeEventListener(i, doHydrate);
        }
      });
    };
    forEach((el) => {
      for (const i of interactions) {
        el.addEventListener(i, doHydrate, { once: true });
      }
    });
    return teardown;
  };
  function forEachElement(node, cb) {
    if (isComment(node) && node.data === "[") {
      let depth = 1;
      let next = node.nextSibling;
      while (next) {
        if (next.nodeType === 1) {
          const result = cb(next);
          if (result === false) {
            break;
          }
        } else if (isComment(next)) {
          if (next.data === "]") {
            if (--depth === 0) break;
          } else if (next.data === "[") {
            depth++;
          }
        }
        next = next.nextSibling;
      }
    } else {
      cb(node);
    }
  }
  var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
  // @__NO_SIDE_EFFECTS__
  function defineAsyncComponent(source) {
    if (isFunction(source)) {
      source = { loader: source };
    }
    const {
      loader,
      loadingComponent,
      errorComponent,
      delay = 200,
      hydrate: hydrateStrategy,
      timeout,
      // undefined = never times out
      suspensible = true,
      onError: userOnError
    } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = () => {
      retries++;
      pendingRequest = null;
      return load();
    };
    const load = () => {
      let thisRequest;
      return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
        err = err instanceof Error ? err : new Error(String(err));
        if (userOnError) {
          return new Promise((resolve2, reject) => {
            const userRetry = () => resolve2(retry());
            const userFail = () => reject(err);
            userOnError(err, userRetry, userFail, retries + 1);
          });
        } else {
          throw err;
        }
      }).then((comp) => {
        if (thisRequest !== pendingRequest && pendingRequest) {
          return pendingRequest;
        }
        if (!comp) {
          warn$1(
            `Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`
          );
        }
        if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
          comp = comp.default;
        }
        if (comp && !isObject(comp) && !isFunction(comp)) {
          throw new Error(`Invalid async component load result: ${comp}`);
        }
        resolvedComp = comp;
        return comp;
      }));
    };
    return /* @__PURE__ */ defineComponent({
      name: "AsyncComponentWrapper",
      __asyncLoader: load,
      __asyncHydrate(el, instance, hydrate2) {
        let patched = false;
        const doHydrate = hydrateStrategy ? () => {
          const performHydrate = () => {
            if (patched) {
              warn$1(
                `Skipping lazy hydration for component '${getComponentName(resolvedComp)}': it was updated before lazy hydration performed.`
              );
              return;
            }
            hydrate2();
          };
          const teardown = hydrateStrategy(
            performHydrate,
            (cb) => forEachElement(el, cb)
          );
          if (teardown) {
            (instance.bum || (instance.bum = [])).push(teardown);
          }
          (instance.u || (instance.u = [])).push(() => patched = true);
        } : hydrate2;
        if (resolvedComp) {
          doHydrate();
        } else {
          load().then(() => !instance.isUnmounted && doHydrate());
        }
      },
      get __asyncResolved() {
        return resolvedComp;
      },
      setup() {
        const instance = currentInstance;
        markAsyncBoundary(instance);
        if (resolvedComp) {
          return () => createInnerComp(resolvedComp, instance);
        }
        const onError = (err) => {
          pendingRequest = null;
          handleError(
            err,
            instance,
            13,
            !errorComponent
          );
        };
        if (suspensible && instance.suspense || isInSSRComponentSetup) {
          return load().then((comp) => {
            return () => createInnerComp(comp, instance);
          }).catch((err) => {
            onError(err);
            return () => errorComponent ? createVNode(errorComponent, {
              error: err
            }) : null;
          });
        }
        const loaded = ref(false);
        const error = ref();
        const delayed = ref(!!delay);
        if (delay) {
          setTimeout(() => {
            delayed.value = false;
          }, delay);
        }
        if (timeout != null) {
          setTimeout(() => {
            if (!loaded.value && !error.value) {
              const err = new Error(
                `Async component timed out after ${timeout}ms.`
              );
              onError(err);
              error.value = err;
            }
          }, timeout);
        }
        load().then(() => {
          loaded.value = true;
          if (instance.parent && isKeepAlive(instance.parent.vnode)) {
            instance.parent.update();
          }
        }).catch((err) => {
          onError(err);
          error.value = err;
        });
        return () => {
          if (loaded.value && resolvedComp) {
            return createInnerComp(resolvedComp, instance);
          } else if (error.value && errorComponent) {
            return createVNode(errorComponent, {
              error: error.value
            });
          } else if (loadingComponent && !delayed.value) {
            return createVNode(loadingComponent);
          }
        };
      }
    });
  }
  function createInnerComp(comp, parent) {
    const { ref: ref2, props, children, ce } = parent.vnode;
    const vnode = createVNode(comp, props, children);
    vnode.ref = ref2;
    vnode.ce = ce;
    delete parent.vnode.ce;
    return vnode;
  }
  var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
  var KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number]
    },
    setup(props, { slots }) {
      const instance = getCurrentInstance();
      const sharedContext = instance.ctx;
      if (!sharedContext.renderer) {
        return () => {
          const children = slots.default && slots.default();
          return children && children.length === 1 ? children[0] : children;
        };
      }
      const cache = /* @__PURE__ */ new Map();
      const keys = /* @__PURE__ */ new Set();
      let current = null;
      if (true) {
        instance.__v_cache = cache;
      }
      const parentSuspense = instance.suspense;
      const {
        renderer: {
          p: patch,
          m: move,
          um: _unmount,
          o: { createElement }
        }
      } = sharedContext;
      const storageContainer = createElement("div");
      sharedContext.activate = (vnode, container, anchor, namespace, optimized) => {
        const instance2 = vnode.component;
        move(vnode, container, anchor, 0, parentSuspense);
        patch(
          instance2.vnode,
          vnode,
          container,
          anchor,
          instance2,
          parentSuspense,
          namespace,
          vnode.slotScopeIds,
          optimized
        );
        queuePostRenderEffect(() => {
          instance2.isDeactivated = false;
          if (instance2.a) {
            invokeArrayFns(instance2.a);
          }
          const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
          if (vnodeHook) {
            invokeVNodeHook(vnodeHook, instance2.parent, vnode);
          }
        }, parentSuspense);
        if (true) {
          devtoolsComponentAdded(instance2);
        }
      };
      sharedContext.deactivate = (vnode) => {
        const instance2 = vnode.component;
        invalidateMount(instance2.m);
        invalidateMount(instance2.a);
        move(vnode, storageContainer, null, 1, parentSuspense);
        queuePostRenderEffect(() => {
          if (instance2.da) {
            invokeArrayFns(instance2.da);
          }
          const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
          if (vnodeHook) {
            invokeVNodeHook(vnodeHook, instance2.parent, vnode);
          }
          instance2.isDeactivated = true;
        }, parentSuspense);
        if (true) {
          devtoolsComponentAdded(instance2);
        }
        if (true) {
          instance2.__keepAliveStorageContainer = storageContainer;
        }
      };
      function unmount(vnode) {
        resetShapeFlag(vnode);
        _unmount(vnode, instance, parentSuspense, true);
      }
      function pruneCache(filter) {
        cache.forEach((vnode, key) => {
          const name = getComponentName(vnode.type);
          if (name && !filter(name)) {
            pruneCacheEntry(key);
          }
        });
      }
      function pruneCacheEntry(key) {
        const cached = cache.get(key);
        if (cached && (!current || !isSameVNodeType(cached, current))) {
          unmount(cached);
        } else if (current) {
          resetShapeFlag(current);
        }
        cache.delete(key);
        keys.delete(key);
      }
      watch2(
        () => [props.include, props.exclude],
        ([include, exclude]) => {
          include && pruneCache((name) => matches(include, name));
          exclude && pruneCache((name) => !matches(exclude, name));
        },
        // prune post-render after `current` has been updated
        { flush: "post", deep: true }
      );
      let pendingCacheKey = null;
      const cacheSubtree = () => {
        if (pendingCacheKey != null) {
          if (isSuspense(instance.subTree.type)) {
            queuePostRenderEffect(() => {
              cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }, instance.subTree.suspense);
          } else {
            cache.set(pendingCacheKey, getInnerChild(instance.subTree));
          }
        }
      };
      onMounted(cacheSubtree);
      onUpdated(cacheSubtree);
      onBeforeUnmount(() => {
        cache.forEach((cached) => {
          const { subTree, suspense } = instance;
          const vnode = getInnerChild(subTree);
          if (cached.type === vnode.type && cached.key === vnode.key) {
            resetShapeFlag(vnode);
            const da = vnode.component.da;
            da && queuePostRenderEffect(da, suspense);
            return;
          }
          unmount(cached);
        });
      });
      return () => {
        pendingCacheKey = null;
        if (!slots.default) {
          return current = null;
        }
        const children = slots.default();
        const rawVNode = children[0];
        if (children.length > 1) {
          if (true) {
            warn$1(`KeepAlive should contain exactly one component child.`);
          }
          current = null;
          return children;
        } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
          current = null;
          return rawVNode;
        }
        let vnode = getInnerChild(rawVNode);
        if (vnode.type === Comment) {
          current = null;
          return vnode;
        }
        const comp = vnode.type;
        const name = getComponentName(
          isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp
        );
        const { include, exclude, max } = props;
        if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
          vnode.shapeFlag &= -257;
          current = vnode;
          return rawVNode;
        }
        const key = vnode.key == null ? comp : vnode.key;
        const cachedVNode = cache.get(key);
        if (vnode.el) {
          vnode = cloneVNode(vnode);
          if (rawVNode.shapeFlag & 128) {
            rawVNode.ssContent = vnode;
          }
        }
        pendingCacheKey = key;
        if (cachedVNode) {
          vnode.el = cachedVNode.el;
          vnode.component = cachedVNode.component;
          if (vnode.transition) {
            setTransitionHooks(vnode, vnode.transition);
          }
          vnode.shapeFlag |= 512;
          keys.delete(key);
          keys.add(key);
        } else {
          keys.add(key);
          if (max && keys.size > parseInt(max, 10)) {
            pruneCacheEntry(keys.values().next().value);
          }
        }
        vnode.shapeFlag |= 256;
        current = vnode;
        return isSuspense(rawVNode.type) ? rawVNode : vnode;
      };
    }
  };
  var KeepAlive = KeepAliveImpl;
  function matches(pattern, name) {
    if (isArray(pattern)) {
      return pattern.some((p2) => matches(p2, name));
    } else if (isString(pattern)) {
      return pattern.split(",").includes(name);
    } else if (isRegExp(pattern)) {
      pattern.lastIndex = 0;
      return pattern.test(name);
    }
    return false;
  }
  function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
  }
  function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
  }
  function registerKeepAliveHook(hook, type, target = currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = () => {
      let current = target;
      while (current) {
        if (current.isDeactivated) {
          return;
        }
        current = current.parent;
      }
      return hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
      let current = target.parent;
      while (current && current.parent) {
        if (isKeepAlive(current.parent.vnode)) {
          injectToKeepAliveRoot(wrappedHook, type, target, current);
        }
        current = current.parent;
      }
    }
  }
  function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = injectHook(
      type,
      hook,
      keepAliveRoot,
      true
      /* prepend */
    );
    onUnmounted(() => {
      remove(keepAliveRoot[type], injected);
    }, target);
  }
  function resetShapeFlag(vnode) {
    vnode.shapeFlag &= -257;
    vnode.shapeFlag &= -513;
  }
  function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
  }
  function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
      const hooks = target[type] || (target[type] = []);
      const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
        pauseTracking();
        const reset2 = setCurrentInstance(target);
        const res = callWithAsyncErrorHandling(hook, target, type, args);
        reset2();
        resetTracking();
        return res;
      });
      if (prepend) {
        hooks.unshift(wrappedHook);
      } else {
        hooks.push(wrappedHook);
      }
      return wrappedHook;
    } else if (true) {
      const apiName = toHandlerKey(ErrorTypeStrings$1[type].replace(/ hook$/, ""));
      warn$1(
        `${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
      );
    }
  }
  var createHook = (lifecycle) => (hook, target = currentInstance) => {
    if (!isInSSRComponentSetup || lifecycle === "sp") {
      injectHook(lifecycle, (...args) => hook(...args), target);
    }
  };
  var onBeforeMount = createHook("bm");
  var onMounted = createHook("m");
  var onBeforeUpdate = createHook(
    "bu"
  );
  var onUpdated = createHook("u");
  var onBeforeUnmount = createHook(
    "bum"
  );
  var onUnmounted = createHook("um");
  var onServerPrefetch = createHook(
    "sp"
  );
  var onRenderTriggered = createHook("rtg");
  var onRenderTracked = createHook("rtc");
  function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec", hook, target);
  }
  var COMPONENTS = "components";
  var DIRECTIVES = "directives";
  function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
  }
  var NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
  function resolveDynamicComponent(component) {
    if (isString(component)) {
      return resolveAsset(COMPONENTS, component, false) || component;
    } else {
      return component || NULL_DYNAMIC_COMPONENT;
    }
  }
  function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
  }
  function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
      const Component = instance.type;
      if (type === COMPONENTS) {
        const selfName = getComponentName(
          Component,
          false
        );
        if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
          return Component;
        }
      }
      const res = (
        // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) || // global registration
        resolve(instance.appContext[type], name)
      );
      if (!res && maybeSelfReference) {
        return Component;
      }
      if (warnMissing && !res) {
        const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
        warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
      }
      return res;
    } else if (true) {
      warn$1(
        `resolve${capitalize(type.slice(0, -1))} can only be used in render() or setup().`
      );
    }
  }
  function resolve(registry, name) {
    return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
  }
  function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    const sourceIsArray = isArray(source);
    if (sourceIsArray || isString(source)) {
      const sourceIsReactiveArray = sourceIsArray && isReactive(source);
      let needsWrap = false;
      let isReadonlySource = false;
      if (sourceIsReactiveArray) {
        needsWrap = !isShallow(source);
        isReadonlySource = isReadonly(source);
        source = shallowReadArray(source);
      }
      ret = new Array(source.length);
      for (let i = 0, l = source.length; i < l; i++) {
        ret[i] = renderItem(
          needsWrap ? isReadonlySource ? toReadonly(toReactive(source[i])) : toReactive(source[i]) : source[i],
          i,
          void 0,
          cached && cached[i]
        );
      }
    } else if (typeof source === "number") {
      if (!Number.isInteger(source)) {
        warn$1(`The v-for range expect an integer value but got ${source}.`);
      }
      ret = new Array(source);
      for (let i = 0; i < source; i++) {
        ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
      }
    } else if (isObject(source)) {
      if (source[Symbol.iterator]) {
        ret = Array.from(
          source,
          (item, i) => renderItem(item, i, void 0, cached && cached[i])
        );
      } else {
        const keys = Object.keys(source);
        ret = new Array(keys.length);
        for (let i = 0, l = keys.length; i < l; i++) {
          const key = keys[i];
          ret[i] = renderItem(source[key], key, i, cached && cached[i]);
        }
      }
    } else {
      ret = [];
    }
    if (cache) {
      cache[index] = ret;
    }
    return ret;
  }
  function createSlots(slots, dynamicSlots) {
    for (let i = 0; i < dynamicSlots.length; i++) {
      const slot = dynamicSlots[i];
      if (isArray(slot)) {
        for (let j = 0; j < slot.length; j++) {
          slots[slot[j].name] = slot[j].fn;
        }
      } else if (slot) {
        slots[slot.name] = slot.key ? (...args) => {
          const res = slot.fn(...args);
          if (res) res.key = slot.key;
          return res;
        } : slot.fn;
      }
    }
    return slots;
  }
  function renderSlot(slots, name, props = {}, fallback, noSlotted) {
    if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
      if (name !== "default") props.name = name;
      return openBlock(), createBlock(
        Fragment,
        null,
        [createVNode("slot", props, fallback && fallback())],
        64
      );
    }
    let slot = slots[name];
    if (slot && slot.length > 1) {
      warn$1(
        `SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`
      );
      slot = () => [];
    }
    if (slot && slot._c) {
      slot._d = false;
    }
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const slotKey = props.key || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    validSlotContent && validSlotContent.key;
    const rendered = createBlock(
      Fragment,
      {
        key: (slotKey && !isSymbol(slotKey) ? slotKey : `_${name}`) + // #7256 force differentiate fallback content from actual content
        (!validSlotContent && fallback ? "_fb" : "")
      },
      validSlotContent || (fallback ? fallback() : []),
      validSlotContent && slots._ === 1 ? 64 : -2
    );
    if (!noSlotted && rendered.scopeId) {
      rendered.slotScopeIds = [rendered.scopeId + "-s"];
    }
    if (slot && slot._c) {
      slot._d = true;
    }
    return rendered;
  }
  function ensureValidVNode(vnodes) {
    return vnodes.some((child) => {
      if (!isVNode(child)) return true;
      if (child.type === Comment) return false;
      if (child.type === Fragment && !ensureValidVNode(child.children))
        return false;
      return true;
    }) ? vnodes : null;
  }
  function toHandlers(obj, preserveCaseIfNecessary) {
    const ret = {};
    if (!isObject(obj)) {
      warn$1(`v-on with no argument expects an object value.`);
      return ret;
    }
    for (const key in obj) {
      ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : toHandlerKey(key)] = obj[key];
    }
    return ret;
  }
  var getPublicInstance = (i) => {
    if (!i) return null;
    if (isStatefulComponent(i)) return getComponentPublicInstance(i);
    return getPublicInstance(i.parent);
  };
  var publicPropertiesMap = (
    // Move PURE marker to new line to workaround compiler discarding it
    // due to type annotation
    /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
      $: (i) => i,
      $el: (i) => i.vnode.el,
      $data: (i) => i.data,
      $props: (i) => true ? shallowReadonly(i.props) : i.props,
      $attrs: (i) => true ? shallowReadonly(i.attrs) : i.attrs,
      $slots: (i) => true ? shallowReadonly(i.slots) : i.slots,
      $refs: (i) => true ? shallowReadonly(i.refs) : i.refs,
      $parent: (i) => getPublicInstance(i.parent),
      $root: (i) => getPublicInstance(i.root),
      $host: (i) => i.ce,
      $emit: (i) => i.emit,
      $options: (i) => true ? resolveMergedOptions(i) : i.type,
      $forceUpdate: (i) => i.f || (i.f = () => {
        queueJob(i.update);
      }),
      $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
      $watch: (i) => true ? instanceWatch.bind(i) : NOOP
    })
  );
  var isReservedPrefix = (key) => key === "_" || key === "$";
  var hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
  var PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
      if (key === "__v_skip") {
        return true;
      }
      const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
      if (key === "__isVue") {
        return true;
      }
      let normalizedProps;
      if (key[0] !== "$") {
        const n = accessCache[key];
        if (n !== void 0) {
          switch (n) {
            case 1:
              return setupState[key];
            case 2:
              return data[key];
            case 4:
              return ctx[key];
            case 3:
              return props[key];
          }
        } else if (hasSetupBinding(setupState, key)) {
          accessCache[key] = 1;
          return setupState[key];
        } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
          accessCache[key] = 2;
          return data[key];
        } else if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
        ) {
          accessCache[key] = 3;
          return props[key];
        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
          accessCache[key] = 4;
          return ctx[key];
        } else if (shouldCacheAccess) {
          accessCache[key] = 0;
        }
      }
      const publicGetter = publicPropertiesMap[key];
      let cssModule, globalProperties;
      if (publicGetter) {
        if (key === "$attrs") {
          track(instance.attrs, "get", "");
          markAttrsAccessed();
        } else if (key === "$slots") {
          track(instance, "get", key);
        }
        return publicGetter(instance);
      } else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])
      ) {
        return cssModule;
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (
        // global properties
        globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
      ) {
        {
          return globalProperties[key];
        }
      } else if (currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
      // to infinite warning loop
      key.indexOf("__v") !== 0)) {
        if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
          warn$1(
            `Property ${JSON.stringify(
              key
            )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
          );
        } else if (instance === currentRenderingInstance) {
          warn$1(
            `Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`
          );
        }
      }
    },
    set({ _: instance }, key, value) {
      const { data, setupState, ctx } = instance;
      if (hasSetupBinding(setupState, key)) {
        setupState[key] = value;
        return true;
      } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
        warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
        return false;
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        data[key] = value;
        return true;
      } else if (hasOwn(instance.props, key)) {
        warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
        return false;
      }
      if (key[0] === "$" && key.slice(1) in instance) {
        warn$1(
          `Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`
        );
        return false;
      } else {
        if (key in instance.appContext.config.globalProperties) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
          });
        } else {
          ctx[key] = value;
        }
      }
      return true;
    },
    has({
      _: { data, setupState, accessCache, ctx, appContext, propsOptions }
    }, key) {
      let normalizedProps;
      return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
    },
    defineProperty(target, key, descriptor) {
      if (descriptor.get != null) {
        target._.accessCache[key] = 0;
      } else if (hasOwn(descriptor, "value")) {
        this.set(target, key, descriptor.value, null);
      }
      return Reflect.defineProperty(target, key, descriptor);
    }
  };
  if (true) {
    PublicInstanceProxyHandlers.ownKeys = (target) => {
      warn$1(
        `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
      );
      return Reflect.ownKeys(target);
    };
  }
  var RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ extend({}, PublicInstanceProxyHandlers, {
    get(target, key) {
      if (key === Symbol.unscopables) {
        return;
      }
      return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has(_, key) {
      const has = key[0] !== "_" && !isGloballyAllowed(key);
      if (!has && PublicInstanceProxyHandlers.has(_, key)) {
        warn$1(
          `Property ${JSON.stringify(
            key
          )} should not start with _ which is a reserved prefix for Vue internals.`
        );
      }
      return has;
    }
  });
  function createDevRenderContext(instance) {
    const target = {};
    Object.defineProperty(target, `_`, {
      configurable: true,
      enumerable: false,
      get: () => instance
    });
    Object.keys(publicPropertiesMap).forEach((key) => {
      Object.defineProperty(target, key, {
        configurable: true,
        enumerable: false,
        get: () => publicPropertiesMap[key](instance),
        // intercepted by the proxy so no need for implementation,
        // but needed to prevent set errors
        set: NOOP
      });
    });
    return target;
  }
  function exposePropsOnRenderContext(instance) {
    const {
      ctx,
      propsOptions: [propsOptions]
    } = instance;
    if (propsOptions) {
      Object.keys(propsOptions).forEach((key) => {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => instance.props[key],
          set: NOOP
        });
      });
    }
  }
  function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys(toRaw(setupState)).forEach((key) => {
      if (!setupState.__isScriptSetup) {
        if (isReservedPrefix(key[0])) {
          warn$1(
            `setup() return property ${JSON.stringify(
              key
            )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
          );
          return;
        }
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => setupState[key],
          set: NOOP
        });
      }
    });
  }
  var warnRuntimeUsage = (method) => warn$1(
    `${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
  );
  function defineProps() {
    if (true) {
      warnRuntimeUsage(`defineProps`);
    }
    return null;
  }
  function defineEmits() {
    if (true) {
      warnRuntimeUsage(`defineEmits`);
    }
    return null;
  }
  function defineExpose(exposed) {
    if (true) {
      warnRuntimeUsage(`defineExpose`);
    }
  }
  function defineOptions(options) {
    if (true) {
      warnRuntimeUsage(`defineOptions`);
    }
  }
  function defineSlots() {
    if (true) {
      warnRuntimeUsage(`defineSlots`);
    }
    return null;
  }
  function defineModel() {
    if (true) {
      warnRuntimeUsage("defineModel");
    }
  }
  function withDefaults(props, defaults) {
    if (true) {
      warnRuntimeUsage(`withDefaults`);
    }
    return null;
  }
  function useSlots() {
    return getContext().slots;
  }
  function useAttrs() {
    return getContext().attrs;
  }
  function getContext() {
    const i = getCurrentInstance();
    if (!i) {
      warn$1(`useContext() called without active instance.`);
    }
    return i.setupContext || (i.setupContext = createSetupContext(i));
  }
  function normalizePropsOrEmits(props) {
    return isArray(props) ? props.reduce(
      (normalized, p2) => (normalized[p2] = null, normalized),
      {}
    ) : props;
  }
  function mergeDefaults(raw, defaults) {
    const props = normalizePropsOrEmits(raw);
    for (const key in defaults) {
      if (key.startsWith("__skip")) continue;
      let opt = props[key];
      if (opt) {
        if (isArray(opt) || isFunction(opt)) {
          opt = props[key] = { type: opt, default: defaults[key] };
        } else {
          opt.default = defaults[key];
        }
      } else if (opt === null) {
        opt = props[key] = { default: defaults[key] };
      } else if (true) {
        warn$1(`props default key "${key}" has no corresponding declaration.`);
      }
      if (opt && defaults[`__skip_${key}`]) {
        opt.skipFactory = true;
      }
    }
    return props;
  }
  function mergeModels(a, b) {
    if (!a || !b) return a || b;
    if (isArray(a) && isArray(b)) return a.concat(b);
    return extend({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
  }
  function createPropsRestProxy(props, excludedKeys) {
    const ret = {};
    for (const key in props) {
      if (!excludedKeys.includes(key)) {
        Object.defineProperty(ret, key, {
          enumerable: true,
          get: () => props[key]
        });
      }
    }
    return ret;
  }
  function withAsyncContext(getAwaitable) {
    const ctx = getCurrentInstance();
    if (!ctx) {
      warn$1(
        `withAsyncContext called without active current instance. This is likely a bug.`
      );
    }
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if (isPromise(awaitable)) {
      awaitable = awaitable.catch((e) => {
        setCurrentInstance(ctx);
        throw e;
      });
    }
    return [awaitable, () => setCurrentInstance(ctx)];
  }
  function createDuplicateChecker() {
    const cache = /* @__PURE__ */ Object.create(null);
    return (type, key) => {
      if (cache[key]) {
        warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
      } else {
        cache[key] = type;
      }
    };
  }
  var shouldCacheAccess = true;
  function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    shouldCacheAccess = false;
    if (options.beforeCreate) {
      callHook(options.beforeCreate, instance, "bc");
    }
    const {
      // state
      data: dataOptions,
      computed: computedOptions,
      methods,
      watch: watchOptions,
      provide: provideOptions,
      inject: injectOptions,
      // lifecycle
      created,
      beforeMount,
      mounted,
      beforeUpdate,
      updated,
      activated,
      deactivated,
      beforeDestroy,
      beforeUnmount,
      destroyed,
      unmounted,
      render: render2,
      renderTracked,
      renderTriggered,
      errorCaptured,
      serverPrefetch,
      // public API
      expose,
      inheritAttrs,
      // assets
      components,
      directives,
      filters
    } = options;
    const checkDuplicateProperties = true ? createDuplicateChecker() : null;
    if (true) {
      const [propsOptions] = instance.propsOptions;
      if (propsOptions) {
        for (const key in propsOptions) {
          checkDuplicateProperties("Props", key);
        }
      }
    }
    if (injectOptions) {
      resolveInjections(injectOptions, ctx, checkDuplicateProperties);
    }
    if (methods) {
      for (const key in methods) {
        const methodHandler = methods[key];
        if (isFunction(methodHandler)) {
          if (true) {
            Object.defineProperty(ctx, key, {
              value: methodHandler.bind(publicThis),
              configurable: true,
              enumerable: true,
              writable: true
            });
          } else {
            ctx[key] = methodHandler.bind(publicThis);
          }
          if (true) {
            checkDuplicateProperties("Methods", key);
          }
        } else if (true) {
          warn$1(
            `Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`
          );
        }
      }
    }
    if (dataOptions) {
      if (!isFunction(dataOptions)) {
        warn$1(
          `The data option must be a function. Plain object usage is no longer supported.`
        );
      }
      const data = dataOptions.call(publicThis, publicThis);
      if (isPromise(data)) {
        warn$1(
          `data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`
        );
      }
      if (!isObject(data)) {
        warn$1(`data() should return an object.`);
      } else {
        instance.data = reactive(data);
        if (true) {
          for (const key in data) {
            checkDuplicateProperties("Data", key);
            if (!isReservedPrefix(key[0])) {
              Object.defineProperty(ctx, key, {
                configurable: true,
                enumerable: true,
                get: () => data[key],
                set: NOOP
              });
            }
          }
        }
      }
    }
    shouldCacheAccess = true;
    if (computedOptions) {
      for (const key in computedOptions) {
        const opt = computedOptions[key];
        const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
        if (get2 === NOOP) {
          warn$1(`Computed property "${key}" has no getter.`);
        }
        const set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : true ? () => {
          warn$1(
            `Write operation failed: computed property "${key}" is readonly.`
          );
        } : NOOP;
        const c = computed2({
          get: get2,
          set
        });
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => c.value,
          set: (v) => c.value = v
        });
        if (true) {
          checkDuplicateProperties("Computed", key);
        }
      }
    }
    if (watchOptions) {
      for (const key in watchOptions) {
        createWatcher(watchOptions[key], ctx, publicThis, key);
      }
    }
    if (provideOptions) {
      const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
    if (created) {
      callHook(created, instance, "c");
    }
    function registerLifecycleHook(register2, hook) {
      if (isArray(hook)) {
        hook.forEach((_hook) => register2(_hook.bind(publicThis)));
      } else if (hook) {
        register2(hook.bind(publicThis));
      }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (isArray(expose)) {
      if (expose.length) {
        const exposed = instance.exposed || (instance.exposed = {});
        expose.forEach((key) => {
          Object.defineProperty(exposed, key, {
            get: () => publicThis[key],
            set: (val) => publicThis[key] = val
          });
        });
      } else if (!instance.exposed) {
        instance.exposed = {};
      }
    }
    if (render2 && instance.render === NOOP) {
      instance.render = render2;
    }
    if (inheritAttrs != null) {
      instance.inheritAttrs = inheritAttrs;
    }
    if (components) instance.components = components;
    if (directives) instance.directives = directives;
    if (serverPrefetch) {
      markAsyncBoundary(instance);
    }
  }
  function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
    if (isArray(injectOptions)) {
      injectOptions = normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
      const opt = injectOptions[key];
      let injected;
      if (isObject(opt)) {
        if ("default" in opt) {
          injected = inject(
            opt.from || key,
            opt.default,
            true
          );
        } else {
          injected = inject(opt.from || key);
        }
      } else {
        injected = inject(opt);
      }
      if (isRef2(injected)) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        ctx[key] = injected;
      }
      if (true) {
        checkDuplicateProperties("Inject", key);
      }
    }
  }
  function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(
      isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
      instance,
      type
    );
  }
  function createWatcher(raw, ctx, publicThis, key) {
    let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
    if (isString(raw)) {
      const handler = ctx[raw];
      if (isFunction(handler)) {
        {
          watch2(getter, handler);
        }
      } else if (true) {
        warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
      }
    } else if (isFunction(raw)) {
      {
        watch2(getter, raw.bind(publicThis));
      }
    } else if (isObject(raw)) {
      if (isArray(raw)) {
        raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
      } else {
        const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
        if (isFunction(handler)) {
          watch2(getter, handler, raw);
        } else if (true) {
          warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
      }
    } else if (true) {
      warn$1(`Invalid watch option: "${key}"`, raw);
    }
  }
  function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const {
      mixins: globalMixins,
      optionsCache: cache,
      config: { optionMergeStrategies }
    } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) {
      resolved = cached;
    } else if (!globalMixins.length && !mixins && !extendsOptions) {
      {
        resolved = base;
      }
    } else {
      resolved = {};
      if (globalMixins.length) {
        globalMixins.forEach(
          (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
        );
      }
      mergeOptions(resolved, base, optionMergeStrategies);
    }
    if (isObject(base)) {
      cache.set(base, resolved);
    }
    return resolved;
  }
  function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) {
      mergeOptions(to, extendsOptions, strats, true);
    }
    if (mixins) {
      mixins.forEach(
        (m) => mergeOptions(to, m, strats, true)
      );
    }
    for (const key in from) {
      if (asMixin && key === "expose") {
        warn$1(
          `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
        );
      } else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
      }
    }
    return to;
  }
  var internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeEmitsOrPropsOptions,
    emits: mergeEmitsOrPropsOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
  };
  function mergeDataFn(to, from) {
    if (!from) {
      return to;
    }
    if (!to) {
      return from;
    }
    return function mergedDataFn() {
      return extend(
        isFunction(to) ? to.call(this, this) : to,
        isFunction(from) ? from.call(this, this) : from
      );
    };
  }
  function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
  }
  function normalizeInject(raw) {
    if (isArray(raw)) {
      const res = {};
      for (let i = 0; i < raw.length; i++) {
        res[raw[i]] = raw[i];
      }
      return res;
    }
    return raw;
  }
  function mergeAsArray(to, from) {
    return to ? [...new Set([].concat(to, from))] : from;
  }
  function mergeObjectOptions(to, from) {
    return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
  }
  function mergeEmitsOrPropsOptions(to, from) {
    if (to) {
      if (isArray(to) && isArray(from)) {
        return [.../* @__PURE__ */ new Set([...to, ...from])];
      }
      return extend(
        /* @__PURE__ */ Object.create(null),
        normalizePropsOrEmits(to),
        normalizePropsOrEmits(from != null ? from : {})
      );
    } else {
      return from;
    }
  }
  function mergeWatchOptions(to, from) {
    if (!to) return from;
    if (!from) return to;
    const merged = extend(/* @__PURE__ */ Object.create(null), to);
    for (const key in from) {
      merged[key] = mergeAsArray(to[key], from[key]);
    }
    return merged;
  }
  function createAppContext() {
    return {
      app: null,
      config: {
        isNativeTag: NO,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  var uid$1 = 0;
  function createAppAPI(render2, hydrate2) {
    return function createApp2(rootComponent, rootProps = null) {
      if (!isFunction(rootComponent)) {
        rootComponent = extend({}, rootComponent);
      }
      if (rootProps != null && !isObject(rootProps)) {
        warn$1(`root props passed to app.mount() must be an object.`);
        rootProps = null;
      }
      const context = createAppContext();
      const installedPlugins = /* @__PURE__ */ new WeakSet();
      const pluginCleanupFns = [];
      let isMounted = false;
      const app2 = context.app = {
        _uid: uid$1++,
        _component: rootComponent,
        _props: rootProps,
        _container: null,
        _context: context,
        _instance: null,
        version,
        get config() {
          return context.config;
        },
        set config(v) {
          if (true) {
            warn$1(
              `app.config cannot be replaced. Modify individual options instead.`
            );
          }
        },
        use(plugin, ...options) {
          if (installedPlugins.has(plugin)) {
            warn$1(`Plugin has already been applied to target app.`);
          } else if (plugin && isFunction(plugin.install)) {
            installedPlugins.add(plugin);
            plugin.install(app2, ...options);
          } else if (isFunction(plugin)) {
            installedPlugins.add(plugin);
            plugin(app2, ...options);
          } else if (true) {
            warn$1(
              `A plugin must either be a function or an object with an "install" function.`
            );
          }
          return app2;
        },
        mixin(mixin) {
          if (true) {
            if (!context.mixins.includes(mixin)) {
              context.mixins.push(mixin);
            } else if (true) {
              warn$1(
                "Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : "")
              );
            }
          } else if (true) {
            warn$1("Mixins are only available in builds supporting Options API");
          }
          return app2;
        },
        component(name, component) {
          if (true) {
            validateComponentName(name, context.config);
          }
          if (!component) {
            return context.components[name];
          }
          if (context.components[name]) {
            warn$1(`Component "${name}" has already been registered in target app.`);
          }
          context.components[name] = component;
          return app2;
        },
        directive(name, directive) {
          if (true) {
            validateDirectiveName(name);
          }
          if (!directive) {
            return context.directives[name];
          }
          if (context.directives[name]) {
            warn$1(`Directive "${name}" has already been registered in target app.`);
          }
          context.directives[name] = directive;
          return app2;
        },
        mount(rootContainer, isHydrate, namespace) {
          if (!isMounted) {
            if (rootContainer.__vue_app__) {
              warn$1(
                `There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`
              );
            }
            const vnode = app2._ceVNode || createVNode(rootComponent, rootProps);
            vnode.appContext = context;
            if (namespace === true) {
              namespace = "svg";
            } else if (namespace === false) {
              namespace = void 0;
            }
            if (true) {
              context.reload = () => {
                const cloned = cloneVNode(vnode);
                cloned.el = null;
                render2(cloned, rootContainer, namespace);
              };
            }
            if (isHydrate && hydrate2) {
              hydrate2(vnode, rootContainer);
            } else {
              render2(vnode, rootContainer, namespace);
            }
            isMounted = true;
            app2._container = rootContainer;
            rootContainer.__vue_app__ = app2;
            if (true) {
              app2._instance = vnode.component;
              devtoolsInitApp(app2, version);
            }
            return getComponentPublicInstance(vnode.component);
          } else if (true) {
            warn$1(
              `App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``
            );
          }
        },
        onUnmount(cleanupFn) {
          if (typeof cleanupFn !== "function") {
            warn$1(
              `Expected function as first argument to app.onUnmount(), but got ${typeof cleanupFn}`
            );
          }
          pluginCleanupFns.push(cleanupFn);
        },
        unmount() {
          if (isMounted) {
            callWithAsyncErrorHandling(
              pluginCleanupFns,
              app2._instance,
              16
            );
            render2(null, app2._container);
            if (true) {
              app2._instance = null;
              devtoolsUnmountApp(app2);
            }
            delete app2._container.__vue_app__;
          } else if (true) {
            warn$1(`Cannot unmount an app that is not mounted.`);
          }
        },
        provide(key, value) {
          if (key in context.provides) {
            if (hasOwn(context.provides, key)) {
              warn$1(
                `App already provides property with key "${String(key)}". It will be overwritten with the new value.`
              );
            } else {
              warn$1(
                `App already provides property with key "${String(key)}" inherited from its parent element. It will be overwritten with the new value.`
              );
            }
          }
          context.provides[key] = value;
          return app2;
        },
        runWithContext(fn) {
          const lastApp = currentApp;
          currentApp = app2;
          try {
            return fn();
          } finally {
            currentApp = lastApp;
          }
        }
      };
      return app2;
    };
  }
  var currentApp = null;
  function provide(key, value) {
    if (!currentInstance) {
      if (true) {
        warn$1(`provide() can only be used inside setup().`);
      }
    } else {
      let provides = currentInstance.provides;
      const parentProvides = currentInstance.parent && currentInstance.parent.provides;
      if (parentProvides === provides) {
        provides = currentInstance.provides = Object.create(parentProvides);
      }
      provides[key] = value;
    }
  }
  function inject(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = currentInstance || currentRenderingInstance;
    if (instance || currentApp) {
      let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
      if (provides && key in provides) {
        return provides[key];
      } else if (arguments.length > 1) {
        return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
      } else if (true) {
        warn$1(`injection "${String(key)}" not found.`);
      }
    } else if (true) {
      warn$1(`inject() can only be used inside setup() or functional components.`);
    }
  }
  function hasInjectionContext() {
    return !!(currentInstance || currentRenderingInstance || currentApp);
  }
  var internalObjectProto = {};
  var createInternalObject = () => Object.create(internalObjectProto);
  var isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
  function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = createInternalObject();
    instance.propsDefaults = /* @__PURE__ */ Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    for (const key in instance.propsOptions[0]) {
      if (!(key in props)) {
        props[key] = void 0;
      }
    }
    if (true) {
      validateProps(rawProps || {}, props, instance);
    }
    if (isStateful) {
      instance.props = isSSR ? props : shallowReactive(props);
    } else {
      if (!instance.type.props) {
        instance.props = attrs;
      } else {
        instance.props = props;
      }
    }
    instance.attrs = attrs;
  }
  function isInHmrContext(instance) {
    while (instance) {
      if (instance.type.__hmrId) return true;
      instance = instance.parent;
    }
  }
  function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const {
      props,
      attrs,
      vnode: { patchFlag }
    } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (
      // always force full diff in dev
      // - #1942 if hmr is enabled with sfc component
      // - vite#872 non-sfc component used by sfc component
      !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)
    ) {
      if (patchFlag & 8) {
        const propsToUpdate = instance.vnode.dynamicProps;
        for (let i = 0; i < propsToUpdate.length; i++) {
          let key = propsToUpdate[i];
          if (isEmitListener(instance.emitsOptions, key)) {
            continue;
          }
          const value = rawProps[key];
          if (options) {
            if (hasOwn(attrs, key)) {
              if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            } else {
              const camelizedKey = camelize(key);
              props[camelizedKey] = resolvePropValue(
                options,
                rawCurrentProps,
                camelizedKey,
                value,
                instance,
                false
              );
            }
          } else {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          }
        }
      }
    } else {
      if (setFullProps(instance, rawProps, props, attrs)) {
        hasAttrsChanged = true;
      }
      let kebabKey;
      for (const key in rawCurrentProps) {
        if (!rawProps || // for camelCase
        !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
          if (options) {
            if (rawPrevProps && // for camelCase
            (rawPrevProps[key] !== void 0 || // for kebab-case
            rawPrevProps[kebabKey] !== void 0)) {
              props[key] = resolvePropValue(
                options,
                rawCurrentProps,
                key,
                void 0,
                instance,
                true
              );
            }
          } else {
            delete props[key];
          }
        }
      }
      if (attrs !== rawCurrentProps) {
        for (const key in attrs) {
          if (!rawProps || !hasOwn(rawProps, key) && true) {
            delete attrs[key];
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (hasAttrsChanged) {
      trigger(instance.attrs, "set", "");
    }
    if (true) {
      validateProps(rawProps || {}, props, instance);
    }
  }
  function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
      for (let key in rawProps) {
        if (isReservedProp(key)) {
          continue;
        }
        const value = rawProps[key];
        let camelKey;
        if (options && hasOwn(options, camelKey = camelize(key))) {
          if (!needCastKeys || !needCastKeys.includes(camelKey)) {
            props[camelKey] = value;
          } else {
            (rawCastValues || (rawCastValues = {}))[camelKey] = value;
          }
        } else if (!isEmitListener(instance.emitsOptions, key)) {
          if (!(key in attrs) || value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (needCastKeys) {
      const rawCurrentProps = toRaw(props);
      const castValues = rawCastValues || EMPTY_OBJ;
      for (let i = 0; i < needCastKeys.length; i++) {
        const key = needCastKeys[i];
        props[key] = resolvePropValue(
          options,
          rawCurrentProps,
          key,
          castValues[key],
          instance,
          !hasOwn(castValues, key)
        );
      }
    }
    return hasAttrsChanged;
  }
  function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
      const hasDefault = hasOwn(opt, "default");
      if (hasDefault && value === void 0) {
        const defaultValue = opt.default;
        if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
          const { propsDefaults } = instance;
          if (key in propsDefaults) {
            value = propsDefaults[key];
          } else {
            const reset2 = setCurrentInstance(instance);
            value = propsDefaults[key] = defaultValue.call(
              null,
              props
            );
            reset2();
          }
        } else {
          value = defaultValue;
        }
        if (instance.ce) {
          instance.ce._setProp(key, value);
        }
      }
      if (opt[
        0
        /* shouldCast */
      ]) {
        if (isAbsent && !hasDefault) {
          value = false;
        } else if (opt[
          1
          /* shouldCastTrue */
        ] && (value === "" || value === hyphenate(key))) {
          value = true;
        }
      }
    }
    return value;
  }
  var mixinPropsCache = /* @__PURE__ */ new WeakMap();
  function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = asMixin ? mixinPropsCache : appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
      return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendProps = (raw2) => {
        hasExtends = true;
        const [props, keys] = normalizePropsOptions(raw2, appContext, true);
        extend(normalized, props);
        if (keys) needCastKeys.push(...keys);
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendProps);
      }
      if (comp.extends) {
        extendProps(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendProps);
      }
    }
    if (!raw && !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, EMPTY_ARR);
      }
      return EMPTY_ARR;
    }
    if (isArray(raw)) {
      for (let i = 0; i < raw.length; i++) {
        if (!isString(raw[i])) {
          warn$1(`props must be strings when using array syntax.`, raw[i]);
        }
        const normalizedKey = camelize(raw[i]);
        if (validatePropName(normalizedKey)) {
          normalized[normalizedKey] = EMPTY_OBJ;
        }
      }
    } else if (raw) {
      if (!isObject(raw)) {
        warn$1(`invalid props options`, raw);
      }
      for (const key in raw) {
        const normalizedKey = camelize(key);
        if (validatePropName(normalizedKey)) {
          const opt = raw[key];
          const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
          const propType = prop.type;
          let shouldCast = false;
          let shouldCastTrue = true;
          if (isArray(propType)) {
            for (let index = 0; index < propType.length; ++index) {
              const type = propType[index];
              const typeName = isFunction(type) && type.name;
              if (typeName === "Boolean") {
                shouldCast = true;
                break;
              } else if (typeName === "String") {
                shouldCastTrue = false;
              }
            }
          } else {
            shouldCast = isFunction(propType) && propType.name === "Boolean";
          }
          prop[
            0
            /* shouldCast */
          ] = shouldCast;
          prop[
            1
            /* shouldCastTrue */
          ] = shouldCastTrue;
          if (shouldCast || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
    const res = [normalized, needCastKeys];
    if (isObject(comp)) {
      cache.set(comp, res);
    }
    return res;
  }
  function validatePropName(key) {
    if (key[0] !== "$" && !isReservedProp(key)) {
      return true;
    } else if (true) {
      warn$1(`Invalid prop name: "${key}" is a reserved property.`);
    }
    return false;
  }
  function getType(ctor) {
    if (ctor === null) {
      return "null";
    }
    if (typeof ctor === "function") {
      return ctor.name || "";
    } else if (typeof ctor === "object") {
      const name = ctor.constructor && ctor.constructor.name;
      return name || "";
    }
    return "";
  }
  function validateProps(rawProps, props, instance) {
    const resolvedValues = toRaw(props);
    const options = instance.propsOptions[0];
    const camelizePropsKey = Object.keys(rawProps).map((key) => camelize(key));
    for (const key in options) {
      let opt = options[key];
      if (opt == null) continue;
      validateProp(
        key,
        resolvedValues[key],
        opt,
        true ? shallowReadonly(resolvedValues) : resolvedValues,
        !camelizePropsKey.includes(key)
      );
    }
  }
  function validateProp(name, value, prop, props, isAbsent) {
    const { type, required, validator, skipCheck } = prop;
    if (required && isAbsent) {
      warn$1('Missing required prop: "' + name + '"');
      return;
    }
    if (value == null && !required) {
      return;
    }
    if (type != null && type !== true && !skipCheck) {
      let isValid = false;
      const types = isArray(type) ? type : [type];
      const expectedTypes = [];
      for (let i = 0; i < types.length && !isValid; i++) {
        const { valid, expectedType } = assertType(value, types[i]);
        expectedTypes.push(expectedType || "");
        isValid = valid;
      }
      if (!isValid) {
        warn$1(getInvalidTypeMessage(name, value, expectedTypes));
        return;
      }
    }
    if (validator && !validator(value, props)) {
      warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
  }
  var isSimpleType = /* @__PURE__ */ makeMap(
    "String,Number,Boolean,Function,Symbol,BigInt"
  );
  function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (expectedType === "null") {
      valid = value === null;
    } else if (isSimpleType(expectedType)) {
      const t = typeof value;
      valid = t === expectedType.toLowerCase();
      if (!valid && t === "object") {
        valid = value instanceof type;
      }
    } else if (expectedType === "Object") {
      valid = isObject(value);
    } else if (expectedType === "Array") {
      valid = isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid,
      expectedType
    };
  }
  function getInvalidTypeMessage(name, value, expectedTypes) {
    if (expectedTypes.length === 0) {
      return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
    }
    let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = toRawType(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
      message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    if (isExplicable(receivedType)) {
      message += `with value ${receivedValue}.`;
    }
    return message;
  }
  function styleValue(value, type) {
    if (type === "String") {
      return `"${value}"`;
    } else if (type === "Number") {
      return `${Number(value)}`;
    } else {
      return `${value}`;
    }
  }
  function isExplicable(type) {
    const explicitTypes = ["string", "number", "boolean"];
    return explicitTypes.some((elem) => type.toLowerCase() === elem);
  }
  function isBoolean(...args) {
    return args.some((elem) => elem.toLowerCase() === "boolean");
  }
  var isInternalKey = (key) => key[0] === "_" || key === "$stable";
  var normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
  var normalizeSlot = (key, rawSlot, ctx) => {
    if (rawSlot._n) {
      return rawSlot;
    }
    const normalized = withCtx((...args) => {
      if (currentInstance && !(ctx === null && currentRenderingInstance) && !(ctx && ctx.root !== currentInstance.root)) {
        warn$1(
          `Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
        );
      }
      return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
  };
  var normalizeObjectSlots = (rawSlots, slots, instance) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
      if (isInternalKey(key)) continue;
      const value = rawSlots[key];
      if (isFunction(value)) {
        slots[key] = normalizeSlot(key, value, ctx);
      } else if (value != null) {
        if (true) {
          warn$1(
            `Non-function value encountered for slot "${key}". Prefer function slots for better performance.`
          );
        }
        const normalized = normalizeSlotValue(value);
        slots[key] = () => normalized;
      }
    }
  };
  var normalizeVNodeSlots = (instance, children) => {
    if (!isKeepAlive(instance.vnode) && true) {
      warn$1(
        `Non-function value encountered for default slot. Prefer function slots for better performance.`
      );
    }
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
  };
  var assignSlots = (slots, children, optimized) => {
    for (const key in children) {
      if (optimized || !isInternalKey(key)) {
        slots[key] = children[key];
      }
    }
  };
  var initSlots = (instance, children, optimized) => {
    const slots = instance.slots = createInternalObject();
    if (instance.vnode.shapeFlag & 32) {
      const cacheIndexes = children.__;
      if (cacheIndexes) def(slots, "__", cacheIndexes, true);
      const type = children._;
      if (type) {
        assignSlots(slots, children, optimized);
        if (optimized) {
          def(slots, "_", type, true);
        }
      } else {
        normalizeObjectSlots(children, slots);
      }
    } else if (children) {
      normalizeVNodeSlots(instance, children);
    }
  };
  var updateSlots = (instance, children, optimized) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = EMPTY_OBJ;
    if (vnode.shapeFlag & 32) {
      const type = children._;
      if (type) {
        if (isHmrUpdating) {
          assignSlots(slots, children, optimized);
          trigger(instance, "set", "$slots");
        } else if (optimized && type === 1) {
          needDeletionCheck = false;
        } else {
          assignSlots(slots, children, optimized);
        }
      } else {
        needDeletionCheck = !children.$stable;
        normalizeObjectSlots(children, slots);
      }
      deletionComparisonTarget = children;
    } else if (children) {
      normalizeVNodeSlots(instance, children);
      deletionComparisonTarget = { default: 1 };
    }
    if (needDeletionCheck) {
      for (const key in slots) {
        if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
          delete slots[key];
        }
      }
    }
  };
  var supported;
  var perf;
  function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      perf.mark(`vue-${type}-${instance.uid}`);
    }
    if (true) {
      devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
    }
  }
  function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      const startTag = `vue-${type}-${instance.uid}`;
      const endTag = startTag + `:end`;
      perf.mark(endTag);
      perf.measure(
        `<${formatComponentName(instance, instance.type)}> ${type}`,
        startTag,
        endTag
      );
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
    }
    if (true) {
      devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
    }
  }
  function isSupported() {
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function initFeatureFlags() {
    const needWarn = [];
    if (false) {
      needWarn.push(`__VUE_OPTIONS_API__`);
      getGlobalThis().__VUE_OPTIONS_API__ = true;
    }
    if (false) {
      needWarn.push(`__VUE_PROD_DEVTOOLS__`);
      getGlobalThis().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (false) {
      needWarn.push(`__VUE_PROD_HYDRATION_MISMATCH_DETAILS__`);
      getGlobalThis().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
    }
    if (needWarn.length) {
      const multi = needWarn.length > 1;
      console.warn(
        `Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
      );
    }
  }
  var queuePostRenderEffect = queueEffectWithSuspense;
  function createRenderer(options) {
    return baseCreateRenderer(options);
  }
  function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
  }
  function baseCreateRenderer(options, createHydrationFns) {
    {
      initFeatureFlags();
    }
    const target = getGlobalThis();
    target.__VUE__ = true;
    if (true) {
      setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    }
    const {
      insert: hostInsert,
      remove: hostRemove,
      patchProp: hostPatchProp,
      createElement: hostCreateElement,
      createText: hostCreateText,
      createComment: hostCreateComment,
      setText: hostSetText,
      setElementText: hostSetElementText,
      parentNode: hostParentNode,
      nextSibling: hostNextSibling,
      setScopeId: hostSetScopeId = NOOP,
      insertStaticContent: hostInsertStaticContent
    } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
      if (n1 === n2) {
        return;
      }
      if (n1 && !isSameVNodeType(n1, n2)) {
        anchor = getNextHostNode(n1);
        unmount(n1, parentComponent, parentSuspense, true);
        n1 = null;
      }
      if (n2.patchFlag === -2) {
        optimized = false;
        n2.dynamicChildren = null;
      }
      const { type, ref: ref2, shapeFlag } = n2;
      switch (type) {
        case Text:
          processText(n1, n2, container, anchor);
          break;
        case Comment:
          processCommentNode(n1, n2, container, anchor);
          break;
        case Static:
          if (n1 == null) {
            mountStaticNode(n2, container, anchor, namespace);
          } else if (true) {
            patchStaticNode(n1, n2, container, namespace);
          }
          break;
        case Fragment:
          processFragment(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          break;
        default:
          if (shapeFlag & 1) {
            processElement(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else if (shapeFlag & 6) {
            processComponent(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else if (shapeFlag & 64) {
            type.process(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized,
              internals
            );
          } else if (shapeFlag & 128) {
            type.process(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized,
              internals
            );
          } else if (true) {
            warn$1("Invalid VNode type:", type, `(${typeof type})`);
          }
      }
      if (ref2 != null && parentComponent) {
        setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
      } else if (ref2 == null && n1 && n1.ref != null) {
        setRef(n1.ref, null, parentSuspense, n1, true);
      }
    };
    const processText = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(
          n2.el = hostCreateText(n2.children),
          container,
          anchor
        );
      } else {
        const el = n2.el = n1.el;
        if (n2.children !== n1.children) {
          hostSetText(el, n2.children);
        }
      }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(
          n2.el = hostCreateComment(n2.children || ""),
          container,
          anchor
        );
      } else {
        n2.el = n1.el;
      }
    };
    const mountStaticNode = (n2, container, anchor, namespace) => {
      [n2.el, n2.anchor] = hostInsertStaticContent(
        n2.children,
        container,
        anchor,
        namespace,
        n2.el,
        n2.anchor
      );
    };
    const patchStaticNode = (n1, n2, container, namespace) => {
      if (n2.children !== n1.children) {
        const anchor = hostNextSibling(n1.anchor);
        removeStaticNode(n1);
        [n2.el, n2.anchor] = hostInsertStaticContent(
          n2.children,
          container,
          anchor,
          namespace
        );
      } else {
        n2.el = n1.el;
        n2.anchor = n1.anchor;
      }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostInsert(el, container, nextSibling);
        el = next;
      }
      hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostRemove(el);
        el = next;
      }
      hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      if (n2.type === "svg") {
        namespace = "svg";
      } else if (n2.type === "math") {
        namespace = "mathml";
      }
      if (n1 == null) {
        mountElement(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        patchElement(
          n1,
          n2,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      let el;
      let vnodeHook;
      const { props, shapeFlag, transition, dirs } = vnode;
      el = vnode.el = hostCreateElement(
        vnode.type,
        namespace,
        props && props.is,
        props
      );
      if (shapeFlag & 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(
          vnode.children,
          el,
          null,
          parentComponent,
          parentSuspense,
          resolveChildrenNamespace(vnode, namespace),
          slotScopeIds,
          optimized
        );
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
      if (props) {
        for (const key in props) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(el, key, null, props[key], namespace, parentComponent);
          }
        }
        if ("value" in props) {
          hostPatchProp(el, "value", null, props.value, namespace);
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      if (true) {
        def(el, "__vnode", vnode, true);
        def(el, "__vueParentComponent", parentComponent, true);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      const needCallTransitionHooks = needTransition(parentSuspense, transition);
      if (needCallTransitionHooks) {
        transition.beforeEnter(el);
      }
      hostInsert(el, container, anchor);
      if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
      if (scopeId) {
        hostSetScopeId(el, scopeId);
      }
      if (slotScopeIds) {
        for (let i = 0; i < slotScopeIds.length; i++) {
          hostSetScopeId(el, slotScopeIds[i]);
        }
      }
      if (parentComponent) {
        let subTree = parentComponent.subTree;
        if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
          subTree = filterSingleRoot(subTree.children) || subTree;
        }
        if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
          const parentVNode = parentComponent.vnode;
          setScopeId(
            el,
            parentVNode,
            parentVNode.scopeId,
            parentVNode.slotScopeIds,
            parentComponent.parent
          );
        }
      }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
      for (let i = start; i < children.length; i++) {
        const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
        patch(
          null,
          child,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      const el = n2.el = n1.el;
      if (true) {
        el.__vnode = n2;
      }
      let { patchFlag, dynamicChildren, dirs } = n2;
      patchFlag |= n1.patchFlag & 16;
      const oldProps = n1.props || EMPTY_OBJ;
      const newProps = n2.props || EMPTY_OBJ;
      let vnodeHook;
      parentComponent && toggleRecurse(parentComponent, false);
      if (vnodeHook = newProps.onVnodeBeforeUpdate) {
        invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
      }
      if (dirs) {
        invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
      }
      parentComponent && toggleRecurse(parentComponent, true);
      if (isHmrUpdating) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
        hostSetElementText(el, "");
      }
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          el,
          parentComponent,
          parentSuspense,
          resolveChildrenNamespace(n2, namespace),
          slotScopeIds
        );
        if (true) {
          traverseStaticChildren(n1, n2);
        }
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          el,
          null,
          parentComponent,
          parentSuspense,
          resolveChildrenNamespace(n2, namespace),
          slotScopeIds,
          false
        );
      }
      if (patchFlag > 0) {
        if (patchFlag & 16) {
          patchProps(el, oldProps, newProps, parentComponent, namespace);
        } else {
          if (patchFlag & 2) {
            if (oldProps.class !== newProps.class) {
              hostPatchProp(el, "class", null, newProps.class, namespace);
            }
          }
          if (patchFlag & 4) {
            hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
          }
          if (patchFlag & 8) {
            const propsToUpdate = n2.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
              const key = propsToUpdate[i];
              const prev = oldProps[key];
              const next = newProps[key];
              if (next !== prev || key === "value") {
                hostPatchProp(el, key, prev, next, namespace, parentComponent);
              }
            }
          }
        }
        if (patchFlag & 1) {
          if (n1.children !== n2.children) {
            hostSetElementText(el, n2.children);
          }
        }
      } else if (!optimized && dynamicChildren == null) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      }
      if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
      }
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
      for (let i = 0; i < newChildren.length; i++) {
        const oldVNode = oldChildren[i];
        const newVNode = newChildren[i];
        const container = (
          // oldVNode may be an errored async setup() component inside Suspense
          // which will not have a mounted element
          oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
          // of the Fragment itself so it can move its children.
          (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
          // which also requires the correct parent container
          !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
          oldVNode.shapeFlag & (6 | 64 | 128)) ? hostParentNode(oldVNode.el) : (
            // In other cases, the parent container is not actually used so we
            // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer
          )
        );
        patch(
          oldVNode,
          newVNode,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          true
        );
      }
    };
    const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
      if (oldProps !== newProps) {
        if (oldProps !== EMPTY_OBJ) {
          for (const key in oldProps) {
            if (!isReservedProp(key) && !(key in newProps)) {
              hostPatchProp(
                el,
                key,
                oldProps[key],
                null,
                namespace,
                parentComponent
              );
            }
          }
        }
        for (const key in newProps) {
          if (isReservedProp(key)) continue;
          const next = newProps[key];
          const prev = oldProps[key];
          if (next !== prev && key !== "value") {
            hostPatchProp(el, key, prev, next, namespace, parentComponent);
          }
        }
        if ("value" in newProps) {
          hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
        }
      }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
      const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
      let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
      if (
        // #5523 dev root fragment may inherit directives
        isHmrUpdating || patchFlag & 2048
      ) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      if (n1 == null) {
        hostInsert(fragmentStartAnchor, container, anchor);
        hostInsert(fragmentEndAnchor, container, anchor);
        mountChildren(
          // #10007
          // such fragment like `<></>` will be compiled into
          // a fragment which doesn't have a children.
          // In this case fallback to an empty array
          n2.children || [],
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
          patchBlockChildren(
            n1.dynamicChildren,
            dynamicChildren,
            container,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds
          );
          if (true) {
            traverseStaticChildren(n1, n2);
          } else if (
            // #2080 if the stable fragment has a key, it's a <template v-for> that may
            //  get moved around. Make sure all root level vnodes inherit el.
            // #2134 or if it's a component root, it may also get moved around
            // as the component is being moved.
            n2.key != null || parentComponent && n2 === parentComponent.subTree
          ) {
            traverseStaticChildren(
              n1,
              n2,
              true
              /* shallow */
            );
          }
        } else {
          patchChildren(
            n1,
            n2,
            container,
            fragmentEndAnchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      n2.slotScopeIds = slotScopeIds;
      if (n1 == null) {
        if (n2.shapeFlag & 512) {
          parentComponent.ctx.activate(
            n2,
            container,
            anchor,
            namespace,
            optimized
          );
        } else {
          mountComponent(
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            optimized
          );
        }
      } else {
        updateComponent(n1, n2, optimized);
      }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
      const instance = initialVNode.component = createComponentInstance(
        initialVNode,
        parentComponent,
        parentSuspense
      );
      if (instance.type.__hmrId) {
        registerHMR(instance);
      }
      if (true) {
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
      }
      if (isKeepAlive(initialVNode)) {
        instance.ctx.renderer = internals;
      }
      {
        if (true) {
          startMeasure(instance, `init`);
        }
        setupComponent(instance, false, optimized);
        if (true) {
          endMeasure(instance, `init`);
        }
      }
      if (isHmrUpdating) initialVNode.el = null;
      if (instance.asyncDep) {
        parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
        if (!initialVNode.el) {
          const placeholder = instance.subTree = createVNode(Comment);
          processCommentNode(null, placeholder, container, anchor);
        }
      } else {
        setupRenderEffect(
          instance,
          initialVNode,
          container,
          anchor,
          parentSuspense,
          namespace,
          optimized
        );
      }
      if (true) {
        popWarningContext();
        endMeasure(instance, `mount`);
      }
    };
    const updateComponent = (n1, n2, optimized) => {
      const instance = n2.component = n1.component;
      if (shouldUpdateComponent(n1, n2, optimized)) {
        if (instance.asyncDep && !instance.asyncResolved) {
          if (true) {
            pushWarningContext(n2);
          }
          updateComponentPreRender(instance, n2, optimized);
          if (true) {
            popWarningContext();
          }
          return;
        } else {
          instance.next = n2;
          instance.update();
        }
      } else {
        n2.el = n1.el;
        instance.vnode = n2;
      }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
      const componentUpdateFn = () => {
        if (!instance.isMounted) {
          let vnodeHook;
          const { el, props } = initialVNode;
          const { bm, m, parent, root, type } = instance;
          const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
          toggleRecurse(instance, false);
          if (bm) {
            invokeArrayFns(bm);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
            invokeVNodeHook(vnodeHook, parent, initialVNode);
          }
          toggleRecurse(instance, true);
          if (el && hydrateNode) {
            const hydrateSubTree = () => {
              if (true) {
                startMeasure(instance, `render`);
              }
              instance.subTree = renderComponentRoot(instance);
              if (true) {
                endMeasure(instance, `render`);
              }
              if (true) {
                startMeasure(instance, `hydrate`);
              }
              hydrateNode(
                el,
                instance.subTree,
                instance,
                parentSuspense,
                null
              );
              if (true) {
                endMeasure(instance, `hydrate`);
              }
            };
            if (isAsyncWrapperVNode && type.__asyncHydrate) {
              type.__asyncHydrate(
                el,
                instance,
                hydrateSubTree
              );
            } else {
              hydrateSubTree();
            }
          } else {
            if (root.ce && // @ts-expect-error _def is private
            root.ce._def.shadowRoot !== false) {
              root.ce._injectChildStyle(type);
            }
            if (true) {
              startMeasure(instance, `render`);
            }
            const subTree = instance.subTree = renderComponentRoot(instance);
            if (true) {
              endMeasure(instance, `render`);
            }
            if (true) {
              startMeasure(instance, `patch`);
            }
            patch(
              null,
              subTree,
              container,
              anchor,
              instance,
              parentSuspense,
              namespace
            );
            if (true) {
              endMeasure(instance, `patch`);
            }
            initialVNode.el = subTree.el;
          }
          if (m) {
            queuePostRenderEffect(m, parentSuspense);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
            const scopedInitialVNode = initialVNode;
            queuePostRenderEffect(
              () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
              parentSuspense
            );
          }
          if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
            instance.a && queuePostRenderEffect(instance.a, parentSuspense);
          }
          instance.isMounted = true;
          if (true) {
            devtoolsComponentAdded(instance);
          }
          initialVNode = container = anchor = null;
        } else {
          let { next, bu, u, parent, vnode } = instance;
          {
            const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
            if (nonHydratedAsyncRoot) {
              if (next) {
                next.el = vnode.el;
                updateComponentPreRender(instance, next, optimized);
              }
              nonHydratedAsyncRoot.asyncDep.then(() => {
                if (!instance.isUnmounted) {
                  componentUpdateFn();
                }
              });
              return;
            }
          }
          let originNext = next;
          let vnodeHook;
          if (true) {
            pushWarningContext(next || instance.vnode);
          }
          toggleRecurse(instance, false);
          if (next) {
            next.el = vnode.el;
            updateComponentPreRender(instance, next, optimized);
          } else {
            next = vnode;
          }
          if (bu) {
            invokeArrayFns(bu);
          }
          if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
            invokeVNodeHook(vnodeHook, parent, next, vnode);
          }
          toggleRecurse(instance, true);
          if (true) {
            startMeasure(instance, `render`);
          }
          const nextTree = renderComponentRoot(instance);
          if (true) {
            endMeasure(instance, `render`);
          }
          const prevTree = instance.subTree;
          instance.subTree = nextTree;
          if (true) {
            startMeasure(instance, `patch`);
          }
          patch(
            prevTree,
            nextTree,
            // parent may have changed if it's in a teleport
            hostParentNode(prevTree.el),
            // anchor may have changed if it's in a fragment
            getNextHostNode(prevTree),
            instance,
            parentSuspense,
            namespace
          );
          if (true) {
            endMeasure(instance, `patch`);
          }
          next.el = nextTree.el;
          if (originNext === null) {
            updateHOCHostEl(instance, nextTree.el);
          }
          if (u) {
            queuePostRenderEffect(u, parentSuspense);
          }
          if (vnodeHook = next.props && next.props.onVnodeUpdated) {
            queuePostRenderEffect(
              () => invokeVNodeHook(vnodeHook, parent, next, vnode),
              parentSuspense
            );
          }
          if (true) {
            devtoolsComponentUpdated(instance);
          }
          if (true) {
            popWarningContext();
          }
        }
      };
      instance.scope.on();
      const effect2 = instance.effect = new ReactiveEffect(componentUpdateFn);
      instance.scope.off();
      const update3 = instance.update = effect2.run.bind(effect2);
      const job = instance.job = effect2.runIfDirty.bind(effect2);
      job.i = instance;
      job.id = instance.uid;
      effect2.scheduler = () => queueJob(job);
      toggleRecurse(instance, true);
      if (true) {
        effect2.onTrack = instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0;
        effect2.onTrigger = instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0;
      }
      update3();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
      nextVNode.component = instance;
      const prevProps = instance.vnode.props;
      instance.vnode = nextVNode;
      instance.next = null;
      updateProps(instance, nextVNode.props, prevProps, optimized);
      updateSlots(instance, nextVNode.children, optimized);
      pauseTracking();
      flushPreFlushCbs(instance);
      resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
      const c1 = n1 && n1.children;
      const prevShapeFlag = n1 ? n1.shapeFlag : 0;
      const c2 = n2.children;
      const { patchFlag, shapeFlag } = n2;
      if (patchFlag > 0) {
        if (patchFlag & 128) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          return;
        } else if (patchFlag & 256) {
          patchUnkeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          return;
        }
      }
      if (shapeFlag & 8) {
        if (prevShapeFlag & 16) {
          unmountChildren(c1, parentComponent, parentSuspense);
        }
        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
        if (prevShapeFlag & 16) {
          if (shapeFlag & 16) {
            patchKeyedChildren(
              c1,
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else {
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
          if (prevShapeFlag & 8) {
            hostSetElementText(container, "");
          }
          if (shapeFlag & 16) {
            mountChildren(
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          }
        }
      }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      c1 = c1 || EMPTY_ARR;
      c2 = c2 || EMPTY_ARR;
      const oldLength = c1.length;
      const newLength = c2.length;
      const commonLength = Math.min(oldLength, newLength);
      let i;
      for (i = 0; i < commonLength; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        patch(
          c1[i],
          nextChild,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
      if (oldLength > newLength) {
        unmountChildren(
          c1,
          parentComponent,
          parentSuspense,
          true,
          false,
          commonLength
        );
      } else {
        mountChildren(
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized,
          commonLength
        );
      }
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      let i = 0;
      const l2 = c2.length;
      let e1 = c1.length - 1;
      let e2 = l2 - 1;
      while (i <= e1 && i <= e2) {
        const n1 = c1[i];
        const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (isSameVNodeType(n1, n2)) {
          patch(
            n1,
            n2,
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          break;
        }
        i++;
      }
      while (i <= e1 && i <= e2) {
        const n1 = c1[e1];
        const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
        if (isSameVNodeType(n1, n2)) {
          patch(
            n1,
            n2,
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          break;
        }
        e1--;
        e2--;
      }
      if (i > e1) {
        if (i <= e2) {
          const nextPos = e2 + 1;
          const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
          while (i <= e2) {
            patch(
              null,
              c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
            i++;
          }
        }
      } else if (i > e2) {
        while (i <= e1) {
          unmount(c1[i], parentComponent, parentSuspense, true);
          i++;
        }
      } else {
        const s1 = i;
        const s2 = i;
        const keyToNewIndexMap = /* @__PURE__ */ new Map();
        for (i = s2; i <= e2; i++) {
          const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
          if (nextChild.key != null) {
            if (keyToNewIndexMap.has(nextChild.key)) {
              warn$1(
                `Duplicate keys found during update:`,
                JSON.stringify(nextChild.key),
                `Make sure keys are unique.`
              );
            }
            keyToNewIndexMap.set(nextChild.key, i);
          }
        }
        let j;
        let patched = 0;
        const toBePatched = e2 - s2 + 1;
        let moved = false;
        let maxNewIndexSoFar = 0;
        const newIndexToOldIndexMap = new Array(toBePatched);
        for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
        for (i = s1; i <= e1; i++) {
          const prevChild = c1[i];
          if (patched >= toBePatched) {
            unmount(prevChild, parentComponent, parentSuspense, true);
            continue;
          }
          let newIndex;
          if (prevChild.key != null) {
            newIndex = keyToNewIndexMap.get(prevChild.key);
          } else {
            for (j = s2; j <= e2; j++) {
              if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                newIndex = j;
                break;
              }
            }
          }
          if (newIndex === void 0) {
            unmount(prevChild, parentComponent, parentSuspense, true);
          } else {
            newIndexToOldIndexMap[newIndex - s2] = i + 1;
            if (newIndex >= maxNewIndexSoFar) {
              maxNewIndexSoFar = newIndex;
            } else {
              moved = true;
            }
            patch(
              prevChild,
              c2[newIndex],
              container,
              null,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
            patched++;
          }
        }
        const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
        j = increasingNewIndexSequence.length - 1;
        for (i = toBePatched - 1; i >= 0; i--) {
          const nextIndex = s2 + i;
          const nextChild = c2[nextIndex];
          const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
          if (newIndexToOldIndexMap[i] === 0) {
            patch(
              null,
              nextChild,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else if (moved) {
            if (j < 0 || i !== increasingNewIndexSequence[j]) {
              move(nextChild, container, anchor, 2);
            } else {
              j--;
            }
          }
        }
      }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
      const { el, type, transition, children, shapeFlag } = vnode;
      if (shapeFlag & 6) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }
      if (shapeFlag & 128) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }
      if (shapeFlag & 64) {
        type.move(vnode, container, anchor, internals);
        return;
      }
      if (type === Fragment) {
        hostInsert(el, container, anchor);
        for (let i = 0; i < children.length; i++) {
          move(children[i], container, anchor, moveType);
        }
        hostInsert(vnode.anchor, container, anchor);
        return;
      }
      if (type === Static) {
        moveStaticNode(vnode, container, anchor);
        return;
      }
      const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
      if (needTransition2) {
        if (moveType === 0) {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(() => transition.enter(el), parentSuspense);
        } else {
          const { leave, delayLeave, afterLeave } = transition;
          const remove22 = () => {
            if (vnode.ctx.isUnmounted) {
              hostRemove(el);
            } else {
              hostInsert(el, container, anchor);
            }
          };
          const performLeave = () => {
            leave(el, () => {
              remove22();
              afterLeave && afterLeave();
            });
          };
          if (delayLeave) {
            delayLeave(el, remove22, performLeave);
          } else {
            performLeave();
          }
        }
      } else {
        hostInsert(el, container, anchor);
      }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
      const {
        type,
        props,
        ref: ref2,
        children,
        dynamicChildren,
        shapeFlag,
        patchFlag,
        dirs,
        cacheIndex
      } = vnode;
      if (patchFlag === -2) {
        optimized = false;
      }
      if (ref2 != null) {
        pauseTracking();
        setRef(ref2, null, parentSuspense, vnode, true);
        resetTracking();
      }
      if (cacheIndex != null) {
        parentComponent.renderCache[cacheIndex] = void 0;
      }
      if (shapeFlag & 256) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }
      const shouldInvokeDirs = shapeFlag & 1 && dirs;
      const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
      let vnodeHook;
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
      if (shapeFlag & 6) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
        if (shapeFlag & 128) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }
        if (shouldInvokeDirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
        }
        if (shapeFlag & 64) {
          vnode.type.remove(
            vnode,
            parentComponent,
            parentSuspense,
            internals,
            doRemove
          );
        } else if (dynamicChildren && // #5154
        // when v-once is used inside a block, setBlockTracking(-1) marks the
        // parent block with hasOnce: true
        // so that it doesn't take the fast path during unmount - otherwise
        // components nested in v-once are never unmounted.
        !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
        (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
          unmountChildren(
            dynamicChildren,
            parentComponent,
            parentSuspense,
            false,
            true
          );
        } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
          unmountChildren(children, parentComponent, parentSuspense);
        }
        if (doRemove) {
          remove2(vnode);
        }
      }
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
      }
    };
    const remove2 = (vnode) => {
      const { type, el, anchor, transition } = vnode;
      if (type === Fragment) {
        if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
          vnode.children.forEach((child) => {
            if (child.type === Comment) {
              hostRemove(child.el);
            } else {
              remove2(child);
            }
          });
        } else {
          removeFragment(el, anchor);
        }
        return;
      }
      if (type === Static) {
        removeStaticNode(vnode);
        return;
      }
      const performRemove = () => {
        hostRemove(el);
        if (transition && !transition.persisted && transition.afterLeave) {
          transition.afterLeave();
        }
      };
      if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
        const { leave, delayLeave } = transition;
        const performLeave = () => leave(el, performRemove);
        if (delayLeave) {
          delayLeave(vnode.el, performRemove, performLeave);
        } else {
          performLeave();
        }
      } else {
        performRemove();
      }
    };
    const removeFragment = (cur, end) => {
      let next;
      while (cur !== end) {
        next = hostNextSibling(cur);
        hostRemove(cur);
        cur = next;
      }
      hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
      if (instance.type.__hmrId) {
        unregisterHMR(instance);
      }
      const {
        bum,
        scope,
        job,
        subTree,
        um,
        m,
        a,
        parent,
        slots: { __: slotCacheKeys }
      } = instance;
      invalidateMount(m);
      invalidateMount(a);
      if (bum) {
        invokeArrayFns(bum);
      }
      if (parent && isArray(slotCacheKeys)) {
        slotCacheKeys.forEach((v) => {
          parent.renderCache[v] = void 0;
        });
      }
      scope.stop();
      if (job) {
        job.flags |= 8;
        unmount(subTree, instance, parentSuspense, doRemove);
      }
      if (um) {
        queuePostRenderEffect(um, parentSuspense);
      }
      queuePostRenderEffect(() => {
        instance.isUnmounted = true;
      }, parentSuspense);
      if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
        parentSuspense.deps--;
        if (parentSuspense.deps === 0) {
          parentSuspense.resolve();
        }
      }
      if (true) {
        devtoolsComponentRemoved(instance);
      }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
      for (let i = start; i < children.length; i++) {
        unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
      }
    };
    const getNextHostNode = (vnode) => {
      if (vnode.shapeFlag & 6) {
        return getNextHostNode(vnode.component.subTree);
      }
      if (vnode.shapeFlag & 128) {
        return vnode.suspense.next();
      }
      const el = hostNextSibling(vnode.anchor || vnode.el);
      const teleportEnd = el && el[TeleportEndKey];
      return teleportEnd ? hostNextSibling(teleportEnd) : el;
    };
    let isFlushing = false;
    const render2 = (vnode, container, namespace) => {
      if (vnode == null) {
        if (container._vnode) {
          unmount(container._vnode, null, null, true);
        }
      } else {
        patch(
          container._vnode || null,
          vnode,
          container,
          null,
          null,
          null,
          namespace
        );
      }
      container._vnode = vnode;
      if (!isFlushing) {
        isFlushing = true;
        flushPreFlushCbs();
        flushPostFlushCbs();
        isFlushing = false;
      }
    };
    const internals = {
      p: patch,
      um: unmount,
      m: move,
      r: remove2,
      mt: mountComponent,
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      n: getNextHostNode,
      o: options
    };
    let hydrate2;
    let hydrateNode;
    if (createHydrationFns) {
      [hydrate2, hydrateNode] = createHydrationFns(
        internals
      );
    }
    return {
      render: render2,
      hydrate: hydrate2,
      createApp: createAppAPI(render2, hydrate2)
    };
  }
  function resolveChildrenNamespace({ type, props }, currentNamespace) {
    return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
  }
  function toggleRecurse({ effect: effect2, job }, allowed) {
    if (allowed) {
      effect2.flags |= 32;
      job.flags |= 4;
    } else {
      effect2.flags &= -33;
      job.flags &= -5;
    }
  }
  function needTransition(parentSuspense, transition) {
    return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
  }
  function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray(ch1) && isArray(ch2)) {
      for (let i = 0; i < ch1.length; i++) {
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
          if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
            c2 = ch2[i] = cloneIfMounted(ch2[i]);
            c2.el = c1.el;
          }
          if (!shallow && c2.patchFlag !== -2)
            traverseStaticChildren(c1, c2);
        }
        if (c2.type === Text) {
          c2.el = c1.el;
        }
        if (c2.type === Comment && !c2.el) {
          c2.el = c1.el;
        }
        if (true) {
          c2.el && (c2.el.__vnode = c2);
        }
      }
    }
  }
  function getSequence(arr) {
    const p2 = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
      const arrI = arr[i];
      if (arrI !== 0) {
        j = result[result.length - 1];
        if (arr[j] < arrI) {
          p2[i] = j;
          result.push(i);
          continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
          c = u + v >> 1;
          if (arr[result[c]] < arrI) {
            u = c + 1;
          } else {
            v = c;
          }
        }
        if (arrI < arr[result[u]]) {
          if (u > 0) {
            p2[i] = result[u - 1];
          }
          result[u] = i;
        }
      }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
      result[u] = v;
      v = p2[v];
    }
    return result;
  }
  function locateNonHydratedAsyncRoot(instance) {
    const subComponent = instance.subTree.component;
    if (subComponent) {
      if (subComponent.asyncDep && !subComponent.asyncResolved) {
        return subComponent;
      } else {
        return locateNonHydratedAsyncRoot(subComponent);
      }
    }
  }
  function invalidateMount(hooks) {
    if (hooks) {
      for (let i = 0; i < hooks.length; i++)
        hooks[i].flags |= 8;
    }
  }
  var ssrContextKey = Symbol.for("v-scx");
  var useSSRContext = () => {
    {
      const ctx = inject(ssrContextKey);
      if (!ctx) {
        warn$1(
          `Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`
        );
      }
      return ctx;
    }
  };
  function watchEffect(effect2, options) {
    return doWatch(effect2, null, options);
  }
  function watchPostEffect(effect2, options) {
    return doWatch(
      effect2,
      null,
      true ? extend({}, options, { flush: "post" }) : { flush: "post" }
    );
  }
  function watchSyncEffect(effect2, options) {
    return doWatch(
      effect2,
      null,
      true ? extend({}, options, { flush: "sync" }) : { flush: "sync" }
    );
  }
  function watch2(source, cb, options) {
    if (!isFunction(cb)) {
      warn$1(
        `\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`
      );
    }
    return doWatch(source, cb, options);
  }
  function doWatch(source, cb, options = EMPTY_OBJ) {
    const { immediate, deep, flush, once } = options;
    if (!cb) {
      if (immediate !== void 0) {
        warn$1(
          `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
        );
      }
      if (deep !== void 0) {
        warn$1(
          `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
        );
      }
      if (once !== void 0) {
        warn$1(
          `watch() "once" option is only respected when using the watch(source, callback, options?) signature.`
        );
      }
    }
    const baseWatchOptions = extend({}, options);
    if (true) baseWatchOptions.onWarn = warn$1;
    const runsImmediately = cb && immediate || !cb && flush !== "post";
    let ssrCleanup;
    if (isInSSRComponentSetup) {
      if (flush === "sync") {
        const ctx = useSSRContext();
        ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
      } else if (!runsImmediately) {
        const watchStopHandle = () => {
        };
        watchStopHandle.stop = NOOP;
        watchStopHandle.resume = NOOP;
        watchStopHandle.pause = NOOP;
        return watchStopHandle;
      }
    }
    const instance = currentInstance;
    baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
    let isPre = false;
    if (flush === "post") {
      baseWatchOptions.scheduler = (job) => {
        queuePostRenderEffect(job, instance && instance.suspense);
      };
    } else if (flush !== "sync") {
      isPre = true;
      baseWatchOptions.scheduler = (job, isFirstRun) => {
        if (isFirstRun) {
          job();
        } else {
          queueJob(job);
        }
      };
    }
    baseWatchOptions.augmentJob = (job) => {
      if (cb) {
        job.flags |= 4;
      }
      if (isPre) {
        job.flags |= 2;
        if (instance) {
          job.id = instance.uid;
          job.i = instance;
        }
      }
    };
    const watchHandle = watch(source, cb, baseWatchOptions);
    if (isInSSRComponentSetup) {
      if (ssrCleanup) {
        ssrCleanup.push(watchHandle);
      } else if (runsImmediately) {
        watchHandle();
      }
    }
    return watchHandle;
  }
  function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if (isFunction(value)) {
      cb = value;
    } else {
      cb = value.handler;
      options = value;
    }
    const reset2 = setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    reset2();
    return res;
  }
  function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return () => {
      let cur = ctx;
      for (let i = 0; i < segments.length && cur; i++) {
        cur = cur[segments[i]];
      }
      return cur;
    };
  }
  function useModel(props, name, options = EMPTY_OBJ) {
    const i = getCurrentInstance();
    if (!i) {
      warn$1(`useModel() called without active instance.`);
      return ref();
    }
    const camelizedName = camelize(name);
    if (!i.propsOptions[0][camelizedName]) {
      warn$1(`useModel() called with prop "${name}" which is not declared.`);
      return ref();
    }
    const hyphenatedName = hyphenate(name);
    const modifiers = getModelModifiers(props, camelizedName);
    const res = customRef((track2, trigger2) => {
      let localValue;
      let prevSetValue = EMPTY_OBJ;
      let prevEmittedValue;
      watchSyncEffect(() => {
        const propValue = props[camelizedName];
        if (hasChanged(localValue, propValue)) {
          localValue = propValue;
          trigger2();
        }
      });
      return {
        get() {
          track2();
          return options.get ? options.get(localValue) : localValue;
        },
        set(value) {
          const emittedValue = options.set ? options.set(value) : value;
          if (!hasChanged(emittedValue, localValue) && !(prevSetValue !== EMPTY_OBJ && hasChanged(value, prevSetValue))) {
            return;
          }
          const rawProps = i.vnode.props;
          if (!(rawProps && // check if parent has passed v-model
          (name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && (`onUpdate:${name}` in rawProps || `onUpdate:${camelizedName}` in rawProps || `onUpdate:${hyphenatedName}` in rawProps))) {
            localValue = value;
            trigger2();
          }
          i.emit(`update:${name}`, emittedValue);
          if (hasChanged(value, emittedValue) && hasChanged(value, prevSetValue) && !hasChanged(emittedValue, prevEmittedValue)) {
            trigger2();
          }
          prevSetValue = value;
          prevEmittedValue = emittedValue;
        }
      };
    });
    res[Symbol.iterator] = () => {
      let i2 = 0;
      return {
        next() {
          if (i2 < 2) {
            return { value: i2++ ? modifiers || EMPTY_OBJ : res, done: false };
          } else {
            return { done: true };
          }
        }
      };
    };
    return res;
  }
  var getModelModifiers = (props, modelName) => {
    return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
  };
  function emit(instance, event, ...rawArgs) {
    if (instance.isUnmounted) return;
    const props = instance.vnode.props || EMPTY_OBJ;
    if (true) {
      const {
        emitsOptions,
        propsOptions: [propsOptions]
      } = instance;
      if (emitsOptions) {
        if (!(event in emitsOptions) && true) {
          if (!propsOptions || !(toHandlerKey(camelize(event)) in propsOptions)) {
            warn$1(
              `Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(camelize(event))}" prop.`
            );
          }
        } else {
          const validator = emitsOptions[event];
          if (isFunction(validator)) {
            const isValid = validator(...rawArgs);
            if (!isValid) {
              warn$1(
                `Invalid event arguments: event validation failed for event "${event}".`
              );
            }
          }
        }
      }
    }
    let args = rawArgs;
    const isModelListener2 = event.startsWith("update:");
    const modifiers = isModelListener2 && getModelModifiers(props, event.slice(7));
    if (modifiers) {
      if (modifiers.trim) {
        args = rawArgs.map((a) => isString(a) ? a.trim() : a);
      }
      if (modifiers.number) {
        args = rawArgs.map(looseToNumber);
      }
    }
    if (true) {
      devtoolsComponentEmit(instance, event, args);
    }
    if (true) {
      const lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
        warn$1(
          `Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(
            instance,
            instance.type
          )} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(
            event
          )}" instead of "${event}".`
        );
      }
    }
    let handlerName;
    let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
    props[handlerName = toHandlerKey(camelize(event))];
    if (!handler && isModelListener2) {
      handler = props[handlerName = toHandlerKey(hyphenate(event))];
    }
    if (handler) {
      callWithAsyncErrorHandling(
        handler,
        instance,
        6,
        args
      );
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
      if (!instance.emitted) {
        instance.emitted = {};
      } else if (instance.emitted[handlerName]) {
        return;
      }
      instance.emitted[handlerName] = true;
      callWithAsyncErrorHandling(
        onceHandler,
        instance,
        6,
        args
      );
    }
  }
  function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) {
      return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendEmits = (raw2) => {
        const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
        if (normalizedFromExtend) {
          hasExtends = true;
          extend(normalized, normalizedFromExtend);
        }
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendEmits);
      }
      if (comp.extends) {
        extendEmits(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendEmits);
      }
    }
    if (!raw && !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, null);
      }
      return null;
    }
    if (isArray(raw)) {
      raw.forEach((key) => normalized[key] = null);
    } else {
      extend(normalized, raw);
    }
    if (isObject(comp)) {
      cache.set(comp, normalized);
    }
    return normalized;
  }
  function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
      return false;
    }
    key = key.slice(2).replace(/Once$/, "");
    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
  }
  var accessedAttrs = false;
  function markAttrsAccessed() {
    accessedAttrs = true;
  }
  function renderComponentRoot(instance) {
    const {
      type: Component,
      vnode,
      proxy,
      withProxy,
      propsOptions: [propsOptions],
      slots,
      attrs,
      emit: emit2,
      render: render2,
      renderCache,
      props,
      data,
      setupState,
      ctx,
      inheritAttrs
    } = instance;
    const prev = setCurrentRenderingInstance(instance);
    let result;
    let fallthroughAttrs;
    if (true) {
      accessedAttrs = false;
    }
    try {
      if (vnode.shapeFlag & 4) {
        const proxyToUse = withProxy || proxy;
        const thisProxy = setupState.__isScriptSetup ? new Proxy(proxyToUse, {
          get(target, key, receiver) {
            warn$1(
              `Property '${String(
                key
              )}' was accessed via 'this'. Avoid using 'this' in templates.`
            );
            return Reflect.get(target, key, receiver);
          }
        }) : proxyToUse;
        result = normalizeVNode(
          render2.call(
            thisProxy,
            proxyToUse,
            renderCache,
            true ? shallowReadonly(props) : props,
            setupState,
            data,
            ctx
          )
        );
        fallthroughAttrs = attrs;
      } else {
        const render22 = Component;
        if (attrs === props) {
          markAttrsAccessed();
        }
        result = normalizeVNode(
          render22.length > 1 ? render22(
            true ? shallowReadonly(props) : props,
            true ? {
              get attrs() {
                markAttrsAccessed();
                return shallowReadonly(attrs);
              },
              slots,
              emit: emit2
            } : { attrs, slots, emit: emit2 }
          ) : render22(
            true ? shallowReadonly(props) : props,
            null
          )
        );
        fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
      }
    } catch (err) {
      blockStack.length = 0;
      handleError(err, instance, 1);
      result = createVNode(Comment);
    }
    let root = result;
    let setRoot = void 0;
    if (result.patchFlag > 0 && result.patchFlag & 2048) {
      [root, setRoot] = getChildRoot(result);
    }
    if (fallthroughAttrs && inheritAttrs !== false) {
      const keys = Object.keys(fallthroughAttrs);
      const { shapeFlag } = root;
      if (keys.length) {
        if (shapeFlag & (1 | 6)) {
          if (propsOptions && keys.some(isModelListener)) {
            fallthroughAttrs = filterModelListeners(
              fallthroughAttrs,
              propsOptions
            );
          }
          root = cloneVNode(root, fallthroughAttrs, false, true);
        } else if (!accessedAttrs && root.type !== Comment) {
          const allAttrs = Object.keys(attrs);
          const eventAttrs = [];
          const extraAttrs = [];
          for (let i = 0, l = allAttrs.length; i < l; i++) {
            const key = allAttrs[i];
            if (isOn(key)) {
              if (!isModelListener(key)) {
                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
              }
            } else {
              extraAttrs.push(key);
            }
          }
          if (extraAttrs.length) {
            warn$1(
              `Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
            );
          }
          if (eventAttrs.length) {
            warn$1(
              `Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
            );
          }
        }
      }
    }
    if (vnode.dirs) {
      if (!isElementRoot(root)) {
        warn$1(
          `Runtime directive used on component with non-element root node. The directives will not function as intended.`
        );
      }
      root = cloneVNode(root, null, false, true);
      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
      if (!isElementRoot(root)) {
        warn$1(
          `Component inside <Transition> renders non-element root node that cannot be animated.`
        );
      }
      setTransitionHooks(root, vnode.transition);
    }
    if (setRoot) {
      setRoot(root);
    } else {
      result = root;
    }
    setCurrentRenderingInstance(prev);
    return result;
  }
  var getChildRoot = (vnode) => {
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren, false);
    if (!childRoot) {
      return [vnode, void 0];
    } else if (childRoot.patchFlag > 0 && childRoot.patchFlag & 2048) {
      return getChildRoot(childRoot);
    }
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot) => {
      rawChildren[index] = updatedRoot;
      if (dynamicChildren) {
        if (dynamicIndex > -1) {
          dynamicChildren[dynamicIndex] = updatedRoot;
        } else if (updatedRoot.patchFlag > 0) {
          vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
        }
      }
    };
    return [normalizeVNode(childRoot), setRoot];
  };
  function filterSingleRoot(children, recurse = true) {
    let singleRoot;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (isVNode(child)) {
        if (child.type !== Comment || child.children === "v-if") {
          if (singleRoot) {
            return;
          } else {
            singleRoot = child;
            if (recurse && singleRoot.patchFlag > 0 && singleRoot.patchFlag & 2048) {
              return filterSingleRoot(singleRoot.children);
            }
          }
        }
      } else {
        return;
      }
    }
    return singleRoot;
  }
  var getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
      if (key === "class" || key === "style" || isOn(key)) {
        (res || (res = {}))[key] = attrs[key];
      }
    }
    return res;
  };
  var filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
      if (!isModelListener(key) || !(key.slice(9) in props)) {
        res[key] = attrs[key];
      }
    }
    return res;
  };
  var isElementRoot = (vnode) => {
    return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
  };
  function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if ((prevChildren || nextChildren) && isHmrUpdating) {
      return true;
    }
    if (nextVNode.dirs || nextVNode.transition) {
      return true;
    }
    if (optimized && patchFlag >= 0) {
      if (patchFlag & 1024) {
        return true;
      }
      if (patchFlag & 16) {
        if (!prevProps) {
          return !!nextProps;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8) {
        const dynamicProps = nextVNode.dynamicProps;
        for (let i = 0; i < dynamicProps.length; i++) {
          const key = dynamicProps[i];
          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
    } else {
      if (prevChildren || nextChildren) {
        if (!nextChildren || !nextChildren.$stable) {
          return true;
        }
      }
      if (prevProps === nextProps) {
        return false;
      }
      if (!prevProps) {
        return !!nextProps;
      }
      if (!nextProps) {
        return true;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
  }
  function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
      return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
      const key = nextKeys[i];
      if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
        return true;
      }
    }
    return false;
  }
  function updateHOCHostEl({ vnode, parent }, el) {
    while (parent) {
      const root = parent.subTree;
      if (root.suspense && root.suspense.activeBranch === vnode) {
        root.el = vnode.el;
      }
      if (root === vnode) {
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
      } else {
        break;
      }
    }
  }
  var isSuspense = (type) => type.__isSuspense;
  var suspenseId = 0;
  var SuspenseImpl = {
    name: "Suspense",
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
      if (n1 == null) {
        mountSuspense(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized,
          rendererInternals
        );
      } else {
        if (parentSuspense && parentSuspense.deps > 0 && !n1.suspense.isInFallback) {
          n2.suspense = n1.suspense;
          n2.suspense.vnode = n2;
          n2.el = n1.el;
          return;
        }
        patchSuspense(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          namespace,
          slotScopeIds,
          optimized,
          rendererInternals
        );
      }
    },
    hydrate: hydrateSuspense,
    normalize: normalizeSuspenseChildren
  };
  var Suspense = SuspenseImpl;
  function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if (isFunction(eventListener)) {
      eventListener();
    }
  }
  function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
    const {
      p: patch,
      o: { createElement }
    } = rendererInternals;
    const hiddenContainer = createElement("div");
    const suspense = vnode.suspense = createSuspenseBoundary(
      vnode,
      parentSuspense,
      parentComponent,
      container,
      hiddenContainer,
      anchor,
      namespace,
      slotScopeIds,
      optimized,
      rendererInternals
    );
    patch(
      null,
      suspense.pendingBranch = vnode.ssContent,
      hiddenContainer,
      null,
      parentComponent,
      suspense,
      namespace,
      slotScopeIds
    );
    if (suspense.deps > 0) {
      triggerEvent(vnode, "onPending");
      triggerEvent(vnode, "onFallback");
      patch(
        null,
        vnode.ssFallback,
        container,
        anchor,
        parentComponent,
        null,
        // fallback tree will not have suspense context
        namespace,
        slotScopeIds
      );
      setActiveBranch(suspense, vnode.ssFallback);
    } else {
      suspense.resolve(false, true);
    }
  }
  function patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = n2.suspense = n1.suspense;
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
      suspense.pendingBranch = newBranch;
      if (isSameVNodeType(newBranch, pendingBranch)) {
        patch(
          pendingBranch,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else if (isInFallback) {
          if (!isHydrating) {
            patch(
              activeBranch,
              newFallback,
              container,
              anchor,
              parentComponent,
              null,
              // fallback tree will not have suspense context
              namespace,
              slotScopeIds,
              optimized
            );
            setActiveBranch(suspense, newFallback);
          }
        }
      } else {
        suspense.pendingId = suspenseId++;
        if (isHydrating) {
          suspense.isHydrating = false;
          suspense.activeBranch = pendingBranch;
        } else {
          unmount(pendingBranch, parentComponent, suspense);
        }
        suspense.deps = 0;
        suspense.effects.length = 0;
        suspense.hiddenContainer = createElement("div");
        if (isInFallback) {
          patch(
            null,
            newBranch,
            suspense.hiddenContainer,
            null,
            parentComponent,
            suspense,
            namespace,
            slotScopeIds,
            optimized
          );
          if (suspense.deps <= 0) {
            suspense.resolve();
          } else {
            patch(
              activeBranch,
              newFallback,
              container,
              anchor,
              parentComponent,
              null,
              // fallback tree will not have suspense context
              namespace,
              slotScopeIds,
              optimized
            );
            setActiveBranch(suspense, newFallback);
          }
        } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
          patch(
            activeBranch,
            newBranch,
            container,
            anchor,
            parentComponent,
            suspense,
            namespace,
            slotScopeIds,
            optimized
          );
          suspense.resolve(true);
        } else {
          patch(
            null,
            newBranch,
            suspense.hiddenContainer,
            null,
            parentComponent,
            suspense,
            namespace,
            slotScopeIds,
            optimized
          );
          if (suspense.deps <= 0) {
            suspense.resolve();
          }
        }
      }
    } else {
      if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        patch(
          activeBranch,
          newBranch,
          container,
          anchor,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        setActiveBranch(suspense, newBranch);
      } else {
        triggerEvent(n2, "onPending");
        suspense.pendingBranch = newBranch;
        if (newBranch.shapeFlag & 512) {
          suspense.pendingId = newBranch.component.suspenseId;
        } else {
          suspense.pendingId = suspenseId++;
        }
        patch(
          null,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          const { timeout, pendingId } = suspense;
          if (timeout > 0) {
            setTimeout(() => {
              if (suspense.pendingId === pendingId) {
                suspense.fallback(newFallback);
              }
            }, timeout);
          } else if (timeout === 0) {
            suspense.fallback(newFallback);
          }
        }
      }
    }
  }
  var hasWarned = false;
  function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    if (!hasWarned) {
      hasWarned = true;
      console[console.info ? "info" : "log"](
        `<Suspense> is an experimental feature and its API will likely change.`
      );
    }
    const {
      p: patch,
      m: move,
      um: unmount,
      n: next,
      o: { parentNode, remove: remove2 }
    } = rendererInternals;
    let parentSuspenseId;
    const isSuspensible = isVNodeSuspensible(vnode);
    if (isSuspensible) {
      if (parentSuspense && parentSuspense.pendingBranch) {
        parentSuspenseId = parentSuspense.pendingId;
        parentSuspense.deps++;
      }
    }
    const timeout = vnode.props ? toNumber(vnode.props.timeout) : void 0;
    if (true) {
      assertNumber(timeout, `Suspense timeout`);
    }
    const initialAnchor = anchor;
    const suspense = {
      vnode,
      parent: parentSuspense,
      parentComponent,
      namespace,
      container,
      hiddenContainer,
      deps: 0,
      pendingId: suspenseId++,
      timeout: typeof timeout === "number" ? timeout : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !isHydrating,
      isHydrating,
      isUnmounted: false,
      effects: [],
      resolve(resume = false, sync = false) {
        if (true) {
          if (!resume && !suspense.pendingBranch) {
            throw new Error(
              `suspense.resolve() is called without a pending branch.`
            );
          }
          if (suspense.isUnmounted) {
            throw new Error(
              `suspense.resolve() is called on an already unmounted suspense boundary.`
            );
          }
        }
        const {
          vnode: vnode2,
          activeBranch,
          pendingBranch,
          pendingId,
          effects,
          parentComponent: parentComponent2,
          container: container2
        } = suspense;
        let delayEnter = false;
        if (suspense.isHydrating) {
          suspense.isHydrating = false;
        } else if (!resume) {
          delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
          if (delayEnter) {
            activeBranch.transition.afterLeave = () => {
              if (pendingId === suspense.pendingId) {
                move(
                  pendingBranch,
                  container2,
                  anchor === initialAnchor ? next(activeBranch) : anchor,
                  0
                );
                queuePostFlushCb(effects);
              }
            };
          }
          if (activeBranch) {
            if (parentNode(activeBranch.el) === container2) {
              anchor = next(activeBranch);
            }
            unmount(activeBranch, parentComponent2, suspense, true);
          }
          if (!delayEnter) {
            move(pendingBranch, container2, anchor, 0);
          }
        }
        setActiveBranch(suspense, pendingBranch);
        suspense.pendingBranch = null;
        suspense.isInFallback = false;
        let parent = suspense.parent;
        let hasUnresolvedAncestor = false;
        while (parent) {
          if (parent.pendingBranch) {
            parent.effects.push(...effects);
            hasUnresolvedAncestor = true;
            break;
          }
          parent = parent.parent;
        }
        if (!hasUnresolvedAncestor && !delayEnter) {
          queuePostFlushCb(effects);
        }
        suspense.effects = [];
        if (isSuspensible) {
          if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0 && !sync) {
              parentSuspense.resolve();
            }
          }
        }
        triggerEvent(vnode2, "onResolve");
      },
      fallback(fallbackVNode) {
        if (!suspense.pendingBranch) {
          return;
        }
        const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, namespace: namespace2 } = suspense;
        triggerEvent(vnode2, "onFallback");
        const anchor2 = next(activeBranch);
        const mountFallback = () => {
          if (!suspense.isInFallback) {
            return;
          }
          patch(
            null,
            fallbackVNode,
            container2,
            anchor2,
            parentComponent2,
            null,
            // fallback tree will not have suspense context
            namespace2,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, fallbackVNode);
        };
        const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
        if (delayEnter) {
          activeBranch.transition.afterLeave = mountFallback;
        }
        suspense.isInFallback = true;
        unmount(
          activeBranch,
          parentComponent2,
          null,
          // no suspense so unmount hooks fire now
          true
          // shouldRemove
        );
        if (!delayEnter) {
          mountFallback();
        }
      },
      move(container2, anchor2, type) {
        suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
        suspense.container = container2;
      },
      next() {
        return suspense.activeBranch && next(suspense.activeBranch);
      },
      registerDep(instance, setupRenderEffect, optimized2) {
        const isInPendingSuspense = !!suspense.pendingBranch;
        if (isInPendingSuspense) {
          suspense.deps++;
        }
        const hydratedEl = instance.vnode.el;
        instance.asyncDep.catch((err) => {
          handleError(err, instance, 0);
        }).then((asyncSetupResult) => {
          if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
            return;
          }
          instance.asyncResolved = true;
          const { vnode: vnode2 } = instance;
          if (true) {
            pushWarningContext(vnode2);
          }
          handleSetupResult(instance, asyncSetupResult, false);
          if (hydratedEl) {
            vnode2.el = hydratedEl;
          }
          const placeholder = !hydratedEl && instance.subTree.el;
          setupRenderEffect(
            instance,
            vnode2,
            // component may have been moved before resolve.
            // if this is not a hydration, instance.subTree will be the comment
            // placeholder.
            parentNode(hydratedEl || instance.subTree.el),
            // anchor will not be used if this is hydration, so only need to
            // consider the comment placeholder case.
            hydratedEl ? null : next(instance.subTree),
            suspense,
            namespace,
            optimized2
          );
          if (placeholder) {
            remove2(placeholder);
          }
          updateHOCHostEl(instance, vnode2.el);
          if (true) {
            popWarningContext();
          }
          if (isInPendingSuspense && --suspense.deps === 0) {
            suspense.resolve();
          }
        });
      },
      unmount(parentSuspense2, doRemove) {
        suspense.isUnmounted = true;
        if (suspense.activeBranch) {
          unmount(
            suspense.activeBranch,
            parentComponent,
            parentSuspense2,
            doRemove
          );
        }
        if (suspense.pendingBranch) {
          unmount(
            suspense.pendingBranch,
            parentComponent,
            parentSuspense2,
            doRemove
          );
        }
      }
    };
    return suspense;
  }
  function hydrateSuspense(node, vnode, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    const suspense = vnode.suspense = createSuspenseBoundary(
      vnode,
      parentSuspense,
      parentComponent,
      node.parentNode,
      // eslint-disable-next-line no-restricted-globals
      document.createElement("div"),
      null,
      namespace,
      slotScopeIds,
      optimized,
      rendererInternals,
      true
    );
    const result = hydrateNode(
      node,
      suspense.pendingBranch = vnode.ssContent,
      parentComponent,
      suspense,
      slotScopeIds,
      optimized
    );
    if (suspense.deps === 0) {
      suspense.resolve(false, true);
    }
    return result;
  }
  function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    const isSlotChildren = shapeFlag & 32;
    vnode.ssContent = normalizeSuspenseSlot(
      isSlotChildren ? children.default : children
    );
    vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
  }
  function normalizeSuspenseSlot(s) {
    let block;
    if (isFunction(s)) {
      const trackBlock = isBlockTreeEnabled && s._c;
      if (trackBlock) {
        s._d = false;
        openBlock();
      }
      s = s();
      if (trackBlock) {
        s._d = true;
        block = currentBlock;
        closeBlock();
      }
    }
    if (isArray(s)) {
      const singleChild = filterSingleRoot(s);
      if (!singleChild && s.filter((child) => child !== NULL_DYNAMIC_COMPONENT).length > 0) {
        warn$1(`<Suspense> slots expect a single root node.`);
      }
      s = singleChild;
    }
    s = normalizeVNode(s);
    if (block && !s.dynamicChildren) {
      s.dynamicChildren = block.filter((c) => c !== s);
    }
    return s;
  }
  function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
      if (isArray(fn)) {
        suspense.effects.push(...fn);
      } else {
        suspense.effects.push(fn);
      }
    } else {
      queuePostFlushCb(fn);
    }
  }
  function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    let el = branch.el;
    while (!el && branch.component) {
      branch = branch.component.subTree;
      el = branch.el;
    }
    vnode.el = el;
    if (parentComponent && parentComponent.subTree === vnode) {
      parentComponent.vnode.el = el;
      updateHOCHostEl(parentComponent, el);
    }
  }
  function isVNodeSuspensible(vnode) {
    const suspensible = vnode.props && vnode.props.suspensible;
    return suspensible != null && suspensible !== false;
  }
  var Fragment = Symbol.for("v-fgt");
  var Text = Symbol.for("v-txt");
  var Comment = Symbol.for("v-cmt");
  var Static = Symbol.for("v-stc");
  var blockStack = [];
  var currentBlock = null;
  function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
  }
  function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
  }
  var isBlockTreeEnabled = 1;
  function setBlockTracking(value, inVOnce = false) {
    isBlockTreeEnabled += value;
    if (value < 0 && currentBlock && inVOnce) {
      currentBlock.hasOnce = true;
    }
  }
  function setupBlock(vnode) {
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
    closeBlock();
    if (isBlockTreeEnabled > 0 && currentBlock) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(
      createBaseVNode(
        type,
        props,
        children,
        patchFlag,
        dynamicProps,
        shapeFlag,
        true
      )
    );
  }
  function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(
      createVNode(
        type,
        props,
        children,
        patchFlag,
        dynamicProps,
        true
      )
    );
  }
  function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
  }
  function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 && n1.component) {
      const dirtyInstances = hmrDirtyComponents.get(n2.type);
      if (dirtyInstances && dirtyInstances.has(n1.component)) {
        n1.shapeFlag &= -257;
        n2.shapeFlag &= -513;
        return false;
      }
    }
    return n1.type === n2.type && n1.key === n2.key;
  }
  var vnodeArgsTransformer;
  function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
  }
  var createVNodeWithArgsTransform = (...args) => {
    return _createVNode(
      ...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args
    );
  };
  var normalizeKey = ({ key }) => key != null ? key : null;
  var normalizeRef = ({
    ref: ref2,
    ref_key,
    ref_for
  }) => {
    if (typeof ref2 === "number") {
      ref2 = "" + ref2;
    }
    return ref2 != null ? isString(ref2) || isRef2(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
  };
  function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
      __v_isVNode: true,
      __v_skip: true,
      type,
      props,
      key: props && normalizeKey(props),
      ref: props && normalizeRef(props),
      scopeId: currentScopeId,
      slotScopeIds: null,
      children,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetStart: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag,
      patchFlag,
      dynamicProps,
      dynamicChildren: null,
      appContext: null,
      ctx: currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
      normalizeChildren(vnode, children);
      if (shapeFlag & 128) {
        type.normalize(vnode);
      }
    } else if (children) {
      vnode.shapeFlag |= isString(children) ? 8 : 16;
    }
    if (vnode.key !== vnode.key) {
      warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    }
    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  var createVNode = true ? createVNodeWithArgsTransform : _createVNode;
  function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
      if (!type) {
        warn$1(`Invalid vnode type when creating vnode: ${type}.`);
      }
      type = Comment;
    }
    if (isVNode(type)) {
      const cloned = cloneVNode(
        type,
        props,
        true
        /* mergeRef: true */
      );
      if (children) {
        normalizeChildren(cloned, children);
      }
      if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
        if (cloned.shapeFlag & 6) {
          currentBlock[currentBlock.indexOf(type)] = cloned;
        } else {
          currentBlock.push(cloned);
        }
      }
      cloned.patchFlag = -2;
      return cloned;
    }
    if (isClassComponent(type)) {
      type = type.__vccOpts;
    }
    if (props) {
      props = guardReactiveProps(props);
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
      }
      if (isObject(style)) {
        if (isProxy(style) && !isArray(style)) {
          style = extend({}, style);
        }
        props.style = normalizeStyle(style);
      }
    }
    const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
    if (shapeFlag & 4 && isProxy(type)) {
      type = toRaw(type);
      warn$1(
        `Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`,
        `
Component that was made reactive: `,
        type
      );
    }
    return createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      isBlockNode,
      true
    );
  }
  function guardReactiveProps(props) {
    if (!props) return null;
    return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
  }
  function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
    const { props, ref: ref2, patchFlag, children, transition } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
      __v_isVNode: true,
      __v_skip: true,
      type: vnode.type,
      props: mergedProps,
      key: mergedProps && normalizeKey(mergedProps),
      ref: extraProps && extraProps.ref ? (
        // #2078 in the case of <component :is="vnode" ref="extra"/>
        // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
      ) : ref2,
      scopeId: vnode.scopeId,
      slotScopeIds: vnode.slotScopeIds,
      children: patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
      target: vnode.target,
      targetStart: vnode.targetStart,
      targetAnchor: vnode.targetAnchor,
      staticCount: vnode.staticCount,
      shapeFlag: vnode.shapeFlag,
      // if the vnode is cloned with extra props, we can no longer assume its
      // existing patch flag to be reliable and need to add the FULL_PROPS flag.
      // note: preserve flag for fragments since they use the flag for children
      // fast paths only.
      patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
      dynamicProps: vnode.dynamicProps,
      dynamicChildren: vnode.dynamicChildren,
      appContext: vnode.appContext,
      dirs: vnode.dirs,
      transition,
      // These should technically only be non-null on mounted VNodes. However,
      // they *should* be copied for kept-alive vnodes. So we just always copy
      // them since them being non-null during a mount doesn't affect the logic as
      // they will simply be overwritten.
      component: vnode.component,
      suspense: vnode.suspense,
      ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
      ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
      el: vnode.el,
      anchor: vnode.anchor,
      ctx: vnode.ctx,
      ce: vnode.ce
    };
    if (transition && cloneTransition) {
      setTransitionHooks(
        cloned,
        transition.clone(cloned)
      );
    }
    return cloned;
  }
  function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (isArray(vnode.children)) {
      cloned.children = vnode.children.map(deepCloneVNode);
    }
    return cloned;
  }
  function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
  }
  function createStaticVNode(content, numberOfNodes) {
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
  }
  function createCommentVNode(text = "", asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
  }
  function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") {
      return createVNode(Comment);
    } else if (isArray(child)) {
      return createVNode(
        Fragment,
        null,
        // #3666, avoid reference pollution when reusing vnode
        child.slice()
      );
    } else if (isVNode(child)) {
      return cloneIfMounted(child);
    } else {
      return createVNode(Text, null, String(child));
    }
  }
  function cloneIfMounted(child) {
    return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
  }
  function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
      children = null;
    } else if (isArray(children)) {
      type = 16;
    } else if (typeof children === "object") {
      if (shapeFlag & (1 | 64)) {
        const slot = children.default;
        if (slot) {
          slot._c && (slot._d = false);
          normalizeChildren(vnode, slot());
          slot._c && (slot._d = true);
        }
        return;
      } else {
        type = 32;
        const slotFlag = children._;
        if (!slotFlag && !isInternalObject(children)) {
          children._ctx = currentRenderingInstance;
        } else if (slotFlag === 3 && currentRenderingInstance) {
          if (currentRenderingInstance.slots._ === 1) {
            children._ = 1;
          } else {
            children._ = 2;
            vnode.patchFlag |= 1024;
          }
        }
      }
    } else if (isFunction(children)) {
      children = { default: children, _ctx: currentRenderingInstance };
      type = 32;
    } else {
      children = String(children);
      if (shapeFlag & 64) {
        type = 16;
        children = [createTextVNode(children)];
      } else {
        type = 8;
      }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
  }
  function mergeProps(...args) {
    const ret = {};
    for (let i = 0; i < args.length; i++) {
      const toMerge = args[i];
      for (const key in toMerge) {
        if (key === "class") {
          if (ret.class !== toMerge.class) {
            ret.class = normalizeClass([ret.class, toMerge.class]);
          }
        } else if (key === "style") {
          ret.style = normalizeStyle([ret.style, toMerge.style]);
        } else if (isOn(key)) {
          const existing = ret[key];
          const incoming = toMerge[key];
          if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
            ret[key] = existing ? [].concat(existing, incoming) : incoming;
          }
        } else if (key !== "") {
          ret[key] = toMerge[key];
        }
      }
    }
    return ret;
  }
  function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7, [
      vnode,
      prevVNode
    ]);
  }
  var emptyAppContext = createAppContext();
  var uid = 0;
  function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
      uid: uid++,
      vnode,
      type,
      parent,
      appContext,
      root: null,
      // to be immediately set
      next: null,
      subTree: null,
      // will be set synchronously right after creation
      effect: null,
      update: null,
      // will be set synchronously right after creation
      job: null,
      scope: new EffectScope(
        true
        /* detached */
      ),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: parent ? parent.provides : Object.create(appContext.provides),
      ids: parent ? parent.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      // local resolved assets
      components: null,
      directives: null,
      // resolved props and emits options
      propsOptions: normalizePropsOptions(type, appContext),
      emitsOptions: normalizeEmitsOptions(type, appContext),
      // emit
      emit: null,
      // to be set immediately
      emitted: null,
      // props default value
      propsDefaults: EMPTY_OBJ,
      // inheritAttrs
      inheritAttrs: type.inheritAttrs,
      // state
      ctx: EMPTY_OBJ,
      data: EMPTY_OBJ,
      props: EMPTY_OBJ,
      attrs: EMPTY_OBJ,
      slots: EMPTY_OBJ,
      refs: EMPTY_OBJ,
      setupState: EMPTY_OBJ,
      setupContext: null,
      // suspense related
      suspense,
      suspenseId: suspense ? suspense.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      // lifecycle hooks
      // not using enums here because it results in computed properties
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    if (true) {
      instance.ctx = createDevRenderContext(instance);
    } else {
      instance.ctx = { _: instance };
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    if (vnode.ce) {
      vnode.ce(instance);
    }
    return instance;
  }
  var currentInstance = null;
  var getCurrentInstance = () => currentInstance || currentRenderingInstance;
  var internalSetCurrentInstance;
  var setInSSRSetupState;
  {
    const g = getGlobalThis();
    const registerGlobalSetter = (key, setter) => {
      let setters;
      if (!(setters = g[key])) setters = g[key] = [];
      setters.push(setter);
      return (v) => {
        if (setters.length > 1) setters.forEach((set) => set(v));
        else setters[0](v);
      };
    };
    internalSetCurrentInstance = registerGlobalSetter(
      `__VUE_INSTANCE_SETTERS__`,
      (v) => currentInstance = v
    );
    setInSSRSetupState = registerGlobalSetter(
      `__VUE_SSR_SETTERS__`,
      (v) => isInSSRComponentSetup = v
    );
  }
  var setCurrentInstance = (instance) => {
    const prev = currentInstance;
    internalSetCurrentInstance(instance);
    instance.scope.on();
    return () => {
      instance.scope.off();
      internalSetCurrentInstance(prev);
    };
  };
  var unsetCurrentInstance = () => {
    currentInstance && currentInstance.scope.off();
    internalSetCurrentInstance(null);
  };
  var isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
  function validateComponentName(name, { isNativeTag }) {
    if (isBuiltInTag(name) || isNativeTag(name)) {
      warn$1(
        "Do not use built-in or reserved HTML elements as component id: " + name
      );
    }
  }
  function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
  }
  var isInSSRComponentSetup = false;
  function setupComponent(instance, isSSR = false, optimized = false) {
    isSSR && setInSSRSetupState(isSSR);
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children, optimized || isSSR);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
    isSSR && setInSSRSetupState(false);
    return setupResult;
  }
  function setupStatefulComponent(instance, isSSR) {
    var _a;
    const Component = instance.type;
    if (true) {
      if (Component.name) {
        validateComponentName(Component.name, instance.appContext.config);
      }
      if (Component.components) {
        const names = Object.keys(Component.components);
        for (let i = 0; i < names.length; i++) {
          validateComponentName(names[i], instance.appContext.config);
        }
      }
      if (Component.directives) {
        const names = Object.keys(Component.directives);
        for (let i = 0; i < names.length; i++) {
          validateDirectiveName(names[i]);
        }
      }
      if (Component.compilerOptions && isRuntimeOnly()) {
        warn$1(
          `"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`
        );
      }
    }
    instance.accessCache = /* @__PURE__ */ Object.create(null);
    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
    if (true) {
      exposePropsOnRenderContext(instance);
    }
    const { setup } = Component;
    if (setup) {
      pauseTracking();
      const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
      const reset2 = setCurrentInstance(instance);
      const setupResult = callWithErrorHandling(
        setup,
        instance,
        0,
        [
          true ? shallowReadonly(instance.props) : instance.props,
          setupContext
        ]
      );
      const isAsyncSetup = isPromise(setupResult);
      resetTracking();
      reset2();
      if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
        markAsyncBoundary(instance);
      }
      if (isAsyncSetup) {
        setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
        if (isSSR) {
          return setupResult.then((resolvedResult) => {
            handleSetupResult(instance, resolvedResult, isSSR);
          }).catch((e) => {
            handleError(e, instance, 0);
          });
        } else {
          instance.asyncDep = setupResult;
          if (!instance.suspense) {
            const name = (_a = Component.name) != null ? _a : "Anonymous";
            warn$1(
              `Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
            );
          }
        }
      } else {
        handleSetupResult(instance, setupResult, isSSR);
      }
    } else {
      finishComponentSetup(instance, isSSR);
    }
  }
  function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction(setupResult)) {
      if (instance.type.__ssrInlineRender) {
        instance.ssrRender = setupResult;
      } else {
        instance.render = setupResult;
      }
    } else if (isObject(setupResult)) {
      if (isVNode(setupResult)) {
        warn$1(
          `setup() should not return VNodes directly - return a render function instead.`
        );
      }
      if (true) {
        instance.devtoolsRawSetupState = setupResult;
      }
      instance.setupState = proxyRefs(setupResult);
      if (true) {
        exposeSetupStateOnRenderContext(instance);
      }
    } else if (setupResult !== void 0) {
      warn$1(
        `setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`
      );
    }
    finishComponentSetup(instance, isSSR);
  }
  var compile;
  var installWithProxy;
  function registerRuntimeCompiler(_compile) {
    compile = _compile;
    installWithProxy = (i) => {
      if (i.render._rc) {
        i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
      }
    };
  }
  var isRuntimeOnly = () => !compile;
  function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
      if (!isSSR && compile && !Component.render) {
        const template8 = Component.template || resolveMergedOptions(instance).template;
        if (template8) {
          if (true) {
            startMeasure(instance, `compile`);
          }
          const { isCustomElement, compilerOptions } = instance.appContext.config;
          const { delimiters, compilerOptions: componentCompilerOptions } = Component;
          const finalCompilerOptions = extend(
            extend(
              {
                isCustomElement,
                delimiters
              },
              compilerOptions
            ),
            componentCompilerOptions
          );
          Component.render = compile(template8, finalCompilerOptions);
          if (true) {
            endMeasure(instance, `compile`);
          }
        }
      }
      instance.render = Component.render || NOOP;
      if (installWithProxy) {
        installWithProxy(instance);
      }
    }
    if (true) {
      const reset2 = setCurrentInstance(instance);
      pauseTracking();
      try {
        applyOptions(instance);
      } finally {
        resetTracking();
        reset2();
      }
    }
    if (!Component.render && instance.render === NOOP && !isSSR) {
      if (!compile && Component.template) {
        warn$1(
          `Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
        );
      } else {
        warn$1(`Component is missing template or render function: `, Component);
      }
    }
  }
  var attrsProxyHandlers = true ? {
    get(target, key) {
      markAttrsAccessed();
      track(target, "get", "");
      return target[key];
    },
    set() {
      warn$1(`setupContext.attrs is readonly.`);
      return false;
    },
    deleteProperty() {
      warn$1(`setupContext.attrs is readonly.`);
      return false;
    }
  } : {
    get(target, key) {
      track(target, "get", "");
      return target[key];
    }
  };
  function getSlotsProxy(instance) {
    return new Proxy(instance.slots, {
      get(target, key) {
        track(instance, "get", "$slots");
        return target[key];
      }
    });
  }
  function createSetupContext(instance) {
    const expose = (exposed) => {
      if (true) {
        if (instance.exposed) {
          warn$1(`expose() should be called only once per setup().`);
        }
        if (exposed != null) {
          let exposedType = typeof exposed;
          if (exposedType === "object") {
            if (isArray(exposed)) {
              exposedType = "array";
            } else if (isRef2(exposed)) {
              exposedType = "ref";
            }
          }
          if (exposedType !== "object") {
            warn$1(
              `expose() should be passed a plain object, received ${exposedType}.`
            );
          }
        }
      }
      instance.exposed = exposed || {};
    };
    if (true) {
      let attrsProxy;
      let slotsProxy;
      return Object.freeze({
        get attrs() {
          return attrsProxy || (attrsProxy = new Proxy(instance.attrs, attrsProxyHandlers));
        },
        get slots() {
          return slotsProxy || (slotsProxy = getSlotsProxy(instance));
        },
        get emit() {
          return (event, ...args) => instance.emit(event, ...args);
        },
        expose
      });
    } else {
      return {
        attrs: new Proxy(instance.attrs, attrsProxyHandlers),
        slots: instance.slots,
        emit: instance.emit,
        expose
      };
    }
  }
  function getComponentPublicInstance(instance) {
    if (instance.exposed) {
      return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
        get(target, key) {
          if (key in target) {
            return target[key];
          } else if (key in publicPropertiesMap) {
            return publicPropertiesMap[key](instance);
          }
        },
        has(target, key) {
          return key in target || key in publicPropertiesMap;
        }
      }));
    } else {
      return instance.proxy;
    }
  }
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
  function getComponentName(Component, includeInferred = true) {
    return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
  }
  function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
      const match = Component.__file.match(/([^/\\]+)\.\w+$/);
      if (match) {
        name = match[1];
      }
    }
    if (!name && instance && instance.parent) {
      const inferFromRegistry = (registry) => {
        for (const key in registry) {
          if (registry[key] === Component) {
            return key;
          }
        }
      };
      name = inferFromRegistry(
        instance.components || instance.parent.type.components
      ) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
  }
  function isClassComponent(value) {
    return isFunction(value) && "__vccOpts" in value;
  }
  var computed2 = (getterOrOptions, debugOptions) => {
    const c = computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
    if (true) {
      const i = getCurrentInstance();
      if (i && i.appContext.config.warnRecursiveComputed) {
        c._warnRecursive = true;
      }
    }
    return c;
  };
  function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
      if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
        if (isVNode(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        return createVNode(type, propsOrChildren);
      } else {
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l > 3) {
        children = Array.prototype.slice.call(arguments, 2);
      } else if (l === 3 && isVNode(children)) {
        children = [children];
      }
      return createVNode(type, propsOrChildren, children);
    }
  }
  function initCustomFormatter() {
    if (typeof window === "undefined") {
      return;
    }
    const vueStyle = { style: "color:#3ba776" };
    const numberStyle = { style: "color:#1677ff" };
    const stringStyle = { style: "color:#f5222d" };
    const keywordStyle = { style: "color:#eb2f96" };
    const formatter = {
      __vue_custom_formatter: true,
      header(obj) {
        if (!isObject(obj)) {
          return null;
        }
        if (obj.__isVue) {
          return ["div", vueStyle, `VueInstance`];
        } else if (isRef2(obj)) {
          pauseTracking();
          const value = obj.value;
          resetTracking();
          return [
            "div",
            {},
            ["span", vueStyle, genRefFlag(obj)],
            "<",
            formatValue(value),
            `>`
          ];
        } else if (isReactive(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
            "<",
            formatValue(obj),
            `>${isReadonly(obj) ? ` (readonly)` : ``}`
          ];
        } else if (isReadonly(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
            "<",
            formatValue(obj),
            ">"
          ];
        }
        return null;
      },
      hasBody(obj) {
        return obj && obj.__isVue;
      },
      body(obj) {
        if (obj && obj.__isVue) {
          return [
            "div",
            {},
            ...formatInstance(obj.$)
          ];
        }
      }
    };
    function formatInstance(instance) {
      const blocks = [];
      if (instance.type.props && instance.props) {
        blocks.push(createInstanceBlock("props", toRaw(instance.props)));
      }
      if (instance.setupState !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("setup", instance.setupState));
      }
      if (instance.data !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("data", toRaw(instance.data)));
      }
      const computed3 = extractKeys(instance, "computed");
      if (computed3) {
        blocks.push(createInstanceBlock("computed", computed3));
      }
      const injected = extractKeys(instance, "inject");
      if (injected) {
        blocks.push(createInstanceBlock("injected", injected));
      }
      blocks.push([
        "div",
        {},
        [
          "span",
          {
            style: keywordStyle.style + ";opacity:0.66"
          },
          "$ (internal): "
        ],
        ["object", { object: instance }]
      ]);
      return blocks;
    }
    function createInstanceBlock(type, target) {
      target = extend({}, target);
      if (!Object.keys(target).length) {
        return ["span", {}];
      }
      return [
        "div",
        { style: "line-height:1.25em;margin-bottom:0.6em" },
        [
          "div",
          {
            style: "color:#476582"
          },
          type
        ],
        [
          "div",
          {
            style: "padding-left:1.25em"
          },
          ...Object.keys(target).map((key) => {
            return [
              "div",
              {},
              ["span", keywordStyle, key + ": "],
              formatValue(target[key], false)
            ];
          })
        ]
      ];
    }
    function formatValue(v, asRaw = true) {
      if (typeof v === "number") {
        return ["span", numberStyle, v];
      } else if (typeof v === "string") {
        return ["span", stringStyle, JSON.stringify(v)];
      } else if (typeof v === "boolean") {
        return ["span", keywordStyle, v];
      } else if (isObject(v)) {
        return ["object", { object: asRaw ? toRaw(v) : v }];
      } else {
        return ["span", stringStyle, String(v)];
      }
    }
    function extractKeys(instance, type) {
      const Comp = instance.type;
      if (isFunction(Comp)) {
        return;
      }
      const extracted = {};
      for (const key in instance.ctx) {
        if (isKeyOfType(Comp, key, type)) {
          extracted[key] = instance.ctx[key];
        }
      }
      return extracted;
    }
    function isKeyOfType(Comp, key, type) {
      const opts = Comp[type];
      if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
        return true;
      }
      if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
        return true;
      }
      if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
        return true;
      }
    }
    function genRefFlag(v) {
      if (isShallow(v)) {
        return `ShallowRef`;
      }
      if (v.effect) {
        return `ComputedRef`;
      }
      return `Ref`;
    }
    if (window.devtoolsFormatters) {
      window.devtoolsFormatters.push(formatter);
    } else {
      window.devtoolsFormatters = [formatter];
    }
  }
  function withMemo(memo, render2, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) {
      return cached;
    }
    const ret = render2();
    ret.memo = memo.slice();
    ret.cacheIndex = index;
    return cache[index] = ret;
  }
  function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) {
      return false;
    }
    for (let i = 0; i < prev.length; i++) {
      if (hasChanged(prev[i], memo[i])) {
        return false;
      }
    }
    if (isBlockTreeEnabled > 0 && currentBlock) {
      currentBlock.push(cached);
    }
    return true;
  }
  var version = "3.5.17";
  var warn2 = true ? warn$1 : NOOP;
  var ErrorTypeStrings = ErrorTypeStrings$1;
  var devtools = true ? devtools$1 : void 0;
  var setDevtoolsHook = true ? setDevtoolsHook$1 : NOOP;
  var _ssrUtils = {
    createComponentInstance,
    setupComponent,
    renderComponentRoot,
    setCurrentRenderingInstance,
    isVNode,
    normalizeVNode,
    getComponentPublicInstance,
    ensureValidVNode,
    pushWarningContext,
    popWarningContext
  };
  var ssrUtils = _ssrUtils;
  var resolveFilter = null;
  var compatUtils = null;
  var DeprecationTypes = null;

  // node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
  var policy = void 0;
  var tt = typeof window !== "undefined" && window.trustedTypes;
  if (tt) {
    try {
      policy = /* @__PURE__ */ tt.createPolicy("vue", {
        createHTML: (val) => val
      });
    } catch (e) {
      warn2(`Error creating trusted types policy: ${e}`);
    }
  }
  var unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
  var svgNS = "http://www.w3.org/2000/svg";
  var mathmlNS = "http://www.w3.org/1998/Math/MathML";
  var doc = typeof document !== "undefined" ? document : null;
  var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
  var nodeOps = {
    insert: (child, parent, anchor) => {
      parent.insertBefore(child, anchor || null);
    },
    remove: (child) => {
      const parent = child.parentNode;
      if (parent) {
        parent.removeChild(child);
      }
    },
    createElement: (tag, namespace, is, props) => {
      const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
      if (tag === "select" && props && props.multiple != null) {
        el.setAttribute("multiple", props.multiple);
      }
      return el;
    },
    createText: (text) => doc.createTextNode(text),
    createComment: (text) => doc.createComment(text),
    setText: (node, text) => {
      node.nodeValue = text;
    },
    setElementText: (el, text) => {
      el.textContent = text;
    },
    parentNode: (node) => node.parentNode,
    nextSibling: (node) => node.nextSibling,
    querySelector: (selector) => doc.querySelector(selector),
    setScopeId(el, id) {
      el.setAttribute(id, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, namespace, start, end) {
      const before = anchor ? anchor.previousSibling : parent.lastChild;
      if (start && (start === end || start.nextSibling)) {
        while (true) {
          parent.insertBefore(start.cloneNode(true), anchor);
          if (start === end || !(start = start.nextSibling)) break;
        }
      } else {
        templateContainer.innerHTML = unsafeToTrustedHTML(
          namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content
        );
        const template8 = templateContainer.content;
        if (namespace === "svg" || namespace === "mathml") {
          const wrapper = template8.firstChild;
          while (wrapper.firstChild) {
            template8.appendChild(wrapper.firstChild);
          }
          template8.removeChild(wrapper);
        }
        parent.insertBefore(template8, anchor);
      }
      return [
        // first
        before ? before.nextSibling : parent.firstChild,
        // last
        anchor ? anchor.previousSibling : parent.lastChild
      ];
    }
  };
  var TRANSITION = "transition";
  var ANIMATION = "animation";
  var vtcKey = Symbol("_vtc");
  var DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  };
  var TransitionPropsValidators = /* @__PURE__ */ extend(
    {},
    BaseTransitionPropsValidators,
    DOMTransitionPropsValidators
  );
  var decorate$1 = (t) => {
    t.displayName = "Transition";
    t.props = TransitionPropsValidators;
    return t;
  };
  var Transition = /* @__PURE__ */ decorate$1(
    (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots)
  );
  var callHook2 = (hook, args = []) => {
    if (isArray(hook)) {
      hook.forEach((h2) => h2(...args));
    } else if (hook) {
      hook(...args);
    }
  };
  var hasExplicitCallback = (hook) => {
    return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
  };
  function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for (const key in rawProps) {
      if (!(key in DOMTransitionPropsValidators)) {
        baseProps[key] = rawProps[key];
      }
    }
    if (rawProps.css === false) {
      return baseProps;
    }
    const {
      name = "v",
      type,
      duration,
      enterFromClass = `${name}-enter-from`,
      enterActiveClass = `${name}-enter-active`,
      enterToClass = `${name}-enter-to`,
      appearFromClass = enterFromClass,
      appearActiveClass = enterActiveClass,
      appearToClass = enterToClass,
      leaveFromClass = `${name}-leave-from`,
      leaveActiveClass = `${name}-leave-active`,
      leaveToClass = `${name}-leave-to`
    } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const {
      onBeforeEnter,
      onEnter,
      onEnterCancelled,
      onLeave,
      onLeaveCancelled,
      onBeforeAppear = onBeforeEnter,
      onAppear = onEnter,
      onAppearCancelled = onEnterCancelled
    } = baseProps;
    const finishEnter = (el, isAppear, done, isCancelled) => {
      el._enterCancelled = isCancelled;
      removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
      removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
      done && done();
    };
    const finishLeave = (el, done) => {
      el._isLeaving = false;
      removeTransitionClass(el, leaveFromClass);
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
      done && done();
    };
    const makeEnterHook = (isAppear) => {
      return (el, done) => {
        const hook = isAppear ? onAppear : onEnter;
        const resolve2 = () => finishEnter(el, isAppear, done);
        callHook2(hook, [el, resolve2]);
        nextFrame(() => {
          removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
          addTransitionClass(el, isAppear ? appearToClass : enterToClass);
          if (!hasExplicitCallback(hook)) {
            whenTransitionEnds(el, type, enterDuration, resolve2);
          }
        });
      };
    };
    return extend(baseProps, {
      onBeforeEnter(el) {
        callHook2(onBeforeEnter, [el]);
        addTransitionClass(el, enterFromClass);
        addTransitionClass(el, enterActiveClass);
      },
      onBeforeAppear(el) {
        callHook2(onBeforeAppear, [el]);
        addTransitionClass(el, appearFromClass);
        addTransitionClass(el, appearActiveClass);
      },
      onEnter: makeEnterHook(false),
      onAppear: makeEnterHook(true),
      onLeave(el, done) {
        el._isLeaving = true;
        const resolve2 = () => finishLeave(el, done);
        addTransitionClass(el, leaveFromClass);
        if (!el._enterCancelled) {
          forceReflow();
          addTransitionClass(el, leaveActiveClass);
        } else {
          addTransitionClass(el, leaveActiveClass);
          forceReflow();
        }
        nextFrame(() => {
          if (!el._isLeaving) {
            return;
          }
          removeTransitionClass(el, leaveFromClass);
          addTransitionClass(el, leaveToClass);
          if (!hasExplicitCallback(onLeave)) {
            whenTransitionEnds(el, type, leaveDuration, resolve2);
          }
        });
        callHook2(onLeave, [el, resolve2]);
      },
      onEnterCancelled(el) {
        finishEnter(el, false, void 0, true);
        callHook2(onEnterCancelled, [el]);
      },
      onAppearCancelled(el) {
        finishEnter(el, true, void 0, true);
        callHook2(onAppearCancelled, [el]);
      },
      onLeaveCancelled(el) {
        finishLeave(el);
        callHook2(onLeaveCancelled, [el]);
      }
    });
  }
  function normalizeDuration(duration) {
    if (duration == null) {
      return null;
    } else if (isObject(duration)) {
      return [NumberOf(duration.enter), NumberOf(duration.leave)];
    } else {
      const n = NumberOf(duration);
      return [n, n];
    }
  }
  function NumberOf(val) {
    const res = toNumber(val);
    if (true) {
      assertNumber(res, "<transition> explicit duration");
    }
    return res;
  }
  function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
    (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
  }
  function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
    const _vtc = el[vtcKey];
    if (_vtc) {
      _vtc.delete(cls);
      if (!_vtc.size) {
        el[vtcKey] = void 0;
      }
    }
  }
  function nextFrame(cb) {
    requestAnimationFrame(() => {
      requestAnimationFrame(cb);
    });
  }
  var endId = 0;
  function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
    const id = el._endId = ++endId;
    const resolveIfNotStale = () => {
      if (id === el._endId) {
        resolve2();
      }
    };
    if (explicitTimeout != null) {
      return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
      return resolve2();
    }
    const endEvent = type + "end";
    let ended = 0;
    const end = () => {
      el.removeEventListener(endEvent, onEnd);
      resolveIfNotStale();
    };
    const onEnd = (e) => {
      if (e.target === el && ++ended >= propCount) {
        end();
      }
    };
    setTimeout(() => {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
  }
  function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    const getStyleProperties = (key) => (styles[key] || "").split(", ");
    const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
    const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
    const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
      getStyleProperties(`${TRANSITION}Property`).toString()
    );
    return {
      type,
      timeout,
      propCount,
      hasTransform
    };
  }
  function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
  }
  function toMs(s) {
    if (s === "auto") return 0;
    return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function forceReflow() {
    return document.body.offsetHeight;
  }
  function patchClass(el, value, isSVG) {
    const transitionClasses = el[vtcKey];
    if (transitionClasses) {
      value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
    }
    if (value == null) {
      el.removeAttribute("class");
    } else if (isSVG) {
      el.setAttribute("class", value);
    } else {
      el.className = value;
    }
  }
  var vShowOriginalDisplay = Symbol("_vod");
  var vShowHidden = Symbol("_vsh");
  var vShow = {
    beforeMount(el, { value }, { transition }) {
      el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
      if (transition && value) {
        transition.beforeEnter(el);
      } else {
        setDisplay(el, value);
      }
    },
    mounted(el, { value }, { transition }) {
      if (transition && value) {
        transition.enter(el);
      }
    },
    updated(el, { value, oldValue }, { transition }) {
      if (!value === !oldValue) return;
      if (transition) {
        if (value) {
          transition.beforeEnter(el);
          setDisplay(el, true);
          transition.enter(el);
        } else {
          transition.leave(el, () => {
            setDisplay(el, false);
          });
        }
      } else {
        setDisplay(el, value);
      }
    },
    beforeUnmount(el, { value }) {
      setDisplay(el, value);
    }
  };
  if (true) {
    vShow.name = "show";
  }
  function setDisplay(el, value) {
    el.style.display = value ? el[vShowOriginalDisplay] : "none";
    el[vShowHidden] = !value;
  }
  function initVShowForSSR() {
    vShow.getSSRProps = ({ value }) => {
      if (!value) {
        return { style: { display: "none" } };
      }
    };
  }
  var CSS_VAR_TEXT = Symbol(true ? "CSS_VAR_TEXT" : "");
  function useCssVars(getter) {
    const instance = getCurrentInstance();
    if (!instance) {
      warn2(`useCssVars is called without current active component instance.`);
      return;
    }
    const updateTeleports = instance.ut = (vars = getter(instance.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)
      ).forEach((node) => setVarsOnNode(node, vars));
    };
    if (true) {
      instance.getCssVars = () => getter(instance.proxy);
    }
    const setVars = () => {
      const vars = getter(instance.proxy);
      if (instance.ce) {
        setVarsOnNode(instance.ce, vars);
      } else {
        setVarsOnVNode(instance.subTree, vars);
      }
      updateTeleports(vars);
    };
    onBeforeUpdate(() => {
      queuePostFlushCb(setVars);
    });
    onMounted(() => {
      watch2(setVars, NOOP, { flush: "post" });
      const ob = new MutationObserver(setVars);
      ob.observe(instance.subTree.el.parentNode, { childList: true });
      onUnmounted(() => ob.disconnect());
    });
  }
  function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128) {
      const suspense = vnode.suspense;
      vnode = suspense.activeBranch;
      if (suspense.pendingBranch && !suspense.isHydrating) {
        suspense.effects.push(() => {
          setVarsOnVNode(suspense.activeBranch, vars);
        });
      }
    }
    while (vnode.component) {
      vnode = vnode.component.subTree;
    }
    if (vnode.shapeFlag & 1 && vnode.el) {
      setVarsOnNode(vnode.el, vars);
    } else if (vnode.type === Fragment) {
      vnode.children.forEach((c) => setVarsOnVNode(c, vars));
    } else if (vnode.type === Static) {
      let { el, anchor } = vnode;
      while (el) {
        setVarsOnNode(el, vars);
        if (el === anchor) break;
        el = el.nextSibling;
      }
    }
  }
  function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
      const style = el.style;
      let cssText = "";
      for (const key in vars) {
        style.setProperty(`--${key}`, vars[key]);
        cssText += `--${key}: ${vars[key]};`;
      }
      style[CSS_VAR_TEXT] = cssText;
    }
  }
  var displayRE = /(^|;)\s*display\s*:/;
  function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = isString(next);
    let hasControlledDisplay = false;
    if (next && !isCssString) {
      if (prev) {
        if (!isString(prev)) {
          for (const key in prev) {
            if (next[key] == null) {
              setStyle(style, key, "");
            }
          }
        } else {
          for (const prevStyle of prev.split(";")) {
            const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
            if (next[key] == null) {
              setStyle(style, key, "");
            }
          }
        }
      }
      for (const key in next) {
        if (key === "display") {
          hasControlledDisplay = true;
        }
        setStyle(style, key, next[key]);
      }
    } else {
      if (isCssString) {
        if (prev !== next) {
          const cssVarText = style[CSS_VAR_TEXT];
          if (cssVarText) {
            next += ";" + cssVarText;
          }
          style.cssText = next;
          hasControlledDisplay = displayRE.test(next);
        }
      } else if (prev) {
        el.removeAttribute("style");
      }
    }
    if (vShowOriginalDisplay in el) {
      el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
      if (el[vShowHidden]) {
        style.display = "none";
      }
    }
  }
  var semicolonRE = /[^\\];\s*$/;
  var importantRE = /\s*!important$/;
  function setStyle(style, name, val) {
    if (isArray(val)) {
      val.forEach((v) => setStyle(style, name, v));
    } else {
      if (val == null) val = "";
      if (true) {
        if (semicolonRE.test(val)) {
          warn2(
            `Unexpected semicolon at the end of '${name}' style value: '${val}'`
          );
        }
      }
      if (name.startsWith("--")) {
        style.setProperty(name, val);
      } else {
        const prefixed = autoPrefix(style, name);
        if (importantRE.test(val)) {
          style.setProperty(
            hyphenate(prefixed),
            val.replace(importantRE, ""),
            "important"
          );
        } else {
          style[prefixed] = val;
        }
      }
    }
  }
  var prefixes = ["Webkit", "Moz", "ms"];
  var prefixCache = {};
  function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
      return cached;
    }
    let name = camelize(rawName);
    if (name !== "filter" && name in style) {
      return prefixCache[rawName] = name;
    }
    name = capitalize(name);
    for (let i = 0; i < prefixes.length; i++) {
      const prefixed = prefixes[i] + name;
      if (prefixed in style) {
        return prefixCache[rawName] = prefixed;
      }
    }
    return rawName;
  }
  var xlinkNS = "http://www.w3.org/1999/xlink";
  function patchAttr(el, key, value, isSVG, instance, isBoolean2 = isSpecialBooleanAttr(key)) {
    if (isSVG && key.startsWith("xlink:")) {
      if (value == null) {
        el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(
          key,
          isBoolean2 ? "" : isSymbol(value) ? String(value) : value
        );
      }
    }
  }
  function patchDOMProp(el, key, value, parentComponent, attrName) {
    if (key === "innerHTML" || key === "textContent") {
      if (value != null) {
        el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
      }
      return;
    }
    const tag = el.tagName;
    if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
    !tag.includes("-")) {
      const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
      const newValue = value == null ? (
        // #11647: value should be set as empty string for null and undefined,
        // but <input type="checkbox"> should be set as 'on'.
        el.type === "checkbox" ? "on" : ""
      ) : String(value);
      if (oldValue !== newValue || !("_value" in el)) {
        el.value = newValue;
      }
      if (value == null) {
        el.removeAttribute(key);
      }
      el._value = value;
      return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
      const type = typeof el[key];
      if (type === "boolean") {
        value = includeBooleanAttr(value);
      } else if (value == null && type === "string") {
        value = "";
        needRemove = true;
      } else if (type === "number") {
        value = 0;
        needRemove = true;
      }
    }
    try {
      el[key] = value;
    } catch (e) {
      if (!needRemove) {
        warn2(
          `Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`,
          e
        );
      }
    }
    needRemove && el.removeAttribute(attrName || key);
  }
  function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
  }
  function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
  }
  var veiKey = Symbol("_vei");
  function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    const invokers = el[veiKey] || (el[veiKey] = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
      existingInvoker.value = true ? sanitizeEventValue(nextValue, rawName) : nextValue;
    } else {
      const [name, options] = parseName(rawName);
      if (nextValue) {
        const invoker = invokers[rawName] = createInvoker(
          true ? sanitizeEventValue(nextValue, rawName) : nextValue,
          instance
        );
        addEventListener(el, name, invoker, options);
      } else if (existingInvoker) {
        removeEventListener(el, name, existingInvoker, options);
        invokers[rawName] = void 0;
      }
    }
  }
  var optionsModifierRE = /(?:Once|Passive|Capture)$/;
  function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
      options = {};
      let m;
      while (m = name.match(optionsModifierRE)) {
        name = name.slice(0, name.length - m[0].length);
        options[m[0].toLowerCase()] = true;
      }
    }
    const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
    return [event, options];
  }
  var cachedNow = 0;
  var p = /* @__PURE__ */ Promise.resolve();
  var getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
  function createInvoker(initialValue, instance) {
    const invoker = (e) => {
      if (!e._vts) {
        e._vts = Date.now();
      } else if (e._vts <= invoker.attached) {
        return;
      }
      callWithAsyncErrorHandling(
        patchStopImmediatePropagation(e, invoker.value),
        instance,
        5,
        [e]
      );
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
  }
  function sanitizeEventValue(value, propName) {
    if (isFunction(value) || isArray(value)) {
      return value;
    }
    warn2(
      `Wrong type passed as event handler to ${propName} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof value}.`
    );
    return NOOP;
  }
  function patchStopImmediatePropagation(e, value) {
    if (isArray(value)) {
      const originalStop = e.stopImmediatePropagation;
      e.stopImmediatePropagation = () => {
        originalStop.call(e);
        e._stopped = true;
      };
      return value.map(
        (fn) => (e2) => !e2._stopped && fn && fn(e2)
      );
    } else {
      return value;
    }
  }
  var isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
  key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
  var patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
    const isSVG = namespace === "svg";
    if (key === "class") {
      patchClass(el, nextValue, isSVG);
    } else if (key === "style") {
      patchStyle(el, prevValue, nextValue);
    } else if (isOn(key)) {
      if (!isModelListener(key)) {
        patchEvent(el, key, prevValue, nextValue, parentComponent);
      }
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
      patchDOMProp(el, key, nextValue);
      if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
        patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
      }
    } else if (
      // #11081 force set props for possible async custom element
      el._isVueCE && (/[A-Z]/.test(key) || !isString(nextValue))
    ) {
      patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
    } else {
      if (key === "true-value") {
        el._trueValue = nextValue;
      } else if (key === "false-value") {
        el._falseValue = nextValue;
      }
      patchAttr(el, key, nextValue, isSVG);
    }
  };
  function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
      if (key === "innerHTML" || key === "textContent") {
        return true;
      }
      if (key in el && isNativeOn(key) && isFunction(value)) {
        return true;
      }
      return false;
    }
    if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") {
      return false;
    }
    if (key === "form") {
      return false;
    }
    if (key === "list" && el.tagName === "INPUT") {
      return false;
    }
    if (key === "type" && el.tagName === "TEXTAREA") {
      return false;
    }
    if (key === "width" || key === "height") {
      const tag = el.tagName;
      if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
        return false;
      }
    }
    if (isNativeOn(key) && isString(value)) {
      return false;
    }
    return key in el;
  }
  var REMOVAL = {};
  // @__NO_SIDE_EFFECTS__
  function defineCustomElement(options, extraOptions, _createApp) {
    const Comp = defineComponent(options, extraOptions);
    if (isPlainObject(Comp)) extend(Comp, extraOptions);
    class VueCustomElement extends VueElement {
      constructor(initialProps) {
        super(Comp, initialProps, _createApp);
      }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
  }
  var defineSSRCustomElement = /* @__NO_SIDE_EFFECTS__ */ (options, extraOptions) => {
    return /* @__PURE__ */ defineCustomElement(options, extraOptions, createSSRApp);
  };
  var BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
  };
  var VueElement = class _VueElement extends BaseClass {
    constructor(_def, _props = {}, _createApp = createApp) {
      super();
      this._def = _def;
      this._props = _props;
      this._createApp = _createApp;
      this._isVueCE = true;
      this._instance = null;
      this._app = null;
      this._nonce = this._def.nonce;
      this._connected = false;
      this._resolved = false;
      this._numberProps = null;
      this._styleChildren = /* @__PURE__ */ new WeakSet();
      this._ob = null;
      if (this.shadowRoot && _createApp !== createApp) {
        this._root = this.shadowRoot;
      } else {
        if (this.shadowRoot) {
          warn2(
            `Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`
          );
        }
        if (_def.shadowRoot !== false) {
          this.attachShadow({ mode: "open" });
          this._root = this.shadowRoot;
        } else {
          this._root = this;
        }
      }
    }
    connectedCallback() {
      if (!this.isConnected) return;
      if (!this.shadowRoot && !this._resolved) {
        this._parseSlots();
      }
      this._connected = true;
      let parent = this;
      while (parent = parent && (parent.parentNode || parent.host)) {
        if (parent instanceof _VueElement) {
          this._parent = parent;
          break;
        }
      }
      if (!this._instance) {
        if (this._resolved) {
          this._mount(this._def);
        } else {
          if (parent && parent._pendingResolve) {
            this._pendingResolve = parent._pendingResolve.then(() => {
              this._pendingResolve = void 0;
              this._resolveDef();
            });
          } else {
            this._resolveDef();
          }
        }
      }
    }
    _setParent(parent = this._parent) {
      if (parent) {
        this._instance.parent = parent._instance;
        this._inheritParentContext(parent);
      }
    }
    _inheritParentContext(parent = this._parent) {
      if (parent && this._app) {
        Object.setPrototypeOf(
          this._app._context.provides,
          parent._instance.provides
        );
      }
    }
    disconnectedCallback() {
      this._connected = false;
      nextTick(() => {
        if (!this._connected) {
          if (this._ob) {
            this._ob.disconnect();
            this._ob = null;
          }
          this._app && this._app.unmount();
          if (this._instance) this._instance.ce = void 0;
          this._app = this._instance = null;
        }
      });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */
    _resolveDef() {
      if (this._pendingResolve) {
        return;
      }
      for (let i = 0; i < this.attributes.length; i++) {
        this._setAttr(this.attributes[i].name);
      }
      this._ob = new MutationObserver((mutations) => {
        for (const m of mutations) {
          this._setAttr(m.attributeName);
        }
      });
      this._ob.observe(this, { attributes: true });
      const resolve2 = (def2, isAsync = false) => {
        this._resolved = true;
        this._pendingResolve = void 0;
        const { props, styles } = def2;
        let numberProps;
        if (props && !isArray(props)) {
          for (const key in props) {
            const opt = props[key];
            if (opt === Number || opt && opt.type === Number) {
              if (key in this._props) {
                this._props[key] = toNumber(this._props[key]);
              }
              (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[camelize(key)] = true;
            }
          }
        }
        this._numberProps = numberProps;
        this._resolveProps(def2);
        if (this.shadowRoot) {
          this._applyStyles(styles);
        } else if (styles) {
          warn2(
            "Custom element style injection is not supported when using shadowRoot: false"
          );
        }
        this._mount(def2);
      };
      const asyncDef = this._def.__asyncLoader;
      if (asyncDef) {
        this._pendingResolve = asyncDef().then((def2) => {
          def2.configureApp = this._def.configureApp;
          resolve2(this._def = def2, true);
        });
      } else {
        resolve2(this._def);
      }
    }
    _mount(def2) {
      if (!def2.name) {
        def2.name = "VueElement";
      }
      this._app = this._createApp(def2);
      this._inheritParentContext();
      if (def2.configureApp) {
        def2.configureApp(this._app);
      }
      this._app._ceVNode = this._createVNode();
      this._app.mount(this._root);
      const exposed = this._instance && this._instance.exposed;
      if (!exposed) return;
      for (const key in exposed) {
        if (!hasOwn(this, key)) {
          Object.defineProperty(this, key, {
            // unwrap ref to be consistent with public instance behavior
            get: () => unref(exposed[key])
          });
        } else if (true) {
          warn2(`Exposed property "${key}" already exists on custom element.`);
        }
      }
    }
    _resolveProps(def2) {
      const { props } = def2;
      const declaredPropKeys = isArray(props) ? props : Object.keys(props || {});
      for (const key of Object.keys(this)) {
        if (key[0] !== "_" && declaredPropKeys.includes(key)) {
          this._setProp(key, this[key]);
        }
      }
      for (const key of declaredPropKeys.map(camelize)) {
        Object.defineProperty(this, key, {
          get() {
            return this._getProp(key);
          },
          set(val) {
            this._setProp(key, val, true, true);
          }
        });
      }
    }
    _setAttr(key) {
      if (key.startsWith("data-v-")) return;
      const has = this.hasAttribute(key);
      let value = has ? this.getAttribute(key) : REMOVAL;
      const camelKey = camelize(key);
      if (has && this._numberProps && this._numberProps[camelKey]) {
        value = toNumber(value);
      }
      this._setProp(camelKey, value, false, true);
    }
    /**
     * @internal
     */
    _getProp(key) {
      return this._props[key];
    }
    /**
     * @internal
     */
    _setProp(key, val, shouldReflect = true, shouldUpdate = false) {
      if (val !== this._props[key]) {
        if (val === REMOVAL) {
          delete this._props[key];
        } else {
          this._props[key] = val;
          if (key === "key" && this._app) {
            this._app._ceVNode.key = val;
          }
        }
        if (shouldUpdate && this._instance) {
          this._update();
        }
        if (shouldReflect) {
          const ob = this._ob;
          ob && ob.disconnect();
          if (val === true) {
            this.setAttribute(hyphenate(key), "");
          } else if (typeof val === "string" || typeof val === "number") {
            this.setAttribute(hyphenate(key), val + "");
          } else if (!val) {
            this.removeAttribute(hyphenate(key));
          }
          ob && ob.observe(this, { attributes: true });
        }
      }
    }
    _update() {
      const vnode = this._createVNode();
      if (this._app) vnode.appContext = this._app._context;
      render(vnode, this._root);
    }
    _createVNode() {
      const baseProps = {};
      if (!this.shadowRoot) {
        baseProps.onVnodeMounted = baseProps.onVnodeUpdated = this._renderSlots.bind(this);
      }
      const vnode = createVNode(this._def, extend(baseProps, this._props));
      if (!this._instance) {
        vnode.ce = (instance) => {
          this._instance = instance;
          instance.ce = this;
          instance.isCE = true;
          if (true) {
            instance.ceReload = (newStyles) => {
              if (this._styles) {
                this._styles.forEach((s) => this._root.removeChild(s));
                this._styles.length = 0;
              }
              this._applyStyles(newStyles);
              this._instance = null;
              this._update();
            };
          }
          const dispatch2 = (event, args) => {
            this.dispatchEvent(
              new CustomEvent(
                event,
                isPlainObject(args[0]) ? extend({ detail: args }, args[0]) : { detail: args }
              )
            );
          };
          instance.emit = (event, ...args) => {
            dispatch2(event, args);
            if (hyphenate(event) !== event) {
              dispatch2(hyphenate(event), args);
            }
          };
          this._setParent();
        };
      }
      return vnode;
    }
    _applyStyles(styles, owner) {
      if (!styles) return;
      if (owner) {
        if (owner === this._def || this._styleChildren.has(owner)) {
          return;
        }
        this._styleChildren.add(owner);
      }
      const nonce = this._nonce;
      for (let i = styles.length - 1; i >= 0; i--) {
        const s = document.createElement("style");
        if (nonce) s.setAttribute("nonce", nonce);
        s.textContent = styles[i];
        this.shadowRoot.prepend(s);
        if (true) {
          if (owner) {
            if (owner.__hmrId) {
              if (!this._childStyles) this._childStyles = /* @__PURE__ */ new Map();
              let entry = this._childStyles.get(owner.__hmrId);
              if (!entry) {
                this._childStyles.set(owner.__hmrId, entry = []);
              }
              entry.push(s);
            }
          } else {
            (this._styles || (this._styles = [])).push(s);
          }
        }
      }
    }
    /**
     * Only called when shadowRoot is false
     */
    _parseSlots() {
      const slots = this._slots = {};
      let n;
      while (n = this.firstChild) {
        const slotName = n.nodeType === 1 && n.getAttribute("slot") || "default";
        (slots[slotName] || (slots[slotName] = [])).push(n);
        this.removeChild(n);
      }
    }
    /**
     * Only called when shadowRoot is false
     */
    _renderSlots() {
      const outlets = (this._teleportTarget || this).querySelectorAll("slot");
      const scopeId = this._instance.type.__scopeId;
      for (let i = 0; i < outlets.length; i++) {
        const o = outlets[i];
        const slotName = o.getAttribute("name") || "default";
        const content = this._slots[slotName];
        const parent = o.parentNode;
        if (content) {
          for (const n of content) {
            if (scopeId && n.nodeType === 1) {
              const id = scopeId + "-s";
              const walker = document.createTreeWalker(n, 1);
              n.setAttribute(id, "");
              let child;
              while (child = walker.nextNode()) {
                child.setAttribute(id, "");
              }
            }
            parent.insertBefore(n, o);
          }
        } else {
          while (o.firstChild) parent.insertBefore(o.firstChild, o);
        }
        parent.removeChild(o);
      }
    }
    /**
     * @internal
     */
    _injectChildStyle(comp) {
      this._applyStyles(comp.styles, comp);
    }
    /**
     * @internal
     */
    _removeChildStyle(comp) {
      if (true) {
        this._styleChildren.delete(comp);
        if (this._childStyles && comp.__hmrId) {
          const oldStyles = this._childStyles.get(comp.__hmrId);
          if (oldStyles) {
            oldStyles.forEach((s) => this._root.removeChild(s));
            oldStyles.length = 0;
          }
        }
      }
    }
  };
  function useHost(caller) {
    const instance = getCurrentInstance();
    const el = instance && instance.ce;
    if (el) {
      return el;
    } else if (true) {
      if (!instance) {
        warn2(
          `${caller || "useHost"} called without an active component instance.`
        );
      } else {
        warn2(
          `${caller || "useHost"} can only be used in components defined via defineCustomElement.`
        );
      }
    }
    return null;
  }
  function useShadowRoot() {
    const el = true ? useHost("useShadowRoot") : useHost();
    return el && el.shadowRoot;
  }
  function useCssModule(name = "$style") {
    {
      const instance = getCurrentInstance();
      if (!instance) {
        warn2(`useCssModule must be called inside setup()`);
        return EMPTY_OBJ;
      }
      const modules = instance.type.__cssModules;
      if (!modules) {
        warn2(`Current instance does not have CSS modules injected.`);
        return EMPTY_OBJ;
      }
      const mod = modules[name];
      if (!mod) {
        warn2(`Current instance does not have CSS module named "${name}".`);
        return EMPTY_OBJ;
      }
      return mod;
    }
  }
  var positionMap = /* @__PURE__ */ new WeakMap();
  var newPositionMap = /* @__PURE__ */ new WeakMap();
  var moveCbKey = Symbol("_moveCb");
  var enterCbKey2 = Symbol("_enterCb");
  var decorate = (t) => {
    delete t.props.mode;
    return t;
  };
  var TransitionGroupImpl = /* @__PURE__ */ decorate({
    name: "TransitionGroup",
    props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
      tag: String,
      moveClass: String
    }),
    setup(props, { slots }) {
      const instance = getCurrentInstance();
      const state = useTransitionState();
      let prevChildren;
      let children;
      onUpdated(() => {
        if (!prevChildren.length) {
          return;
        }
        const moveClass = props.moveClass || `${props.name || "v"}-move`;
        if (!hasCSSTransform(
          prevChildren[0].el,
          instance.vnode.el,
          moveClass
        )) {
          prevChildren = [];
          return;
        }
        prevChildren.forEach(callPendingCbs);
        prevChildren.forEach(recordPosition);
        const movedChildren = prevChildren.filter(applyTranslation);
        forceReflow();
        movedChildren.forEach((c) => {
          const el = c.el;
          const style = el.style;
          addTransitionClass(el, moveClass);
          style.transform = style.webkitTransform = style.transitionDuration = "";
          const cb = el[moveCbKey] = (e) => {
            if (e && e.target !== el) {
              return;
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener("transitionend", cb);
              el[moveCbKey] = null;
              removeTransitionClass(el, moveClass);
            }
          };
          el.addEventListener("transitionend", cb);
        });
        prevChildren = [];
      });
      return () => {
        const rawProps = toRaw(props);
        const cssTransitionProps = resolveTransitionProps(rawProps);
        let tag = rawProps.tag || Fragment;
        prevChildren = [];
        if (children) {
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child.el && child.el instanceof Element) {
              prevChildren.push(child);
              setTransitionHooks(
                child,
                resolveTransitionHooks(
                  child,
                  cssTransitionProps,
                  state,
                  instance
                )
              );
              positionMap.set(
                child,
                child.el.getBoundingClientRect()
              );
            }
          }
        }
        children = slots.default ? getTransitionRawChildren(slots.default()) : [];
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child.key != null) {
            setTransitionHooks(
              child,
              resolveTransitionHooks(child, cssTransitionProps, state, instance)
            );
          } else if (child.type !== Text) {
            warn2(`<TransitionGroup> children must be keyed.`);
          }
        }
        return createVNode(tag, null, children);
      };
    }
  });
  var TransitionGroup = TransitionGroupImpl;
  function callPendingCbs(c) {
    const el = c.el;
    if (el[moveCbKey]) {
      el[moveCbKey]();
    }
    if (el[enterCbKey2]) {
      el[enterCbKey2]();
    }
  }
  function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
  }
  function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
      const s = c.el.style;
      s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
      s.transitionDuration = "0s";
      return c;
    }
  }
  function hasCSSTransform(el, root, moveClass) {
    const clone = el.cloneNode();
    const _vtc = el[vtcKey];
    if (_vtc) {
      _vtc.forEach((cls) => {
        cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
      });
    }
    moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
    clone.style.display = "none";
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
  }
  var getModelAssigner = (vnode) => {
    const fn = vnode.props["onUpdate:modelValue"] || false;
    return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn;
  };
  function onCompositionStart(e) {
    e.target.composing = true;
  }
  function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
      target.composing = false;
      target.dispatchEvent(new Event("input"));
    }
  }
  var assignKey = Symbol("_assign");
  var vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
      el[assignKey] = getModelAssigner(vnode);
      const castToNumber = number || vnode.props && vnode.props.type === "number";
      addEventListener(el, lazy ? "change" : "input", (e) => {
        if (e.target.composing) return;
        let domValue = el.value;
        if (trim) {
          domValue = domValue.trim();
        }
        if (castToNumber) {
          domValue = looseToNumber(domValue);
        }
        el[assignKey](domValue);
      });
      if (trim) {
        addEventListener(el, "change", () => {
          el.value = el.value.trim();
        });
      }
      if (!lazy) {
        addEventListener(el, "compositionstart", onCompositionStart);
        addEventListener(el, "compositionend", onCompositionEnd);
        addEventListener(el, "change", onCompositionEnd);
      }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(el, { value }) {
      el.value = value == null ? "" : value;
    },
    beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim, number } }, vnode) {
      el[assignKey] = getModelAssigner(vnode);
      if (el.composing) return;
      const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? looseToNumber(el.value) : el.value;
      const newValue = value == null ? "" : value;
      if (elValue === newValue) {
        return;
      }
      if (document.activeElement === el && el.type !== "range") {
        if (lazy && value === oldValue) {
          return;
        }
        if (trim && el.value.trim() === newValue) {
          return;
        }
      }
      el.value = newValue;
    }
  };
  var vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created(el, _, vnode) {
      el[assignKey] = getModelAssigner(vnode);
      addEventListener(el, "change", () => {
        const modelValue = el._modelValue;
        const elementValue = getValue(el);
        const checked = el.checked;
        const assign2 = el[assignKey];
        if (isArray(modelValue)) {
          const index = looseIndexOf(modelValue, elementValue);
          const found = index !== -1;
          if (checked && !found) {
            assign2(modelValue.concat(elementValue));
          } else if (!checked && found) {
            const filtered = [...modelValue];
            filtered.splice(index, 1);
            assign2(filtered);
          }
        } else if (isSet(modelValue)) {
          const cloned = new Set(modelValue);
          if (checked) {
            cloned.add(elementValue);
          } else {
            cloned.delete(elementValue);
          }
          assign2(cloned);
        } else {
          assign2(getCheckboxValue(el, checked));
        }
      });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate(el, binding, vnode) {
      el[assignKey] = getModelAssigner(vnode);
      setChecked(el, binding, vnode);
    }
  };
  function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    let checked;
    if (isArray(value)) {
      checked = looseIndexOf(value, vnode.props.value) > -1;
    } else if (isSet(value)) {
      checked = value.has(vnode.props.value);
    } else {
      if (value === oldValue) return;
      checked = looseEqual(value, getCheckboxValue(el, true));
    }
    if (el.checked !== checked) {
      el.checked = checked;
    }
  }
  var vModelRadio = {
    created(el, { value }, vnode) {
      el.checked = looseEqual(value, vnode.props.value);
      el[assignKey] = getModelAssigner(vnode);
      addEventListener(el, "change", () => {
        el[assignKey](getValue(el));
      });
    },
    beforeUpdate(el, { value, oldValue }, vnode) {
      el[assignKey] = getModelAssigner(vnode);
      if (value !== oldValue) {
        el.checked = looseEqual(value, vnode.props.value);
      }
    }
  };
  var vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created(el, { value, modifiers: { number } }, vnode) {
      const isSetModel = isSet(value);
      addEventListener(el, "change", () => {
        const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map(
          (o) => number ? looseToNumber(getValue(o)) : getValue(o)
        );
        el[assignKey](
          el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
        );
        el._assigning = true;
        nextTick(() => {
          el._assigning = false;
        });
      });
      el[assignKey] = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(el, { value }) {
      setSelected(el, value);
    },
    beforeUpdate(el, _binding, vnode) {
      el[assignKey] = getModelAssigner(vnode);
    },
    updated(el, { value }) {
      if (!el._assigning) {
        setSelected(el, value);
      }
    }
  };
  function setSelected(el, value) {
    const isMultiple = el.multiple;
    const isArrayValue = isArray(value);
    if (isMultiple && !isArrayValue && !isSet(value)) {
      warn2(
        `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`
      );
      return;
    }
    for (let i = 0, l = el.options.length; i < l; i++) {
      const option = el.options[i];
      const optionValue = getValue(option);
      if (isMultiple) {
        if (isArrayValue) {
          const optionType = typeof optionValue;
          if (optionType === "string" || optionType === "number") {
            option.selected = value.some((v) => String(v) === String(optionValue));
          } else {
            option.selected = looseIndexOf(value, optionValue) > -1;
          }
        } else {
          option.selected = value.has(optionValue);
        }
      } else if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) el.selectedIndex = i;
        return;
      }
    }
    if (!isMultiple && el.selectedIndex !== -1) {
      el.selectedIndex = -1;
    }
  }
  function getValue(el) {
    return "_value" in el ? el._value : el.value;
  }
  function getCheckboxValue(el, checked) {
    const key = checked ? "_trueValue" : "_falseValue";
    return key in el ? el[key] : checked;
  }
  var vModelDynamic = {
    created(el, binding, vnode) {
      callModelHook(el, binding, vnode, null, "created");
    },
    mounted(el, binding, vnode) {
      callModelHook(el, binding, vnode, null, "mounted");
    },
    beforeUpdate(el, binding, vnode, prevVNode) {
      callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
    },
    updated(el, binding, vnode, prevVNode) {
      callModelHook(el, binding, vnode, prevVNode, "updated");
    }
  };
  function resolveDynamicModel(tagName, type) {
    switch (tagName) {
      case "SELECT":
        return vModelSelect;
      case "TEXTAREA":
        return vModelText;
      default:
        switch (type) {
          case "checkbox":
            return vModelCheckbox;
          case "radio":
            return vModelRadio;
          default:
            return vModelText;
        }
    }
  }
  function callModelHook(el, binding, vnode, prevVNode, hook) {
    const modelToUse = resolveDynamicModel(
      el.tagName,
      vnode.props && vnode.props.type
    );
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
  }
  function initVModelForSSR() {
    vModelText.getSSRProps = ({ value }) => ({ value });
    vModelRadio.getSSRProps = ({ value }, vnode) => {
      if (vnode.props && looseEqual(vnode.props.value, value)) {
        return { checked: true };
      }
    };
    vModelCheckbox.getSSRProps = ({ value }, vnode) => {
      if (isArray(value)) {
        if (vnode.props && looseIndexOf(value, vnode.props.value) > -1) {
          return { checked: true };
        }
      } else if (isSet(value)) {
        if (vnode.props && value.has(vnode.props.value)) {
          return { checked: true };
        }
      } else if (value) {
        return { checked: true };
      }
    };
    vModelDynamic.getSSRProps = (binding, vnode) => {
      if (typeof vnode.type !== "string") {
        return;
      }
      const modelToUse = resolveDynamicModel(
        // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
        vnode.type.toUpperCase(),
        vnode.props && vnode.props.type
      );
      if (modelToUse.getSSRProps) {
        return modelToUse.getSSRProps(binding, vnode);
      }
    };
  }
  var systemModifiers = ["ctrl", "shift", "alt", "meta"];
  var modifierGuards = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
  };
  var withModifiers = (fn, modifiers) => {
    const cache = fn._withMods || (fn._withMods = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event, ...args) => {
      for (let i = 0; i < modifiers.length; i++) {
        const guard = modifierGuards[modifiers[i]];
        if (guard && guard(event, modifiers)) return;
      }
      return fn(event, ...args);
    });
  };
  var keyNames = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  var withKeys = (fn, modifiers) => {
    const cache = fn._withKeys || (fn._withKeys = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event) => {
      if (!("key" in event)) {
        return;
      }
      const eventKey = hyphenate(event.key);
      if (modifiers.some(
        (k) => k === eventKey || keyNames[k] === eventKey
      )) {
        return fn(event);
      }
    });
  };
  var rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
  var renderer;
  var enabledHydration = false;
  function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions));
  }
  function ensureHydrationRenderer() {
    renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
    enabledHydration = true;
    return renderer;
  }
  var render = (...args) => {
    ensureRenderer().render(...args);
  };
  var hydrate = (...args) => {
    ensureHydrationRenderer().hydrate(...args);
  };
  var createApp = (...args) => {
    const app2 = ensureRenderer().createApp(...args);
    if (true) {
      injectNativeTagCheck(app2);
      injectCompilerOptionsCheck(app2);
    }
    const { mount } = app2;
    app2.mount = (containerOrSelector) => {
      const container = normalizeContainer(containerOrSelector);
      if (!container) return;
      const component = app2._component;
      if (!isFunction(component) && !component.render && !component.template) {
        component.template = container.innerHTML;
      }
      if (container.nodeType === 1) {
        container.textContent = "";
      }
      const proxy = mount(container, false, resolveRootNamespace(container));
      if (container instanceof Element) {
        container.removeAttribute("v-cloak");
        container.setAttribute("data-v-app", "");
      }
      return proxy;
    };
    return app2;
  };
  var createSSRApp = (...args) => {
    const app2 = ensureHydrationRenderer().createApp(...args);
    if (true) {
      injectNativeTagCheck(app2);
      injectCompilerOptionsCheck(app2);
    }
    const { mount } = app2;
    app2.mount = (containerOrSelector) => {
      const container = normalizeContainer(containerOrSelector);
      if (container) {
        return mount(container, true, resolveRootNamespace(container));
      }
    };
    return app2;
  };
  function resolveRootNamespace(container) {
    if (container instanceof SVGElement) {
      return "svg";
    }
    if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
      return "mathml";
    }
  }
  function injectNativeTagCheck(app2) {
    Object.defineProperty(app2.config, "isNativeTag", {
      value: (tag) => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
      writable: false
    });
  }
  function injectCompilerOptionsCheck(app2) {
    if (isRuntimeOnly()) {
      const isCustomElement = app2.config.isCustomElement;
      Object.defineProperty(app2.config, "isCustomElement", {
        get() {
          return isCustomElement;
        },
        set() {
          warn2(
            `The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`
          );
        }
      });
      const compilerOptions = app2.config.compilerOptions;
      const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
      Object.defineProperty(app2.config, "compilerOptions", {
        get() {
          warn2(msg);
          return compilerOptions;
        },
        set() {
          warn2(msg);
        }
      });
    }
  }
  function normalizeContainer(container) {
    if (isString(container)) {
      const res = document.querySelector(container);
      if (!res) {
        warn2(
          `Failed to mount app: mount target selector "${container}" returned null.`
        );
      }
      return res;
    }
    if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
      warn2(
        `mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`
      );
    }
    return container;
  }
  var ssrDirectiveInitialized = false;
  var initDirectivesForSSR = () => {
    if (!ssrDirectiveInitialized) {
      ssrDirectiveInitialized = true;
      initVModelForSSR();
      initVShowForSSR();
    }
  };

  // node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js
  var FRAGMENT = Symbol(true ? `Fragment` : ``);
  var TELEPORT = Symbol(true ? `Teleport` : ``);
  var SUSPENSE = Symbol(true ? `Suspense` : ``);
  var KEEP_ALIVE = Symbol(true ? `KeepAlive` : ``);
  var BASE_TRANSITION = Symbol(
    true ? `BaseTransition` : ``
  );
  var OPEN_BLOCK = Symbol(true ? `openBlock` : ``);
  var CREATE_BLOCK = Symbol(true ? `createBlock` : ``);
  var CREATE_ELEMENT_BLOCK = Symbol(
    true ? `createElementBlock` : ``
  );
  var CREATE_VNODE = Symbol(true ? `createVNode` : ``);
  var CREATE_ELEMENT_VNODE = Symbol(
    true ? `createElementVNode` : ``
  );
  var CREATE_COMMENT = Symbol(
    true ? `createCommentVNode` : ``
  );
  var CREATE_TEXT = Symbol(
    true ? `createTextVNode` : ``
  );
  var CREATE_STATIC = Symbol(
    true ? `createStaticVNode` : ``
  );
  var RESOLVE_COMPONENT = Symbol(
    true ? `resolveComponent` : ``
  );
  var RESOLVE_DYNAMIC_COMPONENT = Symbol(
    true ? `resolveDynamicComponent` : ``
  );
  var RESOLVE_DIRECTIVE = Symbol(
    true ? `resolveDirective` : ``
  );
  var RESOLVE_FILTER = Symbol(
    true ? `resolveFilter` : ``
  );
  var WITH_DIRECTIVES = Symbol(
    true ? `withDirectives` : ``
  );
  var RENDER_LIST = Symbol(true ? `renderList` : ``);
  var RENDER_SLOT = Symbol(true ? `renderSlot` : ``);
  var CREATE_SLOTS = Symbol(true ? `createSlots` : ``);
  var TO_DISPLAY_STRING = Symbol(
    true ? `toDisplayString` : ``
  );
  var MERGE_PROPS = Symbol(true ? `mergeProps` : ``);
  var NORMALIZE_CLASS = Symbol(
    true ? `normalizeClass` : ``
  );
  var NORMALIZE_STYLE = Symbol(
    true ? `normalizeStyle` : ``
  );
  var NORMALIZE_PROPS = Symbol(
    true ? `normalizeProps` : ``
  );
  var GUARD_REACTIVE_PROPS = Symbol(
    true ? `guardReactiveProps` : ``
  );
  var TO_HANDLERS = Symbol(true ? `toHandlers` : ``);
  var CAMELIZE = Symbol(true ? `camelize` : ``);
  var CAPITALIZE = Symbol(true ? `capitalize` : ``);
  var TO_HANDLER_KEY = Symbol(
    true ? `toHandlerKey` : ``
  );
  var SET_BLOCK_TRACKING = Symbol(
    true ? `setBlockTracking` : ``
  );
  var PUSH_SCOPE_ID = Symbol(true ? `pushScopeId` : ``);
  var POP_SCOPE_ID = Symbol(true ? `popScopeId` : ``);
  var WITH_CTX = Symbol(true ? `withCtx` : ``);
  var UNREF = Symbol(true ? `unref` : ``);
  var IS_REF = Symbol(true ? `isRef` : ``);
  var WITH_MEMO = Symbol(true ? `withMemo` : ``);
  var IS_MEMO_SAME = Symbol(true ? `isMemoSame` : ``);
  var helperNameMap = {
    [FRAGMENT]: `Fragment`,
    [TELEPORT]: `Teleport`,
    [SUSPENSE]: `Suspense`,
    [KEEP_ALIVE]: `KeepAlive`,
    [BASE_TRANSITION]: `BaseTransition`,
    [OPEN_BLOCK]: `openBlock`,
    [CREATE_BLOCK]: `createBlock`,
    [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
    [CREATE_VNODE]: `createVNode`,
    [CREATE_ELEMENT_VNODE]: `createElementVNode`,
    [CREATE_COMMENT]: `createCommentVNode`,
    [CREATE_TEXT]: `createTextVNode`,
    [CREATE_STATIC]: `createStaticVNode`,
    [RESOLVE_COMPONENT]: `resolveComponent`,
    [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
    [RESOLVE_DIRECTIVE]: `resolveDirective`,
    [RESOLVE_FILTER]: `resolveFilter`,
    [WITH_DIRECTIVES]: `withDirectives`,
    [RENDER_LIST]: `renderList`,
    [RENDER_SLOT]: `renderSlot`,
    [CREATE_SLOTS]: `createSlots`,
    [TO_DISPLAY_STRING]: `toDisplayString`,
    [MERGE_PROPS]: `mergeProps`,
    [NORMALIZE_CLASS]: `normalizeClass`,
    [NORMALIZE_STYLE]: `normalizeStyle`,
    [NORMALIZE_PROPS]: `normalizeProps`,
    [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
    [TO_HANDLERS]: `toHandlers`,
    [CAMELIZE]: `camelize`,
    [CAPITALIZE]: `capitalize`,
    [TO_HANDLER_KEY]: `toHandlerKey`,
    [SET_BLOCK_TRACKING]: `setBlockTracking`,
    [PUSH_SCOPE_ID]: `pushScopeId`,
    [POP_SCOPE_ID]: `popScopeId`,
    [WITH_CTX]: `withCtx`,
    [UNREF]: `unref`,
    [IS_REF]: `isRef`,
    [WITH_MEMO]: `withMemo`,
    [IS_MEMO_SAME]: `isMemoSame`
  };
  function registerRuntimeHelpers(helpers) {
    Object.getOwnPropertySymbols(helpers).forEach((s) => {
      helperNameMap[s] = helpers[s];
    });
  }
  var locStub = {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 1, offset: 0 },
    source: ""
  };
  function createRoot(children, source = "") {
    return {
      type: 0,
      source,
      children,
      helpers: /* @__PURE__ */ new Set(),
      components: [],
      directives: [],
      hoists: [],
      imports: [],
      cached: [],
      temps: 0,
      codegenNode: void 0,
      loc: locStub
    };
  }
  function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent2 = false, loc = locStub) {
    if (context) {
      if (isBlock) {
        context.helper(OPEN_BLOCK);
        context.helper(getVNodeBlockHelper(context.inSSR, isComponent2));
      } else {
        context.helper(getVNodeHelper(context.inSSR, isComponent2));
      }
      if (directives) {
        context.helper(WITH_DIRECTIVES);
      }
    }
    return {
      type: 13,
      tag,
      props,
      children,
      patchFlag,
      dynamicProps,
      directives,
      isBlock,
      disableTracking,
      isComponent: isComponent2,
      loc
    };
  }
  function createArrayExpression(elements, loc = locStub) {
    return {
      type: 17,
      loc,
      elements
    };
  }
  function createObjectExpression(properties, loc = locStub) {
    return {
      type: 15,
      loc,
      properties
    };
  }
  function createObjectProperty(key, value) {
    return {
      type: 16,
      loc: locStub,
      key: isString(key) ? createSimpleExpression(key, true) : key,
      value
    };
  }
  function createSimpleExpression(content, isStatic = false, loc = locStub, constType = 0) {
    return {
      type: 4,
      loc,
      content,
      isStatic,
      constType: isStatic ? 3 : constType
    };
  }
  function createCompoundExpression(children, loc = locStub) {
    return {
      type: 8,
      loc,
      children
    };
  }
  function createCallExpression(callee, args = [], loc = locStub) {
    return {
      type: 14,
      loc,
      callee,
      arguments: args
    };
  }
  function createFunctionExpression(params, returns = void 0, newline = false, isSlot = false, loc = locStub) {
    return {
      type: 18,
      params,
      returns,
      newline,
      isSlot,
      loc
    };
  }
  function createConditionalExpression(test, consequent, alternate, newline = true) {
    return {
      type: 19,
      test,
      consequent,
      alternate,
      newline,
      loc: locStub
    };
  }
  function createCacheExpression(index, value, needPauseTracking = false, inVOnce = false) {
    return {
      type: 20,
      index,
      value,
      needPauseTracking,
      inVOnce,
      needArraySpread: false,
      loc: locStub
    };
  }
  function createBlockStatement(body) {
    return {
      type: 21,
      body,
      loc: locStub
    };
  }
  function getVNodeHelper(ssr, isComponent2) {
    return ssr || isComponent2 ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
  }
  function getVNodeBlockHelper(ssr, isComponent2) {
    return ssr || isComponent2 ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
  }
  function convertToBlock(node, { helper, removeHelper, inSSR }) {
    if (!node.isBlock) {
      node.isBlock = true;
      removeHelper(getVNodeHelper(inSSR, node.isComponent));
      helper(OPEN_BLOCK);
      helper(getVNodeBlockHelper(inSSR, node.isComponent));
    }
  }
  var defaultDelimitersOpen = new Uint8Array([123, 123]);
  var defaultDelimitersClose = new Uint8Array([125, 125]);
  function isTagStartChar(c) {
    return c >= 97 && c <= 122 || c >= 65 && c <= 90;
  }
  function isWhitespace(c) {
    return c === 32 || c === 10 || c === 9 || c === 12 || c === 13;
  }
  function isEndOfTagSection(c) {
    return c === 47 || c === 62 || isWhitespace(c);
  }
  function toCharCodes(str) {
    const ret = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i++) {
      ret[i] = str.charCodeAt(i);
    }
    return ret;
  }
  var Sequences = {
    Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
    // CDATA[
    CdataEnd: new Uint8Array([93, 93, 62]),
    // ]]>
    CommentEnd: new Uint8Array([45, 45, 62]),
    // `-->`
    ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
    // `<\/script`
    StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
    // `</style`
    TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
    // `</title`
    TextareaEnd: new Uint8Array([
      60,
      47,
      116,
      101,
      120,
      116,
      97,
      114,
      101,
      97
    ])
    // `</textarea
  };
  var Tokenizer = class {
    constructor(stack3, cbs) {
      this.stack = stack3;
      this.cbs = cbs;
      this.state = 1;
      this.buffer = "";
      this.sectionStart = 0;
      this.index = 0;
      this.entityStart = 0;
      this.baseState = 1;
      this.inRCDATA = false;
      this.inXML = false;
      this.inVPre = false;
      this.newlines = [];
      this.mode = 0;
      this.delimiterOpen = defaultDelimitersOpen;
      this.delimiterClose = defaultDelimitersClose;
      this.delimiterIndex = -1;
      this.currentSequence = void 0;
      this.sequenceIndex = 0;
    }
    get inSFCRoot() {
      return this.mode === 2 && this.stack.length === 0;
    }
    reset() {
      this.state = 1;
      this.mode = 0;
      this.buffer = "";
      this.sectionStart = 0;
      this.index = 0;
      this.baseState = 1;
      this.inRCDATA = false;
      this.currentSequence = void 0;
      this.newlines.length = 0;
      this.delimiterOpen = defaultDelimitersOpen;
      this.delimiterClose = defaultDelimitersClose;
    }
    /**
     * Generate Position object with line / column information using recorded
     * newline positions. We know the index is always going to be an already
     * processed index, so all the newlines up to this index should have been
     * recorded.
     */
    getPos(index) {
      let line = 1;
      let column = index + 1;
      for (let i = this.newlines.length - 1; i >= 0; i--) {
        const newlineIndex = this.newlines[i];
        if (index > newlineIndex) {
          line = i + 2;
          column = index - newlineIndex;
          break;
        }
      }
      return {
        column,
        line,
        offset: index
      };
    }
    peek() {
      return this.buffer.charCodeAt(this.index + 1);
    }
    stateText(c) {
      if (c === 60) {
        if (this.index > this.sectionStart) {
          this.cbs.ontext(this.sectionStart, this.index);
        }
        this.state = 5;
        this.sectionStart = this.index;
      } else if (!this.inVPre && c === this.delimiterOpen[0]) {
        this.state = 2;
        this.delimiterIndex = 0;
        this.stateInterpolationOpen(c);
      }
    }
    stateInterpolationOpen(c) {
      if (c === this.delimiterOpen[this.delimiterIndex]) {
        if (this.delimiterIndex === this.delimiterOpen.length - 1) {
          const start = this.index + 1 - this.delimiterOpen.length;
          if (start > this.sectionStart) {
            this.cbs.ontext(this.sectionStart, start);
          }
          this.state = 3;
          this.sectionStart = start;
        } else {
          this.delimiterIndex++;
        }
      } else if (this.inRCDATA) {
        this.state = 32;
        this.stateInRCDATA(c);
      } else {
        this.state = 1;
        this.stateText(c);
      }
    }
    stateInterpolation(c) {
      if (c === this.delimiterClose[0]) {
        this.state = 4;
        this.delimiterIndex = 0;
        this.stateInterpolationClose(c);
      }
    }
    stateInterpolationClose(c) {
      if (c === this.delimiterClose[this.delimiterIndex]) {
        if (this.delimiterIndex === this.delimiterClose.length - 1) {
          this.cbs.oninterpolation(this.sectionStart, this.index + 1);
          if (this.inRCDATA) {
            this.state = 32;
          } else {
            this.state = 1;
          }
          this.sectionStart = this.index + 1;
        } else {
          this.delimiterIndex++;
        }
      } else {
        this.state = 3;
        this.stateInterpolation(c);
      }
    }
    stateSpecialStartSequence(c) {
      const isEnd = this.sequenceIndex === this.currentSequence.length;
      const isMatch = isEnd ? (
        // If we are at the end of the sequence, make sure the tag name has ended
        isEndOfTagSection(c)
      ) : (
        // Otherwise, do a case-insensitive comparison
        (c | 32) === this.currentSequence[this.sequenceIndex]
      );
      if (!isMatch) {
        this.inRCDATA = false;
      } else if (!isEnd) {
        this.sequenceIndex++;
        return;
      }
      this.sequenceIndex = 0;
      this.state = 6;
      this.stateInTagName(c);
    }
    /** Look for an end tag. For <title> and <textarea>, also decode entities. */
    stateInRCDATA(c) {
      if (this.sequenceIndex === this.currentSequence.length) {
        if (c === 62 || isWhitespace(c)) {
          const endOfText = this.index - this.currentSequence.length;
          if (this.sectionStart < endOfText) {
            const actualIndex = this.index;
            this.index = endOfText;
            this.cbs.ontext(this.sectionStart, endOfText);
            this.index = actualIndex;
          }
          this.sectionStart = endOfText + 2;
          this.stateInClosingTagName(c);
          this.inRCDATA = false;
          return;
        }
        this.sequenceIndex = 0;
      }
      if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
        this.sequenceIndex += 1;
      } else if (this.sequenceIndex === 0) {
        if (this.currentSequence === Sequences.TitleEnd || this.currentSequence === Sequences.TextareaEnd && !this.inSFCRoot) {
          if (!this.inVPre && c === this.delimiterOpen[0]) {
            this.state = 2;
            this.delimiterIndex = 0;
            this.stateInterpolationOpen(c);
          }
        } else if (this.fastForwardTo(60)) {
          this.sequenceIndex = 1;
        }
      } else {
        this.sequenceIndex = Number(c === 60);
      }
    }
    stateCDATASequence(c) {
      if (c === Sequences.Cdata[this.sequenceIndex]) {
        if (++this.sequenceIndex === Sequences.Cdata.length) {
          this.state = 28;
          this.currentSequence = Sequences.CdataEnd;
          this.sequenceIndex = 0;
          this.sectionStart = this.index + 1;
        }
      } else {
        this.sequenceIndex = 0;
        this.state = 23;
        this.stateInDeclaration(c);
      }
    }
    /**
     * When we wait for one specific character, we can speed things up
     * by skipping through the buffer until we find it.
     *
     * @returns Whether the character was found.
     */
    fastForwardTo(c) {
      while (++this.index < this.buffer.length) {
        const cc = this.buffer.charCodeAt(this.index);
        if (cc === 10) {
          this.newlines.push(this.index);
        }
        if (cc === c) {
          return true;
        }
      }
      this.index = this.buffer.length - 1;
      return false;
    }
    /**
     * Comments and CDATA end with `-->` and `]]>`.
     *
     * Their common qualities are:
     * - Their end sequences have a distinct character they start with.
     * - That character is then repeated, so we have to check multiple repeats.
     * - All characters but the start character of the sequence can be skipped.
     */
    stateInCommentLike(c) {
      if (c === this.currentSequence[this.sequenceIndex]) {
        if (++this.sequenceIndex === this.currentSequence.length) {
          if (this.currentSequence === Sequences.CdataEnd) {
            this.cbs.oncdata(this.sectionStart, this.index - 2);
          } else {
            this.cbs.oncomment(this.sectionStart, this.index - 2);
          }
          this.sequenceIndex = 0;
          this.sectionStart = this.index + 1;
          this.state = 1;
        }
      } else if (this.sequenceIndex === 0) {
        if (this.fastForwardTo(this.currentSequence[0])) {
          this.sequenceIndex = 1;
        }
      } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
        this.sequenceIndex = 0;
      }
    }
    startSpecial(sequence, offset) {
      this.enterRCDATA(sequence, offset);
      this.state = 31;
    }
    enterRCDATA(sequence, offset) {
      this.inRCDATA = true;
      this.currentSequence = sequence;
      this.sequenceIndex = offset;
    }
    stateBeforeTagName(c) {
      if (c === 33) {
        this.state = 22;
        this.sectionStart = this.index + 1;
      } else if (c === 63) {
        this.state = 24;
        this.sectionStart = this.index + 1;
      } else if (isTagStartChar(c)) {
        this.sectionStart = this.index;
        if (this.mode === 0) {
          this.state = 6;
        } else if (this.inSFCRoot) {
          this.state = 34;
        } else if (!this.inXML) {
          if (c === 116) {
            this.state = 30;
          } else {
            this.state = c === 115 ? 29 : 6;
          }
        } else {
          this.state = 6;
        }
      } else if (c === 47) {
        this.state = 8;
      } else {
        this.state = 1;
        this.stateText(c);
      }
    }
    stateInTagName(c) {
      if (isEndOfTagSection(c)) {
        this.handleTagName(c);
      }
    }
    stateInSFCRootTagName(c) {
      if (isEndOfTagSection(c)) {
        const tag = this.buffer.slice(this.sectionStart, this.index);
        if (tag !== "template") {
          this.enterRCDATA(toCharCodes(`</` + tag), 0);
        }
        this.handleTagName(c);
      }
    }
    handleTagName(c) {
      this.cbs.onopentagname(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = 11;
      this.stateBeforeAttrName(c);
    }
    stateBeforeClosingTagName(c) {
      if (isWhitespace(c)) ;
      else if (c === 62) {
        if (true) {
          this.cbs.onerr(14, this.index);
        }
        this.state = 1;
        this.sectionStart = this.index + 1;
      } else {
        this.state = isTagStartChar(c) ? 9 : 27;
        this.sectionStart = this.index;
      }
    }
    stateInClosingTagName(c) {
      if (c === 62 || isWhitespace(c)) {
        this.cbs.onclosetag(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.state = 10;
        this.stateAfterClosingTagName(c);
      }
    }
    stateAfterClosingTagName(c) {
      if (c === 62) {
        this.state = 1;
        this.sectionStart = this.index + 1;
      }
    }
    stateBeforeAttrName(c) {
      if (c === 62) {
        this.cbs.onopentagend(this.index);
        if (this.inRCDATA) {
          this.state = 32;
        } else {
          this.state = 1;
        }
        this.sectionStart = this.index + 1;
      } else if (c === 47) {
        this.state = 7;
        if (this.peek() !== 62) {
          this.cbs.onerr(22, this.index);
        }
      } else if (c === 60 && this.peek() === 47) {
        this.cbs.onopentagend(this.index);
        this.state = 5;
        this.sectionStart = this.index;
      } else if (!isWhitespace(c)) {
        if (c === 61) {
          this.cbs.onerr(
            19,
            this.index
          );
        }
        this.handleAttrStart(c);
      }
    }
    handleAttrStart(c) {
      if (c === 118 && this.peek() === 45) {
        this.state = 13;
        this.sectionStart = this.index;
      } else if (c === 46 || c === 58 || c === 64 || c === 35) {
        this.cbs.ondirname(this.index, this.index + 1);
        this.state = 14;
        this.sectionStart = this.index + 1;
      } else {
        this.state = 12;
        this.sectionStart = this.index;
      }
    }
    stateInSelfClosingTag(c) {
      if (c === 62) {
        this.cbs.onselfclosingtag(this.index);
        this.state = 1;
        this.sectionStart = this.index + 1;
        this.inRCDATA = false;
      } else if (!isWhitespace(c)) {
        this.state = 11;
        this.stateBeforeAttrName(c);
      }
    }
    stateInAttrName(c) {
      if (c === 61 || isEndOfTagSection(c)) {
        this.cbs.onattribname(this.sectionStart, this.index);
        this.handleAttrNameEnd(c);
      } else if (c === 34 || c === 39 || c === 60) {
        this.cbs.onerr(
          17,
          this.index
        );
      }
    }
    stateInDirName(c) {
      if (c === 61 || isEndOfTagSection(c)) {
        this.cbs.ondirname(this.sectionStart, this.index);
        this.handleAttrNameEnd(c);
      } else if (c === 58) {
        this.cbs.ondirname(this.sectionStart, this.index);
        this.state = 14;
        this.sectionStart = this.index + 1;
      } else if (c === 46) {
        this.cbs.ondirname(this.sectionStart, this.index);
        this.state = 16;
        this.sectionStart = this.index + 1;
      }
    }
    stateInDirArg(c) {
      if (c === 61 || isEndOfTagSection(c)) {
        this.cbs.ondirarg(this.sectionStart, this.index);
        this.handleAttrNameEnd(c);
      } else if (c === 91) {
        this.state = 15;
      } else if (c === 46) {
        this.cbs.ondirarg(this.sectionStart, this.index);
        this.state = 16;
        this.sectionStart = this.index + 1;
      }
    }
    stateInDynamicDirArg(c) {
      if (c === 93) {
        this.state = 14;
      } else if (c === 61 || isEndOfTagSection(c)) {
        this.cbs.ondirarg(this.sectionStart, this.index + 1);
        this.handleAttrNameEnd(c);
        if (true) {
          this.cbs.onerr(
            27,
            this.index
          );
        }
      }
    }
    stateInDirModifier(c) {
      if (c === 61 || isEndOfTagSection(c)) {
        this.cbs.ondirmodifier(this.sectionStart, this.index);
        this.handleAttrNameEnd(c);
      } else if (c === 46) {
        this.cbs.ondirmodifier(this.sectionStart, this.index);
        this.sectionStart = this.index + 1;
      }
    }
    handleAttrNameEnd(c) {
      this.sectionStart = this.index;
      this.state = 17;
      this.cbs.onattribnameend(this.index);
      this.stateAfterAttrName(c);
    }
    stateAfterAttrName(c) {
      if (c === 61) {
        this.state = 18;
      } else if (c === 47 || c === 62) {
        this.cbs.onattribend(0, this.sectionStart);
        this.sectionStart = -1;
        this.state = 11;
        this.stateBeforeAttrName(c);
      } else if (!isWhitespace(c)) {
        this.cbs.onattribend(0, this.sectionStart);
        this.handleAttrStart(c);
      }
    }
    stateBeforeAttrValue(c) {
      if (c === 34) {
        this.state = 19;
        this.sectionStart = this.index + 1;
      } else if (c === 39) {
        this.state = 20;
        this.sectionStart = this.index + 1;
      } else if (!isWhitespace(c)) {
        this.sectionStart = this.index;
        this.state = 21;
        this.stateInAttrValueNoQuotes(c);
      }
    }
    handleInAttrValue(c, quote) {
      if (c === quote || this.fastForwardTo(quote)) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.cbs.onattribend(
          quote === 34 ? 3 : 2,
          this.index + 1
        );
        this.state = 11;
      }
    }
    stateInAttrValueDoubleQuotes(c) {
      this.handleInAttrValue(c, 34);
    }
    stateInAttrValueSingleQuotes(c) {
      this.handleInAttrValue(c, 39);
    }
    stateInAttrValueNoQuotes(c) {
      if (isWhitespace(c) || c === 62) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.cbs.onattribend(1, this.index);
        this.state = 11;
        this.stateBeforeAttrName(c);
      } else if (c === 34 || c === 39 || c === 60 || c === 61 || c === 96) {
        this.cbs.onerr(
          18,
          this.index
        );
      } else ;
    }
    stateBeforeDeclaration(c) {
      if (c === 91) {
        this.state = 26;
        this.sequenceIndex = 0;
      } else {
        this.state = c === 45 ? 25 : 23;
      }
    }
    stateInDeclaration(c) {
      if (c === 62 || this.fastForwardTo(62)) {
        this.state = 1;
        this.sectionStart = this.index + 1;
      }
    }
    stateInProcessingInstruction(c) {
      if (c === 62 || this.fastForwardTo(62)) {
        this.cbs.onprocessinginstruction(this.sectionStart, this.index);
        this.state = 1;
        this.sectionStart = this.index + 1;
      }
    }
    stateBeforeComment(c) {
      if (c === 45) {
        this.state = 28;
        this.currentSequence = Sequences.CommentEnd;
        this.sequenceIndex = 2;
        this.sectionStart = this.index + 1;
      } else {
        this.state = 23;
      }
    }
    stateInSpecialComment(c) {
      if (c === 62 || this.fastForwardTo(62)) {
        this.cbs.oncomment(this.sectionStart, this.index);
        this.state = 1;
        this.sectionStart = this.index + 1;
      }
    }
    stateBeforeSpecialS(c) {
      if (c === Sequences.ScriptEnd[3]) {
        this.startSpecial(Sequences.ScriptEnd, 4);
      } else if (c === Sequences.StyleEnd[3]) {
        this.startSpecial(Sequences.StyleEnd, 4);
      } else {
        this.state = 6;
        this.stateInTagName(c);
      }
    }
    stateBeforeSpecialT(c) {
      if (c === Sequences.TitleEnd[3]) {
        this.startSpecial(Sequences.TitleEnd, 4);
      } else if (c === Sequences.TextareaEnd[3]) {
        this.startSpecial(Sequences.TextareaEnd, 4);
      } else {
        this.state = 6;
        this.stateInTagName(c);
      }
    }
    startEntity() {
    }
    stateInEntity() {
    }
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */
    parse(input) {
      this.buffer = input;
      while (this.index < this.buffer.length) {
        const c = this.buffer.charCodeAt(this.index);
        if (c === 10 && this.state !== 33) {
          this.newlines.push(this.index);
        }
        switch (this.state) {
          case 1: {
            this.stateText(c);
            break;
          }
          case 2: {
            this.stateInterpolationOpen(c);
            break;
          }
          case 3: {
            this.stateInterpolation(c);
            break;
          }
          case 4: {
            this.stateInterpolationClose(c);
            break;
          }
          case 31: {
            this.stateSpecialStartSequence(c);
            break;
          }
          case 32: {
            this.stateInRCDATA(c);
            break;
          }
          case 26: {
            this.stateCDATASequence(c);
            break;
          }
          case 19: {
            this.stateInAttrValueDoubleQuotes(c);
            break;
          }
          case 12: {
            this.stateInAttrName(c);
            break;
          }
          case 13: {
            this.stateInDirName(c);
            break;
          }
          case 14: {
            this.stateInDirArg(c);
            break;
          }
          case 15: {
            this.stateInDynamicDirArg(c);
            break;
          }
          case 16: {
            this.stateInDirModifier(c);
            break;
          }
          case 28: {
            this.stateInCommentLike(c);
            break;
          }
          case 27: {
            this.stateInSpecialComment(c);
            break;
          }
          case 11: {
            this.stateBeforeAttrName(c);
            break;
          }
          case 6: {
            this.stateInTagName(c);
            break;
          }
          case 34: {
            this.stateInSFCRootTagName(c);
            break;
          }
          case 9: {
            this.stateInClosingTagName(c);
            break;
          }
          case 5: {
            this.stateBeforeTagName(c);
            break;
          }
          case 17: {
            this.stateAfterAttrName(c);
            break;
          }
          case 20: {
            this.stateInAttrValueSingleQuotes(c);
            break;
          }
          case 18: {
            this.stateBeforeAttrValue(c);
            break;
          }
          case 8: {
            this.stateBeforeClosingTagName(c);
            break;
          }
          case 10: {
            this.stateAfterClosingTagName(c);
            break;
          }
          case 29: {
            this.stateBeforeSpecialS(c);
            break;
          }
          case 30: {
            this.stateBeforeSpecialT(c);
            break;
          }
          case 21: {
            this.stateInAttrValueNoQuotes(c);
            break;
          }
          case 7: {
            this.stateInSelfClosingTag(c);
            break;
          }
          case 23: {
            this.stateInDeclaration(c);
            break;
          }
          case 22: {
            this.stateBeforeDeclaration(c);
            break;
          }
          case 25: {
            this.stateBeforeComment(c);
            break;
          }
          case 24: {
            this.stateInProcessingInstruction(c);
            break;
          }
          case 33: {
            this.stateInEntity();
            break;
          }
        }
        this.index++;
      }
      this.cleanup();
      this.finish();
    }
    /**
     * Remove data that has already been consumed from the buffer.
     */
    cleanup() {
      if (this.sectionStart !== this.index) {
        if (this.state === 1 || this.state === 32 && this.sequenceIndex === 0) {
          this.cbs.ontext(this.sectionStart, this.index);
          this.sectionStart = this.index;
        } else if (this.state === 19 || this.state === 20 || this.state === 21) {
          this.cbs.onattribdata(this.sectionStart, this.index);
          this.sectionStart = this.index;
        }
      }
    }
    finish() {
      this.handleTrailingData();
      this.cbs.onend();
    }
    /** Handle any trailing data. */
    handleTrailingData() {
      const endIndex = this.buffer.length;
      if (this.sectionStart >= endIndex) {
        return;
      }
      if (this.state === 28) {
        if (this.currentSequence === Sequences.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, endIndex);
        } else {
          this.cbs.oncomment(this.sectionStart, endIndex);
        }
      } else if (this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9) ;
      else {
        this.cbs.ontext(this.sectionStart, endIndex);
      }
    }
    emitCodePoint(cp, consumed) {
    }
  };
  var deprecationData = {
    ["COMPILER_IS_ON_ELEMENT"]: {
      message: `Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".`,
      link: `https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html`
    },
    ["COMPILER_V_BIND_SYNC"]: {
      message: (key) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${key}.sync\` should be changed to \`v-model:${key}\`.`,
      link: `https://v3-migration.vuejs.org/breaking-changes/v-model.html`
    },
    ["COMPILER_V_BIND_OBJECT_ORDER"]: {
      message: `v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.`,
      link: `https://v3-migration.vuejs.org/breaking-changes/v-bind.html`
    },
    ["COMPILER_V_ON_NATIVE"]: {
      message: `.native modifier for v-on has been removed as is no longer necessary.`,
      link: `https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html`
    },
    ["COMPILER_V_IF_V_FOR_PRECEDENCE"]: {
      message: `v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.`,
      link: `https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html`
    },
    ["COMPILER_NATIVE_TEMPLATE"]: {
      message: `<template> with no special directives will render as a native template element instead of its inner content in Vue 3.`
    },
    ["COMPILER_INLINE_TEMPLATE"]: {
      message: `"inline-template" has been removed in Vue 3.`,
      link: `https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html`
    },
    ["COMPILER_FILTERS"]: {
      message: `filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.`,
      link: `https://v3-migration.vuejs.org/breaking-changes/filters.html`
    }
  };
  function getCompatValue(key, { compatConfig }) {
    const value = compatConfig && compatConfig[key];
    if (key === "MODE") {
      return value || 3;
    } else {
      return value;
    }
  }
  function isCompatEnabled(key, context) {
    const mode = getCompatValue("MODE", context);
    const value = getCompatValue(key, context);
    return mode === 3 ? value === true : value !== false;
  }
  function checkCompatEnabled(key, context, loc, ...args) {
    const enabled = isCompatEnabled(key, context);
    if (enabled) {
      warnDeprecation(key, context, loc, ...args);
    }
    return enabled;
  }
  function warnDeprecation(key, context, loc, ...args) {
    const val = getCompatValue(key, context);
    if (val === "suppress-warning") {
      return;
    }
    const { message, link } = deprecationData[key];
    const msg = `(deprecation ${key}) ${typeof message === "function" ? message(...args) : message}${link ? `
  Details: ${link}` : ``}`;
    const err = new SyntaxError(msg);
    err.code = key;
    if (loc) err.loc = loc;
    context.onWarn(err);
  }
  function defaultOnError(error) {
    throw error;
  }
  function defaultOnWarn(msg) {
    console.warn(`[Vue warn] ${msg.message}`);
  }
  function createCompilerError(code, loc, messages, additionalMessage) {
    const msg = true ? (messages || errorMessages)[code] + (additionalMessage || ``) : `https://vuejs.org/error-reference/#compiler-${code}`;
    const error = new SyntaxError(String(msg));
    error.code = code;
    error.loc = loc;
    return error;
  }
  var errorMessages = {
    // parse errors
    [0]: "Illegal comment.",
    [1]: "CDATA section is allowed only in XML context.",
    [2]: "Duplicate attribute.",
    [3]: "End tag cannot have attributes.",
    [4]: "Illegal '/' in tags.",
    [5]: "Unexpected EOF in tag.",
    [6]: "Unexpected EOF in CDATA section.",
    [7]: "Unexpected EOF in comment.",
    [8]: "Unexpected EOF in script.",
    [9]: "Unexpected EOF in tag.",
    [10]: "Incorrectly closed comment.",
    [11]: "Incorrectly opened comment.",
    [12]: "Illegal tag name. Use '&lt;' to print '<'.",
    [13]: "Attribute value was expected.",
    [14]: "End tag name was expected.",
    [15]: "Whitespace was expected.",
    [16]: "Unexpected '<!--' in comment.",
    [17]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
    [18]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
    [19]: "Attribute name cannot start with '='.",
    [21]: "'<?' is allowed only in XML context.",
    [20]: `Unexpected null character.`,
    [22]: "Illegal '/' in tags.",
    // Vue-specific parse errors
    [23]: "Invalid end tag.",
    [24]: "Element is missing end tag.",
    [25]: "Interpolation end sign was not found.",
    [27]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
    [26]: "Legal directive name was expected.",
    // transform errors
    [28]: `v-if/v-else-if is missing expression.`,
    [29]: `v-if/else branches must use unique keys.`,
    [30]: `v-else/v-else-if has no adjacent v-if or v-else-if.`,
    [31]: `v-for is missing expression.`,
    [32]: `v-for has invalid expression.`,
    [33]: `<template v-for> key should be placed on the <template> tag.`,
    [34]: `v-bind is missing expression.`,
    [52]: `v-bind with same-name shorthand only allows static argument.`,
    [35]: `v-on is missing expression.`,
    [36]: `Unexpected custom directive on <slot> outlet.`,
    [37]: `Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.`,
    [38]: `Duplicate slot names found. `,
    [39]: `Extraneous children found when component already has explicitly named default slot. These children will be ignored.`,
    [40]: `v-slot can only be used on components or <template> tags.`,
    [41]: `v-model is missing expression.`,
    [42]: `v-model value must be a valid JavaScript member expression.`,
    [43]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
    [44]: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
    [45]: `Error parsing JavaScript expression: `,
    [46]: `<KeepAlive> expects exactly one child component.`,
    [51]: `@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.`,
    // generic errors
    [47]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
    [48]: `ES module mode is not supported in this build of compiler.`,
    [49]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
    [50]: `"scopeId" option is only supported in module mode.`,
    // just to fulfill types
    [53]: ``
  };
  var isStaticExp = (p2) => p2.type === 4 && p2.isStatic;
  function isCoreComponent(tag) {
    switch (tag) {
      case "Teleport":
      case "teleport":
        return TELEPORT;
      case "Suspense":
      case "suspense":
        return SUSPENSE;
      case "KeepAlive":
      case "keep-alive":
        return KEEP_ALIVE;
      case "BaseTransition":
      case "base-transition":
        return BASE_TRANSITION;
    }
  }
  var nonIdentifierRE = /^\d|[^\$\w\xA0-\uFFFF]/;
  var isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
  var validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
  var validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
  var whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
  var getExpSource = (exp) => exp.type === 4 ? exp.content : exp.loc.source;
  var isMemberExpressionBrowser = (exp) => {
    const path = getExpSource(exp).trim().replace(whitespaceRE, (s) => s.trim());
    let state = 0;
    let stateStack = [];
    let currentOpenBracketCount = 0;
    let currentOpenParensCount = 0;
    let currentStringType = null;
    for (let i = 0; i < path.length; i++) {
      const char = path.charAt(i);
      switch (state) {
        case 0:
          if (char === "[") {
            stateStack.push(state);
            state = 1;
            currentOpenBracketCount++;
          } else if (char === "(") {
            stateStack.push(state);
            state = 2;
            currentOpenParensCount++;
          } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) {
            return false;
          }
          break;
        case 1:
          if (char === `'` || char === `"` || char === "`") {
            stateStack.push(state);
            state = 3;
            currentStringType = char;
          } else if (char === `[`) {
            currentOpenBracketCount++;
          } else if (char === `]`) {
            if (!--currentOpenBracketCount) {
              state = stateStack.pop();
            }
          }
          break;
        case 2:
          if (char === `'` || char === `"` || char === "`") {
            stateStack.push(state);
            state = 3;
            currentStringType = char;
          } else if (char === `(`) {
            currentOpenParensCount++;
          } else if (char === `)`) {
            if (i === path.length - 1) {
              return false;
            }
            if (!--currentOpenParensCount) {
              state = stateStack.pop();
            }
          }
          break;
        case 3:
          if (char === currentStringType) {
            state = stateStack.pop();
            currentStringType = null;
          }
          break;
      }
    }
    return !currentOpenBracketCount && !currentOpenParensCount;
  };
  var isMemberExpression = isMemberExpressionBrowser;
  var fnExpRE = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
  var isFnExpressionBrowser = (exp) => fnExpRE.test(getExpSource(exp));
  var isFnExpression = isFnExpressionBrowser;
  function assert(condition, msg) {
    if (!condition) {
      throw new Error(msg || `unexpected compiler condition`);
    }
  }
  function findDir(node, name, allowEmpty = false) {
    for (let i = 0; i < node.props.length; i++) {
      const p2 = node.props[i];
      if (p2.type === 7 && (allowEmpty || p2.exp) && (isString(name) ? p2.name === name : name.test(p2.name))) {
        return p2;
      }
    }
  }
  function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
    for (let i = 0; i < node.props.length; i++) {
      const p2 = node.props[i];
      if (p2.type === 6) {
        if (dynamicOnly) continue;
        if (p2.name === name && (p2.value || allowEmpty)) {
          return p2;
        }
      } else if (p2.name === "bind" && (p2.exp || allowEmpty) && isStaticArgOf(p2.arg, name)) {
        return p2;
      }
    }
  }
  function isStaticArgOf(arg, name) {
    return !!(arg && isStaticExp(arg) && arg.content === name);
  }
  function hasDynamicKeyVBind(node) {
    return node.props.some(
      (p2) => p2.type === 7 && p2.name === "bind" && (!p2.arg || // v-bind="obj"
      p2.arg.type !== 4 || // v-bind:[_ctx.foo]
      !p2.arg.isStatic)
      // v-bind:[foo]
    );
  }
  function isText$1(node) {
    return node.type === 5 || node.type === 2;
  }
  function isVSlot(p2) {
    return p2.type === 7 && p2.name === "slot";
  }
  function isTemplateNode(node) {
    return node.type === 1 && node.tagType === 3;
  }
  function isSlotOutlet(node) {
    return node.type === 1 && node.tagType === 2;
  }
  var propsHelperSet = /* @__PURE__ */ new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
  function getUnnormalizedProps(props, callPath = []) {
    if (props && !isString(props) && props.type === 14) {
      const callee = props.callee;
      if (!isString(callee) && propsHelperSet.has(callee)) {
        return getUnnormalizedProps(
          props.arguments[0],
          callPath.concat(props)
        );
      }
    }
    return [props, callPath];
  }
  function injectProp(node, prop, context) {
    let propsWithInjection;
    let props = node.type === 13 ? node.props : node.arguments[2];
    let callPath = [];
    let parentCall;
    if (props && !isString(props) && props.type === 14) {
      const ret = getUnnormalizedProps(props);
      props = ret[0];
      callPath = ret[1];
      parentCall = callPath[callPath.length - 1];
    }
    if (props == null || isString(props)) {
      propsWithInjection = createObjectExpression([prop]);
    } else if (props.type === 14) {
      const first = props.arguments[0];
      if (!isString(first) && first.type === 15) {
        if (!hasProp(prop, first)) {
          first.properties.unshift(prop);
        }
      } else {
        if (props.callee === TO_HANDLERS) {
          propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
            createObjectExpression([prop]),
            props
          ]);
        } else {
          props.arguments.unshift(createObjectExpression([prop]));
        }
      }
      !propsWithInjection && (propsWithInjection = props);
    } else if (props.type === 15) {
      if (!hasProp(prop, props)) {
        props.properties.unshift(prop);
      }
      propsWithInjection = props;
    } else {
      propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
        createObjectExpression([prop]),
        props
      ]);
      if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
        parentCall = callPath[callPath.length - 2];
      }
    }
    if (node.type === 13) {
      if (parentCall) {
        parentCall.arguments[0] = propsWithInjection;
      } else {
        node.props = propsWithInjection;
      }
    } else {
      if (parentCall) {
        parentCall.arguments[0] = propsWithInjection;
      } else {
        node.arguments[2] = propsWithInjection;
      }
    }
  }
  function hasProp(prop, props) {
    let result = false;
    if (prop.key.type === 4) {
      const propKeyName = prop.key.content;
      result = props.properties.some(
        (p2) => p2.key.type === 4 && p2.key.content === propKeyName
      );
    }
    return result;
  }
  function toValidAssetId(name, type) {
    return `_${type}_${name.replace(/[^\w]/g, (searchValue, replaceValue) => {
      return searchValue === "-" ? "_" : name.charCodeAt(replaceValue).toString();
    })}`;
  }
  function getMemoedVNodeCall(node) {
    if (node.type === 14 && node.callee === WITH_MEMO) {
      return node.arguments[1].returns;
    } else {
      return node;
    }
  }
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;
  var defaultParserOptions = {
    parseMode: "base",
    ns: 0,
    delimiters: [`{{`, `}}`],
    getNamespace: () => 0,
    isVoidTag: NO,
    isPreTag: NO,
    isIgnoreNewlineTag: NO,
    isCustomElement: NO,
    onError: defaultOnError,
    onWarn: defaultOnWarn,
    comments: true,
    prefixIdentifiers: false
  };
  var currentOptions = defaultParserOptions;
  var currentRoot = null;
  var currentInput = "";
  var currentOpenTag = null;
  var currentProp = null;
  var currentAttrValue = "";
  var currentAttrStartIndex = -1;
  var currentAttrEndIndex = -1;
  var inPre = 0;
  var inVPre = false;
  var currentVPreBoundary = null;
  var stack2 = [];
  var tokenizer = new Tokenizer(stack2, {
    onerr: emitError,
    ontext(start, end) {
      onText(getSlice(start, end), start, end);
    },
    ontextentity(char, start, end) {
      onText(char, start, end);
    },
    oninterpolation(start, end) {
      if (inVPre) {
        return onText(getSlice(start, end), start, end);
      }
      let innerStart = start + tokenizer.delimiterOpen.length;
      let innerEnd = end - tokenizer.delimiterClose.length;
      while (isWhitespace(currentInput.charCodeAt(innerStart))) {
        innerStart++;
      }
      while (isWhitespace(currentInput.charCodeAt(innerEnd - 1))) {
        innerEnd--;
      }
      let exp = getSlice(innerStart, innerEnd);
      if (exp.includes("&")) {
        {
          exp = currentOptions.decodeEntities(exp, false);
        }
      }
      addNode({
        type: 5,
        content: createExp(exp, false, getLoc(innerStart, innerEnd)),
        loc: getLoc(start, end)
      });
    },
    onopentagname(start, end) {
      const name = getSlice(start, end);
      currentOpenTag = {
        type: 1,
        tag: name,
        ns: currentOptions.getNamespace(name, stack2[0], currentOptions.ns),
        tagType: 0,
        // will be refined on tag close
        props: [],
        children: [],
        loc: getLoc(start - 1, end),
        codegenNode: void 0
      };
    },
    onopentagend(end) {
      endOpenTag(end);
    },
    onclosetag(start, end) {
      const name = getSlice(start, end);
      if (!currentOptions.isVoidTag(name)) {
        let found = false;
        for (let i = 0; i < stack2.length; i++) {
          const e = stack2[i];
          if (e.tag.toLowerCase() === name.toLowerCase()) {
            found = true;
            if (i > 0) {
              emitError(24, stack2[0].loc.start.offset);
            }
            for (let j = 0; j <= i; j++) {
              const el = stack2.shift();
              onCloseTag(el, end, j < i);
            }
            break;
          }
        }
        if (!found) {
          emitError(23, backTrack(start, 60));
        }
      }
    },
    onselfclosingtag(end) {
      const name = currentOpenTag.tag;
      currentOpenTag.isSelfClosing = true;
      endOpenTag(end);
      if (stack2[0] && stack2[0].tag === name) {
        onCloseTag(stack2.shift(), end);
      }
    },
    onattribname(start, end) {
      currentProp = {
        type: 6,
        name: getSlice(start, end),
        nameLoc: getLoc(start, end),
        value: void 0,
        loc: getLoc(start)
      };
    },
    ondirname(start, end) {
      const raw = getSlice(start, end);
      const name = raw === "." || raw === ":" ? "bind" : raw === "@" ? "on" : raw === "#" ? "slot" : raw.slice(2);
      if (!inVPre && name === "") {
        emitError(26, start);
      }
      if (inVPre || name === "") {
        currentProp = {
          type: 6,
          name: raw,
          nameLoc: getLoc(start, end),
          value: void 0,
          loc: getLoc(start)
        };
      } else {
        currentProp = {
          type: 7,
          name,
          rawName: raw,
          exp: void 0,
          arg: void 0,
          modifiers: raw === "." ? [createSimpleExpression("prop")] : [],
          loc: getLoc(start)
        };
        if (name === "pre") {
          inVPre = tokenizer.inVPre = true;
          currentVPreBoundary = currentOpenTag;
          const props = currentOpenTag.props;
          for (let i = 0; i < props.length; i++) {
            if (props[i].type === 7) {
              props[i] = dirToAttr(props[i]);
            }
          }
        }
      }
    },
    ondirarg(start, end) {
      if (start === end) return;
      const arg = getSlice(start, end);
      if (inVPre) {
        currentProp.name += arg;
        setLocEnd(currentProp.nameLoc, end);
      } else {
        const isStatic = arg[0] !== `[`;
        currentProp.arg = createExp(
          isStatic ? arg : arg.slice(1, -1),
          isStatic,
          getLoc(start, end),
          isStatic ? 3 : 0
        );
      }
    },
    ondirmodifier(start, end) {
      const mod = getSlice(start, end);
      if (inVPre) {
        currentProp.name += "." + mod;
        setLocEnd(currentProp.nameLoc, end);
      } else if (currentProp.name === "slot") {
        const arg = currentProp.arg;
        if (arg) {
          arg.content += "." + mod;
          setLocEnd(arg.loc, end);
        }
      } else {
        const exp = createSimpleExpression(mod, true, getLoc(start, end));
        currentProp.modifiers.push(exp);
      }
    },
    onattribdata(start, end) {
      currentAttrValue += getSlice(start, end);
      if (currentAttrStartIndex < 0) currentAttrStartIndex = start;
      currentAttrEndIndex = end;
    },
    onattribentity(char, start, end) {
      currentAttrValue += char;
      if (currentAttrStartIndex < 0) currentAttrStartIndex = start;
      currentAttrEndIndex = end;
    },
    onattribnameend(end) {
      const start = currentProp.loc.start.offset;
      const name = getSlice(start, end);
      if (currentProp.type === 7) {
        currentProp.rawName = name;
      }
      if (currentOpenTag.props.some(
        (p2) => (p2.type === 7 ? p2.rawName : p2.name) === name
      )) {
        emitError(2, start);
      }
    },
    onattribend(quote, end) {
      if (currentOpenTag && currentProp) {
        setLocEnd(currentProp.loc, end);
        if (quote !== 0) {
          if (currentAttrValue.includes("&")) {
            currentAttrValue = currentOptions.decodeEntities(
              currentAttrValue,
              true
            );
          }
          if (currentProp.type === 6) {
            if (currentProp.name === "class") {
              currentAttrValue = condense(currentAttrValue).trim();
            }
            if (quote === 1 && !currentAttrValue) {
              emitError(13, end);
            }
            currentProp.value = {
              type: 2,
              content: currentAttrValue,
              loc: quote === 1 ? getLoc(currentAttrStartIndex, currentAttrEndIndex) : getLoc(currentAttrStartIndex - 1, currentAttrEndIndex + 1)
            };
            if (tokenizer.inSFCRoot && currentOpenTag.tag === "template" && currentProp.name === "lang" && currentAttrValue && currentAttrValue !== "html") {
              tokenizer.enterRCDATA(toCharCodes(`</template`), 0);
            }
          } else {
            let expParseMode = 0;
            currentProp.exp = createExp(
              currentAttrValue,
              false,
              getLoc(currentAttrStartIndex, currentAttrEndIndex),
              0,
              expParseMode
            );
            if (currentProp.name === "for") {
              currentProp.forParseResult = parseForExpression(currentProp.exp);
            }
            let syncIndex = -1;
            if (currentProp.name === "bind" && (syncIndex = currentProp.modifiers.findIndex(
              (mod) => mod.content === "sync"
            )) > -1 && checkCompatEnabled(
              "COMPILER_V_BIND_SYNC",
              currentOptions,
              currentProp.loc,
              currentProp.arg.loc.source
            )) {
              currentProp.name = "model";
              currentProp.modifiers.splice(syncIndex, 1);
            }
          }
        }
        if (currentProp.type !== 7 || currentProp.name !== "pre") {
          currentOpenTag.props.push(currentProp);
        }
      }
      currentAttrValue = "";
      currentAttrStartIndex = currentAttrEndIndex = -1;
    },
    oncomment(start, end) {
      if (currentOptions.comments) {
        addNode({
          type: 3,
          content: getSlice(start, end),
          loc: getLoc(start - 4, end + 3)
        });
      }
    },
    onend() {
      const end = currentInput.length;
      if (tokenizer.state !== 1) {
        switch (tokenizer.state) {
          case 5:
          case 8:
            emitError(5, end);
            break;
          case 3:
          case 4:
            emitError(
              25,
              tokenizer.sectionStart
            );
            break;
          case 28:
            if (tokenizer.currentSequence === Sequences.CdataEnd) {
              emitError(6, end);
            } else {
              emitError(7, end);
            }
            break;
          case 6:
          case 7:
          case 9:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
          case 16:
          case 17:
          case 18:
          case 19:
          // "
          case 20:
          // '
          case 21:
            emitError(9, end);
            break;
        }
      }
      for (let index = 0; index < stack2.length; index++) {
        onCloseTag(stack2[index], end - 1);
        emitError(24, stack2[index].loc.start.offset);
      }
    },
    oncdata(start, end) {
      if (stack2[0].ns !== 0) {
        onText(getSlice(start, end), start, end);
      } else {
        emitError(1, start - 9);
      }
    },
    onprocessinginstruction(start) {
      if ((stack2[0] ? stack2[0].ns : currentOptions.ns) === 0) {
        emitError(
          21,
          start - 1
        );
      }
    }
  });
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  function parseForExpression(input) {
    const loc = input.loc;
    const exp = input.content;
    const inMatch = exp.match(forAliasRE);
    if (!inMatch) return;
    const [, LHS, RHS] = inMatch;
    const createAliasExpression = (content, offset, asParam = false) => {
      const start = loc.start.offset + offset;
      const end = start + content.length;
      return createExp(
        content,
        false,
        getLoc(start, end),
        0,
        asParam ? 1 : 0
        /* Normal */
      );
    };
    const result = {
      source: createAliasExpression(RHS.trim(), exp.indexOf(RHS, LHS.length)),
      value: void 0,
      key: void 0,
      index: void 0,
      finalized: false
    };
    let valueContent = LHS.trim().replace(stripParensRE, "").trim();
    const trimmedOffset = LHS.indexOf(valueContent);
    const iteratorMatch = valueContent.match(forIteratorRE);
    if (iteratorMatch) {
      valueContent = valueContent.replace(forIteratorRE, "").trim();
      const keyContent = iteratorMatch[1].trim();
      let keyOffset;
      if (keyContent) {
        keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
        result.key = createAliasExpression(keyContent, keyOffset, true);
      }
      if (iteratorMatch[2]) {
        const indexContent = iteratorMatch[2].trim();
        if (indexContent) {
          result.index = createAliasExpression(
            indexContent,
            exp.indexOf(
              indexContent,
              result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length
            ),
            true
          );
        }
      }
    }
    if (valueContent) {
      result.value = createAliasExpression(valueContent, trimmedOffset, true);
    }
    return result;
  }
  function getSlice(start, end) {
    return currentInput.slice(start, end);
  }
  function endOpenTag(end) {
    if (tokenizer.inSFCRoot) {
      currentOpenTag.innerLoc = getLoc(end + 1, end + 1);
    }
    addNode(currentOpenTag);
    const { tag, ns } = currentOpenTag;
    if (ns === 0 && currentOptions.isPreTag(tag)) {
      inPre++;
    }
    if (currentOptions.isVoidTag(tag)) {
      onCloseTag(currentOpenTag, end);
    } else {
      stack2.unshift(currentOpenTag);
      if (ns === 1 || ns === 2) {
        tokenizer.inXML = true;
      }
    }
    currentOpenTag = null;
  }
  function onText(content, start, end) {
    {
      const tag = stack2[0] && stack2[0].tag;
      if (tag !== "script" && tag !== "style" && content.includes("&")) {
        content = currentOptions.decodeEntities(content, false);
      }
    }
    const parent = stack2[0] || currentRoot;
    const lastNode = parent.children[parent.children.length - 1];
    if (lastNode && lastNode.type === 2) {
      lastNode.content += content;
      setLocEnd(lastNode.loc, end);
    } else {
      parent.children.push({
        type: 2,
        content,
        loc: getLoc(start, end)
      });
    }
  }
  function onCloseTag(el, end, isImplied = false) {
    if (isImplied) {
      setLocEnd(el.loc, backTrack(end, 60));
    } else {
      setLocEnd(el.loc, lookAhead(end, 62) + 1);
    }
    if (tokenizer.inSFCRoot) {
      if (el.children.length) {
        el.innerLoc.end = extend({}, el.children[el.children.length - 1].loc.end);
      } else {
        el.innerLoc.end = extend({}, el.innerLoc.start);
      }
      el.innerLoc.source = getSlice(
        el.innerLoc.start.offset,
        el.innerLoc.end.offset
      );
    }
    const { tag, ns, children } = el;
    if (!inVPre) {
      if (tag === "slot") {
        el.tagType = 2;
      } else if (isFragmentTemplate(el)) {
        el.tagType = 3;
      } else if (isComponent(el)) {
        el.tagType = 1;
      }
    }
    if (!tokenizer.inRCDATA) {
      el.children = condenseWhitespace(children);
    }
    if (ns === 0 && currentOptions.isIgnoreNewlineTag(tag)) {
      const first = children[0];
      if (first && first.type === 2) {
        first.content = first.content.replace(/^\r?\n/, "");
      }
    }
    if (ns === 0 && currentOptions.isPreTag(tag)) {
      inPre--;
    }
    if (currentVPreBoundary === el) {
      inVPre = tokenizer.inVPre = false;
      currentVPreBoundary = null;
    }
    if (tokenizer.inXML && (stack2[0] ? stack2[0].ns : currentOptions.ns) === 0) {
      tokenizer.inXML = false;
    }
    {
      const props = el.props;
      if (isCompatEnabled(
        "COMPILER_V_IF_V_FOR_PRECEDENCE",
        currentOptions
      )) {
        let hasIf = false;
        let hasFor = false;
        for (let i = 0; i < props.length; i++) {
          const p2 = props[i];
          if (p2.type === 7) {
            if (p2.name === "if") {
              hasIf = true;
            } else if (p2.name === "for") {
              hasFor = true;
            }
          }
          if (hasIf && hasFor) {
            warnDeprecation(
              "COMPILER_V_IF_V_FOR_PRECEDENCE",
              currentOptions,
              el.loc
            );
            break;
          }
        }
      }
      if (!tokenizer.inSFCRoot && isCompatEnabled(
        "COMPILER_NATIVE_TEMPLATE",
        currentOptions
      ) && el.tag === "template" && !isFragmentTemplate(el)) {
        warnDeprecation(
          "COMPILER_NATIVE_TEMPLATE",
          currentOptions,
          el.loc
        );
        const parent = stack2[0] || currentRoot;
        const index = parent.children.indexOf(el);
        parent.children.splice(index, 1, ...el.children);
      }
      const inlineTemplateProp = props.find(
        (p2) => p2.type === 6 && p2.name === "inline-template"
      );
      if (inlineTemplateProp && checkCompatEnabled(
        "COMPILER_INLINE_TEMPLATE",
        currentOptions,
        inlineTemplateProp.loc
      ) && el.children.length) {
        inlineTemplateProp.value = {
          type: 2,
          content: getSlice(
            el.children[0].loc.start.offset,
            el.children[el.children.length - 1].loc.end.offset
          ),
          loc: inlineTemplateProp.loc
        };
      }
    }
  }
  function lookAhead(index, c) {
    let i = index;
    while (currentInput.charCodeAt(i) !== c && i < currentInput.length - 1) i++;
    return i;
  }
  function backTrack(index, c) {
    let i = index;
    while (currentInput.charCodeAt(i) !== c && i >= 0) i--;
    return i;
  }
  var specialTemplateDir = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
  function isFragmentTemplate({ tag, props }) {
    if (tag === "template") {
      for (let i = 0; i < props.length; i++) {
        if (props[i].type === 7 && specialTemplateDir.has(props[i].name)) {
          return true;
        }
      }
    }
    return false;
  }
  function isComponent({ tag, props }) {
    if (currentOptions.isCustomElement(tag)) {
      return false;
    }
    if (tag === "component" || isUpperCase(tag.charCodeAt(0)) || isCoreComponent(tag) || currentOptions.isBuiltInComponent && currentOptions.isBuiltInComponent(tag) || currentOptions.isNativeTag && !currentOptions.isNativeTag(tag)) {
      return true;
    }
    for (let i = 0; i < props.length; i++) {
      const p2 = props[i];
      if (p2.type === 6) {
        if (p2.name === "is" && p2.value) {
          if (p2.value.content.startsWith("vue:")) {
            return true;
          } else if (checkCompatEnabled(
            "COMPILER_IS_ON_ELEMENT",
            currentOptions,
            p2.loc
          )) {
            return true;
          }
        }
      } else if (
        // :is on plain element - only treat as component in compat mode
        p2.name === "bind" && isStaticArgOf(p2.arg, "is") && checkCompatEnabled(
          "COMPILER_IS_ON_ELEMENT",
          currentOptions,
          p2.loc
        )
      ) {
        return true;
      }
    }
    return false;
  }
  function isUpperCase(c) {
    return c > 64 && c < 91;
  }
  var windowsNewlineRE = /\r\n/g;
  function condenseWhitespace(nodes) {
    const shouldCondense = currentOptions.whitespace !== "preserve";
    let removedWhitespace = false;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node.type === 2) {
        if (!inPre) {
          if (isAllWhitespace(node.content)) {
            const prev = nodes[i - 1] && nodes[i - 1].type;
            const next = nodes[i + 1] && nodes[i + 1].type;
            if (!prev || !next || shouldCondense && (prev === 3 && (next === 3 || next === 1) || prev === 1 && (next === 3 || next === 1 && hasNewlineChar(node.content)))) {
              removedWhitespace = true;
              nodes[i] = null;
            } else {
              node.content = " ";
            }
          } else if (shouldCondense) {
            node.content = condense(node.content);
          }
        } else {
          node.content = node.content.replace(windowsNewlineRE, "\n");
        }
      }
    }
    return removedWhitespace ? nodes.filter(Boolean) : nodes;
  }
  function isAllWhitespace(str) {
    for (let i = 0; i < str.length; i++) {
      if (!isWhitespace(str.charCodeAt(i))) {
        return false;
      }
    }
    return true;
  }
  function hasNewlineChar(str) {
    for (let i = 0; i < str.length; i++) {
      const c = str.charCodeAt(i);
      if (c === 10 || c === 13) {
        return true;
      }
    }
    return false;
  }
  function condense(str) {
    let ret = "";
    let prevCharIsWhitespace = false;
    for (let i = 0; i < str.length; i++) {
      if (isWhitespace(str.charCodeAt(i))) {
        if (!prevCharIsWhitespace) {
          ret += " ";
          prevCharIsWhitespace = true;
        }
      } else {
        ret += str[i];
        prevCharIsWhitespace = false;
      }
    }
    return ret;
  }
  function addNode(node) {
    (stack2[0] || currentRoot).children.push(node);
  }
  function getLoc(start, end) {
    return {
      start: tokenizer.getPos(start),
      // @ts-expect-error allow late attachment
      end: end == null ? end : tokenizer.getPos(end),
      // @ts-expect-error allow late attachment
      source: end == null ? end : getSlice(start, end)
    };
  }
  function cloneLoc(loc) {
    return getLoc(loc.start.offset, loc.end.offset);
  }
  function setLocEnd(loc, end) {
    loc.end = tokenizer.getPos(end);
    loc.source = getSlice(loc.start.offset, end);
  }
  function dirToAttr(dir) {
    const attr = {
      type: 6,
      name: dir.rawName,
      nameLoc: getLoc(
        dir.loc.start.offset,
        dir.loc.start.offset + dir.rawName.length
      ),
      value: void 0,
      loc: dir.loc
    };
    if (dir.exp) {
      const loc = dir.exp.loc;
      if (loc.end.offset < dir.loc.end.offset) {
        loc.start.offset--;
        loc.start.column--;
        loc.end.offset++;
        loc.end.column++;
      }
      attr.value = {
        type: 2,
        content: dir.exp.content,
        loc
      };
    }
    return attr;
  }
  function createExp(content, isStatic = false, loc, constType = 0, parseMode = 0) {
    const exp = createSimpleExpression(content, isStatic, loc, constType);
    return exp;
  }
  function emitError(code, index, message) {
    currentOptions.onError(
      createCompilerError(code, getLoc(index, index), void 0, message)
    );
  }
  function reset() {
    tokenizer.reset();
    currentOpenTag = null;
    currentProp = null;
    currentAttrValue = "";
    currentAttrStartIndex = -1;
    currentAttrEndIndex = -1;
    stack2.length = 0;
  }
  function baseParse(input, options) {
    reset();
    currentInput = input;
    currentOptions = extend({}, defaultParserOptions);
    if (options) {
      let key;
      for (key in options) {
        if (options[key] != null) {
          currentOptions[key] = options[key];
        }
      }
    }
    if (true) {
      if (!currentOptions.decodeEntities) {
        throw new Error(
          `[@vue/compiler-core] decodeEntities option is required in browser builds.`
        );
      }
    }
    tokenizer.mode = currentOptions.parseMode === "html" ? 1 : currentOptions.parseMode === "sfc" ? 2 : 0;
    tokenizer.inXML = currentOptions.ns === 1 || currentOptions.ns === 2;
    const delimiters = options && options.delimiters;
    if (delimiters) {
      tokenizer.delimiterOpen = toCharCodes(delimiters[0]);
      tokenizer.delimiterClose = toCharCodes(delimiters[1]);
    }
    const root = currentRoot = createRoot([], input);
    tokenizer.parse(currentInput);
    root.loc = getLoc(0, input.length);
    root.children = condenseWhitespace(root.children);
    currentRoot = null;
    return root;
  }
  function cacheStatic(root, context) {
    walk(
      root,
      void 0,
      context,
      // Root node is unfortunately non-hoistable due to potential parent
      // fallthrough attributes.
      !!getSingleElementRoot(root)
    );
  }
  function getSingleElementRoot(root) {
    const children = root.children.filter((x) => x.type !== 3);
    return children.length === 1 && children[0].type === 1 && !isSlotOutlet(children[0]) ? children[0] : null;
  }
  function walk(node, parent, context, doNotHoistNode = false, inFor = false) {
    const { children } = node;
    const toCache = [];
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.type === 1 && child.tagType === 0) {
        const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
        if (constantType > 0) {
          if (constantType >= 2) {
            child.codegenNode.patchFlag = -1;
            toCache.push(child);
            continue;
          }
        } else {
          const codegenNode = child.codegenNode;
          if (codegenNode.type === 13) {
            const flag = codegenNode.patchFlag;
            if ((flag === void 0 || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
              const props = getNodeProps(child);
              if (props) {
                codegenNode.props = context.hoist(props);
              }
            }
            if (codegenNode.dynamicProps) {
              codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
            }
          }
        }
      } else if (child.type === 12) {
        const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
        if (constantType >= 2) {
          toCache.push(child);
          continue;
        }
      }
      if (child.type === 1) {
        const isComponent2 = child.tagType === 1;
        if (isComponent2) {
          context.scopes.vSlot++;
        }
        walk(child, node, context, false, inFor);
        if (isComponent2) {
          context.scopes.vSlot--;
        }
      } else if (child.type === 11) {
        walk(child, node, context, child.children.length === 1, true);
      } else if (child.type === 9) {
        for (let i2 = 0; i2 < child.branches.length; i2++) {
          walk(
            child.branches[i2],
            node,
            context,
            child.branches[i2].children.length === 1,
            inFor
          );
        }
      }
    }
    let cachedAsArray = false;
    const slotCacheKeys = [];
    if (toCache.length === children.length && node.type === 1) {
      if (node.tagType === 0 && node.codegenNode && node.codegenNode.type === 13 && isArray(node.codegenNode.children)) {
        node.codegenNode.children = getCacheExpression(
          createArrayExpression(node.codegenNode.children)
        );
        cachedAsArray = true;
      } else if (node.tagType === 1 && node.codegenNode && node.codegenNode.type === 13 && node.codegenNode.children && !isArray(node.codegenNode.children) && node.codegenNode.children.type === 15) {
        const slot = getSlotNode(node.codegenNode, "default");
        if (slot) {
          slotCacheKeys.push(context.cached.length);
          slot.returns = getCacheExpression(
            createArrayExpression(slot.returns)
          );
          cachedAsArray = true;
        }
      } else if (node.tagType === 3 && parent && parent.type === 1 && parent.tagType === 1 && parent.codegenNode && parent.codegenNode.type === 13 && parent.codegenNode.children && !isArray(parent.codegenNode.children) && parent.codegenNode.children.type === 15) {
        const slotName = findDir(node, "slot", true);
        const slot = slotName && slotName.arg && getSlotNode(parent.codegenNode, slotName.arg);
        if (slot) {
          slotCacheKeys.push(context.cached.length);
          slot.returns = getCacheExpression(
            createArrayExpression(slot.returns)
          );
          cachedAsArray = true;
        }
      }
    }
    if (!cachedAsArray) {
      for (const child of toCache) {
        slotCacheKeys.push(context.cached.length);
        child.codegenNode = context.cache(child.codegenNode);
      }
    }
    if (slotCacheKeys.length && node.type === 1 && node.tagType === 1 && node.codegenNode && node.codegenNode.type === 13 && node.codegenNode.children && !isArray(node.codegenNode.children) && node.codegenNode.children.type === 15) {
      node.codegenNode.children.properties.push(
        createObjectProperty(
          `__`,
          createSimpleExpression(JSON.stringify(slotCacheKeys), false)
        )
      );
    }
    function getCacheExpression(value) {
      const exp = context.cache(value);
      if (inFor && context.hmr) {
        exp.needArraySpread = true;
      }
      return exp;
    }
    function getSlotNode(node2, name) {
      if (node2.children && !isArray(node2.children) && node2.children.type === 15) {
        const slot = node2.children.properties.find(
          (p2) => p2.key === name || p2.key.content === name
        );
        return slot && slot.value;
      }
    }
    if (toCache.length && context.transformHoist) {
      context.transformHoist(children, context, node);
    }
  }
  function getConstantType(node, context) {
    const { constantCache } = context;
    switch (node.type) {
      case 1:
        if (node.tagType !== 0) {
          return 0;
        }
        const cached = constantCache.get(node);
        if (cached !== void 0) {
          return cached;
        }
        const codegenNode = node.codegenNode;
        if (codegenNode.type !== 13) {
          return 0;
        }
        if (codegenNode.isBlock && node.tag !== "svg" && node.tag !== "foreignObject" && node.tag !== "math") {
          return 0;
        }
        if (codegenNode.patchFlag === void 0) {
          let returnType2 = 3;
          const generatedPropsType = getGeneratedPropsConstantType(node, context);
          if (generatedPropsType === 0) {
            constantCache.set(node, 0);
            return 0;
          }
          if (generatedPropsType < returnType2) {
            returnType2 = generatedPropsType;
          }
          for (let i = 0; i < node.children.length; i++) {
            const childType = getConstantType(node.children[i], context);
            if (childType === 0) {
              constantCache.set(node, 0);
              return 0;
            }
            if (childType < returnType2) {
              returnType2 = childType;
            }
          }
          if (returnType2 > 1) {
            for (let i = 0; i < node.props.length; i++) {
              const p2 = node.props[i];
              if (p2.type === 7 && p2.name === "bind" && p2.exp) {
                const expType = getConstantType(p2.exp, context);
                if (expType === 0) {
                  constantCache.set(node, 0);
                  return 0;
                }
                if (expType < returnType2) {
                  returnType2 = expType;
                }
              }
            }
          }
          if (codegenNode.isBlock) {
            for (let i = 0; i < node.props.length; i++) {
              const p2 = node.props[i];
              if (p2.type === 7) {
                constantCache.set(node, 0);
                return 0;
              }
            }
            context.removeHelper(OPEN_BLOCK);
            context.removeHelper(
              getVNodeBlockHelper(context.inSSR, codegenNode.isComponent)
            );
            codegenNode.isBlock = false;
            context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
          }
          constantCache.set(node, returnType2);
          return returnType2;
        } else {
          constantCache.set(node, 0);
          return 0;
        }
      case 2:
      case 3:
        return 3;
      case 9:
      case 11:
      case 10:
        return 0;
      case 5:
      case 12:
        return getConstantType(node.content, context);
      case 4:
        return node.constType;
      case 8:
        let returnType = 3;
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (isString(child) || isSymbol(child)) {
            continue;
          }
          const childType = getConstantType(child, context);
          if (childType === 0) {
            return 0;
          } else if (childType < returnType) {
            returnType = childType;
          }
        }
        return returnType;
      case 20:
        return 2;
      default:
        if (true) ;
        return 0;
    }
  }
  var allowHoistedHelperSet = /* @__PURE__ */ new Set([
    NORMALIZE_CLASS,
    NORMALIZE_STYLE,
    NORMALIZE_PROPS,
    GUARD_REACTIVE_PROPS
  ]);
  function getConstantTypeOfHelperCall(value, context) {
    if (value.type === 14 && !isString(value.callee) && allowHoistedHelperSet.has(value.callee)) {
      const arg = value.arguments[0];
      if (arg.type === 4) {
        return getConstantType(arg, context);
      } else if (arg.type === 14) {
        return getConstantTypeOfHelperCall(arg, context);
      }
    }
    return 0;
  }
  function getGeneratedPropsConstantType(node, context) {
    let returnType = 3;
    const props = getNodeProps(node);
    if (props && props.type === 15) {
      const { properties } = props;
      for (let i = 0; i < properties.length; i++) {
        const { key, value } = properties[i];
        const keyType = getConstantType(key, context);
        if (keyType === 0) {
          return keyType;
        }
        if (keyType < returnType) {
          returnType = keyType;
        }
        let valueType;
        if (value.type === 4) {
          valueType = getConstantType(value, context);
        } else if (value.type === 14) {
          valueType = getConstantTypeOfHelperCall(value, context);
        } else {
          valueType = 0;
        }
        if (valueType === 0) {
          return valueType;
        }
        if (valueType < returnType) {
          returnType = valueType;
        }
      }
    }
    return returnType;
  }
  function getNodeProps(node) {
    const codegenNode = node.codegenNode;
    if (codegenNode.type === 13) {
      return codegenNode.props;
    }
  }
  function createTransformContext(root, {
    filename = "",
    prefixIdentifiers = false,
    hoistStatic = false,
    hmr = false,
    cacheHandlers = false,
    nodeTransforms = [],
    directiveTransforms = {},
    transformHoist = null,
    isBuiltInComponent = NOOP,
    isCustomElement = NOOP,
    expressionPlugins = [],
    scopeId = null,
    slotted = true,
    ssr = false,
    inSSR = false,
    ssrCssVars = ``,
    bindingMetadata = EMPTY_OBJ,
    inline = false,
    isTS = false,
    onError = defaultOnError,
    onWarn = defaultOnWarn,
    compatConfig
  }) {
    const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
    const context = {
      // options
      filename,
      selfName: nameMatch && capitalize(camelize(nameMatch[1])),
      prefixIdentifiers,
      hoistStatic,
      hmr,
      cacheHandlers,
      nodeTransforms,
      directiveTransforms,
      transformHoist,
      isBuiltInComponent,
      isCustomElement,
      expressionPlugins,
      scopeId,
      slotted,
      ssr,
      inSSR,
      ssrCssVars,
      bindingMetadata,
      inline,
      isTS,
      onError,
      onWarn,
      compatConfig,
      // state
      root,
      helpers: /* @__PURE__ */ new Map(),
      components: /* @__PURE__ */ new Set(),
      directives: /* @__PURE__ */ new Set(),
      hoists: [],
      imports: [],
      cached: [],
      constantCache: /* @__PURE__ */ new WeakMap(),
      temps: 0,
      identifiers: /* @__PURE__ */ Object.create(null),
      scopes: {
        vFor: 0,
        vSlot: 0,
        vPre: 0,
        vOnce: 0
      },
      parent: null,
      grandParent: null,
      currentNode: root,
      childIndex: 0,
      inVOnce: false,
      // methods
      helper(name) {
        const count = context.helpers.get(name) || 0;
        context.helpers.set(name, count + 1);
        return name;
      },
      removeHelper(name) {
        const count = context.helpers.get(name);
        if (count) {
          const currentCount = count - 1;
          if (!currentCount) {
            context.helpers.delete(name);
          } else {
            context.helpers.set(name, currentCount);
          }
        }
      },
      helperString(name) {
        return `_${helperNameMap[context.helper(name)]}`;
      },
      replaceNode(node) {
        if (true) {
          if (!context.currentNode) {
            throw new Error(`Node being replaced is already removed.`);
          }
          if (!context.parent) {
            throw new Error(`Cannot replace root node.`);
          }
        }
        context.parent.children[context.childIndex] = context.currentNode = node;
      },
      removeNode(node) {
        if (!context.parent) {
          throw new Error(`Cannot remove root node.`);
        }
        const list = context.parent.children;
        const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
        if (removalIndex < 0) {
          throw new Error(`node being removed is not a child of current parent`);
        }
        if (!node || node === context.currentNode) {
          context.currentNode = null;
          context.onNodeRemoved();
        } else {
          if (context.childIndex > removalIndex) {
            context.childIndex--;
            context.onNodeRemoved();
          }
        }
        context.parent.children.splice(removalIndex, 1);
      },
      onNodeRemoved: NOOP,
      addIdentifiers(exp) {
      },
      removeIdentifiers(exp) {
      },
      hoist(exp) {
        if (isString(exp)) exp = createSimpleExpression(exp);
        context.hoists.push(exp);
        const identifier = createSimpleExpression(
          `_hoisted_${context.hoists.length}`,
          false,
          exp.loc,
          2
        );
        identifier.hoisted = exp;
        return identifier;
      },
      cache(exp, isVNode2 = false, inVOnce = false) {
        const cacheExp = createCacheExpression(
          context.cached.length,
          exp,
          isVNode2,
          inVOnce
        );
        context.cached.push(cacheExp);
        return cacheExp;
      }
    };
    {
      context.filters = /* @__PURE__ */ new Set();
    }
    return context;
  }
  function transform(root, options) {
    const context = createTransformContext(root, options);
    traverseNode(root, context);
    if (options.hoistStatic) {
      cacheStatic(root, context);
    }
    if (!options.ssr) {
      createRootCodegen(root, context);
    }
    root.helpers = /* @__PURE__ */ new Set([...context.helpers.keys()]);
    root.components = [...context.components];
    root.directives = [...context.directives];
    root.imports = context.imports;
    root.hoists = context.hoists;
    root.temps = context.temps;
    root.cached = context.cached;
    root.transformed = true;
    {
      root.filters = [...context.filters];
    }
  }
  function createRootCodegen(root, context) {
    const { helper } = context;
    const { children } = root;
    if (children.length === 1) {
      const singleElementRootChild = getSingleElementRoot(root);
      if (singleElementRootChild && singleElementRootChild.codegenNode) {
        const codegenNode = singleElementRootChild.codegenNode;
        if (codegenNode.type === 13) {
          convertToBlock(codegenNode, context);
        }
        root.codegenNode = codegenNode;
      } else {
        root.codegenNode = children[0];
      }
    } else if (children.length > 1) {
      let patchFlag = 64;
      if (children.filter((c) => c.type !== 3).length === 1) {
        patchFlag |= 2048;
      }
      root.codegenNode = createVNodeCall(
        context,
        helper(FRAGMENT),
        void 0,
        root.children,
        patchFlag,
        void 0,
        void 0,
        true,
        void 0,
        false
      );
    } else ;
  }
  function traverseChildren(parent, context) {
    let i = 0;
    const nodeRemoved = () => {
      i--;
    };
    for (; i < parent.children.length; i++) {
      const child = parent.children[i];
      if (isString(child)) continue;
      context.grandParent = context.parent;
      context.parent = parent;
      context.childIndex = i;
      context.onNodeRemoved = nodeRemoved;
      traverseNode(child, context);
    }
  }
  function traverseNode(node, context) {
    context.currentNode = node;
    const { nodeTransforms } = context;
    const exitFns = [];
    for (let i2 = 0; i2 < nodeTransforms.length; i2++) {
      const onExit = nodeTransforms[i2](node, context);
      if (onExit) {
        if (isArray(onExit)) {
          exitFns.push(...onExit);
        } else {
          exitFns.push(onExit);
        }
      }
      if (!context.currentNode) {
        return;
      } else {
        node = context.currentNode;
      }
    }
    switch (node.type) {
      case 3:
        if (!context.ssr) {
          context.helper(CREATE_COMMENT);
        }
        break;
      case 5:
        if (!context.ssr) {
          context.helper(TO_DISPLAY_STRING);
        }
        break;
      // for container types, further traverse downwards
      case 9:
        for (let i2 = 0; i2 < node.branches.length; i2++) {
          traverseNode(node.branches[i2], context);
        }
        break;
      case 10:
      case 11:
      case 1:
      case 0:
        traverseChildren(node, context);
        break;
    }
    context.currentNode = node;
    let i = exitFns.length;
    while (i--) {
      exitFns[i]();
    }
  }
  function createStructuralDirectiveTransform(name, fn) {
    const matches2 = isString(name) ? (n) => n === name : (n) => name.test(n);
    return (node, context) => {
      if (node.type === 1) {
        const { props } = node;
        if (node.tagType === 3 && props.some(isVSlot)) {
          return;
        }
        const exitFns = [];
        for (let i = 0; i < props.length; i++) {
          const prop = props[i];
          if (prop.type === 7 && matches2(prop.name)) {
            props.splice(i, 1);
            i--;
            const onExit = fn(node, prop, context);
            if (onExit) exitFns.push(onExit);
          }
        }
        return exitFns;
      }
    };
  }
  var PURE_ANNOTATION = `/*@__PURE__*/`;
  var aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
  function createCodegenContext(ast, {
    mode = "function",
    prefixIdentifiers = mode === "module",
    sourceMap = false,
    filename = `template.vue.html`,
    scopeId = null,
    optimizeImports = false,
    runtimeGlobalName = `Vue`,
    runtimeModuleName = `vue`,
    ssrRuntimeModuleName = "vue/server-renderer",
    ssr = false,
    isTS = false,
    inSSR = false
  }) {
    const context = {
      mode,
      prefixIdentifiers,
      sourceMap,
      filename,
      scopeId,
      optimizeImports,
      runtimeGlobalName,
      runtimeModuleName,
      ssrRuntimeModuleName,
      ssr,
      isTS,
      inSSR,
      source: ast.source,
      code: ``,
      column: 1,
      line: 1,
      offset: 0,
      indentLevel: 0,
      pure: false,
      map: void 0,
      helper(key) {
        return `_${helperNameMap[key]}`;
      },
      push(code, newlineIndex = -2, node) {
        context.code += code;
      },
      indent() {
        newline(++context.indentLevel);
      },
      deindent(withoutNewLine = false) {
        if (withoutNewLine) {
          --context.indentLevel;
        } else {
          newline(--context.indentLevel);
        }
      },
      newline() {
        newline(context.indentLevel);
      }
    };
    function newline(n) {
      context.push(
        "\n" + `  `.repeat(n),
        0
        /* Start */
      );
    }
    return context;
  }
  function generate(ast, options = {}) {
    const context = createCodegenContext(ast, options);
    if (options.onContextCreated) options.onContextCreated(context);
    const {
      mode,
      push,
      prefixIdentifiers,
      indent,
      deindent,
      newline,
      scopeId,
      ssr
    } = context;
    const helpers = Array.from(ast.helpers);
    const hasHelpers = helpers.length > 0;
    const useWithBlock = !prefixIdentifiers && mode !== "module";
    const preambleContext = context;
    {
      genFunctionPreamble(ast, preambleContext);
    }
    const functionName = ssr ? `ssrRender` : `render`;
    const args = ssr ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
    const signature = args.join(", ");
    {
      push(`function ${functionName}(${signature}) {`);
    }
    indent();
    if (useWithBlock) {
      push(`with (_ctx) {`);
      indent();
      if (hasHelpers) {
        push(
          `const { ${helpers.map(aliasHelper).join(", ")} } = _Vue
`,
          -1
          /* End */
        );
        newline();
      }
    }
    if (ast.components.length) {
      genAssets(ast.components, "component", context);
      if (ast.directives.length || ast.temps > 0) {
        newline();
      }
    }
    if (ast.directives.length) {
      genAssets(ast.directives, "directive", context);
      if (ast.temps > 0) {
        newline();
      }
    }
    if (ast.filters && ast.filters.length) {
      newline();
      genAssets(ast.filters, "filter", context);
      newline();
    }
    if (ast.temps > 0) {
      push(`let `);
      for (let i = 0; i < ast.temps; i++) {
        push(`${i > 0 ? `, ` : ``}_temp${i}`);
      }
    }
    if (ast.components.length || ast.directives.length || ast.temps) {
      push(
        `
`,
        0
        /* Start */
      );
      newline();
    }
    if (!ssr) {
      push(`return `);
    }
    if (ast.codegenNode) {
      genNode(ast.codegenNode, context);
    } else {
      push(`null`);
    }
    if (useWithBlock) {
      deindent();
      push(`}`);
    }
    deindent();
    push(`}`);
    return {
      ast,
      code: context.code,
      preamble: ``,
      map: context.map ? context.map.toJSON() : void 0
    };
  }
  function genFunctionPreamble(ast, context) {
    const {
      ssr,
      prefixIdentifiers,
      push,
      newline,
      runtimeModuleName,
      runtimeGlobalName,
      ssrRuntimeModuleName
    } = context;
    const VueBinding = runtimeGlobalName;
    const helpers = Array.from(ast.helpers);
    if (helpers.length > 0) {
      {
        push(
          `const _Vue = ${VueBinding}
`,
          -1
          /* End */
        );
        if (ast.hoists.length) {
          const staticHelpers = [
            CREATE_VNODE,
            CREATE_ELEMENT_VNODE,
            CREATE_COMMENT,
            CREATE_TEXT,
            CREATE_STATIC
          ].filter((helper) => helpers.includes(helper)).map(aliasHelper).join(", ");
          push(
            `const { ${staticHelpers} } = _Vue
`,
            -1
            /* End */
          );
        }
      }
    }
    genHoists(ast.hoists, context);
    newline();
    push(`return `);
  }
  function genAssets(assets, type, { helper, push, newline, isTS }) {
    const resolver = helper(
      type === "filter" ? RESOLVE_FILTER : type === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE
    );
    for (let i = 0; i < assets.length; i++) {
      let id = assets[i];
      const maybeSelfReference = id.endsWith("__self");
      if (maybeSelfReference) {
        id = id.slice(0, -6);
      }
      push(
        `const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`
      );
      if (i < assets.length - 1) {
        newline();
      }
    }
  }
  function genHoists(hoists, context) {
    if (!hoists.length) {
      return;
    }
    context.pure = true;
    const { push, newline } = context;
    newline();
    for (let i = 0; i < hoists.length; i++) {
      const exp = hoists[i];
      if (exp) {
        push(`const _hoisted_${i + 1} = `);
        genNode(exp, context);
        newline();
      }
    }
    context.pure = false;
  }
  function isText(n) {
    return isString(n) || n.type === 4 || n.type === 2 || n.type === 5 || n.type === 8;
  }
  function genNodeListAsArray(nodes, context) {
    const multilines = nodes.length > 3 || nodes.some((n) => isArray(n) || !isText(n));
    context.push(`[`);
    multilines && context.indent();
    genNodeList(nodes, context, multilines);
    multilines && context.deindent();
    context.push(`]`);
  }
  function genNodeList(nodes, context, multilines = false, comma = true) {
    const { push, newline } = context;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (isString(node)) {
        push(
          node,
          -3
          /* Unknown */
        );
      } else if (isArray(node)) {
        genNodeListAsArray(node, context);
      } else {
        genNode(node, context);
      }
      if (i < nodes.length - 1) {
        if (multilines) {
          comma && push(",");
          newline();
        } else {
          comma && push(", ");
        }
      }
    }
  }
  function genNode(node, context) {
    if (isString(node)) {
      context.push(
        node,
        -3
        /* Unknown */
      );
      return;
    }
    if (isSymbol(node)) {
      context.push(context.helper(node));
      return;
    }
    switch (node.type) {
      case 1:
      case 9:
      case 11:
        assert(
          node.codegenNode != null,
          `Codegen node is missing for element/if/for node. Apply appropriate transforms first.`
        );
        genNode(node.codegenNode, context);
        break;
      case 2:
        genText(node, context);
        break;
      case 4:
        genExpression(node, context);
        break;
      case 5:
        genInterpolation(node, context);
        break;
      case 12:
        genNode(node.codegenNode, context);
        break;
      case 8:
        genCompoundExpression(node, context);
        break;
      case 3:
        genComment(node, context);
        break;
      case 13:
        genVNodeCall(node, context);
        break;
      case 14:
        genCallExpression(node, context);
        break;
      case 15:
        genObjectExpression(node, context);
        break;
      case 17:
        genArrayExpression(node, context);
        break;
      case 18:
        genFunctionExpression(node, context);
        break;
      case 19:
        genConditionalExpression(node, context);
        break;
      case 20:
        genCacheExpression(node, context);
        break;
      case 21:
        genNodeList(node.body, context, true, false);
        break;
      // SSR only types
      case 22:
        break;
      case 23:
        break;
      case 24:
        break;
      case 25:
        break;
      case 26:
        break;
      /* v8 ignore start */
      case 10:
        break;
      default:
        if (true) {
          assert(false, `unhandled codegen node type: ${node.type}`);
          const exhaustiveCheck = node;
          return exhaustiveCheck;
        }
    }
  }
  function genText(node, context) {
    context.push(JSON.stringify(node.content), -3, node);
  }
  function genExpression(node, context) {
    const { content, isStatic } = node;
    context.push(
      isStatic ? JSON.stringify(content) : content,
      -3,
      node
    );
  }
  function genInterpolation(node, context) {
    const { push, helper, pure } = context;
    if (pure) push(PURE_ANNOTATION);
    push(`${helper(TO_DISPLAY_STRING)}(`);
    genNode(node.content, context);
    push(`)`);
  }
  function genCompoundExpression(node, context) {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (isString(child)) {
        context.push(
          child,
          -3
          /* Unknown */
        );
      } else {
        genNode(child, context);
      }
    }
  }
  function genExpressionAsPropertyKey(node, context) {
    const { push } = context;
    if (node.type === 8) {
      push(`[`);
      genCompoundExpression(node, context);
      push(`]`);
    } else if (node.isStatic) {
      const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
      push(text, -2, node);
    } else {
      push(`[${node.content}]`, -3, node);
    }
  }
  function genComment(node, context) {
    const { push, helper, pure } = context;
    if (pure) {
      push(PURE_ANNOTATION);
    }
    push(
      `${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`,
      -3,
      node
    );
  }
  function genVNodeCall(node, context) {
    const { push, helper, pure } = context;
    const {
      tag,
      props,
      children,
      patchFlag,
      dynamicProps,
      directives,
      isBlock,
      disableTracking,
      isComponent: isComponent2
    } = node;
    let patchFlagString;
    if (patchFlag) {
      if (true) {
        if (patchFlag < 0) {
          patchFlagString = patchFlag + ` /* ${PatchFlagNames[patchFlag]} */`;
        } else {
          const flagNames = Object.keys(PatchFlagNames).map(Number).filter((n) => n > 0 && patchFlag & n).map((n) => PatchFlagNames[n]).join(`, `);
          patchFlagString = patchFlag + ` /* ${flagNames} */`;
        }
      } else {
        patchFlagString = String(patchFlag);
      }
    }
    if (directives) {
      push(helper(WITH_DIRECTIVES) + `(`);
    }
    if (isBlock) {
      push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
    }
    if (pure) {
      push(PURE_ANNOTATION);
    }
    const callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent2) : getVNodeHelper(context.inSSR, isComponent2);
    push(helper(callHelper) + `(`, -2, node);
    genNodeList(
      genNullableArgs([tag, props, children, patchFlagString, dynamicProps]),
      context
    );
    push(`)`);
    if (isBlock) {
      push(`)`);
    }
    if (directives) {
      push(`, `);
      genNode(directives, context);
      push(`)`);
    }
  }
  function genNullableArgs(args) {
    let i = args.length;
    while (i--) {
      if (args[i] != null) break;
    }
    return args.slice(0, i + 1).map((arg) => arg || `null`);
  }
  function genCallExpression(node, context) {
    const { push, helper, pure } = context;
    const callee = isString(node.callee) ? node.callee : helper(node.callee);
    if (pure) {
      push(PURE_ANNOTATION);
    }
    push(callee + `(`, -2, node);
    genNodeList(node.arguments, context);
    push(`)`);
  }
  function genObjectExpression(node, context) {
    const { push, indent, deindent, newline } = context;
    const { properties } = node;
    if (!properties.length) {
      push(`{}`, -2, node);
      return;
    }
    const multilines = properties.length > 1 || properties.some((p2) => p2.value.type !== 4);
    push(multilines ? `{` : `{ `);
    multilines && indent();
    for (let i = 0; i < properties.length; i++) {
      const { key, value } = properties[i];
      genExpressionAsPropertyKey(key, context);
      push(`: `);
      genNode(value, context);
      if (i < properties.length - 1) {
        push(`,`);
        newline();
      }
    }
    multilines && deindent();
    push(multilines ? `}` : ` }`);
  }
  function genArrayExpression(node, context) {
    genNodeListAsArray(node.elements, context);
  }
  function genFunctionExpression(node, context) {
    const { push, indent, deindent } = context;
    const { params, returns, body, newline, isSlot } = node;
    if (isSlot) {
      push(`_${helperNameMap[WITH_CTX]}(`);
    }
    push(`(`, -2, node);
    if (isArray(params)) {
      genNodeList(params, context);
    } else if (params) {
      genNode(params, context);
    }
    push(`) => `);
    if (newline || body) {
      push(`{`);
      indent();
    }
    if (returns) {
      if (newline) {
        push(`return `);
      }
      if (isArray(returns)) {
        genNodeListAsArray(returns, context);
      } else {
        genNode(returns, context);
      }
    } else if (body) {
      genNode(body, context);
    }
    if (newline || body) {
      deindent();
      push(`}`);
    }
    if (isSlot) {
      if (node.isNonScopedSlot) {
        push(`, undefined, true`);
      }
      push(`)`);
    }
  }
  function genConditionalExpression(node, context) {
    const { test, consequent, alternate, newline: needNewline } = node;
    const { push, indent, deindent, newline } = context;
    if (test.type === 4) {
      const needsParens = !isSimpleIdentifier(test.content);
      needsParens && push(`(`);
      genExpression(test, context);
      needsParens && push(`)`);
    } else {
      push(`(`);
      genNode(test, context);
      push(`)`);
    }
    needNewline && indent();
    context.indentLevel++;
    needNewline || push(` `);
    push(`? `);
    genNode(consequent, context);
    context.indentLevel--;
    needNewline && newline();
    needNewline || push(` `);
    push(`: `);
    const isNested = alternate.type === 19;
    if (!isNested) {
      context.indentLevel++;
    }
    genNode(alternate, context);
    if (!isNested) {
      context.indentLevel--;
    }
    needNewline && deindent(
      true
      /* without newline */
    );
  }
  function genCacheExpression(node, context) {
    const { push, helper, indent, deindent, newline } = context;
    const { needPauseTracking, needArraySpread } = node;
    if (needArraySpread) {
      push(`[...(`);
    }
    push(`_cache[${node.index}] || (`);
    if (needPauseTracking) {
      indent();
      push(`${helper(SET_BLOCK_TRACKING)}(-1`);
      if (node.inVOnce) push(`, true`);
      push(`),`);
      newline();
      push(`(`);
    }
    push(`_cache[${node.index}] = `);
    genNode(node.value, context);
    if (needPauseTracking) {
      push(`).cacheIndex = ${node.index},`);
      newline();
      push(`${helper(SET_BLOCK_TRACKING)}(1),`);
      newline();
      push(`_cache[${node.index}]`);
      deindent();
    }
    push(`)`);
    if (needArraySpread) {
      push(`)]`);
    }
  }
  var prohibitedKeywordRE = new RegExp(
    "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
  );
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
  function validateBrowserExpression(node, context, asParams = false, asRawStatements = false) {
    const exp = node.content;
    if (!exp.trim()) {
      return;
    }
    try {
      new Function(
        asRawStatements ? ` ${exp} ` : `return ${asParams ? `(${exp}) => {}` : `(${exp})`}`
      );
    } catch (e) {
      let message = e.message;
      const keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
      if (keywordMatch) {
        message = `avoid using JavaScript keyword as property name: "${keywordMatch[0]}"`;
      }
      context.onError(
        createCompilerError(
          45,
          node.loc,
          void 0,
          message
        )
      );
    }
  }
  var transformExpression = (node, context) => {
    if (node.type === 5) {
      node.content = processExpression(
        node.content,
        context
      );
    } else if (node.type === 1) {
      const memo = findDir(node, "memo");
      for (let i = 0; i < node.props.length; i++) {
        const dir = node.props[i];
        if (dir.type === 7 && dir.name !== "for") {
          const exp = dir.exp;
          const arg = dir.arg;
          if (exp && exp.type === 4 && !(dir.name === "on" && arg) && // key has been processed in transformFor(vMemo + vFor)
          !(memo && arg && arg.type === 4 && arg.content === "key")) {
            dir.exp = processExpression(
              exp,
              context,
              // slot args must be processed as function params
              dir.name === "slot"
            );
          }
          if (arg && arg.type === 4 && !arg.isStatic) {
            dir.arg = processExpression(arg, context);
          }
        }
      }
    }
  };
  function processExpression(node, context, asParams = false, asRawStatements = false, localVars = Object.create(context.identifiers)) {
    {
      if (true) {
        validateBrowserExpression(node, context, asParams, asRawStatements);
      }
      return node;
    }
  }
  var transformIf = createStructuralDirectiveTransform(
    /^(if|else|else-if)$/,
    (node, dir, context) => {
      return processIf(node, dir, context, (ifNode, branch, isRoot) => {
        const siblings = context.parent.children;
        let i = siblings.indexOf(ifNode);
        let key = 0;
        while (i-- >= 0) {
          const sibling = siblings[i];
          if (sibling && sibling.type === 9) {
            key += sibling.branches.length;
          }
        }
        return () => {
          if (isRoot) {
            ifNode.codegenNode = createCodegenNodeForBranch(
              branch,
              key,
              context
            );
          } else {
            const parentCondition = getParentCondition(ifNode.codegenNode);
            parentCondition.alternate = createCodegenNodeForBranch(
              branch,
              key + ifNode.branches.length - 1,
              context
            );
          }
        };
      });
    }
  );
  function processIf(node, dir, context, processCodegen) {
    if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
      const loc = dir.exp ? dir.exp.loc : node.loc;
      context.onError(
        createCompilerError(28, dir.loc)
      );
      dir.exp = createSimpleExpression(`true`, false, loc);
    }
    if (dir.exp) {
      validateBrowserExpression(dir.exp, context);
    }
    if (dir.name === "if") {
      const branch = createIfBranch(node, dir);
      const ifNode = {
        type: 9,
        loc: cloneLoc(node.loc),
        branches: [branch]
      };
      context.replaceNode(ifNode);
      if (processCodegen) {
        return processCodegen(ifNode, branch, true);
      }
    } else {
      const siblings = context.parent.children;
      const comments = [];
      let i = siblings.indexOf(node);
      while (i-- >= -1) {
        const sibling = siblings[i];
        if (sibling && sibling.type === 3) {
          context.removeNode(sibling);
          comments.unshift(sibling);
          continue;
        }
        if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
          context.removeNode(sibling);
          continue;
        }
        if (sibling && sibling.type === 9) {
          if (dir.name === "else-if" && sibling.branches[sibling.branches.length - 1].condition === void 0) {
            context.onError(
              createCompilerError(30, node.loc)
            );
          }
          context.removeNode();
          const branch = createIfBranch(node, dir);
          if (comments.length && // #3619 ignore comments if the v-if is direct child of <transition>
          !(context.parent && context.parent.type === 1 && (context.parent.tag === "transition" || context.parent.tag === "Transition"))) {
            branch.children = [...comments, ...branch.children];
          }
          if (true) {
            const key = branch.userKey;
            if (key) {
              sibling.branches.forEach(({ userKey }) => {
                if (isSameKey(userKey, key)) {
                  context.onError(
                    createCompilerError(
                      29,
                      branch.userKey.loc
                    )
                  );
                }
              });
            }
          }
          sibling.branches.push(branch);
          const onExit = processCodegen && processCodegen(sibling, branch, false);
          traverseNode(branch, context);
          if (onExit) onExit();
          context.currentNode = null;
        } else {
          context.onError(
            createCompilerError(30, node.loc)
          );
        }
        break;
      }
    }
  }
  function createIfBranch(node, dir) {
    const isTemplateIf = node.tagType === 3;
    return {
      type: 10,
      loc: node.loc,
      condition: dir.name === "else" ? void 0 : dir.exp,
      children: isTemplateIf && !findDir(node, "for") ? node.children : [node],
      userKey: findProp(node, `key`),
      isTemplateIf
    };
  }
  function createCodegenNodeForBranch(branch, keyIndex, context) {
    if (branch.condition) {
      return createConditionalExpression(
        branch.condition,
        createChildrenCodegenNode(branch, keyIndex, context),
        // make sure to pass in asBlock: true so that the comment node call
        // closes the current block.
        createCallExpression(context.helper(CREATE_COMMENT), [
          true ? '"v-if"' : '""',
          "true"
        ])
      );
    } else {
      return createChildrenCodegenNode(branch, keyIndex, context);
    }
  }
  function createChildrenCodegenNode(branch, keyIndex, context) {
    const { helper } = context;
    const keyProperty = createObjectProperty(
      `key`,
      createSimpleExpression(
        `${keyIndex}`,
        false,
        locStub,
        2
      )
    );
    const { children } = branch;
    const firstChild = children[0];
    const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
    if (needFragmentWrapper) {
      if (children.length === 1 && firstChild.type === 11) {
        const vnodeCall = firstChild.codegenNode;
        injectProp(vnodeCall, keyProperty, context);
        return vnodeCall;
      } else {
        let patchFlag = 64;
        if (!branch.isTemplateIf && children.filter((c) => c.type !== 3).length === 1) {
          patchFlag |= 2048;
        }
        return createVNodeCall(
          context,
          helper(FRAGMENT),
          createObjectExpression([keyProperty]),
          children,
          patchFlag,
          void 0,
          void 0,
          true,
          false,
          false,
          branch.loc
        );
      }
    } else {
      const ret = firstChild.codegenNode;
      const vnodeCall = getMemoedVNodeCall(ret);
      if (vnodeCall.type === 13) {
        convertToBlock(vnodeCall, context);
      }
      injectProp(vnodeCall, keyProperty, context);
      return ret;
    }
  }
  function isSameKey(a, b) {
    if (!a || a.type !== b.type) {
      return false;
    }
    if (a.type === 6) {
      if (a.value.content !== b.value.content) {
        return false;
      }
    } else {
      const exp = a.exp;
      const branchExp = b.exp;
      if (exp.type !== branchExp.type) {
        return false;
      }
      if (exp.type !== 4 || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) {
        return false;
      }
    }
    return true;
  }
  function getParentCondition(node) {
    while (true) {
      if (node.type === 19) {
        if (node.alternate.type === 19) {
          node = node.alternate;
        } else {
          return node;
        }
      } else if (node.type === 20) {
        node = node.value;
      }
    }
  }
  var transformBind = (dir, _node, context) => {
    const { modifiers, loc } = dir;
    const arg = dir.arg;
    let { exp } = dir;
    if (exp && exp.type === 4 && !exp.content.trim()) {
      {
        exp = void 0;
      }
    }
    if (!exp) {
      if (arg.type !== 4 || !arg.isStatic) {
        context.onError(
          createCompilerError(
            52,
            arg.loc
          )
        );
        return {
          props: [
            createObjectProperty(arg, createSimpleExpression("", true, loc))
          ]
        };
      }
      transformBindShorthand(dir);
      exp = dir.exp;
    }
    if (arg.type !== 4) {
      arg.children.unshift(`(`);
      arg.children.push(`) || ""`);
    } else if (!arg.isStatic) {
      arg.content = `${arg.content} || ""`;
    }
    if (modifiers.some((mod) => mod.content === "camel")) {
      if (arg.type === 4) {
        if (arg.isStatic) {
          arg.content = camelize(arg.content);
        } else {
          arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
        }
      } else {
        arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
        arg.children.push(`)`);
      }
    }
    if (!context.inSSR) {
      if (modifiers.some((mod) => mod.content === "prop")) {
        injectPrefix(arg, ".");
      }
      if (modifiers.some((mod) => mod.content === "attr")) {
        injectPrefix(arg, "^");
      }
    }
    return {
      props: [createObjectProperty(arg, exp)]
    };
  };
  var transformBindShorthand = (dir, context) => {
    const arg = dir.arg;
    const propName = camelize(arg.content);
    dir.exp = createSimpleExpression(propName, false, arg.loc);
  };
  var injectPrefix = (arg, prefix) => {
    if (arg.type === 4) {
      if (arg.isStatic) {
        arg.content = prefix + arg.content;
      } else {
        arg.content = `\`${prefix}\${${arg.content}}\``;
      }
    } else {
      arg.children.unshift(`'${prefix}' + (`);
      arg.children.push(`)`);
    }
  };
  var transformFor = createStructuralDirectiveTransform(
    "for",
    (node, dir, context) => {
      const { helper, removeHelper } = context;
      return processFor(node, dir, context, (forNode) => {
        const renderExp = createCallExpression(helper(RENDER_LIST), [
          forNode.source
        ]);
        const isTemplate = isTemplateNode(node);
        const memo = findDir(node, "memo");
        const keyProp = findProp(node, `key`, false, true);
        const isDirKey = keyProp && keyProp.type === 7;
        if (isDirKey && !keyProp.exp) {
          transformBindShorthand(keyProp);
        }
        let keyExp = keyProp && (keyProp.type === 6 ? keyProp.value ? createSimpleExpression(keyProp.value.content, true) : void 0 : keyProp.exp);
        const keyProperty = keyProp && keyExp ? createObjectProperty(`key`, keyExp) : null;
        const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
        const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
        forNode.codegenNode = createVNodeCall(
          context,
          helper(FRAGMENT),
          void 0,
          renderExp,
          fragmentFlag,
          void 0,
          void 0,
          true,
          !isStableFragment,
          false,
          node.loc
        );
        return () => {
          let childBlock;
          const { children } = forNode;
          if (isTemplate) {
            node.children.some((c) => {
              if (c.type === 1) {
                const key = findProp(c, "key");
                if (key) {
                  context.onError(
                    createCompilerError(
                      33,
                      key.loc
                    )
                  );
                  return true;
                }
              }
            });
          }
          const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
          const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
          if (slotOutlet) {
            childBlock = slotOutlet.codegenNode;
            if (isTemplate && keyProperty) {
              injectProp(childBlock, keyProperty, context);
            }
          } else if (needFragmentWrapper) {
            childBlock = createVNodeCall(
              context,
              helper(FRAGMENT),
              keyProperty ? createObjectExpression([keyProperty]) : void 0,
              node.children,
              64,
              void 0,
              void 0,
              true,
              void 0,
              false
            );
          } else {
            childBlock = children[0].codegenNode;
            if (isTemplate && keyProperty) {
              injectProp(childBlock, keyProperty, context);
            }
            if (childBlock.isBlock !== !isStableFragment) {
              if (childBlock.isBlock) {
                removeHelper(OPEN_BLOCK);
                removeHelper(
                  getVNodeBlockHelper(context.inSSR, childBlock.isComponent)
                );
              } else {
                removeHelper(
                  getVNodeHelper(context.inSSR, childBlock.isComponent)
                );
              }
            }
            childBlock.isBlock = !isStableFragment;
            if (childBlock.isBlock) {
              helper(OPEN_BLOCK);
              helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
            } else {
              helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
            }
          }
          if (memo) {
            const loop = createFunctionExpression(
              createForLoopParams(forNode.parseResult, [
                createSimpleExpression(`_cached`)
              ])
            );
            loop.body = createBlockStatement([
              createCompoundExpression([`const _memo = (`, memo.exp, `)`]),
              createCompoundExpression([
                `if (_cached`,
                ...keyExp ? [` && _cached.key === `, keyExp] : [],
                ` && ${context.helperString(
                  IS_MEMO_SAME
                )}(_cached, _memo)) return _cached`
              ]),
              createCompoundExpression([`const _item = `, childBlock]),
              createSimpleExpression(`_item.memo = _memo`),
              createSimpleExpression(`return _item`)
            ]);
            renderExp.arguments.push(
              loop,
              createSimpleExpression(`_cache`),
              createSimpleExpression(String(context.cached.length))
            );
            context.cached.push(null);
          } else {
            renderExp.arguments.push(
              createFunctionExpression(
                createForLoopParams(forNode.parseResult),
                childBlock,
                true
              )
            );
          }
        };
      });
    }
  );
  function processFor(node, dir, context, processCodegen) {
    if (!dir.exp) {
      context.onError(
        createCompilerError(31, dir.loc)
      );
      return;
    }
    const parseResult = dir.forParseResult;
    if (!parseResult) {
      context.onError(
        createCompilerError(32, dir.loc)
      );
      return;
    }
    finalizeForParseResult(parseResult, context);
    const { addIdentifiers, removeIdentifiers, scopes } = context;
    const { source, value, key, index } = parseResult;
    const forNode = {
      type: 11,
      loc: dir.loc,
      source,
      valueAlias: value,
      keyAlias: key,
      objectIndexAlias: index,
      parseResult,
      children: isTemplateNode(node) ? node.children : [node]
    };
    context.replaceNode(forNode);
    scopes.vFor++;
    const onExit = processCodegen && processCodegen(forNode);
    return () => {
      scopes.vFor--;
      if (onExit) onExit();
    };
  }
  function finalizeForParseResult(result, context) {
    if (result.finalized) return;
    if (true) {
      validateBrowserExpression(result.source, context);
      if (result.key) {
        validateBrowserExpression(
          result.key,
          context,
          true
        );
      }
      if (result.index) {
        validateBrowserExpression(
          result.index,
          context,
          true
        );
      }
      if (result.value) {
        validateBrowserExpression(
          result.value,
          context,
          true
        );
      }
    }
    result.finalized = true;
  }
  function createForLoopParams({ value, key, index }, memoArgs = []) {
    return createParamsList([value, key, index, ...memoArgs]);
  }
  function createParamsList(args) {
    let i = args.length;
    while (i--) {
      if (args[i]) break;
    }
    return args.slice(0, i + 1).map((arg, i2) => arg || createSimpleExpression(`_`.repeat(i2 + 1), false));
  }
  var defaultFallback = createSimpleExpression(`undefined`, false);
  var trackSlotScopes = (node, context) => {
    if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
      const vSlot = findDir(node, "slot");
      if (vSlot) {
        vSlot.exp;
        context.scopes.vSlot++;
        return () => {
          context.scopes.vSlot--;
        };
      }
    }
  };
  var buildClientSlotFn = (props, _vForExp, children, loc) => createFunctionExpression(
    props,
    children,
    false,
    true,
    children.length ? children[0].loc : loc
  );
  function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
    context.helper(WITH_CTX);
    const { children, loc } = node;
    const slotsProperties = [];
    const dynamicSlots = [];
    let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
    const onComponentSlot = findDir(node, "slot", true);
    if (onComponentSlot) {
      const { arg, exp } = onComponentSlot;
      if (arg && !isStaticExp(arg)) {
        hasDynamicSlots = true;
      }
      slotsProperties.push(
        createObjectProperty(
          arg || createSimpleExpression("default", true),
          buildSlotFn(exp, void 0, children, loc)
        )
      );
    }
    let hasTemplateSlots = false;
    let hasNamedDefaultSlot = false;
    const implicitDefaultChildren = [];
    const seenSlotNames = /* @__PURE__ */ new Set();
    let conditionalBranchIndex = 0;
    for (let i = 0; i < children.length; i++) {
      const slotElement = children[i];
      let slotDir;
      if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
        if (slotElement.type !== 3) {
          implicitDefaultChildren.push(slotElement);
        }
        continue;
      }
      if (onComponentSlot) {
        context.onError(
          createCompilerError(37, slotDir.loc)
        );
        break;
      }
      hasTemplateSlots = true;
      const { children: slotChildren, loc: slotLoc } = slotElement;
      const {
        arg: slotName = createSimpleExpression(`default`, true),
        exp: slotProps,
        loc: dirLoc
      } = slotDir;
      let staticSlotName;
      if (isStaticExp(slotName)) {
        staticSlotName = slotName ? slotName.content : `default`;
      } else {
        hasDynamicSlots = true;
      }
      const vFor = findDir(slotElement, "for");
      const slotFunction = buildSlotFn(slotProps, vFor, slotChildren, slotLoc);
      let vIf;
      let vElse;
      if (vIf = findDir(slotElement, "if")) {
        hasDynamicSlots = true;
        dynamicSlots.push(
          createConditionalExpression(
            vIf.exp,
            buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++),
            defaultFallback
          )
        );
      } else if (vElse = findDir(
        slotElement,
        /^else(-if)?$/,
        true
        /* allowEmpty */
      )) {
        let j = i;
        let prev;
        while (j--) {
          prev = children[j];
          if (prev.type !== 3 && isNonWhitespaceContent(prev)) {
            break;
          }
        }
        if (prev && isTemplateNode(prev) && findDir(prev, /^(else-)?if$/)) {
          let conditional = dynamicSlots[dynamicSlots.length - 1];
          while (conditional.alternate.type === 19) {
            conditional = conditional.alternate;
          }
          conditional.alternate = vElse.exp ? createConditionalExpression(
            vElse.exp,
            buildDynamicSlot(
              slotName,
              slotFunction,
              conditionalBranchIndex++
            ),
            defaultFallback
          ) : buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
        } else {
          context.onError(
            createCompilerError(30, vElse.loc)
          );
        }
      } else if (vFor) {
        hasDynamicSlots = true;
        const parseResult = vFor.forParseResult;
        if (parseResult) {
          finalizeForParseResult(parseResult, context);
          dynamicSlots.push(
            createCallExpression(context.helper(RENDER_LIST), [
              parseResult.source,
              createFunctionExpression(
                createForLoopParams(parseResult),
                buildDynamicSlot(slotName, slotFunction),
                true
              )
            ])
          );
        } else {
          context.onError(
            createCompilerError(
              32,
              vFor.loc
            )
          );
        }
      } else {
        if (staticSlotName) {
          if (seenSlotNames.has(staticSlotName)) {
            context.onError(
              createCompilerError(
                38,
                dirLoc
              )
            );
            continue;
          }
          seenSlotNames.add(staticSlotName);
          if (staticSlotName === "default") {
            hasNamedDefaultSlot = true;
          }
        }
        slotsProperties.push(createObjectProperty(slotName, slotFunction));
      }
    }
    if (!onComponentSlot) {
      const buildDefaultSlotProperty = (props, children2) => {
        const fn = buildSlotFn(props, void 0, children2, loc);
        if (context.compatConfig) {
          fn.isNonScopedSlot = true;
        }
        return createObjectProperty(`default`, fn);
      };
      if (!hasTemplateSlots) {
        slotsProperties.push(buildDefaultSlotProperty(void 0, children));
      } else if (implicitDefaultChildren.length && // #3766
      // with whitespace: 'preserve', whitespaces between slots will end up in
      // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
      implicitDefaultChildren.some((node2) => isNonWhitespaceContent(node2))) {
        if (hasNamedDefaultSlot) {
          context.onError(
            createCompilerError(
              39,
              implicitDefaultChildren[0].loc
            )
          );
        } else {
          slotsProperties.push(
            buildDefaultSlotProperty(void 0, implicitDefaultChildren)
          );
        }
      }
    }
    const slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
    let slots = createObjectExpression(
      slotsProperties.concat(
        createObjectProperty(
          `_`,
          // 2 = compiled but dynamic = can skip normalization, but must run diff
          // 1 = compiled and static = can skip normalization AND diff as optimized
          createSimpleExpression(
            slotFlag + (true ? ` /* ${slotFlagsText[slotFlag]} */` : ``),
            false
          )
        )
      ),
      loc
    );
    if (dynamicSlots.length) {
      slots = createCallExpression(context.helper(CREATE_SLOTS), [
        slots,
        createArrayExpression(dynamicSlots)
      ]);
    }
    return {
      slots,
      hasDynamicSlots
    };
  }
  function buildDynamicSlot(name, fn, index) {
    const props = [
      createObjectProperty(`name`, name),
      createObjectProperty(`fn`, fn)
    ];
    if (index != null) {
      props.push(
        createObjectProperty(`key`, createSimpleExpression(String(index), true))
      );
    }
    return createObjectExpression(props);
  }
  function hasForwardedSlots(children) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      switch (child.type) {
        case 1:
          if (child.tagType === 2 || hasForwardedSlots(child.children)) {
            return true;
          }
          break;
        case 9:
          if (hasForwardedSlots(child.branches)) return true;
          break;
        case 10:
        case 11:
          if (hasForwardedSlots(child.children)) return true;
          break;
      }
    }
    return false;
  }
  function isNonWhitespaceContent(node) {
    if (node.type !== 2 && node.type !== 12)
      return true;
    return node.type === 2 ? !!node.content.trim() : isNonWhitespaceContent(node.content);
  }
  var directiveImportMap = /* @__PURE__ */ new WeakMap();
  var transformElement = (node, context) => {
    return function postTransformElement() {
      node = context.currentNode;
      if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) {
        return;
      }
      const { tag, props } = node;
      const isComponent2 = node.tagType === 1;
      let vnodeTag = isComponent2 ? resolveComponentType(node, context) : `"${tag}"`;
      const isDynamicComponent = isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
      let vnodeProps;
      let vnodeChildren;
      let patchFlag = 0;
      let vnodeDynamicProps;
      let dynamicPropNames;
      let vnodeDirectives;
      let shouldUseBlock = (
        // dynamic component may resolve to plain elements
        isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent2 && // <svg> and <foreignObject> must be forced into blocks so that block
        // updates inside get proper isSVG flag at runtime. (#639, #643)
        // This is technically web-specific, but splitting the logic out of core
        // leads to too much unnecessary complexity.
        (tag === "svg" || tag === "foreignObject" || tag === "math")
      );
      if (props.length > 0) {
        const propsBuildResult = buildProps(
          node,
          context,
          void 0,
          isComponent2,
          isDynamicComponent
        );
        vnodeProps = propsBuildResult.props;
        patchFlag = propsBuildResult.patchFlag;
        dynamicPropNames = propsBuildResult.dynamicPropNames;
        const directives = propsBuildResult.directives;
        vnodeDirectives = directives && directives.length ? createArrayExpression(
          directives.map((dir) => buildDirectiveArgs(dir, context))
        ) : void 0;
        if (propsBuildResult.shouldUseBlock) {
          shouldUseBlock = true;
        }
      }
      if (node.children.length > 0) {
        if (vnodeTag === KEEP_ALIVE) {
          shouldUseBlock = true;
          patchFlag |= 1024;
          if (node.children.length > 1) {
            context.onError(
              createCompilerError(46, {
                start: node.children[0].loc.start,
                end: node.children[node.children.length - 1].loc.end,
                source: ""
              })
            );
          }
        }
        const shouldBuildAsSlots = isComponent2 && // Teleport is not a real component and has dedicated runtime handling
        vnodeTag !== TELEPORT && // explained above.
        vnodeTag !== KEEP_ALIVE;
        if (shouldBuildAsSlots) {
          const { slots, hasDynamicSlots } = buildSlots(node, context);
          vnodeChildren = slots;
          if (hasDynamicSlots) {
            patchFlag |= 1024;
          }
        } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
          const child = node.children[0];
          const type = child.type;
          const hasDynamicTextChild = type === 5 || type === 8;
          if (hasDynamicTextChild && getConstantType(child, context) === 0) {
            patchFlag |= 1;
          }
          if (hasDynamicTextChild || type === 2) {
            vnodeChildren = child;
          } else {
            vnodeChildren = node.children;
          }
        } else {
          vnodeChildren = node.children;
        }
      }
      if (dynamicPropNames && dynamicPropNames.length) {
        vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
      }
      node.codegenNode = createVNodeCall(
        context,
        vnodeTag,
        vnodeProps,
        vnodeChildren,
        patchFlag === 0 ? void 0 : patchFlag,
        vnodeDynamicProps,
        vnodeDirectives,
        !!shouldUseBlock,
        false,
        isComponent2,
        node.loc
      );
    };
  };
  function resolveComponentType(node, context, ssr = false) {
    let { tag } = node;
    const isExplicitDynamic = isComponentTag(tag);
    const isProp = findProp(
      node,
      "is",
      false,
      true
      /* allow empty */
    );
    if (isProp) {
      if (isExplicitDynamic || isCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        context
      )) {
        let exp;
        if (isProp.type === 6) {
          exp = isProp.value && createSimpleExpression(isProp.value.content, true);
        } else {
          exp = isProp.exp;
          if (!exp) {
            exp = createSimpleExpression(`is`, false, isProp.arg.loc);
          }
        }
        if (exp) {
          return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
            exp
          ]);
        }
      } else if (isProp.type === 6 && isProp.value.content.startsWith("vue:")) {
        tag = isProp.value.content.slice(4);
      }
    }
    const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
    if (builtIn) {
      if (!ssr) context.helper(builtIn);
      return builtIn;
    }
    context.helper(RESOLVE_COMPONENT);
    context.components.add(tag);
    return toValidAssetId(tag, `component`);
  }
  function buildProps(node, context, props = node.props, isComponent2, isDynamicComponent, ssr = false) {
    const { tag, loc: elementLoc, children } = node;
    let properties = [];
    const mergeArgs = [];
    const runtimeDirectives = [];
    const hasChildren = children.length > 0;
    let shouldUseBlock = false;
    let patchFlag = 0;
    let hasRef = false;
    let hasClassBinding = false;
    let hasStyleBinding = false;
    let hasHydrationEventBinding = false;
    let hasDynamicKeys = false;
    let hasVnodeHook = false;
    const dynamicPropNames = [];
    const pushMergeArg = (arg) => {
      if (properties.length) {
        mergeArgs.push(
          createObjectExpression(dedupeProperties(properties), elementLoc)
        );
        properties = [];
      }
      if (arg) mergeArgs.push(arg);
    };
    const pushRefVForMarker = () => {
      if (context.scopes.vFor > 0) {
        properties.push(
          createObjectProperty(
            createSimpleExpression("ref_for", true),
            createSimpleExpression("true")
          )
        );
      }
    };
    const analyzePatchFlag = ({ key, value }) => {
      if (isStaticExp(key)) {
        const name = key.content;
        const isEventHandler = isOn(name);
        if (isEventHandler && (!isComponent2 || isDynamicComponent) && // omit the flag for click handlers because hydration gives click
        // dedicated fast path.
        name.toLowerCase() !== "onclick" && // omit v-model handlers
        name !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
        !isReservedProp(name)) {
          hasHydrationEventBinding = true;
        }
        if (isEventHandler && isReservedProp(name)) {
          hasVnodeHook = true;
        }
        if (isEventHandler && value.type === 14) {
          value = value.arguments[0];
        }
        if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) {
          return;
        }
        if (name === "ref") {
          hasRef = true;
        } else if (name === "class") {
          hasClassBinding = true;
        } else if (name === "style") {
          hasStyleBinding = true;
        } else if (name !== "key" && !dynamicPropNames.includes(name)) {
          dynamicPropNames.push(name);
        }
        if (isComponent2 && (name === "class" || name === "style") && !dynamicPropNames.includes(name)) {
          dynamicPropNames.push(name);
        }
      } else {
        hasDynamicKeys = true;
      }
    };
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      if (prop.type === 6) {
        const { loc, name, nameLoc, value } = prop;
        let isStatic = true;
        if (name === "ref") {
          hasRef = true;
          pushRefVForMarker();
        }
        if (name === "is" && (isComponentTag(tag) || value && value.content.startsWith("vue:") || isCompatEnabled(
          "COMPILER_IS_ON_ELEMENT",
          context
        ))) {
          continue;
        }
        properties.push(
          createObjectProperty(
            createSimpleExpression(name, true, nameLoc),
            createSimpleExpression(
              value ? value.content : "",
              isStatic,
              value ? value.loc : loc
            )
          )
        );
      } else {
        const { name, arg, exp, loc, modifiers } = prop;
        const isVBind = name === "bind";
        const isVOn = name === "on";
        if (name === "slot") {
          if (!isComponent2) {
            context.onError(
              createCompilerError(40, loc)
            );
          }
          continue;
        }
        if (name === "once" || name === "memo") {
          continue;
        }
        if (name === "is" || isVBind && isStaticArgOf(arg, "is") && (isComponentTag(tag) || isCompatEnabled(
          "COMPILER_IS_ON_ELEMENT",
          context
        ))) {
          continue;
        }
        if (isVOn && ssr) {
          continue;
        }
        if (
          // #938: elements with dynamic keys should be forced into blocks
          isVBind && isStaticArgOf(arg, "key") || // inline before-update hooks need to force block so that it is invoked
          // before children
          isVOn && hasChildren && isStaticArgOf(arg, "vue:before-update")
        ) {
          shouldUseBlock = true;
        }
        if (isVBind && isStaticArgOf(arg, "ref")) {
          pushRefVForMarker();
        }
        if (!arg && (isVBind || isVOn)) {
          hasDynamicKeys = true;
          if (exp) {
            if (isVBind) {
              {
                pushMergeArg();
                if (true) {
                  const hasOverridableKeys = mergeArgs.some((arg2) => {
                    if (arg2.type === 15) {
                      return arg2.properties.some(({ key }) => {
                        if (key.type !== 4 || !key.isStatic) {
                          return true;
                        }
                        return key.content !== "class" && key.content !== "style" && !isOn(key.content);
                      });
                    } else {
                      return true;
                    }
                  });
                  if (hasOverridableKeys) {
                    checkCompatEnabled(
                      "COMPILER_V_BIND_OBJECT_ORDER",
                      context,
                      loc
                    );
                  }
                }
                if (isCompatEnabled(
                  "COMPILER_V_BIND_OBJECT_ORDER",
                  context
                )) {
                  mergeArgs.unshift(exp);
                  continue;
                }
              }
              pushRefVForMarker();
              pushMergeArg();
              mergeArgs.push(exp);
            } else {
              pushMergeArg({
                type: 14,
                loc,
                callee: context.helper(TO_HANDLERS),
                arguments: isComponent2 ? [exp] : [exp, `true`]
              });
            }
          } else {
            context.onError(
              createCompilerError(
                isVBind ? 34 : 35,
                loc
              )
            );
          }
          continue;
        }
        if (isVBind && modifiers.some((mod) => mod.content === "prop")) {
          patchFlag |= 32;
        }
        const directiveTransform = context.directiveTransforms[name];
        if (directiveTransform) {
          const { props: props2, needRuntime } = directiveTransform(prop, node, context);
          !ssr && props2.forEach(analyzePatchFlag);
          if (isVOn && arg && !isStaticExp(arg)) {
            pushMergeArg(createObjectExpression(props2, elementLoc));
          } else {
            properties.push(...props2);
          }
          if (needRuntime) {
            runtimeDirectives.push(prop);
            if (isSymbol(needRuntime)) {
              directiveImportMap.set(prop, needRuntime);
            }
          }
        } else if (!isBuiltInDirective(name)) {
          runtimeDirectives.push(prop);
          if (hasChildren) {
            shouldUseBlock = true;
          }
        }
      }
    }
    let propsExpression = void 0;
    if (mergeArgs.length) {
      pushMergeArg();
      if (mergeArgs.length > 1) {
        propsExpression = createCallExpression(
          context.helper(MERGE_PROPS),
          mergeArgs,
          elementLoc
        );
      } else {
        propsExpression = mergeArgs[0];
      }
    } else if (properties.length) {
      propsExpression = createObjectExpression(
        dedupeProperties(properties),
        elementLoc
      );
    }
    if (hasDynamicKeys) {
      patchFlag |= 16;
    } else {
      if (hasClassBinding && !isComponent2) {
        patchFlag |= 2;
      }
      if (hasStyleBinding && !isComponent2) {
        patchFlag |= 4;
      }
      if (dynamicPropNames.length) {
        patchFlag |= 8;
      }
      if (hasHydrationEventBinding) {
        patchFlag |= 32;
      }
    }
    if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
      patchFlag |= 512;
    }
    if (!context.inSSR && propsExpression) {
      switch (propsExpression.type) {
        case 15:
          let classKeyIndex = -1;
          let styleKeyIndex = -1;
          let hasDynamicKey = false;
          for (let i = 0; i < propsExpression.properties.length; i++) {
            const key = propsExpression.properties[i].key;
            if (isStaticExp(key)) {
              if (key.content === "class") {
                classKeyIndex = i;
              } else if (key.content === "style") {
                styleKeyIndex = i;
              }
            } else if (!key.isHandlerKey) {
              hasDynamicKey = true;
            }
          }
          const classProp = propsExpression.properties[classKeyIndex];
          const styleProp = propsExpression.properties[styleKeyIndex];
          if (!hasDynamicKey) {
            if (classProp && !isStaticExp(classProp.value)) {
              classProp.value = createCallExpression(
                context.helper(NORMALIZE_CLASS),
                [classProp.value]
              );
            }
            if (styleProp && // the static style is compiled into an object,
            // so use `hasStyleBinding` to ensure that it is a dynamic style binding
            (hasStyleBinding || styleProp.value.type === 4 && styleProp.value.content.trim()[0] === `[` || // v-bind:style and style both exist,
            // v-bind:style with static literal object
            styleProp.value.type === 17)) {
              styleProp.value = createCallExpression(
                context.helper(NORMALIZE_STYLE),
                [styleProp.value]
              );
            }
          } else {
            propsExpression = createCallExpression(
              context.helper(NORMALIZE_PROPS),
              [propsExpression]
            );
          }
          break;
        case 14:
          break;
        default:
          propsExpression = createCallExpression(
            context.helper(NORMALIZE_PROPS),
            [
              createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
                propsExpression
              ])
            ]
          );
          break;
      }
    }
    return {
      props: propsExpression,
      directives: runtimeDirectives,
      patchFlag,
      dynamicPropNames,
      shouldUseBlock
    };
  }
  function dedupeProperties(properties) {
    const knownProps = /* @__PURE__ */ new Map();
    const deduped = [];
    for (let i = 0; i < properties.length; i++) {
      const prop = properties[i];
      if (prop.key.type === 8 || !prop.key.isStatic) {
        deduped.push(prop);
        continue;
      }
      const name = prop.key.content;
      const existing = knownProps.get(name);
      if (existing) {
        if (name === "style" || name === "class" || isOn(name)) {
          mergeAsArray2(existing, prop);
        }
      } else {
        knownProps.set(name, prop);
        deduped.push(prop);
      }
    }
    return deduped;
  }
  function mergeAsArray2(existing, incoming) {
    if (existing.value.type === 17) {
      existing.value.elements.push(incoming.value);
    } else {
      existing.value = createArrayExpression(
        [existing.value, incoming.value],
        existing.loc
      );
    }
  }
  function buildDirectiveArgs(dir, context) {
    const dirArgs = [];
    const runtime = directiveImportMap.get(dir);
    if (runtime) {
      dirArgs.push(context.helperString(runtime));
    } else {
      {
        context.helper(RESOLVE_DIRECTIVE);
        context.directives.add(dir.name);
        dirArgs.push(toValidAssetId(dir.name, `directive`));
      }
    }
    const { loc } = dir;
    if (dir.exp) dirArgs.push(dir.exp);
    if (dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`);
      }
      dirArgs.push(dir.arg);
    }
    if (Object.keys(dir.modifiers).length) {
      if (!dir.arg) {
        if (!dir.exp) {
          dirArgs.push(`void 0`);
        }
        dirArgs.push(`void 0`);
      }
      const trueExpression = createSimpleExpression(`true`, false, loc);
      dirArgs.push(
        createObjectExpression(
          dir.modifiers.map(
            (modifier) => createObjectProperty(modifier, trueExpression)
          ),
          loc
        )
      );
    }
    return createArrayExpression(dirArgs, dir.loc);
  }
  function stringifyDynamicPropNames(props) {
    let propsNamesString = `[`;
    for (let i = 0, l = props.length; i < l; i++) {
      propsNamesString += JSON.stringify(props[i]);
      if (i < l - 1) propsNamesString += ", ";
    }
    return propsNamesString + `]`;
  }
  function isComponentTag(tag) {
    return tag === "component" || tag === "Component";
  }
  var transformSlotOutlet = (node, context) => {
    if (isSlotOutlet(node)) {
      const { children, loc } = node;
      const { slotName, slotProps } = processSlotOutlet(node, context);
      const slotArgs = [
        context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
        slotName,
        "{}",
        "undefined",
        "true"
      ];
      let expectedLen = 2;
      if (slotProps) {
        slotArgs[2] = slotProps;
        expectedLen = 3;
      }
      if (children.length) {
        slotArgs[3] = createFunctionExpression([], children, false, false, loc);
        expectedLen = 4;
      }
      if (context.scopeId && !context.slotted) {
        expectedLen = 5;
      }
      slotArgs.splice(expectedLen);
      node.codegenNode = createCallExpression(
        context.helper(RENDER_SLOT),
        slotArgs,
        loc
      );
    }
  };
  function processSlotOutlet(node, context) {
    let slotName = `"default"`;
    let slotProps = void 0;
    const nonNameProps = [];
    for (let i = 0; i < node.props.length; i++) {
      const p2 = node.props[i];
      if (p2.type === 6) {
        if (p2.value) {
          if (p2.name === "name") {
            slotName = JSON.stringify(p2.value.content);
          } else {
            p2.name = camelize(p2.name);
            nonNameProps.push(p2);
          }
        }
      } else {
        if (p2.name === "bind" && isStaticArgOf(p2.arg, "name")) {
          if (p2.exp) {
            slotName = p2.exp;
          } else if (p2.arg && p2.arg.type === 4) {
            const name = camelize(p2.arg.content);
            slotName = p2.exp = createSimpleExpression(name, false, p2.arg.loc);
          }
        } else {
          if (p2.name === "bind" && p2.arg && isStaticExp(p2.arg)) {
            p2.arg.content = camelize(p2.arg.content);
          }
          nonNameProps.push(p2);
        }
      }
    }
    if (nonNameProps.length > 0) {
      const { props, directives } = buildProps(
        node,
        context,
        nonNameProps,
        false,
        false
      );
      slotProps = props;
      if (directives.length) {
        context.onError(
          createCompilerError(
            36,
            directives[0].loc
          )
        );
      }
    }
    return {
      slotName,
      slotProps
    };
  }
  var transformOn = (dir, node, context, augmentor) => {
    const { loc, modifiers, arg } = dir;
    if (!dir.exp && !modifiers.length) {
      context.onError(createCompilerError(35, loc));
    }
    let eventName;
    if (arg.type === 4) {
      if (arg.isStatic) {
        let rawName = arg.content;
        if (rawName.startsWith("vnode")) {
          context.onError(createCompilerError(51, arg.loc));
        }
        if (rawName.startsWith("vue:")) {
          rawName = `vnode-${rawName.slice(4)}`;
        }
        const eventString = node.tagType !== 0 || rawName.startsWith("vnode") || !/[A-Z]/.test(rawName) ? (
          // for non-element and vnode lifecycle event listeners, auto convert
          // it to camelCase. See issue #2249
          toHandlerKey(camelize(rawName))
        ) : (
          // preserve case for plain element listeners that have uppercase
          // letters, as these may be custom elements' custom events
          `on:${rawName}`
        );
        eventName = createSimpleExpression(eventString, true, arg.loc);
      } else {
        eventName = createCompoundExpression([
          `${context.helperString(TO_HANDLER_KEY)}(`,
          arg,
          `)`
        ]);
      }
    } else {
      eventName = arg;
      eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
      eventName.children.push(`)`);
    }
    let exp = dir.exp;
    if (exp && !exp.content.trim()) {
      exp = void 0;
    }
    let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
    if (exp) {
      const isMemberExp = isMemberExpression(exp);
      const isInlineStatement = !(isMemberExp || isFnExpression(exp));
      const hasMultipleStatements = exp.content.includes(`;`);
      if (true) {
        validateBrowserExpression(
          exp,
          context,
          false,
          hasMultipleStatements
        );
      }
      if (isInlineStatement || shouldCache && isMemberExp) {
        exp = createCompoundExpression([
          `${isInlineStatement ? `$event` : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
          exp,
          hasMultipleStatements ? `}` : `)`
        ]);
      }
    }
    let ret = {
      props: [
        createObjectProperty(
          eventName,
          exp || createSimpleExpression(`() => {}`, false, loc)
        )
      ]
    };
    if (augmentor) {
      ret = augmentor(ret);
    }
    if (shouldCache) {
      ret.props[0].value = context.cache(ret.props[0].value);
    }
    ret.props.forEach((p2) => p2.key.isHandlerKey = true);
    return ret;
  };
  var transformText = (node, context) => {
    if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) {
      return () => {
        const children = node.children;
        let currentContainer = void 0;
        let hasText = false;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (isText$1(child)) {
            hasText = true;
            for (let j = i + 1; j < children.length; j++) {
              const next = children[j];
              if (isText$1(next)) {
                if (!currentContainer) {
                  currentContainer = children[i] = createCompoundExpression(
                    [child],
                    child.loc
                  );
                }
                currentContainer.children.push(` + `, next);
                children.splice(j, 1);
                j--;
              } else {
                currentContainer = void 0;
                break;
              }
            }
          }
        }
        if (!hasText || // if this is a plain element with a single text child, leave it
        // as-is since the runtime has dedicated fast path for this by directly
        // setting textContent of the element.
        // for component root it's always normalized anyway.
        children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0 && // #3756
        // custom directives can potentially add DOM elements arbitrarily,
        // we need to avoid setting textContent of the element at runtime
        // to avoid accidentally overwriting the DOM elements added
        // by the user through custom directives.
        !node.props.find(
          (p2) => p2.type === 7 && !context.directiveTransforms[p2.name]
        ) && // in compat mode, <template> tags with no special directives
        // will be rendered as a fragment so its children must be
        // converted into vnodes.
        !(node.tag === "template"))) {
          return;
        }
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (isText$1(child) || child.type === 8) {
            const callArgs = [];
            if (child.type !== 2 || child.content !== " ") {
              callArgs.push(child);
            }
            if (!context.ssr && getConstantType(child, context) === 0) {
              callArgs.push(
                1 + (true ? ` /* ${PatchFlagNames[1]} */` : ``)
              );
            }
            children[i] = {
              type: 12,
              content: child,
              loc: child.loc,
              codegenNode: createCallExpression(
                context.helper(CREATE_TEXT),
                callArgs
              )
            };
          }
        }
      };
    }
  };
  var seen$1 = /* @__PURE__ */ new WeakSet();
  var transformOnce = (node, context) => {
    if (node.type === 1 && findDir(node, "once", true)) {
      if (seen$1.has(node) || context.inVOnce || context.inSSR) {
        return;
      }
      seen$1.add(node);
      context.inVOnce = true;
      context.helper(SET_BLOCK_TRACKING);
      return () => {
        context.inVOnce = false;
        const cur = context.currentNode;
        if (cur.codegenNode) {
          cur.codegenNode = context.cache(
            cur.codegenNode,
            true,
            true
          );
        }
      };
    }
  };
  var transformModel = (dir, node, context) => {
    const { exp, arg } = dir;
    if (!exp) {
      context.onError(
        createCompilerError(41, dir.loc)
      );
      return createTransformProps();
    }
    const rawExp = exp.loc.source.trim();
    const expString = exp.type === 4 ? exp.content : rawExp;
    const bindingType = context.bindingMetadata[rawExp];
    if (bindingType === "props" || bindingType === "props-aliased") {
      context.onError(createCompilerError(44, exp.loc));
      return createTransformProps();
    }
    if (!expString.trim() || !isMemberExpression(exp) && true) {
      context.onError(
        createCompilerError(42, exp.loc)
      );
      return createTransformProps();
    }
    const propName = arg ? arg : createSimpleExpression("modelValue", true);
    const eventName = arg ? isStaticExp(arg) ? `onUpdate:${camelize(arg.content)}` : createCompoundExpression(['"onUpdate:" + ', arg]) : `onUpdate:modelValue`;
    let assignmentExp;
    const eventArg = context.isTS ? `($event: any)` : `$event`;
    {
      assignmentExp = createCompoundExpression([
        `${eventArg} => ((`,
        exp,
        `) = $event)`
      ]);
    }
    const props = [
      // modelValue: foo
      createObjectProperty(propName, dir.exp),
      // "onUpdate:modelValue": $event => (foo = $event)
      createObjectProperty(eventName, assignmentExp)
    ];
    if (dir.modifiers.length && node.tagType === 1) {
      const modifiers = dir.modifiers.map((m) => m.content).map((m) => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`).join(`, `);
      const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([arg, ' + "Modifiers"']) : `modelModifiers`;
      props.push(
        createObjectProperty(
          modifiersKey,
          createSimpleExpression(
            `{ ${modifiers} }`,
            false,
            dir.loc,
            2
          )
        )
      );
    }
    return createTransformProps(props);
  };
  function createTransformProps(props = []) {
    return { props };
  }
  var validDivisionCharRE = /[\w).+\-_$\]]/;
  var transformFilter = (node, context) => {
    if (!isCompatEnabled("COMPILER_FILTERS", context)) {
      return;
    }
    if (node.type === 5) {
      rewriteFilter(node.content, context);
    } else if (node.type === 1) {
      node.props.forEach((prop) => {
        if (prop.type === 7 && prop.name !== "for" && prop.exp) {
          rewriteFilter(prop.exp, context);
        }
      });
    }
  };
  function rewriteFilter(node, context) {
    if (node.type === 4) {
      parseFilter(node, context);
    } else {
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (typeof child !== "object") continue;
        if (child.type === 4) {
          parseFilter(child, context);
        } else if (child.type === 8) {
          rewriteFilter(node, context);
        } else if (child.type === 5) {
          rewriteFilter(child.content, context);
        }
      }
    }
  }
  function parseFilter(node, context) {
    const exp = node.content;
    let inSingle = false;
    let inDouble = false;
    let inTemplateString = false;
    let inRegex = false;
    let curly = 0;
    let square = 0;
    let paren = 0;
    let lastFilterIndex = 0;
    let c, prev, i, expression, filters = [];
    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 39 && prev !== 92) inSingle = false;
      } else if (inDouble) {
        if (c === 34 && prev !== 92) inDouble = false;
      } else if (inTemplateString) {
        if (c === 96 && prev !== 92) inTemplateString = false;
      } else if (inRegex) {
        if (c === 47 && prev !== 92) inRegex = false;
      } else if (c === 124 && // pipe
      exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
        if (expression === void 0) {
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 34:
            inDouble = true;
            break;
          // "
          case 39:
            inSingle = true;
            break;
          // '
          case 96:
            inTemplateString = true;
            break;
          // `
          case 40:
            paren++;
            break;
          // (
          case 41:
            paren--;
            break;
          // )
          case 91:
            square++;
            break;
          // [
          case 93:
            square--;
            break;
          // ]
          case 123:
            curly++;
            break;
          // {
          case 125:
            curly--;
            break;
        }
        if (c === 47) {
          let j = i - 1;
          let p2;
          for (; j >= 0; j--) {
            p2 = exp.charAt(j);
            if (p2 !== " ") break;
          }
          if (!p2 || !validDivisionCharRE.test(p2)) {
            inRegex = true;
          }
        }
      }
    }
    if (expression === void 0) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }
    function pushFilter() {
      filters.push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }
    if (filters.length) {
      warnDeprecation(
        "COMPILER_FILTERS",
        context,
        node.loc
      );
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i], context);
      }
      node.content = expression;
      node.ast = void 0;
    }
  }
  function wrapFilter(exp, filter, context) {
    context.helper(RESOLVE_FILTER);
    const i = filter.indexOf("(");
    if (i < 0) {
      context.filters.add(filter);
      return `${toValidAssetId(filter, "filter")}(${exp})`;
    } else {
      const name = filter.slice(0, i);
      const args = filter.slice(i + 1);
      context.filters.add(name);
      return `${toValidAssetId(name, "filter")}(${exp}${args !== ")" ? "," + args : args}`;
    }
  }
  var seen = /* @__PURE__ */ new WeakSet();
  var transformMemo = (node, context) => {
    if (node.type === 1) {
      const dir = findDir(node, "memo");
      if (!dir || seen.has(node)) {
        return;
      }
      seen.add(node);
      return () => {
        const codegenNode = node.codegenNode || context.currentNode.codegenNode;
        if (codegenNode && codegenNode.type === 13) {
          if (node.tagType !== 1) {
            convertToBlock(codegenNode, context);
          }
          node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
            dir.exp,
            createFunctionExpression(void 0, codegenNode),
            `_cache`,
            String(context.cached.length)
          ]);
          context.cached.push(null);
        }
      };
    }
  };
  function getBaseTransformPreset(prefixIdentifiers) {
    return [
      [
        transformOnce,
        transformIf,
        transformMemo,
        transformFor,
        ...[transformFilter],
        ...true ? [transformExpression] : [],
        transformSlotOutlet,
        transformElement,
        trackSlotScopes,
        transformText
      ],
      {
        on: transformOn,
        bind: transformBind,
        model: transformModel
      }
    ];
  }
  function baseCompile(source, options = {}) {
    const onError = options.onError || defaultOnError;
    const isModuleMode = options.mode === "module";
    {
      if (options.prefixIdentifiers === true) {
        onError(createCompilerError(47));
      } else if (isModuleMode) {
        onError(createCompilerError(48));
      }
    }
    const prefixIdentifiers = false;
    if (options.cacheHandlers) {
      onError(createCompilerError(49));
    }
    if (options.scopeId && !isModuleMode) {
      onError(createCompilerError(50));
    }
    const resolvedOptions = extend({}, options, {
      prefixIdentifiers
    });
    const ast = isString(source) ? baseParse(source, resolvedOptions) : source;
    const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
    transform(
      ast,
      extend({}, resolvedOptions, {
        nodeTransforms: [
          ...nodeTransforms,
          ...options.nodeTransforms || []
          // user transforms
        ],
        directiveTransforms: extend(
          {},
          directiveTransforms,
          options.directiveTransforms || {}
          // user transforms
        )
      })
    );
    return generate(ast, resolvedOptions);
  }
  var noopDirectiveTransform = () => ({ props: [] });

  // node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js
  var V_MODEL_RADIO = Symbol(true ? `vModelRadio` : ``);
  var V_MODEL_CHECKBOX = Symbol(
    true ? `vModelCheckbox` : ``
  );
  var V_MODEL_TEXT = Symbol(true ? `vModelText` : ``);
  var V_MODEL_SELECT = Symbol(
    true ? `vModelSelect` : ``
  );
  var V_MODEL_DYNAMIC = Symbol(
    true ? `vModelDynamic` : ``
  );
  var V_ON_WITH_MODIFIERS = Symbol(
    true ? `vOnModifiersGuard` : ``
  );
  var V_ON_WITH_KEYS = Symbol(
    true ? `vOnKeysGuard` : ``
  );
  var V_SHOW = Symbol(true ? `vShow` : ``);
  var TRANSITION2 = Symbol(true ? `Transition` : ``);
  var TRANSITION_GROUP = Symbol(
    true ? `TransitionGroup` : ``
  );
  registerRuntimeHelpers({
    [V_MODEL_RADIO]: `vModelRadio`,
    [V_MODEL_CHECKBOX]: `vModelCheckbox`,
    [V_MODEL_TEXT]: `vModelText`,
    [V_MODEL_SELECT]: `vModelSelect`,
    [V_MODEL_DYNAMIC]: `vModelDynamic`,
    [V_ON_WITH_MODIFIERS]: `withModifiers`,
    [V_ON_WITH_KEYS]: `withKeys`,
    [V_SHOW]: `vShow`,
    [TRANSITION2]: `Transition`,
    [TRANSITION_GROUP]: `TransitionGroup`
  });
  var decoder;
  function decodeHtmlBrowser(raw, asAttr = false) {
    if (!decoder) {
      decoder = document.createElement("div");
    }
    if (asAttr) {
      decoder.innerHTML = `<div foo="${raw.replace(/"/g, "&quot;")}">`;
      return decoder.children[0].getAttribute("foo");
    } else {
      decoder.innerHTML = raw;
      return decoder.textContent;
    }
  }
  var parserOptions = {
    parseMode: "html",
    isVoidTag,
    isNativeTag: (tag) => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
    isPreTag: (tag) => tag === "pre",
    isIgnoreNewlineTag: (tag) => tag === "pre" || tag === "textarea",
    decodeEntities: decodeHtmlBrowser,
    isBuiltInComponent: (tag) => {
      if (tag === "Transition" || tag === "transition") {
        return TRANSITION2;
      } else if (tag === "TransitionGroup" || tag === "transition-group") {
        return TRANSITION_GROUP;
      }
    },
    // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
    getNamespace(tag, parent, rootNamespace) {
      let ns = parent ? parent.ns : rootNamespace;
      if (parent && ns === 2) {
        if (parent.tag === "annotation-xml") {
          if (tag === "svg") {
            return 1;
          }
          if (parent.props.some(
            (a) => a.type === 6 && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml")
          )) {
            ns = 0;
          }
        } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") {
          ns = 0;
        }
      } else if (parent && ns === 1) {
        if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") {
          ns = 0;
        }
      }
      if (ns === 0) {
        if (tag === "svg") {
          return 1;
        }
        if (tag === "math") {
          return 2;
        }
      }
      return ns;
    }
  };
  var transformStyle = (node) => {
    if (node.type === 1) {
      node.props.forEach((p2, i) => {
        if (p2.type === 6 && p2.name === "style" && p2.value) {
          node.props[i] = {
            type: 7,
            name: `bind`,
            arg: createSimpleExpression(`style`, true, p2.loc),
            exp: parseInlineCSS(p2.value.content, p2.loc),
            modifiers: [],
            loc: p2.loc
          };
        }
      });
    }
  };
  var parseInlineCSS = (cssText, loc) => {
    const normalized = parseStringStyle(cssText);
    return createSimpleExpression(
      JSON.stringify(normalized),
      false,
      loc,
      3
    );
  };
  function createDOMCompilerError(code, loc) {
    return createCompilerError(
      code,
      loc,
      true ? DOMErrorMessages : void 0
    );
  }
  var DOMErrorMessages = {
    [53]: `v-html is missing expression.`,
    [54]: `v-html will override element children.`,
    [55]: `v-text is missing expression.`,
    [56]: `v-text will override element children.`,
    [57]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
    [58]: `v-model argument is not supported on plain elements.`,
    [59]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
    [60]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
    [61]: `v-show is missing expression.`,
    [62]: `<Transition> expects exactly one child element or component.`,
    [63]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`
  };
  var transformVHtml = (dir, node, context) => {
    const { exp, loc } = dir;
    if (!exp) {
      context.onError(
        createDOMCompilerError(53, loc)
      );
    }
    if (node.children.length) {
      context.onError(
        createDOMCompilerError(54, loc)
      );
      node.children.length = 0;
    }
    return {
      props: [
        createObjectProperty(
          createSimpleExpression(`innerHTML`, true, loc),
          exp || createSimpleExpression("", true)
        )
      ]
    };
  };
  var transformVText = (dir, node, context) => {
    const { exp, loc } = dir;
    if (!exp) {
      context.onError(
        createDOMCompilerError(55, loc)
      );
    }
    if (node.children.length) {
      context.onError(
        createDOMCompilerError(56, loc)
      );
      node.children.length = 0;
    }
    return {
      props: [
        createObjectProperty(
          createSimpleExpression(`textContent`, true),
          exp ? getConstantType(exp, context) > 0 ? exp : createCallExpression(
            context.helperString(TO_DISPLAY_STRING),
            [exp],
            loc
          ) : createSimpleExpression("", true)
        )
      ]
    };
  };
  var transformModel2 = (dir, node, context) => {
    const baseResult = transformModel(dir, node, context);
    if (!baseResult.props.length || node.tagType === 1) {
      return baseResult;
    }
    if (dir.arg) {
      context.onError(
        createDOMCompilerError(
          58,
          dir.arg.loc
        )
      );
    }
    function checkDuplicatedValue() {
      const value = findDir(node, "bind");
      if (value && isStaticArgOf(value.arg, "value")) {
        context.onError(
          createDOMCompilerError(
            60,
            value.loc
          )
        );
      }
    }
    const { tag } = node;
    const isCustomElement = context.isCustomElement(tag);
    if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
      let directiveToUse = V_MODEL_TEXT;
      let isInvalidType = false;
      if (tag === "input" || isCustomElement) {
        const type = findProp(node, `type`);
        if (type) {
          if (type.type === 7) {
            directiveToUse = V_MODEL_DYNAMIC;
          } else if (type.value) {
            switch (type.value.content) {
              case "radio":
                directiveToUse = V_MODEL_RADIO;
                break;
              case "checkbox":
                directiveToUse = V_MODEL_CHECKBOX;
                break;
              case "file":
                isInvalidType = true;
                context.onError(
                  createDOMCompilerError(
                    59,
                    dir.loc
                  )
                );
                break;
              default:
                checkDuplicatedValue();
                break;
            }
          }
        } else if (hasDynamicKeyVBind(node)) {
          directiveToUse = V_MODEL_DYNAMIC;
        } else {
          checkDuplicatedValue();
        }
      } else if (tag === "select") {
        directiveToUse = V_MODEL_SELECT;
      } else {
        checkDuplicatedValue();
      }
      if (!isInvalidType) {
        baseResult.needRuntime = context.helper(directiveToUse);
      }
    } else {
      context.onError(
        createDOMCompilerError(
          57,
          dir.loc
        )
      );
    }
    baseResult.props = baseResult.props.filter(
      (p2) => !(p2.key.type === 4 && p2.key.content === "modelValue")
    );
    return baseResult;
  };
  var isEventOptionModifier = /* @__PURE__ */ makeMap(`passive,once,capture`);
  var isNonKeyModifier = /* @__PURE__ */ makeMap(
    // event propagation management
    `stop,prevent,self,ctrl,shift,alt,meta,exact,middle`
  );
  var maybeKeyModifier = /* @__PURE__ */ makeMap("left,right");
  var isKeyboardEvent = /* @__PURE__ */ makeMap(`onkeyup,onkeydown,onkeypress`);
  var resolveModifiers = (key, modifiers, context, loc) => {
    const keyModifiers = [];
    const nonKeyModifiers = [];
    const eventOptionModifiers = [];
    for (let i = 0; i < modifiers.length; i++) {
      const modifier = modifiers[i].content;
      if (modifier === "native" && checkCompatEnabled(
        "COMPILER_V_ON_NATIVE",
        context,
        loc
      )) {
        eventOptionModifiers.push(modifier);
      } else if (isEventOptionModifier(modifier)) {
        eventOptionModifiers.push(modifier);
      } else {
        if (maybeKeyModifier(modifier)) {
          if (isStaticExp(key)) {
            if (isKeyboardEvent(key.content.toLowerCase())) {
              keyModifiers.push(modifier);
            } else {
              nonKeyModifiers.push(modifier);
            }
          } else {
            keyModifiers.push(modifier);
            nonKeyModifiers.push(modifier);
          }
        } else {
          if (isNonKeyModifier(modifier)) {
            nonKeyModifiers.push(modifier);
          } else {
            keyModifiers.push(modifier);
          }
        }
      }
    }
    return {
      keyModifiers,
      nonKeyModifiers,
      eventOptionModifiers
    };
  };
  var transformClick = (key, event) => {
    const isStaticClick = isStaticExp(key) && key.content.toLowerCase() === "onclick";
    return isStaticClick ? createSimpleExpression(event, true) : key.type !== 4 ? createCompoundExpression([
      `(`,
      key,
      `) === "onClick" ? "${event}" : (`,
      key,
      `)`
    ]) : key;
  };
  var transformOn2 = (dir, node, context) => {
    return transformOn(dir, node, context, (baseResult) => {
      const { modifiers } = dir;
      if (!modifiers.length) return baseResult;
      let { key, value: handlerExp } = baseResult.props[0];
      const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key, modifiers, context, dir.loc);
      if (nonKeyModifiers.includes("right")) {
        key = transformClick(key, `onContextmenu`);
      }
      if (nonKeyModifiers.includes("middle")) {
        key = transformClick(key, `onMouseup`);
      }
      if (nonKeyModifiers.length) {
        handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [
          handlerExp,
          JSON.stringify(nonKeyModifiers)
        ]);
      }
      if (keyModifiers.length && // if event name is dynamic, always wrap with keys guard
      (!isStaticExp(key) || isKeyboardEvent(key.content.toLowerCase()))) {
        handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [
          handlerExp,
          JSON.stringify(keyModifiers)
        ]);
      }
      if (eventOptionModifiers.length) {
        const modifierPostfix = eventOptionModifiers.map(capitalize).join("");
        key = isStaticExp(key) ? createSimpleExpression(`${key.content}${modifierPostfix}`, true) : createCompoundExpression([`(`, key, `) + "${modifierPostfix}"`]);
      }
      return {
        props: [createObjectProperty(key, handlerExp)]
      };
    });
  };
  var transformShow = (dir, node, context) => {
    const { exp, loc } = dir;
    if (!exp) {
      context.onError(
        createDOMCompilerError(61, loc)
      );
    }
    return {
      props: [],
      needRuntime: context.helper(V_SHOW)
    };
  };
  var transformTransition = (node, context) => {
    if (node.type === 1 && node.tagType === 1) {
      const component = context.isBuiltInComponent(node.tag);
      if (component === TRANSITION2) {
        return () => {
          if (!node.children.length) {
            return;
          }
          if (hasMultipleChildren(node)) {
            context.onError(
              createDOMCompilerError(
                62,
                {
                  start: node.children[0].loc.start,
                  end: node.children[node.children.length - 1].loc.end,
                  source: ""
                }
              )
            );
          }
          const child = node.children[0];
          if (child.type === 1) {
            for (const p2 of child.props) {
              if (p2.type === 7 && p2.name === "show") {
                node.props.push({
                  type: 6,
                  name: "persisted",
                  nameLoc: node.loc,
                  value: void 0,
                  loc: node.loc
                });
              }
            }
          }
        };
      }
    }
  };
  function hasMultipleChildren(node) {
    const children = node.children = node.children.filter(
      (c) => c.type !== 3 && !(c.type === 2 && !c.content.trim())
    );
    const child = children[0];
    return children.length !== 1 || child.type === 11 || child.type === 9 && child.branches.some(hasMultipleChildren);
  }
  var ignoreSideEffectTags = (node, context) => {
    if (node.type === 1 && node.tagType === 0 && (node.tag === "script" || node.tag === "style")) {
      context.onError(
        createDOMCompilerError(
          63,
          node.loc
        )
      );
      context.removeNode();
    }
  };
  function isValidHTMLNesting(parent, child) {
    if (parent === "template") {
      return true;
    }
    if (parent in onlyValidChildren) {
      return onlyValidChildren[parent].has(child);
    }
    if (child in onlyValidParents) {
      return onlyValidParents[child].has(parent);
    }
    if (parent in knownInvalidChildren) {
      if (knownInvalidChildren[parent].has(child)) return false;
    }
    if (child in knownInvalidParents) {
      if (knownInvalidParents[child].has(parent)) return false;
    }
    return true;
  }
  var headings = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);
  var emptySet = /* @__PURE__ */ new Set([]);
  var onlyValidChildren = {
    head: /* @__PURE__ */ new Set([
      "base",
      "basefront",
      "bgsound",
      "link",
      "meta",
      "title",
      "noscript",
      "noframes",
      "style",
      "script",
      "template"
    ]),
    optgroup: /* @__PURE__ */ new Set(["option"]),
    select: /* @__PURE__ */ new Set(["optgroup", "option", "hr"]),
    // table
    table: /* @__PURE__ */ new Set(["caption", "colgroup", "tbody", "tfoot", "thead"]),
    tr: /* @__PURE__ */ new Set(["td", "th"]),
    colgroup: /* @__PURE__ */ new Set(["col"]),
    tbody: /* @__PURE__ */ new Set(["tr"]),
    thead: /* @__PURE__ */ new Set(["tr"]),
    tfoot: /* @__PURE__ */ new Set(["tr"]),
    // these elements can not have any children elements
    script: emptySet,
    iframe: emptySet,
    option: emptySet,
    textarea: emptySet,
    style: emptySet,
    title: emptySet
  };
  var onlyValidParents = {
    // sections
    html: emptySet,
    body: /* @__PURE__ */ new Set(["html"]),
    head: /* @__PURE__ */ new Set(["html"]),
    // table
    td: /* @__PURE__ */ new Set(["tr"]),
    colgroup: /* @__PURE__ */ new Set(["table"]),
    caption: /* @__PURE__ */ new Set(["table"]),
    tbody: /* @__PURE__ */ new Set(["table"]),
    tfoot: /* @__PURE__ */ new Set(["table"]),
    col: /* @__PURE__ */ new Set(["colgroup"]),
    th: /* @__PURE__ */ new Set(["tr"]),
    thead: /* @__PURE__ */ new Set(["table"]),
    tr: /* @__PURE__ */ new Set(["tbody", "thead", "tfoot"]),
    // data list
    dd: /* @__PURE__ */ new Set(["dl", "div"]),
    dt: /* @__PURE__ */ new Set(["dl", "div"]),
    // other
    figcaption: /* @__PURE__ */ new Set(["figure"]),
    // li: new Set(["ul", "ol"]),
    summary: /* @__PURE__ */ new Set(["details"]),
    area: /* @__PURE__ */ new Set(["map"])
  };
  var knownInvalidChildren = {
    p: /* @__PURE__ */ new Set([
      "address",
      "article",
      "aside",
      "blockquote",
      "center",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "fieldset",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "menu",
      "ol",
      "p",
      "pre",
      "section",
      "table",
      "ul"
    ]),
    svg: /* @__PURE__ */ new Set([
      "b",
      "blockquote",
      "br",
      "code",
      "dd",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "hr",
      "i",
      "img",
      "li",
      "menu",
      "meta",
      "ol",
      "p",
      "pre",
      "ruby",
      "s",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "table",
      "u",
      "ul",
      "var"
    ])
  };
  var knownInvalidParents = {
    a: /* @__PURE__ */ new Set(["a"]),
    button: /* @__PURE__ */ new Set(["button"]),
    dd: /* @__PURE__ */ new Set(["dd", "dt"]),
    dt: /* @__PURE__ */ new Set(["dd", "dt"]),
    form: /* @__PURE__ */ new Set(["form"]),
    li: /* @__PURE__ */ new Set(["li"]),
    h1: headings,
    h2: headings,
    h3: headings,
    h4: headings,
    h5: headings,
    h6: headings
  };
  var validateHtmlNesting = (node, context) => {
    if (node.type === 1 && node.tagType === 0 && context.parent && context.parent.type === 1 && context.parent.tagType === 0 && !isValidHTMLNesting(context.parent.tag, node.tag)) {
      const error = new SyntaxError(
        `<${node.tag}> cannot be child of <${context.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
      );
      error.loc = node.loc;
      context.onWarn(error);
    }
  };
  var DOMNodeTransforms = [
    transformStyle,
    ...true ? [transformTransition, validateHtmlNesting] : []
  ];
  var DOMDirectiveTransforms = {
    cloak: noopDirectiveTransform,
    html: transformVHtml,
    text: transformVText,
    model: transformModel2,
    // override compiler-core
    on: transformOn2,
    // override compiler-core
    show: transformShow
  };
  function compile2(src, options = {}) {
    return baseCompile(
      src,
      extend({}, parserOptions, options, {
        nodeTransforms: [
          // ignore <script> and <tag>
          // this is not put inside DOMNodeTransforms because that list is used
          // by compiler-ssr to generate vnode fallback branches
          ignoreSideEffectTags,
          ...DOMNodeTransforms,
          ...options.nodeTransforms || []
        ],
        directiveTransforms: extend(
          {},
          DOMDirectiveTransforms,
          options.directiveTransforms || {}
        ),
        transformHoist: null
      })
    );
  }

  // node_modules/vue/dist/vue.esm-bundler.js
  function initDev() {
    {
      initCustomFormatter();
    }
  }
  if (true) {
    initDev();
  }
  var compileCache = /* @__PURE__ */ Object.create(null);
  function compileToFunction(template8, options) {
    if (!isString(template8)) {
      if (template8.nodeType) {
        template8 = template8.innerHTML;
      } else {
        warn2(`invalid template option: `, template8);
        return NOOP;
      }
    }
    const key = genCacheKey(template8, options);
    const cached = compileCache[key];
    if (cached) {
      return cached;
    }
    if (template8[0] === "#") {
      const el = document.querySelector(template8);
      if (!el) {
        warn2(`Template element not found or is empty: ${template8}`);
      }
      template8 = el ? el.innerHTML : ``;
    }
    const opts = extend(
      {
        hoistStatic: true,
        onError: true ? onError : void 0,
        onWarn: true ? (e) => onError(e, true) : NOOP
      },
      options
    );
    if (!opts.isCustomElement && typeof customElements !== "undefined") {
      opts.isCustomElement = (tag) => !!customElements.get(tag);
    }
    const { code } = compile2(template8, opts);
    function onError(err, asWarning = false) {
      const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
      const codeFrame = err.loc && generateCodeFrame(
        template8,
        err.loc.start.offset,
        err.loc.end.offset
      );
      warn2(codeFrame ? `${message}
${codeFrame}` : message);
    }
    const render2 = new Function("Vue", code)(runtime_dom_esm_bundler_exports);
    render2._rc = true;
    return compileCache[key] = render2;
  }
  registerRuntimeCompiler(compileToFunction);

  // node_modules/vue/dist/vue.runtime.esm-bundler.js
  function initDev2() {
    {
      initCustomFormatter();
    }
  }
  if (true) {
    initDev2();
  }

  // node_modules/@vue/devtools-api/lib/esm/env.js
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : {};
  }
  var isProxyAvailable = typeof Proxy === "function";

  // node_modules/@vue/devtools-api/lib/esm/const.js
  var HOOK_SETUP = "devtools-plugin:setup";
  var HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";

  // node_modules/@vue/devtools-api/lib/esm/time.js
  var supported2;
  var perf2;
  function isPerformanceSupported() {
    var _a;
    if (supported2 !== void 0) {
      return supported2;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported2 = true;
      perf2 = window.performance;
    } else if (typeof globalThis !== "undefined" && ((_a = globalThis.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported2 = true;
      perf2 = globalThis.perf_hooks.performance;
    } else {
      supported2 = false;
    }
    return supported2;
  }
  function now() {
    return isPerformanceSupported() ? perf2.now() : Date.now();
  }

  // node_modules/@vue/devtools-api/lib/esm/proxy.js
  var ApiProxy = class {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve2) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve: resolve2
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  };

  // node_modules/@vue/devtools-api/lib/esm/index.js
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy) {
        setupFn(proxy.proxiedTarget);
      }
    }
  }

  // node_modules/vue-router/dist/vue-router.mjs
  var isBrowser = typeof document !== "undefined";
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function isESModule(obj) {
    return obj.__esModule || obj[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
    // add the Module string tag
    obj.default && isRouteComponent(obj.default);
  }
  var assign = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = isArray2(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  var noop = () => {
  };
  var isArray2 = Array.isArray;
  function warn3(msg) {
    const args = Array.from(arguments).slice(1);
    console.warn.apply(console, ["[Vue Router warn]: " + msg].concat(args));
  }
  var HASH_RE = /#/g;
  var AMPERSAND_RE = /&/g;
  var SLASH_RE = /\//g;
  var EQUAL_RE = /=/g;
  var IM_RE = /\?/g;
  var PLUS_RE = /\+/g;
  var ENC_BRACKET_OPEN_RE = /%5B/g;
  var ENC_BRACKET_CLOSE_RE = /%5D/g;
  var ENC_CARET_RE = /%5E/g;
  var ENC_BACKTICK_RE = /%60/g;
  var ENC_CURLY_OPEN_RE = /%7B/g;
  var ENC_PIPE_RE = /%7C/g;
  var ENC_CURLY_CLOSE_RE = /%7D/g;
  var ENC_SPACE_RE = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryValue(text) {
    return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
  }
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
  }
  function decode(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
      warn3(`Error decoding "${text}". Using original value`);
    }
    return "" + text;
  }
  var TRAILING_SLASH_RE = /\/$/;
  var removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
  function parseURL(parseQuery2, location2, currentLocation = "/") {
    let path, query = {}, searchString = "", hash = "";
    const hashPos = location2.indexOf("#");
    let searchPos = location2.indexOf("?");
    if (hashPos < searchPos && hashPos >= 0) {
      searchPos = -1;
    }
    if (searchPos > -1) {
      path = location2.slice(0, searchPos);
      searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
      query = parseQuery2(searchString);
    }
    if (hashPos > -1) {
      path = path || location2.slice(0, hashPos);
      hash = location2.slice(hashPos, location2.length);
    }
    path = resolveRelativePath(path != null ? path : location2, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash,
      path,
      query,
      hash: decode(hash)
    };
  }
  function stringifyURL(stringifyQuery2, location2) {
    const query = location2.query ? stringifyQuery2(location2.query) : "";
    return location2.path + (query && "?") + query + (location2.hash || "");
  }
  function stripBase(pathname, base) {
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
      return pathname;
    return pathname.slice(base.length) || "/";
  }
  function isSameRouteLocation(stringifyQuery2, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
    for (const key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key]))
        return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return isArray2(a) ? isEquivalentArray(a, b) : isArray2(b) ? isEquivalentArray(b, a) : a === b;
  }
  function isEquivalentArray(a, b) {
    return isArray2(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/"))
      return to;
    if (!from.startsWith("/")) {
      warn3(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
      return to;
    }
    if (!to)
      return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    const lastToSegment = toSegments[toSegments.length - 1];
    if (lastToSegment === ".." || lastToSegment === ".") {
      toSegments.push("");
    }
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (segment === ".")
        continue;
      if (segment === "..") {
        if (position > 1)
          position--;
      } else
        break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
  }
  var START_LOCATION_NORMALIZED = {
    path: "/",
    // TODO: could we use a symbol in the future?
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  function normalizeBase(base) {
    if (!base) {
      if (isBrowser) {
        const baseEl = document.querySelector("base");
        base = baseEl && baseEl.getAttribute("href") || "/";
        base = base.replace(/^\w+:\/\/[^\/]+/, "");
      } else {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#")
      base = "/" + base;
    return removeTrailingSlash(base);
  }
  var BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location2) {
    return base.replace(BEFORE_HASH_RE, "#") + location2;
  }
  function getElementPosition(el, offset) {
    const docRect = document.documentElement.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
      behavior: offset.behavior,
      left: elRect.left - docRect.left - (offset.left || 0),
      top: elRect.top - docRect.top - (offset.top || 0)
    };
  }
  var computeScrollPosition = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function scrollToPosition(position) {
    let scrollToOptions;
    if ("el" in position) {
      const positionEl = position.el;
      const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
      if (typeof position.el === "string") {
        if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
          try {
            const foundEl = document.querySelector(position.el);
            if (isIdSelector && foundEl) {
              warn3(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
              return;
            }
          } catch (err) {
            warn3(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
            return;
          }
        }
      }
      const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
      if (!el) {
        warn3(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
        return;
      }
      scrollToOptions = getElementPosition(el, position);
    } else {
      scrollToOptions = position;
    }
    if ("scrollBehavior" in document.documentElement.style)
      window.scrollTo(scrollToOptions);
    else {
      window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
    }
  }
  function getScrollKey(path, delta) {
    const position = history.state ? history.state.position - delta : -1;
    return position + path;
  }
  var scrollPositions = /* @__PURE__ */ new Map();
  function saveScrollPosition(key, scrollPosition) {
    scrollPositions.set(key, scrollPosition);
  }
  function getSavedScrollPosition(key) {
    const scroll = scrollPositions.get(key);
    scrollPositions.delete(key);
    return scroll;
  }
  var createBaseLocation = () => location.protocol + "//" + location.host;
  function createCurrentLocation(base, location2) {
    const { pathname, search, hash } = location2;
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
      let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      let pathFromHash = hash.slice(slicePos);
      if (pathFromHash[0] !== "/")
        pathFromHash = "/" + pathFromHash;
      return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    let pauseState = null;
    const popStateHandler = ({ state }) => {
      const to = createCurrentLocation(base, location);
      const from = currentLocation.value;
      const fromState = historyState.value;
      let delta = 0;
      if (state) {
        currentLocation.value = to;
        historyState.value = state;
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state.position - fromState.position : 0;
      } else {
        replace(to);
      }
      listeners.forEach((listener) => {
        listener(currentLocation.value, from, {
          delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      listeners.push(callback);
      const teardown = () => {
        const index = listeners.indexOf(callback);
        if (index > -1)
          listeners.splice(index, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      const { history: history2 } = window;
      if (!history2.state)
        return;
      history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
    }
    function destroy() {
      for (const teardown of teardowns)
        teardown();
      teardowns = [];
      window.removeEventListener("popstate", popStateHandler);
      window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener, {
      passive: true
    });
    return {
      pauseListeners,
      listen,
      destroy
    };
  }
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
      back,
      current,
      forward,
      replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    const { history: history2, location: location2 } = window;
    const currentLocation = {
      value: createCurrentLocation(base, location2)
    };
    const historyState = { value: history2.state };
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        // the length is off by one, we need to decrease it
        position: history2.length - 1,
        replaced: true,
        // don't add a scroll as the user may have an anchor, and we want
        // scrollBehavior to be triggered without a saved position
        scroll: null
      }, true);
    }
    function changeLocation(to, state, replace2) {
      const hashIndex = base.indexOf("#");
      const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        history2[replace2 ? "replaceState" : "pushState"](state, "", url);
        historyState.value = state;
      } catch (err) {
        if (true) {
          warn3("Error with push/replace State", err);
        } else {
          console.error(err);
        }
        location2[replace2 ? "replace" : "assign"](url);
      }
    }
    function replace(to, data) {
      const state = assign({}, history2.state, buildState(
        historyState.value.back,
        // keep back and forward entries but override current position
        to,
        historyState.value.forward,
        true
      ), data, { position: historyState.value.position });
      changeLocation(to, state, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      const currentState = assign(
        {},
        // use current history state to gracefully handle a wrong call to
        // history.replaceState
        // https://github.com/vuejs/router/issues/366
        historyState.value,
        history2.state,
        {
          forward: to,
          scroll: computeScrollPosition()
        }
      );
      if (!history2.state) {
        warn3(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`);
      }
      changeLocation(currentState.current, currentState, true);
      const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
      changeLocation(to, state, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push,
      replace
    };
  }
  function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
      if (!triggerListeners)
        historyListeners.pauseListeners();
      history.go(delta);
    }
    const routerHistory = assign({
      // it's overridden right after
      location: "",
      base,
      go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
      enumerable: true,
      get: () => historyNavigation.state.value
    });
    return routerHistory;
  }
  function createWebHashHistory(base) {
    base = location.host ? base || location.pathname + location.search : "";
    if (!base.includes("#"))
      base += "#";
    if (!base.endsWith("#/") && !base.endsWith("#")) {
      warn3(`A hash base must end with a "#":
"${base}" should be "${base.replace(/#.*$/, "#")}".`);
    }
    return createWebHistory(base);
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
  }
  var NavigationFailureSymbol = Symbol(true ? "navigation failure" : "");
  var NavigationFailureType;
  (function(NavigationFailureType2) {
    NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
    NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
    NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
  })(NavigationFailureType || (NavigationFailureType = {}));
  var ErrorTypeMessages = {
    [
      1
      /* ErrorTypes.MATCHER_NOT_FOUND */
    ]({ location: location2, currentLocation }) {
      return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
    },
    [
      2
      /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
    ]({ from, to }) {
      return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [
      4
      /* ErrorTypes.NAVIGATION_ABORTED */
    ]({ from, to }) {
      return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ]({ from, to }) {
      return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [
      16
      /* ErrorTypes.NAVIGATION_DUPLICATED */
    ]({ from, to }) {
      return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
  };
  function createRouterError(type, params) {
    if (true) {
      return assign(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    } else {
      return assign(new Error(), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  var propertiesToLog = ["params", "query", "hash"];
  function stringifyRoute(to) {
    if (typeof to === "string")
      return to;
    if (to.path != null)
      return to.path;
    const location2 = {};
    for (const key of propertiesToLog) {
      if (key in to)
        location2[key] = to[key];
    }
    return JSON.stringify(location2, null, 2);
  }
  var BASE_PARAM_PATTERN = "[^/]+?";
  var BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [
        90
        /* PathScore.Root */
      ];
      if (options.strict && !segment.length)
        pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex)
            pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys.push({
            name: value,
            repeatable,
            optional
          });
          const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re2 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re2})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
          if (!tokenIndex)
            subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
            // or /:p?-:p2
            optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional)
            subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional)
            subSegmentScore += -8;
          if (repeatable)
            subSegmentScore += -20;
          if (re2 === ".*")
            subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001;
    }
    if (!options.strict)
      pattern += "/?";
    if (options.end)
      pattern += "$";
    else if (options.strict && !pattern.endsWith("/"))
      pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse(path) {
      const match = path.match(re);
      const params = {};
      if (!match)
        return null;
      for (let i = 1; i < match.length; i++) {
        const value = match[i] || "";
        const key = keys[i - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/"))
          path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (isArray2(param) && !repeatable) {
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            }
            const text = isArray2(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2) {
                  if (path.endsWith("/"))
                    path = path.slice(0, -1);
                  else
                    avoidDuplicatedSlash = true;
                }
              } else
                throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path || "/";
    }
    return {
      re,
      score,
      keys,
      parse,
      stringify
    };
  }
  function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
      const diff = b[i] - a[i];
      if (diff)
        return diff;
      i++;
    }
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      const comp = compareScoreArray(aScore[i], bScore[i]);
      if (comp)
        return comp;
      i++;
    }
    if (Math.abs(bScore.length - aScore.length) === 1) {
      if (isLastScoreNegative(aScore))
        return 1;
      if (isLastScoreNegative(bScore))
        return -1;
    }
    return bScore.length - aScore.length;
  }
  function isLastScoreNegative(score) {
    const last = score[score.length - 1];
    return score.length > 0 && last[last.length - 1] < 0;
  }
  var ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  var VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path)
      return [[]];
    if (path === "/")
      return [[ROOT_TOKEN]];
    if (!path.startsWith("/")) {
      throw new Error(true ? `Route paths should start with a "/": "${path}" should be "/${path}".` : `Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state})/"${buffer2}": ${message}`);
    }
    let state = 0;
    let previousState = state;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment)
        tokens.push(segment);
      segment = [];
    }
    let i = 0;
    let char;
    let buffer2 = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer2)
        return;
      if (state === 0) {
        segment.push({
          type: 0,
          value: buffer2
        });
      } else if (state === 1 || state === 2 || state === 3) {
        if (segment.length > 1 && (char === "*" || char === "+"))
          crash(`A repeatable param (${buffer2}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer2,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer2 = "";
    }
    function addCharToBuffer() {
      buffer2 += char;
    }
    while (i < path.length) {
      char = path[i++];
      if (char === "\\" && state !== 2) {
        previousState = state;
        state = 4;
        continue;
      }
      switch (state) {
        case 0:
          if (char === "/") {
            if (buffer2) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state = previousState;
          break;
        case 1:
          if (char === "(") {
            state = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0;
            if (char !== "*" && char !== "?" && char !== "+")
              i--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\")
              customRe = customRe.slice(0, -1) + char;
            else
              state = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state === 2)
      crash(`Unfinished custom RegExp for param "${buffer2}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    if (true) {
      const existingKeys = /* @__PURE__ */ new Set();
      for (const key of parser.keys) {
        if (existingKeys.has(key.name))
          warn3(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
        existingKeys.add(key.name);
      }
    }
    const matcher = assign(parser, {
      record,
      parent,
      // these needs to be populated by the parent
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes, globalOptions) {
    const matchers = [];
    const matcherMap = /* @__PURE__ */ new Map();
    globalOptions = mergeOptions2({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      if (true) {
        checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent);
      }
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions2(globalOptions, record);
      const normalizedRecords = [mainNormalizedRecord];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(
            // we need to normalize again to ensure the `mods` property
            // being non enumerable
            normalizeRouteRecord(assign({}, mainNormalizedRecord, {
              // this allows us to hold a copy of the `components` option
              // so that async components cache is hold on the original record
              components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
              path: alias,
              // we might be the child of an alias
              aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
              // the aliases are always of the same kind as the original since they
              // are defined on the same record
            }))
          );
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        if (normalizedRecord.path === "*") {
          throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\nSee more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.');
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (parent && path[0] === "/")
          checkMissingParamsInAbsolutePath(matcher, parent);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
          if (true) {
            checkSameParams(originalRecord, matcher);
          }
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher)
            originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher)) {
            if (true) {
              checkSameNameAsAncestor(record, parent);
            }
            removeRoute(record.name);
          }
        }
        if (isMatchable(matcher)) {
          insertMatcher(matcher);
        }
        if (mainNormalizedRecord.children) {
          const children = mainNormalizedRecord.children;
          for (let i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        originalRecord = originalRecord || matcher;
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index = matchers.indexOf(matcherRef);
        if (index > -1) {
          matchers.splice(index, 1);
          if (matcherRef.record.name)
            matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      const index = findInsertionIndex2(matcher, matchers);
      matchers.splice(index, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher))
        matcherMap.set(matcher.record.name, matcher);
    }
    function resolve2(location2, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name;
      if ("name" in location2 && location2.name) {
        matcher = matcherMap.get(location2.name);
        if (!matcher)
          throw createRouterError(1, {
            location: location2
          });
        if (true) {
          const invalidParams = Object.keys(location2.params || {}).filter((paramName) => !matcher.keys.find((k) => k.name === paramName));
          if (invalidParams.length) {
            warn3(`Discarded invalid param(s) "${invalidParams.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
          }
        }
        name = matcher.record.name;
        params = assign(
          // paramsFromLocation is a new object
          paramsFromLocation(
            currentLocation.params,
            // only keep params that exist in the resolved location
            // only keep optional params coming from a parent record
            matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)
          ),
          // discard any existing params in the current location that do not exist here
          // #1497 this ensures better active/exact matching
          location2.params && paramsFromLocation(location2.params, matcher.keys.map((k) => k.name))
        );
        path = matcher.stringify(params);
      } else if (location2.path != null) {
        path = location2.path;
        if (!path.startsWith("/")) {
          warn3(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`);
        }
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher)
          throw createRouterError(1, {
            location: location2,
            currentLocation
          });
        name = matcher.record.name;
        params = assign({}, currentLocation.params, location2.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes.forEach((route) => addRoute(route));
    function clearRoutes() {
      matchers.length = 0;
      matcherMap.clear();
    }
    return {
      addRoute,
      resolve: resolve2,
      removeRoute,
      clearRoutes,
      getRoutes,
      getRecordMatcher
    };
  }
  function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
      if (key in params)
        newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    const normalized = {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: record.aliasOf,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      // must be declared afterwards
      // mods: {},
      components: "components" in record ? record.components || null : record.component && { default: record.component }
    };
    Object.defineProperty(normalized, "mods", {
      value: {}
    });
    return normalized;
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name in record.components)
        propsObject[name] = typeof props === "object" ? props[name] : props;
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf)
        return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta, record) => assign(meta, record.meta), {});
  }
  function mergeOptions2(defaults, partialOptions) {
    const options = {};
    for (const key in defaults) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
  }
  function isSameParam(a, b) {
    return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
  }
  function checkSameParams(a, b) {
    for (const key of a.keys) {
      if (!key.optional && !b.keys.find(isSameParam.bind(null, key)))
        return warn3(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
    }
    for (const key of b.keys) {
      if (!key.optional && !a.keys.find(isSameParam.bind(null, key)))
        return warn3(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
    }
  }
  function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent) {
    if (parent && parent.record.name && !mainNormalizedRecord.name && !mainNormalizedRecord.path) {
      warn3(`The route named "${String(parent.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
    }
  }
  function checkSameNameAsAncestor(record, parent) {
    for (let ancestor = parent; ancestor; ancestor = ancestor.parent) {
      if (ancestor.record.name === record.name) {
        throw new Error(`A route named "${String(record.name)}" has been added as a ${parent === ancestor ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
      }
    }
  }
  function checkMissingParamsInAbsolutePath(record, parent) {
    for (const key of parent.keys) {
      if (!record.keys.find(isSameParam.bind(null, key)))
        return warn3(`Absolute path "${record.record.path}" must have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
    }
  }
  function findInsertionIndex2(matcher, matchers) {
    let lower = 0;
    let upper = matchers.length;
    while (lower !== upper) {
      const mid = lower + upper >> 1;
      const sortOrder = comparePathParserScore(matcher, matchers[mid]);
      if (sortOrder < 0) {
        upper = mid;
      } else {
        lower = mid + 1;
      }
    }
    const insertionAncestor = getInsertionAncestor(matcher);
    if (insertionAncestor) {
      upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
      if (upper < 0) {
        warn3(`Finding ancestor route "${insertionAncestor.record.path}" failed for "${matcher.record.path}"`);
      }
    }
    return upper;
  }
  function getInsertionAncestor(matcher) {
    let ancestor = matcher;
    while (ancestor = ancestor.parent) {
      if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) {
        return ancestor;
      }
    }
    return;
  }
  function isMatchable({ record }) {
    return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
  }
  function parseQuery(search) {
    const query = {};
    if (search === "" || search === "?")
      return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!isArray2(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = isArray2(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null)
            search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = isArray2(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  var matchedRouteKey = Symbol(true ? "router view location matched" : "");
  var viewDepthKey = Symbol(true ? "router view depth" : "");
  var routerKey = Symbol(true ? "router" : "");
  var routeLocationKey = Symbol(true ? "route location" : "");
  var routerViewLocationKey = Symbol(true ? "router view location" : "");
  function useCallbacks() {
    let handlers = [];
    function add(handler) {
      handlers.push(handler);
      return () => {
        const i = handlers.indexOf(handler);
        if (i > -1)
          handlers.splice(i, 1);
      };
    }
    function reset2() {
      handlers = [];
    }
    return {
      add,
      list: () => handlers.slice(),
      reset: reset2
    };
  }
  function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
    const enterCallbackArray = record && // name is defined if record is because of the function overload
    (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve2, reject) => {
      const next = (valid) => {
        if (valid === false) {
          reject(createRouterError(4, {
            from,
            to
          }));
        } else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2, {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
          record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
            enterCallbackArray.push(valid);
          }
          resolve2();
        }
      };
      const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, true ? canOnlyBeCalledOnce(next, to, from) : next));
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3)
        guardCall = guardCall.then(next);
      if (guard.length > 2) {
        const message = `The "next" callback was never called inside of ${guard.name ? '"' + guard.name + '"' : ""}:
${guard.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
        if (typeof guardReturn === "object" && "then" in guardReturn) {
          guardCall = guardCall.then((resolvedValue) => {
            if (!next._called) {
              warn3(message);
              return Promise.reject(new Error("Invalid navigation guard"));
            }
            return resolvedValue;
          });
        } else if (guardReturn !== void 0) {
          if (!next._called) {
            warn3(message);
            reject(new Error("Invalid navigation guard"));
            return;
          }
        }
      }
      guardCall.catch((err) => reject(err));
    });
  }
  function canOnlyBeCalledOnce(next, to, from) {
    let called = 0;
    return function() {
      if (called++ === 1)
        warn3(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
      next._called = true;
      if (called === 1)
        next.apply(null, arguments);
    };
  }
  function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
    const guards = [];
    for (const record of matched) {
      if (!record.components && !record.children.length) {
        warn3(`Record with path "${record.path}" is either missing a "component(s)" or "children" property.`);
      }
      for (const name in record.components) {
        let rawComponent = record.components[name];
        if (true) {
          if (!rawComponent || typeof rawComponent !== "object" && typeof rawComponent !== "function") {
            warn3(`Component "${name}" in record with path "${record.path}" is not a valid component. Received "${String(rawComponent)}".`);
            throw new Error("Invalid route component");
          } else if ("then" in rawComponent) {
            warn3(`Component "${name}" in record with path "${record.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
            const promise = rawComponent;
            rawComponent = () => promise;
          } else if (rawComponent.__asyncLoader && // warn only once per component
          !rawComponent.__warnedDefineAsync) {
            rawComponent.__warnedDefineAsync = true;
            warn3(`Component "${name}" in record with path "${record.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`);
          }
        }
        if (guardType !== "beforeRouteEnter" && !record.instances[name])
          continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
        } else {
          let componentPromise = rawComponent();
          if (!("catch" in componentPromise)) {
            warn3(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
            componentPromise = Promise.resolve(componentPromise);
          }
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved)
              throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.mods[name] = resolved;
            record.components[name] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
          }));
        }
      }
    }
    return guards;
  }
  function useLink(props) {
    const router2 = inject(routerKey);
    const currentRoute = inject(routeLocationKey);
    let hasPrevious = false;
    let previousTo = null;
    const route = computed2(() => {
      const to = unref(props.to);
      if (!hasPrevious || to !== previousTo) {
        if (!isRouteLocation(to)) {
          if (hasPrevious) {
            warn3(`Invalid value for prop "to" in useLink()
- to:`, to, `
- previous to:`, previousTo, `
- props:`, props);
          } else {
            warn3(`Invalid value for prop "to" in useLink()
- to:`, to, `
- props:`, props);
          }
        }
        previousTo = to;
        hasPrevious = true;
      }
      return router2.resolve(to);
    });
    const activeRecordIndex = computed2(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length)
        return -1;
      const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index > -1)
        return index;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return (
        // we are dealing with nested routes
        length > 1 && // if the parent and matched route have the same path, this link is
        // referring to the empty child. Or we currently are on a different
        // child of the same parent
        getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
        currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index
      );
    });
    const isActive = computed2(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = computed2(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
      if (guardEvent(e)) {
        const p2 = router2[unref(props.replace) ? "replace" : "push"](
          unref(props.to)
          // avoid uncaught errors are they are logged anyway
        ).catch(noop);
        if (props.viewTransition && typeof document !== "undefined" && "startViewTransition" in document) {
          document.startViewTransition(() => p2);
        }
        return p2;
      }
      return Promise.resolve();
    }
    if (isBrowser) {
      const instance = getCurrentInstance();
      if (instance) {
        const linkContextDevtools = {
          route: route.value,
          isActive: isActive.value,
          isExactActive: isExactActive.value,
          error: null
        };
        instance.__vrl_devtools = instance.__vrl_devtools || [];
        instance.__vrl_devtools.push(linkContextDevtools);
        watchEffect(() => {
          linkContextDevtools.route = route.value;
          linkContextDevtools.isActive = isActive.value;
          linkContextDevtools.isExactActive = isExactActive.value;
          linkContextDevtools.error = isRouteLocation(unref(props.to)) ? null : 'Invalid "to" value';
        }, { flush: "post" });
      }
    }
    return {
      route,
      href: computed2(() => route.value.href),
      isActive,
      isExactActive,
      navigate
    };
  }
  function preferSingleVNode(vnodes) {
    return vnodes.length === 1 ? vnodes[0] : vnodes;
  }
  var RouterLinkImpl = /* @__PURE__ */ defineComponent({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      // inactiveClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      },
      viewTransition: Boolean
    },
    useLink,
    setup(props, { slots }) {
      const link = reactive(useLink(props));
      const { options } = inject(routerKey);
      const elClass = computed2(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
        // [getLinkClass(
        //   props.inactiveClass,
        //   options.linkInactiveClass,
        //   'router-link-inactive'
        // )]: !link.isExactActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
      }));
      return () => {
        const children = slots.default && preferSingleVNode(slots.default(link));
        return props.custom ? children : h("a", {
          "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          // this would override user added attrs but Vue will still add
          // the listener, so we end up triggering both
          onClick: link.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  var RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    if (e.button !== void 0 && e.button !== 0)
      return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target))
        return;
    }
    if (e.preventDefault)
      e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue)
          return false;
      } else {
        if (!isArray2(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
          return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  var getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  var RouterViewImpl = /* @__PURE__ */ defineComponent({
    name: "RouterView",
    // #674 we manually inherit them
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    // Better compat for @vue/compat users
    // https://github.com/vuejs/router/issues/1315
    compatConfig: { MODE: 3 },
    setup(props, { attrs, slots }) {
      warnDeprecatedUsage();
      const injectedRoute = inject(routerViewLocationKey);
      const routeToDisplay = computed2(() => props.route || injectedRoute.value);
      const injectedDepth = inject(viewDepthKey, 0);
      const depth = computed2(() => {
        let initialDepth = unref(injectedDepth);
        const { matched } = routeToDisplay.value;
        let matchedRoute;
        while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
          initialDepth++;
        }
        return initialDepth;
      });
      const matchedRouteRef = computed2(() => routeToDisplay.value.matched[depth.value]);
      provide(viewDepthKey, computed2(() => depth.value + 1));
      provide(matchedRouteKey, matchedRouteRef);
      provide(routerViewLocationKey, routeToDisplay);
      const viewRef = ref();
      watch2(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && // if there is no instance but to and from are the same this might be
        // the first visit
        (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
        }
      }, { flush: "post" });
      return () => {
        const route = routeToDisplay.value;
        const currentName = props.name;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[currentName];
        if (!ViewComponent) {
          return normalizeSlot2(slots.default, { Component: ViewComponent, route });
        }
        const routePropsOption = matchedRoute.props[currentName];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = h(ViewComponent, assign({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        if (isBrowser && component.ref) {
          const info = {
            depth: depth.value,
            name: matchedRoute.name,
            path: matchedRoute.path,
            meta: matchedRoute.meta
          };
          const internalInstances = isArray2(component.ref) ? component.ref.map((r) => r.i) : [component.ref.i];
          internalInstances.forEach((instance) => {
            instance.__vrv_devtools = info;
          });
        }
        return (
          // pass the vnode to the slot as a prop.
          // h and <component :is="..."> both accept vnodes
          normalizeSlot2(slots.default, { Component: component, route }) || component
        );
      };
    }
  });
  function normalizeSlot2(slot, data) {
    if (!slot)
      return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  var RouterView = RouterViewImpl;
  function warnDeprecatedUsage() {
    const instance = getCurrentInstance();
    const parentName = instance.parent && instance.parent.type.name;
    const parentSubTreeType = instance.parent && instance.parent.subTree && instance.parent.subTree.type;
    if (parentName && (parentName === "KeepAlive" || parentName.includes("Transition")) && typeof parentSubTreeType === "object" && parentSubTreeType.name === "RouterView") {
      const comp = parentName === "KeepAlive" ? "keep-alive" : "transition";
      warn3(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${comp}>
    <component :is="Component" />
  </${comp}>
</router-view>`);
    }
  }
  function formatRouteLocation(routeLocation, tooltip) {
    const copy = assign({}, routeLocation, {
      // remove variables that can contain vue instances
      matched: routeLocation.matched.map((matched) => omit(matched, ["instances", "children", "aliasOf"]))
    });
    return {
      _custom: {
        type: null,
        readOnly: true,
        display: routeLocation.fullPath,
        tooltip,
        value: copy
      }
    };
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  var routerId = 0;
  function addDevtools(app2, router2, matcher) {
    if (router2.__hasDevtools)
      return;
    router2.__hasDevtools = true;
    const id = routerId++;
    setupDevtoolsPlugin({
      id: "org.vuejs.router" + (id ? "." + id : ""),
      label: "Vue Router",
      packageName: "vue-router",
      homepage: "https://router.vuejs.org",
      logo: "https://router.vuejs.org/logo.png",
      componentStateTypes: ["Routing"],
      app: app2
    }, (api) => {
      if (typeof api.now !== "function") {
        console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.on.inspectComponent((payload, ctx) => {
        if (payload.instanceData) {
          payload.instanceData.state.push({
            type: "Routing",
            key: "$route",
            editable: false,
            value: formatRouteLocation(router2.currentRoute.value, "Current Route")
          });
        }
      });
      api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
        if (componentInstance.__vrv_devtools) {
          const info = componentInstance.__vrv_devtools;
          node.tags.push({
            label: (info.name ? `${info.name.toString()}: ` : "") + info.path,
            textColor: 0,
            tooltip: "This component is rendered by &lt;router-view&gt;",
            backgroundColor: PINK_500
          });
        }
        if (isArray2(componentInstance.__vrl_devtools)) {
          componentInstance.__devtoolsApi = api;
          componentInstance.__vrl_devtools.forEach((devtoolsData) => {
            let label = devtoolsData.route.path;
            let backgroundColor = ORANGE_400;
            let tooltip = "";
            let textColor = 0;
            if (devtoolsData.error) {
              label = devtoolsData.error;
              backgroundColor = RED_100;
              textColor = RED_700;
            } else if (devtoolsData.isExactActive) {
              backgroundColor = LIME_500;
              tooltip = "This is exactly active";
            } else if (devtoolsData.isActive) {
              backgroundColor = BLUE_600;
              tooltip = "This link is active";
            }
            node.tags.push({
              label,
              textColor,
              tooltip,
              backgroundColor
            });
          });
        }
      });
      watch2(router2.currentRoute, () => {
        refreshRoutesView();
        api.notifyComponentUpdate();
        api.sendInspectorTree(routerInspectorId);
        api.sendInspectorState(routerInspectorId);
      });
      const navigationsLayerId = "router:navigations:" + id;
      api.addTimelineLayer({
        id: navigationsLayerId,
        label: `Router${id ? " " + id : ""} Navigations`,
        color: 4237508
      });
      router2.onError((error, to) => {
        api.addTimelineEvent({
          layerId: navigationsLayerId,
          event: {
            title: "Error during Navigation",
            subtitle: to.fullPath,
            logType: "error",
            time: api.now(),
            data: { error },
            groupId: to.meta.__navigationId
          }
        });
      });
      let navigationId = 0;
      router2.beforeEach((to, from) => {
        const data = {
          guard: formatDisplay("beforeEach"),
          from: formatRouteLocation(from, "Current Location during this navigation"),
          to: formatRouteLocation(to, "Target location")
        };
        Object.defineProperty(to.meta, "__navigationId", {
          value: navigationId++
        });
        api.addTimelineEvent({
          layerId: navigationsLayerId,
          event: {
            time: api.now(),
            title: "Start of navigation",
            subtitle: to.fullPath,
            data,
            groupId: to.meta.__navigationId
          }
        });
      });
      router2.afterEach((to, from, failure) => {
        const data = {
          guard: formatDisplay("afterEach")
        };
        if (failure) {
          data.failure = {
            _custom: {
              type: Error,
              readOnly: true,
              display: failure ? failure.message : "",
              tooltip: "Navigation Failure",
              value: failure
            }
          };
          data.status = formatDisplay("\u274C");
        } else {
          data.status = formatDisplay("\u2705");
        }
        data.from = formatRouteLocation(from, "Current Location during this navigation");
        data.to = formatRouteLocation(to, "Target location");
        api.addTimelineEvent({
          layerId: navigationsLayerId,
          event: {
            title: "End of navigation",
            subtitle: to.fullPath,
            time: api.now(),
            data,
            logType: failure ? "warning" : "default",
            groupId: to.meta.__navigationId
          }
        });
      });
      const routerInspectorId = "router-inspector:" + id;
      api.addInspector({
        id: routerInspectorId,
        label: "Routes" + (id ? " " + id : ""),
        icon: "book",
        treeFilterPlaceholder: "Search routes"
      });
      function refreshRoutesView() {
        if (!activeRoutesPayload)
          return;
        const payload = activeRoutesPayload;
        let routes = matcher.getRoutes().filter((route) => !route.parent || // these routes have a parent with no component which will not appear in the view
        // therefore we still need to include them
        !route.parent.record.components);
        routes.forEach(resetMatchStateOnRouteRecord);
        if (payload.filter) {
          routes = routes.filter((route) => (
            // save matches state based on the payload
            isRouteMatching(route, payload.filter.toLowerCase())
          ));
        }
        routes.forEach((route) => markRouteRecordActive(route, router2.currentRoute.value));
        payload.rootNodes = routes.map(formatRouteRecordForInspector);
      }
      let activeRoutesPayload;
      api.on.getInspectorTree((payload) => {
        activeRoutesPayload = payload;
        if (payload.app === app2 && payload.inspectorId === routerInspectorId) {
          refreshRoutesView();
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app2 && payload.inspectorId === routerInspectorId) {
          const routes = matcher.getRoutes();
          const route = routes.find((route2) => route2.record.__vd_id === payload.nodeId);
          if (route) {
            payload.state = {
              options: formatRouteRecordMatcherForStateInspector(route)
            };
          }
        }
      });
      api.sendInspectorTree(routerInspectorId);
      api.sendInspectorState(routerInspectorId);
    });
  }
  function modifierForKey(key) {
    if (key.optional) {
      return key.repeatable ? "*" : "?";
    } else {
      return key.repeatable ? "+" : "";
    }
  }
  function formatRouteRecordMatcherForStateInspector(route) {
    const { record } = route;
    const fields = [
      { editable: false, key: "path", value: record.path }
    ];
    if (record.name != null) {
      fields.push({
        editable: false,
        key: "name",
        value: record.name
      });
    }
    fields.push({ editable: false, key: "regexp", value: route.re });
    if (route.keys.length) {
      fields.push({
        editable: false,
        key: "keys",
        value: {
          _custom: {
            type: null,
            readOnly: true,
            display: route.keys.map((key) => `${key.name}${modifierForKey(key)}`).join(" "),
            tooltip: "Param keys",
            value: route.keys
          }
        }
      });
    }
    if (record.redirect != null) {
      fields.push({
        editable: false,
        key: "redirect",
        value: record.redirect
      });
    }
    if (route.alias.length) {
      fields.push({
        editable: false,
        key: "aliases",
        value: route.alias.map((alias) => alias.record.path)
      });
    }
    if (Object.keys(route.record.meta).length) {
      fields.push({
        editable: false,
        key: "meta",
        value: route.record.meta
      });
    }
    fields.push({
      key: "score",
      editable: false,
      value: {
        _custom: {
          type: null,
          readOnly: true,
          display: route.score.map((score) => score.join(", ")).join(" | "),
          tooltip: "Score used to sort routes",
          value: route.score
        }
      }
    });
    return fields;
  }
  var PINK_500 = 15485081;
  var BLUE_600 = 2450411;
  var LIME_500 = 8702998;
  var CYAN_400 = 2282478;
  var ORANGE_400 = 16486972;
  var DARK = 6710886;
  var RED_100 = 16704226;
  var RED_700 = 12131356;
  function formatRouteRecordForInspector(route) {
    const tags = [];
    const { record } = route;
    if (record.name != null) {
      tags.push({
        label: String(record.name),
        textColor: 0,
        backgroundColor: CYAN_400
      });
    }
    if (record.aliasOf) {
      tags.push({
        label: "alias",
        textColor: 0,
        backgroundColor: ORANGE_400
      });
    }
    if (route.__vd_match) {
      tags.push({
        label: "matches",
        textColor: 0,
        backgroundColor: PINK_500
      });
    }
    if (route.__vd_exactActive) {
      tags.push({
        label: "exact",
        textColor: 0,
        backgroundColor: LIME_500
      });
    }
    if (route.__vd_active) {
      tags.push({
        label: "active",
        textColor: 0,
        backgroundColor: BLUE_600
      });
    }
    if (record.redirect) {
      tags.push({
        label: typeof record.redirect === "string" ? `redirect: ${record.redirect}` : "redirects",
        textColor: 16777215,
        backgroundColor: DARK
      });
    }
    let id = record.__vd_id;
    if (id == null) {
      id = String(routeRecordId++);
      record.__vd_id = id;
    }
    return {
      id,
      label: record.path,
      tags,
      children: route.children.map(formatRouteRecordForInspector)
    };
  }
  var routeRecordId = 0;
  var EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
  function markRouteRecordActive(route, currentRoute) {
    const isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
    route.__vd_exactActive = route.__vd_active = isExactActive;
    if (!isExactActive) {
      route.__vd_active = currentRoute.matched.some((match) => isSameRouteRecord(match, route.record));
    }
    route.children.forEach((childRoute) => markRouteRecordActive(childRoute, currentRoute));
  }
  function resetMatchStateOnRouteRecord(route) {
    route.__vd_match = false;
    route.children.forEach(resetMatchStateOnRouteRecord);
  }
  function isRouteMatching(route, filter) {
    const found = String(route.re).match(EXTRACT_REGEXP_RE);
    route.__vd_match = false;
    if (!found || found.length < 3) {
      return false;
    }
    const nonEndingRE = new RegExp(found[1].replace(/\$$/, ""), found[2]);
    if (nonEndingRE.test(filter)) {
      route.children.forEach((child) => isRouteMatching(child, filter));
      if (route.record.path !== "/" || filter === "/") {
        route.__vd_match = route.re.test(filter);
        return true;
      }
      return false;
    }
    const path = route.record.path.toLowerCase();
    const decodedPath = decode(path);
    if (!filter.startsWith("/") && (decodedPath.includes(filter) || path.includes(filter)))
      return true;
    if (decodedPath.startsWith(filter) || path.startsWith(filter))
      return true;
    if (route.record.name && String(route.record.name).includes(filter))
      return true;
    return route.children.some((child) => isRouteMatching(child, filter));
  }
  function omit(obj, keys) {
    const ret = {};
    for (const key in obj) {
      if (!keys.includes(key)) {
        ret[key] = obj[key];
      }
    }
    return ret;
  }
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    if (!routerHistory)
      throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = (
      // @ts-expect-error: intentionally avoid the type check
      applyToParams.bind(null, decode)
    );
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        if (!parent) {
          warn3(`Parent route "${String(parentOrRoute)}" not found when adding child route`, route);
        }
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      const recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      } else if (true) {
        warn3(`Cannot remove non-existent route "${String(name)}"`);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve2(rawLocation, currentLocation) {
      currentLocation = assign({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        if (true) {
          if (href2.startsWith("//"))
            warn3(`Location "${rawLocation}" resolved to "${href2}". A resolved location cannot start with multiple slashes.`);
          else if (!matchedRoute2.matched.length) {
            warn3(`No match found for location with path "${rawLocation}"`);
          }
        }
        return assign(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      if (!isRouteLocation(rawLocation)) {
        warn3(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, rawLocation);
        return resolve2({});
      }
      let matcherLocation;
      if (rawLocation.path != null) {
        if ("params" in rawLocation && !("name" in rawLocation) && // @ts-expect-error: the type is never
        Object.keys(rawLocation.params).length) {
          warn3(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
        }
        matcherLocation = assign({}, rawLocation, {
          path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign({}, rawLocation, {
          params: encodeParams(targetParams)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash = rawLocation.hash || "";
      if (hash && !hash.startsWith("#")) {
        warn3(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
      }
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
        hash: encodeHash(hash),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      if (true) {
        if (href.startsWith("//")) {
          warn3(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
        } else if (!matchedRoute.matched.length) {
          warn3(`No match found for location with path "${rawLocation.path != null ? rawLocation.path : rawLocation}"`);
        }
      }
      return assign({
        fullPath,
        // keep the hash encoded so fullPath is effectively path + encodedQuery +
        // hash
        hash,
        query: (
          // if the user is using a custom query lib like qs, we might have
          // nested objects, so we keep the query as is, meaning it can contain
          // numbers at `$route.query`, but at the point, the user will have to
          // use their own type anyway.
          // https://github.com/vuejs/router/issues/328#issuecomment-649481567
          stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
        )
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : (
            // force empty params
            { path: newTargetLocation }
          );
          newTargetLocation.params = {};
        }
        if (newTargetLocation.path == null && !("name" in newTargetLocation)) {
          warn3(`Invalid redirect found:
${JSON.stringify(newTargetLocation, null, 2)}
 when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
          throw new Error("Invalid redirect");
        }
        return assign({
          query: to.query,
          hash: to.hash,
          // avoid transferring params if the redirect has a path
          params: newTargetLocation.path != null ? {} : to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve2(to);
      const from = currentRoute.value;
      const data = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect)
        return pushWithRedirect(
          assign(locationAsObject(shouldRedirect), {
            state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
            force,
            replace: replace2
          }),
          // keep original redirectedFrom if it exists
          redirectedFrom || targetLocation
        );
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, { to: toLocation, from });
        handleScroll(
          from,
          from,
          // this is a push, the only way for it to be triggered from a
          // history.listen is with a redirect, which makes it become a push
          true,
          // This cannot be the first navigation because the initial location
          // cannot be manually navigated to
          false
        );
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? (
        // navigation redirects still mark the router as ready
        isNavigationFailure(
          error,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ) ? error : markAsReady(error)
      ) : (
        // reject any unknown error
        triggerError(error, toLocation, from)
      )).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(
            failure2,
            2
            /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
          )) {
            if (// we are redirecting to the same location we were already at
            isSameRouteLocation(stringifyQuery$1, resolve2(failure2.to), toLocation) && // and we have done it a couple of times
            redirectedFrom && // @ts-expect-error: added only in dev
            (redirectedFrom._count = redirectedFrom._count ? (
              // @ts-expect-error
              redirectedFrom._count + 1
            ) : 1) > 30) {
              warn3(`Detected a possibly infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`);
              return Promise.reject(new Error("Infinite redirect in navigation guard"));
            }
            return pushWithRedirect(
              // keep options
              assign({
                // preserve an existing replacement but allow the redirect to override it
                replace: replace2
              }, locationAsObject(failure2.to), {
                state: typeof failure2.to === "object" ? assign({}, data, failure2.to.state) : data,
                force
              }),
              // preserve the original redirectedFrom if any
              redirectedFrom || toLocation
            );
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    function runWithContext(fn) {
      const app2 = installedApps.values().next().value;
      return app2 && typeof app2.runWithContext === "function" ? app2.runWithContext(fn) : fn();
    }
    function navigate(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of enteringRecords) {
          if (record.beforeEnter) {
            if (isArray2(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter)
                guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(
        err,
        8
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data) {
      const error = checkCanceledNavigation(toLocation, from);
      if (error)
        return error;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state = !isBrowser ? {} : history.state;
      if (isPush) {
        if (replace2 || isFirstNavigation)
          routerHistory.replace(toLocation.fullPath, assign({
            scroll: isFirstNavigation && state && state.scroll
          }, data));
        else
          routerHistory.push(toLocation.fullPath, data);
      }
      currentRoute.value = toLocation;
      handleScroll(toLocation, from, isPush, isFirstNavigation);
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      if (removeHistoryListener)
        return;
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        if (!router2.listening)
          return;
        const toLocation = resolve2(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign(shouldRedirect, { replace: true, force: true }), toLocation).catch(noop);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        if (isBrowser) {
          saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
        }
        navigate(toLocation, from).catch((error) => {
          if (isNavigationFailure(
            error,
            4 | 8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          )) {
            return error;
          }
          if (isNavigationFailure(
            error,
            2
            /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
          )) {
            pushWithRedirect(
              assign(locationAsObject(error.to), {
                force: true
              }),
              toLocation
              // avoid an uncaught rejection, let push call triggerError
            ).then((failure) => {
              if (isNavigationFailure(
                failure,
                4 | 16
                /* ErrorTypes.NAVIGATION_DUPLICATED */
              ) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop);
            return Promise.reject();
          }
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          }
          return triggerError(error, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(
            // after navigation, all matched components are resolved
            toLocation,
            from,
            false
          );
          if (failure) {
            if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
            // entry while a different route is displayed
            !isNavigationFailure(
              failure,
              8
              /* ErrorTypes.NAVIGATION_CANCELLED */
            )) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(
              failure,
              4 | 16
              /* ErrorTypes.NAVIGATION_DUPLICATED */
            )) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop);
      });
    }
    let readyHandlers = useCallbacks();
    let errorListeners = useCallbacks();
    let ready;
    function triggerError(error, to, from) {
      markAsReady(error);
      const list = errorListeners.list();
      if (list.length) {
        list.forEach((handler) => handler(error, to, from));
      } else {
        if (true) {
          warn3("uncaught error during route navigation:");
        }
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
        return Promise.resolve();
      return new Promise((resolve3, reject) => {
        readyHandlers.add([resolve3, reject]);
      });
    }
    function markAsReady(err) {
      if (!ready) {
        ready = !err;
        setupListeners();
        readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
        readyHandlers.reset();
      }
      return err;
    }
    function handleScroll(to, from, isPush, isFirstNavigation) {
      const { scrollBehavior } = options;
      if (!isBrowser || !scrollBehavior)
        return Promise.resolve();
      const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
      return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
    }
    const go = (delta) => routerHistory.go(delta);
    let started;
    const installedApps = /* @__PURE__ */ new Set();
    const router2 = {
      currentRoute,
      listening: true,
      addRoute,
      removeRoute,
      clearRoutes: matcher.clearRoutes,
      hasRoute,
      getRoutes,
      resolve: resolve2,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorListeners.add,
      isReady,
      install(app2) {
        const router3 = this;
        app2.component("RouterLink", RouterLink);
        app2.component("RouterView", RouterView);
        app2.config.globalProperties.$router = router3;
        Object.defineProperty(app2.config.globalProperties, "$route", {
          enumerable: true,
          get: () => unref(currentRoute)
        });
        if (isBrowser && // used for the initial navigation client side to avoid pushing
        // multiple times when the router is used in multiple apps
        !started && currentRoute.value === START_LOCATION_NORMALIZED) {
          started = true;
          push(routerHistory.location).catch((err) => {
            if (true)
              warn3("Unexpected error when starting the router:", err);
          });
        }
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          Object.defineProperty(reactiveRoute, key, {
            get: () => currentRoute.value[key],
            enumerable: true
          });
        }
        app2.provide(routerKey, router3);
        app2.provide(routeLocationKey, shallowReactive(reactiveRoute));
        app2.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app2.unmount;
        installedApps.add(app2);
        app2.unmount = function() {
          installedApps.delete(app2);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            removeHistoryListener = null;
            currentRoute.value = START_LOCATION_NORMALIZED;
            started = false;
            ready = false;
          }
          unmountApp();
        };
        if (isBrowser) {
          addDevtools(app2, router3, matcher);
        }
      }
    };
    function runGuardQueue(guards) {
      return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
    }
    return router2;
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
      const recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
          updatingRecords.push(recordFrom);
        else
          leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }

  // node_modules/vuex/dist/vuex.esm-bundler.js
  var storeKey = "store";
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject2(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise2(val) {
    return val && typeof val.then === "function";
  }
  function assert2(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    var oldScope = store2._scope;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    var computedCache = {};
    var scope = effectScope(true);
    scope.run(function() {
      forEachValue(wrappedGetters, function(fn, key) {
        computedObj[key] = partial(fn, store2);
        computedCache[key] = computed2(function() {
          return computedObj[key]();
        });
        Object.defineProperty(store2.getters, key, {
          get: function() {
            return computedCache[key].value;
          },
          enumerable: true
          // for local getters
        });
      });
    });
    store2._state = reactive({
      data: state
    });
    store2._scope = scope;
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
    if (oldScope) {
      oldScope.stop();
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        if (true) {
          if (moduleName in parentState) {
            console.warn(
              '[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"'
            );
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise2(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      if (true) {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(
        local.state,
        // local state
        local.getters,
        // local getters
        store3.state,
        // root state
        store3.getters
        // root getters
      );
    };
  }
  function enableStrictMode(store2) {
    watch2(function() {
      return store2._state.data;
    }, function() {
      if (true) {
        assert2(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject2(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    if (true) {
      assert2(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools2(app2, store2) {
    setupDevtoolsPlugin(
      {
        id: "org.vuejs.vuex",
        app: app2,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [LABEL_VUEX_BINDINGS]
      },
      function(api) {
        api.addTimelineLayer({
          id: MUTATIONS_LAYER_ID,
          label: "Vuex Mutations",
          color: COLOR_LIME_500
        });
        api.addTimelineLayer({
          id: ACTIONS_LAYER_ID,
          label: "Vuex Actions",
          color: COLOR_LIME_500
        });
        api.addInspector({
          id: INSPECTOR_ID,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores..."
        });
        api.on.getInspectorTree(function(payload) {
          if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
            if (payload.filter) {
              var nodes = [];
              flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
              payload.rootNodes = nodes;
            } else {
              payload.rootNodes = [
                formatStoreForInspectorTree(store2._modules.root, "")
              ];
            }
          }
        });
        api.on.getInspectorState(function(payload) {
          if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            makeLocalGetters(store2, modulePath);
            payload.state = formatStoreForInspectorState(
              getStoreModule(store2._modules, modulePath),
              modulePath === "root" ? store2.getters : store2._makeLocalGettersCache,
              modulePath
            );
          }
        });
        api.on.editInspectorState(function(payload) {
          if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            var path = payload.path;
            if (modulePath !== "root") {
              path = modulePath.split("/").filter(Boolean).concat(path);
            }
            store2._withCommit(function() {
              payload.set(store2._state.data, path, payload.state.value);
            });
          }
        });
        store2.subscribe(function(mutation, state) {
          var data = {};
          if (mutation.payload) {
            data.payload = mutation.payload;
          }
          data.state = state;
          api.notifyComponentUpdate();
          api.sendInspectorTree(INSPECTOR_ID);
          api.sendInspectorState(INSPECTOR_ID);
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: mutation.type,
              data
            }
          });
        });
        store2.subscribeAction({
          before: function(action, state) {
            var data = {};
            if (action.payload) {
              data.payload = action.payload;
            }
            action._id = actionId++;
            action._time = Date.now();
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: action._time,
                title: action.type,
                groupId: action._id,
                subtitle: "start",
                data
              }
            });
          },
          after: function(action, state) {
            var data = {};
            var duration = Date.now() - action._time;
            data.duration = {
              _custom: {
                type: "duration",
                display: duration + "ms",
                tooltip: "Action duration",
                value: duration
              }
            };
            if (action.payload) {
              data.payload = action.payload;
            }
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: Date.now(),
                title: action.type,
                groupId: action._id,
                subtitle: "end",
                data
              }
            });
          }
        });
      }
    );
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      // all modules end with a `/`, we want the last segment only
      // cart/ -> cart
      // nested/cart/ -> cart
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(
        function(moduleName) {
          return formatStoreForInspectorTree(
            module._children[moduleName],
            path + moduleName + "/"
          );
        }
      )
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p2) {
          if (!target[p2]) {
            target[p2] = {
              _custom: {
                value: {},
                display: p2,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p2]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(
      function(module, moduleName, i) {
        var child = module[moduleName];
        if (!child) {
          throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
        }
        return i === names.length - 1 ? child : child._children;
      },
      path === "root" ? moduleMap : moduleMap.root._children
    );
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update2([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0) runtime = true;
    if (true) {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      if (true) {
        console.warn(
          "[vuex] trying to unregister module '" + key + "', which is not registered"
        );
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update2(path, targetModule, newModule) {
    if (true) {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          if (true) {
            console.warn(
              "[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed"
            );
          }
          return;
        }
        update2(
          path.concat(key),
          targetModule.getChild(key),
          newModule.modules[key]
        );
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type) {
        assert2(
          assertOptions.assert(value),
          makeAssertionMessage(path, key, type, value, assertOptions.expected)
        );
      });
    });
  }
  function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0) options = {};
    if (true) {
      assert2(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert2(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0) plugins = [];
    var strict = options.strict;
    if (strict === void 0) strict = false;
    var devtools2 = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._scope = null;
    this._devtools = devtools2;
    var store2 = this;
    var ref2 = this;
    var dispatch2 = ref2.dispatch;
    var commit2 = ref2.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch2.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit2.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app2, injectKey) {
    app2.provide(injectKey || storeKey, this);
    app2.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools2(app2, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    if (true) {
      assert2(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref2 = unifyObjectStyle(_type, _payload, _options);
    var type = ref2.type;
    var payload = ref2.payload;
    var options = ref2.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      if (true) {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn(
        "[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
      );
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref2 = unifyObjectStyle(_type, _payload);
    var type = ref2.type;
    var payload = ref2.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      if (true) {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      if (true) {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve2, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          if (true) {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve2(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e) {
          if (true) {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    if (true) {
      assert2(typeof getter === "function", "store.watch only accepts a function.");
    }
    return watch2(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0) options = {};
    if (typeof path === "string") {
      path = [path];
    }
    if (true) {
      assert2(Array.isArray(path), "module path must be a string or an Array.");
      assert2(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    if (true) {
      assert2(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    if (true) {
      assert2(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  var mapState = normalizeNamespace(function(namespace, states) {
    var res = {};
    if (!isValidMap(states)) {
      console.error("[vuex] mapState: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(states).forEach(function(ref2) {
      var key = ref2.key;
      var val = ref2.val;
      res[key] = function mappedState() {
        var state = this.$store.state;
        var getters = this.$store.getters;
        if (namespace) {
          var module = getModuleByNamespace(this.$store, "mapState", namespace);
          if (!module) {
            return;
          }
          state = module.context.state;
          getters = module.context.getters;
        }
        return typeof val === "function" ? val.call(this, state, getters) : state[val];
      };
      res[key].vuex = true;
    });
    return res;
  });
  var mapMutations = normalizeNamespace(function(namespace, mutations) {
    var res = {};
    if (!isValidMap(mutations)) {
      console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(mutations).forEach(function(ref2) {
      var key = ref2.key;
      var val = ref2.val;
      res[key] = function mappedMutation() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var commit2 = this.$store.commit;
        if (namespace) {
          var module = getModuleByNamespace(this.$store, "mapMutations", namespace);
          if (!module) {
            return;
          }
          commit2 = module.context.commit;
        }
        return typeof val === "function" ? val.apply(this, [commit2].concat(args)) : commit2.apply(this.$store, [val].concat(args));
      };
    });
    return res;
  });
  var mapGetters = normalizeNamespace(function(namespace, getters) {
    var res = {};
    if (!isValidMap(getters)) {
      console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(getters).forEach(function(ref2) {
      var key = ref2.key;
      var val = ref2.val;
      val = namespace + val;
      res[key] = function mappedGetter() {
        if (namespace && !getModuleByNamespace(this.$store, "mapGetters", namespace)) {
          return;
        }
        if (!(val in this.$store.getters)) {
          console.error("[vuex] unknown getter: " + val);
          return;
        }
        return this.$store.getters[val];
      };
      res[key].vuex = true;
    });
    return res;
  });
  var mapActions = normalizeNamespace(function(namespace, actions) {
    var res = {};
    if (!isValidMap(actions)) {
      console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(actions).forEach(function(ref2) {
      var key = ref2.key;
      var val = ref2.val;
      res[key] = function mappedAction() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var dispatch2 = this.$store.dispatch;
        if (namespace) {
          var module = getModuleByNamespace(this.$store, "mapActions", namespace);
          if (!module) {
            return;
          }
          dispatch2 = module.context.dispatch;
        }
        return typeof val === "function" ? val.apply(this, [dispatch2].concat(args)) : dispatch2.apply(this.$store, [val].concat(args));
      };
    });
    return res;
  });
  function normalizeMap(map2) {
    if (!isValidMap(map2)) {
      return [];
    }
    return Array.isArray(map2) ? map2.map(function(key) {
      return { key, val: key };
    }) : Object.keys(map2).map(function(key) {
      return { key, val: map2[key] };
    });
  }
  function isValidMap(map2) {
    return Array.isArray(map2) || isObject2(map2);
  }
  function normalizeNamespace(fn) {
    return function(namespace, map2) {
      if (typeof namespace !== "string") {
        map2 = namespace;
        namespace = "";
      } else if (namespace.charAt(namespace.length - 1) !== "/") {
        namespace += "/";
      }
      return fn(namespace, map2);
    };
  }
  function getModuleByNamespace(store2, helper, namespace) {
    var module = store2._modulesNamespaceMap[namespace];
    if (!module) {
      console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
    }
    return module;
  }

  // demo/public/res/js/src/views/inner/index.mjs
  var css2 = (
    /* css */
    ``
  );
  var template2 = (
    /* html */
    `
  <div class="x-inner-view">
    <div class="tabs">
      <ul>
        <li
          :class="{
            'is-active':
              $router.currentRoute._value.fullPath.includes(tab.path),
          }"
          :key="i"
          @click="$router.push(tab.path)"
          v-for="(tab, i) in tabs">
          <a>
            <b>
              {{ tab.label }}
            </b>
          </a>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
`
  );
  var InnerView = createVueComponentWithCSS({
    name: "x-inner-view",
    template: template2,
    data() {
      return {
        css: css2,
        tabs: [
          { label: "Notes", path: "/inner/notes" },
          { label: "Settings", path: "/inner/settings" }
        ]
      };
    }
  });

  // demo/public/res/js/src/views/login.mjs
  var css3 = (
    /* css */
    ``
  );
  var template3 = (
    /* html */
    `
  <div class="x-login-view">
    <form @submit.prevent="login">
      <div class="field">
        <div class="control">
          <input
            :disabled="isWorking"
            @input="message.text = ''"
            class="input"
            placeholder="Email address"
            type="email"
            v-model="email">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input
            :disabled="isWorking"
            @input="message.text = ''"
            class="input"
            placeholder="Password"
            type="password"
            v-model="password">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input
            :disabled="isWorking"
            :value="isWorking ? 'Logging in...' : 'Log in'"
            class="button is-primary"
            type="submit">
        </div>
      </div>
    </form>

    <br />

    <div
      :class="{ [message.class]: true }"
      class="is-light notification"
      v-if="message.text">
      <button @click="message.text = ''" class="delete"></button>
      {{ message.text }}
    </div>
  </div>
`
  );
  var LoginView = createVueComponentWithCSS({
    name: "x-login-view",
    template: template3,
    data() {
      return {
        css: css3,
        email: "",
        isWorking: false,
        message: {
          class: "is-warning",
          text: ""
        },
        password: ""
      };
    },
    methods: {
      async login() {
        this.email = this.email.trim();
        if (!this.email) {
          return;
        }
        if (!this.password) {
          return;
        }
        if (this.isWorking) {
          return;
        }
        this.isWorking = true;
        this.message.class = "";
        this.message.text = "";
        const response = await fetch("/authn/verify-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });
        if (response.status === 200) {
          this.$store.commit("set-email", this.email);
          this.$router.push("/inner/notes").catch(() => {
          });
        } else {
          this.message.class = "is-danger";
          this.message.text = `${response.status}: ${(await response.json()).message}`;
          this.isWorking = false;
        }
      }
    }
  });

  // demo/public/res/js/src/views/inner/notes.mjs
  var css4 = (
    /* css */
    ``
  );
  var template4 = (
    /* html */
    `
  <div class="x-notes-view">
    <div class="field">
      <div class="control">
        <textarea
          :disabled="isWorking"
          class="textarea"
          placeholder="Write a note here!"
          v-model="notes"></textarea>
      </div>
    </div>

    <div
      :class="{ [message.class]: true }"
      class="is-light notification"
      v-if="message.text">
      <button @click="message.text = ''" class="delete"></button>
      {{ message.text }}
    </div>
  </div>
`
  );
  function debounce(fn, ms) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...arguments), ms);
    };
  }
  var NotesView = createVueComponentWithCSS({
    name: "x-notes-view",
    template: template4,
    data() {
      return {
        css: css4,
        isWorking: false,
        message: {
          class: "",
          text: "",
          timeout: null
        },
        notes: "",
        shouldSave: true
      };
    },
    watch: {
      notes() {
        this.save();
      }
    },
    methods: {
      async save() {
        if (!this.shouldSave) {
          return;
        }
        if (this.isWorking) {
          return;
        }
        if (!this.notes.trim()) {
          return;
        }
        this.isWorking = true;
        this.message.class = "";
        this.message.text = "Saving...";
        clearTimeout(this.message.timeout);
        const response = await fetch("/db/write", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: this.$store.state.email,
            key: "/notes",
            value: this.notes
          })
        });
        if (response.status === 200) {
          this.message.class = "is-success";
          this.message.text = "Saved!";
          this.message.timeout = setTimeout(() => {
            this.message.text = "";
          }, 2e3);
        } else {
          this.message.class = "is-danger";
          this.message.text = `${response.status}: ${(await response.json()).message}`;
        }
        this.isWorking = false;
      }
    },
    async mounted() {
      this.save = debounce(this.save, 1e3).bind(this);
      this.shouldSave = false;
      this.isWorking = true;
      this.message.class = "";
      this.message.text = "Loading...";
      clearTimeout(this.message.timeout);
      const response = await fetch("/db/read", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.$store.state.email,
          key: "/notes"
        })
      });
      if (response.status === 200) {
        this.message.class = "";
        this.message.text = "";
        this.notes = await response.json();
      } else {
        this.message.class = "is-danger";
        this.message.text = `${response.status}: ${(await response.json()).message}`;
      }
      this.isWorking = false;
      setTimeout(() => {
        this.shouldSave = true;
      }, 1500);
    }
  });

  // demo/public/res/js/src/views/register.mjs
  var css5 = (
    /* css */
    ``
  );
  var template5 = (
    /* html */
    `
  <div class="x-register-view">
    <form @submit.prevent="register">
      <div class="field">
        <div class="control">
          <input
            :disabled="isWorking"
            class="input"
            placeholder="Email address"
            type="email"
            v-model="email">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input
            :disabled="isWorking"
            class="input"
            placeholder="Password"
            type="password"
            v-model="password1">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input
            :disabled="isWorking"
            class="input"
            placeholder="Confirm password"
            type="password"
            v-model="password2">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input
            :disabled="isWorking"
            :value="isWorking ? 'Registering...' : 'Register'"
            class="button is-primary"
            type="submit">
        </div>
      </div>
    </form>

    <br />

    <div
      :class="{ [message.class]: true }"
      class="is-light notification"
      v-if="message.text">
      <button @click="message.text = ''" class="delete"></button>
      {{ message.text }}
    </div>
  </div>
`
  );
  var RegisterView = createVueComponentWithCSS({
    name: "x-register-view",
    template: template5,
    data() {
      return {
        css: css5,
        email: "",
        isWorking: false,
        message: {
          class: "",
          text: ""
        },
        password1: "",
        password2: ""
      };
    },
    methods: {
      async register() {
        this.email = this.email.trim();
        if (!this.email || !this.password1 || !this.password2) {
          return;
        }
        if (this.password1 !== this.password2) {
          this.message.class = "is-warning";
          this.message.text = "Passwords do not match. Please try again.";
          return;
        }
        if (this.isWorking) {
          return;
        }
        this.isWorking = true;
        this.message.class = "";
        this.message.text = "";
        const response = await fetch("/authn/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: this.email,
            password: this.password1
          })
        });
        if (response.status === 200) {
          this.$store.commit("set-email", this.email);
          this.$router.push("/inner/notes").catch(() => {
          });
        } else {
          this.message.class = "is-danger";
          this.message.text = `${response.status}: ${(await response.json()).message}`;
          this.isWorking = false;
        }
      }
    }
  });

  // node_modules/@jrc03c/pause/src/index.mjs
  function pause(ms) {
    return new Promise((resolve2, reject) => {
      try {
        const start = performance.now();
        return setTimeout(() => resolve2(performance.now() - start), ms);
      } catch (e) {
        return reject(e);
      }
    });
  }

  // demo/public/res/js/src/views/inner/settings.mjs
  var css6 = (
    /* css */
    ``
  );
  var template6 = (
    /* html */
    `
  <div class="x-settings-view">
    <div class="notification">
      <b>Email:</b>
      {{ $store.state.email }}
    </div>

    <div class="notification">
      <p><b>Change password</b></p>

      <form @submit.prevent="changePassword">
        <div class="field">
          <div class="control">
            <input
              :disabled="isWorking"
              @input="message.text = ''"
              class="input"
              placeholder="Old password"
              type="password"
              v-model="passwordOld">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input
              :disabled="isWorking"
              @input="message.text = ''"
              class="input"
              placeholder="New password"
              type="password"
              v-model="passwordNew1">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input
              :disabled="isWorking"
              @input="message.text = ''"
              class="input"
              placeholder="Confirm new password"
              type="password"
              v-model="passwordNew2">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input
              :disabled="isWorking"
              :value="isChangingPassword ? 'Changing...' : 'Change password'"
              class="button is-primary"
              type="submit">
          </div>
        </div>
      </form>
    </div>

    <div class="notification">
      <button :disabled="isWorking" @click="signOut" class="button is-dark">
        {{ isSigningOut ? "One moment..." : "Sign out" }}
      </button>

      <button
        :disabled="isWorking"
        @click="deleteAccount"
        class="button is-danger"
        style="margin-left: 0.25em">
        {{ isDeletingAccount ? 'Deleting...' : 'Delete account' }}
      </button>
    </div>

    <div
      :class="{ [message.class]: true }"
      class="is-light notification"
      v-if="message.text">
      <button @click="message.text = ''" class="delete"></button>
      {{ message.text }}
    </div>
  </div>
`
  );
  var SettingsView = createVueComponentWithCSS({
    name: "x-settings-view",
    template: template6,
    data() {
      return {
        css: css6,
        isChangingPassword: false,
        isDeletingAccount: false,
        isSigningOut: false,
        isWorking: false,
        message: {
          class: "",
          text: "",
          timeout: null
        },
        passwordOld: "",
        passwordNew1: "",
        passwordNew2: ""
      };
    },
    methods: {
      async changePassword() {
        if (!this.passwordNew1 || !this.passwordNew2) {
          return;
        }
        if (this.passwordNew1 !== this.passwordNew2) {
          this.message.class = "is-warning";
          this.message.text = "New passwords do not match. Please try again.";
          return;
        }
        if (this.isWorking) {
          return;
        }
        this.isChangingPassword = true;
        this.isWorking = true;
        this.message.class = "";
        this.message.text = "";
        clearTimeout(this.message.timeout);
        const response = await fetch("/authn/change-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: this.$store.state.email,
            passwordOld: this.passwordOld,
            passwordNew: this.passwordNew1
          })
        });
        if (response.status === 200) {
          this.passwordOld = "";
          this.passwordNew1 = "";
          this.passwordNew2 = "";
          this.message.class = "is-success";
          this.message.text = "Password changed!";
          this.message.timeout = setTimeout(() => {
            this.message.text = "";
          }, 2e3);
        } else {
          this.message.class = "is-danger";
          this.message.text = `${response.status}: ${(await response.json()).message}`;
        }
        this.isChangingPassword = false;
        this.isWorking = false;
      },
      async deleteAccount() {
        this.isDeletingAccount = true;
        this.isWorking = true;
        await pause(100);
        const shouldDelete = confirm(
          "This will completely and irreversibly delete all data associated with your account! Are you sure you want to continue?"
        );
        if (!shouldDelete) {
          this.isDeletingAccount = false;
          this.isWorking = false;
          return;
        }
        const response = await fetch("/authn/delete-account", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: this.$store.state.email })
        });
        if (response.status === 200) {
          this.$store.commit("set-email", "");
          this.$router.push("/").catch(() => {
          });
        } else {
          this.message.class = "is-danger";
          this.message.text = `${response.status}: ${(await response.json()).message}`;
          this.isDeletingAccount = false;
          this.isWorking = false;
        }
      },
      async signOut() {
        this.isSigningOut = true;
        this.isWorking = true;
        const response = await fetch("/authn/sign-out", {
          method: "POST"
        });
        if (response.status === 200) {
          this.$store.commit("set-email", "");
          this.$router.push("/").catch(() => {
          });
        } else {
          this.message.class = "is-danger";
          this.message.text = `${response.status}: ${(await response.json()).message}`;
          this.isSigningOut = false;
          this.isWorking = false;
        }
      }
    }
  });

  // demo/public/res/js/src/views/start.mjs
  var css7 = (
    /* css */
    ``
  );
  var template7 = (
    /* html */
    `
  <div class="x-start-view">
    <div class="tabs">
      <ul>
        <li
          :class="{
            'is-active':
              $router.currentRoute._value.fullPath.includes(tab.path),
          }"
          :key="i"
          @click="$router.push(tab.path).catch(() => {})"
          v-for="(tab, i) in tabs">
          <a>
            <b>
              {{ tab.label }}
            </b>
          </a>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
`
  );
  var StartView = createVueComponentWithCSS({
    name: "x-start-view",
    template: template7,
    data() {
      return {
        activeTab: null,
        css: css7,
        tabs: [
          { label: "Log in", path: "/login" },
          { label: "Register", path: "/register" }
        ]
      };
    },
    mounted() {
      if (this.$router.currentRoute._value.fullPath === "/") {
        this.$router.push("/login");
      }
    }
  });

  // demo/public/res/js/src/main.mjs
  var cachedEmail = localStorage.getItem("email");
  var store = createStore({
    state() {
      return {
        email: cachedEmail || ""
      };
    },
    mutations: {
      ["set-email"](state, email) {
        state.email = email;
        localStorage.setItem("email", email);
      }
    }
  });
  var router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: "/",
        component: StartView,
        children: [
          { path: "login", component: LoginView },
          { path: "register", component: RegisterView }
        ]
      },
      {
        path: "/inner",
        component: InnerView,
        children: [
          { path: "notes", component: NotesView },
          { path: "settings", component: SettingsView }
        ]
      }
    ]
  });
  var app = createApp(AppView);
  app.use(store);
  app.use(router);
  app.mount("#app");
  !(async () => {
    const response = await fetch("/authn/is-signed-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: cachedEmail })
    });
    const isSignedIn = await response.json();
    const path = router.currentRoute._value.fullPath;
    if (isSignedIn) {
      if (path.includes("/login") || path.includes("/register")) {
        router.push("/inner/notes");
      }
    } else {
      if (!path.includes("/login") && !path.includes("/register")) {
        router.push("/login");
      }
    }
  })();
})();
/*! Bundled license information:

@vue/shared/dist/shared.esm-bundler.js:
  (**
  * @vue/shared v3.5.17
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/reactivity/dist/reactivity.esm-bundler.js:
  (**
  * @vue/reactivity v3.5.17
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/runtime-core/dist/runtime-core.esm-bundler.js:
  (**
  * @vue/runtime-core v3.5.17
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/runtime-dom/dist/runtime-dom.esm-bundler.js:
  (**
  * @vue/runtime-dom v3.5.17
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/compiler-core/dist/compiler-core.esm-bundler.js:
  (**
  * @vue/compiler-core v3.5.17
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/compiler-dom/dist/compiler-dom.esm-bundler.js:
  (**
  * @vue/compiler-dom v3.5.17
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

vue/dist/vue.esm-bundler.js:
vue/dist/vue.runtime.esm-bundler.js:
  (**
  * vue v3.5.17
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

vue-router/dist/vue-router.mjs:
  (*!
    * vue-router v4.5.1
    * (c) 2025 Eduardo San Martin Morote
    * @license MIT
    *)

vuex/dist/vuex.esm-bundler.js:
  (*!
   * vuex v4.1.0
   * (c) 2022 Evan You
   * @license MIT
   *)
*/
