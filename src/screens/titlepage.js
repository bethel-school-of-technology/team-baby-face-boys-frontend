import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Titlepage = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <Header />
        </div>
        <div class="col-sm-4">
          <h1>Right side icons</h1>
        </div>
      </div>
      <div class="row bgnd_img align-items-center">
        <div class="col text-center">
          <h3>Click the button to enter!</h3>
          <div class="col ">
            <h1>Title Page Placeholder</h1>
          </div>
        </div>
      </div>
      <div class="row footer">
        <div class="col text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Titlepage;
