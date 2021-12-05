import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import "./Login.css";

function SignUp() {
  const [patients, setpatients] = useState();
  const [doctors, setdoctors] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [category, setCategory] = useState();
  const [bloodType, setBloodType] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [department, setDepartment] = useState();
  

  const navigate = useNavigate();

  let departmentId;


  const changeFirstName = (e) => {
    setFirstName(e.target.value);
    console.log(firstName)
  };
  const changeLastName = (e) => {
    setLastName( e.target.value);
    console.log(lastName)
  };
  const changePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
    console.log(phoneNumber)
  };
  const changeAge = (e) => {
    setAge(e.target.value)
  };
  const changePassword = (e) => {
     setPassword( e.target.value)
    console.log(password)
  };

  const bloodTypeChange = (e) => {
    setBloodType( e.target.value)
    console.log(bloodType)
  };

  
  const byCategory = (e) => {
    setCategory( e.target.value)
    
    console.log(category)

  };

  const genderChange = (e) => {
    setGender(e.target.value)
    console.log(gender)

  };


  const departmentChange = (e) => {
     setDepartment(e.target.value)
    if(department ==="Ophthalmology"){
      departmentId=1
    }
    if(department ==="Pediatrics"){
      departmentId=2
    }
    if(department ==="Dentists"){
      departmentId=3
    }
    if(department ==="Internal medicine "){
      departmentId=4
    }
    if(department ==="Ophthalmology "){
      departmentId=5
    }
    console.log(department)

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
      phonenumber: phoneNumber,
      password: password,
      
    };
    console.log("the user  want add ")
    console.log(theuser)
    let flag=0
    let flag2=0
    if(category === "Patient"){
      patients.forEach((e) => {
        if (e.phoneNumber === theuser.phonenumber) {
           flag=1
           console.log("i am in if i geted match")
        }
      });
      if(flag===0){
        axios
        .post("http://localhost:8080/patients",{
        firstName :""+firstName+"",
        lasttName :""+lastName+"",
        age:age,
        bloodType:""+bloodType+"",
        phoneNumber:""+phoneNumber+"",
        password:""+password+"" ,
        gender:gender})
        .then((res) => {
          console.log(res.data);
                  alert("You have been successfully registered, you can log in now")
        navigate("/Login");
        })
        .catch((err) => {
          console.log(err);
        });

      }
      else if(flag===1){
        alert("Sorry, the phone number is taken ")
        
      }
      
    }
    else if(category === "Doctor"){
      doctors.forEach((e) => {
        if (e.phoneNumber === theuser.phonenumber) {
           flag2=1
           console.log("i am in if i geted match")
        }
      });
      if(flag2===0){
        axios
        .post("http://localhost:8080/doctors",{
          doctor:{
            firstName :""+firstName+"",
            lasttName :""+lastName+"",
            gender:gender,
            img: "/image/hernandezparra-jennifer.jpg",
            phoneNumber:""+phoneNumber+"",
            password:""+password+"" ,
            },
            departmentId:departmentId})
        .then((res) => {
          console.log(res.data);
                  alert("You have been successfully registered, you can log in now")
        navigate("/Login");
        })
        .catch((err) => {
          console.log(err);
        });
        
      }
      else if(flag2===1){
        alert("Sorry, the phone number is taken ")
        
      }
    }}
    
  



  return (
    <div className="background">
      <form>
        <div className="container-S">
          <div className="Icon-x-m">
            <Link to="/">
              <CloseIcon className="Icon-x" />
            </Link>
          </div>
          <h2 className="title-b">Sign Up</h2>
          <div className="form-group two-input">
            <label>First Name
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={changeFirstName}
            /></label>
            <label>Last Name
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={changeLastName}
            /></label>
          </div>
          <div className="form-group two-input">
          <label>Phone Number 
            <input
              type="text"
              className="form-control"
              placeholder="000-000-0000"
              onChange={changePhoneNumber}
            /></label>
            <label>Age  
            <input
              type="text"
              className="form-control"
              placeholder="Your age"
              onChange={changeAge}
            /></label>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={changePassword}
            />
          </div>
          <div className="form-group">
            <label>Blood type</label>
            <select onClick={bloodTypeChange} >
              <option onSelect={bloodTypeChange}>A+</option>
              <option onClick={bloodTypeChange}>A-</option>
              <option onSelect={bloodTypeChange}>B+</option>
              <option onSelect={bloodTypeChange}>B-</option>
              <option onSelect={bloodTypeChange}>O-</option>
              <option onSelect={bloodTypeChange}>O+</option>
            </select>
          </div>

          <div className="form-group">
          <label>Gender: </label>
          <label>
            <input
              type="radio"
              onChange={genderChange}
              name="gender"
              value="Fmale"
            />
            Fmale
          </label>
          <label>
            <input
              type="radio"
              onChange={genderChange}
              name="gender"
              value="Male"
            />
            Male
          </label>
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
          {
            category === "Doctor" ?
            <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter department"
              onChange={departmentChange}
            />
          </div>
            
            :""
          }
                    <br />
          <button type="button" onClick={() => { getUser(); }}  className="button-b">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered ?<Link to="/login"> Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
