var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 30000;
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

var div_1_sizes = [[300, 100], [250, 250], [300, 250], [300, 50], [200, 200]];
var div_2_sizes = [300, 250];
var div_3_sizes = [[320, 50], [300, 50], [468, 60]];
var div_4_sizes = [300, 250];
var div_5_sizes = [[320, 100], [320, 50], [728, 90], [468, 60]];
var div_6_sizes = [[300, 50], [320, 50]];
var div_7_sizes = [300, 250];
var div_8_sizes = [300, 250];
// var div_9_sizes = [[160, 600], [120, 600]];
// var div_10_sizes = [[160, 600], [120, 600]];

var adUnits = [];

if (typeof mobileCheck === "function") {
  if (!mobileCheck()) {
    // adUnits1 =
    //   {
    //       code: '/21956916242/beanstalkmums.com.au_nb_160x600_lb',
    //       mediaTypes: {
    //           banner: {
    //               sizes: div_9_sizes
    //           }
    //       },
    //       bids: [
    //        { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
    //        // { bidder: 'oftmedia', params: { placementId: '18671523' } },
    //         // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3120159'} },
    //        // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
    //        // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
    //         { bidder: 'sovrn', params: {tagid: '756479'} },
    //         // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
    //        { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
    //        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
    //         { bidder: 'nobid', params: { siteId : '22042552139'} },
    //         { bidder: 'criteo', params: {networkId: '10542'} },
    //         { bidder: 'criteointl', params: {networkId: '10545'} },
    //         //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
    //         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
    //       ]
    //   };
    // adUnits.push(adUnits1);
    //
    // adUnits1 =
    //   {
    //       code: '/21956916242/beanstalkmums.com.au_nb_160x600_rb',
    //       mediaTypes: {
    //           banner: {
    //               sizes: div_10_sizes
    //           }
    //       },
    //       bids: [
    //        { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
    //        // { bidder: 'oftmedia', params: { placementId: '18671523' } },
    //         // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3120160'} },
    //        // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
    //        // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
    //         { bidder: 'sovrn', params: {tagid: '756480'} },
    //         // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
    //        { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
    //        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
    //         { bidder: 'nobid', params: { siteId : '22042552139'} },
    //         { bidder: 'criteo', params: {networkId: '10542'} },
    //         { bidder: 'criteointl', params: {networkId: '10545'} },
    //         //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
    //         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
    //       ]
    //   };
    // adUnits.push(adUnits1);

    adUnits1 =
      {
          code: '/21956916242/beanstalkmums.com.au_nb_728x90_desktopcentersticky',
          mediaTypes: {
              banner: {
                  sizes: div_5_sizes
              }
          },
          bids: [
           { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
           // { bidder: 'oftmedia', params: { placementId: '18671523' } },
            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952066'} },
           // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
           // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            { bidder: 'sovrn', params: {tagid: '736645'} },
            { bidder: 'openx', params: {unit: '543851443', delDomain: 'unibots-d.openx.net'}},
           { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
           // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            { bidder: 'nobid', params: { siteId : '22042552139'} },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            // { bidder: 'criteo', params: {networkId: '10542'} },
            // { bidder: 'criteointl', params: {networkId: '10545'} },
            { bidder: 'smartadserver', params: { siteId: '362097', pageId: '1289598', formatId: '93233', domain: 'https://prg8.smartadserver.com' }},
            { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
            //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
    adUnits.push(adUnits1);
  }
  else {
    adUnits1 =
        {
            code: '/21956916242/beanstalkmums.com.au_nb_320x50_mobilecentersticky',
            mediaTypes: {
                banner: {
                    sizes: div_6_sizes
                }
            },
            bids: [
            	{ bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
            	// { bidder: 'oftmedia', params: { placementId: '18671523' } },
              { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952067'} },
            	// { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
            	// { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
              { bidder: 'sovrn', params: {tagid: '736646'} },
              { bidder: 'openx', params: {unit: '543851444', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            	{ bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
            	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
              { bidder: 'nobid', params: { siteId : '22042552139'} },
              { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
              // { bidder: 'criteo', params: {networkId: '10542'} },
              // { bidder: 'criteointl', params: {networkId: '10545'} },
              { bidder: 'smartadserver', params: { siteId: '362097', pageId: '1289598', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
              { bidder: 'sonobi', params: { placement_id: 'a55a624e18a52282bcb6', ad_unit: 'beanstalkmums.com.au_nb_320x50' } },
              { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
              //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
              // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
            ]
        };
    adUnits.push(adUnits1);
  }
  if (document.querySelector('.mybotdiv1')) {
    adUnits1 =
      {
        code: '/21956916242/beanstalkmums.com.au_nb_330x250_1',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '736637'} },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952064'} },
         // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
          { bidder: 'openx', params: {unit: '543851441', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
         { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22042552139'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          //  { bidder: 'criteointl', params: {networkId: '10545'} },
            { bidder: 'smartadserver', params: { siteId: '362097', pageId: '1289598', formatId: '93419', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
           // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
           { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.querySelector('.mybotdiv2')) {
    adUnits1 =
      {
        code: '/21956916242/beanstalkmums.com.au_nb_330x250_2',
        mediaTypes: {
            banner: {
                sizes: div_2_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
         // { bidder: 'oftmedia', params: { placementId: '18671523' } },
            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952065'} },
         // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '736644'} },
          { bidder: 'openx', params: {unit: '543851442', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
         { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
         { bidder: 'nobid', params: { siteId : '22042552139'} },
         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'smartadserver', params: { siteId: '362097', pageId: '1289598', formatId: '93419', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.querySelector('.mybotdiv3')) {
    adUnits1 =
      {
        code: '/21956916242/beanstalkmums.com.au_nb_468x60',
        mediaTypes: {
            banner: {
                sizes: div_3_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
         // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952068'} },
         // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '736651'} },
          { bidder: 'openx', params: {unit: '543851445', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
         { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22042552139'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'smartadserver', params: { siteId: '362097', pageId: '1289598', formatId: '93420', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          { bidder: 'sonobi', params: { placement_id: '7aa56dd0b957bb9d3464', ad_unit: 'beanstalkmums.com.au_nb_468x60' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.querySelector('.mybotdiv4')) {
    adUnits1 =
      {
        code: '/21956916242/beanstalkmums.com.au_nb_300x250',
        mediaTypes: {
            banner: {
                sizes: div_4_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
         { bidder: 'oftmedia', params: { placementId: '19738673' } },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3063520'} },
         // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '748838'} },
          { bidder: 'openx', params: {unit: '543851447', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
         { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22042552139'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'smartadserver', params: { siteId: '362097', pageId: '1289598', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          { bidder: 'sonobi', params: { placement_id: 'a8d815112caa95d27b64', ad_unit: 'beanstalkmums.com.au_nb_300x250' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.querySelector('.mybotdiv5')) {
    adUnits1 =
      {
        code: '/21956916242/beanstalkmums.com.au_nb_300x250_1',
        mediaTypes: {
            banner: {
                sizes: div_7_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
         { bidder: 'oftmedia', params: { placementId: '19738674' } },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3063521'} },
         // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '748839'} },
          { bidder: 'openx', params: {unit: '543851448', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
         { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22042552139'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'smartadserver', params: { siteId: '362097', pageId: '1289598', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.querySelector('.mybotdiv6')) {
    adUnits1 =
      {
        code: '/21956916242/beanstalkmums.com.au_nb_300x250_3',
        mediaTypes: {
            banner: {
                sizes: div_8_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '19455531' } }, /* one placementId for all sizes  my appnexus bidder */
         { bidder: 'oftmedia', params: { placementId: '19738675' } },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3063522'} },
         // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '748843'} },
          { bidder: 'openx', params: {unit: '543851449', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
         { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22042552139'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'smartadserver', params: { siteId: '362097', pageId: '1289598', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
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
      publisherDomain: 'https://beanstalkmums.com.au/',
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

var slots = [], adCode = [], slotNumbers = [], sizes = [], adId = [];
var renderedFlag = [false, false, false, false, false, false,false, false];

function ub_checkAdRendered(adId, ub_slot, adCode, slot_string){
  ub_slotNum = slot_string[slot_string.length-1]-1;
  if(!renderedFlag[ub_slotNum]){
    adId1 = adId;
    var nodes = document.getElementById(adId1).childNodes[0].childNodes;
    if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      setInterval(function() {
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
            // googletag.pubads().refresh(slots);
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
    var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=beanstalkmums';
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
	googletag.pubads().refresh(slots);
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
    // slotNumbers.push(9);
    // adCode.push('/21956916242/beanstalkmums.com.au_nb_160x600_lb');
    // sizes.push(div_9_sizes);
    // adId.push('div-gpt-ad-1596486706516-0');
    // googletag.cmd.push(function() {
    //     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
    //       if (event.slot === ub_slot9) {
    //         ub_checkAdRendered('div-gpt-ad-1596486706516-0', ub_slot9, ['/21956916242/beanstalkmums.com.au_nb_160x600_lb']);
    //       }
    //     });
    // });
    //
    // slotNumbers.push(10);
    // adCode.push('/21956916242/beanstalkmums.com.au_nb_160x600_rb');
    // sizes.push(div_10_sizes);
    // adId.push('div-gpt-ad-1596486730307-0');
    // googletag.cmd.push(function() {
    //     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
    //       if (event.slot === ub_slot10) {
    //         ub_checkAdRendered('div-gpt-ad-1596486730307-0', ub_slot10, ['/21956916242/beanstalkmums.com.au_nb_160x600_rb']);
    //       }
    //     });
    // });

   slotNumbers.push(5);
   adCode.push('/21956916242/beanstalkmums.com.au_nb_728x90_desktopcentersticky');
   sizes.push(div_5_sizes);
   adId.push('div-gpt-ad-1591770589095-0');
   googletag.cmd.push(function() {
       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
         if (event.slot === ub_slot5) {
           ub_checkAdRendered('div-gpt-ad-1591770589095-0', ub_slot5, ['/21956916242/beanstalkmums.com.au_nb_728x90_desktopcentersticky'], "ub_slot5");
         }
       });
   });
  }
  else {
   slotNumbers.push(6);
   adCode.push('/21956916242/beanstalkmums.com.au_nb_320x50_mobilecentersticky');
   sizes.push(div_6_sizes);
   adId.push('div-gpt-ad-1591770694120-0');
   googletag.cmd.push(function() {
       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
         if (event.slot === ub_slot6) {
           ub_checkAdRendered('div-gpt-ad-1591770694120-0', ub_slot6, ['/21956916242/beanstalkmums.com.au_nb_320x50_mobilecentersticky'], "ub_slot6");
         }
       });
   });
  }
  if (document.querySelector('.mybotdiv1')){
   slotNumbers.push(1);
   adCode.push('/21956916242/beanstalkmums.com.au_nb_330x250_1');
   sizes.push(div_1_sizes);
   adId.push('div-gpt-ad-1591769932677-0');
   googletag.cmd.push(function() {
       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
         if (event.slot === ub_slot1) {
           ub_checkAdRendered('div-gpt-ad-1591769932677-0', ub_slot1, ['/21956916242/beanstalkmums.com.au_nb_330x250_1'], "ub_slot1");
         }
       });
   });
  }
  if (document.querySelector('.mybotdiv2')){
   slotNumbers.push(2);
   adCode.push('/21956916242/beanstalkmums.com.au_nb_330x250_2');
   sizes.push(div_2_sizes);
   adId.push('div-gpt-ad-1591770089425-0');
    googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot2) {
            ub_checkAdRendered('div-gpt-ad-1591770089425-0', ub_slot2, ['/21956916242/beanstalkmums.com.au_nb_330x250_2'], "ub_slot2");
          }
        });
    });
   }
  if (document.querySelector('.mybotdiv3')){
    slotNumbers.push(3);
    adCode.push('/21956916242/beanstalkmums.com.au_nb_468x60');
    sizes.push(div_3_sizes);
    adId.push('div-gpt-ad-1591770917680-0');
    googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot3) {
            ub_checkAdRendered('div-gpt-ad-1591770917680-0', ub_slot3, ['/21956916242/beanstalkmums.com.au_nb_468x60'], "ub_slot3");
          }
        });
    });
   }
  if (document.querySelector('.mybotdiv4')){
     slotNumbers.push(4);
     adCode.push('/21956916242/beanstalkmums.com.au_nb_300x250');
     sizes.push(div_4_sizes);
     adId.push('div-gpt-ad-1594713897080-0');
     googletag.cmd.push(function() {
         googletag.pubads().addEventListener('slotRenderEnded', function(event) {
           if (event.slot === ub_slot4) {
             ub_checkAdRendered('div-gpt-ad-1594713897080-0', ub_slot4, ['/21956916242/beanstalkmums.com.au_nb_300x250'], "ub_slot4");
           }
         });
     });
    }
  if (document.querySelector('.mybotdiv5')){
      slotNumbers.push(7);
      adCode.push('/21956916242/beanstalkmums.com.au_nb_300x250_1');
      sizes.push(div_7_sizes);
      adId.push('div-gpt-ad-1594713977636-0');
      googletag.cmd.push(function() {
          googletag.pubads().addEventListener('slotRenderEnded', function(event) {
            if (event.slot === ub_slot7) {
              ub_checkAdRendered('div-gpt-ad-1594713977636-0', ub_slot7, ['/21956916242/beanstalkmums.com.au_nb_300x250_1'], "ub_slot7");
            }
          });
      });
     }
  if (document.querySelector('.mybotdiv6')){
       slotNumbers.push(8);
       adCode.push('/21956916242/beanstalkmums.com.au_nb_300x250_3');
       sizes.push(div_8_sizes);
       adId.push('div-gpt-ad-1594714013112-0');
       googletag.cmd.push(function() {
           googletag.pubads().addEventListener('slotRenderEnded', function(event) {
             if (event.slot === ub_slot8) {
               ub_checkAdRendered('div-gpt-ad-1594714013112-0', ub_slot8, ['/21956916242/beanstalkmums.com.au_nb_300x250_3'], "ub_slot8");
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
setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);
