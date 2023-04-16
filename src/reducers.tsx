import { combineReducers } from '@reduxjs/toolkit';
import { searchResultsReducer } from './searchResultsSlice';

export const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
});
