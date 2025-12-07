function design(cb) {
    setTimeout(() => {
        console.log("Designing...");
        cb();
    }, 1000);
}

function build(cb) {
    setTimeout(() => {
        console.log("Building...");
        cb();
    }, 1000);
}

function test(cb) {
    setTimeout(() => {
        console.log("Testing...");
        cb();
    }, 1000);
}

function deploy(cb) {
    setTimeout(() => {
        console.log("Deploying...");
        cb();
    }, 1000);
}

function celebrate(cb) {
    setTimeout(() => {
        console.log("Celebrating! 🎉");
        cb();
    }, 1000);
}

// ---- CALLBACK HELL ----
design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => {
                    console.log("Pipeline Completed!");
                });
            });
        });
    });
});
