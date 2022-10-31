(self.webpackChunk_AleksMaifet_Toast_Library=self.webpackChunk_AleksMaifet_Toast_Library||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/stories/Toast.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ToastTemplate:()=>ToastTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toast_stories});__webpack_require__("./node_modules/core-js/modules/es.object.values.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classCallCheck=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js")),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const theme={fontFamily:"sans-serif",fontSizeBase:"10px",size:{xs:50,small:300,md:550,large:768},spaces:[0,5,10,15,20,25,30,35,40,50,60,70,80,90,100,150],opacity:{opacity0:0,opacity50:.5,opacity100:1},textStyle:{sm:1,md:2,lg:3,xl:4,xll:5},Colors:{black:"#000000",darkGray:"#808080",white:"#ffffff",error:"#E25837",pink:"#9A40D3",yellow:"#F4E048",green:"#37E29A"},topAnimation:(0,styled_components_browser_esm.F4)(_templateObject||(_templateObject=(0,taggedTemplateLiteralLoose.Z)(["\n  from {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"]))),bottomAnimation:(0,styled_components_browser_esm.F4)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteralLoose.Z)(["\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"]))),leftAnimation:(0,styled_components_browser_esm.F4)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteralLoose.Z)(["\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"]))),rightAnimation:(0,styled_components_browser_esm.F4)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteralLoose.Z)(["\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"])))};var styles_templateObject,styles_templateObject2,_path,_path2,ErrorContainer=styled_components_browser_esm.ZP.div(styles_templateObject||(styles_templateObject=(0,taggedTemplateLiteralLoose.Z)(["\n  margin: ","px auto;\n  text-align: center;\n"])),theme.spaces[15]),ErrorText=styled_components_browser_esm.ZP.p(styles_templateObject2||(styles_templateObject2=(0,taggedTemplateLiteralLoose.Z)(["\n  color: ",";\n  font-size: ","rem;\n"])),theme.Colors.error,theme.textStyle.xll);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const iconError=function SvgIconError(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"},props),_path||(_path=react.createElement("path",{className:"iconError_svg__a",d:"M63.998 60.184L52.519 48.698a29.7 29.7 0 10-3.816 3.816l11.483 11.484zM5.46 29.731a24.271 24.271 0 1124.271 24.267A24.271 24.271 0 015.46 29.731z"})),_path2||(_path2=react.createElement("path",{className:"iconError_svg__a",d:"M45.891 39.852a2.734 2.734 0 00-2.445-1.511h-.784a18.942 18.942 0 00.59-2.734h5.661v-5.468h-5.661a18.941 18.941 0 00-.59-2.734h.784a2.734 2.734 0 002.445-1.511l2.734-5.468-4.891-2.44-1.978 3.956h-1.8a14.916 14.916 0 00-2.49-2.619 8.2 8.2 0 10-15.375 0 14.924 14.924 0 00-2.489 2.619h-1.8l-1.983-3.956-4.89 2.445 2.734 5.468a2.734 2.734 0 002.445 1.511h.784a18.942 18.942 0 00-.59 2.734H10.64v5.468h5.661a18.942 18.942 0 00.59 2.734h-.784a2.734 2.734 0 00-2.445 1.511l-2.734 5.468 4.89 2.445 1.978-3.956h1.8a12.778 12.778 0 0010.181 5.462 12.778 12.778 0 0010.177-5.468h1.8l1.978 3.956 4.89-2.445zM27.04 16.47a2.734 2.734 0 015.468 0 2.768 2.768 0 01-.025.325 11.461 11.461 0 00-5.417 0 2.766 2.766 0 01-.026-.325zm2.734 27.338c-4.522 0-8.2-4.905-8.2-10.935s3.679-10.935 8.2-10.935 8.2 4.905 8.2 10.935-3.675 10.935-8.197 10.935z"})))};var _circle,iconInfo_path,iconInfo_path2;function iconInfo_extends(){return iconInfo_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},iconInfo_extends.apply(this,arguments)}const iconInfo=function SvgIconInfo(props){return react.createElement("svg",iconInfo_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"},props),_circle||(_circle=react.createElement("circle",{className:"iconInfo_svg__a",cx:3.442,cy:3.442,r:3.442,transform:"translate(28.558 43.702)"})),iconInfo_path||(iconInfo_path=react.createElement("path",{className:"iconInfo_svg__a",d:"M32 0a32 32 0 1032 32A31.983 31.983 0 0032 0zm0 59a27 27 0 1127-27 26.985 26.985 0 01-27 27z"})),iconInfo_path2||(iconInfo_path2=react.createElement("path",{className:"iconInfo_svg__a",d:"M32 14.928a11.028 11.028 0 00-11.016 11.016 2.754 2.754 0 005.508 0A5.508 5.508 0 1132 31.452a2.754 2.754 0 00-2.754 2.754v6.885a2.754 2.754 0 005.508 0v-4.479A11.016 11.016 0 0032 14.929z"})))};var iconSuccess_path,iconSuccess_path2;function iconSuccess_extends(){return iconSuccess_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},iconSuccess_extends.apply(this,arguments)}const iconSuccess=function SvgIconSuccess(props){return react.createElement("svg",iconSuccess_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"},props),iconSuccess_path||(iconSuccess_path=react.createElement("path",{className:"iconSuccess_svg__a",d:"M32 0a32 32 0 1032 32A32.036 32.036 0 0032 0zm0 61.538A29.538 29.538 0 1161.538 32 29.573 29.573 0 0132 61.538z"})),iconSuccess_path2||(iconSuccess_path2=react.createElement("path",{className:"iconSuccess_svg__a",d:"M49.5 20.961l-21.953 17.29-13.227-7.407a1.873 1.873 0 00-2.007.156.817.817 0 00.223 1.406l14.286 8a1.846 1.846 0 00.893.219 1.748 1.748 0 001.069-.336l22.857-18a.809.809 0 00-.119-1.411 1.882 1.882 0 00-2.022.083z"})))};var iconWarning_path,iconWarning_path2,_path3;function iconWarning_extends(){return iconWarning_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},iconWarning_extends.apply(this,arguments)}const iconWarning=function SvgIconWarning(props){return react.createElement("svg",iconWarning_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"},props),iconWarning_path||(iconWarning_path=react.createElement("path",{d:"M32.003 44.974a3.6 3.6 0 000 7.2 3.6 3.6 0 000-7.2z"})),iconWarning_path2||(iconWarning_path2=react.createElement("path",{d:"M62.442 57.725a13.288 13.288 0 00.026-12.434l-20.6-39.03a10.891 10.891 0 00-19.708-.014L1.529 45.318a13.4 13.4 0 00.039 12.506A11.117 11.117 0 0011.4 64h41.149a11.2 11.2 0 009.893-6.275zm-4.473-2.821a6.142 6.142 0 01-5.433 3.44H11.383a6.054 6.054 0 01-5.368-3.368A7.366 7.366 0 016 48.111L26.631 9.052a5.944 5.944 0 0110.762.014l20.616 39.06a7.268 7.268 0 01-.04 6.778z"})),_path3||(_path3=react.createElement("path",{d:"M31.108 19.717a3.913 3.913 0 00-2.778 3.929c.086 1.137.158 2.288.245 3.425.245 4.332.489 8.577.734 12.909A2.636 2.636 0 0032 42.513a2.691 2.691 0 002.691-2.619c0-.892 0-1.713.086-2.619.158-2.778.331-5.555.489-8.333.086-1.8.245-3.6.331-5.4a4.444 4.444 0 00-.331-1.8 3.607 3.607 0 00-4.158-2.025z"})))};var DEFAULT_TOAST_POSITION={TOP_RIGHT:"Top-right",TOP_LEFT:"Top-left",BOTTOM_RIGHT:"Bottom-right",BOTTOM_LEFT:"Bottom-left"},DEFAULT_TOAST_ANIMATION={TOP:"Top",BOTTOM:"Bottom",RIGHT:"Right",LEFT:"Left"},DEFAULT_TOAST_TYPE={SUCCESS:"Success",WARNING:"Warning",INFO:"Info",ERROR:"Error"},SUCCESS=DEFAULT_TOAST_TYPE.SUCCESS,ERROR=DEFAULT_TOAST_TYPE.ERROR,INFO=DEFAULT_TOAST_TYPE.INFO,WARNING=DEFAULT_TOAST_TYPE.WARNING,_theme$Colors=theme.Colors,white=_theme$Colors.white,DEFAULT_TOASTS={Success:{defaultLabel:SUCCESS,defaultColor:white,defaultBackgroundColor:_theme$Colors.green,icon:iconSuccess},Warning:{defaultLabel:WARNING,defaultColor:_theme$Colors.black,defaultBackgroundColor:_theme$Colors.yellow,icon:iconWarning},Info:{defaultLabel:INFO,defaultColor:white,defaultBackgroundColor:_theme$Colors.pink,icon:iconInfo},Error:{defaultLabel:ERROR,defaultColor:white,defaultBackgroundColor:_theme$Colors.error,icon:iconError}},DEFAULT_SPACING={top:theme.spaces[2],bottom:theme.spaces[2],left:theme.spaces[2],right:theme.spaces[2]},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=(0,getPrototypeOf.Z)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,getPrototypeOf.Z)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,possibleConstructorReturn.Z)(this,result)}}var ErrorBoundary=function(_React$Component){(0,inherits.Z)(ErrorBoundary,_React$Component);var _super=_createSuper(ErrorBoundary);function ErrorBoundary(props){var _this;return(0,classCallCheck.Z)(this,ErrorBoundary),(_this=_super.call(this,props)).state={hasError:!1},_this}return(0,createClass.Z)(ErrorBoundary,[{key:"render",value:function render(){var children=this.props.children;return this.state.hasError?(0,jsx_runtime.jsx)(ErrorContainer,{children:(0,jsx_runtime.jsx)(ErrorText,{children:"Something wrong!"})}):children}}],[{key:"getDerivedStateFromError",value:function getDerivedStateFromError(){return{hasError:!0}}}]),ErrorBoundary}(react.Component);ErrorBoundary.propTypes={children:prop_types_default().node.isRequired},ErrorBoundary.__docgenInfo={description:"",methods:[],displayName:"ErrorBoundary",props:{children:{description:"",type:{name:"node"},required:!0}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\ErrorBoundary\\index.jsx"]={name:"ErrorBoundary",docgenInfo:ErrorBoundary.__docgenInfo,path:"src\\components\\ErrorBoundary\\index.jsx"});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),types={children:prop_types_default().node.isRequired}.isRequired,Portal=function Portal(_ref){var children=_ref.children,_useState=(0,react.useState)((function(){return function createPortal(){var portal=document.createElement("div");return portal.setAttribute("id","portal"),portal}()})),_useState2=(0,slicedToArray.Z)(_useState,2),container=_useState2[0];_useState2[1];return(0,react.useEffect)((function(){return document.body.appendChild(container),function(){document.body.removeChild(container)}}),[]),react_dom.createPortal(children,container)};const components_Portal=(0,react.memo)(Portal);Portal.propTypes=types;var types_types={children:prop_types_default().node.isRequired}.isRequired,TOP=DEFAULT_TOAST_ANIMATION.TOP,TOP_LEFT=DEFAULT_TOAST_POSITION.TOP_LEFT,handlePropertiesToast_SUCCESS=DEFAULT_TOAST_TYPE.SUCCESS,toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),ToastManager=(__webpack_require__("./node_modules/core-js/modules/es.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),function(){function ToastManager(){if((0,classCallCheck.Z)(this,ToastManager),ToastManager.singleton)return ToastManager.singleton;ToastManager.singleton=this,this.toastList=[],this.toast=null,this.subscriber=new Map,this.timerId=null}return(0,createClass.Z)(ToastManager,[{key:"createToast",value:function createToast(properties){var id=(new Date).getTime().toString();this.toast=Object.assign({id},properties)}},{key:"addToast",value:function addToast(){if(!(this.toastList.length>2)){this.toastList=[].concat((0,toConsumableArray.Z)(this.toastList),[this.toast]);var _this$toast=this.toast,currentAutoCloseTime=_this$toast.currentAutoCloseTime;_this$toast.autoClose&&this.autoRemoveToast(currentAutoCloseTime),this.worker()}}},{key:"removeToast",value:function removeToast(toastId){this.toastList=toastId?this.toastList.filter((function(_ref){return _ref.id!==toastId})):this.toastList.slice(1),this.worker()}},{key:"autoRemoveToast",value:function autoRemoveToast(delay){var _this=this;clearInterval(this.timerId),this.timerId=setInterval((function(){return _this.removeToast()}),delay)}},{key:"worker",value:function worker(){var _this2=this;this.subscriber.forEach((function(callback){callback(_this2.toastList)}))}},{key:"watcher",value:function watcher(action,callback){this.subscriber.has(action)||this.subscriber.set(action,callback)}}]),ToastManager}());ToastManager.singleton=void 0;var toastManager=new ToastManager,handleAnimationToast_topAnimation=theme.topAnimation,handleAnimationToast_bottomAnimation=theme.bottomAnimation,handleAnimationToast_leftAnimation=theme.leftAnimation,handleAnimationToast_rightAnimation=theme.rightAnimation,BOTTOM=DEFAULT_TOAST_ANIMATION.BOTTOM,LEFT=DEFAULT_TOAST_ANIMATION.LEFT,RIGHT=DEFAULT_TOAST_ANIMATION.RIGHT,TOP_RIGHT=DEFAULT_TOAST_POSITION.TOP_RIGHT,BOTTOM_LEFT=DEFAULT_TOAST_POSITION.BOTTOM_LEFT,BOTTOM_RIGHT=DEFAULT_TOAST_POSITION.BOTTOM_RIGHT,handleToastService=function handleToastService(options){toastManager.createToast(function handlePropertiesToast(options){var _options$type=options.type,type=void 0===_options$type?handlePropertiesToast_SUCCESS:_options$type,label=options.label,color=options.color,backgroundColor=options.backgroundColor,_options$animation=options.animation,animation=void 0===_options$animation?TOP:_options$animation,_options$position=options.position,position=void 0===_options$position?TOP_LEFT:_options$position,content=options.content,autoClose=options.autoClose,_options$autoCloseTim=options.autoCloseTime,autoCloseTime=void 0===_options$autoCloseTim?2:_options$autoCloseTim,spacing=options.spacing,_DEFAULT_TOASTS$type=DEFAULT_TOASTS[type],defaultLabel=_DEFAULT_TOASTS$type.defaultLabel,defaultColor=_DEFAULT_TOASTS$type.defaultColor,defaultBackgroundColor=_DEFAULT_TOASTS$type.defaultBackgroundColor;return{icon:_DEFAULT_TOASTS$type.icon,currentTitle:label||defaultLabel,currentColor:color||defaultColor,currentBackgroundColor:backgroundColor||defaultBackgroundColor,animation,position,content,autoClose,currentAutoCloseTime:1e3*autoCloseTime,currentSpacing:spacing||DEFAULT_SPACING}}(options)),toastManager.addToast()},ToastContext=(0,react.createContext)(null),Provider=function Provider(_ref){var children=_ref.children,_useState=(0,react.useState)([]),_useState2=(0,slicedToArray.Z)(_useState,2),toastList=_useState2[0],setToastList=_useState2[1],handleToastList=function handleToastList(toastList){setToastList(toastList)},handleRemoveToast=function handleRemoveToast(id){toastManager.removeToast(id)};(0,react.useEffect)((function(){return toastManager.watcher("Set callback",handleToastList),function(){toastManager.toastList.length||clearInterval(toastManager.timerId)}}));var value=(0,react.useMemo)((function(){return{toastList,handleRemoveToast}}),[toastList]);return(0,jsx_runtime.jsx)(components_Portal,{children:(0,jsx_runtime.jsx)(ToastContext.Provider,{value,children})})};Provider.displayName="Provider",Provider.__docgenInfo={description:"",methods:[],displayName:"Provider",composes:["@/components/Provider/types"]};const components_Provider=(0,react.memo)(Provider);Provider.propTypes=types_types,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Provider\\index.jsx"]={name:"Provider",docgenInfo:Provider.__docgenInfo,path:"src\\components\\Provider\\index.jsx"});var iconClose_path;__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js");function iconClose_extends(){return iconClose_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},iconClose_extends.apply(this,arguments)}const iconClose=function SvgIconClose(props){return react.createElement("svg",iconClose_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},props),iconClose_path||(iconClose_path=react.createElement("path",{className:"iconClose_svg__a",d:"M18.83 15.999L31.414 3.416a2.001 2.001 0 00-2.83-2.83L16 13.171 3.416.586a2.001 2.001 0 00-2.83 2.83l12.585 12.583L.586 28.584a2 2 0 102.83 2.829L16 18.829l12.584 12.585a2.001 2.001 0 002.83-2.83z"})))};var Icon_types_types={icon:prop_types_default().func.isRequired}.isRequired,Icon=function Icon(_ref){var Icon=_ref.icon;return(0,jsx_runtime.jsx)(Icon,{})};Icon.displayName="Icon",Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",composes:["@/components/Icon/types"]};const components_Icon=(0,react.memo)(Icon);Icon.propTypes=Icon_types_types,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Icon\\index.jsx"]={name:"Icon",docgenInfo:Icon.__docgenInfo,path:"src\\components\\Icon\\index.jsx"});__webpack_require__("./node_modules/core-js/modules/es.string.small.js");var Toast_styles_templateObject,Toast_styles_templateObject2,styles_templateObject3,styles_templateObject4,_templateObject5,_templateObject6,_templateObject7,ToastWrapper=styled_components_browser_esm.ZP.section(Toast_styles_templateObject||(Toast_styles_templateObject=(0,taggedTemplateLiteralLoose.Z)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: ","px;\n  height: ","px;\n  padding: ","px;\n  border-radius: ","px;\n  background-color: ",";\n  animation: "," 1s;\n\n  svg,\n  h2,\n  p {\n    fill: ",";\n    color: ",";\n  }\n"])),theme.size.small,theme.spaces[11],theme.spaces[3],theme.spaces[2],(function(_ref){return _ref.backgroundColor}),(function(_ref2){return function handleAnimationToast(position){switch(position){case BOTTOM:return handleAnimationToast_bottomAnimation;case LEFT:return handleAnimationToast_leftAnimation;case RIGHT:return handleAnimationToast_rightAnimation;default:return handleAnimationToast_topAnimation}}(_ref2.animation)}),(function(_ref3){return _ref3.color}),(function(_ref4){return _ref4.color})),ToastIconWrapper=styled_components_browser_esm.ZP.div(Toast_styles_templateObject2||(Toast_styles_templateObject2=(0,taggedTemplateLiteralLoose.Z)(["\n  height: ","px;\n  width: ","px;\n"])),theme.spaces[8],theme.spaces[8]),ToastButtonContainer=styled_components_browser_esm.ZP.div(styles_templateObject3||(styles_templateObject3=(0,taggedTemplateLiteralLoose.Z)(["\n  width: ","px;\n  height: ","px;\n"])),theme.spaces[3],theme.spaces[8]),ToastButtonWrapper=styled_components_browser_esm.ZP.div(styles_templateObject4||(styles_templateObject4=(0,taggedTemplateLiteralLoose.Z)(["\n  height: ","px;\n  cursor: pointer;\n"])),theme.spaces[3]),ToastInfo=styled_components_browser_esm.ZP.div(_templateObject5||(_templateObject5=(0,taggedTemplateLiteralLoose.Z)(["\n  width: ","%;\n  text-transform: uppercase;\n  text-align: center;\n"])),theme.spaces[10]),ToastTitle=styled_components_browser_esm.ZP.h2(_templateObject6||(_templateObject6=(0,taggedTemplateLiteralLoose.Z)(["\n  font-size: ","rem;\n  overflow: hidden;\n"])),theme.textStyle.sm+.5),ToastDescription=styled_components_browser_esm.ZP.p(_templateObject7||(_templateObject7=(0,taggedTemplateLiteralLoose.Z)(["\n  font-size: ","rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),theme.textStyle.sm),Toast_types_types={value:prop_types_default().objectOf(prop_types_default().shape({icon:prop_types_default().func.isRequired,currentTitle:prop_types_default().string.isRequired,toastContent:prop_types_default().string.isRequired,currentColor:prop_types_default().string.isRequired,currentBackgroundColor:prop_types_default().string.isRequired,animation:prop_types_default().string.isRequired})),onCloseToast:prop_types_default().func.isRequired}.isRequired,Toast=function Toast(_ref){var _ref$value=_ref.value,currentTitle=_ref$value.currentTitle,content=_ref$value.content,currentColor=_ref$value.currentColor,currentBackgroundColor=_ref$value.currentBackgroundColor,animation=_ref$value.animation,icon=_ref$value.icon,id=_ref$value.id,onCloseToast=_ref.onCloseToast,handleDrag=function handleDrag(e){var startPosition,pageX=e.pageX;e.nativeEvent.type.includes("start")&&(startPosition=pageX),pageX!==startPosition&&onCloseToast(id)};return(0,jsx_runtime.jsxs)(ToastWrapper,{backgroundColor:currentBackgroundColor,color:currentColor,animation,draggable:!0,onDragStart:handleDrag,onDragEnd:handleDrag,children:[(0,jsx_runtime.jsx)(ToastIconWrapper,{children:(0,jsx_runtime.jsx)(components_Icon,{icon})}),(0,jsx_runtime.jsxs)(ToastInfo,{children:[(0,jsx_runtime.jsx)(ToastTitle,{children:currentTitle}),content&&(0,jsx_runtime.jsx)(ToastDescription,{children:content})]}),(0,jsx_runtime.jsx)(ToastButtonContainer,{children:(0,jsx_runtime.jsx)(ToastButtonWrapper,{children:(0,jsx_runtime.jsx)(iconClose,{onClick:function onClickCloseToast(){onCloseToast(id)}})})})]})};Toast.displayName="Toast",Toast.propTypes=Toast_types_types,Toast.__docgenInfo={description:"",methods:[],displayName:"Toast",composes:["@/components/Toast/types"]};const components_Toast=(0,react.memo)(Toast);var ToastContainer_styles_templateObject;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Toast\\index.jsx"]={name:"Toast",docgenInfo:Toast.__docgenInfo,path:"src\\components\\Toast\\index.jsx"});var globalStyles_templateObject,WrapperToast=styled_components_browser_esm.ZP.main(ToastContainer_styles_templateObject||(ToastContainer_styles_templateObject=(0,taggedTemplateLiteralLoose.Z)(["\n  position: fixed;\n  ","\n"])),(function(_ref){return function handlePositionToast(_ref){var position=_ref.position,_ref$currentSpacing=_ref.currentSpacing,top=_ref$currentSpacing.top,bottom=_ref$currentSpacing.bottom,left=_ref$currentSpacing.left,right=_ref$currentSpacing.right;switch(position){case TOP_RIGHT:return{top:top+"%",right:right+"%"};case BOTTOM_LEFT:return{bottom:bottom+"%",left:left+"%"};case BOTTOM_RIGHT:return{right:right+"%",bottom:bottom+"%"};default:return{top:top+"%",left:left+"%"}}}(_ref.position)}));const globalStyles=(0,styled_components_browser_esm.vJ)(globalStyles_templateObject||(globalStyles_templateObject=(0,taggedTemplateLiteralLoose.Z)(["\n  #portal {\n    font-size: ",";\n    font-family: ",";\n\n    & * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n    }\n  }\n"])),theme.fontSizeBase,theme.fontFamily);var _excluded=["id","position","currentSpacing"],ToastContainer=function ToastContainer(){return(0,jsx_runtime.jsxs)(ErrorBoundary,{children:[(0,jsx_runtime.jsx)(globalStyles,{}),(0,jsx_runtime.jsx)(components_Provider,{children:(0,jsx_runtime.jsx)(ToastContext.Consumer,{children:function children(_ref){var toastList=_ref.toastList,handleRemoveToast=_ref.handleRemoveToast;return toastList.map((function(_ref2){var id=_ref2.id,position=_ref2.position,currentSpacing=_ref2.currentSpacing,info=(0,objectWithoutProperties.Z)(_ref2,_excluded);return(0,jsx_runtime.jsx)(WrapperToast,{position:{position,currentSpacing},children:(0,jsx_runtime.jsx)(components_Toast,{value:Object.assign({id},info),onCloseToast:handleRemoveToast})},id)}))}})})]})};ToastContainer.displayName="ToastContainer",ToastContainer.__docgenInfo={description:"",methods:[],displayName:"ToastContainer"};const components_ToastContainer=(0,react.memo)(ToastContainer);var ToastExample_styles_templateObject,ToastExample_styles_templateObject2;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\ToastContainer\\index.jsx"]={name:"ToastContainer",docgenInfo:ToastContainer.__docgenInfo,path:"src\\components\\ToastContainer\\index.jsx"});var ExampleWrapperButton=styled_components_browser_esm.ZP.div(ToastExample_styles_templateObject||(ToastExample_styles_templateObject=(0,taggedTemplateLiteralLoose.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),ExampleButton=styled_components_browser_esm.ZP.button(ToastExample_styles_templateObject2||(ToastExample_styles_templateObject2=(0,taggedTemplateLiteralLoose.Z)(["\n  width: ","px;\n  height: ","px;\n  border-radius: ","%;\n  border: none;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n"])),theme.spaces[9],theme.spaces[9],theme.size.xs,theme.Colors.darkGray,theme.Colors.white),ToastExample=function ToastExample(options){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components_ToastContainer,{}),(0,jsx_runtime.jsx)(ExampleWrapperButton,{children:(0,jsx_runtime.jsx)(ExampleButton,{onClick:function onClick(){handleToastService(options)},children:"Show Toast"})})]})};ToastExample.__docgenInfo={description:"",methods:[],displayName:"ToastExample"};const components_ToastExample=ToastExample;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\ToastExample\\index.jsx"]={name:"ToastExample",docgenInfo:ToastExample.__docgenInfo,path:"src\\components\\ToastExample\\index.jsx"});const Toast_stories={title:"Toast",component:components_ToastExample,argTypes:{type:{control:{type:"inline-radio",options:Object.values(DEFAULT_TOAST_TYPE)}},color:{control:{type:"color"}},backgroundColor:{control:{type:"color"}},label:{control:{type:"text"}},content:{control:{type:"text"}},animation:{control:{type:"inline-radio",options:Object.values(DEFAULT_TOAST_ANIMATION)}},position:{control:{type:"inline-radio",options:Object.values(DEFAULT_TOAST_POSITION)}},autoClose:{control:{type:"boolean"}},autoCloseTime:{control:{type:"number"}}}};var Template=function Template(arg){return(0,jsx_runtime.jsx)(components_ToastExample,Object.assign({},arg))};Template.displayName="Template";var ToastTemplate=Template.bind({});ToastTemplate.args={autoCloseTime:2,spacing:DEFAULT_SPACING},ToastTemplate.parameters=Object.assign({storySource:{source:"arg => <ToastExample {...arg} />"}},ToastTemplate.parameters);var __namedExportsOrder=["ToastTemplate"]},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/Toast.stories.jsx":"./src/stories/Toast.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[559],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);