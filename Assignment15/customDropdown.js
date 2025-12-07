const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownOptions = document.getElementById("dropdownOptions");

// Toggle dropdown visibility on button click
dropdownBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent body click from closing immediately
  dropdownOptions.style.display = dropdownOptions.style.display === "block" ? "none" : "block";
});

// Update button text when an option is clicked
dropdownOptions.addEventListener("click", (e) => {
  if(e.target.tagName === "LI"){
    dropdownBtn.textContent = e.target.dataset.value;
    dropdownOptions.style.display = "none";
  }
});

// Close dropdown if clicking outside (capturing phase)
document.addEventListener("click", () => {
  dropdownOptions.style.display = "none";
}, true); // true for capturing
