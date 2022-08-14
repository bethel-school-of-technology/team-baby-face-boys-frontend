import React from 'react';
import './App.css';
import '../src/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from "axios";

import Forum from './screens/forum';
import Leaderboard from './screens/leaderboard';
import Profilepage from './screens/profilepage';
import Registrationpage from './screens/registrationpage';
import Signuplogin from './screens/signuplogin';
import Titlepage from './screens/titlepage';
import Preteen from './screens/users12';
import Teen from './screens/users13';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forum" element={<Forum />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/registration" element={<Registrationpage />} />
        <Route path="/account" element={<Signuplogin />} />
        <Route path="/" element={<Titlepage />} />
        <Route path="/games" element={<Preteen />} />
        <Route path="/allgames" element={<Teen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
