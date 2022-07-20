import "./App.css";

import { Routes, Route } from "react-router-dom";
import Admin from "./Layout/Admin";
import Appointment from "./Layout/Appointment";
import Home from "./Layout/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="admin/*" element={<Admin />} />
        <Route path="appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
