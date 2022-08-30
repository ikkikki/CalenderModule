import { createSlice } from '@reduxjs/toolkit';
import { topState } from '../interfaces/slices';

const initialState: topState = {
  login: {
    logged: false,
    userName: undefined,
    userId: undefined,
    userTel: undefined,
    token: undefined,
  },
  setToken: 'f',
};

const slice = createSlice({
  name: 'topState',
  initialState,
  reducers: {
    updateTopState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateTopState } = slice.actions;
export default slice.reducer;
