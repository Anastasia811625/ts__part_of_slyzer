import { Actions, ActionType } from '../../types';

export const setUsersList = (filtredData: object) => async (dispatch: (action: ActionType) => void) => {  
  dispatch({
    type: Actions.GET_USERS_LIST,
    payload: filtredData
  })
};
