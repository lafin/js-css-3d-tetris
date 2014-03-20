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
    };

  return {
    init: function() {
      map[0] = [];
      map[0][0] = [];
    },
    start: function() {
      block = scene.addBlock(getRandomBlock(), function() {
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