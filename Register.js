// Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const usernameRegex = /^(?=.{3,20}$)[a-zA-Z0-9_.]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;

    if (!usernameRegex.test(username)) {
        alert('Username must be 3-20 characters long and can only include letters, numbers, underscores, and periods. No spaces or special characters are allowed.');
        return;
      }

    if (!passwordRegex.test(password)) {
        alert('Password must be 6-20 characters long, contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.');
        return;
      }
    
    // Store user details in localStorage (this will be AWS S3 later)
    localStorage.setItem(username, password);

    alert('Registration successful! Redirecting to login...');
    setTimeout(() => {
        navigate('/');
      }, 1000);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleRegister} style={{ width: '300px', padding: '80px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2>Register</h2>
        <div style={{ marginBottom: '15px' }}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '94%', padding: '8px', margin: '5px 0', borderRadius: '3px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '94%', padding: '8px', margin: '5px 0', borderRadius: '3px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '3px', boxSizing: 'border-box', fontSize: '16px', cursor: 'pointer' }}>
          Register
        </button>
        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
