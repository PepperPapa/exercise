import React from "react";

import store from "./store";
import { getPost, responsePost } from "./actionCreator";

// monkey pactching
// 这里保存store.dispatch原始函数 
let next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
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
