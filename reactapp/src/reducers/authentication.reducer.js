import { userConstants } from "../constants";
import axios from "axios";
import Cookies from "universal-cookie";
import { history } from "../helpers";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      const baseUrl = "http://servstarlap:85/api/usuarios";
      const cookies = new Cookies();

      axios
        .get(baseUrl + `/${action.payload.username}/${action.payload.password}`)
        .then((response) => {
          if (response != null) {
            var respuesta = response;
            cookies.set("_IdUsuario", respuesta._IdUsuario, { path: "/" });
            cookies.set("_Nombre", respuesta._Nombre, { path: "/" });
            cookies.set("_NombreEmpresa", respuesta._NombreEmpresa, {
              path: "/",
            });
            localStorage.setItem("user", JSON.stringify(respuesta));
            history.push("/");
            alert("Bienvenido..");
            return {
              loggingIn: true,
              user: respuesta,
            };
          } else {
            alert("El usuario o la contraseña no son correctos");
            return {};
          }
        })
        .catch((error) => {
          console.log(error);
          return {};
        });

    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
