import React, { Component } from "react";
import isEmpty from "lodash/isEmpty";

import Card from "../common/Card/Card";
import styles from "./mainsection.module.scss";

export default class MainSection extends Component {
  renderCards = () => {
    const { data } = this.props;
    if (isEmpty(data))
      return <h2 className={styles.noDataFound}>No Data Found</h2>;
    return data.map((item, index) => {
      if ((index + 1) % 4 === 0) return <div />;
      return (
        <div className="row">
          <div className="column">
            <Card item={item} key={item.flight_number} />
          </div>
        </div>
      );
    });
  };
  render() {
    return <div className={styles.mainSection}>{this.renderCards()}</div>;
  }
}
