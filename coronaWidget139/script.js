mybotLoadAdDefault = 0;
mybotAuthEnabled = 0;
mybotCloseEnabled = 0;
mybotClickCountEnabled = 1;
mybotClickLocation = '';
mybotStatAPI = 'get_stat_all';
mybotStartHour = 12;
mybotEndHour = 6;
mybotampEnabled = 0;
botPosition = 'right';
botPoweredBrand = '';

var mybotScrollFlag = 0;
mybotScrollStartFlag = 0;
var mybotScrollPixelHeight = 45;
mybotScrollStartPixelHeight = 0;
var mybotIsBottomScrollDisapperEnabled = 0;
var mybotIsBottomScrollStartDisapperEnabled = 1;
mybotMobileTopPlacement = 1;
mybotIsScrollupDisapperEnabled =1;
mobileTopPixel = 58;
// mybotCountryRecovered =1;
// mybotWorldRecovered =1;

mybotGACode = 'UA-164744545-12';
mybotCustomText =1;
mybotCountryname = 'Vietnam';
mybotAnotherCountryData =1;

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

mybotadSmall = '';

mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';

mybotClosevar = '<img src="https://unibots.warw.in//img/close.svg">';

mybotTopBarContent = '<span class="mybotPoweredByBrand">Covid-19</span>';
mybotBottomBarContent = '<span class="mybotPoweredBy">Powered By </span><span class="mybotPoweredByBrand">Unibots</span>';
mybotFace1Content = '<div class="mybotTopBar"><span class="mybotPoweredBy">Powered By</span><span class="mybotPoweredByBrand">Unibots</span></div><div class="mybotContent"><div class="mybotSummary"><span class="mybotLocation" id="mybotWorldCases">\u0074\u006f\u00e0\u006e \u0074\u0068\u1ebf \u0067\u0069\u1edb\u0069 \u0063\u0061 \u006e\u0068\u0069\u1ec5\u006d</span><div class="mybotCount" id="mybotWorldCount"></div></div></div><div class="mybotBottomBar mybotBottomBarLive"><span class="">COVID-19 Cases</span></div>';
mybotFace2Content = '<div class="mybotTopBar"><span class="mybotPoweredBy">Powered By</span><span class="mybotPoweredByBrand">Unibots</span></div><div class="mybotContent"><div class="mybotSummary"><span class="mybotLocation" id="mybotWorldRecoveredCases">\u0074\u006f\u00e0\u006e \u0074\u0068\u1ebf \u0067\u0069\u1edb\u0069 \u0063\u0061 \u0070\u0068\u1ee5\u0063 \u0068\u1ed3\u0069</span><div class="mybotCount" id="mybotWorldRecovered"></div></div></div><div class="mybotBottomBar mybotBottomBarLive"><span class="">COVID-19 Cases</span></div>';
mybotFace3Content = '<div class="mybotTopBar"><span class="mybotPoweredBy">Powered By</span><span class="mybotPoweredByBrand">Unibots</span></div><div class="mybotContent"><div class="mybotSummary"><span class="mybotLocation" id="mybotCountryName">\u0056\u0069\u1ec7\u0074 \u006e\u0061\u006d \u0063\u0061 \u006e\u0068\u0069\u1ec5\u006d</span><div class="mybotCount" id="mybotCountryCount"></div></div></div><div class="mybotBottomBar mybotBottomBarLive"><span class="">COVID-19 Cases</span></div>';
mybotFace4Content = '<div class="mybotTopBar"><span class="mybotPoweredBy">Powered By</span><span class="mybotPoweredByBrand">Unibots</span></div><div class="mybotContent"><div class="mybotSummary"><span class="mybotLocation" id="mybotCountryRecoveredTxt">\u0056\u0069\u1ec7\u0074 \u004e\u0061\u006d \u0063\u0061 \u0070\u0068\u1ee5\u0063 \u0068\u1ed3\u0069</span><div class="mybotCount" id="mybotCountryRecovered"></div></div></div><div class="mybotBottomBar mybotBottomBarLive"><span class="">COVID-19 Cases</span></div>';
mybotFace5Content = '<div class="mybotTopBar"><span class="mybotPoweredBy">Powered By</span><span class="mybotPoweredByBrand">Unibots</span></div><div class="mybotContent"><div class="mybotSummary"><span class="mybotLocation" id="mybotCountryName2">\u0056\u0069\u1ec7\u0074 \u004e\u0061\u006d \u0063\u0061 \u0074\u1eed \u0076\u006f\u006e\u0067</span><div class="mybotCount" id="mybotCountryDeaths"></div></div></div><div class="mybotBottomBar mybotBottomBarLive"><span class="">COVID-19 Cases</span></div>';
mybotFace6Content = '';

function mybotCustomFunction() {
  document.getElementById('adSmall').innerHTML=mybotadSmall;
  document.getElementById('gabywa').innerHTML=mybotgabywa;
  document.getElementById('mybotClose').innerHTML=mybotClosevar;
  document.querySelector('.mybotface1').innerHTML=mybotFace1Content;
  document.querySelector('.mybotface2').innerHTML=mybotFace2Content;
  document.querySelector('.mybotface3').innerHTML=mybotFace3Content;
  document.querySelector('.mybotface4').innerHTML=mybotFace4Content;
  document.querySelector('.mybotface5').innerHTML=mybotFace5Content;
  document.querySelector('.mybotface6').innerHTML=mybotFace6Content;
  var mybotTopbar = document.querySelectorAll('.mybotTopBar');
  for(var mybottopbar of mybotTopbar)
  mybottopbar.innerHTML =mybotTopBarContent;
  var mybotBottombar = document.querySelectorAll('.mybotBottomBar');
  for(var mybotbottombar of mybotBottombar)
  mybotbottombar.innerHTML =mybotBottomBarContent;
  // document.querySelector('.mybotface2').innerHTML=mybotBottomBarContentLive;
  // document.getElementById('mybotstage').addEventListener('click', function() {
  //   window.open('https://kwttoday.com/coronavirus-live-map-updates/?utm_source=unibots&utm_medium=widget&utm_campaign=coronavirus', '_blank');
  // });
 //  if(!mobileCheck()){
   // document.getElementById('dragItem').style.left='0px';
   // document.getElementById('mybotstage').style.left='25px';
 // }
}

function loadAdCustom() {
  return false;
  // var s0 = document.createElement('script');
  // s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
  // s0.type = "text/javascript";
  // document.getElementsByTagName('head')[0].appendChild(s0);
  //
  // var s1 = document.createElement('script');
  // s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
  // s1.type = "text/javascript";
  // document.getElementsByTagName('head')[0].appendChild(s1);
  //
  // var s2 = document.createElement('script');
  // s2.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScriptEnnajah.js";
  // s2.type = "text/javascript";
  // document.getElementsByTagName('head')[0].appendChild(s2);
  // s2.onload = function () {
  //   loadAd('adSmall');
  // };
}

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
var mybotCloseTriggeredFlag;
var mybotDragElementFlag = 0;

function callOnDocumentReady() {
	if(typeof mybotBlockedPagesFlag !== 'undefined' && mybotBlockedPagesFlag ==1){
		urlToCheck = window.location.host+window.location.pathname;

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
						document.getElementById('dragItem').innerHTML = '';
						return false;
					}
					else{
						mybotStart();
					}
				}
			}
			else {
				console.log('Block Check Request failed');
				mybotStart();
			}
		};
		request.onerror = function() {
			console.log('Request failed');
			mybotStart();
		};
		request.send();
	}
	else{
		mybotStart();
	}
}

function mybotStart(){
	mybotCustomFunction();
	placeBotAndAd();
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
			 if(mybotCloseTriggeredFlag){
				 	document.getElementById('dragItem').style.display = 'none';
			 }
			 else {
				if ((window.scrollY) >= ((screen.height/3) - mybotScrollStartPixelHeight)) {
			 	document.getElementById('dragItem').style.display = 'block';
			 }
			 }
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
				document.querySelector('#mybot-adcover').style.display = 'none';
				document.querySelector('.profile_div').style.display = 'none';
			 	mybotCloseTriggeredFlag = 1;
				if(typeof mybotampEnabled !== 'undefined' && mybotampEnabled ==1){
					mybotampClose();
				}
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
	if((typeof mybotDragElementFlag !== 'undefined') && (mybotDragElementFlag == 1)){
		dragElement(document.getElementById("dragItem"));
	}
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
		url = 'https://unibots.warw.in//bot_open';
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
	request.open('GET', 'https://unibots.warw.in//get_token', true);
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
	if(typeof mybotAnotherCountryData !== 'undefined' && mybotAnotherCountryData == 1){
		mybotCountrydata = mybotDataSet["data"][mybotCountryname];
		country_cases = mybotCountrydata.cases;
		country_death = mybotCountrydata.deaths;
		country_recovered = mybotCountrydata.recovered;
		country_name = mybotCountrydata.location;
		world_cases = mybotDataSet["data"].world.cases;
		world_death = mybotDataSet["data"].world.deaths;
		world_recovered = mybotDataSet["data"].world.recovered;
		document.getElementById('mybotWorldCount').innerText = world_cases;
		if (document.getElementById('mybotWorldDeaths')) {
			 document.getElementById('mybotWorldDeaths').innerText = world_death;
		}
		if (document.getElementById('mybotWorldRecovered')) {
			document.getElementById('mybotWorldRecovered').innerText = world_recovered;
		}
		if (typeof mybotCustomText !== 'undefined' && mybotCustomText == 1) {
			document.getElementById('mybotCountryCount').innerText = country_cases;
			document.getElementById('mybotCountryRecovered').innerText = country_recovered;
			if (document.getElementById('mybotCountryDeaths')) {
				 document.getElementById('mybotCountryDeaths').innerText = country_death;
			}
		}
		else {
			document.getElementById('mybotCountryCount').innerText = country_cases;
			document.getElementById('mybotCountryName').innerText = capitalizeFLetter(country_name)+" Cases";
			if (document.getElementById('mybotCountryDeaths')) {
				document.getElementById('mybotCountryDeaths').innerText = country_death;
				document.getElementById('mybotCountryName2').innerText = capitalizeFLetter(country_name)+" Deaths";
			}
			if (document.getElementById('mybotCountryRecoveredTxt')) {
				document.getElementById('mybotCountryRecoveredTxt').innerText = capitalizeFLetter(country_name)+" Recovered";
				document.getElementById('mybotCountryRecovered').innerText = country_recovered;
			}
		}
		if (typeof mybotCountryname2 !=='undefined'){
		  mybotCountrydata2 = mybotDataSet["data"][mybotCountryname2];
		  country2_cases = mybotCountrydata2.cases;
		  country2_death = mybotCountrydata2.deaths;
		  country2_recovered = mybotCountrydata2.recovered;
		  country2_name = mybotCountrydata2.location;
			if (typeof mybotCustomText !== 'undefined' && mybotCustomText == 1) {
				document.getElementById('mybotCountry2Count').innerText = country2_cases;
				document.getElementById('mybotCountry2Recovered').innerText = country2_recovered;
				if (document.getElementById('mybotCountry2Deaths')) {
					document.getElementById('mybotCountry2Deaths').innerText = country2_death;
				}
			}
			else {
				document.getElementById('mybotCountry2Count').innerText = country2_cases;
			  document.getElementById('mybotCountry2Name').innerText = capitalizeFLetter(country2_name)+" Cases";
				if (document.getElementById('mybotCountry2Name2')) {
								  document.getElementById('mybotCountry2Deaths').innerText = country2_death;
					document.getElementById('mybotCountry2Name2').innerText = capitalizeFLetter(country2_name)+" Deaths";
				}
			  if (document.getElementById('mybotCountry2RecoveredTxt')) {
			    document.getElementById('mybotCountry2RecoveredTxt').innerText = capitalizeFLetter(country2_name)+" Recovered";
			    document.getElementById('mybotCountry2Recovered').innerText = country2_recovered;
			  }
			}
		}
	}
	else if(typeof mybotStateData !== 'undefined' && mybotStateData == 1){
			mybotStatedata = mybotDataSet["data"]["states"][mybotStateName];
			state_cases = mybotStatedata.totalConfirmed;
			state_recovered = mybotStatedata.totalRecovered;
			state_death = mybotStatedata.totalDeaths;
			state_name = mybotStatedata.state_name;
			document.getElementById('mybotStateCases').innerText = state_cases;
			document.getElementById('mybotStateRecovered').innerText = state_recovered;
			document.getElementById('mybotStateCasesTxt').innerText = capitalizeFLetter(state_name)+" Cases";
			document.getElementById('mybotStateRecoveredTxt').innerText = capitalizeFLetter(state_name)+" Recovered";
			if (typeof mybotStateName2 !=='undefined'){
				mybotStatedata2 = mybotDataSet["data"]["states"][mybotStateName2];
				country_cases = mybotDataSet["data"].country.cases;
				country_recovered = mybotDataSet["data"].country.recovered;
				country_name = mybotDataSet["data"].country.location;
				state2_cases = mybotStatedata2.totalConfirmed;
				state2_recovered = mybotStatedata2.totalRecovered;
				state2_death = mybotStatedata2.totalDeaths;
				state2_name = mybotStatedata2.state_name;
				document.getElementById('mybotState2Cases').innerText = state2_cases;
				document.getElementById('mybotState2Recovered').innerText = state2_recovered;
				document.getElementById('mybotState2CasesTxt').innerText = capitalizeFLetter(state2_name)+" Cases";
				document.getElementById('mybotState2RecoveredTxt').innerText = capitalizeFLetter(state2_name)+" Recovered";
				document.getElementById('mybotCountryCount').innerText = country_cases;
				document.getElementById('mybotCountryName').innerText = capitalizeFLetter(country_name)+" Cases";
				if (document.getElementById('mybotCountryRecoveredTxt')) {
					document.getElementById('mybotCountryRecovered').innerText = country_recovered;
					document.getElementById('mybotCountryRecoveredTxt').innerText = capitalizeFLetter(country_name)+" Recovered";
				}
			}
			else {
				world_cases = mybotDataSet["data"].world.cases;
				country_cases = mybotDataSet["data"].country.cases;
				country_recovered = mybotDataSet["data"].country.recovered;
				country_name = mybotDataSet["data"].country.location;
				document.getElementById('mybotWorldCount').innerText = world_cases;
				document.getElementById('mybotCountryCount').innerText = country_cases;
				document.getElementById('mybotCountryName').innerText = capitalizeFLetter(country_name)+" Cases";
				document.getElementById('mybotCountryRecoveredTxt').innerText = capitalizeFLetter(country_name)+" Recovered";
				document.getElementById('mybotCountryRecovered').innerText = country_recovered;
			}
	}
	else if (typeof mybotOnlyTextdata !== 'undefined' && mybotOnlyTextdata ==1) {}
	else if(typeof mybotLocalDataPlacement !== 'undefined' && mybotLocalDataPlacement == 1){
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
			country_cases = mybotDataSet["data"].country.cases;
			country_death = mybotDataSet["data"].country.deaths;
			country_name = mybotDataSet["data"].country.location;
			if(typeof mybotDuplicateDataPresent !== "undefined" && mybotDuplicateDataPresent == 1){
				document.getElementById('mybotCountryCount').innerText = country_cases;
				document.getElementById('mybotCountryCountDuplicate').innerText = country_cases;
				document.getElementById('mybotCountryDeaths').innerText = country_death;
				if(mybotDataSet["data"].text !== undefined){
					text1 = mybotDataSet["data"].text.text1;
					text2 = mybotDataSet["data"].text.text2;
					text3 = mybotDataSet["data"].text.text3;
					text4 = mybotDataSet["data"].text.text4;
					text5 = mybotDataSet["data"].text.text5;
					if(text1 != 'none'){
						document.getElementById('mybotCountryName').innerText = text1;
					}
					if(text2 != 'none'){
						document.getElementById('mybotCountryName2').innerText = text2;
					}
					if(text3 != 'none'){
						document.getElementById('mybotCountryNameDuplicate').innerText = text3;
					}
				}
				if(typeof mybotMultipleRedirectLinks !== undefined && mybotMultipleRedirectLinks ==1){
					redirectLink = mybotDataSet["data"].text.redirectLink;
					redirectLink2 = mybotDataSet["data"].text.redirectLink2;
					redirectLink3 = mybotDataSet["data"].text.redirectLink3;
					document.querySelector('.mybotface1, .mybotface3 ,.mybotface5').addEventListener('click', function() {
						window.open(redirectLink, '_self');
					});
					document.querySelector('.mybotface2, .mybotface6').addEventListener('click', function() {
						window.open(redirectLink2, '_self');
					});
					document.querySelector('.mybotface4').addEventListener('click', function() {
						window.open(redirectLink3, '_self');
					});
				}
			}
			else{
				world_cases = mybotDataSet["data"].world.cases;
				world_death = mybotDataSet["data"].world.deaths;
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
				if(typeof mybotCountryRecovered !== "undefined" && mybotCountryRecovered ==1){
						country_recovered = mybotDataSet["data"].country.recovered;
						document.getElementById('mybotCountryDeaths').innerHTML= country_recovered;
						document.getElementById('mybotCountryName2').innerText = capitalizeFLetter(country_name)+" Recovered";
				}
				if(typeof mybotWorldRecovered !== "undefined" && mybotWorldRecovered ==1){
						world_recovered = mybotDataSet["data"].world.recovered;
						document.getElementById('mybotWorldDeaths').innerText = world_recovered;
						document.getElementById('mybotWorldDeathsCases').innerText = "World Recovered";
				}
				if(typeof mybotMultipleDataFaceValues !== "undefined" && mybotMultipleDataFaceValues ==1){
					country_recovered = mybotDataSet["data"].country.recovered;
					world_recovered = mybotDataSet["data"].world.recovered;
					third_cases = mybotDataSet["data"].thirdlocation.cases;
					third_deaths = mybotDataSet["data"].thirdlocation.deaths;
					third_recovered = mybotDataSet["data"].thirdlocation.recovered;
					third_name = mybotDataSet["data"].thirdlocation.location;
					document.getElementById('mybotWorldCount').innerText = world_cases;
					document.getElementById('mybotWorldDeaths').innerText = world_death;
					document.getElementById('mybotWorldRecovered').innerText = world_recovered;
					document.getElementById('mybotCountryCount').innerText = country_cases;
					document.getElementById('mybotCountryDeaths').innerText = country_death;
					document.getElementById('mybotIndiaRecovered').innerText = country_recovered;
					document.getElementById('mybotUaeCount').innerText = third_cases;
					document.getElementById('mybotUaeDeaths').innerText = third_deaths;
					document.getElementById('mybotuaeRecovered').innerText = 	third_recovered;
				}
				if(typeof mybotLastSlideLocalDataPresent !== "undefined" && mybotLastSlideLocalDataPresent ==1){
					if(mybotDataSet["data"].thirdlocation !== undefined){
						local_text = mybotDataSet["data"].thirdlocation.location;
						local_count = mybotDataSet["data"].thirdlocation.cases;
						document.getElementById('mybotPrecautionText').innerText = capitalizeFLetter(local_text)+" Cases";;
						document.getElementById('mybotPrecautionTextCount').innerText = local_count;
					}
					else if (mybotDataSet["data"]["states"][mybotStateName] !== 'undefined') {
						mybotStatedata = mybotDataSet["data"]["states"][mybotStateName];
						state_cases = mybotStatedata.totalConfirmed;
						state_name = mybotStatedata.state_name;
						document.getElementById('mybotPrecautionText').innerText = capitalizeFLetter(state_name)+" Cases";;
						document.getElementById('mybotPrecautionTextCount').innerText = state_cases;
					}
					else{
						document.getElementById('mybotPrecautionText').innerText = "Stay Safe!";
					}

				}
				if(typeof mybotSecondSlideLocalDataPresent !== "undefined" && mybotSecondSlideLocalDataPresent ==1){
					if(mybotDataSet["data"].thirdlocation !== undefined){
						local_text = mybotDataSet["data"].thirdlocation.location;
						local_count = mybotDataSet["data"].thirdlocation.deaths;
						document.getElementById('mybotFace2TempContent').innerText = capitalizeFLetter(local_text)+" Deaths";;
						document.getElementById('mybotFace2TempCount').innerText = local_count;
					}
				}
				if(typeof mybotDynamicRedirectLinkEnabled !== "undefined" && mybotDynamicRedirectLinkEnabled == 1){
					if(mybotDataSet["data"].text.redirectLink !== undefined && mybotDataSet["data"].text.redirectLink != 'none'){
						redirectLink = mybotDataSet["data"].text.redirectLink;
						if(typeof mybotAppendReferLink !== undefined){
							redirectLink += mybotAppendReferLink;
						}
						document.getElementById('mybotstage').addEventListener('click', function() {
							if(mybotDragClick == false){
                window.open(redirectLink, '_blank');
              }
							setTimeout(function(){
						   mybotDragClick = false;
						  }, 200);
					 });
					}
				}
				if(mybotDataSet["data"].text !== undefined){
					text1 = mybotDataSet["data"].text.text1;
					text2 = mybotDataSet["data"].text.text2;
					text3 = mybotDataSet["data"].text.text3;
					text4 = mybotDataSet["data"].text.text4;
					text5 = mybotDataSet["data"].text.text5;
					text6 = mybotDataSet["data"].text.text6;
					text7 = mybotDataSet["data"].text.text7;
					text8 = mybotDataSet["data"].text.text8;
					text9 = mybotDataSet["data"].text.text9;
					if(typeof mybotMultipleDataFace !== "undefined" && mybotMultipleDataFace ==1){
						if(text1 != 'none'){
							document.getElementById('mybotWorldCases').innerText = text1;
						}
						if(text2 != 'none'){
							document.getElementById('mybotWorldDeathsCases').innerText = text2;
						}
						if(text3 != 'none'){
							document.getElementById('mybotWorldRecoveredCases').innerText = text3;
						}
						if(text4 != 'none'){
							document.getElementById('mybotCountryName').innerText = text4;
						}
						if(text5 != 'none'){
							document.getElementById('mybotCountryName2').innerText = text5;
						}
						if(text6 != 'none'){
							document.getElementById('mybotIndiaRecoveredCases').innerText = text6;
						}
						if(text7 != 'none'){
							document.getElementById('mybotUaeCases').innerText = text7;
						}
						if(text8 != 'none'){
							document.getElementById('mybotUaeDeathsCases').innerText = text8;
						}
						if(text9 != 'none'){
							document.getElementById('mybotUaeRecoveredCases').innerText = text9;
						}
					}
					else{
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
	}
}

function getScore() {
	var request = new XMLHttpRequest();
	url = 'https://unibots.warw.in//'+mybotStatAPI;
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
		x = document.getElementById('mybot-adcover');
		x.style.top = '0px';
		z = document.getElementById('mybotstage');
		z.style.top = '60px';
		adt = document.getElementById('mybot-ad-tag');
		adt.style.top = '56px';
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
				 if(mybotCloseTriggeredFlag){
          document.getElementById('dragItem').style.display = 'none';
          mybotScrollStartFlag = 0;
      }
			else {
				document.getElementById('dragItem').style.display = 'block';
				mybotScrollStartFlag = 0;
			}
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
				if(mybotCloseTriggeredFlag){
					document.getElementById('dragItem').style.display = 'block';
 				 mybotScrollFlag = 0;
		   }
		   else {
			 document.getElementById('dragItem').style.display = 'block';
			 mybotScrollFlag = 0;
		  }
     }
    }
	}
}

function capitalizeFLetter(input) {
  var string = input;
  x = string.charAt(0).toUpperCase() + string.slice(1);
	 return x;
}

function placeBotAndAd(){
	var botElement = document.getElementById("dragItem");
	var stageElement = document.getElementById("mybotstage");
	var adCoverElement = document.getElementById("mybot-adcover");
	var adtagElement = document.getElementById("mybot-ad-tag");
	var closeElement = document.getElementById("mybotClose");
	if (mybotadSmall =='') {
   document.getElementById('mybot-ad-tag').style.display = 'none';
  }
	if (botPosition=='right' || typeof botPosition==='undefined' ){
		botElement.classList.add("profile_div");
		adCoverElement.classList.add("mybot-adcover-right");
	}
	else if (botPosition=='left'){
		adtagElement.classList.add("mybot-ad-tag-left");
		stageElement.classList.add("mybotstage-left");
		botElement.classList.add("profile_div-left");
		adCoverElement.classList.add("mybot-adcover-left");
		closeElement.style.left = '5px';
	}
}
function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}window.ready(function(){if(window.location.href == 'https://laodong.vn/'){var html='<mybot> <div id="gabywa"></div> <div class="profile_div" id="dragItem"> <div class="row"> <div class="mybotstage" id="mybotstage"> <div class="mybotcubespinner"> <div class="mybotface1 mybotface"> <div class="mybotTopBar"> <span class="mybotPoweredBy"> Powered By </span> <span class="mybotPoweredByBrand"> Unibots </span> </div> <div class="mybotContent"> <div class="mybotSummary"> <span class="mybotLocation" id="mybotWorldCases"> World Cases </span> <div class="mybotCount" id="mybotWorldCount"> </div> </div> </div> <div class="mybotBottomBar mybotBottomBarLive"> <span class="">COVID-19 Cases</span> </div> </div> <div class="mybotface2 mybotface"></div> <div class="mybotface3 mybotface"> <div class="mybotTopBar"> <span class="mybotPoweredBy"> Powered By </span> <span class="mybotPoweredByBrand"> Unibots </span> </div> <div class="mybotContent"> <div class="mybotSummary"> <span class="mybotLocation" id="mybotWorldDeathsCases"> World Deaths </span> <div class="mybotCount" id="mybotWorldDeaths"> </div> </div> </div> <div class="mybotBottomBar mybotBottomBarLive"> <span class="">COVID-19 Cases</span> </div> </div> <div class="mybotface4 mybotface"> <div class="mybotTopBar"> <span class="mybotPoweredBy"> Powered By </span> <span class="mybotPoweredByBrand"> Unibots </span> </div> <div class="mybotContent"> <div class="mybotSummary"> <span class="mybotLocation" id="mybotCountryName"> India Cases </span> <div class="mybotCount" id="mybotCountryCount"> </div> </div> </div> <div class="mybotBottomBar mybotBottomBarLive"> <span class="">COVID-19 Cases</span> </div> </div> <div class="mybotface5 mybotface"> <div class="mybotTopBar"> <span class="mybotPoweredBy"> Powered By </span> <span class="mybotPoweredByBrand"> Unibots </span> </div> <div class="mybotContent"> <div class="mybotSummary"> <span class="mybotLocation" id="mybotCountryName2"> India Deaths </span> <div class="mybotCount" id="mybotCountryDeaths"> </div> </div> </div> <div class="mybotBottomBar mybotBottomBarLive"> <span class="">COVID-19 Cases</span> </div> </div> <div class="mybotface6 mybotface"> <div class="mybotTopBar"> <span class="mybotPoweredBy"> Powered By </span> <span class="mybotPoweredByBrand"> Unibots </span> </div> <div class="mybotContent"> <span class="mybotScoreLiveDot"></span> <div class="mybotSummary"> <span class="mybotLocation" id="mybotPrecautionText"> Stay Safe! </span>  </div> </div> <div class="mybotBottomBar mybotBottomBarLive"> <span class="">COVID-19 Cases</span> </div> </div> </div> </div> <div class="mybotclose" id="mybotClose"> </div> </div> <div class="row"> <div class="mybot-adcover" id="mybot-adcover"> <div class="mybot-ad-tag" id="mybot-ad-tag">Ad</div> <div class="col-hgt-ad" id="adSmall"> </div> </div> </div> </div></mybot>';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='mybot .mybotstage{cursor:pointer;bottom:-100px!important}mybot .mybot-adcover{bottom:-160px!important}.mybotSummary{font-family:"Lato",sans-serif!important;line-height:1.2!important;font-weight:600;color:#fff!important}mybot .mybotLocation{font-size:11px!important}.mybotBottomBar,.mybotTopBar{background:#fff!important;color:#29487d!important;font-size:10px!important}.mybotPoweredByBrand{font-weight:600!important;font-size:10px!important}mybot .mybotcubespinner .mybotface6{background:url(https://cdn.jsdelivr.net/gh/unib0ts/unibots/coronaWidget139/laodong.png)!important;background-size:100px 100px!important;background-color:#f5f5f5!important;background-position:center!important}@media screen and (max-width:635px){mybot .mybotcubespinner .mybotface6{background:url(https://cdn.jsdelivr.net/gh/unib0ts/unibots/coronaWidget139/laodong.png)!important;background-size:80px 80px!important;background-color:#f5f5f5!important;background-position:center!important}.mybotBottomBar,.mybotTopBar{font-size:8px!important}.mybotSummary{font-family:"Lato",sans-serif!important;font-weight:600;color:#fff!important;line-height:1.2!important}mybot .mybotLocation{font-size:8px!important}.mybotPoweredByBrand{font-weight:600!important;font-size:8px!important}mybot .mybotstage{bottom:-138px!important}}mybot .mybotcubespinner .mybotface1,.mybotface2,.mybotface3,.mybotface5,.mybotface4{background:#a61c20!important}';var rule_common='@import url(https://fonts.googleapis.com/css?family=Baloo+Chettan+2&display=swap);@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800|Satisfy);@import url(https://fonts.googleapis.com/css?family=Noto+Serif:400,700&display=swap);@import url(https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/coronaWidget32/NotoSerifBengali-hinted/NotoSerifBengali-Regular.ttf);mybot{font-family:"Lato",sans-serif;font-size:14px;font-weight:400;color:#333;position:sticky;z-index:2147483640;cursor:move}mybot *{-webkit-box-sizing:content-box!important;-moz-box-sizing:content-box!important;box-sizing:content-box!important}mybot img{-webkit-user-drag:none;-moz-user-drag:none;-khtml-user-drag:none}mybot .row{margin-right:0}mybot a,mybot a:hover,mybot a:focus{text-decoration:none;outline:none}mybot .profile_div{position:fixed;bottom:0;right:0;width:326px;height:160px;cursor:default;z-index:2147483647;pointer-events:none}mybot .profile_div-left{left:0}mybot .mybotclose{position:absolute;margin-top:-20px;display:none;width:20px;cursor:pointer;right:5px;pointer-events:all;filter:invert(12%) sepia(96%) saturate(7213%) hue-rotate(4deg) brightness(100%) contrast(117%)!important}@keyframes mybotspincube{from,to{-moz-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);-ms-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}12%{-moz-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);-ms-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}16%{-moz-transform:rotateY(-90deg);-ms-transform:rotateY(-90deg);transform:rotateY(-90deg)}30%{-moz-transform:rotateY(-90deg);-ms-transform:rotateY(-90deg);transform:rotateY(-90deg)}33%{-moz-transform:rotateY(-90deg) rotateZ(90deg);-ms-transform:rotateY(-90deg) rotateZ(90deg);transform:rotateY(-90deg) rotateZ(90deg)}47%{-moz-transform:rotateY(-90deg) rotateZ(90deg);-ms-transform:rotateY(-90deg) rotateZ(90deg);transform:rotateY(-90deg) rotateZ(90deg)}50%{-moz-transform:rotateY(-180deg) rotateZ(90deg);-ms-transform:rotateY(-180deg) rotateZ(90deg);transform:rotateY(-180deg) rotateZ(90deg)}63%{-moz-transform:rotateY(-180deg) rotateZ(90deg);-ms-transform:rotateY(-180deg) rotateZ(90deg);transform:rotateY(-180deg) rotateZ(90deg)}66%{-moz-transform:rotateY(90deg) rotateX(90deg);-ms-transform:rotateY(90deg) rotateX(90deg);transform:rotateY(90deg) rotateX(90deg)}80%{-moz-transform:rotateY(90deg) rotateX(90deg);-ms-transform:rotateY(90deg) rotateX(90deg);transform:rotateY(90deg) rotateX(90deg)}83%{-moz-transform:rotateX(90deg);-ms-transform:rotateX(90deg);transform:rotateX(90deg)}97%{-moz-transform:rotateX(90deg);-ms-transform:rotateX(90deg);transform:rotateX(90deg)}}mybot .mybotcubespinner{-webkit-animation-name:mybotspincube;-webkit-animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;-webkit-animation-duration:24s;animation-name:mybotspincube;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:24s;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:50px 50px 0;-moz-transform-origin:50px 50px 0;-ms-transform-origin:50px 50px 0;transform-origin:50px 50px 0}mybot .mybotcubespinner .mybotface{position:absolute;width:100px;height:100px;border:.9px solid #ccc;background:rgba(255,255,255,.8);box-shadow:inset 0 0 20px rgba(0,0,0,.2);text-align:center;border-radius:5px}mybot .mybotcubespinner .mybotface1{-webkit-transform:translateZ(50px);-moz-transform:translateZ(50px);-ms-transform:translateZ(50px);transform:translateZ(50px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface2{-webkit-transform:rotateY(90deg) translateZ(50px);-moz-transform:rotateY(90deg) translateZ(50px);-ms-transform:rotateY(90deg) translateZ(50px);transform:rotateY(90deg) translateZ(50px);background:url(https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/timesnowdemo.jpg);background-repeat:no-repeat;background-size:cover}mybot .mybotcubespinner .mybotface3{-webkit-transform:rotateY(90deg) rotateX(90deg) translateZ(50px);-moz-transform:rotateY(90deg) rotateX(90deg) translateZ(50px);-ms-transform:rotateY(90deg) rotateX(90deg) translateZ(50px);transform:rotateY(90deg) rotateX(90deg) translateZ(50px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface4{-webkit-transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);-moz-transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);-ms-transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface5{-webkit-transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);-moz-transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);-ms-transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface6{-webkit-transform:rotateX(-90deg) translateZ(50px);-moz-transform:rotateX(-90deg) translateZ(50px);-ms-transform:rotateX(-90deg) translateZ(50px);transform:rotateX(-90deg) translateZ(50px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotstage{width:100px;height:100px;bottom:60px;position:absolute;right:25px;font-size:15px;pointer-events:all}mybot .mybotstage-left{left:25px}.mybotTopBar{background:red;width:100px;height:15px;border-bottom:.9px solid #fff;color:#fff;text-align:center;margin:auto;line-height:15px}.mybotPoweredBy{font-size:9px;font-weight:600}.mybotPoweredByBrand{font-size:12px;font-weight:600}.mybotBottomBar{background:red;width:100px;height:15px;color:#fff;margin:auto;line-height:15px;text-align:center;bottom:0;position:absolute;font-size:12px}.mybotSummary{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;font-family:"Lato",sans-serif!important;font-weight:600}.mybotContent{color:#fff;text-align:center;overflow:hidden}@-webkit-keyframes mybotpulsate-bck{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(.9);transform:scale(.9)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes mybotpulsate-bck{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(.9);transform:scale(.9)}100%{-webkit-transform:scale(1);transform:scale(1)}}mybot .col-hgt-ad{height:50px;float:right;position:absolute;bottom:3px;left:3px;pointer-events:all}mybot .mybot-adcover{color:#fff;width:326px;height:56px;position:absolute;bottom:0;right:0;cursor:pointer}mybot .mybot-adcover-left{left:0}mybot .mybot-ad-tag{position:absolute;top:-10px;right:0;font-size:9px;z-index:1;color:#fff;cursor:pointer;background:#000;width:16px;text-align:center}mybot .mybot-ad-tag-left{left:0}@media screen and (max-width:635px){mybot .profile_div{width:326px;height:140px}.mybotSummary{font-size:12px}.mybotTopBar,.mybotBottomBar{width:80px;font-size:10px}.mybotPoweredBy{font-size:7px}.mybotPoweredByBrand{font-size:8px}mybot .mybotcubespinner .mybotface{position:absolute;width:80px;height:80px;border:.9px solid #ccc;background:rgba(255,255,255,.8);box-shadow:inset 0 0 10px rgba(0,0,0,.2);text-align:center;border-radius:5px}mybot .mybotstage{width:80px;height:80px;bottom:60px;position:absolute;right:20px;font-size:15px;pointer-events:all}mybot .mybotcubespinner .mybotface1{-webkit-transform:translateZ(40px);-moz-transform:translateZ(40px);-ms-transform:translateZ(40px);transform:translateZ(40px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface2{-webkit-transform:rotateY(90deg) translateZ(40px);-moz-transform:rotateY(90deg) translateZ(40px);-ms-transform:rotateY(90deg) translateZ(40px);transform:rotateY(90deg) translateZ(40px);background:url(https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/timesnowdemo.jpg);background-repeat:no-repeat;background-size:cover}mybot .mybotcubespinner .mybotface3{-webkit-transform:rotateY(90deg) rotateX(90deg) translateZ(40px);-moz-transform:rotateY(90deg) rotateX(90deg) translateZ(40px);-ms-transform:rotateY(90deg) rotateX(90deg) translateZ(40px);transform:rotateY(90deg) rotateX(90deg) translateZ(40px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface4{-webkit-transform:rotateY(180deg) rotateZ(90deg) translateZ(40px);-moz-transform:rotateY(180deg) rotateZ(90deg) translateZ(40px);-ms-transform:rotateY(180deg) rotateZ(90deg) translateZ(40px);transform:rotateY(180deg) rotateZ(90deg) translateZ(40px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface5{-webkit-transform:rotateY(-90deg) rotateZ(90deg) translateZ(40px);-moz-transform:rotateY(-90deg) rotateZ(90deg) translateZ(40px);-ms-transform:rotateY(-90deg) rotateZ(90deg) translateZ(40px);transform:rotateY(-90deg) rotateZ(90deg) translateZ(40px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner .mybotface6{-webkit-transform:rotateX(-90deg) translateZ(40px);-moz-transform:rotateX(-90deg) translateZ(40px);-ms-transform:rotateX(-90deg) translateZ(40px);transform:rotateX(-90deg) translateZ(40px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033)}mybot .mybotcubespinner{-webkit-animation-name:mybotspincube;-webkit-animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;-webkit-animation-duration:24s;animation-name:mybotspincube;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:24s;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:40px 40px 0;-moz-transform-origin:40px 40px 0;-ms-transform-origin:40px 40px 0;transform-origin:40px 40px 0}}mybot .closeBotFrontTop{margin-top:150px}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule+rule_common;}else{css.appendChild(document.createTextNode(rule));css.appendChild(document.createTextNode(rule_common));}document.getElementsByTagName('head')[0].appendChild(css);callOnDocumentReady();}});