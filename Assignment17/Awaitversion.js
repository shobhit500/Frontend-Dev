function wait(stage) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stage);
            resolve();
        }, 1000);
    });
}

async function pipeline() {
    await wait("Designing...");
    await wait("Building...");
    await wait("Testing...");
    await wait("Deploying...");
    await wait("Celebrating! 🎉");

    console.log("Pipeline Completed!");
}

pipeline();
