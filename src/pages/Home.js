import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

function Home() {
  // Using the useState hook to manage the movies state
  const [movies, setMovies] = useState([]);

  // Function to handle the search
  const handleSearch = (query) => {
    // Fetching movie data from the API based on the search query
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=2ba9dccfed4646a25d9615956ffe2137&query=${query}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <div>
      {/* Displaying the app title */}
      <h1>Movie Search App</h1>
      {/* Rendering the SearchBar component and passing the handleSearch function as a prop */}
      <SearchBar onSearch={handleSearch} />
      {/* Rendering the MovieList component and passing the movies state as a prop */}
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
