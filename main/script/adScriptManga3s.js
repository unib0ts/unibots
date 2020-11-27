if(typeof customConfigObjectA === 'undefined'){
  unibots1 = '<div id="div-gpt-ad-1599019722874-0">';
  unibots2 = '<div id="div-gpt-ad-1599019772462-0">';
  unibots3 = '<div id="div-gpt-ad-1599019789379-0">';
  unibots4 = '<div id="div-gpt-ad-1599019814791-0">';
  unibots5 = '<div id="div-gpt-ad-1599019831646-0">';
  unibots6 = '<div id="div-gpt-ad-1599019854452-0">';
  unibots7 = '<div id="div-gpt-ad-1599019871107-0">';
  unibots8 = '<div id="div-gpt-ad-1599019902593-0">';
  unibots9 = '<div id="div-gpt-ad-1599019920702-0">';
  unibots10 = '<div id="div-gpt-ad-1599053053100-0">';
  mybotcentersticky_mob = '<div id="div-gpt-ad-1599053074257-0">';

  if (mobileCheck()) {
    z1= document.createElement('div');
    z1.id = 'ub-sticky-ad-container';
    z1.className = 'ub-sticky-ad-container';
    z1.innerHTML ='<span class="close_ub-sticky-ad" id="close_ub-sticky-ad" onclick="mybotubstickyad()">\u0078</span><div class="ub-sticky-ad" id="mobilesticky"></div';
    x1 = document.querySelector('body');
    x1.appendChild(z1);
    document.getElementById('mobilesticky').innerHTML=mybotcentersticky_mob;
  }
  if (document.getElementById('unibots1')) {
    document.getElementById('unibots1').innerHTML = unibots1;
  }
  if (document.getElementById('unibots2')) {
    document.getElementById('unibots2').innerHTML = unibots2;
  }
  if (document.getElementById('unibots3')) {
    document.getElementById('unibots3').innerHTML = unibots3;
  }
	if (document.getElementById('unibots4')) {
		document.getElementById('unibots4').innerHTML = unibots4;
	}
	if (document.getElementById('unibots5')) {
		document.getElementById('unibots5').innerHTML = unibots5;
	}
	if (document.getElementById('unibots6')) {
		document.getElementById('unibots6').innerHTML = unibots6;
	}
  if (document.getElementById('unibots7')) {
    document.getElementById('unibots7').innerHTML = unibots7;
  }
  if (document.getElementById('unibots8')) {
    document.getElementById('unibots8').innerHTML = unibots8;
  }
  if (document.getElementById('unibots9')) {
    document.getElementById('unibots9').innerHTML = unibots9;
  }
	if (document.getElementById('unibots10')) {
		document.getElementById('unibots10').innerHTML = unibots10;
	}


  // var s3 = document.createElement('script');
  // s3.setAttribute("data-ad-client", "ca-pub-6376205116838079");
  // s3.async = true;
  // s3.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  // document.getElementsByTagName('head')[0].appendChild(s3);

	var s0 = document.createElement('script');
	s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
	s0.type = "text/javascript";
	document.getElementsByTagName('head')[0].appendChild(s0);

  var s1 = document.createElement('script');
  s1.async = "async";
  s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
  s1.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(s1);

  var div_1_sizes = [[300, 250], [336, 280]];
  var div_2_sizes = [[300, 250], [336, 280]];
  var div_3_sizes = [[300, 250], [336, 280]];
  var div_4_sizes = [[300, 250], [336, 280]];
  var div_5_sizes = [[300, 250], [336, 280]];
  var div_6_sizes = [[300, 250], [336, 280]];
  var div_7_sizes = [[300, 250], [336, 280]];
  var div_8_sizes = [[300, 250], [336, 280]];
  var div_9_sizes = [[300, 250], [336, 280]];
  var div_10_sizes = [[300, 250], [336, 280]];
  var div_11_sizes = [320, 50];

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

  if (document.getElementById('unibots1')) {
    adUnits1 =
      {
        code: '/21957769615/wakamics.com_hb_320x50_1',
        mediaTypes: {
            banner: {
                sizes: div_1_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '20118144' } }, /* one placementId for all sizes  my appnexus bidder */
          // { bidder: 'sovrn', params: {tagid: '736637'} },
          // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952064'} },
         // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
          // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22100091150'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
         //  { bidder: 'criteo', params: {networkId: '10542'} },
         //   { bidder: 'criteointl', params: {networkId: '10545'} },
            { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAll: ["US", "CA"] },
         //   // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
           { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots2')) {
    adUnits1 =
      {
        code: '/21957769615/wakamics.com_hb_320x50_2',
        mediaTypes: {
            banner: {
                sizes: div_2_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '20118144' } }, /* one placementId for all sizes  my appnexus bidder */
         // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         //    { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952065'} },
         // // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
         //  { bidder: 'sovrn', params: {tagid: '736644'} },
         //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            { bidder: 'nobid', params: { siteId : '22100091150'} },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
         //  { bidder: 'criteo', params: {networkId: '10542'} },
         //  { bidder: 'criteointl', params: {networkId: '10545'} },
         { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAll: ["US", "CA"] },
         //  // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots3')) {
    adUnits1 =
      {
        code: '/21957769615/wakamics.com_hb_320x50_3',
        mediaTypes: {
            banner: {
                sizes: div_3_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '20118144' } }, /* one placementId for all sizes  my appnexus bidder */
         // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         //  { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952068'} },
         // // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
         //  { bidder: 'sovrn', params: {tagid: '736651'} },
         //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22100091150'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
         //  { bidder: 'criteo', params: {networkId: '10542'} },
         //  { bidder: 'criteointl', params: {networkId: '10545'} },
         { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAll: ["US", "CA"] },
         //  { bidder: 'sonobi', params: { placement_id: '7aa56dd0b957bb9d3464', ad_unit: 'beanstalkmums.com.au_nb_468x60' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots4')) {
    adUnits1 =
      {
        code: '/21957769615/wakamics.com_hb_160x600_4',
        mediaTypes: {
            banner: {
                sizes: div_4_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '20118144' } }, /* one placementId for all sizes  my appnexus bidder */
          // { bidder: 'sovrn', params: {tagid: '736637'} },
          // { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952064'} },
         // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
          // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22100091150'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
         //  { bidder: 'criteo', params: {networkId: '10542'} },
         //   { bidder: 'criteointl', params: {networkId: '10545'} },
         { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93417', domain: 'https://prg8.smartadserver.com' }, labelAll: ["US", "CA"] },
         //   // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
           { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots5')) {
    adUnits1 =
      {
        code: '/21957769615/wakamics.com_hb_160x600_5',
        mediaTypes: {
            banner: {
                sizes: div_5_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '20118144' } }, /* one placementId for all sizes  my appnexus bidder */
         // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         //    { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952065'} },
         // // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
         //  { bidder: 'sovrn', params: {tagid: '736644'} },
         //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
             { bidder: 'nobid', params: { siteId : '22100091150'} },
             { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
         //  { bidder: 'criteo', params: {networkId: '10542'} },
         //  { bidder: 'criteointl', params: {networkId: '10545'} },
         { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93417', domain: 'https://prg8.smartadserver.com' }, labelAll: ["US", "CA"] },
         //  // { bidder: 'sonobi', params: { placement_id: 'ad2da076b5873229ffa5', ad_unit: 'beanstalkmums.com.au_nb_728x90' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots6')) {
    adUnits1 =
      {
        code: '/21957769615/wakamics.com_hb_336x280_6',
        mediaTypes: {
            banner: {
                sizes: div_6_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '20118144' } }, /* one placementId for all sizes  my appnexus bidder */
         // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         //  { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952068'} },
         // // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
         //  { bidder: 'sovrn', params: {tagid: '736651'} },
         //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22100091150'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
         //  { bidder: 'criteo', params: {networkId: '10542'} },
         //  { bidder: 'criteointl', params: {networkId: '10545'} },
         { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93418', domain: 'https://prg8.smartadserver.com' }, labelAll: ["US", "CA"] },
         //  { bidder: 'sonobi', params: { placement_id: '7aa56dd0b957bb9d3464', ad_unit: 'beanstalkmums.com.au_nb_468x60' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots7')) {
    adUnits1 =
      {
        code: '/21957769615/wakamics.com_hb_336x280_7',
        mediaTypes: {
            banner: {
                sizes: div_7_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '20118144' } }, /* one placementId for all sizes  my appnexus bidder */
         // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         //  { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952068'} },
         // // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
         //  { bidder: 'sovrn', params: {tagid: '736651'} },
         //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22100091150'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
         //  { bidder: 'criteo', params: {networkId: '10542'} },
         //  { bidder: 'criteointl', params: {networkId: '10545'} },
         { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93418', domain: 'https://prg8.smartadserver.com' }, labelAll: ["US", "CA"] },
         //  { bidder: 'sonobi', params: { placement_id: '7aa56dd0b957bb9d3464', ad_unit: 'beanstalkmums.com.au_nb_468x60' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots8')) {
    adUnits1 =
      {
        code: '/21957769615/wakamics.com_hb_300x250_8',
        mediaTypes: {
            banner: {
                sizes: div_8_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '20118144' } }, /* one placementId for all sizes  my appnexus bidder */
         // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         //  { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952068'} },
         // // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
         //  { bidder: 'sovrn', params: {tagid: '736651'} },
         //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22100091150'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
         //  { bidder: 'criteo', params: {networkId: '10542'} },
         //  { bidder: 'criteointl', params: {networkId: '10545'} },
         { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAll: ["US", "CA"] },
         //  { bidder: 'sonobi', params: { placement_id: '7aa56dd0b957bb9d3464', ad_unit: 'beanstalkmums.com.au_nb_468x60' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots9')) {
    adUnits1 =
      {
        code: '/21957769615/wakamics.com_hb_300x250_9',
        mediaTypes: {
            banner: {
                sizes: div_8_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '20118144' } }, /* one placementId for all sizes  my appnexus bidder */
         // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         //  { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952068'} },
         // // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
         //  { bidder: 'sovrn', params: {tagid: '736651'} },
         //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22100091150'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
         //  { bidder: 'criteo', params: {networkId: '10542'} },
         //  { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAll: ["US", "CA"] },
         //  { bidder: 'sonobi', params: { placement_id: '7aa56dd0b957bb9d3464', ad_unit: 'beanstalkmums.com.au_nb_468x60' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }
  if (document.getElementById('unibots10')) {
    adUnits1 =
      {
        code: '/21957769615/wakamics.com_hb_300x250_10',
        mediaTypes: {
            banner: {
                sizes: div_10_sizes
            }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '20118144' } }, /* one placementId for all sizes  my appnexus bidder */
         // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
         //  { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952068'} },
         // // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
         // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
         //  { bidder: 'sovrn', params: {tagid: '736651'} },
         //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
         // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
         // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
          { bidder: 'nobid', params: { siteId : '22100091150'} },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
         //  { bidder: 'criteo', params: {networkId: '10542'} },
         //  { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAll: ["US", "CA"] },
         //  { bidder: 'sonobi', params: { placement_id: '7aa56dd0b957bb9d3464', ad_unit: 'beanstalkmums.com.au_nb_468x60' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
        ]
    };
    adUnits.push(adUnits1);
  }

  if (typeof mobileCheck === "function") {
    if (mobileCheck()) {
      adUnits1 =
        {
          code: '/21957769615/wakamics.com_hb_300x250_11',
          mediaTypes: {
              banner: {
                  sizes: div_11_sizes
              }
          },
          bids: [
              { bidder: 'appnexus', params: { placementId: '20118144' } }, /* one placementId for all sizes  my appnexus bidder */
           // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
           //  { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2952068'} },
           // // { bidder: '33across', params: { siteId : 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab' } }, /*All sizes*/
           // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
           //  { bidder: 'sovrn', params: {tagid: '736651'} },
           //  // { bidder: 'openx', params: {unit: '541046026', delDomain: 'yieldbird-d.openx.net'} },
           // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
           // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
            { bidder: 'nobid', params: { siteId : '22100091150'} },
            { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
           //  { bidder: 'criteo', params: {networkId: '10542'} },
           //  { bidder: 'criteointl', params: {networkId: '10545'} },
            { bidder: 'smartadserver', params: { siteId: '369199', pageId: '1301296', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAll: ["US", "CA"] },
           //  { bidder: 'sonobi', params: { placement_id: '7aa56dd0b957bb9d3464', ad_unit: 'beanstalkmums.com.au_nb_468x60' } },
            { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
            // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
            // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
          ]
      };
      adUnits.push(adUnits1);
    }
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
        publisherDomain: 'https://manga3s.com/',
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
    renderedFlag: [false, false, false, false, false, false, false, false, false, false, false]
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
                googletag.pubads().refresh(ub_slot);
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

  if (document.getElementById('unibots1')){
   mappings.slotNumbers.push(1);
   mappings.adCode.push('/21957769615/wakamics.com_hb_320x50_1');
   mappings.sizes.push(div_1_sizes);
   mappings.adId.push('div-gpt-ad-1599019722874-0');
   googletag.cmd.push(function() {
       googletag.pubads().addEventListener('slotRenderEnded', function(event) {
         if (event.slot === ub_slot1) {
           ub_checkAdRendered('div-gpt-ad-1599019722874-0', ub_slot1, ['/21957769615/wakamics.com_hb_320x50_1']);
         }
       });
   });
  }
  if (document.getElementById('unibots2')){
   mappings.slotNumbers.push(2);
   mappings.adCode.push('/21957769615/wakamics.com_hb_320x50_2');
   mappings.sizes.push(div_2_sizes);
   mappings.adId.push('div-gpt-ad-1599019772462-0');
    googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot2) {
            ub_checkAdRendered('div-gpt-ad-1599019772462-0', ub_slot2, ['/21957769615/wakamics.com_hb_320x50_2']);
          }
        });
    });
   }
  if (document.getElementById('unibots3')){
    mappings.slotNumbers.push(3);
    mappings.adCode.push('/21957769615/wakamics.com_hb_320x50_3');
    mappings.sizes.push(div_3_sizes);
    mappings.adId.push('div-gpt-ad-1599019789379-0');
    googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot3) {
            ub_checkAdRendered('div-gpt-ad-1599019789379-0', ub_slot3, ['/21957769615/wakamics.com_hb_320x50_3']);
          }
        });
    });
   }
  if (document.getElementById('unibots4')){
    mappings.slotNumbers.push(4);
    mappings.adCode.push('/21957769615/wakamics.com_hb_160x600_4');
    mappings.sizes.push(div_4_sizes);
    mappings.adId.push('div-gpt-ad-1599019814791-0');
    googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot4) {
            ub_checkAdRendered('div-gpt-ad-1599019814791-0', ub_slot4, ['/21957769615/wakamics.com_hb_160x600_4']);
          }
        });
    });
   }
  if (document.getElementById('unibots5')){
    mappings.slotNumbers.push(5);
    mappings.adCode.push('/21957769615/wakamics.com_hb_160x600_5');
    mappings.sizes.push(div_5_sizes);
    mappings.adId.push('div-gpt-ad-1599019831646-0');
     googletag.cmd.push(function() {
         googletag.pubads().addEventListener('slotRenderEnded', function(event) {
           if (event.slot === ub_slot5) {
             ub_checkAdRendered('div-gpt-ad-1599019831646-0', ub_slot5, ['/21957769615/wakamics.com_hb_160x600_5']);
           }
         });
     });
    }
  if (document.getElementById('unibots6')){
     mappings.slotNumbers.push(6);
     mappings.adCode.push('/21957769615/wakamics.com_hb_336x280_6');
     mappings.sizes.push(div_6_sizes);
     mappings.adId.push('div-gpt-ad-1599019854452-0');
     googletag.cmd.push(function() {
         googletag.pubads().addEventListener('slotRenderEnded', function(event) {
           if (event.slot === ub_slot6) {
             ub_checkAdRendered('div-gpt-ad-1599019854452-0', ub_slot6, ['/21957769615/wakamics.com_hb_336x280_6']);
           }
         });
     });
    }
  if (document.getElementById('unibots7')){
  mappings.slotNumbers.push(7);
  mappings.adCode.push('/21957769615/wakamics.com_hb_336x280_7');
  mappings.sizes.push(div_7_sizes);
  mappings.adId.push('div-gpt-ad-1599019871107-0');
  googletag.cmd.push(function() {
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.slot === ub_slot7) {
          ub_checkAdRendered('div-gpt-ad-1599019871107-0', ub_slot7, ['/21957769615/wakamics.com_hb_336x280_7']);
        }
      });
  });
  }
  if (document.getElementById('unibots8')){
       mappings.slotNumbers.push(8);
       mappings.adCode.push('/21957769615/wakamics.com_hb_300x250_8');
       mappings.sizes.push(div_8_sizes);
       mappings.adId.push('div-gpt-ad-1599019902593-0');
       googletag.cmd.push(function() {
           googletag.pubads().addEventListener('slotRenderEnded', function(event) {
             if (event.slot === ub_slot8) {
               ub_checkAdRendered('div-gpt-ad-1599019902593-0', ub_slot8, ['/21957769615/wakamics.com_hb_300x250_8']);
             }
           });
       });
      }
  if (document.getElementById('unibots9')){
           mappings.slotNumbers.push(9);
           mappings.adCode.push('/21957769615/wakamics.com_hb_300x250_9');
           mappings.sizes.push(div_9_sizes);
           mappings.adId.push('div-gpt-ad-1599019920702-0');
           googletag.cmd.push(function() {
               googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                 if (event.slot === ub_slot9) {
                   ub_checkAdRendered('div-gpt-ad-1599019920702-0', ub_slot9, ['/21957769615/wakamics.com_hb_300x250_9']);
                 }
               });
           });
          }
  if (document.getElementById('unibots10')){
     mappings.slotNumbers.push(10);
     mappings.adCode.push('/21957769615/wakamics.com_hb_300x250_10');
     mappings.sizes.push(div_10_sizes);
     mappings.adId.push('div-gpt-ad-1599053053100-0');
     googletag.cmd.push(function() {
         googletag.pubads().addEventListener('slotRenderEnded', function(event) {
           if (event.slot === ub_slot10) {
             ub_checkAdRendered('div-gpt-ad-1599053053100-0', ub_slot10, ['/21957769615/wakamics.com_hb_300x250_10']);
           }
         });
     });
    }

  if(typeof mobileCheck === "function"){
    if (mobileCheck()){
      mappings.slotNumbers.push(11);
      mappings.adCode.push('/21957769615/wakamics.com_hb_300x250_11');
      mappings.sizes.push(div_11_sizes);
      mappings.adId.push('div-gpt-ad-1599053074257-0');
      googletag.cmd.push(function() {
          googletag.pubads().addEventListener('slotRenderEnded', function(event) {
            if (event.slot === ub_slot11) {
              ub_checkAdRendered('div-gpt-ad-1599053074257-0', ub_slot11, ['/21957769615/wakamics.com_hb_300x250_11']);
            }
          });
      });
    }
  }

  if(typeof googletag.defineSlot === "function"){
    googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
    googlePush();
  }
  else{
    setTimeout(function(){
      googletag.cmd.push(function() {
        googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
        googlePush();
      });
      // googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
      // googlePush();
    }, 500);
  }
  setTimeout(function() {
      initAdserver();
  }, FAILSAFE_TIMEOUT);


//custom function for mybotsticky_rb
  function mybotubstickyad() {
     document.getElementById('ub-sticky-ad-container').style.display='none';
  }

//   function mybotubstickyadDesk() {
//      document.getElementById('ub-sticky-ad-containerdesk').style.display='none';
//   }
//
//   function loadAd(id, adUnits){
//   	var elm = document.getElementById(id);
//   	var scripts = Array(elm.querySelectorAll("script"));
//   	scripts = scripts[0];
//   	for(var i=0; i<scripts.length; i++) {
//   		oldScript = scripts[i];
//   		const newScript = document.createElement("script");
//   		var scriptAttr = Array(oldScript.attributes);
//   		scriptAttr = scriptAttr[0];
//   		for(var j=0; j<scriptAttr.length; j++) {
//   			attr = scriptAttr[j];
//   			newScript.setAttribute(attr.name, attr.value);
//   		}
//       newScript.appendChild(document.createTextNode(oldScript.innerHTML));
//   		newScript.onload = function() {
//   			if(adUnits !== undefined) {
//   				smartyads.buildUnits(adUnits);
//   			}
//   		};
//       oldScript.parentNode.replaceChild(newScript, oldScript);
//   	}
// }

}
