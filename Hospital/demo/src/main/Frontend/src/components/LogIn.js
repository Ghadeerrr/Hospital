import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { login, UserType } from "../reducers/Login/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import PersonPinIcon from "@material-ui/icons/PersonPin";

import "./components.css";
import "./Login.css";
function LogIn() {
  const [userinfo, setUserinfo] = useState("");
  const [password, setPassword] = useState("");
  // const [toggle, setToggle] = useState(false);
  const [patients, setpatients] = useState();
  const [doctors, setdoctors] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      isLoggedIn: state.usersReducer.isLoggedIn,
      UserType: state.usersReducer.UserType,
    };
  });

  const [Category, setCategory] = useState();
  const byCategory = (e) => {
    setCategory(e.target.value);
  };

  const usernameValue = (e) => {
    setUserinfo(e.target.value);
  };
  const passwordValue = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/patients")
      .then((res) => {
        console.log(res.data);
        setpatients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:8080/doctors")
      .then((res) => {
        console.log(res.data);
        setdoctors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getUser = () => {
    const theuser = {
      username: userinfo,
      password: password,
    };

    if (Category === "Patient") {
      patients.forEach((e) => {
        if (
          e.phoneNumber === theuser.username &&
          e.password === theuser.password
        ) {
          console.log("Hi Patient ;)");
          const action = login(e);
          const action2 = UserType(Category);
          dispatch(action);
          dispatch(action2);
          navigate("/");
        }
      });
    } else if (Category === "Doctor") {
      doctors.forEach((e) => {
        if (
          e.phoneNumber === theuser.username &&
          e.password === theuser.password
        ) {
          console.log("Hi Doctor ;)");
          const action = login(e);
          const action2 = UserType(Category);
          dispatch(action);
          dispatch(action2);
          navigate("/");
        }
      });
    }
  };

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
              onChange={usernameValue}
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
              onChange={passwordValue}
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <label>You Are: </label>
            <label>
              <input
                type="radio"
                onChange={byCategory}
                name="Category"
                value="Patient"
              />
              Patient
            </label>
            <label>
              <input
                type="radio"
                onChange={byCategory}
                name="Category"
                value="Doctor"
              />
              Doctor
            </label>
          </div>
          <button
            type="button"
            onClick={() => {
              getUser();
            }}
            className="button-b"
          >
            Login
          </button>
          <br />
          <p className="forgot-password text-right">
            You don't have an account ?{" "}
            <a
              href
              className="navig"
              onClick={() => {
                navigate("/SignUp");
              }}
            >
              {" "}
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
