import React from 'react';
import SearchBar from '../components/SearchBar';
import data from '../data.json';
import Card from '../components/Card';
import { Car } from '../types/types';

const MainPage: React.FC = () => {
  const [searchResults, setSearchResults] = React.useState<Car[]>(data);

  const handleSearch = (query: string) => {
    const filteredData = data.filter((car: Car) => {
      const searchValue = `${car.brand} ${car.model} ${car.year} ${car.color}`.toLowerCase();
      return searchValue.includes(query.toLowerCase());
    });

    setSearchResults(filteredData);
  };

  return (
    <div>
      <h1>Главная страница</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="cards">
        {searchResults.map((car: Car, index: number) => (
          <Card car={car} key={index} />
        ))}
      </div>
    </div>
  );
};

export { MainPage };
