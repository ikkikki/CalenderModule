import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import topState from './topState';
import topModal from './topData.modal';
import topSnackBar from './topData.snackBar';
import siteState from './siteState';
import reservationState from './reservationState';
import sitePlans from './sitePlans';
import newReservation from './newReservation';

const reducer = combineReducers({
  topState,
  topModal,
  topSnackBar,
  siteState,
  reservationState,
  sitePlans,
  newReservation,
});

const store = configureStore({ reducer });
export default store;
