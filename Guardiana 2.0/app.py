from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('main.html')

@app.route('/after_login')
def hello():
    return render_template('duplicate.html')

@app.route('/chat')
def bot():
    return render_template('plantai.html')

@app.route('/scanning')
def detector():
    return render_template('scan.html')
@app.route('/planty')
def type():
    return render_template('class_plant.html')
@app.route('/herb')
def plant():
    return render_template('mint.html')

@app.route('/shrub')
def plant2():
    return render_template('rose.html')

@app.route('/tree')
def plant3():
    return render_template('banyan.html')

@app.route('/climber')
def plant4():
    return render_template('grapes.html')

@app.route('/diseased')
def plant5():
    return render_template('disease.html')

@app.route('/searching')
def plant6():
    return render_template('search.html')
if __name__ == '__main__':
    app.run(debug=True)
