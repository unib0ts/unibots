var div_1_sizes = [300, 100];
var div_2_sizes = [320, 50];
var div_3_sizes = [125, 125];
var div_4_sizes = [200, 200];
var adUnits = [];

// var ub_divsToCheck = {
// 	"unibots-video": false,
// };
//
// var ub_interval = setInterval(() => {
// 	flag = false;
// 	checkFlag = false;
// 	for (x in ub_divsToCheck) {
// 		if (document.getElementById(x) !== null) {
// 			ub_divsToCheck[x] = true;
// 			checkFlag = true;
// 		}
// 	}
// 	for (x in ub_divsToCheck) {
// 		if (ub_divsToCheck[x] == false) {
// 			flag = true;
// 		}
// 	}
// 	if (!flag && checkFlag) {
// 		var cachebuster = Math.round(new Date().getTime() / 1000);
// 		url = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ubPlayer/andhrajyothy/script.min.js?cb='+cachebuster;
// 		ub_vs = document.createElement('script');
// 		ub_vs.src = url;
//     ub_vs.type = "text/javascript";
//     document.getElementsByTagName('head')[0].appendChild(ub_vs);
// 		clearInterval(ub_interval);
// 	}
// }, 500);

var PREBID_TIMEOUT = 1200;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 45000;

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

const customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $20, 1-cent increments
    }]
};

// if (document.getElementById('ub_ads')) {
//   // if (mobileCheck()) {
//     adUnits1 =
//     {
//         code: '/21928950349/andhrajyothy_ipl_adx_125x125',
//         mediaTypes: {
//             banner: {
//                 sizes: div_3_sizes
//             }
//         },
//         bids: [
//          //  { bidder: 'appnexus', params: { placementId: '20215289' } }, /* one placementId for all sizes  my appnexus bidder */
//          // { bidder: 'oftmedia', params: { placementId: '20846125' } },
//          // { bidder: 'sovrn', params: {tagid: '884531'} },
//          // { bidder: 'smartadserver', params: { siteId: '371032', pageId: '1306256', formatId: '100192', domain: 'https://prg8.smartadserver.com' } },
//          // // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
//          // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//          // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3586025'} },
//          // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//          // // { bidder: 'criteo', params: {networkId: '10542'} },
//          // // { bidder: 'criteointl', params: {networkId: '10545'} },
//          // { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//          // // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
//          // { bidder: '33across', params: { siteId : 'dNs7ZaNiqr64oSaKjGFx_2', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//          // { bidder: 'emx_digital', params: { tagid: '147573' } }, /* sizeless */
//          // { bidder: 'openx', params: {unit: '544022829', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//          // { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
//          // // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//          //  { bidder: 'nobid', params: { siteId : '22103912380'} },
//           // { bidder: 'smartadserver', params: { siteId: '371032', pageId: '1306256', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//           // { bidder: 'ucfunnel', params: { adid : 'ad-E2B4227B993A8AB7F76DE224B4AADEB9'} },
//          //  // { bidder: 'criteo', params: {networkId: '4902'} },
//           //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//           // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
//         ]
//     };
//     adUnits.push(adUnits1);
//   // }
//   // else {
//   //   adUnits1 =
//   //   {
//   //       code: '/21928950349/andhrajyothy.com_ipl_200x200',
//   //       mediaTypes: {
//   //           banner: {
//   //               sizes: div_4_sizes
//   //           }
//   //       },
//   //       bids: [
//   //         { bidder: 'appnexus', params: { placementId: '20215289' } }, /* one placementId for all sizes  my appnexus bidder */
//   //        { bidder: 'oftmedia', params: { placementId: '20846125' } },
//   //        { bidder: 'sovrn', params: {tagid: '884530'} },
//   //        { bidder: 'smartadserver', params: { siteId: '371032', pageId: '1306256', formatId: '94414', domain: 'https://prg8.smartadserver.com' } },
//   //        // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
//   //        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//   //        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3586024'} },
//   //        { bidder: 'criteo', params: {networkId: '10542'} },
//   //        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//   //        { bidder: 'criteointl', params: {networkId: '10545'} },
//   //        { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//   //        // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
//   //        { bidder: '33across', params: { siteId : 'dNs7ZaNiqr64oSaKjGFx_2', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//   //        // { bidder: 'emx_digital', params: { tagid: '115867' } }, /* sizeless */
//   //        { bidder: 'openx', params: {unit: '544022828', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//   //        // // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
//   //        // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//   //         { bidder: 'nobid', params: { siteId : '22103912380'} },
//   //         // { bidder: 'smartadserver', params: { siteId: '371032', pageId: '1306256', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//   //         // { bidder: 'ucfunnel', params: { adid : 'ad-E2B4227B993A8AB7F76DE224B4AADEB9'} },
//   //        //  // { bidder: 'criteo', params: {networkId: '4902'} },
//   //         //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//   //         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
//   //       ]
//   //   };
//   //   adUnits.push(adUnits1);
//   // }
// }

if (!mobileCheck()) {
  adUnits1 =
  {
      code: '/21928950349/andhrajyothy.com_nb_320x50',
      mediaTypes: {
          banner: {
              sizes: div_2_sizes
          }
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: '20215289' } }, /* one placementId for all sizes  my appnexus bidder */
       { bidder: 'oftmedia', params: { placementId: '20846125' } },
       { bidder: 'sovrn', params: {tagid: '884529'} },
       { bidder: 'smartadserver', params: { siteId: '371032', pageId: '1306256', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
       // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
       { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
       // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3586023'} },
       { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
       // { bidder: 'criteo', params: {networkId: '10542'} },
       // { bidder: 'criteointl', params: {networkId: '10545'} },
       { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
       // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
       { bidder: '33across', params: { siteId : 'dNs7ZaNiqr64oSaKjGFx_2', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
       { bidder: 'emx_digital', params: { tagid: '147573' } }, /* sizeless */
       { bidder: 'openx', params: {unit: '544022827', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
       { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
       // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        { bidder: 'nobid', params: { siteId : '22103912380'} },
        // { bidder: 'smartadserver', params: { siteId: '371032', pageId: '1306256', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        // { bidder: 'ucfunnel', params: { adid : 'ad-E2B4227B993A8AB7F76DE224B4AADEB9'} },
       //  // { bidder: 'criteo', params: {networkId: '4902'} },
        //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
      ]
  };
  adUnits.push(adUnits1);
}else {
  if (document.getElementById('unibots-ad')) {
    adUnits1 =
    {
        code: '/21928950349/andhrajyothy_300x100_ipl',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '20215289' } }, /* one placementId for all sizes  my appnexus bidder */
         { bidder: 'oftmedia', params: { placementId: '20846125' } },
         { bidder: 'sovrn', params: {tagid: '884528'} },
         { bidder: 'smartadserver', params: { siteId: '371032', pageId: '1306256', formatId: '94416', domain: 'https://prg8.smartadserver.com' } },
         // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
         // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3586022'} },
         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
         // { bidder: 'criteo', params: {networkId: '10542'} },
         // { bidder: 'criteointl', params: {networkId: '10545'} },
         { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
         // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         { bidder: '33across', params: { siteId : 'dNs7ZaNiqr64oSaKjGFx_2', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
         { bidder: 'emx_digital', params: { tagid: '147573' } }, /* sizeless */
         { bidder: 'openx', params: {unit: '544022826', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
         { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
         // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22103912380'} },
          // { bidder: 'smartadserver', params: { siteId: '371032', pageId: '1306256', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          // { bidder: 'ucfunnel', params: { adid : 'ad-E2B4227B993A8AB7F76DE224B4AADEB9'} },
         //  // { bidder: 'criteo', params: {networkId: '4902'} },
          //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
}


// ======== DO NOT EDIT BELOW THIS LINE =========== //
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];

function mainHbRun(){
ubpbjs.que.push(function() {
    ubpbjs.addAdUnits(adUnits);
    ubpbjs.aliasBidder('criteo','criteointl');
    ubpbjs.bidderSettings = {
      'appnexus': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.86; } },
      'pubmatic': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.74; } },
      'rubicon': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
      'openx': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
      'criteo': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
      'criteointl': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
      'nobid': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      'oftmedia': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.80; } },
      'sovrn': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.81; } },
      //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      'onetag': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
      // 'sonobi': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
      // 'smartadserver': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },

      '33across': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      'emx_digital': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      'rhythmone': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      'eplanning': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } }
    };
    ubpbjs.setConfig({

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
      publisherDomain: 'https://www.andhrajyothy.com/',
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

var mappings = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  adId: [],
  renderedFlag: [false, false]
};

function ub_checkAdRendered(adId, ub_slot, adCode){
  ub_slotNum = ub_slot[ub_slot.length-1]-1;
  if(!mappings.renderedFlag[ub_slotNum]){
    adId1 = adId;
    var nodes = document.getElementById(adId1).childNodes[0].childNodes;
    if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      // setTimeout(function() {
      //   refreshBid(ub_slot, adCode);
      // }, REFRESH_TIMEOUT);
      mappings.renderedFlag[ub_slotNum] = true;
    }
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
              googletag.pubads().refresh([ub_slot]);
              var adsCalled = false;
              for(var i=0;i<x.length;i++){
                var bc = x[i].bidderCode;
                if(bc=="openx"){
                  adsCalled = true;
                  callBotman();
                }
              }
              if(!adsCalled){
                callAdsUB();
              }
          });
        });
      }
    });
  });
}
var botmanCalled = false;
var userStatusBM = '';
function callBotman(){
  if(userStatusBM == ''){
    var request = new XMLHttpRequest();
    var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=andhrajyothy';
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

function initAdserver() {
    if (ubpbjs.initAdserverSet) return;
    ubpbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        ubpbjs.que.push(function() {
            ubpbjs.setTargetingForGPTAsync();
            // googletag.pubads().refresh(mappings.slots);
            var x = ubpbjs.getAllPrebidWinningBids();
            var adsCalled = false;
            for(var i=0;i<x.length;i++){
              var bc = x[i].bidderCode;
              if(bc=="openx"){
                adsCalled = true;
                callBotman();
              }
            }
            if(!adsCalled){
              callAdsUB();
            }
        });
    });
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

// if (document.getElementById('ub_ads')) {
//   // if (mobileCheck()) {
//     document.getElementById('ub_ads').innerHTML = '<div id="div-gpt-ad-1618241175552-0">';
//     mappings.slotNumbers.push(3);
//     mappings.adCode.push('/21928950349/andhrajyothy_ipl_adx_125x125');
//     mappings.sizes.push(div_3_sizes);
//     mappings.adId.push('div-gpt-ad-1618241175552-0');
//     googletag.cmd.push(function() {
//       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//         if (event.slot === ub_slot3) {
//           ub_checkAdRendered('div-gpt-ad-1618241175552-0', ub_slot3, ['/21928950349/andhrajyothy_ipl_adx_125x125']);
//         }
//       });
//     });
//   // }
//   // else {
//   //   document.getElementById('ub_ads').innerHTML = '<div id="div-gpt-ad-1618241242726-0">';
//   //   mappings.slotNumbers.push(4);
//   //   mappings.adCode.push('/21928950349/andhrajyothy.com_ipl_200x200');
//   //   mappings.sizes.push(div_4_sizes);
//   //   mappings.adId.push('div-gpt-ad-1618241242726-0');
//   //   googletag.cmd.push(function() {
//   //     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//   //       if (event.slot === ub_slot4) {
//   //         ub_checkAdRendered('div-gpt-ad-1618241242726-0', ub_slot4, ['/21928950349/andhrajyothy.com_ipl_200x200']);
//   //       }
//   //     });
//   //   });
//   // }
// }
if (!mobileCheck()) {
  mappings.slotNumbers.push(2);
  mappings.adCode.push('/21928950349/andhrajyothy.com_nb_320x50');
  mappings.sizes.push(div_2_sizes);
  mappings.adId.push('div-gpt-ad-1618224026370-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot2) {
        ub_checkAdRendered('div-gpt-ad-1618224026370-0', ub_slot2, ['/21928950349/andhrajyothy.com_nb_320x50']);
      }
    });
  });
}else {
  if (document.getElementById('unibots-ad')) {
  mappings.slotNumbers.push(1);
  mappings.adCode.push('/21928950349/andhrajyothy_300x100_ipl');
  mappings.sizes.push(div_1_sizes);
  mappings.adId.push('div-gpt-ad-1618055682084-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAdRendered('div-gpt-ad-1618055682084-0', ub_slot1, ['/21928950349/andhrajyothy_300x100_ipl']);
      }
    });
  });
 }
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
}
// setTimeout(function() {
//     initAdserver();
// }, FAILSAFE_TIMEOUT);
