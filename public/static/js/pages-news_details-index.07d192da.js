(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news_details-index"],{"00c0":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("b462"),o=i(a("42f9")),r=i(a("8b05")),s=i(a("f1c3")),c={components:{shareInfo:o.default,home:r.default,"jyf-parser":s.default},data:function(){return{id:0,articleInfo:[],store_info:{},content:"",shareInfoStatus:!1,tagStyle:{img:"width:100%;"}}},onLoad:function(t){t.hasOwnProperty("id")?this.id=t.id:history.back()},onShow:function(){this.getArticleOne()},methods:{getArticleOne:function(){var t=this,e=this;(0,n.getArticleDetails)(e.id).then((function(a){uni.setNavigationBarTitle({title:a.data.title.substring(0,7)+"..."}),e.$set(e,"articleInfo",a.data),e.$set(e,"store_info",a.data.store_info?a.data.store_info:{}),e.content=a.data.content,t.$wechat.isWeixin()&&t.setShareInfo()}))},listenerActionSheet:function(){this.shareInfoStatus=!0},setShareInfoStatus:function(){this.shareInfoStatus=!1},setShareInfo:function(){var t=location.href,e={desc:this.articleInfo.synopsis,title:this.articleInfo.title,link:t,imgUrl:this.articleInfo.image_input.length?this.articleInfo.image_input[0]:""};this.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],e)}}};e.default=c},"0a26":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{shareInfoStatus:{type:Boolean,default:!1}},data:function(){return{}},mounted:function(){},methods:{shareInfoClose:function(){this.$emit("setShareInfoStatus")}}};e.default=i},"0d84":function(t,e,a){var i=a("5216");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("c9a3e5fa",i,!0,{sourceMap:!1,shadowMode:!1})},"0f26":function(t,e,a){"use strict";a.r(e);var i=a("6d2a"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"38fb":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.poster-first[data-v-1397b0ea]{overscroll-behavior:contain}.mask-share[data-v-1397b0ea]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99}.mask-share uni-image[data-v-1397b0ea]{width:100%;height:100%}',""]),t.exports=e},"42da":function(t,e,a){"use strict";var i=a("0d84"),n=a.n(i);n.a},"42f9":function(t,e,a){"use strict";a.r(e);var i=a("f306"),n=a("71f0");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("a8ac");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"1397b0ea",null,!1,i["a"],r);e["default"]=c.exports},"46ef":function(t,e,a){var i=a("fe09");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1c5250e2",i,!0,{sourceMap:!1,shadowMode:!1})},5147:function(t,e,a){var i=a("38fb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("4a94e79a",i,!0,{sourceMap:!1,shadowMode:!1})},5216:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".pictrueBox[data-v-4bff0b6f]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-4bff0b6f]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex}.home .homeCon[data-v-4bff0b6f]{-webkit-border-radius:%?50?%;border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-4bff0b6f]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f44939!important}.home .homeCon .iconfont[data-v-4bff0b6f]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-4bff0b6f]{width:%?86?%;height:%?86?%;-webkit-border-radius:50%;border-radius:50%;margin:0 auto}.home .pictrue .image[data-v-4bff0b6f]{width:100%;height:100%;-webkit-border-radius:50%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"6d2a":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("2f62"),n={name:"Home",props:{},data:function(){return{top:"545"}},computed:(0,i.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){}};e.default=n},"71f0":function(t,e,a){"use strict";a.r(e);var i=a("0a26"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"8b05":function(t,e,a){"use strict";a.r(e);var i=a("d616"),n=a("0f26");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("42da");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"4bff0b6f",null,!1,i["a"],r);e["default"]=c.exports},a8ac:function(t,e,a){"use strict";var i=a("5147"),n=a.n(i);n.a},d596:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={jyfParser:a("f1c3").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"newsDetail"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.articleInfo.title))]),a("v-uni-view",{staticClass:"list acea-row row-middle"},[a("v-uni-view",{staticClass:"label"},[t._v(t._s(t.articleInfo.catename))]),a("v-uni-view",{staticClass:"item"},[t._v(t._s(t.articleInfo.add_time))]),a("v-uni-view",{staticClass:"item"},[a("v-uni-text",{staticClass:"iconfont icon-liulan"}),t._v(t._s(t.articleInfo.visit))],1)],1),a("v-uni-view",{staticClass:"conters"},[a("jyf-parser",{ref:"article",attrs:{html:t.content,"tag-style":t.tagStyle}})],1),t.store_info.id?a("v-uni-navigator",{staticClass:"picTxt acea-row row-between-wrapper",attrs:{url:"/pages/goods_details/index?id="+t.store_info.id,"hover-class":"none"}},[a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:t.store_info.image}})],1),a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"name line1"},[t._v(t._s(t.store_info.store_name))]),a("v-uni-view",{staticClass:"money font-color"},[t._v("￥"),a("v-uni-text",{staticClass:"num"},[t._v(t._s(t.store_info.price))])],1),a("v-uni-view",{staticClass:"y_money"},[t._v("￥"+t._s(t.store_info.ot_price))])],1),a("v-uni-navigator",{staticClass:"label"},[a("v-uni-text",{staticClass:"span"},[t._v("查看商品")])],1)],1):t._e(),this.$wechat.isWeixin()?a("v-uni-button",{staticClass:"bnt bg-color",attrs:{"hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.listenerActionSheet.apply(void 0,arguments)}}},[t._v("和好友一起分享")]):t._e()],1),a("shareInfo",{attrs:{shareInfoStatus:t.shareInfoStatus},on:{setShareInfoStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.setShareInfoStatus.apply(void 0,arguments)}}}),a("home")],1)},o=[]},d616:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticStyle:{"touch-action":"none"}},[a("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?a("v-uni-view",{staticClass:"homeCon bg-color-red",class:!0===t.homeActive?"on":""},[a("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index"}}),a("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart"}}),a("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index"}})],1):t._e(),a("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},o=[]},eacc:function(t,e,a){"use strict";a.r(e);var i=a("00c0"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},f306:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.shareInfoStatus?a("v-uni-view",{staticClass:"poster-first"},[a("v-uni-view",{staticClass:"mask-share"},[a("v-uni-image",{attrs:{src:"/static/images/share-info.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shareInfoClose.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),(!1).apply(void 0,arguments)}}})],1)],1):t._e()},o=[]},f7be:function(t,e,a){"use strict";var i=a("46ef"),n=a.n(i);n.a},fe09:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-167dda5a]{background-color:#fff!important}.newsDetail .title[data-v-167dda5a]{padding:0 %?30?%;font-size:%?34?%;color:#282828;font-weight:700;margin:%?45?% 0 %?23?% 0;line-height:1.5}.newsDetail .list[data-v-167dda5a]{margin:0 %?30?%;padding-bottom:%?25?%}.newsDetail .list .label[data-v-167dda5a]{font-size:%?30?%;color:#b1b2b3}.newsDetail .list .item[data-v-167dda5a]{margin-left:%?27?%;font-size:%?30?%;color:#b1b2b3}.newsDetail .list .item .iconfont[data-v-167dda5a]{font-size:%?28?%;margin-right:%?10?%}.newsDetail .list .item .iconfont.icon-shenhezhong[data-v-167dda5a]{font-size:%?26?%}.newsDetail .conters[data-v-167dda5a]{padding:0 %?30?%;font-size:%?32?%;color:#8a8b8c;line-height:1.7}.newsDetail .picTxt[data-v-167dda5a]{width:%?690?%;height:%?200?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;border:1px solid #e1e1e1;position:relative;margin:%?30?%}.newsDetail .picTxt .pictrue[data-v-167dda5a]{width:%?200?%;height:%?200?%}.newsDetail .picTxt .pictrue uni-image[data-v-167dda5a]{width:100%;height:100%;-webkit-border-radius:%?20?% 0 0 %?20?%;border-radius:%?20?% 0 0 %?20?%;display:block}.newsDetail .picTxt .text[data-v-167dda5a]{width:%?460?%}.newsDetail .picTxt .text .name[data-v-167dda5a]{font-size:%?30?%;color:#282828}.newsDetail .picTxt .text .money[data-v-167dda5a]{font-size:%?24?%;margin-top:%?40?%;font-weight:700}.newsDetail .picTxt .text .money .num[data-v-167dda5a]{font-size:%?36?%}.newsDetail .picTxt .text .y_money[data-v-167dda5a]{font-size:%?26?%;color:#999;text-decoration:line-through}.newsDetail .picTxt .label[data-v-167dda5a]{position:absolute;background-color:#303131;width:%?160?%;height:%?50?%;right:%?-7?%;-webkit-border-radius:%?25?% 0 %?6?% %?25?%;border-radius:%?25?% 0 %?6?% %?25?%;text-align:center;line-height:%?50?%;bottom:%?24?%}.newsDetail .picTxt .label .span[data-v-167dda5a]{background-image:-webkit-gradient(linear,left top,right top,from(#fff71e),to(#f9b513));background-image:-webkit-linear-gradient(left,#fff71e,#f9b513);background-image:linear-gradient(90deg,#fff71e 0,#f9b513);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.newsDetail .picTxt .label[data-v-167dda5a]:after{content:" ";position:absolute;width:0;height:0;border-bottom:%?8?% solid #303131;border-right:%?8?% solid transparent;top:%?-7?%;right:0}.newsDetail .bnt[data-v-167dda5a]{color:#fff;font-size:%?30?%;width:%?690?%;height:%?90?%;-webkit-border-radius:%?45?%;border-radius:%?45?%;margin:%?48?% auto;text-align:center;line-height:%?90?%}body.?%PAGE?%[data-v-167dda5a]{background-color:#fff!important}',""]),t.exports=e},ffc5:function(t,e,a){"use strict";a.r(e);var i=a("d596"),n=a("eacc");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("f7be");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"167dda5a",null,!1,i["a"],r);e["default"]=c.exports}}]);