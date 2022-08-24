import "@/styles/globals.css";

import { Provider } from "react-redux";
import store from "@/store";
import Header from "@/components/layouts/Header";

import { AuthUserProvider } from "@/context/AuthUserContext";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthUserProvider>
        <Header> </Header>
        <Component {...pageProps} />
      </AuthUserProvider>
    </Provider>
  );
}

export default MyApp;
