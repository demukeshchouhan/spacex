import React from "react";
import { mount } from "enzyme";
import Header from "./Header";
import styles from "./header.module.scss";

let wrapper = null;
let defaultProps = {
  className: styles.header,
};

beforeEach(() => {
  wrapper = mount(<Header {...defaultProps} />);
});

describe("Header", () => {
  it("should render", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it(`should have className ${styles.header}`, () => {
    expect(wrapper.props().className).toBe(styles.header);
  });
});
