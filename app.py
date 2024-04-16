from flask import Flask, jsonify, redirect, render_template, request, session

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


# Manipulador de erro para página não encontrada (Erro 404)
@app.errorhandler(404)
def pagina_nao_encontrada_erro(error):
    return render_template('404.html'), 404

# Manipulador de erro para erro interno do servidor (Erro 500)
@app.errorhandler(500)
def erro_interno_erro(error):
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(debug=True)