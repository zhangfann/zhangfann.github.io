(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{435:function(t,n,o){"use strict";o.r(n);var e=o(411),i=o.n(e),a={data:function(){return{buttonName:"click",axios_data:""}},methods:{handleClick:function(){this.buttonName="new button name",console.log(111)}},mounted:function(){var t=this;i.a.get("https://api.apiopen.top/getJoke?page=1&count=2&type=video").then((function(n){t.axios_data=n})).catch((function(t){console.log(t)}))}},c=o(42),s=Object(c.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("button",{on:{click:this.handleClick}},[this._v(this._s(this.buttonName))])])}),[],!1,null,null,null);n.default=s.exports}}]);