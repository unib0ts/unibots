var PREBID_TIMEOUT = 2000;
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

function mobileCheck() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

var adUnits = [];

var hb_common_bidders = [
	    { bidder: 'appnexus', params: { placementId: '23404517' } }, /* one placementId for all sizes  my appnexus bidder */
		// { bidder: 'oftmedia', params: { placementId: '19680368' } },
		// { bidder: '33across', params: { siteId : 'b3G35kWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
		// { bidder: 'emx_digital', params: { tagid: '107927' } }, /* sizeless */
		// { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
		// { bidder: 'nobid', params: { siteId: '22604972522' } },
    // { bidder: 'adyoulike', params: { placement: '33aeb1ecd77e4749e314a127a84d161e'}, labelAll: ["US"] },
		// { bidder: 'openx', params: {unit: '541046310', delDomain: 'yieldbird-d.openx.net'} },
		// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
		// //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
		// { bidder: 'criteo', params: {networkId: '10542'} },
		{ bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
		// { bidder: 'criteointl', params: {networkId: '10545'} },
];

var mapping_hb = {
targetUnits: [
	  'unibots1',
		'unibots2',
		'unibots3',
    'unibots4'
],
slotNames: ['ub_slot1', 'ub_slot2', 'ub_slot3', 'ub_slot4'],
adUnitNames: [
	  '/22082859479/gamertweak.com_300x250_320x50_1',
		'/22082859479/gamertweak.com_300x250_320x50_2',
    '/22082859479/gamertweak.com_300x250_320x50_3',
		'/22082859479/gamertweak.com_300x250_320x50_4',
],
adId: [
	  'div-gpt-ad-1636976525804-0',
		'div-gpt-ad-1636976561486-0',
    'div-gpt-ad-1636976580011-0',
    'div-gpt-ad-1636976601129-0',
],
sizesD: [
	  [300, 250],
		[300, 250],
		[300, 250],
    [300, 250],
],
sizesM: [
	  [320, 50],
		[320, 50],
	  [320, 50],
    [320, 50],
],
bids: [
		hb_common_bidders.concat([
				 // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4052948'} },
         	// { bidder: 'adyoulike', params: { placement: '33aeb1ecd77e4749e314a127a84d161e'}, labelAll: ["US"] },
				 { bidder: 'ucfunnel', params: { adid : 'pub-BE78B98ADAEB8497079B793A93E3A374'} },
				 { bidder: 'sovrn', params: {tagid: '977416'} },
           { bidder: 'openx', params: {unit: '551027268', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
			 //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
		]), //Infeedinstream1
		hb_common_bidders.concat([
				 // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4052949'} },
         	// { bidder: 'adyoulike', params: { placement: '33aeb1ecd77e4749e314a127a84d161e'}, labelAll: ["US"] },
				 { bidder: 'ucfunnel', params: { adid : 'pub-BE78B98ADAEB8497079B793A93E3A374'} },
				 { bidder: 'sovrn', params: {tagid: '977417'} },
           { bidder: 'openx', params: {unit: '551027584', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
			 //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
		]), //Infeedinstream2
		hb_common_bidders.concat([
				 // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3268943'} },
         	// { bidder: 'adyoulike', params: { placement: '33aeb1ecd77e4749e314a127a84d161e'}, labelAll: ["US"] },
				 { bidder: 'ucfunnel', params: { adid : 'pub-BE78B98ADAEB8497079B793A93E3A374'} },
				 { bidder: 'sovrn', params: {tagid: '977418'} },
           { bidder: 'openx', params: {unit: '551027873', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
			 //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
		]), //Infeed-Kinhdoanh
		hb_common_bidders.concat([
				 // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4052950'} },
         	// { bidder: 'adyoulike', params: { placement: '33aeb1ecd77e4749e314a127a84d161e'}, labelAll: ["US"] },
				 { bidder: 'ucfunnel', params: { adid : 'pub-BE78B98ADAEB8497079B793A93E3A374'} },
				 { bidder: 'sovrn', params: {tagid: '977419'} },
           { bidder: 'openx', params: {unit: '551028139', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
			 //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93232', domain: 'https://prg8.smartadserver.com' } }
		]), //Infeed-Giaitri
	]
}

if (!mobileCheck()) {
  var size_array = mapping_hb.sizesD;
}else {
  var size_array = mapping_hb.sizesM;
}

// var mybotstyleSheet='.ub-sticky-ad-containerdesk{position:fixed;width:fit-content!important;bottom:0;left:50%;transform:translateX(-50%);z-index:2147483647}.close_ub-sticky-addesk{display: none; position:absolute;margin-top:-20px;width:20px;cursor:pointer;right:-20px;z-index:2147483647;pointer-events:all;filter:invert(12%) sepia(96%) saturate(7213%) hue-rotate(4deg) brightness(100%) contrast(117%)} #div-gpt-ad-1625037685774-0{min-width: 728px;min-height: 90px;}';
//
// var css=document.createElement('style');
// css.type='text/css';
// css.appendChild(document.createTextNode(mybotstyleSheet));
// document.getElementsByTagName('head')[0].appendChild(css);

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
    renderedFlag: [false, false, false, false]
  };

  // if (!mobileCheck()) {
  //  z= document.createElement('div');
  //  z.id = 'ub-sticky-ad-containerdesk';
  //  z.className = 'ub-sticky-ad-containerdesk';
  //  z.innerHTML ='<span class="close_ub-sticky-addesk" id="close_ub-sticky-addesk" onclick="mybotubstickyadDesk()"><img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/close.svg"></span><div id="ub-sticky-adDesk"></div>';
  //  x = document.querySelector('body');
  //  x.appendChild(z);
  // }

  var mybotubad = setInterval(ub_adscript, 500);

  function ub_adscript() {
    var mybotAdscriptEnabled =0;
    for(var i=0; i<mapping_hb.targetUnits.length; i++){
  		// try {
  			while (document.getElementById(mapping_hb.targetUnits[i]) != null) {
  					targetUnit = document.getElementById(mapping_hb.targetUnits[i]);
  					var z= document.createElement('div');
  					z.id = mapping_hb.adId[i];
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
            mybotAdscriptEnabled= 1;
  					break;
  			}
  		//  }
  		// catch(err) {
  		// 	console.log(err);
  		// }
    }
    if (mybotAdscriptEnabled) {
       ub_ad();
    }
  }


function 	ub_ad() {
  var s0 = document.createElement('script');
  s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
  s0.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(s0);

  var s1 = document.createElement('script');
  s1.async = "async";
  s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
  s1.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(s1);

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
        if (!mobileCheck()) {
          mappings.sizes.push(mapping_hb.sizesD[i]);
        }else {
          mappings.sizes.push(mapping_hb.sizesM[i]);
        }
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
     //    ubpbjs.setBidderConfig({
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
       ubpbjs.bidderSettings = {
         'appnexus': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.86; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'pubmatic': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.74; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'rubicon': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.75; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'openx': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.75; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'criteo': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.75; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'nobid': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'oftmedia': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.80; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'sovrn': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*0.81; temp = temp - 0.0323; return temp>0? temp: 0;} },
         //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },

         '33across': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'emx_digital': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'rhythmone': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'eplanning': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'adyoulike': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'smartadserver': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'onetag': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} },
         'ucfunnel': { bidCpmAdjustment: function(bidCpm){ let temp = bidCpm*1.00; temp = temp - 0.0323; return temp>0? temp: 0;} }
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
         publisherDomain: 'https://gamertweak.com/',
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

// if (!mobileCheck()) {
//   googletag.cmd.push(function() {
//         googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//           // if (event.slot === mapping_full_hb.slotNumbers[i]) {
//             var nodes = document.getElementById('div-gpt-ad-1625037685774-0').childNodes[0].childNodes;
//             if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
//               document.getElementById('close_ub-sticky-addesk').style.display = 'block';
//             }
//           // }
//         });
//   });
// }
//
// function mybotubstickyadDesk() {
//    document.getElementById('ub-sticky-ad-containerdesk').style.display='none';
// }
