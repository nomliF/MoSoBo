import React, { useState } from "react";
import request from "superagent";

function Books() {
  const [searchField, setSearchField] = useState("");
  const [books, setBooks] = useState([]);

  const searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: searchField })
      .then((data) => {
        setBooks(data.body.items);
      });
  };

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="Books">
      <div className="BooksTop">
        <form onSubmit={searchBook}>
          <input type="text" onChange={handleSearch} />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="BooksBottom">
      
      
        {books.map((book) => (
          <div key={book.id}>
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;

