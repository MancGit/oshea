import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore
} from "react-redux-i18n";
import { i18n } from "../i18n";

import Onboarding from "./components/Onboarding";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

syncTranslationWithStore(store);
store.dispatch(loadTranslations(i18n));
store.dispatch(setLocale("en"));

const jsx = (
  <Provider store={store}>
    <Onboarding />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
