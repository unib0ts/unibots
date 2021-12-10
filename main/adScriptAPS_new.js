const iframe = document.createElement("div");
iframe.id = "htmlSrc";

var parentDiv = document.querySelector('script[src="http://localhost/unibots/main/adScriptAPS_new.js"]').parentElement;
// (iframe.frameElement || iframe).style.cssText =
//   "width: 700px; height: 500px; border: 0; margin:0; background-color:lemonchiffon;";
// iframe.src = "javascript:false";
// const ub_sticky = document.querySelector("body");
// ub_sticky.insertBefore(iframe, window.document.body.firstChild);
parentDiv.appendChild(iframe);

// console.log(document.querySelector("body"));
