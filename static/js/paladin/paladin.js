import { updateComboDisplay, updateAtonementStacks, updateFightOfFlightBuff } from './functions.js';

$(document).ready(function () {
    $("#fast-blade").click(function() {
        $.ajax({
            type: "POST",
            url: "/fast_blade",
            success: function(response) {
                updateComboDisplay(response.combo);
                updateAtonementStacks(response.atonement_stacks);
                updateFightOfFlightBuff(response.fight_or_flight_buff);
            }
        });
    });

    $("#riot-blade").click(function() {
        $.ajax({
            type: "POST",
            url: "/riot_blade",
            success: function(response) {
                updateComboDisplay(response.combo);
                updateAtonementStacks(response.atonement_stacks);
                updateFightOfFlightBuff(response.fight_or_flight_buff);
            }
        });
    });

    $("#royal-authority").click(function() {
        $.ajax({
            type: "POST",
            url: "/royal_authority",
            success: function(response) {
                updateComboDisplay(response.combo);
                updateAtonementStacks(response.atonement_stacks);
                updateFightOfFlightBuff(response.fight_or_flight_buff);
            }
        });
    });
});
