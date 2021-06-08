import React, { useEffect } from "react";
import { getCountryDetail } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Activity from "./Activity";

function Country(props) {
  var id = props.match.params.id;
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countryDetail);

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, []);

  return (
    <div>
      <h1>
        {country.name && country.name.split("(")[0]} ({country.id})
      </h1>
      {country.name !== country.nativename ? (
        <h2>Native name: {country.nativename}</h2>
      ) : null}
      <h4>
        {country.continent} / {country.subregion}
      </h4>
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
  );
}

export default Country;
