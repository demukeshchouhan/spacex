import React, { Component } from "react";
import get from "lodash/get";
import Button from "../common/Button";

import styles from "./leftmenu.module.scss";

export default class LeftMenu extends Component {
  state = {
    isLanding: true,
    launchYear: get(this.props, "data[0].launch_year"),
  };
  handleLaunchClick = (evt) => this.setState({ isLaunch: evt.target.value });
  handleLandingClick = (evt) => this.setState({ isLanding: evt.target.value });
  handleLaunchYearCLick = (evt) =>
    this.setState({ launchYear: evt.target.value });
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
            {data.map((item, index) => {
              if ((index + 1) % 3 == 0) return <br />;
              return (
                <li>
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
