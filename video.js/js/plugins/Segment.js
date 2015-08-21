(function() {
  'use strict';
0	
	
	function Segment(video, options){
		var button    = document.querySelector(options.button);
		button.addEventListener('click', function(){
		alert('welcome again');
		var start = document.getElementById("start").value;
		var end = document.getElementById("end").value;
		video.currentTime(start);
		video.play();
		var stopVideoAfter = (end - start) * 1000;
		setTimeout(function(){
	           video.pause();
	       }, stopVideoAfter);
		});
	}

	videojs.plugin('Segment', function(options) {
		alert('welcome');
		var el = this.el();
	    	var video = el.getElementsByTagName('video')[0];
		Segment(options.player, options);
	  });
	}());
