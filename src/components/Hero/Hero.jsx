import React, { useState } from 'react';
import './Hero.css';

export default function Hero({ onSearchSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) onSearchSubmit(searchTerm);
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-root" id="home">
      {/* ── Grid dot overlay (12% opacity) ── */}
      <div className="hero-grid-overlay" />

      {/* ── Floating 3D ornaments (properly colored from Figma) ── */}

      {/* LEFT SIDE ornaments */}
      {/* Large lime blob – bottom-left, imageRef e3b559 masked lime */}
      <img src="/hero_ornaments/orb_lime_large.png"   alt="" className="h-orb orb-lime-large   animate-float" />
      {/* Small white/grey cone blob – mid left */}
      <img src="/hero_ornaments/orb_white_sm.png"     alt="" className="h-orb orb-white-sm     animate-float-delayed" />
      {/* White cone – lower-left */}
      <img src="/hero_ornaments/orb_cone_white_bl.png" alt="" className="h-orb orb-cone-wbl   animate-float" />

      {/* RIGHT SIDE ornaments */}
      {/* Lime cone – top-right */}
      <img src="/hero_ornaments/orb_cone_lime_tr.png"  alt="" className="h-orb orb-cone-ltr   animate-float-delayed" />
      {/* Small white cone – mid-right */}
      <img src="/hero_ornaments/orb_cone_white_sm.png" alt="" className="h-orb orb-cone-wsm   animate-float" />
      {/* White circle/ring – far right lower */}
      <img src="/hero_ornaments/orb_circle_white_r.png" alt="" className="h-orb orb-circle-wr animate-float-delayed" />

      {/* ── Big lime filled circle behind the student ── */}
      <div className="hero-lime-circle" />

      {/* ── Top content block (title + subtitle + search) ── */}
      <div className="hero-inner">
        <div className="hero-text-block">
          <h1 className="hero-title">
            Get Access to Hundreds<br />Courses Available
          </h1>
          <p className="hero-subtitle">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        {/* Search bar */}
        <form className="hero-search-bar" onSubmit={handleSubmit} id="hero-search-form">
          <div className="hero-search-input-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="hero-search-icon">
              <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#82868E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="Course, topic, creator"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="hero-search-input"
              id="hero-search-input"
            />
          </div>
          <button type="submit" className="hero-search-btn" id="hero-search-btn">
            Search
          </button>
        </form>
      </div>

      {/* ── Bottom visual area (student + badges) ── */}
      <div className="hero-visual-area">
        {/* Floating badges */}
        {/* UI/UX Design – left of student */}
        <div className="h-badge badge-uiux animate-float">
          <div className="h-badge-title">UI/UX Design</div>
          <div className="h-badge-sub">
            <span>200 Courses</span>
            <span className="h-badge-dot">•</span>
            <span>1000+ Students</span>
          </div>
        </div>

        {/* Student photo – center */}
        <img
          src="/figma_images/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
          alt="ByteSpace Student"
          className="hero-student-img"
        />

        {/* Learning Progress – right of student */}
        <div className="h-badge badge-progress animate-float-delayed">
          <div className="h-badge-label-sm">Learning Progress</div>
          <div className="h-badge-pct">55%</div>
          <div className="h-progress-track">
            <div className="h-progress-fill" />
          </div>
        </div>

        {/* Happy Students – below-left */}
        <div className="h-badge badge-students animate-float">
          <div className="h-students-header">
            <span className="h-badge-title">Happy Students</span>
            <span className="h-students-rating">
              4.5 <span className="h-star">★</span>
            </span>
          </div>
          <div className="h-avatars">
            <img src="/figma_images/9ef8cb329b949267cc8214b6727067c4a13af4b4.png" alt="" className="h-av" />
            <img src="/figma_images/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png" alt="" className="h-av" />
            <img src="/figma_images/83fb3e04056cc892636460bee5791aa3f243854c.png" alt="" className="h-av" />
            <img src="/figma_images/f3cf29a8fed39589ceb38423e65b26b8d6c93123.png" alt="" className="h-av" />
            <img src="/figma_images/5824acacb3b76175bc84084ec18597109498f96d.png" alt="" className="h-av" />
            <img src="/figma_images/7fdccc783264eedc4fb989984eecbc4058a219f2.png" alt="" className="h-av" />
            <span className="h-av-more">2K+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
