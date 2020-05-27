if(typeof customConfigObjectA === 'undefined'){
  // var s0 = document.createElement('script');
  // s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
  // s0.type = "text/javascript";
  // document.getElementsByTagName('head')[0].appendChild(s0);

  var s1 = document.createElement('script');
  s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
  s1.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(s1);

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
            // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          	// { bidder: 'oftmedia', params: { placementId: '19196682' } },
          	// { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
          	// { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
            { bidder: 'sovrn', params: {tagid: '730845'} },
          	// { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
          	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            // { bidder: 'nobid', params: { siteId : '22012495545'} },
            // { bidder: 'criteo', params: {networkId: '4902'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      }
  ];

  // ======== DO NOT EDIT BELOW THIS LINE =========== //
  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];

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
        publisherDomain: 'https://www.mail.com/',
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
      ub_slot1 = googletag.defineSlot('21957769615/mail.com_HB_300x250', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
      googletag.pubads().collapseEmptyDivs(true);
      googletag.pubads().setCentering(true);
      googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
  });

}
