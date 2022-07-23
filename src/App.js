import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import footer from "./components/footer"
import header from "./components/header";
import titlepage from "./screens/titlepage";
import signuplogin from './screens/signuplogin';

function App() {
  return (
    <>
      <header />
      <Router>
        <Routes>
          <Route path="/" element={<titlepage />} />
          <Route path="/login" element={<signuplogin/>} />
        </Routes>
      </Router>
      <footer />
    </>
  );
}

export default App;
