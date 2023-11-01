import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Login from './Login'; // Import the Login component
import SignUp from './SignUp'; // Import the SignUp component
import Dashboard from './Dashboard'; // Import the Dashboard component
import './style.css';
import axios from 'axios';

const LoginForm = () => {
  const [user, setUser] = useState(null); // Store user data

  useEffect(() => {
    const savedName = localStorage.getItem('user_name');
    if (savedName) {
      setUser({ userName: savedName }); // Set the user data if the user is already logged in
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('https://mern-todo-app-0pnc.onrender.com/login', {
        email,
        password,
      });

      // Save user's name to local storage and update user data
      localStorage.setItem('user_name', response.data.name);
      setUser({ userName: response.data.name });
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  const handleSignUp = async (name, email, password) => {
    try {
      const response = await axios.post('https://mern-todo-app-0pnc.onrender.com/signup', {
        name,
        email,
        password,
      });

      // Save user's name to local storage and update user data
      localStorage.setItem('user_name', response.data.name);
      setUser({ userName: response.data.name });
    } catch (error) {
      console.error('Signup Error:', error);
    }
  };

  return (
    <Layout>
      <div className='form-app'>
        <div className="form-container">
          {user ? (
            // Render the Dashboard if the user is logged in
            <Dashboard userName={user.userName} />
          ) : (
            // Render the Login or Sign Up form based on the state
            user && user.userName ? (
              <Dashboard userName={user.userName} />
            ) : (
              user === null ? (
                <Login onLogin={handleLogin} />
              ) : (
                <SignUp onSignUp={handleSignUp} />
              )
            )
          )}
          <p className='form-p' onClick={() => setUser(null)}>
            {user ? 'Log Out' : 'Back to Login'}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default LoginForm;
