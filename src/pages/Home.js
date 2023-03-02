import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (

    <div className="home">

      <div className="headerContainer">
        <h1> MoSoBo-Tracker</h1>
        <Link to="/book">
          <button> Books </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;