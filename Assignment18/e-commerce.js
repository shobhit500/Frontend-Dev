// E-COMMERCE INVENTORY SYSTEM
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
  { id: 2, name: "Mouse", category: "Electronics", price: 500, stock: 50 },
  { id: 3, name: "Shirt", category: "Fashion", price: 1200, stock: 2 },
  { id: 4, name: "Shoes", category: "Fashion", price: 2500, stock: 10 },
  { id: 5, name: "Book", category: "Education", price: 300, stock: 100 }
];

// 1. Get Low Stock Products using filter()
function getLowStockProducts(limit = 10) {
  return products.filter(p => p.stock < limit);
}

// 2. Sort Products by Price using sort()
function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

// 3. Calculate Total Inventory Value using reduce()
function calculateTotalInventoryValue() {
  return products.reduce((total, p) => total + (p.price * p.stock), 0);
}

// 4. Group Products by Category using reduce()
function groupByCategory() {
  return products.reduce((group, p) => {
    if (!group[p.category]) {
      group[p.category] = [];
    }
    group[p.category].push(p);
    return group;
  }, {});
}

// -------------------------------
// TESTING OUTPUT
// -------------------------------

console.log("Low Stock Products (<10):");
console.log(getLowStockProducts());

console.log("\nProducts Sorted by Price:");
console.log(sortProductsByPrice());

console.log("\nTotal Inventory Value:");
console.log(calculateTotalInventoryValue());

console.log("\nProducts Grouped by Category:");
console.log(groupByCategory());
