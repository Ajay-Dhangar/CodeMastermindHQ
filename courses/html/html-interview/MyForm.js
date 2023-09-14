import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission (you can add AJAX or other actions here)
      alert('Form submitted successfully!');
    } else {
      // Display validation errors to the user
      alert('Please fill out all required fields correctly.');
    }
  };

  const validateForm = () => {
    const { username, email } = formData;
    return username.trim() !== '' && email.trim() !== '' && isValidEmail(email);
  };

  const isValidEmail = (email) => {
    // A simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default MyForm;
