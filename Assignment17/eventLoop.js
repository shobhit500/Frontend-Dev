// Q2_eventLoop.js
// Task Scheduler: Micro vs Macro Challenge

console.log("Start");

// Macrotask → added to task queue
setTimeout(() => {
    console.log("Macrotask: setTimeout");
}, 0);

// Microtask → Promise.then() always goes to microtask queue
Promise.resolve().then(() => {
    console.log("Microtask: Promise.then");
});

// Synchronous log
console.log("Synchronous log");

console.log("End");

/*
Explanation:
-------------
Execution Order in JS Event Loop:

All synchronous code runs first:
   → "Start"
   → "Synchronous log"
   → "End"

Then the Event Loop checks the Microtask Queue.
   Microtasks have higher priority than macrotasks.
   → Promise.then() runs here:
     "Microtask: Promise.then"

After all microtasks are finished, macrotasks run.
   → setTimeout callback finally executes:
     "Macrotask: setTimeout"
*/
