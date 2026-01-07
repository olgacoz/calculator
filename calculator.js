let num1 = '';
let num2 = '';
let tempNum = '0';
let operator = null;

const calcDisplay = document.querySelector('#calc-display');
const numButtons = document.querySelectorAll('.num-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const clearBtn = document.querySelector('#clear-btn');
const equalsBtn = document.querySelector('#equals-btn');

calcDisplay.textContent = tempNum;

numButtons.forEach(numButton => {
  numButton.addEventListener('click', () => {
    const numCharPressed = numButton.textContent;

    if (tempNum === '0') {
      if (numCharPressed === '0') {
        return; // Don't add more zeros
      }
      tempNum = numCharPressed;
      
      updateCalcDisplay(tempNum);
      return;
    }
    
    tempNum += numCharPressed;
    updateCalcDisplay(tempNum);
  });
});

function updateCalcDisplay(num) {
  calcDisplay.textContent = num;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
  }
}

function add(a, b) {
  a = +a;
  b = +b;

  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return 'Nice Try Bro 😉'
  }

  return a / b;
}
