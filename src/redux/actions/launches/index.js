import axios from "axios";
import { FETCH_LAUNCH_DATA } from "../../constant";
export const fetchLaunchesType = (payload) => ({
  type: FETCH_LAUNCH_DATA,
  payload,
});

export const fetchLaunches = () => {
  console.log("fetching...");
  return (dispatch) => {
    return axios("https://api.spacexdata.com/v3/launches?limit=100").then(
      (data) => {
        console.log(data);
        dispatch(fetchLaunchesType(data.data));
        return data.data;
      }
    );
  };
};
