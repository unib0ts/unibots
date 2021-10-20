mybotBlockedClientsName = ['docbao', 'bongdaplus', 'dantri'];

mybotDomainUrl = (window.location.host).split(".");
mybotBlockedClientName = mybotDomainUrl.filter(mybotDomainUrl => mybotBlockedClientsName.includes(mybotDomainUrl));
mybotBlockedClientName = mybotBlockedClientName.toString();

mybotBlockedPagesFlag = 1;
mybotBlockedUrl = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/blocks/blocks' + capitalizeFLetter(mybotBlockedClientName) + '.json';

var UBP_BLOCKED = checkBlocked(mybotBlockedUrl, mybotBlockedClientName);

// UBP_BLOCKED.then(() => {
//     console.log('Page is allowed for UBP');
// }).catch(() => {
//     console.log('Page is not allowed for UBP');
// })

function checkBlocked(url, clientName) {
  return new Promise((resolve, reject) => {
      let urlToCheck = window.location.host + window.location.pathname + window.location.search;
      // var isAllowed = false;

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
                      // isAllowed = true;
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
