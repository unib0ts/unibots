var sizes = [[320, 50]];
var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 40000;

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var adUnits = [{
  code: '/21928950349/anandabazar.com_nb_320x50',
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
    	params: {siteId: 'dWICUEBt8r6PWLaKlId8sQ', productId: 'siab'}
    },
    {
    	bidder: 'emx_digital',
    	params: {tagid: '97450'}
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
    adUnitCodes: ['/21928950349/anandabazar.com_nb_320x50'],
    bidsBackHandler: initAdserver
  });
});

ubpbjs.bidderSettings = {
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

var ub_slot1;
googletag.cmd.push(function() {
  ub_slot1 = googletag.defineSlot('/21928950349/anandabazar.com_nb_320x50', sizes, 'div-ub-1')
	.addService(googletag.pubads());
  googletag.pubads().disableInitialLoad();
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
});

function refreshBid() {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21928950349/anandabazar.com_nb_320x50'],
		  bidsBackHandler: function() {
			  ubpbjs.setTargetingForGPTAsync(['/21928950349/anandabazar.com_nb_320x50']);
			  // googletag.pubads().refresh([ub_slot1]);
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

function ub_getIframeHtml(iframe) {
   if(iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body && iframe.contentWindow.document.body.innerHTML) {
       return iframe.contentWindow.document.body.innerHTML;
   }
   return null;
}

googletag.pubads().addEventListener('slotRenderEnded', function(event) {
    if (event.slot === slot1) {
      ub_checkAdRendered();
    }
});
ub_adRefreshFlag = 0;
function ub_checkAdRendered(){
	adId = 'div-ub-1';
	var nodes = document.getElementById(adId).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe' && ub_getIframeHtml(nodes[0])) {
    if(ub_adRefreshFlag != 1){
      setInterval(function() {
        ub_adRefreshFlag = 1;
        refreshBid();
      }, REFRESH_TIMEOUT);
    }
	 }
}
