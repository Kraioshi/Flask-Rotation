let isOnCooldown = false;


function performAction(button) {
    if (isOnCooldown) {
        return;
    }

    button.disabled = true;

    isOnCooldown = true;

    setTimeout(() => {
        isOnCooldown = false;
        button.disabled = false;
    }, pldGcd * 1000);
}