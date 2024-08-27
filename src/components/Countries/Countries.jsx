import { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data.slice(0, 10)));
  }, []);

  return (
    <div className="flex flex-wrap">
      {countries.map((c) => (
        // <h1
        //   className="block text-bold text-4xl text-orange-400 m-4 font-extrabold"
        //   key={c.name.common}
        // >
        //   {c.name.common}
        // </h1>
        <Country key={c.name.common} country={c} />
      ))}
    </div>
  );
};

export default Countries;
