/**
 * Created by ashish on 9/7/15.
 */
(function() {
  'use strict';

  videojs.options.flash.swf = "bower_components/videojs/dist/video-js/video-js.swf";

  var player = videojs('video1');

  //player.controlBar().progressControl.show();
  player.wavesurfer({
    src: 'http://vjs.zencdn.net/v/oceans.mp4',
    msDisplayMax: 10,
    waveColor: "grey",
    progressColor: "black",
    container:"vjs-waveform",
    cursorColor: "black"
   // hideScrollbar: false
  });
  player.capture({
    button:    '.captureButton',
    container: '.canvasContainer',
    width:     1080 / 4,
    height:    720 / 4
  });
  player.Segment({
    button: '.segmentButton',
    player: player	
 });

  player.keyStroke({
        seekStep: 5
  });	
  player.clip();
  player.controlBar.progressControl.show();
}());
