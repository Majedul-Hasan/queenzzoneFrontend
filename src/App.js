import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";



import './App.css';
import HomePage from './pages/HomePage.js';

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
