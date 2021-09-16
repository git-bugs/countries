import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { countriesReducer } from "./countriesReducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  countries: countriesReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))