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

export async function getServerSideProps({ res }) {
  res.setHeader("Location", "/dashboard");
  res.statusCode = 302;
  res.end();
  return {};
}
