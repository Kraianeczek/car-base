import initialState from "./initialState.js";
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import offersReducer from "./offersRedux.js";
import thunk from "redux-thunk";

const subreducers = {
  offers: offersReducer
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
)

export default store;