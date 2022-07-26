import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {

  let navigate = useNavigate();

  const logout = () => {
    localStorage.clear()
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   axios.post("http://localhost:3000/login", user ).then((response) => {
  //     console.log(response.data);

  //   localStorage.setItem("token", JSON.stringify(response.data))
  //    navigate("/account");
  //   });
  // };

  return (<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    {/* <a class="navbar-brand" href="/">Home</a> */}
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active"><a class="nav-link" href="/profile">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/allgames">Arcade</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/forum">Forum</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/leaderboard">Leaderboard</a>
        </li>
        <li class="nav-item">
          <a onClick={logout} class="nav-link" href="/account">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;