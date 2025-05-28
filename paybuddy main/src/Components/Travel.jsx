import { useState } from 'react';
import { CalendarDaysIcon, UserIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function TravelBooking() {
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [travelClass, setTravelClass] = useState('Economy');
  const [price, setPrice] = useState(null);

  const destinations = [
    { city: 'New York', price: 400 },
    { city: 'London', price: 600 },
    { city: 'Paris', price: 550 },
    { city: 'Tokyo', price: 750 },
    { city: 'Sydney', price: 800 },
  ];

  const calculatePrice = () => {
    if (!destination || !departureDate || !returnDate) {
      alert('Please fill in all fields');
      return;
    }

    const destPrice = destinations.find((d) => d.city === destination)?.price || 0;
    let total = destPrice * passengers;

    if (travelClass === 'Business') total *= 1.5;
    if (travelClass === 'First') total *= 2;

    setPrice(total);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!price) {
      alert('Please calculate price before booking.');
      return;
    }

    alert(`Booking confirmed to ${destination} for $${price}`);
    // Reset form
    setDestination('');
    setDepartureDate('');
    setReturnDate('');
    setPassengers(1);
    setTravelClass('Economy');
    setPrice(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Travel Booking</h1>

      <form onSubmit={handleBooking} className="space-y-6 rounded-xl bg-white p-6 shadow-md">
        {/* Destination */}
        <div>
          <label className="block font-medium text-gray-700 mb-1 flex items-center gap-1">
            <GlobeAltIcon className="h-5 w-5" />
            Destination
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full rounded border border-gray-300 p-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            required
          >
            <option value="">Select Destination</option>
            {destinations.map((d) => (
              <option key={d.city} value={d.city}>
                {d.city}
              </option>
            ))}
          </select>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1 flex items-center gap-1">
              <CalendarDaysIcon className="h-5 w-5" />
              Departure Date
            </label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full rounded border border-gray-300 p-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1 flex items-center gap-1">
              <CalendarDaysIcon className="h-5 w-5" />
              Return Date
            </label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full rounded border border-gray-300 p-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        {/* Passengers and Class */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1 flex items-center gap-1">
              <UserIcon className="h-5 w-5" />
              Passengers
            </label>
            <input
              type="number"
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              className="w-full rounded border border-gray-300 p-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              min={1}
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Class</label>
            <select
              value={travelClass}
              onChange={(e) => setTravelClass(e.target.value)}
              className="w-full rounded border border-gray-300 p-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            >
              <option>Economy</option>
              <option>Business</option>
              <option>First</option>
            </select>
          </div>
        </div>

        {/* Price Estimate */}
        {price !== null && (
          <div className="text-lg font-semibold text-gray-800">
            Estimated Price: <span className="text-indigo-600">${price}</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={calculatePrice}
            className="rounded bg-yellow-500 px-4 py-2 font-semibold text-white hover:bg-yellow-600"
          >
            Calculate Price
          </button>
          <button
            type="submit"
            className="rounded bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
}
