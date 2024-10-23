import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from './SignUpForm';
import LoginPage from './LoginPage';

const App = () => {
  const [isSignUp, setIsSignUp] = useState(true); 

  const toggleForm = () => {
    setIsSignUp(!isSignUp); 
  };

  return (
    <div className='main'>
      {isSignUp ? <SignUpForm /> : <LoginPage />} 
      <button onClick={toggleForm}>
        {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
