import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  it('should render the search bar with a submit button', () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />, { wrapper: MemoryRouter });

    expect(screen.getByPlaceholderText('Search products')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('should call the onSearch callback with the search query when the form is submitted', () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />, { wrapper: MemoryRouter });

    const searchInput = screen.getByPlaceholderText('Search products');
    const submitButton = screen.getByRole('button', { name: 'Search' });
    const searchQuery = 'Test search query';

    fireEvent.change(searchInput, { target: { value: searchQuery } });
    fireEvent.click(submitButton);

    expect(onSearch).toHaveBeenCalledWith(searchQuery);
  });

  it('should navigate to the search results page when the form is submitted', () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />, { wrapper: MemoryRouter });

    const searchInput = screen.getByPlaceholderText('Search products');
    const submitButton = screen.getByRole('button', { name: 'Search' });
    const searchQuery = 'Test search query';

    fireEvent.change(searchInput, { target: { value: searchQuery } });
    fireEvent.click(submitButton);

    expect(window.location.href).toContain(`/search?q=${searchQuery}`);
  });

  it('should update the search query state when the input value changes', () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />, { wrapper: MemoryRouter });

    const searchInput = screen.getByPlaceholderText('Search products');
    const searchQuery = 'Test search query';

    userEvent.type(searchInput, searchQuery);

    expect(searchInput).toHaveValue(searchQuery);
  });
});
