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
  var myPlayer = '<div id="ubVideo"><video id="content_video" class="video-js" playsinline controls="true" preload="auto"></video></div>';
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

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  // var isMobile = true;

  var video = document.getElementById('content_video');
  videojs.browser.IS_IOS ? video.setAttribute('playsinline', '') : '';

  var vjsOptions = {
    autoplay: false,
    muted: false,
    // fluid:true,
    // fluid: isMobile ? true : false,
    debug: true,
    width: isMobile ? 320 : 640,
    height: isMobile ? 240 : 360,
  }
  console.log(vjsOptions);

  ubPlayer = videojs('content_video', vjsOptions);
  ubPlayer.src({ type: "video/mp4", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" });
  // ubPlayer.src({ type: "video/mp4", src: "https://s0.2mdn.net/4253510/google_ddm_animation_480P.mp4"});
  // ubPlayer.responsive(true);

  var imaOptions = {
    id: "content_video",
    // adTagUrl: 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&vid=short_onecue&correlator=',
    adTagUrl:"https://video.unibots.in/ads.xml",
    disableCustomPlaybackForIOS10Plus: true,
    contribAdsSettings: {
      debug: true,
      timeout: 8000,
      prerollTimeout: 12000,
      //postrollTimeout: 12000
    }
  };
  ubPlayer.ima(imaOptions);

  if (autoplayAllowed) {
    if (autoplayRequiresMute) {
      ubPlayer.muted(true);
    }
    setTimeout(()=>{
      ubPlayer.pause(); 
      ubPlayer.play();
    }, 500);
  }
  
  if (!autoplayAllowed) {
    ubPlayer.pause();
    ubPlayer.play();
    if (navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/Android/i)) {
      startEvent = 'touchend';
    }

    wrapperDiv = document.getElementById('content_video');
    wrapperDiv.addEventListener(startEvent, initAdDisplayContainer);
  }
  
  video.onloadeddata= (event) => {
    document.getElementById("ubVideo").style.border = "4px solid #212223";
    ubPlayer.muted(true);  
  };

  var button = videojs.getComponent('CloseButton');
  var CloseButton = videojs.extend(button, {
        constructor: function() {
          button.apply(this, arguments);
          this.controlText("Close Player");
          // this.addClass('vjs-icon-cancel');
        },
        handleClick: function() {
          this.player().dispose();
          disposeBox();
        }
      });
  videojs.registerComponent('CloseButton', CloseButton);
  ubPlayer.addChild('CloseButton');
    
  //close player on video end.
  ubPlayer.on('timeupdate', function(){
      if(ubPlayer.currentTime() == ubPlayer.duration()){
          console.log('video is ended');
          ubPlayer.dispose();
          disposeBox();
      }
  });

  function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return  rect.bottom > 0 &&
              rect.right > 0 &&
              rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
              rect.top < (window.innerHeight || document.documentElement.clientHeight);
  }
  if(!isMobile){
    const currentPlayer = document.querySelector('#unibots-video');
    window.addEventListener('scroll', function () {
        var targetDiv = document.getElementById("ubVideo");

        if(isInViewport(currentPlayer)){
          if(targetDiv.classList.contains("ubsticky")){
            targetDiv.classList.remove("ubsticky");
          }
        }else{
          // console.log("out view");
          // console.log(targetDiv.classList.contains("ubsticky"));
          if(!targetDiv.classList.contains("ubsticky")){
            targetDiv.classList.add("ubsticky");
          }
        }
    // }, {
    //     passive: true
    });
  }
  
  function disposeBox(){
    document.getElementById("ubVideo").style.display = "none";
  }
}

function initAdDisplayContainer() {
    ubPlayer.ima.initializeAdDisplayContainer();
    wrapperDiv.removeEventListener(startEvent, initAdDisplayContainer);
}

var startEvent = 'click';
checkUnmutedAutoplaySupport();

}
 function ready(fn){if(document.readyState!='loading'){fn()}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn)}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn()})}}window.ready(function(){var html='';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='video{max-width:100%;vertical-align:bottom}#ubVideo{width:fit-content;transition:0.5s}.ubsticky{position:fixed;bottom:0;left:5px;width:400px;z-index:999;animation:an 0.8s}.video-js .vjs-control.vjs-close-button{right:-17px!important;top:-28px!important}#unibots-video-mobile{margin-top:35px}.ubsticky .content_video-dimensions{width:400px!important;height:225px!important}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,.vjs-icon-cancel:before{color:black!important}@media (max-width:481px){#unibots-video-mobile{max-width:320px!important}}#unibots-video .vjs-control-bar,#unibots-video .vjs-play-progress,#unibots-video .vjs-slider-bar{font-family:"VIDEOJS"!important;display:flex!important;visibility:visible!important;opacity:1!important;transition:visibility .1s,opacity .1s!important;line-height:normal!important}#unibots-video .vjs-icon-placeholder,#unibots-video .vjs-control-text{font-family:VideoJS!important;font-size:unset!important;line-height:unset!important;color:#fff!important}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule}else{css.appendChild(document.createTextNode(rule))}document.getElementsByTagName('head')[0].appendChild(css)});