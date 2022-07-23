import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import footer from "./components/footer"
import header from "./components/header";
import titlepage from "./screens/titlepage";

function App() {
  return (
    <div className="App">
      <header />
      <Router>
        <Routes>
          <Route path="/home" element={<titlepage />} />
      {/*     <Route path="/about" element={ } /> */}
        </Routes>
      </Router>
      <footer />
    </div>
  );
}

export default App;
