import React from 'react';
import HotelList from './components/HotelList';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Hotel Booking App</h1>
      <HotelList />
      <BookingForm />
    </div>
  );
}

export default App;
