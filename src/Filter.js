import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div className="filter">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Filter by title"
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="">Filter by rating</option>
        <option value="5">5+</option>
        <option value="7">7+</option>
        <option value="9">9+</option>
      </select>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;