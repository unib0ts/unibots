var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 30000;

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

var customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $20, 1-cent increments
    }]
};

var div_1_sizes = [320, 50];
var div_2_sizes = [728, 90];
var div_3_sizes = [320, 50];
var div_4_sizes = [300, 600];
var div_5_sizes = [300, 250];
var div_6_sizes = [300, 250];
var div_7_sizes = [300, 250];
var div_8_sizes = [300, 250];
var div_9_sizes = [300, 250];
var div_10_sizes = [728, 90];
var div_11_sizes = [320, 50];
var div_12_sizes = [728, 90];
var div_13_sizes = [320, 50];
var div_14_sizes = [300, 250];

var mappings_full_hb_config = {
  adUnitNames: [
    '/21957769615/mediaonetv.in_NB_320x50_directcampaign',
    '/18643286/horizontal_responsive',
    '/18643286/Horizontal_Responsive_Mobile',
    '/18643286/vertical_responsive',
    '/18643286/Mrec_01',
    '/18643286/Mrec_02',
    '/18643286/Mrec_03',
    '/18643286/Mrec_04',
    '/18643286/Mrec_05',
    '/18643286/Mrec_06',
    '/18643286/story_middle_responsive',
    '/18643286/Story_Middle_Responsive_M',
    '/18643286/Story_Middle_Responsive_01',
    '/18643286/Story_Middle_Responsive_M_02',
  ]
}
var adUnits = [
    {
        code: '/21957769615/mediaonetv.in_NB_320x50_directcampaign',
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
          { bidder: 'oftmedia', params: { placementId: '20846125' } },
          { bidder: 'appnexus', params: { placementId: '19054400' } }
        ]
    },
    {
        code: '/21957769615/mediaonetv.in_NB_320x50_directcampaign',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
        	{ bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
        	//{ bidder: '33across', params: { siteId : 'dWICUEBt8r6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        	//{ bidder: 'emx_digital', params: { tagid: '97450' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '725482'} },
          { bidder: 'oftmedia', params: { placementId: '20846125' } },
          { bidder: 'openx', params: {unit: '543530471', delDomain: 'unibots-d.openx.net'}},
        	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'emx_digital', params: { tagid: '107932' } },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2935802'} },
          { bidder: 'nobid', params: { siteId : '22049999704'} },
          { bidder: 'ucfunnel', params: { adid : 'ad-34B8449868634277C846A68742734E7'} },
          //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93231', domain: 'https://prg8.smartadserver.com' }},
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        ]
    }
];

//homepage
if(document.getElementById('Home_LBoad')|| document.getElementById('Section_LBoad') || document.getElementById('Story_LBoad')){

  var adUnits1 = {
      code: '/18643286/horizontal_responsive',
      mediaTypes: {
          banner: {
              sizes: div_2_sizes
          }
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
        { bidder: 'oftmedia', params: { placementId: '20846125' } },
        // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        { bidder: 'emx_digital', params: { tagid: '107932' } }, /* sizeless */
        { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        { bidder: 'nobid', params: { siteId: '22049999704' } },
        // { bidder: 'openx', params: {unit: '542291764', delDomain: 'unibots-d.openx.net'} },
        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        { bidder: 'sovrn', params: {tagid: '777812'} },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206193'} },
        { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93233', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        { bidder: 'ucfunnel', params: { adid : 'ad-772879A237E2838AC2BE73244667622'} },
        { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
      ]
  }
  adUnits.push(adUnits1);
}
if(document.getElementById('Home_mLBoad') || document.getElementById('Section_mLBoad')|| document.getElementById('Story_mLBoad')){

  adUnits1 = {
      code: '/18643286/Horizontal_Responsive_Mobile',
      mediaTypes: {
          banner: {
              sizes: div_3_sizes
          }
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
        { bidder: 'oftmedia', params: { placementId: '20846125' } },
        // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        { bidder: 'emx_digital', params: { tagid: '107932' } }, /* sizeless */
        { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        { bidder: 'nobid', params: { siteId: '22049999704' } },
        { bidder: 'openx', params: {unit: '543530399', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        { bidder: 'sovrn', params: {tagid: '777813'} },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206194'} },
        { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        { bidder: 'ucfunnel', params: { adid : 'ad-47B476DB2437399BFEE74D27A9284AD6'} },
        { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
      ]
  }
  adUnits.push(adUnits1);
}
if(document.getElementById('Home_HalfPage') || document.getElementById('Story_HalfPage')){
  if (mobileCheck()) {
    adUnits1 = {
        code: '/18643286/vertical_responsive',
        mediaTypes: {
            banner: {
                sizes: div_5_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'oftmedia', params: { placementId: '20846125' } },
          // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          { bidder: 'emx_digital', params: { tagid: '107932' } }, /* sizeless */
          { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
          { bidder: 'nobid', params: { siteId: '22049999704' } },
          { bidder: 'openx', params: {unit: '543530400', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
          // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'sovrn', params: {tagid: '777815'} },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206195'} },
          { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93422', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          { bidder: 'ucfunnel', params: { adid : 'ad-8A29ADE2BE69466D1B4AB6827D378462'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
        ]
    }
    adUnits.push(adUnits1);
  }
  else {
    adUnits1 = {
        code: '/18643286/vertical_responsive',
        mediaTypes: {
            banner: {
                sizes: div_4_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'oftmedia', params: { placementId: '20846125' } },
          // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          { bidder: 'emx_digital', params: { tagid: '107932' } }, /* sizeless */
          { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
          { bidder: 'nobid', params: { siteId: '22049999704' } },
          { bidder: 'openx', params: {unit: '543530400', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
          // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'sovrn', params: {tagid: '777815'} },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206195'} },
          { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93422', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          { bidder: 'ucfunnel', params: { adid : 'ad-8A29ADE2BE69466D1B4AB6827D378462'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
        ]
    }
    adUnits.push(adUnits1);
  }
}
if(document.getElementById('Home_Mrec_01') || document.getElementById('Section_Mrec_01') || document.getElementById('Story_Mrec_01')){

  adUnits1 = {
      code: '/18643286/Mrec_01',
      mediaTypes: {
          banner: {
              sizes: div_5_sizes
          }
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
        { bidder: 'oftmedia', params: { placementId: '20846125' } },
        // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        { bidder: 'emx_digital', params: { tagid: '107932' } }, /* sizeless */
        { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        { bidder: 'nobid', params: { siteId: '22049999704' } },
        { bidder: 'openx', params: {unit: '543530405', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        { bidder: 'sovrn', params: {tagid: '777823'} },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206200'} },
        { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        { bidder: 'ucfunnel', params: { adid : 'ad-D23426E3988BB994CDD34492DD33B2BB'} },
        { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2962618'} },
        // // { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
        // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
        // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
      ]
  }
  adUnits.push(adUnits1);
}
if(document.getElementById('Home_Mrec_02') || document.getElementById('Section_Mrec_02') || document.getElementById('Story_Mrec_02')){

  adUnits1 = {
      code: '/18643286/Mrec_02',
      mediaTypes: {
          banner: {
              sizes: div_6_sizes
          }
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
        { bidder: 'oftmedia', params: { placementId: '20846125' } },
        // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        { bidder: 'emx_digital', params: { tagid: '107932' } }, /* sizeless */
        { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        { bidder: 'nobid', params: { siteId: '22049999704' } },
        { bidder: 'openx', params: {unit: '543530406', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        { bidder: 'sovrn', params: {tagid: '777824'} },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206201'} },
        { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        { bidder: 'ucfunnel', params: { adid : 'ad-E2B4236BEEE66E7DCE7392E88669766'} },
        { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
      ]
  }
  adUnits.push(adUnits1);
}
if(document.getElementById('Home_Mrec_03') || document.getElementById('Section_Mrec_03') || document.getElementById('Story_Mrec_03')){

  adUnits1 = {
      code: '/18643286/Mrec_03',
      mediaTypes: {
          banner: {
              sizes: div_7_sizes
          }
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
        { bidder: 'oftmedia', params: { placementId: '20846125' } },
        // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        { bidder: 'emx_digital', params: { tagid: '107932' } }, /* sizeless */
        { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        { bidder: 'nobid', params: { siteId: '22049999704' } },
        { bidder: 'openx', params: {unit: '543530407', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        { bidder: 'sovrn', params: {tagid: '777825'} },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206202'} },
        { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        { bidder: 'ucfunnel', params: { adid : 'ad-BE78E2A7DB3A6D38C77B39EBD6E23D79'} },
        { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
      ]
  }
  adUnits.push(adUnits1);
}
if(document.getElementById('Home_Mrec_04') || document.getElementById('Section_Mrec_04') || document.getElementById('Story_Mrec_04')){

  adUnits1 = {
      code: '/18643286/Mrec_04',
      mediaTypes: {
          banner: {
              sizes: div_8_sizes
          }
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
        { bidder: 'oftmedia', params: { placementId: '20846125' } },
        // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        { bidder: 'emx_digital', params: { tagid: '107932' } }, /* sizeless */
        { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        { bidder: 'nobid', params: { siteId: '22049999704' } },
        { bidder: 'openx', params: {unit: '543530408', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        { bidder: 'sovrn', params: {tagid: '777826'} },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206203'} },
        { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        { bidder: 'ucfunnel', params: { adid : 'ad-8A29ADE2426A73DA0B4AB6827D378466'} },
        { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
      ]
  }
  adUnits.push(adUnits1);
}
if(document.getElementById('Home_Mrec_05') || document.getElementById('Section_Mrec_05')){

  adUnits1 = {
      code: '/18643286/Mrec_05',
      mediaTypes: {
          banner: {
              sizes: div_9_sizes
          }
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
        { bidder: 'oftmedia', params: { placementId: '20846125' } },
        // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        { bidder: 'emx_digital', params: { tagid: '107932' } }, /* sizeless */
        { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        { bidder: 'nobid', params: { siteId: '22049999704' } },
        { bidder: 'openx', params: {unit: '543530409', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        { bidder: 'sovrn', params: {tagid: '777828'} },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206204'} },
        { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        { bidder: 'ucfunnel', params: { adid : 'ad-E2B4236B728B9BA3072E4B48348E8893'} },
        { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
      ]
  }
  adUnits.push(adUnits1);
}
if(document.getElementById('Section_Mrec_06')){

  adUnits1 = {
      code: '/18643286/Mrec_06',
      mediaTypes: {
          banner: {
              sizes: div_14_sizes
          }
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
        { bidder: 'oftmedia', params: { placementId: '20846125' } },
        // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        { bidder: 'emx_digital', params: { tagid: '107932' } }, /* sizeless */
        { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
        { bidder: 'nobid', params: { siteId: '22049999704' } },
        { bidder: 'openx', params: {unit: '543530410', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        { bidder: 'sovrn', params: {tagid: '777830'} },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206205'} },
        { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        { bidder: 'ucfunnel', params: { adid : 'ad-D23426E3D4E46AEBCD78D39E244AE67A'} },
        { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
      ]
  }
  adUnits.push(adUnits1);
}

//story_page
// if(document.getElementById('Story_LBoadMiddle')){
//
//   adUnits1 = {
//     code: '/18643286/story_middle_responsive',
//     mediaTypes: {
//       banner: {
//         sizes: div_10_sizes
//       }
//     },
//     bids: [
//       { bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
//       // { bidder: 'oftmedia', params: { placementId: '20846125' } },
//       // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//       { bidder: 'emx_digital', params: { tagid: '107932' } }, /* sizeless */
//       { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
//       { bidder: 'nobid', params: { siteId: '22049999704' } },
//       { bidder: 'openx', params: {unit: '543530401', delDomain: 'unibots-d.openx.net'} },
//       // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//       // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//       { bidder: 'criteo', params: {networkId: '10542'} },
//       { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//       { bidder: 'criteointl', params: {networkId: '10545'} },
//       { bidder: 'sovrn', params: {tagid: '777817'} },
//       { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206196'} },
//       { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93233', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//       { bidder: 'ucfunnel', params: { adid : 'ad-27367BA32BB26BBDC823ADAE4AE3EE9A'} },
//       { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//       // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//     ]
//   }
//   adUnits.push(adUnits1);
// }
// if(document.getElementById('Story_LBoadMiddleM')){
//
//   adUnits1 = {
//     code: '/18643286/Story_Middle_Responsive_M',
//     mediaTypes: {
//       banner: {
//         sizes: div_11_sizes
//       }
//     },
//     bids: [
//       { bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
//       // { bidder: 'oftmedia', params: { placementId: '20846125' } },
//       // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//       { bidder: 'emx_digital', params: { tagid: '107932' } }, /* sizeless */
//       { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
//       { bidder: 'nobid', params: { siteId: '22049999704' } },
//       { bidder: 'openx', params: {unit: '543530402', delDomain: 'unibots-d.openx.net'} },
//       // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//       // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//       { bidder: 'criteo', params: {networkId: '10542'} },
//       { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//       { bidder: 'criteointl', params: {networkId: '10545'} },
//       { bidder: 'sovrn', params: {tagid: '777818'} },
//       { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206197'} },
//       { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//       { bidder: 'ucfunnel', params: { adid : 'ad-627D2B4769D9D7620E93BEDA867D3742'} },
//       { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//       // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//     ]
//   }
//   adUnits.push(adUnits1);
// }
// if(document.getElementById('Story_LBoadMiddle_01')){
//
//   adUnits1 = {
//     code: '/18643286/Story_Middle_Responsive_01',
//     mediaTypes: {
//       banner: {
//         sizes: div_12_sizes
//       }
//     },
//     bids: [
//       { bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
//       // { bidder: 'oftmedia', params: { placementId: '20846125' } },
//       // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//       { bidder: 'emx_digital', params: { tagid: '107932' } }, /* sizeless */
//       { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
//       { bidder: 'nobid', params: { siteId: '22049999704' } },
//       { bidder: 'openx', params: {unit: '543530403', delDomain: 'unibots-d.openx.net'} },
//       // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//       // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//       { bidder: 'criteo', params: {networkId: '10542'} },
//       { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//       { bidder: 'criteointl', params: {networkId: '10545'} },
//       { bidder: 'sovrn', params: {tagid: '777819'} },
//       { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206198'} },
//       { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93233', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//       { bidder: 'ucfunnel', params: { adid : 'ad-8A29ADE2B6389B76FB726986ED7EB246'} },
//       { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//       // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//     ]
//   }
//   adUnits.push(adUnits1);
// }
// if(document.getElementById('Story_LBoadMiddleM_02')){
//
//   adUnits1 = {
//     code: '/18643286/Story_Middle_Responsive_M_02',
//     mediaTypes: {
//       banner: {
//         sizes: div_13_sizes
//       }
//     },
//     bids: [
//       { bidder: 'appnexus', params: { placementId: '19054400' } }, /* one placementId for all sizes  my appnexus bidder */
//       // { bidder: 'oftmedia', params: { placementId: '20846125' } },
//       // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//       { bidder: 'emx_digital', params: { tagid: '107932' } }, /* sizeless */
//       { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
//       { bidder: 'nobid', params: { siteId: '22049999704' } },
//       { bidder: 'openx', params: {unit: '543530404', delDomain: 'unibots-d.openx.net'} },
//       // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//       // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//       { bidder: 'criteo', params: {networkId: '10542'} },
//       { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//       { bidder: 'criteointl', params: {networkId: '10545'} },
//       { bidder: 'sovrn', params: {tagid: '777822'} },
//       { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206199'} },
//       { bidder: 'smartadserver', params: { siteId: '362132', pageId: '1289633', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//       { bidder: 'ucfunnel', params: { adid : 'ad-AA7BA2D7898E9DD2F848468D23A4DA47'} },
//       { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//       // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//     ]
//   }
//   adUnits.push(adUnits1);
// }

// ======== DO NOT EDIT BELOW THIS LINE =========== //
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];

function mainHbRun(){
ubpbjs.que.push(function() {
    ubpbjs.addAdUnits(adUnits);
    ubpbjs.aliasBidder('criteo','criteointl');
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
             sid:"95",
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
      publisherDomain: 'mediaonetv.in',
      bidderTimeout: PREBID_TIMEOUT+500,
      //pubcid: {expInterval: },
      //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
    // "currency": {
    //    // enables currency feature
    //    "adServerCurrency": "AED",
    //    "granularityMultiplier":3 ,
    //    // optionally override the default rate file
    //    "conversionRateFile": "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/currency/currency.json",
    //    // optionally provide a default rate in case the file can't be read
    //    "defaultRates": { "USD": { "AED": 3.67 }}
    //  }
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

var mappings = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  adId: [],
  renderedFlag: [false, false, false, false, false, false, false, false, false, false]
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
              // googletag.pubads().refresh(ub_slot);
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
    var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=mediaonetv';
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
  x = googletag.pubads().getSlots();
  x_len = x.length;
  for(i=0;i<x.length;i++){
    if(mappings_full_hb_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())) {
      if (mappings_full_hb_config.adUnitNames[3].includes(x[i].getSlotId().getAdUnitPath())) {
        var mapping4 = googletag.sizeMapping()
        .addSize([1024, 720], [300, 600])
        .addSize([0, 0], [300, 250])
        .build();
        x[i].defineSizeMapping(mapping4);
      }
      googleDefineFlag=1;
      googletag.pubads().refresh([x[i]]);
    }
    else {
      googleDefineFlag=0;
    }
  }
  if (googleDefineFlag==0) {
    for(i=0; i<slotNumbers.length;i++){
      eval('ub_slot'+slotNumbers[i]+ '= '+'googletag.defineSlot(adCode[i], sizes[i], adId[i])');
      var a = eval('ub_slot'+slotNumbers[i]);
      a.addService(googletag.pubads());
      mappings.slots.push(eval('ub_slot'+slotNumbers[i]));
    }
  }
}

function googlePush(){
  googletag.cmd.push(function() {
    googletag.pubads().collapseEmptyDivs(true);
    googletag.pubads().setCentering(true);
    googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
    googletag.pubads().enableSingleRequest();
    googletag.pubads().enableLazyLoad({
              fetchMarginPercent: 200,
              renderMarginPercent: 100,
              mobileScaling: 2.0
            });
    googletag.enableServices();
  });
}

if (document.getElementById('div-ub-1')){
  mappings.slotNumbers.push(1);
  mappings.adCode.push('/21957769615/mediaonetv.in_NB_320x50_directcampaign');
  mappings.sizes.push(div_1_sizes);
  mappings.adId.push('div-ub-1');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAdRendered('div-ub-1', ub_slot1, ['/21957769615/mediaonetv.in_NB_320x50_directcampaign']);
      }
    });
  });
}
if (document.getElementById('Home_LBoad') || document.getElementById('Section_LBoad') || document.getElementById('Story_LBoad')){
  mappings.slotNumbers.push(2);
  mappings.adCode.push('/18643286/horizontal_responsive');
  mappings.sizes.push(div_2_sizes);
  mappings.adId.push('div-gpt-ad-1599561585799-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot2) {
        ub_checkAdRendered('div-gpt-ad-1599561585799-0', ub_slot2, ['/18643286/horizontal_responsive']);
      }
    });
  });
}
if (document.getElementById('Home_mLBoad') || document.getElementById('Section_mLBoad')|| document.getElementById('Story_mLBoad')){
  mappings.slotNumbers.push(3);
  mappings.adCode.push('/18643286/Horizontal_Responsive_Mobile');
  mappings.sizes.push(div_3_sizes);
  mappings.adId.push('div-gpt-ad-1599561666240-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot3) {
        ub_checkAdRendered('div-gpt-ad-1599561666240-0', ub_slot3, ['/18643286/Horizontal_Responsive_Mobile']);
      }
    });
  });
}
if (document.getElementById('Home_HalfPage') || document.getElementById('Story_HalfPage')){
  mappings.slotNumbers.push(4);
  mappings.adCode.push('/18643286/vertical_responsive');
  if (mobileCheck()) {
    mappings.sizes.push(div_5_sizes);
  }
  else {
    mappings.sizes.push(div_4_sizes);
  }
  mappings.adId.push('div-gpt-ad-1599561723340-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot4) {
        ub_checkAdRendered('div-gpt-ad-1599561723340-0', ub_slot4, ['/18643286/vertical_responsive']);
      }
    });
  });
}
if (document.getElementById('Home_Mrec_01') || document.getElementById('Section_Mrec_01') || document.getElementById('Story_Mrec_01')){
  mappings.slotNumbers.push(5);
  mappings.adCode.push('/18643286/Mrec_01');
  mappings.sizes.push(div_5_sizes);
  mappings.adId.push('div-gpt-ad-1600065761480-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot5) {
        ub_checkAdRendered('div-gpt-ad-1600065761480-0', ub_slot5, ['/18643286/Mrec_01']);
      }
    });
  });
}
if (document.getElementById('Home_Mrec_02') || document.getElementById('Section_Mrec_02') || document.getElementById('Story_Mrec_02')){
  mappings.slotNumbers.push(6);
  mappings.adCode.push('/18643286/Mrec_02');
  mappings.sizes.push(div_6_sizes);
  mappings.adId.push('div-gpt-ad-1600065805144-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot6) {
        ub_checkAdRendered('div-gpt-ad-1600065805144-0', ub_slot6, ['/18643286/Mrec_02']);
      }
    });
  });
}
if (document.getElementById('Home_Mrec_03') || document.getElementById('Section_Mrec_03') || document.getElementById('Story_Mrec_03')){
  mappings.slotNumbers.push(7);
  mappings.adCode.push('/18643286/Mrec_03');
  mappings.sizes.push(div_7_sizes);
  mappings.adId.push('div-gpt-ad-1600065822954-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot7) {
        ub_checkAdRendered('div-gpt-ad-1600065822954-0', ub_slot7, ['/18643286/Mrec_03']);
      }
    });
  });
}
if (document.getElementById('Home_Mrec_04') || document.getElementById('Section_Mrec_04') || document.getElementById('Story_Mrec_04')){
  mappings.slotNumbers.push(8);
  mappings.adCode.push('/18643286/Mrec_04');
  mappings.sizes.push(div_8_sizes);
  mappings.adId.push('div-gpt-ad-1600065839126-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot8) {
        ub_checkAdRendered('div-gpt-ad-1600065839126-0', ub_slot8, ['/18643286/Mrec_04']);
      }
    });
  });
}
if (document.getElementById('Home_Mrec_05') || document.getElementById('Section_Mrec_05')){
  mappings.slotNumbers.push(9);
  mappings.adCode.push('/18643286/Mrec_05');
  mappings.sizes.push(div_9_sizes);
  mappings.adId.push('div-gpt-ad-1600065859532-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot9) {
        ub_checkAdRendered('div-gpt-ad-1600065859532-0', ub_slot9, ['/18643286/Mrec_05']);
      }
    });
  });
}
if (document.getElementById('Section_Mrec_06')){
  mappings.slotNumbers.push(10);
  mappings.adCode.push('/18643286/Mrec_06');
  mappings.sizes.push(div_14_sizes);
  mappings.adId.push('div-gpt-ad-1600065942889-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot10) {
        ub_checkAdRendered('div-gpt-ad-1600065942889-0', ub_slot10, ['/18643286/Mrec_06']);
      }
    });
  });
}
//story
// if (document.getElementById('Story_LBoadMiddle')){
//   mappings.slotNumbers.push(14);
//   mappings.adCode.push('/18643286/story_middle_responsive');
//   mappings.sizes.push(div_10_sizes);
//   mappings.adId.push('div-gpt-ad-1599568526962-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot14) {
//         ub_checkAdRendered('div-gpt-ad-1599568526962-0', ub_slot14, ['/18643286/story_middle_responsive']);
//       }
//     });
//   });
// }
// if (document.getElementById('Story_LBoadMiddleM')){
//   mappings.slotNumbers.push(11);
//   mappings.adCode.push('/18643286/Story_Middle_Responsive_M');
//   mappings.sizes.push(div_11_sizes);
//   mappings.adId.push('div-gpt-ad-1599568464122-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot11) {
//         ub_checkAdRendered('div-gpt-ad-1599568464122-0', ub_slot11, ['/18643286/Story_Middle_Responsive_M']);
//       }
//     });
//   });
// }
// if (document.getElementById('Story_LBoadMiddle_01')){
//   mappings.slotNumbers.push(12);
//   mappings.adCode.push('/18643286/Story_Middle_Responsive_01');
//   mappings.sizes.push(div_12_sizes);
//   mappings.adId.push('div-gpt-ad-1600066007017-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot12) {
//         ub_checkAdRendered('div-gpt-ad-1600066007017-0', ub_slot12, ['/18643286/Story_Middle_Responsive_01']);
//       }
//     });
//   });
// }
// if (document.getElementById('Story_LBoadMiddleM_02')){
//   mappings.slotNumbers.push(13);
//   mappings.adCode.push('/18643286/Story_Middle_Responsive_M_02');
//   mappings.sizes.push(div_13_sizes);
//   mappings.adId.push('div-gpt-ad-1600066047125-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot13) {
//         ub_checkAdRendered('div-gpt-ad-1600066047125-0', ub_slot13, ['/18643286/Story_Middle_Responsive_M_02']);
//       }
//     });
//   });
// }

if(typeof googletag.defineSlot === "function"){
   googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
   googlePush();
}
else{
  setTimeout(function(){
    // googletag.cmd.push(function() {
      googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
      googlePush();
    // });
  }, 500);
}
