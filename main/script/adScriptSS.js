var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;
// var boturl = window.location.href;
const customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $5, 1-cent increments
    }]
};
var div_1_sizes = [320, 50];

var adUnits = [
    {
      code: '/21956916242/sakshi.com_NB_320x50',
      mediaTypes: {
        native: {
          image: {
            // sizes: [300, 100],
            aspect_ratios: [{
              min_width: 100,
              min_height: 50,
              ratio_width: 2,
              ratio_height: 1,
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
        { bidder: 'appnexus', params: { placementId: '19056673' } },
        { bidder: 'oftmedia', params: { placementId: '18778196' } }
      ]
    },
    {
      code: '/21956916242/sakshi.com_NB_320x50',
      mediaTypes: {
        banner: {
          sizes: div_1_sizes
        }
      },
      bids: [
        { bidder: 'oftmedia', params: { placementId: '18778196' } },
        { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        { bidder: '33across', params: { siteId: 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' } },
        { bidder: 'emx_digital', params: { tagid: '97515' } },
        { bidder: 'appnexus', params: { placementId: '19056673' } },
        { bidder: 'sovrn', params: { tagid: '708881' } },
        { bidder: 'openx', params: { unit: '541046310', delDomain: 'yieldbird-d.openx.net' } },
        { bidder: 'nobid', params: { siteId: '21987177881' } },
        { bidder: 'criteo', params: { networkId: '4902' } },
        { bidder: 'adsolut', params: { zoneId: '107071', host: 'cpm.adsolut.in' } },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2932597'} },
        { bidder: 'rubicon', params: { accountId: '11734', siteId: '323846', zoneId: '1680740' } }
      ]
    }
];

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
    'appnexus': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.86; } },
    'pubmatic': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.74; } },
    'rubicon': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
    'openx': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
    'criteo': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
    'nobid': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
    'oftmedia': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.80; } },
    'sovrn': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.81; } },
    'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },

    '33across': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
    'emx_digital': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
    'rhythmone': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
    'eplanning': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } }
  };
  ubpbjs.setConfig({
    priceGranularity: customConfigObjectA,
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
    publisherDomain: 'https://www.sakshi.com/',
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
    ub_slot1 = googletag.defineSlot('/21956916242/sakshi.com_NB_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
    googletag.pubads().collapseEmptyDivs(true);
    googletag.pubads().setCentering(true);
    googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAd1Rendered();
      }
    });
});

function refreshBid(ub_slot) {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21956916242/sakshi.com_NB_320x50'],
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

ub_ad1RefreshFlag = 0;
function ub_checkAd1Rendered(){
	adId1 = 'div-ub-1';
	var nodes = document.getElementById(adId1).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad1RefreshFlag != 1){
      setInterval(function() {
        ub_ad1RefreshFlag = 1;
        refreshBid(ub_slot1);
      }, REFRESH_TIMEOUT);
    }
	 }
}

setTimeout(function(){
  checkRemnantUnits();
}, 10000);

var mappings_remnant = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  adId: [],
  renderedFlag: [false, false, false, false, false, false]
};
var div_sizes_remnant_1 = [300, 250];
var div_sizes_remnant_2 = [[250, 250], [300, 100], [300, 250], [200, 200]];
var remnantAdUnits= [];
var mappings_config = {
  targetUnits: ['div-gpt-ad-1576678733140-0', 'div-gpt-ad-1560253279705-0'],
  slotNames: ['ub_remnant_slot1', 'ub_remnant_slot2'],
  adUnitNames: ['/21956916242/sakshi.com_nb_300x250_passback', '/21956916242/sakshi.com_nb_300x250_passback2'],
  adId: ['ub-remnant-ad-1', 'ub-remnant-ad-2'],
  sizes: [div_sizes_remnant_1, div_sizes_remnant_2],
  bids: [
    [
      { bidder: 'appnexus', params: { placementId: '19056673' } }, /* one placementId for all sizes  my appnexus bidder */
      //{ bidder: 'oftmedia', params: { placementId: '18671514' } },
      { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
      // { bidder: 'emx_digital', params: { tagid: '103699' } }, /* sizeless */
      { bidder: 'sovrn', params: {tagid: '735296'} },
      { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
      // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
      { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
      // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
      { bidder: 'criteo', params: {networkId: '4902'} }
    ],
    [
      { bidder: 'appnexus', params: { placementId: '19056673' } }, /* one placementId for all sizes  my appnexus bidder */
      //{ bidder: 'oftmedia', params: { placementId: '18671514' } },
      { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
      // { bidder: 'emx_digital', params: { tagid: '103699' } }, /* sizeless */
      // { bidder: 'sovrn', params: {tagid: '735296'} },
      { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
      // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
      { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
      // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
      { bidder: 'criteo', params: {networkId: '4902'} }
    ]
  ]
}

function checkRemnantUnits(){
  for(var i=0; i<mappings_config.targetUnits.length; i++){
    containsAd = false;
    var unit = document.getElementById(mappings_config.targetUnits[i]);
    if(typeof unit === "object" && unit != null){
      if(typeof unit.firstElementChild === "object"){
        if(typeof unit.firstElementChild.firstElementChild === "object"){
          if(unit.firstElementChild.firstElementChild != null){
            unit_name = unit.firstElementChild.firstElementChild.tagName.toLowerCase();
            if(unit_name === 'iframe'){
              containsAd = true;
            }
          }
        }
      }
    }

    if(!containsAd && unit !== 'undefined' && unit != null){
      for(var j = 0; j<unit.childElementCount; j++){
        child = unit.children[i];
        child_name = child.tagName.toLowerCase();
        if(child_name == 'div'){
          child.innerHTML = '';
          var z= document.createElement('div');
          z.id = mappings_config.adId[i];
          z.className = mappings_config.adId[i];
          child.appendChild(z);
          break;
        }
      }
      adUnitTemp = {
        code: mappings_config.adUnitNames[i],
        mediaTypes: {
            banner: {
                sizes: mappings_config.sizes[i]
            }
        },
        bids: mappings_config.bids[i]
      };
      remnantAdUnits.push(adUnitTemp);
      mappings_remnant.slotNumbers.push(i+1);
      mappings_remnant.adCode.push(mappings_config.adUnitNames[i]);
      mappings_remnant.sizes.push(mappings_config.sizes[i]);
      mappings_remnant.adId.push(mappings_config.adId[i]);
    }
  }
  googleDefine_remnant(mappings_remnant.slotNumbers, mappings_remnant.adCode, mappings_remnant.sizes, mappings_remnant.adId);
  callRemnantAds(mappings_remnant.adCode, mappings_remnant.slots);

  setTimeout(function() {
      initAdserver_remnant();
  }, FAILSAFE_TIMEOUT);
}

function initAdserver_remnant() {
    if (ubpbjs.initAdserverSetRemnant) return;
    ubpbjs.initAdserverSetRemnant = true;
    googletag.cmd.push(function() {
        ubpbjs.que.push(function() {
            ubpbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh(mappings_remnant.slots);
        });
    });
}

function googleDefine_remnant(slotNumbers, adCode, sizes, adId){
  for(var i=0; i<slotNumbers.length;i++){
    eval('ub_remnant_slot'+slotNumbers[i]+ '= '+'googletag.defineSlot(adCode[i], sizes[i], adId[i])');
    var a = eval('ub_remnant_slot'+slotNumbers[i]);
    a.addService(googletag.pubads());
    mappings_remnant.slots.push(eval('ub_remnant_slot'+slotNumbers[i]));
  }
}

function callRemnantAds(adCode, ub_slot){
  ubpbjs.que.push(function(){
    ubpbjs.requestBids({
      timeout: PREBID_TIMEOUT,
      adUnits: remnantAdUnits,
      adUnitCodes: adCode,
      bidsBackHandler: function() {
        ubpbjs.initAdserverSetRemnant = true;
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
