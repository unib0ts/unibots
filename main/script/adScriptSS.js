!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");

var requestManager = {
    adserverRequestSent: false,
    aps: false,
    prebid: false
};
//initialize the apstag.js library on the page to allow bidding
apstag.init({
     pubID: '8282b9c6-324d-4939-b1ea-958d67a9e637', //enter your pub ID here as shown above, it must within quotes
     adServer: 'googletag'
});
apSlots = []

var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;
// var boturl = window.location.href;

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
    "increment" : 0.01  // from $0 to $5, 1-cent increments
    }]
};

var div_1_sizes = [320, 50];
var adUnits = [
    {
      code: '/21959913182/sakshi.com_NB_320x50',
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
        // { bidder: 'oftmedia', params: { placementId: '20846125' } }
      ]
    },
    {
      code: '/21959913182/sakshi.com_NB_320x50',
      mediaTypes: {
        banner: {
          sizes: div_1_sizes
        }
      },
      bids: [
        { bidder: 'oftmedia', params: { placementId: '20846125' } },
        // { bidder: 'unibots', params: {zoneId: 144261, host: 'cpm.unibots.in'} },
        // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        // { bidder: '33across', params: { siteId: 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] },
        // { bidder: 'emx_digital', params: { tagid: '97515' } },
        { bidder: 'appnexus', params: { placementId: '19056673' } },
        { bidder: 'sovrn', params: { tagid: '708881' } },
        // { bidder: 'openx', params: {unit: '543459652', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        { bidder: 'nobid', params: { siteId: '21987177881' } },
        // // { bidder: 'criteo', params: {networkId: '10542'} },
        // // { bidder: 'criteointl', params: {networkId: '10545'} },
        // { bidder: 'adkernel', params: {zoneId: '126007', host: 'cpm.fmlabsonline.com'} },
        { bidder: 'ucfunnel', params: { adid : 'ad-BE78EE7EBE268DAD17B3BE349BE4938E'} },
        // {bidder: 'dailyhunt', params: {placement_id: 1, publisher_id: 6, partner_name: 'Sakshi'} },
        //{ bidder: 'adsolut', params: { zoneId: '107071', host: 'cpm.adsolut.in' } },
        // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2932597'} },
        // { bidder: 'rubicon', params: { accountId: '11734', siteId: '323846', zoneId: '1680740' } },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'} },
        // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
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
    'appnexus': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.86; } },
    'pubmatic': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.74; } },
    'rubicon': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
    // 'openx': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
    'criteo': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
    'criteointl': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
    'nobid': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
    'oftmedia': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.80; } },
    'sovrn': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.81; } },
    'onetag': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
    //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
    // 'dailyhunt': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },

    '33across': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
    'emx_digital': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
    'rhythmone': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
    'eplanning': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } }
  };
  ubpbjs.setConfig({
    // floors: {
    //   currency: 'USD',
    //   // skipRate: 5,
    //   // modelVersion: 'Sports Ad Unit Floors',
    //   schema: {
    //       fields: ['mediaType']
    //   },
    //   values: {
    //       'banner': 0.01,
    //   }
    // },
    priceGranularity: customConfigObjectA,
    userSync: {
        iframeEnabled: true,
        aliasSyncEnabled: true,
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
    publisherDomain: 'https://www.sakshi.com/',
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


// var ubsmall_slot1;
// function addNewBotAdMobile(){
//   changeConfigToHB();
//   googletag.cmd.push(function() {
//       ubsmall_slot1 = googletag.defineSlot('/21959913182/sakshi.com_NB_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
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

function addNewsBotAd(){
  changeConfigToHB();
  googletag.cmd.push(function() {
      googletag.defineSlot('/21959913182/sakshi.com_NB_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
      // googletag.defineSlot('/21928950349/sakshi_cube_test_100x100', [100, 100], 'div-gpt-ad-1634370996769-0').addService(googletag.pubads());
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot.getAdUnitPath() === '/21959913182/sakshi.com_NB_320x50') {
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
            googletag.pubads().refresh(ub_slot1);
            // var x = ubpbjs.getAllPrebidWinningBids();
            // var adsCalled = false;
            // for(var i=0;i<x.length;i++){
            //   var bc = x[i].bidderCode;
            //   if(bc=="openx"){
            //     adsCalled = true;
            //     callBotman();
            //   }
            // }
            // if(!adsCalled){
            //   callAdsUB();
            // }
        });
    });
}

// var botmanCalled = false;
// var userStatusBM = '';
// function callBotman(){
//   if(userStatusBM == ''){
//     var request = new XMLHttpRequest();
//     var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=sakshi';
//     request.open('GET', url, true);
//     request.onload = function() {
//       if (request.status >= 200 && request.status < 400) {
//         var data = request.responseText;
//         if(data != ""){
//           data = JSON.parse(data);
//           userStatusBM = data;
//           if(userStatusBM == "0" || userStatusBM == "3"){
//             callAdsUB();
//           }
//           else{
//             console.log('Not Valid Traffic for openx');
//           }
//         }
//         else{
//           console.error('Data not returned from server');
//           callAdsUB();
//         }
//       }
//       else {
//         console.error('Request failed from server');
//         callAdsUB();
//       }
//     };
//     request.onerror = function() {
//       console.error('Request failed to Reach Server');
//       callAdsUB();
//     };
//     request.send();
//   }
//   else{
//     if(userStatusBM == "0" || userStatusBM == "3"){
//       callAdsUB();
//     }
//     else{
//       console.log('Not Valid Traffic for openx');
//     }
//   }
//
// }
//
// function callAdsUB(){
// 	googletag.pubads().refresh(ub_slot1);
// }

// var botmanCalled = false;
// var userStatusBM_rem = '';
// function callBotman(){
//   if(userStatusBM_rem == ''){
//     var request = new XMLHttpRequest();
//     var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=sakshi';
//     request.open('GET', url, true);
//     request.onload = function() {
//       if (request.status >= 200 && request.status < 400) {
//         var data = request.responseText;
//         if(data != ""){
//           data = JSON.parse(data);
//           userStatusBM_rem = data;
//           if(userStatusBM_rem == "0" || userStatusBM_rem == "3"){
//             callAdsUB_rem();
//           }
//           else{
//             console.log('Not Valid Traffic for openx');
//           }
//         }
//         else{
//           console.error('Data not returned from server');
//           callAdsUB_rem();
//         }
//       }
//       else {
//         console.error('Request failed from server');
//         callAdsUB_rem();
//       }
//     };
//     request.onerror = function() {
//       console.error('Request failed to Reach Server');
//       callAdsUB_rem();
//     };
//     request.send();
//   }
//   else{
//     if(userStatusBM_rem == "0" || userStatusBM_rem == "3"){
//       callAdsUB_rem();
//     }
//     else{
//       console.log('Not Valid Traffic for openx');
//     }
//   }
//
// }
//
// function callAdsUB_rem(){
// 	googletag.pubads().refresh(mappings_remnant.slots);
// }

function refreshBid(ub_slot1) {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21959913182/sakshi.com_NB_320x50'],
		  bidsBackHandler: function() {
        googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh([ub_slot1]);
              // var adsCalled = false;
              // for(var i=0;i<x.length;i++){
              //   var bc = x[i].bidderCode;
              //   if(bc=="openx"){
              //     adsCalled = true;
              //     callBotman();
              //   }
              // }
              // if(!adsCalled){
              //   callAdsUB();
              // }
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
  // else {
  //   ub_passback();
  // }
}

// function ub_passback() {
//   ub_passback = document.createElement("div");
//   ub_passback.setAttribute("style", "float:left;min-height:2px;width:100%;");
//   ub_passback.setAttribute("data-position", 3);
//   ub_passback.setAttribute("data-section", "StroyPage");
//   ub_passback.setAttribute("class", "colombia");
//
//   if (!mobileCheck()) {
//       ub_passback.setAttribute("data-ua", "D");
//       ub_passback.setAttribute("data-slot", "462954");
//       ub_passback.setAttribute("id", "div-clmb-ctn-462954-3");
//       ub_sticky = document.querySelector('.mybotface3');
//       ub_sticky.appendChild(ub_passback);
//   }else {
//     ub_passback.setAttribute("data-ua", "M");
//     ub_passback.setAttribute("data-slot", "462955");
//     ub_passback.setAttribute("id", "div-clmb-ctn-462955-3");
//     ub_sticky = document.querySelector('.mybotface3');
//     ub_sticky.appendChild(ub_passback);
//   }
// }

// setTimeout(function(){
//   checkRemnantUnits();
// }, 10000);

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
      // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2996013'} },
      { bidder: 'oftmedia', params: { placementId: '20846125' } },
      // { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
      { bidder: 'emx_digital', params: { tagid: '97515' } }, /* sizeless */
      { bidder: 'sovrn', params: {tagid: '735296'} },
      // { bidder: "kubient", params: { zoneid: "aeb553306903a", server: "kssp.kbntx.ch"} },
      // { bidder: 'openx', params: {unit: '543459862', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
      // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
      { bidder: 'nobid', params: { siteId: '21987177881' } },
      // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
      { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
      { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'} },
      // // {bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'Sakshi'} },
      // // { bidder: 'criteo', params: {networkId: '10542'} },
      // // { bidder: 'criteointl', params: {networkId: '10545'} },
      // { bidder: 'adkernel', params: {zoneId: '126007', host: 'cpm.fmlabsonline.com'} },
    ],
    [
      { bidder: 'appnexus', params: { placementId: '19056673' } }, /* one placementId for all sizes  my appnexus bidder */
      // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2996014'} },
      { bidder: 'oftmedia', params: { placementId: '20846125' } },
      // { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
      { bidder: 'emx_digital', params: { tagid: '97515' } }, /* sizeless */
      { bidder: 'sovrn', params: {tagid: '738414'} },
      // { bidder: "kubient", params: { zoneid: "aeb553306903a", server: "kssp.kbntx.ch"} },
      // { bidder: 'openx', params: {unit: '543459998', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
      // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
      { bidder: 'nobid', params: { siteId: '21987177881' } },
      // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
      // // {bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'Sakshi'} },
      { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
      { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'} },
      // // { bidder: 'criteo', params: {networkId: '10542'} },
      // // { bidder: 'criteointl', params: {networkId: '10545'} },
      // { bidder: 'adkernel', params: {zoneId: '126007', host: 'cpm.fmlabsonline.com'} },
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
            // var x = ubpbjs.getAllPrebidWinningBids();
            // var adsCalled_rem = false;
            // for(var i=0;i<x.length;i++){
            //   var bc = x[i].bidderCode;
            //   if(bc=="openx"){
            //     adsCalled_rem = true;
            //     callBotman_rem();
            //   }
            // }
            // if(!adsCalled_rem){
            //   callAdsUB_rem();
            // }
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
              // var adsCalled_rem = false;
              // for(var i=0;i<x.length;i++){
              //   var bc = x[i].bidderCode;
              //   if(bc=="openx"){
              //     adsCalled_rem = true;
              //     callBotman_rem();
              //   }
              // }
              // if(!adsCalled_rem){
              //   callAdsUB_rem();
              // }
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
var hb_full_common_bidders = [
  // { bidder: 'appnexus', params: { placementId: '19056673' } }, /* one placementId for all sizes  my appnexus bidder */
  // { bidder: 'oftmedia', params: { placementId: '20846125' } },
  // // { bidder: 'unibots', params: {zoneId: 144261, host: 'cpm.unibots.in'} },
  // // { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
  // { bidder: 'emx_digital', params: { tagid: '97515' } }, /* sizeless */
  // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
  // { bidder: 'nobid', params: { siteId: '21987177881' } },
  // // // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
  // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  // // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  // // // { bidder: 'criteo', params: {networkId: '10542'} },
  // // // { bidder: 'criteointl', params: {networkId: '10545'} },
  // // { bidder: 'adkernel', params: {zoneId: '126007', host: 'cpm.fmlabsonline.com'} },
  // { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'} },
];
var mappings_full_hb_config = {
  targetUnits: [
    'div-gpt-ad-1618912602160-0', //'/1062118/sakshiNew_Mobile_Inarticle2',
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
    'div-ub-1', ///21959913182/sakshi.com_NB_320x50
    'div-gpt-ad-1593080960785-0',  ///21959913182/sakshi_hb_320x50_top_mobile_new'
    // 'div-gpt-ad-1593080960785-0', ///1062118/SakshiNew_ArticlepageLB_300x50 -> /21959913182/sakshi_hb_320x50_top_mobile
    'div-gpt-ad-1599810044319-0', ///1062118/Mobile_Articlepage_adslot3
    'div-gpt-ad-1602146792829-0', //'/1062118/Sakshi_Photos_Mobile_1',
    'div-gpt-ad-1602146824870-0', //'/1062118/Sakshi_Videos_Mobile_1',
    'div-gpt-ad-1602146890612-0', //'/1062118/Sakshi_Cartoon_Mobile_1',
    'div-gpt-ad-1634370996769-0' //'/21928950349/sakshi_cube_test_100x100',
  ],
  adUnitNames: [
    '/1062118/sakshiNew_Mobile_Inarticle2',
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
    '/1062118/sakshinew_resp_Box1_entertainment_300x250',
    '/1062118/MobileMasthead_HP_300x250',
    '/21959913182/sakshi.com_NB_320x50',
    '/21959913182/sakshi_hb_320x50_top_mobile_new',
    // '/21959913182/sakshi_hb_320x50_top_mobile' // <-'/1062118/SakshiNew_ArticlepageLB_300x50'
    '/1062118/Mobile_Articlepage_adslot3',
    '/1062118/Sakshi_Photos_Mobile_1',
    '/1062118/Sakshi_Videos_Mobile_1',
    '/1062118/Sakshi_Cartoon_Mobile_1',
    // '/21928950349/sakshi_cube_test_100x100',
  ],
  sizes: [
    [300,250], //1062118/sakshiNew_Mobile_Inarticle2',
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
    [320, 50], ///21959913182/sakshi.com_NB_320x50
    [[320, 100], [320, 50], [300, 50], [300, 100]], //'/21959913182/sakshi_hb_320x50_top_mobile_new
    // [[320, 50], [300, 50]], // /1062118/SakshiNew_ArticlepageLB_300x50 -> /21959913182/sakshi_hb_320x50_top_mobile
    [[300, 250], [336, 280]],
    [300, 250], //'/1062118/Sakshi_Photos_Mobile_1',
    [300, 250], //'/1062118/Sakshi_Videos_Mobile_1',
    [300, 250], // '/1062118/Sakshi_Cartoon_Mobile_1',
    // [120, 120], //'/21928950349/sakshi_cube_test_100x100',
  ],
  bids: [
    hb_full_common_bidders.concat([
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983534'} },
      // { bidder: 'sovrn', params: {tagid: '888283'} },
      // // { bidder: 'openx', params: {unit: '543454990', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // // { bidder: "kubient", params: { zoneid: "76c65728741bf", server: "kssp.kbntx.ch"} },
      // // // // {bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), //1062118/sakshiNew_Mobile_Inarticle2',
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-47B477B7EAE8E8D91E847D927E3ADB9E'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983534'} },
      // { bidder: 'sovrn', params: {tagid: '744054'} },
      // // { bidder: 'openx', params: {unit: '543454990', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: "kubient", params: { zoneid: "76c65728741bf", server: "kssp.kbntx.ch"} },
      // // // {bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), //sakshiNew_box1_300x250
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-34B844B42E683D77172D342E3BEDE89'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983535'} },
      // { bidder: 'sovrn', params: {tagid: '744064'} },
      // // { bidder: 'openx', params: {unit: '543458039', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: "kubient", params: { zoneid: "d127db0a0fafa", server: "kssp.kbntx.ch"} },
      // // // {bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), //sakshiNew_box2_300x250
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-273677374AE28722F88E8A44D97786B6'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983536'} },
      // { bidder: 'sovrn', params: {tagid: '744057'} },
      // // { bidder: 'openx', params: {unit: '543455757', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: "kubient", params: { zoneid: "5283241d8273a", server: "kssp.kbntx.ch"} },
      // // // {bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), //sakshiNew_box3_300x250
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-9A29AA2A4B67A93E14E2DB89D46AB38A'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2996104'} },
      // { bidder: 'sovrn', params: {tagid: '744089'} },
      // // { bidder: 'openx', params: {unit: '543459080', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: "kubient", params: { zoneid: "0071618bc63b9", server: "kssp.kbntx.ch"} },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), //fullstories_300x50_firstslot
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-2736773728B9D2B2F3D462BAA9E47DE'} },
      // // {bidder: 'dailyhunt', params: {placement_id: 139, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983530'} },
      // { bidder: 'sovrn', params: {tagid: '744083'} },
      // // { bidder: 'openx', params: {unit: '543458137', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: "kubient", params: { zoneid: "22f4c0ca3a449", server: "kssp.kbntx.ch"} },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), //sakshiNew_HP
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-627D227296BD29340E4B3BAE2DE29847'} },
      // // {bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983532'} },
      // { bidder: 'sovrn', params: {tagid: '744068'} },
      // // { bidder: "kubient", params: { zoneid: "fc6e5434be65e", server: "kssp.kbntx.ch"} },
      // // { bidder: 'openx', params: {unit: '543271183', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // // { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi', domain: 'https://prg8.smartadserver.com' } }
    ]), //1062118/sakshiNew_skin_Left
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-77287727D6DA73DB18DA34BE26A9944'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983533'} },
      // { bidder: 'sovrn', params: {tagid: '744079'} },
      // // { bidder: 'openx', params: {unit: '543457046', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: "kubient", params: { zoneid: "456fef199ef58", server: "kssp.kbntx.ch"} },
    ]), //1062118/sakshiNew_skin_right
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-34B844B46E2AB22BF3B886BB7377366B'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 145, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
      // { bidder: 'sovrn', params: {tagid: '744058'} },
      // // { bidder: 'openx', params: {unit: '54345592', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: "kubient", params: { zoneid: "515bdea4396a8", server: "kssp.kbntx.ch"} },
    ]), //1062118/SakshiNew_HP_Box_300x600,
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-273677372287649D0862D9E6EA2B7499'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 146, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
      // // { bidder: "kubient", params: { zoneid: "61fb2d4256efd", server: "kssp.kbntx.ch"} },
      // // { bidder: 'openx', params: {unit: '543458925', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), //1062118/Desktop_HP_300x100
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-273677379833D44E03D462BAA9E47DA'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983537'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 139, publisher_id: 6, partner_name: 'sakshi'} },
      // { bidder: 'sovrn', params: {tagid: '744067'} },
      // // { bidder: 'openx', params: {unit: '543271061', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: "kubient", params: { zoneid: "49b3b41ed5aa7", server: "kssp.kbntx.ch"} },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/sakshiNew_Artclepage_LB
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-273677378AA6A74DF862D9E6EA2B749D'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983539'} },
      // { bidder: 'sovrn', params: {tagid: '744072'} },
      // // { bidder: "kubient", params: { zoneid: "b9ee7016ef010", server: "kssp.kbntx.ch"} },
      // // { bidder: 'openx', params: {unit: '543454901', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // // { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
    ]), ///1062118/sakshiNew_Artclepage_Skin_Left
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-34B844B42A372B3EF7B924368A9EE47'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983540'} },
      // { bidder: 'sovrn', params: {tagid: '744082'} },
      // // { bidder: "kubient", params: { zoneid: "e3a11604048c0", server: "kssp.kbntx.ch"} },
      // // { bidder: 'openx', params: {unit: '543457850', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
    ]), ///1062118/sakshiNew_Artclepage_skin_right
    hb_full_common_bidders.concat([
  //     { bidder: 'ucfunnel', params: { adid : 'ad-627D2272869AB2EBFE4B3BAE2DE29883'} },
  //     // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983538'} },
  //     { bidder: 'sovrn', params: {tagid: '744059'} },
  //     // { bidder: "kubient", params: { zoneid: "01b6896b583e7", server: "kssp.kbntx.ch"} },
  // // /    { bidder: 'openx', params: {unit: '543456852', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
  //     // // { bidder: 'dailyhunt', params: {placement_id: 145, publisher_id: 6, partner_name: 'sakshi'} },
    ]), ///1062118/sakshiNew_Artclepage_300x600
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-D23422328E43D246082936DEA497769'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983541'} },
      // { bidder: 'sovrn', params: {tagid: '744075'} },
      // // { bidder: 'openx', params: {unit: '543455615', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: "kubient", params: { zoneid: "2821e007e0100", server: "kssp.kbntx.ch"} },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/sakshiNew_Artclepage_box1
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-AA7BAA7A44AB44A2F8377E3328228EE4'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983542'} },
      // { bidder: 'sovrn', params: {tagid: '744066'} },
      // // { bidder: "kubient", params: { zoneid: "46be0bac55041", server: "kssp.kbntx.ch"} },
      // // { bidder: 'openx', params: {unit: '543270894', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/sakshiNew_Artclepage_Box2
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-77287727DD6EDEBEFBD4DE4A6DEA6423'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983543'} },
      // { bidder: 'sovrn', params: {tagid: '744078'} },
      // // { bidder: "kubient", params: { zoneid: "469d105d8cab1", server: "kssp.kbntx.ch"} },
      // // { bidder: 'openx', params: {unit: '543456697', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/sakshiNew_Artclepage_INarticle
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-AA7BAA7A4E24733DF88A83EE2BDD89EB'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983522'} },
      // { bidder: 'sovrn', params: {tagid: '744069'} },
      // // { bidder: "kubient", params: { zoneid: "7972e8b16e463", server: "kssp.kbntx.ch"} },
      // // { bidder: 'openx', params: {unit: '543271469', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/Sakshi-Anchor_Ad
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-8A29AA2AE7D4AEA2C9EA42D6638A7E2'} },
      // // { bidder: "kubient", params: { zoneid: "28f9c52d6c8b8", server: "kssp.kbntx.ch"} },
      // // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983569'} },
      // { bidder: 'sovrn', params: {tagid: '744065'} },
      // // { bidder: 'openx', params: {unit: '543268667', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/Sakshi_Moblile_LB
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-8A29AA2A77AEDA980B6B327396D3E286'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983548'} },
      // { bidder: 'sovrn', params: {tagid: '744077'} },
      // // { bidder: "kubient", params: { zoneid: "53cf0231e4dae", server: "kssp.kbntx.ch"} },
      // // { bidder: 'openx', params: {unit: '543456615', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/sakshiNEw_resp_Box2
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-77287727B84E4A39F837B439BD9792D'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983549'} },
      // { bidder: 'sovrn', params: {tagid: '744071'} },
      // // { bidder: "kubient", params: { zoneid: "3d7d889fc27ab", server: "kssp.kbntx.ch"} },
      // // { bidder: 'openx', params: {unit: '543454780', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/sakshiNEw_resp_Box3
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-47B477B724D23824FE74724BD72BD467'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983550'} },
      // { bidder: 'sovrn', params: {tagid: '744081'} },
      // // { bidder: "kubient", params: { zoneid: "1c85712249abc", server: "kssp.kbntx.ch"} },
      // // { bidder: 'openx', params: {unit: '543457464', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/sakshiNEw_resp_Box4
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-E2B422B2D46D88E919E886E964D9E84'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983551'} },
      // { bidder: 'sovrn', params: {tagid: '744074'} },
      // // { bidder: 'openx', params: {unit: '543455522', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: "kubient", params: { zoneid: "4fb59fda0ab9f", server: "kssp.kbntx.ch"} },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/sakshiNEw_resp_Box5
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-AA7BAA7A26E69A99F838B4DB736B24A4'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983563'} },
      // { bidder: 'sovrn', params: {tagid: '744052'} },
      // // { bidder: "kubient", params: { zoneid: "147c0b0d6df21", server: "kssp.kbntx.ch"} },
      // // { bidder: 'openx', params: {unit: '543270086', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
    ]), ///1062118/MobileMasthead_ROS_300x250
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-77287727DB934E26FB94D68EDB736A89'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983553'} },
      // { bidder: 'sovrn', params: {tagid: '744076'} },
      // // { bidder: 'openx', params: {unit: '543456534', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: "kubient", params: { zoneid: "ebb9cdd7118b5", server: "kssp.kbntx.ch"} },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/sakshiNew_article_Box2
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-8A29AA2A8A7B2B32F9EA42D6638A7EA'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983554'} },
      // { bidder: 'sovrn', params: {tagid: '744070'} },
      // // { bidder: 'openx', params: {unit: '543454681', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: "kubient", params: { zoneid: "eb8fc120a52da", server: "kssp.kbntx.ch"} },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/sakshiNew_article_Box3
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-D2342232928E9D4E1D2DB37BA29B836E'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983555'} },
      // { bidder: 'sovrn', params: {tagid: '744080'} },
      // // { bidder: "kubient", params: { zoneid: "c37f5e79f7424", server: "kssp.kbntx.ch"} },
      // // { bidder: 'openx', params: {unit: '543457388', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/sakshiNew_article_Box4
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-627D227282B62E84F6283AD447B892D'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983556'} },
      // { bidder: 'sovrn', params: {tagid: '744073'} },
      // // { bidder: 'openx', params: {unit: '543455356', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: "kubient", params: { zoneid: "f5370f6bc07fe", server: "kssp.kbntx.ch"} },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/sakshiNew_article_Box5
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-9A29AA2A48973EBEC7E6DB3E746D76A'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2996105'} },
      // { bidder: 'sovrn', params: {tagid: '744090'} },
      // // { bidder: 'openx', params: {unit: '543459177', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: "kubient", params: { zoneid: "b925d06159c89", server: "kssp.kbntx.ch"} },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/320x50_Mobile_LB_New
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-AA7BAA7A872EB3EA18377E3328228EEE'} },
      // // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983523'} },
      // { bidder: 'sovrn', params: {tagid: '744062'} },
      // // { bidder: 'openx', params: {unit: '543457236', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: "kubient", params: { zoneid: "a30c04217fcc8", server: "kssp.kbntx.ch"} },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), //sakshinew_resp_Box1_entertainment_300x250
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-9A29AA22ADED76DD14D2B2A48348E9D8'} },
      // // { bidder: "kubient", params: { zoneid: "06c0f35629198", server: "kssp.kbntx.ch"} },
      // // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983562'} },
      // { bidder: 'sovrn', params: {tagid: '744032'} },
      // // { bidder: 'openx', params: {unit: '543268501', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///1062118/MobileMasthead_HP_300x250
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-BE78EE7EBE268DAD17B3BE349BE4938E'} },
      // { bidder: 'sovrn', params: { tagid: '708881' } },
      // // { bidder: 'openx', params: { unit: '541046310', delDomain: 'yieldbird-d.openx.net' } },
      // //{ bidder: 'adsolut', params: { zoneId: '107071', host: 'cpm.adsolut.in' } },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2932597'} },
      // // // { bidder: 'rubicon', params: { accountId: '11734', siteId: '323846', zoneId: '1680740' } },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///21959913182/sakshi.com_NB_320x50
    hb_full_common_bidders.concat([
      // { bidder: 'ucfunnel', params: { adid : 'ad-BE78EE7EBE268DAD17B3BE349BE4938E'} },
      // { bidder: 'sovrn', params: { tagid: '708881' } },
      // { bidder: 'openx', params: { unit: '541046310', delDomain: 'yieldbird-d.openx.net' } },
      // //{ bidder: 'adsolut', params: { zoneId: '107071', host: 'cpm.adsolut.in' } },
      // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2932597'} },
      // // { bidder: 'rubicon', params: { accountId: '11734', siteId: '323846', zoneId: '1680740' } },
      // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), ///21959913182/sakshi_hb_320x50_top_mobile_new'
    // hb_full_common_bidders.concat([
    //   // { bidder: 'dailyhunt', params: {placement_id: 146, publisher_id: 6, partner_name: 'sakshi'} },
    //   { bidder: 'sovrn', params: { tagid: '751926' } },
    //   { bidder: 'ucfunnel', params: { adid : 'ad-AA7BAA7A3779443AF88B63D4A268924B'} },
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3076400'} },
    //   { bidder: 'openx', params: {unit: '543459527', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
    //   // { bidder: "kubient", params: { zoneid: "5d7531d58000d", server: "kssp.kbntx.ch"} },
    //   // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    // ]), // /1062118/SakshiNew_ArticlepageLB_300x50 -> /21959913182/sakshi_hb_320x50_top_mobile -> '/21959913182/sakshi_hb_320x50_top_mobile_new
    hb_full_common_bidders.concat([
      // { bidder: 'sovrn', params: { tagid: '708881' } },
      // { bidder: "kubient", params: { zoneid: "10b433b9bd2d5", server: "kssp.kbntx.ch"} },
      // // { bidder: 'openx', params: { unit: '541046310', delDomain: 'yieldbird-d.openx.net' } },
      // //{ bidder: 'adsolut', params: { zoneId: '107071', host: 'cpm.adsolut.in' } },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2932597'} },
      // // { bidder: 'rubicon', params: { accountId: '11734', siteId: '323846', zoneId: '1680740' } },
      // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] }
    ]), //1062118/Mobile_Articlepage_adslot3
    hb_full_common_bidders.concat([
      // { bidder: 'sovrn', params: { tagid: '789455' } },
      // // { bidder: 'openx', params: { unit: '541046310', delDomain: 'yieldbird-d.openx.net' } },
      // //{ bidder: 'adsolut', params: { zoneId: '107071', host: 'cpm.adsolut.in' } },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3247597'} },
      // // { bidder: 'rubicon', params: { accountId: '11734', siteId: '323846', zoneId: '1680740' } },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
    ]), //'/1062118/Sakshi_Photos_Mobile_1',
    hb_full_common_bidders.concat([
      // { bidder: 'sovrn', params: { tagid: '789456' } },
      // // { bidder: 'openx', params: { unit: '541046310', delDomain: 'yieldbird-d.openx.net' } },
      // //{ bidder: 'adsolut', params: { zoneId: '107071', host: 'cpm.adsolut.in' } },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3247598'} },
      // // { bidder: 'rubicon', params: { accountId: '11734', siteId: '323846', zoneId: '1680740' } },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
    ]), //'/1062118/Sakshi_Videos_Mobile_1',
    hb_full_common_bidders.concat([
      // { bidder: 'sovrn', params: { tagid: '789457' } },
      // // { bidder: 'openx', params: { unit: '541046310', delDomain: 'yieldbird-d.openx.net' } },
      // //{ bidder: 'adsolut', params: { zoneId: '107071', host: 'cpm.adsolut.in' } },
      // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3247599'} },
      // // { bidder: 'rubicon', params: { accountId: '11734', siteId: '323846', zoneId: '1680740' } },
      // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
    ]),  // '/1062118/Sakshi_Cartoon_Mobile_1',
    // hb_full_common_bidders.concat([
    // ]),  // '/21928950349/sakshi_cube_test_100x100
  ],
  isAP: [
    false,
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
    false, // /21959913182/sakshi.com_NB_320x50
    false, // /1062118/SakshiNew_ArticlepageLB_300x50
    false, ///1062118/Mobile_Articlepage_adslot3
    false,
    false,
    false,
    // false, //'/21928950349/sakshi_cube_test_100x100
  ]
}
var mappings_extra_units_config ={
  adUnitNames: [
    '/1062118/TEST_INTERSTITIAL_DESK',
    '/1062118/Mobile_home_LB2_300x250',
    '/1062118/1x1_Sakshi.com_Live_Outstream_Desktop',
    '/1062118/1x1_Sakshi.com_Live_Outstream_Mobile',
    '/1062118/Intersitial_640x480_Desktop',
    '/1062118/Intersitial_320x480_mobile',
    '/1062118/1x1_Sakshi.com_Live_Outstream_Desktop_Homepage',
    '/1062118/1x1_Sakshi.com_Live_Outstream_Desktop_Articlepage',
    '/1062118/1x1_Sakshi.com_Live_Outstream_Mobile_Articlepage',
    '/1062118/1x1_Sakshi.com_Live_Outstream_Mobile_Homepage',
    '/1009127/Sakshi_DBS_Carousel',
    '/1062118/sakshiNew_cinema_sports_Bussiness_box1',
    '/1062118/sakshiNew_cinema_sports_Bussiness_box2',
    '/1062118/sakshiNew_cinema_sports_Bussiness_box5',
    '/21796214895/542194_Sakshi_block_1',
    '/21796214895/542194_Sakshi_block_2',
    '/21796214895/542194_Sakshi_block_3',
    '/1062118/Intersitial_640x480_Desktop_Articlepage',
    '/1062118/Intersitial_320x480_mobile_Articlepage',
    // '/1062118/Desktop_LB_970x90_728x90',
    '/1062118/masthead_2_inarticle_300x250',
    '/1062118/AMP_Top_header_300x250',
    '/1062118/Article_In_Image_ad_1x1',
    '/1062118/sakshi_new_728x90_home_mid'
  ]
}
var mappings_extra_units = {
  slots: [],
  adUnitNames:[]
}

function checkHBUnits(){
  addNewsBotAd();
  changeConfigToHB();
  callMapUnits();

  setTimeout(function() {
      initAdserver_hb_full();
  }, FAILSAFE_TIMEOUT);
}

function fillRefreshMap(){
  googletag.cmd.push(function () {
      googletag.pubads().addEventListener("slotRenderEnded", function (event) {
              // var timer = REFRESH_TIMEOUT / 1000;
              var el = document.getElementById(
                  event.slot.getSlotId().getDomId()
              );
              var nodes = el.childNodes[0].childNodes;
              var ubifame = nodes.length && nodes[0].nodeName.toLowerCase();
              if (ubifame == 'iframe') {
              // if (el != null) {
                  // var temp = setInterval(function () {
                      // if (isInViewSpace(el)) {
                          // timer -= 1;
                          // if (timer <= 0) {
                          // if(mapping_full_hb["adCode"].filter(function(val){return val == event.slot.getSlotId().getAdUnitPath()})){
                            refreshBidfull([event.slot], [event.slot.getSlotId().getAdUnitPath()]);
                          // }
                              // clearInterval(temp);
                          // }
                      // }
                  // }, 1000);
              }
          });
  });
}

function refreshBidfull(ub_slot, adCode) {
    ubpbjs.que.push(function () {
        ubpbjs.requestBids({
            timeout: PREBID_TIMEOUT,
            adUnitCodes: adCode,
            adUnits: adUnits_full_hb,
            bidsBackHandler: function () {
                googletag.cmd.push(function () {
                    ubpbjs.que.push(function () {
                        ubpbjs.setTargetingForGPTAsync();
                        googletag.pubads().refresh(ub_slot);
                    });
                });
            },
        });
    });
}

function callFullHBAds(adCode, ub_slot){
  // fillRefreshMap();
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
              googletag.pubads().refresh(ub_slot);
          });
        });
      }
    });
  });
}

function callExtraHBAds(adCode, ub_slot){
  ubpbjs.que.push(function(){
    ubpbjs.requestBids({
      timeout: PREBID_TIMEOUT,
      // adUnits: adUnits_full_hb,
      adUnitCodes: adCode,
      bidsBackHandler: function() {
        ubpbjs.initAdserverSetHB = true;
        googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              // requestManager.prebid = true;
              // biddersBack();
              googletag.pubads().refresh(ub_slot);
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
            googletag.pubads().refresh(mapping_full_hb.slots);
            // var x = ubpbjs.getAllPrebidWinningBids();
            // var adsCalled_hb = false;
            // for(var i=0;i<x.length;i++){
            //   var bc = x[i].bidderCode;
            //   if(bc=="openx"){
            //     adsCalled_hb = true;
            //     callBotman_hb();
            //   }
            // }
            // if(!adsCalled_hb){
            //   callAdsUB_hb();
            // }
        });
    });
}

// var botmanCalled = false;
// var userStatusBM_hb = '';
// function callBotman_hb(){
//   if(userStatusBM_hb == ''){
//     var request = new XMLHttpRequest();
//     var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=sakshi';
//     request.open('GET', url, true);
//     request.onload = function() {
//       if (request.status >= 200 && request.status < 400) {
//         var data = request.responseText;
//         if(data != ""){
//           data = JSON.parse(data);
//           userStatusBM_hb = data;
//           if(userStatusBM_hb == "0" || userStatusBM_hb == "3"){
//             callAdsUB_hb();
//           }
//           else{
//             console.log('Not Valid Traffic for openx');
//           }
//         }
//         else{
//           console.error('Data not returned from server');
//           callAdsUB_hb();
//         }
//       }
//       else {
//         console.error('Request failed from server');
//         callAdsUB_hb();
//       }
//     };
//     request.onerror = function() {
//       console.error('Request failed to Reach Server');
//       callAdsUB_hb();
//     };
//     request.send();
//   }
//   else{
//     if(userStatusBM_hb == "0" || userStatusBM_hb == "3"){
//       callAdsUB_hb();
//     }
//     else{
//       console.log('Not Valid Traffic for openx');
//     }
//   }
//
// }
//
// function callAdsUB_hb(){
// 	googletag.pubads().refresh(mapping_full_hb.slots);
// }

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
        googletag.pubads().refresh(mappings_extra_units.slots);
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
    x_len = x.length;
    for(i=0;i<x.length;i++){
      if(mappings_full_hb_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())){
        index = mappings_full_hb_config.adUnitNames.indexOf(x[i].getSlotId().getAdUnitPath());
        size_array = [];
        size_temp_array = googletag.pubads().getSlots()[i].getSizes();
        for(j=0;j<size_temp_array.length;j++){
          length = size_temp_array[j][Object.keys(size_temp_array[j])[0]];
           height = size_temp_array[j][Object.keys(size_temp_array[j])[1]];
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

            slotID: googletag.pubads().getSlots()[i].getSlotId().getDomId(),
            slotName: x[i].getSlotId().getAdUnitPath(),
            sizes: size_array
          }
          apSlots.push(apSlotTemp);
        }
      }
      else if(mappings_extra_units_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())){
        mappings_extra_units.slots.push(x[i]);
        mappings_extra_units.adUnitNames.push(x[i]);
      }
    }

    adUnitTemp1 = {
      code: '/21959913182/sakshi.com_NB_320x50',
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
        { bidder: 'oftmedia', params: { placementId: '20846125' } }
      ]
    }
    adUnits_full_hb.push(adUnitTemp1);

    callAPStagBids();
    callFullHBAds(mapping_full_hb.adCode, mapping_full_hb.slots);
    callExtraHBAds(mappings_extra_units.adUnitNames, mappings_extra_units.slots)
  });
}

function mobileCheckHB() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

hb_ran = false;
checkHBUnits();
// if(window.location.href == "https://m.sakshi.com/"){
  // addNewBotAdMobile();
// }
// else{
  // checkHBUnits();
// }
