import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      // target is to get random one movie from a fetchNetflixOriginals array
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    }
    getData();
  }, []);

  //   console.log(movie);

  // truncate function truncate char after 150 char
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
             "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
             )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* 2 button */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        {/* description */}

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
