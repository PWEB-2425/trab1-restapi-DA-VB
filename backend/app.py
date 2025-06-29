from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/nomes", methods=["GET"])
def get_nomes():
    nomes = ["Ana", "Carlos", "Beatriz", "João", "Maria"]
    return jsonify(nomes)

if __name__ == "__main__":
    app.run(debug=True)
