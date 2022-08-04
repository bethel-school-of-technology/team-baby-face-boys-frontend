import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Leaderboard = () => {
  return (
    <div className="container-fluid  d-flex flex-column">
      <div className="row">
        <div className="col-sm p-3 text-center">
          <Navbar />
        </div>
      </div>
      <div className="container  scoreboard"><div className="table_holder" >
      <table class="table table-striped">
    <thead>
        
      <tr>
        <th>Username</th>
        <th>Game</th>
        <th>Hi score</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>fripperybonkers</td>
        <td>Whack-A-Mole</td>
        <td>863</td>
      </tr>
      <tr>
        <td>doodadjumbo</td>
        <td>Memory</td>
        <td>185</td>
      </tr>
      <tr>
        <td>poofmumu</td>
        <td>Breakout</td>
        <td>2,773</td>
      </tr>
      <tr>
        <td>huzzahmeow</td>
        <td>Connect 4</td>
        <td>Fifty Straight Wins!</td>
      </tr>
    </tbody>
  </table></div>
      </div>
      <div className="row footer">
        <div className="col text-center p-3">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
