import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/redux-store";

ReactDOM.render(
  <Provider store={store}>
    <App state={store}  dispatch={store.dispatch.bind(store)} />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
