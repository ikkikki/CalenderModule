import { createSlice } from '@reduxjs/toolkit';
import { reservation } from '../interfaces/entities';

const initialState: reservation = {
  reservationMembers: {
    adults: 0,
    children: 0,
  },
  reservationPlans: [],
  reservationDate: '',
  reservationStart: '',
  reservationEnd: '',
};

const slice = createSlice({
  name: 'newReservation',
  initialState,
  reducers: {
    updateNewReservation: (state, action) => {
      return { ...state, ...action.payload };
    },
    resertNewReservation: () => {
      return initialState;
    },
  },
});

export const { updateNewReservation } = slice.actions;

export default slice.reducer;
