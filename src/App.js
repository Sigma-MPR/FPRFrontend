import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { LoginPage } from './pages';
import Navbar from '../src/pages/Shared Components/Navbar.js'
function App() {
  return (
    <div>

    
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path = "*" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
