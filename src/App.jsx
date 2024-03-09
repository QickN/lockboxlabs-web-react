import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';


import './App.css';
import Antonyms from './Antonyms.jsx';
import Privacy from './PrivacyPolicies';
import Support from './Support';
import OurTeam from './OurTeam';
import OurWork from './OurWork';

function HomePage() {

  const navigate = useNavigate();
  
  return (
    <div className="Home">
      <header className="HomeHeader">
        <nav className="HomeNav">
          <ul className="HomeNavLinks">
            <li><Link to="/support">support</Link></li>
            <li><Link to="/privacy">privacy policies</Link></li>
            <li><Link to="/antonyms">antonyms</Link></li>
          </ul>
        </nav>
      </header>
      <h1>lockboxlabs</h1>
      <div className="card">
        <button onClick={() => navigate("/ourwork")}>
          our work
        </button>
      </div>
      <footer>&copy; Copyright lockboxlabs, LLC.</footer>
    </div>
  );
}

function App() {
  return (
    <Router>

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/antonyms" element={<Antonyms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/ourwork" element={<OurWork />} />

      </Routes>
      
    </Router>
  )
}

export default App;
