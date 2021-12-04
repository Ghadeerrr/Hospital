import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import Section from "./Section";
import DoctorsAdv from "./DoctorsAdv";
import Departments from "./Departments";

import { useSelector } from "react-redux";


function Home() {

  const state = useSelector((state) => {
    return {
      currentUser: state.usersReducer.currentUser,
      UserType: state.usersReducer.UserType,
    };
  });

  return (
    <div>
      {console.log(state.currentUser)}
      {console.log("State: ")}
      {console.log(state.UserType)}
      <Navbar />
      <Header />
      <Section />
      <Departments />
      <DoctorsAdv />
      <Footer />
    </div>
  );
}

export default Home;
