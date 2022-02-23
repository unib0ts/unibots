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

// var cachebuster = parseInt((Math.round(new Date().getTime() / 1000))/10000)*10000
// url = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/coronaWidget220/script.js?cb='+cachebuster;
// // url = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/sakshipost/script.js?cb='+cachebuster;
// // url = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/olympicWidget13/script.js?cb='+cachebuster;
// s3 = document.createElement('script');
// s3.src = url;
// s3.async = "async";
// s3.type = "text/javascript";
// document.getElementsByTagName('head')[0].appendChild(s3);

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
      code: '/21928950349,22666385065/sakshipost_nb_320x50',
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
        // { bidder: 'appnexus', params: { placementId: '19056673' } },
        // { bidder: 'oftmedia', params: { placementId: '20846125' } }
      ]
    },
    {
      code: '/21928950349,22666385065/sakshipost_nb_320x50',
      mediaTypes: {
        banner: {
          sizes: div_1_sizes
        }
      },
      bids: [
        // { bidder: 'appnexus', params: { placementId: '19056673' } }, /* one placementId for all sizes  my appnexus bidder */
        // { bidder: 'oftmedia', params: { placementId: '18778196' } },
        // { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        // { bidder: 'emx_digital', params: { tagid: '97515' } }, /* sizeless */
        // { bidder: 'sovrn', params: {tagid: '789453'} },
        // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        // { bidder: 'ucfunnel', params: { adid : 'ad-47B468D22A6D9794F698A3DA892AE34'} },
        // { bidder: 'nobid', params: { siteId: '21987177881' } },
        // { bidder: 'openx', params: {unit: '544005773', delDomain: 'yieldbird-d.openx.net'} },
        // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'rubicon', params: { accountId: '23976', siteId: '400078', zoneId: '2250744'} },
        // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'adtelligent', params: { aid: 726034 } },
        // // // { bidder: 'criteointl', params: {networkId: '10545'} },
        // // // // {bidder: 'dailyhunt', params: {placement_id: 1, publisher_id: 6, partner_name: 'Sakshi'} },
        // // // //{ bidder: 'adsolut', params: { zoneId: '107071', host: 'cpm.adsolut.in' } },
        // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3265017'} },
        // { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'} },
        // // // // { bidder: 'rubicon', params: { accountId: '11734', siteId: '323846', zoneId: '1680740' } },
        // // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
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
    rubicon: {singleRequest: true},
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
   // ubpbjs.requestBids({
   //     bidsBackHandler: initAdserver,
   //     timeout: PREBID_TIMEOUT,
   //     labels: [GEO_CODE],
   // });
});

  // in case ubpbjs doesn't load
  // setTimeout(function() {
  //     initAdserver();
  // }, FAILSAFE_TIMEOUT);
}

var s0 = document.createElement('script');
s0.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
s0.async = "async";
document.getElementsByTagName('head')[0].appendChild(s0);

googletag.cmd.push(function() {
  googletag.defineSlot('/1062118/Unibot_Count_Pixel', [1, 1], 'div-gpt-ad-1638776087773-0').addService(googletag.pubads());
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
});

var ub_div1 = document.createElement('div');
ub_div1.id = "div-gpt-ad-1638776087773-0";
ub_div1.innerHTML =  "<script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1638776087773-0'); });</script>";
document.getElementsByTagName('body')[0].appendChild(ub_div1);

var ubsmall_slot1;
function addNewsBotAd(){
  // changeConfigToUSD();
  googletag.cmd.push(function() {
      ubsmall_slot1 = googletag.defineSlot('/21928950349,22666385065/sakshipost_nb_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
      googletag.pubads().collapseEmptyDivs(true);
      googletag.pubads().setCentering(true);
      googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot.getAdUnitPath() === '/21928950349,22666385065/sakshipost_nb_320x50') {
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

// function addNewsBotAd(){
//   // changeConfigToHB();
//   changeConfigToUSD();
//   googletag.cmd.push(function() {
//         ubsmall_slot1 = googletag.defineSlot('/21928950349,22666385065/sakshipost_nb_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
//         googletag.pubads().collapseEmptyDivs(true);
//         googletag.pubads().setCentering(true);
//         googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
//         googletag.pubads().enableSingleRequest();
//         googletag.enableServices();
//       // googletag.defineSlot('/21928950349/sakshi_cube_test_100x100', [100, 100], 'div-gpt-ad-1634370996769-0').addService(googletag.pubads());
//       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//         if (event.slot.getAdUnitPath() === '/21928950349,22666385065/sakshipost_nb_320x50') {
//           ub_checkAd1Rendered(event.slot);
//         }
//       });
//   });
// }

function initAdserver() {
    if (ubpbjs.initAdserverSet) return;
    ubpbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        ubpbjs.que.push(function() {
            ubpbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh(ubsmall_slot1);
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

function refreshBid(ubsmall_slot1) {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21928950349,22666385065/sakshipost_nb_320x50'],
		  bidsBackHandler: function() {
        googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh([ubsmall_slot1]);
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
function ub_checkAd1Rendered(ubsmall_slot1){
	adId1 = 'div-ub-1';
	var nodes = document.getElementById(adId1).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad1RefreshFlag != 1){
      setInterval(function() {
        ub_ad1RefreshFlag = 1;
        refreshBid(ubsmall_slot1);
      }, REFRESH_TIMEOUT);
    }
  }
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
  { bidder: 'appnexus', params: { placementId: '19056673' } }, /* one placementId for all sizes  my appnexus bidder */
  { bidder: 'oftmedia', params: { placementId: '20846125' } },
  // { bidder: 'unibots', params: {zoneId: 144261, host: 'cpm.unibots.in'} },
  {bidder: 'adtelligent',params:{aid:726034}},
  { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
  { bidder: 'emx_digital', params: { tagid: '97515' } }, /* sizeless */
  { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
  { bidder: 'nobid', params: { siteId: '21987177881' } },
  // // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
  // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  { bidder: 'rubicon', params: { accountId: '23976', siteId: '400078', zoneId: '2250744'} },
  // // { bidder: 'criteo', params: {networkId: '10542'} },
  // // { bidder: 'criteointl', params: {networkId: '10545'} },
  // { bidder: 'adkernel', params: {zoneId: '126007', host: 'cpm.fmlabsonline.com'} },
  { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'} },
];
var mappings_full_hb_config = {
  targetUnits: [
    'div-gpt-ad-1577438310277-0', //'/1062118/English_Mob_HP_LB_300x250',
    'div-gpt-ad-1577438408427-0',
    'div-gpt-ad-1577438483521-0',
    'div-gpt-ad-1577438859046-0',
    'div-gpt-ad-1577438921702-0',
    'div-gpt-ad-1577439115775-0',
    'div-gpt-ad-1577439183969-0',
    'div-gpt-ad-1577439038118-0',
    'div-gpt-ad-1577431487240-0',
    'div-gpt-ad-1577431585228-0',
    'div-gpt-ad-1577431643801-0',
    'div-gpt-ad-1577431768455-0',
    'div-gpt-ad-1577432095035-0',
    'div-gpt-ad-1577432266645-0',
    'div-gpt-ad-1577432982025-0',
    'div-gpt-ad-1577433033262-0',
    'div-gpt-ad-1577430006311-0',
    'div-gpt-ad-1577430161100-0',
    'div-gpt-ad-1577430459805-0',
    'div-gpt-ad-1577430748480-0',
    'div-gpt-ad-1577431165523-0',
    'div-gpt-ad-1577431145444-0',
    'div-gpt-ad-1577431340341-0',
    // 'div-ub-1', //'/21928950349,22666385065/sakshipost_nb_320x50',
  ],
  adUnitNames: [
    '/1062118/English_Mob_HP_LB_300x250',   //https://english.sakshi.com/ -
    '/1062118/English_Mob_Hp_300x250_1',
    '/1062118/English_Mob_Hp_300x250_2',
    '/1062118/English_Mob_Hp_300x250_3',
    '/1062118/English_Article_LB_300x250',
    '/1062118/English_Mob_MidArticle_300x250',
    '/1062118/English_Mob_EOA_300x250',
    '/1062118/English_Mob_Article_300x250_1',
    '/1062118/English_Article_LB_970x70',
    '/1062118/English_Article_Skin_Left_160x600',
    '/1062118/English_Article_Skin_Right_160x600',
    '/1062118/English_Article_300x600',
    '/1062118/English_Article_MidArticle_300x250_1',
    '/1062118/English_Article_EOA_300x250',
    '/1062118/English_Article_300x250_1',
    '/1062118/English_Article_300x250_2',
    '/1062118/English_HP_LB_970x90',
    '/1062118/English_HP_Skin_Left_160x600',
    '/1062118/English_HP_Skin_Right_160x600',
    '/1062118/English_HP_300x600',
    '/1062118/English_HP_970x90_1',
    '/1062118/English_HP_300x250_1',
    '/1062118/English_HP_300x250_2',
    '/1062118/English_Post_300X250_belowtopstories',
    '/1062118/English_Post_300X250_abovetechnologysection',
    '/1062118/English_Post_300X250_belowrichcards',
    '/1062118/English_Post_300X250_Inbetweenarticle',
    // '/21928950349,22666385065/sakshipost_nb_320x50',
  ],
  sizes: [
    [[336, 280], [300, 250]], //'/1062118/English_Mob_HP_LB_300x250',
    [[300, 250], [336, 280]],
    [[300, 250], [336, 280]],
    [[300, 250], [336, 280]],
    [[300, 250], [336, 280]],
    [[300, 250], [336, 280]],
    [[300, 250], [336, 280]],
    [[300, 250], [336, 280]],
    [[970, 90], [728, 90]],
    [[160, 600], [120, 600]],
    [[160, 600], [120, 600]],
    [[160, 600], [120, 600], [300, 600], [300, 250]],
    [[336, 280], [300, 250]],
    [[300, 250], [336, 280]],
    [[300, 250], [300, 100], [300, 50]],
    [[300, 50], [300, 250], [300, 100]],
    [[970, 90], [728, 90]],
    [[160, 600], [120, 600]],
    [[120, 600], [160, 600]],
    [[120, 600], [160, 600], [300, 250], [300, 600]],
    [[728, 90], [970, 90]],
    [[300, 50], [300, 100], [300, 250]],
    [[300, 250], [300, 150], [300, 50]],
    // [320, 50],  ///21928950349,22666385065/sakshipost_nb_320x50
  ],
  bids: [
    hb_full_common_bidders.concat([
      // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
   //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983532'} },
   //   { bidder: 'sovrn', params: {tagid: '744068'} },
   //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi', domain: 'https://prg8.smartadserver.com' } }
    ]), // //'/1062118/English_Mob_HP_LB_300x250',
    hb_full_common_bidders.concat([
      // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
   //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983533'} },
   //   { bidder: 'sovrn', params: {tagid: '744079'} },
   //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
    ]), ///1062118/English_Mob_Hp_300x250_1
    hb_full_common_bidders.concat([
      // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
   //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
   //   { bidder: 'sovrn', params: {tagid: '744058'} },
    ]), //1062118/English_Mob_Hp_300x250_2',
    hb_full_common_bidders.concat([
      // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
   //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
   //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
    ]), //1062118/English_Mob_Hp_300x250_3',
    hb_full_common_bidders.concat([
      // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
   //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983537'} },
   //   { bidder: 'sovrn', params: {tagid: '744067'} },
   //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233', domain: 'https://prg8.smartadserver.com' } }
    ]), ///1062118/English_Article_LB_300x250',
    hb_full_common_bidders.concat([
      // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
   //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
   //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
    ]),//1062118/English_Mob_MidArticle_300x250',
    hb_full_common_bidders.concat([
      // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
   //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983537'} },
   //   { bidder: 'sovrn', params: {tagid: '744067'} },
   //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233', domain: 'https://prg8.smartadserver.com' } }
    ]), ///1062118/English_Mob_EOA_300x250',
    hb_full_common_bidders.concat([
      // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983534'} },
    //   { bidder: 'sovrn', params: {tagid: '744054'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
    ]), //1062118/English_Mob_Article_300x250_1',
    hb_full_common_bidders.concat([
       // { bidder: 'dailyhunt', params: {placement_id: 139, publisher_id: 6, partner_name: 'sakshi'} },
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983535'} },
    //   { bidder: 'sovrn', params: {tagid: '744064'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
    ]), ///1062118/English_Article_LB_970x70',
    hb_full_common_bidders.concat([
          // { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983536'} },
    //   { bidder: 'sovrn', params: {tagid: '744057'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
    ]),  //1062118/English_Article_Skin_Left_160x600',
    hb_full_common_bidders.concat([
       // { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
    ]), ///1062118/English_Article_Skin_Right_160x600',
    hb_full_common_bidders.concat([
       // { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983530'} },
    //   { bidder: 'sovrn', params: {tagid: '744083'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233' } }
    ]), //1062118/English_Article_300x600',
    hb_full_common_bidders.concat([
       // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983532'} },
    //   { bidder: 'sovrn', params: {tagid: '744068'} },
    //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi', domain: 'https://prg8.smartadserver.com' } }
    ]), //1062118/English_Article_MidArticle_300x250_1',
    hb_full_common_bidders.concat([
       // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983533'} },
    //   { bidder: 'sovrn', params: {tagid: '744079'} },
    //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
    ]),  //1062118/English_Article_EOA_300x250',
    hb_full_common_bidders.concat([
       // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
    //   { bidder: 'sovrn', params: {tagid: '744058'} },
    ]),  //1062118/English_Article_300x250_1',
    hb_full_common_bidders.concat([
       // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
    ]), //1062118/English_Article_300x250_2',
    hb_full_common_bidders.concat([
       // { bidder: 'dailyhunt', params: {placement_id: 139, publisher_id: 6, partner_name: 'sakshi'} },
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983537'} },
    //   { bidder: 'sovrn', params: {tagid: '744067'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233', domain: 'https://prg8.smartadserver.com' } }
    ]), //1062118/English_HP_LB_970x90'
    hb_full_common_bidders.concat([
       // { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983534'} },
     //   { bidder: 'sovrn', params: {tagid: '744054'} },
     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
    ]),  //1062118/English_HP_Skin_Left_160x600
    hb_full_common_bidders.concat([
      // { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
   //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
   //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
    ]),  //1062118/English_HP_Skin_Right_160x600',
    hb_full_common_bidders.concat([
      // { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
   //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983537'} },
   //   { bidder: 'sovrn', params: {tagid: '744067'} },
   //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233', domain: 'https://prg8.smartadserver.com' } }
    ]), //1062118/English_HP_300x600',
    hb_full_common_bidders.concat([
      // { bidder: 'dailyhunt', params: {placement_id: 139, publisher_id: 6, partner_name: 'sakshi'} },
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983534'} },
    //   { bidder: 'sovrn', params: {tagid: '744054'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
    ]), //1062118/English_HP_970x90_1'
    hb_full_common_bidders.concat([
       // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983535'} },
    //   { bidder: 'sovrn', params: {tagid: '744064'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
    ]), ///1062118/English_HP_300x250_1',
    hb_full_common_bidders.concat([
       // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
    //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983536'} },
    //   { bidder: 'sovrn', params: {tagid: '744057'} },
    //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
    ]), //1062118/English_HP_300x250_2',
  //   hb_full_common_bidders.concat([
  //    	// { bidder: 'oftmedia', params: { placementId: '20846125' } },
  //      // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
  //     // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3265017'} },
  // //   { bidder: 'sovrn', params: {tagid: '744083'} },
  // //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233' } }
  //   ]),  //'/21928950349,22666385065/sakshipost_nb_320x50'
  ],
  isAP: [
    false,
    false, // '/1062118/sakshiNew_box1_300x250',
    false, // '/1062118/sakshiNew_box2_300x250',
    false, // '/1062118/sakshiNew_Box3_300x250',
    false, // '/1062118/fullstories_300x50_firstslot',
    false, // '/1062118/sakshiNew_HP', Originally APS tag. Removed because of conflict
    false, // '/1062118/sakshiNew_skin_Left',
    false, // '/1062118/sakshiNew_skin_right',
    false, // '/1062118/SakshiNew_HP_Box_300x600',
    false, // '/1062118/Desktop_HP_300x100',
    false, // '/1062118/sakshiNew_Artclepage_LB',
    false, // '/1062118/sakshiNew_Artclepage_Skin_Left',
    false, // '/1062118/sakshiNew_Artclepage_box1',
    false, // '/1062118/sakshiNew_Artclepage_Box2',
    false, // '/1062118/sakshiNew_Artclepage_INarticle',
    false, // '/1062118/Sakshi-Anchor_Ad',
    false, // '/1062118/Sakshi_Moblile_LB',
    false, // '/1062118/sakshiNEw_resp_Box2',
    false, // '/1062118/sakshiNEw_resp_Box3',
    false, // '/1062118/sakshiNEw_resp_Box4',
    false, // '/1062118/sakshiNEw_resp_Box5',
    false, // '/1062118/MobileMasthead_ROS_300x250',
    false, // '/1062118/sakshiNew_article_Box2',
    false, // '/1062118/sakshiNew_article_Box3',
    false, // '/1062118/sakshiNew_article_Box4',
    false, // '/1062118/sakshiNew_article_Box5',
    false, // '/1062118/320x50_Mobile_LB_New',
    false, // 'sakshinew_resp_Box1_entertainment_300x250',
    false, // '/1062118/MobileMasthead_HP_300x250'
    // false, // /21928950349,22666385065/sakshipost_nb_320x50
  ]
}
var mappings_extra_units_config ={
  adUnitNames: [
    '/1062118/Unibot_Count_Pixel',
    '/21928950349,22666385065/sakshipost_nb_320x50',
    '/1062118/English_Mob_HP_LB_300x250',   //https://english.sakshi.com/ -
    '/1062118/English_Mob_Hp_300x250_1',
    '/1062118/English_Mob_Hp_300x250_2',
    '/1062118/English_Mob_Hp_300x250_3',
    '/1062118/English_Article_LB_300x250',
    '/1062118/English_Mob_MidArticle_300x250',
    '/1062118/English_Mob_EOA_300x250',
    '/1062118/English_Mob_Article_300x250_1',
    '/1062118/English_Article_LB_970x70',
    '/1062118/English_Article_Skin_Left_160x600',
    '/1062118/English_Article_Skin_Right_160x600',
    '/1062118/English_Article_300x600',
    '/1062118/English_Article_MidArticle_300x250_1',
    '/1062118/English_Article_EOA_300x250',
    '/1062118/English_Article_300x250_1',
    '/1062118/English_Article_300x250_2',
    '/1062118/English_HP_LB_970x90',
    '/1062118/English_HP_Skin_Left_160x600',
    '/1062118/English_HP_Skin_Right_160x600',
    '/1062118/English_HP_300x600',
    '/1062118/English_HP_970x90_1',
    '/1062118/English_HP_300x250_1',
    '/1062118/English_HP_300x250_2',
    '/1062118/English_Post_300X250_belowtopstories',
    '/1062118/English_Post_300X250_abovetechnologysection',
    '/1062118/English_Post_300X250_belowrichcards',
    '/1062118/English_Post_300X250_Inbetweenarticle',
  ]
}
var mappings_extra_units = {
  slots: [],
  adUnitNames:[]
}

function checkHBUnits(){
  addNewsBotAd();
  // changeConfigToHB();
  callMapUnits();

  // setTimeout(function() {
  //     initAdserver_hb_full();
  // }, FAILSAFE_TIMEOUT);
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
  googletag.pubads().refresh(mappings_extra_units.slots);
  // ubpbjs.que.push(function(){
  //   ubpbjs.requestBids({
  //     timeout: PREBID_TIMEOUT,
  //     // adUnits: adUnits_full_hb,
  //     adUnitCodes: adCode,
  //     bidsBackHandler: function() {
  //       ubpbjs.initAdserverSetHB = true;
  //       googletag.cmd.push(function() {
  //         ubpbjs.que.push(function() {
  //             ubpbjs.setTargetingForGPTAsync();
  //             // requestManager.prebid = true;
  //             // biddersBack();
  //             googletag.pubads().refresh(mappings_extra_units.slots);
  //         });
  //       });
  //     }
  //   });
  // });
}

// function locate_googleSlot(targetId){
//   tempSlots = googletag.pubads().getSlots();
//   var ub_hb_slot;
//   len = tempSlots.length;
//   for(var i=0; i<len; i++){
//     id = tempSlots[i].getAdUnitPath();
//     if(targetId == id){
//       ub_hb_slot = tempSlots[i];
//       break;
//     }
//   }
//   return ub_hb_slot;
// }

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
      // if(mappings_full_hb_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())){
      //   index = mappings_full_hb_config.adUnitNames.indexOf(x[i].getSlotId().getAdUnitPath());
      //   size_array = [];
      //   size_temp_array = googletag.pubads().getSlots()[i].getSizes();
      //   for(j=0;j<size_temp_array.length;j++){
      //     length = size_temp_array[j][Object.keys(size_temp_array[j])[0]];
      //      height = size_temp_array[j][Object.keys(size_temp_array[j])[1]];
      //     temp_array = [length, height];
      //     size_array.push(temp_array);
      //   }
      //
      //   adUnitTemp = {
      //     code: x[i].getSlotId().getAdUnitPath(),
      //     mediaTypes: {
      //         banner: {
      //             sizes: size_array
      //         }
      //     },
      //     bids: mappings_full_hb_config.bids[index]
      //   };
      //   // adUnitTemp = {
      //   //   code: mappings_full_hb_config.adUnitNames[index],
      //   //   mediaTypes: {
      //   //       banner: {
      //   //           sizes: mappings_full_hb_config.sizes[index]
      //   //       }
      //   //   },
      //   //   bids: mappings_full_hb_config.bids[index]
      //   // };
      //   adUnits_full_hb.push(adUnitTemp);
      //   mapping_full_hb.slots.push(x[i]);
      //   mapping_full_hb.slotNumbers.push(i+1);
      //   // mapping_full_hb.slotNumbers.push(index+1);
      //   mapping_full_hb.adCode.push(x[i].getSlotId().getAdUnitPath());
      //   // mapping_full_hb.adCode.push(mappings_full_hb_config.adUnitNames[index]);
      //   // mapping_full_hb.sizes.push(mappings_full_hb_config.sizes[index]);
      //   mapping_full_hb.sizes.push(size_array);
      //
      //   if(mappings_full_hb_config.isAP[index]){
      //     apSlotTemp = {
      //       // slotID: mappings_full_hb_config.targetUnits[index],
      //       // slotName: mappings_full_hb_config.adUnitNames[index],
      //       // sizes: mappings_full_hb_config.sizes[index]
      //
      //       slotID: googletag.pubads().getSlots()[i].getSlotId().getDomId(),
      //       slotName: x[i].getSlotId().getAdUnitPath(),
      //       sizes: size_array
      //     }
      //     apSlots.push(apSlotTemp);
      //   }
      // }
       if(mappings_extra_units_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())){
        mappings_extra_units.slots.push(x[i]);
        mappings_extra_units.adUnitNames.push(x[i]);
      }
    }

    // adUnitTemp1 = {
    //   code: '/21928950349,22666385065/sakshipost_nb_320x50',
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
    //     { bidder: 'oftmedia', params: { placementId: '20846125' } }
    //   ]
    // }
    // adUnits_full_hb.push(adUnitTemp1);

    // callAPStagBids();
    // callFullHBAds(mapping_full_hb.adCode, mapping_full_hb.slots);
    callExtraHBAds(mappings_extra_units.adUnitNames, mappings_extra_units.slots);
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
