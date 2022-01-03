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
               sid:'4', // Same seller_id for the publisher in sellers.json
               hp:1
             }
          ],
     }
});
apSlots = []

// var cachebuster = Math.round(new Date().getTime() / 1000);
// url = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ubPlayer/madhyamam/script.min.js?cb='+cachebuster;
// ub_vs = document.createElement('script');
// ub_vs.src = url;
// ub_vs.type = "text/javascript";
// document.getElementsByTagName('head')[0].appendChild(ub_vs);

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
// var div_2_sizes = [[250, 250], [300, 250], [300, 50], [200, 200]];
// var div_3_sizes = [[250, 250], [300, 250], [300, 50], [200, 200]];
// var div_4_sizes = [[200, 200], [250, 250], [300, 250], [300, 100]];
// var div_5_sizes = [[250, 250], [300, 250], [200, 200]];
// var div_6_sizes = [[200, 200], [250, 250], [300, 250]];
// var div_7_sizes = [[250, 250], [300, 250], [200, 200]];
// var div_8_sizes = [[200, 200], [250, 250], [300, 250]];
//
// var div_9_sizes = [300, 250];
// var div_10_sizes = [300, 250];
// var div_11_sizes = [300, 250];
// var div_12_sizes = [300, 250];
// var div_13_sizes = [300, 250];
// var div_14_sizes = [300, 250];
// var div_15_sizes = [300, 250];
// var div_16_sizes = [300, 250];
// var div_17_sizes = [300, 250];
// var div_18_sizes = [300, 250];

var adUnits = [
    {
        code: '/21928950349,22623753406/madhyamam.com_HB_320x50',
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
          // { bidder: 'appnexus', params: { placementId: '19056048' } },
          // { bidder: 'oftmedia', params: { placementId: '20846125' } }
        ]
    },
    {
        code: '/21928950349,22623753406/madhyamam.com_HB_320x50',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'oftmedia', params: { placementId: '20846125' } },
        	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'openx', params: {unit: '543530353', delDomain: 'unibots-d.openx.net'}},
          { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        	{ bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '719001'} },
        	{ bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
          { bidder: 'nobid', params: { siteId : '21986889043'} },
          { bidder: 'ucfunnel', params: { adid : 'ad-34B844943976B433CD7ED346A3A2E49'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2962616'} },
          { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93231', domain: 'https://prg8.smartadserver.com' }},
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rubicon', params: {accountId: '23976', siteId: '400078', zoneId: '2265414'} }
        ]
    }
];

// if(window.location.href != "https://m.madhyamam.com/" && window.location.href != "https://www.madhyamam.com/"){
//   if(document.getElementById('HomePage_300x250_1') != null){
//     var adUnits1 = {
//         code: '/21957769615/madhyamam.com_wm_300x250_1',
//         mediaTypes: {
//             banner: {
//                 sizes: div_2_sizes
//             }
//         },
//         bids: [
//           { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//           { bidder: 'oftmedia', params: { placementId: '20846125' } },
//           // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//           { bidder: 'openx', params: {unit: '543530355', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//           { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//           { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//           { bidder: 'sovrn', params: {tagid: '738357'} },
//           { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
//           { bidder: 'nobid', params: { siteId : '21986889043'} },
//           { bidder: 'criteo', params: {networkId: '10542'} },
//           { bidder: 'criteointl', params: {networkId: '10545'} },
//           { bidder: 'ucfunnel', params: { adid : 'ad-D23422B27823988B0D73749A8A26A499'} },
//           { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//           { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2962617'} },
//           { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//           //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
//           { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//           // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//           // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//         ]
//     }
//     adUnits.push(adUnits1);
//   }
//   if(document.getElementById('div-gpt-ad-1590738750383-0') != null){
//
//     adUnits1 = {
//         code: '/21957769615/madhyamam.com_wm_300x250_2',
//         mediaTypes: {
//             banner: {
//                 sizes: div_3_sizes
//             }
//         },
//         bids: [
//           { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//           { bidder: 'oftmedia', params: { placementId: '20846125' } },
//           // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//           { bidder: 'openx', params: {unit: '543530359', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//           { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//           { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//           { bidder: 'sovrn', params: {tagid: '738358'} },
//           { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
//           { bidder: 'nobid', params: { siteId : '21986889043'} },
//           { bidder: 'criteo', params: {networkId: '10542'} },
//           { bidder: 'criteointl', params: {networkId: '10545'} },
//           { bidder: 'ucfunnel', params: { adid : 'ad-D23422B279ED29231BD787E2EB82B92'} },
//           { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//           { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2962618'} },
//           { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//           //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
//           { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//           // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//           // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//         ]
//     }
//     adUnits.push(adUnits1);
//   }
// }
// else {
//   if(document.getElementById('unibot1')){
//
//     adUnits1 = {
//         code: '/21959913182/madhyamam.com_hb_300x250_dedicated-1',
//         mediaTypes: {
//             banner: {
//                 sizes: div_4_sizes
//             }
//         },
//         bids: [
//           { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//           { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//           { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//           { bidder: 'rhythmone', params: { placementId: '205372'} }, /* one placementId for all sizes */
//           { bidder: 'nobid', params: { siteId: '21986889043' } },
//           { bidder: 'openx', params: {unit: '543478940', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//           { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//           // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//           // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//           { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3438278'} },
//           { bidder: 'criteo', params: {networkId: '10542'} },
//           { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//           { bidder: 'criteointl', params: {networkId: '10545'} },
//           { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//           { bidder: 'oftmedia', params: { placementId: '20846125' } },
//           // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//           // { bidder: 'openx', params: {unit: '541046178', delDomain: 'yieldbird-d.openx.net'} },
//           // { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//           // { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//           // { bidder: 'sovrn', params: {tagid: '738358'} },
//           // { bidder: 'rhythmone', params: { placementId: '205372'}}, /* one placementId for all sizes */
//           // { bidder: 'nobid', params: { siteId : '21986889043'} },
//           // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//           // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//         ]
//     }
//     adUnits.push(adUnits1);
//   }
// }
// if(document.getElementById('unibot2')){
//
//   adUnits1 = {
//       code: '/21959913182/madhyamam.com_hb_300x250_dedicated-2',
//       mediaTypes: {
//           banner: {
//               sizes: div_5_sizes
//           }
//       },
//       bids: [
//         { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//         { bidder: 'oftmedia', params: { placementId: '20846125' } },
//         { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//         { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//         { bidder: 'rhythmone', params: { placementId: '205372'} }, /* one placementId for all sizes */
//         { bidder: 'nobid', params: { siteId: '21986889043' } },
//         { bidder: 'openx', params: {unit: '543479050', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//         { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//         // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182859'} },
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//         // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//       ]
//   }
//   adUnits.push(adUnits1);
// }
// if(document.getElementById('unibot3')){
//
//   adUnits1 = {
//       code: '/21959913182/madhyamam.com_hb_300x250_dedicated-3',
//       mediaTypes: {
//           banner: {
//               sizes: div_6_sizes
//           }
//       },
//       bids: [
//         { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//         { bidder: 'oftmedia', params: { placementId: '20846125' } },
//         { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//         { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//         { bidder: 'rhythmone', params: { placementId: '205372'} }, /* one placementId for all sizes */
//         { bidder: 'nobid', params: { siteId: '21986889043' } },
//         { bidder: 'openx', params: {unit: '543479144', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//         { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//         // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182860'} },
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//         // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//       ]
//   }
//   adUnits.push(adUnits1);
// }
// if(document.getElementById('unibot4')){
//
//   adUnits1 = {
//       code: '/21959913182/madhyamam.com_hb_300x250_dedicated-4',
//       mediaTypes: {
//           banner: {
//               sizes: div_7_sizes
//           }
//       },
//       bids: [
//         { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//         { bidder: 'oftmedia', params: { placementId: '20846125' } },
//         { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//         { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//         { bidder: 'rhythmone', params: { placementId: '205372'} }, /* one placementId for all sizes */
//         { bidder: 'nobid', params: { siteId: '21986889043' } },
//         { bidder: 'openx', params: {unit: '543479240', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//         { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//         // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182861'} },
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//         // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//       ]
//   }
//   adUnits.push(adUnits1);
// }
// if(document.getElementById('unibot5')){
//
//   adUnits1 = {
//       code: '/21959913182/madhyamam.com_hb_300x250_dedicated-15',
//       mediaTypes: {
//           banner: {
//               sizes: div_18_sizes
//           }
//       },
//       bids: [
//         { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//         { bidder: 'oftmedia', params: { placementId: '20846125' } },
//         { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//         { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//         { bidder: 'rhythmone', params: { placementId: '205372'} }, /* one placementId for all sizes */
//         { bidder: 'nobid', params: { siteId: '21986889043' } },
//         // { bidder: 'openx', params: {unit: '543480127', delDomain: 'unibots-d.openx.net'} },
//         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//         // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3438279'} },
//         { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//         //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//         // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//       ]
//   }
//   adUnits.push(adUnits1);
// }
// if(document.getElementById('unibot6')){
//
//   adUnits1 = {
//       code: '/21959913182/madhyamam.com_hb_300x250_dedicated-5',
//       mediaTypes: {
//           banner: {
//               sizes: div_8_sizes
//           }
//       },
//       bids: [
//         { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//         { bidder: 'oftmedia', params: { placementId: '20846125' } },
//         { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//         { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//         { bidder: 'rhythmone', params: { placementId: '205372'} }, /* one placementId for all sizes */
//         { bidder: 'nobid', params: { siteId: '21986889043' } },
//         { bidder: 'openx', params: {unit: '543480127', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//         { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//         // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182874'} },
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//         // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//       ]
//   }
//   adUnits.push(adUnits1);
// }
//
// if(document.getElementById('unibot7')){
//
//   adUnits1 = {
//       code: '/21959913182/madhyamam.com_hb_300x250_dedicated-6',
//       mediaTypes: {
//           banner: {
//               sizes: div_9_sizes
//           }
//       },
//       bids: [
//         { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//         { bidder: 'oftmedia', params: { placementId: '20846125' } },
//         { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//         { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//         { bidder: 'rhythmone', params: { placementId: '205372'} }, /* one placementId for all sizes */
//         { bidder: 'nobid', params: { siteId: '21986889043' } },
//         { bidder: 'openx', params: {unit: '543530097', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//         { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//         // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182862'} },
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//         // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//       ]
//   }
//   adUnits.push(adUnits1);
// }
// if(document.getElementById('unibot8')){
//
//   adUnits1 = {
//       code: '/21959913182/madhyamam.com_hb_300x250_dedicated-7',
//       mediaTypes: {
//           banner: {
//               sizes: div_10_sizes
//           }
//       },
//       bids: [
//         { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//         { bidder: 'oftmedia', params: { placementId: '20846125' } },
//         { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//         { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//         { bidder: 'rhythmone', params: { placementId: '205372'} }, /* one placementId for all sizes */
//         { bidder: 'nobid', params: { siteId: '21986889043' } },
//         { bidder: 'openx', params: {unit: '543479333', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//         { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//         // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182863'} },
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//         // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//       ]
//   }
//   adUnits.push(adUnits1);
// }
// if(document.getElementById('unibot9')){
//
//   adUnits1 = {
//       code: '/21959913182/madhyamam.com_hb_300x250_dedicated-8',
//       mediaTypes: {
//           banner: {
//               sizes: div_11_sizes
//           }
//       },
//       bids: [
//         { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//         { bidder: 'oftmedia', params: { placementId: '20846125' } },
//         { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//         { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//         { bidder: 'rhythmone', params: { placementId: '205372'} }, /* one placementId for all sizes */
//         { bidder: 'nobid', params: { siteId: '21986889043' } },
//         { bidder: 'openx', params: {unit: '543479425', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//         { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//         // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182864'} },
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//         // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//       ]
//   }
//   adUnits.push(adUnits1);
// }
// if(document.getElementById('unibot10')){
//
//   adUnits1 = {
//       code: '/21959913182/madhyamam.com_hb_300x250_dedicated-9',
//       mediaTypes: {
//           banner: {
//               sizes: div_12_sizes
//           }
//       },
//       bids: [
//         { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//         { bidder: 'oftmedia', params: { placementId: '20846125' } },
//         { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//         { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//         { bidder: 'rhythmone', params: { placementId: '205372'} }, /* one placementId for all sizes */
//         { bidder: 'nobid', params: { siteId: '21986889043' } },
//         { bidder: 'openx', params: {unit: '543479516', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//         { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//         // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182865'} },
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//         // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//       ]
//   }
//   adUnits.push(adUnits1);
// }
// if(document.getElementById('unibot11')){
//
//   adUnits1 = {
//       code: '/21959913182/madhyamam.com_hb_300x250_dedicated-10',
//       mediaTypes: {
//           banner: {
//               sizes: div_13_sizes
//           }
//       },
//       bids: [
//         { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//         { bidder: 'oftmedia', params: { placementId: '20846125' } },
//         { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//         { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//         { bidder: 'rhythmone', params: { placementId: '205372'} }, /* one placementId for all sizes */
//         { bidder: 'nobid', params: { siteId: '21986889043' } },
//         { bidder: 'openx', params: {unit: '543479626', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//         { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//         // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182866'} },
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//         // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//       ]
//   }
//   adUnits.push(adUnits1);
// }
// if(document.getElementById('unibot12')){
//
//   adUnits1 = {
//       code: '/21959913182/madhyamam.com_hb_300x250_dedicated-11',
//       mediaTypes: {
//           banner: {
//               sizes: div_14_sizes
//           }
//       },
//       bids: [
//         { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//         { bidder: 'oftmedia', params: { placementId: '20846125' } },
//         { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//         { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//         { bidder: 'rhythmone', params: { placementId: '205372'} }, /* one placementId for all sizes */
//         { bidder: 'nobid', params: { siteId: '21986889043' } },
//         { bidder: 'openx', params: {unit: '543479774', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//         { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//         // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182867'} },
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//         // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//       ]
//   }
//   adUnits.push(adUnits1);
// }
// if(document.getElementById('unibot13')){
//
//   adUnits1 = {
//       code: '/21959913182/madhyamam.com_hb_300x250_dedicated-12',
//       mediaTypes: {
//           banner: {
//               sizes: div_15_sizes
//           }
//       },
//       bids: [
//         { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//         { bidder: 'oftmedia', params: { placementId: '20846125' } },
//         { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//         { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//         { bidder: 'rhythmone', params: { placementId: '205372'} }, /* one placementId for all sizes */
//         { bidder: 'nobid', params: { siteId: '21986889043' } },
//         { bidder: 'openx', params: {unit: '543479860', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//         { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//         // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182868'} },
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//         // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//       ]
//   }
//   adUnits.push(adUnits1);
// }
// if(document.getElementById('unibot14')){
//
//   adUnits1 = {
//       code: '/21959913182/madhyamam.com_hb_300x250_dedicated-13',
//       mediaTypes: {
//           banner: {
//               sizes: div_16_sizes
//           }
//       },
//       bids: [
//         { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//         { bidder: 'oftmedia', params: { placementId: '20846125' } },
//         { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//         { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//         { bidder: 'rhythmone', params: { placementId: '205372'} }, /* one placementId for all sizes */
//         { bidder: 'nobid', params: { siteId: '21986889043' } },
//         { bidder: 'openx', params: {unit: '543479951', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//         { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//         // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182869'} },
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//         // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//       ]
//   }
//   adUnits.push(adUnits1);
// }
// if(document.getElementById('unibot15')){
//
//   adUnits1 = {
//       code: '/21959913182/madhyamam.com_hb_300x250_dedicated-14',
//       mediaTypes: {
//           banner: {
//               sizes: div_17_sizes
//           }
//       },
//       bids: [
//         { bidder: 'appnexus', params: { placementId: '19056048' } }, /* one placementId for all sizes  my appnexus bidder */
//         { bidder: 'oftmedia', params: { placementId: '20846125' } },
//         { bidder: '33across', params: { siteId : 'c54cg8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
//         { bidder: 'emx_digital', params: { tagid: '97490' } }, /* sizeless */
//         { bidder: 'rhythmone', params: { placementId: '205372'} }, /* one placementId for all sizes */
//         { bidder: 'nobid', params: { siteId: '21986889043' } },
//         { bidder: 'openx', params: {unit: '543480035', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//         { bidder: 'smartadserver', params: { siteId: '362128', pageId: '1289629', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//         // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3182870'} },
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//         // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323748', zoneId: '1680438'} }
//       ]
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
//   slotID: 'div-ub-1',
//   slotName: '/21928950349,22623753406/madhyamam.com_HB_320x50',
//   sizes: mappings.sizes,
// }

// var wm_mappings = {
//   targetUnits: ['HomePage_300x250_1', 'div-gpt-ad-1590738750383-0'],
//   slotNames: ['ub_slot2', 'ub_slot3'],
//   adUnitNames: ['/21957769615/madhyamam.com_wm_300x250_1', '/21957769615/madhyamam.com_wm_300x250_2'],
//   adId: ['div-ub-wm-2', 'div-ub-wm-3'],
//   sizes: [div_2_sizes, div_3_sizes]
// }

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

var botmanCalled = false;
var userStatusBM = '';
function callBotman(){
  if(userStatusBM == ''){
    var request = new XMLHttpRequest();
    var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=madhyamam';
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
  mappings.adCode.push('/21928950349,22623753406/madhyamam.com_HB_320x50');
  mappings.sizes.push(div_1_sizes);
  mappings.adId.push('div-ub-1');
  apSlotTemp = {
    slotID: mappings.adId[0],
    slotName: mappings.adCode[0],
    sizes: mappings.sizes
  }
  apSlots.push(apSlotTemp);
  callAPStagBids(); //Ap part
  googletag.cmd.push(function() {
    // callAPStagBids(); //Ap part
    // callAPSAds(mappings.adCode, mappings.slots);
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAdRendered('div-ub-1', ub_slot1, ['/21928950349,22623753406/madhyamam.com_HB_320x50']);
      }
    });
  });
}
// if (document.getElementById('unibot1')){
//   mappings.slotNumbers.push(4);
//   mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-1');
//   mappings.sizes.push(div_4_sizes);
//   mappings.adId.push('div-gpt-ad-1597237707332-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot4) {
//         ub_checkAdRendered('div-gpt-ad-1597237707332-0', ub_slot4, ['/21959913182/madhyamam.com_hb_300x250_dedicated-1']);
//       }
//     });
//   });
// }
// if (document.getElementById('unibot2')){
//   mappings.slotNumbers.push(5);
//   mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-2');
//   mappings.sizes.push(div_5_sizes);
//   mappings.adId.push('div-gpt-ad-1597687687376-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot5) {
//         ub_checkAdRendered('div-gpt-ad-1597687687376-0', ub_slot5, ['/21959913182/madhyamam.com_hb_300x250_dedicated-2']);
//       }
//     });
//   });
// }
// if (document.getElementById('unibot3')){
//   mappings.slotNumbers.push(6);
//   mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-3');
//   mappings.sizes.push(div_6_sizes);
//   mappings.adId.push('div-gpt-ad-1597687741149-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot6) {
//         ub_checkAdRendered('div-gpt-ad-1597687741149-0', ub_slot6, ['/21959913182/madhyamam.com_hb_300x250_dedicated-3']);
//       }
//     });
//   });
// }
// if (document.getElementById('unibot4')){
//   mappings.slotNumbers.push(7);
//   mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-4');
//   mappings.sizes.push(div_7_sizes);
//   mappings.adId.push('div-gpt-ad-1597687810390-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot7) {
//         ub_checkAdRendered('div-gpt-ad-1597687810390-0', ub_slot7, ['/21959913182/madhyamam.com_hb_300x250_dedicated-4']);
//       }
//     });
//   });
// }
// if (document.getElementById('unibot5')){
//   mappings.slotNumbers.push(18);
//   mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-15');
//   mappings.sizes.push(div_18_sizes);
//   mappings.adId.push('div-gpt-ad-1598356581663-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot18) {
//         ub_checkAdRendered('div-gpt-ad-1598356581663-0', ub_slot18, ['/21959913182/madhyamam.com_hb_300x250_dedicated-15']);
//       }
//     });
//   });
// }
// if (document.getElementById('unibot6')){
//   mappings.slotNumbers.push(8);
//   mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-5');
//   mappings.sizes.push(div_8_sizes);
//   mappings.adId.push('div-gpt-ad-1597752801943-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot8) {
//         ub_checkAdRendered('div-gpt-ad-1597752801943-0', ub_slot8, ['/21959913182/madhyamam.com_hb_300x250_dedicated-5']);
//       }
//     });
//   });
// }
// if (document.getElementById('unibot7')){
//   mappings.slotNumbers.push(9);
//   mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-6');
//   mappings.sizes.push(div_9_sizes);
//   mappings.adId.push('div-gpt-ad-1598350062757-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot9) {
//         ub_checkAdRendered('div-gpt-ad-1598350062757-0', ub_slot9, ['/21959913182/madhyamam.com_hb_300x250_dedicated-6']);
//       }
//     });
//   });
// }
// if (document.getElementById('unibot8')){
//   mappings.slotNumbers.push(10);
//   mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-7');
//   mappings.sizes.push(div_10_sizes);
//   mappings.adId.push('div-gpt-ad-1598350090409-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot10) {
//         ub_checkAdRendered('div-gpt-ad-1598350090409-0', ub_slot10, ['/21959913182/madhyamam.com_hb_300x250_dedicated-7']);
//       }
//     });
//   });
// }
// if (document.getElementById('unibot9')){
//   mappings.slotNumbers.push(11);
//   mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-8');
//   mappings.sizes.push(div_11_sizes);
//   mappings.adId.push('div-gpt-ad-1598350105535-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot11) {
//         ub_checkAdRendered('div-gpt-ad-1598350105535-0', ub_slot11, ['/21959913182/madhyamam.com_hb_300x250_dedicated-8']);
//       }
//     });
//   });
// }
// if (document.getElementById('unibot10')){
//   mappings.slotNumbers.push(12);
//   mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-9');
//   mappings.sizes.push(div_12_sizes);
//   mappings.adId.push('div-gpt-ad-1598350238638-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot12) {
//         ub_checkAdRendered('div-gpt-ad-1598350238638-0', ub_slot12, ['/21959913182/madhyamam.com_hb_300x250_dedicated-9']);
//       }
//     });
//   });
// }
// if (document.getElementById('unibot11')){
//   mappings.slotNumbers.push(13);
//   mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-10');
//   mappings.sizes.push(div_13_sizes);
//   mappings.adId.push('div-gpt-ad-1598350258992-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot13) {
//         ub_checkAdRendered('div-gpt-ad-1598350258992-0', ub_slot13, ['/21959913182/madhyamam.com_hb_300x250_dedicated-10']);
//       }
//     });
//   });
// }
// if (document.getElementById('unibot12')){
//   mappings.slotNumbers.push(14);
//   mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-11');
//   mappings.sizes.push(div_14_sizes);
//   mappings.adId.push('div-gpt-ad-1598350276815-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot14) {
//         ub_checkAdRendered('div-gpt-ad-1598350276815-0', ub_slot14, ['/21959913182/madhyamam.com_hb_300x250_dedicated-11']);
//       }
//     });
//   });
// }
// if (document.getElementById('unibot13')){
//   mappings.slotNumbers.push(15);
//   mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-12');
//   mappings.sizes.push(div_15_sizes);
//   mappings.adId.push('div-gpt-ad-1598350294270-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot15) {
//         ub_checkAdRendered('div-gpt-ad-1598350294270-0', ub_slot15, ['/21959913182/madhyamam.com_hb_300x250_dedicated-12']);
//       }
//     });
//   });
// }
// if (document.getElementById('unibot14')){
//   mappings.slotNumbers.push(16);
//   mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-13');
//   mappings.sizes.push(div_16_sizes);
//   mappings.adId.push('div-gpt-ad-1598350308854-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot16) {
//         ub_checkAdRendered('div-gpt-ad-1598350308854-0', ub_slot16, ['/21959913182/madhyamam.com_hb_300x250_dedicated-13']);
//       }
//     });
//   });
// }
// if (document.getElementById('unibot15')){
//   mappings.slotNumbers.push(17);
//   mappings.adCode.push('/21959913182/madhyamam.com_hb_300x250_dedicated-14');
//   mappings.sizes.push(div_17_sizes);
//   mappings.adId.push('div-gpt-ad-1598350322378-0');
//   googletag.cmd.push(function() {
//     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//       if (event.slot === ub_slot17) {
//         ub_checkAdRendered('div-gpt-ad-1598350322378-0', ub_slot17, ['/21959913182/madhyamam.com_hb_300x250_dedicated-14']);
//       }
//     });
//   });
// }
// if(window.location.href != "https://m.madhyamam.com/" && window.location.href != "https://www.madhyamam.com/"){
//   for(var i=0; i<wm_mappings.targetUnits.length; i++){
//     if (document.getElementById(wm_mappings.targetUnits[i]) != null) {
//       targetUnit = document.getElementById(wm_mappings.targetUnits[i]);
//       parent = targetUnit.parentNode;
//       parent.innerHTML = '';
//       var z= document.createElement('div');
//       z.id = wm_mappings.adId[i];
//       z.className = wm_mappings.adId[i];
//       parent.appendChild(z);
//
//       mappings.slotNumbers.push(i+2);
//       mappings.adCode.push(wm_mappings.adUnitNames[i]);
//       mappings.sizes.push(wm_mappings.sizes[i]);
//       mappings.adId.push(wm_mappings.adId[i]);
//       googletag.cmd.push(function() {
//         googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//           if (event.slot === wm_mappings.slotNames[i]) {
//             ub_checkAdRendered(wm_mappings.adId[i], wm_mappings.slotNames[i], [wm_mappings.adUnitNames[i]]);
//           }
//         });
//       });
//     }
//   }
// }

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
               sid:"4",
               hp:1
             }
           ]
         }
       },
       rubicon: {singleRequest: true},
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
