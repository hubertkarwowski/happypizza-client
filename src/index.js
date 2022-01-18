import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { theme } from "./theme";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer, { getTotals } from "./features/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
store.dispatch(getTotals());

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
