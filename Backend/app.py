from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os
import json

load_dotenv()

app = Flask(__name__)
CORS(app)

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


@app.route("/recommend", methods=["POST"])
def recommend():

    data = request.json
    liked_movies = data.get("movies", [])

    if not liked_movies:
        return jsonify([])

    prompt = f"""
User likes these movies:
{liked_movies}

Recommend exactly 5 movies that are similar in genre, tone,
themes, or style.

Do not recommend any movie from the user's input.

Return ONLY a valid JSON array of movie titles.

Example:
["Arrival", "Moon", "Contact", "Ex Machina", "The Martian"]
"""

    try:
        response = client.responses.create(
            model="gpt-5-mini",
            input=prompt
        )

        recommendations = json.loads(response.output_text)

        if not isinstance(recommendations, list):
            recommendations = []

        return jsonify(recommendations[:5])

    except Exception as e:
        print("Recommendation error:", e)
        return jsonify({"error": "Failed to generate recommendations"}), 500


if __name__ == "__main__":
    app.run(debug=True)