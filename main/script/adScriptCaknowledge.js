!function(){var b="1.10",U="https://api.assertcom.de";function N(e,t){try{var n=t?"POST":"GET",i=new XMLHttpRequest;i.open(n,e,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(t)}catch(e){}}function R(e){console.error(e),e.meta_host=window.location.host,e.meta_url=window.location.href,e.meta_version=b,e.meta_entityId=assertive_entityId,N(U+"/error.php",JSON.stringify(e,Object.getOwnPropertyNames(e)))}function S(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}try{var t="assertive_analytics_",T=O(),D={},r={},n=n||localStorage.getItem("assertiveYield")&&-1!==localStorage.getItem("assertiveYield").indexOf("debug")||-1!==d("assertiveYield").indexOf("debug");function i(e){return t.concat(e)}function a(e,t){return localStorage.setItem(i(e),t)}function P(e){return localStorage.getItem(i(e))}function u(e){return localStorage.removeItem(i(e))}function E(e){e=i(e);var t=Number(localStorage.getItem(e))||0;return localStorage.setItem(e,++t),t}function e(e){if(E(e+"PageViewN"),"client"!==e||!P(e+"UUID")){if("session"===e){if(P(e+"UUID")&&P(e+"Timeout")&&Date.now()<Number(P(e+"Timeout")))return void a(e+"Timeout",Date.now()+18e5);a(e+"Timeout",Date.now()+18e5)}a(e+"UUID",O()),a(e+"Random",Math.random()),document.referrer?a(e+"Referrer",document.referrer):u(e+"Referrer"),a(e+"EntryPathname",window.location.pathname);var t=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],n={};for(var i in t){var r=t[i],s=d(r);""!==s&&(n[r]=s)}var o=JSON.stringify(n);o!==JSON.stringify({})?a(e+"UTM",o):u(e+"UTM"),a(e+"ImpressionN",1),a(e+"PageViewN",1),"session"===e&&E("clientSessionN")}}function O(e){return e?(e^(window&&window.crypto&&window.crypto.getRandomValues?crypto.getRandomValues(new Uint8Array(1))[0]%16:16*Math.random())>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,O)}function d(e){return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+escape(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}function A(e){n&&console.log(e)}function s(e,t){var n=D[e];if(n){var i=n.impressionUUID+":"+t;r[i]||(r[i]=!0,n.event=t,N(U+"/meta",JSON.stringify(n)))}}e("client"),e("session"),-1!==d("assertiveYield").indexOf("check")&&alert("Assertive Yield: Check"),("undefined"==typeof assertive_sampleRate||assertive_sampleRate&&P("sessionRandom")<assertive_sampleRate)&&function e(){if(o)return;if("undefined"==typeof googletag||!googletag.pubadsReady)return void setTimeout(e,20);o=!0;var w=null;window.addEventListener("blur",function(){w&&s(w,"click")});googletag.cmd.push(function(){try{googletag.pubads().addEventListener("slotRenderEnded",function(e){try{if(e.isEmpty)return;if("undefined"==typeof assertive_entityId)return void console.error("Assertive Yield: Entity ID is mandatory and not defined, exiting...");E("clientImpressionN"),E("sessionImpressionN");var t=e.slot,n=t.getSlotElementId(),i=t.getAdUnitPath(),r=document.getElementById(n),s=O();if(!r)return;var o=r.getElementsByTagName("iframe")[0];o.addEventListener("mouseover",function(){w=n}),o.addEventListener("touchstart",function(){w=n}),o.addEventListener("mouseout",function(){w=null}),o.addEventListener("touchend",function(){w=null});var a,u,d=t.getHtml(),l=/(?:(?:ubpbjs\.renderAd\(document, |adId: |hb_adid":\[)|(?:pbadid=))['"](.*?)["']/gi.exec(d),c=l?l[1]:t.getTargeting("hb_adid")[0],m=!!l;if(c){var p=null;S(ubpbjs.adUnits,function(e){return e.code===n})?p=n:S(ubpbjs.adUnits,function(e){return e.code===i})&&(p=i);var f=ubpbjs.getBidResponsesForAdUnitCode(p).bids||[];if(!f.length)for(var g in u=ubpbjs.getBidResponses())if(u.hasOwnProperty(g)){var v=u[g].bids;for(var _ in v)v.hasOwnProperty(_)&&f.push(v[_])}a=S(f,function(e){return e.adId===c})||null}u=(u=a?f.filter(function(e){return e.auctionId===a.auctionId}):[]).map(function(e){var t=JSON.parse(JSON.stringify(e));return delete t.ad,t}),A("Session UUID: "+P("sessionUUID")+", PageView UUID: "+T+", Impression UUID: "+s+", AdId: "+c),A("Slot Id: "+n+", AdUnitPath: "+i),a&&A(" - Highest Prebid "+a.cpm+" from "+a.bidderCode+" with id "+c),a||A(" - No PreBids!!!"),A(" - Winner: "+(m?"prebid":"dfp (Direct/AdX/AdSense)")+" with size "+(m&&a?a.width:e.size[0])+"x"+(m&&a?a.height:e.size[1])),A("---------------");var y=null,I=null;a&&(a.appnexus?y=a.appnexus.buyerMemberId?a.appnexus.buyerMemberId:null:a.rubicon&&(y=a.rubicon.networkId?a.rubicon.networkId:null,I=a.rubicon.advertiserId?a.rubicon.advertiserId:null));var h={version:b,entityId:assertive_entityId,siteUUID:"undefined"!=typeof assertive_siteUUID?assertive_siteUUID:null,clientUUID:P("clientUUID"),sessionUUID:P("sessionUUID"),pageViewUUID:T,impressionUUID:s,slotId:n,adUnitPath:i,dfpResponseInformation:t.getResponseInformation()||null,dfpTargetingMap:t.getTargetingMap()||null,highestBid:a,bidResponses:u,highestPreBid:a?a.cpm:0,highestPreBid_partner:a?a.bidderCode:"",buyerId:y,brandId:I,dealId:a&&a.dealId?a.dealId:null,creativeId:a&&a.creativeId?a.creativeId:null,mediaType:a&&a.mediaType?a.mediaType:null,source:a&&a.source?a.source:null,currency:a&&a.currency?a.currency:null,netRevenue:a&&a.netRevenue?a.netRevenue:null,creative_width:m&&a?a.width:e.size[0],creative_height:m&&a?a.height:e.size[1],preBidWon:m,timeToRespond:a?a.timeToRespond:null,protocol:window.location.protocol,host:window.location.host,pathname:window.location.pathname,pathname_split:window.location.pathname.split("/").filter(function(e){return!!e}),referrer:P("sessionReferrer"),utm:P("sessionUTM"),entryPathname:P("sessionEntryPathname"),impressionCount:Number(P("sessionImpressionN"))||null,pageViewCount:Number(P("sessionPageViewN"))||null,client_referrer:P("clientReferrer"),client_utm:P("clientUTM"),client_entryPathname:P("clientEntryPathname"),client_impressionCount:Number(P("clientImpressionN"))||null,client_pageViewCount:Number(P("clientPageViewN"))||null,client_sessionCount:Number(P("clientSessionN"))||null,prebid_timeout:assertive_timeout||null,prebid_version:ubpbjs.version||null,userState:"undefined"!=typeof assertive_userState?assertive_userState:null,layout:"undefined"!=typeof assertive_layout?assertive_layout:null,custom_1:"undefined"!=typeof assertive_custom_1?assertive_custom_1:null,custom_2:"undefined"!=typeof assertive_custom_2?assertive_custom_2:null,custom_3:"undefined"!=typeof assertive_custom_3?assertive_custom_3:null,custom_4:"undefined"!=typeof assertive_custom_4?assertive_custom_4:null,custom_5:"undefined"!=typeof assertive_custom_5?assertive_custom_5:null,bps_type:t.getTargeting("ay_bid")[0]||null,bps_algo:t.getTargeting("ay_algo")[0]||null};D[n]=h,N(U,JSON.stringify(h)),A("SENT!!!")}catch(e){R(e)}}),googletag.pubads().addEventListener("impressionViewable",function(e){try{var t=e.slot.getSlotElementId();s(t,"activeView")}catch(e){R(e)}})}catch(e){R(e)}})}();var o=!1}catch(e){R(e)}}();

var div_1_sizes = [320, 50];
var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
// var REFRESH_TIMEOUT = 40000;

//ASSERTIVE ANALYTICS SETTINGS - Version: 1.4.0
var assertive_entityId = "RGGawtDSXrzZMwRRk";
var assertive_debug = 0; // append the query string 'assertiveYield=debug' or add this local storage entry 'localStorage.setItem("assertiveYield", "debug")' to enable dynamically
var assertive_sampleRate = 0.1; // 1 = 100%, 0.2 = 20%...
var assertive_timeout = null;
var assertive_layout = null;
var assertive_userState = null;
//var assertive_custom_1 = null;
var assertive_custom_2 = null;
var assertive_custom_3 = null;
var assertive_custom_4 = null;
var assertive_custom_5 = null;
//example of supplying a custom var from a prev. defined var
assertive_timeout = PREBID_TIMEOUT;

const customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $5, 1-cent increments
    }]
};

var adUnits = [{
  code: '/21956916242/caknowledge.com_NB_320x50',
  mediaTypes: {
	  banner: {
		  sizes: div_1_sizes
	  }
  },
  bids: [
    {	bidder: 'eplanning', params: {ci: '2cfed', ml: '1'} }
  ]
}];

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];

ubpbjs.que.push(function() {
  ubpbjs.addAdUnits(adUnits);
  ubpbjs.setConfig({
    priceGranularity: customConfigObjectA,
    s2sConfig: {
      accountId: '',
      enabled: false,
      bidders: ['sovrn', 'openx','sharethrough'],
      timeout: PREBID_TIMEOUT-300,
      adapter: 'prebidServer',
      endpoint: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
      syncEndpoint: 'https://prebid.adnxs.com/pbs/v1/cookie_sync',
      cookieSet: true,
      cookiesetUrl: 'https://acdn.adnxs.com/cookieset/cs.js'
    },
    userSync: {
      iframeEnabled: true,
      syncsPerBidder: 999, // and no more than 3 syncs at a time
      syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
      filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
      // enableOverride: true // publisher will call `ubpbjs.triggerUserSyncs()'
    },
    debug: true,
    useBidCache: false,
    enableSendAllBids: false, // Default will be `true` as of 1.0
    bidderSequence: 'random', // Default is random
    publisherDomain: 'https://caknowledge.com/',
    bidderTimeout: PREBID_TIMEOUT+500,
    //pubcid: {expInterval: },
    //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
   });
  ubpbjs.requestBids({
    bidsBackHandler: initAdserver,
    timeout: PREBID_TIMEOUT
  });
});

function initAdserver() {
  if (ubpbjs.initAdserverSet) return;
  ubpbjs.initAdserverSet = true;
  googletag.cmd.push(function() {
    ubpbjs.que.push(function() {
        ubpbjs.setTargetingForGPTAsync();
        googletag.pubads().refresh([ub_slot1]);
    });
  });
}

setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);

var ub_slot1;
googletag.cmd.push(function() {
  ub_slot1 = googletag.defineSlot('/21956916242/caknowledge.com_NB_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
  googletag.pubads().collapseEmptyDivs(true);
  googletag.pubads().setCentering(true);
  googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
  // googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //     if (event.slot === ub_slot1) {
  //       ub_checkAdRendered();
  //     }
  // });
});

// function refreshBid() {
//   ubpbjs.que.push(function() {
// 	  ubpbjs.requestBids({
// 		  timeout: PREBID_TIMEOUT,
// 		  adUnitCodes: ['/21956916242/caknowledge.com_NB_320x50'],
// 		  bidsBackHandler: function() {
// 			  ubpbjs.setTargetingForGPTAsync(['/21956916242/caknowledge.com_NB_320x50']);
// 			  googletag.pubads().refresh([slot1]);
// 		  }
// 	  });
//   });
// }
//
// ub_adRefreshFlag = 0;
// function ub_checkAdRendered(){
// 	adId = 'div-ub-1';
// 	var nodes = document.getElementById(adId).childNodes[0].childNodes;
// 	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
//     if(ub_adRefreshFlag != 1){
//       setInterval(function() {
//         ub_adRefreshFlag = 1;
//         refreshBid();
//       }, REFRESH_TIMEOUT);
//     }
// 	 }
// }
