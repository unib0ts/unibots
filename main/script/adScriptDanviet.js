var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;
// var boturl = window.location.href;
const customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $20, 1-cent increments
    }]
};

var div_1_sizes = [[336, 280], [300, 250]];
var div_2_sizes = [970, 250];
var div_3_sizes = [[300, 50], [320, 50]];

var adUnits = [];

if (typeof mobileCheck === "function") {
  if (!mobileCheck()) {
    if (document.getElementById('zone-k57lqm6j')) {
      adUnits1 =
        {
            code: '/21957769615/danviet.vn_nb_970x250',
            mediaTypes: {
                banner: {
                    sizes: div_2_sizes
                }
            },
            bids: [
             { bidder: 'appnexus', params: { placementId: '19669443' } }, /* one placementId for all sizes  my appnexus bidder */
             { bidder: 'sovrn', params: {tagid: '746607'} },
             { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3033233'} },
             // { bidder: 'oftmedia', params: { placementId: '18671523' } },
             { bidder: '33across', params: { siteId : 'b5MRwUWfGr6OoXaKkGJozW', productId: 'siab' } }, /*All sizes*/
             // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
              // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
             // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
             // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
              { bidder: 'nobid', params: { siteId : '22052735851'} },
              // { bidder: 'criteo', params: {networkId: '4902'} },
              //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
              // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
            ]
        };
        adUnits.push(adUnits1);
    }
  }
  else {
    if (document.getElementById('k57m4qwp')) {
      adUnits1 =
        {
          code: '/21957769615/danviet.vn_nb_336x280',
          mediaTypes: {
              banner: {
                  sizes: div_1_sizes
              }
          },
          bids: [
            { bidder: 'appnexus', params: { placementId: '19669443' } }, /* one placementId for all sizes  my appnexus bidder */
            { bidder: 'sovrn', params: {tagid: '746608'} },
            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3033235'} },
           // { bidder: 'oftmedia', params: { placementId: '18671523' } },
           { bidder: '33across', params: { siteId : 'b5MRwUWfGr6OoXaKkGJozW', productId: 'siab' } }, /*All sizes*/
           // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
           // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
           // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            { bidder: 'nobid', params: { siteId : '22052735851'} },
            // { bidder: 'criteo', params: {networkId: '4902'} },
            // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
      adUnits.push(adUnits1);
    }
  }
    adUnits1 =
      {
          code: '/21957769615/danviet.vn_320x50',
          mediaTypes: {
              banner: {
                  sizes: div_3_sizes
              }
          },
          bids: [
           { bidder: 'appnexus', params: { placementId: '19669443' } }, /* one placementId for all sizes  my appnexus bidder */
           { bidder: 'sovrn', params: {tagid: '746623'} },
           { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3033273'} },
           // { bidder: 'oftmedia', params: { placementId: '18671523' } },
           { bidder: '33across', params: { siteId : 'b5MRwUWfGr6OoXaKkGJozW', productId: 'siab' } }, /*All sizes*/
           // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
           // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
           // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            { bidder: 'nobid', params: { siteId : '22052735851'} },
            // { bidder: 'criteo', params: {networkId: '4902'} },
            //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
      adUnits.push(adUnits1);
}

// ======== DO NOT EDIT BELOW THIS LINE =========== //
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];

ubpbjs.que.push(function() {
    ubpbjs.addAdUnits(adUnits);
    ubpbjs.bidderSettings = {
      'appnexus': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.86; } },
      'pubmatic': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.74; } },
      'rubicon': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
      'openx': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
      'criteo': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
      'nobid': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      'oftmedia': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.80; } },
      'sovrn': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.81; } },
      //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },

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
        syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
        filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
        // enableOverride: true // publisher will call `ubpbjs.triggerUserSyncs()'
      },
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
        timeout: PREBID_TIMEOUT
    });
});

var mappings = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  adId: [],
  renderedFlag: [false, false, false]
};

function ub_checkAdRendered(adId, ub_slot, adCode){
  ub_slotNum = ub_slot[ub_slot.length-1]-1;
  if(!mappings.renderedFlag[ub_slotNum]){
    adId1 = adId;
    var nodes = document.getElementById(adId1).childNodes[0].childNodes;
    if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      setInterval(function() {
        refreshBid(ub_slot, adCode);
      }, REFRESH_TIMEOUT);
      mappings.renderedFlag[ub_slotNum]-1 = true;
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
    googletag.enableServices();
  });
}

if(typeof mobileCheck === "function"){
  if (!mobileCheck()){
   if (document.getElementById('zone-k57lqm6j')) {
     mappings.slotNumbers.push(2);
     mappings.adCode.push('/21957769615/danviet.vn_nb_970x250');
     mappings.sizes.push(div_2_sizes);
     mappings.adId.push('div-gpt-ad-1593712591794-0');
     googletag.cmd.push(function() {
         googletag.pubads().addEventListener('slotRenderEnded', function(event) {
           if (event.slot === ub_slot2) {
             ub_checkAdRendered('div-gpt-ad-1593712591794-0', ub_slot2, ['/21957769615/danviet.vn_nb_970x250']);
           }
         });
     });
   }
  }
  else {
    if (document.getElementById('k57m4qwp')){
     mappings.slotNumbers.push(1);
     mappings.adCode.push('/21957769615/danviet.vn_nb_336x280');
     mappings.sizes.push(div_1_sizes);
     mappings.adId.push('div-gpt-ad-1593712612949-0');
     googletag.cmd.push(function() {
         googletag.pubads().addEventListener('slotRenderEnded', function(event) {
           if (event.slot === ub_slot1) {
             ub_checkAdRendered('div-gpt-ad-1593712612949-0', ub_slot1, ['/21957769615/danviet.vn_nb_336x280']);
           }
         });
     });
    }
  }
  mappings.slotNumbers.push(3);
  mappings.adCode.push('/21957769615/danviet.vn_320x50');
  mappings.sizes.push(div_3_sizes);
  mappings.adId.push('div-gpt-ad-1593765311014-0');
  googletag.cmd.push(function() {
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot3) {
          ub_checkAdRendered('div-gpt-ad-1593765311014-0', ub_slot3, ['/21957769615/danviet.vn_320x50']);
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
