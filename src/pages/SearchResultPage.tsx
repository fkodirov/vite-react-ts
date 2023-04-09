import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { Card } from '../components/Card';

function SearchResultPage() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') ?? '';

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('q');
    if (searchQuery) {
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.products);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [location.search]);

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await response.json();
      console.log('API response:', data);
      setSearchResults(data.products);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log('API response:', data);
        setSearchResults(data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

  return (
    <div>
      <h1>Search Page</h1>
      <SearchBar onSearch={handleSearch} />
      <h3>Search Results</h3>
      {searchResults.length > 0 ? (
        <div className="cards">
          {searchResults.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export { SearchResultPage };
