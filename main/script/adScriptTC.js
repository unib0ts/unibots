var sizes = [[320, 50]];
var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 40000;

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var adUnits = [{
  code: '/21928950349/tellychakkar.com_NB_320x50',
  mediaTypes: {
	  banner: {
		  sizes: sizes
	  }
  },
    bids: [
    {
    	bidder: 'oftmedia',
    	params: {placementId: '18778201'}
    },
    {
    	bidder: 'eplanning',
    	params: {ci: '2cfed', ml: '1'}
    },
    {
    	bidder: '33across',
    	params: {siteId: 'ccvHyIBuar6PWLaKlId8sQ', productId: 'siab'}
//    },
    {
    	bidder: 'emx_digital',
    	params: {tagid: '97555'}
//    },
//    {
//      bidder: 'rhythmone',
//    	params: {placementId: '205475'}
    }
  ]
}];

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

pbjs.que.push(function() {
  pbjs.addAdUnits(adUnits);
  pbjs.setConfig({ userSync: {
            iframeEnabled: true
         }
  });
  pbjs.requestBids({
    timeout: PREBID_TIMEOUT,
    adUnitCodes: ['/21928950349/tellychakkar.com_NB_320x50'],
    bidsBackHandler: initAdserver
  });
});

pbjs.bidderSettings = {
    oftmedia: {
      bidCpmAdjustment: function(bidCpm){
        return bidCpm*0.80;
      }
	},
    emx_digital: {
      bidCpmAdjustment: function(bidCpm){
        return bidCpm*0.80;
      }  
    }
};

var slot1;
googletag.cmd.push(function() {
  slot1 = googletag.defineSlot('/21928950349/tellychakkar.com_NB_320x50', sizes, 'div-gpt-ad-1584360053513-0')
	.addService(googletag.pubads());
  googletag.pubads().disableInitialLoad();
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
});

function refreshBid() {
  pbjs.que.push(function() {
	  pbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21928950349/tellychakkar.com_NB_320x50'],
		  bidsBackHandler: function() {
			  pbjs.setTargetingForGPTAsync(['/21928950349/tellychakkar.com_NB_320x50']);
			  googletag.pubads().refresh([slot1]);
		  }
	  });
  });
}

function initAdserver() {
  if (pbjs.initAdserverSet) return;
  pbjs.initAdserverSet = true;
  googletag.cmd.push(function() {
	  pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
	  googletag.pubads().refresh();
  });
}

// in case PBJS doesn't load
setTimeout(function() {
  initAdserver();
}, FAILSAFE_TIMEOUT);

setInterval(function() {
  refreshBid();
}, REFRESH_TIMEOUT);
