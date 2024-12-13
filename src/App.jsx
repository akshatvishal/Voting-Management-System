import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="MainContent">
          <Routes>
            <Route path="/" element={<h1>Welcome to Home Page</h1>} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
