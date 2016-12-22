import { combineReducers } from "redux";

import { getPost, responsePost } from "./actionCreator";

var rootState = {
    isFetching: false,
    posts: []
}


function getPostReducer(state = false, action) {
  return {isFetching: true};
}

function responsePostReducer(state = [], action) {
  return {posts: action.posts};
}

const rootReducer = combineReducers({
  isFetching: getPostReducer,
  posts: responsePostReducer
});

export default rootReducer;