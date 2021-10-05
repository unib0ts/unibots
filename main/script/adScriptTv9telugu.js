!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");

var requestManager = {
    adserverRequestSent: false,
    aps: false,
    prebid: false
};

//initialize the apstag.js library on the page to allow bidding
apstag.init({
     pubID: '8282b9c6-324d-4939-b1ea-958d67a9e637',
     adServer: 'googletag'
});
apSlots = []

var div_1_sizes = [320, 50];
var div_2_sizes = [300, 250];

var adUnits = [];

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

botsiteurl=window.location.hostname;

if (botsiteurl == 'tv9gujarati.com') {
  if (mobileCheck()) {
    if (document.getElementById('ub-ads')) {
      adUnits1 =
      {
          code: '/21928950349/tv9gujarati.com_ipl_300x250',
          mediaTypes: {
              banner: {
                  sizes: div_2_sizes
              }
          },
          bids: [
            { bidder: 'appnexus', params: { placementId: '21370132' } }, /* one placementId for all sizes  my appnexus bidder */
            { bidder: 'sovrn', params: {tagid: '884547'} },
            // { bidder: 'smartadserver', params: { siteId: '399742', pageId: '1361924', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
            // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3586031'} },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            // { bidder: 'criteo', params: {networkId: '10542'} },
            // { bidder: 'criteointl', params: {networkId: '10545'} },
            // { bidder: 'ucfunnel', params: { adid : 'ad-9A297DAE382B9A39C6E77E3BA949A84'} },
            { bidder: 'oftmedia', params: { placementId: '20846125' } },
            // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
            // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            { bidder: 'openx', params: {unit: '544022882', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
            // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
             { bidder: 'nobid', params: { siteId : '22366315575'} },
            //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
      adUnits.push(adUnits1);
    }}
  // else {
  //   adUnits1 =
  //   {
  //       code: '/21928950349/tv9gujarati.com_ipl_320x50',
  //       mediaTypes: {
  //           banner: {
  //               sizes: div_1_sizes
  //           }
  //       },
  //       bids: [
  //         { bidder: 'appnexus', params: { placementId: '21370132' } }, /* one placementId for all sizes  my appnexus bidder */
  //         { bidder: 'sovrn', params: {tagid: '884548'} },
  //         // { bidder: 'smartadserver', params: { siteId: '399742', pageId: '1361924', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
  //         // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
  //         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  //         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3586032'} },
  //         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
  //         { bidder: 'criteo', params: {networkId: '10542'} },
  //         { bidder: 'criteointl', params: {networkId: '10545'} },
  //         // { bidder: 'ucfunnel', params: { adid : 'ad-9A297DAE382B9A39C6E77E3BA949A84'} },
  //         { bidder: 'oftmedia', params: { placementId: '20846125' } },
  //         // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //         // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
  //         { bidder: 'openx', params: {unit: '544022884', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
  //         { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
  //         // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //          { bidder: 'nobid', params: { siteId : '22366315575'} },
  //         //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
  //       ]
  //   };
  //   adUnits.push(adUnits1);
  // }
}
if (botsiteurl == 'www.tv9hindi.com' || botsiteurl == 'veegam.tv9hindi.com' || botsiteurl == 'www.veegam.tv9hindi.com') {
  if (mobileCheck()) {
    if (document.getElementById('ub-ads')) {
      adUnits1 =
      {
          code: '/21928950349/tv9hindi.com_ipl_300x250',
          mediaTypes: {
              banner: {
                  sizes: div_2_sizes
              }
          },
          bids: [
            { bidder: 'appnexus', params: { placementId: '21370133' } }, /* one placementId for all sizes  my appnexus bidder */
            { bidder: 'sovrn', params: {tagid: '884549'} },
            // { bidder: 'smartadserver', params: { siteId: '399742', pageId: '1361924', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
            // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3586033'} },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            // { bidder: 'criteo', params: {networkId: '10542'} },
            // { bidder: 'criteointl', params: {networkId: '10545'} },
            // { bidder: 'ucfunnel', params: { adid : 'ad-9A297DAE382B9A39C6E77E3BA949A84'} },
            { bidder: 'oftmedia', params: { placementId: '20846125' } },
            // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
            // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            { bidder: 'openx', params: {unit: '544022887', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
            // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
             { bidder: 'nobid', params: { siteId : '22366416268'} },
            //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
      adUnits.push(adUnits1);
    }
  }
  // else {
  //   adUnits1 =
  //   {
  //       code: '/21928950349/tv9hindi.com_ipl_320x50',
  //       mediaTypes: {
  //           banner: {
  //               sizes: div_1_sizes
  //           }
  //       },
  //       bids: [
  //         { bidder: 'appnexus', params: { placementId: '21370133' } }, /* one placementId for all sizes  my appnexus bidder */
  //         { bidder: 'sovrn', params: {tagid: '884550'} },
  //         // { bidder: 'smartadserver', params: { siteId: '399742', pageId: '1361924', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
  //         // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
  //         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  //         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3586034'} },
  //         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
  //         { bidder: 'criteo', params: {networkId: '10542'} },
  //         { bidder: 'criteointl', params: {networkId: '10545'} },
  //         // { bidder: 'ucfunnel', params: { adid : 'ad-9A297DAE382B9A39C6E77E3BA949A84'} },
  //         { bidder: 'oftmedia', params: { placementId: '20846125' } },
  //         // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //         // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
  //         { bidder: 'openx', params: {unit: '544022897', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
  //         { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
  //         // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //          { bidder: 'nobid', params: { siteId : '22366416268'} },
  //         //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
  //       ]
  //   };
  //   adUnits.push(adUnits1);
  // }
}
if (botsiteurl == 'tv9kannada.com') {
  if (mobileCheck()) {
    if (document.getElementById('ub-ads')) {
      adUnits1 =
      {
          code: '/21928950349/tv9kannada.com_ipl_300x250',
          mediaTypes: {
              banner: {
                  sizes: div_2_sizes
              }
          },
          bids: [
            { bidder: 'appnexus', params: { placementId: '21370136' } }, /* one placementId for all sizes  my appnexus bidder */
            { bidder: 'sovrn', params: {tagid: '884551'} },
            // { bidder: 'smartadserver', params: { siteId: '399742', pageId: '1361924', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
            // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3586035'} },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            // { bidder: 'criteo', params: {networkId: '10542'} },
            // { bidder: 'criteointl', params: {networkId: '10545'} },
            // { bidder: 'ucfunnel', params: { adid : 'ad-9A297DAE382B9A39C6E77E3BA949A84'} },
            { bidder: 'oftmedia', params: { placementId: '20846125' } },
            // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
            // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            { bidder: 'openx', params: {unit: '544022903', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
            // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
             { bidder: 'nobid', params: { siteId : '22366316451'} },
            //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
      adUnits.push(adUnits1);
    }
  }
  // else {
  //   adUnits1 =
  //   {
  //       code: '/21928950349/tv9kannada.com_ipl_320x50',
  //       mediaTypes: {
  //           banner: {
  //               sizes: div_1_sizes
  //           }
  //       },
  //       bids: [
  //         { bidder: 'appnexus', params: { placementId: '21370136' } }, /* one placementId for all sizes  my appnexus bidder */
  //         { bidder: 'sovrn', params: {tagid: '884553'} },
  //         // { bidder: 'smartadserver', params: { siteId: '399742', pageId: '1361924', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
  //         // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
  //         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  //         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3586036'} },
  //         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
  //         { bidder: 'criteo', params: {networkId: '10542'} },
  //         { bidder: 'criteointl', params: {networkId: '10545'} },
  //         // { bidder: 'ucfunnel', params: { adid : 'ad-9A297DAE382B9A39C6E77E3BA949A84'} },
  //         { bidder: 'oftmedia', params: { placementId: '20846125' } },
  //         // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //         // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
  //         { bidder: 'openx', params: {unit: '544022905', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
  //         { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
  //         // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //          { bidder: 'nobid', params: { siteId : '22366316451'} },
  //         //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
  //       ]
  //   };
  //   adUnits.push(adUnits1);
  // }
}
if (botsiteurl == 'www.tv9marathi.com') {
  if (mobileCheck()) {
    if (document.getElementById('ub-ads')) {
      adUnits1 =
      {
          code: '/21928950349/tv9marathi.com_ipl_300x250',
          mediaTypes: {
              banner: {
                  sizes: div_2_sizes
              }
          },
          bids: [
            { bidder: 'appnexus', params: { placementId: '21370144' } }, /* one placementId for all sizes  my appnexus bidder */
            { bidder: 'sovrn', params: {tagid: '884554'} },
            // { bidder: 'smartadserver', params: { siteId: '399742', pageId: '1361924', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
            // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3586037'} },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            // { bidder: 'criteo', params: {networkId: '10542'} },
            // { bidder: 'criteointl', params: {networkId: '10545'} },
            // { bidder: 'ucfunnel', params: { adid : 'ad-9A297DAE382B9A39C6E77E3BA949A84'} },
            { bidder: 'oftmedia', params: { placementId: '20846125' } },
            // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
            // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            { bidder: 'openx', params: {unit: '544022906', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
            // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
             { bidder: 'nobid', params: { siteId : '22366316454'} },
            //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
      adUnits.push(adUnits1);
    }
  }
  // else {
  //   adUnits1 =
  //   {
  //       code: '/21928950349/tv9marathi.com_ipl_320x50',
  //       mediaTypes: {
  //           banner: {
  //               sizes: div_1_sizes
  //           }
  //       },
  //       bids: [
  //         { bidder: 'appnexus', params: { placementId: '21370144' } }, /* one placementId for all sizes  my appnexus bidder */
  //         { bidder: 'sovrn', params: {tagid: '884555'} },
  //         // { bidder: 'smartadserver', params: { siteId: '399742', pageId: '1361924', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
  //         // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
  //         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  //         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3586037'} },
  //         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
  //         { bidder: 'criteo', params: {networkId: '10542'} },
  //         { bidder: 'criteointl', params: {networkId: '10545'} },
  //         // { bidder: 'ucfunnel', params: { adid : 'ad-9A297DAE382B9A39C6E77E3BA949A84'} },
  //         { bidder: 'oftmedia', params: { placementId: '20846125' } },
  //         // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //         // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
  //         { bidder: 'openx', params: {unit: '544022907', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
  //         { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
  //         // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //          { bidder: 'nobid', params: { siteId : '22366316454'} },
  //         //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
  //       ]
  //   };
  //   adUnits.push(adUnits1);
  // }
}
if (botsiteurl == 'tv9telugu.com') {
  if (mobileCheck()) {
    if (document.getElementById('ub-ads')) {
      adUnits1 =
      {
          code: '/21928950349/tv9telugu.com_ipl_300x250',
          mediaTypes: {
              banner: {
                  sizes: div_2_sizes
              }
          },
          bids: [
            { bidder: 'appnexus', params: { placementId: '20215299' } }, /* one placementId for all sizes  my appnexus bidder */
            { bidder: 'sovrn', params: {tagid: '884556'} },
            { bidder: 'smartadserver', params: { siteId: '371049', pageId: '1306273', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
            // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
            { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3586039'} },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            // { bidder: 'criteo', params: {networkId: '10542'} },
            // { bidder: 'criteointl', params: {networkId: '10545'} },
            // { bidder: 'ucfunnel', params: { adid : 'ad-9A297DAE382B9A39C6E77E3BA949A84'} },
            { bidder: 'oftmedia', params: { placementId: '20846125' } },
            // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
            // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            { bidder: 'openx', params: {unit: '544022911', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
            // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
             { bidder: 'nobid', params: { siteId : '22111808861'} },
            //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
      adUnits.push(adUnits1);
    }
  }
  // else {
  //   adUnits1 =
  //   {
  //       code: '/21928950349/tv9telugu.com_ipl_320x50',
  //       mediaTypes: {
  //           banner: {
  //               sizes: div_1_sizes
  //           }
  //       },
  //       bids: [
  //         { bidder: 'appnexus', params: { placementId: '20215299' } }, /* one placementId for all sizes  my appnexus bidder */
  //         { bidder: 'sovrn', params: {tagid: '884557'} },
  //         { bidder: 'smartadserver', params: { siteId: '371049', pageId: '1306273', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
  //         // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
  //         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  //         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3206185'} },
  //         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
  //         { bidder: 'criteo', params: {networkId: '10542'} },
  //         { bidder: 'criteointl', params: {networkId: '10545'} },
  //         // { bidder: 'ucfunnel', params: { adid : 'ad-9A297DAE382B9A39C6E77E3BA949A84'} },
  //         { bidder: 'oftmedia', params: { placementId: '20846125' } },
  //         // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //         // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
  //         { bidder: 'openx', params: {unit: '543530428', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
  //         { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
  //         // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //          { bidder: 'nobid', params: { siteId : '22111808861'} },
  //         //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
  //       ]
  //   };
  //   adUnits.push(adUnits1);
  // }
}
if (botsiteurl == 'www.tv9bangla.com') {
  if (mobileCheck()) {
    if (document.getElementById('ub-ads')) {
      adUnits1 =
      {
          code: '/21928950349/tv9bangla.com_ipl_300x250',
          mediaTypes: {
              banner: {
                  sizes: div_2_sizes
              }
          },
          bids: [
            { bidder: 'appnexus', params: { placementId: '21371270' } }, /* one placementId for all sizes  my appnexus bidder */
            { bidder: 'sovrn', params: {tagid: '885029'} },
            // { bidder: 'smartadserver', params: { siteId: '371049', pageId: '1306273', formatId: '93232', domain: 'https://prg8.smartadserver.com' } },
            // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
            // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3579058'} },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
            // { bidder: 'criteo', params: {networkId: '10542'} },
            // { bidder: 'criteointl', params: {networkId: '10545'} },
            // { bidder: 'ucfunnel', params: { adid : 'ad-9A297DAE382B9A39C6E77E3BA949A84'} },
            { bidder: 'oftmedia', params: { placementId: '20846125' } },
            // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
            // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
            { bidder: 'openx', params: {unit: '544022915', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
            { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
            // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
             { bidder: 'nobid', params: { siteId : '22371298759'} },
            //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
      adUnits.push(adUnits1);
    }
  }
  // else {
  //   adUnits1 =
  //   {
  //       code: '/21928950349/tv9bangla.com_ipl_320x50',
  //       mediaTypes: {
  //           banner: {
  //               sizes: div_1_sizes
  //           }
  //       },
  //       bids: [
  //         { bidder: 'appnexus', params: { placementId: '21371270' } }, /* one placementId for all sizes  my appnexus bidder */
  //         { bidder: 'sovrn', params: {tagid: '885030'} },
  //         // { bidder: 'smartadserver', params: { siteId: '371049', pageId: '1306273', formatId: '93231', domain: 'https://prg8.smartadserver.com' } },
  //         // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
  //         { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  //         // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3579058'} },
  //         { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
  //         { bidder: 'criteo', params: {networkId: '10542'} },
  //         { bidder: 'criteointl', params: {networkId: '10545'} },
  //         // { bidder: 'ucfunnel', params: { adid : 'ad-9A297DAE382B9A39C6E77E3BA949A84'} },
  //         { bidder: 'oftmedia', params: { placementId: '20846125' } },
  //         // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //         // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
  //         { bidder: 'openx', params: {unit: '544022917', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
  //         { bidder: 'rhythmone', params: { placementId: '205945'}}, /* one placementId for all sizes */
  //         // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //          { bidder: 'nobid', params: { siteId : '22371298759'} },
  //         //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //         // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
  //       ]
  //   };
  //   adUnits.push(adUnits1);
  // }
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
    // ubpbjs.setBidderConfig({
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
      publisherDomain: 'https://tv9telugu.com/',
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
  renderedFlag: [false, false, false, false, false, false]
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

if (botsiteurl == 'tv9gujarati.com') {
  if (mobileCheck()) {
    if (document.getElementById('ub-ads')) {

      apSlotTemp = {
        slotID: 'div-gpt-ad-1618307155135-0',
        slotName: '/21928950349/tv9gujarati.com_ipl_300x250',
        sizes: mappings.sizes,
      }
      apSlots.push(apSlotTemp);
      mappings.slotNumbers.push(1);
      mappings.adCode.push('/21928950349/tv9gujarati.com_ipl_300x250');
      mappings.sizes.push(div_2_sizes);
      mappings.adId.push('div-gpt-ad-1618307155135-0');
      googletag.cmd.push(function() {
        callAPStagBids(); //Ap part
        callAPSAds(mappings.adCode, mappings.slots);
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot1) {
            ub_checkAdRendered('div-gpt-ad-1618307155135-0', ub_slot1, ['/21928950349/tv9gujarati.com_ipl_300x250']);
          }
        });
      });
    }
  }
  // else {
  //   apSlotTemp = {
  //     slotID: 'div-gpt-ad-1618307202658-0',
  //     slotName: '/21928950349/tv9gujarati.com_ipl_320x50',
  //     sizes: div_1_sizes,
  //   }
  //   apSlots.push(apSlotTemp);
  //
  //   mappings.slotNumbers.push(2);
  //   mappings.adCode.push('/21928950349/tv9gujarati.com_ipl_320x50');
  //   mappings.sizes.push(div_1_sizes);
  //   mappings.adId.push('div-gpt-ad-1618307202658-0');
  //   googletag.cmd.push(function() {
  //     callAPStagBids(); //Ap part
  //     callAPSAds(mappings.adCode, mappings.slots);
  //     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //       if (event.slot === ub_slot2) {
  //         ub_checkAdRendered('div-gpt-ad-1618307202658-0', ub_slot2, ['/21928950349/tv9gujarati.com_ipl_320x50']);
  //       }
  //     });
  //   });
  // }
}
if (botsiteurl == 'www.tv9hindi.com' || botsiteurl == 'veegam.tv9hindi.com' || botsiteurl == 'www.veegam.tv9hindi.com') {
  if (mobileCheck()) {
    if (document.getElementById('ub-ads')) {
      apSlotTemp = {
        slotID: 'div-gpt-ad-1618307254033-0',
        slotName: '/21928950349/tv9hindi.com_ipl_300x250',
        sizes: mappings.sizes,
      }
      apSlots.push(apSlotTemp);

      mappings.slotNumbers.push(2);
      mappings.adCode.push('/21928950349/tv9hindi.com_ipl_300x250');
      mappings.sizes.push(div_2_sizes);
      mappings.adId.push('div-gpt-ad-1618307254033-0');
      googletag.cmd.push(function() {
        callAPStagBids(); //Ap part
        callAPSAds(mappings.adCode, mappings.slots);
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot2) {
            ub_checkAdRendered('div-gpt-ad-1618307254033-0', ub_slot2, ['/21928950349/tv9hindi.com_ipl_300x250']);
          }
        });
      });
    }
  }
  // else {
  //   apSlotTemp = {
  //     slotID: 'div-gpt-ad-1618307321739-0',
  //     slotName: '/21928950349/tv9hindi.com_ipl_320x50',
  //     sizes: div_1_sizes,
  //   }
  //   apSlots.push(apSlotTemp);
  //
  //   mappings.slotNumbers.push(4);
  //   mappings.adCode.push('/21928950349/tv9hindi.com_ipl_320x50');
  //   mappings.sizes.push(div_1_sizes);
  //   mappings.adId.push('div-gpt-ad-1618307321739-0');
  //   googletag.cmd.push(function() {
  //     callAPStagBids(); //Ap part
  //     callAPSAds(mappings.adCode, mappings.slots);
  //     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //       if (event.slot === ub_slot4) {
  //         ub_checkAdRendered('div-gpt-ad-1618307321739-0', ub_slot4, ['/21928950349/tv9hindi.com_ipl_320x50']);
  //       }
  //     });
  //   });
  // }
}
if (botsiteurl == 'tv9kannada.com') {
  if (mobileCheck()) {
    if (document.getElementById('ub-ads')) {
      apSlotTemp = {
        slotID: 'div-gpt-ad-1618307365902-0',
        slotName: '/21928950349/tv9kannada.com_ipl_300x250',
        sizes: mappings.sizes,
      }
      apSlots.push(apSlotTemp);

      mappings.slotNumbers.push(3);
      mappings.adCode.push('/21928950349/tv9kannada.com_ipl_300x250');
      mappings.sizes.push(div_2_sizes);
      mappings.adId.push('div-gpt-ad-1618307365902-0');
      googletag.cmd.push(function() {
        callAPStagBids(); //Ap part
        callAPSAds(mappings.adCode, mappings.slots);
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot3) {
            ub_checkAdRendered('div-gpt-ad-1618307365902-0', ub_slot3, ['/21928950349/tv9kannada.com_ipl_300x250']);
          }
        });
      });
    }
  }
  // else {
  //   apSlotTemp = {
  //     slotID: 'div-gpt-ad-1618307397992-0',
  //     slotName: '/21928950349/tv9kannada.com_ipl_320x50',
  //     sizes: div_1_sizes,
  //   }
  //   apSlots.push(apSlotTemp);
  //
  //   mappings.slotNumbers.push(6);
  //   mappings.adCode.push('/21928950349/tv9kannada.com_ipl_320x50');
  //   mappings.sizes.push(div_1_sizes);
  //   mappings.adId.push('div-gpt-ad-1618307397992-0');
  //   googletag.cmd.push(function() {
  //     callAPStagBids(); //Ap part
  //     callAPSAds(mappings.adCode, mappings.slots);
  //     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //       if (event.slot === ub_slot6) {
  //         ub_checkAdRendered('div-gpt-ad-1618307397992-0', ub_slot6, ['/21928950349/tv9kannada.com_ipl_320x50']);
  //       }
  //     });
  //   });
  // }
}
if (botsiteurl == 'www.tv9marathi.com') {
  if (mobileCheck()) {
    if (document.getElementById('ub-ads')) {
      apSlotTemp = {
        slotID: 'div-gpt-ad-1618307427794-0',
        slotName: '/21928950349/tv9marathi.com_ipl_300x250',
        sizes: mappings.sizes,
      }
      apSlots.push(apSlotTemp);

      mappings.slotNumbers.push(4);
      mappings.adCode.push('/21928950349/tv9marathi.com_ipl_300x250');
      mappings.sizes.push(div_2_sizes);
      mappings.adId.push('div-gpt-ad-1618307427794-0');
      googletag.cmd.push(function() {
        callAPStagBids(); //Ap part
        callAPSAds(mappings.adCode, mappings.slots);
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot4) {
            ub_checkAdRendered('div-gpt-ad-1618307427794-0', ub_slot4, ['/21928950349/tv9marathi.com_ipl_300x250']);
          }
        });
      });
    }
  }
  // else {
  //   apSlotTemp = {
  //     slotID: 'div-gpt-ad-1618307454537-0',
  //     slotName: '/21928950349/tv9marathi.com_ipl_320x50',
  //     sizes: div_1_sizes,
  //   }
  //   apSlots.push(apSlotTemp);
  //
  //   mappings.slotNumbers.push(8);
  //   mappings.adCode.push('/21928950349/tv9marathi.com_ipl_320x50');
  //   mappings.sizes.push(div_1_sizes);
  //   mappings.adId.push('div-gpt-ad-1618307454537-0');
  //   googletag.cmd.push(function() {
  //     callAPStagBids(); //Ap part
  //     callAPSAds(mappings.adCode, mappings.slots);
  //     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //       if (event.slot === ub_slot8) {
  //         ub_checkAdRendered('div-gpt-ad-1618307454537-0', ub_slot8, ['/21928950349/tv9marathi.com_ipl_320x50']);
  //       }
  //     });
  //   });
  // }
}
if (botsiteurl == 'tv9telugu.com') {
  if (mobileCheck()) {
    if (document.getElementById('ub-ads')) {
      apSlotTemp = {
        slotID: 'div-gpt-ad-1618307494648-0',
        slotName: '/21928950349/tv9telugu.com_ipl_300x250',
        sizes: mappings.sizes,
      }
      apSlots.push(apSlotTemp);

      mappings.slotNumbers.push(5);
      mappings.adCode.push('/21928950349/tv9telugu.com_ipl_300x250');
      mappings.sizes.push(div_2_sizes);
      mappings.adId.push('div-gpt-ad-1618307494648-0');
      googletag.cmd.push(function() {
        callAPStagBids(); //Ap part
        callAPSAds(mappings.adCode, mappings.slots);
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot5) {
            ub_checkAdRendered('div-gpt-ad-1618307494648-0', ub_slot5, ['/21928950349/tv9telugu.com_ipl_300x250']);
          }
        });
      });
    }
  }
  // else {
  //   apSlotTemp = {
  //     slotID: 'div-gpt-ad-1618307531030-0',
  //     slotName: '/21928950349/tv9telugu.com_ipl_320x50',
  //     sizes: div_1_sizes,
  //   }
  //   apSlots.push(apSlotTemp);
  //
  //   mappings.slotNumbers.push(10);
  //   mappings.adCode.push('/21928950349/tv9telugu.com_ipl_320x50');
  //   mappings.sizes.push(div_1_sizes);
  //   mappings.adId.push('div-gpt-ad-1618307531030-0');
  //   googletag.cmd.push(function() {
  //     callAPStagBids(); //Ap part
  //     callAPSAds(mappings.adCode, mappings.slots);
  //     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //       if (event.slot === ub_slot10) {
  //         ub_checkAdRendered('div-gpt-ad-1618307531030-0', ub_slot10, ['/21928950349/tv9telugu.com_ipl_320x50']);
  //       }
  //     });
  //   });
  // }
}
if (botsiteurl == 'www.tv9bangla.com') {
  if (mobileCheck()) {
    if (document.getElementById('ub-ads')) {
      apSlotTemp = {
        slotID: 'div-gpt-ad-1618386943569-0',
        slotName: '/21928950349/tv9bangla.com_ipl_300x250',
        sizes: mappings.sizes,
      }
      apSlots.push(apSlotTemp);

      mappings.slotNumbers.push(6);
      mappings.adCode.push('/21928950349/tv9bangla.com_ipl_300x250');
      mappings.sizes.push(div_2_sizes);
      mappings.adId.push('div-gpt-ad-1618386943569-0');
      googletag.cmd.push(function() {
        callAPStagBids(); //Ap part
        callAPSAds(mappings.adCode, mappings.slots);
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot6) {
            ub_checkAdRendered('div-gpt-ad-1618386943569-0', ub_slot6, ['/21928950349/tv9bangla.com_ipl_300x250']);
          }
        });
      });
    }
  }
  // else {
  //   apSlotTemp = {
  //     slotID: 'div-gpt-ad-1618386989043-0',
  //     slotName: '/21928950349/tv9bangla.com_ipl_320x50',
  //     sizes: div_1_sizes,
  //   }
  //   apSlots.push(apSlotTemp);
  //
  //   mappings.slotNumbers.push(12);
  //   mappings.adCode.push('/21928950349/tv9bangla.com_ipl_320x50');
  //   mappings.sizes.push(div_1_sizes);
  //   mappings.adId.push('div-gpt-ad-1618386989043-0');
  //   googletag.cmd.push(function() {
  //     callAPStagBids(); //Ap part
  //     callAPSAds(mappings.adCode, mappings.slots);
  //     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //       if (event.slot === ub_slot12) {
  //         ub_checkAdRendered('div-gpt-ad-1618386989043-0', ub_slot12, ['/21928950349/tv9bangla.com_ipl_320x50']);
  //       }
  //     });
  //   });
  // }
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
// setTimeout(function() {
//     initAdserver();
// }, FAILSAFE_TIMEOUT);
