import { Box , Stack} from '@mui/material';
import './App.css';
import RightBar from './components/RightBar';
import SideButton from "./components/Sidebar"
import MiddleBar from './components/MiddleBar';
import Nav from './components/Nav';
import BelowBar from './components/BelowBar';
import Speedometer from './components/Speedometer';
import Bmi from './components/Bmi';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Footer from "./Pages/Footer";

function App() {
  
  return (

    <Box>
      <Nav/>
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
        <SideButton/>
        <MiddleBar/>
        <RightBar/>
      </Stack>


      <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
      <BelowBar/>
        <Speedometer/>
        <Bmi/>
      </Stack>
      {/* <Footer/> */}
      <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/footer" element={<Footer/>}/> */}
      </Routes>
    </Router>
      
    </Box>
  );
}

export default App;
