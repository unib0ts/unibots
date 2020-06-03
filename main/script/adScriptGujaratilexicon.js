var div_1_sizes = [[970, 250], [728, 90], [970, 90]];
var div_2_sizes = [[160, 600], [300, 250], [300, 600], [120, 600]];
var div_3_sizes = [[728, 250], [728, 90]];
var div_4_sizes = [[200, 200], [300, 250], [250, 250], [300, 50], [320, 100]];
var div_5_sizes = [[300, 250], [300, 600]];
var div_6_sizes = [[320, 100], [728, 90], [320, 50], [468, 60]];
var adUnits = [];

var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;

const customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $20, 1-cent increments
    }]
};

if (document.getElementById('1')) {
    adUnits1 =
      {
        code: '/21956916242/gujratilexicon.com_1',
        mediaTypes: {
          banner: {
            sizes: div_1_sizes
          }
        },
        bids: [
        { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
        { bidder: 'appnexus', params: { placementId: '19352238' } },
        { bidder: 'criteo', params: {networkId: '4902'} },
        // { bidder: 'nobid', params: { siteId : '21975046114'} },
        { bidder: 'oftmedia', params: { placementId: '19095403' } },
        // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
      ]
    };
    adUnits.push(adUnits1);
}
if (document.getElementById('2')) {
    adUnits1 =
      {
        code: '/21956916242/gujaratilexicon.com_2',
        mediaTypes: {
      	  banner: {
      		  sizes: div_2_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'appnexus', params: { placementId: '19352238' } },
          { bidder: 'criteo', params: {networkId: '4902'} },
          // { bidder: 'nobid', params: { siteId : '21975046114'} },
          { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
        ]
      };
    adUnits.push(adUnits1);
}
if (document.getElementById('3')) {
    adUnits1 =
      {
        code: '/21956916242/gujaratilexicon.com_3',
        mediaTypes: {
      	  banner: {
      		  sizes: div_3_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'appnexus', params: { placementId: '19352238' } },
          { bidder: 'criteo', params: {networkId: '4902'} },
          // { bidder: 'nobid', params: { siteId : '21975046114'} },
          { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
        ]
      };
    adUnits.push(adUnits1);
}
if (document.getElementById('4')) {
    adUnits1 =
      {
        code: '/21956916242/gujaratilexicon.com_4',
        mediaTypes: {
          banner: {
            sizes: div_4_sizes
          }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'appnexus', params: { placementId: '19352238' } },
          { bidder: 'criteo', params: {networkId: '4902'} },
          // { bidder: 'nobid', params: { siteId : '21975046114'} },
          { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
        ]
      };
    adUnits.push(adUnits1);
}
if (document.getElementById('5')) {
    adUnits1 =
      {
        code: '/21956916242/gujaratilexicon.com_5',
        mediaTypes: {
      	  banner: {
      		  sizes: div_5_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'appnexus', params: { placementId: '19352238' } },
          { bidder: 'criteo', params: {networkId: '4902'} },
          // { bidder: 'nobid', params: { siteId : '21975046114'} },
          { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
        ]
      };
    adUnits.push(adUnits1);
}
if (document.getElementById('6')) {
    adUnits1 =
      {
        code: '/21956916242/gujaratilexicon.com_6',
        mediaTypes: {
          banner: {
            sizes: div_6_sizes
          }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'appnexus', params: { placementId: '19352238' } },
          { bidder: 'criteo', params: {networkId: '4902'} },
          // { bidder: 'nobid', params: { siteId : '21975046114'} },
          { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
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
      oftmedia: { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      emx_digital: { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } }
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
      debug: true,
      useBidCache: false,
      enableSendAllBids: false, // Default will be `true` as of 1.0
      bidderSequence: 'random', // Default is random
      publisherDomain: 'https://www.gujaratilexicon.com/',
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
  renderedFlag: [false, false, false, false, false, false]
};

function ub_checkAdRendered(adId, ub_slot, adCode){
  ub_slotNum = ub_slot[ub_slot.length-1];
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
    googletag.enableServices();
  });
}

if (document.getElementById('1')) {
  mappings.slotNumbers.push(1);
  mappings.adCode.push('/21956916242/gujratilexicon.com_1');
  mappings.sizes.push(div_1_sizes);
  mappings.adId.push('div-ub1');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAdRendered('div-ub1', ub_slot1, ['/21956916242/gujratilexicon.com_1']);
      }
    });
  });
}
if (document.getElementById('2')) {
  mappings.slotNumbers.push(2);
  mappings.adCode.push('/21956916242/gujaratilexicon.com_2');
  mappings.sizes.push(div_2_sizes);
  mappings.adId.push('div-ub2');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot2) {
        ub_checkAdRendered('div-ub2', ub_slot2, ['/21956916242/gujaratilexicon.com_2']);
      }
    });
  });
}
if (document.getElementById('3')) {
  mappings.slotNumbers.push(3);
  mappings.adCode.push('/21956916242/gujaratilexicon.com_3');
  mappings.sizes.push(div_3_sizes);
  mappings.adId.push('div-ub3');
  googletag.cmd.push(function() {
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot3) {
          ub_checkAdRendered('div-ub3', ub_slot3, ['/21956916242/gujaratilexicon.com_3']);
        }
      });
  });
}
if (document.getElementById('4')) {
  mappings.slotNumbers.push(4);
  mappings.adCode.push('/21956916242/gujaratilexicon.com_4');
  mappings.sizes.push(div_4_sizes);
  mappings.adId.push('div-ub4');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot4) {
        ub_checkAdRendered('div-ub4', ub_slot4, ['/21956916242/gujaratilexicon.com_4']);
      }
    });
  });
}
if (document.getElementById('5')) {
  mappings.slotNumbers.push(5);
  mappings.adCode.push('/21956916242/gujaratilexicon.com_5');
  mappings.sizes.push(div_5_sizes);
  mappings.adId.push('div-ub5');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot5) {
        ub_checkAdRendered('div-ub5', ub_slot5, ['/21956916242/gujaratilexicon.com_5']);
      }
    });
  });
}
if (document.getElementById('6')) {
  mappings.slotNumbers.push(6);
  mappings.adCode.push('/21956916242/gujaratilexicon.com_6');
  mappings.sizes.push(div_6_sizes);
  mappings.adId.push('div-gpt-ad-1590839347556-0');
  googletag.cmd.push(function() {
      ub_slot6 = googletag.defineSlot('/21956916242/gujaratilexicon.com_6', div_6_sizes, 'div-gpt-ad-1590839347556-0').addService(googletag.pubads());
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot6) {
          ub_checkAdRendered('div-gpt-ad-1590839347556-0', ub_slot6, ['/21956916242/gujaratilexicon.com_6']);
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
