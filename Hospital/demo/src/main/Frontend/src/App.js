import Home from "./components/Home";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DepartmentDetails from "./components/DepartmentDetails";
import DoctorProfile from "./components/DoctorProfile";
import PatientProfile from "./components/PatientProfile";
import Appointment from "./components/Appointment";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Department/:id" element={<DepartmentDetails />} />
        <Route path="/Doctor/:id" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/DoctorProfile" element={<DoctorProfile />} />
        <Route path="/PatientProfile" element={<PatientProfile />} />
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
