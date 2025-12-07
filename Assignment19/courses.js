$(document).ready(function() {
function updateCount(count) {
$("#count").text("Matched Courses: " + count);
}

// Utility function to escape special regex characters
function escapeRegex(str) {
return str.replace(/[.*+?^${}()|[]\]/g, '\$&'); // escape special characters
}

$("#searchInput").keyup(function() {
const query = $(this).val().toString().toLowerCase();
let matchedCount = 0;

```
$(".course").each(function() {
  const text = $(this).text();
  if(text.toLowerCase().includes(query) && query !== "") {
    $(this).show();
    // Escape special characters in query
    const safeQuery = escapeRegex(query);
    const regex = new RegExp("(" + safeQuery + ")", "gi");
    $(this).html(text.replace(regex, "<span class='highlight'>$1</span>"));
    matchedCount++;
  } else if(query === "") {
    $(this).show().html(text); // Reset highlight
  } else {
    $(this).hide();
  }
});

updateCount(matchedCount);
```

});

// Clear search input
$("#clearSearch").click(function() {
$("#searchInput").val("");
$(".course").show().each(function() {
$(this).html($(this).text()); // Remove highlights
});
updateCount(0);
});
});
