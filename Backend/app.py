from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os

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

    prompt = f"""
    User likes these movies:

    {liked_movies}

    Recommend 10 similar movies.

    Return ONLY a JSON array.

    Example:

    ["Arrival","Moon","Contact"]
    """

    response = client.responses.create(
        model="gpt-5-mini",
        input=prompt
    )

    try:
        recommendations = eval(response.output_text)
    except:
        recommendations = []

    return jsonify(recommendations)

if __name__ == "__main__":
    app.run(debug=True)