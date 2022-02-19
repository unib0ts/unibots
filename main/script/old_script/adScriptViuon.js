var targetAdUnits= [
  'div-gpt-ad-1603855329085-0',
  'div-gpt-ad-1603855362281-0',
  'div-gpt-ad-1603855388018-0',
  'div-gpt-ad-1603855411133-0',
  'div-gpt-ad-1603855439085-0',
  'div-gpt-ad-1603855459369-0',
]
var targetDivID = [
    'unibots-1',
    'unibots-2',
    'unibots-3',
    'unibots-4',
    'unibots-5',
    'unibots-6',
]
for(j=0; j<targetDivID.length; j++){
  if(document.getElementById(targetDivID[j])){
    ubadDiv= document.createElement('div');
    ubadDiv.id = targetAdUnits[j];
    ubtargetDiv = document.getElementById(targetDivID[j]);
    ubtargetDiv.appendChild(ubadDiv);

    // adUnitTemp = {
    //   code: mappings_full_config.adUnitNames[j],
    //   mediaTypes: {
    //       banner: {
    //           sizes: size_array
    //       }
    //   },
    //   bids: mappings_full_config.bids
    // };
    //
    // adUnits.push(adUnitTemp);
  }
}
  // var s3 = document.createElement('script');
  // s3.setAttribute("data-ad-client", "ca-pub-6376205116838079");
  // s3.async = true;
  // s3.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  // document.getElementsByTagName('head')[0].appendChild(s3);

	var s0 = document.createElement('script');
	s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
	s0.type = "text/javascript";
	document.getElementsByTagName('head')[0].appendChild(s0);

  var s1 = document.createElement('script');
  s1.async = "async";
  s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
  s1.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(s1);

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

  var size_array =[[300, 250], [336, 280]];
  var adUnits = [];

  if (document.getElementById('unibots-1')) {
      adUnits1 =
        {
          code: '/22057354005/viuon.in_hb_300x250_1',
          mediaTypes: {
              banner: {
                  sizes: size_array
              }
          },
          bids: [
            { bidder: 'appnexus', params: { placementId: '20509622' } }, /* one placementId for all sizes  my appnexus bidder */
            // { bidder: 'oftmedia', params: { placementId: '19680368' } },
            // { bidder: '33across', params: { siteId : 'b3G35kWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
            // { bidder: 'emx_digital', params: { tagid: '107927' } }, /* sizeless */
            // // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
            // { bidder: 'nobid', params: { siteId: '22049996977' } },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
            // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'criteo', params: {networkId: '10542'} },
            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
            // { bidder: 'criteointl', params: {networkId: '10545'} },
          ]
      };
      adUnits.push(adUnits1);
    }
  if (document.getElementById('unibots-2')) {
      adUnits1 =
        {
          code: '/22057354005/viuon.in_hb_300x250_2',
          mediaTypes: {
              banner: {
                  sizes: size_array
              }
          },
          bids: [
            { bidder: 'appnexus', params: { placementId: '20509622' } }, /* one placementId for all sizes  my appnexus bidder */
            // { bidder: 'oftmedia', params: { placementId: '19680368' } },
            // { bidder: '33across', params: { siteId : 'b3G35kWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
            // { bidder: 'emx_digital', params: { tagid: '107927' } }, /* sizeless */
            // // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
            // { bidder: 'nobid', params: { siteId: '22049996977' } },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
            // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'criteo', params: {networkId: '10542'} },
            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
            // { bidder: 'criteointl', params: {networkId: '10545'} },
          ]
      };
      adUnits.push(adUnits1);
    }
  if (document.getElementById('unibots-3')) {
    adUnits1 =
      {
        code: '/22057354005/viuon.in_hb_300x250_3',
        mediaTypes: {
            banner: {
                sizes: size_array
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '20509622' } }, /* one placementId for all sizes  my appnexus bidder */
          // { bidder: 'oftmedia', params: { placementId: '19680368' } },
          // { bidder: '33across', params: { siteId : 'b3G35kWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          // { bidder: 'emx_digital', params: { tagid: '107927' } }, /* sizeless */
          // // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
          // { bidder: 'nobid', params: { siteId: '22049996977' } },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
          // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots-4')) {
    adUnits1 =
      {
        code: '/22057354005/viuon.in_hb_300x250_4',
        mediaTypes: {
            banner: {
                sizes: size_array
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '20509622' } }, /* one placementId for all sizes  my appnexus bidder */
          // { bidder: 'oftmedia', params: { placementId: '19680368' } },
          // { bidder: '33across', params: { siteId : 'b3G35kWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          // { bidder: 'emx_digital', params: { tagid: '107927' } }, /* sizeless */
          // // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
          // { bidder: 'nobid', params: { siteId: '22049996977' } },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
          // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots-5')) {
    adUnits1 =
      {
        code: '/22057354005/viuon.in_hb_300x250_5',
        mediaTypes: {
            banner: {
                sizes: size_array
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '20509622' } }, /* one placementId for all sizes  my appnexus bidder */
          // { bidder: 'oftmedia', params: { placementId: '19680368' } },
          // { bidder: '33across', params: { siteId : 'b3G35kWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          // { bidder: 'emx_digital', params: { tagid: '107927' } }, /* sizeless */
          // // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
          // { bidder: 'nobid', params: { siteId: '22049996977' } },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
          // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots-6')) {
    adUnits1 =
      {
        code: '/22057354005/viuon.in_hb_300x250_6',
        mediaTypes: {
            banner: {
                sizes: size_array
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '20509622' } }, /* one placementId for all sizes  my appnexus bidder */
          // { bidder: 'oftmedia', params: { placementId: '19680368' } },
          // { bidder: '33across', params: { siteId : 'b3G35kWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          // { bidder: 'emx_digital', params: { tagid: '107927' } }, /* sizeless */
          // // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
          // { bidder: 'nobid', params: { siteId: '22049996977' } },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
          // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
        ]
    };
    adUnits.push(adUnits1);
  }
  // var hb_full_common_bidders = [
  //   { bidder: 'appnexus', params: { placementId: '20509622' } }, /* one placementId for all sizes  my appnexus bidder */
  //   // { bidder: 'oftmedia', params: { placementId: '19680368' } },
  //   // { bidder: '33across', params: { siteId : 'b3G35kWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
  //   // { bidder: 'emx_digital', params: { tagid: '107927' } }, /* sizeless */
  //   // // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
  //   // { bidder: 'nobid', params: { siteId: '22049996977' } },
  //   { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
  //   // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
  //   // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //   // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //   // { bidder: 'criteo', params: {networkId: '10542'} },
  //   { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  //   // { bidder: 'criteointl', params: {networkId: '10545'} },
  // ];
  // var mappings_full_config = {
  //   adUnitNames: [
  //     '/22057354005/viuon.in_hb_300x250_1',
  //     '/22057354005/viuon.in_hb_300x250_2',
  //     '/22057354005/viuon.in_hb_300x250_3',
  //     '/22057354005/viuon.in_hb_300x250_4',
  //     '/22057354005/viuon.in_hb_300x250_5',
  //     '/22057354005/viuon.in_hb_300x250_6',
  //   ],
  //   sizes: [
  //      [300, 250], [336, 280]
  //   ],
  //   bids: [
  //     hb_full_common_bidders.concat([
  //          // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3268941'} },
  //          // { bidder: 'ucfunnel', params: { adid : 'ad-8A29A4E8342A6BA60B22EBEB98AEAB8E'} },
  //        //   { bidder: 'sovrn', params: {tagid: '744064'} },
  //        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
  //     ]), //'/22057354005/viuon.in_hb_300x250_1',
  //     hb_full_common_bidders.concat([
  //          // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3268942'} },
  //          // { bidder: 'ucfunnel', params: { adid : 'ad-BE78EBA933BEEA24C7D38BBEE4B46B42'} },
  //        //   { bidder: 'sovrn', params: {tagid: '744064'} },
  //        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
  //     ]), //'/22057354005/viuon.in_hb_300x250_2',
  //     hb_full_common_bidders.concat([
  //          // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3268943'} },
  //          // { bidder: 'ucfunnel', params: { adid : 'ad-D2342DE83224EAEDFD2DD6D6E7BBA72E'} },
  //        //   { bidder: 'sovrn', params: {tagid: '744064'} },
  //        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
  //     ]), //'/22057354005/viuon.in_hb_300x250_3',
  //     hb_full_common_bidders.concat([
  //          // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3268944'} },
  //          // { bidder: 'ucfunnel', params: { adid : 'ad-8A29A4E7296AAB7B1EAD7A4AA29EED7'} },
  //        //   { bidder: 'sovrn', params: {tagid: '744064'} },
  //        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
  //     ]), //'/22057354005/viuon.in_hb_300x250_4',
  //     hb_full_common_bidders.concat([
  //          // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3268945'} },
  //          // { bidder: 'ucfunnel', params: { adid : 'ad-E2B4276DB6EABA99074778783A99EA4D'} },
  //        //   { bidder: 'sovrn', params: {tagid: '744064'} },
  //        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
  //     ]), //'/22057354005/viuon.in_hb_300x250_5',
  //     hb_full_common_bidders.concat([
  //          // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3268946'} },
  //          // { bidder: 'ucfunnel', params: { adid : 'ad-772876AD24237A49FB9278D4EBB9BDD8'} },
  //        //   { bidder: 'sovrn', params: {tagid: '744064'} },
  //        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
  //     ]), //'/22057354005/viuon.in_hb_300x250_6',
  //   ]
  // }
  // var size_array = mappings_full_config.sizes;

  // for(j=0; j<targetDivID.length; j++){
  //   if(document.getElementById(targetDivID[j])){
  //     console.log('test1');
  //     ubadDiv= document.createElement('div');
  //     ubadDiv.id = targetAdUnits[j];
  //     ubtargetDiv = document.getElementById(targetDivID[j]);
  //     ubtargetDiv.appendChild(ubadDiv);
  //
  //     adUnitTemp = {
  //       code: mappings_full_config.adUnitNames[j],
  //       mediaTypes: {
  //           banner: {
  //               sizes: size_array
  //           }
  //       },
  //       bids: mappings_full_config.bids
  //     };
  //
  //     adUnits.push(adUnitTemp);
  //   }
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
            auctionDelay: 500},
        debug: false,
        useBidCache: true,
        enableSendAllBids: false, // Default will be `true` as of 1.0
        bidderSequence: 'random', // Default is random
        publisherDomain: 'https://viuon.in/',
        bidderTimeout: PREBID_TIMEOUT+500,
        //pubcid: {expInterval: },
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

     // for(j=0; j<targetDivID.length; j++){
     //   if(document.getElementById(targetDivID[j])){
     //     mappings.slotNumbers.push(j+1);
     //     mappings.adCode.push(mappings_full_config.adUnitNames[j]);
     //     mappings.sizes.push(size_array);
     //     mappings.adId.push(targetAdUnits[j]);
     //     googletag.cmd.push(function() {
     //       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
     //         var ub_slots = 'ub_slot'+j+1;
     //         if (event.slot === ub_slots) {
     //           ub_checkAdRendered(targetAdUnits[j], ub_slots, [mappings_full_config.adUnitNames[j]]);
     //         }
     //       });
     //     });
     //   }
     // }
     if (document.getElementById('unibots-1')){
      mappings.slotNumbers.push(1);
      mappings.adCode.push('/22057354005/viuon.in_hb_300x250_1');
      mappings.sizes.push(size_array);
      mappings.adId.push('div-gpt-ad-1603855329085-0');
      googletag.cmd.push(function() {
          googletag.pubads().addEventListener('slotRenderEnded', function(event) {
            if (event.slot === ub_slot1) {
              ub_checkAdRendered('div-gpt-ad-1603855329085-0', ub_slot1, ['/22057354005/viuon.in_hb_300x250_1']);
            }
          });
      });
     }
     if (document.getElementById('unibots-2')){
      mappings.slotNumbers.push(2);
      mappings.adCode.push('/22057354005/viuon.in_hb_300x250_2');
      mappings.sizes.push(size_array);
      mappings.adId.push('div-gpt-ad-1603855362281-0');
       googletag.cmd.push(function() {
           googletag.pubads().addEventListener('slotRenderEnded', function(event) {
             if (event.slot === ub_slot2) {
               ub_checkAdRendered('div-gpt-ad-1603855362281-0', ub_slot2, ['/22057354005/viuon.in_hb_300x250_2']);
             }
           });
       });
      }
     if (document.getElementById('unibots-3')){
       mappings.slotNumbers.push(3);
       mappings.adCode.push('/22057354005/viuon.in_hb_300x250_3');
       mappings.sizes.push(size_array);
       mappings.adId.push('div-gpt-ad-1603855388018-0');
       googletag.cmd.push(function() {
           googletag.pubads().addEventListener('slotRenderEnded', function(event) {
             if (event.slot === ub_slot3) {
               ub_checkAdRendered('div-gpt-ad-1603855388018-0', ub_slot3, ['/22057354005/viuon.in_hb_300x250_3']);
             }
           });
       });
      }
      if (document.getElementById('unibots-4')){
       mappings.slotNumbers.push(4);
       mappings.adCode.push('/22057354005/viuon.in_hb_300x250_4');
       mappings.sizes.push(size_array);
       mappings.adId.push('div-gpt-ad-1603855411133-0');
       googletag.cmd.push(function() {
           googletag.pubads().addEventListener('slotRenderEnded', function(event) {
             if (event.slot === ub_slot4) {
               ub_checkAdRendered('div-gpt-ad-1603855411133-0', ub_slot4, ['/22057354005/viuon.in_hb_300x250_4']);
             }
           });
       });
      }
      if (document.getElementById('unibots-5')){
       mappings.slotNumbers.push(5);
       mappings.adCode.push('/22057354005/viuon.in_hb_300x250_5');
       mappings.sizes.push(size_array);
       mappings.adId.push('div-gpt-ad-1603855439085-0');
        googletag.cmd.push(function() {
            googletag.pubads().addEventListener('slotRenderEnded', function(event) {
              if (event.slot === ub_slot5) {
                ub_checkAdRendered('div-gpt-ad-1603855439085-0', ub_slot5, ['/22057354005/viuon.in_hb_300x250_5']);
              }
            });
        });
       }
      if (document.getElementById('unibots-6')){
        mappings.slotNumbers.push(6);
        mappings.adCode.push('/22057354005/viuon.in_hb_300x250_6');
        mappings.sizes.push(size_array);
        mappings.adId.push('div-gpt-ad-1603855459369-0');
        googletag.cmd.push(function() {
            googletag.pubads().addEventListener('slotRenderEnded', function(event) {
              if (event.slot === ub_slot6) {
                ub_checkAdRendered('div-gpt-ad-1603855459369-0', ub_slot6, ['/22057354005/viuon.in_hb_300x250_6']);
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
         // googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
         // googlePush();
       }, 500);
     }

     // setTimeout(function() {
     //     initAdserver();
     // }, FAILSAFE_TIMEOUT);
  // }
