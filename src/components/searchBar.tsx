import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../store/features/searchSlice';
import { RootState } from '../store/store';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setQuery(value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery);
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
