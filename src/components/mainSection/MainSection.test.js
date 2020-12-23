import React from "react";
import { mount } from "enzyme";

import MainSection from "./MainSection";
import styles from "./mainsection.module.scss";

let wrapper = null;
let defaultProps = {
  className: styles.mainSection,
  data: [],
};

beforeEach(() => {
  wrapper = mount(<MainSection {...defaultProps} />);
});

describe("MainSection", () => {
  it("should render", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it(`should have className ${styles.mainSection}`, () => {
    expect(wrapper.props().className).toBe(styles.mainSection);
  });

  it("should have data props", () => {
    expect(wrapper.props().data).toBeTruthy();
  });

  it("should have renderCards method defined", () => {
    expect(wrapper.instance().renderCards).toBeDefined();
  });
});
