mybotLoadAdDefault = 0;
mybotAuthEnabled = 0;
mybotCloseEnabled = 0;
mybotClickCountEnabled = 1;
mybotClickLocation = '';
mybotScoreAPI = 'get_score';
mybotStartHour = 12;
mybotEndHour = 6;
mybotampEnabled = 0;
botPosition ='right';
botPoweredBrand = '';

var mybotScrollFlag = 0;
mybotScrollStartFlag = 0;
var mybotScrollPixelHeight = 45;
mybotScrollStartPixelHeight = 0;
var mybotIsBottomScrollDisapperEnabled = 0;
var mybotIsBottomScrollStartDisapperEnabled = 1;
mybotMobileTopPlacement = 0;
mybotIsScrollupDisapperEnabled =1;
// mobileTopPixel = 54;

var mybotTranslateFlag = 0;
// var mybotTranslateSC = 'hindi';

mybotGACode = '';
// mybotadSmall = '<div id="div-ub-1"></div>';
mybotadSmall ='';
mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';
mybotClosevar = '<img src="https://scoretest.warw.in/img/close.svg">';

function mybotCustomFunctionsc() {
  // document.getElementById('adSmall').innerHTML=mybotadSmall;
  document.getElementById('gabywa').innerHTML=mybotgabywa;
  // document.getElementById('mybotClose').innerHTML=mybotClosevar;
  // document.getElementById('mybotstage').addEventListener('click', function() {
  //    if(mybotDragClick == false){
  //      window.open('https://www.mediaonetv.in/topic/covid-19?utm_source=unibots&utm_medium=widget&utm_campaign=coronavirus', '_blank');
  //    }
  //    setTimeout(function(){
  //     mybotDragClick = false;
  //    }, 200);
  // });
 //  if(!mobileCheck()){
 //  botPosition ='left';
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
  // s2.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScriptMediaonetv.js";
  // s2.type = "text/javascript";
  // document.getElementsByTagName('head')[0].appendChild(s2);
  // // s2.onload = function () {
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
var boturl = window.location.href;
var botnoMatchLive;
var translatedDataSC;
var teamsSC = {
	"Mumbai Indians": {"name":"Mumbai", "id":"62"},
	"Chennai Super Kings": {"name": "Chennai", "id": "58"},
	"Delhi Capitals": {"name": "Delhi", "id": "60"},
	"Kings XI Punjab": {"name": "Punjab", "id": "63"},
	"Sunrisers Hyderabad": {"name": "Hyderabad", "id": "244"},
	"Royal Challengers Bangalore": {"name": "Bangalore", "id": "57"},
	"Kolkata Knight Riders": {"name": "Kolkata", "id": "61"},
	"Rajasthan Royals": {"name": "Rajasthan", "id": "64"},
	"Unknown": {"name": "TBD", "id": "0"}
};

function callOnDocumentReadysc() {
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
						if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
						   if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
						    	mybotStartsc();
						   }
						   else {
						     mybotloadNewsbotWidget();
						   }
						}
						else {
							if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
								 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
										mybotStartsc();
								 }
								 else {
									 mybotloadNewsbotWidget();
								 }
							}
							else {
									mybotStartsc();
							}
						}
					}
				}
			}
			else {
				console.log('Block Check Request failed');
				if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
					 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
							mybotStartsc();
					 }
					 else {
						 mybotloadNewsbotWidget();
					 }
				}
				else {
						mybotStartsc();
				}
			}
		};
		request.onerror = function() {
			console.log('Request failed');
			if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
				 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
						mybotStartsc();
				 }
				 else {
					 mybotloadNewsbotWidget();
				 }
			}
			else {
					mybotStartsc();
			}
		};
		request.send();
	}
	else{
		if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
			 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
					mybotStartsc();
			 }
			 else {
				 mybotloadNewsbotWidget();
			 }
		}
		else {
				mybotStartsc();
		}
	}
}

function mybotStartsc(){
		mybotCustomFunctionsc();
		// placeBotAndAd();
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
		//
		// if(typeof mybotMobileTopPlacement !== 'undefined' && mybotMobileTopPlacement==1){
		// 	mobileTopPlacement();
		// 	if(mobileCheck()){
		// 		document.getElementById('mybotClose').classList.add('closeBotFrontTop');
		// 		// document.getElementById('mybotCloseUCB').classList.add('closeBotFrontTop');
		// 	}
		// }
		// if((typeof mybotIsBottomScrollStartDisapperEnabled !== 'undefined') && (mybotIsBottomScrollStartDisapperEnabled == 1)){
		// 	mybotScrollStart();
		// 	window.addEventListener('scroll',function(ev){mybotScrollStart()});
		// }
		//  if((typeof mybotIsScrollupDisapperEnabled!=='undefined') && (mybotIsScrollupDisapperEnabled == 1)){
		// 	if(mobileCheck()){
		// 		var prevScrollpos = window.pageYOffset;
		// 		window.onscroll = function() {
		// 		var currentScrollPos = window.pageYOffset;
		// 		if (prevScrollpos < currentScrollPos) {
		// 		 if(mybotCloseTriggeredFlag){
		// 				document.getElementById('dragItem').style.display = 'none';
		// 		 }
		// 		 else {
		// 			if ((window.scrollY) >= ((screen.height/3) - mybotScrollStartPixelHeight)) {
		// 			document.getElementById('dragItem').style.display = 'block';
		// 		 }
		// 		 }
		// 		} else {
		// 		document.getElementById('dragItem').style.display = 'none';
		// 		}
		// 		prevScrollpos = currentScrollPos;
		// 	 }
		// 	}
		// }
		// if((typeof mybotIsBottomScrollDisapperEnabled !== 'undefined') && (mybotIsBottomScrollDisapperEnabled == 1)){
		// 	window.addEventListener('scroll',function(ev){mybotScrollEnd()});
		// }
		//
		// if(mybotCloseEnabled){
		// 	[].forEach.call(document.querySelectorAll('.mybotclose'), function(el) {
		// 		el.style.display='block';
		// 		el.addEventListener('click', function(event) {
		// 			event.stopPropagation();
		// 			event.preventDefault();
		// 			document.querySelector('#mybot-adcover').style.display = 'none';
		// 			document.querySelector('.profile_div').style.display = 'none';
		// 			mybotCloseTriggeredFlag = 1;
		// 			if(typeof mybotampEnabled !== 'undefined' && mybotampEnabled ==1){
		// 				mybotampClose();
		// 			}
		// 		})
		// 	});
		//  }


		if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
            mybotTranslateBotSC();
        }
        else{
            getScoreCard(0);
        }
		// runSequence();
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
		url = 'https://scoretest.warw.in/bot_open';
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
	request.open('GET', 'https://scoretest.warw.in/get_token', true);
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

function getScoreCard(flag) {
	var request = new XMLHttpRequest();
	url = 'https://scoretest.warw.in/'+'get_scorecard';
	// url = "http://localhost:800/newsbot/frontend/js/test.json";
	request.open('GET', url, true);
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			dataSet = [];
			mybotLiveMatches = 0;
			mybotUpcomingMatches = 0;
			mybotProgressMatches = 0;
			mybotCompleteMatches = 0;
			var data = request.responseText;
			data = JSON.parse(data);
			console.log(data);
			if(data.error === false) {
				botnoMatchLive = false;
				data = data.data;
				if(data.length>1){
					putDataSC(data, true);
				}
				else{
					putDataSC(data, false);
				}
			}
			else if(data.error === true){
				if(data.msg == 'No Data Found'){
					botnoMatchLive = true;
					putDataSC(data, false);
				}
				else{
					console.log("error occured with data");
					console.log(data);
				}
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
//
// function runSequence() {
// 	t = new Date();
// 	utcHours = t.getUTCHours();
// 	utcMinutes = t.getUTCMinutes();
// 	istHour = utcHours+5;
// 	if(utcMinutes>29){
// 		istHour += 1;
// 	}
// 	if((istHour > mybotStartscHour) && (istHour < mybotEndHour)){
//
// 		if(mybotSequenceIndex%2 == 0) {
// 			setIntervalX(function () {
// 				putData(mybotDataSet1, mybotIsMatchLive);
// 			}, 1000, 9);
// 			// putData(mybotDataSet1, mybotIsMatchLive);
// 		}
// 		else {
// 			if(mybotDataSet2 != undefined) {
// 				setIntervalX(function () {
// 					putData(mybotDataSet2, mybotIsMatchLive);
// 				}, 1000, 9);
// 				// putData(mybotDataSet2, mybotIsMatchLive);
// 			}
// 			else {
// 				setIntervalX(function () {
// 					putData(mybotDataSet1, mybotIsMatchLive);
// 				}, 1000, 9);
// 				// putData(mybotDataSet1, mybotIsMatchLive);
// 			}
// 		}
// 	}
// 	else{
// 		if(mybotSequenceIndex%2 == 0) {
// 			setIntervalX(function () {
// 				putData(mybotDataSet1, mybotIsMatchLive);
// 			}, 1000, 9);
// 			// putData(mybotDataSet1, mybotIsMatchLive);
// 		}
// 		else {
// 			if(mybotDataSet2 != undefined) {
// 				setIntervalX(function () {
// 					putData(mybotDataSet2, mybotIsMatchLive);
// 				}, 1000, 9);
// 				// putData(mybotDataSet2, mybotIsMatchLive);
// 			}
// 			else {
// 				setIntervalX(function () {
// 					putData(mybotDataSet1, mybotIsMatchLive);
// 				}, 1000, 9);
// 				// putData(mybotDataSet1, mybotIsMatchLive);
// 			}
// 		}
//
// 		if(mybotSequenceIndex%4 == 1) {
// 			mybotSequenceIndex = 1;
// 			getScore(1);
// 		}
// 	}
// 	if(mybotSequenceIndexStart>0){
// 		if(mybotSequenceIndexStart==1){
// 			mybotSequenceIndex += 1;
// 		}
// 		mybotSequenceIndexStart -= 1;
// 	}
// 	else{
// 		mybotSequenceIndex += 1;
// 	}
// }

// function mobileTopPlacement(){
//   if(mobileCheck()){
// 		x = document.getElementById('mybot-adcover');
// 		if(typeof mobileTopPixel !== 'undefined'){
// 			x.style.top = mobileTopPixel+'px';
// 		}
// 		else {
// 				x.style.top = '0px';
// 		}
// 		z = document.getElementById('mybotstage');
// 		z.style.top = '60px';
// 		// adt = document.getElementById('mybot-ad-tag');
// 		// adt.style.display = 'none';
// 		x=x.parentElement;
// 		x.parentNode.removeChild(x);
// 		y = document.getElementById('dragItem');
// 		y.insertBefore(x, y.firstChild);
// 		mybotDragItem = document.getElementById('dragItem');
//     mybotDragItem.style.display = 'none';
// 		if(typeof mobileTopPixel !== 'undefined'){
// 			mybotDragItem.style.top = mobileTopPixel+'px';
// 		}
// 		else{
// 			mybotDragItem.style.top = '0px';
// 		}
// 		if(typeof mybotIsBottomScrollStartDisapperEnabled !== 'undefined' && mybotIsBottomScrollStartDisapperEnabled == 1){
//
// 		}
// 		else{
// 			window.addEventListener('scroll', function() {
// 	      mybotDragItem.style.display = 'block';
// 	    });
// 		}
//
//   }
// }
//
// function mybotScrollStart(){
//
// 	if(mobileCheck()){
// 		if (((window.scrollY) <= ((screen.height/3) - mybotScrollStartPixelHeight)) && (mybotScrollStartFlag == 0)) {
//         document.getElementById('dragItem').style.display = 'none';
//         mybotScrollStartFlag = 1;
//     }
//     else if(mybotScrollStartFlag == 1){
//       if ((window.scrollY) >= ((screen.height/3) - mybotScrollStartPixelHeight)) {
// 				 if(mybotCloseTriggeredFlag){
//           document.getElementById('dragItem').style.display = 'none';
//           mybotScrollStartFlag = 0;
//       }
// 			else {
// 				document.getElementById('dragItem').style.display = 'block';
// 				mybotScrollStartFlag = 0;
// 			}
// 		 }
//     }
// 	}
// }
//
// function mybotScrollEnd(){
// 	if(mobileCheck()){
// 		if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - mybotScrollPixelHeight) {
//         document.getElementById('dragItem').style.display = 'none';
//         mybotScrollFlag = 1;
//     }
//     else if(mybotScrollFlag == 1){
//       if ((window.innerHeight + window.pageYOffset) <= document.body.offsetHeight - mybotScrollPixelHeight) {
// 				if(mybotCloseTriggeredFlag){
// 					document.getElementById('dragItem').style.display = 'block';
//  				 mybotScrollFlag = 0;
// 		   }
// 		   else {
// 			 document.getElementById('dragItem').style.display = 'block';
// 			 mybotScrollFlag = 0;
// 		  }
//      }
//     }
// 	}
// }
//
function capitalizeFLetter(input) {
  var string = input;
  x = string.charAt(0).toUpperCase() + string.slice(1);
	 return x;
}
//
// function placeBotAndAd(){
// 	var botElement = document.getElementById("dragItem");
// 	var stageElement = document.getElementById("mybotstage");
// 	var adCoverElement = document.getElementById("mybot-adcover");
// 	var adtagElement = document.getElementById("mybot-ad-tag");
// 	var closeElement = document.getElementById("mybotClose");
// 	if (mybotadSmall =='') {
//    document.getElementById('mybot-ad-tag').style.display = 'none';
//   }
// 	if (botPosition=='right' || typeof botPosition==='undefined' ){
// 		botElement.classList.add("profile_div");
// 		adCoverElement.classList.add("mybot-adcover-right");
// 	}
// 	else if (botPosition=='left'){
// 		adtagElement.classList.add("mybot-ad-tag-left");
// 		stageElement.classList.add("mybotstage-left");
// 		botElement.classList.add("profile_div-left");
// 		adCoverElement.classList.add("mybot-adcover-left");
// 		closeElement.style.left = '5px';
// 	}
// }

function mybotloadNewsbotWidget(){
  el = document.getElementsByTagName('mybot');
  el[0].parentNode.removeChild(el[0]);

  var s = document.createElement('script');
  s.src = mybotloadNewsbotScript;
  s.type = "text/javascript";
  s.async = true;
  document.getElementsByTagName('head')[0].appendChild(s);
}

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("ub-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("ub-tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" ub-active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " ub-active";
}

function mybotgetKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key]['id'] === value);
}

function putDataSC(data, multiMatch){
	if(botnoMatchLive){
		if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
			var text = translateTextSC("Matches have not started yet", "words");
		}
		else{
			var text = "Matches have not started yet";
		}
		addBatDataToSC(text, 1, "destroy");
		return;
	}
	multiMatch = false;
	var secondInningsPlayed;
	data[0]['data']['fullScorecard']['innings'].length>1 ? secondInningsPlayed = true : secondInningsPlayed = false;
	if(data[0]['data']['fullScorecard']['innings'].length>2){
		var date = new Date(data[0]['match_data'].startDateTime);
		var homeTeamID = data[0]['match_data'].homeTeam.id;
		var homeTeam = data[0]['match_data'].homeTeam.name;
		var awayTeam = data[0]['match_data'].awayTeam.name;

		var firstTeamHome=true;
		var id1 = data[0]['data']['fullScorecard']['innings'][0].team.id;
		homeScore = data[0]['match_data']['scores']['homeScore']+"("+data[0]['match_data']['scores']['homeOvers']+")";
		awayScore = data[0]['match_data']['scores']['awayScore']+"("+data[0]['match_data']['scores']['awayOvers']+")";
		if(!secondInningsPlayed){
			if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
				var text = translateTextSC("Yet to bat", "words");
			}
			else{
				var text = "Yet to bat";
			}

			if(id1 != homeTeamID){
				var homeScore = text;
			}
			else{
				var awayScore = text;
			}
		}
		if(id1 != homeTeamID){
			// var awayScore = score1;
			var firstName = homeTeam;
			var firstScore = homeScore;
			var secondName = awayTeam;
			var secondScore = awayScore;
		}
		else{
			firstTeamHome = false;
			// var homeScore = score1;
			var firstName = awayTeam;
			var firstScore = awayScore;
			var secondName = homeTeam;
			var secondScore = homeScore;
		}
		if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
			var matchName = data[0]['match_data'].name;
			var nameArr = matchName.split(' ');
			var matchName = translateTextSC(nameArr[0], "words") + " " + translateTextSC(nameArr[1], "numbers");
			var date = translateTextSC(date.getDate().toString(), "numbers")+"/"+translateTextSC((date.getMonth()+1).toString(), "numbers")+", "+translateTextSC(date.getHours().toString(), "numbers")+":"+translateTextSC(date.getMinutes().toString(), "numbers");
			// var date = date.getDate()+"/"+(date.getMonth()+1)+", "+date.getHours()+":"+date.getMinutes();
			firstName =  translateTextSC(teamsSC[firstName].name,"teams", "schedule");
			secondName =  translateTextSC(teamsSC[secondName].name,"teams", "schedule");
			firstScore = translateTextSC(firstScore, "numbers");
			secondScore = translateTextSC(secondScore, "numbers");
			var homeTeamName = translateTextSC(teamsSC[homeTeam].name, "teams", "schedule");
			var awayTeamName = translateTextSC(teamsSC[awayTeam].name, "teams", "schedule");
		}
		else{
			var matchName = data[0]['match_data'].name;
			var date = date.getDate()+"/"+(date.getMonth()+1)+", "+date.getHours()+":"+date.getMinutes();
			firstName =  teamsSC[firstName].name;
			secondName =  teamsSC[secondName].name;
			var homeTeamName = homeTeam;
			var awayTeamName = awayTeam;
		}
		document.querySelector('.ub-sc-num').innerText = matchName;
		document.querySelector('.ub-sc-date').innerText = date;
		document.querySelector('.ub-sc-team1').innerText = firstName;
		document.querySelector('.ub-sc-team2').innerText = secondName;
		document.querySelector('.ub-sc-score1').innerText = firstScore;
		document.querySelector('.ub-sc-score2').innerText = secondScore;
		document.querySelector('.ub-sc-summary').innerText = data[0]['match_data'].currentMatchState;


		for(var i=0;i<data[0]['data']['fullScorecard']['innings'].length;i++){
			var selectorClass = '.ub-sc-tab'+(i+1);
			var selectorID = 'team'+(i+1);

			var currentTeamID = data[0]['data']['fullScorecard']['innings'][i]["team"]["id"];
			var currentTeamName = teamsSC[mybotgetKeyByValue(teamsSC, currentTeamID.toString())];
			if(typeof currentTeamName === "undefined"){
				currentTeamName = "TBD";
			}
			else{
				if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
					currentTeamName = translateTextSC(currentTeamName.name, "teams", "schedule");
				}
				else{
					currentTeamName = currentTeamName.name;
				}
			}
			if(i>1){
				mybotMakeNewTab(i);
			}
			else{
				if(data[0]['data']['fullScorecard']['innings'].length==3){
					if(i==0){
						currentTeamName = currentTeamName + " (S.O)";
					}
				}
				else{
					console.log(1);
					currentTeamName = currentTeamName + " (S.O)";
				}

			}
			document.querySelector(selectorClass).innerText = currentTeamName;
			addBatDataToSC(data[0]['data']['fullScorecard']['innings'][i]['batsmen'], i+1, "batsmen");
			addBatDataToSC(data[0]['data']['fullScorecard']['innings'][i], i+1, "extras");
			addBatDataToSC(data[0]['data']['fullScorecard']['innings'][i], i+1, "runs");
			addBatDataToSC(data[0]['data']['fullScorecard']['innings'][i]['batsmen'], i+1, "ytb");
			addBatDataToSC(data[0]['data']['fullScorecard']['innings'][i]['batsmen'], i+1, "fow");
			addBowlDataToSC(data[0]['data']['fullScorecard']['innings'][i]['bowlers'], i+1);
		}
		document.querySelector('.ub-sc-tab1').addEventListener('click', function(){
			openTab(event, 'team1');
		});
		document.querySelector('.ub-sc-tab2').addEventListener('click', function(){
			openTab(event, 'team2');
		});

	}
	else{
		var date = new Date(data[0]['match_data'].startDateTime);
	var homeTeamID = data[0]['match_data'].homeTeam.id;
	var homeTeam = data[0]['match_data'].homeTeam.name;
	var awayTeam = data[0]['match_data'].awayTeam.name;

	var firstTeamHome=true;
	var id1 = data[0]['data']['fullScorecard']['innings'][0].team.id;
	var score1 = data[0]['data']['fullScorecard']['innings'][0].run +"/"+ data[0]['data']['fullScorecard']['innings'][0].wicket + "(" + data[0]['data']['fullScorecard']['innings'][0].over + ")";
	if(secondInningsPlayed){
		var score2 = data[0]['data']['fullScorecard']['innings'][1].run +"/"+ data[0]['data']['fullScorecard']['innings'][1].wicket + "(" + data[0]['data']['fullScorecard']['innings'][1].over + ")";

		if(id1 != homeTeamID){
			var homeScore = score2;
		}
		else{
			var awayScore = score2;
		}

	}
	else{
		if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
			var text = translateTextSC("Yet to bat", "words");
		}
		else{
			var text = "Yet to bat";
		}

		if(id1 != homeTeamID){
			var homeScore = text;
		}
		else{
			var awayScore = text;
		}

	}

	if(id1 != homeTeamID){
		var awayScore = score1;
		var firstName = homeTeam;
		var firstScore = homeScore;
		var secondName = awayTeam;
		var secondScore = awayScore;
	}
	else{
		firstTeamHome = false;
		var homeScore = score1;
		var firstName = awayTeam;
		var firstScore = awayScore;
		var secondName = homeTeam;
		var secondScore = homeScore;
	}

	if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
		var matchName = data[0]['match_data'].name;
		var nameArr = matchName.split(' ');
		var matchName = translateTextSC(nameArr[0], "words") + " " + translateTextSC(nameArr[1], "numbers");
		var date = translateTextSC(date.getDate().toString(), "numbers")+"/"+translateTextSC((date.getMonth()+1).toString(), "numbers")+", "+translateTextSC(date.getHours().toString(), "numbers")+":"+translateTextSC(date.getMinutes().toString(), "numbers");
		firstName =  translateTextSC(teamsSC[firstName].name,"teams", "schedule");
		secondName =  translateTextSC(teamsSC[secondName].name,"teams", "schedule");
		firstScore = translateTextSC(firstScore, "numbers");
		secondScore = translateTextSC(secondScore, "numbers");
		var homeTeamName = translateTextSC(teamsSC[homeTeam].name, "teams", "schedule");
		var awayTeamName = translateTextSC(teamsSC[awayTeam].name, "teams", "schedule");
	}
	else{
		var matchName = data[0]['match_data'].name;
		var date = date.getDate()+"/"+date.getMonth()+1+", "+date.getHours()+":"+date.getMinutes();
		firstName =  teamsSC[firstName].name;
		secondName =  teamsSC[secondName].name;
		var homeTeamName = homeTeam;
		var awayTeamName = awayTeam;
	}

	document.querySelector('.ub-sc-num').innerText = matchName;
	document.querySelector('.ub-sc-date').innerText = date;
	document.querySelector('.ub-sc-team1').innerText = firstName;
	document.querySelector('.ub-sc-team2').innerText = secondName;
	document.querySelector('.ub-sc-score1').innerText = firstScore;
	document.querySelector('.ub-sc-score2').innerText = secondScore;
	document.querySelector('.ub-sc-summary').innerText = data[0]['match_data'].currentMatchState;

	document.querySelector('.ub-sc-tab1').addEventListener('click', function(){
		openTab(event, 'team1');
	});
	document.querySelector('.ub-sc-tab2').addEventListener('click', function(){
		openTab(event, 'team2');
	});

	var homeBatting = data[0]['match_data'].homeTeam.isBatting;
	if(homeBatting){
		document.querySelector('.ub-sc-score1').classList.add('ub-active');
		document.querySelector('.ub-sc-tab1').innerText = homeTeamName;
		document.querySelector('.ub-sc-tab2').innerText = awayTeamName;
	}
	else{
		document.querySelector('.ub-sc-score2').classList.add('ub-active');
		document.querySelector('.ub-sc-tab1').innerText = awayTeamName;
		document.querySelector('.ub-sc-tab2').innerText = homeTeamName;
	}


	addBatDataToSC(data[0]['data']['fullScorecard']['innings'][0]['batsmen'], 1, "batsmen");
	addBatDataToSC(data[0]['data']['fullScorecard']['innings'][0], 1, "extras");
	addBatDataToSC(data[0]['data']['fullScorecard']['innings'][0], 1, "runs");
	addBatDataToSC(data[0]['data']['fullScorecard']['innings'][0]['batsmen'], 1, "ytb");
	addBatDataToSC(data[0]['data']['fullScorecard']['innings'][0]['batsmen'], 1, "fow");
	addBowlDataToSC(data[0]['data']['fullScorecard']['innings'][0]['bowlers'], 1);

	if(secondInningsPlayed){
		addBatDataToSC(data[0]['data']['fullScorecard']['innings'][1]['batsmen'], 2, "batsmen");
		addBatDataToSC(data[0]['data']['fullScorecard']['innings'][1], 2, "extras");
		addBatDataToSC(data[0]['data']['fullScorecard']['innings'][1], 2, "runs");
		addBatDataToSC(data[0]['data']['fullScorecard']['innings'][1]['batsmen'], 2, "ytb");
		addBatDataToSC(data[0]['data']['fullScorecard']['innings'][1]['batsmen'], 2, "fow");
		addBowlDataToSC(data[0]['data']['fullScorecard']['innings'][1]['bowlers'], 2);
	}
	else{
		if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
			var text = translateTextSC("Yet to bat", "words");
		}
		else{
			var text = "Yet to bat";
		}
		addBatDataToSC(text, 2, "remove");
	}
	}


}

function mybotMakeNewTab(num){
	var parent = document.querySelector('.ub-tab');
	var element = document.createElement('button');
	var newClass = 'ub-sc-tab'+(num+1);
	element.classList.add('ub-tablinks', newClass);

	element.addEventListener('click', function(){
		openTab(event, 'team'+(num+1));
	});
	parent.appendChild(element);
	var parent = document.querySelectorAll('mybot .ub-tab button');
	var tabWidth = ((100/(num+1))-1)+"%";
	[].forEach.call(document.querySelectorAll('mybot .ub-tab button'), function(el) {
		el.style.width = tabWidth;
	});

	parent = document.querySelector('.ub-sc-teams');
	var elem = document.createElement('div');
	elem.id = "team"+(num+1);
	elem.className = 'ub-tabcontent';

	var child = document.createElement('table');
	child.className = 'ub-team-head';
	child.classList.add('ub-sc-teams-bat'+(num+1));
	var subChild = document.createElement('thead');
	var newChild = document.createElement('tr');
	var smallChild = document.createElement('th');
	smallChild.innerText = "Batting";
	newChild.appendChild(smallChild);
	smallChild = document.createElement('th');
	smallChild.innerText = "R";
	newChild.appendChild(smallChild);
	smallChild = document.createElement('th');
	smallChild.innerText = "B";
	newChild.appendChild(smallChild);
	smallChild = document.createElement('th');
	smallChild.innerText = "4s";
	newChild.appendChild(smallChild);
	smallChild = document.createElement('th');
	smallChild.innerText = "6s";
	newChild.appendChild(smallChild);
	smallChild = document.createElement('th');
	smallChild.innerText = "S/R";
	newChild.appendChild(smallChild);
	subChild.appendChild(newChild);
	child.appendChild(subChild);
	subChild = document.createElement('tbody');
	child.appendChild(subChild);
	elem.appendChild(child);
	parent.appendChild(elem);

	var child = document.createElement('table');
	child.className = 'ub-team-bowl';
	child.classList.add('ub-sc-teams-bowl'+(num+1));
	var subChild = document.createElement('thead');
	var newChild = document.createElement('tr');
	var smallChild = document.createElement('th');
	smallChild.innerText = "Bowling";
	newChild.appendChild(smallChild);
	smallChild = document.createElement('th');
	smallChild.innerText = "O";
	newChild.appendChild(smallChild);
	smallChild = document.createElement('th');
	smallChild.innerText = "M";
	newChild.appendChild(smallChild);
	smallChild = document.createElement('th');
	smallChild.innerText = "R";
	newChild.appendChild(smallChild);
	smallChild = document.createElement('th');
	smallChild.innerText = "W";
	newChild.appendChild(smallChild);
	smallChild = document.createElement('th');
	smallChild.innerText = "Econ";
	newChild.appendChild(smallChild);
	subChild.appendChild(newChild);
	child.appendChild(subChild);
	subChild = document.createElement('tbody');
	child.appendChild(subChild);
	elem.appendChild(child);
	parent.appendChild(elem);

}

function addBatDataToSC(data, tab, type){
	var parent = '.ub-sc-teams-bat'+tab;
	var table = document.querySelector(parent);
	var body = table.querySelector('tbody');
	if(type == "batsmen"){
		for(var i=0; i<data.length; i++){
			if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
				var name = data[i].name;
				var nameTr = translateTextSC(name, "players").name;
				if(typeof nameTr!== "undefined"){
					name = nameTr;
				}
				var runs = translateTextSC(data[i].runs.toString(), "numbers");
				var balls = translateTextSC(data[i].balls.toString(), "numbers");
				var fours = translateTextSC(data[i].fours.toString(), "numbers");
				var sixes = translateTextSC(data[i].sixes.toString(), "numbers");
				var sr = translateTextSC(data[i].strikeRate.toString(), "numbers");
			}
			else{
				var name = data[i].name;
				var runs = data[i].runs;
				var balls = data[i].balls;
				var fours = data[i].fours;
				var sixes = data[i].sixes;
				var sr = data[i].strikeRate;
			}

			var element = document.createElement('tr');
			var child = document.createElement('td');
			child.innerText = name;
			var subChild = document.createElement('div');
			subChild.classList.add('ub-team-name-sub');
			subChild.innerText = data[i].howOut;
			child.appendChild(subChild);
			element.appendChild(child);

			child = document.createElement('td');
			child.innerText = runs;
			element.appendChild(child);

			child = document.createElement('td');
			child.innerText = balls;
			element.appendChild(child);

			child = document.createElement('td');
			child.innerText = fours;
			element.appendChild(child);

			child = document.createElement('td');
			child.innerText = sixes;
			element.appendChild(child);

			child = document.createElement('td');
			child.innerText = sr;
			element.appendChild(child);

			body.appendChild(element);
		}
	}
	else if(type == "extras"){
		if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){

			var wide = translateTextSC(data.wide.toString(), "numbers");
			var noBall = translateTextSC(data.noBall.toString(), "numbers");
			var bye = translateTextSC(data.bye.toString(), "numbers");
			var legBye = translateTextSC(data.legBye.toString(), "numbers");
			var extras = translateTextSC(data.extra.toString(), "numbers");
			var extraText = translateTextSC("Extras", "words");
		}
		else{
			var wide = data.wide;
			var noBall = data.noBall;
			var bye = data.bye;
			var legBye = data.legBye;
			var extras = data.extra;
			var extraText = "Extras";
		}


		var element = document.createElement('tr');
		var child = document.createElement('td');
		child.innerText = extraText;
		element.appendChild(child);

		var child = document.createElement('td');
		child.setAttribute("colspan", "5");
		child.innerText = extras+" (NB "+ noBall + ", WD "+ wide + ", LB "+ legBye+", B "+bye+")";
		element.appendChild(child);
		body.appendChild(element);
	}
	else if(type == "runs"){
		if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){

			var runs = translateTextSC(data.run.toString(), "numbers");
			var overs = translateTextSC(data.over.toString(), "numbers");
			var wickets = translateTextSC(data.wicket.toString(), "numbers");
			var runsText = translateTextSC("Total Runs", "words");
			var wktsText = translateTextSC("Wickets", "words");
			var overText = translateTextSC("Over", "words");
		}
		else{
			var runs = data.run;
			var overs = data.over;
			var wickets = data.wicket;
			var runsText = "Total Runs";
			var wktsText = "wickets";
			var overText = "Overs";
		}


		var element = document.createElement('tr');
		var child = document.createElement('td');
		child.innerText = runsText;
		element.appendChild(child);

		child = document.createElement('td');
		child.setAttribute("colspan", "5");
		child.innerText = runs+" ("+wickets+" "+wktsText+", "+ overs + " "+overText+""+")";
		element.appendChild(child);
		body.appendChild(element);
	}
	else if(type == "ytb"){
		if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
			var ytbText = translateTextSC("Yet to bat", "words");
			var ytbTextNo = "No Batsmen Left";
		}
		else{
			var ytbText = "Yet to bat";
			var ytbTextNo = "No Batsmen Left";
		}

		var ytb = [];
		for(var i=0; i<data.length; i++){
			if(data[i].howOut == ""){
				ytb.push(data[i].name);
			}
		}

		var element = document.createElement('tr');
		var child = document.createElement('td');
		child.setAttribute("colspan", "6");
		child.innerText = ytbText;
		element.appendChild(child);

		var subChild = document.createElement('div');
		subChild.classList.add('ub-team-name-sub');
		var inner = "";
		for(var i=0;i<ytb.length;i++){
			if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
				var name = ytb[i];
				var nameTr = translateTextSC(name, "players").name;
				if(typeof nameTr!== "undefined"){
					name = nameTr;
				}
				if(i==ytb.length-1){
					inner += name;
				}
				else{
					inner += name+", ";
				}
			}
			else{
				if(i==ytb.length-1){
					inner += ytb[i];
				}
				else{
					inner += ytb[i]+", ";
				}
			}
		}
		if(inner == ""){
			inner = ytbTextNo;
		}
		subChild.innerText = inner;
		child.appendChild(subChild);

		body.appendChild(element);
	}
	else if(type == "fow"){
		if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
			var fowText = translateTextSC("Fall of Wickets", "words");
			var fowTextNo = "No Batsmen Out";
		}
		else{
			var fowText = "Fall of Wickets";
			var fowTextNo = "No Batsmen Out";
		}
		fow = [];
		for(var i=0; i<data.length; i++){
			if(data[i].fowOrder != 0){
				fow.push({
					'fow': data[i].fallOfWicket,
					"fowOrder": data[i].fowOrder,
					"name": data[i].name,
					"fowOver": data[i].fallOfWicketOver
				});
			}
		}

		fow = fow.sort(compareValues('fowOrder'));

		var element = document.createElement('tr');
		var child = document.createElement('td');
		child.setAttribute("colspan", "6");
		child.innerText = fowText;
		element.appendChild(child);

		var subChild = document.createElement('div');
		subChild.classList.add('ub-team-name-sub');
		var inner = "";

		for(var i=0;i<fow.length;i++){
			if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
				var name = fow[i].name;
				var nameTr = translateTextSC(name, "players").name;
				if(typeof nameTr!== "undefined"){
					name = nameTr;
				}
				if(i==fow.length-1){
					inner += translateTextSC(fow[i].fow, "numbers") + " ("+ name + ", "+translateTextSC(fow[i].fowOver, "numbers")+")";
				}
				else{
					inner += translateTextSC(fow[i].fow, "numbers") + " ("+ name + ", "+translateTextSC(fow[i].fowOver, "numbers")+")"+", ";
				}
			}
			else{
				if(i==fow.length-1){
					inner += fow[i].fow + " ("+ fow[i].name + ", "+fow[i].fowOver+")";
				}
				else{
					inner += fow[i].fow + " ("+ fow[i].name + ", "+fow[i].fowOver+")"+", ";
				}
			}
		}
		if(inner == ""){
			inner = fowTextNo;
		}
		subChild.innerText = inner;
		child.appendChild(subChild);

		body.appendChild(element);
	}
	else if(type == "remove"){
		parent = document.getElementById('team2');
		parent.style.textAlign = "center";
		parent.innerHTML = data;
	}
	else if(type == "destroy"){
		console.log(data);
		parent = document.querySelector('.ub-scorecard');
		parent.classList.add('ub-sc-nomatch');
		parent.innerHTML = data;
	}
}

function addBowlDataToSC(data, tab, type){
	var parent = '.ub-sc-teams-bowl'+tab;
	var table = document.querySelector(parent);
	var body = table.querySelector('tbody');

	for(var i=0; i<data.length; i++){
		if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
			var name = data[i].name;
			var nameTr = translateTextSC(name, "players").name;
			if(typeof nameTr!== "undefined"){
				name = nameTr;
			}
			var overs = translateTextSC(data[i].overs.toString(), "numbers");
			var maidens = translateTextSC(data[i].maidens.toString(), "numbers");
			var runsConceded = translateTextSC(data[i].runsConceded.toString(), "numbers");
			var wickets = translateTextSC(data[i].wickets.toString(), "numbers");
			var economy = translateTextSC(data[i].economy.toString(), "numbers");
		}
		else{
			var name = data[i].name;
			var overs = data[i].overs;
			var maidens = data[i].maidens;
			var runsConceded = data[i].runsConceded;
			var wickets = data[i].wickets;
			var economy = data[i].economy;
		}
		var element = document.createElement('tr');
		var child = document.createElement('td');
		child.innerText = name;
		element.appendChild(child);

		child = document.createElement('td');
		child.innerText = overs;
		element.appendChild(child);

		child = document.createElement('td');
		child.innerText = maidens;
		element.appendChild(child);

		child = document.createElement('td');
		child.innerText = runsConceded;
		element.appendChild(child);

		child = document.createElement('td');
		child.innerText = wickets;
		element.appendChild(child);

		child = document.createElement('td');
		child.innerText = economy;
		element.appendChild(child);

		body.appendChild(element);
	}
}

function compareValues(key, order = 'asc') {
	return function innerSort(a, b) {
	  if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
		// property doesn't exist on either object
		return 0;
	  }

	  const varA = (typeof a[key] === 'string')
		? a[key].toUpperCase() : a[key];
	  const varB = (typeof b[key] === 'string')
		? b[key].toUpperCase() : b[key];

	  let comparison = 0;
	  if (varA > varB) {
		comparison = 1;
	  } else if (varA < varB) {
		comparison = -1;
	  }
	  return (
		(order === 'desc') ? (comparison * -1) : comparison
	  );
	};
  }

function mybotTranslateBotSC(){
    var request = new XMLHttpRequest();
	url = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/translate/tr	anslate.json';
	// url = 'http://localhost:800/unibots/main/translate/translate.json';

    request.open('GET', url, true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = request.responseText;
            data = JSON.parse(data);
            data = data[mybotTranslateSC];
            if(data) {
                translatedDataSC = data;
                getScoreCard(0);
            }
        }
        else {
            console.log('Translation Failed');
        }
    };
    request.onerror = function() {
        console.log('Translation Failed');
    };
    request.send();
}

function translateTextSC(word, category, parent){
    word1 = word.toLowerCase();
    if(category){
        category1 = category.toLowerCase();
    }
    if(parent){
        parent1 = parent.toLowerCase();
        if(translatedDataSC[parent1][category1][word1]){
            return translatedDataSC[parent1][category1][word1];
        }
        else{
            return word;
        }
    }
    else{
        if(category1 == "numbers"){
            numArr = word1.split("");
            word1 = "";
            for(var i=0;i<numArr.length;i++){
                if(translatedDataSC[category1][numArr[i]]){
                     word1 = word1.concat(translatedDataSC[category1][numArr[i]]);
                }
                else{
                    word1 = word1.concat(numArr[i]);
                }
            }
            return word1;
        }
        else{
            if(translatedDataSC[category1][word1]){
                return translatedDataSC[category1][word1];
            }
            else{
                return word;
            }
        }
    }

}
function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}window.ready(function(){var html='<mybot> <div id="gabywa"></div> <div class="ub-scorecard"> <div class="ub-sc-head"> <div class="ub-sc-num"> </div> <div class="ub-sc-date"> </div> <div> <div class="ub-sc-team1 ub-sc-team"> </div> <div class="ub-sc-score1 ub-sc-score"> </div> </div> <div> <div class="ub-sc-team2 ub-sc-team"> </div> <div class="ub-sc-score2 ub-sc-score"> </div> </div> <div class="ub-sc-summary"> </div> </div> <div class="ub-sc-teams"> <div class="ub-tab"> <button class="ub-tablinks ub-active ub-sc-tab1"></button> <button class="ub-tablinks ub-sc-tab2"></button> </div> <div id="team1" class="ub-tabcontent"> <table class="ub-team-head ub-sc-teams-bat1"> <thead> <tr> <th>Batting</th> <th>R</th> <th>B</th> <th>4s</th> <th>6s</th> <th>S/R</th> </tr> </thead> <tbody></tbody> </table> <table class="ub-team-bowl ub-sc-teams-bowl1"> <thead> <tr> <th>Bowling</th> <th>O</th> <th>M</th> <th>R</th> <th>W</th> <th>Econ</th> </tr> </thead> <tbody></tbody> </table>  </div> <div id="team2" class="ub-tabcontent"> <table class="ub-team-head ub-sc-teams-bat2"> <thead> <tr> <th>Batting</th> <th>R</th> <th>B</th> <th>4s</th> <th>6s</th> <th>S/R</th> </tr> </thead> <tbody></tbody> </table> <table class="ub-team-bowl ub-sc-teams-bowl2"> <thead> <tr> <th>Bowling</th> <th>O</th> <th>M</th> <th>R</th> <th>W</th> <th>Econ</th> </tr> </thead> <tbody></tbody> </table>  </div></mybot>';var element=document.querySelector('#ub-fullscore-wrapper');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='';var rule_common='mybot{color:#333;position:relative;z-index:2147483640}mybot *{-webkit-box-sizing:content-box!important;-moz-box-sizing:content-box!important;box-sizing:content-box!important}mybot img{-webkit-user-drag:none;-moz-user-drag:none;-khtml-user-drag:none}mybot .row{margin-right:0}mybot a,mybot a:hover,mybot a:focus{text-decoration:none;outline:none}mybot .ub-scorecard{width:100%;max-width:700px;height:490px;max-height:490px;overflow-y:scroll;background:#fff;font-family:arial,sans-serif}mybot .ub-sc-nomatch{display:flex;justify-content:center;align-items:center;background:darkslategray!important;color:#fff;font-size:x-large}mybot .ub-sc-head{font-size:18px;border-bottom:1px solid #000;color:#fff;background:darkmagenta}mybot .ub-sc-num{padding:10px;color:#fff;display:inline-block}mybot .ub-sc-date{padding:10px;display:inline-block;float:right;font-weight:600}mybot .ub-sc-team{padding:10px;padding-top:0;font-size:18px;display:inline-block}mybot .ub-sc-score{padding:10px;padding-top:0;display:inline-block;float:right}mybot .ub-sc-summary{padding:5px;font-weight:600;text-align:center}mybot .ub-active{font-weight:600}mybot .ub-tab{overflow:hidden;border:1px solid #ccc;background-color:bisque}mybot .ub-tab button{background-color:inherit;width:49%;box-sizing:border-box!important;border:none;outline:none;cursor:pointer;padding:14px 16px;transition:0.3s;font-size:17px}mybot .ub-tab button:hover{background-color:#ddd}mybot .ub-tab button.ub-active{background-color:salmon}mybot .ub-tabcontent{display:none;padding:6px 12px;border:1px solid #ccc;border-top:none}mybot .ub-tabcontent#team1{display:block}mybot .ub-team-head,.ub-team-bowl{width:100%;text-align:left}mybot .ub-team-bowl{margin-top:20px}mybot .ub-team-head th:first-child,.ub-team-head td:first-child,.ub-team-bowl th:first-child,.ub-team-bowl td:first-child{width:60%}mybot .ub-team-head th,.ub-team-head td,.ub-team-bowl th,.ub-team-bowl td{padding:10px;border-bottom:1px solid grey}mybot .ub-team-name-sub{font-size:14px;color:grey}mybot .ub-scorecard::-webkit-scrollbar{width:6px}mybot .ub-scorecard::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);-webkit-border-radius:10px;border-radius:10px}mybot .ub-scorecard::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:#223577;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.5)}mybot .ub-toss{margin-top:20px}@media only screen and (max-width:400px){mybot .ub-sc-head,mybot .ub-sc-team,mybot{font-size:13px}mybot .ub-sc-summary{font-size:12px}mybot .ub-tabcontent{padding:0;font-size:10px}mybot .ub-team-name-sub{font-size:10px}}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule+rule_common;}else{css.appendChild(document.createTextNode(rule));css.appendChild(document.createTextNode(rule_common));}document.getElementsByTagName('head')[0].appendChild(css);callOnDocumentReadysc();});