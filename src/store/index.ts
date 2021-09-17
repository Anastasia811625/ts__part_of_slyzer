import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { filterReducer } from "./reducers/filterReducer";
// import { authReducer } from "./reducers/authReducer";

const rootReducer = combineReducers({
  filtredUserList: filterReducer,
  // token: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
