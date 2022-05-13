/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, NavLink, Route, Routes, Link } from "react-router-dom";

// pages
import Movie from "./pages/Movie";

//styles
import "./App.css";

const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=5f510d202e2b819ae0d290b38743e320&page=1";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?api_key=5f510d202e2b819ae0d290b38743e320&query=";

//
//
//
//
//
//

function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    //
    //
    //! общая функия которая получает коллбэк и юзается, универсальная
    const getMovies = (APITUS) => {
        fetch(APITUS)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    };

    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            getMovies(SEARCH_API + searchTerm);

            setSearchTerm("");
        }
    };

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <header className="header">
                <h1>Cool Search 😎</h1>
                <form onSubmit={handleOnSubmit}>
                    <input
                        className="search"
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleOnChange}
                    />
                    <button
                        type="submit"
                        onChange={handleOnChange}
                    >
                        Search
                    </button>
                </form>
            </header>

            <div className="movie-container">
                {movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        {...movie}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
