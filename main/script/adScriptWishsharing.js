mybotadTarget = '<script type="text/javascript">google_ad_client = "ca-pub-5200956238394958";google_ad_slot = "wishsharing.com_adx_320x50_1";google_ad_width = 320;google_ad_height = 50;</script><script type="text/javascript" src="//pagead2.googlesyndication.com/pagead/show_ads.js"></script>';
mybotadscrpt = 'var adgf_p1="3766"; var adgf_p2="0"; var adgf_p3="0"; var adgf_p4=""; var adgf_p5=""; var adgFtSc=document.createElement("script"); adgFtSc.id="adg_pixel_footer_script"; document.body.appendChild(adgFtSc);adgFtSc.async=true;var adgScParam="p1="+adgf_p1+"&p2="+adgf_p2+"&p3="+adgf_p3+"&p4="+adgf_p4+"&p5="+adgf_p5;adgFtSc.src="//adgebra.co.in/afpf/afpf.js?"+adgScParam;';
mybotadscrptChild ='<iframe id="adg_footer_pixel_script" src="//adgebra.co.in/afpf/afpf?p1=3766&p2=0&p3=1&p4=&p5=" width="0" height="0" frameBorder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>';

    var ad_scrpt1 = document.createElement('script');
    ad_scrpt1.type = "text/javascript";
    ad_scrpt1.innerText= mybotadscrpt;
    document.getElementsByTagName('head')[0].appendChild(ad_scrpt1);

    var ad_scrpt2 = document.createElement('noscript');
    ad_scrpt2.innerText= mybotadscrptChild;
    document.getElementsByTagName('head')[0].appendChild(ad_scrpt2);

   // ad_scrpt2.onload=function(){
    qw = document.createElement('div');
     qw.id = 'unibots-ad1';


       var ad_scrpt3 = document.createElement('script');
       ad_scrpt3.type = "text/javascript";
    	 ad_scrpt3.setAttribute("data-ad-client", "ca-pub-5200956238394958");
       ad_scrpt3.setAttribute("google_ad_slot", "wishsharing.com_adx_320x50_1");
       ad_scrpt3.setAttribute("google_ad_width", 320);
       ad_scrpt3.setAttribute("google_ad_height", 50);
       // document.getElementById('unibots-ad').appendChild(ad_scrpt3);

       var ad_scrpt4 = document.createElement('script');
       ad_scrpt4.src = "//pagead2.googlesyndication.com/pagead/show_ads.js";
       // document.getElementById('unibots-ad').appendChild(ad_scrpt4);
       qw.appendChild(ad_scrpt3);
       qw.appendChild(ad_scrpt4);
       document.getElementById('unibots-ad').appendChild(qw);
  // }

  loadAd('unibots-ad1');
  // if (document.getElementById('unibots-ad')) {
  //   document.getElementById('unibots-ad').innerHTML = mybotadTarget;
  //   loadAd('unibots-ad');
  // }

   function loadAd(id, adUnits){
   	var elm = document.getElementById(id);
   	var scripts = Array(elm.querySelectorAll("script"));
   	scripts = scripts[0];
   	for(var i=0; i<scripts.length; i++) {
   		oldScript = scripts[i];
   		const newScript = document.createElement("script");
   		var scriptAttr = Array(oldScript.attributes);
   		scriptAttr = scriptAttr[0];
   		for(var j=0; j<scriptAttr.length; j++) {
   			attr = scriptAttr[j];
   			newScript.setAttribute(attr.name, attr.value);
   		}
       newScript.appendChild(document.createTextNode(oldScript.innerHTML));
   		newScript.onload = function() {
   			if(adUnits !== undefined) {
   				smartyads.buildUnits(adUnits);
   			}
   		};
       oldScript.parentNode.replaceChild(newScript, oldScript);
   	}
   }
