import React from "react";
import { Button, Grid, Paper, TextField } from "@mui/material";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "30vh",
    width: 280,
    margin: "20px auto",
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Sign In</h2>
        </Grid>
        <TextField
          id="standard-basic"
          label="Username"
          placeholder="Enter username"
          variant="standard"
          fullWidth
          required
        ></TextField>
        <TextField
          id="standard-basic"
          label="Password"
          placeholder="Enter password"
          variant="standard"
          fullWidth
          type="password"
          required
        ></TextField>
        <Button type=" submit" color="primary" variant="contained" fullWidth>
          Sign In
        </Button>
      </Paper>
    </Grid>
  );
};

export default Login;
