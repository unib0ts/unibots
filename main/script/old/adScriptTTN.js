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


var adUnits = [
    {
        code: '/21956033520/toptamilnews.com_NB_320x50',
        mediaTypes: {
          native: {
            image: {
              // sizes: [300, 100],
              aspect_ratios: [{
                min_width: 100,        /* Optional */
                min_height: 50,       /* Optional */
                ratio_width: 2,        /* Required */
                ratio_height: 1,       /* Required */
              }],
              sendId: true
            },
            title: {
              len: 50,
              sendId: true
            },
            sponsoredBy: {
              required: true,
              sendId: true
            },
            clickUrl: {
              required: true,
              sendId: true
            }
          }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19057734' } }
        ]
    },
    {
        code: '/21956033520/toptamilnews.com_NB_320x50',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
        	{ bidder: 'appnexus', params: { placementId: '19057734' } }, /* one placementId for all sizes  my appnexus bidder */
        	//{ bidder: '33across', params: { siteId : 'dWICUEBt8r6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
        	//{ bidder: 'emx_digital', params: { tagid: '97450' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '716632'} },
          { bidder: 'openx', params: {unit: '541046394', delDomain: 'yieldbird-d.openx.net'} },
        	{ bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        	{ bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'smartadserver', params: { siteId: '362157', pageId: '1289658', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
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
      emx_digital: { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      onetag: { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
      // 'sonobi': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
      // 'smartadserver': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
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
      debug: true,
      useBidCache: false,
      enableSendAllBids: false, // Default will be `true` as of 1.0
      bidderSequence: 'random', // Default is random
      publisherDomain: 'toptamilnews.com',
      bidderTimeout: PREBID_TIMEOUT+500,
      //pubcid: {expInterval: },
      //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
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
// in case ubpbjs doesn't load
setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);

var ub_slot1;
googletag.cmd.push(function() {
    ub_slot1 = googletag.defineSlot('/21956033520/toptamilnews.com_NB_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
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
		  adUnitCodes: ['/21956033520/toptamilnews.com_NB_320x50'],
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
	adId = 'div-ub-1';
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
