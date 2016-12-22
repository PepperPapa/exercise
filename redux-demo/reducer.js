import { combineReducers } from "redux";

var rootState = {
    isFetching: false,
    posts: []
}


function getPostReducer(state = false, action) {
  return "loading...";
}

function responsePostReducer(state = [], action) {
  return state;
}

const rootReducer = combineReducers({
  isFetching: getPostReducer,
  posts: responsePostReducer
});

export default rootReducer;