from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib
import re
import dns.resolver
from flask import Flask, jsonify, redirect, render_template, request, session

app = Flask(__name__)

# Função para validar o formato do e-mail
def validar_email_formato(email):
    regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return bool(re.match(regex, email))

# Função para verificar se o domínio do e-mail tem um servidor de e-mail configurado
def verificar_dominio_email(email):
    try:
        dominio = email.split('@')[1]  # Pega o domínio após o "@"
        registros_mx = dns.resolver.resolve(dominio, 'MX')  # Consulta os registros MX do domínio
        if registros_mx:
            return True
        return False
    except (dns.resolver.NoAnswer, dns.resolver.NXDOMAIN):
        return False

# Função para verificar o e-mail completo (formato + domínio)
def verificar_email(email):
    if not validar_email_formato(email):
        return "Formato de e-mail inválido."
    
    if not verificar_dominio_email(email):
        return "O domínio do e-mail não possui servidores de e-mail válidos."
    
    return "E-mail válido e domínio configurado com servidores de e-mail."

@app.route('/')
def index():
    return render_template('init.html')

@app.route('/ArthurMalveste')
def main():
    return render_template('testefora.html')

# Configurações do servidor SMTP
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
EMAIL_USUARIO = "arthurmielemalveste@gmail.com"
EMAIL_SENHA = "eadn buxy dsns catu"
EMAIL_DESTINO = "arth4asy@gmail.com"

@app.route("/enviar", methods=["POST"])
def enviar_email():
    nome = request.form["nome"]
    email = request.form["email"]
    mensagem = request.form["mensagem"]

    # Verificação do e-mail
    resultado_verificacao = verificar_email(email)
    if "inválido" in resultado_verificacao or "não possui servidores" in resultado_verificacao:
        return f"Erro: {resultado_verificacao}"  # Retorna o erro se o e-mail não for válido

    # Criando um e-mail formatado
    msg = MIMEMultipart()
    msg["From"] = EMAIL_USUARIO
    msg["To"] = EMAIL_DESTINO
    msg["Subject"] = f"Nova mensagem de {nome} ({email})"

    corpo_email = f"""
    <html>
    <body>
        <h2>Nova mensagem recebida:</h2>
        <p><strong>Nome:</strong> {nome}</p>
        <p><strong>E-mail:</strong> {email}</p>
        <p><strong>Mensagem:</strong></p>
        <blockquote>{mensagem}</blockquote>
    </body>
    </html>
    """

    msg.attach(MIMEText(corpo_email, "html"))

    try:
        servidor = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        servidor.starttls()
        servidor.login(EMAIL_USUARIO, EMAIL_SENHA)
        servidor.sendmail(EMAIL_USUARIO, EMAIL_DESTINO, msg.as_string())
        servidor.quit()
        return "Mensagem enviada com sucesso!"
    except Exception as e:
        return f"Erro ao enviar mensagem: {e}"

@app.route('/termosdeuso')
def termosdeuso():
    return render_template('termosecondicoes.html')

@app.route('/politica')
def politica():
    return render_template('politicadeprivacidade.html')

# Manipulador de erro para página não encontrada (Erro 404)
@app.errorhandler(404)
def pagina_nao_encontrada_erro(error):
    return render_template('404.html'), 404

# Manipulador de erro para erro interno do servidor (Erro 500)
@app.errorhandler(500)
def erro_interno_erro(error):
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(debug=False)
