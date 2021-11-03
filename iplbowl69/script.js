mybotMultipleIconsDynamicEnabled = 1;
var mybotMultipleIconsEnabled=1;
mybotMultiIconName = 'IPLCaricatures/';
mybotMultiIconType = '.png';
mybotMultiIconNumber = 18;
mybotMultiIconTimestamps = [
	[1634463000,1634494800],[1634549400,1634581200],[1634635800,1634667600],[1634722200,1634754000],[1634808600,1634840400],
	[1634895000,1634926800],[1634981400,1635013200],[1635067800,1635099600],[1635168600,1635186000],[1635240600,1635272400],
	[1635327000,1635358800],[1635427800,1635445200],[1635499800,1635531600],[1635586200,1635618000],[1635672600,1635704400],
	[1635773400,1635790800],[1635845400,1635877200],[1635931800,1635963600],[1636018200,1636050000],[1636104600,1636136400],
	[1636191000,1636222800],[1636277400,1636309200],[1636378200,1636395600],[1636551000,1636568400],[1636637400,1636654800],
	[1636896600,1636914000]
];
// mybotbowlWidgetNlvHrs=1;
mybotCovidWidgetNlvHrs =1;
mybotloadNewsbotScript = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/cubeScriptTupaki.min.js';

mybotLoadAdDefault = 0;
mybotAuthEnabled = 0;
mybotCloseEnabled = 1;
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
var mybotIsBottomScrollStartDisapperEnabled = 0;
mybotMobileTopPlacement = 0;
mybotIsScrollupDisapperEnabled =0;
// mobileTopPixel = 60;

mybotGACode = 'G-G4C0209YRW';

// mybotadSmallT = '<div id="div-gpt-ad-1617905562342-0"></div>';
mybotadSmall = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:inline-block;width:300px;height:100px" data-ad-client="ca-pub-6376205116838079" data-ad-slot="7535605780"></ins> <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
mybotadTarget = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6376205116838079" crossorigin="anonymous"></script><ins class="adsbygoogle"style="display:inline-block;width:125px;height:125px" data-ad-client="ca-pub-6376205116838079" data-ad-slot="2344527279"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';

mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';
mybotClosevar = '<img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots/main/close.svg">';

function mybotCustomFunction() {
	document.getElementById('gabywa').innerHTML=mybotgabywa;
  document.getElementById('adSmall').innerHTML=mybotadSmall;
	loadAd('adSmall');

	z1 = document.createElement('div');
	 z1.id = 'ub_ads';
	 z1.className = 'ub_ads';
	 x1 = document.querySelector('mybot');
	 x1.appendChild(z1);

	 document.getElementById('ub_ads').innerHTML=mybotadTarget;
	 loadAd('ub_ads');
	 var mybotClose = document.querySelectorAll('#mybotClose');
	 for(var mybotClosebtn of mybotClose)
	 mybotClosebtn.innerHTML =mybotClosevar;

	 setTimeout(function () {
			 document.getElementById('adSmall').innerHTML='<div id="div-gpt-ad-1617905562342-0"></div>';
				loadAdCustomUb();
	 }, 45000);

	 document.getElementById("ub_ads").style.display = "block";
   document.getElementById("dragItem").style.display = "none";

	 setInterval(function () {
      if (document.getElementById("dragItem").style.display == "none") {
				document.getElementById("ub_ads").style.display = "none";
				document.getElementById("dragItem").style.display = "block";
      }else {
				document.getElementById("ub_ads").style.display = "block";
				document.getElementById("dragItem").style.display = "none";
      }
	 }, 13000);

	// var mybotwrapredirecturl =document.querySelectorAll('#mybotstage');
	//  for(var mybotwrapredirectUrl of mybotwrapredirecturl)
  // mybotwrapredirectUrl.addEventListener('click', function() {
  //    if(mybotDragClick == false){
  //        window.open('https://www.crictracker.com/t20/ipl-indian-premier-league/?utm_source=unibots&utm_medium=iplwidget', '_blank');
  //    }
  //    setTimeout(function(){
  //     mybotDragClick = false;
  //    }, 200);
  // });

}

function loadAdCustom() {
	  return false;
}
function loadAdCustomUb() {
  // return false;
	// if (!mobileCheck()) {
		var s3 = document.createElement('script');
	    s3.setAttribute("data-ad-client", "ca-pub-6376205116838079");
	    s3.async = true;
	    s3.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
	    document.getElementsByTagName('head')[0].appendChild(s3);

	    var s0 = document.createElement('script');
	    s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
	    s0.type = "text/javascript";
	    document.getElementsByTagName('head')[0].appendChild(s0);

	    s0.onload=function(){
		    var s1 = document.createElement('script');
		    s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
		    s1.type = "text/javascript";
		    document.getElementsByTagName('head')[0].appendChild(s1);

		    var s2 = document.createElement('script');
		    s2.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScriptTupaki.js";
		    s2.type = "text/javascript";
		    document.getElementsByTagName('head')[0].appendChild(s2);
		}
	// }
	// else {
	// 	return;
	// }

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
		if((typeof mybotMultipleIconsDynamicEnabled !== 'undefined') && (mybotMultipleIconsDynamicEnabled == 1)){
			currentTS = Date.now() / 1000 | 0;
			for(i=0;i<mybotMultiIconTimestamps.length;i++){
				if((mybotMultiIconTimestamps[i][0]<= currentTS) && (currentTS<=mybotMultiIconTimestamps[i][1])){
					if (mobileCheck() && (document.getElementById('dragItem').style.display =='none')) {
						 clearInterval(function(){
						 rotateValues();
						}, 20000);
					}
					else {
						rotateValues();
						setInterval(function(){
						 rotateValues();
						}, 20000);
					}
          mybotBowl();
					getScore(0);
					// runSequence();
					setInterval(function() {
						runSequence();
					}, 20000);
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
				}, 20000);
				getScore(0);
				// runSequence();
			}
			else {
				if ((typeof mybotCovidWidgetNlvHrs !== 'undefined') && (mybotCovidWidgetNlvHrs == 1)) {
						mybotloadNewsbotWidget();
				}
				else {
					mybotBowl();
					botPic();
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

	var month_names =["Jan","Feb","Mar",
		"Apr","May","Jun",
		"Jul","Aug","Sep",
		"Oct","Nov","Dec"];

	 var day = date.substring(6, 8);
 	 var month_index = date.substring(4, 6);
 	 var year = date.substring(0, 4);

	 return "" + day + "-" + month_names[parseInt(month_index)-1] + "-" + year;

	// var day = date.getDate();
	// var month_index = date.getMonth();
	// var year = date.getFullYear();

	// return "" + day + "-" + month_names[month_index] + "-" + year;
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
		time = date.substring(8, 10) + ':' + date.substring(10, 12) + ':' + date.substring(12, 14);
		date = formatDate(date);

		if(currentScore=='' && currentOvers=='' && botBowlerStats=='' && botBatsmanOneStats==''){
			botCurrentScoreStats = 'Score will be updated soon!';
			botBowlerStats = 'Score will be updated soon!';
			botBatsmanOneStats = 'Score will be updated soon!';
		}

		// document.getElementById('botCupLogo1').src=homeTeam;
		// document.getElementById('botCupLogo2').src=awayTeam;
		document.getElementById('botSet1').innerHTML = mybotDataSet.title+'<br>[Live]';
		document.getElementById('mybotTeams').innerHTML = mybotDataSet.title;
		document.getElementById('mybotTime').innerHTML = date.toString() + "<br>" + time.toString();
    document.getElementById('botCurrentScore').innerHTML = botCurrentScoreStats;
    document.getElementById('botCurrentOvers').innerHTML = botCurrentOverStats;
		document.getElementById('botCurrentTeam').innerHTML = currentTeam;
		// document.getElementById('botTarget').innerHTML = botTarget;
		document.getElementById('botBatsmanOne').innerHTML = batsmanOne;
		document.getElementById('botBatsmanTwo').innerHTML = batsmanTwo;
		document.getElementById('botBatsmanOneScore').innerHTML = botBatsmanOneStats;
		document.getElementById('botBatsmanTwoScore').innerHTML = botBatsmanTwoStats;
		document.getElementById('botBowler').innerHTML = botbowlerName;
		document.getElementById('botBowlerOvers').innerHTML = botBowlerStats;
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
	if (isLive == 0) {
		document.getElementById('summaryText4UCB').innerHTML = 'Score Board';
		document.getElementById('liveBlock').style.display = 'none';
		for (var j = 1; j <= 3; j++) {
			// let homeTeam = mybotDataSet[i - 1].homeTeamLogoUrl;
			// let awayTeam = mybotDataSet[i - 1].awayTeamLogoUrl;

			// let teamNames = mybotDataSet[i - 1].title;
			// teamNames = teamNames.split(" ");
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
				time = date.substring(8, 10) + ':' + date.substring(10, 12) + ':' + date.substring(12, 14);
				date = formatDate(date);

				if(document.getElementById('summaryText' + j +'UCB') !== null) {
					document.getElementById('titleText' + j +'UCB').innerHTML = "Upcoming Match<br>"+mybotDataSet[j - 1].title;
					document.getElementById('summaryText' + j +'UCB').innerHTML = date.toString() + "<br>" + time.toString();
				}
			} else if (mybotDataSet[j - 1].matchStatus == 'COMPLETED') {
				document.getElementById('upcomingCompletedBlock').style.display = 'block';
				if(document.getElementById('summaryText' + j +'UCB') !== null) {
					document.getElementById('titleText' + j +'UCB').innerHTML = "Completed Match<br>"+mybotDataSet[j - 1].title;
					document.getElementById('summaryText' + j +'UCB').innerHTML = botSummary;
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
	var mybotstage = document.querySelectorAll('#mybotstage');
	var adCoverElement = document.getElementById("mybot-adcover");
	var adtagElement = document.getElementById("mybot-ad-tag");
	var closeElement = document.getElementById("mybotClose");
	if (mybotadSmall =='') {
   document.getElementById('mybot-ad-tag').style.display = 'none';
  }
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
		adtagElement.classList.add("mybot-ad-tag-left");
		// stageElement.classList.add("mybotstage-left");
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
	}, 5000);

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
	}, 10000);

	setTimeout(()=>{
	[].forEach.call(document.querySelectorAll('.set-4'),      function(el) {
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
	}, 15000);
}

function botPic() {
	document.getElementById('mybot-ad-tag').style.display = 'none';
	var randomNum = Math.floor(Math.random()*(mybotMultiIconNumber))+1;
	var myPix = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/"+mybotMultiIconName+randomNum+mybotMultiIconType;
	mybotFace = '<img class="" id="mybotfaceimg" src="">';
	var mybotstageImg=document.querySelectorAll('#mybotstage');
	// for(var mybotStageImg of mybotstageImg)
	document.getElementById('upcomingCompletedBlock').style.display = 'block';
  mybotstageImg[1].innerHTML=mybotFace;
	if (botPosition=='left') {
    	mybotstageImg[1].style.right ='unset';
			mybotstageImg[1].style.left ='10px';
	}
	else {
			mybotstageImg[1].style.left ='unset';
			mybotstageImg[1].style.right ='10px';
	}
	// mybotstageImg[1].style.width ='70px';
	document.getElementById("mybotfaceimg").src = myPix;
	var mybotClosebtn = document.querySelectorAll('#mybotClose');
  // mybotClosebtn[1].style.marginTop ='-20px';
	// mybotBrandtxt ='<div class="mybotBrandtxt"><span class="mybotPoweredBy">Powered By</span><span class="mybotPoweredByBrand"> Unibots</span></div>';
		var mybotBrandtxt2 = document.createElement('div');
		mybotBrandtxt2.className = 'ub-brand-text';
		mybotBrandtxt2.innerHTML='Powered By Unibots';
		mybotstageImg[1].appendChild(mybotBrandtxt2);
		mybotstageImg[1].style.background ="none";

		// document.getElementById('mybotfaceimg').addEventListener('click', function() {
		// 	 if(mybotDragClick == false){
		// 		 window.open('https://unibots.in/?utm_source=unibots&utm_medium=iplwidget', '_blank');
		// 	 }
		// 	 setTimeout(function(){
		// 		mybotDragClick = false;
		// 	 }, 200);
		// });
	// if((typeof mybotProfileheight !== 'undefined') && (mybotProfileheight== 1)){
	// 	document.getElementById('dragItem').classList.add("mybotProfileHeight");
	// 	document.getElementById('mybotstage').classList.add("mybotFaceHeight");
	// 	document.getElementById('botfaceclosed').classList.add("mybotFacecls");
	// }
}
function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}window.ready(function(){var html='<mybot> <div id="gabywa"></div> <div class="profile_div" id="dragItem"> <div class="row" id="liveBlock" style="display: none;"> <div class="mybotcw-container" id="mybotstage"> <div class="mybotwrap"> <div class="mybotcube"> <div class="mybotfaceLv mybotfront"> <div class="mybotTeams" id="mybotTeams"></div> <div class="mybotTime" id="mybotTime"></div> </div> <div class="mybotfaceLv mybotback"> <div class="mybotBatsmanScore"> <div class="mybotBatsmanOne"> <span id="botBatsmanOne" class="mybotBatsmanOneName"> BATSMAN1- </span> <span id="botBatsmanOneScore" class="mybotBatsmanOneScore"> 0* </span> </div> <div class="mybotBatsmanTwo"> <span id="botBatsmanTwo" class="mybotBatsmanTwoName"> BATSMAN2- </span> <span id="botBatsmanTwoScore" class="mybotBatsmanTwoScore"> 0* </span> </div> </div>  </div> <div class="mybotfaceLv mybottop"></div> <div class="mybotfaceLv mybotbottom"></div> <div class="mybotfaceLv mybotleft"> <div class="mybotScoreLive"> <div class="mybotScoreLiveTeam"> <span id="botCurrentTeam" class="mybotText"> Mumbai </span> </div> <div class="mybotScoreLiveScore"> <span id="botCurrentScore" class="mybotText"> 61/1 </span> </div> <div class="mybotScoreLiveOvers"> <span id="botCurrentOvers" class="mybotText"> (7.0 Overs) </span> </div> </div>  </div> <div class="mybotfaceLv mybotright"> <div class="mybotBowlerStats"> <div class="mybotBowlerOne"> <span id="botBowler" class="mybotBowlerOneName"> BOWLER </span> <span id="botBowlerOvers" class="mybotBowlerOneStats"> BOWLERSTATS </span> </div> </div>  </div> </div> </div> <div class="mybotseparator"></div> <div class="mybotbottom-text-wrapper"> <div class="mybotbottom-text set-1" id="botSet1"> <span class="mybotLeftCircle">Ind</span> <span class="mybotBar">vs</span> <span class="mybotRightCircle">Eng</span> <br>  </div> </div> </div> <div class="mybotclose" id="mybotClose"> </div> </div> <div class="row" id="upcomingCompletedBlock" style="display: none;"> <div class="mybotcw-container" id="mybotstage"> <div class="mybotwrap"> <div class="mybotcube"> <div class="mybotface mybotfront"> <span id="summaryText1UCB"></span> </div> <div class="mybotface mybotback"> <span id="summaryText3UCB"></span> </div> <div class="mybotface mybottop"></div> <div class="mybotface mybotbottom"></div> <div class="mybotface mybotleft"> <span id="summaryText2UCB"></span> </div> <div class="mybotface mybotright"> <span id="summaryText4UCB"></span> </div> </div> </div> <div class="mybotseparator"></div> <div class="mybotbottom-text-wrapper">  <p class="mybotbottom-text set-1" id="titleText1UCB"></p> <p class="mybotbottom-text set-2" id="titleText2UCB"></p> <p class="mybotbottom-text set-3" id="titleText3UCB"></p> <p class="mybotbottom-text set-4" id="titleText4UCB"></p> </div> </div> </div> <div class="mybotclose" id="mybotClose"> </div> </div> <div class="row"> <div class="mybot-adcover" id="mybot-adcover"> <div class="mybot-ad-tag" id="mybot-ad-tag">Ad</div> <div class="col-hgt-ad" id="adSmall"> </div> </div> </div> </div> </mybot>';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='.mybotright{cursor:pointer;pointer-events:all}mybot .mybotcw-container{bottom:115px!important;right:5px!important}mybot .mybotstage{bottom:115px!important;right:5px!important}mybot .mybotAmpDragItem{width:150px!important;height:140px!important}mybot .mybotAmpStage{bottom:0px!important}mybot .mybot-adcover{height:106px!important;position:fixed!important}mybot .col-hgt-ad{height:100px!important}mybot .ub-brand-text{display:none!important}';var rule_common='@import url(https://fonts.googleapis.com/css2?family=Alata&display=swap);mybot{font-family:"Alata",sans-serif;color:#333;position:sticky;z-index:2147483640;cursor:move}mybot *{-webkit-box-sizing:content-box!important;-moz-box-sizing:content-box!important;box-sizing:content-box!important}mybot img{-webkit-user-drag:none;-moz-user-drag:none;-khtml-user-drag:none}mybot .row{margin-right:0}mybot a,mybot a:hover,mybot a:focus{text-decoration:none;outline:none}mybot .profile_div{position:fixed;bottom:0;right:0;width:326px;height:180px;cursor:default;z-index:2147483647;pointer-events:none}mybot .profile_div-left{left:0}mybot .mybotclose{position:absolute;margin-top:-20px;display:none;width:20px;cursor:pointer;right:5px;pointer-events:all;filter:invert(12%) sepia(96%) saturate(7213%) hue-rotate(4deg) brightness(100%) contrast(117%)}mybot .mybotcw-container{cursor:pointer;pointer-events:all;height:120px;width:120px;background-image:url(https://cdn.jsdelivr.net/gh/unib0ts/unibots/main/cricketwidget/maskBG.svg);position:absolute;font-family:"Alata",sans-serif;bottom:60px;right:10px}mybot .mybotwrap{position:relative;width:100px;margin:8px auto 0 auto}mybot .mybotcube{position:relative;width:100px;transform-style:preserve-3d;animation:mybotspin 20s infinite linear}mybot .mybotcube .mybotfaceLv{display:flex;justify-content:center;flex-direction:column;align-items:center;font-size:12px;position:absolute;width:100px;height:50px;color:#fff;border-radius:4px;border:1px solid #F23B01;background:transparent radial-gradient(closest-side at 111% -27%,#4B494A 0%,#292B32 41%,#131823 77%,#0C121E 100%) 0% 0% no-repeat padding-box}mybot .mybotfaceLv{position:absolute;margin:0;width:100px;text-align:center;font-size:14px;line-height:1.1}mybot .mybotcube .mybotface{display:flex;justify-content:center;flex-direction:column;align-items:center;position:absolute;width:100px;height:50px;color:#fff;border-radius:4px;border:1px solid #F23B01;background:transparent radial-gradient(closest-side at 111% -27%,#4B494A 0%,#292B32 41%,#131823 77%,#0C121E 100%) 0% 0% no-repeat padding-box}mybot .mybotface p{top:50%;left:50%;transform:translate(-50%,-50%);position:absolute;margin:0;width:100px;text-align:center;font-size:14px;line-height:1.1}mybot .mybotback{transform:translateZ(-50px) rotateY(180deg)}mybot .mybotright{transform:rotateY(-270deg) translateX(50px);transform-origin:top right}mybot .mybotleft{transform:rotateY(270deg) translateX(-50px);transform-origin:center left}mybot .mybottop{transform:rotateX(-90deg) translateY(-50px);transform-origin:top center}mybot .mybotbottom{transform:rotateX(90deg) translateY(50px);transform-origin:bottom center}mybot .mybotfront{transform:translateZ(50px)}@keyframes mybotspin{from{transform:rotateY(0deg)}20%{transform:rotateY(0deg)}25%{transform:rotateY(90deg)}45%{transform:rotateY(90deg)}50%{transform:rotateY(180deg)}70%{transform:rotateY(180deg)}75%{transform:rotateY(270deg)}95%{transform:rotateY(270deg)}to{transform:rotateY(360deg)}}mybot .mybotseparator{box-sizing:border-box;border:1px solid #F23B01;width:100%;position:absolute;top:67px;background:#F23B01}mybot .mybotbottom-text-wrapper{width:100%;height:65px;position:absolute;bottom:0}mybot .mybotbottom-text{position:absolute;width:120px;line-height:1.4;text-align:center;max-height:50px;color:#fff;top:50%;left:50%;transform:translate(-50%,-50%);font-size:12px}mybot .col-hgt-ad{height:50px;float:right;position:absolute;bottom:3px;left:3px;pointer-events:all}mybot .mybot-adcover{color:#fff;width:326px;height:56px;z-index:2147483640;position:fixed;bottom:0;right:0;cursor:pointer}mybot .mybot-adcover-left{left:0}mybot .mybot-ad-tag{position:absolute;top:-10px;right:0;font-size:9px;z-index:1;color:#fff;cursor:pointer;background:#000;width:16px;text-align:center}mybot .mybot-ad-tag-left{left:0}mybot .closeBotFrontTop{margin-top:150px}mybot #mybotfaceimg{width:55px;height:105px;padding-left:17px;pointer-events:all;cursor:pointer}mybot .ub-brand-text{cursor:pointer;text-align:center;pointer-events:all;font-size:10px;color:#fff;padding:1px;background:transparent radial-gradient(closest-side at 111% -27%,#4B494A 0%,#292B32 41%,#131823 77%,#0C121E 100%) 0% 0% no-repeat padding-box}mybot #summaryText1UCB,mybot #summaryText2UCB,mybot #summaryText3UCB,mybot #summaryText4UCB{font-size:12px;display:flex;line-height:1.4;height:100%;align-items:center;text-align:center;justify-content:center}.mybotscale-up-center{-webkit-animation:mybotscale-up-center 0.4s cubic-bezier(.39,.575,.565,1) both;animation:mybotscale-up-center 0.4s cubic-bezier(.39,.575,.565,1) both}.mybotscale-down-center{-webkit-animation:mybotscale-down-center 0.4s cubic-bezier(.39,.575,.565,1) both;animation:mybotscale-down-center 0.4s cubic-bezier(.39,.575,.565,1) both}@-webkit-keyframes mybotscale-up-center{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes mybotscale-up-center{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes mybotscale-down-center{0%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes mybotscale-down-center{0%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}.set-2,.set-3,.set-4{display:none}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule+rule_common;}else{css.appendChild(document.createTextNode(rule));css.appendChild(document.createTextNode(rule_common));}document.getElementsByTagName('head')[0].appendChild(css);callOnDocumentReadyCube();});