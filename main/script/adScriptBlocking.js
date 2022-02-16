mybotBlockedClientsName = ['astrologycircle', 'boldsky', 'daijiworld', 'drivespark', 'filmibeat', 'gizbot', 'shrtechs', 'sunsigns', 'vietgiaitri'];

mybotDomainUrl = (window.location.host).split(".");
mybotBlockedClientName = mybotDomainUrl.filter(mybotDomainUrl => mybotBlockedClientsName.includes(mybotDomainUrl));
mybotBlockedClientName = mybotBlockedClientName.toString();

var ISUBP_BLOCKED = false;

function checkBlocked(clientName) {
  return new Promise((resolve, reject) => {
      let urlToCheck = window.location.host+window.location.pathname;
      clientName = clientName.charAt(0).toUpperCase() + clientName.slice(1);
      let blockCheckUrl = 'https://api.unibots.in/block?client='+clientName+'&page='+urlToCheck;
      fetch(blockCheckUrl)
          .then(response => response.json())
          .then(data => {
              if (data) {
                  if(data.status == true){
                      resolve('Page is blocked');
                  }
                  else {
                      reject('Page is allowed');
                  }
              }
          }).catch(() => {
              reject('Block Check Request failed')
          });
  });
}

checkBlocked(mybotBlockedClientName).then(() => {
     ISUBP_BLOCKED = true;
    console.log('Page is allowed for UBP');
}).catch(() => {
    console.log('Page is not allowed for UBP');
})

// function capitalizeFLetter(input) {
//   var string = input;
//   x = string.charAt(0).toUpperCase() + string.slice(1);
// 	 return x;
// }
