import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../reducers/Login/action";
import { useDispatch } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.usersReducer.isLoggedIn,
      UserType: state.usersReducer.UserType,
    };
  });

  return (
    <div className="header1">
      <div className="header">
        <div className="header-option"></div>
        <h5 className="text" onClick={()=>{navigate("/")}} style={{cursor: "pointer"}}>
          H<span>o</span>spital
        </h5>
        <div className="space"></div>
        <div className="nav-2">
          {state.isLoggedIn && state.UserType === "Doctor" && (
            <Link to="/DoctorProfile" className="link">
              Your Profile
            </Link>
          )}
        </div>
        <div className="nav-2">
          {state.isLoggedIn && state.UserType === "Patient" && (
            <Link to="/PatientProfile" className="link">
              Your Profile
            </Link>
          )}
        </div>
        <div className="nav-2">
          {state.isLoggedIn && (
            <Link
              to="/"
              className="link"
              onClick={() => {
                const action = logout();
                dispatch(action);
              }}
            >
              <ExitToAppIcon className="icon-logout" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
