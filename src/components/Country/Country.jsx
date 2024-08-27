const Country = ({ country }) => {
  return (
    <div className="border border-orange-400 m-5 p-5 rounded-md text-center w-96 h-48 flex flex-col items-center justify-center gap-3">
      <h1 className="text-bold text-3xl text-orange-400">
        {country.name?.common}
      </h1>
      <p className="text-xl font-bold">
        {country.independent ? 'Free! 😊' : 'We are not free! 😭'}
      </p>
    </div>
  );
};

export default Country;
