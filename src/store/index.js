import { createStore, combineReducers } from "redux";
import { reducer, activeTabReducer } from "./reducers";

let rootReducer = combineReducers({
  todo: reducer,
  activeTab: activeTabReducer,
});

export let store = createStore(rootReducer);
