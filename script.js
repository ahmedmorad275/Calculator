'use strict';
// Selecting Elements
const clearAll = document.querySelector('.clear-all');
const clearLast = document.querySelector('.clear-last');
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const multi = document.querySelector('.multi');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const abs = document.querySelector('.abs');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const sum = document.querySelector('.sum');
const zero = document.querySelector('.zero');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');
const inputs = document.querySelector('.inputs');
const result = document.querySelector('.result');
const summary = document.querySelector('.summary');

one.addEventListener('click', () => (inputs.innerHTML += 1));
two.addEventListener('click', () => (inputs.innerHTML += 2));
three.addEventListener('click', () => (inputs.innerHTML += 3));
four.addEventListener('click', () => (inputs.innerHTML += 4));
five.addEventListener('click', () => (inputs.innerHTML += 5));
six.addEventListener('click', () => (inputs.innerHTML += 6));
seven.addEventListener('click', () => (inputs.innerHTML += 7));
eight.addEventListener('click', () => (inputs.innerHTML += 8));
nine.addEventListener('click', () => (inputs.innerHTML += 9));
zero.addEventListener('click', () => (inputs.innerHTML += 0));
dot.addEventListener('click', () => (inputs.innerHTML += '.'));
sum.addEventListener('click', () => (inputs.innerHTML += ' + '));
abs.addEventListener('click', () => (inputs.innerHTML += ' - '));
multi.addEventListener('click', () => (inputs.innerHTML += ' × '));
divide.addEventListener('click', () => (inputs.innerHTML += ' ÷ '));
percent.addEventListener('click', () => (inputs.innerHTML += ' % '));
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
  if (inputs.innerHTML.includes('+')) {
    const inputArr = inputs.innerHTML.split(' + ');
    let res = inputArr
      .map((el) => Number(el))
      .reduce((curr, total) => curr + total, 0);
    result.innerHTML = res;
    setUp();
  } else if (inputs.innerHTML.includes('×')) {
    const inputArr = inputs.innerHTML.split(' × ');
    let res = inputArr
      .map((el) => Number(el))
      .reduce((curr, total) => curr * total, 1);
    result.innerHTML = res;
    setUp();
  } else if (inputs.innerHTML.includes('÷')) {
    const inputArr = inputs.innerHTML.split(' ÷ ');
    let res;
    for (let i = 0; i < inputArr.length; i++) {
      res = Number(inputArr[0]) / Number(inputArr[1]);
    }
    result.innerHTML = res;
    setUp();
  } else if (inputs.innerHTML.includes('%')) {
    const inputArr = inputs.innerHTML.split(' % ');
    let res;
    for (let i = 0; i < inputArr.length; i++) {
      res = Number(inputArr[0]) % Number(inputArr[1]);
    }
    result.innerHTML = res;
    setUp();
  } else if (inputs.innerHTML.includes('-')) {
    const inputArr = inputs.innerHTML.split(' - ');
    let res;
    for (let i = 0; i < inputArr.length; i++) {
      res = Number(inputArr[0]) - Number(inputArr[1]);
    }
    result.innerHTML = res;
    setUp();
  }
}

document.querySelector('body').addEventListener('keydown', function (e) {
  console.log(e.key)
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
      inputs.innerHTML += ' + ';
      break;
    case '-':
      inputs.innerHTML += ' - ';
      break;
    case '*':
      inputs.innerHTML += ' × ';
      break;
    case '/':
      inputs.innerHTML += ' ÷ ';
      break;
    case '%':
      inputs.innerHTML += ' % ';
      break;
    case 'Backspace':
      backSpace();
      break;
    case 'Delete':
      clear();
      break;
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
