let num1 = '';
let num2 = '';
let operator = null;

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
