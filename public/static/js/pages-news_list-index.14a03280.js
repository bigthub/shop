(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news_list-index"],{"0d84":function(t,e,i){var n=i("5216");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("c9a3e5fa",n,!0,{sourceMap:!1,shadowMode:!1})},"0f26":function(t,e,i){"use strict";i.r(e);var n=i("6d2a"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"187b":function(t,e,i){"use strict";var n=i("c1b1"),a=i.n(n);a.a},"42da":function(t,e,i){"use strict";var n=i("0d84"),a=i.n(n);a.a},5216:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-4bff0b6f]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-4bff0b6f]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex}.home .homeCon[data-v-4bff0b6f]{-webkit-border-radius:%?50?%;border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-4bff0b6f]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f44939!important}.home .homeCon .iconfont[data-v-4bff0b6f]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-4bff0b6f]{width:%?86?%;height:%?86?%;-webkit-border-radius:50%;border-radius:50%;margin:0 auto}.home .pictrue .image[data-v-4bff0b6f]{width:100%;height:100%;-webkit-border-radius:50%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"6d2a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62"),a={name:"Home",props:{},data:function(){return{top:"545"}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){}};e.default=a},"6fba":function(t,e,i){"use strict";i.r(e);var n=i("c9f4"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"8b05":function(t,e,i){"use strict";i.r(e);var n=i("d616"),a=i("0f26");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("42da");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"4bff0b6f",null,!1,n["a"],o);e["default"]=u.exports},b462:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getIndexData=r,e.getLogo=o,e.setFormId=s,e.setCouponReceive=u,e.getCoupons=d,e.getUserCoupons=c,e.getNewCoupon=l,e.getArticleCategoryList=f,e.getArticleList=v,e.getArticleHotList=g,e.getArticleBannerList=h,e.getArticleDetails=p,e.loginMobile=b,e.verifyCode=w,e.registerVerify=m,e.phoneRegister=_,e.phoneRegisterReset=L,e.phoneLogin=A,e.switchH5Login=C,e.bindingPhone=y,e.bindingUserPhone=x,e.logout=k,e.getTemlIds=z,e.pink=M,e.getCity=$,e.getLiveList=E,e.getDiy=P,e.follow=H,e.updatePhone=O,e.getCouponV2=B,e.getCouponNewUser=R,e.category=S,e.searchList=U,e.clearSearch=j;var a=n(i("b2c4"));function r(){return a.default.get("v2/index",{},{noAuth:!0})}function o(){return a.default.get("wechat/get_logo",{},{noAuth:!0})}function s(t){return a.default.post("wechat/set_form_id",{formId:t})}function u(t){return a.default.post("coupon/receive",{couponId:t})}function d(t){return a.default.get("v2/coupons",t,{noAuth:!0})}function c(t,e){return a.default.get("coupons/user/"+t,e)}function l(){return a.default.get("v2/new_coupon")}function f(){return a.default.get("article/category/list",{},{noAuth:!0})}function v(t,e){return a.default.get("article/list/"+t,e,{noAuth:!0})}function g(){return a.default.get("article/hot/list",{},{noAuth:!0})}function h(){return a.default.get("article/banner/list",{},{noAuth:!0})}function p(t){return a.default.get("article/details/"+t,{},{noAuth:!0})}function b(t){return a.default.post("login/mobile",t,{noAuth:!0})}function w(){return a.default.get("verify_code",{},{noAuth:!0})}function m(t,e,i,n){return a.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:i,code:n},{noAuth:!0})}function _(t){return a.default.post("register",t,{noAuth:!0})}function L(t){return a.default.post("register/reset",t,{noAuth:!0})}function A(t){return a.default.post("login",t,{noAuth:!0})}function C(){return a.default.post("switch_h5",{from:"wechat"})}function y(t){return a.default.post("binding",t,{noAuth:!0})}function x(t){return a.default.post("user/binding",t)}function k(){return a.default.get("logout")}function z(){return a.default.get("wechat/teml_ids",{},{noAuth:!0})}function M(){return a.default.get("pink",{},{noAuth:!0})}function $(){return a.default.get("city_list",{},{noAuth:!0})}function E(t,e){return a.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})}function P(){return a.default.get("v2/diy/get_diy/moren",{},{noAuth:!0})}function H(){return a.default.get("wechat/follow",{},{noAuth:!0})}function O(t){return a.default.post("user/updatePhone",t,{noAuth:!0})}function B(){return a.default.get("v2/get_today_coupon",{},{noAuth:!0})}function R(){return a.default.get("v2/new_coupon",{},{noAuth:!0})}function S(t){return a.default.get("category",t,{noAuth:!0})}function U(t){return a.default.get("v2/user/search_list",t,{noAuth:!0})}function j(){return a.default.get("v2/user/clean_search")}},bb7c:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-0d6ddbd4]{background-color:#fff!important}.newsList .swiper[data-v-0d6ddbd4]{width:100%;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?30?%}.newsList .swiper uni-swiper[data-v-0d6ddbd4]{width:100%;height:%?365?%;position:relative}.newsList .swiper .slide-image[data-v-0d6ddbd4]{width:100%;height:%?335?%;-webkit-border-radius:%?6?%;border-radius:%?6?%}.newsList .swiper .uni-swiper-dot[data-v-0d6ddbd4]{width:%?12?%!important;height:%?12?%!important;-webkit-border-radius:0;border-radius:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.newsList .swiper .uni-swiper-dot ~ .uni-swiper-dot[data-v-0d6ddbd4]{margin-left:%?5?%}.newsList .swiper .uni-swiper-dots.uni-swiper-dots-horizontal[data-v-0d6ddbd4]{margin-bottom:%?-15?%}.newsList .nav[data-v-0d6ddbd4]{padding:0 %?30?%;width:100%;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:%?43?%}.newsList .nav .item[data-v-0d6ddbd4]{display:inline-block;font-size:%?32?%;color:#999}.newsList .nav .item.on[data-v-0d6ddbd4]{color:#282828}.newsList .nav .item ~ .item[data-v-0d6ddbd4]{margin-left:%?46?%}.newsList .nav .item .line[data-v-0d6ddbd4]{width:%?24?%;height:%?4?%;-webkit-border-radius:%?2?%;border-radius:%?2?%;margin:%?10?% auto 0 auto}.newsList .list .item[data-v-0d6ddbd4]{margin:0 %?30?%;border-bottom:%?1?% solid #f0f0f0;padding:%?35?% 0}.newsList .list .item .pictrue[data-v-0d6ddbd4]{width:%?250?%;height:%?156?%}.newsList .list .item .pictrue uni-image[data-v-0d6ddbd4]{width:100%;height:100%;-webkit-border-radius:%?6?%;border-radius:%?6?%}.newsList .list .item .text[data-v-0d6ddbd4]{width:%?420?%;height:%?156?%;font-size:%?24?%;color:#999}.newsList .list .item .text .name[data-v-0d6ddbd4]{font-size:%?30?%;color:#282828}.newsList .list .item .picList .pictrue[data-v-0d6ddbd4]{width:%?335?%;height:%?210?%;margin-top:%?30?%}.newsList .list .item .picList.on .pictrue[data-v-0d6ddbd4]{width:%?217?%;height:%?136?%}.newsList .list .item .picList .pictrue uni-image[data-v-0d6ddbd4]{width:100%;height:100%;-webkit-border-radius:%?6?%;border-radius:%?6?%}.newsList .list .item .time[data-v-0d6ddbd4]{text-align:right;font-size:%?24?%;color:#999;margin-top:%?22?%}body.?%PAGE?%[data-v-0d6ddbd4]{background-color:#fff!important}',""]),t.exports=e},c1b1:function(t,e,i){var n=i("bb7c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("75a368fc",n,!0,{sourceMap:!1,shadowMode:!1})},c9f4:function(t,e,i){"use strict";var n=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("b462"),r=n(i("8b05")),o={components:{home:r.default},data:function(){return{imgUrls:[],articleList:[],indicatorDots:!1,circular:!0,autoplay:!0,interval:3e3,duration:500,navList:[],active:0,page:1,limit:8,status:!1,scrollLeft:0}},onShow:function(){this.getArticleHot(),this.getArticleBanner(),this.getArticleCate(),this.status=!1,this.page=1,this.articleList=[],this.getCidArticle()},onReachBottom:function(){this.getCidArticle()},methods:{getArticleHot:function(){var t=this;(0,a.getArticleHotList)().then((function(e){t.$set(t,"articleList",e.data)}))},getArticleBanner:function(){var t=this;(0,a.getArticleBannerList)().then((function(e){t.imgUrls=e.data}))},getCidArticle:function(){var t=this;if(0!=t.active){var e=t.limit,i=t.page,n=t.articleList;t.status||(0,a.getArticleList)(t.active,{page:i,limit:e}).then((function(i){var a=[],r=i.length;a=n.concat(i.data),t.page++,t.$set(t,"articleList",a),t.status=e>r,t.page=t.page}))}},getArticleCate:function(){var t=this;(0,a.getArticleCategoryList)().then((function(e){t.$set(t,"navList",e.data)}))},tabSelect:function(t,e){this.active=t,this.scrollLeft=60*e,0==this.active?this.getArticleHot():(this.$set(this,"articleList",[]),this.page=1,this.status=!1,this.getCidArticle())}}};e.default=o},d616:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color-red",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},r=[]},e6a4:function(t,e,i){"use strict";i.r(e);var n=i("f122"),a=i("6fba");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("187b");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"0d6ddbd4",null,!1,n["a"],o);e["default"]=u.exports},f122:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"newsList"},[t.imgUrls.length>0?n("v-uni-view",{staticClass:"swiper"},[n("v-uni-swiper",{attrs:{"indicator-dots":"true",autoplay:t.autoplay,circular:t.circular,interval:t.interval,duration:t.duration,"indicator-color":"rgba(102,102,102,0.3)","indicator-active-color":"#666"}},[t._l(t.imgUrls,(function(t,e){return[n("v-uni-swiper-item",[n("v-uni-navigator",{attrs:{url:"/pages/news_details/index?id="+t.id}},[n("v-uni-image",{staticClass:"slide-image",attrs:{src:t.image_input[0]}})],1)],1)]}))],2)],1):t._e(),t.navList.length>0?n("v-uni-view",{staticClass:"nav"},[n("v-uni-scroll-view",{staticClass:"scroll-view_x",staticStyle:{width:"auto",overflow:"hidden"},attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},[t._l(t.navList,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"item",class:t.active==e.id?"on":"",attrs:{id:"news_"+e.id},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tabSelect(e.id,i)}}},[n("v-uni-view",[t._v(t._s(e.title))]),t.active==e.id?n("v-uni-view",{staticClass:"line bg-color"}):t._e()],1)]}))],2)],1):t._e(),n("v-uni-view",{staticClass:"list"},[t._l(t.articleList,(function(e,i){return[1==e.image_input.length?n("v-uni-navigator",{key:i+"_0",staticClass:"item acea-row row-between-wrapper",attrs:{url:"/pages/news_details/index?id="+e.id,"hover-class":"none"}},[n("v-uni-view",{staticClass:"text acea-row row-column-between"},[n("v-uni-view",{staticClass:"name line2"},[t._v(t._s(e.title))]),n("v-uni-view",[t._v(t._s(e.add_time))])],1),n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:e.image_input[0]}})],1)],1):2==e.image_input.length?n("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/news_details/index?id="+e.id,"hover-class":"none"}},[n("v-uni-view",{staticClass:"title line1"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"picList acea-row row-between-wrapper"},[t._l(e.image_input,(function(t,e){return[n("v-uni-view",{key:e+"_0",staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:t}})],1)]}))],2),n("v-uni-view",{staticClass:"time"},[t._v(t._s(e.add_time))])],1):e.image_input.length>2?n("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/news_details/index?id="+e.id,"hover-class":"none"}},[n("v-uni-view",{staticClass:"title line1"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"picList on acea-row row-between-wrapper"},[t._l(e.image_input,(function(t,e){return[n("v-uni-view",{key:e+"_0",staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:t}})],1)]}))],2),n("v-uni-view",{staticClass:"time"},[t._v(t._s(e.add_time))])],1):t._e()]}))],2)],1),0!=t.articleList.length||1==t.page&&0!=t.active?t._e():n("v-uni-view",{staticClass:"noCommodity"},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:i("ffee")}})],1)],1),n("home")],1)},r=[]},ffee:function(t,e,i){t.exports=i.p+"static/img/noNews.5f227afa.png"}}]);