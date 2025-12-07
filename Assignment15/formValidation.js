const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

// Helper function to validate email
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// Live error removal on input
[nameInput, emailInput, passwordInput].forEach(input => {
  input.addEventListener("input", () => {
    input.nextElementSibling.textContent = "";
    successMessage.textContent = "";
  });
});

// Form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop default submission
  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Email validation
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Email must contain @ and a valid domain.";
    valid = false;
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (valid) {
    successMessage.textContent = "Form Submitted Successfully!";
    form.reset();
  }
});
