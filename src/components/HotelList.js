import React, { useEffect, useState } from 'react';
import { getHotels } from '../api';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const data = await getHotels();
      setHotels(data);
    };
    fetchHotels();
  }, []);

  return (
    <div>
      <h2>Available Hotels</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            {hotel.name} - {hotel.city} - ${hotel.price_per_night}/night
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
