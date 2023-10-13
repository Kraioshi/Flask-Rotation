export function updateComboDisplay(comboState) {
    $("#combo-state").text('Combo State: ' + comboState);
}

export function updateAtonementStacks(atonementStacks) {
    $("#atonement-stacks").text('Atonement Stacks: ' + atonementStacks);
}

export function updateFightOfFlightBuff(fightOrFlightBuff) {
    $("#fight-or-flight-buff").text('Fight or Flight Buff: ' + fightOrFlightBuff);
}

export function updateStatus(comboState, atonementStacks, fightOrFlightBuff) {
    updateComboDisplay(comboState);
    updateAtonementStacks(atonementStacks);
    updateFightOfFlightBuff(fightOrFlightBuff);
}
