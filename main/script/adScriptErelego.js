mybotBlockedClientsName = ['docbao', 'bongdaplus', 'dantri'];

mybotDomainUrl = (window.location.host).split(".");
mybotBlockedClientName = mybotDomainUrl.filter(mybotDomainUrl => mybotBlockedClientsName.includes(mybotDomainUrl));
mybotBlockedClientName = mybotBlockedClientName.toString();

mybotBlockedPagesFlag = 1;
mybotBlockedUrl = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/blocks/blocks' + capitalizeFLetter(mybotBlockedClientName) + '.json';

var returnValue = checkBlocked(mybotBlockedUrl, mybotBlockedClientName);
returnValue.then(() => {
  (result) =>{
      console.log('Page is allowed for UBP');
  }
})
console.log(returnValue);

function checkBlocked(url, clientName) {
  return new Promise((resolve, reject) => {
      let urlToCheck = window.location.host + window.location.pathname + window.location.search;
      // let urlToCheck = "bongtrend.com/sreelekha-mitra-showing-off-her-bra-strap";
      fetch(url)
          .then(response => response.json())
          .then(data => {
              data = data[clientName];
              if (data) {
                  data = data.urls;
                  if (data.includes(urlToCheck)) {
                      console.log('Page is blocked');
                      reject('Page is blocked');
                  }
                  else {
                      resolve('Page is allowed');
                  }
              }
          }).catch(() => {
              resolve('Block Check Request failed')
          });
  });
}

function capitalizeFLetter(input) {
  var string = input;
  x = string.charAt(0).toUpperCase() + string.slice(1);
	 return x;
}
