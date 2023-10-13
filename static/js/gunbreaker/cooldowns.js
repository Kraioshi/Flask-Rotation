// Gnashing Fang
function updateGnashingFangCooldownDisplay(gnashingFangCooldownValue) {
    var $cooldownText = $("#gnashing_fang_cooldown");

    if (gnashingFangCooldownValue === 0) {
        $cooldownText.hide();
    } else {
        $cooldownText.text(gnashingFangCooldownValue).show();
    }
}

// Double Down

function updateDoubleDownCooldownDisplay(doubleDownCooldownValue) {
    var $cooldownText = $("#double_down_cooldown");

    if (doubleDownCooldownValue === 0) {
        $cooldownText.hide();
    } else {
        $cooldownText.text(doubleDownCooldownValue).show();
    }
}

// Sonic Break

function updateSonicBreakCooldownDisplay(sonicBreakCooldownValue) {
    var $cooldownText = $("#sonic_break_cooldown");

    if (sonicBreakCooldownValue === 0) {
        $cooldownText.hide();
    } else {
        $cooldownText.text(sonicBreakCooldownValue).show();
    }
}

// Bloodfest

function updateBloodfestCooldownDisplay(bloodfestCooldownValue) {
    var $cooldownText = $("#bloodfest_cooldown");

    if (bloodfestCooldownValue === 0) {
        $cooldownText.hide();
    } else {
        $cooldownText.text(bloodfestCooldownValue).show();
    }
}

// Blasting Zone

function updateBlastingZoneCooldownDisplay(blastingZoneCooldownValue) {
    var $cooldownText = $("#blasting_zone_cooldown");

    if (blastingZoneCooldownValue === 0) {
        $cooldownText.hide();
    } else {
        $cooldownText.text(blastingZoneCooldownValue).show();
    }
}

// Bow Shock

function updateBowShockCooldownDisplay(bowShockCooldownValue) {
    var $cooldownText = $("#bow_shock_cooldown");

    if (bowShockCooldownValue === 0) {
        $cooldownText.hide();
    } else {
        $cooldownText.text(bowShockCooldownValue).show();
    }
}

// No Mercy

function updateNoMercyCooldownDisplay(noMercyCooldownValue) {
    var $cooldownText = $("#no_mercy_cooldown");

    if (noMercyCooldownValue === 0) {
        $cooldownText.hide();
    } else {
        $cooldownText.text(noMercyCooldownValue).show();
    }
}


// Rough Divide

function updateRoughDivideCooldownDisplay(roughDivideCooldown) {
    var $cooldownText = $("#rough_divide_cooldown");

    if (roughDivideCooldown === 0) {
        $cooldownText.hide();
    } else {
        $cooldownText.text(roughDivideCooldown).show();
    }
}

// Rough Divide Stacks

function updateRoughDivideStacksDisplay(roughDivideStacks) {
    var $stackText = $("#rough_divide_stacks");

    if (roughDivideStacks === 0) {
        $stackText.hide();
    } else {
        $stackText.text(roughDivideStacks).show();
    }
}