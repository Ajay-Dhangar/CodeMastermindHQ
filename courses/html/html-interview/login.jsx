import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Basic validation (you'd typically use more secure methods)
    if (username === 'user' && password === 'password') {
      setLoginMessage('Login successful!');
      // Here, you might redirect the user to a dashboard page or perform other actions
    } else {
      setLoginMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleLogin} name="loginForm">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit">Login</button>
      </form>
      <p>{loginMessage}</p>
    </div>
  );
}

export default LoginForm;
