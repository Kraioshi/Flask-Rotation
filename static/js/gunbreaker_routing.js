    $(document).ready(function () {
        function updateComboDisplay(comboValue) {
            $("#combo").text("Combo: " + comboValue);
        }

        function updateCartridgeDisplay(cartridgeValue) {
            $("#cartridge").text("Cartridge: " + cartridgeValue);
        }

        function updateGnashingFangCooldownDisplay(gnashingFangCooldownValue) {
            var $cooldownText = $("#gnashing_fang_cooldown");

            if (gnashingFangCooldownValue === 0) {
                $cooldownText.hide();
            } else {
                $cooldownText.text(gnashingFangCooldownValue).show();
            }
        }

        function updateDoubleDownCooldownDisplay(doubleDownCooldownValue) {
            var $cooldownText = $("#double_down_cooldown");

            if (doubleDownCooldownValue === 0) {
                $cooldownText.hide();
            } else {
                $cooldownText.text(doubleDownCooldownValue).show();
            }
        }

        function updateSonicBreakCooldownDisplay(sonicBreakCooldownValue) {
            var $cooldownText = $("#sonic_break_cooldown");

            if (sonicBreakCooldownValue === 0) {
                $cooldownText.hide();
            } else {
                $cooldownText.text(sonicBreakCooldownValue).show();
            }
        }

        function updateBloodfestCooldownDisplay(bloodfestCooldownValue) {
            var $cooldownText = $("#bloodfest_cooldown");

            if (bloodfestCooldownValue === 0) {
                $cooldownText.hide();
            } else {
                $cooldownText.text(bloodfestCooldownValue).show();
            }
        }

        function updateBlastingZoneCooldownDisplay(blastingZoneCooldownValue) {
            var $cooldownText = $("#blasting_zone_cooldown");

            if (blastingZoneCooldownValue === 0) {
                $cooldownText.hide();
            } else {
                $cooldownText.text(blastingZoneCooldownValue).show();
            }
        }

        function updateBowShockCooldownDisplay(bowShockCooldownValue) {
            var $cooldownText = $("#bow_shock_cooldown");

            if (bowShockCooldownValue === 0) {
                $cooldownText.hide();
            } else {
                $cooldownText.text(bowShockCooldownValue).show();
            }
        }

        function updateNoMercyCooldownDisplay(noMercyCooldownValue) {
            var $cooldownText = $("#no_mercy_cooldown");

            if (noMercyCooldownValue === 0) {
                $cooldownText.hide();
            } else {
                $cooldownText.text(noMercyCooldownValue).show();
            }
        }

        function updateRoughDivideCooldownDisplay(roughDivideCooldown) {
            var $cooldownText = $("#rough_divide_cooldown");

            if (roughDivideCooldown === 0) {
                $cooldownText.hide();
            } else {
                $cooldownText.text(roughDivideCooldown).show();
            }
        }

        updateRoughDivideStacksDisplay(roughDivideStacks)

        function updateRoughDivideStacksDisplay(roughDivideStacks) {
            var $stackText = $("#rough_divide_stacks");

            if (roughDivideStacks === 0) {
                $stackText.hide();
            } else {
                $stackText.text(roughDivideStacks).show();
            }
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

        function updateRoughDivideButton(roughDivideStacks) {

        if (roughDivideStacks > 0) {
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

        updateGnashingFangVisibility();

        function updateGnashingFangVisibility(savageClawReady, wickedTalonReady) {

            if (savageClawReady || wickedTalonReady) {
                $("#gnashing-fang").css("display", "none");
            } else {
                $("#gnashing-fang").css("display", "inline-block");
            }
        }


        updateHypervelocityButtonState();

        function updateHypervelocityButtonState(readyToBlast) {

            if (!readyToBlast) {
                $("#hypervelocity").css("display", "none");
            } else {
                $("#hypervelocity").css("display", "inline-block");
            }
        }

        updateJugularRipButtonState();

        function updateJugularRipButtonState(readyToRip) {

            if (!readyToRip) {
                $("#jugular-rip").css("display", "none");
            } else {
                $("#jugular-rip").css("display", "inline-block");
            }
        }

        updateSavageClawButtonState();

        function updateSavageClawButtonState(savageClawReady) {

            if (!savageClawReady) {
                $("#savage-claw").css("display", "none");
            } else {
                $("#savage-claw").css("display", "inline-block");
            }
        }

        updateAbdomenTearButtonState();

        function updateAbdomenTearButtonState(readyToTear) {

            if (!readyToTear) {
                $("#abdomen-tear").css("display", "none");
            } else {
                $("#abdomen-tear").css("display", "inline-block");
            }
        }

        updateWickedTalonButtonState();

        function updateWickedTalonButtonState(wickedTalonReady) {

            if (!wickedTalonReady) {
                $("#wicked-talon").css("display", "none");
            } else {
                $("#wicked-talon").css("display", "inline-block");
            }
        }

        updateEyeGougeButtonState();

        function updateEyeGougeButtonState(readyToGouge) {

            if (!readyToGouge) {
                $("#eye-gouge").css("display", "none");
            } else {
                $("#eye-gouge").css("display", "inline-block");
            }
        }

        updateContinuationButtonState();

        function updateContinuationButtonState(readyToBlast, readyToRip, readyToTear, readyToGouge) {

            if (readyToBlast || readyToRip || readyToTear || readyToGouge) {
                $("#continuation").css("display", "none");
            } else {
                $("#continuation").css("display", "inline-block");
            }
        }

        function updateCartridgeOne(cartridgeValue) {
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

        function updateCartridgeTwo(cartridgeValue) {
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

        function updateCartridgeThree(cartridgeValue) {
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

        updateCartridgeOne( {{gnb.cartridge}} )
        updateCartridgeTwo( {{gnb.cartridge}} )
        updateCartridgeThree( {{gnb.cartridge}} )

        function updateNoMercyBuffText(noMercyBuffValue) {
            var $buffText = $("#no_mercy_buff_text");

            if (noMercyBuffValue === 0) {
                $buffText.hide();
            } else {
                $buffText.text(noMercyBuffValue).show();
            }
        }

        function updateBrutalShellBuffText(brutalShellBuffValue) {
            var $buffText = $("#brutal_shell_buff_text");

            if (brutalShellBuffValue === 0) {
                $buffText.hide();
            } else {
                $buffText.text(brutalShellBuffValue).show();
            }
        }

        function updateHypervelocityBuffText(hypervelocityBuffValue) {
            var $buffText = $("#hypervelocity_buff_text");

            if (hypervelocityBuffValue === 0) {
                $buffText.hide();
            } else {
                $buffText.text(hypervelocityBuffValue).show();
            }
        }

        function updateNoMercyBuffVisibility(noMercyBuffValue) {

            if (noMercyBuffValue === 0) {
                $("#no_mercy_buff_icon").css("display", "none");
            } else {
                $("#no_mercy_buff_icon").css("display", "inline-block");
            }
        }

        function updateBrutalShellBuffVisibility(brutalShellBuffValue) {

            if (brutalShellBuffValue === 0) {
                $("#brutal_shell_buff_icon").css("display", "none");
            } else {
                $("#brutal_shell_buff_icon").css("display", "inline-block");
            }
        }

        function updateHypervelocityBuffVisibility(hypervelocityBuffValue) {

            if (hypervelocityBuffValue === 0) {
                $("#hypervelocity_buff_icon").css("display", "none");
            } else {
                $("#hypervelocity_buff_icon").css("display", "inline-block");
            }
        }

        function updateJugularRipBuffVisibility(readyToRip) {

            if (!readyToRip) {
                $("#ready_to_rip_icon").css("display", "none");
            } else {
                $("#ready_to_rip_icon").css("display", "inline-block");
            }
        }

        function updateAbdomenTearBuffVisibility(readyToTear) {

            if (!readyToTear) {
                $("#ready_to_tear_icon").css("display", "none");
            } else {
                $("#ready_to_tear_icon").css("display", "inline-block");
            }
        }

        function updateEyeGougeBuffVisibility(readyToGouge) {

            if (!readyToGouge) {
                $("#ready_to_gouge_icon").css("display", "none");
            } else {
                $("#ready_to_gouge_icon").css("display", "inline-block");
            }
        }

        updateNoMercyBuffText( {{gnb.no_mercy_buff }} );
        updateBrutalShellBuffText( {{gnb.brutal_shell_buff }} );
        updateHypervelocityBuffText( {{gnb.hypervelocity_buff }} );

        updateNoMercyBuffVisibility( {{gnb.no_mercy_buff }} );
        updateBrutalShellBuffVisibility( {{gnb.brutal_shell_buff }} );
        updateHypervelocityBuffVisibility( {{gnb.hypervelocity_buff }} );


        updateJugularRipBuffVisibility();
        updateAbdomenTearBuffVisibility();
        updateEyeGougeBuffVisibility();

        function updateBowShockDebuffText(bowShockDebuffValue) {
            var $buffText = $("#bow_shock_debuff_text");

            if (bowShockDebuffValue === 0) {
                $buffText.hide();
            } else {
                $buffText.text(bowShockDebuffValue).show();
            }
        }

        function updateBowShockDebuffVisibility(bowShockDebuffValue) {

            if (bowShockDebuffValue === 0) {
                $("#bow_shock_debuff_icon").css("display", "none");
            } else {
                $("#bow_shock_debuff_icon").css("display", "inline-block");
            }
        }

        function updateSonicBreakDebuffText(SonicBreakDebuffValue) {
            var $buffText = $("#sonic_break_debuff_text");

            if (SonicBreakDebuffValue === 0) {
                $buffText.hide();
            } else {
                $buffText.text(SonicBreakDebuffValue).show();
            }
        }

        function updateSonicBreakDebuffVisibility(SonicBreakDebuffValue) {

            if (SonicBreakDebuffValue === 0) {
                $("#sonic_break_debuff_icon").css("display", "none");
            } else {
                $("#sonic_break_debuff_icon").css("display", "inline-block");
            }
        }


        updateBowShockDebuffText( {{ gnb.bow_shock_debuff }} )
        updateSonicBreakDebuffText( {{ gnb.sonic_break_debuff }} )
        updateBowShockDebuffVisibility( {{ gnb.bow_shock_debuff }} )
        updateSonicBreakDebuffVisibility( {{ gnb.sonic_break_debuff }} )



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

                    updateGnashingFangVisibility(response.savage_claw_ready, response.wicked_talon_ready);

                    updateContinuationButtonState(response.ready_to_blast, response.ready_to_rip,
                                                  response.ready_to_tear, response.ready_to_gouge);

                    updateCartridgeOne(response.cartridge);
                    updateCartridgeTwo(response.cartridge);
                    updateCartridgeThree(response.cartridge);

                    updateNoMercyBuffText(response.no_mercy_buff);
                    updateBrutalShellBuffText(response.brutal_shell_buff);
                    updateHypervelocityBuffText(response.hypervelocity_buff);

                    updateNoMercyBuffVisibility(response.no_mercy_buff);
                    updateBrutalShellBuffVisibility(response.brutal_shell_buff);
                    updateHypervelocityBuffVisibility(response.hypervelocity_buff);

                    updateBowShockDebuffVisibility(response.bow_shock_debuff);
                    updateBowShockDebuffText(response.bow_shock_debuff);
                    updateSonicBreakDebuffVisibility(response.sonic_break_debuff);
                    updateSonicBreakDebuffText(response.sonic_break_debuff);

        //adding combo-wombo
        //adding combo-wombo
                    $("#brutal-shell").addClass("shining-border");

                    if (response.combo === 1) {
                        $("#solid-barrel").removeClass("shining-border");
                    }
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

                    updateGnashingFangVisibility(response.savage_claw_ready, response.wicked_talon_ready);

                    updateContinuationButtonState(response.ready_to_blast, response.ready_to_rip,
                                                  response.ready_to_tear, response.ready_to_gouge);

                    updateCartridgeOne(response.cartridge);
                    updateCartridgeTwo(response.cartridge);
                    updateCartridgeThree(response.cartridge);

                    updateNoMercyBuffText(response.no_mercy_buff);
                    updateBrutalShellBuffText(response.brutal_shell_buff);
                    updateHypervelocityBuffText(response.hypervelocity_buff);

                    updateNoMercyBuffVisibility(response.no_mercy_buff);
                    updateBrutalShellBuffVisibility(response.brutal_shell_buff);
                    updateHypervelocityBuffVisibility(response.hypervelocity_buff);

                    updateBowShockDebuffVisibility(response.bow_shock_debuff);
                    updateBowShockDebuffText(response.bow_shock_debuff);
                    updateSonicBreakDebuffVisibility(response.sonic_break_debuff);
                    updateSonicBreakDebuffText(response.sonic_break_debuff);


                    if (response.combo === 2) {
                        $("#solid-barrel").addClass("shining-border");
                        $("#brutal-shell").removeClass("shining-border");
                    } else {
                        $("#brutal-shell").removeClass("shining-border");
                        $("#solid-barrel").removeClass("shining-border");
                    }
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

                    updateNoMercyCooldownDisplay(response.no_mercy_cooldown);
                    updateNoMercyButtonState(response.no_mercy_cooldown);

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

                    updateGnashingFangVisibility(response.savage_claw_ready, response.wicked_talon_ready);

                    updateContinuationButtonState(response.ready_to_blast, response.ready_to_rip,
                                                  response.ready_to_tear, response.ready_to_gouge);

                    updateCartridgeOne(response.cartridge);
                    updateCartridgeTwo(response.cartridge);
                    updateCartridgeThree(response.cartridge);

                    updateNoMercyBuffText(response.no_mercy_buff);
                    updateBrutalShellBuffText(response.brutal_shell_buff);
                    updateHypervelocityBuffText(response.hypervelocity_buff);

                    updateNoMercyBuffVisibility(response.no_mercy_buff);
                    updateBrutalShellBuffVisibility(response.brutal_shell_buff);
                    updateHypervelocityBuffVisibility(response.hypervelocity_buff);

                    updateBowShockDebuffVisibility(response.bow_shock_debuff);
                    updateBowShockDebuffText(response.bow_shock_debuff);
                    updateSonicBreakDebuffVisibility(response.sonic_break_debuff);
                    updateSonicBreakDebuffText(response.sonic_break_debuff);

                    $("#solid-barrel").removeClass("shining-border");

                    if (response.combo != 2) {
                        $("#brutal-shell").removeClass("shining-border");
                    }
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

                    updateNoMercyCooldownDisplay(response.no_mercy_cooldown);
                    updateNoMercyButtonState(response.no_mercy_cooldown);

                    updateBowShockCooldownDisplay(response.bow_shock_cooldown);
                    updateBowShockButtonState(response.bow_shock_cooldown);

                    updateRoughDivideCooldownDisplay(response.rough_divide_cooldown);
                    updateRoughDivideStacksDisplay(response.rough_divide_stacks);
                    updateRoughDivideButton(response.rough_divide_stacks);

                    updateHypervelocityDisplay(response.ready_to_blast);
                    updateHypervelocityButtonState(response.ready_to_blast && !response.ready_to_rip && !response.ready_to_tear && !response.ready_to_gouge);

                    updateJugularRipButtonState(response.ready_to_rip);
                    updateAbdomenTearButtonState(response.ready_to_rip);
                    updateEyeGougeButtonState(response.ready_to_rip);

                    updateContinuationButtonState(response.ready_to_blast, response.ready_to_rip,
                                                  response.ready_to_tear, response.ready_to_gouge);

                    updateCartridgeOne(response.cartridge);
                    updateCartridgeTwo(response.cartridge);
                    updateCartridgeThree(response.cartridge);

                    updateNoMercyBuffText(response.no_mercy_buff);
                    updateBrutalShellBuffText(response.brutal_shell_buff);
                    updateHypervelocityBuffText(response.hypervelocity_buff);

                    updateNoMercyBuffVisibility(response.no_mercy_buff);
                    updateBrutalShellBuffVisibility(response.brutal_shell_buff);
                    updateHypervelocityBuffVisibility(response.hypervelocity_buff);

                    updateBowShockDebuffVisibility(response.bow_shock_debuff);
                    updateBowShockDebuffText(response.bow_shock_debuff);
                    updateSonicBreakDebuffVisibility(response.sonic_break_debuff);
                    updateSonicBreakDebuffText(response.sonic_break_debuff);
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

                    updateNoMercyCooldownDisplay(response.no_mercy_cooldown);
                    updateNoMercyButtonState(response.no_mercy_cooldown);

                    updateBowShockCooldownDisplay(response.bow_shock_cooldown);
                    updateBowShockButtonState(response.bow_shock_cooldown);

                    updateRoughDivideCooldownDisplay(response.rough_divide_cooldown);
                    updateRoughDivideStacksDisplay(response.rough_divide_stacks);
                    updateRoughDivideButton(response.rough_divide_stacks);

                    updateHypervelocityDisplay(response.ready_to_blast);
                    updateHypervelocityButtonState(response.ready_to_blast);

                    updateSavageClawButtonState(response.savage_claw_ready);

                    updateJugularRipButtonState(response.ready_to_rip);

                    updateContinuationButtonState(response.ready_to_blast, response.ready_to_rip,
                                                  response.ready_to_tear, response.ready_to_gouge);

                    updateGnashingFangVisibility(response.savage_claw_ready, response.wicked_talon_ready);

                    updateCartridgeOne(response.cartridge);
                    updateCartridgeTwo(response.cartridge);
                    updateCartridgeThree(response.cartridge);

                    updateNoMercyBuffText(response.no_mercy_buff);
                    updateBrutalShellBuffText(response.brutal_shell_buff);
                    updateHypervelocityBuffText(response.hypervelocity_buff);

                    updateNoMercyBuffVisibility(response.no_mercy_buff);
                    updateBrutalShellBuffVisibility(response.brutal_shell_buff);
                    updateHypervelocityBuffVisibility(response.hypervelocity_buff);

                    updateJugularRipBuffVisibility(response.ready_to_rip);

                    updateBowShockDebuffVisibility(response.bow_shock_debuff);
                    updateBowShockDebuffText(response.bow_shock_debuff);
                    updateSonicBreakDebuffVisibility(response.sonic_break_debuff);
                    updateSonicBreakDebuffText(response.sonic_break_debuff);
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

                    updateBurstStrikeButtonState(response.cartridge);
                    updateDoubleDownButtonState(response.double_down_cooldown, response.cartridge);

                    updateBloodfestCooldownDisplay(response.bloodfest_cooldown);
                    updateBloodfestButtonState(response.bloodfest_cooldown);

                    updateBlastingZoneCooldownDisplay(response.blasting_zone_cooldown);
                    updateBlastingZoneButtonState(response.blasting_zone_cooldown);

                    updateNoMercyCooldownDisplay(response.no_mercy_cooldown);
                    updateNoMercyButtonState(response.no_mercy_cooldown);

                    updateBowShockCooldownDisplay(response.bow_shock_cooldown);
                    updateBowShockButtonState(response.bow_shock_cooldown);

                    updateRoughDivideCooldownDisplay(response.rough_divide_cooldown);
                    updateRoughDivideStacksDisplay(response.rough_divide_stacks);
                    updateRoughDivideButton(response.rough_divide_stacks);

                    updateHypervelocityDisplay(response.ready_to_blast);
                    updateHypervelocityButtonState(response.ready_to_blast);

                    updateContinuationButtonState(response.ready_to_blast, response.ready_to_rip,
                                                  response.ready_to_tear, response.ready_to_gouge);

                    updateCartridgeOne(response.cartridge);
                    updateCartridgeTwo(response.cartridge);
                    updateCartridgeThree(response.cartridge);

                    updateNoMercyBuffText(response.no_mercy_buff);
                    updateBrutalShellBuffText(response.brutal_shell_buff);
                    updateHypervelocityBuffText(response.hypervelocity_buff);

                    updateNoMercyBuffVisibility(response.no_mercy_buff);
                    updateBrutalShellBuffVisibility(response.brutal_shell_buff);
                    updateHypervelocityBuffVisibility(response.hypervelocity_buff);

                    updateJugularRipBuffVisibility(response.ready_to_rip);
                    updateAbdomenTearBuffVisibility(response.ready_to_tear);
                    updateEyeGougeBuffVisibility(response.ready_to_gouge);

                    updateBowShockDebuffVisibility(response.bow_shock_debuff);
                    updateBowShockDebuffText(response.bow_shock_debuff);
                    updateSonicBreakDebuffVisibility(response.sonic_break_debuff);
                    updateSonicBreakDebuffText(response.sonic_break_debuff);

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

                    updateNoMercyCooldownDisplay(response.no_mercy_cooldown);
                    updateNoMercyButtonState(response.no_mercy_cooldown);

                    updateBowShockCooldownDisplay(response.bow_shock_cooldown);
                    updateBowShockButtonState(response.bow_shock_cooldown);

                    updateSonicBreakCooldownDisplay(response.sonic_break_cooldown);
                    updateSonicBreakButtonState(response.sonic_break_cooldown);

                    updateRoughDivideCooldownDisplay(response.rough_divide_cooldown);
                    updateRoughDivideStacksDisplay(response.rough_divide_stacks);
                    updateRoughDivideButton(response.rough_divide_stacks);

                    updateHypervelocityDisplay(response.ready_to_blast);
                    updateHypervelocityButtonState(response.ready_to_blast);

                    updateJugularRipButtonState(response.ready_to_rip);
                    updateAbdomenTearButtonState(response.ready_to_rip);
                    updateEyeGougeButtonState(response.ready_to_rip);


                    updateContinuationButtonState(response.ready_to_blast, response.ready_to_rip,
                                                  response.ready_to_tear, response.ready_to_gouge);

                    updateCartridgeOne(response.cartridge);
                    updateCartridgeTwo(response.cartridge);
                    updateCartridgeThree(response.cartridge);

                    updateNoMercyBuffText(response.no_mercy_buff);
                    updateBrutalShellBuffText(response.brutal_shell_buff);
                    updateHypervelocityBuffText(response.hypervelocity_buff);

                    updateNoMercyBuffVisibility(response.no_mercy_buff);
                    updateBrutalShellBuffVisibility(response.brutal_shell_buff);
                    updateHypervelocityBuffVisibility(response.hypervelocity_buff);

                    updateJugularRipBuffVisibility(response.ready_to_rip);
                    updateAbdomenTearBuffVisibility(response.ready_to_tear);
                    updateEyeGougeBuffVisibility(response.ready_to_gouge);

                    updateBowShockDebuffVisibility(response.bow_shock_debuff);
                    updateBowShockDebuffText(response.bow_shock_debuff);
                    updateSonicBreakDebuffVisibility(response.sonic_break_debuff);
                    updateSonicBreakDebuffText(response.sonic_break_debuff);
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

                    updateCartridgeOne(response.cartridge);
                    updateCartridgeTwo(response.cartridge);
                    updateCartridgeThree(response.cartridge);

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

                    updateBowShockDebuffVisibility(response.bow_shock_debuff);
                    updateBowShockDebuffText(response.bow_shock_debuff);
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
                    updateNoMercyBuffText(response.no_mercy_buff);
                    updateNoMercyBuffVisibility(response.no_mercy_buff);
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
                    updateContinuationButtonState(response.ready_to_blast, response.ready_to_rip,
                                                  response.ready_to_tear, response.ready_to_gouge);

                    updateHypervelocityBuffText(response.hypervelocity_buff);
                    updateHypervelocityBuffVisibility(response.hypervelocity_buff);

                    updateJugularRipBuffVisibility(response.ready_to_rip);
                    updateAbdomenTearBuffVisibility(response.ready_to_tear);
                    updateEyeGougeBuffVisibility(response.ready_to_gouge);
                }
            });
        });

        function triggerHypervelocityButtonClick() {
            $("#hypervelocity").click();
        }
        document.addEventListener("keydown", function(event) {
            if (event.key === "`") {
                triggerHypervelocityButtonClick();
            }
        });


        $("#savage-claw").click(function() {
            $.ajax({
                type: "POST",
                url: "/savage_claw",
                success: function (response) {
                    updateJugularRipButtonState(response.ready_to_rip);

                    updateSavageClawButtonState(response.savage_claw_ready);
                    updateAbdomenTearButtonState(response.ready_to_tear);

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

                    updateHypervelocityButtonState(response.ready_to_blast && !response.ready_to_rip && !response.ready_to_tear && !response.ready_to_gouge);


                    updateWickedTalonButtonState(response.wicked_talon_ready);
                    updateContinuationButtonState(response.ready_to_blast, response.ready_to_rip,
                                                  response.ready_to_tear, response.ready_to_gouge);

                    updateGnashingFangVisibility(response.savage_claw_ready, response.wicked_talon_ready);

                    updateNoMercyBuffText(response.no_mercy_buff);
                    updateBrutalShellBuffText(response.brutal_shell_buff);
                    updateHypervelocityBuffText(response.hypervelocity_buff);

                    updateNoMercyBuffVisibility(response.no_mercy_buff);
                    updateBrutalShellBuffVisibility(response.brutal_shell_buff);
                    updateHypervelocityBuffVisibility(response.hypervelocity_buff);

                    updateJugularRipBuffVisibility(response.ready_to_rip);
                    updateAbdomenTearBuffVisibility(response.ready_to_tear);
                    updateEyeGougeBuffVisibility(response.ready_to_gouge);

                    updateBowShockDebuffVisibility(response.bow_shock_debuff);
                    updateBowShockDebuffText(response.bow_shock_debuff);
                    updateSonicBreakDebuffVisibility(response.sonic_break_debuff);
                    updateSonicBreakDebuffText(response.sonic_break_debuff);

                }
            });
        });

        $("#wicked-talon").click(function() {
            $.ajax({
                type: "POST",
                url: "/wicked_talon",
                success: function (response) {
                    updateWickedTalonButtonState(response.wicked_talon_ready);

                    updateGnashingFangCooldownDisplay(response.gnashing_fang_cooldown);
                    updateGnashingFangButtonState(response.gnashing_fang_cooldown, response.cartridge)

                    updateAbdomenTearButtonState(response.ready_to_tear);

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

                    updateHypervelocityButtonState(response.ready_to_blast && !response.ready_to_rip && !response.ready_to_tear && !response.ready_to_gouge);


                    updateEyeGougeButtonState(response.ready_to_gouge);
                    updateContinuationButtonState(response.ready_to_blast, response.ready_to_rip,
                                                  response.ready_to_tear, response.ready_to_gouge);

                    updateGnashingFangVisibility(response.savage_claw_ready, response.wicked_talon_ready);

                    updateNoMercyBuffText(response.no_mercy_buff);
                    updateBrutalShellBuffText(response.brutal_shell_buff);
                    updateHypervelocityBuffText(response.hypervelocity_buff);

                    updateNoMercyBuffVisibility(response.no_mercy_buff);
                    updateBrutalShellBuffVisibility(response.brutal_shell_buff);
                    updateHypervelocityBuffVisibility(response.hypervelocity_buff);

                    updateJugularRipBuffVisibility(response.ready_to_rip);
                    updateAbdomenTearBuffVisibility(response.ready_to_tear);
                    updateEyeGougeBuffVisibility(response.ready_to_gouge);

                    updateBowShockDebuffVisibility(response.bow_shock_debuff);
                    updateBowShockDebuffText(response.bow_shock_debuff);
                    updateSonicBreakDebuffVisibility(response.sonic_break_debuff);
                    updateSonicBreakDebuffText(response.sonic_break_debuff);

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
                    updateContinuationButtonState(response.ready_to_blast, response.ready_to_rip,
                                                  response.ready_to_tear, response.ready_to_gouge);

                    updateJugularRipBuffVisibility(response.ready_to_rip);

                }
            });
        });

        function triggerJugularRipButtonClick() {
            $("#jugular-rip").click();
        }
        document.addEventListener("keydown", function(event) {
            if (event.key === "`") {
                triggerJugularRipButtonClick();
            }
        });

        $("#abdomen-tear").click(function() {
            $.ajax({
                type: "POST",
                url: "/abdomen_tear",
                success: function (response) {
                    updateAbdomenTearButtonState(response.ready_to_tear);
                    updateContinuationButtonState(response.ready_to_blast, response.ready_to_rip,
                                                  response.ready_to_tear, response.ready_to_gouge);

                    updateAbdomenTearBuffVisibility(response.ready_to_tear);
                }
            });
        });

        function triggerAbdomenTearButtonClick() {
            $("#abdomen-tear").click();
        }
        document.addEventListener("keydown", function(event) {
            if (event.key === "`") {
                triggerAbdomenTearButtonClick();
            }
        });

        $("#eye-gouge").click(function() {
            $.ajax({
                type: "POST",
                url: "/eye_gouge",
                success: function (response) {
                    updateEyeGougeButtonState(response.ready_to_gouge);
                    updateContinuationButtonState(response.ready_to_blast, response.ready_to_rip,
                                                  response.ready_to_tear, response.ready_to_gouge);


                    updateEyeGougeBuffVisibility(response.ready_to_gouge);
                }
            });
        });

        function triggerEyeGougeButtonClick() {
            $("#eye-gouge").click();
        }
        document.addEventListener("keydown", function(event) {
            if (event.key === "`") {
                triggerEyeGougeButtonClick();
            }
        });



// Gnashing Fang
// Savage Claw
// Wicked Talon

        function triggerGnashingFangButtonClick(buttonId) {
            var $button = $("#" + buttonId);
            if (!$button.prop("disabled") && $button.is(":visible")) {
                $button.click();
            }
        }

        function triggerSavageClawButtonClick(buttonId) {
            var $button = $("#" + buttonId);
            if (!$button.prop("disabled") && $button.is(":visible")) {
                $button.click();
            }
        }

        function triggerWickedTalonButtonClick(buttonId) {
            var $button = $("#" + buttonId);
            if (!$button.prop("disabled") && $button.is(":visible")) {
                $button.click();
            }
        }

document.addEventListener("keydown", function(event) {
    if (event.key === "4"  && !event.altKey) {
        if ($("#gnashing-fang").is(":visible")) {
            triggerGnashingFangButtonClick("gnashing-fang");
        }
        if ($("#savage-claw").is(":visible")) {
            triggerSavageClawButtonClick("savage-claw");
        }
        if ($("#wicked-talon").is(":visible")) {
            triggerWickedTalonButtonClick("wicked-talon");
        }
    }
});






// Rough Divide

        function triggerRoughDivideButtonClick() {
            $("#rough-divide").click();
        }


// Blasting Zone

        function triggerBlastingZoneButtonClick(buttonId) {
            var $button = $("#" + buttonId);
                if (!$button.prop("disabled")) {
                    $button.click();
                }
            }

        document.addEventListener("keydown", function(event) {
            if (event.altKey && event.key === "e") {
                triggerBlastingZoneButtonClick("blasting-zone");
            }
        });

// Burst Strike

        function triggerBurstStrikeButtonClick(buttonId) {
            var $button = $("#" + buttonId);
                if (!$button.prop("disabled")) {
                    $button.click();
                }
            }

        document.addEventListener("keydown", function(event) {
            if (event.altKey && event.key === "4") {
                event.preventDefault(); // Prevent the default "4" key action
                triggerBurstStrikeButtonClick("burst-strike");
            }
        });


// No Mercy
// Keen Edge

        function triggerKeenEdgeButtonClick() {
            $("#keen-edge").click();
        }

        function triggerNoMercyButtonClick(buttonId) {
            var $button = $("#" + buttonId);
                if (!$button.prop("disabled")) {
                    $button.click();
                }
            }


        document.addEventListener("keydown", function(event) {
            if (event.altKey && event.key === "1") {
                triggerNoMercyButtonClick("no-mercy");
            } else if (event.key === "1") {
                triggerKeenEdgeButtonClick();
            }
        });

// Bow Shock
// Brutal Shell

        function triggerBrutalShellButtonClick() {
            $("#brutal-shell").click();
        }

        function triggerBowShockButtonClick(buttonId) {
            var $button = $("#" + buttonId);
                if (!$button.prop("disabled")) {
                    $button.click();
                }
        }

        document.addEventListener("keydown", function(event) {
            if (event.altKey && event.key === "2") {
                triggerBowShockButtonClick("bow-shock");
            } else if (event.key === "2") {
                triggerBrutalShellButtonClick();
            }
        });

// Sonic Break
// Solid Barrel

        function triggerSonicBreakButtonClick(buttonId) {
            var $button = $("#" + buttonId);
                if (!$button.prop("disabled")) {
                    $button.click();
                }
            }


        function triggerSolidBarrelButtonClick() {
            $("#solid-barrel").click();
        }

        document.addEventListener("keydown", function(event) {
            if (event.altKey && event.key === "3") {
                triggerSonicBreakButtonClick("sonic-break");
            } else if (event.key === "3") {
                triggerSolidBarrelButtonClick();
            }
        });

// Rough Divide
        document.addEventListener("keydown", function(event) {
            if (event.key === "6") {
                triggerRoughDivideButtonClick();
            }
        });

// Double Down
        function triggerDoubleDownButtonClick(buttonId) {
            var $button = $("#" + buttonId);
            if (!$button.prop("disabled")) {
                $button.click();
            }
        }

        document.addEventListener("keydown", function(event) {
            if (event.key === "5") {
                triggerDoubleDownButtonClick("double-down");
            }
        });

// Bloodfest

        function triggerBloodfestButtonClick(buttonId) {
            var $button = $("#" + buttonId);
                if (!$button.prop("disabled")) {
                    $button.click();
            }
        }

        document.addEventListener("keydown", function(event) {
            if (event.altKey && event.key === "q") {
                triggerBloodfestButtonClick("bloodfest");
            }
        });


        $("#gunbreaker-reset").click(function() {
            $.ajax({
                type: "POST",
                url: "/reset_gunbreaker",
                success: function(response) {
                    updateComboDisplay(response.combo);
                    updateCartridgeDisplay(response.cartridge);

                    updateCartridgeOne(response.cartridge);
                    updateCartridgeTwo(response.cartridge);
                    updateCartridgeThree(response.cartridge);

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

                    updateNoMercyCooldownDisplay(response.no_mercy_cooldown);
                    updateNoMercyButtonState(response.no_mercy_cooldown);

                    updateRoughDivideCooldownDisplay(response.rough_divide_cooldown);
                    updateRoughDivideStacksDisplay(response.rough_divide_stacks);
                    updateRoughDivideButton(response.rough_divide_stacks);

                    updateJugularRipButtonState(false);
                    updateAbdomenTearButtonState(false);
                    updateEyeGougeButtonState(false);
                    updateSavageClawButtonState(false);
                    updateWickedTalonButtonState(false);

                    updateGnashingFangVisibility(false, false);
                    updateHypervelocityButtonState(false)

                    updateContinuationButtonState(false, false, false, false);

                    updateNoMercyBuffText(response.no_mercy_buff);
                    updateBrutalShellBuffText(response.brutal_shell_buff);
                    updateHypervelocityBuffText(response.hypervelocity_buff);

                    updateNoMercyBuffVisibility(response.no_mercy_buff);
                    updateBrutalShellBuffVisibility(response.brutal_shell_buff);
                    updateHypervelocityBuffVisibility(response.hypervelocity_buff);

                    updateBowShockDebuffVisibility(response.bow_shock_debuff);
                    updateBowShockDebuffText(response.bow_shock_debuff);
                    updateSonicBreakDebuffVisibility(response.sonic_break_debuff);
                    updateSonicBreakDebuffText(response.sonic_break_debuff);

                    $("#brutal-shell").removeClass("shining-border");
                    $("#solid-barrel").removeClass("shining-border");
                },
            });
        });
    });
