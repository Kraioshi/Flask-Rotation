from flask import Flask, render_template, redirect, url_for, flash, jsonify
from flask_bootstrap import Bootstrap5
from reaper import Reaper
from warrior import Warrior
from gnb import Gunbreaker

app = Flask(__name__)

app.config["SECRET_KEY"] = 'secret'
Bootstrap5(app)

rpr = Reaper()
war = Warrior()
gnb = Gunbreaker()


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

@app.route('/gunbreaker')
def gunbreaker():
    return render_template('gunbreaker.html')


if __name__ == '__main__':
    app.run(debug=True)
