// import { useState } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

// import { Link } from "react-router-dom";
// import Button from '@material-ui/core/Button';
// import { Button } from "react-bootstrap";

import Header from "./Header";
import Section from "./Section";
import DoctorsAdv from "./DoctorsAdv";
import Departments from "./Departments";

function Home() {
  // let toggle = false;
  // const [currentPage, setCurrentPage] = useState(1);
  // const [productsPerPage] = useState(6);

  // const state = useSelector((state) => {
  //   return {
  //     products: state.products.products,
  //     filter: state.products.filter,
  //     loginDetails: state.loginDetails.loginDetails,
  //     wishListUsers: state.wishList.wishListUsers,
  //     id: state.loginDetails.id,
  //   };
  // });
  // if (state.id == 1) {
  //   toggle = true;
  // }

  // const indexOfLastProduct = currentPage * productsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProduct = state.filter.slice(
  //   indexOfFirstProduct,
  //   indexOfLastProduct
  // );
  // console.log(currentProduct);
  // console.log(state.loginDetails);
  // console.log(state.wishListUsers);
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Departments />
      <DoctorsAdv />

      {/* <Admain /> */}
      {/* <div className="Button-admin">
        {toggle && (
          <Link to="/admin">
            <Button variant="danger">Admin page</Button>
          </Link>
        )}
      </div> */}

      <Footer />
    </div>
  );
}

export default Home;
