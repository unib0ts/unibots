// !function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
//
// var requestManager = {
//     adserverRequestSent: false,
//     aps: false,
//     prebid: false
// };
// //initialize the apstag.js library on the page to allow bidding
// apstag.init({
//      pubID: '5d8da970-719a-4a86-9bd0-adf1589f8c5e', //enter your pub ID here as shown above, it must within quotes
//      adServer: 'googletag'
// });
// apSlots = []

var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;
// var boturl = window.location.href;
const customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $5, 1-cent increments
    }]
};

// var div_1_sizes = [320, 50];
// var adUnits = [
//     {
//       code: '/21959913182/sakshi.com_NB_320x50',
//       mediaTypes: {
//         native: {
//           image: {
//             // sizes: [300, 100],
//             aspect_ratios: [{
//               min_width: 100,
//               min_height: 50,
//               ratio_width: 2,
//               ratio_height: 1,
//             }],
//             sendId: true
//           },
//           title: {
//             len: 50,
//             sendId: true
//           },
//           sponsoredBy: {
//             required: true,
//             sendId: true
//           },
//           clickUrl: {
//             required: true,
//             sendId: true
//           }
//         }
//       },
//       bids: [
//         { bidder: 'appnexus', params: { placementId: '19056673' } },
//         { bidder: 'oftmedia', params: { placementId: '18778196' } }
//       ]
//     },
//     {
//       code: '/21959913182/sakshi.com_NB_320x50',
//       mediaTypes: {
//         banner: {
//           sizes: div_1_sizes
//         }
//       },
//       bids: [
//         { bidder: 'oftmedia', params: { placementId: '18778196' } },
//         { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//         { bidder: '33across', params: { siteId: 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' } },
//         { bidder: 'emx_digital', params: { tagid: '97515' } },
//         { bidder: 'appnexus', params: { placementId: '19056673' } },
//         { bidder: 'sovrn', params: { tagid: '708881' } },
//         { bidder: 'openx', params: { unit: '541046310', delDomain: 'yieldbird-d.openx.net' } },
//         { bidder: 'nobid', params: { siteId: '21987177881' } },
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         //{ bidder: 'adsolut', params: { zoneId: '107071', host: 'cpm.adsolut.in' } },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2932597'} },
//         { bidder: 'rubicon', params: { accountId: '11734', siteId: '323846', zoneId: '1680740' } },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
//       ]
//     }
// ];

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
    'criteo': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
    'criteointl': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
    'nobid': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
    'oftmedia': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.80; } },
    'sovrn': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.81; } },
    'onetag': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
    //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },

    '33across': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
    'emx_digital': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
    'rhythmone': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
    'eplanning': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } }
  };
  ubpbjs.setConfig({
    priceGranularity: customConfigObjectA,
    userSync: {
      iframeEnabled: true,
      syncsPerBidder: 999, // and no more than 3 syncs at a time
      syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
      filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
      // enableOverride: true // publisher will call `ubpbjs.triggerUserSyncs()'
    },
    debug: true,
    useBidCache: true,
    enableSendAllBids: false, // Default will be `true` as of 1.0
    bidderSequence: 'random', // Default is random
    publisherDomain: 'https://jrlinks.in/',
    bidderTimeout: PREBID_TIMEOUT+500,
    //pubcid: {expInterval: },
    //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
   });
});

// var ub_slot1;
// function addNewBotAdMobile(){
//   changeConfigToHB();
//   googletag.cmd.push(function() {
//       ub_slot1 = googletag.defineSlot('/21959913182/sakshi.com_NB_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
//       googletag.pubads().collapseEmptyDivs(true);
//       googletag.pubads().setCentering(true);
//       googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
//       googletag.pubads().enableSingleRequest();
//       googletag.enableServices();
//       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//         if (event.slot.getAdUnitPath() === '/21959913182/sakshi.com_NB_320x50') {
//           ub_checkAd1Rendered();
//         }
//       });
//   });
//
//   ubpbjs.que.push(function() {
//     ubpbjs.requestBids({
//       bidsBackHandler: initAdserver,
//       timeout: PREBID_TIMEOUT
//     });
//   });
//
//   // in case ubpbjs doesn't load
//   setTimeout(function() {
//       initAdserver();
//   }, FAILSAFE_TIMEOUT);
// }

// function addNewsBotAd(){
//   googletag.cmd.push(function() {
//       googletag.defineSlot('/21959913182/sakshi.com_NB_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
//       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//         if (event.slot.getAdUnitPath() === '/21959913182/sakshi.com_NB_320x50') {
//           ub_checkAd1Rendered();
//         }
//       });
//   });
// }

// function initAdserver() {
//     if (ubpbjs.initAdserverSet) return;
//     ubpbjs.initAdserverSet = true;
//     googletag.cmd.push(function() {
//         ubpbjs.que.push(function() {
//             ubpbjs.setTargetingForGPTAsync();
//             googletag.pubads().refresh([ub_slot1]);
//         });
//     });
// }

// function refreshBid(ub_slot) {
//   ubpbjs.que.push(function() {
// 	  ubpbjs.requestBids({
// 		  timeout: PREBID_TIMEOUT,
// 		  adUnitCodes: ['/21959913182/sakshi.com_NB_320x50'],
// 		  bidsBackHandler: function() {
//         googletag.cmd.push(function() {
//           ubpbjs.que.push(function() {
//               ubpbjs.setTargetingForGPTAsync();
//               googletag.pubads().refresh([ub_slot]);
//           });
//         });
// 		  }
// 	  });
//   });
// }

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

// setTimeout(function(){
//   checkRemnantUnits();
// }, 10000);

var mapping_full_hb = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  // adId: [],
  renderedFlag: []
}

var adUnits_full_hb = [];
var hb_full_common_bidders = [
  { bidder: 'appnexus', params: { placementId: '19808015' } }, /* one placementId for all sizes  my appnexus bidder */
  // { bidder: 'oftmedia', params: { placementId: '18778196' } },
  // { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  // { bidder: 'emx_digital', params: { tagid: '97515' } }, /* sizeless */
  // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
  // { bidder: 'nobid', params: { siteId: '21987177881' } },
  // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
  // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  // { bidder: 'criteo', params: {networkId: '10542'} },
  // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  // { bidder: 'criteointl', params: {networkId: '10545'} },
];
var mappings_full_hb_config = {
  targetUnits: [
    'div-gpt-ad-1595833459444-0',
    'div-gpt-ad-1595833534169-0',
    'div-gpt-ad-1595833597102-0',
    'div-gpt-ad-1595833647091-0',
    'div-gpt-ad-1595833735874-0',
    'div-gpt-ad-1595833808931-0',
    'div-gpt-ad-1595833851109-0',
    'div-gpt-ad-1595833900467-0'
  ],
  adUnitNames: [
    '/21956916242/jrlinks.in_nb_300x250_unibot1',
    '/21956916242/jrlinks.in_nb_300x250_unibot2',
    '/21956916242/jrlinks.in_nb_300x250_unibot4',
    '/21956916242/jrlinks.in_nb_300x250_unibot5',
    '/21956916242/jrlinks.in_nb_300x600_unibot3',
    '/21956916242/jrlinks.in_nb_970x250_unibot7',
    '/21956916242/jrlinks.in_nb_728x90_desktopcentersticky',
    '/21956916242/jrlinks.in_nb_320x100_mobilecentersticky'
  ],
  sizes: [
     [[200, 200], [300, 250], [250, 250]],
     [[200, 200], [250, 250], [300, 250]],
    [[300, 250], [250, 250], [200, 200]],
    [[200, 200], [250, 250], [300, 250]],
    [[300, 600], [300, 250]],
    [[728, 90], [970, 250]],
    [[468, 60], [728, 90]],
    [[300, 100], [320, 50], [320, 100]]
  ],
  bids: [
    // hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983534'} },
    //   { bidder: 'sovrn', params: {tagid: '744054'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
    // ]), //sakshiNew_box1_300x250
    // hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983535'} },
    //   { bidder: 'sovrn', params: {tagid: '744064'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
    // ]), //sakshiNew_box2_300x250
    // hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983536'} },
    //   { bidder: 'sovrn', params: {tagid: '744057'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
    // ]), //sakshiNew_box3_300x250
    // hb_full_common_bidders.concat([
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
    // ]), //fullstories_300x50_firstslot
    // hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983530'} },
    //   { bidder: 'sovrn', params: {tagid: '744083'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233' } }
    // ]), //sakshiNew_HP
    // hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983532'} },
    //   { bidder: 'sovrn', params: {tagid: '744068'} },
    //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi', domain: 'https://prg8.smartadserver.com' } }
    // ]), //1062118/sakshiNew_skin_Left
    // hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983533'} },
    //   { bidder: 'sovrn', params: {tagid: '744079'} },
    //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
    // ]), //1062118/sakshiNew_skin_right
    // hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
    //   { bidder: 'sovrn', params: {tagid: '744058'} },
    // ]), //1062118/SakshiNew_HP_Box_300x600,
    // hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
    // ]), //1062118/Desktop_HP_300x100
    // hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983537'} },
    //   { bidder: 'sovrn', params: {tagid: '744067'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233', domain: 'https://prg8.smartadserver.com' } }
    // ]), ///1062118/sakshiNew_Artclepage_LB
  ],
  isAP: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false

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
  // addNewsBotAd();
  // changeConfigToHB();
  changeConfigToUSD();
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
function changeConfigToUSD(){
  ubpbjs.que.push(function() {
    ubpbjs.setConfig({
      "currency": {
         "adServerCurrency": "USD",
         "granularityMultiplier":1 ,
         "conversionRateFile": 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json',
         "defaultRates": { "USD": { "USD": 1 }}
       }
     });
  });
}
// function changeConfigToHB(){
//   ubpbjs.que.push(function() {
//     ubpbjs.setConfig({
//       "currency": {
//          "adServerCurrency": "INR",
//          "granularityMultiplier":75 ,
//          "conversionRateFile": 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json',
//          "defaultRates": { "USD": { "INR": 75 }}
//        }
//      });
//   });
// }
// function biddersBack() {
//     if (requestManager.aps && requestManager.prebid) {
//       googletag.cmd.push(function() {
//           googletag.pubads().refresh(mapping_full_hb.slots);
//           googletag.pubads().refresh(mappings_extra_units.slots);
//       });
//     }
//     return;
// }
// function sendAdserverRequest() {
//     if (requestManager.adserverRequestSent === true) {
//         return;
//     }
//     requestManager.adserverRequestSent = true;
//     googletag.cmd.push(function() {
//         googletag.pubads().refresh(mapping_full_hb.slots);
//         googletag.pubads().refresh(mappings_extra_units.slots);
//     });
// }
// function callAPStagBids(){
//   apstag.fetchBids({
//     slots: apSlots,
//      timeout: 2000
//   },function(bids) {
//           googletag.cmd.push(function() {
//               apstag.setDisplayBids();
//               requestManager.aps = true; // signals that APS request has completed
//               biddersBack(); // checks whether both APS and Prebid have returned
//           });
//       }
//   );
// }

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
        // adUnitTemp = {
        //   code: mappings_full_hb_config.adUnitNames[index],
        //   mediaTypes: {
        //       banner: {
        //           sizes: mappings_full_hb_config.sizes[index]
        //       }
        //   },
        //   bids: mappings_full_hb_config.bids[index]
        // };
        adUnits_full_hb.push(adUnitTemp);
        mapping_full_hb.slots.push(x[i]);
        mapping_full_hb.slotNumbers.push(i+1);
        // mapping_full_hb.slotNumbers.push(index+1);
        mapping_full_hb.adCode.push(x[i].getSlotId().getAdUnitPath());
        // mapping_full_hb.adCode.push(mappings_full_hb_config.adUnitNames[index]);
        // mapping_full_hb.sizes.push(mappings_full_hb_config.sizes[index]);
        mapping_full_hb.sizes.push(size_array);

        if(mappings_full_hb_config.isAP[index]){
          apSlotTemp = {
            // slotID: mappings_full_hb_config.targetUnits[index],
            // slotName: mappings_full_hb_config.adUnitNames[index],
            // sizes: mappings_full_hb_config.sizes[index]

            slotID: googletag.pubads().getSlots()[0].getSlotId().getDomId(),
            slotName: x[i].getSlotId().getAdUnitPath(),
            sizes: size_array
          }
          apSlots.push(apSlotTemp);
        }
      }
      else if(mappings_extra_units_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())){
        mappings_extra_units.slots.push(x[i]);
      }
    }

    // adUnitTemp1 = {
    //   code: '/21959913182/sakshi.com_NB_320x50',
    //   mediaTypes: {
    //     native: {
    //       image: {
    //         // sizes: [300, 100],
    //         aspect_ratios: [{
    //           min_width: 100,
    //           min_height: 50,
    //           ratio_width: 2,
    //           ratio_height: 1,
    //         }],
    //         sendId: true
    //       },
    //       title: {
    //         len: 50,
    //         sendId: true
    //       },
    //       sponsoredBy: {
    //         required: true,
    //         sendId: true
    //       },
    //       clickUrl: {
    //         required: true,
    //         sendId: true
    //       }
    //     }
    //   },
    //   bids: [
    //     { bidder: 'appnexus', params: { placementId: '19056673' } },
    //     { bidder: 'oftmedia', params: { placementId: '18778196' } }
    //   ]
    // }
    // adUnits_full_hb.push(adUnitTemp1);

    // callAPStagBids();
    callFullHBAds(mapping_full_hb.adCode, mapping_full_hb.slots);
  });
}

function mobileCheckHB() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

hb_ran = false;
checkHBUnits();
// if(!mobileCheckHB() || (mobileCheckHB() && window.location.href == "https://m.sakshi.com/")){
//   checkHBUnits();
// }
// else{
//   addNewBotAdMobile();
// }
