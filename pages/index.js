import Head from "next/head";
import styles from "../styles/Home.module.scss";

import React, { Component } from "react";
import axios from "axios";
import Dashboard from "./dashboard";

export default class Home extends Component {
  render() {
    return <Dashboard />;
  }
}
