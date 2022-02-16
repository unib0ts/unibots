//load apstag.js library
!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","https://c.amazon-adsystem.com/aax2/apstag.js");

var requestManager = {
    adserverRequestSent: false,
    aps: false,
    prebid: false
};

//initialize the apstag.js library on the page to allow bidding
apstag.init({

     pubID: '8282b9c6-324d-4939-b1ea-958d67a9e637',
     adServer: 'googletag',
     schain: {
          complete: 1,
          ver:'1.0',
          nodes: [
            {
               asi:'aps.amazon.com',
               sid:'121', // Same seller_id for the publisher in sellers.json
               hp:1
             }
          ],
     }
});
apSlots = []

if (!mobileCheck()) {
    var div_1_sizes = [728, 90];
}else {
     var div_1_sizes = [320, 50];
}
var adUnits = [];

var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;

  var s0 = document.createElement("script");
  s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
  s0.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(s0);

  var s1 = document.createElement("script");
  s1.async = "async";
  s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
  s1.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(s1);

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

  var mybotstyleSheet='.ubinimagead_wrap{position:absolute;bottom:0;overflow:hidden;background:rgba(255,255,255,.5); z-index: 999;left:50%;align-items:center;transform:translateX(-50%);} .ubclosebtn_inimg{left:0;top:0;cursor:pointer;background:#ebebeb;padding:0px 2px;font-weight:700;position:absolute;font-size: 14px;line-height: 14px;}';
  // .ub_adinimge{width:100%;overflow-x:scroll}

  var css = document.createElement("style");
  css.type = "text/css";
  css.appendChild(document.createTextNode(mybotstyleSheet));
  document.getElementsByTagName("head")[0].appendChild(css);


if(document.querySelectorAll('.image_listical')){
   inimagead_target('.image_listical');
}

if(document.querySelector('.image_listical')){
  adUnits1 =
  {
      code: '/21928950349,22560027500/socialnews.xyz_ipl_320x50',
      mediaTypes: {
          banner: {
              sizes: div_1_sizes
          }
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: '21356510' } }, /* one placementId for all sizes  my appnexus bidder */
         	{ bidder: 'oftmedia', params: { placementId: '20846125' } },
         	// { bidder: '33across', params: { siteId : 'cAqsGUWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
         	// { bidder: 'emx_digital', params: { tagid: '107931' } }, /* sizeless */
           { bidder: 'sovrn', params: {tagid: '884156'} },
           { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3581651'} },
           { bidder: 'openx', params: {unit: '544022831', delDomain: 'unibots-d.openx.net'}},
         	{ bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
         	// // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
           { bidder: 'nobid', params: { siteId : '22364664636'} },
           // { bidder: 'criteo', params: {networkId: '10542'} },
           // { bidder: 'criteointl', params: {networkId: '10545'} },
           { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
           { bidder: 'smartadserver', params: { siteId: '404715', pageId: '1370499', formatId: '93231', domain: 'https://prg8.smartadserver.com' }},
           // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
           { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
           // { bidder: 'ucfunnel', params: { adid : 'ad-47B47763AA7B63B903E898272397323'} },
           //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
           // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
      ]
  };
  adUnits.push(adUnits1);

  adUnits1 = {
    code: '/21928950349,22560027500/ragalahari.com_NB_728x90',
    mediaTypes: {
      banner: {
        sizes: div_1_sizes
      }
    },
    bids: [
      { bidder: 'appnexus', params: { placementId: '19056651' } }, /* one placementId for all sizes  my appnexus bidder */
      { bidder: 'sovrn', params: {tagid: '736462'} },
      //{ bidder: 'oftmedia', params: { placementId: '18677505' } },
      { bidder: '33across', params: { siteId : 'bNbIJABuar6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
      { bidder: 'emx_digital', params: { tagid: '97514' } }, /* sizeless */
      // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
      { bidder: 'openx', params: {unit: '543851457', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2934577'} },
      { bidder: 'nobid', params: { siteId : '22049999731'} },
      // { bidder: 'criteo', params: {networkId: '10542'} },
      // { bidder: 'criteointl', params: {networkId: '10545'} },
        { bidder: 'ucfunnel', params: { adid : 'ad-772877476E3A87DEC24E6E28438B499'} },
        { bidder: 'smartadserver', params: { siteId: '362144', pageId: '1289645', formatId: '93233', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
      { bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
      { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
      { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
      // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'rubicon', params: {accountId: '23976', siteId: '400078', zoneId: '2265424'} }
    ]
    }
  adUnits.push(adUnits1);
}

function ubinimgagead() {
    document.querySelector(".ubinimagead_wrap").style.display = "none";
}

function inimagead_target(imagetargetdiv) {
  ub_targetimages = document.querySelectorAll(imagetargetdiv);

  for (i = 0; i < ub_targetimages.length; i++) {
    inimagead_container = document.createElement('div');
    inimagead_container.className = 'ubinimagead_wrap';
    inimagead_container.innerHTML = '<div class="ubclosebtn_inimg" onclick="ubinimgagead()">\u0078</div><div class="ub_adinimge"></div>';

    ub_targetimages[i].parentNode.appendChild(inimagead_container);
    ubinimgage_adId = document.createElement('div');
    ubinimgage_adId.id = 'ub-inimage'+i;
    document.querySelectorAll('.ub_adinimge')[i].appendChild(ubinimgage_adId)
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

var mappings = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  adId: [],
  renderedFlag: [false]
};


// apSlotTemp = {
//   // slotID: mappings_full_hb_config.targetUnits[index],
//   // slotName: mappings_full_hb_config.adUnitNames[index],
//   // sizes: mappings_full_hb_config.sizes[index]
//
//   slotID: 'div-gpt-ad-1619515885003-0',
//   slotName: '/21928950349,22560027500/socialnews.xyz_ipl_320x50',
//   sizes: mappings.sizes,
// }
// apSlots.push(apSlotTemp);

function ub_checkAdRendered(adId, ub_slot, adCode){
  ub_slotNum = ub_slot[ub_slot.length-1]-1;
  if(!mappings.renderedFlag[ub_slotNum]){
    adId1 = adId;
    var nodes = document.getElementById(adId1).childNodes[0].childNodes;
    if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      setTimeout(function() {
        refreshBid(ub_slot, adCode);
      }, REFRESH_TIMEOUT);
      mappings.renderedFlag[ub_slotNum] = true;
    }
  }
}

var botmanCalled = false;
var userStatusBM = '';
function callBotman(){
  if(userStatusBM == ''){
    var request = new XMLHttpRequest();
    var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=socialnews';
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
    // googletag.pubads().refresh(mappings.slots);
}

function refreshBid(ub_slot, adCode) {
  ubpbjs.que.push(function () {
    ubpbjs.requestBids({
      timeout: PREBID_TIMEOUT,
      adUnitCodes: adCode,
      bidsBackHandler: function (bids) {
        googletag.cmd.push(function () {
          ubpbjs.que.push(function () {
            ubpbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh([ub_slot]);
            // console.log('HB server request');
          });
        });
        // callAds(bids);
      }
    });
  });
}

function initAdserver() {
  if (ubpbjs.initAdserverSet) return;
  ubpbjs.initAdserverSet = true;
  googletag.cmd.push(function () {
    ubpbjs.que.push(function () {
      ubpbjs.setTargetingForGPTAsync();
      // requestManager.prebid = true;
      // biddersBack();
      googletag.pubads().refresh(mappings.slots);
    });
  });
  // callAds(bids);
}


function callAds(bids = {}) {
  let ubBidscheckFlag = false;
  if (Object.keys(bids).length === 0 && bids.constructor === Object){}
  else {
    bids[Object.keys(bids)].bids.forEach((bid) => {
      if (bid.cpm > 0.01) {
        ubBidscheckFlag = true;
      }
    })
  }

  if (ubBidscheckFlag) {
    googletag.cmd.push(function () {
      ubpbjs.que.push(function () {
        ubpbjs.setTargetingForGPTAsync();
        googletag.pubads().refresh(mappings.slots);
        console.log('HB server request');
      });
    });
  }
  else{
    googletag.cmd.push(function () {
      googletag.pubads().refresh(mappings.slots);
      console.log('Only Google server request');
    });
  }
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

if (document.querySelector('.image_listical')) {
  mappings.slotNumbers.push(1);
  mappings.adCode.push('/21928950349,22560027500/socialnews.xyz_ipl_320x50');
  mappings.sizes.push(div_1_sizes);
  mappings.adId.push('ub-inimage0');
  apSlotTemp = {
    slotID: mappings.adId[0],
    slotName: mappings.adCode[0],
    sizes: mappings.sizes
  }
  // apSlots.push(apSlotTemp);
  // callAPStagBids(); //Ap part
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAdRendered('ub-inimage0', ub_slot1, ['/21928950349,22560027500/socialnews.xyz_ipl_320x50']);
      }
    });
  });

  mappings.slotNumbers.push(1);
  mappings.adCode.push('/21928950349,22560027500/ragalahari.com_NB_728x90');
  mappings.sizes.push(div_1_sizes);
  mappings.adId.push('ub-inimage1');
  // apSlotTemp = {
  //   slotID: mappings.adId[0],
  //   slotName: mappings.adCode[0],
  //   sizes: mappings.sizes
  // }
  // apSlots.push(apSlotTemp);
  // callAPStagBids(); //Ap part
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot2) {
        ub_checkAdRendered('ub-inimage1', ub_slot2, ['/21928950349,22560027500/ragalahari.com_NB_728x90']);
      }
    });
  });
}

if(typeof googletag.defineSlot === "function"){
  googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
  googlePush();
}
else{
  // setTimeout(function(){
    googletag.cmd.push(function() {
      googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
      googlePush();
    });
  // }, 500);
}

function mainHbRun(){
  ubpbjs.que.push(function() {
      // ubpbjs.setBidderConfig({
      // bidders: ['emx_digital'],   // can list more bidders here if they share the same config
      // config: {
      //   schain: {
      //     validation: "relaxed",
      //     config: {
      //       ver:"1.0",
      //       complete: 1,
      //       nodes: [
      //         {
      //           asi:"unibots.in",   //directseller
      //           sid:"1504",     //seller_id
      //           hp:1
      //         },
      //       ]
      //     }
      //   }
      // }
      // });
      ubpbjs.addAdUnits(adUnits);

      ubpbjs.bidderSettings = {
        'appnexus': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.86; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'pubmatic': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.74; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'rubicon': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.75; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'openx': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.75; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'criteo': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.75; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'nobid': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'oftmedia': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.80; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'sovrn': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.81; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },

        '33across': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'emx_digital': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'rhythmone': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'eplanning': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'adyoulike': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'smartadserver': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'onetag': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'ucfunnel': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } }
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
               sid:"121",
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
        publisherDomain: 'https://www.socialnews.xyz/',
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

function callAPSAds(adCode, ub_slot){
  ubpbjs.que.push(function(){
    ubpbjs.requestBids({
      timeout: PREBID_TIMEOUT,
      adUnits: adUnits,
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

function callAPStagBids(){
  apstag.fetchBids({
    slots: apSlots,
     timeout: 2000
  },function(bids) {
          googletag.cmd.push(function() {
              apstag.setDisplayBids();
              requestManager.aps = true;
              biddersBack();
          });
      }
  );
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
        googletag.pubads().refresh(mappings.slots);
    });
}
