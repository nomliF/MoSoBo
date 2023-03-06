import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/BookJourney.css"


const BookJourney = ({ bookId }) => {
  const [book, setBook] = useState({});
  const [journey, setJourney] = useState({});
  const [favourites, setFavourites] =useState({actors:"", dialogues:"", quotes:""})

  useEffect(() => {
    axios.get(`/api/books/${bookId}`).then((response) => {
      setBook(response.data);
    });
    axios.get(`/api/books/${bookId}/journey`).then((response) => {
      setJourney(response.data);
    });
  }, [bookId]);

  const handleSave = () => {
    axios.put(`/api/books/${bookId}/journey`, journey).then(() => {
      // Success message or redirection
    });
  };



  return (
    <div className="book-journey">
      <h1>{book.title}</h1>
      <img src={book.coverImage} alt={book.title} />
      <div className="journey-form">
        <h2>My Journey</h2>
        <label htmlFor="thoughts">Thoughts:</label>
        <textarea
          id="thoughts"
          value={journey.thoughts}
          onChange={(e) => setJourney({ ...journey, thoughts: e.target.value })}
        />
        <label htmlFor="summary">Summary:</label>
        <textarea
          id="summary"
          value={journey.summary}
          onChange={(e) => setJourney({ ...journey, summary: e.target.value })}
        />
        <label htmlFor="previews">Previews:</label>
        <textarea
          id="previews"
          value={journey.previews}
          onChange={(e) => setJourney({ ...journey, previews: e.target.value })}
        />
        <label htmlFor="reviews">Reviews:</label>
        <textarea
          id="reviews"
          value={journey.reviews}
          onChange={(e) => setJourney({ ...journey, reviews: e.target.value })}
        />
        <h2>Favourites</h2>
        <label htmlFor="actors">Actors:</label>
        <textarea
          id="actors"
          value={favourites.actors}
          onChange={(e) => setFavourites({ ...favourites, actors: e.target.value })}
        />
        <label htmlFor="dialogues">Dialogues:</label>
        <textarea
          id="dialogues"
          value={favourites.dialogues}
          onChange={(e) => setFavourites({ ...favourites, dialogues: e.target.value })}
        />
        <label htmlFor="quotes">Quotes:</label>
        <textarea
          id="quotes"
          value={favourites.quotes}
          onChange={(e) => setFavourites({ ...favourites, quotes: e.target.value })}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default BookJourney