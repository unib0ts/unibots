var s0 = document.createElement('script');
s0.async = "async";
s0.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ubHB/main/hb.js";
s0.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(s0);

window.unibotshb = window.unibotshb || { cmd: [] };
unibotshb.cmd.push(() => {
    ubHB("ez4mods");
});

//   // var s3 = document.createElement('script');
//   // s3.setAttribute("data-ad-client", "ca-pub-6376205116838079");
//   // s3.async = true;
//   // s3.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
//   // document.getElementsByTagName('head')[0].appendChild(s3);
//
// 	var s0 = document.createElement('script');
// 	s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
// 	s0.type = "text/javascript";
// 	document.getElementsByTagName('head')[0].appendChild(s0);
//
//   var s1 = document.createElement('script');
//   s1.async = "async";
//   s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
//   s1.type = "text/javascript";
//   document.getElementsByTagName('head')[0].appendChild(s1);
//
//   var PREBID_TIMEOUT = 2000;
//   var FAILSAFE_TIMEOUT = 3000;
//   var REFRESH_TIMEOUT = 60000;
//
//   var GEO_CODE = '';
//   (function (){
//     var request = new XMLHttpRequest();
//   		url = 'https://pro.ip-api.com/json/?fields=status,message,countryCode&key=LWKtz4EzQwMJRyQ';
//   		request.open('GET', url, true);
//   		request.onload = function() {
//   			if (request.status >= 200 && request.status < 400) {
//   				var data = request.responseText;
//   				data = JSON.parse(data);
//   				if(data.status == "success") {
//             GEO_CODE = data.countryCode;
//   				}
//   				else {
//   					console.error("Geo Request Failed");
//   				}
//   			}
//   			else {
//   				console.error('Request failed from server');
//   			}
//         mainHbRun();
//   		};
//   		request.onerror = function() {
//   			console.error('Request failed to Reach GEO Server');
//         mainHbRun();
//   		};
//   		request.send();
//   })();
//
//   const customConfigObjectA = {
//    "buckets" : [{
//       "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
//       "min" : 0,
//       "max" : 20,
//       "increment" : 0.01  // from $0 to $20, 1-cent increments
//       }]
//   };
//
//   var adUnits = [];
//
//   var hb_common_bidders = [
//   { bidder: 'appnexus', params: { placementId: '21593812' } }, /* one placementId for all sizes  my appnexus bidder */
//   { bidder: 'oftmedia', params: { placementId: '20846125' } },
//   // { bidder: '33across', params: { siteId : 'b3G35kWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//   // { bidder: 'emx_digital', params: { tagid: '107927' } }, /* sizeless */
//   { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
//   { bidder: 'nobid', params: { siteId: '22405794843' } },
//   { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//   // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
//   // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//   // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//   // { bidder: 'criteo', params: {networkId: '10542'} },
//   { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//   // { bidder: 'criteointl', params: {networkId: '10545'} },
//   { bidder: 'rubicon', params: {accountId: '23976', siteId: '400078', zoneId: '2265098'} }
// ];
//
//   var mapping_hb = {
//   targetUnits: [
//     'ez4mods_unibot1_336x280_300x250_a_tag',
//     'ez4mods_unibot1_336x280_300x250_b_tag',
//     'ez4mods_unibot1_970x250_970x90_tag'
//   ],
//   slotNames: ['ub_slot1' ,'ub_slot2', 'ub_slot3'],
//   adUnitNames: [
//     '/21957769615/ez4mods_hb_336x280_300x250_a_tag',
//     '/21957769615/ez4mods_hb_336x280_300x250_b_tag',
//     '/21957769615/ez4mods_hb_970x250_970x90_tag'
//   ],
//   adId: [
//     'div-gpt-ad-1620993620308-0',
//     'div-gpt-ad-1620993644222-0',
//     'div-gpt-ad-1620993661288-0'
//   ],
//   bids: [
//     hb_common_bidders.concat([
//          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3663038'} },
//          { bidder: 'ucfunnel', params: { adid : 'ad-8A29634BA937749ACB2AED8E497D396A'} },
//          { bidder: 'sovrn', params: {tagid: '897516'} },
// 				 { bidder: 'openx', params: {unit: '544062955', delDomain: 'unibots-d.openx.net'}},
//        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
//     ]), //Infeedinstream1
//     hb_common_bidders.concat([
//          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3663039'} },
//          { bidder: 'ucfunnel', params: { adid : 'ad-27369ED27BE4E83618A4D88E6473B238'} },
//          { bidder: 'sovrn', params: {tagid: '897517'} },
// 				 { bidder: 'openx', params: {unit: '544063105', delDomain: 'unibots-d.openx.net'}},
//        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
//     ]), //Infeedinstream2
//     hb_common_bidders.concat([
//          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3663040'} },
//          { bidder: 'ucfunnel', params: { adid : 'ad-47B4A8927E3A7EE603AA98B9BEA74BE'} },
//          { bidder: 'sovrn', params: {tagid: '897518'} },
// 				 { bidder: 'openx', params: {unit: '544063234', delDomain: 'unibots-d.openx.net'}},
//        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
//     ]), //Infeed-Kinhdoanh
//   ],
//   sizes: [
//     [[300, 250], [336, 280]],
//     [[300, 250], [336, 280]],
//     [[970, 250], [970, 90]],
//   ]
// }
//
//   // ======== DO NOT EDIT BELOW THIS LINE =========== //
//   var googletag = googletag || {};
//   googletag.cmd = googletag.cmd || [];
//   googletag.cmd.push(function() {
//       googletag.pubads().disableInitialLoad();
//   });
//
//   var ubpbjs = ubpbjs || {};
//   ubpbjs.que = ubpbjs.que || [];
//
//   var mappings = {
//       slots: [],
//       adCode: [],
//       slotNumbers: [],
//       sizes: [],
//       adId: [],
//       renderedFlag: []
//     };
//
// 		var mappings_final_refresh = {
// 		    adUnitNames: [],
// 		    adSlots: [],
// 		};
//
// 	for(var i=0; i<mapping_hb.targetUnits.length; i++){
// 	      if (document.getElementById(mapping_hb.targetUnits[i]) != null) {
// 	        targetUnit = document.getElementById(mapping_hb.targetUnits[i]);
// 	        var z= document.createElement('div');
// 	        z.id = mapping_hb.adId[i];
// 	        z.className = mapping_hb.adId[i];
// 	        targetUnit.appendChild(z);
//
// 					mappings.slotNumbers.push(i+1);
// 					mappings.adCode.push(mapping_hb.adUnitNames[i]);
// 					mappings.sizes.push(mapping_hb.sizes[i]);
// 					mappings.adId.push(mapping_hb.adId[i]);
//
// 	        adUnitTemp = {
// 	          code: mapping_hb.adUnitNames[i],
// 	          mediaTypes: {
// 	              banner: {
// 	                  sizes: mapping_hb.sizes[i]
// 	              }
// 	          },
// 	          bids: mapping_hb.bids[i]
// 	        };
// 	        adUnits.push(adUnitTemp);
// 	      }
// 	    }
//
//   function ub_checkAdRendered(adId, ub_slot, adCode){
//     ub_slotNum = ub_slot[ub_slot.length-1]-1;
//     if(!mappings.renderedFlag[ub_slotNum]){
//       adId1 = adId;
//       var nodes = document.getElementById(adId1).childNodes[0].childNodes;
//       if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
//         setTimeout(function() {
//           refreshBid(ub_slot, adCode);
//         }, REFRESH_TIMEOUT);
//         mappings.renderedFlag[ub_slotNum] = true;
//       }
//     }
//   }
//
//   function refreshBid(ub_slot, adCode) {
//     ubpbjs.que.push(function(){
//       ubpbjs.requestBids({
//         timeout: PREBID_TIMEOUT,
//         adUnitCodes: adCode,
//         bidsBackHandler: function() {
//           googletag.cmd.push(function() {
//             ubpbjs.que.push(function() {
//                 ubpbjs.setTargetingForGPTAsync();
//                 googletag.pubads().refresh(ub_slot);
//                 var adsCalled = false;
//                 for(var i=0;i<x.length;i++){
//                   var bc = x[i].bidderCode;
//                   if(bc=="openx"){
//                     adsCalled = true;
//                     callBotman();
//                   }
//                 }
//                 if(!adsCalled){
//                   callAdsUB();
//                 }
//             });
//           });
//         }
//       });
//     });
//   }
//
//   function initAdserver() {
//       if (ubpbjs.initAdserverSet) return;
//       ubpbjs.initAdserverSet = true;
//       googletag.cmd.push(function() {
//           ubpbjs.que.push(function() {
//               ubpbjs.setTargetingForGPTAsync();
//               // googletag.pubads().refresh(mappings.slots);
//               var x = ubpbjs.getAllPrebidWinningBids();
//               var adsCalled = false;
//               for(var i=0;i<x.length;i++){
//                 var bc = x[i].bidderCode;
//                 if(bc=="openx"){
//                   adsCalled = true;
//                   callBotman();
//                 }
//               }
//               if(!adsCalled){
//                 callAdsUB();
//               }
//           });
//       });
//   }
//
//   var botmanCalled = false;
//   var userStatusBM = '';
//   function callBotman(){
//     if(userStatusBM == ''){
//       var request = new XMLHttpRequest();
//       var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=ez4mods';
//       request.open('GET', url, true);
//       request.onload = function() {
//         if (request.status >= 200 && request.status < 400) {
//           var data = request.responseText;
//           if(data != ""){
//             data = JSON.parse(data);
//             userStatusBM = data;
//             if(userStatusBM == "0" || userStatusBM == "3"){
//               callAdsUB();
//             }
//             else{
//               console.log('Not Valid Traffic for openx');
//             }
//           }
//           else{
//             console.error('Data not returned from server');
//             callAdsUB();
//           }
//         }
//         else {
//           console.error('Request failed from server');
//           callAdsUB();
//         }
//       };
//       request.onerror = function() {
//         console.error('Request failed to Reach Server');
//         callAdsUB();
//       };
//       request.send();
//     }
//     else{
//       if(userStatusBM == "0" || userStatusBM == "3"){
//         callAdsUB();
//       }
//       else{
//         console.log('Not Valid Traffic for openx');
//       }
//     }
//
//   }
//
//   function callAdsUB(){
//   	googletag.pubads().refresh(mappings.slots);
//   }
//
//   function googleDefine(slotNumbers, adCode, sizes, adId){
//     for(var i=0; i<slotNumbers.length;i++){
//       eval('ub_slot'+slotNumbers[i]+ '= '+'googletag.defineSlot(adCode[i], sizes[i], adId[i])');
//       var a = eval('ub_slot'+slotNumbers[i]);
//       a.addService(googletag.pubads());
//       mappings.slots.push(eval('ub_slot'+slotNumbers[i]));
//     }
//   }
//
//   function googlePush(){
//     googletag.cmd.push(function() {
//       googletag.pubads().collapseEmptyDivs(true);
//       googletag.pubads().setCentering(true);
//       googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
//       googletag.pubads().enableSingleRequest();
//       googletag.enableServices();
//     });
//   }
//
//
//  if(typeof googletag.defineSlot === "function"){
//    googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
//    googlePush();
//  }
//  else{
//    // setTimeout(function(){
//      googletag.cmd.push(function() {
//        googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
//        googlePush();
//      });
//    // }, 500);
//  }
//
//  googletag.cmd.push(function() {
//          googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//            if(mapping_hb.adUnitNames.includes(event.slot.getAdUnitPath())){
//              mappings_final_refresh.adSlots.push(event.slot);
//              mappings_final_refresh.adUnitNames.push(event.slot.getSlotId().getAdUnitPath());
//            }
//          });
//    });
//
//  setTimeout(function() {
//    refreshBid(mappings_final_refresh.adSlots, mappings_final_refresh.adUnitNames);
//  }, REFRESH_TIMEOUT);
//
//  function mainHbRun(){
//    ubpbjs.que.push(function() {
//        ubpbjs.addAdUnits(adUnits);
//        ubpbjs.bidderSettings = {
//          'appnexus': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.86; } },
//          'pubmatic': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.74; } },
//          'rubicon': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
//          'openx': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
//          'criteo': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
//          'nobid': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
//          'oftmedia': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.80; } },
//          'sovrn': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.81; } },
//          //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
//
//          '33across': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
//          'emx_digital': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
//          'rhythmone': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
//          'eplanning': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } }
//        };
//        ubpbjs.setConfig({
//         rubicon: {singleRequest: true},
//          priceGranularity: customConfigObjectA,
//         //consentManagement: { gdpr: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400, allowAuctionWithoutConsent: true }, usp: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400 } },
//          //cache: {url: "https://prebid.adnxs.com/pbc/v1/cache"},
//          userSync: {
//              iframeEnabled: true,
//              syncsPerBidder: 999, // and no more than 3 syncs at a time
//              // syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
//              filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
//              // enableOverride: true // publisher will call `ubpbjs.triggerUserSyncs()'
//              userIds: [{
//                  name: "id5Id",
//                  params: {
//                      partner: 438,            // change to the Partner Number you received from ID5
//                  },
//                  storage: {
//                      type: "cookie",
//                      name: "id5id.1st",       // create a cookie with this name
//                      expires: 90,             // cookie lasts for 90 days
//                      refreshInSeconds: 8*3600 // refresh ID every 8 hours to ensure it is fresh
//                  }
//              }],
//              auctionDelay: 500},
//          debug: false,
//          useBidCache: true,
//          enableSendAllBids: false, // Default will be `true` as of 1.0
//          bidderSequence: 'random', // Default is random
//          publisherDomain: 'https://ez4mods.com/',
//          bidderTimeout: PREBID_TIMEOUT+500,
//          //pubcid: {expInterval: },
//          //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
//         });
//        ubpbjs.requestBids({
//          bidsBackHandler: initAdserver,
//          timeout: PREBID_TIMEOUT,
//          labels: [GEO_CODE],
//        });
//    });
//    // in case ubpbjs doesn't load
//    setTimeout(function() {
//        initAdserver();
//    }, FAILSAFE_TIMEOUT);
//  }
