/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{581:function(t,e){function n(){return new DOMException("The request is not allowed","NotAllowedError")}t.exports=async function(text){try{await async function(text){if(!navigator.clipboard)throw n();return navigator.clipboard.writeText(text)}(text)}catch(t){try{await async function(text){const span=document.createElement("span");span.textContent=text,span.style.whiteSpace="pre",span.style.webkitUserSelect="auto",span.style.userSelect="all",document.body.appendChild(span);const t=window.getSelection(),e=window.document.createRange();t.removeAllRanges(),e.selectNode(span),t.addRange(e);let r=!1;try{r=window.document.execCommand("copy")}finally{t.removeAllRanges(),window.document.body.removeChild(span)}if(!r)throw n()}(text)}catch(e){throw e||t||n()}}}},628:function(t,e,n){},629:function(t,e,n){},630:function(t,e,n){},631:function(t,e,n){},709:function(t,e,n){"use strict";n(628)},710:function(t,e,n){"use strict";n(629)},711:function(t,e,n){"use strict";n(630)},712:function(t,e,n){"use strict";n(631)},847:function(t,e,n){"use strict";n.r(e);n(27),n(16),n(26),n(42),n(43);var r=n(5),l=n(4),o=(n(9),{props:{wallets:{type:Array,required:!0}},data:function(){return{form:{},rules:{name:[{required:!0,message:"این فیلد اجباری می باشد.",trigger:["change","blur"]},{min:3,message:"حداقل طول نام 3 کاراکتر می باشد.",trigger:["change","blur"]},{max:50,message:"حداکثر طول نام 50 کاراکتر می باشد.",trigger:["change","blur"]}],coin:[{required:!0,message:"این فیلد اجباری می باشد.",trigger:["change","blur"]}],amount:[{required:!0,message:"این فیلد اجباری می باشد.",trigger:["change","blur"]}],link:[{max:500,message:"حداکثر طول این فیلد 500 کاراکتر می باشد.",trigger:["change","blur"]}]},donator:{amount:10,coin:"USDT",created:"2021-04-28 11:55",link:"https://google.com",name:"mamad"},output:null,loading:!1,isFinished:!1}},methods:{onSubmit:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.form.validate();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,t.loading=!0,e.next=9,t.$axios.$post("/donate/",t.form);case 9:t.isFinished=!0,e.next=14;break;case 12:e.prev=12,e.t0=e.catch(5);case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[5,12,14,17]])})))()}}}),c=(n(709),n(6)),m=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ElRow",{staticClass:"layout-v",attrs:{type:"flex",justify:"center",align:"middle"}},[n("ElCol",{attrs:{span:24}},[n("ElCard",{staticClass:"mb-50 rtl",attrs:{"body-style":{padding:"10px"}}},[n("div",{staticClass:"title my-10 pr-5"},[t._v("فرم ثبت دونیت")]),t._v(" "),n("div",{staticClass:"layout-v layout-center-center"},[n("div",{staticClass:"content form rtl py-5"},[t.isFinished?n("ElAlert",{attrs:{title:"از حمایت شما ممنونیم ❤",type:"success",description:"تراکنش شما در اسرع وقت بررسی و در صفحه حمایت کنندگان نمایش داده خواهد شد."},on:{close:function(e){t.isFinished=!1}}}):n("ElForm",{ref:"form",attrs:{model:t.form,"label-position":"top",rules:t.rules},nativeOn:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("ElFormItem",{attrs:{prop:"name",label:"نام و نام خانوادگی یا نام شرکت (نام مستعار)"}},[n("ElInput",{attrs:{placeholder:"نام و نام خانوادگی یا نام شرکت (نام مستعار)"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("ElFormItem",{attrs:{prop:"coin",label:"انتخاب سکه"}},[n("ElSelect",{staticClass:"full-width",attrs:{placeholder:"انتخاب سکه",filterable:""},model:{value:t.form.coin,callback:function(e){t.$set(t.form,"coin",e)},expression:"form.coin"}},t._l(t.wallets,(function(e){return n("ElOption",{key:e.coin,attrs:{label:e.coin,value:e.coin}},[n("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v("\n                    "+t._s(e.coin)+"\n                  ")]),t._v(" "),n("span",{staticStyle:{float:"left"}},[n("img",{attrs:{src:"/images/coins/"+e.coin+".png",width:"16",height:"16"}})])])})),1)],1),t._v(" "),n("ElFormItem",{staticClass:"ltr-input",attrs:{prop:"amount",label:"تعداد"}},[n("ElInput",{attrs:{type:"number",placeholder:"تعداد",step:"any"},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}})],1),t._v(" "),n("ElFormItem",{staticClass:"ltr-input",attrs:{prop:"link",label:"لینک تراکنش/آی‌دی تراکنش"}},[n("ElInput",{attrs:{placeholder:"لینک تراکنش/آی‌دی تراکنش"},model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}})],1),t._v(" "),n("ElButton",{attrs:{"native-type":"submit",type:"primary",loading:t.loading}},[t._v("\n              ثبت\n            ")])],1)],1)])])],1)],1)}),[],!1,null,"02c2f0ba",null).exports,d=(n(44),n(581)),f=n.n(d),y={props:{wallets:{type:Array,required:!0}},data:function(){return{index:null}},computed:{images:function(){return this.wallets.map((function(t){return{href:"/images/wallet/".concat(t.coin,".png")}}))}},methods:{copy:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f()(t);case 3:e.$message({message:"آدرس کپی شد.",type:"success"}),n.next=8;break;case 6:n.prev=6,n.t0=n.catch(0);case 8:case"end":return n.stop()}}),n,null,[[0,6]])})))()}}},v=(n(710),Object(c.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ElRow",{staticClass:"layout-v",attrs:{type:"flex",justify:"center",align:"middle"}},[n("ElCol",{attrs:{span:24}},[n("ElCard",{staticClass:"mb-50",attrs:{"body-style":{padding:"10px"}}},[n("div",{staticClass:"content rtl"},[n("p",[t._v("\n            حمایت مالی یا دونیشن (Donation) یکی از منابع رایج تامین مالی\n            موسسات و سازمانهای غیرانتفاعی است. موسسات غیرانتفاعی، موسساتی\n            هستند که بدون دریافت هزینه، به ارائه خدمات رایگان عام‌المنفعه\n            می‌پردازند و به نیت درآمدزایی تاسیس نشده‌اند. این موسسات به منظور\n            تامین هزینه‌ها و گسترش دامنه فعالیتهای خود، به راهکارهای مختلفی رو\n            می‌آورند که یکی از آنها حمایت مالی یا Donation است که امروزه در\n            میان موسسات بزرگ بین‌المللی اهمیت بسیاری پیدا کرده و به یکی از\n            منابع تامین مالی قابل ملاحظه این سازمان‌ها تبدیل شده است.\n          ")])])])],1)],1),t._v(" "),n("div",{staticClass:"wallets layout-h layout-justified layout-wrap full-width mt-30 rtl mt-20",attrs:{id:"wallets"}},t._l(t.wallets,(function(e,r){return n("div",{key:r,staticClass:"wallet mb-20"},[n("div",{staticClass:"qr-code",on:{click:function(e){t.index=r}}},[n("img",{attrs:{src:"/images/wallet/"+e.coin+".png",alt:e.coin}})]),t._v(" "),n("div",{staticClass:"address px-5 ltr"},[n("p",{staticClass:"wallet-address px-2"},[t._v(t._s(e.address))]),t._v(" "),n("i",{staticClass:"fa fa-copy",on:{click:function(n){return t.copy(e.address)}}})])])})),0),t._v(" "),n("client-only",[t.images?n("gallery",{attrs:{images:t.images,index:t.index},on:{close:function(e){t.index=null}}}):t._e()],1)],1)}),[],!1,null,"237809b2",null).exports),w=n(15);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={components:{Wallets:v,DonateForm:m},asyncData:function(){return{wallets:w.e}},head:function(){return x(x({},this.$seo({title:"حمایت مالی"})),{},{bodyAttrs:{class:"page-donate"},title:"حمایت مالی"})}},_=(n(711),n(712),Object(c.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Wallets",{staticClass:"mt-20",attrs:{wallets:t.wallets}}),t._v(" "),n("DonateForm",{staticClass:"mt-20",attrs:{wallets:t.wallets}})],1)}),[],!1,null,null,null));e.default=_.exports}}]);