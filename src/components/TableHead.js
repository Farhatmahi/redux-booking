import React from "react";
import { useSelector } from "react-redux";
import BookingRow from "./BookingRow";

const TableHead = () => {
  const bookingData = useSelector((state) => state);
  console.log(bookingData)
  return (
    <div class="table-container">
      {bookingData.length > 0 && <table class="booking-table">
        <thead class="bg-gray-100/50">
          <tr class="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th class="text-center">Journey Date</th>
            <th class="text-center">Guests</th>
            <th class="text-center">Class</th>
            <th class="text-center">Delete</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-300/20" id="lws-previewBooked">
          {/* <!-- Row 1 --> */}
          {/* <BookingRow />  */}
          {bookingData.map((data) => (
            <BookingRow key={data.id} data={data} bookingData={bookingData} />
          ))}
        </tbody>
      </table>}
    </div>
  );
};

export default TableHead;
