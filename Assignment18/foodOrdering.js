// Q2. Online Food Ordering (map + Error Handling)

// Menu list (item: price)
const menu = {
    pizza: 250,
    burger: 120,
    pasta: 180,
    fries: 90,
    coke: 40
};

// Function to calculate bill
function calculateBill(orderItems) {
    try {
        // Convert ordered items to prices using map()
        const prices = orderItems.map(item => {
            if (!menu[item]) {
                throw new Error(`Invalid item ordered: ${item}`);
            }
            return menu[item];
        });

        // Calculate total using reduce()
        const total = prices.reduce((sum, price) => sum + price, 0);

        console.log("Order Items:", orderItems.join(", "));
        console.log("Prices:", prices);
        console.log("Total Bill: ₹" + total);
    }
    catch (err) {
        console.log("Error:", err.message);
    }
}

// Test cases
calculateBill(["pizza", "coke", "fries"]);     // valid order
calculateBill(["burger", "icecream"]);          // error for invalid item
