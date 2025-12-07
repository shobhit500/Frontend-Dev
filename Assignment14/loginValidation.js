document.getElementById("loginBtn").addEventListener("click", function () {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const usernameRegex = /^.{5,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  let isValid = true;

  // Username validation
  if (!usernameRegex.test(username)) {
    showError("usernameError", "Username must be at least 5 characters");
    isValid = false;
  } else clearError("usernameError");

  // Password validation
  if (!passwordRegex.test(password)) {
    showError(
      "passwordError",
      "Password must be 8+ chars, include uppercase, lowercase, number, special char"
    );
    isValid = false;
  } else clearError("passwordError");

  // Show success if valid
  if (isValid) {
    document.getElementById("loginMessage").textContent = "Login Successful!";
    document.getElementById("loginMessage").style.color = "green";
  } else {
    document.getElementById("loginMessage").textContent = "";
  }
});

// Helper functions
function showError(id, msg) {
  document.getElementById(id).textContent = msg;
  document.getElementById(id).style.color = "red";
}

function clearError(id) {
  document.getElementById(id).textContent = "";
}
