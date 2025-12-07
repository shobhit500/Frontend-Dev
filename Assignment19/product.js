$(document).ready(function() {
// Highlight product on click
$(".product").click(function() {
if ($(this).data("stock") === 0) {
alert("This product is out of stock!");
return;
}
$(".product").removeClass("highlight");
$(this).addClass("highlight");
});

// Show additional product details on hover
$(".product").hover(
function() { $(this).find(".details").slideDown(); },
function() { $(this).find(".details").slideUp(); }
);

// Toggle "favorite" class when favorite icon is clicked
$(".favorite").click(function(event) {
$(this).toggleClass("selected");
event.stopPropagation(); // Prevent triggering product click
});

// Apply different style to discounted products using attribute selector
$(".product[data-discount]").addClass("discount");
});
