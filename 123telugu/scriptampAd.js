mybotadSmall = '<div id="ATD_TG_320x100"></div>';

function callOnDocumentReady(){
  document.getElementById('adSmall').innerHTML=mybotadSmall;
  var s = document.createElement('script');
  s.src = "https://go.automatad.com/geo/8ueWmQ/afihbs.js";
  s.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(s);
}
function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}window.ready(function(){var html='<mybot><div class="row"><div class="col-hgt-ad" id="adSmall"></div></div></mybot>';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='mybot.col-hgt-ad-right{height:50px}mybot.col-hgt-ad-left{height:50px}mybot.col-hgt-ad{height:50px}';var rule_common='mybot.col-hgt-ad-right{display:flex;pointer-events:auto;align-items:center;float:right;}mybot.col-hgt-ad-left{display:flex;align-items:center;float:left;pointer-events:auto;}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule+rule_common;}else{css.appendChild(document.createTextNode(rule));css.appendChild(document.createTextNode(rule_common));}document.getElementsByTagName('head')[0].appendChild(css);callOnDocumentReady();});