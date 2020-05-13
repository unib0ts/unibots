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

var div_1_sizes = [728, 90];
var div_2_sizes = [728, 90];
var div_3_sizes = [300, 250];
var div_4_sizes =  [320, 50];

var adUnits = [
  {
    code: '/21957769615/whyral.in_hb_728x90_header',
    mediaTypes: {
  	  banner: {
  		  sizes: div_1_sizes
  	  }
    },
    bids: [
    { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
    // { bidder: 'oftmedia', params: { placementId: '19095403' } },
    // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
    // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
  ]
  },
  {
    code: '/21957769615/whyral.in_hb_728x90_footer',
    mediaTypes: {
  	  banner: {
  		  sizes: div_2_sizes
  	  }
    },
    bids: [
      { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
      // { bidder: 'oftmedia', params: { placementId: '19095403' } },
      // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
      // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
    ]
  },
  {
    code: '/21957769615/whyral.in_hb_300x250',
    mediaTypes: {
  	  banner: {
  		  sizes: div_3_sizes
  	  }
    },
    bids: [
      { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
      // { bidder: 'oftmedia', params: { placementId: '19095403' } },
      // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
      // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
    ]
  },
  {
    code: '/21957769615/whyral.in_hb_320x50',
    mediaTypes: {
  	  banner: {
  		  sizes: div_4_sizes
  	  }
    },
    bids: [
      { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
      // { bidder: 'oftmedia', params: { placementId: '19095403' } },
      // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
      // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
    ]
  }
];

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
      s2sConfig: {
        accountId: '',
        enabled: false,
        bidders: ['sovrn', 'openx','sharethrough'],
        timeout: PREBID_TIMEOUT-300,
        adapter: 'prebidServer',
        endpoint: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
        syncEndpoint: 'https://prebid.adnxs.com/pbs/v1/cookie_sync',
        cookieSet: true,
        cookiesetUrl: 'https://acdn.adnxs.com/cookieset/cs.js'
      },
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
      publisherDomain: 'http://whyral.in/',
      bidderTimeout: PREBID_TIMEOUT+500,
      //pubcid: {expInterval: },
      //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
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
            googletag.pubads().refresh([ub_slot1, ub_slot2, ub_slot3, ub_slot4]);
        });
    });
}
// in case ubpbjs doesn't load
setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);

var ub_slot1, ub_slot2, ub_slot3, ub_slot4;
googletag.cmd.push(function() {
    ub_slot1 = googletag.defineSlot('/21957769615/whyral.in_hb_728x90_header', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
    ub_slot2 = googletag.defineSlot('/21957769615/whyral.in_hb_728x90_footer', div_2_sizes, 'div-ub-2').addService(googletag.pubads());
    ub_slot3 = googletag.defineSlot('/21957769615/whyral.in_hb_300x250', div_3_sizes, 'div-ub-3').addService(googletag.pubads());
    ub_slot4 = googletag.defineSlot('/21957769615/whyral.in_hb_320x50', div_4_sizes, 'div-ub-4').addService(googletag.pubads());
    googletag.pubads().collapseEmptyDivs(true);
    googletag.pubads().setCentering(true);
    googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAd1Rendered();
      }
      else if (event.slot === ub_slot2) {
        ub_checkAd2Rendered();
      }
      else if (event.slot === ub_slot3) {
        ub_checkAd3Rendered();
      }
      else if (event.slot === ub_slot4) {
        ub_checkAd4Rendered();
      }
      else if ((event.slot === ub_slot1) && (event.slot === ub_slot2) && (event.slot === ub_slot3) && (event.slot === ub_slot4)) {
        ub_checkAd1Rendered();
        ub_checkAd2Rendered();
        ub_checkAd3Rendered();
        ub_checkAd4Rendered();
        }
    });
});

function refreshBid(ub_slot) {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21957769615/whyral.in_hb_728x90_header', '/21957769615/whyral.in_hb_728x90_footer', '/21957769615/whyral.in_hb_300x250', '/21957769615/whyral.in_hb_320x50'],
		  bidsBackHandler: function() {
        googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh([ub_slot]);
          });
        });
		  }
	  });
  });
}

ub_ad1RefreshFlag = 0;
function ub_checkAd1Rendered(){
	adId1 = 'div-ub-1';
	var nodes = document.getElementById(adId1).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad1RefreshFlag != 1){
      setInterval(function() {
        ub_ad1RefreshFlag = 1;
        refreshBid(ub_slot1);
      }, REFRESH_TIMEOUT);
    }
	 }
}

ub_ad2RefreshFlag = 0;
function ub_checkAd2Rendered(){
	adId2 = 'div-ub-2';
	var nodes = document.getElementById(adId2).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad2RefreshFlag != 1){
      setInterval(function() {
        ub_ad2RefreshFlag = 1;
        refreshBid(ub_slot2);
      }, REFRESH_TIMEOUT);
    }
	 }
}

ub_ad3RefreshFlag = 0;
function ub_checkAd3Rendered(){
	adId3 = 'div-ub-3';
	var nodes = document.getElementById(adId3).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad3RefreshFlag != 1){
      setInterval(function() {
        ub_ad3RefreshFlag = 1;
        refreshBid(ub_slot3);
      }, REFRESH_TIMEOUT);
    }
	 }
}

ub_ad4RefreshFlag = 0;
function ub_checkAd4Rendered(){
	adId4 = 'div-ub-4';
	var nodes = document.getElementById(adId4).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad4RefreshFlag != 1){
      setInterval(function() {
        ub_ad4RefreshFlag = 1;
        refreshBid(ub_slot4);
      }, REFRESH_TIMEOUT);
    }
	 }
}
