from flask import Flask
from flask_cors import CORS
from routes.analyze import analyze_bp

app = Flask(__name__)
CORS(app)  # Allow React frontend to access backend


app.register_blueprint(analyze_bp, url_prefix="/api")


@app.route('/')
def home():
    return  {"status": "Server is running ✅"}

# App ko run karta hai with live reload and error debugger.
if __name__ == '__main__':
    app.run(debug=True)

