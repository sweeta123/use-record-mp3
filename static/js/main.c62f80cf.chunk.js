(this["webpackJsonpuse-record-mp3-example"]=this["webpackJsonpuse-record-mp3-example"]||[]).push([[0],{12:function(e,t,r){e.exports=r(24)},13:function(e,t,r){},24:function(e,t,r){"use strict";r.r(t);r(13);var n=r(0),a=r.n(n),c=r(8),o=r.n(c),u=r(4),i=r(1),s=r(9),l=r.n(s),b=r(11);var d=new Uint8Array(1048576),f=window.AudioContext||window.webkitAudioContext,p=function(e,t){var r=Object(n.useState)(!1),a=Object(i.a)(r,2),c=a[0],o=a[1],u=Object(n.useState)(!1),s=Object(i.a)(u,2),l=s[0],p=s[1],m=Object(n.useState)(null),j=Object(i.a)(m,2),O=j[0],h=j[1],g=Object(n.useState)(null),v=Object(i.a)(g,2),R=v[0],y=v[1],w=Object(n.useRef)(0),x=Object(n.useRef)([]),k=Object(n.useState)(null),S=Object(i.a)(k,2),E=S[0],A=S[1],C=Object(n.useRef)(null);e&&!t.sampleRate&&(t.sampleRate=e.getAudioTracks()[0].getCapabilities().sampleRate.max);var U=function(e,t){var r=Object(n.useState)(null),a=Object(i.a)(r,2),c=a[0],o=a[1],u=Object(n.useState)(null),s=Object(i.a)(u,2),l=s[0],f=s[1],p=Object(n.useMemo)((function(){return Object(b.a)()}),[]);return Object(n.useEffect)((function(){e&&p.then((function(r){r.configure(t.bitrate?{sampleRate:t.sampleRate||48e3,channels:t.channels||1,bitrate:t.bitrate}:{sampleRate:t.sampleRate||48e3,channels:t.channels||1,vbrQuality:t.vbrQuality||2});for(var n=0,a=!0;;){var c=a?r.encode([e]):r.finalize();if(c.length+n>d.length){var u=new Uint8Array(c.length+n);u.set(d),d=u}if(d.set(c,n),n+=c.length,!a)break;a=!1}var i=new Uint8Array(d.buffer,0,n),s=new Blob([new Uint8Array(i).buffer],{type:"audio/mpeg"}),l=URL.createObjectURL(s);o(s),f(l)}))}),[e]),[l,c]}(E,t),N=Object(i.a)(U,2),P=N[0],M=N[1];return Object(n.useEffect)((function(){if(!1===c&&R&&O&&C.current){R&&R.disconnect(C.current.destination),O&&O.disconnect(R);var e=function(e,t){for(var r=new Float32Array(t),n=0,a=0;a<e.length;a++){var c=e[a];r.set(c,n),n+=c.length}return r}(x.current,w.current);A(e)}}),[c]),{isRecording:c,isRecordingPaused:l,startRecording:function(){if(e){o(!0),l||(w.current=0,x.current=[]),p(!1),C.current=new f({sampleRate:t.sampleRate});var r,n=C.current;(r=n.createScriptProcessor?n.createScriptProcessor(2048,1,1):n.createJavaScriptNode(2048,1,1)).onaudioprocess=function(e){var t=new Float32Array(e.inputBuffer.getChannelData(0));x.current.push(t),w.current=w.current+2048},y(r);var a=n.createMediaStreamSource(e);h(a),a.connect(r),r.connect(n.destination)}},stopRecording:function(){o(!1),p(!1)},pauseRecording:function(){o(!1),p(!0)},blobUrl:P,blob:M,channelData:E}},m=r(5),j=r(10),O=r.n(j);function h(){var e=Object(u.a)(["pt-4"]);return h=function(){return e},e}function g(){var e=Object(u.a)(["px-4 py-2 border border-black rounded text-lg"]);return g=function(){return e},e}function v(){var e=Object(u.a)(["px-4 mr-1 py-2 border border-black rounded text-lg"]);return v=function(){return e},e}function R(){var e=Object(u.a)(["px-4 mr-1 py-2 border border-black rounded text-lg"]);return R=function(){return e},e}function y(){var e=Object(u.a)(["p-6"]);return y=function(){return e},e}var w=function(){var e=Object(n.useState)({audio:!0}),t=Object(i.a)(e,1)[0],r=l()(t).stream,c=p(r,{vbrQuality:2}),o=c.isRecording,u=c.isRecordingPaused,s=c.startRecording,b=c.stopRecording,d=c.pauseRecording,f=c.blobUrl,j=c.channelData,w=(j?function(e){for(var t=Math.floor(e.length/1e3),r=[],n=0;n<1e3;n++){for(var a=t*n,c=0,o=0;o<t;o++)c+=Math.abs(e[a+o]);r.push(c/t)}return r}(j):[]).map((function(e,t){return a.a.createElement("div",{key:t,style:{width:"0.1%",height:"".concat(100*e,"%"),backgroundColor:"red"}})}));return a.a.createElement("div",{className:Object(m.a)(y())},a.a.createElement("button",{disabled:o,className:Object(m.a)(R()),onClick:s},"Record"),a.a.createElement("button",{disabled:!(o||!o&&u),className:Object(m.a)(v()),onClick:b},"Stop"),a.a.createElement("button",{disabled:!o&&!u,className:Object(m.a)(g()),onClick:u?s:d},"Pause"),f&&a.a.createElement("div",{className:Object(m.a)(h())},a.a.createElement("audio",{controls:!0,src:f}),a.a.createElement("div",{style:{display:"flex",alignItems:"center",width:"300px",height:"100px"}},w)),a.a.createElement(O.a,{color:"black",position:"right",href:"https://github.com/aaronshaf/use-record-mp3"},"GitHub repo"))};o.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.c62f80cf.chunk.js.map