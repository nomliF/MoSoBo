import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/MyJourney.css"

const BookJourneyList = () => {
  const [journeys, setJourneys] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('/api/journeys').then((response) => {
      setJourneys(response.data);
    });
    axios.get('/api/favorites').then((response) => {
      setFavorites(response.data);
    });
  }, []);

  return (
    <div className="book-journey-list">
      <h1>My Book Journeys</h1>
      <div className="journeys">
        {journeys.map((journey) => (
          <div key={journey.id} className="journey">
            <h2>{journey.book.title}</h2>
            <p><strong>Thoughts:</strong> {journey.thoughts}</p>
            <p><strong>Summary:</strong> {journey.summary}</p>
            <p><strong>Previews:</strong> {journey.previews}</p>
            <p><strong>Reviews:</strong> {journey.reviews}</p>
          </div>
        ))}
      </div>
      <h1>My Favorites</h1>
      <div className="favorites">
        {favorites.map((favorite) => (
          <div key={favorite.id} className="favorite">
            <h2>{favorite.book.title}</h2>
            <p><strong>Actor:</strong> {favorite.actor}</p>
            <p><strong>Dialogue:</strong> {favorite.dialogue}</p>
            <p><strong>Quote:</strong> {favorite.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookJourneyList;
