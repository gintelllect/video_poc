/**
 * Created by ashish on 9/7/15.
 */

(function() {
  'use strict';


  videojs.plugin('clip', function(options) {
  });
  videojs.ClipTimeBar = videojs.Component.extend({
    init: function (player, options) {
      videojs.Component.call(this, player, options);
    }
  });
}());

