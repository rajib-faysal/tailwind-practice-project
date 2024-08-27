import { useEffect, useState } from 'react';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      {countries.map((c) => (
        <h1
          className="block text-bold text-4xl text-orange-400 m-4 font-extrabold"
          key={c.name.common}
        >
          {c.name.common}
        </h1>
      ))}
    </div>
  );
};

export default Countries;
