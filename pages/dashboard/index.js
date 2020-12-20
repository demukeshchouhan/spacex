import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Header from "../../src/components/header/Header";
import LeftMenu from "../../src/components/leftmenu/LeftMenu";
import MainSection from "../../src/components/mainSection/MainSection";
import { fetchLaunches } from "../../src/redux/actions/launches";
import styles from "./dashboard.module.scss";

class Dashboard extends Component {
  // static getInitialProps({ ctx, store }) {
  //   // ctx.store.dispatch(fetchLaunches());
  //   console.log(ctx, store, "store");
  //   const state = fetchLaunches();
  //   store.dispatch(fetchLaunches);
  //   // const state = axios("https://api.spacexdata.com/v3/launches?limit=1").;
  //   console.log(state);
  //   return { state };
  // }

  componentDidMount() {
    // this.props.fetchLaunches();
  }

  render() {
    console.log(this.props);
    const { launches } = this.props;
    return (
      <>
        <Header />
        <div className={styles.wrapper}>
          <LeftMenu data={launches} />
          <MainSection />
        </div>
      </>
    );
  }
}

const mapState = (store) => ({
  // launches: store.launches,
});
const mapProps = {
  fetchLaunches,
};

export async function getStaticProps(context) {
  const { data: launches } = await axios(
    "https://api.spacexdata.com/v3/launches?limit=10"
  );
  console.log(launches, "launches");
  return {
    props: { launches }, // will be passed to the page component as props
  };
}

export default connect(mapState, mapProps)(Dashboard);
