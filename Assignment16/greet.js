function greetUser(name, callback) {
    console.log("Hello " + name);   // Main function work
    callback();                     // Calling the callback
}

// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Demonstration of callback flow
greetUser("Shobhit", showEndMessage);
