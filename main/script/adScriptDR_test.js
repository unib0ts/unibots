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


var adUnits = [
    {
        code: '/21956916242/dailyrecruitment.in_NB_320x50',
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
          { bidder: 'appnexus', params: { placementId: '19054334' } },
          { bidder: 'oftmedia', params: { placementId: '18671523' } }
        ]
    },
    {
        code: '/21956916242/dailyrecruitment.in_NB_320x50',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
        	{ bidder: 'appnexus', params: { placementId: '19054334' } }, /* one placementId for all sizes  my appnexus bidder */
        	{ bidder: 'oftmedia', params: { placementId: '18671523' } },
        	{ bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
        	{ bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '701548'} },
          { bidder: 'openx', params: {unit: '543530455', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        	{ bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
        	{ bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '21975046114'} },
          { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // { bidder: 'criteo', params: {networkId: '4902'} },
          //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
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

function mainHbRun(){
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
      publisherDomain: 'https://www.dailyrecruitment.in/',
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

function initAdserver() {
    if (ubpbjs.initAdserverSet) return;
    ubpbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        ubpbjs.que.push(function() {
            ubpbjs.setTargetingForGPTAsync();
            // googletag.pubads().refresh([ub_slot1]);
            var x = ubpbjs.getAllPrebidWinningBids();
            var adsCalled = false;
            for(var i=0;i<x.length;i++){
              var bc = x[i].bidderCode;
              if(bc=="openx"){
                adsCalled = true;
                callBotman();
              }
            }
            if(!adsCalled){
              callAdsUB();
            }
        });
    });
}

var botmanCalled = false;
var userStatusBM = '';
function callBotman(){
  if(userStatusBM == ''){
    var request = new XMLHttpRequest();
    var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=dailyrecruitment';
    request.open('GET', url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = request.responseText;
        if(data != ""){
          data = JSON.parse(data);
          userStatusBM = data;
          if(userStatusBM == "0" || userStatusBM == "3"){
            callAdsUB();
          }
          else{
            console.log('Not Valid Traffic for openx');
          }
        }
        else{
          console.error('Data not returned from server');
          callAdsUB();
        }
      }
      else {
        console.error('Request failed from server');
        callAdsUB();
      }
    };
    request.onerror = function() {
      console.error('Request failed to Reach Server');
      callAdsUB();
    };
    request.send();
  }
  else{
    if(userStatusBM == "0" || userStatusBM == "3"){
      callAdsUB();
    }
    else{
      console.log('Not Valid Traffic for openx');
    }
  }

}

function callAdsUB(){
	googletag.pubads().refresh([ub_slot1]);
}

// in case ubpbjs doesn't load
setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);

var ub_slot1;
googletag.cmd.push(function() {
    ub_slot1 = googletag.defineSlot('/21956916242/dailyrecruitment.in_NB_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
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
		  adUnitCodes: ['/21956916242/dailyrecruitment.in_NB_320x50'],
		  bidsBackHandler: function() {
        googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              // googletag.pubads().refresh([ub_slot1]);
              var adsCalled = false;
              for(var i=0;i<x.length;i++){
                var bc = x[i].bidderCode;
                if(bc=="openx"){
                  adsCalled = true;
                  callBotman();
                }
              }
              if(!adsCalled){
                callAdsUB();
              }
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
