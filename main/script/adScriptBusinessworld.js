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

//var ub_vs = document.createElement('script');
//ub_vs.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ubPlayer/businessworld/script.min.js";
//ub_vs.type = "text/javascript";
//document.getElementsByTagName('head')[0].appendChild(ub_vs);

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

var div_1_sizes = [320, 50];
// var div_2_sizes = [320, 100];

var adUnits = [];
// if (mobileCheck === 'function') {
//   if (!mobileCheck()) {
//        adUnits = [{
//          code: '/21928950349,22560027500/businessworld.in_NB_320x100',
//          mediaTypes: {
//            banner: {
//              sizes: div_2_sizes
//            }
//          },
//          bids: [
//            {
//              bidder: 'appnexus',
//              params: {
//                 placementId: '19258738'
//               }
//            }, /* one placementId for all sizes  my appnexus bidder */
//            // {
//            //   bidder: 'oftmedia',
//            //   params: {
//            //     placementId: '19141968'
//            //   }
//            // },
//            {
//              bidder: '33across',
//              params: {
//                siteId: 'clmJOCWuGr6PjyaKlId8sQ',
//                productId: 'siab'
//              },
//              labelAll: ["US"]
//            }, /*All sizes*/
//            // {
//            //   bidder: 'emx_digital',
//            //   params: {
//            //     tagid: '97450'
//            //   }
//            // }, /* sizeless */
//            {
//              bidder: 'sovrn',
//              params: {
//                tagid: '741568'
//              }
//            },
//            { bidder: 'openx', params: {unit: '543530480', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//            //{ bidder: 'rhythmone', params: { placementId: '205372' } }, /* one placementId for all sizes */
//            // {
//            //   bidder: 'eplanning',
//            //   params: {
//            //     ci: '2cfed',
//            //     ml: '1'
//            //   }
//            // },
//            // {
//            //   bidder: 'criteo',
//            //   params: {
//            //     networkId: '4902'
//            //   }
//            // },
//            { bidder: 'nobid',
//              params: {
//                siteId : '22049999647'
//              }
//            },
//            { bidder: 'criteo', params: {networkId: '10542'} },
//            { bidder: 'criteointl', params: {networkId: '10545'} },
//            { bidder: 'smartadserver', params: { siteId: '362100', pageId: '1289601', formatId: '93416', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//            { bidder: 'sonobi', params: { placement_id: 'ed9ad9ebfd4284f280b4', ad_unit: 'businessworld.in_NB_320x100' } },
//            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3028653'} },
//            {
//              bidder: 'adsolut',
//              params: {
//                zoneId: '107071',
//                host: 'cpm.adsolut.in'
//              }
//            }
//            // {
//            //   bidder: 'rubicon',
//            //   params: {
//            //     accountId: '11734',
//            //     siteId: '323588',
//            //     zoneId: '1679924'
//            //   }
//            // }
//          ]
//        }];
//   } else {
//     adUnits = [
//       // {
//       //   code: '/21928950349,22560027500/businessworld.in_NB_320x50',
//       //   mediaTypes: {
//       //     native: {
//       //       image: {
//       //         // sizes: [300, 100],
//       //         aspect_ratios: [{
//       //           min_width: 100,
//       //           /* Optional */
//       //           min_height: 50,
//       //           /* Optional */
//       //           ratio_width: 2,
//       //           /* Required */
//       //           ratio_height: 1,
//       //           /* Required */
//       //         }],
//       //         sendId: true
//       //       },
//       //       title: {
//       //         len: 50,
//       //         sendId: true
//       //       },
//       //       sponsoredBy: {
//       //         required: true,
//       //         sendId: true
//       //       },
//       //       clickUrl: {
//       //         required: true,
//       //         sendId: true
//       //       }
//       //     }
//       //   },
//       //   bids: [{
//       //       bidder: 'appnexus',
//       //       params: {
//       //         placementId: '19053343'
//       //       }
//       //     },
//       //     {
//       //       bidder: 'oftmedia',
//       //       params: {
//       //         placementId: '19141968'
//       //       }
//       //     }
//       //   ]
//       // },
//       {
//         code: '/21928950349,22560027500/businessworld.in_NB_320x50',
//         mediaTypes: {
//           banner: {
//             sizes: div_1_sizes
//           }
//         },
//         bids: [
//           {
//             bidder: 'appnexus',
//             params: {
//               placementId: '19258738'
//             }
//           }, /* one placementId for all sizes  my appnexus bidder */
//           // {
//           //   bidder: 'oftmedia',
//           //   params: {
//           //     placementId: '19141968'
//           //   }
//           // },
//           {
//             bidder: '33across',
//             params: {
//               siteId: 'clmJOCWuGr6PjyaKlId8sQ',
//               productId: 'siab'
//             }
//           },
//           { bidder: 'criteo', params: {networkId: '10542'} },
//           { bidder: 'openx', params: {unit: '543530482', delDomain: 'unibots-d.openx.net'} , labelAny: ["US", "CA"]},
//           { bidder: 'criteointl', params: {networkId: '10545'} }, /*All sizes*/
//           { bidder: 'smartadserver', params: { siteId: '362100', pageId: '1289601', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//           { bidder: 'sonobi', params: { placement_id: '86090d9cba508d608e20', ad_unit: 'businessworld.in_NB_320x50' } },
//           { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//           { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//           { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3028654'} },
//           // {
//           //   bidder: 'emx_digital',
//           //   params: {
//           //     tagid: '97450'
//           //   }
//           // }, /* sizeless */
//           // {
//           //   bidder: 'sovrn',
//           //   params: {
//           //     tagid: '741568'
//           //   }
//           // },
//           // {
//           //   bidder: 'openx',
//           //   params: {
//           //     unit: '541045935',
//           //     delDomain: 'yieldbird-d.openx.net'
//           //   }
//           // },
//           //{ bidder: 'rhythmone', params: { placementId: '205372' } }, /* one placementId for all sizes */
//           // {
//           //   bidder: 'eplanning',
//           //   params: {
//           //     ci: '2cfed',
//           //     ml: '1'
//           //   }
//           // },
//           { bidder: 'nobid',
//             params: {
//               siteId : '22049999647'
//             }
//           },
//           // {
//           //   bidder: 'criteo',
//           //   params: {
//           //     networkId: '4902'
//           //   }
//           // },
//           {
//             bidder: 'adsolut',
//             params: {
//               zoneId: '107071',
//               host: 'cpm.adsolut.in'
//             }
//           }
//           // {
//           //   bidder: 'rubicon',
//           //   params: {
//           //     accountId: '11734',
//           //     siteId: '323588',
//           //     zoneId: '1679924'
//           //   }
//           // }
//         ]
//       }
//     ];
//   }
// } else {
//   function mobileCheckAdSript() {
//     var check = false;
//     (function (a) {
//       if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
//     })(navigator.userAgent || navigator.vendor || window.opera);
//     return check;
//   };
// }
// if (!mobileCheckAdSript()) {
//   adUnits = [{
//       code: '/21928950349,22560027500/businessworld.in_NB_320x100',
//       mediaTypes: {
//         banner: {
//           sizes: div_2_sizes
//         }
//       },
//       bids: [
//         {
//           bidder: 'appnexus',
//           params: {
//             placementId: '19258738'
//           }
//         }, /* one placementId for all sizes  my appnexus bidder */
//         // {
//         //   bidder: 'oftmedia',
//         //   params: {
//         //     placementId: '19141968'
//         //   }
//         // },
//         {
//           bidder: '33across',
//           params: {
//             siteId: 'clmJOCWuGr6PjyaKlId8sQ',
//             productId: 'siab'
//           }
//         },/*All sizes*/
//         { bidder: 'criteo', params: {networkId: '10542'} },
//         { bidder: 'openx', params: {unit: '543530480', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
//         { bidder: 'criteointl', params: {networkId: '10545'} },
//         { bidder: 'smartadserver', params: { siteId: '362100', pageId: '1289601', formatId: '93416', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
//         { bidder: 'sonobi', params: { placement_id: 'ed9ad9ebfd4284f280b4', ad_unit: 'businessworld.in_NB_320x100' } },
//         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
//         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
//         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3028653'} },
//         // {
//         //   bidder: 'emx_digital',
//         //   params: {
//         //     tagid: '97450'
//         //   }
//         // }, /* sizeless */
//         // {
//         //   bidder: 'sovrn',
//         //   params: {
//         //     tagid: '724698'
//         //   }
//         // },
//         // {
//         //   bidder: 'openx',
//         //   params: {
//         //     unit: '541045935',
//         //     delDomain: 'yieldbird-d.openx.net'
//         //   }
//         // },
//         //{ bidder: 'rhythmone', params: { placementId: '205372' } }, /* one placementId for all sizes */
//         // {
//         //   bidder: 'eplanning',
//         //   params: {
//         //     ci: '2cfed',
//         //     ml: '1'
//         //   }
//         // },
//         // {
//         //   bidder: 'criteo',
//         //   params: {
//         //     networkId: '4902'
//         //   }
//         // },
//         { bidder: 'nobid',
//           params: {
//             siteId : '22049999647'
//           }
//         },
//         {
//           bidder: 'adsolut',
//           params: {
//             zoneId: '107071',
//             host: 'cpm.adsolut.in'
//           }
//         }
//         // {
//         //   bidder: 'rubicon',
//         //   params: {
//         //     accountId: '11734',
//         //     siteId: '323588',
//         //     zoneId: '1679924'
//         //   }
//         }
//       ]
//     }];
// } else {
  adUnits1 =
  {
      code: '/21928950349,22560027500/businessworld.in_NB_320x50',
      mediaTypes: {
        banner: {
          sizes: div_1_sizes
        }
      },
      bids: [
        {
          bidder: 'appnexus',
          params: {
            placementId: '19258738'
          }
        }, /* one placementId for all sizes  my appnexus bidder */
        // {
        //   bidder: 'oftmedia',
        //   params: {
        //     placementId: '19141968'
        //   }
        // },
        // {
        //   bidder: '33across',
        //   params: {
        //     siteId: 'clmJOCWuGr6PjyaKlId8sQ',
        //     productId: 'siab'
        //   }
        // }, /*All sizes*/
        // { bidder: 'ucfunnel', params: { adid : 'ad-772877969D43E6DAF7897B4E6B6394D'} },
        // { bidder: 'openx', params: {unit: '543530482', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        // // { bidder: 'criteo', params: {networkId: '10542'} },
        // // { bidder: 'criteointl', params: {networkId: '10545'} },
        // { bidder: 'smartadserver', params: { siteId: '362100', pageId: '1289601', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        // { bidder: 'sonobi', params: { placement_id: '86090d9cba508d608e20', ad_unit: 'businessworld.in_NB_320x50' } },
        // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        // { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3028654'} },
        // {
        //   bidder: 'emx_digital',
        //   params: {
        //     tagid: '97450'
        //   }
        // }, /* sizeless */
        {
          bidder: 'sovrn',
          params: {
            tagid: '716602'
          }
        },
        // {
        //   bidder: 'openx',
        //   params: {
        //     unit: '541045935',
        //     delDomain: 'yieldbird-d.openx.net'
        //   }
        // },
        //{ bidder: 'rhythmone', params: { placementId: '205372' } }, /* one placementId for all sizes */
        // {
        //   bidder: 'eplanning',
        //   params: {
        //     ci: '2cfed',
        //     ml: '1'
        //   }
        // },
        // {
        //   bidder: 'criteo',
        //   params: {
        //     networkId: '4902'
        //   }
        // },
        // {
        //   bidder: 'adsolut',
        //   params: {
        //     zoneId: '107071',
        //     host: 'cpm.adsolut.in'
        //   }
        // },
        { bidder: 'nobid',
          params: {
            siteId : '22049999647'
          }
        }
        // {
        //   bidder: 'rubicon',
        //   params: {
        //     accountId: '11734',
        //     siteId: '323588',
        //     zoneId: '1679924'
        //   }
        // }
      ]
    };
  adUnits.push(adUnits1);
// }
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
  renderedFlag: [false]
};


// apSlotTemp = {
//   // slotID: mappings_full_hb_config.targetUnits[index],
//   // slotName: mappings_full_hb_config.adUnitNames[index],
//   // sizes: mappings_full_hb_config.sizes[index]
//
//   slotID: 'div-ub-1',
//   slotName: '/21928950349,22560027500/businessworld.in_NB_320x50',
//   sizes: mappings.sizes,
// }
// apSlots.push(apSlotTemp);

// if(mobileCheck === 'function'){
//   if(mobileCheck()){
//     function initAdserver() {
//         if (ubpbjs.initAdserverSet) return;
//         ubpbjs.initAdserverSet = true;
//         googletag.cmd.push(function() {
//             ubpbjs.que.push(function() {
//                 ubpbjs.setTargetingForGPTAsync();
//                 // googletag.pubads().refresh([ub_slot1]);
//                 var x = ubpbjs.getAllPrebidWinningBids();
//                 var adsCalled = false;
//                 for(var i=0;i<x.length;i++){
//                   var bc = x[i].bidderCode;
//                   if(bc=="openx"){
//                     adsCalled = true;
//                     callBotman();
//                   }
//                 }
//                 if(!adsCalled){
//                   callAdsUB();
//                 }
//             });
//         });
//     }
//     // in case ubpbjs doesn't load
//     setTimeout(function() {
//         initAdserver();
//     }, FAILSAFE_TIMEOUT);
//
//     var ub_slot1;
//     googletag.cmd.push(function() {
//         ub_slot1 = googletag.defineSlot('/21928950349,22560027500/businessworld.in_NB_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
//         googletag.pubads().collapseEmptyDivs(true);
//         googletag.pubads().setCentering(true);
//         googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
//         googletag.pubads().enableSingleRequest();
//         googletag.enableServices();
//         googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//           if (event.slot === ub_slot1) {
//             ub_checkAd1Rendered();
//           }
//         });
//     });
//
//     function refreshBid(ub_slot) {
//       ubpbjs.que.push(function() {
//     	  ubpbjs.requestBids({
//     		  timeout: PREBID_TIMEOUT,
//     		  adUnitCodes: ['/21928950349,22560027500/businessworld.in_NB_320x50'],
//     		  bidsBackHandler: function() {
//             googletag.cmd.push(function() {
//               ubpbjs.que.push(function() {
//                   ubpbjs.setTargetingForGPTAsync();
//                   googletag.pubads().refresh([ub_slot]);
//                   var adsCalled = false;
//                   for(var i=0;i<x.length;i++){
//                     var bc = x[i].bidderCode;
//                     if(bc=="openx"){
//                       adsCalled = true;
//                       callBotman();
//                     }
//                   }
//                   if(!adsCalled){
//                     callAdsUB();
//                   }
//               });
//             });
//     		  }
//     	  });
//       });
//     }
//
//     ub_ad1RefreshFlag = 0;
//     function ub_checkAd1Rendered(){
//     	adId1 = 'div-ub-1';
//     	var nodes = document.getElementById(adId1).childNodes[0].childNodes;
//     	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
//         if(ub_ad1RefreshFlag != 1){
//           setInterval(function() {
//             ub_ad1RefreshFlag = 1;
//             refreshBid(ub_slot1);
//           }, REFRESH_TIMEOUT);
//         }
//     	 }
//     }
//   }
//   else {
//         function initAdserver() {
//             if (ubpbjs.initAdserverSet) return;
//             ubpbjs.initAdserverSet = true;
//             googletag.cmd.push(function() {
//                 ubpbjs.que.push(function() {
//                     ubpbjs.setTargetingForGPTAsync();
//                     // googletag.pubads().refresh([ub_slot2]);
//                     var x = ubpbjs.getAllPrebidWinningBids();
//                     var adsCalled = false;
//                     for(var i=0;i<x.length;i++){
//                       var bc = x[i].bidderCode;
//                       if(bc=="openx"){
//                         adsCalled = true;
//                         callBotman();
//                       }
//                     }
//                     if(!adsCalled){
//                       callAdsUB();
//                     }
//                 });
//             });
//         }
//         // in case ubpbjs doesn't load
//         setTimeout(function() {
//             initAdserver();
//         }, FAILSAFE_TIMEOUT);
//
//         var ub_slot2;
//         googletag.cmd.push(function() {
//             ub_slot2 = googletag.defineSlot('/21928950349,22560027500/businessworld.in_NB_320x100', div_2_sizes, 'div-ub-2').addService(googletag.pubads());
//             googletag.pubads().collapseEmptyDivs(true);
//             googletag.pubads().setCentering(true);
//             googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
//             googletag.pubads().enableSingleRequest();
//             googletag.enableServices();
//             googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//               if (event.slot === ub_slot2) {
//                 ub_checkAd2Rendered();
//               }
//             });
//         });
//
//
//         function refreshBid(ub_slot) {
//           ubpbjs.que.push(function() {
//             ubpbjs.requestBids({
//               timeout: PREBID_TIMEOUT,
//               adUnitCodes: ['/21928950349,22560027500/businessworld.in_NB_320x100'],
//               bidsBackHandler: function() {
//                 googletag.cmd.push(function() {
//                   ubpbjs.que.push(function() {
//                       ubpbjs.setTargetingForGPTAsync();
//                       googletag.pubads().refresh([ub_slot]);
//                       var adsCalled = false;
//                       for(var i=0;i<x.length;i++){
//                         var bc = x[i].bidderCode;
//                         if(bc=="openx"){
//                           adsCalled = true;
//                           callBotman();
//                         }
//                       }
//                       if(!adsCalled){
//                         callAdsUB();
//                       }
//                   });
//                 });
//               }
//             });
//           });
//         }
//
//         ub_ad2RefreshFlag = 0;
//         function ub_checkAd2Rendered(){
//           adId2 = 'div-ub-2';
//           var nodes = document.getElementById(adId2).childNodes[0].childNodes;
//           if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
//             if(ub_ad2RefreshFlag != 1){
//               setInterval(function() {
//                 ub_ad2RefreshFlag = 1;
//                 refreshBid(ub_slot2);
//               }, REFRESH_TIMEOUT);
//             }
//            }
//         }
//     }
//   }
// else{
  // if(mobileCheckAdSript()){

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

    // function refreshBid(ub_slot, adCode) {
    //   ubpbjs.que.push(function(){
    //     ubpbjs.requestBids({
    //       timeout: PREBID_TIMEOUT,
    //       adUnitCodes: adCode,
    //       bidsBackHandler: function() {
    //         googletag.cmd.push(function() {
    //           ubpbjs.que.push(function() {
    //               ubpbjs.setTargetingForGPTAsync();
    //               googletag.pubads().refresh([ub_slot]);
    //               // var adsCalled = false;
    //               // for(var i=0;i<x.length;i++){
    //               //   var bc = x[i].bidderCode;
    //               //   if(bc=="openx"){
    //               //     adsCalled = true;
    //               //     callBotman();
    //               //   }
    //               // }
    //               // if(!adsCalled){
    //               //   callAdsUB();
    //               // }
    //           });
    //         });
    //       }
    //     });
    //   });
    // }
    //
    // function initAdserver() {
    //     if (ubpbjs.initAdserverSet) return;
    //     ubpbjs.initAdserverSet = true;
    //     googletag.cmd.push(function() {
    //         ubpbjs.que.push(function() {
    //             ubpbjs.setTargetingForGPTAsync();
    //             googletag.pubads().refresh(mappings.slots);
    //             // var x = ubpbjs.getAllPrebidWinningBids();
    //             // var adsCalled = false;
    //             // for(var i=0;i<x.length;i++){
    //             //   var bc = x[i].bidderCode;
    //             //   if(bc=="openx"){
    //             //     adsCalled = true;
    //             //     callBotman();
    //             //   }
    //             // }
    //             // if(!adsCalled){
    //             //   callAdsUB();
    //             // }
    //         });
    //     });
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
          googletag.pubads().refresh(mappings.slots);
        });
      });
      // callAds(bids);
    }

    function callAds(bids = {}) {
      let ubBidscheckFlag = false;
      if (Object.keys(bids).length === 0 && bids.constructor === Object){}
      else {
        bids[Object.keys(bids)].bids.forEach((bid) => {
          if (bid.cpm > 0.01) {
            ubBidscheckFlag = true;
          }
        })
      }

      if (ubBidscheckFlag) {
        googletag.cmd.push(function () {
          ubpbjs.que.push(function () {
            ubpbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh(mappings.slots);
            console.log('HB server request');
          });
        });
      }
      else{
        googletag.cmd.push(function () {
          googletag.pubads().refresh(mappings.slots);
          console.log('Only Google server request');
        });
      }
    }

    var botmanCalled = false;
    var userStatusBM = '';
    function callBotman(){
      if(userStatusBM == ''){
        var request = new XMLHttpRequest();
        var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=businessworld';
        request.open('GET', url, true);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            var data = request.responseText;
            if(data != ""){
              data = JSON.parse(data);
              userStatusBM = data;
              if(userStatusBM == "0" || userStatusBM == "3"){
                callAdsUB();
              }
              else{
                console.log('Not Valid Traffic for openx');
              }
            }
            else{
              console.error('Data not returned from server');
              callAdsUB();
            }
          }
          else {
            console.error('Request failed from server');
            callAdsUB();
          }
        };
        request.onerror = function() {
          console.error('Request failed to Reach Server');
          callAdsUB();
        };
        request.send();
      }
      else{
        if(userStatusBM == "0" || userStatusBM == "3"){
          callAdsUB();
        }
        else{
          console.log('Not Valid Traffic for openx');
        }
      }

    }

    function callAdsUB(){
      // if(mobileCheck === 'function'){
      //   if(mobileCheck()){
      //     googletag.pubads().refresh([ub_slot1]);
      //   }
      //   else {
      //     googletag.pubads().refresh([ub_slot2]);
      //   }
      // }
      // else {
      //  if(mobileCheckAdSript()){
         // googletag.pubads().refresh([ub_slot1]);
      //  }
      //  else {
      //   googletag.pubads().refresh([ub_slot2]);
      //  }
      // }
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

      mappings.slotNumbers.push(1);
      mappings.adCode.push('/21928950349,22560027500/businessworld.in_NB_320x50');
      mappings.sizes.push(div_1_sizes);
      mappings.adId.push('div-ub-1');
      googletag.cmd.push(function() {
        // callAPStagBids(); //Ap part
        // callAPSAds(mappings.adCode, mappings.slots);
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot1) {
            ub_checkAdRendered('div-ub-1', ub_slot1, ['/21928950349,22560027500/businessworld.in_NB_320x50']);
          }
        });
      });

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
  // }
//   else {
//        function initAdserver() {
//            if (ubpbjs.initAdserverSet) return;
//            ubpbjs.initAdserverSet = true;
//            googletag.cmd.push(function() {
//                ubpbjs.que.push(function() {
//                    ubpbjs.setTargetingForGPTAsync();
//                    // googletag.pubads().refresh([ub_slot2]);
//                    var x = ubpbjs.getAllPrebidWinningBids();
//                    var adsCalled = false;
//                    for(var i=0;i<x.length;i++){
//                      var bc = x[i].bidderCode;
//                      if(bc=="openx"){
//                        adsCalled = true;
//                        callBotman();
//                      }
//                    }
//                    if(!adsCalled){
//                      callAdsUB();
//                    }
//                });
//            });
//        }
//        // in case ubpbjs doesn't load
//        setTimeout(function() {
//            initAdserver();
//        }, FAILSAFE_TIMEOUT);
//
//        var ub_slot2;
//        googletag.cmd.push(function() {
//            ub_slot2 = googletag.defineSlot('/21928950349,22560027500/businessworld.in_NB_320x100', div_2_sizes, 'div-ub-2').addService(googletag.pubads());
//            googletag.pubads().collapseEmptyDivs(true);
//            googletag.pubads().setCentering(true);
//            googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
//            googletag.pubads().enableSingleRequest();
//            googletag.enableServices();
//            googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//              if (event.slot === ub_slot2) {
//                ub_checkAd2Rendered();
//              }
//            });
//        });
//
//        function refreshBid(ub_slot) {
//          ubpbjs.que.push(function() {
//            ubpbjs.requestBids({
//              timeout: PREBID_TIMEOUT,
//              adUnitCodes: ['/21928950349,22560027500/businessworld.in_NB_320x100'],
//              bidsBackHandler: function() {
//                googletag.cmd.push(function() {
//                  ubpbjs.que.push(function() {
//                      ubpbjs.setTargetingForGPTAsync();
//                      googletag.pubads().refresh([ub_slot]);
//                      var adsCalled = false;
//                      for(var i=0;i<x.length;i++){
//                        var bc = x[i].bidderCode;
//                        if(bc=="openx"){
//                          adsCalled = true;
//                          callBotman();
//                        }
//                      }
//                      if(!adsCalled){
//                        callAdsUB();
//                      }
//                  });
//                });
//              }
//            });
//          });
//        }
//
//        ub_ad2RefreshFlag = 0;
//        function ub_checkAd2Rendered(){
//          adId2 = 'div-ub-2';
//          var nodes = document.getElementById(adId2).childNodes[0].childNodes;
//          if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
//            if(ub_ad2RefreshFlag != 1){
//              setInterval(function() {
//                ub_ad2RefreshFlag = 1;
//                refreshBid(ub_slot2);
//              }, REFRESH_TIMEOUT);
//            }
//           }
//        }
//   }
// }
function mainHbRun(){
  ubpbjs.que.push(function() {
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
      ubpbjs.addAdUnits(adUnits);
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
        publisherDomain: 'http://www.businessworld.in/',
        bidderTimeout: PREBID_TIMEOUT+500,
        //pubcid: {expInterval: },
        //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
      "currency": {
         // enables currency feature
         "adServerCurrency": "AED",
         "granularityMultiplier":3 ,
         // optionally override the default rate file
         "conversionRateFile": "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/currency/currency.json",
         // optionally provide a default rate in case the file can't be read
         "defaultRates": { "USD": { "AED": 3.67 }}
       }
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

function callAPSAds(adCode, ub_slot){
  ubpbjs.que.push(function(){
    ubpbjs.requestBids({
      timeout: PREBID_TIMEOUT,
      adUnits: adUnits,
      adUnitCodes: adCode,
      bidsBackHandler: function() {
        // ubpbjs.initAdserverSetHB = true;
        googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              requestManager.prebid = true;
              biddersBack();
              // googletag.pubads().refresh(ub_slot);
          });
        });
      }
    });
  });
}
function callAPStagBids(){
  apstag.fetchBids({
    slots: apSlots,
     timeout: 2000
  },function(bids) {
          googletag.cmd.push(function() {
              apstag.setDisplayBids();
              requestManager.aps = true;
              biddersBack();
          });
      }
  );
}
function biddersBack() {
    if (requestManager.aps && requestManager.prebid) {
        sendAdserverRequest();
    }
    return;
}
function sendAdserverRequest() {
    if (requestManager.adserverRequestSent === true) {
        return;
    }
    requestManager.adserverRequestSent = true;
    googletag.cmd.push(function() {
        googletag.pubads().refresh(mappings.slots);
    });
}
