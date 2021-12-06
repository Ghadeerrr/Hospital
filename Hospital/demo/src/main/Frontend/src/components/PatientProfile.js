import "./Profile.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import AccountBoxIcon from "@material-ui/icons/AccountBox";
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
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-60 col-md-9">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-1">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div>
                      <Link to="/">
                        <ArrowBackIcon className="icon-xx" />
                      </Link>
                    </div>
                    {/* <div className="m-b-25">
                      <AccountBoxIcon className="icon-z" />
                    </div>
                    <h6 className="f-w">
                      {state.currentUser.firstName}{" "}
                      {state.currentUser.lasttName}
                    </h6> */}

                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      <div className="b-size">
                        {" "}
                        <PersonIcon />
                        Personal Information
                      </div>
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Name:</p>
                        <h6 className="text-muted f-w-400">
                          {state.currentUser.firstName}{" "}
                          {state.currentUser.lasttName}
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone Number:</p>
                        <div className="text-muted f-w-400">
                          {state.currentUser.phoneNumber}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Gender:</p>
                        <h6 className="text-muted f-w-400">
                          {state.currentUser.gender}
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Age:</p>
                        <h6 className="text-muted f-w-400">
                          {state.currentUser.age}
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Blood Type:</p>
                        <h6 className="text-muted f-w-400">
                          {state.currentUser.bloodType}
                        </h6>
                      </div>
                    </div>
                    <br />

                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                      <div className="b-size">
                        {" "}
                        <EventNoteIcon />
                        Appointment
                      </div>
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        {data !== undefined
                          ? data.map((e) => {
                              return (
                                <div className="b-b-default">
                                  <h4 className="card-appo">Date: {e.date}</h4>
                                  <h4 className="card-appo">
                                    State:<b> {e.state}</b>
                                  </h4>
                                  <p className="card-appo">
                                    with Dr.
                                    {e.doctor.firstName} {e.doctor.lasttName}
                                  </p>
                                </div>
                              );
                            })
                          : "Wait"}
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;
