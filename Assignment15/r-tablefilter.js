const searchInput = document.getElementById("search");
const table = document.getElementById("student-table").getElementsByTagName("tbody")[0];
const noResults = document.getElementById("no-results");

searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  let hasResults = false;

  Array.from(table.rows).forEach(row => {
    const name = row.cells[0].textContent.toLowerCase();
    const branch = row.cells[1].textContent.toLowerCase();
    if (name.includes(filter) || branch.includes(filter)) {
      row.style.display = "";
      hasResults = true;
    } else {
      row.style.display = "none";
    }
  });

  noResults.style.display = hasResults ? "none" : "block";
});
