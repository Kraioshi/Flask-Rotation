$(document).ready(function () {
    function updateComboState(comboState) {
        $("#combo-fast").text(comboState);
    }

    $("#fast-blade").click(function() {
        $.ajax({
            type: "POST",
            url: "/fast_blade",
            success: function(response) {
                updateComboState(response.combo);
            }
        });
    });
});

