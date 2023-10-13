// No Mercy
function updateNoMercyBuffText(noMercyBuffValue) {
    var $buffText = $("#no_mercy_buff_text");

    if (noMercyBuffValue === 0) {
        $buffText.hide();
    } else {
        $buffText.text(noMercyBuffValue).show();
    }
}

function updateNoMercyBuffVisibility(noMercyBuffValue) {

    if (noMercyBuffValue === 0) {
        $("#no_mercy_buff_icon").css("display", "none");
    } else {
        $("#no_mercy_buff_icon").css("display", "inline-block");
    }
}

// Brutal Shell

function updateBrutalShellBuffText(brutalShellBuffValue) {
    var $buffText = $("#brutal_shell_buff_text");

    if (brutalShellBuffValue === 0) {
        $buffText.hide();
    } else {
        $buffText.text(brutalShellBuffValue).show();
    }
}

function updateBrutalShellBuffVisibility(brutalShellBuffValue) {

    if (brutalShellBuffValue === 0) {
        $("#brutal_shell_buff_icon").css("display", "none");
    } else {
        $("#brutal_shell_buff_icon").css("display", "inline-block");
    }
}

// Hypervelocity

function updateHypervelocityBuffText(hypervelocityBuffValue) {
    var $buffText = $("#hypervelocity_buff_text");

    if (hypervelocityBuffValue === 0) {
        $buffText.hide();
    } else {
        $buffText.text(hypervelocityBuffValue).show();
    }
}

function updateHypervelocityBuffVisibility(hypervelocityBuffValue) {

    if (hypervelocityBuffValue === 0) {
        $("#hypervelocity_buff_icon").css("display", "none");
    } else {
        $("#hypervelocity_buff_icon").css("display", "inline-block");
    }
}

// Jugular Rip
function updateJugularRipBuffVisibility(readyToRip) {

    if (!readyToRip) {
        $("#ready_to_rip_icon").css("display", "none");
    } else {
        $("#ready_to_rip_icon").css("display", "inline-block");
    }
}

// Abdomen Tear

function updateAbdomenTearBuffVisibility(readyToTear) {

    if (!readyToTear) {
        $("#ready_to_tear_icon").css("display", "none");
    } else {
        $("#ready_to_tear_icon").css("display", "inline-block");
    }
}

// Eye Gouge

function updateEyeGougeBuffVisibility(readyToGouge) {

    if (!readyToGouge) {
        $("#ready_to_gouge_icon").css("display", "none");
    } else {
        $("#ready_to_gouge_icon").css("display", "inline-block");
    }
}