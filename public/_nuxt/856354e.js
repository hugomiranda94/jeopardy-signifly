(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,r){var content=r(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(58).default)("56b15182",content,!0,{sourceMap:!1})},164:function(e,t,r){var content=r(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(58).default)("5e98fa4c",content,!0,{sourceMap:!1})},170:function(e,t,r){"use strict";r(33),r(25),r(32),r(13),r(47),r(26),r(48);var o=r(20),n=r(29);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.b)({overlay:"overlay"}))},l=f,v=(r(225),r(31)),component=Object(v.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("transition",{attrs:{name:"fade"}},[e.overlay.active?r("Overlay",{attrs:{item:e.overlay.item}}):e._e()],1),e._v(" "),r("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Overlay:r(230).default})},171:function(e,t,r){r(172),e.exports=r(173)},221:function(e,t,r){var content=r(222);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(58).default)("3a5d7764",content,!0,{sourceMap:!1})},222:function(e,t,r){var o=r(57),n=r(223),c=r(224),f=o(!1),l=n(c);f.push([e.i,'button,html{font-family:"Bureau Grot Compressed Black";text-transform:uppercase}@font-face{font-family:"Bureau Grot Compressed Black";src:url('+l+")}",""]),e.exports=f},224:function(e,t,r){e.exports=r.p+"fonts/BureauGrotCompressedBlack.25d2930.otf"},225:function(e,t,r){"use strict";r(163)},226:function(e,t,r){var o=r(57)(!1);o.push([e.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}',""]),e.exports=o},227:function(e,t,r){"use strict";r(164)},228:function(e,t,r){var o=r(57)(!1);o.push([e.i,'.overlay[data-v-54fe470f]{position:fixed;z-index:1;top:0;left:0;height:100vh;width:100vw;background:rgba(0,0,0,.95);color:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Bureau Grot Compressed Black",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}.overlay button[data-v-54fe470f]{cursor:pointer;padding:10px 20px;border-radius:5px;border:none;transition:all .3}.overlay button[data-v-54fe470f]:hover{opacity:.75}.overlay .team[data-v-54fe470f]{position:fixed;top:10px;left:10px;font-weight:600;text-transform:uppercase;font-size:30px}.overlay .cost[data-v-54fe470f]{top:10px;font-size:30px;background:#fff;color:#000}.overlay .cost[data-v-54fe470f],.overlay .time[data-v-54fe470f]{position:fixed;right:10px;font-weight:600;text-transform:uppercase;border-radius:5px;padding:0 10px}.overlay .time[data-v-54fe470f]{bottom:10px;font-size:40px;color:red}.overlay .answer[data-v-54fe470f],.overlay .question[data-v-54fe470f]{text-align:center;max-width:60vw;margin:0 auto}.overlay .question[data-v-54fe470f]{font-size:50px;color:#ff0;margin:50px 0}.overlay .answer[data-v-54fe470f],.overlay .question[data-v-54fe470f]{font-weight:600;text-transform:uppercase}.overlay .answer[data-v-54fe470f]{font-size:40px;display:flex;flex-direction:column;justify-content:center;align-items:center}.overlay .show-answer[data-v-54fe470f]{background:#fff;font-weight:600}.overlay .wrong[data-v-54fe470f]{background:red;color:#fff;font-weight:600}.overlay .right[data-v-54fe470f]{background:#47f82f;color:#000;font-weight:600}',""]),e.exports=o},229:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"getters",(function(){return n})),r.d(t,"mutations",(function(){return c}));r(44),r(28);var o=function(){return{overlay:{active:!1,item:{}},teams:[{name:"A",score:0},{name:"B",score:0}],currentTeam:"A"}},n={overlay:function(e){return e.overlay},teams:function(e){return e.teams},currentTeam:function(e){return e.currentTeam}},c={setOverlay:function(e,t){e.overlay=t},setTeams:function(e,t){e.teams=t},setCurrentTeam:function(e,t){e.currentTeam=t},addScore:function(e,t){e.teams.map((function(r){r.name===e.currentTeam&&(r.score+=t)}))},removeScore:function(e,t){e.teams.map((function(r){r.name===e.currentTeam&&(r.score-=t)}))}}},230:function(e,t,r){"use strict";r.r(t);r(33),r(25),r(32),r(13),r(47),r(26),r(48);var o=r(20),n=(r(55),r(29));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={props:{item:Object},data:function(){return{showAnswer:!1,timeLeft:30,interval:void 0}},methods:{closeOverlay:function(){this.$store.commit("setOverlay",{active:!1,item:{}})},addScore:function(e){this.$store.commit("addScore",e),this.$store.commit("setCurrentTeam","A"===this.currentTeam?"B":"A"),this.closeOverlay()},removeScore:function(e){this.$store.commit("removeScore",e),this.$store.commit("setCurrentTeam","A"===this.currentTeam?"B":"A"),this.closeOverlay()}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.b)({teams:"teams",currentTeam:"currentTeam"})),watch:{showAnswer:function(){clearInterval(this.interval)}},mounted:function(){var e=this;this.interval=setInterval((function(){e.timeLeft>0?e.timeLeft--:(e.showAnswer=!0,clearInterval(e.interval))}),1e3)},destroyed:function(){clearInterval(this.interval)}},l=f,v=(r(227),r(31)),component=Object(v.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"overlay"},[r("h1",{staticClass:"team"},[e._v("TEAM "+e._s(e.currentTeam))]),e._v(" "),r("p",{staticClass:"cost"},[e._v(e._s(e.item.cost))]),e._v(" "),r("p",{staticClass:"time"},[e._v(e._s(e.timeLeft))]),e._v(" "),r("div",{staticClass:"question"},[e._v("Q: "+e._s(e.item.question))]),e._v(" "),e.showAnswer?r("div",{staticClass:"answer"},[r("p",[e._v("A: "+e._s(e.item.answer))]),e._v(" "),r("div",{staticClass:"buttons"},[r("button",{staticClass:"wrong",on:{click:function(t){return e.removeScore(e.item.cost)}}},[e._v("WRONG")]),e._v(" "),0!=e.timeLeft?r("button",{staticClass:"right",on:{click:function(t){return e.addScore(e.item.cost)}}},[e._v("RIGHT")]):e._e()])]):r("button",{staticClass:"show-answer",on:{click:function(t){e.showAnswer=!0}}},[e._v("Answer")])])}),[],!1,null,"54fe470f",null);t.default=component.exports}},[[171,6,1,7]]]);