if(typeof customConfigObjectA === 'undefined'){
  var s0 = document.createElement('script');
  s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
  s0.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(s0);

  var s1 = document.createElement('script');
  s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
  s1.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(s1);

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

  var div_1_sizes = [300, 250];

  var adUnits = [
      {
          code: '21957769615/mail.com_HB_300x250',
          mediaTypes: {
              banner: {
                  sizes: div_1_sizes
              }
          },
          bids: [
          	{ bidder: 'appnexus', params: { placementId: '19307529' } },
            // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          	{ bidder: 'oftmedia', params: { placementId: '19680354' } },
          	{ bidder: '33across', params: { siteId : 'cug9nOWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] },
          	{ bidder: 'emx_digital', params: { tagid: '105527' } }, /* sizeless */
            // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
            { bidder: 'sovrn', params: {tagid: '730845'} },
          	{ bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            { bidder: 'nobid', params: { siteId : '22029514886'} },
            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2926093'} },
            // { bidder: 'criteo', params: {networkId: '10542'} },
            // { bidder: 'criteointl', params: {networkId: '10545'} },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            { bidder: 'smartadserver', params: { siteId: '362129', pageId: '1289630', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
            { bidder: 'sonobi', params: { placement_id: 'bcda84f01d05a62ae541', ad_unit: 'mail.com_HB_300x250' } },
            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      }
  ];

  // ======== DO NOT EDIT BELOW THIS LINE =========== //
  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];

  var ubpbjs = ubpbjs || {};
  ubpbjs.que = ubpbjs.que || [];



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


  var ub_slot1;
  googletag.cmd.push(function() {
      ub_slot1 = googletag.defineSlot('21957769615/mail.com_HB_300x250', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
      googletag.pubads().collapseEmptyDivs(true);
      googletag.pubads().setCentering(true);
      googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
  });


  function mainHbRun(){
    ubpbjs.que.push(function() {
        ubpbjs.addAdUnits(adUnits);
        ubpbjs.aliasBidder('criteo','criteointl');
        ubpbjs.bidderSettings = {
        'appnexus': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.86; } },
        'pubmatic': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.74; } },
        'rubicon': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
        'openx': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
        'criteo': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
        'criteointl': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
        'nobid': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
        'oftmedia': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.80; } },
        'sovrn': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.81; } },
        //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },

        'onetag': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
        // 'sonobi': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
        // 'smartadserver': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
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
          publisherDomain: 'https://www.mail.com/',
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

}
