(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{58:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(29),r=a.n(n),i=a(0),c=a.n(i),o=a(49),s=a(83),l=a(1),d=a(79),u=a(3),h=a(20),f=a(9),p=a(84),y=a(24),j=a(113),w=a(4),x=y.a.get("window").width,m={Clouds:"weather-cloudy",Rain:"weather-rainy",Clear:"weather-sunny",Atmosphere:"weather-fog",Snow:"weather-snowy",Drizzle:"weather-partly-rainy",Thunderstorm:"weather-lightning-rainy"};function g(){var e=Object(l.useState)("Loading.."),t=r()(e,2),a=t[0],n=t[1],i=Object(l.useState)([]),u=r()(i,2),y=u[0],x=u[1],g=Object(l.useState)(!0),O=r()(g,2),z=(O[0],O[1]);return Object(l.useEffect)((function(){!function(){var e,t,a,r,i,s,l,d;c.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,c.a.awrap(o.b());case 2:return e=u.sent,e.granted||z(!1),u.next=7,c.a.awrap(o.a({accuracy:5}));case 7:return t=u.sent,a=t.coords,r=a.latitude,i=a.longitude,u.next=13,c.a.awrap(o.c({latitude:r,longitude:i},{useGoogleMaps:!1}));case 13:return s=u.sent,n(s[0].city),u.next=17,c.a.awrap(fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+r+"&lon="+i+"&exclude=alerts&appid=5e59dd9400246d79ba7682638520b651&units=metric"));case 17:return l=u.sent,u.next=20,c.a.awrap(l.json());case 20:d=u.sent,x(d.daily);case 22:case"end":return u.stop()}}),null,null,null,Promise)}()}),[]),Object(w.jsxs)(f.a,{style:b.container,children:[Object(w.jsx)(s.a,{style:"light"}),Object(w.jsx)(f.a,{style:b.city,children:Object(w.jsx)(h.a,{style:b.cityName,children:a})}),Object(w.jsx)(p.a,{horizontal:!0,pagingEnabled:!0,showsHorizontalScrollIndicator:"false",contentContainerStyle:b.weather,children:0===y.length?Object(w.jsx)(f.a,{style:b.day,children:Object(w.jsx)(d.a,{color:"white",style:{marginTop:10},size:"large"})}):y.map((function(e,t){return Object(w.jsx)(f.a,{style:b.day,children:Object(w.jsxs)(f.a,{style:b.weatherBox,children:[Object(w.jsx)(h.a,{style:b.temp,children:parseFloat(e.temp.max).toFixed(1)}),Object(w.jsx)(j.a,{name:m[e.weather[0].main],size:45,color:"white"}),Object(w.jsxs)(h.a,{style:b.tempMin,children:["min ",parseFloat(e.temp.min).toFixed(1)]})]})},t)}))})]})}var b=u.a.create({container:{flex:1,backgroundColor:"#389ef8"},city:{flex:1,justifyContent:"center",alignItems:"center"},cityName:{fontSize:30,color:"#fff",fontWeight:"500"},weatherBox:{display:"flex",alignItems:"center"},day:{width:x,alignItems:"center"},temp:{marginTop:20,fontSize:72,color:"#fff"},tempMin:{marginTop:10,marginBottom:20,fontSize:18,color:"#fff"},desc:{marginTop:10,fontSize:42},tinyText:{fontSize:16,color:"#fff"}})},86:function(e,t,a){e.exports=a(111)}},[[86,1,2]]]);
//# sourceMappingURL=app.b1f41005.chunk.js.map