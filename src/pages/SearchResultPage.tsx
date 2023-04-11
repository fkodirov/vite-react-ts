import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { Card } from '../components/Card';

function SearchResultPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // add new state variable
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') ?? '';

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('q');
    if (searchQuery) {
      setIsLoading(true); // set isLoading to true before fetching data
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.products);
          setIsLoading(false); // set isLoading to false after data is fetched
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [location.search]);

  const handleSearch = async (query: string) => {
    setIsLoading(true); // set isLoading to true before fetching data
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await response.json();
      setSearchResults(data.products);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false); // set isLoading to false after data is fetched
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true); // set isLoading to true before fetching data
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setSearchResults(data.products);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false); // set isLoading to false after data is fetched
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
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : searchResults.length > 0 ? (
        <div>
          <h3>Search Results</h3>
          <div className="cards">
            {searchResults.map((product, index) => (
              <Card key={index} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export { SearchResultPage };
