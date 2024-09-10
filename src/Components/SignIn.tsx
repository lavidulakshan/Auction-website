import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Modal, Button } from 'react-bootstrap';  // Import Bootstrap Modal
import './SignIn.css';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);  // State to show modal
  const [successMessage, setSuccessMessage] = useState('');

  // Function to validate email format
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to validate password length
  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  // Handle sign-in logic with if-else ladder for validation
  const handleEmailSignIn = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email) {
      setErrorMessage('Email is required.');
    } else if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
    } else if (!password) {
      setErrorMessage('Password is required.');
    } else if (!validatePassword(password)) {
      setErrorMessage('Password must be at least 8 characters long.');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');

    } else {
      // If all validations pass
      setErrorMessage('');
      setSuccessMessage('Sign-in successful! Welcome back.');
      console.log('Email:', email);
      console.log('Password:', password);
    }

    // Show error modal if there's an error
    if (errorMessage) {
      setShowErrorModal(true);
    }
  };

  const handleCloseErrorModal = () => setShowErrorModal(false);

  return (
    <div className="signin-container">
      <div className="card signin-card shadow-lg">
        <div className="card-body">
          <h3 className="text-center mb-4">Welcome Back</h3>
          
          {successMessage && (
            <div className="alert alert-success text-center">{successMessage}</div>
          )}

          <form>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
            </div>

            <div className="form-group mb-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-group">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
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
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-3" onClick={handleEmailSignIn}>
              Sign in with Email
            </button>
          </form>

          <hr />
          <div className="text-center mb-2">
            <p>or</p>
            <button
              type="button"
              className="btn btn-danger btn-block"
              onClick={() => console.log('Google sign-in clicked')}
            >
              <i className="fab fa-google"></i> Sign in with Google
            </button>
          </div>
        </div>
      </div>

      {/* Error Message Modal */}
      <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseErrorModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignIn;
