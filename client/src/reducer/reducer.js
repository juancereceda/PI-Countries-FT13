import {
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
} from "../actions/actions.js";

const initialState = {
  countries: [],
  countryDetail: {},
  activities: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case GET_COUNTRY_DETAIL: {
      return {
        ...state,
        countryDetail: action.payload,
      };
    }
    case GET_ACTIVITIES: {
      return {
        ...state,
        activities: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
