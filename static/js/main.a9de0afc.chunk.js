(this["webpackJsonpuse-record-mp3-example"]=this["webpackJsonpuse-record-mp3-example"]||[]).push([[0],{12:function(e,t,n){e.exports=n(24)},13:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);n(13);var r=n(0),a=n.n(r),c=n(8),o=n.n(c),u=n(4),i=n(1),s=n(9),l=n.n(s),b=n(11);var d=new Uint8Array(1048576),f=window.AudioContext||window.webkitAudioContext,p=function(e,t){var n=Object(r.useState)(!1),a=Object(i.a)(n,2),c=a[0],o=a[1],u=Object(r.useState)(!1),s=Object(i.a)(u,2),l=s[0],p=s[1],m=Object(r.useState)(null),j=Object(i.a)(m,2),O=j[0],h=j[1],g=Object(r.useState)(null),v=Object(i.a)(g,2),R=v[0],y=v[1],w=Object(r.useRef)(0),k=Object(r.useRef)([]),x=Object(r.useState)(null),S=Object(i.a)(x,2),E=S[0],A=S[1],C=Object(r.useRef)(null);e&&!t.sampleRate&&(t.sampleRate=e.getAudioTracks()[0].getCapabilities().sampleRate.max);var U=function(e,t){var n=Object(r.useState)(null),a=Object(i.a)(n,2),c=a[0],o=a[1],u=Object(r.useState)(null),s=Object(i.a)(u,2),l=s[0],f=s[1],p=Object(r.useMemo)((function(){return Object(b.a)()}),[]);return Object(r.useEffect)((function(){e&&p.then((function(n){n.configure(t.bitrate?{sampleRate:t.sampleRate||48e3,channels:t.channels||1,bitrate:t.bitrate}:{sampleRate:t.sampleRate||48e3,channels:t.channels||1,vbrQuality:t.vbrQuality||2});for(var r=0,a=!0;;){var c=a?n.encode([e]):n.finalize();if(c.length+r>d.length){var u=new Uint8Array(c.length+r);u.set(d),d=u}if(d.set(c,r),r+=c.length,!a)break;a=!1}var i=new Uint8Array(d.buffer,0,r),s=new Blob([new Uint8Array(i).buffer],{type:"audio/mpeg"}),l=URL.createObjectURL(s);o(s),f(l)}))}),[e]),[l,c]}(E,t),N=Object(i.a)(U,2),P=N[0],M=N[1];return Object(r.useEffect)((function(){if(!1===c&&R&&O&&C.current){R&&R.disconnect(C.current.destination),O&&O.disconnect(R);var e=function(e,t){for(var n=new Float32Array(t),r=0,a=0;a<e.length;a++){var c=e[a];n.set(c,r),r+=c.length}return n}(k.current,w.current);A(e)}}),[c]),{isRecording:c,isRecordingPaused:l,startRecording:function(){if(e){o(!0),l||(w.current=0,k.current=[]),p(!1),C.current=new f({sampleRate:t.sampleRate});var n,r=C.current;(n=r.createScriptProcessor?r.createScriptProcessor(2048,1,1):r.createJavaScriptNode(2048,1,1)).onaudioprocess=function(e){var t=new Float32Array(e.inputBuffer.getChannelData(0));k.current.push(t),w.current=w.current+2048},y(n);var a=r.createMediaStreamSource(e);h(a),a.connect(n),n.connect(r.destination)}},stopRecording:function(){o(!1),p(!1)},pauseRecording:function(){o(!1),p(!0)},blobUrl:P,blob:M,channelData:E}},m=n(5),j=n(10),O=n.n(j);function h(){var e=Object(u.a)(["pt-4"]);return h=function(){return e},e}function g(){var e=Object(u.a)(["px-4 py-2 border border-black rounded text-lg"]);return g=function(){return e},e}function v(){var e=Object(u.a)(["px-4 mr-1 py-2 border border-black rounded text-lg"]);return v=function(){return e},e}function R(){var e=Object(u.a)(["px-4 mr-1 py-2 border border-black rounded text-lg"]);return R=function(){return e},e}function y(){var e=Object(u.a)(["p-6"]);return y=function(){return e},e}var w=function(){var e=Object(r.useState)({audio:!0}),t=Object(i.a)(e,1)[0],n=l()(t).stream,c=n&&n.getAudioTracks()[0].label,o=p(n,{sampleRate:48e3,channels:1,vbrQuality:2}),u=o.isRecording,s=o.isRecordingPaused,b=o.startRecording,d=o.stopRecording,f=o.pauseRecording,j=o.blobUrl,w=o.channelData,k=(w?function(e){for(var t=Math.floor(e.length/1e3),n=[],r=0;r<1e3;r++){for(var a=t*r,c=0,o=0;o<t;o++)c+=Math.abs(e[a+o]);n.push(c/t)}return n}(w):[]).map((function(e,t){return a.a.createElement("div",{key:t,style:{width:"0.1%",height:"".concat(100*e,"%"),backgroundColor:"red"}})}));return a.a.createElement("div",{className:Object(m.a)(y())},a.a.createElement("button",{disabled:u,className:Object(m.a)(R()),onClick:b},"Record"),a.a.createElement("button",{disabled:!(u||!u&&s),className:Object(m.a)(v()),onClick:d},"Stop"),a.a.createElement("button",{disabled:!u&&!s,className:Object(m.a)(g()),onClick:s?b:f},"Pause"),j&&a.a.createElement("div",{className:Object(m.a)(h())},a.a.createElement("audio",{controls:!0,src:j}),a.a.createElement("div",{style:{display:"flex",alignItems:"center",width:"300px",height:"100px"}},k)),c,a.a.createElement(O.a,{color:"black",position:"right",href:"https://github.com/aaronshaf/use-record-mp3"},"GitHub repo"))};o.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.a9de0afc.chunk.js.map