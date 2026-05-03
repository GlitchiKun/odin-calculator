const display = document.querySelector(".display");

document.querySelectorAll(".digit").forEach((b) =>
  b.addEventListener("click", (e) => {
    addOnDisplay(e.target.textContent);
  }),
);

document.querySelectorAll(".operator").forEach((b) =>
  b.addEventListener("click", (e) => {
    if (containOperator(display.textContent)) {
      processOperationOnDisplay();
    }
    addOnDisplay(e.target.textContent);
  }),
);

document.querySelector("#equal").addEventListener("click", (e) => {
  processOperationOnDisplay();
});

document.querySelector("#clear").addEventListener("click", (e) => {
  clearDisplay();
});

function addOnDisplay(text) {
  display.textContent = display.textContent.concat(text);
}

function processOperationOnDisplay() {
  display.textContent = processOperation(display.textContent);
}

function clearDisplay() {
  display.textContent = "";
}

function processOperation(operation) {
  const splited = operation.split(/([-+/*])/);
  if (splited.length == 3) {
    return operate(splited[1], Number(splited[0]), Number(splited[2]));
  } else {
    return operation;
  }
}

function containOperator(operation) {
  return (
    operation.includes("+") ||
    operation.includes("-") ||
    operation.includes("/") ||
    operation.includes("*")
  );
}

function operate(operator, a, b) {
  let result = null;
  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;

    default:
  }

  return round(result);
}

function round(number) {
  return Math.round(number * 10_000) / 10_000;
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
