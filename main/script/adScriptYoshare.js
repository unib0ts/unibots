var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;

mybotBlockedPagesFlag = 1;
mybotBlockedUrl = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/blocks/blocksYoshare.json';
mybotBlockedClientName = 'Yoshare';

if(typeof mybotBlockedPagesFlag !== 'undefined' && mybotBlockedPagesFlag ==1){
  urlToCheck = window.location.host+window.location.pathname+window.location.search;

  var request = new XMLHttpRequest();
  url = 'https://api.unibots.in/block?client='+mybotBlockedClientName+'&page='+urlToCheck;

  request.open('GET', url, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = request.responseText;
      data = JSON.parse(data);
      // data = data[mybotBlockedClientName];
      if(data) {
        // data = data.urls;
        if(data.status == true){
          return false;
        }
        else{
          ubadScript();
        }
      }
    }
    else {
      console.log('Block Check Request failed');
      mybotubScript();
    }
  };
  request.onerror = function() {
    console.log('Request failed');
    mybotubScript();
  };
  request.send();
}
else{
  mybotubScript();
}

// var boturl = window.location.href;

// var ub_divsToCheck = {
// 	"unibots-video": false,
// };
	//
  // var ub_interval = setInterval(() => {
	// 	flag = false;
	// 	checkFlag = false;
	// 	for (x in ub_divsToCheck) {
	// 		if (document.getElementById(x) !== null) {
	// 			ub_divsToCheck[x] = true;
	// 			checkFlag = true;
	// 		}
	// 	}
	// 	for (x in ub_divsToCheck) {
	// 		if (ub_divsToCheck[x] == false) {
	// 			flag = true;
	// 		}
	// 	}
	// 	if (!flag && checkFlag) {
	//
	// 		clearInterval(ub_interval);
	// 	}
	// }, 500);

	mybotGACode = 'G-17950KSECF';
	mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';

	ub_ga= document.createElement('div');
	ub_ga.id = 'gabywa';
	document.getElementsByTagName('head')[0].appendChild(ub_ga);
	document.getElementById('gabywa').innerHTML=mybotgabywa;
	loadAd('gabywa');

const customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $20, 1-cent increments
    }]
};

var div_1_sizes = [970, 250];
var div_2_sizes = [[300, 250], [336, 280]];
var div_3_sizes = [[336, 280], [300, 250]];
// var div_4_sizes = [320, 50];
// var div_5_sizes = [728, 90];

var adUnits = [];

if (document.getElementById('yoshare_unibot1_336x280_300x250_a_tag')) {
		adUnits1 =
			{
				code: '/22082859479,22624242699/yoshare.net_hb_300x250',
				mediaTypes: {
						banner: {
								sizes: div_2_sizes
						}
				},
				bids: [
					{ bidder: 'appnexus', params: { placementId: '20132811' } }, /* one placementId for all sizes  my appnexus bidder */
					{ bidder: 'sovrn', params: {tagid: '867156'} },
					// { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952064'} },
				 { bidder: 'oftmedia', params: { placementId: '22762550' } },
				 { bidder: '33across', params: { siteId : 'cit9hciEmr7kSQaKlKyvbs', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
				 // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
					{ bidder: 'openx', params: {unit: '543530140', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
				 { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
				 // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
					{ bidder: 'nobid', params: { siteId : '22103833237'} },
					{ bidder: 'ucfunnel', params: { adid : 'ad-9A29AA9B43EA9A63C789BA3DD629E7E'} },
				 //  { bidder: 'criteo', params: {networkId: '10542'} },
				 //   { bidder: 'criteointl', params: {networkId: '10545'} },
				 { bidder: 'smartadserver', params: { siteId: '370915', pageId: '1306094', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
				 //   // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
					 { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
					 { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
					// //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
					// { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
				]
		};
		adUnits.push(adUnits1);
	}
if (document.getElementById('yoshare_unibot1_336x280_300x250_b_tag')) {
	adUnits1 =
		{
			code: '/22082859479,22624242699/yoshare.net_hb_300x250_1',
			mediaTypes: {
					banner: {
							sizes: div_3_sizes
					}
			},
			bids: [
				{ bidder: 'appnexus', params: { placementId: '20132811' } }, /* one placementId for all sizes  my appnexus bidder */
				{ bidder: 'sovrn', params: {tagid: '867157'} },
				// { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952064'} },
			 { bidder: 'oftmedia', params: { placementId: '22762550' } },
			 { bidder: '33across', params: { siteId : 'cit9hciEmr7kSQaKlKyvbs', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
			 // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
				{ bidder: 'openx', params: {unit: '543530141', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
			 { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
			 // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
				{ bidder: 'nobid', params: { siteId : '22103833237'} },
				{ bidder: 'ucfunnel', params: { adid : 'ad-D234224D978D947B1D472E6BDD68A92B'} },
			 //  { bidder: 'criteo', params: {networkId: '10542'} },
			 //   { bidder: 'criteointl', params: {networkId: '10545'} },
			 { bidder: 'smartadserver', params: { siteId: '370915', pageId: '1306094', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
			 //   // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
				 { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
				 { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
				// //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
				// { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
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
	renderedFlag: [false, false]
};

function mybotubScript() {
	// var cachebuster = Math.round(new Date().getTime() / 1000);
	url ="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ubPlayer/main/player.js";
	ub_vs = document.createElement("script");
	ub_vs.src = url;
	ub_vs.type = "text/javascript";
	document.getElementsByTagName("head")[0].appendChild(ub_vs);

	ub_vs.onload=function(){
		window.unibots = window.unibots || { cmd: [] };
		unibots.cmd.push(function(){
				unibotsPlayer("yoshare");
		});
	}

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


// if (typeof mobileCheck === "function") {
//   if (mobileCheck()) {
//     adUnits1 =
//       {
//         code: '/21957769615/yoshare.net_hb_320x50',
//         mediaTypes: {
//             banner: {
//                 sizes: div_4_sizes
//             }
//         },
//         bids: [
//           { bidder: 'appnexus', params: { placementId: '20132811' } }, /* one placementId for all sizes  my appnexus bidder */
//           // { bidder: 'sovrn', params: {tagid: '736637'} },
//           // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952064'} },
//          // { bidder: 'oftmedia', params: { placementId: '18671523' } },
//          // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
//          // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
//           // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
//          // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
//          // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
//          //  { bidder: 'nobid', params: { siteId : '22103833237'} },
//          //  { bidder: 'criteo', params: {networkId: '10542'} },
//          //   { bidder: 'criteointl', params: {networkId: '10545'} },
//          //    { bidder: 'smartadserver', params: { siteId: '362097', pageId: '1289598', formatId: '93419', domain: 'https://prg8.smartadserver.com' } },
//          //   // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
//            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//           // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//           // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
//         ]
//     };
//     adUnits.push(adUnits1);
//   }
//   else {
//     adUnits1 =
//       {
//         code: '/21957769615/yoshare.net_hb_728x90',
//         mediaTypes: {
//             banner: {
//                 sizes: div_5_sizes
//             }
//         },
//         bids: [
//           { bidder: 'appnexus', params: { placementId: '20132811' } }, /* one placementId for all sizes  my appnexus bidder */
//           // { bidder: 'sovrn', params: {tagid: '736637'} },
//           // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952064'} },
//          // { bidder: 'oftmedia', params: { placementId: '18671523' } },
//          // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
//          // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
//           // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
//          // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
//          // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          // { bidder: 'nobid', params: { siteId : '22103833237'} },
//          //  { bidder: 'criteo', params: {networkId: '10542'} },
//          //   { bidder: 'criteointl', params: {networkId: '10545'} },
//          //    { bidder: 'smartadserver', params: { siteId: '362097', pageId: '1289598', formatId: '93419', domain: 'https://prg8.smartadserver.com' } },
//          //   // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
//            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//           // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
//           // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
//         ]
//     };
//     adUnits.push(adUnits1);
//   }
// }
  // if (document.getElementById('yoshare_unibot1_tag')) {
  //     adUnits1 =
  //       {
  //         code: '/21957769615/yoshare.net_hb_970x250',
  //         mediaTypes: {
  //             banner: {
  //                 sizes: div_1_sizes
  //             }
  //         },
  //         bids: [
  //           { bidder: 'appnexus', params: { placementId: '20132811' } }, /* one placementId for all sizes  my appnexus bidder */
  //           // { bidder: 'sovrn', params: {tagid: '736637'} },
  //           // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952064'} },
  //          // { bidder: 'oftmedia', params: { placementId: '18671523' } },
  //          // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //          // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
  //           { bidder: 'openx', params: {unit: '543981212', delDomain: 'yieldbird-d.openx.net'} },
  //          // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
  //          // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //           { bidder: 'nobid', params: { siteId : '22103833237'} },
  //           { bidder: 'ucfunnel', params: { adid : 'ad-E2B42247E33296DAC98A8629492877E'} },
  //          //  { bidder: 'criteo', params: {networkId: '10542'} },
  //          //   { bidder: 'criteointl', params: {networkId: '10545'} },
  //           { bidder: 'smartadserver', params: { siteId: '370915', pageId: '1306094', formatId: '94418', domain: 'https://prg8.smartadserver.com' } },
  //          //   // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
  //            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  //            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
  //           // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //           // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
  //         ]
  //     };
  //     adUnits.push(adUnits1);
  //   }


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
             sid:"136",
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
          auctionDelay: 500
      },
      debug: false,
      useBidCache: true,
      enableSendAllBids: false, // Default will be `true` as of 1.0
      bidderSequence: 'random', // Default is random
      publisherDomain: 'https://yoshare.net/',
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

if (document.getElementById('yoshare_unibot1_336x280_300x250_a_tag')){
  document.getElementById('yoshare_unibot1_336x280_300x250_a_tag').innerHTML = '<div id="div-gpt-ad-1638000295109-0">';
		mappings.slotNumbers.push(1);
		mappings.adCode.push('/22082859479,22624242699/yoshare.net_hb_300x250');
		mappings.sizes.push(div_2_sizes);
		mappings.adId.push('div-gpt-ad-1638000295109-0');
		googletag.cmd.push(function() {
				googletag.pubads().addEventListener('slotRenderEnded', function(event) {
					if (event.slot === ub_slot1) {
						ub_checkAdRendered('div-gpt-ad-1638000295109-0', ub_slot1, ['/22082859479,22624242699/yoshare.net_hb_300x250']);
					}
				});
		});
}
if (document.getElementById('yoshare_unibot1_336x280_300x250_b_tag')){
  document.getElementById('yoshare_unibot1_336x280_300x250_b_tag').innerHTML = '<div id="div-gpt-ad-1638076519073-0">';
 mappings.slotNumbers.push(2);
 mappings.adCode.push('/22082859479,22624242699/yoshare.net_hb_300x250_1');
 mappings.sizes.push(div_3_sizes);
 mappings.adId.push('div-gpt-ad-1638076519073-0');
 googletag.cmd.push(function() {
		 googletag.pubads().addEventListener('slotRenderEnded', function(event) {
			 if (event.slot === ub_slot2) {
				 ub_checkAdRendered('div-gpt-ad-1638076519073-0', ub_slot2, ['/22082859479,22624242699/yoshare.net_hb_300x250_1']);
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
	});;
}, 500);
}

}

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

// var botmanCalled = false;
// var userStatusBM = '';
// function callBotman(){
//   if(userStatusBM == ''){
//     var request = new XMLHttpRequest();
//     var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=yoshare';
//     request.open('GET', url, true);
//     request.onload = function() {
//       if (request.status >= 200 && request.status < 400) {
//         var data = request.responseText;
//         if(data != ""){
//           data = JSON.parse(data);
//           userStatusBM = data;
//           if(userStatusBM == "0" || userStatusBM == "3"){
//             callAdsUB();
//           }
//           else{
//             console.log('Not Valid Traffic for openx');
//           }
//         }
//         else{
//           console.error('Data not returned from server');
//           callAdsUB();
//         }
//       }
//       else {
//         console.error('Request failed from server');
//         callAdsUB();
//       }
//     };
//     request.onerror = function() {
//       console.error('Request failed to Reach Server');
//       callAdsUB();
//     };
//     request.send();
//   }
//   else{
//     if(userStatusBM == "0" || userStatusBM == "3"){
//       callAdsUB();
//     }
//     else{
//       console.log('Not Valid Traffic for openx');
//     }
//   }
//
// }
//
// function callAdsUB(){
// 	  googletag.pubads().refresh(mappings.slots);
// }

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

// if (typeof mobileCheck === "function") {
//   if (mobileCheck()) {
//    mappings.slotNumbers.push(4);
//    mappings.adCode.push('/21957769615/yoshare.net_hb_320x50');
//    mappings.sizes.push(div_4_sizes);
//    mappings.adId.push('div-gpt-ad-1603887165988-0');
//    googletag.cmd.push(function() {
//        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//          if (event.slot === ub_slot4) {
//            ub_checkAdRendered('div-gpt-ad-1603887165988-0', ub_slot4, ['/21957769615/yoshare.net_hb_320x50']);
//          }
//        });
//    });
//   }
//   else {
//    mappings.slotNumbers.push(5);
//    mappings.adCode.push('/21957769615/yoshare.net_hb_728x90');
//    mappings.sizes.push(div_5_sizes);
//    mappings.adId.push('div-gpt-ad-1604317477564-0');
//    googletag.cmd.push(function() {
//        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//          if (event.slot === ub_slot5) {
//            ub_checkAdRendered('div-gpt-ad-1604317477564-0', ub_slot5, ['/21957769615/yoshare.net_hb_728x90']);
//          }
//        });
//    });
//   }
// }

  // if (document.getElementById('yoshare_unibot1_tag')){
  //    mappings.slotNumbers.push(1);
  //    mappings.adCode.push('/21957769615/yoshare.net_hb_970x250');
  //    mappings.sizes.push(div_1_sizes);
  //    mappings.adId.push('div-gpt-ad-1598961718084-0');
  //    googletag.cmd.push(function() {
  //        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //          if (event.slot === ub_slot1) {
  //            ub_checkAdRendered('div-gpt-ad-1598961718084-0', ub_slot1, ['/21957769615/yoshare.net_hb_970x250']);
  //          }
  //        });
  //    });
  // }

function loadAd(id, adUnits){
	var elm = document.getElementById(id);
	var scripts = Array(elm.querySelectorAll("script"));
	scripts = scripts[0];
	for(var i=0; i<scripts.length; i++) {
		oldScript = scripts[i];
		const newScript = document.createElement("script");
		var scriptAttr = Array(oldScript.attributes);
		scriptAttr = scriptAttr[0];
		for(var j=0; j<scriptAttr.length; j++) {
			attr = scriptAttr[j];
			newScript.setAttribute(attr.name, attr.value);
		}
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
		newScript.onload = function() {
			if(adUnits !== undefined) {
				smartyads.buildUnits(adUnits);
			}
		};
    oldScript.parentNode.replaceChild(newScript, oldScript);
	}
}

// setTimeout(function() {
//     initAdserver();
// }, FAILSAFE_TIMEOUT);
