import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { Card } from '../components/Card';
import { Product } from '../types/types';

const MainPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') ?? '';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setSearchResults(data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await response.json();
      setSearchResults(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

  return (
    <div>
      <h1>Главная страница</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="cards">
        {searchResults.map((product: Product, index: number) => (
          <Card product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export { MainPage };
