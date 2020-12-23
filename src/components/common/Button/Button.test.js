import React from "react";
import { mount } from "enzyme";

import Button from "./index";
import styles from "./button.module.scss";

let wrapper = null;
let defaultProps = {
  className: styles.btn,
  name: "Button Test",
  value: "Button Value",
  onClick: jest.fn(),
};

beforeEach(() => {
  wrapper = mount(<Button {...defaultProps} />);
});

describe("Button", () => {
  it("should render", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it(`should have className ${styles.btn}`, () => {
    expect(wrapper.props().className).toBe(styles.btn);
  });

  it("should have name, value props", () => {
    expect(wrapper.props().name).toBeTruthy();
    expect(wrapper.props().value).toBeTruthy();
  });

  it("should have onClick prop", () => {
    expect(wrapper.props().onClick).toBeDefined();
  });
});
