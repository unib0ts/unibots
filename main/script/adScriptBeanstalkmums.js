var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;
// var boturl = window.location.href;
const customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $20, 1-cent increments
    }]
};

var div_1_sizes = [[300, 100], [250, 250], [300, 250], [300, 50], [200, 200]];
var div_2_sizes = [[200, 200], [250, 250], [300, 100], [300, 250], [300, 50]];
var div_3_sizes = [[320, 50], [300, 50], [468, 60]];
var div_4_sizes = [[468, 60], [728, 90], [970, 90]];
var div_5_sizes = [[320, 100], [320, 50], [728, 90], [468, 60]];
var div_6_sizes = [[300, 50], [320, 50]];
var adUnits = [];

if (typeof mobileCheck === "function") {
  if (!mobileCheck()) {
    if (document.querySelector('.mybotdiv4')) {
      adUnits1 =
        {
            code: '/21956916242/beanstalkmums.com.au_nb_970x90',
            mediaTypes: {
                banner: {
                    sizes: div_4_sizes
                }
            },
            bids: [
             { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
             { bidder: 'sovrn', params: {tagid: '736660'} },
             { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952069'} },
             // { bidder: 'oftmedia', params: { placementId: '18671523' } },
             // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
             // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
              // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
             // { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
             { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
              // { bidder: 'nobid', params: { siteId : '21975046114'} },
              { bidder: 'criteo', params: {networkId: '4902'} },
              // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
              // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
            ]
        };
        adUnits.push(adUnits1);
    }
    adUnits1 =
      {
          code: '/21956916242/beanstalkmums.com.au_nb_728x90_desktopcentersticky',
          mediaTypes: {
              banner: {
                  sizes: div_5_sizes
              }
          },
          bids: [
           { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
           // { bidder: 'oftmedia', params: { placementId: '18671523' } },
            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952066'} },
           // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
           // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            { bidder: 'sovrn', params: {tagid: '736645'} },
            // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
           // { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
           { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            // { bidder: 'nobid', params: { siteId : '21975046114'} },
            { bidder: 'criteo', params: {networkId: '4902'} },
            // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
    adUnits.push(adUnits1);
  }
  else {
    adUnits1 =
        {
            code: '/21956916242/beanstalkmums.com.au_nb_320x50_mobilecentersticky',
            mediaTypes: {
                banner: {
                    sizes: div_6_sizes
                }
            },
            bids: [
            	{ bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
            	// { bidder: 'oftmedia', params: { placementId: '18671523' } },
              { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952067'} },
            	// { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
            	// { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
              { bidder: 'sovrn', params: {tagid: '736646'} },
              // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
            	// { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
            	{ bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
              // { bidder: 'nobid', params: { siteId : '22027067866'} },
              { bidder: 'criteo', params: {networkId: '4902'} },
              { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
              // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
            ]
        };
    adUnits.push(adUnits1);
  }
  if (document.querySelector('.mybotdiv1')) {
    adUnits1 =
      {
        code: '/21956916242/beanstalkmums.com.au_nb_330x250_1',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '736637'} },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952064'} },
         // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
          // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
         { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          // { bidder: 'nobid', params: { siteId : '22027067866'} },
          { bidder: 'criteo', params: {networkId: '4902'} },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.querySelector('.mybotdiv2')) {
    adUnits1 =
      {
        code: '/21956916242/beanstalkmums.com.au_nb_330x250_2',
        mediaTypes: {
            banner: {
                sizes: div_2_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
         // { bidder: 'oftmedia', params: { placementId: '18671523' } },
            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952065'} },
         // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '736644'} },
          // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
         { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          // { bidder: 'nobid', params: { siteId : '22027067866'} },
          { bidder: 'criteo', params: {networkId: '4902'} },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.querySelector('.mybotdiv3')) {
    adUnits1 =
      {
        code: '/21956916242/beanstalkmums.com.au_nb_468x60',
        mediaTypes: {
            banner: {
                sizes: div_3_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
         // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952068'} },
         // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '736651'} },
          // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
         { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          // { bidder: 'nobid', params: { siteId : '22027067866'} },
          { bidder: 'criteo', params: {networkId: '4902'} },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
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
      publisherDomain: 'https://beanstalkmums.com.au/',
      bidderTimeout: PREBID_TIMEOUT+500,
      //pubcid: {expInterval: },
      //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
     });
    ubpbjs.requestBids({
        bidsBackHandler: initAdserver,
        timeout: PREBID_TIMEOUT
    });
});

var slots = [], adCode = [], slotNumbers = [], sizes = [], adId = [];
var renderedFlag = [false, false, false, false, false, false];

function ub_checkAdRendered(adId, ub_slot, adCode){
  ub_slotNum = ub_slot[ub_slot.length-1];
  if(!renderedFlag[ub_slotNum]){
    adId1 = adId;
    var nodes = document.getElementById(adId1).childNodes[0].childNodes;
    if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      setTimeout(function() {
        refreshBid(ub_slot, adCode);
      }, REFRESH_TIMEOUT);
      renderedFlag[ub_slotNum] = true;
    }
  }
}

function refreshBid(ub_slot, adCode) {
  // console.log(adCode);
  // ubpbjs.initAdserverSet = true;
  // console.log(ubpbjs.adUnits);
  ubpbjs.que.push(function() {
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
            googletag.pubads().refresh(slots);
        });
    });
}

function googleDefine(slotsNumbers, adCode, sizes, adId){
  for(var i=0; i<slotNumbers.length;i++){
    eval('ub_slot'+slotNumbers[i]+ '= '+'googletag.defineSlot(adCode[i], sizes[i], adId[i])');
    var a = eval('ub_slot'+slotNumbers[i]);
    a.addService(googletag.pubads());
    slots.push(eval('ub_slot'+slotNumbers[i]));
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
   if (document.querySelector('.mybotdiv4')) {
     slotNumbers.push(4);
     adCode.push('/21956916242/beanstalkmums.com.au_nb_970x90');
     sizes.push(div_4_sizes);
     adId.push('div-gpt-ad-1591771212941-0');
     googletag.cmd.push(function() {
         googletag.pubads().addEventListener('slotRenderEnded', function(event) {
           if (event.slot === ub_slot4) {
             ub_checkAdRendered('div-gpt-ad-1591771212941-0', ub_slot4, ['/21956916242/beanstalkmums.com.au_nb_970x90']);
           }
         });
     });
   }

   slotNumbers.push(5);
   adCode.push('/21956916242/beanstalkmums.com.au_nb_728x90_desktopcentersticky');
   sizes.push(div_5_sizes);
   adId.push('div-gpt-ad-1591770589095-0');
   googletag.cmd.push(function() {
       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
         if (event.slot === ub_slot5) {
           ub_checkAdRendered('div-gpt-ad-1591770589095-0', ub_slot5, ['/21956916242/beanstalkmums.com.au_nb_728x90_desktopcentersticky']);
         }
       });
   });
  }
  else {
   slotNumbers.push(6);
   adCode.push('/21956916242/beanstalkmums.com.au_nb_320x50_mobilecentersticky');
   sizes.push(div_6_sizes);
   adId.push('div-gpt-ad-1591770694120-0');
   googletag.cmd.push(function() {
       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
         if (event.slot === ub_slot6) {
           ub_checkAdRendered('div-gpt-ad-1591770694120-0', ub_slot6, ['/21956916242/beanstalkmums.com.au_nb_320x50_mobilecentersticky']);
         }
       });
   });
  }
  if (document.querySelector('.mybotdiv1')){
   slotNumbers.push(1);
   adCode.push('/21956916242/beanstalkmums.com.au_nb_330x250_1');
   sizes.push(div_1_sizes);
   adId.push('div-gpt-ad-1591769932677-0');
   googletag.cmd.push(function() {
       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
         if (event.slot === ub_slot1) {
           ub_checkAdRendered('div-gpt-ad-1591769932677-0', ub_slot1, ['/21956916242/beanstalkmums.com.au_nb_330x250_1']);
         }
       });
   });
  }
  if (document.querySelector('.mybotdiv2')){
   slotNumbers.push(2);
   adCode.push('/21956916242/beanstalkmums.com.au_nb_330x250_2');
   sizes.push(div_2_sizes);
   adId.push('div-gpt-ad-1591770089425-0');
    googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot2) {
            ub_checkAdRendered('div-gpt-ad-1591770089425-0', ub_slot2, ['/21956916242/beanstalkmums.com.au_nb_330x250_2']);
          }
        });
    });
   }
  if (document.querySelector('.mybotdiv3')){
    slotNumbers.push(3);
    adCode.push('/21956916242/beanstalkmums.com.au_nb_468x60');
    sizes.push(div_3_sizes);
    adId.push('div-gpt-ad-1591770917680-0');
    googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot3) {
            ub_checkAdRendered('div-gpt-ad-1591770917680-0', ub_slot3, ['/21956916242/beanstalkmums.com.au_nb_468x60']);
          }
        });
    });
   }
}

if(typeof googletag.defineSlot === "function"){
  googleDefine(slotNumbers, adCode, sizes, adId);
  googlePush();
}
else{
  setTimeout(function(){
    googleDefine(slotNumbers, adCode, sizes, adId);
    googlePush();
  }, 500);
}
setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);
