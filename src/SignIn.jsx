import React, { useState } from 'react';

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleView = () => setIsLogin(!isLogin);

  return (
    <div className="container-fluid min-vh-100 bg-light d-flex align-items-center justify-content-center py-5">
      <div className="card shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body p-4">
          {/* Header Section */}
          <div className="text-center mb-4">
            <i className="bi bi-heart-pulse text-primary display-4"></i>
            <h2 className="mt-3 fw-bold">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-muted">
              {isLogin 
                ? 'Sign in to access your healthcare account' 
                : 'Register to start managing your healthcare'}
            </p>
          </div>

          {/* Form Section */}
          <form>
            {!isLogin && (
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter your full name"
                />
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group align-items-center gap-2" >
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
                  <i className="fa-regular fa-eye" type="button"
                  onClick={() => setShowPassword(!showPassword)}></i>
                  <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </div>
            </div>

            {!isLogin && (
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <div className="input-group align-items-center gap-2">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                  />
                  <i className="fa-regular fa-eye" type="button"
                  onClick={() => setShowPassword(!showPassword)}></i>
                  <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </div>
              </div>
            )}

            {isLogin && (
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-decoration-none">Forgot password?</a>
              </div>
            )}

            <button type="submit" className="btn btn-primary w-100 mb-3">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>

            <div className="text-center">
              <p className="mb-0">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none"
                  onClick={toggleView}
                >
                  {isLogin ? 'Create one' : 'Sign in'}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;