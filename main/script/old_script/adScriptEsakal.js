var div_1_sizes = [320, 50];
var div_2_sizes = [320, 50];
// var div_3_sizes = [[200, 200], [250, 250], [300, 250]];
// var div_4_sizes = [300, 600];
var adUnits = [];
var botsiteurl =window.location.hostname;

var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;

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

// if (typeof mobileCheck === "function") {
  // if (mobileCheck()) {
  //     if (document.getElementById('ads_post_1_31720')) {
  //         adUnits1 =
  //         {
  //           code: '/21957769615/yeuthethao.vn_hb_320x250',
  //           mediaTypes: {
  //               banner: {
  //                   sizes: div_3_sizes
  //               }
  //           },
  //           bids: [
  //            { bidder: 'appnexus', params: { placementId: '19855809' } }, /* one placementId for all sizes  my appnexus bidder */
  //            { bidder: 'sovrn', params: {tagid: '756529'} },
  //            { bidder: 'smartadserver', params: { siteId: '362166', pageId: '1289666', formatId: '93419', domain: 'https://prg8.smartadserver.com' } },
  //            //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
  //            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  //            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3099854'} },
  //            // { bidder: 'criteo', params: {networkId: '10542'} },
  //            // { bidder: 'criteointl', params: {networkId: '10545'} },
  //            // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
  //            // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //            // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
  //            //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
  //            // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
  //            // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //             { bidder: 'nobid', params: { siteId : '22070847955'} },
  //             // { bidder: 'criteo', params: {networkId: '4902'} },
  //             //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //             // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
  //           ]
  //       };
  //         adUnits.push(adUnits1);
  //     }
  //     if (document.getElementById('ads_post_2_31720')) {
  //         adUnits1 =
  //         {
  //           code: '/21957769615/yeuthethao.vn_hb_320x600',
  //           mediaTypes: {
  //               banner: {
  //                   sizes: div_2_sizes
  //               }
  //           },
  //           bids: [
  //            { bidder: 'appnexus', params: { placementId: '19855809' } }, /* one placementId for all sizes  my appnexus bidder */
  //            { bidder: 'sovrn', params: {tagid: '756528'} },
  //            { bidder: 'smartadserver', params: { siteId: '362166', pageId: '1289666', formatId: '93423', domain: 'https://prg8.smartadserver.com' } },
  //            //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
  //            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  //            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3099855'} },
  //            // { bidder: 'criteo', params: {networkId: '10542'} },
  //            // { bidder: 'criteointl', params: {networkId: '10545'} },
  //            // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
  //            // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //            // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
  //            //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
  //            // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
  //            // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //             { bidder: 'nobid', params: { siteId : '22070847955'} },
  //             // { bidder: 'criteo', params: {networkId: '4902'} },
  //             //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //             // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
  //           ]
  //       };
  //         adUnits.push(adUnits1);
  //     }
  //     if (document.getElementById('ads_post_3_31720')) {
  //         adUnits1 =
  //         {
  //           code: '/21957769615/yeuthethao.vn_hb_320x600_2',
  //           mediaTypes: {
  //               banner: {
  //                   sizes: div_4_sizes
  //               }
  //           },
  //           bids: [
  //            { bidder: 'appnexus', params: { placementId: '19855809' } }, /* one placementId for all sizes  my appnexus bidder */
  //            { bidder: 'sovrn', params: {tagid: '756530'} },
  //            { bidder: 'smartadserver', params: { siteId: '362166', pageId: '1289666', formatId: '93423', domain: 'https://prg8.smartadserver.com' } },
  //            //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
  //            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  //            // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3085763'} },
  //            // { bidder: 'criteo', params: {networkId: '10542'} },
  //            // { bidder: 'criteointl', params: {networkId: '10545'} },
  //            // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
  //            // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //            // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
  //            //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
  //            // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
  //            // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //             { bidder: 'nobid', params: { siteId : '22070847955'} },
  //             // { bidder: 'criteo', params: {networkId: '4902'} },
  //             //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //             // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
  //           ]
  //       };
  //         adUnits.push(adUnits1);
  //     }
  //   }
  if (botsiteurl=='www.sakalsports.com') {
    adUnits1 =
    {
        code: '/21956916242/sakalsports.com_ipl_320x50',
        mediaTypes: {
            banner: {
                sizes: div_2_sizes
            }
        },
        bids: [
         { bidder: 'appnexus', params: { placementId: '20258760' } }, /* one placementId for all sizes  my appnexus bidder */
         { bidder: 'sovrn', params: {tagid: '787646'} },
         { bidder: 'smartadserver', params: { siteId: '372443', pageId: '1309514', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
         // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
         // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206183'} },
         // { bidder: 'criteo', params: {networkId: '10542'} },
         // { bidder: 'criteointl', params: {networkId: '10545'} },
         // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         { bidder: 'emx_digital', params: { tagid: '115493' } }, /* sizeless */
         // //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
         // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22125676638'} },
          { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // { bidder: 'ucfunnel', params: { adid : 'ad-8A29AA428E67687D0B26E68793B96322'} },
         //  // { bidder: 'criteo', params: {networkId: '4902'} },
          //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  else {
    adUnits1 =
    {
        code: '/21956916242/esakal.com_ipl_320x50',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
         { bidder: 'appnexus', params: { placementId: '20258760' } }, /* one placementId for all sizes  my appnexus bidder */
         { bidder: 'sovrn', params: {tagid: '777763'} },
         { bidder: 'smartadserver', params: { siteId: '371035', pageId: '1306259', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
         // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206183'} },
         // { bidder: 'criteo', params: {networkId: '10542'} },
         // { bidder: 'criteointl', params: {networkId: '10545'} },
         // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         { bidder: 'emx_digital', params: { tagid: '115493' } }, /* sizeless */
         // //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
         // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22104180279'} },
          { bidder: 'ucfunnel', params: { adid : 'pub-AA7BAA37A87E329B184792A84DBEA4BE'} },
          { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
         //  // { bidder: 'criteo', params: {networkId: '4902'} },
          //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
// }

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
      publisherDomain: 'https://www.esakal.com/',
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
      setTimeout(function() {
        refreshBid(ub_slot, adCode);
      }, REFRESH_TIMEOUT);
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
              googletag.pubads().refresh(ub_slot);
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
            googletag.pubads().refresh(mappings.slots);
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
    googletag.pubads().enableLazyLoad({
              fetchMarginPercent: 200,
              renderMarginPercent: 100,
              mobileScaling: 2.0
            });
    googletag.enableServices();
  });
}

// if(typeof mobileCheck === "function"){
  // if (mobileCheck()){
  //   if (document.getElementById('ads_post_1_31720')) {
  //     mappings.slotNumbers.push(3);
  //     mappings.adCode.push('/21957769615/yeuthethao.vn_hb_320x250');
  //     mappings.sizes.push(div_3_sizes);
  //     mappings.adId.push('div-gpt-ad-1596185027473-0');
  //     googletag.cmd.push(function() {
  //       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //         if (event.slot === ub_slot3) {
  //           ub_checkAdRendered('div-gpt-ad-1596185027473-0', ub_slot3, ['/21957769615/yeuthethao.vn_hb_320x250']);
  //         }
  //       });
  //     });
  //   }
  //   if (document.getElementById('ads_post_2_31720')) {
  //     mappings.slotNumbers.push(2);
  //     mappings.adCode.push('/21957769615/yeuthethao.vn_hb_320x600');
  //     mappings.sizes.push(div_2_sizes);
  //     mappings.adId.push('div-gpt-ad-1596185013747-0');
  //     googletag.cmd.push(function() {
  //       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //         if (event.slot === ub_slot2) {
  //           ub_checkAdRendered('div-gpt-ad-1596185013747-0', ub_slot2, ['/21957769615/yeuthethao.vn_hb_320x600']);
  //         }
  //       });
  //     });
  //   }
  //   if (document.getElementById('ads_post_3_31720')) {
  //     mappings.slotNumbers.push(4);
  //     mappings.adCode.push('/21957769615/yeuthethao.vn_hb_320x600_2');
  //     mappings.sizes.push(div_4_sizes);
  //     mappings.adId.push('div-gpt-ad-1596526170688-0');
  //     googletag.cmd.push(function() {
  //       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //         if (event.slot === ub_slot4) {
  //           ub_checkAdRendered('div-gpt-ad-1596526170688-0', ub_slot4, ['/21957769615/yeuthethao.vn_hb_320x600_2']);
  //         }
  //       });
  //     });
  //   }
  // }
if (botsiteurl=='www.sakalsports.com') {
  mappings.slotNumbers.push(2);
  mappings.adCode.push('/21956916242/sakalsports.com_ipl_320x50');
  mappings.sizes.push(div_2_sizes);
  mappings.adId.push('div-gpt-ad-1601376955957-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot2) {
        ub_checkAdRendered('div-gpt-ad-1601376955957-0', ub_slot2, ['/21956916242/sakalsports.com_ipl_320x50']);
      }
    });
  });
}
else {
  mappings.slotNumbers.push(1);
  mappings.adCode.push('/21956916242/esakal.com_ipl_320x50');
  mappings.sizes.push(div_1_sizes);
  mappings.adId.push('div-gpt-ad-1601376735643-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAdRendered('div-gpt-ad-1601376735643-0', ub_slot1, ['/21956916242/esakal.com_ipl_320x50']);
      }
    });
  });
}
if(typeof googletag.defineSlot === "function"){
  googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
  googlePush();
}
else{
  setTimeout(function(){
    googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
    googlePush();
  }, 500);
}
setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);
