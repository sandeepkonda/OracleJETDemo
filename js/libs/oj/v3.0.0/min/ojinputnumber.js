/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojvalidation-number","ojs/ojbutton"],function(a,g){(function(){a.ab("oj.ojInputNumber",g.oj.editableValue,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",options:{converter:a.La.Vk(a.Mh.CONVERTER_TYPE_NUMBER).createConverter(),max:null,min:null,placeholder:void 0,rawValue:void 0,readOnly:!1,required:!1,step:1,validators:void 0,value:null},getNodeBySubId:function(a){var b=this._superApply(arguments),d;b||(d=a.subId,"oj-inputnumber-up"===
d&&(b=this.widget().find(".oj-inputnumber-up")[0]),"oj-inputnumber-down"===d&&(b=this.widget().find(".oj-inputnumber-down")[0]),"oj-inputnumber-input"===d&&(b=this.widget().find(".oj-inputnumber-input")[0]));return b||null},getSubIdByNode:function(a){var b=null;null!=a&&(a===this.widget().find(".oj-inputnumber-up")[0]?b={subId:"oj-inputnumber-up"}:a===this.widget().find(".oj-inputnumber-down")[0]?b={subId:"oj-inputnumber-down"}:a===this.widget().find(".oj-inputnumber-input")[0]&&(b={subId:"oj-inputnumber-input"}));
return b||this._superApply(arguments)},refresh:function(){this._super();this.hb()},stepDown:function(a){this.Oja(a,!1)},stepUp:function(a){this.Oja(a,!0)},widget:function(){return this.Jn},Og:function(c,b){var d=this.options,e=this;this._superApply(arguments);a.oa.Sq([{ra:"disabled",Qe:!0},{ra:"placeholder"},{ra:"value"},{ra:"readonly",option:"readOnly",Qe:!0},{ra:"required",Ui:!0,Qe:!0},{ra:"title"},{ra:"min"},{ra:"max"},{ra:"step"}],b,this,function(a){for(var b=["value","step","min","max"],c=0;c<
b.length;c++){var g=b[c],m=g in a?a[g]:d[g];null!=m&&(a[g]="step"===g?e.WG(m):e.lq(g,m))}});if(void 0===d.value)throw Error("ojInputNumber has no value");this.m3=d.value;if(null!=d.min&&null!=d.max&&d.max<d.min)throw Error("ojInputNumber's max must not be less than min");},_ComponentCreate:function(){this._super();this.DF();this.mfa={};this.hb();this._on(this.$r);this._focusable(this.Jn)},yr:function(c,b,d){this._superApply(arguments);switch(c){case "min":case "max":this.Jr(c,this.options[c]);break;
case "readOnly":this.kA(c,a.oa.tJ);break;case "required":this.Vf(c);break;case "validators":this.Yh(c);break;case "converter":this.zr(c)}},sp:function(){return this._super()?this.options.readOnly?!1:!0:!1},W6:function(a,b){this._superApply(arguments);var d=b?b._context:null,e,f;d&&(e=d.originalEvent?!0:!1,f=d.Ps||!1);e||f||(this.m3=this.options.value)},ai:function(){return this.options.required},Vf:a.oa.Vf,Yh:a.oa.Yh,zr:a.oa.zr,Zw:a.oa.Zw,rc:function(){return this.options.converter?this.qBa():g.oj.ojInputNumber.prototype.options.converter},
wp:a.oa.wp,Kw:function(){return!1},_setOption:function(a,b,d){var e;e="value"===a||"max"===a||"min"===a?this.lq(a,b):"step"===a?this.WG(b):b;this._super(a,e,d);if("max"===a||"min"===a)this.Haa(),this.Yh();"disabled"===a&&this.element.prop("disabled",!!b);"readOnly"===a&&(this.element.prop("readonly",!!b),this.IO("readOnly",this.options.readOnly),this.Eha("readOnly",this.options.readOnly))},_destroy:function(){var c=this._super();this.MP.ojButtonset("destroy");this.MP.remove();this.m3=this.MP=this.kI=
this.DJ=null;a.Q.unwrap(this.element,this.Jn);clearTimeout(this.zf);return c},validate:a.oa.validate,Jr:function(a,b,d){var e;this._superApply(arguments);switch(a){case "disabled":case "max":case "min":case "value":e=this.SF(),this.tP(e);case "max":case "min":case "value":this.GO(e);break;case "converter":e=this.SF();this.Cha(e);break;case "required":this.re(b)}},re:a.oa.re,wE:function(){var a=this._superApply(arguments);null==this.options.min&&null==this.options.max||this.Haa();return g.extend(this.mfa,
a)},_GetDefaultStyleClass:function(){return"oj-inputnumber"},$r:{input:function(a){this.Ml(this.element.val(),a)},keydown:function(a){a.keyCode===g.ui.keyCode.ENTER?(this.j$(a),a.preventDefault()):this.Nk()&&this.Lu(a)&&a.preventDefault()},keyup:function(a){this.Dy(a)},blur:function(a){this.j$(a)},"touchstart .oj-inputnumber-button.oj-enabled":function(a){this.Nk();this.cC(null,g(a.currentTarget).hasClass("oj-inputnumber-up")?1:-1,a)},"touchend .oj-inputnumber-button":function(a){this.Dy(a)},"touchcancel .oj-inputnumber-button":function(a){this.Dy(a)},
"mousedown .oj-inputnumber-button.oj-enabled":function(a){this.Xx(a)&&(this.Nk(),this.cC(null,g(a.currentTarget).hasClass("oj-inputnumber-up")?1:-1,a))},"mouseup .oj-inputnumber-button":function(a){this.Xx(a)&&this.Dy(a)},"mouseenter .oj-inputnumber-button.oj-enabled":function(a){g(a.currentTarget).hasClass("oj-active")&&this.Xx(a)&&(this.Nk(),this.cC(null,g(a.currentTarget).hasClass("oj-inputnumber-up")?1:-1,a))},"mouseleave .oj-inputnumber-button":function(a){this.Xx(a)&&this.Dy(a)}},Va:{sva:"tooltipDecrement",
tva:"tooltipIncrement"},Ut:{readOnly:"oj-read-only"},hb:function(){var a=this.R(this.Va.tva),b=this.R(this.Va.sva),d=this.SF();this.DJ.ojButton({label:a});this.kI.ojButton({label:b});this.GO(d);this.tP(d);"boolean"===typeof this.options.readOnly&&this.element.prop("readonly",this.options.readOnly);this.IO("readOnly",this.options.readOnly);this.Eha("readOnly",this.options.readOnly);this.re(this.options.required)},sHa:function(){this.DJ.attr("data-oj-internal","");this.kI.attr("data-oj-internal","");
this.MP.attr("data-oj-internal","")},Nya:function(){var a=this.Jn.find(".oj-inputnumber-up"),b=this.Jn.find(".oj-inputnumber-down"),d=a[0].parentNode;this.DJ=a.ojButton({display:"icons",icons:{start:"oj-component-icon oj-inputnumber-up-icon"}});this.kI=b.ojButton({display:"icons",icons:{start:"oj-component-icon oj-inputnumber-down-icon"}});this.MP=g(d).ojButtonset({focusManagement:"none"});this.sHa()},DF:function(){var a=this.element;this.Jn=a.addClass("oj-inputnumber-input").wrap("\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e").parent().append("\x3cdiv class\x3d'oj-buttonset-width-auto'\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/button\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/button\x3e\x3c/div\x3e");
this.Xd?(this.Jn=g(this.Xd).append(this.Jn),this.Jn.addClass("oj-inputnumber oj-component")):this.Jn=this.Jn.wrap("\x3cdiv class\x3d'oj-inputnumber oj-component'\x3e\x3c/div\x3e").parent();this.saveType=a.prop("type");a.attr("type","text");this.Jn.find(".oj-inputnumber-button").attr("tabIndex","-1");this.Nya()},Lu:function(a){var b=g.ui.keyCode;switch(a.keyCode){case b.UP:return this.cC(null,1,a),!0;case b.DOWN:return this.cC(null,-1,a),!0}return!1},MVa:function(){return"\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e"},
VUa:function(){return"\x3cdiv class\x3d'oj-buttonset-width-auto'\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/button\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/button\x3e\x3c/div\x3e"},Nk:function(){return this.tqa=!0},cC:function(a,b,d){var e=!1;0<b?this.DJ.hasClass("oj-disabled")&&(e=!0):this.kI.hasClass("oj-disabled")&&(e=!0);a=a||500;clearTimeout(this.zf);this.zf=this._delay(function(){e||this.cC(40,
b,d)},a);this.L0(b*this.options.step,d)},L0:function(a,b){var d=this.SF(),e=this.options,f=e.min,g=e.max,e=e.step,k=this.m3,l=this.zIa(f,e,k),d=this.O9(d,a,f,g,e,l,k);this.sp()&&(this.element.val(d),this.GO(d),this.tP(d),this.Ml(d,b));this.bc(d,b,{validationMode:this.NE.wsa})},zIa:function(a,b,d){b=this.w_(b);null!=a&&(b=Math.max(b,this.w_(a)));null!=d&&(b=Math.max(b,this.w_(d)));return b},w_:function(a){a=a.toString();var b=a.indexOf(".");return-1===b?0:a.length-b-1},O9:function(c,b,d,e,f,g,k){var l;
if(0<g)return g=this.swa(c,b,d,e,f,g,k);k=null!=d?d:k;null==k&&(k=0);try{c=parseFloat(c.toFixed(g))}catch(m){m instanceof TypeError&&(a.F.warn("inputNumber's value after conversion is not a number. \n\r\n                      The converter must convert the value to a Number. coercing using +"),c=+c)}l=c-k;var p=Math.round(l/f)*f,p=parseFloat(p.toFixed(g));p!==l?(l=0>b?Math.ceil(l/f)*f:Math.floor(l/f)*f,c=k+l+b):c+=b;c=parseFloat(c.toFixed(g));return null!=d&&c<d?d:null!=e&&c>e?(d=Math.floor((e-k)/
f)*f+k,d=parseFloat(d.toFixed(g))):c},swa:function(c,b,d,e,f,g,k){a.u.assert(0<g);g=Math.pow(10,g);return this.O9(c*g,b*g,null!=d?d*g:d,null!=e?e*g:e,null!=f?f*g:f,0,k*g)/g},Dy:function(){this.tqa&&(clearTimeout(this.zf),this.tqa=!1)},Xx:function(){return!a.Q.MR()},tP:function(a){var b=this.options,d=b.max,e=b.min,f=this.kI,g=this.DJ,k,l,m=null!=d,p=null!=e;this.Jn&&(f||g)&&(k=f.hasClass("oj-disabled"),l=g.hasClass("oj-disabled"),b.disabled||void 0===a||m&&p&&d===e&&a===d?(k||f.ojButton("disable"),
l||g.ojButton("disable")):m&&a>=d?(k&&f.ojButton("enable"),l||g.ojButton("disable")):(p&&a<=e?k||f.ojButton("disable"):k&&f.ojButton("enable"),l&&g.ojButton("enable")))},qBa:a.oa.rc,SF:function(){var a,b;try{b=this.Zh()||0,a=this.zO(b)}catch(d){a=void 0}return a},j$:function(a){var b=this.element.val(),d;this.Dy();d=this.SF();this.GO(d);this.tP(d);this.bc(b,a)},Haa:function(){var c=this.options,b=c.min,d=c.max,e=(c=c.translations)?c.numberRange||{}:{},f,g,k,l,m,p,t,r,n,c=e.hint||{},s=e.messageDetail||
{},e=e.messageSummary||{};null!==c&&(f=c.min||null,g=c.max||null,k=c.inRange||null,l=c.exact||null);null!==s&&(m=s.rangeOverflow||null,p=s.rangeUnderflow||null,t=s.exact||null);null!==e&&(r=e.rangeOverflow||null,n=e.rangeUnderflow||null);b={min:null!=b?b:void 0,max:null!=d?d:void 0,hint:{min:f||null,max:g||null,inRange:k||null,exact:l||null},messageDetail:{rangeOverflow:m||null,rangeUnderflow:p||null,exact:t||null},messageSummary:{rangeOverflow:r||null,rangeUnderflow:n||null},converter:this.rc()};
this.mfa[a.Af.VALIDATOR_TYPE_NUMBERRANGE]=a.La.Lz(a.Af.VALIDATOR_TYPE_NUMBERRANGE).createValidator(b)},lq:function(a,b){var d;d=null!==b?+b:b;if(isNaN(d))throw Error("ojInputNumber's "+a+" option is not a number");return d},WG:function(a){if(null===a)return 1;a=this.lq("step",a);if(0>=a)throw Error("Invalid step for ojInputNumber; step must be \x3e 0");if(null===a||0>=a)a=1;return a},IO:function(a,b){-1!=Object.keys(this.Ut).indexOf(a)&&this.widget().toggleClass(this.Ut[a],!!b)},Eha:function(a,b){b?
this.element.removeAttr("role"):this.element.attr("role","spinbutton")},GO:function(a){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":a});this.Cha(a)},Cha:function(a){var b=this.element,d=b.val();this.uE("value",""+a,d)||b.attr({"aria-valuetext":d})},Oja:function(a,b){this.Nk();b?this.L0((a||1)*this.options.step):this.L0((a||1)*-this.options.step);this.Dy()}})})();a.U.ob("oj-input-number","editableValue",{properties:{converter:{type:"Object"},
max:{type:"number"},min:{type:"number"},placeholder:{type:"string"},rawValue:{type:"string",writeback:!0,readOnly:!0},readOnly:{type:"boolean"},required:{type:"boolean"},step:{type:"number"},validators:{type:"Array"},value:{type:"number",writeback:!0}},methods:{destroy:{},refresh:{},stepDown:{},stepUp:{},widget:{},validate:{}},extension:{Ng:"input",mb:"ojInputNumber"}});a.U.register("oj-input-number",{metadata:a.U.getMetadata("oj-input-number")})});