
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
  var myPlayer = '<video id="content_video" class="video-js vjs-layout-small vjs-16-9" playsinline autoplay controls="true" preload="auto"></video>';
  // document.getElementsByClassName("ub_player")[0].innerHTML = myPlayer; 
  document.getElementById("unibots-video").innerHTML = myPlayer;
}


let post_scripts =()=>{
  console.log(scripts);
  loadDynamicScript("https://cdn.jsdelivr.net/npm/videojs-logo@2.1.4/dist/videojs-logo.min.js", "vjs_logo");
  loadDynamicScript("https://cdn.jsdelivr.net/npm/videojs-contrib-ads@6.8.0/dist/videojs.ads.js", "vjs_ads");
  loadDynamicScript("https://cdn.jsdelivr.net/npm/videojs-ima@1.11.0/dist/videojs.ima.js", "vjs_ima");
}

let video_ub = () => {
   

  var ubplayer = videojs('content_video',{
    // fluid: true,
    width:640,
    height:360
  });
  ubplayer.src({type: 'video/mp4', src: 'https://cdn.jsdelivr.net/gh/ubVids/video-library@latest/dist/download_deadpool_game_for_pc.mp4'});
  // ubplayer.src([
  //   {type: 'video/mp4', src: 'https://cdn.jsdelivr.net/gh/ubVids/video-library@latest/dist/3/wild_feast_dance_gala_2010.mp4'},
  //   {type: 'video/mp4', src: 'https://cdn.jsdelivr.net/gh/ubVids/video-library@latest/dist/3/sotd__boca.mp4'},
  //   {type: 'video/mp4', src: 'https://cdn.jsdelivr.net/gh/ubVids/video-library@latest/dist/3/trendy_11_mins_of_tiktok_viral_dance_to_show_off.mp4'}
  // ]);
  ubplayer.autoplay(true);
  ubplayer.muted(true);
  ubplayer.responsive(true);

  ubplayer.logo({
    image: 'https://unibots.in/wp-content/uploads/2019/09/unibot.png',
    position: 'top-right',
    width: 80,
    height: 80
  });
      
  var options = {
    id: 'content_video',
    // debug: true,
    // preventLateAdStart: true,
    // vastLoadTimeout: 7000,
    // adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpostpod&cmsid=496&vid=short_onecue&correlator=',
    // adTagUrl: 'https://video.unibots.in/clients/docbao.xml',
    adTagUrl: 'https://googleads.g.doubleclick.net/pagead/ads?client=ca-video-pub-2730263451308801&slotname=docbao.vn_instream&ad_type=video&description_url=https%3A%2F%2Fwww.docbao.vn&videoad_start_delay=0&vpa=1&max_ad_duration=18000000&sdmax=18000000&adsafe=low&hl=vi',
    contribAdsSettings: {
      debug: true,
      timeout: 7500,
      //prerollTimeout: 12000,
      //postrollTimeout: 12000
    }
  };
  ubplayer.ima(options);
  
// var isPlaying = ubplayer.currentTime > 0 && !ubplayer.paused && !ubplayer.ended && ubplayer.readyState > ubplayer.HAVE_CURRENT_DATA;
// if (!isPlaying) {
//   ubplayer.play();
// }
// ubplayer.on('play', () => {
//   var playPromise = ubplayer.play();
//   playPromise.then(() => {
//     // play succeeded
//     console.log("// ubplayer play succeeded")
//   })
//   .catch(() => {
//     // play failed
//     console.log("// ubplayer play failed")
//   });
// });
// ubplayer('readyforpreroll', () => )
// ubplayer.ima.on('adBreakReady', player.ima.play);

ubplayer.on('ads-request',function(response){
    console.log('ubpalyer ads requeseted');
    // console.log(response);
    ubplayer.ima.addEventListener(google.ima.AdEvent.Type.LOADED,
          event => {
            console.log('LOADED event');
                  console.log(event.getAd());
          }
      );
});
  
  
  // ubplayer.on("ads-manager", function(response){
  //   console.log('ads-manager_loaded');
  //   console.log(response.target.ubplayer.ima); 
  // });

  // ubplayer.on('adstart',function(){
  //     console.log('Ad Started');
  //     ubplayer.ima.addEventListener(google.ima.AdEvent.Type.STARTED, function(){
  //       // ubplayer.pause();
  //       console.log('me clicked');
  //     });  
  // });
 
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

  ubplayer.on('play', () => { ubplayer.logo().show(); });
  ubplayer.on('pause', () => { ubplayer.logo().show(); });
   
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
  }
  const box = document.querySelector('#unibots-video');
  document.addEventListener('scroll', function () {
      if(isInViewport(box)){
          console.log('play --> ');
            if(ubplayer.ads.inAdBreak()){
                  ubplayer.pause();
                  // ubplayer.ima.pauseAd();
            }else{
              ubplayer.play();
              // ubplayer.ima.resumeAd();
            }
            ubplayer.ima.resumeAd();
          }else{
          console.log('pause -->');
          ubplayer.pause();
            if(ubplayer.ads.inAdBreak()){
                ubplayer.ima.pauseAd();
            }
        }
  }, {
      passive: true
  });
  
}
 function ready(fn){if(document.readyState!='loading'){fn()}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn)}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn()})}}window.ready(function(){var html='';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='#videoBox{border:10px solid #212223;transition:0.5s}video{max-width:100%;vertical-align:bottom}#videoBox.out{position:fixed;bottom:0;right:0;width:500px;z-index:999;animation:an 0.5s}.out{position:fixed;bottom:0;right:10px;width:500px;z-index:999;animation:an 0.5s}.video-js .vjs-control.vjs-close-button{right:-12px!important;top:-3em!important}.ub_player,#unibots-video{max-width:400px;margin:20px 0}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,.vjs-icon-cancel:before{color:black!important}@media (max-width:481px){.out{width:350px!important}}#unibots-video .vjs-control-bar,#unibots-video .vjs-play-progress,#unibots-video .vjs-slider-bar{font-family:"VIDEOJS"!important;display:flex!important;visibility:visible!important;opacity:1!important;transition:visibility .1s,opacity .1s!important;line-height:normal!important}#unibots-video .vjs-icon-placeholder,#unibots-video .vjs-control-text{font-family:VideoJS!important;font-size:unset!important;line-height:unset!important;color:#fff!important}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule}else{css.appendChild(document.createTextNode(rule))}document.getElementsByTagName('head')[0].appendChild(css)});