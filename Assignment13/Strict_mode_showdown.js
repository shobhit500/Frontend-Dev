/*  
Q8 – Strict Mode Showdown

1. With "use strict":
   - Duplicate parameter name (a, a) → SyntaxError.
   - total = 10; → ReferenceError (cannot create implicit global).
   - delete total; → SyntaxError (cannot delete variables).

2. Without strict mode:
   - Duplicate parameters allowed.
   - total becomes an implicit global variable.
   - delete total returns false but does NOT throw error.

3. Why strict mode blocks this:
   - Prevents accidental global variables.
   - Disallows duplicate parameters to avoid unpredictable scope behavior.
   - Forbids deleting declared variables to protect bindings.
*/

/* Original Code (INVALID in strict mode) */
// "use strict";
// function demo(a, a) {    // Duplicate parameters → SyntaxError
//   total = 10;            //  Implicit global → ReferenceError
//   delete total;          //  Cannot delete variable
// }
// demo(5, 10);

/* ✅ Correct ES6 Version */
"use strict";

function demoFixed(a, b) {
  let total = 10;    // valid declared variable
  // delete total;   // ❌ still illegal in strict mode
  console.log("Total:", total);
}

demoFixed(5, 10);
