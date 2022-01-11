import axios from "axios";
import Cookies from "universal-cookie";

export const userService = {
  login,
  logout,
};

function login(username, password) {
  return async () => {
    const baseUrl = "http://servstarlap:85/api/usuarios";
    const cookies = new Cookies();

    await axios
      .get(baseUrl + `/${username}/${password}`)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response != null) {
          var respuesta = response;
          cookies.set("_IdUsuario", respuesta._IdUsuario, { path: "/" });
          cookies.set("_Nombre", respuesta._Nombre, { path: "/" });
          cookies.set("_NombreEmpresa", respuesta._NombreEmpresa, {
            path: "/",
          });
          localStorage.setItem("user", JSON.stringify(respuesta));
          alert(
            "Bienvenido: " + respuesta._Nombre + " " + respuesta._NombreEmpresa
          );
          return respuesta;
        } else {
          alert("El usuario o la contraseña no son correctos");
          return {};
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}
