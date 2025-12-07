const textInput = document.getElementById("textInput");
const charCounter = document.getElementById("charCounter");
const resetBtn = document.getElementById("resetBtn");

const MAX_CHARS = 100;

textInput.addEventListener("input", () => {
  let remaining = MAX_CHARS - textInput.value.length;

  // Prevent typing beyond max length
  if (remaining < 0) {
    textInput.value = textInput.value.substring(0, MAX_CHARS);
    remaining = 0;
  }

  charCounter.textContent = `${remaining} characters remaining`;

  // Change color based on remaining characters
  if (remaining <= 0) {
    charCounter.classList.add("red");
    charCounter.classList.remove("yellow");
  } else if (remaining <= 20) {
    charCounter.classList.add("yellow");
    charCounter.classList.remove("red");
  } else {
    charCounter.classList.remove("red", "yellow");
  }
});

// Reset button clears textarea
resetBtn.addEventListener("click", () => {
  textInput.value = "";
  charCounter.textContent = `${MAX_CHARS} characters remaining`;
  charCounter.classList.remove("red", "yellow");
});
