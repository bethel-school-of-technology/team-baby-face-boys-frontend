import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Dadjokes from "../components/dadjokes";

import { Link } from "react-router-dom";

const Titlepage = () => {
  return (
    <div className="container-fluid  bg-primary d-flex flex-column">
    <div className="row">
      <div className="col-sm p-3 text-center">
        <Header/>
      </div>{/* 
      <div className="col-sm-4 p-3">
        <p>Right side icons?</p>
      </div> */}
    </div>
    <div className="row text-secondary bgnd_img-ttlpg align-items-center ">
         <div className="col text-center">
        <h3><strong>Click The Logo To Enter!</strong></h3> <br></br>
        <Link to='/account'><div className="car_btn  mx-auto d-block" ></div></Link>
      </div>
  </div>
    <div className="row footer">
      <div className="col text-center p-3">
      <script src="./" ></script>
        <Footer/>
        <Dadjokes/>
        </div>
    </div>
  </div>
  );
};

export default Titlepage;
