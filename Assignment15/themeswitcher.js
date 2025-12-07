const buttons = document.querySelectorAll("button");

// Loop through each theme button
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedTheme = btn.getAttribute("data-theme");
    // Set the theme attribute on <body>
    document.body.setAttribute("data-theme", selectedTheme);
    // Optional: log current theme
    console.log("Current Theme:", document.body.getAttribute("data-theme"));
  });
});
