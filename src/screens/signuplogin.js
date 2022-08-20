import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";

const Signuplogin = () => {
  let baseUrl = "http://localhost:3000/users";

  let navigate = useNavigate();

  const [user, setUser] = useState({
    gamerID: "",
    password: "",
  });

  // const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //     const userData = JSON.parse(localStorage.getItem(data.gamerID));
  //     if (userData) { // getItem can return actual value or null
  //         if (userData.password === data.password) {
  //             console.log(userData.password + " You Are Successfully Logged In");
  //         } else {
  //             console.log("GamerID or Password is not matching with our record");
  //         }
  //     } else {
  //         console.log("GamerID or Password is not matching with our record");
  //     }
  // };

  const handleChange = (event) => {
    setUser((preValue) => {
      return {
        ...preValue,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // axios.post("http://localhost:3000/User", user).then(response => {
    //     console.log(response);
    //     // TODO store response in localstorage
    //     navigate("/profile")
    // })

    axios.post("http://localhost:3000/login", user ).then((response) => {
      console.log(response.data);

    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data.user));
     navigate("/profile");
    });
  };

  return (
    <div className="container-fluid login_page bg-primary d-flex flex-column">
      <div className="row">
        <div className="col-sm p-3 text-center">
          <Header />
        </div>
        {/* 
          <div className="col-sm-4 p-3">
            <p>Right side icons?</p>
          </div> */}
      </div>
      <div className="row text-secondary bgnd_img-signup_login align-items-center ">
            <div className=" col text-center ">
        <div className="fuzzy_glass mx-auto">

          <form className="Login pt-4" onSubmit={handleSubmit}>
          <h4 className="title p-3">Please, Login</h4>
            {/* <input type="gamerID" {...register("gamerID", { required: true })} /> */}
            <input className="purple_glow_grntext my-2" onChange={handleChange} name="gamerID" />
            <br></br>
            {/* {errors.email && <span >*Email* is mandatory </span>}<br></br> */}
            {/* <input type="password" {...register("password")} /><br></br> */}

            <input className="purple_glow_grntext my-2" onChange={handleChange} name="password" />
            <br></br>

            {/* <Link to='/profile'><input type={"submit"} /></Link> */}
            <button className="my-4 login_btn"  type="submit">Login </button>
          <div>
            <Link to="/registration">
              <button className="my-2  signup_btn" >Sign Up</button>
            </Link>
          </div>
          </form>
          <Link to="/account">
            <div className="mx-auto d-block"></div>
          </Link>
        </div></div>
      </div>
      <div className="row footer">
        <div className="col text-center p-3">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Signuplogin;
