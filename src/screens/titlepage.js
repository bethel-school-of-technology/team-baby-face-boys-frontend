import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import { Link } from "react-router-dom";

const Titlepage = () => {
  return (
    <div className="container-fluid descroller bg-primary d-flex flex-column">
    <div className="row">
      <div className="col-sm p-3 text-center">
        <Header/>
      </div>{/* 
      <div className="col-sm-4 p-3">
        <p>Right side icons?</p>
      </div> */}
    </div>
    <div className="row text-primary bgnd_img-ttlpg align-items-center ">
         <div className="col text-center">
        <Link to='/account'><div className="carrot_btn  mx-auto d-block" ></div></Link>
        <p className="enter-text">Chomp that carrot!</p>
      </div>
  </div>
    <div className="row footer">
      <div className="col text-center p-3 ">
    
        <Footer/>
        
        </div>
    </div>
  </div>
  );
};

export default Titlepage;
