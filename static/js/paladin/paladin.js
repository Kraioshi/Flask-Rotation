import { updateComboDisplay, updateAtonementStacks, updateFightOfFlightBuff, updateStatus } from './functions.js';


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
                updateStatus(response.combo, response.atonement_stacks, response.fight_or_flight_buff);
            }
        });
    });

    $("#royal-authority").click(function() {
        $.ajax({
            type: "POST",
            url: "/royal_authority",
            success: function(response) {
                updateStatus(response.combo, response.atonement_stacks, response.fight_or_flight_buff);
            }
        });
    });

    $("#atonement").click(function () {
        $.ajax({
            type: "POST",
            url: "/atonement",
            success: function(response) {
                updateStatus(response.combo, response.atonement_stacks, response.fight_or_flight_buff);
            }
        })
    });

    $("#goring-blade").click(function() {
        $.ajax({
            type: "POST",
            url: "/goring_blade",
            success: function(response) {
                updateStatus(response.combo, response.atonement_stacks, response.fight_or_flight_buff);
            }
        })
    });
});
