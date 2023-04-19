import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FormsState {
  cardData: FormData[];
}

const initialState: FormsState = {
  cardData: [],
};

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addCardData(state, action: PayloadAction<FormData>) {
      state.cardData.push(action.payload);
    },
  },
});

export const { addCardData } = formsSlice.actions;

export const selectCardData = (state: RootState) => state.forms.cardData;

export default formsSlice.reducer;
