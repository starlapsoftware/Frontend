import React, { useState } from "react";
import { Button, Grid, Paper, TextField, FormControl } from "@mui/material";
import Cookies from "universal-cookie";
import axios from "axios";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "30vh",
    width: 280,
    margin: "20px auto",
  };

  const baseUrl = "http://servstarlap:85/api/usuarios";
  const cookies = new Cookies();

  const [form, setForm] = useState({
    username: "",
    password: "",
    submitted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username && form.password) {
    }
  };

  const iniciarSesion = async () => {
    await axios
      .get(baseUrl + `/${form.username}/${form.password}`)
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
          alert(
            "Bienvenido: " + respuesta._Nombre + " " + respuesta._NombreEmpresa
          );
          props.history.push("/menu");
        } else {
          alert("El usuario o la contraseña no son correctos");
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <FormControl onSubmit={handleSubmit}>
          <Grid align="center">
            <h2>Sign In</h2>
          </Grid>
          <TextField
            id="standard-basic"
            label="Username"
            placeholder="Enter username"
            variant="standard"
            fullWidth
            name="username"
            required
            onChange={handleChange}
          ></TextField>
          <TextField
            id="standard-basic"
            label="Password"
            placeholder="Enter password"
            variant="standard"
            fullWidth
            name="password"
            type="password"
            onChange={handleChange}
            required
          ></TextField>
          <Button
            onClick={() => iniciarSesion()}
            type=" submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Sign In
          </Button>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default Login;
