import React from 'react';
import MovieDetail from '../components/MovieDetail';

function Movie({ match }) {

  return (
    <div>
      {/* Rendering the MovieDetail component and passing the match prop */}
      <MovieDetail match={match} />
    </div>
  );
}

export default Movie;
