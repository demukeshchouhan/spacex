import "normalize.css";
import "../styles/globals.scss";

import Head from "next/head";
import { Provider, connect } from "react-redux";
import store from "../src/redux/store";
import React, { Component } from "react";
import { fetchLaunches } from "../src/redux/actions/launches";
import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";

class MyApp extends Component {
  static async getInitialProps({ Component, ctx }) {
    // store.dispatch(ctxfetchLaunches());

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx, store)
      : {};
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
