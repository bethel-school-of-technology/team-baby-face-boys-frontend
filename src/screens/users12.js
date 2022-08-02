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
      {/* Should the game go in a frame with the game Name above it or
          should the game name be inside the frame with the game?
          If so, should the game name be in a mostly transparent colored stripe across the top?*/}
      {/* <div className="game_name"> </div>*/}
      <div className="container text-secondary  bgnd_img-12under align-items-center">
             
        <div className="row">
          <div className="col" >
          <div className="game_tile rounded float-left mt-5 mx-3 "></div>
          <div className="game_tile rounded float-left mt-5 mx-3 "></div>
          <div className="game_tile rounded float-left mt-5 mx-3 "></div>
          <div className="game_tile rounded float-left mt-5 mx-3 "></div>
          <div className="game_tile rounded float-left mt-5 mx-3 "></div>
          </div>
        </div>
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
