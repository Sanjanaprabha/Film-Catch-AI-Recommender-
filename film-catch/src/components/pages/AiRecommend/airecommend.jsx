import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import {
    TextField,
    Button
} from "@mui/material";

import Singlecontent from "../../SingleContent/singlecontent";

const AIRecommend = () => {

    const [movieInput, setMovieInput] = useState("");
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(false);

    const getRecommendations = async () => {
        setLoading(true);

        try {
            const likedMovies = movieInput
                .split(",")
                .map(movie => movie.trim())
                .filter(movie => movie.length > 0);

            const aiResponse = await axios.post(
                "https://film-catch-backend.onrender.com/recommend",
                {
                    movies: likedMovies
                }
            );

            const recommendedMovies = aiResponse.data;

            let allMovies = [];

            for (let movie of recommendedMovies) {

                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${encodeURIComponent(movie)}`
                );

                if (data.results.length > 0) {
                    allMovies.push(data.results[0]);
                }
            }

            setContent(allMovies);

        } catch (error) {
            console.error("Recommendation error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    margin: "15px 0"
                }}
            >
                <TextField
                    fullWidth
                    label="Enter movies you like separated by commas"
                    variant="filled"
                    value={movieInput}
                    onChange={(e) =>
                        setMovieInput(e.target.value)
                    }
                />

                <Button
                    variant="contained"
                    onClick={getRecommendations}
                >
                    AI Recommend
                </Button>
            </div>
            {loading && (
                <div className="ai-loader">
                    <CircularProgress />
                    <div className="ai-loader-text">
                        AI is finding movies for you...
                    </div>
                </div>)}
            <div className="trending">
                {content &&
                    content.map((c) => (
                        <Singlecontent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title}
                            date={c.release_date}
                            media_type="movie"
                            vote_average={c.vote_average}
                        />
                    ))}
            </div>
        </>
    );
};

export default AIRecommend;