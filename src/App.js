import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home'; 
import MovieDetail from './components/MovieDetail'; 
import './App.css'; 

function App() {
  return (
    <Router> 
      <div className="App"> 
        <Routes> 
          <Route path="/" element={<Home />} /> {/* Route for the home page */}
          <Route path="/movie/:id" element={<MovieDetail />} /> {/* Route for movie details page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
