import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import footer from "./components/footer";
import header from "./components/header";
import titlepage from "./screens/titlepage";
import signuplogin from './screens/signuplogin';
import registrationpage from './screens/registrationpage';
import profilepage from './screens/profilepage';
import users12 from './screens/users12';
import users13 from './screens/users13';
import forum from './screens/forum';
import leaderboard from './screens/leaderboard';

function App() {
  return (
    <>
      <header />
      <Router>
        <Routes>
          <Route path="/" element={<titlepage />} />
          <Route path="/login" element={<signuplogin/>} />
          <Route path="/registration" element={<registrationpage/>} />
          <Route path="/profile" element={<profilepage/>} />
          <Route path="/users12" element={<users12/>} />
          <Route path="/users13" element={<users13/>} />
          <Route path="/users13" element={<users13/>} />
          <Route path="/forum" element={<forum/>} />
          <Route path="/leaderboard" element={<leaderboard/>} />
        </Routes>
      </Router>
      <footer />
    </>
  );
}

export default App;
