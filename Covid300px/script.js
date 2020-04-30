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
// mybotTargetDivid = 'div-gpt-ad-1586189461864-0';

mybotCountryDataname = 'india';
mybotCountryDataname2 = 'United Arab Emirates';

// mybotadSmall = '<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script><script>window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() {googletag.defineSlot("/21928950349/covin19-unibots_300x250", [300, 250], "div-ub-test1").addService(googletag.pubads());googletag.pubads().enableSingleRequest();googletag.enableServices();});</script><div id="div-ub-test1" style="width: 300px; height:250px;""><script>googletag.cmd.push(function() { googletag.display("div-ub-test1"); });</script></div>';
mybotadSmall = '';

mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';
mybotClosevar = '<img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/genericCorona/close.svg" alt="Close Covid-19 Tracker">';
mybotTargetScript = '<script defer="defer" src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/Covid300px/script.js"></script>';

function mybotCustomFunction() {
  document.getElementById('gabywa').innerHTML=mybotgabywa;
  document.getElementById('adSmall').innerHTML=mybotadSmall;
}

function loadAdCustom() {
	// loadAd('adSmall');
  return false;
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
	else{
		mybotStart();
	}
}

function mybotStart(){
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
				document.querySelector('#adSmall').style.display = 'none';
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

function putData(mybotDataSet) {
	world_cases_300 = mybotDataSet["data"].world.cases;
	world_death_300 = mybotDataSet["data"].world.deaths;
	world_recovered_300 = mybotDataSet["data"].world.recovered;
	mybotCountrydata1_300 = mybotDataSet["data"][mybotCountryDataname];
	mybotCountrydata2_300 = mybotDataSet["data"][mybotCountryDataname2];
	country_cases_300 = mybotCountrydata1_300.cases;
	country_death_300 = mybotCountrydata1_300.deaths;
	country_recovered_300 = mybotCountrydata1_300.recovered;
	country_name_300 = mybotCountrydata1_300.location;
	country2_cases_300 = mybotCountrydata2_300.cases;
	country2_death_300 = mybotCountrydata2_300.deaths;
	country2_recovered_300 = mybotCountrydata2_300.recovered;
	country2_name_300 = mybotCountrydata2_300.location;

	document.getElementById('mybotWorldCount_300').innerText = world_cases_300;
	document.getElementById('mybotWorldDeaths_300').innerText = world_death_300;
	document.getElementById('mybotWorldRecovered_300').innerText = world_recovered_300;
	document.getElementById('mybotCountryCount_300').innerText = country_cases_300;
	document.getElementById('mybotCountryDeaths_300').innerText = country_death_300;
	document.getElementById('mybotCountryRecovered_300').innerText = country_recovered_300;
	document.getElementById('mybotCountry2Count_300').innerText = country2_cases_300;
	document.getElementById('mybotCountry2Deaths_300').innerText = country2_death_300;
	document.getElementById('mybotCountry2Recovered_300').innerText = 	country2_recovered_300;
	document.getElementById('mybotCountry3Count_300').innerText = country2_cases_300;
	document.getElementById('mybotCountry3Deaths_300').innerText = country2_death_300;
	document.getElementById('mybotCountry3Recovered_300').innerText = 	country2_recovered_300;
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
function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}window.ready(function(){var html='<mybot> <div id="gabywa"></div> <div class="ub-container_300"> <div class="ub-roller-wrapper_300"> <div class="ub-roller_300"> <div class="ub-roller1_300 ub-ur_300"> <div class="ub-wrapper-1_300"> <div class="ub-wrapper-1-text_300">CORONA VIRUS</div> </div> <div class="ub-wrapper-2_300"> <div class="ub-wrapper-2-text_300">COVID-19 </div> </div> <div class="mb-wrapper-num_300"> <div class="mb-num_300" id="mybotCountryCount_300">1,117 </div> </div> <div class="mb-wrapper-name_300"> <div class="mb-name_300">CONFIRMED </div> </div> <div class="mb-wrapper-num_300"> <div class="mb-num_300" id="mybotCountryRecovered_300">102 </div> </div> <div class="mb-wrapper-name_300"> <div class="mb-name_300">RECOVERED </div> </div> <div class="mb-wrapper-num_300"> <div class="mb-num_300" id="mybotCountryDeaths_300">32 </div> </div> <div class="mb-wrapper-name_300"> <div class="mb-name_300">DEATHS </div> </div> <div class="lb-advisory-poweredby_300"> <div class="lb-advisory-poweredby-text_300">Powered By Unibots </div> </div> <div class="map-container_300"> <img class="map_300" src="https://newsbot-images.s3.ap-south-1.amazonaws.com/corona/India.png"> </div> <div class="rb-advisory-image_300"><img src="https://newsbot-images.s3.ap-south-1.amazonaws.com/corona/Advisory.png" </div> <div class="rb-advisory-wrapper_300"> <div class="rb-advisory-wrapper-text_300">Stay Home Stay Safe</div> </div> <div class="rb-advisory-country_300">INDIA</div> </div> </div> <div class="ub-roller2_300 ub-ur_300"> <div class="ub-wrapper-1_300"> <div class="ub-wrapper-1-text_300">CORONA VIRUS</div> </div> <div class="ub-wrapper-2_300"> <div class="ub-wrapper-2-text_300">COVID-19 </div> </div> <div class="mb-wrapper-num_300"> <div class="mb-num_300" id="mybotCountry2Count_300">611 </div> </div> <div class="mb-wrapper-name_300"> <div class="mb-name_300">CONFIRMED </div> </div> <div class="mb-wrapper-num_300"> <div class="mb-num_300" id="mybotCountry2Recovered_300">0 </div> </div> <div class="mb-wrapper-name_300"> <div class="mb-name_300">RECOVERED </div> </div> <div class="mb-wrapper-num_300"> <div class="mb-num_300" id="mybotCountry2Deaths_300">5 </div> </div> <div class="mb-wrapper-name_300"> <div class="mb-name_300">DEATHS </div> </div> <div class="lb-advisory-poweredby_300"> <div class="lb-advisory-poweredby-text_300">Powered By Unibots </div> </div> <div class="map-container_300"> <img class="map_300" src="https://newsbot-images.s3.ap-south-1.amazonaws.com/corona/UAE.png"> </div> <div class="rb-advisory-image_300"><img src="https://newsbot-images.s3.ap-south-1.amazonaws.com/corona/Advisory.png" </div> <div class="rb-advisory-wrapper_300"> <div class="rb-advisory-wrapper-text_300">Stay Home Stay Safe</div> </div> <div class="rb-advisory-country_300">UAE</div> </div> </div> <div class="ub-roller3_300 ub-ur_300"> <div class="ub-wrapper-1_300"> <div class="ub-wrapper-1-text_300">CORONA VIRUS</div> </div> <div class="ub-wrapper-2_300"> <div class="ub-wrapper-2-text_300">COVID-19 </div> </div> <div class="mb-wrapper-num_300"> <div class="mb-num_300" id="mybotWorldCount_300">802,831 </div> </div> <div class="mb-wrapper-name_300"> <div class="mb-name_300">CONFIRMED </div> </div> <div class="mb-wrapper-num_300"> <div class="mb-num_300" id="mybotWorldRecovered_300">172,319 </div> </div> <div class="mb-wrapper-name_300"> <div class="mb-name_300">RECOVERED </div> </div> <div class="mb-wrapper-num_300"> <div class="mb-num_300" id="mybotWorldDeaths_300">39,020 </div> </div> <div class="mb-wrapper-name_300"> <div class="mb-name_300">DEATHS </div> </div> <div class="lb-advisory-poweredby_300"> <div class="lb-advisory-poweredby-text_300">Powered By Unibots </div> </div> <div class="map-container_300"> <img class="map_300" src="https://newsbot-images.s3.ap-south-1.amazonaws.com/corona/World.png"> </div> <div class="rb-advisory-image_300"><img src="https://newsbot-images.s3.ap-south-1.amazonaws.com/corona/Advisory.png" </div> <div class="rb-advisory-wrapper_300"> <div class="rb-advisory-wrapper-text_300">Stay Home Stay Safe</div> </div> <div class="rb-advisory-country_300">WORLD</div> </div> </div> <div class="ub-roller4_300 ub-ur_300"> <div class="ub-wrapper-1_300"> <div class="ub-wrapper-1-text_300">CORONA VIRUS</div> </div> <div class="ub-wrapper-2_300"> <div class="ub-wrapper-2-text_300">COVID-19 </div> </div> <div class="mb-wrapper-num_300"> <div class="mb-num_300" id="mybotCountry3Count_300">611 </div> </div> <div class="mb-wrapper-name_300"> <div class="mb-name_300">CONFIRMED </div> </div> <div class="mb-wrapper-num_300"> <div class="mb-num_300" id="mybotCountry3Recovered_300">0 </div> </div> <div class="mb-wrapper-name_300"> <div class="mb-name_300">RECOVERED </div> </div> <div class="mb-wrapper-num_300"> <div class="mb-num_300" id="mybotCountry3Deaths_300">5 </div> </div> <div class="mb-wrapper-name_300"> <div class="mb-name_300">DEATHS </div> </div> <div class="lb-advisory-poweredby_300"> <div class="lb-advisory-poweredby-text_300">Powered By Unibots </div> </div> <div class="map-container_300"> <img class="map_300" src="https://newsbot-images.s3.ap-south-1.amazonaws.com/corona/UAE.png"> </div> <div class="rb-advisory-image_300"><img src="https://newsbot-images.s3.ap-south-1.amazonaws.com/corona/Advisory.png" </div> <div class="rb-advisory-wrapper_300"> <div class="rb-advisory-wrapper-text_300">Stay Home Stay Safe</div> </div> <div class="rb-advisory-country_300">UAE</div> </div> </div> </div> </div> <div class="ad_300" id="adSmall"></div> </div></mybot>';var element=document.querySelector('#div-gpt-ad-1586189461864-0');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='';var rule_common='@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);mybot{font-family:"Lato",sans-serif;line-height:1.42857143;color:#333;position:relative;z-index:2147483640;cursor:move}mybot *{-webkit-box-sizing:content-box!important;-moz-box-sizing:content-box!important;box-sizing:content-box!important}mybot img{-webkit-user-drag:none;-moz-user-drag:none;-khtml-user-drag:none}mybot .row{margin-right:0}mybot a,mybot a:hover,mybot a:focus{text-decoration:none;outline:none}mybot .ub-container_300{width:300px;height:510px;margin:auto;position:absolute}mybot .ub-roller-wrapper_300{width:300px;height:250px;margin:auto}mybot .ub-ur_300{position:absolute;width:300px;height:250px}mybot .ub-roller_300{animation-name:ub-roller_300;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:16s;transform-style:preserve-3d;transform-origin:150px 0 0}mybot .ub-roller1_300{background:#28293d;transform:translateZ(150px)}mybot .ub-roller2_300{background:#28293d;transform:rotateY(90deg) translateZ(150px)}mybot .ub-roller3_300{background:#28293d;transform:rotateY(180deg) translateZ(150px)}mybot .ub-roller4_300{background:#28293d;transform:rotateY(270deg) translateZ(150px)}@keyframes ub-roller_300{0%{transform:rotateY(0deg)}18%{transform:rotateY(0deg)}25%{transform:rotateY(-90deg)}42%{transform:rotateY(-90deg)}50%{transform:rotateY(-180deg)}68%{transform:rotateY(-180deg)}75%{transform:rotateY(-270deg)}93%{transform:rotateY(-270deg)}100%{transform:rotateY(-360deg)}}mybot .ub-wrapper-1_300{padding-left:15px;padding-top:20px;width:40%}mybot .ub-wrapper-1-text_300{font-family:"Montserrat-Black",sans-serif;font-weight:900;font-size:28px;text-align:left;line-height:25px;letter-spacing:0;color:#fb5764;opacity:1}mybot .ub-wrapper-2_300{top:55px;left:130px;width:100px;height:14px;position:absolute}mybot .ub-wrapper-2-text_300{text-align:left;font-family:"Montserrat-Light",sans-serif;font-size:10px;letter-spacing:0;color:#fb5764;opacity:1}mybot .mb-wrapper-num_300{padding-top:5px;padding-left:15px;width:55px;height:30px;position:absolute}mybot .mb-num_300{font-family:"Montserrat-Light",sans-serif;font-weight:900;font-size:25px;text-align:left;letter-spacing:0;color:#ff7888;opacity:1}mybot .mb-wrapper-name_300{padding-left:15px;padding-top:39px;width:81px;height:16px}mybot .mb-name_300{font-family:"Montserrat-Light",sans-serif;font-weight:300;font-size:13px;text-align:left;letter-spacing:0;color:#fb5764;opacity:1}mybot .lb-advisory-poweredby_300{width:120px;height:10px;position:absolute;background:#000;padding:2px;border-radius:80px 80px 0 0}mybot .lb-advisory-poweredby-text_300{font-family:"Helvetica";font-size:9px;text-align:center;letter-spacing:0;color:#fff;opacity:1}mybot .map-container_300{display:inline-block;height:150px;background:#363a88;width:170px;top:100px;left:130px;position:absolute;border-top-left-radius:200px}mybot .rb-advisory-image_300{top:20px;left:200px;width:30px;height:20px;position:absolute;opacity:1}mybot .rb-advisory-wrapper_300{top:0;left:20px;width:60px;position:absolute}mybot .rb-advisory-wrapper-text_300{text-align:right;letter-spacing:0;color:#ff7888;font-family:"Montserrat-Light",sans-serif;font-weight:300;font-size:10px;opacity:1}mybot .rb-advisory-country_300{text-align:left;letter-spacing:0;color:#fb5764;opacity:1;font-family:"Montserrat-Black",sans-serif;font-weight:900;font-size:25px;opacity:1}mybot .map_300{padding-left:45px;padding-top:30px;width:120px;height:112px}mybot .ad_300{background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/300x250_web_banner_example-006.jpg);position:absolute;margin-top:10px;width:300px;height:250px}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule+rule_common;}else{css.appendChild(document.createTextNode(rule));css.appendChild(document.createTextNode(rule_common));}document.getElementsByTagName('head')[0].appendChild(css);callOnDocumentReady();});