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
				if(data.status == "succediv-gpt-ad-1597237707332-0ss") {
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
var div_2_sizes = [[250, 250], [300, 250], [300, 50], [200, 200]];
var div_3_sizes = [[250, 250], [300, 250], [300, 50], [200, 200]];
var div_4_sizes = [[200, 200], [250, 250], [300, 250], [300, 100]];
var div_5_sizes = [[250, 250], [300, 250], [200, 200]];
var div_6_sizes = [[200, 200], [250, 250], [300, 250]];
var div_7_sizes = [[250, 250], [300, 250], [200, 200]];

var adUnits = [
    {
        code: '/21957769615/madhyamam.com_nb_320x50',
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
          { bidder: 'appnexus', params: { placementId: '19056048' } },
          { bidder: 'oftmedia', params: { placementId: '18677464' } }
        ]
    },
    {
        code: '/21957769615/madhyamam.com_nb_320x50',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'oftmedia', params: { placementId: '18677464' } },
        	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'openx', params: {unit: '541046178', delDomain: 'yieldbird-d.openx.net'} },
          { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        	{ bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '719001'} },
        	{ bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
          { bidder: 'nobid', params: { siteId : '21986889043'} },
          { bidder: 'criteo', params: {networkId: '10542'} },
          { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2962616'} },
          { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
        ]
    }
];

if(window.location.href != "https://m.madhyamam.com/" && window.location.href != "https://www.madhyamam.com/"){
  if(document.getElementById('HomePage_300x250_1') != null){
    var adUnits1 = {
        code: '/21957769615/madhyamam.com_wm_300x250_1',
        mediaTypes: {
            banner: {
                sizes: div_2_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'oftmedia', params: { placementId: '18677464' } },
          // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'openx', params: {unit: '541046178', delDomain: 'yieldbird-d.openx.net'} },
          { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '738357'} },
          { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
          { bidder: 'nobid', params: { siteId : '21986889043'} },
          { bidder: 'criteo', params: {networkId: '10542'} },
          { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2962617'} },
          { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
        ]
    }
    adUnits.push(adUnits1);
  }
  if(document.getElementById('div-gpt-ad-1590738750383-0') != null){

    adUnits1 = {
        code: '/21957769615/madhyamam.com_wm_300x250_2',
        mediaTypes: {
            banner: {
                sizes: div_3_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'oftmedia', params: { placementId: '18677464' } },
          // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'openx', params: {unit: '541046178', delDomain: 'yieldbird-d.openx.net'} },
          { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '738358'} },
          { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
          { bidder: 'nobid', params: { siteId : '21986889043'} },
          { bidder: 'criteo', params: {networkId: '10542'} },
          { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2962618'} },
          { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
        ]
    }
    adUnits.push(adUnits1);
  }
}
else {
  if(document.getElementById('unibot1')){

    adUnits1 = {
        code: '/21959913182/madhyamam.com_hb_300x250_dedicated-1',
        mediaTypes: {
            banner: {
                sizes: div_4_sizes
            }
        },
        bids: [
          // { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
          // { bidder: 'oftmedia', params: { placementId: '18677464' } },
          // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          // { bidder: 'openx', params: {unit: '541046178', delDomain: 'yieldbird-d.openx.net'} },
          // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          // { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
          // { bidder: 'sovrn', params: {tagid: '738358'} },
          // { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
          // { bidder: 'nobid', params: { siteId : '21986889043'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2962618'} },
          // { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
        ]
    }
    adUnits.push(adUnits1);
  }
}
if(document.getElementById('unibot2')){

  adUnits1 = {
      code: '/21959913182/madhyamam.com_hb_300x250_dedicated-2',
      mediaTypes: {
          banner: {
              sizes: div_5_sizes
          }
      },
      bids: [
        // { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
        // { bidder: 'oftmedia', params: { placementId: '18677464' } },
        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        // { bidder: 'openx', params: {unit: '541046178', delDomain: 'yieldbird-d.openx.net'} },
        // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        // { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
        // { bidder: 'sovrn', params: {tagid: '738358'} },
        // { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
        // { bidder: 'nobid', params: { siteId : '21986889043'} },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2962618'} },
        // { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
        //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
      ]
  }
  adUnits.push(adUnits1);
}
if(document.getElementById('unibot3')){

  adUnits1 = {
      code: '/21959913182/madhyamam.com_hb_300x250_dedicated-3',
      mediaTypes: {
          banner: {
              sizes: div_6_sizes
          }
      },
      bids: [
        // { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
        // { bidder: 'oftmedia', params: { placementId: '18677464' } },
        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        // { bidder: 'openx', params: {unit: '541046178', delDomain: 'yieldbird-d.openx.net'} },
        // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        // { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
        // { bidder: 'sovrn', params: {tagid: '738358'} },
        // { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
        // { bidder: 'nobid', params: { siteId : '21986889043'} },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2962618'} },
        // { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
        //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
      ]
  }
  adUnits.push(adUnits1);
}
if(document.getElementById('unibot4')){

  adUnits1 = {
      code: '/21959913182/madhyamam.com_hb_300x250_dedicated-4',
      mediaTypes: {
          banner: {
              sizes: div_7_sizes
          }
      },
      bids: [
        // { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
        // { bidder: 'oftmedia', params: { placementId: '18677464' } },
        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        // { bidder: 'openx', params: {unit: '541046178', delDomain: 'yieldbird-d.openx.net'} },
        // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        // { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
        // { bidder: 'sovrn', params: {tagid: '738358'} },
        // { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
        // { bidder: 'nobid', params: { siteId : '21986889043'} },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2962618'} },
        // { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
        //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
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

var wm_mappings = {
  targetUnits: ['HomePage_300x250_1', 'div-gpt-ad-1590738750383-0'],
  slotNames: ['ub_slot2', 'ub_slot3'],
  adUnitNames: ['/21957769615/madhyamam.com_wm_300x250_1', '/21957769615/madhyamam.com_wm_300x250_2'],
  adId: ['div-ub-wm-2', 'div-ub-wm-3'],
  sizes: [div_2_sizes, div_3_sizes]
}

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
            googletag.pubads().refresh(mappings.slots);
        });
    });
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

if (document.getElementById('div-ub-1')){
  mappings.slotNumbers.push(1);
  mappings.adCode.push('/21957769615/madhyamam.com_nb_320x50');
  mappings.sizes.push(div_1_sizes);
  mappings.adId.push('div-ub-1');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAdRendered('div-ub-1', ub_slot1, ['/21957769615/madhyamam.com_nb_320x50']);
      }
    });
  });
}
if (document.getElementById('unibot1')){
  mappings.slotNumbers.push(4);
  mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-1');
  mappings.sizes.push(div_4_sizes);
  mappings.adId.push('div-gpt-ad-1597237707332-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot4) {
        ub_checkAdRendered('div-gpt-ad-1597237707332-0', ub_slot4, ['/21959913182/madhyamam.com_hb_300x250_dedicated-1']);
      }
    });
  });
}
if (document.getElementById('unibot2')){
  mappings.slotNumbers.push(5);
  mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-2');
  mappings.sizes.push(div_5_sizes);
  mappings.adId.push('div-gpt-ad-1597687687376-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot5) {
        ub_checkAdRendered('div-gpt-ad-1597687687376-0', ub_slot5, ['/21959913182/madhyamam.com_hb_300x250_dedicated-2']);
      }
    });
  });
}
if (document.getElementById('unibot3')){
  mappings.slotNumbers.push(6);
  mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-3');
  mappings.sizes.push(div_6_sizes);
  mappings.adId.push('div-gpt-ad-1597687741149-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot6) {
        ub_checkAdRendered('div-gpt-ad-1597687741149-0', ub_slot6, ['/21959913182/madhyamam.com_hb_300x250_dedicated-3']);
      }
    });
  });
}
if (document.getElementById('unibot4')){
  mappings.slotNumbers.push(7);
  mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-4');
  mappings.sizes.push(div_7_sizes);
  mappings.adId.push('div-gpt-ad-1597687810390-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot7) {
        ub_checkAdRendered('div-gpt-ad-1597687810390-0', ub_slot7, ['/21959913182/madhyamam.com_hb_300x250_dedicated-4']);
      }
    });
  });
}
if(window.location.href != "https://m.madhyamam.com/" && window.location.href != "https://www.madhyamam.com/"){
  for(var i=0; i<wm_mappings.targetUnits.length; i++){
    if (document.getElementById(wm_mappings.targetUnits[i]) != null) {
      targetUnit = document.getElementById(wm_mappings.targetUnits[i]);
      parent = targetUnit.parentNode;
      parent.innerHTML = '';
      var z= document.createElement('div');
      z.id = wm_mappings.adId[i];
      z.className = wm_mappings.adId[i];
      parent.appendChild(z);

      mappings.slotNumbers.push(i+2);
      mappings.adCode.push(wm_mappings.adUnitNames[i]);
      mappings.sizes.push(wm_mappings.sizes[i]);
      mappings.adId.push(wm_mappings.adId[i]);
      googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === wm_mappings.slotNames[i]) {
            ub_checkAdRendered(wm_mappings.adId[i], wm_mappings.slotNames[i], [wm_mappings.adUnitNames[i]]);
          }
        });
      });
    }
  }
}

if(typeof googletag.defineSlot === "function"){
  googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
  googlePush();
}
else{
  setTimeout(function(){
    googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
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
        'criteo': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
        'criteointl': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
        'nobid': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
        'oftmedia': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.80; } },
        'sovrn': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.81; } },
        'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
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
        publisherDomain: 'https://www.madhyamam.com/',
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
