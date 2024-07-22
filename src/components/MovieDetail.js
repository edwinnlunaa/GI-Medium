import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'; // Import useParams hook to access URL parameters

function MovieDetail() {
  const [movie, setMovie] = useState(null); // State to hold the movie data
  const { id } = useParams(); // Get the movie ID from the URL parameters

  useEffect(() => {
    // Only fetch data if the ID is available
    if (id) {
      // Fetch movie details from the API 
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2ba9dccfed4646a25d9615956ffe2137`)
        .then((response) => response.json()) 
        .then((data) => setMovie(data)) // Set the movie data in state
        .catch((error) => console.error('Error fetching movie details:', error)); 
    }
  }, [id]); // Re-run the effect if the ID changes

  if (!movie) return <div>Loading...</div>; // Display a loading message while fetching data

  return (
    <div>
      <h1>{movie.title}</h1> {/* Display the movie title */}
      <p>{movie.overview}</p> {/* Display the movie overview */}
      <p>Release Date: {movie.release_date}</p> {/* Display the release date */}
      <p>Rating: {movie.vote_average}</p> {/* Display the movie rating */}
    </div>
  );
}

export default MovieDetail; 