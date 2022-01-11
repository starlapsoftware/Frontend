import { userConstants } from "../constants";
import { userService } from "../services";
import { history } from "../helpers";
import { alertActions } from "../actions/alert.actions";
import { useSelector, useDispatch } from "react-redux";

export const userActions = {
  login,
  logout,
};
function login(form) {
  return { type: userConstants.LOGIN_REQUEST, payload: form };
}
/* function login(username, password) {
  const dispatch = useDispatch();

  dispatch(request({ username }));
  userService.login(username, password).then(
    (user) => {
      dispatch(success(user));
      history.push("/");
    },
    (error) => {
      dispatch(failure(error.toString()));
      dispatch(alertActions.error(error.toString()));
    }
  );

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
} */

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}
