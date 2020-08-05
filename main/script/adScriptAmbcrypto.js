var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;
// var ubScriptUrl = window.location.href;

const customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $5, 1-cent increments
    }]
};

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];
ubpbjs.que.push(function() {

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
    debug: false,
    useBidCache: true,
    enableSendAllBids: false, // Default will be `true` as of 1.0
    bidderSequence: 'random', // Default is random
    publisherDomain: 'https://es.ambcrypto.com/',
    bidderTimeout: PREBID_TIMEOUT+500,
    //pubcid: {expInterval: },
    //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
   });
});

var mapping_full_hb = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  renderedFlag: []
}

var adUnits_full_hb = [];
var hb_full_common_bidders = [
  { bidder: 'appnexus', params: { placementId: '19871860' } }, /* one placementId for all sizes  my appnexus bidder */
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
    'div-gpt-ad-1596535960343-0',
    'div-gpt-ad-1596535792198-0',
    'div-gpt-ad-1596536006893-0',
    'div-gpt-ad-1596535906350-0',
    'div-gpt-ad-1596536083973-0',
    'div-gpt-ad-1596536152329-0',
    'div-gpt-ad-1596536409781-0',
    'div-gpt-ad-1596536510055-0',
    'div-gpt-ad-1596541334431-0',
    'div-gpt-ad-1596538549723-0',
    'div-gpt-ad-1596539231488-0',
    'div-gpt-ad-1596538689315-0',
      'div-gpt-ad-1596539260565-0',
      'div-gpt-ad-1596538130119-0',
      'div-gpt-ad-1596540125539-0',
      'div-gpt-ad-1596540614556-0',
      'div-gpt-ad-1596540555963-0',
      'div-gpt-ad-1596540273904-0',
      'div-gpt-ad-1596540335894-0',
      'div-gpt-ad-1596540831569-0',
      'div-gpt-ad-1596541047353-0',
      'div-gpt-ad-1596545055111-0',
      'div-gpt-ad-1596541638440-0',
      'div-gpt-ad-1596543813106-0',
      'div-gpt-ad-1596541690154-0',
      'div-gpt-ad-1596543872826-0'
  ],
  adUnitNames: [
    '/21692080761/amb_es_desk_lb_1',
    '/21692080761/amb_es_mob_mpu_1',
    '/21692080761/amb_es_desk_lb_2',
    '/21692080761/amb_es_mob_mpu_2',
    '/21692080761/amb_es_desk_lb_3',
    '/21692080761/amb_es_mob_mpu_3',
    '/21692080761/amb_es_mob_mpu_4',
    '/21692080761/amb_es_mob_mpu_5',
    '/21692080761/amb_es_desk_mpu_6',
    '/21692080761/amb_es_header_desk_v2',
    '/21692080761/amb_es_footer_desk_v2',
    '/21692080761/amb_es_header_mob_v2',
    '/21692080761/amb_es_footer_mob_v2',
      '/21692080761/amb_eng_desk_lb_1',
      '/21692080761/amb_eng_mob_mpu_1',
      '/21692080761/amb_eng_desk_lb_3',
      '21692080761/amb_eng_mob_mpu_3',
      '/21692080761/amb_eng_desk_lb_2',
      '/21692080761/amb_eng_mob_mpu_2',
      '/21692080761/amb_eng_mob_mpu_4',
      '/21692080761/amb_eng_mob_mpu_5',
      '/21692080761/amb_eng_mob_mpu_6',
      '/21692080761/amb_eng_header_desk_v2',
      '/21692080761/amb_eng_footer_desk_v2',
      '/21692080761/amb_eng_header_mob_v2',
      '/21692080761/amb_eng_footer_mob_v2'
  ],
  sizes: [
     [728, 90],
     [[300, 250], [320, 50], [320, 100], [320, 480], [336, 280]],
     [728, 90],
     [[300, 250], [320, 50], [320, 100], [320, 480], [336, 280]],
     [728, 90],
     [[300, 250], [320, 50], [320, 100], [320, 480], [336, 280]],
     [[300, 250], [320, 50], [320, 100], [320, 480], [336, 280]],
     [[300, 250], [320, 50], [320, 100], [320, 480], [336, 280]],
     [[300, 250], [320, 50], [320, 100], [320, 480], [336, 280]],
     [[728, 90], [970, 90], [970, 250], [1100, 90]],
     [[728, 90], [970, 90], [970, 250], [1100, 90]],
     [[320, 50], [320, 100]],
     [[320, 50], [320, 100]],
       [728, 90],
       [[300, 250], [320, 50], [320, 100], [320, 480], [336, 280]],
       [728, 90],
       [[300, 250], [320, 50], [320, 100], [320, 480], [336, 280]],
       [728, 90],
       [[300, 250], [320, 50], [320, 100], [320, 480], [336, 280]],
       [[300, 250], [320, 50], [320, 100], [320, 480], [336, 280]],
       [[300, 250], [320, 50], [320, 100], [320, 480], [336, 280]],
       [[300, 250], [320, 50], [320, 100], [320, 480], [336, 280]],
       [[728, 90], [970, 90], [970, 250], [1100, 90]],
       [[728, 90], [970, 90], [970, 250], [1100, 90]],
       [[320, 50], [320, 100]],
       [[320, 50], [320, 100]]
  ],
  bids: [
    hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983534'} },
    //   { bidder: 'sovrn', params: {tagid: '744054'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
     ]), //sakshiNew_box1_300x250
     hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983535'} },
    //   { bidder: 'sovrn', params: {tagid: '744064'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
     ]), //sakshiNew_box2_300x250
     hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983536'} },
    //   { bidder: 'sovrn', params: {tagid: '744057'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
     ]), //sakshiNew_box3_300x250
     hb_full_common_bidders.concat([
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
     ]), //fullstories_300x50_firstslot
     hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983530'} },
    //   { bidder: 'sovrn', params: {tagid: '744083'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233' } }
     ]), //sakshiNew_HP
     hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983532'} },
    //   { bidder: 'sovrn', params: {tagid: '744068'} },
    //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi', domain: 'https://prg8.smartadserver.com' } }
     ]), //1062118/sakshiNew_skin_Left
     hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983533'} },
    //   { bidder: 'sovrn', params: {tagid: '744079'} },
    //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
     ]), //1062118/sakshiNew_skin_right
     hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
    //   { bidder: 'sovrn', params: {tagid: '744058'} },
     ]), //1062118/SakshiNew_HP_Box_300x600,
     hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
     ]), //1062118/Desktop_HP_300x100
     hb_full_common_bidders.concat([
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983537'} },
    //   { bidder: 'sovrn', params: {tagid: '744067'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233', domain: 'https://prg8.smartadserver.com' } }
     ]), ///1062118/sakshiNew_Artclepage_LB
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
    callFullHBAds(mapping_full_hb.adCode, mapping_full_hb.slots);
  });
}
checkHBUnits();
