class Cart {
  constructor() {
    this.items = [];
    this.discount = 0;
  }

  // Add item to cart
  addItem(name, price, quantity = 1) {
    this.items.push({ name, price, quantity });
  }

  // Calculate total before discount
  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Apply coupon code
  applyCoupon(code) {
    const couponRegex = /^(SAVE|DISC)(\d{1,2})$/i;
    const match = code.match(couponRegex);

    if (match) {
      const percent = parseInt(match[2], 10);
      this.discount = percent;
      return true;
    } else {
      this.discount = 0;
      return false;
    }
  }

  // Get final total after discount
  getFinalTotal() {
    const total = this.getTotal();
    return total - (total * this.discount) / 100;
  }
}

// Example usage
const myCart = new Cart();
myCart.addItem("Laptop", 45000, 1);
myCart.addItem("Shoes", 2500, 2);
myCart.addItem("Book", 600, 3);

console.log(`Cart Total: ₹${myCart.getTotal()}`);

// Apply coupon
const couponCode = "SAVE10";
if (myCart.applyCoupon(couponCode)) {
  console.log(`Coupon applied: ${myCart.discount}% off`);
} else {
  console.log("Invalid coupon code");
}

console.log(`Final Total: ₹${myCart.getFinalTotal()}`);
