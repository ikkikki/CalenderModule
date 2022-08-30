import { createSlice } from '@reduxjs/toolkit';
import { reservationState } from '../interfaces/slices';

const initialState: reservationState = {
  isReady: {
    reservationDate: false,
    reservationStart: false,
    reservationEnd: false,
    reservationMembers: false,
    reservationPlan: false,
  },
  newWindow: false,
  pickedTime: {},
  activeStep: 0,
  pickedDate: '',
  stepCompleted: {
    0: false,
    1: false,
    2: false,
    3: false,
  },
};

const slice = createSlice({
  name: 'reservationState',
  initialState,
  reducers: {
    updateReservationState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateReservationState } = slice.actions;
export default slice.reducer;
