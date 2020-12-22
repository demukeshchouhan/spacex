import axios from "axios";

import {
  FETCH_LAUNCH_DATA,
  SET_IS_LOCAL,
  STORE_YEAR_TO_FILTER,
} from "../../constant";

export const fetchLaunchesType = (payload) => ({
  type: FETCH_LAUNCH_DATA,
  payload,
});

export const setIsLocal = (payload) => ({
  type: SET_IS_LOCAL,
  payload,
});

export const setYearsData = (payload) => ({
  type: STORE_YEAR_TO_FILTER,
  payload,
});

export const fetchLaunches = (props) => {
  const {
    isLanding,
    landingValue,
    isLaunch,
    launchValue,
    isYear,
    launchYear,
  } = props;
  return (dispatch) => {
    return axios({
      url: `https://api.spacexdata.com/v3/launches`,
      params: {
        limit: "50",
        launch_success: isLaunch ? launchValue : null,
        landing_success: isLanding ? landingValue : null,
        launch_year: isYear ? launchYear : null,
      },
    }).then((data) => {
      if (data) {
        dispatch(fetchLaunchesType(data.data));
        dispatch(setIsLocal(true));
      }
      // return data.data;
    });
  };
};
