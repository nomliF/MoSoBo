import React from "react";
import { BookList } from "../helpers/BookList";
import BookItem from "../components/BookItem";
import "../styles/Book.css";

function Book() {
  return (
    <div className="book">
      <h1 className="bookTitle">Books</h1>
      <div className="bookList">
        {BookList.map((bookItem, key) => {
          return (
            <BookItem
              key={key}
              image={bookItem.image}
              name={bookItem.name}          
            />
          );
        })}
      </div>
    </div>
  );
}

export default Book;

