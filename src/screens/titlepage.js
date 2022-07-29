import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Titlepage = () => {
  return (
    <div class="container bg-secondary d-flex flex-column">
    <div class="row">
      <div class="col-sm-8 p-3">
        <Header/>
      </div>
      <div class="col-sm-4 p-3">
        <p>Right side icons?</p>
      </div>
    </div>
    <div class="row bgnd_img-ttlpg align-items-center">
         <div class="col text-center">
        <h3>Click the button to enter!</h3> <br></br>
        <div class="car_btn" ></div>
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
