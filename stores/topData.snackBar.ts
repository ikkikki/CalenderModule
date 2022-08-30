import { createSlice } from '@reduxjs/toolkit';
import { topDataSnackBar } from '../interfaces/stores';

const initialState: topDataSnackBar = {
  open: false,
};

const slice = createSlice({
  name: 'topSnackBar',
  initialState,
  reducers: {
    updateSnackBar: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateSnackBar } = slice.actions;

export default slice.reducer;
