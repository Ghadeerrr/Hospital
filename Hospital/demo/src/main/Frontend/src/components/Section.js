import "./Section.css";
import PeopleIcon from "@material-ui/icons/People";
import AirlineSeatIndividualSuiteIcon from "@material-ui/icons/AirlineSeatIndividualSuite";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ApartmentIcon from "@material-ui/icons/Apartment";

function Section() {
  return (
    <section className="icons-container">
      <div className="icons">
        <PeopleIcon className="Icon-S" />
        <h3>40+</h3>
        <p>Doctors At Work</p>
      </div>
      <div className="icons">
        <ThumbUpIcon className="Icon-S" />
        <h3>2394+</h3>
        <p>Satisfied Patients</p>
      </div>
      <div className="icons">
        <AirlineSeatIndividualSuiteIcon className="Icon-S" />
        <h3>250+</h3>
        <p>bed facility</p>
      </div>
      <div className="icons">
        <ApartmentIcon className="Icon-S" />
        <h3>5+</h3>
        <p>Available Departments</p>
      </div>
    </section>
  );
}

export default Section;
