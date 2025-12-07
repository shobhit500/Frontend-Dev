// Movie Ticket Booking

document.getElementById("bookBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const seats = document.getElementById("seats").value.trim();

  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
  const seatsRegex = /^([1-9]|10)$/;

  let isValid = true;

  // Name validation
  if (!nameRegex.test(name)) {
    showError("nameError", "Enter alphabets only");
    isValid = false;
  } else clearError("nameError");

  // Email validation
  if (!emailRegex.test(email)) {
    showError("emailError", "Enter valid email");
    isValid = false;
  } else clearError("emailError");

  // Seats validation
  if (!seatsRegex.test(seats)) {
    showError("seatsError", "Seats must be 1–10");
    isValid = false;
  } else clearError("seatsError");

  // If all valid → store booking data
  if (isValid) {
    const booking = {
      name,
      email,
      seats: Number(seats)
    };

    document.getElementById("ticket").textContent =
      `Ticket Booked: ${booking.name}, ${booking.email}, Seats: ${booking.seats}`;
  }
});

// helper functions
function showError(id, msg) {
  document.getElementById(id).textContent = msg;
}

function clearError(id) {
  document.getElementById(id).textContent = "";
}
