var div_1_sizes = [[970, 250], [728, 90], [970, 90]];
var div_2_sizes = [[160, 600], [300, 250], [300, 600], [120, 600]];
var div_3_sizes = [[728, 250], [728, 90]];
var div_4_sizes = [[200, 200], [300, 250], [250, 250], [300, 50], [320, 100]];
var div_5_sizes = [[300, 250], [300, 600]];
var div_6_sizes = [[320, 100], [728, 90], [320, 50], [468, 60]];
var adUnits = [];

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

if (document.getElementById('1')) {
    adUnits1 =
      {
        code: '/21956916242/gujratilexicon.com_1',
        mediaTypes: {
          banner: {
            sizes: div_1_sizes
          }
        },
        bids: [
        // { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
        { bidder: 'appnexus', params: { placementId: '19352238' } },
        { bidder: 'openx', params: {unit: '543530219', delDomain: 'unibots-d.openx.net'}},
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        { bidder: 'sovrn', params: {tagid: '735396'} },
        { bidder: 'oftmedia', params: { placementId: '20846125' } },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2953661'} },
        { bidder: 'nobid', params: { siteId : '22049999686'} },
        { bidder: '33across', params: { siteId : 'a8aAmqWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
        { bidder: 'smartadserver', params: { siteId: '362120', pageId: '1289621', formatId: '93421', domain: 'https://prg8.smartadserver.com' }},
        //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        { bidder: 'ucfunnel', params: { adid : 'ad-AA7BAA287AEE8BAD183B7967E36924DA'} },
        { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
      ]
    };
    adUnits.push(adUnits1);
}
if (document.getElementById('2')) {
    adUnits1 =
      {
        code: '/21956916242/gujaratilexicon.com_2',
        mediaTypes: {
      	  banner: {
      		  sizes: div_2_sizes
      	  }
        },
        bids: [
          // { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'appnexus', params: { placementId: '19352238' } },
          { bidder: 'openx', params: {unit: '543530220', delDomain: 'unibots-d.openx.net'}},
          // { bidder: 'criteo', params: {networkId: '4902'} },
          { bidder: 'sovrn', params: {tagid: '735188'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'oftmedia', params: { placementId: '20846125' } },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2953662'} },
          { bidder: 'nobid', params: { siteId : '22049999686'} },
          { bidder: '33across', params: { siteId : 'a8aAmqWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'smartadserver', params: { siteId: '362120', pageId: '1289621', formatId: '93417', domain: 'https://prg8.smartadserver.com' }},
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          { bidder: 'ucfunnel', params: { adid : 'ad-627D22B67DA73E8AC7297EB83E3A9B9'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        ]
      };
    adUnits.push(adUnits1);
}
if (document.getElementById('3')) {
    adUnits1 =
      {
        code: '/21956916242/gujaratilexicon.com_3',
        mediaTypes: {
      	  banner: {
      		  sizes: div_3_sizes
      	  }
        },
        bids: [
          // { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'appnexus', params: { placementId: '19352238' } },
          { bidder: 'openx', params: {unit: '543530221', delDomain: 'unibots-d.openx.net'}},
          // { bidder: 'criteo', params: {networkId: '4902'} },
          { bidder: 'sovrn', params: {tagid: '735395'} },
          { bidder: 'nobid', params: { siteId : '22049999686'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'oftmedia', params: { placementId: '20846125' } },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2953663'} },
          { bidder: '33across', params: { siteId : 'a8aAmqWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'smartadserver', params: { siteId: '362120', pageId: '1289621', formatId: '93233', domain: 'https://prg8.smartadserver.com' }},
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          { bidder: 'ucfunnel', params: { adid : 'ad-34B844E2BA7D9EA9F3A487294D233D98'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        ]
      };
    adUnits.push(adUnits1);
}
if (document.getElementById('4')) {
    adUnits1 =
      {
        code: '/21956916242/gujaratilexicon.com_4',
        mediaTypes: {
          banner: {
            sizes: div_4_sizes
          }
        },
        bids: [
          // { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'appnexus', params: { placementId: '19352238' } },
          { bidder: 'openx', params: {unit: '543530222', delDomain: 'unibots-d.openx.net'}},
          // { bidder: 'criteo', params: {networkId: '4902'} },
          { bidder: 'sovrn', params: {tagid: '735397'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'nobid', params: { siteId : '22049999686'} },
          { bidder: 'oftmedia', params: { placementId: '20846125' } },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2953664'} },
          { bidder: '33across', params: { siteId : 'a8aAmqWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'smartadserver', params: { siteId: '362120', pageId: '1289621', formatId: '93232', domain: 'https://prg8.smartadserver.com' }},
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          { bidder: 'ucfunnel', params: { adid : 'ad-7728779329E96D24FB9396A282D426A3'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        ]
      };
    adUnits.push(adUnits1);
}
if (document.getElementById('5')) {
    adUnits1 =
      {
        code: '/21956916242/gujaratilexicon.com_5',
        mediaTypes: {
      	  banner: {
      		  sizes: div_5_sizes
      	  }
        },
        bids: [
          // { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'appnexus', params: { placementId: '19352238' } },
          { bidder: 'sovrn', params: {tagid: '735398'} },
          { bidder: 'openx', params: {unit: '543530223', delDomain: 'unibots-d.openx.net'}},
          // { bidder: 'criteo', params: {networkId: '4902'} },
          { bidder: 'nobid', params: { siteId : '22049999686'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'oftmedia', params: { placementId: '20846125' } },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2953665'} },
          { bidder: '33across', params: { siteId : 'a8aAmqWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'smartadserver', params: { siteId: '362120', pageId: '1289621', formatId: '93232', domain: 'https://prg8.smartadserver.com' }},
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          { bidder: 'ucfunnel', params: { adid : 'ad-D23422693A3AE8791BD787E2EB82BEA'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        ]
      };
    adUnits.push(adUnits1);
}
if (document.getElementById('6')) {
    adUnits1 =
      {
        code: '/21956916242/gujaratilexicon.com_6',
        mediaTypes: {
          banner: {
            sizes: div_6_sizes
          }
        },
        bids: [
          // { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          { bidder: 'appnexus', params: { placementId: '19352238' } },
          // { bidder: 'criteo', params: {networkId: '4902'} },
          { bidder: 'sovrn', params: {tagid: '735399'} },
          { bidder: 'openx', params: {unit: '543530224', delDomain: 'unibots-d.openx.net'}},
          { bidder: 'nobid', params: { siteId : '22049999686'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'oftmedia', params: { placementId: '20846125' } },
          { bidder: '33across', params: { siteId : 'a8aAmqWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2953666'} },
          //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'smartadserver', params: { siteId: '362120', pageId: '1289621', formatId: '93233', domain: 'https://prg8.smartadserver.com' }},
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          { bidder: 'ucfunnel', params: { adid : 'ad-627D22B6787A224D1E9E2E699BE6AEED'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
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
  renderedFlag: [false, false, false, false, false, false]
};

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

function refreshBid(ub_slot, adCode) {
  ubpbjs.que.push(function(){
    ubpbjs.requestBids({
      timeout: PREBID_TIMEOUT,
      adUnitCodes: adCode,
      bidsBackHandler: function() {
        googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh(ub_slot);
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
    var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=gujratilexicon';
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

if (document.getElementById('1')) {
  mappings.slotNumbers.push(1);
  mappings.adCode.push('/21956916242/gujratilexicon.com_1');
  mappings.sizes.push(div_1_sizes);
  mappings.adId.push('div-ub1');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAdRendered('div-ub1', ub_slot1, ['/21956916242/gujratilexicon.com_1']);
      }
    });
  });
}
if (document.getElementById('2')) {
  mappings.slotNumbers.push(2);
  mappings.adCode.push('/21956916242/gujaratilexicon.com_2');
  mappings.sizes.push(div_2_sizes);
  mappings.adId.push('div-ub2');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot2) {
        ub_checkAdRendered('div-ub2', ub_slot2, ['/21956916242/gujaratilexicon.com_2']);
      }
    });
  });
}
if (document.getElementById('3')) {
  mappings.slotNumbers.push(3);
  mappings.adCode.push('/21956916242/gujaratilexicon.com_3');
  mappings.sizes.push(div_3_sizes);
  mappings.adId.push('div-ub3');
  googletag.cmd.push(function() {
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot3) {
          ub_checkAdRendered('div-ub3', ub_slot3, ['/21956916242/gujaratilexicon.com_3']);
        }
      });
  });
}
if (document.getElementById('4')) {
  mappings.slotNumbers.push(4);
  mappings.adCode.push('/21956916242/gujaratilexicon.com_4');
  mappings.sizes.push(div_4_sizes);
  mappings.adId.push('div-gpt-ad-1590839286035-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot4) {
        ub_checkAdRendered('div-gpt-ad-1590839286035-0', ub_slot4, ['/21956916242/gujaratilexicon.com_4']);
      }
    });
  });
}
if (document.getElementById('5')) {
  mappings.slotNumbers.push(5);
  mappings.adCode.push('/21956916242/gujaratilexicon.com_5');
  mappings.sizes.push(div_5_sizes);
  mappings.adId.push('div-ub5');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot5) {
        ub_checkAdRendered('div-ub5', ub_slot5, ['/21956916242/gujaratilexicon.com_5']);
      }
    });
  });
}
if (document.getElementById('6')) {
  mappings.slotNumbers.push(6);
  mappings.adCode.push('/21956916242/gujaratilexicon.com_6');
  mappings.sizes.push(div_6_sizes);
  mappings.adId.push('div-gpt-ad-1590839347556-0');
  googletag.cmd.push(function() {
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot6) {
          ub_checkAdRendered('div-gpt-ad-1590839347556-0', ub_slot6, ['/21956916242/gujaratilexicon.com_6']);
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

function mainHbRun(){
  ubpbjs.que.push(function() {
    //   ubpbjs.setBidderConfig({
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
        debug: false,
        useBidCache: true,
        enableSendAllBids: false, // Default will be `true` as of 1.0
        bidderSequence: 'random', // Default is random
        publisherDomain: 'https://www.gujaratilexicon.com/',
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
