import React from 'react';
import { Star, BarChart2 } from 'lucide-react';
import './CourseCard.css';

export default function CourseCard({ course, onSelectCourse }) {
  return (
    <div 
      className="course-card" 
      onClick={() => onSelectCourse && onSelectCourse(course)}
      id={`course-card-${course.id}`}
    >
      {/* Thumbnail with overlay badges */}
      <div className="card-thumbnail-wrapper">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="card-thumbnail"
          loading="lazy"
        />
        
        {/* Figma Badges on image */}
        <div className="card-pill-badges">
          <span className="pill-badge">{course.lessons} Lessons</span>
          <span className="pill-badge">{course.duration}</span>
          <span className="pill-badge">{course.comments} Comments</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="card-content">
        <div className="card-header-row">
          <h3 className="course-title" title={course.fullTitle || course.title}>
            {course.title}
          </h3>
          <div className="course-rating">
            <span className="rating-num">{course.rating}</span>
            <Star size={15} fill="#ffb800" color="#ffb800" />
          </div>
        </div>

        <div className="course-instructor">
          by {course.instructor}
        </div>

        {/* Level and Enrolled Avatars */}
        <div className="course-meta-row">
          <div className="level-badge">
            <BarChart2 size={15} color="#666973" />
            <span>{course.level}</span>
          </div>

          <div className="enrolled-group">
            <img src="/figma_images/0577f0e9b7fca2f32639871454da0de95f951709.png" alt="Avatar" className="enroll-avatar" />
            <img src="/figma_images/63c4be83222c85e6c852819bc5d4b24a87a87fb6.png" alt="Avatar" className="enroll-avatar" />
            <img src="/figma_images/728c3b1d33fe647a46f9bf668322f8c1d94ed937.png" alt="Avatar" className="enroll-avatar" />
            <span className="enroll-more">{course.enrolledCount}</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="card-footer-row">
          <div className="course-price">
            <span className="price-amount">${course.price}</span>
            <span className="price-period">/lifetime</span>
          </div>
          <button 
            type="button" 
            className="card-action-btn"
            onClick={(e) => {
              e.stopPropagation();
              onSelectCourse && onSelectCourse(course);
            }}
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}
