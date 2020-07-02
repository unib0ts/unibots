!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");

var requestManager = {
    adserverRequestSent: false,
    aps: false,
    prebid: false
};
//initialize the apstag.js library on the page to allow bidding
apstag.init({
     pubID: '5d8da970-719a-4a86-9bd0-adf1589f8c5e', //enter your pub ID here as shown above, it must within quotes
     adServer: 'googletag'
});
apSlots = []

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

var div_1_sizes = [320, 50];
var adUnits = [
    {
      code: '/21956916242/sakshi.com_NB_320x50',
      mediaTypes: {
        native: {
          image: {
            // sizes: [300, 100],
            aspect_ratios: [{
              min_width: 100,
              min_height: 50,
              ratio_width: 2,
              ratio_height: 1,
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
        { bidder: 'appnexus', params: { placementId: '19056673' } },
        { bidder: 'oftmedia', params: { placementId: '18778196' } }
      ]
    },
    {
      code: '/21956916242/sakshi.com_NB_320x50',
      mediaTypes: {
        banner: {
          sizes: div_1_sizes
        }
      },
      bids: [
        { bidder: 'oftmedia', params: { placementId: '18778196' } },
        { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        { bidder: '33across', params: { siteId: 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' } },
        { bidder: 'emx_digital', params: { tagid: '97515' } },
        { bidder: 'appnexus', params: { placementId: '19056673' } },
        { bidder: 'sovrn', params: { tagid: '708881' } },
        { bidder: 'openx', params: { unit: '541046310', delDomain: 'yieldbird-d.openx.net' } },
        { bidder: 'nobid', params: { siteId: '21987177881' } },
        { bidder: 'criteo', params: { networkId: '4902' } },
        //{ bidder: 'adsolut', params: { zoneId: '107071', host: 'cpm.adsolut.in' } },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2932597'} },
        { bidder: 'rubicon', params: { accountId: '11734', siteId: '323846', zoneId: '1680740' } }
      ]
    }
];

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
    publisherDomain: 'https://www.sakshi.com/',
    bidderTimeout: PREBID_TIMEOUT+500,
    //pubcid: {expInterval: },
    //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
   });
  ubpbjs.requestBids({
    bidsBackHandler: initAdserver,
    timeout: PREBID_TIMEOUT
  });
});

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
    ub_slot1 = googletag.defineSlot('/21956916242/sakshi.com_NB_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
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
		  adUnitCodes: ['/21956916242/sakshi.com_NB_320x50'],
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

setTimeout(function(){
  checkRemnantUnits();
}, 10000);

var mappings_remnant = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  adId: [],
  renderedFlag: [false, false, false, false, false, false]
};
var div_sizes_remnant_1 = [300, 250];
var div_sizes_remnant_2 = [[250, 250], [300, 100], [300, 250], [200, 200]];
var remnantAdUnits= [];
var mappings_config = {
  targetUnits: ['div-gpt-ad-1576678733140-0', 'div-gpt-ad-1560253279705-0'],
  slotNames: ['ub_remnant_slot1', 'ub_remnant_slot2'],
  adUnitNames: ['/21956916242/sakshi.com_nb_300x250_passback', '/21956916242/sakshi.com_nb_300x250_passback2'],
  adId: ['ub-remnant-ad-1', 'ub-remnant-ad-2'],
  sizes: [div_sizes_remnant_1, div_sizes_remnant_2],
  bids: [
    [
      { bidder: 'appnexus', params: { placementId: '19056673' } }, /* one placementId for all sizes  my appnexus bidder */
      { bidder: 'oftmedia', params: { placementId: '18778196' } },
      { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
      { bidder: 'emx_digital', params: { tagid: '97515' } }, /* sizeless */
      { bidder: 'sovrn', params: {tagid: '735296'} },
      { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
      // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
      { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
      { bidder: 'nobid', params: { siteId: '21987177881' } },
      // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
      { bidder: 'criteo', params: {networkId: '4902'} }
    ],
    [
      { bidder: 'appnexus', params: { placementId: '19056673' } }, /* one placementId for all sizes  my appnexus bidder */
      { bidder: 'oftmedia', params: { placementId: '18778196' } },
      { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
      { bidder: 'emx_digital', params: { tagid: '97515' } }, /* sizeless */
      { bidder: 'sovrn', params: {tagid: '738414'} },
      { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
      // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
      { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
      { bidder: 'nobid', params: { siteId: '21987177881' } },
      // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
      { bidder: 'criteo', params: {networkId: '4902'} }
    ]
  ]
}

function checkRemnantUnits(){
  for(var i=0; i<mappings_config.targetUnits.length; i++){
    containsAd = false;
    var unit = document.getElementById(mappings_config.targetUnits[i]);
    if(typeof unit === "object" && unit != null){
      if(typeof unit.firstElementChild === "object"){
        if(typeof unit.firstElementChild.firstElementChild === "object"){
          if(unit.firstElementChild.firstElementChild != null){
            unit_name = unit.firstElementChild.firstElementChild.tagName.toLowerCase();
            if(unit_name === 'iframe'){
              containsAd = true;
            }
          }
        }
      }
    }

    if(!containsAd && unit !== 'undefined' && unit != null){
      for(var j = 0; j<unit.childElementCount; j++){
        child = unit.children[i];
        child_name = child.tagName.toLowerCase();
        if(child_name == 'div'){
          child.innerHTML = '';
          var z= document.createElement('div');
          z.id = mappings_config.adId[i];
          z.className = mappings_config.adId[i];
          child.appendChild(z);
          break;
        }
      }
      adUnitTemp = {
        code: mappings_config.adUnitNames[i],
        mediaTypes: {
            banner: {
                sizes: mappings_config.sizes[i]
            }
        },
        bids: mappings_config.bids[i]
      };
      remnantAdUnits.push(adUnitTemp);
      mappings_remnant.slotNumbers.push(i+1);
      mappings_remnant.adCode.push(mappings_config.adUnitNames[i]);
      mappings_remnant.sizes.push(mappings_config.sizes[i]);
      mappings_remnant.adId.push(mappings_config.adId[i]);
    }
  }
  googleDefine_remnant(mappings_remnant.slotNumbers, mappings_remnant.adCode, mappings_remnant.sizes, mappings_remnant.adId);
  callRemnantAds(mappings_remnant.adCode, mappings_remnant.slots);

  setTimeout(function() {
      initAdserver_remnant();
  }, FAILSAFE_TIMEOUT);
}
function initAdserver_remnant() {
    if (ubpbjs.initAdserverSetRemnant) return;
    ubpbjs.initAdserverSetRemnant = true;
    googletag.cmd.push(function() {
        ubpbjs.que.push(function() {
            ubpbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh(mappings_remnant.slots);
        });
    });
}
function googleDefine_remnant(slotNumbers, adCode, sizes, adId){
  for(var i=0; i<slotNumbers.length;i++){
    eval('ub_remnant_slot'+slotNumbers[i]+ '= '+'googletag.defineSlot(adCode[i], sizes[i], adId[i])');
    var a = eval('ub_remnant_slot'+slotNumbers[i]);
    a.addService(googletag.pubads());
    mappings_remnant.slots.push(eval('ub_remnant_slot'+slotNumbers[i]));
  }
}
function callRemnantAds(adCode, ub_slot){
  ubpbjs.que.push(function(){
    ubpbjs.requestBids({
      timeout: PREBID_TIMEOUT,
      adUnits: remnantAdUnits,
      adUnitCodes: adCode,
      bidsBackHandler: function() {
        ubpbjs.initAdserverSetRemnant = true;
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

var mapping_full_hb = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  // adId: [],
  renderedFlag: []
}

var adUnits_full_hb = [];
hb_full_common_bidders = [
  { bidder: 'appnexus', params: { placementId: '19056673' } }, /* one placementId for all sizes  my appnexus bidder */
  { bidder: 'oftmedia', params: { placementId: '18778196' } },
  { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  { bidder: 'emx_digital', params: { tagid: '97515' } }, /* sizeless */
  { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
  { bidder: 'nobid', params: { siteId: '21987177881' } },
  // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
  // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  // { bidder: 'criteo', params: {networkId: '4902'} }
];
var mappings_full_hb_config = {
  targetUnits: [
    'div-gpt-ad-1560233013253-0', //sakshiNew_box1_300x250
    'div-gpt-ad-1560233087431-0', //sakshiNew_box2_300x250
    'div-gpt-ad-1560233164388-0', //sakshiNew_box3_300x250
    'div-gpt-ad-1511158697910-0', //fullstories_300x50_firstslot
    'div-gpt-ad-1560232191899-0', ///1062118/sakshiNew_HP
    'div-gpt-ad-1560232377479-0', //1062118/sakshiNew_skin_Left
    'div-gpt-ad-1560232639192-0', ///1062118/sakshiNew_skin_right
    'div-gpt-ad-1560232568452-0', //1062118/SakshiNew_HP_Box_300x600,
    'div-gpt-ad-1581144177758-0', ///1062118/Desktop_HP_300x100
    'div-gpt-ad-1560239369280-0', ///1062118/sakshiNew_Artclepage_LB
    'div-gpt-ad-1560239486596-0', ///1062118/sakshiNew_Artclepage_Skin_Left
    'div-gpt-ad-1560239628175-0', ///1062118/sakshiNew_Artclepage_skin_right
    'div-gpt-ad-1560239573343-0', ///1062118/sakshiNew_Artclepage_300x600
    'div-gpt-ad-1560239855905-0', ///1062118/sakshiNew_Artclepage_box1
    'div-gpt-ad-1560239903945-0', ///1062118/sakshiNew_Artclepage_Box2
    'div-gpt-ad-1577422203984-0', ///1062118/sakshiNew_Artclepage_INarticle
    'div-gpt-ad-1568699263235-0', ///1062118/Sakshi-Anchor_Ad
    'div-gpt-ad-1560250742070-0', ///1062118/Sakshi_Moblile_LB
    'div-gpt-ad-1586515781967-0', ///1062118/sakshiNEw_resp_Box2
    'div-gpt-ad-1560250931202-0', ///1062118/sakshiNEw_resp_Box3
    'div-gpt-ad-1560250977307-0', ///1062118/sakshiNEw_resp_Box4
    'div-gpt-ad-1560251033850-0', ///1062118/sakshiNEw_resp_Box5
    'div-gpt-ad-1576678733140-0', ///1062118/MobileMasthead_ROS_300x250
    'div-gpt-ad-1560253279705-0', ///1062118/sakshiNew_article_Box2
    'div-gpt-ad-1560253328585-0', ///1062118/sakshiNew_article_Box3
    'div-gpt-ad-1560253372486-0', ///1062118/sakshiNew_article_Box4
    'div-gpt-ad-1560253430624-0', ///1062118/sakshiNew_article_Box5
    'div-gpt-ad-1579844188157-0', ///1062118/320x50_Mobile_LB_New
    'div-gpt-ad-1578660796348-0', //sakshinew_resp_Box1_entertainment_300x250
    'div-gpt-ad-1540359629900-0', ///1062118/MobileMasthead_HP_300x250
  ],
  // slotNames: ['ub_full_hb_slot1', 'ub_full_hb_slot2', 'ub_full_hb_slot3', 'ub_full_hb_slot4'],
  adUnitNames: [
    '/1062118/sakshiNew_box1_300x250',
    '/1062118/sakshiNew_box2_300x250',
    '/1062118/sakshiNew_Box3_300x250',
    '/1062118/fullstories_300x50_firstslot',
    '/1062118/sakshiNew_HP',
    '/1062118/sakshiNew_skin_Left',
    '/1062118/sakshiNew_skin_right',
    '/1062118/SakshiNew_HP_Box_300x600',
    '/1062118/Desktop_HP_300x100',
    '/1062118/sakshiNew_Artclepage_LB',
    '/1062118/sakshiNew_Artclepage_Skin_Left',
    '/1062118/sakshiNew_Artclepage_skin_right',
    '/1062118/sakshiNew_Artclepage_300x600',
    '/1062118/sakshiNew_Artclepage_box1',
    '/1062118/sakshiNew_Artclepage_Box2',
    '/1062118/sakshiNew_Artclepage_INarticle',
    '/1062118/Sakshi-Anchor_Ad',
    '/1062118/Sakshi_Moblile_LB',
    '/1062118/sakshiNEw_resp_Box2',
    '/1062118/sakshiNEw_resp_Box3',
    '/1062118/sakshiNEw_resp_Box4',
    '/1062118/sakshiNEw_resp_Box5',
    '/1062118/MobileMasthead_ROS_300x250',
    '/1062118/sakshiNew_article_Box2',
    '/1062118/sakshiNew_article_Box3',
    '/1062118/sakshiNew_article_Box4',
    '/1062118/sakshiNew_article_Box5',
    '/1062118/320x50_Mobile_LB_New',
    'sakshinew_resp_Box1_entertainment_300x250',
    '/1062118/MobileMasthead_HP_300x250'
  ],
  // adId: ['div-ub-full-hb-1'],
  sizes: [
    [300,250], //sakshiNew_box1_300x250
    [300,250], //sakshiNew_box2_300x250
    [300,250], //sakshiNew_box3_300x250
    [300,50], //fullstories_300x50_firstslot
    [[970, 90], [728, 90]], ///1062118/sakshiNew_HP
    [[120, 600], [160, 600]], ///1062118/sakshiNew_skin_Left
    [[160, 600], [120, 600]], ///1062118/sakshiNew_skin_right
    [[300, 600], [300, 250], [160,600],[120,600]], ///1062118/SakshiNew_HP_Box_300x600,
    [300, 100], ///1062118/Desktop_HP_300x100
    [[970, 90], [728, 90]], ///1062118/sakshiNew_Artclepage_LB
    [[160, 600], [120, 600]], ///1062118/sakshiNew_Artclepage_Skin_Left
    [[160, 600], [120, 600]], ///1062118/sakshiNew_Artclepage_skin_right
    [[300, 600], [300, 250], [160,600]], ///1062118/sakshiNew_Artclepage_300x600
    [[300, 250]], ///1062118/sakshiNew_Artclepage_box1
    [[300, 250]], ///1062118/sakshiNew_Artclepage_Box2
    [[1, 1], [300, 250]], ///1062118/sakshiNew_Artclepage_INarticle
    [[320, 50], [300, 50]], ///1062118/Sakshi-Anchor_Ad
    [[300, 250], [336, 280]], ///1062118/Sakshi_Moblile_LB
    [[300, 250], [320, 100], [320, 50], [336, 280]], ///1062118/sakshiNEw_resp_Box2
    [[300, 250], [336, 280]], ///1062118/sakshiNEw_resp_Box3
    [[300, 250], [336, 280]], ///1062118/sakshiNEw_resp_Box4
    [[300, 250], [336, 280]], ///1062118/sakshiNEw_resp_Box5
    [[300, 250], [336, 280]], ///1062118/MobileMasthead_ROS_300x250
    [[300, 250], [336, 280]], ///1062118/sakshiNew_article_Box2
    [[300, 250], [336, 280]], ///1062118/sakshiNew_article_Box3
    [[300, 250], [336, 280]], ///1062118/sakshiNew_article_Box4
    [[320, 100], [336, 280], [300, 250]], ///1062118/sakshiNew_article_Box5
    [320, 50], ///1062118/320x50_Mobile_LB_New
    [300, 250], //sakshinew_resp_Box1_entertainment_300x250
    [300, 250], ///1062118/MobileMasthead_HP_300x250
  ],
  bids: [
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983534'} },
      { bidder: 'sovrn', params: {tagid: '744054'} },
    ]), //sakshiNew_box1_300x250
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983535'} },
      { bidder: 'sovrn', params: {tagid: '744064'} },
    ]), //sakshiNew_box2_300x250
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983536'} },
      { bidder: 'sovrn', params: {tagid: '744057'} },
    ]), //sakshiNew_box3_300x250
    hb_full_common_bidders.concat([

    ]), //fullstories_300x50_firstslot
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983530'} },
      { bidder: 'sovrn', params: {tagid: '744083'} },
    ]), //sakshiNew_HP
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983532'} },
      { bidder: 'sovrn', params: {tagid: '744068'} },
    ]), //1062118/sakshiNew_skin_Left
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983533'} },
      { bidder: 'sovrn', params: {tagid: '744079'} },
    ]), //1062118/sakshiNew_skin_right
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
      { bidder: 'sovrn', params: {tagid: '744058'} },
    ]), //1062118/SakshiNew_HP_Box_300x600,
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
    ]), //1062118/Desktop_HP_300x100
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983537'} },
      { bidder: 'sovrn', params: {tagid: '744067'} },
    ]), ///1062118/sakshiNew_Artclepage_LB
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983539'} },
      { bidder: 'sovrn', params: {tagid: '744072'} },
    ]), ///1062118/sakshiNew_Artclepage_Skin_Left
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983540'} },
      { bidder: 'sovrn', params: {tagid: '744082'} },
    ]), ///1062118/sakshiNew_Artclepage_skin_right
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983538'} },
      { bidder: 'sovrn', params: {tagid: '744059'} },
    ]), ///1062118/sakshiNew_Artclepage_300x600
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983541'} },
      { bidder: 'sovrn', params: {tagid: '744075'} },
    ]), ///1062118/sakshiNew_Artclepage_box1
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983542'} },
      { bidder: 'sovrn', params: {tagid: '744066'} },
    ]), ///1062118/sakshiNew_Artclepage_Box2
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983543'} },
      { bidder: 'sovrn', params: {tagid: '744078'} },
    ]), ///1062118/sakshiNew_Artclepage_INarticle
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983522'} },
      { bidder: 'sovrn', params: {tagid: '744069'} },
    ]), ///1062118/Sakshi-Anchor_Ad
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983569'} },
      { bidder: 'sovrn', params: {tagid: '744065'} },
    ]), ///1062118/Sakshi_Moblile_LB
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983548'} },
      { bidder: 'sovrn', params: {tagid: '744077'} },
    ]), ///1062118/sakshiNEw_resp_Box2
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983549'} },
      { bidder: 'sovrn', params: {tagid: '744071'} },
    ]), ///1062118/sakshiNEw_resp_Box3
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983550'} },
      { bidder: 'sovrn', params: {tagid: '744081'} },
    ]), ///1062118/sakshiNEw_resp_Box4
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983551'} },
      { bidder: 'sovrn', params: {tagid: '744074'} },
    ]), ///1062118/sakshiNEw_resp_Box5
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983563'} },
      { bidder: 'sovrn', params: {tagid: '744052'} },
    ]), ///1062118/MobileMasthead_ROS_300x250
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983553'} },
      { bidder: 'sovrn', params: {tagid: '744076'} },
    ]), ///1062118/sakshiNew_article_Box2
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983554'} },
      { bidder: 'sovrn', params: {tagid: '744070'} },
    ]), ///1062118/sakshiNew_article_Box3
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983555'} },
      { bidder: 'sovrn', params: {tagid: '744080'} },
    ]), ///1062118/sakshiNew_article_Box4
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983556'} },
      { bidder: 'sovrn', params: {tagid: '744073'} },
    ]), ///1062118/sakshiNew_article_Box5
    hb_full_common_bidders.concat([

    ]), ///1062118/320x50_Mobile_LB_New
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983523'} },
      { bidder: 'sovrn', params: {tagid: '744062'} },
    ]), //sakshinew_resp_Box1_entertainment_300x250
    hb_full_common_bidders.concat([
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983562'} },
      { bidder: 'sovrn', params: {tagid: '744032'} },
    ]), ///1062118/MobileMasthead_HP_300x250
  ],
  isAP: [
    false, // '/1062118/sakshiNew_box1_300x250',
    false, // '/1062118/sakshiNew_box2_300x250',
    false, // '/1062118/sakshiNew_Box3_300x250',
    false, // '/1062118/fullstories_300x50_firstslot',
    true, // '/1062118/sakshiNew_HP', Originally APS tag. Removed because of conflict
    true, // '/1062118/sakshiNew_skin_Left',
    true, // '/1062118/sakshiNew_skin_right',
    true, // '/1062118/SakshiNew_HP_Box_300x600',
    false, // '/1062118/Desktop_HP_300x100',
    true, // '/1062118/sakshiNew_Artclepage_LB',
    true, // '/1062118/sakshiNew_Artclepage_Skin_Left',
    true, // '/1062118/sakshiNew_Artclepage_skin_right',
    true, // '/1062118/sakshiNew_Artclepage_300x600',
    false, // '/1062118/sakshiNew_Artclepage_box1',
    false, // '/1062118/sakshiNew_Artclepage_Box2',
    true, // '/1062118/sakshiNew_Artclepage_INarticle',
    false, // '/1062118/Sakshi-Anchor_Ad',
    true, // '/1062118/Sakshi_Moblile_LB',
    false, // '/1062118/sakshiNEw_resp_Box2',
    false, // '/1062118/sakshiNEw_resp_Box3',
    false, // '/1062118/sakshiNEw_resp_Box4',
    false, // '/1062118/sakshiNEw_resp_Box5',
    true, // '/1062118/MobileMasthead_ROS_300x250',
    false, // '/1062118/sakshiNew_article_Box2',
    false, // '/1062118/sakshiNew_article_Box3',
    false, // '/1062118/sakshiNew_article_Box4',
    false, // '/1062118/sakshiNew_article_Box5',
    false, // '/1062118/320x50_Mobile_LB_New',
    false, // 'sakshinew_resp_Box1_entertainment_300x250',
    false, // '/1062118/MobileMasthead_HP_300x250'
  ]
}

function checkHBUnits(){
  changeConfigToHB();
  // for(var i=0; i<mappings_full_hb_config.targetUnits.length; i++){
    // var unit = document.getElementById(mappings_full_hb_config.targetUnits[i]);
    // if(typeof unit === "object" && unit != null && unit !== 'undefined'){
    //   adUnitTemp = {
    //     code: mappings_full_hb_config.adUnitNames[i],
    //     mediaTypes: {
    //         banner: {
    //             sizes: mappings_full_hb_config.sizes[i]
    //         }
    //     },
    //     bids: mappings_full_hb_config.bids[i]
    //   };
    //   adUnits_full_hb.push(adUnitTemp);
    //   mapping_full_hb.slotNumbers.push(i+1);
    //   mapping_full_hb.adCode.push(mappings_full_hb_config.adUnitNames[i]);
    //   mapping_full_hb.sizes.push(mappings_full_hb_config.sizes[i]);
    //
    //   //Make Slots for apstag
    //   if(mappings_full_hb_config.isAP[i]){
    //     apSlotTemp = {
    //       slotID: mappings_full_hb_config.targetUnits[i],
    //       slotName: mappings_full_hb_config.adUnitNames[i],
    //       sizes: mappings_full_hb_config.sizes[i]
    //     }
    //     apSlots.push(apSlotTemp);
    //   }
    // }

    //
    // hb_full_slot = locate_googleSlot(mappings_full_hb_config.adUnitNames[i]);
    // mapping_full_hb.slots.push(hb_full_slot);
  // }

  // mappings_remnant.slots.push(eval('ub_remnant_slot'+slotNumbers[i]));
  // googleDefine_remnant(mappings_remnant.slotNumbers, mappings_remnant.adCode, mappings_remnant.sizes, mappings_remnant.adId);
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
              requestManager.prebid = true;
              biddersBack();
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
function changeConfigToHB(){
  ubpbjs.que.push(function() {
    ubpbjs.setConfig({
      "currency": {
         "adServerCurrency": "INR",
         "granularityMultiplier":75 ,
         "conversionRateFile": 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json',
         "defaultRates": { "USD": { "INR": 75 }}
       }
     });
  });
}
function biddersBack() {
    if (requestManager.aps && requestManager.prebid) {
        sendAdserverRequest();
    }
    return;
}
function sendAdserverRequest() {
    if (requestManager.adserverRequestSent === true) {
        return;
    }
    requestManager.adserverRequestSent = true;
    googletag.cmd.push(function() {
        googletag.pubads().refresh(mapping_full_hb.slots);
    });
}
function callAPStagBids(){
  apstag.fetchBids({
    slots: apSlots,
     timeout: 2000
  },function(bids) {
          googletag.cmd.push(function() {
              apstag.setDisplayBids();
              requestManager.aps = true; // signals that APS request has completed
              biddersBack(); // checks whether both APS and Prebid have returned
          });
      }
  );
}

function callMapUnits(){
  googletag.cmd.push(function() {
    x = googletag.pubads().getSlots();
    for(i=0;i<x.length;i++){
      if(mappings_full_hb_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath()))
      {
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
    }
    callAPStagBids();
    callFullHBAds(mapping_full_hb.adCode, mapping_full_hb.slots);
  });
}

function mobileCheckHB() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};
if(!mobileCheckHB()){
  checkHBUnits();
}
