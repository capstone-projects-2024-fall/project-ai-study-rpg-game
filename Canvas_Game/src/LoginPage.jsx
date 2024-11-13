import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import InputField from './InputField';
import wizardLogo from './assets/WizardLogo.png';

const LoginPage = ({ switchToSignUp, switchToDashboard }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        switchToDashboard();
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };
  

  return (
    <main className={styles.loginContainer}>
      <img src={wizardLogo} alt="Wizard Logo" className={styles.logo} />
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
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.buttonGroup}>
          <button
            type="submit"
            className={styles.signUpButton}
            disabled={!email || !password}  // Disable button if email or password is empty
          >
            Sign In
          </button>
          <button type="button" onClick={switchToSignUp} className={styles.signUpButton}>Sign Up</button>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;