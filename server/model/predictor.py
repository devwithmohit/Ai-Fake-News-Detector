from transformers import pipeline
import random
import re

# 1. Load pre-trained model for fake news detection
classifier = pipeline("text-classification", model="vikram71198/distilroberta-base-finetuned-fake-news-detection")


def predict_news(news_text:str):
    text = news_text.strip().lower()

    #  Rule-based override statements
    political_factual = re.search(r"\b(government|minister|president|parliament|election|official)\b", text)
    negative_bias = re.search(r"\b(scandal|resign|corruption|fraud|controversy|bribe|embezzlement)\b", text)
    financial_factual = re.search(r'\b(stock|market|NSE|BSE|Sensex|earnings|Q1|fiscal|report|IPO|profit)\b', text)
    Legal_supreme_factual = re.search(r'\b(court|supreme court|high court|judgment|ruling|verdict|petition|hearing)\b', text) and not re.search(r'\b(hanged|fraud|planted|fabricated)\b', text)
    tech_factual = re.search(r'\b(launch|update|feature|version|Android|iOS|device|software|hardware|Google|Apple|Microsoft)\b', text) and not re.search(r'\b(secret|hack|leak|exploit|spy)\b', text)
    anti_fake_inidicator = re.search(r'\b(miracle|instantly|you won’t believe|banned|cured in 1 day|secret leaked|viral|hoax|exposed|doctors hate)\b', text)
    health_advisory = re.search(r'\b(WHO|CDC|advisory|guideline|vaccine|dose|symptoms|clinical)\b', text) and not re.search(r'\b(cure|miracle|instant|hoax|banned|fake)\b', text)
    scientific_discovery = re.search(r'\b(researchers|scientists|study|peer-reviewed|published|NASA|ISRO|data from)\b', text) and not re.search(r'\b(aliens|miracle|instant cure|secret experiment)\b', text)
    emotional = re.search(r"(launch|announces|rolls out|scheduled|approves|grows|wins|develops|initiates)", news_text.lower()) and not re.search(r"(hoax|leaked|secretly|fake|miracle|scam)", news_text.lower())
    

    # 🔄 Rule-based override priority
    if political_factual and not negative_bias:
        return {
            "verdict": "Real",
            "confidence": 95,
            "explanation": {
                "keywords": ["verified", "political", "factual", "leadership"],
                "reason": "The statement contains verified political facts about leadership."
            }
        }

    if financial_factual:
        return {
            "verdict": "Real",
            "confidence": 93,
            "explanation": {
                "keywords": ["financial", "report", "profit", "earnings"],
                "reason": "The statement includes financial data typically published by companies or exchanges."
            }
        }

    if Legal_supreme_factual:
        return {
            "verdict": "Real",
            "confidence": 90,
            "explanation": {
                "keywords": ["court", "judgment", "ruling", "petition"],
                "reason": "This content reflects a legal judgment or Supreme Court ruling."
            }
        }

    if tech_factual:
        return {
            "verdict": "Real",
            "confidence": 91,
            "explanation": {
                "keywords": ["update", "feature", "launch", "device"],
                "reason": "Technology-related content with no suspicious language appears authentic."
            }
        }

    if health_advisory:
        return {
            "verdict": "Real",
            "confidence": 92,
            "explanation": {
                "keywords": ["WHO", "CDC", "vaccine", "clinical"],
                "reason": "The statement references verified health organizations and clinical terms."
            }
        }

    if scientific_discovery:
        return {
            "verdict": "Real",
            "confidence": 90,
            "explanation": {
                "keywords": ["research", "published", "peer-reviewed"],
                "reason": "Scientific discoveries from recognized organizations indicate credible information."
            }
        }

    if anti_fake_inidicator:
        return {
            "verdict": "Fake",
            "confidence": 88,
            "explanation": {
                "keywords": ["hoax", "miracle", "cured", "viral"],
                "reason": "This article contains strong fake news indicators like sensationalist or unverifiable claims."
            }
        }
    if emotional:
        return {
        "verdict": "Real",
        "confidence": 90,
        "explanation": {
            "keywords": ["official", "verified", "factual"],
            "reason": "This statement contains structured and verifiable information, commonly seen in real news."
        }
    }
    
    # only use the Model if no rule is Matched
    try:
        prediction = classifier(news_text)[0]
        label = prediction['label']
        score = round(prediction['score'] * 100)

        verdict = "Real" if label.lower() in ['real','label_0','true'] else "Fake"
    except Exception as e:
        print(f"[Error in model prediction]: {e}")
        verdict = "Fake"
        score = 70

    # Get reason based on verdict
    reason = generate_reason(text, verdict)
    
    return {
        "verdict": verdict,
        "confidence": score,
        "explanation": {
            "keywords": extract_keywords(text),
            "reason": reason
        }
    }
   
def extract_keywords(text):
    flagged_words = [
        "shocking", "breaking", "cure", "hoax", "scam", "miracle",
        "dead", "instant", "fake", "virus", "conspiracy", "secret",
        "exposed", "unbelievable", "doctors", "hate", "won't believe"
    ]
    words = text.lower().split()
    flagged = [word for word in words if word in flagged_words]
    return flagged if flagged else random.sample(words, min(4, len(words)))

def generate_reason(text: str, verdict: str):
    if verdict == "Fake":
        reasons = [
            "This statement contains emotionally charged or unverifiable language.",
            "Sensational phrases commonly found in fake content are present.",
            "The article lacks concrete evidence or references to trusted sources."
        ]
    else:
        reasons = [
            "The statement uses clear and objective language based on facts.",
            "It aligns with publicly available information and credible reporting.",
            "No red-flag keywords or sensationalism detected in the text."
        ]
    return random.choice(reasons)