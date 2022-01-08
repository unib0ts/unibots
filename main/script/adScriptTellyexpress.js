var mybotstyleSheet = ".ub-popup-ad-container{width:100%;top:50%;left:50%;position:fixed;display:flex;pointer-events:auto;align-items:center;transform:translate(-50%,-50%);}.ub-popup-ad{width:auto !important;height:auto !important;position: fixed !important;top: 50%;left: 50%;align-items: center;transform: translate(-50%, -50%);z-index:2147483646}.mybotpopupCloseButton{background-color:#fff;color:#000;cursor:pointer;font-family:arial;font-weight:700;position:absolute;top:25px;left:2px;font-size:25px;line-height:25px;width:25px;height:25px;z-index:2147483647;text-align:center}";

var css = document.createElement("style");
css.type = "text/css";
css.appendChild(document.createTextNode(mybotstyleSheet));
document.getElementsByTagName("head")[0].appendChild(css);

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

if (mobileCheck()) {
    z2 = document.createElement("div");
    z2.id = "ub-popup-ad-container";
    z2.className = "ub-popup-ad-container";
    z2.innerHTML =
        '<span class="mybotpopupCloseButton" id="mybotpopupCloseButton" onclick="mybotubPopadcls()" style="display:none">\u0078</span><div class="ub-popup-ad" id="div-gpt-ad-1629457284866-0"></div>';
    x2 = document.querySelector("body");
    x2.appendChild(z2);
}


function mybotubPopadcls() {
    document.getElementById("ub-popup-ad-container").style.display = "none";
}

var s0 = document.createElement("script");
s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
s0.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(s0);

var s1 = document.createElement("script");
s1.async = "async";
s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
s1.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(s1);

var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;

var GEO_CODE = "";
(function () {
    var request = new XMLHttpRequest();
    url =
        "https://pro.ip-api.com/json/?fields=status,message,countryCode&key=LWKtz4EzQwMJRyQ";
    request.open("GET", url, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = request.responseText;
            data = JSON.parse(data);
            if (data.status == "success") {
                GEO_CODE = data.countryCode;
            } else {
                console.error("Geo Request Failed");
            }
        } else {
            console.error("Request failed from server");
        }
        mainHbRun();
    };
    request.onerror = function () {
        console.error("Request failed to Reach GEO Server");
        mainHbRun();
    };
    request.send();
})();

const customConfigObjectA = {
    buckets: [
        {
            precision: 2, //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
            min: 0,
            max: 20,
            increment: 0.01, // from $0 to $5, 1-cent increments
        },
    ],
};

var adUnits = [];

var div_1_sizes = [
  [480, 320],
  [320, 480]
];

if (mobileCheck()) {
    adUnits1 = {
        code: "/22082859479,22212097781/tellyexpress.com_hb_popup",
        mediaTypes: {
            banner: {
                sizes: div_1_sizes,
            },
        },
        bids: [
              // { bidder: 'appnexus', params: { placementId: '21146574' } }, /* one placementId for all sizes  my appnexus bidder */
              { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4244930'} },
              // { bidder: 'oftmedia', params: { placementId: '20846125' } },
              // // // // { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
              // // // { bidder: 'emx_digital', params: { tagid: '112606' } }, /* sizeless */
              // // // // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
              // { bidder: 'nobid', params: { siteId: '22049997436' } },
              { bidder: 'openx', params: {unit: '556534032', delDomain: 'unibots-d.openx.net'} },
              // // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
              // // // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
              // // // { bidder: 'criteo', params: {networkId: '10542'} },
              // // // { bidder: 'criteointl', params: {networkId: '10545'} },
              // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
              { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
             { bidder: 'sovrn', params: {tagid: '993910'} },
             { bidder: 'ucfunnel', params: { adid : 'ad-2736E8A89E786DD608A972BAB89B6366'} },
              // { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        ],
    };
    adUnits.push(adUnits1);
}

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function () {
    googletag.pubads().disableInitialLoad();
});

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];


function mainHbRun(){
  ubpbjs.que.push(function() {
    ubpbjs.addAdUnits(adUnits);
    ubpbjs.aliasBidder('criteo','criteointl');
    ubpbjs.bidderSettings = {
      'appnexus': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.86; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
      'pubmatic': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.74; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
      'rubicon': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.75; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
      'openx': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.75; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
      'criteo': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.75; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
      'nobid': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
      'oftmedia': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.80; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
      'sovrn': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.81; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
      //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },

      '33across': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
      'emx_digital': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
      'rhythmone': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
      'eplanning': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
      'adyoulike': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
      'smartadserver': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
      'onetag': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
      'ucfunnel': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } }
    };
    ubpbjs.setConfig({
      floors: {
        currency: 'USD',
        // skipRate: 5,
        // modelVersion: 'Sports Ad Unit Floors',
        schema: {
            fields: ['mediaType']
        },
        values: {
            'banner': 0.01,
        }
      },
    	priceGranularity: customConfigObjectA,
     //consentManagement: { gdpr: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400, allowAuctionWithoutConsent: true }, usp: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400 } },
      //cache: {url: "https://prebid.adnxs.com/pbc/v1/cache"},
      userSync: {
          iframeEnabled: true,
          syncsPerBidder: 999, // and no more than 3 syncs at a time
          // syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
          filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
          // enableOverride: true // publisher will call `ubpbjs.triggerUserSyncs()'
          userIds: [{
              name: "id5Id",
              params: {
                  partner: 438,            // change to the Partner Number you received from ID5
              },
              storage: {
                  type: "cookie",
                  name: "id5id.1st",       // create a cookie with this name
                  expires: 90,             // cookie lasts for 90 days
                  refreshInSeconds: 8*3600 // refresh ID every 8 hours to ensure it is fresh
              }
          }],
          auctionDelay: 500},
      debug: false,
      useBidCache: true,
      enableSendAllBids: false, // Default will be `true` as of 1.0
      bidderSequence: 'random', // Default is random
      publisherDomain: 'https://www.tellyexpress.com/',
      bidderTimeout: PREBID_TIMEOUT+500,
      //pubcid: {expInterval: },
      // "currency": {
      //    // enables currency feature
      //    "adServerCurrency": "AED",
      //    "granularityMultiplier":3 ,
      //    // optionally override the default rate file
      //    "conversionRateFile": "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/currency/currency.json",
      //    // optionally provide a default rate in case the file can't be read
      //    "defaultRates": { "USD": { "AED": 3.67 }}
      //  }
     });
    ubpbjs.requestBids({
        bidsBackHandler: initAdserver,
        timeout: PREBID_TIMEOUT,
        labels: [GEO_CODE],
        });
      });
      // in case ubpbjs doesn't load
      setTimeout(function() {
      initAdserver();
      }, FAILSAFE_TIMEOUT);
}

var ub_slotp

if (mobileCheck()) {
  googletag.cmd.push(function () {
       ub_slotp = googletag.defineSlot("/22082859479,22212097781/tellyexpress.com_hb_popup",div_1_sizes,"div-gpt-ad-1629457284866-0").addService(googletag.pubads());
      googletag.pubads().collapseEmptyDivs(true);
      googletag.pubads().setCentering(true);
      googletag.pubads().setPrivacySettings({ restrictDataProcessing: true });
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.pubads().addEventListener("slotRenderEnded", function (event) {
        if (event.slot.getAdUnitPath() === "/22082859479,22212097781/tellyexpress.com_hb_popup") {
            ub_checkAd1Rendered();
        }
      });
  });
}


function initAdserver() {
    if (ubpbjs.initAdserverSet) return;
    ubpbjs.initAdserverSet = true;
    googletag.cmd.push(function () {
        ubpbjs.que.push(function () {
            ubpbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh([ub_slotp]);
        });
    });
}

ub_ad1RefreshFlag = 0;
function ub_checkAd1Rendered() {
    adId1 = "div-gpt-ad-1629457284866-0";
    var nodes = document.getElementById(adId1).childNodes[0].childNodes;
    if (
        !(nodes.length && nodes[0].nodeName.toLowerCase() == "iframe") ||
        document.getElementById(adId1).style.display == "none"
    ) {
        document.querySelector("#ub-popup-ad-container").style.display = "none";
    } else if (nodes.length && nodes[0].nodeName.toLowerCase() == "iframe") {
        document.getElementById("mybotpopupCloseButton").style.display =
            "block";
        document.querySelector("#ub-popup-ad-container").style.display =
            "block";
        mybotpopupad = document.querySelector("#ub-popup-ad-container");
        mybotpopupad.style.height = "100%";
        mybotpopupad.style.backgroundColor = "rgb(0, 0, 0)";
        mybotpopupad.style.zIndex = "2147483647";
    }
}
//
// function refreshBidTemp(ub_slotp) {
//     ubpbjs.que.push(function () {
//         ubpbjs.requestBids({
//             timeout: PREBID_TIMEOUT,
//             adUnitCodes: ["/22082859479,22212097781/tellyexpress.com_hb_popup"],
//             bidsBackHandler: function () {
//                 googletag.cmd.push(function () {
//                     ubpbjs.que.push(function () {
//                         ubpbjs.setTargetingForGPTAsync();
//                         googletag.pubads().refresh([ub_slotp]);
//                     });
//                 });
//             },
//         });
//     });
// }
