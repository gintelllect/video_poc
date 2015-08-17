/**
 * Created by ashish on 9/7/15.
 */

(function() {
  'use strict';

  function capture(video, options) {
    var button    = document.querySelector(options.button);
    var container = document.querySelector(options.container);

    button.addEventListener('click', function() {
      var canvas = document.createElement('canvas');
      canvas.className = (options.addtionalClass) ? 'canvas' : 'canvas ' + options.addtionalClass;

      var context = canvas.getContext('2d');
      var width  = options.width  || 50;
      var height = options.height || 50;

      draw(video, context, width, height);
      container.appendChild(canvas);
    });
  };

  function draw(v,c,w,h) {
    if(v.paused || v.ended) return false;
    console.log(w,h);
    c.drawImage(v,0,0,w,h);
  }

  videojs.plugin('capture', function(options) {
    var el = this.el();
    var video = el.getElementsByTagName('video')[0];

    capture(video, options);
  });
}());

