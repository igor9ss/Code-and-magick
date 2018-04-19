'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIRE_BALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var generateRandomNumber = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

var generateWizardData = function () {
  return {
    name: WIZARDS_NAMES[generateRandomNumber(0, WIZARDS_NAMES.length - 1)] + ' ' + WIZARDS_SURNAME[generateRandomNumber(0, WIZARDS_SURNAME.length - 1)],
    coatColor: WIZARDS_COATS_COLORS[generateRandomNumber(0, WIZARDS_COATS_COLORS.length)],
    eyesColor: WIZARDS_EYES_COLOR[generateRandomNumber(0, WIZARDS_EYES_COLOR.length)]
  };
};

var createWizardElement = function (wizardData, template) {
  var wizElement =  template.cloneNode(true);

  wizElement.querySelector('.setup-similar-label').textContent = wizardData.name;
  wizElement.querySelector('.wizard-coat').style.fill = wizardData.coatColor;
  wizElement.querySelector('.wizard-eyes').style.fill = wizardData.eyesColor;

  return wizElement;
};


var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = [];
var fragment = document.createDocumentFragment();

for (var i = 0; i <= 3; i++) {
  wizards[i] = generateWizardData();
  fragment.appendChild(createWizardElement(wizards[i], template));
}

document.querySelector('.setup-similar-list').appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');

var setupElement = document.querySelector('.setup');
var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = document.querySelector('.setup-close');
var usenNameInputField = document.querySelector('.setup-user-name');

var wizardEyesElement = document.querySelector('.setup-wizard .wizard-eyes');
var fireBallElement = document.querySelector('.setup-fireball-wrap');
var vazardCoatElement = document.querySelector('.setup-player .wizard-coat');
var fireBallInputField = fireBallElement.querySelector('input');


var openSetup = function () {
  setupElement.classList.remove('hidden');

  document.addEventListener('keydown', onEscPressAndInputNotActive);
};

var closeSetup = function () {
  setupElement.classList.add('hidden');

  document.removeEventListener('keydown', onEscPressAndInputNotActive);
};

var onEscPress = function (evt) {
  if (evt.keyCode == 27) {
    closeSetup();
  }
};

var onEscPressAndInputNotActive = function (evt) {
  if (document.activeElement !== usenNameInputField) {
      onEscPress(evt);
  }
};

setupOpenElement.addEventListener('click', function () {
  openSetup();
});

setupOpenElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode == 13) {
    openSetup();
  }
});

setupCloseElement.addEventListener('click', function () {
  closeSetup();
});

setupCloseElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode == 13) {
    closeSetup();
  }
});

wizardEyesElement.addEventListener('click', function () {
  wizardEyesElement.style.fill = WIZARDS_EYES_COLOR[generateRandomNumber(0, 4)];
});

fireBallElement.addEventListener('click', function () {
  fireBallElement.style.backgroundColor = FIRE_BALL_COLOR[generateRandomNumber(0, 4)];
  fireBallInputField.value = fireBallElement.style.backgroundColor;
});

vazardCoatElement.addEventListener('click', function () {
  vazardCoatElement.style.fill = WIZARDS_COATS_COLORS[generateRandomNumber(0, 5)]
});















