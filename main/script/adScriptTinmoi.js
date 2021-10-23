  var mybotstyleSheet =".close_ub-sticky-addesk{display:block;top: -25px;right:0px;width:18px;position:absolute;pointer-events:all;cursor:pointer;z-index:2147483647;}.ub-sticky-ad-containerdesk{position:fixed;width:auto!important;bottom:0;right:0;z-index:2147483646}.ub-left-ad{width: auto !important;position: fixed;top: 120px;left: 0px;z-index: 100;}.ub-right-ad{width: auto !important;position: fixed;top: 120px;right: 0px;z-index: 2147483646;}  .ub-popup-ad-container{width:100%;top:50%;left:50%;position:fixed;display:flex;pointer-events:auto;align-items:center;transform:translate(-50%,-50%);}";

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
          z1 = document.createElement("div");
          z1.id = "ub-sticky-ad-containerdesk";
          z1.className = "ub-sticky-ad-containerdesk";
          z1.innerHTML =
              '<span class="close_ub-sticky-addesk" id="close_ub-sticky-addesk" onclick="mybotubstickyadDesk()"><img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/close.svg"></span><div class="ub-sticky-adDesk" id="div-gpt-ad-1631605123353-0"></div';
          x1 = document.querySelector("body");
          x1.appendChild(z1);
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
              publisherDomain: "https://tinmoi.vn/",
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

  var hb_full_common_bidders = [
      // {bidder: "appnexus",params: { placementId: "21146574" },} /* one placementId for all sizes  my appnexus bidder */,
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
          "/22126273586/tinmoi.vn_hb_300x250",
      ],
      adId: [
            "div-gpt-ad-1631605123353-0", //'/22126273586/tinmoi.vn_hb_300x250'
      ],
      sizes: [
          [[336, 280], [300, 250]],
      ],
      bids: [
          hb_full_common_bidders.concat([
              // {
              //     bidder: "pubmatic",
              //     params: { publisherId: "159448", adSlot: "3796451" },
              // },
              //     { bidder: 'openx', params: {unit: '544096391', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
              //     { bidder: 'ucfunnel', params: { adid : 'ad-34B8DD88EA288796C3E739EB77B4646B'} },
              // // //     { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
              // // //     {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
              //     { bidder: 'sovrn', params: {tagid: '919447'} },
              // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]),
      ],
      isAP: [
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
      ],
  };

  var mappings_extra_units = {
    slots: [],
    adUnitNames:[]
  };

  var mappings_final_refresh_list = {
      adUnitNames: [
        "/22126273586/tinmoi.vn_hb_300x250",
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
          });
      });
  }

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
  }

  setInterval(function() {
    if (!mappings_final_refresh.adSlots == '') {
      refreshBid(mappings_final_refresh.adSlots, mappings_final_refresh.adUnitNames);
    }
  }, REFRESH_TIMEOUT);
  
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
    // if(adCode == '/22057354005/bongdaplus.vn_popup_fluid_336x280' || '/22057354005/bongdaplus_native_fluid'){}
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


 function mybotubstickyadDesk() {
        document.getElementById("ub-sticky-ad-containerdesk").style.display = "none";
    }

  if (!mobileCheck()) {
      callMapUnits();
  }
