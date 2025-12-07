// Helper to validate a field
function validateField(input, condition, errorMsgElement, message) {
  if (condition) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    errorMsgElement.textContent = "";
    return true;
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
    errorMsgElement.textContent = message;
    return false;
  }
}

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const passInput = document.getElementById("password");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passError = document.getElementById("passError");

  // Regular Expressions
  const nameReg = /^[A-Za-z ]+$/;
  const emailReg = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const phoneReg = /^[0-9]{10}$/;
  const passReg = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

  // Validate fields
  const validName = validateField(nameInput, nameReg.test(nameInput.value), nameError, "Name must contain only alphabets");
  const validEmail = validateField(emailInput, emailReg.test(emailInput.value), emailError, "Invalid email format");
  const validPhone = validateField(phoneInput, phoneReg.test(phoneInput.value), phoneError, "Phone must be exactly 10 digits");
  const validPass = validateField(passInput, passReg.test(passInput.value), passError, "Password must have 1 uppercase, 1 number & 1 special char");

  if (validName && validEmail && validPhone && validPass) {
    alert("Form Submitted Successfully!");
  }
});
