import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CREATOR_BENEFITS } from '../../data/content';
import './FeatureTwo.css';

export default function FeatureTwo() {
  return (
    <div className="f2-wrapper">
      <div className="container">
        {/* ── Feature Row 2: Create & Manage Courses Easily ── */}
        <div className="f2-grid">
          {/* Left: Creator visual */}
          <div className="f2-visual-col">
            <div className="f2-visual">
              {/* Lime blob 1 — top-right of visual */}
              <img
                src="/feature_orbs/feature_lime_blob1.png"
                alt=""
                className="f2-blob f2-blob-tr animate-float"
              />
              {/* Lime blob 2 — mid-right */}
              <img
                src="/feature_orbs/feature_lime_blob2.png"
                alt=""
                className="f2-blob f2-blob-mr animate-float-delayed"
              />

              {/* Total Revenue badge */}
              <div className="f2-badge f2-badge-revenue-total">
                <div className="f2-rev-meta">
                  <span className="f2-rev-title">Total Revenue</span>
                  <span className="f2-rev-sub">July 1-28</span>
                </div>
                <div className="f2-rev-row">
                  <span className="f2-rev-amount">$120.29</span>
                  <span className="f2-rev-chip">+12$</span>
                </div>
                <div className="f2-sparkline" />
              </div>

              {/* Year to Date badge */}
              <div className="f2-badge f2-badge-ytd">
                <div className="f2-rev-meta">
                  <span className="f2-rev-title">Year to Date</span>
                  <span className="f2-rev-sub">2023</span>
                </div>
                <div className="f2-ytd-amount">$1,200.38</div>
                <span className="f2-rev-chip f2-chip-sm">+12$</span>
              </div>

              {/* Creator photo */}
              <img
                src="/figma_images/0d6596fb1df66aaf843ee85722f439fada233946.png"
                alt="ByteSpace Creator"
                className="f2-creator-img"
                onError={(e) => {
                  e.target.src = '/figma_images/29a52a24e51266edcd7d57d73392ee5fc4833220.png';
                }}
              />

              {/* Happy Students badge */}
              <div className="f2-badge f2-badge-students">
                <div className="f2-stu-title">Happy Students</div>
                <div className="f2-stu-rating">
                  <span className="f2-stu-score">4.8</span>
                  <span className="f2-stu-star">★</span>
                </div>
                <div className="f2-avatars">
                  <img src="/figma_images/9ef8cb329b949267cc8214b6727067c4a13af4b4.png" alt="" className="f2-av" />
                  <img src="/figma_images/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png" alt="" className="f2-av" />
                  <img src="/figma_images/83fb3e04056cc892636460bee5791aa3f243854c.png" alt="" className="f2-av" />
                  <img src="/figma_images/f3cf29a8fed39589ceb38423e65b26b8d6c93123.png" alt="" className="f2-av" />
                  <img src="/figma_images/5824acacb3b76175bc84084ec18597109498f96d.png" alt="" className="f2-av" />
                  <img src="/figma_images/7fdccc783264eedc4fb989984eecbc4058a219f2.png" alt="" className="f2-av" />
                  <img src="/figma_images/1e078348a54489bfd231d82fe1944770883c8d80.png" alt="" className="f2-av" />
                  <span className="f2-av-more">2K+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text + benefits */}
          <div className="f2-text-col">
            <h2 className="f2-heading">
              Create &amp; Manage<br />Courses Easily.
            </h2>
            <p className="f2-body">
              <strong>ByteSpace</strong> supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>
            <div className="f2-checklist">
              {CREATOR_BENEFITS.map((b, i) => (
                <div key={i} className="f2-check-item">
                  <CheckCircle2 size={22} className="f2-check-icon" />
                  <span className="f2-check-text">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
