/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import SearchBar from './searchBar';

// interface SearchResult {
//   // Определите структуру ваших результатов поиска
// }

class SearchResultComponent extends React.Component {
  state = {
    // searchResults: [] as SearchResult[],
  };

  handleSearch = (query: string) => {
    // Сделайте вызов API для получения результатов поиска на основе запроса
    // Обновите состояние searchResults с ответом
  };

  render() {
    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        {/* Отобразите результаты поиска */}
      </div>
    );
  }
}

export default SearchResultComponent;
