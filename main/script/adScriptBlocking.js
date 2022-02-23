mybotBlockedClientsName = ['astrologycircle', 'boldsky', 'daijiworld', 'drivespark', 'filmibeat', 'gizbot', 'shrtechs', 'sunsigns', 'vietgiaitri', 'suara', 'bolatimes', 'matamata', 'agrifarming', 'ettoday', 'agniban', 'jagran', 'epapergujaratsamachar', 'onlymyhealth', 'jagranjosh', 'naidunia', 'techring', 'navodayatimes', 'inextlive', 'techwead', 'herzindagi', 'mintah', 'hitekno'];

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
                      reject('Page is blocked');
                  }
                  else {
                      resolve('Page is allowed');
                  }
              }
          }).catch(() => {
              reject('Block Check Request failed')
          });
  });
}

checkBlocked(mybotBlockedClientName).then(() => {
     ISUBP_BLOCKED = true;
    console.log('VastTags is allowed for UBP');
}).catch(() => {
    console.log('VastTags is not allowed for UBP');
})

// function capitalizeFLetter(input) {
//   var string = input;
//   x = string.charAt(0).toUpperCase() + string.slice(1);
// 	 return x;
// }
