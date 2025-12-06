let count = 0;

function counterSimulator() {
    function increment() {
        count++;
        console.log(`Count after increment: ${count}`);
    }

    function decrement() {
        count--;
        console.log(`Count after decrement: ${count}`);
    }

    // Simulate clicks
    increment();
    increment();
    decrement();
    increment();
}

counterSimulator();
