let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let accessStatus = (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) ? "Secure" : "Unsafe";

console.log(`Access Status: ${accessStatus}`);

// Test different scenarios
isOwnerInside = false;
accessStatus = (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) ? "Secure" : "Unsafe";
console.log(`Access Status (Owner outside): ${accessStatus}`);

isAlarmOn = false;
accessStatus = (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) ? "Secure" : "Unsafe";
console.log(`Access Status (Alarm off): ${accessStatus}`);
