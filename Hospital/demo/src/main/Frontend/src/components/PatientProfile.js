import "./Profile.css";
import { useEffect ,useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import immg from "./image/un.png"
import { useNavigate } from "react-router-dom";

function PatientProfile(){

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

    return(<>
      <div className="background">
        <div className="container-M">
          {/* <img src={immg} alt="" width= "100px" /> */}
          <h1>{state.currentUser.firstName} {state.currentUser.lasttName}</h1>
          <p>Phone Number: {state.currentUser.phoneNumber}</p>
          <p>Gender: {state.currentUser.gender}</p>
          <p>Age: {state.currentUser.age}</p>
          <p>blood Type: {state.currentUser.bloodType}</p>
          <div>
              <h4>Appointments:</h4>
          {data !== undefined ? data.map((e)=>{
          return(<div className="Sh-card">
                      <div className="text-center">
                        <h4 className="card-appo">Date: {e.date}</h4><h4 className="card-appo">State: {e.state}</h4>
                        <p className="card-appo">with Dr.{e.doctor.firstName} {e.doctor.lasttName}</p>

                      </div>
                    </div>)
          }) : "Wait"}
          </div>
          <button className="button-b" onClick={()=>{navigate("/")}}>Back</button>

        </div>
    </div>
    </>);
}

export default PatientProfile;