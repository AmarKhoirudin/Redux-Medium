import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers";
import Routes from "./routes/routes";
import thunk from "redux-thunk";


export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk) )
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
