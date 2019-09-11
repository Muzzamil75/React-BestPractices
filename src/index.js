import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
import MyApp from "./components/Redux";
import { createStore } from "redux";
import Reducer from "./components/Redux/Store/Reducer";
import {Provider} from 'react-redux'
const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
