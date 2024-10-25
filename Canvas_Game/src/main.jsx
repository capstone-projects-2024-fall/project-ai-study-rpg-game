import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from './SignUpForm';
import LoginPage from './LoginPage';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);  // Change the initial state to login first

  const switchToSignUp = () => {
    setIsLogin(false);  // Switch to sign up
  };

  const switchToLogin = () => {
    setIsLogin(true);  // Switch to login
  };

  return (
    <div className='main'>
      {isLogin ? (
        <LoginPage switchToSignUp={switchToSignUp} />
      ) : (
        <SignUpForm switchToLogin={switchToLogin} />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
