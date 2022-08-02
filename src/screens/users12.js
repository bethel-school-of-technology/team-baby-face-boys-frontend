import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Preteen = () => {
  return (
    <div className="container-fluid  d-flex flex-column">
      <div className="row">
        <div className="col-sm p-3 text-center">
          <Navbar />
        </div>
      </div>
      <div className="row text-secondary  bgnd_img-12under align-items-center">
        <div className="game_tile" ></div>
      </div>
      <div className="row footer">
        <div className="col text-center p-3">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Preteen;
