import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    // <div className="home" style={{ backgroundImage: `url(${})` }}>
    <div className="home">
      <div className="headerContainer">
        <h1> SWECHA </h1>
        <p> Technology for Society </p>
        <Link to="/about">
          <button> Know More </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
