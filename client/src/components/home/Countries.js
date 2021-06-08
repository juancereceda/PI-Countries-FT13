import React from "react";
import { capitalize } from "./functions";

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
                {capitalize(el.name)} ({el.id})
              </h1>
              <h3>{el.continent}</h3>
              <img src={el.flag} width="150" height="90" />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Countries;
