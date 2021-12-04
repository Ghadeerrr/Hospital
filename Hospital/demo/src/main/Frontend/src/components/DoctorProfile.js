import "./Profile.css";
import { useEffect ,useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import immg from "./image/un.png"
import { useNavigate } from "react-router-dom";

function DoctorProfile(){

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

    return(<>
      <div className="background">
        <div className="container-M">
          {/* <img src={immg} alt="" width= "100px" /> */}
          <h1>DR. {state.currentUser.firstName} {state.currentUser.lasttName}</h1>
          <p>Phone Number: {state.currentUser.phoneNumber}</p>
          <p>Gender: {state.currentUser.gender}</p>

          <h4>{state.currentUser.department.name}</h4>
          <p>Description: {state.currentUser.department.description}</p>

          <div>
              <h4>Appointments:</h4>
          {data !== undefined ? data.map((e)=>{
          return(<div className="Sh-card">
                      <div className="text-center">
                        <h4 className="card-appo">Date: {e.date}</h4><h4 className="card-appo">State: {e.state}</h4>
                        <p className="card-appo">with Patient: {e.patient.firstName} {e.patient.lasttName}</p>
                        <p className="card-appo">Age: {e.patient.age}, Blood Type: {e.patient.bloodType}</p>
                      </div>
                    </div>)
          }) : "Wait"}
          </div>
          <button className="button-b" onClick={()=>{navigate("/")}}>Back</button>
        </div>
    </div>
    </>);
}

export default DoctorProfile;