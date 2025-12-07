// Functions (with random rejection)
function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.5 ? reject("Profile Failed") : resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.5 ? reject("Posts Failed") : resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.5 ? reject("Messages Failed") : resolve("Messages Loaded");
        }, 1000);
    });
}

// Main execution
const startTime = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
    .then(results => {
        console.log("=== Module Status ===");
        results.forEach((res, i) => {
            const names = ["Profile", "Posts", "Messages"];
            console.log(names[i] + ":", res.status === "fulfilled" ? res.value : res.reason);
        });

        const total = (Date.now() - startTime) / 1000;
        console.log(`Total Time Taken: ${total} seconds`);
    });
