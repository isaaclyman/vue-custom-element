webpackJsonp([0],{210:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(211),n=r.n(o);for(var a in o)"default"!==a&&function(t){r.d(e,t,function(){return o[t]})}(a);var l=r(212),u=r(3),s=u(n.a,l.a,!1,null,null,null);e.default=s.exports},211:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default={props:{prop:{default:'"prop" value from component'}},computed:{tableData:function(){return[{prop:"prop",value:JSON.stringify(this.prop),type:o(this.prop)}]}}}},212:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card card--primary"},[t._m(0),t._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[r("el-table-column",{attrs:{prop:"prop",label:"Prop name"}}),t._v(" "),r("el-table-column",{attrs:{prop:"value",label:"Value"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{attrs:{slot:"reference"},slot:"reference"},[r("strong",[t._v(t._s(e.row.value))])])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"type",label:"typeof"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{attrs:{slot:"reference"},slot:"reference"},[r("el-tag",{attrs:{type:"gray"}},[t._v(t._s(e.row.type))])],1)]}}])})],1)],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("i",{staticClass:"el-icon-check"}),t._v("  Lazy loaded component.\n  ")])}],a={render:o,staticRenderFns:n};e.a=a}});
//# sourceMappingURL=0.409d851b1aad24262df9.js.map