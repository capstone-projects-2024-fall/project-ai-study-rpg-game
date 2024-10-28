import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import InputField from './InputField';
import wizardLogo from './assets/WizardLogo.png';
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Router"; // Import the custom hook


const LoginPage = ({ onToggleForm }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setIsSignIn } = useAuth();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // On successful login:
    setIsSignIn(true);
    
  };

  return (
    <main className={styles.loginContainer}>
        <img src={wizardLogo} alt="Wizard Logo" className={styles.logo} /> {""} 
      <h1 className={styles.title}>
        <strong>CanvasQuest</strong>
      </h1>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.button}>Sign In</button>
          <button type="button" onClick={onToggleForm} className={styles.signUpButton}>
            Sign Up
          </button> {/* Adjusted the button to navigate back */}
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
