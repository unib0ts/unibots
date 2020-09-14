mybotLoadAdDefault = 0;
mybotAuthEnabled = 0;
mybotCloseEnabled = 0;
mybotClickCountEnabled = 1;
mybotClickLocation = '';
mybotScoreAPI = 'get_schedule';
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


mybotGACode = '';
// mybotadSmall = '<div id="div-ub-1"></div>';
mybotadSmall ='';
mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';
mybotClosevar = '<img src="https://scoretest.warw.in/img/close.svg">';

function mybotCustomFunction() {
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

		getScoresw();
		// runSequence();

		// setIntervalX(function () {
		// 	runSequence();
		// }, 1000, 9);

		// setInterval(function() {
		// 	runSequence();
		// }, 24000);

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

	// if(isLive == 0) {
		// document.getElementById('liveBlock').style.display = 'block';
		// document.getElementById('upcomingCompletedBlock').style.display = 'none';
		for(var i=0;i<=55;i++){
			var ubschnum = document.querySelectorAll(".ub-sch-num");
		  for (var j = 0; j < ubschnum.length; j++) {
		    ubschnum[j].setAttribute("id", "match_num"+j);
		  }

			var ubschsummary = document.querySelectorAll(".ub-sch-summary");
			for (var j = 0; j < ubschsummary.length; j++) {
				ubschsummary[j].setAttribute("id", "ub-sch-summary"+j);
			}

			mybotswData = mybotDataSet.data[0].data;
			mybotswData	=JSON.parse(mybotswData);

			document.getElementById('match_num0').innerHTML = mybotswData.name;
			document.getElementById('ub-sch-team11').innerHTML = mybotswData.awayTeam.name;
			document.getElementById('ub-sch-team12').innerHTML = mybotswData.homeTeam.name;
			document.getElementById('ub-sch-summary0').innerHTML = mybotswData.matchSummaryText;

			mybotswData = mybotDataSet.data[1].data;
			mybotswData	=JSON.parse(mybotswData);
			document.getElementById('match_num1').innerHTML = mybotswData.name;
			document.getElementById('ub-sch-team21').innerHTML = mybotswData.homeTeam.name;
			document.getElementById('ub-sch-team22').innerHTML = mybotswData.awayTeam.name;
			document.getElementById('ub-sch-summary1').innerHTML = mybotswData.matchSummaryText;

			mybotswData = mybotDataSet.data[2].data;
			mybotswData	=JSON.parse(mybotswData);
			document.getElementById('match_num2').innerHTML = mybotswData.name;
			document.getElementById('ub-sch-team31').innerHTML = mybotswData.homeTeam.name;
			document.getElementById('ub-sch-team32').innerHTML = mybotswData.awayTeam.name;
			document.getElementById('ub-sch-summary2').innerHTML = mybotswData.matchSummaryText;

			mybotswData = mybotDataSet.data[3].data;
			mybotswData	=JSON.parse(mybotswData);
			document.getElementById('match_num3').innerHTML = mybotswData.name;
			document.getElementById('ub-sch-team41').innerHTML = mybotswData.homeTeam.name;
			document.getElementById('ub-sch-team42').innerHTML = mybotswData.awayTeam.name;
			document.getElementById('ub-sch-summary3').innerHTML = mybotswData.matchSummaryText;

			mybotswData = mybotDataSet.data[4].data;
			mybotswData	=JSON.parse(mybotswData);
			document.getElementById('match_num4').innerHTML = mybotswData.name;
			document.getElementById('ub-sch-team51').innerHTML = mybotswData.homeTeam.name;
			document.getElementById('ub-sch-team52').innerHTML = mybotswData.awayTeam.name;
			document.getElementById('ub-sch-summary4').innerHTML = mybotswData.matchSummaryText;


			mybotswData = mybotDataSet.data[5].data;
			mybotswData	=JSON.parse(mybotswData);
			document.getElementById('match_num5').innerHTML = mybotswData.name;
			document.getElementById('ub-sch-team61').innerHTML = mybotswData.homeTeam.name;
			document.getElementById('ub-sch-team62').innerHTML = mybotswData.awayTeam.name;
			document.getElementById('ub-sch-summary5').innerHTML = mybotswData.matchSummaryText;

			mybotswData = mybotDataSet.data[6].data;
			mybotswData	=JSON.parse(mybotswData);
			document.getElementById('match_num6').innerHTML = mybotswData.name;
			document.getElementById('ub-sch-team71').innerHTML = mybotswData.homeTeam.name;
			document.getElementById('ub-sch-team72').innerHTML = mybotswData.awayTeam.name;
			document.getElementById('ub-sch-summary6').innerHTML = mybotswData.matchSummaryText;


			mybotswData = mybotDataSet.data[7].data;
			mybotswData	=JSON.parse(mybotswData);
			document.getElementById('match_num7').innerHTML = mybotswData.name;
			document.getElementById('ub-sch-team81').innerHTML = mybotswData.homeTeam.name;
			document.getElementById('ub-sch-team82').innerHTML = mybotswData.awayTeam.name;
			document.getElementById('ub-sch-summary7').innerHTML = mybotswData.matchSummaryText;

			// document.getElementById('botCurrentOvers').innerHTML = botCurrentOverStats;
			// document.getElementById('botCurrentTeam').innerHTML = currentTeam;
		}

		// botCurrentScoreStats = currentScore;
		// botCurrentOverStats = currentOvers + " Overs";
		// currentTeam = mybotDataSet.currentTeam;
		// currentBatsmen = mybotDataSet.currentBatsmen;
		// currentBatsmenBalls = mybotDataSet.currentBatsmenBalls;
		// currentBatsmenRuns = mybotDataSet.currentBatsmenRuns;
		//
		// if(currentBatsmen[0]==undefined){
		// 	batsmanOne ='';
		// 	batsmanBallsOne ='';
		// 	batsmanScoreOne ='';
		// 	botBatsmanOneStats = '';
		// }
		// else{
		// 	batsmanOne = currentBatsmen[0];
		// 	temp = batsmanOne.split(' ');
		// 	batsmanOne = temp[0][0]+' ' +temp[1];
		// 	batsmanBallsOne = currentBatsmenBalls[0];
		// 	batsmanScoreOne = currentBatsmenRuns[0];
		// 	botBatsmanOneStats=batsmanScoreOne+" ("+batsmanBallsOne+")";
		// }
		// if(currentBatsmen[1]==undefined){
		// 	batsmanTwo ='';
		// 	batsmanBallsTwo ='';
		// 	batsmanScoreTwo ='';
		// 	botBatsmanTwoStats = '';
		// }
		// else{
		// 	batsmanTwo = currentBatsmen[1];
		// 	temp = batsmanTwo.split(' ');
		// 	batsmanTwo = temp[0][0]+' ' +temp[1];
		// 	batsmanBallsTwo = currentBatsmenBalls[1];
		// 	batsmanScoreTwo = currentBatsmenRuns[1];
		// 	botBatsmanTwoStats=batsmanScoreTwo+" ("+batsmanBallsTwo+")";
		// }
		//
		// botBowlerOvers = mybotDataSet.currentBowlerOvers;
		// botBowlerMaiden = mybotDataSet.currentBowlerMaidens;
		// botBowlerRuns = mybotDataSet.currentBowlerRuns;
		// botBowlerWickets = mybotDataSet.currentBowlerWickets;
		// if(botBowlerOvers=='none'){
		// 	botBowlerStats='';
		// }
		// else{
		// 	botBowlerStats = botBowlerOvers+"-"+botBowlerMaiden+"-"+botBowlerRuns+"-"+botBowlerWickets;
		// }
		//
		// if(mybotDataSet.currentBowler=='none' || mybotDataSet.currentBowler == undefined){
		// 	botbowlerName = '';
		// 	botBowlerStats='';
		// }
		// else{
		// 	botbowlerName = mybotDataSet.currentBowler;
		// 	temp = botbowlerName.split(' ');
		// 	botbowlerName = temp[0][0]+' ' +temp[1];
		// }
		//
		// if(mybotDataSet.summaryText=='none' || mybotDataSet.summaryText == undefined){
		// 	botSummary = '';
		// }
		// else{
		// 	botSummary = mybotDataSet.summaryText;
		// }
		// if(currentBatsmen[0]==undefined && currentBatsmen[0]==undefined && (botSummary!=undefined && botSummary!='none')){
		// 	batsmanOne=botSummary;
		// }
		// botTarget = mybotDataSet.target;
		// if(botTarget==0){
		// 	botTarget='';
		// }
		// else{
		// 	botTarget = 'Target - '+botTarget;
		// }
		//
		// if(currentScore=='' && currentOvers=='' && botBowlerStats=='' && botBatsmanOneStats==''){
		// 	botCurrentScoreStats = 'Score will be updated soon!';
		// 	botBowlerStats = 'Score will be updated soon!';
		// 	botBatsmanOneStats = 'Score will be updated soon!';
		// }
//
//
//         //Remove before Live
//         // botSummary = 'New Zealand needs 56 runs to win this match';
//         // botCurrentScoreStats = '61/1';
//         // botCurrentOverStats = '7.5 Overs';
//         // currentTeam = 'New Zealand'
//         // batsmanOne = 'K WILLIAMSON -';
//         // batsmanTwo = 'D GRANDEHOMME -';
//         // botBatsmanOneStats = '30*';
//         // botBatsmanTwoStats = '31*';
//         // botbowlerName = 'M SHAMI';
//         // botBowlerStats = '3-0-19-1';
//
//         //
//
		// document.getElementById('botCupLogo1').src=homeTeam;
		// document.getElementById('botCupLogo2').src=awayTeam;
    // document.getElementById('botCurrentScore').innerHTML = botCurrentScoreStats;
    // document.getElementById('botCurrentOvers').innerHTML = botCurrentOverStats;
		// document.getElementById('botCurrentTeam').innerHTML = currentTeam;
		// // document.getElementById('botTarget').innerHTML = botTarget;
		// document.getElementById('botBatsmanOne').innerHTML = batsmanOne;
		// document.getElementById('botBatsmanTwo').innerHTML = batsmanTwo;
		// document.getElementById('botBatsmanOneScore').innerHTML = botBatsmanOneStats;
		// document.getElementById('botBatsmanTwoScore').innerHTML = botBatsmanTwoStats;
		// document.getElementById('botBowler').innerHTML = botbowlerName;
		// document.getElementById('botBowlerOvers').innerHTML = botBowlerStats;
    // document.getElementById('botSummary').innerHTML = botSummary;

		// scoreTop = document.getElementById('botScoreWrapperInsideTop');
		// var scoreTopFont = window.getComputedStyle(scoreTop, null).getPropertyValue('font-size');
		// var scoreTopFontSize = parseFloat(scoreTopFont);
		// while(scoreTop.clientHeight>botInsideFlag || scoreTop.clientWidth>botInsideFlag){
		// 	topFlag = 0;
		// 	if(scoreTop.clientHeight>400 || scoreTop.clientWidth>400){
		// 		scoreTop.style.fontSize = '11px';
		// 		topFlag = 1;
		// 		setTimeout(function () {
		// 			scoreTop.style.fontSize = (scoreTopFontSize - 1) + 'px';
		// 			scoreTopFontSize -= 1;
		// 		}, 1000);
		// 	}
		// 	else{
		// 		scoreTop.style.fontSize = (scoreTopFontSize - 1) + 'px';
		// 		scoreTopFontSize -= 1;
		// 	}
		// 	if(scoreTopFontSize<5 || topFlag == 1){
		// 		break;
		// 	}
		// }
		// scoreBottom = document.getElementById('botScoreWrapperInsideBottom');
		// var scoreBottomFont = window.getComputedStyle(scoreBottom, null).getPropertyValue('font-size');
		// var scoreBottomFontSize = parseFloat(scoreBottomFont);
		// while(scoreBottom.clientHeight>botInsideFlag || scoreBottom.clientWidth>botInsideFlag){
		// 	bottomFlag = 0;
		// 	if(scoreBottom.clientHeight>400 || scoreBottom.clientWidth>400){
		// 		scoreBottom.style.fontSize = '11px';
		// 		bottomFlag = 1;
		// 		setTimeout(function () {
		// 			scoreBottom.style.fontSize = (scoreBottomFontSize - 1) + 'px';
		// 			scoreBottomFontSize -= 1;
		// 		}, 1000);
		// 	}
		// 	else{
		// 		scoreBottom.style.fontSize = (scoreBottomFontSize - 1) + 'px';
		// 		scoreBottomFontSize -= 1;
		// 	}
		// 	if(scoreBottomFontSize<5 || bottomFlag == 1){
		// 		break;
		// 	}
		// }
		// scoreBack = document.getElementById('botScoreWrapperInsideBack');
		// var scoreBackFont = window.getComputedStyle(scoreBack, null).getPropertyValue('font-size');
		// var scoreBackFontSize = parseFloat(scoreBackFont);
		// while(scoreBack.clientHeight>botInsideFlag || scoreBack.clientWidth>botInsideFlag){
		// 	backFlag = 0;
		// 	if(scoreBack.clientHeight>400 || scoreBack.clientWidth>400){
		// 		scoreBack.style.fontSize = '11px';
		// 		backFlag = 1;
		// 		setTimeout(function () {
		// 			scoreBack.style.fontSize = (scoreBackFontSize - 1) + 'px';
		// 			scoreBackFontSize -= 1;
		// 		}, 1000);
		// 	}
		// 	else{
		// 		scoreBack.style.fontSize = (scoreBackFontSize - 1) + 'px';
		// 		scoreBackFontSize -= 1;
		// 	}
		// 	if(scoreBackFontSize<5 || backFlag == 1){
		// 		break;
		// 	}
		// }
	}
	// if (isLive == 0) {
	// 	document.getElementById('liveBlock').style.display = 'none';
	// 	document.getElementById('upcomingCompletedBlock').style.display = 'block';
	// 	for (var i = 1; i <= 3; i++) {
	// 		let homeTeam = mybotDataSet[i - 1].homeTeamLogoUrl;
	// 		let awayTeam = mybotDataSet[i - 1].awayTeamLogoUrl;
	//
	// 		//document.getElementById('homeTeamLogo' + i).src = homeTeam;
	// 		//document.getElementById('awayTeamLogo' + i).src = awayTeam;
	// 		let teamNames = mybotDataSet[i - 1].title;
	// 		teamNames = teamNames.split(" ");
	//
	// 		// document.getElementById('teamName' + i + "1").innerHTML = teamNames[0];
	// 		// document.getElementById('teamName' + i + "2").innerHTML = teamNames[2];
	//
	// 		if (mybotDataSet[i - 1].matchStatus == 'UPCOMING') {
	// 			let date = new Date(mybotDataSet[i - 1].startDateTime);
	// 			let time = formatTime(date);
	// 			date = formatDate(date);
	// 			if(document.getElementById('summaryText' + i +'UCB') !== null) {
	// 				document.getElementById('titleText' + i +'UCB').innerHTML = "Upcoming Match";
	// 				if(i === 1) {
	// 					document.getElementById('summaryText' + i +'UCB').innerHTML = date + "<br>" + time;
	// 				}
	// 				else {
	// 					document.getElementById('summaryText' + i +'UCB').innerHTML = date;
	// 				}
	// 			}
	// 		} else if (mybotDataSet[i - 1].matchStatus == 'COMPLETED') {
	// 			if(document.getElementById('summaryText' + i +'UCB') !== null) {
	// 				document.getElementById('titleText' + i +'UCB').innerHTML = "Completed Match";
	// 				document.getElementById('summaryText' + i +'UCB').innerHTML = mybotDataSet[i - 1].summaryText;
	// 			}
	// 		} else if (mybotDataSet[i - 1].matchStatus == 'INPROGRESS') {
	// 			if(document.getElementById('summaryText' + i +'UCB') !== null) {
	// 				document.getElementById('titleText' + i +'UCB').innerHTML = "In-progress Match";
	// 				document.getElementById('summaryText' + i +'UCB').innerHTML = mybotDataSet[i - 1].summaryText;
	// 			}
	// 		}
	// 	}
	//
	// 	/*scoreTop = document.getElementById('botScoreWrapperInsideTopUCB');
	// 	var scoreTopFont = window.getComputedStyle(scoreTop, null).getPropertyValue('font-size');
	// 	var scoreTopFontSize = parseFloat(scoreTopFont);
	// 	while (scoreTop.clientHeight > botInsideFlag || scoreTop.clientWidth > botInsideFlag) {
	// 		topFlag = 0;
	// 		if (scoreTop.clientHeight > 400 || scoreTop.clientWidth > 400) {
	// 			scoreTop.style.fontSize = '11px';
	// 			topFlag = 1;
	// 			setTimeout(function () {
	// 				scoreTop.style.fontSize = (scoreTopFontSize - 1) + 'px';
	// 				scoreTopFontSize -= 1;
	// 			}, 1000);
	// 		} else {
	// 			scoreTop.style.fontSize = (scoreTopFontSize - 1) + 'px';
	// 			scoreTopFontSize -= 1;
	// 		}
	// 		if (scoreTopFontSize < 5 || topFlag == 1) {
	// 			break;
	// 		}
	// 	}
	// 	scoreBottom = document.getElementById('botScoreWrapperInsideBottomUCB');
	// 	var scoreBottomFont = window.getComputedStyle(scoreBottom, null).getPropertyValue('font-size');
	// 	var scoreBottomFontSize = parseFloat(scoreBottomFont);
	// 	while (scoreBottom.clientHeight > botInsideFlag || scoreBottom.clientWidth > botInsideFlag) {
	// 		bottomFlag = 0;
	// 		if (scoreBottom.clientHeight > 400 || scoreBottom.clientWidth > 400) {
	// 			scoreBottom.style.fontSize = '11px';
	// 			bottomFlag = 1;
	// 			setTimeout(function () {
	// 				scoreBottom.style.fontSize = (scoreBottomFontSize - 1) + 'px';
	// 				scoreBottomFontSize -= 1;
	// 			}, 1000);
	// 		} else {
	// 			scoreBottom.style.fontSize = (scoreBottomFontSize - 1) + 'px';
	// 			scoreBottomFontSize -= 1;
	// 		}
	// 		if (scoreBottomFontSize < 5 || bottomFlag == 1) {
	// 			break;
	// 		}
	// 	}
	// 	scoreBack = document.getElementById('botScoreWrapperInsideBackUCB');
	// 	var scoreBackFont = window.getComputedStyle(scoreBack, null).getPropertyValue('font-size');
	// 	var scoreBackFontSize = parseFloat(scoreBackFont);
	// 	while (scoreBack.clientHeight > botInsideFlag || scoreBack.clientWidth > botInsideFlag) {
	// 		backFlag = 0;
	// 		if (scoreBack.clientHeight > 400 || scoreBack.clientWidth > 400) {
	// 			scoreBack.style.fontSize = '11px';
	// 			backFlag = 1;
	// 			setTimeout(function () {
	// 				scoreBack.style.fontSize = (scoreBackFontSize - 1) + 'px';
	// 				scoreBackFontSize -= 1;
	// 			}, 1000);
	// 		} else {
	// 			scoreBack.style.fontSize = (scoreBackFontSize - 1) + 'px';
	// 			scoreBackFontSize -= 1;
	// 		}
	// 		if (scoreBackFontSize < 5 || backFlag == 1) {
	// 			break;
	// 		}
	// 	}*/
	// }
// }

function getScoresw() {
	var request = new XMLHttpRequest();
	url = 'https://scoretest.warw.in/'+mybotScoreAPI;
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

// function runSequence() {
// 	t = new Date();
// 	utcHours = t.getUTCHours();
// 	utcMinutes = t.getUTCMinutes();
// 	istHour = utcHours+5;
// 	if(utcMinutes>29){
// 		istHour += 1;
// 	}
// 	if((istHour > mybotStartHour) && (istHour < mybotEndHour)){
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

function mobileTopPlacement(){
  if(mobileCheck()){
		x = document.getElementById('mybot-adcover');
		if(typeof mobileTopPixel !== 'undefined'){
			x.style.top = mobileTopPixel+'px';
		}
		else {
				x.style.top = '0px';
		}
		z = document.getElementById('mybotstage');
		z.style.top = '60px';
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

function mybotloadNewsbotWidget(){
  el = document.getElementsByTagName('mybot');
  el[0].parentNode.removeChild(el[0]);

  var s = document.createElement('script');
  s.src = mybotloadNewsbotScript;
  s.type = "text/javascript";
  s.async = true;
  document.getElementsByTagName('head')[0].appendChild(s);
}
function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}window.ready(function(){var html='<mybot> <div id="gabywa"></div> <div class="profile_div" id="dragItem"> <div class="ub-schedule"> <div class="ub-sch-head"> <img class="ub-head-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAABO9JREFUeNrNWltsFFUY/mf20u52uy2oQFGJRCqJRgMmXlowVCMipKQQTFFIvcUb0Ri1gb602LUSbkp8gJhqomitgtFgQCM8FR4o0FQtWowVIghCE61t6S7bbtvd5fu3h72U3bY7c2a6f/J1tun0zPfNOf/tnFVIgoXD4RtxKQEeBOYCc4ApgEvc4gN6gNNAB3AMOKwoSrfeZys6SDPBJ4EKQTzdsUJAM9AAfA0xvaYIAPECXCqBl+PesF7rAz4EdkDIv4YIAHErLm8Ab0sknkzIRmAXhAxLEwDyvKb3AveSOdbCyxMizo53o2UC5Ffg8iNwG5lnNwNP19bW/ubxeE5rFgDyL+HyGeAg842fuRoizkPEybQFCPL1gEqTZ/zsMog4l0qEJQX5leLNTyb5eD8thYifki0nNQn5QkHeQpljHAG/ALfZYwrADTZOKkAuZZ5x4twjwnnKGXgLmEeZa/cDryYVAGUcumrSGe3E2UFauKWLev1hM0W8A67Tks3AeiAnnZHm3WojFS626QevmQLcYqXEBIhq8sV0R8qyKrT1CTftaemnE38NmiliHTjnx8/AGsCpZaSi2+1Ufp+DNnzjpcHhsJmzUB4voELPaDWlLvhBiHY2+c2chQhniyiP39czUrZNoRl5Fnr3gI9K78mmqTmm5L9bkNx28pMeljHayvnZWE42qvq2Dz5lWplRwj+KZI24eZWb2i4MUf0RPx04OUDBkOEiiqyih5Vis6ZaqBhOXff9SFj1lIXohYecRgqYywIKZY3WeTlER/4MRH/fdtBHy+7Oopn5sbLq7/+D9PpXl+n3S8P06J1ZtKPcTQ675ta8UBU1hhQryFPp2eLYG78SCFPNd4lJrna/l1rPDZF/MEz72wZod7OuyDVFld3fVj7mohtcsSh0sD1Ah9pjs+IdSPTwvn5dHu+SHu/cDoWqHk98J9WYBZ4NtjcX55ArS4n6TEWRvmbPKjad8mSKeOoBB31+zE/tF0c2Fi71BiP+4CnLpQVz7NRacxOd7w7SHdMtZLMoeh7lU8WOmdwADU51K9wJWx6fHvXTr/8MRT7nZit010yrXvJsPSzgjCGF+2wblSG5XTPOCVWolyTnhjMsoMOoIF2NGskZFyJ5BngmJFoHCzhulIAC1EevPZLYYrAvsE9IsuMsoMnIVPlKiTMSbeJzQ/U+KQ0Qh7XDqqIoF/HhF6MEcNOzcXniHsGhU4FIftD79sG961oeaDByFpainFhYaL8uN/gCupJYQ3xD0wj0G9qJIwdY49Jmp8gNWuM/b7FEBYg9+U8MLRtnWOmZ4sTK9EK3ZmeuB+ee0bsS24yehcolrki3lu9U6bkFTtq1Nk/r2492kAmpEO1lNS51lNm2Hm//vWT7QmzbgfYMJv8z8MHovjJqUBYQ2xVXMpA8Hz+tHn30dN0OtMfj6UK3z/XRKtJxiinZ2NvXgHzz6D8k3UKHiFMQwV6+NEMErAP5xmR/SHkGABEtEMEH0UsmcSaCgvxHqW4Y8xBDiPgDH5cBdpPJe8WyaRzrpnFPYcRy2oePi4BpJpFvAxaD/NHxbpzQMZJwbM7UAbERZjOIOEc/Puh+HuT/m8g/aPmqwSxcNvBDSN7xK3c5H3MeEtXxhE3Plz14Oa2lkV3i+RqHaRVV5ZdcGmsZQEp0EcdTvEmcztdtmkC6U++zrwLt+I2D9aiqVQAAAABJRU5ErkJggg=="> <div class="ub-head-txt">Tournament Schedule</div> </div> <table class="ub-sch-table" id="ub-sch-table"> <tr> <td> <div class="ub-sch-num"> Match 1 </div> <div class="ub-sch-date"> Sat, 19/09 </div> <div> <div class="ub-sch-team1 ub-sch-team" id="ub-sch-team11"> Mumbai </div> <div class="ub-sch-score1 ub-sch-score" id="ub-sch-score1"> 170/7 </div> </div> <div> <div class="ub-sch-team2 ub-sch-team" id="ub-sch-team12"> Chennai </div> <div class="ub-sch-score2 ub-sch-score ub-active" id="ub-sch-score2"> 40/1 </div> </div> <div class="ub-sch-summary"> Need 131 runs to win </div> </td> <td> <div class="ub-sch-num"> Match 1 </div> <div class="ub-sch-date"> Sat, 19/09 </div> <div> <div class="ub-sch-team1 ub-sch-team" id="ub-sch-team21"> Mumbai </div> <div class="ub-sch-score1 ub-sch-score"> 170/7 </div> </div> <div> <div class="ub-sch-team2 ub-sch-team" id="ub-sch-team22"> Chennai </div> <div class="ub-sch-score2 ub-sch-score ub-active"> 40/1 </div> </div> <div class="ub-sch-summary"> Need 131 runs to win </div> </td> </tr> <tr> <td> <div class="ub-sch-num"> Match 1 </div> <div class="ub-sch-date"> Sat, 19/09 </div> <div> <div class="ub-sch-team1 ub-sch-team" id="ub-sch-team31"> Mumbai </div> <div class="ub-sch-score1 ub-sch-score"> 170/7 </div> </div> <div> <div class="ub-sch-team2 ub-sch-team" id="ub-sch-team32"> Chennai </div> <div class="ub-sch-score2 ub-sch-score ub-active"> 40/1 </div> </div> <div class="ub-sch-summary"> Need 131 runs to win </div> </td> <td> <div class="ub-sch-num"> Match 1 </div> <div class="ub-sch-date"> Sat, 19/09 </div> <div> <div class="ub-sch-team1 ub-sch-team" id="ub-sch-team41"> Mumbai </div> <div class="ub-sch-score1 ub-sch-score"> 170/7 </div> </div> <div> <div class="ub-sch-team2 ub-sch-team" id="ub-sch-team42"> Chennai </div> <div class="ub-sch-score2 ub-sch-score ub-active"> 40/1 </div> </div> <div class="ub-sch-summary"> Need 131 runs to win </div> </td> </tr> <tr> <td> <div class="ub-sch-num"> Match 1 </div> <div class="ub-sch-date"> Sat, 19/09 </div> <div> <div class="ub-sch-team1 ub-sch-team" id="ub-sch-team51"> Mumbai </div> <div class="ub-sch-score1 ub-sch-score"> 170/7 </div> </div> <div> <div class="ub-sch-team2 ub-sch-team" id="ub-sch-team52"> Chennai </div> <div class="ub-sch-score2 ub-sch-score ub-active"> 40/1 </div> </div> <div class="ub-sch-summary"> Need 131 runs to win </div> </td> <td> <div class="ub-sch-num"> Match 1 </div> <div class="ub-sch-date"> Sat, 19/09 </div> <div> <div class="ub-sch-team1 ub-sch-team" id="ub-sch-team61"> Mumbai </div> <div class="ub-sch-score1 ub-sch-score"> 170/7 </div> </div> <div> <div class="ub-sch-team2 ub-sch-team" id="ub-sch-team62"> Chennai </div> <div class="ub-sch-score2 ub-sch-score ub-active"> 40/1 </div> </div> <div class="ub-sch-summary"> Need 131 runs to win </div> </td> </tr> <tr> <td> <div class="ub-sch-num"> Match 1 </div> <div class="ub-sch-date"> Sat, 19/09 </div> <div> <div class="ub-sch-team1 ub-sch-team" id="ub-sch-team71"> Mumbai </div> <div class="ub-sch-score1 ub-sch-score"> 170/7 </div> </div> <div> <div class="ub-sch-team2 ub-sch-team" id="ub-sch-team72"> Chennai </div> <div class="ub-sch-score2 ub-sch-score ub-active"> 40/1 </div> </div> <div class="ub-sch-summary"> Need 131 runs to win </div> </td> <td> <div class="ub-sch-num"> Match 1 </div> <div class="ub-sch-date"> Sat, 19/09 </div> <div> <div class="ub-sch-team1 ub-sch-team" id="ub-sch-team81"> Mumbai </div> <div class="ub-sch-score1 ub-sch-score"> 170/7 </div> </div> <div> <div class="ub-sch-team2 ub-sch-team" id="ub-sch-team82"> Chennai </div> <div class="ub-sch-score2 ub-sch-score ub-active"> 40/1 </div> </div> <div class="ub-sch-summary"> Need 131 runs to win </div> </td> </tr> </table></div> </div></mybot>';var element=document.querySelector('#ub-schedule-wrapper');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='';var rule_common='mybot{color:#333;position:relative;z-index:2147483640;cursor:move}mybot *{-webkit-box-sizing:content-box!important;-moz-box-sizing:content-box!important;box-sizing:content-box!important}mybot img{-webkit-user-drag:none;-moz-user-drag:none;-khtml-user-drag:none}mybot .row{margin-right:0}mybot a,mybot a:hover,mybot a:focus{text-decoration:none;outline:none}mybot .ub-schedule{width:100%;max-width:700px;height:100%;max-height:340px;background:#fff;border:1px #00000060 solid;font-family:arial,sans-serif}mybot .ub-sch-head{height:50px;background:#223577}mybot .ub-head-img{height:32px;width:32px;vertical-align:middle;display:inline-block;padding:0 10px}mybot .ub-head-txt{line-height:50px;color:#fff;font-size:20px;display:inline-block}mybot .ub-sch-table{width:100%;border-spacing:0;overflow-y:auto;height:85%;max-height:290px;display:block}mybot .ub-sch-table td{height:172px;border:1px #00000060 solid;vertical-align:unset;width:50%}mybot .ub-sch-num{padding:10px;color:grey;display:inline-block}mybot .ub-sch-date{padding:10px;display:inline-block;float:right;font-weight:600}mybot .ub-sch-team{padding:10px;font-size:18px;display:inline-block}mybot .ub-sch-score{padding:10px;display:inline-block;float:right}mybot .ub-sch-summary{padding:10px;font-weight:600}mybot .ub-active{font-weight:600}mybot .ub-schedule tbody,.ub-schedule tr{display:block}mybot .ub-schedule td{width:350px}mybot .ub-sch-table::-webkit-scrollbar{width:6px}mybot .ub-sch-table::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);-webkit-border-radius:10px;border-radius:10px}mybot .ub-sch-table::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:#223577;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.5)}@media only screen and (min-width:768px){mybot .ub-schedule{width:100%;max-width:700px;height:100%;max-height:340px;background:#fff;border:1px #00000060 solid;font-family:arial,sans-serif}}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule+rule_common;}else{css.appendChild(document.createTextNode(rule));css.appendChild(document.createTextNode(rule_common));}document.getElementsByTagName('head')[0].appendChild(css);callOnDocumentReady();});