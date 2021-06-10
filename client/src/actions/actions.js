import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

export function getCountries(name, continent, activity) {
  let route = "http://localhost:3001/countries?";
  if (name) {
    route += `name=${name}&`;
  }
  if (continent) {
    route += `continent=${continent}&`;
  }
  return async function (dispatch) {
    let result = await axios.get(route);
    dispatch({
      type: GET_COUNTRIES,
      payload: !result.data.rows
        ? []
        : activity
        ? result.data.rows.filter((el) =>
            el.activities.find((el) => el.name === activity)
          )
        : result.data.rows,
    });
  };
}

export function getActivities() {
  return async function (dispatch) {
    let result = await axios.get("http://localhost:3001/activities");
    dispatch({ type: GET_ACTIVITIES, payload: result.data });
  };
}

export function getCountryDetail(id) {
  return async function (dispatch) {
    let result = await axios.get(`http://localhost:3001/countries/${id}`);
    dispatch({ type: GET_COUNTRY_DETAIL, payload: result.data });
  };
}

export function addActivity(name, difficulty, duration, season, countries) {
  axios.post("http://localhost:3001/activities", {
    name: name,
    difficulty: difficulty,
    duration: duration,
    season: season,
    countries: countries,
  });
}
