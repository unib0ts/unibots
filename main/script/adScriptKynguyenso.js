  // checkHBUnits();

  mybotGACode = "G-F3FDR2LF9M";
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
      ".ub-sticky-ad-container{width:100%;float:left;text-align:center;background:#fff;position:fixed;bottom:0;left:0;box-shadow:0 -3px 3px rgba(0,0,0,.2)!important;z-index:99}.ub-sticky-ad{width:100%;z-index:100;padding-top:4px}.close_ub-sticky-ad{display:none;position:absolute;top:-20px;background:#fff;color:#000;left:0px;pointer-events:all;height:20px;z-index:100;width:30px;font-size:26px;line-height:23px;box-shadow:0 -3px 3px rgba(0,0,0,.2)!important;border-radius:2px 10px 0 0}.close_ub-sticky-addesk{display:block;top: -25px;right:0px;width:18px;position:absolute;pointer-events:all;cursor:pointer;z-index:2147483647;}.ub-sticky-ad-containerdesk{position:fixed;width:auto!important;bottom:0;right:0;z-index:2147483646}.ub-left-ad{width: auto !important;position: fixed;top: 150px;left: 0px;z-index: 100;}.ub-right-ad{width: auto !important;position: fixed;top: 120px;right: 0px;z-index: 2147483646;}  .ub-popup-ad-container{width:100%;top:50%;left:50%;position:fixed;display:flex;pointer-events:auto;align-items:center;transform:translate(-50%,-50%);} #div-gpt-ad-1629457284866-0{ max-width: unset !important;padding-left: unset !important; margin-left: unset !important; margin-right:unset !important;} .ub_AdsInnov_Container_Parallax{background-color:#fff;width:100%;text-align:center;height:600px;position:relative;margin:40px auto}.ub_AdsInnov_Container_Parallax_one{width:100%;height:100%;top:20px;cursor:pointer;position:absolute;margin:auto;z-index:auto;clip:rect(0,auto,auto,0)}.ub_AdsInnov_Container_Parallax_two{vertical-align:bottom;margin:0 auto;position:fixed;top:0;left:0;width:100%;height:100%;transform:matrix(1,0,0,1,0,0);overflow:hidden}";

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

  myub_obj = document.createElement("div");
  myub_obj.id = "div-ub-kynguyenso";
  ub_plyrscript = document.createElement("script");
  ub_plyerinlineScript = document.createTextNode("window.unibots = window.unibots || { cmd: [] }; unibots.cmd.push(function(){unibotsPlayer('kynguyenso');})");
  ub_plyrscript.appendChild(ub_plyerinlineScript);
  myub_obj.appendChild(ub_plyrscript);
  document.querySelector("body").appendChild(myub_obj);

  if (!mobileCheck() && (window.screen.availWidth > 1024)) {
          // z = document.createElement("div");
          // z.id = "div-gpt-ad-1637223892866-0";
          // z.className = "ub-left-ad";
          // x = document.querySelector("body");
          // parentWidth = x.offsetWidth;
          // child = document.querySelector(".container");
          // childWidth = child.offsetWidth;
          // space = (parentWidth - childWidth) / 2;
          // if (space > 120) {
          //     document.querySelector("body").appendChild(z);
          // }

         if (document.querySelector('#sidebar_top')) {
           z1 = document.createElement("div");
           z1.id = "div-gpt-ad-1637223892866-0";
           z1.style = "min-width: 160px; min-height: 600px; padding: 20px 0px;";
           x1 = document.querySelector('#sidebar_top');
           x1.appendChild(z1);
         }

         z4 = document.createElement("div");
         z4.id = "ub-sticky-ad-containerdesk";
         z4.className = "ub-sticky-ad-containerdesk";
         z4.innerHTML = '<span class="close_ub-sticky-addesk" id="close_ub-sticky-addesk" onclick="mybotubstickyadDesk()"><img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/close.svg"></span><div class="ub-sticky-adDesk" id="div-gpt-ad-1637223813283-0"></div';
         document.querySelector("body").appendChild(z4);

          if (document.querySelector('.sidebar')) {
            z1 = document.createElement("div");
            z1.id = "div-gpt-ad-1637223843374-0";
            z1.style = "min-width: 300px; min-height: 250px; padding: 20px 0px;";
            x1 = document.querySelector('.sidebar');
            x1.appendChild(z1);

            z2 = document.createElement("div");
            z2.id = "div-gpt-ad-1637223872964-0";
            z2.style = "min-width: 300px; min-height: 250px;padding: 20px 0px;";
            x1 = document.querySelector('.sidebar');
            x1.appendChild(z2);

            z3 = document.createElement("div");
            z3.id = "div-gpt-ad-1637223913329-0";
            z3.style = "min-width: 300px; min-height: 600px;padding: 20px 0px;";
            x1 = document.querySelector('.sidebar');
            x1.appendChild(z3);
          }
  } else {
          z1 = document.createElement("div");
          z1.id = "ub-sticky-ad-container";
          z1.className = "ub-sticky-ad-container";
          z1.innerHTML =
              '<span class="close_ub-sticky-ad" id="close_ub-sticky-ad" onclick="mybotubstickyad()">\u0078</span><div class="ub-sticky-ad" id="div-gpt-ad-1637224122961-0"></div>';
          x1 = document.querySelector("body");
          x1.appendChild(z1);


          z2 = document.createElement("div");
          z2.id = "div-gpt-ad-1637224185002-0";
          z2.style = "min-width: 300px; min-height: 250px";
          // if (document.querySelector('article')) {
          //   x1 = document.querySelectorAll('article');
          //   if (x1[2]) {
          //     x1[2].appendChild(z3);
          //   }
          // }
          if (document.querySelector('.article-content')) {
            x1 = document.querySelector('.article-content');
            x1.appendChild(z2);
          }

          ub_z1 = document.createElement("div");
          ub_z1.className = "ub_AdsInnov_Container_Parallax";
          ub_z1.id = "ub_Container_Parallax";
          ub_z1.style.display = "none";

          ub_z2 = document.createElement("div");
          ub_z2.className = "ub_AdsInnov_Container_Parallax_one";
          ub_z1.appendChild(ub_z2);

          ub_z3 = document.createElement("div");
          ub_z3.className = "ub_AdsInnov_Container_Parallax_two";
          ub_z2.appendChild(ub_z3);

          z3 = document.createElement("div");
          z3.id = "div-gpt-ad-1637224154071-0";
          z3.style = "min-width: 300px; min-height: 600px";
          ub_z3.appendChild(z3);
          if (document.querySelector('.slist-01')) {
            x1 = document.querySelectorAll('.slist-01');
            x1[2].appendChild(ub_z1);
          }
          else if (document.querySelector('article')) {
            x1 = document.querySelector('article');
            x1.insertBefore(ub_z1, x1.childNodes[0]);
          }
          // if (document.querySelector('.article-content')) {
          //   x1 = document.querySelector('.article-content');
          //   x1.appendChild(z3);
          // }
  }

  // function mybotubPopadcls() {
  //     document.getElementById("ub-popup-ad-container").style.display = "none";
  // }

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
  s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
  s1.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(s1);

  var PREBID_TIMEOUT = 2000;
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
              publisherDomain: "https://kynguyenso.plo.vn/",
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
      { bidder: "appnexus", params: { placementId: "23545198" } }, /* one placementId for all sizes  my appnexus bidder */,
      { bidder: 'oftmedia', params: { placementId: '23740962' } },
      { bidder: '33across', params: { siteId : 'cI4Kuiu30r7kDFrkHcnlxd', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
      // // { bidder: 'emx_digital', params: { tagid: '112606' } }, /* sizeless */
      // // // { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
      { bidder: 'nobid', params: { siteId: '22656256385' } },
      // { bidder: 'adkernel', params: {zoneId: '152650', host: 'cpm.fmlabsonline.com'} },
      // { bidder: 'openx', params: {unit: '541046310', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
      // // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
      // { bidder: 'criteo', params: {networkId: '10542'} },
      // { bidder: 'criteointl', params: {networkId: '10545'} },
      { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
      { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
  ];

  var mappings_full_hb_config_desktop = {
      adUnitNames: [
          "/21928950349,22547024640/kynguyenso.plo.vn_pcballoon_300x250",
          "/21928950349,22547024640/kynguyenso.plo.vn_pchotbannerR1_300x250",
          "/21928950349,22547024640/kynguyenso.plo.vn_pchotbannerR2_300x250",
          "/21928950349,22547024640/kynguyenso.plo.vn_pcleftbanner_160x600",
          "/21928950349,22547024640/kynguyenso.plo.vn_pcstickyhotbannerR3_300x600",
      ],
      adId: [
            "div-gpt-ad-1637223813283-0", //'/22140546871/bongdaplus.vn_pc_balloon_hb_300x600'
            "div-gpt-ad-1637223843374-0", //'/22140546871/bongdaplus.vn_in-article_336x280',
            "div-gpt-ad-1637223872964-0", //'/22140546871/bongdaplus.vn_pc_center1_970x250',
            "div-gpt-ad-1637223892866-0", //'/22140546871/bongdaplus.vn_pc_center2_970x250',
            "div-gpt-ad-1637223913329-0", //'/22140546871/bongdaplus.vn_pc_fl_120x600',
      ],
      sizes: [
          [
              [336, 280],
              [300, 250],
          ],
          [300, 250],
          [300, 250],
          [160, 600],
          [300, 600],
      ],
      bids: [
          hb_full_common_bidders.concat([
            //   { bidder: "pubmatic", params: { publisherId: "159448", adSlot: "4146945" } },
            //   // { bidder: 'openx', params: {unit: '544096391', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            //       { bidder: 'ucfunnel', params: { adid : 'ad-34B872DEB9762BEDC3B84ABDB68BAB8E'} },
            //   // // // //     { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
            //   // // // //     {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
            //       { bidder: 'sovrn', params: {tagid: '982601'} },
              // // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]),
          hb_full_common_bidders.concat([
            //   { bidder: "pubmatic", params: { publisherId: "159448", adSlot: "4146946" } },
            //   // { bidder: 'openx', params: {unit: '544096391', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            //       { bidder: 'ucfunnel', params: { adid : 'ad-9A29B4D72D63E4A3C79DEB3833BD23A'} },
            //   // // // //     { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
            //   // // // //     {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
            //       { bidder: 'sovrn', params: {tagid: '982606'} },
              // // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]),
          hb_full_common_bidders.concat([
            //   { bidder: "pubmatic", params: { publisherId: "159448", adSlot: "4146947" } },
            //   // { bidder: 'openx', params: {unit: '544096391', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            //       { bidder: 'ucfunnel', params: { adid : 'ad-8A294B8D28733AEAF3387D38486326A'} },
            //   // // // //     { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
            //   // // // //     {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
            //       { bidder: 'sovrn', params: {tagid: '982608'} },
            //   // // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]),
          hb_full_common_bidders.concat([
            //   { bidder: "pubmatic", params: { publisherId: "159448", adSlot: "4146948" } },
            //   // { bidder: 'openx', params: {unit: '544096391', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            //       { bidder: 'ucfunnel', params: { adid : 'ad-2736D28B34667ED6C87BA687EDD8228E'} },
            //   // // // //     { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
            //   // // // //     {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
            //       { bidder: 'sovrn', params: {tagid: '982617'} },
            //   // // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]),
          hb_full_common_bidders.concat([
            //   { bidder: "pubmatic", params: { publisherId: "159448", adSlot: "4146949" } },
            //   // { bidder: 'openx', params: {unit: '544096391', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            //       { bidder: 'ucfunnel', params: { adid : 'ad-8A294B8D2783A4E8C37839887384E26'} },
            //   // // // //     { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
            //   // // // //     {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
            //       { bidder: 'sovrn', params: {tagid: '982610'} },
              // // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]),
      ],
      isAP: [
          false,
          false,
          false,
          false,
          false,
      ],
  };
  var mappings_full_hb_config_mobile = {
      adUnitNames: [
          "/21928950349,22547024640/kynguyenso.plo.vn_mb_anchor_320x50",
          "/21928950349,22547024640/kynguyenso.plo.vn_mb_inpage_300x600",
          "/21928950349,22547024640/kynguyenso.plo.vn_mb_undersrticle_300x250",
      ],
      adId: [
          "div-gpt-ad-1637224122961-0", // '/22140546871/bongdaplus.vn_in-article_468x60',
          "div-gpt-ad-1637224154071-0", //'/22140546871/bongdaplus.vn_in-article_336x280',
          "div-gpt-ad-1637224185002-0", //'/22140546871/bongdaplus.vn_mb_hot1_336x280',
      ],
      sizes: [
          [320, 50],
          [300, 600],
          [
            [300, 250],
            [336, 280],
          ],
      ],
      bids: [
          hb_full_common_bidders.concat([
            //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4146950'} },
            //      // { bidder: 'openx', params: {unit: '545727969', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            //      { bidder: 'ucfunnel', params: { adid : 'ad-34B872DEB2BE9B890DD2BBED3E87A2B'} },
            //   // //   {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
            //     { bidder: 'sovrn', params: {tagid: '982611'} },
            //   // // { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
              // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]),
          hb_full_common_bidders.concat([
            //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4146951'} },
            //      // { bidder: 'openx', params: {unit: '545727969', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            //      { bidder: 'ucfunnel', params: { adid : 'ad-BE78BD927D28382A18D4293B248E769'} },
            //   // //   {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
            //     { bidder: 'sovrn', params: {tagid: '982612'} },
            //   // // { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
              // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]),
          hb_full_common_bidders.concat([
            //   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '4146952'} },
            //      // { bidder: 'openx', params: {unit: '545727969', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            //      { bidder: 'ucfunnel', params: { adid : 'ad-8A294B8D2BBB43AA1B272298E7E42EB3'} },
            //   // //   {bidder: 'coinzilla', params: {placementId: '23945aaa6cfc06141'} },
            //     { bidder: 'sovrn', params: {tagid: '982613'} },
              // // { bidder: "kubient", params: { zoneid: "0cef49235ab77", server: "kssp.kbntx.ch"} },
              // { bidder: 'smartadserver', params: { siteId: '399739', pageId: '1361921', formatId: '94418', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
          ]),
      ],
      isAP: [
          false,
          false,
          false,
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
          // '/21928950349,22612899972/bongdaplus_native_fluid',
          // '/21692080761/amb_eng_header_desk_v2'  //  { bidder: "kubient", params: { zoneid: "728eb6f0a4102", server: "kssp.kbntx.ch"} },
      ],
  };
  var mappings_extra_units_config_mobile = {
      adUnitNames: [
          // '/21928950349,22612899972/bongdaplus_native_fluid', //  { bidder: "kubient", params: { zoneid: "07971f0b93433", server: "kssp.kbntx.ch"} },
      ],
  };
  var mappings_extra_units_config_both = {
      adUnitNames: [
          // '/21928950349,22612899972/bongdaplus_native_fluid', //  { bidder: "kubient", params: { zoneid: "a8d023686c41b", server: "kssp.kbntx.ch"} },
      ],
  };

  var mappings_extra_units_config = {
      adUnitNames: [],
  };

  var mappings_extra_units = {
    slots: [],
    adUnitNames:[]
  };

  var mappings_final_refresh_list = {
      adUnitNames: [],
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

  // function checkHBUnits() {
      // if (mobileCheck()) {
      // //   // if(!((window.location.href.split('https://bongdaplus.vn/ngoai-hang-anh/').length == 2) || (window.location.href.split('https://bongdaplus.vn/bong-da-anh/').length == 2) || (window.location.href.split('https://bongdaplus.vn/fa-cup').length == 2))){
      // //
      //     if ((window.location.href == "https://bongdaplus.vn/")) {
      //     addNewsBotAd();
      //   }
      // }
      callMapUnits();
      // changeConfigToHB();
      // setTimeout(function(){ callMapUnits(); }, 500);
      // setTimeout(function() {
      //     initAdserver_hb_full();
      // }, FAILSAFE_TIMEOUT);
  // }

  function callFullHBAds(adCode, ub_slot) {
      fillRefreshMap();
      ubpbjs.que.push(function () {
          ubpbjs.requestBids({
              timeout: PREBID_TIMEOUT,
              labels: [GEO_CODE],
              adUnits: adUnits_full_hb,
              adUnitCodes: adCode,
              bidsBackHandler: function (bids = {}) {
                // if (ubpbjs.initAdserverSetHB) return;
                ubpbjs.initAdserverSetHB = true;
                  googletag.cmd.push(function () {
                      ubpbjs.que.push(function () {
                          ubpbjs.setTargetingForGPTAsync();
                          // requestManager.prebid = true;
                          // biddersBack();
                          // googletag.cmd.push(function () {
                              googletag.pubads().refresh(mapping_full_hb.slots);
                              // googletag.pubads().refresh(mappings_extra_units.slots);
                          // });
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

              if(mappings_full_hb_config.isAP[i]){
                apSlotTemp = {
                  slotID: mappings_full_hb_config.adId[i],
                  slotName: mappings_full_hb_config.adUnitNames[i],
                  sizes: mappings_full_hb_config.sizes[i]
                }
                apSlots.push(apSlotTemp);
              }
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

  // var ub_divsToCheck = {
  //     "div-gpt-ad-1634020097213-0": false,
  // };
  //
  // var ub_interval_div_check = setInterval(() => {
  //         flag = false;
  //         checkFlag = false;
  //         for (x in ub_divsToCheck) {
  //             if (document.getElementById(x) !== null) {
  //                 ub_divsToCheck[x] = true;
  //                 checkFlag = true;
  //             }
  //         }
  //         for (x in ub_divsToCheck) {
  //             if (ub_divsToCheck[x] == false) {
  //                 flag = true;
  //             }
  //         }
  //         if (!flag && checkFlag) {
  //         if(document.getElementById('div-gpt-ad-1634020097213-0')) {
  //         x_ub = googletag.pubads().getSlots();
  //         x_ublen = x_ub.length;
  //           for (var j = 0; j < x_ublen; j++) {
  //              if(mappings_extra_units_config.adUnitNames.includes(x_ub[j].getSlotId().getAdUnitPath())){
  //                mappings_extra_units.slots.push(x_ub[j]);
  //                mappings_extra_units.adUnitNames.push(x_ub[j]);
  //              }
  //           }
  //           callExtraHBAds(mappings_extra_units.adUnitNames, mappings_extra_units.slots)
  //         }
  //           clearInterval(ub_interval_div_check);
  //         }
  // }, 500);
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
                          // if (isInViewSpace(el)) {
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
                          // }
                      // }, 1000);
                  }
                }
              });
      });

      setInterval(function() {
        if (!(mappings_final_refresh.adSlots == '')) {
          refreshBid(mappings_final_refresh.adSlots, mappings_final_refresh.adUnitNames);
        }
      }, REFRESH_TIMEOUT);
  }

  // function callExtraHBAds(adCode, ub_slot){
  //   ubpbjs.que.push(function(){
  //     ubpbjs.requestBids({
  //       timeout: PREBID_TIMEOUT,
  //       // adUnits: adUnits_full_hb,
  //       adUnitCodes: adCode,
  //       bidsBackHandler: function() {
  //         ubpbjs.initAdserverSetHB = true;
  //         googletag.cmd.push(function() {
  //           ubpbjs.que.push(function() {
  //               ubpbjs.setTargetingForGPTAsync();
  //               // requestManager.prebid = true;
  //               // biddersBack();
  //               googletag.pubads().refresh(ub_slot);
  //           });
  //         });
  //       }
  //     });
  //   });
  // }

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
                    });
                  });
              },
          });
      });
  }

  if (mobileCheck()) {
      googletag.cmd.push(function () {
          googletag.pubads().addEventListener("slotRenderEnded", function (event) {
                if (event.slot.getAdUnitPath() ==="/22082859479,22547024640/kynguyenso.plo.vn_mb_anchor_320x50"){
                  var nodes_anchr = document.getElementById("div-gpt-ad-1637224122961-0").childNodes[0].childNodes;
                  if (nodes_anchr.length && nodes_anchr[0].nodeName.toLowerCase() == "iframe") {
                      document.getElementById("close_ub-sticky-ad").style.display = "block";
                  }
                }
                if (event.slot.getAdUnitPath() ==="/22082859479,22547024640/kynguyenso.plo.vn_mb_inpage_300x600"){
                  var nodes_parallax = document.getElementById("div-gpt-ad-1637224154071-0").childNodes[0].childNodes;
                  if (nodes_parallax.length && nodes_parallax[0].nodeName.toLowerCase() == "iframe") {
                      document.getElementById("ub_Container_Parallax").style.display = "block";
                  }
                }
         });
      });
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
