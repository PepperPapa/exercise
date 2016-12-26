import React from "react";
import { connect } from "react-redux";

import { requestPost, receivePost, fetchPost } from "./actionCreator";
import Root from "./component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let action = fetchPost("frontend");
    this.props.dispatch(action);
  }

  render() {
    return (
      <Root
          isFetching={this.props.isFetching}
          post={this.props.post}
          handleClick={this.handleClick} />
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
    post: JSON.stringify(state.post)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispath: dispatch
  }
}

export default connect(mapStateToProps)(App);
