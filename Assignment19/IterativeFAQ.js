$(document).ready(function() {
// 1. Click on question → toggle answer
$(".question").click(function() {
$(this).next(".answer").slideToggle();
});

// 2. Hover → change question color
$(".question").hover(
function() { $(this).css("color", "blue"); },
function() { $(this).css("color", "black"); }
);

// 3. Double-click question → collapse all answers
$(".question").dblclick(function() {
$(".answer").slideUp();
});

// 4. Focus on input → highlight parent question
$(".faq-input").focus(function() {
$(this).closest(".faq-item").find(".question").addClass("highlight");
});

// 5. Blur from input → reset background
$(".faq-input").blur(function() {
$(this).closest(".faq-item").find(".question").removeClass("highlight");
});
});
