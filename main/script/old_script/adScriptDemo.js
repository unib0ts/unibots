<script src='https://www.googletagservices.com/tag/js/gpt.js'></script>
  <script>
    var googletag = googletag ||{};
      googletag.cmd = googletag.cmd || [],
      googletag.slots = googletag.slots||{}

    googletag.cmd.push(function(){
      var mapping = googletag.sizeMapping()
        .addSize([0,0],[])
        .addSize([320,0],[300, 250])
        .addSize([480,0],[300,600])
        .addSize([720,0],[728,90])
        .addSize([980,0],[970,250])
        .build();

      googletag.defineSlot("/359/theweek.co.uk",[300,250],"dfp-slot-1")
        .addService(googletag.pubads())
        .defineSizeMapping(mapping);
    });

    googletag.cmd.push(function(){
      googletag.pubads().enableAsyncRendering();
      googletag.pubads().collapseEmptyDivs(true);
      googletag.pubads().setCentering(true);
      googletag.pubads().setTargeting("advert-preview","alladslots");
      googletag.enableServices();
    });
  </script>

    <div id="dfp-slot-1">
      <script>
        googletag.cmd.push(function() {
          googletag.display("dfp-slot-1");
        });
      </script>
    </div>
