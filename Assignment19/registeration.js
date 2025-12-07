$(document).ready(function() {
// Simulate already registered emails
const existingEmails = ["[test@example.com](mailto:test@example.com)", "[user@example.com](mailto:user@example.com)"];

$("#registrationForm").submit(function(event) {
event.preventDefault(); // Prevent default form submission
let valid = true;

```
// Clear previous errors
$("input").removeClass("error");
$("#message").text("");

// 1. Validate Name → not empty
const name = $("#name").val().trim();
if(name === "") {
  $("#name").addClass("error");
  valid = false;
}

// 2. Validate Email → proper format & uniqueness
const email = $("#email").val().trim();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(email) || existingEmails.includes(email)) {
  $("#email").addClass("error");
  valid = false;
}

// 3. Validate Password → minimum 8 characters
const password = $("#password").val();
if(password.length < 8) {
  $("#password").addClass("error");
  valid = false;
}

// 4. Show success message if valid
if(valid) {
  $("#message").text("Registration successful!");
  // Optionally add email to existing list
  existingEmails.push(email);
  // Reset form
  $("#registrationForm")[0].reset();
} else {
  $("#message").text("Please correct the highlighted fields.").css("color", "red");
}

// 5. Dynamic red border already handled via .error class
```

});
});
