import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../src/components/productSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    // добавьте другие редьюсеры здесь, если они будут использоваться
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
