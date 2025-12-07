/*
PREDICTED OUTPUT ORDER (Before running):

1. Script start        → synchronous
2. Script end          → synchronous
3. Promise callback    → microtask (runs after sync, before macrotasks)
4. Timeout callback    → macrotask (runs after microtasks)

Reason:
- Synchronous code runs first.
- Promise.then() is a microtask → runs before any macrotask.
- setTimeout() is a macrotask → executed after microtasks.
*/
console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
ACTUAL OUTPUT (after running):

Script start
Script end
Promise callback
Timeout callback

EXPLANATION:
JavaScript event loop executes tasks in this order:
1. All synchronous code
2. All microtasks (Promise callbacks, Mutation observers)
3. Next macrotask (setTimeout, setInterval, I/O, timers)

So even though setTimeout has delay 0 ms, it is still placed in the macrotask queue
and will run only after the microtask queue is empty.
*/
