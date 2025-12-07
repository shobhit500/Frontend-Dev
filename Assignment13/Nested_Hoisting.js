"use strict";

/*
Q10 – Nested Hoisting and Closures

ORIGINAL CODE:

function outer() {
    console.log(count);
    var count = 5;
    function inner() {
        console.log(count);
        var count = 10;
    }
    inner();
}
outer();

------------------------------------------------------------
1️⃣ PREDICT THE OUTPUT
------------------------------------------------------------

OUTPUT:
undefined
undefined

WHY?
- In `outer()`, `var count` is hoisted → created as `count = undefined`.
  So console.log(count) prints → undefined.

- In `inner()`, another separate `var count` is hoisted inside inner().
  That inner count also becomes `undefined` initially.
  So console.log(count) prints → undefined.

Both are different variables due to function scope, not closures.

------------------------------------------------------------
2️⃣ HOISTING MEMORY CONTEXTS
------------------------------------------------------------

outer() creation phase:
- memory: { count: undefined, inner: function }

inner() creation phase:
- memory: { count: undefined }

No shared count because each function has its own scope.

------------------------------------------------------------
3️⃣ CONVERT INNER TO ARROW FUNCTION
------------------------------------------------------------

Arrow functions DO NOT hoist like normal function declarations.
Also, arrow functions do NOT create their own `this`, but they DO create
their own local variables — so var count is STILL hoisted locally.

Output remains the same:
undefined
undefined

------------------------------------------------------------
4️⃣ CALL STACK (DEBUG EXPLANATION)

Call stack flow:
- outer() pushed
- outer logs count (undefined)
- inner() pushed
- inner logs count (undefined)
- inner returns → popped from stack
- outer returns → popped from stack

------------------------------------------------------------
Below is corrected, annotated, and arrow-function version
------------------------------------------------------------
*/

function outer() {
    console.log(count); // undefined (outer count hoisted)

    var count = 5; // assigned after the log

    // Arrow version (still hoists var, so same output)
    const inner = () => {
        console.log(count); // undefined (inner count hoisted)
        var count = 10;
    };

    inner();
}

outer();
