import { Actions, ActionType } from "../../types";
import { UserDataType } from "../../components/RegisterForm/RegisterForm";

const InitialState: UserDataType[] = []

export const usersListReducer = (state = InitialState, action: ActionType) => {
  switch (action.type) {
    case Actions.GET_USERS_LIST:
      return action.payload;
    default:
      return state;
  }
};
