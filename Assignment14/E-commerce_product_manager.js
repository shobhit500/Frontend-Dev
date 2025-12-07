"use strict";

// Product class blueprint
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Method to apply a discount (percentage as number)
    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    // Method to display formatted product info
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

// Creating product objects
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Shoes", 1200, "Fashion"),
    new Product(3, "Book", 450, "Education"),
    new Product(4, "Smartwatch", 2500, "Electronics")
];

// Apply discount on all products (example: 10%)
products.forEach(p => p.applyDiscount(10));

// Filter products with price > 1000
const expensiveProducts = products.filter(p => p.price > 1000);

// Display filtered products
console.log("Products priced above ₹1000:");
expensiveProducts.forEach(p => console.log(p.getDetails()));
