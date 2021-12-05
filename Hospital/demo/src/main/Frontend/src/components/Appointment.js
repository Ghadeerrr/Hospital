import "./DepartmentDetails.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";

import Footer from "./Footer";
import Navbar from "./Navbar";

function Appointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();

  const state = useSelector((state) => {
  return {
    currentUser: state.usersReducer.currentUser,
  };
});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/appointment/doctor/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updatePatient = (e)=>{
    console.log(state.currentUser.id);
    console.log(e.date);
    console.log(e.id);
    const Appointment_id = e.id;
    const patient_id = state.currentUser.id;

    addPatient(Appointment_id,patient_id);
      
  }

  const addPatient = (Appointment_id,patient_id)=>{
    axios
    .put(`http://localhost:8080/appointment/${Appointment_id}/patient/${patient_id}`)
    .then((res) => {
      console.log(res.data);
      updateState(Appointment_id);

    })
    .catch((err) => {
      console.log(err);
    });

  }

  const updateState= (Appointment_id)=>{
    axios
    .put(`http://localhost:8080/appointment/${Appointment_id}`,{
      state:"Waiting"
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  
  return (
    <>
      <Navbar />
      <div className="flex"></div>
      <div className="container">
        <div className="row justify-content-around">
          {data !== undefined
            ? data.map((e) => {
              if(e.state === "Available"){
                return (
                  <div
                    className=" my-5 py-4 Sh-card"
                    style={{ width: "18rem" }}
                  >
                    <div className="card-body text-center">
                      <h4 className="card-title title-discription"> The appointment </h4>
                      <h4 className="card-title title-discription"> {Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10) } </h4>
                      <h6>Date : {e.date}</h6>
                      <h6>Time : {Math.floor(Math.random() * 24)+": "+Math.floor(Math.random() * 60)+" AM"} </h6>
                      <p className="lead">
                        <button type="button" className="btn"  onClick={()=>{updatePatient(e)}}>
                          {e.state}
                        </button>
                      </p>
                    </div>
                  </div>
                );}
              })
            : "Wait"}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Appointment;
