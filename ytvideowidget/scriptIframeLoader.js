
function callOnDocumentReadyYT() {
	elemHTML = "<iframe width='112px' height='180px' frameborder='0' src='https://unibots.warw.in/html/ytvideowidget/iframe'></iframe>";
	var elem1 = document.createElement("div");
	elem1.className = "ubPlayer";
	elem1.innerHTML = elemHTML;
	document.getElementsByTagName('body')[0].appendChild(elem1);
}function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}window.ready(function(){var html='';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='.ubPlayer{position:fixed;width:112px;height:170px;bottom:10px;right:10px}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule}else{css.appendChild(document.createTextNode(rule));css.appendChild(document.createTextNode(rule));}document.getElementsByTagName('head')[0].appendChild(css);callOnDocumentReadyYT();});