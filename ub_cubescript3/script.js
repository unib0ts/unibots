mybotLoadAdDefault = 0;
mybotAuthEnabled = 0;
mybotCloseEnabled = 1;
mybotClickCountEnabled = 1;
mybotClickLocation = '';
mybotStatAPI = 'get_stat';
mybotStartHour = 12;
mybotEndHour = 6;
mybotampEnabled = 0;
botPosition ='left';
botPoweredBrand = '';

var mybotScrollFlag = 0;
mybotScrollStartFlag = 0;
var mybotScrollPixelHeight = 45;
mybotScrollStartPixelHeight = 0;
var mybotIsBottomScrollDisapperEnabled = 0;
var mybotIsBottomScrollStartDisapperEnabled = 0;
mybotMobileTopPlacement = 0;
mybotIsScrollupDisapperEnabled =0;
// mobileTopPixel = 54;

// mybotGACode = 'G-18PP7ETNGV';

// mybotOnlyTextdata = 1;
  // mybotStateData =1;

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

// mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';

mybotClosevar = '<img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots/main/close_new.png" alt="ub-closebtn" width="16px;">';
//
// mybotadSmall = '<div id="div-gpt-ad-1626772946328-0"></div>';

mybotCustomFunction =()=> {
  // document.getElementById('gabywa').innerHTML=mybotgabywa;
  // document.getElementById('ub-close').style.display = "none";
  // document.getElementById('adsmall').innerHTML=mybotadSmall;

  window.unibotsoutb = window.unibotsoutb || { cmd: [] };
  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];

  runCMD = () => {
      while (unibotsoutb.cmd.length > 0) {
          unibotsoutb.cmd[0]()
          unibotsoutb.cmd.shift()
      }
  }

  setInterval(() => {
      runCMD();
  }, 500);

  unibotsOutb = (clientName, gabyub) => {
     let clientname = clientName;
       ub_passback1(clientname, gabyub);
  }
  cubespinnervisibility();

}

loadAdCustom=() =>{
  return false;
}

 ub_passback1 =(clientname, gabyub)=> {
  mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+gabyub+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+gabyub+'");</script>';
  document.getElementById('gabywa').innerHTML=mybotgabywa;

  var s0_passback = document.createElement('script');
  s0_passback.src = "https://widgets.outbrain.com/outbrain.js";
  s0_passback.async = "async";
  s0_passback.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(s0_passback);


  for (let i = 1; i < 5; i++) {
    ub_passback = document.createElement("div");
    setAttributes(ub_passback, {
      "style":"height:150px; width: 150px;",
      "data-ob-contentUrl": clientname,
      "data-widget-id": "AR_1",
      "class": "OUTBRAIN",
      "data-ob-installation-key":"SOMOM1N7AABIN0IND9EJAD9JK"
    });
    ub_sticky = document.querySelector('.ub-roller' + i);
    ub_sticky.appendChild(ub_passback);
  }
}

 cubespinnervisibility=()=> {
  var ub_clmb = setInterval(clmbdiv, 500);

   function clmbdiv() {
        if (document.querySelector('#ob_holder')) {
          if (document.querySelector('#ob_holder').childNodes[0]) {
                document.getElementById('ub-close').innerHTML=mybotClosevar;
                ub_z2 = document.createElement("div");
                ub_z2.id = "ub_adsbanner";
                ub_z2.style = "line-height:11px;border-radius:5px;font-size:10px;width:130px;position:absolute;top:-18px;text-align:center;right: 16px;background-repeat:no-repeat;background-position:center;background-color:#17479e;";
                ub_z2.innerHTML = "<a href='https://unibots.in/?utm_source=unibots&utm_medium=cubeadwidget' style='color: #fff;text-decoration: none;'>Ads by Unibots</a>";
                document.querySelector('#ub-roller-wrapper').appendChild(ub_z2);
                clearInterval(ub_clmb);
          }
        }
  }
}

 setAttributes=(el, attrs)=> {
 for(var key in attrs) {
   el.setAttribute(key, attrs[key]);
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
var mybotDragElementFlag = 0;
var boturl = window.location.href;
var teamsBowl = {
	"Mumbai Indians": "Mumbai",
	"Chennai Super Kings": "Chennai",
	"Delhi Capitals": "Delhi",
	"Punjab Kings": "Punjab",
	"Sunrisers Hyderabad": "Hyderabad",
	"Royal Challengers Bangalore": "Bangalore",
	"Kolkata Knight Riders": "Kolkata",
	"Rajasthan Royals": "Rajasthan",
	"Unknown": "TBD"
};
function callOnDocumentReadyCube() {
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
						    	mybotStart();
						   }
						   else {
						     mybotloadNewsbotWidget();
						   }
						}
						else {
							if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
								 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
										mybotStart();
								 }
								 else {
									 mybotloadNewsbotWidget();
								 }
							}
							else {
									mybotStart();
							}
						}
					}
				}
			}
			else {
				console.log('Block Check Request failed');
				if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
					 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
							mybotStart();
					 }
					 else {
						 mybotloadNewsbotWidget();
					 }
				}
				else {
						mybotStart();
				}
			}
		};
		request.onerror = function() {
			console.log('Request failed');
			if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
				 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
						mybotStart();
				 }
				 else {
					 mybotloadNewsbotWidget();
				 }
			}
			else {
					mybotStart();
			}
		};
		request.send();
	}
	else{
		if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
			 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
					mybotStart();
			 }
			 else {
				 mybotloadNewsbotWidget();
			 }
		}
		else {
				mybotStart();
		}
	}
}

function mybotStart(){
		mybotCustomFunction();
		// placeBotAndAd();
		// loadAd('gabywa');
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
		if((typeof mybotMultipleIconsDynamicEnabled !== 'undefined') && (mybotMultipleIconsDynamicEnabled == 1)){
			currentTS = Date.now() / 1000 | 0;
			for(i=0;i<mybotMultiIconTimestamps.length;i++){
				if((mybotMultiIconTimestamps[i][0]<= currentTS) && (currentTS<=mybotMultiIconTimestamps[i][1])){
					// if (mobileCheck() && (document.getElementById('dragItem').style.display =='none')) {
					// 	 clearInterval(function(){
					// 	 rotateValues();
					// 	}, 20000);
					// }
					// else {
						// rotateValues();
						// setInterval(function(){
						//  rotateValues();
						// }, 20000);
					// }
          // mybotBowl();
					// getScore(0);
					// // runSequence();
					// setInterval(function() {
					// 	runSequence();
					// }, 20000);
					mybotMultipleIconsEnabled=0;
					break;
				}
				else{
					mybotMultipleIconsEnabled=1;
				}
			}
		}

		// if(mybotMultipleIconsEnabled){
		// 	if ((typeof mybotbowlWidgetNlvHrs !== 'undefined') && (mybotbowlWidgetNlvHrs == 1)) {
		// 		// mybotBowl();
		// 		// rotateValues();
		// 		// setInterval(function(){
		// 		//  rotateValues();
		// 		// }, 20000);
		// 		getScore(0);
		// 		// runSequence();
		// 	}
		// }

		if(mybotCloseEnabled){
			[].forEach.call(document.querySelectorAll('.ub-close'), function(el) {
				// el.style.display='none';
				el.addEventListener('click', function(event) {
					event.stopPropagation();
					event.preventDefault();
					// clearTimeout(ub_timeout);
 				 document.getElementById('adsmall').style.display = "none";
 				 document.getElementById('ub-banner-ad').style.display = "none"
				 document.getElementById('ub_adsbanner').style.display = "none"
 				 document.getElementById('ub-roller').style.display = "none";
 				 document.getElementById('ub-close').style.display = "none";
				})
			});
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

function putData(mybotDataSet, isLive) {
    // console.log(mybotDataSet);

	if(isLive == 1) {
		document.getElementById('liveBlock').style.display = 'block';
		document.getElementById('upcomingCompletedBlock').style.display = 'none';

			currentScore = mybotDataSet.currentScore;
			currentOvers = mybotDataSet.currentOvers;
			botCurrentScoreStats = currentScore;
			botCurrentOverStats = currentOvers + " Overs";
			currentTeam = mybotDataSet.currentTeam;
			currentBatsmen = mybotDataSet.currentBatsmen;
			currentBatsmenBalls = mybotDataSet.currentBatsmenBalls;
			currentBatsmenRuns = mybotDataSet.currentBatsmenRuns;
			if(currentBatsmen[0]==undefined){
				batsmanOne ='';
				batsmanBallsOne ='';
				batsmanScoreOne ='';
				botBatsmanOneStats = '';
			}
			else{
				batsmanOne = currentBatsmen[0];
				temp = batsmanOne.split(' ');
				batsmanOne = temp[0][0]+' ' +temp[1];
				batsmanBallsOne = currentBatsmenBalls[0];
				batsmanScoreOne = currentBatsmenRuns[0];
				botBatsmanOneStats=batsmanScoreOne+" ("+batsmanBallsOne+")";
			}
			if(currentBatsmen[1]==undefined){
				batsmanTwo ='';
				batsmanBallsTwo ='';
				batsmanScoreTwo ='';
				botBatsmanTwoStats = '';
			}
			else{
				batsmanTwo = currentBatsmen[1];
				temp = batsmanTwo.split(' ');
				batsmanTwo = temp[0][0]+' ' +temp[1];
				batsmanBallsTwo = currentBatsmenBalls[1];
				batsmanScoreTwo = currentBatsmenRuns[1];
				botBatsmanTwoStats=batsmanScoreTwo+" ("+batsmanBallsTwo+")";
			}

			botBowlerOvers = mybotDataSet.currentBowlerOvers;
			botBowlerMaiden = mybotDataSet.currentBowlerMaidens;
			botBowlerRuns = mybotDataSet.currentBowlerRuns;
			botBowlerWickets = mybotDataSet.currentBowlerWickets;
			if(botBowlerOvers=='none'){
				botBowlerStats='';
			}
			else{
				botBowlerStats = botBowlerOvers+"-"+botBowlerMaiden+"-"+botBowlerRuns+"-"+botBowlerWickets;
			}
			if(mybotDataSet.currentBowler=='none' || mybotDataSet.currentBowler == undefined){
	            botbowlerName = 'Score Board';
	            botBowlerStats='';
	    }
			else{
				botbowlerName = mybotDataSet.currentBowler;
				temp = botbowlerName.split(' ');
				botbowlerName = temp[0][0]+' ' +temp[1];
			}

			if(mybotDataSet.summaryText=='none' || mybotDataSet.summaryText == undefined){
				botSummary = '';
			}
			else{
				botSummary = mybotDataSet.summaryText;
	            for(var i=0;i<Object.keys(teamsBowl).length-1;i++){
	                var teamToCheck = Object.keys(teamsBowl)[i];
	                var re = new RegExp(teamToCheck, 'i');
	                botSummary = botSummary.replace(re, teamsBowl[teamToCheck]);
	            }
			}
			if(currentBatsmen[0]==undefined && currentBatsmen[0]==undefined && (botSummary!=undefined && botSummary!='none')){
				batsmanOne=botSummary;
			}
			botTarget = mybotDataSet.target;
			if(botTarget==0){
				botTarget=mybotDataSet.title+'<br>[Live]';
			}
			else{
				botTarget = 'Target - '+botTarget;
			}
			let date = (mybotDataSet.startDateTime) - 17000;
			date = date.toString();
			let time = date;
			time = (date.substring(10, 12)=="60") ? (parseInt(date.substring(8, 10)) + 1)  + ':' + '00' + ':' + date.substring(12, 14) : (date.substring(8, 10) + ':' + date.substring(10, 12) + ':' + date.substring(12, 14));
			date = formatDate(date);

			// let date = new Date(mybotDataSet.startDateTime);
			// let time = formatTime(date);
			// date = formatDate(date);

			if(currentScore=='' && currentOvers=='' && botBowlerStats=='' && botBatsmanOneStats==''){
				botCurrentScoreStats = 'Score will be updated soon!';
				botBowlerStats = 'Score will be updated soon!';
				botBatsmanOneStats = 'Score will be updated soon!';
			}
			if (typeof mybotSponserAd !== 'undefined' && mybotSponserAd == 1) {
        mybotLivescore = true;

			}else {
				document.getElementById('mybotTeams').innerHTML = mybotDataSet.title;
				document.getElementById('mybotTime').innerHTML = date.toString() + "<br>" + time.toString();
				document.getElementById('botBatsmanOne').innerHTML = batsmanOne;
				document.getElementById('botBatsmanTwo').innerHTML = batsmanTwo;
				document.getElementById('botBatsmanOneScore').innerHTML = botBatsmanOneStats;
				document.getElementById('botBatsmanTwoScore').innerHTML = botBatsmanTwoStats;

			}
			document.getElementById('botSet1').innerHTML = mybotDataSet.title+'<br>[Live]';
			document.getElementById('botSet2').innerHTML = mybotDataSet.title+'<br>[Live]';
			document.getElementById('botCurrentScore').innerHTML = botCurrentScoreStats;
			document.getElementById('botCurrentOvers').innerHTML = botCurrentOverStats;
			document.getElementById('botCurrentTeam').innerHTML = currentTeam;
			document.getElementById('botTarget').innerHTML = botTarget;
			document.getElementById('botBowler').innerHTML = botbowlerName;
			document.getElementById('botBowlerOvers').innerHTML = botBowlerStats;
			document.getElementById('botSummary').innerHTML = botSummary;
			if (mybotLivescore) {
				console.log('test');
								// ubSponserAd();
			}
	}
	if (isLive == 0) {
		document.getElementById('liveBlock').style.display = 'none';
			document.getElementById('summaryText4UCB').innerHTML = 'Score Board';
    	// if(typeof mybotShortScore !== 'undefined' && mybotShortScore ==1){
			// 	document.getElementById('upcomingCompletedBlock').style.display = 'block';
			// 	for (var j = 1; j <= 3; j++) {
			// 		botSummary = mybotDataSet[0].description;
			// 		mybotTeam1 = mybotDataSet[j-1]['team-1'];
			// 		mybotTeam2 = mybotDataSet[j-1]['team-2'];
			// 				 for(var i=0;i<Object.keys(teamsBowl).length-1;i++){
			// 						 var teamToCheck = Object.keys(teamsBowl)[i];
			// 						 var re = new RegExp(teamToCheck, 'i');
			// 						 botSummary = botSummary.replace(re, teamsBowl[teamToCheck]);
			// 						 mybotTeam1 = mybotTeam1.replace(re, teamsBowl[teamToCheck]);
			// 						 mybotTeam2 = mybotTeam2.replace(re, teamsBowl[teamToCheck]);
			//
			// 				 }
			// 				 let date = new Date(mybotDataSet[j - 1].dateTimeGMT);
		 	// 				let time = formatTime(date);
		 	// 				date = formatDate(date);
			// 			if (mybotDataSet[j - 1].matchStarted == false) {
		 	// 				if(document.getElementById('summaryText' + j +'UCB') !== null) {
		 	// 					document.getElementById('titleText' + j +'UCB').innerHTML = "Upcoming Match<br>"+mybotTeam1 +" vs "+ mybotTeam2;
		 	// 					document.getElementById('summaryText' + j +'UCB').innerHTML = date.toString() + "<br>" + time.toString();
		 	// 				}
			// 			}
			// 			else if (mybotDataSet[j - 1].matchStarted == true) {
			// 				if(document.getElementById('summaryText' + j +'UCB') !== null) {
			// 					document.getElementById('titleText' + j +'UCB').innerHTML = "Completed Match<br>"+mybotTeam1 +" vs "+ mybotTeam2;
			// 					document.getElementById('summaryText' + j +'UCB').innerHTML = botSummary;
			// 				}
			// 			}
		  // 	}
		  // }
			// else {
			for (var j = 1; j <= 3; j++) {
				botSummary = mybotDataSet[j - 1].summaryText;
							for(var i=0;i<Object.keys(teamsBowl).length-1;i++){
									var teamToCheck = Object.keys(teamsBowl)[i];
									var re = new RegExp(teamToCheck, 'i');
									botSummary = botSummary.replace(re, teamsBowl[teamToCheck]);
							}
				if (mybotDataSet[j - 1].matchStatus == 'UPCOMING') {
					document.getElementById('upcomingCompletedBlock').style.display = 'block';
					let date = (mybotDataSet[j - 1].startDateTime) - 17000;
					date = date.toString();
					let time = date;
					time = (date.substring(10, 12)=="60") ? (parseInt(date.substring(8, 10)) + 1)  + ':' + '00' + ':' + date.substring(12, 14) : (date.substring(8, 10) + ':' + date.substring(10, 12) + ':' + date.substring(12, 14));
					date = formatDate(date);

					// let date = new Date(mybotDataSet[j - 1].startDateTime);
					// date = new Date(date);
					// let time = formatTime(date);
					// date = formatDate(date);
					if(document.getElementById('summaryText' + j +'UCB') !== null) {
						if(typeof mybotSponserAd !== 'undefined' && mybotSponserAd == 1){
							document.getElementById('titleText2UCB').innerHTML = "Upcoming Match<br>"+mybotDataSet[1].title;
							document.getElementById('summaryText2UCB').innerHTML = date + "<br>" + time;
						}
						else {
							document.getElementById('titleText' + j +'UCB').innerHTML = "Upcoming Match<br>"+mybotDataSet[j - 1].title;
						 document.getElementById('summaryText' + j +'UCB').innerHTML = date + "<br>" + time;
						}
					}
				}
				else if (mybotDataSet[j - 1].matchStatus == 'COMPLETED') {
					document.getElementById('upcomingCompletedBlock').style.display = 'block';
					if(document.getElementById('summaryText' + j +'UCB') !== null) {
						if(typeof mybotSponserAd !== 'undefined' && mybotSponserAd == 1){
							document.getElementById('titleText2UCB').innerHTML = "Completed Match<br>"+mybotDataSet[j - 1].title;
							document.getElementById('summaryText2UCB').innerHTML = botSummary;
						}
						else {
							document.getElementById('titleText' + j +'UCB').innerHTML = "Completed Match<br>"+mybotDataSet[j - 1].title;
							document.getElementById('summaryText' + j +'UCB').innerHTML = botSummary;
					  }
					}
				}
				else if (mybotDataSet[j - 1].matchStatus == 'INPROGRESS') {
					document.getElementById('upcomingCompletedBlock').style.display = 'block';
					if(document.getElementById('summaryText' + j +'UCB') !== null) {
						if (document.getElementById('titleText' + i +'UCB') !== null) {
							document.getElementById('titleText' + i +'UCB').innerHTML = "In-progress Match<br>"+mybotDataSet[j - 1].title;
							document.getElementById('summaryText' + i +'UCB').innerHTML = botSummary;
						}
						else {
							document.getElementById('titleText' + 1 +'UCB').innerHTML = "In-progress Match<br>"+mybotDataSet[j - 1].title;
							document.getElementById('summaryText' + 1 +'UCB').innerHTML = botSummary;
						}
					}
				}
			}
		  // }
	}
}


function getScore(flag) {
	var request = new XMLHttpRequest();
	url = 'https://cricket.unibots.in/'+'get_score';
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
			// console.log(data);
			if(data.error === false) {
				if(typeof mybotShortScore !== 'undefined' && mybotShortScore ==1){
					mybotLiveMatches = data.data[0].matchStarted;
					mybotUpcomingMatches =data.data[1].matchStarted;
					mybotUpcomingMatches =data.data[2].matchStarted;
					//
					// if(mybotLiveMatches == 'true'){
					// 	mybotIsMatchLive = 1;
					// 	mybotDataSet1 = data.data[0];
					// 	// if(mybotLiveMatches==2){
					// 	// 	mybotDataSet2 = data.data[0][1];
					// 	// }
					// 	if(flag == 0) {
					// 		setIntervalX(function () {
					// 			putData(mybotDataSet1, mybotIsMatchLive);
					// 		}, 1000, 9);
					// 		// putData(mybotDataSet1, mybotIsMatchLive);
					// 	}
					// }else {
						dataSet.push(data.data[0]);
						dataSet.push(data.data[1]);
						dataSet.push(data.data[2]);
						mybotDataSet1 = dataSet;
						setIntervalX(function () {
							putData(mybotDataSet1, mybotIsMatchLive);
						}, 1000, 9);
					// }

				}else {
					mybotLiveMatches = data.data[0].length;
					mybotUpcomingMatches = data.data[1].length;
					mybotProgressMatches = data.data[2].length;
					mybotCompleteMatches = data.data[3].length;

					if(mybotLiveMatches > 0){
						mybotIsMatchLive = 1;
						mybotDataSet1 = data.data[0][0];
						if(mybotLiveMatches==2){
							mybotDataSet2 = data.data[0][1];
						}
						if(flag == 0) {
							setIntervalX(function () {
								putData(mybotDataSet1, mybotIsMatchLive);
							}, 1000, 9);
							// putData(mybotDataSet1, mybotIsMatchLive);
						}
					}
					else{
						if(mybotProgressMatches!=0){
							if(mybotProgressMatches == 3){
								dataSet.push(data.data[2][0]);
								dataSet.push(data.data[2][1]);
								dataSet.push(data.data[0][2]);
							}
							else if(mybotProgressMatches == 2){
								if(mybotUpcomingMatches!=0){
									dataSet.push(data.data[2][0]);
									dataSet.push(data.data[2][1]);
									dataSet.push(data.data[1][0]);
								}
								else if(mybotCompleteMatches!=0){
									dataSet.push(data.data[2][0]);
									dataSet.push(data.data[1][0]);
									dataSet.push(data.data[3][0]);
								}
								else if(mybotUpcomingMatches == 0 && mybotCompleteMatches ==0){
									dataSet.push(data.data[2][0]);
									dataSet.push(data.data[2][1]);
									dataSet.push(data.data[2][0]);
								}
							}
							else if(mybotProgressMatches == 1){
								if(mybotUpcomingMatches!=0 && mybotCompleteMatches!=0){
									dataSet.push(data.data[2][0]);
									dataSet.push(data.data[1][0]);
									dataSet.push(data.data[3][0]);
								}
								else if(mybotCompleteMatches==0 && mybotUpcomingMatches >= 2){
									dataSet.push(data.data[2][0]);
									dataSet.push(data.data[1][0]);
									dataSet.push(data.data[1][1]);
								}
								else if(mybotCompleteMatches==0 && mybotUpcomingMatches == 1){
									dataSet.push(data.data[2][0]);
									dataSet.push(data.data[1][0]);
									dataSet.push(data.data[2][0]);
								}
								else if(mybotCompleteMatches>=2 && mybotUpcomingMatches == 0){
									dataSet.push(data.data[2][0]);
									dataSet.push(data.data[3][0]);
									dataSet.push(data.data[3][1]);
								}
								else if(mybotCompleteMatches==1 && mybotUpcomingMatches == 0){
									dataSet.push(data.data[2][0]);
									dataSet.push(data.data[3][0]);
									dataSet.push(data.data[2][0]);
								}
								else if(mybotUpcomingMatches == 0 && mybotCompleteMatches == 0){
									dataSet.push(data.data[2][0]);
									dataSet.push(data.data[2][0]);
									dataSet.push(data.data[2][0]);
								}
							}
							mybotDataSet1 = dataSet;
							setIntervalX(function () {
								putData(mybotDataSet1, mybotIsMatchLive);
							}, 1000, 9);
							// putData(mybotDataSet1, mybotIsMatchLive);
						}
						else if(mybotProgressMatches==0 && mybotUpcomingMatches!=0){
							if(mybotUpcomingMatches == 3 && mybotCompleteMatches==0){
								dataSet.push(data.data[1][0]);
								dataSet.push(data.data[1][1]);
								dataSet.push(data.data[1][2]);
							}
							if(mybotUpcomingMatches == 3 && mybotCompleteMatches!=0){
								dataSet.push(data.data[1][0]);
								dataSet.push(data.data[3][0]);
								dataSet.push(data.data[1][1]);
							}
							if(mybotUpcomingMatches == 2 && mybotCompleteMatches>=1){
								dataSet.push(data.data[1][0]);
								dataSet.push(data.data[1][1]);
								dataSet.push(data.data[3][0]);
							}
							if(mybotUpcomingMatches == 2 && mybotCompleteMatches==0){
								dataSet.push(data.data[1][0]);
								dataSet.push(data.data[1][1]);
								dataSet.push(data.data[1][0]);
							}
							if(mybotUpcomingMatches == 1 && mybotCompleteMatches>=2){
								dataSet.push(data.data[1][0]);
								dataSet.push(data.data[3][0]);
								dataSet.push(data.data[3][1]);
							}
							if(mybotUpcomingMatches == 1 && mybotCompleteMatches==1){
								dataSet.push(data.data[1][0]);
								dataSet.push(data.data[3][0]);
								dataSet.push(data.data[1][0]);
							}
							if(mybotUpcomingMatches == 1 && mybotCompleteMatches==0){
								dataSet.push(data.data[1][0]);
								dataSet.push(data.data[1][0]);
								dataSet.push(data.data[1][0]);
							}
							mybotDataSet1 = dataSet;
							setIntervalX(function () {
								putData(mybotDataSet1, mybotIsMatchLive);
							}, 1000, 9);
							// putData(mybotDataSet1, mybotIsMatchLive);
						}
						else if(mybotProgressMatches==0 && mybotUpcomingMatches==0 && mybotCompleteMatches!=0){
							if(mybotCompleteMatches==3){
								dataSet.push(data.data[3][0]);
								dataSet.push(data.data[3][1]);
								dataSet.push(data.data[3][2]);
							}
							if(mybotCompleteMatches==2){
								dataSet.push(data.data[3][0]);
								dataSet.push(data.data[3][1]);
								dataSet.push(data.data[3][0]);
							}
							if(mybotCompleteMatches==1){
								dataSet.push(data.data[3][0]);
								dataSet.push(data.data[3][0]);
								dataSet.push(data.data[3][0]);
							}
							mybotDataSet1 = dataSet;
							setIntervalX(function () {
								putData(mybotDataSet1, mybotIsMatchLive);
							}, 1000, 9);
							// putData(mybotDataSet1, mybotIsMatchLive);
						}
					}
				}
			}
			if(data.error === true){
				console.log("error occured with data");
				console.log(data);
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

		if(mybotSequenceIndex%2 == 0) {
			setIntervalX(function () {
				putData(mybotDataSet1, mybotIsMatchLive);
			}, 1000, 9);
			// putData(mybotDataSet1, mybotIsMatchLive);
		}
		else {
			if(mybotDataSet2 != undefined) {
				setIntervalX(function () {
					putData(mybotDataSet2, mybotIsMatchLive);
				}, 1000, 9);
				// putData(mybotDataSet2, mybotIsMatchLive);
			}
			else {
				setIntervalX(function () {
					putData(mybotDataSet1, mybotIsMatchLive);
				}, 1000, 9);
				// putData(mybotDataSet1, mybotIsMatchLive);
			}
		}
	}
	else{
		if(mybotSequenceIndex%2 == 0) {
			setIntervalX(function () {
				putData(mybotDataSet1, mybotIsMatchLive);
			}, 1000, 9);
			// putData(mybotDataSet1, mybotIsMatchLive);
		}
		else {
			if(mybotDataSet2 != undefined) {
				setIntervalX(function () {
					putData(mybotDataSet2, mybotIsMatchLive);
				}, 1000, 9);
				// putData(mybotDataSet2, mybotIsMatchLive);
			}
			else {
				setIntervalX(function () {
					putData(mybotDataSet1, mybotIsMatchLive);
				}, 1000, 9);
				// putData(mybotDataSet1, mybotIsMatchLive);
			}
		}

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

function capitalizeFLetter(input) {
  var string = input;
  x = string.charAt(0).toUpperCase() + string.slice(1);
	 return x;
}
function mybotloadNewsbotWidget(){
  el = document.getElementsByTagName('mybot');
  el[0].parentNode.removeChild(el[0]);

  var s = document.createElement('script');
  s.src = mybotloadNemybotloadNewsbotWidgetwsbotScript;
  s.type = "text/javascript";
  s.async = true;
  document.getElementsByTagName('head')[0].appendChild(s);
}
function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}window.ready(function(){var html='<mybot> <div id="gabywa"></div> <div class="ub-roller-wrapper" id="ub-roller-wrapper"> <div class="ub-close" id="ub-close"> </div> <div class="ub-banner-ad" id="ub-banner-ad">  </div> <div class="ub-roller" id="ub-roller"> <div class="ub-roller1 ub-ur"> </div> <div class="ub-roller2 ub-ur"> </div> <div class="ub-roller3 ub-ur"> </div> <div class="ub-roller4 ub-ur"> </div> </div> <div class="ub-sticky-ad" id="adsmall"> </div> </div></mybot>';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='';var rule_common='@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);@import url(https://fonts.googleapis.com/css?family=Helvetica);mybot .ub-roller-wrapper{width:150px;height:150px;bottom:60px;left:5px;margin:auto;position:fixed;z-index:2147483640}mybot .ub-ur{cursor:pointer;pointer-events:all;position:absolute;width:150px;height:150px}mybot .ub-roller{animation-name:ub_roller;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:20s;transform-style:preserve-3d;-webkit-perspective:30000;-moz-perspective:30000;-ms-perspective:30000;perspective:30000;-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,.25);-moz-box-shadow:0 0 20px 0 rgba(0,0,0,.25);box-shadow:0 0 20px 0 rgba(0,0,0,.75);transform-origin:75px 0 0}mybot .ub-roller1{backface-visibility:hidden;transform:translateZ(75px);background-size:150px}mybot .ub-roller2{backface-visibility:hidden;transform:rotateY(90deg) translateZ(75px);background-size:150px}mybot .ub-roller3{backface-visibility:hidden;transform:rotateY(180deg) translateZ(75px);background-size:150px}mybot .ub-roller4{backface-visibility:hidden;transform:rotateY(270deg) translateZ(75px);background-size:150px}.ub-roller:hover{-webkit-animation-play-state:paused;animation-play-state:paused}@keyframes ub_roller{0%{transform:rotateY(0deg)}18%{transform:rotateY(0deg)}25%{transform:rotateY(-90deg)}42%{transform:rotateY(-90deg)}50%{transform:rotateY(-180deg)}68%{transform:rotateY(-180deg)}75%{transform:rotateY(-270deg)}93%{transform:rotateY(-270deg)}100%{transform:rotateY(-360deg)}}mybot .ub-banner-ad{pointer-events:all;cursor:pointer;color:#fff;line-height:11px;border-radius:5px;font-size:10px;width:130px;position:absolute;top:-15px;text-align:center;right:18px;background-repeat:no-repeat;background-position:center;background-color:#17479e}mybot .ub-close{pointer-events:all;cursor:pointer;width:16px;position:absolute;top:-24px;right:-10px}mybot .ub-sticky-ad{position:fixed;bottom:0}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule+rule_common;}else{css.appendChild(document.createTextNode(rule));css.appendChild(document.createTextNode(rule_common));}document.getElementsByTagName('head')[0].appendChild(css);callOnDocumentReadyCube();});