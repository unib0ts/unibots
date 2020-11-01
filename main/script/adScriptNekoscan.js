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

var div_1_sizes = [300, 250];
var div_2_sizes = [300, 250];
var div_3_sizes = [300, 250];
var div_4_sizes = [336, 280];
var div_5_sizes = [336, 280];
var div_6_sizes = [336, 280];

var adUnits = [];

// if (typeof mobileCheck === "function") {
  // if (!mobileCheck()) {
  //   // adUnits1 =
  //   //   {
  //   //       code: '/21956916242/beanstalkmums.com.au_nb_160x600_lb',
  //   //       mediaTypes: {
  //   //           banner: {
  //   //               sizes: div_9_sizes
  //   //           }
  //   //       },
  //   //       bids: [
  //   //        { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
  //   //        // { bidder: 'oftmedia', params: { placementId: '18671523' } },
  //   //         // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952066'} },
  //   //        // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //   //        // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
  //   //         { bidder: 'sovrn', params: {tagid: '756479'} },
  //   //         // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
  //   //        { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
  //   //        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //   //         { bidder: 'nobid', params: { siteId : '22042552139'} },
  //   //         { bidder: 'criteo', params: {networkId: '10542'} },
  //   //         { bidder: 'criteointl', params: {networkId: '10545'} },
  //   //         //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //   //         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
  //   //       ]
  //   //   };
  //   // adUnits.push(adUnits1);
  //   //
  //   // adUnits1 =
  //   //   {
  //   //       code: '/21956916242/beanstalkmums.com.au_nb_160x600_rb',
  //   //       mediaTypes: {
  //   //           banner: {
  //   //               sizes: div_10_sizes
  //   //           }
  //   //       },
  //   //       bids: [
  //   //        { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
  //   //        // { bidder: 'oftmedia', params: { placementId: '18671523' } },
  //   //         // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952066'} },
  //   //        // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //   //        // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
  //   //         { bidder: 'sovrn', params: {tagid: '756480'} },
  //   //         // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
  //   //        { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
  //   //        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //   //         { bidder: 'nobid', params: { siteId : '22042552139'} },
  //   //         { bidder: 'criteo', params: {networkId: '10542'} },
  //   //         { bidder: 'criteointl', params: {networkId: '10545'} },
  //   //         //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //   //         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
  //   //       ]
  //   //   };
  //   // adUnits.push(adUnits1);
  //
  //   adUnits1 =
  //     {
  //         code: '/21956916242/beanstalkmums.com.au_nb_728x90_desktopcentersticky',
  //         mediaTypes: {
  //             banner: {
  //                 sizes: div_5_sizes
  //             }
  //         },
  //         bids: [
  //          { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
  //          // { bidder: 'oftmedia', params: { placementId: '18671523' } },
  //           { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952066'} },
  //          // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //          // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
  //           { bidder: 'sovrn', params: {tagid: '736645'} },
  //           // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
  //          { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
  //          // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //           { bidder: 'nobid', params: { siteId : '22042552139'} },
  //           { bidder: 'criteo', params: {networkId: '10542'} },
  //           { bidder: 'criteointl', params: {networkId: '10545'} },
  //           { bidder: 'smartadserver', params: { siteId: '362097', pageId: '1289598', formatId: '93233', domain: 'https://prg8.smartadserver.com' } },
  //           { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
  //           { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  //           //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //           // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
  //         ]
  //     };
  //   adUnits.push(adUnits1);
  // }
  // if (mobileCheck()) {
  //   adUnits1 =
  //       {
  //           code: '/21956916242/mytechintro.com_hb_320x100_1',
  //           mediaTypes: {
  //               banner: {
  //                   sizes: div_9_sizes
  //               }
  //           },
  //           bids: [
  //           	{ bidder: 'appnexus', params: { placementId: '20028947' } }, /* one placementId for all sizes  my appnexus bidder */
  //           	// { bidder: 'oftmedia', params: { placementId: '18671523' } },
  //             // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952067'} },
  //           	// // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //           	// // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
  //             // { bidder: 'sovrn', params: {tagid: '736646'} },
  //             // // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
  //           	// { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
  //           	// // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //             // { bidder: 'nobid', params: { siteId : '22042552139'} },
  //             // { bidder: 'criteo', params: {networkId: '10542'} },
  //             // { bidder: 'criteointl', params: {networkId: '10545'} },
  //             // { bidder: 'smartadserver', params: { siteId: '362097', pageId: '1289598', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
  //             // { bidder: 'sonobi', params: { placement_id: 'a55a624e18a52282bcb6', ad_unit: 'beanstalkmums.com.au_nb_320x50' } },
  //             { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  //             //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //             // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
  //           ]
  //       };
  //   adUnits.push(adUnits1);
  // }
  if (document.getElementById('unibots1')) {
    adUnits1 =
      {
        code: '/21957769615/nekoscan.com_hb_300x250_1',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '20243362' } }, /* one placementId for all sizes  my appnexus bidder */
          // { bidder: 'sovrn', params: {tagid: '736637'} },
          // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952064'} },
         // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
          // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
         //  { bidder: 'nobid', params: { siteId : '22100091150'} },
         // //  { bidder: 'criteo', params: {networkId: '10542'} },
         // //   { bidder: 'criteointl', params: {networkId: '10545'} },
         //    { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
         // //   // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
           { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
           { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots2')) {
    adUnits1 =
      {
        code: '/21957769615/nekoscan.com_hb_300x250_2',
        mediaTypes: {
            banner: {
                sizes: div_2_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '20243362' } }, /* one placementId for all sizes  my appnexus bidder */
         // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         // //    { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952065'} },
         // // // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
         // //  { bidder: 'sovrn', params: {tagid: '736644'} },
         // //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
         //    { bidder: 'nobid', params: { siteId : '22100091150'} },
         // //  { bidder: 'criteo', params: {networkId: '10542'} },
         // //  { bidder: 'criteointl', params: {networkId: '10545'} },
         // { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
         // //  // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots3')) {
    adUnits1 =
      {
        code: '/21957769615/nekoscan.com_hb_300x250_3',
        mediaTypes: {
            banner: {
                sizes: div_3_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '20243362' } }, /* one placementId for all sizes  my appnexus bidder */
         // // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         // //  { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952068'} },
         // // // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
         // //  { bidder: 'sovrn', params: {tagid: '736651'} },
         // //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
         //  { bidder: 'nobid', params: { siteId : '22100091150'} },
         // //  { bidder: 'criteo', params: {networkId: '10542'} },
         // //  { bidder: 'criteointl', params: {networkId: '10545'} },
         // { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
         // //  { bidder: 'sonobi', params: { placement_id: '7aa56dd0b957bb9d3464', ad_unit: 'beanstalkmums.com.au_nb_468x60' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots4')) {
    adUnits1 =
      {
        code: '/21957769615/nekoscan.com_hb_336x280_4',
        mediaTypes: {
            banner: {
                sizes: div_4_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '20243362' } }, /* one placementId for all sizes  my appnexus bidder */
         //  // { bidder: 'sovrn', params: {tagid: '736637'} },
         //  // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952064'} },
         // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         // // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
         //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
         //  { bidder: 'nobid', params: { siteId : '22100091150'} },
         // //  { bidder: 'criteo', params: {networkId: '10542'} },
         // //   { bidder: 'criteointl', params: {networkId: '10545'} },
         // { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93417', domain: 'https://prg8.smartadserver.com' } },
         // //   // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
           { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
           { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots5')) {
    adUnits1 =
      {
        code: '/21957769615/nekoscan.com_hb_336x280_5',
        mediaTypes: {
            banner: {
                sizes: div_5_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '20243362' } }, /* one placementId for all sizes  my appnexus bidder */
         // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         // //    { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952065'} },
         // // // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
         // //  { bidder: 'sovrn', params: {tagid: '736644'} },
         // //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
         //     { bidder: 'nobid', params: { siteId : '22100091150'} },
         // //  { bidder: 'criteo', params: {networkId: '10542'} },
         // //  { bidder: 'criteointl', params: {networkId: '10545'} },
         // { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93417', domain: 'https://prg8.smartadserver.com' } },
         // //  // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots6')) {
    adUnits1 =
      {
        code: '/21957769615/nekoscan.com_hb_336x280_6',
        mediaTypes: {
            banner: {
                sizes: div_6_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '20243362' } }, /* one placementId for all sizes  my appnexus bidder */
         // // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         // //  { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952068'} },
         // // // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
         // //  { bidder: 'sovrn', params: {tagid: '736651'} },
         // //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
         //  { bidder: 'nobid', params: { siteId : '22100091150'} },
         // //  { bidder: 'criteo', params: {networkId: '10542'} },
         // //  { bidder: 'criteointl', params: {networkId: '10545'} },
         // { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93418', domain: 'https://prg8.smartadserver.com' } },
         // //  { bidder: 'sonobi', params: { placement_id: '7aa56dd0b957bb9d3464', ad_unit: 'beanstalkmums.com.au_nb_468x60' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
         //  // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
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
          auctionDelay: 500
      },
      debug: false,
      useBidCache: true,
      enableSendAllBids: false, // Default will be `true` as of 1.0
      bidderSequence: 'random', // Default is random
      publisherDomain: 'https://nekoscan.com/',
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

var mappings = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  adId: [],
  renderedFlag: [false, false, false, false, false, false]
};

function ub_checkAdRendered(adId, ub_slot, adCode){
  ub_slotNum = ub_slot[ub_slot.length-1];
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

// if(typeof mobileCheck === "function"){
  // if (!mobileCheck()){
  //   // slotNumbers.push(9);
  //   // adCode.push('/21956916242/beanstalkmums.com.au_nb_160x600_lb');
  //   // sizes.push(div_9_sizes);
  //   // adId.push('div-gpt-ad-1596486706516-0');
  //   // googletag.cmd.push(function() {
  //   //     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //   //       if (event.slot === ub_slot9) {
  //   //         ub_checkAdRendered('div-gpt-ad-1596486706516-0', ub_slot9, ['/21956916242/beanstalkmums.com.au_nb_160x600_lb']);
  //   //       }
  //   //     });
  //   // });
  //   //
  //   // slotNumbers.push(10);
  //   // adCode.push('/21956916242/beanstalkmums.com.au_nb_160x600_rb');
  //   // sizes.push(div_10_sizes);
  //   // adId.push('div-gpt-ad-1596486730307-0');
  //   // googletag.cmd.push(function() {
  //   //     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //   //       if (event.slot === ub_slot10) {
  //   //         ub_checkAdRendered('div-gpt-ad-1596486730307-0', ub_slot10, ['/21956916242/beanstalkmums.com.au_nb_160x600_rb']);
  //   //       }
  //   //     });
  //   // });
  //
  //  slotNumbers.push(5);
  //  adCode.push('/21956916242/beanstalkmums.com.au_nb_728x90_desktopcentersticky');
  //  sizes.push(div_5_sizes);
  //  adId.push('div-gpt-ad-1591770589095-0');
  //  googletag.cmd.push(function() {
  //      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //        if (event.slot === ub_slot5) {
  //          ub_checkAdRendered('div-gpt-ad-1591770589095-0', ub_slot5, ['/21956916242/beanstalkmums.com.au_nb_728x90_desktopcentersticky']);
  //        }
  //      });
  //  });
  // }

if (document.getElementById('unibots1')){
 mappings.slotNumbers.push(1);
 mappings.adCode.push('/21957769615/nekoscan.com_hb_300x250_1');
 mappings.sizes.push(div_1_sizes);
 mappings.adId.push('div-gpt-ad-1601040951620-0');
 googletag.cmd.push(function() {
     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
       if (event.slot === ub_slot1) {
         ub_checkAdRendered('div-gpt-ad-1601040951620-0', ub_slot1, ['/21957769615/nekoscan.com_hb_300x250_1']);
       }
     });
 });
}
if (document.getElementById('unibots2')){
 mappings.slotNumbers.push(2);
 mappings.adCode.push('/21957769615/nekoscan.com_hb_300x250_2');
 mappings.sizes.push(div_2_sizes);
 mappings.adId.push('div-gpt-ad-1601040966928-0');
  googletag.cmd.push(function() {
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot2) {
          ub_checkAdRendered('div-gpt-ad-1601040966928-0', ub_slot2, ['/21957769615/nekoscan.com_hb_300x250_2']);
        }
      });
  });
 }
if (document.getElementById('unibots3')){
  mappings.slotNumbers.push(3);
  mappings.adCode.push('/21957769615/nekoscan.com_hb_300x250_3');
  mappings.sizes.push(div_3_sizes);
  mappings.adId.push('div-gpt-ad-1601040992016-0');
  googletag.cmd.push(function() {
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot3) {
          ub_checkAdRendered('div-gpt-ad-1601040992016-0', ub_slot3, ['/21957769615/nekoscan.com_hb_300x250_3']);
        }
      });
  });
 }
if (document.getElementById('unibots4')){
  mappings.slotNumbers.push(4);
  mappings.adCode.push('/21957769615/nekoscan.com_hb_336x280_4');
  mappings.sizes.push(div_4_sizes);
  mappings.adId.push('div-gpt-ad-1601041010696-0');
  googletag.cmd.push(function() {
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot4) {
          ub_checkAdRendered('div-gpt-ad-1601041010696-0', ub_slot4, ['/21957769615/nekoscan.com_hb_336x280_4']);
        }
      });
  });
 }
if (document.getElementById('unibots5')){
  mappings.slotNumbers.push(5);
  mappings.adCode.push('/21957769615/nekoscan.com_hb_336x280_5');
  mappings.sizes.push(div_5_sizes);
  mappings.adId.push('div-gpt-ad-1601041028357-0');
   googletag.cmd.push(function() {
       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
         if (event.slot === ub_slot5) {
           ub_checkAdRendered('div-gpt-ad-1601041028357-0', ub_slot5, ['/21957769615/nekoscan.com_hb_336x280_5']);
         }
       });
   });
  }
if (document.getElementById('unibots6')){
   mappings.slotNumbers.push(6);
   mappings.adCode.push('/21957769615/nekoscan.com_hb_336x280_6');
   mappings.sizes.push(div_6_sizes);
   mappings.adId.push('div-gpt-ad-1601041046400-0');
   googletag.cmd.push(function() {
       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
         if (event.slot === ub_slot6) {
           ub_checkAdRendered('div-gpt-ad-1601041046400-0', ub_slot6, ['/21957769615/nekoscan.com_hb_336x280_6']);
         }
       });
   });
  }
// }

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

setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);
