var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;

// var GEO_CODE = '';
// (function (){
//   var request = new XMLHttpRequest();
// 		url = 'https://pro.ip-api.com/json/?fields=status,message,countryCode&key=LWKtz4EzQwMJRyQ';
// 		request.open('GET', url, true);
// 		request.onload = function() {
// 			if (request.status >= 200 && request.status < 400) {
// 				var data = request.responseText;
// 				data = JSON.parse(data);
// 				if(data.status == "success") {
//           GEO_CODE = data.countryCode;
// 				}
// 				else {
// 					console.error("Geo Request Failed");
// 				}
// 			}
// 			else {
// 				console.error('Request failed from server');
// 			}
//       mainHbRun();
// 		};
// 		request.onerror = function() {
// 			console.error('Request failed to Reach GEO Server');
//       mainHbRun();
// 		};
// 		request.send();
// })();

const customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $20, 1-cent increments
    }]
};

var div_1_sizes = [320, 50];

var adUnits = [
    {
        code: '/21957769615/mediaonetv.in_NB_320x50_directcampaign',
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
          { bidder: 'oftmedia', params: { placementId: '19680368' } },
          { bidder: 'appnexus', params: { placementId: '19054400' } }
        ]
    },
    {
        code: '/21957769615/mediaonetv.in_NB_320x50_directcampaign',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
        	{ bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
        	//{ bidder: '33across', params: { siteId : 'dWICUEBt8r6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        	//{ bidder: 'emx_digital', params: { tagid: '97450' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '725482'} },
          { bidder: 'oftmedia', params: { placementId: '19680368' } },
          { bidder: 'openx', params: {unit: '541046675', delDomain: 'yieldbird-d.openx.net'} },
        	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'emx_digital', params: { tagid: '107932' } },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2935802'} },
          { bidder: 'nobid', params: { siteId : '22049999704'} },
          //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'criteo', params: {networkId: '10542'} },
          { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
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

// function mainHbRun(){
ubpbjs.que.push(function() {
    ubpbjs.addAdUnits(adUnits);
    ubpbjs.aliasBidder('criteo','criteointl');
    ubpbjs.bidderSettings = {
      'appnexus': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.86; } },
      'pubmatic': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.74; } },
      'rubicon': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
      'openx': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
      'criteo': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
      'criteointl': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
      'nobid': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      'oftmedia': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.80; } },
      'sovrn': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.81; } },
      //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      'onetag': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
      // 'sonobi': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
      // 'smartadserver': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },

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
      debug: true,
      useBidCache: true,
      enableSendAllBids: false, // Default will be `true` as of 1.0
      bidderSequence: 'random', // Default is random
      publisherDomain: 'mediaonetv.in',
      bidderTimeout: PREBID_TIMEOUT+500,
      //pubcid: {expInterval: },
      //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
    // "currency": {
    //    // enables currency feature
    //    "adServerCurrency": "AED",
    //    "granularityMultiplier":3 ,
    //    // optionally override the default rate file
    //    "conversionRateFile": "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/currency/currency.json",
    //    // optionally provide a default rate in case the file can't be read
    //    "defaultRates": { "USD": { "AED": 3.67 }}
    //  }
    });
    ubpbjs.requestBids({
      bidsBackHandler: initAdserver,
      timeout: PREBID_TIMEOUT,
      // labels: [GEO_CODE],
    });
});

// // in case ubpbjs doesn't load
// setTimeout(function() {
//     initAdserver();
// }, FAILSAFE_TIMEOUT);
// }

var ub_slot1;
function addNewBotAdMobile(){
  changeConfigToHB();
  googletag.cmd.push(function() {
      ub_slot1 = googletag.defineSlot('/21957769615/mediaonetv.in_NB_320x50_directcampaign', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
      googletag.pubads().collapseEmptyDivs(true);
      googletag.pubads().setCentering(true);
      googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot.getAdUnitPath() === '/21957769615/mediaonetv.in_NB_320x50_directcampaign') {
          ub_checkAd1Rendered();
        }
      });
  });

  ubpbjs.que.push(function() {
    ubpbjs.requestBids({
      bidsBackHandler: initAdserver,
      timeout: PREBID_TIMEOUT
    });
  });

  // in case ubpbjs doesn't load
  setTimeout(function() {
      initAdserver();
  }, FAILSAFE_TIMEOUT);
}

function addNewsBotAd(){
  googletag.cmd.push(function() {
      googletag.defineSlot('/21957769615/mediaonetv.in_NB_320x50_directcampaign', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot.getAdUnitPath() === '/21957769615/mediaonetv.in_NB_320x50_directcampaign') {
          ub_checkAd1Rendered();
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
            googletag.pubads().refresh([ub_slot1]);
        });
    });
}

function refreshBid(ub_slot) {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21957769615/mediaonetv.in_NB_320x50_directcampaign'],
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


var mapping_full_hb = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  renderedFlag: []
}

var adUnits_full_hb = [];
var hb_full_common_bidders = [
  // { bidder: 'appnexus', params: { placementId: '19828101' } }, /* one placementId for all sizes  my appnexus bidder */
  // { bidder: 'oftmedia', params: { placementId: '18778196' } },
  // { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  // { bidder: 'emx_digital', params: { tagid: '97515' } }, /* sizeless */
  // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
  // { bidder: 'nobid', params: { siteId: '22070824382' } },
  { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
  // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  // { bidder: 'criteo', params: {networkId: '10542'} },
  // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  // { bidder: 'criteointl', params: {networkId: '10545'} },
];
var mappings_full_hb_config = {
  targetUnits: [
    'div-gpt-ad-1596007870683-0',
    'div-gpt-ad-1596007901073-0',
    'div-gpt-ad-1596007918239-0',
    'div-gpt-ad-1596007944533-0',
    'div-gpt-ad-1596007967329-0',
    'div-gpt-ad-1596007994615-0',
  ],
  adUnitNames: [
    '/21956916242/thetechywizard.com_hb_300x250_adunit1',
    '/21956916242/thetechywizard.com_hb_300x250_adunit2',
    '/21956916242/thetechywizard.com_hb_300x250_adunit3',
    '/21956916242/thetechywizard.com_hb_300x250_adunit4',
    '/21956916242/thetechywizard.com_hb_300x250_adunit5',
    '/21956916242/thetechywizard.com_hb_300x250_adunit6',
  ],
  sizes: [
    [[300, 250], [200, 200], [250, 250]],
    [[300, 250], [250, 250], [200, 200]],
    [[200, 200], [250, 250], [300, 250]],
    [[200, 200], [250, 250], [300, 250]],
    [[250, 250], [200, 200], [300, 250]],
    [[200, 200], [250, 250], [300, 250]],
  ],
  bids: [
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3099837'} },
    //   { bidder: 'sovrn', params: {tagid: '744054'} },
    // { bidder: 'smartadserver', params: { siteId: '362154', pageId: '1289655', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
    //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
     ]), //sakshiNew_box1_300x250
     hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3099838'} },
    //   { bidder: 'sovrn', params: {tagid: '744064'} },
    // { bidder: 'smartadserver', params: { siteId: '362154', pageId: '1289655', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
    //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
     ]), //sakshiNew_box2_300x250
     hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3099839'} },
    //   { bidder: 'sovrn', params: {tagid: '744057'} },
    // { bidder: 'smartadserver', params: { siteId: '362154', pageId: '1289655', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
    //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
     ]), //sakshiNew_box3_300x250
     hb_full_common_bidders.concat([
       // { bidder: 'smartadserver', params: { siteId: '362154', pageId: '1289655', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
       //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
       { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3099840'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
     ]), //fullstories_300x50_firstslot
     hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3099841'} },
    //   { bidder: 'sovrn', params: {tagid: '744083'} },
    // { bidder: 'smartadserver', params: { siteId: '362154', pageId: '1289655', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
    //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233' } }
     ]), //sakshiNew_HP
     hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3099842'} },
    //   { bidder: 'sovrn', params: {tagid: '744068'} },
    // { bidder: 'smartadserver', params: { siteId: '362154', pageId: '1289655', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
    //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
    //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi', domain: 'https://prg8.smartadserver.com' } }
     ]), //1062118/sakshiNew_skin_Left
  ]
}
var mappings_extra_units_config ={
  adUnitNames: [
    // '/1062118/1x1_Sakshi.com_Live_Outstream_Desktop',
    // '/1062118/1x1_Sakshi.com_Live_Outstream_Mobile',
    // '/1062118/Intersitial_640x480_Desktop',
    // '/1062118/Intersitial_320x480_mobile',
    // '/1062118/1x1_Sakshi.com_Live_Outstream_Desktop_Homepage',
    // '/1062118/1x1_Sakshi.com_Live_Outstream_Desktop_Articlepage',
    // '/1062118/1x1_Sakshi.com_Live_Outstream_Mobile_Articlepage',
    // '/1062118/1x1_Sakshi.com_Live_Outstream_Mobile_Homepage',
    // '/1009127/Sakshi_DBS_Carousel'
  ]
}
var mappings_extra_units = {
  slots: []
}

function checkHBUnits(){
  addNewsBotAd();
  changeConfigToHB();
  callMapUnits();

  setTimeout(function() {
      initAdserver_hb_full();
  }, FAILSAFE_TIMEOUT);
}
function callFullHBAds(adCode, ub_slot){
  ubpbjs.que.push(function(){
    ubpbjs.requestBids({
      timeout: PREBID_TIMEOUT,
      adUnits: adUnits_full_hb,
      adUnitCodes: adCode,
      bidsBackHandler: function() {
        ubpbjs.initAdserverSetHB = true;
        googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              // requestManager.prebid = true;
              // biddersBack();
              googletag.cmd.push(function() {
                  googletag.pubads().refresh(mapping_full_hb.slots);
                  googletag.pubads().refresh(mappings_extra_units.slots);
              });
              // googletag.pubads().refresh(ub_slot);
          });
        });
      }
    });
  });
}
function locate_googleSlot(targetId){
  tempSlots = googletag.pubads().getSlots();
  var ub_hb_slot;
  len = tempSlots.length;
  for(var i=0; i<len; i++){
    id = tempSlots[i].getAdUnitPath();
    if(targetId == id){
      ub_hb_slot = tempSlots[i];
      break;
    }
  }
  return ub_hb_slot;
}
function initAdserver_hb_full() {
    if (ubpbjs.initAdserverSetHB) return;
    ubpbjs.initAdserverSetHB = true;
    googletag.cmd.push(function() {
        ubpbjs.que.push(function() {
            ubpbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh([mapping_full_hb.slots]);
        });
    });
}
function changeConfigToHB(){
  ubpbjs.que.push(function() {
    ubpbjs.setConfig({
      "currency": {
         // enables currency feature
         "adServerCurrency": "AED",
         "granularityMultiplier":3 ,
         // optionally override the default rate file
         "conversionRateFile": "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/currency/currency.json",
         // optionally provide a default rate in case the file can't be read
         "defaultRates": { "USD": { "AED": 3.67 }}
       }
     });
  });
}
function callMapUnits(){
  googletag.cmd.push(function() {
    x = googletag.pubads().getSlots();
    x_len = x.length;
    for(i=0;i<x.length;i++){
      if(mappings_full_hb_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())){
        index = mappings_full_hb_config.adUnitNames.indexOf(x[i].getSlotId().getAdUnitPath());
        size_array = [];
        size_temp_array = googletag.pubads().getSlots()[i].getSizes();
        for(j=0;j<size_temp_array.length;j++){
          length = size_temp_array[j]['l'];
          height = size_temp_array[j]['j'];
          temp_array = [length, height];
          size_array.push(temp_array);
        }

        adUnitTemp = {
          code: x[i].getSlotId().getAdUnitPath(),
          mediaTypes: {
              banner: {
                  sizes: size_array
              }
          },
          bids: mappings_full_hb_config.bids[index]
        };

        adUnits_full_hb.push(adUnitTemp);
        mapping_full_hb.slots.push(x[i]);
        mapping_full_hb.slotNumbers.push(i+1);
        mapping_full_hb.adCode.push(x[i].getSlotId().getAdUnitPath());
        mapping_full_hb.sizes.push(size_array);
      }
      else if(mappings_extra_units_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())){
        mappings_extra_units.slots.push(x[i]);
      }
    }

    // callAPStagBids();
    callFullHBAds(mapping_full_hb.adCode, mapping_full_hb.slots);
  });
}
checkHBUnits();
