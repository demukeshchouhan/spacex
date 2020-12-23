import React, { Component } from "react";
import get from "lodash/get";
import { connect } from "react-redux";

import { fetchLaunches } from "../../redux/actions/launches";
import Button from "../common/Button";
import styles from "./leftmenu.module.scss";

class LeftMenu extends Component {
  state = {
    isLanding: true,
    launchYear: get(this.props, "data[0].launch_year"),
    launchesData: get(this.props, "data"),
  };

  handleLaunchClick = (evt) => {
    this.handleCommonClick(evt, {
      prevState: "isLaunch",
      nextState: "launchValue",
    });
  };

  handleLandingClick = (evt) => {
    this.handleCommonClick(evt, {
      prevState: "isLanding",
      nextState: "landingValue",
    });
  };

  handleLaunchYearCLick = (evt) => {
    this.handleCommonClick(evt, {
      prevState: "isYear",
      nextState: "launchYear",
    });
  };

  handleCommonClick = (evt, params) => {
    const { value } = evt.target;
    const { prevState, nextState } = params;
    this.setState({ [prevState]: value, [nextState]: value });
    this.props.fetchLaunches({
      ...this.state,
      [prevState]: true,
      [nextState]: value,
    });
  };

  render() {
    const { data } = this.props;
    return (
      <div className={styles.leftmenu}>
        <div className={styles.linkPanel}>
          <h2>Filters</h2>
          <h3 className={styles.subHeading}>
            <span>Launch Year</span>
          </h3>
          <ul className={styles.yearList}>
            {data &&
              data.map((item, index) => {
                if ((index + 1) % 3 == 0) {
                  return <br key={item.flight_number} />;
                }
                return (
                  <li key={item.flight_number}>
                    <Button
                      name={item.launch_year}
                      active={this.state.launchYear === item.launch_year}
                      value={item.launch_year}
                      onClick={this.handleLaunchYearCLick}
                    />
                  </li>
                );
              })}
          </ul>
          <h3 className={styles.subHeading}>
            <span>SuccessFul Launch</span>
          </h3>
          <ul className={styles.yearList}>
            <li>
              <Button
                onClick={this.handleLaunchClick}
                name="True"
                value={"true"}
                active={this.state.isLaunch === "true"}
              />
            </li>
            <li>
              <Button
                onClick={this.handleLaunchClick}
                name="False"
                value={"false"}
                active={this.state.isLaunch === "false"}
              />
            </li>
          </ul>
          <h3 className={styles.subHeading}>
            <span>SuccessFul Landing</span>
          </h3>
          <ul className={styles.yearList}>
            <li>
              <Button
                onClick={this.handleLandingClick}
                name="True"
                value={"true"}
                active={this.state.isLanding === "true"}
              />
            </li>
            <li>
              <Button
                onClick={this.handleLandingClick}
                name="False"
                value={"false"}
                active={this.state.isLanding === "false"}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapState = () => {
  return {};
};

const mapProps = {
  fetchLaunches,
};

export default connect(mapState, mapProps)(LeftMenu);
