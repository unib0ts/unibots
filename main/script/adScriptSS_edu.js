if(typeof customConfigObjectA === 'undefined'){
  // var s0 = document.createElement('script');
  // s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
  // s0.type = "text/javascript";
  // document.getElementsByTagName('head')[0].appendChild(s0);

  var s1 = document.createElement('script');
  s1.async = "async";
  s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
  s1.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(s1);

  var PREBID_TIMEOUT = 2000;
  var FAILSAFE_TIMEOUT = 3000;
  var REFRESH_TIMEOUT = 60000;
  // var ubScriptUrl = window.location.href;

  // var GEO_CODE = '';
  // (function (){
  //   var request = new XMLHttpRequest();
  // 		url = 'https://pro.ip-api.com/json/?fields=status,message,countryCode&key=LWKtz4EzQwMJRyQ';
  // 		request.open('GET', url, true);
  // 		request.onload = function() {
  // 			if (request.status >= 200 && request.status < 400) {
  // 				var data = request.responseText;
  // 				data = JSON.parse(data);
  // 				if(data.status == "success") {
  //           GEO_CODE = data.countryCode;
  // 				}
  // 				else {
  // 					console.error("Geo Request Failed");
  // 				}
  // 			}
  // 			else {
  // 				console.error('Request failed from server');
  // 			}
  //       mainHbRun();
  // 		};
  // 		request.onerror = function() {
  // 			console.error('Request failed to Reach GEO Server');
  //       mainHbRun();
  // 		};
  // 		request.send();
  // })();

  const customConfigObjectA = {
   "buckets" : [{
      "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
      "min" : 0,
      "max" : 20,
      "increment" : 0.01  // from $0 to $5, 1-cent increments
      }]
  };

  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
  googletag.cmd.push(function() {
      googletag.pubads().disableInitialLoad();
  });

  var ubpbjs = ubpbjs || {};
  ubpbjs.que = ubpbjs.que || [];
  // function mainHbRun(){
    ubpbjs.que.push(function() {
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
        'onetag': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
        //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },

        '33across': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
        'emx_digital': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
        'rhythmone': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
        'eplanning': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } }
      };
      ubpbjs.setConfig({
        priceGranularity: customConfigObjectA,
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
        publisherDomain: 'https://www.sakshieducation.com/',
        bidderTimeout: PREBID_TIMEOUT+500,
        //pubcid: {expInterval: },
        //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
       });
       // ubpbjs.requestBids({
       //     bidsBackHandler: initAdserver,
       //     timeout: PREBID_TIMEOUT,
       //     labels: [GEO_CODE],
       // });
    });
  // }


  var mapping_full_hb = {
    slots: [],
    adCode: [],
    slotNumbers: [],
    sizes: [],
    renderedFlag: []
  }

  var adUnits_full_hb = [];
  var hb_full_common_bidders = [
    { bidder: 'appnexus', params: { placementId: '19056673' } }, /* one placementId for all sizes  my appnexus bidder */
    //{ bidder: 'oftmedia', params: { placementId: '18778196' } },
    { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
    { bidder: 'emx_digital', params: { tagid: '97515' } }, /* sizeless */
    { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
    { bidder: 'nobid', params: { siteId: '21987177881' } },
    // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
    // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
    // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
    { bidder: 'criteo', params: {networkId: '10542'} },
    { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
    { bidder: 'criteointl', params: {networkId: '10545'} },
  ];
  var mappings_full_hb_config_old = {
    targetUnits: [],
    adUnitNames: [],

    sizes: [],
    bids: []
  }

  // var mappings_full_hb_config_desktop = {
  //   adUnitNames: [
  //     // '/21692080761/amb_es_desk_lb_1',
  //     // '/21692080761/amb_es_desk_lb_2',
  //     // '/21692080761/amb_es_desk_lb_3',
  //     // '/21692080761/amb_es_header_desk_v2',
  //     // '/21692080761/amb_es_footer_desk_v2',
  //     // '/21692080761/amb_eng_desk_lb_3',
  //     // '/21692080761/amb_eng_desk_lb_2',
  //     // '/21692080761/amb_eng_footer_desk_v2',
  //     // '/21692080761/amb_hindi_desk_lb_1',
  //     // '/21692080761/amb_hindi_desk_lb_2',
  //     // '/21692080761/amb_hindi_desk_lb_3',
  //     // '/21692080761/amb_hindi_header_desk_v2',
  //     // '/21692080761/amb_hindi_footer_desk_v2',
  //
  //   ],
  //   bids: [
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983535'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744064'} },
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
  //      ]), //sakshiNew_box2_300x250
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983536'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744057'} },
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
  //      ]), //sakshiNew_box3_300x250
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
  //      ]), //fullstories_300x50_firstslot
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983530'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744083'} },
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233' } }
  //      ]), //sakshiNew_HP
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983532'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744068'} },
  //     //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi', domain: 'https://prg8.smartadserver.com' } }
  //      ]), //1062118/sakshiNew_skin_Left
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983533'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744079'} },
  //     //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
  //      ]), //1062118/sakshiNew_skin_right
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744058'} },
  //      ]), //1062118/SakshiNew_HP_Box_300x600,
  //      hb_full_common_bidders.concat([
  //        //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
  //        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
  //      ]), //1062118/Desktop_HP_300x100
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983533'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744079'} },
  //     //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
  //      ]), //1062118/sakshiNew_skin_right
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744058'} },
  //      ]), //1062118/SakshiNew_HP_Box_300x600,
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744058'} },
  //      ]), //1062118/SakshiNew_HP_Box_300x600,
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744058'} },
  //      ]), //1062118/SakshiNew_HP_Box_300x600,
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
  //      ]) //1062118/Desktop_HP_300x100
  //   ]
  // }
  // var mappings_full_hb_config_mobile = {
  //   adUnitNames: [
  //     // '/21692080761/amb_es_mob_mpu_1',
  //     // '/21692080761/amb_es_mob_mpu_2',
  //     // '/21692080761/amb_es_mob_mpu_3',
  //     // '/21692080761/amb_es_header_mob_v2',
  //     // '/21692080761/amb_es_footer_mob_v2',
  //     // '21692080761/amb_eng_mob_mpu_3',
  //     // '/21692080761/amb_eng_mob_mpu_2',
  //     // '/21692080761/amb_eng_header_mob_v2',
  //     // '/21692080761/amb_eng_footer_mob_v2',
  //     // '/21692080761/amb_hindi_mob_lb_1',
  //     // '/21692080761/amb_hindi_mob_mpu_1',
  //     // '/21692080761/amb_hindi_mob_mpu_2',
  //     // '/21692080761/amb_hindi_header_mob_v2',
  //     // '/21692080761/amb_hindi_footer_mob_v2'
  //   ],
  //   bids: [
  //     hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983534'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744054'} },
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
  //      ]), //sakshiNew_box1_300x250
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983535'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744064'} },
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
  //      ]), //sakshiNew_box2_300x250
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983536'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744057'} },
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
  //      ]), //sakshiNew_box3_300x250
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
  //      ]), //fullstories_300x50_firstslot
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983530'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744083'} },
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233' } }
  //      ]), //sakshiNew_HP
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983532'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744068'} },
  //     //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi', domain: 'https://prg8.smartadserver.com' } }
  //      ]), //1062118/sakshiNew_skin_Left
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983533'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744079'} },
  //     //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
  //      ]), //1062118/sakshiNew_skin_right
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744058'} },
  //      ]), //1062118/SakshiNew_HP_Box_300x600,
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
  //       ]), //1062118/Desktop_HP_300x100
  //       hb_full_common_bidders.concat([
  //      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983533'} },
  //      //   { bidder: 'sovrn', params: {tagid: '744079'} },
  //      //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
  //       ]), //1062118/sakshiNew_skin_right
  //       hb_full_common_bidders.concat([
  //      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
  //      //   { bidder: 'sovrn', params: {tagid: '744058'} },
  //       ]), //1062118/SakshiNew_HP_Box_300x600,
  //       hb_full_common_bidders.concat([
  //      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
  //      //   { bidder: 'sovrn', params: {tagid: '744058'} },
  //       ]), //1062118/SakshiNew_HP_Box_300x600,
  //       hb_full_common_bidders.concat([
  //      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
  //      //   { bidder: 'sovrn', params: {tagid: '744058'} },
  //       ]), //1062118/SakshiNew_HP_Box_300x600,
  //       hb_full_common_bidders.concat([
  //      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
  //      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
  //       ]) //1062118/Desktop_HP_300x100
  //   ]
  // }
  // var mappings_full_hb_config_both = {
  //   adUnitNames: [
  //     // '/21692080761/amb_es_mob_mpu_4',
  //     // '/21692080761/amb_es_mob_mpu_5',
  //     // '/21692080761/amb_es_desk_mpu_6',
  //     // '/21692080761/amb_eng_mob_mpu_5',
  //     // '/21692080761/amb_eng_mob_mpu_6',
  //     // '/21692080761/amb_hindi_mob_mpu_3',
  //     // '/21692080761/amb_hindi_mob_mpu_4',
  //     // '/21692080761/amb_hindi_mob_mpu_5'
  //   ],
  //   bids: [
  //     hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983534'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744054'} },
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
  //      ]), //sakshiNew_box1_300x250
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983535'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744064'} },
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
  //      ]), //sakshiNew_box2_300x250
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983536'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744057'} },
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
  //      ]), //sakshiNew_box3_300x250
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
  //      ]), //fullstories_300x50_firstslot
  //      hb_full_common_bidders.concat([
  //     //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983530'} },
  //     //   { bidder: 'sovrn', params: {tagid: '744083'} },
  //     //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233' } }
  //       ]), //sakshiNew_HP
  //       hb_full_common_bidders.concat([
  //      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983536'} },
  //      //   { bidder: 'sovrn', params: {tagid: '744057'} },
  //      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
  //       ]), //sakshiNew_box3_300x250
  //       hb_full_common_bidders.concat([
  //      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
  //       ]), //fullstories_300x50_firstslot
  //       hb_full_common_bidders.concat([
  //      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983530'} },
  //      //   { bidder: 'sovrn', params: {tagid: '744083'} },
  //      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233' } }
  //       ]) //sakshiNew_HP
  //   ]
  // }
  var mappings_full_hb_config = {
    targetUnits: [
      'div-gpt-ad-1486195358164-1', //'/1062118/Main_160x600_left',
      'div-gpt-ad-1486195358164-2',
      'div-gpt-ad-1486622911941-1',
      'div-gpt-ad-1486195358164-7',
      'div-gpt-ad-1486195358164-9',
      'div-gpt-ad-1486195358164-10',
      'div-gpt-ad-1511854145373-0',
      'div-gpt-ad-1511854145373-1',
      'div-gpt-ad-1511854145373-2',
      'div-gpt-ad-1511854145373-3',
      'div-gpt-ad-1583316234876-0',
      'div-gpt-ad-1486622911941-4',
    ],
    adUnitNames: [
      '/1062118/Main_160x600_left',  //https://www.sakshieducation.com/ -
      '/1062118/Main_160x600_right',
      '/1062118/Main_300x250_1',
      '/1062118/Main_468x60_1',
      '/1062118/Main_728x90_btw',
      '/1062118/Main_728x90_top',
      '/1062118/Edu_Resp_Box1',
      '/1062118/edu_resp_box2',
      '/1062118/edu_resp_box3',
      '/1062118/edu_resp_box4',
      '/1062118/Sakshiedu_Anchor_Ad-320x50',
      '/1062118/Main_300x600_2',
    ],

    sizes: [
       [160, 600], //'/1062118/Main_160x600_left',
       [160, 600],
       [300, 250],
       [468, 60],
       [728, 90],
       [728, 90],
       [300, 250],
       [300, 250],
       [300, 250],
       [300, 250],
       [[320, 50], [300, 50]],
       [300, 600],
    ],
    bids: [
      hb_full_common_bidders.concat([
        { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983534'} },
      //   { bidder: 'sovrn', params: {tagid: '744054'} },
      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
       ]), //'/1062118/Main_160x600_left',
       hb_full_common_bidders.concat([
         { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983535'} },
      //   { bidder: 'sovrn', params: {tagid: '744064'} },
      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
       ]),
       hb_full_common_bidders.concat([
         { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983536'} },
      //   { bidder: 'sovrn', params: {tagid: '744057'} },
      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
       ]),
       hb_full_common_bidders.concat([
      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
      //   { bidder: 'sovrn', params: {tagid: '744057'} },
    ]), //1062118/Main_468x60_1',
       hb_full_common_bidders.concat([
         { bidder: 'dailyhunt', params: {placement_id: 139, publisher_id: 6, partner_name: 'sakshi'} },
      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983530'} },
      //   { bidder: 'sovrn', params: {tagid: '744083'} },
      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233' } }
       ]),
       hb_full_common_bidders.concat([
         { bidder: 'dailyhunt', params: {placement_id: 139, publisher_id: 6, partner_name: 'sakshi'} },
      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983532'} },
      //   { bidder: 'sovrn', params: {tagid: '744068'} },
      //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi', domain: 'https://prg8.smartadserver.com' } }
       ]),
       hb_full_common_bidders.concat([
         { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983533'} },
      //   { bidder: 'sovrn', params: {tagid: '744079'} },
      //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
       ]),
       hb_full_common_bidders.concat([
         { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
      //   { bidder: 'sovrn', params: {tagid: '744058'} },
       ]),
       hb_full_common_bidders.concat([
         { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
       ]),
       hb_full_common_bidders.concat([
         { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983537'} },
      //   { bidder: 'sovrn', params: {tagid: '744067'} },
      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233', domain: 'https://prg8.smartadserver.com' } }
       ]),
       hb_full_common_bidders.concat([
       //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983534'} },
       //   { bidder: 'sovrn', params: {tagid: '744054'} },
       //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
      ]), //'/1062118/Sakshiedu_Anchor_Ad-320x50',
        hb_full_common_bidders.concat([
          { bidder: 'dailyhunt', params: {placement_id: 145, publisher_id: 6, partner_name: 'sakshi'} },
       //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983535'} },
       //   { bidder: 'sovrn', params: {tagid: '744064'} },
       //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
        ]),
    ]
  }

  // var mappings_extra_units_config_desktop ={
  //   adUnitNames: [
  //     // '/1062118/Desktop_Outstream_1x1',
  //     // '/21692080761/amb_eng_header_desk_v2'
  //   ]
  // }
  // var mappings_extra_units_config_mobile ={
  //   adUnitNames: [
  //     // '/21692080761/amb_eng_mob_mpu_1',
  //   ]
  // }
  // var mappings_extra_units_config_both ={
  //   adUnitNames: [
  //     // '/21692080761/amb_eng_mob_mpu_4',
  //   ]
  // }

  var mappings_extra_units_config ={
    adUnitNames: []
  }

  var mappings_extra_units = {
    slots: []
  }

  var mappings_final_refresh = {
    adUnitNames: [],
    adSlots: []
  }


  // if(!mobileCheckAdScript()){
  //   mappings_full_hb_config.adUnitNames = mappings_full_hb_config_desktop.adUnitNames.concat(mappings_full_hb_config_both.adUnitNames);
  //   mappings_full_hb_config.bids = mappings_full_hb_config_desktop.bids.concat(mappings_full_hb_config_both.bids);
  //   mappings_extra_units_config.adUnitNames = mappings_extra_units_config_desktop.adUnitNames.concat(mappings_extra_units_config_both.adUnitNames);
  // }
  // else{
  //   mappings_full_hb_config.adUnitNames = mappings_full_hb_config_mobile.adUnitNames.concat(mappings_full_hb_config_both.adUnitNames);
  //   mappings_full_hb_config.bids = mappings_full_hb_config_mobile.bids.concat(mappings_full_hb_config_both.bids);
  //   mappings_extra_units_config.adUnitNames = mappings_extra_units_config_mobile.adUnitNames.concat(mappings_extra_units_config_both.adUnitNames);
  // }
  // function mobileCheckAdScript() {
  // 	var check = false;
  // 	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| ||a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  // 	return check;
  // };

  function checkHBUnits(){
    callMapUnits();

    setTimeout(function() {
        initAdserver_hb_full();
    }, FAILSAFE_TIMEOUT);
  }
  function callFullHBAds(adCode, ub_slot){
    fillRefreshMap();
    ubpbjs.que.push(function(){
      ubpbjs.requestBids({
        timeout: PREBID_TIMEOUT,
        adUnits: adUnits_full_hb,
        adUnitCodes: adCode,
        bidsBackHandler: function() {
          ubpbjs.initAdserverSetHB = true;
          googletag.cmd.push(function() {
            ubpbjs.que.push(function() {
                ubpbjs.setTargetingForGPTAsync();
                // requestManager.prebid = true;
                // biddersBack();
                googletag.cmd.push(function() {
                    googletag.pubads().refresh(mapping_full_hb.slots);
                    googletag.pubads().refresh(mappings_extra_units.slots);
                });
                // googletag.pubads().refresh(ub_slot);
            });
          });
        }
      });
    });
  }
  function locate_googleSlot(targetId){
    tempSlots = googletag.pubads().getSlots();
    var ub_hb_slot;
    len = tempSlots.length;
    for(var i=0; i<len; i++){
      id = tempSlots[i].getAdUnitPath();
      if(targetId == id){
        ub_hb_slot = tempSlots[i];
        break;
      }
    }
    return ub_hb_slot;
  }
  function initAdserver_hb_full() {
      if (ubpbjs.initAdserverSetHB) return;
      ubpbjs.initAdserverSetHB = true;
      googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh([mapping_full_hb.slots]);
          });
      });
  }

  function callMapUnits(){
    googletag.cmd.push(function() {
      x = googletag.pubads().getSlots();
      x_len = x.length;
      for(i=0;i<x.length;i++){
        if(mappings_full_hb_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())){
          index = mappings_full_hb_config.adUnitNames.indexOf(x[i].getSlotId().getAdUnitPath());
          size_array = [];
          size_temp_array = googletag.pubads().getSlots()[i].getSizes();
          for(j=0;j<size_temp_array.length;j++){
            length = size_temp_array[j]['l'];
            height = size_temp_array[j]['j'];
            temp_array = [length, height];
            size_array.push(temp_array);
          }

          adUnitTemp = {
            code: x[i].getSlotId().getAdUnitPath(),
            mediaTypes: {
                banner: {
                    sizes: size_array
                }
            },
            bids: mappings_full_hb_config.bids[index]
          };

          adUnits_full_hb.push(adUnitTemp);
          mapping_full_hb.slots.push(x[i]);
          mapping_full_hb.slotNumbers.push(i+1);
          mapping_full_hb.adCode.push(x[i].getSlotId().getAdUnitPath());
          mapping_full_hb.sizes.push(size_array);
        }
        else if(mappings_extra_units_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())){
          mappings_extra_units.slots.push(x[i]);
        }
      }
      callFullHBAds(mapping_full_hb.adCode, mapping_full_hb.slots);
    });
  }
  checkHBUnits();

  function fillRefreshMap(){
    googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if(mappings_final_refresh["adUnitNames"].filter(function(val){return val == event.slot.getSlotId().getAdUnitPath()}).length == 0){
            mappings_final_refresh.adSlots.push(event.slot);
            mappings_final_refresh.adUnitNames.push(event.slot.getSlotId().getAdUnitPath());
          }
        });
    });
  }

  setInterval(function() {
    refreshBid(mappings_final_refresh.adSlots, mappings_final_refresh.adUnitNames);
  }, REFRESH_TIMEOUT);


  function refreshBid(ub_slot, adCode) {
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
}
