(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{358:function(e,t,n){},388:function(e,t,n){"use strict";n(358)},411:function(e,t,n){"use strict";n.r(t);var o={events:{FEEDBACK_HELPFUL:"feedbackHelpful",FEEDBACK_IMPORTANT:"feedbackImportant",FEEDBACK_GENERAL:"feedbackGeneral",NOT_FOUND:"notFound"},trackEvent:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"undefined"!=typeof window&&window.Countly.q.push(["add_event",{key:e,segmentation:t}])}},a={name:"NotFound",components:{Navbar:n(371).a},created:function(){void 0!==this.$ssrContext&&(this.$ssrContext.userHeadTags+='<base href="/" />')},mounted:function(){o.trackEvent(o.events.NOT_FOUND,{path:this.$route.path,referrer:"undefined"!=typeof window?document.referrer:null})},methods:{searchFocus:function(e){e.preventDefault(),document.querySelector("#search-form input").focus()}}},r=(n(388),n(31)),s=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"theme-container page-nosidebar"},[n("Navbar"),e._v(" "),n("div",{staticClass:"theme-default-content"},[n("h1",[e._v("😯 404")]),e._v(" "),n("h3",[e._v("Oops! This page has moved or no longer exists")]),e._v(" "),n("p",[e._v("\n      We've logged this issue and invite you to choose your next adventure\n      below.\n    ")]),e._v(" "),n("p",[n("RouterLink",{attrs:{to:"/"}},[e._v("\n        Return home\n      ")]),e._v("\n      or "),n("a",{attrs:{href:"#"},on:{click:e.searchFocus}},[e._v("try a search")])],1)])],1)}),[],!1,null,"26a00bd0",null);t.default=s.exports}}]);