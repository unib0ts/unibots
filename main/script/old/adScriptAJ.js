var sizes = [[320, 50]];
var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 40000;

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var adUnits = [{
  code: '/21928950349/andhrajyothy.com_NB_320x50',
  mediaTypes: {
	  banner: {
		  sizes: sizes
	  }
  },
  bids: [
    // {
    // 	bidder: 'oftmedia',
    // 	params: {placementId: '18671527'}
    // },
    {
    	bidder: 'eplanning',
    	params: {ci: '2cfed', ml: '1'}
    },
    {
    	bidder: '33across',
    	params: {siteId: 'd0h6GkBt8r6PWLaKlId8sQ', productId: 'siab'}
    },
    //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
    {
    	bidder: 'emx_digital',
    	params: {tagid: '97452'}
    }
    // {
    // 	bidder: 'rhythmone',
    // 	params: {placementId: '205373'}
    // }
  ]
}];

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];

ubpbjs.que.push(function() {
  ubpbjs.addAdUnits(adUnits);
  ubpbjs.setConfig({ userSync: {
            iframeEnabled: true
         }
  });
  ubpbjs.requestBids({
    timeout: PREBID_TIMEOUT,
    adUnitCodes: ['/21928950349/andhrajyothy.com_NB_320x50'],
    bidsBackHandler: initAdserver
  });
});

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

var ub_slot1;
googletag.cmd.push(function() {
  ub_slot1 = googletag.defineSlot('/21928950349/andhrajyothy.com_NB_320x50', sizes, 'div-gpt-ad-ub-1').addService(googletag.pubads());
  googletag.pubads().disableInitialLoad();
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
});

function refreshBid() {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21928950349/andhrajyothy.com_NB_320x50'],
		  bidsBackHandler: function() {
			  ubpbjs.setTargetingForGPTAsync(['/21928950349/andhrajyothy.com_NB_320x50']);
			  googletag.pubads().refresh([ub_slot1]);
		  }
	  });
  });
}

function initAdserver() {
  if (ubpbjs.initAdserverSet) return;
  ubpbjs.initAdserverSet = true;
  googletag.cmd.push(function() {
	  ubpbjs.setTargetingForGPTAsync && ubpbjs.setTargetingForGPTAsync();
	  googletag.pubads().refresh([ub_slot1]);
  });
}

// in case ubpbjs doesn't load
setTimeout(function() {
  initAdserver();
}, FAILSAFE_TIMEOUT);

setInterval(function() {
  refreshBid();
}, REFRESH_TIMEOUT);
