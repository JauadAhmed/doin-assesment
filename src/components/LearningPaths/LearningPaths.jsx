import React from 'react';
import { LEARNING_PATHS } from '../../data/content';
import './LearningPaths.css';

export default function LearningPaths({ onSelectCategory }) {
  return (
    <section className="learning-paths-section" id="categories">
      <div className="container">
        <div className="section-header-centered">
          <h2 className="section-title">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="section-desc">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="categories-grid">
          {LEARNING_PATHS.map((item) => (
            <div 
              key={item.id} 
              className="category-card"
              onClick={() => onSelectCategory && onSelectCategory(item.title)}
              id={`cat-card-${item.id}`}
            >
              <div className="category-icon-wrapper">
                <img 
                  src={item.iconUrl} 
                  alt={item.title} 
                  className="category-svg-icon"
                />
              </div>
              <h3 className="category-name">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
