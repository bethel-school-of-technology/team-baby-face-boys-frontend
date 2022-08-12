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
    <div className="container-fluid  bg-primary d-flex flex-column">
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
              className="game_thumb img-fluid rounded float-left mt-5 mx-3"
              src={require("../images/game_thumbs/breakout.jpg")}
            />
            <img
              className="game_thumb img-fluid rounded float-left mt-5 mx-3"
              src={require("../images/game_thumbs/cnnct4.jpg")}
            />
            <img
              className="game_thumb img-fluid rounded float-left mt-5 mx-3"
              src={require("../images/game_thumbs/memory.jpg")}
            />
            <img
              className="game_thumb img-fluid rounded float-left mt-5 mx-3"
              src={require("../images/game_thumbs/rockpaperscissors.jpg")}
            />
            <img
              className="game_thumb img-fluid rounded float-left mt-5 mx-3"
              src={require("../images/game_thumbs/whackamole.jpg")}
            />
          </div>
        </div>
        <div>
            <button className="openBreakoutBtn" onClick={() => { setOpenBreakout(true); }}>Breakout</button>
            {openBreakout && <BreakoutModal closeBreakout={setOpenBreakout} />}
          </div>
          <div>
            <button className="openConnect4Btn" onClick={() => { setOpenConnect4(true); }}>Connect 4</button>
            {openConnect4 && <Connect4Modal closeConnect4={setOpenConnect4} />}
          </div>
          <div>
            <button className="openMemoryBtn" onClick={() => { setOpenMemory(true); }}>Memory</button>
            {openMemory && <MemoryModal closeMemory={setOpenMemory} />}
          </div>
          <div>
            <button className="openRPSBtn" onClick={() => { setOpenRPS(true); }}>Rock, Paper, Scissors</button>
            {openRPS && <RPSModal closeRPS={setOpenRPS} />}
          </div>
          <div>
            <button className="openWAMBtn" onClick={() => { setOpenWAM(true); }}>Whack-A-Mole</button>
            {openWAM && <WAMModal closeWAM={setOpenWAM} />}
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
