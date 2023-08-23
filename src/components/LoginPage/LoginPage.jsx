import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  // Add your login form here
  return (
    <div>
      <h2>Login</h2>
      {/* Your login form */}
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default LoginPage;
