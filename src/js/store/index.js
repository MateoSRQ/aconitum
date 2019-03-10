import loglevel from "loglevel";
import { createStore } from "redux";
import rootReducer from "./reducers/index";

loglevel.info('src/js/store/index')

const store = createStore(rootReducer);
export default store;
