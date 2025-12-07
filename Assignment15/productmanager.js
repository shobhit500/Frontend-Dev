// Select DOM elements
const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

// Function to create a new product list item
function createProductItem(name) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="productName">${name}</span>
    <div>
      <button class="editBtn">Edit</button>
      <button class="deleteBtn">Delete</button>
    </div>
  `;
  return li;
}

// Add new product
addBtn.addEventListener("click", () => {
  const name = productInput.value.trim();
  if (name) {
    const li = createProductItem(name);
    productList.appendChild(li);
    productInput.value = "";
  }
});

// Event delegation for Edit/Delete
productList.addEventListener("click", (e) => {
  const target = e.target;
  const li = target.closest("li");

  if (target.classList.contains("deleteBtn")) {
    // Delete product
    li.remove();
  } else if (target.classList.contains("editBtn")) {
    // Enable edit mode
    const span = li.querySelector(".productName");
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;
    li.insertBefore(input, span);
    li.removeChild(span);
    input.focus();

    // Save on blur (click outside)
    input.addEventListener("blur", () => {
      span.textContent = input.value.trim() || "Unnamed Product";
      li.insertBefore(span, input);
      li.removeChild(input);
    });

    // Optional: Save on Enter key
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") input.blur();
    });
  }
});
