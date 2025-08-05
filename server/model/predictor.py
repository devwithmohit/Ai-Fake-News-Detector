from transformers import pipeline
import random

# 1. Load pre-trained for fake news detection model from HuggingFace

# You can replace with your own fine-tuned model if needed
classifier = pipeline("text-classification", model="mrm8488/bert-tiny-finetuned-fake-news-detection")





# 2. Predict Function
def predict_news(news_text):
    # Run the prediction
    prediction = classifier(news_text)[0]
    label = prediction['label']
    score = round(prediction['score'] * 100)

 # 3. Convert label to user-friendly verdict
    verdict = "Real" if label == "Real" else "Fake"
    keywords = extract_keywords(news_text)

    reason = "This statement contains emotionally charged or unverifiable words." if verdict == "Fake" else "The text appears factual and well-structured."

    return {
        "verdict": verdict,
        "confidence" : score,
        "explanation":{
            "keywords" : keywords,
            "reason " : reason
        }
    }
def extract_keywords(text):
    words = text.lower().split()
    flagged = ["shocking", "breaking", "cure", "hoax", "scam", "miracle", "dead", "instant", "fake", "virus"]
    return list(set(word for word in words if word in flagged)) or random.sample(words, min(4, len(words)))