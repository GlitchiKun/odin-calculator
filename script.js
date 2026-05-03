const display = document.querySelector(".display");

document.querySelectorAll(".digit, .operator").forEach((b) =>
  b.addEventListener("click", (e) => {
    display.textContent = display.textContent.concat(e.target.textContent);
  }),
);

document.querySelector("#clear").addEventListener("click", (e) => {
  display.textContent = "";
});

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;

    default:
      return null;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
