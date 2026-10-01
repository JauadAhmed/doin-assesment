import React from 'react';
import { X, Star, BarChart2, Clock, BookOpen, MessageSquare, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import './CourseModal.css';

export default function CourseModal({ course, onClose, onEnroll }) {
  if (!course) return null;

  const handleEnroll = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    if (onEnroll) onEnroll(course);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-media-wrapper">
          <img src={course.thumbnail} alt={course.title} className="modal-thumbnail" />
        </div>

        <div className="modal-body">
          <div className="modal-category-tag">{course.category}</div>
          <h2 className="modal-title">{course.fullTitle || course.title}</h2>
          <p className="modal-instructor">Created by <strong>{course.instructor}</strong></p>

          <p className="modal-description">{course.description}</p>

          <div className="modal-stats-grid">
            <div className="modal-stat-box">
              <BookOpen size={18} color="var(--primary-600)" />
              <span>{course.lessons} Lessons</span>
            </div>
            <div className="modal-stat-box">
              <Clock size={18} color="var(--primary-600)" />
              <span>{course.duration}</span>
            </div>
            <div className="modal-stat-box">
              <BarChart2 size={18} color="var(--primary-600)" />
              <span>{course.level}</span>
            </div>
            <div className="modal-stat-box">
              <Star size={18} fill="#ffb800" color="#ffb800" />
              <span>{course.rating} ({course.reviewsCount} reviews)</span>
            </div>
          </div>

          <div className="modal-curriculum">
            <h4 className="curriculum-title">What you'll learn</h4>
            <ul className="curriculum-list">
              <li><Check size={16} color="#10b981" /> Practical step-by-step masterclass with real world projects</li>
              <li><Check size={16} color="#10b981" /> Reusable design system templates and downloadable assets</li>
              <li><Check size={16} color="#10b981" /> Certificate of completion and lifetime community access</li>
            </ul>
          </div>

          <div className="modal-footer-row">
            <div className="modal-price">
              <span className="price-big">${course.price}</span>
              <span className="price-sub">Lifetime Access</span>
            </div>
            <button type="button" className="btn btn-lime modal-enroll-btn" onClick={handleEnroll}>
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
