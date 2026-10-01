import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import confetti from 'canvas-confetti';
import './auth.css';

export default function LoginPage({ onNavigate }) {
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
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
      alert(`Welcome back! You have successfully signed in as ${email}.`);
      onNavigate('/');
    }, 800);
  };

  return (
    <div className="auth-page-wrapper bg-grid-blue">
      <div className="auth-container">
        {/* Left Column: Visual & Info */}
        <div className="auth-left-col">
          {/* Header Logo */}
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); onNavigate('/'); }} 
            className="auth-brand-logo"
            id="auth-logo"
          >
            <img 
              src="/figma_svgs/1_1787.svg" 
              alt="ByteSpace" 
              className="logo-mark"
            />
            <span className="logo-text">ByteSpace</span>
          </a>

          {/* Headings */}
          <div className="auth-hero-text">
            <h1 className="auth-hero-title">Sign in with ease</h1>
            <p className="auth-hero-desc">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          {/* Visual Collage from Figma */}
          <div className="auth-visual-collage">
            <img 
              src="/figma_graphics/15254_194.png" 
              alt="ByteSpace Courses collage"
              className="auth-collage-img"
            />
          </div>
        </div>

        {/* Right Column: White Auth Card */}
        <div className="auth-right-col">
          <div className="auth-card">
            <div className="auth-card-tag">Sign In</div>
            <h2 className="auth-card-title">Welcome Back</h2>

            <form className="auth-form" onSubmit={handleSubmit} id="login-form">
              <div className="form-group">
                <label className="form-label" htmlFor="login-email">Email</label>
                <input
                  type="email"
                  id="login-email"
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="login-password">Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="login-password"
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
                  id="login-submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </button>
              </div>

              <div className="auth-divider">
                <span>or</span>
              </div>

              {/* Social Login */}
              <div className="social-auth-row">
                <button 
                  type="button" 
                  className="social-btn" 
                  aria-label="Sign in with Facebook"
                  onClick={() => alert('Social Facebook sign in triggered')}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>

                <button 
                  type="button" 
                  className="social-btn" 
                  aria-label="Sign in with Google"
                  onClick={() => alert('Social Google sign in triggered')}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </button>
              </div>

              <div className="auth-footer-prompt">
                New user?{' '}
                <a 
                  href="/register" 
                  onClick={(e) => { e.preventDefault(); onNavigate('/register'); }}
                  className="auth-link"
                  id="link-to-register"
                >
                  Create an account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
