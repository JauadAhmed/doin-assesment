import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import confetti from 'canvas-confetti';
import './auth.css';

export default function RegisterPage({ onNavigate }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      alert(`Welcome to ByteSpace, ${fullName}! Your account has been created.`);
      onNavigate('/');
    }, 800);
  };

  return (
    <div className="auth-page-wrapper bg-grid-blue">
      <div className="auth-container">
        {/* Left Column: Visual & Info */}
        <div className="auth-left-col">
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); onNavigate('/'); }} 
            className="auth-brand-logo"
            id="register-auth-logo"
          >
            <img 
              src="/figma_svgs/1_1787.svg" 
              alt="ByteSpace" 
              className="logo-mark"
            />
            <span className="logo-text">ByteSpace</span>
          </a>

          <div className="auth-hero-text">
            <h1 className="auth-hero-title">Sign up and come in</h1>
            <p className="auth-hero-desc">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
            </p>
          </div>

          <div className="auth-visual-collage">
            <img 
              src="/figma_graphics/15254_194.png" 
              alt="ByteSpace Courses collage"
              className="auth-collage-img"
            />
          </div>
        </div>

        {/* Right Column: White Registration Card */}
        <div className="auth-right-col">
          <div className="auth-card">
            <div className="auth-card-tag">Create an Account</div>
            <h2 className="auth-card-title">Welcome to ByteSpace</h2>

            <form className="auth-form" onSubmit={handleSubmit} id="register-form">
              <div className="form-group">
                <label className="form-label" htmlFor="register-name">Full Name</label>
                <input
                  type="text"
                  id="register-name"
                  placeholder="Jamie Davis"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="register-email">Email</label>
                <input
                  type="email"
                  id="register-email"
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="register-password">Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="register-password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-input"
                  />
                  <button
                    type="button"
                    className="toggle-password-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={18} color="#82868e" /> : <Eye size={18} color="#82868e" />}
                  </button>
                </div>
              </div>

              <div className="auth-btn-row">
                <button 
                  type="submit" 
                  className="btn btn-lime auth-submit-btn" 
                  id="register-submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Continue'}
                </button>
              </div>

              <div className="auth-footer-prompt" style={{ marginTop: '20px' }}>
                Already have an account?{' '}
                <a 
                  href="/login" 
                  onClick={(e) => { e.preventDefault(); onNavigate('/login'); }}
                  className="auth-link"
                  id="link-to-login"
                >
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
