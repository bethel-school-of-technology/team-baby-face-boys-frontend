import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary  ">
        <a class="navbar-brand" href="/"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapsenavbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto text-warning ">
            <li class="nav-item active">
              <a class="nav-link" href="/profile">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/allgames">Arcade</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/forum">Gamer Forum</a>
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