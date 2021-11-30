window.unibots = window.unibots || { cmd: [] };
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

runCMD = () => {
    while (unibots.cmd.length > 0) {
        unibots.cmd[0]()
        unibots.cmd.shift()
    }
}

var mappings = {
  adCode: [],
  sizes: [],
  adId: []
};

setInterval(() => {
    runCMD();
}, 500);

unibotsAPS = (clientName) => {
    let clientname = clientName
    let url = '';
        url = `https://cdn.unibots.in/aps/${clientName}.json`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            clientData = data;
              startFuncAPS(clientData);
        })
        .catch(err => console.error(err));
}

checkAPSDivs = (divsAPS) => {
    return new Promise(
        (resolve, reject) => {
            try {
                let counterAPS = 0;
                let divsLoadedAPS = [];
                let divFoundAPS = false;
                let ub_interval_div_check = setInterval(() => {
                        if (document.getElementById(divsAPS) !== null) {
                            divFoundAPS = true;
                    }
                    if (divFoundAPS) {
                        clearInterval(ub_interval_div_check);
                        resolve({ divsLoadedAPS, counterAPS });
                    }
                }, 500);
            } catch (error) {
                reject({ error })
            }

        }
    )
}

startFuncAPS = (data) => {
    var s0 = document.createElement("script");
    s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
    s0.async = "async";
    document.getElementsByTagName("head")[0].appendChild(s0);

    let divArray = clientData.mappings_ub_config[0].adId;
    checkAPSDivs(divArray).then(() => {
      initFunctionAPS(data);
    });
}

initFunctionAPS = (data) => {
    for (key in data.mappings_ub_config) {
      mappings.adCode.push(data.mappings_ub_config[key].adUnitName);
      mappings.adId.push(data.mappings_ub_config[key].adId);
      mappings.sizes.push(data.mappings_ub_config[key].sizes);
    }

    apSlots = [];

    for(let ub_i = 0 ; ub_i < mappings.adCode.length; ub_i++) {
      apSlotTemp = {
        slotID: mappings.adId[ub_i],
        slotName: mappings.adCode[ub_i],
        sizes: mappings.sizes[ub_i]
      }
      apSlots.push(apSlotTemp);
   }

    googletag.cmd.push(function() {
      googleDefine(mappings.adCode, mappings.sizes, mappings.adId);
      googletag.pubads().disableInitialLoad();
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
    });

    !function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:
    function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function()
    {},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A
    .async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}
    ("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
    // initialize apstag and have apstag set bids on the googletag slots when they are returned to the
    apstag.init({
      pubID: '8282b9c6-324d-4939-b1ea-958d67a9e637',
      adServer: 'googletag',
      bidTimeout: 2000,
      schain: {
           complete: 1,
           ver:'1.0',
           nodes: [
             {
                asi:'aps.amazon.com',
                sid: data.sid, // Same seller_id for the publisher in sellers.json
                hp:1
              }
           ],
      }
    });

    // request the bids for the four googletag slots
    apstag.fetchBids({
    slots: apSlots,
    }, function(bids) {
    // set apstag bids, then trigger the first request to GAM
      googletag.cmd.push(function() {
        apstag.setDisplayBids();
        googletag.pubads().refresh();
      });
    });
}

function googleDefine(adCode, sizes, adId){
  for(let i = 0 ; i < mappings.adCode.length; i++) {
      eval('ub_slot'+[i]+ '= '+'googletag.defineSlot(adCode[i], sizes[i], adId[i])');
      var a = eval('ub_slot'+[i]);
      a.addService(googletag.pubads());
    }
}
