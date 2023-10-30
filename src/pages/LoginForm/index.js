import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import './style.css';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  // Load user's name from local storage on component mount
  useEffect(() => {
    const savedName = localStorage.getItem('user_name');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission
    if (isLogin) {
      // Login logic
      console.log('Logging in with:', `Name: ${name}, Email: ${email}, Password: ${password}`);

      // Save user's name to local storage
      localStorage.setItem('user_name', name);

      // Redirect to the home page
      // window.location.href = '/';
    } else {
      // Sign up logic
      console.log('Signing up with:', name, email, password);

      // Save user's name to local storage
      localStorage.setItem('user_name', name);

      // Redirect to the home page
      window.location.href = '/';
    }
  };
  return (
    <Layout>
      <div className='form-app'>
        <div className="form-container">
          <h2 className='form-h2'>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form onSubmit={handleSubmit}>
            <input className='form-input'
              type="text"
              placeholder="First Name"
              value={name}
              onChange={handleNameChange}
            />
            <input className='form-input'
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input className='form-input'
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button className='form-button' type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
          </form>
          <p className='form-p' onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Create an account' : 'Already have an account?'}
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default LoginForm;
