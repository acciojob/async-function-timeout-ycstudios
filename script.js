//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    let text = document.getElementById("text").value;  // Get text input
    let delay = document.getElementById("delay").value; // Get delay input
    let outputDiv = document.getElementById("output");

    // Clear previous output
    outputDiv.innerHTML = "";

    // Validate input
    if (!text.trim()) {
        outputDiv.innerHTML = "Please enter a message.";
        return;
    }
    if (!delay || delay < 0) {
        outputDiv.innerHTML = "Please enter a valid delay time.";
        return;
    }

    // Convert delay to number
    delay = Number(delay);

    // Function to introduce delay using async/await
    async function showMessageAfterDelay(message, delayTime) {
        await new Promise(resolve => setTimeout(resolve, delayTime)); // Delay
        outputDiv.innerHTML = message; // Display message after delay
    }

    // Call async function
    await showMessageAfterDelay(text, delay);
});
