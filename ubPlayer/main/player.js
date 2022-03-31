var clientDomain = location.hostname.split('.').reverse().splice(0, 2).reverse().join('.');
var cachebuster = parseInt((Math.round(new Date().getTime() / 1000)) / 10000) * 10000;
var scriptElement = document.createElement('script');
scriptElement.async = "async";
scriptElement.src = 'https://cdn.unibots.in/ubPlayer/player.js?cb='+cachebuster;
scriptElement.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(scriptElement);
