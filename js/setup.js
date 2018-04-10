'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var generateRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var generateWizardData = function () {
  return {
    name: WIZARDS_NAMES[generateRandomNumber(0, WIZARDS_NAMES.length)] + ' ' + WIZARDS_SURNAME[generateRandomNumber(0, WIZARDS_SURNAME.length)],
    coatColor: WIZARDS_COATS_COLORS[generateRandomNumber(0, WIZARDS_COATS_COLORS.length)],
    eyesColor: WIZARDS_EYES_COLOR[generateRandomNumber(0, WIZARDS_EYES_COLOR.length)]
  };
};

var createWizardElement = function (wizardData) {
  var wizElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item').cloneNode(true);

  wizElement.querySelector('.setup-similar-label').textContent = wizardData.name;
  wizElement.querySelector('.wizard-coat').style.fill = wizardData.coatColor;
  wizElement.querySelector('.wizard-eyes').style.fill = wizardData.eyesColor;

  return wizElement;
};

var wizardDataMass = [];
var fragment = document.createDocumentFragment();

for (var i = 0; i <= 3; i++) {
  wizardDataMass[i] = generateWizardData();
  fragment.appendChild(createWizardElement(wizardDataMass[i]));
}

document.querySelector('.setup-similar-list').appendChild(fragment);
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
