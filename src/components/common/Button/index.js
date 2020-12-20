import React from "react";
import cx from "classnames";
import styles from "./button.module.scss";

export default function Button(props) {
  const { name, onClick, className, value, active = false } = props;
  return (
    <button
      name={name}
      value={value}
      className={cx(styles.btn, className, active ? styles.selected : null)}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
