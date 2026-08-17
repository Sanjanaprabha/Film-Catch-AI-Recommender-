# 🎬 FilmCatch – AI Movie Recommender

<p align="center">

<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Flask-Backend-000000?style=for-the-badge&logo=flask&logoColor=white"/>
<img src="https://img.shields.io/badge/OpenAI-GPT--5%20Mini-412991?style=for-the-badge&logo=openai&logoColor=white"/>
<img src="https://img.shields.io/badge/TMDB-API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white"/>
<img src="https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge&logo=render&logoColor=black"/>

</p>

<p align="center">
<b>🍿 A full-stack AI-powered movie recommendation web application built with React, Flask, OpenAI API and TMDB.</b>
</p>

---

# 🌐 Live Demo

### 🎥 Frontend

**https://your-frontend-url.onrender.com**

### 🤖 Backend API

**https://film-catch-backend.onrender.com**

---

# 📌 About The Project

FilmCatch is an IMDb-inspired movie discovery platform that evolved into a full-stack **AI Movie Recommendation System**.

Instead of browsing endlessly, users simply enter movies they already enjoy, and an AI model recommends similar films. The application then fetches posters, ratings, release dates, and movie details from TMDB and displays them in a modern Netflix-style interface.

---

# ✨ Features

### 🎬 Movie Discovery

- Trending movies
- Popular TV shows
- Search movies & TV
- Genre filtering
- Pagination
- Movie details modal

### 🤖 AI Recommendations

- Natural language movie suggestions
- OpenAI-powered recommendation engine
- Multiple input movies supported
- Similar movie discovery
- TMDB metadata enrichment

### 📱 Responsive UI

- Material UI design
- Mobile-friendly layout
- Dynamic content cards
- Loading indicators
- Smooth user experience

---

# 🧠 AI Recommendation Workflow

```text
User enters favourite movies
            │
            ▼
React Frontend
            │
            ▼
Axios POST Request
            │
            ▼
Flask REST API
            │
            ▼
OpenAI GPT-5 Mini
            │
            ▼
AI generates movie names
            │
            ▼
TMDB Search API
            │
            ▼
Movie posters + ratings + metadata
            │
            ▼
Beautiful recommendation cards
```

---

# 🛠️ Tech Stack

## Frontend

- ⚛️ React
- 🎨 Material UI
- 📦 Axios
- 🧭 React Router
- 💅 CSS

## Backend

- 🐍 Python
- 🌐 Flask
- 🔄 Flask-CORS
- 🤖 OpenAI API
- 🔐 Python Dotenv

## APIs

- 🎬 TMDB API
- 🤖 OpenAI GPT-5 Mini

## Deployment

- ☁️ Render (Frontend)
- ☁️ Render (Backend)

---

# 📂 Project Structure

```text
FilmCatch/
│
├── Backend/
│   ├── app.py
│   ├── requirements.txt
│   └── .env
│
├── film-catch/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── Genres/
│   │   │   ├── SingleContent/
│   │   │   ├── ContentModal/
│   │   │   ├── pagination/
│   │   │   ├── footer/
│   │   │   └── pages/
│   │   │       ├── AiRecommend/
│   │   │       ├── movies/
│   │   │       ├── tvshows/
│   │   │       ├── trending/
│   │   │       └── search/
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# 🤖 AI Recommendation Engine

The recommendation system works in two stages.

## Stage 1 — OpenAI

The user enters movies separated by commas.

Example:

```text
Interstellar, Inception, Arrival
```

The Flask backend sends these preferences to **GPT-5 Mini**, which generates a list of similar movies.

Example response:

```json
[
  "Blade Runner 2049",
  "The Prestige",
  "Moon",
  "Contact",
  "Ex Machina"
]
```

---

## Stage 2 — TMDB

Each AI-generated title is searched using the TMDB API.

The frontend automatically retrieves:

- Movie poster
- Rating
- Release date
- Overview
- Movie ID

These are displayed as interactive movie cards.

---

# 🚀 How to Run Locally

## 1. Clone Repository

```bash
git clone https://github.com/Sanjanaprabha/Film-Catch-AI-Recommender-.git
```

---

## 2. Backend Setup

```bash
cd Backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

Create `.env`

```env
OPENAI_API_KEY=your_api_key_here
```

Run Flask

```bash
python app.py
```

Runs on:

```text
http://127.0.0.1:5000
```

---

## 3. Frontend Setup

```bash
cd film-catch

npm install
```

Create `.env`

```env
REACT_APP_API_KEY=your_tmdb_api_key
```

Start React

```bash
npm start
```

Runs on:

```text
http://localhost:3000
```

---

# 🔐 Environment Variables

### Backend

```env
OPENAI_API_KEY=your_openai_key
```

### Frontend

```env
REACT_APP_API_KEY=your_tmdb_key
```

> Both `.env` files are excluded using `.gitignore`.

---

# 🎯 Key Learning Outcomes

This project demonstrates practical implementation of:

- Full-stack web development
- React component architecture
- REST API development with Flask
- OpenAI API integration
- Prompt engineering
- Axios asynchronous requests
- Third-party API integration
- TMDB movie database
- Environment variable management
- Frontend & backend deployment
- AI-powered recommendation systems

---

# 🔮 Future Improvements

- 🎭 Personalized recommendation history
- ❤️ User watchlist & favorites
- ⭐ User ratings
- 🎥 Trailer integration
- 🔍 Hybrid recommendation model
- 👤 Authentication & user profiles
- 📊 Recommendation confidence scores
- 🌙 Dark/Light theme support

---

# 👩‍💻 Author

## **Sanjana Prabha**

**Aspiring Data Scientist | Machine Learning | AI | Full-Stack Developer**

<p align="center">

⭐ If you enjoyed this project, consider giving it a star!

</p>
