import { createSlice } from '@reduxjs/toolkit';
import { site } from '../../interfaces/entities';

const initialState: site & {
  site: 'ishikawa' | 'suminoe';
} = {
  site: 'ishikawa',
  siteHoliday: {
    weekday: {
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: true,
      Sun: true,
    },
    holiday: true,
    start: '20220401',
    end: '20220531',
    otherHolidays: [],
    otherWorkdays: ['20220502'],
  },
};

const slice = createSlice({
  name: 'siteState',
  initialState,
  reducers: {
    updateSiteState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateSiteState } = slice.actions;

export default slice.reducer;
