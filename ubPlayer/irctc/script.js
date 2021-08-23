function loadDynamicStyles(url){
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.getElementsByTagName('HEAD')[0].appendChild(link);
}

loadDynamicStyles("https://cdn.jsdelivr.net/npm/video.js@7.11.8/dist/video-js.min.css");
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
  "vjs_ads": false,
  "vjs_ima": false,
  "can-autoplay": false
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
  //for unsticky
  // var myPlayer = '<video id="content_video" class="video-js" playsinline controls="true" preload="auto"></video>';
  //for Sticky
  var myPlayer = '<div id="ubVideo" class="ub-unloaded"><video id="content_video" class="video-js" playsinline controls="true" preload="auto"></video></div>';
  // document.getElementsByClassName("ub_player")[0].innerHTML = myPlayer;
  document.getElementById("unibots-video").innerHTML = myPlayer;
}


let post_scripts =()=>{
  console.log(scripts);
  loadDynamicScript("https://cdn.jsdelivr.net/npm/videojs-contrib-ads@6.8.0/dist/videojs.ads.js", "vjs_ads");
  loadDynamicScript("https://cdn.jsdelivr.net/npm/videojs-ima@1.11.0/dist/videojs.ima.js", "vjs_ima");
  loadDynamicScript("https://cdn.jsdelivr.net/npm/can-autoplay@3.0.0/build/can-autoplay.min.js","can-autoplay");
}

let video_ub = () => {

var autoplayAllowed = false;
var autoplayRequiresMute = false;
var ubPlayer;
var wrapperDiv;

function checkUnmutedAutoplaySupport() {
  canAutoplay
    .video({timeout: 500, muted: false})
    .then(function(response) {
        if(response.result === false) {
          // Unmuted autoplay is not allowed.
          checkMutedAutoplaySupport();
        } else {
          // Unmuted autoplay is allowed.
          autoplayAllowed = true;
          autoplayRequiresMute = false;
          initPlayer();
        }
    })
}

function checkMutedAutoplaySupport() {
  canAutoplay
    .video({timeout: 500, muted: true})
    .then(function(response) {
        if(response.result === false) {
          console.log("// Muted autoplay is not allowed.");
          autoplayAllowed = false;
          autoplayRequiresMute = false;
        } else {
          console.log("// Muted autoplay is allowed.");
          autoplayAllowed = true;
          autoplayRequiresMute = true;
        }
        initPlayer();
    })
}

function initPlayer() {

  // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var isMobile = true;
  var video = document.getElementById('content_video');
  videojs.browser.IS_IOS ? video.setAttribute('playsinline', '') : '';

  var vjsOptions = {
    autoplay: false,
    muted: false,
    loadingSpinner: false,
    bigPlayButton: false,
    width: 400,
    height: 225,
    controlBar: {
        volumePanel: {
            inline: false,
            vertical: true,
        },
        pictureInPictureToggle: false,
        fullscreenToggle: false,
    },
  };

  ubPlayer = videojs('content_video', vjsOptions);
  ubPlayer.src({ type: "video/mp4", src: "https://cdn.unibots.in/irctc.mp4" });
  ubPlayer.responsive(true);

  var imaOptions = {
    id: "content_video",
    adTagUrl:"https://video.unibots.in/clients/irctc/ads.xml",
    disableCustomPlaybackForIOS10Plus: true,
    contribAdsSettings: {
      debug: true,
      // timeout: 8000,
      // prerollTimeout: 12000,
      //postrollTimeout: 12000
    }
  };
  ubPlayer.ima(imaOptions);

    ubPlayer.on("adserror",function (err) {
        setTimeout(()=>{showPlayer()},500);
    }.bind(ubPlayer));

    ubPlayer.on("loadedmetadata", () => {
        // console.log("ads ready");
        setTimeout(()=>{showPlayer()},500);
    });

    if (autoplayAllowed) {
        if (autoplayRequiresMute) {
            ubPlayer.muted(true);
        }
        ubPlayer.muted(true);
        ubPlayer.autoplay(true);
    }

    if (!autoplayAllowed) {
        ubPlayer.muted(true);
        ubPlayer.autoplay(true);

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

    ubPlayer.on("play", () => {
        ubPlayer.volume(0.1);
        if (!ubPlayer.muted()) {
            ubPlayer.muted(true);
        }
    });

    var button = videojs.getComponent("CloseButton");
    var CloseButton = videojs.extend(button, {
        constructor: function () {
            button.apply(this, arguments);
            this.controlText("Close Player");
            // this.addClass('vjs-icon-cancel');
        },
        handleClick: function () {
            this.player().dispose();
        },
    });
    videojs.registerComponent("CloseButton", CloseButton);
    ubPlayer.addChild("CloseButton");

    //close player on video end.
    ubPlayer.on("timeupdate", function () {
        if (ubPlayer.currentTime() == ubPlayer.duration()) {
            console.log("video is ended");
            ubPlayer.dispose();
        }
    });
// setLogo();
}

function initAdDisplayContainer() {
  ubPlayer.ima.initializeAdDisplayContainer();
  wrapperDiv.removeEventListener(startEvent, initAdDisplayContainer);
}

var startEvent = "click";

function showPlayer() {
  document.querySelector("#ubVideo").classList.remove("ub-unloaded");
  document.querySelector("#ubVideo").classList.add("ub-loaded");
}

checkUnmutedAutoplaySupport();

}
function ready(fn){if(document.readyState!='loading'){fn()}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn)}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn()})}}window.ready(function(){var html='<div id="unibots-video"></div>';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='#videoBox{border:2px solid #212223;transition:0.5s}video{max-width:100%;vertical-align:bottom}.ub-unloaded{display:none}.ub-loaded{display:flex;justify-content:center}#videoBox.ubsticky{position:fixed;bottom:100px;right:0;width:400px;z-index:999;animation:an 0.8s}.ubsticky{position:fixed;bottom:100px;right:10px;width:320px;z-index:999999;animation:an 0.8s}.stikcy-out{max-width:640px}.video-js .vjs-control.vjs-close-button{right:-22px!important;top:-3em!important}.ub_player,#unibots-video{max-width:320px;margin:20px 0}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,.vjs-icon-cancel:before{color:black!important}@media (max-width:481px){.ubsticky{width:320px!important}}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule}else{css.appendChild(document.createTextNode(rule))}document.getElementsByTagName('head')[0].appendChild(css)});