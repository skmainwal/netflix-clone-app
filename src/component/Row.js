import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios"; // we are importing instance as a axios from axios.js file

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  // for geting a list of movies , initially empty movies array
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const request = await axios.get(fetchUrl); // same instance.get("/foo-bar"); from axios.js file
      // https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213

      //   console.log(request);
      setMovies(request.data.results);
      return request;
    }

    getData();
    // useEffect dependent on fetchUrl
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>
      {/* title */}
      <div className="row__posters">
        {/* row posters */}

        {movies.map((movie) => {
          // movie.poster_path="/ta5oblpMlEcIPIS2YGcq9XEkWK2.jpg" ,not a full url have to add base url
          return (
            <img
              key={movie.id}
              className="row__poster"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
