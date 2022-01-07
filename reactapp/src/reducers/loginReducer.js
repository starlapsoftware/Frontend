import { loginConstants } from "../types";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case loginConstants.LOGIN:
      return {
        loggingIn: true,
        user: action.user,
      };
    default:
      state;
  }
}
