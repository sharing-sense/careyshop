(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67fcee76"],{"550a":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("cs-container",[t("page-main",{ref:"main",attrs:{loading:e.loading,"tree-data":e.tree},on:{refresh:e.handleRefresh}})],1)},i=[],a=(t("d3b7"),t("ca00")),o=t("f86b"),u={name:"setting-logistics-region",components:{PageMain:function(){return t.e("chunk-190e1f7e").then(t.bind(null,"1c42"))}},data:function(){return{tree:[],loading:!1}},mounted:function(){this.handleSubmit()},methods:{handleRefresh:function(){var e=this;this.$nextTick((function(){e.handleSubmit()}))},handleSubmit:function(){var e=this;this.loading=!0,Object(o["d"])({region_id:1}).then((function(n){var t={key:"parent_id",value:[1]};e.tree=a["a"].formatDataToTree(n.data,"region_id","parent_id",t),e.$refs.main&&(e.$refs.main.filterText="",e.$refs.main.resetForm(),e.$refs.main.resetElements())})).finally((function(){e.loading=!1}))}}},d=u,s=t("2877"),c=Object(s["a"])(d,r,i,!1,null,null,null);n["default"]=c.exports},f86b:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"f",(function(){return a})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return d})),t.d(n,"e",(function(){return s}));var r=t("bc07");function i(e){return Object(r["a"])({url:"/v1/region",method:"post",params:{method:"add.region.item"},data:e})}function a(e){return Object(r["a"])({url:"/v1/region",method:"post",params:{method:"set.region.item"},data:e})}function o(e){return Object(r["a"])({url:"/v1/region",method:"post",params:{method:"del.region.list"},data:{region_id:e}})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(r["a"])({url:"/v1/region",method:"post",params:{method:"get.region.list"},data:e})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(r["a"])({url:"/v1/region",method:"post",params:{method:"get.region.son.list"},data:e})}function s(e){return Object(r["a"])({url:"/v1/region",method:"post",params:{method:"set.region.index"},data:{region_id:e}})}}}]);