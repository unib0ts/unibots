// //load apstag.js library
// !function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
//
// var requestManager = {
//     adserverRequestSent: false,
//     aps: false,
//     prebid: false
// };
//
// //initialize the apstag.js library on the page to allow bidding
// apstag.init({
//      pubID: '8282b9c6-324d-4939-b1ea-958d67a9e637',
//      adServer: 'googletag'
// });
// apSlots = []


var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;

function mobileCheck() {
    var check = false;
    (function (a) {
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4)
            )
        )
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

var mybotstyleSheet =
    ".ub-popup-ad{width:auto !important;height:auto !important;position: fixed !important;top: 50%;left: 50%;align-items: center;transform: translate(-50%, -50%);z-index:2147483646}.mybotpopupCloseButton{background-color:#fff;color:#000;cursor:pointer;font-family:arial;font-weight:700;position:absolute;top:25px;left:2px;font-size:25px;line-height:25px;width:25px;height:25px;z-index:2147483647;text-align:center} #div-gpt-ad-1629457284866-0{ max-width: unset !important;padding-left: unset !important; margin-left: unset !important; margin-right:unset !important;";

var css = document.createElement("style");
css.type = "text/css";
css.appendChild(document.createTextNode(mybotstyleSheet));
document.getElementsByTagName("head")[0].appendChild(css);

var s3 = document.createElement('script');
s3.setAttribute("crossorigin", "anonymous");
s3.async = true;
s3.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9927599584498453";
document.getElementsByTagName('head')[0].appendChild(s3);


var GEO_CODE = '';
(function(){
  var request = new XMLHttpRequest();
		url = 'https://pro.ip-api.com/json/?fields=status,message,countryCode&key=LWKtz4EzQwMJRyQ';
		request.open('GET', url, true);
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				var data = request.responseText;
				data = JSON.parse(data);
				if(data.status == "success") {
           GEO_CODE = data.countryCode;
           if (GEO_CODE =="US" || GEO_CODE =="CA") {
              ubpopup();
           }
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

var ub_div_1_sizes = [320, 50];
var ub_div_2_sizes = [[320, 480], [480, 320]];
var ub_adUnits = [];


function mybotubPopadcls() {
    document.getElementById("ub-popup-ad-container").style.display = "none";
}

  ub_adUnits1 =
  {
      code: '/21928950349,22624158342/sandesh.com_nb_320x50',
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
        { bidder: 'appnexus', params: { placementId: '19056689' } },
        { bidder: 'oftmedia', params: { placementId: '20846125' } }
      ]
  };
  ub_adUnits.push(ub_adUnits1);

  ub_adUnits1 =
  {
      code: '/21928950349,22624158342/sandesh.com_nb_320x50',
      mediaTypes: {
          banner: {
              sizes: ub_div_1_sizes
          }
      },
      bids: [
      	{ bidder: 'appnexus', params: { placementId: '19056689' } }, /* one placementId for all sizes  my appnexus bidder */
        { bidder: 'oftmedia', params: { placementId: '20846125' } },
        { bidder: 'sovrn', params: {tagid: '711904'} },
        { bidder: 'openx', params: {unit: '543530444', delDomain: 'unibots-d.openx.net'}},
      	{ bidder: 'rhythmone', params: { placementId: '205382' } }, /* one placementId for all sizes */
      	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
      	{ bidder: '33across', params: { siteId : 'bNlDBeiEmr7kSQaKlKyvbs', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
      	{ bidder: 'emx_digital', params: { tagid: '97517' } }, /* sizeless */
        { bidder: 'nobid', params: { siteId : '22662228306'} },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
        { bidder: 'ucfunnel', params: { adid : 'ad-34B8449476B466781324998DEAD39BBA'} },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2953660'} },
        { bidder: 'smartadserver', params: { siteId: '362145', pageId: '1289646', formatId: '93231', domain: 'https://prg8.smartadserver.com' }},
        //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'adkernel', params: {zoneId: '126020', host: 'cpm.fmlabsonline.com'} },
        { bidder: 'adyoulike', params: { placement: '2ae55db8a34b479636e7281b5665b0a6'}, labelAll: ["US"] },
        //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        { bidder: 'rubicon', params: {accountId: '23976', siteId: '400078', zoneId: '2253180'} }
      ]
  };
  ub_adUnits.push(ub_adUnits1);


// ======== DO NOT EDIT BELOW THIS LINE =========== //
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];

var ubmappings = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  adId: [],
  renderedFlag: [false]
};

// apSlotTemp = {
//   // slotID: ubmappings_full_hb_config.targetUnits[index],
//   // slotName: ubmappings_full_hb_config.adUnitNames[index],
//   // sizes: ubmappings_full_hb_config.sizes[index]
//
//   slotID: 'div-ub-1',
//   slotName: '/21928950349,22624158342/sandesh.com_nb_320x50',
//   sizes: ubmappings.sizes,
// }
// apSlots.push(apSlotTemp);

function ub_checkAdRendered(adId, ub_slot, adCode){
  ub_slotNum = ub_slot[ub_slot.length-1]-1;
  if(!ubmappings.renderedFlag[ub_slotNum]){
    adId1 = adId;
    var nodes = document.getElementById(adId1).childNodes[0].childNodes;
    if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      setTimeout(function() {
        refreshBid(ub_slot, adCode);
      }, REFRESH_TIMEOUT);
      ubmappings.renderedFlag[ub_slotNum] = true;
    }else {
      ub_psbckRandom = Math.floor(Math.random() * 2);
        eval('ub_passback'+ub_psbckRandom+'()');
    }
  }
}

// var botmanCalled = false;
// var userStatusBM = '';
// function callBotman(){
//   if(userStatusBM == ''){
//     var request = new XMLHttpRequest();
//     var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=sandesh';
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
// 	googletag.pubads().refresh(ubmappings.slots);
// }

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
      googletag.pubads().refresh(ubmappings.slots);
    });
  });
  // callAds(bids);
}

function googleDefine(slotNumbers, adCode, sizes, adId){
  for(var i=0; i<slotNumbers.length;i++){
    eval('ub_slot'+slotNumbers[i]+ '= '+'googletag.defineSlot(adCode[i], sizes[i], adId[i])');
    var a = eval('ub_slot'+slotNumbers[i]);
    a.addService(googletag.pubads());
    ubmappings.slots.push(eval('ub_slot'+slotNumbers[i]));
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

function ub_passback0() {
  var s0_passback = document.createElement('script');
  s0_passback.src = "https://click.nativclick.com/loading/?handle=7563";
  s0_passback.async = true;
  document.getElementsByTagName('head')[0].appendChild(s0_passback);

  ub_passback = document.createElement("div");
  ub_passback.id = "0ce98f53e3aa229aa2f31b16e5dcbb4b";
  ub_sticky = document.getElementById('adSmall');
  ub_sticky.appendChild(ub_passback);
}

function ub_passback1() {
  if(typeof colombia == 'undefined'){
  var colombia = colombia || {};
  colombia.fns = colombia.fns || [];
    (function() {
        var cads = document.createElement("script");
        cads.async = true;
        cads.type = "text/javascript";
        cads.src = "https://static.clmbtech.com/ctn/commons/js/colombia_v2.js";
        document.getElementsByTagName('head')[0].appendChild(cads);
    })();
  }

  ub_passback = document.createElement("div");
  ub_passback.setAttribute("style", "float:left;min-height:2px;width:100%;");
  ub_passback.setAttribute("data-position", "1");
  ub_passback.setAttribute("data-section", "StroyPage");
  ub_passback.setAttribute("class", "colombia");

  if (!mobileCheck()) {
      ub_passback.setAttribute("data-ua", "D");
      ub_passback.setAttribute("data-slot", "459128");
      ub_passback.setAttribute("id", "div-clmb-ctn-459128-1");
      ub_sticky = document.getElementById('adSmall');
      ub_sticky.appendChild(ub_passback);
  }else {
    ub_passback.setAttribute("data-ua", "M");
    ub_passback.setAttribute("data-slot", "459114");
    ub_passback.setAttribute("id", "div-clmb-ctn-459114-1");
    ub_sticky = document.getElementById('adSmall');
    ub_sticky.appendChild(ub_passback);
  }
}

ubmappings.slotNumbers.push(1);
ubmappings.adCode.push('/21928950349,22624158342/sandesh.com_nb_320x50');
ubmappings.sizes.push(ub_div_1_sizes);
ubmappings.adId.push('div-ub-1');
googletag.cmd.push(function() {
  // callAPStagBids(); //Ap part
  // callAPSAds(ubmappings.adCode, ubmappings.slots);
  googletag.pubads().addEventListener('slotRenderEnded', function(event) {
    if (event.slot === ub_slot1) {
      ub_checkAdRendered('div-ub-1', ub_slot1, ['/21928950349,22624158342/sandesh.com_nb_320x50']);
    }
  });
});

function ubpopup() {
  if (mobileCheck()) {
    z2 = document.createElement("div");
    z2.id = "ub-popup-ad-container";
    z2.className = "ub-popup-ad-container";
    z2.innerHTML =
        '<span class="mybotpopupCloseButton" id="mybotpopupCloseButton" onclick="mybotubPopadcls()" style="display:none">\u0078</span><div class="ub-popup-ad" id="div-gpt-ad-1639132029151-0"></div>';
    x2 = document.querySelector("body");
    x2.appendChild(z2);

    ub_adUnits1 = {
        code: "/21928950349,22624158342/sandesh_interstitial",
        mediaTypes: {
            banner: {
                sizes: ub_div_2_sizes,
            },
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '23739103' } }, /* one placementId for all sizes  my appnexus bidder */
          // { bidder: 'oftmedia', params: { placementId: '20846125' } },
          { bidder: 'sovrn', params: {tagid: '987230'} },
          { bidder: 'openx', params: {unit: '556400682', delDomain: 'unibots-d.openx.net'}},
          { bidder: 'rhythmone', params: { placementId: '205382' } }, /* one placementId for all sizes */
          // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          // { bidder: '33across', params: { siteId : 'bNlDBeiEmr7kSQaKlKyvbs', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
          // { bidder: 'emx_digital', params: { tagid: '97517' } }, /* sizeless */
          { bidder: 'nobid', params: { siteId : '21986889220'} },
          // { bidder: 'criteo', params: {networkId: '10542'} },
          // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'ucfunnel', params: { adid : 'ad-2736E34B46A7734BF848A6634229487D'} },
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4168631'} },
          // { bidder: 'smartadserver', params: { siteId: '362145', pageId: '1289646', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          { bidder: 'rubicon', params: { accountId: '23976', siteId: '400078', zoneId: '2253180'} },
          // { bidder: 'adkernel', params: {zoneId: '126020', host: 'cpm.fmlabsonline.com'} },
          { bidder: 'adyoulike', params: { placement: '2ae55db8a34b479636e7281b5665b0a6'}, labelAll: ["US"] },
          //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        // { bidder: 'rubicon', params: {accountId: '23976', siteId: '400078', zoneId: '2253180'} }
        ],
    };
    ub_adUnits.push(ub_adUnits1);

    googletag.cmd.push(function () {
        ub_slotp = googletag
            .defineSlot(
                "/21928950349,22624158342/sandesh_interstitial",
                ub_div_2_sizes,
                "div-gpt-ad-1639132029151-0"
            )
            .addService(googletag.pubads());
        googletag.pubads().collapseEmptyDivs(true);
        googletag.pubads().setCentering(true);
        googletag.pubads().setPrivacySettings({ restrictDataProcessing: true });
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
        googletag
            .pubads()
            .addEventListener("slotRenderEnded", function (event) {
                if (
                    event.slot.getAdUnitPath() ===
                    "/21928950349,22624158342/sandesh_interstitial"
                ) {
                    ub_checkAd1Rendered();
                }
            });
    });

    ubpbjs.que.push(function () {
        ubpbjs.requestBids({
            bidsBackHandler: initAdserver1,
            timeout: PREBID_TIMEOUT,
        });
    });

    // in case ubpbjs doesn't load
    setTimeout(function () {
        initAdserver1();
    }, FAILSAFE_TIMEOUT);
  }

  function initAdserver1() {
    if (ubpbjs.initAdserverSet) return;
    ubpbjs.initAdserverSet = true;
    googletag.cmd.push(function () {
        ubpbjs.que.push(function () {
            ubpbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh([ub_slotp]);
        });
    });
  }

  function ub_checkAd1Rendered() {
      adId1 = "div-gpt-ad-1639132029151-0";
      var nodes = document.getElementById(adId1).childNodes[0].childNodes;
      if (
          !(nodes.length && nodes[0].nodeName.toLowerCase() == "iframe") ||
          document.getElementById(adId1).style.display == "none"
      ) {
          document.querySelector("#ub-popup-ad-container").style.display = "none";
      } else if (nodes.length && nodes[0].nodeName.toLowerCase() == "iframe") {
          document.getElementById("mybotpopupCloseButton").style.display =
              "block";
          document.querySelector("#ub-popup-ad-container").style.display =
              "block";
          mybotpopupad = document.querySelector("#ub-popup-ad-container");
          mybotpopupad.style.height = "100%";
          mybotpopupad.style.backgroundColor = "rgb(0, 0, 0)";
          mybotpopupad.style.zIndex = "2147483647";
      }
  }
}

  // ubmappings.slotNumbers.push(2);
  // ubmappings.adCode.push('/21928950349,22624158342/sandesh_interstitial');
  // ubmappings.sizes.push(ub_div_2_sizes);
  // ubmappings.adId.push('div-gpt-ad-1639132029151-0');
  // googletag.cmd.push(function() {
  //   // callAPStagBids(); //Ap part
  //   // callAPSAds(ubmappings.adCode, ubmappings.slots);
  //   googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //     if (event.slot === ub_slot2) {
  //       ub_checkAd1Rendered('div-gpt-ad-1639132029151-0', ub_slot2, ['/21928950349,22624158342/sandesh_interstitial']);
  //     }
  //   });
  // });


// }

if(typeof googletag.defineSlot === "function"){
  googleDefine(ubmappings.slotNumbers, ubmappings.adCode, ubmappings.sizes, ubmappings.adId);
  googlePush();
}
else{
  // setTimeout(function(){
    googletag.cmd.push(function() {
      googleDefine(ubmappings.slotNumbers, ubmappings.adCode, ubmappings.sizes, ubmappings.adId);
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
      ubpbjs.addAdUnits(ub_adUnits);
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
               sid:"87",
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
        publisherDomain: 'http://sandesh.com/',
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
//
// function callAPSAds(adCode, ub_slot){
//   ubpbjs.que.push(function(){
//     ubpbjs.requestBids({
//       timeout: PREBID_TIMEOUT,
//       ub_adUnits: ub_adUnits,
//       adUnitCodes: adCode,
//       bidsBackHandler: function() {
//         // ubpbjs.initAdserverSetHB = true;
//         googletag.cmd.push(function() {
//           ubpbjs.que.push(function() {
//               ubpbjs.setTargetingForGPTAsync();
//               requestManager.prebid = true;
//               biddersBack();
//               // googletag.pubads().refresh(ub_slot);
//           });
//         });
//       }
//     });
//   });
// }
// function callAPStagBids(){
//   apstag.fetchBids({
//     slots: apSlots,
//      timeout: 2000
//   },function(bids) {
//           googletag.cmd.push(function() {
//               apstag.setDisplayBids();
//               requestManager.aps = true;
//               biddersBack();
//           });
//       }
//   );
// }
// function biddersBack() {
//     if (requestManager.aps && requestManager.prebid) {
//         sendAdserverRequest();
//     }
//     return;
// }
// function sendAdserverRequest() {
//     if (requestManager.adserverRequestSent === true) {
//         return;
//     }
//     requestManager.adserverRequestSent = true;
//     googletag.cmd.push(function() {
//         googletag.pubads().refresh(ubmappings.slots);
//     });
// }
