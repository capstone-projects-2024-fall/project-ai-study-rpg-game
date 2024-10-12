import React from 'react';
import styles from './SignUpForm.module.css';

const InputField = ({ label, type, id, placeholder }) => {
  return (
    <div className={styles.inputField}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input
        type={type}
        id={id}
        className={styles.input}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};

export default InputField;