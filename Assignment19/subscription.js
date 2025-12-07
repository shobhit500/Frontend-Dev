$(document).ready(function() {
// 1. Subscribe → enable notifications
$("#subscribe").click(function() {
$(".topic").addClass("subscribed");
$("#message").text("You have subscribed to all topics!");
});

// 2. Unsubscribe → disable notifications
$("#unsubscribe").click(function() {
$(".topic").removeClass("subscribed");
$("#message").text("You have unsubscribed from all topics.");
});

// 3. Dynamically add new subscription topics → attach .on() click events
$("#addTopic").click(function() {
const newTopic = $("<div class='topic'>New Topic</div>");
$("#topics").append(newTopic);

```
});

$("#message").text("New topic added!");
```

});

// 4. Remove specific subscription → detach .off() event
$("#removeTopic").click(function() {
const lastTopic = $("#topics .topic").last();
lastTopic.off("click"); // Remove click event
lastTopic.remove();
$("#message").text("Last topic removed!");
});

// 5. Show success message → dynamically inserted into DOM
$(".topic").click(function() {
$(this).toggleClass("subscribed");
$("#message").text($(this).hasClass("subscribed")
? `Subscribed to ${$(this).text()}!`
: `Unsubscribed from ${$(this).text()}.`);
});
});
