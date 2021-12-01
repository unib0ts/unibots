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
        code: '/21956033520/studyguideindia.com',
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
          { bidder: 'oftmedia', params: { placementId: '20846125' } },
          { bidder: 'appnexus', params: { placementId: '19054424' } }
        ]
    },
    {
        code: '/21956033520/studyguideindia.com',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
        	{ bidder: 'appnexus', params: { placementId: '19054424' } }, /* one placementId for all sizes  my appnexus bidder */
        	{ bidder: '33across', params: { siteId : 'bv1fmaWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        	//{ bidder: 'emx_digital', params: { tagid: '97450' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '716636'} },
          { bidder: 'openx', params: {unit: '543851454', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        	{ bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22049999743'} },
          { bidder: 'oftmedia', params: { placementId: '20846125' } },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'ucfunnel', params: { adid : 'ad-9A29AA3963E7BABEC68E6429B4BAE26'} },
          { bidder: 'smartadserver', params: { siteId: '362150', pageId: '1289651', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          { bidder: 'sonobi', params: { placement_id: 'bb129020728451ecbd91', ad_unit: 'studyguideindia_320x50' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2996048'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
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
    var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=studyguideindia';
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

var ub_slot1;
googletag.cmd.push(function() {
    ub_slot1 = googletag.defineSlot('/21956033520/studyguideindia.com', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
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
		  adUnitCodes: ['/21956033520/studyguideindia.com'],
		  bidsBackHandler: function() {
        googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
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

function mainHbRun(){
  ubpbjs.que.push(function() {
      // ubpbjs.setBidderConfig({
      // bidders: ['emx_digital'],   // can list more bidders here if they share the same config
      // config: {
      //   schain: {
      //     validation: "relaxed",
      //     config: {
      //       ver:"1.0",
      //       complete: 1,
      //       nodes: [
      //         {
      //           asi:"unibots.in",   //directseller
      //           sid:"1504",     //seller_id
      //           hp:1
      //         },
      //       ]
      //     }
      //   }
      // }
      // });
      ubpbjs.addAdUnits(adUnits);
      ubpbjs.aliasBidder('criteo','criteointl');
      ubpbjs.bidderSettings = {
        'appnexus': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.86; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'pubmatic': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.74; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'rubicon': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.75; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'openx': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.75; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'criteo': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.75; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'nobid': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'oftmedia': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.80; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'sovrn': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.81; temp = temp - 0.0323; return temp>0? temp: 0;} },
        //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },

        '33across': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'emx_digital': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'rhythmone': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'eplanning': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'adyoulike': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'smartadserver': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'onetag': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} }
      };
      ubpbjs.setConfig({
        floors: {
          currency: 'USD',
          // skipRate: 5,
          // modelVersion: 'Sports Ad Unit Floors',
          schema: {
              fields: ['mediaType']
          },
          values: {
              'banner': 0.01,
          }
        },
        schain: {
         validation: "relaxed",
         config: {
           ver:"1.0",
           complete: 1,
           nodes: [
             {
               asi:"unibots.in",
               sid:"70",
               hp:1
             }
           ]
         }
       },
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
        publisherDomain: 'www.studyguideindia.com',
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
        timeout: PREBID_TIMEOUT,
        labels: [GEO_CODE],
      });
  });
  // in case ubpbjs doesn't load
  setTimeout(function() {
      initAdserver();
  }, FAILSAFE_TIMEOUT);
}
