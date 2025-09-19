'use strict';
// Selecting Elements
const clearAll = document.querySelector('.clear-all');
const clearLast = document.querySelector('.clear-last');
const equal = document.querySelector('.equal');
const inputs = document.querySelector('.inputs');
const result = document.querySelector('.result');
const summary = document.querySelector('.summary');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (btn.dataset.value) {
      inputs.innerHTML += btn.dataset.value;
    }
  });
});
// Remove last
function backSpace() {
  const inputArr = inputs.innerHTML.trimEnd().split('').slice(0, -1);
  inputs.innerHTML = inputArr.join('');
}
// Clear All
function clear() {
  inputs.innerHTML = '';
  result.innerHTML = '0';
  summary.innerHTML = '';
}
// Update Content
function setUp() {
  const getInput = inputs.innerHTML;
  summary.innerHTML = getInput;
  inputs.innerHTML = '';
}
// Calculate
function calc() {
  let conver = inputs.innerHTML.replaceAll('×', '*').replaceAll('÷', '/');
  try {
    result.innerHTML = eval(conver);
  } catch (error) {
    inputs.innerHTML = 'Error';
    summary.innerHTM = '';
    result.innerHTML = 0;
  }
  setUp();
}

document.querySelector('body').addEventListener('keydown', function (e) {
  switch (e.key) {
    case '1':
      inputs.innerHTML += 1;
      break;
    case '2':
      inputs.innerHTML += 2;
      break;
    case '3':
      inputs.innerHTML += 3;
      break;
    case '4':
      inputs.innerHTML += 4;
      break;
    case '5':
      inputs.innerHTML += 5;
      break;
    case '6':
      inputs.innerHTML += 6;
      break;
    case '7':
      inputs.innerHTML += 7;
      break;
    case '8':
      inputs.innerHTML += 8;
      break;
    case '9':
      inputs.innerHTML += 9;
      break;
    case '0':
      inputs.innerHTML += 0;
      break;
    case '+':
      inputs.innerHTML += '+';
      break;
    case '-':
      inputs.innerHTML += '-';
      break;
    case '*':
      inputs.innerHTML += '×';
      break;
    case '/':
      inputs.innerHTML += '÷';
      break;
    case '%':
      inputs.innerHTML += '%';
      break;
    case 'Backspace':
      backSpace();
      break;
    case 'Delete':
    case 'Escape':
      clear();
      break;
    case 'Enter':
      calc();
      break;
    case '.':
      inputs.innerHTML += '.';
      break;
  }
});

clearAll.addEventListener('click', clear);
clearLast.addEventListener('click', backSpace);
equal.addEventListener('click', calc);
