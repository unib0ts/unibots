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

var div_1_sizes = [320, 50];
var div_2_sizes = [[250, 250], [200, 200], [300, 250]];

var adUnits = [
    // {
    //   code: '/21928950349/boomlive.in_desk_NB_320x50',
    //     mediaTypes: {
    //         banner: {
    //             sizes: div_1_sizes
    //         }
    //     },
    //     bids: [
    //     	{ bidder: 'appnexus', params: { placementId: '19054316' } }, /* one placementId for all sizes  my appnexus bidder */
    //     	//{ bidder: 'oftmedia', params: { placementId: '18671514' } },
    //     	{ bidder: '33across', params: { siteId : 'd9bktEBt8r6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
    //     	//{ bidder: 'emx_digital', params: { tagid: '97448' } }, /* sizeless */
    //       { bidder: 'sovrn', params: {tagid: '701547'} },
    //       // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
    //       { bidder: 'openx', params: {unit: '541046022', delDomain: 'yieldbird-d.openx.net'} },
    //       { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2932601'} },
    //     	//{ bidder: 'rhythmone', params: { placementId: '205372' } }, /* one placementId for all sizes */
    //     	{ bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
    //       { bidder: 'criteo', params: {networkId: '4902'} }
    //     ]
    // },
    {
      code: '/21928950349/boomlive_nb_300x250_new',
        mediaTypes: {
            banner: {
                sizes: div_2_sizes
            }
        },
        bids: [
        	{ bidder: 'appnexus', params: { placementId: '19054316' } }, /* one placementId for all sizes  my appnexus bidder */
        	//{ bidder: 'oftmedia', params: { placementId: '18671514' } },
        	{ bidder: '33across', params: { siteId : 'd9bktEBt8r6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        	//{ bidder: 'emx_digital', params: { tagid: '97448' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '736579'} },
          // { bidder: 'openx', params: {unit: '541046022', delDomain: 'yieldbird-d.openx.net'} },
          { bidder: 'criteo', params: {networkId: '10542'} },
          { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'} }, 
        	//{ bidder: 'rhythmone', params: { placementId: '205372' } }, /* one placementId for all sizes */
        	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          // { bidder: 'criteo', params: {networkId: '4902'} }
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


function initAdserver() {
    if (ubpbjs.initAdserverSet) return;
    ubpbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        ubpbjs.que.push(function() {
            ubpbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh([ub_slot2]);
        });
    });
}

var ub_slot2;
googletag.cmd.push(function() {
    // ub_slot1 = googletag.defineSlot('/21928950349/boomlive.in_desk_NB_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
    ub_slot2 = googletag.defineSlot('/21928950349/boomlive_nb_300x250_new', div_2_sizes, 'div-gpt-ad-1591096103845-0').addService(googletag.pubads());
    googletag.pubads().collapseEmptyDivs(true);
    googletag.pubads().setCentering(true);
    googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot2) {
          ub_checkAd2Rendered();
        }
        // else if (event.slot === ub_slot2) {
        //   ub_checkAd2Rendered();
        // }
        // else if ((event.slot === ub_slot1) && (event.slot === ub_slot2)) {
        //   ub_checkAd1Rendered();
        //   ub_checkAd2Rendered();
        // }
    });
});

function refreshBid(ub_slot) {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
      adUnitCodes: ['/21928950349/boomlive_nb_300x250_new'],
		  // adUnitCodes: ['/21928950349/boomlive.in_desk_NB_320x50', '/21928950349/boomlive_nb_300x250_new'],
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

// ub_ad1RefreshFlag = 0;
// function ub_checkAd1Rendered(){
// 	adId1 = 'div-ub-1';
// 	var nodes = document.getElementById(adId1).childNodes[0].childNodes;
// 	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
//     if(ub_ad1RefreshFlag != 1){
//       setInterval(function() {
//         ub_ad1RefreshFlag = 1;
//         refreshBid(ub_slot1);
//       }, REFRESH_TIMEOUT);
//     }
// 	 }
// }

ub_ad2RefreshFlag = 0;
function ub_checkAd2Rendered(){
	adId2 = 'div-gpt-ad-1591096103845-0';
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

function mainHbRun(){

  ubpbjs.que.push(function() {
      ubpbjs.addAdUnits(adUnits);
      ubpbjs.aliasBidder('criteo','criteointl');
      ubpbjs.bidderSettings = {
        'appnexus': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.86; } },
        'pubmatic': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.74; } },
        'rubicon': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
        'openx': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
        'criteo': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
        'criteointl': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
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
        publisherDomain: 'http://boomlive.in',
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
