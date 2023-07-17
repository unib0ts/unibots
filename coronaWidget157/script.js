// console.log('script disabled');
if(window.location.hostname === "phunusuckhoe.giadinhonline.vn"){
    var ub_s0 = document.createElement('script');
    ub_s0.async = "async";
    ub_s0.src = "https://cdn.unibots.in/newsbot/common/script.js";
    ub_s0.type = "text/javascript";
     document.getElementsByTagName('head')[0].appendChild(ub_s0);
    
    window.unibotsna = window.unibotsna || { cmd: [] };
    unibotsna.cmd.push("phunusuckhoe");
}
