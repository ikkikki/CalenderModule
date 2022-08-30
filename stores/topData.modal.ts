import { createSlice } from '@reduxjs/toolkit';
import { topDataModal } from '../interfaces/slices';

const initialState: topDataModal = {
  open: false,
  dom: null,
};

const slice = createSlice({
  name: 'topModal',
  initialState,
  reducers: {
    updateModal: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateModal } = slice.actions;

export default slice.reducer;
