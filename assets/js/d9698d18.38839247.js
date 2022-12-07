"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7857],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),i=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},m=function(e){var a=i(e.components);return r.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=i(t),k=n,N=d["".concat(l,".").concat(k)]||d[k]||c[k]||s;return t?r.createElement(N,p(p({ref:a},m),{},{components:t})):r.createElement(N,p({ref:a},m))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,p=new Array(s);p[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var i=2;i<s;i++)p[i]=t[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9871:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=t(7462),n=(t(7294),t(3905));const s={id:"runtime-shader",title:"Runtime Shader",sidebar_label:"Runtime Shader",slug:"/image-filters/runtime-shader"},p=void 0,o={unversionedId:"image-filters/runtime-shader",id:"image-filters/runtime-shader",title:"Runtime Shader",description:"The RuntimeShader image filter allows you to write your own Skia Shader as an image filter.",source:"@site/docs/image-filters/runtime-shader.md",sourceDirName:"image-filters",slug:"/image-filters/runtime-shader",permalink:"/react-native-skia/docs/image-filters/runtime-shader",draft:!1,editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/image-filters/runtime-shader.md",tags:[],version:"current",frontMatter:{id:"runtime-shader",title:"Runtime Shader",sidebar_label:"Runtime Shader",slug:"/image-filters/runtime-shader"},sidebar:"tutorialSidebar",previous:{title:"Morphology",permalink:"/react-native-skia/docs/image-filters/morphology"},next:{title:"Backdrop Filters",permalink:"/react-native-skia/docs/backdrops-filters"}},l={},i=[{value:"Example",id:"example",level:2}],m={toc:i};function c(e){let{components:a,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"RuntimeShader")," image filter allows you to write your own ",(0,n.kt)("a",{parentName:"p",href:"/docs/shaders/overview"},"Skia Shader")," as an image filter.\nThis component receive the currently filtered image as a shader uniform (or the implicit source image if no children are provided). "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"source"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"SkRuntimeEffect")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Shader to use as an image filter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"children?"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ImageFilter")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional image filter to be applied first")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"The example below generates a circle with a green mint color.\nThe circle is first draw with the lightblue color ",(0,n.kt)("inlineCode",{parentName:"p"},"#add8e6")," and the runtime shader switches the blue and green channel: we get mint green ",(0,n.kt)("inlineCode",{parentName:"p"},"#ade6d8"),"."),(0,n.kt)("div",{className:"shiki-twoslash-fragment"},(0,n.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,n.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onSize" | "root" | "onTouch" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | ... 60 more ... | "accessibilityIgnoresInvertColors"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,n.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,n.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Text: ({ x, y, ...props }: SkiaDefaultProps<TextProps, "x" | "y">) => JSX.Element\nimport Text'},"Text")),(0,n.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const RuntimeShader: (props: SkiaProps<RuntimeShaderImageFilterProps>) => JSX.Element\nimport RuntimeShader"},"RuntimeShader")),(0,n.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Skia: SkSkiaApi\nimport Skia"},"Skia")),(0,n.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,n.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => JSX.Element\nimport Circle"},"Circle"),"} "),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const source: SkRuntimeEffect"},"source")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Skia: SkSkiaApi\nimport Skia"},"Skia")),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) Skia.RuntimeEffect: RuntimeEffectFactory"},"RuntimeEffect")),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) RuntimeEffectFactory.Make: (sksl: string) => SkRuntimeEffect | null"},"Make")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},"`")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},"uniform shader image;")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},"half4 main(float2 xy) {")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},"  return image.eval(xy).rbga;")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},"}")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},"`"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")"),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"!"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const RuntimeShaderDemo: () => JSX.Element"},"RuntimeShaderDemo")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"128"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onSize" | "root" | "onTouch" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | ... 60 more ... | "accessibilityIgnoresInvertColors"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) style?: StyleProp<ViewStyle>"},"style")),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," }}>")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"         <"),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const RuntimeShader: (props: SkiaProps<RuntimeShaderImageFilterProps>) => JSX.Element\nimport RuntimeShader"},"RuntimeShader")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) source: AnimatedProp<SkRuntimeEffect, any>"},"source")),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,n.kt)("data-lsp",{parentName:"span",lsp:"const source: SkRuntimeEffect"},"source"),"} />")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"         <"),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => JSX.Element\nimport Circle"},"Circle")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) cx: AnimatedProp<number, any>"},"cx")),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,n.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r"),"} "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) cy: AnimatedProp<number, any>"},"cy")),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,n.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r"),"} "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) r: number"},"r")),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,n.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r"),"} "),(0,n.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) color: string"},"color")),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"lightblue"'),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      </"),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onSize" | "root" | "onTouch" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | ... 60 more ... | "accessibilityIgnoresInvertColors"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,n.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onSize" | "root" | "onTouch" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | ... 60 more ... | "accessibilityIgnoresInvertColors"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Text: ({ x, y, ...props }: SkiaDefaultProps<TextProps, "x" | "y">) => JSX.Element\nimport Text'},"Text")),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const RuntimeShader: (props: SkiaProps<RuntimeShaderImageFilterProps>) => JSX.Element\nimport RuntimeShader"},"RuntimeShader")),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Skia: SkSkiaApi\nimport Skia"},"Skia")),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => JSX.Element\nimport Circle"},"Circle")),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const source: SkRuntimeEffect"},"source")),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Skia: SkSkiaApi\nimport Skia"},"Skia")),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) Skia.RuntimeEffect: RuntimeEffectFactory"},"RuntimeEffect")),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) RuntimeEffectFactory.Make: (sksl: string) => SkRuntimeEffect | null"},"Make")),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"`")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"uniform shader image;")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"half4 main(float2 xy) {")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"  return image.eval(xy).rbga;")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"}")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"`"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"!;")),(0,n.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"export"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const RuntimeShaderDemo: () => JSX.Element"},"RuntimeShaderDemo")),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r")),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"128"),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onSize" | "root" | "onTouch" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | ... 60 more ... | "accessibilityIgnoresInvertColors"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) style?: StyleProp<ViewStyle>"},"style")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"         "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const RuntimeShader: (props: SkiaProps<RuntimeShaderImageFilterProps>) => JSX.Element\nimport RuntimeShader"},"RuntimeShader")),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) source: AnimatedProp<SkRuntimeEffect, any>"},"source")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const source: SkRuntimeEffect"},"source")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"         "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: (props: SkiaProps<CircleProps>) => JSX.Element\nimport Circle"},"Circle")),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) cx: AnimatedProp<number, any>"},"cx")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) cy: AnimatedProp<number, any>"},"cy")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) r: number"},"r")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"const r: 128"},"r")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(property) color: string"},"color")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"lightblue"),(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Group: ({ layer, ...props }: SkiaProps<PublicGroupProps>) => JSX.Element\nimport Group"},"Group")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,n.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,n.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onSize" | "root" | "onTouch" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | ... 60 more ... | "accessibilityIgnoresInvertColors"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,n.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,n.kt)("img",{alt:"Runtime Shader",src:t(32).Z,width:"256",height:"256"}))}c.isMDXComponent=!0},32:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/runtime-shader-61c54f569a910a924e61ff7d993f89b5.png"}}]);