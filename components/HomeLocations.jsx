import React from 'react';
const HomeLocations = () => {
  const locations = ['Caex Bacău', 'Romexpo', 'Sala Polivalentă București', 'Sala Palatului', 'Sala Polivalentă Iași', 'Teatru de Vară Bacău', 'Sala Polivalentă Iași', 'Sala Polivalentă Cluj', 'Casino Sinaia', 'Casa Presei Libere', 'Palatul Parlamentului', 'Showroom APAN Iași', 'Casa de Cultură a Studenților Iași', 'Casa de Cultură Bacău', 'Muzeul Țăranului Român Cluj și Timișoara', 'Steel Yard London'];
  const venues = ['Dor de Munte', 'Adabacum', 'Young Island Festival', 'Sunwaves', 'Mioritmic', 'Bipolar', 'Loseit', 'Zebra', 'Maraton', 'TakeNotes', 'Elrow București', 'Sympozium', 'ZNS', 'FWD', 'West City', 'Stump London', 'West Fest', 'Hive'];
  const cities = ['Bacău', 'Iași', 'Galați', 'Cluj', 'București', 'Sinaia', 'Oradea', 'Timișoara', 'Constanța', 'Suceava', 'Sibiu', 'Londra']
  return ( 
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:text-lg md:text-2xl">
        <div className="mx-auto mt-2 max-w-lg sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 text-justify">
          {locations.map((location, index) => (
            <span key={index}>
              {location + (index === locations.length - 1 ? "" : " • ")}
            </span>
          ))}
        </div>
        <div className="mx-auto mt-2 max-w-lg sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 text-justify">
          {venues.map((venue, index) => (
            <span key={index}>
              {venue + (index === venues.length - 1 ? "" : " • ")}
            </span>
          ))}
        </div>
        <div className="mx-auto mt-2 max-w-lg sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 text-justify">
          {cities.map((city, index) => (
            <span key={index}>
              {city + (index === cities.length - 1 ? "" : " • ")}
            </span>
          ))}
        </div>
      </div>
    </div>
   );
}
 
export default HomeLocations;