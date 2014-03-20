/*global $:false,scene:false,game:false */
'use strict';

$(document).on('keydown', function(e) {
  switch (e.keyCode) {
    case 37:
      scene.moveBlock(game.getBlock().block, 0, 0, -1);
      break;
    case 38:
      scene.moveBlock(game.getBlock().block, 1, 0, 0);
      break;
    case 39:
      scene.moveBlock(game.getBlock().block, 0, 0, 1);
      break;
    case 40:
      scene.moveBlock(game.getBlock().block, -1, 0, 0);
      break;
    case 32:
      // scene.rotateBlock();
      break;
  }
});
