import React from "react";
import styles from "./line.module.scss";

export default function Line(props) {
  const { height = "4px", width = "60%" } = props;
  return <div style={{ height, width }} className={styles.line} />;
}
