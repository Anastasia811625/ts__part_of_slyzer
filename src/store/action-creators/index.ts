import * as AuthActions from "./auth.action-creator";
import * as getUsersList from './userList.action-creator';
import * as setUsersList from './setUsersList.action-creator';

export default {
  ...AuthActions,
  ...getUsersList,
  ...setUsersList
};
