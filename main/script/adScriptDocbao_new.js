mybotBlockedPagesFlag = 1;
mybotBlockedUrl = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/blocks/blocksDocbao.json';
mybotBlockedClientName = 'docbao';

if(typeof mybotBlockedPagesFlag !== 'undefined' && mybotBlockedPagesFlag ==1){
  urlToCheck = window.location.host+window.location.pathname+window.location.search;

  var request = new XMLHttpRequest();
  url = mybotBlockedUrl;

  request.open('GET', url, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = request.responseText;
      data = JSON.parse(data);
      data = data[mybotBlockedClientName];
      if(data) {
        data = data.urls;
        if(data.includes(urlToCheck)){
          // mybotdiv1 = '';
          return false;
        }
        else{
          ubadScript();
        }
      }
    }
    else {
      console.log('Block Check Request failed');
      ubadScript();
    }
  };
  request.onerror = function() {
    console.log('Request failed');
    ubadScript();
  };
  request.send();
}
else{
  ubadScript();
}

function ubadScript() {
  var cachebuster = Math.round(new Date().getTime() / 1000);
  url ="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ubPlayer/docbao/script.min.js?cb=" + cachebuster;
  ub_vs = document.createElement("script");
  ub_vs.src = url;
  ub_vs.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(ub_vs);

  checkHBUnits();
}

  //load apstag.js library
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
  //      pubID: '5d8da970-719a-4a86-9bd0-adf1589f8c5e', //enter your unibque pub ID here as shown above, it must within quotes
  //      adServer: 'googletag'
  // });
  // apSlots = []

  mybotGACode = "G-B5EQT1MLZ3";
  mybotgabywa =
      '<script async src="https://www.googletagmanager.com/gtag/js?id=' +
      mybotGACode +
      '"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "' +
      mybotGACode +
      '");</script>';

  ub_ga = document.createElement("div");
  ub_ga.id = "gabywa";
  document.getElementsByTagName("head")[0].appendChild(ub_ga);
  document.getElementById("gabywa").innerHTML = mybotgabywa;
  loadAd("gabywa");

  var mybotstyleSheet='.ub-sticky-ad-container{width:100%;float:left;text-align:center;background:#fff;position:fixed;bottom:0;left:0;box-shadow:0 -3px 3px rgba(0,0,0,.2)!important;z-index:2147483646}.ub-sticky-ad{width:100%;z-index:2147483647;pointer-events:all;cursor:pointer;padding-top:4px}.close_ub-sticky-ad{display:none;position:absolute;top:-20px;background:#fff;color:#000;left:0px;pointer-events:all;height:20px;z-index:2147483647;width:30px;font-size:26px;line-height:23px;box-shadow:0 -3px 3px rgba(0,0,0,.2)!important;border-radius:2px 10px 0 0}.close_ub-sticky-addesk{display:block;top: -25px;right:5px;width:18px;position:absolute; pointer-events:all;cursor:pointer;z-index:2147483647;}.ub-sticky-ad-containerdesk{position:fixed;width:auto!important;bottom:0;right:0;z-index:2147483646}.ub-left-ad{width: auto !important;position: fixed;top: 50px;left: 0px;z-index: 1;pointer-events:all;cursor:pointer;}.ub-right-ad{width: auto !important;position: fixed;top: 50px;right: 10px;z-index: 100; } .ub-popup-ad-container{width:100%;top:50%;left:50%;position:fixed;display:flex;pointer-events:auto;align-items:center;transform:translate(-50%,-50%);}.ub-popup-ad{width:100% !important;height:auto !important;position: fixed !important;top: 50%;left: 50%;align-items: center;transform: translate(-50%, -50%); z-index:2147483646}.mybotpopupCloseButton{background-color:#fff;color:#000;cursor:pointer;font-family:arial;font-weight:700;position:absolute;top:25px;left:2px;font-size:25px;line-height:25px;width:25px;height:25px;z-index:2147483647; text-align:center} #div-gpt-ad-1624440241552-0{max-width: unset !important;padding-left: unset !important; margin-left: unset !important; margin-right:unset !important;}';

  var css = document.createElement("style");
  css.type = "text/css";
  css.appendChild(document.createTextNode(mybotstyleSheet));
  document.getElementsByTagName("head")[0].appendChild(css);

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

    if (!mobileCheck() && (window.screen.availWidth > 1024)) {
    // if(!(window.location.href == "https://docbao.vn/")){
    // 	var cachebuster = Math.round(new Date().getTime() / 1000);
    // 	url = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ubPlayer/docbao/script.min.js?cb='+cachebuster;
    // 	ub_vs = document.createElement('script');
    // 	ub_vs.src = url;
    // 	ub_vs.type = "text/javascript";
    // 	document.getElementsByTagName('head')[0].appendChild(ub_vs);
    // }
    // var ad_scrpt1 = document.createElement('script');
    // ad_scrpt1.type = "text/javascript";
    // ad_scrpt1.innerText= mybotadscrpt;
    // document.getElementsByTagName('body')[0].appendChild(ad_scrpt1);
    //
    // var ad_scrpt2 = document.createElement('noscript');
    // ad_scrpt2.innerText= mybotadscrptChild;
    // document.getElementsByTagName('body')[0].appendChild(ad_scrpt2);
    // if (document.querySelector('.header')) {
      z= document.createElement('div');
      z.id = 'ub-left-ad';
      z.className = 'ub-left-ad';
      x = document.querySelector('body');
      parentWidth = x.offsetWidth;
      child = document.querySelector('.header');
      childWidth = child.offsetWidth;
      space = (parentWidth - childWidth)/2;
      if(space > 120){
       child.appendChild(z);
       document.getElementById('ub-left-ad').innerHTML= '<div id="div-gpt-ad-1615189484195-0">';
      }

      z= document.createElement('div');
      z.id = 'ub-right-ad';
      z.className = 'ub-right-ad';
      x = document.querySelector('body');
      parentWidth = x.offsetWidth;
      child = document.querySelector('.header');
      childWidth = child.offsetWidth;
      space = (parentWidth - childWidth)/2;
      if(space > 120){
       child.appendChild(z);
       document.getElementById('ub-right-ad').innerHTML= '<div id="div-gpt-ad-1615189532474-0">';
      }
    // }

    // if(!(window.location.href == "https://docbao.vn/")){
      z1= document.createElement('div');
      z1.id = 'ub-sticky-ad-containerdesk';
      z1.className = 'ub-sticky-ad-containerdesk';
      z1.innerHTML ='<span class="close_ub-sticky-addesk" id="close_ub-sticky-addesk" onclick="mybotubstickyadDesk()"><img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/close.svg"></span><div class="ub-sticky-adDesk" id="div-gpt-ad-1622019421633-0"></div>';
      x1 = document.querySelector('body');
      x1.appendChild(z1);
    // }
  } else {
        // if(!(window.location.href== "https://m.docbao.vn/")){
      if(!(window.location.href.split('https://m.docbao.vn/giai-tri').length == 2)){
          z1 = document.createElement("div");
          z1.id = "ub-sticky-ad-container";
          z1.className = "ub-sticky-ad-container";
          z1.innerHTML =
              '<span class="close_ub-sticky-ad" id="close_ub-sticky-ad" onclick="mybotubstickyad()">\u0078</span><div class="ub-sticky-ad" id="div-gpt-ad-1616569480504-0"></div>';
          x1 = document.querySelector("body");
          x1.appendChild(z1);
      }


      // z2 = document.createElement("div");
      // z2.id = "ub-popup-ad-container";
      // z2.className = "ub-popup-ad-container";
      // z2.innerHTML =
      //     '<span class="mybotpopupCloseButton" id="mybotpopupCloseButton" onclick="mybotubPopadcls()" style="display:none">\u0078</span><div class="ub-popup-ad" id="div-gpt-ad-1624440241552-0"><script>googletag.cmd.push(function() {googletag.display("div-gpt-ad-1624440241552-0);});</script></div>';
      // x2 = document.querySelector("body");
      // x2.appendChild(z2);
  }

  function mybotubPopadcls() {
      document.getElementById("ub-popup-ad-container").style.display = "none";
  }

  function mybotubstickyad() {
      document.getElementById("ub-sticky-ad-container").style.display = "none";
  }

  function mybotubstickyadDesk() {
      document.getElementById("ub-sticky-ad-containerdesk").style.display =
          "none";
  }

  var s0 = document.createElement("script");
  s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
  s0.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(s0);

  var s1 = document.createElement("script");
  s1.async = "async";
  s1.src =
      "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
  s1.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(s1);

  var PREBID_TIMEOUT = 1800;
  var FAILSAFE_TIMEOUT = 3000;
  var REFRESH_TIMEOUT = 60000;

  var GEO_CODE = "";
  (function () {
      var request = new XMLHttpRequest();
      url =
          "https://pro.ip-api.com/json/?fields=status,message,countryCode&key=LWKtz4EzQwMJRyQ";
      request.open("GET", url, true);
      request.onload = function () {
          if (request.status >= 200 && request.status < 400) {
              var data = request.responseText;
              data = JSON.parse(data);
              if (data.status == "success") {
                  GEO_CODE = data.countryCode;
              } else {
                  console.error("Geo Request Failed");
              }
          } else {
              console.error("Request failed from server");
          }
          mainHbRun();
      };
      request.onerror = function () {
          console.error("Request failed to Reach GEO Server");
          mainHbRun();
      };
      request.send();
  })();

  const customConfigObjectA = {
      buckets: [
          {
              precision: 2, //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
              min: 0,
              max: 20,
              increment: 0.01, // from $0 to $5, 1-cent increments
          },
      ],
  };

  var adUnits_full_hb = [];

  var div_1_sizes = [
      [300, 600],
      [300, 250],
      [336, 280],
  ];

  // if (mobileCheck()) {
  //     // if(!(window.location.href.split('https://bongdaplus.vn/euro-cup-chau-au/').length == 2)){
  //     adUnits1 = {
  //         code: "/22057354005/docbao.vn_popup_fluid_336x280",
  //         mediaTypes: {
  //             banner: {
  //                 sizes: div_1_sizes,
  //             },
  //         },
  //         bids: [
  //           // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
  // 					// { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3910489'} },
  //           // { bidder: 'oftmedia', params: { placementId: '20846125' } },
  //           // // // // { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //           // // // { bidder: 'emx_digital', params: { tagid: '112606' } }, /* sizeless */
  //           // // // // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
  //           // { bidder: 'nobid', params: { siteId: '22049997436' } },
  //           // // // { bidder: 'openx', params: {unit: '541046310', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
  //           // // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //           // // // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //           // // // { bidder: 'criteo', params: {networkId: '10542'} },
  //           // // // { bidder: 'criteointl', params: {networkId: '10545'} },
  //           // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  //           // { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
  //         ],
  //     };
  //     adUnits_full_hb.push(adUnits1);
  //     // }
  // }

  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
  googletag.cmd.push(function () {
      googletag.pubads().disableInitialLoad();
  });

  var ubpbjs = ubpbjs || {};
  ubpbjs.que = ubpbjs.que || [];

  function mainHbRun() {
      ubpbjs.que.push(function () {
          ubpbjs.addAdUnits(adUnits_full_hb);
          ubpbjs.aliasBidder("criteo", "criteointl");
          ubpbjs.bidderSettings = {
              appnexus: {
                  bidCpmAdjustment: function (bidCpm) {
                      return bidCpm * 0.86;
                  },
              },
              pubmatic: {
                  bidCpmAdjustment: function (bidCpm) {
                      return bidCpm * 0.74;
                  },
              },
              rubicon: {
                  bidCpmAdjustment: function (bidCpm) {
                      return bidCpm * 0.75;
                  },
              },
              openx: {
                  bidCpmAdjustment: function (bidCpm) {
                      return bidCpm * 0.75;
                  },
              },
              criteo: {
                  bidCpmAdjustment: function (bidCpm) {
                      return bidCpm * 0.85;
                  },
              },
              criteointl: {
                  bidCpmAdjustment: function (bidCpm) {
                      return bidCpm * 0.85;
                  },
              },
              nobid: {
                  bidCpmAdjustment: function (bidCpm) {
                      return bidCpm * 1.0;
                  },
              },
              oftmedia: {
                  bidCpmAdjustment: function (bidCpm) {
                      return bidCpm * 0.8;
                  },
              },
              sovrn: {
                  bidCpmAdjustment: function (bidCpm) {
                      return bidCpm * 0.81;
                  },
              },
              onetag: {
                  bidCpmAdjustment: function (bidCpm) {
                      return bidCpm * 0.85;
                  },
              },
              //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },

              "33across": {
                  bidCpmAdjustment: function (bidCpm) {
                      return bidCpm * 1.0;
                  },
              },
              emx_digital: {
                  bidCpmAdjustment: function (bidCpm) {
                      return bidCpm * 1.0;
                  },
              },
              rhythmone: {
                  bidCpmAdjustment: function (bidCpm) {
                      return bidCpm * 1.0;
                  },
              },
              eplanning: {
                  bidCpmAdjustment: function (bidCpm) {
                      return bidCpm * 1.0;
                  },
              },
          };
          ubpbjs.setConfig({
              priceGranularity: customConfigObjectA,
              userSync: {
                  iframeEnabled: true,
                  syncsPerBidder: 999, // and no more than 3 syncs at a time
                  // syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
                  filterSettings: {
                      iframe: { bidders: [""], filter: "exclude" },
                      image: { bidders: "*", filter: "include" },
                  },
                  // enableOverride: true // publisher will call `ubpbjs.triggerUserSyncs()'
                  userIds: [
                      {
                          name: "id5Id",
                          params: {
                              partner: 438, // change to the Partner Number you received from ID5
                          },
                          storage: {
                              type: "cookie",
                              name: "id5id.1st", // create a cookie with this name
                              expires: 90, // cookie lasts for 90 days
                              refreshInSeconds: 8 * 3600, // refresh ID every 8 hours to ensure it is fresh
                          },
                      },
                  ],
                  auctionDelay: 500,
              },
              debug: false,
              useBidCache: true,
              enableSendAllBids: false, // Default will be `true` as of 1.0
              bidderSequence: "random", // Default is random
              publisherDomain: "https://bongdaplus.vn/",
              bidderTimeout: PREBID_TIMEOUT + 500,
              //pubcid: {expInterval: },
              //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
          });
          ubpbjs.requestBids({
              bidsBackHandler: initAdserver_hb_full,
              timeout: PREBID_TIMEOUT,
              labels: [GEO_CODE],
          });
      });
      setTimeout(function () {
          initAdserver_hb_full();
      }, FAILSAFE_TIMEOUT);
  }

  var mapping_full_hb = {
      slots: [],
      adCode: [],
      slotNumbers: [],
      sizes: [],
      adId: [],
      renderedFlag: [],
  };

  var ub_slotp;
  function addNewsBotAd() {
      changeConfigToHB();
      googletag.cmd.push(function () {
          ub_slotp = googletag
              .defineSlot(
                  "/22057354005/docbao.vn_popup_fluid_336x280",
                  div_1_sizes,
                  "div-gpt-ad-1624440241552-0"
              )
              .addService(googletag.pubads());
          // if (googletag.pubads().collapseEmptyDivs(true)) {
          //   document.getElementById("ub-popup-ad-container").style.display = "none";
          // }
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
                      "/22057354005/docbao.vn_popup_fluid_336x280"
                  ) {
                      ub_checkAd1Rendered();
                  }
              });
      });

      ubpbjs.que.push(function () {
          ubpbjs.requestBids({
              bidsBackHandler: initAdserver,
              timeout: PREBID_TIMEOUT,
          });
      });

      // in case ubpbjs doesn't load
      setTimeout(function () {
          initAdserver();
      }, FAILSAFE_TIMEOUT);
  }

  function initAdserver() {
      if (ubpbjs.initAdserverSet) return;
      ubpbjs.initAdserverSet = true;
      googletag.cmd.push(function () {
          ubpbjs.que.push(function () {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh([ub_slotp]);
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

  ub_ad1RefreshFlag = 0;
  function ub_checkAd1Rendered() {
      adId1 = "div-gpt-ad-1624440241552-0";
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
          // mybotpopupad.style.backdropFilter = 'blur(3px)';
          // mybotpopupad.classList.add("popubcontainer");
          mybotpopupad.style.zIndex = "2147483647";
          // if (ub_ad1RefreshFlag != 1) {
          //     setTimeout(function () {
          //         ub_ad1RefreshFlag = 1;
          //         refreshBidTemp(ub_slotp);
          //     }, REFRESH_TIMEOUT);
          // }
      }
  }

  function refreshBidTemp(ub_slotp) {
      ubpbjs.que.push(function () {
          ubpbjs.requestBids({
              timeout: PREBID_TIMEOUT,
              adUnitCodes: ["/22057354005/docbao.vn_popup_fluid_336x280"],
              bidsBackHandler: function () {
                  googletag.cmd.push(function () {
                      ubpbjs.que.push(function () {
                          ubpbjs.setTargetingForGPTAsync();
                          googletag.pubads().refresh([ub_slotp]);
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
              },
          });
      });
  }

  var hb_full_common_bidders = [
    { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
    // { bidder: 'oftmedia', params: { placementId: '20846125' } },
    // // // { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
    // // { bidder: 'emx_digital', params: { tagid: '112606' } }, /* sizeless */
    // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
    // { bidder: 'nobid', params: { siteId: '22316040550' } },
    // // { bidder: 'openx', params: {unit: '541046310', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
    // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
    // // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
    // { bidder: 'criteo', params: {networkId: '10542'} },
    // { bidder: 'criteointl', params: {networkId: '10545'} },
    // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
    // { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
  ];

  var mappings_full_hb_config_desktop = {
      adUnitNames: [
          "/22057354005/docbao.vn_pc_balloon_hb_300x600",
          "/22057354005/docbao.vn_pc_bottom_336x280",
          "/22057354005/docbao.vn_pc_inreadbanner-1_300x250",
          "/22057354005/docbao.vn_pc_inreadbanner-2_300x250",
          "/22057354005/docbao.vn_pc_header_728x90",
          "/22057354005/docbao.vn_pc_R1_300x250",
          "/22057354005/docbao.vn_pc_R2_300x250",
          "/22057354005/docbao.vn_pc_R5_300x600",
          "/22057354005/docbao.vn_pc_fl_120x600",
          "/22057354005/docbao.vn_pc_fr1_120x600",
          "/22057354005/docbao.vn_pc_fr_300x250",
          "/22057354005/docbao_pc_sticky_300x600",
      ],
      adId: [
        "div-gpt-ad-1622019421633-0", //'/22057354005/docbao.vn_pc_balloon_hb_300x600',
        "div-gpt-ad-1619189202147-0", //'/22057354005/docbao.vn_pc_bottom_336x280',
        "div-gpt-ad-1614845452435-0", //'/22057354005/docbao.vn_pc_inreadbanner-1_300x250',
        "div-gpt-ad-1618215713954-0", //'/22057354005/docbao.vn_pc_inreadbanner-2_300x250',
        "div-gpt-ad-1615188864095-0", //''/22057354005/docbao.vn_pc_header_728x90',
        "div-gpt-ad-1615188969422-0", //'/22057354005/docbao.vn_pc_R1_300x250',
        "div-gpt-ad-1615189017367-0", //'/22057354005/docbao.vn_pc_R2_300x250',
        "div-gpt-ad-1615189428915-0", //'/22057354005/docbao.vn_pc_R5_300x600',
        "div-gpt-ad-1615189484195-0", //'/22057354005/docbao.vn_pc_fl_120x600',
        "div-gpt-ad-1615189532474-0", //'/22057354005/docbao.vn_pc_fr1_120x600',
        "div-gpt-ad-1615189668110-0", //'/22057354005/docbao.vn_pc_fr_300x250',
        "div-gpt-ad-1617446297082-0", //'/22057354005/docbao_pc_sticky_300x600',
      ],
      sizes: [
        [ [336, 280], [300, 250] ], // '/22057354005/docbao.vn_pc_balloon_hb_300x600',
        [336, 280],  // '/22057354005/docbao.vn_pc_bottom_336x280',
        [300, 250],    // '/22057354005/docbao.vn_pc_inreadbanner-1_300x250',
        [300, 250], // '/22057354005/docbao.vn_pc_inreadbanner-2_300x250',
        [728, 90],  // '/22057354005/docbao.vn_pc_header_728x90',
        [300, 250], // '/22057354005/docbao.vn_pc_R1_300x250',
        [300, 250], // '/22057354005/docbao.vn_pc_R2_300x250',
        [300, 600], // '/22057354005/docbao.vn_pc_R5_300x600',
        [120, 600], // '/22057354005/docbao.vn_pc_fl_120x600',
        [120, 600], // '/22057354005/docbao.vn_pc_fr1_120x600',
        [300, 250], // '/22057354005/docbao.vn_pc_fr_300x250',
        [300, 600],  // '/22057354005/docbao_pc_sticky_300x600',
      ],
      bids: [
        hb_full_common_bidders.concat([
          // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3796452'} },
        //     { bidder: 'openx', params: {unit: '544096392', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        //     { bidder: 'ucfunnel', params: { adid : 'ad-AA7B99BB29264B4DC88A788E9939B44B'} },
        // //     { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
        // //     {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
        //     { bidder: 'sovrn', params: {tagid: '919449'} },
        ]),  //  '/21692080761/amb_es_desk_lb_1',
        hb_full_common_bidders.concat([
          // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
            // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3515727'} },
            // { bidder: 'openx', params: {unit: '543987770', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        //       { bidder: 'ucfunnel', params: { adid : 'ad-34B8937646E48374C3B67334A6E892D8'} },
        // //     { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
        // //     {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
        //     // { bidder: 'sovrn', params: {tagid: '888997'} },
        //     { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        ]),  //  '/21692080761/amb_es_desk_lb_1',
        hb_full_common_bidders.concat([
          // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
            // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3515727'} },
            // { bidder: 'openx', params: {unit: '543987770', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        //   { bidder: 'ucfunnel', params: { adid : 'ad-27369ED47B326AEB087272D9242BD929'} },
        // //     { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
        // //     {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
        //     // { bidder: 'sovrn', params: {tagid: '888201'} },
        //     { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        ]),  //  '/21692080761/amb_es_desk_lb_1',
        hb_full_common_bidders.concat([
          // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
          // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3515727'} },
          // { bidder: 'openx', params: {unit: '543987770', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        //       { bidder: 'ucfunnel', params: { adid : 'ad-77284E6D79EAE24BFB384D4BD89AE486'} },
        // //     { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
        // //     {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
        //     // { bidder: 'sovrn', params: {tagid: '888202'} },
        //     { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        ]),  //  '/21692080761/amb_es_desk_lb_1',
        hb_full_common_bidders.concat([
        // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3515727'} },
        //     { bidder: 'openx', params: {unit: '543987770', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        //     { bidder: 'ucfunnel', params: { adid : 'ad-627DB892274974B3F26E47A24DD3884'} },
        // //     { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
        // //     {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
        //     // { bidder: 'sovrn', params: {tagid: '867505'} },
        // { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93233', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        ]),  //  '/21692080761/amb_es_desk_lb_1',
       hb_full_common_bidders.concat([
         // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
         // { bidder: 'openx', params: {unit: '543987774', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3515728'} },
      //    { bidder: 'ucfunnel', params: { adid : 'ad-D23468B22ED28E6AFD28D824D8A2E8D2'} },
      // //   { bidder: "kubient", params: { zoneid: "4efc33fa24a35", server: "kssp.kbntx.ch"} },
      // //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
      //   // { bidder: 'sovrn', params: {tagid: '867509'} },
      // { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
       ]), //  '/21692080761/amb_es_mob_mpu_1',
       hb_full_common_bidders.concat([
         // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
         // { bidder: 'openx', params: {unit: '543987771', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3515729'} },
      //    { bidder: 'ucfunnel', params: { adid : 'ad-AA7B264AAAD388720B274A336E27DB2'} },
      // //   { bidder: "kubient", params: { zoneid: "d67c4840c9efc", server: "kssp.kbntx.ch"} },
      // //   {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
      //   // { bidder: 'sovrn', params: {tagid: '867506'} },
      // { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
       ]), //    '/21692080761/amb_es_desk_lb_2',
       hb_full_common_bidders.concat([
         // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3515730'} },
         // { bidder: 'sovrn', params: {tagid: '867510'} },
         // { bidder: 'openx', params: {unit: '543987775', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
         // { bidder: 'ucfunnel', params: { adid : 'ad-34B8E6944E96A3D617B679ADBD3A3B3'} },
      //    { bidder: "kubient", params: { zoneid: "f634ea1907cd4", server: "kssp.kbntx.ch"} },
      //    {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
      // { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93422', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
       ]), //    '/21692080761/amb_es_mob_mpu_2',
       hb_full_common_bidders.concat([
         // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3515731'} },
         // { bidder: 'openx', params: {unit: '543987772', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
         // { bidder: 'ucfunnel', params: { adid : 'ad-627DB8922D4DEB79F697A87DA24E32A'} },
      //   { bidder: "kubient", params: { zoneid: "26de462596928", server: "kssp.kbntx.ch"} },
      //   {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
        // { bidder: 'sovrn', params: {tagid: '867507'} },
      // { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '94413', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
       ]), //'/21692080761/amb_es_desk_lb_3',
       hb_full_common_bidders.concat([
         // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3515732'} },
      //    { bidder: 'openx', params: {unit: '543987769', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      //    { bidder: 'ucfunnel', params: { adid : 'ad-AA7B264A7E449789F2783B423669EE4'} },
      // //   { bidder: "kubient", params: { zoneid: "26b5b52450e2a", server: "kssp.kbntx.ch"} },
      // //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
      //   // { bidder: 'sovrn', params: {tagid: '867504'} },
      // { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '94413', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
      //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi', domain: 'https://prg8.smartadserver.com' } }
       ]), //  '/21692080761/amb_es_mob_mpu_3',
       hb_full_common_bidders.concat([
         // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3515733'} },
      //    { bidder: 'openx', params: {unit: '543987773', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      //    { bidder: 'ucfunnel', params: { adid : 'ad-47B463A77DBED993069EEE96AD4BE4D'} },
      // //   { bidder: "kubient", params: { zoneid: "2b41d3c662400", server: "kssp.kbntx.ch"} },
      // //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
      //   { bidder: 'sovrn', params: {tagid: '867508'} },
      // { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
      //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
       ]), //    '/21692080761/amb_es_mob_mpu_4',
       hb_full_common_bidders.concat([
         // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
         // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3515733'} },
      //    { bidder: 'openx', params: {unit: '543987773', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      //    { bidder: 'ucfunnel', params: { adid : 'ad-47B463A77DBED993069EEE96AD4BE4D'} },
      // //   { bidder: "kubient", params: { zoneid: "2b41d3c662400", server: "kssp.kbntx.ch"} },
      // //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
      //   { bidder: 'sovrn', params: {tagid: '867508'} },
      // { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
      //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
       ]), //    '/21692080761/amb_es_mob_mpu_4',
      ],
      isAP: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
  };
  var mappings_full_hb_config_mobile = {
      adUnitNames: [
        "/22057354005/docbao.vn_gpt_mobile_home_300x100",
        "/22057354005/docbao.vn_gpt_mobile_center2_300x250",
        "/22057354005/docbao.vn_gpt_mobile_center3_300x600",
        "/22057354005/docbao.vn_gpt_mobile_center4_300x250",
        "/22057354005/docbao.vn_gpt_mobile_center5_300x250",
        "/22057354005/docbao.vn_gpt_mobile_bottom_300x250",
        "/22057354005/docbao.vn_mobile_home_center_6",
        // "/22057354005/docbao.vn_mb_anchor_320x50",
        "/22057354005/docbao.vn_mb_anchor_300x100",
      ],
      adId: [
        "div-gpt-ad-1617722423692-0", //'/22057354005/docbao.vn_gpt_mobile_home_300x100',
        "div-gpt-ad-1617722328302-0", //'/22057354005/docbao.vn_gpt_mobile_center2_300x250',
        "div-gpt-ad-1617722500738-0", //'/22057354005/docbao.vn_gpt_mobile_center3_300x600',
        "div-gpt-ad-1617722573994-0", //'/22057354005/docbao.vn_gpt_mobile_center4_300x250',
        "div-gpt-ad-1617722626196-0", //'/22057354005/docbao.vn_gpt_mobile_center5_300x250',
        "div-gpt-ad-1617722685215-0", //'/22057354005/docbao.vn_gpt_mobile_bottom_300x250',
        "div-gpt-ad-1620991472253-0", //'/22057354005/docbao.vn_mobile_home_center_6',
        // "div-gpt-ad-1625034565032-0", //'/22057354005/docbao.vn_mb_anchor_320x50',
        "div-gpt-ad-1616569480504-0",
      ],
      sizes: [
        [300, 100], // '/22057354005/docbao.vn_gpt_mobile_home_300x100',
        [300, 250], // '/22057354005/docbao.vn_gpt_mobile_center2_300x250',
        [300, 600], // '/22057354005/docbao.vn_gpt_mobile_center3_300x600',
        [300, 250], // '/22057354005/docbao.vn_gpt_mobile_center4_300x250',
        [300, 250], // '/22057354005/docbao.vn_gpt_mobile_center5_300x250',
        [300, 250], // '/22057354005/docbao.vn_gpt_mobile_bottom_300x250',
        [300, 250], // '/22057354005/docbao.vn_mobile_home_center_6',
        // [320, 50],
        [300,100],
      ],
      bids: [
        hb_full_common_bidders.concat([
          // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3579068'} },
       //    { bidder: 'openx', params: {unit: '544014846', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
       //    { bidder: 'ucfunnel', params: { adid : 'ad-E2B43A6E9322ED470763DBE477E3B37D'} },
       // // // //   { bidder: "kubient", params: { zoneid: "2b41d3c662400", server: "kssp.kbntx.ch"} },
       // // // //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
       //   // { bidder: 'sovrn', params: {tagid: '882943'} },
       //  { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
       //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
        ]), //    '/21692080761/amb_es_mob_mpu_4',
        hb_full_common_bidders.concat([
          // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3579064'} },
       //    { bidder: 'openx', params: {unit: '544014848', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
       //    { bidder: 'ucfunnel', params: { adid : 'ad-47B4A73E64274644038ABAB4BB96272'} },
       // // // //   { bidder: "kubient", params: { zoneid: "2b41d3c662400", server: "kssp.kbntx.ch"} },
       // // // //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
       //   // { bidder: 'sovrn', params: {tagid: '882939'} },
       //  { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
       //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
        ]), //    '/21692080761/amb_es_mob_mpu_4',
        hb_full_common_bidders.concat([
          // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3579065'} },
       //    { bidder: 'openx', params: {unit: '544014849', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
       //    { bidder: 'ucfunnel', params: { adid : 'ad-BE786E492AB69388C7944B84322DA327'} },
       // // // //   { bidder: "kubient", params: { zoneid: "2b41d3c662400", server: "kssp.kbntx.ch"} },
       // // // //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
       //   // { bidder: 'sovrn', params: {tagid: '882940'} },
       //  { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
       //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
        ]), //    '/21692080761/amb_es_mob_mpu_4',
        hb_full_common_bidders.concat([
          // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3579066'} },
       //    { bidder: 'openx', params: {unit: '544014850', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
       //    { bidder: 'ucfunnel', params: { adid : 'ad-AA7B4A6924BD948817BEB9D83E787BA'} },
       // // // //   { bidder: "kubient", params: { zoneid: "2b41d3c662400", server: "kssp.kbntx.ch"} },
       // // // //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
       //   { bidder: 'sovrn', params: {tagid: '882941'} },
       // { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
       //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
        ]), //    '/21692080761/amb_es_mob_mpu_4',
        hb_full_common_bidders.concat([
          // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3579067'} },
       //    { bidder: 'openx', params: {unit: '544014851', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
       //    { bidder: 'ucfunnel', params: { adid : 'ad-772847DB9DBD47BB1B36A342A2823E7B'} },
       // // // //   { bidder: "kubient", params: { zoneid: "2b41d3c662400", server: "kssp.kbntx.ch"} },
       // // // //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
       //   // { bidder: 'sovrn', params: {tagid: '882942'} },
       //  { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
       //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
        ]), //    '/21692080761/amb_es_mob_mpu_4',
        hb_full_common_bidders.concat([
          // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3579063'} },
       //    { bidder: 'openx', params: {unit: '544014852', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
       //    { bidder: 'ucfunnel', params: { adid : 'ad-627D9283B66ADADA0E8EA2A2A93888D9'} },
       // // // //   { bidder: "kubient", params: { zoneid: "2b41d3c662400", server: "kssp.kbntx.ch"} },
       // // // //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
       //   // { bidder: 'sovrn', params: {tagid: '882938'} },
       // { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
       //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
        ]), //    '/21692080761/amb_es_mob_mpu_4',
        hb_full_common_bidders.concat([
          // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
            // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3515727'} },
            // { bidder: 'openx', params: {unit: '543987770', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            // { bidder: 'ucfunnel', params: { adid : 'ad-627DB892274974B3F26E47A24DD3884'} },
        //     { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
        //     {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
            // { bidder: 'sovrn', params: {tagid: '867505'} },
            // { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        ]),  //  '/21692080761/amb_es_desk_lb_1',
       //  hb_full_common_bidders.concat([
       //    // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
       //    { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3910488'} },
       // //    { bidder: 'openx', params: {unit: '544005769', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
       // //    { bidder: 'ucfunnel', params: { adid : 'ad-47B468D2A8746AABFED266DB773EE867'} },
       // // // //   { bidder: "kubient", params: { zoneid: "2b41d3c662400", server: "kssp.kbntx.ch"} },
       // // // //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
       // // //   { bidder: 'sovrn', params: {tagid: '889023'} },
       // // { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93416', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
       // //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
       //  ]),
       hb_full_common_bidders.concat([
         // { bidder: 'appnexus', params: { placementId: '21156521' } }, /* one placementId for all sizes  my appnexus bidder */
         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3548534'} },
      //    { bidder: 'openx', params: {unit: '544005769', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      //    { bidder: 'ucfunnel', params: { adid : 'ad-47B468D2A8746AABFED266DB773EE867'} },
      // // //   { bidder: "kubient", params: { zoneid: "2b41d3c662400", server: "kssp.kbntx.ch"} },
      // // //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
      // //   { bidder: 'sovrn', params: {tagid: '889023'} },
      // { bidder: 'smartadserver', params: { siteId: '399735', pageId: '1361917', formatId: '93416', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
      //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
       ]),
      ],
      isAP: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
  };
  var mappings_full_hb_config_both = {
      adUnitNames: [],
      bids: [],
      isAP: [],
  };
  var mappings_full_hb_config = {
      adUnitNames: [],
      adId: [],
      sizes: [],
      bid: [],
      isAP: [],
  };

  var mappings_extra_units_config_desktop = {
      adUnitNames: [
          // '/22057354005/docbao_native_fluid',
          // '/21692080761/amb_eng_header_desk_v2'  //  { bidder: "kubient", params: { zoneid: "728eb6f0a4102", server: "kssp.kbntx.ch"} },
      ],
  };
  var mappings_extra_units_config_mobile = {
      adUnitNames: [
          // '/22057354005/docbao_native_fluid', //  { bidder: "kubient", params: { zoneid: "07971f0b93433", server: "kssp.kbntx.ch"} },
      ],
  };
  var mappings_extra_units_config_both = {
      adUnitNames: [
          // '/22057354005/docbao_native_fluid', //  { bidder: "kubient", params: { zoneid: "a8d023686c41b", server: "kssp.kbntx.ch"} },
      ],
  };

  var mappings_extra_units_config = {
      adUnitNames: [
        '/22057354005/docbao_native_fluid',
        '/22057354005/docbao_ub_vignette',
      ],
  };

  var mappings_extra_units = {
    slots: [],
    adUnitNames:[]
  };

  var mappings_final_refresh = {
    adUnitNames: [],
    adSlots: []
  }

  function mobileCheckAdScript() {
      var check = false;
      (function (a) {
          if (
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                  a
              ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| ||a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                  a.substr(0, 4)
              )
          )
              check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
  }

  if (!mobileCheckAdScript()) {
      mappings_full_hb_config.adUnitNames =
          mappings_full_hb_config_desktop.adUnitNames.concat(
              mappings_full_hb_config_both.adUnitNames
          );
      mappings_full_hb_config.bids = mappings_full_hb_config_desktop.bids.concat(
          mappings_full_hb_config_both.bids
      );
      mappings_full_hb_config.isAP = mappings_full_hb_config_desktop.isAP.concat(
          mappings_full_hb_config_both.isAP
      );
      mappings_full_hb_config.adId = mappings_full_hb_config_desktop.adId;
      mappings_full_hb_config.sizes = mappings_full_hb_config_desktop.sizes;
      // mappings_extra_units_config.adUnitNames =
      //     mappings_extra_units_config_desktop.adUnitNames.concat(
      //         mappings_extra_units_config_both.adUnitNames
      //     );
  } else {
      mappings_full_hb_config.adUnitNames =
          mappings_full_hb_config_mobile.adUnitNames.concat(
              mappings_full_hb_config_both.adUnitNames
          );
      mappings_full_hb_config.bids = mappings_full_hb_config_mobile.bids.concat(
          mappings_full_hb_config_both.bids
      );
      mappings_full_hb_config.isAP = mappings_full_hb_config_mobile.isAP.concat(
          mappings_full_hb_config_both.isAP
      );
      mappings_full_hb_config.adId = mappings_full_hb_config_mobile.adId;
      mappings_full_hb_config.sizes = mappings_full_hb_config_mobile.sizes;
      // mappings_extra_units_config.adUnitNames =
      //     mappings_extra_units_config_mobile.adUnitNames.concat(
      //         mappings_extra_units_config_both.adUnitNames
      //     );
  }

  function checkHBUnits() {
      // if (mobileCheck()) {
      //     // if(window.location.href == "https://bongdaplus.vn/euro-cup-chau-au/ai-xung-dang-la-cau-thu-xuat-sac-nhat-euro-2020-3374772107.html"){
      //     addNewsBotAd();
      //     // }
      // }

      changeConfigToHB();
      callMapUnits();

      // setTimeout(function() {
      //     initAdserver_hb_full();
      // }, FAILSAFE_TIMEOUT);
  }

  function callFullHBAds(adCode, ub_slot) {
      fillRefreshMap();
      // ubpbjs.que.push(function () {
      //     ubpbjs.requestBids({
      //         timeout: PREBID_TIMEOUT,
      //         labels: [GEO_CODE],
      //         adUnits: adUnits_full_hb,
      //         adUnitCodes: adCode,
      //         bidsBackHandler: function () {
      //             ubpbjs.initAdserverSetHB = true;
      //             googletag.cmd.push(function () {
      //                 ubpbjs.que.push(function () {
      //                     ubpbjs.setTargetingForGPTAsync();
      //                     // requestManager.prebid = true;
      //                     // biddersBack();
      //                     googletag.cmd.push(function () {
      //                         googletag.pubads().refresh(mapping_full_hb.slots);
      //                         // googletag.pubads().refresh(mappings_extra_units.slots);
      //                     });
      //                     // googletag.pubads().refresh(ub_slot);
      //                 });
      //             });
      //         },
      //     });
      // });
  }

  function initAdserver_hb_full() {
      if (ubpbjs.initAdserverSetHB) return;
      ubpbjs.initAdserverSetHB = true;
      googletag.cmd.push(function () {
          ubpbjs.que.push(function () {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh(mapping_full_hb.slots);
              // var x = ubpbjs.getAllPrebidWinningBids();
              // var adsCalled_hb = false;
              // for(var i=0;i<x.length;i++){
              //   var bc = x[i].bidderCode;
              //   if(bc=="openx"){
              //     adsCalled_hb = true;
              //     callBotman_hb();
              //   }
              // }
              // if(!adsCalled_hb){
              //   callAdsUB_hb();
              // }
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

  // var botmanCalled = false;
  // var userStatusBM_hb = '';
  // function callBotman_hb(){
  //   if(userStatusBM_hb == ''){
  //     var request = new XMLHttpRequest();
  //     var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=bongdaplus';
  //     request.open('GET', url, true);
  //     request.onload = function() {
  //       if (request.status >= 200 && request.status < 400) {
  //         var data = request.responseText;
  //         if(data != ""){
  //           data = JSON.parse(data);
  //           userStatusBM_hb = data;
  //           if(userStatusBM_hb == "0" || userStatusBM_hb == "3"){
  //             callAdsUB_hb();
  //           }
  //           else{
  //             console.log('Not Valid Traffic for openx');
  //           }
  //         }
  //         else{
  //           console.error('Data not returned from server');
  //           callAdsUB_hb();
  //         }
  //       }
  //       else {
  //         console.error('Request failed from server');
  //         callAdsUB_hb();
  //       }
  //     };
  //     request.onerror = function() {
  //       console.error('Request failed to Reach Server');
  //       callAdsUB_hb();
  //     };
  //     request.send();
  //   }
  //   else{
  //     if(userStatusBM_hb == "0" || userStatusBM_hb == "3"){
  //       callAdsUB_hb();
  //     }
  //     else{
  //       console.log('Not Valid Traffic for openx');
  //     }
  //   }
  //
  // }
  //
  // function callAdsUB_hb(){
  // 	googletag.pubads().refresh(mapping_full_hb.slots);
  // }

  function callMapUnits() {
      x = mappings_full_hb_config.adId;
      for (i = 0; i < x.length; i++) {
          if (document.getElementById(mappings_full_hb_config.adId[i])) {
              adUnitTemp = {
                  code: mappings_full_hb_config.adUnitNames[i],
                  mediaTypes: {
                      banner: {
                          sizes: mappings_full_hb_config.sizes[i],
                      },
                  },
                  bids: mappings_full_hb_config.bids[i],
              };
              adUnits_full_hb.push(adUnitTemp);

              mapping_full_hb.slotNumbers.push(i + 1);
              mapping_full_hb.adCode.push(mappings_full_hb_config.adUnitNames[i]);
              mapping_full_hb.adId.push(mappings_full_hb_config.adId[i]);
              mapping_full_hb.sizes.push(mappings_full_hb_config.sizes[i]);

              // if(mappings_full_hb_config.isAP[index]){
              //   apSlotTemp = {
              //     slotID: googletag.pubads().getSlots()[i].getSlotId().getDomId(),
              //     slotName: x[i].getSlotId().getAdUnitPath(),
              //     sizes: size_array
              //   }
              //   apSlots.push(apSlotTemp);
              // }
          }
          // else if(mappings_extra_units_config.adUnitNames.includes(document.getElementById('div-gpt-ad-1629790932543-0'))){
          //   // mappings_extra_units.slots.push(x[i]);
          // }
      }

      if(typeof googletag != 'undefined') {
        if (!(window.location.href== "https://m.docbao.vn/" || window.location.href == "https://docbao.vn/")) {
            x_ub = googletag.pubads().getSlots();
            x_ublen = x_ub.length;
            for (var j = 0; j < x_ublen; j++) {
               if(mappings_extra_units_config.adUnitNames.includes(x_ub[j].getSlotId().getAdUnitPath())){
                 mappings_extra_units.slots.push(x_ub[j]);
                 mappings_extra_units.adUnitNames.push(x_ub[j]);
               }
            }
            callExtraHBAds(mappings_extra_units.adUnitNames, mappings_extra_units.slots)
          }
     }

      if (typeof googletag.defineSlot === "function") {
          googleDefine(
              mapping_full_hb.slotNumbers,
              mapping_full_hb.adCode,
              mapping_full_hb.sizes,
              mapping_full_hb.adId
          );
          googlePush();
      } else {
          // setTimeout(function(){
          googletag.cmd.push(function () {
              googleDefine(
                  mapping_full_hb.slotNumbers,
                  mapping_full_hb.adCode,
                  mapping_full_hb.sizes,
                  mapping_full_hb.adId
              );
              googlePush();
          });
          // }, 500);
      }

      // callAPStagBids();
      callFullHBAds(mapping_full_hb.adCode, mapping_full_hb.slots);
  }
  // checkHBUnits();

  // function callAPStagBids(){
  //   apstag.fetchBids({
  //     slots: apSlots,
  //      timeout: 2000
  //   },function(bids) {
  //           googletag.cmd.push(function() {
  //               apstag.setDisplayBids();
  //               requestManager.aps = true; // signals that APS request has completed
  //               biddersBack(); // checks whether both APS and Prebid have returned
  //           });
  //       }
  //   );
  // }
  //
  // function biddersBack() {
  //     if (requestManager.aps && requestManager.prebid) {
  //         sendAdserverRequest();
  //     }
  //     return;
  // }
  //
  // function sendAdserverRequest() {
  //     if (requestManager.adserverRequestSent === true) {
  //         return;
  //     }
  //     requestManager.adserverRequestSent = true;
  //     googletag.cmd.push(function() {
  //         googletag.pubads().refresh(mapping_full_hb.slots);
  //         // googletag.pubads().refresh(mappings_extra_units.slots);
  //     });
  // }

 function googleDefine(slotNumbers, adCode, sizes, adId) {
    for (var i = 0; i < slotNumbers.length; i++) {
        eval(
            "ub_slot" +
                slotNumbers[i] +
                "= " +
                "googletag.defineSlot(adCode[i], sizes[i], adId[i])"
        );
        var a = eval("ub_slot" + slotNumbers[i]);
        a.addService(googletag.pubads());
        mapping_full_hb.slots.push(eval("ub_slot" + slotNumbers[i]));
    }
}

 function googlePush() {
    googletag.cmd.push(function () {
        googletag.pubads().collapseEmptyDivs(true);
        // googletag.pubads().setCentering(true);
        // googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
        googletag.pubads().enableSingleRequest();
        // googletag.pubads().enableLazyLoad({
        // 					fetchMarginPercent: 200,
        // 					renderMarginPercent: 100,
        // 					mobileScaling: 2.0
        // 				});
        googletag.enableServices();
    });
}

 function fillRefreshMap() {
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

  // setInterval(function() {
  //   refreshBid(mappings_final_refresh.adSlots, mappings_final_refresh.adUnitNames);
  // }, REFRESH_TIMEOUT);

 function isInViewSpace(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isFullVisible =
        elemTop >= 0 && elemBottom <= window.innerHeight && !document.hidden;
    // Partially visible elements return true:
    var isPartialVisibleTop =
        elemTop < window.innerHeight && elemBottom >= 0 && !document.hidden;
    var isPartialVisibleBottom =
        elemTop <= 0 && elemBottom > 0 && !document.hidden;
    isVisible = isFullVisible || isPartialVisibleTop || isPartialVisibleBottom;
    return isVisible;
}

 function refreshBid(ub_slot, adCode) {
  if (mobileCheck() && (window.location.hostname == "m.docbao.vn")) {
    if (adCode == '/22057354005/docbao.vn_mb_anchor_300x100') {
      ubpbjs.que.push(function () {
          ubpbjs.requestBids({
              timeout: PREBID_TIMEOUT,
              adUnitCodes: adCode,
              adUnits: adUnits_full_hb,
              bidsBackHandler: function () {
                  googletag.cmd.push(function () {
                      ubpbjs.que.push(function () {
                          ubpbjs.setTargetingForGPTAsync();
                          googletag.pubads().refresh(ub_slot);
                          // var adsCalled_hb = false;
                          // for(var i=0;i<x.length;i++){
                          //   var bc = x[i].bidderCode;
                          //   if(bc=="openx"){
                          //     adsCalled_hb = true;
                          //     callBotman_hb();
                          //   }
                          // }
                          // if(!adsCalled_hb){
                          //   callAdsUB_hb();
                          // }
                      });
                  });
              },
          });
      });
    }
  }
  else {
    ubpbjs.que.push(function () {
        ubpbjs.requestBids({
            timeout: PREBID_TIMEOUT,
            adUnitCodes: adCode,
            adUnits: adUnits_full_hb,
            bidsBackHandler: function () {
                googletag.cmd.push(function () {
                    ubpbjs.que.push(function () {
                        ubpbjs.setTargetingForGPTAsync();
                        googletag.pubads().refresh(ub_slot);
                        // var adsCalled_hb = false;
                        // for(var i=0;i<x.length;i++){
                        //   var bc = x[i].bidderCode;
                        //   if(bc=="openx"){
                        //     adsCalled_hb = true;
                        //     callBotman_hb();
                        //   }
                        // }
                        // if(!adsCalled_hb){
                        //   callAdsUB_hb();
                        // }
                    });
                });
            },
        });
    });
  }
}

 if (mobileCheck()) {
    if(!(window.location.href.split('https://m.docbao.vn/giai-tri').length == 2)){
        googletag.cmd.push(function () {
            googletag.pubads().addEventListener("slotRenderEnded", function (event) {
              if (event.slot.getAdUnitPath() ==="/22057354005/docbao.vn_mb_anchor_300x100"){
                    var nodes_anchr = document.getElementById("div-gpt-ad-1616569480504-0").childNodes[0].childNodes;
                    if (nodes_anchr.length &&nodes_anchr[0].nodeName.toLowerCase() == "iframe") {
                        document.getElementById("close_ub-sticky-ad").style.display = "block";
                    }
              }
            });
        });
    }
}

 function loadAd(id, adUnits) {
    var elm = document.getElementById(id);
    var scripts = Array(elm.querySelectorAll("script"));
    scripts = scripts[0];
    for (var i = 0; i < scripts.length; i++) {
        oldScript = scripts[i];
        const newScript = document.createElement("script");
        var scriptAttr = Array(oldScript.attributes);
        scriptAttr = scriptAttr[0];
        for (var j = 0; j < scriptAttr.length; j++) {
            attr = scriptAttr[j];
            newScript.setAttribute(attr.name, attr.value);
        }
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        newScript.onload = function () {
            if (adUnits !== undefined) {
                smartyads.buildUnits(adUnits);
            }
        };
        oldScript.parentNode.replaceChild(newScript, oldScript);
    }
}

function changeConfigToHB(){
  ubpbjs.que.push(function() {
    ubpbjs.setConfig({
      "currency": {
         "adServerCurrency": "INR",
         "granularityMultiplier":75 ,
         "conversionRateFile": 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json',
         "defaultRates": { "USD": { "INR": 75 }}
       }
     });
  });
}
