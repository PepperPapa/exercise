import { combineReducers } from "redux";

import { REQUEST_POST, RECEIVE_POST } from "./actionCreator";

var rootState = {
    isFetching: false,
    posts: []
}


function requestPostReducer(state = false, action) {
  switch (action.type) {
    case REQUEST_POST:
      return true;
      break;
    default:
      return state;
  }
}

function receivePostReduce(state = [], action) {
  switch (action.type) {
    case RECEIVE_POST:
      return action.posts;
      break;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  isFetching: requestPostReducer,
  posts: receivePostReduce
});

export default rootReducer;
