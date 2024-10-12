import React from 'react';
import styles from './SignUpForm.module.css';
import InputField from './InputField';
import wizardLogo from './assets/wizardLogo.png'; 
const SignUpForm = () => {
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
        <img src={wizardLogo} alt="Wizard Logo" className={styles.logo} /> {""}
        <h1 className={styles.title}>
          <strong>StudyRPG</strong>
        </h1>
        <form className={styles.formWrapper}>
          {formFields.map((field) => (
            <InputField key={field.id} {...field} />
          ))}
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
