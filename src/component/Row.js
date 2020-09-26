import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios"; // we are importing instance as a axios from axios.js file

function Row({ title, fetchUrl }) {
  // for geting a list of movies , initially empty movies array
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const request = await axios.get(fetchUrl); // same instance.get("/foo-bar"); from axios.js file
      // https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213

      // console.log(request);
      setMovies(request.data.result);
      return request;
    }

    getData();
    // useEffect dependent on fetchUrl
  }, [fetchUrl]);

  return (
    <div>
      <h1>{title}</h1>
      {/* title */}

      {/* container -> poster */}
    </div>
  );
}

export default Row;
