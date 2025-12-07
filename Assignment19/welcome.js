$(document).ready(function() {
// Function to display greeting based on time of day
function displayGreeting() {
const hour = new Date().getHours();
let message = "Welcome!";
if(hour < 12) message = "Good Morning!";
else if(hour < 18) message = "Good Afternoon!";
else message = "Good Evening!";
$("#greeting").text(message);
}

// Initial greeting on page load
displayGreeting();

// Change greeting to motivational quote when button is clicked
$("#changeGreeting").click(function() {
const quotes = [
"Believe in yourself!",
"Keep pushing forward!",
"Success is a journey, not a destination.",
"Stay positive and happy!",
"Your potential is endless."
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
$("#greeting").text(randomQuote);
});

// Toggle visibility of welcome message
$("#toggleMessage").click(function() {
$("#welcomeMsg").fadeToggle(); // Smooth transition
});

// Show alert when greeting is clicked
$("#greeting").click(function() {
alert("You clicked the greeting! Have a great day!");
});
});
