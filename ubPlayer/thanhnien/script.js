//url blocked for playerlaod
mybotBlockedPagesFlag = 1;
mybotBlockedUrl = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/blocks/blocksThanhnien.json';
mybotBlockedClientName = 'thanhnien';

if(typeof mybotBlockedPagesFlag !== 'undefined' && mybotBlockedPagesFlag ==1){
  urlToCheck = window.location.host+window.location.pathname+window.location.search;

  var request = new XMLHttpRequest();
  url = mybotBlockedUrl;

  request.open('GET', url, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = request.responseText;
      data = JSON.parse(data);
      data = data[mybotBlockedClientName];
      if(data) {
        data = data.urls;
        if(data.includes(urlToCheck)){
          // mybotdiv1 = '';
          return false;
        }
        else{
          getVideoSrc();
        }
      }
    }
    else {
      console.log('Block Check Request failed');
      getVideoSrc();
    }
  };
  request.onerror = function() {
    console.log('Request failed');
    getVideoSrc();
  };
  request.send();
}
else{
  getVideoSrc();
}

function getVideoSrc(){
  let url = 'https://newsbot.unibots.in/get_videos/thanhnien';
  fetch(url).then((res) => {
      res.json().then((result) => {
          // console.log(result.data[0].links[0])
          // resolve(result.data[0].links[0]);
          ubPlayer_scripts(vdoSrc = result.data[0].links[0]);
      })
  }).catch((error) => {
      console.log(error);
      // resolve(process.env.VIDEO_SRC_DEFAULT)
      ubPlayer_scripts();
  });
}

function ubPlayer_scripts(VideoSrc = 'https://cdn.unibots.in/yoga.mp4') {

  function isMobile() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  function loadDynamicStyles(url) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    document.getElementsByTagName('HEAD')[0].appendChild(link);
  }

  loadDynamicStyles("https://cdn.jsdelivr.net/npm/video.js@7.11.8/dist/video-js.min.css");
  loadDynamicStyles("https://cdn.jsdelivr.net/npm/videojs-contrib-ads@6.8.0/dist/videojs.ads.css");
  loadDynamicStyles("https://cdn.jsdelivr.net/npm/videojs-ima@1.11.0/dist/videojs.ima.css");


  function loadDynamicScript(url, tag, callback) {
    var s1 = document.createElement("script");
    s1.setAttribute("src", url);
    document.getElementsByTagName('body')[0].appendChild(s1);
    s1.onload = function () {
        scripts[tag] = true;
        if (callback) { callback() }
    }
  }

  var scripts = {
    "vjs": false,
    "vjs_ads": false,
    "vjs_ima": false,
    "can-autoplay": false
  }

  function listen_scripts() {
    var ub_interval = setInterval(() => {
        flag = false;
        for (x in scripts) {
            if (scripts[x] == false) { flag = true };
        }
        if (!flag) {
            // console.log('all loaded');
            console.log(scripts);
            clearInterval(ub_interval);
            isMobile() ? isNearViewport(document.querySelector('#unibots-video')) : checkUnmutedAutoplaySupport();
            // isNearViewport(document.querySelector('#unibots-video'));
        }
    }, 500);
  }

  // listen_scripts();


  var ubIma = document.createElement("script");
  ubIma.setAttribute("src", "https://imasdk.googleapis.com/js/sdkloader/ima3.js");
  document.getElementsByTagName("body")[0].appendChild(ubIma);

  ubIma.onload = function () {
    // load_player();
    loadDynamicScript("https://vjs.zencdn.net/7.11.4/video.min.js","vjs",post_scripts);

    var myPlayer ='<div id="ubVideo" class="ub-unloaded"><video id="content_video" class="video-js" playsinline controls="true" preload="auto"></video></div>';

    var ub_divsToCheck = {
        "unibots-video": false,
    };

    var ub_interval_div_check = setInterval(() => {
            flag = false;
            checkFlag = false;
            for (x in ub_divsToCheck) {
                if (document.getElementById(x) !== null) {
                    ub_divsToCheck[x] = true;
                    checkFlag = true;
                }
            }
            for (x in ub_divsToCheck) {
                if (ub_divsToCheck[x] == false) {
                    flag = true;
                }
            }
            if (!flag && checkFlag) {
              if(document.getElementById('unibots-video')){
                document.getElementById('unibots-video').innerHTML= myPlayer;
                listen_scripts();
              }
              clearInterval(ub_interval_div_check);
            }
    }, 500);
  };

  var post_scripts = () => {
    loadDynamicScript("https://cdn.jsdelivr.net/npm/videojs-contrib-ads@6.8.0/dist/videojs.ads.js", "vjs_ads");
    loadDynamicScript("https://cdn.jsdelivr.net/npm/videojs-ima@1.11.0/dist/videojs.ima.js", "vjs_ima");
    loadDynamicScript("https://cdn.jsdelivr.net/npm/can-autoplay@3.0.0/build/can-autoplay.min.js", "can-autoplay");
  }

  var autoplayAllowed = false;
  var autoplayRequiresMute = false;
  var ubPlayer;
  var wrapperDiv;
  var xml_path;
  var stickyFlag = false;
  var isPlayerViewedOnce = false;
  var nearViewportFlag = false;
  var viewportfirstFlag = false;
  var checkFiftyViewportOne = false;
  var checkFiftyViewportTwo = false;
  var atleastOneAdServed = false;
  var isPaused = true;
  var PlayerSelector = document.querySelector('#unibots-video');

  function checkUnmutedAutoplaySupport() {
    canAutoplay.video({ timeout: 500, muted: false }).then(function (response) {
            if (response.result === false) {
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
    canAutoplay.video({ timeout: 500, muted: true }).then(function (response) {
            if (response.result === false) {
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

    if(document.getElementById('unibots-video')){
        // var video = document.getElementById('content_video');
        // videojs.browser.IS_IOS ? video.setAttribute('playsinline', '') : '';
        let adsIndex = 1;
        let firstFlag = true;

        var vjsOptions = {
            autoplay: false,
            muted: false,
            loadingSpinner: false,
            bigPlayButton: false,
            width: isMobile() ? 320 : 640,
            height: isMobile() ? 180 : 360,
            controlBar: {
                volumePanel: {
                    inline: false,
                    vertical: true
                },
                'pictureInPictureToggle': false,
                'fullscreenToggle': false,
            }
        }

        ts = + new Date();
        var desc_url = encodeURIComponent(window.location.href);

      adsObj = (true) ? {
        adx1: `https://googleads.g.doubleclick.net/pagead/ads?client=ca-video-pub-2730263451308801&slotname=thanhnien_adx1_preroll&ad_type=video&description_url=${desc_url}&max_ad_duration=350000000&sdmax=350000000&videoad_start_delay=0&vpmute=0&vpa=auto&adsafe=medium&hl=vn`,
        adx2: `https://googleads.g.doubleclick.net/pagead/ads?client=ca-video-pub-5200956238394958&slotname=thanhnien_adx2_preroll&ad_type=video&description_url=${desc_url}&max_ad_duration=350000000&sdmax=350000000&videoad_start_delay=0&vpmute=0&vpa=auto&adsafe=medium&hl=vn`,
        gpt1: `https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/bongtrend_gpt1_preroll&description_url=${desc_url}&tfcd=0&npa=0&sz=344x258%7C400x225%7C640x360&gdfp_req=1&output=xml_vast4&unviewed_position_start=1&env=vp&impl=s&vpos=preroll`,
        gpt2: `https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/bongtrend_gpt1_preroll&description_url=${desc_url}&tfcd=0&npa=0&sz=344x258%7C400x225%7C640x360&gdfp_req=1&output=xml_vast4&unviewed_position_start=1&env=vp&impl=s&vpos=preroll`,
      } : {
        adx1: `https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=`,
        adx2: `https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=`,
        gpt1: `https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=`,
        gpt2: `https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=`,
      }
      adsArray = [
          {
              ads: [adsObj.gpt1],
              delay: 1,
          },
          {
              ads: [adsObj.gpt2],
              delay: 0,
          },
          {
              ads: [adsObj.adx2],
              delay: 5,
          },
          {
              ads: [adsObj.adx1],
              delay: 0,
          },
          {
              ads: [adsObj.gpt2],
              delay: 5,
          },
          {
              ads: [adsObj.gpt1],
              delay: 0,
          },
          {
              ads: [adsObj.gpt2],
              delay: 30,
          },
          {
              ads: [adsObj.gpt1],
              delay: 0,
          },
          {
              ads: [adsObj.adx2],
              delay: 5,
          },
          {
              ads: [adsObj.gpt1],
              delay: 5,
          },
          {
              ads: [adsObj.gpt2],
              delay: 0,
          },
          {
              ads: [adsObj.adx1],
              delay: 5,
          },
          {
              ads: [adsObj.adx2],
              delay: 30,
          },
          {
              ads: [adsObj.adx1],
              delay: 5,
          },
          {
              ads: [adsObj.gpt2],
              delay: 5,
          },
          {
              ads: [adsObj.gpt1],
              delay: 0,
          },
          {
              ads: [adsObj.gpt1],
              delay: 10,
          },
          {
              ads: [adsObj.gpt2],
              delay: 0,
          }
      ];
        let makePrerollRequest = (index, singleAdStructure = false) => {
          let resp = `<vmap:VMAP xmlns:vmap="http://www.iab.net/videosuite/vmap" version="1.0">`
          let respFirstChild = `<vmap:AdBreak timeOffset="start" breakType="linear" breakId="preroll">
                                  <vmap:AdSource id="preroll-ad-1" allowMultipleAds="false" followRedirects="true">
                                      <vmap:AdTagURI templateType="vast3">
                                      <![CDATA[${adsArray[index]["ads"][0]}]]>
                                      </vmap:AdTagURI>
                                  </vmap:AdSource>
                                </vmap:AdBreak>`;
          let respEnd = `</vmap:VMAP>`;
          if (!singleAdStructure) {
            let respSecondChild = `<vmap:AdBreak timeOffset="start" breakType="linear" breakId="preroll">
                                  <vmap:AdSource id="preroll-ad-1" allowMultipleAds="false" followRedirects="true">
                                      <vmap:AdTagURI templateType="vast3">
                                      <![CDATA[${adsArray[index]["ads"][1]}]]>
                                      </vmap:AdTagURI>
                                  </vmap:AdSource>
                                </vmap:AdBreak>`;

            let finalResponse = resp + respFirstChild + respSecondChild + respEnd;
            return finalResponse;
          }
          else {
            let finalResponse = resp + respFirstChild + respEnd;
            return finalResponse;
          }
        }
        // var makePrerollRequestNew = (index, singleAdStructure = false) => {
        //     return adsArray[index]["ads"][0]
        // }

        ubPlayer = videojs('content_video', vjsOptions);
        ubPlayer.src({
            type: "video/mp4",
            src: VideoSrc,
        });

        var imaOptions = {
            id: "content_video",
            adsResponse: makePrerollRequest(0, true),
            disableCustomPlaybackForIOS10Plus: true,
            contribAdsSettings: {
                debug: true,
            },
            // autoPlayAdBreaks: false,
            vastLoadTimeout: 2e4,
            adsManagerLoadedCallback: () => {
                  ubPlayer.ima.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, () => {
                      ubPlayer.ima.getAdsManager().destroy();
                      ubPlayer.ima.controller.sdkImpl.adsLoader.contentComplete();
                      ubPlayer.ima.changeAdTag(null);
                      // ubPlayer.ima.AdsLoader.contentComplete();
                      if (adsIndex < adsArray.length) {
                        newIMA(adsIndex++);
                      }
                  });
            }
        };
        ubPlayer.ima(imaOptions);

        let newIMA = (adsIndex,isSkipped = false) => {
          if(checkPlayerPlaying() || (adsIndex <= 1)){
              // ubPlayer.ima.changeAdTag(makePrerollRequestNew(adsIndex));
            ubPlayer.ima.controller.settings.adsResponse = makePrerollRequest(adsIndex, true);
              setTimeout(() => {
                  ubPlayer.ima.requestAds();
              }, adsArray[adsIndex].delay * 1000); //While using Defined ad dealy
          }
        }

        ubPlayer.on('adserror', function (err) {
            if (err.data.AdError.getErrorCode() == 1009) {
                ubPlayer.ima.controller.sdkImpl.adsLoader.contentComplete();
                ubPlayer.ima.changeAdTag(null);
                // ubPlayer.ima.AdsLoader.contentComplete();
                if (adsIndex < adsArray.length) {
                    newIMA(adsIndex++);
                }
            }
            else {
                console.log(err.data.AdError.getMessage());
            }
            //Autorun Video Player
            runVideo();
            }.bind(ubPlayer)
        );

        ubPlayer.on('loadedmetadata', () => {
          //Show Player on Content meta data Load
          showPlayer();
        });

        const runVideo = () => {
          if (firstFlag) {
              firstFlag = false;
              if (autoplayAllowed) {
                  if (autoplayRequiresMute) {
                      ubPlayer.muted(true);
                  }
                  ubPlayer.muted(true);
                  ubPlayer.autoplay(true);
                  ubPlayer.play();
              }

              if (!autoplayAllowed) {
                  ubPlayer.muted(true);
                  ubPlayer.autoplay(true);
                  ubPlayer.play();

                  if (navigator.userAgent.match(/iPhone/i) ||
                      navigator.userAgent.match(/iPad/i) ||
                      navigator.userAgent.match(/Android/i)) {
                      startEvent = 'touchend';
                  }

                  wrapperDiv = document.getElementById('content_video');
                  wrapperDiv.addEventListener(startEvent, initAdDisplayContainer);
              }
          }

      }
      ubPlayer.on('adsready', () => {  runVideo(); });

      ubPlayer.on('play', () => {
          ubPlayer.volume(0.1);
          if (!ubPlayer.muted()) {
              ubPlayer.muted(true);
          }
      });

      // var button = videojs.getComponent('CloseButton');
      // var CloseButton = videojs.extend(button, {
      //     constructor: function () {
      //         button.apply(this, arguments);
      //         this.controlText("Close Player");
      //         // this.addClass('ubp-close');
      //     },
      //     handleClick: function () {
      //         this.player().dispose();
      //     }
      // });
      // videojs.registerComponent('CloseButton', CloseButton);
      // ubPlayer.addChild('CloseButton');

      var button = videojs.getComponent("button");
      var SbButton = videojs.extend(button, {
          constructor: function () {
              button.apply(this, arguments);
              this.controlText("Subscribe");
              this.addClass("ubp-cbutton");
          },
          handleClick: function () {
              window.open(
                  "https://thanhnien.vn/thoi-su/",
                  "_blank"
              );
          },
      });
      videojs.registerComponent("ubpButton", SbButton);
      ubPlayer.addChild("ubpButton");


      //close player on video end.
      ubPlayer.on('timeupdate', function () {
          if (ubPlayer.currentTime() == ubPlayer.duration()) {
              console.log('video is ended');
              ubPlayer.dispose();
          }
      });
      setLogo();


      ubPlayer.on('play', () => { console.log("Player Play"); isPaused = false; });
      ubPlayer.on('pause', () => { console.log("Player paused"); isPaused = true; });
  }
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight);
}

function isNearViewport(el) {
  let observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
          if (!viewportfirstFlag) {
              checkUnmutedAutoplaySupport();
            viewportfirstFlag = true;
          }
          nearViewportFlag = true;
      }
  }, { threshold: [0], rootMargin: "140px 0px 140px 0px" });
  observer.observe(el);
}

  function checkPlayerPlaying(){
    return isPaused ? false : true;
    // return ubPlayer.paused() ? false : true;
  }

  function initAdDisplayContainer() {
    ubPlayer.ima.initializeAdDisplayContainer();
    wrapperDiv.removeEventListener(startEvent, initAdDisplayContainer);
  }

  var startEvent = 'click';

  function showPlayer() {
    document.querySelector("#ubVideo").classList.remove("ub-unloaded");
    document.querySelector("#ubVideo").classList.add("ub-loaded");
  }
  function hidePlayer() {
    document.querySelector("#ubVideo").classList.remove("ub-loaded");
    document.querySelector("#ubVideo").classList.add("ub-unloaded");
  }


  function setLogo() {
    let i = document.createElement("a");
    i.href = "https://unibots.in";
    i.target = "_blank";
    i.id = "ubp_logo";
    i.classList.add = "ubp_logo";
    i.innerHTML = '<img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ubPlayer/ub/logo.svg" alt="Unibots.in" style="vertical-align:middle;height:11px">';
    ubPlayer.el_.appendChild(i);
  }
}
function ready(fn){if(document.readyState!='loading'){fn()}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn)}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn()})}}window.ready(function(){var html='';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='video{max-width:100%;vertical-align:bottom}#ubVideo{margin:35px auto;display:flex;justify-content:center}.ubsticky{position:fixed;bottom:0;right:10px;width:400px;z-index:999;animation:an 0.8s;margin:0px!important}.ubsticky_left{position:fixed;bottom:0;left:10px;width:400px;z-index:999;animation:an 0.8s;margin:0px!important}.video-js .vjs-control.vjs-close-button{right:-17px!important;top:-28px!important}#unibots-video-mobile{margin-top:35px}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,.vjs-icon-cancel:before{color:black!important}#ubp_logo{background:#fff;position:absolute;padding:3px 5px 2px 5px;right:0px!important;bottom:35px!important;width:40px!important;border-top-left-radius:8px;border-bottom-left-radius:8px;transition:bottom 0.4s ease-in-out;height:11px!important;font-size:10px;box-sizing:content-box!important;line-height:11px!important}#ubp_logo img{margin:0px!important;box-shadow:none!important;border-radius:0px!important;padding:0px!important;width:100%!important;height:11px!important;object-fit:unset!important;border:none!important}.ubp-cbutton::before{content:"XEM THÊM"}.ubp-cbutton{height:30px!important;border:solid 1px;width:26%!important;background-image:-webkit-linear-gradient(top,rgba(0,0,0,.8),rgba(0,0,0,.7) 40%,rgba(0,0,0,0) 99%)!important;color:#fff!important;cursor:pointer!important;display:inline-block!important;font-family:arial,sans-serif!important;font-weight:normal!important;font-size:14px!important;line-height:normal!important;padding:5px!important;top:0}#unibots-video .vjs-control-bar,#unibots-video .vjs-play-progress,#unibots-video .vjs-slider-bar{font-family:"VIDEOJS"!important;display:flex!important;visibility:visible!important;opacity:1!important;transition:visibility 0.1s,opacity 0.1s!important;line-height:normal!important}#unibots-video .vjs-icon-placeholder,#unibots-video .vjs-control-text{font-family:VideoJS!important;font-size:unset!important;line-height:unset!important;color:#fff!important}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule}else{css.appendChild(document.createTextNode(rule))}document.getElementsByTagName('head')[0].appendChild(css)});