!function(e,a,d,s,i,r,t){function n(d,s){a[e]._Q.push([d,s])}a[e]||(a[e]={init:function(){n("i",arguments)},fetchBids:function(){n("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]},(r=d.createElement(s)).async=!0,r.src="//c.amazon-adsystem.com/aax2/apstag.js",(t=d.getElementsByTagName(s)[0]).parentNode.insertBefore(r,t))}("apstag",window,document,"script");var requestManager={adserverRequestSent:!1,aps:!1,prebid:!1};apstag.init({pubID:"5d8da970-719a-4a86-9bd0-adf1589f8c5e",adServer:"googletag"}),apSlots=[];var PREBID_TIMEOUT=2e3,FAILSAFE_TIMEOUT=3e3,REFRESH_TIMEOUT=6e4,GEO_CODE="";!function(){var e=new XMLHttpRequest;url="https://pro.ip-api.com/json/?fields=status,message,countryCode&key=LWKtz4EzQwMJRyQ",e.open("GET",url,!0),e.onload=function(){if(e.status>=200&&e.status<400){var a=e.responseText;"success"==(a=JSON.parse(a)).status?GEO_CODE=a.countryCode:console.error("Geo Request Failed")}else console.error("Request failed from server");mainHbRun()},e.onerror=function(){console.error("Request failed to Reach GEO Server"),mainHbRun()},e.send()}();const customConfigObjectA={buckets:[{precision:2,min:0,max:20,increment:.01}]};var div_1_sizes=[320,50],adUnits=[{code:"/21959913182/sakshi.com_NB_320x50",mediaTypes:{native:{image:{aspect_ratios:[{min_width:100,min_height:50,ratio_width:2,ratio_height:1}],sendId:!0},title:{len:50,sendId:!0},sponsoredBy:{required:!0,sendId:!0},clickUrl:{required:!0,sendId:!0}}},bids:[{bidder:"appnexus",params:{placementId:"19056673"}},{bidder:"oftmedia",params:{placementId:"18778196"}}]},{code:"/21959913182/sakshi.com_NB_320x50",mediaTypes:{banner:{sizes:div_1_sizes}},bids:[{bidder:"oftmedia",params:{placementId:"18778196"}},{bidder:"eplanning",params:{ci:"2cfed",ml:"1"}},{bidder:"33across",params:{siteId:"bPSPrGBuar6PWLaKlId8sQ",productId:"siab"},labelAll:["US"]},{bidder:"emx_digital",params:{tagid:"97515"}},{bidder:"appnexus",params:{placementId:"19056673"}},{bidder:"sovrn",params:{tagid:"708881"}},{bidder:"openx",params:{unit:"543459652",delDomain:"unibots-d.openx.net"}},{bidder:"nobid",params:{siteId:"21987177881"}},{bidder:"criteo",params:{networkId:"10542"}},{bidder:"criteointl",params:{networkId:"10545"}},{bidder:"adkernel",params:{zoneId:"126007",host:"cpm.fmlabsonline.com"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2932597"}},{bidder:"onetag",params:{pubId:"60c32c42465aac2"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93231",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]}],googletag=googletag||{};googletag.cmd=googletag.cmd||[],googletag.cmd.push(function(){googletag.pubads().disableInitialLoad()});var ubpbjs=ubpbjs||{},ub_slot1;function mainHbRun(){ubpbjs.que.push(function(){ubpbjs.addAdUnits(adUnits),ubpbjs.aliasBidder("criteo","criteointl"),ubpbjs.bidderSettings={appnexus:{bidCpmAdjustment:function(e){return.86*e}},pubmatic:{bidCpmAdjustment:function(e){return.74*e}},rubicon:{bidCpmAdjustment:function(e){return.75*e}},openx:{bidCpmAdjustment:function(e){return.75*e}},criteo:{bidCpmAdjustment:function(e){return.75*e}},criteointl:{bidCpmAdjustment:function(e){return.75*e}},nobid:{bidCpmAdjustment:function(e){return 1*e}},oftmedia:{bidCpmAdjustment:function(e){return.8*e}},sovrn:{bidCpmAdjustment:function(e){return.81*e}},onetag:{bidCpmAdjustment:function(e){return.85*e}},"33across":{bidCpmAdjustment:function(e){return 1*e}},emx_digital:{bidCpmAdjustment:function(e){return 1*e}},rhythmone:{bidCpmAdjustment:function(e){return 1*e}},eplanning:{bidCpmAdjustment:function(e){return 1*e}}},ubpbjs.setConfig({priceGranularity:customConfigObjectA,userSync:{iframeEnabled:!0,syncsPerBidder:999,filterSettings:{iframe:{bidders:[""],filter:"exclude"},image:{bidders:"*",filter:"include"}},userIds:[{name:"id5Id",params:{partner:438},storage:{type:"cookie",name:"id5id.1st",expires:90,refreshInSeconds:28800}}],auctionDelay:500},debug:!1,useBidCache:!0,enableSendAllBids:!1,bidderSequence:"random",publisherDomain:"https://www.sakshi.com/",bidderTimeout:PREBID_TIMEOUT+500}),ubpbjs.requestBids({bidsBackHandler:initAdserver,timeout:PREBID_TIMEOUT,labels:[GEO_CODE]})}),setTimeout(function(){initAdserver()},FAILSAFE_TIMEOUT)}function addNewBotAdMobile(){changeConfigToHB(),googletag.cmd.push(function(){ub_slot1=googletag.defineSlot("/21959913182/sakshi.com_NB_320x50",div_1_sizes,"div-ub-1").addService(googletag.pubads()),googletag.pubads().collapseEmptyDivs(!0),googletag.pubads().setCentering(!0),googletag.pubads().setPrivacySettings({restrictDataProcessing:!0}),googletag.pubads().enableSingleRequest(),googletag.enableServices(),googletag.pubads().addEventListener("slotRenderEnded",function(e){"/21959913182/sakshi.com_NB_320x50"===e.slot.getAdUnitPath()&&ub_checkAd1Rendered()})}),ubpbjs.que.push(function(){ubpbjs.requestBids({bidsBackHandler:initAdserver,timeout:PREBID_TIMEOUT})}),setTimeout(function(){initAdserver()},FAILSAFE_TIMEOUT)}function addNewsBotAd(){googletag.cmd.push(function(){googletag.defineSlot("/21959913182/sakshi.com_NB_320x50",div_1_sizes,"div-ub-1").addService(googletag.pubads()),googletag.pubads().addEventListener("slotRenderEnded",function(e){"/21959913182/sakshi.com_NB_320x50"===e.slot.getAdUnitPath()&&ub_checkAd1Rendered()})})}function initAdserver(){ubpbjs.initAdserverSet||(ubpbjs.initAdserverSet=!0,googletag.cmd.push(function(){ubpbjs.que.push(function(){ubpbjs.setTargetingForGPTAsync(),googletag.pubads().refresh([ub_slot1]);for(var e=ubpbjs.getAllPrebidWinningBids(),a=!1,d=0;d<e.length;d++){"openx"==e[d].bidderCode&&(a=!0,callBotman())}a||callAdsUB()})}))}ubpbjs.que=ubpbjs.que||[];var botmanCalled=!1,userStatusBM="";function callBotman(){if(""==userStatusBM){var e=new XMLHttpRequest;e.open("GET","https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=sakshi",!0),e.onload=function(){if(e.status>=200&&e.status<400){var a=e.responseText;""!=a?(a=JSON.parse(a),"0"==(userStatusBM=a)||"3"==userStatusBM?callAdsUB():console.log("Not Valid Traffic for openx")):(console.error("Data not returned from server"),callAdsUB())}else console.error("Request failed from server"),callAdsUB()},e.onerror=function(){console.error("Request failed to Reach Server"),callAdsUB()},e.send()}else"0"==userStatusBM||"3"==userStatusBM?callAdsUB():console.log("Not Valid Traffic for openx")}function callAdsUB(){googletag.pubads().refresh([ub_slot1])}var botmanCalled=!1,userStatusBM_rem="";function callBotman(){if(""==userStatusBM_rem){var e=new XMLHttpRequest;e.open("GET","https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=sakshi",!0),e.onload=function(){if(e.status>=200&&e.status<400){var a=e.responseText;""!=a?(a=JSON.parse(a),"0"==(userStatusBM_rem=a)||"3"==userStatusBM_rem?callAdsUB_rem():console.log("Not Valid Traffic for openx")):(console.error("Data not returned from server"),callAdsUB_rem())}else console.error("Request failed from server"),callAdsUB_rem()},e.onerror=function(){console.error("Request failed to Reach Server"),callAdsUB_rem()},e.send()}else"0"==userStatusBM_rem||"3"==userStatusBM_rem?callAdsUB_rem():console.log("Not Valid Traffic for openx")}function callAdsUB_rem(){googletag.pubads().refresh(mappings_remnant.slots)}function refreshBid(e){ubpbjs.que.push(function(){ubpbjs.requestBids({timeout:PREBID_TIMEOUT,adUnitCodes:["/21959913182/sakshi.com_NB_320x50"],bidsBackHandler:function(){googletag.cmd.push(function(){ubpbjs.que.push(function(){ubpbjs.setTargetingForGPTAsync(),googletag.pubads().refresh([e]);for(var a=!1,d=0;d<x.length;d++){"openx"==x[d].bidderCode&&(a=!0,callBotman())}a||callAdsUB()})})}})})}function ub_checkAd1Rendered(){adId1="div-ub-1";var e=document.getElementById(adId1).childNodes[0].childNodes;e.length&&"iframe"==e[0].nodeName.toLowerCase()&&1!=ub_ad1RefreshFlag&&setInterval(function(){ub_ad1RefreshFlag=1,refreshBid(ub_slot1)},REFRESH_TIMEOUT)}ub_ad1RefreshFlag=0;var mappings_remnant={slots:[],adCode:[],slotNumbers:[],sizes:[],adId:[],renderedFlag:[!1,!1,!1,!1,!1,!1]},div_sizes_remnant_1=[300,250],div_sizes_remnant_2=[[250,250],[300,100],[300,250],[200,200]],remnantAdUnits=[],mappings_config={targetUnits:["div-gpt-ad-1576678733140-0","div-gpt-ad-1560253279705-0"],slotNames:["ub_remnant_slot1","ub_remnant_slot2"],adUnitNames:["/21956916242/sakshi.com_nb_300x250_passback","/21956916242/sakshi.com_nb_300x250_passback2"],adId:["ub-remnant-ad-1","ub-remnant-ad-2"],sizes:[div_sizes_remnant_1,div_sizes_remnant_2],bids:[[{bidder:"appnexus",params:{placementId:"19056673"}},{bidder:"oftmedia",params:{placementId:"18778196"}},{bidder:"33across",params:{siteId:"bPSPrGBuar6PWLaKlId8sQ",productId:"siab"},labelAll:["US"]},{bidder:"emx_digital",params:{tagid:"97515"}},{bidder:"sovrn",params:{tagid:"735296"}},{bidder:"kubient",params:{zoneid:"aeb553306903a",server:"kssp.kbntx.ch"}},{bidder:"openx",params:{unit:"543459862",delDomain:"unibots-d.openx.net"}},{bidder:"eplanning",params:{ci:"2cfed",ml:"1"}},{bidder:"nobid",params:{siteId:"21987177881"}},{bidder:"criteo",params:{networkId:"10542"}},{bidder:"onetag",params:{pubId:"60c32c42465aac2"}},{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"Sakshi"}},{bidder:"criteointl",params:{networkId:"10545"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2996013"}},{bidder:"adkernel",params:{zoneId:"126007",host:"cpm.fmlabsonline.com"}}],[{bidder:"appnexus",params:{placementId:"19056673"}},{bidder:"oftmedia",params:{placementId:"18778196"}},{bidder:"33across",params:{siteId:"bPSPrGBuar6PWLaKlId8sQ",productId:"siab"},labelAll:["US"]},{bidder:"emx_digital",params:{tagid:"97515"}},{bidder:"sovrn",params:{tagid:"738414"}},{bidder:"kubient",params:{zoneid:"aeb553306903a",server:"kssp.kbntx.ch"}},{bidder:"openx",params:{unit:"543459998",delDomain:"unibots-d.openx.net"}},{bidder:"eplanning",params:{ci:"2cfed",ml:"1"}},{bidder:"nobid",params:{siteId:"21987177881"}},{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"Sakshi"}},{bidder:"criteo",params:{networkId:"10542"}},{bidder:"onetag",params:{pubId:"60c32c42465aac2"}},{bidder:"criteointl",params:{networkId:"10545"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2996014"}},{bidder:"adkernel",params:{zoneId:"126007",host:"cpm.fmlabsonline.com"}}]]};function checkRemnantUnits(){for(var e=0;e<mappings_config.targetUnits.length;e++){containsAd=!1;var a=document.getElementById(mappings_config.targetUnits[e]);if("object"==typeof a&&null!=a&&"object"==typeof a.firstElementChild&&"object"==typeof a.firstElementChild.firstElementChild&&null!=a.firstElementChild.firstElementChild&&(unit_name=a.firstElementChild.firstElementChild.tagName.toLowerCase(),"iframe"===unit_name&&(containsAd=!0)),!containsAd&&"undefined"!==a&&null!=a){for(var d=0;d<a.childElementCount;d++)if(child=a.children[e],child_name=child.tagName.toLowerCase(),"div"==child_name){child.innerHTML="";var s=document.createElement("div");s.id=mappings_config.adId[e],s.className=mappings_config.adId[e],child.appendChild(s);break}adUnitTemp={code:mappings_config.adUnitNames[e],mediaTypes:{banner:{sizes:mappings_config.sizes[e]}},bids:mappings_config.bids[e]},remnantAdUnits.push(adUnitTemp),mappings_remnant.slotNumbers.push(e+1),mappings_remnant.adCode.push(mappings_config.adUnitNames[e]),mappings_remnant.sizes.push(mappings_config.sizes[e]),mappings_remnant.adId.push(mappings_config.adId[e])}}googleDefine_remnant(mappings_remnant.slotNumbers,mappings_remnant.adCode,mappings_remnant.sizes,mappings_remnant.adId),callRemnantAds(mappings_remnant.adCode,mappings_remnant.slots),setTimeout(function(){initAdserver_remnant()},FAILSAFE_TIMEOUT)}function initAdserver_remnant(){ubpbjs.initAdserverSetRemnant||(ubpbjs.initAdserverSetRemnant=!0,googletag.cmd.push(function(){ubpbjs.que.push(function(){ubpbjs.setTargetingForGPTAsync(),googletag.pubads().refresh(mappings_remnant.slots);for(var e=ubpbjs.getAllPrebidWinningBids(),a=!1,d=0;d<e.length;d++){"openx"==e[d].bidderCode&&(a=!0,callBotman_rem())}a||callAdsUB_rem()})}))}function googleDefine_remnant(slotNumbers,adCode,sizes,adId){for(var i=0;i<slotNumbers.length;i++){eval("ub_remnant_slot"+slotNumbers[i]+"= googletag.defineSlot(adCode[i], sizes[i], adId[i])");var a=eval("ub_remnant_slot"+slotNumbers[i]);a.addService(googletag.pubads()),mappings_remnant.slots.push(eval("ub_remnant_slot"+slotNumbers[i]))}}function callRemnantAds(e,a){ubpbjs.que.push(function(){ubpbjs.requestBids({timeout:PREBID_TIMEOUT,adUnits:remnantAdUnits,adUnitCodes:e,bidsBackHandler:function(){ubpbjs.initAdserverSetRemnant=!0,googletag.cmd.push(function(){ubpbjs.que.push(function(){ubpbjs.setTargetingForGPTAsync(),googletag.pubads().refresh(a);for(var e=!1,d=0;d<x.length;d++){"openx"==x[d].bidderCode&&(e=!0,callBotman_rem())}e||callAdsUB_rem()})})}})})}var mapping_full_hb={slots:[],adCode:[],slotNumbers:[],sizes:[],renderedFlag:[]},adUnits_full_hb=[],hb_full_common_bidders=[{bidder:"appnexus",params:{placementId:"19056673"}},{bidder:"oftmedia",params:{placementId:"18778196"}},{bidder:"33across",params:{siteId:"bPSPrGBuar6PWLaKlId8sQ",productId:"siab"},labelAll:["US"]},{bidder:"emx_digital",params:{tagid:"97515"}},{bidder:"rhythmone",params:{placementId:"205945"}},{bidder:"nobid",params:{siteId:"21987177881"}},{bidder:"criteo",params:{networkId:"10542"}},{bidder:"onetag",params:{pubId:"60c32c42465aac2"}},{bidder:"criteointl",params:{networkId:"10545"}},{bidder:"adkernel",params:{zoneId:"126007",host:"cpm.fmlabsonline.com"}}],mappings_full_hb_config={targetUnits:["div-gpt-ad-1560233013253-0","div-gpt-ad-1560233087431-0","div-gpt-ad-1560233164388-0","div-gpt-ad-1511158697910-0","div-gpt-ad-1560232191899-0","div-gpt-ad-1560232377479-0","div-gpt-ad-1560232639192-0","div-gpt-ad-1560232568452-0","div-gpt-ad-1581144177758-0","div-gpt-ad-1560239369280-0","div-gpt-ad-1560239486596-0","div-gpt-ad-1560239628175-0","div-gpt-ad-1560239573343-0","div-gpt-ad-1560239855905-0","div-gpt-ad-1560239903945-0","div-gpt-ad-1577422203984-0","div-gpt-ad-1568699263235-0","div-gpt-ad-1560250742070-0","div-gpt-ad-1586515781967-0","div-gpt-ad-1560250931202-0","div-gpt-ad-1560250977307-0","div-gpt-ad-1560251033850-0","div-gpt-ad-1576678733140-0","div-gpt-ad-1560253279705-0","div-gpt-ad-1560253328585-0","div-gpt-ad-1560253372486-0","div-gpt-ad-1560253430624-0","div-gpt-ad-1579844188157-0","div-gpt-ad-1578660796348-0","div-gpt-ad-1540359629900-0","div-ub-1","div-gpt-ad-1593080960785-0","div-gpt-ad-1599810044319-0","div-gpt-ad-1602146792829-0","div-gpt-ad-1602146824870-0","div-gpt-ad-1602146890612-0"],adUnitNames:["/1062118/sakshiNew_box1_300x250","/1062118/sakshiNew_box2_300x250","/1062118/sakshiNew_Box3_300x250","/1062118/fullstories_300x50_firstslot","/1062118/sakshiNew_HP","/1062118/sakshiNew_skin_Left","/1062118/sakshiNew_skin_right","/1062118/SakshiNew_HP_Box_300x600","/1062118/Desktop_HP_300x100","/1062118/sakshiNew_Artclepage_LB","/1062118/sakshiNew_Artclepage_Skin_Left","/1062118/sakshiNew_Artclepage_skin_right","/1062118/sakshiNew_Artclepage_300x600","/1062118/sakshiNew_Artclepage_box1","/1062118/sakshiNew_Artclepage_Box2","/1062118/sakshiNew_Artclepage_INarticle","/1062118/Sakshi-Anchor_Ad","/1062118/Sakshi_Moblile_LB","/1062118/sakshiNEw_resp_Box2","/1062118/sakshiNEw_resp_Box3","/1062118/sakshiNEw_resp_Box4","/1062118/sakshiNEw_resp_Box5","/1062118/MobileMasthead_ROS_300x250","/1062118/sakshiNew_article_Box2","/1062118/sakshiNew_article_Box3","/1062118/sakshiNew_article_Box4","/1062118/sakshiNew_article_Box5","/1062118/320x50_Mobile_LB_New","/1062118/sakshinew_resp_Box1_entertainment_300x250","/1062118/MobileMasthead_HP_300x250","/21959913182/sakshi.com_NB_320x50","/21959913182/sakshi_hb_320x50_top_mobile_new","/1062118/Mobile_Articlepage_adslot3","/1062118/Sakshi_Photos_Mobile_1","/1062118/Sakshi_Videos_Mobile_1","/1062118/Sakshi_Cartoon_Mobile_1"],sizes:[[300,250],[300,250],[300,250],[300,50],[[970,90],[728,90]],[[120,600],[160,600]],[[160,600],[120,600]],[[300,600],[300,250],[160,600],[120,600]],[300,100],[[970,90],[728,90]],[[160,600],[120,600]],[[160,600],[120,600]],[[300,600],[300,250],[160,600]],[[300,250]],[[300,250]],[[1,1],[300,250]],[[320,50],[300,50]],[[300,250],[336,280]],[[300,250],[320,100],[320,50],[336,280]],[[300,250],[336,280]],[[300,250],[336,280]],[[300,250],[336,280]],[[300,250],[336,280]],[[300,250],[336,280]],[[300,250],[336,280]],[[300,250],[336,280]],[[320,100],[336,280],[300,250]],[320,50],[300,250],[300,250],[320,50],[[320,100],[320,50],[300,50],[300,100]],[[300,250],[336,280]],[300,250],[300,250],[300,250]],bids:[hb_full_common_bidders.concat([{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983534"}},{bidder:"sovrn",params:{tagid:"744054"}},{bidder:"openx",params:{unit:"543454990",delDomain:"unibots-d.openx.net"}},{bidder:"kubient",params:{zoneid:"76c65728741bf",server:"kssp.kbntx.ch"}},{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983535"}},{bidder:"sovrn",params:{tagid:"744064"}},{bidder:"openx",params:{unit:"543458039",delDomain:"unibots-d.openx.net"}},{bidder:"kubient",params:{zoneid:"d127db0a0fafa",server:"kssp.kbntx.ch"}},{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983536"}},{bidder:"sovrn",params:{tagid:"744057"}},{bidder:"openx",params:{unit:"543455757",delDomain:"unibots-d.openx.net"}},{bidder:"kubient",params:{zoneid:"5283241d8273a",server:"kssp.kbntx.ch"}},{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2996104"}},{bidder:"sovrn",params:{tagid:"744089"}},{bidder:"openx",params:{unit:"543459080",delDomain:"unibots-d.openx.net"}},{bidder:"kubient",params:{zoneid:"0071618bc63b9",server:"kssp.kbntx.ch"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93231",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:139,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983530"}},{bidder:"sovrn",params:{tagid:"744083"}},{bidder:"openx",params:{unit:"543458137",delDomain:"unibots-d.openx.net"}},{bidder:"kubient",params:{zoneid:"22f4c0ca3a449",server:"kssp.kbntx.ch"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93233",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:144,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983532"}},{bidder:"sovrn",params:{tagid:"744068"}},{bidder:"kubient",params:{zoneid:"fc6e5434be65e",server:"kssp.kbntx.ch"}},{bidder:"openx",params:{unit:"543271183",delDomain:"unibots-d.openx.net"}}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:144,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983533"}},{bidder:"sovrn",params:{tagid:"744079"}},{bidder:"openx",params:{unit:"543457046",delDomain:"unibots-d.openx.net"}},{bidder:"kubient",params:{zoneid:"456fef199ef58",server:"kssp.kbntx.ch"}}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:145,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983531"}},{bidder:"sovrn",params:{tagid:"744058"}},{bidder:"kubient",params:{zoneid:"515bdea4396a8",server:"kssp.kbntx.ch"}}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:146,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983525"}},{bidder:"kubient",params:{zoneid:"61fb2d4256efd",server:"kssp.kbntx.ch"}},{bidder:"openx",params:{unit:"543458925",delDomain:"unibots-d.openx.net"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93231",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983537"}},{bidder:"dailyhunt",params:{placement_id:139,publisher_id:6,partner_name:"sakshi"}},{bidder:"sovrn",params:{tagid:"744067"}},{bidder:"openx",params:{unit:"543271061",delDomain:"unibots-d.openx.net"}},{bidder:"kubient",params:{zoneid:"49b3b41ed5aa7",server:"kssp.kbntx.ch"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93233",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983539"}},{bidder:"sovrn",params:{tagid:"744072"}},{bidder:"kubient",params:{zoneid:"b9ee7016ef010",server:"kssp.kbntx.ch"}},{bidder:"openx",params:{unit:"543454901",delDomain:"unibots-d.openx.net"}},{bidder:"dailyhunt",params:{placement_id:144,publisher_id:6,partner_name:"sakshi"}}]),hb_full_common_bidders.concat([{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983540"}},{bidder:"sovrn",params:{tagid:"744082"}},{bidder:"kubient",params:{zoneid:"e3a11604048c0",server:"kssp.kbntx.ch"}},{bidder:"openx",params:{unit:"543457850",delDomain:"unibots-d.openx.net"}},{bidder:"dailyhunt",params:{placement_id:144,publisher_id:6,partner_name:"sakshi"}}]),hb_full_common_bidders.concat([{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983538"}},{bidder:"sovrn",params:{tagid:"744059"}},{bidder:"kubient",params:{zoneid:"01b6896b583e7",server:"kssp.kbntx.ch"}},{bidder:"openx",params:{unit:"543456852",delDomain:"unibots-d.openx.net"}},{bidder:"dailyhunt",params:{placement_id:145,publisher_id:6,partner_name:"sakshi"}}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983541"}},{bidder:"sovrn",params:{tagid:"744075"}},{bidder:"openx",params:{unit:"543455615",delDomain:"unibots-d.openx.net"}},{bidder:"kubient",params:{zoneid:"2821e007e0100",server:"kssp.kbntx.ch"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983542"}},{bidder:"sovrn",params:{tagid:"744066"}},{bidder:"kubient",params:{zoneid:"46be0bac55041",server:"kssp.kbntx.ch"}},{bidder:"openx",params:{unit:"543270894",delDomain:"unibots-d.openx.net"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983543"}},{bidder:"sovrn",params:{tagid:"744078"}},{bidder:"kubient",params:{zoneid:"469d105d8cab1",server:"kssp.kbntx.ch"}},{bidder:"openx",params:{unit:"543456697",delDomain:"unibots-d.openx.net"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983522"}},{bidder:"sovrn",params:{tagid:"744069"}},{bidder:"kubient",params:{zoneid:"7972e8b16e463",server:"kssp.kbntx.ch"}},{bidder:"openx",params:{unit:"543271469",delDomain:"unibots-d.openx.net"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93231",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"kubient",params:{zoneid:"28f9c52d6c8b8",server:"kssp.kbntx.ch"}},{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983569"}},{bidder:"sovrn",params:{tagid:"744065"}},{bidder:"openx",params:{unit:"543268667",delDomain:"unibots-d.openx.net"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983548"}},{bidder:"sovrn",params:{tagid:"744077"}},{bidder:"kubient",params:{zoneid:"53cf0231e4dae",server:"kssp.kbntx.ch"}},{bidder:"openx",params:{unit:"543456615",delDomain:"unibots-d.openx.net"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983549"}},{bidder:"sovrn",params:{tagid:"744071"}},{bidder:"kubient",params:{zoneid:"3d7d889fc27ab",server:"kssp.kbntx.ch"}},{bidder:"openx",params:{unit:"543454780",delDomain:"unibots-d.openx.net"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983550"}},{bidder:"sovrn",params:{tagid:"744081"}},{bidder:"kubient",params:{zoneid:"1c85712249abc",server:"kssp.kbntx.ch"}},{bidder:"openx",params:{unit:"543457464",delDomain:"unibots-d.openx.net"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983551"}},{bidder:"sovrn",params:{tagid:"744074"}},{bidder:"openx",params:{unit:"543455522",delDomain:"unibots-d.openx.net"}},{bidder:"kubient",params:{zoneid:"4fb59fda0ab9f",server:"kssp.kbntx.ch"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983563"}},{bidder:"sovrn",params:{tagid:"744052"}},{bidder:"kubient",params:{zoneid:"147c0b0d6df21",server:"kssp.kbntx.ch"}},{bidder:"openx",params:{unit:"543270086",delDomain:"unibots-d.openx.net"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983553"}},{bidder:"sovrn",params:{tagid:"744076"}},{bidder:"openx",params:{unit:"543456534",delDomain:"unibots-d.openx.net"}},{bidder:"kubient",params:{zoneid:"ebb9cdd7118b5",server:"kssp.kbntx.ch"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983554"}},{bidder:"sovrn",params:{tagid:"744070"}},{bidder:"openx",params:{unit:"543454681",delDomain:"unibots-d.openx.net"}},{bidder:"kubient",params:{zoneid:"eb8fc120a52da",server:"kssp.kbntx.ch"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983555"}},{bidder:"sovrn",params:{tagid:"744080"}},{bidder:"kubient",params:{zoneid:"c37f5e79f7424",server:"kssp.kbntx.ch"}},{bidder:"openx",params:{unit:"543457388",delDomain:"unibots-d.openx.net"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983556"}},{bidder:"sovrn",params:{tagid:"744073"}},{bidder:"openx",params:{unit:"543455356",delDomain:"unibots-d.openx.net"}},{bidder:"kubient",params:{zoneid:"f5370f6bc07fe",server:"kssp.kbntx.ch"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2996105"}},{bidder:"sovrn",params:{tagid:"744090"}},{bidder:"openx",params:{unit:"543459177",delDomain:"unibots-d.openx.net"}},{bidder:"kubient",params:{zoneid:"b925d06159c89",server:"kssp.kbntx.ch"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93231",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983523"}},{bidder:"sovrn",params:{tagid:"744062"}},{bidder:"openx",params:{unit:"543457236",delDomain:"unibots-d.openx.net"}},{bidder:"kubient",params:{zoneid:"a30c04217fcc8",server:"kssp.kbntx.ch"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"kubient",params:{zoneid:"06c0f35629198",server:"kssp.kbntx.ch"}},{bidder:"dailyhunt",params:{placement_id:138,publisher_id:6,partner_name:"sakshi"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2983562"}},{bidder:"sovrn",params:{tagid:"744032"}},{bidder:"openx",params:{unit:"543268501",delDomain:"unibots-d.openx.net"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"sovrn",params:{tagid:"708881"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"2932597"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93231",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"dailyhunt",params:{placement_id:146,publisher_id:6,partner_name:"sakshi"}},{bidder:"sovrn",params:{tagid:"751926"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"3076400"}},{bidder:"openx",params:{unit:"543459527",delDomain:"unibots-d.openx.net"}},{bidder:"kubient",params:{zoneid:"5d7531d58000d",server:"kssp.kbntx.ch"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93231",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"kubient",params:{zoneid:"10b433b9bd2d5",server:"kssp.kbntx.ch"}},{bidder:"smartadserver",params:{siteId:"361368",pageId:"1287116",formatId:"93232",domain:"https://prg8.smartadserver.com"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"sovrn",params:{tagid:"789455"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"3247597"}}]),hb_full_common_bidders.concat([{bidder:"sovrn",params:{tagid:"789456"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"3247598"}}]),hb_full_common_bidders.concat([{bidder:"sovrn",params:{tagid:"789457"}},{bidder:"pubmatic",params:{publisherId:"159448",adSlot:"3247599"}}])],isAP:[!1,!1,!1,!1,!0,!0,!0,!0,!1,!0,!0,!0,!0,!1,!1,!0,!1,!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]},mappings_extra_units_config={adUnitNames:["/1062118/1x1_Sakshi.com_Live_Outstream_Desktop","/1062118/1x1_Sakshi.com_Live_Outstream_Mobile","/1062118/Intersitial_640x480_Desktop","/1062118/Intersitial_320x480_mobile","/1062118/1x1_Sakshi.com_Live_Outstream_Desktop_Homepage","/1062118/1x1_Sakshi.com_Live_Outstream_Desktop_Articlepage","/1062118/1x1_Sakshi.com_Live_Outstream_Mobile_Articlepage","/1062118/1x1_Sakshi.com_Live_Outstream_Mobile_Homepage","/1009127/Sakshi_DBS_Carousel","/1062118/sakshiNew_cinema_sports_Bussiness_box1","/1062118/sakshiNew_cinema_sports_Bussiness_box2","/1062118/sakshiNew_cinema_sports_Bussiness_box5","/21796214895/542194_Sakshi_block_1","/21796214895/542194_Sakshi_block_2","/21796214895/542194_Sakshi_block_3","/1062118/Intersitial_640x480_Desktop_Articlepage","/1062118/Intersitial_320x480_mobile_Articlepage"]},mappings_extra_units={slots:[]};function checkHBUnits(){addNewsBotAd(),changeConfigToHB(),callMapUnits(),setTimeout(function(){initAdserver_hb_full()},FAILSAFE_TIMEOUT)}function callFullHBAds(e,a){ubpbjs.que.push(function(){ubpbjs.requestBids({timeout:PREBID_TIMEOUT,adUnits:adUnits_full_hb,adUnitCodes:e,bidsBackHandler:function(){ubpbjs.initAdserverSetHB=!0,googletag.cmd.push(function(){ubpbjs.que.push(function(){ubpbjs.setTargetingForGPTAsync(),requestManager.prebid=!0,biddersBack()})})}})})}function locate_googleSlot(e){var a;tempSlots=googletag.pubads().getSlots(),len=tempSlots.length;for(var d=0;d<len;d++)if(id=tempSlots[d].getAdUnitPath(),e==id){a=tempSlots[d];break}return a}function initAdserver_hb_full(){ubpbjs.initAdserverSetHB||(ubpbjs.initAdserverSetHB=!0,googletag.cmd.push(function(){ubpbjs.que.push(function(){ubpbjs.setTargetingForGPTAsync(),googletag.pubads().refresh(mapping_full_hb.slots);for(var e=ubpbjs.getAllPrebidWinningBids(),a=!1,d=0;d<e.length;d++){"openx"==e[d].bidderCode&&(a=!0,callBotman_hb())}a||callAdsUB_hb()})}))}var botmanCalled=!1,userStatusBM_hb="";function callBotman_hb(){if(""==userStatusBM_hb){var e=new XMLHttpRequest;e.open("GET","https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=sakshi",!0),e.onload=function(){if(e.status>=200&&e.status<400){var a=e.responseText;""!=a?(a=JSON.parse(a),"0"==(userStatusBM_hb=a)||"3"==userStatusBM_hb?callAdsUB_hb():console.log("Not Valid Traffic for openx")):(console.error("Data not returned from server"),callAdsUB_hb())}else console.error("Request failed from server"),callAdsUB_hb()},e.onerror=function(){console.error("Request failed to Reach Server"),callAdsUB_hb()},e.send()}else"0"==userStatusBM_hb||"3"==userStatusBM_hb?callAdsUB_hb():console.log("Not Valid Traffic for openx")}function callAdsUB_hb(){googletag.pubads().refresh(mapping_full_hb.slots)}function changeConfigToUSD(){ubpbjs.que.push(function(){ubpbjs.setConfig({currency:{adServerCurrency:"USD",granularityMultiplier:1,conversionRateFile:"https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json",defaultRates:{USD:{USD:1}}}})})}function changeConfigToHB(){ubpbjs.que.push(function(){ubpbjs.setConfig({currency:{adServerCurrency:"INR",granularityMultiplier:75,conversionRateFile:"https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json",defaultRates:{USD:{INR:75}}}})})}function biddersBack(){requestManager.aps&&requestManager.prebid&&sendAdserverRequest()}function sendAdserverRequest(){!0!==requestManager.adserverRequestSent&&(requestManager.adserverRequestSent=!0,googletag.cmd.push(function(){googletag.pubads().refresh(mapping_full_hb.slots),googletag.pubads().refresh(mappings_extra_units.slots)}))}function callAPStagBids(){apstag.fetchBids({slots:apSlots,timeout:2e3},function(e){googletag.cmd.push(function(){apstag.setDisplayBids(),requestManager.aps=!0,biddersBack()})})}function callMapUnits(){googletag.cmd.push(function(){for(x=googletag.pubads().getSlots(),x_len=x.length,i=0;i<x.length;i++)if(mappings_full_hb_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())){for(index=mappings_full_hb_config.adUnitNames.indexOf(x[i].getSlotId().getAdUnitPath()),size_array=[],size_temp_array=googletag.pubads().getSlots()[i].getSizes(),j=0;j<size_temp_array.length;j++)length=size_temp_array[j].l,height=size_temp_array[j].j,temp_array=[length,height],size_array.push(temp_array);adUnitTemp={code:x[i].getSlotId().getAdUnitPath(),mediaTypes:{banner:{sizes:size_array}},bids:mappings_full_hb_config.bids[index]},adUnits_full_hb.push(adUnitTemp),mapping_full_hb.slots.push(x[i]),mapping_full_hb.slotNumbers.push(i+1),mapping_full_hb.adCode.push(x[i].getSlotId().getAdUnitPath()),mapping_full_hb.sizes.push(size_array),mappings_full_hb_config.isAP[index]&&(apSlotTemp={slotID:googletag.pubads().getSlots()[0].getSlotId().getDomId(),slotName:x[i].getSlotId().getAdUnitPath(),sizes:size_array},apSlots.push(apSlotTemp))}else mappings_extra_units_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())&&mappings_extra_units.slots.push(x[i]);adUnitTemp1={code:"/21959913182/sakshi.com_NB_320x50",mediaTypes:{native:{image:{aspect_ratios:[{min_width:100,min_height:50,ratio_width:2,ratio_height:1}],sendId:!0},title:{len:50,sendId:!0},sponsoredBy:{required:!0,sendId:!0},clickUrl:{required:!0,sendId:!0}}},bids:[{bidder:"appnexus",params:{placementId:"19056673"}},{bidder:"oftmedia",params:{placementId:"18778196"}}]},adUnits_full_hb.push(adUnitTemp1),callAPStagBids(),callFullHBAds(mapping_full_hb.adCode,mapping_full_hb.slots)})}function mobileCheckHB(){var e,a=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(a=!0),a}hb_ran=!1,checkHBUnits();
