import React, { useEffect } from "react";
import { getCountryDetail } from "../../actions/actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Activity from "./Activity";
import { formatArea, formatPopulation } from "./functions";

function Country(props) {
  var id = props.match.params.id;
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countryDetail);

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, []);

  return (
    <div>
      <Link to="/countries">
        <h1>Home</h1>
      </Link>
      <h1>
        {country.name && country.name.split("(")[0]} ({country.id})
      </h1>
      {country.name !== country.nativename ? (
        <h2>Native name: {country.nativename}</h2>
      ) : null}
      <h4>
        {country.continent} {country.subregion ? "/ " + country.subregion : ""}
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
      <Link to="/newactivity">
        <h1>Add activity</h1>
      </Link>
    </div>
  );
}

export default Country;
