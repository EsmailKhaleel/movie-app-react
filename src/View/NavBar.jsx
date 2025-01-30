import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar = ({ onSearch }) => {

  const [activeTab, setActiveTab] = useState("TV Shows");


  const handleSearch = (e) => {
    onSearch(e.target.value); // Call the changeHandler from App
  };
  return (
    <div className="navbar">

      <div className="nav-tabs">
        <div
          className={`tab ${activeTab === "Movies" ? "active" : ""}`}
          onClick={() => setActiveTab("Movies")}
        >Movies
        </div>
        <div
          className={`tab ${activeTab === "TV Shows" ? "active" : ""}`}
          onClick={() => setActiveTab("TV Shows")}
        >TV Shows
        </div>
        <div
          className={`tab ${activeTab === "Anime" ? "active" : ""}`}
          onClick={() => setActiveTab("Anime")}
        >Anime
        </div>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          onChange={handleSearch}
        />
        <i className="fa fa-filter"></i>
        <i className="fa fa-search"></i>
      </div>
    </div>
  );
};

export default NavBar;
