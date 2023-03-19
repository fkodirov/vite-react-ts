import React from 'react';
import SearchBar from '../components/searchBar';
import data from '../data.json';

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
            <div className="card" key={index}>
              <div className="card-img">
                <img src={`assets/cars/${car.image}`} width="220" />
              </div>
              <div className="product-title">{car.brand}</div>
              <div className="product-info">
                <div className="info category">
                  <span>Модель</span>
                  <span>{car.model}</span>
                </div>
                <div className="info brand">
                  <span>Год</span>
                  <span>{car.year}</span>
                </div>
                <div className="info discount">
                  <span>Цвет</span>
                  <span>{car.color}</span>
                </div>
                <div className="info price">
                  <span>Цена</span>
                  <span>{car.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export { MainPage };
