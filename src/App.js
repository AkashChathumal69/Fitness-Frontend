import "./App.css";
import Dashbord from "./Pages/Dashbord";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import LoginPage from "./Pages/LoginPage";
import { PrivateRouteLogin } from "./utils/PrivateRoute";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;