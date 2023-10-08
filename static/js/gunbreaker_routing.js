$(document).ready(function () {
        function updateComboDisplay(comboValue) {
            $("#combo").text("Combo: " + comboValue);
        }

        function updateCartridgeDisplay(cartridgeValue) {
            $("#cartridge").text("Cartridge: " + cartridgeValue);
        }

        function updateGnashingFangCooldownDisplay(gnashingFangCooldownValue) {
            $("#gnashing_fang_cooldown").text("Gnashing Fang CD: " + gnashingFangCooldownValue);
        }

        function updateDoubleDownCooldownDisplay(doubleDownCooldownValue) {
            $("#double_down_cooldown").text("Double Down CD: " + doubleDownCooldownValue)
        }

        function updateSonicBreakCooldownDisplay(sonicBreakCooldownValue) {
            $("#sonic_break_cooldown").text("Sonic Break CD: " + sonicBreakCooldownValue)
        }

        function updateBloodfestCooldownDisplay(bloodfestCooldownValue) {
            $("#bloodfest_cooldown").text("Bloodfest CD: " + bloodfestCooldownValue)
        }

        function updateBlastingZoneCooldownDisplay(blastingZoneCooldownValue) {
            $("#blasting_zone_cooldown").text("Blasting Zone CD: " + blastingZoneCooldownValue)
        }

        function updateBowShockCooldownDisplay(bowShockCooldownValue) {
            $("#bow_shock_cooldown").text("Bow Shock CD: " + bowShockCooldownValue)
        }

        function updateNoMercyCooldownDisplay(noMercyCooldownValue) {
            $("#no_mercy_cooldown").text("No Mercy CD: " + noMercyCooldownValue)
        }

        function updateRoughDivideCooldownDisplay(roughDivideCooldown) {
            $("#rough_divide_cooldown").text("Rough Divide CD: " + roughDivideCooldown)
        }

        function updateRoughDivideStacksDisplay(roughDivideStacks) {
            $("#rough_divide_stacks").text("Rough Divide Stacks: " + roughDivideStacks)
        }

        function updateHypervelocityDisplay(readyToBlast) {
            $("#ready_to_blast").text("Hypervelocity: " + readyToBlast)
        }

        function updateJugularRipDisplay(readyToRip) {
            $("#ready_to_rip").text("Jugular Rip: " + readyToRip)
        }




        function updateBloodfestButtonState(bloodfestCooldown) {

        if (bloodfestCooldown != 0) {
            $("#disabled-bloodfest").prop("disabled", true);
            $("#bloodfest").prop("disabled", true);

        } else {
            $("#disabled-bloodfest").prop("disabled", false);
            $("#bloodfest").prop("disabled", false);
            }
        }


        function updateBlastingZoneButtonState(blastingZoneCooldown) {

        if (blastingZoneCooldown != 0) {
            $("#disabled-blasting-zone").prop("disabled", true);
            $("#blasting-zone").prop("disabled", true);

        } else {
            $("#disabled-blasting-zone").prop("disabled", false);
            $("#blasting-zone").prop("disabled", false);
            }
        }

        function updateBowShockButtonState(bowShockCooldown) {

        if (bowShockCooldown != 0) {
            $("#disabled-bow-shock").prop("disabled", true);
            $("#bow-shock").prop("disabled", true);

        } else {
            $("#disabled-bow-shock").prop("disabled", false);
            $("#bow-shock").prop("disabled", false);
            }
        }

        function updateNoMercyButtonState(noMercyCooldown) {

        if (noMercyCooldown != 0) {
            $("#disabled-no-mercy").prop("disabled", true);
            $("#no-mercy").prop("disabled", true);

        } else {
            $("#disabled-no-mercy").prop("disabled", false);
            $("#no-mercy").prop("disabled", false);
            }
        }

        function updateSonicBreakButtonState(sonicBreakCooldown) {

        if (sonicBreakCooldown != 0) {
            $("#disabled-sonic-break").prop("disabled", true);
            $("#sonic-break").prop("disabled", true);

        } else {
            $("#disabled-sonic-break").prop("disabled", false);
            $("#sonic-break").prop("disabled", false);
            }
        }

        updateBurstStrikeButtonState({{ gnb.cartridge }});

        function updateBurstStrikeButtonState(cartridgeValue) {

        if (cartridgeValue === 0) {
            $("#disabled-burst-strike").prop("disabled", true);
            $("#burst-strike").prop("disabled", true);

        } else {
            $("#disabled-burst-strike").prop("disabled", false);
            $("#burst-strike").prop("disabled", false);

        }
    }

        function updateRoughDivideButton(RoughDivideStacks) {

        if (RoughDivideStacks > 0) {
            $("#disabled-rough-divide").prop("disabled", false);
            $("#rough-divide").prop("disabled", false);

        } else {
            $("#disabled-rough-divide").prop("disabled", true);
            $("#rough-divide").prop("disabled", true);
            }
        }


        updateDoubleDownButtonState( {{gnb.double_down_cooldown}}, {{ gnb.cartridge }} );

        function updateDoubleDownButtonState(doubleDownCooldown, cartridgeValue ) {

        if (doubleDownCooldown === 0 && cartridgeValue >= 2 ) {
            $("#disabled-double-down").prop("disabled", false);
            $("#double-down").prop("disabled", false);

        } else {
            $("#disabled-double-down").prop("disabled", true);
            $("#double-down").prop("disabled", true);
            }
        }


        updateGnashingFangButtonState( {{gnb.gnashing_fang_cooldown}}, {{gnb.cartridge }} );

        function updateGnashingFangButtonState(gnashingFangCooldown, cartridgeValue ) {

        if (gnashingFangCooldown === 0 && cartridgeValue >= 1 ) {
            $("#disabled-gnashing-fang").prop("disabled", false);
            $("#gnashing-fang").prop("disabled", false);

        } else {
            $("#disabled-gnashing-fang").prop("disabled", true);
            $("#gnashing-fang").prop("disabled", true);
            }
        }


        updateHypervelocityButtonState();

        function updateHypervelocityButtonState(readyToBlast) {

            if (!readyToBlast) {
                $("#disabled-hypervelocity").prop("disabled", true);
                $("#hypervelocity").prop("disabled", true);
            } else {
                $("#disabled-hypervelocity").prop("disabled", false);
                $("#hypervelocity").prop("disabled", false);
            }
        }

        updateJugularRipButtonState();

        function updateJugularRipButtonState(readyToRip) {

            if (!readyToRip) {
                $("#disabled-jugular-rip").prop("disabled", true);
                $("#jugular-rip").prop("disabled", true);
            } else {
                $("#disabled-jugular-rip").prop("disabled", false);
                $("#jugular-rip").prop("disabled", false);
            }
        }

        updateSavageClawButtonState();

        function updateSavageClawButtonState(savageClawReady) {

            if (!savageClawReady) {
                $("#disabled-savage-claw").prop("disabled", true);
                $("#savage-claw").prop("disabled", true);
            } else {
                $("#disabled-savage-claw").prop("disabled", false);
                $("#savage-claw").prop("disabled", false);
            }
        }

        updateAbdomenTearButtonState();

        function updateAbdomenTearButtonState(readyToTear) {

            if (!readyToTear) {
                $("#disabled-abdomen-tear").prop("disabled", true);
                $("#abdomen-tear").prop("disabled", true);
            } else {
                $("#disabled-abdomen-tear").prop("disabled", false);
                $("#abdomen-tear").prop("disabled", false);
            }
        }

        updateWickedTalonButtonState();

        function updateWickedTalonButtonState(wickedTalonReady) {

            if (!wickedTalonReady) {
                $("#disabled-wicked-talon").prop("disabled", true);
                $("#wicked-talon").prop("disabled", true);
            } else {
                $("#disabled-wicked-talon").prop("disabled", false);
                $("#wicked-talon").prop("disabled", false);
            }
        }

        updateEyeGougeButtonState();

        function updateEyeGougeButtonState(readyToGouge) {

            if (!readyToGouge) {
                $("#disabled-eye-gouge").prop("disabled", true);
                $("#eye-gouge").prop("disabled", true);
            } else {
                $("#disabled-eye-gouge").prop("disabled", false);
                $("#eye-gouge").prop("disabled", false);
            }
        }


        $("#keen-edge").click(function () {
            $.ajax({
                type: "POST",
                url: "/keen_edge",
                success: function (response) {
                    updateComboDisplay(response.combo);
                    updateGnashingFangCooldownDisplay(response.gnashing_fang_cooldown);
                    updateGnashingFangButtonState(response.gnashing_fang_cooldown, response.cartridge)

                    updateDoubleDownCooldownDisplay(response.double_down_cooldown);
                    updateDoubleDownButtonState(response.double_down_cooldown, response.cartridge);

                    updateSonicBreakCooldownDisplay(response.sonic_break_cooldown);
                    updateSonicBreakButtonState(response.sonic_break_cooldown);

                    updateBloodfestCooldownDisplay(response.bloodfest_cooldown);
                    updateBloodfestButtonState(response.bloodfest_cooldown);

                    updateBlastingZoneCooldownDisplay(response.blasting_zone_cooldown);
                    updateBlastingZoneButtonState(response.blasting_zone_cooldown);

                    updateBowShockCooldownDisplay(response.bow_shock_cooldown);
                    updateBowShockButtonState(response.bow_shock_cooldown);

                    updateNoMercyCooldownDisplay(response.no_mercy_cooldown);
                    updateNoMercyButtonState(response.no_mercy_cooldown);

                    updateRoughDivideCooldownDisplay(response.rough_divide_cooldown);
                    updateRoughDivideStacksDisplay(response.rough_divide_stacks);
                    updateRoughDivideButton(response.rough_divide_stacks);

                    updateHypervelocityDisplay(response.ready_to_blast);
                    updateHypervelocityButtonState(response.ready_to_blast);

                    updateJugularRipButtonState(response.ready_to_rip);
                    updateAbdomenTearButtonState(response.ready_to_rip);
                    updateEyeGougeButtonState(response.ready_to_rip);
                    updateSavageClawButtonState(response.savage_claw_ready);
                    updateWickedTalonButtonState(response.wicked_talon_ready);


                    $("p#cartridge").text("Cartridge: " + response.cartridge);
                }
            });
        });



        $("#brutal-shell").click(function () {
            $.ajax({
                type: "POST",
                url: "/brutal_shell",
                success: function (response) {
                    updateComboDisplay(response.combo);

                    updateGnashingFangCooldownDisplay(response.gnashing_fang_cooldown);
                    updateGnashingFangButtonState(response.gnashing_fang_cooldown, response.cartridge)

                    updateDoubleDownCooldownDisplay(response.double_down_cooldown);
                    updateDoubleDownButtonState(response.double_down_cooldown, response.cartridge);

                    updateSonicBreakCooldownDisplay(response.sonic_break_cooldown);
                    updateSonicBreakButtonState(response.sonic_break_cooldown);

                    updateBloodfestCooldownDisplay(response.bloodfest_cooldown);
                    updateBloodfestButtonState(response.bloodfest_cooldown);

                    updateBlastingZoneCooldownDisplay(response.blasting_zone_cooldown);
                    updateBlastingZoneButtonState(response.blasting_zone_cooldown);

                    updateBowShockCooldownDisplay(response.bow_shock_cooldown);
                    updateBowShockButtonState(response.bow_shock_cooldown);

                    updateRoughDivideCooldownDisplay(response.rough_divide_cooldown);
                    updateRoughDivideStacksDisplay(response.rough_divide_stacks);
                    updateRoughDivideButton(response.rough_divide_stacks);

                    updateHypervelocityDisplay(response.ready_to_blast);
                    updateHypervelocityButtonState(response.ready_to_blast);

                    updateJugularRipButtonState(response.ready_to_rip);
                    updateAbdomenTearButtonState(response.ready_to_rip);
                    updateEyeGougeButtonState(response.ready_to_rip);
                    updateSavageClawButtonState(response.savage_claw_ready);
                    updateWickedTalonButtonState(response.wicked_talon_ready);

                    $("p#cartridge").text("Cartridge: " + response.cartridge);
                }
            });
        });

        $("#solid-barrel").click(function () {
            $.ajax({
                type: "POST",
                url: "/solid_barrel",
                success: function (response) {
                    updateComboDisplay(response.combo);
                    updateCartridgeDisplay(response.cartridge);

                    updateGnashingFangCooldownDisplay(response.gnashing_fang_cooldown);
                    updateGnashingFangButtonState(response.gnashing_fang_cooldown, response.cartridge)

                    updateDoubleDownCooldownDisplay(response.double_down_cooldown);
                    updateDoubleDownButtonState(response.double_down_cooldown, response.cartridge);

                    updateSonicBreakCooldownDisplay(response.sonic_break_cooldown);
                    updateSonicBreakButtonState(response.sonic_break_cooldown);

                    $("p#cartridge").text("Cartridge: " + response.cartridge);

                    updateBurstStrikeButtonState(response.cartridge);

                    updateBloodfestCooldownDisplay(response.bloodfest_cooldown);
                    updateBloodfestButtonState(response.bloodfest_cooldown);

                    updateBlastingZoneCooldownDisplay(response.blasting_zone_cooldown);
                    updateBlastingZoneButtonState(response.blasting_zone_cooldown);

                    updateBowShockCooldownDisplay(response.bow_shock_cooldown);
                    updateBowShockButtonState(response.bow_shock_cooldown);

                    updateRoughDivideCooldownDisplay(response.rough_divide_cooldown);
                    updateRoughDivideStacksDisplay(response.rough_divide_stacks);
                    updateRoughDivideButton(response.rough_divide_stacks);

                    updateHypervelocityDisplay(response.ready_to_blast);
                    updateHypervelocityButtonState(response.ready_to_blast);

                    updateJugularRipButtonState(response.ready_to_rip);
                    updateAbdomenTearButtonState(response.ready_to_rip);
                    updateEyeGougeButtonState(response.ready_to_rip);
                    updateSavageClawButtonState(response.savage_claw_ready);
                    updateWickedTalonButtonState(response.wicked_talon_ready);

                }
            });
        });

        $("#burst-strike").click(function () {
            $.ajax({
                type: "POST",
                url: "/burst_strike",
                success: function (response) {
                    updateComboDisplay(response.combo);
                    $("p#cartridge").text("Cartridge: " + response.cartridge);
                    updateGnashingFangCooldownDisplay(response.gnashing_fang_cooldown);
                    updateGnashingFangButtonState(response.gnashing_fang_cooldown, response.cartridge)

                    updateDoubleDownCooldownDisplay(response.double_down_cooldown);
                    updateDoubleDownButtonState(response.double_down_cooldown, response.cartridge);

                    updateSonicBreakCooldownDisplay(response.sonic_break_cooldown);
                    updateSonicBreakButtonState(response.sonic_break_cooldown);

                    updateBurstStrikeButtonState(response.cartridge);

                    updateBloodfestCooldownDisplay(response.bloodfest_cooldown);
                    updateBloodfestButtonState(response.bloodfest_cooldown);

                    updateBlastingZoneCooldownDisplay(response.blasting_zone_cooldown);
                    updateBlastingZoneButtonState(response.blasting_zone_cooldown);

                    updateBowShockCooldownDisplay(response.bow_shock_cooldown);
                    updateBowShockButtonState(response.bow_shock_cooldown);

                    updateRoughDivideCooldownDisplay(response.rough_divide_cooldown);
                    updateRoughDivideStacksDisplay(response.rough_divide_stacks);
                    updateRoughDivideButton(response.rough_divide_stacks);

                    updateHypervelocityDisplay(response.ready_to_blast);
                    updateHypervelocityButtonState(response.ready_to_blast);

                    updateJugularRipButtonState(response.ready_to_rip);
                    updateAbdomenTearButtonState(response.ready_to_rip);
                    updateEyeGougeButtonState(response.ready_to_rip);


                }
            });
        });

        $("#gnashing-fang").click(function () {
            $.ajax({
                type: "POST",
                url: "/gnashing_fang",
                success: function (response) {
                    updateComboDisplay(response.combo);
                    updateCartridgeDisplay(response.cartridge);

                    updateGnashingFangCooldownDisplay(response.gnashing_fang_cooldown)
                    updateGnashingFangButtonState(response.gnashing_fang_cooldown, response.cartridge)

                    updateDoubleDownCooldownDisplay(response.double_down_cooldown);
                    updateDoubleDownButtonState(response.double_down_cooldown, response.cartridge);

                    updateSonicBreakCooldownDisplay(response.sonic_break_cooldown);
                    updateSonicBreakButtonState(response.sonic_break_cooldown);

                    $("p#cartridge").text("Cartridge: " + response.cartridge);
                    $("p#ready_to_rip").text("Ready To Rip? " + response.ready_to_rip);
                    updateBurstStrikeButtonState(response.cartridge);

                    updateBloodfestCooldownDisplay(response.bloodfest_cooldown);
                    updateBloodfestButtonState(response.bloodfest_cooldown);

                    updateBlastingZoneCooldownDisplay(response.blasting_zone_cooldown);
                    updateBlastingZoneButtonState(response.blasting_zone_cooldown);

                    updateBowShockCooldownDisplay(response.bow_shock_cooldown);
                    updateBowShockButtonState(response.bow_shock_cooldown);

                    updateRoughDivideCooldownDisplay(response.rough_divide_cooldown);
                    updateRoughDivideStacksDisplay(response.rough_divide_stacks);
                    updateRoughDivideButton(response.rough_divide_stacks);

                    updateHypervelocityDisplay(response.ready_to_blast);
                    updateHypervelocityButtonState(response.ready_to_blast);

                    updateSavageClawButtonState(response.savage_claw_ready);

                    updateJugularRipButtonState(response.ready_to_rip);


                }
            });
        });

        $("#double-down").click(function () {
            $.ajax({
                type: "POST",
                url: "/double_down",
                success: function (response) {
                    updateCartridgeDisplay(response.cartridge);

                    updateGnashingFangCooldownDisplay(response.gnashing_fang_cooldown);
                    updateGnashingFangButtonState(response.gnashing_fang_cooldown, response.cartridge)

                    updateDoubleDownCooldownDisplay(response.double_down_cooldown);
                    updateDoubleDownButtonState(response.double_down_cooldown, response.cartridge);

                    updateSonicBreakCooldownDisplay(response.sonic_break_cooldown);
                    updateSonicBreakButtonState(response.sonic_break_cooldown);

                    $("p#cartridge").text("Cartridge: " + response.cartridge);

                    updateBurstStrikeButtonState(response.cartridge);
                    updateDoubleDownButtonState(response.double_down_cooldown, response.cartridge);

                    updateBloodfestCooldownDisplay(response.bloodfest_cooldown);
                    updateBloodfestButtonState(response.bloodfest_cooldown);

                    updateBlastingZoneCooldownDisplay(response.blasting_zone_cooldown);
                    updateBlastingZoneButtonState(response.blasting_zone_cooldown);

                    updateBowShockCooldownDisplay(response.bow_shock_cooldown);
                    updateBowShockButtonState(response.bow_shock_cooldown);

                    updateRoughDivideCooldownDisplay(response.rough_divide_cooldown);
                    updateRoughDivideStacksDisplay(response.rough_divide_stacks);
                    updateRoughDivideButton(response.rough_divide_stacks);

                    updateHypervelocityDisplay(response.ready_to_blast);
                    updateHypervelocityButtonState(response.ready_to_blast);


                },
                error: function (error) {
                    console.error("Error:", error);
                }
            });
        });


        $("#sonic-break").click(function () {
            $.ajax({
                type: "POST",
                url: "/sonic_break",
                success: function (response) {
                    updateCartridgeDisplay(response.cartridge);

                    updateGnashingFangCooldownDisplay(response.gnashing_fang_cooldown);
                    updateGnashingFangButtonState(response.gnashing_fang_cooldown, response.cartridge)

                    updateDoubleDownCooldownDisplay(response.double_down_cooldown);
                    updateDoubleDownButtonState(response.double_down_cooldown, response.cartridge);

                    $("p#cartridge").text("Cartridge: " + response.cartridge);

                    updateBurstStrikeButtonState(response.cartridge);
                    updateDoubleDownButtonState(response.double_down_cooldown, response.cartridge);

                    updateBloodfestCooldownDisplay(response.bloodfest_cooldown);
                    updateBloodfestButtonState(response.bloodfest_cooldown);

                    updateBlastingZoneCooldownDisplay(response.blasting_zone_cooldown);
                    updateBlastingZoneButtonState(response.blasting_zone_cooldown);

                    updateBowShockCooldownDisplay(response.bow_shock_cooldown);
                    updateBowShockButtonState(response.bow_shock_cooldown);

                    updateSonicBreakCooldownDisplay(response.sonic_break_cooldown);
                    updateSonicBreakButtonState(response.sonic_break_cooldown);

                    updateRoughDivideCooldownDisplay(response.rough_divide_cooldown);
                    updateRoughDivideStacksDisplay(response.rough_divide_stacks);
                    updateRoughDivideButton(response.rough_divide_stacks);

                    updateHypervelocityDisplay(response.ready_to_blast);
                    updateHypervelocityButtonState(response.ready_to_blast);


                }
            });
        });


        $("#bloodfest").click(function() {
            $.ajax({
                type: "POST",
                url: "/bloodfest",
                success: function (response) {
                    updateBurstStrikeButtonState(response.cartridge);

                    updateGnashingFangCooldownDisplay(response.gnashing_fang_cooldown);
                    updateGnashingFangButtonState(response.gnashing_fang_cooldown, response.cartridge)

                    updateBloodfestCooldownDisplay(response.bloodfest_cooldown);
                    updateBloodfestButtonState(response.bloodfest_cooldown);

                    updateDoubleDownCooldownDisplay(response.double_down_cooldown);
                    updateDoubleDownButtonState(response.double_down_cooldown, response.cartridge);




                }
            });
        });

        $("#blasting-zone").click(function() {
            $.ajax({
                type: "POST",
                url: "/blasting_zone",
                success: function (response) {
                    updateBlastingZoneCooldownDisplay(response.blasting_zone_cooldown);
                    updateBlastingZoneButtonState(response.blasting_zone_cooldown);


                }
            });
        });

        $("#bow-shock").click(function() {
            $.ajax({
                type: "POST",
                url: "/bow_shock",
                success: function (response) {
                    updateBowShockCooldownDisplay(response.bow_shock_cooldown);
                    updateBowShockButtonState(response.bow_shock_cooldown);


                }
            });
        });

        $("#no-mercy").click(function() {
            $.ajax({
                type: "POST",
                url: "/no_mercy",
                success: function (response) {
                    updateNoMercyCooldownDisplay(response.no_mercy_cooldown);
                    updateNoMercyButtonState(response.no_mercy_cooldown);


                }
            });
        });

        $("#rough-divide").click(function() {
            $.ajax({
                type: "POST",
                url: "/rough_divide",
                success: function (response) {
                    updateRoughDivideCooldownDisplay(response.rough_divide_cooldown);
                    updateRoughDivideStacksDisplay(response.rough_divide_stacks);
                    updateRoughDivideButton(response.rough_divide_stacks);


                }
            });
        });

        $("#hypervelocity").click(function() {
            $.ajax({
                type: "POST",
                url: "/hypervelocity",
                success: function (response) {
                    updateHypervelocityDisplay(response.ready_to_blast);
                    updateHypervelocityButtonState(response.ready_to_blast);
                }
            });
        });

        $("#jugular-rip").click(function() {
            $.ajax({
                type: "POST",
                url: "/jugular_rip",
                success: function (response) {
                    updateJugularRipDisplay(response.ready_to_rip);
                    updateJugularRipButtonState(response.ready_to_rip);
                }
            });
        });

        $("#savage-claw").click(function() {
            $.ajax({
                type: "POST",
                url: "/savage_claw",
                success: function (response) {
                    updateJugularRipButtonState(response.ready_to_rip);

                    updateSavageClawButtonState(response.savage_claw_ready);
                    updateAbdomenTearButtonState(response.ready_to_tear);

                    updateWickedTalonButtonState(response.wicked_talon_ready);
                }
            });
        });

        $("#wicked-talon").click(function() {
            $.ajax({
                type: "POST",
                url: "/wicked_talon",
                success: function (response) {
                    updateWickedTalonButtonState(response.wicked_talon_ready);

                    updateAbdomenTearButtonState(response.ready_to_tear);

                    updateEyeGougeButtonState(response.ready_to_gouge);

                }
            });
        });

        $("#abdomen-tear").click(function() {
            $.ajax({
                type: "POST",
                url: "/abdomen_tear",
                success: function (response) {
                    updateAbdomenTearButtonState(response.ready_to_tear);
                }
            });
        });

        $("#eye-gouge").click(function() {
            $.ajax({
                type: "POST",
                url: "/eye_gouge",
                success: function (response) {
                    updateEyeGougeButtonState(response.ready_to_gouge);
                }
            });
        });


    });
