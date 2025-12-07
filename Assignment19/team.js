$(document).ready(function() {
// 1. Click a manager → highlight all direct reports
$(".manager").click(function() {
$(this).children(".employee").addClass("highlight");
});

// 2. Hover on employee → show contact info using .next()
$(".employee").hover(
function() { $(this).find(".contact").slideDown(); },
function() { $(this).find(".contact").slideUp(); }
);

// 3. Click on department → change background of all members using .children()
$(".department").click(function() {
$(this).children().addClass("highlight");
});

// 4. Select random employee → highlight siblings
$("#highlightRandom").click(function() {
$(".employee").removeClass("highlight");
const employees = $(".employee");
const randomIndex = Math.floor(Math.random() * employees.length);
const randomEmployee = employees.eq(randomIndex);
randomEmployee.siblings(".employee").addClass("highlight");
});

// 5. Collapse/expand team using .parent() and .find()
$("#toggleTeam").click(function() {
$(".department").each(function() {
$(this).find(".manager, .employee").slideToggle();
});
});
});
