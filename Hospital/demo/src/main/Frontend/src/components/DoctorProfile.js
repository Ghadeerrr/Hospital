import "./Login.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PersonIcon from "@material-ui/icons/Person";

import CancelIcon from "@material-ui/icons/Cancel";

function DoctorProfile() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [disp, setdisp] = useState(false);
  const [UpdatedDate, setUpdatedDate] = useState();

  const state = useSelector((state) => {
    return {
      currentUser: state.usersReducer.currentUser,
    };
  });

  useEffect(() => {
    getAppointment();
  }, []);

  const getAppointment = () => {
    axios
      .get(`http://localhost:8080/appointment/doctor/${state.currentUser.id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const accepted = (e) => {
    const Appointment_id = e.id;
    console.log(e.date);
    console.log(e.state);
    axios
      .put(`http://localhost:8080/appointment/${Appointment_id}`, {
        state: "Done",
      })
      .then((res) => {
        console.log(res.data.state);
        getAppointment();
      });
  };

  const cancelled = (e) => {
    const Appointment_id = e.id;
    console.log(e.date);
    console.log(e.state);
    axios
      .put(`http://localhost:8080/appointment/${Appointment_id}`, {
        state: "cancelled",
      })
      .then((res) => {
        console.log(res.data.state);
        getAppointment();
      });
  };

  const DateValue = (e) => {
    setUpdatedDate(e.target.value);
  };

  const CreateAppointment = () => {
    console.log(UpdatedDate);
    axios
      .post(`http://localhost:8080/appointment`, {
        date: UpdatedDate,
        state: "Available",
        doctor: {
          id: state.currentUser.id,
        },
      })
      .then((res) => {
        console.log(res.data.state);
        getAppointment();
      });
  };

  return (
    <div className="page-content page-container" id="page-content">
      <div
        className="row d-flex justify-content-center"
        style={{ padding: "30px 0 30px 0" }}
      >
        <div className="col-xl-60 col-md-9">
          <div className="card user-card-full">
            <div className="row m-l-0 m-r-0">
              <div className="col-sm-4 bg-c-lite-green user-profile">
                <div className="card-block text-center text-white">
                  <div>
                    <Link to="/">
                      <ArrowBackIcon className="icon-xx" />
                    </Link>
                  </div>
                  {/* <div className="m-b-25">
                    <AccountBoxIcon className="icon-z" />
                  </div> */}
                  {/* <h6 className="f-w">
                    Dr. {state.currentUser.firstName}{" "}
                    {state.currentUser.lasttName}
                  </h6> */}

                  <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="card-block">
                  <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                    <PersonIcon />
                    Personal Information
                  </h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Name:</p>
                      <h6 className="text-muted f-w-400">
                        Dr. {state.currentUser.firstName}{" "}
                        {state.currentUser.lasttName}
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Phone Number:</p>
                      <h6 className="text-muted f-w-400">
                        {state.currentUser.phoneNumber}
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Gender:</p>
                      <h6 className="text-muted f-w-400">
                        {state.currentUser.gender}
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Department:</p>
                      <h6 className="text-muted f-w-400">
                        {state.currentUser.department.name}
                      </h6>
                    </div>
                  </div> 
                  <br />
                  <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                    Description:
                  </h6>
                  <div className="row">
                    <div>
                      <p className="m-b-5 f-w-400">
                        {state.currentUser.department.description}
                      </p>
                    </div>
                  </div>
                  <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                    <EventNoteIcon />
                    Appointment
                  </h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Active</p>
                      {data !== undefined
                        ? data.map((e) => {
                            if (e.patient !== null) {
                              return (
                                <div className="b-b-default">
                                  <div className="row">
                                    <div className="col-8">
                                      <h4 className="card-appo">
                                        Date: {e.date}{" "}
                                      </h4>
                                    </div>
                                    <div className="col">
                                      <CheckCircleIcon
                                        className="icon-m"
                                        onClick={() => {
                                          accepted(e);
                                        }}
                                      />{" "}
                                      <CancelIcon
                                        className="icon-n"
                                        onClick={() => {
                                          cancelled(e);
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <h4 className="card-appo">
                                    State: {e.state}
                                  </h4>
                                  <h4 className="card-appo">
                                    with Patient: {e.patient.firstName}{" "}
                                    {e.patient.lasttName}
                                  </h4>
                                  <h4 className="card-appo">
                                    Age: {e.patient.age}, Blood Type:{" "}
                                    {e.patient.bloodType}
                                  </h4>
                                </div>
                              );
                            }
                          })
                        : "Wait"}
                    </div>

                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-4">
                          <p className="m-b-10 f-w-600">
                            Inactive{" "}
                            <AddCircleIcon
                              className="icon-m"
                              onClick={() => {
                                if (disp == false) {
                                  setdisp(true);
                                } else {
                                  setdisp(false);
                                }
                              }}
                            />
                          </p>
                        </div>
                        <div className="col-8">
                          {disp ? (
                            <label className="lable-date">
                              Date:{" "}
                              <input
                                type="text"
                                className="date-input"
                                placeholder="Date : YYYY-MM-DD"
                                onChange={DateValue}
                              />{" "}
                              <CheckCircleIcon
                                className="icon-m"
                                onClick={() => {
                                  CreateAppointment();
                                }}
                              />
                            </label>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      {data !== undefined
                        ? data.map((e) => {
                            if (e.patient == null) {
                              return (
                                <div className="b-b-default">
                                  <h4 className="card-appo">Date: {e.date}</h4>
                                  <h4 className="card-appo">
                                    State: {e.state}
                                  </h4>
                                </div>
                              );
                            }
                          })
                        : "Wait"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
