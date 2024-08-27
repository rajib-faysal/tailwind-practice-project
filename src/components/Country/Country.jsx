const Country = ({ country }) => {
  const { name, independent, flags, population, area } = country;
  return (
    <div className="border border-orange-400 m-5 p-5 rounded-md text-center w-96  flex flex-col items-center justify-center gap-3">
      <h1 className="text-bold text-3xl text-orange-400">{name?.common}</h1>
      <p className="text-xl font-bold">
        {independent ? (
          <span className="text-green-600">Free! 😊</span>
        ) : (
          <span className="text-red-600">We are not free! 😭</span>
        )}
      </p>
      <img className="w-96 h-full" src={flags?.png} alt="" />
      <p className="text-2xl font-medium ">Population: {population}</p>
      <p className="text-2xl font-medium ">
        Area: {area} Kilometers<sup>2</sup>
      </p>
    </div>
  );
};

export default Country;
