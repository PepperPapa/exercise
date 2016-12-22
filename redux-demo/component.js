import React from "react";

import store from "./store";
import { getPost, responsePost } from "./actionCreator";

// wrapping dispatch
function dispatchAndLog(store, action) {
  console.log("dispatching", action);
  store.dispatch(action);
  console.log("next state", store.getState());
}


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
    dispatchAndLog(store, action);
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
