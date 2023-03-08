(self.webpackChunkexample_library=self.webpackChunkexample_library||[]).push([[179],{8023:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{register:()=>register});var react=__webpack_require__(67294),index_681e4b07=__webpack_require__(94601),esm=__webpack_require__(32605),types=__webpack_require__(96899);const paramId="liveCodeEditor",addonId="liveCodeEditorAddon",panelId="liveCodeEditorPanel";function newStore(initialValue){const callbacks=new Set;let value=initialValue;return{onChange:callback=>(callbacks.add(callback),()=>{callbacks.delete(callback)}),getValue:()=>value,setValue(newValue){value=newValue,callbacks.forEach((callback=>{try{callback(newValue)}catch(error){console.error(error)}}))}}}function getMonacoOverflowContainer(id){let container=document.getElementById(id);return container||(container=document.createElement("div"),container.id=id,container.classList.add("monaco-editor"),function fixHoverTooltipNotShowing(overflowContainer){new MutationObserver((mutations=>{var _a;for(const mutation of mutations){const target=mutation.target;if(target.nodeType===Node.ELEMENT_NODE&&"true"===target.getAttribute("monaco-visible-content-widget")){const hoveredEls=document.querySelectorAll(":hover"),hoveredRect=null===(_a=hoveredEls[hoveredEls.length-1])||void 0===_a?void 0:_a.getBoundingClientRect(),previousRect=target.getBoundingClientRect();target.style.top="-9999px",requestAnimationFrame((()=>{const newRect=target.getBoundingClientRect();if(hoveredRect)hoveredRect.top<newRect.height?target.style.top=`${hoveredRect.bottom+1}px`:target.style.top=hoveredRect.top-newRect.height-1+"px";else{const heightDif=newRect.height-previousRect.height;target.style.top=previousRect.top-heightDif+"px"}}))}}})).observe(overflowContainer,{subtree:!0,attributes:!0,attributeFilter:["monaco-visible-content-widget"]})}(container),document.body.appendChild(container),container)}const monacoP=function loadMonacoEditor(){return function injectScript(url){return new Promise(((resolve,reject)=>{const script=document.createElement("script");script.src=url,script.defer=!0,script.onload=resolve,script.onerror=reject,document.head.append(script)}))}("vs/loader.js").then((()=>new Promise((resolve=>{window.require(["vs/editor/editor.main"],resolve)}))))}().then((monaco=>{monaco.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:1}),monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1});let fileCount=1;return[monaco,(code,container)=>{const uri=monaco.Uri.parse(`file:///index${fileCount++}.tsx`);return monaco.editor.create(container,{automaticLayout:!0,fixedOverflowWidgets:!0,model:monaco.editor.createModel(code,"typescript",uri),overflowWidgetsDomNode:getMonacoOverflowContainer("monacoOverflowContainer"),tabSize:2})}]}));function Editor(props){const editorContainerRef=react.useRef(null),editorRef=react.useRef(),propsRef=react.useRef(props),[monaco,createEditor]=function useResolved(promise){const[resolvedValue,setResolvedValue]=react.useState();return react.useEffect((()=>{let didCleanup=!1;return promise.then((value=>{didCleanup||setResolvedValue((()=>value))})),()=>{didCleanup=!0}}),[]),resolvedValue}(monacoP)||[];return react.useLayoutEffect((()=>{propsRef.current=props})),react.useEffect((()=>{if(createEditor){const editor=editorRef.current=createEditor(propsRef.current.value,editorContainerRef.current);return editor.onDidChangeModelContent((()=>{propsRef.current.onInput(editor.getValue())})),()=>{editor.dispose(),editorRef.current=void 0}}}),[createEditor]),react.useEffect((()=>{monaco&&editorRef.current&&props.onCreateEditor&&props.onCreateEditor(editorRef.current,monaco)}),[monaco,props.onCreateEditor]),react.useEffect((()=>{editorRef.current&&editorRef.current.getValue()!==props.value&&editorRef.current.setValue(props.value)}),[props.value]),react.useEffect((()=>{if(!props.parentSize)return;const parent=editorContainerRef.current.parentElement;parent&&(parent.style.height=props.parentSize)}),[]),react.createElement("div",{ref:editorContainerRef,style:{height:"100%"}})}const store=function createStore(global){return global._addon_code_editor_store||(global._addon_code_editor_store=function newKeyStore(){const stores={};return{onChange:(key,callback)=>(stores[key]||(stores[key]=newStore())).onChange(callback),getValue:key=>(stores[key]||(stores[key]=newStore())).getValue(),setValue:(key,newValue)=>(stores[key]||(stores[key]=newStore())).setValue(newValue)}}())}(window);function register(){esm.KP.register(addonId,(api=>{esm.KP.addPanel(panelId,{title:"Live code editor",type:types.V.PANEL,paramKey:paramId,render({active,key}){var _a,_b,_c;const storyId=(null===(_c=null===(_b=null===(_a=api.getCurrentStoryData())||void 0===_a?void 0:_a.parameters)||void 0===_b?void 0:_b.liveCodeEditor)||void 0===_c?void 0:_c.id)||"";if(!active||!storyId)return null;const storyState=store.getValue(storyId);return react.createElement(index_681e4b07.an,{active:!0,key},react.createElement(Editor,{onInput:newCode=>{store.setValue(storyId,{...storyState,code:newCode})},value:storyState.code,onCreateEditor:storyState.onCreateEditor,parentSize:"100%"}))}})}))}},27873:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{(0,__webpack_require__(8023).register)()},24654:()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[483],(()=>(__webpack_exec__(37707),__webpack_exec__(7967),__webpack_exec__(27873),__webpack_exec__(15887),__webpack_exec__(59288),__webpack_exec__(50213),__webpack_exec__(75259),__webpack_exec__(57464),__webpack_exec__(10165),__webpack_exec__(13457))));__webpack_require__.O()}]);