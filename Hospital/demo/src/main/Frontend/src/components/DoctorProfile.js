import "./Login.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import immg from "./image/un.png";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import CancelIcon from "@material-ui/icons/Cancel";

function DoctorProfile() {
  const navigate = useNavigate();
  const [data, setData] = useState();

  const state = useSelector((state) => {
    return {
      currentUser: state.usersReducer.currentUser,
    };
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/appointment/doctor/${state.currentUser.id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // return(<>
  //   <div className="background">
  //     <div className="container-M">
  //       {/* <img src={immg} alt="" width= "100px" /> */}
  //       <h1>DR. {state.currentUser.firstName} {state.currentUser.lasttName}</h1>
  //       <p>Phone Number: {state.currentUser.phoneNumber}</p>
  //       <p>Gender: {state.currentUser.gender}</p>

  //       <h4>{state.currentUser.department.name}</h4>
  //       <p>Description: {state.currentUser.department.description}</p>

  //       <div>
  //           <h4>Appointments:</h4>
  //       {data !== undefined ? data.map((e)=>{
  //         if(e.patient !==  null){
  //       return(<div className="Sh-card">
  //                   <div className="text-center">
  //                     <h4 className="card-appo">Date: {e.date}</h4><h4 className="card-appo">State: {e.state}</h4>
  //                     <p className="card-appo">with Patient: {e.patient.firstName} {e.patient.lasttName}</p>
  //                     <p className="card-appo">Age: {e.patient.age}, Blood Type: {e.patient.bloodType}</p>
  //                   </div>
  //                 </div>)}
  //       }) : "Wait"}
  //       </div>
  //       <button className="button-b" onClick={()=>{navigate("/")}}>Back</button>
  //     </div>
  // </div>
  // </>);

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-60 col-md-9">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                      <AccountBoxIcon className="icon-z" />
                    </div>
                    <h6 className="f-w-600">
                      DR. {state.currentUser.firstName}{" "}
                      {state.currentUser.lasttName}
                    </h6>

                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Personal Information
                    </h6>
                    <div className="row">
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
                      Appointment
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Available</p>
                        {data !== undefined
                          ? data.map((e) => {
                              if (e.patient !== null) {
                                return (
                                  <div>
                                    <div>
                                      <h4 className="card-appo">
                                        Date: {e.date}{" "}
                                        <CheckCircleIcon className="icon-m" />{" "}
                                        <CancelIcon className="icon-n" />
                                      </h4>
                                      <h4 className="card-appo">
                                        State: {e.state}
                                      </h4>
                                      <p className="card-appo">
                                        with Patient: {e.patient.firstName}{" "}
                                        {e.patient.lasttName}
                                      </p>
                                      <p className="card-appo">
                                        Age: {e.patient.age}, Blood Type:{" "}
                                        {e.patient.bloodType}
                                      </p>
                                    </div>
                                  </div>
                                );
                              }
                            })
                          : "Wait"}
                      </div>

                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">
                          Unavailable <AddCircleIcon className="icon-m" />
                        </p>
                        <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                      </div>
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
