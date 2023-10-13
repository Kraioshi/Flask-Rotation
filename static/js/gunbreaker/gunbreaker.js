import { updateCartridgeOne, updateCartridgeTwo, updateCartridgeThree, updateGauge } from './gauge.js';
import { updateNoMercyBuffText, updateNoMercyBuffVisibility, updateBrutalShellBuffText, updateBrutalShellBuffVisibility,
        updateHypervelocityBuffText, updateHypervelocityBuffVisibility, updateJugularRipBuffVisibility,
        updateAbdomenTearBuffVisibility, updateEyeGougeBuffVisibility} from './buffs.js';

let roughDivideStacks = {{gnb.rough_divide_stacks}}
let cartridgeValue = {{gnb.cartridge}}

let doubleDownCooldown = {{ gnb.double_down_cooldown }}
let gnashingFangCooldown = {{ gnb.gnashing_fang_cooldown}}

let noMercyBuff = {{ gnb.no_mercy_buff}}
let brutalShellBuff = {{ gnb.brutal_shell_buff }}
let hypervelocityBuff = {{ gnb.hypervelocity_buff }}

let bowShockDebuff = {{ gnb.bow_shock_debuff }}
let sonicBreakDebuff = {{ gnb.sonic_break_debuff }}

let readyToRip = {{ gnb.ready_to_rip }}
let readyToTear = {{ gnb.ready_to_tear}}
let readyToGouge = {{ gnb.ready_to_gouge}}

// Update cartridge
updateGauge(cartridgeValue)

// Update Buffs
updateBuffs(noMercyBuffValue, brutalShellBuffValue, hypervelocityBuffValue, readyToRip, readyToTear, readyToGouge)
