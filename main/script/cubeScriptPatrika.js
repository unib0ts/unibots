var cachebuster = parseInt((Math.round(new Date().getTime() / 1000))/10000)*10000;
url = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/cubeScriptUB.min.js?cb='+cachebuster;
s1 = document.createElement('script');
s1.src = url;
s1.async = "async";
s1.type = "text/javascript";
window.parent.document.getElementsByTagName('head')[0].appendChild(s1);
s1.onload=function(){
  // window.parent.unibots = window.parent.unibots || { cmd: []
  // };
  // window.parent.unibots.cmd.push(function(){
  //   window.parent.unibotsClmb("patrika","G-J7M7D7PLVS") });
  window.unibots = window.unibots || { cmd: [] };
    unibots.cmd.push(()=>{unibotsClmb("patrika","G-J7M7D7PLVS");
  });
}
