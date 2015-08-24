(function(angular) {
	// Define a angular controller.
	angular.module("video-segmentation", [])
		   .controller("videoPlayerController", function($scope) {
				// Initialize and load the video Player
				$scope.player = videojs('video_source');
				$scope.player.startTime = 20;
				$scope.player.wavesurfer({
					src: 'http://vjs.zencdn.net/v/oceans.mp4',
					msDisplayMax: 10,
					waveColor: "grey",
					progressColor: "black",
					cursorColor: "black",
					hideScrollbar: true
				});
				$scope.player.ready(function() {
					this.hotkeys({
						volumeStep: 0.1,
						seekStep: 5,
						enableMute: true,
						enableFullscreen: true,
						enableNumbers: true
					});
				});
				$scope.startSegment = function() {
					// Define a scope variable and save player's current time there.
					$scope.segmentStartTime = $scope.player.currentTime();
				};
				
				$scope.endSegment = function() {
					// Define a scope variable and save player's current time there.
					$scope.segmentEndTime = $scope.player.currentTime();
					alert("TODO: Create a Segment using JS APIs. Append the created Segments to video_segment div. Read more about angular.element API.");
				};
				
				$scope.keyPressEvent = function() {
					alert("TODO: Need to implement keyboard event handler");
				};
		   });
})(angular);