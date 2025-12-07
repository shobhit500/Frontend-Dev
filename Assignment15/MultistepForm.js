const form = document.getElementById("multiStepForm");
const steps = document.querySelectorAll(".form-step");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const summaryDiv = document.getElementById("summary");

let currentStep = 0;

// Show initial step
showStep(currentStep);

function showStep(step) {
  steps.forEach((s, index) => {
    s.classList.toggle("active", index === step);
  });

  // Back button visibility
  backBtn.style.display = step === 0 ? "none" : "inline-block";
  nextBtn.textContent = step === steps.length - 1 ? "Submit" : "Next";
}

// Validation functions
function validateStep(step) {
  let valid = true;
  if (step === 0) {
    const name = document.getElementById("name").value.trim();
    if (!name) {
      document.getElementById("nameError").textContent = "Name is required";
      valid = false;
    } else {
      document.getElementById("nameError").textContent = "";
    }
  } else if (step === 1) {
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email";
      valid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }
  } else if (step === 2) {
    const password = document.getElementById("password").value.trim();
    if (password.length < 6) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
      valid = false;
    } else {
      document.getElementById("passwordError").textContent = "";
    }
  }
  return valid;
}

// Next button
nextBtn.addEventListener("click", () => {
  if (!validateStep(currentStep)) return;

  if (currentStep === steps.length - 1) {
    // Show summary
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    summaryDiv.innerHTML = `
      <h3>Summary:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${"*".repeat(password.length)}</p>
    `;
  } else {
    currentStep++;
    showStep(currentStep);
  }
});

// Back button
backBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});
