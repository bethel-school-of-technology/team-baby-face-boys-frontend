import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Titlepage = () => {
  return (
    <div class="container-fluid  bg-primary d-flex flex-column">
    <div class="row">
      <div class="col-sm p-3 text-center">
        <Header/>
      </div>{/* 
      <div class="col-sm-4 p-3">
        <p>Right side icons?</p>
      </div> */}
    </div>
    <div class="row text-secondary bgnd_img-ttlpg align-items-center ">
         <div class="col text-center">
        <h3><strong>Click The Logo To Enter!</strong></h3> <br></br>
        <Link to='/account'><div class="car_btn  mx-auto d-block" ></div></Link>
      </div>
  </div>
    <div class="row footer">
      <div class="col text-center p-3">
        <Footer/>
        </div>
    </div>
  </div>
  );
};

export default Titlepage;
