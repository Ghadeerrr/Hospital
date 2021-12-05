import Home from "./components/Home";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DepartmentDetails from "./components/DepartmentDetails";
import DoctorProfile from "./components/DoctorProfile";
import PatientProfile from "./components/PatientProfile";
import Appointment from "./components/Appointment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Department/:id" element={<DepartmentDetails />} />
        <Route path="/Doctor/:id" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/DoctorProfile" element={<DoctorProfile />} />
        <Route path="/PatientProfile" element={<PatientProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
