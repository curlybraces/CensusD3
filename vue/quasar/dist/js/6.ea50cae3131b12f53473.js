webpackJsonp([6],{299:function(e,t,l){var o=l(300);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);l(50)("5bf5c3ca",o,!0)},300:function(e,t,l){t=e.exports=l(49)(void 0),t.push([e.i,".legend-box{display:block;position:absolute;border:0;padding:5px;z-index:500}.legend-table{display:table;border-spacing:0;border-collapse:collapse;empty-cells:show}.legend-table tr{display:table-row}.legend-table th{background-color:#fff;opacity:.6;font-size:10px;font-weight:400;text-align:left;padding:2px;min-width:40px}.legend-label{font-size:10px}",""])},301:function(e,t,l){"use strict";t.a={name:"legend-box",data:function(){return{left:20,top:330,title:"density (p/mi²)",colorStops:[{value:0,color:"#FFEDA0"},{value:10,color:"#FED976"},{value:20,color:"#FEB24C"},{value:50,color:"#FD8D3C"},{value:100,color:"#FC4E2A"},{value:200,color:"#E31A1C"},{value:500,color:"#BD0026"},{value:1e3,color:"#800026"}]}},methods:{getColor:function(e){for(var t=this.colorStops.length-1;t>=0;){var l=this.colorStops[t];if(e>=l.value)return l.color;t--}return"#fff"}}}},302:function(e,t,l){"use strict";var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"legend-box",style:{left:e.left+"px",top:e.top+"px"}},[l("span",{staticClass:"legend-label"},[e._v(e._s(e.title))]),e._v(" "),l("table",{staticClass:"legend-table"},[l("thead",[l("tr",e._l(e.colorStops,function(t,o){return l("th",{key:t.color,style:{backgroundColor:t.color},attrs:{"data-index":o,title:t.value}},[l("span",{staticClass:"legend-label"},[o===e.colorStops.length-1?l("span",[e._v(">")]):e._e(),e._v("\n            "+e._s(t.value)+"\n          ")])])}))])])])},a=[],n={render:o,staticRenderFns:a};t.a=n},53:function(e,t,l){"use strict";function o(e){l(299)}Object.defineProperty(t,"__esModule",{value:!0});var a=l(301),n=l(302),r=l(11),s=o,c=r(a.a,n.a,!1,s,null,null);t.default=c.exports}});