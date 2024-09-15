import "./App.css";
import Dashbord from "./Pages/Dashbord";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import LoginPage from "./Pages/LoginPage";
import { PrivateRouteLogin } from "./utils/PrivateRoute";

function App() {
  return (

    <Box>
      <Nav/>
      <DashBoard/>
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
        <SideButton/>
        <MiddleBar/>
        <RightBar/>
      </Stack>
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
      <SideButton/>
        <Speedometer/>
      </Stack>
      
      <Graph/>
    </Box>


  
  );
}

export default App;
