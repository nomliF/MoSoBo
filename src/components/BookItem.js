//import Logo from "../assets/logo2.svg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";


function BookItem() {
    return (
        <div className="bookItem">
            <div className="leftSide">
                {/*<img src={Logo} alt={Logo}/>
*/}                <div className="hiddenLinks">
                    <Link to="/booklist"> Preview </Link>
                    <Link to="/about"> Summary </Link>
                    <Link to="/book"> Review </Link>
                    <Link to="/contact"> FavoriteD </Link>
                    <Link to="/contact"> FavoriteQ </Link>
                    <Link to="/contact"> FavoriteA </Link>

                </div>
            </div>
            <div className="rightSide">
                <Link to="/booklist"> Preview </Link>
                <Link to="/book"> Review </Link>
                <Link to="/about"> Summary </Link>
                <Link to="/contact"> FavoriteD </Link>
                <Link to="/contact"> FavoriteQ </Link>
                <Link to="/contact"> FavoriteA </Link>
                <Link to="/contact">Wish List</Link>
            </div>
        </div>
    );
}

export default BookItem;