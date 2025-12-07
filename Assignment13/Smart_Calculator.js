"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;
const operation = "divide"; // test any operation

try {
  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;

    case "subtract":
      result = num1 - num2;
      break;

    case "divide":
      if (num2 === 0) throw new Error("DivideByZeroError");
      result = num1 / num2;
      break;

    case "power":
      result = Math.pow(num1, num2);
      break;

    case "root":
      if (num1 < 0) throw new Error("NegativeRootError");
      result = Math.sqrt(num1);
      break;

    default:
      throw new Error("InvalidOperationError");
  }

  console.log(`Operation: ${operation}
Num1: ${num1}
Num2: ${num2}
Result: ${result}`);

} catch (err) {
  console.log(`Error: ${err.message}`);
}
