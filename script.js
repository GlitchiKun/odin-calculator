let display = {
  element: document.querySelector(".display"),
  append: function (text) {
    this.setText(this.getText().concat(text));
  },
  process: function () {
    this.setText(processOperation(this.getText()));
  },
  containOperator: function () {
    return (
      this.getText().includes("+") ||
      this.getText().includes("-") ||
      this.getText().includes("/") ||
      this.getText().includes("*")
    );
  },
  clear: function () {
    this.setText("");
  },
  getText: function () {
    return this.element.textContent;
  },
  setText: function (text) {
    this.element.textContent = text;
  },
};

document.querySelectorAll(".digit").forEach((b) =>
  b.addEventListener("click", (e) => {
    display.append(e.target.textContent);
  }),
);

document.querySelectorAll(".operator").forEach((b) =>
  b.addEventListener("click", (e) => {
    if (display.containOperator()) {
      display.process();
    }
    display.append(e.target.textContent);
  }),
);

document.querySelector("#equal").addEventListener("click", (e) => {
  display.process();
});

document.querySelector("#clear").addEventListener("click", (e) => {
  display.clear();
});

function processOperation(operation) {
  const splited = operation.split(/([-+/*])/);
  if (splited.length == 3) {
    return operate(splited[1], Number(splited[0]), Number(splited[2]));
  } else {
    return operation;
  }
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
