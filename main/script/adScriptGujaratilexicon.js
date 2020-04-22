var sizes = [[970, 250], [728, 90], [970, 90]];
var sizes_2 = [[160, 600], [300, 250], [300, 600], [120, 600]];
var sizes_3 = [[728, 250], [728, 90]];
var sizes_4 =  [[300, 250]];
var sizes_5 =  [[300, 250], [300, 600]];
var sizes_6 = [[728, 90]];

var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 40000;

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var adUnits = [
  {
    code: '/21956916242/gujratilexicon.com_1',
    mediaTypes: {
  	  banner: {
  		  sizes: sizes
  	  }
    },
    bids: [
    {
    	bidder: 'eplanning',
    	params: {ci: '2cfed', ml: '1'}
    },
  ]
  },
  {
    code: '/21956916242/gujaratilexicon.com_2',
    mediaTypes: {
  	  banner: {
  		  sizes: sizes_2
  	  }
    },
    bids: [
      {
      	bidder: 'eplanning',
      	params: {ci: '2cfed', ml: '1'}
      }
    ]
  },
  {
    code: '/21956916242/gujaratilexicon.com_3',
    mediaTypes: {
  	  banner: {
  		  sizes: sizes_3
  	  }
    },
    bids: [
      {
      	bidder: 'eplanning',
      	params: {ci: '2cfed', ml: '1'}
      }
    ]
  },
  {
    code: '/21956916242/gujaratilexicon.com_4',
    mediaTypes: {
  	  banner: {
  		  sizes: sizes_4
  	  }
    },
    bids: [
      {
      	bidder: 'eplanning',
      	params: {ci: '2cfed', ml: '1'}
      }
    ]
  },
  {
    code: '/21956916242/gujaratilexicon.com_5',
    mediaTypes: {
  	  banner: {
  		  sizes: sizes_5
  	  }
    },
    bids: [
      {
      	bidder: 'eplanning',
      	params: {ci: '2cfed', ml: '1'}
      }
    ]
  },
  {
    code: '/21956916242/gujaratilexicon.com_6',
    mediaTypes: {
  	  banner: {
  		  sizes: sizes_6
  	  }
    },
    bids: [
      {
      	bidder: 'eplanning',
      	params: {ci: '2cfed', ml: '1'}
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
    adUnitCodes: ['/21956916242/gujratilexicon.com_1', '/21956916242/gujaratilexicon.com_2', '/21956916242/gujaratilexicon.com_3', '/21956916242/gujaratilexicon.com_4', '/21956916242/gujaratilexicon.com_5', '/21956916242/gujaratilexicon.com_6'],
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
var slot3;
var slot4;
var slot5;
var slot6;
googletag.cmd.push(function() {
  slot1 = googletag.defineSlot('/21956916242/gujratilexicon.com_1', sizes, 'div-ub1')
	.addService(googletag.pubads());
  slot2 = googletag.defineSlot('/21956916242/gujaratilexicon.com_2', sizes_2, 'div-ub2')
	.addService(googletag.pubads());
  slot3 = googletag.defineSlot('/21956916242/gujaratilexicon.com_3', sizes_3, 'div-ub3')
	.addService(googletag.pubads());
  slot4 = googletag.defineSlot('/21956916242/gujaratilexicon.com_4', sizes_4, 'div-ub4')
	.addService(googletag.pubads());
  slot5 = googletag.defineSlot('/21956916242/gujaratilexicon.com_5', sizes_5, 'div-ub5')
	.addService(googletag.pubads());
  slot6 = googletag.defineSlot('/21956916242/gujaratilexicon.com_6', sizes_6, 'div-ub6')
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
      else if (event.slot === slot3) {
        ub_checkAd3Rendered();
      }
      else if (event.slot === slot4) {
        ub_checkAd4Rendered();
      }
      else if (event.slot === slot5) {
        ub_checkAd5Rendered();
      }
      else if (event.slot === slot6) {
        ub_checkAd6Rendered();
      }
      else if ((event.slot === slot1) && (event.slot === slot2) && (event.slot === slot3) && (event.slot === slot4) && (event.slot === slot5) && (event.slot === slot6)) {
        ub_checkAd1Rendered();
        ub_checkAd2Rendered();
        ub_checkAd3Rendered();
        ub_checkAd4Rendered();
        ub_checkAd5Rendered();
        ub_checkAd6Rendered();
      }
  });
});

function refreshBid(slot) {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21956916242/gujratilexicon.com_1', '/21956916242/gujaratilexicon.com_2', '/21956916242/gujaratilexicon.com_3', '/21956916242/gujaratilexicon.com_4', '/21956916242/gujaratilexicon.com_5', '/21956916242/gujaratilexicon.com_6'],
		  bidsBackHandler: function() {
			  ubpbjs.setTargetingForGPTAsync(['/21956916242/gujratilexicon.com_1', '/21956916242/gujaratilexicon.com_2', '/21956916242/gujaratilexicon.com_3', '/21956916242/gujaratilexicon.com_4', '/21956916242/gujaratilexicon.com_5', '/21956916242/gujaratilexicon.com_6']);
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
	  googletag.pubads().refresh([slot6, slot5, slot4, slot3, slot2, slot1]);
  });
}

// in case ubpbjs doesn't load
setTimeout(function() {
  initAdserver();
}, FAILSAFE_TIMEOUT);

ub_ad1RefreshFlag = 0;
function ub_checkAd1Rendered(){
	adId1 = 'div-ub1';
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
	adId1 = 'div-ub2';
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

ub_ad3RefreshFlag = 0;
function ub_checkAd3Rendered(){
	adId1 = 'div-ub3';
	var nodes = document.getElementById(adId1).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad3RefreshFlag != 1){
      setInterval(function() {
        ub_ad3RefreshFlag = 1;
        refreshBid(slot3);
      }, REFRESH_TIMEOUT);
    }
	 }
}

ub_ad4RefreshFlag = 0;
function ub_checkAd4Rendered(){
	adId1 = 'div-ub4';
	var nodes = document.getElementById(adId1).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad4RefreshFlag != 1){
      setInterval(function() {
        ub_ad4RefreshFlag = 1;
        refreshBid(slot4);
      }, REFRESH_TIMEOUT);
    }
	 }
}

ub_ad5RefreshFlag = 0;
function ub_checkAd5Rendered(){
	adId1 = 'div-ub5';
	var nodes = document.getElementById(adId1).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad5RefreshFlag != 1){
      setInterval(function() {
        ub_ad5RefreshFlag = 1;
        refreshBid(slot5);
      }, REFRESH_TIMEOUT);
    }
	 }
}

ub_ad6RefreshFlag = 0;
function ub_checkAd1Rendered(){
	adId1 = 'div-ub6';
	var nodes = document.getElementById(adId1).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad6RefreshFlag != 1){
      setInterval(function() {
        ub_ad6RefreshFlag = 1;
        refreshBid(slot6);
      }, REFRESH_TIMEOUT);
    }
	 }
}
