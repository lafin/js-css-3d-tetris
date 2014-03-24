/*global scene:false,$:false*/
'use strict';

var game = (function() {
  var block = null,
    map = [],

    getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomBlock = function() {
      return '#block' + getRandomInt(1, 4);
    },
    startMove = function(block, callback) {
      var position = -10;
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
    addBlock = function(block, callback) {
      var blockId = scene.getBlockId();
      var div = $(block).clone().attr('id', blockId);
      $('.scene').append(div);
      var timer = startMove(blockId, callback);
      return {
        block: blockId,
        timer: timer
      };
    };

  return {
    init: function() {
      map[0] = [];
      map[0][0] = [];
    },
    start: function() {
      block = addBlock(getRandomBlock(), function() {
        var total = $('#total').text() | 0;
        $('#total').text(total + 1);
        if (total < 1)
          game.start();
      });
      return block;
    },
    getBlock: function() {
      return block;
    }
  };
}());

game.init();
game.start();