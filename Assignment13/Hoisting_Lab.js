"use strict";

/*
Q5 – Hoisting Lab: The Sequence Trap

Original Code:
------------------------------------------------------
console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() {
    console.log(status);
}

------------------------------------------------------
1. Hoisting Explanation (Memory State):
------------------------------------------------------
• var score
    - HOISTED but initialized as undefined.
    - console.log(score) → prints undefined.

• function announce()
    - Fully hoisted (function declarations are stored completely).
    - announce() works even before its line.

• let status
    - HOISTED but placed in the TEMPORAL DEAD ZONE (TDZ).
    - Accessing it before declaration → ReferenceError.

• function startGame()
    - Fully hoisted.
    - But inside startGame(), it tries to access status BEFORE initialization, 
      so it throws ReferenceError.

------------------------------------------------------
2. Fixed Version:
------------------------------------------------------
• Move all function calls BELOW all declarations.
• Declare variables BEFORE using them.

------------------------------------------------------
3. Arrow Function Rewrite:
------------------------------------------------------
• Arrow functions are NOT hoisted.
• So announce() and startGame() must be defined BEFORE calling them.
*/

console.log("=== FIXED VERSION ===");

// Declare var BEFORE use
var score = 50;

// Fully hoisted function (still safe)
function announce() {
    console.log("Game started");
}

// let variable must NOT be accessed before initialization
let status = "ready";

// Fully hoisted function
function startGame() {
    console.log(status);
}

// Safe calls after declarations
console.log(score);
announce();
startGame();

console.log("=== ARROW FUNCTION VERSION (NO HOISTING) ===");

/*
Arrow Function Rules:
------------------------------------------------------
• Arrow functions are NOT hoisted.
• They must be defined BEFORE calling them.
*/

let announceArrow = () => {
    console.log("Game started (arrow)");
};

let startGameArrow = () => {
    console.log(status);
};

console.log(score);
announceArrow();
startGameArrow();
