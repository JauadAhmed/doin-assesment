import React, { useState, useMemo } from 'react';
import { CATEGORY_TAGS, COURSES } from '../../data/content';
import CourseCard from './CourseCard';
import './CoursesSection.css';

export default function CoursesSection({ searchQuery = '', onSelectCourse }) {
  const [activeCategory, setActiveCategory] = useState('Featured');

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesSearch = searchQuery
        ? course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      const matchesCategory =
        activeCategory === 'Featured'
          ? true
          : course.category.toLowerCase() === activeCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section className="courses-section" id="courses">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header-centered">
          <h2 className="section-title">
            Discover Your Passion, <br /> Build Your Skills
          </h2>
          <p className="section-desc">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="category-pills-wrapper">
          {CATEGORY_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`category-pill ${activeCategory === tag ? 'active' : ''}`}
              onClick={() => setActiveCategory(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search status indicator */}
        {searchQuery && (
          <div className="search-filter-banner">
            <span>Showing results for "<strong>{searchQuery}</strong>"</span>
            <button 
              type="button" 
              className="clear-search-btn"
              onClick={() => setActiveCategory('Featured')}
            >
              Reset
            </button>
          </div>
        )}

        {/* Course Cards Grid */}
        <div className="courses-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onSelectCourse={onSelectCourse} 
              />
            ))
          ) : (
            <div className="no-courses-found">
              <p>No courses found in category "{activeCategory}".</p>
              <button 
                type="button" 
                className="btn btn-lime"
                onClick={() => setActiveCategory('Featured')}
              >
                View All Courses
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
