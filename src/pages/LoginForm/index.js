import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Dashboard from './Dashboard';
import './style.css';
import axios from 'axios';

const LoginForm = () => {
  const [user, setUser] = useState(null); // Store user data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignup, setIsSignup] = useState(false); // To toggle between login and signup

  useEffect(() => {
    const savedName = localStorage.getItem('user_name');
    if (savedName) {
      setUser({ userName: savedName }); // Set the user data if the user is already logged in
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://mern-todo-app-0pnc.onrender.com/user/login', {
        email,
        password,
      });
  
      console.log(response.data);
  
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', email); // Save email to local storage
        localStorage.setItem('user_name', response.data.name); // Save user name
        setUser({ userName: response.data.name });
      }
    } catch (error) {
      console.error(error.response.data);
      alert('Login failed. Please try again later.');
    }
  };
  

  const handleSignUp = async () => {
    try {
      const response = await axios.post('https://mern-todo-app-0pnc.onrender.com/user/register', {
        name,
        email,
        password,
      });

      console.log(response.data);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', email); // Save email to local storage
        localStorage.setItem('user_name', response.data.name); // Save user name
        setUser({ userName: response.data.name });
      } else {
        alert('Registration failed. Please check your details.');
      }
    } catch (error) {
      console.error(error);
      alert('Registration failed. Please try again later.');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      handleSignUp();
    } else {
      handleLogin();
    }
  };

  return (
    <Layout>
      {user && user.userName ? (
        <Dashboard userName={user.userName} />
      ) : (
        <>
          <div className="form-body">
            <div className="form-main">
              <input type="checkbox" id="chk" aria-hidden="true" />

              <div className={`form-${isSignup ? 'signup' : 'login'}`}>
                <form onSubmit={handleFormSubmit}>
                  <label className="form-label" htmlFor="chk" aria-hidden="true">
                    {isSignup ? 'Sign up' : 'Login'}
                  </label>
                  {isSignup && (
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required=""
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="form-input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="form-button" type="submit">
                    {isSignup ? 'Sign up' : 'Login'}
                  </button>

                  <p className="form-p" onClick={() => setIsSignup(!isSignup)}>
                    {isSignup ? 'Already have an account? Login' : 'Create an account'}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default LoginForm;
