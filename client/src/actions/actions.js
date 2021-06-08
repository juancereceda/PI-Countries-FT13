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
  return function (dispatch) {
    fetch(route)
      .then((r) => r.json())
      .then((json) =>
        dispatch({
          type: GET_COUNTRIES,
          payload: activity
            ? json.rows.filter((el) =>
                el.activities.find((el) => el.name === activity)
              )
            : json.rows,
        })
      );
  };
}

export function getActivities() {
  return function (dispatch) {
    fetch("http://localhost:3001/activities")
      .then((r) => r.json())
      .then((json) => dispatch({ type: GET_ACTIVITIES, payload: json }));
  };
}

export function getCountryDetail(id) {
  return function (dispatch) {
    fetch(`http://localhost:3001/countries/${id}`)
      .then((r) => r.json())
      .then((json) => dispatch({ type: GET_COUNTRY_DETAIL, payload: json }));
  };
}

/* 
export function addActivity() {}  */
