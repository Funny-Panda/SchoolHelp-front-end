(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/search-result/search-result"],{1968:function(e,t,o){},"39f2":function(e,t,o){"use strict";o.r(t);var r=o("8e7b"),n=o.n(r);for(var s in r)"default"!==s&&function(e){o.d(t,e,function(){return r[e]})}(s);t["default"]=n.a},"4aa0":function(e,t,o){"use strict";var r=o("1968"),n=o.n(r);n.a},"8e7b":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){return o.e("components/mehaotian-search-revision/mehaotian-search-revision").then(o.bind(null,"b1bc"))},n={data:function(){return{defaultKeyword:"",keyword:"",oldKeywordList:[],hotKeywordList:[],keywordList:[],forbid:"",isShowKeywordList:!1}},onLoad:function(){this.init()},components:{mSearch:r},methods:{init:function(){this.loadDefaultKeyword(),this.loadOldKeyword(),this.loadHotKeyword()},blur:function(){e.hideKeyboard()},loadDefaultKeyword:function(){this.defaultKeyword="默认关键字"},loadOldKeyword:function(){var t=this;e.getStorage({key:"OldKeys",success:function(e){var o=JSON.parse(e.data);t.oldKeywordList=o}})},loadHotKeyword:function(){this.hotKeywordList=["键盘","鼠标","显示器","电脑主机","蓝牙音箱","笔记本电脑","鼠标垫","USB","USB3.0"]},inputChange:function(t){var o=this,r=t.detail?t.detail.value:t;if(!r)return this.keywordList=[],void(this.isShowKeywordList=!1);this.isShowKeywordList=!0,e.request({url:"//suggest.taobao.com/sug?code=utf-8&q="+r,success:function(e){o.keywordList=o.drawCorrelativeKeyword(e.data.result,r)}})},drawCorrelativeKeyword:function(e,t){for(var o=e.length,r=[],n=0;n<o;n++){var s=e[n],a=s[0].replace(t,"<span style='color: #9f9f9f;'>"+t+"</span>");a="<div>"+a+"</div>";var i={keyword:s[0],htmlStr:a};r.push(i)}return r},setkeyword:function(e){this.keyword=e.keyword},oldDelete:function(){var t=this;e.showModal({content:"确定清除历史搜索记录？",success:function(o){o.confirm?(console.log("用户点击确定"," at pages\\index\\search-result\\search-result.vue:155"),t.oldKeywordList=[],e.removeStorage({key:"OldKeys"})):o.cancel&&console.log("用户点击取消"," at pages\\index\\search-result\\search-result.vue:161")}})},hotToggle:function(){this.forbid=this.forbid?"":"_forbid"},doSearch:function(t){t=t||(this.keyword?this.keyword:this.defaultKeyword),this.keyword=t,this.saveKeyword(t),e.showToast({title:t,icon:"none",duration:2e3}),plus.runtime.openURL(encodeURI("taobao://s.taobao.com/search?q="+t))},saveKeyword:function(t){var o=this;e.getStorage({key:"OldKeys",success:function(r){console.log(r.data," at pages\\index\\search-result\\search-result.vue:193");var n=JSON.parse(r.data),s=n.indexOf(t);-1==s?n.unshift(t):(n.splice(s,1),n.unshift(t)),n.length>10&&n.pop(),e.setStorage({key:"OldKeys",data:JSON.stringify(n)}),o.oldKeywordList=n},fail:function(r){var n=[t];e.setStorage({key:"OldKeys",data:JSON.stringify(n)}),o.oldKeywordList=n}})}}};t.default=n}).call(this,o("6e42")["default"])},a962:function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},n=[];o.d(t,"a",function(){return r}),o.d(t,"b",function(){return n})},c277:function(e,t,o){"use strict";o.r(t);var r=o("a962"),n=o("39f2");for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);o("4aa0");var a=o("2877"),i=Object(a["a"])(n["default"],r["a"],r["b"],!1,null,null,null);t["default"]=i.exports}},[["b8d3","common/runtime","common/vendor"]]]);