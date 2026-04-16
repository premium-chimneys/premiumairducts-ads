'use client'

import { getCalendlyUrl } from '@/lib/useCalendlyTracking'

export default function Footer({ city }) {
  return (
    <>

      {/* Calendly widget assets */}
      
      
      
      <style dangerouslySetInnerHTML={{__html: `
      @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;800&display=swap');
      
      .footer-wrap {
        font-family: 'Inter Tight', sans-serif;
        background: linear-gradient(180deg, #000000 0%, #000000 35%, #03051a 50%, #070a24 58%, #0d1138 65%, #141a54 72%, #202a72 80%, #313d99 88%, #5360f6 100%);
        color: #fff;
        padding: 60px 40px 30px;
        margin-top: 0;
        position: relative;
        overflow: hidden;
      }
      
      /* === black overlay === */
      .footer-wrap::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000000;
        opacity: 0.8;
        pointer-events: none;
        z-index: 0;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
      }
      
      /* === ambient glow === */
      .footer-glow {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 800px;
        height: 120px;
        background: radial-gradient(ellipse at center bottom, rgba(245,158,11,0.18) 0%, rgba(239,68,68,0.06) 50%, transparent 80%);
        pointer-events: none;
        z-index: 0;
        filter: blur(40px);
        animation: glowPulse 3s ease-in-out infinite;
      }
      
      /* === icicle container === */
      .footer-flames {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 1000px;
        height: 380px;
        pointer-events: none;
        z-index: 0;
      }

      .footer-inner {
        position: relative;
        z-index: 1;
        max-width: 1200px;
        margin: 0 auto;
        padding-left: 24px;
        padding-right: 24px;
        box-sizing: border-box;
      }

      /* === outer icicle (soft glow halo) === */
      .flame-outer {
        position: absolute;
        top: -15px;
        border-radius: 50% 50% 45% 45% / 18% 18% 82% 82%;
        filter: blur(22px);
        transform-origin: top center;
        opacity: 0.12;
      }

      /* === mid icicle (body) === */
      .flame-mid {
        position: absolute;
        top: -8px;
        border-radius: 45% 45% 48% 48% / 12% 12% 88% 88%;
        filter: blur(9px);
        transform-origin: top center;
        opacity: 0.22;
      }

      /* === inner core (bright crystalline center) === */
      .flame-core {
        position: absolute;
        top: 0;
        border-radius: 40% 40% 50% 50% / 8% 8% 92% 92%;
        filter: blur(4px);
        transform-origin: top center;
        opacity: 0.28;
      }

      /* === drips === */
      .spark {
        position: absolute;
        top: 0;
        width: 2px;
        height: 6px;
        border-radius: 1px;
        background: #7dd3fc;
        opacity: 0;
        filter: blur(0.5px);
        pointer-events: none;
        box-shadow: 0 0 4px 1px rgba(56,189,248,0.4);
      }

      /* ---- Icicle group 1 (far left) ---- */
      .fo-1 { left: calc(50% - 280px); width: 100px; height: 120px; background: radial-gradient(ellipse at 50% 10%, #60a5fa 0%, #1e40af 40%, transparent 75%); animation: sway1 4s ease-in-out infinite; }
      .fm-1 { left: calc(50% - 265px); width: 70px; height: 100px; background: radial-gradient(ellipse at 50% 15%, #bae6fd 0%, #60a5fa 45%, transparent 80%); animation: sway2 3.2s ease-in-out infinite 0.2s; }
      .fc-1 { left: calc(50% - 255px); width: 40px; height: 70px; background: radial-gradient(ellipse at 50% 20%, #e0f2fe 0%, #bae6fd 50%, transparent 85%); animation: sway3 2.6s ease-in-out infinite 0.1s; }

      /* ---- Icicle group 2 (left) ---- */
      .fo-2 { left: calc(50% - 190px); width: 120px; height: 170px; background: radial-gradient(ellipse at 50% 10%, #3b82f6 0%, #1e3a8a 45%, transparent 75%); animation: sway2 4.5s ease-in-out infinite 0.5s; }
      .fm-2 { left: calc(50% - 170px); width: 80px; height: 140px; background: radial-gradient(ellipse at 50% 15%, #38bdf8 0%, #3b82f6 40%, transparent 78%); animation: sway3 3.5s ease-in-out infinite 0.3s; }
      .fc-2 { left: calc(50% - 158px); width: 48px; height: 100px; background: radial-gradient(ellipse at 50% 20%, #ecfeff 0%, #7dd3fc 45%, transparent 82%); animation: sway1 2.8s ease-in-out infinite 0.4s; }

      /* ---- Icicle group 3 (center-left) ---- */
      .fo-3 { left: calc(50% - 100px); width: 140px; height: 230px; background: radial-gradient(ellipse at 50% 10%, #60a5fa 0%, #1e40af 35%, transparent 72%); animation: sway3 4.2s ease-in-out infinite 0.2s; }
      .fm-3 { left: calc(50% - 75px); width: 95px; height: 190px; background: radial-gradient(ellipse at 50% 15%, #bae6fd 0%, #60a5fa 38%, transparent 76%); animation: sway1 3.4s ease-in-out infinite 0.6s; }
      .fc-3 { left: calc(50% - 58px); width: 55px; height: 140px; background: radial-gradient(ellipse at 50% 20%, #f0f9ff 0%, #bae6fd 40%, transparent 80%); animation: sway2 2.7s ease-in-out infinite 0.3s; }

      /* ---- Icicle group 4 (center — longest) ---- */
      .fo-4 { left: calc(50% - 45px); width: 130px; height: 290px; background: radial-gradient(ellipse at 50% 8%, #60a5fa 0%, #1e3a8a 40%, transparent 72%); animation: sway1 3.6s ease-in-out infinite 0.1s; }
      .fm-4 { left: calc(50% - 25px); width: 85px; height: 240px; background: radial-gradient(ellipse at 50% 12%, #7dd3fc 0%, #38bdf8 35%, transparent 75%); animation: sway3 3s ease-in-out infinite 0.4s; }
      .fc-4 { left: calc(50% - 10px); width: 50px; height: 180px; background: radial-gradient(ellipse at 50% 18%, #ffffff 0%, #e0f2fe 30%, #bae6fd 55%, transparent 82%); animation: sway2 2.4s ease-in-out infinite 0.2s; }

      /* ---- Icicle group 5 (center-right) ---- */
      .fo-5 { left: calc(50% + 20px); width: 130px; height: 210px; background: radial-gradient(ellipse at 50% 10%, #3b82f6 0%, #1e3a8a 42%, transparent 74%); animation: sway2 4.1s ease-in-out infinite 0.7s; }
      .fm-5 { left: calc(50% + 40px); width: 90px; height: 175px; background: radial-gradient(ellipse at 50% 15%, #38bdf8 0%, #3b82f6 40%, transparent 78%); animation: sway1 3.3s ease-in-out infinite 0.5s; }
      .fc-5 { left: calc(50% + 55px); width: 52px; height: 125px; background: radial-gradient(ellipse at 50% 20%, #ecfeff 0%, #7dd3fc 42%, transparent 80%); animation: sway3 2.5s ease-in-out infinite 0.35s; }

      /* ---- Icicle group 6 (right) ---- */
      .fo-6 { left: calc(50% + 110px); width: 115px; height: 160px; background: radial-gradient(ellipse at 50% 10%, #60a5fa 0%, #1e40af 42%, transparent 74%); animation: sway3 3.8s ease-in-out infinite 0.3s; }
      .fm-6 { left: calc(50% + 128px); width: 75px; height: 130px; background: radial-gradient(ellipse at 50% 15%, #bae6fd 0%, #60a5fa 42%, transparent 78%); animation: sway2 3s ease-in-out infinite 0.6s; }
      .fc-6 { left: calc(50% + 140px); width: 44px; height: 90px; background: radial-gradient(ellipse at 50% 20%, #e0f2fe 0%, #bae6fd 48%, transparent 82%); animation: sway1 2.6s ease-in-out infinite 0.25s; }

      /* ---- Icicle group 7 (far right) ---- */
      .fo-7 { left: calc(50% + 200px); width: 95px; height: 110px; background: radial-gradient(ellipse at 50% 10%, #3b82f6 0%, #1e3a8a 44%, transparent 76%); animation: sway1 4.4s ease-in-out infinite 0.8s; }
      .fm-7 { left: calc(50% + 213px); width: 65px; height: 90px; background: radial-gradient(ellipse at 50% 15%, #38bdf8 0%, #3b82f6 44%, transparent 80%); animation: sway3 3.4s ease-in-out infinite 0.45s; }
      .fc-7 { left: calc(50% + 223px); width: 38px; height: 60px; background: radial-gradient(ellipse at 50% 20%, #ecfeff 0%, #7dd3fc 50%, transparent 85%); animation: sway2 2.7s ease-in-out infinite 0.55s; }

      /* ---- Drips (water drops falling from the icicles) ---- */
      .spark-1  { left: calc(50% - 30px);  animation: sparkRise1 3.2s ease-in infinite 0.1s; }
      .spark-2  { left: calc(50% + 15px);  animation: sparkRise2 3.8s ease-in infinite 0.6s; }
      .spark-3  { left: calc(50% - 80px);  animation: sparkRise3 2.8s ease-in infinite 1.0s; }
      .spark-4  { left: calc(50% + 60px);  animation: sparkRise1 3.5s ease-in infinite 0.3s; }
      .spark-5  { left: calc(50% - 10px);  animation: sparkRise2 3s ease-in infinite 1.4s; }
      .spark-6  { left: calc(50% + 100px); animation: sparkRise3 4s ease-in infinite 0.2s; }
      .spark-7  { left: calc(50% - 150px); animation: sparkRise1 3.4s ease-in infinite 0.8s; }
      .spark-8  { left: calc(50% + 140px); animation: sparkRise2 3.6s ease-in infinite 0.5s; }
      .spark-9  { left: calc(50% + 40px);  animation: sparkRise3 3.1s ease-in infinite 1.1s; }
      .spark-10 { left: calc(50% - 55px);  animation: sparkRise1 3.8s ease-in infinite 0.4s; }
      .spark-11 { left: calc(50% + 5px);   animation: sparkRise2 2.6s ease-in infinite 0.9s; }
      .spark-12 { left: calc(50% - 120px); animation: sparkRise3 3.5s ease-in infinite 1.3s; }

      /* === Animations — subtle icicle drip/shimmer === */
      @keyframes sway1 {
        0%, 100% { transform: scaleY(1) scaleX(1); }
        50% { transform: scaleY(1.015) scaleX(0.995); }
      }
      @keyframes sway2 {
        0%, 100% { transform: scaleY(1) scaleX(1); }
        50% { transform: scaleY(1.02) scaleX(0.99); }
      }
      @keyframes sway3 {
        0%, 100% { transform: scaleY(1) scaleX(1); }
        50% { transform: scaleY(1.012) scaleX(0.997); }
      }
      @keyframes sparkRise1 {
        0% { transform: translateY(80px) rotate(0deg); opacity: 0; }
        10% { opacity: 0.7; }
        50% { transform: translateY(180px); opacity: 0.6; }
        100% { transform: translateY(320px); opacity: 0; }
      }
      @keyframes sparkRise2 {
        0% { transform: translateY(60px) rotate(0deg); opacity: 0; }
        12% { opacity: 0.65; }
        55% { transform: translateY(170px); opacity: 0.5; }
        100% { transform: translateY(300px); opacity: 0; }
      }
      @keyframes sparkRise3 {
        0% { transform: translateY(100px) rotate(0deg); opacity: 0; }
        8% { opacity: 0.7; }
        45% { transform: translateY(200px); opacity: 0.55; }
        100% { transform: translateY(340px); opacity: 0; }
      }
      @keyframes glowPulse {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 1; }
      }
      
      .footer-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 40px;
        flex-wrap: wrap;
      }
      .footer-left {
        flex: 1;
        min-width: 280px;
      }
      .footer-heading {
        font-family: 'Inter Tight', sans-serif;
        font-size: 48px;
        font-weight: 700;
        letter-spacing: -0.04em;
        line-height: 1.08;
        margin: 0 0 28px;
        color: #fff;
      }
      .footer-hours-title {
        font-size: 15px;
        font-weight: 600;
        margin: 0 0 6px;
        color: #fff;
      }
      .footer-hours {
        font-size: 14px;
        color: rgba(255,255,255,0.55);
        margin: 0 0 4px;
        line-height: 1.6;
      }
      .footer-service-title {
        font-size: 15px;
        font-weight: 600;
        margin: 20px 0 6px;
        color: #fff;
      }
      .footer-service-area {
        font-size: 14px;
        color: rgba(255,255,255,0.55);
        margin: 0;
      }
      .footer-bbb {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-top: 28px;
      }
      .footer-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 14px;
        min-width: 220px;
      }
      .footer-btn-book {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-family: 'Inter Tight', sans-serif;
        font-size: 15px;
        font-weight: 600;
        color: #e0f0fd;
        text-decoration: none;
        padding: 12px 24px;
        width: 240px;
        height: 46px;
        box-sizing: border-box;
        border: 1px solid #2563eb;
        border-radius: 10px;
        background: linear-gradient(160deg, #5d9be5 0%, #2563eb 25%, #1e40af 50%, #1d4ed8 72%, #3b82f6 100%);
        box-shadow: inset 0 1px 0 rgba(155,196,240,0.55), inset 0 -1px 0 rgba(0,0,0,0.22), 0 4px 16px rgba(29,78,216,0.45);
        cursor: pointer;
        transition: all 0.22s ease;
        position: relative;
        overflow: hidden;
        text-shadow: 0 1px 2px rgba(15,29,80,0.35);
      }
      .footer-btn-book::before {
        content: '';
        position: absolute;
        top: 0;
        left: -70%;
        width: 40%;
        height: 100%;
        background: linear-gradient(105deg, transparent 35%, rgba(175,210,255,0.35) 50%, transparent 65%);
        transform: skewX(-12deg);
        pointer-events: none;
        transition: left 0.55s ease;
      }
      .footer-btn-book:hover {
        transform: translateY(-2px);
        box-shadow: inset 0 1px 0 rgba(155,196,240,0.55), inset 0 -1px 0 rgba(0,0,0,0.22), 0 8px 24px rgba(29,78,216,0.5);
      }
      .footer-btn-book:hover::before { left: 130%; }
      .footer-btn-phone {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-family: 'Inter Tight', sans-serif;
        font-size: 15px;
        font-weight: 500;
        color: rgba(255,255,255,0.8);
        text-decoration: none;
        padding: 12px 24px;
        width: 240px;
        height: 46px;
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.04);
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .footer-btn-phone:hover {
        border-color: rgba(255,255,255,0.25);
        background: rgba(255,255,255,0.08);
        color: #ffffff;
      }
      .footer-divider {
        border: none;
        border-top: 1px solid rgba(255,255,255,0.08);
        margin: 40px 0 20px;
      }
      .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
      }
      .footer-copyright {
        font-size: 13px;
        color: rgba(255,255,255,0.4);
        margin: 0;
      }
      .footer-bottom-right {
        display: flex;
        align-items: center;
        gap: 24px;
      }
      .footer-socials {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      .footer-social-icon {
        width: 20px;
        height: 20px;
        color: rgba(255,255,255,0.6);
        transition: color 0.2s;
        cursor: pointer;
      }
      .footer-social-icon:hover {
        color: #fff;
      }
      .footer-links {
        display: flex;
        align-items: center;
        gap: 20px;
      }
      .footer-link {
        font-size: 13px;
        color: rgba(255,255,255,0.5);
        text-decoration: none;
        transition: color 0.2s;
      }
      .footer-link:hover {
        color: #fff;
      }
      
      @media (max-width: 768px) {
        .footer-wrap {
          padding: 40px 16px 24px;
        }
        .footer-inner {
          padding-left: 0;
          padding-right: 0;
        }
        .footer-top {
          flex-direction: column;
          align-items: flex-start;
        }
        .footer-right {
          align-items: flex-start;
        }
        .footer-bottom {
          flex-direction: column;
          align-items: flex-start;
        }
        .footer-bottom-right {
          flex-direction: column;
          align-items: flex-start;
        }
        .footer-heading {
          font-size: 38px;
        }
      }
      `}} />
      
      <footer className="footer-wrap">
        <div className="footer-glow"></div>
        <div className="footer-flames">
          {/* Flame group 1 — far left */}
          <div className="flame-outer fo-1"></div>
          <div className="flame-mid fm-1"></div>
          <div className="flame-core fc-1"></div>
          {/* Flame group 2 — left */}
          <div className="flame-outer fo-2"></div>
          <div className="flame-mid fm-2"></div>
          <div className="flame-core fc-2"></div>
          {/* Flame group 3 — center-left */}
          <div className="flame-outer fo-3"></div>
          <div className="flame-mid fm-3"></div>
          <div className="flame-core fc-3"></div>
          {/* Flame group 4 — center (tallest) */}
          <div className="flame-outer fo-4"></div>
          <div className="flame-mid fm-4"></div>
          <div className="flame-core fc-4"></div>
          {/* Flame group 5 — center-right */}
          <div className="flame-outer fo-5"></div>
          <div className="flame-mid fm-5"></div>
          <div className="flame-core fc-5"></div>
          {/* Flame group 6 — right */}
          <div className="flame-outer fo-6"></div>
          <div className="flame-mid fm-6"></div>
          <div className="flame-core fc-6"></div>
          {/* Flame group 7 — far right */}
          <div className="flame-outer fo-7"></div>
          <div className="flame-mid fm-7"></div>
          <div className="flame-core fc-7"></div>
          {/* Sparks */}
          <div className="spark spark-1"></div>
          <div className="spark spark-2"></div>
          <div className="spark spark-3"></div>
          <div className="spark spark-4"></div>
          <div className="spark spark-5"></div>
          <div className="spark spark-6"></div>
          <div className="spark spark-7"></div>
          <div className="spark spark-8"></div>
          <div className="spark spark-9"></div>
          <div className="spark spark-10"></div>
          <div className="spark spark-11"></div>
          <div className="spark spark-12"></div>
        </div>
      
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-left">
              <h2 className="footer-heading">Your local<br />HVAC experts</h2>
      
              <p className="footer-hours-title">Working Hours:</p>
              <p className="footer-hours">
                Everyday: 8:00 AM - 7:00 PM
              </p>
      
              <p className="footer-service-title">Office Address:</p>
              <p className="footer-service-area">{city.service_area}</p>
      
              <div className="footer-bbb">
                <img src="https://seal-dallas.bbb.org/seals/blue-seal-293-61-whitetxt-bbb-91352067.png" alt="Premium Chimneys BBB Business Review" style={{ border: '0', maxWidth: '293px', width: '100%', height: 'auto', display: 'block', pointerEvents: 'none' }} />
              </div>
            </div>
      
            <div className="footer-right">
              <button className="footer-btn-book" onClick={(e) => { e.preventDefault(); if (typeof window !== 'undefined' && window.Calendly) { window.Calendly.initPopupWidget({ url: getCalendlyUrl('https://calendly.com/hello-ztry/inspection') }); } }}>
                Book Appointment
              </button>
              <a href={`tel:${city.phone}`} className="footer-btn-phone">{`
                ${city.phone_text}
              `}</a>
            </div>
          </div>
      
          <hr className="footer-divider" />
      
          <div className="footer-bottom">
            <p className="footer-copyright">Copyright &copy; 2025 Premium Air Ducts LLC</p>
      
            <div className="footer-bottom-right">
              <div className="footer-links">
                <a href="https://docs.google.com/document/d/e/2PACX-1vR-GTwWNbzTENL36Cpl_V3Dyqa1fuLOkXluQbgUYbs2rG4uN513fBjC8neVZ3_I1gEIxZ7ad3saVe0P/pub" className="footer-link" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                <a href="https://docs.google.com/document/d/e/2PACX-1vRgxxr8YVaGGSwl1rejEQR_GlLDZLAJC0GFbTLJTkTdViMXAhDzgub6gqqUibZ1Yuv2EIn2NsLngQp6/pub" className="footer-link" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
              </div>
      
              <div className="footer-socials">
                {/* Facebook */}
                <a href="https://www.facebook.com/p/Premium-Air-Ducts-61572997282616/" target="_blank" rel="noopener noreferrer">
                  <svg className="footer-social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                {/* X (Twitter) — display only */}
                <span aria-hidden="true" style={{ pointerEvents: 'none', cursor: 'default', display: 'inline-flex' }}>
                  <svg className="footer-social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </span>
                {/* Instagram — display only */}
                <span aria-hidden="true" style={{ pointerEvents: 'none', cursor: 'default', display: 'inline-flex' }}>
                  <svg className="footer-social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
