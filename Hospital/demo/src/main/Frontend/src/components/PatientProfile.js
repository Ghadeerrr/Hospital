import "./Profile.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import immg from "./image/un.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PersonIcon from "@material-ui/icons/Person";

function PatientProfile() {
  const navigate = useNavigate();
  const [data, setData] = useState();

  const state = useSelector((state) => {
    return {
      currentUser: state.usersReducer.currentUser,
    };
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/appointment/patient/${state.currentUser.id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="background">
        <div className="container-M">
          {" "}
          <div>
            <Link to="/">
              <ArrowBackIcon className="Icon-x" />
            </Link>
          </div>
          {/* <img src={immg} alt="" width= "100px" /> */}
          {/* <AccountBoxIcon className="icon-log" /> */}
          <div className="m-font">
            {state.currentUser.firstName} {state.currentUser.lasttName}
          </div>
          <br />
          <h4>
            <PersonIcon />
            Personal Information:
          </h4>
          <p>Phone Number: {state.currentUser.phoneNumber}</p>
          <p>Gender: {state.currentUser.gender}</p>
          <p>Age: {state.currentUser.age}</p>
          <p>blood Type: {state.currentUser.bloodType}</p>
          <div>
            <br />
            <h4>
              <EventNoteIcon />
              Appointments:
            </h4>
            {data !== undefined
              ? data.map((e) => {
                  return (
                    <div className="Sh-card">
                      <div className="text-center">
                        <h4 className="card-appo">Date: {e.date}</h4>
                        <h4 className="card-appo">State: {e.state}</h4>
                        <p className="card-appo">
                          with Dr.{e.doctor.firstName} {e.doctor.lasttName}
                        </p>
                      </div>
                    </div>
                  );
                })
              : "Wait"}
          </div>
          {/* <ArrowBackIcon
                className="button-b"
                onClick={() => {
                  navigate("/");
                }}
              /> */}
        </div>
      </div>
    </>
  );
}

export default PatientProfile;
