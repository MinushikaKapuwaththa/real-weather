import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CurrentWeather from './pages/currentWeather';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CurrentWeather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
