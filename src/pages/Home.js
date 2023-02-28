import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
//import pic from "../assets/logo2.svg"

/*import logo3 from "../assets/logo2.svg";
style={{ backgroundImage: `url(${logo3})` }} */
function Home() {
  return (

    <div className="home">

      <div className="headerContainer">
       {/* <img src={pic} alt="pic"/>*/}
        <h1> MoSoBo-Tracker</h1>
        <p> Movie Song & Book tracker</p>
        <Link to="/book">
          <button> Books </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;