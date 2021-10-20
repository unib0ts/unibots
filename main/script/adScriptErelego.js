mybotBlockedClientsName = ['astrologycircle', 'boldsky', 'daijiworld', 'drivespark', 'filmibeat', 'gizbot', 'shrtechs', 'sunsigns'];

mybotDomainUrl = (window.location.host).split(".");
mybotBlockedClientName = mybotDomainUrl.filter(mybotDomainUrl => mybotBlockedClientsName.includes(mybotDomainUrl));
mybotBlockedClientName = mybotBlockedClientName.toString();

mybotBlockedUrl = 'https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/blocks/erelego/blocks' + capitalizeFLetter(mybotBlockedClientName) + '.json';

var ISUBP_BLOCKED = false;

function checkBlocked(url, clientName) {
  return new Promise((resolve, reject) => {
      let urlToCheck = window.location.host + window.location.pathname + window.location.search;
      fetch(url)
          .then(response => response.json())
          .then(data => {
              data = data[clientName];
              if (data) {
                  data = data.urls;
                  if (data.includes(urlToCheck)) {
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

checkBlocked(mybotBlockedUrl, mybotBlockedClientName).then(() => {
     ISUBP_BLOCKED = true;
    console.log('Page is allowed for UBP');
}).catch(() => {
    console.log('Page is not allowed for UBP');
})

function capitalizeFLetter(input) {
  var string = input;
  x = string.charAt(0).toUpperCase() + string.slice(1);
	 return x;
}
