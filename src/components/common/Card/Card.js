import React from "react";
import { NextSeo } from "next-seo";

import styles from "./card.module.scss";

export default function Card(props) {
  const { item } = props;
  return (
    <div className={styles.card}>
      <img src={item.links.mission_patch_small} alt={item.mission_name} />
      <div className={styles.description}>
        <h2
          className={styles.mainHeading}
        >{`${item.mission_name} #${item.flight_number}`}</h2>
        <div className={styles.row}>
          <span className={styles.subHeading}>Mission Ids:</span>
          <ul className={styles.subHeadingDesc}>
            {item.mission_id.map((ids) => (
              <li key={ids}>{ids}</li>
            ))}
          </ul>
        </div>

        <div className={styles.row}>
          <span className={styles.subHeading}>Launch Year:</span>
          <span className={styles.subHeadingDesc}>{item.launch_year}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.subHeading}>
            SuccessFul <br />
            Launch:
          </span>
          <span className={styles.subHeadingDesc}>{"item.launch_success"}</span>
        </div>
        {/* <div>SuccessFul Landing: {}</div> */}
      </div>
    </div>
  );
}
