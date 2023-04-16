import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';
import { fetchProducts, searchProducts } from '../../src/components/productSlice';
import SearchBar from '../components/SearchBar';
import { Card } from '../components/Card';

function SearchResultPage() {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') ?? '';

  const { data: searchResults = [], isLoading: isSearching } = useSelector(
    (state: RootState) => state.products.search
  );
  const { data: products = [], isLoading: isFetching } = useSelector(
    (state: RootState) => state.products.all
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (query) {
      dispatch(searchProducts(query));
    }
  }, [dispatch, query]);

  const handleSearch = (query: string) => {
    dispatch(searchProducts(query));
  };

  return (
    <div>
      <h1>Search Page</h1>
      <SearchBar onSearch={handleSearch} />
      {(isSearching || isFetching) && <div className="loading">Loading...</div>}
      {searchResults.length > 0 ? (
        <div>
          <h3>Search Results</h3>
          <div className="cards">
            {searchResults.map((product, index) => (
              <Card key={index} product={product} />
            ))}
          </div>
        </div>
      ) : products.length > 0 ? (
        <div>
          <h3>All Products</h3>
          <div className="cards">
            {products.map((product, index) => (
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
