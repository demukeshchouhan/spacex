import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import uniqBy from "lodash/uniqBy";
import get from "lodash/get";
import { NextSeo, DefaultSeo } from "next-seo";

import SEO from "../../next-seo.config";
import Header from "../../src/components/header/Header";
import LeftMenu from "../../src/components/leftmenu/LeftMenu";
import MainSection from "../../src/components/mainSection/MainSection";
import {
  fetchLaunches,
  setIsLocal,
  setYearsData,
} from "../../src/redux/actions/launches";
import styles from "./dashboard.module.scss";

class Dashboard extends Component {
  // static getInitialProps({ ctx, store }) {
  //   // ctx.store.dispatch(fetchLaunches());
  // console.log(ctx, store, "store");
  //   const state = fetchLaunches();
  //   store.dispatch(fetchLaunches);
  //   // const state = axios("https://api.spacexdata.com/v3/launches?limit=1").;
  //   console.log(state);
  //   return { state };
  // }

  componentDidMount() {
    const launchesData = this.setLaunches();
    const removeDuplicateYear = uniqBy(launchesData, "launch_year");
    this.props.setYearsData(removeDuplicateYear);
  }

  setLaunches = () => {
    const { launches = [], launchesFromServer = [] } = this.props;
    if (launches.isLocal) {
      return launches.launches;
    }
    return launchesFromServer;
  };

  render() {
    const launchesData = this.setLaunches();
    const years = get(this.props, "launches.years");
    return (
      <>
        <Header />
        <NextSeo
          noindex={true}
          title="space X Dashboard"
          description="Space X dashboard, Get details of success and failed launches"
        />
        <DefaultSeo {...SEO(launchesData)} />
        <div className={styles.wrapper}>
          <LeftMenu data={years} />
          <MainSection data={launchesData} />
        </div>
      </>
    );
  }
}

const mapState = (store) => ({
  launches: store.launches,
});
const mapProps = {
  fetchLaunches,
  setIsLocal,
  setYearsData,
};

export async function getServerSideProps() {
  const { data: launches } = await axios(
    "https://api.spacexdata.com/v3/launches?limit=100"
  );
  return {
    props: { launchesFromServer: launches },
  };
}

export default connect(mapState, mapProps)(Dashboard);
