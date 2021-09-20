import { Actions, ActionType } from '../../types';

export const authLogin = (formData: object) => async (dispatch: (action: ActionType) => void) => {
  dispatch({ type: Actions.AUTH_LOGIN, payload: formData });
};
