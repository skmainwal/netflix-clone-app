import React from "react";
import "./Nav.css";
import { IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      />
      <div className="nav__searchNav">
        <form>
          <div className="nav__search">
            <div className="nav__searchContainer">
              <input type="type" placeholder="Search a movie" />
              <SearchOutlined />
            </div>
          </div>
        </form>
        <div className="nav__button_div">
          <Link to="/home">
            <button className="nav_button">Home</button>
          </Link>
          <Link to="/movie">
            <button className="nav_button">Movie</button>
          </Link>
          <Link to="/tvshow">
            <button className="nav_button">Tv Shows</button>
          </Link>
        </div>
      </div>

      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
