import React, { useState } from 'react';
import styles from './SignUpForm.module.css';
import InputField from './InputField';
import wizardLogo from './assets/WizardLogo.png';

const SignUpForm = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
  };

  const formFields = [
    { label: 'Name', type: 'text', id: 'name', placeholder: 'Enter your name' },
    { label: 'Last Name', type: 'text', id: 'lastName', placeholder: 'Enter your last name' },
    { label: 'Email', type: 'email', id: 'email', placeholder: 'Enter your email' },
    { label: 'Password', type: 'password', id: 'password', placeholder: 'Enter your password' },
    { label: 'Confirm Password', type: 'password', id: 'confirmPassword', placeholder: 'Confirm your password' },
  ];

  return (
    <section className={styles.signUp}>
      <div className={styles.container}>
        <img src={wizardLogo} alt="Wizard Logo" className={styles.logo} />
        <h1 className={styles.title}>
          <strong>Canvas Quest</strong>
        </h1>
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <InputField
              key={field.id}
              {...field}
              value={formData[field.id]}
              onChange={handleInputChange}
            />
          ))}
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.submitButton}>Submit</button>
            <button type="button" onClick={switchToLogin} className={styles.submitButton}>Already have an account?</button>
          </div>
        </form>
        {message && <p className={styles.successMessage}>{message}</p>}
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </section>
  );
};

export default SignUpForm;
