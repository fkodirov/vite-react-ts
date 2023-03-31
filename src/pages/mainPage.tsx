import React from 'react';
import SearchBar from '../components/SearchBar';
import data from '../data.json';
import Card from '../components/Card';

interface State {
  searchResults: typeof data;
}

class MainPage extends React.Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchResults: data,
    };
  }

  handleSearch = (query: string) => {
    const filteredData = data.filter((car) => {
      const searchValue = `${car.brand} ${car.model} ${car.year} ${car.color}`.toLowerCase();
      return searchValue.includes(query.toLowerCase());
    });

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
