'use strict';

var BAR_WIDTH = 40;
var COLOR_RED = 'rgba(255, 0, 0, 1)';
var COLOR_BALACK = '#000';
var COLOR_WHITE = '#fff';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_SIZE = 50;
var GAP_REDUCER = 0.7;
var MAX_BAR_HEIGHT = 150;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var SHADOW_OFFSET = 10;
var TEXT_HEIGHT = 32;

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

var generateBlueColor = function () {
  return 'hsl(240, ' + parseInt(Math.random()*100) + '%, 50%)';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_OFFSET, CLOUD_Y + SHADOW_OFFSET, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, COLOR_WHITE);

  ctx.font = '16px "PT Mono"';
  ctx.fillStyle = COLOR_BALACK;
  ctx.fillText('Ура вы победили!', 150, 40);
  ctx.fillText('Список результатов:', 150, 57);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var xCoordinate = CLOUD_X + GAP + (BAR_WIDTH + GAP) * i;
    var barHeight = MAX_BAR_HEIGHT * times[i] / maxTime;

    ctx.fillStyle = players[i] === 'Вы' ? COLOR_RED : generateBlueColor();

    ctx.fillRect(xCoordinate, (CLOUD_Y + GAP + TEXT_HEIGHT) + (MAX_BAR_HEIGHT - barHeight), BAR_WIDTH, barHeight);

    ctx.fillStyle = COLOR_BALACK;

    ctx.fillText(players[i], xCoordinate, CLOUD_HEIGHT);
    ctx.fillText(Math.round(times[i]), xCoordinate, CLOUD_HEIGHT - GAP - barHeight);
  }
};
