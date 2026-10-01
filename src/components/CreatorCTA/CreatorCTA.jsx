import React from 'react';
import './CreatorCTA.css';

export default function CreatorCTA({ onJoinCreator }) {
  return (
    <section className="cta-section" id="creator">
      <div className="cta-banner">
        {/* ── Grid overlay (12% opacity) ── */}
        <div className="cta-grid-overlay" />

        {/* ── LEFT ornaments ── */}
        <img src="/cta_ornaments/cta_lime_large_bl.png" alt="" className="cta-orb cta-orb-lime-large animate-float" />
        <img src="/cta_ornaments/cta_white_sm_ml.png" alt="" className="cta-orb cta-orb-white-sm animate-float-delayed" />
        <img src="/cta_ornaments/cta_cone_white_bl.png" alt="" className="cta-orb cta-orb-cone-wbl animate-float" />
        <img src="/cta_ornaments/cta_cone_lime_bl2.png" alt="" className="cta-orb cta-orb-cone-lbl animate-float-delayed" />

        {/* ── RIGHT ornaments ── */}
        <img src="/cta_ornaments/cta_cone_sm_tr.png" alt="" className="cta-orb cta-orb-cone-str animate-float-delayed" />
        <img src="/cta_ornaments/cta_circle_white_r.png" alt="" className="cta-orb cta-orb-circle-wr animate-float" />
        <img src="/cta_ornaments/cta_cone_large_tr.png" alt="" className="cta-orb cta-orb-cone-ltr animate-float-delayed" />

        {/* ── Main content ── */}
        <div className="cta-content">
          <h2 className="cta-title">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="cta-desc">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <button
            type="button"
            className="cta-btn"
            onClick={onJoinCreator}
            id="cta-join-creator-btn"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
}
