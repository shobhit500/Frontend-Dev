const user = {
    name: "Shobhit",
    showName: () => {
        console.log("Using arrow function:", this.name);
    }
};

// Call method
user.showName(); // Output: undefined


/*
EXPLANATION:
Arrow functions DO NOT have their own 'this'.
Instead, they take 'this' from their outer lexical scope.
In a global context, 'this' does NOT refer to the object,
so this.name becomes undefined.
*/


// FIX: Use a regular function so 'this' refers to the object
const userFixed = {
    name: "Shobhit",
    showName() {
        console.log("Using normal function:", this.name);
    }
};

userFixed.showName(); // Output: "Shobhit"
