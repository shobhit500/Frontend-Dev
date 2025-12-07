"use strict";
let n = 5;

// 1️⃣ PYRAMID USING let
console.log("Pyramid using let:");
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

console.log("");

// 2️⃣ PYRAMID USING var (observe scope difference)
console.log("Pyramid using var:");
for (var a = 1; a <= n; a++) {
  var line = "";
  for (var b = 1; b <= a; b++) {
    line += "* ";
  }
  console.log(line);
}

console.log("(After loop) a =", a); // var still exists
console.log("");

// 3️⃣ STRICT MODE ERROR DEMO (undeclared variable)
try {
  undeclaredVar = 10; // will throw in strict mode
} catch (e) {
  console.log("Strict mode error caught:", e.message);
}
