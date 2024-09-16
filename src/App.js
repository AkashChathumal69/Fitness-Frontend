import "./App.css";
import Dashbord from "./Pages/Dashbord";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import LoginPage from "./Pages/LoginPage";
import { PrivateRouteLogin } from "./utils/PrivateRoute";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from "@mui/material";


function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Routes>
        <Route
          path="/login"
          element={
            <PrivateRouteLogin>
              <LoginPage />
            </PrivateRouteLogin>
          }
        />
        <Route
          path="/Dashbord"
          element={
            <PrivateRoute>
              <Dashbord />
            </PrivateRoute>
          }
        />
        <Route path="/logout" element={<h1>Not Found</h1>} />
      </Routes>
    </Box>
    </ThemeProvider>
  );
}

export default App;