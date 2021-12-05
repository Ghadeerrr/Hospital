import "./DepartmentDetails.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import Footer from "./Footer";
import Navbar from "./Navbar";

function Appointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
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

  return (
    <>
      <Navbar />
      <div className="flex"></div>
      <div className="container">
        <div className="row justify-content-around">
          {data !== undefined
            ? data.map((e) => {
                return (
                  <div
                    className=" my-5 py-4 Sh-card"
                    style={{ width: "18rem" }}
                  >
                    <div className="card-body text-center">
                      <h4 className="card-title title-discription">{e.date}</h4>
                      <p className="lead">
                        {" "}
                        <button type="button" className="btn">
                          {e.state}
                        </button>
                      </p>
                    </div>
                  </div>
                );
              })
            : "Wait"}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Appointment;
