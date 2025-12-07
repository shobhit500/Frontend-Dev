$(document).ready(function() {
let postCount = 2;

// 1. Add New Post → append at the bottom
$("#addPost").click(function() {
postCount++;
const newPost = $("<div class='post'><h3>New Blog Post " + postCount + "</h3><p>Content for blog post " + postCount + ".</p><div class='tags'>Tags: General</div></div>");
$("#posts").append(newPost);
});

// 2. Prepend Featured Post → add at the top
$("#prependPost").click(function() {
postCount++;
const featured = $("<div class='post'><h3>Featured Post " + postCount + "</h3><p>Special featured content!</p><div class='tags'>Tags: Featured</div></div>");
$("#posts").prepend(featured);
});

// 3. Remove Last Post
$("#removeLast").click(function() {
$("#posts .post").last().remove();
});

// 4. Add tags dynamically → before/after placement
$("#posts").on("click", ".post", function() {
const tagText = prompt("Enter a new tag for this post:");
if(tagText) {
$(this).find(".tags").append(", " + tagText);
}
});

// 5. Highlight posts with specific keywords
$("#highlightBtn").click(function() {
const keyword = $("#highlightKeyword").val().toLowerCase();
$(".post").each(function() {
const text = $(this).text().toLowerCase();
if(text.includes(keyword) && keyword !== "") {
$(this).addClass("highlight");
} else {
$(this).removeClass("highlight");
}
});
});
});
