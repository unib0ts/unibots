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
var mybotIsBottomScrollStartDisapperEnabled = 0;
mybotMobileTopPlacement = 0;
mybotIsScrollupDisapperEnabled =0;
// mobileTopPixel = 54;
var mybotTranslateFlag = 0;
// var mybotTranslate ='bengali';
// var botSwSmall = 1;

mybotGACode = '';
// mybotadSmall = '<div id="div-ub-1"></div>';
// mybotadSmall ='';
mybotadSmall_728 = '<img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/corona/728x90_web_banner_example-001.jpg">';

mybotadSmall_320 = '<img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/sample1.jpg">';

mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';
mybotClosevar = '<img src="https://scoretest.warw.in//img/close.svg">';

function mybotCustomSwFunction() {
  // document.getElementById('adSmall').innerHTML=mybotadSmall;
  document.getElementById('gabywa').innerHTML=mybotgabywa;

  z1 = document.createElement('div');
	z1.id = 'adSmall_728';
	z1.className = 'adSmall_728';
	// z.innerHTML ='<span class="close_ub-sticky-addesk" id="close_ub-sticky-addesk" onclick="mybotubstickyadDesk()"><img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/close.svg"></span><div class="ub-sticky-adDesk" id="ub-sticky-adDesk"></div';
	x1 = document.querySelector('mybot');
	x1.appendChild(z1);
  if (!mobileCheck()) {
    document.getElementById('adSmall_728').innerHTML=mybotadSmall_728;
  }
  else {
   document.getElementById('adSmall_728').innerHTML=mybotadSmall_320;
  }

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
var rowFlag = 0;
// var mybotTranslate = 'bengali';
var translatedData = {};
var teams = {
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

function callOnDocumentReadysw() {
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
						    	mybotStartsw();
						   }
						   else {
						     mybotloadNewsbotWidget();
						   }
						}
						else {
							if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
								 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
										mybotStartsw();
								 }
								 else {
									 mybotloadNewsbotWidget();
								 }
							}
							else {
									mybotStartsw();
							}
						}
					}
				}
			}
			else {
				console.log('Block Check Request failed');
				if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
					 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
							mybotStartsw();
					 }
					 else {
						 mybotloadNewsbotWidget();
					 }
				}
				else {
						mybotStartsw();
				}
			}
		};
		request.onerror = function() {
			console.log('Request failed');
			if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
				 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
						mybotStartsw();
				 }
				 else {
					 mybotloadNewsbotWidget();
				 }
			}
			else {
					mybotStartsw();
			}
		};
		request.send();
	}
	else{
		if (typeof mybotNewsbotEnabled !== 'undefined' && mybotNewsbotEnabled ==1) {
			 if (boturl== mybotCovidurl || boturl == 'http://localhost/newsbot/build_test.ph') {
					mybotStartsw();
			 }
			 else {
				 mybotloadNewsbotWidget();
			 }
		}
		else {
				mybotStartsw();
		}
	}

}

function mybotStartsw(){
		mybotCustomSwFunction();

		if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
			mybotTranslateBot();
		}
		else{
			getScoresw();
		}
}

function mybotStartswSmall(){
	if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
		mybotTranslateBot();
	}
	else{
		getScoresw();
	}
}

function mobileCheck() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

function putDatasw(mybotDataSet) {
	for (var j = 0; j < mybotDataSet['data'].length; j++) {
		createNewColumn();
		var ubschnum = document.querySelectorAll(".ub-sch-num");
		var ubschsummary = document.querySelectorAll(".ub-sch-summary");
		var ubschhomeTeam = document.querySelectorAll(".ub-sch-team1");
		// var ubschawayTeam = document.querySelectorAll(".ub-sch-team2");
		var ubschDate = document.querySelectorAll(".ub-sch-date");
		mybotswData = mybotDataSet.data[j].data;
		mybotswData	=JSON.parse(mybotswData);
		var match_num = "match_num"+j;
		var ubsch_summary = "ub-sch-summary"+j;
		var ubsch_homeTeam = "ub-sch-homeTeam"+j;
		// var ubsch_awayTeam = "ub-sch-awayTeam"+j;
		var ubsch_date = "ub-sch-date"+j;
		ubschnum[j].setAttribute("id", match_num);
		ubschsummary[j].setAttribute("id", "ub-sch-summary"+j);
		ubschhomeTeam[j].setAttribute("id", "ub-sch-homeTeam"+j);
		// ubschawayTeam[j].setAttribute("id", "ub-sch-awayTeam"+j);
		ubschDate[j].setAttribute("id", "ub-sch-date"+j);

		if(typeof mybotTranslateFlag !== 'undefined' && mybotTranslateFlag ==1){
			var homeTeam = mybotswData.homeTeam.name;
			homeTeam = teams[homeTeam];
			homeTeam = translateText(homeTeam, "teams", "schedule");
			var awayTeam = mybotswData.awayTeam.name;
			awayTeam = teams[awayTeam];
			awayTeam = translateText(awayTeam, "teams", "schedule");
			var date = mybotswData.startDateTime;
			date = new Date(date);
			// var dateMonth = date.getDate() +" "+ date.toLocaleString('default', { month: 'long' }).toLowerCase();
			// dateMonth = translateText(dateMonth, "dates", "schedule");
			// time = date.getHours()+ ":" + date.getMinutes();
			// time = translateText(time, "time", "schedule");
			var dateMonth = translateText(date.getDate().toString(), "numbers") + "/"+ translateText((date.getMonth()+1).toString(), "numbers");
			var time = translateText(date.getHours().toString(), "numbers") + ":"+ translateText(date.getMinutes().toString(), "numbers");
			dateString = dateMonth+" "+time;

			name = mybotswData.name;
			var nameArr = name.split(' ');
			name = translateText(nameArr[0], "words") +" "+ translateText(nameArr[1], "numbers");
		}
    	else {
			var homeTeam = mybotswData.homeTeam.name;
				homeTeam = teams[homeTeam];
			var awayTeam = mybotswData.awayTeam.name;
						awayTeam = teams[awayTeam];
			var date = mybotswData.startDateTime;
			date = new Date(date);
			var month_names =["Jan","Feb","Mar",
				"Apr","May","Jun",
				"Jul","Aug","Sep",
				"Oct","Nov","Dec"];
		  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	    var dayName = days[date.getDay()];
			var dateMonth = dayName + ", " + date.getDate().toString() + " "+ month_names[date.getMonth()+1] + " "+ date.getFullYear();
			var time = mybotaddZero(date.getHours().toString()) + ":"+ mybotaddZero(date.getMinutes().toString()) + " IST " +"(" +mybotaddZero(date.getUTCHours().toString()) + ":"+ mybotaddZero(date.getUTCMinutes().toString())+ " GMT" + ")";
			// dateString = dateMonth+" "+time;
			 dateString = dateMonth;
       timeString = time;
			name = mybotswData.name;
    }
		if(mybotDataSet.data[0].status == "UPCOMING") {
			matchSummaryText = "";
		}
		else{
			matchSummaryText = mybotswData.matchSummaryText;
		}
    if (mobileCheck()) {
      document.getElementById(ubsch_homeTeam).innerHTML = homeTeam + "<br>vs<br>" + awayTeam;
    }
		else {
			document.getElementById(ubsch_homeTeam).innerHTML = homeTeam  + " vs " + awayTeam;
		}
		// document.getElementById(ubsch_awayTeam).innerHTML = awayTeam;
		document.getElementById(match_num).innerHTML = name + " - " + dateString;
		document.getElementById(ubsch_summary).innerHTML = matchSummaryText;
		document.getElementById(ubsch_date).innerHTML = timeString;
	}
}

function mybotaddZero(i) {
 if (i < 10) {
	 i = "0" + i;
 }
 return i;
}

function createNewColumn(){
	var x = document.querySelector('.ub-sch-table');
	var element = document.createElement('td');
  var child = document.createElement('div');
	child.classList.add('ub-sch-team-wrapper');
	var innerChild = document.createElement('div');
	innerChild.classList.add('ub-sch-team1', 'ub-sch-team');
	child.appendChild(innerChild);

	// innerChild = document.createElement('div');
	// innerChild.classList.add('ub-sch-team2', 'ub-sch-team');
	// child.appendChild(innerChild);
	element.appendChild(child);

	// child = document.createElement('div');
	// var innerChild = document.createElement('div');
	// innerChild.classList.add('ub-sch-team2', 'ub-sch-team');
	// child.appendChild(innerChild);
	//
	// innerChild = document.createElement('div');
	// innerChild.classList.add('ub-sch-score2', 'ub-sch-score');
	// child.appendChild(innerChild);
	// element.appendChild(child);
	child = document.createElement('div');
	child.className = 'ub-sch-num';
	element.appendChild(child);
	// element.appendChild(child);

	child = document.createElement('div');
	child.className = 'ub-sch-date';
	element.appendChild(child);

	//ad ub-active class to the live innings

	child = document.createElement('div');
	child.className = 'ub-sch-summary';
	element.appendChild(child);
	var checker;
	mobileCheck() ? checker = 2 : checker = 4;
	if(rowFlag % checker == 0){
		var parent = document.createElement('tr');
		parent.appendChild(element);
		if(x.firstElementChild == null){
			x.append(parent);
		}
		else{
			x.append(parent);
		}
	}
	else{
		x.lastElementChild.append(element);
	}
	rowFlag += 1;
}

function translateText(word, category, parent){
	word1 = word.toLowerCase();
	if(category){
		category1 = category.toLowerCase();
	}
	if(parent){
		parent1 = parent.toLowerCase();
		if(translatedData[parent1][category1][word1]){
			return translatedData[parent1][category1][word1];
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
				if(translatedData[category1][numArr[i]]){
					 word1 = word1.concat(translatedData[category1][numArr[i]]);
				}
				else{
					word1 = word1.concat(numArr[i]);
				}
			}
			return word1;
		}
		else{
			if(translatedData[category1][word1]){
				return translatedData[category1][word1];
			}
			else{
				return word;
			}
		}
	}

}

function getScoresw() {
	var request = new XMLHttpRequest();
	// url = 'https://scoretest.warw.in/'+'get_schedule';
	url = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/demo/ipl_sw.json';
	// console.log(url);
	request.open('GET', url, true);
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			dataSet = [];
			var data = request.responseText;
			data = JSON.parse(data);
			if(data.error === false) {
				if(typeof botSwSmall !== 'undefined' && botSwSmall == 1){
					dataFinal = {'data': []};
					dataTemp = data.data;
					var num = 0;
					for(var i=0; i<dataTemp.length; i++){
						date = JSON.parse(dataTemp[i].data);
						date = date.startDateTime;
						now = new Date();
						date = new Date(date);
						if(num>3){break;}
						if((date.getDate() >= now.getDate()) && (date.getMonth() >= now.getMonth()) ){
							dataFinal['data'].push(dataTemp[i]);
							num++;
						}
						else{
							continue;
						}
					}
					putDatasw(dataFinal);
				}
				else{
					putDatasw(data);
				}
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

function mybotloadNewsbotWidget(){
  el = document.getElementsByTagName('mybot');
  el[0].parentNode.removeChild(el[0]);

  var s = document.createElement('script');
  s.src = mybotloadNewsbotScript;
  s.type = "text/javascript";
  s.async = true;
  document.getElementsByTagName('head')[0].appendChild(s);
}

function mybotTranslateBot(){
	var request = new XMLHttpRequest();
	url = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/translate/translate.json';

	request.open('GET', url, true);
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			var data = request.responseText;
			data = JSON.parse(data);
			data = data[mybotTranslate];
			if(data) {
				translatedData = data;
				getScoresw();
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
function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}window.ready(function(){var html='<mybot> <div id="gabywa"></div>  <div class="ub-schedule"> <div class="ub-sch-head"> <img class="ub-head-imgabp" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAABO9JREFUeNrNWltsFFUY/mf20u52uy2oQFGJRCqJRgMmXlowVCMipKQQTFFIvcUb0Ri1gb602LUSbkp8gJhqomitgtFgQCM8FR4o0FQtWowVIghCE61t6S7bbtvd5fu3h72U3bY7c2a6f/J1tun0zPfNOf/tnFVIgoXD4RtxKQEeBOYCc4ApgEvc4gN6gNNAB3AMOKwoSrfeZys6SDPBJ4EKQTzdsUJAM9AAfA0xvaYIAPECXCqBl+PesF7rAz4EdkDIv4YIAHErLm8Ab0sknkzIRmAXhAxLEwDyvKb3AveSOdbCyxMizo53o2UC5Ffg8iNwG5lnNwNP19bW/ubxeE5rFgDyL+HyGeAg842fuRoizkPEybQFCPL1gEqTZ/zsMog4l0qEJQX5leLNTyb5eD8thYifki0nNQn5QkHeQpljHAG/ALfZYwrADTZOKkAuZZ5x4twjwnnKGXgLmEeZa/cDryYVAGUcumrSGe3E2UFauKWLev1hM0W8A67Tks3AeiAnnZHm3WojFS626QevmQLcYqXEBIhq8sV0R8qyKrT1CTftaemnE38NmiliHTjnx8/AGsCpZaSi2+1Ufp+DNnzjpcHhsJmzUB4voELPaDWlLvhBiHY2+c2chQhniyiP39czUrZNoRl5Fnr3gI9K78mmqTmm5L9bkNx28pMeljHayvnZWE42qvq2Dz5lWplRwj+KZI24eZWb2i4MUf0RPx04OUDBkOEiiqyih5Vis6ZaqBhOXff9SFj1lIXohYecRgqYywIKZY3WeTlER/4MRH/fdtBHy+7Oopn5sbLq7/+D9PpXl+n3S8P06J1ZtKPcTQ675ta8UBU1hhQryFPp2eLYG78SCFPNd4lJrna/l1rPDZF/MEz72wZod7OuyDVFld3fVj7mohtcsSh0sD1Ah9pjs+IdSPTwvn5dHu+SHu/cDoWqHk98J9WYBZ4NtjcX55ArS4n6TEWRvmbPKjad8mSKeOoBB31+zE/tF0c2Fi71BiP+4CnLpQVz7NRacxOd7w7SHdMtZLMoeh7lU8WOmdwADU51K9wJWx6fHvXTr/8MRT7nZit010yrXvJsPSzgjCGF+2wblSG5XTPOCVWolyTnhjMsoMOoIF2NGskZFyJ5BngmJFoHCzhulIAC1EevPZLYYrAvsE9IsuMsoMnIVPlKiTMSbeJzQ/U+KQ0Qh7XDqqIoF/HhF6MEcNOzcXniHsGhU4FIftD79sG961oeaDByFpainFhYaL8uN/gCupJYQ3xD0wj0G9qJIwdY49Jmp8gNWuM/b7FEBYg9+U8MLRtnWOmZ4sTK9EK3ZmeuB+ee0bsS24yehcolrki3lu9U6bkFTtq1Nk/r2492kAmpEO1lNS51lNm2Hm//vWT7QmzbgfYMJv8z8MHovjJqUBYQ2xVXMpA8Hz+tHn30dN0OtMfj6UK3z/XRKtJxiinZ2NvXgHzz6D8k3UKHiFMQwV6+NEMErAP5xmR/SHkGABEtEMEH0UsmcSaCgvxHqW4Y8xBDiPgDH5cBdpPJe8WyaRzrpnFPYcRy2oePi4BpJpFvAxaD/NHxbpzQMZJwbM7UAbERZjOIOEc/Puh+HuT/m8g/aPmqwSxcNvBDSN7xK3c5H3MeEtXxhE3Plz14Oa2lkV3i+RqHaRVV5ZdcGmsZQEp0EcdTvEmcztdtmkC6U++zrwLt+I2D9aiqVQAAAABJRU5ErkJggg=="> <div class="ub-head-txt">Tournament Schedule</div> </div> <table class="ub-sch-table"> </table></div> </mybot>';var element=document.querySelector('#div_2');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='mybot .ub-schedule{width:726px!important;height:340px!important;max-height:none!important}mybot .ub-sch-head{background:linear-gradient(30deg,#045DE9,#09C6F9 30%,#09C6F9)!important}mybot .ub-schedule td{width:49.5%!important;height:143px!important}mybot .ub-sch-table{height:85.5%!important}@media screen and (max-width:635px){mybot .ub-schedule{width:318px!important}mybot .ub-sch-date{padding:10px 5px!important}}#ub-schedule-wrapper,.text-right{text-align:left!important}mybot .ub-sch-date,mybot .ub-sch-num{font-size:12px}mybot .adSmall_728{padding-top:2px;padding-left:10px}';var rule_common='mybot{color:#333;position:relative;z-index:2147483640}mybot *{-webkit-box-sizing:content-box!important;-moz-box-sizing:content-box!important;box-sizing:content-box!important}mybot img{-webkit-user-drag:none;-moz-user-drag:none;-khtml-user-drag:none}mybot .row{margin-right:0}mybot a,mybot a:hover,mybot a:focus{text-decoration:none;outline:none}mybot .ub-schedule{width:100%;margin:10px;font-family:"Proxima Nova";height:100%;max-height:700px;background:#fff;border:1px #00000060 solid}mybot .ub-sch-head{height:50px;background:#223577}mybot .ub-head-img{height:32px;width:32px;vertical-align:middle;display:inline-block;padding:0 10px}mybot .ub-head-txt{line-height:50px;color:#fff;font-size:20px;display:inline-block}mybot .ub-sch-table{width:100%;border-spacing:0;overflow-y:auto;height:92%;max-height:650px;display:block}mybot .ub-sch-table td{height:172px;border:1px #00000060 solid;vertical-align:unset;width:50%}mybot .ub-sch-num{padding:10px;color:#7f4551;text-align:center;font-weight:600}mybot .ub-sch-date{color:#7f4551;font-size:12px;text-align:center;font-weight:600}mybot .ub-sch-team{padding:10px;font-weight:600;font-size:18px;display:inline-block}mybot .ub-sch-score{padding:10px;display:inline-block;float:right}mybot .ub-sch-summary{padding:10px;font-weight:600}mybot .ub-active{font-weight:600}mybot .ub-schedule tbody,.ub-schedule tr{display:block}mybot .ub-schedule td{width:24.6%;display:inline-table}mybot .ub-sch-table::-webkit-scrollbar{width:6px}mybot .ub-sch-table::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);-webkit-border-radius:10px;border-radius:10px}mybot .ub-sch-table::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:#223577;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.5)}mybot .ub-sch-team-wrapper{padding-top:20px;text-align:center}@media only screen and (max-width:768px){mybot .ub-schedule td{width:48.5%!important}}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule+rule_common;}else{css.appendChild(document.createTextNode(rule));css.appendChild(document.createTextNode(rule_common));}document.getElementsByTagName('head')[0].appendChild(css);callOnDocumentReadysw();});