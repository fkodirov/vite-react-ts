import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store/store';
import { fetchProducts, searchProducts } from '../store/features/productSlice';
import SearchBar from '../components/SearchBar';
import { Card } from '../components/Card';

function MainPage() {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();

  const { data: searchResults = [], isLoading: isSearching } = useSelector(
    (state: RootState) => state.products.search
  );
  const { data: products = [], isLoading: isFetching } = useSelector(
    (state: RootState) => state.products.all
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearch = (query: string) => {
    dispatch(searchProducts(query));
  };
  return (
    <div>
      <h1>Главная страница</h1>
      <SearchBar onSearch={handleSearch} />
      {(isSearching || isFetching) && <div className="loading">Loading...</div>}
      {searchResults.length > 0 ? (
        <div>
          <h3>Результаты поиска</h3>
          <div className="cards">
            {searchResults.map((product, index) => (
              <Card key={index} product={product} />
            ))}
          </div>
        </div>
      ) : products.length > 0 ? (
        <div>
          <h3>Все товары</h3>
          <div className="cards">
            {products.map((product, index) => (
              <Card key={index} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <p>{isSearching || isFetching ? 'Loading...' : 'Нет результатов'}</p>
      )}
    </div>
  );
}

export { MainPage };
