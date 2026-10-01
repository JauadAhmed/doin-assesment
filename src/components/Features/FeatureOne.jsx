import React from 'react';
import { STATS } from '../../data/content';
import './FeatureOne.css';

export default function FeatureOne() {
  return (
    <section className="features-wrapper" id="about">
      {/* Decorative background glows */}
      <div className="features-bg-deco">
        <div className="fbg-glow fbg-glow-lime" />
        <div className="fbg-glow fbg-glow-blue" />
      </div>

      <div className="container">
        {/* ── Feature Row 1: Your Path to Professional Growth ── */}
        <div className="f1-grid">
          {/* Left: Text + Stats */}
          <div className="f1-text-col">
            <h2 className="f1-heading">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="f1-body">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="f1-stats">
              {STATS.map((stat, i) => (
                <div key={i} className="f1-stat">
                  <div className="f1-stat-val">{stat.value}</div>
                  <div className="f1-stat-lbl">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual composite */}
          <div className="f1-visual-col">
            <div className="f1-visual">
              {/* Course card (bottom-left layer) */}
              <div className="f1-course-card">
                <div className="f1-card-img-wrap">
                  <img
                    src="/figma_images/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.png"
                    alt="Learn Figma from Basic"
                    className="f1-card-thumb"
                  />
                  <div className="f1-card-pills">
                    <span className="f1-pill">17 Lessons</span>
                    <span className="f1-pill">2 hours 16 mins</span>
                  </div>
                </div>
                <div className="f1-card-body">
                  <div className="f1-card-title">Learn Figma from Basic</div>
                  <div className="f1-card-by">by purepearl studio</div>
                  <div className="f1-card-level">
                    <span className="f1-level-badge">Beginner</span>
                  </div>
                  <div className="f1-card-price">$25</div>
                </div>
              </div>

              {/* Student image (main, sits over card) */}
              <img
                src="/figma_images/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
                alt="ByteSpace Student"
                className="f1-student"
              />

              {/* Lime blob 1 — upper-right */}
              <img
                src="/feature_orbs/feature_lime_blob1.png"
                alt=""
                className="f1-blob f1-blob1 animate-float"
              />
              {/* Lime blob 2 — mid-right */}
              <img
                src="/feature_orbs/feature_lime_blob2.png"
                alt=""
                className="f1-blob f1-blob2 animate-float-delayed"
              />

              {/* Learning Progress badge */}
              <div className="f1-badge f1-badge-progress animate-float-delayed">
                <div className="f1-badge-lbl">Learning Progress</div>
                <div className="f1-badge-pct">55%</div>
                <div className="f1-prog-track">
                  <div className="f1-prog-fill" />
                </div>
              </div>

              {/* Happy Students badge */}
              <div className="f1-badge f1-badge-students animate-float">
                <div className="f1-stu-header">
                  <span className="f1-stu-title">Happy Students</span>
                </div>
                <div className="f1-stu-row">
                  <div className="f1-avatars">
                    <img src="/figma_images/9ef8cb329b949267cc8214b6727067c4a13af4b4.png" alt="" className="f1-av" />
                    <img src="/figma_images/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png" alt="" className="f1-av" />
                    <img src="/figma_images/83fb3e04056cc892636460bee5791aa3f243854c.png" alt="" className="f1-av" />
                    <img src="/figma_images/f3cf29a8fed39589ceb38423e65b26b8d6c93123.png" alt="" className="f1-av" />
                    <img src="/figma_images/5824acacb3b76175bc84084ec18597109498f96d.png" alt="" className="f1-av" />
                    <img src="/figma_images/7fdccc783264eedc4fb989984eecbc4058a219f2.png" alt="" className="f1-av" />
                    <img src="/figma_images/1e078348a54489bfd231d82fe1944770883c8d80.png" alt="" className="f1-av" />
                    <span className="f1-av-more">2K+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
