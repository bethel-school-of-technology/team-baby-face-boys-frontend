import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Leaderboard = () => {
  return (
    <div className="container-fluid descroller bg-primary d-flex flex-column">
      <div className="row">
        <div className="col-sm p-3 text-center">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col-sm  p-3 text-center">
         <h1 className=" mt-2 mb-4 rabbit-title text-center">Top Rabbits</h1>
        </div>
      </div>
      <div className="container px-0 leaderboard">
        <div className="table_holder">
        <table className="table table-striped  table-borderless text-center py-5">
          <thead>
            <tr>
              <th></th>
              <th>Breakout</th>
              <th></th>
            </tr>
            <tr>
              <th>Ranking</th>
              <th>Username</th>
              <th>High Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>JingleJunket</td>
              <td>829</td>
              
            </tr>
            <tr>
              <td>2</td>
              <td>DingdongJargogle</td>
              <td>766</td>
            </tr>
            <tr>
              <td>3</td>
              <td>PeeweeFizgig</td>
              <td>529</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th></th>
              <th>Connect 4</th>
              <th></th>
            </tr>
            <tr>
              <th>Ranking</th>
              <th>Username</th>
              <th>High Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>HarumphThwack</td>
              <td>156</td>
            </tr>
            <tr>
              <td>2</td>
              <td>HotfootMojo</td>
              <td>98</td>
            </tr>
            <tr>
              <td>3</td>
              <td>TalismanGossamer</td>
              <td>29</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th></th>
              <th>Rock, Paper, Scissors</th>
              <th></th>
            </tr>
            <tr>
              <th>Ranking</th>
              <th>Username</th>
              <th>High Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>AzureSway</td>
              <td>25</td>
            </tr>
            <tr>
              <td>2</td>
              <td>GlitchKerplunk</td>
              <td>18</td>
            </tr>
            <tr>
              <td>3</td>
              <td>YoyoHokum</td>
              <td>15</td>
            </tr>
          </tbody>
        </table>
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

export default Leaderboard;
