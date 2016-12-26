import { combineReducers } from "redux";

import { REQUEST_POST, RECEIVE_POST } from "./actionCreator";

var rootState = {
    isFetching: false,
    post: "empty"
}


function rootReducer(state = rootState, action) {
  switch (action.type) {
    case REQUEST_POST:
      return {
        isFetching: true,
        post: {}
      }
      break;
    case RECEIVE_POST:
      return {
        isFetching: false,
        post: action.post
      }
      break;
    default:
      return state;
  }
}

export default rootReducer;
