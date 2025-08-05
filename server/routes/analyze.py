from flask import Blueprint, request , jsonify

from model.predictor import predict_news


# Blueprint bana rahe hain jise app.py me register karenge

analyze_bp = Blueprint('analyze', __name__)

@analyze_bp.route('/analyze' , methods=["POST"])
def analyze():
    try:
        data = request.get_json()

        if not data or "news" not in data:
            return jsonify({
                "error":"missing 'news' field"
            }), 400
        news_text = data["news"]

        result = predict_news(news_text)

        return jsonify(result), 200

    except Exception as e:
        return jsonify({
            "error" :str(e)
        }),500