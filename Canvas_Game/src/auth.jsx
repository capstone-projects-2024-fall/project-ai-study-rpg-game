import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from './SignUpForm';
import LoginPage from './LoginPage';
import { Dashboard } from './scenes';
import ConnectCanvas from './ConnectCanvas';
import { useState } from 'react';
import App from './App';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);  // Change the initial state to login first
  const [isDashboard, setIsDashboard] = useState(false);
  const [isCanvas, setIsCanvas] = useState(false);

  const switchToSignUp = () => {
    setIsLogin(false);  // Switch to sign up
  };

  const switchToLogin = () => {
    setIsLogin(true);  // Switch to login
  };

  const switchToDashboard = () => {
    setIsDashboard(true);  // Switch to dashboard
  };

  const switchToCanvas = () => {
    setIsCanvas(true);  // Switch to canvas
  };

  return (
    <div className='auth'>
      {isDashboard ? (
        <App />
      ) : isCanvas ? (
        <ConnectCanvas />
      ) : isLogin ? (
        <LoginPage switchToSignUp={switchToSignUp} switchToDashboard={switchToDashboard} />
      ) : (
        <SignUpForm switchToLogin={switchToLogin} switchToCanvas={switchToCanvas} />
      )}
    </div>
  );
};

export default AuthPage;