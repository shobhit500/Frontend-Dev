const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const galleryImages = document.querySelectorAll(".gallery img");
const closeBtn = document.querySelector(".close");

// Open modal when clicking an image
galleryImages.forEach(img => {
  img.addEventListener("click", (e) => {
    modal.style.display = "block";
    modalImg.src = e.target.src; // Show clicked image
  });
});

// Close modal on clicking outside image
modal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Prevent closing when clicking on the image itself
modalImg.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
