import React from "react";

import store from "./store";
import { getPost, responsePost } from "./actionCreator";
import logger from "./logger";
import crashReporter from "./report";

// chainging middlewares
// store is not changed
function applyMiddleware(store, middlewares) {
  middlewares = middlewares.slice();
  middlewares.reverse();

  let dispatch = store.dispatch;
  middlewares.forEach(function(middleware) {
    dispatch = middleware(store)(dispatch);
  });

  return Object.assign({}, store, {dispatch});
}

// newStore.dispatch will do logging and crash reporting
// store not changed
var newStore = applyMiddleware(store, [logger, crashReporter]);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: ""};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let self = this;
    store.subscribe(function() {
      let state = store.getState().isFetching;
      self.setState({content: state});
    });

    let action = getPost(1);
    newStore.dispatch(action);
  }

  render() {
    return (
      <div>
         <button onClick={this.handleClick}>点击加载...</button>
         <p>{this.state.content}</p>
      </div>
    )
  }
}
