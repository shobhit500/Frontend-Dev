let userName = "Shobhit"; // You can change this to any name
let currentHour = new Date().getHours(); // Gets the current hour (0-23)

// Step 2: Determine greeting message based on time
let greeting;

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

// Step 3: Print final greeting
console.log(greeting);
