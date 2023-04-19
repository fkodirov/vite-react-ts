import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/productSlice';
import searchReducer from './features/searchSlice';
import formsReducer from './features/formsSlice';
export const store = configureStore({
  reducer: {
    products: productsReducer,
    search: searchReducer,
    forms: formsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
