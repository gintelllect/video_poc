var video = document.getElementById("v0");
console.log(video);
video.addEventListener("loadedmetadata", initScreenshot);
video.addEventListener("playing", startScreenshot);
video.addEventListener("pause", stopScreenshot);
video.addEventListener("ended", stopScreenshot);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var ssContainer = document.getElementById("screenShots");
var videoHeight, videoWidth;
var drawTimer = null;

function initScreenshot() {
  videoHeight = video.videoHeight;
  videoWidth = video.videoWidth;
  canvas.width = videoWidth;
  canvas.height = videoHeight;
}

function startScreenshot() {
  if (drawTimer == null) {
    drawTimer = setInterval(grabScreenshot, 1000);
  }

}

function stopScreenshot() {
  if (drawTimer) {
    clearInterval(drawTimer);
    drawTimer = null;
  }
}

function grabScreenshot() {
  timeupdate(video);
  //console.log(videoWidth+'--'+videoHeight)
  ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
  var img = new Image();
  img.src = canvas.toDataURL("image/png");
  img.width = 120;
//  console.log(img.src);

  ssContainer.appendChild(img);
}

function timeupdate(video){
   var start=200;
   var end = 720;
    var duration = video.duration;
    var pixel = (end-start)/duration;
    var whereYouAt = video.currentTime;
    var canvas = document.getElementById("canvas");
    canvas.style.left = 200 + whereYouAt * pixel +'px';
  }
var vid = $('#v0')[0]; // jquery option
var length = vid.currentTime;

$('#set-height').mousewheel(function(event) {

    vid.currentTime = vid.currentTime + (event.deltaY * -1) ;
	timeupdate(vid);

});

