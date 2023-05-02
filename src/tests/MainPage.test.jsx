import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MainPage } from './MainPage';

const mockStore = configureStore([]);

describe('MainPage', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      products: {
        all: {
          data: [
            { id: 1, name: 'Product 1', price: 10 },
            { id: 2, name: 'Product 2', price: 20 },
          ],
          isLoading: false,
          error: null,
        },
        search: {
          data: [],
          isLoading: false,
          error: null,
        },
      },
    });
  });

  it('renders the component', () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    expect(getByText('Главная страница')).toBeInTheDocument();
    expect(getByPlaceholderText('Поиск товаров')).toBeInTheDocument();
    expect(getByText('Все товары')).toBeInTheDocument();
    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('Product 2')).toBeInTheDocument();
  });

  it('searches for products', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    fireEvent.change(getByPlaceholderText('Поиск товаров'), {
      target: { value: 'Product 1' },
    });

    expect(getByText('Результаты поиска')).toBeInTheDocument();
    expect(getByText('Product 1')).toBeInTheDocument();
    expect(() => getByText('Product 2')).toThrow();
  });
});
