import React from 'react';
import './Country.css';

const Country = (props) => {
  const { flags, name, population, capital, area } = props.country;
  console.log(props);
  return (
    <div className="container">
      <img width="150px" height="100px" src={flags.png} alt="" />
      <h4>Name : {name.common}</h4>
      <h5>Capital : {capital}</h5>
      <p>Population : {population}</p>
      <p>
        <small>Area : {area}</small>
      </p>
    </div>
  );
};

export default Country;
