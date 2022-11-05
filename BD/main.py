from flask import Flask
import requests
app = Flask(__name__)


@app.route("/")
def hello_world():
    res = requests.get('http://127.0.0.1:8000/items/3')
    print(res.content)
    return f"{res.json()['item_id']}"
