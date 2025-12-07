// Q4_asyncTimeoutRace.js
// DevOps Delay: Async Timeout Race Simulation

// Server A – responds in 2 sec
function serverA() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.2; // 20% random failure
        setTimeout(() => {
            if (fail) reject("Server A failed!");
            else resolve("Server A response in 2s");
        }, 2000);
    });
}

// Server B – responds in 3 sec
function serverB() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.2; // 20% random failure
        setTimeout(() => {
            if (fail) reject("Server B failed!");
            else resolve("Server B response in 3s");
        }, 3000);
    });
}

// Run both concurrently using Promise.all()
Promise.all([serverA(), serverB()])
    .then(results => {
        console.log("Deployment completed for all servers");
        console.log("Results:", results);
    })
    .catch(err => {
        console.error("Deployment Error:", err);
    });

// Check who responds first using Promise.race()
Promise.race([serverA(), serverB()])
    .then(fastest => {
        console.log("Fastest response:", fastest);
    })
    .catch(err => {
        console.error("Race Error:", err);
    });
