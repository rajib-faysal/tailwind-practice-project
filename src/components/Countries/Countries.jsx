import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Country from '../Country/Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [reload, setReload] = useState(false);
  const [freeBtn, setFreeBtn] = useState(false);
  const [notFreeBtn, setNotFreeBtn] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, [reload]);

  const handleFree = () => {
    setNotFreeBtn(!notFreeBtn);
    const filteredCountry = countries.filter((c) => c.independent);
    setCountries(() => filteredCountry);
  };
  const handleNotFree = () => {
    setNotFreeBtn(!freeBtn);
    const filteredCountry = countries.filter((c) => !c.independent);
    setCountries(() => filteredCountry);
  };

  const handleReload = () => {
    setNotFreeBtn(false);
    setFreeBtn(false);
    setReload(() => !reload);
  };

  return (
    <div className="m-10">
      <button
        disabled={notFreeBtn}
        className="btn btn-primary text-3xl ml-3"
        onClick={handleFree}
      >
        Free
      </button>
      <button
        disabled={freeBtn}
        className="btn btn-primary text-3xl ml-3"
        onClick={handleNotFree}
      >
        Not Free
      </button>
      <button className="btn btn-primary text-3xl ml-3" onClick={handleReload}>
        Reload
      </button>
      <div className="flex flex-wrap">
        <button></button>
        {countries.map((c) => (
          // <h1
          //   className="block text-bold text-4xl text-orange-400 m-4 font-extrabold"
          //   key={c.name.common}
          // >
          //   {c.name.common}
          // </h1>
          <Country key={uuid()} country={c} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
