var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;
// var boturl = window.location.href;
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

var div_1_sizes = [[970, 90], [728, 90]];
var div_2_sizes = [[320, 100], [320, 50], [300, 50], [300, 100]];
// var div_3_sizes = [[970, 250], [728, 90], [970, 90]];

var adUnits = [];

if (typeof mobileCheck === "function") {
  if (!mobileCheck()) {
    adUnits1 =
      {
          code: '/21956916242/sattakingresults.net_hb_970x90',
          mediaTypes: {
              banner: {
                  sizes: div_1_sizes
              }
          },
          bids: [
           { bidder: 'appnexus', params: { placementId: '20034420' } }, /* one placementId for all sizes  my appnexus bidder */
           // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
           //  { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952066'} },
           // // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
           // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
           //  { bidder: 'sovrn', params: {tagid: '736645'} },
           //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
           // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
           // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
           //  { bidder: 'nobid', params: { siteId : '22042552139'} },
           //  { bidder: 'criteo', params: {networkId: '10542'} },
           //  { bidder: 'criteointl', params: {networkId: '10545'} },
           //  { bidder: 'smartadserver', params: { siteId: '362097', pageId: '1289598', formatId: '93233', domain: 'https://prg8.smartadserver.com' } },
           //  { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
            { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
    adUnits.push(adUnits1);
  }
  else {
    adUnits1 =
        {
            code: '/21956916242/sattakingresults.net_hb_320x100',
            mediaTypes: {
                banner: {
                    sizes: div_2_sizes
                }
            },
            bids: [
            	{ bidder: 'appnexus', params: { placementId: '20034420' } }, /* one placementId for all sizes  my appnexus bidder */
            	// // { bidder: 'oftmedia', params: { placementId: '18671523' } },
              // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952067'} },
            	// // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
            	// // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
              // { bidder: 'sovrn', params: {tagid: '736646'} },
              // // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
            	// { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
            	// // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
              // { bidder: 'nobid', params: { siteId : '22042552139'} },
              // { bidder: 'criteo', params: {networkId: '10542'} },
              // { bidder: 'criteointl', params: {networkId: '10545'} },
              // { bidder: 'smartadserver', params: { siteId: '362097', pageId: '1289598', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
              // { bidder: 'sonobi', params: { placement_id: 'a55a624e18a52282bcb6', ad_unit: 'beanstalkmums.com.au_nb_320x50' } },
              { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
              { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'} },
              //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
              // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
            ]
        };
    adUnits.push(adUnits1);
  }
}

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
          auctionDelay: 500
      },
      debug: false,
      useBidCache: true,
      enableSendAllBids: false, // Default will be `true` as of 1.0
      bidderSequence: 'random', // Default is random
      publisherDomain: 'https://www.sattakingresults.net/',
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

var mappings = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  adId: [],
  renderedFlag: [false, false]
};

function ub_checkAdRendered(adId, ub_slot, adCode){
  ub_slotNum = ub_slot[ub_slot.length-1];
  if(!mappings.renderedFlag[ub_slotNum]){
    adId1 = adId;
    var nodes = document.getElementById(adId1).childNodes[0].childNodes;
    if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      setTimeout(function() {
        refreshBid(ub_slot, adCode);
      }, REFRESH_TIMEOUT);
      mappings.renderedFlag[ub_slotNum] = true;
    }
  }
}

function refreshBid(ub_slot, adCode) {
  ubpbjs.que.push(function(){
    ubpbjs.requestBids({
      timeout: PREBID_TIMEOUT,
      adUnitCodes: adCode,
      bidsBackHandler: function() {
        googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh(ub_slot);
          });
        });
      }
    });
  });
}

function initAdserver() {
    if (ubpbjs.initAdserverSet) return;
    ubpbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        ubpbjs.que.push(function() {
            ubpbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh(mappings.slots);
        });
    });
}

function googleDefine(slotNumbers, adCode, sizes, adId){
  for(var i=0; i<slotNumbers.length;i++){
    eval('ub_slot'+slotNumbers[i]+ '= '+'googletag.defineSlot(adCode[i], sizes[i], adId[i])');
    var a = eval('ub_slot'+slotNumbers[i]);
    a.addService(googletag.pubads());
    mappings.slots.push(eval('ub_slot'+slotNumbers[i]));
  }
}

function googlePush(){
  googletag.cmd.push(function() {
    googletag.pubads().collapseEmptyDivs(true);
    googletag.pubads().setCentering(true);
    googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
}

if(typeof mobileCheck === "function"){
  if (!mobileCheck()){
   mappings.slotNumbers.push(1);
   mappings.adCode.push('/21956916242/sattakingresults.net_hb_970x90');
   mappings.sizes.push(div_1_sizes);
   mappings.adId.push('div-gpt-ad-1597818385874-0');
   googletag.cmd.push(function() {
       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
         if (event.slot === ub_slot1) {
           ub_checkAdRendered('div-gpt-ad-1597818385874-0', ub_slot1, ['/21956916242/sattakingresults.net_hb_970x90']);
         }
       });
   });
  }
  else {
   mappings.slotNumbers.push(2);
   mappings.adCode.push('/21956916242/sattakingresults.net_hb_320x100');
   mappings.sizes.push(div_2_sizes);
   mappings.adId.push('div-gpt-ad-1597818407914-0');
   googletag.cmd.push(function() {
       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
         if (event.slot === ub_slot2) {
           ub_checkAdRendered('div-gpt-ad-1597818407914-0', ub_slot2, ['/21956916242/sattakingresults.net_hb_320x100']);
         }
       });
   });
  }
}

if(typeof googletag.defineSlot === "function"){
  googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
  googlePush();
}
else{
  setTimeout(function(){
    googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
    googlePush();
  }, 500);
}

setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);
