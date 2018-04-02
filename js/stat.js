'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var TEXT_HEIGHT = 32;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var COLOR_RED = 'rgba(255, 0, 0, 1)';
var COLOR_BLUE = 'rgba(0, 0, 255, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px "PT Mono"';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 150, 40);
  ctx.fillText('Список результатов:', 150, 57);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var xCoordinate = CLOUD_X + GAP + (BAR_WIDTH + GAP) * i;
    var proportion = MAX_BAR_HEIGHT * times[i] / maxTime;

    ctx.fillStyle = players[i] === 'Вы'? COLOR_RED : COLOR_BLUE; 

    ctx.fillRect(xCoordinate, (CLOUD_Y + GAP + TEXT_HEIGHT) + (MAX_BAR_HEIGHT - proportion), BAR_WIDTH, proportion);

    ctx.fillStyle = '#000';

    ctx.fillText(players[i], xCoordinate, CLOUD_HEIGHT);
    ctx.fillText(Math.round(times[i]), xCoordinate, CLOUD_HEIGHT - GAP * 0.7 - MAX_BAR_HEIGHT * times[i] / maxTime);
  }
};
