import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LogoCloud from '../components/LogoCloud';
import { CoursesSection, CourseModal } from '../components/Courses';
import LearningPaths from '../components/LearningPaths';
import { FeatureOne, FeatureTwo } from '../components/Features';
import CreatorCTA from '../components/CreatorCTA';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function HomePage({ onNavigate, cartCount, onAddToCart }) {
  const [searchQuery, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnrollCourse = (course) => {
    onAddToCart(course);
    setSelectedCourse(null);
  };

  const handleSelectCategory = (categoryTitle) => {
    setSearchTerm(categoryTitle);
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page-container">
      {/* Navigation Header */}
      <Header 
        currentPath="/" 
        onNavigate={onNavigate} 
        cartCount={cartCount} 
      />

      {/* Hero Section */}
      <Hero 
        onSearchSubmit={(term) => setSearchTerm(term)}
        onExploreCourses={() => {
          document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Trusted Partner Logo Cloud */}
      <LogoCloud />

      {/* Courses Catalog Section */}
      <CoursesSection 
        searchQuery={searchQuery}
        onSelectCourse={(course) => setSelectedCourse(course)}
      />

      {/* Diverse Learning Paths */}
      <LearningPaths 
        onSelectCategory={handleSelectCategory}
      />

      {/* Features section: Path to Professional Growth + Create & Manage (shared #FAFAFA bg) */}
      <div style={{ background: '#FAFAFA' }}>
        <FeatureOne />
        <FeatureTwo />
      </div>

      {/* Creator CTA Banner */}
      <CreatorCTA 
        onJoinCreator={() => onNavigate('/register')}
      />

      {/* Community Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />

      {/* Course Preview / Detail Modal */}
      {selectedCourse && (
        <CourseModal 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
          onEnroll={handleEnrollCourse}
        />
      )}
    </div>
  );
}
