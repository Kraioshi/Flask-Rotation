// Bloodfest

function updateBloodfestButtonState(bloodfestCooldown) {

    if (bloodfestCooldown != 0) {
        $("#disabled-bloodfest").prop("disabled", true);
        $("#bloodfest").prop("disabled", true);

    } else {
        $("#disabled-bloodfest").prop("disabled", false);
        $("#bloodfest").prop("disabled", false);
        }
    }

// Blasting Zone

function updateBlastingZoneButtonState(blastingZoneCooldown) {

    if (blastingZoneCooldown != 0) {
        $("#disabled-blasting-zone").prop("disabled", true);
        $("#blasting-zone").prop("disabled", true);

    } else {
        $("#disabled-blasting-zone").prop("disabled", false);
        $("#blasting-zone").prop("disabled", false);
        }
    }

// Bow Shock

function updateBowShockButtonState(bowShockCooldown) {

    if (bowShockCooldown != 0) {
        $("#disabled-bow-shock").prop("disabled", true);
        $("#bow-shock").prop("disabled", true);

    } else {
        $("#disabled-bow-shock").prop("disabled", false);
        $("#bow-shock").prop("disabled", false);
        }
    }

// No Mercy

function updateNoMercyButtonState(noMercyCooldown) {

    if (noMercyCooldown != 0) {
        $("#disabled-no-mercy").prop("disabled", true);
        $("#no-mercy").prop("disabled", true);

    } else {
        $("#disabled-no-mercy").prop("disabled", false);
        $("#no-mercy").prop("disabled", false);
        }
    }

// Sonic Break

function updateSonicBreakButtonState(sonicBreakCooldown) {

    if (sonicBreakCooldown != 0) {
        $("#disabled-sonic-break").prop("disabled", true);
        $("#sonic-break").prop("disabled", true);

    } else {
        $("#disabled-sonic-break").prop("disabled", false);
        $("#sonic-break").prop("disabled", false);
        }
    }

// Burst Strike

function updateBurstStrikeButtonState(cartridgeValue) {

    if (cartridgeValue === 0) {
        $("#disabled-burst-strike").prop("disabled", true);
        $("#burst-strike").prop("disabled", true);

    } else {
        $("#disabled-burst-strike").prop("disabled", false);
        $("#burst-strike").prop("disabled", false);

    }
}

// Rough Divide

function updateRoughDivideButton(roughDivideStacks) {

    if (roughDivideStacks > 0) {
        $("#disabled-rough-divide").prop("disabled", false);
        $("#rough-divide").prop("disabled", false);

    } else {
        $("#disabled-rough-divide").prop("disabled", true);
        $("#rough-divide").prop("disabled", true);
        }
    }

// Double Down

function updateDoubleDownButtonState(doubleDownCooldown, cartridgeValue ) {

    if (doubleDownCooldown === 0 && cartridgeValue >= 2 ) {
        $("#disabled-double-down").prop("disabled", false);
        $("#double-down").prop("disabled", false);

    } else {
        $("#disabled-double-down").prop("disabled", true);
        $("#double-down").prop("disabled", true);
        }
    }

// Gnashing Fang

function updateGnashingFangButtonState(gnashingFangCooldown, cartridgeValue ) {

    if (gnashingFangCooldown === 0 && cartridgeValue >= 1 ) {
        $("#disabled-gnashing-fang").prop("disabled", false);
        $("#gnashing-fang").prop("disabled", false);

    } else {
        $("#disabled-gnashing-fang").prop("disabled", true);
        $("#gnashing-fang").prop("disabled", true);
        }
    }

function updateGnashingFangVisibility(savageClawReady, wickedTalonReady) {

        if (savageClawReady || wickedTalonReady) {
            $("#gnashing-fang").css("display", "none");
        } else {
            $("#gnashing-fang").css("display", "inline-block");
        }
    }

// Savage Claw

function updateSavageClawButtonState(savageClawReady) {

        if (!savageClawReady) {
            $("#savage-claw").css("display", "none");
        } else {
            $("#savage-claw").css("display", "inline-block");
        }
    }

// Wicked Talon
function updateWickedTalonButtonState(wickedTalonReady) {

        if (!wickedTalonReady) {
            $("#wicked-talon").css("display", "none");
        } else {
            $("#wicked-talon").css("display", "inline-block");
        }
    }


// Hypervelocity

function updateHypervelocityButtonState(readyToBlast) {

        if (!readyToBlast) {
            $("#hypervelocity").css("display", "none");
        } else {
            $("#hypervelocity").css("display", "inline-block");
        }
    }

// Jugular Rip

function updateJugularRipButtonState(readyToRip) {

        if (!readyToRip) {
            $("#jugular-rip").css("display", "none");
        } else {
            $("#jugular-rip").css("display", "inline-block");
        }
    }

// Abdomen Tear
function updateAbdomenTearButtonState(readyToTear) {

        if (!readyToTear) {
            $("#abdomen-tear").css("display", "none");
        } else {
            $("#abdomen-tear").css("display", "inline-block");
        }
    }


// Eye Gouge

function updateEyeGougeButtonState(readyToGouge) {

        if (!readyToGouge) {
            $("#eye-gouge").css("display", "none");
        } else {
            $("#eye-gouge").css("display", "inline-block");
        }
    }

// Continuation

function updateContinuationButtonState(readyToBlast, readyToRip, readyToTear, readyToGouge) {

        if (readyToBlast || readyToRip || readyToTear || readyToGouge) {
            $("#continuation").css("display", "none");
        } else {
            $("#continuation").css("display", "inline-block");
        }
    }