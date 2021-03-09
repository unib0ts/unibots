// let sourceArray = [
//       ['https://www.youtube.com/watch?v=6czFoFSp5M8'],
//       ['https://www.youtube.com/watch?v=c8DcwEu94ko']
// ];

var ub_video = document.createElement('video');
ub_video.autoplay = true;
ub_video.controls = "";
ub_video.name = "media";
ub_video.setAttribute("width", "320");
ub_video.setAttribute("height", "240");
// x.setAttribute("controls", "controls");
var ub_source = document.createElement("source");
ub_source.type = "video/mp4";
ub_source.src = 'https://www.youtube.com/watch?v=6czFoFSp5M8';
// var randomNum = Math.floor(Math.random()*(sourceArray.length));
// ub_source.setAttribute("src", ub_array[randomNum][0]);
ub_video.appendChild(ub_source);
console.log(document.getElementsByTagName('video').innerHTML);
// function randomNoRepeats(ub_array) {
//
// }
<video width="320" height="240" autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>

// Initialize the function, which when called, will change the source
// randomNoRepeats(sourceArray);

// Call as function to change the source of the video
// changeVideoSource();
// // Call will randomly select from sourceArray
// changeVideoSource();
