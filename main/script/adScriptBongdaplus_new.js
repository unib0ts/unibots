mybotBlockedPagesFlag = 1;
mybotBlockedUrl = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/blocks/blocksBongdaplus.json';
mybotBlockedClientName = 'bongdaplus';

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

var bong_vietnamcatg =   (window.location.href.split('https://bongdaplus.vn/bong-da-viet-nam/').length == 2) ||
  (window.location.href.split('https://bongdaplus.vn/v-league').length == 2) ||
  (window.location.href.split('https://bongdaplus.vn/hang-nhat-quoc-gia').length == 2) ||
  (window.location.href.split('https://bongdaplus.vn/cup-quoc-gia').length == 2) ||
  (window.location.href.split('https://bongdaplus.vn/doi-tuyen-quoc-gia-viet-nam').length == 2)  ||
  (window.location.href.split('https://bongdaplus.vn/bong-da-nu-viet-nam').length == 2) ||
  (window.location.href.split('https://bongdaplus.vn/u17-viet-nam').length == 2) ||
  (window.location.href.split('https://bongdaplus.vn/u19-viet-nam').length == 2) ||
  (window.location.href.split('https://bongdaplus.vn/u21-viet-nam').length == 2) ||
  (window.location.href.split('https://bongdaplus.vn/futsal').length == 2) ||
  (window.location.href.split('https://bongdaplus.vn/bong-da-phong-trao').length == 2) ||
  (window.location.href.split('https://bongdaplus.vn/cac-doi-tuyen-tre-viet-nam').length == 2) ||
  (window.location.href.split('https://bongdaplus.vn/ket-nghia-anh-em').length == 2);

function ubadScript() {
  // if(!(bong_vietnamcatg)){
    var cachebuster = Math.round(new Date().getTime() / 1000);
    url ="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ubPlayer/main/player.js?cb=" + cachebuster;
    ub_vs = document.createElement("script");
    ub_vs.src = url;
    ub_vs.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(ub_vs);

    ub_vs.onload=function(){
      window.unibots = window.unibots || { cmd: [] };
      unibots.cmd.push(function(){
          unibotsPlayer("bongda");
      });
    }
  // }

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

  mybotGACode = "G-P2DCN3SNWK";
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

  var mybotstyleSheet =
      ".ub-sticky-ad-container{width:100%;float:left;text-align:center;background:#fff;position:fixed;bottom:0;left:0;box-shadow:0 -3px 3px rgba(0,0,0,.2)!important;z-index:99}.ub-sticky-ad{width:100%;z-index:100;padding-top:4px}.close_ub-sticky-ad{display:none;position:absolute;top:-20px;background:#fff;color:#000;left:0px;pointer-events:all;height:20px;z-index:100;width:30px;font-size:26px;line-height:23px;box-shadow:0 -3px 3px rgba(0,0,0,.2)!important;border-radius:2px 10px 0 0}.close_ub-sticky-addesk{display:block;top: -25px;right:0px;width:18px;position:absolute;pointer-events:all;cursor:pointer;z-index:2147483647;}.ub-sticky-ad-containerdesk{position:fixed;width:auto!important;bottom:0;right:0;z-index:2147483646}.ub-left-ad{width: auto !important;position: fixed;top: 120px;left: 0px;z-index: 100;}.ub-right-ad{width: auto !important;position: fixed;top: 120px;right: 0px;z-index: 2147483646;}  .ub-popup-ad-container{width:100%;top:50%;left:50%;position:fixed;display:flex;pointer-events:auto;align-items:center;transform:translate(-50%,-50%);}.ub-popup-ad{width:auto !important;height:auto !important;position: fixed !important;top: 50%;left: 50%;align-items: center;transform: translate(-50%, -50%);z-index:2147483646}.mybotpopupCloseButton{background-color:#fff;color:#000;cursor:pointer;font-family:arial;font-weight:700;position:absolute;top:25px;left:2px;font-size:25px;line-height:25px;width:25px;height:25px;z-index:2147483647;text-align:center} #div-gpt-ad-1629457284866-0{ max-width: unset !important;padding-left: unset !important; margin-left: unset !important; margin-right:unset !important;}";

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
      // var s5 = document.createElement('script');
      // s5.async = true;
      // s5.setAttribute("id", "AV5fb77ae2fab17435261f178a");
      // s5.type = "text/javascript";
      // s5.src = "https://tg1.aniview.com//api/adserver/spt?AV_TAGID=5fb77ae2fab17435261f178a&AV_PUBLISHERID=5fb75940e3a751708954df17";
      // document.getElementsByTagName('head')[0].appendChild(s5);
      if (document.querySelector("main")) {
          z = document.createElement("div");
          z.id = "ub-left-ad";
          z.className = "ub-left-ad";
          x = document.querySelector("body");
          parentWidth = x.offsetWidth;
          child = document.querySelector(".containr");
          childWidth = child.offsetWidth;
          space = (parentWidth - childWidth) / 2;
          if (space > 120) {
              document.querySelector("main").appendChild(z);
              document.getElementById("ub-left-ad").innerHTML =
                  '<div id="div-gpt-ad-1614845055882-0">';
          }

          z = document.createElement("div");
          z.id = "ub-right-ad";
          z.className = "ub-right-ad";
          x = document.querySelector("body");
          parentWidth = x.offsetWidth;
          child = document.querySelector(".containr");
          childWidth = child.offsetWidth;
          space = (parentWidth - childWidth) / 2;
          if (space > 120) {
              document.querySelector("main").appendChild(z);
              document.getElementById("ub-right-ad").innerHTML =
                  '<div id="div-gpt-ad-1614845141925-0">';
          }
      }

      // if (!(window.location.href == "https://bongdaplus.vn/")) {
          z1 = document.createElement("div");
          z1.id = "ub-sticky-ad-containerdesk";
          z1.className = "ub-sticky-ad-containerdesk";
          z1.innerHTML =
              '<span class="close_ub-sticky-addesk" id="close_ub-sticky-addesk" onclick="mybotubstickyadDesk()"><img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/close.svg"></span><div class="ub-sticky-adDesk" id="div-gpt-ad-1622019394824-0"></div';
          x1 = document.querySelector("body");
          x1.appendChild(z1);
      // }
  } else {
      // var s6 = document.createElement('script');
      // s6.async = true;
      // s6.setAttribute("id", "AV60489ad3e4171b0b054618b6");
      // s6.type = "text/javascript";
      // s6.src = "https://tg1.aniview.com//api/adserver/spt?AV_TAGID=60489ad3e4171b0b054618b6&AV_PUBLISHERID=5fb75940e3a751708954df17";
      // document.getElementsByTagName('head')[0].appendChild(s6);
      //
      // if (!document.querySelector('.artitle')) {
      // if (!(window.location.href == "https://bongdaplus.vn/")) {
        // if(!(bong_vietnamcatg)){
          z1 = document.createElement("div");
          z1.id = "ub-sticky-ad-container";
          z1.className = "ub-sticky-ad-container";
          z1.innerHTML =
              '<span class="close_ub-sticky-ad" id="close_ub-sticky-ad" onclick="mybotubstickyad()">\u0078</span><div class="ub-sticky-ad" id="div-gpt-ad-1614845787563-0"></div>';
          x1 = document.querySelector("body");
          x1.appendChild(z1);
      // }

    // if(!((window.location.href.split('https://bongdaplus.vn/ngoai-hang-anh/').length == 2) || (window.location.href.split('https://bongdaplus.vn/bong-da-anh/').length == 2) || (window.location.href.split('https://bongdaplus.vn/fa-cup').length == 2))){
    if (!(window.location.href == "https://bongdaplus.vn/")) {
      z2 = document.createElement("div");
      z2.id = "ub-popup-ad-container";
      z2.className = "ub-popup-ad-container";
      z2.innerHTML =
          '<span class="mybotpopupCloseButton" id="mybotpopupCloseButton" onclick="mybotubPopadcls()" style="display:none">\u0078</span><div class="ub-popup-ad" id="div-gpt-ad-1629457284866-0"><script>googletag.cmd.push(function() {googletag.display("div-gpt-ad-1629457284866-0);});</script></div>';
      x2 = document.querySelector("body");
      x2.appendChild(z2);
    }
  }

  function mybotubPopadcls() {
      document.getElementById("ub-popup-ad-container").style.display = "none";
  }

  function mybotubstickyad() {
      document.getElementById("ub-sticky-ad-container").style.display = "none";
  }

  function mybotubstickyadDesk() {
      document.getElementById("ub-sticky-ad-containerdesk").style.display = "none";
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

  var PREBID_TIMEOUT = 1300;
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

  if (mobileCheck()) {
    // if(!((window.location.href.split('https://bongdaplus.vn/ngoai-hang-anh/').length == 2) || (window.location.href.split('https://bongdaplus.vn/bong-da-anh/').length == 2) || (window.location.href.split('https://bongdaplus.vn/fa-cup').length == 2))){
    if (!(window.location.href == "https://bongdaplus.vn/")) {
      adUnits1 = {
          code: "/21928950349,22612899972/bongdaplus.vn_popup_fluid_336x280",
          mediaTypes: {
              banner: {
                  sizes: div_1_sizes,
              },
          },
          bids: [
              //   { bidder: 'appnexus', params: { placementId: '21146574' } }, /* one placementId for all sizes  my appnexus bidder */
              // 			{ bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3910487'} },
              // { bidder: 'oftmedia', params: { placementId: '20846125' } },
              // // // // { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
              // // // { bidder: 'emx_digital', params: { tagid: '112606' } }, /* sizeless */
              // // // // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
              // { bidder: 'nobid', params: { siteId: '22049997436' } },
              // // // { bidder: 'openx', params: {unit: '541046310', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              // // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
              // // // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
              // // // { bidder: 'criteo', params: {networkId: '10542'} },
              // // // { bidder: 'criteointl', params: {networkId: '10545'} },
              // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
              // { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
          ],
      };
      adUnits_full_hb.push(adUnits1);
    }
  }

  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
  googletag.cmd.push(function () {
      googletag.pubads().disableInitialLoad();
  });

  var ubpbjs = ubpbjs || {};
  ubpbjs.que = ubpbjs.que || [];

  function mainHbRun() {
      ubpbjs.que.push(function () {
        //   ubpbjs.setBidderConfig({
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
      googletag.cmd.push(function () {
          ub_slotp = googletag
              .defineSlot(
                  "/21928950349,22612899972/bongdaplus.vn_popup_fluid_336x280",
                  div_1_sizes,
                  "div-gpt-ad-1629457284866-0"
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
                      "/21928950349,22612899972/bongdaplus.vn_popup_fluid_336x280"
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
      adId1 = "div-gpt-ad-1629457284866-0";
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
              adUnitCodes: ["/21928950349,22612899972/bongdaplus.vn_popup_fluid_336x280"],
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
      {
          bidder: "appnexus",
          params: { placementId: "21146574" },
      } /* one placementId for all sizes  my appnexus bidder */,
      // { bidder: 'oftmedia', params: { placementId: '20846125' } },
      // // // { bidder: '33across', params: { siteId : 'bPSPrGBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
      // // { bidder: 'emx_digital', params: { tagid: '112606' } }, /* sizeless */
      // // // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
      // // { bidder: 'nobid', params: { siteId: '22088461846' } },
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
          "/21928950349,22612899972/bongdaplus.vn_popup_fluid_336x280",
          // '/21928950349,22612899972/bongdaplus.vn_PC_bottom-article_300x250_1',
          // '/21928950349,22612899972/bongdaplus.vn_PC_bottom-article_300x250_2',
          // '/21928950349,22612899972/bongdaplus.vn_in-article_468x60',
          "/21928950349,22612899972/bongdaplus.vn_in-article_336x280",
          // '/21928950349,22612899972/bongdaplus.vn_pc_header_970x250',
          "/21928950349,22612899972/bongdaplus.vn_pc_center1_970x250",
          "/21928950349,22612899972/bongdaplus.vn_pc_center2_970x250",
          "/21928950349,22612899972/bongdaplus.vn_pc_R1_300x250",
          "/21928950349,22612899972/bongdaplus.vn_pc_R2_300x250",
          "/21928950349,22612899972/bongdaplus.vn_pc_R3_300x600",
          "/21928950349,22612899972/bongdaplus.vn_pc_R4_300x600",
          "/21928950349,22612899972/bongdaplus.vn_pc_R5_300x600",
          "/21928950349,22612899972/bongdaplus.vn_pc_fl_120x600",
          "/21928950349,22612899972/bongdaplus.vn_pc_fr_120x600",
          "/21928950349,22612899972/bongdaplus.vn_pc_centerarticlepc_336x280",
      ],
      adId: [
            "div-gpt-ad-1622019394824-0", //'/22140546871/bongdaplus.vn_pc_balloon_hb_300x600'
            // 'div-gpt-ad-1620123749103-0',  //''/22140546871/bongdaplus.vn_PC_bottom-article_300x250_1'
            // 'div-gpt-ad-1620123852692-0', //'/22140546871/bongdaplus.vn_PC_bottom-article_300x250_2',
            // 'div-gpt-ad-1619183586523-0', // '/22140546871/bongdaplus.vn_in-article_468x60',
            "div-gpt-ad-1619183875165-0", //'/22140546871/bongdaplus.vn_in-article_336x280',
            // 'div-gpt-ad-1614843621164-0',  //'/22140546871/bongdaplus.vn_pc_header_970x250',
            "div-gpt-ad-1614844401467-0", //'/22140546871/bongdaplus.vn_pc_center1_970x250',
            "div-gpt-ad-1614844501678-0", //'/22140546871/bongdaplus.vn_pc_center2_970x250',
            "AR01",//"div-gpt-ad-1614844652124-0", //'/22140546871/bongdaplus.vn_pc_R1_300x250',
            "AR02",// "div-gpt-ad-1614844767234-0", //'/22140546871/bongdaplus.vn_pc_R2_300x250',
            "AR03",// "div-gpt-ad-1614844828905-0", //'/22140546871/bongdaplus.vn_pc_R3_300x600',
            "AR04",//"div-gpt-ad-1614844910453-0", //'/22140546871/bongdaplus.vn_pc_R4_300x600',
            "AR05",//"div-gpt-ad-1614844982617-0", //'/22140546871/bongdaplus.vn_pc_R5_300x600',
            "div-gpt-ad-1614845055882-0", //'/22140546871/bongdaplus.vn_pc_fl_120x600',
            "div-gpt-ad-1614845141925-0", //'/22140546871/bongdaplus.vn_pc_fr_120x600',
            "div-gpt-ad-1615775720668-0", //'/22140546871/bongdaplus.vn_pc_centerarticlepc_336x280',

          // "div-gpt-ad-1629456718562-0", //'/21928950349,22612899972/bongdaplus.vn_popup_fluid_336x280'
          // // 'div-gpt-ad-1629456756868-0',  //''/21928950349,22612899972/bongdaplus.vn_PC_bottom-article_300x250_1'
          // // 'div-gpt-ad-1629456794698-0', //'/21928950349,22612899972/bongdaplus.vn_PC_bottom-article_300x250_2',
          // // 'div-gpt-ad-1629455549972-0', // '/21928950349,22612899972/bongdaplus.vn_in-article_468x60',
          // "div-gpt-ad-1629455527851-0", //'/21928950349,22612899972/bongdaplus.vn_in-article_336x280',
          // // 'div-gpt-ad-1629457019318-0',  //'/21928950349,22612899972/bongdaplus.vn_pc_header_970x250',
          // "div-gpt-ad-1629456827053-0", //'/21928950349,22612899972/bongdaplus.vn_pc_center1_970x250',
          // "div-gpt-ad-1629456866816-0", //'/21928950349,22612899972/bongdaplus.vn_pc_center2_970x250',
          // "div-gpt-ad-1629457048042-0", //'/21928950349,22612899972/bongdaplus.vn_pc_R1_300x250',
          // "div-gpt-ad-1629457073149-0", //'/21928950349,22612899972/bongdaplus.vn_pc_R2_300x250',
          // "div-gpt-ad-1629457094678-0", //'/21928950349,22612899972/bongdaplus.vn_pc_R3_300x600',
          // "div-gpt-ad-1629457217769-0", //'/21928950349,22612899972/bongdaplus.vn_pc_R4_300x600',
          // "div-gpt-ad-1629457264337-0", //'/21928950349,22612899972/bongdaplus.vn_pc_R5_300x600',
          // "div-gpt-ad-1629456951127-0", //'/21928950349,22612899972/bongdaplus.vn_pc_fl_120x6000',
          // "div-gpt-ad-1629456984219-0", //'/21928950349,22612899972/bongdaplus.vn_pc_fr_120x600',
          // "div-gpt-ad-1629456895452-0", //'/21928950349,22612899972/bongdaplus.vn_pc_centerarticlepc_336x280',
      ],
      sizes: [
          [
              [336, 280],
              [300, 250],
          ],
          // [300, 250],
          // [300, 250],
          // [468, 60],
          [336, 280],
          // [[970, 90], [970, 250], [728, 90]],
          [
              [728, 90],
              [970, 250],
              [970, 90],
          ],
          [
              [970, 90],
              [728, 90],
              [970, 250],
          ],
          [300, 250],
          [300, 250],
          [
              [300, 250],
              [300, 600],
          ],
          [
              [300, 600],
              [300, 250],
          ],
          [
              [300, 250],
              [300, 600],
          ],
          [120, 600],
          [120, 600],
          [336, 280],
      ],
      bids: [
          hb_full_common_bidders.concat([
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3796451" },
              },
              //     { bidder: 'openx', params: {unit: '544096391', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //     { bidder: 'ucfunnel', params: { adid : 'ad-34B8DD88EA288796C3E739EB77B4646B'} },
              // // //     { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
              // // //     {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
              //     { bidder: 'sovrn', params: {tagid: '919447'} },
              // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]),
          //  hb_full_common_bidders.concat([
          // //    { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3507450'} },
          // //    { bidder: 'openx', params: {unit: '543981162', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
          // //    { bidder: 'ucfunnel', params: { adid : 'ad-77289B7B3EA7B6DE07DD3478B9BEA9B'} },
          // // //   {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
          // // // //   { bidder: 'sovrn', params: {tagid: '744064'} },
          // // // { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
          // // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          //  ]),
          //  hb_full_common_bidders.concat([
          // //    { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3507450'} },
          // //    { bidder: 'openx', params: {unit: '543981162', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
          // //    { bidder: 'ucfunnel', params: { adid : 'ad-77289B7B3EA7B6DE07DD3478B9BEA9B'} },
          // // //   {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
          // // // //   { bidder: 'sovrn', params: {tagid: '744064'} },
          // // // { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
          // // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          //  ]),
          //  hb_full_common_bidders.concat([
          // //    { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3507450'} },
          // //    { bidder: 'openx', params: {unit: '543981162', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
          // //    { bidder: 'ucfunnel', params: { adid : 'ad-77289B7B3EA7B6DE07DD3478B9BEA9B'} },
          // // //   {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
          // // // //   { bidder: 'sovrn', params: {tagid: '744064'} },
          // // // { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
          // // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          //  ]),
          hb_full_common_bidders.concat([
              // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3507450'} },
              //    { bidder: 'openx', params: {unit: '543981162', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //    { bidder: 'ucfunnel', params: { adid : 'ad-77289B7B3EA7B6DE07DD3478B9BEA9B'} },
              // //   {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
              // // //   { bidder: 'sovrn', params: {tagid: '744064'} },
              // // { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
              // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]),
          //  hb_full_common_bidders.concat([
          //    // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3507450'} },
          // //    { bidder: 'openx', params: {unit: '543981162', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
          // //    { bidder: 'ucfunnel', params: { adid : 'ad-77289B7B3EA7B6DE07DD3478B9BEA9B'} },
          // // //   {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
          // // // //   { bidder: 'sovrn', params: {tagid: '744064'} },
          // // // { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
          // // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          //  ]), //'/21692080761/amb_es_desk_lb_1',
          hb_full_common_bidders.concat([
              // { bidder: 'openx', params: {unit: '543981163', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507451" },
              },
              //    { bidder: 'ucfunnel', params: { adid : 'ad-E2B439297B7DE6EE076A89369AD9E4DA'} },
              // //         {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
              // // //   { bidder: 'sovrn', params: {tagid: '744057'} },
              // // { bidder: "kubient", params: { zoneid: "d67c4840c9efc", server: "kssp.kbntx.ch"} },
              //   { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]), //'/21692080761/amb_es_desk_lb_2',
          hb_full_common_bidders.concat([
              //  {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
              //  { bidder: "kubient", params: { zoneid: "26de462596928", server: "kssp.kbntx.ch"} },
              // { bidder: 'openx', params: {unit: '543981164', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507452" },
              },
              // { bidder: 'ucfunnel', params: { adid : 'ad-77289B7B684632270BDE6DE42B777E36'} },
              // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]), //  '/21692080761/amb_es_desk_lb_3',
          hb_full_common_bidders.concat([
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507453" },
              },
              //    { bidder: 'openx', params: {unit: '543981165', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //    { bidder: 'ucfunnel', params: { adid : 'ad-8A29D8A84EBB4B96F9D6E63644E367E'} },
              // //   { bidder: "kubient", params: { zoneid: "754e9f2f27d1d", server: "kssp.kbntx.ch"} },
              // //   {bidder: 'coinzilla', params: {placementId: '6615d088e603b6be232'} },
              // // //   { bidder: 'sovrn', params: {tagid: '744083'} },
              //   { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]), //  '/21692080761/amb_es_header_desk_v2',
          hb_full_common_bidders.concat([
              //  {bidder: 'coinzilla', params: {placementId: '6615d088e603b6be232'} },
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507454" },
              },
              // { bidder: 'openx', params: {unit: '543981166', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //        { bidder: 'ucfunnel', params: { adid : 'ad-2736B878DBD63D92C82678A3D363B72A'} },
              // // { bidder: "kubient", params: { zoneid: "1b8e22a4698ea", server: "kssp.kbntx.ch"} },
              //   { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
              //   { bidder: 'sovrn', params: {tagid: '744068'} },
              //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi', domain: 'https://prg8.smartadserver.com' } }
          ]), //'/21692080761/amb_es_footer_desk_v2',
          hb_full_common_bidders.concat([
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507455" },
              },
              //    { bidder: 'openx', params: {unit: '543981167', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //    { bidder: 'ucfunnel', params: { adid : 'ad-9A297DADBDA829A2F49E88B3AAAB6E62'} },
              // //   { bidder: "kubient", params: { zoneid: "a695e27607f0b", server: "kssp.kbntx.ch"} },
              // //   {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
              // // //   { bidder: 'sovrn', params: {tagid: '744079'} },
              //     { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '93422', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
              //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
          ]), //'/21692080761/amb_eng_desk_lb_3',
          hb_full_common_bidders.concat([
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507456" },
              },
              //    { bidder: 'openx', params: {unit: '543981168', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //    { bidder: 'ucfunnel', params: { adid : 'ad-AA7B29A9364D679808346728AE47B4DB'} },
              // //   {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
              // // //   { bidder: 'sovrn', params: {tagid: '744058'} },
              // // { bidder: "kubient", params: { zoneid: "9ca7f60b018ca", server: "kssp.kbntx.ch"} },
              //    { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '93422', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]), //    '/21692080761/amb_eng_desk_lb_2',
          hb_full_common_bidders.concat([
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507457" },
              },
              //    { bidder: 'openx', params: {unit: '543981169', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //    { bidder: 'ucfunnel', params: { adid : 'ad-2736B878D24E7BAB0936948368E83B8'} },
              // //   { bidder: "kubient", params: { zoneid: "728eb6f0a4102", server: "kssp.kbntx.ch"} },
              // //   {bidder: 'coinzilla', params: {placementId: '6615d088e603b6be232'} },
              // // //   { bidder: 'sovrn', params: {tagid: '744067'} },
              //    { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '93422', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]), // '/21692080761/amb_eng_header_desk_v2',
          hb_full_common_bidders.concat([
              //   {bidder: 'coinzilla', params: {placementId: '6615d088e603b6be232'} },
              //   { bidder: "kubient", params: { zoneid: "28c8efcc75bcb", server: "kssp.kbntx.ch"} },
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507458" },
              },
              // { bidder: 'openx', params: {unit: '543981170', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              // { bidder: 'ucfunnel', params: { adid : 'ad-2736B878DE329DE7FD3B82D74D9A222'} },
              // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94413', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
              // //   { bidder: 'smartadserver', params: { siteId: '361368', pageId: '1287116', formatId: '93231', domain: 'https://prg8.smartadserver.com' } }
          ]), //    '/21692080761/amb_eng_footer_desk_v2',
          hb_full_common_bidders.concat([
              //       {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507459" },
              },
              //   { bidder: 'openx', params: {unit: '543981171', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //   { bidder: 'ucfunnel', params: { adid : 'ad-47B46E7E8B6E828BC6B79737DD93783'} },
              // // //   { bidder: 'sovrn', params: {tagid: '744079'} },
              // // { bidder: "kubient", params: { zoneid: "7502fa5046e59", server: "kssp.kbntx.ch"} },
              //   { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94413', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
              //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
          ]), ///21692080761/amb_hindi_desk_lb_
          hb_full_common_bidders.concat([
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3522404" },
              },
              //    { bidder: 'openx', params: {unit: '543990264', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //    { bidder: 'ucfunnel', params: { adid : 'ad-E2B43D7A863E332309E68D639A6246E'} },
              // //   { bidder: "kubient", params: { zoneid: "9b094d05b54f3", server: "kssp.kbntx.ch"} },
              // //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
              //   // { bidder: 'sovrn', params: {tagid: '869656'} },
              //     { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
              //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
          ]), ///21692080761/amb_hindi_desk_lb_
      ],
      isAP: [
          true,
          // true,
          // true,
          // true,
          true,
          // true,
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
          "/21928950349,22612899972/bongdaplus.vn_in-article_468x60",
          "/21928950349,22612899972/bongdaplus.vn_in-article_336x280",
          "/21928950349,22612899972/bongdaplus.vn_mb_hot1_336x280",
          "/21928950349,22612899972/bongdaplus.vn_mb_hot2_300x600",
          "/21928950349,22612899972/bongdaplus.vn_mb_center1_336x280",
          "/21928950349,22612899972/bongdaplus.vn_mb_center2_336x280",
          "/21928950349,22612899972/bongdaplus.vn_mb_center3_336x280",
          "/21928950349,22612899972/bongdaplus.vn_mb_ma_336x280",
          "/21928950349,22612899972/bongdaplus.vn_mb_anchor_320x50",
          // "/21928950349,22612899972/bongdaplus.vn_mb_anchor_320x100",
          // '/21928950349,22612899972/bongdaplus.vn_popup_fluid_336x280'
      ],
      adId: [
          "div-gpt-ad-1619183586523-0", // '/22140546871/bongdaplus.vn_in-article_468x60',
            "div-gpt-ad-1619183875165-0", //'/22140546871/bongdaplus.vn_in-article_336x280',
            "div-gpt-ad-1614845286577-0", //'/22140546871/bongdaplus.vn_mb_hot1_336x280',
            "div-gpt-ad-1614845393134-0", //'/22140546871/bongdaplus.vn_mb_hot2_300x600',
            "div-gpt-ad-1614845452435-0", //'/22140546871/bongdaplus.vn_mb_center1_336x280',
            "div-gpt-ad-1614845556049-0", //'/22140546871/bongdaplus.vn_mb_center2_336x280',
            "div-gpt-ad-1614845628694-0", //'/22140546871/bongdaplus.vn_mb_center3_336x280',
            "div-gpt-ad-1614845690965-0", //'/22140546871/bongdaplus.vn_mb_ma_336x280',
            "div-gpt-ad-1614845787563-0", //'/22140546871/bongdaplus.vn_mb_anchor_320x50',
            // "div-gpt-ad-1615775641979-0",  //'/22140546871/bongdaplus.vn_mb_anchor_320x100',
            // 'div-gpt-ad-1624014789114-0',  //  '/22140546871/bongdaplus.vn_popup_fluid_336x280'

          // "div-gpt-ad-1629455549972-0", // '/21928950349,22612899972/bongdaplus.vn_in-article_468x60',
          // "div-gpt-ad-1629455527851-0", //'/21928950349,22612899972/bongdaplus.vn_in-article_336x280',
          // "div-gpt-ad-1629455748915-0", //'/21928950349,22612899972/bongdaplus.vn_mb_hot1_336x280',
          // "div-gpt-ad-1629455769520-0", //'/21928950349,22612899972/bongdaplus.vn_mb_hot2_300x600',
          // "div-gpt-ad-1629455662160-0", //'/21928950349,22612899972/bongdaplus.vn_mb_center1_336x280',
          // "div-gpt-ad-1629455687394-0", //'/21928950349,22612899972/bongdaplus.vn_mb_center2_336x280',
          // "div-gpt-ad-1629455720028-0", //'/21928950349,22612899972/bongdaplus.vn_mb_center3_336x280',
          // "div-gpt-ad-1629455812132-0", //'/21928950349,22612899972/bongdaplus.vn_mb_ma_336x280',
          // "div-gpt-ad-1629455633030-0", //'/21928950349,22612899972/bongdaplus.vn_mb_anchor_320x50',
          // // "div-gpt-ad-1629455598483-0",  //'/21928950349,22612899972/bongdaplus.vn_mb_anchor_320x100',
          // // 'div-gpt-ad-1629457284866-0',  //  '/21928950349,22612899972/bongdaplus.vn_popup_fluid_336x280'
      ],
      sizes: [
          [468, 60],
          [336, 280],
          [
              [300, 250],
              [336, 280],
          ],
          [
              [300, 250],
              [300, 600],
          ],
          [
              [336, 280],
              [300, 250],
          ],
          [
              [300, 250],
              [336, 280],
          ],
          [
              [300, 250],
              [336, 280],
          ],
          [
              [300, 250],
              [336, 280],
          ],
          [320, 50],
          // [300, 100],
          // [
          //     [300, 600],
          //     [300, 250],
          //     [336, 280],
          // ],
      ],
      bids: [
          hb_full_common_bidders.concat([
              // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3507450'} },
              //    { bidder: 'openx', params: {unit: '543981162', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //    { bidder: 'ucfunnel', params: { adid : 'ad-77289B7B3EA7B6DE07DD3478B9BEA9B'} },
              // //   {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
              // // //   { bidder: 'sovrn', params: {tagid: '744064'} },
              // // { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
              // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]),
          hb_full_common_bidders.concat([
              // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3507450'} },
              //    { bidder: 'openx', params: {unit: '543981162', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //    { bidder: 'ucfunnel', params: { adid : 'ad-77289B7B3EA7B6DE07DD3478B9BEA9B'} },
              // //   {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
              // // //   { bidder: 'sovrn', params: {tagid: '744064'} },
              // // { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
              // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]),
          hb_full_common_bidders.concat([
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507460" },
              },
              //   { bidder: 'openx', params: {unit: '543981173', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //   { bidder: 'ucfunnel', params: { adid : 'ad-D2346A2A727E9ADB0D427D33336DB77D'} },
              // //   { bidder: "kubient", params: { zoneid: "4efc33fa24a35", server: "kssp.kbntx.ch"} },
              // //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
              // // //   { bidder: 'sovrn', params: {tagid: '744054'} },
              //   { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '93418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]), //'/21692080761/amb_es_mob_mpu_1',
          hb_full_common_bidders.concat([
              //    { bidder: "kubient", params: { zoneid: "f634ea1907cd4", server: "kssp.kbntx.ch"} },
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507461" },
              },
              //   { bidder: 'openx', params: {unit: '543981174', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //   { bidder: 'ucfunnel', params: { adid : 'ad-9A297DAD869ADA6404ABE4D787B73EA9'} },
              // //    {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
              // // //   { bidder: 'sovrn', params: {tagid: '744064'} },
              //   { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '93422', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]), //  '/21692080761/amb_es_mob_mpu_2',
          hb_full_common_bidders.concat([
              //    { bidder: "kubient", params: { zoneid: "26b5b52450e2a", server: "kssp.kbntx.ch"} },
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507462" },
              },
              //   { bidder: 'openx', params: {unit: '543981175', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //   { bidder: 'ucfunnel', params: { adid : 'ad-34B8ED4D3EEDA8321D63A6763D7A36B'} },
              // //     {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
              // // //   { bidder: 'sovrn', params: {tagid: '744057'} },
              // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '93418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]), //    '/21692080761/amb_es_mob_mpu_3',
          hb_full_common_bidders.concat([
              // { bidder: "kubient", params: { zoneid: "e2a8aab8dd3e4", server: "kssp.kbntx.ch"} },
              //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507463" },
              },
              //  { bidder: 'openx', params: {unit: '543981176', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //  { bidder: 'ucfunnel', params: { adid : 'ad-77289B7BE438B77602AD8D7D6687D92'} },
              // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '93418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]), //    '/21692080761/amb_es_header_mob_v2',
          hb_full_common_bidders.concat([
              //    { bidder: "kubient", params: { zoneid: "a87b01b23f89a", server: "kssp.kbntx.ch"} },
              //    {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507464" },
              },
              // { bidder: 'openx', params: {unit: '543981178', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              // { bidder: 'ucfunnel', params: { adid : 'ad-2736B878EE74DEE8F823ED64887B4926'} },
              // // //   { bidder: 'sovrn', params: {tagid: '744083'} },
              // // { bidder: 'smartadserver', params: { siteId: '369187', pageId: '1301293', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
              //  { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '93418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]), //    '/21692080761/amb_es_footer_mob_v2',
          hb_full_common_bidders.concat([
              //    { bidder: "kubient", params: { zoneid: "2c0e46cd5a301", server: "kssp.kbntx.ch"} },
              //    {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507465" },
              },
              //   { bidder: 'openx', params: {unit: '543981179', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //   { bidder: 'ucfunnel', params: { adid : 'ad-8A29D8A722EE72EBFBA7EE4D2224373E'} },
              // // //   { bidder: 'sovrn', params: {tagid: '744068'} },
              //    { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '93418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
              //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi', domain: 'https://prg8.smartadserver.com' } }
          ]), //    '21692080761/amb_eng_mob_mpu_3',
          hb_full_common_bidders.concat([
              {
                  bidder: "pubmatic",
                  params: { publisherId: "159448", adSlot: "3507466" },
              },
              // { bidder: 'openx', params: {unit: '543981180', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              // { bidder: 'ucfunnel', params: { adid : 'ad-2736B8743748ADDA08644EB83D633678'} },
              //   { bidder: "kubient", params: { zoneid: "9b094d05b54f3", server: "kssp.kbntx.ch"} },
              //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
              // //   { bidder: 'sovrn', params: {tagid: '744079'} },
              // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '93418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
              //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
          ]), //  /21928950349,22612899972/bongdaplus.vn_mb_anchor_320x50',,
          //  hb_full_common_bidders.concat([
          //    { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3522364'} },
          // //    { bidder: 'openx', params: {unit: '543993938', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
          // //    // { bidder: 'ucfunnel', params: { adid : 'ad-2736B8743748ADDA08644EB83D633678'} },
          // // //   { bidder: "kubient", params: { zoneid: "9b094d05b54f3", server: "kssp.kbntx.ch"} },
          // // //   {bidder: 'coinzilla', params: {placementId: '9095d19f7adaf0a6874'} },
          // //   // { bidder: 'sovrn', params: {tagid: '872968'} },
          // //     { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '93416', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          // //   { bidder: 'dailyhunt', params: { placement_id: 63, publisher_id: 4, partner_name: 'sakshi' } }
          //  ]),
          // hb_full_common_bidders.concat([
          //     {
          //         bidder: "pubmatic",
          //         params: { publisherId: "159448", adSlot: "3910487" },
          //     },
          //     //    { bidder: 'openx', params: {unit: '543981162', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
          //     //    { bidder: 'ucfunnel', params: { adid : 'ad-77289B7B3EA7B6DE07DD3478B9BEA9B'} },
          //     // //   {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
          //     // // //   { bidder: 'sovrn', params: {tagid: '744064'} },
          //     // // { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
          //     // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          // ]),
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
          // true,
          // true,
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
          // '/22057354005/bongdaplus_native_fluid',
          // '/21692080761/amb_eng_header_desk_v2'  //  { bidder: "kubient", params: { zoneid: "728eb6f0a4102", server: "kssp.kbntx.ch"} },
      ],
  };
  var mappings_extra_units_config_mobile = {
      adUnitNames: [
          // '/22057354005/bongdaplus_native_fluid', //  { bidder: "kubient", params: { zoneid: "07971f0b93433", server: "kssp.kbntx.ch"} },
      ],
  };
  var mappings_extra_units_config_both = {
      adUnitNames: [
          // '/22057354005/bongdaplus_native_fluid', //  { bidder: "kubient", params: { zoneid: "a8d023686c41b", server: "kssp.kbntx.ch"} },
      ],
  };

  var mappings_extra_units_config = {
      adUnitNames: [
        '/22057354005/bongdaplus_native_fluid',
      ],
  };

  var mappings_extra_units = {
    slots: [],
    adUnitNames:[]
  };

  var mappings_final_refresh_list = {
      adUnitNames: [
        "/21928950349,22612899972/bongdaplus.vn_popup_fluid_336x280",
        // '/21928950349,22612899972/bongdaplus.vn_PC_bottom-article_300x250_1',
        // '/21928950349,22612899972/bongdaplus.vn_PC_bottom-article_300x250_2',
        // '/21928950349,22612899972/bongdaplus.vn_in-article_468x60',
        "/21928950349,22612899972/bongdaplus.vn_in-article_336x280",
        // '/21928950349,22612899972/bongdaplus.vn_pc_header_970x250',
        "/21928950349,22612899972/bongdaplus.vn_pc_center1_970x250",
        "/21928950349,22612899972/bongdaplus.vn_pc_center2_970x250",
        "/21928950349,22612899972/bongdaplus.vn_pc_R1_300x250",
        "/21928950349,22612899972/bongdaplus.vn_pc_R2_300x250",
        "/21928950349,22612899972/bongdaplus.vn_pc_R3_300x600",
        "/21928950349,22612899972/bongdaplus.vn_pc_R4_300x600",
        "/21928950349,22612899972/bongdaplus.vn_pc_R5_300x600",
        "/21928950349,22612899972/bongdaplus.vn_pc_fl_120x6000",
        "/21928950349,22612899972/bongdaplus.vn_pc_fr_120x600",
        "/21928950349,22612899972/bongdaplus.vn_pc_centerarticlepc_336x280",
        "/21928950349,22612899972/bongdaplus.vn_in-article_468x60",
        "/21928950349,22612899972/bongdaplus.vn_in-article_336x280",
        "/21928950349,22612899972/bongdaplus.vn_mb_hot1_336x280",
        "/21928950349,22612899972/bongdaplus.vn_mb_hot2_300x600",
        "/21928950349,22612899972/bongdaplus.vn_mb_center1_336x280",
        "/21928950349,22612899972/bongdaplus.vn_mb_center2_336x280",
        "/21928950349,22612899972/bongdaplus.vn_mb_center3_336x280",
        "/21928950349,22612899972/bongdaplus.vn_mb_ma_336x280",
        "/21928950349,22612899972/bongdaplus.vn_mb_anchor_320x50",
        // "/21928950349,22612899972/bongdaplus.vn_mb_anchor_320x100",
        // '/21928950349,22612899972/bongdaplus.vn_popup_fluid_336x280'
      ],
  };

  var mappings_final_refresh = {
      adUnitNames: [],
      adSlots: [],
  };

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
      mappings_full_hb_config.adUnitNames = mappings_full_hb_config_desktop.adUnitNames.concat(mappings_full_hb_config_both.adUnitNames);
      mappings_full_hb_config.bids = mappings_full_hb_config_desktop.bids.concat(mappings_full_hb_config_both.bids);
      mappings_full_hb_config.isAP = mappings_full_hb_config_desktop.isAP.concat(mappings_full_hb_config_both.isAP);
      mappings_full_hb_config.adId = mappings_full_hb_config_desktop.adId;
      mappings_full_hb_config.sizes = mappings_full_hb_config_desktop.sizes;
      // mappings_extra_units_config.adUnitNames = mappings_extra_units_config_desktop.adUnitNames.concat(mappings_extra_units_config_both.adUnitNames);
  } else {
      mappings_full_hb_config.adUnitNames = mappings_full_hb_config_mobile.adUnitNames.concat(
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
      // mappings_extra_units_config.adUnitNames = mappings_extra_units_config_mobile.adUnitNames.concat(
      //         mappings_extra_units_config_both.adUnitNames
      //     );
  }

  function checkHBUnits() {
      if (mobileCheck()) {
        // if(!((window.location.href.split('https://bongdaplus.vn/ngoai-hang-anh/').length == 2) || (window.location.href.split('https://bongdaplus.vn/bong-da-anh/').length == 2) || (window.location.href.split('https://bongdaplus.vn/fa-cup').length == 2))){

        if (!(window.location.href == "https://bongdaplus.vn/")) {
          addNewsBotAd();
        }
      }
      // callMapUnits();
      changeConfigToHB();
      setTimeout(function(){ callMapUnits(); }, 500);
      // setTimeout(function() {
      //     initAdserver_hb_full();
      // }, FAILSAFE_TIMEOUT);
  }

  function callFullHBAds(adCode, ub_slot) {
      fillRefreshMap();
      ubpbjs.que.push(function () {
          ubpbjs.requestBids({
              timeout: PREBID_TIMEOUT,
              labels: [GEO_CODE],
              adUnits: adUnits_full_hb,
              adUnitCodes: adCode,
              bidsBackHandler: function () {
                  ubpbjs.initAdserverSetHB = true;
                  googletag.cmd.push(function () {
                      ubpbjs.que.push(function () {
                          ubpbjs.setTargetingForGPTAsync();
                          // requestManager.prebid = true;
                          // biddersBack();
                          googletag.cmd.push(function () {
                              googletag.pubads().refresh(mapping_full_hb.slots);
                              // googletag.pubads().refresh(mappings_extra_units.slots);
                          });
                          // googletag.pubads().refresh(ub_slot);
                      });
                  });
              },
          });
      });
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
             if (((document.getElementById(mappings_full_hb_config.adId[i])).id == "AR05") && (window.location.href == "https://bongdaplus.vn/")){
                 continue;
             }
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
          // else if(mappings_extra_units_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())){
          //   mappings_extra_units.slots.push(x[i]);
          // }
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

  var ub_divsToCheck = {
      "div-gpt-ad-1629980995009-0": false,
  };

  var ub_interval_div_check = setInterval(() => {
          flag = false;
          checkFlag = false;
          for (x in ub_divsToCheck) {
              if (document.getElementById(x) !== null) {
                  ub_divsToCheck[x] = true;
                  checkFlag = true;
              }
          }
          for (x in ub_divsToCheck) {
              if (ub_divsToCheck[x] == false) {
                  flag = true;
              }
          }
          if (!flag && checkFlag) {
          if(document.getElementById('div-gpt-ad-1629980995009-0')) {
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
            clearInterval(ub_interval_div_check);
          }
  }, 500);
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
                  var el = document.getElementById(event.slot.getSlotId().getDomId());
                  var nodes = el.childNodes[0].childNodes;
                  var ubifame = nodes.length && nodes[0].nodeName.toLowerCase();
                  if (ubifame == 'iframe') {
                  if (el != null) {
                      // var temp = setInterval(function () {
                          if (isInViewSpace(el)) {
                              // timer -= 1;
                              // if (timer <= 0) {
                                if(mappings_final_refresh_list["adUnitNames"].filter(function(val){return val == event.slot.getSlotId().getAdUnitPath()})){
                                  mappings_final_refresh.adSlots.push(event.slot);
                                  mappings_final_refresh.adUnitNames.push(event.slot.getSlotId().getAdUnitPath());
                                }
                                  // console.log(mappings_final_refresh.adUnitNames);
                                  // refreshBid(mappings_final_refresh.adSlots, mappings_final_refresh.adUnitNames);
                                  // clearInterval(temp);
                              // }
                          }
                      // }, 1000);
                  }
                }
              });
      });

      setInterval(function() {
        if (!mappings_final_refresh.adSlots == '') {
          refreshBid(mappings_final_refresh.adSlots, mappings_final_refresh.adUnitNames);
        }
      }, REFRESH_TIMEOUT);
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
    // console.log(ub_slot,adCode);
    // if(adCode == '/21928950349,22612899972/bongdaplus.vn_popup_fluid_336x280' || '/22057354005/bongdaplus_native_fluid'){}
    // else {
      // console.log('test');
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
    // }
  }

  if (mobileCheck()) {
      // if (!(window.location.href == "https://bongdaplus.vn/")) {
          // if(!(bong_vietnamcatg)){
          googletag.cmd.push(function () {
              googletag.pubads().addEventListener("slotRenderEnded", function (event) {
                    if (event.slot.getAdUnitPath() ==="/21928950349,22612899972/bongdaplus.vn_mb_anchor_320x50"){
                      var nodes_anchr = document.getElementById("div-gpt-ad-1614845787563-0").childNodes[0].childNodes;
                      if (nodes_anchr.length && nodes_anchr[0].nodeName.toLowerCase() == "iframe") {
                          document.getElementById("close_ub-sticky-ad").style.display = "block";
                      }
                    }
             });
          });
        // }
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
