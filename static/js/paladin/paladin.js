$(document).ready(function () {
    function updateComboDisplay(comboState) {
        $("#combo-state").text('Combo State: ' + comboState);
    }

    function updateAtonementStacks(atonementStacks) {
        $("#atonement-stacks").text('Atonement Stacks: ' + atonementStacks);
    }

    $("#fast-blade").click(function() {
        $.ajax({
            type: "POST",
            url: "/fast_blade",
            success: function(response) {
                updateComboDisplay(response.combo);
                updateAtonementStacks(response.atonement_stacks);
            }
        });
    });
});

