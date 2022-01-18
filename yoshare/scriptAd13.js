mybotBlockedPagesFlag = 1;
mybotBlockedUrl = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/blocks/blocksYoshare.json';
mybotBlockedClientName = 'Yoshare';

if(typeof mybotBlockedPagesFlag !== 'undefined' && mybotBlockedPagesFlag ==1){
  urlToCheck = window.location.host+window.location.pathname+window.location.search;

  var request = new XMLHttpRequest();
  url = 'https://api.unibots.in/block?client='+mybotBlockedClientName+'&page='+urlToCheck;

  request.open('GET', url, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = request.responseText;
      data = JSON.parse(data);
      // data = data[mybotBlockedClientName];
      if(data) {
        // data = data.urls;
        if(data.status == true){
          return false;
        }
        else{
          mybotubScript();
        }
      }
    }
    else {
      console.log('Block Check Request failed');
      mybotubScript();
    }
  };
  request.onerror = function() {
    console.log('Request failed');
    mybotubScript();
  };
  request.send();
}
else{
  mybotubScript();
}


function mybotubScript() {
	url ="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ubPlayer/main/player.js";
	ub_vs = document.createElement("script");
	ub_vs.src = url;
	ub_vs.type = "text/javascript";
	document.getElementsByTagName("head")[0].appendChild(ub_vs);

	ub_vs.onload=function(){
		window.unibots = window.unibots || { cmd: [] };
		unibots.cmd.push(function(){
				unibotsPlayer("yoshare");
		});
	}

  var s0 = document.createElement('script');
  	s0.async = "async";
  	s0.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ubHB/main/hb.js";
  	s0.type = "text/javascript";
  	document.getElementsByTagName('head')[0].appendChild(s0);

  	window.unibotshb = window.unibotshb || { cmd: [] };
  	unibotshb.cmd.push(() => {
  	    ubHB("yoshare");
  	});
}
