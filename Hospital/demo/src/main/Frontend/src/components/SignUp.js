// import { useDispatch, useSelector } from "react-redux";
// import { setLoginDetails } from "../reducers/Login/login";
// import { setWishList } from "../reducers/wishList/wishList";
// import { setCartUsers } from "../reducers/cart/cart";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { setUserName, setId } from "../reducers/Login/login";

import CloseIcon from "@material-ui/icons/Close";
import "./Login.css";

function SignUp() {
  // const navigate = useNavigate();
  // const state = useSelector((state) => {
  //   return {
  //     wishListUsers: state.wishList.wishListUsers,
  //     loginDetails: state.loginDetails.loginDetails,
  //     cartUsers: state.Cart.cartUsers,
  //   };
  // });
  // console.log(state.loginDetails);
  // const dispatch = useDispatch();
  // let firstName;
  // let lastName;
  // let userName;
  // let email;
  // let password;

  // const changeFirstName = (e) => {
  //   firstName = e.target.value;
  // };
  // const changeLastName = (e) => {
  //   lastName = e.target.value;
  // };
  // const changeUserName = (e) => {
  //   userName = e.target.value;
  // };
  // const changeEmail = (e) => {
  //   email = e.target.value;
  // };
  // const changePassword = (e) => {
  //   password = e.target.value;
  // };
  // const Cheack = (e) => {
  //   e.preventDefault();
  //   console.log("check");

  //   let x = 0;
  //   let y = 0;
  //   for (let i = 0; i < state.loginDetails.length; i++) {
  //     if (state.loginDetails[i].email == email) {
  //       x = 1;
  //       alert("The email is taken");
  //       break;
  //     }
  //     if (state.loginDetails[i].username == userName) {
  //       y = 1;
  //       alert("The username is taken");
  //       break;
  //     }
  //   }
  //   if (x == 0 && y == 0) {
  //     let newUser = {
  //       id: state.loginDetails.length + 1,
  //       email: email,
  //       username: userName,
  //       password: password,
  //       name: { firstname: firstName, lastname: lastName },
  //     };
  //     let arr = state.loginDetails.slice();
  //     console.log(arr);
  //     arr.push(newUser);
  //     console.log(arr);
  //     const action = setLoginDetails(arr);
  //     dispatch(action);
  //     let arrW = state.wishListUsers.slice();
  //     arrW.push({ id: state.loginDetails.length + 1, wishList: [] });
  //     const action2 = setWishList(arrW);
  //     dispatch(action2);
  //     const action4 = setUserName(userName);
  //     dispatch(action4);
  //     const action5 = setId(state.loginDetails.length + 1);
  //     dispatch(action5);
  //     let arrc = state.cartUsers.slice();
  //     arrc.push({ id: state.loginDetails.length + 1, cart: [] });
  //     const action3 = setCartUsers(arrc);
  //     dispatch(action3);
  //     console.log(state.loginDetails);
  //     navigate("/");
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
          <h2 className="title-b">Sign Up</h2>
          <div className="form-group">
            <label>first name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              // onChange={changeFirstName}
            />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              // onChange={changeLastName}
            />
          </div>
          <div className="form-group">
            <label>Email address </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              // onChange={changeEmail}
            />
          </div>
          <div className="form-group">
            <label>Phone number </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Phone number"
              // onChange={changeUserName}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              // onChange={changePassword}
            />
          </div>{" "}
          <br />
          <button type="submit" className="button-b">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered ?<Link to="/login">Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
