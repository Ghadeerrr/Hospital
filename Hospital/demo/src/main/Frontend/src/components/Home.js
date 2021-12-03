import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import Section from "./Section";
import DoctorsAdv from "./DoctorsAdv";
import Departments from "./Departments";

function Home() {
  return (
    <div>
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
