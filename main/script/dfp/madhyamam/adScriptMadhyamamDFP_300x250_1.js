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
        code: '/21956033520/madhyamam.com_wm3_300x250',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'oftmedia', params: { placementId: '18677464' } },
          { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'openx', params: {unit: '541046178', delDomain: 'yieldbird-d.openx.net'} },
          { bidder: '33across', params: { siteId : 'a8_MFsBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
          { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '738922'} },
          { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
          { bidder: 'nobid', params: { siteId : '21986889043'} },
          { bidder: 'criteo', params: {networkId: '4902'} },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
        ]
    }
];

// ======== DO NOT EDIT BELOW THIS LINE =========== //
// var googletag = googletag || {};
// googletag.cmd = googletag.cmd || [];

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
     //consentManagement: { gdpr: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400, allowAuctionWithoutConsent: true }, usp: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400 } },
      userSync: {
        iframeEnabled: true,
        syncsPerBidder: 999, // and no more than 3 syncs at a time
        syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
        filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
        // enableOverride: true // publisher will call `ubpbjs.triggerUserSyncs()'
      },
      debug: true,
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
        timeout: PREBID_TIMEOUT
    });
});

function initAdserver() {
    if (ubpbjs.initAdserverSet) return;
    ubpbjs.initAdserverSet = true;
    var iframe = document.getElementById('postbid_iframe');
    var iframeDoc = iframe.contentWindow.document;
    var adServerTargeting = ubpbjs.getAdserverTargetingForAdUnitCode('/21956033520/madhyamam.com_wm3_300x250');
    if (adServerTargeting && adServerTargeting['hb_adid']) {
      ubpbjs.que.push(function() {
          ubpbjs.setTargetingForGPTAsync();
          ubpbjs.renderAd(iframeDoc, adServerTargeting['hb_adid']);
      });
    }
    else{
      iframe.width = div_1_sizes[0][0];
      iframe.height = div_1_sizes[0][1];
      iframeDoc.write('<head></head><body>' + passbackTagHtml + '</body>');
      iframeDoc.close();
    }

}
// in case ubpbjs doesn't load
// setTimeout(function() {
//     initAdserver();
// }, FAILSAFE_TIMEOUT);

// var ub_slot1;
// googletag.cmd.push(function() {
//     ub_slot1 = googletag.defineSlot('/21956033520/madhyamam.com_wm3_300x250', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
//     googletag.pubads().collapseEmptyDivs(true);
//     googletag.pubads().setCentering(true);
//     googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
//     googletag.pubads().enableSingleRequest();
//     googletag.enableServices();
// });

var passbackTagHtml = '<script async src="https://www.googletagservices.com/tag/js/gpt.js"></script><script>window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() {googletag.defineSlot("/21956033520/madhyamam.com_wm3_300x250", [[200, 200], [250, 250], [300, 250]], "div-gpt-ad-1592306328157-0").addService(googletag.pubads());googletag.pubads().enableSingleRequest();googletag.enableServices();});</script><div id="div-gpt-ad-1592306328157-0"><script>googletag.cmd.push(function() { googletag.display("div-gpt-ad-1592306328157-0"); });</script></div>';
