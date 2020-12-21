import {
  FETCH_LAUNCH_DATA,
  SET_IS_LOCAL,
  STORE_YEAR_TO_FILTER,
} from "../../constant";

const initialState = { launches: [], years: [], isLocal: false };

export default function launches(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_LAUNCH_DATA:
      return { ...state, launches: [...payload] };
    case STORE_YEAR_TO_FILTER:
      return { ...state, years: [...payload] };
    case SET_IS_LOCAL:
      return { ...state, isLocal: payload };

    default:
      return state;
  }
}
