import React, { useState } from 'react';
import { FOOTER_COLUMNS } from '../../data/content';
import './Footer.css';

export default function Footer({ onSubscribe }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      if (onSubscribe) onSubscribe(email);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Footer: Brand, Newsletter & Link Columns */}
        <div className="footer-top-grid">
          {/* Brand & Newsletter Column */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img 
                src="/figma_svgs/1_1787.svg" 
                alt="ByteSpace" 
                className="logo-mark"
              />
              <span className="footer-logo-text">ByteSpace</span>
            </div>

            <p className="newsletter-prompt">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
                id="footer-email-input"
              />
              <button type="submit" className="btn btn-lime newsletter-submit-btn" id="footer-subscribe-btn">
                Search
              </button>
            </form>

            {subscribed && (
              <p className="newsletter-success-msg">
                ✓ Thank you! You've been subscribed to ByteSpace updates.
              </p>
            )}

            <p className="newsletter-disclaimer">
              By subscribing, you agree to our <a href="#privacy">Privacy Policy</a> and consent to receive updates from our company.
            </p>
          </div>

          {/* Links Columns */}
          <div className="footer-links-grid">
            {FOOTER_COLUMNS.map((col, idx) => (
              <div key={idx} className="footer-link-group">
                <h4 className="footer-group-title">{col.title}</h4>
                <ul className="footer-links-list">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © 2026 ByteSpace. All rights reserved.
          </div>
          <div className="legal-links">
            <a href="#privacy" className="legal-link">Privacy Policy</a>
            <a href="#terms" className="legal-link">Terms of Service</a>
            <a href="#cookies" className="legal-link">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
