(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{338:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return o})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return g})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return m}));n(16),n(55),n(190),n(82),n(351),n(195),n(83),n(113),n(7),n(114),n(35),n(115),n(188);var i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,o=/^[a-z]+:/i;function a(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return o.test(t)}function l(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var e=t.match(i),n=e?e[0]:"",r=a(t);return s.test(r)?t:r+".html"+n}function h(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&a(t.path)===a(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?r.pop():"."!==a&&r.push(a)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=a(e),r=0;r<t.length;r++)if(a(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:f(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function g(t,e,n,i){var r=n.pages,s=n.themeConfig,o=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||o.sidebar||s.sidebar))return d(t);var a=o.sidebar||s.sidebar;if(a){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,a),l=u.base,c=u.config;return"auto"===c?d(t):c?c.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});var s=e.children||[];return 0===s.length&&e.path?Object.assign(p(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,l)})):[]}return[]}function d(t){var e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function v(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},340:function(t,e,n){var i=n(2),r=n(26),s=n(17),o=n(341),a=i("".replace),u="["+o+"]",l=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),f=function(t){return function(e){var n=s(r(e));return 1&t&&(n=a(n,l,"")),2&t&&(n=a(n,c,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},341:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},344:function(t,e,n){"use strict";n(381),n(110),n(7),n(112);var i=n(338),r={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=n(31),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=o.exports},345:function(t,e,n){"use strict";var i=n(1),r=n(340).trim;i({target:"String",proto:!0,forced:n(377)("trim")},{trim:function(){return r(this)}})},346:function(t,e,n){var i=n(9),r=n(0),s=n(2),o=n(111),a=n(347),u=n(27),l=n(12).f,c=n(56).f,f=n(36),h=n(194),p=n(17),g=n(192),d=n(189),v=n(18),m=n(3),b=n(11),k=n(32).enforce,x=n(198),y=n(4),w=n(193),_=n(197),C=y("match"),$=r.RegExp,L=$.prototype,O=r.SyntaxError,I=s(g),E=s(L.exec),S=s("".charAt),R=s("".replace),j=s("".indexOf),A=s("".slice),N=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,D=/a/g,P=/a/g,W=new $(D)!==D,T=d.MISSED_STICKY,H=d.UNSUPPORTED_Y,B=i&&(!W||T||w||_||m((function(){return P[C]=!1,$(D)!=D||$(P)==P||"/a/i"!=$(D,"i")})));if(o("RegExp",B)){for(var U=function(t,e){var n,i,r,s,o,l,c=f(L,this),g=h(t),d=void 0===e,v=[],m=t;if(!c&&g&&d&&t.constructor===U)return t;if((g||f(L,t))&&(t=t.source,d&&(e="flags"in m?m.flags:I(m))),t=void 0===t?"":p(t),e=void 0===e?"":p(e),m=t,w&&"dotAll"in D&&(i=!!e&&j(e,"s")>-1)&&(e=R(e,/s/g,"")),n=e,T&&"sticky"in D&&(r=!!e&&j(e,"y")>-1)&&H&&(e=R(e,/y/g,"")),_&&(t=(s=function(t){for(var e,n=t.length,i=0,r="",s=[],o={},a=!1,u=!1,l=0,c="";i<=n;i++){if("\\"===(e=S(t,i)))e+=S(t,++i);else if("]"===e)a=!1;else if(!a)switch(!0){case"["===e:a=!0;break;case"("===e:E(N,A(t,i+1))&&(i+=2,u=!0),r+=e,l++;continue;case">"===e&&u:if(""===c||b(o,c))throw new O("Invalid capture group name");o[c]=!0,s[s.length]=[c,l],u=!1,c="";continue}u?c+=e:r+=e}return[r,s]}(t))[0],v=s[1]),o=a($(t,e),c?this:L,U),(i||r||v.length)&&(l=k(o),i&&(l.dotAll=!0,l.raw=U(function(t){for(var e,n=t.length,i=0,r="",s=!1;i<=n;i++)"\\"!==(e=S(t,i))?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),r+=e):r+="[\\s\\S]":r+=e+S(t,++i);return r}(t),n)),r&&(l.sticky=!0),v.length&&(l.groups=v)),t!==m)try{u(o,"source",""===m?"(?:)":m)}catch(t){}return o},M=function(t){t in U||l(U,t,{configurable:!0,get:function(){return $[t]},set:function(e){$[t]=e}})},q=c($),z=0;q.length>z;)M(q[z++]);L.constructor=U,U.prototype=L,v(r,"RegExp",U)}x("RegExp")},347:function(t,e,n){var i=n(5),r=n(6),s=n(87);t.exports=function(t,e,n){var o,a;return s&&i(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},348:function(t,e,n){var i=n(0),r=n(9),s=n(193),o=n(22),a=n(12).f,u=n(32).get,l=RegExp.prototype,c=i.TypeError;r&&s&&a(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!u(this).dotAll;throw c("Incompatible receiver, RegExp required")}}})},349:function(t,e,n){var i=n(0),r=n(9),s=n(189).MISSED_STICKY,o=n(22),a=n(12).f,u=n(32).get,l=RegExp.prototype,c=i.TypeError;r&&s&&a(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!u(this).sticky;throw c("Incompatible receiver, RegExp required")}}})},350:function(t,e,n){"use strict";var i=n(2),r=n(84).PROPER,s=n(18),o=n(8),a=n(36),u=n(17),l=n(3),c=n(192),f=RegExp.prototype,h=f.toString,p=i(c),g=l((function(){return"/a/b"!=h.call({source:"a",flags:"b"})})),d=r&&"toString"!=h.name;(g||d)&&s(RegExp.prototype,"toString",(function(){var t=o(this),e=u(t.source),n=t.flags;return"/"+e+"/"+u(void 0===n&&a(f,t)&&!("flags"in f)?p(t):n)}),{unsafe:!0})},351:function(t,e,n){"use strict";var i=n(37),r=n(10),s=n(2),o=n(116),a=n(194),u=n(8),l=n(26),c=n(120),f=n(117),h=n(57),p=n(17),g=n(38),d=n(199),v=n(118),m=n(86),b=n(189),k=n(3),x=b.UNSUPPORTED_Y,y=Math.min,w=[].push,_=s(/./.exec),C=s(w),$=s("".slice);o("split",(function(t,e,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var s=p(l(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[s];if(!a(t))return r(e,s,t,o);for(var u,c,f,h=[],g=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,b=new RegExp(t.source,g+"g");(u=r(m,b,s))&&!((c=b.lastIndex)>v&&(C(h,$(s,v,u.index)),u.length>1&&u.index<s.length&&i(w,h,d(u,1)),f=u[0].length,v=c,h.length>=o));)b.lastIndex===u.index&&b.lastIndex++;return v===s.length?!f&&_(b,"")||C(h,""):C(h,$(s,v)),h.length>o?d(h,0,o):h}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r(e,this,t,n)}:e,[function(e,n){var i=l(this),o=null==e?void 0:g(e,t);return o?r(o,e,i,n):r(s,p(i),e,n)},function(t,i){var r=u(this),o=p(t),a=n(s,r,o,i,s!==e);if(a.done)return a.value;var l=c(r,RegExp),g=r.unicode,d=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(x?"g":"y"),m=new l(x?"^(?:"+r.source+")":r,d),b=void 0===i?4294967295:i>>>0;if(0===b)return[];if(0===o.length)return null===v(m,o)?[o]:[];for(var k=0,w=0,_=[];w<o.length;){m.lastIndex=x?0:w;var L,O=v(m,x?$(o,w):o);if(null===O||(L=y(h(m.lastIndex+(x?w:0)),o.length))===k)w=f(o,w,g);else{if(C(_,$(o,k,w)),_.length===b)return _;for(var I=1;I<=O.length-1;I++)if(C(_,O[I]),_.length===b)return _;w=k=L}}return C(_,$(o,k)),_}]}),!!k((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),x)},352:function(t,e,n){},353:function(t,e,n){},354:function(t,e,n){},355:function(t,e,n){},356:function(t,e,n){},357:function(t,e,n){},371:function(t,e,n){"use strict";n(375),n(345),n(188),n(115),n(35),n(7),n(16),n(190),n(200),n(201),n(195),n(55),n(346),n(348),n(349),n(350),n(83),n(351),n(82),n(378),n(110);var i=n(202),r=n.n(i),s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=r()(e,"title","");return r()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),o(t,i)},o=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return r.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var s=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||s?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},a={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=[],o=0;o<e.length&&!(r.length>=n);o++){var a=e[o];if(this.getPageLocalePath(a)===i&&this.isSearchable(a))if(s(t,a))r.push(a);else if(a.headers)for(var u=0;u<a.headers.length&&!(r.length>=n);u++){var l=a.headers[u];l.title&&s(t,a,l.title)&&r.push(Object.assign({},a,{path:a.path+"#"+l.slug,header:l}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},u=(n(379),n(31)),l=Object(u.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports;n(380);function c(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var f={name:"Navbar",components:{SidebarButton:Object(u.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports,NavLinks:n(373).a,SearchBox:l,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(c(this.$el,"paddingLeft"))+parseInt(c(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},h=(n(387),Object(u.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null));e.a=h.exports},373:function(t,e,n){"use strict";var i=n(53),r=(n(112),n(83),n(16),n(55),n(110),n(7),n(191),n(82),n(190),n(346),n(348),n(349),n(350),n(344)),s=n(374),o=n(203),a=n.n(o),u={name:"DropdownLink",components:{NavLink:r.a,DropdownTransition:s.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return a()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},l=(n(385),n(31)),c=Object(l.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports,f=n(338),h={name:"NavLinks",components:{NavLink:r.a,DropdownLink:c},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,s=this.$site.themeConfig.locales||{},o={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(i){var o,a=e[i],u=s[i]&&s[i].label||a.lang;return a.lang===t.$lang?o=n:(o=n.replace(t.$localeConfig.path,i),r.some((function(t){return t.path===o}))||(o=i)),{text:u,link:o}}))};return[].concat(Object(i.a)(this.userNav),[o])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(f.j)(t),{items:(t.items||[]).map(f.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},p=(n(386),Object(l.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=p.exports},374:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(384),n(31)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},375:function(t,e,n){var i=n(1),r=n(376);i({global:!0,forced:parseInt!=r},{parseInt:r})},376:function(t,e,n){var i=n(0),r=n(3),s=n(2),o=n(17),a=n(340).trim,u=n(341),l=i.parseInt,c=i.Symbol,f=c&&c.iterator,h=/^[+-]?0x/i,p=s(h.exec),g=8!==l(u+"08")||22!==l(u+"0x16")||f&&!r((function(){l(Object(f))}));t.exports=g?function(t,e){var n=a(o(t));return l(n,e>>>0||(p(h,n)?16:10))}:l},377:function(t,e,n){var i=n(84).PROPER,r=n(3),s=n(341);t.exports=function(t){return r((function(){return!!s[t]()||"​᠎"!=="​᠎"[t]()||i&&s[t].name!==t}))}},378:function(t,e,n){"use strict";var i,r=n(1),s=n(2),o=n(33).f,a=n(57),u=n(17),l=n(121),c=n(26),f=n(122),h=n(23),p=s("".endsWith),g=s("".slice),d=Math.min,v=f("endsWith");r({target:"String",proto:!0,forced:!!(h||v||(i=o(String.prototype,"endsWith"),!i||i.writable))&&!v},{endsWith:function(t){var e=u(c(this));l(t);var n=arguments.length>1?arguments[1]:void 0,i=e.length,r=void 0===n?i:d(a(n),i),s=u(t);return p?p(e,s,r):g(e,r-s.length,r)===s}})},379:function(t,e,n){"use strict";n(352)},380:function(t,e,n){"use strict";n(353)},381:function(t,e,n){"use strict";var i=n(1),r=n(382);i({target:"String",proto:!0,forced:n(383)("link")},{link:function(t){return r(this,"a","href",t)}})},382:function(t,e,n){var i=n(2),r=n(26),s=n(17),o=/"/g,a=i("".replace);t.exports=function(t,e,n,i){var u=s(r(t)),l="<"+e;return""!==n&&(l+=" "+n+'="'+a(s(i),o,"&quot;")+'"'),l+">"+u+"</"+e+">"}},383:function(t,e,n){var i=n(3);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},384:function(t,e,n){"use strict";n(354)},385:function(t,e,n){"use strict";n(355)},386:function(t,e,n){"use strict";n(356)},387:function(t,e,n){"use strict";n(357)}}]);