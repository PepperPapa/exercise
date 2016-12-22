import React from "react";

import store from "./store";
import { getPost, responsePost } from "./actionCreator";
import patchStoreToAddLogging from "./logger";
import patchStoreToAddCrashReporting from "./report";

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
    patchStoreToAddLogging(store);
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
