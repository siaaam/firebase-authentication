import './App.css';
import Register from './Register';
import Home from './Home';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Login from './Login';
import Private from './Private';
import Profile from './Profile';
import Nav from './Nav';
import { AuthContext, AuthProvider } from './context/Auth.context';
import Grow from '@mui/material/Grow';

import { SnackbarProvider } from 'notistack';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';

const AuthRequired = ({ children }) => {
  const location = useLocation();
  const currentUser = useContext(AuthContext);

  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }
};

function App() {
  return (
    <>
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        TransitionComponent={Grow}
      >
        <AuthProvider>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route
              path="/private"
              element={
                <AuthRequired>
                  <Private />
                </AuthRequired>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRequired>
                  <Profile />
                </AuthRequired>
              }
            />
          </Routes>
        </AuthProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
