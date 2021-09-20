export enum Actions {
  GET_USERS_LIST = "GET_USERS_LIST",
  FILTER_USERS = "FILTER_USERS",
  AUTH_LOGIN = "AUTH_LOGIN",
  AUTH_LOGOUT = "AUTH_LOGOUT",
}

export type ActionType = {
  type: string,
  payload: any
}

export type userType = {
  id: number,
  name: string,
  login: string
}