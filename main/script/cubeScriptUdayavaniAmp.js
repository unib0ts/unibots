// console.log('script disabled');
mybotGACode = 'G-RZB7RK0MEB';
mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';

var mybotstyleSheet ="#div-clmb-ctn-462954-1{width: auto !important;z-index: 2147483647 !important;} #div-clmb-ctn-466515-1{width: auto !important;z-index: 2147483647 !important;} #ifr_466515-1{bottom: -20px !important; left: -30px !important;transform: scale(0.9) !important;}";
var css = document.createElement("style");
css.type = "text/css";
css.appendChild(document.createTextNode(mybotstyleSheet));
document.getElementsByTagName("head")[0].appendChild(css);

  ub_ga = document.createElement("div");
  ub_ga.id = "gabywa";
  document.getElementsByTagName("head")[0].appendChild(ub_ga);
  document.getElementById("gabywa").innerHTML = mybotgabywa;
  loadAd("gabywa");


   ub_passback1();

   function ub_passback1() {
         if(typeof colombia == 'undefined'){
         var colombia = colombia || {};
         colombia.fns = colombia.fns || [];
           (function() {
               var cads = document.createElement("script");
               cads.async = true;
               cads.type = "text/javascript";
               cads.src = "https://static.clmbtech.com/ctn/commons/js/colombia_v2.js";
               document.getElementsByTagName('head')[0].appendChild(cads);
           })();
         }

         var ub_passback = document.createElement("div");
         setAttributes(ub_passback, {
           "style":"float:left;min-height:2px;width:auto;position:absolute;bottom:0;",
           "data-position": "1",
           "data-section": "StroyPage",
           "class": "colombia"
         })

          setAttributes(ub_passback,{
            "data-ua": "M",
            "data-slot": "466515",
            "id": "div-clmb-ctn-466515-1"
          })
          document.getElementsByTagName("body")[0].appendChild(ub_passback);

        cubespinnervisibility();
    }

   function cubespinnervisibility() {
     var ub_clmb = setInterval(clmbdiv, 1000);

     function clmbdiv() {
           ub_refresh("#div-clmb-ctn-466515-1", "ifr_466515-1", ub_clmb);
     }
   }

   // setInterval(function(){
   //   if (ub_innerDoc.querySelector('#cube3dSwiper') !=null) {
   //       try{
   //         colombia.refresh('div-clmb-ctn-466515-1');
   //         cubespinnervisibility();
   //       }catch(e){}
   //    }
   // }, 30000);


   function ub_refresh(clmbdiv_id, clmbiframe_id, ub_clmb ) {
     if (document.querySelector(clmbdiv_id).childNodes) {
       if (document.querySelector(clmbdiv_id).childNodes[0]) {
             ub_iframe = document.getElementById(clmbiframe_id);
             ub_innerDoc = (ub_iframe.contentDocument) ? ub_iframe.contentDocument : ub_iframe.contentWindow.document;

            if (ub_innerDoc.querySelector('.main_div_swiper')) {
              ub_innerDoc1 = ub_innerDoc.querySelector('.main_div_swiper');

              ub_z2 = document.createElement("div");
              ub_z2.id = "ub-cmpgn-ad";
              ub_z2.setAttribute('href',"https://unibots.in/?utm_source=unibots&utm_medium=cubeadwidget");
              ub_z2.style = "color:#fff;line-height:11px;border-radius:5px;font-size:10px;width:130px;position:absolute;top:10px;text-align:center;right:26px;background-repeat:no-repeat;background-position:center;background-color:#17479e;";
              ub_z2.innerText = "Ads by Unibots";
              ub_innerDoc1.appendChild(ub_z2);
              clearInterval(ub_clmb);
            }

             // ub_innerDoc.querySelector('#ub-cmpgn-ad').addEventListener('click', function() {
             //   window.open('https://unibots.in/?utm_source=unibots&utm_medium=cubeadwidget', '_blank');
             // });
       }
     }
   }

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
