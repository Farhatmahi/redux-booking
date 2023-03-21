import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";

const initialValue = [];

const nextBookingId = (bookings) => {
  const maxId = bookings.reduce(
    (maxId, booking) => Math.max(maxId, booking.id),
    -1
  );
  return maxId + 1;
};

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_BOOKING: {
      if (state.length >= 3) {
        return state;
      } else {
        return [...state, { id: nextBookingId(state), ...action.payload }];
      }
    }
    case DELETE_BOOKING:
      return state.filter(booking => booking.id !== action.payload)
    default:
      return state;
  }
};

export default reducer;
