(this.webpackJsonpmy=this.webpackJsonpmy||[]).push([[0],[,,function(e,t,a){e.exports={main:"SetDisplay_main__3tG7u",fieldSeparate:"SetDisplay_fieldSeparate__1moIX",number:"SetDisplay_number__3QokI",inputCorrection:"SetDisplay_inputCorrection__3XtCW",redBackground:"SetDisplay_redBackground__2P_ZN"}},,function(e,t,a){e.exports={back:"Counter_back__2PEdL",middle:"Counter_middle__Y--sg",counterField:"Counter_counterField__He1Tx",buttonsField:"Counter_buttonsField__r3dks",twoCounters:"Counter_twoCounters__2NAD_"}},function(e,t,a){e.exports={back:"Counter_back__TZ0Hn",middle:"Counter_middle__3A_Mf",counterField:"Counter_counterField__KsYDd",buttonsField:"Counter_buttonsField__1wvWv"}},function(e,t,a){e.exports={number:"CounterDisplay_number__31qiD",redNumber:"CounterDisplay_redNumber__3rcL2",setMessage:"CounterDisplay_setMessage__3Ehw9",setMessageRed:"CounterDisplay_setMessageRed__2_O9N"}},,function(e,t,a){e.exports={appComponent:"Monday_appComponent__kopOg",textDecoration:"Monday_textDecoration__1-r8w"}},function(e,t,a){e.exports={number:"CounterDisplay_number__1kZ43",redNumber:"CounterDisplay_redNumber__J_RKe"}},function(e,t,a){e.exports={appComponent:"Tuesday_appComponent__I-Zh8",textDecoration:"Tuesday_textDecoration__1nP9Z"}},function(e,t,a){e.exports={fieldSeparate:"Input_fieldSeparate__3r5l3",number:"Input_number__ER0lS",inputCorrection:"Input_inputCorrection__24bjD",redBackground:"Input_redBackground__2UYYB"}},,function(e,t,a){e.exports={button:"Button_button__389iw"}},function(e,t,a){e.exports={button:"Button_button__ap28o"}},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(12),s=a.n(r),o=(a(19),a(8)),i=a.n(o),u=a(3),l=a(13),d=a.n(l),b=a(0),m=function(e){return Object(b.jsx)("button",{disabled:e.disable,onClick:function(){e.callback()},className:d.a.button,children:e.title})},j=a(5),_=a.n(j),O=a(9),x=a.n(O),p=function(e){var t=5===e.counterNumber?x.a.redNumber:x.a.number;return Object(b.jsx)("div",{className:t,children:e.counterNumber})},g=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(u.a)(r,2),o=s[0],i=s[1],l=Object(n.useState)(!0),d=Object(u.a)(l,2),j=d[0],O=d[1];Object(n.useEffect)((function(){var e=localStorage.getItem("increment");if(e){var t=JSON.parse(e);if(0===t)return;5===t?(x(),c(t)):(g(),c(t))}}),[]);var x=function(){i(!0),O(!1)},g=function(){i(!1),O(!1)};return Object(b.jsx)("div",{className:_.a.back,children:Object(b.jsxs)("div",{className:_.a.middle,children:[Object(b.jsx)("div",{className:_.a.counterField,children:Object(b.jsx)(p,{counterNumber:a})}),Object(b.jsxs)("div",{className:_.a.buttonsField,children:[Object(b.jsx)(m,{disable:o,title:"inc",callback:function(){a>=5?i(!0):(a++,c(a),5===a&&x(),1===a&&O(!1),localStorage.setItem("increment",JSON.stringify(a)))}}),Object(b.jsx)(m,{disable:j,title:"reset",callback:function(){c(0),i(!1),O(!0),localStorage.setItem("increment",JSON.stringify(0))}})]})]})})},f=function(){return Object(b.jsxs)("div",{className:i.a.appComponent,children:[Object(b.jsx)("h3",{className:i.a.textDecoration,children:"Monday Exam"}),Object(b.jsx)(g,{})]})},S=a(10),v=a.n(S),N=a(14),C=a.n(N),h=function(e){return Object(b.jsx)("button",{disabled:e.disable,onClick:function(){e.callback()},className:C.a.button,children:e.title})},y=a(6),k=a.n(y),I=function(e){return Object(b.jsx)("div",{children:e.error?Object(b.jsx)("div",{className:k.a.setMessageRed,children:"Incorrect value!"}):e.setMessage?Object(b.jsx)("div",{className:e.counterNumber===e.max?k.a.redNumber:k.a.number,children:e.counterNumber}):Object(b.jsx)("div",{className:k.a.setMessage,children:"enter values and press 'set'"})})},D=a(4),F=a.n(D),J=a(2),M=a.n(J),T=a(11),B=a.n(T),V=function(e){return Object(b.jsxs)("div",{className:B.a.fieldSeparate,children:[Object(b.jsx)("span",{className:B.a.number,children:e.name}),Object(b.jsx)("input",{className:e.inputStyle,type:"number",value:e.value,onChange:function(t){e.onChangeCallback(+t.currentTarget.value)}})]})},w=function(e){var t=Object(n.useState)(M.a.inputCorrection),a=Object(u.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(M.a.inputCorrection),o=Object(u.a)(s,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){return e.max<e.start||e.max<=0&&e.start>0&&e.start!==e.max?(r("".concat(M.a.inputCorrection," ").concat(M.a.redBackground)),void l(M.a.inputCorrection)):e.max===e.start?(r("".concat(M.a.inputCorrection," ").concat(M.a.redBackground)),void l("".concat(M.a.inputCorrection," ").concat(M.a.redBackground))):e.start<0&&e.max>0?(r(M.a.inputCorrection),void l("".concat(M.a.inputCorrection," ").concat(M.a.redBackground))):e.start>=0&&e.max>0?(r(M.a.inputCorrection),void l(M.a.inputCorrection)):void 0}),[e.max,e.start]),Object(b.jsxs)("div",{className:M.a.main,children:[Object(b.jsx)("div",{className:M.a.fieldSeparate,children:Object(b.jsx)(V,{name:"max value:",value:e.max,onChangeCallback:e.onChangeMax,inputStyle:c})}),Object(b.jsx)("div",{className:M.a.fieldSeparate,children:Object(b.jsx)(V,{name:"start value:",value:e.start,onChangeCallback:e.onChangeStart,inputStyle:i})})]})},E=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(u.a)(r,2),o=s[0],i=s[1],l=Object(n.useState)(5),d=Object(u.a)(l,2),m=d[0],j=d[1],_=Object(n.useState)(!1),O=Object(u.a)(_,2),x=O[0],p=O[1],g=Object(n.useState)(!0),f=Object(u.a)(g,2),S=f[0],v=f[1],N=Object(n.useState)(!0),C=Object(u.a)(N,2),y=C[0],k=C[1],D=Object(n.useState)(!1),J=Object(u.a)(D,2),M=J[0],T=J[1],B=function(){p(!1),v(!0)},V=function(){p(!0),v(!0)},E=function(){V(),k(!0)},P=function(){var e=localStorage.getItem("incrementTuesday"),t=localStorage.getItem("startValue"),a=localStorage.getItem("maxValue");e!==a&&e!==t&&(p(!1),v(!1)),e===a&&(p(!0),v(!1)),e===t&&B()};Object(n.useEffect)((function(){var e=localStorage.getItem("incrementTuesday"),t=localStorage.getItem("startValue"),a=localStorage.getItem("maxValue");e?c(JSON.parse(e)):localStorage.setItem("incrementTuesday",JSON.stringify(0)),t?i(JSON.parse(t)):localStorage.setItem("startValue",JSON.stringify(0)),a?j(JSON.parse(a)):localStorage.setItem("maxValue",JSON.stringify(5)),P()}),[]);return Object(b.jsxs)("div",{className:F.a.twoCounters,children:[Object(b.jsx)("div",{className:F.a.back,children:Object(b.jsxs)("div",{className:F.a.middle,children:[Object(b.jsx)("div",{className:F.a.counterField,children:Object(b.jsx)(w,{start:o,max:m,onChangeMax:function(e){j(e);var t=localStorage.getItem("startValue"),a=localStorage.getItem("maxValue");return t===o.toString()&&a===e.toString()?(P(),k(!0),void T(!1)):e<=0||e<=o||o<0||e===o?(T(!0),void E()):(k(!1),V(),void T(!1))},onChangeStart:function(e){i(e);var t=localStorage.getItem("startValue"),a=localStorage.getItem("maxValue");return t===e.toString()&&a===m.toString()?(P(),k(!0),void T(!1)):m<=0||m<=e||e<0||m===e?(T(!0),void E()):(k(!1),V(),void T(!1))}})}),Object(b.jsx)("div",{className:F.a.buttonsField,children:Object(b.jsx)(h,{disable:y,title:"set",callback:function(){localStorage.setItem("maxValue",JSON.stringify(m)),localStorage.setItem("startValue",JSON.stringify(o)),localStorage.setItem("incrementTuesday",JSON.stringify(o)),c(o),k(!0),B()}})})]})}),Object(b.jsx)("div",{className:F.a.back,children:Object(b.jsxs)("div",{className:F.a.middle,children:[Object(b.jsx)("div",{className:F.a.counterField,children:Object(b.jsx)(I,{counterNumber:a,max:m,setMessage:y,error:M})}),Object(b.jsxs)("div",{className:F.a.buttonsField,children:[Object(b.jsx)(h,{disable:x,title:"inc",callback:function(){++a>=o&&v(!1),a>=m?(p(!0),c(a)):c(a),localStorage.setItem("incrementTuesday",JSON.stringify(a))}}),Object(b.jsx)(h,{disable:S,title:"reset",callback:function(){c(o),B(),localStorage.setItem("incrementTuesday",JSON.stringify(o))}})]})]})})]})},P=function(){return Object(b.jsxs)("div",{className:v.a.appComponent,children:[Object(b.jsx)("h3",{className:v.a.textDecoration,children:"Tuesday Exam (first version)"}),Object(b.jsx)(E,{})]})};var R=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{}),Object(b.jsx)(P,{})]})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root")),Z()}],[[21,1,2]]]);
//# sourceMappingURL=main.7732a090.chunk.js.map