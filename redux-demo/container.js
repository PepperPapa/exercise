import React from "react";
import { connect } from "react-redux";

// import store from "./store";
import { requestPost, receivePost } from "./actionCreator";
import Root from "./components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // let self = this;
    // store.subscribe(function() {
    //   let state = store.getState();
    //   self.setState({content:
    //               state.isFetching ? "loading..." : state.posts.toString()});
    // });

    // let action = requestPost(1);
    // store.dispatch(action);
    console.log("click");
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
    dispath: function() {
      return dispath
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
