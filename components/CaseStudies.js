
'use client';
import { useEffect } from 'react';
import FormBanner from './FormBanner';

export default function CaseStudies({ city }) {
  useEffect(() => {
    // ---- script block ----
    try {
      (function() {
        // ── Case studies data ──
        var cases = [
          { img: '/images/clean-ducts.jpg', tag: 'Client Project', scope: 'Interior · Air Ducts', title: 'Whole-Home Duct Cleaning', desc: 'A full mechanical cleaning and HEPA extraction across every supply and return in the home. We pulled out years of compacted dust, fibers, and allergens. Clean airflow restored to every room and a noticeably fresher home within hours.', stat: 'Full network', duration: '1 day' },
          { img: '/images/dryer-vent-before-cleaning.jpg', tag: 'Before', scope: 'Safety · Dryer Vent', title: 'Clogged Dryer Vent', desc: 'This dryer vent was almost entirely blocked with compacted lint — the #1 cause of residential dryer fires. Cycles had doubled in length and the appliance was overheating every load. A serious hazard hiding in plain sight.', stat: 'Before state', duration: '—' },
          { img: '/images/duct-after-cleaning.jpg', tag: 'Client Project', scope: 'Interior · Supply Line', title: 'Supply Line Clean-Out', desc: 'Removed heavy dust and debris accumulation from the main supply line. Airflow is back to full capacity and the home\u2019s overall dust load dropped noticeably within days of the visit.', stat: 'Restored airflow', duration: 'Half day' },
          { img: '/images/repaired-hvac.jpg', tag: 'Client Project', scope: 'Exterior · HVAC Repair', title: 'Full HVAC System Repair', desc: 'This outdoor condenser had a failed capacitor, low refrigerant, and fouled coils. We replaced the failed components, recharged the system to spec, and cleaned the coils — restoring the unit to factory performance and ready for another decade of reliable cooling.', stat: 'Fully restored', duration: '1 day' },
          { img: '/images/clean-dryer-vent.jpg', tag: 'After', scope: 'Safety · Dryer Vent', title: 'Restored Dryer Vent', desc: 'After a full mechanical cleaning of the vent line and transition hose, this dryer exhausts at full velocity again. Cycles are back to normal length, the appliance runs cooler, and a major fire risk has been eliminated.', stat: 'Fire risk cleared', duration: '1 hour' }
        ];
      
        // ── Build bento grid ──
        var grid = document.getElementById('csBentoGrid');
        var scopeIcon = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6-3.3 3.3-1.6-1.6a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.4l5.3-5.3 1.6 1.6a1 1 0 001.4 0l4-4 1.6 1.6a1 1 0 001.4-1.4l-4-4a1 1 0 00-1-0z"/></svg>';
        var arrowIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
      
        cases.forEach(function(c, i) {
          var card = document.createElement('div');
          card.className = 'bento-card' + (i === 3 ? ' cs-bento-span2' : '');
          card.style.animation = 'caseReveal 0.6s cubic-bezier(0.16,1,0.3,1) ' + (0.15 + i * 0.08) + 's both';
          card.innerHTML = '<img src="' + c.img + '" alt="' + c.title + '">' +
            '<div class="bento-card-gradient"></div>' +
            '<div class="bento-tag">' + c.tag + '</div>' +
            '<div class="bento-bottom">' +
              '<div class="bento-scope">' + scopeIcon + ' ' + c.scope + '</div>' +
              '<div class="bento-title">' + c.title + '</div>' +
              '<div class="bento-arrow">Learn more ' + arrowIcon + '</div>' +
            '</div>';
          card.addEventListener('click', function() { openModal(c); });
          grid.appendChild(card);
        });
      
        // ── Modal ──
        var modal = document.getElementById('csModal');
        var closeBtn = document.getElementById('csModalClose');
      
      
        function openModal(c) {
          document.getElementById('csModalImg').src = c.img;
          document.getElementById('csModalImg').alt = c.title;
          document.getElementById('csModalTag').textContent = c.tag;
          document.getElementById('csModalScope').textContent = c.scope;
          document.getElementById('csModalDuration').textContent = c.duration;
          document.getElementById('csModalTitle').textContent = c.title;
          document.getElementById('csModalDesc').textContent = c.desc;
          document.getElementById('csModalStat').textContent = c.stat;
          modal.classList.add('active');
          lockScroll();
        }

        function closeModal() {
          modal.classList.remove('active');
          unlockScroll();
        }

        function preventScroll(e) { e.preventDefault(); }
        function preventKeys(e) {
          if (['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].indexOf(e.key) !== -1) e.preventDefault();
        }
        function lockScroll() {
          window.addEventListener('wheel', preventScroll, { passive: false });
          window.addEventListener('touchmove', preventScroll, { passive: false });
          window.addEventListener('keydown', preventKeys, { passive: false });
        }
        function unlockScroll() {
          window.removeEventListener('wheel', preventScroll, { passive: false });
          window.removeEventListener('touchmove', preventScroll, { passive: false });
          window.removeEventListener('keydown', preventKeys, { passive: false });
        }
      
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
      
      })();
    } catch (e) { console.error('[component script]', e); }
  }, []);
  return (
    <>

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
      
        .cs-wrap * { margin: 0; padding: 0; box-sizing: border-box; }
        .cs-wrap { font-family: 'DM Sans', sans-serif; background: #0a0a0a; }
      
        @keyframes caseReveal { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmerLine { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes shimmerText { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes formGlow { 0%, 100% { box-shadow: 0 0 40px rgba(37,99,235,0.08); } 50% { box-shadow: 0 0 60px rgba(37,99,235,0.15); } }
        @keyframes modalIn { from { opacity: 0; transform: translateY(30px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes overlayIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes crownFloat { 0%, 100% { transform: translateY(0) rotate(-3deg); } 50% { transform: translateY(-6px) rotate(3deg); } }
        @keyframes starTwinkle { 0%, 100% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.1); } }
        @keyframes slideStatIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      
        /* Section */
        .cs-section { background: #0a0a0a; padding: 128px 0 0; position: relative; overflow: hidden; }
        .cs-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
      
        /* Heading */
        .cs-header { margin-bottom: 72px; text-align: center; }
        .cs-h2 { font-family: 'Inter Tight', sans-serif; font-size: 48px; font-weight: 700; color: #fff; letter-spacing: -0.04em; line-height: 1.08; }
        .cs-h2-accent { background: linear-gradient(135deg, #60a5fa, #38bdf8, #0ea5e9, #38bdf8, #60a5fa); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmerText 4s ease-in-out infinite; }
      
      
        /* Featured */
        .cs-featured { position: relative; border-radius: 20px; overflow: hidden; margin-bottom: 16px; border: 1px solid rgba(37,99,235,0.2); }
        .cs-featured-grid { display: grid; grid-template-columns: 1.1fr 1fr; min-height: 480px; }
        .cs-featured-img-wrap { position: relative; overflow: hidden; }
        .cs-featured-img-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .cs-featured-img-fade { position: absolute; inset: 0; background: linear-gradient(to right, transparent 60%, #0a0f18 100%); }
        .cs-featured-star { position: absolute; z-index: 3; opacity: 0.3; filter: drop-shadow(0 0 4px rgba(96,165,250,0.5)); }
        .cs-crown-wrap { position: absolute; top: 20px; left: 20px; z-index: 5; display: flex; align-items: center; gap: 8px; }
        .cs-crown { font-size: 28px; animation: crownFloat 3s ease-in-out infinite; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.4)); }
        .cs-crown-badge { background: linear-gradient(135deg, rgba(37,99,235,0.9), rgba(96,165,250,0.9)); backdrop-filter: blur(12px); border-radius: 10px; padding: 7px 14px; font-size: 13px; font-weight: 700; color: #fff; font-family: 'Inter Tight', sans-serif; letter-spacing: 0.01em; box-shadow: 0 4px 16px rgba(37,99,235,0.4); }
      
        .cs-featured-content { background: linear-gradient(135deg, #0a0f18, #101a25); padding: 48px 40px; display: flex; flex-direction: column; justify-content: center; }
        .cs-featured-meta { font-size: 11px; color: rgba(255,255,255,0.4); font-weight: 500; display: flex; align-items: center; gap: 5px; margin-bottom: 12px; font-family: 'Inter Tight', sans-serif; }
        .cs-featured-meta-sep { margin: 0 6px; color: rgba(255,255,255,0.15); }
        .cs-featured-title { font-family: 'Inter Tight', sans-serif; font-size: 28px; font-weight: 800; color: #fff; letter-spacing: -0.03em; line-height: 1.15; margin-bottom: 16px; }
        .cs-featured-desc { font-size: 15px; color: rgba(255,255,255,0.5); line-height: 1.75; font-weight: 300; margin-bottom: 28px; }
        .cs-featured-stats { display: flex; gap: 24px; margin-bottom: 28px; }
        .cs-stat-val { font-family: 'Inter Tight', sans-serif; font-size: 24px; font-weight: 800; color: #60a5fa; letter-spacing: -0.03em; line-height: 1; }
        .cs-stat-label { font-size: 11px; color: rgba(255,255,255,0.35); margin-top: 4px; font-family: 'Inter Tight', sans-serif; font-weight: 500; }
        .cs-testimonial { background: rgba(37,99,235,0.08); border: 1px solid rgba(37,99,235,0.15); border-radius: 14px; padding: 20px; }
        .cs-testimonial-stars { display: flex; gap: 3px; margin-bottom: 10px; }
        .cs-testimonial-text { font-size: 14px; color: rgba(255,255,255,0.65); line-height: 1.6; font-style: italic; font-weight: 300; margin-bottom: 10px; }
        .cs-testimonial-author { font-size: 12px; font-weight: 600; color: #60a5fa; font-family: 'Inter Tight', sans-serif; }
      
        /* Bento grid */
        .cs-bento-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 260px; gap: 16px; }
        .bento-card { position: relative; border-radius: 16px; overflow: hidden; cursor: pointer; background: #111; border: 1px solid rgba(255,255,255,0.06); transition: border-color 0.3s ease; }
        .bento-card:hover { border-color: rgba(37,99,235,0.3); }
        .bento-card:hover img { transform: scale(1.06); }
        .bento-card:hover .bento-arrow { background: #2563eb; color: #fff; border-color: #2563eb; }
        .bento-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; will-change: transform; position: absolute; inset: 0; }
        .bento-card-gradient { position: absolute; inset: 0; z-index: 1; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%); }
        .bento-tag { position: absolute; top: 14px; left: 14px; z-index: 3; background: rgba(37,99,235,0.85); backdrop-filter: blur(8px); border-radius: 6px; padding: 4px 10px; font-size: 11px; font-weight: 600; color: #fff; font-family: 'Inter Tight', sans-serif; letter-spacing: 0.01em; }
        .bento-bottom { position: absolute; bottom: 0; left: 0; right: 0; z-index: 2; padding: 20px; }
        .bento-scope { font-size: 10px; color: rgba(255,255,255,0.4); font-weight: 500; margin-bottom: 5px; display: flex; align-items: center; gap: 4px; font-family: 'Inter Tight', sans-serif; }
        .bento-title { font-size: 16px; font-weight: 700; color: #fff; font-family: 'Inter Tight', sans-serif; letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 12px; }
        .bento-arrow { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: #60a5fa; font-family: 'Inter Tight', sans-serif; padding: 6px 14px; border-radius: 100px; border: 1px solid rgba(96,165,250,0.25); background: rgba(37,99,235,0.1); transition: all 0.3s ease; }
        .cs-bento-span2 { grid-column: span 2; }
      
        /* Modal */
        .cs-modal-overlay { display: none; position: fixed; inset: 0; z-index: 10000; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); align-items: center; justify-content: center; animation: overlayIn 0.3s ease both; }
        .cs-modal-overlay.active { display: flex; }
                .cs-modal-inner { background: #111; border-radius: 20px; overflow: hidden; max-width: 720px; width: 100%; position: relative; border: 1px solid rgba(37,99,235,0.2); animation: modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both; max-height: 90vh; overflow-y: auto; margin: 40px; }
        .cs-modal-close { position: absolute; top: 16px; right: 16px; z-index: 5; width: 36px; height: 36px; border-radius: 50%; background: rgba(0,0,0,0.5); backdrop-filter: blur(8px); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 18px; transition: background 0.2s; }
        .cs-modal-close:hover { background: rgba(37,99,235,0.6); }
        .cs-modal-img { position: relative; height: 300px; }
        .cs-modal-img img { width: 100%; height: 100%; object-fit: cover; }
        .cs-modal-img-fade { position: absolute; inset: 0; background: linear-gradient(to top, #111 0%, transparent 60%); }
        .cs-modal-tag { position: absolute; top: 16px; left: 16px; background: rgba(37,99,235,0.85); backdrop-filter: blur(8px); border-radius: 8px; padding: 5px 12px; font-size: 12px; font-weight: 600; color: #fff; font-family: 'Inter Tight', sans-serif; letter-spacing: 0.01em; }
        .cs-modal-body { padding: 0 32px 32px; margin-top: -40px; position: relative; z-index: 2; }
        .cs-modal-meta { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
        .cs-modal-meta-item { display: flex; align-items: center; gap: 5px; font-size: 12px; color: rgba(255,255,255,0.4); font-weight: 500; font-family: 'Inter Tight', sans-serif; }
        .cs-modal-title { font-family: 'Inter Tight', sans-serif; font-size: 26px; font-weight: 800; color: #fff; letter-spacing: -0.03em; line-height: 1.2; margin-bottom: 16px; }
        .cs-modal-desc { font-size: 15px; color: rgba(255,255,255,0.55); line-height: 1.8; font-weight: 300; margin-bottom: 24px; }
        .cs-modal-stat { display: inline-flex; align-items: center; gap: 8px; background: rgba(37,99,235,0.1); border: 1px solid rgba(37,99,235,0.2); border-radius: 100px; padding: 8px 16px; margin-bottom: 24px; }
        .cs-modal-stat span { font-size: 13px; font-weight: 600; color: #60a5fa; font-family: 'Inter Tight', sans-serif; }
        .cs-modal-footer { border-top: 1px solid rgba(255,255,255,0.06); padding-top: 24px; display: flex; align-items: center; justify-content: space-between; }
        .cs-modal-footer-text { font-size: 14px; color: rgba(255,255,255,0.4); font-weight: 300; font-family: 'Inter Tight', sans-serif; }
        .cs-modal-cta { display: inline-flex; align-items: center; gap: 8px; font-family: 'Inter Tight', sans-serif; font-size: 14px; font-weight: 600; color: #e0f0fd; padding: 10px 20px; border: 1px solid #2563eb; border-radius: 10px; background: linear-gradient(160deg, #5d9be5 0%, #2563eb 25%, #1e40af 50%, #1d4ed8 72%, #3b82f6 100%); box-shadow: inset 0 1px 0 rgba(155,196,240,0.55), 0 4px 12px rgba(29,78,216,0.4); text-decoration: none; transition: all 0.2s; text-shadow: 0 1px 2px rgba(15,29,80,0.35); }
        .cs-modal-cta:hover { transform: translateY(-1px); }
      
        /* CTA Banner */
        .cs-cta-section { background: #0a0a0a; padding: 72px 0 128px; }
      
        /* Responsive */
        @media (max-width: 960px) {
          .cs-featured-grid { grid-template-columns: 1fr !important; }
          .cs-featured-img-wrap { min-height: 280px !important; }
          .cs-bento-grid { grid-template-columns: 1fr 1fr !important; }
          .cs-bento-span2 { grid-column: span 1 !important; }
          .cs-section { padding: 80px 0 !important; }
          .cs-cta-section { padding: 80px 0 !important; }
          .cs-h2 { font-size: 38px !important; }
        }
      
        @media (max-width: 600px) {
          .cs-bento-grid { grid-template-columns: 1fr !important; }
          .cs-featured-content { padding: 32px 24px !important; }
          .cs-featured-stats { flex-direction: column; gap: 16px !important; }
          .cs-h2 { font-size: 30px !important; }
          .cs-cta-section { padding: 80px 0 !important; }
          .cs-modal-inner { margin: 16px !important; max-height: calc(100vh - 32px) !important; }
          .cs-modal-img { height: 220px !important; }
        }
      `}} />
      
      <div className="cs-wrap">
      
        {/* ═══════════ CASE STUDIES ═══════════ */}
        <section className="cs-section" id="csSection">
      
      
          <div className="cs-inner">
      
            {/* Header */}
            <div className="cs-header">
              <h2 className="cs-h2">See what's possible<br />for <span className="cs-h2-accent">your home.</span></h2>
            </div>
      
            {/* Featured Project */}
            <div className="cs-featured">
              <div className="cs-crown-wrap">
                <div className="cs-crown">👑</div>
                <div className="cs-crown-badge">Featured Project</div>
              </div>
              <div className="cs-featured-grid">
                <div className="cs-featured-img-wrap">
                  <img src="/images/clean-duct-after-deep-clean.jpg" alt="Deep Duct Restoration" />
                  <div className="cs-featured-img-fade"></div>
                  <svg className="cs-featured-star" width="14" height="14" viewBox="0 0 24 24" fill="#60a5fa" style={{ top: '15%', left: '8%', animation: 'starTwinkle 2.5s ease-in-out infinite' }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  <svg className="cs-featured-star" width="10" height="10" viewBox="0 0 24 24" fill="#60a5fa" style={{ top: '25%', left: '20%', animation: 'starTwinkle 2.5s ease-in-out 0.8s infinite' }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  <svg className="cs-featured-star" width="12" height="12" viewBox="0 0 24 24" fill="#60a5fa" style={{ top: '10%', left: '35%', animation: 'starTwinkle 2.5s ease-in-out 1.6s infinite' }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  <svg className="cs-featured-star" width="8" height="8" viewBox="0 0 24 24" fill="#60a5fa" style={{ top: '30%', left: '12%', animation: 'starTwinkle 2.5s ease-in-out 2.2s infinite' }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  <svg className="cs-featured-star" width="11" height="11" viewBox="0 0 24 24" fill="#60a5fa" style={{ top: '20%', left: '42%', animation: 'starTwinkle 2.5s ease-in-out 0.4s infinite' }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                </div>
                <div className="cs-featured-content">
                  <div className="cs-featured-meta">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6-3.3 3.3-1.6-1.6a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.4l5.3-5.3 1.6 1.6a1 1 0 001.4 0l4-4 1.6 1.6a1 1 0 001.4-1.4l-4-4a1 1 0 00-1-0z" /></svg>
                    Interior · Air Duct Restoration
                    <span className="cs-featured-meta-sep">·</span>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" /></svg>
                    1 day
                  </div>
                  <h3 className="cs-featured-title">Deep Duct Restoration</h3>
                  <p className="cs-featured-desc">We stripped years of compacted dust, fibers, and allergens from this main trunk line using mechanical brushing and commercial-grade HEPA extraction. The interior walls are back to bare metal, moving clean, filtered air through every room in the home.</p>
                  <div className="cs-featured-stats">
                    <div style={{ animation: 'slideStatIn 0.5s ease 0.3s both' }}><div className="cs-stat-val">100%</div><div className="cs-stat-label">Dust removed</div></div>
                    <div style={{ animation: 'slideStatIn 0.5s ease 0.45s both' }}><div className="cs-stat-val">0</div><div className="cs-stat-label">Obstructions left</div></div>
                    <div style={{ animation: 'slideStatIn 0.5s ease 0.6s both' }}><div className="cs-stat-val">1 day</div><div className="cs-stat-label">Start to finish</div></div>
                  </div>
                  <div className="cs-testimonial">
                    <div className="cs-testimonial-stars">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#60a5fa"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#60a5fa"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#60a5fa"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#60a5fa"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#60a5fa"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    </div>
                    <p className="cs-testimonial-text">&ldquo;Our allergies are gone and the air smells completely different. I wish we had done this years ago.&rdquo;</p>
                    <div className="cs-testimonial-author">— Sarah K.</div>
                  </div>
                </div>
              </div>
            </div>
      
            {/* Bento Grid */}
            <div className="cs-bento-grid" id="csBentoGrid"></div>
          </div>
        </section>
      
        {/* Modal */}
        <div className="cs-modal-overlay" id="csModal">
          <div className="cs-modal-inner">
            <button className="cs-modal-close" id="csModalClose">&times;</button>
            <div className="cs-modal-img" id="csModalImgWrap">
              <img id="csModalImg" src="" alt="" />
              <div className="cs-modal-img-fade"></div>
              <div className="cs-modal-tag" id="csModalTag"></div>
            </div>
            <div className="cs-modal-body">
              <div className="cs-modal-meta">
                <div className="cs-modal-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6-3.3 3.3-1.6-1.6a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.4l5.3-5.3 1.6 1.6a1 1 0 001.4 0l4-4 1.6 1.6a1 1 0 001.4-1.4l-4-4a1 1 0 00-1-0z" /></svg>
                  <span id="csModalScope"></span>
                </div>
                <div className="cs-modal-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" /></svg>
                  <span id="csModalDuration"></span>
                </div>
              </div>
              <h3 className="cs-modal-title" id="csModalTitle"></h3>
              <p className="cs-modal-desc" id="csModalDesc"></p>
              <div className="cs-modal-stat">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span id="csModalStat"></span>
              </div>
              <div className="cs-modal-footer">
                <p className="cs-modal-footer-text">Need similar work done?</p>
                <a href={`tel:${city.phone}`} className="cs-modal-cta">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      
        {/* ═══════════ CTA BANNER ═══════════ */}
        <section className="cs-cta-section">
          <FormBanner />
        </section>
      
      </div>
    </>
  );
}
