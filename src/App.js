import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { LoginPage } from './pages';
import UserProfile from './pages/UserProfile/UserProfile.js'
import { LoginPage, AddAchievement  } from './pages';

import Navbar from './pages/Shared Components/Navbar.js'
function App() {
  return (
    <div>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/">

          <Route path = "login">
            <Route index element={<LoginPage />} />
            <Route path = "*" element = {<LoginPage/>} />
          </Route>

          <Route path = "dashboard" element = {<h1>dashboard Route</h1>} />

          <Route path = "profile" element = {<UserProfile />}>

              <Route path = "edit" element = {<h1>profile edit Route</h1>} />
              <Route index element = {<UserProfile/>}/>
          </Route>

          <Route path = "achievements" element = {<AddAchievement />} />
          <Route index element = {<h1>Index Route</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
