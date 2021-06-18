function loadDynamicStyles(url){
  var link = document.createElement('link'); 
  link.rel = 'stylesheet'; 
  link.type = 'text/css';
  link.href = url;
  document.getElementsByTagName('HEAD')[0].appendChild(link);
}

loadDynamicStyles("https://cdn.jsdelivr.net/npm/video.js@7.11.8/dist/video-js.min.css");
loadDynamicStyles("https://cdn.jsdelivr.net/npm/videojs-logo@2.1.4/dist/videojs-logo.css");
loadDynamicStyles("https://cdn.jsdelivr.net/npm/videojs-contrib-ads@6.8.0/dist/videojs.ads.css");
loadDynamicStyles("https://cdn.jsdelivr.net/npm/videojs-ima@1.11.0/dist/videojs.ima.css");


function loadDynamicScript(url, tag, callback){
	let s1 = document.createElement("script");
  s1.setAttribute("src", url);
  document.getElementsByTagName('body')[0].appendChild(s1);
  s1.onload = function(){
    scripts[tag] = true;
    if(callback){callback()}
  }
}

var scripts = {
  "vjs": false,
  "vjs_logo": false,
  "vjs_ads": false,
  "vjs_ima": false
}

function listen_scripts(){
  var ub_interval =  setInterval(()=>{
    flag = false;
    for (x in scripts){
      if(scripts[x] == false){flag=true};
    }
    if(!flag){
      console.log('all loaded');
      console.log(scripts);
      video_ub();  
      clearInterval(ub_interval);
    }
  },500)
}

listen_scripts();


let ima = document.createElement("script");
ima.setAttribute("src", "https://imasdk.googleapis.com/js/sdkloader/ima3.js");
document.getElementsByTagName("body")[0].appendChild(ima);

ima.onload = function(){
  load_player();
  loadDynamicScript("https://vjs.zencdn.net/7.11.4/video.min.js", "vjs", post_scripts);  
  
}

function load_player(){
  var myPlayer = '<video id="content_video" class="video-js vjs-layout-small vjs-16-9" playsinline controls="true" preload="auto"></video>';
  // document.getElementsByClassName("ub_player")[0].innerHTML = myPlayer; 
  document.getElementById("unibots-video").innerHTML = myPlayer;
}


let post_scripts =()=>{
  console.log(scripts);
  loadDynamicScript("https://cdn.jsdelivr.net/npm/videojs-logo@2.1.4/dist/videojs-logo.min.js", "vjs_logo");
  loadDynamicScript("https://cdn.jsdelivr.net/npm/videojs-contrib-ads@6.8.0/dist/videojs.ads.js", "vjs_ads");
  loadDynamicScript("https://cdn.jsdelivr.net/npm/videojs-ima@1.11.0/dist/videojs.ima.js", "vjs_ima");
  loadDynamicScript("https://cdn.jsdelivr.net/npm/can-autoplay@3.0.0/build/can-autoplay.min.js","can-autoplay");
}

let video_ub = () => {

var autoplayAllowed = false;
var autoplayRequiresMute = false;
var ubplayer;
var wrapperDiv;

function checkUnmutedAutoplaySupport() {
  canAutoplay.video({ timeout: 200, muted: false }).then((response) => {
    if (response.result === false) {
      // Unmuted autoplay is not allowed.
      checkMutedAutoplaySupport();
    } else {
      // Unmuted autoplay is allowed.
      autoplayAllowed = true;
      autoplayRequiresMute = false;
      initPlayer();
    }
  });
}

function checkMutedAutoplaySupport() {
  canAutoplay.video({ timeout: 200, muted: true }).then((response) => {
    if (response.result === false) {
      // Muted autoplay is not allowed.
      autoplayAllowed = false;
      autoplayRequiresMute = false;
    } else {
      // Muted autoplay is allowed.
      autoplayAllowed = true;
      autoplayRequiresMute = true;
    }
    initPlayer();
  });
}

function initPlayer() {
  var vjsOptions = {
    autoplay: false,
    muted: false,
    debug: true,
    height: 360,
    width: 640,
  };
  ubplayer = videojs("content_video", vjsOptions);
  ubplayer.src({ type: "video/mp4", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" });

  var imaOptions = {
    id: "content_video",
    // vastLoadTimeout: 7000,
    adTagUrl:"https://video.unibots.in/ads.xml",
    contribAdsSettings: {
      debug: true,
      timeout: 8000,
      prerollTimeout: 10000,
      //postrollTimeout: 12000
    }
  };
  ubplayer.ima(imaOptions);
    
  // Close button Code
  var button = videojs.getComponent('CloseButton');
  var CloseButton = videojs.extend(button, {
        constructor: function() {
          button.apply(this, arguments);
          this.controlText("Close Player");
          // this.addClass('vjs-icon-cancel');
        },
        handleClick: function() {
          this.player().dispose();
        }
      });
  videojs.registerComponent('CloseButton', CloseButton);
  ubplayer.addChild('CloseButton');

  // ubplayer.on('play', () => { ubplayer.logo().show(); });
  // ubplayer.on('pause', () => { ubplayer.logo().show(); });

  if (autoplayAllowed) {
    if (autoplayRequiresMute) {
      ubplayer.muted(true);
    }
    ubplayer.play();
  }

  if (!autoplayAllowed) {
    if (
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/Android/i)
    ) {
      startEvent = "touchend";
    }

    wrapperDiv = document.getElementById("content_video");
    wrapperDiv.addEventListener(startEvent, initAdDisplayContainer);
  }
}

function initAdDisplayContainer() {
  ubplayer.ima.initializeAdDisplayContainer();
  wrapperDiv.removeEventListener(startEvent, initAdDisplayContainer);
}

var startEvent = "click";
checkUnmutedAutoplaySupport();
}
 function ready(fn){if(document.readyState!='loading'){fn()}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn)}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn()})}}window.ready(function(){var html='';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='#videoBox{border:10px solid #212223;transition:0.5s}video{max-width:100%;vertical-align:bottom}#videoBox.out{position:fixed;bottom:0;right:0;width:500px;z-index:999;animation:an 0.5s}.out{position:fixed;bottom:0;right:10px;width:500px;z-index:999;animation:an 0.5s}.video-js .vjs-control.vjs-close-button{right:-12px!important;top:-3em!important}.ub_player,#unibots-video{max-width:400px;margin:20px 0}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,.vjs-icon-cancel:before{color:black!important}@media (max-width:481px){.out{width:350px!important}video{height:240px!important;width:320px!important}}#unibots-video .vjs-control-bar,#unibots-video .vjs-play-progress,#unibots-video .vjs-slider-bar{font-family:"VIDEOJS"!important;display:flex!important;visibility:visible!important;opacity:1!important;transition:visibility .1s,opacity .1s!important;line-height:normal!important}#unibots-video .vjs-icon-placeholder,#unibots-video .vjs-control-text{font-family:VideoJS!important;font-size:unset!important;line-height:unset!important;color:#fff!important}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule}else{css.appendChild(document.createTextNode(rule))}document.getElementsByTagName('head')[0].appendChild(css)});