import React from "react";

import { requestPost, receivePost } from "./actionCreator";

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.isFetching);
    console.log(this.props.post);
  }
  render() {
    return (
      <div>
         <button onClick = {this.props.handleClick}>点击加载...</button>
         <p>{this.props.isFetching ? "loading..." : this.props.post}</p>
      </div>
    )
  }
}
