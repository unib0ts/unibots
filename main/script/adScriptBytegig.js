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
    "increment" : 0.01  // from $0 to $20, 1-cent increments
    }]
};

var div_1_sizes = [[320, 100], [728, 90], [468, 60], [970, 90]];
var div_2_sizes = [[200, 200], [250, 250], [300, 250]];
var div_3_sizes = [[250, 250], [300, 250], [200, 200]];
var div_4_sizes = [[728, 90], [468, 60]];
var div_5_sizes = [[468, 60], [728, 90]];
var div_6_sizes = [[468, 60], [728, 90], [320, 100]];
var div_7_sizes = [320, 50];
var div_8_sizes = [[320, 50], [300, 50], [320, 100]];
var div_9_sizes = [[320, 100], [300, 50], [320, 50]];
var adUnits = [];

if (typeof mobileCheck === "function") {
  if (!mobileCheck()) {
    if (document.querySelector('.home_page_ad')) {
      adUnits1 =
        {
            code: '/21956916242/bytegig.com_970x90',
            mediaTypes: {
                banner: {
                    sizes: div_1_sizes
                }
            },
            bids: [
             { bidder: 'appnexus', params: { placementId: '19425280' } }, /* one placementId for all sizes  my appnexus bidder */
             { bidder: 'sovrn', params: {tagid: '735407'} },
             // { bidder: 'oftmedia', params: { placementId: '18671523' } },
             { bidder: '33across', params: { siteId : 'a-WKrcWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
             // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
              // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
             { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
             // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
              { bidder: 'nobid', params: { siteId : '22049999650'} },
              { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
              // { bidder: 'criteo', params: {networkId: '10542'} },
              // { bidder: 'criteointl', params: {networkId: '10545'} },
              { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2996023'} },
              // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
              // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
            ]
        };
        adUnits.push(adUnits1);
    }
    if (document.getElementById('article_top_ad')) {
      adUnits1 =
        {
          code: '/21956916242/bytegig.com_728x90',
          mediaTypes: {
              banner: {
                  sizes: div_4_sizes
              }
          },
          bids: [
           { bidder: 'appnexus', params: { placementId: '19425280' } }, /* one placementId for all sizes  my appnexus bidder */
           // { bidder: 'oftmedia', params: { placementId: '18671523' } },
           { bidder: '33across', params: { siteId : 'a-WKrcWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
           // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            { bidder: 'sovrn', params: {tagid: '735410'} },
            // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
           { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
           // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            { bidder: 'nobid', params: { siteId : '22049999650'} },
            // { bidder: 'criteo', params: {networkId: '10542'} },
            // { bidder: 'criteointl', params: {networkId: '10545'} },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2996020'} },
            // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
      adUnits.push(adUnits1);
    }
    if (document.getElementById('article_bottom_ad')) {
      adUnits1 =
        {
          code: '/21956916242/bytegig.com_728x90_2',
          mediaTypes: {
              banner: {
                  sizes: div_5_sizes
              }
          },
          bids: [
           { bidder: 'appnexus', params: { placementId: '19425280' } }, /* one placementId for all sizes  my appnexus bidder */
           // { bidder: 'oftmedia', params: { placementId: '18671523' } },
           { bidder: '33across', params: { siteId : 'a-WKrcWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
           // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            { bidder: 'sovrn', params: {tagid: '735411'} },
            // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
           { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
           // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            { bidder: 'nobid', params: { siteId : '22049999650'} },
            // { bidder: 'criteo', params: {networkId: '10542'} },
            // { bidder: 'criteointl', params: {networkId: '10545'} },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2996021'} },
            // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
      adUnits.push(adUnits1);
    }
    adUnits1 =
      {
          code: '/21956916242/bytegig.com_728x90_centersticky_desk',
          mediaTypes: {
              banner: {
                  sizes: div_6_sizes
              }
          },
          bids: [
           { bidder: 'appnexus', params: { placementId: '19425280' } }, /* one placementId for all sizes  my appnexus bidder */
           // { bidder: 'oftmedia', params: { placementId: '18671523' } },
           { bidder: '33across', params: { siteId : 'a-WKrcWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
           // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            { bidder: 'sovrn', params: {tagid: '735412'} },
            // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
           { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
           // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            { bidder: 'nobid', params: { siteId : '22049999650'} },
            // { bidder: 'criteo', params: {networkId: '10542'} },
            // { bidder: 'criteointl', params: {networkId: '10545'} },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2996022'} },
            // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
    adUnits.push(adUnits1);
  }
  else {
    if (document.getElementById('article_top_ad_m')) {
      adUnits1 =
        {
          code: '/21956916242/bytegig.com_320x100',
          mediaTypes: {
              banner: {
                  sizes: div_8_sizes
              }
          },
          bids: [
           // { bidder: 'appnexus', params: { placementId: '19287038' } }, /* one placementId for all sizes  my appnexus bidder */
           // { bidder: 'oftmedia', params: { placementId: '18671523' } },
           { bidder: '33across', params: { siteId : 'a-WKrcWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
           // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            // { bidder: 'sovrn', params: {tagid: '732823'} },
            // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
           { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
           // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            { bidder: 'nobid', params: { siteId : '22049999650'} },
            // { bidder: 'criteo', params: {networkId: '10542'} },
            // { bidder: 'criteointl', params: {networkId: '10545'} },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2934210'} },
            //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
      adUnits.push(adUnits1);
    }
    if (document.getElementById('article_bottom_ad_m')) {
      adUnits1 =
        {
          code: '/21956916242/bytegig.com_320x100_2',
          mediaTypes: {
              banner: {
                  sizes: div_9_sizes
              }
          },
          bids: [
           // { bidder: 'appnexus', params: { placementId: '19287038' } }, /* one placementId for all sizes  my appnexus bidder */
           // { bidder: 'oftmedia', params: { placementId: '18671523' } },
           { bidder: '33across', params: { siteId : 'a-WKrcWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
           // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            // { bidder: 'sovrn', params: {tagid: '732823'} },
            // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
           { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
           // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            { bidder: 'nobid', params: { siteId : '22049999650'} },
            // { bidder: 'criteo', params: {networkId: '10542'} },
            // { bidder: 'criteointl', params: {networkId: '10545'} },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2934210'} },
            //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
      adUnits.push(adUnits1);
    }
    adUnits1 =
        {
            code: '/21956916242/bytegig.com_320x50_centersticky_mob',
            mediaTypes: {
                banner: {
                    sizes: div_7_sizes
                }
            },
            bids: [
            	{ bidder: 'appnexus', params: { placementId: '19425280' } }, /* one placementId for all sizes  my appnexus bidder */
            	// { bidder: 'oftmedia', params: { placementId: '18671523' } },
            	{ bidder: '33across', params: { siteId : 'a-WKrcWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
            	// { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
              { bidder: 'sovrn', params: {tagid: '735413'} },
              // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
            	{ bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
            	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
              { bidder: 'nobid', params: { siteId : '22049999650'} },
              // { bidder: 'criteo', params: {networkId: '10542'} },
              // { bidder: 'criteointl', params: {networkId: '10545'} },
              { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
              { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2996019'} },
              //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
              // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
            ]
        };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('sidebar_first_ad')) {
    adUnits1 =
      {
        code: '/21956916242/bytegig.com_300x250',
        mediaTypes: {
            banner: {
                sizes: div_2_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19425280' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '735408'} },
         // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         { bidder: '33across', params: { siteId : 'a-WKrcWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
         // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
          // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22049999650'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2996017'} },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('sidebar_second_ad')) {
    adUnits1 =
      {
        code: '/21956916242/bytegig.com_300x250_2',
        mediaTypes: {
            banner: {
                sizes: div_3_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '19425280' } }, /* one placementId for all sizes  my appnexus bidder */
         // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         { bidder: '33across', params: { siteId : 'a-WKrcWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
         // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '735409'} },
          // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22049999650'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2996018'} },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
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



var slots = [], adCode = [], slotNumbers = [], sizes = [], adId = [];
var renderedFlag = [false, false, false, false, false, false, false, false, false];

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
   if (document.querySelector('.home_page_ad')) {
     slotNumbers.push(1);
     adCode.push('/21956916242/bytegig.com_970x90');
     sizes.push(div_1_sizes);
     adId.push('div-gpt-ad-1591009653748-0');
     googletag.cmd.push(function() {
         googletag.pubads().addEventListener('slotRenderEnded', function(event) {
           if (event.slot === ub_slot1) {
             ub_checkAdRendered('div-gpt-ad-1591009653748-0', ub_slot1, ['/21956916242/bytegig.com_970x90']);
           }
         });
     });
   }
   if (document.getElementById('article_top_ad')){
      slotNumbers.push(4);
      adCode.push('/21956916242/bytegig.com_728x90');
      sizes.push(div_4_sizes);
      adId.push('div-gpt-ad-1591009847109-0');
      googletag.cmd.push(function() {
          googletag.pubads().addEventListener('slotRenderEnded', function(event) {
            if (event.slot === ub_slot4) {
              ub_checkAdRendered('div-gpt-ad-1591009847109-0', ub_slot4, ['/21956916242/bytegig.com_728x90']);
            }
          });
      });
   }
   if (document.getElementById('article_bottom_ad')){
     slotNumbers.push(5);
     adCode.push('/21956916242/bytegig.com_728x90_2');
     sizes.push(div_5_sizes);
     adId.push('div-gpt-ad-1591009923725-0');
     googletag.cmd.push(function() {
         googletag.pubads().addEventListener('slotRenderEnded', function(event) {
           if (event.slot === ub_slot5) {
             ub_checkAdRendered('div-gpt-ad-1591009923725-0', ub_slot5, ['/21956916242/bytegig.com_728x90_2']);
           }
         });
     });
   }

   slotNumbers.push(6);
   adCode.push('/21956916242/bytegig.com_728x90_centersticky_desk');
   sizes.push(div_6_sizes);
   adId.push('div-gpt-ad-1591010094567-0');
   googletag.cmd.push(function() {
       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
         if (event.slot === ub_slot6) {
           ub_checkAdRendered('div-gpt-ad-1591010094567-0', ub_slot6, ['/21956916242/bytegig.com_728x90_centersticky_desk']);
         }
       });
   });
  }
  else {
    if (document.getElementById('article_top_ad_m')){
       slotNumbers.push(8);
       adCode.push('/21956916242/bytegig.com_320x100');
       sizes.push(div_8_sizes);
       adId.push('div-gpt-ad-1591376801195-0');
       googletag.cmd.push(function() {
           googletag.pubads().addEventListener('slotRenderEnded', function(event) {
             if (event.slot === ub_slot8) {
               ub_checkAdRendered('div-gpt-ad-1591376801195-0', ub_slot8, ['/21956916242/bytegig.com_320x100']);
             }
           });
       });
    }
    if (document.getElementById('article_bottom_ad_m')){
      slotNumbers.push(9);
      adCode.push('/21956916242/bytegig.com_320x100_2');
      sizes.push(div_9_sizes);
      adId.push('div-gpt-ad-1591376837536-0');
      googletag.cmd.push(function() {
          googletag.pubads().addEventListener('slotRenderEnded', function(event) {
            if (event.slot === ub_slot9) {
              ub_checkAdRendered('div-gpt-ad-1591376837536-0', ub_slot9, ['/21956916242/bytegig.com_320x100_2']);
            }
          });
      });
    }
   slotNumbers.push(7);
   adCode.push('/21956916242/bytegig.com_320x50_centersticky_mob');
   sizes.push(div_7_sizes);
   adId.push('div-gpt-ad-1591010157738-0');
   googletag.cmd.push(function() {
       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
         if (event.slot === ub_slot7) {
           ub_checkAdRendered('div-gpt-ad-1591010157738-0', ub_slot7, ['/21956916242/bytegig.com_320x50_centersticky_mob']);
         }
       });
   });
  }
  if (document.getElementById('sidebar_first_ad')){
   slotNumbers.push(2);
   adCode.push('/21956916242/bytegig.com_300x250');
   sizes.push(div_2_sizes);
   adId.push('div-gpt-ad-1591009710425-0');
   googletag.cmd.push(function() {
       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
         if (event.slot === ub_slot2) {
           ub_checkAdRendered('div-gpt-ad-1591009710425-0', ub_slot2, ['/21956916242/bytegig.com_300x250']);
         }
       });
   });
  }
  if (document.getElementById('sidebar_second_ad')){
   slotNumbers.push(3);
   adCode.push('/21956916242/bytegig.com_300x250_2');
   sizes.push(div_3_sizes);
   adId.push('div-gpt-ad-1591009768179-0');
    googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot3) {
            ub_checkAdRendered('div-gpt-ad-1591009768179-0', ub_slot3, ['/21956916242/bytegig.com_300x250_2']);
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

function mainHbRun(){
  ubpbjs.que.push(function() {
      ubpbjs.addAdUnits(adUnits);
      ubpbjs.aliasBidder('criteo','criteointl');
      ubpbjs.bidderSettings = {
        'appnexus': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.86; } },
        'pubmatic': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.74; } },
        'rubicon': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
        'openx': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
        'criteo': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
        'criteointl': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
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
        publisherDomain: 'https://bytegig.com/',
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
