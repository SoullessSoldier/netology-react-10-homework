import {legacy_createStore, compose, combineReducers} from "redux";
import serviceAddReducer from "@/reducers/serviceAdd"; 
import serviceListReducer from "@/reducers/serviceList";
import serviceEditReducer from "@/reducers/serviceEdit";

const reducers = combineReducers({
    serviceAdd: serviceAddReducer,
    serviceList: serviceListReducer,
    serviceEdit: serviceEditReducer,
}) 

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = legacy_createStore(
    reducers,
    compose(ReactReduxDevTools)
)

export default store
