import React from "react";
import { BookList } from "../helpers/BookList";
import BookItem from "../components/BookItem";
import "../styles/Book.css";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";

function Book() {
  return (
    <div className="book">
      <h1 className="bookTitle">Books</h1>
      <Searchbar />
      <div className="bookList">
        {BookList.map((bookItem, key) => {
          return (
            <BookItem key={key} image={bookItem.image} name={bookItem.name} />
          );
        })}
        <Link to="/bookitem">
          <button> BookItem </button>
        </Link>
      </div>
    </div>
  );
}

export default Book;
