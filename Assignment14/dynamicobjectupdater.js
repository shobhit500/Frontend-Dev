// Initial user object
let user = { name: "John", email: "john@mail.com", age: 21 };

// Display initial user details
displayUser();

// Handle form submission
document.getElementById("updateBtn").addEventListener("click", function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = parseInt(document.getElementById("age").value.trim(), 10);

  // Update object only if inputs are valid
  if (name) user.name = name;
  if (email) user.email = email;
  if (!isNaN(age)) user.age = age;

  // Display updated object
  displayUser();
});

// Function to display user object
function displayUser() {
  document.getElementById("userDetails").textContent =
    `Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`;
}
