(this["webpackJsonptybca-project"]=this["webpackJsonptybca-project"]||[]).push([[0],{108:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(2),n=c.n(a),i=c(63),r=c.n(i),l=(c(72),c(73),c(12)),o=c(10);c(74);var d=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsxs)("div",{className:"footer__sitemap",children:[Object(s.jsx)("h5",{children:"Sitemap"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/aboutus",children:"About Us"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/products",children:"Products"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/wishlist",children:"Wishlist"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/cart",children:"Cart"})})]})]}),Object(s.jsxs)("div",{className:"footer__contact-form",children:[Object(s.jsx)("h5",{children:"Sell your products"}),Object(s.jsx)("a",{href:"#link-to-seller-side",children:"Register your business."})]}),Object(s.jsxs)("div",{className:"footer__details",children:[Object(s.jsx)("img",{src:"https://josephreisigl.files.wordpress.com/2015/08/amazonlogo.png",alt:""}),Object(s.jsx)("i",{className:"fas fa-phone-alt",children:" (+91) 10000000000"})," ",Object(s.jsx)("br",{}),Object(s.jsx)("i",{className:"fas fa-envelope",children:" ourCompany@gmail.com"})]})]}),Object(s.jsx)("div",{className:"footer__copyright",children:"Copyright \xa9 2020 All Rights Reserved Company name"})]})},j=c(18);c(79),c(80);var m=function(){var e=document.querySelector(".sidenav");null===e||void 0===e||e.classList.toggle("expand"),(null===e||void 0===e?void 0:e.classList[1])&&document.querySelector(".products > #carouselItems").addEventListener("click",(function(){return e.classList.remove("expand")}))};function b(e){var t=e.text,c=e.link;return Object(s.jsx)(l.c,{exact:!0,activeClassName:"navbar__item-active",to:c,children:t})}var u=function(){return Object(s.jsx)("section",{children:Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsxs)("div",{className:"navbar__items",children:[Object(s.jsx)("button",{className:"navbar__hamburger",onClick:m,children:Object(s.jsx)("i",{className:"fas fa-bars"})}),Object(s.jsx)(b,{link:"/",text:"Home"}),Object(s.jsx)(b,{link:"/aboutus",text:"About Us"}),Object(s.jsx)(b,{link:"/products",text:"Products"})]})})})},h=function(e){var t=e.id,c=e.buttonText,a=e.buttonIcon,n=e.className,i=e.title,r=e.children;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("button",{type:"button",className:n||"btn btn-primary","data-toggle":"modal","data-target":"#".concat(t),children:[Object(s.jsx)("i",{className:"".concat(a," ").concat(a&&"mx-1")}),c]}),Object(s.jsx)("div",{className:"modal fade",id:t,"data-keyboard":"false",tabIndex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(s.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(s.jsxs)("div",{className:"modal-content",children:[Object(s.jsxs)("div",{className:"modal-header",children:[Object(s.jsx)("h5",{className:"modal-title",id:"staticBackdropLabel",children:i}),Object(s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(s.jsx)("div",{className:"modal-body  p-0",children:r})]})})})]})},O=c(34),x=c(24),p=(c(81),c(39));c(109),c(83);p.a.initializeApp({apiKey:"AIzaSyDIPlDdqKYfpAFM6Yum7jig3WPnkLBYOyg",authDomain:"tybca-project.firebaseapp.com",projectId:"tybca-project",storageBucket:"tybca-project.appspot.com",messagingSenderId:"837424055879",appId:"1:837424055879:web:dced06ea9558f5930f5362",measurementId:"G-27XZ19T96Y"});var f=p.a.firestore(),v=p.a.auth(),g=new p.a.auth.GoogleAuthProvider,N=f;var _=function(){var e=Object(o.f)(),t=Object(a.useState)({email:"",password:""}),c=Object(j.a)(t,2),n=c[0],i=c[1],r=Object(a.useState)(),l=Object(j.a)(r,2),d=l[0],m=l[1],b=function(e){var t=e.target;i(Object(x.a)(Object(x.a)({},n),{},Object(O.a)({},t.id,t.value)))},u=function(){return document.querySelector("#loginModal .close").click()};return Object(s.jsx)("div",{className:"signIn",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:d&&Object(s.jsxs)("div",{className:"alert alert-danger alert-dismissible fade show m-3",role:"alert",children:[d,Object(s.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})})}),Object(s.jsxs)("div",{className:"row row2",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"signIn__form",children:[Object(s.jsx)("h2",{children:"Sign In"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N.doc("customers/".concat(n.email)).get().then((function(e){e.exists?v.signInWithEmailAndPassword(n.email,n.password).then((function(){console.log("SignIn Successful"),u()})).catch((function(e){return m(null===e||void 0===e?void 0:e.message)})):m("User not found. Check your credentials.")}))},children:[Object(s.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address:"}),Object(s.jsx)("input",{type:"email",className:"form-control",id:"email",onChange:b,value:n.email,required:!0}),Object(s.jsx)("label",{htmlFor:"password",className:"form-label mt-1",children:"Password:"}),Object(s.jsx)("input",{type:"password",className:"form-control",id:"password",onChange:b,value:n.password,required:!0}),Object(s.jsx)("input",{type:"submit",className:"btn btn-primary mt-2",value:"Sign in"}),Object(s.jsx)("button",{className:"btn btn-link mt-2",onClick:function(){u(),e.push("/signup")},children:"Not a member? Create an account here."}),Object(s.jsx)("hr",{})]}),Object(s.jsx)("div",{className:"w-100 d-flex justify-content-center",children:Object(s.jsxs)("button",{type:"button",className:"btn btn-light d-flex",onClick:function(e){e.preventDefault(),v.signInWithPopup(g).then((function(e){var t=e.user,c=t.uid,s=t.email;N.doc("customers/".concat(s)).get().then((function(e){e.exists||N.collection("customers").doc(s).set({uid:c}).catch((function(e){return console.log("signup db error",e)}))})),u()})).catch((function(e){return m(null===e||void 0===e?void 0:e.message)}))},children:[Object(s.jsx)("img",{className:"mix-blend-mode mr-1",src:"https://developers.google.com/identity/images/g-logo.png",height:"25",width:"25",alt:"google"}),"Sign In With Google"]})})]})}),Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("img",{className:"signIn__image",src:"//st3.depositphotos.com/3126965/13277/v/450/depositphotos_132775264-stock-illustration-woman-doing-shopping-online.jpg",alt:"banner"}),Object(s.jsx)("button",{className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})]})]})})},y=c(112);c(85);var w=function(){var e=Object(o.f)();return Object(s.jsx)("div",{className:"searchBar",children:Object(s.jsx)(y.a,{translations:{placeholder:"Search"},onSubmit:function(t){t.preventDefault();var c=t.target.children[0].value;e.push("/products?search=".concat(c))}})})};var C=function(){var e,t=Object(a.useState)(0),c=Object(j.a)(t,2),n=c[0],i=c[1],r=Object(a.useState)(null),o=Object(j.a)(r,2),d=o[0],m=o[1],b=null===(e=v.currentUser)||void 0===e?void 0:e.email;return Object(a.useEffect)((function(){v.onAuthStateChanged((function(e){m(e||null)}))}),[]),Object(a.useEffect)((function(){var e=N.doc("customers/".concat(b)).collection("cart").onSnapshot((function(e){return i(e.docs.length)}));return function(){e()}}),[b]),Object(s.jsxs)("header",{className:"header",children:[Object(s.jsxs)("div",{className:"header__container",children:[Object(s.jsx)(l.b,{to:"/",children:Object(s.jsx)("img",{className:"header__logo",src:"https://josephreisigl.files.wordpress.com/2015/08/amazonlogo.png",alt:"logo"})}),Object(s.jsx)("div",{className:"header__search",children:Object(s.jsx)(w,{})}),Object(s.jsxs)("div",{className:"header__actions",children:[d?Object(s.jsx)("button",{className:"btn btn-secondary",onClick:function(){return v.signOut()},children:"Logout"}):Object(s.jsx)(h,{id:"loginModal",className:"btn btn-secondary",buttonText:"Login",children:Object(s.jsx)(_,{})}),Object(s.jsx)("span",{className:"header__actionsCart",children:Object(s.jsx)(l.b,{to:"/cart",children:Object(s.jsxs)("i",{className:"fas fa-shopping-cart text-white",children:[" ",n||""]})})})]})]}),Object(s.jsx)(u,{})]})};c(86);var k=function(){return Object(s.jsxs)("div",{id:"carouselHome",className:"carousel slide","data-ride":"carousel",children:[Object(s.jsxs)("ol",{className:"carousel-indicators",children:[Object(s.jsx)("li",{"data-target":"#carouselHome","data-slide-to":"0",className:"active"}),Object(s.jsx)("li",{"data-target":"#carouselHome","data-slide-to":"1"}),Object(s.jsx)("li",{"data-target":"#carouselHome","data-slide-to":"2"})]}),Object(s.jsxs)("div",{className:"carousel-inner",children:[Object(s.jsx)("div",{className:"carousel-item active",children:Object(s.jsx)("img",{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M31PE/V259540125_IN_WLME_SamsungM31Prime_DesktopTallHero_1500x600_1._CB416195537_.jpg",className:"d-block w-100",alt:"..."})}),Object(s.jsx)("div",{className:"carousel-item",children:Object(s.jsx)("img",{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/November/JabraElite85t/Intrigue/Amazonspecials/SaleNow/D19013686_WLA_BAU_Jabra_Elite_85T_Ingress_Tall_Hero_1500x600_3._CB414362917_.jpg",className:"d-block w-100",alt:"..."})}),Object(s.jsx)("div",{className:"carousel-item",children:Object(s.jsx)("img",{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Diwali2019/Rishab/Auto_Biss/HobbyStore_GW/Hobby_1500x600._CB416245605_.jpg",className:"d-block w-100",alt:"..."})})]}),Object(s.jsxs)("a",{className:"carousel-control-prev",href:"#carouselHome",role:"button","data-slide":"prev",children:[Object(s.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(s.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(s.jsxs)("a",{className:"carousel-control-next",href:"#carouselHome",role:"button","data-slide":"next",children:[Object(s.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(s.jsx)("span",{className:"sr-only",children:"Next"})]})]})};var S=function(){return Object(s.jsx)("div",{className:"home",children:Object(s.jsx)(k,{})})},I=(c(87),c(88),c(120)),P=c(113);var E=function(){return Object(s.jsxs)("div",{className:"items",children:[Object(s.jsx)(I.a,{hitsPerPage:8}),Object(s.jsx)(A,{})]})},A=Object(P.a)((function(e){var t=e.hits;return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row",children:t.slice(0,2).map((function(e){return Object(s.jsx)("div",{className:"col",children:Object(s.jsx)(R,{productId:e.objectID,productName:e.title,imgSrc:e.images,price:e.price},e.objectID)})}))}),Object(s.jsx)("div",{className:"row",children:t.slice(2,8).map((function(e){return Object(s.jsx)("div",{className:"col col-md-4 col-6",children:Object(s.jsx)(R,{productId:e.objectID,productName:e.title,imgSrc:e.images,price:e.price},e.objectID)})}))})]})}));function R(e){var t=e.productId,c=e.productName,a=e.imgSrc,n=e.price;return Object(s.jsxs)(l.b,{to:"/product/".concat(t),className:"card bg-dark text-white",children:[Object(s.jsx)("img",{className:"card-img",src:a,alt:c}),Object(s.jsxs)("div",{className:"card-overlay",children:[Object(s.jsx)("h5",{className:"card-title text-truncate",children:c}),Object(s.jsxs)("p",{className:"rating",children:[Object(s.jsx)("i",{className:"fas fa-star fa-sm text-warning","aria-hidden":"true"}),Object(s.jsx)("i",{className:"fas fa-star fa-sm text-warning","aria-hidden":"true"}),Object(s.jsx)("i",{className:"fas fa-star fa-sm text-warning","aria-hidden":"true"}),Object(s.jsx)("i",{className:"fas fa-star fa-sm text-warning","aria-hidden":"true"}),Object(s.jsx)("i",{className:"far fa-star fa-sm text-warning","aria-hidden":"true"})]}),Object(s.jsxs)("p",{children:["\u20b9 ",n,".00"]})]})]})}var D=c(110),T=c(114);var W=function(){var e=new URLSearchParams(Object(o.g)().search);return Object(s.jsxs)("div",{id:"carouselItems",className:"carousel slide","data-ride":"carousel",children:[Object(s.jsx)(q,{defaultRefinement:e.get("search")}),Object(s.jsx)("div",{className:"carousel-inner",children:Object(s.jsx)("div",{className:"carousel-item active",children:Object(s.jsx)(E,{})})}),Object(s.jsx)(L,{})]})},q=Object(D.a)((function(){return null})),L=Object(T.a)((function(e){var t=e.currentRefinement,c=e.nbPages,a=e.refine,n=e.createURL;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("button",{className:"carousel-control-prev btn","data-slide":"prev",onClick:function(){return a(t-1)},disabled:1===t,children:[Object(s.jsx)("i",{className:"fa fa-angle-left text-dark"}),Object(s.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(s.jsxs)("button",{className:"carousel-control-next btn","data-slide":"next",onClick:function(){return a(t+1)},disabled:t===c,children:[Object(s.jsx)("i",{className:"fa fa-angle-right text-dark"}),Object(s.jsx)("span",{className:"sr-only",children:"Next"})]}),Object(s.jsx)("ul",{className:"carousel-indicators",children:new Array(c).fill(null).map((function(e,c){var i=c+1,r=t===i?"active":"";return Object(s.jsx)("a",{href:n(i),onClick:function(){return a(i)},children:Object(s.jsx)("li",{className:r,children:i})},c)}))})]})}));c(89),c(90);var H=function(e){var t,c=e.id,a=e.title,n=e.price,i=e.img,r=e.category,o=e.miniView,d=null===(t=v.currentUser)||void 0===t?void 0:t.email;return o?Object(s.jsxs)("div",{className:"wishlistProduct-mini col-12 mb-2",children:[Object(s.jsx)("img",{src:i,alt:a,className:"img-fluid w-10"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"title text-truncate",children:a}),Object(s.jsx)("span",{className:"price",children:"\u20b9 ".concat(n,".00")})]}),Object(s.jsx)(l.b,{to:"/product/".concat(c),className:"stretched-link"})]}):Object(s.jsxs)("div",{className:"wishlistProduct col-md-4 mb-5",children:[Object(s.jsx)(l.b,{to:"/product/".concat(c),children:Object(s.jsx)("div",{className:"wishlistProduct__image z-dept-2 rounded border d-flex justify-content-center",children:Object(s.jsx)("img",{src:i,alt:a,className:"img-fluid w-10"})})}),Object(s.jsxs)("div",{className:"text-center pt-4",children:[Object(s.jsx)("h5",{children:a}),Object(s.jsx)("p",{className:"mb-2 text-muted text-uppercase small",children:r}),Object(s.jsxs)("p",{className:"rating mb-3",children:[Object(s.jsx)("i",{className:"fas fa-star fa-sm text-primary"}),Object(s.jsx)("i",{className:"fas fa-star fa-sm text-primary"}),Object(s.jsx)("i",{className:"far fa-star fa-sm text-primary"}),Object(s.jsx)("i",{className:"far fa-star fa-sm text-primary"}),Object(s.jsx)("i",{className:"far fa-star fa-sm text-primary"})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("h6",{className:"mb-3",children:"\u20b9 ".concat(n,".00")}),Object(s.jsxs)("button",{type:"button",className:"btn btn-primary btn-sm mr-1 mb-2",children:[Object(s.jsx)("i",{className:"fas fa-shopping-cart pr-2"}),"Add to cart"]}),Object(s.jsx)(l.b,{to:"/product/".concat(c),children:Object(s.jsxs)("button",{type:"button",className:"btn btn-secondary btn-sm mr-1 mb-2",children:[Object(s.jsx)("i",{className:"fas fa-info-circle pr-2"}),"Details"]})}),Object(s.jsx)("button",{type:"button",className:"btn btn-dark btn-sm px-3 mb-2","data-toggle":"tooltip","data-placement":"top",title:"Remove from wishlist",onClick:function(){N.doc("customers/".concat(d,"/wishlist/").concat(c)).delete().then((function(){return console.log("Removed from Wishlist")})).catch((function(e){return console.log(e)}))},children:Object(s.jsx)("i",{className:"fas fa-times"})})]})]})};var U=function(e){var t,c=e.miniView,n=Object(a.useState)([]),i=Object(j.a)(n,2),r=i[0],o=i[1],d=Object(a.useState)([]),m=Object(j.a)(d,2),b=m[0],u=m[1],h=null===(t=v.currentUser)||void 0===t?void 0:t.email;return Object(a.useEffect)((function(){var e=N.doc("customers/".concat(h)).collection("wishlist").onSnapshot((function(e){return o(e.docs.map((function(e){return e.data()})))}));return function(){e()}}),[h]),Object(a.useEffect)((function(){if(0!==r.length){var e=r.map((function(e){return e.id}));N.collection("products").where("__name__","in",e).get().then((function(e){return u(e.docs.map((function(e){return Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id})})))})).catch((function(e){return console.error(e)}))}else u([])}),[r]),Object(s.jsxs)("div",{className:"wishlist container mb-3",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("div",{className:"text-center py-3",children:c?Object(s.jsx)(l.b,{to:"/wishlist",children:Object(s.jsx)("h5",{className:"text-left text-light btn-link",children:"My Wishlist"})}):Object(s.jsx)("h3",{className:"mb-0",children:"Wishlist"})})})}),Object(s.jsx)("div",{className:"row",children:b.map((function(e){return Object(s.jsx)(H,{id:e.id,title:e.title,category:e.category,price:e.price,img:e.images[0],miniView:c},e.id)}))})]})},M=c(116),B=c(119),G=c(118),z=c(115);c(91);var F=function(){return Object(s.jsxs)("div",{className:"sidenav",children:[Object(s.jsx)("button",{type:"button",className:"sidenav__close btn",onClick:m,children:Object(s.jsx)("span",{children:"\xd7"})}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"sidenav__filters m-2",children:[Object(s.jsx)(G.a,{defaultRefinement:"Products",items:[{value:"Products",label:"Most Relevant"},{value:"instant_search_price_asc",label:"Price asc."},{value:"instant_search_price_desc",label:"Price desc."}]}),Object(s.jsx)("h5",{className:"subtitle",children:"Category"}),Object(s.jsx)(M.a,{attribute:"category",limit:8,showMore:!0}),Object(s.jsx)("h5",{className:"subtitle",children:"Price"}),Object(s.jsx)(B.a,{attribute:"price",translations:{submit:"Go"}}),Object(s.jsx)(V,{}),"  "]}),Object(s.jsx)("div",{className:"sidenav__wishlist",children:Object(s.jsx)(U,{miniView:!0})})]})]})},V=Object(z.a)((function(e){var t=e.items,c=e.refine;return Object(s.jsx)("button",{type:"button",className:"btn btn-secondary btn-sm rounded-sm mt-3",onClick:function(){return c(t)},disabled:!t.length,children:"Clear all filters"})}));var Q=function(){return Object(s.jsxs)("div",{className:"products d-flex",children:[Object(s.jsx)(F,{}),Object(s.jsx)(W,{})]})};c(92),c(93);var Y=function(e){var t,c=e.id,n=e.name,i=e.price,r=e.image,l=e.quantity,o=Object(a.useState)(l),d=Object(j.a)(o,2),m=d[0],b=d[1],u=null===(t=v.currentUser)||void 0===t?void 0:t.email;return Object(s.jsxs)("div",{className:"item",children:[Object(s.jsx)("img",{className:"item__image",src:r,alt:"item_image"}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"item__details",children:[Object(s.jsx)("div",{className:"item__name",children:n}),Object(s.jsx)("div",{className:"item__price",children:i})]}),Object(s.jsxs)("div",{className:"item__options",children:[Object(s.jsxs)("select",{className:"item__optionsQty btn btn-secondary",name:"qty",value:m,onChange:function(e){var t=e.target;b(t.value),N.doc("customers/".concat(u,"/cart/").concat(c)).update({qty:parseInt(t.value)})},children:[Object(s.jsx)("option",{value:"1",children:"Qty 1"}),Object(s.jsx)("option",{value:"2",children:"Qty 2"}),Object(s.jsx)("option",{value:"3",children:"Qty 3"}),Object(s.jsx)("option",{value:"4",children:"Qty 4"}),Object(s.jsx)("option",{value:"5",children:"Qty 5"})]}),"|",Object(s.jsx)("button",{className:"item__optionsRemove btn btn-secondary",onClick:function(){N.doc("customers/".concat(u,"/cart/").concat(c)).delete().then((function(){return console.log("Removed from Cart")})).catch((function(e){return console.log(e)}))},children:"Remove"})]})]})]})};var J=function(e){var t=e.items,c=e.itemInfo;return Object(s.jsxs)("div",{className:"cartItems w-100",children:[Object(s.jsxs)("h3",{children:[t.length," ITEMS"]}),c.map((function(e,c){var a;return Object(s.jsx)(Y,{id:e.id,name:e.title,price:e.price,image:e.images[0],quantity:null===(a=t[c])||void 0===a?void 0:a.qty},c)}))]})};c(94);var K=function(e){var t=e.totalAmount;return Object(s.jsxs)("div",{className:"summary w-100 mb-5",children:[Object(s.jsx)("h3",{children:"ORDER SUMMARY"}),Object(s.jsxs)("div",{className:"summary__promoCode",children:[Object(s.jsx)("i",{className:"fas fa-tag"}),Object(s.jsx)("input",{type:"text",name:"promoCode",placeholder:"HAVE A PROMO CODE?"})]}),Object(s.jsxs)("div",{className:"summary__paymentAmt",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:"Items: "})," ",Object(s.jsxs)("span",{children:["\u20b9",t,".00"]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:"Estimated Shipping: "})," ",Object(s.jsx)("span",{children:"FREE"})]})]}),Object(s.jsxs)("div",{className:"summary__orderTotal",children:[Object(s.jsx)("span",{children:"ORDER TOTAL: "}),Object(s.jsxs)("span",{children:["\u20b9",t,".00"]})]}),Object(s.jsx)("button",{className:"summary__checkoutBtn btn btn-primary mt-3 p-2 w-100",children:"PROCEED TO CHECKOUT"})]})};c(95);var $=function(){var e,t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],i=c[1],r=Object(a.useState)([]),l=Object(j.a)(r,2),o=l[0],d=l[1],m=Object(a.useState)(0),b=Object(j.a)(m,2),u=b[0],h=b[1],O=null===(e=v.currentUser)||void 0===e?void 0:e.email;return Object(a.useEffect)((function(){var e=N.doc("customers/".concat(O)).collection("cart").onSnapshot((function(e){return i(e.docs.map((function(e){return Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id})})))}));return function(){e()}}),[O]),Object(a.useEffect)((function(){if(0!==n.length){var e=n.map((function(e){return e.id}));N.collection("products").where("__name__","in",e).get().then((function(e){return d(e.docs.map((function(e){return Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id})})))})).catch((function(e){return console.error(e)}))}else d([])}),[n]),Object(a.useEffect)((function(){0!==o.length&&h(n.reduce((function(e,t,c){return e+t.qty*o[c].price}),0))}),[o]),Object(s.jsx)("div",{className:"shoppingCart mx-auto p-5",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("h2",{className:"pb-3 ml-2",children:"SHOPPING CART"})})}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-lg-8 col-md-6 col-sm-12",children:Object(s.jsx)(J,{items:n,itemInfo:o})}),Object(s.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12",children:Object(s.jsx)(K,{totalAmount:u})})]})]})})};c(96);var X=function(e){var t=e.id,c=e.headerText,a=e.children,n=e.parentId;return Object(s.jsxs)("div",{className:"card bg-transparent",children:[Object(s.jsx)("div",{className:"card-header",id:"heading".concat(t),children:Object(s.jsx)("h2",{className:"mb-0",children:Object(s.jsx)("button",{className:"btn btn-block text-left text-white collapsed",type:"button","data-toggle":"collapse","data-target":"#collapse".concat(t),"aria-expanded":"true","aria-controls":"collapse".concat(t),children:c})})}),Object(s.jsx)("div",{id:"collapse".concat(t),className:"collapse","aria-labelledby":"heading".concat(t),"data-parent":"#accordian".concat(n),children:Object(s.jsx)("div",{className:"card-body text-white",children:a})})]})};function Z(e){var t=e.id,c=e.children;return Object(s.jsx)("div",{className:"accordion",id:"accordian".concat(t),children:a.Children.map(c,(function(e){return Object(a.cloneElement)(e,{parentId:t})}))})}Z.Item=X;var ee=Z,te=function(e){var t,c,n=Object(o.h)().productId,i=Object(a.useState)({}),r=Object(j.a)(i,2),l=r[0],d=r[1],m=null===(t=v.currentUser)||void 0===t?void 0:t.email,b=Object(a.useState)(""),u=Object(j.a)(b,2),h=u[0],O=u[1],x=function(){document.querySelector(".header__actions > div > button").click()};return Object(a.useEffect)((function(){N.doc("products/".concat(n)).get().then((function(e){d(e.data()),O(e.data().images[0])})).catch((function(e){return console.log(e.message)}))}),[n]),Object(s.jsxs)("div",{className:"product__container",children:[Object(s.jsxs)("div",{className:"product__images-display",children:[Object(s.jsx)("img",{className:"product__images-main",src:h,alt:null===l||void 0===l?void 0:l.title}),Object(s.jsx)("div",{className:"product__images-sub",children:null===(c=l.images)||void 0===c?void 0:c.map((function(e,t){return Object(s.jsx)("img",{src:e,alt:"",onClick:function(){return function(e){O(l.images[e])}(t)}},t)}))})]}),Object(s.jsxs)("div",{className:"product__summary",children:[Object(s.jsx)("h2",{id:"product__name",children:null===l||void 0===l?void 0:l.title}),Object(s.jsxs)("div",{className:"product__credebility",children:[Object(s.jsxs)("p",{className:"product__value",children:["\u20b9",null===l||void 0===l?void 0:l.price,".00"]}),Object(s.jsxs)("div",{className:"product__ratings",children:[Object(s.jsx)("p",{className:"product__rating-stars",children:"Ratings"}),Object(s.jsx)("i",{className:"fas fa-star"}),Object(s.jsx)("i",{className:"fas fa-star"}),Object(s.jsx)("i",{className:"fas fa-star"}),Object(s.jsx)("i",{className:"fas fa-star"}),Object(s.jsx)("i",{className:"fas fa-star"})]})]}),Object(s.jsx)("button",{className:"product__review btn btn-link",children:"Write a Review"}),Object(s.jsx)("div",{className:"product__nav",children:Object(s.jsxs)(ee,{id:"productNav",children:[Object(s.jsx)(ee.Item,{id:"details",headerText:"DETAILS",children:"Details of the product go here..."}),Object(s.jsx)(ee.Item,{id:"description",headerText:"DESCRIPTION",children:l.description}),Object(s.jsx)(ee.Item,{id:"reviews",headerText:"REVIEWS",children:"Reviews..............."})]})}),Object(s.jsx)("button",{className:"product__cart btn btn-primary",onClick:function(){m?(console.log(m),N.doc("customers/".concat(m)).collection("cart").doc(n).set({qty:1}).then((function(){return e.history.push("/cart")}))):x()},children:"ADD TO CART"}),Object(s.jsx)("button",{className:"product__wishlist btn btn-link btn-block",onClick:function(){m?(console.log(m),N.doc("customers/".concat(m)).collection("wishlist").doc(n).set({id:n}).then((function(){return console.log("Added to wishlist")})).catch((function(e){return console.log(e)}))):x()},children:"ADD TO WISHLIST"})]})]})};c(97);var ce=function(){var e=Object(o.f)(),t=Object(a.useState)({fname:"",lname:"",phno:"",email:"",password:"",confirmPassword:""}),c=Object(j.a)(t,2),n=c[0],i=c[1],r=Object(a.useState)(),l=Object(j.a)(r,2),d=l[0],m=l[1],b=function(e){var t=e.target;i(Object(x.a)(Object(x.a)({},n),{},Object(O.a)({},t.name,t.value)))};return Object(s.jsx)("div",{className:"signUp",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n.password===n.confirmPassword&&v.createUserWithEmailAndPassword(n.email,n.password).then((function(t){var c=t.user.uid;v.currentUser.updateProfile({displayName:"".concat(n.fname," ").concat(n.lname)}),N.doc("customers/".concat(n.email)).set({uid:c,phno:n.phno}).then((function(){v.signInWithEmailAndPassword(n.email,n.password).then((function(){return e.push("/")}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return m(e.message)})),console.log(n)},children:[Object(s.jsx)("h3",{children:"Register"}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"First name"}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"fname",value:n.fname,onChange:b,required:!0})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Last name"}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"sname",value:n.sname,onChange:b,required:!0})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Email"}),Object(s.jsx)("input",{type:"email",className:"form-control",name:"email",value:n.email,onChange:b,required:!0})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Phone Number"}),Object(s.jsx)("input",{type:"number",className:"form-control",pattern:"^\\d{10}$",title:"Should contain 10 digits.",name:"phno",value:n.phno,onChange:b,required:!0})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("input",{type:"password",className:"form-control",name:"password",value:n.password,onChange:b,required:!0})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Confirm Password"}),Object(s.jsx)("input",{type:"password",className:"form-control",name:"confirmPassword",value:n.confirmPassword,onChange:b,required:!0})]}),Object(s.jsx)("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",children:"Register"}),d&&Object(s.jsxs)("div",{className:"alert alert-danger alert-dismissible fade show m-3",role:"alert",children:[d,Object(s.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(s.jsx)("button",{type:"button",className:"btn btn-link btn-block",onClick:function(){document.querySelector(".header__actions > div > button").click()},children:"Already registered Log in"})]})})})};var se=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(l.a,{children:[Object(s.jsx)(C,{}),Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{path:"/signup",component:ce}),Object(s.jsx)(o.a,{path:"/wishlist",component:U}),Object(s.jsx)(o.a,{path:"/product/:productId",component:te}),Object(s.jsx)(o.a,{path:"/cart",component:$}),Object(s.jsx)(o.a,{path:"/products",component:Q}),Object(s.jsx)(o.a,{path:"/",component:S})]}),Object(s.jsx)(d,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=c(66),ne=c.n(ae),ie=c(117);var re=function(e){var t=e.children,c=ne()("CNGF710VW0","6daedc34851003273065017840c58ad6");return Object(s.jsx)(ie.a,{searchClient:c,indexName:"Products",children:t})};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(re,{children:Object(s.jsx)(se,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){}},[[108,1,2]]]);
//# sourceMappingURL=main.44212fe5.chunk.js.map