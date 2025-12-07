// Q3. Product Discount System (Constructor + Prototype)

// Constructor function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype method to apply discount
Product.prototype.applyDiscount = function (percent) {
    const discountAmount = (this.price * percent) / 100;
    const newPrice = this.price - discountAmount;
    return newPrice;
};

// Create products
const p1 = new Product("Laptop", 60000);
const p2 = new Product("Headphones", 2000);
const p3 = new Product("Keyboard", 1500);

// Apply discounts
console.log(p1.name, "New Price:", p1.applyDiscount(10));  // 10% off
console.log(p2.name, "New Price:", p2.applyDiscount(20));  // 20% off
console.log(p3.name, "New Price:", p3.applyDiscount(15));  // 15% off

// Simple abstraction explanation
console.log("\nAbstraction: We hide the discount logic inside applyDiscount(),");
console.log("so users only call one method without knowing calculation details.");
