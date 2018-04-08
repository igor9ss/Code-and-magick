'use strict';

var mass = [];
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getObjects = function () {
  for (var i = 0; i <= 3; i++) {
    mass[i] = {
      name: WIZARD_NAMES[getRandomNumber(0, WIZARD_NAMES.length)] + ' ' + WIZARDS_SURNAME[getRandomNumber(0, WIZARDS_SURNAME.length)],
      coatColor: WIZARDS_COATS_COLORS[getRandomNumber(0, WIZARDS_COATS_COLORS.length)],
      eyesColor: WIZARDS_EYES_COLOR[getRandomNumber(0, WIZARDS_EYES_COLOR.length)]
    };
  }
  return mass;
};

document.querySelector('.setup').classList.remove('hidden');

var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

var renderVizard = function (wiz) {
  var wizElement = template.cloneNode(true);

  wizElement.querySelector('.setup-similar-label').textContent = wiz.name;
  wizElement.querySelector('.wizard-coat').style.fill = wiz.coatColor;
  wizElement.querySelector('.wizard-eyes').style.fill = wiz.eyesColor;

  return wizElement;
};

for (var i = 0; i <= 3; i++) {
  fragment.appendChild(renderVizard(getObjects(mass)[i]));
}
document.querySelector('.setup-similar-list').appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
