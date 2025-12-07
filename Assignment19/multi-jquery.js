/* Assign different jQuery versions to separate variables */
var jQuery1 = jQuery.noConflict(true); // Version 1.x
var jQuery3 = window.jQuery;           // Version 3.x (latest loaded)

// ---------------------------
// Version 1 → Carousel Slider and Active Widget
// ---------------------------
jQuery1(document).ready(function($) {
let index = 0;
const slides = $(".carousel .carousel-item");
slides.hide().eq(0).show(); // Show first slide

// Rotate carousel every 3 seconds
setInterval(function() {
slides.eq(index).fadeOut(500);
index = (index + 1) % slides.length;
slides.eq(index).fadeIn(500);
}, 3000);

// Highlight active widget on click
$(".widget").click(function() {
$(".widget").removeClass("active-widget");
$(this).addClass("active-widget");
});
});

// ---------------------------
// Version 3 → Modal Popups and Tooltips
// ---------------------------
jQuery3(document).ready(function($) {
// Show modal
$("#showModal").click(function() {
$("#modal").fadeIn();
});

// Close modal
$("#closeModal").click(function() {
$("#modal").fadeOut();
});

// Tooltip on hover
$(".widget").hover(
function() {
const tip = $(this).data("tooltip");
$(".tooltip").text(tip).fadeIn().css({
top: $(this).offset().top - 30,
left: $(this).offset().left
});
},
function() {
$(".tooltip").fadeOut();
}
);
});
