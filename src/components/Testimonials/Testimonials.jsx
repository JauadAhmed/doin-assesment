import React from 'react';
import { TESTIMONIALS } from '../../data/content';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      {/* Background glow decorations */}
      <div className="t-glow t-glow-top-right" />
      <div className="t-glow t-glow-top-mid" />
      <div className="t-glow t-glow-left" />

      <div className="container">
        {/* Header row: Title left | Description right */}
        <div className="testimonials-header-row">
          <h2 className="testimonials-title">
            Discover What Our<br />Community Is Saying
          </h2>
          <p className="testimonials-header-desc">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* 3 testimonial cards in a row */}
        <div className="testimonials-cards-row">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="testimonial-card">
              {/* Avatar */}
              <img
                src={item.avatar}
                alt={item.name}
                className="t-avatar"
              />

              {/* Name + Role */}
              <div className="t-author-info">
                <h3 className="t-author-name">{item.name}</h3>
                <span className="t-author-role">{item.role}</span>
              </div>

              {/* Quote */}
              <p className="t-quote">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
