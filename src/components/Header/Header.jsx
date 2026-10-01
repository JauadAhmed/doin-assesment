import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import './Header.css';

export default function Header({ currentPath = '/', onNavigate, cartCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (path, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
      setMobileMenuOpen(false);
    }
  };

  const scrollToSection = (sectionId, e) => {
    if (currentPath !== '/') {
      handleNav('/', e);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      e.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNav('/', e)} 
          className="brand-logo"
          id="nav-logo"
        >
          <img 
            src="/figma_svgs/1_1787.svg" 
            alt="ByteSpace Logo" 
            className="logo-mark"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          {/* <span className="logo-text">ByteSpace</span> */}
        </a>

        {/* Center Nav Links */}
        <nav className="desktop-nav">
          <a 
            href="/" 
            onClick={(e) => handleNav('/', e)}
            className={`nav-link ${currentPath === '/' ? 'active' : ''}`}
            id="nav-home"
          >
            Home
          </a>
          <a 
            href="#courses" 
            onClick={(e) => scrollToSection('courses', e)}
            className="nav-link"
            id="nav-courses"
          >
            Courses
          </a>
          <a 
            href="#creator" 
            onClick={(e) => scrollToSection('creator', e)}
            className="nav-link"
            id="nav-creators"
          >
            Creators
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="header-actions">
          <a 
            href="/login" 
            onClick={(e) => handleNav('/login', e)} 
            className="sign-in-link"
            id="nav-signin"
          >
            Sign In
          </a>
          <a 
            href="/register" 
            onClick={(e) => handleNav('/register', e)} 
            className="btn btn-outline-white join-us-btn"
            id="nav-join"
          >
            Join Us
          </a>
          <button 
            type="button" 
            className="cart-btn" 
            aria-label="View Shopping Cart"
            id="nav-cart"
            onClick={() => alert('Your cart currently has ' + cartCount + ' courses.')}
          >
            <ShoppingBag size={20} color="#ffffff" strokeWidth={1.8} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          {/* Mobile menu trigger */}
          <button 
            type="button" 
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} color="#ffffff" /> : <Menu size={24} color="#ffffff" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <nav className="mobile-nav">
            <a href="/" onClick={(e) => handleNav('/', e)} className="mobile-nav-link">Home</a>
            <a href="#courses" onClick={(e) => { handleNav('/', e); document.getElementById('courses')?.scrollIntoView(); }} className="mobile-nav-link">Courses</a>
            <a href="#creator" onClick={(e) => { handleNav('/', e); document.getElementById('creator')?.scrollIntoView(); }} className="mobile-nav-link">Creators</a>
            <hr className="mobile-divider" />
            <a href="/login" onClick={(e) => handleNav('/login', e)} className="mobile-nav-link">Sign In</a>
            <a href="/register" onClick={(e) => handleNav('/register', e)} className="btn btn-lime">Join Us</a>
          </nav>
        </div>
      )}
    </header>
  );
}
