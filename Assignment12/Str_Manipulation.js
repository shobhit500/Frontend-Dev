let productName = " wireless headphones PRO ";

// Trim spaces and convert to lowercase
let cleanedName = productName.trim().toLowerCase();

// Capitalize first letter of each word
cleanedName = cleanedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" with "Pro Edition"
cleanedName = cleanedName.replace("Pro", "Pro Edition");

// Display results
console.log(`Cleaned Product Title: ${cleanedName}`);
console.log(`Title Length: ${cleanedName.length}`);
