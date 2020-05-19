mybotNewsbotEnabled =1;
mybotloadNewsbotScript = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/covid320x100pxClient1/script.js';
// mybotCovidurl = 'https://www.tienphong.vn/';

mybotLoadAdDefault = 0;
mybotAuthEnabled = 0;
mybotCloseEnabled = 1;
mybotClickCountEnabled = 1;
mybotClickLocation = '';
mybotStatAPI = 'get_stat_all';
mybotStartHour = 12;
mybotEndHour = 6;
mybotampEnabled = 0;

botPoweredBrand = '';

mybotGACode = 'UA-159929110-30';

var mybotScrollFlag = 0;
mybotScrollStartFlag = 0;
var mybotScrollPixelHeight = 45;
mybotScrollStartPixelHeight = 0;
// var mybotIsBottomScrollDisapperEnabled = 0;
// var mybotIsBottomScrollStartDisapperEnabled = 0;
// mybotMobileTopPlacement = 0;

mybotCountryDataname_728 = 'india';
mybotCountryDataname2_728 = 'United Arab Emirates';
mybotCustomData =1;
mybotadSmallM = '<div id="div-ub-1"></div>';
mybotadSmallD = '<div id="div-ub-2"></div>';
mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';

mybotubface2 = '<div class="ub-mb-content1_728 ub-mb-c_728"><div class="ub-mb-c-wrapper_728"><div class="ub-mb-c1-num_728" id="mybotWorldCount_728">611</div><div class="ub-mb-c1-name_728">CONFIRMED</div></div></div><div class="ub-mb-content2_728 ub-mb-c_728"><div class="ub-mb-c-wrapper_728"><div class="ub-mb-c1-num_728" id="mybotWorldRecovered_728">0</div><div class="ub-mb-c1-name_728">RECOVERED</div></div></div><div class="ub-mb-content3_728 ub-mb-c_728"><div class="ub-mb-c-wrapper_728"><div class="ub-mb-c1-num_728" id="mybotWorldDeaths_728">5</div><div class="ub-mb-c1-name_728">DEATHS</div></div></div>';
mybotubface3 = '<div class="ub-middleBar_728" id="mybotdataface3"><div class="ub-mb-content1_728 ub-mb-c_728"><div class="ub-mb-c-wrapper_728"><div class="ub-mb-c1-num_728" id="ub_mybotCountry3Count_728">681,706</div><div class="ub-mb-c1-name_728">CONFIRMED</div></div></div><div class="ub-mb-content2_728 ub-mb-c_728"><div class="ub-mb-c-wrapper_728"><div class="ub-mb-c1-num_728" id="ub_mybotCountry3Recovered_728">31,882</div><div class="ub-mb-c1-name_728">RECOVERED</div></div></div><div class="ub-mb-content3_728 ub-mb-c_728"><div class="ub-mb-c-wrapper_728"> <div class="ub-mb-c1-num_728" id="ub_mybotCountry3Deaths_728">149,215</div><div class="ub-mb-c1-name_728">DEATHS</div></div></div>';
mybotubface4 = '<div class="ub-mb-content1_728 ub-mb-c_728"><div class="ub-mb-c-wrapper_728"><div class="ub-mb-c1-num_728" id="mybotCountry4Count_728">611</div><div class="ub-mb-c1-name_728">CONFIRMED</div></div></div><div class="ub-mb-content2_728 ub-mb-c_728"><div class="ub-mb-c-wrapper_728"><div class="ub-mb-c1-num_728" id="mybotCountry4Recovered_728">0</div><div class="ub-mb-c1-name_728">RECOVERED</div></div></div><div class="ub-mb-content3_728 ub-mb-c_728"><div class="ub-mb-c-wrapper_728"><div class="ub-mb-c1-num_728" id="mybotCountry4Deaths_728">5</div><div class="ub-mb-c1-name_728">DEATHS</div></div></div>';
mybotClosevar = '<img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/genericCorona/close.svg" alt="Close Covid-19 Tracker">';

function mybotCustomFunction() {
  document.getElementById('gabywa_728').innerHTML=mybotgabywa;
  document.getElementById('ub-mybotdataface2').innerHTML=mybotubface2;
  document.getElementById('ub-mybotdataface3').innerHTML=mybotubface3;
  document.getElementById('ub-mybotdataface4').innerHTML=mybotubface4;
  document.getElementById('ub-rb-advisory-countrynameface2').innerHTML='WORLD';
  document.getElementById('ub-rb-advisory-countrynameface3').innerHTML='INDIA';
  document.getElementById('ub-rb-advisory-countrynameface4').innerHTML='WORLD';
  document.getElementById('map_728-countrynameface2').src ='https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/corona/World.png';
  document.getElementById('map_728-countrynameface3').src ='https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/corona/India.png';
  document.getElementById('map_728-countrynameface4').src ='https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/corona/World.png';
  if (!mobileCheck()) {
    document.getElementById('adSmall_728').innerHTML=mybotadSmallD;
  }
}

function loadAdCustom() {
    if (!mobileCheck()) {
      var s0 = document.createElement('script');
      s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
      s0.type = "text/javascript";
      document.getElementsByTagName('head')[0].appendChild(s0);

      var s1 = document.createElement('script');
      s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
      s1.type = "text/javascript";
      document.getElementsByTagName('head')[0].appendChild(s1);

      var s2 = document.createElement('script');
      s2.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScriptBusinessworld.js";
      s2.type = "text/javascript";
      document.getElementsByTagName('head')[0].appendChild(s2);
  }
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
	else if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
			if (!mobileCheck()) {
         	mybotStart();
			}
			else {
				mybotloadNewsbotWidget();
			}
	}
	else{
		mybotStart();
	}
}

function mybotStart(){
	mybotCustomFunction();
	loadAd('gabywa_728');
	if(mybotLoadAdDefault){
		loadAd('adSmall_728');
	}
	else{
		loadAdCustom('adSmall_728');
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
			 	document.getElementById('dragItem').style.display = 'block';
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
				document.querySelector('#adSmall_728').style.display = 'none';
				document.querySelector('.profile_div').style.display = 'none';
			 	mybotCloseTriggeredFlag = 1;
				if(typeof mybotampEnabled !== 'undefined' && mybotampEnabled ==1){
					mybotampClose();
				}
			})
		});
  }

	getScore_728();
	// runSequence();

	// setIntervalX(function () {
	// 	runSequence();
	// }, 1000, 9);

	// setInterval(function() {
	// 	runSequence();
	// }, 3600000);
	// dragElement(document.getElementById("dragItem"));
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

function putData2(mybotDataSet) {
	world_cases_728 = mybotDataSet["data"].world.cases;
	world_death_728 = mybotDataSet["data"].world.deaths;
	world_recovered_728 = mybotDataSet["data"].world.recovered;
	mybotCountrydata1_728 = mybotDataSet["data"][mybotCountryDataname_728];
	mybotCountrydata2_728 = mybotDataSet["data"][mybotCountryDataname2_728];
	country_cases_728 = mybotCountrydata1_728.cases;
	country_death_728 = mybotCountrydata1_728.deaths;
	country_recovered_728 = mybotCountrydata1_728.recovered;
	country_name_728 = mybotCountrydata1_728.location;
	country2_cases_728 = mybotCountrydata2_728.cases;
	country2_death_728 = mybotCountrydata2_728.deaths;
	country2_recovered_728 = mybotCountrydata2_728.recovered;
	country2_name_728 = mybotCountrydata2_728.location;

	if(typeof mybotCustomData !== 'undefined' && mybotCustomData == 1){
		document.getElementById('mybotWorldCount_728').innerText = world_cases_728;
		document.getElementById('mybotWorldDeaths_728').innerText = world_death_728;
		document.getElementById('mybotWorldRecovered_728').innerText = world_recovered_728;
		document.getElementById('mybotCountryCount_728').innerText = country_cases_728;
		document.getElementById('mybotCountryDeaths_728').innerText = country_death_728;
		document.getElementById('mybotCountryRecovered_728').innerText = country_recovered_728;
		document.getElementById('ub_mybotCountry3Count_728').innerText = country_cases_728;
		document.getElementById('ub_mybotCountry3Deaths_728').innerText = country_death_728;
		document.getElementById('ub_mybotCountry3Recovered_728').innerText = country_recovered_728;
		document.getElementById('mybotCountry4Count_728').innerText = world_cases_728;
		document.getElementById('mybotCountry4Deaths_728').innerText = world_death_728;
		document.getElementById('mybotCountry4Recovered_728').innerText = world_recovered_728;
	}
	else {
		document.getElementById('mybotCountryCount_728').innerText = country_cases_728;
		document.getElementById('mybotCountryDeaths_728').innerText = country_death_728;
		document.getElementById('mybotCountryRecovered_728').innerText = country_recovered_728;
		document.getElementById('mybotCountry2Count_728').innerText = country2_cases_728;
		document.getElementById('mybotCountry2Deaths_728').innerText = country2_death_728;
		document.getElementById('mybotCountry2Recovered_728').innerText = 	country2_recovered_728;
		document.getElementById('mybotCountry3Count_728').innerText = country2_cases_728;
		document.getElementById('mybotCountry3Deaths_728').innerText = country2_death_728;
		document.getElementById('mybotCountry3Recovered_728').innerText = 	country2_recovered_728;
	}
}

function getScore_728() {
	var request = new XMLHttpRequest();
	url_728 = 'https://unibots.warw.in//'+mybotStatAPI;
	// console.log(url);
	request.open('GET', url_728, true);
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			dataSet = [];
			var data_728 = request.responseText;
			data_728 = JSON.parse(data_728);
			// console.log(data);
			if(data_728.error === false) {
				putData2(data_728);
			}
			if(data_728.error === true){
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


function mobileTopPlacement(){
  if(mobileCheck()){
		x = document.getElementById('adSmall_728');
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

function mybotloadNewsbotWidget(){
  el = document.getElementsByTagName('mybot');
  el[0].parentNode.removeChild(el[0]);

  var s = document.createElement('script');
  s.src = mybotloadNewsbotScript;
  s.type = "text/javascript";
  s.async = true;
  document.getElementsByTagName('head')[0].appendChild(s);
}
function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}window.ready(function(){var html='<mybot> <div id="gabywa_728"></div> <div class="ub-container_728"> <div class="ub-roller-wrapper_728"> <div class="ub-roller_728"> <div class="ub-roller1_728 ub-ur_728"> <div class="ub-leftBar_728"> <div class="ub-lb-text_728">CORONA VIRUS</div> </div> <div class="ub-middleBar_728"> <div class="ub-mb-content1_728 ub-mb-c_728"> <div class="ub-mb-c-wrapper_728"> <div class="ub-mb-c1-num_728" id="mybotCountryCount_728">1,117</div> <div class="ub-mb-c1-name_728">CONFIRMED</div> </div> </div> <div class="ub-mb-content2_728 ub-mb-c_728"> <div class="ub-mb-c-wrapper_728"> <div class="ub-mb-c1-num_728" id="mybotCountryRecovered_728">102</div> <div class="ub-mb-c1-name_728">RECOVERED</div> </div> </div> <div class="ub-mb-content3_728 ub-mb-c_728"> <div class="ub-mb-c-wrapper_728"> <div class="ub-mb-c1-num_728" id="mybotCountryDeaths_728">32</div> <div class="ub-mb-c1-name_728">DEATHS</div> </div> </div> </div> <div class="ub-rightBar_728"> <div class="ub-rb-advisory_728"> <div class="ub-rb-advisory-img_text_728"> <svg class="ub-rb-advisory-img_text-img_728" xmlns="http://www.w3.org/2000/svg" width="24.197" height="25.225" viewBox="0 0 24.197 25.225"> <defs> <style> .a { fill: #ff7888; } </style> </defs> <path class="a" d="M185.3,129.246a.557.557,0,0,1-.395-.164l-11.074-11.074-11.22,11.016a.558.558,0,1,1-.782-.8l11.615-11.4a.558.558,0,0,1,.786,0L185.7,128.293a.558.558,0,0,1-.395.953Z" transform="translate(-161.664 -116.664)" /> <g transform="translate(4.709 6.784)"> <ellipse class="a" cx="1.381" cy="1.381" rx="1.381" ry="1.381" transform="translate(6.875 2.941)" /> <path class="a" d="M400.8,426.372c.049,1.09-.408,2.051-.854,2.075-.364.019-.579-.624-.707-1.507l.041-.035.037-.035.033-.036c.011-.012.021-.023.03-.035a.319.319,0,0,0,.022-.03.535.535,0,0,0,.04-.06l.012-.023c.006-.01.01-.019.015-.029s.009-.021.013-.031a.284.284,0,0,0,.012-.031.131.131,0,0,0,.005-.016.453.453,0,0,0,.015-.056.233.233,0,0,0,0-.026c0-.01,0-.02,0-.03a.145.145,0,0,0,0-.02c0-.007,0-.013,0-.02a.6.6,0,0,0-.028-.2s0,0,0-.008l-.007-.029c-.006-.024-.013-.056-.022-.094l-.009-.041-.008-.038-.007-.031c0-.013-.006-.027-.009-.041s0-.017-.005-.026-.008-.035-.012-.054a.113.113,0,0,1,0-.013c-.008-.038-.016-.078-.025-.121,0-.006,0-.011,0-.017l-.011-.052-.017-.083c-.006-.031-.013-.063-.02-.1-.043-.214-.092-.46-.143-.721l-.044-.223c0-.019-.007-.038-.011-.057l-.018-.095c-.02-.105-.041-.211-.061-.317,0-.025,0-.051,0-.076.1-.068.209-.15.324-.244l.05-.041c.044-.037.089-.075.133-.115l.06-.055a3.235,3.235,0,0,0,.268-.28l.035-.043.019-.024.045-.059h0c.017-.023.034-.048.05-.072a1.549,1.549,0,0,0,.248-1.411.62.62,0,0,0-.477-.379l-.039-.006h-.036c-.188,0-.324.082-.729.324l-.147.088c-.1.058-.209.123-.327.19,0-.031.007-.063.008-.094,0-.011,0-.022,0-.033s0-.043,0-.064,0-.051,0-.077,0-.051-.005-.076-.006-.05-.009-.075-.008-.05-.013-.075-.01-.048-.015-.071-.012-.048-.019-.072-.015-.051-.024-.076-.015-.043-.023-.063-.018-.045-.028-.067-.02-.044-.031-.066-.022-.043-.034-.064-.024-.042-.037-.062-.023-.037-.036-.055l0-.005c-.013-.02-.027-.039-.041-.058h0l-.045-.057c-.015-.018-.03-.037-.047-.054s-.032-.035-.049-.052-.034-.035-.051-.05l-.053-.048-.056-.045c-.017-.014-.035-.027-.052-.039s-.046-.032-.069-.047l-.057-.034-.01-.006-.049-.027c-.041-.021-.083-.042-.125-.059l-.026-.011-.047-.018-.024-.009c-.043-.015-.085-.028-.129-.039l-.062-.015-.053-.01-.04-.007-.058-.008c-.031-.357-.068-.7-.105-1q.183-.06.381-.132a5.643,5.643,0,0,0,.87-.394c.015.078.034.161.057.247a4.926,4.926,0,0,0,2.158,2.809c.016.54.056,1.694.133,2.839C400.669,425.219,400.775,425.848,400.8,426.372Z" transform="translate(-389.78 -410.006)" /> <path class="a" d="M353.639,314.588c-.284.826-2.762,3.112-2.9,3.331a6.288,6.288,0,0,0-.309.9c-.479-.661-.924-.995-1.357-1.014a.714.714,0,0,0-.161-.373.566.566,0,0,0-.452-.19c-.129,0-.334.023-.644.059a20.552,20.552,0,0,1-2.29.163,7.769,7.769,0,0,1-1.062-.064c-.07-.01-.138-.02-.2-.033l.386-.067c1.177-.205,2.666-.466,3.926-.813a10.577,10.577,0,0,0,3.953-2.5C353.172,313.517,353.924,313.761,353.639,314.588Z" transform="translate(-339.698 -310.529)" /> <ellipse class="a" cx="1.232" cy="1.232" rx="1.232" ry="1.232" transform="translate(2.315 5.628) rotate(-56.162)" /> <path class="a" d="M261.88,313.754a6.621,6.621,0,0,1-2.518.524,6.035,6.035,0,0,0,.331,2.453q.053.168.117.328a1.788,1.788,0,0,0-.7-.2.667.667,0,0,0-.657.861,3.1,3.1,0,0,0,1.33,1.745c-.026.1-.068.456-.115.475.005.108.012.272.016.47a11.548,11.548,0,0,1-.035,1.649c-.048.524-.146.94-.334.967-.418.061-.81-1.9-.955-2.727a2.5,2.5,0,0,1-.34.017c-.106,0-.218-.009-.335-.019,0,.923-.052,2.125-.376,2.172-.366.053-.712-1.445-.89-2.372-.732-.166-1.358-.4-1.4-.614-.042-.191.5-1.849.751-3.365a14.926,14.926,0,0,0,.183-2.721,22.1,22.1,0,0,1-1.218-2.814c-.467-1.49-.353-2.536.142-2.323.342.147,1.279,3.555,3.586,4.259,1.708.52,4.719-.1,4.8,0S263.5,313.157,261.88,313.754Z" transform="translate(-254.437 -305.295)" /> <path class="a" d="M355.307,250.457a.309.309,0,0,1,.09-.053,1.228,1.228,0,0,0,1.665-.071c.343.1.39.6.084,1.1a2.183,2.183,0,0,1-.847.769,1.733,1.733,0,0,1-1.157-1.335A.462.462,0,0,1,355.307,250.457Z" transform="translate(-350.03 -250.301)" /> <path class="a" d="M343.73,284.754a.173.173,0,0,1,.028-.05.675.675,0,0,0,.773-.49c.192-.044.351.179.342.5a1.2,1.2,0,0,1-.192.6.952.952,0,0,1-.917-.319A.254.254,0,0,1,343.73,284.754Z" transform="translate(-339.181 -282.486)" /> <g transform="translate(8.963 7.104)"> <ellipse class="a" cx="1.102" cy="1.102" rx="1.102" ry="1.102" transform="translate(2.248 0.364)" /> <path class="a" d="M433.241,394.412s.139,6.256.708,6.277.792-3.411.792-3.411.467,3.162.934,3.043.65-5.4.569-6.17a11.47,11.47,0,0,0,1.482-2.44c.3-.931-.061-1.662-.487-1.418s-.639,2.014-1.741,2.519a2.277,2.277,0,0,1-2.929-.773c-.609-.954-1.178-1.381-1.5-.954S431.675,393.785,433.241,394.412Z" transform="translate(-431.001 -390.245)" /> </g> <g transform="translate(4.505 10.563)"> <ellipse class="a" cx="1.102" cy="1.102" rx="1.102" ry="1.102" transform="translate(1.55)" /> <path class="a" d="M348.644,481.973c-.142-.02-1.853,1.259-2.8,1.218s-2.291-1.1-2.6-.873.715,1.665,1.494,1.848a11.419,11.419,0,0,0-.459,2.477,2.339,2.339,0,0,0,.774.364c.013.579.084,1.647.424,1.647s.529-.937.617-1.484l.114,0h.094c.088.547.286,1.483.617,1.483s.412-1.081.425-1.657c.388-.133.605-.31.57-.414-.061-.183-.528-2.619-.528-2.619a4.189,4.189,0,0,0,1.137-.985C348.867,482.46,348.786,481.993,348.644,481.973Z" transform="translate(-343.188 -480.775)" /> </g> </g> </svg> <div class="ub-rb-advisory-text_728">Stay Home</br> Stay Safe</div> </div> <div class="ub-rb-advisory-country_728">INDIA</div> <div class="ub-rb-advisory-poweredBy_728">Powered By Unibots</div> </div> <div class="ub-rb-map_728"> <svg class="ub-rb-map-image_728" xmlns="http://www.w3.org/2000/svg" width="68.205" height="76.435" viewBox="0 0 68.205 76.435"> <defs> <style> .a { fill: #ff7888; } </style> </defs> <path class="a" d="M139.55,79.421c-.526.211-1.252-.5-1.911-.073-.471.3-.7.856-1.135,1.249a1.764,1.764,0,0,1-.2.156,2.22,2.22,0,0,0-.766.664,1.407,1.407,0,0,0-.02.982,1.678,1.678,0,0,1-.41,1.883c-.386.456-.3.226-.351.681-.007.047.24.25.228.406-.013.2-.276.183-.311.315-.346,1.277-.012,2.564-1.706,2.817-.944.14-1.18-.185-.939.862.083.364.34.613.228,1.059s-.483.519-.666.819c-.416.683-.012.9.321,1.588.225.463.488,1.658-.365,1.686s-1.683-2.371-1.7-3.047c-.012-.409.15-1.347-.175-1.676-.479-.49-1.159-.023-1.263.509-.092.465.441,1.074-.022,1.563-.6.633-.688-.243-1.081-.6-.639-.584-1.2-.446-1.069-1.485.125-.971.846-1.327,1.528-1.963,1.157-1.08,1.164-2.392-.609-2.732-1.175-.227-2.2.747-3.246.428-.872-.266-.591-.609-.8-1.265-.238-.747-.233-.453-1.062-.4-.766.045-1.067-.231-1.661.283-.662.573-.566.9.16,1.425.628.451.984.436.318,1.019-.453.4-.972.34-.623,1.182.241.586,1.135.621,1.269,1.192.148.636-.476.907-.1,1.656.166.338.495.44.624.661.262.453.08.19.08.684,0,.541-.043,1.124-.043,1.683,0,.455.17,1.3-.2,1.641-.464.431-1.19.017-1.405-.478a2.6,2.6,0,0,1-1.3.984c-.458.213-1.27.3-1.432.8-.155.471.323,1.036.265,1.542-.147,1.252-1.8,2.214-2.808,2.79a8.565,8.565,0,0,0-3.066,2.266,6.24,6.24,0,0,1-1.284,1.6c-.469.31-.982.28-1.205.738-.328.669.177.694-.636,1.12-.443.231-1.425.345-1.455.931-.025.456.8.716.413,1.407a2.016,2.016,0,0,1-1.756.619c-.538-.09-.9-.784-1.445-.469-.383.223-.389,1.161-.489,1.548-.112.431-.448,1.756-1.167,1.362-.345-.188.02-1.225-.966-.766-1.075.5-.681,2.168-.679,3.057,0,.5-.108.987-.08,1.477.041.768.554.9.759,1.582.22.733-.478.859-.443,1.478.043.749.623.663.165,1.483-.626,1.12-1.981,1.52-1.447,3.046.161.461.747.857.368,1.4-.33.474-1.049.208-1.527.439a1.436,1.436,0,0,0-.847,1.48c.128.519.846.579.518,1.13-.628,1.061-2.156-.251-2.52,1.2-.213.849-.416,1.971-1.44,2.352-2.491.927-3.431-2.987-3.957-4.552a20.132,20.132,0,0,0-1.262-3.517,20.322,20.322,0,0,1-2.251-4.375c-.495-1.72-.752-3.5-1.359-5.192-.434-1.21-.756-2.459-1.2-3.667-.366-1.007-.945-1.766-1.29-2.777a13.278,13.278,0,0,1-.241-3.894c-.037-1.164-1.192-2.114-.857-3.231a1.542,1.542,0,0,1,.07-.188c.238-.534.559-.6.559-1.172,0-.518-.468-.947-.644-1.4-.333-.852.359-1.132.136-1.9-.378-1.3-1.308-.008-1.435.621-.085.428-.151.782-.231,1.072-.253.911-.641,1.21-2.176,1.279-1.935.086-2.494-.182-3.523-1.871-.281-.461-.318-1.13-.638-1.548-.276-.363-1.169-.5-1.287-.9-.271-.922,1.67-.383,2.158-.393.436-.008,1.923-.107,1.21-.917-.408-.465-1.024.01-1.512.137a1.9,1.9,0,0,1-1.893-.22c-.553-.523-.4-1.408-.781-2.039-.253-.421-.949-.727-.784-1.36.2-.768.787-.2,1.362-.176-.483-.921.774-.726,1.314-.721a4.05,4.05,0,0,1,.738-.017c.483.11.777.6,1.253.676.273.043.787-.276,1.026-.391,1.049-.506.285-.222,1.027.461.321-.271.406-1.648.323-2.6a2.616,2.616,0,0,0-.163-.8c-.4-.8-1.23-.363-1.432-1.255-.095-.416.316-1.127.158-1.45-.4-.808-1.06.1-1.59-.4-.628-.594.331-1.345.7-1.735.728-.766.919-2.044,2.249-1.62-.042.872.5.619.967.473.5-.16.518-.345,1.14-.368.3-.012.639.125.939-.017.752-.353.691-1.255,1.039-1.8s.961-.626,1.417-1.1c.914-.961.591-2.51,1.841-2.928.541-.18.679.032.931-.479.28-.566-.258-1.117.324-1.638.683-.614,1.232-.208,1.32-1.354.052-.681-.318-.791.523-1.218.4-.2,1.152-.073.861-.874-.211-.584-.549-.328-1.057-.33-.446,0-.917.033-1.212-.365-.165-.223.018-.731-.208-.947-.363-.346-1.485.077-1.691-.638-.145-.494.548-1.067.483-1.651-.02-.178-.3-.293-.316-.553a1.854,1.854,0,0,1,.215-.821,9.6,9.6,0,0,0,.629-1.472,1.526,1.526,0,0,0-.01-.636c-.173-.787-.606-.763-1.062-1.359-.3-.391-.28-.752-.683-1.107-.22-.193-.679-.31-.942-.563a6.261,6.261,0,0,1,1.04-1.507,2.633,2.633,0,0,1,1.528-.584,9.691,9.691,0,0,1,1.548-.3,6.967,6.967,0,0,1,1.6-.087c.485.147,1.09,1.167,1.432,1.507a10.524,10.524,0,0,0,1.693,1.064c.461.325.674.892,1.25,1.035.987.243.934-.434,1,.926.653.153.734-.544,1.245-.809.39-.2.937-.193,1.338-.356.265-.107.2-.285.707-.328a4.89,4.89,0,0,1,.877.1c.473.042,1.507-.052,1.888.295,1.069.972-.4,2.554-.847,3.271-.132.211-.215.371-.32.579-.155.306.063.637-.313.877-.486.31-.877-.319-1.372.09.473.44-.092.556.007.964.19.782.39.265.861.616a1.029,1.029,0,0,1,.469,1.145c-.022.108-.318.388-.378.564-.047.143.05.336,0,.479-.524,1.622-1.833-.519-1.935.956-.028.423.469.887.574,1.259a5.115,5.115,0,0,1,.085,1.067,1.267,1.267,0,0,1,1.257.481c.538.711.018.541.979.739,1.082.221.889.816,1.555,1.4.716.623,1.051.809.633,1.333a4.76,4.76,0,0,1-.524.531c-.609.548-.731.676-.779,1.4-.027.388.267.992-.454.857.386.676,1.079.872,1.726,1.2,1.039.533,2.015,1.132,3.027,1.7,1.064.6,2.4.439,3.563.912a6.281,6.281,0,0,0,2.306.521c1.6.1,2.768,1.618,4.192,1.6,1.325-.012,2.371-.543,3.756-.093.408-.834-.518-1.115-.546-1.833-.027-.644.613-.817.083-1.367-.156-.163-.789-.013-.721-.511.028-.208.538-.388.717-.468a2.834,2.834,0,0,1,.516-.168,1.912,1.912,0,0,1,1.65.235c.827.751-.295,1.025-.231,1.753s1.107,1.119,1.74,1.09,1.36.027,2.078.017a4.142,4.142,0,0,0,2.675-.757c.751-.621.5-.859-.087-1.43-.386-.375-.568-.493-.468-1.187.483-.236.631.145.989.152a10.789,10.789,0,0,0,1.154-.258c.02-.434-.413-.644-.065-1.014.3-.319.971.108,1.3-.233.3-.311-.115-.634.161-.966.211-.256.774-.052,1.055-.261.3-.221.313-.594.546-.861a7.514,7.514,0,0,1,.724-.564c.726-.633,1.239-1.695,2.274-1.681a3.3,3.3,0,0,1,1.418.408,2.927,2.927,0,0,1,1.2,1.076c.266.493-.121,1.357.195,1.788s1.2-.136,1.475.493c.285.648-.549.924.075,1.656.273.321.508.027.624.511A.729.729,0,0,1,139.55,79.421Z" transform="translate(-71.745 -55.104)" /> </svg> </div> </div> </div> <div class="ub-roller2_728 ub-ur_728"> <div class="ub-leftBar_728"> <div class="ub-lb-text_728">CORONA VIRUS</div> </div> <div class="ub-middleBar_728" id="ub-mybotdataface2"> <div class="ub-mb-content1_728 ub-mb-c_728"> <div class="ub-mb-c-wrapper_728"> <div class="ub-mb-c1-num_728" id="mybotCountry2Count_728">611</div> <div class="ub-mb-c1-name_728">CONFIRMED</div> </div> </div> <div class="ub-mb-content2_728 ub-mb-c_728"> <div class="ub-mb-c-wrapper_728"> <div class="ub-mb-c1-num_728" id="mybotCountry2Recovered_728">0</div> <div class="ub-mb-c1-name_728">RECOVERED</div> </div> </div> <div class="ub-mb-content3_728 ub-mb-c_728"> <div class="ub-mb-c-wrapper_728"> <div class="ub-mb-c1-num_728" id="mybotCountry2Deaths_728">5</div> <div class="ub-mb-c1-name_728">DEATHS</div> </div> </div> </div> <div class="ub-rightBar_728"> <div class="ub-rb-advisory_728"> <div class="ub-rb-advisory-img_text_728"> <svg class="ub-rb-advisory-img_text-img_728" xmlns="http://www.w3.org/2000/svg" width="24.197" height="25.225" viewBox="0 0 24.197 25.225"> <defs> <style> .a { fill: #ff7888; } </style> </defs> <path class="a" d="M185.3,129.246a.557.557,0,0,1-.395-.164l-11.074-11.074-11.22,11.016a.558.558,0,1,1-.782-.8l11.615-11.4a.558.558,0,0,1,.786,0L185.7,128.293a.558.558,0,0,1-.395.953Z" transform="translate(-161.664 -116.664)" /> <g transform="translate(4.709 6.784)"> <ellipse class="a" cx="1.381" cy="1.381" rx="1.381" ry="1.381" transform="translate(6.875 2.941)" /> <path class="a" d="M400.8,426.372c.049,1.09-.408,2.051-.854,2.075-.364.019-.579-.624-.707-1.507l.041-.035.037-.035.033-.036c.011-.012.021-.023.03-.035a.319.319,0,0,0,.022-.03.535.535,0,0,0,.04-.06l.012-.023c.006-.01.01-.019.015-.029s.009-.021.013-.031a.284.284,0,0,0,.012-.031.131.131,0,0,0,.005-.016.453.453,0,0,0,.015-.056.233.233,0,0,0,0-.026c0-.01,0-.02,0-.03a.145.145,0,0,0,0-.02c0-.007,0-.013,0-.02a.6.6,0,0,0-.028-.2s0,0,0-.008l-.007-.029c-.006-.024-.013-.056-.022-.094l-.009-.041-.008-.038-.007-.031c0-.013-.006-.027-.009-.041s0-.017-.005-.026-.008-.035-.012-.054a.113.113,0,0,1,0-.013c-.008-.038-.016-.078-.025-.121,0-.006,0-.011,0-.017l-.011-.052-.017-.083c-.006-.031-.013-.063-.02-.1-.043-.214-.092-.46-.143-.721l-.044-.223c0-.019-.007-.038-.011-.057l-.018-.095c-.02-.105-.041-.211-.061-.317,0-.025,0-.051,0-.076.1-.068.209-.15.324-.244l.05-.041c.044-.037.089-.075.133-.115l.06-.055a3.235,3.235,0,0,0,.268-.28l.035-.043.019-.024.045-.059h0c.017-.023.034-.048.05-.072a1.549,1.549,0,0,0,.248-1.411.62.62,0,0,0-.477-.379l-.039-.006h-.036c-.188,0-.324.082-.729.324l-.147.088c-.1.058-.209.123-.327.19,0-.031.007-.063.008-.094,0-.011,0-.022,0-.033s0-.043,0-.064,0-.051,0-.077,0-.051-.005-.076-.006-.05-.009-.075-.008-.05-.013-.075-.01-.048-.015-.071-.012-.048-.019-.072-.015-.051-.024-.076-.015-.043-.023-.063-.018-.045-.028-.067-.02-.044-.031-.066-.022-.043-.034-.064-.024-.042-.037-.062-.023-.037-.036-.055l0-.005c-.013-.02-.027-.039-.041-.058h0l-.045-.057c-.015-.018-.03-.037-.047-.054s-.032-.035-.049-.052-.034-.035-.051-.05l-.053-.048-.056-.045c-.017-.014-.035-.027-.052-.039s-.046-.032-.069-.047l-.057-.034-.01-.006-.049-.027c-.041-.021-.083-.042-.125-.059l-.026-.011-.047-.018-.024-.009c-.043-.015-.085-.028-.129-.039l-.062-.015-.053-.01-.04-.007-.058-.008c-.031-.357-.068-.7-.105-1q.183-.06.381-.132a5.643,5.643,0,0,0,.87-.394c.015.078.034.161.057.247a4.926,4.926,0,0,0,2.158,2.809c.016.54.056,1.694.133,2.839C400.669,425.219,400.775,425.848,400.8,426.372Z" transform="translate(-389.78 -410.006)" /> <path class="a" d="M353.639,314.588c-.284.826-2.762,3.112-2.9,3.331a6.288,6.288,0,0,0-.309.9c-.479-.661-.924-.995-1.357-1.014a.714.714,0,0,0-.161-.373.566.566,0,0,0-.452-.19c-.129,0-.334.023-.644.059a20.552,20.552,0,0,1-2.29.163,7.769,7.769,0,0,1-1.062-.064c-.07-.01-.138-.02-.2-.033l.386-.067c1.177-.205,2.666-.466,3.926-.813a10.577,10.577,0,0,0,3.953-2.5C353.172,313.517,353.924,313.761,353.639,314.588Z" transform="translate(-339.698 -310.529)" /> <ellipse class="a" cx="1.232" cy="1.232" rx="1.232" ry="1.232" transform="translate(2.315 5.628) rotate(-56.162)" /> <path class="a" d="M261.88,313.754a6.621,6.621,0,0,1-2.518.524,6.035,6.035,0,0,0,.331,2.453q.053.168.117.328a1.788,1.788,0,0,0-.7-.2.667.667,0,0,0-.657.861,3.1,3.1,0,0,0,1.33,1.745c-.026.1-.068.456-.115.475.005.108.012.272.016.47a11.548,11.548,0,0,1-.035,1.649c-.048.524-.146.94-.334.967-.418.061-.81-1.9-.955-2.727a2.5,2.5,0,0,1-.34.017c-.106,0-.218-.009-.335-.019,0,.923-.052,2.125-.376,2.172-.366.053-.712-1.445-.89-2.372-.732-.166-1.358-.4-1.4-.614-.042-.191.5-1.849.751-3.365a14.926,14.926,0,0,0,.183-2.721,22.1,22.1,0,0,1-1.218-2.814c-.467-1.49-.353-2.536.142-2.323.342.147,1.279,3.555,3.586,4.259,1.708.52,4.719-.1,4.8,0S263.5,313.157,261.88,313.754Z" transform="translate(-254.437 -305.295)" /> <path class="a" d="M355.307,250.457a.309.309,0,0,1,.09-.053,1.228,1.228,0,0,0,1.665-.071c.343.1.39.6.084,1.1a2.183,2.183,0,0,1-.847.769,1.733,1.733,0,0,1-1.157-1.335A.462.462,0,0,1,355.307,250.457Z" transform="translate(-350.03 -250.301)" /> <path class="a" d="M343.73,284.754a.173.173,0,0,1,.028-.05.675.675,0,0,0,.773-.49c.192-.044.351.179.342.5a1.2,1.2,0,0,1-.192.6.952.952,0,0,1-.917-.319A.254.254,0,0,1,343.73,284.754Z" transform="translate(-339.181 -282.486)" /> <g transform="translate(8.963 7.104)"> <ellipse class="a" cx="1.102" cy="1.102" rx="1.102" ry="1.102" transform="translate(2.248 0.364)" /> <path class="a" d="M433.241,394.412s.139,6.256.708,6.277.792-3.411.792-3.411.467,3.162.934,3.043.65-5.4.569-6.17a11.47,11.47,0,0,0,1.482-2.44c.3-.931-.061-1.662-.487-1.418s-.639,2.014-1.741,2.519a2.277,2.277,0,0,1-2.929-.773c-.609-.954-1.178-1.381-1.5-.954S431.675,393.785,433.241,394.412Z" transform="translate(-431.001 -390.245)" /> </g> <g transform="translate(4.505 10.563)"> <ellipse class="a" cx="1.102" cy="1.102" rx="1.102" ry="1.102" transform="translate(1.55)" /> <path class="a" d="M348.644,481.973c-.142-.02-1.853,1.259-2.8,1.218s-2.291-1.1-2.6-.873.715,1.665,1.494,1.848a11.419,11.419,0,0,0-.459,2.477,2.339,2.339,0,0,0,.774.364c.013.579.084,1.647.424,1.647s.529-.937.617-1.484l.114,0h.094c.088.547.286,1.483.617,1.483s.412-1.081.425-1.657c.388-.133.605-.31.57-.414-.061-.183-.528-2.619-.528-2.619a4.189,4.189,0,0,0,1.137-.985C348.867,482.46,348.786,481.993,348.644,481.973Z" transform="translate(-343.188 -480.775)" /> </g> </g> </svg> <div class="ub-rb-advisory-text_728">Stay Home</br> Stay Safe</div> </div> <div class="ub-rb-advisory-country_728" id="ub-rb-advisory-countrynameface2">UAE</div> <div class="ub-rb-advisory-poweredBy_728">Powered By Unibots</div> </div> <div class="ub-rb-map_728"> <img class="map_728" id="map_728-countrynameface2" src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/corona/UAE.png" width="68.205" height="76.435" viewBox="0 0 68.205 76.435"> <defs> <style> .a { fill: #ff7888; } </style> </defs> <path class="a" d="M139.55,79.421c-.526.211-1.252-.5-1.911-.073-.471.3-.7.856-1.135,1.249a1.764,1.764,0,0,1-.2.156,2.22,2.22,0,0,0-.766.664,1.407,1.407,0,0,0-.02.982,1.678,1.678,0,0,1-.41,1.883c-.386.456-.3.226-.351.681-.007.047.24.25.228.406-.013.2-.276.183-.311.315-.346,1.277-.012,2.564-1.706,2.817-.944.14-1.18-.185-.939.862.083.364.34.613.228,1.059s-.483.519-.666.819c-.416.683-.012.9.321,1.588.225.463.488,1.658-.365,1.686s-1.683-2.371-1.7-3.047c-.012-.409.15-1.347-.175-1.676-.479-.49-1.159-.023-1.263.509-.092.465.441,1.074-.022,1.563-.6.633-.688-.243-1.081-.6-.639-.584-1.2-.446-1.069-1.485.125-.971.846-1.327,1.528-1.963,1.157-1.08,1.164-2.392-.609-2.732-1.175-.227-2.2.747-3.246.428-.872-.266-.591-.609-.8-1.265-.238-.747-.233-.453-1.062-.4-.766.045-1.067-.231-1.661.283-.662.573-.566.9.16,1.425.628.451.984.436.318,1.019-.453.4-.972.34-.623,1.182.241.586,1.135.621,1.269,1.192.148.636-.476.907-.1,1.656.166.338.495.44.624.661.262.453.08.19.08.684,0,.541-.043,1.124-.043,1.683,0,.455.17,1.3-.2,1.641-.464.431-1.19.017-1.405-.478a2.6,2.6,0,0,1-1.3.984c-.458.213-1.27.3-1.432.8-.155.471.323,1.036.265,1.542-.147,1.252-1.8,2.214-2.808,2.79a8.565,8.565,0,0,0-3.066,2.266,6.24,6.24,0,0,1-1.284,1.6c-.469.31-.982.28-1.205.738-.328.669.177.694-.636,1.12-.443.231-1.425.345-1.455.931-.025.456.8.716.413,1.407a2.016,2.016,0,0,1-1.756.619c-.538-.09-.9-.784-1.445-.469-.383.223-.389,1.161-.489,1.548-.112.431-.448,1.756-1.167,1.362-.345-.188.02-1.225-.966-.766-1.075.5-.681,2.168-.679,3.057,0,.5-.108.987-.08,1.477.041.768.554.9.759,1.582.22.733-.478.859-.443,1.478.043.749.623.663.165,1.483-.626,1.12-1.981,1.52-1.447,3.046.161.461.747.857.368,1.4-.33.474-1.049.208-1.527.439a1.436,1.436,0,0,0-.847,1.48c.128.519.846.579.518,1.13-.628,1.061-2.156-.251-2.52,1.2-.213.849-.416,1.971-1.44,2.352-2.491.927-3.431-2.987-3.957-4.552a20.132,20.132,0,0,0-1.262-3.517,20.322,20.322,0,0,1-2.251-4.375c-.495-1.72-.752-3.5-1.359-5.192-.434-1.21-.756-2.459-1.2-3.667-.366-1.007-.945-1.766-1.29-2.777a13.278,13.278,0,0,1-.241-3.894c-.037-1.164-1.192-2.114-.857-3.231a1.542,1.542,0,0,1,.07-.188c.238-.534.559-.6.559-1.172,0-.518-.468-.947-.644-1.4-.333-.852.359-1.132.136-1.9-.378-1.3-1.308-.008-1.435.621-.085.428-.151.782-.231,1.072-.253.911-.641,1.21-2.176,1.279-1.935.086-2.494-.182-3.523-1.871-.281-.461-.318-1.13-.638-1.548-.276-.363-1.169-.5-1.287-.9-.271-.922,1.67-.383,2.158-.393.436-.008,1.923-.107,1.21-.917-.408-.465-1.024.01-1.512.137a1.9,1.9,0,0,1-1.893-.22c-.553-.523-.4-1.408-.781-2.039-.253-.421-.949-.727-.784-1.36.2-.768.787-.2,1.362-.176-.483-.921.774-.726,1.314-.721a4.05,4.05,0,0,1,.738-.017c.483.11.777.6,1.253.676.273.043.787-.276,1.026-.391,1.049-.506.285-.222,1.027.461.321-.271.406-1.648.323-2.6a2.616,2.616,0,0,0-.163-.8c-.4-.8-1.23-.363-1.432-1.255-.095-.416.316-1.127.158-1.45-.4-.808-1.06.1-1.59-.4-.628-.594.331-1.345.7-1.735.728-.766.919-2.044,2.249-1.62-.042.872.5.619.967.473.5-.16.518-.345,1.14-.368.3-.012.639.125.939-.017.752-.353.691-1.255,1.039-1.8s.961-.626,1.417-1.1c.914-.961.591-2.51,1.841-2.928.541-.18.679.032.931-.479.28-.566-.258-1.117.324-1.638.683-.614,1.232-.208,1.32-1.354.052-.681-.318-.791.523-1.218.4-.2,1.152-.073.861-.874-.211-.584-.549-.328-1.057-.33-.446,0-.917.033-1.212-.365-.165-.223.018-.731-.208-.947-.363-.346-1.485.077-1.691-.638-.145-.494.548-1.067.483-1.651-.02-.178-.3-.293-.316-.553a1.854,1.854,0,0,1,.215-.821,9.6,9.6,0,0,0,.629-1.472,1.526,1.526,0,0,0-.01-.636c-.173-.787-.606-.763-1.062-1.359-.3-.391-.28-.752-.683-1.107-.22-.193-.679-.31-.942-.563a6.261,6.261,0,0,1,1.04-1.507,2.633,2.633,0,0,1,1.528-.584,9.691,9.691,0,0,1,1.548-.3,6.967,6.967,0,0,1,1.6-.087c.485.147,1.09,1.167,1.432,1.507a10.524,10.524,0,0,0,1.693,1.064c.461.325.674.892,1.25,1.035.987.243.934-.434,1,.926.653.153.734-.544,1.245-.809.39-.2.937-.193,1.338-.356.265-.107.2-.285.707-.328a4.89,4.89,0,0,1,.877.1c.473.042,1.507-.052,1.888.295,1.069.972-.4,2.554-.847,3.271-.132.211-.215.371-.32.579-.155.306.063.637-.313.877-.486.31-.877-.319-1.372.09.473.44-.092.556.007.964.19.782.39.265.861.616a1.029,1.029,0,0,1,.469,1.145c-.022.108-.318.388-.378.564-.047.143.05.336,0,.479-.524,1.622-1.833-.519-1.935.956-.028.423.469.887.574,1.259a5.115,5.115,0,0,1,.085,1.067,1.267,1.267,0,0,1,1.257.481c.538.711.018.541.979.739,1.082.221.889.816,1.555,1.4.716.623,1.051.809.633,1.333a4.76,4.76,0,0,1-.524.531c-.609.548-.731.676-.779,1.4-.027.388.267.992-.454.857.386.676,1.079.872,1.726,1.2,1.039.533,2.015,1.132,3.027,1.7,1.064.6,2.4.439,3.563.912a6.281,6.281,0,0,0,2.306.521c1.6.1,2.768,1.618,4.192,1.6,1.325-.012,2.371-.543,3.756-.093.408-.834-.518-1.115-.546-1.833-.027-.644.613-.817.083-1.367-.156-.163-.789-.013-.721-.511.028-.208.538-.388.717-.468a2.834,2.834,0,0,1,.516-.168,1.912,1.912,0,0,1,1.65.235c.827.751-.295,1.025-.231,1.753s1.107,1.119,1.74,1.09,1.36.027,2.078.017a4.142,4.142,0,0,0,2.675-.757c.751-.621.5-.859-.087-1.43-.386-.375-.568-.493-.468-1.187.483-.236.631.145.989.152a10.789,10.789,0,0,0,1.154-.258c.02-.434-.413-.644-.065-1.014.3-.319.971.108,1.3-.233.3-.311-.115-.634.161-.966.211-.256.774-.052,1.055-.261.3-.221.313-.594.546-.861a7.514,7.514,0,0,1,.724-.564c.726-.633,1.239-1.695,2.274-1.681a3.3,3.3,0,0,1,1.418.408,2.927,2.927,0,0,1,1.2,1.076c.266.493-.121,1.357.195,1.788s1.2-.136,1.475.493c.285.648-.549.924.075,1.656.273.321.508.027.624.511A.729.729,0,0,1,139.55,79.421Z" transform="translate(-71.745 -55.104)" /></svg> </div> </div> </div> <div class="ub-roller3_728 ub-ur_728"> <div class="ub-leftBar_728"> <div class="ub-lb-text_728">CORONA VIRUS</div> </div> <div class="ub-middleBar_728" id="ub-mybotdataface3"> <div class="ub-mb-content1_728 ub-mb-c_728"> <div class="ub-mb-c-wrapper_728"> <div class="ub-mb-c1-num_728" id="mybotWorldCount_728">681,706</div> <div class="ub-mb-c1-name_728">CONFIRMED</div> </div> </div> <div class="ub-mb-content2_728 ub-mb-c_728"> <div class="ub-mb-c-wrapper_728"> <div class="ub-mb-c1-num_728" id="mybotWorldRecovered_728">31,882</div> <div class="ub-mb-c1-name_728">RECOVERED</div> </div> </div> <div class="ub-mb-content3_728 ub-mb-c_728"> <div class="ub-mb-c-wrapper_728"> <div class="ub-mb-c1-num_728" id="mybotWorldDeaths_728">149,215</div> <div class="ub-mb-c1-name_728">DEATHS</div> </div> </div> </div> <div class="ub-rightBar_728"> <div class="ub-rb-advisory_728"> <div class="ub-rb-advisory-img_text_728"> <svg class="ub-rb-advisory-img_text-img_728" xmlns="http://www.w3.org/2000/svg" width="24.197" height="25.225" viewBox="0 0 24.197 25.225"> <defs> <style> .a { fill: #ff7888; } </style> </defs> <path class="a" d="M185.3,129.246a.557.557,0,0,1-.395-.164l-11.074-11.074-11.22,11.016a.558.558,0,1,1-.782-.8l11.615-11.4a.558.558,0,0,1,.786,0L185.7,128.293a.558.558,0,0,1-.395.953Z" transform="translate(-161.664 -116.664)" /> <g transform="translate(4.709 6.784)"> <ellipse class="a" cx="1.381" cy="1.381" rx="1.381" ry="1.381" transform="translate(6.875 2.941)" /> <path class="a" d="M400.8,426.372c.049,1.09-.408,2.051-.854,2.075-.364.019-.579-.624-.707-1.507l.041-.035.037-.035.033-.036c.011-.012.021-.023.03-.035a.319.319,0,0,0,.022-.03.535.535,0,0,0,.04-.06l.012-.023c.006-.01.01-.019.015-.029s.009-.021.013-.031a.284.284,0,0,0,.012-.031.131.131,0,0,0,.005-.016.453.453,0,0,0,.015-.056.233.233,0,0,0,0-.026c0-.01,0-.02,0-.03a.145.145,0,0,0,0-.02c0-.007,0-.013,0-.02a.6.6,0,0,0-.028-.2s0,0,0-.008l-.007-.029c-.006-.024-.013-.056-.022-.094l-.009-.041-.008-.038-.007-.031c0-.013-.006-.027-.009-.041s0-.017-.005-.026-.008-.035-.012-.054a.113.113,0,0,1,0-.013c-.008-.038-.016-.078-.025-.121,0-.006,0-.011,0-.017l-.011-.052-.017-.083c-.006-.031-.013-.063-.02-.1-.043-.214-.092-.46-.143-.721l-.044-.223c0-.019-.007-.038-.011-.057l-.018-.095c-.02-.105-.041-.211-.061-.317,0-.025,0-.051,0-.076.1-.068.209-.15.324-.244l.05-.041c.044-.037.089-.075.133-.115l.06-.055a3.235,3.235,0,0,0,.268-.28l.035-.043.019-.024.045-.059h0c.017-.023.034-.048.05-.072a1.549,1.549,0,0,0,.248-1.411.62.62,0,0,0-.477-.379l-.039-.006h-.036c-.188,0-.324.082-.729.324l-.147.088c-.1.058-.209.123-.327.19,0-.031.007-.063.008-.094,0-.011,0-.022,0-.033s0-.043,0-.064,0-.051,0-.077,0-.051-.005-.076-.006-.05-.009-.075-.008-.05-.013-.075-.01-.048-.015-.071-.012-.048-.019-.072-.015-.051-.024-.076-.015-.043-.023-.063-.018-.045-.028-.067-.02-.044-.031-.066-.022-.043-.034-.064-.024-.042-.037-.062-.023-.037-.036-.055l0-.005c-.013-.02-.027-.039-.041-.058h0l-.045-.057c-.015-.018-.03-.037-.047-.054s-.032-.035-.049-.052-.034-.035-.051-.05l-.053-.048-.056-.045c-.017-.014-.035-.027-.052-.039s-.046-.032-.069-.047l-.057-.034-.01-.006-.049-.027c-.041-.021-.083-.042-.125-.059l-.026-.011-.047-.018-.024-.009c-.043-.015-.085-.028-.129-.039l-.062-.015-.053-.01-.04-.007-.058-.008c-.031-.357-.068-.7-.105-1q.183-.06.381-.132a5.643,5.643,0,0,0,.87-.394c.015.078.034.161.057.247a4.926,4.926,0,0,0,2.158,2.809c.016.54.056,1.694.133,2.839C400.669,425.219,400.775,425.848,400.8,426.372Z" transform="translate(-389.78 -410.006)" /> <path class="a" d="M353.639,314.588c-.284.826-2.762,3.112-2.9,3.331a6.288,6.288,0,0,0-.309.9c-.479-.661-.924-.995-1.357-1.014a.714.714,0,0,0-.161-.373.566.566,0,0,0-.452-.19c-.129,0-.334.023-.644.059a20.552,20.552,0,0,1-2.29.163,7.769,7.769,0,0,1-1.062-.064c-.07-.01-.138-.02-.2-.033l.386-.067c1.177-.205,2.666-.466,3.926-.813a10.577,10.577,0,0,0,3.953-2.5C353.172,313.517,353.924,313.761,353.639,314.588Z" transform="translate(-339.698 -310.529)" /> <ellipse class="a" cx="1.232" cy="1.232" rx="1.232" ry="1.232" transform="translate(2.315 5.628) rotate(-56.162)" /> <path class="a" d="M261.88,313.754a6.621,6.621,0,0,1-2.518.524,6.035,6.035,0,0,0,.331,2.453q.053.168.117.328a1.788,1.788,0,0,0-.7-.2.667.667,0,0,0-.657.861,3.1,3.1,0,0,0,1.33,1.745c-.026.1-.068.456-.115.475.005.108.012.272.016.47a11.548,11.548,0,0,1-.035,1.649c-.048.524-.146.94-.334.967-.418.061-.81-1.9-.955-2.727a2.5,2.5,0,0,1-.34.017c-.106,0-.218-.009-.335-.019,0,.923-.052,2.125-.376,2.172-.366.053-.712-1.445-.89-2.372-.732-.166-1.358-.4-1.4-.614-.042-.191.5-1.849.751-3.365a14.926,14.926,0,0,0,.183-2.721,22.1,22.1,0,0,1-1.218-2.814c-.467-1.49-.353-2.536.142-2.323.342.147,1.279,3.555,3.586,4.259,1.708.52,4.719-.1,4.8,0S263.5,313.157,261.88,313.754Z" transform="translate(-254.437 -305.295)" /> <path class="a" d="M355.307,250.457a.309.309,0,0,1,.09-.053,1.228,1.228,0,0,0,1.665-.071c.343.1.39.6.084,1.1a2.183,2.183,0,0,1-.847.769,1.733,1.733,0,0,1-1.157-1.335A.462.462,0,0,1,355.307,250.457Z" transform="translate(-350.03 -250.301)" /> <path class="a" d="M343.73,284.754a.173.173,0,0,1,.028-.05.675.675,0,0,0,.773-.49c.192-.044.351.179.342.5a1.2,1.2,0,0,1-.192.6.952.952,0,0,1-.917-.319A.254.254,0,0,1,343.73,284.754Z" transform="translate(-339.181 -282.486)" /> <g transform="translate(8.963 7.104)"> <ellipse class="a" cx="1.102" cy="1.102" rx="1.102" ry="1.102" transform="translate(2.248 0.364)" /> <path class="a" d="M433.241,394.412s.139,6.256.708,6.277.792-3.411.792-3.411.467,3.162.934,3.043.65-5.4.569-6.17a11.47,11.47,0,0,0,1.482-2.44c.3-.931-.061-1.662-.487-1.418s-.639,2.014-1.741,2.519a2.277,2.277,0,0,1-2.929-.773c-.609-.954-1.178-1.381-1.5-.954S431.675,393.785,433.241,394.412Z" transform="translate(-431.001 -390.245)" /> </g> <g transform="translate(4.505 10.563)"> <ellipse class="a" cx="1.102" cy="1.102" rx="1.102" ry="1.102" transform="translate(1.55)" /> <path class="a" d="M348.644,481.973c-.142-.02-1.853,1.259-2.8,1.218s-2.291-1.1-2.6-.873.715,1.665,1.494,1.848a11.419,11.419,0,0,0-.459,2.477,2.339,2.339,0,0,0,.774.364c.013.579.084,1.647.424,1.647s.529-.937.617-1.484l.114,0h.094c.088.547.286,1.483.617,1.483s.412-1.081.425-1.657c.388-.133.605-.31.57-.414-.061-.183-.528-2.619-.528-2.619a4.189,4.189,0,0,0,1.137-.985C348.867,482.46,348.786,481.993,348.644,481.973Z" transform="translate(-343.188 -480.775)" /> </g> </g> </svg> <div class="ub-rb-advisory-text_728">Stay Home</br> Stay Safe</div> </div> <div class="ub-rb-advisory-country_728" id="ub-rb-advisory-countrynameface3">WORLD</div> <div class="ub-rb-advisory-poweredBy_728">Powered By Unibots</div> </div> <div class="ub-rb-map_728"> <img class="map_728" id="map_728-countrynameface3" src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/corona/World.png" width="68.205" height="76.435" viewBox="0 0 68.205 76.435"> <defs> <style> .a { fill: #ff7888; } </style> </defs> <path class="a" d="M139.55,79.421c-.526.211-1.252-.5-1.911-.073-.471.3-.7.856-1.135,1.249a1.764,1.764,0,0,1-.2.156,2.22,2.22,0,0,0-.766.664,1.407,1.407,0,0,0-.02.982,1.678,1.678,0,0,1-.41,1.883c-.386.456-.3.226-.351.681-.007.047.24.25.228.406-.013.2-.276.183-.311.315-.346,1.277-.012,2.564-1.706,2.817-.944.14-1.18-.185-.939.862.083.364.34.613.228,1.059s-.483.519-.666.819c-.416.683-.012.9.321,1.588.225.463.488,1.658-.365,1.686s-1.683-2.371-1.7-3.047c-.012-.409.15-1.347-.175-1.676-.479-.49-1.159-.023-1.263.509-.092.465.441,1.074-.022,1.563-.6.633-.688-.243-1.081-.6-.639-.584-1.2-.446-1.069-1.485.125-.971.846-1.327,1.528-1.963,1.157-1.08,1.164-2.392-.609-2.732-1.175-.227-2.2.747-3.246.428-.872-.266-.591-.609-.8-1.265-.238-.747-.233-.453-1.062-.4-.766.045-1.067-.231-1.661.283-.662.573-.566.9.16,1.425.628.451.984.436.318,1.019-.453.4-.972.34-.623,1.182.241.586,1.135.621,1.269,1.192.148.636-.476.907-.1,1.656.166.338.495.44.624.661.262.453.08.19.08.684,0,.541-.043,1.124-.043,1.683,0,.455.17,1.3-.2,1.641-.464.431-1.19.017-1.405-.478a2.6,2.6,0,0,1-1.3.984c-.458.213-1.27.3-1.432.8-.155.471.323,1.036.265,1.542-.147,1.252-1.8,2.214-2.808,2.79a8.565,8.565,0,0,0-3.066,2.266,6.24,6.24,0,0,1-1.284,1.6c-.469.31-.982.28-1.205.738-.328.669.177.694-.636,1.12-.443.231-1.425.345-1.455.931-.025.456.8.716.413,1.407a2.016,2.016,0,0,1-1.756.619c-.538-.09-.9-.784-1.445-.469-.383.223-.389,1.161-.489,1.548-.112.431-.448,1.756-1.167,1.362-.345-.188.02-1.225-.966-.766-1.075.5-.681,2.168-.679,3.057,0,.5-.108.987-.08,1.477.041.768.554.9.759,1.582.22.733-.478.859-.443,1.478.043.749.623.663.165,1.483-.626,1.12-1.981,1.52-1.447,3.046.161.461.747.857.368,1.4-.33.474-1.049.208-1.527.439a1.436,1.436,0,0,0-.847,1.48c.128.519.846.579.518,1.13-.628,1.061-2.156-.251-2.52,1.2-.213.849-.416,1.971-1.44,2.352-2.491.927-3.431-2.987-3.957-4.552a20.132,20.132,0,0,0-1.262-3.517,20.322,20.322,0,0,1-2.251-4.375c-.495-1.72-.752-3.5-1.359-5.192-.434-1.21-.756-2.459-1.2-3.667-.366-1.007-.945-1.766-1.29-2.777a13.278,13.278,0,0,1-.241-3.894c-.037-1.164-1.192-2.114-.857-3.231a1.542,1.542,0,0,1,.07-.188c.238-.534.559-.6.559-1.172,0-.518-.468-.947-.644-1.4-.333-.852.359-1.132.136-1.9-.378-1.3-1.308-.008-1.435.621-.085.428-.151.782-.231,1.072-.253.911-.641,1.21-2.176,1.279-1.935.086-2.494-.182-3.523-1.871-.281-.461-.318-1.13-.638-1.548-.276-.363-1.169-.5-1.287-.9-.271-.922,1.67-.383,2.158-.393.436-.008,1.923-.107,1.21-.917-.408-.465-1.024.01-1.512.137a1.9,1.9,0,0,1-1.893-.22c-.553-.523-.4-1.408-.781-2.039-.253-.421-.949-.727-.784-1.36.2-.768.787-.2,1.362-.176-.483-.921.774-.726,1.314-.721a4.05,4.05,0,0,1,.738-.017c.483.11.777.6,1.253.676.273.043.787-.276,1.026-.391,1.049-.506.285-.222,1.027.461.321-.271.406-1.648.323-2.6a2.616,2.616,0,0,0-.163-.8c-.4-.8-1.23-.363-1.432-1.255-.095-.416.316-1.127.158-1.45-.4-.808-1.06.1-1.59-.4-.628-.594.331-1.345.7-1.735.728-.766.919-2.044,2.249-1.62-.042.872.5.619.967.473.5-.16.518-.345,1.14-.368.3-.012.639.125.939-.017.752-.353.691-1.255,1.039-1.8s.961-.626,1.417-1.1c.914-.961.591-2.51,1.841-2.928.541-.18.679.032.931-.479.28-.566-.258-1.117.324-1.638.683-.614,1.232-.208,1.32-1.354.052-.681-.318-.791.523-1.218.4-.2,1.152-.073.861-.874-.211-.584-.549-.328-1.057-.33-.446,0-.917.033-1.212-.365-.165-.223.018-.731-.208-.947-.363-.346-1.485.077-1.691-.638-.145-.494.548-1.067.483-1.651-.02-.178-.3-.293-.316-.553a1.854,1.854,0,0,1,.215-.821,9.6,9.6,0,0,0,.629-1.472,1.526,1.526,0,0,0-.01-.636c-.173-.787-.606-.763-1.062-1.359-.3-.391-.28-.752-.683-1.107-.22-.193-.679-.31-.942-.563a6.261,6.261,0,0,1,1.04-1.507,2.633,2.633,0,0,1,1.528-.584,9.691,9.691,0,0,1,1.548-.3,6.967,6.967,0,0,1,1.6-.087c.485.147,1.09,1.167,1.432,1.507a10.524,10.524,0,0,0,1.693,1.064c.461.325.674.892,1.25,1.035.987.243.934-.434,1,.926.653.153.734-.544,1.245-.809.39-.2.937-.193,1.338-.356.265-.107.2-.285.707-.328a4.89,4.89,0,0,1,.877.1c.473.042,1.507-.052,1.888.295,1.069.972-.4,2.554-.847,3.271-.132.211-.215.371-.32.579-.155.306.063.637-.313.877-.486.31-.877-.319-1.372.09.473.44-.092.556.007.964.19.782.39.265.861.616a1.029,1.029,0,0,1,.469,1.145c-.022.108-.318.388-.378.564-.047.143.05.336,0,.479-.524,1.622-1.833-.519-1.935.956-.028.423.469.887.574,1.259a5.115,5.115,0,0,1,.085,1.067,1.267,1.267,0,0,1,1.257.481c.538.711.018.541.979.739,1.082.221.889.816,1.555,1.4.716.623,1.051.809.633,1.333a4.76,4.76,0,0,1-.524.531c-.609.548-.731.676-.779,1.4-.027.388.267.992-.454.857.386.676,1.079.872,1.726,1.2,1.039.533,2.015,1.132,3.027,1.7,1.064.6,2.4.439,3.563.912a6.281,6.281,0,0,0,2.306.521c1.6.1,2.768,1.618,4.192,1.6,1.325-.012,2.371-.543,3.756-.093.408-.834-.518-1.115-.546-1.833-.027-.644.613-.817.083-1.367-.156-.163-.789-.013-.721-.511.028-.208.538-.388.717-.468a2.834,2.834,0,0,1,.516-.168,1.912,1.912,0,0,1,1.65.235c.827.751-.295,1.025-.231,1.753s1.107,1.119,1.74,1.09,1.36.027,2.078.017a4.142,4.142,0,0,0,2.675-.757c.751-.621.5-.859-.087-1.43-.386-.375-.568-.493-.468-1.187.483-.236.631.145.989.152a10.789,10.789,0,0,0,1.154-.258c.02-.434-.413-.644-.065-1.014.3-.319.971.108,1.3-.233.3-.311-.115-.634.161-.966.211-.256.774-.052,1.055-.261.3-.221.313-.594.546-.861a7.514,7.514,0,0,1,.724-.564c.726-.633,1.239-1.695,2.274-1.681a3.3,3.3,0,0,1,1.418.408,2.927,2.927,0,0,1,1.2,1.076c.266.493-.121,1.357.195,1.788s1.2-.136,1.475.493c.285.648-.549.924.075,1.656.273.321.508.027.624.511A.729.729,0,0,1,139.55,79.421Z" transform="translate(-71.745 -55.104)" /></svg> </div> </div> </div> <div class="ub-roller4_728 ub-ur_728"> <div class="ub-leftBar_728"> <div class="ub-lb-text_728">CORONA VIRUS</div> </div> <div class="ub-middleBar_728" id="ub-mybotdataface4"> <div class="ub-mb-content1_728 ub-mb-c_728"> <div class="ub-mb-c-wrapper_728" id="ub-mybotdataface4"> <div class="ub-mb-c1-num_728" id="mybotCountry3Count_728">611</div> <div class="ub-mb-c1-name_728">CONFIRMED</div> </div> </div> <div class="ub-mb-content2_728 ub-mb-c_728"> <div class="ub-mb-c-wrapper_728"> <div class="ub-mb-c1-num_728" id="mybotCountry3Recovered_728">0</div> <div class="ub-mb-c1-name_728">RECOVERED</div> </div> </div> <div class="ub-mb-content3_728 ub-mb-c_728"> <div class="ub-mb-c-wrapper_728"> <div class="ub-mb-c1-num_728" id="mybotCountry3Deaths_728">5</div> <div class="ub-mb-c1-name_728">DEATHS</div> </div> </div> </div> <div class="ub-rightBar_728"> <div class="ub-rb-advisory_728"> <div class="ub-rb-advisory-img_text_728"> <svg class="ub-rb-advisory-img_text-img_728" xmlns="http://www.w3.org/2000/svg" width="24.197" height="25.225" viewBox="0 0 24.197 25.225"> <defs> <style> .a { fill: #ff7888; } </style> </defs> <path class="a" d="M185.3,129.246a.557.557,0,0,1-.395-.164l-11.074-11.074-11.22,11.016a.558.558,0,1,1-.782-.8l11.615-11.4a.558.558,0,0,1,.786,0L185.7,128.293a.558.558,0,0,1-.395.953Z" transform="translate(-161.664 -116.664)" /> <g transform="translate(4.709 6.784)"> <ellipse class="a" cx="1.381" cy="1.381" rx="1.381" ry="1.381" transform="translate(6.875 2.941)" /> <path class="a" d="M400.8,426.372c.049,1.09-.408,2.051-.854,2.075-.364.019-.579-.624-.707-1.507l.041-.035.037-.035.033-.036c.011-.012.021-.023.03-.035a.319.319,0,0,0,.022-.03.535.535,0,0,0,.04-.06l.012-.023c.006-.01.01-.019.015-.029s.009-.021.013-.031a.284.284,0,0,0,.012-.031.131.131,0,0,0,.005-.016.453.453,0,0,0,.015-.056.233.233,0,0,0,0-.026c0-.01,0-.02,0-.03a.145.145,0,0,0,0-.02c0-.007,0-.013,0-.02a.6.6,0,0,0-.028-.2s0,0,0-.008l-.007-.029c-.006-.024-.013-.056-.022-.094l-.009-.041-.008-.038-.007-.031c0-.013-.006-.027-.009-.041s0-.017-.005-.026-.008-.035-.012-.054a.113.113,0,0,1,0-.013c-.008-.038-.016-.078-.025-.121,0-.006,0-.011,0-.017l-.011-.052-.017-.083c-.006-.031-.013-.063-.02-.1-.043-.214-.092-.46-.143-.721l-.044-.223c0-.019-.007-.038-.011-.057l-.018-.095c-.02-.105-.041-.211-.061-.317,0-.025,0-.051,0-.076.1-.068.209-.15.324-.244l.05-.041c.044-.037.089-.075.133-.115l.06-.055a3.235,3.235,0,0,0,.268-.28l.035-.043.019-.024.045-.059h0c.017-.023.034-.048.05-.072a1.549,1.549,0,0,0,.248-1.411.62.62,0,0,0-.477-.379l-.039-.006h-.036c-.188,0-.324.082-.729.324l-.147.088c-.1.058-.209.123-.327.19,0-.031.007-.063.008-.094,0-.011,0-.022,0-.033s0-.043,0-.064,0-.051,0-.077,0-.051-.005-.076-.006-.05-.009-.075-.008-.05-.013-.075-.01-.048-.015-.071-.012-.048-.019-.072-.015-.051-.024-.076-.015-.043-.023-.063-.018-.045-.028-.067-.02-.044-.031-.066-.022-.043-.034-.064-.024-.042-.037-.062-.023-.037-.036-.055l0-.005c-.013-.02-.027-.039-.041-.058h0l-.045-.057c-.015-.018-.03-.037-.047-.054s-.032-.035-.049-.052-.034-.035-.051-.05l-.053-.048-.056-.045c-.017-.014-.035-.027-.052-.039s-.046-.032-.069-.047l-.057-.034-.01-.006-.049-.027c-.041-.021-.083-.042-.125-.059l-.026-.011-.047-.018-.024-.009c-.043-.015-.085-.028-.129-.039l-.062-.015-.053-.01-.04-.007-.058-.008c-.031-.357-.068-.7-.105-1q.183-.06.381-.132a5.643,5.643,0,0,0,.87-.394c.015.078.034.161.057.247a4.926,4.926,0,0,0,2.158,2.809c.016.54.056,1.694.133,2.839C400.669,425.219,400.775,425.848,400.8,426.372Z" transform="translate(-389.78 -410.006)" /> <path class="a" d="M353.639,314.588c-.284.826-2.762,3.112-2.9,3.331a6.288,6.288,0,0,0-.309.9c-.479-.661-.924-.995-1.357-1.014a.714.714,0,0,0-.161-.373.566.566,0,0,0-.452-.19c-.129,0-.334.023-.644.059a20.552,20.552,0,0,1-2.29.163,7.769,7.769,0,0,1-1.062-.064c-.07-.01-.138-.02-.2-.033l.386-.067c1.177-.205,2.666-.466,3.926-.813a10.577,10.577,0,0,0,3.953-2.5C353.172,313.517,353.924,313.761,353.639,314.588Z" transform="translate(-339.698 -310.529)" /> <ellipse class="a" cx="1.232" cy="1.232" rx="1.232" ry="1.232" transform="translate(2.315 5.628) rotate(-56.162)" /> <path class="a" d="M261.88,313.754a6.621,6.621,0,0,1-2.518.524,6.035,6.035,0,0,0,.331,2.453q.053.168.117.328a1.788,1.788,0,0,0-.7-.2.667.667,0,0,0-.657.861,3.1,3.1,0,0,0,1.33,1.745c-.026.1-.068.456-.115.475.005.108.012.272.016.47a11.548,11.548,0,0,1-.035,1.649c-.048.524-.146.94-.334.967-.418.061-.81-1.9-.955-2.727a2.5,2.5,0,0,1-.34.017c-.106,0-.218-.009-.335-.019,0,.923-.052,2.125-.376,2.172-.366.053-.712-1.445-.89-2.372-.732-.166-1.358-.4-1.4-.614-.042-.191.5-1.849.751-3.365a14.926,14.926,0,0,0,.183-2.721,22.1,22.1,0,0,1-1.218-2.814c-.467-1.49-.353-2.536.142-2.323.342.147,1.279,3.555,3.586,4.259,1.708.52,4.719-.1,4.8,0S263.5,313.157,261.88,313.754Z" transform="translate(-254.437 -305.295)" /> <path class="a" d="M355.307,250.457a.309.309,0,0,1,.09-.053,1.228,1.228,0,0,0,1.665-.071c.343.1.39.6.084,1.1a2.183,2.183,0,0,1-.847.769,1.733,1.733,0,0,1-1.157-1.335A.462.462,0,0,1,355.307,250.457Z" transform="translate(-350.03 -250.301)" /> <path class="a" d="M343.73,284.754a.173.173,0,0,1,.028-.05.675.675,0,0,0,.773-.49c.192-.044.351.179.342.5a1.2,1.2,0,0,1-.192.6.952.952,0,0,1-.917-.319A.254.254,0,0,1,343.73,284.754Z" transform="translate(-339.181 -282.486)" /> <g transform="translate(8.963 7.104)"> <ellipse class="a" cx="1.102" cy="1.102" rx="1.102" ry="1.102" transform="translate(2.248 0.364)" /> <path class="a" d="M433.241,394.412s.139,6.256.708,6.277.792-3.411.792-3.411.467,3.162.934,3.043.65-5.4.569-6.17a11.47,11.47,0,0,0,1.482-2.44c.3-.931-.061-1.662-.487-1.418s-.639,2.014-1.741,2.519a2.277,2.277,0,0,1-2.929-.773c-.609-.954-1.178-1.381-1.5-.954S431.675,393.785,433.241,394.412Z" transform="translate(-431.001 -390.245)" /> </g> <g transform="translate(4.505 10.563)"> <ellipse class="a" cx="1.102" cy="1.102" rx="1.102" ry="1.102" transform="translate(1.55)" /> <path class="a" d="M348.644,481.973c-.142-.02-1.853,1.259-2.8,1.218s-2.291-1.1-2.6-.873.715,1.665,1.494,1.848a11.419,11.419,0,0,0-.459,2.477,2.339,2.339,0,0,0,.774.364c.013.579.084,1.647.424,1.647s.529-.937.617-1.484l.114,0h.094c.088.547.286,1.483.617,1.483s.412-1.081.425-1.657c.388-.133.605-.31.57-.414-.061-.183-.528-2.619-.528-2.619a4.189,4.189,0,0,0,1.137-.985C348.867,482.46,348.786,481.993,348.644,481.973Z" transform="translate(-343.188 -480.775)" /> </g> </g> </svg> <div class="ub-rb-advisory-text_728">Stay Home</br> Stay Safe</div> </div> <div class="ub-rb-advisory-country_728" id="ub-rb-advisory-countrynameface4">UAE</div> <div class="ub-rb-advisory-poweredBy_728">Powered By Unibots</div> </div> <div class="ub-rb-map_728"> <img class="map_728" id="map_728-countrynameface4" src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/corona/UAE.png" width="68.205" height="76.435" viewBox="0 0 68.205 76.435"> <defs> <style> .a { fill: #ff7888; } </style> </defs> <path class="a" d="M139.55,79.421c-.526.211-1.252-.5-1.911-.073-.471.3-.7.856-1.135,1.249a1.764,1.764,0,0,1-.2.156,2.22,2.22,0,0,0-.766.664,1.407,1.407,0,0,0-.02.982,1.678,1.678,0,0,1-.41,1.883c-.386.456-.3.226-.351.681-.007.047.24.25.228.406-.013.2-.276.183-.311.315-.346,1.277-.012,2.564-1.706,2.817-.944.14-1.18-.185-.939.862.083.364.34.613.228,1.059s-.483.519-.666.819c-.416.683-.012.9.321,1.588.225.463.488,1.658-.365,1.686s-1.683-2.371-1.7-3.047c-.012-.409.15-1.347-.175-1.676-.479-.49-1.159-.023-1.263.509-.092.465.441,1.074-.022,1.563-.6.633-.688-.243-1.081-.6-.639-.584-1.2-.446-1.069-1.485.125-.971.846-1.327,1.528-1.963,1.157-1.08,1.164-2.392-.609-2.732-1.175-.227-2.2.747-3.246.428-.872-.266-.591-.609-.8-1.265-.238-.747-.233-.453-1.062-.4-.766.045-1.067-.231-1.661.283-.662.573-.566.9.16,1.425.628.451.984.436.318,1.019-.453.4-.972.34-.623,1.182.241.586,1.135.621,1.269,1.192.148.636-.476.907-.1,1.656.166.338.495.44.624.661.262.453.08.19.08.684,0,.541-.043,1.124-.043,1.683,0,.455.17,1.3-.2,1.641-.464.431-1.19.017-1.405-.478a2.6,2.6,0,0,1-1.3.984c-.458.213-1.27.3-1.432.8-.155.471.323,1.036.265,1.542-.147,1.252-1.8,2.214-2.808,2.79a8.565,8.565,0,0,0-3.066,2.266,6.24,6.24,0,0,1-1.284,1.6c-.469.31-.982.28-1.205.738-.328.669.177.694-.636,1.12-.443.231-1.425.345-1.455.931-.025.456.8.716.413,1.407a2.016,2.016,0,0,1-1.756.619c-.538-.09-.9-.784-1.445-.469-.383.223-.389,1.161-.489,1.548-.112.431-.448,1.756-1.167,1.362-.345-.188.02-1.225-.966-.766-1.075.5-.681,2.168-.679,3.057,0,.5-.108.987-.08,1.477.041.768.554.9.759,1.582.22.733-.478.859-.443,1.478.043.749.623.663.165,1.483-.626,1.12-1.981,1.52-1.447,3.046.161.461.747.857.368,1.4-.33.474-1.049.208-1.527.439a1.436,1.436,0,0,0-.847,1.48c.128.519.846.579.518,1.13-.628,1.061-2.156-.251-2.52,1.2-.213.849-.416,1.971-1.44,2.352-2.491.927-3.431-2.987-3.957-4.552a20.132,20.132,0,0,0-1.262-3.517,20.322,20.322,0,0,1-2.251-4.375c-.495-1.72-.752-3.5-1.359-5.192-.434-1.21-.756-2.459-1.2-3.667-.366-1.007-.945-1.766-1.29-2.777a13.278,13.278,0,0,1-.241-3.894c-.037-1.164-1.192-2.114-.857-3.231a1.542,1.542,0,0,1,.07-.188c.238-.534.559-.6.559-1.172,0-.518-.468-.947-.644-1.4-.333-.852.359-1.132.136-1.9-.378-1.3-1.308-.008-1.435.621-.085.428-.151.782-.231,1.072-.253.911-.641,1.21-2.176,1.279-1.935.086-2.494-.182-3.523-1.871-.281-.461-.318-1.13-.638-1.548-.276-.363-1.169-.5-1.287-.9-.271-.922,1.67-.383,2.158-.393.436-.008,1.923-.107,1.21-.917-.408-.465-1.024.01-1.512.137a1.9,1.9,0,0,1-1.893-.22c-.553-.523-.4-1.408-.781-2.039-.253-.421-.949-.727-.784-1.36.2-.768.787-.2,1.362-.176-.483-.921.774-.726,1.314-.721a4.05,4.05,0,0,1,.738-.017c.483.11.777.6,1.253.676.273.043.787-.276,1.026-.391,1.049-.506.285-.222,1.027.461.321-.271.406-1.648.323-2.6a2.616,2.616,0,0,0-.163-.8c-.4-.8-1.23-.363-1.432-1.255-.095-.416.316-1.127.158-1.45-.4-.808-1.06.1-1.59-.4-.628-.594.331-1.345.7-1.735.728-.766.919-2.044,2.249-1.62-.042.872.5.619.967.473.5-.16.518-.345,1.14-.368.3-.012.639.125.939-.017.752-.353.691-1.255,1.039-1.8s.961-.626,1.417-1.1c.914-.961.591-2.51,1.841-2.928.541-.18.679.032.931-.479.28-.566-.258-1.117.324-1.638.683-.614,1.232-.208,1.32-1.354.052-.681-.318-.791.523-1.218.4-.2,1.152-.073.861-.874-.211-.584-.549-.328-1.057-.33-.446,0-.917.033-1.212-.365-.165-.223.018-.731-.208-.947-.363-.346-1.485.077-1.691-.638-.145-.494.548-1.067.483-1.651-.02-.178-.3-.293-.316-.553a1.854,1.854,0,0,1,.215-.821,9.6,9.6,0,0,0,.629-1.472,1.526,1.526,0,0,0-.01-.636c-.173-.787-.606-.763-1.062-1.359-.3-.391-.28-.752-.683-1.107-.22-.193-.679-.31-.942-.563a6.261,6.261,0,0,1,1.04-1.507,2.633,2.633,0,0,1,1.528-.584,9.691,9.691,0,0,1,1.548-.3,6.967,6.967,0,0,1,1.6-.087c.485.147,1.09,1.167,1.432,1.507a10.524,10.524,0,0,0,1.693,1.064c.461.325.674.892,1.25,1.035.987.243.934-.434,1,.926.653.153.734-.544,1.245-.809.39-.2.937-.193,1.338-.356.265-.107.2-.285.707-.328a4.89,4.89,0,0,1,.877.1c.473.042,1.507-.052,1.888.295,1.069.972-.4,2.554-.847,3.271-.132.211-.215.371-.32.579-.155.306.063.637-.313.877-.486.31-.877-.319-1.372.09.473.44-.092.556.007.964.19.782.39.265.861.616a1.029,1.029,0,0,1,.469,1.145c-.022.108-.318.388-.378.564-.047.143.05.336,0,.479-.524,1.622-1.833-.519-1.935.956-.028.423.469.887.574,1.259a5.115,5.115,0,0,1,.085,1.067,1.267,1.267,0,0,1,1.257.481c.538.711.018.541.979.739,1.082.221.889.816,1.555,1.4.716.623,1.051.809.633,1.333a4.76,4.76,0,0,1-.524.531c-.609.548-.731.676-.779,1.4-.027.388.267.992-.454.857.386.676,1.079.872,1.726,1.2,1.039.533,2.015,1.132,3.027,1.7,1.064.6,2.4.439,3.563.912a6.281,6.281,0,0,0,2.306.521c1.6.1,2.768,1.618,4.192,1.6,1.325-.012,2.371-.543,3.756-.093.408-.834-.518-1.115-.546-1.833-.027-.644.613-.817.083-1.367-.156-.163-.789-.013-.721-.511.028-.208.538-.388.717-.468a2.834,2.834,0,0,1,.516-.168,1.912,1.912,0,0,1,1.65.235c.827.751-.295,1.025-.231,1.753s1.107,1.119,1.74,1.09,1.36.027,2.078.017a4.142,4.142,0,0,0,2.675-.757c.751-.621.5-.859-.087-1.43-.386-.375-.568-.493-.468-1.187.483-.236.631.145.989.152a10.789,10.789,0,0,0,1.154-.258c.02-.434-.413-.644-.065-1.014.3-.319.971.108,1.3-.233.3-.311-.115-.634.161-.966.211-.256.774-.052,1.055-.261.3-.221.313-.594.546-.861a7.514,7.514,0,0,1,.724-.564c.726-.633,1.239-1.695,2.274-1.681a3.3,3.3,0,0,1,1.418.408,2.927,2.927,0,0,1,1.2,1.076c.266.493-.121,1.357.195,1.788s1.2-.136,1.475.493c.285.648-.549.924.075,1.656.273.321.508.027.624.511A.729.729,0,0,1,139.55,79.421Z" transform="translate(-71.745 -55.104)" /></svg> </div> </div> </div> </div> </div> <div class = "ad_728" id="adSmall_728"></div> </div></mybot>';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='mybot .ad_728{background:none!important;margin-left:10px!important;margin-top:0px!important;width:320px!important;height:100px!important;left:728px!important;top:0px!important}mybot .ub-roller1_728,.ub-roller2_728,.ub-roller3_728,.ub-roller4_728,.ub-rb-advisory_728{background:#fff!important}mybot .ub-mb-c1-name_728,.ub-mb-c1-num_728,.mb-name-2_320x100,.mb-num-2_320x100{color:#4aaad4!important}mybot .ub-lb-text_728{background:#fff!important;color:#de4026!important}mybot .ub-rb-advisory-poweredBy_728{background:#fff!important;color:#fb5764!important}';var rule_common='@import url(https://fonts.googleapis.com/css?family=Baloo+Chettan+2&display=swap);@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);mybot{font-family:"Lato",sans-serif;line-height:1.42857143;color:#333;position:relative;z-index:2147483640;cursor:move}mybot *{-webkit-box-sizing:content-box!important;-moz-box-sizing:content-box!important;box-sizing:content-box!important}mybot img{-webkit-user-drag:none;-moz-user-drag:none;-khtml-user-drag:none}mybot .row{margin-right:0}mybot a,mybot a:hover,mybot a:focus{text-decoration:none;outline:none}mybot .ub-container_728{position:absolute;margin:auto;width:728px;height:190px}mybot .ub-roller-wrapper_728{margin:auto;width:728px;height:90px}mybot .ub-roller_728{font-size:20px;text-align:center;animation-name:ub-roller_728;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:16s;transform-style:preserve-3d;transform-origin:0 45px 0;-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,.25);-moz-box-shadow:0 0 20px 0 rgba(0,0,0,.25);box-shadow:0 0 20px 0 rgba(0,0,0,.75)}mybot .ub-ur_728{position:absolute;width:728px;height:90px;font-family:"Montserrat",sans-serif;line-height:1}mybot .ub-roller1_728{background:#28293d;transform:translateZ(45px)}mybot .ub-roller2_728{background:#28293d;transform:rotateX(90deg) translateZ(45px)}mybot .ub-roller3_728{background:#28293d;transform:rotateX(180deg) translateZ(45px)}mybot .ub-roller4_728{background:#28293d;transform:rotateX(270deg) translateZ(45px)}@keyframes ub-roller_728{0%{transform:rotateX(0deg)}18%{transform:rotateX(0deg)}25%{transform:rotateX(-90deg)}42%{transform:rotateX(-90deg)}50%{transform:rotateX(-180deg)}68%{transform:rotateX(-180deg)}75%{transform:rotateX(-270deg)}93%{transform:rotateX(-270deg)}100%{transform:rotateX(-360deg)}}mybot .ub-leftBar_728{height:90px;width:150px;float:left;font-size:29px;display:table-cell;vertical-align:middle;position:relative}mybot .ub-lb-text_728{font-family:"Montserrat-Black",sans-serif;color:#fb5764;font-size:29px;position:absolute;font-weight:900;top:50%;transform:translate(-50%,-50%);left:50%}mybot .ub-rightBar_728{height:90px;width:178px;float:left;margin-left:10px}mybot .ub-middleBar_728{width:360px;height:90px;display:inline-block;float:left}mybot .ub-mb-c_728{width:119px;height:90px;display:inline-block;color:#fff;position:relative;margin-left:-3px}mybot .ub-mb-c-wrapper_728{position:absolute;top:50%;transform:translate(-50%,-50%);left:50%;width:100%}mybot .ub-mb-c1-name_728{font-family:"Montserrat-Light",sans-serif;font-size:15px;color:#fb5764;margin-top:10px}mybot .ub-mb-c1-num_728{font-family:"Montserrat-Black",sans-serif;font-weight:900;font-size:22px;color:#ff7888}mybot .ub-rb-advisory_728{width:100px;display:inline-block;height:90px;margin-left:-3px;background:#28293d;float:left}mybot .ub-rb-advisory-text_728{font-family:"Montserrat-Light",sans-serif;font-size:10px;color:#fb5764;line-height:1.3}mybot .ub-rb-map_728{display:inline-block;height:90px;background:#363a88;width:90px;position:absolute;right:0;border-radius:23px 0 0 23px/50px 0 0 50px}mybot .ub-rb-advisory-img_text_728{height:25px;margin-top:7px;position:absolute;width:100px}mybot .ub-rb-advisory-img_text-img_728{float:left}mybot .ub-rb-advisory-img_text-img_728,mybot .ub-rb-advisory-text_728{display:inline-block}mybot .ub-rb-advisory-country_728{font-family:"Montserrat-Black",sans-serif;font-weight:900;font-size:25px;color:#ff7888;float:left;top:50%;position:absolute}mybot .ub-rb-advisory-poweredBy_728{font-size:8px;position:absolute;bottom:0;width:100px;background:#000;color:#fff;padding:2px;margin-left:-10px;border-radius:80px 80px 0 0}mybot .ub-rb-map-image_728{float:right;margin-top:7px}mybot .ad_728{background:url(https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/corona/728x90_web_banner_example-001.jpg);position:absolute;margin-top:10px;width:728px;height:90px}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule+rule_common;}else{css.appendChild(document.createTextNode(rule));css.appendChild(document.createTextNode(rule_common));}document.getElementsByTagName('head')[0].appendChild(css);callOnDocumentReady();});