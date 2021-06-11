import React from "react";
import { Link } from "react-router-dom";
import StyledCountries from "./styles";

function Countries({ countries, loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <StyledCountries>
      {countries.length < 1 ? (
        <h1>No countries found</h1>
      ) : (
        countries.map((el) => {
          return (
            <div className="results" key={el.id}>
              <div className="result">
                <Link to={`/countries/${el.id}`}>
                  <img src={el.flag} />
                </Link>
                <h1>
                  {el.name.split("(")[0]} ({el.continent})
                </h1>
              </div>
            </div>
          );
        })
      )}
    </StyledCountries>
  );
}

export default Countries;
