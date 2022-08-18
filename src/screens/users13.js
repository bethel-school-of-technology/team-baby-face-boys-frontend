import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import BreakoutModal from "../games/breakoutModal";
import Connect4Modal from "../games/connect4Modal";
import MemoryModal from "../games/memoryModal";
import RPSModal from "../games/rpsModal";
import WAMModal from "../games/wamModal";

const Teen = () => {
  const [openBreakout, setOpenBreakout] = useState(false);
  const [openConnect4, setOpenConnect4] = useState(false);
  const [openMemory, setOpenMemory] = useState(false);
  const [openRPS, setOpenRPS] = useState(false);
  const [openWAM, setOpenWAM] = useState(false);

  return (
    <div className="container-fluid descroller bg-primary d-flex flex-column">
      <div className="row">
        <div className="col-sm p-3 text-center">
          <Navbar />
        </div>
      </div>
      {/* the game name Should be in a mostly transparent colored stripe across the top?*/}
      {/* <div className="game_name"> </div>*/}
      <div className="container text-secondary  bgnd_img-13up align-items-center">
        <div className="row">
          <div className="col img_grid">
            <img
              onClick={() => {
                setOpenBreakout(true);
              }}
              className="game_thumb img-fluid rounded float-left mt-5 mx-3"
              src={require("../images/game_thumbs/breakout.jpg")}
            />
            {openBreakout && <BreakoutModal closeBreakout={setOpenBreakout} />}
            <img
              onClick={() => {
                setOpenConnect4(true);
              }}
              className="game_thumb img-fluid rounded float-left mt-5 mx-3"
              src={require("../images/game_thumbs/cnnct4.jpg")}
            />
            {openConnect4 && <Connect4Modal closeConnect4={setOpenConnect4} />}
            {/* 
            <img
              onClick={() => { setOpenMemory(true); }}
              className="game_thumb img-fluid rounded float-left mt-5 mx-3"
              src={require("../images/game_thumbs/memory.jpg")}
            />
            {openMemory && <MemoryModal closeMemory={setOpenMemory} />} */}
            <img
              onClick={() => {
                setOpenRPS(true);
              }}
              className="game_thumb img-fluid rounded float-left mt-5 mx-3"
              src={require("../images/game_thumbs/rockpaperscissors.jpg")}
            />
            {openRPS && <RPSModal closeRPS={setOpenRPS} />}
            {/* 
            <img
              onClick={() => { setOpenWAM(true); }}
              className="game_thumb img-fluid rounded float-left mt-5 mx-3"
              src={require("../images/game_thumbs/whackamole.jpg")}
            />
            {openWAM && <WAMModal closeWAM={setOpenWAM} />} */}
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

export default Teen;
