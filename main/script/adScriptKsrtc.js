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

var customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $20, 1-cent increments
    }]
};

var div_1_sizes = [300, 250];
var div_2_sizes = [320, 50];
var div_3_sizes = [[300, 50], [320, 50]];
var adUnits = [];

if (document.getElementById('corover-ksrtc-IP')) {
    adUnits1 =
    {
      code: '/21956033520/ksrtc.in_nb_300x250',
      mediaTypes: {
        banner: {
          sizes: div_1_sizes
        }
      },
      bids: [
        // { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
        { bidder: 'nobid', params: { siteId : '22045891280'} },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2975888'} },
        // { bidder: 'oftmedia', params: { placementId: '19095403' } },
        // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
        { bidder: 'appnexus', params: { placementId: '19252129' } }, /* one placementId for all sizes  my appnexus bidder */
        { bidder: 'sovrn', params: {tagid: '725490'} },
      	{ bidder: '33across', params: { siteId : 'beqQPQWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        { bidder: 'smartadserver', params: { siteId: '362126', pageId: '1289627', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        { bidder: 'sonobi', params: { placement_id: '8113176c399bf930308e', ad_unit: 'ksrtc.in_nb_300x250' } },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} }
      ]
    };
    adUnits.push(adUnits1);
}
if (document.getElementById('corover-ksrtc-HP')) {
    adUnits1 =
    {
      code: '/21956033520/ksrtc.in_nb_320x50',
      mediaTypes: {
       banner: {
         sizes: div_2_sizes
       }
      },
      bids: [
        // { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
        { bidder: 'nobid', params: { siteId : '22045891280'} },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2975889'} },
        // { bidder: 'oftmedia', params: { placementId: '19095403' } },
        //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
        { bidder: 'appnexus', params: { placementId: '19252129' } }, /* one placementId for all sizes  my appnexus bidder */
        { bidder: 'sovrn', params: {tagid: '725491'} },
        { bidder: '33across', params: { siteId : 'beqQPQWuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
          { bidder: 'smartadserver', params: { siteId: '362126', pageId: '1289627', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        { bidder: 'sonobi', params: { placement_id: '7a1e7f6b7d1d4a83fac9', ad_unit: 'ksrtc.in_nb_320x50' } },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} }
      ]
    };
    adUnits.push(adUnits1);
}
if (document.getElementById('corover-ad-hp')) {
    adUnits1 =
      {
        code: '/21956916242/ksrtc.in_nb_320x50',
        mediaTypes: {
      	  banner: {
      		  sizes: div_3_sizes
      	  }
        },
        bids: [
          // { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'appnexus', params: { placementId: '19252129' } },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },,
          { bidder: 'sovrn', params: {tagid: '741307'} },
          { bidder: 'nobid', params: { siteId : '22045891280'} },
        	{ bidder: '33across', params: { siteId : 'beqQPQWuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
          // { bidder: 'oftmedia', params: { placementId: '19095403' } },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2975889'} },
            { bidder: 'smartadserver', params: { siteId: '362126', pageId: '1289627', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          { bidder: 'sonobi', params: { placement_id: '7a1e7f6b7d1d4a83fac9', ad_unit: 'ksrtc.in_nb_320x50' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
        ]
      };
    adUnits.push(adUnits1);
}

// ======== DO NOT EDIT BELOW THIS LINE =========== //
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];


var mappings = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  adId: [],
  renderedFlag: [false, false, false]
};

function ub_checkAdRendered(adId, ub_slot, adCode){
  ub_slotNum = ub_slot[ub_slot.length-1]-1;
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

if (document.getElementById('corover-ksrtc-IP')) {
  mappings.slotNumbers.push(1);
  mappings.adCode.push('/21956033520/ksrtc.in_nb_300x250');
  mappings.sizes.push(div_1_sizes);
  mappings.adId.push('div-gpt-ad-1589482403480-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAdRendered('div-gpt-ad-1589482403480-0', ub_slot1, ['/21956033520/ksrtc.in_nb_300x250']);
      }
    });
  });
}
if (document.getElementById('corover-ksrtc-HP')) {
  mappings.slotNumbers.push(2);
  mappings.adCode.push('/21956033520/ksrtc.in_nb_320x50');
  mappings.sizes.push(div_2_sizes);
  mappings.adId.push('div-gpt-ad-1589482424254-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot2) {
        ub_checkAdRendered('div-gpt-ad-1589482424254-0', ub_slot2, ['/21956033520/ksrtc.in_nb_320x50']);
      }
    });
  });
}
if (document.getElementById('corover-ad-hp')) {
  mappings.slotNumbers.push(3);
  mappings.adCode.push('/21956916242/ksrtc.in_nb_320x50');
  mappings.sizes.push(div_3_sizes);
  mappings.adId.push('div-gpt-ad-1592487494117-0');
  googletag.cmd.push(function() {
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot3) {
          ub_checkAdRendered('div-gpt-ad-1592487494117-0', ub_slot3, ['/21956916242/ksrtc.in_nb_320x50']);
        }
      });
  });
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
            auctionDelay: 500},
        debug: false,
        useBidCache: true,
        enableSendAllBids: false, // Default will be `true` as of 1.0
        bidderSequence: 'random', // Default is random
        publisherDomain: 'https://ksrtc.in/',
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
