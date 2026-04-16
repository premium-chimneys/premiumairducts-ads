
'use client';

export default function Coupons({ city }) {
  return (
    <>

      
      
      
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Coupons Section</title>
      
      <style dangerouslySetInnerHTML={{__html: `
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
      
        /* ── Keyframes ── */
        @keyframes couponFloat{
          0%,100%{transform:translateY(0) rotate(var(--rot))}
          50%{transform:translateY(-8px) rotate(var(--rot))}
        }
        @keyframes scissorSnip{
          0%,100%{transform:rotate(0deg)}
          25%{transform:rotate(-8deg)}
          75%{transform:rotate(8deg)}
        }
        @keyframes badgeShine{
          0%{opacity:0;left:-50%}
          40%{opacity:.6}
          100%{opacity:0;left:150%}
        }
        @keyframes followTrail{
          0%{offset-distance:0%;opacity:0}
          5%{opacity:1}
          75%{opacity:1;offset-distance:97%}
          85%{opacity:0;offset-distance:97%}
          100%{opacity:0;offset-distance:0%}
        }
        @keyframes overlayIn{from{opacity:0}to{opacity:1}}
        @keyframes modalIn{from{opacity:0;transform:translateY(30px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes caseReveal{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
      
        /* ── Section ── */
        .cp-section{
          background:#f8fafc;
          padding:0 0 128px;
          font-family:'Inter Tight',sans-serif;
        }
        .cp-container{
          max-width:1200px;
          margin:0 auto;
          padding:0 24px;
          box-sizing:border-box;
        }
      
        /* ── Trail ── */
        .cp-trail{
          display:flex;
          justify-content:center;
          padding-bottom:72px;
        }
        .cp-trail-wrap{
          position:relative;
          width:200px;
          height:220px;
        }
        .cp-trail-svg{
          position:absolute;
          inset:0;
          width:200px;
          height:220px;
        }
        .cp-trail-dot{
          position:absolute;
          width:10px;
          height:10px;
          background:#2563eb;
          border-radius:50%;
          box-shadow:0 0 12px 4px rgba(37,99,235,.45);
          offset-path:path('M100 0 C100 40,160 50,160 80 C160 110,40 120,40 150 C40 180,100 190,100 220');
          animation:followTrail 4s ease-in-out infinite;
          z-index:1;
        }
        .cp-trail-arrow{
          position:absolute;
          bottom:0;
          left:50%;
          transform:translateX(-50%);
        }
        .cp-trail-text{
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          z-index:2;
          font-size:17px;
          font-weight:700;
          color:#2563eb;
          text-align:center;
          white-space:nowrap;
          pointer-events:none;
        }
      
        /* ── Grid ── */
        .cp-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
          margin-bottom:56px;
        }
      
        /* ── Coupon Card ── */
        .cp-card{
          --rot:0deg;
          position:relative;
          background:#fff;
          border:2px dashed #2563eb;
          border-radius:18px;
          box-shadow:0 4px 24px rgba(37,99,235,.12);
          animation:couponFloat 5s ease-in-out infinite;
          transition:transform .5s cubic-bezier(.16,1,.3,1), box-shadow .5s cubic-bezier(.16,1,.3,1), opacity .4s ease;
          display:flex;
          text-decoration:none;
          color:inherit;
          cursor:pointer;
          flex-direction:column;
          height:100%;
          -webkit-mask:
            radial-gradient(circle 10px at 0 50%, transparent 98%, #000 100%),
            radial-gradient(circle 10px at 100% 50%, transparent 98%, #000 100%);
          -webkit-mask-composite: source-in;
          mask:
            radial-gradient(circle 10px at 0 50%, transparent 98%, #000 100%),
            radial-gradient(circle 10px at 100% 50%, transparent 98%, #000 100%);
          mask-composite: intersect;
        }
        .cp-card-top{border-top-left-radius:16px;border-top-right-radius:16px}
        .cp-card-bottom{border-bottom-left-radius:16px;border-bottom-right-radius:16px}
        .cp-grid:hover .cp-card{opacity:.55}
        .cp-grid .cp-card:hover{
          opacity:1;
          box-shadow:0 12px 44px rgba(37,99,235,.28);
        }
      
      
        /* Top gradient */
        .cp-card-top{
          position:relative;
          padding:28px 20px 22px;
          text-align:center;
          color:#fff;
          overflow:hidden;
          background:
            radial-gradient(circle at 30% 25%, rgba(96,165,250,0.35) 0%, transparent 55%),
            radial-gradient(circle at 75% 80%, rgba(37,99,235,0.28) 0%, transparent 60%),
            linear-gradient(160deg, #0b0f18 0%, #101a30 45%, #152448 100%) !important;
        }
        .cp-card-top::after{
          content:'';
          position:absolute;
          inset:0;
          background:radial-gradient(circle at 20% 30%,rgba(255,255,255,.12) 1px,transparent 1px),
                     radial-gradient(circle at 80% 70%,rgba(255,255,255,.12) 1px,transparent 1px),
                     radial-gradient(circle at 50% 50%,rgba(255,255,255,.08) 1px,transparent 1px);
          background-size:24px 24px,30px 30px,18px 18px;
          pointer-events:none;
        }
        .cp-card-icon{font-size:36px;display:block;margin-bottom:6px;transform-origin:center;animation:cpIconBob 2.6s ease-in-out infinite}
        @keyframes cpIconBob{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-4px) rotate(4deg)}}
        .cp-card-amount{font-size:64px;font-weight:800;line-height:1}
        .cp-card-off{font-size:20px;font-weight:700;letter-spacing:2px;opacity:.85}
        .cp-card-service{font-size:16px;font-weight:600;margin-top:4px;opacity:.9}
      
        /* Shine sweep */
        .cp-card-shine{
          position:absolute;
          top:0;
          width:60%;
          height:100%;
          background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%);
          animation:badgeShine 4s ease-in-out infinite;
          pointer-events:none;
        }
      
        /* Separator */
        .cp-card-sep{
          border:none;
          border-top:2px dashed #d5e2f7;
          margin:0 20px;
        }
      
        /* Bottom */
        .cp-card-bottom{
          padding:18px 20px 22px;
          text-align:center;
          flex:1;
          display:flex;
          flex-direction:column;
          align-items:center;
        }
        .cp-card-desc{
          font-size:14px;
          color:#555;
          margin-bottom:12px;
          line-height:1.45;
          flex:1;
        }
        .cp-card-code-wrap{
          display:inline-flex;
          align-items:center;
          gap:8px;
        }
        .cp-card-code{
          display:inline-block;
          padding:6px 16px;
          border:2px dashed #2563eb;
          border-radius:8px;
          font-family:'Courier New',monospace;
          font-size:16px;
          font-weight:700;
          color:#2563eb;
          letter-spacing:1.5px;
          background:rgba(37,99,235,.04);
        }
        .cp-card-scissors{
          font-size:20px;
          animation:scissorSnip 1.8s ease-in-out infinite;
          display:inline-block;
        }
      
        /* ── Modal ── */
        .cp-overlay{
          display:none;
          position:fixed;
          inset:0;
          z-index:10000;
          font-family:'Inter Tight',sans-serif;
          background:rgba(0,0,0,0.7);
          backdrop-filter:blur(8px);
          -webkit-backdrop-filter:blur(8px);
          justify-content:center;
          align-items:center;
          flex-direction:column;
          animation:overlayIn .3s ease both;
          cursor:pointer;
        }
        .cp-overlay.cp-active{display:flex}
      
        .cp-modal-greeting{
          font-family:'Inter Tight',sans-serif;
          font-size:56px;
          font-weight:700;
          letter-spacing:-0.03em;
          color:#fff;
          margin-bottom:8px;
          text-align:center;
          animation:modalIn .45s ease both;
        }
        .cp-modal-sub{
          font-family:'Inter Tight',sans-serif;
          font-size:18px;
          color:rgba(255,255,255,.75);
          margin-bottom:32px;
          text-align:center;
          animation:modalIn .45s ease .08s both;
        }
      
        .cp-card.cp-modal-card{
          max-width:92vw;
          flex:0 0 auto;
          cursor:default;
          animation:modalIn .45s ease .16s both;
          box-shadow:0 12px 48px rgba(37,99,235,.25);
        }
        .cp-modal-card::before,
        .cp-modal-card::after{
          content:'';
          position:absolute;
          width:26px;
          height:26px;
          background:#10141e;
          border-radius:50%;
          top:50%;
          transform:translateY(-50%);
          z-index:2;
          box-shadow:inset 0 0 0 2px #2563eb;
        }
        .cp-modal-card::before{left:-14px}
        .cp-modal-card::after{right:-14px}
      
        .cp-modal-top{
          position:relative;
          padding:32px 24px 26px;
          text-align:center;
          color:#fff;
          overflow:hidden;
        }
        .cp-modal-top::after{
          content:'';
          position:absolute;
          inset:0;
          background:radial-gradient(circle at 20% 30%,rgba(255,255,255,.12) 1px,transparent 1px),
                     radial-gradient(circle at 80% 70%,rgba(255,255,255,.12) 1px,transparent 1px),
                     radial-gradient(circle at 50% 50%,rgba(255,255,255,.08) 1px,transparent 1px);
          background-size:24px 24px,30px 30px,18px 18px;
          pointer-events:none;
        }
        .cp-modal-icon{font-size:52px;display:block;margin-bottom:8px}
        .cp-modal-amount{font-size:80px;font-weight:800;line-height:1}
        .cp-modal-off{font-size:22px;font-weight:700;letter-spacing:2px;opacity:.85}
        .cp-modal-service{font-size:18px;font-weight:600;margin-top:6px;opacity:.9}
        .cp-modal-shine{
          position:absolute;
          top:0;
          width:60%;
          height:100%;
          background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%);
          animation:badgeShine 4s ease-in-out infinite;
          pointer-events:none;
        }
      
        .cp-modal-sep{
          border:none;
          border-top:2px dashed #d5e2f7;
          margin:0 24px;
        }
      
        .cp-modal-bottom{
          padding:22px 24px 28px;
          text-align:center;
        }
        .cp-modal-desc{
          font-size:15px;
          color:#555;
          margin-bottom:16px;
          line-height:1.5;
        }
        .cp-modal-code{
          display:inline-block;
          padding:10px 28px;
          border:2px dashed #2563eb;
          border-radius:10px;
          font-family:'Courier New',monospace;
          font-size:22px;
          font-weight:700;
          color:#2563eb;
          letter-spacing:2px;
          background:rgba(37,99,235,.04);
          margin-bottom:20px;
        }
        .cp-modal-btn{
          display:inline-block;
          padding:14px 36px;
          background:linear-gradient(135deg,#2563eb,#1d4ed8);
          color:#fff;
          font-family:'Inter Tight',sans-serif;
          font-size:17px;
          font-weight:700;
          border:none;
          border-radius:50px;
          text-decoration:none;
          cursor:pointer;
          transition:transform .2s,box-shadow .2s;
          box-shadow:0 4px 18px rgba(37,99,235,.3);
        }
        .cp-modal-btn:hover{
          transform:translateY(-2px);
          box-shadow:0 6px 24px rgba(37,99,235,.4);
        }
      
        .cp-modal-hint{
          margin-top:20px;
          font-size:14px;
          color:rgba(255,255,255,.5);
          animation:modalIn .45s ease .2s both;
        }
      
        /* ── CTA ── */
        .cp-cta{
          text-align:center;
          padding-top:8px;
        }
        .cp-cta-text{
          font-size:16px;
          color:#666;
          margin-bottom:16px;
        }
        .cp-cta-btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          font-family:'Inter Tight',sans-serif;
          font-size:15px;
          font-weight:600;
          color:#e0f0fd;
          text-decoration:none;
          padding:12px 24px;
          height:46px;
          box-sizing:border-box;
          border:1px solid #2563eb;
          border-radius:10px;
          background:linear-gradient(160deg,#5d9be5 0%,#2563eb 25%,#1e40af 50%,#1d4ed8 72%,#3b82f6 100%);
          box-shadow:inset 0 1px 0 rgba(155,196,240,.55),inset 0 -1px 0 rgba(0,0,0,.22),0 4px 16px rgba(29,78,216,.45);
          cursor:pointer;
          transition:all .22s ease;
          position:relative;
          overflow:hidden;
          text-shadow:0 1px 2px rgba(15,29,80,.35);
        }
        .cp-cta-btn::before{
          content:'';
          position:absolute;
          top:0;
          left:-70%;
          width:40%;
          height:100%;
          background:linear-gradient(105deg,transparent 35%,rgba(175,210,255,.35) 50%,transparent 65%);
          transform:skewX(-12deg);
          pointer-events:none;
          transition:left .55s ease;
        }
        .cp-cta-btn:hover{
          transform:translateY(-2px);
          box-shadow:inset 0 1px 0 rgba(155,196,240,.55),inset 0 -1px 0 rgba(0,0,0,.22),0 8px 24px rgba(29,78,216,.5);
        }
        .cp-cta-btn:hover::before{left:130%}
      
        /* ── Responsive ── */
        @media(max-width:960px){
          .cp-section{padding:0 0 80px}
          .cp-grid{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:600px){
          .cp-section{padding:0 0 80px}
          .cp-grid{grid-template-columns:1fr}
          .cp-card-amount{font-size:52px}
          .cp-modal-amount{font-size:64px}
          .cp-modal-card{width:340px}
        }
      `}} />
      
      
      
      <section className="cp-section">
        <div className="cp-container">
      
          {/* Trail */}
          <div className="cp-trail">
            <div className="cp-trail-wrap">
              <svg className="cp-trail-svg" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 0 C100 40,160 50,160 80 C160 110,40 120,40 150 C40 180,100 190,100 220" stroke="#2563eb" strokeWidth="2" strokeDasharray="8 8" opacity="0.2" fill="none" />
              </svg>
              <div className="cp-trail-dot"></div>
              <svg className="cp-trail-arrow" width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,14 0,0 20,0" fill="#2563eb" />
              </svg>
              <span className="cp-trail-text">Claim a discount to get started</span>
            </div>
          </div>
      
          {/* Coupon Grid */}
          <div className="cp-grid">
      
            {/* Card 1 */}
            <a href={`tel:${city.phone}`} className="cp-card" style={{ animationDelay: '0s' }}>
              <div className="cp-card-top" style={{ background: 'linear-gradient(135deg,#2563eb,#1d4ed8)' }}>
                <div className="cp-card-shine"></div>
                <span className="cp-card-icon">&#x1f525;</span>
                <div className="cp-card-amount">$49</div>
                <div className="cp-card-off">Off</div>
                <div className="cp-card-service">Dryer Vent Cleaning</div>
              </div>
              <hr className="cp-card-sep" />
              <div className="cp-card-bottom">
                <p className="cp-card-desc">Clear your dryer vent and eliminate the #1 home fire hazard.</p>
                <div className="cp-card-code-wrap">
                  <span className="cp-card-code">dryer49</span>
                  <span className="cp-card-scissors">&#x2702;&#xFE0F;</span>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a href={`tel:${city.phone}`} className="cp-card" style={{ animationDelay: '.6s' }}>
              <div className="cp-card-top" style={{ background: 'linear-gradient(135deg,#5d9be5,#2563eb)' }}>
                <div className="cp-card-shine"></div>
                <span className="cp-card-icon">&#x2744;&#xFE0F;</span>
                <div className="cp-card-amount">$25</div>
                <div className="cp-card-off">Off</div>
                <div className="cp-card-service">AC Repair</div>
              </div>
              <hr className="cp-card-sep" />
              <div className="cp-card-bottom">
                <p className="cp-card-desc">Save $25 on any AC repair service — any brand, any issue.</p>
                <div className="cp-card-code-wrap">
                  <span className="cp-card-code">ac25</span>
                  <span className="cp-card-scissors">&#x2702;&#xFE0F;</span>
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <a href={`tel:${city.phone}`} className="cp-card" style={{ animationDelay: '1.2s' }}>
              <div className="cp-card-top" style={{ background: 'linear-gradient(135deg,#1d4ed8,#1e40af)' }}>
                <div className="cp-card-shine"></div>
                <span className="cp-card-icon">&#x2728;</span>
                <div className="cp-card-amount">10%</div>
                <div className="cp-card-off">Off</div>
                <div className="cp-card-service">New Customers</div>
              </div>
              <hr className="cp-card-sep" />
              <div className="cp-card-bottom">
                <p className="cp-card-desc">First-time customers get 10% off any service we offer.</p>
                <div className="cp-card-code-wrap">
                  <span className="cp-card-code">welcome10</span>
                  <span className="cp-card-scissors">&#x2702;&#xFE0F;</span>
                </div>
              </div>
            </a>
      
          </div>
      
          {/* CTA */}
          <div className="cp-cta">
            <p className="cp-cta-text">Mention your coupon code when you call to redeem.</p>
            <a href={`tel:${city.phone}`} className="cp-cta-btn">{`Call to Redeem: ${city.phone_text}`}</a>
          </div>
      
        </div>
      </section>
      
    </>
  );
}
