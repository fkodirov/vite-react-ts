import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { Card } from '../components/Card';
import { Product } from '../types/types';

const MainPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);

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

  return (
    <div>
      <h1>Главная страница</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="cards">
        {/* console.log('searchResults:', searchResults); */}
        {searchResults.map((product: Product, index: number) => (
          <Card product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export { MainPage };
