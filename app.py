from flask import Flask, render_template, redirect, url_for, jsonify
from flask_bootstrap import Bootstrap5
from reaper import Reaper
from warrior import Warrior
from gnb import Gunbreaker
from paladin import Paladin
from jobs.drk import DarkKnight

app = Flask(__name__)

app.config["SECRET_KEY"] = 'secret'
Bootstrap5(app)

rpr = Reaper()
war = Warrior()
gnb = Gunbreaker()
pld = Paladin()
drk = DarkKnight()


@app.route("/")
def index():
    gauge = 150
    gauge = min(gauge, 100)
    return render_template('home.html', gauge=rpr.soul_gauge)


@app.route('/reaper')
def reaper():
    gauge = 150
    gauge = min(gauge, 100)
    return render_template('reaper.html', gauge=rpr.soul_gauge)


@app.route('/slice', methods=["POST"])
def reaper_slice():
    rpr.slice()
    print(rpr.soul_gauge)
    return redirect(url_for('reaper'))


@app.route('/waxing_slice', methods=['POST'])
def reaper_waxing():
    rpr.waxing_slice()
    print(rpr.soul_gauge)
    return redirect(url_for('reaper'))


@app.route('/infernal_slice', methods=['POST'])
def reaper_infernal():
    rpr.infernal_slice()
    print(rpr.soul_gauge)
    return redirect(url_for('reaper'))


@app.route('/gallows', methods=['POST'])
def reaper_gallows():
    rpr.gallows()
    print(rpr.soul_gauge)

    return redirect(url_for('reaper'))


@app.route('/design', methods=['POST'])
def reaper_design():
    rpr.deaths_design()
    print(rpr.design, "seconds")
    return redirect(url_for('reaper'))


@app.route('/reaper_reset', methods=["POST"])
def reaper_reset():
    global rpr
    rpr = Reaper()
    return redirect(url_for('reaper'))


# Warrior


@app.route('/warrior')
def warrior():
    warrior_data = {"inner_release_stacks": war.inner_release_stacks}
    return render_template('warrior/warrior.html', warrior=war, warrior_data=warrior_data)


@app.route('/warrior_heavy_swing', methods=["POST"])
def warrior_heavy_swing():
    war.heavy_swing()
    return redirect(url_for('warrior'))


@app.route('/warrior_maim', methods=["POST"])
def warrior_maim():
    war.maim()
    print(war.beast_gauge)
    return redirect(url_for('warrior'))


@app.route('/warrior_storms_eye', methods=["POST"])
def warrior_storms_eye():
    war.storms_eye()
    print(war.surging_tempest)
    return redirect(url_for('warrior'))


@app.route('/warrior_storms_path', methods=["POST"])
def warrior_storms_path():
    war.storms_path()
    return redirect(url_for('warrior'))


@app.route('/warrior_fell_cleave', methods=["POST"])
def warrior_fell_cleave():
    war.fell_cleave()
    return redirect(url_for('warrior'))


@app.route('/warrior_inner_chaos', methods=["POST"])
def warrior_inner_chaos():
    war.inner_chaos()
    return redirect(url_for('warrior'))


@app.route('/warrior_infuriate', methods=["POST"])
def warrior_infuriate():
    war.infuriate()
    return redirect(url_for('warrior'))


@app.route('/warrior_inner_release', methods=["POST"])
def warrior_inner_release():
    war.inner_release()
    return redirect(url_for('warrior'))


@app.route('/warrior_inner_release_fell_cleave', methods=["POST"])
def warrior_inner_release_fell_cleave():
    war.inner_release_fell_cleave()
    return redirect(url_for('warrior'))


@app.route("/warrior_upheaval", methods=["POST"])
def warrior_upheaval():
    war.upheaval()
    return redirect(url_for('warrior'))


@app.route("/warrior_onslaught", methods=["POST"])
def warrior_onslaught():
    war.onslaught()
    return redirect(url_for('warrior'))


@app.route('/warrior_primal_rend', methods=["POST"])
def warrior_primal_rend():
    war.primal_rend()
    return redirect(url_for('warrior'))


@app.route('/warrior_reset', methods=["POST"])
def warrior_reset():
    global war
    war = Warrior()
    return redirect(url_for('warrior'))


# GUNBREAKER

def generate_gunbreaker_attributes(gunbreaker_attributes):
    return {'combo': gnb.combo,
            'cartridge': gnb.cartridge,
            "gnashing_fang_cooldown": gnb.gnashing_fang_cooldown,
            "bloodfest_cooldown": gnb.bloodfest_cooldown,
            "blasting_zone_cooldown": gnb.blasting_zone_cooldown,
            "bow_shock_cooldown": gnb.bow_shock_cooldown,
            "sonic_break_cooldown": gnb.sonic_break_cooldown,
            "rough_divide_cooldown": gnb.rough_divide_cooldown,
            "double_down_cooldown": gnb.double_down_cooldown,
            "no_mercy_cooldown": gnb.no_mercy_cooldown,
            "rough_divide_stacks": gnb.rough_divide_stacks,
            "ready_to_blast": gnb.ready_to_blast,
            "ready_to_rip": gnb.ready_to_rip,
            "ready_to_tear": gnb.ready_to_tear,
            "ready_to_gouge": gnb.ready_to_gouge,
            "savage_claw_ready": gnb.savage_claw_ready,
            "wicked_talon_ready": gnb.wicked_talon_ready,
            "no_mercy_buff": gnb.no_mercy_buff,
            "brutal_shell_buff": gnb.brutal_shell_buff,
            "hypervelocity_buff": gnb.hypervelocity_buff,
            "bow_shock_debuff": gnb.bow_shock_debuff,
            "sonic_break_debuff": gnb.sonic_break_debuff
            }


@app.route('/gunbreaker')
def gunbreaker():
    return render_template('gunbreaker/gunbreaker.html', gnb=gnb)


@app.route('/keen_edge', methods=['POST'])
def keen_edge():
    gnb.keen_edge()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route('/brutal_shell', methods=['POST'])
def brutal_shell():
    gnb.brutal_shell()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route('/solid_barrel', methods=['POST'])
def solid_barrel():
    gnb.solid_barrel()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route("/burst_strike", methods=['POST'])
def burst_strike():
    gnb.burst_strike()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route("/double_down", methods=["POST"])
def double_down():
    gnb.double_down()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route('/gnashing_fang', methods=['POST'])
def gnashing_fang():
    gnb.gnashing_fang()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route('/rough_divide', methods=["POST"])
def rough_divide():
    gnb.rough_divide()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route("/bloodfest", methods=["POST"])
def bloodfest():
    gnb.bloodfest()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route("/blasting_zone", methods=["POST"])
def blasting_zone():
    gnb.blasting_zone()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route("/bow_shock", methods=["POST"])
def bow_shock():
    gnb.bow_shock()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route("/no_mercy", methods=["POST"])
def no_mercy():
    gnb.no_mercy()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route('/sonic_break', methods=["POST"])
def sonic_break():
    gnb.sonic_break()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route('/savage_claw', methods=["POST"])
def savage_claw():
    gnb.savage_claw()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route("/wicked_talon", methods=["POST"])
def wicked_talon():
    gnb.wicked_talon()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route('/jugular_rip', methods=["POST"])
def jugular_rip():
    gnb.jugular_rip()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route('/abdomen_tear', methods=['POST'])
def abdomen_tear():
    gnb.abdomen_tear()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route('/eye_gouge', methods=["POST"])
def eye_gouge():
    gnb.eye_gouge()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route('/hypervelocity', methods=["POST"])
def hypervelocity():
    gnb.hypervelocity()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route('/reset_gunbreaker', methods=["POST"])
def reset_gunbreaker():
    global gnb
    gnb = Gunbreaker()
    gnb_dict = generate_gunbreaker_attributes(gnb)
    return jsonify(gnb_dict)


@app.route('/gunbreaker_reset', methods=["POST"])
def gunbreaker_reset():
    global gnb
    gnb = Gunbreaker()
    return redirect(url_for('gunbreaker'))


# PALADIN

def generate_paladin_attributes(paladin_attributes):
    return {
        'combo': pld.combo,
        'atonement_stacks': pld.atonement_stacks,
        'fight_or_flight_buff': pld.fight_or_flight_buff,
    }


@app.route('/paladin')
def paladin():
    return render_template("paladin/paladin.html", pld=pld)


@app.route('/fast_blade', methods=["POST"])
def fast_blade():
    pld.fast_blade()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route("/riot_blade", methods=["POST"])
def riot_blade():
    pld.riot_blade()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route("/royal_authority", methods=["POST"])
def royal_authority():
    pld.royal_authority()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route('/atonement', methods=["POST"])
def atonement():
    pld.atonement()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route('/goring_blade', methods=["POST"])
def goring_blade():
    pld.goring_blade()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route('/fight_or_flight', methods=["POST"])
def fight_or_flight():
    pld.fight_or_flight()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route("/requiescat", methods=["POST"])
def requiescat():
    pld.requiescat()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route("/circle_of_scorn", methods=["POST"])
def circle_of_scorn():
    pld.circle_of_scorn()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route('/expiacion', methods=["POST"])
def expiacion():
    pld.expiacion()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route("/intervene", methods=["POST"])
def intervene():
    pld.intervene()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route("/holy_spirit", methods=["POST"])
def holy_spirit():
    pld.holy_spirit()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route("/confetior", methods=["POST"])
def confetior():
    pld.confetior()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route("/blade_of_faith", methods=["POST"])
def blade_of_faith():
    pld.blade_of_faith()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route("/blade_of_truth", methods=["POST"])
def blade_of_truth():
    pld.blade_of_truth()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route("/blade_of_valor", methods=["POST"])
def blade_of_valor():
    pld.blade_of_valor()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route('/reset_paladin', methods=["POST"])
def reset_paladin():
    global pld
    pld = Paladin()
    pld_dict = generate_paladin_attributes(pld)
    return jsonify(pld_dict)


@app.route("/hard_reset_paladin", methods=["POST"])
def hard_reset_paladin():
    global pld
    pld = Paladin()
    return redirect(url_for('paladin'))


# #######
# #######
# #######
# #######


def generate_dark_knight_attributes():
    return {'combo': drk.combo,
            'gauge': drk.gauge,
            'mana': drk.mana}


@app.route('/dark_knight')
def dark_knight():
    return render_template("dark_knight/drk.html", drk=drk, mana=drk.mana, gauge=drk.gauge, combo=drk.combo)


@app.route('/hard_slash', methods=["POST"])
def hard_slash():
    drk_dict = generate_dark_knight_attributes()
    return jsonify(drk_dict)


@app.route('/syphon_strike', methods=["POST"])
def syphon_strike():
    drk_dict = generate_dark_knight_attributes()
    return jsonify(drk_dict)


@app.route('/souleater', methods=["POST"])
def souleater():
    drk_dict = generate_dark_knight_attributes()
    return jsonify(drk_dict)


@app.route('/bloodspiller', methods=["POST"])
def bloodspiller():
    drk_dict = generate_dark_knight_attributes()
    return jsonify(drk_dict)


if __name__ == '__main__':
    app.run(debug=True)
