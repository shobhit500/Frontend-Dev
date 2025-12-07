$(document).ready(function() {
// Hide banners
$("#hideBanner").click(function() {
$(".banner").hide();
});

// Show banners
$("#showBanner").click(function() {
$(".banner").show();
});

// Slide up banners
$("#slideUp").click(function() {
$(".banner").slideUp();
});

// Slide down banners
$("#slideDown").click(function() {
$(".banner").slideDown();
});

// Fade toggle banners
$("#fadeToggle").click(function() {
$(".banner").fadeToggle();
});

// Automatically rotate banners every 5 seconds
let current = 0;
const banners = $(".banner");
banners.hide(); // Hide all initially
banners.eq(current).fadeIn();

setInterval(function() {
banners.eq(current).fadeOut(1000);
current = (current + 1) % banners.length;
banners.eq(current).fadeIn(1000);
}, 5000);
});
