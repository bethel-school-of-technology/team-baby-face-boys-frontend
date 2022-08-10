import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
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
        </ul>
    </div>
  </nav>
    );
};

export default Navbar;