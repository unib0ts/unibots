mybotBlockedPagesFlag = 1;
mybotBlockedUrl = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/blocks/blocksDanviet.json';
mybotBlockedClientName = 'danviet';

if(typeof mybotBlockedPagesFlag !== 'undefined' && mybotBlockedPagesFlag ==1){
  urlToCheck = window.location.host+window.location.pathname;

  var request = new XMLHttpRequest();
  url = 'https://api.unibots.in/block?client=Danviet&page='+urlToCheck;

  request.open('GET', url, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = request.responseText;
      data = JSON.parse(data);
      // data = data[mybotBlockedClientName];
      if(data) {
        data = data.urls;
        if(data.status == true){
          return false;
        }
        else{
          mybotubScript();
        }
      }
    }
    else {
      console.log('Block Check Request failed');
      mybotubScript();
    }
  };
  request.onerror = function() {
    console.log('Request failed');
    mybotubScript();
  };
  request.send();
}
else{
  mybotubScript();
}

//load apstag.js library
// !function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
//
// var requestManager = {
//     adserverRequestSent: false,
//     aps: false,
//     prebid: false
// };
//
// //initialize the apstag.js library on the page to allow bidding
// apstag.init({
//      pubID: '5d8da970-719a-4a86-9bd0-adf1589f8c5e', //enter your unibque pub ID here as shown above, it must within quotes
//      adServer: 'googletag'
// });
// apSlots = []

  mybotGACode = 'UA-169191914-16';
  mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';

  ub_ga= document.createElement('div');
  ub_ga.id = 'gabywa';
  document.getElementsByTagName('head')[0].appendChild(ub_ga);
  document.getElementById('gabywa').innerHTML=mybotgabywa;
  loadAd('gabywa');

  var mybotstyleSheet='.ub-sticky-ad-container{width:100%;height:auto;text-align:center;background:#fff;position:fixed;bottom:0;box-shadow:0 -3px 3px rgba(0,0,0,.2)!important;z-index:2147483647}.ub-sticky-ad{width:100%;z-index:2147483647;pointer-events:all;cursor:pointer;padding-top:4px}.close_ub-sticky-ad{display:none;position:absolute;top:-20px;background:#fff;color:#000;left:0px;pointer-events:all;height:20px;z-index:100;width:30px;font-size:26px;line-height:23px;box-shadow:0 -3px 3px rgba(0,0,0,.2)!important;border-radius:2px 10px 0 0} #div-gpt-ad-1623754209575-0 iframe {border: unset !important;vertical-align: unset !important;}';

  var css=document.createElement('style');
  css.type='text/css';
  css.appendChild(document.createTextNode(mybotstyleSheet));
  document.getElementsByTagName('head')[0].appendChild(css);

  function mobileCheck() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
  };

  if (mobileCheck()) {
    z1= document.createElement('div');
    z1.id = 'ub-sticky-ad-container';
    z1.className = 'ub-sticky-ad-container';
    z1.innerHTML ='<span class="close_ub-sticky-ad" id="close_ub-sticky-ad" onclick="mybotubstickyad()">\u0078</span><div class="ub-sticky-ad" id="div-gpt-ad-1623754209575-0"></div>';
    x1 = document.querySelector('body');
    x1.appendChild(z1);

  }

  function mybotubstickyad() {
   document.getElementById('ub-sticky-ad-container').style.display='none';
  }

  var div_1_sizes = [300, 100];

  var adUnits = [];

  var PREBID_TIMEOUT = 1400;
  var FAILSAFE_TIMEOUT = 3000;
  var REFRESH_TIMEOUT = 60000;

  const customConfigObjectA = {
  "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $5, 1-cent increments
    }]
  };

  if (mobileCheck()) {
  adUnits1 =
  {
      code: '/21928950349,22623999158/danviet.vn_mb_anchor_300x100',
      mediaTypes: {
          banner: {
              sizes: div_1_sizes
          }
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: '19669443' } }, /* one placementId for all sizes  my appnexus bidder */
        { bidder: 'oftmedia', params: { placementId: '23908996' } },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3796457'} },
        { bidder: 'sovrn', params: {tagid: '921072'} },
        { bidder: '33across', params: { siteId : 'c9qjIQu30r7kDFrkHcnlxd', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        // // { bidder: 'emx_digital', params: { tagid: '112606' } }, /* sizeless */
        // // // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        // // { bidder: 'nobid', params: { siteId: '22049997436' } },
        { bidder: 'openx', params: {unit: '544096397', delDomain: 'unibots-d.openx.net'}},
        { bidder: 'ucfunnel', params: { adid : 'ad-627D33DD98DE293BFEE296D628A46DD6'} },
        // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        // // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // // { bidder: 'criteo', params: {networkId: '10542'} },
        // // { bidder: 'criteointl', params: {networkId: '10545'} },
        // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            { bidder: 'rubicon', params: {accountId: '23976', siteId: '400078', zoneId: '2265404'} }
      ]
  };
  adUnits.push(adUnits1);

  }

  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
  googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
  });

  var ubpbjs = ubpbjs || {};
  ubpbjs.que = ubpbjs.que || [];


  var mappings = {
    slots: [],
    adCode: [],
    slotNumbers: [],
    sizes: [],
    adId: [],
    renderedFlag: [false]
  };

function mybotubScript() {
  var s0 = document.createElement('script');
  s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
  s0.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(s0);

  var s1 = document.createElement('script');
  s1.async = "async";
  s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
  s1.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(s1);

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

  function mainHbRun(){
  ubpbjs.que.push(function() {
    // ubpbjs.setBidderConfig({
    // bidders: ['emx_digital'],   // can list more bidders here if they share the same config
    // config: {
    //   schain: {
    //     validation: "relaxed",
    //     config: {
    //       ver:"1.0",
    //       complete: 1,
    //       nodes: [
    //         {
    //           asi:"unibots.in",   //directseller
    //           sid:"1504",     //seller_id
    //           hp:1
    //         },
    //       ]
    //     }
    //   }
    // }
    // });
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
      rubicon: {singleRequest: true},
      priceGranularity: customConfigObjectA,
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
      publisherDomain: 'https://danviet.vn/',
      bidderTimeout: PREBID_TIMEOUT+500,
      //pubcid: {expInterval: },
      //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
     });
    ubpbjs.requestBids({
          bidsBackHandler: initAdserver,
          timeout: PREBID_TIMEOUT,
          // labels: [GEO_CODE],
      });
  });
  setTimeout(function() {
      initAdserver();
  }, FAILSAFE_TIMEOUT);
  }

    // apSlotTemp = {
    //   // slotID: mappings_full_hb_config.targetUnits[index],
    //   // slotName: mappings_full_hb_config.adUnitNames[index],
    //   // sizes: mappings_full_hb_config.sizes[index]
    //
    //   slotID: 'div-gpt-ad-1623754209575-0',
    //   slotName: '/21928950349,22623999158/danviet.vn_mb_anchor_300x100',
    //   sizes: mappings.sizes,
    // }
    // apSlots.push(apSlotTemp);

    if (mobileCheck()) {
    mappings.slotNumbers.push(1);
    mappings.adCode.push('/21928950349,22623999158/danviet.vn_mb_anchor_300x100');
    mappings.sizes.push(div_1_sizes);
    mappings.adId.push('div-gpt-ad-1623754209575-0');
    googletag.cmd.push(function() {
      // callAPStagBids(); //Ap part
      // callAPSAds(mappings.adCode, mappings.slots);
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot1) {
          ub_checkAdRendered('div-gpt-ad-1623754209575-0', ub_slot1, ['/21928950349,22623999158/danviet.vn_mb_anchor_300x100']);
        }
      });
    });
    }

    if(typeof googletag.defineSlot === "function"){
    googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
    googlePush();
    }
    else{
    googletag.cmd.push(function() {
      googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
      googlePush();
    });
    // }
    }

    // function callAPSAds(adCode, ub_slot){
    //   ubpbjs.que.push(function(){
    //     ubpbjs.requestBids({
    //       timeout: PREBID_TIMEOUT,
    //       adUnits: adUnits,
    //       adUnitCodes: adCode,
    //       bidsBackHandler: function() {
    //         // ubpbjs.initAdserverSetHB = true;
    //         googletag.cmd.push(function() {
    //           ubpbjs.que.push(function() {
    //               ubpbjs.setTargetingForGPTAsync();
    //               requestManager.prebid = true;
    //               biddersBack();
    //               // googletag.pubads().refresh(ub_slot);
    //           });
    //         });
    //       }
    //     });
    //   });
    // }
    // function callAPStagBids(){
    //   apstag.fetchBids({
    //     slots: apSlots,
    //      timeout: 2000
    //   },function(bids) {
    //           googletag.cmd.push(function() {
    //               apstag.setDisplayBids();
    //               requestManager.aps = true;
    //               biddersBack();
    //           });
    //       }
    //   );
    // }
    // function biddersBack() {
    //     if (requestManager.aps && requestManager.prebid) {
    //         sendAdserverRequest();
    //     }
    //     return;
    // }
    // function sendAdserverRequest() {
    //     if (requestManager.adserverRequestSent === true) {
    //         return;
    //     }
    //     requestManager.adserverRequestSent = true;
    //     googletag.cmd.push(function() {
    //         googletag.pubads().refresh(mappings.slots);
    //     });
    // }
}

var botmanCalled = false;
var userStatusBM = '';
function callBotman(){
  if(userStatusBM == ''){
    var request = new XMLHttpRequest();
    var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=danviet';
    request.open('GET', url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = request.responseText;
        if(data != ""){
          data = JSON.parse(data);
          userStatusBM = data;
          if(userStatusBM == "0" || userStatusBM == "3"){
            callAdsUB();
          }
          else{
            console.log('Not Valid Traffic for openx');
          }
        }
        else{
          console.error('Data not returned from server');
          callAdsUB();
        }
      }
      else {
        console.error('Request failed from server');
        callAdsUB();
      }
    };
    request.onerror = function() {
      console.error('Request failed to Reach Server');
      callAdsUB();
    };
    request.send();
  }
  else{
    if(userStatusBM == "0" || userStatusBM == "3"){
      callAdsUB();
    }
    else{
      console.log('Not Valid Traffic for openx');
    }
  }

}

function callAdsUB(){
  googletag.pubads().refresh(mappings.slots);
}

function googleDefine(slotNumbers, adCode, sizes, adId){
  for(var i=0; i<slotNumbers.length;i++){
    eval('ub_slot'+slotNumbers[i]+ '= '+'googletag.defineSlot(adCode[i], sizes[i], adId[i])');
    var a = eval('ub_slot'+slotNumbers[i]);
    a.addService(googletag.pubads());
    mappings.slots.push(eval('ub_slot'+slotNumbers[i]));
  }
}

function googlePush(){
  googletag.cmd.push(function() {
    googletag.pubads().collapseEmptyDivs(true);
    googletag.pubads().setCentering(true);
    googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
}

function ub_checkAdRendered(adId, ub_slot, adCode){
  ub_slotNum = ub_slot[ub_slot.length-1]-1;
  if(!mappings.renderedFlag[ub_slotNum]){
    adId1 = adId;
    var nodes = document.getElementById(adId1).childNodes[0].childNodes;
    if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      document.getElementById('close_ub-sticky-ad').style.display = 'block';
      setTimeout(function() {
        refreshBid(ub_slot, adCode);
      }, REFRESH_TIMEOUT);
      mappings.renderedFlag[ub_slotNum] = true;
    }
  }
}

function refreshBid(ub_slot, adCode) {
  ubpbjs.que.push(function () {
    ubpbjs.requestBids({
      timeout: PREBID_TIMEOUT,
      adUnitCodes: adCode,
      bidsBackHandler: function (bids) {
        googletag.cmd.push(function () {
          ubpbjs.que.push(function () {
            ubpbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh([ub_slot]);
            // console.log('HB server request');
          });
        });
        // callAds(bids);
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
      googletag.pubads().refresh(mappings.slots);
    });
  });
  // callAds(bids);
}

function callAds(bids = {}) {
  let ubBidscheckFlag = false;
  if (Object.keys(bids).length === 0 && bids.constructor === Object){}
  else {
    bids[Object.keys(bids)].bids.forEach((bid) => {
      if (bid.cpm > 0.01) {
        ubBidscheckFlag = true;
      }
    })
  }

  if (ubBidscheckFlag) {
    googletag.cmd.push(function () {
      ubpbjs.que.push(function () {
        ubpbjs.setTargetingForGPTAsync();
        googletag.pubads().refresh(mappings.slots);
        console.log('HB server request');
      });
    });
  }
  else{
    googletag.cmd.push(function () {
      googletag.pubads().refresh(mappings.slots);
      console.log('Only Google server request');
    });
  }
}

function loadAd(id, adUnits){
  var elm = document.getElementById(id);
  var scripts = Array(elm.querySelectorAll("script"));
  scripts = scripts[0];
  for(var i=0; i<scripts.length; i++) {
    oldScript = scripts[i];
    const newScript = document.createElement("script");
    var scriptAttr = Array(oldScript.attributes);
    scriptAttr = scriptAttr[0];
    for(var j=0; j<scriptAttr.length; j++) {
      attr = scriptAttr[j];
      newScript.setAttribute(attr.name, attr.value);
    }
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
    newScript.onload = function() {
      if(adUnits !== undefined) {
        smartyads.buildUnits(adUnits);
      }
    };
    oldScript.parentNode.replaceChild(newScript, oldScript);
  }
}
