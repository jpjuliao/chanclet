!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var o,r,i,l;
/*!
 * fullPage 3.0.5
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */r=this,i=window,l=document,void 0===(o=function(){return r.fullpage=function(e,t){"use strict";var n="fullpage-wrapper",o="."+n,r="fp-responsive",i="fp-notransition",l="fp-destroyed",a="fp-enabled",s="fp-viewing",c="active",u="."+c,f="fp-completely",d="fp-section",v="."+d,p=v+u,h="fp-tableCell",g="."+h,m="fp-auto-height",b="fp-normal-scroll",S="#fp-nav",y="fp-slide",w="."+y,E=w+u,x="fp-slides",L="."+x,T="fp-slidesContainer",A="."+T,k="fp-table",O="fp-slidesNav",M="."+O,C=M+" a",H=".fp-controlArrow",I="fp-prev",B=H+".fp-prev",R=H+".fp-next";function j(t,n){e.console&&e.console[t]&&e.console[t]("fullPage: "+n)}function P(e,n){return(n=1<arguments.length?n:t)?n.querySelectorAll(e):null}function z(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=z(e[r],o[r]))}return e}function N(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function D(){return"innerHeight"in e?e.innerHeight:t.documentElement.offsetHeight}function V(e,t){var n;for(n in e=$(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++)e[o].style[n]=t[n];return e}function _(e,t,n){for(var o=e[n];o&&!pe(o,t);)o=o[n];return o}function W(e,t){return _(e,t,"previousElementSibling")}function Y(e,t){return _(e,t,"nextElementSibling")}function F(e){return e.previousElementSibling}function U(e){return e.nextElementSibling}function X(e){return e[e.length-1]}function K(e,t){e=G(e)?e[0]:e;for(var n=null!=t?P(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function $(e){return G(e)?e:[e]}function q(e){e=$(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function Q(e){e=$(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function G(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function J(e,t){e=$(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function Z(e,t){e=$(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function ee(e,t){t.appendChild(e)}function te(e,n,o){var r;n=n||t.createElement("div");for(var i=0;i<e.length;i++){var l=e[i];(o&&!i||!o)&&(r=n.cloneNode(!0),l.parentNode.insertBefore(r,l)),r.appendChild(l)}return e}function ne(e,t){te(e,t,!0)}function oe(e,t){for("string"==typeof t&&(t=ge(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function re(e){for(var n=t.createDocumentFragment();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}function ie(e,t){return e&&1===e.nodeType?pe(e,t)?e:ie(e.parentNode,t):null}function le(e,t){se(e,e.nextSibling,t)}function ae(e,t){se(e,e,t)}function se(e,t,n){G(n)||("string"==typeof n&&(n=ge(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function ce(){var n=t.documentElement;return(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}function ue(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}function fe(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function de(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function ve(n,o,r){var i;r=void 0===r?{}:r,"function"==typeof e.CustomEvent?i=new CustomEvent(o,{detail:r}):(i=t.createEvent("CustomEvent")).initCustomEvent(o,!0,!0,r),n.dispatchEvent(i)}function pe(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function he(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function ge(e){var n=t.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function me(e){e=$(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function be(e,t,n){for(var o=e[n],r=[];o;)(pe(o,t)||null==t)&&r.push(o),o=o[n];return r}function Se(e,t){return be(e,t,"nextElementSibling")}function ye(e,t){return be(e,t,"previousElementSibling")}return e.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,n){n=n||e;for(var o=0;o<this.length;o++)t.call(n,this[o],o,this)}),e.fp_utils={$:P,deepExtend:z,hasClass:N,getWindowHeight:D,css:V,until:_,prevUntil:W,nextUntil:Y,prev:F,next:U,last:X,index:K,getList:$,hide:q,show:Q,isArrayOrList:G,addClass:J,removeClass:Z,appendTo:ee,wrap:te,wrapAll:ne,wrapInner:oe,unwrap:re,closest:ie,after:le,before:ae,insertBefore:se,getScrollTop:ce,siblings:ue,preventDefault:fe,isFunction:de,trigger:ve,matches:pe,toggle:he,createElementFromHTML:ge,remove:me,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:be,nextAll:Se,prevAll:ye,showError:j},function(_,$){var G=$&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test($.licenseKey)||-1<t.domain.indexOf("alvarotrigo.com");if(!N(P("html"),a)){var te=P("html, body"),se=P("body")[0],be={};$=z({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fp_scrolloverflow?e.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof _?P(_)[0]:_,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},$);var we,Ee,xe,Le,Te=!1,Ae=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),ke="ontouchstart"in e||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,Oe="string"==typeof _?P(_)[0]:_,Me=D(),Ce=!1,He=!0,Ie=!0,Be=[],Re={m:{up:!0,down:!0,left:!0,right:!0}};Re.k=z({},Re.m);var je,Pe,ze,Ne,De,Ve,_e,We=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},Ye={touchmove:"ontouchmove"in e?"touchmove":We.move,touchstart:"ontouchstart"in e?"touchstart":We.down},Fe='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',Ue=!1;try{var Xe=Object.defineProperty({},"passive",{get:function(){Ue=!0}});e.addEventListener("testPassive",null,Xe),e.removeEventListener("testPassive",null,Xe)}catch(_){}var Ke,$e=z({},$),qe=!1,Qe=!0;In(),e.fp_easings=z(e.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),Oe&&(be.version="3.0.5",be.setAutoScrolling=at,be.setRecordHistory=st,be.setScrollingSpeed=ct,be.setFitToSection=ut,be.setLockAnchors=function(e){$.lockAnchors=e},be.setMouseWheelScrolling=ft,be.setAllowScrolling=dt,be.setKeyboardScrolling=pt,be.moveSectionUp=ht,be.moveSectionDown=gt,be.silentMoveTo=mt,be.moveTo=bt,be.moveSlideRight=St,be.moveSlideLeft=yt,be.fitToSection=Ct,be.reBuild=wt,be.setResponsive=Et,be.getFullpageData=function(){return $},be.destroy=function(n){at(!1,"internal"),dt(!0),vt(!1),pt(!1),J(Oe,l),clearTimeout(Ne),clearTimeout(ze),clearTimeout(Pe),clearTimeout(De),clearTimeout(Ve),e.removeEventListener("scroll",Mt),e.removeEventListener("hashchange",Zt),e.removeEventListener("resize",un),t.removeEventListener("keydown",tn),t.removeEventListener("keyup",nn),["click","touchstart"].forEach(function(e){t.removeEventListener(e,xt)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){t.removeEventListener(e,Tt,!0)}),clearTimeout(Ne),clearTimeout(ze),n&&(On(0),P("img[data-src], source[data-src], audio[data-src], iframe[data-src]",Oe).forEach(function(e){Xt(e,"src")}),P("img[data-srcset]").forEach(function(e){Xt(e,"srcset")}),me(P(S+", "+M+", "+H)),V(P(v),{height:"","background-color":"",padding:""}),V(P(w),{width:""}),V(Oe,{height:"",position:"","-ms-touch-action":"","touch-action":""}),V(te,{overflow:"",height:""}),Z(P("html"),a),Z(se,r),se.className.split(/\s+/).forEach(function(e){0===e.indexOf(s)&&Z(se,e)}),P(v+", "+w).forEach(function(e){$.scrollOverflowHandler&&$.scrollOverflow&&$.scrollOverflowHandler.remove(e),Z(e,k+" "+c+" "+f);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),N(e,d)&&!qe&&e.removeAttribute("data-anchor")}),vn(Oe),[g,A,L].forEach(function(e){P(e,Oe).forEach(function(e){re(e)})}),V(Oe,{"-webkit-transition":"none",transition:"none"}),e.scrollTo(0,0),[d,y,T].forEach(function(e){Z(P("."+e),e)}))},be.getActiveSection=function(){return new Pn(P(p)[0])},be.getActiveSlide=function(){return Yt(P(E,P(p)[0])[0])},be.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<P($.sectionSelector,Oe).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<P($.sectionSelector,Oe).length;t++)e.push(0);return e}(),options:$,setAutoScrolling:at},be.shared={afterRenderActions:Ot},e.fullpage_api=be,$.$&&($.$.fn.fullpage=be),$.css3&&($.css3=function(){var n,o=t.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var i in o.style.display="block",t.body.insertBefore(o,null),r)void 0!==o.style[i]&&(o.style[i]="translate3d(1px,1px,1px)",n=e.getComputedStyle(o).getPropertyValue(r[i]));return t.body.removeChild(o),void 0!==n&&0<n.length&&"none"!==n}()),$.scrollBar=$.scrollBar||$.hybrid,function(){if(!$.anchors.length){var e="[data-anchor]",t=P($.sectionSelector.split(",").join(e+",")+e,Oe);t.length&&(qe=!0,t.forEach(function(e){$.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!$.navigationTooltips.length){var e="[data-tooltip]",n=P($.sectionSelector.split(",").join(e+",")+e,Oe);n.length&&n.forEach(function(e){$.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){V(Oe,{height:"100%",position:"relative"}),J(Oe,n),J(P("html"),a),Me=D(),Z(Oe,l),J(P($.sectionSelector,Oe),d),J(P($.slideSelector,Oe),y);for(var e=P(v),r=0;r<e.length;r++){var i=r,s=e[r],u=P(w,s),f=u.length;s.setAttribute("data-fp-styles",s.getAttribute("style")),m=s,(b=i)||null!=P(p)[0]||J(m,c),Le=P(p)[0],V(m,{height:Me+"px"}),$.paddingTop&&V(m,{"padding-top":$.paddingTop}),$.paddingBottom&&V(m,{"padding-bottom":$.paddingBottom}),void 0!==$.sectionsColor[b]&&V(m,{"background-color":$.sectionsColor[b]}),void 0!==$.anchors[b]&&m.setAttribute("data-anchor",$.anchors[b]),h=s,g=i,void 0!==$.anchors[g]&&N(h,c)&&pn($.anchors[g],g),$.menu&&$.css3&&null!=ie(P($.menu)[0],o)&&P($.menu).forEach(function(e){se.appendChild(e)}),0<f?At(s,u,f):$.verticalCentered&&gn(s)}var h,g,m,b;$.fixedElements&&$.css3&&P($.fixedElements).forEach(function(e){se.appendChild(e)}),$.navigation&&function(){var e=t.createElement("div");e.setAttribute("id","fp-nav");var n=t.createElement("ul");e.appendChild(n),ee(e,se);var o=P(S)[0];J(o,"fp-"+$.navigationPosition),$.showActiveTooltip&&J(o,"fp-show-active");for(var r="",i=0;i<P(v).length;i++){var l="";$.anchors.length&&(l=$.anchors[i]),r+='<li><a href="#'+l+'"><span class="fp-sr-only">'+kt(i,"Section")+"</span><span></span></a>";var a=$.navigationTooltips[i];void 0!==a&&""!==a&&(r+='<div class="fp-tooltip fp-'+$.navigationPosition+'">'+a+"</div>"),r+="</li>"}P("ul",o)[0].innerHTML=r,V(P(S),{"margin-top":"-"+P(S)[0].offsetHeight/2+"px"}),J(P("a",P("li",P(S)[0])[K(P(p)[0],v)]),c)}(),P('iframe[src*="youtube.com/embed/"]',Oe).forEach(function(e){var t,n;n=(t=e).getAttribute("src"),t.setAttribute("src",n+(/\?/.test(n)?"&":"?")+"enablejsapi=1")}),$.scrollOverflow&&(je=$.scrollOverflowHandler.init($))}(),dt(!0),vt(!0),at($.autoScrolling,"internal"),fn(),Tn(),"complete"===t.readyState&&Jt(),e.addEventListener("load",Jt),$.scrollOverflow||Ot(),e.addEventListener("scroll",Mt),e.addEventListener("hashchange",Zt),e.addEventListener("blur",function(){xe=He=!1}),e.addEventListener("resize",un),t.addEventListener("keydown",tn),t.addEventListener("keyup",nn),["click","touchstart"].forEach(function(e){t.addEventListener(e,xt)}),$.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Lt(e,!1)}),["mouseleave","touchend"].forEach(function(e){Lt(e,!0)})));var Ge=!1,Je=0,Ze=0,et=0,tt=0,nt=0,ot=(new Date).getTime(),rt=0,it=0,lt=Me;return be}function at(e,t){e||On(0),Hn("autoScrolling",e,t);var n=P(p)[0];if($.autoScrolling&&!$.scrollBar)V(te,{overflow:"hidden",height:"100%"}),st($e.recordHistory,"internal"),V(Oe,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&On(n.offsetTop);else if(V(te,{overflow:"visible",height:"initial"}),st(!!$.autoScrolling&&$e.recordHistory,"internal"),V(Oe,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=Ft(n.offsetTop);o.element.scrollTo(0,o.options)}}function st(e,t){Hn("recordHistory",e,t)}function ct(e,t){Hn("scrollingSpeed",e,t)}function ut(e,t){Hn("fitToSection",e,t)}function ft(n){n?(function(){var n,o="";e.addEventListener?n="addEventListener":(n="attachEvent",o="on");var r="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll",i=!!Ue&&{passive:!1};"DOMMouseScroll"==r?t[n](o+"MozMousePixelScroll",zt,i):t[n](o+r,zt,i)}(),Oe.addEventListener("mousedown",on),Oe.addEventListener("mouseup",rn)):(t.addEventListener?(t.removeEventListener("mousewheel",zt,!1),t.removeEventListener("wheel",zt,!1),t.removeEventListener("MozMousePixelScroll",zt,!1)):t.detachEvent("onmousewheel",zt),Oe.removeEventListener("mousedown",on),Oe.removeEventListener("mouseup",rn))}function dt(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){Cn(e,t,"m")}):Cn(e,"all","m")}function vt(e){e?(ft(!0),function(){if(Ae||ke){$.autoScrolling&&(se.removeEventListener(Ye.touchmove,It,{passive:!1}),se.addEventListener(Ye.touchmove,It,{passive:!1}));var e=$.touchWrapper;e.removeEventListener(Ye.touchstart,jt),e.removeEventListener(Ye.touchmove,Bt,{passive:!1}),e.addEventListener(Ye.touchstart,jt),e.addEventListener(Ye.touchmove,Bt,{passive:!1})}}()):(ft(!1),function(){if(Ae||ke){$.autoScrolling&&(se.removeEventListener(Ye.touchmove,Bt,{passive:!1}),se.removeEventListener(Ye.touchmove,It,{passive:!1}));var e=$.touchWrapper;e.removeEventListener(Ye.touchstart,jt),e.removeEventListener(Ye.touchmove,Bt,{passive:!1})}}())}function pt(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){Cn(e,t,"k")}):(Cn(e,"all","k"),$.keyboardScrolling=e)}function ht(){var e=W(P(p)[0],v);e||!$.loopTop&&!$.continuousVertical||(e=X(P(v))),null!=e&&Vt(e,null,!0)}function gt(){var e=Y(P(p)[0],v);e||!$.loopBottom&&!$.continuousVertical||(e=P(v)[0]),null!=e&&Vt(e,null,!1)}function mt(e,t){ct(0,"internal"),bt(e,t),ct($e.scrollingSpeed,"internal")}function bt(e,t){var n=Sn(e);void 0!==t?yn(e,t):null!=n&&Vt(n)}function St(e){Nt("right",e)}function yt(e){Nt("left",e)}function wt(t){if(!N(Oe,l)){Ce=!0,Me=D();for(var n=P(v),o=0;o<n.length;++o){var r=n[o],i=P(L,r)[0],a=P(w,r);$.verticalCentered&&V(P(g,r),{height:mn(r)+"px"}),V(r,{height:Me+"px"}),1<a.length&&sn(i,P(E,i)[0])}$.scrollOverflow&&je.createScrollBarForAll();var s=K(P(p)[0],v);s&&mt(s+1),Ce=!1,de($.afterResize)&&t&&$.afterResize.call(Oe,e.innerWidth,e.innerHeight),de($.afterReBuild)&&!t&&$.afterReBuild.call(Oe)}}function Et(e){var t=N(se,r);e?t||(at(!1,"internal"),ut(!1,"internal"),q(P(S)),J(se,r),de($.afterResponsive)&&$.afterResponsive.call(Oe,e),$.scrollOverflow&&je.createScrollBarForAll()):t&&(at($e.autoScrolling,"internal"),ut($e.autoScrolling,"internal"),Q(P(S)),Z(se,r),de($.afterResponsive)&&$.afterResponsive.call(Oe,e))}function xt(e){var t=e.target;t&&ie(t,S+" a")?function(e){fe(e);var t=K(ie(this,S+" li"));Vt(P(v)[t])}.call(t,e):pe(t,".fp-tooltip")?function(){ve(F(this),"click")}.call(t):pe(t,H)?function(){var e=ie(this,v);N(this,I)?Re.m.left&&yt(e):Re.m.right&&St(e)}.call(t,e):pe(t,C)||null!=ie(t,C)?function(e){fe(e);var t=P(L,ie(this,v))[0],n=P(w,t)[K(ie(this,"li"))];sn(t,n)}.call(t,e):ie(t,$.menu+" [data-menuanchor]")&&function(e){!P($.menu)[0]||!$.lockAnchors&&$.anchors.length||(fe(e),bt(this.getAttribute("data-menuanchor")))}.call(t,e)}function Lt(e,n){t["fp_"+e]=n,t.addEventListener(e,Tt,!0)}function Tt(e){e.target!=t&&("touchend"===e.type&&(Qe=!1,setTimeout(function(){Qe=!0},800)),("mouseenter"!==e.type||Qe)&&$.normalScrollElements.split(",").forEach(function(n){null!=ie(e.target,n)&&vt(t["fp_"+e.type])}))}function At(e,n,o){var r=100*o,i=100/o,l=t.createElement("div");l.className=x,ne(n,l);var a,s,u=t.createElement("div");u.className=T,ne(n,u),V(P(A,e),{width:r+"%"}),1<o&&($.controlArrows&&(a=e,s=[ge('<div class="fp-controlArrow fp-prev"></div>'),ge('<div class="fp-controlArrow fp-next"></div>')],le(P(L,a)[0],s),"#fff"!==$.controlArrowColor&&(V(P(R,a),{"border-color":"transparent transparent transparent "+$.controlArrowColor}),V(P(B,a),{"border-color":"transparent "+$.controlArrowColor+" transparent transparent"})),$.loopHorizontal||q(P(B,a))),$.slidesNavigation&&function(e,t){ee(ge('<div class="'+O+'"><ul></ul></div>'),e);var n=P(M,e)[0];J(n,"fp-"+$.slidesNavPosition);for(var o=0;o<t;o++)ee(ge('<li><a href="#"><span class="fp-sr-only">'+kt(o,"Slide")+"</span><span></span></a></li>"),P("ul",n)[0]);V(n,{"margin-left":"-"+n.innerWidth/2+"px"}),J(P("a",P("li",n)[0]),c)}(e,o)),n.forEach(function(e){V(e,{width:i+"%"}),$.verticalCentered&&gn(e)});var f=P(E,e)[0];null!=f&&(0!==K(P(p),v)||0===K(P(p),v)&&0!==K(f))?kn(f,"internal"):J(n[0],c)}function kt(e,t){return $.navigationTooltips[e]||$.anchors[e]||t+" "+(e+1)}function Ot(){var e,t=P(p)[0];J(t,f),Kt(t),$t(t),$.scrollOverflow&&$.scrollOverflowHandler.afterLoad(),(!(e=Sn(en().section))||void 0!==e&&K(e)===K(Le))&&de($.afterLoad)&&_t("afterLoad",{activeSection:null,element:t,direction:null,anchorLink:t.getAttribute("data-anchor"),sectionIndex:K(t,v)}),de($.afterRender)&&_t("afterRender")}function Mt(){var e,t,n,o,r,i;if(!$.autoScrolling||$.scrollBar){var l=ce(),a=(i=Je<(r=l)?"down":"up",rt=Je=r,i),s=0,u=l+D()/2,d=se.offsetHeight-D()===l,h=P(v);if(d)s=h.length-1;else if(l)for(var g=0;g<h.length;++g)h[g].offsetTop<=u&&(s=g);else s=0;if(t=a,n=P(p)[0].offsetTop,o=n+D(),("up"!=t?n<=ce():o>=ce()+D())&&(N(P(p)[0],f)||(J(P(p)[0],f),Z(ue(P(p)[0]),f))),!N(e=h[s],c)){Ge=!0;var m,b,S=P(p)[0],y=K(S,v)+1,w=hn(e),x=e.getAttribute("data-anchor"),L=K(e,v)+1,T=P(E,e)[0],A={activeSection:S,sectionIndex:L-1,anchorLink:x,element:e,leavingSection:y,direction:w};T&&(b=T.getAttribute("data-anchor"),m=K(T)),Ie&&(J(e,c),Z(ue(e),c),de($.onLeave)&&_t("onLeave",A),de($.afterLoad)&&_t("afterLoad",A),Qt(S),Kt(e),$t(e),pn(x,L-1),$.anchors.length&&(we=x),En(m,b,x)),clearTimeout(De),De=setTimeout(function(){Ge=!1},100)}$.fitToSection&&(clearTimeout(Ve),Ve=setTimeout(function(){$.fitToSection&&P(p)[0].offsetHeight<=Me&&Ct()},$.fitToSectionDelay))}}function Ct(){Ie&&(Ce=!0,Vt(P(p)[0]),Ce=!1)}function Ht(e){if(Re.m[e]){var t="down"===e?gt:ht;if($.scrollOverflow){var n=$.scrollOverflowHandler.scrollable(P(p)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!$.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function It(e){$.autoScrolling&&Rt(e)&&Re.m.up&&fe(e)}function Bt(t){var n=ie(t.target,v)||P(p)[0];if(Rt(t)){$.autoScrolling&&fe(t);var o=An(t);tt=o.y,nt=o.x,P(L,n).length&&Math.abs(et-nt)>Math.abs(Ze-tt)?!Te&&Math.abs(et-nt)>e.innerWidth/100*$.touchSensitivity&&(nt<et?Re.m.right&&St(n):Re.m.left&&yt(n)):$.autoScrolling&&Ie&&Math.abs(Ze-tt)>e.innerHeight/100*$.touchSensitivity&&(tt<Ze?Ht("down"):Ze<tt&&Ht("up"))}}function Rt(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function jt(e){if($.fitToSection&&(Ke=!1),Rt(e)){var t=An(e);Ze=t.y,et=t.x}}function Pt(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function zt(t){var n=(new Date).getTime(),o=N(P(".fp-completely")[0],b);if(!Re.m.down&&!Re.m.up)return fe(t),!1;if($.autoScrolling&&!xe&&!o){var r=(t=t||e.event).wheelDelta||-t.deltaY||-t.detail,i=Math.max(-1,Math.min(1,r)),l=void 0!==t.wheelDeltaX||void 0!==t.deltaX,a=Math.abs(t.wheelDeltaX)<Math.abs(t.wheelDelta)||Math.abs(t.deltaX)<Math.abs(t.deltaY)||!l;149<Be.length&&Be.shift(),Be.push(Math.abs(r)),$.scrollBar&&fe(t);var s=n-ot;if(ot=n,200<s&&(Be=[]),Ie){var c=Pt(Be,10);Pt(Be,70)<=c&&a&&Ht(i<0?"down":"up")}return!1}$.fitToSection&&(Ke=!1)}function Nt(e,t){var n=null==t?P(p)[0]:t,o=P(L,n)[0];if(!(null==o||Te||P(w,o).length<2)){var r=P(E,o)[0],i=null;if(null==(i="left"===e?W(r,w):Y(r,w))){if(!$.loopHorizontal)return;var l=ue(r);i="left"===e?l[l.length-1]:l[0]}Te=!be.test.isTesting,sn(o,i,e)}}function Dt(){for(var e=P(E),t=0;t<e.length;t++)kn(e[t],"internal")}function Vt(e,t,n){if(null!=e){var o,r,i,l,a,s,u,f,d,h={element:e,callback:t,isMovementUp:n,dtop:(r=(o=e).offsetHeight,i=o.offsetTop,a=rt<(l=i),s=l-Me+r,u=$.bigSectionsDestination,Me<r?(a||u)&&"bottom"!==u||(l=s):(a||Ce&&null==U(o))&&(l=s),rt=l),yMovement:hn(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:K(e,v),activeSlide:P(E,e)[0],activeSection:P(p)[0],leavingSection:K(P(p),v)+1,localIsResizing:Ce};if(!(h.activeSection==e&&!Ce||$.scrollBar&&ce()===h.dtop&&!N(e,m))){if(null!=h.activeSlide&&(f=h.activeSlide.getAttribute("data-anchor"),d=K(h.activeSlide)),!h.localIsResizing){var g=h.yMovement;if(void 0!==n&&(g=n?"up":"down"),h.direction=g,de($.onLeave)&&!1===_t("onLeave",h))return}$.autoScrolling&&$.continuousVertical&&void 0!==h.isMovementUp&&(!h.isMovementUp&&"up"==h.yMovement||h.isMovementUp&&"down"==h.yMovement)&&((b=h).isMovementUp?ae(P(p)[0],Se(b.activeSection,v)):le(P(p)[0],ye(b.activeSection,v).reverse()),On(P(p)[0].offsetTop),Dt(),b.wrapAroundElements=b.activeSection,b.dtop=b.element.offsetTop,b.yMovement=hn(b.element),b.leavingSection=K(b.activeSection,v)+1,b.sectionIndex=K(b.element,v),h=b),h.localIsResizing||Qt(h.activeSection),$.scrollOverflow&&$.scrollOverflowHandler.beforeLeave(),J(e,c),Z(ue(e),c),Kt(e),$.scrollOverflow&&$.scrollOverflowHandler.onLeave(),Ie=be.test.isTesting,En(d,f,h.anchorLink,h.sectionIndex),function(e){if($.css3&&$.autoScrolling&&!$.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";bn(t,!0),$.scrollingSpeed?(clearTimeout(ze),ze=setTimeout(function(){Ut(e)},$.scrollingSpeed)):Ut(e)}else{var n=Ft(e.dtop);be.test.top=-e.dtop+"px",Bn(n.element,n.options,$.scrollingSpeed,function(){$.scrollBar?setTimeout(function(){Ut(e)},30):Ut(e)})}}(h),we=h.anchorLink,pn(h.anchorLink,h.sectionIndex)}}var b}function _t(e,t){var n,o,r,i,l=(o=e,r=t,(i=$.v2compatible?{afterRender:function(){return[Oe]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:Wt(P(p)[0]),slide:Yt(P(E,P(p)[0])[0])}},onLeave:function(){return{origin:Wt(r.activeSection),destination:Wt(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:Wt(r.section),origin:Yt(r.prevSlide),destination:Yt(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if($.v2compatible){if(!1===$[e].apply(l[0],l.slice(1)))return!1}else if(ve(Oe,e,l),!1===$[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Wt(e){return e?new Pn(e):null}function Yt(e){return e?new zn(e):null}function Ft(t){var n={};return $.autoScrolling&&!$.scrollBar?(n.options=-t,n.element=P(o)[0]):(n.options=t,n.element=e),n}function Ut(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?ae(P(v)[0],t.wrapAroundElements):le(P(v)[P(v).length-1],t.wrapAroundElements),On(P(p)[0].offsetTop),Dt()),de($.afterLoad)&&!e.localIsResizing&&_t("afterLoad",e),$.scrollOverflow&&$.scrollOverflowHandler.afterLoad(),e.localIsResizing||$t(e.element),J(e.element,f),Z(ue(e.element),f),Ie=!0,de(e.callback)&&e.callback()}function Xt(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function Kt(e){$.lazyLoading&&P("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",Gt(e)).forEach(function(e){if(["src","srcset"].forEach(function(t){var n=e.getAttribute("data-"+t);null!=n&&n&&Xt(e,t)}),pe(e,"source")){var t=ie(e,"video, audio");t&&t.load()}})}function $t(e){var t=Gt(e);P("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),P('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&qt(e),e.onload=function(){e.hasAttribute("data-autoplay")&&qt(e)}})}function qt(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Qt(e){var t=Gt(e);P("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),P('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Gt(e){var t=P(E,e);return t.length&&(e=t[0]),e}function Jt(){var e=en(),t=e.section,n=e.slide;t&&($.animateAnchor?yn(t,n):mt(t,n))}function Zt(){if(!Ge&&!$.lockAnchors){var e=en(),t=e.section,n=e.slide,o=void 0===we,r=void 0===we&&void 0===n&&!Te;t&&t.length&&(t&&t!==we&&!o||r||!Te&&Ee!=n)&&yn(t,n)}}function en(){var t,n,o=e.location.hash;if(o.length){var r=o.replace("#","").split("/"),i=-1<o.indexOf("#/");t=i?"/"+r[1]:decodeURIComponent(r[0]);var l=i?r[2]:r[1];l&&l.length&&(n=decodeURIComponent(l))}return{section:t,slide:n}}function tn(e){clearTimeout(_e);var n=t.activeElement,o=e.keyCode;9===o?function(e){var n,o,r,i,l,a,s,c=e.shiftKey,u=t.activeElement,f=ln(Gt(P(p)[0]));function d(e){return fe(e),f[0]?f[0].focus():null}n=e,o=ln(t),r=o.indexOf(t.activeElement),i=n.shiftKey?r-1:r+1,l=o[i],a=Yt(ie(l,w)),s=Wt(ie(l,v)),(a||s)&&(u?null==ie(u,p+","+p+" "+E)&&(u=d(e)):d(e),(!c&&u==f[f.length-1]||c&&u==f[0])&&fe(e))}(e):pe(n,"textarea")||pe(n,"input")||pe(n,"select")||"true"===n.getAttribute("contentEditable")||""===n.getAttribute("contentEditable")||!$.keyboardScrolling||!$.autoScrolling||(-1<[40,38,32,33,34].indexOf(o)&&fe(e),xe=e.ctrlKey,_e=setTimeout(function(){!function(e){var t=e.shiftKey;if(Ie||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:Re.k.up&&ht();break;case 32:if(t&&Re.k.up){ht();break}case 40:case 34:Re.k.down&&gt();break;case 36:Re.k.up&&bt(1);break;case 35:Re.k.down&&bt(P(v).length);break;case 37:Re.k.left&&yt();break;case 39:Re.k.right&&St()}}(e)},150))}function nn(e){He&&(xe=e.ctrlKey)}function on(e){2==e.which&&(it=e.pageY,Oe.addEventListener("mousemove",an))}function rn(e){2==e.which&&Oe.removeEventListener("mousemove",an)}function ln(e){return[].slice.call(P(Fe,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function an(e){Ie&&(e.pageY<it&&Re.m.up?ht():e.pageY>it&&Re.m.down&&gt()),it=e.pageY}function sn(e,t,n){var o,r,i=ie(e,v),l={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:K(t),section:i,sectionIndex:K(i,v),anchorLink:i.getAttribute("data-anchor"),slidesNav:P(M,i)[0],slideAnchor:Ln(t),prevSlide:P(E,i)[0],prevSlideIndex:K(P(E,i)[0]),localIsResizing:Ce};l.xMovement=(o=l.prevSlideIndex,r=l.slideIndex,o==r?"none":r<o?"left":"right"),l.direction=l.direction?l.direction:l.xMovement,l.localIsResizing||(Ie=!1),$.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&de($.onSlideLeave)&&!1===_t("onSlideLeave",l)?Te=!1:(J(t,c),Z(ue(t),c),l.localIsResizing||(Qt(l.prevSlide),Kt(t)),!$.loopHorizontal&&$.controlArrows&&(he(P(B,i),0!==l.slideIndex),he(P(R,i),null!=U(t))),N(i,c)&&!l.localIsResizing&&En(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,t,n){var o=t.destinyPos;if($.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";be.test.translate3dH[t.sectionIndex]=r,V(dn(P(A,e)),Mn(r)),Ne=setTimeout(function(){cn(t)},$.scrollingSpeed)}else be.test.left[t.sectionIndex]=Math.round(o.left),Bn(e,Math.round(o.left),$.scrollingSpeed,function(){cn(t)})}(e,l))}function cn(e){var t,n;t=e.slidesNav,n=e.slideIndex,$.slidesNavigation&&null!=t&&(Z(P(u,t),c),J(P("a",P("li",t)[n]),c)),e.localIsResizing||(de($.afterSlideLoad)&&_t("afterSlideLoad",e),Ie=!0,$t(e.destiny)),Te=!1}function un(){if(fn(),Ae){var e=t.activeElement;if(!pe(e,"textarea")&&!pe(e,"input")&&!pe(e,"select")){var n=D();Math.abs(n-lt)>20*Math.max(lt,n)/100&&(Pe=setTimeout(function(){wt(!0),lt=n},navigator.userAgent.match("CriOS")?50:0))}}else clearTimeout(Pe),Pe=setTimeout(function(){wt(!0)},350)}function fn(){var t=$.responsive||$.responsiveWidth,n=$.responsiveHeight,o=t&&e.innerWidth<t,r=n&&e.innerHeight<n;t&&n?Et(o||r):t?Et(o):n&&Et(r)}function dn(e){var t="all "+$.scrollingSpeed+"ms "+$.easingcss3;return Z(e,i),V(e,{"-webkit-transition":t,transition:t})}function vn(e){return J(e,i)}function pn(e,t){var n,o,r;n=e,P($.menu).forEach(function(e){$.menu&&null!=e&&(Z(P(u,e),c),J(P('[data-menuanchor="'+n+'"]',e),c))}),o=e,r=t,$.navigation&&null!=P(S)[0]&&(Z(P(u,P(S)[0]),c),J(o?P('a[href="#'+o+'"]',P(S)[0]):P("a",P("li",P(S)[0])[r]),c))}function hn(e){var t=K(P(p)[0],v),n=K(e,v);return t==n?"none":n<t?"up":"down"}function gn(e){if(!N(e,k)){var n=t.createElement("div");n.className=h,n.style.height=mn(e)+"px",J(e,k),oe(e,n)}}function mn(e){var t=Me;if($.paddingTop||$.paddingBottom){var n=e;N(n,d)||(n=ie(e,v));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=Me-o}return t}function bn(e,t){t?dn(Oe):vn(Oe),V(Oe,Mn(e)),be.test.translate3d=e,setTimeout(function(){Z(Oe,i)},10)}function Sn(e){var t=P(v+'[data-anchor="'+e+'"]',Oe)[0];if(!t){var n=void 0!==e?e-1:0;t=P(v)[n]}return t}function yn(e,t){var n=Sn(e);if(null!=n){var o,r,i,l=(null==(i=P(w+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=P(w,r)[o]),i);Ln(n)===we||N(n,c)?wn(l):Vt(n,function(){wn(l)})}}function wn(e){null!=e&&sn(ie(e,L),e)}function En(e,t,n,o){var r="";$.anchors.length&&!$.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),xn(r+"/"+(Ee=t))):(null!=e&&(Ee=t),xn(n))),Tn()}function xn(t){if($.recordHistory)location.hash=t;else if(Ae||ke)e.history.replaceState(void 0,void 0,"#"+t);else{var n=e.location.href.split("#")[0];e.location.replace(n+"#"+t)}}function Ln(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=K(e);return null==t&&(t=n),t}function Tn(){var e=P(p)[0],t=P(E,e)[0],n=Ln(e),o=Ln(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+s+"-[^\\s]+\\b","g");se.className=se.className.replace(i,""),J(se,s+"-"+r)}function An(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,ke&&Rt(e)&&$.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function kn(e,t){ct(0,"internal"),void 0!==t&&(Ce=!0),sn(ie(e,L),e),void 0!==t&&(Ce=!1),ct($e.scrollingSpeed,"internal")}function On(e){var t=Math.round(e);if($.css3&&$.autoScrolling&&!$.scrollBar)bn("translate3d(0px, -"+t+"px, 0px)",!1);else if($.autoScrolling&&!$.scrollBar)V(Oe,{top:-t+"px"}),be.test.top=-t+"px";else{var n=Ft(t);Rn(n.element,n.options)}}function Mn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Cn(e,t,n){"all"!==t?Re[n][t]=e:Object.keys(Re[n]).forEach(function(t){Re[n][t]=e})}function Hn(e,t,n){$[e]=t,"internal"!==n&&($e[e]=t)}function In(){var e=$.licenseKey,t="font-size: 15px;background:yellow;";G?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(j("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),j("error","https://github.com/alvarotrigo/fullPage.js#options.")),N(P("html"),a)?j("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):($.continuousVertical&&($.loopTop||$.loopBottom)&&($.continuousVertical=!1,j("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!$.scrollOverflow||!$.scrollBar&&$.autoScrolling||j("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!$.continuousVertical||!$.scrollBar&&$.autoScrolling||($.continuousVertical=!1,j("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),$.scrollOverflow&&null==$.scrollOverflowHandler&&($.scrollOverflow=!1,j("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax","cards"].forEach(function(e){$[e]&&j("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)}),$.anchors.forEach(function(e){var t=[].slice.call(P("[name]")).filter(function(t){return t.getAttribute("name")&&t.getAttribute("name").toLowerCase()==e.toLowerCase()}),n=[].slice.call(P("[id]")).filter(function(t){return t.getAttribute("id")&&t.getAttribute("id").toLowerCase()==e.toLowerCase()});(n.length||t.length)&&(j("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),n.length&&j("error",'"'+e+'" is is being used by another element `id` property'),t.length&&j("error",'"'+e+'" is is being used by another element `name` property'))}))}function Bn(t,n,o,r){var i,l=(i=t).self!=e&&N(i,x)?i.scrollLeft:!$.autoScrolling||$.scrollBar?ce():i.offsetTop,a=n-l,s=0;Ke=!0;var c=function(){if(Ke){var i=n;s+=20,o&&(i=e.fp_easings[$.easing](s,l,a,o)),Rn(t,i),s<o?setTimeout(c,20):void 0!==r&&r()}else s<o&&r()};c()}function Rn(t,n){!$.autoScrolling||$.scrollBar||t.self!=e&&N(t,x)?t.self!=e&&N(t,x)?t.scrollLeft=n:t.scrollTo(0,n):t.style.top=n+"px"}function jn(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=K(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function Pn(e){jn.call(this,e,v)}function zn(e){jn.call(this,e,w)}In()}}(i,l),r.fullpage}.call(t,n,t,e))||(e.exports=o),window.jQuery&&window.fullpage&&function(e,t){"use strict";e&&t?e.fn.fullpage=function(n){n.$=e,new t(this[0],n)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage)}]);