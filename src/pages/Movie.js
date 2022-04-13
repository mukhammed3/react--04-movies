import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

//
//
//
//

const setVoteClass = (vote) => {
    if (vote >= 7) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else {
        return "red";
    }
};

const Movie = ({ title, poster_path, overview, vote_average }) => (
    <>
        <div className="movie">
            <img
                src={
                    poster_path
                        ? IMG_API + poster_path
                        : "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                }
                alt={title}
            />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>
                    {/* //!класс по условию + доп класс tag */}
                    {vote_average}
                </span>
            </div>
            <div className="movie-over">
                <h2> Overview: </h2>
                <h4>{overview}</h4>
            </div>
        </div>
    </>
);

export default Movie;
