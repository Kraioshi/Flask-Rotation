// Bow shock Debuff

function updateBowShockDebuffText(bowShockDebuffValue) {
            var $buffText = $("#bow_shock_debuff_text");

            if (bowShockDebuffValue === 0) {
                $buffText.hide();
            } else {
                $buffText.text(bowShockDebuffValue).show();
            }
        }

// Bow Shock visibility
function updateBowShockDebuffVisibility(bowShockDebuffValue) {

    if (bowShockDebuffValue === 0) {
        $("#bow_shock_debuff_icon").css("display", "none");
    } else {
        $("#bow_shock_debuff_icon").css("display", "inline-block");
    }
}

// Sonic Break
function updateSonicBreakDebuffText(SonicBreakDebuffValue) {
    var $buffText = $("#sonic_break_debuff_text");

    if (SonicBreakDebuffValue === 0) {
        $buffText.hide();
    } else {
        $buffText.text(SonicBreakDebuffValue).show();
    }
}

// Sonic Break Visibility

function updateSonicBreakDebuffVisibility(SonicBreakDebuffValue) {

    if (SonicBreakDebuffValue === 0) {
        $("#sonic_break_debuff_icon").css("display", "none");
    } else {
        $("#sonic_break_debuff_icon").css("display", "inline-block");
    }
}