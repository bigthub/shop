(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order_pay_status-index"],{"0164":function(t,e,n){"use strict";n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.auth=i,e.openPaySubscribe=o,e.openOrderSubscribe=a,e.openExtrctSubscribe=s,e.openPinkSubscribe=u,e.openBargainSubscribe=d,e.openOrderRefundSubscribe=c,e.openRechargeSubscribe=p,e.openEextractSubscribe=f,e.subscribe=l;var r=n("44a9");function i(){var t={},e=uni.getStorageSync(r.SUBSCRIBE_MESSAGE);return t=e?JSON.parse(e):{},t}function o(){var t=i();return l([t.oreder_takever,t.order_pay_success,t.order_new])}function a(){var t=i();return l([t.order_deliver_success,t.order_postage_success,t.order_clone])}function s(){var t=i();return l([t.user_extract])}function u(){var t=i();return l([t.pink_true])}function d(){var t=i();return l([t.bargain_success])}function c(){var t=i();return l([t.order_refund])}function p(){var t=i();return l([t.recharge_success])}function f(){var t=i();return l([t.user_extract])}function l(t){var e=wx;return new Promise((function(n,r){e.requestSubscribeMessage({tmplIds:t,success:function(t){return n(t)},fail:function(t){return n(t)}})}))}},"0780":function(t,e,n){"use strict";var r=n("a7d5"),i=n.n(r);i.a},"54f2":function(t,e,n){"use strict";n.r(e);var r=n("eb81"),i=n("e9a5");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("0780");var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"51d96616",null,!1,r["a"],a);e["default"]=u.exports},"5cea":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("8527"),i=(n("0164"),n("b344")),o=n("2f62"),a={components:{},data:function(){return{orderId:"",order_pay_info:{paid:1,_status:{}},isAuto:!1,isShowAuth:!1,status:0,msg:"",couponsHidden:!0,couponList:[]}},computed:(0,o.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getOrderPayInfo()},deep:!0}},onLoad:function(t){if(!t.order_id)return this.$util.Tips({title:"缺少参数无法查看订单支付状态"},{tab:3,url:1});this.orderId=t.order_id,this.status=t.status||0,this.msg=t.msg||"",this.isLogin?this.getOrderPayInfo():(0,i.toLogin)()},methods:{openTap:function(){this.$set(this,"couponsHidden",!this.couponsHidden)},onLoadFun:function(){this.getOrderPayInfo()},getOrderPayInfo:function(){var t=this;uni.showLoading({title:"正在加载中"}),(0,r.getOrderDetail)(t.orderId).then((function(e){uni.hideLoading(),t.$set(t,"order_pay_info",e.data),uni.setNavigationBarTitle({title:e.data.paid?"支付成功":"支付失败"}),t.getOrderCoupon()})).catch((function(t){uni.hideLoading()}))},getOrderCoupon:function(){var t=this;t.orderId,(0,r.orderCoupon)(t.orderId).then((function(e){e.data,t.couponList=e.data}))},goIndex:function(t){uni.navigateTo({url:"/pages/index/index"})},goOrderDetails:function(t){var e=this;uni.navigateTo({url:"/pages/users/order_details/index?order_id="+e.orderId})}}};e.default=a}).call(this,n("5a52")["default"])},"6c52":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.coupons .title[data-v-51d96616]{margin:%?30?% 0 %?25?% 0}.coupons .title .line[data-v-51d96616]{width:%?70?%;height:1px;background:#dcdcdc}.coupons .title .name[data-v-51d96616]{font-size:%?24?%;color:#999;margin:0 %?10?%}.coupons .list[data-v-51d96616]{padding:0 %?20?%}.coupons .list .item[data-v-51d96616]{margin-bottom:%?20?%;-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.06);box-shadow:0 2px 10px 0 rgba(0,0,0,.06)}.coupons .list .item .price[data-v-51d96616]{width:%?236?%;height:%?160?%;font-size:%?26?%;color:#fff;font-weight:800}.coupons .list .item .price uni-text[data-v-51d96616]{font-size:%?64?%}.coupons .list .item .text[data-v-51d96616]{width:%?385?%}.coupons .list .item .text .name[data-v-51d96616]{font-size:#282828;font-size:%?30?%}.coupons .list .item .text .priceMin[data-v-51d96616]{font-size:%?24?%;color:#999;margin-top:%?10?%}.coupons .list .item .text .time[data-v-51d96616]{font-size:%?24?%;color:#999;margin-top:%?15?%}.coupons .list .open[data-v-51d96616]{font-size:%?24?%;color:#999;margin-top:%?30?%}.coupons .list .open .iconfont[data-v-51d96616]{font-size:%?25?%;margin:%?5?% 0 0 %?10?%}.payment-status[data-v-51d96616]{background-color:#fff;margin:%?195?% %?30?% 0 %?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding:%?1?% 0 %?28?% 0}.payment-status .icons[data-v-51d96616]{font-size:%?70?%;width:%?140?%;height:%?140?%;-webkit-border-radius:50%;border-radius:50%;color:#fff;text-align:center;line-height:%?140?%;text-shadow:0 4px 0 #df1e14;border:%?6?% solid #f5f5f5;margin:%?-76?% auto 0 auto;background-color:#999}.payment-status .iconfont.fail[data-v-51d96616]{text-shadow:0 4px 0 #7a7a7a}.payment-status .status[data-v-51d96616]{font-size:%?32?%;font-weight:700;text-align:center;margin:%?25?% 0 %?37?% 0}.payment-status .wrapper[data-v-51d96616]{border:%?1?% solid #eee;margin:0 %?30?% %?47?% %?30?%;padding:%?35?% 0;border-left:0;border-right:0}.payment-status .wrapper .item[data-v-51d96616]{font-size:%?28?%;color:#282828}.payment-status .wrapper .item ~ .item[data-v-51d96616]{margin-top:%?20?%}.payment-status .wrapper .item .itemCom[data-v-51d96616]{color:#666}.payment-status .returnBnt[data-v-51d96616]{width:%?630?%;height:%?86?%;-webkit-border-radius:%?50?%;border-radius:%?50?%;color:#fff;font-size:%?30?%;text-align:center;line-height:%?86?%;margin:0 auto %?20?% auto}',""]),t.exports=e},8527:function(t,e,n){"use strict";var r=n("4ea4");n("a15b"),Object.defineProperty(e,"__esModule",{value:!0}),e.getCartCounts=o,e.getCartList=a,e.getResetCart=s,e.changeCartNum=u,e.cartDel=d,e.getOrderList=c,e.orderProduct=p,e.orderComment=f,e.orderPay=l,e.orderData=v,e.orderCancel=_,e.orderDel=w,e.getOrderDetail=g,e.orderAgain=m,e.orderTake=b,e.express=h,e.ordeRefundReason=y,e.orderRefundVerify=C,e.orderConfirm=x,e.getCouponsOrderPrice=k,e.orderCreate=O,e.postOrderComputed=I,e.orderCoupon=P,e.offlineCheckPrice=S,e.offlineCreate=L,e.orderOfflinePayType=T,e.orderInvoiceList=z,e.orderInvoiceDetail=E,e.aliPay=B;var i=r(n("b2c4"));function o(t){return i.default.get("cart/count",{numType:void 0===t?0:t})}function a(t){return i.default.get("cart/list",t)}function s(t){return i.default.post("v2/reset_cart",t)}function u(t,e){return i.default.post("cart/num",{id:t,number:e})}function d(t){return"object"===typeof t&&(t=t.join(",")),i.default.post("cart/del",{ids:t})}function c(t){return i.default.get("order/list",t)}function p(t){return i.default.post("order/product",{unique:t})}function f(t){return i.default.post("order/comment",t)}function l(t){return i.default.post("order/pay",t)}function v(){return i.default.get("order/data")}function _(t){return i.default.post("order/cancel",{id:t})}function w(t){return i.default.post("order/del",{uni:t})}function g(t){return i.default.get("order/detail/"+t)}function m(t){return i.default.post("order/again",{uni:t})}function b(t){return i.default.post("order/take",{uni:t})}function h(t){return i.default.get("order/express/"+t)}function y(){return i.default.get("order/refund/reason")}function C(t){return i.default.post("order/refund/verify",t)}function x(t,e){return i.default.post("order/confirm",{cartId:t,new:e})}function k(t,e){return i.default.get("coupons/order/"+t,e)}function O(t,e){return i.default.post("order/create/"+t,e)}function I(t,e){return i.default.post("order/computed/"+t,e)}function P(t){return i.default.post("v2/order/product_coupon/"+t)}function S(t){return i.default.post("order/offline/check/price",t)}function L(t){return i.default.post("order/offline/create",t)}function T(){return i.default.get("order/offline/pay/type")}function z(t){return i.default.get("v2/order/invoice_list",t)}function E(t){return i.default.get("v2/order/invoice_detail/".concat(t))}function B(t,e){return i.default.get("ali_pay",{key:t,quitUrl:e},{noAuth:!0})}},a7d5:function(t,e,n){var r=n("6c52");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("0b9d8ab8",r,!0,{sourceMap:!1,shadowMode:!1})},e9a5:function(t,e,n){"use strict";n.r(e);var r=n("5cea"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},eb81:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"payment-status"},[t.order_pay_info.paid||"offline"==t.order_pay_info.pay_type?n("v-uni-view",{staticClass:"iconfont icons icon-duihao2 bg-color"}):n("v-uni-view",{staticClass:"iconfont icons icon-iconfontguanbi bg-color"}),"offline"!=t.order_pay_info.pay_type?n("v-uni-view",{staticClass:"status"},[t._v(t._s(t.order_pay_info.paid?"订单支付成功":"订单支付失败"))]):n("v-uni-view",{staticClass:"status"},[t._v("订单创建成功")]),n("v-uni-view",{staticClass:"wrapper"},[n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[t._v("订单编号")]),n("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.orderId))])],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[t._v("下单时间")]),n("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.order_pay_info._pay_time))])],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[t._v("支付方式")]),n("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.order_pay_info._status._payType))])],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[t._v("支付金额")]),n("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.order_pay_info.pay_price))])],1),0==t.order_pay_info.paid&&"offline"!=t.order_pay_info.pay_type?n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[t._v("失败原因")]),n("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(2==t.status?"取消支付":t.msg))])],1):t._e()],1),0==t.status?n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goOrderDetails.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"returnBnt bg-color",attrs:{formType:"submit","hover-class":"none"}},[t._v("查看订单")])],1):t._e(),0==t.order_pay_info.paid&&1==t.status?n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goOrderDetails.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"returnBnt bg-color",attrs:{"hover-class":"none"}},[t._v("重新购买")])],1):t._e(),0==t.order_pay_info.paid&&2==t.status?n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goOrderDetails.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"returnBnt bg-color",attrs:{"hover-class":"none"}},[t._v("重新支付")])],1):t._e(),t.order_pay_info.pink_id&&0!=t.order_pay_info.paid&&2!=t.status&&1!=t.status?n("v-uni-button",{staticClass:"returnBnt cart-color",attrs:{formType:"submit","hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPink(t.order_pay_info.pink_id)}}},[t._v("邀请好友参团")]):n("v-uni-button",{staticClass:"returnBnt cart-color",attrs:{formType:"submit","hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goIndex.apply(void 0,arguments)}}},[t._v("返回首页")]),t.couponList.length?n("v-uni-view",{staticClass:"coupons"},[n("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[n("v-uni-view",{staticClass:"line"}),n("v-uni-view",{staticClass:"name"},[t._v("赠送优惠券")]),n("v-uni-view",{staticClass:"line"})],1),n("v-uni-view",{staticClass:"list"},[t._l(t.couponList,(function(e,r){return r<2||!t.couponsHidden?n("v-uni-view",{key:r,staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"price acea-row row-center-wrapper"},[n("v-uni-view",[t._v("￥"),n("v-uni-text",[t._v(t._s(e.coupon_price))])],1)],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.coupon_title))]),n("v-uni-view",{staticClass:"priceMin"},[t._v("满"+t._s(e.use_min_price)+"元可用")]),n("v-uni-view",{staticClass:"time"},[t._v("有效期:"+t._s(e.add_time?e.add_time+"-":"")+t._s(e.end_time))])],1)],1):t._e()})),n("v-uni-view",{staticClass:"open acea-row row-center-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openTap.apply(void 0,arguments)}}},[t._v(t._s(t.couponsHidden?"展开更多":"关闭展开")),n("v-uni-text",{staticClass:"iconfont",class:1==t.couponsHidden?"icon-xiangxia":"icon-xiangshang"})],1)],2)],1):t._e()],1)],1)},o=[]}}]);