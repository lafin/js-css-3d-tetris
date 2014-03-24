/*global $:false */
'use strict';

var scene = (function() {
  var defaultTranform = {
    x: 0,
    y: 0,
    z: 0,
    rotate: 0
  },
    currentBlockTransform = null,
    numObject = 0,
    translate3d = function(block, opts) {
      currentBlockTransform = currentBlockTransform || defaultTranform;
      for (var i in currentBlockTransform) {
        if (currentBlockTransform.hasOwnProperty(i) && opts.hasOwnProperty(i)) {
          currentBlockTransform[i] += opts[i];
        }
      }
      var transform = 'translate3d(' + currentBlockTransform.x + 'em,' + currentBlockTransform.y + 'em,' + currentBlockTransform.z + 'em)';
      block.css({
        '-webkit-transform': transform,
        '-moz-transform': transform,
        '-ms-transform': transform,
        '-o-transform': transform,
        'transform': transform
      });
    };
  return {
    getBlockId: function() {
      numObject += 1;
      return 'block_added_' + numObject;
    },
    moveBlock: function(block, x, y, z) {
      translate3d($('#' + block + ' > div'), {
        x: x,
        y: y,
        z: z
      });
    }
  };
}());