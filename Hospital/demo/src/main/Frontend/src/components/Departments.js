import "./Departments.css";
import { useNavigate } from "react-router-dom";
import { useEffect ,useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";


function Departments() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8080/departments/")
      .then((res) => {
        console.log(res.data[0].id);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const state = useSelector((state) => {
    return {
      isLoggedIn: state.usersReducer.isLoggedIn,
      UserType: state.usersReducer.UserType,
    };
  });

  return (
    <div>
      <div className="flex">
        <span>Hospital</span> Departments
      </div>

      <div className="container">
        <div className="row justify-content-around">
        {data !== undefined ? data.map((e)=>{
          return(<div className=" my-5 py-4 Sh-card" style={{ width: "18rem" }}>
                      <div className="card-body text-center">
                        <h4 className="card-title title-discription">{e.name}</h4>
                        <p className="lead">{e.description}</p>
                        {state.isLoggedIn && state.UserType === "Patient" && (<button type="button" className="btn" onClick={()=>{navigate(`/Department/${e.id}`);}}>
                          Book Now
                          <span className="fas fa-chevron-right"></span>
                        </button>)}
                      </div>
                    </div>)
          }) : "Wait"}
        </div>
      </div>
    </div>
  );
}

export default Departments;
