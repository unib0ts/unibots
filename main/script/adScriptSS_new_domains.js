  // var cachebuster = parseInt((Math.round(new Date().getTime() / 1000))/10000)*10000
  // url = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/coronaWidget220/script.js?cb='+cachebuster;
  // // url = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/sakshipost/script.js?cb='+cachebuster;
  // // url = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/olympicWidget13/script.js?cb='+cachebuster;
  // s3 = document.createElement('script');
  // s3.src = url;
  // s3.async = "async";
  // s3.type = "text/javascript";
  // document.getElementsByTagName('head')[0].appendChild(s3);

  z1 = document.createElement("div");
  z1.id = "div-gpt-ad-1602675444550-0";
  z1.style = "width:320px;height:50px;float:left;text-align:center;position:fixed;bottom:0;left:5px;z-index:99";
  x1 = document.querySelector("body");
  x1.appendChild(z1);

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
      "increment" : 0.01  // from $0 to $5, 1-cent increments
      }]
  };

  var div_1_sizes = [320, 50];

    var adUnits = [
        {
          code: '/21928950349,22666385065/sakshipost_nb_320x50',
          mediaTypes: {
            native: {
              image: {
                // sizes: [300, 100],
                aspect_ratios: [{
                  min_width: 100,
                  min_height: 50,
                  ratio_width: 2,
                  ratio_height: 1,
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
            // { bidder: 'appnexus', params: { placementId: '19056673' } },
            // { bidder: 'oftmedia', params: { placementId: '20846125' } }
          ]
        },
        {
          code: '/21928950349,22666385065/sakshipost_nb_320x50',
          mediaTypes: {
            banner: {
              sizes: div_1_sizes
            }
          },
          bids: [
            // { bidder: 'appnexus', params: { placementId: '19056673' } }, /* one placementId for all sizes  my appnexus bidder */
            // { bidder: 'oftmedia', params: { placementId: '18778196' } },
            // { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
            // { bidder: 'emx_digital', params: { tagid: '97515' } }, /* sizeless */
            // { bidder: 'sovrn', params: {tagid: '789453'} },
            // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
            // { bidder: 'ucfunnel', params: { adid : 'ad-47B468D22A6D9794F698A3DA892AE34'} },
            // { bidder: 'nobid', params: { siteId: '21987177881' } },
            // { bidder: 'openx', params: {unit: '544005773', delDomain: 'yieldbird-d.openx.net'} },
            // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // // { bidder: 'criteo', params: {networkId: '10542'} },
            // { bidder: 'rubicon', params: { accountId: '23976', siteId: '400078', zoneId: '2250744'} },
            // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
            // { bidder: 'adtelligent', params: { aid: 726034 } },
            // // // { bidder: 'criteointl', params: {networkId: '10545'} },
            // // // // {bidder: 'dailyhunt', params: {placement_id: 1, publisher_id: 6, partner_name: 'Sakshi'} },
            // // // //{ bidder: 'adsolut', params: { zoneId: '107071', host: 'cpm.adsolut.in' } },
            // // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3265017'} },
            // { bidder: 'adyoulike', params: { placementId: '2c2ca1653a87dd3ebe409bd5efbd611b'} },
            // // // // { bidder: 'rubicon', params: { accountId: '11734', siteId: '323846', zoneId: '1680740' } },
            // // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
            // // { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
          ]
        }
    ];

  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
  googletag.cmd.push(function() {
      googletag.pubads().disableInitialLoad();
  });

  var ubpbjs = ubpbjs || {};
  ubpbjs.que = ubpbjs.que || [];


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
      rubicon: {singleRequest: true},
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
      publisherDomain: 'https://sakshi.com/',
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

  // in case ubpbjs doesn't load
  // setTimeout(function() {
  //     initAdserver();
  // }, FAILSAFE_TIMEOUT);
}

var s0 = document.createElement('script');
s0.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
s0.async = "async";
document.getElementsByTagName('head')[0].appendChild(s0);

googletag.cmd.push(function() {
  googletag.defineSlot('/1062118/Unibot_Count_Pixel', [1, 1], 'div-gpt-ad-1638776087773-0').addService(googletag.pubads());
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
});

var ub_div1 = document.createElement('div');
ub_div1.id = "div-gpt-ad-1638776087773-0";
ub_div1.innerHTML =  "<script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1638776087773-0'); });</script>";
document.getElementsByTagName('body')[0].appendChild(ub_div1);


    var ubsmall_slot1;
    function addNewsBotAd(){
      googletag.cmd.push(function() {
          ubadsmall_slot1 = googletag.defineSlot('/21928950349,22666385065/sakshipost_nb_320x50', div_1_sizes, 'div-gpt-ad-1602675444550-0').addService(googletag.pubads());
          googletag.pubads().collapseEmptyDivs(true);
          googletag.pubads().setCentering(true);
          googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
          googletag.pubads().enableSingleRequest();
          googletag.enableServices();
          googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                if (event.slot.getAdUnitPath() === '/21928950349,22666385065/sakshipost_nb_320x50') {
                ub_checkAd1Rendered();
              }
          });
      });

      ubpbjs.que.push(function() {
        ubpbjs.requestBids({
          bidsBackHandler: initAdserver,
          timeout: PREBID_TIMEOUT
        });
      });
      //
      // // in case ubpbjs doesn't load
      setTimeout(function() {
          initAdserver();
      }, FAILSAFE_TIMEOUT);
    }

    function initAdserver() {
        if (ubpbjs.initAdserverSet) return;
        ubpbjs.initAdserverSet = true;
        googletag.cmd.push(function() {
            ubpbjs.que.push(function() {
                ubpbjs.setTargetingForGPTAsync();
                googletag.pubads().refresh(ubsmall_slot1);
            });
        });
    }

    function refreshBid(ubsmall_slot1) {
      ubpbjs.que.push(function() {
    	  ubpbjs.requestBids({
    		  timeout: PREBID_TIMEOUT,
    		  adUnitCodes: ['/21928950349,22666385065/sakshipost_nb_320x50'],
    		  bidsBackHandler: function() {
            googletag.cmd.push(function() {
              ubpbjs.que.push(function() {
                  ubpbjs.setTargetingForGPTAsync();
                  googletag.pubads().refresh([ubsmall_slot1]);
              });
            });
    		  }
    	  });
      });
    }

    ub_ad1RefreshFlag = 0;
    function ub_checkAd1Rendered(){
    	adId1 = 'div-gpt-ad-1602675444550-0';
    	var nodes = document.getElementById(adId1).childNodes[0].childNodes;
    	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
        if(ub_ad1RefreshFlag != 1){
          setInterval(function() {
            ub_ad1RefreshFlag = 1;
            refreshBid(ubsmall_slot1);
          }, REFRESH_TIMEOUT);
        }
    	 }
    }
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
    // { bidder: 'oftmedia', params: { placementId: '20846125' } },
    { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
    { bidder: 'emx_digital', params: { tagid: '97515' } }, /* sizeless */
    { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
    { bidder: 'nobid', params: { siteId: '21987177881' } },
    { bidder: 'adtelligent', params: { aid: 726034 } },
    // // { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
    // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
    // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
    { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
    { bidder: 'rubicon', params: { accountId: '23976', siteId: '400078', zoneId: '2250744'} },
    // { bidder: 'criteo', params: {networkId: '10542'} },
    // { bidder: 'criteointl', params: {networkId: '10545'} },
  ];
  var mappings_full_hb_config = {
    targetUnits: [
      'div-gpt-ad-1577438310277-0', //'/1062118/English_Mob_HP_LB_300x250',
      'div-gpt-ad-1577438408427-0',
      'div-gpt-ad-1577438483521-0',
      'div-gpt-ad-1577438859046-0',
      'div-gpt-ad-1577438921702-0',
      'div-gpt-ad-1577439115775-0',
      'div-gpt-ad-1577439183969-0',
      'div-gpt-ad-1577439038118-0',
      'div-gpt-ad-1577431487240-0',
      'div-gpt-ad-1577431585228-0',
      'div-gpt-ad-1577431643801-0',
      'div-gpt-ad-1577431768455-0',
      'div-gpt-ad-1577432095035-0',
      'div-gpt-ad-1577432266645-0',
      'div-gpt-ad-1577432982025-0',
      'div-gpt-ad-1577433033262-0',
      'div-gpt-ad-1577430006311-0',
      'div-gpt-ad-1577430161100-0',
      'div-gpt-ad-1577430459805-0',
      'div-gpt-ad-1577430748480-0',
      'div-gpt-ad-1577431165523-0',
      'div-gpt-ad-1577431145444-0',
      'div-gpt-ad-1577431340341-0',
      // 'div-gpt-ad-1602675444550-0', //'/21928950349,22666385065/sakshipost_nb_320x50',
      'div-gpt-ad-1638776087773-0',
    ],
    adUnitNames: [
      '/1062118/English_Mob_HP_LB_300x250',   //https://english.sakshi.com/ -
      '/1062118/English_Mob_Hp_300x250_1',
      '/1062118/English_Mob_Hp_300x250_2',
      '/1062118/English_Mob_Hp_300x250_3',
      '/1062118/English_Article_LB_300x250',
      '/1062118/English_Mob_MidArticle_300x250',
      '/1062118/English_Mob_EOA_300x250',
      '/1062118/English_Mob_Article_300x250_1',
      '/1062118/English_Article_LB_970x70',
      '/1062118/English_Article_Skin_Left_160x600',
      '/1062118/English_Article_Skin_Right_160x600',
      '/1062118/English_Article_300x600',
      '/1062118/English_Article_MidArticle_300x250_1',
      '/1062118/English_Article_EOA_300x250',
      '/1062118/English_Article_300x250_1',
      '/1062118/English_Article_300x250_2',
      '/1062118/English_HP_LB_970x90',
      '/1062118/English_HP_Skin_Left_160x600',
      '/1062118/English_HP_Skin_Right_160x600',
      '/1062118/English_HP_300x600',
      '/1062118/English_HP_970x90_1',
      '/1062118/English_HP_300x250_1',
      '/1062118/English_HP_300x250_2',
      '/1062118/English_Post_300X250_belowtopstories',
      '/1062118/English_Post_300X250_abovetechnologysection',
      '/1062118/English_Post_300X250_belowrichcards',
      '/1062118/English_Post_300X250_Inbetweenarticle',
      // '/21928950349,22666385065/sakshipost_nb_320x50',
      '/1062118/Unibot_Count_Pixel',
    ],

    sizes: [
       [[336, 280], [300, 250]], //'/1062118/English_Mob_HP_LB_300x250',
       [[300, 250], [336, 280]],
       [[300, 250], [336, 280]],
       [[300, 250], [336, 280]],
       [[300, 250], [336, 280]],
       [[300, 250], [336, 280]],
       [[300, 250], [336, 280]],
       [[300, 250], [336, 280]],
       [[970, 90], [728, 90]],
       [[160, 600], [120, 600]],
       [[160, 600], [120, 600]],
       [[160, 600], [120, 600], [300, 600], [300, 250]],
       [[336, 280], [300, 250]],
       [[300, 250], [336, 280]],
       [[300, 250], [300, 100], [300, 50]],
       [[300, 50], [300, 250], [300, 100]],
       [[970, 90], [728, 90]],
       [[160, 600], [120, 600]],
       [[120, 600], [160, 600]],
       [[120, 600], [160, 600], [300, 250], [300, 600]],
       [[728, 90], [970, 90]],
       [[300, 50], [300, 100], [300, 250]],
       [[300, 250], [300, 150], [300, 50]],
       // [320, 50],  ///21928950349,22666385065/sakshipost_nb_320x50
       [1, 1]
    ],
    bids: [
        hb_full_common_bidders.concat([
          // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
       //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983532'} },
       //   { bidder: 'sovrn', params: {tagid: '744068'} },
       //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi', domain: 'https://prg8.smartadserver.com' } }
        ]), // //'/1062118/English_Mob_HP_LB_300x250',
        hb_full_common_bidders.concat([
          // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
       //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983533'} },
       //   { bidder: 'sovrn', params: {tagid: '744079'} },
       //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
        ]), ///1062118/English_Mob_Hp_300x250_1
        hb_full_common_bidders.concat([
          // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
       //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
       //   { bidder: 'sovrn', params: {tagid: '744058'} },
        ]), //1062118/English_Mob_Hp_300x250_2',
        hb_full_common_bidders.concat([
          // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
       //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
       //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
        ]), //1062118/English_Mob_Hp_300x250_3',
        hb_full_common_bidders.concat([
          // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
       //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983537'} },
       //   { bidder: 'sovrn', params: {tagid: '744067'} },
       //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233', domain: 'https://prg8.smartadserver.com' } }
        ]), ///1062118/English_Article_LB_300x250',
        hb_full_common_bidders.concat([
          // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
       //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
       //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
        ]),//1062118/English_Mob_MidArticle_300x250',
        hb_full_common_bidders.concat([
          // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
       //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983537'} },
       //   { bidder: 'sovrn', params: {tagid: '744067'} },
       //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233', domain: 'https://prg8.smartadserver.com' } }
        ]), ///1062118/English_Mob_EOA_300x250',
        hb_full_common_bidders.concat([
          // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
        //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983534'} },
        //   { bidder: 'sovrn', params: {tagid: '744054'} },
        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
        ]), //1062118/English_Mob_Article_300x250_1',
        hb_full_common_bidders.concat([
           // { bidder: 'dailyhunt', params: {placement_id: 139, publisher_id: 6, partner_name: 'sakshi'} },
        //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983535'} },
        //   { bidder: 'sovrn', params: {tagid: '744064'} },
        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
        ]), ///1062118/English_Article_LB_970x70',
        hb_full_common_bidders.concat([
              // { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
        //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983536'} },
        //   { bidder: 'sovrn', params: {tagid: '744057'} },
        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
        ]),  //1062118/English_Article_Skin_Left_160x600',
        hb_full_common_bidders.concat([
           // { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
        ]), ///1062118/English_Article_Skin_Right_160x600',
        hb_full_common_bidders.concat([
           // { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
        //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983530'} },
        //   { bidder: 'sovrn', params: {tagid: '744083'} },
        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233' } }
        ]), //1062118/English_Article_300x600',
        hb_full_common_bidders.concat([
           // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
        //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983532'} },
        //   { bidder: 'sovrn', params: {tagid: '744068'} },
        //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi', domain: 'https://prg8.smartadserver.com' } }
        ]), //1062118/English_Article_MidArticle_300x250_1',
        hb_full_common_bidders.concat([
           // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
        //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983533'} },
        //   { bidder: 'sovrn', params: {tagid: '744079'} },
        //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
        ]),  //1062118/English_Article_EOA_300x250',
        hb_full_common_bidders.concat([
           // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
        //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983531'} },
        //   { bidder: 'sovrn', params: {tagid: '744058'} },
        ]),  //1062118/English_Article_300x250_1',
        hb_full_common_bidders.concat([
           // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
        //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
        ]), //1062118/English_Article_300x250_2',
        hb_full_common_bidders.concat([
           // { bidder: 'dailyhunt', params: {placement_id: 139, publisher_id: 6, partner_name: 'sakshi'} },
        //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983537'} },
        //   { bidder: 'sovrn', params: {tagid: '744067'} },
        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233', domain: 'https://prg8.smartadserver.com' } }
        ]), //1062118/English_HP_LB_970x90'
        hb_full_common_bidders.concat([
           // { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
         //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983534'} },
         //   { bidder: 'sovrn', params: {tagid: '744054'} },
         //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
        ]),  //1062118/English_HP_Skin_Left_160x600
        hb_full_common_bidders.concat([
          // { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
       //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983525'} },
       //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
        ]),  //1062118/English_HP_Skin_Right_160x600',
        hb_full_common_bidders.concat([
          // { bidder: 'dailyhunt', params: {placement_id: 144, publisher_id: 6, partner_name: 'sakshi'} },
       //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983537'} },
       //   { bidder: 'sovrn', params: {tagid: '744067'} },
       //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233', domain: 'https://prg8.smartadserver.com' } }
        ]), //1062118/English_HP_300x600',
        hb_full_common_bidders.concat([
          // { bidder: 'dailyhunt', params: {placement_id: 139, publisher_id: 6, partner_name: 'sakshi'} },
        //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983534'} },
        //   { bidder: 'sovrn', params: {tagid: '744054'} },
        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
        ]), //1062118/English_HP_970x90_1'
        hb_full_common_bidders.concat([
           // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
        //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983535'} },
        //   { bidder: 'sovrn', params: {tagid: '744064'} },
        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
        ]), ///1062118/English_HP_300x250_1',
        hb_full_common_bidders.concat([
           // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
        //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2983536'} },
        //   { bidder: 'sovrn', params: {tagid: '744057'} },
        //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
        ]), //1062118/English_HP_300x250_2',
      //   hb_full_common_bidders.concat([
      //    	// { bidder: 'oftmedia', params: { placementId: '20846125' } },
      //      // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
      //     // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3265017'} },
      // //   { bidder: 'sovrn', params: {tagid: '744083'} },
      // //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233' } }
      //   ]),  //'/21928950349,22666385065/sakshipost_nb_320x50'
        hb_full_common_bidders.concat([
         	// { bidder: 'oftmedia', params: { placementId: '20846125' } },
           // { bidder: 'dailyhunt', params: {placement_id: 138, publisher_id: 6, partner_name: 'sakshi'} },
          // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3265017'} },
      //   { bidder: 'sovrn', params: {tagid: '744083'} },
      //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93233' } }
        ]),  //'/21928950349,22666385065/sakshipost_nb_320x50'
    ]
  }

  var mappings_extra_units_config ={
    adUnitNames: [
      '/21928950349,22666385065/sakshipost_nb_320x50',
      '/1062118/English_Mob_HP_LB_300x250',   //https://english.sakshi.com/ -
      '/1062118/English_Mob_Hp_300x250_1',
      '/1062118/English_Mob_Hp_300x250_2',
      '/1062118/English_Mob_Hp_300x250_3',
      '/1062118/English_Article_LB_300x250',
      '/1062118/English_Mob_MidArticle_300x250',
      '/1062118/English_Mob_EOA_300x250',
      '/1062118/English_Mob_Article_300x250_1',
      '/1062118/English_Article_LB_970x70',
      '/1062118/English_Article_Skin_Left_160x600',
      '/1062118/English_Article_Skin_Right_160x600',
      '/1062118/English_Article_300x600',
      '/1062118/English_Article_MidArticle_300x250_1',
      '/1062118/English_Article_EOA_300x250',
      '/1062118/English_Article_300x250_1',
      '/1062118/English_Article_300x250_2',
      '/1062118/English_HP_LB_970x90',
      '/1062118/English_HP_Skin_Left_160x600',
      '/1062118/English_HP_Skin_Right_160x600',
      '/1062118/English_HP_300x600',
      '/1062118/English_HP_970x90_1',
      '/1062118/English_HP_300x250_1',
      '/1062118/English_HP_300x250_2',
      '/1062118/English_Post_300X250_belowtopstories',
      '/1062118/English_Post_300X250_abovetechnologysection',
      '/1062118/English_Post_300X250_belowrichcards',
      '/1062118/English_Post_300X250_Inbetweenarticle',
      // '/21928950349,22666385065/sakshipost_nb_320x50',
      '/1062118/Unibot_Count_Pixel',
    ]
  }

  var mappings_extra_units = {
    slots: [],
    adUnitNames:[]
  }

  var mappings_final_refresh = {
    adUnitNames: [],
    adSlots: []
  }

  function checkHBUnits(){
    addNewsBotAd();
    callMapUnits();

    // setTimeout(function() {
    //     initAdserver_hb_full();
    // }, FAILSAFE_TIMEOUT);
  }

  function callFullHBAds(adCode, ub_slot){
    // fillRefreshMap();
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
                // googletag.cmd.push(function() {
                    googletag.pubads().refresh(ub_slot);
                    // googletag.pubads().refresh(mappings_extra_units.slots);
                // });
                // googletag.pubads().refresh(ub_slot);
            });
          });
        }
      });
    });
  }

  function callExtraHBAds(adCode, ub_slot){
    ubpbjs.que.push(function(){
      ubpbjs.requestBids({
        timeout: PREBID_TIMEOUT,
        // adUnits: adUnits_full_hb,
        adUnitCodes: adCode,
        bidsBackHandler: function() {
          ubpbjs.initAdserverSetHB = true;
          googletag.cmd.push(function() {
            ubpbjs.que.push(function() {
                ubpbjs.setTargetingForGPTAsync();
                // requestManager.prebid = true;
                // biddersBack();
                googletag.pubads().refresh(ub_slot);
            });
          });
        }
      });
    });
  }

  // function locate_googleSlot(targetId){
  //   tempSlots = googletag.pubads().getSlots();
  //   var ub_hb_slot;
  //   len = tempSlots.length;
  //   for(var i=0; i<len; i++){
  //     id = tempSlots[i].getAdUnitPath();
  //     if(targetId == id){
  //       ub_hb_slot = tempSlots[i];
  //       break;
  //     }
  //   }
  //   return ub_hb_slot;
  // }
  function initAdserver_hb_full() {
      if (ubpbjs.initAdserverSetHB) return;
      ubpbjs.initAdserverSetHB = true;
      googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh(mapping_full_hb.slots);
          });
      });
  }

  function callMapUnits(){
    googletag.cmd.push(function() {
      x = googletag.pubads().getSlots();
      x_len = x.length;
      for(i=0;i<x.length;i++){
        // if(mappings_full_hb_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())){
        //   index = mappings_full_hb_config.adUnitNames.indexOf(x[i].getSlotId().getAdUnitPath());
        //   size_array = [];
        //   size_temp_array = googletag.pubads().getSlots()[i].getSizes();
        //   for(j=0;j<size_temp_array.length;j++){
        //     length = size_temp_array[j][Object.keys(size_temp_array[j])[0]];
        //      height = size_temp_array[j][Object.keys(size_temp_array[j])[1]];
        //     temp_array = [length, height];
        //     size_array.push(temp_array);
        //   }
        //
        //   adUnitTemp = {
        //     code: x[i].getSlotId().getAdUnitPath(),
        //     mediaTypes: {
        //         banner: {
        //             sizes: size_array
        //         }
        //     },
        //     bids: mappings_full_hb_config.bids[index]
        //   };
        //
        //   adUnits_full_hb.push(adUnitTemp);
        //   mapping_full_hb.slots.push(x[i]);
        //   mapping_full_hb.slotNumbers.push(i+1);
        //   mapping_full_hb.adCode.push(x[i].getSlotId().getAdUnitPath());
        //   mapping_full_hb.sizes.push(size_array);
        // }
         if(mappings_extra_units_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())){
          mappings_extra_units.slots.push(x[i]);
          mappings_extra_units.adUnitNames.push(x[i]);
        }
      }
      // callFullHBAds(mapping_full_hb.adCode, mapping_full_hb.slots);
      callExtraHBAds(mappings_extra_units.adUnitNames, mappings_extra_units.slots);
    });
  }

  function fillRefreshMap(){
    googletag.cmd.push(function () {
        googletag
            .pubads()
            .addEventListener("slotRenderEnded", function (event) {
                var timer = REFRESH_TIMEOUT / 1000;
                var el = document.getElementById(
                    event.slot.getSlotId().getDomId()
                );
                if (el != null) {
                    var temp = setInterval(function () {
                        if (isInViewSpace(el)) {
                            timer -= 1;
                            if (timer <= 0) {
                                refreshBid(
                                    [event.slot],
                                    [event.slot.getSlotId().getAdUnitPath()]
                                );
                                clearInterval(temp);
                            }
                        }
                    }, 1000);
                }
            });
    });
  }

// }
