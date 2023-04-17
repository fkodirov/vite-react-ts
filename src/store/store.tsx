import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/productSlice';
import searchReducer from './features/searchSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
