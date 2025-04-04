import { legacy_createStore, compose, combineReducers } from "redux";
import itemsListReducer from "@/reducers/itemsList";


const reducers = combineReducers({
  itemsList: itemsListReducer,
});

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = legacy_createStore(reducers, compose(ReactReduxDevTools));

export default store;
