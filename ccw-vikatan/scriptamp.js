mybotMultipleIconsDynamicEnabled = 1;
var mybotMultipleIconsEnabled=0;
mybotMultiIconName = 't20worldcup/';
mybotMultiIconType = '.png';
mybotMultiIconNumber = 16;
mybotMultiIconTimestamps = [
	[1648301400, 1648318800 ], [1648373400, 1648405200], [1648474200, 1648491600], [1648560600, 1648578000], [1648647000, 1648664400], [1648733400, 1648750800], [1648819800, 1648837200], [1648891800, 1648923600], [1648992600, 1649010000], [1649079000, 1649096400], [1649165400, 1649182800], [1649251800, 1649269200], [1649338200, 1649355600], [1649424600, 1649442000], [1649496600, 1649528400], [1649597400, 1649614800], [1649683800, 1649701200], [1649770200, 1649787600], [1649856600, 1649874000], [1649943000, 1649960400], [1650029400, 1650046800], [1650101400, 1650133200], [1650187800, 1650219600], [1650288600, 1650306000], [1650375000, 1650392400], [1650461400, 1650478800], [1650547800, 1650565200], [1650634200, 1650651600], [1650706200, 1650738000], [1650807000, 1650824400], [1650893400, 1650910800], [1650979800, 1650997200], [1651066200, 1651083600], [1651152600, 1651170000], [1651239000, 1651256400], [1651311000, 1651342800], [1651397400, 1651429200], [1651498200, 1651515600], [1651584600, 1651602000], [1651671000, 1651688400], [1651757400, 1651774800], [1651843800, 1651861200], [1651915800, 1651947600], [1652002200, 1652034000], [1652103000, 1652120400], [1652189400, 1652206800], [1652275800, 1652293200], [1652362200, 1652379600], [1652448600, 1652466000], [1652535000, 1652552400], [1652607000, 1652638800], [1652707800, 1652725200], [1652794200, 1652811600], [1652880600, 1652898000], [1652967000, 1652984400], [1653053400, 1653070800], [1653139800, 1653157200], [1653226200, 1653243600]
];

mybotbowlWidgetNlvHrs= 1;
mybotLoadAdDefault = 0;
mybotAuthEnabled = 0;
mybotCloseEnabled = 0;
mybotClickCountEnabled = 1;
mybotClickLocation = '';
mybotScoreAPI = 'get_score';
mybotStartHour = 12;
mybotEndHour = 6;
mybotampEnabled = 1;
botPosition ='right';
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


mybotGACode = '';
mybotadSmall = '';
mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';
mybotClosevar = '<img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots/main/close.svg">';

function mybotCustomFunction() {
  document.getElementById('adSmall').innerHTML=mybotadSmall;
  document.getElementById('gabywa').innerHTML=mybotgabywa;
  document.getElementById('mybotClose').innerHTML=mybotClosevar;
  document.getElementById('dragItem').classList.add('mybotAmpDragItem');
  var mybotAmpstage = document.querySelectorAll('#mybotstage');
 for(var mybotAmpStage of mybotAmpstage)
  mybotAmpStage.classList.add('mybotAmpStage');
	document.querySelector('#ub-cmpgn-ad').classList.add('ub-cmpgn-adAMP');

  document.getElementById('mybot-adcover').style.display ='none';
	
	var mybotwrapredirecturl =document.querySelectorAll('.mybot-container');
 		for(var mybotwrapredirectUrl of mybotwrapredirecturl)
 		 mybotwrapredirectUrl.addEventListener('click', function() {
 			if(mybotDragClick == false){
 				window.open('https://4183.play.quizzop.com/?id=4183?utm_source=unibots&utm_medium=cricketwidget', '_blank');
 			}
 			setTimeout(function(){
 			 mybotDragClick = false;
 			}, 200);
 	 });
}

function loadAdCustom() {
  return false;
}

// =============================================================================
// Change the code from here
// Any function which you want to call on document.ready, put in this function
var AUTH_TOKEN = "";
var mybotDragClick = false;
var mybotLivescore = false;
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
	"Sri Lanka": "SL",
	"Bangladesh": "BAN",
	"Unknown": "TBD"
};
function callOnDocumentReadybwl() {
	// if(typeof mybotBlockedPagesFlag !== 'undefined' && mybotBlockedPagesFlag ==1){
	// 	urlToCheck = window.location.host+window.location.pathname;
	//
	// 	var request = new XMLHttpRequest();
	// 	url = 'https://api.unibots.in/block?client='+mybotBlockedClientName+'&page='+urlToCheck;
	//
	// 	request.open('GET', url, true);
	// 	request.onload = function() {
	// 		if (request.status >= 200 && request.status < 400) {
	// 			var data = request.responseText;
	// 			data = JSON.parse(data);
	// 			// data = data[mybotBlockedClientName];
	// 			if(data) {
	// 				// data = data.urls;
	// 				if(data.status == true){
	// 					document.getElementById('dragItem').innerHTML = '';
	// 					return false;
	// 				}
	// 				else{
	// 					if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
	// 					   if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
	// 					    	mybotStart();
	// 					   }
	// 					   else {
	// 					     mybotloadNewsbotWidget();
	// 					   }
	// 					}
	// 					else {
	// 						if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
	// 							 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
	// 									mybotStart();
	// 							 }
	// 							 else {
	// 								 mybotloadNewsbotWidget();
	// 							 }
	// 						}
	// 						else {
	// 								mybotStart();
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 		else {
	// 			console.log('Block Check Request failed');
	// 			if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
	// 				 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
	// 						mybotStart();
	// 				 }
	// 				 else {
	// 					 mybotloadNewsbotWidget();
	// 				 }
	// 			}
	// 			else {
	// 					mybotStart();
	// 			}
	// 		}
	// 	};
	// 	request.onerror = function() {
	// 		console.log('Request failed');
	// 		if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
	// 			 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
	// 					mybotStart();
	// 			 }
	// 			 else {
	// 				 mybotloadNewsbotWidget();
	// 			 }
	// 		}
	// 		else {
	// 				mybotStart();
	// 		}
	// 	};
	// 	request.send();
	// }
	// else{
	// 	if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
	// 		 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
	// 				mybotStart();
	// 		 }
	// 		 else {
	// 			 mybotloadNewsbotWidget();
	// 		 }
	// 	}
	// 	else {
				mybotStart();
	// 	}
	// }
}

function mybotStart(){
		if((typeof mybotMultipleIconsDynamicEnabled !== 'undefined') && (mybotMultipleIconsDynamicEnabled == 1)){
			currentTS = Date.now() / 1000 | 0;
			for(i=0;i<mybotMultiIconTimestamps.length;i++){
				if((mybotMultiIconTimestamps[i][0]<= currentTS) && (currentTS<=mybotMultiIconTimestamps[i][1])){
					if (mobileCheck() && (document.getElementById('dragItem').style.display =='none')) {
						 clearInterval(function(){
						 rotateValues();
					 }, 21050);
					}
					else {
						rotateValues();
						setInterval(function(){
						 rotateValues();
					 }, 21050);
					}
          mybotBowl();
					getScore(0);
					// runSequence();
					setInterval(function() {
						runSequence();
					}, 2000);
					mybotMultipleIconsEnabled=0;
					break;
				}
				else{
					mybotMultipleIconsEnabled=1;
				}
			}
		}
		if(mybotMultipleIconsEnabled){
			if ((typeof mybotbowlWidgetNlvHrs !== 'undefined') && (mybotbowlWidgetNlvHrs == 1)) {
				mybotBowl();
				rotateValues();
				setInterval(function(){
				 rotateValues();
			 }, 21050);
				getScore(0);
				// runSequence();
			}
			else {
				if ((typeof mybotCovidWidgetNlvHrs !== 'undefined') && (mybotCovidWidgetNlvHrs == 1)) {
						mybotloadNewsbotWidget();
				}
				else {
					mybotBowl();
					// botPic();
				}
			}
		}
}

function mybotBowl() {
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
			var mybotClose = document.querySelectorAll('#mybotClose');
			for(var mybotClosebtn of mybotClose)
			mybotClosebtn.classList.add('closeBotFrontTop');
			// document.getElementById('mybotCloseUCB').classList.add('closeBotFrontTop');
		}
	}
	if((typeof mybotIsBottomScrollStartDisapperEnabled !== 'undefined') && (mybotIsBottomScrollStartDisapperEnabled == 1)){
		mybotScrollStart();
		window.addEventListener('scroll',function(ev){mybotScrollStart()});
	}
	if((typeof mybotIsBottomScrollStartDisapperEnabledAD !== 'undefined') && (mybotIsBottomScrollStartDisapperEnabledAD == 1)){
		mybotScrollStartAd();
		window.addEventListener('scroll',function(ev){mybotScrollStartAd()});
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
				document.querySelector('#dragItem').style.display = 'none';
				mybotCloseTriggeredFlag = 1;
				if(typeof mybotampEnabled !== 'undefined' && mybotampEnabled ==1){
					mybotampClose();
				}
			})
		});
	 }

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
	var month_names =[
		"Jan","Feb","Mar",
		"Apr","May","Jun",
		"Jul","Aug","Sep",
		"Oct","Nov","Dec"];

   var day = date.substring(6, 8);
	 var month_index = date.substring(4, 6);
	 var year = date.substring(2, 4);
	// var day = date.getDate();
	// var month_index = date.getMonth();
	// var year = date.getFullYear();

	return "" + day + "-" + month_names[parseInt(month_index)-1] + "-" + year;
}

function formatTime(date) {
	return  date.toTimeString().split(' ')[0];
}

function putData(mybotDataSet, isLive) {
	if(isLive == 1) {
		if(typeof mybotShortScore !== 'undefined' && mybotShortScore ==1){

		}else {
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
			document.getElementById('botCurrentScore').innerHTML = botCurrentScoreStats;
			document.getElementById('botCurrentOvers').innerHTML = botCurrentOverStats;
			document.getElementById('botCurrentTeam').innerHTML = currentTeam;
			if (currentTeam == "SUN" || currentTeam == "CHE") {
         document.getElementById('dragItem').style.color = "#000";
			}else if (currentTeam == "ROY" || currentTeam == "GUJ") {
        document.getElementById('dragItem').style.color = "#F9E698";
			}else if (currentTeam == "LUC") {
          document.getElementById('dragItem').style.color = "#E64600";
			}else {
				document.getElementById('dragItem').style.color = "#fff";
			}
			document.getElementById('mybotbowl-imagelv').src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/iplcc_2022/"+currentTeam+".png";
			document.getElementById('botBowler').innerHTML = botbowlerName;
			document.getElementById('botBowlerOvers').innerHTML = botBowlerStats;
			document.getElementById('liveBlock').style.display = 'block';
		}
	}
	if (isLive == 0) {;
			document.getElementById('liveBlock').style.display = 'none';
			document.getElementById('summaryText4UCB').innerHTML = 'Score Board';
			currentTeam = ub_currentteam(mybotDataSet[1].title);
			if (currentTeam == "SUN" || currentTeam == "CHE") {
				document.getElementById('titleText1UCB').style.color = "#000";
				document.getElementById('summaryText1UCB').style.color = "#000";
			}else if (currentTeam == "ROY" || currentTeam == "GUJ") {
				document.getElementById('titleText1UCB').style.color = "#F9E698";
				document.getElementById('summaryText1UCB').style.color = "#F9E698";
			}else if (currentTeam == "LUC") {
				document.getElementById('titleText1UCB').style.color = "#E64600";
				document.getElementById('summaryText1UCB').style.color = "#E64600";
			}else {
				document.getElementById('titleText1UCB').style.color = "#fff";
				document.getElementById('summaryText1UCB').style.color = "#fff";
			}
			document.getElementById('mybotbowl-image4').src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/iplcc_2022/"+currentTeam+".png";
    	if(typeof mybotShortScore !== 'undefined' && mybotShortScore ==1){
				document.getElementById('upcomingCompletedBlock').style.display = 'block';
				for (var j = 1; j <= 3; j++) {
					botSummary = mybotDataSet[0].description;
					mybotTeam1 = mybotDataSet[j-1]['team-1'];
					mybotTeam2 = mybotDataSet[j-1]['team-2'];
							 for(var i=0;i<Object.keys(teamsBowl).length-1;i++){
									 var teamToCheck = Object.keys(teamsBowl)[i];
									 var re = new RegExp(teamToCheck, 'i');
									 botSummary = botSummary.replace(re, teamsBowl[teamToCheck]);
									 mybotTeam1 = mybotTeam1.replace(re, teamsBowl[teamToCheck]);
									 mybotTeam2 = mybotTeam2.replace(re, teamsBowl[teamToCheck]);

							 }
							 let date = new Date(mybotDataSet[j - 1].dateTimeGMT);
		 					let time = formatTime(date);
		 					date = formatDate(date);
						if (mybotDataSet[j - 1].matchStarted == false) {
		 					if(document.getElementById('summaryText' + j +'UCB') !== null) {
		 						document.getElementById('titleText' + j +'UCB').innerHTML = "Upcoming Match<br>"+mybotTeam1 +" vs "+ mybotTeam2;
		 						document.getElementById('summaryText' + j +'UCB').innerHTML = date.toString() + "<br>" + time.toString();
		 					}
						}
						else if (mybotDataSet[j - 1].matchStarted == true) {
							if(document.getElementById('summaryText' + j +'UCB') !== null) {
								document.getElementById('titleText' + j +'UCB').innerHTML = "Completed Match<br>"+mybotTeam1 +" vs "+ mybotTeam2;
								document.getElementById('summaryText' + j +'UCB').innerHTML = botSummary;
							}
						}
		  	}
		  }
			else {
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

					if(document.getElementById('summaryText' + j +'UCB') !== null) {
						if(typeof mybotSponserAd !== 'undefined' && mybotSponserAd == 1){
							document.getElementById('titleText2UCB').innerHTML = "Upcoming Match<br>"+mybotDataSet[1].title;
							document.getElementById('summaryText2UCB').innerHTML = date + "<br>" + time;
						}
						else {
							currentTeam = ub_currentteam(mybotDataSet[j - 1].title);
							if (currentTeam == "SUN" || currentTeam == "CHE") {
								document.getElementById('titleText' + j +'UCB').style.color = "#000";
							  document.getElementById('summaryText' + j +'UCB').style.color = "#000";
							}else if (currentTeam == "ROY" || currentTeam == "GUJ") {
								document.getElementById('titleText' + j +'UCB').style.color = "#F9E698";
							  document.getElementById('summaryText' + j +'UCB').style.color = "#F9E698";
							}else if (currentTeam == "LUC") {
								document.getElementById('titleText' + j +'UCB').style.color = "#E64600";
							  document.getElementById('summaryText' + j +'UCB').style.color = "#E64600";
							}else {
								document.getElementById('titleText' + j +'UCB').style.color = "#fff";
							  document.getElementById('summaryText' + j +'UCB').style.color = "#fff";
							}
							document.getElementById('mybotbowl-image'+ j).src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/iplcc_2022/"+currentTeam+".png";
							document.getElementById('titleText' + j +'UCB').innerHTML = mybotDataSet[j - 1].title;
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
							currentTeam = ub_currentteam(mybotDataSet[j - 1].title);
							if (currentTeam == "SUN" || currentTeam == "CHE") {
								document.getElementById('titleText' + j +'UCB').style.color = "#000";
							  document.getElementById('summaryText' + j +'UCB').style.color = "#000";
							}else if (currentTeam == "ROY" || currentTeam == "GUJ") {
								document.getElementById('titleText' + j +'UCB').style.color = "#F9E698";
							  document.getElementById('summaryText' + j +'UCB').style.color = "#F9E698";
							}else if (currentTeam == "LUC") {
								document.getElementById('titleText' + j +'UCB').style.color = "#E64600";
							  document.getElementById('summaryText' + j +'UCB').style.color = "#E64600";
							}else {
								document.getElementById('titleText' + j +'UCB').style.color = "#fff";
							  document.getElementById('summaryText' + j +'UCB').style.color = "#fff";
							}
							document.getElementById('mybotbowl-image'+ j).src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/iplcc_2022/"+currentTeam+".png";
							document.getElementById('titleText' + j +'UCB').innerHTML = mybotDataSet[j - 1].title;
							document.getElementById('summaryText' + j +'UCB').innerHTML = botSummary;
					  }
					}
				}
				else if (mybotDataSet[j - 1].matchStatus == 'INPROGRESS') {
					document.getElementById('upcomingCompletedBlock').style.display = 'block';
					if(document.getElementById('summaryText' + j +'UCB') !== null) {
						if (document.getElementById('titleText' + i +'UCB') !== null) {
							currentTeam = ub_currentteam(mybotDataSet[j - 1].title);
							if (currentTeam == "SUN" || currentTeam == "CHE") {
								document.getElementById('titleText' + j +'UCB').style.color = "#000";
								document.getElementById('summaryText' + j +'UCB').style.color = "#000";
							}else if (currentTeam == "ROY" || currentTeam == "GUJ") {
								document.getElementById('titleText' + j +'UCB').style.color = "#F9E698";
								document.getElementById('summaryText' + j +'UCB').style.color = "#F9E698";
							}else if (currentTeam == "LUC") {
								document.getElementById('titleText' + j +'UCB').style.color = "#E64600";
								document.getElementById('summaryText' + j +'UCB').style.color = "#E64600";
							}else {
								document.getElementById('titleText' + j +'UCB').style.color = "#fff";
								document.getElementById('summaryText' + j +'UCB').style.color = "#fff";
							}
							document.getElementById('mybotbowl-image'+ j).src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/iplcc_2022/"+currentTeam+".png";
							document.getElementById('titleText' + i +'UCB').innerHTML = "In-progress Match<br>"+mybotDataSet[j - 1].title;
							document.getElementById('summaryText' + i +'UCB').innerHTML = botSummary;
						}
						else {
							currentTeam = ub_currentteam(mybotDataSet[j - 1].title);
							if (currentTeam == "SUN" || currentTeam == "CHE") {
								document.getElementById('titleText' + j +'UCB').style.color = "#000";
							  document.getElementById('summaryText' + j +'UCB').style.color = "#000";
							}else if (currentTeam == "ROY" || currentTeam == "GUJ") {
								document.getElementById('titleText' + j +'UCB').style.color = "#F9E698";
							  document.getElementById('summaryText' + j +'UCB').style.color = "#F9E698";
							}else if (currentTeam == "LUC") {
								document.getElementById('titleText' + j +'UCB').style.color = "#E64600";
							  document.getElementById('summaryText' + j +'UCB').style.color = "#E64600";
							}else {
								document.getElementById('titleText' + j +'UCB').style.color = "#fff";
							  document.getElementById('summaryText' + j +'UCB').style.color = "#fff";
							}
							document.getElementById('mybotbowl-image'+ j).src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/iplcc_2022/"+currentTeam+".png";
							document.getElementById('titleText' + 1 +'UCB').innerHTML = mybotDataSet[j - 1].title;
							document.getElementById('summaryText' + 1 +'UCB').innerHTML = botSummary;
						}
					}
				}
			}
		  }
	}
}


function getScore(flag) {
	var request = new XMLHttpRequest();
	if(typeof mybotShortScore !== 'undefined' && mybotShortScore ==1){
     url = 'https://cricket.unibots.in/'+ mybotScoreAPI;
	}else {
			url = 'https://cricket.unibots.in/'+'get_score';
	}
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
							// setIntervalX(function () {
							// 	putData(mybotDataSet1, mybotIsMatchLive);
							// }, 1000, 9);
							putData(mybotDataSet1, mybotIsMatchLive);
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
							// setIntervalX(function () {
							// 	putData(mybotDataSet1, mybotIsMatchLive);
							// }, 1000, 9);
							putData(mybotDataSet1, mybotIsMatchLive);
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
							// setIntervalX(function () {
							// 	putData(mybotDataSet1, mybotIsMatchLive);
							// }, 1000, 9);
							putData(mybotDataSet1, mybotIsMatchLive);
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
							// setIntervalX(function () {
							// 	putData(mybotDataSet1, mybotIsMatchLive);
							// }, 1000, 9);
							putData(mybotDataSet1, mybotIsMatchLive);
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

function mobileTopPlacement(){
  if(mobileCheck()){
		x = document.getElementById('mybot-adcover');
		if(typeof mobileTopPixel !== 'undefined'){
			x.style.top = mobileTopPixel+'px';
		}
		else {
				x.style.top = '0px';
		}
		mybotstage = document.querySelectorAll('#mybotstage');
		for(var z of mybotstage)
		z.style.top = '35px';
		for(var btm of mybotstage)
		btm.style.bottom = 'unset';
		// adt = document.getElementById('mybot-ad-tag');
		// adt.style.display = 'none';
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

function mybotScrollStartAd(){
	if(mobileCheck()){
		if (((window.scrollY) <= ((screen.height/3) - mybotScrollStartPixelHeight)) && (mybotScrollStartFlag == 0)) {
        document.getElementById('mybot-adcover').style.display = 'none';
        mybotScrollStartFlag = 1;
    }
    else if(mybotScrollStartFlag == 1){
      if ((window.scrollY) >= ((screen.height/3) - mybotScrollStartPixelHeight)) {
				 if(mybotCloseTriggeredFlag){
          document.getElementById('mybot-adcover').style.display = 'none';
          mybotScrollStartFlag = 0;
      }
			else {
				document.getElementById('mybot-adcover').style.display = 'block';
				mybotScrollStartFlag = 0;
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
	var mybotstage = document.querySelectorAll('#mybotstage');
	var adCoverElement = document.getElementById("mybot-adcover");
	// var adtagElement = document.getElementById("mybot-ad-tag");
	var closeElement = document.getElementById("mybotClose");
	var ub_cmpgn_ad = document.getElementById("ub-cmpgn-ad");

	// if (mybotadSmall =='') {
  //  document.getElementById('mybot-ad-tag').style.display = 'none';
  // }
	if (botPosition=='right' || typeof botPosition==='undefined' ){
		for(var mybotStage of mybotstage)
		mybotStage.style.right ='0';
		mybotStage.style.left ='unset';
		var mybotClose = document.querySelectorAll('#mybotClose');
		for(var mybotClosebtn of mybotClose)
		mybotClosebtn.style.right ='5px';
		botElement.classList.add("profile_div");
		adCoverElement.classList.add("mybot-adcover-right");
	}
	else if (botPosition=='left'){
		for(var mybotStage of mybotstage)
		mybotStage.style.left ='0';
		mybotStage.style.right ='unset';
		var mybotClose = document.querySelectorAll('#mybotClose');
		for(var mybotClosebtn of mybotClose)
		mybotClosebtn.style.left ='5px';
		// adtagElement.classList.add("mybot-ad-tag-left");
		// stageElement.classList.add("mybotstage-left");
		botElement.classList.add("profile_div-left");
		adCoverElement.classList.add("mybot-adcover-left");
		closeElement.style.left = '5px';
		ub_cmpgn_ad.style.left ='10px';
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

function rotateValues(){
  [].forEach.call(document.querySelectorAll('.set-1'),      function(el) {
      el.style.display = 'block';
			el.classList.add('scale-down-center');
      setTimeout(()=>{
        setTimeout(()=>{
          el.style.display = 'none';
        },250);
        el.classList.remove('scale-down-center');
        el.classList.add('scale-up-center');
      }, 5000);
		});

	setTimeout(()=>{
	[].forEach.call(document.querySelectorAll('.set-2'),      function(el) {
		el.style.display = 'block';
				el.classList.add('scale-down-center');
		setTimeout(()=>{
			setTimeout(()=>{
			el.style.display = 'none';
			},250);
			el.classList.remove('scale-down-center');
			el.classList.add('scale-up-center');
		}, 5000);
			});
	}, 5300);

	setTimeout(()=>{
	[].forEach.call(document.querySelectorAll('.set-3'),      function(el) {
		el.style.display = 'block';
				el.classList.add('scale-down-center');
		setTimeout(()=>{
			setTimeout(()=>{
			el.style.display = 'none';
			},250);
			el.classList.remove('scale-down-center');
			el.classList.add('scale-up-center');

		}, 5000);
			});
	}, 10600);

	setTimeout(()=>{
	[].forEach.call(document.querySelectorAll('.set-4'),      function(el) {
		el.style.display = 'block';
				el.classList.add('scale-down-center');
		setTimeout(()=>{
			setTimeout(()=>{
			el.style.display = 'none';
		},100);
			el.classList.remove('scale-down-center');
			el.classList.add('scale-up-center');

		}, 5000);
			});
	}, 15900);
}

function ub_currentteam(currentTeam) {
	currentTeam =  currentTeam.split(" ");
	currentTeamnew = [];
  currentTeamnew.push(currentTeam[0],currentTeam[2]);
  randomNum = Math.floor(Math.random()*(2));
	return currentTeam[0];
}
function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}window.ready(function(){var html='<mybot> <div id="gabywa"></div> <div class="profile_div" id="dragItem"> <div id="ub-cmpgn-ad" href="https://unibots.in/?utm_source=unibots&amp;utm_medium=cubeadwidget" class="ub-cmpgn-ad">Powered by Unibots</div> <div class="row" id="liveBlock" style="display: none;"> <div class="mybot-container" id="mybotstage"> <div class="mybot-cylinder"> <img class="mybotbowl-image" id="mybotbowl-imagelv"> <div class="mybotinside-cylinder"> <div class="mybotimage-container"> <div class="mybotwraplv"> <div class="mybotcube mybotcubelv"> <div class="mybotfacelv mybotfront set-1"> <div class="mybotTeams" id="mybotTeams"></div> <div class="mybotTime" id="mybotTime"></div> </div> <div class="mybotfacelv mybotback set-3"> <div class="mybotBatsmanScore"> <div class="mybotBatsmanOne"> <span id="botBatsmanOne" class="mybotBatsmanOneName"></span><br> <span id="botBatsmanOneScore" class="mybotBatsmanOneScore"></span> </div> <div class="mybotBatsmanTwo"> <span id="botBatsmanTwo" class="mybotBatsmanTwoName"></span><br> <span id="botBatsmanTwoScore" class="mybotBatsmanTwoScore"></span> </div> </div> </div>  <div class="mybotfacelv mybotleft set-2"> <div class="mybotScoreLive"> <div class="mybotScoreLiveTeam"> <span id="botCurrentTeam" class="mybotText"></span> </div> <div class="mybotScoreLiveScore"> <span id="botCurrentScore" class="mybotText"></span> </div> <div class="mybotScoreLiveOvers"> <span id="botCurrentOvers" class="mybotText"></span> </div> </div> </div> <div class="mybotfacelv mybotright set-4" id="mybotrightLv"> <div class="mybotBowlerStats"> <div class="mybotBowlerOne"> <div id="botBowler" class="mybotBowlerOneName"></div> <div id="botBowlerOvers" class="mybotBowlerOneStats"></div> </div> </div> </div> </div> </div> <div class="mybotBowlWrapper"> <div class="mybotBowlText">  </div> </div> </div> </div> </div> </div> </div> <div class="row" id="upcomingCompletedBlock" style="display: none;"> <div class="mybot-container" id="mybotstage"> <div class="mybot-cylinder"> <img class="mybotbowl-image set-1" id ="mybotbowl-image1"> <img class="mybotbowl-image set-2" id ="mybotbowl-image2"> <img class="mybotbowl-image set-3" id ="mybotbowl-image3"> <img class="mybotbowl-image set-4" id ="mybotbowl-image4"> <div class="mybotinside-cylinder"> <div class="mybotimage-container"> <div class="mybotwraplv"> <div class="mybotcubelv"> <div class="mybotfacelv set-1"><span id="summaryText1UCB"></span></div> <div class="mybotfacelv set-2"><span id="summaryText2UCB"></span></div> <div class="mybotfacelv set-3"><span id="summaryText3UCB"></span></div> <div class="mybotfacelv set-4" id="mybotright"><span id="summaryText4UCB"></span></div> </div> </div> <div class="mybotBowlWrapper"> <div class="mybotBowlText"> <p class="mybotbowl-text set-1" id="titleText1UCB"></p> <p class="mybotbowl-text set-2" id="titleText2UCB"></p> <p class="mybotbowl-text set-3" id="titleText3UCB"></p> <p class="mybotbowl-text set-4" id="titleText4UCB"></p> </div> </div> </div> </div> </div> </div> </div> <div class="mybotclose" id="mybotClose"> </div> <div class="row"> <div class="mybot-adcover" id="mybot-adcover">  <div class="col-hgt-ad" id="adSmall"> </div> </div> </div> </div></mybot>';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='';var rule_common='@import url(https://fonts.googleapis.com/css2?family=Alata&display=swap);@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800|Satisfy);mybot{font-family:"Alata",sans-serif;position:sticky;z-index:2147483647;cursor:move}mybot *{-webkit-box-sizing:content-box!important;-moz-box-sizing:content-box!important;box-sizing:content-box!important}mybot img{-webkit-user-drag:none;-moz-user-drag:none;-khtml-user-drag:none}mybot .row{margin-right:0}mybot a,mybot a:hover,mybot a:focus{text-decoration:none;outline:none}mybot .profile_div{position:fixed;bottom:0;right:0;width:326px;height:200px;cursor:default;z-index:2147483647;font-weight:600;pointer-events:none}mybot .profile_div-left{left:0}mybot .mybotclose{position:absolute;margin-top:-20px;display:none;width:18px;cursor:pointer;right:5px;pointer-events:all;filter:invert(12%) sepia(96%) saturate(7213%) hue-rotate(4deg) brightness(100%) contrast(117%)}mybot .mybot-container{font-size:12px;font-family:"Alata",sans-serif;position:absolute;bottom:70px;cursor:pointer;pointer-events:all}mybot .mybot-cylinder{height:150px}.mybotimage-container{position:absolute;bottom:-5px;margin-left:25px}.mybotBowlWrapper{display:flex}.mybotbowl-image{height:150px;width:150px;display:flex;align-items:center;justify-content:center;text-align:center}.mybotBowlText{display:flex;justify-content:center;align-items:center;height:50px;width:100px;position:absolute;text-align:center;margin-left:5px;bottom:0}.mybotimage-container .mybotbowl-text{position:absolute;z-index:1;margin:0;font-weight:600;text-align:center;font-size:10px}.mybotimage-container .mybotcontainer-text{position:relative;z-index:2;margin:0;text-align:center;font-size:14px}.mybotimage-container .mybotct-1{font-size:18px;font-weight:800}.mybotimage-container .mybotct-2{font-size:16px;font-weight:800}.mybotimage-container .mybotct-3{font-size:16px;font-weight:800}.mybotimage-container .mybotimage-text{background:#66BA1E;z-index:2;color:white!important;border-radius:10px;border:5px solid #5B080E;padding:2px}.mybotslide-bck-center{width:100px;height:100px;background:green;display:block;position:absolute;bottom:20px}.mybotslide-fwd-center{width:100px;height:100px;background:green;display:block;position:absolute;bottom:20px}.mybotscale-up-center{-webkit-animation:mybotscale-up-center 0.4s cubic-bezier(.39,.575,.565,1) both;animation:mybotscale-up-center 0.4s cubic-bezier(.39,.575,.565,1) both}.mybotscale-down-center{-webkit-animation:mybotscale-down-center 0.4s cubic-bezier(.39,.575,.565,1) both;animation:mybotscale-down-center 0.4s cubic-bezier(.39,.575,.565,1) both}@-webkit-keyframes mybotscale-up-center{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes mybotscale-up-center{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes mybotscale-down-center{0%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes mybotscale-down-center{0%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}.set-2,.set-3,.set-4{display:none}.mybotwrap{position:relative;height:50px;top:-65px;display:flex;justify-content:center;text-align:center;margin:0 auto}.mybotwraplv{position:relative;height:50px;bottom:14px;display:flex;line-height:1.2;justify-content:center;text-align:center;margin:0 auto}.mybotcube{position:relative;width:100px;transform-style:preserve-3d;-webkit-perspective:30000;-moz-perspective:30000;-ms-perspective:30000;perspective:30000}.mybotcubelv{width:110px!important}.mybotcube .mybotfaceLv{position:absolute;width:160px;height:50px;border-radius:4px}.mybotfaceLv{position:absolute;margin:0;width:100px;text-align:center;font-size:14px;line-height:1.1}.mybotcube .mybotface{position:absolute;width:80px;height:50px;color:#000;border-radius:4px}.mybotface p{top:50%;left:50%;transform:translate(-50%,-50%);position:absolute;margin:0;width:80px;text-align:center;font-size:10px;line-height:1.1}mybot .mybotback{font-size:11px}@keyframes mybotspin{from{transform:rotateY(0deg)}20%{transform:rotateY(0deg)}25%{transform:rotateY(90deg)}45%{transform:rotateY(90deg)}50%{transform:rotateY(180deg)}70%{transform:rotateY(180deg)}75%{transform:rotateY(270deg)}95%{transform:rotateY(270deg)}to{transform:rotateY(360deg)}}mybot .col-hgt-ad{height:50px;float:right;position:absolute;bottom:3px;left:3px;pointer-events:all}mybot .mybot-adcover{width:326px;height:56px;z-index:2147483640;position:fixed;bottom:0;right:0;cursor:pointer}mybot .mybot-adcover-left{left:0}mybot .mybot-ad-tag{position:absolute;top:-10px;right:0;font-size:9px;z-index:1;color:#fff;cursor:pointer;background:#000;width:16px;text-align:center}mybot .mybot-ad-tag-left{left:0}mybot .closeBotFrontTop{margin-top:180px!important}mybot #summaryText1UCB,mybot #summaryText2UCB,mybot #summaryText3UCB,mybot #summaryText4UCB{font-size:10px;display:flex;line-height:1.5;height:100%;align-items:center;text-align:center;justify-content:center}mybot #mybotfaceimg{width:55px;height:120px;padding-left:17px;pointer-events:all;cursor:pointer}@media screen and (max-width:635px){mybot .mybot-adcover{width:326px;height:56px;z-index:2147483640;bottom:0;right:0;display:flex;pointer-events:auto;align-items:center;left:50%;transform:translateX(-50%);position:fixed}mybot .mybot-ad-tag{display:none}}mybot .ub-brand-text{cursor:pointer;text-align:center;pointer-events:all;font-size:10px;color:#fff;padding:1px;background:transparent radial-gradient(closest-side at 111% -27%,#4B494A 0%,#292B32 41%,#131823 77%,#0C121E 100%) 0% 0% no-repeat padding-box}mybot .ub-cmpgn-ad{color:rgb(255,255,255);line-height:11px;border-radius:5px;font-size:10px;width:130px;position:absolute;bottom:58px;text-align:center;right:10px;background-repeat:no-repeat;background-position:center;background-color:rgb(23,71,158)}mybot .mybotAmpDragItem{width:150px!important;height:150px!important}mybot .mybotAmpStage{bottom:12px!important}mybot .ub-cmpgn-adAMP{bottom:0px!important}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule+rule_common;}else{css.appendChild(document.createTextNode(rule));css.appendChild(document.createTextNode(rule_common));}document.getElementsByTagName('head')[0].appendChild(css);callOnDocumentReadybwl();});