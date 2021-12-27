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

const customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $20, 1-cent increments
    }]
};

var div_1_sizes = [[320, 100], [320, 50], [300, 100]];
var div_2_sizes = [300, 250];
var div_3_sizes = [[200, 200], [300, 250], [250, 250]];
var adUnits = [];
 adUnits1 =
    {
      code: '/21928950349/thewall.in_NB_320x50',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
        	{ bidder: 'appnexus', params: { placementId: '19057843' } }, /* one placementId for all sizes  my appnexus bidder */
        	{ bidder: 'oftmedia', params: { placementId: '20846125' } },
        	{ bidder: '33across', params: { siteId : 'ai6yU0WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        	{ bidder: 'emx_digital', params: { tagid: '107912' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '714244'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'openx', params: {unit: '543530206', delDomain: 'unibots-d.openx.net'}},
        	{ bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2926310'} },
          { bidder: 'nobid', params: { siteId : '22027067872'} },
          { bidder: 'smartadserver', params: { siteId: '362155', pageId: '1289656', formatId: '93231', domain: 'https://prg8.smartadserver.com' }},
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // { bidder: 'adkernel', params: {zoneId: '126376', host: 'cpm.fmlabsonline.com'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          { bidder: 'ucfunnel', params: { adid : 'ad-7728779B6AE2AD4DCB34AA27967BAD3E'} },
          //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } }
        ]
    };
    adUnits.push(adUnits1);

if (document.getElementById('thirdPartyAd')) {
   adUnits1 =
     {
         code: '/21928950349/thewall.in_NB_300x250',
           mediaTypes: {
               banner: {
                   sizes: div_2_sizes
               }
           },
           bids: [
             { bidder: 'appnexus', params: { placementId: '19057843' } }, /* one placementId for all sizes  my appnexus bidder */
           	{ bidder: 'oftmedia', params: { placementId: '20846125' } },
           	{ bidder: '33across', params: { siteId : 'ai6yU0WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
           	{ bidder: 'emx_digital', params: { tagid: '107912' } }, /* sizeless */
             { bidder: 'sovrn', params: {tagid: '735405'} },
             // { bidder: 'openx', params: {unit: '54353020', delDomain: 'unibots-d.openx.net'} },
           	{ bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
             { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2926308'} },
             // { bidder: 'criteo', params: {networkId: '10542'} },
             // { bidder: 'criteointl', params: {networkId: '10545'} },
             { bidder: 'nobid', params: { siteId : '22027067872'} },
             // { bidder: 'adkernel', params: {zoneId: '126376', host: 'cpm.fmlabsonline.com'} },
             { bidder: 'smartadserver', params: { siteId: '362155', pageId: '1289656', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
             //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
             { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
             { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
             { bidder: 'ucfunnel', params: { adid : 'ad-47B4776E94367A42FEA2939B6AB7EE72'} },
             // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
           	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } }
           ]
       };
     adUnits.push(adUnits1);
}
if (document.getElementById('ubad')) {
   adUnits1 =
     {
       code: '/21928950349/thewall.in_nb_300x250_hb',
         mediaTypes: {
             banner: {
                 sizes: div_3_sizes
             }
         },
         bids: [
           { bidder: 'appnexus', params: { placementId: '19057843' } }, /* one placementId for all sizes  my appnexus bidder */
           { bidder: 'oftmedia', params: { placementId: '20846125' } },
           { bidder: '33across', params: { siteId : 'ai6yU0WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
           { bidder: 'emx_digital', params: { tagid: '107912' } }, /* sizeless */
           { bidder: 'sovrn', params: {tagid: '735404'} },
           { bidder: 'openx', params: {unit: '543530207', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
           { bidder: 'nobid', params: { siteId : '22027067872'} },
           { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
           { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2926309'} },
           // { bidder: 'criteo', params: {networkId: '10542'} },
           // { bidder: 'criteointl', params: {networkId: '10545'} },
           // { bidder: 'adkernel', params: {zoneId: '126376', host: 'cpm.fmlabsonline.com'} },
           { bidder: 'nobid', params: { siteId : '22027067872'} },
           { bidder: 'smartadserver', params: { siteId: '362155', pageId: '1289656', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
           //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
           { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
           { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
           { bidder: 'ucfunnel', params: { adid : 'ad-273677B82DB3B9DDC8832E2B44267E26'} },
           // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
           // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } }
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

function ub_checkAdRendered(adId, ub_slot, adCode, ub_slotString){
  ub_slotNum = ub_slotString[ub_slotString.length-1];
  if(!mappings.renderedFlag[ub_slotNum]){
    adId1 = adId;
    var nodes = document.getElementById(adId1).childNodes[0].childNodes;
    if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      setInterval(function() {
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
              googletag.pubads().refresh([ub_slot]);
              var adsCalled = false;
              for(var i=0;i<x.length;i++){
                var bc = x[i].bidderCode;
                if(bc=="openx"){
                  adsCalled = true;
                  callBotman();
                }
              }
              if(!adsCalled){
                callAdsUB();
              }
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
            // googletag.pubads().refresh(mappings.slots);
            var x = ubpbjs.getAllPrebidWinningBids();
            var adsCalled = false;
            for(var i=0;i<x.length;i++){
              var bc = x[i].bidderCode;
              if(bc=="openx"){
                adsCalled = true;
                callBotman();
              }
            }
            if(!adsCalled){
              callAdsUB();
            }
        });
    });
}

var botmanCalled = false;
var userStatusBM = '';
function callBotman(){
  if(userStatusBM == ''){
    var request = new XMLHttpRequest();
    var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=thewall';
    request.open('GET', url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = request.responseText;
        if(data != ""){
          data = JSON.parse(data);
          userStatusBM = data;
          if(userStatusBM == "0" || userStatusBM == "3"){
            callAdsUB();
          }
          else{
            console.log('Not Valid Traffic for openx');
          }
        }
        else{
          console.error('Data not returned from server');
          callAdsUB();
        }
      }
      else {
        console.error('Request failed from server');
        callAdsUB();
      }
    };
    request.onerror = function() {
      console.error('Request failed to Reach Server');
      callAdsUB();
    };
    request.send();
  }
  else{
    if(userStatusBM == "0" || userStatusBM == "3"){
      callAdsUB();
    }
    else{
      console.log('Not Valid Traffic for openx');
    }
  }

}

function callAdsUB(){
	 googletag.pubads().refresh(mappings.slots);
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

  mappings.slotNumbers.push(3);
  mappings.adCode.push('/21928950349/thewall.in_NB_320x50');
  mappings.sizes.push(div_1_sizes);
  mappings.adId.push('div-ub-1');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot3) {
        ub_checkAdRendered('div-ub-1', ub_slot3, ['/21928950349/thewall.in_NB_320x50'], "ub_slot3");
      }
    });
  });

if (document.getElementById('thirdPartyAd')) {
  mappings.slotNumbers.push(1);
  mappings.adCode.push('/21928950349/thewall.in_NB_300x250');
  mappings.sizes.push(div_2_sizes);
  mappings.adId.push('div-ub-2');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAdRendered('div-ub-2', ub_slot1, ['/21928950349/thewall.in_NB_300x250'], "ub_slot1");
      }
    });
  });
}

if (document.getElementById('ubad')) {
  mappings.slotNumbers.push(2);
  mappings.adCode.push('/21928950349/thewall.in_nb_300x250_hb');
  mappings.sizes.push(div_3_sizes);
  mappings.adId.push('div-gpt-ad-1589043268569-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot2) {
        ub_checkAdRendered('div-gpt-ad-1589043268569-0', ub_slot2, ['/21928950349/thewall.in_nb_300x250_hb'], "ub_slot2");
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
    googletag.cmd.push(function() {
      googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
      googlePush();
    });
  }, 500);
}
setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);

// ub_ad1RefreshFlag = 0;
// function ub_checkAd1Rendered(){
// 	adId1 = 'div-ub-1';
// 	var nodes = document.getElementById(adId1).childNodes[0].childNodes;
// 	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
//     if(ub_ad1RefreshFlag != 1){
//       setInterval(function() {
//         ub_ad1RefreshFlag = 1;
//         refreshBid(ub_slot1);
//       }, REFRESH_TIMEOUT);
//     }
// 	 }
// }
function mainHbRun(){
  ubpbjs.que.push(function() {
      ubpbjs.setBidderConfig({
      bidders: ['emx_digital'],   // can list more bidders here if they share the same config
      config: {
        schain: {
          validation: "relaxed",
          config: {
            ver:"1.0",
            complete: 1,
            nodes: [
              {
                asi:"unibots.in",   //directseller
                sid:"1504",     //seller_id
                hp:1
              },
            ]
          }
        }
      }
      });
      ubpbjs.addAdUnits(adUnits);
      ubpbjs.aliasBidder('criteo','criteointl');
      ubpbjs.bidderSettings = {
        'appnexus': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.86; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'pubmatic': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.74; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'rubicon': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.75; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'openx': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.75; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'criteo': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.75; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'nobid': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'oftmedia': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.80; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'sovrn': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.81; temp = temp - 0.0323; return temp>0? temp: 0;} },
        //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },

        '33across': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'emx_digital': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'rhythmone': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'eplanning': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'adyoulike': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'smartadserver': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'onetag': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
        'ucfunnel': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} }
      };
      ubpbjs.setConfig({
        floors: {
          currency: 'USD',
          // skipRate: 5,
          // modelVersion: 'Sports Ad Unit Floors',
          schema: {
              fields: ['mediaType']
          },
          values: {
              'banner': 0.01,
          }
        },
        schain: {
         validation: "relaxed",
         config: {
           ver:"1.0",
           complete: 1,
           nodes: [
             {
               asi:"unibots.in",
               sid:"20",
               hp:1
             }
           ]
         }
       },
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
        publisherDomain: 'thewall.in',
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
