(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")]),e("button",{on:{click:t.toast}},[t._v("toast")]),e("button",{on:{click:t.imagePick}},[t._v("imagePick")]),e("button",{on:{click:t.imagePickMulti}},[t._v("imagePickMulti")]),e("button",{on:{click:t.pressButtonOnOff}},[t._v("pressButtonOnOff")]),e("button",{on:{click:t.imageCrop}},[t._v("imageCrop")]),e("button",{on:{click:t.recordingSound}},[t._v("recordingSound")]),e("button",{on:{click:t.recordingVideo}},[t._v("recordingVideo")]),t._l(t.result,function(i){return e("div",{key:i},[t._v("\n    "+t._s(i)+"\n    "),e("img",{attrs:{src:i}})])})],2)},o=[],s=e("2b0e"),r=s["a"].extend({data(){return{result:[]}},methods:{toast(){this.$KPG_Toaster("提示框")},imagePick(){this.$KPG_ImagePick("camera").then(t=>{this.result=t})},imagePickMulti(){this.$KPG_ImagePickMulti(9).then(t=>{this.result=t})},pressButtonOnOff(){this.$KPG_PressButtonOnOff("on")},imageCrop(){this.result&&this.result.length>0&&this.$KPG_ImageCrop(this.result[0]).then(t=>{this.result=t})},recordingSound(){this.$KPG_RecordingSound().then(t=>{})},recordingVideo(){this.$KPG_RecordingVideo().then(t=>{})}}}),c=r,u=e("2877"),a=Object(u["a"])(c,n,o,!1,null,null,null);i["default"]=a.exports}}]);
//# sourceMappingURL=about.477444c9.js.map