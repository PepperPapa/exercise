import React from "react";

import { requestPost, receivePost } from "./actionCreator";

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
         <button onClick = {this.props.handleClick}>点击加载...</button>
         <p>{this.props.isFetching ? "loading..." : "empty"}</p>
      </div>
    )
  }
}
