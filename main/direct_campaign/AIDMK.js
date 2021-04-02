var mybotstyleSheet='.profile_div{position:fixed;z-index:2147483640;bottom:0;right:10px;width:320px;height:200px;cursor:pointer;pointer-events:all}.carcImage{position:absolute;right:0;width:70px;height:150px;pointer-events:all}.col-hgt-ad{height:50px;width:320px;float:left;background:url(https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/demo/AIDMK_banner.png);position:absolute;bottom:3px;left:0;pointer-events:all}';
var css=document.createElement('style');
css.type='text/css';
css.appendChild(document.createTextNode(mybotstyleSheet));
document.getElementsByTagName('head')[0].appendChild(css);

y1= document.createElement('div');
y1.id = 'dragItem';
y1.className = 'profile_div';
y1.innerHTML ='<img class="carcImage" id="carcImage" src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/demo/AIDMK1.png"><div class="col-hgt-ad" id="adSmall"></div>';
y2 = document.querySelector('body');
y2.appendChild(y1);

document.getElementById('carcImage').addEventListener("click", function(){
 window.open('https://youtu.be/-gPuocLel-4?utm_source=unibots&utm_medium=widget&utm_campaign=direct', '_blank');
});
