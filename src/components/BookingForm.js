import React, { useState } from 'react';
import { createBooking } from '../api';

const BookingForm = () => {
  const [form, setForm] = useState({
    hotel_id: '',
    guest_name: '',
    checkin: '',
    checkout: '',
    rooms_booked: 1
  });

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createBooking(form);
      alert("Booking successful! ID: " + result.id);
    } catch (error) {
      alert("Booking failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Hotel</h2>
      <input type="number" name="hotel_id" placeholder="Hotel ID" onChange={handleChange} required />
      <input type="text" name="guest_name" placeholder="Your Name" onChange={handleChange} required />
      <input type="date" name="checkin" onChange={handleChange} required />
      <input type="date" name="checkout" onChange={handleChange} required />
      <input type="number" name="rooms_booked" min="1" onChange={handleChange} required />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;

