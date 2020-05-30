var div_1_sizes = [[970, 250], [728, 90], [970, 90]];
var div_2_sizes = [[160, 600], [300, 250], [300, 600], [120, 600]];
var div_3_sizes = [[728, 250], [728, 90]];
var div_4_sizes =  [[300, 250]];
var div_5_sizes =  [[300, 250], [300, 600]];
var div_6_sizes = [[728, 90]];
var adUnits = [];

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

if (document.getElementById('1')) {
    adUnits = [
      {
        code: '/21956916242/gujratilexicon.com_1',
        mediaTypes: {
          banner: {
            sizes: div_1_sizes
          }
        },
        bids: [
        { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
        { bidder: 'oftmedia', params: { placementId: '19095403' } },
        // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
      ]
      }
    ];
}
if (document.getElementById('2')) {
    adUnits = [
      {
        code: '/21956916242/gujaratilexicon.com_2',
        mediaTypes: {
      	  banner: {
      		  sizes: div_2_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
        ]
      }
    ];
}
if (document.getElementById('3')) {
    adUnits = [
      {
        code: '/21956916242/gujaratilexicon.com_3',
        mediaTypes: {
      	  banner: {
      		  sizes: div_3_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
        ]
      }
    ];
}
if (document.getElementById('4')) {
    adUnits = [
      {
        code: '/21956916242/gujaratilexicon.com_4',
        mediaTypes: {
          banner: {
            sizes: div_4_sizes
          }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
        ]
      }
    ];
}
if (document.getElementById('5')) {
    adUnits = [
      {
        code: '/21956916242/gujaratilexicon.com_5',
        mediaTypes: {
      	  banner: {
      		  sizes: div_5_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
        ]
      }
    ];
}
if (document.getElementById('6')) {
    adUnits = [
      {
        code: '/21956916242/gujaratilexicon.com_6',
        mediaTypes: {
          banner: {
            sizes: div_6_sizes
          }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
        ]
      }
    ];
}

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
    ubpbjs.bidderSettings = {
      oftmedia: { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      emx_digital: { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } }
    };
    ubpbjs.setConfig({

    	priceGranularity: customConfigObjectA,
     //consentManagement: { gdpr: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400, allowAuctionWithoutConsent: true }, usp: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400 } },
      //cache: {url: "https://prebid.adnxs.com/pbc/v1/cache"},
      s2sConfig: {
        accountId: '',
        enabled: false,
        bidders: ['sovrn', 'openx','sharethrough'],
        timeout: PREBID_TIMEOUT-300,
        adapter: 'prebidServer',
        endpoint: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
        syncEndpoint: 'https://prebid.adnxs.com/pbs/v1/cookie_sync',
        cookieSet: true,
        cookiesetUrl: 'https://acdn.adnxs.com/cookieset/cs.js'
      },
      userSync: {
        iframeEnabled: true,
        syncsPerBidder: 999, // and no more than 3 syncs at a time
        syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
        filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
        // enableOverride: true // publisher will call `ubpbjs.triggerUserSyncs()'
      },
      debug: true,
      useBidCache: false,
      enableSendAllBids: false, // Default will be `true` as of 1.0
      bidderSequence: 'random', // Default is random
      publisherDomain: 'https://www.gujaratilexicon.com/',
      bidderTimeout: PREBID_TIMEOUT+500,
      //pubcid: {expInterval: },
      //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
     });
    ubpbjs.requestBids({
        bidsBackHandler: initAdserver,
        timeout: PREBID_TIMEOUT
    });
});

if (document.getElementById('1')) {
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
      ub_slot1 = googletag.defineSlot('/21956916242/gujratilexicon.com_1', div_1_sizes, 'div-ub1').addService(googletag.pubads());
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
  		  adUnitCodes: ['/21956916242/gujratilexicon.com_1'],
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
  	adId1 = 'div-ub1';
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

}
if (document.getElementById('2')) {

  function initAdserver() {
      if (ubpbjs.initAdserverSet) return;
      ubpbjs.initAdserverSet = true;
      googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh([ub_slot2]);
          });
      });
  }
  // in case ubpbjs doesn't load
  setTimeout(function() {
      initAdserver();
  }, FAILSAFE_TIMEOUT);

  var ub_slot2;
  googletag.cmd.push(function() {
      ub_slot2 = googletag.defineSlot('/21956916242/gujaratilexicon.com_2', div_2_sizes, 'div-ub2').addService(googletag.pubads());
      googletag.pubads().collapseEmptyDivs(true);
      googletag.pubads().setCentering(true);
      googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot2) {
          ub_checkAd2Rendered();
        }
      });
  });

  function refreshBid(ub_slot) {
    ubpbjs.que.push(function() {
  	  ubpbjs.requestBids({
  		  timeout: PREBID_TIMEOUT,
  		  adUnitCodes: ['/21956916242/gujaratilexicon.com_2'],
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

  ub_ad2RefreshFlag = 0;
  function ub_checkAd2Rendered(){
  	adId2 = 'div-ub2';
  	var nodes = document.getElementById(adId2).childNodes[0].childNodes;
  	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      if(ub_ad2RefreshFlag != 1){
        setInterval(function() {
          ub_ad2RefreshFlag = 1;
          refreshBid(ub_slot2);
        }, REFRESH_TIMEOUT);
      }
  	 }
  }
}
if (document.getElementById('3')) {

  function initAdserver() {
      if (ubpbjs.initAdserverSet) return;
      ubpbjs.initAdserverSet = true;
      googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh([ub_slot3]);
          });
      });
  }
  // in case ubpbjs doesn't load
  setTimeout(function() {
      initAdserver();
  }, FAILSAFE_TIMEOUT);

  var ub_slot3;
  googletag.cmd.push(function() {
      ub_slot3 = googletag.defineSlot('/21956916242/gujaratilexicon.com_3', div_3_sizes, 'div-ub3').addService(googletag.pubads());
      googletag.pubads().collapseEmptyDivs(true);
      googletag.pubads().setCentering(true);
      googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot3) {
          ub_checkAd3Rendered();
        }
      });
  });

  function refreshBid(ub_slot) {
    ubpbjs.que.push(function() {
  	  ubpbjs.requestBids({
  		  timeout: PREBID_TIMEOUT,
  		  adUnitCodes: ['/21956916242/gujaratilexicon.com_3'],
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

  ub_ad3RefreshFlag = 0;
  function ub_checkAd3Rendered(){
  	adId3 = 'div-ub3';
  	var nodes = document.getElementById(adId3).childNodes[0].childNodes;
  	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      if(ub_ad3RefreshFlag != 1){
        setInterval(function() {
          ub_ad3RefreshFlag = 1;
          refreshBid(ub_slot3);
        }, REFRESH_TIMEOUT);
      }
  	 }
  }
}
if (document.getElementById('4')) {

  function initAdserver() {
      if (ubpbjs.initAdserverSet) return;
      ubpbjs.initAdserverSet = true;
      googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh([ub_slot4]);
          });
      });
  }
  // in case ubpbjs doesn't load
  setTimeout(function() {
      initAdserver();
  }, FAILSAFE_TIMEOUT);

  var ub_slot4;
  googletag.cmd.push(function() {
      ub_slot4 = googletag.defineSlot('/21956916242/gujaratilexicon.com_4', div_4_sizes, 'div-ub4').addService(googletag.pubads());
      googletag.pubads().collapseEmptyDivs(true);
      googletag.pubads().setCentering(true);
      googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot4) {
          ub_checkAd4Rendered();
        }
      });
  });

  function refreshBid(ub_slot) {
    ubpbjs.que.push(function() {
  	  ubpbjs.requestBids({
  		  timeout: PREBID_TIMEOUT,
  		  adUnitCodes: ['/21956916242/gujaratilexicon.com_4'],
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

  ub_ad4RefreshFlag = 0;
  function ub_checkAd4Rendered(){
  	adId4 = 'div-ub4';
  	var nodes = document.getElementById(adId4).childNodes[0].childNodes;
  	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      if(ub_ad4RefreshFlag != 1){
        setInterval(function() {
          ub_ad4RefreshFlag = 1;
          refreshBid(ub_slot4);
        }, REFRESH_TIMEOUT);
      }
  	 }
  }

}
if (document.getElementById('5')) {

  function initAdserver() {
      if (ubpbjs.initAdserverSet) return;
      ubpbjs.initAdserverSet = true;
      googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh([ub_slot5]);
          });
      });
  }
  // in case ubpbjs doesn't load
  setTimeout(function() {
      initAdserver();
  }, FAILSAFE_TIMEOUT);

  var ub_slot5;
  googletag.cmd.push(function() {
      ub_slot5 = googletag.defineSlot('/21956916242/gujaratilexicon.com_5', div_5_sizes, 'div-ub5').addService(googletag.pubads());
      googletag.pubads().collapseEmptyDivs(true);
      googletag.pubads().setCentering(true);
      googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot5) {
          ub_checkAd5Rendered();
        }
      });
  });

  function refreshBid(ub_slot) {
    ubpbjs.que.push(function() {
  	  ubpbjs.requestBids({
  		  timeout: PREBID_TIMEOUT,
  		  adUnitCodes: ['/21956916242/gujaratilexicon.com_5'],
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

  ub_ad5RefreshFlag = 0;
  function ub_checkAd5Rendered(){
  	adId5 = 'div-ub5';
  	var nodes = document.getElementById(adId5).childNodes[0].childNodes;
  	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      if(ub_ad5RefreshFlag != 1){
        setInterval(function() {
          ub_ad5RefreshFlag = 1;
          refreshBid(ub_slot5);
        }, REFRESH_TIMEOUT);
      }
  	 }
  }
}
if (document.getElementById('6')) {

  function initAdserver() {
      if (ubpbjs.initAdserverSet) return;
      ubpbjs.initAdserverSet = true;
      googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh([ub_slot6]);
          });
      });
  }
  // in case ubpbjs doesn't load
  setTimeout(function() {
      initAdserver();
  }, FAILSAFE_TIMEOUT);

  var ub_slot6;
  googletag.cmd.push(function() {
      ub_slot6 = googletag.defineSlot('/21956916242/gujaratilexicon.com_6', div_6_sizes, 'div-ub6').addService(googletag.pubads());
      googletag.pubads().collapseEmptyDivs(true);
      googletag.pubads().setCentering(true);
      googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot6) {
          ub_checkAd6Rendered();
        }
      });
  });

  function refreshBid(ub_slot) {
    ubpbjs.que.push(function() {
  	  ubpbjs.requestBids({
  		  timeout: PREBID_TIMEOUT,
  		  adUnitCodes: ['/21956916242/gujaratilexicon.com_6'],
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

  ub_ad6RefreshFlag = 0;
  function ub_checkAd6Rendered(){
  	adId6 = 'div-ub6';
  	var nodes = document.getElementById(adId6).childNodes[0].childNodes;
  	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      if(ub_ad6RefreshFlag != 1){
        setInterval(function() {
          ub_ad6RefreshFlag = 1;
          refreshBid(ub_slot6);
        }, REFRESH_TIMEOUT);
      }
  	 }
  }
}
