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

var div_1_sizes = [320, 50];
var div_2_sizes = [300, 250];

var adUnits = [
    {
      code: '/21928950349/boomlive.in_desk_NB_320x50',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
        	{ bidder: 'appnexus', params: { placementId: '19054316' } }, /* one placementId for all sizes  my appnexus bidder */
        	//{ bidder: 'oftmedia', params: { placementId: '18671514' } },
        	{ bidder: '33across', params: { siteId : 'd9bktEBt8r6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
        	//{ bidder: 'emx_digital', params: { tagid: '97448' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '701547'} },
          { bidder: 'openx', params: {unit: '541046022', delDomain: 'yieldbird-d.openx.net'} },
        	//{ bidder: 'rhythmone', params: { placementId: '205372' } }, /* one placementId for all sizes */
        	{ bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'criteo', params: {networkId: '4902'} }
        ]
    },
    {
      code: '/21928950349/boomlive_NB_300x250',
        mediaTypes: {
            banner: {
                sizes: div_2_sizes
            }
        },
        bids: [
        	{ bidder: 'appnexus', params: { placementId: '19054316' } }, /* one placementId for all sizes  my appnexus bidder */
        	//{ bidder: 'oftmedia', params: { placementId: '18671514' } },
        	{ bidder: '33across', params: { siteId : 'd9bktEBt8r6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
        	//{ bidder: 'emx_digital', params: { tagid: '97448' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '701547'} },
          //{ bidder: 'openx', params: {unit: '541045931', delDomain: 'yieldbird-d.openx.net'} },
        	//{ bidder: 'rhythmone', params: { placementId: '205372' } }, /* one placementId for all sizes */
        	{ bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'criteo', params: {networkId: '4902'} }
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
      publisherDomain: 'http://boomlive.in',
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
            googletag.pubads().refresh([ub_slot1, ub_slot2]);
        });
    });
}
// in case ubpbjs doesn't load
setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);

var ub_slot1, ub_slot2;
googletag.cmd.push(function() {
    ub_slot1 = googletag.defineSlot('/21928950349/boomlive.in_desk_NB_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
    ub_slot2 = googletag.defineSlot('/21928950349/boomlive_NB_300x250', div_2_sizes, 'div-ub-2').addService(googletag.pubads());
    googletag.pubads().collapseEmptyDivs(true);
    googletag.pubads().setCentering(true);
    googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot1) {
          ub_checkAdRendered();
        }
        else if (event.slot === ub_slot2) {
          ub_checkAd2Rendered();
        }
        else if ((event.slot === ub_slot1) && (event.slot === ub_slot2)) {
          ub_checkAd1Rendered();
          ub_checkAd2Rendered();
        }
    });
});

function refreshBid(ub_slot) {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21928950349/boomlive.in_desk_NB_320x50', '/21928950349/boomlive_NB_300x250'],
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
