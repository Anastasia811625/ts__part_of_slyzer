import { useApi } from "../../hooks/api.hook";
import { Actions } from "../types";

export const authLogin = (formData) => async (dispatch) => {
  const request = useApi();

  /* const { token } = await request("/auth/login", {
    method: "POST",
    body: formData,
  }); */
  dispatch({ type: Actions.AUTH_LOGIN, payload: formData });
};
