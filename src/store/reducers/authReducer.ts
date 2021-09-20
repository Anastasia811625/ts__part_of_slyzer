import { Actions } from "../../types";
const initialState = {};
import { ActionType } from '../../types';

export const authReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case Actions.AUTH_LOGIN:
      return action.payload;
    case Actions.AUTH_LOGOUT:
      return null;
    default:
      return state;
  }
};
