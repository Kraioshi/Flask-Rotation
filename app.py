from flask import Flask, render_template, redirect, url_for
from rotation import Reaper

app = Flask(__name__)

app.config["SECRET_KEY"] = 'secret'

rpr = Reaper()


@app.route("/")
def index():
    return render_template('home.html', gauge=rpr.gauge)


@app.route('/slice', methods=["POST"])
def reaper_slice():
    rpr.slice()
    print(rpr.gauge)
    return redirect(url_for('index'))


@app.route('/waxing_slice', methods=['POST'])
def reaper_waxing():
    rpr.waxing_slice()
    print(rpr.gauge)
    return redirect(url_for('index'))


@app.route('/infernal_slice', methods=['POST'])
def reaper_infernal():
    rpr.infernal_slice()
    print(rpr.gauge)
    return redirect(url_for('index'))


@app.route('/gallows', methods=['POST'])
def reaper_gallows():
    rpr.gallows()
    print(rpr.gauge)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
