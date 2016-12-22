import React from "react";

import store from "./store";
import { getPost, responsePost } from "./actionCreator";
import logger from "./logger";
import crashReporter from "./report";

function applyMiddlewareByMonkeypatching(store, middlewares) {
  middlewares = middlewares.slice();
  middlewares.reverse();

  middlewares.forEach(function(middleware) {
    store.dispatch = middleware(store);
  });
}

applyMiddlewareByMonkeypatching(store, [crashReporter, logger]);

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
    store.dispatch(action);
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
