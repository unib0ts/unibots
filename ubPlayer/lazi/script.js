function mobileCheck() {
    var check = false;
    (function (a) {
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4)
            )
        )
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

if (!mobileCheck()) {
    function loadDynamicStyles(url) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        document.getElementsByTagName("HEAD")[0].appendChild(link);
    }

    loadDynamicStyles(
        "https://cdn.jsdelivr.net/npm/video.js@7.11.8/dist/video-js.min.css"
    );
    loadDynamicStyles(
        "https://cdn.jsdelivr.net/npm/videojs-logo@2.1.4/dist/videojs-logo.css"
    );
    loadDynamicStyles(
        "https://cdn.jsdelivr.net/npm/videojs-contrib-ads@6.8.0/dist/videojs.ads.css"
    );
    loadDynamicStyles(
        "https://cdn.jsdelivr.net/npm/videojs-ima@1.11.0/dist/videojs.ima.css"
    );

    function loadDynamicScript(url, tag, callback) {
        let s1 = document.createElement("script");
        s1.setAttribute("src", url);
        document.getElementsByTagName("body")[0].appendChild(s1);
        s1.onload = function () {
            scripts[tag] = true;
            if (callback) {
                callback();
            }
        };
    }

    var scripts = {
        vjs: false,
        vjs_logo: false,
        vjs_ads: false,
        vjs_ima: false,
        "can-autoplay": false,
    };

    function listen_scripts() {
        var ub_interval = setInterval(() => {
            flag = false;
            for (x in scripts) {
                if (scripts[x] == false) {
                    flag = true;
                }
            }
            if (!flag) {
                console.log("all loaded");
                console.log(scripts);
                video_ub();
                clearInterval(ub_interval);
            }
        }, 500);
    }

    listen_scripts();

    let ima = document.createElement("script");
    ima.setAttribute(
        "src",
        "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
    );
    document.getElementsByTagName("body")[0].appendChild(ima);

    ima.onload = function () {
        load_player();
        loadDynamicScript(
            "https://vjs.zencdn.net/7.11.4/video.min.js",
            "vjs",
            post_scripts
        );
    };

    function load_player() {
        //for unsticky
        // var myPlayer = '<video id="content_video" class="video-js" playsinline controls="true" preload="auto"></video>';
        //for Sticky
        var myPlayer =
            '<div id="ubVideo" class="ubsticky"><video id="content_video" class="video-js" playsinline controls="true" preload="auto" poster="https://picsum.photos/seed/picsum/640/360"></video></div>';
        // document.getElementsByClassName("ub_player")[0].innerHTML = myPlayer;
        document.getElementById("unibots-video").innerHTML = myPlayer;
    }

    let post_scripts = () => {
        console.log(scripts);
        loadDynamicScript(
            "https://cdn.jsdelivr.net/npm/videojs-logo@2.1.4/dist/videojs-logo.min.js",
            "vjs_logo"
        );
        loadDynamicScript(
            "https://cdn.jsdelivr.net/npm/videojs-contrib-ads@6.8.0/dist/videojs.ads.js",
            "vjs_ads"
        );
        loadDynamicScript(
            "https://cdn.jsdelivr.net/npm/videojs-ima@1.11.0/dist/videojs.ima.js",
            "vjs_ima"
        );
        loadDynamicScript(
            "https://cdn.jsdelivr.net/npm/can-autoplay@3.0.0/build/can-autoplay.min.js",
            "can-autoplay"
        );
    };

    let video_ub = () => {
        var autoplayAllowed = false;
        var autoplayRequiresMute = false;
        var ubPlayer;
        var wrapperDiv;

        function checkUnmutedAutoplaySupport() {
            canAutoplay
                .video({ timeout: 500, muted: false })
                .then(function (response) {
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
            canAutoplay
                .video({ timeout: 500, muted: true })
                .then(function (response) {
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
                });
        }

        function initPlayer() {
            // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            var isMobile = true;

            var video = document.getElementById("content_video");
            videojs.browser.IS_IOS ? video.setAttribute("playsinline", "") : "";

            var vjsOptions = {
                autoplay: false,
                muted: false,
                bigPlayButton: false,
                // fluid: isMobile ? true : false,
                debug: true,
                width: isMobile ? 400 : 640,
                height: isMobile ? 225 : 360,
            };
            console.log(vjsOptions);

            ubPlayer = videojs("content_video", vjsOptions);
            ubPlayer.src({
                type: "video/mp4",
                src: "https://cdn.unibots.in/top_indian_sweet.mp4",
            });
            ubPlayer.responsive(true);

            var imaOptions = {
                id: "content_video",
                // adTagUrl: 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&vid=short_onecue&correlator=',
                adTagUrl: "https://video.unibots.in/clients/lazi/ads.xml",
                disableCustomPlaybackForIOS10Plus: true,
                contribAdsSettings: {
                    debug: true,
                    timeout: 8000,
                    prerollTimeout: 12000,
                    //postrollTimeout: 12000
                },
                adsRenderingSettings: { loadVideoTimeout: 16e3 },
            };

            ubPlayer.ima(imaOptions);

            ubPlayer.on(
                "adserror",
                function (err) {
                    console.log("ads error!");
                    console.log(err);
                }.bind(ubPlayer)
            );

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
            //close player on video end.
            ubPlayer.on("timeupdate", function () {
                if (ubPlayer.currentTime() == ubPlayer.duration()) {
                    console.log("video is ended");
                    ubPlayer.dispose();
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

            // function isInViewport(el) {
            //     const rect = el.getBoundingClientRect();
            //     return  rect.bottom > 0 &&
            //             rect.right > 0 &&
            //             rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
            //             rect.top < (window.innerHeight || document.documentElement.clientHeight);
            // }
            // const currentPlayer = document.querySelector('#unibots-video');
            // window.addEventListener('scroll', function () {
            //     var targetDiv = document.getElementById("ubVideo");

            //     if(isInViewport(currentPlayer)){
            //       if(targetDiv.classList.contains("ubsticky")){
            //         targetDiv.classList.remove("ubsticky");
            //       }
            //     }else{
            //       // console.log("out view");
            //       // console.log(targetDiv.classList.contains("ubsticky"));
            //       if(!targetDiv.classList.contains("ubsticky")){
            //         targetDiv.classList.add("ubsticky");
            //       }
            //     }
            // // }, {
            // //     passive: true
            // });
        }

        function initAdDisplayContainer() {
            ubPlayer.ima.initializeAdDisplayContainer();
            wrapperDiv.removeEventListener(startEvent, initAdDisplayContainer);
        }

        var startEvent = "click";
        checkUnmutedAutoplaySupport();
    };
}
function ready(fn) {
    if (document.readyState != "loading") {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", fn);
    } else {
        document.attachEvent("onreadystatechange", function () {
            if (document.readyState != "loading");
            fn();
        });
    }
}
window.ready(function () {
    var html = '<div id="unibots-video"></div>';
    var element = document.querySelector("body");
    var child = document.createElement("div");
    child.innerHTML = html;
    element.appendChild(child);
    var rule =
        "video{max-width:100%;vertical-align:bottom}#ubVideo{width:fit-content;transition:0.5s}.ubsticky{position:fixed;bottom:0;left:10px;width:400px!important;z-index:999;animation:an 0.8s}.ubsticky .content_video-dimensions{width:400px!important;height:225px!important}.video-js .vjs-control.vjs-close-button{right:-15px!important;top:-24px!important}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,.vjs-icon-cancel:before{color:black!important}";
    var css = document.createElement("style");
    css.type = "text/css";
    if (css.styleSheet) {
        css.styleSheet.cssText = rule;
    } else {
        css.appendChild(document.createTextNode(rule));
    }
    document.getElementsByTagName("head")[0].appendChild(css);
});
