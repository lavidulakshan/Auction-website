import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './SignIn.css';
import 'react-toastify/dist/ReactToastify.css';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [label1, setLabel1] = useState('');
  const [label2, setLabel2] = useState('');
  const [label3, setLabel3] = useState('');
  // const [label4,setLabel4] = useState("");
  const [success, setSuccess] = useState('');

  const validate = () => {
    // Define regex patterns
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


    // Clear previous messages
    setLabel1('');
    setLabel2('');
    setLabel3('');

    if (!email || email.trim() === '') {
      setLabel1('Email is required');
      return false;
    } else if (!emailPattern.test(email)) {
      setLabel1('Invalid email format');
      return false;
    } else if (!password || password.trim() === '') {
      setLabel2('Password is required');
      return false;
    } else if (!passwordPattern.test(password)) {
      setLabel2('Password must be at least 8 characters long and include at least one letter and one number');
      return false;
    } else if (password !== confirmPassword) {
      setLabel3('Passwords do not match');
      return false;
    }
    setSuccess('Successfully logged in to your account');
    setTimeout(() => {
      setSuccess(''); // Reset the success message after 3 seconds
    }, 3000);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Proceed with form submission
      console.log("Form is valid. Submitting...");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card shadow-lg">
        <div className="card-body">
          {success && (
            <div className="alert alert-success text-center" style={{ marginBottom: '1rem' }}>
              {success}
            </div>
          )}
          <h3 className="text-center mb-4">Welcome Back</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              
              {label1 && <label htmlFor="" style={{ color: 'red' }}>{label1}</label>}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </span>
                </div>
              </div>
              {label2 && <label htmlFor="" style={{ color: 'red' }}>{label2}</label>}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <div className="input-group">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </span>
                </div>
              </div>
              {label3 && <label htmlFor="" style={{ color: 'red' }}>{label3}</label>}
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-3">
              Sign in with Email
            </button>
          </form>

          <hr />
          <div className="text-center mb-2">
            <p>or</p>
            <button
              type="button"
              className="btn btn-google btn-block"
              onClick={() => console.log('Google sign-in clicked')}
            >
              <i className="fab fa-google"></i> Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
