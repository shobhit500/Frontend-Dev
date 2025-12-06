let userName = "Shobhit";          // string
let userAge = 21;                  // number
let isVerified = true;             // boolean
let hobbies = ["Reading", "Gaming", "Traveling"]; // array
let userProfile = { id: 1, city: "Delhi" };       // object
let lastLogin = null;               // null
let premiumMember;                  // undefined

// Step 2: Create an array of entries to summarize each variable
let dataSummary = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "User Age", Value: userAge, Type: typeof userAge },
    { Label: "Verified?", Value: isVerified, Type: typeof isVerified },
    { Label: "Hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { Label: "Profile", Value: JSON.stringify(userProfile), Type: typeof userProfile },
    { Label: "Last Login", Value: lastLogin, Type: lastLogin === null ? "null" : typeof lastLogin },
    { Label: "Premium Member", Value: premiumMember, Type: typeof premiumMember }
];

// Step 3: Display the summary in a formatted table
console.table(dataSummary);
