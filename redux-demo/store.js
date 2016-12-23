import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducer";
import logger from "./logger";
import crashReporter from "./report";


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
// above statement is for redux-dev-tools extension
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
