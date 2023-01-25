import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ViewAllAchievements from './pages/ViewAllAchievements/ViewAllAchievements';
import { LoginPage, AddAchievement, Dashboard, ViewSingleAchievementList, ForgotPasswordPage, ChangePasswordPage, ProfilePage, ViewSingleAchievement, LandingPage, RegisterPage, NotFoundPage, FeedbackPage } from './pages';
import Protected from './components/Protected.jsx';
import LoginProtected from './components/LoginProtected.jsx';
// import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            theme="light"
        />
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginProtected component={LoginPage} />} />
            <Route path="signup" element={<LoginProtected component={RegisterPage} />} />

            <Route path="dashboard" element={<Protected component={Dashboard} />} />

            <Route path="profile" element={<Protected component={ProfilePage} />} />
          </Route>

          <Route path="achievements">
            <Route index element={<Protected component={ViewAllAchievements} />} />
            <Route path="*" element={<Protected component={ViewSingleAchievementList} />} />
            <Route path="All" element={<Protected component={ViewAllAchievements} />} />
            <Route path="view" element={<Protected component={ViewSingleAchievement} />} />
          </Route>

          <Route path="addachievement" element={<Protected component={AddAchievement} />} />
          <Route path="forgotpassword">
            <Route index element={<ForgotPasswordPage />} />
            <Route path="*" element={<ChangePasswordPage />} />
          </Route>

          <Route path="changePassword" element={<Protected component= {ChangePasswordPage} />} />
          <Route path="feedback" element = {<Protected component = {FeedbackPage} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
