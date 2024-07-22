import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {

  return (
    <div>
      {/* Iterating over the list of movies and creating a link for each movie */}
      {movies.map((movie) => (
        <div key={movie.id}>
          {/* Using the Link component to create a clickable link to the movie detail page */}
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
