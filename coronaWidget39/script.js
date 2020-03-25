mybotLoadAdDefault = 0;
mybotAuthEnabled = 0;
mybotCloseEnabled = 0;
mybotClickCountEnabled = 1;
mybotClickLocation = '';
mybotStatAPI = 'get_stat';
mybotStartHour = 12;
mybotEndHour = 6;
mybotampEnabled = 0;

botPoweredBrand = '';

var mybotScrollFlag = 0;
mybotScrollStartFlag = 0;
var mybotScrollPixelHeight = 45;
mybotScrollStartPixelHeight = 0;
var mybotIsBottomScrollDisapperEnabled = 0;
var mybotIsBottomScrollStartDisapperEnabled = 1;
mybotMobileTopPlacement = 0;
mybotIsScrollupDisapperEnabled =1;
mobileTopPixel = 48;
mybotLastSlideNoCount =0;
mybotDynamicRedirectLinkEnabled =0;
mybotLastSlideLocalDataPresent =0;

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
mybotCountrydataFirst =1;

mybotGACode = 'UA-159929110-32';
mybotClientName = 'dinamalar';
mybotLocalDataPlacement = 0;
mybotAppendReferLink=0;
mybotDynamicRedirectLinkEnabled = 1;
if(mybotClientName !== 'undefined'){
  mybotStatAPI = mybotStatAPI + '/' + mybotClientName;
}

// mybotAdLinkSmall = 'https://www.googletagservices.com/tag/js/gpt.js';
// mybotAdSmallName = '/1009127/Webasset_Rightlog_320x50';
// mybotAdSmallSize = '[320, 50]';
// mybotAdSmallID = 'div-gpt-ad-1560427167936-0';

// mybotadSmall = '<script async src="'+mybotAdLinkSmall+'"></script><script>var REFRESH_KEY = "refresh";var REFRESH_VALUE = "true";window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() {googletag.defineSlot("'+mybotAdSmallName+'",'+mybotAdSmallSize+' , "'+mybotAdSmallID+'").setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 15;googletag.pubads().addEventListener("impressionViewable", function(event) {var slot = event.slot;if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {setTimeout(function() {googletag.pubads().refresh([slot]);}, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);}});googletag.pubads().enableSingleRequest();googletag.enableServices();});</script><div id="'+mybotAdSmallID+'"><script>googletag.cmd.push(function() { googletag.display("'+mybotAdSmallID+'"); });</script></div>';

mybotadSmall = '<div id="div-ub-1"><script type="text/javascript">googletag.cmd.push(function() {googletag.display("div-ub-1");});</script></div>';

mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';

mybotClosevar = '<img src="https://api.warw.in/coronaWidget1/img/close.svg">';

mybotTopBarContent = '<span class="mybotPoweredByBrand">\u0b95\u0bc6\u0bbe\u0bb0\u0bc7\u0bbe\u0ba9\u0bbe \u0b8e\u0ba9\u0bcd\u0bb1 \u0b95\u0bc6\u0bbe\u0b9f\u0bc2\u0bb0\u0ba9\u0bcd</span>';
// mybotBottomBarContent = '<span class="mybotPoweredBy">Powered By </span><span class="mybotPoweredByBrand">Unibots</span>';
mybotBottomBarContentLive = '<div class="mybotBottomBarLogo mybotBottomBarLive"><span class="mybotPoweredBy">COVID-19 </span><span class="mybotLiveCasesText mybotPoweredByBrand">Live</span></div>';
// mybotFace2Content = '<div class="mybotTopBar"><span class="mybotPoweredBy">Powered By</span><span class="mybotPoweredByBrand">Unibots</span></div><div class="mybotContent"><div class="mybotSummary"><span class="mybotLocation" id="mybotFace2TempContent"></span><div class="mybotCount" id="mybotFace2TempCount"></div></div></div><div class="mybotBottomBar mybotBottomBarLive"><span class="">COVID-19 Cases</span></div>';
mybotBottomBarContentLive1 = '<div class="mybotTopBar mybotTopBar1"><span class="mybotPoweredBy">Powered By</span><span class="mybotPoweredByBrand">Unibots</span></div><div class="mybotBottomBarLogo mybotBottomBarLive"><span class="mybotPoweredBy">COVID-19 </span><span class="mybotLiveCasesText mybotPoweredByBrand">Live</span></div>';

mybotFace1Content = '<div class="mybotTopBar"><span class="mybotPoweredBy">Powered By</span><span class="mybotPoweredByBrand">Unibots</span></div><div class="mybotContent"><div class="mybotSummary"><span class="mybotLocation" id="mybotCountryName"></span><div class="mybotCount" id="mybotCountryCount"></div></div></div><div class="mybotBottomBar mybotBottomBarLive"><span class="">COVID-19 Cases</span></div>';
mybotFace2Content = '<div class="mybotTopBar"><span class="mybotPoweredBy">Powered By</span><span class="mybotPoweredByBrand">Unibots</span></div><div class="mybotContent"><div class="mybotSummary"><span class="mybotLocation" id="mybotCountryName2"></span><div class="mybotCount" id="mybotCountryDeaths"></div></div></div><div class="mybotBottomBar mybotBottomBarLive"><span class="">COVID-19 Cases</span></div>';
mybotFace3Content = '<div class="mybotTopBar"><span class="mybotPoweredBy">Powered By</span><span class="mybotPoweredByBrand">Unibots</span></div><div class="mybotContent"><div class="mybotSummary"><span class="mybotLocation" id="mybotWorldCases"></span><div class="mybotCount" id="mybotWorldCount"></div></div></div><div class="mybotBottomBar mybotBottomBarLive"><span class="">COVID-19 Cases</span></div>';
mybotFace4Content = '<div class="mybotTopBar"><span class="mybotPoweredBy">Powered By</span><span class="mybotPoweredByBrand">Unibots</span></div><div class="mybotContent"><div class="mybotSummary"><span class="mybotLocation" id="mybotWorldDeathsCases"></span><div class="mybotCount" id="mybotWorldDeaths"></div></div></div><div class="mybotBottomBar mybotBottomBarLive"><span class="">COVID-19 Cases</span></div>';
mybotFace6Content = '';
mybotFace5Content = '<div class="mybotTopBar"><span class="mybotPoweredBy">Powered By</span><span class="mybotPoweredByBrand">Unibots</span></div><div class="mybotContent"><span class="mybotScoreLiveDot"></span><div class="mybotSummary"><span class="mybotLocation" id="mybotPrecautionText"></span></div></div><div class="mybotBottomBar mybotBottomBarLive"><span class="">COVID-19 Cases</span></div>';

function mybotCustomFunction() {
  document.getElementById('adSmall').innerHTML=mybotadSmall;
  document.getElementById('gabywa').innerHTML=mybotgabywa;

    document.querySelector('.mybotface1').innerHTML=mybotFace1Content;
    document.querySelector('.mybotface2').innerHTML=mybotFace2Content;
    document.querySelector('.mybotface3').innerHTML=mybotFace3Content;
    document.querySelector('.mybotface4').innerHTML=mybotFace4Content;
    document.querySelector('.mybotface6').innerHTML=mybotFace6Content;
    document.querySelector('.mybotface5').innerHTML=mybotFace5Content;
    // document.getElementById('mybotWorldCases').innerText='\u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe\u0bb5\u0bbf\u0bb2\u0bcd \u0baa\u0bbe\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc7\u0bbe\u0bb0\u0bcd';
    // document.getElementById('mybotCountryName2').innerText = '\u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe\u0bb5\u0bbf\u0bb2\u0bcd \u0bae\u0bb0\u0ba3\u0bae\u0bcd';
    // document.getElementById('mybotWorldDeathsCases').innerText='\u0b89\u0bb2\u0b95 \u0ba8\u0bc7\u0bbe\u0baf\u0bbe\u0bb3\u0bbf\u0b95\u0bb3\u0bcd';
    // document.getElementById('mybotCountryName').innerText='\u0b89\u0bb2\u0b95 \u0b85\u0bb3\u0bb5\u0bbf\u0bb2\u0bcd \u0bae\u0bb0\u0ba3\u0bae\u0bcd';
    // document.getElementById('mybotCountryName2').innerText='\u0b95\u0bc6\u0bbe\u0bb0\u0bc7\u0bbe\u0ba9\u0bbe \u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bbf\u0b95\u0bb3\u0bcd';
    // document.getElementById('mybotPrecautionText').innerText='\u0b89\u0bb2\u0b95 \u0b85\u0bb3\u0bb5\u0bbf\u0bb2\u0bcd \u0bae\u0bb0\u0ba3\u0bae\u0bcd';
  var mybotTopbar = document.querySelectorAll('.mybotTopBar');
  for(var mybottopbar of mybotTopbar)
  mybottopbar.innerHTML =mybotTopBarContent;
  var mybotBottombar = document.querySelectorAll('.mybotBottomBar');
  for(var mybotbottombar of mybotBottombar)
  mybotbottombar.innerHTML =mybotBottomBarContentLive;
  document.querySelector('.mybotface6').innerHTML=mybotBottomBarContentLive1;
  // document.getElementById('mybotstage').addEventListener('click', function() {
  //   window.open('https://www.ibtimes.co.in/coronavirus-india-live-cases-rise-114-maharashtra-worst-hit-38-815259?utm_source=unibots&utm_medium=widget&utm_campaign=coronavirus', '_blank');
  // });
  // if(mobileCheck()){
  //   document.getElementById('adSmall').innerHTML=mybotadSmallMob;
  // }
}

function loadAdCustom() {
  var s0 = document.createElement('script');
  s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
  s0.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(s0);

  var s1 = document.createElement('script');
  s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
  s1.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(s1);

  var s2 = document.createElement('script');
  s2.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScriptDML.js";
  s2.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(s2);
  s2.onload = function () {
    loadAd('adSmall');
  };
}

// if(typeof mybotPlayIconEnabled !== 'undefined' && mybotPlayIconEnabled == 1){
// 			mybotShowPlaynWinIcon();
//   }

//   function mybotShowPlaynWinIcon(){
//   document.getElementById('adSmall').addEventListener('click', function() {
//     window.open('https://mpl.onelink.me/C4XS/a5ec8619', '_blank');
//   });
// }

// =============================================================================
// Change the code from here
// Any function which you want to call on document.ready, put in this function
var AUTH_TOKEN = "";
var mybotDragClick = false;
var mybotDataSet1, mybotDataSet2;
var mybotSequenceIndex = 2;
var mybotSequenceIndexStart = 1;
var mybotIsMatchLive = 0;
var botInsideFlag = 120;

function callOnDocumentReady() {
	mybotCustomFunction();
	loadAd('gabywa');
	if(mybotLoadAdDefault){
		loadAd('adSmall');
	}
	else{
		loadAdCustom('adSmall');
	}

	if(mybotAuthEnabled){
		updateAuthToken();
	}

	if(mobileCheck()){
		botInsideFlag = 100;
	}

	[].forEach.call(document.querySelectorAll('.mybotstage'), function(el) {
		el.addEventListener('click', function() {
			mybotClickCount(0);
		})
	});

	if(typeof mybotMobileTopPlacement !== 'undefined' && mybotMobileTopPlacement==1){
		mobileTopPlacement();
		if(mobileCheck()){
			document.getElementById('mybotClose').classList.add('closeBotFrontTop');
			// document.getElementById('mybotCloseUCB').classList.add('closeBotFrontTop');
		}
	}
	if((typeof mybotIsBottomScrollStartDisapperEnabled !== 'undefined') && (mybotIsBottomScrollStartDisapperEnabled == 1)){
		mybotScrollStart();
		window.addEventListener('scroll',function(ev){mybotScrollStart()});
	}
  if((typeof mybotIsScrollupDisapperEnabled!=='undefined') && (mybotIsScrollupDisapperEnabled == 1)){
		if(mobileCheck()){
			var prevScrollpos = window.pageYOffset;
	    window.onscroll = function() {
	    var currentScrollPos = window.pageYOffset;
	    if (prevScrollpos < currentScrollPos) {
	    document.getElementById('dragItem').style.display = 'block';
	    } else {
	    document.getElementById('dragItem').style.display = 'none';
	    }
	    prevScrollpos = currentScrollPos;
	   }
		}
	}
	if((typeof mybotIsBottomScrollDisapperEnabled !== 'undefined') && (mybotIsBottomScrollDisapperEnabled == 1)){
		window.addEventListener('scroll',function(ev){mybotScrollEnd()});
	}

	if(mybotCloseEnabled){
		[].forEach.call(document.querySelectorAll('.mybotclose'), function(el) {
			el.style.display='block';
			el.addEventListener('click', function(event) {
				event.stopPropagation();
				event.preventDefault();
				document.querySelector('#adSmall').style.display = 'none';
				document.querySelector('.profile_div').style.display = 'none';
			})
		});
  }

	getScore();
	// runSequence();

	// setIntervalX(function () {
	// 	runSequence();
	// }, 1000, 9);

	// setInterval(function() {
	// 	runSequence();
	// }, 3600000);
	dragElement(document.getElementById("dragItem"));
}

function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {

       callback();

       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);
}

function loadAd(id, adUnits){
	var elm = document.getElementById(id);
	var scripts = Array(elm.querySelectorAll("script"));
	scripts = scripts[0];
	for(var i=0; i<scripts.length; i++) {
		oldScript = scripts[i];
		const newScript = document.createElement("script");
		var scriptAttr = Array(oldScript.attributes);
		scriptAttr = scriptAttr[0];
		for(var j=0; j<scriptAttr.length; j++) {
			attr = scriptAttr[j];
			newScript.setAttribute(attr.name, attr.value);
		}
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
		newScript.onload = function() {
			if(adUnits !== undefined) {
				smartyads.buildUnits(adUnits);
			}
		};
    oldScript.parentNode.replaceChild(newScript, oldScript);
	}
}

function mybotClickCount(count){
	if(mybotClickCountEnabled){
		if(count >= 2) {
			return;
		}

		var request = new XMLHttpRequest();
		url = 'https://api.warw.in/coronaWidget1/bot_open';
		request.open('GET', url, true);
		request.setRequestHeader('Auth-Token', AUTH_TOKEN);
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				var data = request.responseText;
				data = JSON.parse(data);
				if(data.error == true) {
					console.log(data.msg);
					console.log(data.errmsg);
					updateAuthToken(mybotClickCount(count+1));
				}
				else if(data.error == false) {
					//closeloader();
					// console.log("Request Completed Successfully");
				}
			}
			else {
				// We reached our target server, but it returned an error
				console.log('Request failed from server');
			}
		};
		request.onerror = function() {
			closeloader();
			console.log('Request failed');
		};
		request.send();
		if(mybotClickLocation!=''){
			window.open(mybotClickLocation, '_blank');
		}
	}
	else{
		if(mybotClickLocation!=''){
			window.open(mybotClickLocation, '_blank');
		}
		return false;
	}
}

function updateAuthToken(callback) {
	var request = new XMLHttpRequest();
	request.open('GET', 'https://api.warw.in/coronaWidget1/get_token', true);
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			var data = request.responseText;
			data = JSON.parse(data);
			if(data.error === false) {
				AUTH_TOKEN = data.auth_token;
			}
			if(typeof callback == "function") {
				callback();
			}
		}
		else {
			// We reached our target server, but it returned an error
			console.log('Request failed');
		}
	};
	request.onerror = function() {
		console.log('Request failed');
	};
	request.send();
}

function mobileCheck() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt)) {
		// if present, the header is where you move the DIV from:
		document.getElementById(elmnt).onmousedown = dragMouseDown;
	}
	else {
		// otherwise, move the DIV from anywhere inside the DIV:
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		if(pos1 !=0 || pos2!=0){
			mybotDragClick = true;
		}
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement(e) {
		// stop moving when mouse button is released:
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

function formatDate(date) {

	var month_names =["Jan","Feb","Mar",
		"Apr","May","Jun",
		"Jul","Aug","Sep",
		"Oct","Nov","Dec"];

	var day = date.getDate();
	var month_index = date.getMonth();
	var year = date.getFullYear();

	return "" + day + "-" + month_names[month_index] + "-" + year;
}

function formatTime(date) {

	return  date.toTimeString().split(' ')[0];
}

function putData(mybotDataSet) {
	if(typeof mybotLocalDataPlacement !== 'undefined' && mybotLocalDataPlacement == 1){
		world_cases = mybotDataSet["data"].world.cases;
	  world_death = mybotDataSet["data"].world.deaths;
	  country_cases = mybotDataSet["data"].country.cases;
	  country_death = mybotDataSet["data"].country.deaths;
	  country_name = mybotDataSet["data"].country.location;
		country_recovered = mybotDataSet["data"].country.recovered;
		third_cases = mybotDataSet["data"].thirdlocation.cases;
		third_deaths = mybotDataSet["data"].thirdlocation.deaths;
		third_name = mybotDataSet["data"].thirdlocation.location;

		document.getElementById('mybotWorldCount').innerText = country_cases;
		document.getElementById('mybotFace2TempCount').innerText = third_cases;
		document.getElementById('mybotWorldDeaths').innerText = country_death;
		// if(typeof mybotCountryNameLang !== 'undefined'){
	  //   document.getElementById('mybotCountryName').innerHTML=mybotCountryNameLang;
	  // }
		// else{
		// 	document.getElementById('mybotCountryName').innerText = capitalizeFLetter(country_name)+" Cases";
		// }
	  // if(typeof mybotCountryName2Lang !== 'undefined'){
	  //   document.getElementById('mybotCountryName2').innerHTML=mybotCountryName2Lang;
	  // }
		// else{
		// 	document.getElementById('mybotCountryName2').innerText = capitalizeFLetter(country_name)+" Deaths";
		// }

		document.getElementById('mybotCountryCount').innerText = country_recovered;
		if(typeof mybotLastSlideNoCount !== undefined && mybotLastSlideNoCount ==1){}
		else{
			document.getElementById('mybotPrecautionTextCount').innerText = world_cases;
		}
		if(typeof mybotDynamicRedirectLinkEnabled !== undefined && mybotDynamicRedirectLinkEnabled == 1){
			if(mybotDataSet["data"].text.redirectLink !== undefined && mybotDataSet["data"].text.redirectLink != 'none'){
				redirectLink = mybotDataSet["data"].text.redirectLink;
				if(typeof mybotAppendReferLink !== undefined){
					redirectLink += mybotAppendReferLink;
				}
				document.getElementById('mybotstage').addEventListener('click', function() {
			   window.open(redirectLink, '_blank');
			 });
			}
		}
		if(mybotDataSet["data"].text !== undefined){
			text1 = mybotDataSet["data"].text.text1;
			text2 = mybotDataSet["data"].text.text2;
			text3 = mybotDataSet["data"].text.text3;
			text4 = mybotDataSet["data"].text.text4;
			text5 = mybotDataSet["data"].text.text5;
			if(text1 != 'none'){
				document.getElementById('mybotWorldCases').innerText = text1;
			}
			if(text2 != 'none'){
				document.getElementById('mybotFace2TempContent').innerText = text2;
			}
			if(text3 != 'none'){
				document.getElementById('mybotWorldDeathsCases').innerText = text3;
			}
			if(text4 != 'none'){
				document.getElementById('mybotCountryName').innerText = text4;
			}
			if(text5 != 'none'){
				document.getElementById('mybotPrecautionText').innerText = text5;
			}
		}
	}
	else{
		world_cases = mybotDataSet["data"].world.cases;
	  world_death = mybotDataSet["data"].world.deaths;
	  country_cases = mybotDataSet["data"].country.cases;
	  country_death = mybotDataSet["data"].country.deaths;
	  country_name = mybotDataSet["data"].country.location;
		document.getElementById('mybotWorldCount').innerText = world_cases;
		document.getElementById('mybotWorldDeaths').innerText = world_death;
		if(typeof mybotCountryNameLang !== 'undefined'){
	    document.getElementById('mybotCountryName').innerHTML=mybotCountryNameLang;
	  }
		else{
			document.getElementById('mybotCountryName').innerText = capitalizeFLetter(country_name)+" Cases";
		}
	  if(typeof mybotCountryName2Lang !== 'undefined'){
	    document.getElementById('mybotCountryName2').innerHTML=mybotCountryName2Lang;
	  }
		else{
			document.getElementById('mybotCountryName2').innerText = capitalizeFLetter(country_name)+" Deaths";
		}

		document.getElementById('mybotCountryCount').innerText = country_cases;
		document.getElementById('mybotCountryDeaths').innerText = country_death;
		if(typeof mybotLastSlideLocalDataPresent !== "undefined" && mybotLastSlideLocalDataPresent ==1){
			if(mybotDataSet["data"].thirdlocation !== undefined){
				local_text = mybotDataSet["data"].thirdlocation.location;
				local_count = mybotDataSet["data"].thirdlocation.cases;
				document.getElementById('mybotPrecautionText').innerText = capitalizeFLetter(local_text)+" Cases";;
				document.getElementById('mybotPrecautionTextCount').innerText = local_count;
			}
			else{
				document.getElementById('mybotPrecautionText').innerText = "Stay Safe!";
			}

		}
		if(typeof mybotDynamicRedirectLinkEnabled !== "undefined" && mybotDynamicRedirectLinkEnabled == 1){
			if(mybotDataSet["data"].text.redirectLink !== undefined && mybotDataSet["data"].text.redirectLink != 'none'){
				redirectLink = mybotDataSet["data"].text.redirectLink;
				if(typeof mybotAppendReferLink !== undefined){
					redirectLink += mybotAppendReferLink;
				}
				document.getElementById('mybotstage').addEventListener('click', function() {
			   window.open(redirectLink, '_blank');
			 });
			}
		}
		if(mybotDataSet["data"].text !== undefined){
			text1 = mybotDataSet["data"].text.text1;
			text2 = mybotDataSet["data"].text.text2;
			text3 = mybotDataSet["data"].text.text3;
			text4 = mybotDataSet["data"].text.text4;
			text5 = mybotDataSet["data"].text.text5;
			if(text1 != 'none'){
				document.getElementById('mybotWorldCases').innerText = text1;
			}
			if(text2 != 'none'){
				document.getElementById('mybotWorldDeathsCases').innerText = text2;
			}
			if(text3 != 'none'){
				document.getElementById('mybotCountryName').innerText = text3;
			}
			if(text4 != 'none'){
				document.getElementById('mybotCountryName2').innerText = text4;
			}
			if(text5 != 'none'){
				document.getElementById('mybotPrecautionText').innerText = text5;
			}
		}
	}
}

function getScore() {
	var request = new XMLHttpRequest();
	url = 'https://api.warw.in/coronaWidget1/'+mybotStatAPI;
	// console.log(url);
	request.open('GET', url, true);
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			dataSet = [];
			var data = request.responseText;
			data = JSON.parse(data);
			// console.log(data);
			if(data.error === false) {
				putData(data);
			}
			if(data.error === true){
				console.log("error occured with data");
				// console.log(data);
			}
		}
		else {
			console.log('Request failed');
		}
	};
	request.onerror = function() {
		console.log('Request failed');
	};
	request.send();
}

function runSequence() {
	t = new Date();
	utcHours = t.getUTCHours();
	utcMinutes = t.getUTCMinutes();
	istHour = utcHours+5;
	if(utcMinutes>29){
		istHour += 1;
	}
	if((istHour > mybotStartHour) && (istHour < mybotEndHour)){

		// if(mybotSequenceIndex%2 == 0) {
		// 	setIntervalX(function () {
		// 		putData(mybotDataSet1, mybotIsMatchLive);
		// 	}, 1000, 9);
		// }
		// else {
		// 	if(mybotDataSet2 != undefined) {
		// 		setIntervalX(function () {
		// 			putData(mybotDataSet2, mybotIsMatchLive);
		// 		}, 1000, 9);
		// 	}
		// 	else {
		// 		setIntervalX(function () {
		// 			putData(mybotDataSet1, mybotIsMatchLive);
		// 		}, 1000, 9);
		// 	}
		// }
	}
	else{
		// if(mybotSequenceIndex%2 == 0) {
		// 	setIntervalX(function () {
		// 		putData(mybotDataSet1, mybotIsMatchLive);
		// 	}, 1000, 9);
		// }
		// else {
		// 	if(mybotDataSet2 != undefined) {
		// 		setIntervalX(function () {
		// 			putData(mybotDataSet2, mybotIsMatchLive);
		// 		}, 1000, 9);
		// 	}
		// 	else {
		// 		setIntervalX(function () {
		// 			putData(mybotDataSet1, mybotIsMatchLive);
		// 		}, 1000, 9);
		// 	}
		// }

		if(mybotSequenceIndex%4 == 1) {
			mybotSequenceIndex = 1;
			getScore(1);
		}
	}
	if(mybotSequenceIndexStart>0){
		if(mybotSequenceIndexStart==1){
			mybotSequenceIndex += 1;
		}
		mybotSequenceIndexStart -= 1;
	}
	else{
		mybotSequenceIndex += 1;
	}
}

function mobileTopPlacement(){
  if(mobileCheck()){
		x = document.getElementById('adSmall');
		x.style.marginTop = '0px';
		x=x.parentElement;
		x.parentNode.removeChild(x);
		y = document.getElementById('dragItem');
		y.insertBefore(x, y.firstChild);
		mybotDragItem = document.getElementById('dragItem');
    mybotDragItem.style.display = 'none';
		if(typeof mobileTopPixel !== 'undefined'){
			mybotDragItem.style.top = mobileTopPixel+'px';
		}
		else{
			mybotDragItem.style.top = '0px';
		}
		if(typeof mybotIsBottomScrollStartDisapperEnabled !== 'undefined' && mybotIsBottomScrollStartDisapperEnabled == 1){

		}
		else{
			window.addEventListener('scroll', function() {
	      mybotDragItem.style.display = 'block';
	    });
		}

  }
}

function mybotScrollStart(){

	if(mobileCheck()){
		if (((window.scrollY) <= ((screen.height/3) - mybotScrollStartPixelHeight)) && (mybotScrollStartFlag == 0)) {
        document.getElementById('dragItem').style.display = 'none';
        mybotScrollStartFlag = 1;
    }
    else if(mybotScrollStartFlag == 1){
      if ((window.scrollY) >= ((screen.height/3) - mybotScrollStartPixelHeight)) {
          document.getElementById('dragItem').style.display = 'block';
          mybotScrollStartFlag = 0;
      }
    }
	}
}

function mybotScrollEnd(){
	if(mobileCheck()){
		if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - mybotScrollPixelHeight) {
        document.getElementById('dragItem').style.display = 'none';
        mybotScrollFlag = 1;
    }
    else if(mybotScrollFlag == 1){
      if ((window.innerHeight + window.pageYOffset) <= document.body.offsetHeight - mybotScrollPixelHeight) {
          document.getElementById('dragItem').style.display = 'block';
          mybotScrollFlag = 0;
      }
    }
	}
}

function capitalizeFLetter(input) {
  var string = input;
  x = string.charAt(0).toUpperCase() + string.slice(1);
	 return x;
}
function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}window.ready(function(){var html='<mybot> <div id="gabywa"></div> <div class="profile_div" id="dragItem"> <div class="row"> <div class="mybotstage" id="mybotstage"> <div class="mybotcubespinner"> <div class="mybotface1 mybotface"> <div class="mybotTopBar"> <span class="mybotPoweredBy"> Powered By </span> <span class="mybotPoweredByBrand"> Unibots </span> </div> <div class="mybotContent"> <div class="mybotSummary"> <span class="mybotLocation" id="mybotWorldCases"> World Cases </span> <div class="mybotCount" id="mybotWorldCount"> </div> </div> </div> <div class="mybotBottomBar mybotBottomBarLive"> <span class="">COVID-19 Cases</span> </div> </div> <div class="mybotface2 mybotface"></div> <div class="mybotface3 mybotface"> <div class="mybotTopBar"> <span class="mybotPoweredBy"> Powered By </span> <span class="mybotPoweredByBrand"> Unibots </span> </div> <div class="mybotContent"> <div class="mybotSummary"> <span class="mybotLocation" id="mybotWorldDeathsCases"> World Deaths </span> <div class="mybotCount" id="mybotWorldDeaths"> </div> </div> </div> <div class="mybotBottomBar mybotBottomBarLive"> <span class="">COVID-19 Cases</span> </div> </div> <div class="mybotface4 mybotface"> <div class="mybotTopBar"> <span class="mybotPoweredBy"> Powered By </span> <span class="mybotPoweredByBrand"> Unibots </span> </div> <div class="mybotContent"> <div class="mybotSummary"> <span class="mybotLocation" id="mybotCountryName"> India Cases </span> <div class="mybotCount" id="mybotCountryCount"> </div> </div> </div> <div class="mybotBottomBar mybotBottomBarLive"> <span class="">COVID-19 Cases</span> </div> </div> <div class="mybotface5 mybotface"> <div class="mybotTopBar"> <span class="mybotPoweredBy"> Powered By </span> <span class="mybotPoweredByBrand"> Unibots </span> </div> <div class="mybotContent"> <div class="mybotSummary"> <span class="mybotLocation" id="mybotCountryName2"> India Deaths </span> <div class="mybotCount" id="mybotCountryDeaths"> </div> </div> </div> <div class="mybotBottomBar mybotBottomBarLive"> <span class="">COVID-19 Cases</span> </div> </div> <div class="mybotface6 mybotface"> <div class="mybotTopBar"> <span class="mybotPoweredBy"> Powered By </span> <span class="mybotPoweredByBrand"> Unibots </span> </div> <div class="mybotContent"> <span class="mybotScoreLiveDot"></span> <div class="mybotSummary"> <span class="mybotLocation" id="mybotPrecautionText"> Stay Safe! </span>  </div> </div> <div class="mybotBottomBar mybotBottomBarLive"> <span class="">COVID-19 Cases</span> </div> </div> </div> </div> <div class="mybotclose" id="mybotClose"> </div> </div> <div class="row"> <div class="col-hgt-ad" id="adSmall">  </div> </div> </div></mybot>';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='@media screen and (max-width:635px;){mybot .profile_div{height:130px!important}}mybot .col-hgt-ad{height:50px;float:right;position:absolute!important;bottom:0px!important;pointer-events:all}mybot .mybotstage{cursor:pointer}.mybotSummary{font-family:"Lato",sans-serif!important;font-size:11px!important;color:#000000!important;font-weight:600;top:60%!important;line-height:1.5}.mybotBottomBarLogo{background:#0e0e0e!important;width:100px;height:15px;color:#fff;margin:auto;line-height:15px;text-align:center;bottom:0;position:absolute;font-size:12px;font-weight:600}.mybotBottomBar{background:#0E0E0E!important;color:#fff!important;font-size:10px!important}.mybotTopBar{background:#FF0000!important;color:#fff!important;font-size:10px!important;height:30px!important}.mybotTopBar1{background:#FF0000!important;color:#fff!important;font-size:10px!important;height:15px!important}.mybotPoweredByBrand{font-weight:600!important;font-size:10px!important}mybot .mybotcubespinner .mybotface6{background:url(https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/coronaWidget39/dinamalar-logo-small.png)!important;background-size:contain!important;background-color:#EAFF00!important;background-repeat:no-repeat!important;background-position:center!important}@media screen and (max-width:635px){mybot .mybotcubespinner .mybotface6{background:url(https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/coronaWidget39/dinamalar-logo-small.png)!important;background-size:contain!important;background-color:#EAFF00!important;background-repeat:no-repeat!important;background-position:center!important}mybot .col-hgt-ad{position:absolute!important;bottom:0px!important;pointer-events:all}mybot .mybotstage{position:absolute;pointer-events:all;bottom:50px!important;cursor:pointer}.mybotBottomBar,.mybotTopBar{font-size:8px!important}.mybotBottomBarLogo{background:#0e0e0e!important;width:80px!important;height:15px;color:#fff;margin:auto;line-height:15px;text-align:center;bottom:0;position:absolute;font-size:9px!important;font-weight:600}.mybotSummary{font-family:"Lato",sans-serif!important;font-size:9px!important;color:#000000!important;font-weight:600;top:60%!important;line-height:1.3}.mybotPoweredByBrand{font-weight:600!important;font-size:8px!important}}mybot .mybotcubespinner .mybotface1,.mybotface3,.mybotface4,.mybotface5,.mybotface6,.mybotface2{background:#EAFF00!important}mybot .mybotLiveCasesText{color:#FF0000!important}.mybotLocation{font-size:9px}mybot .mybotAmpDragItem{width:80px!important;height:80px!important;bottom:50px!important;right:20px!important}mybot .mybotAmpStage{bottom:0px!important;right:0px!important}';var rule_common='@import url(https://fonts.googleapis.com/css?family=Baloo+Chettan+2&display=swap);@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800|Satisfy);@import url(https://fonts.googleapis.com/css?family=Noto+Serif:400,700&display=swap);@import url(https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/coronaWidget32/NotoSerifBengali-hinted/NotoSerifBengali-Regular.ttf);mybot{font-family:"Lato",sans-serif;font-size:14px;font-weight:400;color:#333;position:sticky;z-index:2147483640;cursor:move}mybot *{-webkit-box-sizing:content-box!important;-moz-box-sizing:content-box!important;box-sizing:content-box!important}mybot img{-webkit-user-drag:none;-moz-user-drag:none;-khtml-user-drag:none}mybot .row{margin-right:0}mybot a,mybot a:hover,mybot a:focus{text-decoration:none;outline:none}mybot .profile_div{position:fixed;bottom:0;right:0;width:320px;height:150px;cursor:default;z-index:2147483647;pointer-events:none}mybot .mybotclose{position:absolute;margin-top:-20px;display:none;width:20px;cursor:pointer;right:5px;pointer-events:all;filter:invert(12%) sepia(96%) saturate(7213%) hue-rotate(4deg) brightness(100%) contrast(117%)!important}@keyframes mybotspincube{from,to{-moz-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);-ms-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}12%{-moz-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);-ms-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}16%{-moz-transform:rotateY(-90deg);-ms-transform:rotateY(-90deg);transform:rotateY(-90deg)}30%{-moz-transform:rotateY(-90deg);-ms-transform:rotateY(-90deg);transform:rotateY(-90deg)}33%{-moz-transform:rotateY(-90deg) rotateZ(90deg);-ms-transform:rotateY(-90deg) rotateZ(90deg);transform:rotateY(-90deg) rotateZ(90deg)}47%{-moz-transform:rotateY(-90deg) rotateZ(90deg);-ms-transform:rotateY(-90deg) rotateZ(90deg);transform:rotateY(-90deg) rotateZ(90deg)}50%{-moz-transform:rotateY(-180deg) rotateZ(90deg);-ms-transform:rotateY(-180deg) rotateZ(90deg);transform:rotateY(-180deg) rotateZ(90deg)}63%{-moz-transform:rotateY(-180deg) rotateZ(90deg);-ms-transform:rotateY(-180deg) rotateZ(90deg);transform:rotateY(-180deg) rotateZ(90deg)}66%{-moz-transform:rotateY(90deg) rotateX(90deg);-ms-transform:rotateY(90deg) rotateX(90deg);transform:rotateY(90deg) rotateX(90deg)}80%{-moz-transform:rotateY(90deg) rotateX(90deg);-ms-transform:rotateY(90deg) rotateX(90deg);transform:rotateY(90deg) rotateX(90deg)}83%{-moz-transform:rotateX(90deg);-ms-transform:rotateX(90deg);transform:rotateX(90deg)}97%{-moz-transform:rotateX(90deg);-ms-transform:rotateX(90deg);transform:rotateX(90deg)}}mybot .mybotcubespinner{-webkit-animation-name:mybotspincube;-webkit-animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;-webkit-animation-duration:24s;animation-name:mybotspincube;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:24s;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:50px 50px 0;-moz-transform-origin:50px 50px 0;-ms-transform-origin:50px 50px 0;transform-origin:50px 50px 0}mybot .mybotcubespinner .mybotface{position:absolute;width:100px;height:100px;border:1px solid #ccc;background:rgba(255,255,255,.8);box-shadow:inset 0 0 20px rgba(0,0,0,.2);text-align:center;border-radius:5px}mybot .mybotcubespinner .mybotface1{-webkit-transform:translateZ(50px);-moz-transform:translateZ(50px);-ms-transform:translateZ(50px);transform:translateZ(50px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface2{-webkit-transform:rotateY(90deg) translateZ(50px);-moz-transform:rotateY(90deg) translateZ(50px);-ms-transform:rotateY(90deg) translateZ(50px);transform:rotateY(90deg) translateZ(50px);background:url(https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/timesnowdemo.jpg);background-repeat:no-repeat;background-size:cover}mybot .mybotcubespinner .mybotface3{-webkit-transform:rotateY(90deg) rotateX(90deg) translateZ(50px);-moz-transform:rotateY(90deg) rotateX(90deg) translateZ(50px);-ms-transform:rotateY(90deg) rotateX(90deg) translateZ(50px);transform:rotateY(90deg) rotateX(90deg) translateZ(50px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface4{-webkit-transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);-moz-transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);-ms-transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface5{-webkit-transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);-moz-transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);-ms-transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface6{-webkit-transform:rotateX(-90deg) translateZ(50px);-moz-transform:rotateX(-90deg) translateZ(50px);-ms-transform:rotateX(-90deg) translateZ(50px);transform:rotateX(-90deg) translateZ(50px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotstage{width:100px;height:100px;bottom:50px;position:absolute;right:25px;font-size:15px;pointer-events:all}.mybotTopBar{background:red;width:100px;height:15px;border-bottom:1px solid #fff;color:#fff;text-align:center;margin:auto;line-height:15px}.mybotPoweredBy{font-size:9px;font-weight:600}.mybotPoweredByBrand{font-size:12px;font-weight:600}.mybotBottomBar{background:red;width:100px;height:15px;color:#fff;margin:auto;line-height:15px;text-align:center;bottom:0;position:absolute;font-size:12px}.mybotSummary{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;font-family:"Baloo Chettan 2",cursive}.mybotContent{color:#fff;text-align:center;overflow:hidden}@-webkit-keyframes mybotpulsate-bck{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(.9);transform:scale(.9)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes mybotpulsate-bck{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(.9);transform:scale(.9)}100%{-webkit-transform:scale(1);transform:scale(1)}}@media screen and (max-width:635px){mybot .profile_div{width:320px;height:130px}.mybotSummary{font-size:12px}.mybotTopBar,.mybotBottomBar{width:80px;font-size:10px}.mybotPoweredBy{font-size:7px}.mybotPoweredByBrand{font-size:8px}mybot .mybotcubespinner .mybotface{position:absolute;width:80px;height:80px;border:1px solid #ccc;background:rgba(255,255,255,.8);box-shadow:inset 0 0 10px rgba(0,0,0,.2);text-align:center;border-radius:5px}mybot .mybotstage{width:80px;height:80px;bottom:52px;position:absolute;right:20px;font-size:15px;pointer-events:all}mybot .mybotcubespinner .mybotface1{-webkit-transform:translateZ(40px);-moz-transform:translateZ(40px);-ms-transform:translateZ(40px);transform:translateZ(40px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface2{-webkit-transform:rotateY(90deg) translateZ(40px);-moz-transform:rotateY(90deg) translateZ(40px);-ms-transform:rotateY(90deg) translateZ(40px);transform:rotateY(90deg) translateZ(40px);background:url(https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/timesnowdemo.jpg);background-repeat:no-repeat;background-size:cover}mybot .mybotcubespinner .mybotface3{-webkit-transform:rotateY(90deg) rotateX(90deg) translateZ(40px);-moz-transform:rotateY(90deg) rotateX(90deg) translateZ(40px);-ms-transform:rotateY(90deg) rotateX(90deg) translateZ(40px);transform:rotateY(90deg) rotateX(90deg) translateZ(40px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface4{-webkit-transform:rotateY(180deg) rotateZ(90deg) translateZ(40px);-moz-transform:rotateY(180deg) rotateZ(90deg) translateZ(40px);-ms-transform:rotateY(180deg) rotateZ(90deg) translateZ(40px);transform:rotateY(180deg) rotateZ(90deg) translateZ(40px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface5{-webkit-transform:rotateY(-90deg) rotateZ(90deg) translateZ(40px);-moz-transform:rotateY(-90deg) rotateZ(90deg) translateZ(40px);-ms-transform:rotateY(-90deg) rotateZ(90deg) translateZ(40px);transform:rotateY(-90deg) rotateZ(90deg) translateZ(40px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface6{-webkit-transform:rotateX(-90deg) translateZ(40px);-moz-transform:rotateX(-90deg) translateZ(40px);-ms-transform:rotateX(-90deg) translateZ(40px);transform:rotateX(-90deg) translateZ(40px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner{-webkit-animation-name:mybotspincube;-webkit-animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;-webkit-animation-duration:24s;animation-name:mybotspincube;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:24s;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:40px 40px 0;-moz-transform-origin:40px 40px 0;-ms-transform-origin:40px 40px 0;transform-origin:40px 40px 0}}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule+rule_common;}else{css.appendChild(document.createTextNode(rule));css.appendChild(document.createTextNode(rule_common));}document.getElementsByTagName('head')[0].appendChild(css);callOnDocumentReady();});