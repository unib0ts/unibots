(function () {
  let htmlSrc =
    `<html lang="en">
    <head>
    <meta charset="utf-8">
    </head>
    <body style="margin:0;">
    <script async src="https://www.googletagservices.com/tag/js/gpt.js"></script>
    <script src="https://c.amazon-adsystem.com/aax2/apstag.js"></script>
    <script>
    var mappings = {
      adCode: ["/21928950349,1019715/sunsigns.org_banner3_famousbirthdays_ub_ebda_728x90_320x50",],
      sizes: [[728, 90],[320, 50]],
      adId: ["div-gpt-ad-1632908178420-0",]
    };

    apSlots = [];

    var googletag = googletag || {}; googletag.cmd = googletag.cmd || [];

    for(let ub_i = 0 ; ub_i < mappings.adCode.length; ub_i++) {
      apSlotTemp = {
        slotID: mappings.adId[ub_i],
        slotName: mappings.adCode[ub_i],
        sizes: mappings.sizes[0]
      }
      apSlots.push(apSlotTemp);

      ub_z1 = document.createElement("div");
      ub_z1.id = mappings.adId[ub_i];
      ub_x1 = document.querySelector("body");
      ub_x1.appendChild(ub_z1);
   }

    googletag.cmd.push(function () {
      googleDefine(mappings.adCode, mappings.sizes, mappings.adId);
      googletag.pubads().disableInitialLoad();
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot.getAdUnitPath() === "/21928950349,1019715/sunsigns.org_banner3_famousbirthdays_ub_ebda_728x90_320x50") {
            ub_checkAdRendered();
          }
      });
    });

    apstag.init({
      pubID: "8282b9c6-324d-4939-b1ea-958d67a9e637",
      adServer: "googletag",
      isSelfServePub: true
    });

    apstag.fetchBids( {
      slots: apSlots,
    }, function (bids) {
      googletag.cmd.push(function () {
        apstag.setDisplayBids();
        googletag.pubads().refresh(); }); } );

    function googleDefine(adCode, sizes, adId){
      for(let i = 0 ; i < mappings.adCode.length; i++) {
          let ub_slotnum = "ub_slot" + [i];
          ub_slotnum =  googletag.defineSlot(adCode[i], sizes[i], adId[i]);
          ub_slotnum.addService(googletag.pubads());
          var ub_mappingsize = googletag.sizeMapping()
             .addSize([1024, 768], [728, 90])
             .addSize([0, 0], [320, 50])
             .build();
          ub_slotnum.defineSizeMapping(ub_mappingsize);
        }
    }
    function ub_checkAdRendered(){
      adId = 'div-gpt-ad-1632908178420-0';
      var nodes = document.getElementById(adId).childNodes[0].childNodes;
      if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
       }
       else {
         ub_passback();
       }
    }

    function ub_passback() {
      fetch("https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/aps/sunsigns/passbackbanner.json")
          .then(res => res.json())
          .then(data => {
              clientData = data;
              if (window.innerWidth>=728) {
                clientData= clientData["sunsigns"]["728x90"];
              }else {
                clientData= clientData["sunsigns"]["320x50"];
              }
              var randomNum = Math.floor(Math.random()*(27));
              imgname = clientData["imgurls"][randomNum];
              redirectlink = clientData["redirectlinks"][randomNum];

              if (window.innerWidth>=728) {
                 ub_imgurls = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/aps/sunsigns/728x90AdBannerImages/"+imgname;
              }else {
                 ub_imgurls = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/aps/sunsigns/320x50AdBannerImages/"+imgname;
              }
              ub_psbckurl = document.createElement("a");
              ub_psbckurl.href = redirectlink;
              ub_psbckurl.setAttribute("target","_parent");
              ub_psbckimg = document.createElement("img");
              ub_psbckimg.src = ub_imgurls;
              if (window.innerWidth>=728) {
                ub_psbckimg.style = "width:728px; height:90px;";
              }else {
                ub_psbckimg.style = "width:320px; height:50px;";
              }
              ub_psbckurl.appendChild(ub_psbckimg);
              document.querySelector('#div-gpt-ad-1632908178420-0').appendChild(ub_psbckurl);
          })
          .catch(err => console.error(err));
    }
    </script>
  </body>
  </html>`;

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

  const iframe = document.createElement("iframe");
  iframe.srcdoc = htmlSrc;
  (iframe.frameElement || iframe).style.cssText = "width: 100%; height: 100%; border: 0; margin:0;";
  iframe.src = "javascript:false";
  ub_div = document.querySelector('script[src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/aps/sunsigns/apsScript1.js"]').parentElement;
  // ub_div = document.querySelector('script[src="http://localhost/unibots/main/aps/sunsigns/apsScript1.js"]').parentElement;
  ub_divn = document.createElement("div");
  ub_divn.id = "ub-aps";
  if(!mobileCheck()){
    ub_divn.style = "width:728px; height:90px;"
  }else {
    ub_divn.style = "width:320px; height:50px;"
  }
  ub_div.appendChild(ub_divn);
  ub_divn.appendChild(iframe);
})();
