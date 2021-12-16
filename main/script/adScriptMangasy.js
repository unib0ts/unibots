mybotGACode = "G-EQYNQN8H8D";
mybotgabywa =
    '<script async src="https://www.googletagmanager.com/gtag/js?id=' +
    mybotGACode +
    '"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "' +
    mybotGACode +
    '");</script>';

ub_ga = document.createElement("div");
ub_ga.id = "gabywa";
document.getElementsByTagName("head")[0].appendChild(ub_ga);
document.getElementById("gabywa").innerHTML = mybotgabywa;
loadAd("gabywa");

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

var PREBID_TIMEOUT = 3000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;

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

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function () {
    googletag.pubads().disableInitialLoad();
});

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];

var mapping_full_hb = {
    slots: [],
    adCode: [],
    slotNumbers: [],
    sizes: [],
    adId: [],
    renderedFlag: [],
};

var hb_full_common_bidders = [
    { bidder: "appnexus", params: { placementId: "23767649" } }, /* one placementId for all sizes  my appnexus bidder */,
    // { bidder: 'oftmedia', params: { placementId: '4168843' } },
    // { bidder: '33across', params: { siteId : 'cI4Kuiu30r7kDFrkHcnlxd', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
    // // // { bidder: 'emx_digital', params: { tagid: '112606' } }, /* sizeless */
    // // // // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
    // { bidder: 'nobid', params: { siteId: '22656256385' } },
    // // { bidder: 'adkernel', params: {zoneId: '152650', host: 'cpm.fmlabsonline.com'} },
    // { bidder: 'nobid', params: { siteId : '22052735848'} },
    // // { bidder: 'openx', params: {unit: '541046310', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
    // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
    // // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
    // // { bidder: 'criteo', params: {networkId: '10542'} },
    // // { bidder: 'criteointl', params: {networkId: '10545'} },
    { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } }
    // { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
];

var mappings_full_hb_config = {
    targetUnits: [
    	  'UB_300x250',
    		'UB_300x250_2',
    ],
    adUnitNames: [
        "/21957769615/mangasy.com_pubfuture_300x250_1",
        "/21957769615/mangasy.com_pubfuture_300x250_2"
    ],
    adId: [
          "div-gpt-ad-1639405850040-0", //'/22140546871/bongdaplus.vn_pc_balloon_hb_300x600'
          "div-gpt-ad-1639405869086-0" //'/22140546871/bongdaplus.vn_in-article_336x280',
    ],
    sizes: [
        [300, 250],
        [300, 250]
    ],
    bids: [
        hb_full_common_bidders.concat([
            // { bidder: "pubmatic", params: { publisherId: "159448", adSlot: "4167178" } },
            // { bidder: 'openx', params: {unit: '556400375', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            // { bidder: 'ucfunnel', params: { adid : 'ad-AA7BE79329EB49E7F238BA286D7789E'} },
            // // // // //     { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
            // // // // //     {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
                // { bidder: 'sovrn', params: {tagid: '987341'} },
                // { bidder: 'oftmedia', params: { placementId: '4168843' } },
                  // { bidder: 'oftmedia', params: { placementId: '4168843' } },
            // // // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        ]),
        hb_full_common_bidders.concat([
            // { bidder: "pubmatic", params: { publisherId: "159448", adSlot: "4167177" } },
            // { bidder: 'openx', params: {unit: '556400374', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            // { bidder: 'ucfunnel', params: { adid : 'ad-627DA73EB86782ED0E9E3724B263B47E'} },
            // // // // //     { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
            // // // // //     {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
                // { bidder: 'sovrn', params: {tagid: '987342'} },
                // { bidder: 'oftmedia', params: { placementId: '4168844' } },
            // // // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        ]),
    ],
    isAP: [
        false,
        false,
    ],
};

var mappings_refresh = {
    adUnitNames: [
      "/21957769615/mangasy.com_pubfuture_300x250_1",
      "/21957769615/mangasy.com_pubfuture_300x250_2"
    ],
};

var mappings_final_refresh = {
    adUnitNames: [],
    adSlots: [],
};

var mybotubad = setInterval(ub_adscript, 500);

function ub_adscript() {
    var mybotAdscriptEnabled =0;
    for(var i=0; i<mappings_full_hb_config.targetUnits.length; i++){
     	while (document.getElementById(mappings_full_hb_config.targetUnits[i]) != null) {

            targetUnit = document.getElementById(mappings_full_hb_config.targetUnits[i]);
            z1= document.createElement('div');
            z1.id = mappings_full_hb_config.adId[i];
            targetUnit.appendChild(z1);

            adUnitTemp = {
                code: mappings_full_hb_config.adUnitNames[i],
                mediaTypes: {
                    banner: {
                        sizes: mappings_full_hb_config.sizes[i],
                    },
                },
                bids: mappings_full_hb_config.bids[i],
            };
            adUnits.push(adUnitTemp);

            mapping_full_hb.slotNumbers.push(i + 1);
            mapping_full_hb.adCode.push(mappings_full_hb_config.adUnitNames[i]);
            mapping_full_hb.adId.push(mappings_full_hb_config.adId[i]);
            mapping_full_hb.sizes.push(mappings_full_hb_config.sizes[i]);

            clearInterval(mybotubad);
            mybotAdscriptEnabled= 1;
  					break;
        }
    }
    if (mybotAdscriptEnabled) {
       ub_ad();
    }
}

function ub_ad() {
  var s0 = document.createElement("script");
  s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
  s0.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(s0);

  var s1 = document.createElement("script");
  s1.async = "async";
  s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
  s1.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(s1);

  var GEO_CODE = '';
  (function (){
    var request = new XMLHttpRequest();
      url = 'https://pro.ip-api.com/json/?fields=status,message,countryCode&key=LWKtz4EzQwMJRyQ';
      request.open('GET', url, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var data = request.responseText;
          data = JSON.parse(data);
          if(data.status == "success") {
            GEO_CODE = data.countryCode;
          }
          else {
            console.error("Geo Request Failed");
          }
        }
        else {
          console.error('Request failed from server');
        }
        mainHbRun();
      };
      request.onerror = function() {
        console.error('Request failed to Reach GEO Server');
        mainHbRun();
      };
      request.send();
  })();

  googletag.cmd.push(function() {
          googletag.pubads().addEventListener('slotRenderEnded', function(event) {
            if(mappings_refresh.adUnitNames.includes(event.slot.getAdUnitPath())){
              mappings_final_refresh.adSlots.push(event.slot);
              mappings_final_refresh.adUnitNames.push(event.slot.getSlotId().getAdUnitPath());
            }
          });
    });

  setTimeout(function() {
    refreshBid(mappings_final_refresh.adSlots, mappings_final_refresh.adUnitNames);
  }, REFRESH_TIMEOUT);


  if(typeof googletag.defineSlot === "function"){
   googleDefine(mapping_full_hb.slotNumbers, mapping_full_hb.adCode, mapping_full_hb.sizes, mapping_full_hb.adId);
   googlePush();
  }
  else{
   // setTimeout(function(){
     googletag.cmd.push(function() {
       googleDefine(mapping_full_hb.slotNumbers, mapping_full_hb.adCode, mapping_full_hb.sizes, mapping_full_hb.adId);
       googlePush();
     });
   // }, 500);
  }

  function mainHbRun(){
   ubpbjs.que.push(function() {
       ubpbjs.addAdUnits(adUnits);
       ubpbjs.bidderSettings = {
         'appnexus': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.86; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'pubmatic': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.74; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'rubicon': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.75; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'openx': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.75; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'criteo': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.75; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'nobid': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'oftmedia': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.80; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'sovrn': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.81; temp = temp - 0.0323; return temp>0? temp: 0;} },
         //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },

         '33across': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'emx_digital': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'rhythmone': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'eplanning': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'adyoulike': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'smartadserver': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'onetag': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'ucfunnel': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} }
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
         publisherDomain: 'https://www.mangasy.com/',
         bidderTimeout: PREBID_TIMEOUT+500,
         //pubcid: {expInterval: },
         //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
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
}


function refreshBid(ub_slot, adCode) {
    ubpbjs.que.push(function(){
      ubpbjs.requestBids({
        timeout: PREBID_TIMEOUT,
        adUnitCodes: adCode,
        bidsBackHandler: function() {
          googletag.cmd.push(function() {
            ubpbjs.que.push(function() {
                ubpbjs.setTargetingForGPTAsync();
                googletag.pubads().refresh(ub_slot);
                // var adsCalled = false;
                // for(var i=0;i<x.length;i++){
                //   var bc = x[i].bidderCode;
                //   if(bc=="openx"){
                //     adsCalled = true;
                //     callBotman();
                //   }
                // }
                // if(!adsCalled){
                //   callAdsUB();
                // }
            });
          });
        }
      });
    });
}

function initAdserver() {
    if (ubpbjs.initAdserverSet) return;
    ubpbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        ubpbjs.que.push(function() {
            ubpbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh(mapping_full_hb.slots);
            // var x = ubpbjs.getAllPrebidWinningBids();
            // var adsCalled = false;
            // for(var i=0;i<x.length;i++){
            //   var bc = x[i].bidderCode;
            //   if(bc=="openx"){
            //     adsCalled = true;
            //     callBotman();
            //   }
            // }
            // if(!adsCalled){
            //   callAdsUB();
            // }
        });
    });
}

function googleDefine(slotNumbers, adCode, sizes, adId){
  for(var i=0; i<slotNumbers.length;i++){
    eval('ub_slot'+slotNumbers[i]+ '= '+'googletag.defineSlot(adCode[i], sizes[i], adId[i])');
    var a = eval('ub_slot'+slotNumbers[i]);
    a.addService(googletag.pubads());
    mapping_full_hb.slots.push(eval('ub_slot'+slotNumbers[i]));
  }
}

function googlePush(){
  googletag.cmd.push(function() {
    googletag.pubads().collapseEmptyDivs(true);
    googletag.pubads().setCentering(true);
    googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
    googletag.pubads().enableSingleRequest();
    // googletag.pubads().enableLazyLoad({
    // 					fetchMarginPercent: 200,
    // 					renderMarginPercent: 100,
    // 					mobileScaling: 2.0
    // 				});
    googletag.enableServices();
  });
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
