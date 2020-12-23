import thunk from "redux-thunk";
import moxios from "moxios";
import { fetchLaunchesType } from "./index";
import configureMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let fetchLaunchData = () => {
  const request = moxios.requests.mostRecent();
  request.respondWith({
    status: 200,
    response: {
      status: "SUCCESS",
      data: {},
    },
  });
};

describe("Launches Action", () => {
  it("should have fetchLaunchesType action defined", () => {
    const data = {
      data: [],
    };
    expect(fetchLaunchesType(data)).toBeDefined();
  });

  it("should call fetchLaunchesType", () => {
    const data = {
      data: [],
    };
    const store = mockStore({});
    moxios.wait(fetchLaunchData);
    store.dispatch(fetchLaunchesType(data));
    expect(fetchLaunchesType(data)).toBeDefined();
  });
});
