import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducer";
import logger from "./logger";
import crashReporter from "./report";

const store = createStore(rootReducer);
export default store;
