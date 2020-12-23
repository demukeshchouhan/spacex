import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import LeftMenu from "./LeftMenu";
import styles from "./leftmenu.module.scss";

let wrapper = null;
let store = configureMockStore();
let defaultProps = {
  className: styles.leftmenu,
  data: [],
};
const mockStore = store({});
let LeftMenuWithProvider = () => (
  <Provider store={mockStore}>
    <LeftMenu {...defaultProps} />
  </Provider>
);

beforeEach(() => {
  wrapper = shallow(LeftMenuWithProvider()).dive();
});

describe("LeftMenu", () => {
  it("should render", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    const wrapper = mount(LeftMenuWithProvider());
    expect(wrapper).toMatchSnapshot();
  });

  it(`should have className ${styles.leftmenu}`, () => {
    expect(wrapper.props().className).toBe(styles.leftmenu);
  });

  it("should have data props", () => {
    expect(wrapper.props().data).toBeTruthy();
  });

  it("should have handleCommonClick method defined", () => {
    const wrapper = mount(LeftMenuWithProvider());
    expect(wrapper.find("LeftMenu").instance().handleCommonClick).toBeDefined();
  });
  it("should have handleLaunchClick method defined", () => {
    const wrapper = mount(LeftMenuWithProvider());
    expect(wrapper.find("LeftMenu").instance().handleLaunchClick).toBeDefined();
  });
  it("should have handleLandingClick method defined", () => {
    const wrapper = mount(LeftMenuWithProvider());
    expect(
      wrapper.find("LeftMenu").instance().handleLandingClick
    ).toBeDefined();
  });
  it("should have handleLaunchYearCLick method defined", () => {
    const wrapper = mount(LeftMenuWithProvider());
    expect(
      wrapper.find("LeftMenu").instance().handleLaunchYearCLick
    ).toBeDefined();
  });
});
