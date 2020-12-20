import { FETCH_LAUNCH_DATA } from "../../constant";

const initialState = {};

export default function launches(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_LAUNCH_DATA:
      return { ...state, ...payload };

    default:
      return state;
  }
}
