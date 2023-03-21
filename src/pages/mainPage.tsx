import React from 'react';
import SearchBar from '../components/searchBar';
import data from '../data.json';
import Card from '../components/card';

interface State {
  searchResults: typeof data; // Указываем тип для searchResults
}

class MainPage extends React.Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchResults: data,
    };
  }

  handleSearch = (query: string) => {
    // Фильтруем данные в соответствии с поисковым запросом
    const filteredData = data.filter((car) => {
      const searchValue = `${car.brand} ${car.model} ${car.year} ${car.color}`.toLowerCase();
      return searchValue.includes(query.toLowerCase());
    });

    // Обновляем результаты поиска в состоянии компонента
    this.setState({
      searchResults: filteredData,
    });
  };

  render() {
    return (
      <div>
        <h1>Главная страница</h1>
        <SearchBar onSearch={this.handleSearch} />
        <div className="cards">
          {this.state.searchResults.map((car, index) => (
            <Card car={car} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export { MainPage };
