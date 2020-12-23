import React from "react";
import { mount } from "enzyme";

import Card from "./Card";
import styles from "./card.module.scss";

let wrapper = null;
let defaultProps = {
  className: styles.card,
  item: {
    flight_number: "XXXXX",
    mission_patch_small: "Mission Name",
    mission_id: [],
    launch_year: "2020",
    links: {
      mission_patch: "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
      mission_patch_small: "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
    },
  },
};

beforeEach(() => {
  wrapper = mount(<Card {...defaultProps} />);
});

describe("Card", () => {
  it("should render", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it(`should have className ${styles.card}`, () => {
    expect(wrapper.props().className).toBe(styles.card);
  });

  it("should have item prop", () => {
    expect(wrapper.props().item).toBeTruthy();
  });
});
