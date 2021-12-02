import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import { setUserName, setId } from "../reducers/Login/login";
import CloseIcon from "@material-ui/icons/Close";

import PersonPinIcon from "@material-ui/icons/PersonPin";

import "./components.css";
import "./Login.css";
function LogIn() {
  // const dispatch = useDispatch();
  // const [userinfo, setUserinfo] = useState("");
  // const [password, setPassword] = useState("");
  // const [toggle, setToggle] = useState(false);
  // const navigate = useNavigate();

  // const state = useSelector((state) => {
  //   return {
  //     loginDetails: state.loginDetails.loginDetails,
  //   };
  // });
  // console.log(state.loginDetails);

  // const usernameOrEmail = (e) => {
  //   setUserinfo(e.target.value);
  // };
  // const passwordValue = (e) => {
  //   setPassword(e.target.value);
  // };
  // const checkLogin = (e) => {
  //   e.preventDefault();
  //   if (userinfo.includes("@")) {
  //     const foundUser = state.loginDetails.find(
  //       (element) => element.email == userinfo
  //     );
  //     const foundPassword = state.loginDetails.find(
  //       (element) => element.password == password
  //     );
  //     if (foundUser && foundPassword) {
  //       console.log("user found");
  //       state.loginDetails.map((ele) => {
  //         if (ele.email == userinfo) {
  //           const action1 = setUserName(ele.username);
  //           dispatch(action1);
  //           const action2 = setId(ele.id);
  //           dispatch(action2);
  //           console.log("id is" + ele.id);
  //           navigate("/");
  //         }
  //       });
  //     } else {
  //       setToggle(true);
  //     }
  //   } else {
  //     const foundUser = state.loginDetails.find(
  //       (element) => element.username == userinfo
  //     );
  //     const foundPassword = state.loginDetails.find(
  //       (element) => element.password == password
  //     );
  //     if (foundUser && foundPassword) {
  //       console.log("user found");
  //       const action1 = setUserName(userinfo);
  //       dispatch(action1);
  //       state.loginDetails.map((ele) => {
  //         if (ele.username == userinfo) {
  //           const action2 = setId(ele.id);
  //           dispatch(action2);
  //         }
  //       });
  //       navigate("/");
  //     } else {
  //       setToggle(true);
  //     }
  //   }
  // };

  return (
    <div className="background">
      <form>
        <div className="container-S">
          <div className="Icon-x-m">
            <Link to="/">
              <CloseIcon className="Icon-x" />
            </Link>
          </div>
          <PersonPinIcon className="icon-log" />
          <h2 className="title-b">Log In</h2>
          <div className="form-group">
            <label>
              <b>Phone number</b>
            </label>
            <input
              type="text"
              // onChange={usernameOrEmail}
              className="form-control"
              placeholder="Enter Phone number"
            />
          </div>
          <div className="form-group">
            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              // onChange={passwordValue}
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          {/* {toggle && ( */}
          <label>
            <b className="b-login">phone number or password is wrong</b>
          </label>
          {/* )} */}
          <br />
          <button
            type="submit"
            // onClick={(e) => checkLogin(e)}
            className="button-b"
          >
            Login
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
          <p className="forgot-password text-right">
            You don't have an account ?<a href="/SignUp">Sign Up</a>
          </p>{" "}
        </div>
      </form>
    </div>
  );
}

export default LogIn;
