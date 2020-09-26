import axios from "axios";

/** base url to make requests to the the movie database */
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// when we have to send a lot request use this method
// instance.get('/foo-bar');

//api.themoviedb.org/3/foo-bar

export default instance;
