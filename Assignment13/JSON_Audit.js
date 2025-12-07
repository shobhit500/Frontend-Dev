"use strict";

/*
Q9 – JSON Audit

- Parse each raw JSON string safely (try...catch).
- Detect invalid JSON and missing keys ("user", "age").
- Build cleanEntries array for valid parsed objects.
- Log errors with line numbers and error reasons.
- Convert age to Number and separate/filter users under 18.
- Debug tracing included to show control flow on errors.
*/

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanEntries = [];    // valid parsed objects (age converted to Number)
const errorLogs = [];       // { line, raw, reason }
const minors = [];          // users with age < 18 (after conversion)

// Loop through each entry with index for line numbers
for (let i = 0; i < rawData.length; i++) {
  const lineNum = i + 1;
  const raw = rawData[i];

  // Debug: show start of processing this line
  console.log(`Processing line ${lineNum}:`, raw);

  try {
    // Attempt to parse JSON
    let parsed = JSON.parse(raw);

    // Debug: show parsed object
    console.log(`  Parsed (line ${lineNum}):`, parsed);

    // Validate presence of required keys
    if (!("user" in parsed) || !("age" in parsed)) {
      throw new Error("Missing required key(s): 'user' and/or 'age'");
    }

    // Convert age to Number and validate
    const ageNum = Number(parsed.age);
    if (Number.isNaN(ageNum)) {
      throw new Error("Invalid age value (not a number)");
    }

    // Replace age with numeric form
    parsed.age = ageNum;

    // Separate minors (bonus requirement)
    if (parsed.age < 18) {
      minors.push(parsed);
      console.log(`  Note: user '${parsed.user}' is under 18 (line ${lineNum})`);
    } else {
      cleanEntries.push(parsed);
      console.log(`  Valid entry added (line ${lineNum}):`, parsed);
    }

  } catch (err) {
    // Catch JSON.parse errors and validation errors
    const reason = err instanceof SyntaxError ? "Invalid JSON" : err.message;
    errorLogs.push({ line: lineNum, raw, reason });
    console.log(`  Error (line ${lineNum}): ${reason}`);
  }
}

// Final Reports
console.log("\n=== Final Report ===");
console.log("Clean Entries (age >= 18):");
console.table(cleanEntries);

console.log("Minors (age < 18):");
console.table(minors);

console.log("Errors:");
console.table(errorLogs);
