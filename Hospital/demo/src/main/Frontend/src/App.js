// import the required components
import Home from "./components/Home";

import Login from "./components/LogIn";
import SignUp from "./components/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { setProducts, setFilter } from "./reducers/products/products";
// import axios from "axios";
import Footer from "./components/Footer";
import DoctorsAdv from "./components/DoctorsAdv";
import Departments from "./components/Departments";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then(function (response) {
  //       console.log(response.data);
  //       const action = setProducts(response.data);
  //       dispatch(action);
  //       const action2 = setFilter(response.data);
  //       dispatch(action2);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Footer" element={<Footer />} />
          {/* <Route path="/productdetails/:id" element={<ProductDetails />} /> */}
          <Route path="/Departments" element={<Departments />} />
          <Route path="/login" element={<Login />} />
          <Route path="/DoctorsAdv" element={<DoctorsAdv />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
