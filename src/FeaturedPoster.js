import React, { useEffect, useState, useContext } from "react";
import "./FeaturedPoster.css";
import axios from "axios";
import endpoints from "./requests";
import Navbar from "./Navbar";

function FeaturedPoster() {
  const [banner, setBanner] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(endpoints.popular);
      setBanner(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(banner);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
      }}
      className="featured-poster"
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {banner?.title || banner?.name || banner?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h6 className="banner_description">{banner?.overview}</h6>
      </div>
    </div>
  );
}

export default FeaturedPoster;
