import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from './SignUpForm';

const App = () => {
  return (
    <div>
      <SignUpForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));