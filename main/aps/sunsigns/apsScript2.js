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
      adCode: ["/21928950349,1019715/sunsigns.org_banner2_ub_ebda_120x600",],
      sizes: [[120, 600],],
      adId: ["div-gpt-ad-1632902504286-0",]
    };

    apSlots = [];

    var googletag = googletag || {}; googletag.cmd = googletag.cmd || [];

    for(let ub_i = 0 ; ub_i < mappings.adCode.length; ub_i++) {
      apSlotTemp = {
        slotID: mappings.adId[ub_i],
        slotName: mappings.adCode[ub_i],
        sizes: mappings.sizes[ub_i]
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
          if (event.slot.getAdUnitPath() === "/21928950349,1019715/sunsigns.org_banner2_ub_ebda_120x600") {
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
        }
    }

      function ub_checkAdRendered(){
      	adId = 'div-gpt-ad-1632902504286-0';
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
                clientData= clientData["sunsigns"]["120x600"];
                var randomNum = Math.floor(Math.random()*(27));
                imgname = clientData["imgurls"][randomNum];
                redirectlink = clientData["redirectlinks"][randomNum];

                ub_imgurls = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/aps/sunsigns/120x600AdBannerImages/"+imgname;
                ub_psbckurl = document.createElement("a");
                ub_psbckurl.href = redirectlink;
                ub_psbckurl.setAttribute("target","_parent");
                ub_psbckimg = document.createElement("img");
                ub_psbckimg.src = ub_imgurls;
                ub_psbckimg.style = "width:120px; height:600px;";
                ub_psbckurl.appendChild(ub_psbckimg);
                document.querySelector('#div-gpt-ad-1632902504286-0').appendChild(ub_psbckurl);
            })
            .catch(err => console.error(err));
      }
      </script>
    </body>
    </html>`;

  const iframe = document.createElement("iframe");
  iframe.srcdoc = htmlSrc;
  (iframe.frameElement || iframe).style.cssText = "width: 100%; height: 100%; border: 0; margin:0;";
  iframe.src = "javascript:false";
  ub_div = document.querySelector('script[src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/aps/sunsigns/apsScript2.js"]').parentElement;
  // ub_div = document.querySelector('script[src="http://localhost/unibots/main/aps/sunsigns/apsScript2.js"]').parentElement;

  ub_divn = document.createElement("div");
  ub_divn.id = "ub-aps";
  ub_divn.style = "width:120px; height:600px;"
  ub_div.appendChild(ub_divn);
  ub_divn.appendChild(iframe);

})();
