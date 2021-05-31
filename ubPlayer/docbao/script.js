
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
  var myPlayer = '<video id="content_video" class="video-js vjs-layout-small" playsinline autoplay controls="true" preload="auto"></video>';
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
   

  var player = videojs('content_video',{
    fluid: true,
    // height:300,
    width:500,
  });
  player.src({type: 'video/mp4', src: 'https://storage.googleapis.com/gvabox/media/samples/android.mp4'});
  player.autoplay(true);
  player.muted(true);
  player.responsive(true);

  player.logo({
    image: 'https://unibots.in/wp-content/uploads/2019/09/unibot.png',
    position: 'top-right',
    width: 80,
    height: 80
  });
      
  var options = {
    id: 'content_video',
    // adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpostpod&cmsid=496&vid=short_onecue&correlator=',
    adTagUrl: 'https://video.unibots.in/ads.xml?ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1'
  };
  player.ima(options);
  
// var isPlaying = player.currentTime > 0 && !player.paused && !player.ended && player.readyState > player.HAVE_CURRENT_DATA;
// if (!isPlaying) {
//   player.play();
// }

  player.on('ads-request',function(response){
    console.log('ads requeseted');
    // console.log(response);
    player.ima.addEventListener(google.ima.AdEvent.Type.LOADED,
          event => {
            console.log('LOADED event');
                  console.log(event.getAd());
          }
      );
  });
  
  
  // player.on("ads-manager", function(response){
  //   console.log('ads-manager_loaded');
  //   console.log(response.target.player.ima); 
  // });

  // player.on('adstart',function(){
  //     console.log('Ad Started');
  //     player.ima.addEventListener(google.ima.AdEvent.Type.STARTED, function(){
  //       // player.pause();
  //       console.log('me clicked');
  //     });  
  // });
  
  var CloseButton = videojs.getComponent('CloseButton');
    videojs.registerComponent('CloseButton', CloseButton);
    player.addChild('CloseButton');
    player.getChild('CloseButton').on('click', function() {
        console.log('close');
        this.player().dispose();
    });

  player.on('play', () => { player.logo().show(); });
  player.on('pause', () => { player.logo().show(); });
   
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
            if(player.ads.inAdBreak()){
                  player.pause();
                  // player.ima.pauseAd();
            }else{
              player.play();
              // player.ima.resumeAd();
            }
            player.ima.resumeAd();
          }else{
          console.log('pause -->');
          player.pause();
            if(player.ads.inAdBreak()){
                player.ima.pauseAd();
            }
        }
  }, {
      passive: true
  });
  
}
 function ready(fn){if(document.readyState!='loading'){fn()}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn)}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn()})}}window.ready(function(){var html='';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='#videoBox{border:10px solid #212223;transition:0.5s}video{max-width:100%;vertical-align:bottom}#videoBox.out{position:fixed;bottom:0;right:0;width:500px;z-index:999;animation:an 0.5s}.out{position:fixed;bottom:0;right:10px;width:500px;z-index:999;animation:an 0.5s}.video-js .vjs-control.vjs-close-button{right:-12px!important;top:-2.5em!important}.ub_player,#unibots-video{max-width:400px;margin:20px 0}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,.vjs-icon-cancel:before{color:black!important}@media (max-width:481px){.out{width:350px!important}}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule}else{css.appendChild(document.createTextNode(rule))}document.getElementsByTagName('head')[0].appendChild(css)});