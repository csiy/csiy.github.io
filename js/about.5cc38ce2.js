(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(o,t,n){"use strict";n.r(t);var e=function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"about"},[n("h1",[o._v("This is an about page")]),n("button",{on:{click:o.toast}},[o._v("toast")]),n("button",{on:{click:o.imagePick}},[o._v("imagePick")]),n("button",{on:{click:o.imagePickMulti}},[o._v("imagePickMulti")]),n("button",{on:{click:o.pressButtonOnOff}},[o._v("pressButtonOnOff")]),n("button",{on:{click:o.imageCrop}},[o._v("imageCrop")]),n("button",{on:{click:o.recordingSound}},[o._v("recordingSound")]),n("button",{on:{click:o.recordingVideo}},[o._v("recordingVideo")])])},i=[],c=n("2b0e"),s=c["a"].extend({methods:{toast(){this.$KPG_Toaster("提示框")},imagePick(){this.$KPG_ImagePick("camera").then(o=>{console.log(o.length),console.log(o)})},imagePickMulti(){this.$KPG_ImagePickMulti(9).then(o=>{console.log(o.length),console.log(o)})},pressButtonOnOff(){this.$KPG_PressButtonOnOff("on")},imageCrop(){this.$KPG_ImageCrop("/d/d/s/asd.png").then(o=>{})},recordingSound(){this.$KPG_RecordingSound().then(o=>{})},recordingVideo(){this.$KPG_RecordingVideo().then(o=>{})}}}),a=s,r=n("2877"),l=Object(r["a"])(a,e,i,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=about.5cc38ce2.js.map