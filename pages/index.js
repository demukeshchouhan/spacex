import Head from "next/head";

import React, { Component } from "react";
import axios from "axios";
import Dashboard from "./dashboard";

export default function Home() {
  return <Dashboard />;
}

export async function getServerSideProps({ res }) {
  res.setHeader("Location", "/dashboard");
  res.statusCode = 302;
  res.end();
  return {};
}
