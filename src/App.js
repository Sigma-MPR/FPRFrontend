import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ViewAllAchievements from './pages/ViewAllAchievements/ViewAllAchievements';
import { LoginPage, AddAchievement, Dashboard, ViewSingleAchievementList, ForgotPasswordPage, ChangePasswordPage, ProfilePage, ViewSingleAchievement, LandingPage, RegisterPage } from './pages';
// import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
          <Route index element={<LandingPage />} />
            <Route path="login">
              <Route index element={<LoginPage />} />
              <Route path="*" element={<LoginPage />} />
            </Route>
            <Route path="signup" element={<RegisterPage />} />

            <Route path="dashboard" element={<Dashboard />} />

            <Route path="profile" element={<ProfilePage />}>
              <Route path="edit" element={<h1>profile edit Route</h1>} />
              <Route index element={<h1>profile Route index</h1>} />
            </Route>
            <Route path="achievements">
              <Route path="add" element={<h1>achievements add Route</h1>} />
              <Route path="*" element={<ViewSingleAchievementList />} />
              <Route path="All" element={<ViewAllAchievements />} />
              <Route path="view" element={<ViewSingleAchievement />} />
            </Route>

            <Route path="addachievement" element={<AddAchievement />} />
            <Route path="viewachievement" element={<ViewSingleAchievementList />} />
            <Route path="forgotpassword">
              <Route path="*" element={<ChangePasswordPage />} />
              <Route index element={<ForgotPasswordPage />} />
            </Route>
            <Route path = "changePassword" element = {<ChangePasswordPage />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
