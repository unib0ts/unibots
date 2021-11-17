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
      adCode: ["/21928950349,1019715/sunsigns.org_banner1_ub_ebda_728x90_320x50"],
      sizes: [[320, 50], [728, 90]],
      adId: ["div-gpt-ad-1632902458570-0",]
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
      googletag.enableServices(); });

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
      </script>
    </body>
    </html>`;

  const iframe = document.createElement("iframe");
  iframe.srcdoc = htmlSrc;
  (iframe.frameElement || iframe).style.cssText = "width: auto; height: auto; border: 0; margin:0;";
  iframe.src = "javascript:false";
  ub_div = document.querySelector('script[src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/aps/sunsigns/apsScript4.js"]').parentElement;
  ub_div.appendChild(iframe);
})();
