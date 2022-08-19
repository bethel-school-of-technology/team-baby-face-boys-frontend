import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {

  const logout = () => {
    axios.get ("http://localhost:3000/logout").then((response) => {
      console.log('logout')
    });
  };

  return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    {/* <a className="navbar-brand" href="/">Home</a> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active"><a className="nav-link" href="/profile">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/allgames">Arcade</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/forum">Forum</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/leaderboard">Leaderboard</a>
        </li>
        <li className="nav-item">
          <a onClick={logout} className="nav-link" href="/account">Log Out</a>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;