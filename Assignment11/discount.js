let totalPurchase = 7200; 
let discountPercentage = 0;

if (totalPurchase >= 10000) {
    discountPercentage = 25;
} else if (totalPurchase >= 5000) {
    discountPercentage = 15;
} else if (totalPurchase >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Step 3: Calculate final price after discount
let discountAmount = (totalPurchase * discountPercentage) / 100;
let finalPrice = totalPurchase - discountAmount;

// Step 4: Round values using Math.round
totalPurchase = Math.round(totalPurchase);
discountAmount = Math.round(discountAmount);
finalPrice = Math.round(finalPrice);

// Step 5: Display results
console.log("Progressive Discount Summary:");
console.log("-------------------------------");
console.log(`Original Total: ₹${totalPurchase}`);
console.log(`Discount Percentage: ${discountPercentage}%`);
console.log(`Discount Amount: ₹${discountAmount}`);
console.log(`Final Price after Discount: ₹${finalPrice}`);
