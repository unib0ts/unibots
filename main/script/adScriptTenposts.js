var s0 = document.createElement('script');
	s0.async = "async";
	s0.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ubHB/main/hb.js";
	s0.type = "text/javascript";
	document.getElementsByTagName('head')[0].appendChild(s0);

	window.unibotshb = window.unibotshb || { cmd: [] };
	unibotshb.cmd.push(() => {
	    ubHB("tenposts");
	});

// // var s3 = document.createElement('script');
// // s3.setAttribute("data-ad-client", "ca-pub-6376205116838079");
// // s3.async = true;
// // s3.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
// // document.getElementsByTagName('head')[0].appendChild(s3);
//
// var s0 = document.createElement('script');
// s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
// s0.type = "text/javascript";
// document.getElementsByTagName('head')[0].appendChild(s0);
//
// var s1 = document.createElement('script');
// s1.async = "async";
// s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
// s1.type = "text/javascript";
// document.getElementsByTagName('head')[0].appendChild(s1);
//
// var PREBID_TIMEOUT = 2000;
// var FAILSAFE_TIMEOUT = 3000;
// var REFRESH_TIMEOUT = 60000;
//
// var GEO_CODE = '';
// (function (){
//   var request = new XMLHttpRequest();
//     url = 'https://pro.ip-api.com/json/?fields=status,message,countryCode&key=LWKtz4EzQwMJRyQ';
//     request.open('GET', url, true);
//     request.onload = function() {
//       if (request.status >= 200 && request.status < 400) {
//         var data = request.responseText;
//         data = JSON.parse(data);
//         if(data.status == "success") {
//           GEO_CODE = data.countryCode;
//         }
//         else {
//           console.error("Geo Request Failed");
//         }
//       }
//       else {
//         console.error('Request failed from server');
//       }
//       mainHbRun();
//     };
//     request.onerror = function() {
//       console.error('Request failed to Reach GEO Server');
//       mainHbRun();
//     };
//     request.send();
// })();
//
// const customConfigObjectA = {
//  "buckets" : [{
//     "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
//     "min" : 0,
//     "max" : 20,
//     "increment" : 0.01  // from $0 to $20, 1-cent increments
//     }]
// };
//
// // ======== DO NOT EDIT BELOW THIS LINE =========== //
// var googletag = googletag || {};
// googletag.cmd = googletag.cmd || [];
// googletag.cmd.push(function() {
//     googletag.pubads().disableInitialLoad();
// });
//
// var ubpbjs = ubpbjs || {};
// ubpbjs.que = ubpbjs.que || [];
//
// var mapping_full_hb = {
//     slots: [],
//     adCode: [],
//     slotNumbers: [],
//     sizes: [],
//     adId: [],
//     renderedFlag: []
//   };
//
// var adUnits_full_hb = [];
//
// var hb_common_bidders = [
// { bidder: 'appnexus', params: { placementId: '23947945' } }, /* one placementId for all sizes  my appnexus bidder */
// // { bidder: 'oftmedia', params: { placementId: '20846125' } },
// { bidder: '33across', params: { siteId : 'dqcauSCIWr7io-rkHcnlKl', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
// // // { bidder: 'emx_digital', params: { tagid: '107927' } }, /* sizeless */
// // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
// { bidder: 'nobid', params: { siteId: '22667551867' } },
// // { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
// // // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
// // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
// // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
// // // { bidder: 'criteo', params: {networkId: '10542'} },
// { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
// // // { bidder: 'criteointl', params: {networkId: '10545'} },
// // { bidder: 'rubicon', params: {accountId: '23976', siteId: '400078', zoneId: '2265098'} }
// ];
//
// var mappings_full_hb_config = {
// targetUnits: [
//   'unibots_MiddleUnit',
//   'unibots_LeftSquare',
//   'unibots_RightSquare',
//   'unibots_StickyDesktop',
//   'unibots_RightTopDesktop',
//   'unibots_MobileMiddleUnit',
//   'unibots_StickyMobile',
//   'unibots_MobileSecondAd',
//   'unibots_RightDownDesktop'
// ],
// adUnitNames: [
//     '/22439852253/MiddleUnit',
//     '/22439852253/LeftSquare',
//     '/22439852253/RightSquare',
//     '/22439852253/StickyDesktop',
//     '/22439852253/RightTopDesktop',
//     '/22439852253/MobileMiddleUnit',
//     '/22439852253/StickyMobile',
//     '/22439852253/MobileSecondAd',
//     '/22439852253/RightDownDesktop'
// ],
// sizes: [
//   [300, 250],
//   [300, 250],
//   [250, 250],
//   [728, 90],
//   [300, 250],
//   [300, 600],
//   [320, 50],
//   [320, 100],
//   [300, 600],
// ],
// adId: [
//   'unibots1',
//   'unibots2',
//   'unibots3',
//   'unibots4',
//   'unibots5',
//   'unibots6',
//   'unibots7',
//   'unibots8',
//   'unibots9',
// ],
// bids: [
//   hb_common_bidders.concat([
//        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4244915'} },
//        { bidder: 'ucfunnel', params: { adid : 'ad-BE78396D6969DA33179D6BD82B4B97D2'} },
//        { bidder: 'sovrn', params: {tagid: '994297'} },
//        { bidder: 'openx', params: {unit: '556537498', delDomain: 'unibots-d.openx.net'}},
//      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
//   ]), //Infeedinstream1
//   hb_common_bidders.concat([
//        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4244916'} },
//        { bidder: 'ucfunnel', params: { adid : 'ad-AA7BE948493633DA183B82372B4BBD24'} },
//        { bidder: 'sovrn', params: {tagid: '994298'} },
//        { bidder: 'openx', params: {unit: '556537499', delDomain: 'unibots-d.openx.net'}},
//      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
//   ]), //Infeedinstream2
//   hb_common_bidders.concat([
//        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4244920'} },
//        { bidder: 'ucfunnel', params: { adid : 'ad-9A298D343B84D3A3C837629982BD34A'} },
//        { bidder: 'sovrn', params: {tagid: '994302'} },
//        { bidder: 'openx', params: {unit: '556537503', delDomain: 'unibots-d.openx.net'}},
//      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
//   ]), //Infeed-Kinhdoanh
//   hb_common_bidders.concat([
//        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4244922'} },
//        { bidder: 'ucfunnel', params: { adid : 'ad-8A29386B63BD4383F3D77BDE9896264'} },
//        { bidder: 'sovrn', params: {tagid: '994304'} },
//        { bidder: 'openx', params: {unit: '556537505', delDomain: 'unibots-d.openx.net'}},
//      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
//   ]), //Infeedinstream1
//   hb_common_bidders.concat([
//        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4244921'} },
//        { bidder: 'ucfunnel', params: { adid : 'ad-627DA3969ABDB934C64D2ABB2392799'} },
//        { bidder: 'sovrn', params: {tagid: '994303'} },
//        { bidder: 'openx', params: {unit: '556537504', delDomain: 'unibots-d.openx.net'}},
//      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
//   ]), //Infeedinstream2
//   hb_common_bidders.concat([
//        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4244917'} },
//        { bidder: 'ucfunnel', params: { adid : 'ad-627DA396989E7827F6497E6E43764A9'} },
//        { bidder: 'sovrn', params: {tagid: '994299'} },
//        { bidder: 'openx', params: {unit: '556537500', delDomain: 'unibots-d.openx.net'}},
//      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
//   ]), //Infeed-Kinhdoanh
//   hb_common_bidders.concat([
//        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4244923'} },
//        { bidder: 'ucfunnel', params: { adid : 'ad-34B83D9292BAA6E613A7278D993974A7'} },
//        { bidder: 'sovrn', params: {tagid: '994305'} },
//        { bidder: 'openx', params: {unit: '556537506', delDomain: 'unibots-d.openx.net'}},
//      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
//   ]), //Infeedinstream1
//   hb_common_bidders.concat([
//        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4244918'} },
//        { bidder: 'ucfunnel', params: { adid : 'ad-7728EB43B27B82E41B997B2366BAB8A2'} },
//        { bidder: 'sovrn', params: {tagid: '994300'} },
//        { bidder: 'openx', params: {unit: '556537501', delDomain: 'unibots-d.openx.net'}},
//      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
//   ]), //Infeedinstream2
//   hb_common_bidders.concat([
//        // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4244918'} },
//        // { bidder: 'ucfunnel', params: { adid : 'ad-7728EB43B27B82E41B997B2366BAB8A2'} },
//        // { bidder: 'sovrn', params: {tagid: '994300'} },
//        // { bidder: 'openx', params: {unit: '556537501', delDomain: 'unibots-d.openx.net'}},
//      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
//   ]), //Infeedinstream2
// ],
// }
//
// function checkHBUnits(){
//   changeConfigToHB();
//   callMapUnits();
//
//   setTimeout(function() {
//       initAdserver_hb_full();
//   }, FAILSAFE_TIMEOUT);
// }
//
// function callFullHBAds(adCode, ub_slot){
//   // fillRefreshMap();
//   ubpbjs.que.push(function(){
//     ubpbjs.requestBids({
//       timeout: PREBID_TIMEOUT,
//       adUnits: adUnits_full_hb,
//       adUnitCodes: adCode,
//       bidsBackHandler: function() {
//         ubpbjs.initAdserverSetHB = true;
//         googletag.cmd.push(function() {
//           ubpbjs.que.push(function() {
//               ubpbjs.setTargetingForGPTAsync();
//               // requestManager.prebid = true;
//               // biddersBack();
//               googletag.pubads().refresh(ub_slot);
//           });
//         });
//       }
//     });
//   });
// }
//
// function initAdserver_hb_full() {
//     if (ubpbjs.initAdserverSetHB) return;
//     ubpbjs.initAdserverSetHB = true;
//     googletag.cmd.push(function() {
//         ubpbjs.que.push(function() {
//             ubpbjs.setTargetingForGPTAsync();
//             googletag.pubads().refresh(mapping_full_hb.slots);
//             // var x = ubpbjs.getAllPrebidWinningBids();
//             // var adsCalled_hb = false;
//             // for(var i=0;i<x.length;i++){
//             //   var bc = x[i].bidderCode;
//             //   if(bc=="openx"){
//             //     adsCalled_hb = true;
//             //     callBotman_hb();
//             //   }
//             // }
//             // if(!adsCalled_hb){
//             //   callAdsUB_hb();
//             // }
//         });
//     });
// }
//
// function callMapUnits(){
//   googletag.cmd.push(function() {
//     x = googletag.pubads().getSlots();
//     x_len = x.length;
//     for(i=0;i<x.length;i++){
//       if(mappings_full_hb_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())){
//         index = mappings_full_hb_config.adUnitNames.indexOf(x[i].getSlotId().getAdUnitPath());
//         size_array = [];
//         size_temp_array = googletag.pubads().getSlots()[i].getSizes();
//         for(j=0;j<size_temp_array.length;j++){
//           length = size_temp_array[j][Object.keys(size_temp_array[j])[0]];
//            height = size_temp_array[j][Object.keys(size_temp_array[j])[1]];
//           temp_array = [length, height];
//           size_array.push(temp_array);
//         }
//
//         adUnitTemp = {
//           code: x[i].getSlotId().getAdUnitPath(),
//           mediaTypes: {
//               banner: {
//                   sizes: size_array
//               }
//           },
//           bids: mappings_full_hb_config.bids[index]
//         };
//         // adUnitTemp = {
//         //   code: mappings_full_hb_config.adUnitNames[index],
//         //   mediaTypes: {
//         //       banner: {
//         //           sizes: mappings_full_hb_config.sizes[index]
//         //       }
//         //   },
//         //   bids: mappings_full_hb_config.bids[index]
//         // };
//         adUnits_full_hb.push(adUnitTemp);
//         mapping_full_hb.slots.push(x[i]);
//         mapping_full_hb.slotNumbers.push(i+1);
//         // mapping_full_hb.slotNumbers.push(index+1);
//         mapping_full_hb.adCode.push(x[i].getSlotId().getAdUnitPath());
//         // mapping_full_hb.adCode.push(mappings_full_hb_config.adUnitNames[index]);
//         // mapping_full_hb.sizes.push(mappings_full_hb_config.sizes[index]);
//         mapping_full_hb.sizes.push(size_array);
//
//         // if(mappings_full_hb_config.isAP[index]){
//         //   apSlotTemp = {
//         //     // slotID: mappings_full_hb_config.targetUnits[index],
//         //     // slotName: mappings_full_hb_config.adUnitNames[index],
//         //     // sizes: mappings_full_hb_config.sizes[index]
//         //
//         //     slotID: googletag.pubads().getSlots()[i].getSlotId().getDomId(),
//         //     slotName: x[i].getSlotId().getAdUnitPath(),
//         //     sizes: size_array
//         //   }
//         //   apSlots.push(apSlotTemp);
//         // }
//       }
//       // else if(mappings_extra_units_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())){
//       //   mappings_extra_units.slots.push(x[i]);
//       //   mappings_extra_units.adUnitNames.push(x[i]);
//       // }
//     }
//
//     // adUnitTemp1 = {
//     //   code: '/21959913182/sakshi.com_NB_320x50',
//     //   mediaTypes: {
//     //     native: {
//     //       image: {
//     //         // sizes: [300, 100],
//     //         aspect_ratios: [{
//     //           min_width: 100,
//     //           min_height: 50,
//     //           ratio_width: 2,
//     //           ratio_height: 1,
//     //         }],
//     //         sendId: true
//     //       },
//     //       title: {
//     //         len: 50,
//     //         sendId: true
//     //       },
//     //       sponsoredBy: {
//     //         required: true,
//     //         sendId: true
//     //       },
//     //       clickUrl: {
//     //         required: true,
//     //         sendId: true
//     //       }
//     //     }
//     //   },
//     //   bids: [
//     //     { bidder: 'appnexus', params: { placementId: '19056673' } },
//     //     { bidder: 'oftmedia', params: { placementId: '20846125' } }
//     //   ]
//     // }
//     // adUnits_full_hb.push(adUnitTemp1);
//     //
//     // callAPStagBids();
//     callFullHBAds(mapping_full_hb.adCode, mapping_full_hb.slots);
//     // callExtraHBAds(mappings_extra_units.adUnitNames, mappings_extra_units.slots)
//   });
// }
//
// function mainHbRun(){
//  ubpbjs.que.push(function() {
//      ubpbjs.addAdUnits(adUnits);
//      ubpbjs.bidderSettings = {
//        'appnexus': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.86; } },
//        'pubmatic': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.74; } },
//        'rubicon': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
//        'openx': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
//        'criteo': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
//        'nobid': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
//        'oftmedia': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.80; } },
//        'sovrn': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.81; } },
//        //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
//
//        '33across': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
//        'emx_digital': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
//        'rhythmone': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
//        'eplanning': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } }
//      };
//      ubpbjs.setConfig({
//       rubicon: {singleRequest: true},
//        priceGranularity: customConfigObjectA,
//       //consentManagement: { gdpr: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400, allowAuctionWithoutConsent: true }, usp: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400 } },
//        //cache: {url: "https://prebid.adnxs.com/pbc/v1/cache"},
//        userSync: {
//            iframeEnabled: true,
//            syncsPerBidder: 999, // and no more than 3 syncs at a time
//            // syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
//            filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
//            // enableOverride: true // publisher will call `ubpbjs.triggerUserSyncs()'
//            userIds: [{
//                name: "id5Id",
//                params: {
//                    partner: 438,            // change to the Partner Number you received from ID5
//                },
//                storage: {
//                    type: "cookie",
//                    name: "id5id.1st",       // create a cookie with this name
//                    expires: 90,             // cookie lasts for 90 days
//                    refreshInSeconds: 8*3600 // refresh ID every 8 hours to ensure it is fresh
//                }
//            }],
//            auctionDelay: 500},
//        debug: false,
//        useBidCache: true,
//        enableSendAllBids: false, // Default will be `true` as of 1.0
//        bidderSequence: 'random', // Default is random
//        publisherDomain: 'https://tenposts.com/',
//        bidderTimeout: PREBID_TIMEOUT+500,
//        //pubcid: {expInterval: },
//        // currency: { 'adServerCurrency': "ILS", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
//       });
//      // ubpbjs.requestBids({
//      //   bidsBackHandler: initAdserver,
//      //   timeout: PREBID_TIMEOUT,
//      //   labels: [GEO_CODE],
//      // });
//  });
//  // in case ubpbjs doesn't load
//  // setTimeout(function() {
//  //     initAdserver();
//  // }, FAILSAFE_TIMEOUT);
// }
//
// function changeConfigToHB(){
//   ubpbjs.que.push(function() {
//     ubpbjs.setConfig({
//       "currency": {
//          "adServerCurrency": "ILS",
//          "granularityMultiplier":3 ,
//          "conversionRateFile": 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json',
//          "defaultRates": { "USD": { "ILS": 3.09 }}
//        }
//      });
//   });
// }
//
// checkHBUnits();
