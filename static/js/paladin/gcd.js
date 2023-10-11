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
    }, 2500);
}