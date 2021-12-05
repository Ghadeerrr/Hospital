import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../reducers/Login/action";
import { useDispatch } from "react-redux";

import "./Navbar.css";

function Navbar() {
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
        <h5 className="text">
          H<span>o</span>spital
        </h5>
        <div className="space"></div>
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
              Log Out
            </Link>
          )}
        </div>
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
        {/* <div className="nav-2">
          <Link to="/" className="link">
            Departments
          </Link>
        </div>

        <div className="nav-2">
          <Link to="/" className="link">
            Doctors
          </Link>
        </div>
        <div className="nav-2">
          <Link to="/" className="link">
            Contact us
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
