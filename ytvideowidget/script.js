// Next 6 lines of code will be removed and will be replaced with HTML on build
// =============================================================================
function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}
window.ready(function() {
	callOnDocumentReady();
});

var clients = [
	{
		'hostname': 'default',
		'loadedByUB': false,
		'adSmallName': '/21957769615/Native_1x1',
		'adSmallSize': '[112,150]',
		'adSmallID': 'div-gpt-ad-1589631112675-0'
	},
	{
		'hostname': 'sandesh.com',
		'loadedByUB': true,
		'adSmallName': '/21957769615/Native_1x1',
		'adSmallSize': '[112,150]',
		'adSmallID': 'div-gpt-ad-1589631112675-0'
	},
	{
		'hostname': 'www.ragalahari.com',
		'loadedByUB': true,
		'adSmallName': '/21957769615/ragalahari.com_yt_Native',
		'adSmallSize': '[112,150]',
		'adSmallID': 'div-gpt-ad-1589665213200-0'
	},
	{
		'hostname': 'm.ragalahari.com',
		'loadedByUB': true,
		'adSmallName': '/21957769615/ragalahari.com_yt_Native',
		'adSmallSize': '[112,150]',
		'adSmallID': 'div-gpt-ad-1589665213200-0'
	}
];

hostname = window.location.hostname;
if(hostname == 'localhost' || hostname == 'webassets.in'){
	hostname = 'default'
}

var currentClient = clients.filter(function (client) {
	return client.hostname == hostname;
});
currentClient = currentClient[0];
adSmallID = currentClient.adSmallID;
adSmallSize = currentClient.adSmallSize;
adSmallName = currentClient.adSmallName;

adSmall = "<div id='"+adSmallID+"'></div>";

mybotClosevar = '<img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/close.svg">';

// =============================================================================
// Change the code from here
// Any function which you want to call on document.ready, put in this function
function callOnDocumentReady() {
	setTimeout(function () {
		customFunctionYT();
	}, 500);
}

function customFunctionYT(){
	if(!currentClient.loadedByUB){
		var script = document.createElement("script");
		script.async = true;
		script.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js";
		document.getElementsByTagName('head')[0].appendChild(script);
	}
	var script1 = document.createElement("script");
	script1.innerHTML="window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() {googletag.defineSlot('"+adSmallName+"',"+adSmallSize+" , '"+adSmallID+"').addService(googletag.pubads()); googletag.pubads().enableSingleRequest();googletag.enableServices();});";
	document.getElementsByTagName('head')[0].appendChild(script1);

	document.getElementById('ubPlayer').innerHTML = adSmall;

	var script2 = document.createElement("script");
	script2.innerHTML="googletag.cmd.push(function() { googletag.display('"+adSmallID+"'); });";
	document.getElementById(adSmallID).appendChild(script2);

	document.getElementById('mybotCloseYT').innerHTML=mybotClosevar;
	setTimeout(function () {
		document.getElementById('mybotCloseYT').style.display = 'block';
	}, 5000);
	document.getElementById('mybotCloseYT').addEventListener('click', function () {
		document.getElementById('mybotCloseYT').style.display = 'none';
		elem = document.getElementById('ubPlayer');
		elem.parentNode.removeChild(elem);
	});
}function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}window.ready(function(){var html='<mybot><div class="player-wrapper"><div class="ub-player" id="ubPlayer"></div><div class="close-yt" id="mybotCloseYT"></div></div></mybot>';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='mybot{font-family:"Lato",sans-serif;line-height:1.42857143;color:#333;position:unset;z-index:2147483647;cursor:move}mybot *{-webkit-box-sizing:content-box!important;-moz-box-sizing:content-box!important;box-sizing:content-box!important}mybot .ub-player{height:150px;width:112px;position:fixed;bottom:10px;right:10px;z-index:2147483647}mybot .player-wrapper{height:150px;width:112px;position:fixed;bottom:10px;right:10px;z-index:2147483647}mybot .close-yt{position:absolute;margin-top:-20px;display:none;width:15px;cursor:pointer;right:0}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule}else{css.appendChild(document.createTextNode(rule));css.appendChild(document.createTextNode(rule));}document.getElementsByTagName('head')[0].appendChild(css);callOnDocumentReady();});