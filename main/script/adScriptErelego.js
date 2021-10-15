mybotBlockedPagesFlag = 1;
mybotBlockedUrl = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/blocks/blocksBongdaplus.json';
mybotBlockedClientName = '';
test= window.location.host
// 'm.docbao.vn'
test.split(".")

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
          return false;
        }
        else{
          ubadScript();
        }
      }
    }
    else {
      console.log('Block Check Request failed');
      ubadScript();
    }
  };
  request.onerror = function() {
    console.log('Request failed');
    ubadScript();
  };
  request.send();
}
else{
  ubadScript();
}
