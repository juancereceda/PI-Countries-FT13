import React, { useEffect } from "react";
import { getCountryDetail } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Activity from "./Activity";
import { formatArea, formatPopulation } from "./functions";
import Loading from "../loading/Loading";

function Country(props) {
  var id = props.match.params.id;
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countryDetail);

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, []);

  return (
    <div>
      {country.id !== id ? (
        <Loading />
      ) : (
        <div>
          <h1>
            {country.name && country.name.split("(")[0]} ({country.id})
          </h1>
          {country.name !== country.nativename ? (
            <h2>Native name: {country.nativename}</h2>
          ) : null}
          <h2>Capital: {country.capital}</h2>
          <h4>
            {country.continent}{" "}
            {country.subregion ? "/ " + country.subregion : ""}
          </h4>
          <h4>Population: {formatPopulation(country.population)}</h4>
          <h4>Area: {formatArea(country.area)}</h4>
          <h4>Main language: {country.language}</h4>
          <img src={country.flag} width="390" height="250" />

          <h4>Activities: </h4>
          <ul>
            {country.activities && country.activities.length > 0 ? (
              country.activities.map((el) => (
                <Activity
                  name={el.name}
                  duration={el.duration}
                  season={el.season}
                  difficulty={el.difficulty}
                />
              ))
            ) : (
              <span>No activities</span>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Country;
