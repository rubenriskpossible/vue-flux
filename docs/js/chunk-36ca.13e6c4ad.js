(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36ca"],{"06d9":function(n,i,e){"use strict";var t=e("ed05"),a=e.n(t);a.a},"1b5d":function(n,i,e){i=n.exports=e("2350")(!1),i.push([n.i,"\n.vue-flux .flux-pagination {\n  position: absolute;\n  left: 50px;\n  right: 50px;\n  bottom: 20px;\n  z-index: 100;\n}\n.vue-flux .flux-pagination ul {\n    display: block;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    text-align: center;\n}\n.vue-flux .flux-pagination li {\n    display: inline-block;\n    margin: 0 8px;\n    cursor: pointer;\n}\n.vue-flux .flux-pagination li span.pagination-item {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    border: 2px solid #fff;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.7);\n    -webkit-transition: background-color 0.2s ease-in, border 0.2s ease-in;\n    transition: background-color 0.2s ease-in, border 0.2s ease-in;\n}\n.vue-flux .flux-pagination li span.pagination-item:hover {\n    border: 2px solid black;\n    background-color: white;\n}\n.vue-flux .flux-pagination li.active span.pagination-item {\n    background-color: white;\n}\n",""])},7666:function(n,i,e){"use strict";e.r(i);var t=function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("nav",{staticClass:"flux-pagination"},[e("ul",n._l(n.slider.imagesLoaded,function(i){return e("li",{key:i,class:n.getClass(i-1),attrs:{title:n.getTitle(i-1)},on:{click:function(e){n.showImage(i-1)},touchend:function(e){n.showImage(i-1,e)}}},[e("span",{staticClass:"pagination-item"})])}))])},a=[],o=(e("cadf"),e("551c"),e("097d"),{props:{slider:{type:Object,required:!1}},computed:{currentTransition:function(){return this.slider.transition.current},currentImageIndex:function(){var n=this.slider.currentImage();if(void 0!==n)return n.index},nextImageIndex:function(){var n=this.slider.nextImage();return n.index}},methods:{getClass:function(n){return void 0!==this.currentTransition&&this.nextImageIndex===n?"active":void 0===this.currentTransition&&this.currentImageIndex===n?"active":""},getTitle:function(n){return this.slider.captions[n]||""},showImage:function(n,i){this.slider.showImage(n),i&&i.preventDefault()}}}),r=o,s=(e("06d9"),e("2877")),l=Object(s["a"])(r,t,a,!1,null,null,null);l.options.__file="FluxPagination.vue";i["default"]=l.exports},ed05:function(n,i,e){var t=e("1b5d");"string"===typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);var a=e("499e").default;a("595913e0",t,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-36ca.13e6c4ad.js.map