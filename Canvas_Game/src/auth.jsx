<<<<<<< HEAD
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from './SignUpForm';
import LoginPage from './LoginPage';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false); 

  const toggleForm = () => {
    setIsSignUp(!isSignUp); 
  };

  return (
    <div className='main'>
      {isSignUp ? <SignUpForm /> : <LoginPage />} 
      <button onClick={toggleForm}>
        {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
      </button>
=======
import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from './SignUpForm';
import LoginPage from './LoginPage';
import { Dashboard } from './scenes';
import { useState } from 'react';
import App from './App';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);  // Change the initial state to login first
  const [isDashboard, setIsDashboard] = useState(false);

  const switchToSignUp = () => {
    setIsLogin(false);  // Switch to sign up
  };

  const switchToLogin = () => {
    setIsLogin(true);  // Switch to login
  };

  const switchToDashboard = () => {
    setIsDashboard(true);  // Switch to dashboard
  };

  return (
    <div className='auth'>
      {isDashboard ? (
        <App />
      ) : isLogin ? (
        <LoginPage switchToSignUp={switchToSignUp} switchToDashboard={switchToDashboard} />
      ) : (
        <SignUpForm switchToLogin={switchToLogin} />
      )}
>>>>>>> cca5d74aa5064df46b9fe144826e622a75f7ab59
    </div>
  );
};

<<<<<<< HEAD
export default AuthPage;
=======
export default AuthPage;
>>>>>>> cca5d74aa5064df46b9fe144826e622a75f7ab59
