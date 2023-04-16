import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
      setSearchQuery(savedQuery);
    }
  }, []);

  useEffect(() => {
    if (searchQuery) {
      localStorage.setItem('searchQuery', searchQuery);
    }
  }, [searchQuery]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery);
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search products"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
