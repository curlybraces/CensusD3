webpackJsonp([5],{287:function(t,i,s){var o=s(288);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);s(50)("a9a66718",o,!0)},288:function(t,i,s){i=t.exports=s(49)(void 0),i.push([t.i,".region-tooltip{display:none;position:absolute;background-color:snow;border:1px solid #666;border-radius:3px;padding:5px}",""])},289:function(t,i,s){"use strict";var o=s(2);i.a={name:"region-tooltip",components:{QProgress:o.r},data:function(){return{region:{},positionX:0,positionY:0,display:"none"}},computed:{regionIconSrc:function(){var t="state"===this.region.regionType?this.region.regionId:this.region.parentId;return this.$census.getRegionImageUrl(t)}},methods:{show:function(t,i){this.region=t,i&&void 0!==i&&2===i.length?(this.positionX=Number(i[0]),this.positionY=Number(i[1])):(this.positionX=0,this.positionY=0),this.display="block"},hide:function(){this.display="none"}}}},290:function(t,i,s){"use strict";var o=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"region-tooltip",style:{display:t.display,left:t.positionX+"px",top:t.positionY+"px"}},[s("div",{staticClass:"card-subtitle"},[s("img",{staticClass:"flag",attrs:{src:t.regionIconSrc,height:"24"}}),t._v(" "),s("span",{staticClass:"card-title"},[t._v(t._s(t.region.regionName))])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"card-subtitle"},[s("q-icon",{attrs:{name:"people"}}),t._v(" "),s("span",{staticClass:"text-bold"},[t._v(t._s(t._f("formatNumber")(t.region.population)))])],1),t._v(" "),s("div",{staticClass:"card-subtitle"},[s("span",{staticClass:"text-faded"},[t._v("density:")]),t._v(" "),s("span",{staticClass:"text-bold"},[t._v(t._s(t._f("formatDecimal")(t.region.density)))]),t._v(" "),s("span",{staticClass:"text-small"},[t._v("p/mi²")])])])},n=[],e={render:o,staticRenderFns:n};i.a=e},52:function(t,i,s){"use strict";function o(t){s(287)}Object.defineProperty(i,"__esModule",{value:!0});var n=s(289),e=s(290),a=s(11),r=o,l=a(n.a,e.a,!1,r,null,null);i.default=l.exports}});