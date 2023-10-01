from flask import Flask, render_template, redirect, url_for, flash
from rotation import Reaper

app = Flask(__name__)

app.config["SECRET_KEY"] = 'secret'

rpr = Reaper()


@app.route("/")
def index():
    gauge = 150
    gauge = min(gauge, 100)
    return render_template('home.html', gauge=rpr.soul_gauge)


@app.route('/slice', methods=["POST"])
def reaper_slice():
    rpr.slice()
    print(rpr.soul_gauge)
    return redirect(url_for('index'))


@app.route('/waxing_slice', methods=['POST'])
def reaper_waxing():
    rpr.waxing_slice()
    print(rpr.soul_gauge)
    return redirect(url_for('index'))


@app.route('/infernal_slice', methods=['POST'])
def reaper_infernal():
    rpr.infernal_slice()
    print(rpr.soul_gauge)
    return redirect(url_for('index'))


@app.route('/gallows', methods=['POST'])
def reaper_gallows():
    rpr.gallows()
    print(rpr.soul_gauge)

    return redirect(url_for('index'))


@app.route('/design', methods=['POST'])
def reaper_design():
    rpr.deaths_design()
    print(rpr.design, "seconds")
    return redirect(url_for('index'))


@app.route('/reset', methods=["POST"])
def reset():
    global rpr
    rpr = Reaper()
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)
