import "@/styles/globals.css";

import { Provider } from "react-redux";
import store from "@/store";
import Header from "@/components/layouts/Header";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header> </Header>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
