import React from "react";
import "../styles/Books.css";
import { Link } from "react-router-dom";


function Books() {
  return (
    <div className="book">
      <Link to="/bookjourney">
        <button> Add Book Journey </button>
      </Link>
      <Link to="/myjourney">
        <button> Book Journey </button>
      </Link>
    </div>
  );
}

export default Books;

