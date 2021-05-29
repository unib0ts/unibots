var s0 = document.createElement('script');
s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
s0.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(s0);

var s1 = document.createElement('script');
s1.async = "async";
s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
s1.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(s1);

var PREBID_TIMEOUT = 1200;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;

const customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $20, 1-cent increments
    }]
};

var adUnits = [];

var hb_common_bidders = [
	{ bidder: 'appnexus', params: { placementId: '19403759' } }, /* one placementId for all sizes  my appnexus bidder */
		// { bidder: 'oftmedia', params: { placementId: '19680368' } },
		// { bidder: '33across', params: { siteId : 'b3G35kWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
		// { bidder: 'emx_digital', params: { tagid: '107927' } }, /* sizeless */
		// { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
		// { bidder: 'nobid', params: { siteId: '22049996977' } },
		// { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
		// { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
		// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
		// //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
		// { bidder: 'criteo', params: {networkId: '10542'} },
		// { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
		// { bidder: 'criteointl', params: {networkId: '10545'} },
];

var mapping_hb = {
targetUnits: [
	  'sis_infeed-instream1',
		'sis_infeed-instream2',
		'sis_infeed-kinhdoanh',
		'sis_infeed-giaitri',
		'sis_folder.tinso1',
		'sis_folder.tinso2',
		'sis_detail.tinso1',
		'sis_detail.tinso2',
],
slotNames: ['ub_slot1', 'ub_slot2', 'ub_slot3', 'ub_slot4', 'ub_slot5', 'ub_slot6', 'ub_slot7', 'ub_slot8'],
adUnitNames: [
	'/21957769615/Vnexpress_hb/vnexpress_hb_320x50_Infeedinstream1',  //InfeedDivID:
		'/21957769615/Vnexpress_hb/vnexpress_hb_320x50_Infeedinstream2',
		'/21957769615/Vnexpress_hb/vnexpress_hb_320x50_Infeed-Kinhdoanh',
		'/21957769615/Vnexpress_hb/vnexpress_hb_320x50_Infeed-Giaitri',
		'/21957769615/Vnexpress_hb/vnexpress_hb_320x50_folder.tinso1', //folder1DivID:
		'/21957769615/Vnexpress_hb/vnexpress_hb_320x50_folder.tinso2', //folder2DivID:
		'/21957769615/Vnexpress_hb/vnexpress_hb_320x50_sis_detail.tinso1',
		'/21957769615/Vnexpress_hb/vnexpress_hb_320x50_sis_detail.tinso2',
],
adId: [
	'div-gpt-ad-1602234437991-0', //'sis_infeed-instream1',
		'div-gpt-ad-1602234489708-0',
		'div-gpt-ad-1602234673689-0',
		'div-gpt-ad-1602234722028-0',
		'div-gpt-ad-1602235113308-0',
		'div-gpt-ad-1602235138572-0',
		'div-gpt-ad-1621846898011-0',
		'div-gpt-ad-1621846937025-0',
],
sizes: [
	  [320, 50], [320, 100],
		[320, 50], [320, 100],
		[320, 50], [320, 100],
		[320, 50], [320, 100],
		[320, 50], [320, 100],
		[320, 50], [320, 100],
		[320, 50], [320, 100],
		[320, 50], [320, 100],
],
bids: [
		hb_common_bidders.concat([
				 { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3268941'} },
				 // { bidder: 'ucfunnel', params: { adid : 'ad-8A29A4E8342A6BA60B22EBEB98AEAB8E'} },
				 // { bidder: 'sovrn', params: {tagid: '795405'} },
			 //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
		]), //Infeedinstream1
		hb_common_bidders.concat([
				 { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3268942'} },
				 // { bidder: 'ucfunnel', params: { adid : 'ad-BE78EBA933BEEA24C7D38BBEE4B46B42'} },
				 // { bidder: 'sovrn', params: {tagid: '795406'} },
			 //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
		]), //Infeedinstream2
		hb_common_bidders.concat([
				 { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3268943'} },
				 // { bidder: 'ucfunnel', params: { adid : 'ad-D2342DE83224EAEDFD2DD6D6E7BBA72E'} },
				 // { bidder: 'sovrn', params: {tagid: '795407'} },
			 //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
		]), //Infeed-Kinhdoanh
		hb_common_bidders.concat([
				 { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3268944'} },
				 // { bidder: 'ucfunnel', params: { adid : 'ad-8A29A4E7296AAB7B1EAD7A4AA29EED7'} },
				 // { bidder: 'sovrn', params: {tagid: '795408'} },
			 //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
		]), //Infeed-Giaitri
		hb_common_bidders.concat([
				 { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3268950'} },
				 // { bidder: 'ucfunnel', params: { adid : 'ad-E2B4276DB6EABA99074778783A99EA4D'} },
				 // { bidder: 'sovrn', params: {tagid: '795409'} },
			 //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
		]), //Infeed-Suckhoe
		hb_common_bidders.concat([
				 { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3268951'} },
				 // { bidder: 'ucfunnel', params: { adid : 'ad-772876AD24237A49FB9278D4EBB9BDD8'} },
				 // { bidder: 'sovrn', params: {tagid: '795410'} },
			 //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
		]), //Infeed-Giadinh
		hb_common_bidders.concat([
				 { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3681539'} },
				 // { bidder: 'ucfunnel', params: { adid : 'ad-BE78EBA4797A7D3EC6692A26A78A7E4'} },
				 // { bidder: 'sovrn', params: {tagid: '795411'} },
			 //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
		]), //Infeed-Sohoa
		hb_common_bidders.concat([
				 { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3681540'} },
				 // { bidder: 'ucfunnel', params: { adid : 'ad-AA7BA3D678EA37A8C8D23867B89B2BDD'} },
				 // { bidder: 'sovrn', params: {tagid: '795413'} },
			 //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
		]), //thongtindoanhnghiepso1
	]
}

var size_array = mapping_hb.sizes;

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

  var mybotubad = setInterval(ub_adscript, 1000);

  function ub_adscript() {
    for(var i=0; i<mapping_hb.targetUnits.length; i++){
  		// try {
  			while (document.getElementById(mapping_hb.targetUnits[i]) != null) {
  					targetUnit = document.getElementById(mapping_hb.targetUnits[i]);
  					var z= document.createElement('div');
  					z.id = mapping_hb.adId[i];
  					// z.className = mapping_hb.adId[i];
  					targetUnit.appendChild(z);

  					adUnitTemp = {
  						code: mapping_hb.adUnitNames[i],
  						mediaTypes: {
  								banner: {
  										sizes: size_array[i]
  								}
  						},
  						bids: mapping_hb.bids[i]
  					};
  					adUnits.push(adUnitTemp);

            clearInterval(mybotubad);
            ub_ad();
  					break;
  			}
  		//  }
  		// catch(err) {
  		// 	console.log(err);
  		// }
    }

  }


function 	ub_ad() {

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

  for(var i=0; i<mapping_hb.targetUnits.length; i++){
      while (document.getElementById(mapping_hb.targetUnits[i]) != null) {
        mappings.slotNumbers.push(i+1);
        mappings.adCode.push(mapping_hb.adUnitNames[i]);
        mappings.sizes.push(mapping_hb.sizes[i]);
        mappings.adId.push(mapping_hb.adId[i]);
        ub_checkRendered(i);
        break;
    }
  }

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
       ubpbjs.addAdUnits(adUnits);
       ubpbjs.bidderSettings = {
         'appnexus': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.86; } },
         'pubmatic': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.74; } },
         'rubicon': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
         'openx': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
         'criteo': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
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
             auctionDelay: 500},
         debug: false,
         useBidCache: true,
         enableSendAllBids: false, // Default will be `true` as of 1.0
         bidderSequence: 'random', // Default is random
         publisherDomain: 'https://vnexpress.net/',
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
}

function ub_checkRendered(i) {
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === mapping_hb.slotNames[i]) {
        ub_checkAdRendered(mapping_hb.adId[i], mapping_hb.slotNames[i], [mapping_hb.adUnitNames[i]]);
      }
    });
});
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
