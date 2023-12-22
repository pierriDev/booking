import { combineReducers } from '@reduxjs/toolkit';
import { bookingSlice } from '@/redux/slices/booking/bookingSlice';

const rootReducer = combineReducers({
  booking: bookingSlice.reducer,
});

export default rootReducer;
