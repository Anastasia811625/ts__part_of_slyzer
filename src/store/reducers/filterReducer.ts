import { Actions } from "../types";
import axios from 'axios';
import { UserDataType } from "../../components/RegisterForm";

async function getUserList() {
const res = await axios.get<UserDataType[]>('/users')
return res.data;
}

export const filterReducer = (state = getUserList(), action) => {
  switch (action.type) {
    case Actions.FILTER_USERS:
      return action.payload;
    default:
      return state;
  }
};
