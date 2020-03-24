<?php
require 'vendor/autoload.php';
use MatthiasMullie\Minify;
define('BASEURL', 'https://api.warw.in/cnw1');
define('CDNURL', 'https://cdn.jsdelivr.net/gh/unib0ts/unibots/cnW1');
define('CLIENT', 'cnW1');

function minify_html($buffer) {
	$search = array(
		'/\>[^\S ]+/s',     // strip whitespaces after tags, except space
		'/[^\S ]+\</s',     // strip whitespaces before tags, except space
		'/(\s)+/s',         // shorten multiple whitespace sequences
		'/<!--(.|\s)*?-->/' // Remove HTML comments
	);
	$replace = array(
		'>',
		'<',
		'\\1',
		''
	);
	$buffer = preg_replace($search, $replace, $buffer);
	return $buffer;
}
//
// $common_js = file_get_contents('./frontend/cwc_cfe/js/common2.js');
// $common_js = str_replace('https://api.warw.in/cnw1', BASEURL, $common_js);
// $common_js = str_replace('https://cdn.jsdelivr.net/gh/unib0ts/unibots/cnW1', CDNURL, $common_js);

$script_js = file_get_contents('./frontend/js/script.js');
$script_js = str_replace('https://api.warw.in/cnw1', BASEURL, $script_js);
$script_js = str_replace('https://cdn.jsdelivr.net/gh/unib0ts/unibots/cnW1', CDNURL, $script_js);

// $common_css = file_get_contents('./frontend/cwc_cfe/css/common2.css');
// $common_css = str_replace('https://api.warw.in/cnw1', BASEURL, $common_css);
// $common_css = str_replace('https://cdn.jsdelivr.net/gh/unib0ts/unibots/cnW1', CDNURL, $common_css);

$style_css = file_get_contents('./frontend/css/style.css');
$style_css = str_replace('https://api.warw.in/cnw1', BASEURL, $style_css);
$style_css = str_replace('https://cdn.jsdelivr.net/gh/unib0ts/unibots/cnW1', CDNURL, $style_css);

$minifier = new Minify\CSS();
$minifier->add($style_css);
$style_css = $minifier->minify();

// $minifier_common = new Minify\CSS();
// $minifier_common->add($common_css);
// $common_css = $minifier_common->minify();

$html = file_get_contents('./frontend/index.html');
$html = str_replace('https://api.warw.in/cnw1', BASEURL, $html);
$html = str_replace('https://cdn.jsdelivr.net/gh/unib0ts/unibots/cnW1', CDNURL, $html);
$html = minify_html($html);
$html_injection = "function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}window.ready(function(){var html='{$html}';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='{$style_css}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule;}else{css.appendChild(document.createTextNode(rule));}document.getElementsByTagName('head')[0].appendChild(css);});";

// $arr = explode("\n", $common_js);
// array_shift($arr);
// array_shift($arr);
// array_shift($arr);
// array_shift($arr);
// array_shift($arr);
// array_shift($arr);
// $common_js = implode("\n", $arr);

// $packer = new Tholu\Packer\Packer($script, $encoding, $fastDecode, $specialChars, $removeSemicolons);
$packer = new Tholu\Packer\Packer($script_js, 'Normal', true, false, false);
$packed_script_js = $packer->pack();

// $packer_common = new Tholu\Packer\Packer($common_js, 'Normal', true, false, false);
// $packed_common_js = $packer_common->pack();

$fp = fopen('./backend/src/js/script.js', 'w');
//fwrite($fp, $jquery);
// fwrite($fp, $packed_script_js);
// fwrite($fp, $packed_common_js);
fwrite($fp, $script_js);
// fwrite($fp, $common_js);
fwrite($fp, $html_injection);

fclose($fp);

/*$fp = fopen('./backend/src/js/script.wojq.js', 'w');
fwrite($fp, $html_injection);
fwrite($fp, $packed_script_js);
fclose($fp);*/
$srcfile = './backend/src/js/script.js';
$destfile = '../../unibots/'.CLIENT.'/script.js';
$path = pathinfo($destfile);
if (!file_exists($path['dirname'])) {
		echo "Creating Directory <br>";
    mkdir($path['dirname'], 0777, true);
}
if (!copy($srcfile, $destfile)) {
    echo "File cannot be copied! <br>";
}
else {
    echo "File has been copied! <br>";
}

print("Done!");

?>
function ready(fn){if(document.readyState!='loading'){fn();}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn();});}}window.ready(function(){var html='<mybot> <div id="gabywa"></div> <div class="profile_div"> <div class="mybotstage"> <div class="mybotcubespinner"> <div id="mybotface1" class="mybotface1 mybotface mybotfaceSet11"></div> <div id="mybotface2" class="mybotface2 mybotface mybotfaceSet11"></div> <div id="mybotface3" class="mybotface3 mybotface mybotfaceSet11"></div> <div id="mybotface4" class="mybotface4 mybotface mybotfaceSet11"></div> <div id="mybotface5" class="mybotface5 mybotface mybotfaceSet12"></div> <div id="mybotface6" class="mybotface6 mybotface mybotfaceSet12"></div> <div id="mybotface21" class="mybotface21 mybotface mybotfaceSet21 hideBG"></div> <div id="mybotface22" class="mybotface22 mybotface mybotfaceSet21 hideBG"></div> <div id="mybotface23" class="mybotface23 mybotface mybotfaceSet21 hideBG"></div> <div id="mybotface24" class="mybotface24 mybotface mybotfaceSet21 hideBG"></div> <div id="mybotface25" class="mybotface25 mybotface mybotfaceSet22 hideBG"></div> <div id="mybotface26" class="mybotface26 mybotface mybotfaceSet22 hideBG"></div> </div> </div> <div class="col-hgt-ad" id="adSmall"> <img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/cw.jpg"> </div> </div></mybot>';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='.profile_div{position:fixed;bottom:0;right:0}@keyframes mybotspincube{from,to{-moz-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);-ms-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}12%{-moz-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);-ms-transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}16%{-moz-transform:rotateY(-90deg);-ms-transform:rotateY(-90deg);transform:rotateY(-90deg)}30%{-moz-transform:rotateY(-90deg);-ms-transform:rotateY(-90deg);transform:rotateY(-90deg)}33%{-moz-transform:rotateY(-90deg) rotateZ(90deg);-ms-transform:rotateY(-90deg) rotateZ(90deg);transform:rotateY(-90deg) rotateZ(90deg)}47%{-moz-transform:rotateY(-90deg) rotateZ(90deg);-ms-transform:rotateY(-90deg) rotateZ(90deg);transform:rotateY(-90deg) rotateZ(90deg)}50%{-moz-transform:rotateY(-180deg) rotateZ(90deg);-ms-transform:rotateY(-180deg) rotateZ(90deg);transform:rotateY(-180deg) rotateZ(90deg)}63%{-moz-transform:rotateY(-180deg) rotateZ(90deg);-ms-transform:rotateY(-180deg) rotateZ(90deg);transform:rotateY(-180deg) rotateZ(90deg)}66%{-moz-transform:rotateY(90deg) rotateX(90deg);-ms-transform:rotateY(90deg) rotateX(90deg);transform:rotateY(90deg) rotateX(90deg)}80%{-moz-transform:rotateY(90deg) rotateX(90deg);-ms-transform:rotateY(90deg) rotateX(90deg);transform:rotateY(90deg) rotateX(90deg)}83%{-moz-transform:rotateX(90deg);-ms-transform:rotateX(90deg);transform:rotateX(90deg)}97%{-moz-transform:rotateX(90deg);-ms-transform:rotateX(90deg);transform:rotateX(90deg)}}mybot .mybotcubespinner{-webkit-animation-name:mybotspincube;-webkit-animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;-webkit-animation-duration:24s;animation-name:mybotspincube;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:24s;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:50px 50px 0;-moz-transform-origin:50px 50px 0;-ms-transform-origin:50px 50px 0;transform-origin:50px 50px 0}mybot .mybotcubespinner .mybotface{position:absolute;width:100px;height:100px;border:1px solid #ccc;background:rgba(255,255,255,.8);box-shadow:inset 0 0 20px rgba(0,0,0,.2);text-align:center;border-radius:5px}mybot .mybotcubespinner .mybotface1{-webkit-transform:translateZ(50px);-moz-transform:translateZ(50px);-ms-transform:translateZ(50px);transform:translateZ(50px);background-image:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/11.png);background-repeat:no-repeat;background-size:cover}mybot .mybotcubespinner .mybotface2{-webkit-transform:rotateY(90deg) translateZ(50px);-moz-transform:rotateY(90deg) translateZ(50px);-ms-transform:rotateY(90deg) translateZ(50px);transform:rotateY(90deg) translateZ(50px);background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/12.png);background-repeat:no-repeat;background-size:cover}mybot .mybotcubespinner .mybotface3{-webkit-transform:rotateY(90deg) rotateX(90deg) translateZ(50px);-moz-transform:rotateY(90deg) rotateX(90deg) translateZ(50px);-ms-transform:rotateY(90deg) rotateX(90deg) translateZ(50px);transform:rotateY(90deg) rotateX(90deg) translateZ(50px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033);background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/13.png);background-repeat:no-repeat;background-size:cover}mybot .mybotcubespinner .mybotface4{-webkit-transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);-moz-transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);-ms-transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/14.png);background-repeat:no-repeat;background-size:cover}mybot .mybotcubespinner .mybotface5{-webkit-transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);-moz-transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);-ms-transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/15.png);background-repeat:no-repeat;background-size:cover}mybot .mybotcubespinner .mybotface6{-webkit-transform:rotateX(-90deg) translateZ(50px);-moz-transform:rotateX(-90deg) translateZ(50px);-ms-transform:rotateX(-90deg) translateZ(50px);transform:rotateX(-90deg) translateZ(50px);background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/16.png);background-repeat:no-repeat;background-size:cover}mybot .mybotcubespinner .mybotface21{-webkit-transform:translateZ(50px);-moz-transform:translateZ(50px);-ms-transform:translateZ(50px);transform:translateZ(50px);background-image:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/21.png);background-repeat:no-repeat;background-size:cover}mybot .mybotcubespinner .mybotface22{-webkit-transform:rotateY(90deg) translateZ(50px);-moz-transform:rotateY(90deg) translateZ(50px);-ms-transform:rotateY(90deg) translateZ(50px);transform:rotateY(90deg) translateZ(50px);background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/22.png);background-repeat:no-repeat;background-size:cover}mybot .mybotcubespinner .mybotface23{-webkit-transform:rotateY(90deg) rotateX(90deg) translateZ(50px);-moz-transform:rotateY(90deg) rotateX(90deg) translateZ(50px);-ms-transform:rotateY(90deg) rotateX(90deg) translateZ(50px);transform:rotateY(90deg) rotateX(90deg) translateZ(50px);background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033);background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/23.png);background-repeat:no-repeat;background-size:cover}mybot .mybotcubespinner .mybotface24{-webkit-transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);-moz-transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);-ms-transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);transform:rotateY(180deg) rotateZ(90deg) translateZ(50px);background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/24.png);background-repeat:no-repeat;background-size:cover}mybot .mybotcubespinner .mybotface25{-webkit-transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);-moz-transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);-ms-transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);transform:rotateY(-90deg) rotateZ(90deg) translateZ(50px);background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/25.png);background-repeat:no-repeat;background-size:cover}mybot .mybotcubespinner .mybotface26{-webkit-transform:rotateX(-90deg) translateZ(50px);-moz-transform:rotateX(-90deg) translateZ(50px);-ms-transform:rotateX(-90deg) translateZ(50px);transform:rotateX(-90deg) translateZ(50px);background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/26.png);background-repeat:no-repeat;background-size:cover}mybot .mybotstage{width:100px;height:100px;bottom:50px;position:fixed;right:25px;font-size:15px}.mybotTopBar{background:red;width:100px;height:15px;border-bottom:1px solid #fff;color:#fff;text-align:center;margin:auto;line-height:15px}.mybotPoweredBy{font-size:10px;font-weight:600}.mybotPoweredByBrand{font-size:13px;font-weight:600}.mybotBottomBar{background:red;width:100px;height:15px;color:#fff;margin:auto;line-height:15px;text-align:center;bottom:0;position:absolute;font-size:12px}.mybotSummary{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;font-size:15px}.mybotContent{color:#fff;text-align:center;overflow:hidden}.showBG{display:block}.hideBG{display:none}@-webkit-keyframes mybotpulsate-bck{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(.9);transform:scale(.9)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes mybotpulsate-bck{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(.9);transform:scale(.9)}100%{-webkit-transform:scale(1);transform:scale(1)}}.mybotUpdate{line-height:1}.mybotScoreLiveDot{height:8px;width:8px;background:lawngreen;position:absolute;right:5px;top:20px;border-radius:4px;-webkit-animation:mybotpulsate-bck 1s cubic-bezier(.55,.085,.68,.53) infinite both;animation:mybotpulsate-bck 1s cubic-bezier(.55,.085,.68,.53) infinite both}.test{display:none}.col-hgt-ad{height:50px}.mybotface1test2{position:absolute;bottom:10px;left:10px;background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033);height:100px;width:100px;background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/11.png);background-repeat:no-repeat;background-size:cover}.mybotface2test2{background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/12.png);background-repeat:no-repeat;background-size:cover;position:absolute;left:150px;bottom:10px;height:100px;width:100px}.mybotface3test2{background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033);background-repeat:no-repeat;background-size:cover;position:absolute;left:290px;bottom:10px;height:100px;width:100px;background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/13.png);background-repeat:no-repeat;background-size:cover}.mybotface4test2{background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033);background-repeat:no-repeat;background-size:cover;position:absolute;left:430px;bottom:10px;height:100px;width:100px;background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/14.png);background-repeat:no-repeat;background-size:cover}.mybotface5test2{background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033);background-repeat:no-repeat;background-size:cover;position:absolute;left:570px;bottom:10px;height:100px;width:100px;background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/15.png);background-repeat:no-repeat;background-size:cover}.mybotface6test2{background:#360033;background:-webkit-linear-gradient(to top,#0b8793,#360033);background:linear-gradient(to top,#0b8793,#360033);background-repeat:no-repeat;background-size:cover;position:absolute;left:710px;bottom:10px;height:100px;width:100px;background:url(https://newsbot-images.s3.ap-south-1.amazonaws.com/demo/16.png);background-repeat:no-repeat;background-size:cover}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule;}else{css.appendChild(document.createTextNode(rule));}document.getElementsByTagName('head')[0].appendChild(css);});