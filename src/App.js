import "./App.css";
import Dashbord from "./Pages/Dashbord";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Dashbord" element={<Dashbord />} />
      </Routes>
    </Router>
  );
}

export default App;
