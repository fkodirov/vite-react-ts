import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from '../../types/types';

interface ProductState {
  products: Product[];
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
  search: {
    data: Product[];
    isLoading: boolean;
    error: string | null;
  };
  all: {
    data: Product[];
    isLoading: boolean;
    error: string | null;
  };
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
  search: {
    data: [],
    isLoading: false,
    error: null,
  },
  all: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data.products;
});

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.all.isLoading = false;
        state.all.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.all.isLoading = false;
        state.all.error = action.error.message ?? 'Something went wrong';
      })
      .addCase(searchProducts.pending, (state) => {
        state.search.isLoading = true;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.search.isLoading = false;
        state.search.data = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.search.isLoading = false;
        state.search.error = action.error.message ?? 'Something went wrong';
      });
  },
});
export const searchProducts = createAsyncThunk('products/searchProducts', async (query: string) => {
  const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const data = await response.json();
  return data.products;
});

export const selectProducts = (state: RootState) => state.products.products;
export const selectProductStatus = (state: RootState) => state.products.status;
export const selectProductError = (state: RootState) => state.products.error;

export default productSlice.reducer;
