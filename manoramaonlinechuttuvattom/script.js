let url = 'https://cdn.unibots.in/newsbot/common/script.js'; 
let s1 = document.createElement('script'); 
s1.src = url; s1.async = "async";
s1.type = "text/javascript"; 
document.getElementsByTagName('head')[0].appendChild(s1);
s1.onload=function(){ console.log('loaded'); 
    window.unibotsna = window.unibotsna || { cmd: [] };
    unibotsna.cmd.push("manoramaonlinechuttuvattom");
}