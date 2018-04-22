webpackJsonp([1],{"+I9d":function(t,s){},0:function(t,s){},"26/i":function(t,s){},"2CpJ":function(t,s){},"B+kh":function(t,s){},"Bj+F":function(t,s){},NBQg:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i={name:"Star",props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,a=Math.floor(s),i=0;i<a;i++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}},data:function(){return{}}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t,e){return s("span",{key:e,staticClass:"star-item",class:t})}))},staticRenderFns:[]};var r=e("VU/8")(i,n,!1,function(t){e("+I9d")},"data-v-2dbe2efa",null).exports,o={name:"Header",props:{seller:{type:Object}},data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},components:{star:r},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name",domProps:{textContent:t._s(t.seller.name)}})]),t._v(" "),e("div",{staticClass:"description",domProps:{textContent:t._s(t.seller.description+"/"+t.seller.deliveryTime)}}),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text",domProps:{textContent:t._s(t.seller.supports[0].description)}})]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count",domProps:{textContent:t._s(t.seller.supports.length+"个")}}),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text",domProps:{textContent:t._s(t.seller.bulletin)}}),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name",domProps:{textContent:t._s(t.seller.name)}}),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{key:a,staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[a].type]}),t._v(" "),e("span",{staticClass:"text",domProps:{textContent:t._s(t.seller.supports[a].description)}})])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content",domProps:{textContent:t._s(t.seller.bulletin)}})])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]};var c=e("VU/8")(o,l,!1,function(t){e("ibop")},"data-v-5d5c9b12",null).exports,d=e("mtWM"),p=e.n(d),u={name:"App",data:function(){return{seller:{},count:0}},created:function(){var t=this;p()({method:"get",url:"./static/json/data.json",responseType:"stream"}).then(function(s){t.seller=s.data.seller})},components:{"v-Header":c}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-Header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:{name:"goods"}}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:{name:"ratings"}}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:{name:"seller"}}},[t._v("商家")])],1)]),t._v(" "),e("router-view",{attrs:{seller:t.seller}})],1)},staticRenderFns:[]};var h=e("VU/8")(u,v,!1,function(t){e("Bj+F")},"data-v-21ff8338",null).exports,m=e("/ocq"),C=e("8+8L"),f=e("GQaK"),_={name:"shopCar",props:{selectFood:{type:Array,default:function(){return[{price:10,count:1}]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},computed:{totalPrice:function(){var t=0;return this.selectFood.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFood.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice?"还差￥"+(this.minPrice-this.totalPrice)+"元起送":"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"}}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcar"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"log-wrapper"},[e("div",{staticClass:"logo",class:{hightlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{hightlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num",domProps:{textContent:t._s(t.totalCount)}})]),t._v(" "),e("div",{staticClass:"price",class:{hightlight:t.totalPrice>0},domProps:{textContent:t._s("￥"+t.totalPrice+"元")}}),t._v(" "),e("div",{staticClass:"desc"},[t._v("\n            另需配送费￥"+t._s(t.deliveryPrice)+"元\n          ")])]),t._v(" "),e("div",{staticClass:"content-right"},[e("div",{staticClass:"pay",class:t.payClass,domProps:{textContent:t._s(t.payDesc)}})])])])},staticRenderFns:[]};var x=e("VU/8")(_,g,!1,function(t){e("26/i")},"data-v-2db9716a",null).exports,y={name:"Goods",props:{seller:{type:Object}},data:function(){return{goods:[],listHeigth:[],scrollY:0}},components:{axios:p.a,shopcar:x,BScroll:f.a},computed:{currentIndex:function(){for(var t=0;t<this.listHeigth.length;t++){var s=this.listHeigth[t],e=this.listHeigth[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0}},methods:{selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),a=e[t];console.log(e[t]),this.foodScroll.scrollToElement(a,300)}},_initScroll:function(){var t=this;this.menuScroll=new f.a(this.$refs.menuWrapper,{click:!0}),this.foodScroll=new f.a(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeigth.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeigth.push(s)}}},created:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],p()({method:"get",url:"./static/json/data.json",responseType:"stream"}).then(function(s){t.goods=s.data.goods,t.$nextTick(function(){t._initScroll(),t._calculateHeight()})})}},P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{key:a,staticClass:"menu-item",class:{current:t.currentIndex===a},on:{click:function(s){t.selectMenu(a,s)}}},[e("span",{staticClass:"text"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type > 0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{domProps:{textContent:t._s(s.name)}})])])}))]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{key:a,staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title",domProps:{textContent:t._s(s.name)}}),t._v(" "),e("ul",t._l(s.foods,function(s,a){return e("li",{key:a,staticClass:"food-item"},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name",domProps:{textContent:t._s(s.name)}}),t._v(" "),e("p",{staticClass:"desc",domProps:{textContent:t._s(s.description)}}),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count",domProps:{textContent:t._s("月售"+s.sellCount+"份")}}),e("span",{domProps:{textContent:t._s("好评率"+s.rating+"%")}})]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now",domProps:{textContent:t._s("￥"+s.price)}}),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old",domProps:{textContent:t._s("￥"+s.oldPrice)}})])])])}))])}))]),t._v(" "),e("shopcar",{attrs:{"delevery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}})],1)},staticRenderFns:[]};var w=e("VU/8")(y,P,!1,function(t){e("NBQg")},"data-v-55ec06a4",null).exports,b={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    I'm Seller\n")])},staticRenderFns:[]};var k=e("VU/8")({name:"Seller",data:function(){return{msg:"Welcome to Your Vue.js App"}}},b,!1,function(t){e("B+kh")},"data-v-08cc8da7",null).exports,S={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\r\n    I'm ratings\r\n")])},staticRenderFns:[]};var H=e("VU/8")({name:"Ratings",data:function(){return{msg:"Welcome to Your Vue.js App"}}},S,!1,function(t){e("2CpJ")},"data-v-2d4ec80e",null).exports;a.a.use(m.a),a.a.use(C.a);var N=new m.a({linkActiveClass:"active",routes:[{path:"/",redirect:"goods"},{path:"/goods",name:"goods",component:w},{path:"/ratings",name:"ratings",component:H},{path:"/seller",name:"seller",component:k}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:N,components:{App:h},template:"<App/>"})},ibop:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.50bcb524d7e16d98a167.js.map