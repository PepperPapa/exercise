import React from "react";
import { connect } from "react-redux";

import { requestPost, receivePost } from "./actionCreator";
import Root from "./component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let action = requestPost(1);
    this.props.dispatch(action);
  }

  render() {
    return (
      <Root
          isFetching={this.props.isFetching}
          handleClick={this.handleClick} />
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispath: dispatch
  }
}

export default connect(mapStateToProps)(App);
