import React from "react";
import { Link } from "react-router-dom";

function Countries({ countries, loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {countries.length < 1 ? (
        <h1>No countries found</h1>
      ) : (
        countries.map((el) => {
          return (
            <div key={el.id}>
              <h1>
                {el.name.split("(")[0]} ({el.id})
              </h1>
              <h3>{el.continent}</h3>
              <Link to={`/countries/${el.id}`}>
                <img src={el.flag} width="150" height="90" />
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Countries;
