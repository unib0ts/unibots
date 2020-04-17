var sizes = [[320, 50]];
var sizes_2 = [[300, 250]];
var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 40000;

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var adUnits = [
  {
    code: '/21928950349/thewall.in_NB_320x50',
    mediaTypes: {
  	  banner: {
  		  sizes: sizes
  	  }
    },
    bids: [
    {
    	bidder: 'oftmedia',
    	params: {placementId: '18671527'}
    },
    {
    	bidder: 'eplanning',
    	params: {ci: '2cfed', ml: '1'}
    },
    {
    	bidder: '33across',
    	params: {siteId: 'afgup6Buar6PWLaKlId8sQ', productId: 'siab'}
    },
    {
    	bidder: 'emx_digital',
    	params: {tagid: '97460'}
    //},
    //{
    //	bidder: 'rhythmone',
    //	params: {placementId: '205372'}
    }
  ]
  },
  {
    code: '/21928950349/thewall.in_NB_300x250',
    mediaTypes: {
  	  banner: {
  		  sizes: sizes
  	  }
    },
    bids: [
      {
      	bidder: 'oftmedia',
      	params: {placementId: '18671527'}
      },
      {
      	bidder: 'eplanning',
      	params: {ci: '2cfed', ml: '1'}
      },
      {
      	bidder: '33across',
      	params: {siteId: 'afgup6Buar6PWLaKlId8sQ', productId: 'siab'}
      },
      {
      	bidder: 'emx_digital',
      	params: {tagid: '97460'}
      //},
      //{
      //	bidder: 'rhythmone',
      //	params: {placementId: '205372'}
      }
    ]
  }
];

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
    adUnitCodes: ['/21928950349/thewall.in_NB_320x50', '/21928950349/thewall.in_NB_300x250'],
    bidsBackHandler: initAdserver
  });
});

// ubpbjs.bidderSettings = {
//     oftmedia: {
//       bidCpmAdjustment: function(bidCpm){
//         return bidCpm*0.80;
//       }
//     },
// 	emx_digital: {
//       bidCpmAdjustment: function(bidCpm){
//         return bidCpm*0.80;
//       }
//     }
// };

ubpbjs.bidderSettings = {
    standard: {
        adserverTargeting: [{
            key: "hb_bidder",
            val: function(bidResponse) {
                return bidResponse.bidderCode;
            }
        }, {
            key: "hb_adid",
            val: function(bidResponse) {
                return bidResponse.adId;
            }
        }, {
            key: "hb_pb",
            val: function(bidResponse) {
                return bidResponse.pbHg;
            }
        }, {
            key: 'hb_size',
            val: function (bidResponse) {
                return bidResponse.size;
            }
        }, {
            key: 'hb_source',
            val: function (bidResponse) {
                return bidResponse.source;
            }
        }, {
            key: 'hb_format',
            val: function (bidResponse) {
                return bidResponse.mediaType;
            }
        }]
    }
}

var slot1;
var slot2;
googletag.cmd.push(function() {
  slot1 = googletag.defineSlot('/21928950349/thewall.in_NB_320x50', sizes, 'div-ub-1')
	.addService(googletag.pubads());
  slot2 = googletag.defineSlot('/21928950349/thewall.in_NB_300x250', sizes_2, 'div-ub-2')
	.addService(googletag.pubads());
  googletag.pubads().disableInitialLoad();
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
  googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === slot1) {
        ub_checkAd1Rendered();
      }
      else if (event.slot === slot2) {
        ub_checkAd2Rendered();
      }
      else if ((event.slot === slot1) && (event.slot === slot2)) {
        ub_checkAd1Rendered();
        ub_checkAd2Rendered();
      }
  });
});

function refreshBid(slot) {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21928950349/thewall.in_NB_320x50', '/21928950349/thewall.in_NB_300x250'],
		  bidsBackHandler: function() {
			  ubpbjs.setTargetingForGPTAsync(['/21928950349/thewall.in_NB_320x50', '/21928950349/thewall.in_NB_300x250']);
			  googletag.pubads().refresh([slot]);
		  }
	  });
  });
}

function initAdserver() {
  if (ubpbjs.initAdserverSet) return;
  ubpbjs.initAdserverSet = true;
  googletag.cmd.push(function() {
	  ubpbjs.setTargetingForGPTAsync && ubpbjs.setTargetingForGPTAsync();
	  googletag.pubads().refresh([slot2, slot1]);
  });
}

// in case ubpbjs doesn't load
setTimeout(function() {
  initAdserver();
}, FAILSAFE_TIMEOUT);

ub_ad1RefreshFlag = 0;
function ub_checkAd1Rendered(){
	adId1 = 'div-ub-1';
	var nodes = document.getElementById(adId1).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad1RefreshFlag != 1){
      setInterval(function() {
        ub_ad1RefreshFlag = 1;
        refreshBid(slot1);
      }, REFRESH_TIMEOUT);
    }
	 }
}

ub_ad2RefreshFlag = 0;
function ub_checkAd2Rendered(){
	adId1 = 'div-ub-2';
	var nodes = document.getElementById(adId1).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad2RefreshFlag != 1){
      setInterval(function() {
        ub_ad2RefreshFlag = 1;
        refreshBid(slot2);
      }, REFRESH_TIMEOUT);
    }
	 }
}
