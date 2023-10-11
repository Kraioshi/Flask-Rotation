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
});
