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
               sid:'38', // Same seller_id for the publisher in sellers.json
               hp:1
             }
          ],
     }
});
apSlots = []

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

var div_1_sizes = [320, 50];
var div_2_sizes = [[300, 250], [336, 280]];
var div_3_sizes = [[300, 250], [336, 280]];
var div_4_sizes = [[300, 250], [336, 280]];

var adUnits = [
    {
        code: '/21928950349,22623748747/mangalam.com_nb_320x50',
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
          // { bidder: 'appnexus', params: { placementId: '19056049' } }, /* one placementId for all sizes  my appnexus bidder */
          // { bidder: 'oftmedia', params: { placementId: '20846125' } }
        ]
    },
    {
        code: '/21928950349,22623748747/mangalam.com_nb_320x50',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
        	{ bidder: 'appnexus', params: { placementId: '19056049' } }, /* one placementId for all sizes  my appnexus bidder */
        	{ bidder: 'oftmedia', params: { placementId: '20846125' } },
        	{ bidder: '33across', params: { siteId : 'a_OZjGBuar6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        	{ bidder: 'emx_digital', params: { tagid: '97492' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '718927'} },
          { bidder: 'nobid', params: { siteId : '22045890860'} },
          { bidder: 'openx', params: {unit: '543530446', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        	{ bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
        	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          // { bidder: 'openx', params: {unit: '541046186', delDomain: 'yieldbird-d.openx.net'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'adkernel', params: {zoneId: '133841', host: 'cpm.fmlabsonline.com'} },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2963245'} },
          { bidder: 'smartadserver', params: { siteId: '362130', pageId: '1289631', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          { bidder: 'ucfunnel', params: { adid : 'ad-273677B4238BDB2809D798E468627E8'} },
          //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323750', zoneId: '1680366'} }
        ]
    }
];

if(document.getElementById('unibot1')){

  adUnits1 = {
      code: '/21959913182/mangalam.com_hb_300x250_1',
      mediaTypes: {
          banner: {
              sizes: div_2_sizes
          }
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: '19056049' } }, /* one placementId for all sizes  my appnexus bidder */
        //{ bidder: 'oftmedia', params: { placementId: '18778196' } },
        { bidder: '33across', params: { siteId : 'a_OZjGBuar6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        { bidder: 'emx_digital', params: { tagid: '97492' } }, /* sizeless */
        { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        { bidder: 'nobid', params: { siteId: '22045890860' } },
        { bidder: 'sovrn', params: {tagid: '867134'} },
        { bidder: 'ucfunnel', params: { adid : 'ad-BE78EE8742646D8B17DE77BE46BE299B'} },
        { bidder: 'openx', params: {unit: '543530091', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        { bidder: 'smartadserver', params: { siteId: '362130', pageId: '1289631', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182871'} },
        { bidder: 'adkernel', params: {zoneId: '133841', host: 'cpm.fmlabsonline.com'} },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
      ]
  }
  adUnits.push(adUnits1);
}
if(document.getElementById('unibot2')){

  adUnits1 = {
      code: '/21959913182/mangalam.com_hb_300x250_2',
      mediaTypes: {
          banner: {
              sizes: div_3_sizes
          }
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: '19056049' } }, /* one placementId for all sizes  my appnexus bidder */
        //{ bidder: 'oftmedia', params: { placementId: '18778196' } },
        { bidder: '33across', params: { siteId : 'a_OZjGBuar6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        { bidder: 'emx_digital', params: { tagid: '97492' } }, /* sizeless */
        { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        { bidder: 'nobid', params: { siteId: '22045890860' } },
        { bidder: 'sovrn', params: {tagid: '867135'} },
        { bidder: 'ucfunnel', params: { adid : 'ad-34B8448B698A382EF3BE69782DDD4DDD'} },
        { bidder: 'openx', params: {unit: '543530092', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        { bidder: 'smartadserver', params: { siteId: '362130', pageId: '1289631', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182872'} },
        { bidder: 'adkernel', params: {zoneId: '133841', host: 'cpm.fmlabsonline.com'} },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
      ]
  }
  adUnits.push(adUnits1);
}
if(document.getElementById('unibot3')){

  adUnits1 = {
      code: '/21959913182/mangalam.com_hb_300x250_3',
      mediaTypes: {
          banner: {
              sizes: div_4_sizes
          }
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: '19056049' } }, /* one placementId for all sizes  my appnexus bidder */
        //{ bidder: 'oftmedia', params: { placementId: '18778196' } },
        { bidder: '33across', params: { siteId : 'a_OZjGBuar6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        { bidder: 'emx_digital', params: { tagid: '97492' } }, /* sizeless */
        { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        { bidder: 'nobid', params: { siteId: '22045890860' } },
        { bidder: 'sovrn', params: {tagid: '867136'} },
        { bidder: 'adkernel', params: {zoneId: '133841', host: 'cpm.fmlabsonline.com'} },
        { bidder: 'ucfunnel', params: { adid : 'ad-AA7BAAB7648D23B8184AB7E963494498'} },
        { bidder: 'openx', params: {unit: '543530094', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        { bidder: 'smartadserver', params: { siteId: '362130', pageId: '1289631', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182873'} },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
      ]
  }
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
  renderedFlag: []
};

function ub_checkAdRendered(adId, ub_slot, adCode){
  ub_slotNum = ub_slot[ub_slot.length-1];
  if(typeof mappings.renderedFlag[ub_slotNum] || !mappings.renderedFlag[ub_slotNum]){
    adId1 = adId;
    var nodes = document.getElementById(adId1).childNodes[0].childNodes;
    if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      setTimeout(function() {
        refreshBid(ub_slot, adCode);
      }, REFRESH_TIMEOUT);
      mappings.renderedFlag[ub_slotNum] = true;
    }
    else {
      ub_passback();
    }
  }
}

function ub_passback() {
  if(typeof colombia == 'undefined'){
  var colombia = colombia || {};
  colombia.fns = colombia.fns || [];
    (function() {
        var cads = document.createElement("script");
        cads.async = true;
        cads.type = "text/javascript";
        cads.src = "https://static.clmbtech.com/ase/91170/3748/c1.js";
        document.getElementsByTagName('head')[0].appendChild(cads);
    })();
  }

  ub_passback = document.createElement("div");
  ub_passback.setAttribute("style", "float:left;min-height:2px;width:100%;");
  ub_passback.setAttribute("data-position", "1");
  ub_passback.setAttribute("data-section", "StroyPage");
  ub_passback.setAttribute("class", "colombia");

  if (!mobileCheck()) {
      ub_passback.setAttribute("data-ua", "D");
      ub_passback.setAttribute("data-slot", "460177");
      ub_passback.setAttribute("id", "div-clmb-ctn-460177-1");
      ub_sticky = document.getElementById('adSmall');
      ub_sticky.appendChild(ub_passback);
  }else {
    ub_passback.setAttribute("data-ua", "M");
    ub_passback.setAttribute("data-slot", "460178");
    ub_passback.setAttribute("id", "div-clmb-ctn-460178-1");
    ub_sticky = document.getElementById('adSmall');
    ub_sticky.appendChild(ub_passback);
  }
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
      requestManager.prebid = true;
      biddersBack();
      googletag.pubads().refresh(mappings.slots);
    });
  });
  // callAds(bids);
}

// function callAds(bids = {}) {
//   let ubBidscheckFlag = false;
//   if (Object.keys(bids).length === 0 && bids.constructor === Object){}
//   else {
//     bids[Object.keys(bids)].bids.forEach((bid) => {
//       if (bid.cpm > 0.01) {
//         ubBidscheckFlag = true;
//       }
//     })
//   }
//
//   if (ubBidscheckFlag) {
//     googletag.cmd.push(function () {
//       ubpbjs.que.push(function () {
//         ubpbjs.setTargetingForGPTAsync();
//         googletag.pubads().refresh(mappings.slots);
//         console.log('HB server request');
//       });
//     });
//   }
//   else{
//     googletag.cmd.push(function () {
//       googletag.pubads().refresh(mappings.slots);
//       console.log('Only Google server request');
//     });
//   }
// }


var botmanCalled = false;
var userStatusBM = '';
function callBotman(){
  if(userStatusBM == ''){
    var request = new XMLHttpRequest();
    var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=mangalam';
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
    // googletag.pubads().enableLazyLoad({
    //           fetchMarginPercent: 200,
    //           renderMarginPercent: 100,
    //           mobileScaling: 2.0
    //         });
    googletag.enableServices();
  });
}

if (document.getElementById('div-ub-1')){
  apSlotTemp = {
    slotID: 'div-ub-1',
    slotName: '/21928950349,22623748747/mangalam.com_nb_320x50',
    sizes: mappings.sizes,
  }
  apSlots.push(apSlotTemp);

  mappings.slotNumbers.push(1);
  mappings.adCode.push('/21928950349,22623748747/mangalam.com_nb_320x50');
  mappings.sizes.push(div_1_sizes);
  mappings.adId.push('div-ub-1');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAdRendered('div-ub-1', ub_slot1, ['/21928950349,22623748747/mangalam.com_nb_320x50']);
      }
    });
  });
}
if (document.getElementById('unibot1')){
  apSlotTemp = {
    slotID: 'div-gpt-ad-1598766449306-0',
    slotName: '/21959913182/mangalam.com_hb_300x250_1',
    sizes: mappings.sizes,
  }
  apSlots.push(apSlotTemp);

  mappings.slotNumbers.push(2);
  mappings.adCode.push('/21959913182/mangalam.com_hb_300x250_1');
  mappings.sizes.push(div_2_sizes);
  mappings.adId.push('div-gpt-ad-1598766449306-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot2) {
        ub_checkAdRendered('div-gpt-ad-1598766449306-0', ub_slot2, ['/21959913182/mangalam.com_hb_300x250_1']);
      }
    });
  });
}
if (document.getElementById('unibot2')){
  apSlotTemp = {
    slotID: 'div-gpt-ad-1598766482812-0',
    slotName: '/21959913182/mangalam.com_hb_300x250_2',
    sizes: mappings.sizes,
  }
  apSlots.push(apSlotTemp);

  mappings.slotNumbers.push(3);
  mappings.adCode.push('/21959913182/mangalam.com_hb_300x250_2');
  mappings.sizes.push(div_3_sizes);
  mappings.adId.push('div-gpt-ad-1598766482812-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot3) {
        ub_checkAdRendered('div-gpt-ad-1598766482812-0', ub_slot3, ['/21959913182/mangalam.com_hb_300x250_2']);
      }
    });
  });
}
if (document.getElementById('unibot3')){
  apSlotTemp = {
    slotID: 'div-gpt-ad-1598766502024-0',
    slotName: '/21959913182/mangalam.com_hb_300x250_3',
    sizes: mappings.sizes,
  }
  apSlots.push(apSlotTemp);

  mappings.slotNumbers.push(4);
  mappings.adCode.push('/21959913182/mangalam.com_hb_300x250_3');
  mappings.sizes.push(div_4_sizes);
  mappings.adId.push('div-gpt-ad-1598766502024-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot4) {
        ub_checkAdRendered('div-gpt-ad-1598766502024-0', ub_slot4, ['/21959913182/mangalam.com_hb_300x250_3']);
      }
    });
  });
}

callAPStagBids(); //Ap part

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

function mainHbRun(){
  ubpbjs.que.push(function() {
      ubpbjs.aliasBidder('criteo','criteointl');
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
                  // rid: "73921627578122922433w1",
                  hp:1
                },
               // {
               //   asi:"unibots.in",   //reseller
               //   sid:"38",          //seller_id
               //   // rid:"BidRequest2",
               //   hp:1
               // }
              ]
            }
          }
        }
      });
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
               sid:"38",
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
        publisherDomain: 'https://www.mangalam.com/',
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
        // ubpbjs.initAdserverSetHB = true;
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
