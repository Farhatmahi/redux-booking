import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";

export const addBookingHandler = (bookingData) => {
  return {
    type: ADD_BOOKING,
    payload: bookingData,
  };
};

export const deleteBookingHandler = (bookingId) => {
  return {
    type: DELETE_BOOKING,
    payload: bookingId,
  };
};
