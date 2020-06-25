var div_1_sizes = [320, 50];

var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 40000;

const customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $20, 1-cent increments
    }]
};

var adUnits = [
  // {
  //     code: '/21956238066/outlookhindi.com_nb_320x50',
  //     mediaTypes: {
  //       native: {
  //         image: {
  //           // sizes: [300, 100],
  //           aspect_ratios: [{
  //             min_width: 100,        /* Optional */
  //             min_height: 50,       /* Optional */
  //             ratio_width: 2,        /* Required */
  //             ratio_height: 1,       /* Required */
  //           }],
  //           sendId: true
  //         },
  //         title: {
  //           len: 50,
  //           sendId: true
  //         },
  //         sponsoredBy: {
  //           required: true,
  //           sendId: true
  //         },
  //         clickUrl: {
  //           required: true,
  //           sendId: true
  //         }
  //       }
  //     },
  //     bids: [
  //       { bidder: 'appnexus', params: { placementId: '19451133' } }, /* one placementId for all sizes  my appnexus bidder */
  //     ]
  // },
  {
  code: '/21956238066/outlookhindi.com_nb_320x50',
  mediaTypes: {
	  banner: {
		  sizes: div_1_sizes
	  }
  },
  bids: [
    {	bidder: 'eplanning', params: {ci: '2cfed', ml: '1'} },
    { bidder: 'appnexus', params: { placementId: '19056062' } }, /* one placementId for all sizes  my appnexus bidder */
    // { bidder: 'sovrn', params: {tagid: '741309'} },
    // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2971089'} },
    // { bidder: 'nobid', params: { siteId : '22045891277'} },
    // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323618', zoneId: '1680026'} },
    // { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
    { bidder: 'openx', params: {unit: '541046211', delDomain: 'yieldbird-d.openx.net'} },
    //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
    { bidder: 'criteo', params: {networkId: '4902'} }
  ]
}];

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
    publisherDomain: 'https://www.outlookhindi.com/',
    bidderTimeout: PREBID_TIMEOUT+500,
    //pubcid: {expInterval: },
    "currency": {
       // enables currency feature
       "adServerCurrency": "AED",
       "granularityMultiplier":3 ,
       // optionally override the default rate file
       "conversionRateFile": "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/currency/currency.json",
       // optionally provide a default rate in case the file can't be read
       "defaultRates": { "USD": { "AED": 3.67 }}
     }
   });
  ubpbjs.requestBids({
    bidsBackHandler: initAdserver,
    timeout: PREBID_TIMEOUT
  });
});

function initAdserver() {
  if (ubpbjs.initAdserverSet) return;
  ubpbjs.initAdserverSet = true;
  googletag.cmd.push(function() {
    ubpbjs.que.push(function() {
        ubpbjs.setTargetingForGPTAsync();
        googletag.pubads().refresh([ub_slot1]);
    });
  });
}

setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);

var ub_slot1;
googletag.cmd.push(function() {
  ub_slot1 = googletag.defineSlot('/21956238066/outlookhindi.com_nb_320x50', div_1_sizes, 'div-gpt-ad-1593088610454-0').addService(googletag.pubads());
  googletag.pubads().collapseEmptyDivs(true);
  googletag.pubads().setCentering(true);
  googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
  googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAdRendered();
      }
  });
});

function refreshBid() {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21956238066/outlookhindi.com_nb_320x50'],
		  bidsBackHandler: function() {
        googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh([ub_slot1]);
          });
        });
		  }
	  });
  });
}

ub_adRefreshFlag = 0;
function ub_checkAdRendered(){
	adId = 'div-gpt-ad-1593088610454-0';
	var nodes = document.getElementById(adId).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_adRefreshFlag != 1){
      setInterval(function() {
        ub_adRefreshFlag = 1;
        refreshBid();
      }, REFRESH_TIMEOUT);
    }
	 }
}
