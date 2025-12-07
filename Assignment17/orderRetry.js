// Function that fails randomly (50% chance)
function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.5 ? resolve("Order Submitted") : reject("Order Failed");
        }, 1000);
    });
}

// Retry Logic: Tries up to 3 times
async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success (${result})`);
            return; // Stop if success
        } catch (err) {
            console.log(`Attempt ${attempt}: Failed (${err})`);
        }
    }
    throw new Error("Order could not be processed");
}

// Execute
(async () => {
    try {
        await processOrder();
    } catch (error) {
        console.log("Final Result:", error.message);
    }
})();
