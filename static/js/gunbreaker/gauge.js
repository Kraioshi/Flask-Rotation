// First

export function updateCartridgeOne(cartridgeValue) {
    var $cartridgeOneEmpty = $("#gnb_cartridge_one_empty");
    var $cartridgeOneFull = $("#gnb_cartridge_one_full");

    if (cartridgeValue > 0) {
        $cartridgeOneEmpty.hide();
        $cartridgeOneFull.show();
    } else {
        $cartridgeOneEmpty.show();
        $cartridgeOneFull.hide();
    }
}

// Second

export function updateCartridgeTwo(cartridgeValue) {
    var $cartridgeTwoEmpty = $("#gnb_cartridge_two_empty");
    var $cartridgeTwoFull = $("#gnb_cartridge_two_full");

    if (cartridgeValue > 1) {
        $cartridgeTwoEmpty.hide();
        $cartridgeTwoFull.show();
    } else {
        $cartridgeTwoEmpty.show();
        $cartridgeTwoFull.hide();
    }
}

// Third

export function updateCartridgeThree(cartridgeValue) {
    var $cartridgeThreeEmpty = $("#gnb_cartridge_three_empty");
    var $cartridgeThreeFull = $("#gnb_cartridge_three_full");

    if (cartridgeValue > 2) {
        $cartridgeThreeEmpty.hide();
        $cartridgeThreeFull.show();
    } else {
        $cartridgeThreeEmpty.show();
        $cartridgeThreeFull.hide();
    }
}

// Gauge

export function updateGauge(cartridgeValue) {
    updateCartridgeOne(cartridgeValue);
    updateCartridgeTwo(cartridgeValue);
    updateCartridgeThree(cartridgeValue);
}