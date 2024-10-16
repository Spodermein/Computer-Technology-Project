// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    
    // Retrieve the stored password for the provided username
    const storedPassword = localStorage.getItem(username);

    // Check if the username exists and matches the password
    if (storedPassword && password === storedPassword) {
        console.log('Login successful');
        navigate('/welcome');  // Redirect to the Welcome page upon successful login
    } else {
        alert('Invalid credentials. Please try again or create an account.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleLogin} style={{ width: '300px', padding: '80px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2>Login</h2>
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
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '94%', padding: '8px', margin: '5px 0', borderRadius: '3px', border: '1px solid #ccc' }}
            required
          />
          <button
            type="button"
            onMouseDown={() => setShowPassword(true)}
            onMouseUp={() => setShowPassword(false)}
            onMouseLeave={() => setShowPassword(false)}  // Hides password when mouse leaves button
            style={{
                position: 'absolute',
                right: '42%',
                top: '54%',
                transform: 'translateY(-50%)',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                color: '#888',
                padding: '0',
            }}
          >
            👁️
          </button>
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '3px',boxSizing: 'border-box', fontSize: '16px', cursor: 'pointer'}}>
          Login
        </button>
        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          Don't have an account? <a href="/register">Create one</a>
        </p>
      </form>
    </div>
  );
}

export default Login;

