(this["webpackJsonpwatching-platform"]=this["webpackJsonpwatching-platform"]||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var c=a(6),n=a(0),i=a.n(n),o=a(8),r=a.n(o),s=(a(50),a(13)),l=a(11),d=(a(51),a(91)),u=a(90),j=a(92),m=a(38),h=a.n(m),b=function(e){var t=e.data,a=e.imgLink,i=e.isPolish,o=e.setBookMarkedCities,r=e.hours,l=e.bookMarkedCities,d=e.city,u=(new Date).toLocaleDateString(),j=(new Date).getUTCMinutes(),m=Object(n.useRef)();return l.filter((function(e){return e===t.name||e===d})).length>0&&m.current?m.current.classList.add("marked"):m.current&&m.current.classList.remove("marked"),Object(c.jsxs)("div",{className:"answerData",children:[Object(c.jsxs)("div",{className:"location",children:[Object(c.jsxs)("h1",{className:"cityName",children:[t.name,", ",t.sys.country]}),Object(c.jsx)("div",{title:"Clouds: ".concat(t.clouds.all,"%"),className:"temperatureAnswer2",children:Object(c.jsx)("img",{className:"weatherIcon",src:a,alt:"",srcSet:""})}),Object(c.jsxs)("div",{className:"localeTime",children:[Object(c.jsx)("p",{children:"".concat(i?["Niedziela","Poniedzia\u0142ek","Wtorek","\u015aroda","Czwartek","Pi\u0105tek","Sobota"][(new Date).getDay()]:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()])}),Object(c.jsx)("p",{children:(new Date).getDate()<10?"0".concat(u):u}),Object(c.jsx)("div",{children:r<10?Object(c.jsx)("p",{children:j<10?"0".concat(r,":0").concat(j):"0".concat(r,":").concat(j)}):Object(c.jsx)("p",{children:j<10?"".concat(r,":0").concat(j):"".concat(r,":").concat(j)})})]})]}),Object(c.jsxs)("div",{className:"temperature",children:[Object(c.jsx)(h.a,{ref:m,className:"bookMark",style:{alignSelf:"flex-end",transition:"0.3s"},onClick:function(e){e.target.getAttribute("d")||(e.target.classList.toggle("marked"),e.target.classList.contains("marked")?o((function(e){return[].concat(Object(s.a)(e),[t.name])})):o((function(e){var a=e.indexOf(t.name);return e.filter((function(e,t){return t!==a}))})))}}),Object(c.jsx)("h2",{title:"Current",className:"primaryTemperature",children:"".concat(Math.round(t.main.temp),"\u2103")}),Object(c.jsx)("h4",{title:"MAX/MIN",className:"secondaryTemperature",children:"".concat(Math.round(t.main.temp_max),"\u2103 / ").concat(Math.round(t.main.temp_min),"\u2103")})]})]})},g=function(e){var t=e.bookMarkCities,a=e.setCity,n=t.map((function(e,t){return Object(c.jsx)("div",{style:{transition:.3},onClick:function(){a(e)},className:"bookmarkSelf",children:e},t)}));return Object(c.jsx)("div",{className:"bookmarksSection",children:n})};var O=function(){var e=Object(n.useState)("eng"),t=Object(l.a)(e,2),a=t[0],i=t[1],o=["Warsaw","Paris","Madrid","Berlin","Barcelona","Rio","New York","Chicago","London","Rome","Tokyo"],r=["Warszawa","Pary\u017c","Madryt","Berlin","Barcelona","Rio","Nowy York","Chicago","Londyn","Rome","Tokio"],m=Object(n.useState)(),h=Object(l.a)(m,2),O=h[0],f=h[1],k="https://api.openweathermap.org/data/2.5/weather?q=".concat(O,"&units=metric&lang=").concat(a,"&appid=").concat("40606d1a7691345518b8f45275e22d47"),p=Object(n.useState)("01d"),x=Object(l.a)(p,2),y=x[0],w=x[1],S="https://openweathermap.org/img/wn/".concat(y,"@2x.png"),C=Object(n.useState)([]),M=Object(l.a)(C,2),v=M[0],N=M[1],P=Object(n.useState)(!1),D=Object(l.a)(P,2),I=D[0],L=D[1],T=Object(n.useState)(""),z=Object(l.a)(T,2),B=z[0],E=z[1],R=Object(n.useState)([]),A=Object(l.a)(R,2),J=A[0],W=A[1];return Object(n.useEffect)((function(){f(I?r[Math.floor(Math.random()*r.length)]:o[Math.floor(Math.random()*o.length)]),localStorage.getItem("bookMarkedCities")&&JSON.parse(localStorage.getItem("bookMarkedCities")).forEach((function(e){W((function(t){return[].concat(Object(s.a)(t),[e])}))}))}),[]),Object(n.useEffect)((function(){fetch(k).then((function(e){return e.json()})).then((function(e){if(200===e.cod){N(e);var t=(new Date).getUTCHours();t+=e.timezone/3600,E(t>=24?t-=24:(new Date).getUTCHours()+e.timezone/3600),w(e.weather[0].icon)}})),localStorage.getItem("isPolish")||localStorage.setItem("isPolish",!1),"false"===localStorage.getItem("isPolish")?L(!1):L(!0)}),[O,k]),Object(n.useEffect)((function(){localStorage.setItem("bookMarkedCities",JSON.stringify(J))}),[J]),Object(c.jsxs)("div",{className:"app",children:[Object(c.jsxs)("div",{className:"weatherApp",children:[Object(c.jsxs)("div",{className:"inputCity",children:[Object(c.jsx)("h2",{children:I?"Podaj nazwe miasta":"Enter city name"}),Object(c.jsx)(d.a,{value:O,onChange:function(e){return f(e.target.value)},id:"outlined-basic",label:I?"Miasto":"City",variant:"outlined"})]}),v.main?Object(c.jsx)(b,{bookMarkedCities:J,setBookMarkedCities:W,data:v,imgLink:S,isPolish:I,hours:B,city:O}):Object(c.jsx)(u.a,{})]}),Object(c.jsx)(g,{setCity:f,bookMarkCities:J}),Object(c.jsxs)("div",{className:"languageSwitch",children:["ENG",Object(c.jsx)(j.a,{color:"default",id:"switch",checked:I,onChange:function(){var e;L((function(e){return!e})),i((function(e){return"eng"===e?"pl":"eng"})),e="false"===localStorage.getItem("isPolish")?"true":"false",localStorage.setItem("isPolish",e)}}),"PL"]})]})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.84f19fa3.chunk.js.map