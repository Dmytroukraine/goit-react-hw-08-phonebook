import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  // Add your registration form here
  return (
    <div>
      <h2>Register</h2>
      {/* Your registration form */}
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default RegisterPage;
