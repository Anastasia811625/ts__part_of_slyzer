import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { usersListReducer } from './reducers/usersListReducer';

const rootReducer = combineReducers({
  usersList: usersListReducer,
});

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
