var ub_interval_plyr_check = setInterval(() => {
  if (document.getElementById("unibots-video")) {
    myub_obj = document.getElementById("unibots-video");
    myub_objId = "div-ub-lebanonfiles";
    myub_obj.id = myub_objId;

    clearInterval(ub_interval_plyr_check);
    if (document.getElementById(myub_objId)) {
      url ="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ubPlayer/main/player.js";
      ub_vs = document.createElement("script");
      ub_vs.src = url;
      ub_vs.type = "text/javascript";
      document.getElementsByTagName("head")[0].appendChild(ub_vs);

      ub_plyrscript = document.createElement("script");
      ub_plyerinlineScript = document.createTextNode("window.unibots = window.unibots || { cmd: [] }; unibots.cmd.push(()=>{unibotsPlayer('lebanonfiles');})");

      // ub_plyerinlineScript = document.createTextNode(`window.unibots = window.unibots || { cmd: [] }; unibots.cmd.push(function(){unibotsPlayer(${clientname});})`);
      ub_plyrscript.appendChild(ub_plyerinlineScript);

      myub_obj.appendChild(ub_plyrscript);
    }
  }
}, 500);
