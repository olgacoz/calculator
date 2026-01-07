let num1 = '';
let num2 = '';
let tempNum = '0';
let currOperator = null;
let prevOperator = null;

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

operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener('click', () => {
    currOperator = operatorButton.textContent;

    if (num1 === '') {
      num1 = tempNum;
      tempNum = '';
    } else if (num2 === '') {
      num2 = tempNum;
      num1 = String(operate(prevOperator, num1, num2));

      if (isNaN(num1)) {
        resetCalculator();
        updateCalcDisplay('Nice Try Bro 😉');
        tempNum = '';
        return;
      }

      updateCalcDisplay(num1);

      tempNum = '';
      num2 = '';
    }

    prevOperator = currOperator;
  });
});

clearBtn.addEventListener('click', () => {
  resetCalculator();
});

equalsBtn.addEventListener('click', () => {
  if (num2 === '' && currOperator) {
    num2 = tempNum;

    if (num2 === '') {
      resetCalculator();
      return;
    }

    num1 = String(operate(currOperator, num1, num2));

    if (isNaN(num1)) {
      resetCalculator();
      updateCalcDisplay('Nice Try Bro 😉');
      tempNum = '';
      return;
    }

    updateCalcDisplay(num1);

    num1 = '';
    num2 = '';
    tempNum = '';
    currOperator = null;
    prevOperator = null;
  }
});

function resetCalculator() {
  num1 = '';
  num2 = '';
  tempNum = '0';
  currOperator = null;
  prevOperator = null;

  updateCalcDisplay(tempNum);
}

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
    return NaN;
  }

  return a / b;
}
