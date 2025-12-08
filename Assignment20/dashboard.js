const usersURL = "http://localhost:3004/users";
const ordersURL = "http://localhost:3005/orders";
const productsURL = "http://localhost:3006/products";

// Show loading skeletons
function showLoading() {
  document.getElementById("usersCount").innerHTML = "<div class='skeleton'></div>";
  document.getElementById("ordersCount").innerHTML = "<div class='skeleton'></div>";
  document.getElementById("productsCount").innerHTML = "<div class='skeleton'></div>";
}

showLoading();

// Load all 3 API calls simultaneously
Promise.all([
  fetch(usersURL).then(res => res.ok ? res.json() : Promise.reject("Users error")),
  fetch(ordersURL).then(res => res.ok ? res.json() : Promise.reject("Orders error")),
  fetch(productsURL).then(res => res.ok ? res.json() : Promise.reject("Products error"))
])
.then(([users, orders, products]) => {
  document.getElementById("usersCount").textContent = users.length;
  document.getElementById("ordersCount").textContent = orders.length;
  document.getElementById("productsCount").textContent = products.length;
})
.catch(error => {
  document.getElementById("warning").textContent = "Some data could not be loaded.";

  // Remove skeletons
  document.getElementById("usersCount").innerHTML = "⚠️";
  document.getElementById("ordersCount").innerHTML = "⚠️";
  document.getElementById("productsCount").innerHTML = "⚠️";

  console.log("Error:", error);
});
