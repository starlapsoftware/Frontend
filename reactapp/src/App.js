import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/TemaConfig";
import Contenedor from "./components/Contenedor";
import Login from "./components/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
