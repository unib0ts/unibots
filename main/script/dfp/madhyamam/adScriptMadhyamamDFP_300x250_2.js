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

var div_1_sizes = [[300, 250], [200, 200], [250, 250]];

var adUnits = [
    {
        code: '/21956033520/madhyamam.com_wm3_300x250',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'oftmedia', params: { placementId: '18677464' } },
          { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] }, /* one placementId for all sizes */
          // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'openx', params: {unit: '541046178', delDomain: 'yieldbird-d.openx.net'} },
          { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '738922'} },
          { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
          { bidder: 'nobid', params: { siteId : '21986889043'} },
          { bidder: 'criteo', params: {networkId: '10542'} },
          { bidder: 'criteo', params: {networkId: '10545'} },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2964156'} },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
        ]
    }
];

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];

function initAdserver() {
    if (ubpbjs.initAdserverSet) return;
    ubpbjs.initAdserverSet = true;
    var iframe = document.getElementById('gpt_pb_iframe');
    var iframeDoc = iframe.contentWindow.document;
    var adServerTargeting = ubpbjs.getAdserverTargetingForAdUnitCode('/21956033520/madhyamam.com_wm3_300x250');
    if (adServerTargeting && adServerTargeting['hb_adid']) {
      ubpbjs.que.push(function() {
         ubpbjs.setTargetingForGPTAsync();
         ubpbjs.renderAd(iframeDoc, adServerTargeting['hb_adid']);
      });
    }
}

function send_bids_for_analytics() {
  function forEach(responses, cb) {
    Object.keys(responses).forEach(function(adUnitCode) {
      var response = responses[adUnitCode];
      response.bids.forEach(function(bid) {
        cb(adUnitCode, bid);
      });
    });
  }
  var winners = ubpbjs.getAllWinningBids();
  var output = [];
  forEach(ubpbjs.getBidResponses(), function(code, bid) {
    output.push({
      bid: {
        bidderCode: bid.bidderCode,
        mediaType: bid.mediaType,
        adId: bid.adId,
        cpm: bid.cpm,
        pbHg: bid.pbHg,
        currency: bid.currency,
        creativeId: bid.creativeId,
      },
      adunit: code,
      auctionId: bid.auctionId,
      date: new Date().toLocaleDateString("en-US", {timeZone: "Asia/Kolkata"}),
      client: 'madhyamam',
      rendered: !!winners.find(function(winner) {
        return winner.adId==bid.adId;
      })
    });
  });
  send_bids_to_server(output);
}

function send_bids_to_server(obj){
		var request = new XMLHttpRequest();
		url = 'https://unibots.warw.in/save_bids';
  	request.open('POST', url, true);
  	request.setRequestHeader("Content-type", "application/json");
  	request.onload = function() {
  		if (request.status >= 200 && request.status < 400) {
  			var data = request.responseText;
  			data = JSON.parse(data);
  			if(data.error == true) {
  				console.log(data.msg);
  				console.log(data.errmsg);
  			}
  			else if(data.error == false) {
  				//closeloader();
  				// console.log("Request Completed Successfully");
  			}
  		}
  		else {
  			// We reached our target server, but it returned an error
  			console.log('Request failed from server');
  		}
  	};
  	request.onerror = function() {
  		console.log('Request failed');
  	};
  	request.send(JSON.stringify(obj));
}

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
        publisherDomain: 'https://www.madhyamam.com/',
        bidderTimeout: PREBID_TIMEOUT+500,
        "currency": {
           // enables currency feature
           "adServerCurrency": "AED",
           "granularityMultiplier":3 ,
           // optionally override the default rate file
           "conversionRateFile": "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/currency/currency.json",
           // optionally provide a default rate in case the file can't be read
           "defaultRates": { "USD": { "AED": 3.67 }}
         }
        //pubcid: {expInterval: },
        //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
       });
      ubpbjs.requestBids({
        bidsBackHandler: initAdserver,
        timeout: PREBID_TIMEOUT,
        labels: [GEO_CODE],
      });
      ubpbjs.onEvent('auctionEnd', function(){
        setTimeout(function(){
          send_bids_for_analytics();
        }, 5000);
      });
  });
  // in case ubpbjs doesn't load
  setTimeout(function() {
      initAdserver();
  }, FAILSAFE_TIMEOUT);
}
