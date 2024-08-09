import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const initialMovies = [
      { title: 'Movie 1', description: 'Desc 1', posterURL: 'https://example.com/poster1.jpg', rating: 8 },
      { title: 'Movie 2', description: 'Desc 2', posterURL: 'https://example.com/poster2.jpg', rating: 7 },
      { title: 'Movie 3', description: 'Desc 3', posterURL: 'https://example.com/poster3.jpg', rating: 9 },
    ];
    setMovies(initialMovies);
    setFilteredMovies(initialMovies);
  }, []);

  const handleFilter = (filter) => {
    const filtered = movies.filter((movie) => {
      if (filter.title) {
        return movie.title.toLowerCase().includes(filter.title.toLowerCase());
      }
      if (filter.rating) {
        return movie.rating >= filter.rating;
      }
      return true;
    });
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...filteredMovies, newMovie]);
  };

  return (
    <div>
      <h1>Movie List</h1>
      <Filter onFilter={handleFilter} />
      <button onClick={() => handleAddMovie({ title: 'New Movie', description: 'New Desc', posterURL: 'https://example.com/new-poster.jpg', rating: 8 })}>
        Add New Movie
      </button>
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;