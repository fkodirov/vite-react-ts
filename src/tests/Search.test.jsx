import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchBar from '../components/SearchBar';
import { setQuery } from '../store/features/searchSlice';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

describe('SearchBar component', () => {
  let store;
  let onSearchMock;

  beforeEach(() => {
    store = mockStore({
      search: {
        query: '',
      },
    });
    onSearchMock = jest.fn();
  });

  it('renders input and button', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <SearchBar onSearch={onSearchMock} />
      </Provider>
    );

    const inputElement = getByPlaceholderText('Search products');
    const buttonElement = getByText('Search');

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('dispatches setQuery action on input change', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchBar onSearch={onSearchMock} />
      </Provider>
    );

    const inputElement = getByPlaceholderText('Search products');

    fireEvent.change(inputElement, { target: { value: 'test' } });

    const expectedAction = { type: setQuery.type, payload: 'test' };
    expect(store.getActions()).toEqual([expectedAction]);
  });

  // it('calls onSearch with correct query on form submit', () => {
  //   const { getByPlaceholderText, getByText } = render(
  //     <Provider store={store}>
  //       <SearchBar onSearch={onSearchMock} />
  //     </Provider>
  //   );
  //   const inputElement = getByPlaceholderText('Search products');
  //   const buttonElement = getByText('Search');
  //   fireEvent.change(inputElement, { target: { value: 'test' } });
  //   fireEvent.click(buttonElement);
  //   expect(onSearchMock).toHaveBeenCalledTimes(1);
  //   expect(onSearchMock).toHaveBeenCalledWith('test');
  // });
});
