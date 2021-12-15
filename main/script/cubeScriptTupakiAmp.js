// console.log('script disabled');
mybotGACode = 'G-G4C0209YRW';
mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';

var mybotstyleSheet = "mybot .ub-roller-wrapper {bottom: 100px !important};";
var css = document.createElement("style");
css.type = "text/css";
css.appendChild(document.createTextNode(mybotstyleSheet));
document.getElementsByTagName("head")[0].appendChild(css);

  ub_ga = document.createElement("div");
  ub_ga.id = "gabywa";
  document.getElementsByTagName("head")[0].appendChild(ub_ga);
  document.getElementById("gabywa").innerHTML = mybotgabywa;
  loadAd("gabywa");

  s4 = document.createElement('script');
  s4.async = true;
  s4.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ub_cubescript3/script.min.js";
  document.getElementsByTagName('head')[0].appendChild(s4);

  window.unibotsoutb = window.unibotsoutb || { cmd: [] };
        unibotsoutb.cmd.push(()=>{unibotsOutB("https://www.tupaki.com/");
  });


   function loadAd(id, adUnits) {
       var elm = document.getElementById(id);
       var scripts = Array(elm.querySelectorAll("script"));
       scripts = scripts[0];
       for (var i = 0; i < scripts.length; i++) {
           oldScript = scripts[i];
           const newScript = document.createElement("script");
           var scriptAttr = Array(oldScript.attributes);
           scriptAttr = scriptAttr[0];
           for (var j = 0; j < scriptAttr.length; j++) {
               attr = scriptAttr[j];
               newScript.setAttribute(attr.name, attr.value);
           }
           newScript.appendChild(document.createTextNode(oldScript.innerHTML));
           newScript.onload = function () {
               if (adUnits !== undefined) {
                   smartyads.buildUnits(adUnits);
               }
           };
           oldScript.parentNode.replaceChild(newScript, oldScript);
       }
   }

   function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
