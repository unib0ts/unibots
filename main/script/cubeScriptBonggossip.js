function mobileCheck() {
    var check = false;
    (function (a) {
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4)
            )
        )
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

var mybotstyleSheet ="#div-clmb-ctn-465459-1{width: auto !important;} #div-clmb-ctn-465460-1{width: auto !important;}";
var css = document.createElement("style");
css.type = "text/css";
css.appendChild(document.createTextNode(mybotstyleSheet));
document.getElementsByTagName("head")[0].appendChild(css);

mybotGACode = 'G-56WF6BTJXJ';
mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';

  ub_ga = document.createElement("div");
  ub_ga.id = "gabywa";
  document.getElementsByTagName("head")[0].appendChild(ub_ga);
  document.getElementById("gabywa").innerHTML = mybotgabywa;
  loadAd("gabywa");

   ub_passback1();

   setInterval(function(){
     if (!mobileCheck()) {
        try{
        colombia.refresh('div-clmb-ctn-465459-1');
        cubespinnervisibility();
        }catch(e){}
    }else {
      try{
         colombia.refresh('div-clmb-ctn-465460-1');
         cubespinnervisibility();
      }catch(e){}
    }
   }, 30000);

 function ub_passback1() {
       // if(typeof colombia == 'undefined'){
       // var colombia = colombia || {};
       // colombia.fns = colombia.fns || [];
       //   (function() {
       //       var cads = document.createElement("script");
       //       cads.async = true;
       //       cads.type = "text/javascript";
       //       cads.src = "https://static.clmbtech.com/ctn/commons/js/colombia_v2.js";
       //       document.getElementsByTagName('head')[0].appendChild(cads);
       //   })();
       // }

       var ub_passback = document.createElement("div");
       ub_passback.setAttribute("style", "float:left;min-height:2px;width:auto;position:absolute;bottom:0;");
       ub_passback.setAttribute("data-position", "1");
       ub_passback.setAttribute("data-section", "StroyPage");
       ub_passback.setAttribute("class", "colombia");

       if (!mobileCheck()) {
           ub_passback.setAttribute("data-ua", "D");
           ub_passback.setAttribute("data-slot", "465459");
           ub_passback.setAttribute("id", "div-clmb-ctn-465459-1");
           document.getElementsByTagName("body")[0].appendChild(ub_passback);
       }else {
         ub_passback.setAttribute("data-ua", "M");
         ub_passback.setAttribute("data-slot", "465460");
         ub_passback.setAttribute("id", "div-clmb-ctn-465460-1");
         document.getElementsByTagName("body")[0].appendChild(ub_passback);
       }

       cubespinnervisibility();
  }

 function cubespinnervisibility() {
   var ub_clmb = setInterval(clmbdiv, 500);

   function clmbdiv() {
       if (!mobileCheck()) {
         if (document.querySelector('#div-clmb-ctn-465459-1').childNodes) {
           if (document.querySelector('#div-clmb-ctn-465459-1').childNodes[0]) {
                 ub_iframe = document.getElementById('ifr_465459-1');
                 ub_innerDoc = (ub_iframe.contentDocument) ? ub_iframe.contentDocument : ub_iframe.contentWindow.document;
                 ub_innerDoc = ub_innerDoc.querySelector('.main_div_swiper');

                 ub_z2 = document.createElement("div");
                 ub_z2.id = "ub-cmpgn-ad";
                 ub_z2.setAttribute('href',"https://unibots.in/?utm_source=unibots&utm_medium=cubeadwidget");
                 ub_z2.style = "color:#fff;line-height:11px;border-radius:5px;font-size:10px;width:130px;position:absolute;top:10px;text-align:center;right:26px;background-repeat:no-repeat;background-position:center;background-color:#17479e;";
                 ub_z2.innerText = "Ads by Unibots";
                 ub_innerDoc.appendChild(ub_z2);

                 // ub_innerDoc.querySelector('#ub-cmpgn-ad').addEventListener('click', function() {
                 //   window.open('https://unibots.in/?utm_source=unibots&utm_medium=cubeadwidget', '_blank');
                 // });
                 clearInterval(ub_clmb);
           }
         }
       }
       else {
         if (document.querySelector('#div-clmb-ctn-465460-1').childNodes) {
           if (document.querySelector('#div-clmb-ctn-465460-1').childNodes[0]) {
                 ub_iframe = document.getElementById('ifr_465460-1');
                 ub_innerDoc = (ub_iframe.contentDocument) ? ub_iframe.contentDocument : ub_iframe.contentWindow.document;
                 ub_innerDoc = ub_innerDoc.querySelector('.main_div_swiper');

                 ub_z2 = document.createElement("div");
                 ub_z2.id = "ub-cmpgn-ad";
                 ub_z2.setAttribute('href',"https://unibots.in/?utm_source=unibots&utm_medium=cubeadwidget");
                 ub_z2.style = "color:#fff;line-height:11px;border-radius:5px;font-size:10px;width:130px;position:absolute;top:10px;text-align:center;right:26px;background-repeat:no-repeat;background-position:center;background-color:#17479e;";
                 ub_z2.innerText = "Ads by Unibots";
                 ub_innerDoc.appendChild(ub_z2);

                 // ub_innerDoc.querySelector('#ub-cmpgn-ad').addEventListener('click', function() {
                 //   window.open('https://unibots.in/?utm_source=unibots&utm_medium=cubeadwidget', '_blank');
                 // });
                 clearInterval(ub_clmb);
           }
         }
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
