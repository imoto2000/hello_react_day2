import "@/styles/globals.css";

import { Provider } from "react-redux";
import store from "@/store";
import Default from "@/layouts/default";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Default>
        <Component {...pageProps} />
      </Default>
    </Provider>
  );
}

export default MyApp;
