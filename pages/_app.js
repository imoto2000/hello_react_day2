import "@/styles/globals.css";

import { Provider } from "react-redux";
import store from "@/store";
import Default from "@/layouts/default";
import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Default>
          <Component {...pageProps} />
        </Default>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
