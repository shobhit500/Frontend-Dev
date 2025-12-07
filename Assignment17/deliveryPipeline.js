function randomDelay() {
    return Math.floor(Math.random() * 1000) + 1000;
}

// Generic async step creator
function createStep(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% success rate
            if (success) resolve(message);
            else reject("Step failed!");
        }, randomDelay());
    });
}

// Individual pipeline steps
function takeOrder() {
    return createStep("Step 1: Order taken");
}

function prepare() {
    return createStep("Step 2: Food prepared");
}

function pack() {
    return createStep("Step 3: Package ready");
}

function dispatch() {
    return createStep("Step 4: Out for delivery");
}

function deliver() {
    return createStep("Delivery completed!");
}

/*
  runPipeline() controls the full flow using async/await.
  The event loop executes each awaited promise in sequence.
  If any promise rejects, we jump to the catch block.
*/
async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // Await ensures each step completes before moving to the next
        const step1 = await takeOrder();
        console.log(step1);

        const step2 = await prepare();
        console.log(step2);

        const step3 = await pack();
        console.log(step3);

        const step4 = await dispatch();
        console.log(step4);

        const finalStep = await deliver();
        console.log(finalStep);

        console.log("Pipeline finished successfully!");
    } 
    catch (error) {
        // If any step rejects, control jumps here immediately
        console.log("Pipeline failed!");
        console.log("Reason:", error);
    }
}

// Run the pipeline
runPipeline();

/*
   EXPLANATION OF ASYNC BEHAVIOR:

  - async/await is syntactic sugar over Promises.
  - await pauses execution inside runPipeline() but does NOT block the event loop.
  - The event loop continues executing other tasks while the promise is pending.
  - Once the promise resolves/rejects, the awaiting function resumes.

  CONTROL FLOW:
  1. Synchronous log: "Start Pipeline"
  2. Await takeOrder():
     - pauses runPipeline()
     - event loop handles timer asynchronously
  3. Once resolved → prints Step 1 message
  4. Same flow continues for all steps
  5. If any step fails → jump to catch block
*/
