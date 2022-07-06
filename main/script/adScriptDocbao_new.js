var s0 = document.createElement('script');
 s0.async = "async";
 s0.src = "https://cdn.unibots.in/headerbidding/common/hb.js";
 s0.type = "text/javascript";
 document.getElementsByTagName('head')[0].appendChild(s0);

 window.unibotshb = window.unibotshb || { cmd: [] };
 unibotshb.cmd.push(() => {
     ubHB("docbao");
 });

 var ub_interval_plyr_check = setInterval(() => {
   if (document.getElementById("unibots-video")) {
     myub_obj = document.getElementById("unibots-video");
     myub_objId = "div-ub-docbao";
     myub_obj.id = myub_objId;

     clearInterval(ub_interval_plyr_check);
     if (document.getElementById(myub_objId)) {
       // url ="https://cdn.unibots.in/ubplayer/player.js";
       url = "https://cdn.unibots.in/ubplayer/player_external_scripts/level_two/player.js";
       ub_vs = document.createElement("script");
       ub_vs.src = url;
       ub_vs.type = "text/javascript";
       document.getElementsByTagName("head")[0].appendChild(ub_vs);

       ub_plyrscript = document.createElement("script");
       playerclientname = "docbao";
       ub_plyerinlineScript = document.createTextNode("window.unibots = window.unibots || { cmd: [] }; unibots.cmd.push(()=>{unibotsPlayer(playerclientname);})");

       ub_plyrscript.appendChild(ub_plyerinlineScript);

       myub_obj.appendChild(ub_plyrscript);
     }
   }
  }, 500);
