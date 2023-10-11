let isOnCooldown = false;
let cooldownDuration = pldGcd * 1000; // Calculate the cooldown duration

function performAction(button) {
    if (isOnCooldown) {
        return;
    }

    button.disabled = true;

    isOnCooldown = true;

    const cooldownInterval = 100; // Update every 1 second
    let remainingTime = cooldownDuration;

 // Reset the animation
    const circle = document.querySelector(".progress-circle");
    circle.classList.add("reset-animation");
    setTimeout(() => {
        circle.classList.remove("reset-animation");
    }, 0); // Delay needed to trigger the reset

    // Function to update the countdown display
    function updateCountdownDisplay() {
        const countdownElement = document.querySelector("#cooldown-countdown");
        countdownElement.textContent = (remainingTime / 1000).toFixed(1);

        if (remainingTime <= 0) {
            clearInterval(countdownIntervalId);
            countdownElement.textContent = "0.0";
        }

        remainingTime -= cooldownInterval;
    }

    const countdownIntervalId = setInterval(updateCountdownDisplay, cooldownInterval);

    setTimeout(() => {
        isOnCooldown = false;
        button.disabled = false;
        clearInterval(countdownIntervalId);
        clearCountdownDisplay();
    }, cooldownDuration);
}

// Function to clear the countdown display
function clearCountdownDisplay() {
    document.querySelector("#cooldown-countdown").textContent = "";
}
