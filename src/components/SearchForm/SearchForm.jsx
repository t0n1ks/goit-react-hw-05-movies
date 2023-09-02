import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchForm.module/SearchForm.module.css';

function SearchForm() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/movies?query=${query}`);
    setQuery('');
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
