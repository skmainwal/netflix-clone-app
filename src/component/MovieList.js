import React, { useState, useEffect } from "react";

import "./MovieList.css";

import axios from "../axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function MovieList() {
  const fetchUrl =
    "/search/movie?api_key=21c89ff8841fc7ed0c7a346c8e305ddd&query=spiderman";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(fetchUrl);
      console.log(response);
      setMovies(response.data.results);
      return response;
    }
    getData();
  }, []);

  console.log(movies);
  return (
    <div className="movieList">
      <div className="movieList__posters">
        {movies.map((movie) => {
          return (
            <img
              className="movieList__poster"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
