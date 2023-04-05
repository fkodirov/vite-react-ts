import React, { useState, useEffect } from 'react';

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState(() => localStorage.getItem('searchQuery') || '');

  useEffect(() => {
    const saveToLocalStorage = () => {
      localStorage.setItem('searchQuery', query);
    };

    window.addEventListener('beforeunload', saveToLocalStorage);

    return () => {
      window.removeEventListener('beforeunload', saveToLocalStorage);
      localStorage.setItem('searchQuery', query);
    };
  }, [query]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Поиск..."
        className="search-bar"
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Поиск</button>
    </form>
  );
};

export default SearchBar;
