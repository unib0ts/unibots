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

var div_1_sizes = [[320, 100], [320, 50], [300, 100]];
// var div_4_sizes = [[320, 100], [320, 50], [300, 100]];

var adUnits = [
    {
        code: '/21956916242/banglarpran.com_nb_320x100',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19057746' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'oftmedia', params: { placementId: '19671775' } },
          { bidder: '33across', params: { siteId : 'aSjtA6WtGr6OGPaKlId8sQ', productId: 'siab' } }, /*All sizes*/
          { bidder: 'emx_digital', params: { tagid: '103696' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '713872'} },
          { bidder: 'nobid', params: { siteId : '22027067863'} },
          { bidder: 'openx', params: {unit: '541046448', delDomain: 'yieldbird-d.openx.net'} },
          { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
          // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2950120'} },
          { bidder: 'nobid', params: { siteId : '22027067863'} },
          //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'criteo', params: {networkId: '10542'} },
          { bidder: 'criteointl', params: {networkId: '10545'} }
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
        syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
        filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
        // enableOverride: true // publisher will call `ubpbjs.triggerUserSyncs()'
      },
      debug: false,
      useBidCache: true,
      enableSendAllBids: false, // Default will be `true` as of 1.0
      bidderSequence: 'random', // Default is random
      publisherDomain: 'http://banglarpran.com/',
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
            googletag.pubads().refresh([ub_slot1, ub_slot4]);
        });
    });
}
// in case ubpbjs doesn't load
setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);

var ub_slot4;
googletag.cmd.push(function() {
    // ub_slot1 = googletag.defineSlot('/21928950349/banglarpran.com_NB_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
    ub_slot1 = googletag.defineSlot('/21956916242/banglarpran.com_nb_320x100', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
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
      adUnitCodes: ['/21956916242/banglarpran.com_nb_320x100'],
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
   else{
     callRemnantAdSense();
   }
}

setTimeout(function(){
  checkRemnantUnits();
}, 30000);

var mappings_remnant = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  adId: [],
  renderedFlag: [false, false, false, false, false, false]
};
var remnantAdUnits= [];
var div_sizes_remnant_1 = [300, 250];
var div_sizes_remnant_2 = [[320, 100], [320, 50], [300, 100]];

function checkRemnantUnits(){

  var unit = document.querySelectorAll('[data-ad-slot="6622736606"]')[0];
  if(typeof unit.firstElementChild === "object"){
    if(typeof unit.firstElementChild.firstElementChild === "object"){
      unit_ad = unit.firstElementChild.firstElementChild.firstElementChild;
    }
  }

  unit_width = unit.offsetwidth;
  unit_height = unit.offsetheight;
  if(typeof unit_width === 'undefined' || typeof unit_height === 'undefined'){
    unit_width = screen.width;
    unit_height = 250;
  }
  if(unit_width<728 && unit_width >= 300){
    if(unit_height<250){
      //Ad Unit 320x50
      console.log('Ad Unit 320x50');
    }
    else{
      var z= document.createElement('div');
      z.id = 'ub-remnant-ad-1';
      z.className = 'ub-remnant-ad-1';
      var node = unit.parentNode;
      node.replaceChild(z, unit);

      remnantAdUnits = [
        {
          code: '/21928950349/banglarpran_300x250',
          mediaTypes: {
              banner: {
                  sizes: div_sizes_remnant_1
              }
          },
          bids: [
            { bidder: 'appnexus', params: { placementId: '19057746' } }, /* one placementId for all sizes  my appnexus bidder */
            { bidder: 'oftmedia', params: { placementId: '19671779' } },
            { bidder: '33across', params: { siteId : 'aSjtA6WtGr6OGPaKlId8sQ', productId: 'siab' } }, /*All sizes*/
            { bidder: 'emx_digital', params: { tagid: '103699' } }, /* sizeless */
            { bidder: 'sovrn', params: {tagid: '724691'} },
            { bidder: 'openx', params: {unit: '541046448', delDomain: 'yieldbird-d.openx.net'} },
            { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
            // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2950121'} },
            { bidder: 'nobid', params: { siteId : '22027067863'} },
            // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            { bidder: 'criteo', params: {networkId: '10542'} },
            { bidder: 'criteointl', params: {networkId: '10545'} }
          ]
        }
      ]
      mappings_remnant.slotNumbers.push(1);
      mappings_remnant.adCode.push('/21928950349/banglarpran_300x250');
      mappings_remnant.sizes.push(div_sizes_remnant_1);
      mappings_remnant.adId.push('ub-remnant-ad-1');

      googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_remnant_slot1) {
            ub_checkAdRendered_remnant('ub-remnant-ad-1', ub_remnant_slot1, ['/21928950349/banglarpran_300x250']);
          }
        });
      });
      //Ad Unit 300x250
    }
  }
  else if(unit_width >= 728){
    //Ad Unit 728x90
    console.log('Ad Unit 728x90');
  }

  var unit = document.getElementById('div-gpt-ad-1590140470399-0');
  remnantAdUnits1 = [
    {
        code: '/21928950349/banglarpran.com_NB_320x50',
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
          { bidder: 'appnexus', params: { placementId: '19057746' } }
        ]
    },
    {
        code: '/21928950349/banglarpran.com_NB_320x50',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
        	{ bidder: 'appnexus', params: { placementId: '19057746' } }, /* one placementId for all sizes  my appnexus bidder */
        	{ bidder: 'oftmedia', params: { placementId: '19671775' } },
        	{ bidder: '33across', params: { siteId : 'aSjtA6WtGr6OGPaKlId8sQ', productId: 'siab' } }, /*All sizes*/
        	{ bidder: 'emx_digital', params: { tagid: '103695' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '713872'} },
          { bidder: 'openx', params: {unit: '541046448', delDomain: 'yieldbird-d.openx.net'} },
        	{ bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2950122'} },
          { bidder: 'nobid', params: { siteId : '22027067863'} },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'criteo', params: {networkId: '10542'} },
          { bidder: 'criteointl', params: {networkId: '10545'} }
        ]
    }
  ];
  remnantAdUnits = remnantAdUnits.concat(remnantAdUnits1);

  var z= document.createElement('div');
  z.id = 'ub-remnant-ad-2';
  z.className = 'ub-remnant-ad-2';
  var node = unit.parentNode;
  node.replaceChild(z, unit);

  mappings_remnant.slotNumbers.push(2);
  mappings_remnant.adCode.push('/21928950349/banglarpran.com_NB_320x50');
  mappings_remnant.sizes.push(div_sizes_remnant_2);
  mappings_remnant.adId.push('ub-remnant-ad-2');

  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_remnant_slot2) {
        ub_checkAdRendered_remnant('ub-remnant-ad-2', ub_remnant_slot2, ['/21928950349/banglarpran.com_NB_320x50']);
      }
    });
  });

  if(typeof googletag.defineSlot === "function"){
    googleDefine_remnant(mappings_remnant.slotNumbers, mappings_remnant.adCode, mappings_remnant.sizes, mappings_remnant.adId);
    // googlePush_remnant();
  }
  else{
    setTimeout(function(){
      googleDefine_remnant(mappings_remnant.slotNumbers, mappings_remnant.adCode, mappings_remnant.sizes, mappings_remnant.adId);
      // googlePush_remnant();
    }, 500);
  }

  callRemnantAds(mappings_remnant.adCode, mappings_remnant.slots);
}

function ub_checkAdRendered_remnant(adId, ub_slot, adCode){
  adId1 = adId;
  var nodes = document.getElementById(adId1).childNodes[0].childNodes;
  if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    setTimeout(function() {
      refreshBid_remnant(ub_slot, adCode);
    }, REFRESH_TIMEOUT);
  }
}

function refreshBid_remnant(ub_slot, adCode) {
  ubpbjs.que.push(function(){
    ubpbjs.requestBids({
      timeout: PREBID_TIMEOUT,
      adUnits: remnantAdUnits,
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

function initAdserver_ramnant() {
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

setTimeout(function() {
    initAdserver_ramnant();
}, FAILSAFE_TIMEOUT);

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

function callRemnantAdSense(){
  var unit = document.getElementById('div-ub-1');
  unit_adsense = '<ins class="adsbygoogle" style="display:inline-block;width:320px;height:100px" data-ad-client="ca-pub-7482647233755836" data-ad-slot="8670922936"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
  if(typeof unit !== 'undefined'){
    unit.innerHTML = unit_adsense;
    if(typeof loadAd === 'function'){
      loadAd('div-ub-1');
    }
  }
}
