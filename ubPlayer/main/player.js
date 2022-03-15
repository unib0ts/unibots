var clientDomain = location.hostname.split('.').reverse().splice(0, 2).reverse().join('.');
var scriptElement = document.createElement('script');
scriptElement.async = "async";
if(clientDomain == "deepika.com"){
    scriptElement.src = "https://cdn.unibots.in/clientData/player.js";
}else{
    scriptElement.src = "https://cdn.unibots.in/ubPlayer/player.js";
}
scriptElement.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(scriptElement);