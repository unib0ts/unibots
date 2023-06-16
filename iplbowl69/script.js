// var s0 = document.createElement('script');
// s0.src = "https://cdn.unibots.in/headerbidding/clmbcube/cubeScriptTupaki.js";
// s0.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(s0);
var s0 = document.createElement('script');
s0.async = "async";
s0.src = "https://cdn.unibots.in/genericcube/common/script.js";
s0.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(s0);

window.unibotsDirectAds = window.unibotsDirectAds || { cmd: [] };
unibotsDirectAds.cmd.push("tupaki");

// var s0 = document.createElement('script');
// s0.async = "async";
// s0.src = "https://cdn.unibots.in/directcampaign/common/script.js";
// s0.type = "text/javascript";
// document.getElementsByTagName('head')[0].appendChild(s0);

// window.ubCampaign = window.ubCampaign || { cmd: [] };
//  ubCampaign.cmd.push("tupaki");


 ubadScript();
     
   var mybotstyleSheet ="mybot #ub-roller-wrapper{z-index:90 !important;} #mybot-adcover{display:block;width: max-content; height:100px;bottom: 0px !important;text-align: center;z-index: 90 !important;position: fixed !important;}@media screen and (max-width:635px) { #mybot-adcover{bottom: 0px;right:unset;}}";
   var css = document.createElement("style");
   css.type = "text/css";
   css.appendChild(document.createTextNode(mybotstyleSheet));
   document.getElementsByTagName("head")[0].appendChild(css);
  //  mybotstyleSheet2 = ".sharebtn-sticky { bottom: 115px;}";

   function ubadScript() {

    let ubInt = setInterval(()=>{
      if(document.querySelector("#mybot-adcover")){
      let z1Wrapper = document.getElementById("mybot-adcover");
      let z1 = document.createElement("div");
      z1.id = "div-gpt-ad-1617905562342-0";
      z1Wrapper.appendChild(z1);

      // var s0 = document.createElement("script");
      // s0.src = "https://cdn.unibots.in/headerbidding/common/hb.js";
      // s0.type = "text/javascript";
      // document.getElementsByTagName("head")[0].appendChild(s0);

      // window.unibotshb = window.unibotshb || { cmd: [] };
      // unibotshb.cmd.push(() => {
      //     ubHB("tupaki");
      // });
      var s0 = document.createElement("script");
      s0.src = "https://cdn.unibots.in/headerbidding/adScriptTupaki.js";
      s0.type = "text/javascript";
      document.getElementsByTagName("head")[0].appendChild(s0);
      
      clearInterval(ubInt);
      }      
    }, 1000);

    

      googletag.cmd.push(function () {
        googletag.pubads().addEventListener("slotRenderEnded", function (event) {
                  if (event.slot.getSlotId().getDomId() ==="div-gpt-ad-1617905562342-0"){
                let nodes_anchr = document.getElementById("div-gpt-ad-1617905562342-0").childNodes[0].childNodes;
                if (nodes_anchr.length && nodes_anchr[0].nodeName.toLowerCase() == "iframe") {
                 let siteShareBtn = document.querySelector(".sharebtn-sticky");
                 if(siteShareBtn != null){
                  siteShareBtn.style.bottom =  "115px";
                 }                 
                }
          }
        });
        });       
    
  }

