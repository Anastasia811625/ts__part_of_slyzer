import axios from "axios";
import { Actions, ActionType } from '../../types';
import { UserDataType } from '../../components/RegisterForm';

export const getUsersList = () => async (dispatch: (action: ActionType) => void) => {
  const res = await axios.get<UserDataType[]>('/users')
  
  dispatch({
    type: Actions.GET_USERS_LIST,
    payload: res.data
  })
};
