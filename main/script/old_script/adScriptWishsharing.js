  // if(typeof customConfigObjectA === 'undefined'){
  setTimeout(function() {
  // var mybotadscrpt = 'var adgf_p1="3766"; var adgf_p2="0"; var adgf_p3="0"; var adgf_p4=""; var adgf_p5=""; var adgFtSc=document.createElement("script"); adgFtSc.id="adg_pixel_footer_script"; document.body.appendChild(adgFtSc);adgFtSc.async=true;var adgScParam="p1="+adgf_p1+"&p2="+adgf_p2+"&p3="+adgf_p3+"&p4="+adgf_p4+"&p5="+adgf_p5;adgFtSc.src="//adgebra.co.in/afpf/afpf.js?"+adgScParam;';
  //
  // var ad_scrpt1 = document.createElement('script');
  //  ad_scrpt1.type = "text/javascript";
  //  ad_scrpt1.innerText= mybotadscrpt;
  //  document.getElementsByTagName('head')[0].appendChild(ad_scrpt1);

  	var s0 = document.createElement('script');
  	s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
  	s0.type = "text/javascript";
  	document.getElementsByTagName('head')[0].appendChild(s0);

  	var s1 = document.createElement('script');
  	s1.async = "async";
  	s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
  	s1.type = "text/javascript";
  	document.getElementsByTagName('head')[0].appendChild(s1);

  	var div_1_sizes = [728, 90];

    var adUnits = [];

    var iframe_ub = document.getElementById("dtext_22");
    // var elmnt =  (iframe_ub.contentDocument) ? iframe_ub.contentDocument : iframe_ub.contentWindow.document;
    var elmnt = iframe_ub.contentWindow;
     var ub_elmnt = elmnt.document.getElementById("unibots-ad");

    unibot1 = '<div id="div-gpt-ad-1619761940307-0">';

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

    if (ub_elmnt) {
            adUnits1 =
            {
                code: '/21928950349/test-in-image_728x90',
                mediaTypes: {
                    banner: {
                        sizes: div_1_sizes
                    }
                },
                bids: [
                  // { bidder: 'appnexus', params: { placementId: '19056632' } }, /* one placementId for all sizes  my appnexus bidder */
           				{ bidder: 'oftmedia', params: { placementId: '20846125' } },
                  //  { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3507447'} },
                  //  { bidder: 'ucfunnel', params: { adid : 'ad-34B8E9962EB23433C3239BA2B86DDBE8'} },
           				// { bidder: '33across', params: { siteId : 'btgriSWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] },
           				// { bidder: 'emx_digital', params: { tagid: '97512' } }, /* sizeless */
           				// { bidder: 'sovrn', params: {tagid: '867111'} },
           			{ bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
                 { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
           			// { bidder: 'nobid', params: { siteId : '22049999728'} },
           			// { bidder: 'criteo', params: {networkId: '10542'} },
           			// { bidder: 'criteointl', params: {networkId: '10545'} },
           			// // { bidder: 'openx', params: {unit: '543980998', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
                 // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
                //  { bidder: 'smartadserver', params: { siteId: '362143', pageId: '1289644', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
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
          publisherDomain: 'https://www.raftaar.in/',
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
      renderedFlag: [false]
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
                  googletag.pubads().refresh([ub_slot]);
                  // var adsCalled = false;
                  // for(var i=0;i<x.length;i++){
                  //   var bc = x[i].bidderCode;
                  //   if(bc=="openx"){
                  //     adsCalled = true;
                  //     callBotman();
                  //   }
                  // }
                  // if(!adsCalled){
                  //   callAdsUB();
                  // }
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
                // var x = ubpbjs.getAllPrebidWinningBids();
                // var adsCalled = false;
                // for(var i=0;i<x.length;i++){
                //   var bc = x[i].bidderCode;
                //   if(bc=="openx"){
                //     adsCalled = true;
                //     callBotman();
                //   }
                // }
                // if(!adsCalled){
                //   callAdsUB();
                // }
            });
        });
    }


    // var botmanCalled = false;
    // var userStatusBM = '';
    // function callBotman(){
    //   if(userStatusBM == ''){
    //     var request = new XMLHttpRequest();
    //     var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=viralcase';
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
    // 	googletag.pubads().refresh(mappings.slots);
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

  if (ub_elmnt) {
    ub_elmnt.innerHTML = unibot1;
    mappings.slotNumbers.push(1);
    mappings.adCode.push('/21928950349/test-in-image_728x90');
    mappings.sizes.push(div_1_sizes);
    mappings.adId.push('div-gpt-ad-1619761940307-0');
    googletag.cmd.push(function() {
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot1) {
          ub_checkAdRendered('div-gpt-ad-1619761940307-0', ub_slot1, ['/21928950349/test-in-image_728x90']);
        }
      });
    });
  }

    if(typeof googletag.defineSlot === "function"){
      googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
      googlePush();
    }
    else{
      googletag.cmd.push(function() {
        googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
        googlePush();
      });
    // }
   }

 },5000);

// }
