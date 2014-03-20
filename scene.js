/*global $:false */
'use strict';

var scene = (function() {
  var offset = {
    top: -10
  },
    defaultTranform = {
      x: 0,
      y: 0,
      z: 0,
      rotate: 0
    },
    currentBlockTransform = null,
    numObject = 0,
    randomId = function() {
      numObject += 1;
      return 'block_added_' + numObject;
    },
    startMove = function(block, callback) {
      var position = offset.top;
      scene.moveBlock(block, 0, position, 0);
      var timer = setInterval(function() {
        position += 1;
        scene.moveBlock(block, 0, 1, 0);
        if (position === 0) {
          clearInterval(timer);
          callback();
          return false;
        }
      }, 200);
      return timer;
    },
    translate3d = function(block, opts) {
      currentBlockTransform = currentBlockTransform || defaultTranform;
      for(var i in currentBlockTransform) {
        if(currentBlockTransform.hasOwnProperty(i) && opts.hasOwnProperty(i)) {
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
    moveBlock: function(block, x, y, z) {
      translate3d($('#' + block + ' > div'), {
        x: x,
        y: y,
        z: z
      });
    },
    addBlock: function(block, callback) {
      var blockId = randomId();
      var div = $(block).clone().attr('id', blockId);
      $('.scene').append(div);
      var timer = startMove(blockId, callback);
      return {
        block: blockId,
        timer: timer
      };
    }
  };
}());