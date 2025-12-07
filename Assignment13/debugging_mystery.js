"use strict";

/*
Q4 – Debugging Mystery

1. Why this throws an error under strict mode:
   ------------------------------------------------
   In strict mode, assigning a value to an undeclared variable
   (example: greeting = "Welcome") is NOT allowed.
   JavaScript prevents creation of "implicit global variables"
   and throws: ReferenceError: greeting is not defined.

2. How the fix works:
   ------------------------------------------------
   We declare the variable properly using let/const/var.
   This ensures greeting exists in the local function scope
   and strict mode no longer throws an error.

3. Debugging instructions (VS Code):
   ------------------------------------------------
   • Add a breakpoint on the line: let greeting = "Welcome";
   • Open Run & Debug → Start debugging (F5)
   • Add "greeting" in the WATCH panel to observe its value
   • The Call Stack will show:
         showMessage()
         (anonymous) - main script execution
*/

function showMessage() {
    // FIX: Declare variable properly to avoid strict mode error
    let greeting = "Welcome";  
    console.log(greeting);
}

// Function call
showMessage();
